"use client";

import React, { useEffect, useRef, useState } from "react";
import { Sparkles, ShieldCheck, User, ExternalLink, Clipboard, Check, Lock, Smartphone } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import { showcaseFeatures, type ShowcaseFeature } from "../data/featureShowcaseData";

/**
 * ─── GIF Card with lazy-loading + skeleton ───
 * Uses Intersection Observer to only load GIF src when card enters viewport.
 * Shows a shimmer skeleton placeholder until the GIF is loaded.
 */
function GifCard({ feature, index }: { feature: ShowcaseFeature; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [shouldLoad, setShouldLoad] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [videoError, setVideoError] = useState(false);

  // Lazy-load: only set src when card is near viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShouldLoad(true);
            if (cardRef.current) observer.unobserve(cardRef.current);
          }
        });
      },
      { threshold: 0.05, rootMargin: "200px 0px" }
    );

    const currentRef = cardRef.current;
    if (currentRef) observer.observe(currentRef);

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);

  return (
    <figure
      ref={cardRef}
      className="relative overflow-hidden rounded-xl border border-zinc-800/80 bg-zinc-950 shadow-2xl group"
    >
      {/* Browser chrome mockup */}
      <div className="h-7 bg-zinc-900/50 border-b border-zinc-800/60 px-3 flex items-center justify-between">
        <div className="flex gap-1.5">
          <span className="w-2 h-2 rounded-full bg-red-500/50" />
          <span className="w-2 h-2 rounded-full bg-yellow-500/50" />
          <span className="w-2 h-2 rounded-full bg-green-500/50" />
        </div>
        <span className="text-[9px] text-zinc-600 font-mono truncate max-w-[180px]">
          app.stems.ir — {feature.title}
        </span>
        <div className="w-12" />
      </div>

      {/* GIF content area with skeleton */}
      <div className="relative w-full aspect-[1920/914] overflow-hidden bg-zinc-950">
        {/* Skeleton shimmer shown until GIF loads */}
        {!isLoaded && (
          <div className="absolute inset-0 skeleton-shimmer flex items-center justify-center">
            <div className="flex flex-col items-center gap-3">
              <div className="w-8 h-8 rounded-full border-2 border-[#d97756]/30 border-t-[#d97756] animate-spin" />
              <span className="text-[10px] text-zinc-600 font-body-ir">در حال بارگذاری...</span>
            </div>
          </div>
        )}

        {shouldLoad && (
          feature.mediaUrl.endsWith(".mp4") || feature.mediaUrl.endsWith(".webm") ? (
            <video
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              onCanPlay={() => setIsLoaded(true)}
              onError={() => setVideoError(true)}
              className={`w-full h-full object-cover transition-opacity duration-500 ${
                isLoaded ? "opacity-100" : "opacity-0"
              }`}
            >
              <source src={feature.mediaUrl} type={feature.mediaUrl.endsWith(".webm") ? "video/webm" : "video/mp4"} />
            </video>
          ) : (
            /* eslint-disable-next-line @next/next/no-img-element */
            <img
              src={feature.mediaUrl}
              alt={feature.title}
              onLoad={() => setIsLoaded(true)}
              className={`w-full h-full object-cover transition-opacity duration-500 ${
                isLoaded ? "opacity-100" : "opacity-0"
              }`}
            />
          )
        )}
      </div>

      {/* Figure caption (hidden visually, for accessibility) */}
      <figcaption className="sr-only">{feature.description}</figcaption>
    </figure>
  );
}

/**
 * ─── Timeline Item with directional reveal ───
 * Each item alternates between left and right on desktop.
 * On mobile, all items stack vertically with timeline on the right edge (RTL).
 */
