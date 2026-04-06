export interface ExperienceProps {
  title: string;
  startDate: string;
  endDate: string;
  institution: string;
  description: string[];
  badge?: string;
  techs: string[];
}

export const JOBS: ExperienceProps[] = [
  {
    title: "Desarrollador Full Stack",
    startDate: "May 2023",
    endDate: "Nov 2023",
    institution: "Geret",
    description: [""],
    techs: ["React", "Fast API", "Postgres"],
  },
  {
    title: "Docente Bootcamp MERN",
    startDate: "Jun 2022",
    endDate: "May 2023",
    institution: "Scala Learning",
    description: [""],
    techs: ["React", "MongoDB"],
  },

  {
    title: "Analista QA",
    startDate: "May 2022",
    endDate: "Dic 2022",
    institution: "Imagemaker",
    description: [""],
    techs: ["Python", "Robot Framework", "Selenium"],
  },
];

export const STUDIES: ExperienceProps[] = [
  {
    title: "Bootcamp FullStack Python",
    startDate: "Dic 2025",
    endDate: "Mar 2026",
    institution: "Talento Digital",
    description: [
      "Descripción breve de lo aprendido. Puedes mencionar el stack principal (React, Node.js, etc.) y algún proyecto destacado que realizaste durante el programa.",
    ],
    techs: ["Python", "Django", "MySQL", "SQLite"],
  },
  {
    title: "Bootcamp FullStack MERN",
    startDate: "Dic 2025",
    endDate: "Mar 2026",
    institution: "Mindhub",
    description: [
      "Descripción breve de lo aprendido. Puedes mencionar el stack principal (React, Node.js, etc.) y algún proyecto destacado que realizaste durante el programa.",
      "dakshdkjsa asjhd ash dsah dkashskhkjsda dsadasda dasdsa dsadsa dsadas dsadsa dsadas dsadsa dsadas dasdsa",
      "dadadas",
    ],
    badge:
      "https://www.credly.com/earner/earned/badge/44d4ea6e-c2b6-47d1-b3be-bc0d93b48553",
    techs: ["JavaScript", "React", "Nodejs", "Express", "MongoDB", "MySQL"],
  },
];
