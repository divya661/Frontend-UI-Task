import React from "react";
import "./avatar.css";

const Avatar = ({ src, size }) => {
  return (
    <figure className="avatar">
      <img src={src} alt="Avatar" width={size} height={size} />
    </figure>
  );
};

export default Avatar;
