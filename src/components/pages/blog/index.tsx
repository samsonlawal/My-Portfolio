"use client";

import React from "react";
import { BLOG_DATA } from "./blogData";

export default function Blog() {
  return (
    <div className="w-full flex flex-col gap-6" id="blog">
      {/* Section Header */}
      <span className="font-mono text-[10px] md:text-[11px] tracking-widest uppercase text-[#FFC914] font-bold">
        Writings & Readings
      </span>

      {/* Blog & Reading List */}
      <div className="flex flex-col w-full gap-8 md:gap-10">
        {BLOG_DATA.map((item, index) => (
          <div
            key={index}
            className="group flex flex-col w-full gap-2 transition-all duration-300 items-start text-left cursor-default"
          >
            {/* Date / Meta */}
            {item.date && (
              <div className="text-[10px] md:text-[11px] text-white/50 font-mono tracking-wider pt-0.5 flex-shrink-0 uppercase whitespace-nowrap select-none">
                {item.date} {item.tag && `• ${item.tag}`}
              </div>
            )}

            {/* Topic / Title */}
            <div className="flex flex-col w-full gap-1">
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[15px] md:text-[16px] font-medium text-white group-hover:text-[#48CAE4] transition-colors duration-300 tracking-tight w-fit flex items-center"
              >
                {item.title}
                <span className="font-mono text-[13px] text-white/40 group-hover:text-[#48CAE4] transition-colors duration-300 ml-1.5">
                  ↗
                </span>
              </a>

              {/* 2-line Description */}
              <p className="text-[13px] md:text-[13.5px] text-white/60 leading-relaxed max-w-md font-light">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
