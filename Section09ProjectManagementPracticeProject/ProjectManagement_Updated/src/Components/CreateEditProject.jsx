import { useRef, useState, useEffect } from 'react';

import Input from './Input.jsx';
import Tasks from './Tasks.jsx';
import Modal from './Modal.jsx';

export default function CreateEditProject({
  initialProject,
  onAddProject,
  onUpdateProject,
  onCloseProject,
  onDeleteProject,
  onAddTask,
  onUpdateTask,
  onDeleteTask 
}) {
  const currProjectHasId = initialProject !== undefined && initialProject !== null && 
                            initialProject.id !== undefined && initialProject.id >= 0;

  const invalidInputRef = useRef(null);
  const cancelWithoutSavingRef = useRef(null);
  const deleteProjectRef = useRef(null);

  const [currProjectState, setCurrProjectState] = useState(initialProject);

  useEffect(() => {
    setCurrProjectState(initialProject);
  }, [initialProject]);

  function handleInputChange(event) {
    setCurrProjectState(prevCurrProjectState => {
      return {
        ...prevCurrProjectState,
        [event.target.id]: event.target.value
      };
    });
  }

  function handleSaveAndContinue(event) {
    handleSave(event, true);
  }

  function handleSave(event, saveAndContinue = false) {
    const newTitle = currProjectState.title;
    const newDescription = currProjectState.description;
    const newDueDate = currProjectState.dueDate;

    if (!newTitle || newTitle.trim() === '' ||
        !newDescription || newDescription.trim() === '' ||
        !newDueDate || newDueDate.trim() === '')
    {
      invalidInputRef.current.open();
      return;
    }
    const newProject = {
        title: newTitle,
        description: newDescription,
        dueDate: newDueDate
    };
    if (currProjectHasId) {
      onUpdateProject(newProject, saveAndContinue);
    } else {
      onAddProject(newProject, saveAndContinue);
    }
  }

  function handleDismissInvalidInputModal() {
    invalidInputRef.current.close();
  }

  function handleClose() {
    const newTitle = currProjectState.title;
    const newDescription = currProjectState.description;
    const newDueDate = currProjectState.dueDate;

    if ((newTitle && newTitle.trim() !== '') ||
        (newDescription && newDescription.trim() !== '') ||
        (newDueDate && newDueDate.trim() !== ''))
    {
      cancelWithoutSavingRef.current.open();
      return;
    }
    onCloseProject();
  }

  function handleDismissCloseWithoutSavingModal() {
    cancelWithoutSavingRef.current.close();
  }

  function handleConfirmCloseWithoutSaving() {
    cancelWithoutSavingRef.current.close();
    onCloseProject();
  }

  function handleDeleteProject() {
    deleteProjectRef.current.open();
  }

  function handleDismissDeleteModal() {
    deleteProjectRef.current.close();
  }

  function handleConfirmDeleteProject() {
    deleteProjectRef.current.close();
    onDeleteProject(currProjectState.id);
  }

  return (
    <>
      <Modal
        ref={invalidInputRef}
        dismissModalButtonText={"Return"}
        onDismissModal={handleDismissInvalidInputModal}
      >
        <h2 className="text-xl font-bold text-stone-700 my-4">Invalid Input</h2>
        <p className="text-stone-600 mb-4">All fields must have a value.</p>
      </Modal>
      <Modal
        ref={cancelWithoutSavingRef}
        dismissModalButtonText={"Return"}
        onDismissModal={handleDismissCloseWithoutSavingModal}
        confirmModalButtonText={"Confirm"}
        onConfirmModal={handleConfirmCloseWithoutSaving}
      >
        <h2 className="text-xl font-bold text-stone-700 my-4">Close Without Saving?</h2>
        <p className="text-stone-600 mb-4">All entered project data will be lost.</p>
      </Modal>
      <Modal
        ref={deleteProjectRef}
        dismissModalButtonText={"Return"}
        onDismissModal={handleDismissDeleteModal}
        confirmModalButtonText={"Confirm"}
        onConfirmModal={handleConfirmDeleteProject}
      >
        <h2 className="text-xl font-bold text-stone-700 my-4">Delete Project?</h2>
        <p className="text-stone-600 mb-4">This cannot be undone.</p>
      </Modal>
      <div className="w-[35rem] mt-16">
        <menu className="flex items-center justify-end gap-2 my-4">
          {currProjectHasId && 
            <button
              onClick={handleDeleteProject}
              className="px-3 py-2 rounded-md text-stone-800 hover:bg-stone-200 hover:text-red-700"
            >
              Delete
            </button>
          }
          <button
            onClick={handleClose}
            className="px-3 py-2 rounded-md text-stone-800 hover:bg-stone-200 hover:text-stone-950"
          >
            Close
          </button>
          <button
            onClick={handleSaveAndContinue}
            className="px-6 py-2 rounded-md bg-stone-600 text-stone-50 hover:bg-stone-700"
          >
            Save & Continue
          </button>
          <button
            onClick={handleSave}
            className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
          >
            Save & Close
          </button>
        </menu>
        <div>
          <Input
            onChange={handleInputChange}
            type="text"
            id="title"
            label={"Title"}
            value={currProjectState != null && currProjectState.title != null ? currProjectState.title : ''}
          />
          <Input
            onChange={handleInputChange}
            isTextArea={true}
            id="description"
            label={"Description"}
            value={currProjectState != null && currProjectState.description != null ? currProjectState.description : ''}
          />
          <Input
            onChange={handleInputChange}
            type="date"
            id="dueDate"
            label={"Due Date"}
            value={currProjectState != null && currProjectState.dueDate != null ? currProjectState.dueDate : ''}
          />
        </div>
        {currProjectHasId && 
          <Tasks currProject={currProjectState} onAddTask={onAddTask} onUpdateTask={onUpdateTask} onDeleteTask={onDeleteTask}/>}
      </div>
    </>
  );
}
