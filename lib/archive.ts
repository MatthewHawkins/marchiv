import type { Bag } from "./types";

/**
 * Test inventory for the prototype.
 *
 * The photographs are licensed stock (Unsplash) of real bags — see
 * `public/images/bags/CREDITS.md` for the source of each. Each piece is named
 * after the bag actually in its photograph rather than after the four pieces
 * the brand board mocked up, so nothing on the shelf is mislabelled. Retail
 * figures are approximate market prices, not quotes.
 *
 * Replace all of this with real product photography on plaster backgrounds
 * before launch.
 */
export const featuredBags: Bag[] = [
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
    ref: "0203",
    // Attribution read from the photograph — the silhouette, dauphine grain
    // and plaque match a Sicily, but the plaque lettering is not legible.
    // Verify before this is anything other than test data.
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
];


/** Shown in the archive section header. Placeholder count. */
export const archiveSize = 140;
