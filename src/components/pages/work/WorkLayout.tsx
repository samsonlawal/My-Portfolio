import React from "react";
import { WORK_EXPERIENCE_DATA } from "./workData";

export default function WorkLayout() {
  return (
    <div className="flex flex-col w-full mt-2 gap-4">
      {WORK_EXPERIENCE_DATA.map((work, index) => (
        <div
          key={index}
          className="group flex flex-col w-full gap-2 p-3 -mx-3 md:p-4 md:-mx-4 rounded-none hover:bg-white/[0.04] active:bg-white/[0.06] transition-all duration-300 items-start text-left cursor-default"
        >
          {/* Dates on the left */}
          <div className="text-[10px] md:text-[11px] text-white/50 font-mono tracking-wider pt-0.5 flex-shrink-0 uppercase whitespace-nowrap select-none">
            {work.year}
          </div>

          {/* Details on the right */}
          <div className="flex flex-col w-full gap-1">
            <div className="flex flex-col gap-0.5">
              <div className="flex flex-wrap gap-x-2 gap-y-0.5 items-baseline">
                <a
                  href={work.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[15px] md:text-[16px] font-medium tracking-tight text-white group-hover:text-[#FFC914] transition-colors duration-300 w-fit flex flex-row items-center"
                >
                  <p className="pr-1">{work.title}</p>
                  {/* {` · `} */}
                  <span className="pl-1 text-white/70 text-[12px] md:text-[13px] font-normal group-hover:text-white/90 transition-colors duration-300">
                    {work.role}
                  </span>
                </a>
              </div>
            </div>

            {/* Description */}
            <p className="text-[13px] md:text-[13.5px] text-white/60 leading-relaxed max-w-md font-light">
              {work.description}
            </p>

            {/* Tech Stack Tags */}
            <div className="flex flex-wrap gap-1.5 justify-start mt-1">
              {work.stack.split(" • ").map((tech, idx) => (
                <span
                  key={idx}
                  className="text-[11px] md:text-[12px] text-white/40 px-2 py-0.5 rounded group-hover:text-white transition-colors duration-300 flex items-center gap-1.5 bg-[#1a1a1a] hover:bg-white/5 border border-white/5"
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
