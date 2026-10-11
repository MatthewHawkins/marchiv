import type { ComponentPropsWithoutRef } from "react";
import styles from "./Kicker.module.css";

/** Tracked uppercase label. Colour comes from the consuming section. */
export function Kicker({
  children,
  className,
  ...rest
}: ComponentPropsWithoutRef<"p">) {
  return (
    <p
      className={className ? `${styles.kicker} ${className}` : styles.kicker}
      {...rest}
    >
      {children}
    </p>
  );
}
