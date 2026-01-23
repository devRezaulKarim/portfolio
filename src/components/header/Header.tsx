import { useEffect, useRef, useState } from "react";
import { Logo } from "../ui/Logo";
import { Socials } from "./Socials";
import { cn } from "../../lib/utils";
import { Navbar } from "./Navbar";

export const Header = () => {
  const sentinelRef = useRef<HTMLDivElement | null>(null);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsSticky(!entry.isIntersecting);
      },
      { threshold: 0 },
    );

    if (sentinelRef.current) {
      observer.observe(sentinelRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div ref={sentinelRef} className="-mb-10 h-10" />
      <header className="bg-bg-1 sticky top-0 z-50">
        <div
          className={cn(
            "relative container flex items-center justify-between border-b border-gray-800 transition-[padding,background-color] duration-300 ease-out",
            isSticky ? "py-4" : "py-12",
          )}
        >
          <Logo />
          <Socials />
          <Navbar />
        </div>
      </header>
    </>
  );
};
