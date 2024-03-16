import React from "react";

import Text from "../../../../../atoms/Text";
import Link from "../../../../../atoms/Link/Link";
import Image from "../../../../../atoms/Image";
import "./userInfo.css";

const UserInfo = ({ content }) => {
  return (
    <div className="user-info">
      <div className="user-name">
        <Text customClassName={`subtitle-bold-typograpy`}>
          {content.profileName}
        </Text>
        <Image
          srcPath="./assests/UserVerifiedIcon.svg"
          altText="user verification icon"
        />
      </div>
      <div className="profile-handle">
        <Link
          href="#"
          color="var(--text-secondary-color)"
          textDecoration="none"
        >
          <Text customClassName={`subtitle-regular-typograpy`}>
            {content.handle}
          </Text>
        </Link>
        <span>.</span>
        <span className="post-time">{content.timePassed}</span>
      </div>
    </div>
  );
};

export default UserInfo;
