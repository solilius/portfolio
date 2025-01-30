import { styled } from "styled-components";

export const CarouselContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 50vw;
  position: relative;
`;

export const LargeMediaWrapper = styled.div`
  width: 100%;
  max-width: 600px;
  height: 320px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 15px;
  transition: opacity 0.3s ease-in-out;
`;

export const ThumbnailContainer = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  margin-top: 20px;
  `;

export const ThumbnailWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Thumbnail = styled.img<{ $isSelected: boolean }>`
  width: 80px;
  height: 60px;
  object-fit: cover;
  cursor: pointer;
  border-radius: 5px;
  border: 3px solid ${({ $isSelected }) => ($isSelected ? "#4e9f3d" : "transparent")};
  transform: ${({ $isSelected }) => ($isSelected ? "scale(1.1)" : "none")};
  transition: transform 0.3s ease-in-out;
`;

export const PlayIcon = styled.div`
  position: absolute;
  width: 32px;
  height: 32px;
  background: rgba(0, 0, 0, 0.7);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 18px;
  font-weight: bold;
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.2);
  }

  &:before {
    content: "▶";
    font-size: 18px;
    margin-left: 2px;
  }
`;

export const Arrow = styled.button`
  background: rgba(255, 255, 255, 0.3);
  color: black;
  border: none;
  padding: 10px;
  cursor: pointer;
  font-size: 20px;
  border-radius: 50%;
  transition: background 0.3s ease;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: rgba(255, 255, 255, 0.6);
  }
`;