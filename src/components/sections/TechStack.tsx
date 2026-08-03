"use client";

import { useEffect, useRef, useState } from "react";
import { Chips } from "@/components/ui/Chips";
import { Gauge } from "@/components/ui/Gauge";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { skills, type Skill } from "@/data/skills";
import { cn } from "@/lib/cn";

export function TechStack() {
  const [activeId, setActiveId] = useState(skills[0].id);

  return (
    <section className="relative overflow-hidden px-7 pt-[110px] pb-[130px]">
      <div className="relative mx-auto max-w-[1240px]">
        <Reveal>
          <SectionLabel>02 — TECH STACK</SectionLabel>
        </Reveal>

        <Reveal delay={100} className="mt-5 mb-[50px] text-[15px] text-muted">
          Hover a discipline to open it.
        </Reveal>

        <div>
          {skills.map((skill, index) => (
            <SkillRow
              key={skill.id}
              skill={skill}
              active={skill.id === activeId}
              onActivate={() => setActiveId(skill.id)}
              isLast={index === skills.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

type RowProps = {
  skill: Skill;
  active: boolean;
  onActivate: () => void;
  isLast: boolean;
};

function SkillRow({ skill, active, onActivate, isLast }: RowProps) {
  const contentRef = useRef<HTMLDivElement>(null);
  const [contentHeight, setContentHeight] = useState(0);

  // max-height can only animate between two lengths, so the panel's natural
  // height has to be measured — and re-measured whenever the text rewraps.
  useEffect(() => {
    const el = contentRef.current;
    if (!el) return;

    const measure = () => setContentHeight(el.offsetHeight);
    measure();

    const observer = new ResizeObserver(measure);
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const panelId = `skill-panel-${skill.id}`;

  return (
    <div
      className={cn(
        "border-t border-line-soft pt-8 pb-2.5",
        isLast && "border-b",
      )}
      onMouseEnter={onActivate}
    >
      <button
        type="button"
        onClick={onActivate}
        aria-expanded={active}
        aria-controls={panelId}
        className="grid w-full cursor-pointer grid-cols-[70px_1fr_auto] items-baseline gap-6 text-left max-sm:grid-cols-[40px_1fr_auto] max-sm:gap-3"
      >
        <span className="text-[13px] font-semibold tracking-[0.2em] text-accent">
          {skill.index}
        </span>

        <span className="block">
          <span
            className={cn(
              "block font-display text-[clamp(30px,4vw,52px)] tracking-[0.03em] transition-colors duration-300",
              active ? "text-warm" : "text-ink",
            )}
          >
            {skill.name}
          </span>
          <Chips items={skill.chips} className="mt-3" />
        </span>

        <span
          aria-hidden
          className={cn(
            "text-[28px] leading-none transition-[transform,color] duration-[400ms]",
            active ? "rotate-45 text-warm" : "rotate-0 text-muted",
          )}
        >
          +
        </span>
      </button>

      <div
        id={panelId}
        className="ml-[94px] overflow-hidden transition-[max-height,opacity] duration-[650ms] ease-smooth max-sm:ml-0"
        style={{ maxHeight: active ? contentHeight : 0, opacity: active ? 1 : 0 }}
      >
        <div
          ref={contentRef}
          className="grid grid-cols-[minmax(240px,1.4fr)_minmax(200px,1fr)] items-start gap-10 pt-5 pb-[34px] max-lg:grid-cols-1"
        >
          <p className="m-0 text-[15px] leading-[1.75] text-muted text-pretty">
            {skill.description}
          </p>

          <div className="flex flex-wrap items-center gap-11">
            <div className="flex gap-10">
              <div>
                <div className="text-[10px] tracking-[0.26em] text-muted">
                  EXPERIENCE
                </div>
                <div className="mt-1.5 font-display text-[26px] text-warm">
                  {skill.years}
                </div>
              </div>
              <div>
                <div className="text-[10px] tracking-[0.26em] text-muted">
                  {skill.countLabel}
                </div>
                <div className="mt-1.5 font-display text-[26px] text-warm">
                  {skill.count}
                </div>
              </div>
            </div>

            <Gauge percent={skill.percent} active={active} />
          </div>
        </div>
      </div>
    </div>
  );
}
