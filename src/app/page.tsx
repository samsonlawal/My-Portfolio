"use client";

import Navbar from "@/components/pages/navbar";
import Main from "@/components/layouts/home";

import Image from "next/image";
import About from "@/components/pages/about";
import Works from "@/components/pages/work";
import Projects from "@/components/pages/projects";
import Contact from "@/components/pages/contact";
import { AppThemeProvider } from "@/providers/theme-provider";
import { useEffect, useRef } from "react";
import LocomotiveScroll from "locomotive-scroll"; // In _app.js or layout.js
import "locomotive-scroll/dist/locomotive-scroll.css";

export default function Home() {
  const scrollRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    let scroll: LocomotiveScroll | null = null;

    if (scrollRef.current) {
      scroll = new LocomotiveScroll({
        el: scrollRef.current, // Now TypeScript knows it's not null
        smooth: true,
        multiplier: 1,
        class: "is-revealed",
      });
    }

    return () => {
      if (scroll) scroll.destroy();
    };
  }, []);

  return (
    <AppThemeProvider>
      <div
        className="max-screen-wrapper flex flex-col items-center font-dm-sans min-h-screen bg-[#F0EFED] text-black "
        ref={scrollRef}
        data-scroll-container
      >
        <div className="max-screen-inner">
          <Main />
          <About />
          <Works />
          <Projects />
          <Contact />
        </div>
      </div>
    </AppThemeProvider>
  );
}
