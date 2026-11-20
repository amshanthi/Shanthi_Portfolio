import React from "react";
import SectionTitle from "./SectionTitle";

const About = () => {
  return (
    <section id="about" className=" bg-[#0b1120] px-6 py-24  ">
      <div className="mx-auto max-w-5xl">
        <SectionTitle
          eyebrow="ABOUT ME"
          title="Building HTML5 Games & Learning Experiences."
          text="HTML5 Game Developer with 12+ years of experience in interactive games, animations, and web development."
        />

        <div className="mt-12 rounded-3xl border border-white/10 bg-white/[0.03] p-8 md:p-10">
          <p className="text-lg leading-8 text-gray-200">
            My development journey started with Flash and ActionScript 3,
            creating interactive games and animations. Over the years, I
            transitioned to HTML5, JavaScript, CreateJS, and Adobe Animate.
          </p>

          <p className="mt-6 text-lg leading-8 text-gray-200">
            I have experience developing educational games, interactive learning
            modules, animations, and responsive web experiences.
          </p>

          <p className="mt-6 text-lg leading-8 text-gray-200">
            Currently, I am expanding my skills in React, Tailwind CSS, and GSAP
            to build modern, responsive, and engaging web applications.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
