export interface Project {
  name: string;
  description: string;
  stack: string;
  link: string;
  github?: string;
  images: string[];
  featured?: boolean;
}

export const PROJECTS_DATA: Project[] = [
  {
    name: "Webbie",
    description: "Website design discovery platform showcasing trendsetting digital products.",
    stack: "Next.js • TailwindCSS • TypeScript",
    images: ["/icons/card-view.svg", "/icons/list-view.svg"],
    link: "https://webbie.io",
    featured: true,
  },
  {
    name: "Discount Drinks",
    description: "UK-based e-commerce platform specializing in the bulk sale of discounted alcoholic and non-alcoholic beverages.",
    stack: "Next.js • TailwindCSS • TypeScript • Express • MongoDB",
    images: ["/icons/card-view.svg", "/icons/list-view.svg"],
    link: "https://discountdrinksandmoreltd.co.uk/",
    featured: false,
  },
  {
    name: "Turtle",
    description: "A comprehensive task and workspace management system featuring members, roles, comments, and attachments.",
    stack: "Next.js • TailwindCSS • TypeScript • Express • MongoDB",
    images: ["/icons/card-view.svg", "/icons/list-view.svg"],
    link: "https://taskstackhq.vercel.app",
    github: "https://github.com/samsonlawal/Task-Management-Workspace",
    featured: true,
  },
  {
    name: "Note",
    description: "A fast, secure note-taking application to capture, organize, and format notes with markdown and MDX support.",
    stack: "Next.js • TypeScript • Supabase • TailwindCSS • MDX",
    images: ["/icons/card-view.svg", "/icons/list-view.svg"],
    link: "https://knotetaker.vercel.app",
    github: "https://github.com/samsonlawal/Note-Taking-App",
    featured: false,
  },
];
