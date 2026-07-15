import React from "react";
import { WORK_EXPERIENCE_DATA } from "./workData";

export default function WorkLayout() {
  return (
    <div className="flex flex-col w-full mt-2 gap-6 md:gap-8">
      {WORK_EXPERIENCE_DATA.map((work, index) => (
        <div
          key={index}
          className="group grid grid-cols-[110px_1fr] md:grid-cols-[160px_1fr] w-full gap-4 md:gap-8 py-2 items-start text-left"
        >
          {/* Dates on the left */}
          <div className="text-[10px] md:text-[12px] text-white/30 font-mono tracking-wider pt-1 flex-shrink-0 uppercase whitespace-nowrap">
            {work.year}
          </div>

          {/* Details on the right */}
          <div className="flex flex-col w-full gap-2.5">
            <div className="flex flex-col gap-0.5">
              {/* Company name + role on same line */}
              <div className="flex flex-wrap items-baseline gap-x-2 gap-y-0.5">
                <a
                  href={work.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/link text-[18px] md:text-[20px] font-semibold tracking-tight text-white hover:text-[#FFC914] transition-colors duration-300 w-fit"
                >
                  {work.title}
                  <span className="font-mono text-[14px] text-white/40 group-hover/link:text-[#FFC914] transition-colors duration-300 ml-1">↗</span>
                </a>
                <span className="text-[11px] md:text-[12px] font-mono tracking-widest text-white/40 font-semibold">
                  — {work.role}
                </span>
              </div>
            </div>

            {/* Description */}
            <p className="text-[13px] md:text-[14px] text-white/60 leading-relaxed max-w-2xl">
              {work.description}
            </p>

            {/* Tech Stack Tags */}
            <div className="flex flex-wrap gap-2 justify-start mt-1">
              {work.stack.split(" • ").map((tech, idx) => (
                <span
                  key={idx}
                  className="text-[10px] md:text-[11px] text-white/40 border border-white/5 px-2 py-0.5 rounded group-hover:text-white transition-colors duration-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
