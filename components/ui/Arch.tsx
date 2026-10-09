import type { CSSProperties, ReactNode } from "react";
import styles from "./Arch.module.css";

type ArchProps = {
  /**
   * width / height. Drives both the aspect ratio and the arc radius.
   * Omit it to set `--arch-ar` from `className` instead — needed where the
   * ratio changes across breakpoints, since inline styles cannot be
   * overridden by a media query.
   */
  ratio?: number;
  children?: ReactNode;
  className?: string;
  style?: CSSProperties;
};

export function Arch({ ratio, children, className, style }: ArchProps) {
  const ratioVar =
    ratio === undefined ? undefined : ({ "--arch-ar": String(ratio) } as CSSProperties);

  return (
    <div
      className={className ? `${styles.arch} ${className}` : styles.arch}
      style={{ ...style, ...ratioVar }}
    >
      {children}
    </div>
  );
}
