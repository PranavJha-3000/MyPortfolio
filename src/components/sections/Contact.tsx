"use client";

import { useState, type FormEvent } from "react";
import { AmbientGlow } from "@/components/fx/AmbientGlow";
import { LaserLine } from "@/components/fx/LaserLine";
import { CaveatNote } from "@/components/ui/CaveatNote";
import { MaskedLine } from "@/components/ui/MaskedLine";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { useCursorEffects } from "@/hooks/useCursorEffects";
import { useMagnetic } from "@/hooks/useMagnetic";
import { contactLinks, email, resumeUrl } from "@/data/links";
import { profile } from "@/data/profile";

const HEADLINE = "font-display text-[clamp(54px,10vw,150px)] tracking-[0.02em]";

export function Contact() {
  const [name, setName] = useState("");
  const [from, setFrom] = useState("");
  const [message, setMessage] = useState("");

  const cursorEffects = useCursorEffects();
  const submitRef = useMagnetic<HTMLButtonElement>(cursorEffects);

  /**
   * Hands off to the visitor's mail client. There is no server to post to, and
   * a mailto keeps the message in their sent folder — which is where anyone
   * chasing a reply will look for it.
   */
  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const subject = `Project inquiry — ${name || "Portfolio"}`;
    const body = `${message}\n\n—\n${name}\n${from}`;

    window.location.href = `mailto:${email}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden px-7 pt-[150px] pb-[120px]"
    >
      <AmbientGlow
        className="top-[-18%] left-[24%] aspect-square w-[56vw]"
        alpha={0.2}
        intensity={1}
        animation="drift1 28s ease-in-out infinite"
      />
      <LaserLine className="top-[14%]" rotate={2.5} opacity={0.35} />

      <div className="relative mx-auto max-w-[1240px]">
        <Reveal>
          <SectionLabel>05 — CONTACT</SectionLabel>
        </Reveal>

        <h2 className="mt-[30px]">
          <MaskedLine className={`${HEADLINE} outline-type-strong leading-none`}>
            LET&apos;S BUILD
          </MaskedLine>
          <MaskedLine delay={140} className={`${HEADLINE} leading-[1.05] text-ink`}>
            SOMETHING<span className="text-accent">.</span>
          </MaskedLine>
        </h2>

        <Reveal delay={150} className="mt-[22px]">
          <CaveatNote rotate={-1.5} className="text-[23px]">
            — I usually reply within 24 hours
          </CaveatNote>
        </Reveal>

        <div className="mt-[60px] flex flex-wrap gap-16">
          <Reveal
            as="div"
            className="flex-[1.2_1_440px] min-w-[300px]"
          >
            <form onSubmit={onSubmit} className="flex flex-col gap-3.5">
              <div className="flex flex-wrap gap-3.5">
                <label className="flex-[1_1_200px]">
                  <span className="sr-only">Your name</span>
                  <input
                    type="text"
                    placeholder="Your name"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    className="field w-full"
                    required
                  />
                </label>
                <label className="flex-[1_1_200px]">
                  <span className="sr-only">Email</span>
                  <input
                    type="email"
                    placeholder="Email"
                    value={from}
                    onChange={(event) => setFrom(event.target.value)}
                    className="field w-full"
                    required
                  />
                </label>
              </div>

              <label>
                <span className="sr-only">Message</span>
                <textarea
                  rows={6}
                  placeholder="Tell me about the project — problem, timeline, budget"
                  value={message}
                  onChange={(event) => setMessage(event.target.value)}
                  className="field w-full resize-y"
                  required
                />
              </label>

              <button
                ref={submitRef}
                type="submit"
                className="btn btn-filled mt-2.5 self-start border-none px-[46px] py-5 tracking-[0.24em] will-change-transform"
              >
                SEND MESSAGE
              </button>
            </form>
          </Reveal>

          <Reveal delay={120} className="flex-[1_1_320px] min-w-[280px]">
            {contactLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                {...(link.external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : null)}
                className="flex items-center justify-between gap-4 border-b border-line px-0.5 py-5"
              >
                <span>
                  <span className="block text-[10px] tracking-[0.26em] text-muted">
                    {link.label}
                  </span>
                  <span className="mt-1.5 block text-[16px]">{link.value}</span>
                </span>
                <span aria-hidden className="text-warm">
                  ↗
                </span>
              </a>
            ))}

            {resumeUrl ? (
              <a
                href={resumeUrl}
                className="btn btn-outline mt-7 block w-full py-[18px] px-[26px] tracking-[0.24em]"
                download
              >
                DOWNLOAD RESUME
              </a>
            ) : (
              <span
                className="btn btn-outline mt-7 block w-full py-[18px] px-[26px] tracking-[0.24em]"
                aria-disabled="true"
                title={`Resume on request — email ${email}`}
              >
                DOWNLOAD RESUME
              </span>
            )}
          </Reveal>
        </div>
      </div>

      <span className="sr-only">{profile.name}</span>
    </section>
  );
}
