import React from "react";
import { FacebookIcon } from "../custom-svgs/facebook-icon";
import { LinkedinIcon } from "../custom-svgs/linkedin-icon";
import { GithubIcon } from "../custom-svgs/github-icon";

const SocialIcons = () => {
  return (
    <div className="social-icons absolute right-8 bottom-8 z-10 flex items-center gap-x-2 md:right-9.5 md:bottom-9.5 lg:right-13 lg:bottom-13">
      <a
        href="https://www.facebook.com/muha.rezaulkarim"
        target="_blank"
        className="duration-200 hover:scale-90 hover:shadow-[0_0_3px_2px_var(--shadow-color),_0_0_4px_3px_var(--shadow-color-2)]"
      >
        <FacebookIcon className="pointer-events-none w-6 duration-200 sm:w-8" />
      </a>
      <a
        href="https://www.linkedin.com/in/dev-rezaul-karim/"
        target="_blank"
        className="duration-200 hover:scale-90 hover:shadow-[0_0_3px_2px_var(--shadow-color),_0_0_4px_3px_var(--shadow-color-2)]"
      >
        <LinkedinIcon className="pointer-events-none w-6 duration-200 sm:w-8" />
      </a>
      <a
        href="https://github.com/devRezaulKarim"
        target="_blank"
        className="duration-200 hover:scale-90 hover:shadow-[0_0_3px_2px_var(--shadow-color),_0_0_4px_3px_var(--shadow-color-2)]"
      >
        <GithubIcon className="pointer-events-none w-6 duration-200 sm:w-8" />
      </a>
    </div>
  );
};

export default SocialIcons;
