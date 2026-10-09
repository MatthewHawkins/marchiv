import { statusLabel } from "@/lib/format";
import type { BagStatus } from "@/lib/types";
import styles from "./StatusTag.module.css";

export function StatusTag({ status }: { status: BagStatus }) {
  const tone = status.kind === "inSalon" ? styles.inSalon : styles.onLoan;
  return <span className={`${styles.tag} ${tone}`}>{statusLabel(status)}</span>;
}
