import SplitType from "split-type";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/src/ScrollTrigger";
import { motion } from "framer-motion";
import { ANIMATE_PROPS } from "@/helpers/motion";

export default function About() {
  const Languages = [
    {
      name: "Typescript",
      icon: "/icons/typescript.svg",
    },
    {
      name: "JavaScript",
      icon: "/icons/js.svg",
    },
    {
      name: "React",
      icon: "/icons/react.svg",
    },
    {
      name: "Next",
      icon: "/icons/next.svg",
    },
    {
      name: "Node",
      icon: "/icons/node.svg",
    },
    {
      name: "Express",
      icon: "/icons/express.svg",
    },
    {
      name: "SQL",
      icon: "/icons/sql.svg",
    },
    {
      name: "MongoDb",
      icon: "/icons/mongo.svg",
    },
    {
      name: "Git",
      icon: "/icons/git.svg",
    },
    {
      name: "Tailwind",
      icon: "/icons/tailwind.svg",
    },
    {
      name: "HTML",
      icon: "/icons/html.svg",
    },
    {
      name: "CSS",
      icon: "/icons/css.svg",
    },
    {
      name: "Supabase",
      icon: "/icons/supabase.svg",
    },
  ];

  const tools = [
    {
      name: "VSCode",
      icon: "/icons/vscode.svg",
    },
    {
      name: "Figma",
      icon: "/icons/figma.svg",
    },
    {
      name: "Bubble",
      icon: "/icons/bubble.svg",
    },
  ];

  useGSAP(() => {
    const splitTypes = document.querySelectorAll(".reveal-type");

    splitTypes.forEach((char, i) => {
      const bg = char?.dataset?.bgColor;
      const fg = char?.dataset?.fgColor;

      const text = new SplitType(char, { types: "chars" });

      gsap.fromTo(
        text.chars,
        {
          color: bg,
        },
        {
          color: fg,
          duration: 0.3,
          stagger: 0.02,
          scrollTrigger: {
            trigger: char,
            start: "top 70%",
            end: "top 20%",
            scrub: true,
            markers: false,
            toggleActions: "play play reverse reverse",
          },
        }
      );
    });

    return () => {};
  }, {});

  return (
    <div className="max-screen-wrapper py-[120px]">
      <div
        className="max-screen-inner flex flex-col gap-10 xl:gap-0 xl:flex-row w-full items-start font-dm-sans  text-black justify-between"
        id="about"
      >
        <div className="hidden flex-col justify-between items-start w-[480px] sticky top-[100px] xl:flex">
          <motion.h3
            {...ANIMATE_PROPS({ delay: 0 })}
            className="text-[40px] lg:text-[50px] tracking-tight leading-10 lg:leading-16 italic text-oxford dark:text-[#fff]"
          >
            Let's talk about me.
          </motion.h3>
          <p className="text-oxford dark:text-powder text-[16px] md:w-[300px] leading-tight italic">
            My favourite topic.
          </p>
        </div>

        <div className="flex flex-col justify-between items-start w-full xl:hidden">
          <motion.h3
            {...ANIMATE_PROPS({ delay: 0 })}
            className="text-[30px] lg:text-[50px] tracking-tight leading-10 lg:leading-16 italic text-oxford dark:text-[#fff]"
          >
            Let's talk about me.
          </motion.h3>
          <p className="text-oxford dark:text-powder text-[16px] md:w-[300px] leading-tight italic">
            My favourite topic.
          </p>
        </div>

        <div className=" flex flex-col items-start text-black justify-between gap-14 md:gap-8 lg:w-[600px]">
          {/* <img
            src="/avatar.jpg"
            alt="avatar"
            className="rounded-xl"
            style={{
              width: "60%",
              height: "200px",
              objectFit: "cover",
              objectPosition: "center bottom",
            }}
          /> */}
          <div className="rounded-[10px]  justify-center items-start gap-1 flex flex-col">
            <h3 className="text-[20px] lg:text-[26px] tracking-tight text-oxford dark:text-white">
              About Me
            </h3>
            <p className="dark:text-[#9d9d9d] text-[#5D605B] leading-[20px] md:leading-[22px] text-[15px] md:text-base">
              I’m Samson Full-stack developer with 1+ years of hands-on work
              experience as a Front-end developer. From implementing intuitive
              design, to ensuring a smooth and engaging user experience, I build
              user-focused and performance optimized websites and mobile
              applications.
              <br />
              <br />
              My expertise lies in crafting comprehensive solutions through
              performance-driven development.
            </p>
          </div>

          {/* Stack */}
          <div className="rounded-[10px] flex flex-col">
            <h3 className="text-[20px] lg:text-[26px] tracking-tight text-oxford dark:text-white">
              Tech Stack
            </h3>

            {/*  */}
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <h3 className="text-[16px] dark:text-[#9d9d9d] text-[#5D605B] tracking-tight">
                  Languages and Frameworks
                </h3>
                {/*  */}
                <div className="flex flex-row gap-2 flex-wrap items-center justify-start">
                  {Languages.map((language, index) => (
                    <span
                      className="flex flex-row gap-1 items-center justify-center w-fit bg-oxford/14 dark:bg-powder/14 px-[8px] py-[4px] rounded-[4px]"
                      key={index}
                    >
                      <img src={language.icon} alt={language.name} />
                      <p className="text-[13px] text-oxford/70 dark:text-powder">
                        {language.name}
                      </p>{" "}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-[16px] dark:text-[#9d9d9d] text-[#5D605B] tracking-tight">
                  Tools{" "}
                </h3>
                {/*  */}
                <div className="flex flex-row gap-2 flex-wrap items-center justify-start">
                  {tools.map((tool, index) => (
                    <span
                      className="flex flex-row gap-1 items-center justify-center w-fit bg-oxford/14 dark:bg-powder/14 px-[8px] py-[4px] rounded-[4px]"
                      key={index}
                    >
                      <img src={tool.icon} alt={tool.name} />
                      <p className="text-[13px] text-oxford/70 dark:text-powder">
                        {tool.name}
                      </p>{" "}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* <p>
            I’m Samson a Full-stack developer with 1+ years of hands-on work
            experience as a Front-end developer. From implementing intuitive
            design, to ensuring a smooth and engaging user experience, I build
            user-focused and performance optimized websites and mobile
            applications.
            <br />
            <br />
            My expertise lies in crafting comprehensive solutions through
            performance-driven development.
          </p> */}
          </div>
        </div>
      </div>
    </div>
  );
}
