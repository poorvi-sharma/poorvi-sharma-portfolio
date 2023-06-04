import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Name.css";
import TypeWriterEffect from "react-typewriter-effect";
import { Link } from "react-router-dom";

export default function Name() {
  const [Class, SetClass] = useState(false);

  const flip = () => {
    SetClass(true);
  };
  const flip_back = () => {
    SetClass(false);
  };

  const prof_img =
    "https://drive.google.com/uc?export=view&id=1-RkggMfpKcYdwrs-eQjDlEo-6Endvdb-";
  return (
    <>
      <div className="name">
        <div className="bg-img"></div>
        <div className="row name_row container" id="card">
          <div
            className="col-7 desc_card col-lg-7 col-md-5 col-sm-12"
            onMouseEnter={flip}
            onMouseLeave={flip_back}
          >
            <div className={`front desc_div ${Class ? "front_flip" : ""}`}>
              <span>Hello, I am Poorvi Sharma</span>
              {/* { */}
              <TypeWriterEffect
                startDelay={1000}
                cursorColor="#EEE8F1"
                multiText={[
                  "a student...",
                  "front-end developer...",
                  "Welcome to my portfolio website! I'm a passionate Front-End Developer and final-year MCA student.",
                ]}
                multiTextDelay={300}
                typeSpeed={50}
                skipAddStyles={false}
                textStyle={{
                  fontFamily: "Special Elite,cursive",
                  fontSize: "4vh",
                  textAlign: "center",
                  color: "black",
                }}
              />
              {/* } */}
            </div>
            <div
              className={`desc_div back ${Class ? "back_flip" : ""}`}
              onMouseEnter={flip}
              onMouseLeave={flip_back}
            >
              This portfolio website serves as a showcase of my skills. Here,
              you'll find a glimpse of creative endeavors that highlight my
              abilities and problem-solving approach.
              <br />
              Thank you for visiting my portfolio website. However before
              departing, please{" "}
              <Link
                className="explore"
                to="/About"
                onMouseEnter={(event) => event.preventDefault()}
              >
                explore.
              </Link>
            </div>
          </div>
          <div className="col-5 col-lg-5 col-md-12 col-sm-12">
            <div className="pic_div">
              <img className="img-fluid" src={prof_img} alt="prof_img" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
