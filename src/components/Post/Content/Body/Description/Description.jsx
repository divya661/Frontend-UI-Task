import React from "react";

import Text from "../../../../atoms/Text";
import "./description.css";

const Description = ({ description, link, linkThumbnailImage }) => {
  return (
    <div className="post-description">
      <Text customClassName={`body-regular-typograpy`}>{description}</Text>
    </div>
  );
};

export default Description;
