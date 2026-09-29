export interface BlogItem {
  title: string;
  description: string;
  date?: string;
  tag?: string;
  link: string;
}

export const BLOG_DATA: BlogItem[] = [
  {
    title: "Understanding React Server Components & Streaming Architecture",
    description: "A breakdown of how server components reduce client bundle sizes and how progressive streaming hydration improves time-to-interactive.",
    date: "2026",
    tag: "Architecture",
    link: "#",
  },
  {
    title: "Building High-Throughput Distributed Web Systems",
    description: "Key architectural patterns for rate limiting, Redis caching layers, and database partitioning under heavy concurrent load.",
    date: "2026",
    tag: "System Design",
    link: "#",
  },
  {
    title: "Micro-interactions & Perceived Performance in Web Applications",
    description: "How subtle optimistic UI updates, spring physics, and CSS hardware acceleration create instant, fluid user experiences.",
    date: "2025",
    tag: "Frontend",
    link: "#",
  },
];
