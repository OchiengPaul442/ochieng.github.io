import React from "react";
import "./current.css";

function Currents() {
  return (
    <section className="wrapper">
      <div className="container">
        <div className="other__tool__text">
          <h1>Current Running Project</h1>
        </div>
        <div className="current__project">
          <div className="Project_intro">
            <h1>PROMED APP</h1>
            <p>
              Promed is a mental health mobile app that will help users cope
              with anxiety and depression by providing them with four main
              features: a discussion board, a chatbot, a diagnosis tool and a
              mood tracker. The app is currently in development and will be
              released in the coming months.
            </p>
          </div>
          <div className="current__project__image">
            <img
              src={require("../../assets/images/1.jpg")}
              alt="current project"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Currents;
