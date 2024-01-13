/* eslint-disable react/prop-types */
export default function SkillsBall({ language: { topic, logo } }) {
  return (
    <div className={`ball ${topic} p-[1px]`}>
      <img className="rounded-full " src={logo} alt="" />
      <div className="shadow"></div>
    </div>
  );
}
