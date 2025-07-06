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

    return (
      <div className="flex flex-row w-full items-center font-dm-sans h-[650px] bg-[#F0EFED] text-black justify-between">
        <div className="h-fit flex flex-row w-full items-center bg-[#F0EFED] text-black justify-between gap-8">
          <div className="rounded-[40px] border-1 border-[#2B3223]/10 w-[650px] h-[380px] px-[38px] justify-center py-10 items-start gap-4 flex flex-col">
            <h3 className="font-semibold text-[32px] tracking-tight text-[#181C14]">
              About Me
            </h3>
            <p className="text-[#181C14]/50 leading-[22px] font-medium">
              I’m <span className="text-[#181C14]/70 ">Samson</span> a
              Full-stack developer with 1+ years of hands-on work experience as
              a Front-end developer. From implementing intuitive design, to
              ensuring a smooth and engaging user experience, I build
              user-focused and performance optimized{" "}
              <span className="text-[#181C14]/70">websites</span> and{" "}
              <span className="text-[#181C14]/70">mobile applications.</span>
              <br />
              <br />
              My expertise lies in{" "}
              <span className="text-[#181C14]/70">
                crafting comprehensive solutions through performance-driven
                development.
              </span>
            </p>
          </div>
          <div className="rounded-[40px] flex-1 h-[380px] px-[38px] py-[48px] gap-4 flex flex-col border-1 border-[#2B3223]/10">
            <h3 className="font-semibold text-[32px] tracking-tight text-[#181C14]">
              Tech Stack
            </h3>

            {/*  */}
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <h3 className="font-semibold text-[16px] text-[#181C14]/70 tracking-tight">
                  Languages and Frameworks
                </h3>
                {/*  */}
                <div className="flex flex-row gap-2 flex-wrap items-center justify-start">
                  {Languages.map((language, index) => (
                    <span
                      className="flex flex-row gap-1 items-center justify-center w-fit bg-[#181C14]/4 px-[6px] py-[2px] rounded-[4px]"
                      key={index}
                    >
                      <img src={language.icon} alt={language.name} />
                      <p className="text-[14px] font-semibold text-[#181C14]/50">
                        {language.name}
                      </p>{" "}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="font-semibold text-[16px] text-[#181C14]/70 tracking-tight">
                  Tools{" "}
                </h3>
                {/*  */}
                <div className="flex flex-row gap-2 flex-wrap items-center justify-start">
                  {tools.map((tool, index) => (
                    <span
                      className="flex flex-row gap-1 items-center justify-center w-fit bg-[#181C14]/4 px-[6px] py-[2px] rounded-[4px]"
                      key={index}
                    >
                      <img src={tool.icon} alt={tool.name} />
                      <p className="text-[14px] font-semibold text-[#181C14]/50">
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
    );
}
