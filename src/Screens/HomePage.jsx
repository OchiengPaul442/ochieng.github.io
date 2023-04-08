import React from "react";

import Head from "../containers/header/Head";
import Work from "../containers/works/Work";
import Education from "../containers/education/Education";
import Experience from "../containers/experience/Experience";
import Projects from "../containers/projects/Projects";
import Discover from "../containers/discover/Discover";
import Contact from "../containers/contact/Contact";
import Footer from "../containers/footer/Footer";
import Current from "../containers/currents/Currents";

function HomePage() {
  return (
    <>
      <Head />
      <Work />
      <Education />
      <Experience />
      <Projects />
      <Discover />
      <Current />
      <Contact />
      <Footer />
    </>
  );
}

export default HomePage;
