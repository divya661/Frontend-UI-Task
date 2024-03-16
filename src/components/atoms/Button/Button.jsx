import React from "react";
import "./button.css";

const Button = ({ children, btnClassName, onClickFn }) => {
  return (
    <button
      className={`default-btn ${btnClassName}`}
      onClick={() => onClickFn()}
    >
      {children}
    </button>
  );
};

export default Button;
