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
    <div className="w-full md:mb-14 flex flex-col gap-5 h-fit md:h-[100vh] justify-center items-center">
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
        <div className="h-fit justify-center items-center  md:justify-start flex md:flex-row flex-col gap-6 md:gap-10">
          {/* <div className="h-fit py-1.5 w-fit px-4 flex-row items-center gap-2 border border-oxford/20 text-[14px] font-medium rounded-full justify-center md:justify-start text-oxford dark:text-[rgb(255,255,255)] flex dark:bg-[white] bg-[#262626]">
            <p className="text-[10px] font-medium dark:text-[#262626] text-[#fff]">
              Software Engineer
            </p>
          </div> */}
                      {/* <div className="h-fit py-1.5 w-fit px-4 flex-row items-center gap-2 border border-oxford/20 text-[14px] font-medium rounded-full justify-center md:justify-start text-oxford dark:text-[rgb(255,255,255)] flex dark:bg-[green]/20 md:hidden">

              <div className="w-[8px] rounded-full h-[8px] bg-[#0db70d] animate-pulse shadow-lg shadow-[#0db70d]/50 " />
              <p className="text-[14px] text-[#0db70d] font-normal">
                Available for work
              </p>
            </div> */}

                      <div className="bg-white/60 px-2 py-1.5 rounded-sm flex flex-row items-center gap-1 md:hidden cursor-pointer">
              <img src="/icons/code-symbol.svg" alt="code-symbol" className="w-[16px] h-[16px]" />
                            <p className="text-[13px] font-medium dark:text-[#262626] text-white"> 
                            Software Engineer
                          </p>
            </div>

            {/* Image */}
          <img
            src="/icons/icon.jpg"
            alt="avatar"
            className="rounded-xl w-[300px] h-[300px]"
            style={{
              objectFit: "cover",
              objectPosition: "center bottom",
            }}
          />
          <div className="h-full flex flex-col gap-4 justify-center items-center  md:justify-center md:items-start">

          <div className="bg-white/60 px-2 py-1.5 rounded-sm hidden flex-row items-center gap-1 md:flex cursor-pointer">
              <img src="/icons/code-symbol.svg" alt="code-symbol" className="w-[16px] h-[16px]" />
                            <p className="text-[13px] font-medium dark:text-[#262626] text-white"> 
                            Software Engineer
                          </p>
            </div>

            {/* Availability badge */}
            {/* <div className="h-fit py-1.5 w-fit px-4 md:flex-row items-center gap-2 border border-oxford/20 text-[14px] font-medium rounded-full justify-center md:justify-start text-oxford dark:text-[rgb(255,255,255)] hidden md:flex dark:bg-[green]/20  ">

              <div className="w-[8px] rounded-full h-[8px] bg-[#0db70d] animate-pulse shadow-lg shadow-[#0db70d]/50 " />
              <p className="text-[14px] text-[#0db70d] font-normal">
                Available for work
              </p>
            </div>
            </div> */}

            {/* Text */}
            <div className="flex flex-col gap-2 lg:max-w-[600px] justify-center items-center md:justify-between md:items-start">
              <h1 className="text-[26px] md:text-[48px] text-oxford dark:text-white font-normal leading-[34px] md:leading-[50px]">
                Samson Deji Lawal
              </h1>
              <p className="text-[15px] md:text-[16px] md:pr-20 text-[#c] dark:text-[#9d9d9d] text-center md:text-left font-normal leading-[18px] md:leading-[22px]">
                {/* I build digital products that are fast, reliable, & easy to use.
                My work focuses on creating clean, responsive interfaces that
                deliver a smooth experience on any device. */}
                I'm an engineer with a knack for problem-solving and a strong background in computer science. I enjoy building scalable and maintainable web applications/solutions.
              </p>
              {/* <p className="text-[15px] md:text-[20px] md:pr-20 text-[#c] dark:text-[#9d9d9d] text-center md:text-left font-normal leading-[18px] md:leading-[22px]">
                Software Engineer
              </p>   */}
            </div>
            <div className="flex flex-row gap-4 w-full justify-center items-center  md:justify-between md:items-start">
              <div className="flex flex-row gap-2">
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
