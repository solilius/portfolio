
export enum MediaType {
    Image = "image",
    YouTube = "youtube",
  }
  
  export interface MediaItem {
    source: string;
    type: MediaType;
  }

  export interface AboutMe {
    name: string;
    role: string;
    description: string;
    image: string;
  }
  
  export interface Game
  {
    name: string;
    description: string;
    genres: string[];
    source: string;
    media: MediaItem[];
  }