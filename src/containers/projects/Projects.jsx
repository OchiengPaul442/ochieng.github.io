import React from "react";
import "./project.css";
import CircularIcons from "../../components/circularicon/CircularIcons";
import { laptop, Github } from "../../constants";
import Scroll from "../../components/scroll/Scroll";

const Projects = () => {
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
          <div className="project__card">
            <div className="project__card__title">Project 1</div>
            <div className="project__card__description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              quod, voluptate, quia, voluptates quas voluptatibus quibusdam quae
              quidem quos nemo voluptatum. Quisquam, quae. Quisquam, quae.
            </div>
            <a href="@" className="project__link__btn">
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
          <div className="project__card">
            <div className="project__card__title">Project 1</div>
            <div className="project__card__description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              quod, voluptate, quia, voluptates quas voluptatibus quibusdam quae
              quidem quos nemo voluptatum. Quisquam, quae. Quisquam, quae.
            </div>
            <a href="@" className="project__link__btn">
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
          <div className="project__card">
            <div className="project__card__title">Project 1</div>
            <div className="project__card__description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              quod, voluptate, quia, voluptates quas voluptatibus quibusdam quae
              quidem quos nemo voluptatum. Quisquam, quae. Quisquam, quae.
            </div>
            <a href="@" className="project__link__btn">
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
          <div className="project__card">
            <div className="project__card__title">Project 1</div>
            <div className="project__card__description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              quod, voluptate, quia, voluptates quas voluptatibus quibusdam quae
              quidem quos nemo voluptatum. Quisquam, quae. Quisquam, quae.
            </div>
            <a href="@" className="project__link__btn">
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
        </div>
      </div>
      {/* smooth scroll to next section */}
      <Scroll
        to="contact"
        style={{
          position: "absolute",
          bottom: "110px",
          right: "20px",
        }}
      />
    </section>
  );
};

export default Projects;
