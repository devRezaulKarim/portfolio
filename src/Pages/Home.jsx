/* eslint-disable react/no-unescaped-entities */
export default function Home() {
  return (
    <div className="">
      <div className="hero flex items-center h-screen">
        <div className="heroLeft w-1/2 ">
          <h2>Hey there, </h2>
          <h1>I&#39;m a</h1>
          <p>
            "Enthusiastic web developer dedicated to transforming creative
            concepts into flawless digital experiences. With a strong emphasis
            on design and innovation, I bring ideas to life through meticulous
            coding, ensuring user-centric websites that captivate and engage."
          </p>
          <div className="btns">
            <button>Hire Me</button>
            <button>Download Resume</button>
          </div>
        </div>
        <div className="heroRight">
          <img src="/Programming.gif" alt="" />
        </div>
      </div>
    </div>
  );
}
