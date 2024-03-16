import React from "react";
import Body from "./Body";
import ThreadLine from "../ThreadLine";
import "./content.css";

const Content = () => {
  return (
    <section className="content">
      <ThreadLine srcPath={"./assests/avatar.jpeg"} size={"48px"} />
      <Body />
    </section>
  );
};

export default Content;
