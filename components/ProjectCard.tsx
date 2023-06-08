import React, { useState } from "react";
import { Project } from "@/utils/projectsList";
import Image from "next/image";

function ProjectCard(props: Project) {
  return (
    <div className="p-5 mx-3 mb-6 flex flex-col justify-center items-center rounded-md shadow-lg">
      <div className="text-xl mb-2 text-fgText">{props.title}</div>
      <div className="mb-4">
        <Image
          className="object-contain"
          src={props.image}
          alt={`${props.title}'s Demo`}
          width={props.width}
          height={props.height}
          unoptimized={true}
          loading="lazy"
        />
      </div>
      <div className="flex justify-center items-center">
        {props.technologiesUsed.map((tool, index) => (
          <div
            key={index}
            className="text-center font-medium mx-1 border-2 border-purple p-1 bg-purpleLight rounded-lg"
          >
            {tool}
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProjectCard;
