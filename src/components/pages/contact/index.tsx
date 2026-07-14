export default function Contact() {
  return (
    <div className="max-screen-wrapper">
      <div
        className="min-h-fit gap-30 lg:gap-0 h-[330px] lg:h-[400px] pt-[120px] items-center md:items-start md:py-[60px] flex flex-col justify-between text-[#F1A7B4] max-screen-inner md:h-screen"
        id="contact"
      >
        <div className="flex flex-col justify-between items-center md:items-center gap-3 md:gap-6 text-center md:text-center">
          <h1 className="text-[30px] lg:text-[60px] md:w-[70%] xl:w-[80%] tracking-tight leading-10 lg:leading-16 italic text-[#181C14] dark:text-[#fff] ">
            Have an 

<span className="">
          <span className="text-[#F1A7B4] pl-2 pr-[1px] hover:pr-[2px] transition-all duration-300">{"{"}</span>
          <span className="text-[#FFC914] hover:text-[#F1A7B4] pr-2 pl-[1px] hover:pl-[2px] transition-all duration-500">exciting project</span>
            
            
          <span className="text-[#F1A7B4] pr-2">{"}"}</span>

</span>


            
             you need help with?
          </h1>
          {/* <p className="text-[#fff]/40 dark:text-[#fff]/40 text-[16px] md:w-[500px] leading-tight italic font-medium">
            You can send me an email or reach me through any of the socials
            below
          </p> */}
           <span className="bg-[#48cAE4] py-1 px-2 -rotate-2">
          <p className="text-[#fff]/40 dark:text-[#111] text-[16px] md:w-[500px] leading-tight italic font-medium">
            You can reach me!
          </p>
          </span>
        </div>

        {/* <div className="flex flex-col gap-4 items-start justify-between">
          <div className="flex flex-row gap-2 px-4 py-1 justify-center items-center rounded-full border-[1.5px] border-[#181C14]/20 bg-[#181C14]/20 hover:bg-[#181c14]/40 dark:border-[#90aecf]/20 dark:bg-powder/8 transition-colors duration-300">
            <img
              src="/icons/copy-dark.svg"
              alt=""
              className="w-[14px] cursor-pointer"
            />

            <p className="text-[#181C14] dark:text-white/70 text-[16px]">
              samsondejilawal@gmail.com
            </p>
          </div>
        </div> */}
      </div>
    </div>
  );
}
