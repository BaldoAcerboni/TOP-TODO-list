import {
  Task,
  Project,
  currentProjectsList,
  TemporaryId,
} from "./internalLogic";
import { newTaskModalRender, newProjectModalRender } from "./modalRender";
import { hideSidebar, showSidebar } from "./loadDOMcrap";
import { changeActiveProject } from "./renderSingleEl";
//things to add:
//  -edit item btn
//  -edit project
//  -delete item
//  -delete project
export function removeIrrelevantEventListeners() {
  const newTaskBtn = document.getElementById("add-item");
  const newProjectBtn = document.getElementById("new-project-btn");
  const hideSidebarBtn = document.getElementById("hide-icon");
  const showSidebarBtn = document.getElementById("menu-icon");

  const projectUL = document.getElementById("projects-ul");

  newTaskBtn.removeEventListener("click", newTaskModalRender);
  newProjectBtn.removeEventListener("click", newProjectModalRender);
  hideSidebarBtn.removeEventListener("click", hideSidebar);
  showSidebarBtn.removeEventListener("click", showSidebar);

  Array.from(projectUL.childNodes).forEach((e) => {
    e.removeEventListener("click", changeActiveProject);
  });
}
//things to add:
//  -edit item btn
//  -edit project
//  -delete item
//  -delete project
export function reinstateEventListeners() {
  const newTaskBtn = document.getElementById("add-item");
  const newProjectBtn = document.getElementById("new-project-btn");
  const hideSidebarBtn = document.getElementById("hide-icon");
  const showSidebarBtn = document.getElementById("menu-icon");

  const projectUL = document.getElementById("projects-ul");

  newTaskBtn.addEventListener("click", newTaskModalRender);
  newProjectBtn.addEventListener("click", newProjectModalRender);
  hideSidebarBtn.addEventListener("click", hideSidebar);
  showSidebarBtn.addEventListener("click", showSidebar);

  Array.from(projectUL.childNodes).forEach((e) => {
    e.addEventListener("click", changeActiveProject);
  });
}
