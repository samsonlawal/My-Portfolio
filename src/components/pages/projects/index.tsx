import ProjectGallery from "@/components/reusables/gallery";
import { useGsapFadeIn } from "@/hooks/useGsapFadeIn";
import { useRef } from "react";

export default function Projects() {
  const projects = [
    {
      // year: "Ongoing",
      name: "Task Stack",
      description:
        "A task/workspace management system with members, roles, comments, attachments.",
      stack: "Next • Tailwind • Typescript • Express • MongoDB",
      images: ["/icons/card-view.svg", "/icons/list-view.svg"],
    },

    {
      // year: "2025",
      name: "Knote Taker",
      description:
        "A simple app to capture, organize, and format notes with markdown support, providing a fast, and secure note-taking",
      stack: "Next • Typescript •  Supabase • Tailwind • MDX",
      images: ["/icons/card-view.svg", "/icons/list-view.svg"],
    },

    {
      // year: "2024",
      name: "CoinIn",
      description:
        "Crypto app that shows the current market price of crypto assets, top gainer and losers, portfolio to keep track of potential assets.",
      stack: "React • Supabase",
      images: ["/icons/card-view.svg", "/icons/list-view.svg"],
    },

    {
      // year: "2023",
      name: "Movie Release",
      description: "A website for information on movies and TV shows.",
      stack: "React",
      images: ["/icons/card-view.svg", "/icons/list-view.svg"],
    },
  ];

  const projectsRef = useRef<HTMLDivElement>(null);

  useGsapFadeIn({ ref: projectsRef, scroll: true });

  return (
    <div className="max-screen-wrapper py-[60px]" id="projects">
      <div className="max-screen-inner flex flex-col gap-10 w-full items-center font-dm-sans text-black justify-center">
        <h3 className="text-[30px] lg:text-[50px] tracking-tight leading-10 lg:leading-16 italic text-oxford dark:text-[#fff]">
          Projects
        </h3>
        <div
          className="flex flex-row w-full items-center gap-30
      "
        >
          <div className="hidden md:flex flex-row flex-wrap justify-center gap-10">
            {projects.map((project, index) => (
              <div
                className="flex flex-row gap-3 w-full justify-between md:gap-[20px] p-10 border-[#2B3223]/1 dark:border-powder/8 bg-powder/3"
                key={index}
              >
                <ProjectGallery images={project.images} />

                <div
                  className="flex flex-col justify-between items-start gap-4"
                  key={index}
                >
                  {/* <div className="w-[60px] md:w-[70px] text-[12px] md:text-[14px] ">
                  <p className="font-medium text-oxford/70 dark:text-powder/50">
                    {project.year}
                  </p>
                </div> */}
                  <div className="flex flex-col justify-start items-start gap-2">
                    <div className="flex flex-col md:w-[400px] gap-1">
                      <h4 className="text-oxford dark:text-white font-medium md:font-semibold text-[14px]">
                        {project.name}
                      </h4>
                      <p className="dark:text-[#9d9d9d] text-[#5D605B] leading-4.5 text-[14px] font-normal">
                        {project.description}
                      </p>
                    </div>
                    <p className="text-[#5D605B] dark:text-[#9d9d9d] text-[14px]">
                      {project.stack}
                    </p>
                  </div>
                  <div>
                    <button className="bg-powder text-oxford px-4 font-medium py-2 poppins text-[14px]">
                      View Project
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex md:hidden flex-row flex-wrap gap-14">
            {projects.map((project, index) => (
              <div className="flex flex-row gap-3 md:gap-[45px]" key={index}>
                {/* <div className="w-[60px] md:w-[70px] text-[12px] md:text-[14px] ">
                  <p className="font-medium text-oxford/70">
                    {project.year}
                  </p>
                </div> */}
                <div className="flex flex-col gap-2 flex-1">
                  <div className="flex flex-col flex-1 md:w-[400px] gap-2">
                    <div className="flex flex-row justify-start gap-2 items-end w-full text-[12px]">
                      <h4 className="text-oxford dark:text-white font-medium md:font-semibold text-[16px]">
                        {project.name}
                      </h4>

                      <p className="font-medium text-oxford/70 dark:text-powder">
                        {/* {project.year} */}
                      </p>
                    </div>
                    <p className="leading-4.5 dark:text-[#9d9d9d] text-[#5D605B] text-[14px]">
                      {project.description}
                    </p>
                  </div>
                  <p className="text-[14px] dark:text-[#9d9d9d] text-[#5D605B]">
                    {project.stack}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/*  */}
          {/* <div className="hidden md:flex flex-1 h-[350px] bg-amber-200">
            Images
          </div> */}
        </div>
      </div>
    </div>
  );
}
