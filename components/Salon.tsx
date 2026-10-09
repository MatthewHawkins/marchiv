import Image from "next/image";
import { asset } from "@/lib/asset";
import { routes } from "@/lib/routes";
import { Arch } from "./ui/Arch";
import { Kicker } from "./ui/Kicker";
import { TextLink } from "./ui/TextLink";
import styles from "./Salon.module.css";

export function Salon() {
  return (
    <section className={styles.section} aria-labelledby="the-salon">
      <div className={styles.inner}>
        <div className={styles.copy}>
          <Kicker className={styles.kicker}>The salon · Malá Strana</Kicker>
          <h2 id="the-salon" className={styles.headline}>
            The door is open.
            <br />
            <em>Come under the vault.</em>
          </h2>
          <p className={styles.body}>
            Visits by appointment, Tuesday to Saturday. A glass of something, a
            curator, and an hour among the shelves and the ivy.
          </p>
          <div className={styles.links}>
            <TextLink href={routes.visit} on="green">
              Reserve an hour →
            </TextLink>
            <TextLink href={routes.findTheDoor} on="green">
              Find the door →
            </TextLink>
          </div>
        </div>

        <div className={styles.figure}>
          <Arch className={styles.arch}>
            <Image
              src={asset("/images/arch-door.jpg")}
              alt="The salon's arched door, standing open to the street"
              fill
              sizes="(max-width: 1023px) 100vw, 528px"
              className={styles.image}
            />
          </Arch>
        </div>
      </div>
    </section>
  );
}
