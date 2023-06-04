import React from "react";
import Name from "./Components/Name/Name";
import About from "./Components/About/About";
import Project from "./Components/Projects/Project";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import ContactPage from "./Components/Contact/ContactPage";
import { Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/poorvi-sharma-portfolio/" element={<Name />} />
        <Route
          exact
          path="/poorvi-sharma-portfolio/about"
          element={<About />}
        />
        <Route
          exact
          path="/poorvi-sharma-portfolio/Project"
          element={<Project />}
        />
        <Route
          exact
          path="/poorvi-sharma-portfolio/ContactPage"
          element={<ContactPage />}
        />
      </Routes>
      <Footer />
    </>
  );
}
