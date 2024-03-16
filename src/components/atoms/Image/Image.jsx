import React from "react";
import "./image.css";

const Image = ({ altText, srcPath }) => {
  return (
    <figure className="image-container">
      <img alt={altText} src={srcPath} />
    </figure>
  );
};

export default Image;
