import React from "react";
import "./contact.css";
import { RecBtn } from "../../components/buttons/Buttons";
import { contact } from "../../constants";
import CircularIcons from "../../components/circularicon/CircularIcons";

const Contact = () => {
  return (
    <section className="wrapper" id="contact">
      <h2 className="project__title">
        <CircularIcons
          icon={contact}
          style={{
            width: "2.5rem",
            height: "2.5rem",
            marginLeft: "3px",
          }}
          circledimension={{
            width: 64,
            height: 64,
          }}
          text="Contact Me"
          textstyle={{
            fontSize: "30px",
            fontWeight: "bold",
            color: "#5a5d87",
          }}
        />
      </h2>
      <div className="contact__form__container container">
        <form className="contact__form">
          <div className="contact__heading">
            <h2 className="contact__form__title">Want to work with Me</h2>
            <p>Reach out to me using the form below.</p>
          </div>
          <div className="contact__form__group">
            <label htmlFor="name">Name</label>
            <input type="text" name="name" id="name" placeholder="Your name" />
          </div>
          <div className="contact__form__group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Your email"
            />
          </div>
          <div className="contact__form__group">
            <label htmlFor="message">Message</label>
            <textarea name="message" id="message" placeholder="Your message" />
          </div>
          <RecBtn
            text="Send"
            style={{
              width: "100%",
              padding: "1rem 0",
              fontSize: "1.5rem",
              fontWeight: "500",
              borderRadius: "5px",
              backgroundColor: "#1e1e1e",
              color: "#fff",
              border: "none",
              cursor: "pointer",
              transition: "all 0.3s ease-in-out",
            }}
          />
        </form>
      </div>
    </section>
  );
};

export default Contact;
