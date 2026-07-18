interface Skill {
  name: string;
  image: string;
}

export interface SkillCategory {
  category: string;
  skills: Skill[];
}