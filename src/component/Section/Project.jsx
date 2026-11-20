import React from "react";
import SectionTitle from "./SectionTitle";
import ProjectCard from "../Project/ProjectCard";
import { projects } from "../services/projectServices";

const Project = () => {
  return (
    <section
      id="project"
      className="border-y border-white/5 bg-white/[0.02] px-5 py-24 lg:px-28"
    >
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          eyebrow="MY WORK"
          title="Projects & Creations"
          text="A collection of interactive games and modern web applications I've built."
        />

        <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;
