import { currentProjectsList } from "./localStorage";
import {
  newTaskModalRender,
  newProjectModalRender,
  editProjectModalRender,
  editTaskModalRender,
} from "./modalRender";
import {
  hideSidebar,
  showSidebar,
  deleteItem,
  changeCompleteOption,
  deleteProject,
  whichIsActive,
} from "./loadDOMcrap";
import { changeActiveProject } from "./renderSingleEl";

export function removeIrrelevantEventListeners() {
  const newTaskBtn = document.getElementById("add-item");
  const newProjectBtn = document.getElementById("new-project-btn");
  const hideSidebarBtn = document.getElementById("hide-icon");
  const showSidebarBtn = document.getElementById("menu-icon");

  const projectUL = document.getElementById("projects-ul");

  const task = document.getElementsByClassName("item");
  const editProjectBtn = document.getElementById("edit-project");
  const editTaskBtn = document.getElementsByClassName("edit-item");
  const deleteTaskBtn = document.getElementsByClassName("delete-item");
  const completeBtn = document.getElementsByClassName("complete-btn");
  const deleteProjectBtn = document.getElementsByClassName("delete-project");

  newProjectBtn.removeEventListener("click", newProjectModalRender);
  hideSidebarBtn.removeEventListener("click", hideSidebar);
  showSidebarBtn.removeEventListener("click", showSidebar);

  if (newTaskBtn) {
    newTaskBtn.removeEventListener("click", newTaskModalRender);
  }

  if (currentProjectsList.content.length > 0) {
    //do not remember why the func call below is here, i do remember there was an
    //error at a certain point in time that got fixed by it, but i can not reproduce it
    //after app finalization so let me just leave it commented out because it
    //messes up the dynamically grouped elements
    //whichIsActive(currentProjectsList);
    if (Array.from(task).length > 0) {
      Array.from(editTaskBtn).forEach((e) => {
        e.removeEventListener("click", editTaskModalRender);
      });
      Array.from(deleteTaskBtn).forEach((e) => {
        e.removeEventListener("click", deleteItem);
      });
      Array.from(completeBtn).forEach((e) => {
        e.removeEventListener("click", changeCompleteOption);
      });
      Array.from(deleteProjectBtn).forEach((e) => {
        e.removeEventListener("click", deleteProject);
      });
    }

    editProjectBtn.removeEventListener("click", editProjectModalRender);
    Array.from(projectUL.childNodes).forEach((e) => {
      e.removeEventListener("click", changeActiveProject);
    });
  }
}

export function reinstateEventListeners() {
  const newTaskBtn = document.getElementById("add-item");
  const newProjectBtn = document.getElementById("new-project-btn");
  const hideSidebarBtn = document.getElementById("hide-icon");
  const showSidebarBtn = document.getElementById("menu-icon");

  const projectUL = document.getElementById("projects-ul");

  const task = document.getElementsByClassName("item");
  const editProjectBtn = document.getElementById("edit-project");
  const editTaskBtn = document.getElementsByClassName("edit-item");
  const deleteTaskBtn = document.getElementsByClassName("delete-item");
  const completeBtn = document.getElementsByClassName("complete-btn");
  const deleteProjectBtn = document.getElementsByClassName("delete-project");

  newProjectBtn.addEventListener("click", newProjectModalRender);
  hideSidebarBtn.addEventListener("click", hideSidebar);
  showSidebarBtn.addEventListener("click", showSidebar);

  if (newTaskBtn) {
    newTaskBtn.addEventListener("click", newTaskModalRender);
  }

  if (currentProjectsList.content.length > 0) {
    whichIsActive(currentProjectsList);

    if (Array.from(task).length > 0) {
      Array.from(editTaskBtn).forEach((e) => {
        e.addEventListener("click", editTaskModalRender);
      });
      Array.from(deleteTaskBtn).forEach((e) => {
        e.addEventListener("click", deleteItem);
      });
      Array.from(completeBtn).forEach((e) => {
        e.addEventListener("click", changeCompleteOption);
      });
      Array.from(deleteProjectBtn).forEach((e) => {
        e.addEventListener("click", deleteProject);
      });
    }
    //new

    editProjectBtn.addEventListener("click", editProjectModalRender);
    Array.from(projectUL.childNodes).forEach((e) => {
      e.addEventListener("click", changeActiveProject);
    });
  }
}
