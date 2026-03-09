"use client";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Navbar } from "./Navbar";
import { Hero } from "./Hero";
import { useScroll, useSpring, useTransform } from "motion/react";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { SectionGap } from "../common/SectionGap";

export default function Header() {
  const heroRef = useRef<HTMLDivElement | null>(null);
  const startRef = useRef<HTMLDivElement | null>(null);
  const targetRef = useRef<HTMLDivElement | null>(null);
  const isMobile = useMediaQuery("(max-width: 640px)");

  const [hasMounted, setHasMounted] = useState(false);

  const [positions, setPositions] = useState({
    startX: -1000,
    startY: -1000,
    deltaX: 0,
    deltaY: 0,
  });

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start 100px", "end 200px"],
  });

  const borderRadius = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    ["0px", "0px", "28px"],
  );

  const x = useTransform(scrollYProgress, [0, 1], [0, positions.deltaX]);

  const y = useTransform(
    scrollYProgress,
    [0, 0.25, 1],
    [0, positions.deltaY / 2, positions.deltaY],
  );

  const size = useTransform(
    scrollYProgress,
    [0, 1],
    [hasMounted && isMobile ? 340 : 250, 48],
  );
  const rotate = useTransform(scrollYProgress, [0, 0.8, 1], [0, -25, 0]);

  const smoothSize = useSpring(size, { stiffness: 100, damping: 25 });
  const smoothX = useSpring(x, { stiffness: 100, damping: 25 });
  const smoothY = useSpring(y, { stiffness: 100, damping: 25 });
  const smoothRotate = useSpring(rotate, { stiffness: 100, damping: 25 });
  const smoothBorderRadius = useSpring(borderRadius, {
    stiffness: 100,
    damping: 25,
  });

  const navLinksX = useTransform(
    scrollYProgress,
    [0, 1],
    [0, isMobile ? 400 : 250],
  );
  const smoothNavLinksX = useSpring(navLinksX, {
    stiffness: 80,
    damping: 25,
  });

  useEffect(() => {
    setTimeout(() => setHasMounted(true), 0);
  }, []);

  useEffect(() => {
    window.history.scrollRestoration = "manual";
    window.scrollTo(0, 0);
  }, []);

  useLayoutEffect(() => {
    let frame: number;

    const measure = () => {
      if (!startRef.current || !targetRef.current) return;

      const startRect = startRef.current.getBoundingClientRect();
      const targetRect = targetRef.current.getBoundingClientRect();

      const startX = startRect.left + window.scrollX;
      const startY = startRect.top + window.scrollY;

      const targetX = targetRect.left;
      const targetY = targetRect.top;

      setPositions({
        startX,
        startY,
        deltaX: targetX - startX,
        deltaY: targetY - startY,
      });
    };

    const handleResize = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(measure);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(frame);
    };
  }, []);
  return (
    <>
      <Navbar targetRef={targetRef} smoothNavLinksX={smoothNavLinksX} />
      <SectionGap />
      <Hero
        heroRef={heroRef}
        startRef={startRef}
        smoothBorderRadius={smoothBorderRadius}
        smoothRotate={smoothRotate}
        smoothSize={smoothSize}
        smoothX={smoothX}
        smoothY={smoothY}
        startX={positions.startX}
        startY={positions.startY}
      />
    </>
  );
}
