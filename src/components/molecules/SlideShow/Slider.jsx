import React, { useState } from "react";
import "./slider.css";

const Slider = ({ images, active, setActive }) => {
  const [nextDisabled, setNextDisabled] = useState(false);
  const [prevDisabled, setPrevDisabled] = useState(true);

  const onNext = () => {
    if (active < images.length - 1) {
      setActive(active + 1);
      setPrevDisabled(false);
    } else {
      setNextDisabled(true);
    }
  };

  const onPrev = () => {
    if (active > 0) {
      setActive(active - 1);
      setNextDisabled(false);
    } else {
      setPrevDisabled(true);
    }
  };

  return (
    <div className="slider">
      <div className="slides">
        {images.map((e, i) => (
          <Slide key={i} {...e} active={i === active} />
        ))}
      </div>
      <div className="navigation-next-prev">
        <button
          className="next-prev prev"
          onClick={onPrev}
          disabled={prevDisabled}
        >
          <div className="icon"> &#8249; </div>
        </button>
        <button
          className="next-prev next"
          onClick={onNext}
          disabled={nextDisabled}
        >
          <div className="icon"> &#8250; </div>
        </button>
      </div>
    </div>
  );
};

const Slide = ({ srcPath, altText, active }) => {
  return (
    <div className={`slide ${active ? "active" : ""}`}>
      <img src={srcPath} alt={altText} />
    </div>
  );
};

export default Slider;
