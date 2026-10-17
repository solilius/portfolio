import { GameKind, GameLink, MediaItem, MediaType } from "./types";

// Local paths get the deploy prefix and are URL-encoded (folders have spaces)
export const asset = (path: string) => (path.startsWith("http") ? path : encodeURI(`${process.env.PUBLIC_URL}${path}`));

export const smallImage = (path: string) => path.replace(/\.webp$/, "-sm.webp");

const youtubeId = (url: string) => url.split("/embed/")[1]?.split(/[?&]/)[0];

export const mediaThumb = (item: MediaItem) =>
  item.type === MediaType.YouTube ? `https://i.ytimg.com/vi/${youtubeId(item.source)}/hqdefault.jpg` : asset(smallImage(item.source));

export const youtubeEmbed = (url: string, autoplay = true) => `${url}?rel=0&modestbranding=1${autoplay ? "&autoplay=1" : ""}`;

export const kindLabel: Record<GameKind, string> = {
  original: "Original",
  jam: "Game Jam",
  course: "Course Project",
};

export const linkText = (link: GameLink) => {
  if (link.icon === "steam") return "Wishlist on Steam";
  if (link.icon === "itch") return "Play on itch.io";
  if (link.icon === "googleplay") return "Get it on Google Play";
  return link.label === "Source" ? "View source" : `${link.label} source`;
};
