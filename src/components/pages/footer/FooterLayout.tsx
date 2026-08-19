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
      <div className="flex items-start justify-start w-full text-xs md:text-sm text-white/50">
        {/* Left Column: Copyright (3rd/last on mobile) */}
        <div className="flex flex-col gap-1.5 order-3 md:order-none">
          <span className="text-[9px] tracking-widest uppercase text-[#F1A7B4]/90 font-bold">Copyright</span>
          <p className="text-white/60 font-mono text-[11px] md:text-[13px] tracking-wide">© {year} Samson Deji Lawal. All Rights Reserved.</p>
        </div>

      

      
      </div>
    </div>
  );
}
