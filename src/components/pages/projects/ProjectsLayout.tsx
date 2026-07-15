import React, { useState } from "react";
import { PROJECTS_DATA } from "./projectsData";

export default function ProjectsLayout() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="flex flex-col w-full mt-2">
      {PROJECTS_DATA.map((project, index) => {
        const isDimmed = hoveredIndex !== null && hoveredIndex !== index;

        return (
          <div
            key={index}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            onClick={() => setHoveredIndex(hoveredIndex === index ? null : index)}
            onTouchStart={() => setHoveredIndex(index)}
            className={`group flex flex-col md:flex-row items-start justify-between py-6 md:py-8 border-b border-white/10 hover:border-[#48CAE4] transition-all duration-300 hover:px-4 cursor-pointer ${
              isDimmed ? "opacity-30" : "opacity-100"
            }`}
          >
            {/* Index, Name, Stack */}
            <div className="flex items-start gap-6 md:gap-12 w-full">
              {/* Index */}
              <span className="text-[14px] md:text-[18px] font-mono text-[#48CAE4]/60 group-hover:text-[#48CAE4] transition-all duration-300 pt-1 md:pt-2">
                0{index + 1}
              </span>
            
            {/* Content Column */}
            <div className="flex flex-col gap-3.5 w-full text-left">
              <div className="flex flex-col">
                {/* Project name with arrow link */}
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[18px] md:text-[22px] font-semibold text-white group-hover:text-[#48CAE4] transition-all duration-300 tracking-tight w-fit"
                  onClick={(e) => e.stopPropagation()}
                >
                  {project.name}
                  <span className="font-mono text-[14px] text-white/40 group-hover:text-[#48CAE4] transition-colors duration-300 ml-1.5">↗</span>
                </a>
                <p className="text-[13px] md:text-[14px] text-[#8e8e93] leading-relaxed max-w-2xl mt-1 group-hover:text-white/80 transition-colors">
                  {project.description}
                </p>
              </div>

              {/* Tech Stack Tags */}
              <div className="flex flex-wrap gap-2 justify-start">
                {project.stack.split(" • ").map((tech, idx) => (
                  <span
                    key={idx}
                    className="text-[11px] text-white/40 border border-white/5 px-2 py-0.5 rounded group-hover:text-white transition-colors duration-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* GitHub link only (if exists) */}
              {project.github && (
                <div className="flex items-center gap-3 pt-1">
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
