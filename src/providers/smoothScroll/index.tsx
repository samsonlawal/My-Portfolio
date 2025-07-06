// components/SmoothScrollWrapper.tsx
"use client";

import { useEffect, useRef } from "react";

interface SmoothScrollWrapperProps {
  children: React.ReactNode;
}

export default function SmoothScrollWrapper({
  children,
}: SmoothScrollWrapperProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let scroll: any = null;

    if (scrollRef.current) {
      import("locomotive-scroll").then((LocomotiveScrollModule) => {
        const LocomotiveScroll = LocomotiveScrollModule.default;
        scroll = new LocomotiveScroll({
          el: scrollRef.current!,
          smooth: true,
          multiplier: 1,
          class: "is-revealed",
        });
      });
    }

    return () => {
      if (scroll) scroll.destroy();
    };
  }, []);

  return (
    <div
      ref={scrollRef}
      data-scroll-container
      className="max-screen-wrapper flex flex-col items-center font-dm-sans min-h-screen bg-[#F0EFED] text-black"
    >
      {children}
    </div>
  );
}
