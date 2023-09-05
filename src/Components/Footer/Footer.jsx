import React from "react";
import { FooterWrp, AncoreWrp } from "./Footer-styles";
const Footer = () => {
  return (
    <FooterWrp>
      <p>Created by Mire</p>
      <AncoreWrp>
        <a href="https://github.com/mireia22">
          <img src="/github.png" alt="github" />
        </a>
        <a href="https://www.linkedin.com/in/mireia-garcia-ferrer-40381b255/">
          <img src="/linkedin.png" alt="linkedin" />
        </a>
      </AncoreWrp>
    </FooterWrp>
  );
};

export default Footer;