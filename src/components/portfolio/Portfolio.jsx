import React from "react";
import "./portfolio.css";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

const data = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1510915228340-29c85a43dcfe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    title: "Project 1",
    desc: "Halo ini adalah deskripsi project",
    github: "https://github.com/",
    demo: "taqiyyaghazi.github.io",
    view: ""
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1510915228340-29c85a43dcfe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    title: "Project 2",
    desc: "Halo ini adalah deskripsi project",
    github: "https://github.com/",
    demo: "taqiyyaghazi.github.io",
    view: ""
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1510915228340-29c85a43dcfe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    title: "Project 3",
    desc: "Halo ini adalah deskripsi project",
    github: "https://github.com/",
    demo: "taqiyyaghazi.github.io",
    view: ""
  },
  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1510915228340-29c85a43dcfe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    title: "Project 4",
    desc: "Halo ini adalah deskripsi project",
    github: "",
    demo: "taqiyyaghazi.github.io",
    view: ""
  },
];

const codingProject = data.map(({ id, image, title, desc, github, demo, view }) => {
  if (github !== "") {
    return (
      <SwiperSlide key={id} className="portfolio__item">
        <div className="portfolio__item-image">
          <img src={image} alt={title} />
        </div>
        <h3>{title}</h3>
        <p>{desc}</p>
        <div className="portfolio__item-cta">
          <a href={github} className="btn" target="_blank">
            Github
          </a>
          <a href={demo} className="btn btn-primary" target="_blank">
            Live Demo
          </a>
        </div>
      </SwiperSlide>
    );
  } else {
    return (
      <SwiperSlide key={id} className="portfolio__item">
        <div className="portfolio__item-image">
          <img src={image} alt={title} />
        </div>
        <h3>{title}</h3>
        <p>{desc}</p>
        <div className="portfolio__item-cta">
          <a href={view} className="btn btn-primary" target="_blank">
            View
          </a>
        </div>
      </SwiperSlide>
    );
  }
});

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <Swiper
        className="container portfolio__container"
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        loop={true}
        loopFillGroupWithBlank={true}
        breakpoints={{
          600: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination, Navigation]}
      >
        {codingProject}
      </Swiper>
    </section>
  );
};

export default Portfolio;
