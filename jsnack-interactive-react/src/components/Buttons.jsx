import Projects from "./Projects";
import projects from "./../data/projects";

function Buttons() {
  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-10 mx-80">
      {projects.map((project) => (
        <Projects
          key={project.title}
          title={project.title}
          description={project.description}
          identifier={project.identifier}
        />
      ))}
    </div>
  );
}

export default Buttons;
