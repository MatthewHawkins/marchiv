/** Membership tiers. Order is meaningful — ascending access. */
export type Tier = "salon" | "galerie" | "trezor";

/**
 * A piece is either on the shelves or out with a member.
 * Modelled as a discriminated union so `daysRemaining` cannot exist
 * on a piece that is in the salon.
 */
export type BagStatus =
  | { kind: "inSalon" }
  | { kind: "onLoan"; daysRemaining: number };

export type Bag = {
  /** Archive number, zero-padded. Displayed as `Nº 0142`. */
  ref: string;
  /** The maison. Displayed in tracked caps. */
  house: string;
  name: string;
  /** Lowest tier that may borrow this piece. */
  tier: Tier;
  retailEur: number;
  status: BagStatus;
  image: {
    src: string;
    /** CSS object-position — these are crops chosen per photograph. */
    position: string;
    alt: string;
  };
};

export type Membership = {
  tier: Tier;
  /** Italic Czech-flavoured descriptor, e.g. "the everyday closet". */
  descriptor: string;
  allowance: string;
  priceEurMonthly: number;
  /** The room the tier is named for. */
  image: {
    src: string;
    position: string;
    alt: string;
  };
  /**
   * Comparison detail. Indicative commercial terms, not yet agreed — these
   * depend on the insurance premium and the utilisation model (see docs/PLAN.md).
   */
  terms: {
    piecesAtOnce: string;
    archiveAccess: string;
    swaps: string;
    delivery: string;
    salonAccess: string;
    buyoutCredit: string;
  };
};
