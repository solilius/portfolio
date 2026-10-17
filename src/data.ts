import { AboutMeData, Game, GameEngine, MediaItem, MediaType, Platform, SocialLink } from "./types";

const shots = (folder: string, files: string[]): MediaItem[] =>
  files.map((f) => ({ source: `/images/web/${folder}/${f}.webp`, type: MediaType.Image }));
const video = (id: string): MediaItem => ({ source: `https://www.youtube-nocookie.com/embed/${id}`, type: MediaType.YouTube });

const udemyGameDev = { name: "GameDev.tv course (Udemy)", url: "https://www.udemy.com/course/unitycourse2" };

export const PersonalInfo: AboutMeData = {
  name: "Sol Elan",
  role: "Game Developer",
  studio: "LunarSol Games",
  headline: "I build games people want to play together.",
  introduction:
    "Unity and C# developer with 10 years of full-stack experience. I make online strategy, survival and mobile games, and I'm currently building Stay in Your Lane.",
  image: "/images/brand/sol-elan.webp",
  bio: [
    "Hey, I'm Sol! I've been gaming my whole life, and making games has always been the dream. A few years ago I decided to go all in: courses, game jams, and a lot of small games built start to finish.",
    "After 10 years as a full-stack developer, moving to C# and Unity felt natural. That background shows up in the systems I build, from online multiplayer to backend services.",
    "Under the LunarSol Games name I'm building Stay in Your Lane, an online lane strategy game. I'm also looking to join a studio where I can sharpen my skills, learn from great people and help ship awesome games.",
  ],
  skills: [
    { title: "Game development", items: ["Unity", "C#", "Online multiplayer", "Game AI", "Steamworks", "Addressables", "Mobile (iOS / Android)"] },
    { title: "Engineering", items: ["TypeScript", "React", "Node.js", "Socket.IO", "REST APIs", "Git"] },
  ],
};

export const socials: SocialLink[] = [
  { icon: "linkedin", label: "LinkedIn", url: "https://www.linkedin.com/in/sol-elan-a53555176/" },
  { icon: "github", label: "GitHub", url: "https://github.com/solilius" },
  { icon: "itch", label: "itch.io", url: "https://solico.itch.io/" },
  { icon: "x", label: "X", url: "https://x.com/solilius/" },
  { icon: "discord", label: "Discord", url: "https://discord.gg/ymjFMzNECS" },
];

export const cvUrl = "/Sol Elan CV.pdf";

export const featured = {
  name: "Stay in Your Lane",
  logo: "/images/siyl/logo.webp",
  poster: "/images/siyl/trailer-poster.webp",
  backdrop: "/images/siyl/bg-lane.webp",
  trailer: "https://www.youtube-nocookie.com/embed/AtS2DCoB8-0",
};

