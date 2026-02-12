import type { FC, SVGProps } from "react";

export type CustomIconType = SVGProps<SVGSVGElement> & {
  className?: string;
  width?: number;
  height?: number;
};

export type SocialType = {
  icon: FC<CustomIconType>;
  name: string;
  url: string;
};
export type NavLinkType = {
  icon: FC<SVGProps<SVGSVGElement>>;
  to: string;
};
export type ContactDetailsType = {
  icon: FC<SVGProps<SVGSVGElement>>;
  name: string;
};

export type EnvironmentType = {
  icon: FC<SVGProps<SVGSVGElement>>;
  name: string;
  stacks: string[];
  idx?: number;
};
export type TechType = {
  icon: FC<CustomIconType>;
  name: string;
  color: string;
  idx?: number;
};

export type ProjectType = {
  id: number;
  title: string;
  image: string;
  liveLink: string;
  sourceLink: string;
  techs: string[];
};
