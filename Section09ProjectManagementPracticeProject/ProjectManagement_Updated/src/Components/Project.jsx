import NoProject from './NoProject.jsx';
import CreateEditProject from './CreateEditProject.jsx'

export default function Project({ 
  initialProject,
  onStartNewProject,
  onAddProject,
  onUpdateProject,
  onCloseProject,
  onDeleteProject,
  onAddTask,
  onUpdateTask,
  onDeleteTask 
}) {
  var content = null;
  if (initialProject === null) {
    content = <NoProject onStartNewProject={onStartNewProject} />
  } else {
    content = <CreateEditProject
                initialProject={initialProject}
                onAddProject={onAddProject}
                onUpdateProject={onUpdateProject}
                onCloseProject={onCloseProject}
                onDeleteProject={onDeleteProject}
                onAddTask={onAddTask}
                onUpdateTask={onUpdateTask}
                onDeleteTask={onDeleteTask}
              />
  }

  return (
    <>
      {content}
    </>
  );
}
