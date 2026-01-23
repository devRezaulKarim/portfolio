import type { SocialType } from "../../types/types";

export const Social = ({ icon: Icon, name, url }: SocialType) => {
  return (
    <a
      href={url}
      className="group text-primary relative inline-flex items-center gap-2"
    >
      <Icon />
      <span className="after:bg-primary relative text-white after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:transition-all after:duration-300 after:ease-out group-hover:after:w-full">
        {name}
      </span>
    </a>
  );
};
