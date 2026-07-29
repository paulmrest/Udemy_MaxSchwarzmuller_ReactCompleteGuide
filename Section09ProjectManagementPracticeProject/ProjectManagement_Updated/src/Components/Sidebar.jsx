import Button from './Button.jsx';

export default function Sidebar({ onStartNewProject, onSelectProject, projectState }) {
  const selectedProjectHasId = projectState.selectedProject !== undefined && projectState.selectedProject !== null && 
                            projectState.selectedProject.id !== undefined && projectState.selectedProject.id >= 0;

  function handleSelectProject(projectId) {
    if (projectState.selectedProject !== null) {
      return;
    } else {
      onSelectProject(projectId);
    }
  }

  const projectIsSelected = projectState.selectedProject != null;

  return (
    <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
      <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">Your Projects</h2>
      <div>
        <Button onClick={onStartNewProject}>
          + Add New Project
        </Button>
      </div>
      <ul className="mt-8">
        {projectState.projects.map(project => {
          const formattedDueDate = new Date(project.dueDate).toLocaleDateString("en-US", {
            timeZone: 'UTC',
            year: 'numeric',
            month: 'numeric',
            day: 'numeric'
          });
          let cssClasses = "w-full text-left px-2 py-1 my-1 rounded-sm";
          if (!projectIsSelected) {
            cssClasses += " hover:bg-stone-800 hover:text-stone-200";
          }
          if (selectedProjectHasId && project.id === projectState.selectedProject.id) {
            cssClasses += " bg-stone-800 text-stone-200";
          } else {
            cssClasses += " text-stone-400";
          }
          return (
            <li key={project.id}>
              <button onClick={() => handleSelectProject(project.id)} disabled={projectIsSelected} className={cssClasses}>
                {project.title}
                <br />
                {`Due: ${formattedDueDate}`}
              </button>
            </li>
          );
        })}
      </ul>
    </aside>
  )
}
