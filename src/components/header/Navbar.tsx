import { useState } from "react";
import { navLinks } from "../../lib/constants";
import { NavLink } from "../ui/NavLink";

export const Navbar = () => {
  const [isActive, setIsActive] = useState("#");
  return (
    <div
      style={{ top: "calc(100% + 48px)" }}
      className="nav-links bg-bg-2 navlink border-primary text-primary absolute right-full translate-x-1/2 rounded-full border-2 p-0.5"
    >
      <div className="bubble active"></div>
      <div className="bubble hover"></div>
      <nav className="nav flex flex-col gap-1 p-1">
        {navLinks.map((link) => (
          <NavLink
            key={link.to}
            icon={link.icon}
            to={link.to}
            isActive={link.to === isActive}
            setIsActive={setIsActive}
          />
        ))}
      </nav>
    </div>
  );
};
