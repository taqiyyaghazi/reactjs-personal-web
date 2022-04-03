import React from "react";
import "./about.css";
import ME from "../../assets/about-me.png";
import { FaAward } from "react-icons/fa";
import { FaUserFriends } from "react-icons/fa";
import { BsFillFolderFill } from "react-icons/bs";

const About = () => {
  return (
    <section id="about">
      <h5>Get to Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>
        <div className="about__content">
          {/* <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>3+ Years Working</small>
            </article>
            <article className="about__card">
              <FaUserFriends className="about__icon" />
              <h5>Clients</h5>
              <small>200+ Worldwide</small>
            </article>
            <article className="about__card">
              <BsFillFolderFill className="about__icon" />
              <h5>Projects</h5>
              <small>80+ Completed</small>
            </article>
          </div> */}
          <p>
            I am an Artificial Intelligence Engineer specially in Machine
            Learning. I'm currently studying the Natural Language Processing
            domain, but I also have experience in the Data Science and Computer
            Vision domains. In addition, I also have experience in Frontend
            Development, Backend Development, Graphic Design, and 2D Motion
            Graphics. I am a person who likes to learn new things especially
            about technology.
          </p>
          <a href="https://www.linkedin.com/in/taqiyya-ghazi/" target="_blank" className="btn btn-primary">
            Know Me More
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
