export interface SkillsInterface {
    category: string;
    levels: Proficiency[];
  }
export interface Proficiency {
    level: string;
    names: string[];
}
  
  export const skillsList: SkillsInterface[] = [
    {
        category: "Languages",
        levels: [
            {
                level: "Proficient",
                names: [
                    "JavaScript",
                    "C#",
                    "HTML/CSS"
                ]
            },
            {
                level: "Intermediate",
                names: [
                    "TypeScript",
                    "SQL",
                    "Java"
                ]
            },
            {
                level: "Beginner",
                names: [
                    "Python",
                ]
            },
        ]
    },
    {
        category: "Frameworks/Libraries",
        levels: [
            {
                level: "Proficient",
                names: [
                    "React",
                    "Node.js",
                    ".NET",
                    "Material UI"
                ]
            },
            {
                level: "Intermediate",
                names: [
                    "React Native",
                    "Next.js",
                    "Bootstrap",
                    "Spring"
                ]
            },
            {
                level: "Beginner",
                names: [
                    "TailwindCSS",
                    "Django"
                ]
            },
        ]
    },
    {
        category: "Tools",
        levels: [
            {
                level: "Proficient",
                names: [
                    "Visual Studio Code",
                    "Visual Studio",
                    "IntelliJ",
                    "DBeaver",
                    "Postman",
                    "Git"
                ]
            },
            {
                level: "Intermediate",
                names: [
                    "Canva",
                    "Insomnia",
                ]
            },
            {
                level: "Beginner",
                names: [
                    "Figma",
                ]
            },
        ]
    },
  ];
  