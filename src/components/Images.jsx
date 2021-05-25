import React, { useState } from "react";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import image1 from "../images/Styling-intro.jpeg";
import image2 from "../images/crep-sole-converse.jpg";
import image3 from "../images/context-proto-final.jpg";

const images = [image1, image2, image3];

const Images = ({ windowSmall }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);
  return (
    <div>
      {windowSmall && (
        <button type="button" onClick={() => setIsOpen(true)}>
          Open Lightbox
        </button>
      )}

      {isOpen && (
        <Lightbox
          mainSrc={images[photoIndex]}
          nextSrc={images[(photoIndex + 1) % images.length]}
          prevSrc={images[(photoIndex + images.length - 1) % images.length]}
          onCloseRequest={() => setIsOpen(true)}
          onMovePrevRequest={() =>
            setPhotoIndex(photoIndex + images.length - 1) % images.length
          }
          onMoveNextRequest={() =>
            setPhotoIndex(photoIndex + 1) % images.length
          }
        />
      )}
    </div>
  );
};

export default Images;
