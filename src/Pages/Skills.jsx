import SkillsBall from "../Components/SkillsBall.jsx";
import Skill from "../Components/skill.jsx";
import useFetch from "../hooks/useFetch.jsx";

export default function Skills() {
  const skillsLogo = useFetch("/skillsLogo.json");
  const skillsText = useFetch("/skillsText.json");

  return (
    <div className="skills relative">
      <h1 className="sectionTitle skillsTitle">Skills</h1>
      <div className=" w-full h-80 relative ">
        {skillsLogo.slice(0, 7).map((language, i) => (
          <SkillsBall key={i} language={language} />
        ))}
      </div>
      <div className="lg:grid grid-cols-2 gap-x-8">
        {skillsText.slice(0, 7).map((skill, i) => (
          <Skill key={i} skill={skill} />
        ))}
      </div>
    </div>
  );
}
