import "../style.css";

import addSVG from "../images/add.svg";
import completeSVG from "../images/complete.svg";
import incompleteSVG from "../images/incomplete.svg";
import sheetStackSVG from "../images/stack-of-sheets.svg";

import { Task, Project, TemporaryId } from "./constructors";
import {
  renderSidebar,
  renderSingleTask,
  renderTopContent,
} from "./renderSingleEl";
import { newTaskModalRender, editProjectModalRender } from "./modalRender";
import { currentProjectsList, updateLocalStorage } from "./localStorage";

const container = document.getElementById("container");
const head = document.getElementsByTagName("head");
const faviconIcon = document.createElement("link");
const faviconMask = document.createElement("link");

faviconIcon.rel = "icon";
faviconIcon.href = sheetStackSVG;

faviconMask.rel = "mask-icon";
faviconMask.href = sheetStackSVG;
faviconMask.color = "#3443ae";

Array.from(head).forEach((e) => {
  e.appendChild(faviconIcon);
  e.appendChild(faviconMask);
});

export const itemEdited = new TemporaryId("");

export function renderContainer() {
  const sidebarRendered = renderSidebar();
  const activeProject = whichIsActive(currentProjectsList) || new Project("");
  const main = renderMain(activeProject.content, activeProject.title);

  container.appendChild(sidebarRendered);
  container.appendChild(main);
}

export function renderMain(group, title) {
  const newMain = document.createElement("div");
  const topContent = renderTopContent(title);
  const addItemImg = new Image();

  newMain.id = "main";

  renderTasks(group, newMain);

  addItemImg.id = "add-item";
  addItemImg.src = addSVG;
  addItemImg.style.marginLeft = `${-(addItemImg.offsetWidth / 2)}px`;

  if (currentProjectsList.content.length > 0) {
    newMain.appendChild(addItemImg);
  }

  newMain.appendChild(topContent);

  addItemImg.addEventListener("click", newTaskModalRender);

  return newMain;
}

function renderTasks(arr, DOMel) {
  if (arr.length > 0) {
    for (const task of arr) {
      DOMel.appendChild(renderSingleTask(task));
    }
  }
}

export function whichIsActive(projects) {
  if (currentProjectsList.content.length > 0) {
    let isActive = projects.checkActiveProject();
    if (isActive) {
      return isActive;
    } else {
      projects.setActiveProject(projects.content[0]);
      isActive = projects.checkActiveProject();
      return isActive;
    }
  }
}

export function hideSidebar() {
  const sidebar = document.getElementById("projects");
  const main = document.getElementById("main");
  main.width = "100%";

  sidebar.classList.add("hidden");
}
export function showSidebar() {
  const sidebar = document.getElementById("projects");

  sidebar.classList.add("visible");
  sidebar.classList.remove("hidden");
  setTimeout(() => {
    sidebar.classList.remove("visible");
  }, 500);
}

export function setPriority(DOMel, item) {
  if (item.priority === "h") {
    DOMel.style.background = "#ff3434";
    DOMel.textContent = "High priority";
  } else if (item.priority === "m") {
    DOMel.style.background = "#ffe033";
    DOMel.textContent = "Medium priority";
  } else {
    DOMel.style.background = "#6aff2a";
    DOMel.textContent = "Low priority";
  }
}

export function deleteItem(e) {
  const activeProject = currentProjectsList.getProjectByItemId(
    e.target.parentNode.id
  );
  const task = activeProject.getItem(e.target.parentNode.id);
  e.target.parentNode.remove();
  activeProject.deleteListItem(task);
  updateLocalStorage();
}

export function deleteProject(e) {
  e.stopPropagation();
  const project = currentProjectsList.getItem(e.target.parentNode.id);

  currentProjectsList.deleteListItem(project);

  if (currentProjectsList.content.length === 0) {
    const thisWeek = document.getElementById("next-week");
    e.target.parentNode.remove();
    thisWeek.classList.add("active");
    showGroup(thisWeek);
  } else {
    const lateMain = document.getElementById("main");
    const lateSidebar = document.getElementById("projects");

    lateMain.remove();
    lateSidebar.remove();
    renderContainer();
  }
  updateLocalStorage();
}

export function setCompleteOption(task, DOMel) {
  if (task.complete) {
    DOMel.src = completeSVG;
  } else {
    DOMel.src = incompleteSVG;
  }
  updateLocalStorage();
}

export function changeCompleteOption(e) {
  const id = e.target.parentNode.parentNode.id;
  const project = currentProjectsList.getProjectByItemId(id);
  const task = project.getItem(id);

  task.setComplete();

  e.target.classList += " fade-out";
  e.target.removeEventListener("click", changeCompleteOption);

  setTimeout(() => {
    setCompleteOption(task, e.target);
    e.target.className = "complete-btn fade-in";

    setTimeout(() => {
      e.target.className = "complete-btn";
      e.target.addEventListener("click", changeCompleteOption);
    }, 500);
  }, 500);
}

export function deactivateAllProjects(e) {
  const projectUl = document.getElementById("projects-ul");
  currentProjectsList.setInactiveProjects();
  Array.from(projectUl.childNodes).forEach((el) => {
    el.classList.remove("active");
  });
  if (!e.target.classList.contains("active")) {
    Array.from(e.target.parentNode.children).forEach((el) => {
      if (el !== e.target) {
        el.classList.remove("active");
      } else {
        e.target.classList.add("active");
      }
    });
  }
}

export function showGroup(e) {
  const lateMain = document.getElementById("main");
  let newMain;
  if (e.target) {
    if (e.target.classList.contains("priority-group")) {
      const p = e.target.id[1];
      newMain = renderMain(
        currentProjectsList.getItemByPriority(p),
        e.target.textContent
      );
    } else if (e.target.id === "next-week") {
      newMain = renderMain(
        currentProjectsList.getItemByDueDate(),
        e.target.textContent
      );
    }
  } else if (e.classList.contains("priority-group")) {
    const p = e.id[1];
    newMain = renderMain(
      currentProjectsList.getItemByPriority(p),
      e.textContent
    );
  } else if (e.id === "next-week") {
    newMain = renderMain(currentProjectsList.getItemByDueDate(), e.textContent);
  }

  lateMain.remove();
  container.appendChild(newMain);
  const edit = document.getElementById("edit-project");
  const addTask = document.getElementById("add-item");
  if (addTask) {
    addTask.remove();
  }
  currentProjectsList.setInactiveProjects();
  edit.removeEventListener("click", editProjectModalRender);
}
