import React from "react";
import Lottie from "react-lottie";

import { ReactComponent as Hub } from "../../assets/icons/hub.svg";
import { ReactComponent as Php } from "../../assets/icons/php.svg";
import { ReactComponent as Mysql } from "../../assets/icons/mysql.svg";
import { ReactComponent as Tailwind } from "../../assets/icons/tailwind.svg";
import { ReactComponent as Vscode } from "../../assets/icons/vscode.svg";
import { ReactComponent as Stackover } from "../../assets/icons/stackover.svg";

function Discover() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: require("../../assets/animations/discover.json"),
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <>
      <section className="Github__link wrapper">
        <Lottie options={defaultOptions} height={200} width={200} />
        <h1>For More, Visit My GitHub Page</h1>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/OchiengPaul442"
        >
          <button className="learn-more">
            <span className="circle" aria-hidden="true">
              <span className="icon arrow"></span>
            </span>
            <span className="button-text"> Discover More</span>
          </button>
        </a>
      </section>
      <section className="wrapper">
        <div className="other__tool__text">
          <h1>Other Tools I Use</h1>
        </div>
        <div className="other__tools ">
          <div className="other__tools__container">
            <Vscode width={60} height={60} />
            <Stackover width={60} height={60} />
            <Php width={60} height={60} />
            <Mysql width={60} height={60} />
            <Tailwind width={40} height={60} />
            <Hub width={60} height={60} />
          </div>
        </div>
      </section>
    </>
  );
}

export default Discover;
