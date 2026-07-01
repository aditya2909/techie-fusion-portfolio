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
  Lightbulb,
  Target,
  Handshake,
  CircleStar,
  Sparkles,
  Globe,
  LayoutDashboard,
  TrendingUp,
  Laptop,
  BarChart3,
} from "lucide-react";
import { FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi";
import PROJECT_IMG_1 from "../assets/images/project-1.png";
import PROJECT_IMG_2 from "../assets/images/project-2.png";
import PROJECT_IMG_3 from "../assets/images/project-3.png";
import PROJECT_IMG_4 from "../assets/images/project-4.png";
import PROJECT_IMG_5 from "../assets/images/project-5.png";
import PROJECT_IMG_6 from "../assets/images/project-6.png";
import PROJECT_IMG_7 from "../assets/images/project-7.png";
import PROJECT_IMG_8 from "../assets/images/Project-8.png";
import PROJECT_IMG_9 from "../assets/images/Project-9.png";
import PROJECT_IMG_10 from "../assets/images/project-10.png";
import PROJECT_IMG_11 from "../assets/images/Project-11.png";
import PROJECT_IMG_12 from "../assets/images/project-12.jpg";
import PROJECT_IMG_13 from "../assets/images/Project-13.png";

export const SKILLS_CATEGORY = [
  {
    title: "Website Development",
    icon: Globe,
    description:
      "Designing responsive, SEO-friendly, and high-performance websites that elevate your brand and deliver exceptional user experiences.",
    skills: [
      { name: "HTML5", level: 98, color: "bg-orange-500" },
      { name: "CSS3", level: 97, color: "bg-blue-500" },
      { name: "JavaScript", level: 95, color: "bg-yellow-500" },
      { name: "React.js", level: 92, color: "bg-cyan-500" },
      { name: "WordPress", level: 96, color: "bg-indigo-600" },
    ],
  },

  {
    title: "Software Development",
    icon: Laptop,
    description:
      "Developing secure, scalable web applications, business portals, CRM systems, ERP solutions, and custom software tailored to your business needs.",
    skills: [
      { name: "Laravel", level: 95, color: "bg-red-500" },
      { name: "Node.js", level: 93, color: "bg-green-600" },
      { name: "Express.js", level: 90, color: "bg-gray-700" },
      { name: "MongoDB", level: 90, color: "bg-emerald-600" },
      { name: "REST APIs", level: 94, color: "bg-orange-500" },
    ],
  },

  {
    title: "Digital Marketing",
    icon: BarChart3,
    description:
      "Helping businesses grow through data-driven marketing strategies that improve visibility, generate qualified leads, and maximize ROI.",
    skills: [
      { name: "SEO", level: 95, color: "bg-green-500" },
      { name: "Google Ads", level: 92, color: "bg-blue-600" },
      { name: "Meta Ads", level: 90, color: "bg-sky-500" },
      { name: "Social Media Marketing", level: 94, color: "bg-pink-500" },
      { name: "Content Marketing", level: 88, color: "bg-violet-600" },
    ],
  },

  {
    title: "Cloud & Deployment",
    icon: Cloud,
    description:
      "Deploying, managing, and maintaining scalable applications with secure hosting, cloud infrastructure, and modern development workflows.",
    skills: [
      { name: "Git & GitHub", level: 96, color: "bg-orange-600" },
      { name: "Vercel", level: 95, color: "bg-black" },
      { name: "Render", level: 90, color: "bg-indigo-600" },
      { name: "Hostinger", level: 92, color: "bg-purple-600" },
      { name: "Cloudinary", level: 88, color: "bg-blue-500" },
    ],
  },
];

export const TECH_STACK = [
  "HTML5",
  "CSS3",
  "JavaScript",
  "TypeScript",
  "React.js",
  "Next.js",
  "Laravel",
  "PHP",
  "Node.js",
  "Express.js",
  "MongoDB",
  "MySQL",
  "WordPress",
  "Tailwind CSS",
  "Bootstrap",
  "REST API",
  "Git",
  "GitHub",
  "Vercel",
  "Render",
  "Cloudinary",
  "Figma",
  "Adobe XD",
  "Google Analytics",
  "Google Ads",
  "Meta Ads",
];

export const STATS = [
  { number: "50+", label: "Projects Completed" },
  { number: "4+", label: "Years of Experience" },
  { number: "25+", label: "Technologies" },
  { number: "99%", label: "Client Satisfaction" },
];

export const PROJECTS = [
  {
    id: 1,
    title: "Ascencia Malta",
    description:
      "Developed and maintained the official website for Ascencia Malta using Laravel and SQL. Implemented responsive interfaces, optimized backend functionality, managed dynamic content, and enhanced overall website performance to provide a seamless user experience.",
    image: PROJECT_IMG_1,
    tags: ["PHP", "Laravel", "SQL", "Bootstrap"],
    liveUrl: "https://www.ascenciamalta.edu.mt/",
    githubUrl: "#",
    featured: true,
    category: "Laravel",
  },
  {
    id: 2,
    title: "eAscencia",
    description:
      "Built a comprehensive education management platform using Laravel, PHP, and SQL with secure authentication, dynamic course management, student portals, and responsive dashboards designed for efficient academic administration.",
    image: PROJECT_IMG_2,
    tags: ["PHP", "Laravel", "SQL", "JavaScript"],
    liveUrl: "https://www.eascencia.mt/",
    githubUrl: "#",
    featured: true,
    category: "Laravel",
  },
  {
    id: 3,
    title: "GC Financial",
    description:
      "Designed and developed a professional corporate website using WordPress CMS, delivering a responsive, SEO-friendly, and user-centric experience to effectively showcase financial services and strengthen the company's online presence.",
    image: PROJECT_IMG_3,
    tags: ["WordPress", "Elementor", "PHP", "CSS"],
    liveUrl: "https://gcfinancial.ca/",
    githubUrl: "#",
    featured: false,
    category: "WordPress",
  },
  {
    id: 4,
    title: "InterviewIQ AI",
    description:
      "Developed an AI-powered mock interview platform that generates role-based interview questions, provides intelligent feedback, tracks candidate performance, and helps users prepare confidently for technical and HR interviews.",
    image: PROJECT_IMG_4,
    tags: ["Vite", "Node.js", "MongoDB", "Tailwind CSS", "Clerk"],
    liveUrl: "https://ai-interview-dun-delta.vercel.app/",
    githubUrl: "https://github.com/aditya2909",
    featured: true,
    category: "Full Stack",
  },
  {
    id: 5,
    title: "AI Learning Platform",
    description:
      "Built an AI-assisted learning platform enabling users to organize study materials, generate quizzes, create flashcards, and monitor learning progress through an intuitive dashboard powered by modern web technologies.",
    image: PROJECT_IMG_5,
    tags: ["Vite", "Node.js", "MongoDB", "Tailwind CSS", "Clerk"],
    liveUrl: "https://ai-learning-app-dzvc.vercel.app/login",
    githubUrl: "https://github.com/aditya2909/ai-learning-app",
    featured: true,
    category: "Full Stack",
  },
  {
    id: 6,
    title: "AI Resume Builder",
    description:
      "Created an AI-powered resume builder that enables users to generate professional resumes with customizable templates, real-time editing, authentication, and a modern user-friendly interface.",
    image: PROJECT_IMG_6,
    tags: ["Vite", "Node.js", "MongoDB", "Tailwind CSS", "Clerk"],
    liveUrl: "https://resume-builder-gray-psi.vercel.app/",
    githubUrl: "https://github.com/aditya2909/resume-builder",
    featured: true,
    category: "Full Stack",
  },
  {
    id: 7,
    title: "Job Portal",
    description:
      "Developed a modern recruitment platform connecting employers and job seekers with secure authentication, job posting, application management, advanced filtering, and responsive user dashboards.",
    image: PROJECT_IMG_7,
    tags: ["Vite", "Node.js", "MongoDB", "Tailwind CSS"],
    liveUrl: "https://job-portal-new-lilac.vercel.app/",
    githubUrl: "https://github.com/aditya2909",
    featured: true,
    category: "Full Stack",
  },
  {
    id: 8,
    title: "Sociout",
    description:
      "Built a modern social networking application featuring authentication, user profiles, post sharing, social interactions, and responsive layouts to deliver an engaging community-driven experience.",
    image: PROJECT_IMG_8,
    tags: ["Vite", "Node.js", "MongoDB", "Tailwind CSS", "Clerk"],
    liveUrl: "https://sociout-server-9fav.vercel.app/",
    githubUrl: "https://github.com/aditya2909",
    featured: true,
    category: "Full Stack",
  },
  {
    id: 9,
    title: "HealthyByte",
    description:
      "Designed and developed an eCommerce website for a healthy snacks brand using WordPress CMS with WooCommerce, enabling seamless product management, secure online ordering, and an optimized shopping experience.",
    image: PROJECT_IMG_9,
    tags: ["WordPress", "WooCommerce", "PHP", "Elementor"],
    liveUrl: "https://healthybyte.in/",
    githubUrl: "#",
    featured: true,
    category: "WordPress",
  },
  {
    id: 10,
    title: "Antony Commercial Vehicle",
    description:
      "Developed a responsive corporate website for a commercial vehicle dealership using WordPress CMS, highlighting products, services, and customer engagement while maintaining performance and SEO best practices.",
    image: PROJECT_IMG_10,
    tags: ["WordPress", "PHP", "CSS", "JavaScript"],
    liveUrl: "https://antonycommercialvehicle.com/",
    githubUrl: "#",
    featured: false,
    category: "WordPress",
  },
  {
    id: 11,
    title: "St. Anne's High School",
    description:
      "Created a modern educational institution website using WordPress CMS featuring dynamic content management, admission information, event updates, galleries, and a responsive design for students and parents.",
    image: PROJECT_IMG_11,
    tags: ["WordPress", "PHP", "CSS", "Elementor"],
    liveUrl: "https://stanneshighschool.com/",
    githubUrl: "#",
    featured: false,
    category: "WordPress",
  },
  {
    id: 12,
    title: "MoonFlix",
    description:
      "Developed a full-stack movie streaming application inspired by modern OTT platforms, featuring movie discovery, dynamic content management, responsive UI, user authentication, and an immersive entertainment experience.",
    image: PROJECT_IMG_12,
    tags: ["React", "Node.js", "MongoDB", "Express", "Tailwind CSS"],
    liveUrl: "https://movie-mern.vercel.app/",
    githubUrl: "https://github.com/aditya2909/MovieMern",
    featured: true,
    category: "MERN Stack",
  },
];

export const JOURNEY_STEPS = [
  {
    year: "2022",
    title: "Founded With A Vision",
    company: "Where Innovation Began",
    description:
      "Started with a mission to help businesses establish a powerful digital presence through creative design, modern technology, and customer-focused solutions. Our journey began by delivering high-quality websites for startups and local businesses.",
    icons: Sparkles,
    color: "bg-blue-500",
  },
  {
    year: "2023",
    title: "Growing Beyond Websites",
    company: "Digital Transformation",
    description:
      "Expanded our expertise into responsive website development, UI/UX design, branding, and business websites. Successfully partnered with clients across multiple industries while building a reputation for quality and reliability.",
    icons: Globe,
    color: "bg-green-500",
  },
  {
    year: "2024",
    title: "Building Smart Business Solutions",
    company: "Software Development",
    description:
      "Introduced custom web portals, CRM systems, ERP solutions, booking platforms, and workflow automation to help businesses streamline operations and improve productivity through technology.",
    icons: LayoutDashboard,
    color: "bg-purple-500",
  },
  {
    year: "2025",
    title: "Driving Measurable Growth",
    company: "Marketing & Performance",
    description:
      "Expanded into Digital Marketing with SEO, Google Ads, Meta Ads, Social Media Management, and Performance Marketing—helping brands increase visibility, generate qualified leads, and achieve measurable business growth.",
    icons: TrendingUp,
    color: "bg-orange-500",
  },
  {
    year: "2026",
    title: "Complete Digital Solutions Under One Roof",
    company: "Innovation Continues",
    description:
      "Today, we provide end-to-end digital solutions including website development, custom software, web portals, branding, UI/UX design, cloud solutions, and result-driven marketing strategies—serving businesses as their long-term digital growth partner.",
    icons: Rocket,
    color: "bg-pink-500",
  },
];

export const PASSIONS = [
  {
    icons: Lightbulb,
    title: "Innovation First",
    description:
      "We embrace emerging technologies and creative thinking to build future-ready digital solutions that keep businesses ahead of the competition.",
  },
  {
    icons: Target,
    title: "Business-Focused Solutions",
    description:
      "Every website, marketing campaign, and software solution is designed with one goal—helping your business grow, improve efficiency, and deliver measurable results.",
  },
  {
    icons: Handshake,
    title: "Long-Term Partnerships",
    description:
      "We don't just complete projects; we build lasting relationships by providing continuous support, optimization, and digital growth strategies.",
  },
  {
    icons: CircleStar,
    title: "Quality Without Compromise",
    description:
      "From the smallest design element to enterprise-grade software architecture, we prioritize excellence, reliability, and attention to detail.",
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
