import Link from "next/link";

export default function Footer() {
  return (
    <div className="max-screen-wrapper">
      <div className="max-screen-inner flex flex-row w-full items-center font-dm-sans h-fit text-gray-500 justify-between py-3">
        <p className="flex flex-row gap-1 text-sm font-medium text-gray-500">
          © 2025 - Samson Deji Lawal
        </p>
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
