import React from "react";
import { styled } from "styled-components";
import AboutMe from "../Components/AboutMe";
import Game from "../Components/Game";
import { games } from "../data";

const PageContainer = styled.div`
  width: 100%;
`;

const GamesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding: 20px;
`;

const MainPage: React.FC = () => {
  return (
    <PageContainer>
      <AboutMe />
      <GamesContainer>
        {games.map((game, index) => (
          <Game key={index} game={game} />
        ))}
      </GamesContainer>
    </PageContainer>
  );
};

export default MainPage;
