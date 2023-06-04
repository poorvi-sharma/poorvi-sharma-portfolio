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
        <Route exact path="/" element={<Name />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/Project" element={<Project />} />
        <Route exact path="/ContactPage" element={<ContactPage />} />
      </Routes>
      <Footer />
    </>
  );
}
