import ThemeSwitcher from "@/providers/ThemeSwitcher";
import { useTheme } from "next-themes";
import Link from "next/link";
import { resolve } from "path";
import { NAV_ITEMS } from "@/lib/constants";

export default function MobileNavbar() {
  const { setTheme, resolvedTheme } = useTheme();

  return (
    <div className="h-[70px] w-full justify-between flex flex-row items-center py-[10px] fixed bottom-0 z-50 px-[20px] md:hidden backdrop-blur-[2px] rounded-full">
      <div className="flex flex-row gap-5 w-full md:w-fit items-center justify-center">
        <div className="h-[42px] flex-row items-center gap-2 border dark:border-[#fff]/10 border-oxford/20 px-1 rounded-full justify-start text-oxford dark:text-[#fff] py-0 flex dark:bg-[#000]/100 bg-gray-200">
          {NAV_ITEMS.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="text-[14px] hover:bg-white/80 border-transparent border-[1px] hover:border-[#000]/10 dark:hover:border-[1px] dark:hover:border-white/10 dark:hover:bg-[#3b3b3b]/80 flex flex-row gap-0 px-2 py-1 rounded-full transition-all duration-300"
            >
              <img
                src={resolvedTheme === "light" ? item.iconDark : item.icon}
                alt={item.alt}
                className={item.width}
              />
            </Link>
          ))}

          <div className=" border-l-[1px] h-[16px] border-oxford/20 dark:border-[#fff]/20" />

          <div className="px-2 rounded-full py-1.5 flex hover:border-[#000]/10 transition-all duration-300 hover:bg-[#fff]/80 dark:hover:bg-[#3b3b3b]/80">
            <ThemeSwitcher />
          </div>
        </div>
      </div>{" "}
    </div>
  );
}
