export default function Works() {
  return (
    <div
      className="flex flex-col w-full items-start font-dm-sans py-10 h-[800px] bg-[#F0EFED] gap-16"
      id="work"
    >
      <h3 className="font-black text-[#181C14] text-[50px] leading-14 tracking-tight">
        Work Experience
      </h3>

      <div className="flex flex-row items-center w-full gap-8">
        <div className="flex flex-col border-1 border-[#2B3223]/10 gap-4 items-center justify-center rounded-[30px] w-[400px] px-[24px] pt-[24px] flex-1">
          <div className="flex flex-col gap-1 w-full items-start">
            <h4 className="text-[24px] font-medium text-[#181C14]"> webbie</h4>
            <p className="text-[14px] text-[#181C14]/60 leading-4.5">
              A website design discovery platform that showcases trendsetting
              website designs. I implemented key product functionalities, worked
              alongside designers and backend engineers to ensure pixel-perfect
              designs and seamless API Integration.
              <br />
              <br />
              <span className="text-[14px]">
                React • Typescript • Tailwind{" "}
              </span>
            </p>
          </div>
          <div className="flex flex-row gap-1 w-full justify-center items-end bg-[#2B3223]/20 rounded-t-[30px] pt-[20px]">
            <img
              src="/icons/webbie-large.svg"
              alt="webbie-large"
              //   className="w-[250px]"
            />
            <img
              src="/icons/webbie-small.svg"
              alt="webbie-small"
              className="h-[200px]"
            />
          </div>
        </div>
        <div className="flex flex-col border-1 border-[#2B3223]/10 gap-4 items-center justify-center rounded-[30px] w-[470px] px-[24px] pt-[24px] flex-1">
          <div className="flex flex-col gap-1 w-full items-start">
            <h4 className="text-[24px] font-medium text-[#181C14]"> cvspan</h4>
            <p className="text-[14px] text-[#181C14]/60 leading-4.5">
              A product development agency transitioning from UI/UX design and
              education to full-scale product development. I contributed to the
              redevelopment user interfaces for their platform showcasing their
              expanded product development capabilities.
              <br />
              <br />
              <span className="">React • Typescript • Tailwind </span>
            </p>
          </div>
          <div className="flex flex-row gap-1 w-full justify-center items-end bg-[#2B3223]/20 rounded-t-[30px] pt-[20px]">
            <img
              src="/icons/cvspan-large.svg"
              alt="webbie-large"
              //   className="w-[250px]"
            />
            <img
              src="/icons/cvspan-mobile.svg"
              alt="webbie-small"
              className="h-[200px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
