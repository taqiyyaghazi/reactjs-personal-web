import React from "react";
import "./about.css";
import ME from "../../assets/about-me.png";

const About = () => {
  return (
    <section id="about">
      <h5>Get to Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About" />
          </div>
        </div>
        <div className="about__content">
          <p>
            I am an Artificial Intelligence Engineer specially in Machine
            Learning. I'm currently studying the Natural Language Processing
            domain, but I also have experience in the Data Science and Computer
            Vision domains. In addition, I also have experience in Frontend
            Development, Backend Development, Graphic Design, and 2D Motion
            Graphics. I am a person who likes to learn new things especially
            about technology.
          </p>
          <a href="https://www.linkedin.com/in/taqiyya-ghazi/" target="_blank" className="btn btn-primary" rel="noreferrer">
            Know Me More
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
