export default function Projects() {
  const projects = [
    {
      year: "Ongoing",
      name: "Task Stack",
      description:
        "A task/workspace managing system with members, roles, comments, attachments.",
      stack: "Next • Tailwind • Typescript • Express • MongoDB",
    },

    {
      year: "2025",
      name: "Knote Taker",
      description:
        "A simple app to capture, organize, and format notes with markdown support, providing a fast, and secure note-taking",
      stack: "Next • Typescript •  Supabase • Tailwind • MDX",
    },

    {
      year: "2024",
      name: "CoinIn",
      description:
        "Crypto app that shows the current market price of crypto assets, top gainer and losers, portfolio to keep track of potential assets.",
      stack: "React • Supabase",
    },

    {
      year: "2023",
      name: "Movie Release",
      description: "A website for information on movies and TV shows.",
      stack: "React",
    },
  ];

  return (
    <div className="flex flex-col w-full items-start font-dm-sans py-14 h-[750px] text-black gap-20">
      <h3 className="font-black text-[#181C14] text-[50px] leading-14 tracking-tight">
        Projects
      </h3>
      <div
        className="flex flex-row w-full items-center gap-30
      "
      >
        <div className="flex flex-col gap-10">
          {projects.map((project, index) => (
            <div className="flex flex-row gap-[45px] text-[14px] " key={index}>
              <p className="font-medium w-[70px] text-[#181C14]/70">
                {project.year}
              </p>
              <div className="flex flex-col gap-2">
                <div className="flex flex-col w-[400px]">
                  <h4 className="text-[#181C14] font-semibold">
                    {project.name}
                  </h4>
                  <p className="text-[#181C14]/60 leading-4.5 font-medium">
                    {project.description}
                  </p>
                </div>
                <p className="text-[#181C14]/40">{project.stack}</p>
              </div>
            </div>
          ))}
        </div>

        {/*  */}
        <div className="flex-1 h-[350px] bg-amber-200">Images</div>
      </div>
    </div>
  );
}
