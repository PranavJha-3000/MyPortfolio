/**
 * Atmosphere settings, carried over from the design prototype's tweak panel.
 * These were live-editable knobs in the prototype; here they are build-time
 * constants. Flip them to strip an effect out entirely.
 */
export const atmosphere = {
  /** 560px radial glow that lerp-follows the cursor. Desktop only. */
  mouseGlow: true,
  /** Fixed full-screen feTurbulence noise tile at 5% opacity. */
  filmGrain: true,
  /** 0–100. Scales every ambient glow's own opacity factor. */
  glowIntensity: 70,
} as const;

/** Multiplier applied to each ambient glow's local intensity. */
export const glowScale = atmosphere.glowIntensity / 100;

export const site = {
  name: "Pranav Jha",
  title: "Pranav Jha — Applied AI Engineer & Full Stack Developer",
  description:
    "Applied AI Engineer and 0→1 builder. Web applications, premium interfaces and AI features engineered past the demo, into production.",
  url: "https://pranavjha.in",
} as const;
