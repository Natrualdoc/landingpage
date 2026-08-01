"use client";

import React, { useRef, useState, useEffect } from "react";
import { Sparkles, Smartphone, Award, Cpu, ShieldCheck } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

export default function MobileShowcase() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [shouldLoad, setShouldLoad] = useState(false);
  const [iframeSrc, setIframeSrc] = useState("http://localhost:3000");
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShouldLoad(true);
            if (sectionRef.current) observer.unobserve(sectionRef.current);
          }
        });
      },
      { threshold: 0.05, rootMargin: "200px 0px" }
    );

    const currentRef = sectionRef.current;
    if (currentRef) observer.observe(currentRef);

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const hostname = window.location.hostname;
      if (hostname !== "localhost" && hostname !== "127.0.0.1") {
        setIframeSrc("/");
      }
    }
  }, []);

  const features = [
    {
      title: "پخش هوشمند سازگار با موبایل",
      desc: "پلیر اختصاصی بهینه‌شده برای صفحات لمسی با کنترل‌های حرکتی صدا و روشنایی، قفل صفحه و تغییر کیفیت هوشمند.",
      icon: Award,
    },
    {
      title: "رابط کاربری کاملاً ریسپانسیو VOD",
      desc: "طراحی مدرن منوی ناوبری پایینی مشابه اپلیکیشن‌های بومی نظیر نتفلیکس با دسترسی آسان به جستجو و پنل کاربری.",
      icon: Smartphone,
    },
    {
      title: "سرعت لود فوق‌العاده سریع",
      desc: "کاهش حجم المان‌ها و فشرده‌سازی خودکار تصاویر متحرک به منظور لود سریع روی بستر اینترنت موبایل (4G/5G).",
      icon: Cpu,
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="mobile-showcase"
      className="py-24 md:py-32 bg-[#141312] relative z-10 border-b border-[#d97756]/15 overflow-hidden"
    >
      {/* Background glow effects */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[450px] h-[450px] bg-purple-500/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[350px] h-[350px] bg-[#d97756]/4 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Text Content (Left side in English, Right side in RTL Persian layout) */}
          <div className="lg:col-span-7 order-2 lg:order-1 space-y-8 text-right">
            <ScrollReveal delay={100}>
              <div>
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-md border border-purple-500/30 bg-purple-500/5 text-purple-400 mb-6 shadow-[0_0_15px_rgba(168,85,247,0.08)]">
                  <Sparkles className="w-3.5 h-3.5 animate-pulse" />
                  <span className="font-arcade text-[8px] tracking-wider uppercase pt-0.5">
                    MOBILE OPTIMIZATION / MOBILE-FIRST DESIGN
                  </span>
                </div>
                <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white font-heading">
                  تجربه تماشای بی‌‌نقص در موبایل
                </h2>
                <p className="text-xs md:text-sm text-[#9e978e] leading-relaxed mt-4 font-body-ir max-w-2xl">
                  پلتفرم مدیافای به صورت ویژه برای تماشا در موبایل بهینه‌سازی شده است. از ساختار ریسپانسیو داینامیک تا دکمه‌های کنترلی لمسی، همه چیز آماده است تا کاربران بهترین تجربه را روی تلفن‌های همراه داشته باشند.
                </p>
              </div>
            </ScrollReveal>

            <div className="space-y-6 pt-4">
              {features.map((feat, idx) => (
                <ScrollReveal key={idx} delay={200 + idx * 50}>
                  <div className="flex gap-4 items-start">
                    <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-zinc-950/80 border border-zinc-900 flex items-center justify-center text-purple-400 shadow-inner">
                      <feat.icon className="w-5 h-5" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="font-bold text-xs text-white">{feat.title}</h3>
                      <p className="text-[10px] text-[#9e978e] leading-relaxed max-w-xl">{feat.desc}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>

          {/* Premium CSS Phone Bezel Mockup */}
          <div className="lg:col-span-5 order-1 lg:order-2 flex flex-col items-center justify-center">
            <ScrollReveal delay={300}>
              <div className="relative mx-auto w-[280px] h-[560px] bg-black rounded-[42px] border-[10px] border-zinc-800 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.8),0_0_40px_rgba(168,85,247,0.1)] overflow-hidden">
                
                {/* iPhone Dynamic Island */}
                <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-20 h-4 bg-black rounded-full z-30 flex items-center justify-end px-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-zinc-900 border border-zinc-800" />
                </div>

                {/* Inner Screen */}
                <div className="relative w-full h-full bg-zinc-950 overflow-hidden">
                  {shouldLoad ? (
                    <iframe
                      src={iframeSrc}
                      title="Mediafy Mobile Demo"
                      className="w-full h-full border-none bg-zinc-950"
                      style={{ scrollbarWidth: "none" }}
                    />
                  ) : (
                    <div className="absolute inset-0 bg-zinc-900 flex items-center justify-center">
                      <div className="w-8 h-8 rounded-full border-2 border-purple-500/30 border-t-purple-500 animate-spin" />
                    </div>
                  )}

                  {/* Refraction Reflection Overlay */}
                  <div className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-transparent via-white/[0.01] to-white/[0.04] z-20" />
                </div>

                {/* Phone Speaker line */}
                <div className="absolute top-1 left-1/2 -translate-x-1/2 w-10 h-1 bg-zinc-900 rounded-full z-30" />
              </div>
            </ScrollReveal>
            <span className="text-[10px] text-zinc-500 font-body-ir mt-4 text-center">
              (نسخه زنده و تعاملی موبایل - می‌توانید داخل فریم اسکرول کنید)
            </span>
          </div>

        </div>
      </div>
    </section>
  );
}
