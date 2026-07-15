"use client";

import React from "react";
import ContactLayout from "./ContactLayout";

export default function Contact() {
  return (
    <div className="max-screen-wrapper py-[80px] md:py-[120px]" id="contact">
      <div className="max-screen-inner flex flex-col gap-8 w-full items-start justify-start">
        {/* Render Layout */}
        <div className="w-full">
          <ContactLayout />
        </div>
      </div>
    </div>
  );
}
