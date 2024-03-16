import React from "react";
// import AvatarImage from "./assests/avatar.jpeg";
import Text from "../../atoms/Text";
import Link from "../../atoms/Link/Link";
import "./footer.css";
import Avatar from "../../atoms/Avatar";

const Footer = () => {
  return (
    <section className="footer-container">
      <Avatar size={"32px"} src={"./assests/avatar.jpeg"} />
      <Link textDecoration="none" color="#1D9BF0" href="#">
        <Text customClassName={`body-regular-typograpy`}>Show this thread</Text>
      </Link>
    </section>
  );
};

export default Footer;
