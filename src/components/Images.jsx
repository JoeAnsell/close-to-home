import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import image1 from "../images/Styling-intro.jpeg";
import image2 from "../images/crep-sole-converse.jpg";
import image3 from "../images/context-proto-final.jpg";

const images = [image1, image2, image3];

const Images = ({ windowSmall, appHeight }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);
  const [imageWidth, setImageWidth] = useState(0);
  const mainContentWidth = 640;

  const generatePos = () => {
    let windowWidth = window.innerWidth;
    let negativeSpace = (windowWidth - mainContentWidth) / 2;
    let imageWidth = negativeSpace / 2;
    setImageWidth(imageWidth);

    return ["frog", "dog"];
  };

  useEffect(() => {
    console.log(appHeight);
  });

  useEffect(() => {
    window.addEventListener("resize", generatePos);
    generatePos();
    return () => window.removeEventListener("resize", generatePos);
  }, []);

  return (
    <>
      <ImagesContainer
        style={{ height: appHeight }}
        className={`${windowSmall && "small"}`}
      >
        {images.map((image, index) => {
          return (
            <Image
              style={{ width: imageWidth }}
              className={`image-${index + 1}`}
              key={index}
              onClick={() => {
                setPhotoIndex(index);
                setIsOpen(true);
              }}
              src={image}
            />
          );
        })}
      </ImagesContainer>
      {windowSmall && (
        <>
          <ImageInstruction>(Click images to expand)</ImageInstruction>
        </>
      )}

      {isOpen && (
        <Lightbox
          imagePadding={50}
          mainSrc={images[photoIndex]}
          nextSrc={images[photoIndex + 1]}
          prevSrc={images[photoIndex - 1]}
          onCloseRequest={() => setIsOpen(false)}
          onMovePrevRequest={() => setPhotoIndex(photoIndex - 1)}
          onMoveNextRequest={() => setPhotoIndex(photoIndex + 1)}
        />
      )}
    </>
  );
};

export default Images;

const ImageInstruction = styled.p`
  font-size: 12px;
  margin-bottom: 20px;
`;

const ImagesContainer = styled.div`
  display: block;
  position: absolute;
  top: 55px;
  width: 100vw;
  min-width: 100vw;
  &.small {
    position: inherit;
    display: flex;
    width: 100%;
    min-width: unset;
    justify-content: space-between;
    margin: 20px 0px;
    img {
      position: inherit;
      display: block;
      top: unset;
      left: unset;
      max-width: unset;
      min-width: 31%;
      min-height: unset;
      max-height: unset;
      opacity: 1;
    }
  }
`;

const Image = styled.img`
  display: block;
  min-width: 150px;
  max-width: 500px;
  height: auto;
  opacity: 0.5;
  transition: 0.15s;
  position: absolute;
  &:hover {
    opacity: 1;
    cursor: zoom-in;
    transform: scale(1.05);
  }
  &.image-1 {
    top: 10vh;
    left: 5vh;
  }
  &.image-2 {
    top: 35vh;
    right: 10vh;
  }
  &.image-3 {
    left: 9vh;
    top: 60vh;
  }
  &.small {
  }
`;
