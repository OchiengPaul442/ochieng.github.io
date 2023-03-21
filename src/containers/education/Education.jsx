import React from "react";
import "./education.css";
import CircularIcons from "../../components/circularicon/CircularIcons";
import { books } from "../../constants";
import Scroll from "../../components/scroll/Scroll";

const Education = () => {
  return (
    <section className="wrapper" id="education">
      <span className="bgbanner"></span>
      <div className="container">
        <div className="education__container">
          <h2 className="education__title">
            <CircularIcons
              icon={books}
              style={{
                width: "2.5rem",
                height: "2.5rem",
              }}
              alt="education"
              circledimension={{
                width: 64,
                height: 64,
              }}
              text="Education"
              textstyle={{
                fontSize: "30px",
                fontWeight: "bold",
                color: "white",
              }}
            />
          </h2>
          <div className="education__content">
            <div className="education__content__item">
              <h1 className="education__content__item__title">
                Makerere University
              </h1>
              <h4>Bachelor of Science in Computer Science</h4>
              <p className="education__content__item__date">2020 - current</p>
            </div>
          </div>
        </div>

        <div className="progress__bars">
          <h1 className="progress__bars__title">Proficiency</h1>
          <div className="progress__bars__container">
            <div className="progress__bars__item">
              <h3 className="progress__bars__item__title">FRONT END/ DESIGN</h3>
              <div className="progress__bars__item__bar">
                <div
                  className="progress__bars__item__bar__fill"
                  style={{ width: "90%" }}
                ></div>
              </div>
            </div>
            <div className="progress__bars__item">
              <h3 className="progress__bars__item__title">BACKEND</h3>
              <div className="progress__bars__item__bar">
                <div
                  className="progress__bars__item__bar__fill"
                  style={{ width: "70%" }}
                ></div>
              </div>
            </div>
            <div className="progress__bars__item">
              <h3 className="progress__bars__item__title">PROGRAMMING</h3>
              <div className="progress__bars__item__bar">
                <div
                  className="progress__bars__item__bar__fill"
                  style={{ width: "60%" }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* smooth scroll to next section */}
      <Scroll
        to="experience"
        style={{
          position: "absolute",
          bottom: "70px",
          right: "20px",
        }}
      />
    </section>
  );
};

export default Education;
