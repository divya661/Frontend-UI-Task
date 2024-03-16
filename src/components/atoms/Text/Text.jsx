import React from "react";
import "./text.css";

const Text = ({ children, customClassName }) => {
  return <span className={`inline-block ${customClassName}`}>{children}</span>;
};

export default Text;
