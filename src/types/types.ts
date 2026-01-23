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
