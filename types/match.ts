export type MatchStatus =
  | "upcoming"
  | "finished"
  | "cancelled";



export interface Match {

  id: number;

  slug: string;

  competition: string;

  date: string;

  time: string;



  homeTeam: string;

  awayTeam: string;



  homeLogo?: string;

  awayLogo?: string;



  homeScore?: number;

  awayScore?: number;



  location?: string;

  venue?: string;



  status: MatchStatus;

}