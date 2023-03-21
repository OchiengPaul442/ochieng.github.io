import React from "react";
import "./modal.css";
import { ReactComponent as Twitter } from "../../assets/icons/twitter.svg";
import { ReactComponent as Github } from "../../assets/icons/github.svg";
import { ReactComponent as Linkedin } from "../../assets/icons/linkedin.svg";
import { ReactComponent as Facebook } from "../../assets/icons/facebook.svg";

const Modal = (props) => {
  return (
    <div className={props.show}>
      <div className="modal__wrapper">
        <div className="modal__container">
          <div className="modal__header">
            <h1 className="modal__title">OCHIENG</h1>
            <button onClick={props.close} className="modal__close">
              X
            </button>
          </div>
          <div className="separator"></div>
          <div className="modal__body">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://twitter.com/OchiengTech"
            >
              <Twitter fill="black" width={20} height={20} />
              <span>Twitter</span>
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.facebook.com/ochieng.paul.714"
            >
              <Facebook fill="black" width={20} height={20} />
              <span>Facebook</span>
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/paulochieng442"
            >
              <Linkedin fill="black" width={20} height={20} />
              <span>Linkedin</span>
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/OchiengPaul442"
            >
              <Github fill="black" width={20} height={20} />
              <span>Github</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
