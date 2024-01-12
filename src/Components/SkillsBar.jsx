/* eslint-disable react/prop-types */
export default function SkillBar({ language: { topic, logo } }) {
  return (
    <div className=" w-20 flex flex-col items-center">
      <div className="w-6 h-80 bgGradient to-100% flex items-end justify-center  relative">
        <div className={`relative bar ${topic}`}>
          <span className="absolute -translate-y-[50%] -translate-x-[125%] text-sm font-bold  w-9 flex items-center justify-center logoAnimation">
            {/* {topic} */}
            <img className="w-[60%]" src={logo} alt="" />
          </span>
        </div>
        <h1 className="absolute bottom-12 w-24 text-left uppercase  font-semibold text-[var(--color-primary)] -rotate-90">
          {topic}
        </h1>
      </div>
    </div>
  );
}
