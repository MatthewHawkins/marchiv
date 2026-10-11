import Image from "next/image";
import type { CSSProperties } from "react";
import { asset } from "@/lib/asset";
import { routes } from "@/lib/routes";
import { Arch } from "./ui/Arch";
import { Button } from "./ui/Button";
import { Kicker } from "./ui/Kicker";
import { Line } from "./ui/Line";
import styles from "./Hero.module.css";

/**
 * The statement sits inside the arch on the designed layout. Below 768px it
 * moves out onto plaster: a 12px tracked label in cream cannot clear 1.4:1
 * against the bright vault once the arch is narrow enough to push the copy
 * up into it, and no scrim heavy enough to fix that leaves the photograph
 * worth showing.
 */
export function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.frame}>
        <Arch className={styles.arch} data-parallax="">
          <Image
            src={asset("/images/salon-garden.jpg")}
            alt="The Marchiv garden salon, looking through ivy to the shelves"
            fill
            priority
            sizes="(max-width: 1440px) 100vw, 1296px"
            className={styles.image}
          />
          <div className={styles.scrim} />
        </Arch>

        <div className={styles.content}>
          <div className={styles.statement}>
            <Kicker className={styles.kicker} data-reveal="load">
              A lending house · Praha 1
            </Kicker>
            <h1 className={styles.headline} data-reveal="lines-load">
              <Line>Borrowed,</Line>
              <Line>
                <em>beautifully.</em>
              </Line>
            </h1>
          </div>

          <div className={styles.aside}>
            <p className={styles.lede} data-reveal="load" style={{ "--load-delay": "420ms" } as CSSProperties}>
              Authenticated Hermès, Chanel and Dior, lent by the month from a
              vaulted salon in Prague — and sent across Europe in linen.
            </p>
            <div
              className={styles.actions}
              data-reveal="load"
              style={{ "--load-delay": "560ms" } as CSSProperties}
            >
              <Button
                href={routes.apply}
                variant="onDarkPrimary"
                className={styles.actionPrimary}
              >
                Apply for membership
              </Button>
              <Button
                href={routes.visit}
                variant="onDarkSecondary"
                className={styles.actionSecondary}
              >
                Book a visit
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
