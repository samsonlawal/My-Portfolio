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
      <div className="max-screen-inner flex flex-col gap-6 w-full items-center poppins h-fit text-gray-500 justify-between pb-[120px] pt-[36px] md:py-[40px] md:flex-row-reverse">
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
                  className={`flex flex-row gap-1 cursor-pointer w-9 h-9 justify-center items-center bg-[#181C14]/10 rounded-full hover:bg-[#181c14]/40 dark:bg-[#90aecf]/10 dark:hover:bg-[#90aecf] transition-colors duration-300 border-[#181C14]/2 dark:border-[#90aecf]/2 ${
                    resolvedTheme === "dark"
                      ? "dark:bg-[#90aecf]/10 dark:hover:bg-[#90aecf]"
                      : ""
                  }`}
                >
                  <img
                    src={`/icons/${
                      resolvedTheme === "dark" ? link.iconDark : link.iconLight
                    }.svg`}
                    alt=""
                    className="w-[16px]"
                  />
                </span>
              </a>
            ))}

            {/* <a
              href="https://github.com/samsonlawal"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="flex flex-row gap-1 cursor-pointer w-9 h-9 justify-center items-center bg-[#181C14]/20 rounded-full hover:bg-[#181c14]/40 dark:bg-[#90aecf]/70 dark:hover:bg-[#90aecf] transition-colors duration-300">
                <img
                  src="/icons/githubb-dark.svg"
                  alt=""
                  className="w-[16px]"
                />
              </span>
            </a>

            <a
              href="https://x.com/samsondejs"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="flex flex-row gap-1 cursor-pointer w-9 h-9 justify-center items-center bg-[#181C14]/20 rounded-full hover:bg-[#181c14]/40 dark:bg-[#90aecf]/70 dark:hover:bg-[#90aecf] transition-colors duration-300">
                <img
                  src="/icons/twitterr-dark.svg"
                  alt=""
                  className="w-[16px]"
                />
              </span>
            </a>

            <a href="https://" target="_blank" rel="noopener noreferrer">
              <span className="flex flex-row gap-1 cursor-pointer w-9 h-9 justify-center items-center hover:bg-[#181c14]/40 transition-colors duration-300 bg-[#181C14]/20 dark:bg-[#90aecf]/70 dark:hover:bg-[#90aecf] rounded-full">
                <img
                  src="/icons/linkedinn-dark.svg"
                  alt=""
                  className="w-[14px]"
                />
              </span>
            </a> */}
          </div>
        </div>
        {/* <div
          onClick={() => {}}
          className="cursor-pointer flex flex-row gap-2 px-4 py-1 justify-center items-center rounded-full border-[1.5px] border-[#181C14]/20 bg-[#181C14]/20 hover:bg-[#181c14]/40 dark:border-[#90aecf]/0 dark:bg-powder/8 transition-colors duration-300"
        >
          <img
            src={`/icons/${
              resolvedTheme === "dark" ? "copy" : "copy-dark"
            }.svg`}
            alt=""
            className="w-[14px] cursor-pointer"
          />

          <p className="text-[#181C14] dark:text-white/70 text-[16px]">
            samsondejilawal@gmail.com
          </p>
        </div> */}

        <div
          onClick={() => {}}
          className="cursor-pointer flex flex-row gap-2 px-4 py-1 justify-center items-center rounded-full border-[1.5px] border-[#181C14]/2 bg-[#181C14]/10 hover:bg-[#181c14]/40 dark:border-[#90aecf]/0 dark:bg-powder/8 transition-colors duration-300"
        >
          <Tooltip content="copy email" showArrow={true} color="default">
            <img
              src={`/icons/${
                resolvedTheme === "dark" ? "copy" : "copy-dark"
              }.svg`}
              alt=""
              className="w-[14px] cursor-pointer"
            />
          </Tooltip>

          <p className="text-[#181C14] dark:text-white/70 text-[16px]">
            samsondejilawal@gmail.com
          </p>
        </div>
        <div className="flex flex-row gap-2 w-fit justify-center items-center md:justify-start ">
          <p className=" text-sm font-medium text-gray-500/70">© {year}.</p>
          {/* <div className="text-oxford|30 dark:text-gray-500/30">|</div> */}

          <p className=" text-sm font-medium text-gray-500/70">
            Samson Deji Lawal
          </p>
        </div>
      </div>
    </div>
  );
}
