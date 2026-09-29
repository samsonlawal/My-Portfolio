"use client";

import React, { useRef } from "react";
import WorkLayout from "./WorkLayout";

export default function Works() {
  const workRef = useRef<HTMLDivElement>(null);

  return (
    <div className="w-full h-fit" id="work">
      <div className="flex flex-col gap-4 w-full items-start font-dm-sans text-black justify-start">
        
        {/* Header */}
        <div>
          <h3 className="text-[18px] lg:text-[22px] font-semibold tracking-tight text-[#fff] hover:text-[#FFC914] transition-colors duration-300">
            Work Experience
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
