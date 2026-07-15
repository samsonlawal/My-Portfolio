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
  // Loading state completely commented out to bypass preloader screen
  /*
  const [loading, setLoading] = useState(true);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    const fadeTimer = setTimeout(() => {
      setFade(true);
    }, 1800);

    const loadingTimer = setTimeout(() => {
      setLoading(false);
    }, 2300);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(loadingTimer);
    };
  }, []);
  */

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

      <div className="flex flex-col items-center font-dm-sans min-h-screen bg-[#fff] dark:bg-[#111] text-black transition-all duration-300">
        <Main />
        {/* <About /> */}
        <Works />
        <Projects />
        {/* <Blog /> */}
        <Contact />
        <Footer />
      </div>
    </>
  );
}
