import type { EnvironmentType } from "@/types/types";

export const EnvironmentCard = ({
  icon: Icon,
  name,
  stacks,
}: EnvironmentType) => {
  return (
    <div
      style={{
        background: "linear-gradient(to right, #ff5200 2.5%, #ff9664 2.5%)",
      }}
      className="flex w-fit flex-col items-center gap-2 rounded-lg px-8 py-6"
    >
      <Icon className="text-bg-1 size-8" />
      <p className="menu-text-ibm text-bg-1">{name}</p>
      <ul className="para-text-ibm flex text-gray-700">
        {stacks.map((stack, i) => (
          <>
            {i !== 0 && <span>-</span>}
            <li key={stack}>{stack}</li>
          </>
        ))}
      </ul>
    </div>
  );
};
