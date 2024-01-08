import { Link, NavLink } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { AiFillProject } from "react-icons/ai";
import { MdContacts } from "react-icons/md";
import { IoIosPaper } from "react-icons/io";

export default function Navbar() {
  return (
    <div className="bg-[var(--color-secondary)] text-[var(--color-light)] fixed top-0 right-0 w-40  h-full">
      <div className="">
        <div className="text-center py-4">
          <h1 className="uppercase text-3xl font-black text-[var(--color-light)]">
            RKZ
          </h1>
        </div>
        <ul className="navLinks">
          <li>
            <NavLink to={"/"}>
              <FaHome />
              <span>Home</span>
            </NavLink>
          </li>
          <li>
            <NavLink to={"/projects"}>
              <AiFillProject />
              <span>Projects</span>
            </NavLink>
          </li>
          <li>
            <NavLink to={"/contact"}>
              <MdContacts /> <span>Contact</span>
            </NavLink>
          </li>
          <li>
            <Link>
              <IoIosPaper />
              <span>Resume</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
