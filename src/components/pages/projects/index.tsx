"use client";

import ProjectsLayout from "./ProjectsLayout"; // Interactive List

export default function Projects() {
  return (
    <div className="w-full" id="projects">
      <div className="flex flex-col gap-6 w-full items-start font-dm-sans text-black justify-start">
        
        {/* Header */}
        <h2 className="font-mono text-[10px] md:text-[11px] tracking-widest uppercase text-[#48CAE4] font-bold select-none">
          Projects
        </h2>

        {/* Render Layout */}
        <div className="w-full">
          <ProjectsLayout />
        </div>
      </div>
    </div>
  );
}
