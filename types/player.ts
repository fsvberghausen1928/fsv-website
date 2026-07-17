export type PlayerPosition =
  | "goalkeeper"
  | "defender"
  | "midfielder"
  | "forward";



export interface Player {

  id: number;



  firstName: string;

  lastName: string;



  fullName?: string;



  number?: number;



  position: PlayerPosition;



  team: string;



  image?: string;



  nationality?: string;



  birthDate?: string;



  height?: number;



  joined?: string;



  biography?: string;

}