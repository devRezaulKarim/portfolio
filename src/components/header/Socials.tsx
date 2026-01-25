import { socials } from "@/lib/constants";
import { Social } from "../ui/Social";

export const Socials = () => {
  return (
    <div className="social-links hidden items-center gap-2 md:flex">
      {socials.map((social) => (
        <Social
          key={social.name}
          icon={social.icon}
          name={social.name}
          url={social.url}
        />
      ))}
    </div>
  );
};
