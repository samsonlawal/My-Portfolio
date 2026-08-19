"use client";

import React, { useRef } from "react";

export default function About() {
  const aboutRef = useRef<HTMLDivElement>(null);

  return (
    <div className="w-full" ref={aboutRef} id="about">
      <div
        className="flex flex-col gap-4 w-full items-start font-dm-sans text-left justify-start"
      >
        {/* Header */}
        <h3 className="text-[24px] lg:text-[32px] tracking-tight leading-8 italic text-white hover:text-[#F1A7B4] duration-300 transition-colors select-none group">
          <span className="text-[#F1A7B4] pr-[4px]">{"{"}</span>
          About Me
          <span className="text-[#F1A7B4] pl-[4px]">{"}"}</span>
        </h3>

        {/* Content Paragraphs */}
        <p className="text-white/60 text-[14px] md:text-[16px] leading-[22px] md:leading-[26px] font-light max-w-2xl mt-2">
          I’m Samson, a Frontend Engineer with a strong computer science foundation and a passion for building clean, performant, and user-centric web applications. I specialize in translating complex design concepts into highly responsive, interactive interfaces that feel fast and seamless.
          <br />
          <br />
          Over the years, I've focused on engineering clean frontend architectures, creating reusable UI design systems, and optimizing web application performance. I prioritize writing clean, maintainable code and collaborating closely with design and backend teams to deliver end-to-end user-focused solutions.
        </p>
      </div>
    </div>
  );
}
