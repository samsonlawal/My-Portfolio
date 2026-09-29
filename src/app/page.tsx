"use client";

import Navbar from "@/components/pages/navbar";
import Main from "@/components/layouts/home";
import Image from "next/image";
import About from "@/components/pages/about";
import Skills from "@/components/pages/skills";
import Works from "@/components/pages/work";
import Projects from "@/components/pages/projects";
import Blog from "@/components/pages/blog";
import Contact from "@/components/pages/contact";
import Footer from "@/components/pages/footer";
import Head from "next/head";
import { PortfolioGridFrame } from "@/components/reusables/PortfolioGridFrame";

export default function Home() {
  return (
    <>
      <Head>
        <title>Samson Lawal — Software Engineer</title>
        <meta
          name="description"
          content="I’m a software engineer with a knack for problem-solving and a strong CS background. I build clean, scalable web applications and elegant solutions."
        />
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

      <PortfolioGridFrame>
        <div className="flex flex-col max-w-lg mx-auto min-h-screen w-full px-4 sm:px-6 font-dm-sans bg-[#fff] dark:bg-[#111] text-black transition-all duration-300 gap-16 md:gap-24 py-8 md:py-12 items-start text-left">
          <Main />
          <Skills />
          <Works />
          <Projects />
          {/* <Blog /> */}
          <Contact />
          <Footer />
        </div>
      </PortfolioGridFrame>
    </>
  );
}
