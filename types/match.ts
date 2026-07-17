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


  status?: 
    | "upcoming"
    | "live"
    | "finished";


  venue?: string;


  referee?: string;

}