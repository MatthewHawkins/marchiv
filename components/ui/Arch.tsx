import type { ComponentPropsWithoutRef, CSSProperties, ReactNode } from "react";
import styles from "./Arch.module.css";

type ArchProps = ComponentPropsWithoutRef<"div"> & {
  /**
   * width / height. Drives both the aspect ratio and the arc radius.
   * Omit it to set `--arch-ar` from `className` or an ancestor instead —
   * needed where the ratio changes across breakpoints or varies per item,
   * since inline styles cannot be overridden by a media query.
   */
  ratio?: number;
  children?: ReactNode;
};

export function Arch({
  ratio,
  children,
  className,
  style,
  ...rest
}: ArchProps) {
  const ratioVar =
    ratio === undefined
      ? undefined
      : ({ "--arch-ar": String(ratio) } as CSSProperties);

  return (
    <div
      className={className ? `${styles.arch} ${className}` : styles.arch}
      style={{ ...style, ...ratioVar }}
      {...rest}
    >
      {children}
    </div>
  );
}
