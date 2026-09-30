import React from "react";
import { PROJECTS_DATA } from "./projectsData";

export default function ProjectsLayout() {
  return (
    <div className="flex flex-col w-full max-w-lg gap-12 md:gap-14">
      {PROJECTS_DATA.map((project, index) => {
        return (
          <div
            key={index}
            className="group flex flex-col w-full gap-2.5 transition-all duration-300 items-start text-left cursor-default"
          >
            <div className="flex flex-col w-full gap-1.5">
              <div className="flex flex-col">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[15px] md:text-[16px] font-medium text-white group-hover:text-[#48CAE4] transition-all duration-300 tracking-tight w-fit flex items-center"
                  onClick={(e) => e.stopPropagation()}
                >
                  {project.name}
                  <span className="font-mono text-[13px] text-white/40 group-hover:text-[#48CAE4] transition-colors duration-300 ml-1.5">
                    ↗
                  </span>
                </a>
              </div>

              {/* Description */}
              <p className="text-[13px] md:text-[13.5px] text-[#8e8e93] leading-relaxed max-w-lg group-hover:text-white/80 transition-colors font-light">
                {project.description}
              </p>

              {/* Tech Stack Tags */}
              <div className="flex flex-wrap gap-1.5 justify-start mt-0.5">
                {project.stack.split(" • ").map((tech, idx) => (
                  <span
                    key={idx}
                    className="text-[11px] md:text-[12px] text-white/40 px-2 py-0.5 rounded group-hover:text-white transition-colors duration-300 flex items-center gap-1.5 bg-[#1a1a1a] hover:bg-white/5 border border-white/5"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* GitHub link only (if exists) */}
              {project.github && (
                <div className="flex items-center gap-3 mt-1">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[11px] uppercase tracking-wider font-semibold text-white/60 hover:text-white flex items-center gap-1 hover:underline"
                    onClick={(e) => e.stopPropagation()}
                  >
                    Code
                    <img
                      src="/icons/github.svg"
                      alt="github"
                      className="w-3.5 h-3.5 brightness-0 invert"
                    />
                  </a>
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
