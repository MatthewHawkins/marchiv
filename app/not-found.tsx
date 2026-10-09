import { Nav } from "@/components/Nav";
import { SiteFooter } from "@/components/SiteFooter";
import { Kicker } from "@/components/ui/Kicker";
import { TextLink } from "@/components/ui/TextLink";
import { routes } from "@/lib/routes";
import styles from "./not-found.module.css";

export const metadata = { title: "Not on the shelves" };

export default function NotFound() {
  return (
    <>
      <Nav />
      <main className={styles.page}>
        <Kicker className={styles.kicker}>Praha 1</Kicker>
        <h1 className={styles.headline}>
          Not on the shelves.
          <br />
          <em>Not yet, at least.</em>
        </h1>
        <p className={styles.body}>
          This part of the house is still being furnished. Come back to the
          front door and we will show you what is ready.
        </p>
        <TextLink href={routes.home}>Return to the archive →</TextLink>
      </main>
      <SiteFooter />
    </>
  );
}
