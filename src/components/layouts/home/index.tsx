import Navbar from "@/components/pages/navbar";
import MobileNavbar from "@/components/pages/mobileNavbar";
import Hero from "@/components/pages/hero";

export default function Home() {
  return (
    <div className="max-screen-wrapper">
      <div className="max-screen-inner flex flex-col w-full items-center font-dm-sans min-h-screen lg:h-screen text-black justify-center md:justify-start gap-6 pt-6 pb-20 md:pb-0 md:mt-6 md:flex-col md:gap-30">
        <Navbar />
        <MobileNavbar />

        <Hero />
      </div>
    </div>
  );
}
