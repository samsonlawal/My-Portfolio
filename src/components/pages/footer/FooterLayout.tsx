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
    <div className="w-full pt-4 mt-4 text-left font-dm-sans">
      <div className="flex items-start justify-start w-full">
        {/* Left Column: Copyright */}
        <div className="flex flex-col gap-1.5">
          <span className="font-mono text-[9px] tracking-widest uppercase text-[#F1A7B4] font-bold">
            Copyright
          </span>
          <p className="text-white/70 text-xs md:text-[13px] font-medium tracking-tight mt-1">
            © {year} Samson Deji Lawal. All Rights Reserved.
          </p>
        </div>
      </div>
    </div>
  );
}
