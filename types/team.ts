import type { Player } from "./player";


export interface Team {
  id?: number;

  slug: string;

  name: string;

  description?: string;

  image?: string;

  coach?: string;

  assistantCoach?: string;

  category?: string;

  players?: Player[];

  staff?: string[];

  league?: string;

  founded?: string;
}