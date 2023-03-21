import React from "react";
import "./footer.css";
import {
  location,
  paul,
  Twitter,
  Facebook,
  Linkedin,
  Github,
} from "../../constants";
import CircularIcons from "../../components/circularicon/CircularIcons";

const Footer = () => {
  return (
    <section className="footer__wrapper">
      <div className="container">
        <div className="footer__con">
          <div className="left__side">
            <h1>Reach Out To Me!</h1>
            <h4>
              I am always open to discussing new projects, creative ideas or
              opportunities to be part of your visions.
            </h4>
            <p>Web and Mobile App Developer</p>
            <button className="location__btn">
              <img src={location} alt="location" />
              <span>Kampala, Uganda</span>
            </button>
            <div className="social__icons">
              <CircularIcons
                icon={Twitter}
                linkto="https://twitter.com/OchiengTech"
                style={{
                  width: 20,
                  height: 20,
                }}
                alt="twitter"
                circledimension={{
                  width: 40,
                  height: 40,
                  backgroundColor: "Black",
                }}
              />
              <CircularIcons
                icon={Github}
                linkto="https://github.com/OchiengPaul442"
                style={{
                  width: 20,
                  height: 20,
                }}
                alt="css"
                circledimension={{
                  width: 40,
                  height: 40,
                  backgroundColor: "Black",
                }}
              />
              <CircularIcons
                icon={Facebook}
                linkto="https://www.facebook.com/ochieng.paul.714"
                style={{
                  width: 20,
                  height: 20,
                }}
                alt="facebook"
                circledimension={{
                  width: 40,
                  height: 40,
                  backgroundColor: "Black",
                }}
              />
              <CircularIcons
                icon={Linkedin}
                linkto="https://www.linkedin.com/in/paulochieng442"
                style={{
                  width: 20,
                  height: 20,
                }}
                alt="linkedin"
                circledimension={{
                  width: 40,
                  height: 40,
                  backgroundColor: "Black",
                }}
              />
            </div>
          </div>
          <div className="right__side">
            <img src={paul} alt="profilepic" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
