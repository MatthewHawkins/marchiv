import type { ReactNode } from "react";

/**
 * One line of a headline, in its own mask.
 *
 * The mask is structural — defined in `app/motion.css` and present whether
 * or not anything animates — so disabling motion changes the timing, never
 * the setting. Put each line in its own `<Line>` rather than separating
 * them with `<br>`; the mask needs a box to clip against.
 *
 * The parent carries `data-reveal="lines"` (scroll-driven) or
 * `data-reveal="lines-load"` (timed, for anything above the fold).
 */
export function Line({ children }: { children: ReactNode }) {
  return (
    <span className="line">
      <span className="lineInner">{children}</span>
    </span>
  );
}
