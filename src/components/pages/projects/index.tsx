"use client";

import ProjectsLayout from "./ProjectsLayout"; // Interactive List

export default function Projects() {
  return (
    <div className="w-full" id="projects">
      <div className="flex flex-col gap-3 md:gap-4 w-full items-start font-dm-sans text-black justify-start">
        
        {/* Header */}
        <h3 className="text-[18px] lg:text-[22px] font-semibold tracking-tight text-[#fff] hover:text-[#48CAE4] transition-all duration-300">
          Projects
        </h3>

        {/* Render Layout */}
        <div className="w-full mt-0">
          <ProjectsLayout />
        </div>
      </div>
    </div>
  );
}
