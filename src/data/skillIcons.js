import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGithub, FaFigma } from "react-icons/fa";
import {
  SiTailwindcss,
  SiReactrouter,
  SiMongodb,
  SiFirebase,
  SiVite,
  SiVercel,
  SiNetlify,
  SiPostman,
  SiEslint,
} from "react-icons/si";
import { MdDevices, MdSpeed } from "react-icons/md";
import { FiLayers } from "react-icons/fi";
import { TbApi } from "react-icons/tb";

export const skillIcons = {
  Html5: FaHtml5,
  Css3: FaCss3Alt,
  Javascript: FaJs,
  React: FaReact,
  "Tailwind CSS": SiTailwindcss,
  "React Router": SiReactrouter,
  "Responsive Design": MdDevices,
  "Component Architecture": FiLayers,
  "Web Performance Optimization": MdSpeed,

  "Node.js": FaNodeJs,
  "Express.js": TbApi,
  "REST APIs": TbApi,
  MongoDB: SiMongodb,
  "Firebase Authentication": SiFirebase,
  "Firebase Token Authentication": SiFirebase, 

  "Git & GitHub": FaGithub,
  Vite: SiVite,
  Vercel: SiVercel,
  Netlify: SiNetlify,
  Postman: SiPostman,
  "ESLint / Prettier": SiEslint,
  Figma: FaFigma,
};
