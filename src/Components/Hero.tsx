import React from "react";
import { keyframes, styled } from "styled-components";
import { games, PersonalInfo, socials } from "../data";
import { Button, Container } from "../Styles/StyledComponents";
import { asset } from "../utils";
import Icon from "./Icon";

const float = keyframes`
  0%, 100% { transform: translateY(0) rotate(0deg); }
  50% { transform: translateY(-14px) rotate(-1.5deg); }
`;

const spin = keyframes`
  to { transform: rotate(360deg); }
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
  font-weight: 800;
  letter-spacing: -0.025em;

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

  img {
    position: relative;
    width: 86%;
    filter: drop-shadow(0 30px 40px rgba(0, 0, 0, 0.55));
    animation: ${float} 7s ease-in-out infinite;
  }

  @media (max-width: 900px) {
    max-width: 260px;
  }
`;

const Orbit = styled.div<{ $size: number; $speed: number }>`
  position: absolute;
  width: ${({ $size }) => $size}%;
  aspect-ratio: 1;
  border-radius: 50%;
  border: 1px dashed rgba(150, 175, 230, 0.18);
  animation: ${spin} ${({ $speed }) => $speed}s linear infinite;

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

const Hero: React.FC = () => (
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
        <Orbit $size={100} $speed={60} />
        <Orbit $size={82} $speed={40} />
        <img src={asset("/images/brand/lunarsol-games.webp")} alt="LunarSol Games logo" />
      </Visual>
    </Grid>
  </Wrapper>
);

export default Hero;
