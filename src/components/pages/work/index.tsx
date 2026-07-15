"use client";

import { useGsapFadeIn } from "@/hooks/useGsapFadeIn";
import React, { useRef } from "react";
import WorkLayout from "./WorkLayout";

export default function Works() {
  const workRef = useRef<HTMLDivElement>(null);

  useGsapFadeIn({ ref: workRef, scroll: true });

  return (
    <div className="max-screen-wrapper py-[80px] md:py-[120px] h-fit" id="work" ref={workRef}>
      <div className="max-screen-inner flex flex-col gap-4 w-full items-start font-dm-sans text-black justify-start">
        
        {/* Header */}
        <div>
          <h3 className="text-[26px] md:text-[50px] tracking-tight leading-10 lg:leading-16 italic text-[#fff] hover:text-[#FFC914] transition-colors duration-300">
            <span className="text-[#FFC914] pr-[4px]">{"{"}</span>
            Work Experience
            <span className="text-[#FFC914] pl-[4px]">{"}"}</span>
          </h3>
        </div>

        {/* Render Layout */}
        <div className="w-full">
          <WorkLayout />
        </div>
      </div>
    </div>
  );
}
