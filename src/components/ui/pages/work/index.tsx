import { useGsapFadeIn } from "@/hooks/useGsapFadeIn";
import React, { useRef } from "react";

const WORK_EXPERIENCE = [
  {
    title: "webbie",
    // description:
    //   "A website design discovery platform that showcases trendsetting website designs. I implemented key product functionalities, worked alongside designers and backend engineers to ensure pixel-perfect designs and seamless API Integration.",
    description:
      "A website design discovery platform showcasing trendsetting digital products. I implemented core frontend features and collaborated with designers and backend engineers to deliver pixel-accurate interfaces with smooth API integration.",
    techStack: "React • Typescript • Tailwind ",
    image: "/icons/webbie-large.svg",
    alt: "webbie-img",
    link: "https://webbie.io",
    year: "Jun - Feb 2024",
    role: "Frontend Developer",
  },
  {
    title: "cvspan",
    // description:
    //   "A product development agency transitioning from UI/UX design and education to full-scale product development. I contributed to the redevelopment user interfaces for their platform showcasing their expanded product development capabilities.",
    description:
      "A product development agency evolving from UI/UX design and education into full-scale product development. I contributed to rebuilding user interfaces that reflected their expanded product offerings and capabilities.",
    techStack: "React • Typescript • Tailwind ",
    image: "/icons/cvspan-large.svg",
    alt: "cvspan-img",
    link: "https://cvspan.com",
    year: "Jun - Feb 2024",
    role: "Frontend Developer",
  },
  {
    title: "medvive",
    description:
      "MedVive is a health-tech product focused on improving digital access to healthcare services. I worked as a frontend intern supporting the development of user-facing features and internal tools.",
    techStack: "React • Typescript • Firebase • Tailwind ",
    image: "/icons/medvive-logo.png",
    alt: "medvive-img",
    link: "https://medvive.ng",
    year: "Jun - Present",
    role: "Frontend Developer",
    bullets: [
      "refactored codebase to typescript",
      "built responsive uis",
      "INtegrated a wallet feature",
    ],
  },
];

export default function Works() {
  const worksRef = useRef<HTMLDivElement>(null);

  const workRef = useRef<HTMLDivElement>(null);

  useGsapFadeIn({ ref: workRef, scroll: true });

  return (
    <div className="max-screen-wrapper py-[80px]" id="work" ref={worksRef}>
      <div className="max-screen-inner flex flex-col gap-12 w-full items-start font-dm-sans  text-black justify-between">
        <h3
          ref={workRef}
          className="text-[30px] md:text-[50px] tracking-tight leading-10 lg:leading-16 italic text-oxford dark:text-[#fff]"
        >
          Work Experience
        </h3>

        <div
          ref={workRef}
          className="flex flex-col md:flex-row flex-wrap items-center w-full gap-3"
        >
          {WORK_EXPERIENCE.map((work, index) => (
            <div
              // ref={worksRef}
              key={index}
              className="flex flex-col border-1 h-fit gap-4 items-start justify-center rounded-[10px] w-full md:w-[380px] md:flex-shrink-0 px-[16px] py-[18px] md:px-[24px] md:py-[24px] border-[#2B3223]/1 dark:border-powder/8 bg-powder/3 transition-all duration-300"
            >
              <div className="flex flex-col gap-3 w-full items-start">
                <div className="flex flex-row w-full items-start justify-between">
                  <div className="flex flex-col w-fit items-start justify-start -space-y-1.5">
                    <a
                      href={work.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-oxford dark:text-white  hover:text-[#2B3223] dark:hover:text-powder transition-all duration-300"
                    >
                      <h4 className="text-[22px] flex flex-row gap-1 justify-center items-center">
                        {work.title}
                      </h4>
                    </a>

                    <p className="text-[14px] text-powder">
                      {work.role}

                      <span className="ml-1 text-powder dark:text-powder/60">
                        | {work.year}
                      </span>
                    </p>
                  </div>

                  <a
                    href={work.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-oxford h-[26px] poppins text-[13px] rounded-sm w-[26px] flex justify-center items-center border border-[#2B3223]/10 dark:border-powder/8 hover:bg-powder/10"
                  >
                    <img
                      src="/icons/ext-link.svg"
                      alt=""
                      className="w-[10px] h-[10px]"
                    />
                  </a>
                </div>

                <p className="text-[14px] min-h-[100px] dark:text-[#9d9d9d] text-[#5D605B] leading-4.5">
                  {work.description}
                  <br />
                  <br />
                  <span className="dark:text-[#9d9d9d] text-[#5D605B]">
                    {work.techStack}
                  </span>
                </p>
              </div>
              {/* <div className="flex flex-row gap-1 justify-center items-end bg-oxford/20 dark:bg-powder/20 p-[2px] rounded-md">
                <img
                  src={work.image}
                  alt={work.alt}
                  className="w-[170px] rounded-sm"
                />
              </div> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
