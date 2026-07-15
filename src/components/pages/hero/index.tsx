"use client";

import React, { useRef } from "react";
import { useGsapFadeIn } from "@/hooks/useGsapFadeIn";
import { SOCIAL_LINKS } from "@/lib/constants";
import { useTheme } from "next-themes";
import { LANGUAGES_DATA, TOOLS_DATA } from "../about/aboutData";

export default function Hero() {
  const { resolvedTheme } = useTheme();
  const homeRef = useRef<HTMLDivElement>(null);

  useGsapFadeIn({ ref: homeRef, delay: 0.1 });

  const getSocialHoverColor = (name: string) => {
    switch (name.toLowerCase()) {
      case "github":
        return "hover:text-[#48cAE4]";
      case "twitter":
        return "hover:text-[#F1A7B4]";
      case "linkedin":
        return "hover:text-[#FFC914]";
      case "email":
        return "hover:text-[#2ea44f]";
      default:
        return "hover:text-white";
    }
  };

  return (
    <div
      className="w-full py-[40px] md:py-[60px] flex flex-col gap-8 justify-center items-start relative select-none"
      ref={homeRef}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-40 lg:gap-16 w-full items-start text-left">
        {/* Left Column: Bio */}
        <div className="flex flex-col gap-5 w-full items-start justify-start">
          <div
            onClick={(e) => e.currentTarget.classList.toggle("hero-badge-active")}
            className="bg-[#48cAE4] hover:bg-[length:200%_auto] hover:animate-[rainbowFlow_4s_linear_infinite] hover:bg-gradient-to-r hover:from-[#FFC914] hover:via-[#F1A7B4] hover:to-[#48cAE4] [&.hero-badge-active]:bg-[length:200%_auto] [&.hero-badge-active]:animate-[rainbowFlow_4s_linear_infinite] [&.hero-badge-active]:bg-gradient-to-r [&.hero-badge-active]:from-[#FFC914] [&.hero-badge-active]:via-[#F1A7B4] [&.hero-badge-active]:to-[#48cAE4] px-2.5 py-1 rounded-sm flex flex-row items-center gap-1.5 rotate-[-1.5deg] hover:rotate-0 hover:scale-105 transition-all duration-300 w-fit select-none cursor-pointer shadow-[3px_3px_0px_#111] hover:shadow-none"
          >
            <img src="/icons/code-symbol-dark.svg" alt="code" className="w-[14px] h-[14px]" />
            <p className="text-[12px] font-bold text-black uppercase tracking-wider">Frontend Developer</p>
          </div>

          <div className="flex flex-col gap-3 justify-center items-start">
            <h1
              className="text-[38px] md:text-[54px] text-white font-medium leading-none tracking-tight cursor-default group"
              onClick={(e) => {
                const el = e.currentTarget;
                el.classList.toggle("hero-name-active");
              }}
            >
              {/* Left bracket — inline, hidden by default, expands on hover/click */}
              <span className="inline-block text-[#F1A7B4] italic w-0 overflow-hidden opacity-0 transition-all duration-300 group-hover:w-[24px] md:group-hover:w-[32px] group-hover:opacity-100 group-hover:rotate-[12deg] [.hero-name-active_&]:w-[24px] md:[.hero-name-active_&]:w-[32px] [.hero-name-active_&]:opacity-100 [.hero-name-active_&]:rotate-[12deg]">{"{"}</span>
              {/* Name text */}
              <span className="transition-all duration-500 group-hover:bg-gradient-to-r group-hover:from-[#FFC914] group-hover:via-[#F1A7B4] group-hover:to-[#48cAE4] group-hover:bg-clip-text group-hover:text-transparent group-hover:bg-[length:200%_auto] group-hover:animate-[rainbowFlow_4s_linear_infinite] [.hero-name-active_&]:bg-gradient-to-r [.hero-name-active_&]:from-[#FFC914] [.hero-name-active_&]:via-[#F1A7B4] [.hero-name-active_&]:to-[#48cAE4] [.hero-name-active_&]:bg-clip-text [.hero-name-active_&]:text-transparent [.hero-name-active_&]:bg-[length:200%_auto] [.hero-name-active_&]:animate-[rainbowFlow_4s_linear_infinite]">
                Samson Deji Lawal
              </span>
              {/* Right bracket — inline, hidden by default, expands on hover/click */}
              <span className="inline-block text-[#F1A7B4] italic w-0 overflow-hidden opacity-0 transition-all duration-300 group-hover:w-[24px] md:group-hover:w-[32px] group-hover:opacity-100 group-hover:rotate-[-12deg] [.hero-name-active_&]:w-[24px] md:[.hero-name-active_&]:w-[32px] [.hero-name-active_&]:opacity-100 [.hero-name-active_&]:rotate-[-12deg]">{"}"}</span>
            </h1>
            <p className="text-[15px] md:text-[16px] text-white/60 font-normal leading-[20px] md:leading-[24px]">
              I'm a developer with a knack for problem-solving and a strong background in computer science. I enjoy building scalable and maintainable web applications/solutions.
            </p>
          </div>

          <div className="flex flex-row gap-5 mt-2">
            {SOCIAL_LINKS.map((link, index) => (
              <a key={index} href={link.href} target="_blank" rel="noopener noreferrer" className={`flex items-center gap-1.5 text-white transition-colors duration-300 group/social ${getSocialHoverColor(link.name)}`}>
                <span className="flex flex-row gap-1 cursor-pointer w-fit py-1.5 justify-center items-center rounded-full transition-colors duration-300">
                  <img src={`/icons/${resolvedTheme === "dark" ? link.iconDark : link.iconLight}.svg`} alt={link.name} className={`${link.width} brightness-0 invert opacity-60 group-hover/social:opacity-100 transition-opacity`} />
                  <p className="hidden md:block text-[13px] font-mono ml-1.5">{link.name}</p>
                </span>
              </a>
            ))}
          </div>
        </div>

        {/* Right Column: Stacks */}
        <div className="flex flex-col gap-6 w-full lg:pl-10">
          <div className="flex flex-col gap-3 items-start text-left w-full">
            <span className="font-mono text-[11px] tracking-widest uppercase text-[#FFC914] font-bold">Languages & Frameworks</span>
            <div className="flex flex-wrap gap-2 justify-start">
              {LANGUAGES_DATA.map((lang, i) => (
                <div key={i} className="flex items-center gap-1.5 bg-[#1a1a1a] hover:bg-white/5 border border-white/5 px-2.5 py-1 rounded-md transition-colors duration-200">
                  <img src={lang.icon} alt={lang.name} className="w-3.5 h-3.5" />
                  <span className="text-[12px] font-medium text-[#9d9d9d]">{lang.name}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-3 items-start text-left w-full">
            <span className="font-mono text-[11px] tracking-widest uppercase text-[#48cAE4] font-bold">Tools</span>
            <div className="flex flex-wrap gap-2 justify-start">
              {TOOLS_DATA.map((tool, i) => (
                <div key={i} className="flex items-center gap-1.5 bg-[#1a1a1a] hover:bg-white/5 border border-white/5 px-2.5 py-1 rounded-md transition-colors duration-200">
                  <img src={tool.icon} alt={tool.name} className="w-3.5 h-3.5" />
                  <span className="text-[12px] font-medium text-[#9d9d9d]">{tool.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Rainbow gradient animation */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes rainbowFlow {
          0% { background-position: 0% 50% }
          50% { background-position: 100% 50% }
          100% { background-position: 0% 50% }
        }
      `}} />
    </div>
  );
}
