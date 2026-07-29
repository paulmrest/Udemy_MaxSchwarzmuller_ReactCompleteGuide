import { useState } from 'react';

import { getNewProjectId } from './utilities/projects.js'
import { getNewTaskId } from './utilities/tasks.js';

import Sidebar from './Components/Sidebar.jsx';
import Project from './Components/Project.jsx';

function App() {
  const [projectState, setProjectState] = useState({
    selectedProject: null,
    projects: []
  });

  function handleStartNewProject() {
    setProjectState(prevProjectState => {
      return {
        ...prevProjectState,
        selectedProject: {
          title: null,
          description: null,
          dueDate: null,
          tasks: null
        }
      };
    });
  }

  function handleAddProject(projectData, saveAndContinue) {
    setProjectState(prevProjectState => {
      const newProjectId = getNewProjectId(projectState.projects);
      const newProject = {
        id: newProjectId,
        tasks: [],
        ...projectData
      };
      return {
        selectedProject: saveAndContinue ? newProject : null,
        projects: [...prevProjectState.projects, newProject]
      };
    });
  }

  function handleUpdateProject(updatedProjectData, saveAndContinue) {
    setProjectState(prevProjectState => {
      const updatedSelectedProject = {
        ...prevProjectState.selectedProject,
        title: updatedProjectData.title,
        description: updatedProjectData.description,
        dueDate: updatedProjectData.dueDate
      }
      return {
        ...prevProjectState,
        selectedProject: saveAndContinue ? updatedSelectedProject : null,
        projects: prevProjectState.projects.map(project => {
          if (project.id === updatedSelectedProject.id) {
            return updatedSelectedProject;
          }
          return project;
        })
      };
    });
  }

  function handleCloseProject() {
    setProjectState(prevProjectState => {
      return {
        ...prevProjectState,
        selectedProject: null
      };
    });
  }

  function handleDeleteProject(projectId) {
    setProjectState(prevProjectState => {
      return {
        selectedProject: null,
        projects: prevProjectState.projects.filter(project => project.id !== projectId)
      };
    });
  }

  function handleSelectProject(projectId) {
    setProjectState(prevProjectState => {
      return {
        ...prevProjectState,
        selectedProject: prevProjectState.projects.find(project => project.id === projectId)
      };
    });
  }

  function handleAddTask(taskContent) {
    setProjectState(prevProjectState => {
      const newTaskId = getNewTaskId(prevProjectState.selectedProject.tasks);
      return {
        ...prevProjectState,
        selectedProject: {
          ...prevProjectState.selectedProject,
          tasks: [...prevProjectState.selectedProject.tasks, {
            id: newTaskId,
            content: taskContent
          }]
        }
      };
    });
  }

  function handleUpdateTask(taskId, updatedTaskContent) {
    setProjectState(prevProjectState => {
      const updatedSelectedProject = {
        ...prevProjectState.selectedProject,
        tasks: prevProjectState.selectedProject.tasks.map(task => {
          if (task.id === taskId) {
            return {
              id: task.id,
              content: updatedTaskContent
            };
          }
          return task;
        })
      };
      return {
        ...prevProjectState,
        selectedProject: updatedSelectedProject
      };
    });
  }

  function handleDeleteTask(taskId) {
    setProjectState(prevProjectState => {
      return {
        ...prevProjectState,
        selectedProject: {
          ...prevProjectState.selectedProject,
          tasks: prevProjectState.selectedProject.tasks.filter(task => task.id !== taskId)
        }
      };
    });
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <Sidebar onStartNewProject={handleStartNewProject} onSelectProject={handleSelectProject} projectState={projectState} />
        <Project
          initialProject={projectState.selectedProject}
          onStartNewProject={handleStartNewProject}
          onAddProject={handleAddProject}
          onUpdateProject={handleUpdateProject}
          onCloseProject={handleCloseProject}
          onDeleteProject={handleDeleteProject}
          onAddTask={handleAddTask}
          onUpdateTask={handleUpdateTask}
          onDeleteTask={handleDeleteTask}
        />
    </main>
  );
}

export default App;
