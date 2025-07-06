// components/SmoothScroll.tsx
"use client";
import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

export default function SmoothScroll() {
  useEffect(() => {
    const lenis = new Lenis({
      //   duration: 0.5, // duration of momentum (higher = slower stop)
      //   easing: (t) => 1 - Math.pow(1 - t, 2), // easeOutQuad
      //   smooth: true,
      duration: 1.2, // tweak for longer glide (1.0–1.5 works well)
      easing: (t) => 1 - Math.pow(1 - t, 3), // easeOutCubic
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return null;
}
