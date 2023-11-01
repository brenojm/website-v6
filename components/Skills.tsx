import React from "react";
import { skillsList } from "@/utils/skillsList";
import { GoTerminal } from "react-icons/go";
import { FaAccessibleIcon } from "react-icons/fa";
import Chip from "@mui/material/Chip";
import { findStringById } from "@/languageSupplier/languageSupplier";
function Skills() {
  return (
    <div className="flex flex-col">
      {skillsList.map((skillCat, index) => (
        <div
          key={`${index}`}
          className="flex flex-col lg:text-xl md:text-lg text-base mb-3"
        >
          <div className="flex items-center mb-2">
            <GoTerminal className="mr-2" />
            <p className="font-semibold">{findStringById(skillCat.category)}</p>
          </div>

          {skillCat.levels.map((level, index) => {
            const classP: string = `py-1 px-3 bg-proficientBg border-2 border-proficientBorder rounded-xl m-1 flex items-center h-8`;
            const classI: string = `py-1 px-3 bg-intermediateBg border-2 border-intermediateBorder rounded-xl m-1 flex items-center h-8`;
            const classB: string = `py-1 px-3 bg-beginnerBg border-2 border-beginnerBorder rounded-xl m-1 flex items-center h-8`;

            return (
              <div
                key={`${index}`}
                className={`${level.level.toLowerCase()}-row flex flex-wrap ml-6`}
              >
                {level.names.map((name, index) => (
                  <div
                    key={`${index}`}
                    className="py-1 m-1 flex items-center h-8"
                  >
                    <Chip
                      style={{
                        color: "#000",
                        fontWeight: "bold",
                        borderColor:
                          level.level.toLocaleLowerCase() === "proficient"
                            ? "#4C7564"
                            : level.level.toLocaleLowerCase() === "intermediate"
                            ? "#C5C830"
                            : "#838789",
                        borderWidth: 2,
                        padding: "0.9rem",
                      }}
                      icon={
                        <img
                          style={{ width: "16px", height: "16px" }}
                          src={name.imageUri}
                        />
                      }
                      label={name.name}
                      variant="outlined"
                    />
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
