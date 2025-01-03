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
  videoUrl?: string;
}

export const projects: Project[] = [
  {
    title: "Condense-Video",
    description:
      "Eliminate oversized files! Reduce video size by 90% Without sacrificing quality, all while working offline.",
    technologies: ["Next.js", "TS", "FFmpeg", "JS", "WASM", "Framer-motion"],
    liveLink: "https://condense-video.webbedpiyush.me",
    githubLink: "https://github.com/webbedpiyush/wasm-project",
    videoUrl: "/condense-video.mp4",
  },
  {
    title: "LitCalc",
    description:
      "LitCalc is a lightweight, interactive web-based calculator that supports mathematical, graphical, and pictorial computations drawn on a canvas. Powered by AI, it interprets user inputs and renders the calculated results directly on the canvas",
    technologies: ["Next.js", "TS", "Node.js", "JS", "AI Integration"],
    githubLink: "https://github.com/webbedpiyush/litCalc-fe",
    liveLink: "https://litcalc.webbedpiyush.me",
    videoUrl: "/litcalc.mp4",
  },
  {
    title: "SurpriseMe",
    description:
      "SurpriseMe is a web application that allows users to visit random websites, providing an exciting way to discover new content on the internet. Built with React and Next.js, it features an interactive canvas animation and a user-friendly interface.",
    technologies: ["Next.js", "TS", "Node.js", "JS", "AI Integration"],
    liveLink: "https://surprise-me.webbedpiyush.me/",
    githubLink: "https://github.com/webbedpiyush/surpriseMe-fe",
    videoUrl: "/surpriseMe.mp4",
  },
  {
    title: "Easy-ghfetch",
    description:
      "Easily fetch any file or folder from any branch of any GitHub repository",
    technologies: ["Next.js", "TS", "Node.js", "JS", "AI Integration"],
    liveLink: "https://ghfetch.webbedpiyush.me/",
    githubLink: "https://github.com/webbedpiyush/easy-ghfetchWeb",
    videoUrl: "/ghfetch.mp4",
  },
  {
    title: "Cont_Imagen",
    description:
      "Cont Imagen is a real-time image generation application built with Next.js, React, and TypeScript",
    technologies: ["Next.js", "TS", "Node.js", "JS", "AI Integration"],
    liveLink: "https://cont-imagen.webbedpiyush.me/",
    githubLink: "https://github.com/webbedpiyush/cont_imagen",
    videoUrl: "/cont-imagen.mp4",
  },
  {
    title: "Voice_AI",
    description: "Mini Siri but built for the web",
    technologies: [
      "Next.js",
      "TS",
      "Cloudflare-Workers",
      "JS",
      "AI Integration",
      "Whisper-LLM",
    ],
    liveLink: "https://voice-ai.webbedpiyush.me",
    githubLink: "https://github.com/webbedpiyush/Voice-ai",
    videoUrl: "/voice-ai.mp4",
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
  "Will add more skills later, now I'm sleepy",
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
    href: "https://drive.google.com/file/d/1_Vq9hw6NSeaefnH9EgruVVmP__SNEf9K/view?usp=sharing",
  },
  {
    name: "Repository",
    icon: RiGitRepositoryLine,
    href: "https://github.com/webbedpiyush/portfolio-24",
  },
];
