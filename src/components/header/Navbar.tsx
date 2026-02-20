"use client";

import { IconMoon, IconSun, IconUser } from "@tabler/icons-react";
import { useSyncExternalStore } from "react";
import Container from "../wrappers/Container";

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

export const Navbar = () => {
  const isDark = useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot,
  );

  const toggleTheme = () => {
    document.documentElement.classList.toggle("dark");
  };

  return (
    <div className="sticky top-0 w-full border-y">
      <Container>
        <div className="flex items-center justify-between border-r border-l p-2">
          <div className="logo flex size-12 items-center justify-center">
            <IconUser />
          </div>

          <nav>
            <ul className="flex items-center justify-center gap-4">
              <li>Home</li>
              <li>Component</li>
              <li>Blogs</li>
            </ul>
          </nav>

          <button
            type="button"
            onClick={toggleTheme}
            className="cursor-pointer"
          >
            {isDark ? <IconMoon /> : <IconSun />}
          </button>
        </div>
      </Container>
    </div>
  );
};
