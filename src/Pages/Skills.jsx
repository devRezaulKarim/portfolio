import SkillBar from "../Components/SkillsBar.jsx";

export default function Skills() {
  const languages = [
    { topic: "html", logo: "https://www.svgrepo.com/show/452228/html-5.svg" },

    { topic: "css", logo: "https://www.svgrepo.com/show/452185/css-3.svg" },
    {
      topic: "bootstrap",
      logo: "https://www.svgrepo.com/show/378490/bootstrap-fill.svg",
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
  ];
  return (
    <div className="flex gap-2 items-center ">
      <div className="px-4">
        <div>
          <h3 className="text-lg font-bold mb-2 mt-4 text-[var(--color-accent)]">
            HTML (HyperText Markup Language):
          </h3>
          <p>
            Proficient in creating structured and semantic web content using
            HTML. Able to build the foundational structure of web pages.
          </p>
        </div>
        <div>
          <h3 className="text-lg font-bold mb-2 mt-4 text-[var(--color-accent)]">
            CSS (Cascading Style Sheets):
          </h3>{" "}
          <p>
            Skilled in styling and layout techniques using CSS. Capable of
            creating visually appealing and responsive designs to enhance user
            experience.
          </p>
        </div>
        <div>
          <h3 className="text-lg font-bold mb-2 mt-4 text-[var(--color-accent)]">
            Bootstrap:
          </h3>{" "}
          <p>
            Experienced in utilizing the Bootstrap framework to expedite the
            development process. Able to create consistent and mobile-friendly
            web designs using pre-built components.
          </p>
        </div>
        <div>
          <h3 className="text-lg font-bold mb-2 mt-4 text-[var(--color-accent)]">
            Tailwind CSS:{" "}
          </h3>{" "}
          <p>
            Proficient in the utility-first approach of Tailwind CSS, allowing
            for efficient styling and customization of web elements directly in
            the markup.
          </p>
        </div>
        <div>
          <h3 className="text-lg font-bold mb-2 mt-4 text-[var(--color-accent)]">
            JavaScript:
          </h3>{" "}
          <p>
            Competent in client-side scripting with JavaScript. Capable of
            creating interactive and dynamic web content, manipulating the DOM,
            and handling user events.
          </p>
        </div>
        <div>
          <h3 className="text-lg font-bold mb-2 mt-4 text-[var(--color-accent)]">
            React:
          </h3>
          <p>
            Intermediate level proficiency in React, a powerful JavaScript
            library for building user interfaces. Experienced in creating
            modular and reusable components to develop dynamic and efficient web
            applications.
          </p>
        </div>
      </div>
      <div className="flex ">
        {languages.map((language, i) => (
          <SkillBar key={i} language={language} />
        ))}
      </div>
    </div>
  );
}
