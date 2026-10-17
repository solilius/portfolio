import React from "react";
import styled from "styled-components";
import { PersonalInfo } from "../data";
import { Container } from "../Styles/StyledComponents";
import { asset } from "../utils";

const Bar = styled.footer`
  border-top: 1px solid var(--line);
  padding: 28px 0;
  font-size: 0.86rem;
  color: var(--faint);
`;

const Inner = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 16px;

  div {
    display: flex;
    align-items: center;
    gap: 12px;
  }

  img {
    width: 28px;
    height: 28px;
  }

  a {
    color: var(--muted);
    transition: color 0.2s;

    &:hover {
      color: var(--text);
    }
  }
`;

const Footer: React.FC = () => (
  <Bar>
    <Inner>
      <div>
        <img src={asset("/images/brand/lunarsol-mark.webp")} alt="" />
        <span>
          © {new Date().getFullYear()} {PersonalInfo.name} · {PersonalInfo.studio}
        </span>
      </div>
      <a href="https://github.com/solilius/portfolio-template" target="_blank" rel="noopener noreferrer">
        Free portfolio template
      </a>
    </Inner>
  </Bar>
);

export default Footer;
