import Link from "next/link";
import { SOCIAL_LINKS } from "@/lib/constants";
import { useTheme } from "next-themes";
import { useState } from "react";
import { Tooltip, Button } from "@heroui/react";

export default function Footer() {
  const { resolvedTheme } = useTheme();
  const [copyText, setCopyText] = useState("Copy link");

  function copyToClipboard() {
    navigator.clipboard.writeText("samsondejilawal@gmail.com");
    let text = "Copied!";
    setTimeout(() => (text = "Copy link"), 1500);
    setCopyText(text);
  }

  const year = new Date().getFullYear();

  return (
    <div className="max-screen-wrapper">
      <div className="max-screen-inner flex flex-col gap-6 w-full items-center poppins h-fit text-gray-500 justify-between pb-[60px] md:pb-[40px] md:pt-[36px] md:py-[40px] md:flex-row-reverse">
        <div className="flex flex-col">
          {/* <p>Follow me:</p> */}
          <div className="flex flex-row gap-4">
            {/* Map */}
            {SOCIAL_LINKS.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span
                  className={`flex flex-row gap-1 cursor-pointer w-9 h-9 justify-center items-center rounded-full  bg-[#1A1A1A] hover:bg-[#1A1A1A] transition-colors duration-300 border-[#1A1A1A]`}
                >
                  <img
                    src={`/icons/${
                      link.iconDark 
                    }.svg`}
                    alt=""
                    className="w-[16px]"
                  />
                </span>
              </a>
            ))}

          </div>
        </div>

        <div
          onClick={() => {}}
          className="group cursor-pointer flex flex-row gap-2 px-4 py-1 justify-center items-center rounded-full border-[1.5px] border-[#181C14]/2 bg-[#1A1A1A] transition-colors duration-300 hover:bg-[#FFC914]"
        >
          <Tooltip content="copy email" showArrow={true} color="default" >
            <img
              src={`/icons/copy.svg`}
              alt=""
              className="w-[12px] cursor-pointer"
            />
          </Tooltip>

          <p className="group-hover:text-[#111] text-white/70 text-[16px]">
            samsondejilawal@gmail.com
          </p>
        </div>
        <div className="flex flex-row gap-2 w-fit justify-center items-center md:justify-start ">
          <p className=" text-sm font-normal text-[#fff]/40">© {year}</p>
          {/* <div className="text-gray-500/30">|</div> */}

          {/* <p className=" text-sm font-normal text-[#fff]/40">
            Samson Deji Lawal
          </p> */}
        </div>
      </div>
    </div>
  );
}
