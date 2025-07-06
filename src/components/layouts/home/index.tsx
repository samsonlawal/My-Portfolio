import Navbar from "@/components/pages/navbar";
import Hero from "@/components/pages/hero";

export default function Home() {
  return (
    <div className="flex flex-col w-full items-center font-dm-sans h-[650px] text-black justify-between">
      <Navbar />
      <Hero />
    </div>
  );
}
