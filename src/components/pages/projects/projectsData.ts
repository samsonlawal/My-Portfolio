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
    name: "System Design Whiteboard",
    description: "Collaborative, real-time infinite canvas for engineering teams to diagram architecture, brainstorm system designs, and collaborate with multiplayer live cursor presence.",
    stack: "React • TypeScript • WebSockets • WebGL / Canvas • Node.js • CRDTs",
    images: ["/icons/card-view.svg", "/icons/list-view.svg"],
    link: "#",
    github: "https://github.com/samsonlawal",
    featured: true,
  },
  // {
  //   name: "Webbie",
  //   description: "Website design discovery platform showcasing trendsetting digital products.",
  //   stack: "Next.js • TailwindCSS • TypeScript",
  //   images: ["/icons/card-view.svg", "/icons/list-view.svg"],
  //   link: "https://webbie.io",
  //   featured: true,
  // },
  {
    name: "Discount Drinks",
    description: "UK-based e-commerce platform specializing in the bulk sale of discounted alcoholic and non-alcoholic beverages.",
    stack: "Next.js • TailwindCSS • TypeScript • Express • MongoDB",
    images: ["/icons/card-view.svg", "/icons/list-view.svg"],
    link: "https://discountdrinksandmoreltd.co.uk/",
    featured: false,
  },
  {
    name: "Task Manager & Workspace",
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

  /* =========================================================================
   * UPCOMING / PIPELINE PROJECTS (In Ideation / Development)
   * ========================================================================= */
  // {
  //   name: "RepoChat AI",
  //   description: "AI-powered developer tool that indexes your GitHub repositories, enabling interactive conversational Q&A, architectural explanations, and code exploration directly across your codebase.",
  //   stack: "Next.js • TypeScript • Python • LangChain • Vector DB • OpenAI / Gemini API",
  //   images: ["/icons/card-view.svg", "/icons/list-view.svg"],
  //   link: "#",
  //   github: "https://github.com/samsonlawal",
  //   featured: true,
  // },
  // {
  //   name: "URL Shortener & Analytics",
  //   description: "High-throughput URL shortening service featuring custom vanity slugs, distributed caching, rate limiting, and real-time geolocation click analytics.",
  //   stack: "Go / Rust • Next.js • Redis • PostgreSQL • TailwindCSS",
  //   images: ["/icons/card-view.svg", "/icons/list-view.svg"],
  //   link: "#",
  //   github: "https://github.com/samsonlawal",
  //   featured: false,
  // },
];
