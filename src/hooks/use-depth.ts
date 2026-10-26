import { useCallback, useRef, type PointerEvent } from "react";

/** True only for mouse/trackpad devices without a reduced-motion preference. */
function motionAllowed() {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(hover: hover) and (pointer: fine)").matches && !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

/**
 * Writes pointer-relative CSS variables on the target element, throttled to one
 * update per animation frame. Returns handlers to spread on the element.
 * `vars(x, y)` receives normalized -0.5..0.5 offsets and returns the CSS vars.
 */
function usePointerVars(vars: (x: number, y: number) => Record<string, string>) {
  const frame = useRef(0);
  const set = (el: HTMLElement, v: Record<string, string>) => {
    cancelAnimationFrame(frame.current);
    frame.current = requestAnimationFrame(() => {
      for (const k in v) el.style.setProperty(k, v[k]!);
    });
  };
  const onPointerMove = useCallback((e: PointerEvent<HTMLElement>) => {
    if (e.pointerType !== "mouse" || !motionAllowed()) return;
    const el = e.currentTarget;
    const r = el.getBoundingClientRect();
    set(el, vars((e.clientX - r.left) / r.width - 0.5, (e.clientY - r.top) / r.height - 0.5));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const onPointerLeave = useCallback((e: PointerEvent<HTMLElement>) => {
    const el = e.currentTarget;
    set(el, Object.fromEntries(Object.keys(vars(0, 0)).map((k) => [k, k.startsWith("--tilt") ? "0deg" : "0px"])));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return { onPointerMove, onPointerLeave };
}

/** Restrained perspective tilt (max ~3deg) for cards; pair with the `depth-card` class. */
export function useTilt() {
  return usePointerVars((x, y) => ({ "--tilt-x": `${(-y * 5).toFixed(2)}deg`, "--tilt-y": `${(x * 5).toFixed(2)}deg` }));
}

/** Small hero parallax (max ~10px); pair with `hero-parallax` / `hero-parallax-fg` children. */
export function useParallax() {
  return usePointerVars((x, y) => ({ "--px": `${(x * -20).toFixed(1)}px`, "--py": `${(y * -12).toFixed(1)}px` }));
}
