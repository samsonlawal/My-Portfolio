export default function Contact() {
  return (
    <div className="max-screen-wrapper plane">
      <div
        className="min-h-fit gap-30 lg:gap-0 lg:h-[600px] py-[60px] flex flex-col justify-between text-[#181C14] max-screen-inner md:h-screen"
        id="contact"
      >
        <div className="flex flex-col justify-between items-start gap-6">
          <h1 className="max-w-430 text-[40px] lg:text-[60px] md:w-[450px] xl:w-[700px] tracking-tight leading-10 lg:leading-16 italic text-[#181C14] dark:text-[#fff]">
            Have an exciting project you need help with?
          </h1>
          <p className="text-[#181C14] dark:text-[#90aecf] text-[16px] md:w-[300px] leading-tight italic font-medium">
            You can send me an email or reach me through any of the socials
            below
          </p>
        </div>

        <div className="flex flex-col gap-4 items-start justify-between">
          <div className="flex flex-col">
            {/* <p>Follow me:</p> */}
            <div className="flex flex-row gap-2">
              <a
                href="https://github.com/samsonlawal"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="flex flex-row gap-1 cursor-pointer w-10 h-10 justify-center items-center bg-[#181C14]/20 rounded-full hover:bg-[#181c14]/40 dark:bg-[#90aecf]/70 dark:hover:bg-[#90aecf] transition-colors duration-300">
                  <img
                    src="/icons/githubb-dark.svg"
                    alt=""
                    className="w-[18px]"
                  />
                  {/* <p>github</p> */}
                </span>
              </a>

              <a
                href="https://x.com/samsondejs"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="flex flex-row gap-1 cursor-pointer w-10 h-10 justify-center items-center bg-[#181C14]/20 rounded-full hover:bg-[#181c14]/40 dark:bg-[#90aecf]/70 dark:hover:bg-[#90aecf] transition-colors duration-300">
                  <img
                    src="/icons/twitterr-dark.svg"
                    alt=""
                    className="w-[18px]"
                  />
                  {/* <p>twitter</p> */}
                </span>
              </a>

              <a href="https://" target="_blank" rel="noopener noreferrer">
                <span className="flex flex-row gap-1 cursor-pointer w-10 h-10 justify-center items-center hover:bg-[#181c14]/40 transition-colors duration-300 bg-[#181C14]/20 dark:bg-[#90aecf]/70 dark:hover:bg-[#90aecf] rounded-full">
                  <img
                    src="/icons/linkedinn-dark.svg"
                    alt=""
                    className="w-[16px]"
                  />
                  {/* <p>linkedin</p> */}
                </span>
              </a>
            </div>
          </div>

          <div className="flex flex-row gap-2 px-4 py-1 justify-center items-center rounded-full border-[1.5px] border-[#181C14]/20 bg-[#181C14]/20 hover:bg-[#181c14]/40 dark:border-[#90aecf]/70 dark:bg-[#90aecf]/60 transition-colors duration-300">
            <img
              src="/icons/copy-dark.svg"
              alt=""
              className="w-[14px] cursor-pointer"
            />

            <p className="text-[#181C14] text-[16px]">
              samsondejilawal@gmail.com
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
