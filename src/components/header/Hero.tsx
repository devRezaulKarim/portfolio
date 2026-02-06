import { MailIcon } from "lucide-react";
import { ProfileCard } from "../ui/ProfileCard";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { useMediaQuery } from "@/hooks/useMediaQuery";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};
const itemVariants = {
  hidden: { opacity: 0, filter: "blur(20px)", y: -100 },
  visible: {
    opacity: 1,
    filter: "blur(0px)",
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

export const Hero = () => {
  const isDesktop = useMediaQuery("(min-width: 1024px)");

  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const translateProfileCard = useTransform(
    scrollYProgress,
    [0, 1],
    isDesktop ? [200, -200] : [100, -100],
  );

  return (
    <section
      ref={ref}
      style={{
        backgroundImage: `radial-gradient(circle at 0.5px 0.5px, rgba(255, 82, 0, 0.3) 0.5px, transparent 0)`,
        backgroundSize: "12px 12px",
      }}
      className="bg-bg-1"
    >
      <div className="container px-6 py-6 sm:px-16 sm:py-20">
        <div className="grid xl:grid-cols-11">
          <div className="xl:col-span-4" />
          <motion.div
            initial={{ filter: "blur(20px)", scale: 0.5 }}
            animate={{ filter: "blur(0px)", scale: 1 }}
            transition={{
              duration: 0.3,
            }}
            className="bg-text-u text-primary text-center xl:col-span-7 xl:text-left"
          >
            Developer
          </motion.div>
        </div>{" "}
        <div className="grid items-center xl:grid-cols-11">
          <motion.div
            style={{
              y: translateProfileCard,
            }}
            className="xl:col-span-4"
          >
            <ProfileCard />
          </motion.div>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="pt-20 sm:pt-0 xl:col-span-7 xl:space-y-6 2xl:space-y-8"
          >
            <motion.div variants={itemVariants}>
              <span className="text-secondary code-text-ibm">&lt;h1&gt;</span>
              <h1 className="h1-text-u flex flex-col pl-6 text-white">
                <span>Hey</span>
                <span>
                  I’m <span className="text-primary">Rezaul Karim</span>,
                </span>
                <span>Front-end developer</span>
              </h1>
              <span className="text-secondary code-text-ibm">&lt;/h1&gt;</span>
            </motion.div>
            <motion.div variants={itemVariants}>
              <span className="text-secondary code-text-ibm">&lt;p&gt;</span>
              <p className="para-text-ibm pl-6 text-white">
                I help businesses build modern, responsive web interfaces with a
                strong focus on performance and usability. Turning complex ideas
                into clean, scalable UI that supports real growth.
              </p>
              <span className="text-secondary code-text-ibm">&lt;/p&gt;</span>
            </motion.div>
            <motion.div variants={itemVariants}>
              <a
                href="#contact"
                className="text-primary h2-text-ibm talk-btn ml-6 flex w-fit items-center py-1 pr-2 pl-3 sm:ml-4 sm:items-stretch xl:pr-2 xl:pl-3 2xl:pr-3 2xl:pl-4"
              >
                <span className="mr-2 xl:mr-3 2xl:mr-4">let’s talk</span>
                <span className="talk-icon inline-flex items-center justify-center p-2">
                  <MailIcon className="size-4 xl:size-4.5 2xl:size-6" />
                </span>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
