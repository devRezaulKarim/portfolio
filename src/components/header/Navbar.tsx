import { motion } from "motion/react";
import { navLinks } from "@/lib/constants";
import { NavLink } from "../ui/NavLink";
import { useScrollSpy } from "@/hooks/isActive";

const navVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export const Navbar = () => {
  const activeId = useScrollSpy(
    navLinks.map((link) => link.to.replace("#", "")),
  );
  return (
    <div
      style={{ top: "calc(100% + 48px)" }}
      className="nav-links bg-bg-2 navlink border-primary text-primary absolute right-full hidden translate-x-1/2 rounded-full border-2 p-0.5 lg:block"
    >
      <div className="bubble active"></div>
      <div className="bubble hover"></div>
      <motion.nav
        variants={navVariants}
        initial="hidden"
        animate="visible"
        className="nav flex flex-col gap-1 p-1"
      >
        {navLinks.map((link) => (
          <NavLink
            key={link.to}
            icon={link.icon}
            to={link.to}
            isActive={link.to === activeId}
          />
        ))}
      </motion.nav>
    </div>
  );
};
