import { Logo } from "../ui/Logo";
import { Socials } from "./Socials";

export const Navbar = () => {
  return (
    <header className="bg-bg-2">
      <div className="container flex items-center justify-between py-16">
        <Logo />
        <Socials />
      </div>
    </header>
  );
};
