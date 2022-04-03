import React from "react";
import "./header.css";
import CTA from "./CTA";
import ME from "../../assets/me.png";
import HeaderSocial from "./HeaderSocial";
import ParticleBg from "./particleBg";

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <ParticleBg />
        <div className="me">
          <img src={ME} alt="me" />
        </div>
        <h5>Hello I'm</h5>
        <h1>Taqiyya Ghazi</h1>
        <h5 className="text-light">AI Engineer</h5>
        {/* <CTA /> */}
        <HeaderSocial />

        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
