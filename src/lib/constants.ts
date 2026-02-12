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
    image: "/projects-img/carz-long.png",
    liveLink: "https://carz-rkz.vercel.app/",
    sourceLink: "https://github.com/devRezaulKarim/carz",
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
    techs: ["React", "Redux", "JSON API", "Axios", "React-paginate"],
  },
  {
    id: 3,
    title: "Travel Vista",
    liveLink: "https://travel-vista-rkz.netlify.app/",
    image: "/projects-img/tv.png",
    sourceLink: "https://github.com/devRezaulKarim/travelVista",
    techs: [
      "React",
      "React Router Dom",
      "React Date Range",
      "JSON API",
      "React Toastify",
      "Firebase",
    ],
  },
];
