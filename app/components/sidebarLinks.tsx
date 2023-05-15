import { HiOutlineAtSymbol } from "react-icons/hi";
import { FaLinkedin } from "react-icons/fa";
import { VscGithubInverted } from "react-icons/vsc";

export interface SidebarLink {
  path: string;
  icon: React.ReactNode;
  hover: string;
}

export const sidebarLinks: SidebarLink[] = [
  {
    path: "https://github.com/arpanneupane19",
    icon: <VscGithubInverted />,
    hover: "hover:text-[#6e5494]",
  },
  {
    path: "mailto:arpanneupane19@gmail.com",
    icon: <HiOutlineAtSymbol />,
    hover: "hover:text-[#f2a60c]",
  },
  {
    path: "https://www.linkedin.com/in/arpan-neupane-681522199/",
    icon: <FaLinkedin />,
    hover: "hover:text-[#0072b1]",
  },
];
