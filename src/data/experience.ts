export type Experience = {
  period: string;
  company: string;
  role: string;
  chips: string[];
  bullets: string[];
};

export const experience: Experience[] = [
  {
    period: "2024 — NOW",
    company: "INDEPENDENT STUDIO",
    role: "FOUNDER & FULL-STACK ENGINEER",
    chips: ["Next.js", "LangChain", "AWS"],
    bullets: [
      "Building AI-first products end to end — two shipped, one in private beta.",
      "Own the whole surface: brand, interface, infra and the pager.",
    ],
  },
  {
    period: "2022 — 2024",
    company: "SERIES-A SAAS",
    role: "SENIOR FRONTEND ENGINEER",
    chips: ["TypeScript", "React", "PostgreSQL"],
    bullets: [
      "Led the core dashboard rebuild — first paint down from 2.1s to 400ms.",
      "Built the design system now used across three product lines.",
    ],
  },
  {
    period: "2020 — 2022",
    company: "DIGITAL PRODUCT STUDIO",
    role: "SOFTWARE ENGINEER",
    chips: ["Node.js", "Express", "Docker"],
    bullets: [
      "Delivered 12+ client builds across fintech, health and commerce.",
      "The engineer on call for performance, DX and the hard bugs.",
    ],
  },
];
