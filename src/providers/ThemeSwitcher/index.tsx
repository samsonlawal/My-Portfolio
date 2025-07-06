"use client";
import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
// import { SunIcon } from '@radix-ui/react-icons';

function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted && !resolvedTheme) {
      setTheme("light");
    }
  }, [mounted, resolvedTheme]);

  useEffect(() => {
    console.log("Resolved theme:", resolvedTheme);
  }, [resolvedTheme]);

  if (!mounted) return null;
  return (
    <>
      <button
        // className="cursor-not-allowed"
        className="cursor-pointer hidden lg:flex"
        onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      >
        {resolvedTheme === "light" ? (
          <img
            src="/icons/sun-dark.svg"
            alt="sun dark"
            className=" w-[28px] h-[28px] hover:rotate-180 transition-all duration-3000"
          />
        ) : null}
        {resolvedTheme === "dark" ? (
          // <SunIcon className="w-[20px] h-[20px]" />
          <img
            src="/icons/sun-light.svg"
            alt="sun light"
            className=" w-[28px] h-[28px] hover:rotate-180 transition-all duration-3000"
          />
        ) : null}
      </button>

      {/* <button
        className="lg:hidden relative flex items-center w-16 h-8 border-none outline-none bg-[#E7E7E7] dark:bg-[#292929] rounded-full p-1 transition-all duration-300 cursor-pointer"
        onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      >
        <div
          className={`absolute w-6 h-6 bg-white rounded-full shadow-md transform transition-transform duration-300 ${
            resolvedTheme === "dark" ? "translate-x-8" : "translate-x-0"
          }`}
        ></div>

        <SunIcon
          className={`absolute w-4 h-4${
            resolvedTheme === "dark" ? "text-[#838383]" : "text-[#111111]"
          }`}
          style={{
            left: "8px",
            top: "50%",
            transform: "translateY(-50%)",
          }}
        />

        <img src="/icons/sun-dark" alt="" className=" w-[20px] h-[20px]" />

        <img
          src={
            resolvedTheme === "dark"
              ? "/icons/MoonIcon.svg"
              : "/icons/inactiveMoon.svg"
          }
          alt="Moon"
          className={`absolute w-4 h-4 ${
            resolvedTheme === "dark" ? "text-[#FFFFFF]" : "text-[#838383]"
          }`}
          style={{
            right: "8px",
            top: "50%",
            transform: "translateY(-50%)",
          }}
        />
      </button> */}
    </>
  );
}

export default ThemeSwitcher;
