export interface Project {
  title: string;
  desc: string;
  technologiesUsed: Array<string>;
  image: string;
  projectLink: string;
  gitLink: string;
  alt: string;
  width: number;
  height: number;
}

export const completedProjects: Project[] = [
  {
    title: "F1 Term",
    desc: "Site inspired by the game termo, with a Formula 1 theme.",
    technologiesUsed: ["React.js"],
    image: "/projectImgs/f1-term.png",
    projectLink: "",
    gitLink: "https://github.com/brenojm/F1Term",
    alt: "F1Term",
    width: 250,
    height: 230,
  },
  {
    title: "F1 Quiz",
    desc: "Formula 1 Quiz application with React, Asp.Net-Core-API and Material-UI",
    technologiesUsed: ["React.js", ".NET", "Material UI"],
    image: "/projectImgs/f1-quiz.png",
    projectLink: "",
    gitLink: "https://github.com/brenojm/F1-Quiz",
    alt: "F1Term",
    width: 250,
    height: 230,
  },
  
];
