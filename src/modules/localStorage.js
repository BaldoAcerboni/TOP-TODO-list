import { Task, Project, ProjectsArr } from "./constructors.js";

function getListFromStorage() {
  let temp = JSON.parse(localStorage.getItem("currentProjectsList"));
  return setStoragePLAsInstanceOfClass(temp);
}

function setStoragePLAsInstanceOfClass(list) {
  const pList = new ProjectsArr();
  for (const storageProject of list.content) {
    const project = setStorageProjectAsInstanceOfClass(storageProject);
    pList.addNewItem(project);
  }
  return pList;
}

function setStorageProjectAsInstanceOfClass(project) {
  const p = new Project(project.title);
  p.assignId(project.id);
  for (const storageTask of project.content) {
    const task = setStorageTaskAsInstanceOfClass(storageTask);
    p.addNewItem(task);
  }
  return p;
}

function setStorageTaskAsInstanceOfClass(task) {
  const t = new Task(task.title, task.description, task.date, task.priority);
  t.assignId(task.id);
  t.setFreshComplete(task.complete);
  return t;
}

function initializeStorage() {
  const obj = new ProjectsArr();
  localStorage.setItem("currentProjectsList", JSON.stringify(obj));
  return obj;
}

function checkLocalStorage() {
  if (localStorage.getItem("currentProjectsList")) {
    const tempList = getListFromStorage();
    return tempList;
  } else {
    const tempList = initializeStorage();
    return tempList;
  }
}

export function updateLocalStorage() {
  localStorage.setItem(
    "currentProjectsList",
    JSON.stringify(currentProjectsList)
  );
}

export const currentProjectsList = checkLocalStorage();
