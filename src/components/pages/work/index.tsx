export default function Works() {
  return (
    <div className="max-screen-wrapper py-[80px]" id="work">
      <div className="max-screen-inner flex flex-col gap-12 w-full items-start font-dm-sans  text-black justify-between">
        <h3 className="text-[30px] md:text-[50px] tracking-tight leading-10 lg:leading-16 italic text-oxford dark:text-[#fff]">
          Work Experience
        </h3>

        <div className="flex flex-col md:flex-row items-center w-full gap-8">
          <div className="flex flex-col border-1 border-[#2B3223]/10 dark:border-powder/20 gap-4 items-start justify-center rounded-[10px] w-full md:w-[470px] px-[16px] py-[18px] md:px-[24px] md:py-[24px] flex-1 bg-powder/6">
            <div className="flex flex-col gap-1 w-full items-start">
              <h4 className="text-[24px] text-oxford dark:text-white">
                webbie
              </h4>
              <p className="text-[14px] dark:text-[#9d9d9d] text-[#5D605B] leading-4.5">
                A website design discovery platform that showcases trendsetting
                website designs. I implemented key product functionalities,
                worked alongside designers and backend engineers to ensure
                pixel-perfect designs and seamless API Integration.
                <br />
                <br />
                <span className="dark:text-[#9d9d9d] text-[#5D605B]">
                  React • Typescript • Tailwind{" "}
                </span>
              </p>
            </div>
            <div className="flex flex-row gap-1 justify-center items-end bg-oxford/20 p-[10px] rounded-sm">
              <img
                src="/icons/webbie-large.svg"
                alt="webbie-large"
                className="w-auto"
              />
              <img
                src="/icons/webbie-small.svg"
                alt="webbie-small"
                className="h-[200px] hidden md:flex"
              />
            </div>
          </div>

          <div className="flex flex-col border-1 border-[#2B3223]/10 dark:border-powder/20 gap-4 items-start justify-center rounded-[10px] w-full md:w-[470px] px-[16px] py-[18px] md:px-[24px] md:py-[24px] flex-1 bg-powder/6">
            <div className="flex flex-col gap-1 w-full items-start">
              <h4 className="text-[24px] text-oxford dark:text-white">
                {" "}
                cvspan
              </h4>
              <p className="text-[14px] dark:text-[#9d9d9d] text-[#5D605B] leading-4.5">
                A product development agency transitioning from UI/UX design and
                education to full-scale product development. I contributed to
                the redevelopment user interfaces for their platform showcasing
                their expanded product development capabilities.
                <br />
                <br />
                <span className="dark:text-[#9d9d9d] text-[#5D605B]">
                  React • Typescript • Tailwind{" "}
                </span>
              </p>
            </div>
            <div className="flex flex-row gap-1 justify-center items-end bg-oxford/20 p-[10px] roundedsm">
              <img
                src="/icons/cvspan-large.svg"
                alt="webbie-large"
                //   className="w-[250px]"
              />
              <img
                src="/icons/cvspan-mobile.svg"
                alt="webbie-small"
                className="h-[200px] hidden md:flex"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
