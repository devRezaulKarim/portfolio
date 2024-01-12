/* eslint-disable react/prop-types */
export default function SkillBar({ item: { topic, logo } }) {
  return (
    <div className="w-8 h-96 bgGradient to-100% flex items-end justify-center">
      <div className={`relative bar ${topic}`}>
        <span className="absolute -translate-y-[50%] -translate-x-[125%] text-sm font-bold  w-12 flex items-center justify-center uppercase">
          {topic}
        </span>
      </div>
    </div>
  );
}
