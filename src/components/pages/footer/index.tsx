import Link from "next/link";

export default function Footer() {
  return (
    <div className="max-screen-wrapper">
      <div className="max-screen-inner flex flex-col gap-6 w-full items-center poppins h-fit text-gray-500 justify-between pb-[120px] pt-[36px] md:py-[40px] md:flex-row-reverse">
        <div className="flex flex-col">
          {/* <p>Follow me:</p> */}
          <div className="flex flex-row gap-4">
            <a
              href="https://github.com/samsonlawal"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="flex flex-row gap-1 cursor-pointer w-9 h-9 justify-center items-center bg-[#181C14]/20 rounded-full hover:bg-[#181c14]/40 dark:bg-[#90aecf]/70 dark:hover:bg-[#90aecf] transition-colors duration-300">
                <img
                  src="/icons/githubb-dark.svg"
                  alt=""
                  className="w-[16px]"
                />
                {/* <p>github</p> */}
              </span>
            </a>

            <a
              href="https://x.com/samsondejs"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="flex flex-row gap-1 cursor-pointer w-9 h-9 justify-center items-center bg-[#181C14]/20 rounded-full hover:bg-[#181c14]/40 dark:bg-[#90aecf]/70 dark:hover:bg-[#90aecf] transition-colors duration-300">
                <img
                  src="/icons/twitterr-dark.svg"
                  alt=""
                  className="w-[16px]"
                />
                {/* <p>twitter</p> */}
              </span>
            </a>

            <a href="https://" target="_blank" rel="noopener noreferrer">
              <span className="flex flex-row gap-1 cursor-pointer w-9 h-9 justify-center items-center hover:bg-[#181c14]/40 transition-colors duration-300 bg-[#181C14]/20 dark:bg-[#90aecf]/70 dark:hover:bg-[#90aecf] rounded-full">
                <img
                  src="/icons/linkedinn-dark.svg"
                  alt=""
                  className="w-[14px]"
                />
                {/* <p>linkedin</p> */}
              </span>
            </a>
          </div>
        </div>
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
        <div className="flex flex-row gap-2 w-fit justify-center items-center md:justify-start ">
          <p className=" text-sm font-medium text-gray-500/70">© 2025</p>
          <div className="text-oxford dark:text-gray-500/30">|</div>

          <p className=" text-sm font-medium text-gray-500/70">
            Samson Deji Lawal
          </p>
        </div>
      </div>
    </div>
  );
}
