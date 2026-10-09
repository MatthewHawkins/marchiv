import type { Bag, BagStatus, Tier } from "./types";

const TIER_LABEL: Record<Tier, string> = {
  salon: "Salon",
  galerie: "Galerie",
  trezor: "Trezor",
};

export const tierLabel = (tier: Tier) => TIER_LABEL[tier];

/** Grouped with a thin space-free comma, matching the brand board: €10,400 */
const eur = new Intl.NumberFormat("en-GB", {
  style: "currency",
  currency: "EUR",
  maximumFractionDigits: 0,
});

export const formatEur = (amount: number) => eur.format(amount);

/** `Nº 0142 · CHANEL` */
export const bagRef = (bag: Bag) => `Nº ${bag.ref} · ${bag.house}`;

/** `Galerie · Retail €10,400` */
export const bagMeta = (bag: Bag) =>
  `${tierLabel(bag.tier)} · Retail ${formatEur(bag.retailEur)}`;

/** Tracked-caps status text. `ON LOAN · 9 DAYS` */
export function statusLabel(status: BagStatus): string {
  if (status.kind === "inSalon") return "In the salon";
  const { daysRemaining } = status;
  return `On loan · ${daysRemaining} ${daysRemaining === 1 ? "day" : "days"}`;
}
