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
