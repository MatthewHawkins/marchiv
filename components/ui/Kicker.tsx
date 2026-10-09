import type { ReactNode } from "react";
import styles from "./Kicker.module.css";

type KickerProps = {
  children: ReactNode;
  /** Section-supplied colour class. */
  className?: string;
};

export function Kicker({ children, className }: KickerProps) {
  return (
    <p className={className ? `${styles.kicker} ${className}` : styles.kicker}>
      {children}
    </p>
  );
}
