import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom"; // Import useLocation
import Home from "./component/Home";
import About from "./component/About";
import Header from "./component/Header";
import Contact from "./component/Contact";
import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Skills from "./component/Skills";
import Projects from "./component/Projects";
import Footer from "./component/Footer";

function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "light";
  });

  const [showBackToTop, setShowBackToTop] = useState(false);

  const location = useLocation(); // Get the current route

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  useEffect(() => {
    // AOS.init();
    // AOS.refresh();

    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowBackToTop(true); // Show back-to-top button when scrolled down
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className={`App ${theme}`}>
      <Header theme={theme} toggleTheme={toggleTheme} />
      <Home theme={theme} toggleTheme={toggleTheme} />
      <About theme={theme} toggleTheme={toggleTheme} />
      <Skills theme={theme} toggleTheme={toggleTheme} />
      <Projects theme={theme} toggleTheme={toggleTheme} />
      <Contact theme={theme} toggleTheme={toggleTheme} />
      <Footer theme={theme} toggleTheme={toggleTheme} />

      {/* Back to Top Button */}
      {location.pathname !== "/" && showBackToTop && ( // Show only when not on the home page
        <button
          className={`back-to-top ${theme} ${showBackToTop ? "show" : ""}`}
          onClick={scrollToTop}
        >
          ↑
        </button>
      )}
    </div>
  );
}

export default App;
