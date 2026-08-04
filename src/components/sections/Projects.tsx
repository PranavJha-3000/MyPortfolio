import { AmbientGlow } from "@/components/fx/AmbientGlow";
import { CaveatNote } from "@/components/ui/CaveatNote";
import { Chips } from "@/components/ui/Chips";
import { FramedImage } from "@/components/ui/FramedImage";
import { MagneticLink } from "@/components/ui/MagneticLink";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { TiltCard } from "@/components/ui/TiltCard";
import { projects } from "@/data/projects";
import { cn } from "@/lib/cn";

export function Projects() {
  return (
    <section id="projects" className="relative overflow-hidden px-7 py-[130px]">
      <AmbientGlow
        className="top-[4%] left-[-16%] aspect-square w-[54vw]"
        alpha={0.18}
        intensity={0.9}
        animation="drift1 34s ease-in-out infinite"
      />

      <div className="relative mx-auto max-w-[1240px]">
        <Reveal>
          <SectionLabel>04 — SELECTED WORK</SectionLabel>
        </Reveal>

        <Reveal
          delay={100}
          className="mt-[26px] mb-5 flex flex-wrap items-baseline gap-[26px]"
        >
          <span className="outline-type font-display text-[clamp(58px,10.5vw,164px)] leading-[0.95] tracking-[0.02em]">
            PROJECTS
          </span>
          <CaveatNote className="text-[23px]">
            ( shipped, not just pushed to production )
          </CaveatNote>
        </Reveal>

        {projects.map((project, index) => (
          <Reveal
            key={project.title}
            className={cn(
              "flex flex-wrap items-center gap-16 border-t border-line-faint py-[60px]",
              index % 2 === 1 && "flex-row-reverse",
            )}
          >
            <div className="relative flex-[1.2_1_420px] min-w-[320px]">
              <AmbientGlow
                className="-inset-9 rounded-none"
                shape="circle at 40% 30%"
                alpha={0.16}
                intensity={0.9}
              />
              <TiltCard className="relative overflow-hidden border border-line-strong bg-surface">
                <FramedImage
                  src={project.image}
                  alt={project.imageAlt ?? `${project.title} — product shot`}
                  placeholder={`${project.title} — product shot`}
                  aspect="16 / 10"
                  sizes="(max-width: 900px) 100vw, 620px"
                />
              </TiltCard>
            </div>

            <div className="flex-[1_1_360px] min-w-[300px]">
              <div className="text-[11px] font-semibold tracking-[0.3em] text-accent">
                {project.category}
              </div>

              <h3 className="mt-4 font-display text-[clamp(38px,4.6vw,60px)] leading-[1.02] font-normal tracking-[0.02em]">
                {project.title}
              </h3>

              <p className="mt-5 text-[16px] leading-[1.7] text-muted text-pretty">
                {project.description}
              </p>

              {project.bullets && (
                <ul className="mt-5 flex list-none flex-col gap-3 p-0">
                  {project.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-3">
                      <span
                        aria-hidden
                        className="mt-[7px] h-[7px] w-[7px] flex-none bg-accent"
                      />
                      <span className="text-[15px] leading-[1.6] text-body">
                        {bullet}
                      </span>
                    </li>
                  ))}
                </ul>
              )}

              <Chips items={project.chips} className="mt-[22px]" />

              <div className="mt-[30px] flex flex-wrap gap-3.5">
                <MagneticLink
                  href={project.demoUrl}
                  external
                  className="btn btn-sm btn-filled"
                >
                  {project.demoLabel ?? "LIVE DEMO"}
                </MagneticLink>
                <MagneticLink
                  href={project.repoUrl}
                  external
                  className="btn btn-sm btn-outline"
                >
                  {project.repoLabel ?? "GITHUB"}
                </MagneticLink>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
