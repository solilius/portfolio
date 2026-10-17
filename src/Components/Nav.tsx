import React, { useEffect, useState } from "react";
import { styled } from "styled-components";
import { cvUrl, PersonalInfo } from "../data";
import { Button, Container } from "../Styles/StyledComponents";
import { asset } from "../utils";

const Bar = styled.header<{ $solid: boolean }>`
  position: fixed;
  inset: 0 0 auto 0;
  z-index: 50;
  height: var(--nav-h);
  display: flex;
  align-items: center;
  transition: background 0.3s, border-color 0.3s, backdrop-filter 0.3s;
  border-bottom: 1px solid ${({ $solid }) => ($solid ? "var(--line)" : "transparent")};
  background: ${({ $solid }) => ($solid ? "rgba(7, 11, 23, 0.78)" : "transparent")};
  backdrop-filter: ${({ $solid }) => ($solid ? "blur(14px) saturate(140%)" : "none")};
`;

const Inner = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
`;

const Brand = styled.a`
  display: flex;
  align-items: center;
  gap: 12px;
  font-family: var(--font-display);
  font-weight: 700;
  font-size: 1.15rem;

  img {
    width: 40px;
    height: 40px;
    object-fit: contain;
    transition: transform 0.4s;
  }

  &:hover img {
    transform: rotate(-12deg) scale(1.06);
  }

  small {
    display: block;
    font-family: var(--font-body);
    font-weight: 500;
    font-size: 0.72rem;
    color: var(--muted);
    letter-spacing: 0.04em;
    margin-top: 2px;
  }
`;

const Links = styled.nav<{ $open: boolean }>`
  display: flex;
  align-items: center;
  gap: 6px;

  a.link {
    padding: 8px 14px;
    border-radius: 999px;
    color: var(--muted);
    font-weight: 500;
    font-size: 0.95rem;
    transition: color 0.2s, background 0.2s;

    &:hover {
      color: var(--text);
      background: rgba(255, 255, 255, 0.05);
    }
  }

  ${Button} {
    height: 40px;
    margin-left: 10px;
  }

  @media (max-width: 768px) {
    position: absolute;
    top: var(--nav-h);
    left: 0;
    right: 0;
    flex-direction: column;
    align-items: stretch;
    padding: 12px 16px 20px;
    background: rgba(7, 11, 23, 0.97);
    border-bottom: 1px solid var(--line);
    display: ${({ $open }) => ($open ? "flex" : "none")};

    a.link {
      padding: 12px 14px;
    }

    ${Button} {
      margin: 8px 0 0;
    }
  }
`;

const MenuToggle = styled.button`
  display: none;
  width: 42px;
  height: 42px;
  border-radius: 12px;
  border: 1px solid var(--line-strong);
  background: rgba(255, 255, 255, 0.04);
  cursor: pointer;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    display: inline-flex;
  }
`;

const sections = [
  { id: "featured", label: "Featured" },
  { id: "games", label: "Games" },
  { id: "about", label: "About" },
  { id: "contact", label: "Contact" },
];

const Nav: React.FC = () => {
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <Bar $solid={solid || open}>
      <Inner>
        <Brand href="#top" onClick={() => setOpen(false)}>
          <img src={asset("/images/brand/lunarsol-mark.webp")} alt="" />
          <span>
            {PersonalInfo.name}
            <small>{PersonalInfo.studio}</small>
          </span>
        </Brand>

        <MenuToggle aria-label="Toggle menu" aria-expanded={open} onClick={() => setOpen(!open)}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </MenuToggle>

        <Links $open={open}>
          {sections.map((s) => (
            <a key={s.id} className="link" href={`#${s.id}`} onClick={() => setOpen(false)}>
              {s.label}
            </a>
          ))}
          <Button href={asset(cvUrl)} target="_blank" rel="noopener noreferrer" $variant="ghost">
            Resume
          </Button>
        </Links>
      </Inner>
    </Bar>
  );
};

export default Nav;
