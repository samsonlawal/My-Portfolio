"use client";

import React, { useState, useRef } from "react";
import { SOCIAL_LINKS } from "@/lib/constants";
import { useTheme } from "next-themes";
import { LANGUAGES_DATA, TOOLS_DATA } from "../about/aboutData";

export default function Hero() {
  const { resolvedTheme } = useTheme();
  const homeRef = useRef<HTMLDivElement>(null);

  const [copied, setCopied] = useState(false);
  
    function copyToClipboard() {
      navigator.clipboard.writeText("samsondejilawal@gmail.com");
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }

  return (
    <div
      className="flex h-full flex-col gap-8 w-full items-start justify-between py-[60px] md:py-[60px] relative select-none"
      ref={homeRef}
    >
      <div className="flex flex-col gap-2">
        <div
          onClick={(e) =>
            e.currentTarget.classList.toggle("hero-badge-active")
          }
          className="bg-[#48cAE4] hover:bg-[length:200%_auto] hover:animate-[rainbowFlow_4s_linear_infinite] hover:bg-gradient-to-r hover:from-[#FFC914] hover:via-[#F1A7B4] hover:to-[#48cAE4] [&.hero-badge-active]:bg-[length:200%_auto] [&.hero-badge-active]:animate-[rainbowFlow_4s_linear_infinite] [&.hero-badge-active]:bg-gradient-to-r [&.hero-badge-active]:from-[#FFC914] [&.hero-badge-active]:via-[#F1A7B4] [&.hero-badge-active]:to-[#48cAE4] px-2.5 py-1 rounded-sm flex flex-row items-center gap-1.5 hover:rotate-[-1.5deg] hover:scale-105 transition-all duration-300 w-fit select-none cursor-pointer shadow-[3px_3px_0px_#111] hover:shadow-none"
        >
          <img
            src="/icons/code-symbol-dark.svg"
            alt="code"
            className="w-[14px] h-[14px]"
          />
          <p className="text-[12px] font-bold text-black uppercase tracking-wider">
            Frontend Developer
          </p>
        </div>

        <div className="flex flex-col gap-3 justify-center items-start">
          <h1
            className="text-[38px] md:text-[54px] text-white font-medium leading-none tracking-tight cursor-default group"
            onClick={(e) => {
              const el = e.currentTarget;
              el.classList.toggle("hero-name-active");
            }}
          >
            <span className="transition-all duration-500 group-hover:bg-gradient-to-r group-hover:from-[#FFC914] group-hover:via-[#F1A7B4] group-hover:to-[#48cAE4] group-hover:bg-clip-text group-hover:text-transparent group-hover:bg-[length:200%_auto] group-hover:animate-[rainbowFlow_4s_linear_infinite] [.hero-name-active_&]:bg-gradient-to-r [.hero-name-active_&]:from-[#FFC914] [.hero-name-active_&]:via-[#F1A7B4] [.hero-name-active_&]:to-[#48cAE4] [.hero-name-active_&]:bg-clip-text [.hero-name-active_&]:text-transparent [.hero-name-active_&]:bg-[length:200%_auto] [.hero-name-active_&]:animate-[rainbowFlow_4s_linear_infinite]">
              Samson Deji Lawal
            </span>
          </h1>
        </div>
      </div>

      <div>
        <div className="flex flex-col gap-3 items-start text-left w-full mb-8 lg:pr-24">
          <span className="font-mono text-[11px] tracking-widest uppercase text-[#fff]/60 font-bold">
            Languages & Frameworks
          </span>
          <div className="flex flex-wrap gap-2 justify-start">
            {LANGUAGES_DATA.map((lang, i) => (
              <div
                key={i}
                className="flex items-center gap-1.5 bg-[#1a1a1a] hover:bg-white/5 border border-white/5 px-2.5 py-1 rounded-md transition-colors duration-200"
              >
                <img
                  src={lang.icon}
                  alt={lang.name}
                  className="w-3.5 h-3.5"
                />
                <span className="text-[12px] font-medium text-[#9d9d9d]">
                  {lang.name}
                </span>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-3 items-start text-left w-full">
          <span className="font-mono text-[11px] tracking-widest uppercase text-[#fff]/60 font-bold">
            Tools
          </span>
          <div className="flex flex-wrap gap-2 justify-start">
            {TOOLS_DATA.map((tool, i) => (
              <div
                key={i}
                className="flex items-center gap-1.5 bg-[#1a1a1a] hover:bg-white/5 border border-white/5 px-2.5 py-1 rounded-md transition-colors duration-200"
              >
                <img
                  src={tool.icon}
                  alt={tool.name}
                  className="w-3.5 h-3.5"
                />
                <span className="text-[12px] font-medium text-[#9d9d9d]">
                  {tool.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-6 lg:justify-between pt-10">
        <div className="flex flex-col order-1 md:order-none">
          <span className="font-mono text-[9px] tracking-widest uppercase text-[#fff]/60 font-bold">Inquiries</span>
          <button
            onClick={copyToClipboard}
            className="text-white/60 hover:text-[#FFC914] active:text-[#FFC914] transition-colors duration-300 text-xs md:text-sm text-left cursor-pointer mt-1"
          >
            {copied ? "copied!" : "samsondejilawal@gmail.com ↗"}
          </button>
        </div>

        <div className="flex flex-col gap-1.5 order-2 md:order-none">
          <span className="font-mono text-[9px] tracking-widest uppercase text-[#fff]/60 font-bold">Socials</span>
          <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs md:text-[13px] text-white/60">
            {SOCIAL_LINKS.map((link, index) => {
              const getHoverColor = (name: string) => {
                switch (name.toLowerCase()) {
                  case "github":
                    return "hover:text-[#48cAE4] active:text-[#48cAE4]";
                  case "twitter":
                    return "hover:text-[#F1A7B4] active:text-[#F1A7B4]";
                  case "linkedin":
                    return "hover:text-[#FFC914] active:text-[#FFC914]";
                  case "email":
                    return "hover:text-[#2ea44f] active:text-[#2ea44f]";
                  default:
                    return "hover:text-white active:text-white";
                }
              };

              return (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`transition-colors duration-300 ${getHoverColor(link.name)}`}
                >
                  {link.name}
                </a>
              );
            })}
          </div>
        </div>
      </div>

      <style
        dangerouslySetInnerHTML={{
          __html: `
        @keyframes rainbowFlow {
          0% { background-position: 0% 50% }
          50% { background-position: 100% 50% }
          100% { background-position: 0% 50% }
        }
      `,
        }}
      />
    </div>
  );
}
