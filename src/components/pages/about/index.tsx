"use client";

import React, { useRef } from "react";
import { useGsapFadeIn } from "@/hooks/useGsapFadeIn";

export default function About() {
  const aboutRef = useRef<HTMLDivElement>(null);

  useGsapFadeIn({ ref: aboutRef, scroll: true });

  return (
    <div className="max-screen-wrapper py-[80px] md:py-[120px]" ref={aboutRef}>
      <div
        className="max-screen-inner flex flex-col gap-6 w-full items-start font-dm-sans text-left justify-start"
        id="about"
      >
        {/* Header */}
        <h3 className="text-[26px] md:text-[50px] tracking-tight leading-10 lg:leading-16 italic text-white hover:text-[#F1A7B4] duration-300 transition-colors select-none group">
          <span className="text-[#F1A7B4] pr-[4px]">{"{"}</span>
          About Me
          <span className="text-[#F1A7B4] pl-[4px]">{"}"}</span>
        </h3>

        {/* Content Paragraphs */}
        <p className="text-white/60 text-[14px] md:text-[16px] leading-[22px] md:leading-[26px] font-light max-w-2xl mt-2">
          I’m Samson, a Full-stack developer with hands-on work experience. From implementing intuitive design, to ensuring a smooth and engaging user experience, I build user-focused and performance optimized websites and mobile applications.
          <br />
          <br />
          My expertise lies in crafting comprehensive, responsive frontend solutions through clean code, structured design components, and scalable development patterns.
        </p>
      </div>
    </div>
  );
}
