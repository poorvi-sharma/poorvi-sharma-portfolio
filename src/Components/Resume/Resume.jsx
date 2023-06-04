import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import SkillList from "./SkillList";
import "./Resume.css";

const Resume = () => {
  const skills = [
    { name: "JavaScript", level: 80 },
    { name: "React", level: 90 },
    { name: "HTML", level: 70 },
    { name: "CSS", level: 60 },
  ];

  return (
    <div>
      <div style={{ width: "100%", border: "solid", height: "20vh" }}>
        <div className="container skills_div">
          <h1>Skills</h1>
        </div>
      </div>
      <div className="skill_list">
        <SkillList skills={skills} />
      </div>
    </div>
  );
};

export default Resume;
