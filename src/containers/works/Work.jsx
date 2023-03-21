import React from "react";
import Lottie from "react-lottie";
import animatedata1 from "../../assets/animations/data.json";
import animatedata3 from "../../assets/animations/data3.json";
import "./work.css";
import CircularIcons from "../../components/circularicon/CircularIcons";
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
} from "../../constants";
import Scroll from "../../components/scroll/Scroll";

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
          <div className="work__left">
            <Lottie
              options={defaultOptions_2}
              height={breakpoint < width ? 400 : 300}
              width={breakpoint < width ? 400 : 300}
            />
          </div>
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
                <p>
                  I'm a Frontend Developer based in Nairobi, Kenya. I specialize
                </p>
              </span>
              <span className="desc_info">
                <img
                  src={bolt}
                  alt="bolt"
                  style={{ marginRight: "8px", width: 20, height: 20 }}
                />
                <p>
                  I'm a Frontend Developer based in Nairobi, Kenya. I specialize
                </p>
              </span>
              <span className="desc_info">
                <img
                  src={bolt}
                  alt="bolt"
                  style={{ marginRight: "8px", width: 20, height: 20 }}
                />
                <p>
                  I'm a Frontend Developer based in Nairobi, Kenya. I specialize
                </p>
              </span>
            </div>
          </div>
        </div>
        <div className="work__container">
          <div className="work__left">
            <Lottie options={defaultOptions} height={400} width={400} />
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
            <div style={{ marginTop: "15px" }}>
              <span className="desc_info">
                <img
                  src={bolt}
                  alt="bolt"
                  style={{ marginRight: "8px", width: 20, height: 20 }}
                />
                <p>
                  I'm a Frontend Developer based in Nairobi, Kenya. I specialize
                </p>
              </span>
              <span className="desc_info">
                <img
                  src={bolt}
                  alt="bolt"
                  style={{ marginRight: "8px", width: 20, height: 20 }}
                />
                <p>
                  I'm a Frontend Developer based in Nairobi, Kenya. I specialize
                </p>
              </span>
              <span className="desc_info">
                <img
                  src={bolt}
                  alt="bolt"
                  style={{ marginRight: "8px", width: 20, height: 20 }}
                />
                <p>
                  I'm a Frontend Developer based in Nairobi, Kenya. I specialize
                </p>
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* smooth scroll to next section */}
      <Scroll
        to="education"
        style={{
          position: "absolute",
          bottom: "270px",
          right: "20px",
        }}
      />
    </section>
  );
};

export default Work;
