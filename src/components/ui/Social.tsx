import type { SocialType } from "@/types/types";

export const Social = ({ icon: Icon, name, url }: SocialType) => {
  return (
    <a
      href={url}
      className="group text-primary relative inline-flex items-center gap-2 px-2 py-1"
    >
      <Icon />
      <span className="hidden text-neutral-300 sm:inline-block">{name}</span>
    </a>
  );
};
