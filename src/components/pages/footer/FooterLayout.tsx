import React, { useState } from "react";
import { SOCIAL_LINKS } from "@/lib/constants";

export default function FooterLayout() {
  const [copied, setCopied] = useState(false);

  function copyToClipboard() {
    navigator.clipboard.writeText("samsondejilawal@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  const year = new Date().getFullYear();

  return (
    <div className="max-screen-inner w-full pt-4 mt-4 text-left font-sans">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start w-full text-xs md:text-sm text-white/50">
        {/* Left Column: Copyright (3rd/last on mobile) */}
        <div className="flex flex-col gap-1.5 order-3 md:order-none">
          <span className="font-mono text-[9px] tracking-widest uppercase text-[#F1A7B4]/90 font-bold">Copyright</span>
          <p className="text-white/60 font-mono text-[11px] md:text-[13px] tracking-wide">© {year} Samson Deji Lawal. All Rights Reserved.</p>
        </div>

        {/* Middle Column: Email link (1st on mobile) */}
        <div className="flex flex-col gap-1.5 order-1 md:order-none">
          <span className="font-mono text-[9px] tracking-widest uppercase text-[#FFC914]/90 font-bold">Inquiries</span>
          <button
            onClick={copyToClipboard}
            className="text-white hover:text-[#FFC914] active:text-[#FFC914] transition-colors duration-300 font-mono text-xs md:text-sm text-left cursor-pointer mt-1"
          >
            {copied ? "copied!" : "samsondejilawal@gmail.com ↗"}
          </button>
        </div>

        {/* Right Column: Text Social Links (2nd on mobile) */}
        <div className="flex flex-col gap-1.5 order-2 md:order-none">
          <span className="font-mono text-[9px] tracking-widest uppercase text-[#48cAE4]/90 font-bold">Socials</span>
          <div className="flex flex-wrap gap-x-4 gap-y-1 font-mono text-xs md:text-sm text-white">
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
  );
}
