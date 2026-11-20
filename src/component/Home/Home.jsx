import React from "react";
import HeroSection from "../Section/HeroSection";
import AboutSection from "../Section/About";
import SkillsSection from "../Section/Skills";
import ContactSection from "../Section/Contact";
import ExperienceSection from "../Section/Experience";
import Project from "../Section/Project";
0;
const Home = () => {
  return (
    <div>
      <HeroSection />
      <Project />
      <ExperienceSection />
      <SkillsSection />
      <AboutSection />
      <ContactSection />
    </div>
  );
};

export default Home;
