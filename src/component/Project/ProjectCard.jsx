import React from "react";

function ProjectCard({ project }) {
  return (
    <article className="group overflow-hidden rounded-3xl border border-white/10 bg-[#090d20] transition duration-300 hover:-translate-y-2 hover:border-purple-400/30">
      <div className="p-6">
        <h3 className="text-xl font-bold">{project.title}</h3>

        <p className="mt-3 min-h-[72px] text-sm leading-6 text-gray-400">
          {project.description}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.tech.map((item) => (
            <span
              key={item}
              className="rounded-md bg-purple-500/10 px-2.5 py-1.5 text-xs text-purple-300"
            >
              {item}
            </span>
          ))}
        </div>

        <div className="mt-6 flex gap-3">
          <a
            href={project.demo}
            target="_blank"
            className="flex-1 rounded-lg bg-purple-600 px-4 py-2.5 text-center text-sm font-semibold transition hover:bg-purple-500"
          >
            Live Demo
          </a>

          <a
            target="_blank"
            href={project.github}
            className="rounded-lg border border-white/10 px-4 py-2.5 text-sm font-semibold transition hover:bg-white/10"
          >
            GitHub
          </a>
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;
