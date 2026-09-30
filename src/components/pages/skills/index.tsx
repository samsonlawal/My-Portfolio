"use client";

import React from "react";
import { LANGUAGES_DATA, TOOLS_DATA } from "../about/aboutData";

export default function Skills() {
  return (
    <div className="w-full flex flex-col gap-8 md:gap-10" id="skills">
      {/* Languages & Frameworks */}
      <div className="flex flex-col gap-3.5 items-start text-left w-full">
        <span className="font-mono text-[10px] md:text-[11px] tracking-widest uppercase text-[#F1A7B4] font-bold">
          Languages & Frameworks
        </span>
        <div className="flex flex-wrap gap-2 justify-start">
          {LANGUAGES_DATA.map((lang, i) => (
            <div
              key={i}
              className="flex items-center gap-1.5 bg-[#1a1a1a] hover:bg-white/5 border border-white/5 px-2.5 py-1 rounded-md transition-colors duration-200"
            >
              <img
                src={lang.icon}
                alt={lang.name}
                className="w-3.5 h-3.5"
              />
              <span className="text-[12px] font-medium text-[#9d9d9d]">
                {lang.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Tools */}
      <div className="flex flex-col gap-3 items-start text-left w-full">
        <span className="font-mono text-[10px] md:text-[11px] tracking-widest uppercase text-[#48cAE4] font-bold">
          Tools
        </span>
        <div className="flex flex-wrap gap-2 justify-start">
          {TOOLS_DATA.map((tool, i) => (
            <div
              key={i}
              className="flex items-center gap-1.5 bg-[#1a1a1a] hover:bg-white/5 border border-white/5 px-2.5 py-1 rounded-md transition-colors duration-200"
            >
              <img
                src={tool.icon}
                alt={tool.name}
                className="w-3.5 h-3.5"
              />
              <span className="text-[12px] font-medium text-[#9d9d9d]">
                {tool.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
