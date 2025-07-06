import Navbar from "@/components/pages/navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div className="max-screen-wrapper flex flex-col items-center font-dm-sans min-h-screen bg-[#F0EFED] text-black">
      <div className="max-screen-inner">
        <Navbar />
      </div>
    </div>
  );
}
