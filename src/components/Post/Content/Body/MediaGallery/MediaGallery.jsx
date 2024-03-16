import React from "react";
import ImageGallery from "./ImageGallery";
import VideoGallery from "./VideoGallery";

const MediaGallery = ({ type, content }) => {
  let galleryComponent;

  switch (type) {
    case "images":
      galleryComponent = <ImageGallery images={content} />;
      break;
    case "videos":
      galleryComponent = <VideoGallery videos={content} />;
      break;
    default:
      galleryComponent = <div>No gallery available for this type</div>;
  }

  return <div>{galleryComponent}</div>;
};

export default MediaGallery;
