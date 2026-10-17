import React, { useEffect, useRef } from "react";
import { keyframes, styled } from "styled-components";
import { games, PersonalInfo, socials } from "../data";
import { Button, Container } from "../Styles/StyledComponents";
import { asset } from "../utils";
import Icon from "./Icon";

const float = keyframes`
  0%, 100% { transform: translateY(0) rotate(0deg); }
  50% { transform: translateY(-14px) rotate(-1.5deg); }
`;

const pulse = keyframes`
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.06); }
`;

const Wrapper = styled.section`
  position: relative;
  min-height: min(100vh, 980px);
  display: flex;
  align-items: center;
  padding: calc(var(--nav-h) + 40px) 0 60px;
`;

const Grid = styled(Container)`
  display: grid;
  grid-template-columns: minmax(0, 1.15fr) minmax(0, 1fr);
  align-items: center;
  gap: 40px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`;

const Copy = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media (max-width: 900px) {
    align-items: center;
    order: 2;
  }
`;

const Badge = styled.span`
  align-self: flex-start;
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 6px 14px 6px 8px;
  border-radius: 999px;
  border: 1px solid var(--line-strong);
  background: rgba(255, 255, 255, 0.03);
  font-size: 0.85rem;
  color: var(--muted);

  b {
    color: var(--text);
    font-weight: 600;
  }

  i {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: #3ee38b;
    box-shadow: 0 0 0 4px rgba(62, 227, 139, 0.18);
  }

  @media (max-width: 900px) {
    align-self: center;
  }
`;

const Title = styled.h1`
  font-size: clamp(2.6rem, 6vw, 4.6rem);
  font-family: "Fredoka", var(--font-display);
  font-weight: 700;
  letter-spacing: -0.01em;
  line-height: 1.05;

  em {
    font-style: normal;
    background: var(--brand-gradient);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
  }
`;

const Lead = styled.p`
  font-size: clamp(1.05rem, 1.6vw, 1.2rem);
  color: var(--muted);
  max-width: 560px;
`;

const Actions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;

  @media (max-width: 900px) {
    justify-content: center;
  }
`;

const Socials = styled.div`
  display: flex;
  gap: 10px;

  a {
    width: 42px;
    height: 42px;
    display: grid;
    place-items: center;
    border-radius: 12px;
    color: var(--muted);
    border: 1px solid var(--line);
    background: rgba(255, 255, 255, 0.02);
    transition: color 0.2s, border-color 0.2s, transform 0.2s;

    &:hover {
      color: var(--text);
      border-color: var(--line-strong);
      transform: translateY(-2px);
    }
  }
`;

const Visual = styled.div`
  position: relative;
  display: grid;
  place-items: center;
  aspect-ratio: 1;
  max-width: 520px;
  width: 100%;
  justify-self: center;

  &::before {
    content: "";
    position: absolute;
    inset: 12%;
    border-radius: 50%;
    background: radial-gradient(circle at 35% 45%, rgba(43, 108, 255, 0.55), transparent 60%),
      radial-gradient(circle at 70% 40%, rgba(255, 176, 46, 0.5), transparent 60%);
    filter: blur(50px);
  }

  @media (max-width: 900px) {
    max-width: 260px;
  }
`;

const LogoButton = styled.button`
  position: relative;
  z-index: 1;
  width: 86%;
  padding: 0;
  border: 0;
  background: none;
  cursor: pointer;
  border-radius: 50%;
  -webkit-tap-highlight-color: transparent;

  img {
    width: 100%;
    filter: drop-shadow(0 30px 40px rgba(0, 0, 0, 0.55));
    animation: ${float} 7s ease-in-out infinite;
  }

  span {
    display: block;
    transition: transform 0.15s;
  }

  &:hover span {
    animation: ${pulse} 1.1s ease-in-out infinite;
  }

  &:active span {
    transform: scale(0.94);
    animation: none;
  }
`;

