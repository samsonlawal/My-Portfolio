"use client";

import ProjectsLayout from "./ProjectsLayout"; // Interactive List

export default function Projects() {
  return (
    <div className="max-screen-wrapper py-[80px] md:py-[120px]" id="projects">
      <div className="max-screen-inner flex flex-col gap-3 md:gap-4 w-full items-start font-dm-sans text-black justify-start">
        
        {/* Header */}
        <h3 className="text-[30px] lg:text-[50px] tracking-tight leading-10 lg:leading-16 italic text-[#fff] hover:text-[#48CAE4] transition-all duration-300">
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
