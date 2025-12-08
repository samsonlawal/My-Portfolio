import ThemeSwitcher from "@/providers/ThemeSwitcher";
import { useTheme } from "next-themes";
import Link from "next/link";
import { resolve } from "path";

export default function MobileNavbar() {
  const { setTheme, resolvedTheme } = useTheme();

  return (
    <div className="h-[70px] w-full justify-between flex flex-row items-center py-[10px] fixed bottom-0 z-50 px-[20px] md:hidden backdrop-blur-[2px] rounded-full">
      <div className="flex flex-row gap-5 w-full md:w-fit items-center justify-center">
          <div className="h-[42px] flex-row items-center gap-5 border dark:border-[#fff]/10 border-oxford/20 px-2 rounded-full justify-start text-oxford dark:text-[#fff] py-0 flex dark:bg-[#000]/100 bg-oxford/8">
          {/* <Link
            href="#"
            className="text-[14px] hover:bg-oxford/80  dark:hover:bg-[#3b3b3b] px-2.5 py-2.5 rounded-full"
          >
            <img src="/icons/house-out-white.svg" alt="" className="w-[14px]" />
          </Link>

          <div className=" border-r-[1px] h-[22px] border-white" /> */}

          <Link
            href="/"
            className={`text-[14px] hover:bg-oxford/80 border-[1px] border-[#000]/50 dark:hover:border-[1px] dark:hover:border-white/10  dark:hover:bg-[#3b3b3b]/80 flex flex-row w-8 h-8 rounded-full transition-all duration-300 justify-center items-center`}
          >
            <img src="/icons/house-out-white.svg" alt="" className="w-[12.5px]" />
          </Link>

          <Link
            href="#about"
            className={`text-[14px] hover:bg-oxford/80 border-[1px] border-[#000]/50 dark:hover:border-white/10 dark:hover:bg-[#3b3b3b]/80 flex flex-row gap-2 px-1 py-1 rounded-full transition-all duration-300`}
          >
            <img src="/icons/user-out-white.svg" alt="" className="w-[18px]" />
          </Link>
          <Link
            href="#work"
            className="text-[14px] hover:bg-oxford/80 border-[1px] border-[#000]/50 dark:hover:border-[1px] dark:hover:border-white/10  dark:hover:bg-[#3b3b3b]/80 flex flex-row gap-2 px-1 py-1 rounded-full transition-all duration-300"
          >
            <img
              src="/icons/brief-out-white.svg"
              alt="work"
              className="w-[18px]"
            />
          </Link>

          <Link
            href="#projects"
            className="text-[14px] hover:bg-oxford/80 border-[1px] border-[#000]/50 dark:hover:border-[1px] dark:hover:border-white/10  dark:hover:bg-[#3b3b3b]/80 flex flex-row gap-2 px-1 py-1 rounded-full transition-all duration-300"
          >
            <img src="/icons/lego-out-white.svg" alt="" className="w-[18px]" />
          </Link>
          <Link
            href="#contact"
            className="text-[14px] hover:bg-oxford/80 border-[1px] border-[#000]/50 dark:hover:border-[1px] dark:hover:border-white/10  dark:hover:bg-[#3b3b3b]/80 flex flex-row gap-2 px-1 py-1 rounded-full transition-all duration-300"
          >
            <img src="/icons/phone-out-white.svg" alt="" className="w-[14px]" />
          </Link>

          {/* <div className="border-l-[1px] dark:border-[#90aecf]/20 flex"/> */}
          <div className=" border-r-[1px] h-[22px] dark:border-[#90aecf]/20 border-white" />


            <ThemeSwitcher />
          {/* <Link
            href="#contact"
            className="text-[14px] hover:text-oxford/80  dark:hover:text-[#90aecf]/80"
          >
            Resume
          </Link> */}
        </div>
      </div>{" "}
    </div>
  );
}
