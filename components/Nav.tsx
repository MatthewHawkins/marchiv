"use client";

import Link from "next/link";
import { useId, useState } from "react";
import { navLinks, routes } from "@/lib/routes";
import { Wordmark } from "./ui/Wordmark";
import styles from "./Nav.module.css";

export function Nav() {
  const [open, setOpen] = useState(false);
  const panelId = useId();

  return (
    <header>
      <nav className={styles.nav} aria-label="Primary">
        <div className={styles.group}>
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className={styles.link}>
              {link.label}
            </Link>
          ))}
        </div>

        <Link
          href={routes.home}
          className={styles.wordmarkLink}
          aria-label="Marchiv — home"
        >
          <Wordmark size={28} />
        </Link>

        <div className={`${styles.group} ${styles.end}`}>
          {/* Bilingual-ready: the toggle is inert until Czech copy lands. */}
          <span className={styles.locale}>CZ · EN</span>
          <Link href={routes.signIn} className={styles.link}>
            Sign in
          </Link>
          <Link href={routes.apply} className={`${styles.link} ${styles.apply}`}>
            Apply
          </Link>
        </div>

        <button
          type="button"
          className={styles.toggle}
          aria-expanded={open}
          aria-controls={panelId}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "Close" : "Menu"}
        </button>
      </nav>

      <div id={panelId} className={styles.panel} hidden={!open}>
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={styles.link}
            onClick={() => setOpen(false)}
          >
            {link.label}
          </Link>
        ))}
        <Link href={routes.signIn} className={styles.link}>
          Sign in
        </Link>
        <Link href={routes.apply} className={`${styles.link} ${styles.apply}`}>
          Apply
        </Link>
        <span className={styles.locale}>CZ · EN</span>
      </div>
    </header>
  );
}
