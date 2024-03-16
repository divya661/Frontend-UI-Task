import React from "react";

const Link = ({ children, textDecoration, color, href }) => {
  return (
    <a
      href={href}
      style={{
        textDecoration: textDecoration,
        color: color,
      }}
    >
      {children}
    </a>
  );
};

export default Link;
