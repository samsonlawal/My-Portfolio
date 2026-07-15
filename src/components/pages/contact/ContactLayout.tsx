import React, { useState } from "react";
import { Tooltip } from "@heroui/react";

export default function ContactLayout() {
  const [copyText, setCopyText] = useState("Click to copy email");

  function copyToClipboard() {
    navigator.clipboard.writeText("samsondejilawal@gmail.com");
    setCopyText("Copied!");
    setTimeout(() => setCopyText("Click to copy email"), 1500);
  }

  return (
    <div className="flex flex-col items-start gap-8 w-full text-left">
      <div className="flex flex-col gap-4 items-start w-full">
        <h3 className="text-[30px] lg:text-[60px] md:w-[85%] tracking-tight leading-10 lg:leading-16 italic text-white select-none">
          Have an{" "}
          <span className="inline-flex items-baseline group">
            {/* Wonky left bracket */}
            <span className="text-[#F1A7B4] pr-[2px] transition-all duration-300 inline-block group-hover:rotate-[15deg] group-hover:scale-110">
              {"{"}
            </span>

            {/* Gradient highlighted text - clickable to copy */}
            <Tooltip content={copyText} showArrow={true} color="default">
              <span
                onClick={copyToClipboard}
                className="bg-gradient-to-r from-[#FFC914] via-[#F1A7B4] to-[#48cAE4] bg-clip-text text-transparent font-bold px-1 group-hover:scale-105 transform inline-block bg-[length:200%_auto] animate-[rainbowFlow_4s_linear_infinite] transition-all duration-300 group-hover:drop-shadow-[0_0_12px_rgba(72,202,228,0.35)] cursor-pointer active:scale-95 active:opacity-90"
              >
                exciting project
              </span>
            </Tooltip>

            {/* Wonky right bracket */}
            <span className="text-[#F1A7B4] pl-[2px] transition-all duration-300 inline-block group-hover:rotate-[-15deg] group-hover:scale-110">
              {"}"}
            </span>
          </span>{" "}
          you need help with?
        </h3>
        
        {/* Grammatically complete description replace for badge */}
        <div className="border-l-2 border-[#48cAE4]/80 pl-4 py-1 max-w-xl mt-2 select-none">
          <p className="text-white/60 text-[13px] md:text-[14px] leading-relaxed font-light font-sans">
            Got an idea? I’m currently available for freelance projects and full-time software engineering roles. Let's start a conversation.
          </p>
        </div>
      </div>

      {/* Rainbow gradient animation rule */}
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
