import React from "react";

export default function ProjContent(props) {
  return (
    <div className="project-content">
      <h3 className="project-title">{props.title}</h3>
      <p className="project-description">{props.description}</p>
      <a
        href={props.link}
        className="project-link"
        target="_blank"
        rel="noopener noreferrer"
      >
        View Project
      </a>
    </div>
  );
}
