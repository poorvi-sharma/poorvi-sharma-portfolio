import React from "react";
import "./Skill.css";

export default function Skills() {
  const skills = [
    {
      name: "React",
      logo: "https://drive.google.com/uc?export=view&id=1xXuYw1_XTizijxI4CFv3ZFxljpynqPwj",
    },
    {
      name: "JavaScript",
      logo: "https://drive.google.com/uc?export=view&id=1XAV2503zoU_b0fmU3t6eWc873It_XCnq",
    },
    {
      name: "HTML",
      logo: "https://drive.google.com/uc?export=view&id=1NH_rY_utPjfz1JvY_wH9M_BAyphcx1M1",
    },
    {
      name: "CSS",
      logo: "https://drive.google.com/uc?export=view&id=12QgSDi-C268YEUvAio5I2il3RSDD7QtF",
    },

    {
      name: "Bootstrap",
      logo: "https://drive.google.com/uc?export=view&id=1GpkgaxLjNaUwFlAaXdb6WiUpKHhk9G_w",
    },
    {
      name: "C++",
      logo: "https://drive.google.com/uc?export=view&id=1A4_L6lJv-u2NdmOxDlJR5m0IECVHeDAX",
    },
    {
      name: "Java",
      logo: "https://drive.google.com/uc?export=view&id=1h4B8SqWC0-8i101Ko8wEKeQ7gSZeod3g",
    },
    {
      name: "MySQL",
      logo: "https://drive.google.com/uc?export=view&id=1IxI539KFtyFhAoTLvoV-o_xK-wN7Hivl",
    },
  ];
  return (
    <>
      <div className="skills_div">
        <div className="skills_cloud">
          <div className="cloud"></div>
          <div className="cloud"></div>
          <div
            className="cloud"
            style={{ marginLeft: "-45vw", boxShadow: "none" }}
          ></div>
          <div className="skill_heading">
            <h2>Skills</h2>
          </div>
        </div>
        <div className="skills_drop">
          <marquee
            direction="down"
            height="170px"
            behavior="sliding"
            vspace="0"
          >
            {skills.map((skill, index) => (
              <div className="drop">
                <img className="logo" src={skill.logo} alt={skill.name} />
              </div>
            ))}
          </marquee>
        </div>
        <div className="pond"></div>
      </div>
    </>
  );
}
