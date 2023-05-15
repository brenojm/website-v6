import React from "react";
import { sidebarLinks } from "./sidebarLinks";
import Link from "next/link";

function Sidebar() {
  return (
    <div className="fixed lg:inset-y-[40%] inset-y-[45%] lg:ml-6 ml-2">
      {sidebarLinks.map((link, index) => (
        <Link
          key={index}
          target="__blank"
          href={link.path}
          className={`lg:text-3xl text-2xl cursor-pointer ${link.hover} hover:ease-in-out hover:duration-100`}
        >
          {link.icon}
        </Link>
      ))}
    </div>
  );
}

export default Sidebar;
