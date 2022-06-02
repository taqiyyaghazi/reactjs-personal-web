import React from 'react';
import './portfolio.css';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper';

const data = [
  {
    id: 1,
    image:
      'https://raw.githubusercontent.com/taqiyyaghazi/taqiyyaghazi.github.io/main/img/projects/cover%20chatbot.png',
    title: 'Chatbot NLP Based Central AI',
    desc: 'CENTRAL AI adalah sebuah digital startup yang berfokus dalam hal membantu pelayanan cepat dan efektif untuk UMKM, perusahaan yang memiliki aplikasi atau website, universitas, organisasi lain berbadan hukum maupun sejenisnya untuk melayani customer dengan menyediakan produk-produk as services berbasis Artificial Intelligence seperti Chatbot, OCR, dan Notula.',
    github: '',
    demo: '',
    view: 'https://chatbot.centralai.id/',
  },
  {
    id: 2,
    image:
      'https://raw.githubusercontent.com/taqiyyaghazi/taqiyyaghazi.github.io/main/img/projects/Dashboard%20Central%20AI.png',
    title: 'Dashboard Chatbot Central AI',
    desc: 'Dashboard merupakan salah satu fitur yang sangat penting ketika mengembangkan sebuah aplikasi. Dashboard Chatbot Central AI membantu para customer dalam melakukan konfigurasi fitur chatbot, melihat rangkuman statistik interaksi, dan lain sebagainya. ',
    github: '',
    demo: '',
    view: 'https://chatbot.centralai.id/',
  },
  {
    id: 3,
    image:
      'https://raw.githubusercontent.com/taqiyyaghazi/taqiyyaghazi.github.io/main/img/projects/proly.png',
    title: 'Proly (Product Analysis) App',
    desc: 'Proly merupakan website analisis sentimen yang dapat anda gunakan untuk mendapatkan informasi sentimen positif dan negatif untuk perkembangan toko online anda, sistem rekomendasi bagi user yang ingin membeli produk di toko online dan sistem rekomendasi bagi anda untuk meningkatkan toko anda menjadi lebih baik.',
    github: '',
    demo: 'http://proly.herokuapp.com/',
    view: '',
  },
  {
    id: 4,
    image:
      'https://raw.githubusercontent.com/taqiyyaghazi/taqiyyaghazi.github.io/main/img/projects/backend%20bisa%20ai.png',
    title: 'Back End Sistem Pengelolaan BISA AI Academy',
    desc: 'Pembuatan Back End untuk platform pengelolaan kegiatan MSIB seperti tambah, edit, lihat, hapus rencana pembelajaran dan sertifikat bagi mahasiswa maupun admin.',
    github: '',
    demo: '',
    view: 'https://elearning.bisaai.id/login/index.php',
  },
];

const codingProject = data.map(
  ({ id, image, title, desc, github, demo, view }) => {
    if (github !== '' && demo !== '') {
      return (
        <SwiperSlide key={id} className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={image} alt={title} />
          </div>
          <h3>{title}</h3>
          <p>{desc}</p>
          <div className="portfolio__item-cta">
            <a href={github} className="btn" target="_blank" rel="noreferrer">
              Github
            </a>
            <a
              href={demo}
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              Live Demo
            </a>
          </div>
        </SwiperSlide>
      );
    } else if (demo !== '') {
      return (
        <SwiperSlide key={id} className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={image} alt={title} />
          </div>
          <h3>{title}</h3>
          <p>{desc}</p>
          <div className="portfolio__item-cta">
            <a
              href={demo}
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
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
            <a
              href={view}
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
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
