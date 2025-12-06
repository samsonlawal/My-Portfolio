import ThemeSwitcher from "@/providers/ThemeSwitcher";
import { useTheme } from "next-themes";
import Link from "next/link";

// const extras = [
//   {
//     text: "Hi, I'm Samson",
//     icon: "",
//     bgColor: "bg-[#EDA600]/10",
//     textColor: "text-[#6D4D20]",
//     borderColor: "border-[#6D4D20]",
//   },
//   {
//     text: "FullStack Developer",
//     icon: "",
//     bgColor: "bg-[#D8EEC6]/33",
//     textColor: "text-[#28410E]",
//     borderColor: "border-[#28410E]",
//   },
//   {
//     text: "UI/UX Designer",
//     icon: "",
//     bgColor: "bg-[#141697]/33",
//     textColor: "text-[#08093C]",
//     borderColor: "border-[#08093C]",
//   },
// ];

export default function Hero() {
  const { setTheme, resolvedTheme } = useTheme();

  return (
    <div className="w-full md:mb-14 flex flex-col gap-5">
      {/* <div>
        <div className="flex flex-row gap-4 items-center">
          {extras.map((extra, index) => (
            <div
              className={`rounded-full w-[200px] items-center justify-center flex flex-row px-3 py-1 border-[1px] ${extra.bgColor} ${extra.textColor} ${extra.borderColor}`}
              key={index}
            >
              <p className="text-[13px] text">{extra.text}</p>
              <img src="" alt="" />
            </div>
          ))}
        </div>
      </div> */}
      <div className="flex gap-4 md:gap-10 flex-col w-full items-center justify-center">
        <div className="h-fit flex flex-row gap-10">
          <img
            src="/icons/icon.jpg"
            alt="avatar"
            className="rounded-xl"
            style={{
              width: "300px",
              height: "300px",
              objectFit: "cover",
              objectPosition: "center bottom",
            }}
          />
          <div className="h-full flex flex-col justify-center gap-4">
            <div className="h-fit py-1.5 w-fit px-4 flex-row items-center gap-2 border dark:border-sapphire/70 border-oxford/20 text-[14px] font-medium rounded-full justify-start text-oxford dark:text-[rgb(255,255,255)] flex dark:bg-sapphire/30 bg-oxford/8">
              <p>Software Engineer</p>
              {/* <div className="w-[1.4px] h-[16px] bg-oxford/20 dark:bg-sapphire/70" />
              <p>Frontend Developer</p> */}
            </div>
            <div className="flex flex-col gap-2 w-[600px]">
              <h1 className="text-[26px] md:text-[48px] text-oxford dark:text-white font-normal leading-[34px] md:leading-[50px]">
                {/* Turning ideas into websites and apps that feel effortless to use. */}
                Samson Deji Lawal
              </h1>
              <p className="text-[15px] md:text-[16px] md:pr-20 text-[#c] dark:text-[#9d9d9d] font-normal leading-[18px] md:leading-[22px]">
                I build digital products that are fast, reliable, & easy to use.
                My work focuses on creating clean, responsive interfaces that
                deliver a smooth experience on any device.
              </p>
            </div>
            <div className="flex flex-row gap-4 w-full justify-between items-end">
              <div className="flex flex-row gap-4">
                {/* <Link
                  href="/Samson_Lawal_Resume.pdf"
                  download
                  className="flex flex-row gap-2 justify-center items-center hover:bg-bg-464943 bg-oxford hover:bg-oxford/90 dark:bg-sapphire hover:dark:bg-powder/80 transition-colors duration-300 px-[26px] py-[8px] w-fit rounded-full"
                >
                  <p className="text-[15px] dark:text-white text-white font-medium">
                    Resume
                  </p>
                  <img src="/icons/resumes.svg" alt="" className="" />
                </Link> */}
                <div className="flex flex-row gap-2">
                  <a
                    href="https://github.com/samsonlawal"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="flex flex-row gap-1 cursor-pointer w-fit px-4 py-1.5 justify-center items-center border border-oxford/30 dark:border-white/10 rounded-full hover:bg-oxford/20 dark:hover:bg-white/6 transition-colors duration-300">
                      <img
                        src={`/icons/${
                          resolvedTheme === "dark"
                            ? "githubb-lighter"
                            : "githubb-dark"
                        }.svg`}
                        alt=""
                        className="w-[16px]"
                      />
                      <p className="text-[14px] dark:text-[#fff] text-white">
                        Github
                      </p>
                    </span>
                  </a>

                  <a
                    href="https://x.com/samsondejs"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="flex flex-row gap-1 cursor-pointer w-fit px-4 py-1.5 justify-center items-center border border-oxford/30 dark:border-white/10 rounded-full hover:bg-oxford/20 dark:hover:bg-white/6 transition-colors duration-300">
                      <img
                        src={`/icons/${
                          resolvedTheme === "dark"
                            ? "twitter-lighter"
                            : "twitterr-dark"
                        }.svg`}
                        alt=""
                        className="w-[16px]"
                      />
                      <p className="text-[14px] dark:text-[#fff] text-white">
                        Twitter
                      </p>
                    </span>
                  </a>

                  <a href="https://" target="_blank" rel="noopener noreferrer">
                    <span className="flex flex-row gap-1 cursor-pointer w-fit px-4 py-1.5 justify-center items-center border border-oxford/30 dark:border-white/10 rounded-full hover:bg-oxford/20 dark:hover:bg-white/6 transition-colors duration-300">
                      <img
                        src={`/icons/${
                          resolvedTheme === "dark"
                            ? "linkedin-lighter"
                            : "linkedinn-dark"
                        }.svg`}
                        alt=""
                        className="w-[14px]"
                      />
                      <p className="text-[14px] dark:text-[#fff] text-white">
                        Linkedin
                      </p>
                    </span>
                  </a>
                </div>
                {/* <Link
              href="#work"
              className="flex flex-row gap-2 justify-center items-center hover:bg-bg-464943 border-[1.5px] border-[#181C14] dark:border-[#ECDFCC] dark:text-[#ECDFCC] dark:hover:text-[#181C14] dark:hover:bg-[#ECDFCC] transition-colors duration-300 px-[24px] py-[8px] w-fit rounded-full text-[#181C14]"
            >
              <p className="text-[15px] font-medium">View my work</p>
            </Link> */}
              </div>
              {/* <div className="hidden md:flex">
            <ThemeSwitcher />
          </div>{" "} */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
