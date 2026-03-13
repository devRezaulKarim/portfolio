import { cn } from "@/lib/utils";
import { HtmlHTMLAttributes } from "react";

type NavLinksProps = HtmlHTMLAttributes<HTMLUListElement>;
export const NavLinks = ({ className, ...props }: NavLinksProps) => {
  return (
    <ul
      className={cn(
        "flex items-center justify-center gap-4 duration-200",
        className,
      )}
      {...props}
    >
      <li>
        <a href="#about">About</a>
      </li>
      <li>
        <a href="#skills">Skills</a>
      </li>
      <li>
        <a href="#experience">Experience</a>
      </li>
      <li>
        <a href="#projects">Projects</a>
      </li>
    </ul>
  );
};
