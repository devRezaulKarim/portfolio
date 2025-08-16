import type { ElementType } from "react";

export type SectionDataType = {
  id: string;
  bgColor: string;
  textColor: string;
};

export type JourneyCardType = {
  id: number;
  date: number;
  title: string;
  designation?: string;
  description: string;
  cardIcon: ElementType;
};

export type ToolsType = {
  id: number;
  toolName: string;
  toolIcon: ElementType;
};
type AspectRatioEnum = "square" | "portrait";

export type ProjectType = {
  id: number;
  title: string;
  subtitle: string;
  image: string;
  aspect: AspectRatioEnum;
};

export type Project2Type = {
  id: number;
  title: string;
  desc: string;
  image: string;
  liveLink: string;
  sourceLink: string;
  features: string[];
  techs: string[];
};
