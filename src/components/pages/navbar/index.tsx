import ThemeSwitcher from "@/providers/ThemeSwitcher";
import { useTheme } from "next-themes";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { resolve } from "path";

export default function Navbar() {
  const { setTheme, resolvedTheme } = useTheme();
  const params = useSearchParams();

  return (
    <div className="h-fit w-full justify-between md:flex flex-row items-center hidden py-4">
      <div className="mr-4 flex flex-row gap-5 items-center justify-center w-full">
        <div className="h-[42px] flex-row items-center gap-1 border dark:border-[#000]/100 border-oxford/20 px-1 rounded-full justify-start text-oxford dark:text-[#fff] py-0 flex dark:bg-[#000]/50 bg-oxford/8">
          {/* <Link
            href="#"
            className="text-[14px] hover:bg-oxford/80  dark:hover:bg-[#3b3b3b] px-2.5 py-2.5 rounded-full"
          >
            <img src="/icons/house-out-white.svg" alt="" className="w-[14px]" />
          </Link>

          <div className=" border-r-[1px] h-[22px] border-white" /> */}

          <Link
            href="/"
            className={`text-[14px] hover:bg-oxford/80  dark:hover:bg-[#3b3b3b]/80 flex flex-row gap-2 px-2.5 py-1.5 rounded-full ${
              params.get("section") === "" ? "dark:bg-[red] bg-oxford" : ""
            }`}
          >
            <img src="/icons/house-out-white.svg" alt="" className="w-[13px]" />
            Home
          </Link>

          <Link
            href="#about"
            className={`text-[14px] hover:bg-oxford/80  dark:hover:bg-[#3b3b3b]/80 flex flex-row gap-2 px-2.5 py-1.5 rounded-full ${
              params.get("section") === "#about"
                ? "dark:bg-[red] bg-oxford"
                : ""
            }`}
          >
            <img src="/icons/user-out-white.svg" alt="" className="w-[18px]" />
            About
          </Link>
          <Link
            href="#work"
            className="text-[14px] hover:bg-oxford/80  dark:hover:bg-[#3b3b3b]/80 flex flex-row gap-2 px-2.5 py-1.5 rounded-full"
          >
            <img
              src="/icons/brief-out-white.svg"
              alt="work"
              className="w-[18px]"
            />
            Work
          </Link>

          <Link
            href="#projects"
            className="text-[14px] hover:bg-oxford/80  dark:hover:bg-[#3b3b3b]/80 flex flex-row gap-2 px-2.5 py-1.5 rounded-full"
          >
            <img src="/icons/lego-out-white.svg" alt="" className="w-[18px]" />
            Projects
          </Link>
          <Link
            href="#contact"
            className="text-[14px] hover:bg-oxford/80  dark:hover:bg-[#3b3b3b]/80 flex flex-row gap-2 px-2.5 py-1.5 rounded-full"
          >
            <img src="/icons/phone-out-white.svg" alt="" className="w-[14px]" />
            Contact
          </Link>

          <div className="border-l-[1px] dark:border-[#90aecf]/20 pl-4 pr-2 flex">
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
      {/* <a
        href="/Samson_Lawal_Resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-row gap-2 justify-center items-center dark:hover:bg-[#ECDFCC]/70 dark:bg-[#ECDFCC] bg-oxford hover:bg-oxford/80 transition-colors duration-300 px-[29px] py-[8px] w-fit rounded-full text-[white] dark:text-oxford font-medium"
      >
        <svg
          width="14"
          height="18"
          viewBox="0 0 19 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6.5 12H12.5M6.5 16H9.5M1.5 3V19C1.5 19.5304 1.71071 20.0391 2.08579 20.4142C2.46086 20.7893 2.96957 21 3.5 21H15.5C16.0304 21 16.5391 20.7893 16.9142 20.4142C17.2893 20.0391 17.5 19.5304 17.5 19V7.342C17.5 7.07556 17.4467 6.81181 17.3433 6.56624C17.2399 6.32068 17.0885 6.09824 16.898 5.912L12.458 1.57C12.0844 1.20466 11.5826 1.00007 11.06 1H3.5C2.96957 1 2.46086 1.21071 2.08579 1.58579C1.71071 1.96086 1.5 2.46957 1.5 3Z"
            stroke={resolvedTheme === "light" ? "#ECDFCC" : "#181C14"}
            strokeWidth="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M11.5 1V5C11.5 5.53043 11.7107 6.03914 12.0858 6.41421C12.4609 6.78929 12.9696 7 13.5 7H17.5"
            stroke={resolvedTheme === "light" ? "#ECDFCC" : "#181C14"}
            strokeWidth="1.5"
            stroke-linejoin="round"
          />
        </svg>
        <p className="text-[14px]">Resume</p>
      </a> */}
      {/* <a
        href="/Samson_Lawal_Resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="dark:flex flex-row gap-2 justify-center items-center bg-[#ECDFCC] hidden hover:bg-[#ECDFCC] transition-colors duration-300 p-[29px] py-[10px] w-fit rounded-full"
      >
        <svg
          width="14"
          height="18"
          viewBox="0 0 19 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6.5 12H12.5M6.5 16H9.5M1.5 3V19C1.5 19.5304 1.71071 20.0391 2.08579 20.4142C2.46086 20.7893 2.96957 21 3.5 21H15.5C16.0304 21 16.5391 20.7893 16.9142 20.4142C17.2893 20.0391 17.5 19.5304 17.5 19V7.342C17.5 7.07556 17.4467 6.81181 17.3433 6.56624C17.2399 6.32068 17.0885 6.09824 16.898 5.912L12.458 1.57C12.0844 1.20466 11.5826 1.00007 11.06 1H3.5C2.96957 1 2.46086 1.21071 2.08579 1.58579C1.71071 1.96086 1.5 2.46957 1.5 3Z"
            stroke="#181C14"
            strokeWidth="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M11.5 1V5C11.5 5.53043 11.7107 6.03914 12.0858 6.41421C12.4609 6.78929 12.9696 7 13.5 7H17.5"
            stroke="#181C14"
            strokeWidth="1.5"
            stroke-linejoin="round"
          />
        </svg>
        <p className="text-[14px]">Resume</p>
      </a> */}
    </div>
  );
}
