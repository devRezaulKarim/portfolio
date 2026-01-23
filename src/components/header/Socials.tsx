import { socials } from "../../lib/constants";
import { Social } from "../ui/Social";

export const Socials = () => {
  return (
    <div className="flex items-center gap-8">
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
