export type Skill = {
  id: string;
  index: string;
  name: string;
  chips: string[];
  description: string;
  years: string;
  count: string;
  countLabel: string;
  /**
   * Gauge fill. The prototype derived these from `Math.round(100 * lit / 24)`
   * over lit values 21 / 19 / 15 / 17 / 13. Stored as literals so the numbers
   * can be edited directly without reverse-engineering the ratio.
   */
  percent: number;
};

export const skills: Skill[] = [
  {
    id: "frontend",
    index: "01",
    name: "FRONTEND",
    chips: ["React", "Next.js", "TypeScript", "Tailwind"],
    description:
      "Component architecture, motion design and pixel discipline. I build interfaces that stream fast, feel alive and hold up under real product complexity.",
    years: "3 YRS",
    count: "10+",
    countLabel: "PROJECTS BUILT",
    percent: 88,
  },
  {
    id: "backend",
    index: "02",
    name: "BACKEND",
    chips: ["Node.js", "Express", "PostgreSQL", "MongoDB"],
    description:
      "APIs designed like products: predictable, documented, observable. Data models built to survive scale — and the 3 a.m. incident.",
    years: "3 YRS",
    count: "10+",
    countLabel: "PROJECTS BUILT",
    percent: 79,
  },
  {
    id: "cloud",
    index: "03",
    name: "CLOUD",
    chips: ["Docker", "AWS", "Vercel"],
    description:
      "Containerized deploys, CI/CD and infrastructure that stays boring — in the best possible way. Ship on Friday, sleep on Saturday.",
    years: "3 YRS",
    count: "10+",
    countLabel: "PROJECTS BUILT",
    percent: 63,
  },
  {
    id: "ai",
    index: "04",
    name: "AI",
    chips: ["OpenAI", "LangChain", "RAG", "Python"],
    description:
      "From prompt to production: retrieval pipelines, evals and agentic workflows that make it past the demo and into users' hands.",
    years: "2 YRS",
    count: "8+",
    countLabel: "PROJECTS BUILT",
    percent: 71,
  },
  {
    id: "gamedev",
    index: "05",
    name: "GAME DEV",
    chips: ["Unreal", "Unity"],
    description:
      "Gameplay systems, real-time rendering and interaction feel — building worlds in Unreal and Unity with the same product discipline as the web.",
    years: "2 YRS",
    count: "5",
    countLabel: "PROJECTS SHIPPED",
    percent: 54,
  },
];
