/* eslint-disable react/prop-types */
import { FaHandPointRight } from "react-icons/fa6";

export default function Skill({ skill: { title, text } }) {
  return (
    <div className="md:px-4 lg:px-0">
      <h3 className="mt-6 md:text-2xl lg:text-lg flex  items-center gap-2 text-lg font-bold mb-2 text-[var(--color-accent)] ">
        <FaHandPointRight className="text-2xl" /> {title}:
      </h3>
      <p className="indent-14 leading-6	md:text-2xl lg:text-base text-justify">
        {text}
      </p>
    </div>
  );
}
