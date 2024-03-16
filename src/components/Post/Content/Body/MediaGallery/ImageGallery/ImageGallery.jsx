import React, { useState } from "react";

import Image from "../../../../../atoms/Image";
import Modal from "../../../../../atoms/Modal";
import "./imageGallery.css";
import Slider from "../../../../../molecules/SlideShow/index";

const ImagesLayout = ({ images }) => {
  const [show, setShow] = useState(false);
  const [active, setActive] = useState(0);

  let gridTemplateRows = "1fr";
  let gridTemplateColumns = "1fr";

  if (images.length === 2) {
    gridTemplateRows = "repeat(2,1fr)";
    gridTemplateColumns = "repeat(2,1fr)";
  } else if (images.length === 3) {
    gridTemplateRows = "repeat(2,1fr)";
    gridTemplateColumns = "repeat(2,1fr)";
  } else if (images.length === 4) {
    gridTemplateRows = "repeat(4,1fr)";
    gridTemplateColumns = "repeat(4,1fr)";
  }

  const handleClick = (index) => {
    setActive(index);
    setShow(true);
  };

  const onClose = () => {
    setShow(false);
  };

  return (
    <>
      <Modal show={show} title="" onClose={onClose}>
        <Slider images={images} active={active} setActive={setActive} />
      </Modal>
      <section
        className="post_images"
        style={{
          gridTemplateRows,
          gridTemplateColumns,
        }}
      >
        {images.map((image, index) => (
          <div
            key={index}
            onClick={() => handleClick(index)}
            className={
              images.length === 3
                ? "three-image-container"
                : images.length === 4
                ? "four-image-container"
                : images.length === 2
                ? "two-image-container"
                : "one-image-container"
            }
          >
            <Image srcPath={image.srcPath} altText={image.altText} />
          </div>
        ))}
      </section>
    </>
  );
};

export default ImagesLayout;
