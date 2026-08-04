export type ResumeRow = { label: string; value: string };

export const profile = {
  name: "Pranav Jha",
  established: "EST. 2020",
  roles: ["APPLIED AI ENGINEER", "0→1 BUILDER", "SYSTEMS THINKER"],
  headline: ["BUILDING PRODUCTS", "THAT SOLVE "],
  /** Rendered orange-outlined, closing the second headline line. */
  headlineAccent: "REAL PROBLEMS.",
  intro:
    "From data model to deploy — web applications, premium interfaces and AI features engineered past the demo, into production.",
  aboutHeading: "THE DEVELOPER BEHIND THE BUILD",
  aboutBody:
    "I'm a builder at heart. I love turning ideas into real, impactful products that solve real problems — constantly learning, experimenting and shipping what matters.",
  portraitNote: "( caught red-handed, building things )",
  /** Path under /public. Without it the frame renders a placeholder. */
  portrait: "/portrait.jpg",
  portraitAlt:
    "Pranav Jha at a laptop, headphones on, giving a thumbs up mid-build",
} as const;

export const resume: ResumeRow[] = [
  { label: "NAME", value: "Pranav Jha" },
  { label: "ROLE", value: "Full Stack Developer · Entrepreneur" },
  { label: "EXPERIENCE", value: "3+ years shipping web & AI products" },
  { label: "EDUCATION", value: "Bachelor of Technology, Computer Science" },
  {
    label: "TECH STACK",
    value:
      "TypeScript · React · Node.js · Python · Gemini · LangChain · RAG · Agents",
  },
  { label: "LOCATION", value: "India · Working worldwide" },
  { label: "CURRENT FOCUS", value: "AI-first products & premium interfaces" },
];
