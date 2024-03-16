import React from "react";
import Text from "../../atoms/Text";
import Image from "../../atoms/Image";
import "./header.css";

const Header = () => {
  return (
    <section className="header">
      <Image
        srcPath="./assests/killerRetweetIcon.svg"
        altText="killer retweet icon"
      />
      <Text customClassName={`tag-typograpy`}>killer Retweeted</Text>
    </section>
  );
};

export default Header;
