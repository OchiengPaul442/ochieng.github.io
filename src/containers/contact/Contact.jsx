import React from "react";
import "./contact.css";

const Contact = () => {
  const Email = "ochiengpaul442@gmail.com";
  const mailto = `mailto:${Email}`;

  return (
    <section className="wrapper" id="contact">
      <div className="container">
        <div className="contact__container">
          <div className="contact__box__con">
            <div className="contact__box">
              <div className="contact__box__item">
                <div className="contact__box__item__con">
                  <h1 className="contact__box__item__title">
                    Let Us Work Together On Your Next Project
                  </h1>
                  <p className="contact__box__item__text">
                    I am available for freelance work. If you have a project
                    that you would like to get started, or think you need my
                    help with
                  </p>
                </div>
              </div>
              <div className="contact__box__item">
                <a href={mailto}>
                  <button class="button">
                    <span class="button_lg">
                      <span class="button_sl"></span>
                      <span class="button_text">Contact Me</span>
                    </span>
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
