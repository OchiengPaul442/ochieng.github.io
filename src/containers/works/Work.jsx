import React from "react";
import Lottie from "react-lottie";
import animatedata1 from "../../assets/animations/data.json";
import animatedata3 from "../../assets/animations/data3.json";
import "./work.css";
import CircularIcons from "../../components/circularicon/CircularIcons";
import ScrollAnimation from "react-animate-on-scroll";
import {
  css,
  html,
  js,
  python,
  npm,
  bootstrap,
  django,
  figma,
  reps,
  node,
  bolt,
  laravel,
} from "../../constants";

const Work = () => {
  // screen width
  const [width, setWidth] = React.useState(window.innerWidth);
  const breakpoint = 768;

  React.useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));
  }, []);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animatedata1,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const defaultOptions_2 = {
    loop: true,
    autoplay: true,
    animationData: animatedata3,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <section className="wrapper" id="work">
      <div className="container">
        <div className="work__title">
          <h1>What I Do</h1>
        </div>
        <div className="work__container">
          <ScrollAnimation animateIn="fadeInLeft" animateOnce={true}>
            <div className="work__left">
              <Lottie
                options={defaultOptions_2}
                height={breakpoint < width ? 400 : 300}
                width={breakpoint < width ? 400 : 300}
              />
            </div>
          </ScrollAnimation>
          <div className="work__right">
            <h1 className="work__right__title">Web Development</h1>
            <span className="circularicon_wrapper">
              <CircularIcons
                icon={css}
                style={{
                  width: 34,
                  height: 34,
                  marginTop: 3,
                }}
                alt="css"
                circledimension={{
                  width: 64,
                  height: 64,
                }}
              />
              <CircularIcons
                icon={html}
                style={{
                  width: 34,
                  height: 34,
                  marginTop: 3,
                }}
                alt="html"
                circledimension={{
                  width: 64,
                  height: 64,
                }}
              />
              <CircularIcons
                icon={js}
                style={{
                  width: 34,
                  height: 34,
                  marginTop: 3,
                }}
                alt="js"
                circledimension={{
                  width: 64,
                  height: 64,
                }}
              />
              <CircularIcons
                icon={python}
                style={{
                  width: 34,
                  height: 34,
                  marginTop: 3,
                }}
                alt="python"
                circledimension={{
                  width: 64,
                  height: 64,
                }}
              />
              <CircularIcons
                icon={laravel}
                style={{
                  width: 34,
                  height: 34,
                  marginTop: 3,
                }}
                alt="python"
                circledimension={{
                  width: 64,
                  height: 64,
                }}
              />
              <CircularIcons
                icon={npm}
                style={{
                  width: 34,
                  height: 34,
                  marginTop: 3,
                }}
                alt="npm"
                circledimension={{
                  width: 64,
                  height: 64,
                }}
              />
              <CircularIcons
                icon={django}
                style={{
                  width: 34,
                  height: 34,
                  marginTop: 3,
                }}
                alt="django"
                circledimension={{
                  width: 64,
                  height: 64,
                }}
              />
              <CircularIcons
                icon={bootstrap}
                style={{
                  width: 34,
                  height: 34,
                  marginTop: 3,
                }}
                alt="bootstrap"
                circledimension={{
                  width: 64,
                  height: 64,
                }}
              />
              <CircularIcons
                icon={reps}
                style={{
                  width: 34,
                  height: 34,
                  marginTop: 3,
                }}
                alt="reps"
                circledimension={{
                  width: 64,
                  height: 64,
                }}
              />
            </span>
            <div
              style={{
                marginTop: "15px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <span className="desc_info">
                <img
                  src={bolt}
                  alt="bolt"
                  style={{ marginRight: "8px", width: 20, height: 20 }}
                />
                <p>Building responsive Single-Page-Apps in React.js</p>
              </span>
              <span className="desc_info">
                <img
                  src={bolt}
                  alt="bolt"
                  style={{ marginRight: "8px", width: 20, height: 20 }}
                />
                <p>Building E-commerce sites in Laravel</p>
              </span>
              <span className="desc_info">
                <img
                  src={bolt}
                  alt="bolt"
                  style={{ marginRight: "8px", width: 20, height: 20 }}
                />
                <p>Building RESTful APIs in Django & Django REST Framework</p>
              </span>
            </div>
          </div>
        </div>
        <div className="work__container">
          <div className="work__left">
            <ScrollAnimation animateIn="fadeInRight" animateOnce={true}>
              <Lottie
                options={defaultOptions}
                height={breakpoint < width ? 400 : 300}
                width={breakpoint < width ? 400 : 300}
              />
            </ScrollAnimation>
          </div>
          <div className="work__right">
            <h1 className="work__right__title">Mobile Development</h1>
            <span className="circularicon_wrapper">
              <CircularIcons
                icon={reps}
                style={{
                  width: 34,
                  height: 34,
                  marginTop: 3,
                }}
                alt="reps"
                circledimension={{
                  width: 64,
                  height: 64,
                }}
              />
              <CircularIcons
                icon={node}
                style={{
                  width: 34,
                  height: 34,
                  marginTop: 3,
                }}
                alt="node"
                circledimension={{
                  width: 64,
                  height: 64,
                }}
              />
              <CircularIcons
                icon={figma}
                style={{
                  width: 34,
                  height: 34,
                  marginTop: 3,
                }}
                alt="figma"
                circledimension={{
                  width: 64,
                  height: 64,
                }}
              />
            </span>
            <div
              style={{
                marginTop: "15px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <span className="desc_info">
                <img
                  src={bolt}
                  alt="bolt"
                  style={{ marginRight: "8px", width: 20, height: 20 }}
                />
                <p>Experience in building mobile apps in React Native</p>
              </span>
              <span className="desc_info">
                <img
                  src={bolt}
                  alt="bolt"
                  style={{ marginRight: "8px", width: 20, height: 20 }}
                />
                <p>Use Figma to design the UI/UX of the mobile apps I build</p>
              </span>
              <span className="desc_info">
                <img
                  src={bolt}
                  alt="bolt"
                  style={{ marginRight: "8px", width: 20, height: 20 }}
                />
                <p>
                  Building Scalable apps using Node.js & Express.js for the
                  backend
                </p>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
