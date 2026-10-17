import React, { useState } from "react";
import { styled } from "styled-components";
import { featured, games } from "../data";
import { MediaType } from "../types";
import { Button, Chip, ChipRow, Container, Eyebrow, Section, SectionHeader, SectionTitle } from "../Styles/StyledComponents";
import { asset, linkText, mediaThumb, youtubeEmbed } from "../utils";
import GameModal, { PlayGlyph } from "./GameModal";
import Icon from "./Icon";

const Card = styled.article`
  position: relative;
  display: grid;
  grid-template-columns: minmax(0, 1.35fr) minmax(0, 1fr);
  border-radius: 24px;
  overflow: hidden;
  border: 1px solid var(--line-strong);
  background: var(--surface);
  box-shadow: var(--shadow);

  @media (max-width: 960px) {
    grid-template-columns: 1fr;
  }
`;

const Video = styled.div`
  position: relative;
  min-height: 100%;
  background: #000;

  @media (max-width: 960px) {
    aspect-ratio: 16 / 9;
  }

  iframe {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    border: 0;
  }
`;

const Poster = styled.button`
  position: absolute;
  inset: 0;
  padding: 0;
  border: 0;
  cursor: pointer;
  background: #000;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.6s, filter 0.3s;
  }

  &:hover img {
    transform: scale(1.03);
    filter: brightness(1.08);
  }

  span.label {
    position: absolute;
    left: 20px;
    bottom: 18px;
    padding: 6px 12px;
    border-radius: 999px;
    font-size: 0.82rem;
    font-weight: 600;
    background: rgba(0, 0, 0, 0.6);
    backdrop-filter: blur(6px);
  }

  &:hover ${PlayGlyph} {
    transform: translate(-50%, -50%) scale(1.08);
  }

  ${PlayGlyph} {
    @media (max-width: 600px) {
      transform: translate(-50%, -50%) scale(0.7);
    }

    background: linear-gradient(100deg, #ffd23a, #ff9a2a);
    box-shadow: 0 10px 40px rgba(255, 160, 40, 0.5);
    transition: transform 0.2s;

    &::after {
      border-left-color: #10131c;
    }
  }
`;

const Info = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 36px;
  isolation: isolate;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    z-index: -1;
    background: linear-gradient(180deg, rgba(16, 26, 46, 0.86), var(--surface) 70%), var(--bg-img) center / cover;
  }

  @media (max-width: 600px) {
    padding: 24px 20px;
  }
`;

const Logo = styled.img`
  width: min(200px, 60%);
  filter: drop-shadow(0 10px 20px rgba(0, 0, 0, 0.5));
`;

const Description = styled.p`
  color: var(--muted);
  font-size: 1.05rem;
`;

const Actions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: auto;
`;

const Strip = styled.div`
  display: grid;
  grid-template-columns: repeat(8, minmax(0, 1fr));
  gap: 10px;
  margin-top: 14px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }

  button {
    padding: 0;
    border: 1px solid var(--line);
    border-radius: 10px;
    overflow: hidden;
    cursor: zoom-in;
    aspect-ratio: 16 / 9;
    background: #000;
    transition: transform 0.2s, border-color 0.2s;

    &:hover {
      transform: translateY(-3px);
      border-color: var(--sun);
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`;

const Featured: React.FC = () => {
  const game = games.find((g) => g.name === featured.name)!;
  const [playing, setPlaying] = useState(false);
  const [openAt, setOpenAt] = useState<number | null>(null);
  const screenshots = game.media.map((m, i) => ({ m, i })).filter(({ m }) => m.type === MediaType.Image);

  return (
    <Section id="featured">
      <Container>
        <SectionHeader>
          <Eyebrow>Featured project</Eyebrow>
          <SectionTitle>What I'm building right now</SectionTitle>
        </SectionHeader>

        <Card>
          <Video>
            {playing ? (
              <iframe src={youtubeEmbed(featured.trailer)} title={`${game.name} trailer`} allow="autoplay; encrypted-media; picture-in-picture; fullscreen" allowFullScreen />
            ) : (
              <Poster onClick={() => setPlaying(true)} aria-label="Play trailer">
                <img src={asset(featured.poster)} alt={`${game.name} key art`} />
                <PlayGlyph $size={78} />
                <span className="label">Watch the trailer</span>
              </Poster>
            )}
          </Video>

          <Info style={{ "--bg-img": `url("${asset(featured.backdrop)}")` } as React.CSSProperties}>
            <Logo src={asset(featured.logo)} alt={game.name} />
            <Description>{game.description}</Description>
            <ChipRow>
              {game.genres.map((g) => (
                <Chip key={g}>{g}</Chip>
              ))}
              <Chip>{game.engine}</Chip>
            </ChipRow>
            <Actions>
              {game.links.map((l, i) => (
                <Button key={l.url} href={l.url} target="_blank" rel="noopener noreferrer" $variant={i === 0 ? "primary" : "ghost"}>
                  <Icon name={l.icon} />
                  {linkText(l)}
                </Button>
              ))}
            </Actions>
          </Info>
        </Card>

        <Strip>
          {screenshots.map(({ m, i }) => (
            <button key={m.source} onClick={() => setOpenAt(i)} aria-label={`Open screenshot ${i}`}>
              <img src={mediaThumb(m)} alt="" loading="lazy" />
            </button>
          ))}
        </Strip>
      </Container>

      {openAt !== null && <GameModal game={game} startIndex={openAt} onClose={() => setOpenAt(null)} />}
    </Section>
  );
};

export default Featured;
