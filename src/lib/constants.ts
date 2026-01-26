import {
  CodeIcon,
  MailIcon,
  MonitorIcon,
  UserIcon,
  LayoutGridIcon,
  MapPinIcon,
  BriefcaseIcon,
  GlobeIcon,
} from "lucide-react";
import Discord from "../custom-icons/Discord";
import Github from "../custom-icons/Github";
import { Linkedin } from "../custom-icons/Linkedin";
import Slack from "../custom-icons/Slack";

import type {
  SocialType,
  NavLinkType,
  ContactDetailsType,
} from "../types/types";

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
