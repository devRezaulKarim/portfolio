import aboutBG from "@/assets/about-bg.svg";
import about from "@/assets/Rezaul.png";
import {
  motion,
  useMotionTemplate,
  useScroll,
  useTransform,
} from "motion/react";
import { useRef } from "react";

export const About = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const translateProfileImage = useTransform(
    scrollYProgress,
    [0, 1],
    [200, -200],
  );
  const imgOpacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.5, 0.8, 1],
    [0, 0, 1, 0, 0],
  );
  const textBlur = useTransform(
    scrollYProgress,
    [0, 0.15, 0.35, 0.5, 0.65, 0.85, 1],
    [10, 5, 0, 0, 0, 5, 10],
  );
  return (
    <section
      ref={ref}
      style={{
        backgroundImage: `
        url(${aboutBG}),
          linear-gradient(to bottom, #231c1a, #231c1a)
        `,
        backgroundSize: "100%",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
      id="about"
      className="py-8 sm:py-20"
    >
      {/* <SectionTop /> */}
      <div className="container space-y-16 px-6 sm:px-16">
        <div className="h1-text-u bg-bg-1 border-primary w-fit rounded-tl-4xl rounded-br-4xl border-2 px-10 py-4 text-white">
          About me
        </div>
        <div className="grid grid-cols-1 items-center 2xl:grid-cols-11">
          <motion.div
            style={{
              filter: useMotionTemplate`blur(${textBlur}px)`,
            }}
            className="order-2 flex flex-col items-start gap-10 sm:order-1 2xl:col-span-7"
          >
            <div className="bg-bg-1 rounded-4xl px-4 py-6 sm:px-10">
              <span className="logo-text-ibm text-primary">Hello!</span>
              <p className="para-text-ibm mt-1 text-xs text-white sm:text-sm">
                I’m Rezaul Karim, a frontend-focused full-stack developer who
                loves helping businesses bring their ideas to life on the web. I
                build clean, responsive interfaces that are fast, accessible,
                and easy to use.
                <br />
                <br />
                With React, Next.js, and TypeScript, I turn complex requirements
                into simple, intuitive experiences that people actually enjoy
                using. I care about performance, maintainable code, and
                usability, so your product works well today—and grows easily
                tomorrow.
                <br />
                <br />
                Whether starting a project from scratch or improving an existing
                one, my goal is the same: create smooth, purposeful interfaces
                that make life easier for your users.
              </p>
            </div>
          </motion.div>
          <motion.div
            style={{ y: translateProfileImage, opacity: imgOpacity }}
            className="z-10 order-1 sm:order-2 2xl:col-span-4"
          >
            <img
              className="ml-auto aspect-[1/1.1] rounded-2xl object-cover sm:max-w-4/5"
              src={about}
              alt=""
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
