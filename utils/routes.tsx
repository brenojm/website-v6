export interface Route {
  name: string;
  path: string;
}

export const routes: Route[] = [
  {
    name: "About",
    path: "/#about",
  },
  {
    name: "Experience",
    path: "/#experience",
  },
  {
    name: "Projects",
    path: "/#projects",
  },
];
