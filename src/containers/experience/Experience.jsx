import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import CircularIcons from "../../components/circularicon/CircularIcons";
import { unra, cases, makererelogo, airQo } from "../../constants";
import "./experience.css";

const Experience = () => {
  // screen width
  const [width, setWidth] = React.useState(window.innerWidth);
  const breakpoint = 768;

  React.useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));
  }, []);

  let results = breakpoint < width ? "white" : "#5a5d87";

  return (
    <section className="wrapper" id="experience">
      <div className="exp_container">
        <div className="experience__banner"></div>
        <ScrollAnimation animateIn="fadeInRight" animateOnce={true}>
          <div
            className="container"
            style={{
              marginTop: 100,
            }}
          >
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
                text="Professional Experience"
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

                <h3 className="job__title">Software Development Intern</h3>
                <p className="company__name">Uganda National Roads Authority</p>

                <p className="job__duration">June 2022 - August 2022</p>

                <p className="job__location">Nakawa, Uganda</p>

                <ul className="job__description">
                  <li>Developed and integrated RESTful APIs using Django.</li>
                  <li>
                    Utilized Angular for frontend development, contributing to a
                    robust laboratory management system.
                  </li>
                  <li>
                    Authored efficient, scalable code for various applications,
                    ensuring optimal performance and user experience.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </ScrollAnimation>
      </div>

      <div className="exp_container">
        <div className="experience__banner_2"></div>
        <ScrollAnimation animateIn="fadeInLeft" animateOnce={true}>
          <div
            className="container"
            style={{
              marginTop: 100,
            }}
          >
            <h2 className="experience__title">
              <CircularIcons
                icon={cases}
                style={{
                  width: "2.5rem",
                  height: "2.5rem",
                }}
                alt="experience"
                circledimension={{
                  width: 60,
                  height: 60,
                }}
                text="Professional Experience"
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
                  icon={makererelogo}
                  style={{
                    width: 85,
                    height: 85,
                  }}
                  alt="unra"
                  circledimension={{
                    width: 120,
                    height: 120,
                  }}
                />

                <h3 className="job__title">
                  Systems Administration Intern (Volunteer)
                </h3>
                <p className="company__name">
                  Makerere University <br /> Directorate for ICT Support (DICTS)
                </p>

                <p className="job__duration">March 2023 - Present</p>

                <p className="job__location">Makerere, Uganda</p>

                <ul className="job__description">
                  <li>Provided ICT support to the university community.</li>
                  <li>
                    Managed virtual machines for the university using PROXMOX.
                  </li>
                  <li>Administered servers and workstations using Linux.</li>
                </ul>
              </div>
            </div>
          </div>
        </ScrollAnimation>
      </div>

      <div className="exp_container">
        <div className="experience__banner"></div>
        <ScrollAnimation animateIn="fadeInRight" animateOnce={true}>
          <div
            className="container"
            style={{
              marginTop: 100,
            }}
          >
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
                text="Professional Experience"
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
                  icon={airQo}
                  style={{
                    width: 70,
                    height: 70,
                  }}
                  alt="unra"
                  circledimension={{
                    width: 120,
                    height: 120,
                  }}
                />

                <h3 className="job__title">Frontend Developer</h3>
                <p className="company__name">AirQo</p>

                <p className="job__duration">June 2023 - Present</p>

                <p className="job__location">Makerere, Uganda</p>

                <ul className="job__description">
                  <li>
                    Developed and integrated RESTful APIs using Django,
                    enhancing the frontend experience.
                  </li>
                  <li>
                    Utilized React for frontend development, contributing to a
                    robust and user-friendly laboratory management system.
                  </li>
                  <li>
                    Authored efficient, scalable frontend code for various
                    applications, ensuring optimal performance and user
                    experience.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default Experience;
