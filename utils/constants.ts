import { FaXTwitter } from "react-icons/fa6";
import {
  RiFileTextLine,
  RiGithubLine,
  RiGitRepositoryLine,
  RiLinkedinLine,
  RiMailLine,
  RiTwitterLine,
} from "react-icons/ri";

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  liveLink: string;
  githubLink: string;
}

export const projects: Project[] = [
  {
    title: "LitCalc",
    description: "",
    technologies: ["Next.js"],
    liveLink: "https://github.com/webbedpiyush/litCalc-fe",
    githubLink: "https://litcalc-fe.pages.dev/",
  },
];

export const skills = [
  "JavaScript",
  "TypeScript",
  "Next.js",
  "React",
  "Node.js",
  "Prisma",
  "Redux",
  "Tailwind CSS",
  "Git",
  "Linux",
  "Docker",
];

export interface SocialLink {
  name: string;
  icon: React.ElementType;
  href: string;
}

export const socialLinks: SocialLink[] = [
  {
    name: "Email",
    icon: RiMailLine,
    href: "mailto:piyushtiwarindls220@gmail.com",
  },
  {
    name: "Twitter",
    icon: FaXTwitter,
    href: "https://x.com/_webbedpiyush",
  },
  {
    name: "LinkedIn",
    icon: RiLinkedinLine,
    href: "https://www.linkedin.com/in/piyush-tiwari-89543b260/",
  },
  {
    name: "GitHub",
    icon: RiGithubLine,
    href: "https://github.com/webbedpiyush",
  },
  {
    name: "Resume",
    icon: RiFileTextLine,
    href: "/resume/resume.pdf",
  },
  {
    name: "Repository",
    icon: RiGitRepositoryLine,
    href: "https://github.com/webbedpiyush/portfolio-24",
  },
];
