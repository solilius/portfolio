import React, { useState } from "react";
import { styled } from "styled-components";
import { MediaItem, MediaType } from "../types";

const MediaWrapper = styled.div`
  width: 100%;
  height: 100%;
  cursor: pointer;
`;

const MediaIframe = styled.iframe`
  width: 100%;
  height: 100%;
  border: none;
`;

const MediaImage = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  cursor: pointer;
`;

const PopupOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const PopupImage = styled.img`
  max-width: 90%;
  max-height: 90%;
`;

const BigMedia: React.FC<MediaItem> = ({ source, type }) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleClick = () => {
    if (type === MediaType.Image) {
      setIsPopupOpen(true);
    }
  };

  const getYouTubeEmbedUrl = (url: string) => {
    return`${url}?autoplay=1&mute=1`;
  };

  return (
    <>
      <MediaWrapper onClick={handleClick}>
        {type === MediaType.YouTube ? (
          <MediaIframe
            src={getYouTubeEmbedUrl(source)}
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <MediaImage src={source} alt="Game Media" />
        )}
      </MediaWrapper>

      {isPopupOpen && (
        <PopupOverlay onClick={() => setIsPopupOpen(false)}>
          <PopupImage src={source} alt="Enlarged Media" />
        </PopupOverlay>
      )}
    </>
  );
};

export default BigMedia;
