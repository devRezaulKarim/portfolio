/* eslint-disable react/prop-types */
import { AiFillProject } from "react-icons/ai";
import { FaHome } from "react-icons/fa";
import { FaListCheck } from "react-icons/fa6";
import { IoIosPaper } from "react-icons/io";
import { MdContacts } from "react-icons/md";
import { Link, NavLink } from "react-router-dom";

export default function MobileNavbar({ mobileMenuHandler }) {
  return (
    <div className="mobileNavbar pt-8 pb-4">
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
          <Link onClick={mobileMenuHandler}>
            <IoIosPaper className="text-md icon" />
            <span>Resume</span>
          </Link>
        </li>
      </ul>
    </div>
  );
}
