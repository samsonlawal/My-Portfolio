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
  {
    title: "cvspan",
    description: "A product development agency evolving from UI/UX design and education into full-scale product development.",
    image: "/icons/cvspan-large.svg",
    alt: "cvspan-img",
    year: "Jun - Feb 2025",
    role: "Frontend Developer",
    link: "https://cvspan.com",
    stack: "Next.js • TailwindCSS • TypeScript",
    bullets: [
      "Contributed to redeveloping user interfaces showcasing agency product capabilities",
      "Collaborated on design system alignments and UI consistency updates"
    ]
  },
  {
    title: "medvive",
    description: "Digital health company that connects patients directly with licensed healthcare providers online",
    image: "/icons/medvive-logo.png",
    alt: "medvive-img",
    year: "Sep - Jan 2026",
    role: "Frontend Developer",
    link: "https://medvive.ng",
    stack: "React • Firebase • Tailwind • Mixpanel",
    bullets: [
      "refactored codebase to typescript",
      "built responsive uis",
      "INtegrated wallet feature"
    ]
  }
];
