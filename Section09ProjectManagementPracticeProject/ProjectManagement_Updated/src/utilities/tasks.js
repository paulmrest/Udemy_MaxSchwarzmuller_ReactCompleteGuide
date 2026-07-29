export function getNewTaskId(tasks) {
  if (tasks === null || tasks.length <= 0) {
    return 1;
  }
  let expectedNextId = 0;
  const tasksSortedById = tasks.toSorted((a, b) => a.id - b.id);
  for (const task of tasks) {
    expectedNextId++;
    if (task.id !== expectedNextId) {
      return expectedNextId;
    }
  }
  return ++expectedNextId;
}