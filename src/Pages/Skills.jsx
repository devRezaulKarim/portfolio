import SkillBar from "../Components/SkillsBar.jsx";

export default function Skills() {
  const items = [
    { topic: "html", logo: 90 },
    { topic: "css", progress: 65 },
    { topic: "bs", progress: 50 },
    { topic: "tw", progress: 75 },
    { topic: "js", progress: 50 },
    { topic: "react", progress: 85 },
  ];
  return (
    <div className="flex gap-16">
      {items.map((item, i) => (
        <SkillBar key={i} item={item} />
      ))}
    </div>
  );
}
