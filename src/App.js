import Head from "./containers/header/Head";
import Work from "./containers/works/Work";
import Education from "./containers/education/Education";
import Experience from "./containers/experience/Experience";
import Projects from "./containers/projects/Projects";
import Contact from "./containers/contact/Contact";
import Footer from "./containers/footer/Footer";
import Lottie from "react-lottie";
import "./static/main.css";

function App() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: require("./assets/animations/discover.json"),
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className="App">
      <Head />
      <Work />
      <Education />
      <Experience />
      <Projects />
      <div className="Github__link wrapper">
        <Lottie options={defaultOptions} height={200} width={200} />
        <h1>For More, Visit My GitHub Page</h1>
        <a href="@">
          <button className="learn-more">
            <span className="circle" aria-hidden="true">
              <span className="icon arrow"></span>
            </span>
            <span className="button-text"> Discover More</span>
          </button>
        </a>
      </div>
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
