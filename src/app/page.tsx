import Navbar from "@/components/pages/navbar";
import Main from "@/components/layouts/home";

import Image from "next/image";
import About from "@/components/pages/about";

export default function Home() {
  return (
    <div className="max-screen-wrapper flex flex-col items-center font-dm-sans min-h-screen bg-[#F0EFED] text-black">
      <div className="max-screen-inner">
        <Main />
        <About />
      </div>
    </div>
  );
}
