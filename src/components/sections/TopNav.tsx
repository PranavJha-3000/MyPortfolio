"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/cn";
import { navLinks } from "@/data/links";
import { profile } from "@/data/profile";

/**
 * Hidden while the hero artwork is on screen — it carries its own nav — then
 * drops in once the page has scrolled past it.
 *
 * Below `md` the five links do not fit beside the wordmark and the CTA, so they
 * collapse into a panel. The hero's painted nav is long gone by then, and
 * without this there would be no way to reach a section on a phone.
 */
export function TopNav() {
  const [visible, setVisible] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const hero = document.getElementById("top");

    const onScroll = () => {
      const threshold = (hero?.offsetHeight ?? 600) - 90;
      setVisible(window.scrollY > threshold);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    onScroll();

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  // A menu left open while the bar retracts would float over the hero.
  useEffect(() => {
    if (!visible) setMenuOpen(false);
  }, [visible]);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  return (
    <div
      className={cn(
        "fixed inset-x-0 top-0 z-[90] border-b border-white/6 backdrop-blur-[14px] transition-transform duration-500 ease-smooth",
        visible ? "translate-y-0" : "-translate-y-full",
      )}
      style={{ background: "rgba(9,9,9,0.86)" }}
      aria-hidden={!visible}
      inert={!visible}
    >
      <div className="flex items-center justify-between gap-6 px-7 py-[13px]">
        <a
          href="#top"
          className="flex items-center gap-2.5 text-[12px] font-bold tracking-[0.28em]"
        >
          <span aria-hidden className="inline-block h-[9px] w-[9px] bg-accent" />
          {profile.name.toUpperCase()}
        </a>

        <nav aria-label="Sections" className="hidden gap-7 overflow-hidden md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[11px] font-medium tracking-[0.2em] text-muted"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <a
            href="#contact"
            className="border border-accent/60 px-[18px] py-[9px] text-[11px] font-semibold tracking-[0.2em] text-ink transition-colors duration-300 hover:bg-accent hover:text-ink"
          >
            LET&apos;S TALK
          </a>

          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            className="flex h-11 w-8 cursor-pointer flex-col items-end justify-center gap-[5px] md:hidden"
          >
            <span
              aria-hidden
              className={cn(
                "block h-px w-6 bg-ink transition-transform duration-300 ease-smooth",
                menuOpen && "translate-y-[3px] rotate-45",
              )}
            />
            <span
              aria-hidden
              className={cn(
                "block h-px w-6 bg-ink transition-transform duration-300 ease-smooth",
                menuOpen && "-translate-y-[3px] -rotate-45",
              )}
            />
          </button>
        </div>
      </div>

      <nav
        id="mobile-nav"
        aria-label="Sections"
        className={cn(
          "overflow-hidden transition-[max-height,opacity] duration-500 ease-smooth md:hidden",
          menuOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0",
        )}
      >
        <ul className="m-0 list-none border-t border-line-faint p-0">
          {navLinks.map((link) => (
            <li key={link.href} className="border-b border-line-faint last:border-b-0">
              <a
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="flex min-h-[52px] items-center gap-3 px-7 text-[12px] font-semibold tracking-[0.28em] text-muted"
              >
                <span aria-hidden className="inline-block h-[7px] w-[7px] bg-accent" />
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
