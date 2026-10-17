import { iconPaths } from "./iconPaths";

export type IconName = keyof typeof iconPaths;

export enum Platform {
  Windows = "Windows",
  Mac = "Mac",
  Linux = "Linux",
  iOS = "iOS",
  Android = "Android",
  Web = "Web",
}

export enum GameEngine {
  Unity = "Unity",
  Unreal = "Unreal",
}

export enum MediaType {
  Image = "image",
  YouTube = "youtube",
}

// Original = my own design, Jam = game jam entry, Course = built while following a course
export type GameKind = "original" | "jam" | "course";

export interface MediaItem {
  source: string;
  type: MediaType;
}

export interface GameLink {
  icon: IconName;
  label: string;
  url: string;
}

export interface Game {
  name: string;
  description: string;
  genres: string[];
  kind: GameKind;
  source?: { name: string; url: string };
  links: GameLink[];
  media: MediaItem[];
  cover?: string;
  platforms: Platform[];
  engine: GameEngine;
}

export interface SocialLink {
  icon: IconName;
  label: string;
  url: string;
}

export interface AboutMeData {
  name: string;
  role: string;
  studio: string;
  headline: string;
  introduction: string;
  image: string;
  bio: string[];
  skills: { title: string; items: string[] }[];
}
