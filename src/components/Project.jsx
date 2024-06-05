import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper";
import agecalcu from "../assets/images/agecalcu.png";
import brarchitect from "../assets/images/brarchitect.png";
import rockgame from "../assets/images/rockgame.png";
import about from "../assets/images/about.jpeg";

const Project = () => {
  const projects = [
    {
      img: agecalcu,
      name: "Age Calculator",
      github_link: "https://github.com/UAlice1/agecalculator",
      live_link: "https://ualice1.github.io/agecalculator/",
    },
    {
      img: rockgame,
      name: "Rock Scisors",
      github_link: "https://github.com/UAlice1/rockscisos",
      live_link: "https://ualice1.github.io/rockscisos/",
    },
    {
      img: brarchitect,
      name: "BR Architect",
      github_link: "https://github.com/UAlice1/br-architecture",
      live_link: "https://vuecountry05.netlify.app",
    },
  ];

  return (
    <section id="projects" className="py-10 text-white">
      <div className="text-center">
        <h3 className="text-4xl font-semibold">
          My <span className="text-cyan-600">Projects</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">My awesome works</p>
      </div>
      <br />
      <div className="flex max-w-6xl gap-6 px-5 mx-auto items-center relative">
        <div className="lg:w-2/3 w-full">
          <Swiper
            slidesPerView={1.2}
            spaceBetween={20}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
            }}
            loop={true}
            autoplay={{
              delay: 3000,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination, Autoplay]}
          >
            {projects.map((project_info, i) => (
              <SwiperSlide key={i}>
                <div className="h-fit w-full p-4 bg-slate-700 rounded-xl">
                  <img src={project_info.img} alt={project_info.name} className="rounded-lg" />
                  <h3 className="text-xl my-4">{project_info.name}</h3>
                  <div className="flex gap-3">
                    <a
                      href={project_info.github_link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-cyan-600 bg-gray-800 px-2 py-1 inline-block"
                    >
                      Github
                    </a>
                    <a
                      href={project_info.live_link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-cyan-600 bg-gray-800 px-2 py-1 inline-block"
                    >
                      Live Demo
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="lg:block hidden">
          <img src={about} alt="About" />
        </div>
      </div>
    </section>
  );
};

export default Project;
