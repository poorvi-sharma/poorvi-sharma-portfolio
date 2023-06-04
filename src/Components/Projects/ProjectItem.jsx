import React, { useState } from "react";
import "./Project.css";
import "bootstrap/dist/css/bootstrap.min.css";

// $(document).ready(function () {
//   // $(".project-item").load(function () {
//   $("project-content").hide();
//   // }),
//   //   $(".project-item").hover(function () {
//   //     $("project-content").fadeIn();
//   //   });
// });

const ProjectItem = ({ title, description, imageUrl, link, demo_proj }) => {
  return (
    <div className="project-item" style={{ whiteSpace: "pre-line" }}>
      <div className="proj-image-box">
        <img src={imageUrl} alt={title} className="project-image" />
      </div>
      <div className="project-content">
        <h3 className="project-title">{title}</h3>
        <p className="project-description">{description}</p>
        {demo_proj ? (
          <>
            <a href={demo_proj} className="project-link">
              Project Demo
            </a>
            {"  "}
          </>
        ) : (
          <a></a>
        )}
        <a
          href={link}
          className="project-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          View Project
        </a>
      </div>
    </div>
  );
};

export default ProjectItem;
