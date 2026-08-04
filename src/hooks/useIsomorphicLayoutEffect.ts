"use client";

import { useEffect, useLayoutEffect } from "react";

/**
 * useLayoutEffect on the client, useEffect on the server.
 *
 * The hero entrance has to apply its blur before the browser paints, or the
 * sharp image flashes for a frame first. useLayoutEffect does that but warns
 * during server rendering, where layout does not exist.
 */
export const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;
