import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { RefObject } from "react";

gsap.registerPlugin(ScrollTrigger);

type FadeInProps = {
  ref: RefObject<HTMLElement | null>;
  delay?: number;
  y?: number;
  duration?: number;
  scroll?: boolean; // enable scroll animation
};

export function useGsapFadeIn({
  ref,
  delay = 0,
  y = 10,
  duration = 2,
  scroll = false,
}: FadeInProps) {
  useGSAP(() => {
    if (!ref.current) return;

    const config = {
      opacity: 0,
      y,
      duration,
      delay,
      ease: "power2.out",
    };

    // Scroll animation
    if (scroll) {
      gsap.from(ref.current, {
        ...config,
        scrollTrigger: {
          trigger: ref.current,
          start: "top 85%",
          toggleActions: "restart none none reset",
        },
      });
      return;
    }

    // Normal fade-in on mount
    gsap.from(ref.current, config);
  });
}

export function useGsapElementFadeIn({
  ref,
  delay = 0,
  y = 40,
  duration = 0.6,
  scroll = false,
}: FadeInProps) {
  useGSAP(() => {
    if (!ref.current) return;

    const config = {
      opacity: 0,
      y,
      duration,
      delay,
      ease: "power2.out",
    };

    // Scroll animation
    if (scroll) {
      gsap.from(ref.current, {
        ...config,
        scrollTrigger: {
          trigger: ref.current,
          start: "top 85%",
          toggleActions: "restart none none reset",
        },
      });
      return;
    }

    // Normal fade-in on mount
    gsap.from(ref.current, config);
  });
}
