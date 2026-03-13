import { cn } from "@/lib/utils";
import { IconBrandGithub, IconBrandLinkedin } from "@tabler/icons-react";
import { HTMLMotionProps, motion } from "motion/react";

type NavSocialProps = HTMLMotionProps<"div">;

export const NavSocial = ({ className, ...props }: NavSocialProps) => {
  return (
    <motion.div className={cn("flex items-center gap-3", className)} {...props}>
      <a
        href="https://www.linkedin.com/in/dev-rezaul-karim/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <IconBrandLinkedin size={20} />
      </a>
      <a
        href="https://github.com/devRezaulKarim"
        target="_blank"
        rel="noopener noreferrer"
      >
        <IconBrandGithub size={20} />
      </a>
    </motion.div>
  );
};
