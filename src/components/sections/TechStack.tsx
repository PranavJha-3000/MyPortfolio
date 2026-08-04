"use client";

import { useEffect, useRef, useState } from "react";
import { Chips } from "@/components/ui/Chips";
import { Gauge } from "@/components/ui/Gauge";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { useIsTouch } from "@/hooks/useIsTouch";
import { skills, type Skill } from "@/data/skills";
import { cn } from "@/lib/cn";

export function TechStack() {
  // A row is open only while the cursor rests on it, so nothing is open on
  // load and nothing stays open once the cursor leaves the list.
  const [activeId, setActiveId] = useState<string | null>(null);

  const open = (id: string) => setActiveId(id);

  // Guarded on identity: mouseleave for one row can arrive after mouseenter
  // for the next, and an unconditional close would shut the row just opened.
  const close = (id: string) =>
    setActiveId((current) => (current === id ? null : current));

  const toggle = (id: string) =>
    setActiveId((current) => (current === id ? null : id));

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
              onOpen={() => open(skill.id)}
              onClose={() => close(skill.id)}
              onToggle={() => toggle(skill.id)}
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
  onOpen: () => void;
  onClose: () => void;
  onToggle: () => void;
  isLast: boolean;
};

function SkillRow({
  skill,
  active,
  onOpen,
  onClose,
  onToggle,
  isLast,
}: RowProps) {
  const isTouch = useIsTouch();
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
      onMouseEnter={isTouch ? undefined : onOpen}
      onMouseLeave={isTouch ? undefined : onClose}
    >
      <button
        type="button"
        // A pointer has hover; a keyboard and a finger do not. Focus stands in
        // for hover on the keyboard, tap stands in for it on a touchscreen.
        //
        // Strictly one or the other, never both: a tap fires focus *and*
        // click, so wiring both would open the row and immediately toggle it
        // shut, making the first tap on a touchscreen appear to do nothing.
        onFocus={isTouch ? undefined : onOpen}
        onBlur={isTouch ? undefined : onClose}
        onClick={isTouch ? onToggle : undefined}
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
            // rotate-45 sets the `rotate` property in Tailwind v4, so it has
            // to be named here or the icon snaps instead of turning.
            "text-[28px] leading-none transition-[transform,rotate,color] duration-[400ms]",
            active ? "rotate-45 text-warm" : "rotate-0 text-muted",
          )}
        >
          +
        </span>
      </button>

      <div
        id={panelId}
        className="ml-[94px] overflow-hidden max-sm:ml-0"
        style={{
          maxHeight: active ? contentHeight : 0,
          opacity: active ? 1 : 0,
          // The panel's height and its fade run on separate clocks: the box
          // finishes opening after the content has already faded in.
          transition:
            "max-height 0.65s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.5s ease",
        }}
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
