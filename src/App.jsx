import Home from "./components/Home";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProjectSlider from "./components/Projects";
import Experience from "./components/Experience";
import Testimonials from "./components/Testimonials";
// import AboutMe from "./components/AboutMe";
import AboutMe1 from "./components/AboutMe";
import "./components/AboutMe.css"; // Add this line

function App() {
  return (
    <div className="App scroll-smooth ">
      <Home />
      <AboutMe1 />
      <Experience />
      <ProjectSlider />
      <Testimonials />
      {/* <AboutMe /> */}
    </div>
  );
}

export default App;