function TimelineItem({ feature, index }: { feature: ShowcaseFeature; index: number }) {
  const itemRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const isEven = index % 2 === 0;

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            if (itemRef.current) observer.unobserve(itemRef.current);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px" }
    );

    const currentRef = itemRef.current;
    if (currentRef) observer.observe(currentRef);

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);

  const Icon = feature.icon;

  // Convert index to Persian numeral
  const persianDigits = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
  const stepNumber = String(index + 1)
    .split("")
    .map((d) => persianDigits[parseInt(d)])
    .join("");

  return (
    <div
      ref={itemRef}
      className="relative grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-6 lg:gap-10 items-center"
    >
      {/* ─── Timeline Center Column (dot + connector) ─── */}
      <div className="hidden lg:flex flex-col items-center order-2 self-stretch relative">
        <div className={`timeline-dot ${isVisible ? "active" : ""}`}>
          <span className="text-[11px] font-bold text-[#d97756] font-heading">
            {stepNumber}
          </span>
        </div>
      </div>

      {/* ─── Content Side (text) ─── */}
      <div
        className={`${
          isEven ? "lg:order-1 lg:text-right" : "lg:order-3 lg:text-right"
        } ${
          isVisible
            ? isEven
              ? "reveal-from-right active"
              : "reveal-from-left active"
            : isEven
            ? "reveal-from-right"
            : "reveal-from-left"
        }`}
        style={{ transitionDelay: `${100}ms` }}
      >
        {/* Mobile timeline dot + step */}
        <div className="flex lg:hidden items-center gap-3 mb-4">
          <div className={`timeline-dot !w-9 !h-9 ${isVisible ? "active" : ""}`}>
            <span className="text-[10px] font-bold text-[#d97756] font-heading">
              {stepNumber}
            </span>
          </div>
          <div className="h-px flex-1 bg-gradient-to-l from-transparent to-[#d97756]/20" />
        </div>

        <div className="pixel-card p-6 lg:p-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-lg bg-zinc-950/60 border border-zinc-900 flex items-center justify-center text-[#d97756] shadow-inner flex-shrink-0">
              <Icon className="w-5 h-5" />
            </div>
            <h3 className="text-sm lg:text-base font-bold text-white font-heading">
              {feature.title}
            </h3>
          </div>

          <p className="text-[11px] lg:text-xs text-[#9e978e] leading-relaxed font-body-ir">
            {feature.description}
          </p>
        </div>
      </div>

      {/* ─── Media Side (GIF) ─── */}
      <div
        className={`${
          isEven ? "lg:order-3" : "lg:order-1"
        } ${
          isVisible
            ? isEven
              ? "reveal-from-left active"
              : "reveal-from-right active"
            : isEven
            ? "reveal-from-left"
            : "reveal-from-right"
        }`}
        style={{ transitionDelay: `${200}ms` }}
      >
        <GifCard feature={feature} index={index} />
      </div>
    </div>
  );
}

/**
 * ─── CredentialCards ───
 * Two side-by-side cards showing demo login credentials for Admin and User panels.
 */
function CredentialCards() {
  const [copied, setCopied] = useState("");

  const copyText = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopied(key);
    setTimeout(() => setCopied(""), 2000);
  };

  const CopyButton = ({ text, id }: { text: string; id: string }) => (
    <button
      onClick={() => copyText(text, id)}
      className="text-[#9e978e] hover:text-[#d97756] transition-colors cursor-pointer p-1 flex-shrink-0"
      title="کپی"
    >
      {copied === id ? (
        <Check className="w-3.5 h-3.5 text-emerald-400" />
      ) : (
        <Clipboard className="w-3.5 h-3.5" />
      )}
    </button>
  );

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12 lg:mt-16">
      {/* Admin Panel Card */}
      <ScrollReveal delay={100}>
        <div className="credential-card h-full">
          {/* Card header */}
          <div className="flex items-center gap-3 mb-5 pb-4 border-b border-zinc-800/60">
            <div className="w-10 h-10 rounded-xl bg-[#d97756]/10 border border-[#d97756]/25 flex items-center justify-center shadow-[0_0_15px_rgba(217,119,86,0.1)]">
              <ShieldCheck className="w-5 h-5 text-[#d97756]" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white font-heading">ورود به ادمین پنل</h4>
              <span className="text-[10px] text-[#9e978e] font-body-ir">مدیریت کامل سیستم و محتوا</span>
            </div>
            <a
              href="https://app.stems.ir/admin/login"
              target="_blank"
              rel="noopener noreferrer"
              className="mr-auto w-8 h-8 rounded-lg bg-zinc-950 border border-zinc-800 flex items-center justify-center text-zinc-500 hover:text-[#d97756] hover:border-[#d97756]/30 transition-all cursor-pointer"
              title="باز کردن صفحه ورود ادمین"
            >
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Credentials */}
          <div className="space-y-3">
            <div className="credential-field">
              <Lock className="w-3.5 h-3.5 text-[#d97756] flex-shrink-0" />
              <span className="text-[10px] text-zinc-500 font-bold flex-shrink-0">آدرس:</span>
              <span className="text-[11px] font-mono text-zinc-300 truncate" dir="ltr">app.stems.ir/admin/login</span>
              <CopyButton text="https://app.stems.ir/admin/login" id="admin-url" />
            </div>
            <div className="credential-field">
              <User className="w-3.5 h-3.5 text-[#d97756] flex-shrink-0" />
              <span className="text-[10px] text-zinc-500 font-bold flex-shrink-0">ایمیل:</span>
              <span className="text-[11px] font-mono text-zinc-300" dir="ltr">admin1@admin1.com</span>
              <CopyButton text="admin1@admin1.com" id="admin-email" />
            </div>
            <div className="credential-field">
              <Lock className="w-3.5 h-3.5 text-[#d97756] flex-shrink-0" />
              <span className="text-[10px] text-zinc-500 font-bold flex-shrink-0">رمز عبور:</span>
              <span className="text-[11px] font-mono text-zinc-300" dir="ltr">admin123</span>
              <CopyButton text="admin123" id="admin-pass" />
            </div>
          </div>
        </div>
      </ScrollReveal>

      {/* User Dashboard Card */}
      <ScrollReveal delay={200}>
        <div className="credential-card h-full">
          {/* Card header */}
          <div className="flex items-center gap-3 mb-5 pb-4 border-b border-zinc-800/60">
            <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/25 flex items-center justify-center shadow-[0_0_15px_rgba(168,85,247,0.1)]">
              <User className="w-5 h-5 text-purple-400" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white font-heading">ورود به یوزر داشبورد</h4>
              <span className="text-[10px] text-[#9e978e] font-body-ir">با هر شماره‌ای می‌توانید ثبت‌نام کنید</span>
            </div>
            <a
              href="https://app.stems.ir/user/login"
              target="_blank"
              rel="noopener noreferrer"
              className="mr-auto w-8 h-8 rounded-lg bg-zinc-950 border border-zinc-800 flex items-center justify-center text-zinc-500 hover:text-purple-400 hover:border-purple-500/30 transition-all cursor-pointer"
              title="باز کردن صفحه ورود کاربر"
            >
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Credentials */}
          <div className="space-y-3">
            <div className="credential-field">
              <Lock className="w-3.5 h-3.5 text-purple-400 flex-shrink-0" />
              <span className="text-[10px] text-zinc-500 font-bold flex-shrink-0">آدرس:</span>
              <span className="text-[11px] font-mono text-zinc-300 truncate" dir="ltr">app.stems.ir/user/login</span>
              <CopyButton text="https://app.stems.ir/user/login" id="user-url" />
            </div>
            <div className="credential-field">
              <Smartphone className="w-3.5 h-3.5 text-purple-400 flex-shrink-0" />
              <span className="text-[10px] text-zinc-500 font-bold flex-shrink-0">شماره:</span>
              <span className="text-[11px] font-mono text-zinc-300" dir="ltr">09111111111</span>
              <CopyButton text="09111111111" id="user-phone" />
            </div>
            <div className="credential-field">
              <Lock className="w-3.5 h-3.5 text-purple-400 flex-shrink-0" />
              <span className="text-[10px] text-zinc-500 font-bold flex-shrink-0">رمز عبور:</span>
              <span className="text-[11px] font-mono text-zinc-300" dir="ltr">test123</span>
              <CopyButton text="test123" id="user-pass" />
            </div>
          </div>
        </div>
      </ScrollReveal>
    </div>
  );
}

