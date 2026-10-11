import Image from "next/image";
import { asset } from "@/lib/asset";
import { Arch } from "./ui/Arch";
import { Kicker } from "./ui/Kicker";
import styles from "./Steps.module.css";

const steps = [
  {
    numeral: "I.",
    title: "Choose from the archive",
    body: "Browse online or with a curator in the salon. Every piece carries its own provenance file.",
  },
  {
    numeral: "II.",
    title: "Carry it for the season",
    body: "Keep it a month or a year. Care and cover are included; scuffs are our concern.",
  },
  {
    numeral: "III.",
    title: "Return, exchange, or keep",
    body: "Swap whenever you like. Fall for it, and your fees count toward owning it.",
  },
];

/**
 * Three equal columns of numeral-title-body is the most template-shaped
 * pattern there is. Instead the room is held still on one side while the
 * three steps pass it — the reader stands in the salon for the length of
 * the explanation rather than scrolling past three boxes.
 *
 * Pure `position: sticky`; no scroll library, and it degrades to a plain
 * stacked sequence below the breakpoint and in any browser without it.
 */
export function Steps() {
  return (
    <section className={styles.section} aria-labelledby="how-it-works">
      <div className={styles.inner}>
        <div className={styles.figure}>
          <Arch className={styles.arch}>
            <Image
              src={asset("/images/vault.jpg")}
              alt="The vaulted room where the archive is kept"
              fill
              sizes="(max-width: 899px) 100vw, 520px"
              className={styles.image}
            />
          </Arch>
          <Kicker className={styles.figureCaption}>
            Mostecká · the vaulted room
          </Kicker>
        </div>

        <div className={styles.sequence}>
          <h2 id="how-it-works" className={styles.heading}>
            How a loan works
          </h2>

          <ol className={styles.steps}>
            {steps.map((step) => (
              <li key={step.numeral} className={styles.step} data-rule="">
                <span className={styles.numeral} aria-hidden="true">
                  {step.numeral}
                </span>
                <h3 className={styles.title}>{step.title}</h3>
                <p className={styles.body}>{step.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