export const games: Game[] = [
  {
    name: "Stay in Your Lane",
    description: "Command an army and destroy the enemy base. Invest in units, tech or defenses, and fight for control of the lane in online PvP.",
    genres: ["RTS", "Tug of War", "2D", "Online PvP"],
    kind: "original",
    platforms: [Platform.Web, Platform.Windows],
    engine: GameEngine.Unity,
    links: [
      { icon: "steam", label: "Steam", url: "https://store.steampowered.com/app/5040850/Stay_in_Your_Lane" },
      { icon: "itch", label: "itch.io", url: "https://solico.itch.io/stay-in-your-lane" },
    ],
    media: [video("AtS2DCoB8-0"), ...shots("Stay in Your Lane", ["1", "2", "3", "4", "5", "6", "7", "8"])],
  },
  {
    name: "Not Fooling Anyone",
    description: "Blend into the crowd by spotting the pattern of one of the groups, and slip past your pursuers.",
    genres: ["Puzzle", "RPG", "Top-Down"],
    kind: "jam",
    platforms: [Platform.Web],
    engine: GameEngine.Unity,
    links: [{ icon: "itch", label: "itch.io", url: "https://solico.itch.io/youre-not-fooling-anyone" }],
    source: { name: "Global Game Jam 2026", url: "https://globalgamejam.org/games/2026/not-fooling-anyone-8" },
    media: shots("Not Fooling Anyone", [
      "1000207864",
      "Screenshot 2026-02-01 at 20.45.39",
      "Screenshot 2026-02-01 at 20.44.57",
      "Screenshot 2026-02-01 at 20.47.07",
    ]),
  },
  {
    name: "Insomnious",
    description: "Survive a world where every night could be your last. Explore strange biomes, fight dangerous creatures, gather rare materials and build a base strong enough to hold back the dark.",
    genres: ["Open World", "Survival", "RPG"],
    kind: "original",
    platforms: [Platform.Web, Platform.Android],
    engine: GameEngine.Unity,
    links: [
      { icon: "googleplay", label: "Google Play", url: "https://play.google.com/store/apps/details?id=com.DefaultCompany.Insomnious" },
      { icon: "github", label: "Source", url: "https://github.com/the-alchemist-labs/survival" },
    ],
    media: shots("Insomnious", ["Screenshot_166", "Screenshot_7", "Screenshot_2", "Screenshot_8", "Screenshot_3", "Screenshot_1"]),
  },
  {
    name: "Idelements",
    description: "Build your elemental team, progress through stages and catch every elemental. Join friends and fight together in real time with Socket.IO.",
    genres: ["Idle", "Monster Collection", "Auto Battler"],
    kind: "original",
    platforms: [Platform.iOS, Platform.Android],
    engine: GameEngine.Unity,
    links: [
      { icon: "github", label: "Client", url: "https://github.com/the-alchemist-labs/idlelements" },
      { icon: "github", label: "Server", url: "https://github.com/the-alchemist-labs/idlelements-be" },
    ],
    media: [
      ...shots("Idelements", ["Screenshot_1"]),
      video("RzN2szYvAC0"),
      ...shots("Idelements", ["Screenshot_2", "Screenshot_3", "Screenshot_4", "Screenshot_5", "Screenshot_6", "Screenshot_7"]),
    ],
  },
  {
    name: "BioGone",
    description: "Fight your fellow bacteria to escape the lab and grab the golden apple that will definitely keep the doctor away.",
    genres: ["Turn Based", "PvP", "Board Game"],
    kind: "original",
    platforms: [Platform.iOS, Platform.Android],
    engine: GameEngine.Unity,
    links: [{ icon: "github", label: "Source", url: "https://github.com/the-alchemist-labs/bio-gone" }],
    media: [
      ...shots("BioGone", ["Screenshot_1"]),
      video("T3EvIcTrZuU"),
      ...shots("BioGone", ["Screenshot_2", "Screenshot_3", "Screenshot_4", "Screenshot_5", "Screenshot_8", "Screenshot_9"]),
    ],
  },
  {
    name: "Zombies FPS",
    description: "A first-person shooter where you fight hordes of zombies in a post-apocalyptic world.",
    genres: ["FPS", "Shooter Looter"],
    kind: "original",
    platforms: [Platform.Web, Platform.Windows, Platform.Linux],
    engine: GameEngine.Unity,
    links: [
      { icon: "itch", label: "itch.io", url: "https://solico.itch.io/zombies-fps" },
      { icon: "github", label: "Source", url: "https://github.com/the-alchemist-labs/zombie-fps" },
    ],
    media: [video("eDHgjaKh5f4"), ...shots("ZombieFPS", ["Screenshot_1", "Screenshot_2", "Screenshot_3", "Screenshot_4", "Screenshot_6"])],
    cover: "/images/web/ZombieFPS/Screenshot_1.webp",
  },
  {
    name: "Fruits",
    description: "A match-3 puzzle game with tiles loaded through Addressables.",
    genres: ["Match-3", "Puzzle"],
    kind: "original",
    platforms: [Platform.Web, Platform.iOS, Platform.Android],
    engine: GameEngine.Unity,
    links: [
      { icon: "itch", label: "itch.io", url: "https://solico.itch.io/match3" },
      { icon: "github", label: "Source", url: "https://github.com/solilius/match-3" },
    ],
    media: [video("Fu-9Bp_xsGo"), ...shots("Match3", ["Screenshot_1", "Screenshot_2", "Screenshot_3"])],
    cover: "/images/web/Match3/Screenshot_1.webp",
  },
  {
    name: "Plant Based",
    description: "Collect oil to fuel your truck while shooting your way past obstacles and enemies.",
    genres: ["Endless Side Scroller"],
    kind: "original",
    platforms: [Platform.Windows, Platform.Web],
    engine: GameEngine.Unity,
    links: [
      { icon: "itch", label: "itch.io", url: "https://solico.itch.io/plant-based" },
      { icon: "github", label: "Source", url: "https://github.com/the-alchemist-labs/plant-based" },
    ],
    media: [...shots("Plant Based", ["Screenshot_6"]), video("Wb-u6aLqhMw")],
  },
  {
    name: "Heaven Runner",
    description: "Run the road to heaven, or at least as far as you can.",
    genres: ["Endless Runner"],
    kind: "course",
    platforms: [Platform.Windows, Platform.Web],
    engine: GameEngine.Unity,
    links: [
      { icon: "itch", label: "itch.io", url: "https://solico.itch.io/run-for-your-life" },
      { icon: "github", label: "Source", url: "https://github.com/the-alchemist-labs/runner" },
    ],
    source: udemyGameDev,
    media: [...shots("Runner", ["Screenshot_1"]), video("tuRnj_9ew9s"), ...shots("Runner", ["Screenshot_2", "Screenshot_13"])],
  },
  {
    name: "Flames",
    description: "Survive waves of enemies in this top-down point-and-shoot game. Collect power-ups and unlock new weapons.",
    genres: ["Action", "RPG"],
    kind: "course",
    platforms: [Platform.Windows, Platform.Web],
    engine: GameEngine.Unity,
    links: [{ icon: "itch", label: "itch.io", url: "https://solico.itch.io/flames" }],
    source: { name: "Blackthornprod course (Udemy)", url: "https://www.udemy.com/course/creating-a-cool-2d-action-game-in-unity" },
    media: [...shots("Flames", ["Screenshot_5"]), video("RhXSakfVc0I"), ...shots("Flames", ["Screenshot_1", "Screenshot_2", "Screenshot_3"])],
  },
  {
    name: "Space Shooter",
    description: "Fly through space and blast everything in your way.",
    genres: ["Shooter", "Space"],
    kind: "course",
    platforms: [Platform.Windows, Platform.Web],
    engine: GameEngine.Unity,
    links: [],
    source: udemyGameDev,
    media: [...shots("Space", ["Screenshot_1"]), video("IKhyqGOqh9U"), ...shots("Space", ["Screenshot_2", "Screenshot_3", "Screenshot_7"])],
  },
  {
    name: "Rocket Boost",
    description: "Steer your rocket past hazardous obstacles and get your people to the other side.",
    genres: ["Platformer"],
    kind: "course",
    platforms: [Platform.Windows, Platform.Web],
    engine: GameEngine.Unity,
    links: [{ icon: "itch", label: "itch.io", url: "https://solico.itch.io/rocket" }],
    source: udemyGameDev,
    media: [
      ...shots("Boost", ["Screenshot_3"]),
      video("ap7KAifZDeU"),
      ...shots("Boost", ["Screenshot_1", "Screenshot_2", "Screenshot_4", "Screenshot_5"]),
    ],
  },
  {
    name: "Too Hot to Handle",
    description: "Grab all the hot stuff and dodge the cold stuff.",
    genres: ["Vertical Scroller"],
    kind: "course",
    platforms: [Platform.Windows, Platform.Web],
    engine: GameEngine.Unity,
    links: [{ icon: "itch", label: "itch.io", url: "https://solico.itch.io/too-cold-to-handle" }],
    source: { name: "Blackthornprod course (Udemy)", url: "https://www.udemy.com/course/make-your-first-2d-game-with-unity-c-beginner-course/" },
    media: [...shots("To Hot to Handle", ["Screenshot_1"]), video("IKTWeKd8Voo")],
  },
];
