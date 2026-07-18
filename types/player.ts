// types/player.ts

export type PlayerPosition =
  | "Goalkeeper"
  | "Defender"
  | "Midfielder"
  | "Forward";



export interface Player {

  id: number;

  name: string;

  number?: number;

  position: PlayerPosition;

  nationality?: string;

  age?: number;

  image?: string;

  bio?: string;

  team:
    | "first-team"
    | "second-team"
    | "youth";

}