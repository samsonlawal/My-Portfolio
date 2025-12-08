import Link from "next/link";

export default function Footer() {
  return (
    <div className="max-screen-wrapper">
      <div className="max-screen-inner flex flex-row w-full items-center font-dm-sans h-fit text-gray-500 justify-between py-3">
        <div className="flex flex-row gap-2 w-full justify-center items-center md:justify-start pb-[70px] md:pb-[20px]">
        <p className=" text-sm font-medium text-gray-500/70">
          © 2025 
          
        </p>
        <div className="text-oxford dark:text-gray-500/30">|</div>
                
        <p className=" text-sm font-medium text-gray-500/70">
          
           Samson Deji Lawal
        </p>
        </div>
        <div className="flex flex-row gap-2">
          {/* <Link
            href="https://github.com/samsonlawal"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/icons/githubb-lighter.svg" alt="" />
            Github
          </Link>

          <Link
            href="https://github.com/samsonlawal"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/icons/githubb-lighter.svg" alt="" />
            twitter
          </Link> */}
        </div>
      </div>
    </div>
  );
}
