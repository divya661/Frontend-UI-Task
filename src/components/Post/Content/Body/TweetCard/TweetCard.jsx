import React from "react";

import Avatar from "../../../../atoms/Avatar";
import Card from "../../../../atoms/Card";
import UserInfo from "../ProfileHeader/UserInfo/UserInfo";
import Text from "../../../../atoms/Text";
import "./tweetCard.css";

const TweetCard = () => {
  return (
    <section className="tweet-card">
      <Card
        height={108}
        width={"100%"}
        boxShadow={"none"}
        padding={"12px"}
        gap={"4px"}
        borderRadius={"16px"}
        border={"1px solid #cfd9de"}
        backgroundColor={"#fff"}
      >
        <div className="flex">
          <Avatar size="20px" src="./assests/avatar-2.png" />
          <UserInfo
            content={{
              profileName: "derek guy",
              handle: "@dieworkwear",
              timePassed: "6hr",
            }}
          />
        </div>
        <Text customClassName={`content body-regular-typograpy`}>
          If AI like ChatGPT, Claude etc. generates code for it; even for
          guidance; I will break the computer, kill my boss and myself. It'll
          inflict so much pain on society.
        </Text>
      </Card>
    </section>
  );
};

export default TweetCard;
