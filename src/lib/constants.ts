import {
  CodeIcon,
  MailIcon,
  MonitorIcon,
  UserIcon,
  LayoutGridIcon,
  MapPinIcon,
  BriefcaseIcon,
  GlobeIcon,
  SmartphoneIcon,
} from "lucide-react";
import Discord from "../custom-icons/Discord";
import Github from "../custom-icons/Github";
import { Linkedin } from "../custom-icons/Linkedin";

import type {
  SocialType,
  NavLinkType,
  ContactDetailsType,
  EnvironmentType,
  TechType,
  ProjectType,
} from "../types/types";
import HTML from "@/custom-icons/HTML";
import CSS from "@/custom-icons/CSS";
import JS from "@/custom-icons/JS";
import ReactIcon from "@/custom-icons/React";
import TS from "@/custom-icons/TS";
import NextIcon from "@/custom-icons/NextIcon";
// import Express from "@/custom-icons/Express";
// import Mongo from "@/custom-icons/Mongo";
// import MySQL from "@/custom-icons/MySQL";
// import PostgreSQL from "@/custom-icons/PostgreSQL";

export const socials: SocialType[] = [
  {
    icon: Linkedin,
    name: "Linkedin",
    url: "https://www.linkedin.com/in/dev-rezaul-karim/",
  },
  { icon: Github, name: "Github", url: "https://github.com/devRezaulKarim" },
  {
    icon: Discord,
    name: "Discord",
    url: "https://discord.com/users/rezaulkarim18",
  },
];

export const navLinks: NavLinkType[] = [
  { icon: LayoutGridIcon, to: "#hero" },
  { icon: UserIcon, to: "#about" },
  { icon: CodeIcon, to: "#skills" },
  { icon: MonitorIcon, to: "#works" },
  { icon: MailIcon, to: "#contact" },
];
export const contactDetails: ContactDetailsType[] = [
  { icon: MailIcon, name: "dev.rezaulkarim@gmail.com" },
  { icon: MapPinIcon, name: "Dhaka, Bangladesh" },
  { icon: BriefcaseIcon, name: "Full-time" },
  { icon: GlobeIcon, name: "dev-rezaulkarim.netlify.app" },
];

export const environments: EnvironmentType[] = [
  {
    icon: MonitorIcon,
    name: "Web Development",
    stacks: ["HTML", "CSS", "JS", "REACT"],
  },
  {
    icon: SmartphoneIcon,
    name: "App Development",
    stacks: ["IOS", "Android"],
  },
];

export const techs: TechType[] = [
  {
    icon: HTML,
    name: "HTML",
    color: "#E54F26",
  },
  {
    icon: CSS,
    name: "CSS",
    color: "#0C73B8",
  },
  {
    icon: JS,
    name: "JS",
    color: "#E7A020",
  },
  {
    icon: TS,
    name: "TS",
    color: "#007ACC",
  },
  {
    icon: ReactIcon,
    name: "React",
    color: "#28A9E0",
  },
  {
    icon: NextIcon,
    name: "Next",
    color: "#000000",
  },
  // {
  //   icon: Express,
  //   name: "Express",
  //   color: "#000000",
  // },
  // {
  //   icon: Mongo,
  //   name: "MongoDB",
  //   color: "#3f9143",
  // },
  // {
  //   icon: MySQL,
  //   name: "MySql",
  //   color: "#00678c",
  // },
  // {
  //   icon: PostgreSQL,
  //   name: "PostgreSQL",
  //   color: "#336791",
  // },
];

