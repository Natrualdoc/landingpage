"use client";

import React, { useState, useEffect } from "react";

export default function PixelHanger() {
  const [scrollY, setScrollY] = useState(0);
  const [frame, setFrame] = useState(0);
  
  // Cinematic load states
  const [introProgress, setIntroProgress] = useState(0); // 0 to 1
  const [characterSlide, setCharacterSlide] = useState(0); // 0 to 1

  useEffect(() => {
    // 1. Scroll listener
    const handleScroll = () => {
      setScrollY(window.scrollY);
      setFrame(Math.floor(window.scrollY / 15) % 2);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });

    // 2. Cinematic load animation (Rope drops first, then character slides down)
    let startTime = performance.now();
    const duration = 1500; // 1.5 seconds intro

    const animateIntro = (time: number) => {
      const elapsed = time - startTime;
      const progress = Math.min(elapsed / duration, 1);

      if (progress < 0.5) {
        // First 50% of time: Rope drops (progress 0 to 1)
        setIntroProgress(progress * 2);
      } else {
        // Last 50% of time: Rope is fully dropped, character slides down
        setIntroProgress(1);
        setCharacterSlide((progress - 0.5) * 2);
      }

      if (progress < 1) {
        requestAnimationFrame(animateIntro);
      }
    };

    requestAnimationFrame(animateIntro);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Voxel/Pixel-art design parameters
  const pixelSize = 2;
  const colCount = 18;
  const rowCount = 20;

  // Frame A (Legs hanging)
  const mascotFrameA = [
    "...XXXX..XXXX...", // Hands holding rope
    "...X..X..X..X...",
    "..XX..XXXX..XX..",
    "..X..........X..",
    "..X.XXXXXX.X.X..", // Head
    ".XX.XOOOOX.X.XX.",
    ".X..XOOOOX..X.X.",
    ".X.XXOOOOXX.X.X.",
    ".X.X*XX*XX*XX.X.", // Violet pixel eyes
    ".X.XXXXXXXXXX.X.",
    "..XXOOOOOOOOXX..",
    "...XXOOOOOOXX...",
    "....XXXXXXXX....",
    ".....XPPPPX.....", // Clay body
    "....XXPPPPXX....",
    "....XPPPPPPX....",
    "....XPPPPPPX....",
    "....XXPPPPXX....",
    ".....XX..XX.....", // Legs
    ".....XX..XX....."
  ];

  // Frame B (Legs swung)
  const mascotFrameB = [
    "...XXXX..XXXX...", 
    "...X..X..X..X...",
    "..XX..XXXX..XX..",
    "..X..........X..",
    "..X.XXXXXX.X.X..",
    ".XX.XOOOOX.X.XX.",
    ".X..XOOOOX..X.X.",
    ".X.XXOOOOXX.X.X.",
    ".X.X*XX*XX*XX.X.",
    ".X.XXXXXXXXXX.X.",
    "..XXOOOOOOOOXX..",
    "...XXOOOOOOXX...",
    "....XXXXXXXX....",
    ".....XPPPPX.....",
    "....XXPPPPXX....",
    "....XPPPPPPX....",
    "....XPPPPPPX....",
    "....XXPPPPXX....",
    "....XX....XX....", 
    "...XX......XX..."
  ];

  const activeMascot = frame === 0 ? mascotFrameA : mascotFrameB;

  const getColor = (char: string) => {
    switch (char) {
      case "X": return "#141312"; // Outline
      case "O": return "#fbfaf7"; // Face
      case "*": return "#a855f7"; // Eyes
      case "P": return "#d97756"; // Body
      default: return "transparent";
    }
  };

  // Rope and Character top coordinate calculations
  // Max rope length to prevent character from scrolling off-screen on very long pages
  const baseRopeLength = 160;
  const maxRopeLength = 480;
  const scrollAddedRope = Math.min(scrollY * 0.75, maxRopeLength);

  // Rope height grows during introProgress
  const currentRopeHeight = introProgress * (baseRopeLength + scrollAddedRope);

  // Character slides down the rope during characterSlide
  const characterTop = characterSlide * currentRopeHeight;

  return (
    <div className="absolute left-8 top-full pointer-events-none z-45 flex flex-col items-center">
      
      {/* Dynamic Pixelated Rope */}
      <div 
        className="w-0.5 border-r-2 border-dashed border-[#d97756]/60 transition-all duration-100"
        style={{
          height: `${currentRopeHeight}px`,
        }}
      />

      {/* Hanging Pixel Mascot */}
      <div 
        className="absolute flex flex-col items-center transition-transform"
        style={{
          transform: `translateY(${characterTop}px) rotate(${Math.sin(scrollY * 0.06) * 6}deg)`,
          transformOrigin: "top center",
          // Apply a gentle swing animation on mount
          animation: introProgress < 1 ? "none" : "swing 4s ease-in-out infinite",
        }}
      >
        
        {/* Voxel mascot SVG drawing */}
        <svg 
          width={colCount * pixelSize} 
          height={rowCount * pixelSize} 
          viewBox={`0 0 ${colCount * pixelSize} ${rowCount * pixelSize}`}
          className="image-rendering-pixelated shadow-lg"
        >
          {activeMascot.map((row, rIdx) => 
            row.split("").map((char, cIdx) => {
              const color = getColor(char);
              if (color === "transparent") return null;
              return (
                <rect 
                  key={`${rIdx}-${cIdx}`}
                  x={cIdx * pixelSize}
                  y={rIdx * pixelSize}
                  width={pixelSize}
                  height={pixelSize}
                  fill={color}
                />
              );
            })
          )}
        </svg>

        {/* Small retro speech bubble */}
        {introProgress === 1 && (
          <div className="absolute left-full ml-2 bottom-1/2 translate-y-1/2 bg-[#1c1a18] border border-[#d97756]/40 px-2 py-1 rounded text-[8px] font-bold text-[#fbfaf7] shadow-xl whitespace-nowrap">
            <span>{scrollY > 300 ? "بزن بریم!" : "آماده پخش!"}</span>
          </div>
        )}

      </div>

      {/* Embedded CSS for swing animation */}
      <style jsx global>{`
        @keyframes swing {
          0% { transform: rotate(-4deg) translateY(${characterTop}px); }
          50% { transform: rotate(4deg) translateY(${characterTop}px); }
          100% { transform: rotate(-4deg) translateY(${characterTop}px); }
        }
      `}</style>

    </div>
  );
}
