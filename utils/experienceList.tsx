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
    company: "T2M - Test to Market Ltda.",
    position: "Full Stack Developer",
    time: "Sep '22 - Present",
    image: "/t2m-logo.jpg",
    width: 75,
    height: 75,
  },
  {
    company: "Serratec",
    position: "ICT Software Resident",
    time: "Mar '22 - Aug '22",
    image: "/serratec-logo.jpeg",
    width: 75,
    height: 75,
  },
];
