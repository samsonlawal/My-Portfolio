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
      link: "https://taskstackhq.vercel.app",
      github: "https://github.com/samsonlawal/Task-Management-Workspace",
    },

    {
      // year: "2025",
      name: "Knote Taker",
      description:
        "A simple app to capture, organize, and format notes with markdown support, providing a fast, and secure note-taking",
      stack: "Next • Typescript •  Supabase • Tailwind • MDX",
      images: ["/icons/card-view.svg", "/icons/list-view.svg"],
      link: "https://knotetaker.vercel.app",
      github: "https://github.com/samsonlawal/Note-Taking-App",
    },

    {
      // year: "2024",
      name: "CoinIn",
      description:
        "Crypto app that shows the current market price of crypto assets, top gainer and losers, portfolio to keep track of potential assets.",
      stack: "React • Supabase",
      images: ["/icons/card-view.svg", "/icons/list-view.svg"],
      link: "https://coinin.netlify.app/",
      github: "https://github.com/samsonlawal/CoinIn",
    },

    {
      // year: "2023",
      name: "Movie Release",
      description: "A website for information on movies and TV shows.",
      stack: "React",
      images: ["/icons/MovieRelease-I.png", "/icons/MovieRelease.png"],
      link: "https://movierelease.netlify.app",
      github: "https://github.com/samsonlawal/MovieRelease",
    },
  ];

  const projectsRef = useRef<HTMLDivElement>(null);

  useGsapFadeIn({ ref: projectsRef, scroll: true });

  return (
    <div className="max-screen-wrapper py-[60px] bg-red" id="projects">
      <div className="max-screen-inner flex flex-col gap-10 w-full items-start font-dm-sans text-black justify-start">
        <h3 className="text-[30px] lg:text-[50px] tracking-tight leading-10 lg:leading-16 italic text-oxford dark:text-[#fff]">
          Projects
        </h3>
        <div
          className="  grid w-full gap-4
  justify-center
  grid-cols-1
  md:grid-cols-3"
        >
          {projects.map((project, index) => (
            <div
              key={index}
              ref={projectsRef}
              className="flex flex-col border-1 gap-4 items-start justify-between rounded-[10px] w-full md:w-[380px] px-[16px] py-[18px] md:px-[24px] md:py-[24px] border-[#2B3223]/1 dark:border-powder/8 bg-powder/3"
            >
              <div className="flex flex-col gap-1 w-full items-start h-full">
                <div className="flex flex-row gap-2 w-full justify-between">
                  <h4 className="text-[24px] text-oxford dark:text-white">
                    {project.name}
                  </h4>
                  <div className="flex flex-row gap-2">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-oxford h-[30px] poppins text-[13px] rounded-sm w-[30px] flex justify-center items-center border border-[#2B3223]/1 dark:border-powder/8 hover:bg-powder/10 transition-all duration-300"
                    >
                      <img
                        src="/icons/ext-link.svg"
                        alt=""
                        className="w-[11px] h-[11px]"
                      />
                    </a>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-oxford h-[30px] poppins text-[13px] rounded-sm w-[30px] flex justify-center items-center border border-[#2B3223]/1 dark:border-powder/8 hover:bg-powder/10 transition-all duration-300"
                    >
                      <img
                        src="/icons/github-out.svg"
                        alt=""
                        className="w-[11px] h-[11px]"
                      />
                    </a>
                  </div>
                </div>

                <p className="text-[14px] dark:text-[#9d9d9d] text-[#5D605B] line-clamp-3 pb-2 leading-4.5">
                  {project.description}
                </p>
                <p className="text-[14px] dark:text-[#9d9d9d] text-[#5D605B]">
                  {project.stack}
                </p>
              </div>

              <div className="flex flex-row gap-[2px] w-fit justify-center items-center p-[2px] rounded-sm">
                <ProjectGallery images={project.images} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
