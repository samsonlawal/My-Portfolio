"use client";

import React, { useRef } from "react";
import WorkLayout from "./WorkLayout";

export default function Works() {
  const workRef = useRef<HTMLDivElement>(null);

  return (
    <div className="w-full h-fit lg:mt-6 lg:px-6" id="work">
      <div className="flex flex-col gap-4 w-full items-start font-dm-sans text-black justify-start">
        
        {/* Header */}
        <div>
          <h3 className="text-[24px] lg:text-[32px] tracking-tight leading-8 italic text-[#fff] hover:text-[#FFC914] transition-colors duration-300">
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
