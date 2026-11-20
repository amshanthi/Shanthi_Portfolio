import React from "react";
import SectionTitle from "./SectionTitle";
import { skills } from "../services/projectServices";

const Skills = () => {
  return (
    <section
      id="skills"
      className="border-y border-white/5 bg-white/[0.02] px-5 py-24 lg:px-28 "
    >
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          eyebrow="MY SKILLS"
          title="Tools & Technologies"
          text="Technologies I have worked with across game development, interactive experiences, and modern web development."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-2">
          {skills.map((group, index) => (
            <div
              key={group.title}
              className="
                group relative overflow-hidden
                rounded-3xl
                border border-white/10
                bg-[#090d20]
                p-7 
                transition-all duration-300
                hover:-translate-y-2
                hover:border-indigo-500/40
              "
            >
              {/* Glow */}
              <div
                className="
                  absolute -right-16 -top-16
                  h-40 w-40
                  rounded-full
                  bg-indigo-500/10
                  blur-3xl
                  transition-all duration-500
                  group-hover:bg-indigo-500/20
                "
              />

              {/* Icon */}
              <div
                className="
                  relative flex h-14 w-14 items-center justify-center
                  rounded-2xl
                  border border-white/10
                  bg-white/5
                  text-3xl
                  transition-transform duration-300
                  group-hover:scale-110
                "
              >
                {group.icon}
              </div>

              {/* Title */}
              <h3 className="relative mt-6 text-xl font-bold">{group.title}</h3>

              {/* Skills */}
              <div className="relative mt-5 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="
                      rounded-lg
                      border border-white/10
                      bg-white/5
                      px-3 py-2
                      text-sm text-gray-300
                      transition-colors duration-200
                      hover:border-indigo-500/40
                      hover:text-white
                    "
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
