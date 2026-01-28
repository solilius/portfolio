import { AboutMeData, Game, GameEngine, LinkImageSource, MediaType, Platform } from "./types";

export const PersonalInfo: AboutMeData = {
  name: "Sol Elan",
  role: "Game Developer",
  introduction:
    "Aspiring game developer with a passion for creating interactive experiences. I specialize in developing games using Unity and have extensive full-stack experience.",
  image: `${process.env.PUBLIC_URL}/images/Sol Elan.jpg`,
  description:
    "Hey, I'm Sol! I've been gaming my whole life, and making games has always been my dream. Recently, I decided to go all in—took some Udemy courses, started practicing, and committed to making it happen.\n" +
    "With 10 years of experience as a full-stack developer, transitioning to C# and game development has been a smooth process. My goal is to create games me and my friends love, wacky survival games, fun idle games for mobile, and even a side-scrolling MMORPG 🍁\n" +
    "Right now, I’m looking to join a company where I can sharpen my skills, learn from others, and build some awesome games.",
};

export const games: Game[] = [
   {
    name: "Insomnious",
    description: "Survive a world where every night could be your last.Explore mysterious biomes, fight dangerous creatures, gather rare materials, and build a base strong enough to withstand the darkness.",
    genres: ["open-world", "survival", "rpg"],
    platforms: [Platform.Windows, Platform.Android],
    engine: GameEngine.Unity,
    links: [
      { source: LinkImageSource.Github, url: "https://github.com/the-alchemist-labs/survival" },
      { source: LinkImageSource.PlayStore, url: "https://play.google.com/store/apps/details?id=com.DefaultCompany.Insomnious" }
    ],
    media: [
      { source: "/images/games/Insomnious/Screenshot_166.png", type: MediaType.Image },
      { source: "/images/games/Insomnious/Screenshot_7.png", type: MediaType.Image },
      { source: "/images/games/Insomnious/Screenshot_2.png", type: MediaType.Image },
      { source: "/images/games/Insomnious/Screenshot_8.png", type: MediaType.Image },
      { source: "/images/games/Insomnious/Screenshot_3.png", type: MediaType.Image },
      { source: "/images/games/Insomnious/Screenshot_1.png", type: MediaType.Image }
    ],
  },
  {
    name: "Fruits",
    description: "Simple match 3 game with Addressable tiles.",
    genres: ["match-3"],
    platforms: [Platform.Windows, Platform.iOS, Platform.Android],
    engine: GameEngine.Unity,
    links: [
      { source: LinkImageSource.Github, url: "https://github.com/solilius/match-3" },
      { source: LinkImageSource.ItchIo, url: "https://solico.itch.io/match3" }
    ],
    media: [
      { source: "https://www.youtube.com/embed/Fu-9Bp_xsGo", type: MediaType.YouTube },
      { source: "/images/games/Match3/Screenshot_1.png", type: MediaType.Image },
      { source: "/images/games/Match3/Screenshot_2.png", type: MediaType.Image },
      { source: "/images/games/Match3/Screenshot_3.png", type: MediaType.Image },
    ],
  },
  {
    name: "BioGone",
    description: "Fight your fellow bacteria to escape the lab and gain the golden apple that will definitely keep the doctor away.",
    genres: ["Turn Base", "PvP", "Board Game"],
    platforms: [Platform.iOS, Platform.Android],
    engine: GameEngine.Unity,
    links: [
      { source: LinkImageSource.Github, url: "https://github.com/the-alchemist-labs/bio-gone" },

    ],
    media: [
      { source: "/images/games/BioGone/Screenshot_1.png", type: MediaType.Image },
      { source: "https://www.youtube.com/embed/T3EvIcTrZuU", type: MediaType.YouTube },
      { source: "/images/games/BioGone/Screenshot_2.png", type: MediaType.Image },
      { source: "/images/games/BioGone/Screenshot_3.png", type: MediaType.Image },
      { source: "/images/games/BioGone/Screenshot_4.png", type: MediaType.Image },
      { source: "/images/games/BioGone/Screenshot_5.png", type: MediaType.Image },
      { source: "/images/games/BioGone/Screenshot_8.png", type: MediaType.Image },
      { source: "/images/games/BioGone/Screenshot_9.png", type: MediaType.Image },
    ],
  },
  {
    name: "Zombies FPS",
    description: "A first-person shooter game where you fight against hordes of zombies in a post-apocalyptic world.",
    genres: ["FPS", "Shooter-Looter"],
    platforms: [Platform.Windows, Platform.Linux],
    engine: GameEngine.Unity,
    links: [
      { source: LinkImageSource.Github, url: "https://github.com/the-alchemist-labs/zombie-fps" },
      { source: LinkImageSource.ItchIo, url: "https://solico.itch.io/zombies-fps" }
    ],
    media: [
      { source: "https://www.youtube.com/embed/eDHgjaKh5f4", type: MediaType.YouTube },
      { source: "/images/games/ZombieFPS/Screenshot_1.png", type: MediaType.Image },
      { source: "/images/games/ZombieFPS/Screenshot_2.png", type: MediaType.Image },
      { source: "/images/games/ZombieFPS/Screenshot_3.png", type: MediaType.Image },
      { source: "/images/games/ZombieFPS/Screenshot_4.png", type: MediaType.Image },
      { source: "/images/games/ZombieFPS/Screenshot_6.png", type: MediaType.Image },
    ],

  },
  {
    name: "Idelements",
    description: "Build your Elemental team and progress through the stages, gain balls and catch all the elemntals, join your friends and fight together (socket.io)",
    genres: ["Idle", "Monster Collection", "Auto Battler",],
    platforms: [Platform.iOS, Platform.Android],
    engine: GameEngine.Unity,
    links: [
      { source: LinkImageSource.Github, url: "https://github.com/the-alchemist-labs/idlelements" },
      { source: LinkImageSource.Github, url: "https://github.com/the-alchemist-labs/idlelements-be" },

    ],
    media: [
      { source: "/images/games/Idelements/Screenshot_1.png", type: MediaType.Image },
      { source: "https://www.youtube.com/embed/RzN2szYvAC0", type: MediaType.YouTube },
      { source: "/images/games/Idelements/Screenshot_2.png", type: MediaType.Image },
      { source: "/images/games/Idelements/Screenshot_3.png", type: MediaType.Image },
      { source: "/images/games/Idelements/Screenshot_4.png", type: MediaType.Image },
      { source: "/images/games/Idelements/Screenshot_5.png", type: MediaType.Image },
      { source: "/images/games/Idelements/Screenshot_6.png", type: MediaType.Image },
      { source: "/images/games/Idelements/Screenshot_7.png", type: MediaType.Image },
    ],
  },
  {
    name: "Heaven Runner",
    description: "Run on the way to heaven or as far as you can",
    genres: ["Endless Side Scroller"],
    platforms: [Platform.Windows],
    engine: GameEngine.Unity,
    links: [
      { source: LinkImageSource.Github, url: "https://github.com/the-alchemist-labs/runner" },
      { source: LinkImageSource.ItchIo, url: "https://solico.itch.io/run-for-your-life" },
    ],
    source: { name: "GameDev.tv Team (Udemy)", url: "https://www.udemy.com/course/unitycourse2" },
    media: [
      { source: "/images/games/Runner/Screenshot_1.png", type: MediaType.Image },
      { source: "https://www.youtube.com/embed/tuRnj_9ew9s", type: MediaType.YouTube },
      { source: "/images/games/Runner/Screenshot_2.png", type: MediaType.Image },
      { source: "/images/games/Runner/Screenshot_13.png", type: MediaType.Image },

    ],
  },
  {
    name: "Flames",
    description: "Survive waves of enemies in this top-down point and shoot game. Collect power-ups and unlock new weapons.",
    genres: ["Action", "RPG"],
    platforms: [Platform.Windows],
    engine: GameEngine.Unity,
    links: [
      { source: LinkImageSource.ItchIo, url: "https://solico.itch.io/flames" },
    ],
    source: { name: "Blackthornprod (Udemy)", url: "https://www.udemy.com/course/creating-a-cool-2d-action-game-in-unity" },
    media: [
      { source: "/images/games/Flames/Screenshot_1.png", type: MediaType.Image },
      { source: "https://www.youtube.com/embed/RhXSakfVc0I", type: MediaType.YouTube },
      { source: "/images/games/Flames/Screenshot_2.png", type: MediaType.Image },
      { source: "/images/games/Flames/Screenshot_3.png", type: MediaType.Image },
      { source: "/images/games/Flames/Screenshot_5.png", type: MediaType.Image },
    ],
  },
  {
    name: "Space something",
    description: "Shoot stuff in space",
    genres: ["Shooter", "Space"],
    platforms: [Platform.Windows],
    engine: GameEngine.Unity,
    links: [],
    source: { name: "GameDev.tv Team (Udemy)", url: "https://www.udemy.com/course/unitycourse2" },
    media: [
      { source: "/images/games/Space/Screenshot_1.png", type: MediaType.Image },
      { source: "https://www.youtube.com/embed/IKhyqGOqh9U", type: MediaType.YouTube },
      { source: "/images/games/Space/Screenshot_2.png", type: MediaType.Image },
      { source: "/images/games/Space/Screenshot_3.png", type: MediaType.Image },
      { source: "/images/games/Space/Screenshot_7.png", type: MediaType.Image },
    ],
  },
  {
    name: "Rocket Boost",
    description: "Avoid hazardous obstacles and get your people to the other side",
    genres: ["Platformer"],
    platforms: [Platform.Windows],
    engine: GameEngine.Unity,
    links: [{ source: LinkImageSource.ItchIo, url: "https://solico.itch.io/rocket" },
    ],
    source: { name: "GameDev.tv Team (Udemy)", url: "https://www.udemy.com/course/unitycourse2" },
    media: [
      { source: "/images/games/Boost/Screenshot_1.png", type: MediaType.Image },
      { source: "https://www.youtube.com/embed/ap7KAifZDeU", type: MediaType.YouTube },
      { source: "/images/games/Boost/Screenshot_2.png", type: MediaType.Image },
      { source: "/images/games/Boost/Screenshot_3.png", type: MediaType.Image },
      { source: "/images/games/Boost/Screenshot_4.png", type: MediaType.Image },
      { source: "/images/games/Boost/Screenshot_5.png", type: MediaType.Image },
    ],
  },
  {
    name: "Too Hot to Handle",
    description: "Get all the hot stuff but avoid the cold stuff, yeah",
    genres: ["top-down vertical scrolling"],
    platforms: [Platform.Windows],
    engine: GameEngine.Unity,
    links: [
      { source: LinkImageSource.ItchIo, url: "https://solico.itch.io/too-cold-to-handle" },

    ],
    source: { name: "Blackthornprod (Udemy)", url: "https://www.udemy.com/course/make-your-first-2d-game-with-unity-c-beginner-course/" },
    media: [
      { source: "/images/games/To Hot to Handle/Screenshot_1.png", type: MediaType.Image },
      { source: "https://www.youtube.com/embed/IKTWeKd8Voo", type: MediaType.YouTube },
      { source: "/images/games/To Hot to Handle/Screenshot_2.png", type: MediaType.Image },

    ],
  },
  {
    name: "Plant Based",
    description: "Collect oil to fuel your truck while shooting obstacles and enemies",
    genres: ["Endless Side Scroller"],
    platforms: [Platform.Windows],
    engine: GameEngine.Unity,
    links: [
      { source: LinkImageSource.ItchIo, url: "https://solico.itch.io/plant-based" },
      { source: LinkImageSource.Github, url: "https://github.com/the-alchemist-labs/plant-based" },

    ],
    media: [
      { source: "/images/games/Plant Based/Screenshot_6.png", type: MediaType.Image },
      { source: "https://www.youtube.com/embed/Wb-u6aLqhMw", type: MediaType.YouTube },
    ],
  },
];