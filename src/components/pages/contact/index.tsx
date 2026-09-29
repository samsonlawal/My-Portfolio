"use client";

import React from "react";
import ContactLayout from "./ContactLayout";

export default function Contact() {
  return (
    <div className="w-full" id="contact">
      <div className="flex flex-col gap-8 w-full items-start justify-start">
        {/* Render Layout */}
        <div className="w-full">
          <ContactLayout />
        </div>
      </div>
    </div>
  );
}
