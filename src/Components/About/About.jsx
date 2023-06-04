import React, { useEffect } from "react";
import "./About.css";
import IntroText from "./IntroText";
import Skills from "./Skills";
import Resume from "./Resume";

export default function About() {
  useEffect(() => {
    const handleScroll = () => {
      const parallaxContent = document.querySelector(".parallax-content");
      const scrolled = window.pageYOffset;
      parallaxContent.style.transform = `translate3d(0, ${
        scrolled * 0.2
      }px, 0)`;
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="about">
      <div
        className="parllax-container"
        style={{ position: "relative", overflow: "hidden", height: "70vh" }}
      >
        <div className="About_container parallax-content">
          <IntroText />
        </div>
      </div>

      <Resume />
      <Skills />
    </div>
  );
}
