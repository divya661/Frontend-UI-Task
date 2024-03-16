import React from "react";

import Card from "../atoms/Card";
import Header from "./Header";
import Footer from "./Footer";
import Content from "./Content";
import "./postCard.css";

const PostCard = () => {
  return (
    <Card
      customClassName="card"
      width={598}
      height={672}
      boxShadow={"0px 0px 24px -8px #CFD9DE"}
      padding={"12px 16px 12px 16px"}
      gap={"0"}
      borderRadius={"12px"}
      border={`1px solid var(--border-color)`}
      backgroundColor={"#fff"}
    >
      <Header />
      <Content />
      <Footer />
    </Card>
  );
};

export default PostCard;
