import React from "react";
import { PROJECTS_DATA } from "./projectsData";

export default function ProjectsLayout() {
  return (
    <div className="flex flex-col w-full mt-2">
      {PROJECTS_DATA.map((project, index) => {
        return (
          <div
            key={index}
            className="group flex flex-col md:flex-row items-start justify-between py-8 transition-all duration-300"
          >
            <div className="flex items-start gap-6 md:gap-12 w-full">
              <div className="flex flex-col gap-3.5 w-full text-left">
                <div className="flex flex-col gap-2.5">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[18px] md:text-[22px] font-normal text-white group-hover:text-[#48CAE4] transition-all duration-300 tracking-tight w-fit"
                    onClick={(e) => e.stopPropagation()}
                  >
                    {project.name}
                    <span className="font-mono text-[14px] text-white/40 group-hover:text-[#48CAE4] transition-colors duration-300 ml-1.5">
                      ↗
                    </span>
                  </a>
                  <p className="text-[13px] md:text-[14px] text-[#8e8e93] leading-relaxed max-w-2xl group-hover:text-white/80 transition-colors">
                    {project.description}
                  </p>
                </div>

                {/* Tech Stack Tags */}
                <div className="flex flex-wrap gap-2 justify-start">
                  {project.stack.split(" • ").map((tech, idx) => (
                    <span
                      key={idx}
                      className="text-[12px] md:text-[12px] text-white/40 px-2 py-0.5 rounded group-hover:text-white transition-colors duration-300 flex items-center gap-1.5 bg-[#1a1a1a] hover:bg-white/5 border border-white/5"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* GitHub link only (if exists) */}
                {project.github && (
                  <div className="flex items-center gap-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[12px] uppercase tracking-wider font-semibold text-white/60 hover:text-white flex items-center gap-1 hover:underline"
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
          </div>
        );
      })}
    </div>
  );
}
