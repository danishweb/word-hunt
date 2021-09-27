import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <hr style={{ width: "90%", marginTop: 20 }} />
      <span className="name">
        Made by{" "}
        <a
          href="https://www.youtube.com/channel/UC5N6Quxx4OSMC9hksPqJrCg"
          target="__blank"
        >
          Danish Shaikh
        </a>
      </span>
    </div>
  );
};

export default Footer;
