import { AmbientGlow } from "@/components/fx/AmbientGlow";
import { CaveatNote } from "@/components/ui/CaveatNote";
import { FramedImage } from "@/components/ui/FramedImage";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { TiltCard } from "@/components/ui/TiltCard";
import { profile, resume } from "@/data/profile";

export function AboutProfile() {
  return (
    <section className="relative overflow-hidden px-7 py-[130px]">
      <AmbientGlow
        className="top-[10%] left-[-18%] aspect-square w-[52vw]"
        alpha={0.16}
        intensity={0.8}
        animation="drift2 30s ease-in-out infinite"
      />

      <div className="relative mx-auto flex max-w-[1240px] flex-wrap gap-[72px]">
        <Reveal className="relative flex-[0_1_400px] min-w-[300px]">
          <AmbientGlow
            className="-inset-[46px] rounded-none"
            shape="circle at 30% 20%"
            alpha={0.2}
            intensity={0.9}
          />

          <TiltCard className="relative border border-line-strong bg-surface p-[14px]">
            <FramedImage
              src={profile.portrait}
              alt={profile.portraitAlt}
              placeholder="Portrait — cinematic orange light"
              aspect="4 / 5"
              sizes="(max-width: 768px) 100vw, 400px"
            />
            <div className="flex items-center justify-between px-1 pt-4 pb-1 text-[11px] tracking-[0.26em] text-muted">
              <span>{profile.name.toUpperCase()}</span>
              <span className="text-accent">{profile.established}</span>
            </div>
          </TiltCard>

          <CaveatNote className="mt-[18px]">{profile.portraitNote}</CaveatNote>
        </Reveal>

        <div className="flex-[1_1_460px] min-w-[320px]">
          <Reveal>
            <SectionLabel>01 — ABOUT</SectionLabel>
          </Reveal>

          <Reveal
            as="h2"
            delay={100}
            className="mt-[22px] font-display text-[clamp(36px,4.4vw,56px)] leading-[1.08] font-normal tracking-[0.02em]"
          >
            {profile.aboutHeading}
          </Reveal>

          <Reveal
            as="p"
            delay={180}
            className="mt-6 mb-10 max-w-[600px] text-[16px] leading-[1.75] text-muted text-pretty"
          >
            {profile.aboutBody}
          </Reveal>

          <Reveal delay={240}>
            <dl className="m-0">
              {resume.map((row, index) => (
                <div
                  key={row.label}
                  className={`grid grid-cols-[190px_1fr] gap-6 border-b border-line-divider py-4 max-sm:grid-cols-1 max-sm:gap-2 ${
                    index === 0 ? "border-t" : ""
                  }`}
                >
                  <dt className="self-center text-[11px] font-semibold tracking-[0.26em] text-accent">
                    {row.label}
                  </dt>
                  {/* No text-pretty here — it pulls the separator onto the
                      next line, and a row starting with "·" reads worse than
                      one ending with it. */}
                  <dd className="m-0 text-[17px]">{row.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
