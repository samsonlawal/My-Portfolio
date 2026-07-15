import Navbar from "@/components/pages/navbar";
import MobileNavbar from "@/components/pages/mobileNavbar";
import Hero from "@/components/pages/hero";

export default function Home() {
  return (
    <div className="max-screen-wrapper">
      <div className="max-screen-inner flex flex-col w-full items-center font-dm-sans min-h-screen text-black justify-center">
        {/* <Navbar /> */}
        {/* <MobileNavbar /> */}
        <Hero />
      </div>
    </div>
  );
}
