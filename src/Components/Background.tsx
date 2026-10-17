import React, { useEffect, useRef, useState } from "react";
import { keyframes, styled } from "styled-components";

// Seeded random so the sky looks the same on every visit
const seeded = (seed: number) => () => {
  seed = (seed + 0x6d2b79f5) | 0;
  let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
  t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
  return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
};

const starTile = (seed: number, size: number, count: number, radius: number, alpha: [number, number], tint = "255,255,255") => {
  const rand = seeded(seed);
  const canvas = document.createElement("canvas");
  canvas.width = canvas.height = size;
  const ctx = canvas.getContext("2d")!;
  for (let i = 0; i < count; i++) {
    ctx.fillStyle = `rgba(${tint},${alpha[0] + rand() * (alpha[1] - alpha[0])})`;
    ctx.beginPath();
    ctx.arc(rand() * size, rand() * size, radius * (0.6 + rand() * 0.4), 0, Math.PI * 2);
    ctx.fill();
  }
  return `url(${canvas.toDataURL()})`;
};

// Constellations live in narrow edge strips so nothing crosses the hero logo
const edgeTile = (shapes: [number, number][][]) =>
  `url("data:image/svg+xml,${encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" width="320" height="1400">` +
      shapes.map((c) => `<polyline points="${c.join(" ")}" fill="none" stroke="rgba(150,175,230,0.11)" stroke-width="1"/>`).join("") +
      shapes
        .flat()
        .map(([x, y]) => `<circle cx="${x}" cy="${y}" r="1.6" fill="rgba(255,255,255,0.55)"/>`)
        .join("") +
      `</svg>`
  )}")`;

const leftConstellations = edgeTile([
  [[70, 590], [120, 560], [160, 610], [140, 680], [85, 700]],
  [[60, 1000], [110, 1050], [100, 1130], [160, 1170]],
]);
const rightConstellations = edgeTile([
  [[110, 90], [170, 130], [230, 110], [210, 190]],
  [[100, 1020], [160, 980], [220, 1040], [190, 1120], [240, 1190]],
]);

const breathe = keyframes`
  0%, 100% { scale: 1; }
  50% { scale: 1.12; }
`;

const Sky = styled.div`
  position: fixed;
  inset: 0;
  z-index: -1;
  overflow: hidden;
  pointer-events: none;
`;

// Each layer drifts by its own depth: --sy is scroll, --mx/--my is pointer (-1..1)
const Layer = styled.div<{ $depth: number }>`
  position: absolute;
  inset: -40px;
  background-repeat: repeat;
  background-position: calc(var(--mx, 0) * ${({ $depth }) => -$depth * 120}px) calc(var(--sy, 0) * ${({ $depth }) => -$depth}px + var(--my, 0) * ${({ $depth }) => -$depth * 120}px);
`;

const Nebula = styled.div`
  position: absolute;
  inset: 0;
  translate: calc(var(--mx, 0) * -3px) calc(var(--sy, 0) * -0.006px + var(--my, 0) * -3px);

  i {
    position: absolute;
    border-radius: 50%;
    filter: blur(80px);
    animation: ${breathe} 20s ease-in-out infinite;
  }
`;

const Band = styled(Layer)`
  mask: linear-gradient(115deg, transparent 28%, #000 46%, #000 56%, transparent 74%);
  -webkit-mask: linear-gradient(115deg, transparent 28%, #000 46%, #000 56%, transparent 74%);

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(115deg, transparent 35%, rgba(120, 140, 255, 0.035) 52%, transparent 70%);
  }
`;

const blobs = [
  { color: "#2b6cff", opacity: 0.075, x: 8, y: 18, w: 55 },
  { color: "#7b5cff", opacity: 0.045, x: 62, y: 68, w: 45 },
  { color: "#ff9a2a", opacity: 0.034, x: 90, y: 10, w: 40 },
];

const Background: React.FC = () => {
  const sky = useRef<HTMLDivElement>(null);
  const [tiles, setTiles] = useState<Record<string, string>>({});

  useEffect(() => {
    setTiles({
      dust: starTile(11, 600, 140, 0.8, [0.08, 0.28]),
      stars: starTile(23, 900, 40, 1.2, [0.25, 0.6]),
      band: starTile(37, 500, 420, 0.7, [0.06, 0.24], "220,230,255"),
    });

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const style = sky.current!.style;
    let frame = 0;
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => style.setProperty("--sy", String(window.scrollY)));
    };
    const onPointer = (e: PointerEvent) => {
      style.setProperty("--mx", ((e.clientX / window.innerWidth) * 2 - 1).toFixed(3));
      style.setProperty("--my", ((e.clientY / window.innerHeight) * 2 - 1).toFixed(3));
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("pointermove", onPointer, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("pointermove", onPointer);
    };
  }, []);

  return (
    <Sky ref={sky} aria-hidden="true">
      <Nebula>
        {blobs.map((b) => (
          <i
            key={b.color}
            style={{ left: `${b.x}%`, top: `${b.y}%`, width: `${b.w}vw`, height: `${b.w * 0.6}vw`, background: b.color, opacity: b.opacity, translate: "-50% -50%" }}
          />
        ))}
      </Nebula>
      <Band $depth={0.012} style={{ backgroundImage: tiles.band }} />
      <Layer $depth={0.015} style={{ backgroundImage: tiles.dust }} />
      <Layer $depth={0.008} style={{ backgroundImage: leftConstellations, right: "auto", width: 320, backgroundRepeat: "repeat-y" }} />
      <Layer $depth={0.008} style={{ backgroundImage: rightConstellations, left: "auto", width: 320, backgroundRepeat: "repeat-y" }} />
      <Layer $depth={0.025} style={{ backgroundImage: tiles.stars }} />
    </Sky>
  );
};

export default Background;
