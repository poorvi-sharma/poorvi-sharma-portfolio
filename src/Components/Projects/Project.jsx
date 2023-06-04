import React, { useEffect } from "react";
import ProjectItem from "./ProjectItem";
import "./Project.css";

const Portfolio = () => {
  const projects = [
    {
      title: "PustakDaan",
      description:
        "A donation website.This website allows the organization to register and receive donations from donors online.Using HTML, CSS, Bootstrap,and jQuery.",
      demo_proj: "https://poorvis007in.wixsite.com/poorvi-portfolio/about-8",
      imageUrl:
        "https://drive.google.com/uc?export=view&id=15zZoud4G86Of_jctLf19NUNjMvQHNXCk",
      link: "https://github.com/poorvi-sharma/Grant-Get-Website-Front-End",
    },
    {
      title: "RSVI Website",
      description:
        "Contributed to the development of the organization’s official website. Added the routing, modal, and some other dynamic functionalities in both desktop and mobile view.Skills: React.js, HTML, CSS, Bootstrap, GitHub, VS Code.",
      demo_proj: "https://rsvi-6a789.web.app/",
      imageUrl:
        "https://drive.google.com/uc?export=view&id=1gvea4e3mSRqexuBkLURO7-qFLs3Of83n",
      link: "https://github.com/poorvi-sharma/RSVI_Website",
    },
    {
      title: "KeepNotes",
      description:
        "This web application allows the user to add a note, save it and then later edit it as well. It incorporates the CRUD operations. Using CSS, HTML, and JavaScript",
      imageUrl:
        "https://drive.google.com/uc?export=view&id=1WEljwoGTKXpKFPhP7LyEBPAVi0WqYdli",
      link: "https://github.com/poorvi-sharma/KeepNotes",
    },
    {
      title: "CRUD App",
      description:
        "This is s simple CRUD operation application which stores the user and let's the user perform different operations.\nSkill: React, SpringBoot and SQL",
      imageUrl:
        "https://drive.google.com/uc?export=view&id=1WmStmU9Z5vthQziIJkFT_0KhKNzutw17",
      link: "https://example.com/project2",
    },
    {
      title: "ChatBot",
      description:
        "This is a chatbot app in which we can feed a story and then ask questions about it,.\nSkill: ML, NLP, Sentimental Analysis, Pandas and Spacy",
      imageUrl:
        "https://drive.google.com/uc?export=view&id=17kjkIaO7h9eKwXmGBFWeI8aWfKA5tYNf",
      link: "https://example.com/project1",
    },
    {
      title: "ML Projects",
      description:
        "Some machine learning mini projects. These peojects include Parkinson's Disease Prediction, Credit Card Fraud Detection, Beast Cancer Detection study using regression.",
      imageUrl:
        "https://drive.google.com/uc?export=view&id=1Ph5NT_4tk2IDNLLCRp-udn4BGrk75AYi",
      link: "https://github.com/poorvi-sharma/ML_TCR_PROJECTS",
    },
    // Add more projects as needed
  ];
  useEffect(() => {
    const handleScroll = () => {
      const parallaxContent = document.querySelector(".parallax-content");
      const scrolled = window.pageYOffset;
      parallaxContent.style.transform = `translate3d(0, ${
        scrolled * 0.4
      }px, 0)`;
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="">
      <div className="container-fluid p-5 proj_con parallax-container">
        <div className="projHead container p-4 parallax-content">
          <h2>My Projects</h2>
          <p>
            In this page I would like to share some of the projects I have
            worked on my own or for internships or for college. This will
            provide some idea about my work.
          </p>
        </div>
      </div>
      <div className="project-list container-md p-4">
        {projects.map((project, index) => (
          <ProjectItem
            key={index}
            title={project.title}
            demo_proj={project.demo_proj}
            description={project.description}
            imageUrl={project.imageUrl}
            link={project.link}
          />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
