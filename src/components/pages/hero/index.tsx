"use client";

import React, { useState, useRef } from "react";
import { SOCIAL_LINKS } from "@/lib/constants";
import { useTheme } from "next-themes";

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
      className="flex flex-col gap-8 md:gap-10 w-full max-w-lg items-start justify-start py-0 relative select-none"
      ref={homeRef}
    >
      <div className="w-full flex flex-col gap-1.5 items-start">
        <h1
          className="text-[26px] md:text-[34px] text-white font-medium leading-tight tracking-tight cursor-default group"
          onClick={(e) => {
            const el = e.currentTarget;
            el.classList.toggle("hero-name-active");
          }}
        >
          <span className="transition-all duration-500 group-hover:bg-gradient-to-r group-hover:from-[#FFC914] group-hover:via-[#F1A7B4] group-hover:to-[#48cAE4] group-hover:bg-clip-text group-hover:text-transparent group-hover:bg-[length:200%_auto] group-hover:animate-[rainbowFlow_4s_linear_infinite] [.hero-name-active_&]:bg-gradient-to-r [.hero-name-active_&]:from-[#FFC914] [.hero-name-active_&]:via-[#F1A7B4] [.hero-name-active_&]:to-[#48cAE4] [.hero-name-active_&]:bg-clip-text [.hero-name-active_&]:text-transparent [.hero-name-active_&]:bg-[length:200%_auto] [.hero-name-active_&]:animate-[rainbowFlow_4s_linear_infinite]">
            Samson Deji Lawal
          </span>
        </h1>

        <p className="text-white/60 text-[13px] md:text-[14px] leading-relaxed font-light max-w-sm mt-0.5">
          Frontend engineer focused on building clean, fast, and accessible digital products with React, TypeScript, and modern web architectures.
        </p>
      </div>

      <div className="w-full flex flex-col gap-5">
        <div className="flex flex-col sm:flex-row gap-6 sm:justify-between pt-2 w-full">
          <div className="flex flex-col order-1 md:order-none">
            <span className="font-mono text-[9px] tracking-widest uppercase text-[#48cAE4] font-bold">Inquiries</span>
            <button
              onClick={copyToClipboard}
              className="text-white/60 hover:text-[#FFC914] active:text-[#FFC914] transition-colors duration-300 text-xs md:text-sm text-left cursor-pointer mt-1"
            >
              {copied ? "copied!" : "samsondejilawal@gmail.com ↗"}
            </button>
          </div>

          <div className="flex flex-col gap-1.5 order-2 md:order-none">
            <span className="font-mono text-[9px] tracking-widest uppercase text-[#FFC914] font-bold">Socials</span>
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
