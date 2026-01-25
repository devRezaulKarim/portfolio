import type { FC, SVGProps } from "react";

export type SocialIconType = SVGProps<SVGSVGElement> & {
  className?: string;
  width?: number;
  height?: number;
};

export type SocialType = {
  icon: FC<SocialIconType>;
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
