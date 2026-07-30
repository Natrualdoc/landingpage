"use client";

import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Features from "../components/Features";
import FeatureShowcase from "../components/FeatureShowcase";
import Footer from "../components/Footer";
import ScrollReveal from "../components/ScrollReveal";
import { Server, Zap, Globe, Cpu, Terminal, Sparkles } from "lucide-react";

// Dynamically import ThreeBg to render globally as a fixed backdrop
const ThreeBg = dynamic(() => import("../components/ThreeBg"), { ssr: false });

export default function Home() {
  const [scrollProgress, setScrollProgress] = useState(0);

  // Monitor scroll progress to dynamically update section-based glow styles
  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = scrollHeight > 0 ? window.scrollY / scrollHeight : 0;
      setScrollProgress(progress);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Determine current active glow color based on scroll depth
  let glowColor = "rgba(217, 119, 86, 0.06)"; // Clay (Hero)
  if (scrollProgress >= 0.25 && scrollProgress < 0.5) {
    glowColor = "rgba(251, 250, 247, 0.04)"; // Sand (Features)
  } else if (scrollProgress >= 0.5 && scrollProgress < 0.75) {
    glowColor = "rgba(168, 85, 247, 0.08)"; // Violet (Screenshots)
  } else if (scrollProgress >= 0.75) {
    glowColor = "rgba(16, 185, 129, 0.08)"; // Emerald (Technical specs)
  }

  const specs = [
    {
      title: "Next.js 16 (App Router)",
      desc: "پیاده‌سازی رندرینگ سمت سرور (SSR) برای جزئیات فیلم‌ها جهت سئوی بی‌نظیر و بارگذاری لحظه‌ای صفحات.",
      icon: Cpu,
    },
    {
      title: "React 19 Core Engine",
      desc: "هسته اصلی تعاملی وب‌سایت، پلیر پیشرفته پخش ویدیو HLS و مدیریت استیت داشبوردهای مدیریت.",
      icon: Zap,
    },
    {
      title: "دیتابیس بهینه MySQL 8",
      desc: "طراحی بهینه جداول پایگاه‌داده رابطه‌ای جهت نگهداری تراکنش‌ها، صورت‌حساب‌ها و اطلاعات فیلم‌ها.",
      icon: Server,
    },
    {
      title: "سئوی اتوماتیک سرور ساید",
      desc: "رعایت صد درصدی ساختارهای گوگل، نقشه‌های سایت داینامیک و تگ‌های متادیتای پیشرفته برای سئو.",
      icon: Globe,
    },
  ];

  // Technical stacks with official high-fidelity SVG paths and detailed script integration descriptions
  const techStacks = [
    {
      name: "Next.js 16",
      desc: "رندرینگ سرور ساید و بهینه‌سازی بارگذاری صفحات",
      svg: (
        <svg viewBox="0 0 180 180" className="w-5 h-5 fill-white">
          <path d="M149 135L82 48H68v84h10V62l61 80c4-2 7-5 10-7zM90 140c27 0 50-18 57-43l-67-89H68v132h10v-30h12z" />
        </svg>
      ),
    },
    {
      name: "React 19",
      desc: "مدیریت استیت‌ها و کامپوننت‌های تعاملی VOD",
      svg: (
        <svg viewBox="-11.5 -10.23174 23 20.46348" className="w-5 h-5 fill-none stroke-[#61dafb]" strokeWidth="1.8">
          <circle cx="0" cy="0" r="2.05" fill="#61dafb" />
          <g>
            <ellipse rx="11" ry="4.2" />
            <ellipse rx="11" ry="4.2" transform="rotate(60)" />
            <ellipse rx="11" ry="4.2" transform="rotate(120)" />
          </g>
        </svg>
      ),
    },
    {
      name: "Tailwind CSS v4",
      desc: "استایل‌دهی شیشه‌ای مایع و طراحی کاملاً ریسپانسیو",
      svg: (
        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-[#38bdf8]">
          <path d="M12 6.036c-2.4 0-4.224.81-5.472 2.43-1.248 1.62-1.344 3.402-.288 5.346 1.056 1.944 2.832 2.754 5.328 2.43 1.968-.255 3.384-.969 4.248-2.145 1.104-1.5 1.056-3.255-.144-5.265-1.2-2.01-2.472-2.796-3.672-2.796zm0-5.4c-2.4 0-4.224.81-5.472 2.43-1.248 1.62-1.344 3.402-.288 5.346 1.056 1.944 2.832 2.754 5.328 2.43 1.968-.255 3.384-.969 4.248-2.145 1.104-1.5 1.056-3.255-.144-5.265-1.2-2.01-2.472-2.796-3.672-2.796z" />
        </svg>
      ),
    },
    {
      name: "MySQL 8",
      desc: "پایگاه‌داده رابطه‌ای ذخیره‌سازی فیلم‌ها، کاربران و تراکنش‌ها",
      svg: (
        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-[#00758f]">
          <path d="M12 2C6.48 2 2 4.02 2 6.5s4.48 4.5 10 4.5 10-2.02 10-4.5S17.52 2 12 2zm0 6.5c-4.41 0-8-1.12-8-2.5s3.59-2.5 8-2.5 8 1.12 8 2.5-3.59 2.5-8 2.5zm0 4.5c-5.52 0-10-2.02-10-4.5V11c0 2.48 4.48 4.5 10 4.5s10-2.02 10-4.5V8.5c0 2.48-4.48 4.5-10 4.5zm0 4.5c-5.52 0-10-2.02-10-4.5V15.5c0 2.48 4.48 4.5 10 4.5s10-2.02 10-4.5v-2.5c0 2.48-4.48 4.5-10 4.5z" />
        </svg>
      ),
    },
    {
      name: "Three.js",
      desc: "پیاده‌سازی بک‌گراند زنده ۳ بعدی وکسل متحرک با اسکرول",
      svg: (
        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white stroke-white" strokeWidth="1.5">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
        </svg>
      ),
    },
    {
      name: "TypeScript",
      desc: "ایمنی انواع داده‌ها در وب‌سایت و درگاه‌های زرین‌پال",
      svg: (
        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-[#3178c6]">
          <path d="M1.5 1.5h21v21h-21zm14.37 13.91c.07.72.63 1.25 1.51 1.25.96 0 1.48-.48 1.48-1.5v-6.95h2.15v7c0 2.15-1.28 3.32-3.6 3.32-2.22 0-3.52-1.07-3.71-3.12zm-8.81-.59c.14 1.49 1.47 2.44 3.36 2.44 1.77 0 3.03-.89 3.03-2.19 0-1.22-.84-1.84-2.52-2.53l-.84-.34c-1.42-.58-2.07-1.23-2.07-2.3 0-1.29 1.15-2.14 2.76-2.14 1.71 0 2.78.85 2.92 2.37H9.72c-.11-.79-.69-1.22-1.57-1.22-.87 0-1.39.42-1.39 1.1 0 .74.49 1.14 1.83 1.7l.84.34c2.01.81 2.9 1.57 2.9 2.94 0 1.62-1.29 2.68-3.41 2.68-2.29 0-3.68-1.12-3.87-3.22z" />
        </svg>
      ),
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-[#141312] text-[#fbfaf7] overflow-x-hidden transition-colors duration-1000">
      
      {/* Scroll-morphing 3D Voxel Mascot backdrop */}
      <ThreeBg />

      {/* Dynamic background glow colored by active section */}
      <div 
        style={{ backgroundColor: glowColor }}
        className="fixed inset-0 w-full h-full pointer-events-none blur-[150px] transition-colors duration-1000 -z-10" 
      />

      {/* Floating capsule pill navigation bar */}
      <Header />

      <main className="flex-1">
        
        {/* Central Hero Column + Iframe Console Piece */}
        <Hero />

        {/* Bento Grid key features section */}
        <Features />

        {/* Feature Showcase — Vertical timeline with animated GIF demos */}
        <FeatureShowcase />

        {/* Tech stacks — static grid showcase */}
        <section className="py-16 md:py-24 border-b border-[#d97756]/15 relative z-10 bg-[#141312]">
          <div className="max-w-7xl mx-auto px-6 mb-12 text-center">
            <ScrollReveal delay={100}>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md border border-[#d97756]/30 bg-[#d97756]/5 text-[#d97756] mb-4">
                <Sparkles className="w-3 h-3 animate-pulse" />
                <span className="font-arcade text-[7px] tracking-wider uppercase pt-0.5">
                  CORE INFRASTRUCTURE / TECHNOLOGY
                </span>
              </div>
              <h3 className="text-xl md:text-2xl font-black text-white mt-1">توسعه یافته بر پایه استانداردهای نوین</h3>
            </ScrollReveal>
          </div>
          
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {techStacks.map((tech, idx) => (
                <ScrollReveal key={idx} delay={100 + idx * 50}>
                  <div className="flex items-center gap-4 px-6 py-5 rounded-xl bg-zinc-950/80 border border-zinc-800/80 text-zinc-300 shadow-lg hover:border-[#d97756]/25 transition-all duration-300 cursor-pointer group">
                    <div className="w-11 h-11 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center flex-shrink-0 group-hover:border-[#d97756]/30 transition-colors">
                      <span className="flex-shrink-0">{tech.svg}</span>
                    </div>
                    <div className="flex flex-col text-right">
                      <span className="text-sm font-bold font-sans text-white">{tech.name}</span>
                      <span className="text-zinc-500 text-[10px] font-semibold font-sans mt-0.5 leading-relaxed">{tech.desc}</span>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Technical Specs & Automatic Installer Steps */}
        <section id="whats-new" className="py-20 md:py-28 bg-[#141312] border-b border-[#d97756]/15 relative z-10">
          <div className="max-w-7xl mx-auto px-6">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              {/* Text Specs List */}
              <div className="lg:col-span-7 space-y-8">
                <ScrollReveal delay={100}>
                  <div>
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded border border-[#d97756]/20 bg-[#d97756]/5 text-[#d97756] text-[10px] font-bold mb-4 font-pixel-badge">
                      <Terminal className="w-3.5 h-3.5" />
                      <span>SPECIFICATIONS AND SYSTEM CORE</span>
                    </div>
                    <h2 className="text-2xl md:text-4xl font-bold tracking-tight text-white font-sans">
                      معماری فنی توسعه و استقرار
                    </h2>
                  </div>
                </ScrollReveal>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
                  {specs.map((spec, i) => (
                    <ScrollReveal key={i} delay={100 + i * 50}>
                      <div className="flex gap-4">
                        <div className="flex-shrink-0 w-9 h-9 rounded bg-zinc-950 border border-zinc-900 flex items-center justify-center text-[#d97756] shadow-inner">
                          <spec.icon className="w-4 h-4" />
                        </div>
                        <div className="space-y-1">
                          <h3 className="font-bold text-xs text-white">{spec.title}</h3>
                          <p className="text-[10px] text-[#9e978e] leading-relaxed">{spec.desc}</p>
                        </div>
                      </div>
                    </ScrollReveal>
                  ))}
                </div>
              </div>

              {/* Graphical Server Box Shell */}
              <div className="lg:col-span-5 w-full">
                <ScrollReveal delay={300}>
                  <div className="p-6 relative overflow-hidden pixel-card">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-[#d97756]/5 rounded-full blur-2xl pointer-events-none" />
                    
                    <h3 className="font-bold text-xs text-white mb-4 flex items-center gap-2 border-b border-zinc-800 pb-3">
                      <Terminal className="w-4 h-4 text-[#d97756]" />
                      <span>مراحل راه‌اندازی با نصب‌کننده خودکار</span>
                    </h3>
                    
                    <div className="space-y-4">
                      <div className="flex gap-3">
                        <span className="w-5 h-5 rounded bg-[#d97756]/10 text-[#d97756] flex items-center justify-center text-[10px] font-bold border border-[#d97756]/20">۱</span>
                        <div className="space-y-0.5">
                          <div className="text-xs font-bold text-white">اتصال دیتابیس MySQL</div>
                          <div className="text-[10px] text-[#9e978e]">تعیین هاست، نام کاربری و پسورد دیتابیس</div>
                        </div>
                      </div>

                      <div className="flex gap-3">
                        <span className="w-5 h-5 rounded bg-[#d97756]/10 text-[#d97756] flex items-center justify-center text-[10px] font-bold border border-[#d97756]/20">۲</span>
                        <div className="space-y-0.5">
                          <div className="text-xs font-bold text-white">ساخت اکانت ارشد ادمین</div>
                          <div className="text-[10px] text-[#9e978e]">ثبت ایمیل و کلمه عبور مدیر کل سیستم</div>
                        </div>
                      </div>

                      <div className="flex gap-3">
                        <span className="w-5 h-5 rounded bg-[#d97756]/10 text-[#d97756] flex items-center justify-center text-[10px] font-bold border border-[#d97756]/20">۳</span>
                        <div className="space-y-0.5">
                          <div className="text-xs font-bold text-white">پیکربندی هویت سایت</div>
                          <div className="text-[10px] text-[#9e978e]">تنظیم نام برند، لوگو، کلیدهای دسترسی API</div>
                        </div>
                      </div>
                    </div>

                    <div className="mt-6 pt-4 border-t border-zinc-900/60 flex items-center justify-between">
                      <span className="text-[10px] text-zinc-550">آماده برای استقرار سریع روی PaaS</span>
                      <span className="text-[10px] font-bold text-emerald-500 flex items-center gap-0.5 animate-pulse">
                        ✓ تست لود ۱۰۰٪ موفق
                      </span>
                    </div>

                  </div>
                </ScrollReveal>
              </div>

            </div>

          </div>
        </section>

      </main>

      {/* Footer Section */}
      <Footer />

    </div>
  );
}
