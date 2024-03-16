import React from "react";
import Button from "../../../../atoms/Button";
import Image from "../../../../atoms/Image";
import UserInfo from "./UserInfo";
import "./profileHeader.css";

const ProfileHeader = () => {
  return (
    <div className="profile-header">
      <UserInfo
        content={{
          profileName: "Profile Name",
          handle: "@handle",
          timePassed: "6hr",
        }}
      />
      <div className="action">
        <Button
          btnClassName="tertiary-button actions"
          onClickFn={() =>
            console.log("actions button clicked in profile section")
          }
        >
          <Image
            srcPath={"./assests/DotsIcon.svg"}
            altText={"actions button"}
          />
        </Button>
      </div>
    </div>
  );
};

export default ProfileHeader;
