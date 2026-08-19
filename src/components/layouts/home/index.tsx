import Navbar from "@/components/pages/navbar";
import MobileNavbar from "@/components/pages/mobileNavbar";
import Hero from "@/components/pages/hero";

export default function Home() {
  return (
    <div className="flex flex-col w-full items-start font-dm-sans text-black justify-start h-full">
      {/* <Navbar /> */}
      {/* <MobileNavbar /> */}
      <Hero />
    </div>
  );
}
