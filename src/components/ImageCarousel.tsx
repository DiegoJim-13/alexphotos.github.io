import styled from "@emotion/styled/macro";
import { useCallback, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { BACKGROUND } from "../constants/colors";
import pauseIcon from "../icons/pause.png";
import playIcon from "../icons/play.png";

const StyledImageCarousel = styled.div`
  display: flex;
  justify-content: center;
`;

const StyledImage = styled.img`
  width: 80%;
  &.shown {
    display: block;
  }
  &.hidden {
    display: none;
  }
`;

const StyledControl = styled.img`
  height: 20px;
  width: 20px;
  cursor: pointer;
  background-color: ${BACKGROUND};
  border-radius: 50%;
  position: relative;
  left: 5px;
  top: 5px;
`;

const StyledDiv = styled.div`
  position: relative;
  height: 0;
  width: 0;
`;

const images = [
  "https://www.w3schools.com/w3css/img_la.jpg",
  "https://www.w3schools.com/w3css/img_chicago.jpg",
];

function ImageCarousel() {
  const { t } = useTranslation();

  const [paused, setPaused] = useState(false);
  const [imageShownIndex, setImageShownIndex] = useState(0);

  const incrementIndexOnImage = useCallback(() => {
    if (imageShownIndex + 1 >= images.length) {
      setImageShownIndex(0);
    } else {
      setImageShownIndex(imageShownIndex + 1);
    }
  }, [imageShownIndex, setImageShownIndex]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!paused) {
        incrementIndexOnImage();
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [imageShownIndex, setImageShownIndex, paused, incrementIndexOnImage]);

  return (
    <StyledImageCarousel>
      <StyledDiv>
        <StyledControl
          onClick={() => {
            if (paused) {
              incrementIndexOnImage();
            }
            setPaused(!paused);
          }}
          src={paused ? playIcon : pauseIcon}
        ></StyledControl>
      </StyledDiv>
      {images.map((curImage, index) => {
        return (
          <StyledImage
            key={index}
            src={curImage}
            alt={"image"}
            className={index === imageShownIndex ? "shown" : "hidden"}
          />
        );
      })}
    </StyledImageCarousel>
  );
}

export default ImageCarousel;
