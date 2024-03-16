import React from "react";

import Image from "../../../../../atoms/Image";
import "./videoGallery.css";
import ContextBar from "./ContextBar/ContextBar";

const VideosLayout = ({ videos }) => {

  let gridTemplateRows = "1fr";
  let gridTemplateColumns = "1fr";

  if (videos.length === 2) {
    gridTemplateRows = "repeat(2,1fr)";
    gridTemplateColumns = "repeat(2,1fr)";
  } else if (videos.length === 3) {
    gridTemplateRows = "repeat(2,1fr)";
    gridTemplateColumns = "repeat(2,1fr)";
  } else if (videos.length === 4) {
    gridTemplateRows = "repeat(4,1fr)";
    gridTemplateColumns = "repeat(4,1fr)";
  }

  return (
    <>
      <section
        className="post_videos"
        style={{
          gridTemplateRows,
          gridTemplateColumns,
        }}
      >
        {videos.map((video, index) => (
          <div
            key={index}
            className={`relative
              ${
                videos.length === 3
                  ? "three-video-container"
                  : videos.length === 4
                  ? "four-video-container"
                  : videos.length === 2
                  ? "two-video-container"
                  : "one-video-container"
              }`}
          >
            <Image srcPath={video.srcPath} altText={video.altText} />
            <div className="context-bar-container">
              <ContextBar
                views={video.views ?? 0}
                duration={video.duration ?? 0}
                gif={video.gif ?? false}
                ad={video.ad ?? ""}
              />
            </div>
          </div>
        ))}
      </section>
    </>
  );
};

export default VideosLayout;
