import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconMoon,
  IconSun,
} from "@tabler/icons-react";
import { RefObject, useSyncExternalStore } from "react";
import Container from "../wrappers/Container";
import { motion, type MotionValue } from "motion/react";

function subscribe(callback: () => void) {
  const observer = new MutationObserver(callback);
  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["class"],
  });

  return () => observer.disconnect();
}

function getSnapshot() {
  return document.documentElement.classList.contains("dark");
}

function getServerSnapshot() {
  return false;
}

export const Navbar = ({
  targetRef,
  smoothNavLinksX,
  smoothNavLinksScale,
}: {
  targetRef: RefObject<HTMLDivElement | null>;
  smoothNavLinksX: MotionValue<number>;
  smoothNavLinksScale: MotionValue<number>;
}) => {
  const isDark = useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot,
  );

  const toggleTheme = () => {
    document.documentElement.classList.toggle("dark");
  };

  return (
    <div className="bg-background sticky top-0 z-1 w-full border-y">
      <Container>
        <div className="relative flex items-center justify-between overflow-x-clip px-4 py-2">
          <div
            ref={targetRef}
            className="logo flex size-12 items-center justify-center"
          />

          <motion.nav
            style={{ x: smoothNavLinksX, scale: smoothNavLinksScale }}
            className="absolute left-0 px-4"
          >
            <ul className="flex items-center justify-center gap-4 duration-200">
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#skills">Skills</a>
              </li>
              <li>
                <a href="#experience">Experience</a>
              </li>
              <li>
                <a href="#projects">Projects</a>
              </li>
            </ul>
          </motion.nav>

          <div className="flex items-center gap-x-6">
            <div className="flex items-center gap-3">
              <a
                href="https://www.linkedin.com/in/dev-rezaul-karim/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconBrandLinkedin size={20} />
              </a>
              <a
                href="https://github.com/devRezaulKarim"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconBrandGithub size={20} />
              </a>
            </div>
            <button
              type="button"
              onClick={toggleTheme}
              className="cursor-pointer"
            >
              {isDark ? (
                <IconMoon size={20} />
              ) : (
                <IconSun size={20} color="#ff5200" />
              )}
            </button>
          </div>
        </div>
      </Container>
    </div>
  );
};
