import {
  CodeIcon,
  MailIcon,
  MonitorIcon,
  UserIcon,
  LayoutGridIcon,
} from "lucide-react";
import Discord from "../social-icons/Discord";
import Github from "../social-icons/Github";
import { Linkedin } from "../social-icons/Linkedin";
import Slack from "../social-icons/Slack";

import type { SocialType, NavLinkType } from "../types/types";

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
