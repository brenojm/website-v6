import React from "react";
import { skillsList } from "@/utils/skillsList";
import { GoTerminal } from "react-icons/go";
function Skills() {

  return (
    <div className="flex flex-col">
      {skillsList.map((skillCat, index) => (
        <div
          key={`${index}`}
          className="flex flex-col lg:text-xl md:text-lg text-base mb-3"
        >
          <div className="flex items-center mb-2">
            <GoTerminal className="mr-2 text-purple" />
            <p className="font-semibold">{skillCat.category}</p>
          </div>

          {skillCat.levels.map((level, index) => {

            const classP:string = `py-1 px-3 bg-proficientBg border-2 border-proficientBorder rounded-xl m-1 flex items-center h-8`;
            const classI:string = `py-1 px-3 bg-intermediateBg border-2 border-intermediateBorder rounded-xl m-1 flex items-center h-8`;;
            const classB:string = `py-1 px-3 bg-beginnerBg border-2 border-beginnerBorder rounded-xl m-1 flex items-center h-8`;;
            
            return (
              <div
              key={`${index}`}
                className={`${level.level.toLowerCase()}-row flex flex-wrap ml-6`}
              >
                {level.names.map((name, index) => (
                  <div
                  key={`${index}`}
                    className={level.level === "Proficient" ? classP : level.level === "Intermediate" ? classI : classB}
                  >
                    <p className="text-sm font-semibold">{name}</p>
                  </div>
                ))}
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
}

export default Skills;
