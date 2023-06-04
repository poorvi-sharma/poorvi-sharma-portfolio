import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Resume.css";

const Resume = () => {
  useEffect(() => {
    const handleScroll = () => {
      const parallaxContent = document.querySelector(".resume_text");
      const scrolled = window.pageYOffset;
      parallaxContent.style.transform = `translateX(${scrolled * 0.2}px)`;
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="resume_div">
      <div className="resume_text parallax-content">
        <a href="https://drive.google.com/file/d/1EwHTV64gtpwaU1T_5Un_M45z0lQQ1CnI/view?usp=sharing">
          My Resume <span> &gt; &gt;</span>
        </a>
      </div>
    </div>
  );
};

export default Resume;
