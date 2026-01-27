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
import Slack from "../custom-icons/Slack";

import type {
  SocialType,
  NavLinkType,
  ContactDetailsType,
  EnvironmentType,
  TechType,
} from "../types/types";
import HTML from "@/custom-icons/HTML";
import CSS from "@/custom-icons/CSS";
import JS from "@/custom-icons/JS";
import ReactIcon from "@/custom-icons/React";
import TS from "@/custom-icons/TS";
// import NextIcon from "@/custom-icons/NextIcon";
// import Express from "@/custom-icons/Express";
// import Mongo from "@/custom-icons/Mongo";
// import MySQL from "@/custom-icons/MySQL";
// import PostgreSQL from "@/custom-icons/PostgreSQL";

export const socials: SocialType[] = [
  { icon: Linkedin, name: "Linkedin", url: "#" },
  { icon: Github, name: "Github", url: "#" },
  { icon: Slack, name: "Slack", url: "#" },
  { icon: Discord, name: "Discord", url: "#" },
];

export const navLinks: NavLinkType[] = [
  { icon: LayoutGridIcon, to: "#" },
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
  // {
  //   icon: NextIcon,
  //   name: "Next",
  //   color: "#000000",
  // },
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
