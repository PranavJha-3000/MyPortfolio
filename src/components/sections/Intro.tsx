import { AmbientGlow } from "@/components/fx/AmbientGlow";
import { LaserLine } from "@/components/fx/LaserLine";
import { MagneticLink } from "@/components/ui/MagneticLink";
import { MaskedLine } from "@/components/ui/MaskedLine";
import { Reveal } from "@/components/ui/Reveal";
import { profile } from "@/data/profile";

const HEADLINE_SIZE = "text-[clamp(46px,7.2vw,96px)]";

export function Intro() {
  return (
    <section className="relative overflow-hidden px-7 pt-[30px] pb-[120px]">
      <AmbientGlow
        className="top-[-28%] right-[-14%] aspect-square w-[58vw]"
        alpha={0.22}
        intensity={1}
        animation="drift1 26s ease-in-out infinite"
      />
      <LaserLine className="bottom-[11%]" rotate={-3} opacity={0.4} />

      <div className="relative mx-auto max-w-[1240px]">
        <div className="mx-auto mb-24 flex flex-col items-center gap-3">
          <span className="font-hand text-[22px] font-semibold text-warm -rotate-2">
            ( scroll down )
          </span>
          <span
            aria-hidden
            className="relative block h-[50px] w-px overflow-hidden bg-ink/12"
          >
            <span className="absolute top-0 left-0 block h-4 w-px bg-warm animate-cue-drop" />
          </span>
        </div>

        <Reveal className="flex flex-wrap items-center gap-3.5 text-[12px] font-semibold tracking-[0.3em] text-muted">
          {profile.roles.map((role, index) => (
            <span key={role} className="flex items-center gap-3.5">
              {role}
              {index < profile.roles.length - 1 && (
                <span aria-hidden className="inline-block h-[7px] w-[7px] bg-accent" />
              )}
            </span>
          ))}
        </Reveal>

        <h1 className="mt-[34px]">
          <MaskedLine
            className={`font-display ${HEADLINE_SIZE} leading-[1.05] tracking-[0.015em] text-ink`}
          >
            {profile.headline[0]}
          </MaskedLine>
          <MaskedLine
            delay={140}
            className={`font-display ${HEADLINE_SIZE} leading-[1.05] tracking-[0.015em] text-ink`}
          >
            {profile.headline[1]}
            <span className="outline-type-warm">{profile.headlineAccent}</span>
          </MaskedLine>
        </h1>

        <Reveal
          as="p"
          delay={150}
          className="mt-[30px] max-w-[560px] text-[17px] leading-[1.7] text-muted text-pretty"
        >
          {profile.intro}
        </Reveal>

        <Reveal delay={280} className="mt-11 flex flex-wrap gap-[18px]">
          <MagneticLink href="#projects" className="btn btn-filled">
            VIEW PROJECTS
          </MagneticLink>
          <MagneticLink href="#contact" className="btn btn-outline">
            LET&apos;S WORK TOGETHER
          </MagneticLink>
        </Reveal>
      </div>
    </section>
  );
}
