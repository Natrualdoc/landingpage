"use client";

import React, { useState } from "react";
import { Menu, X, Film, ExternalLink } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: "پیش‌نمایش زنده دمو", href: "#demo-browser" },
    { label: "نمایش ویژگی‌ها", href: "#feature-showcase" },
    { label: "امکانات کلیدی", href: "#features" },
    { label: "مراحل راه‌اندازی", href: "#whats-new" },
  ];

  return (
    <header className="fixed top-4 left-0 right-0 z-50 w-full max-w-4xl mx-auto px-4 transition-all duration-300">
      
      {/* Floating Pill Liquid Glass Container */}
      <div className="w-full rounded-full bg-[#1c1a18]/45 backdrop-blur-2xl border border-[#d97756]/18 shadow-[0_10px_35px_-8px_rgba(217,119,86,0.05),0_5px_15px_rgba(0,0,0,0.5)] px-6 py-2 flex items-center justify-between relative">
        
        {/* Right: Pixel Logo */}
        <a href="#" className="flex items-center gap-2.5 group cursor-pointer">
          <div className="w-7 h-7 rounded-md bg-[#d97756]/10 border border-[#d97756]/20 flex items-center justify-center text-[#d97756] transition-all duration-300 group-hover:scale-105 shadow-[0_0_10px_rgba(217,119,86,0.1)]">
            <Film className="w-3.5 h-3.5" />
          </div>
          <span className="font-pixel text-[1.65rem] font-bold tracking-wider text-[#fbfaf7] flex items-center gap-1.5 leading-none pt-0.5">
            MEDIAFY
            <span className="font-arcade text-[7px] text-[#d97756] bg-zinc-950/60 border border-zinc-800 px-1 py-0.5 rounded flex items-center justify-center tracking-normal font-normal">
              V1.9
            </span>
          </span>
        </a>

        {/* Center: Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-xs font-semibold text-[#9e978e] hover:text-[#fbfaf7] cursor-pointer transition-colors duration-200"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Left: Desktop Primary CTA */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="https://app.stems.ir"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-1.5 rounded-full text-[10px] font-bold text-white bg-zinc-950 border border-zinc-850 hover:bg-[#1c1a18] hover:border-[#d97756]/30 transition-all duration-200 flex items-center gap-1 cursor-pointer"
          >
            <span>مشاهده دمو</span>
            <ExternalLink className="w-3 h-3 text-[#9e978e]" />
          </a>
        </div>

        {/* Mobile Menu Action */}
        <div className="flex md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="w-7 h-7 rounded-md border border-[#d97756]/20 flex items-center justify-center text-[#9e978e] transition-all duration-200 cursor-pointer"
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? <X className="w-3.5 h-3.5" /> : <Menu className="w-3.5 h-3.5" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer (Styled like floating card) */}
      {isMenuOpen && (
        <div className="md:hidden w-full mt-2 rounded-2xl bg-[#1c1a18]/95 backdrop-blur-xl border border-[#d97756]/20 px-6 py-6 flex flex-col gap-4 shadow-2xl animate-fade-in-up relative z-50">
          <nav className="flex flex-col gap-3">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="text-xs font-bold text-[#9e978e] hover:text-[#fbfaf7] py-2 border-b border-[#2d2a26] cursor-pointer"
              >
                {item.label}
              </a>
            ))}
          </nav>
          
          <a
            href="https://app.stems.ir"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsMenuOpen(false)}
            className="w-full py-2 rounded-full text-center text-xs font-bold text-white bg-zinc-950 border border-[#d97756]/20 hover:bg-[#1c1a18] transition-all duration-200 cursor-pointer flex items-center justify-center gap-1"
          >
            <span>مشاهده دمو</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      )}
    </header>
  );
}
