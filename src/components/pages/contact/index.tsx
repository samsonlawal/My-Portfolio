export default function Contact() {
  return (
    <div
      className="h-[650px] py-[100px] flex flex-col justify-between text-[#181C14]"
      id="contact"
    >
      <h1 className="text-[60px] w-[700px] tracking-tight leading-16 italic text-[#181C14]">
        Have an exciting project you need help with?
      </h1>

      <div className="flex flex-row items-end justify-between">
        <div>
          <p className="text-[#181C14]/50">Send me an email</p>
          <p className="text-[#181C14] text-[24px]">
            samsondejilawal@gmail.com
          </p>
        </div>

        <div className="flex flex-col gap-2">
          <span className="flex flex-row gap-2">
            <img src="/icons/github.svg" alt="" className="w-[16px]" />
            <p>github</p>
          </span>
          <span className="flex flex-row gap-2">
            <img src="/icons/github.svg" alt="" className="w-[16px]" />
            <p>twitter</p>
          </span>
          <span className="flex flex-row gap-2">
            <img src="/icons/github.svg" alt="" className="w-[16px]" />
            <p>linkedin</p>
          </span>
        </div>
      </div>
    </div>
  );
}
