import React from "react";
import { experiences } from "../services/projectServices";
import SectionTitle from "./SectionTitle";

function Experience() {
  return (
    <section id="experience" className=" bg-[#0b1120] px-6 py-24  ">
      <div className="max-w-6xl mx-auto ">
        {/* <div className="max-w-6xl mx-auto">
        <div className="mb-14">
          <p className="text-indigo-400 text-sm font-semibold uppercase tracking-widest">
            Career Journey
          </p>         
        </div>

          <h2 className="text-3xl md:text-4xl font-bold mt-2">
            My Development Journey
          </h2>

          <p className="text-gray-400 mt-4 max-w-2xl leading-7">
            Over 12 years of experience creating games, animations, interactive
            learning content, and HTML5 experiences.
          </p>
        </div> */}

        <SectionTitle
          eyebrow="EXPERIENCE"
          title="My Career Journey"
          text="12+ years of experience developing HTML5 games, e-learning content, animations, and interactive experiences."
        />

        {/* Experience Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-10 ">
          {experiences.map((item, index) => (
            <div
              key={index}
              className="
                group
                relative
                p-6
                rounded-2xl
                bg-gray-900
                border border-gray-800
                hover:border-indigo-500/50
                hover:-translate-y-2
                transition-all duration-300
              "
            >
              {/* Small top accent */}
              <div className="w-10 h-1 bg-indigo-500 rounded-full mb-6 group-hover:w-16 transition-all duration-300" />

              {/* Year */}
              <p className="text-sm font-medium text-indigo-400">{item.year}</p>

              {/* Role */}
              <h3 className="text-xl font-semibold mt-3">{item.role}</h3>

              {/* Company */}
              <p className="text-gray-300 mt-1 font-medium">{item.company}</p>

              {/* Description */}
              <p className="text-gray-400 text-sm leading-6 mt-4">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
