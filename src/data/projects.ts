export type Project = {
  category: string;
  title: string;
  description: string;
  /** Optional detail points, rendered under the description. */
  bullets?: string[];
  chips: string[];
  /** Path under /public. Falls back to a placeholder frame when absent. */
  image?: string;
  /** Buttons render disabled until a real URL lands here. */
  demoUrl?: string;
  repoUrl?: string;
  /** Button labels. Default to LIVE DEMO and GITHUB. */
  demoLabel?: string;
  repoLabel?: string;
};

export const projects: Project[] = [
  {
    category: "APPLIED AI · IN DEVELOPMENT",
    title: "MEBIUS",
    description:
      "One surface. No inside, no outside. An AI that sits beside you and points — screen guidance in the language you actually think in, for the two billion people software was never designed for.",
    bullets: [
      "Hold a key, ask aloud in Hindi or English — a voice answers while a marker lands on the exact control you need.",
      "One shared core behind thin Windows and Android shells: adding a language or a portal touches one repository, never four.",
      "Points, never takes. On-device Scam Shield flags known fraud screens locally, without transmitting what it sees.",
    ],
    chips: ["Windows", "Android", "Vision Models", "On-Device AI"],
  },
  {
    category: "SAAS PLATFORM",
    title: "UPSTAGEX",
    description:
      "India's influencer marketing platform — brief to payout in one workflow brands and creators can both trust.",
    bullets: [
      "Creator discovery across 4,500+ vetted profiles, filtered 20 ways and matched by Xerxes AI.",
      "Auto-generated digital contracts backed by milestone-based escrow releases.",
      "Deliverable tracking, approvals and a permanent record of every deal.",
    ],
    chips: ["Next.js", "Nest.js", "GCP", "Gemini"],
    image: "/projects/upstagex.jpg",
    demoUrl: "https://www.upstagex.com",
    demoLabel: "WEBSITE",
    repoUrl: "https://youtu.be/kd6Ga9CpzhU?si=y93LM1rl4UwuJRNP",
    repoLabel: "SHOWCASE",
  },
  {
    category: "GAME DEVELOPMENT",
    title: "SEKIROWHO",
    description: "Souls-like action game built in Unreal Engine 5.",
    bullets: [
      "Used UE5 Behavior Trees to build modular and reactive enemy AI.",
      "Designed combo, dodge and lock-on combat systems for engaging melee gameplay.",
      "Tuned boss stat progression and enemy phases to enrich challenge and pace.",
    ],
    chips: ["UE5", "C++", "Blueprints", "Behavior Trees"],
    image: "/projects/sekirowho.jpg",
    demoUrl: "https://youtu.be/czAQO9xbij4?si=lFqFGm5pclw5WIIm",
    repoUrl: "https://gamedev-pranav.itch.io/sekirowho",
    repoLabel: "ITCH.IO",
  },
];
