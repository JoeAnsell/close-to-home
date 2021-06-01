import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import image1 from "../images/Styling-intro.jpeg";
import image2 from "../images/crep-sole-converse.jpg";
import image3 from "../images/context-proto-final.jpg";
import { ParallaxProvider, Parallax } from "react-scroll-parallax";

const images = [
  {
    image: image1,
    size: 100,
    size_negative: -100,
  },
  {
    image: image2,
    size: 200,
    size_negative: -200,
  },
  {
    image: image3,
    size: 300,
    size_negative: -300,
  },
];

const Images = ({ windowSmall }) => {
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
    window.addEventListener("resize", generatePos);
    generatePos();
    return () => window.removeEventListener("resize", generatePos);
  }, []);

  return (
    <>
      <ImagesContainer className={`${windowSmall && "small"}`}>
        {images.map((image, index) => {
          return (
            <Parallax
              className={`image-${index + 1}`}
              y={[image.size_negative, image.size]}
            >
              <Image
                style={{ width: imageWidth }}
                key={index}
                onClick={() => {
                  setPhotoIndex(index);
                  setIsOpen(true);
                }}
                src={image.image}
              />
            </Parallax>
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
  position: relative;
  width: 100vw;
  min-width: 100vw;
  top: 50%;
  min-height: 100vh;
  transform: translate(-50%, -50%);
  .parallax-outer {
    position: absolute;
    &.image-1 {
      ${"" /* top: 10vh; */}
      left: 5vh;
    }
    &.image-2 {
      ${"" /* top: 35vh; */}
      right: 10vh;
    }
    &.image-3 {
      left: 9vh;
      ${"" /* top: 80vh; */}
    }
  }
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
  ${"" /* position: absolute; */}
  &:hover {
    opacity: 1;
    cursor: zoom-in;
    transform: scale(1.05);
  }
  &.small {
  }
`;
