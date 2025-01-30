import React from "react";
import { styled } from "styled-components";
import MediaCarousel from "./MediaCarousel";
import { MediaItem } from "../types";

interface GameProps {
  game: {
    name: string;
    description: string;
    genres: string[];
    source: string;
    media: MediaItem[];
  };
}

const GameContainer = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 20px;
  padding: 20px;
  border-radius: 8px;
  width: 100%;
`;

const LeftContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const RightContent = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const GameTitle = styled.h2`
  margin: 0;
`;

const GameDescription = styled.p`
  margin: 5px 0;
`;

const InfoTable = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin-top: 10px;
`;

const InfoRow = styled.div`
  display: flex;
  gap: 8px;
`;

const InfoKey = styled.span`
  font-weight: bold;
  min-width: 70px;
  text-align: left;
`;

const InfoValue = styled.span`
  text-align: left;
  flex: 1;
`;

const Game: React.FC<GameProps> = ({ game }) => {
  return (
    <GameContainer>
      {/* Left Side: Game Info */}
      <LeftContent>
        <GameTitle>{game.name}</GameTitle>
        <GameDescription>{game.description}</GameDescription>

        {/* Game Info Table */}
        <InfoTable>
          <InfoRow>
            <InfoKey>Genres:</InfoKey>
            <InfoValue>{game.genres.join(", ")}</InfoValue>
          </InfoRow>
          <InfoRow>
            <InfoKey>Source:</InfoKey>
            <InfoValue>
              <a href={game.source} target="_blank" rel="noopener noreferrer">
                {game.source}
              </a>
            </InfoValue>
          </InfoRow>
        </InfoTable>
      </LeftContent>

      {/* Right Side: Media */}
      <RightContent>
        <MediaCarousel media={game.media} />
      </RightContent>
    </GameContainer>
  );
};

export default Game;
