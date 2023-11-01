export interface SkillsInterface {
  category: string;
  levels: Proficiency[];
}
export interface Proficiency {
  level: string;
  names: NameInterface[];
}

export interface NameInterface {
  name: string;
  imageUri: string;
}

export const skillsList: SkillsInterface[] = [
  {
    category: "skillListLanguages",
    levels: [
      {
        level: "Proficient",
        names: [
          {
            name: "JavaScript",
            imageUri:
              "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
          },
          {
            name:"C#",
            imageUri:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg"
        },
        {
            name:"HTML",
            imageUri:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
        },
        {
            name:"CSS",
            imageUri:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
        },
        ],
      },
      {
        level: "Intermediate",
        names: [
            {
                name:"TypeScript",
                imageUri:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
            },
            {
                name:"SQL",
                imageUri:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg"
            },
            {
                name:"Java",
                imageUri:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg"
            },
],
      },
      {
        level: "Beginner",
        names: [
            {
                name:"Python",
                imageUri:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
            },],
      },
    ],
  },
  {
    category: "skillListFrameworksLibraries",
    levels: [
      {
        level: "Proficient",
        names: [
            {
                name:"React",
                imageUri:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
            },
            {
                name:"Node.js",
                imageUri:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
            },
            {
                name:".NET",
                imageUri:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg"
            },
            {
                name:"Material UI",
                imageUri:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg"
            },],
      },
      {
        level: "Intermediate",
        names: [
            {
                name:"React Native",
                imageUri:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
            },
            {
                name:"Next.js",
                imageUri:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg"
            },
            {
                name:"Bootstrap",
                imageUri:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg"
            },
            {
                name:"Spring",
                imageUri:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg"
            },
            ],
      },
      {
        level: "Beginner",
        names: [
            {
                name:"TailwindCSS",
                imageUri:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg"
            },
            {
                name:"Django",
                imageUri:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg"
            },
            ],
      },
    ],
  },
  {
    category: "skillListTools",
    levels: [
      {
        level: "Proficient",
        names: [
            {
                name:"Visual Studio Code",
                imageUri:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg"
            },
            {
                name:"Visual Studio",
                imageUri:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/visualstudio/visualstudio-plain.svg"
            },
            {
                name:"IntelliJ",
                imageUri:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/intellij/intellij-original.svg"
            },
            {
                name:"DBeaver",
                imageUri:"https://upload.wikimedia.org/wikipedia/commons/b/b5/DBeaver_logo.svg"
            },
            {
                name:"Postman",
                imageUri:"https://imgs.search.brave.com/50JDDd4L1QxFtnwMrj6rn158HP4VG0qHPxVKtKvCPn4/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4u/d29ybGR2ZWN0b3Js/b2dvLmNvbS9sb2dv/cy9wb3N0bWFuLnN2/Zw.svg"
            },
            {
                name:"Git",
                imageUri:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
            },
        ],
      },
      {
        level: "Intermediate",
        names: [
            {
                name:"Canva",
                imageUri:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg"
            },
            {
                name:"Insomnia",
                imageUri:"https://imgs.search.brave.com/bJ6vQ4xmEQXX8rGaAcVl4Cfk_UfERLiKV6RlcSlKRkg/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/c3ZncmVwby5jb20v/c2hvdy8zNTM5MDQv/aW5zb21uaWEuc3Zn.svg"
            },
            ],
      },
      {
        level: "Beginner",
        names: [
            {
                name:"Figma",
                imageUri:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg"
            },
        ],
      },
    ],
  },
];
