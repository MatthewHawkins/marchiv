import Image from "next/image";
import { asset } from "@/lib/asset";
import { bagMeta, bagRef } from "@/lib/format";
import type { Bag } from "@/lib/types";
import { Arch } from "./ui/Arch";
import { StatusTag } from "./ui/StatusTag";
import styles from "./ArchiveCard.module.css";

type ArchiveCardProps = {
  bag: Bag;
  /** Cards above the fold on listing pages can opt into eager loading. */
  priority?: boolean;
};

export function ArchiveCard({ bag, priority = false }: ArchiveCardProps) {
  return (
    <article className={styles.card}>
      <Arch className={styles.frame} data-reveal="arch">
        <Image
          src={asset(bag.image.src)}
          alt={bag.image.alt}
          fill
          priority={priority}
          sizes="(max-width: 599px) 100vw, (max-width: 1023px) 50vw, 324px"
          style={{ objectPosition: bag.image.position }}
          className={styles.image}
        />
      </Arch>

      <div className={styles.meta}>
        <span className={styles.ref}>{bagRef(bag)}</span>
        <StatusTag status={bag.status} />
      </div>

      <h3 className={styles.name}>{bag.name}</h3>
      <p className={styles.detail}>{bagMeta(bag)}</p>
    </article>
  );
}
