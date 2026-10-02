import Project from "./Project";

function Projects() {
  return (
    <div
      className="min-h-screen flex flex-row items-center py-20"
      id="projects"
    >
      <div className="container flex flex-col items-center">
        <h2 className="mb-16 text-4xl">
          پروژه های <span className="text-gold-400">برتر</span> من
        </h2>
        <ul className="w-full grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <Project />
          <Project />
          <Project />
          <Project />
        </ul>
      </div>
    </div>
  );
}

export default Projects;
