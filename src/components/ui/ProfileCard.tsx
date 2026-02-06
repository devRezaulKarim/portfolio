import { motion } from "motion/react";

import user from "@/assets/md-rezaul-karim.png";
import { contactDetails } from "@/lib/constants";
import { DownloadIcon } from "lucide-react";

export const ProfileCard = () => {
  return (
    <div className="profile-card-wrapper relative min-h-full max-w-4/5 2xl:max-w-[70%]">
      <div className="profile-card-border-glow"></div>
      <div className="profile-card flex flex-col gap-8 px-6 py-10">
        <div className="flex flex-col items-center gap-4">
          <img
            src={user}
            alt="Profile picture"
            className="border-primary size-24 rounded-full border-2 object-cover"
          />
          <div className="text-center text-white">
            <p className="logo-text-ibm">Rezaul Karim</p>
            <p className="code-text-ibm">Front-end developer</p>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <ul className="flex flex-col gap-4">
            {contactDetails.map((contact) => {
              const Icon = contact.icon;
              return (
                <li key={contact.name} className="flex items-center gap-3">
                  <Icon className="text-primary size-3.5" />
                  <span className="code-text-ibm text-white">
                    {contact.name}
                  </span>
                </li>
              );
            })}
          </ul>
          <ul className="flex items-center gap-4">
            {["HTML", "CSS", "JS", "REACT"].map((tech) => (
              <li key={tech}>
                <span className="bg-primary code-text-ibm text-bg-1 rounded-full px-3 py-1 font-semibold">
                  {tech}
                </span>
              </li>
            ))}
          </ul>
        </div>
        <motion.a
          href="#"
          className="font-u hover:text-primary bg-bg-2 relative flex w-fit items-center gap-4 rounded-full px-6 py-3 text-base text-white transition-colors duration-300"
          whileHover={{
            rotateX: 15,
            rotateY: 8,
            y: -5,
            boxShadow: "0px 8px 20px rgba(255, 82, 0, 0.7)",
          }}
          transition={{
            duration: 0.3,
            ease: "easeInOut",
          }}
          whileTap={{
            y: 0,
          }}
        >
          Download Resume <DownloadIcon className="size-4" />
          <span className="via-primary absolute inset-x-0 bottom-px mx-auto h-px w-3/4 bg-linear-to-r from-transparent to-transparent" />
          <span className="via-primary absolute inset-x-0 bottom-px mx-auto h-1 bg-linear-to-r from-transparent to-transparent opacity-0 blur-sm transition-opacity duration-300 group-hover:opacity-100" />
        </motion.a>
      </div>
      <div
        aria-hidden="true"
        role="presentation"
        className="pointer-events-none invisible flex flex-col gap-8 px-6 py-10"
      >
        <div className="flex flex-col items-center gap-4">
          <img
            src={user}
            alt=""
            aria-hidden="true"
            className="border-primary size-24 rounded-full border-2"
          />
          <div className="text-center text-white">
            <p className="logo-text-ibm">Rezaul Karim</p>
            <p className="code-text-ibm">Front-end developer</p>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <ul className="flex flex-col gap-4">
            {contactDetails.map((contact) => {
              const Icon = contact.icon;
              return (
                <li key={contact.name} className="flex items-center gap-3">
                  <Icon className="text-primary size-3.5" />
                  <span className="code-text-ibm text-white">
                    {contact.name}
                  </span>
                </li>
              );
            })}
          </ul>
          <ul className="flex items-center gap-4">
            {["HTML", "CSS", "JS", "REACT"].map((tech) => (
              <li key={tech}>
                <span className="bg-primary code-text-ibm text-bg-1 rounded-full px-3 py-1 font-semibold">
                  {tech}
                </span>
              </li>
            ))}
          </ul>
        </div>
        <span className="font-u flex w-fit items-center gap-4 rounded-full bg-white px-6 py-3 text-base">
          Download Resume <DownloadIcon className="size-4" />
        </span>
      </div>
    </div>
  );
};
