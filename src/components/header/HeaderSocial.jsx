import React from "react";
import { BsLinkedin, BsInstagram, BsGithub } from "react-icons/bs";

const HeaderSocial = () => {
  return (
    <div className="header__socials">
      <a href="https://www.linkedin.com/in/taqiyya-ghazi/" target="_blank" rel="noreferrer">
        <BsLinkedin />
      </a>
      <a href="https://github.com/taqiyyaghazi" target="_blank" rel="noreferrer">
        <BsGithub />
      </a>
      <a href="https://www.instagram.com/zi.taqiy/" target="_blank" rel="noreferrer">
        <BsInstagram />
      </a>
    </div>
  );
};

export default HeaderSocial;
