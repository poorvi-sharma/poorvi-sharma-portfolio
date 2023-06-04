import React, { useEffect } from "react";
import "./About.css";
import ReadMoreComponent from "./ReadMoreComponent";

export default function IntroText() {
  const text =
    " Welcome to my portfolio website! I'm thrilled to have you here.\nI am a passionate and creative individual who has dedicated myself to various fields, including technology, design, and innovation. With a solid foundation in these areas, I strive to bring unique ideas to life and make a positive impact through my work.I have honed my skills in several domains.\n I hope you enjoy exploring my work, and I'm excited to discuss potential collaborations or answer any questions you may have. Let's embark on this journey together, where creativity and technology converge to shape a better future. ";
  const maxLength = 200;
  return (
    <>
      <div className="IntroText ">
        <h4>
          Allow me to introduce myself and provide you with a glimpse into my
          world.
        </h4>
        <ReadMoreComponent text={text} maxLength={maxLength} />
      </div>
    </>
  );
}
