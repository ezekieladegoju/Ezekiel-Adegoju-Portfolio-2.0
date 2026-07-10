export interface Project {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  imageUrl: string;
  category: string;
  description: string;
  client: string;
  date: string;
  services: string[];
  link?: string;
}

export interface EducationItem {
  degree: string;
  school: string;
  years: string;
}

export interface WorkProcessStep {
  number: string;
  title: string;
  description: string;
  iconName: "search" | "lightbulb" | "pencil" | "code" | "send";
}
