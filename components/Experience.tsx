import React from "react";
import { experiences } from "@/utils/experienceList";
import Card from "./Card";
import { findStringById } from "@/languageSupplier/languageSupplier";

function Experience() {
  return (
    <section id="experience" className="w-full min-h-screen flex items-center">
      {/* experience display */}

      <div className="w-full flex justify-center lg:pt-0 pt-12">
        <div className="flex-1">
          <h2 className="lg:mb-16 mb-8 font-semibold lg:text-5xl text-3xl text-center">
            {findStringById("experienceTitle")}
          </h2>
          <div className="flex justify-center items-center flex-wrap">
            {experiences.map((experience, index) => (
              <Card
                key={index}
                company={experience.company}
                position={experience.position}
                time={experience.time}
                image={experience.image}
                width={experience.width}
                height={experience.height}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
