import { useGsapFadeIn } from "@/hooks/useGsapFadeIn";
import React, { useRef } from "react";

const WORK_EXPERIENCE = [
  {
    title: "webbie",
    description:
      "A website design discovery platform that showcases trendsetting website designs. I implemented key product functionalities, worked alongside designers and backend engineers to ensure pixel-perfect designs and seamless API Integration.",
    techStack: "React • Typescript • Tailwind ",
    image: "/icons/webbie-large.svg",
    alt: "webbie-large",
  },
  {
    title: "cvspan",
    description:
      "A product development agency transitioning from UI/UX design and education to full-scale product development. I contributed to the redevelopment user interfaces for their platform showcasing their expanded product development capabilities.",
    techStack: "React • Typescript • Tailwind ",
    image: "/icons/cvspan-large.svg",
    alt: "cvspan-large",
  },
];

export default function Works() {
  const worksRef = useRef<HTMLDivElement>(null);

  useGsapFadeIn({ ref: worksRef, scroll: true });

  return (
    <div className="max-screen-wrapper py-[80px]" id="work">
      <div className="max-screen-inner flex flex-col gap-12 w-full items-start font-dm-sans  text-black justify-between">
        <h3
          ref={worksRef}
          className="text-[30px] md:text-[50px] tracking-tight leading-10 lg:leading-16 italic text-oxford dark:text-[#fff]"
        >
          Work Experience
        </h3>

        <div className="flex flex-col md:flex-row items-center w-full gap-8">
          {WORK_EXPERIENCE.map((work, index) => (
            <div
              ref={worksRef}
              key={index}
              className="flex flex-col border-1  gap-4 items-start justify-center rounded-[10px] w-full md:w-[500px] px-[16px] py-[18px] md:px-[24px] md:py-[24px] border-[#2B3223]/1 dark:border-powder/8 bg-powder/3"
            >
              <div className="flex flex-col gap-1 w-full items-start">
                <h4 className="text-[24px] text-oxford dark:text-white">
                  {work.title}
                </h4>
                <p className="text-[14px] dark:text-[#9d9d9d] text-[#5D605B] leading-4.5">
                  {work.description}
                  <br />
                  <br />
                  <span className="dark:text-[#9d9d9d] text-[#5D605B]">
                    {work.techStack}
                  </span>
                </p>
              </div>
              <div className="flex flex-row gap-1 justify-center items-end bg-oxford/20 p-[10px] rounded-sm">
                <img
                  src={work.image}
                  alt={work.alt}
                  className="w-[200px] rounded-lg"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