/**
 * ─── FeatureShowcase ───
 * Main section component: Vertical timeline with alternating GIF + text cards.
 * Replaces the former MiniBrowse component.
 */
export default function FeatureShowcase() {
  return (
    <section
      id="feature-showcase"
      className="py-24 md:py-32 bg-[#141312]/60 relative z-10 border-b border-[#d97756]/15"
      aria-label="نمایش ویژگی‌های محصول مدیافای"
    >
      {/* Ambient glow */}
      <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-[#d97756]/4 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/3 w-[300px] h-[300px] bg-purple-500/3 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        {/* ─── Section Header ─── */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <ScrollReveal delay={100}>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-md border border-[#d97756]/30 bg-[#d97756]/5 text-[#d97756] mb-6 shadow-[0_0_15px_rgba(217,119,86,0.08)]">
              <Sparkles className="w-3.5 h-3.5 animate-pulse" />
              <span className="font-arcade text-[8px] tracking-wider uppercase pt-0.5">
                FEATURE SHOWCASE / PRODUCT TOUR
              </span>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-[#fbfaf7] mb-6 font-heading">
              تور ویژگی‌های محصول
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={300}>
            <p className="text-xs md:text-sm text-[#9e978e] leading-relaxed font-body-ir">
              هر بخش از سیستم مدیافای را به صورت زنده مشاهده کنید. از صفحه اصلی سایت تا پنل مدیریت و تنظیمات پیشرفته — تمامی ویژگی‌ها با تصاویر متحرک واقعی از محیط اجرایی ضبط شده‌اند.
            </p>
          </ScrollReveal>
        </div>

        {/* ─── Timeline ─── */}
        <div className="relative">
          {/* Central vertical line (desktop only) */}
          <div className="timeline-line hidden lg:block left-1/2 -translate-x-1/2" />

          {/* Timeline items */}
          <div className="space-y-16 lg:space-y-24">
            {showcaseFeatures.map((feature, index) => (
              <TimelineItem key={feature.id} feature={feature} index={index} />
            ))}
          </div>
        </div>

        {/* ─── Bottom CTA ─── */}
        <ScrollReveal delay={200}>
          <div className="text-center mt-20 lg:mt-28">
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-lg pixel-card">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-xs font-bold text-white font-body-ir">
                تمامی ویژگی‌ها آماده استفاده هستند — نسخه دمو زنده را امتحان کنید
              </span>
            </div>
          </div>
        </ScrollReveal>

        {/* ─── Demo Credential Cards ─── */}
        <CredentialCards />
      </div>
    </section>
  );
}
