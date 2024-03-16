import React from "react";
import Avatar from "../../atoms/Avatar";
import "./threadLine.css";

const ThreadLine = ({ size, srcPath }) => {
  return (
    <section
      className="thread-line"
      style={{
        width: `${size}`,
      }}
    >
      <Avatar src={srcPath} size={size} />
      <hr />
    </section>
  );
};

export default ThreadLine;
