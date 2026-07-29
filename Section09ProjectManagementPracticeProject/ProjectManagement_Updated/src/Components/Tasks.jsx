import { useState } from 'react';

import CreateEditTask from './CreateEditTask.jsx';

export default function Tasks({ currProject, onAddTask, onUpdateTask, onDeleteTask }) {
  const [currEditingTask, setCurrEditingTask] = useState(null);

  const currProjectHasTasks = currProject && currProject.tasks && currProject.tasks.length > 0;

  function handleStartEditTask(task) {
    setCurrEditingTask(prevCurrEditingTask => {
      return {
        ...task
      };
    });
  }

  function handleUpdateTask(updatedTaskContent) {
    onUpdateTask(currEditingTask.id, updatedTaskContent);
    setCurrEditingTask(null);
  }
  
  return (
    <section>
      <h2 className="text-2xl font-bold text-stone-700 mb-4">Tasks</h2>
      <CreateEditTask initialTaskContent={currEditingTask != null ? currEditingTask.content : ''} onAddTask={onAddTask} onUpdateTask={handleUpdateTask} />
      {!currProjectHasTasks &&
        <p className="text-stone-800 my-4">
          This project has no tasks.
        </p>
      }
      {currProjectHasTasks &&
        <ul className="p-4 mt-8 rounded-md bg-stone-100">
          {currProject.tasks.map(task => 
            <li key={task.id} className="flex justify-between my-4">
              <span>{task.content}</span>
              {(currEditingTask !== null && currEditingTask.id === task.id) &&
                <div className="flex justify-end space-x-6">
                  <span>Editing task...</span>
                </div>
              }
              {(currEditingTask === null ||  currEditingTask.id !== task.id) &&
                <div className="flex justify-end space-x-6">
                  <button onClick={() => handleStartEditTask(task)} className="text-stone-700 hover:text-red-500">
                    Edit
                  </button>
                  <button onClick={() => onDeleteTask(task.id)} className="text-stone-700 hover:text-red-500">
                    Delete
                  </button>
                </div>
              }
            </li>
          )}
        </ul>
      }
    </section>
  );
}
