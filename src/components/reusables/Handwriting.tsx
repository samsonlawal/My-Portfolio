import React from "react";

type Props = {
  name?: string;
  size?: number; // font-size in px
  duration?: number; // total duration in seconds
  color?: string;
};

export default function NameHandwriting({
  name = "Your Name",
  size = 56,
  duration = 2.2,
  color = "#111827",
}: Props) {
  // split into characters so we can stagger animations
  const chars = Array.from(name);
  // per-character delay is derived from duration and number of chars
  const perChar = Math.max(0.03, duration / Math.max(6, chars.length * 1.0));

  return (
    <div className="name-container" aria-label={`Animated writing of ${name}`}>
      {chars.map((ch, i) => (
        <span
          key={i}
          className="char"
          style={{
            // pass the index and sizing into CSS via custom properties
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            ["--i" as any]: i,
            ["--per" as any]: `${perChar}s`,
            ["--size" as any]: `${size}px`,
            ["--duration" as any]: `${duration}s`,
            color,
          }}
        >
          {ch}
        </span>
      ))}

      {/* Scoped styles using styled-jsx (works in Next.js). If you don't use Next.js, move these into a CSS file. */}
      <style jsx>{`
        @import url("https://fonts.googleapis.com/css2?family=Pacifico&display=swap");

        .name-container {
          display: inline-block;
          line-height: 1;
          font-family: "Pacifico", cursive;
          font-size: var(--size);
          white-space: pre; /* preserve spaces in the name */
        }

        .char {
          display: inline-block;
          transform-origin: left bottom;
          transform: translateY(8px) rotate(-6deg) skewX(-6deg);
          opacity: 0;
          filter: drop-shadow(0 1px 0 rgba(0, 0, 0, 0.02));
          /* We use two animations: a slide/fade + a slight stroke-reveal using background-clip */
          animation: slideIn calc(var(--duration, 2s))
            cubic-bezier(0.2, 0.9, 0.25, 1) forwards;
          /* stagger using computed delay */
          animation-delay: calc(var(--i) * var(--per));
          /* Make the glyph look like a continuous line by using background-clip on the text */
          background: linear-gradient(
            90deg,
            currentColor 0%,
            currentColor 100%
          );
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent; /* makes the text show the background gradient */
        }

        /* Optional subtle "pen" trace using an overlay pseudo element */
        .char::after {
          content: "\\00a0"; /* non-breaking space to match character width */
          position: absolute;
          pointer-events: none;
          mix-blend-mode: multiply;
        }

        @keyframes slideIn {
          0% {
            opacity: 0;
            transform: translateY(10px) rotate(-10deg) skewX(-10deg)
              scaleY(1.08);
            filter: blur(1.6px) saturate(0.9);
          }
          60% {
            opacity: 1;
            transform: translateY(-2px) rotate(1deg) skewX(-2deg) scaleY(0.98);
            filter: blur(0.2px) saturate(1);
          }
          100% {
            opacity: 1;
            transform: translateY(0) rotate(0deg) skewX(0deg) scaleY(1);
            filter: blur(0);
          }
        }

        /* Make spaces slightly wider so cursive looks natural */
        .char[style] {
          position: relative;
        }

        /* accessibility: reduce motion prefers-reduced-motion */
        @media (prefers-reduced-motion: reduce) {
          .char {
            animation: none;
            transform: none;
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
}
