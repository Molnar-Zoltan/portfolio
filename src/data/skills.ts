interface Skill {
  name: string;
  image: string;
}

interface SkillCategory {
  category: string;
  skills: Skill[];
}

export const skills: SkillCategory[] = [
  {
    category: "Frontend",
    skills: [
      { name: "Next.js", image: "/images/icons/nextjs.svg" },
      { name: "React", image: "/images/icons/react.svg" },
      { name: "TypeScript", image: "/images/icons/typescript.svg" },
      { name: "JavaScript", image: "/images/icons/javascript.svg" },
      { name: "Tailwind", image: "/images/icons/tailwindcss.svg" },
      { name: "CSS", image: "/images/icons/css.svg" },
      { name: "HTML", image: "/images/icons/html.svg" },
      { name: "Figma", image: "/images/icons/figma.svg" },
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "Node.js", image: "/images/icons/nodejs.svg" },
      { name: "Express", image: "/images/icons/express.svg" },
      { name: "MongoDB", image: "/images/icons/mongodb.svg" },
      { name: "SQL", image: "/images/icons/sql.svg" },
    ],
  },
  {
    category: "Other",
    skills: [
      { name: "Git", image: "/images/icons/git.svg" },
      { name: "GitHub", image: "/images/icons/github.svg" },
      { name: "Vite", image: "/images/icons/vite.svg" },
      { name: "Vitest", image: "/images/icons/vitest.svg" },
      { name: "Jest", image: "/images/icons/jest.svg" },
    ],
  },
];
