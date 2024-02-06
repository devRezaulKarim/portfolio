import Project from "../Components/Project";
import useFetch from "../hooks/useFetch";

export default function Projects() {
  const projects = useFetch("/projects.json");

  return (
    <div className="text-justify">
      {projects.map((project) => (
        <Project key={project.id} value={project.id} project={project} />
      ))}
    </div>
  );
}
