import React from "react";
import { styled } from "styled-components";

const AboutContainer = styled.div`
  width: 100%;
  text-align: center;
  padding: 20px;
`;

const AboutMe: React.FC = () => {
  return (
    <AboutContainer>
      <h2>About Me</h2>
      <p>I am a passionate game developer working on unique gaming experiences.</p>
    </AboutContainer>
  );
};

export default AboutMe;
