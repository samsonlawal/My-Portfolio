"use client";

import React from "react";
import FooterLayout from "./FooterLayout";

export default function Footer() {
  return (
    <div className="w-full pt-[10px] md:pt-[10px]" id="footer">
      <div className="max-screen-inner flex flex-col gap-8 w-full items-start justify-start">
        {/* Render Layout */}
        <div className="w-full">
          <FooterLayout />
        </div>
      </div>
    </div>
  );
}
