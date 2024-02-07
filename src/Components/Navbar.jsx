import { Link, NavLink } from "react-router-dom";
import { FaGithubSquare, FaHome, FaLinkedin } from "react-icons/fa";
import { AiFillProject } from "react-icons/ai";
import { MdContacts } from "react-icons/md";
import { FaListCheck } from "react-icons/fa6";
import { BiLinkExternal } from "react-icons/bi";

export default function Navbar() {
  return (
    <div className="hidden md:flex flex-col justify-between bg-[var(--color-secondary)] text-[var(--color-light)] relative top-0 right-0 w-40  h-full shadow-[inset_10px_0_10px_-10px_var(--color-accent)]	">
      <div className="">
        <div className="text-center py-4">
          <h1 className="uppercase text-3xl font-black text-[var(--color-light)]">
            RKZ
          </h1>
        </div>
        <ul className="navLinks">
          <li>
            <NavLink to={"/"}>
              <FaHome className="text-sm icon" />
              <span>Home</span>
            </NavLink>
          </li>
          <li>
            <NavLink to={"/skills"}>
              <FaListCheck className="text-sm icon" />
              <span>Skills</span>
            </NavLink>
          </li>
          <li>
            <NavLink to={"/projects"}>
              <AiFillProject className="text-sm icon" />
              <span>Projects</span>
            </NavLink>
          </li>
          <li>
            <NavLink to={"/contact"}>
              <MdContacts className="text-sm icon" /> <span>Contact</span>
            </NavLink>
          </li>
          <li>
            <a href="https://t.ly/ItvXD" target="_blank" rel="noreferrer">
              <BiLinkExternal className="text-sm icon" />
              <span>Resume</span>
            </a>
          </li>
        </ul>
      </div>
      <div className="flex gap-4 justify-center mb-8 flex-wrap-reverse">
        <div className="github">
          <Link to={"https://github.com/devRezaulKarim"} target="_blank">
            <FaGithubSquare className="text-3xl text-[var(--color-dark)] " />
          </Link>
        </div>
        <div className="linkedin">
          <Link
            to={"https://www.linkedin.com/in/dev-rezaul-karim/"}
            target="_blank"
          >
            <FaLinkedin className="text-3xl " />
          </Link>
        </div>
        {/* extra */}
        {/* extra */}
        {/* extra */}
        {/* <div className="linkedin2">
          <Link to={"https://github.com/devRezaulKarim"} target="_blank">
            <FaGithubSquare className="text-3xl text-[var(--color-dark)] " />
          </Link>
        </div>
        <div className="linkedin3">
          <Link
            to={"https://www.linkedin.com/in/dev-rezaul-karim/"}
            target="_blank"
          >
            <FaLinkedin className="text-3xl " />
          </Link>
        </div>
        <div className="linkedin4">
          <Link to={"https://github.com/devRezaulKarim"} target="_blank">
            <FaGithubSquare className="text-3xl text-[var(--color-dark)] " />
          </Link>
        </div>
        <div className="linkedin5">
          <Link
            to={"https://www.linkedin.com/in/dev-rezaul-karim/"}
            target="_blank"
          >
            <FaLinkedin className="text-3xl " />
          </Link>
        </div> */}
      </div>
    </div>
  );
}
