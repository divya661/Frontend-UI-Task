import React from "react";
import "./card.css";

const Card = ({
  children,
  height,
  width,
  boxShadow,
  padding,
  gap,
  borderRadius,
  border,
  backgroundColor,
  customClassName = "",
}) => {
  return (
    <div
      className={`card-container ${customClassName}`}
      style={{
        height: `${height}px`,
        width: `${width}px`,
        boxShadow: boxShadow,
        padding: `${padding}`,
        gap: `${gap}`,
        borderRadius: `${borderRadius}`,
        border: `${border}`,
        backgroundColor: `${backgroundColor}`,
      }}
    >
      {children}
    </div>
  );
};

export default Card;
