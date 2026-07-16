/**
 * Represents a highlighted portfolio project showcase.
 */
export interface Project {
  /** Unique identifier for the project, used for routing or tab keying */
  id: string;
  /** Display number of the project, e.g., "01" */
  number: string;
  /** Main title of the project (e.g., "HEALTH SYSTEM CONSULTANTS") */
  title: string;
  /** Subtitle of the project, detailing the stack or approach (e.g., "REACT.JS & THREE.JS") */
  subtitle: string;
  /** URL to the project's cover/preview image */
  imageUrl: string;
  /** Broad operational or structural category of the project */
  category: string;
  /** In-depth description detailing problems solved, technologies used, and outcomes */
  description: string;
  /** The client or organization for whom the project was engineered */
  client: string;
  /** The season/year or date span of active development */
  date: string;
  /** List of individual technologies, services, or frameworks used in the project */
  services: string[];
  /** Optional external hyperlink to the live site or codebase */
  link?: string;
}

/**
 * Represents an academic degree, certification, or learning milestone.
 */
export interface EducationItem {
  /** The title of the degree, diploma, or certification */
  degree: string;
  /** The academic institution, school, or platform */
  school: string;
  /** The years of enrollment or completion (e.g., "2021 - 2025") */
  years: string;
}

/**
 * Represents a systematic step in the software development lifecycle.
 */
export interface WorkProcessStep {
  /** Chronological number of the step, e.g., "01" */
  number: string;
  /** Main title or phase name of the process step (e.g., "RESEARCH & DISCOVERY") */
  title: string;
  /** Descriptive details about what this phase entails */
  description: string;
  /** Key of the Lucide icon to be dynamically selected and rendered */
  iconName: "search" | "lightbulb" | "pencil" | "code" | "send";
}

