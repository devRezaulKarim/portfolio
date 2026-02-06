import { MailIcon } from "lucide-react";
import { ProfileCard } from "../ui/ProfileCard";

export const Hero = () => {
  return (
    <section
      style={{
        backgroundImage: `radial-gradient(circle at 0.5px 0.5px, rgba(255, 82, 0, 0.3) 0.5px, transparent 0)`,
        backgroundSize: "12px 12px",
      }}
      className="bg-bg-1"
    >
      <div className="container px-16 py-20">
        <div className="grid xl:grid-cols-11">
          <div className="xl:col-span-4" />

          <div className="bg-text-u text-primary text-left xl:col-span-7">
            Developer
          </div>
        </div>{" "}
        <div className="grid items-center xl:grid-cols-11">
          <div className="xl:col-span-4">
            <ProfileCard />
          </div>
          <div className="xl:col-span-7 xl:space-y-6 2xl:space-y-8">
            <div>
              <span className="text-secondary code-text-ibm">&lt;h1&gt;</span>
              <h1 className="h1-text-u flex flex-col pl-6 text-white">
                <span>Hey</span>
                <span>
                  I’m <span className="text-primary">Rezaul Karim</span>,
                </span>
                <span>Front-end developer</span>
              </h1>
              <span className="text-secondary code-text-ibm">&lt;/h1&gt;</span>
            </div>
            <div>
              <span className="text-secondary code-text-ibm">&lt;p&gt;</span>
              <p className="para-text-ibm pl-6 text-white">
                I help businesses build modern, responsive web interfaces with a
                strong focus on performance and usability. Turning complex ideas
                into clean, scalable UI that supports real growth.
              </p>
              <span className="text-secondary code-text-ibm">&lt;/p&gt;</span>
            </div>
            <a
              href="#contact"
              className="text-primary h2-text-ibm talk-btn ml-4 flex w-fit items-stretch py-1 xl:pr-2 xl:pl-3 2xl:pr-3 2xl:pl-4"
            >
              <span className="xl:mr-3 2xl:mr-4">let’s talk</span>
              <span className="talk-icon inline-flex items-center justify-center p-2">
                <MailIcon className="xl:size-4.5 2xl:size-6" />
              </span>
              <span className="talk-bubble"></span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
