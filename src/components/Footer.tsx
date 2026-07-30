"use client";

import React from "react";
import { Github, Mail, Heart, Film } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#141312] border-t border-[#d97756]/15 py-12 md:py-16 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 mb-12">
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <a href="#" className="flex items-center gap-2 group">
              <div className="w-8 h-8 rounded-lg bg-[#d97756]/10 border border-[#d97756]/20 flex items-center justify-center text-[#d97756]">
                <Film className="w-4 h-4" />
              </div>
              <span className="font-pixel text-[1.45rem] font-bold tracking-wider text-white">
                MEDIAFY
              </span>
            </a>
            <p className="text-[11px] text-[#9e978e] leading-relaxed max-w-sm">
              پلتفرم جامع و بومی پخش و مدیریت محتوای ویدیویی و سینمایی (VOD) مبتنی بر پیشرفته‌ترین فناوری‌های وب مدرن. راه حلی سریع و مقیاس‌پذیر برای علاقه‌مندان به دنیای سینما و رسانه.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-arcade text-[7px] tracking-wider text-white">دسترسی سریع</h4>
            <div className="flex flex-col gap-2 pt-1">
              <a href="#demo-browser" className="text-[11px] font-semibold text-[#9e978e] hover:text-[#d97756] cursor-pointer transition-colors duration-200">پیش‌نمایش دمو</a>
              <a href="#mini-browse" className="text-[11px] font-semibold text-[#9e978e] hover:text-[#d97756] cursor-pointer transition-colors duration-200">گالری اسکرین‌شات‌ها</a>
              <a href="#features" className="text-[11px] font-semibold text-[#9e978e] hover:text-[#d97756] cursor-pointer transition-colors duration-200">ویژگی‌ها</a>
              <a href="#whats-new" className="text-[11px] font-semibold text-[#9e978e] hover:text-[#d97756] cursor-pointer transition-colors duration-200">پیکربندی سیستم</a>
            </div>
          </div>

          {/* Technical Info */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="font-arcade text-[7px] tracking-wider text-white">پشته فنی و توزیع</h4>
            <p className="text-[11px] text-[#9e978e] leading-relaxed">
              توسعه‌یافته با Next.js 16، React 19، Tailwind CSS v4 و پایگاه داده MySQL. دارای معماری کاملاً بهینه برای بارگذاری آنی و سرعت لود فوق‌العاده.
            </p>
          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-[#2d2a26] pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          
          {/* Copyright */}
          <div className="text-[10px] text-[#9e978e] font-semibold flex items-center gap-1">
            <span>© {currentYear} تمامی حقوق محفوظ است. طراحی شده با</span>
            <Heart className="w-3.5 h-3.5 text-[#d97756] fill-[#d97756] animate-pulse" />
            <span>برای جامعه توسعه‌دهندگان وب فارسی.</span>
          </div>

          {/* Socials */}
          <div className="flex items-center gap-4">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-7 h-7 rounded border border-[#2d2a26] flex items-center justify-center text-[#9e978e] hover:border-[#d97756] hover:text-[#d97756] cursor-pointer transition-colors duration-200"
              aria-label="GitHub Repository"
            >
              <Github className="w-3.5 h-3.5" />
            </a>
            <a
              href="mailto:support@mediafy.ir"
              className="w-7 h-7 rounded border border-[#2d2a26] flex items-center justify-center text-[#9e978e] hover:border-[#d97756] hover:text-[#d97756] cursor-pointer transition-colors duration-200"
              aria-label="Email Support"
            >
              <Mail className="w-3.5 h-3.5" />
            </a>
          </div>

        </div>

      </div>
    </footer>
  );
}
