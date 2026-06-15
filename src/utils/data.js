import {
  Code2,
  GraduationCap,
  Briefcase,
  Award,
  Rocket,
  Heart,
  Coffee,
  BookOpen,
  Database,
  Server,
  Cloud,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import { FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi";
import PROJECT_IMG_1 from "../assets/images/project-1.png";
import PROJECT_IMG_2 from "../assets/images/project-2.png";
import PROJECT_IMG_3 from "../assets/images/project-3.png";
import PROJECT_IMG_4 from "../assets/images/project-4.png";
import PROJECT_IMG_5 from "../assets/images/project-5.jpg";
import PROJECT_IMG_6 from "../assets/images/project-6.png";

export const SKILLS_CATEGORY = [
  {
    title: "Frontend",
    icon: Code2,
    description: "Crafting beautiful, responsive user interface",
    skills: [
      { name: "React", level: 95, color: "bg-blue-500" },
      { name: "Typescript", level: 90, color: "bg-blue-600" },
      { name: "Next.js", level: 88, color: "bg-gray-800" },
      { name: "Tailwind CSS", level: 92, color: "bg-cyan-500" },
      { name: "Framer Motion", level: 85, color: "bg-pink-500" },
    ],
  },
  {
    title: "Backend",
    icon: Server,
    description: "Building robust and efficient server-side logic",
    skills: [
      { name: "Node.js", level: 90, color: "bg-green-500" },
      { name: "Express.js", level: 88, color: "bg-gray-700" },
      { name: "Python", level: 85, color: "bg-yellow-500" },
      { name: "GraphQL", level: 80, color: "bg-pink-600" },
      { name: "REST APIs", level: 92, color: "bg-orange-600" },
    ],
  },
  {
    title: "Database",
    icon: Database,
    description: "Designing and optimizing database schemas",
    skills: [
      { name: "MySQL", level: 88, color: "bg-green-600" },
      { name: "MongoDB", level: 85, color: "bg-blue-700" },
      { name: "GraphQL", level: 78, color: "bg-red-500" },
      { name: "Prisma", level: 82, color: "bg-indigo-600" },
      { name: "Firebase", level: 78, color: "bg-yellow-600" },
    ],
  },
  {
    title: "DevOps",
    icon: Cloud,
    description:
      "Implementing CI/CD pipelines, Deploying and Scaling applications",
    skills: [
      { name: "Docker", level: 82, color: "bg-blue-600" },
      { name: "AWS", level: 78, color: "bg-orange-600" },
      { name: "Vercel", level: 90, color: "bg-gray-900" },
      { name: "Git", level: 95, color: "bg-orange-700" },
      { name: "CI/CD", level: 75, color: "bg-purple-600" },
    ],
  },
];

export const TECH_STACK = [
  "Javascript",
  "HTML5",
  "CSS",
  "Saas",
  "Webpack",
  "Vite",
  "Jest",
  "CyPress",
  "Figma",
  "Adobe XD",
  "Notion",
  "Slack",
  "CorelDraw",
];

export const STATS = [
  { number: "50+", label: "Projects Completed" },
  { number: "3+", label: "Years of Experience" },
  { number: "25+", label: "Technologies" },
  { number: "100%", label: "Client Satisfaction" },
];

export const PROJECTS = [
  {
    id: 1,
    title: "InterviewIQ.AI",
    description:
      "Developed an AI-powered mock interview platform that simulates real interview experiences and provides personalized feedback to improve candidate performance. Features role-based interview generation, real-time assessment, and detailed performance analytics.",
    image: PROJECT_IMG_6,
    tags: ["Vite", "Node.js", "MongoDB", "Tailwindcss"],
    liveUrl: "https://ai-interview-dun-delta.vercel.app/",
    githubUrl: "https://github.com/aditya2909/aditya-portfolio-new",
    featured: true,
    category: "Full Stack",
  },
  {
    id: 2,
    title: "AI Learning App",
    description:
      "Designed an AI-powered learning assistant dashboard that enables users to manage study documents, flashcards, and quizzes within a centralized interface. The dashboard improves learning productivity through structured navigation and activity tracking.",
    image: PROJECT_IMG_1,
    tags: ["Vite", "Node.js", "MongoDB", "Tailwindcss"],
    liveUrl: "https://ai-learning-app-dzvc.vercel.app/",
    githubUrl: "https://github.com/aditya2909/ai-learning-app",
    featured: true,
    category: "Full Stack",
  },
  {
    id: 3,
    title: "AI Resume Builder",
    description:
      "Created a SaaS-style landing page for an AI-powered resume generator that helps users create professional resumes efficiently. The design focuses on conversion optimization with strong typography, CTA placement, and brand trust indicators.",
    image: PROJECT_IMG_2,
    tags: ["Vite", "Node.js", "MongoDB", "Tailwindcss", "Clerk"],
    liveUrl: "https://resume-builder-gray-psi.vercel.app/",
    githubUrl: "https://github.com/aditya2909/resume-builder",
    featured: false,
    category: "Full Stack",
  },
  {
    id: 4,
    title: "Sociout Media App",
    description:
      "Developed a modern social media feed interface featuring story previews, post creation tools, activity updates, and sidebar navigation for seamless user interaction. The layout emphasizes usability, responsiveness, and structured content flow to replicate real-world social networking platforms.",
    image: PROJECT_IMG_3,
    tags: ["Vite", "Node.js", "Prisma", "Tailwindcss", "Clerk"],
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
    category: "Full Stack",
  },
  {
    id: 5,
    title: "Chat Application",
    description:
      "Designed and developed a modern authentication interface for a real-time chat application, featuring a dark-themed layout and engaging 3D illustrations to enhance user experience. The login screen provides secure access to messaging features while maintaining a clean and visually appealing UI suitable for contemporary communication platforms.",
    image: PROJECT_IMG_4,
    tags: ["React", "Node.js", "MongoDB", "Tailwindcss", "Socket.io", "Clerk"],
    liveUrl: "#",
    githubUrl: "https://github.com/aditya2909/chat-application",
    featured: false,
    category: "Full Stack",
  },
  {
    id: 6,
    title: "MoonFlix (Netflix Clone)",
    description:
      "Built a movie streaming platform homepage inspired by OTT services, featuring dynamic hero banners, category navigation, and featured movie highlights. The interface enhances discoverability and engagement.",
    image: PROJECT_IMG_5,
    tags: ["React", "Node.js", "MongoDB", "Tailwindcss"],
    liveUrl: "https://movie-mern.vercel.app/",
    githubUrl: "https://github.com/aditya2909/MovieMern",
    featured: false,
    category: "Full Stack",
  },
];

export const JOURNEY_STEPS = [
  {
    year: "2021",
    title: "Started Coding Journey",
    company: "Self-taught",
    description:
      "Began learning programming and web development through online resources, hands-on practice, and personal projects while building a strong foundation in HTML, CSS, JavaScript, and modern development tools.",
    icons: Code2,
    color: "bg-blue-500",
  },
  {
    year: "2022",
    title: "First Freelancer Project",
    company: "Independent",
    description:
      "Worked on freelance web development projects for clients, gaining real-world experience in responsive design, frontend development, client communication, and project delivery.",
    icons: Briefcase,
    color: "bg-green-500",
  },
  {
    year: "2023",
    title: "Completed Bachelor Degree in IT",
    company: "Mumbai University",
    description:
      "Graduated with a Bachelor’s degree in Information Technology, strengthening technical knowledge in software development, databases, networking, and web technologies.",
    icons: GraduationCap,
    color: "bg-purple-500",
  },
  {
    year: "2024",
    title: "Web Developer",
    company: "Aksharmaya Pvt. Ltd.",
    description:
      "Joined as a Web Developer and contributed to building modern websites and web applications using frontend and backend technologies while improving performance and user experience.",
    icons: Rocket,
    color: "bg-orange-500",
  },
  {
    year: "2025",
    title: "Executive - Web Developer",
    company: "Goel Power Engineers LLP",
    description:
      "Promoted to Executive - Web Developer role, leading web development initiatives, managing company websites, implementing scalable solutions, and contributing to digital growth strategies.",
    icons: Award,
    color: "bg-pink-500",
  },
];

export const PASSIONS = [
  {
    icons: Heart,
    title: "User Experience",
    description: "Crafting intuitive interfaces that users love.",
  },
  {
    icons: Coffee,
    title: "Problem Solving",
    description: "Turning complex challenges into elegant solutions.",
  },
  {
    icons: BookOpen,
    title: "Continours Learning",
    description: "Always exploring new technologies and best practices.",
  },
];

export const SOCIAL_LINKS = [
  {
    name: "Github",
    icon: FiGithub,
    url: "https://github.com/aditya2909",
    color: "hover:text-gray-400",
    bgColor: "hover:bg-gray-800",
  },
  {
    name: "Linkedin",
    icon: FiLinkedin,
    url: "https://www.linkedin.com/aditya-2909/",
    color: "hover:text-blue-400",
    bgColor: "hover:bg-blue-800",
  },
  {
    name: "Twitter",
    icon: FiTwitter,
    url: "https://www.instagram.com/_aditya2909/",
    color: "hover:text-sky-400",
    bgColor: "hover:bg-sky-500/10",
  },
  {
    name: "Email",
    icon: Mail,
    url: "mailto:jaiswaladitya042@gmail.com",
    color: "hover:text-green-400",
    bgColor: "hover:bg-green-500/10",
  },
];

export const CONTACT_INFO = [
  {
    icon: MapPin,
    label: "Location",
    value: "Mahim, Mumbai, India",
  },
  {
    icon: Mail,
    label: "Email",
    value: "jaiswaladitya042@gmail",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 970-260-6193",
  },
];
