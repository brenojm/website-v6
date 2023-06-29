import { HiOutlineAtSymbol } from "react-icons/hi";
import { FaLinkedin } from "react-icons/fa";
import { VscGithubInverted } from "react-icons/vsc";

export interface SidebarLink {
  path: string;
  icon: React.ReactNode;
}

export const sidebarLinks: SidebarLink[] = [
  {
    path: "https://github.com/arpanneupane19",
    icon: <VscGithubInverted />,
  },
  {
    path: "mailto:arpanneupane19@gmail.com",
    icon: <HiOutlineAtSymbol />,
  },
  {
    path: "https://www.linkedin.com/in/arpan-neupane-681522199/",
    icon: <FaLinkedin />,
  },
];
