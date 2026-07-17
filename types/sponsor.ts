export type SponsorTier =
  | "main"
  | "premium"
  | "partner";



export interface Sponsor {

  id: number;

  name: string;

  logo: string;

  website?: string;

  tier: SponsorTier;

}