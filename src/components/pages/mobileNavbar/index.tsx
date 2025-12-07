import ThemeSwitcher from "@/providers/ThemeSwitcher";
import { useTheme } from "next-themes";
import Link from "next/link";
import { resolve } from "path";

export default function MobileNavbar() {
  const { setTheme, resolvedTheme } = useTheme();

  return (
    <div className="h-[fit] w-full justify-between flex flex-row items-center py-[10px] fixed bottom-0 z-50 px-[20px] md:hidden ">
      <div className="flex flex-row gap-5 w-full md:w-fit items-center justify-center">
        <div className="flex-row w-fit h-[44px] items-center md:items-start gap-6 border dark:border-[#90aecf]/20 border-oxford/20 px-4 py-1.5 rounded-full justify-center md:justify-start text-oxford dark:text-[#90aecf] flex dark:bg-[#90aecf]/10 bg-oxford/8">
          <Link
            href="#about"
            className="text-[14px] hover:text-oxford/80  dark:hover:text-[#90aecf]/80"
          >
            About
          </Link>
          <Link
            href="#work"
            className="text-[14px] hover:text-oxford/80  dark:hover:text-[#90aecf]/80"
          >
            Work
          </Link>
          <Link
            href="#projects"
            className="text-[14px] hover:text-oxford/80  dark:hover:text-[#90aecf]/80"
          >
            Projects
          </Link>
          <Link
            href="#contact"
            className="text-[14px] hover:text-oxford/80  dark:hover:text-[#90aecf]/80"
          >
            Contact
          </Link>

          <div className="md:hidden flex">
            <ThemeSwitcher />
          </div>
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
