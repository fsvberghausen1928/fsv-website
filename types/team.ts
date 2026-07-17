export type TeamCategory =
  | "first-team"
  | "second-team"
  | "youth";



export interface Team {

  id: number;

  slug: string;

  name: string;

  category: TeamCategory;



  description?: string;



  coach?: string;



  logo?: string;



  image?: string;



  players?: number[];



  league?: string;



  position?: number;



  statistics?: {

    played: number;

    wins: number;

    draws: number;

    losses: number;

    goalsFor: number;

    goalsAgainst: number;

  };

}