import React from "react";
import { BsLinkedin, BsInstagram, BsGithub } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";

const HeaderSocial = () => {
  return (
    <div className="header__socials">
      <a href="https://www.linkedin.com/in/taqiyya-ghazi/" target="_blank">
        <BsLinkedin />
      </a>
      <a href="https://github.com/taqiyyaghazi" target="_blank">
        <BsGithub />
      </a>
      <a href="https://www.instagram.com/zi.taqiy/" target="_blank">
        <BsInstagram />
      </a>
    </div>
  );
};

export default HeaderSocial;
