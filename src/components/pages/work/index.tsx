"use client";

import React, { useRef } from "react";
import WorkLayout from "./WorkLayout";

export default function Works() {
  const workRef = useRef<HTMLDivElement>(null);

  return (
    <div className="w-full h-fit" id="work">
      <div className="flex flex-col gap-6 w-full items-start font-dm-sans text-black justify-start">
        
        {/* Header */}
        <div>
          <h2 className="font-mono text-[10px] md:text-[11px] tracking-widest uppercase text-[#FFC914] font-bold select-none">
            Work Experience
          </h2>
        </div>

        {/* Render Layout */}
        <div className="w-full">
          <WorkLayout />
        </div>
      </div>
    </div>
  );
}
