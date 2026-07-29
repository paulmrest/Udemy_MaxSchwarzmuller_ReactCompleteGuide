# Section 09 - Project Management Practice Project

## Original Spec

For the sake of future students, this is the spec for the original Project Management project Max (briefly) demos in the first video in this section, and then builds in the rest of the section.

We are building a Project Management app here with minimal functionality. A user should be able to create new projects, see those projects in the sidebar, click on a given project in the sidebar, and then see and manage tasks for that project. When managing tasks, the user can also delete the entire project. There is no functionality for editing projects or tasks once they are created.

The only validation that occurs (and this is not shown in the first video) is when a user tries to save a project that doesn't have the three attributes that a project needs: Title, Description, and Due Date.

The app has no memory beyond the browser session, so everything is lost in a refresh.

Tailwind CSS classes can be found here: [Project Management Tailwind CSS Classes](#tailwind-css-classes). With some reasoning and trial and error it's relatively easy to figure out which element with which classes builds which UI/UX bits in the app.

Starting code can be found here: [Academind - React Complete Guide - Section 09 - Starting Code](https://github.com/academind/react-complete-guide-course-resources/tree/a5c42661524ffc2a2e6e87104db9724376876034/code/09%20Practice%20Project%20-%20Project%20Management/01-starting-project)

Upon launching the app the user sees this home page:

![Initial State](/Section09ProjectManagementPracticeProject/assets/VideoScreenshot01-InitialState.png)

The user can create a project in either the sidebar's "+ Add Project" button or the "Create new project" button in the main window. Both of these buttons change in appearance during a mouseover.

Upon clicking the "+ Add Project" or "Create new project" buttons, the user is brought to the new project entry screen.

![Create New Project](/Section09ProjectManagementPracticeProject/assets/VideoScreenshot02-AfterClickingAddProject.png)

Here the user enters the **Title**, **Description**, and **Due Date** for their new project. **Title** takes a single row of text, **Description** shows 2 rows of text by default but can be dragged into a larger (or smaller) text area. **Due Date** has a date picker and can only accept date values.

Clicking "Save" any of the three inputs don't have a value results in a modal pop-up (not shown in the first video, so the screengrab looks different):

![Save Project With Invalid Inputs](/Section09ProjectManagementPracticeProject/assets/NonVideoScreenshot01-SaveProjectWithoutValues.png)

Clicking "Cancel" returns the user to the home page without saving the project. No confirmation occurs for canceling.

Clicking "Save" when all three of the inputs have values

![Project With Valid Inputs](/Section09ProjectManagementPracticeProject/assets/VideoScreenshot03-FilledOutProjectBeforeSaving.png)

Returns the user to the home page but now we show the newly saved project in the sidebar:

![Saved Project in Sidebar](/Section09ProjectManagementPracticeProject/assets/VideoScreenshot04-SavedProject.png)

Note that we are only showing the **Title** of the project in the sidebar.

Subsequent screengrabs show a second project, "Mastering React", that was also entered and saved.

From here the user can mouseover the saved project in the sidebar (element background and text lightens during mouseover), and then click on the project which brings us to the task entry page:

![Task Entry](/Section09ProjectManagementPracticeProject/assets/VideoScreenshot05-ClickOnProjectInSidebarViewTasks.png)

The task entry page shows the project details at the top, left-justified:

> Title
>
> Due Date
>
> Description

And right-justified is a "Delete" button.

Below that we show the tasks for the project. Initially a saved project will have no tasks and we show the "This project does not have any tasks yet." notice. The user types their task into the single row text input, clicks "Add Task", the "This project does not have..." notice disappears and we show the task(s) under the text input. Here is after adding three tasks:

![Three Entered Tasks](/Section09ProjectManagementPracticeProject/assets/VideoScreenshot06-AddedThreeTasksToProject.png)

Tasks can then be deleted by clicking on the "Clear" button shown on each task row. After deleting two of the three tasks added above:

![Two of Three Tasks Deleted](/Section09ProjectManagementPracticeProject/assets/VideoScreenshot07-DeletedTwoTasks.png)

The user can navigate to other saved projects when in the task entry page in the sidebar:

![Switching Projects in Sidebar - Before Switch](/Section09ProjectManagementPracticeProject/assets/NonVideoScreenshot01-SwitchProject01.png)

![Switching Projects in Sidebar - After Switch](/Section09ProjectManagementPracticeProject/assets/NonVideoScreenshot01-SwitchProject02.png)

A more minimal spec, but with React-specific implementation details, can be found here: [Minimal Spec](#react-specific-minimal-spec-with-implementation-details)

## Tailwind CSS Classes

```
<main className="h-screen my-8 flex gap-8">...</main>
<button className="px-4 py-2 text-xs md:text-base rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100">...</button>
<input className="w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600" />
<p className="flex flex-col gap-1 my-4">...</p>
<label className="text-sm font-bold uppercase text-stone-500">...</label>
<dialog className="backdrop:bg-stone-900/90 p-4 rounded-md shadow-md">...</dialog>
<form className="mt-4 text-right">...</form>
<h2 className="text-xl font-bold text-stone-700 my-4">...</h2>
<p className="text-stone-600 mb-4">...</p>
<div className="w-[35rem] mt-16">...</div>
<menu className="flex items-center justify-end gap-4 my-4">...</menu>
<button className="text-stone-800 hover:text-stone-950">...</button>
<button className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950">...</button>
<div className="flex items-center gap-4">
<input className="w-64 px-2 py-1 rounded-sm bg-stone-200" />
<button className="text-stone-700 hover:text-stone-950">...</button>
<div className="mt-24 text-center w-2/3">
<img className="w-16 h-16 object-contain mx-auto" />
<h2 className="text-xl font-bold text-stone-500 my-4">...</h2>
<p className="text-stone-400 mb-4">...</p>
<p className="mt-8">...</p>
<aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
<h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">...</h2>
<ul className="mt-8">...</ul>
<button className="w-full text-left px-2 py-1 rounded-sm my-1 hover:text-stone-200 hover:bg-stone-800">...</button>
<div className="w-[35rem] mt-16">...</div>
<header className="pb-4 mb-4 border-b-2 border-stone-300">...</header>
<div className="flex items-center justify-between">...</div>
<h1 className="text-3xl font-bold text-stone-600 mb-2">...</h1>
<button className="text-stone-600 hover:text-stone-950">...</button>
<p className="mb-4 text-stone-400">...</p>
<p className="text-stone-600 whitespace-pre-wrap">...</p>
<h2 className="text-2xl font-bold text-stone-700 mb-4">Tasks</h2>
<p className="text-stone-800 my-4">...</p>
<ul className="p-4 mt-8 rounded-md bg-stone-100">...</ul>
<li className="flex justify-between my-4">...</li>
<button className="text-stone-700 hover:text-red-500">...</button>
```

## React Specific Minimal Spec with Implementation Details

```
Project's management application
==================================
1) Build SideBar and Content components
   # Sidebar
   - Show a list of projects
   - Have an "Add Project" button that navigates
     to form to add to the list of project
   - List of projects should be navigatable to the 
     project detail view
   # Content
   - main content window where you will display projects
   - should show fallback when there is no project to display
   - fallback should have a button to navigate to the
     new project form
2) Project Detail components
   # New Project Form
   - a form to add a new project
   - should have a "title", "description", & "due date" fields
   - ultimately update your state in the App component with
     the new project information
   # Project Detail component
   - show the title and description of the project along
     with the due date of the project
   - show a delete button and handle the deletion
   # Tasks component
   - nested in the detail view
   - Show a list of tasks associated with the project
   - Facilitate the adding/removal of tasks through a
     form and button respectively
   - Again manage your tasks state associated with each
     project, likely in the App component as wel
```

## Improvements/Changes to Project Management App

While still staying within the confines of "this is just a demo app", there were a few things that really bothered me about the above app's spec:

- The workflow of saving the project and then having to go back into your project to add tasks.
- The inability to edit a project's details once saved.
- The inability to edit a task once saved.
- The ability to add blank tasks.
- Sidebar should show project due date in addition to title.

Additionally, one of the implementation details bothered me:

- Saving projects and tasks in separate arrays in the task object. This creates the potential for orphaned tasks and/or projects that lose their tasks.

In the process I expanded the Modal component to allow both a configurable "close" and a "confirm" button.

In the ProjectManagement_Updated repo, I implemented these changes.

Initial screen looks the same, but once the user clicks on "+ Add New Project" or "Create New Project" they see "Close", "Save & Continue", and "Save & Close".

![Initial New Project](/Section09ProjectManagementPracticeProject/assets/Updated01-InitialNewProject.png)

Clicking "Close" brings up a modal asking to return or confirm the close:

![Close Project Modal](/Section09ProjectManagementPracticeProject/assets/Updated02-NewProjectCloseModal.png)

Clicking "Save & Close" saves the project and returns to the home page (not pictured).

Clicking "Save & Continue" saves the project but keeps the user on the same page while bringing up the "Tasks" section and the "Delete" button:

![New Project Saved](/Section09ProjectManagementPracticeProject/assets/Updated03-NewSaved.png)

Note that "Add Tasks" is grayed out until the input has text in it.

![New Task - Unsaved](/Section09ProjectManagementPracticeProject/assets/Updated04-NewTaskUnsaved.png)

Once tasks are entered:

![Tasks Entered](/Section09ProjectManagementPracticeProject/assets/Updated05-TasksEntered.png)

there is the "Delete" button for each task, as before, but also now an "Edit" button.

Clicking the "Edit" button puts a task into an editable state:

![Editing Task](/Section09ProjectManagementPracticeProject/assets/Updated06-EditingTask.png)

and then clicking "Edit Task" updates the task:

![Finished Editing Task](/Section09ProjectManagementPracticeProject/assets/Updated07-FinishedEditingTask.png)

Deleting a task works the same as in the original. There is confirmation when deleting a task.

To simplify things, I made it so that projects can only be selected and drilled into from the home page. When working in a project, the sidebar shows the other projects, but they cannot be selected (not pictured).

Clicking the "Delete" button for a project shows a modal for confirmation:

![Delete Project Modal](/Section09ProjectManagementPracticeProject/assets/Updated08-DeletingProject.png)

and if the user confirms the project is deleted:

![After Deleting Project](/Section09ProjectManagementPracticeProject/assets/Updated09-AfterDeletingProject.png)

A number of additional, not terribly complicated, improvements could be made from here:

- Check if project and/or tasks have been modified before showing the close modal.
- Synchronize tasks with the other project details so that they're only saved when "Save & Continue" or "Save & Close" are clicked. Presently, tasks are saved/updated/deleted independent of the other project functionalities.
- Allow moving between projects in the sidebar while working within a project.

But I decided to stop with the above changes.
