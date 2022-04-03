import React from "react";
import "./footer.css";
import { BsLinkedin, BsInstagram, BsGithub } from "react-icons/bs";

const Footer = () => {
  return (
    <footer>
      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer__socials">
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

      <div className="footer__copyright">
        <small>&copy; 2020 Ghazi. All Right reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
