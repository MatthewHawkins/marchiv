import type { Metadata } from "next";
import Image from "next/image";
import { Nav } from "@/components/Nav";
import { SiteFooter } from "@/components/SiteFooter";
import { Arch } from "@/components/ui/Arch";
import { Button } from "@/components/ui/Button";
import { Kicker } from "@/components/ui/Kicker";
import { asset } from "@/lib/asset";
import { formatEur, tierLabel } from "@/lib/format";
import {
  alwaysIncluded,
  comparisonRows,
  memberships,
  questions,
} from "@/lib/memberships";
import { routes } from "@/lib/routes";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Membership",
  description:
    "Three keys to one archive. Salon, Galerie and Trezor — monthly membership of a lending house in Malá Strana, by application.",
};

const perMonth = (amount: number) => `${formatEur(amount)} / mo`;

export default function MembershipPage() {
  return (
    <>
      <Nav />

      <main>
        <section className={styles.band}>
          <div className={styles.inner}>
            <div className={styles.intro}>
              <Kicker className={styles.kicker}>Membership</Kicker>
              <h1 className={styles.headline}>
                Three keys to
                <br />
                <em>the same archive.</em>
              </h1>
              <p className={styles.lede}>
                Every tier draws on one archive and one standard of care. What
                changes is how much of the house opens to you — and how often
                you may change your mind.
              </p>
            </div>
          </div>
        </section>

        {/* Each tier is named for a room, so each is shown as that room. */}
        <section
          className={`${styles.band} ${styles.ruled}`}
          aria-labelledby="closets"
        >
          <div className={styles.inner}>
            <div className={styles.sectionHead}>
              <h2 id="closets" className={styles.sectionTitle}>
                The three closets
              </h2>
              <p className={styles.sectionNote}>
                Each takes its name from a room in the house on Mostecká.
              </p>
            </div>

            <div className={styles.closets}>
              {memberships.map((m, i) => (
                <article key={m.tier} className={styles.closet}>
                  <Arch className={styles.closetArch}>
                    <Image
                      src={asset(m.image.src)}
                      alt={m.image.alt}
                      fill
                      priority={i === 0}
                      sizes="(max-width: 899px) 100vw, 400px"
                      style={{ objectPosition: m.image.position }}
                      className={styles.closetImage}
                    />
                  </Arch>
                  <h3 className={styles.closetName}>{tierLabel(m.tier)}</h3>
                  <p className={styles.closetDescriptor}>{m.descriptor}</p>
                  <p className={styles.closetAllowance}>{m.allowance}</p>
                  <p className={styles.closetPrice}>
                    {perMonth(m.priceEurMonthly)}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          className={`${styles.band} ${styles.cream}`}
          aria-labelledby="comparison"
        >
          <div className={styles.inner}>
            <div className={styles.sectionHead}>
              <h2 id="comparison" className={styles.sectionTitle}>
                Side by side
              </h2>
              <p className={styles.sectionNote}>
                The same pieces, the same care. The difference is reach.
              </p>
            </div>

            <div className={styles.tableWrap}>
              <table className={styles.table}>
                <thead>
                  <tr>
                    <th scope="col">Tier</th>
                    {memberships.map((m) => (
                      <th key={m.tier} scope="col">
                        {tierLabel(m.tier)}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {comparisonRows.map((row) => (
                    <tr key={row.key}>
                      <th scope="row">{row.label}</th>
                      {memberships.map((m) => (
                        <td key={m.tier}>{m.terms[row.key]}</td>
                      ))}
                    </tr>
                  ))}
                  <tr className={styles.priceRow}>
                    <th scope="row">Monthly</th>
                    {memberships.map((m) => (
                      <td key={m.tier}>{perMonth(m.priceEurMonthly)}</td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>

            <p className={styles.footnote}>
              Three-month minimum, then month to month with thirty days&rsquo;
              notice. Prices shown include Czech VAT at 21%.
            </p>
          </div>
        </section>

        <section className={styles.quote}>
          <Image
            src={asset("/images/facade-stucco.jpg")}
            alt=""
            aria-hidden="true"
            fill
            sizes="100vw"
            className={styles.quoteImage}
          />
          <div className={styles.quoteScrim} />
          <div className={`${styles.inner} ${styles.quoteInner}`}>
            <Kicker className={styles.quoteKicker}>The house</Kicker>
            <p className={styles.quoteText}>
              Everything here is for carrying. Some of it, eventually, is for
              keeping.
            </p>
          </div>
        </section>

        <section className={styles.band} aria-labelledby="included">
          <div className={styles.inner}>
            <div className={styles.sectionHead}>
              <h2 id="included" className={styles.sectionTitle}>
                In every membership
              </h2>
              <p className={styles.sectionNote}>
                Whichever closet you take, these are not extras and they are not
                priced separately.
              </p>
            </div>

            <div className={styles.included}>
              {alwaysIncluded.map((item) => (
                <div key={item.title} className={styles.includedItem}>
                  <h3 className={styles.includedTitle}>{item.title}</h3>
                  <p className={styles.includedBody}>{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          className={`${styles.band} ${styles.ruled}`}
          aria-labelledby="questions"
        >
          <div className={styles.inner}>
            <div className={styles.sectionHead}>
              <h2 id="questions" className={styles.sectionTitle}>
                Questions we are asked
              </h2>
            </div>

            <div className={styles.questions}>
              {questions.map((item) => (
                <div key={item.q} className={styles.question}>
                  <h3 className={styles.questionTitle}>{item.q}</h3>
                  <p className={styles.questionBody}>{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.invitation} aria-labelledby="apply">
          <div className={styles.invitationInner}>
            <div className={styles.invitationCopy}>
              <Kicker className={styles.invitationKicker}>
                By application · Praha 1
              </Kicker>
              <h2 id="apply" className={styles.invitationHeadline}>
                Tell us what you
                <br />
                <em>like to carry.</em>
              </h2>
              <p className={styles.invitationBody}>
                We read every application ourselves and reply within a few days.
                If you would rather see the archive first, the door on Mostecká
                is open Tuesday to Saturday.
              </p>
              <div className={styles.invitationActions}>
                <Button href={routes.apply} variant="onDarkPrimary">
                  Apply for membership
                </Button>
                <Button href={routes.visit} variant="onDarkSecondary">
                  Book a visit
                </Button>
              </div>
            </div>

            <div className={styles.invitationFigure}>
              <Arch className={styles.invitationArch}>
                <Image
                  src={asset("/images/facade-cream.jpg")}
                  alt="The house on Mostecká, seen from the street"
                  fill
                  sizes="(max-width: 1023px) 440px, 440px"
                  className={styles.invitationImage}
                />
              </Arch>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
