import { AiOutlineLinkedin } from "react-icons/ai";
import { HiOutlineAtSymbol, HiOutlineMail } from "react-icons/hi";
import { VscGithub, VscGithubInverted } from "react-icons/vsc";

export interface SidebarLink {
  path: string;
  icon: React.ReactNode;
}

export const sidebarLinks: SidebarLink[] = [
  {
    path: "https://github.com/brenojm",
    icon: <VscGithub color="#597076" />,
  },
  {
    path: "mailto:breno.jm25@gmail.com",
    icon: <HiOutlineMail color="#597076" />,
  },
  {
    path: "https://www.linkedin.com/in/breno-magrani-88415222a/",
    icon: <AiOutlineLinkedin color="#597076" />,
  },
];
