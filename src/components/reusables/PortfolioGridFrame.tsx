"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

export function PortfolioGridFrame({
  children,
}: {
  children: React.ReactNode;
}) {
  const [scrollRatio, setScrollRatio] = useState(0);
  const [isAtTop, setIsAtTop] = useState(true);
  const [isAtBottom, setIsAtBottom] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("about");

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const totalScroll = document.documentElement.scrollHeight - windowHeight;

      const ratio = totalScroll > 0 ? scrollY / totalScroll : 0;
      setScrollRatio(ratio);

      setIsAtTop(scrollY < 20);
      setIsAtBottom(scrollY >= totalScroll - 20);

      // Section detection
      const sections = ["about", "skills", "work", "projects", "contact"];
      for (const s of sections.reverse()) {
        const el = document.getElementById(s);
        if (el && el.getBoundingClientRect().top <= windowHeight * 0.4) {
          setActiveSection(s);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Continuous Perimeter Circuit Math:
  // 1. Top Bar: Starts from top-middle (50%) and splits outward to left (0%) & right (100%) [0% -> 15% scroll]
  const topPhase = Math.min(Math.max(scrollRatio / 0.15, 0), 1);

  // 2. Vertical Side Rails: Travels from top corners down both left & right rails [15% -> 85% scroll]
  const sidePhase = Math.min(Math.max((scrollRatio - 0.15) / 0.70, 0), 1);

  // 3. Bottom Bar: Converges from bottom-left & bottom-right corners into bottom-middle [85% -> 100% scroll]
  const bottomPhase = Math.min(Math.max((scrollRatio - 0.85) / 0.15, 0), 1);

  return (
    <div className="relative min-h-screen w-full bg-[#111] overflow-x-hidden">
      
      {/* ================= 1. TOP BAR (Fixed to Top) ================= */}
      <div className="fixed top-0 left-0 right-0 h-7 z-50 bg-[#111]/95 backdrop-blur-md border-b border-white/[0.04] flex items-center justify-between overflow-hidden select-none px-3">
        {/* Left Spacer */}
        <div className="w-16 z-10 shrink-0" />

        {/* Center: Top Overflow / Scroll-Up Indicator */}
        <div className="flex items-center gap-1.5 font-mono text-[9px] tracking-widest uppercase z-10 text-white/35">
          {!isAtTop ? (
            <motion.span
              animate={{ opacity: [0.25, 0.6, 0.25] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
              className="flex items-center gap-1"
            >
              <span>▲</span>
              <span className="hidden xs:inline">MORE ABOVE</span>
            </motion.span>
          ) : (
            <span className="text-white/20">● TOP OF PAGE</span>
          )}
        </div>

        {/* Blueprint Cells Background Strip */}
        <div className="absolute inset-0 flex divide-x divide-white/[0.04] pointer-events-none">
          {Array.from({ length: 48 }).map((_, i) => (
            <div
              key={i}
              className="flex-1 min-w-[28px] h-full"
            />
          ))}
        </div>

        {/* Right Active Section Badge */}
        <div className="font-mono text-[9px] text-white/30 tracking-wider uppercase z-10 shrink-0">
          [ {activeSection.toUpperCase()} ]
        </div>

        {/* Top Middle-Outward Progress Lines */}
        {/* Left Half (Middle -> Left) */}
        <div
          className="absolute bottom-0 right-1/2 h-[1.5px] bg-white/25 transition-all duration-75 z-20"
          style={{ width: `${topPhase * 50}%` }}
        />
        {/* Right Half (Middle -> Right) */}
        <div
          className="absolute bottom-0 left-1/2 h-[1.5px] bg-white/25 transition-all duration-75 z-20"
          style={{ width: `${topPhase * 50}%` }}
        />
      </div>

      {/* ================= 2. LEFT RAIL (Fixed Left Viewport) ================= */}
      <div className="fixed top-7 bottom-7 left-0 w-4 sm:w-6 md:w-7 z-40 bg-[#111]/95 backdrop-blur-md border-r border-white/[0.04] flex flex-col divide-y divide-white/[0.04] overflow-hidden select-none">
        {/* Vertical Progress Line (Top -> Bottom) */}
        <div
          className="absolute top-0 right-0 w-[1.5px] bg-white/25 transition-all duration-75 z-20"
          style={{ height: `${sidePhase * 100}%` }}
        />

        {/* Repeating Blueprint Cells */}
        {Array.from({ length: 60 }).map((_, i) => {
          const cellProgress = (i / 60);
          const isPassed = sidePhase >= cellProgress && topPhase >= 1;

          return (
            <div
              key={i}
              className={`w-full min-h-[28px] flex-1 transition-colors duration-200 flex items-center justify-center relative ${
                isPassed ? "bg-white/[0.015]" : "hover:bg-white/[0.03]"
              }`}
            />
          );
        })}
      </div>

      {/* ================= 3. RIGHT RAIL (Fixed Right Viewport) ================= */}
      <div className="fixed top-7 bottom-7 right-0 w-4 sm:w-6 md:w-7 z-40 bg-[#111]/95 backdrop-blur-md border-l border-white/[0.04] flex flex-col divide-y divide-white/[0.04] overflow-hidden select-none">
        {/* Vertical Progress Line (Top -> Bottom) */}
        <div
          className="absolute top-0 left-0 w-[1.5px] bg-white/25 transition-all duration-75 z-20"
          style={{ height: `${sidePhase * 100}%` }}
        />

        {Array.from({ length: 60 }).map((_, i) => {
          const cellProgress = (i / 60);
          const isPassed = sidePhase >= cellProgress && topPhase >= 1;

          return (
            <div
              key={i}
              className={`w-full min-h-[28px] flex-1 transition-colors duration-200 flex items-center justify-center relative ${
                isPassed ? "bg-white/[0.015]" : "hover:bg-white/[0.03]"
              }`}
            />
          );
        })}
      </div>

      {/* ================= 4. BOTTOM BAR (Fixed to Bottom) ================= */}
      <div className="fixed bottom-0 left-0 right-0 h-7 z-50 bg-[#111]/95 backdrop-blur-md border-t border-white/[0.04] flex items-center justify-center overflow-hidden select-none px-3">
        {/* Center: Bottom Overflow / Scroll-Down Indicator */}
        <div className="flex items-center gap-1.5 font-mono text-[9px] tracking-widest uppercase z-10 text-white/35">
          {!isAtBottom ? (
            <motion.span
              animate={{ opacity: [0.25, 0.6, 0.25] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
              className="flex items-center gap-1.5 font-medium"
            >
              <span>▼</span>
              <span>SCROLL FOR MORE</span>
              <span>▼</span>
            </motion.span>
          ) : (
            <span className="text-white/20 flex items-center gap-1">
              <span>■</span>
              <span>END OF PAGE REACHED</span>
            </span>
          )}
        </div>

        {/* Blueprint Cells Background Strip */}
        <div className="absolute inset-0 flex divide-x divide-white/[0.04] pointer-events-none">
          {Array.from({ length: 48 }).map((_, i) => (
            <div
              key={i}
              className="flex-1 min-w-[28px] h-full"
            />
          ))}
        </div>

        {/* Bottom Inward Convergence Progress Lines */}
        {/* Left Half (Left Corner -> Middle) */}
        <div
          className="absolute top-0 left-0 h-[1.5px] bg-white/25 transition-all duration-75 z-20"
          style={{ width: `${bottomPhase * 50}%` }}
        />
        {/* Right Half (Right Corner -> Middle) */}
        <div
          className="absolute top-0 right-0 h-[1.5px] bg-white/25 transition-all duration-75 z-20"
          style={{ width: `${bottomPhase * 50}%` }}
        />
      </div>

      {/* ================= 5. MAIN SCROLLABLE CONTENT ================= */}
      <div className="pt-7 pb-7 px-4 sm:px-6 md:px-7 min-h-screen w-full">
        {children}
      </div>
    </div>
  );
}
