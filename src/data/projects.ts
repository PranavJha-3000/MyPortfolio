export type Project = {
  category: string;
  title: string;
  description: string;
  chips: string[];
  /** Path under /public. Falls back to a placeholder frame when absent. */
  image?: string;
  /** Buttons render disabled until a real URL lands here. */
  demoUrl?: string;
  repoUrl?: string;
};

export const projects: Project[] = [
  {
    category: "AI PLATFORM",
    title: "INSIGHT ENGINE",
    description:
      "Retrieval-augmented research assistant that turns scattered docs into cited, trustworthy answers.",
    chips: ["Next.js", "LangChain", "PostgreSQL", "OpenAI"],
  },
  {
    category: "WEB APPLICATION",
    title: "LEDGERLINE",
    description:
      "Real-time finance dashboard for founders — burn, runway and forecasts without the spreadsheet.",
    chips: ["React", "Node.js", "WebSockets", "AWS"],
  },
  {
    category: "UI ENGINEERING",
    title: "ATLAS UI",
    description:
      "A motion-first component system: 40+ primitives, tokens and docs, built for dark interfaces.",
    chips: ["TypeScript", "Tailwind", "Framer Motion"],
  },
];
