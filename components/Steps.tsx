import { Arch } from "./ui/Arch";
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

export function Steps() {
  return (
    <section className={styles.section} aria-labelledby="how-it-works">
      <h2 id="how-it-works" className="srOnly">
        How lending works
      </h2>
      <div className={styles.steps}>
        {steps.map((step) => (
        <div key={step.numeral} className={styles.step}>
          <Arch className={styles.niche} data-reveal="arch">
            <span className={styles.numeral} aria-hidden="true">
              {step.numeral}
            </span>
          </Arch>
          <h3 className={styles.title}>{step.title}</h3>
          <p className={styles.body}>{step.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