export const projects: ProjectType[] = [
  {
    id: 1,
    title: "Carz",
    desc: "Carz is an e-commerce platform for buying and selling cars, featuring user-friendly browsing, advanced search filters, secure payments, and a responsive design. It allows users to compare cars, manage profiles, and track purchases, while providing an intuitive admin panel for managing listings.",
    image: "/projects-img/carz-long.png",
    liveLink: "https://carz-rkz.vercel.app/",
    sourceLink: "https://github.com/devRezaulKarim/carz",
    features: [
      "User-Friendly Interface",
      "Search Functionality",
      "Filtering Classifieds",
      "Manage Favorite Classified",
      "Multi step form for reservation",
      "User Authentication (Admin)",
      "Add, Update and Delete Classified (Admin Only)",
    ],
    techs: [
      "Next.js",
      "TypeScript",
      "Auth.js",
      "Prisma",
      "PostgreSQL",
      "AI SDK",
      "Redis",
    ],
  },
  {
    id: 2,
    title: "Fontawesome (clone)",
    liveLink: "https://fontawesome-clone.vercel.app/",
    image: "/projects-img/fa.png",
    sourceLink: "https://github.com/devRezaulKarim/fontawesome-clone",
    desc: "This is a clone of the popular Font Awesome icons library's search icon page, built to provide a seamless icon browsing experience. Users can explore thousands of icons with powerful filtering options by style, family, and category, along with a fast and responsive search.",
    features: [
      "See all icons",
      "Style filtration",
      "Icon Family filtration",
      "Category filtration",
      "Search icon",
    ],
    techs: ["React", "Redux", "JSON API", "Axios", "React-paginate"],
  },
  {
    id: 3,
    title: "Travel Vista",
    liveLink: "https://travel-vista-rkz.netlify.app/",
    image: "/projects-img/tv.png",
    sourceLink: "https://github.com/devRezaulKarim/travelVista",
    desc: "Here showcasing a dynamic and user-friendly hotel booking platform that I've designed and developed. This comprehensive web application allows users to seamlessly explore a wide array of available hotels and efficiently book their accommodations.",
    features: [
      "User-Friendly Interface",
      "Search Functionality",
      "User Authentication",
    ],
    techs: [
      "React",
      "React Router Dom",
      "React Date Range",
      "JSON API",
      "React Toastify",
      "Firebase",
    ],
  },

  // {
  //   id: 4,
  //   title: "Halal Jibika",
  //   liveLink: "https://halal-jibika.netlify.app/",
  //   sourceLink: "https://github.com/devRezaulKarim/halal-jibika",
  //   desc: "Welcome to HALAL JIBIKA! This is a web application where users can find jobs, add them to favorites, and apply for them. Admins have access to a dashboard where they can manage job listings by adding, deleting, or editing them. Users are required to log in to access features such as adding favorites or applying for jobs.",
  //   features: [
  //     "Job Listings",
  //     "Job Applications",
  //     "User Authentication",
  //     "Add/Delete/Edit Jobs",
  //   ],
  //   techs: [
  //     "React",
  //     "React Router Dom",
  //     "React Hook Form",
  //     "Firebase",
  //     "JSON API",
  //     "React Toastify",
  //   ],
  //   image: "/projects-img/hj.png",
  // },
  // {
  //   id: 5,
  //   title: "Task Management",
  //   liveLink: "https://task-management-appp.vercel.app/",
  //   sourceLink: "https://github.com/devRezaulKarim/task-management-app",
  //   desc: "A simple Task Management app built with React, react-router-dom, useReducer, and context.",
  //   features: [
  //     "Add tasks",
  //     "Toggle complete/incomplete tasks",
  //     "Edit/update tasks",
  //     "Delete tasks",
  //   ],
  //   techs: ["React", "React Icons", "Local Storage"],
  //   image: "/projects-img/tm.png",
  // },
  // {
  //   id: 6,
  //   title: "Expense Tracker",
  //   liveLink: "https://trackyourexpenses.vercel.app/",
  //   sourceLink: "https://github.com/devRezaulKarim/expenses-tracker",
  //   desc: "This Expense Tracker web application allows users to track their expenses under various categories. Users can add expenses, view them based on different time-frames such as 'today', 'last seven days', and 'this month'. Additionally, users can view detailed information about their expenses on a separate details page.",
  //   features: ["Add expenses", "View expenses based on time-frames"],
  //   techs: ["React", "React Router Dom", "CSS"],
  //   image: "/projects-img/et.png",
  // },
  // {
  //   id: 7,
  //   title: "Inventory Management",
  //   liveLink: "https://product-inventory-lilac.vercel.app/",
  //   sourceLink: "https://github.com/devRezaulKarim/product-inventory",
  //   desc: "Welcome to my portfolio showcasing a dynamic and user-friendly hotel booking platform that I've designed and developed. This comprehensive web application allows users to seamlessly explore a wide array of available hotels and efficiently book their accommodations.",
  //   features: [
  //     "User-Friendly Interface",
  //     "Search Functionality",
  //     "User Authentication",
  //   ],
  //   techs: [
  //     "React",
  //     "React Router Dom",
  //     "React Date Range",
  //     "React Icons",
  //     "React Toastify",
  //     "Firebase",
  //   ],
  //   image: "/projects-img/im.png",
  // },
];
