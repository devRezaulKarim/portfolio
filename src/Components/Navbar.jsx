import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="bg-[var(--color-primary)] text-[var(--color-light)] fixed top-0 right-0 w-64  h-full">
      <div className="">
        <div className="text-center py-4">
          <h1 className="uppercase text-3xl font-black">Rezaul Karim</h1>
        </div>
        <ul className="navLinks">
          <li>
            <NavLink to={"/"}>Home</NavLink>
          </li>
          <li>
            <NavLink to={"/projects"}>Projects</NavLink>
          </li>
          <li>
            <NavLink to={"/contact"}>Contact</NavLink>
          </li>
          <li>
            <Link>Resume</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
