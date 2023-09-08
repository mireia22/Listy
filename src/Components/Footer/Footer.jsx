import React from "react";
import { FooterWrp, AncoreWrp } from "./Footer-styles";
const Footer = () => {
  return (
    <FooterWrp>
      <p>Created by Mire</p>
      <AncoreWrp>
        <a
          href="https://github.com/mireia22"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/assets/images/icons/github.png" alt="github" />
        </a>
        <a
          href="https://www.linkedin.com/in/mireia-garcia-ferrer-40381b255/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/assets/images/icons/linkedin.png" alt="linkedin" />
        </a>
      </AncoreWrp>
    </FooterWrp>
  );
};

export default Footer;
