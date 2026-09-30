"use client";
 
import React, { useState } from "react";
import { SOCIAL_LINKS } from "@/lib/constants";

export default function FooterLayout() {
  const year = new Date().getFullYear();
  const [copied, setCopied] = useState(false);

  function copyToClipboard() {
    navigator.clipboard.writeText("samsondejilawal@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <div className="w-full flex flex-col gap-10 text-left font-dm-sans">
      {/* Inquiries & Socials */}
      <div className="w-full flex flex-col gap-5">
        <div className="flex flex-col sm:flex-row gap-6 sm:justify-between pt-2 w-full">
          <div className="flex flex-col">
            <span className="font-mono text-[9px] tracking-widest uppercase text-[#48cAE4] font-bold">
              Inquiries
            </span>
            <button
              onClick={copyToClipboard}
              className="text-white/60 hover:text-[#FFC914] active:text-[#FFC914] transition-colors duration-300 text-xs md:text-sm text-left cursor-pointer mt-1 whitespace-nowrap"
            >
              {copied ? "copied!" : "samsondejilawal@gmail.com ↗"}
            </button>
          </div>

          <div className="flex flex-col gap-1.5">
            <span className="font-mono text-[9px] tracking-widest uppercase text-[#FFC914] font-bold">
              Socials
            </span>
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
                    className={`transition-colors duration-300 whitespace-nowrap ${getHoverColor(link.name)}`}
                  >
                    {link.name}
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="flex items-start justify-start w-full">
        <div className="flex flex-col gap-1.5">
          <span className="font-mono text-[9px] tracking-widest uppercase text-[#F1A7B4] font-bold">
            Copyright
          </span>
          <p className="text-white/60 text-xs md:text-[13px] font-normal tracking-normal mt-1">
            © {year} Samson Deji Lawal. All Rights Reserved.
          </p>
        </div>
      </div>
    </div>
  );
}

