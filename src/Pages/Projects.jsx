import Project from "../Components/Project";

export default function Projects() {
  const arr = [
    { id: 1, title: "Travel Vista" },
    { id: 2, title: "Halal Jibika" },
    { id: 3, title: "Task Management" },
    { id: 4, title: "Expense Tracker" },
    { id: 5, title: "Inventory Management" },
  ];

  return (
    <div className="text-justify">
      {arr.map((a) => (
        <Project key={a.id} value={a.id} title={a.title} />
      ))}
    </div>
  );
}
