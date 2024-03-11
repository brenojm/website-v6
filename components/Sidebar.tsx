import React from "react";
import { sidebarLinks } from "@/utils/sidebarLinks";
import Link from "next/link";
import { LuHome } from "react-icons/lu";
import { InputLabel, MenuItem, Select, SelectChangeEvent } from "@mui/material";
import { LanguageProps } from "@/utils/interfaces";
import { useLanguage } from "@/context/LanguageContext";



function Sidebar() {
  const { language, handleChange } = useLanguage();

  return (
    <>
      <div className="fixed lg:inset-y-[1%] lg:inset-x-[90%] inset-y-[1%] inset-x-[80%]  lg:ml-6 ml-2">
        <InputLabel id="demo-simple-select-filled-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
          defaultValue={"pt-br"}
          value={language}
          onChange={handleChange}
        >
          <MenuItem value={"ptbr"}>pt-br</MenuItem>
          <MenuItem value={"eng"}>eng</MenuItem>
        </Select>
      </div>

      <div className="fixed lg:inset-y-[40%] lg:inset-x-[95%] inset-y-[45%] inset-x-[90%]  lg:ml-6 ml-2">
        {/* <a href={"#home"} className="lg:text-4xl text-3xl cursor-pointer">
        <LuHome/>
      </a> */}
        {sidebarLinks.map((link, index) => (
          <Link
            key={index}
            target="__blank"
            href={link.path}
            className="lg:text-4xl text-3xl cursor-pointer"
          >
            {link.icon}
          </Link>
        ))}
      </div>
    </>
  );
}

export default Sidebar;
