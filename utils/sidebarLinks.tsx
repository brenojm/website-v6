import { HiOutlineAtSymbol } from "react-icons/hi";
import { FaLinkedin } from "react-icons/fa";
import { VscGithubInverted } from "react-icons/vsc";

export interface SidebarLink {
  path: string;
  icon: React.ReactNode;
}

export const sidebarLinks: SidebarLink[] = [
  {
    path: "https://github.com/brenojm",
    icon: <VscGithubInverted />,
  },
  {
    path: "mailto:breno.jm25@gmail.com",
    icon: <HiOutlineAtSymbol />,
  },
  {
    path: "https://www.linkedin.com/in/breno-magrani-88415222a/",
    icon: <FaLinkedin />,
  },
];
