import Link from "next/link";
import type { ReactNode } from "react";
import styles from "./TextLink.module.css";

type TextLinkProps = {
  href: string;
  /** Which field the link sits on — drives the hover colour. */
  on?: "plaster" | "green";
  children: ReactNode;
};

export function TextLink({ href, on = "plaster", children }: TextLinkProps) {
  const tone = on === "green" ? styles.onGreen : styles.onPlaster;
  return (
    <Link href={href} className={`${styles.link} ${tone}`}>
      {children}
    </Link>
  );
}
