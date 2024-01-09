/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";

/* eslint-disable react/no-unescaped-entities */
export default function Home() {
  const words = [
    "Enthusiastic",
    "Learner",
    "Explorer",
    "Adaptable",
    "Passionate",
    "Diligent",
  ];
  let [index, setIndex] = useState(0);
  const [currentWord, setCurrentWord] = useState(words[index]);

  useEffect(() => {
    const startTime = Date.now();
    const intervalId = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const wordIndex = Math.floor(elapsed / 2000) % words.length;
      setIndex(wordIndex);
      setCurrentWord(words[wordIndex]);
    }, 2000); // Adjust the interval as needed

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="">
      <div className="hero flex items-center h-screen">
        <div className="heroLeft w-1/2 flex flex-col gap-2">
          <h2 className="text-2xl font-semibold">Hey there, </h2>
          <h1 className="text-3xl font-bold">
            This is Rezaul Karim <br /> and I&#39;m
            <span className="animation text-3xl uppercase ml-6 font-black">
              {currentWord}
            </span>
          </h1>
          <p className="my-4 text-lg w-10/12">
            Enthusiastic web developer dedicated to transforming creative
            concepts into flawless digital experiences. With a strong emphasis
            on design and innovation, I bring ideas to life through meticulous
            coding, ensuring user-centric websites that captivate and engage.
          </p>
          <div className="btns">
            <button className="bg-[var(--color-secondary)] text-[var(--color-primary)] border-2 border-[var(--color-accent)] duration-200 py-1 px-4 font-semibold text-xl rounded-lg hover:shadow-md hover:border-[var(--color-primary)] hover:shadow-[var(--color-accent)] hover:-translate-y-1">
              Hire Me
            </button>
            <button className="ml-8 bg-[var(--color-secondary)] text-[var(--color-primary)] border-2 border-[var(--color-accent)] duration-200 py-1 px-4 font-semibold text-xl rounded-lg hover:shadow-md hover:border-[var(--color-primary)] hover:shadow-[var(--color-accent)] hover:-translate-y-1">
              Download Resume
            </button>
          </div>
        </div>
        <div className="heroRight w-1/2">
          <img className="w-3/4 " src="/Programming.gif" alt="" />
        </div>
      </div>
    </div>
  );
}
