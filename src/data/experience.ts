export type Experience = {
  period: string;
  company: string;
  role: string;
  chips: string[];
  bullets: string[];
};

export const experience: Experience[] = [
  {
    period: "2026 — PRESENT",
    company: "UPSTAGEX PRIVATE LIMITED",
    role: "FOUNDER & CEO",
    chips: ["Next.js", "Nest.js", "GCP", "Gemini"],
    bullets: [
      "Building India's influencer marketing platform — creator discovery, digital contracts and milestone escrow in one flow.",
      "Shipped Xerxes AI: drafts briefs, matches creators and suggests pricing across 10 lakh+ vetted profiles.",
    ],
  },
  {
    period: "AUG 2025 — SEP 2025",
    company: "APP MECHANIC",
    role: "UNREAL DEVELOPER · FREELANCE",
    chips: ["UE5", "C++", "Blueprints", "Android Studio"],
    bullets: [
      "Built Microdose — a vertical short-drama app in the ReelShort mould, where playable mini-games unlock the next episode.",
      "Designed the game-to-episode unlock loop that turns watching a series into playing through it.",
      "Shipped Unreal Engine 5 gameplay to Android: C++ and Blueprints packaged and debugged through Android Studio.",
    ],
  },
  {
    period: "MAR 2025 — JUN 2025",
    company: "IDZ DIGITAL",
    role: "SOFTWARE DEVELOPER INTERN",
    chips: ["UE5", "C++", "Blueprints", "Meta VR Kit"],
    bullets: [
      "Worked on Kaal Yoddha, a UE5 action-adventure set in dark Indian mythology — gameplay systems in C++ and Blueprints.",
      "Prototyped the VR build on the Meta headset kit, adapting the PC game's mechanics for headset play.",
    ],
  },
];
