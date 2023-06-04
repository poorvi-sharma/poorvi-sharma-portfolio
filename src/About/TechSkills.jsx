import React from "react";

const TechSkills = () => {
  const skills = [
    {
      name: "JavaScript",
      logo: "https://drive.google.com/uc?export=view&id=1xXuYw1_XTizijxI4CFv3ZFxljpynqPwj",
    },
    {
      name: "React",
      logo: "react-logo.png",
    },
    {
      name: "HTML",
      logo: "html-logo.png",
    },
    {
      name: "CSS",
      logo: "css-logo.png",
    },
    {
      name: "Node.js",
      logo: "nodejs-logo.png",
    },
  ];

  return (
    <div>
      <h2>Tech Skills</h2>
      <div className="card-container">
        <br />
        {skills.map((skill, index) => (
          <div className="card" key={index}>
            <img className="logo" src={skill.logo} alt={skill.name} />
            <div className="content">
              <h3>{skill.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechSkills;
