import React, { useState } from "react";
import BigMedia from "./BigMedia";
import { MediaItem, MediaType } from "../types";
import { Arrow, CarouselContainer, LargeMediaWrapper, PlayIcon, Thumbnail, ThumbnailContainer, ThumbnailWrapper } from "./StyledComponents";


type MediaCarouselProps = {
  media: MediaItem[];
};

const getYouTubeThumbnail = (url: string) => {
  const match = url.match(/(?:youtube\.com\/(?:watch\?v=|embed\/)|youtu\.be\/)([^&?/]+)/);
  return match && match[1]
    ? `https://img.youtube.com/vi/${match[1]}/mqdefault.jpg`
    : "/fallback-thumbnail.jpg";
};

const MediaCarousel: React.FC<MediaCarouselProps> = ({ media }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);

  const updateMediaIndex = (newIndex: number) => {
    if (newIndex !== currentIndex) {
      setIsFading(true);
      setTimeout(() => {
        setCurrentIndex(newIndex);
        setIsFading(false);
      }, 100);
    }
  };
  
  const handleThumbnailClick = (index: number) => updateMediaIndex(index);
  const nextMedia = () => updateMediaIndex((currentIndex + 1) % media.length);
  const prevMedia = () => updateMediaIndex((currentIndex - 1 + media.length) % media.length);
  

  return (
    <CarouselContainer>
      <LargeMediaWrapper style={{ opacity: isFading ? 0 : 1 }}>
        <BigMedia source={media[currentIndex].source} type={media[currentIndex].type} />
      </LargeMediaWrapper>

      <ThumbnailContainer>
        <Arrow onClick={prevMedia}>◀&nbsp;</Arrow>
        {/* Limit to 6 thumbnails and scroll the rest */}
        {media.map((item, index) => {
          const isYouTubeVideo = item.type === MediaType.YouTube;
          const thumbnailSrc = isYouTubeVideo ? getYouTubeThumbnail(item.source) : item.source;

          return (
            <ThumbnailWrapper key={index}>
              <Thumbnail
                src={thumbnailSrc}
                $isSelected={index === currentIndex}
                onClick={() => handleThumbnailClick(index)}
              />
              {isYouTubeVideo && <PlayIcon onClick={() => handleThumbnailClick(index)} />}
            </ThumbnailWrapper>
          );
        })}
        <Arrow onClick={nextMedia}>&nbsp;▶</Arrow>
      </ThumbnailContainer>
    </CarouselContainer>
  );
};

export default MediaCarousel;
