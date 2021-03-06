import React, { useState } from "react";

import {
  HeroWrap,
  Up,
  Down,
  BoatWrap,
  TextWrap,
  TextWrapDown,
  DataWrap,
  Property,
  Data,
  Download,
  ValWrap,
  Title,
  Text,
  WrapLeft,
  WrapRight,
  BoatTitleWrap,
  WrapValTitle,
  WrapImage,
  WrapGallery,
} from "./style.js";
// import HeroVideo from "../../video/kraciVideo.mp4";
import Image from "next/image";
import { SRLWrapper } from "simple-react-lightbox";
import Images from "./photos.js";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css"; // This only needs to be imported once in your app
import SimpleReactLightbox from "simple-react-lightbox";

const PhotoGallery = () => {
  const [current, setCurrent] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const handleClickImage = (e, image) => {
    e && e.preventDefault();
    setCurrent(image);
    setIsOpen(true);
  };

  const handleCloseModal = (e) => {
    e && e.preventDefault();

    setCurrent(0);
    setIsOpen(false);
  };
  const options = {
    // Please note that "caption" is singular
    caption: {
      captionAlignment: "start",
      captionColor: "#FFFFFF",
      captionContainerPadding: "0",
      captionFontFamily: "inherit",
      captionFontSize: "inherit",
      captionFontStyle: "inherit",
      captionFontWeight: "inherit",
      captionTextTransform: "inherit",
      showCaption: false,
    },
  };
  return (
    <SimpleReactLightbox>
      <HeroWrap id="gallery">
        <Title>BOAT PHOTO GALLERY</Title>
        <WrapGallery>
          <SRLWrapper options={options}>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
              }}
            >
              {Images.map((image) => (
                <WrapImage
                  key={image.in}
                  // onClick={(e) => handleClickImage(e, image.in)}
                >
                  <Image
                    src={image.photo}
                    alt={image.in}
                    layout="fill"
                    // width={500} automatically provided
                    // height={500} automatically provided
                    // blurDataURL="data:..." automatically provided
                    placeholder="blur" // Optional blur-up while loading
                  />
                </WrapImage>
              ))}
            </div>
          </SRLWrapper>
        </WrapGallery>
      </HeroWrap>
    </SimpleReactLightbox>
  );
};

export default PhotoGallery;
