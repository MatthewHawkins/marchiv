import type { CSSProperties } from "react";
import styles from "./Wordmark.module.css";

type WordmarkProps = {
  /** Rendered size, in px, per the handoff: 28 in the nav, 20 in the footer. */
  size?: number;
  className?: string;
};

/**
 * Logo lockup 1 — the Didone wordmark. The brand board carries three further
 * studies (vault monogram, italic signature, archive seal); one should be
 * chosen and refined before signage or print.
 */
export function Wordmark({ size = 28, className }: WordmarkProps) {
  return (
    <span
      className={className ? `${styles.wordmark} ${className}` : styles.wordmark}
      style={{ "--wordmark-size": `${size / 16}rem` } as CSSProperties}
    >
      Marchiv
    </span>
  );
}
