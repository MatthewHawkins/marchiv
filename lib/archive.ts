import type { Bag } from "./types";

/**
 * Test inventory for the prototype.
 *
 * Photography is licensed stock (Unsplash) of real bags — see
 * `public/images/bags/CREDITS.md`. Each piece is named after the bag
 * actually in its photograph rather than invented, so nothing in the
 * archive is mislabelled.
 *
 * Attribution confidence differs, and it matters before any of this is
 * shown as fact:
 *   VERIFIED from a visible monogram or hardware — Dior, Gucci (both),
 *     Prada, Hermès, Louis Vuitton (all three), Saint Laurent.
 *   READ from silhouette alone, no legible marking — Dolce&Gabbana,
 *     Valentino, Delvaux, Miu Miu, Mulberry.
 *
 * Reference numbers, prices, tiers and loan states are invented.
 */
export const archive: Bag[] = [
  {
    ref: "0004",
    house: "HERMÈS",
    name: "Kelly 28, Epsom, Bleu Atoll",
    tier: "trezor",
    retailEur: 14_800,
    status: { kind: "inSalon" },
    image: {
      src: "/images/bags/hermes-kelly.jpg",
      position: "50% 46%",
      alt: "A turquoise Hermès Kelly in Epsom leather with palladium hardware",
    },
  },
  {
    ref: "0011",
    house: "PRADA",
    name: "Cahier, Saffiano and Calf, Nero",
    tier: "salon",
    retailEur: 2_800,
    status: { kind: "onLoan", daysRemaining: 9 },
    image: {
      src: "/images/bags/cahier.jpg",
      position: "50% 44%",
      alt: "A black Prada Cahier with a silver buckle clasp, worn on a chain",
    },
  },
  {
    ref: "0048",
    house: "DELVAUX",
    name: "Brillant MM, Taurillon, Cognac",
    tier: "trezor",
    retailEur: 8_900,
    status: { kind: "inSalon" },
    image: {
      src: "/images/bags/brillant.jpg",
      position: "50% 50%",
      alt: "A cognac grained-leather top-handle bag against a dark ground",
    },
  },
  {
    ref: "0066",
    house: "LOUIS VUITTON",
    name: "Speedy Bandoulière 30, Monogram",
    tier: "salon",
    retailEur: 2_000,
    status: { kind: "inSalon" },
    image: {
      src: "/images/bags/speedy.jpg",
      position: "50% 50%",
      alt: "A Louis Vuitton Speedy in monogram canvas with vachetta trim",
    },
  },
  {
    ref: "0087",
    house: "GUCCI",
    name: "GG Marmont Small, Matelassé, Nero",
    tier: "salon",
    retailEur: 2_500,
    status: { kind: "inSalon" },
    image: {
      src: "/images/bags/gg-marmont.jpg",
      position: "56% 48%",
      alt: "A black matelassé GG Marmont shoulder bag with antiqued gold hardware",
    },
  },
  {
    ref: "0092",
    house: "GUCCI",
    name: "GG Marmont Camera, Matelassé, Nero",
    tier: "salon",
    retailEur: 1_600,
    status: { kind: "onLoan", daysRemaining: 21 },
    image: {
      src: "/images/bags/marmont-camera.jpg",
      position: "52% 50%",
      alt: "A black chevron-quilted GG Marmont camera bag",
    },
  },
  {
    ref: "0118",
    house: "LOUIS VUITTON",
    name: "Pochette Métis, Monogram, Fauve",
    tier: "galerie",
    retailEur: 4_300,
    status: { kind: "inSalon" },
    image: {
      src: "/images/bags/pochette-metis.jpg",
      position: "50% 44%",
      alt: "A Louis Vuitton Pochette Métis held against a blue painted wall",
    },
  },
  {
    ref: "0137",
    house: "MULBERRY",
    name: "Amberley Satchel, Grain, Pale Grey",
    tier: "salon",
    retailEur: 1_100,
    status: { kind: "inSalon" },
    image: {
      src: "/images/bags/amberley.jpg",
      position: "50% 52%",
      alt: "A pale grey grained satchel with two gold buckle straps",
    },
  },
  {
    ref: "0142",
    house: "DIOR",
    name: "Lady Dior Medium, Cannage, Camel",
    tier: "galerie",
    retailEur: 6_200,
    status: { kind: "inSalon" },
    image: {
      src: "/images/bags/lady-dior.jpg",
      position: "44% 56%",
      alt: "A camel Lady Dior in cannage-quilted leather with gold D·I·O·R charms",
    },
  },
  {
    ref: "0159",
    house: "SAINT LAURENT",
    name: "Cassandre Envelope, Matelassé, Rouge",
    tier: "galerie",
    retailEur: 2_700,
    status: { kind: "inSalon" },
    image: {
      src: "/images/bags/cassandre.jpg",
      position: "50% 50%",
      alt: "A red quilted Saint Laurent envelope clutch with a chain strap",
    },
  },
  {
    ref: "0175",
    house: "VALENTINO",
    name: "Rockstud Medium, Nappa, Ghiaccio",
    tier: "galerie",
    retailEur: 3_100,
    status: { kind: "inSalon" },
    image: {
      src: "/images/bags/rockstud.jpg",
      position: "50% 50%",
      alt: "A pale grey studded flap bag with a chain strap",
    },
  },
  {
    ref: "0203",
    house: "DOLCE&GABBANA",
    name: "Sicily Medium, Dauphine, Avorio",
    tier: "salon",
    retailEur: 2_450,
    status: { kind: "inSalon" },
    image: {
      src: "/images/bags/sicily.jpg",
      position: "50% 32%",
      alt: "An ivory Sicily top-handle bag in grained dauphine leather",
    },
  },
  {
    ref: "0210",
    house: "MIU MIU",
    name: "Matelassé Top Handle, Nappa, Rosa",
    tier: "salon",
    retailEur: 2_400,
    status: { kind: "inSalon" },
    image: {
      src: "/images/bags/miu-top-handle.jpg",
      position: "50% 48%",
      alt: "A rose quilted top-handle bag on a marble surface",
    },
  },
  {
    ref: "0231",
    house: "LOUIS VUITTON",
    name: "Nano Speedy, Monogram, Fauve",
    tier: "galerie",
    retailEur: 2_250,
    status: { kind: "onLoan", daysRemaining: 4 },
    image: {
      src: "/images/bags/nano-speedy.jpg",
      position: "50% 46%",
      alt: "A Louis Vuitton Nano Speedy displayed on a gilt stand",
    },
  },
];

/** The homepage shelf — a curated handful, not the whole archive. */
export const featuredBags: Bag[] = [
  archive[8], // Lady Dior
  archive[4], // GG Marmont
  archive[1], // Cahier
  archive[11], // Sicily
];

/** Quoted wherever the archive's size is stated. */
export const archiveSize = archive.length;
