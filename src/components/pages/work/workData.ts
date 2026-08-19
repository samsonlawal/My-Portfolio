export interface WorkExperienceItem {
  title: string;
  description: string;
  image: string;
  alt: string;
  year: string;
  role: string;
  link: string;
  stack: string;
  bullets?: string[];
}

export const WORK_EXPERIENCE_DATA: WorkExperienceItem[] = [

  //   {
  //   title: "Freelance",
  //   description: "Freelance Full Stack Developer. I work with clients to build web applications and solutions",
  //   image: "/icons/freelance.png",
  //   alt: "freelance-img",
  //   year: "Jan 2026 - Present",
  //   role: "Full Stack Developer",
  //   link: "#contact",
  //   stack: "Typescript • Nextjs • Nodejs/Express • MongoDB • Tailwind",
  //   bullets: [
  //     "refactored codebase to typescript",
  //     "built responsive uis",
  //     "INtegrated wallet feature"
  //   ]
  // },

    {
    title: "Medvive",
    description: "Digital health company that connects patients directly with licensed healthcare providers online",
    image: "/icons/medvive-logo.png",
    alt: "medvive-img",
    year: "Sep 2025 - Jan 2026",
    role: "Frontend Developer",
    link: "https://medvive.ng",
    stack: "React • Firebase • Tailwind • Mixpanel",
    bullets: [
      "refactored codebase to typescript",
      "built responsive uis",
      "INtegrated wallet feature"
    ]
  },

  {
    title: "CVSpan",
    description: "A product development agency evolving from UI/UX design and education into full-scale product development.",
    image: "/icons/cvspan-large.svg",
    alt: "cvspan-img",
    year: "Jun 2024 - Feb 2025",
    role: "Frontend Developer",
    link: "https://cvspan.com",
    stack: "Next.js • TailwindCSS • TypeScript",
    bullets: [
      "Contributed to redeveloping user interfaces showcasing agency product capabilities",
      "Collaborated on design system alignments and UI consistency updates"
    ]
  },

];
