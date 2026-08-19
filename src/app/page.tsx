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
import Head from "next/head";
import Preloader from "@/components/reusables/Preloader";
import Blog from "@/components/pages/blog";

export default function Home() {

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

      <div className="flex flex-col lg:flex-row max-w-7xl mx-auto min-h-screen w-full px-3 lg:px-6 font-dm-sans bg-[#fff] dark:bg-[#111] text-black transition-all duration-300">
        <div className="lg:w-[45%] lg:sticky lg:top-0 h-fit lg:h-screen lg:py-0 overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          <Main />
        </div>
        <div className="lg:flex-1 flex flex-col gap-24 py-[60px] lg:py-[60px] lg:pl-18">
          {/* <About /> */}
          <Works />
          <Projects />
          <Contact />
          <Footer />
        </div>
      </div>
    </>
  );
}
