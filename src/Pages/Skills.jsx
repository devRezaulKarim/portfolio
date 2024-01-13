import SkillsBall from "../Components/SkillsBall.jsx";
import { FaHandPointRight } from "react-icons/fa";

export default function Skills() {
  const languages = [
    { topic: "html", logo: "https://www.svgrepo.com/show/452228/html-5.svg" },

    { topic: "css", logo: "https://www.svgrepo.com/show/452185/css-3.svg" },
    {
      topic: "bootstrap",
      logo: "https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo.svg",
    },
    {
      topic: "tailwind",
      logo: "https://www.svgrepo.com/show/374118/tailwind.svg",
    },

    {
      topic: "javascript",
      logo: "https://www.svgrepo.com/show/349419/javascript.svg",
    },
    {
      topic: "react",
      logo: "https://www.svgrepo.com/show/493719/react-javascript-js-framework-facebook.svg",
    },

    {
      topic: "node",
      logo: "https://www.svgrepo.com/show/376337/node-js.svg",
    },
    {
      topic: "express",
      logo: "https://www.vectorlogo.zone/logos/expressjs/expressjs-icon.svg",
    },
    {
      topic: "next",
      logo: "https://www.svgrepo.com/show/342062/next-js.svg",
    },
    {
      topic: "type",
      logo: "https://www.svgrepo.com/show/349540/typescript.svg",
    },
  ];
  return (
    <div className="py-6 px-2 skills">
      <div className="flex gap-2 flex-col-reverse md:flex-row">
        <div className=" lg:w-full ">
          <div>
            <h3 className="md:text-2xl lg:text-lg flex  items-center gap-2 text-lg font-bold mb-2 text-[var(--color-accent)] ">
              <FaHandPointRight className="text-2xl" /> HTML (HyperText Markup
              Language):
            </h3>
            <p className="indent-12 leading-6	md:text-2xl lg:text-base">
              Proficient in creating structured and semantic web content using
              HTML. Able to build the foundational structure of web pages.
            </p>
          </div>
          <div>
            <h3 className="md:text-2xl lg:text-lg flex items-center gap-2 text-lg font-bold  mt-6 text-[var(--color-accent)] ">
              <FaHandPointRight className="text-2xl" /> CSS (Cascading Style
              Sheets):
            </h3>

            <p className="indent-12 leading-6	md:text-2xl lg:text-base">
              Skilled in styling and layout techniques using CSS. Capable of
              creating visually appealing and responsive designs to enhance user
              experience.
            </p>
          </div>
        </div>
        <div className="flex box w-full py-48 md:py-0">
          {languages.map((language, i) => (
            <SkillsBall key={i} language={language} />
          ))}
        </div>
      </div>

      <div className="lg:flex gap-x-4 ">
        <div>
          <div>
            <h3 className="md:text-2xl md:mt-6 lg:mt-0 lg:text-lg flex items-center gap-2 text-lg font-bold   text-[var(--color-accent)] ">
              <FaHandPointRight className="text-2xl" /> Bootstrap:
            </h3>{" "}
            <p className="indent-12 leading-6	md:text-2xl lg:text-base">
              Experienced in utilizing the Bootstrap framework to expedite the
              development process. Able to create consistent and mobile-friendly
              web designs using pre-built components.
            </p>
          </div>

          <div>
            <h3 className="md:text-2xl lg:text-lg flex items-center gap-2 text-lg font-bold  mt-6 text-[var(--color-accent)]">
              <FaHandPointRight className="text-2xl" /> JavaScript:
            </h3>{" "}
            <p className="indent-12 leading-6	md:text-2xl lg:text-base">
              Competent in client-side scripting with JavaScript. Capable of
              creating interactive and dynamic web content, manipulating the
              DOM, and handling user events.
            </p>
          </div>
          <div>
            <h3 className="md:text-2xl lg:text-lg flex items-center gap-2 text-lg font-bold  mt-6 text-[var(--color-accent)]">
              <FaHandPointRight className="text-2xl" /> TypeScript:
            </h3>
            <p className="indent-12 leading-6	md:text-2xl lg:text-base">
              Competent in using TypeScript to add static typing to JavaScript,
              leading to improved code quality, better collaboration, and
              enhanced scalability in larger projects.
            </p>
          </div>

          <div>
            <h3 className="md:text-2xl lg:text-lg flex items-center gap-2 text-lg font-bold  mt-6 text-[var(--color-accent)]">
              <FaHandPointRight className="text-2xl" /> Node.js:
            </h3>
            <p className="indent-12 leading-6	md:text-2xl lg:text-base">
              Introduced to Express.js for building web applications with
              Node.js. Learning basics such as routing and handling requests.
            </p>
          </div>
        </div>
        <div>
          <div>
            <h3 className="md:text-2xl lg:text-lg flex items-center gap-2 text-lg font-bold  mt-6 text-[var(--color-accent)] ">
              <FaHandPointRight className="text-2xl" /> Tailwind CSS:{" "}
            </h3>{" "}
            <p className="indent-12 leading-6	md:text-2xl lg:text-base">
              Proficient in the utility-first approach of Tailwind CSS, allowing
              for efficient styling and customization of web elements directly
              in the markup.
            </p>
          </div>
          <div>
            <h3 className="md:text-2xl lg:text-lg flex items-center gap-2 text-lg font-bold  mt-6 text-[var(--color-accent)]">
              <FaHandPointRight className="text-2xl" /> React:
            </h3>
            <p className="indent-12 leading-6	md:text-2xl lg:text-base">
              Intermediate level proficiency in React, a powerful JavaScript
              library for building user interfaces. Experienced in creating
              modular and reusable components to develop dynamic and efficient
              web applications.
            </p>
          </div>
          <div>
            <h3 className="md:text-2xl lg:text-lg flex items-center gap-2 text-lg font-bold  mt-6 text-[var(--color-accent)]">
              <FaHandPointRight className="text-2xl" /> Next.js:
            </h3>
            <p className="indent-12 leading-6	md:text-2xl lg:text-base">
              Experienced in Next.js, utilizing its features for server-rendered
              applications. Proficient in optimizing performance, handling data
              fetching, and enhancing SEO.
            </p>
          </div>

          <div>
            <h3 className="md:text-2xl lg:text-lg flex items-center gap-2 text-lg font-bold  mt-6 text-[var(--color-accent)]">
              <FaHandPointRight className="text-2xl" /> Express.js:
            </h3>
            <p className="indent-12 leading-6	md:text-2xl lg:text-base">
              Entry-level understanding of server-side development using
              Node.js. Beginning to explore building basic server-side
              applications.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
