/* eslint-disable react/prop-types */
import { AiFillProject } from "react-icons/ai";
import { BiLinkExternal } from "react-icons/bi";
import { FaGithubSquare, FaHome, FaLinkedin } from "react-icons/fa";
import { FaListCheck } from "react-icons/fa6";
import { MdContacts } from "react-icons/md";
import { Link, NavLink } from "react-router-dom";

export default function MobileNavbar({ mobileMenuHandler }) {
  return (
    <div className="mobileNavbar pt-8">
      <ul className="">
        <li>
          <NavLink to={"/"} onClick={mobileMenuHandler}>
            <FaHome className="text-md icon" />
            <span>Home</span>
          </NavLink>
        </li>
        <li>
          <NavLink to={"/skills"} onClick={mobileMenuHandler}>
            <FaListCheck className="text-md icon" />
            <span>Skills</span>
          </NavLink>
        </li>
        <li>
          <NavLink to={"/projects"} onClick={mobileMenuHandler}>
            <AiFillProject className="text-md icon" />
            <span>Projects</span>
          </NavLink>
        </li>
        <li>
          <NavLink to={"/contact"} onClick={mobileMenuHandler}>
            <MdContacts className="text-md icon" /> <span>Contact</span>
          </NavLink>
        </li>
        <li>
          <a
            href="https://t.ly/ItvXD"
            target="_blank"
            rel="noreferrer"
            onClick={mobileMenuHandler}
          >
            <BiLinkExternal className="text-md icon" />
            <span>Resume</span>
          </a>
        </li>
      </ul>
      <div className="flex gap-4 justify-center mt-8">
        <div>
          <Link to={"https://github.com/devRezaulKarim"} target="_blank">
            <FaGithubSquare className="text-3xl text-[var(--color-dark)] " />
          </Link>
        </div>
        <div>
          <Link
            to={"https://www.linkedin.com/in/dev-rezaul-karim/"}
            target="_blank"
          >
            <FaLinkedin className="text-3xl " />
          </Link>
        </div>
      </div>
    </div>
  );
}
