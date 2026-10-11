"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { ArchiveCard } from "@/components/ArchiveCard";
import { Arch } from "@/components/ui/Arch";
import { asset } from "@/lib/asset";
import { bagRef, formatEur, statusLabel, tierLabel } from "@/lib/format";
import type { Bag, Tier } from "@/lib/types";
import styles from "./ArchiveBrowser.module.css";

type View = "vitrine" | "index";
type Closet = Tier | "all";

const CLOSETS: { value: Closet; label: string }[] = [
  { value: "all", label: "Every closet" },
  { value: "salon", label: "Salon" },
  { value: "galerie", label: "Galerie" },
  { value: "trezor", label: "Trezor" },
];

/**
 * An archive has two natural ways of being looked at, and the house keeps
 * both: the VITRINE, how a visitor browses, and the INDEX, how the archive
 * is actually catalogued — a register you scan, with the piece appearing
 * beside the line your eye is on.
 */
export function ArchiveBrowser({ bags }: { bags: Bag[] }) {
  const [view, setView] = useState<View>("vitrine");
  const [closet, setCloset] = useState<Closet>("all");
  const [house, setHouse] = useState<string>("all");
  const [salonOnly, setSalonOnly] = useState(false);
  const [reading, setReading] = useState<string | null>(null);

  const houses = useMemo(
    () => [...new Set(bags.map((b) => b.house))].sort((a, b) => a.localeCompare(b)),
    [bags],
  );

  const shown = useMemo(
    () =>
      bags.filter(
        (b) =>
          (closet === "all" || b.tier === closet) &&
          (house === "all" || b.house === house) &&
          (!salonOnly || b.status.kind === "inSalon"),
      ),
    [bags, closet, house, salonOnly],
  );

  const filtered = closet !== "all" || house !== "all" || salonOnly;
  const reset = () => {
    setCloset("all");
    setHouse("all");
    setSalonOnly(false);
  };

  // With nothing under the cursor the register still shows something, so the
  // panel is never an empty hole.
  const preview = shown.find((b) => b.ref === reading) ?? shown[0];

  return (
    <>
      <div className={styles.controls} data-rule="">
        <div className={styles.filters}>
          <Filter label="Closet">
            {CLOSETS.map((c) => (
              <Choice
                key={c.value}
                active={closet === c.value}
                onSelect={() => setCloset(c.value)}
              >
                {c.label}
              </Choice>
            ))}
          </Filter>

          <Filter label="House">
            <Choice active={house === "all"} onSelect={() => setHouse("all")}>
              Every house
            </Choice>
            {houses.map((h) => (
              <Choice
                key={h}
                active={house === h}
                onSelect={() => setHouse(h)}
              >
                {h}
              </Choice>
            ))}
          </Filter>

          <Filter label="On the shelves">
            <Choice active={!salonOnly} onSelect={() => setSalonOnly(false)}>
              Show everything
            </Choice>
            <Choice active={salonOnly} onSelect={() => setSalonOnly(true)}>
              In the salon only
            </Choice>
          </Filter>
        </div>

        <div className={styles.meta}>
          <p className={styles.count} aria-live="polite">
            {shown.length} {shown.length === 1 ? "piece" : "pieces"}
            {filtered && (
              <>
                {" "}
                <button
                  type="button"
                  className={styles.resetLink}
                  onClick={reset}
                >
                  Reset
                </button>
              </>
            )}
          </p>

          <div className={styles.views} role="group" aria-label="View">
            <button
              type="button"
              className={styles.view}
              aria-pressed={view === "vitrine"}
              onClick={() => setView("vitrine")}
            >
              Vitrine
            </button>
            <span className={styles.viewDivider} aria-hidden="true">
              ·
            </span>
            <button
              type="button"
              className={styles.view}
              aria-pressed={view === "index"}
              onClick={() => setView("index")}
            >
              Index
            </button>
          </div>
        </div>
      </div>

      {shown.length === 0 ? (
        <p className={styles.empty}>
          Nothing in the archive answers to that just now.{" "}
          <button type="button" className={styles.resetLink} onClick={reset}>
            Show everything
          </button>
        </p>
      ) : view === "vitrine" ? (
        <div className={styles.vitrine}>
          {shown.map((bag, i) => (
            <ArchiveCard key={bag.ref} bag={bag} priority={i < 3} />
          ))}
        </div>
      ) : (
        <div className={styles.register}>
          <div className={styles.ledger}>
            <div className={styles.ledgerHead} aria-hidden="true">
              <span>Nº</span>
              <span>House</span>
              <span>Piece</span>
              <span className={styles.numeric}>Retail</span>
              <span className={styles.statusCol}>Status</span>
            </div>

            <ul className={styles.rows}>
              {shown.map((bag) => (
                <li key={bag.ref}>
                  <Link
                    href={`/archive/${bag.ref}`}
                    className={styles.row}
                    data-reading={reading === bag.ref || undefined}
                    onMouseEnter={() => setReading(bag.ref)}
                    onFocus={() => setReading(bag.ref)}
                    onMouseLeave={() => setReading(null)}
                    onBlur={() => setReading(null)}
                  >
                    <span className={styles.rowRef}>{bag.ref}</span>
                    <span className={styles.rowHouse}>{bag.house}</span>
                    <span className={styles.rowName}>{bag.name}</span>
                    <span className={`${styles.rowRetail} ${styles.numeric}`}>
                      {formatEur(bag.retailEur)}
                    </span>
                    <span
                      className={styles.statusCol}
                      data-loan={bag.status.kind === "onLoan" || undefined}
                    >
                      {statusLabel(bag.status)}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Sits beside the line your eye is on. Aria-hidden: every word in
              it is already in the row the reader is focused on. */}
          <aside className={styles.plate} aria-hidden="true">
            <Arch className={styles.plateArch}>
              <Image
                key={preview.image.src}
                src={asset(preview.image.src)}
                alt=""
                fill
                sizes="380px"
                style={{ objectPosition: preview.image.position }}
                className={styles.plateImage}
              />
            </Arch>
            <div className={styles.plateMeta}>
              <p className={styles.plateRef}>{bagRef(preview)}</p>
              <p className={styles.plateName}>{preview.name}</p>
              <p className={styles.plateDetail}>
                {tierLabel(preview.tier)} · {formatEur(preview.retailEur)}
              </p>
            </div>
          </aside>
        </div>
      )}
    </>
  );
}

function Filter({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className={styles.filter}>
      <span className={styles.filterLabel}>{label}</span>
      <div className={styles.choices}>{children}</div>
    </div>
  );
}

function Choice({
  active,
  onSelect,
  children,
}: {
  active: boolean;
  onSelect: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      className={styles.choice}
      aria-pressed={active}
      onClick={onSelect}
    >
      {children}
    </button>
  );
}
