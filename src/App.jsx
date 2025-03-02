import { useRef } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Carousel from "./Components/Carousel.jsx";
import Faq from "./Components/Faq.jsx";
import Footer from "./Components/Footer.jsx";
import Indoors from "./Components/Indoors.jsx";
import Navbar from "./Components/Navbar";
import Premium from "./Components/Premium.jsx";
import Property from "./Components/Property.jsx";
import Sectionone from "./Components/Sectionone";
import Selection from "./Components/Selection.jsx";
import ScrollToTop from "react-scroll-to-top";
import { useEffect,useState } from "react";


function App() {
  const [activeSection, setActiveSection] = useState(""); // Track active section

  useEffect(() => {
    Aos.init({
      offset: 100,
      duration: 1000,
      easing: "ease-in-size",
      delay: 900,
    });
    Aos.refresh();
  }, []);

  // Section references
  const sectiononeRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const servicesRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (section) => {
    if (section === "homeRef") {
        window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
        const targetRef = { sectiononeRef, aboutRef, projectsRef, servicesRef, contactRef }[section];
        targetRef?.current?.scrollIntoView({ behavior: "smooth" });
    }
  };

  //  Track the active section using Intersection Observer (for the active navbar buttons)
  useEffect(() => {
    const observerOptions = { 
      root: null, //  Uses the viewport
      threshold: 0.25, // links becomes active when 25% of a particular section is visible
      rootMargin: "-10% 0px -15% 0px", // Adjust detection timing
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id); // Set active section ID
          console.log("Active Section:", entry.target.id);
          // console.log("Active Section:", entry.target.id);
          // console.log("About Ref:", aboutRef?.current);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    [sectiononeRef, aboutRef, projectsRef, servicesRef, contactRef].forEach((ref) => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => {
      [sectiononeRef, aboutRef, projectsRef, servicesRef, contactRef].forEach((ref) => {
        if (ref.current) observer.unobserve(ref.current);
      });
    };
  }, []);

  return (
    <>
      <Navbar scrollToSection={scrollToSection} activeSection={activeSection} />
      <Sectionone sectiononeRef={sectiononeRef} id="sectionone" />
      <Premium aboutRef={aboutRef} id="about" />
      <Selection />
      <Property projectsRef={projectsRef} id="projects" />
      <Indoors servicesRef={servicesRef} id="services" />
      <Carousel />
      <Faq />
      <Footer contactRef={contactRef} id="contact" />
      <ScrollToTop smooth width="39" height="20" color="black" />
    </>
  )
}

export default App
