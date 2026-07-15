import React, { useEffect, useState } from "react";
import NameHandwriting from "./Handwriting";

export default function Preloader() {
  const [bootText, setBootText] = useState("INITIALIZING CORE MODULES...");

  useEffect(() => {
    const sequences = [
      "LOADING STYLES AND RESOURCES...",
      "BOOTING WORKTimeline MODULES...",
      "RESOLVING PROJECTS DATASETS...",
      "SYSTEM STABLE. REDIRECTING...",
    ];

    let current = 0;
    const interval = setInterval(() => {
      if (current < sequences.length) {
        setBootText(sequences[current]);
        current++;
      } else {
        clearInterval(interval);
      }
    }, 450);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#010a13] text-[#FFC914] font-dm-sans px-4 select-none">
      {/* Glow Defs */}
      <svg className="hidden">
        <defs>
          <filter id="neon-glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
      </svg>

      {/* Cyber Laptop Workstation Illustration */}
      <div className="relative flex items-center justify-center mb-6">
        <svg
          className="w-40 h-40 md:w-48 md:h-48 text-[#FFC914]"
          viewBox="0 0 200 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Outer Screen */}
          <rect
            x="40"
            y="55"
            width="120"
            height="76"
            rx="6"
            stroke="currentColor"
            strokeWidth="2.5"
            className="animate-pulse"
          />
          {/* Inner Screen */}
          <rect
            x="46"
            y="61"
            width="108"
            height="64"
            rx="3"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeDasharray="3 3"
            opacity="0.6"
          />

          {/* Code Lines on Screen */}
          <path
            d="M58 75h40M58 85h60M58 95h30M58 105h50"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            opacity="0.8"
          />

          {/* Keyboard Base */}
          <path
            d="M30 131h140v6a6 6 0 01-6 6H36a6 6 0 01-6-6v-6z"
            fill="#010a13"
            stroke="currentColor"
            strokeWidth="2.5"
          />
          {/* Trackpad */}
          <line
            x1="90"
            y1="137"
            x2="110"
            y2="137"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />

          {/* Floating Orbiting Brackets */}
          <path
            d="M20 75l-8 8 8 8"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="animate-bounce"
            style={{ animationDuration: "2s", filter: "url(#neon-glow)" }}
          />
          <path
            d="M180 75l8 8-8 8"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="animate-bounce"
            style={{ animationDuration: "2.4s", filter: "url(#neon-glow)" }}
          />

          {/* Floating Circle Spark Node */}
          <circle
            cx="100"
            cy="40"
            r="4"
            fill="currentColor"
            className="animate-ping"
            style={{ animationDuration: "1.8s" }}
          />
          <circle cx="100" cy="40" r="2.5" fill="currentColor" />
        </svg>
      </div>

      {/* Handwriting Name Logo Script */}
      <div className="h-16 flex items-center justify-center">
        <NameHandwriting name="Samson Lawal" size={32} duration={1.6} color="#FFC914" />
      </div>

      {/* Monospaced Log Output status */}
      <div className="mt-8 flex flex-col items-center gap-2 max-w-xs w-full text-center">
        <span className="text-[10px] md:text-[11px] font-mono tracking-widest text-[#FFC914]/80 uppercase">
          {bootText}
        </span>
        {/* Simple Horizontal Progress Bar */}
        <div className="w-32 h-[2px] bg-white/10 rounded-full overflow-hidden mt-1">
          <div className="h-full bg-[#FFC914] animate-[loadWidth_1.8s_ease-in-out_infinite]" />
        </div>
      </div>

      <style
        dangerouslySetInnerHTML={{
          __html: `
            @keyframes loadWidth {
              0% {
                width: 0%;
                transform: translateX(0);
              }
              50% {
                width: 70%;
              }
              100% {
                width: 100%;
                transform: translateX(100%);
              }
            }
          `,
        }}
      />
    </div>
  );
}
