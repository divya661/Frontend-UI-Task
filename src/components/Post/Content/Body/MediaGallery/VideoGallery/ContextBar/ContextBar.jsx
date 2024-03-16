import React from "react";
import "./contextBar.css";

const ContextBar = ({ duration, views, ad, gif }) => {
  return (
    <div className="context-bar caption-typograpy">
      {duration !== 0 && <span className="tag duration">{duration}</span>}
      {duration !== 0 && !ad && <span className="tag views">{views}</span>}
      {ad && <span className="tag ad">{ad}</span>}
      {gif && <span className="tag gif">GIF</span>}
    </div>
  );
};

export default ContextBar;
