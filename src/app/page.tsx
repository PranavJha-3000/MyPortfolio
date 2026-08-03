import { FilmGrain } from "@/components/fx/FilmGrain";
import { MouseGlow } from "@/components/fx/MouseGlow";
import { SmoothScroll } from "@/components/fx/SmoothScroll";
import { AboutProfile } from "@/components/sections/AboutProfile";
import { ArtworkSection } from "@/components/sections/ArtworkSection";
import { Contact } from "@/components/sections/Contact";
import { Experience } from "@/components/sections/Experience";
import { Footer } from "@/components/sections/Footer";
import { Hero } from "@/components/sections/Hero";
import { Intro } from "@/components/sections/Intro";
import { Projects } from "@/components/sections/Projects";
import { TechStack } from "@/components/sections/TechStack";
import { TopNav } from "@/components/sections/TopNav";

export default function Home() {
  return (
    <div className="relative overflow-clip bg-bg">
      <SmoothScroll />
      <MouseGlow />
      <FilmGrain />
      <TopNav />

      <main>
        <Hero />
        <Intro />

        <ArtworkSection
          id="about"
          src="/artwork/about.png"
          alt="About me — handwritten notes pinned to a cutting mat"
          width={1672}
          height={941}
        />
        <AboutProfile />

        <ArtworkSection
          id="skills"
          src="/artwork/skills.png"
          alt="Unlock my skills"
          width={2048}
          height={1151}
        />
        <TechStack />

        <Experience />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
