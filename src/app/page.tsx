"use client";

import Navbar from "@/components/pages/navbar";
import Main from "@/components/layouts/home";

import Image from "next/image";
import About from "@/components/pages/about";
import Works from "@/components/pages/work";
import Projects from "@/components/pages/projects";
import Contact from "@/components/pages/contact";
import Footer from "@/components/pages/footer";
import { AppThemeProvider } from "@/providers/theme-provider";
import { useEffect, useRef, useState } from "react";
import LocomotiveScroll from "locomotive-scroll"; // In _app.js or layout.js
import "locomotive-scroll/dist/locomotive-scroll.css";
import Head from "next/head";
import NameHandwriting from "@/components/reusables/Handwriting";

export default function Home() {
  // const scrollRef = useRef<HTMLDivElement>(null);
  // useEffect(() => {
  //   let scroll: LocomotiveScroll | null = null;

  //   if (scrollRef.current) {
  //     scroll = new LocomotiveScroll({
  //       el: scrollRef.current, // Now TypeScript knows it's not null
  //       smooth: true,
  //       multiplier: 1,
  //       class: "is-revealed",
  //     });
  //   }

  //   return () => {
  //     if (scroll) scroll.destroy();
  //   };
  // }, []);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Head>
        <title>Samson Lawal — Software Engineer</title>
        <meta
          name="description"
          content="I’m a software engineer with a knack for problem-solving and a strong CS background. I build clean, scalable web applications and elegant solutions."
        />

        {/* Open Graph metadata for link previews */}
        <meta property="og:title" content="Samson Lawal — Software Engineer" />
        <meta
          property="og:description"
          content="I’m a software engineer with a knack for problem-solving and a strong CS background. I build clean, scalable web applications and elegant solutions."
        />
        <meta
          property="og:image"
          content="https://samsonlawal.vercel.app/icons/icon.jpg"
        />
        <meta property="og:url" content="https://samsonlawal.vercel.app" />
        <meta property="og:type" content="website" />
      </Head>

      {loading ? (
        <div className="flex flex-col items-center font-dm-sans justify-center min-h-screen bg-[#fff] dark:bg-oxford text-black transition-all duration-300">
          <div className="loader"></div>
        </div>
      ) : (
        <div
          className=" flex flex-col items-center font-dm-sans min-h-screen bg-[#fff] dark:bg-oxford text-black transition-all duration-300"
          // ref={scrollRef}
          // data-scroll-container
        >
          {/* <div className="max-screen-inner"> */}
          <Main />
          <About />
          <Works />
          <Projects />
          <Contact />
          <Footer />
          {/* </div> */}
        </div>
      )}
    </>
  );
}
