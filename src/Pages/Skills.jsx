import SkillsBall from "../Components/SkillsBall.jsx";
import Skill from "../Components/skill.jsx";
import useFetch from "../hooks/useFetch.jsx";

export default function Skills() {
  const skillsLogo = useFetch("/skillsLogo.json");
  const skillsText = useFetch("/skillsText.json");

  return (
    <div className="py-6 px-2 skills">
      <div className="flex box w-full py-48 md:py-0">
        {skillsLogo.map((language, i) => (
          <SkillsBall key={i} language={language} />
        ))}
      </div>
      <div className="lg:grid grid-cols-2 gap-x-8">
        {skillsText.map((skill, i) => (
          <Skill key={i} skill={skill} />
        ))}
      </div>
    </div>
  );
}
