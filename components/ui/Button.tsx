import Link from "next/link";
import type { ReactNode } from "react";
import styles from "./Button.module.css";

export type ButtonVariant =
  | "primary"
  | "secondary"
  | "onDarkPrimary"
  | "onDarkSecondary";

type ButtonProps = {
  href: string;
  variant?: ButtonVariant;
  /** Lets a section re-tone the button when its field changes responsively. */
  className?: string;
  children: ReactNode;
};

/** Every button in the design is a link. Square corners, tracked caps. */
export function Button({
  href,
  variant = "primary",
  className,
  children,
}: ButtonProps) {
  const classes = [styles.button, styles[variant], className]
    .filter(Boolean)
    .join(" ");
  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
