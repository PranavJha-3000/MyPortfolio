import { AmbientGlow } from "@/components/fx/AmbientGlow";
import { Chips } from "@/components/ui/Chips";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { TiltCard } from "@/components/ui/TiltCard";
import { experience } from "@/data/experience";

/** Faint cutting-mat grid, echoing the artwork above it. */
const CUTTING_MAT = {
  backgroundColor: "var(--color-bg-alt)",
  backgroundImage:
    "linear-gradient(rgba(38,84,62,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(38,84,62,0.07) 1px, transparent 1px)",
  backgroundSize: "48px 48px",
};

export function Experience() {
  return (
    <section
      id="experience"
      className="relative overflow-hidden px-7 py-[130px]"
      style={CUTTING_MAT}
    >
      <AmbientGlow
        className="top-[-20%] right-[-12%] aspect-square w-[50vw]"
        alpha={0.16}
        intensity={0.8}
        animation="drift2 32s ease-in-out infinite"
      />

      <div className="relative mx-auto max-w-[1240px]">
        <Reveal>
          <SectionLabel>03 — EXPERIENCE</SectionLabel>
        </Reveal>

        <Reveal
          delay={100}
          className="outline-type mt-[26px] mb-[54px] font-display text-[clamp(58px,10.5vw,164px)] leading-[0.95] tracking-[0.02em]"
        >
          EXPERIENCE
        </Reveal>

        {experience.map((role, index) => (
          <Reveal key={role.company} className={index > 0 ? "mt-[22px]" : ""}>
            <TiltCard className="border border-line bg-surface px-[46px] py-[44px] transition-[border-color,box-shadow] duration-[400ms] hover:border-line-warm hover:shadow-[0_40px_90px_-40px_rgba(255,159,67,0.2)] max-sm:px-6 max-sm:py-8">
              <div className="flex flex-wrap items-baseline justify-between gap-7">
                <div>
                  <div className="font-display text-[24px] tracking-[0.06em] text-warm">
                    {role.period}
                  </div>
                  <h3 className="mt-3 font-display text-[30px] font-normal tracking-[0.03em]">
                    {role.company}
                  </h3>
                  <div className="mt-2 text-[13px] tracking-[0.24em] text-muted">
                    {role.role}
                  </div>
                </div>
                <Chips items={role.chips} />
              </div>

              <ul className="mt-7 flex list-none flex-col gap-3 p-0">
                {role.bullets.map((bullet) => (
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
            </TiltCard>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
