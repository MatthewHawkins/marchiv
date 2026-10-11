import type { Metadata } from "next";
import { ArchiveBrowser } from "@/components/archive/ArchiveBrowser";
import { Nav } from "@/components/Nav";
import { SiteFooter } from "@/components/SiteFooter";
import { Kicker } from "@/components/ui/Kicker";
import { Line } from "@/components/ui/Line";
import { archive, archiveSize } from "@/lib/archive";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "The Archive",
  description:
    "Every piece in the house, authenticated and catalogued. Browse the vitrine, or read the index.",
};

export default function ArchivePage() {
  return (
    <>
      <Nav />

      <main className={styles.main}>
        <div className={styles.intro}>
          <Kicker className={styles.kicker}>
            The archive · {archiveSize} pieces
          </Kicker>
          <h1 className={styles.headline} data-reveal="lines-load">
            <Line>Every piece,</Line>
            <Line>
              <em>accounted for.</em>
            </Line>
          </h1>
          <p className={styles.lede}>
            Authenticated before it reaches the shelves, photographed on the
            day it arrives, and entered in the register with its provenance.
            Look at it as a visitor would, or read it the way the house keeps
            it.
          </p>
        </div>

        <ArchiveBrowser bags={archive} />
      </main>

      <SiteFooter />
    </>
  );
}
