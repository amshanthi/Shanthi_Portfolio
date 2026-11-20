import React from "react";
import { Routes, Route } from "react-router-dom";
import ProjectsSection from "../Section/Project";
import Home from "../Home/Home";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/projects" element={<ProjectsSection />}></Route>
    </Routes>
  );
};

export default Router;
