import React from "react";
import "./project.css";
import CircularIcons from "../../components/circularicon/CircularIcons";
import { laptop, Github } from "../../constants";
import Lottie from "react-lottie";
import ScrollAnimation from "react-animate-on-scroll";

const Projects = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: require("../../assets/animations/eye.json"),
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <section className="wrapper" id="projects">
      <div className="container">
        <h2 className="project__title">
          <CircularIcons
            icon={laptop}
            style={{
              width: "2.5rem",
              height: "2.5rem",
            }}
            circledimension={{
              width: 64,
              height: 64,
            }}
            text="Projects"
            textstyle={{
              fontSize: "30px",
              fontWeight: "bold",
              color: "#5a5d87",
            }}
          />
        </h2>
        <div className="projects_con">
          <ScrollAnimation animateIn="zoomIn" animateOnce={true} delay={100}>
            <div className="project__card">
              <div className="project__card__title">My Portfolio site</div>
              <div className="project__card__description">
                Software Developer Portfolio site built with ReactJS to showcase
                my skills and projects.
              </div>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/OchiengPaul442/portfoliosite.git"
                className="project__link__btn"
              >
                <CircularIcons
                  icon={Github}
                  style={{
                    width: 20,
                    height: 20,
                  }}
                  alt="github"
                  circledimension={{
                    width: 50,
                    height: 50,
                    backgroundColor: "#000",
                    borderRadius: "20%",
                    margin: 0,
                  }}
                />
              </a>
            </div>
          </ScrollAnimation>
          <ScrollAnimation animateIn="zoomIn" animateOnce={true} delay={200}>
            <div className="project__card">
              <div className="project__card__title">
                Cubeenineering and general supplies LTD (Website)
              </div>
              <div className="project__card__description">
                A website for a company that deals with the supply of building
                and construction materials, electrical and plumbing materials,
                and all kinds of hardware. Built with Laravel, PHP, and MySQL.
              </div>
              <div className="view__wrapper">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/OchiengPaul442/cubeengineeringlimited.git"
                  className="project__link__btn"
                >
                  <CircularIcons
                    icon={Github}
                    style={{
                      width: 20,
                      height: 20,
                    }}
                    alt="github"
                    circledimension={{
                      width: 50,
                      height: 50,
                      backgroundColor: "#000",
                      borderRadius: "20%",
                      margin: 0,
                    }}
                  />
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://cubeengineeringltd.com"
                  className="view__project__btn"
                >
                  <Lottie options={defaultOptions} height={30} width={30} />
                </a>
              </div>
            </div>
          </ScrollAnimation>
          <ScrollAnimation animateIn="zoomIn" animateOnce={true} delay={400}>
            <div className="project__card">
              <div className="project__card__title">
                E-LOOK (Website for Mobile App)
              </div>
              <div className="project__card__description">
                A website for a mobile app showcasing the features of the app.
                The app is a cross-platform mobile application that allows users
                to search for and book beauty services.
              </div>
              <div className="view__wrapper">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/E-LOOK/E-look.github.io.git"
                  className="project__link__btn"
                >
                  <CircularIcons
                    icon={Github}
                    style={{
                      width: 20,
                      height: 20,
                    }}
                    alt="github"
                    circledimension={{
                      width: 50,
                      height: 50,
                      backgroundColor: "#000",
                      borderRadius: "20%",
                      margin: 0,
                    }}
                  />
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://e-look.github.io/index.html"
                  className="view__project__btn"
                >
                  <Lottie options={defaultOptions} height={30} width={30} />
                </a>
              </div>
            </div>
          </ScrollAnimation>
          <ScrollAnimation animateIn="zoomIn" animateOnce={true} delay={800}>
            <div className="project__card">
              <div className="project__card__title">
                Cloud chat(chat application)
              </div>
              <div className="project__card__description">
                A chat application built with HTML,CSS, NodeJS, ExpressJS, and
                the socket.io library. It allows users to chat with each other
                in real time.
              </div>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/OchiengPaul442/cloud_chat_1.git"
                className="project__link__btn"
              >
                <CircularIcons
                  icon={Github}
                  style={{
                    width: 20,
                    height: 20,
                  }}
                  alt="github"
                  circledimension={{
                    width: 50,
                    height: 50,
                    backgroundColor: "#000",
                    borderRadius: "20%",
                    margin: 0,
                  }}
                />
              </a>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
};

export default Projects;
