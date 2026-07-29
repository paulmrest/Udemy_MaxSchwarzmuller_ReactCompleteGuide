import { useState, useEffect } from "react";

export default function CreateEditTask({ initialTaskContent, onAddTask, onUpdateTask }) {
  const [currTaskContent, setCurrTaskContent] = useState(initialTaskContent != null ? initialTaskContent : '');

  useEffect(() => {
    setCurrTaskContent(prevCurrTaskContent => {
      if (initialTaskContent && initialTaskContent.trim() !== '') {
        return initialTaskContent;
      }
      return prevCurrTaskContent;
    });
  }, [initialTaskContent]);

  function handleInputChange(event) {
    setCurrTaskContent(event.target.value);
  }

  function handleAddTask() {
    onAddTask(currTaskContent);
    setCurrTaskContent('');
  }

  function handleUpdateTask() {
    onUpdateTask(currTaskContent);
    setCurrTaskContent('');
  }

  const buttonCssClasses = "text-stone-700 hover:text-stone-950 disabled:text-stone-400";
  return (
    <div className="flex items-center gap-4">
      <input
        type="text"
        className="w-64 px-2 py-1 rounded-sm bg-stone-200"
        onChange={handleInputChange}
        value={currTaskContent}
      >
      </input>
      {(initialTaskContent != null && initialTaskContent.trim() !== '') && 
        <button onClick={handleUpdateTask} disabled={currTaskContent == null || currTaskContent.length <= 0} className={buttonCssClasses}>Edit Task</button>
      }
      {(initialTaskContent == null || initialTaskContent.trim() === '') &&
        <button onClick={handleAddTask} disabled={currTaskContent == null || currTaskContent.length <= 0} className={buttonCssClasses}>Add Task</button>
      }
    </div>
  );
}