const Orbit = styled.div`
  position: absolute;
  aspect-ratio: 1;
  border-radius: 50%;
  border: 1px solid rgba(150, 175, 230, 0.18);
  pointer-events: none;

  &::after {
    content: "";
    position: absolute;
    top: 50%;
    left: -5px;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: var(--sun);
    box-shadow: 0 0 16px var(--sun);
  }

  &:nth-of-type(2)::after {
    background: var(--moon);
    box-shadow: 0 0 16px var(--moon);
    left: auto;
    right: -4px;
    width: 8px;
    height: 8px;
  }
`;

const Stats = styled.dl`
  display: flex;
  flex-wrap: wrap;
  gap: 18px 36px;
  margin: 12px 0 0;
  padding-top: 24px;
  border-top: 1px solid var(--line);

  div {
    display: flex;
    flex-direction: column-reverse;
  }

  dt {
    color: var(--faint);
    font-size: 0.82rem;
  }

  dd {
    margin: 0;
    white-space: nowrap;
    font-family: var(--font-display);
    font-weight: 700;
    font-size: 1.6rem;
  }

  @media (max-width: 900px) {
    justify-content: center;
  }

  @media (max-width: 480px) {
    gap: 20px;

    dd {
      font-size: 1.3rem;
    }
  }
`;

// Same rings as before: degrees per second (60s and 40s per lap)
const orbits = [
  { size: 100, speed: 6 },
  { size: 82, speed: 9 },
];

const BOOST_SPEED = 200; // speed multiplier at full boost
const BOOST_DECAY = 2.2; // per second

const Hero: React.FC = () => {
  const orbitRefs = useRef<(HTMLDivElement | null)[]>([]);
  const boost = useRef(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const angles = orbits.map(() => 0);
    let last = performance.now();
    let frame = requestAnimationFrame(function tick(now) {
      const dt = Math.min((now - last) / 1000, 0.05);
      last = now;
      boost.current *= Math.exp(-BOOST_DECAY * dt);
      orbits.forEach((o, i) => {
        angles[i] = (angles[i] + o.speed * (1 + BOOST_SPEED * boost.current) * dt) % 360;
        orbitRefs.current[i]!.style.transform = `rotate(${angles[i]}deg)`;
      });
      frame = requestAnimationFrame(tick);
    });
    return () => cancelAnimationFrame(frame);
  }, []);

  const whoosh = () => (boost.current = Math.min(1.5, boost.current + 1));

  return (
    <Wrapper id="top">
      <Grid>
        <Copy>
          <Badge>
            <i />
            <span>
              <b>{PersonalInfo.role}</b> · {PersonalInfo.studio}
            </span>
          </Badge>
          <Title>
            Hi, I'm Sol. I build <em>games people want to play together.</em>
          </Title>
          <Lead>{PersonalInfo.introduction}</Lead>
          <Actions>
            <Button href="#games">See my games</Button>
            <Button href="#contact" $variant="ghost">
              Get in touch
            </Button>
          </Actions>
          <Socials>
            {socials.map((s) => (
              <a key={s.label} href={s.url} target="_blank" rel="noopener noreferrer" aria-label={s.label} title={s.label}>
                <Icon name={s.icon} size={18} />
              </a>
            ))}
          </Socials>
          <Stats>
            <div>
              <dt>Years writing software</dt>
              <dd>10+</dd>
            </div>
            <div>
              <dt>Games built in Unity</dt>
              <dd>{games.length}</dd>
            </div>
            <div>
              <dt>Platforms</dt>
              <dd>PC · Web · Mobile</dd>
            </div>
          </Stats>
        </Copy>

        <Visual>
          {orbits.map((o, i) => (
            <Orbit key={i} ref={(el) => (orbitRefs.current[i] = el)} style={{ width: `${o.size}%` }} />
          ))}
          <LogoButton onClick={whoosh} aria-label="LunarSol Games logo. Click for a boost">
            <span>
              <img src={asset("/images/brand/lunarsol-games.webp")} alt="" />
            </span>
          </LogoButton>
        </Visual>
      </Grid>
    </Wrapper>
  );
};

export default Hero;
