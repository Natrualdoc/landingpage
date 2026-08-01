"use client";

import React from "react";
import { Play, ArrowLeft, ExternalLink, Sparkles, Film, Clapperboard, Popcorn, Tv, MonitorPlay } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

/**
 * ─── Cinema3DIcon ───
 * A premium CSS-only 3D animated composition of cinema/film elements.
 * Multiple floating layers with parallax-like depth and glow effects.
 */
function Cinema3DIcon() {
  return (
    <div className="relative w-full max-w-[520px] aspect-square mx-auto flex items-center justify-center">
      
      {/* Outermost ambient glow rings */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#d97756]/8 to-purple-500/5 blur-[80px] animate-pulse pointer-events-none" />
      <div className="absolute inset-8 rounded-full bg-gradient-to-tl from-purple-500/6 to-[#d97756]/4 blur-[60px] pointer-events-none" style={{ animationDelay: "1s", animationDuration: "3s" }} />

      {/* Outer orbit ring 1 */}
      <div className="absolute inset-6 rounded-full border border-[#d97756]/10" style={{ animation: "spin-slow 25s linear infinite" }}>
        <div className="absolute -top-2.5 left-1/2 -translate-x-1/2">
          <div className="w-5 h-5 rounded-full bg-[#d97756]/20 border border-[#d97756]/40 flex items-center justify-center shadow-[0_0_15px_rgba(217,119,86,0.3)]">
            <Film className="w-2.5 h-2.5 text-[#d97756]" />
          </div>
        </div>
        <div className="absolute -bottom-2.5 left-1/2 -translate-x-1/2">
          <div className="w-5 h-5 rounded-full bg-purple-500/20 border border-purple-500/40 flex items-center justify-center shadow-[0_0_15px_rgba(168,85,247,0.3)]">
            <Tv className="w-2.5 h-2.5 text-purple-400" />
          </div>
        </div>
      </div>

      {/* Outer orbit ring 2 (counter-rotate) */}
      <div className="absolute inset-16 rounded-full border border-purple-500/8" style={{ animation: "spin-reverse 20s linear infinite" }}>
        <div className="absolute top-1/2 -right-2 -translate-y-1/2">
          <div className="w-4 h-4 rounded-full bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center shadow-[0_0_12px_rgba(16,185,129,0.2)]">
            <Popcorn className="w-2 h-2 text-emerald-400" />
          </div>
        </div>
        <div className="absolute top-1/2 -left-2 -translate-y-1/2">
          <div className="w-4 h-4 rounded-full bg-[#d97756]/20 border border-[#d97756]/30 flex items-center justify-center shadow-[0_0_12px_rgba(217,119,86,0.2)]">
            <MonitorPlay className="w-2 h-2 text-[#d97756]" />
          </div>
        </div>
      </div>

      {/* Central 3D floating main icon */}
      <div className="relative z-10" style={{ animation: "float-3d 6s ease-in-out infinite" }}>
        
        {/* Glowing base shadow */}
        <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-24 h-4 bg-[#d97756]/20 rounded-full blur-xl" />
        
        {/* Main hexagonal container */}
        <div className="relative w-32 h-32 md:w-40 md:h-40">
          
          {/* Back face - shadow layer */}
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#d97756]/30 to-purple-600/30 transform translate-x-2 translate-y-2 blur-sm" />
          
          {/* Mid face - depth layer */}
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#2d2a26] to-[#1c1a18] border border-[#d97756]/20 transform translate-x-1 translate-y-1" />
          
          {/* Front face - main surface */}
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#1c1a18] via-[#2d2a26] to-[#1c1a18] border border-[#d97756]/30 flex items-center justify-center shadow-[0_20px_60px_-15px_rgba(217,119,86,0.25),inset_0_1px_0_0_rgba(255,255,255,0.05)]">
            <Clapperboard className="w-14 h-14 md:w-18 md:h-18 text-[#d97756] drop-shadow-[0_0_20px_rgba(217,119,86,0.4)]" />
          </div>

          {/* Corner accent lights */}
          <div className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-[#d97756] shadow-[0_0_12px_rgba(217,119,86,0.6)]" />
          <div className="absolute -bottom-1 -left-1 w-2 h-2 rounded-full bg-purple-500 shadow-[0_0_10px_rgba(168,85,247,0.5)]" />
        </div>
      </div>

      {/* Floating film strip pieces */}
      <div className="absolute top-12 right-8 md:right-16" style={{ animation: "float-piece-1 7s ease-in-out infinite" }}>
        <div className="pixel-card !shadow-[3px_3px_0_0_#d97756] p-3 rounded-lg">
          <Play className="w-5 h-5 text-[#d97756] fill-[#d97756]/30" />
        </div>
      </div>

      <div className="absolute bottom-16 left-6 md:left-14" style={{ animation: "float-piece-2 8s ease-in-out infinite" }}>
        <div className="liquid-glass !rounded-lg p-3">
          <Film className="w-5 h-5 text-purple-400" />
        </div>
      </div>

      <div className="absolute top-20 left-10 md:left-20" style={{ animation: "float-piece-3 6.5s ease-in-out infinite" }}>
        <div className="w-8 h-8 rounded-full bg-emerald-500/10 border border-emerald-500/25 flex items-center justify-center backdrop-blur-sm">
          <Tv className="w-3.5 h-3.5 text-emerald-400" />
        </div>
      </div>

      <div className="absolute bottom-20 right-10 md:right-20" style={{ animation: "float-piece-1 9s ease-in-out infinite" }}>
        <div className="w-8 h-8 rounded-full bg-[#d97756]/10 border border-[#d97756]/25 flex items-center justify-center backdrop-blur-sm">
          <MonitorPlay className="w-3.5 h-3.5 text-[#d97756]" />
        </div>
      </div>

      {/* Scattered particles */}
      <div className="absolute top-8 left-1/3 w-1.5 h-1.5 rounded-full bg-[#d97756]/40" style={{ animation: "float-particle 4s ease-in-out infinite" }} />
      <div className="absolute bottom-12 right-1/3 w-1 h-1 rounded-full bg-purple-400/40" style={{ animation: "float-particle 5s ease-in-out infinite 1s" }} />
      <div className="absolute top-1/3 right-6 w-1.5 h-1.5 rounded-full bg-emerald-400/30" style={{ animation: "float-particle 3.5s ease-in-out infinite 0.5s" }} />
    </div>
  );
}

export default function Hero() {
  return (
    <section id="demo-browser" className="relative overflow-hidden pt-16 pb-12 md:pt-20 md:pb-20 min-h-screen flex flex-col items-center justify-center bg-grid-pattern grid-mask">
      
      {/* Glow backgrounds */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[550px] h-[550px] bg-[#d97756]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full text-center flex flex-col items-center">
        
        {/* Retro Pixel Badge */}
        <ScrollReveal delay={100}>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-md border border-[#d97756]/30 bg-[#d97756]/5 text-[#d97756] mb-6 shadow-[0_0_15px_rgba(217,119,86,0.08)]">
            <Sparkles className="w-3.5 h-3.5 animate-pulse" />
            <span className="font-arcade text-[8px] tracking-wider uppercase pt-0.5">
              PREMIUM VOD PLATFORM / MEDIAFY DIRECTORY
            </span>
          </div>
        </ScrollReveal>

        {/* Central Heading */}
        <ScrollReveal delay={200}>
          <h1 className="text-4xl md:text-6xl font-black tracking-tight text-[#fbfaf7] leading-[1.25] mb-6">
            سامانه پخش فیلم و سریال
            <br />
            <span className="text-gradient font-black relative inline-block font-pixel text-6xl md:text-8xl mt-2 tracking-wide leading-none pb-2">
              Mediafy Directory
            </span>
          </h1>
        </ScrollReveal>

        {/* Subtitle */}
        <ScrollReveal delay={300}>
          <p className="text-xs md:text-sm text-[#9e978e] leading-relaxed max-w-2xl mb-10 font-medium">
            پرتال پخش آنلاین فیلم و سریال با معماری سرور ساید Next.js 16 و React 19. مجهز به درگاه شتاب، دریافت تمام خودکار آرشیو از مرجع TMDB، پنل اختصاصی مدیریت، پلیر پیشرفته و کیف پول آنلاین.
          </p>
        </ScrollReveal>

        {/* Action Buttons */}
        <ScrollReveal delay={400}>
          <div className="flex flex-col sm:flex-row items-center gap-4 mb-12 relative z-20">
            <a
              href="#feature-showcase"
              className="px-6 py-3 rounded-md text-xs font-bold text-white bg-[#d97756] hover:bg-[#b85e3c] transition-all duration-300 shadow-[0_0_20px_rgba(217,119,86,0.25)] flex items-center gap-2 cursor-pointer group pixel-border"
            >
              <Play className="w-3.5 h-3.5 fill-white text-white translate-x-[-0.5px]" />
              <span>مشاهده بخش‌های سایت</span>
              <ArrowLeft className="w-3.5 h-3.5 mr-1 transition-transform duration-200 group-hover:-translate-x-1" />
            </a>

            <a
              href="https://app.stems.ir"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 rounded-md text-xs font-bold text-[#fbfaf7] bg-[#1c1a18]/80 border border-zinc-800 hover:border-[#d97756]/40 transition-all duration-300 flex items-center justify-center gap-1.5 cursor-pointer backdrop-blur"
            >
              <ExternalLink className="w-3.5 h-3.5 text-[#d97756]" />
              <span>نمایش زنده دمو</span>
            </a>
          </div>
        </ScrollReveal>

        {/* 3D Cinema Animated Icon */}
        <ScrollReveal delay={450} className="w-full max-w-[520px] mx-auto">
          <Cinema3DIcon />
        </ScrollReveal>

      </div>
    </section>
  );
}
