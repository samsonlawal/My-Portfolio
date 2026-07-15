import React from "react";
import { PROJECTS_DATA } from "../projects/projectsData";

export default function Blog() {
  return (
    <div className="flex flex-col w-full mt-6 divide-y divide-white/10">
      {PROJECTS_DATA.map((project, index) => (
        <div
          key={index}
          className="group grid grid-cols-1 md:grid-cols-12 gap-6 py-10 items-start text-left"
        >
          {/* Index & Name */}
          <div className="md:col-span-4 flex flex-col gap-2">
            <span className="text-[12px] font-mono text-white/30 tracking-widest uppercase">
              No. 0{index + 1}
            </span>
            <h4 className="text-[28px] md:text-[34px] font-light text-white tracking-tight leading-none group-hover:text-[#48CAE4] transition-colors duration-300">
              {project.name}
            </h4>
          </div>

          {/* Description */}
          <div className="md:col-span-5 text-[14px] text-white/70 leading-relaxed max-w-md pt-1 font-serif italic">
            "{project.description}"
          </div>

          {/* Meta & Actions */}
          <div className="md:col-span-3 flex flex-col gap-4 items-start md:items-end justify-between h-full pt-1">
            <span className="text-[11px] font-mono tracking-wider text-white/40 uppercase">
              {project.stack}
            </span>
            <div className="flex gap-4 text-[13px] font-mono lowercase">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-[#48CAE4] border-b border-white/20 hover:border-[#48CAE4] transition-all pb-0.5"
              >
                → visit site
              </a>
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/50 hover:text-white border-b border-white/10 hover:border-white transition-all pb-0.5"
                >
                  → code
                </a>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
