import { archiveSize, featuredBags } from "@/lib/archive";
import { routes } from "@/lib/routes";
import { ArchiveCard } from "./ArchiveCard";
import { Kicker } from "./ui/Kicker";
import { TextLink } from "./ui/TextLink";
import styles from "./Archive.module.css";

export function Archive() {
  return (
    <section className={styles.section} aria-labelledby="from-the-archive">
      <div className={styles.inner}>
        <div className={styles.header}>
          <div className={styles.heading}>
            <Kicker className={styles.kicker}>From the archive</Kicker>
            <h2 id="from-the-archive" className={styles.title}>
              On the shelves this week
            </h2>
          </div>
          <TextLink href={routes.archive}>
            See all {archiveSize} pieces →
          </TextLink>
        </div>

        <div className={styles.grid}>
          {featuredBags.map((bag) => (
            <ArchiveCard key={bag.ref} bag={bag} />
          ))}
        </div>
      </div>
    </section>
  );
}
