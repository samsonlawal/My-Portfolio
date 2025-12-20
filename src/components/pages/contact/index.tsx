export default function Contact() {
  return (
    <div className="max-screen-wrapper plane">
      <div
        className="min-h-fit gap-30 lg:gap-0 h-[330px] lg:h-[600px] pt-[120px] items-center md:items-start md:py-[60px] flex flex-col justify-between text-[#181C14] max-screen-inner md:h-screen"
        id="contact"
      >
        <div className="flex flex-col justify-between items-center md:items-start gap-3 md:gap-6 text-center md:text-left">
          <h1 className="max-w-430 text-[30px] lg:text-[60px] md:w-[450px] xl:w-[700px] tracking-tight leading-10 lg:leading-16 italic text-[#181C14] dark:text-[#fff]">
            Have an exciting project you need help with?
          </h1>
          <p className="text-gray-500 dark:text-powder/70 text-[16px] md:w-[300px] leading-tight italic font-medium">
            You can send me an email or reach me through any of the socials
            below
          </p>
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
