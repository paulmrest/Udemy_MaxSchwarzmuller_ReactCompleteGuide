export function getNewProjectId(projects) {
  if (projects === null || projects.length <= 0) {
    return 1;
  }
  let expectedNextId = 0;
  const projectsSortedById = projects.toSorted((a, b) => a.id - b.id);
  for (const project of projectsSortedById) {
    expectedNextId++;
    if (project.id !== expectedNextId) {
      return expectedNextId;
    }
  }
  return ++expectedNextId;
}