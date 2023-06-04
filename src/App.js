import React from "react";
import Name from "./Name/Name";
import About from "./About/About";
import Project from "./Projects/Project";
import Footer from "./Footer/Footer";
import Navbar from "./Navbar/Navbar";
import ContactPage from "./Contact/ContactPage";
import { Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Name />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/Project" element={<Project />} />
        <Route exact path="/ContactPage" element={<ContactPage />} />
      </Routes>
      <Footer />
    </>
  );
}
