import React from "react";

import Button from "../../../../atoms/Button";
import Image from "../../../../atoms/Image";
import Text from "../../../../atoms/Text";
import Icon from "../../../../atoms/Icon";
import "./actionsBar.css";

const ActionsBar = () => {
  return (
    <section className="tweet-actions">
      <Button
        btnClassName="tertiary-button count-button comment-button"
        onClickFn={() => console.log("comment button clicked in actions  bar")}
      >
        <div className="icon-inline-block">
          <Image srcPath="./assests/CommentIcon.svg" altText="comment icon" />
        </div>
        <Text customClassName="caption-typograpy count">20</Text>
      </Button>
      <Button
        btnClassName="tertiary-button repost-button count-button"
        onClickFn={() =>
          console.log("re-post tweet button clicked in actions  bar")
        }
      >
        <div className="icon-inline-block">
          <Image
            srcPath="./assests/RePostTweetIcon.svg"
            altText="re post tweet icon"
          />
        </div>
        <Text customClassName="caption-typograpy count">20</Text>
      </Button>
      <Button
        btnClassName="tertiary-button liked-button count-button"
        onClickFn={() => console.log("liked button clicked in actions  bar")}
      >
        <div className="icon-inline-block">
          <Image srcPath="./assests/LikedIcon.svg" altText="liked icon" />
        </div>
        <Text customClassName="caption-typograpy count">20</Text>
      </Button>
      <Button
        btnClassName="tertiary-button analytics-button count-button"
        onClickFn={() =>
          console.log("analytics button clicked in actions  bar")
        }
      >
        <div className="icon-inline-block">
          <Icon>
            <svg
              width="21"
              height="20"
              viewBox="0 0 21 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M8.04134 17.5V2.5H9.70801V17.5H8.04134ZM15.7497 17.5V7.08333H17.4163V17.5H15.7497ZM4.08301 17.5L4.08634 9.16667H5.75301L5.74967 17.5H4.08301ZM11.7897 17.5V11.6667H13.4563V17.5H11.7897Z" />
            </svg>

            {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <use xlinkHref="./assests/AnalyticsIcon.svg" />
            </svg> */}
          </Icon>
        </div>
        <Text customClassName="caption-typograpy count">20</Text>
      </Button>
      <Button
        btnClassName="tertiary-button share-button"
        onClickFn={() => console.log("share button clicked in actions  bar")}
      >
        <div className="icon-inline-block">
          <Image srcPath="./assests/ExportIcon.svg" altText="share icon" />
        </div>
      </Button>
    </section>
  );
};

export default ActionsBar;
