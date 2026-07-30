"use client";

import React from "react";
import { Database, Play, Wallet, ShieldCheck, Sparkles, Users, Bell, Megaphone, Settings } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

export default function Features() {
  const cards = [
    {
      title: "آرشیو خودکار با TMDB",
      desc: "دریافت و فارسی‌سازی خودکار تصاویر، تریلر، خلاصه داستان، امتیاز و عوامل فیلم و سریال تنها با کد شناسه TMDB.",
      icon: Database,
      span: "md:col-span-1",
      border: "hover:border-[#d97756]"
    },
    {
      title: "پخش‌کننده تطبیقی VOD",
      desc: "پلیر پخش فیلم مجهز به کیفیت‌های چندگانه، پشتیبانی کامل HLS، زیرنویس فارسی داینامیک و مدیریت تبلیغات ویدیویی.",
      icon: Play,
      span: "md:col-span-2",
      border: "hover:border-purple-400"
    },
    {
      title: "سیستم اشتراک‌های VIP و کیف پول",
      desc: "امکان تعریف تعرفه اشتراک زمانی، درگاه‌های پرداخت شتاب واسط و مستقیم، شارژ کیف پول و صورت‌حساب مالی.",
      icon: Wallet,
      span: "md:col-span-2",
      border: "hover:border-purple-450"
    },
    {
      title: "کنترل پنل پیشرفته ادمین",
      desc: "داشبورد مدیریت آمار عضویت و تراکنش‌ها، ویرایش CRUD فیلم‌ها، تگ‌گذاری بازیگران و مدیریت تنظیمات سیستم.",
      icon: ShieldCheck,
      span: "md:col-span-1",
      border: "hover:border-[#d97756]"
    },
    {
      title: "مدیریت بازیگران و عوامل فیلم",
      desc: "ثبت خودکار پروفایل بازیگران از TMDB با بیوگرافی فارسی، تصاویر رسمی و آرشیو فیلموگرافی هر هنرمند.",
      icon: Users,
      span: "md:col-span-1",
      border: "hover:border-purple-400"
    },
    {
      title: "سیستم اطلاع‌رسانی و اعلان‌ها",
      desc: "ارسال نوتیفیکیشن سیستمی به کاربران شامل اعلام محتوای جدید، یادآوری تمدید اشتراک و پیام‌های مدیریتی.",
      icon: Bell,
      span: "md:col-span-2",
      border: "hover:border-[#d97756]"
    },
    {
      title: "سیستم تبلیغات ویدیویی پلیر",
      desc: "نمایش تبلیغات Pre-roll و Mid-roll در پخش‌کننده با تایمر رد کردن، مدیریت بنرهای سایت و لینک‌دهی هدفمند.",
      icon: Megaphone,
      span: "md:col-span-2",
      border: "hover:border-purple-400"
    },
    {
      title: "نصب‌کننده خودکار و تنظیمات جامع",
      desc: "راه‌اندازی سریع با نصب‌کننده ۳ مرحله‌ای، پیکربندی دیتابیس، تنظیم درگاه پیامک و آپدیت‌رسانی خودکار.",
      icon: Settings,
      span: "md:col-span-1",
      border: "hover:border-[#d97756]"
    }
  ];

  return (
    <section id="features" className="py-20 md:py-28 bg-[#141312] relative z-10 border-b border-[#d97756]/15">
      
      {/* Light glow overlay */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[350px] h-[350px] bg-[#d97756]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <ScrollReveal delay={100}>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md border border-[#d97756]/30 bg-[#d97756]/5 text-[#d97756] mb-4 shadow-[0_0_15px_rgba(217,119,86,0.08)]">
              <Sparkles className="w-3 h-3 animate-pulse" />
              <span className="font-arcade text-[7px] tracking-wider uppercase pt-0.5">
                PLATFORM CORE MODULES / FEATURES
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-white mt-1">
              امکانات کلیدی پلتفرم
            </h2>
          </ScrollReveal>
        </div>

        {/* Minimal Bento Grid using Pixel Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card, i) => {
            const Icon = card.icon;
            return (
              <ScrollReveal key={i} delay={100 + i * 50} className={card.span}>
                <div 
                  className={`h-full p-8 rounded-lg transition-all duration-200 flex flex-col justify-between min-h-[170px] pixel-card ${card.border}`}
                >
                  <div className="w-9 h-9 rounded-lg bg-zinc-950/50 border border-zinc-900 flex items-center justify-center text-[#d97756] shadow-inner flex-shrink-0">
                    <Icon className="w-4 h-4" />
                  </div>
                  
                  <div className="mt-8">
                    <h3 className="text-xs font-bold text-white">{card.title}</h3>
                    <p className="text-[10px] text-[#9e978e] leading-relaxed mt-2.5">{card.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

      </div>
    </section>
  );
}
