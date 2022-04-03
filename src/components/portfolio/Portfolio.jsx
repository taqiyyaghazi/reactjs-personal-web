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
    image: "https://taqiyyaghazi.github.io/img/projects/bbbook.png",
    title: "Desain Brand Logo BersamaBisa Book Publishing",
    desc: "BersamaBisa Book Publishing merupakan lembaga penerbitan dibawah naungan komunitas BersamaBisa.id.",
    github: "",
    demo: "",
    view: "",
  },
  {
    id: 2,
    image: "https://taqiyyaghazi.github.io/img/projects/bbid.png",
    title: "Desain Brand Logo BersamaBisa.id",
    desc: "BersamaBisa.id merupakan komunitas Sociopreneur yang dibentuk oleh mahasiswa Universitas Sebelas Maret Surakarta.",
    github: "",
    demo: "",
    view: "",
  },
  {
    id: 3,
    image: "https://taqiyyaghazi.github.io/img/projects/sgi.png",
    title: "Desain Brand Logo Sekolah Generasi Indonesia",
    desc: "Sekolah Generasi Indonesia merupakan sekolah gratis yang dibangun dibawah naungan komunitas BersamaBisa.id.",
    github: "",
    demo: "",
    view: "",
  },
  {
    id: 4,
    image: "https://taqiyyaghazi.github.io/img/projects/mm.png",
    title: "Desain Cover Buku Muda Memimpin",
    desc: "Buku Muda Memimpin merupakan karya yang ditulis oleh Shoffan Mujahid (Mahasiswa Universitas Sebelas Maret) dan diterbitkan JSI Press.",
    github: "",
    demo: "",
    view: "",
  },
  {
    id: 5,
    image: "https://taqiyyaghazi.github.io/img/projects/mhr.png",
    title: "Desain Cover Buku Memimpin Hati Rakyat",
    desc: "Buku Memimpin Hati Rakyat merupakan karya yang ditulis oleh Shoffan Mujahid (Mahasiswa Universitas Sebelas Maret) dan telah diterbitkan oleh Sabuk Pustaka.",
    github: "",
    demo: "",
    view: "",
  },
  {
    id: 6,
    image: "https://taqiyyaghazi.github.io/img/projects/bfp-predictor.png",
    title: "Body Fat Predictor App",
    desc: "Aplikasi yang dibuat menggunakan model machine learning dan dapat mengestimasi jumlah lemak dalam tubuh menggunakan beberapa indikator.",
    github: "",
    demo: "",
    view: "",
  },
];

const codingProject = data.map(
  ({ id, image, title, desc, github, demo, view }) => {
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
  }
);

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
