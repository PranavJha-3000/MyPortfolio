export type ContactLink = {
  label: string;
  value: string;
  href: string;
  external?: boolean;
};

export const email = "hello@pranavjha.in";

export const contactLinks: ContactLink[] = [
  { label: "EMAIL", value: email, href: `mailto:${email}` },
  {
    label: "LINKEDIN",
    value: "/in/pranav-jha-3000s",
    href: "https://www.linkedin.com/in/pranav-jha-3000s/",
    external: true,
  },
  {
    label: "GITHUB",
    value: "@PranavJha-3000",
    href: "https://github.com/PranavJha-3000",
    external: true,
  },
];

/** Drop a PDF in /public and point this at it to enable the resume button. */
export const resumeUrl: string | undefined = undefined;

export const navLinks = [
  { label: "ABOUT", href: "#about" },
  { label: "SKILLS", href: "#skills" },
  { label: "EXPERIENCE", href: "#experience" },
  { label: "PROJECTS", href: "#projects" },
  { label: "CONTACT", href: "#contact" },
];
