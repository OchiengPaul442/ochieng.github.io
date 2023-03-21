import React from "react";
import CircularIcons from "../../components/circularicon/CircularIcons";
import { unra, cases } from "../../constants";
import "./experience.css";

const Experience = () => {
  // screen width
  const [width, setWidth] = React.useState(window.innerWidth);
  const breakpoint = 768;

  React.useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));
  }, []);

  let results = breakpoint < width ? "white" : "black";

  return (
    <section className="wrapper" id="experience">
      <div className="experience__banner"></div>
      <div className="container">
        <h2 className="experience__title">
          <CircularIcons
            icon={cases}
            style={{
              width: "2.5rem",
              height: "2.5rem",
            }}
            alt="experience"
            circledimension={{
              width: 64,
              height: 64,
            }}
            text="Experience"
            textstyle={{
              fontSize: "30px",
              fontWeight: "bold",
              color: results,
            }}
          />
        </h2>
        <div className="experience__card">
          <div className="experience__card__body">
            <CircularIcons
              icon={unra}
              style={{
                width: 60,
                height: 85,
              }}
              alt="unra"
              circledimension={{
                width: 120,
                height: 120,
              }}
            />

            <h3 className="job__title">Software Engineer Intern</h3>
            <p className="company__name">Uganda National Roads Authority</p>

            <p className="job__duration">June 2022 - August 2022</p>

            <p className="job__location">Nakawa</p>

            <ul className="job__description">
              <li>Implemented RESTful APIs in Django.</li>
              <li>
                Used Angular for frontend development of a laboratory management
                system.
              </li>
              <li>Wrote scalable code for applications.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
