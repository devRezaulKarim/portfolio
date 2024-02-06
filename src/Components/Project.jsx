/* eslint-disable react/prop-types */
import { FaExternalLinkAlt } from "react-icons/fa";

export default function Project({ value, project }) {
  const { title, imgUrl, liveLink, sourceLink } = project;
  const condition = value % 2 === 0;

  return (
    <div className="lg:w-10/12 mx-auto py-8 px-2 mb-4 border-2 rounded-lg lg:py-0 lg:px-0 lg:mb-0 lg:border-0 lg:rounded-0 ">
      {/* Image part */}
      <div
        className={`flex items-center justify-center  flex-col  ${
          condition ? "lg:flex-row-reverse" : "lg:flex-row"
        }`}
      >
        <div className="w-[250px] h-[450px] lg:border-2 lg:border-[var(--color-accent)] lg:p-2 rounded-lg mb-8 lg:mb-0">
          <img className="w-full h-full rounded-[4px]" src={imgUrl} alt="" />
        </div>

        {/* description part */}

        <div
          className={`lg:w-[calc(100%-250px)] lg:border-2 lg:border-[var(--color-accent)] lg:p-2  my-12 lg:my-0  relative${
            condition
              ? "lg:pr-6 lg:border-r-4 lg:border-r-[var(--color-primary)] translate-x-[2px] rounded-s-lg"
              : "lg:pl-6 lg:border-l-4 lg:border-l-[var(--color-primary)] -translate-x-[2px] rounded-e-lg"
          }`}
        >
          {/* project title */}

          <div
            className={` absolute -top-16 ${
              condition
                ? "lg:right-1/2 lg:translate-x-[50%]"
                : "lg:left-1/2 lg:-translate-x-[50%]"
            } `}
          >
            <h1
              className={`text-5xl font-semibold relative after:content-[''] after:w-full after:h-2/4 after:skew-x-[-25deg] after:absolute  after:left-1 after:bottom-0 after:-z-50  after:bg-gradient-to-t	after:from-[rgba(218,165,32,0.75)] after:to-[rgba(218,165,32,0)] whitespace-nowrap	`}
            >
              {title}
            </h1>
          </div>
          {/* project description */}

          <p>
            Welcome to my portfolio showcasing a dynamic and user-friendly hotel
            booking platform that I&#39;ve designed and developed. This
            comprehensive web application allows users to seamlessly explore a
            wide array of available hotels and efficiently book their
            accommodations.
          </p>
          <div className="mt-4">
            <div>
              <h4 className="text-xl font-bold">Key Features:</h4>
              <ul className="flex flex-wrap gap-2">
                <Li feature={true} data={"User-Friendly Interface"} />
                <Li feature={true} data={"Search Functionality"} />
                <Li feature={true} data={"User Authentication"} />
              </ul>
            </div>
            <div className="mt-2">
              <h4 className="text-xl font-bold">
                Technologies & Packages Used:
              </h4>
              <ul className="flex flex-wrap gap-2">
                <Li data={"React"} />
                <Li data={"react-router-dom"} />
                <Li data={"react-date-range"} />
                <Li data={"react-icons"} />
                <Li data={"react-toastify"} />
                <Li data={"Firebase"} />
              </ul>
            </div>
          </div>

          {/* project Buttons */}
          <div
            className={`absolute -bottom-12 flex items-center ${
              condition
                ? "lg:right-1/2 lg:translate-x-[50%]"
                : "lg:left-1/2 lg:-translate-x-[50%]"
            } `}
          >
            <a
              href={liveLink}
              target="_blank"
              rel="noreferrer"
              className="text-xl font-semibold px-4 border border-[var(--color-accent)] text-[var(--color-accent)] flex items-center gap-4 rounded-md duration-300 hover:text-[var(--color-primary)] hover:bg-[var(--color-accent)] whitespace-nowrap"
            >
              Live Link <FaExternalLinkAlt className="text-sm" />
            </a>
            <a
              href={sourceLink}
              target="_blank"
              rel="noreferrer"
              className="text-xl font-semibold px-4 border border-[var(--color-accent)] text-[var(--color-accent)] flex items-center gap-4 rounded-md duration-300 hover:text-[var(--color-primary)] hover:bg-[var(--color-accent)] ml-8 whitespace-nowrap"
            >
              Source code <FaExternalLinkAlt className="text-sm" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

function Li({ data, feature }) {
  return (
    <li
      className={`${
        feature ? "bg-[var(--color-secondary)]" : "bg-[var(--color-accent)]"
      } px-2 rounded mt-1 text-[var(--color-primary font-semibold text-lg)]`}
    >
      {data}
    </li>
  );
}
