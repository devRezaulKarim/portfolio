import { IconMenu, IconMoon, IconSun } from "@tabler/icons-react";
import { RefObject, useSyncExternalStore } from "react";
import Container from "../wrappers/Container";
import { motion, type MotionValue } from "motion/react";
import { NavSocial } from "./NavSocial";
import { NavLinks } from "./NavLinks";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";

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
  smoothSocialX,
}: {
  targetRef: RefObject<HTMLDivElement | null>;
  smoothNavLinksX: MotionValue<number>;
  smoothSocialX: MotionValue<number>;
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
            style={{ x: smoothNavLinksX }}
            className="absolute left-4 hidden sm:block"
          >
            <NavLinks />
          </motion.nav>
          <NavSocial
            className="absolute left-4 sm:invisible"
            style={{ x: smoothSocialX }}
          />

          <div className="flex items-center gap-x-6">
            <NavSocial className="invisible sm:visible" />
            <div className="flex items-center gap-3">
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
              <Sheet>
                <SheetTrigger className="sm:hidden">
                  <IconMenu />
                </SheetTrigger>
                <SheetContent className="max-w-40">
                  <SheetHeader>
                    <SheetTitle></SheetTitle>
                  </SheetHeader>
                  <NavLinks className="flex-col" />
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};
