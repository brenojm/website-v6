import React from "react";
import { sidebarLinks } from "@/utils/sidebarLinks";
import Link from "next/link";

function Sidebar() {
  return (
    <div className="fixed lg:inset-y-[40%] lg:inset-x-[95%] inset-y-[45%] inset-x-[90%]  lg:ml-6 ml-2">
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
  );
}

export default Sidebar;
