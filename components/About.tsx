import React from "react";
import Skills from "./Skills";
import { findStringById } from "@/languageSupplier/languageSupplier";

function About() {
  const milliseconds: number =
    new Date().getTime() - new Date("01/25/2004").getTime();

  const age = Math.floor(milliseconds / 1000 / 60 / 60 / 24 / 365);

  return (
    <section id="about" className="w-full min-h-screen flex items-center">
      {/* about & skills display */}

      {/* large is gonna have about | skills */}
      <div className="about-skills w-full flex lg:flex-row flex-col lg:justify-between justify-center lg:pt-0 pt-12">
        <div className="about flex-1 lg:mb-0 mb-12 lg:mr-8 mr-0 lg:w-1/2 w-1/1">
          <h2 className="lg:mb-16 mb-8 font-semibold lg:text-5xl text-3xl text-left">
            {findStringById("aboutTitle")}
          </h2>
          <p className="lg:mb-12 md:mb-8 mb-4 lg:text-xl md:text-lg text-base">
            {" "}
            {findStringById("aboutP1Text1")}{age}{findStringById("aboutP1Text2")}{" "}
          </p>
          <p className="lg:mb-12 md:mb-8 mb-4 lg:text-xl md:text-lg text-base">
            {" "}
            {findStringById("aboutP2Text1")}{" "}
          </p>
          <p className="lg:mb-12 md:mb-8 mb-4 lg:text-xl md:text-lg text-base">
            {" "}
            {findStringById("aboutP3Text1")}{" "}
          </p>
          <p className="lg:mb-12 md:mb-8 mb-4 lg:text-xl md:text-lg text-base">
            {" "}
            {findStringById("aboutP4Text1")}{" "}
          </p>
          <p className="lg:mb-12 md:mb-8 mb-4 lg:text-xl md:text-lg text-base">
            {" "}
            {findStringById("aboutP5Text1")}{" "}
          </p>
          
        </div>
        <div className="skills flex-1 lg:ml-8 ml-0 lg:w-1/2 w-1/1">
          <h2 className="lg:mb-16 mb-8 font-semibold lg:text-5xl text-3xl text-left">
          {findStringById("skillsTitle")}
          </h2>
          <Skills />
        </div>
      </div>
    </section>
  );
}

export default About;
