import React from "react";
import { WORK_EXPERIENCE_DATA } from "./workData";

export default function WorkLayout() {
  return (
    <div className="flex flex-col w-full mt-2 gap-10 md:gap-10">
      {WORK_EXPERIENCE_DATA.map((work, index) => (
        <div
          key={index}
          className="group flex flex-col w-full gap-2 py-2 items-start text-left"
        >
          {/* Dates on the left */}
          <div className="text-[10px] md:text-[12px] text-white/60 font-mono tracking-wider pt-1 flex-shrink-0 uppercase whitespace-nowrap select-none">
            {work.year}
          </div>

          {/* Details on the right */}
          <div className="flex flex-col w-full gap-0.5">
            <div className="flex flex-col gap-0.5">
              <div className="flex flex-wrap gap-x-2 gap-y-0.5">
                <a
                  href={work.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/link text-[18px] md:text-[20px] font-normal tracking-tight text-white hover:text-[#FFC914] transition-colors duration-300 w-fit flex flex-row items-center "
                >
                  <p className="pr-1">{work.title}</p>
                  {/* {` · `} */}
                  <span className=" pl-1 text-white/80 text-[12px] font-light md:text-[14px]">
                    {work.role}
                  </span>
                </a>
              </div>
            </div>

            {/* Description */}
            <p className="text-[14px] md:text-[14px] text-white/60 leading-relaxed max-w-2xl font-light">
              {work.description}
            </p>

            {/* Tech Stack Tags */}
            <div className="flex flex-wrap gap-2 justify-start mt-1">
              {work.stack.split(" • ").map((tech, idx) => (
                <span
                  key={idx}
                  className="text-[12px] md:text-[12px] text-white/40 px-2 py-0.5 rounded group-hover:text-white transition-colors duration-300 flex items-center gap-1.5 bg-[#1a1a1a] hover:bg-white/5 border border-white/5 "
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
