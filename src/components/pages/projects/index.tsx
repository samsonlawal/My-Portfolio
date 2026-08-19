"use client";

import ProjectsLayout from "./ProjectsLayout"; // Interactive List

export default function Projects() {
  return (
    <div className="w-full lg:mt-12 lg:px-6" id="projects">
      <div className="flex flex-col gap-3 md:gap-4 w-full items-start font-dm-sans text-black justify-start">
        
        {/* Header */}
        <h3 className="text-[24px] lg:text-[32px] tracking-tight leading-8 italic text-[#fff] hover:text-[#48CAE4] transition-all duration-300">
          <span className="text-[#48CAE4]">{"{ "}</span>
          Projects
          <span className="text-[#48CAE4]">{" }"}</span>
        </h3>

        {/* Render Layout */}
        <div className="w-full mt-0">
          <ProjectsLayout />
        </div>
      </div>
    </div>
  );
}
