

export interface Route {
  name: string;
  path: string;
}

export const routes: Route[] = [
  {
    name: "buttonRoutesAbout",
    path: "/#about",
  },
  {
    name: "buttonRoutesExperience",
    path: "/#experience",
  },
  {
    name: "buttonRoutesProjects",
    path: "/#projects",
  },
];

