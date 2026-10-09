import type { Membership } from "./types";

/**
 * Indicative membership terms for the prototype.
 *
 * The three tiers, their descriptors, allowances and headline prices come
 * from the brand board, where the prices are marked as placeholders.
 * Everything under `terms` is a working estimate written to make the page
 * concrete — swap counts, delivery scope, salon access and buyout credit are
 * all unagreed, and the buyout percentages in particular should not be
 * published until the utilisation and insurance numbers in docs/PLAN.md are
 * modelled.
 */
export const memberships: Membership[] = [
  {
    tier: "salon",
    descriptor: "the everyday closet",
    allowance: "One piece at a time, retail up to €4,000.",
    priceEurMonthly: 119,
    image: {
      src: "/images/salon.jpg",
      position: "50% 58%",
      alt: "The salon — a low sofa and a brass table beneath the vault",
    },
    terms: {
      piecesAtOnce: "One",
      archiveAccess: "Pieces up to €4,000 retail",
      swaps: "One a month",
      delivery: "Within Czechia",
      salonAccess: "By request",
      buyoutCredit: "20% of fees paid",
    },
  },
  {
    tier: "galerie",
    descriptor: "the full archive",
    allowance: "One piece at a time from every closet.",
    priceEurMonthly: 219,
    image: {
      src: "/images/cabinetry.jpg",
      position: "50% 52%",
      alt: "The galerie — oak shelves carrying the length of the archive",
    },
    terms: {
      piecesAtOnce: "One",
      archiveAccess: "The full archive",
      swaps: "Two a month",
      delivery: "Czechia and the EU",
      salonAccess: "An hour each month",
      buyoutCredit: "30% of fees paid",
    },
  },
  {
    tier: "trezor",
    descriptor: "the vault",
    allowance: "Two pieces, rare editions, salon priority.",
    priceEurMonthly: 349,
    // vault.jpg is the same room as salon.jpg from the same angle, so the
    // garden salon stands in for the trezor — the room a Trezor member is
    // actually received in, and the only interior that reads as distinct.
    image: {
      src: "/images/salon-garden.jpg",
      position: "34% 44%",
      alt: "The garden salon — ivy over the vault, where the rare editions are shown",
    },
    terms: {
      piecesAtOnce: "Two",
      archiveAccess: "The full archive, rare editions included",
      swaps: "Unlimited",
      delivery: "EU, express and insured",
      salonAccess: "Priority, any opening hour",
      buyoutCredit: "40% of fees paid",
    },
  },
];

/** Row labels for the tier comparison, in display order. */
export const comparisonRows = [
  { label: "Pieces at once", key: "piecesAtOnce" },
  { label: "The archive", key: "archiveAccess" },
  { label: "Swaps", key: "swaps" },
  { label: "Delivery", key: "delivery" },
  { label: "The salon", key: "salonAccess" },
  { label: "Toward owning", key: "buyoutCredit" },
] as const satisfies ReadonlyArray<{
  label: string;
  key: keyof Membership["terms"];
}>;

/** Held in every membership, whatever the tier. */
export const alwaysIncluded = [
  {
    title: "Authentication and provenance",
    body: "Every piece is authenticated before it reaches the shelves and carries its own file — serial, year, acquisition, condition history.",
  },
  {
    title: "Care and cover",
    body: "Ordinary wear is our concern, not yours. Cleaning and conditioning happen between every loan, and cover is written into the membership rather than taken as a deposit.",
  },
  {
    title: "Delivered in linen",
    body: "Insured both ways, in a linen sleeve and a hard case. Collection from the salon is always an option.",
  },
  {
    title: "Swap when you like",
    body: "In the salon by appointment, or by post. Your next piece is reserved before the last one leaves you.",
  },
  {
    title: "Pause for two months a year",
    body: "Travelling, or simply not carrying anything for a while. Pause without losing your place or your accrued credit.",
  },
  {
    title: "Fees count toward owning",
    body: "Fall for a piece and a share of what you have already paid comes off the archive price.",
  },
];

/** Plain answers to the things people actually ask. */
export const questions = [
  {
    q: "What happens if I mark a piece?",
    a: "Scuffs are our concern. Ordinary wear — a scratch on the hardware, softening at the corners — is expected and covered. Loss, theft that goes unreported, and deliberate damage sit with the member, and the terms say so plainly.",
  },
  {
    q: "Can I buy something I have borrowed?",
    a: "Yes. A share of the fees you have paid becomes credit against the archive price, rising with your tier. We will tell you the standing credit on any piece whenever you ask.",
  },
  {
    q: "Is there a minimum term?",
    a: "Three months, then month to month with thirty days' notice. Membership is by application, so we would rather you stayed because it suits you than because you were tied in.",
  },
  {
    q: "Do you send outside Czechia?",
    a: "Galerie and Trezor ship across the European Union. Salon is Prague and the rest of Czechia for now, though you are always welcome to collect from Malá Strana.",
  },
  {
    q: "How do I join?",
    a: "By application rather than open signup. Tell us a little about what you like to carry; we will reply within a few days and, if the archive suits you, open an account.",
  },
];
