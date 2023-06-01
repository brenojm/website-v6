export interface Experience {
  company: string;
  position: string;
  time: string;
  image: string;
  width: number;
  height: number;
}

export const experiences: Experience[] = [
  {
    company: "Twine",
    position: "Software Engineer",
    time: "May '23 - Present",
    image: "/twine.svg",
    width: 80,
    height: 80,
  },
  {
    company: "YouTube",
    position: "Software Content",
    time: "Feb '21 - Present",
    image: "/youtube.svg",
    width: 75,
    height: 75,
  },
  {
    company: "Neupane Technologies",
    position: "Founder",
    time: "July '20 - Present",
    image: "/neupane.svg",
    width: 80,
    height: 80,
  },
  {
    company: "Kairos Trading",
    position: "Software Engineer Intern",
    time: "Oct '22 - Nov '22",
    image: "/kairos.svg",
    width: 75,
    height: 75,
  },
  {
    company: "CloudMandu",
    position: "Software Consultant",
    time: "May '21 - Aug '21",
    image: "/cloudmandu.svg",
    width: 105,
    height: 105,
  },
];
