import user from "@/assets/user.png";
import { contactDetails } from "@/lib/constants";
import { DownloadIcon } from "lucide-react";

export const ProfileCard = () => {
  return (
    <div className="profile-card relative isolate w-4/5 overflow-hidden rounded-tl-[150px] rounded-br-[150px] bg-white p-0.75">
      <div className="bg-bg-1 flex flex-col gap-8 rounded-tl-[147px] rounded-br-[147px] px-6 py-10">
        <div className="flex flex-col items-center gap-4">
          <img
            src={user}
            alt="Profile picture"
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
                  <Icon className="text-primary size-3.5" />{" "}
                  <span className="code-text-ibm text-white">
                    {contact.name}
                  </span>
                </li>
              );
            })}
          </ul>
          <ul className="flex items-center gap-4">
            {["HTML", "CSS", "JS", "REACT"].map((tech) => (
              <span
                key={tech}
                className="bg-primary code-text-ibm text-bg-1 rounded-full px-3 py-1 font-semibold"
              >
                {tech}
              </span>
            ))}
          </ul>
        </div>
        <a
          href="#"
          className="button-text-u flex w-fit items-center gap-4 rounded-full bg-white px-6 py-3"
        >
          Download Resume <DownloadIcon className="size-5" />
        </a>
      </div>
    </div>
  );
};
