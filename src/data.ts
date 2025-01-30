import { AboutMe, Game, MediaType } from "./types";

export const aboutMe: AboutMe = {
  name: "Sol Elan",
  role: "Game Developer",
  description:
    "I'm a game developer with a passion for creating unique and engaging experiences. My goal is to craft games that are not only fun to play, but also leave a lasting impact on the player.",
  image: "/images/profile.jpg",
};

export const games: Game[] = [
    {
      name: "Zombies FPS",
      description: "A first-person shooter game where you fight against hordes of zombies in a post-apocalyptic world.",
      genres: ["FPS", "Shooter-Looter"],
      source: "https://github.com/user/virus-escape",
      media: [
        { source: "https://www.youtube.com/embed/eDHgjaKh5f4", type: MediaType.YouTube },
        { source: "/images/games/Zombie FPS/Screenshot_1.png", type: MediaType.Image },
        { source: "/images/games/Zombie FPS/Screenshot_2.png", type: MediaType.Image },
        { source: "/images/games/Zombie FPS/Screenshot_3.png", type: MediaType.Image },
        { source: "/images/games/Zombie FPS/Screenshot_4.png", type: MediaType.Image },
        { source: "/images/games/Zombie FPS/Screenshot_6.png", type: MediaType.Image },
      ],
    },
    {
      name: "Zombies FPS",
      description: "A first-person shooter game where you fight against hordes of zombies in a post-apocalyptic world.",
      genres: ["FPS", "Shooter-Looter"],
      source: "https://github.com/user/virus-escape",
      media: [
        { source: "https://www.youtube.com/embed/eDHgjaKh5f4", type: MediaType.YouTube },
        { source: "/images/games/Zombie FPS/Screenshot_1.png", type: MediaType.Image },
        { source: "/images/games/Zombie FPS/Screenshot_2.png", type: MediaType.Image },
        { source: "/images/games/Zombie FPS/Screenshot_3.png", type: MediaType.Image },
        { source: "/images/games/Zombie FPS/Screenshot_4.png", type: MediaType.Image },
        { source: "/images/games/Zombie FPS/Screenshot_6.png", type: MediaType.Image },
      ],
    },
  ];