import editSmallSVG from "../images/edit-small.svg";
import hideSVG from "../images/hide.svg";
import sheetStackSVG from "../images/stack-of-sheets.svg";
import deleteSVG from "../images/delete.svg";
import editBigSVG from "../images/edit-big.svg";
import menuSVG from "../images/menu.svg";

import {
  Task,
  Project,
  currentProjectsList,
  TemporaryId,
} from "./internalLogic";
import {
  editTaskModalRender,
  newProjectModalRender,
  editProjectModalRender,
} from "./modalRender";
import {
  whichIsActive,
  hideSidebar,
  showSidebar,
  renderMain,
  setPriority,
  deleteItem,
  setCompleteOption,
  changeCompleteOption,
  deactivateAllProjects,
  showGroup,
} from "./loadDOMcrap";

export function renderSidebar() {
  const sidebarRender = document.createElement("div");
  const sidebarIcons = document.createElement("div");
  const newProjectBtnRender = document.createElement("button");
  const projectListTitleRender = document.createElement("h2");
  const projectUl = document.createElement("ul");
  const dynamicUl = document.createElement("ul");
  const dynamicTitle = document.createElement("h2");
  const hideImg = new Image();
  const sheetStackImg = new Image();

  sidebarRender.id = "projects";
  sidebarIcons.id = "icons";
  newProjectBtnRender.id = "new-project-btn";
  projectUl.id = "projects-ul";
  dynamicUl.id = "dynamic-ul";
  dynamicTitle.id = "dynamic-h2";
  hideImg.id = "hide-icon";
  hideImg.src = hideSVG;
  sheetStackImg.src = sheetStackSVG;

  newProjectBtnRender.textContent = "CREATE NEW PROJECT";
  projectListTitleRender.textContent = "Your projects:";
  dynamicTitle.textContent = "Dynamically grouped tasks";

  sidebarIcons.appendChild(sheetStackImg);
  sidebarIcons.appendChild(hideImg);

  renderProjectUl(projectUl);
  renderDynamicUl(dynamicUl);

  sidebarRender.appendChild(sidebarIcons);
  sidebarRender.appendChild(dynamicTitle);
  sidebarRender.appendChild(dynamicUl);
  sidebarRender.appendChild(newProjectBtnRender);
  sidebarRender.appendChild(projectListTitleRender);
  sidebarRender.appendChild(projectUl);

  newProjectBtnRender.addEventListener("click", newProjectModalRender);
  hideImg.addEventListener("click", hideSidebar);

  return sidebarRender;
}

function renderProjectUl(list) {
  whichIsActive(currentProjectsList);
  for (const project of currentProjectsList.content) {
    const li = renderSingleProject(project);
    list.appendChild(li);
  }
}

function renderDynamicUl(ul) {
  const nextWeek = document.createElement("li");
  const highPriority = document.createElement("li");
  const mediumPriority = document.createElement("li");
  const lowPriority = document.createElement("li");

  nextWeek.id = "next-week";
  highPriority.id = "dhp";
  mediumPriority.id = "dmp";
  lowPriority.id = "dlp";
  highPriority.className = "priority-group";
  mediumPriority.className = "priority-group";
  lowPriority.className = "priority-group";

  nextWeek.textContent = "Due this week";
  highPriority.textContent = "High priority";
  mediumPriority.textContent = "Medium priority";
  lowPriority.textContent = "Low priority";

  ul.appendChild(nextWeek);
  ul.appendChild(highPriority);
  ul.appendChild(mediumPriority);
  ul.appendChild(lowPriority);

  Array.from(ul.childNodes).forEach((e) => {
    e.addEventListener("click", deactivateAllProjects);
    e.addEventListener("click", showGroup);
  });

  /* const priorityGroup = document.getElementsByClassName("priority-group");
  console.log(priorityGroup);
  Array.from(priorityGroup).forEach((e) => {}); */
}

export function renderSingleProject(project) {
  const li = document.createElement("li");

  li.textContent = `${project.title}`;

  if (!project.id) {
    currentProjectsList.checkDuplicateProject(project);
  }
  li.id = project.id;

  li.addEventListener("click", changeActiveProject);

  if (project.active) {
    li.className = "active";
  } else {
    li.className = "";
  }
  return li;
}

export function changeActiveProject(e) {
  const projectUl = document.getElementById("projects-ul");
  const dynamicGroup = document.getElementById("dynamic-ul");
  const lateMain = document.getElementById("main");

  Array.from(projectUl.childNodes).forEach((el) => {
    if (e.target !== el) {
      el.classList.remove("active");
    } else {
      el.classList.add("active");
    }
  });

  Array.from(dynamicGroup.children).forEach((el) => {
    el.classList.remove("active");
  });

  for (const proj of currentProjectsList.content) {
    if (proj.id === e.target.id && !proj.active) {
      currentProjectsList.setInactiveProjects();
      currentProjectsList.setActiveProject(proj);
    }
  }

  const activeProject = whichIsActive(currentProjectsList);

  lateMain.remove();
  container.appendChild(renderMain(activeProject.content, activeProject.title));
}

export function renderTopContent(projectTitle) {
  const newTopSection = document.createElement("div");
  const title = document.createElement("h1");

  const editProjectImg = new Image();
  const showImg = new Image();

  newTopSection.id = "active-project";
  editProjectImg.id = "edit-project";
  showImg.id = "menu-icon";

  title.textContent = projectTitle;
  editProjectImg.src = editBigSVG;
  showImg.src = menuSVG;

  newTopSection.appendChild(showImg);
  newTopSection.appendChild(title);
  newTopSection.appendChild(editProjectImg);

  showImg.addEventListener("click", showSidebar);
  editProjectImg.addEventListener("click", editProjectModalRender);
  return newTopSection;
}

export function renderSingleTask(task) {
  const item = document.createElement("div");
  const title = document.createElement("div");
  const description = document.createElement("div");
  const date = document.createElement("div");
  const priority = document.createElement("div");
  const complete = document.createElement("div");
  const editBtn = new Image();
  const deleteBtn = new Image();
  const completeBtn = new Image();

  item.className = "item";
  title.className = "title";
  description.className = "description";
  date.className = "date";
  priority.className = "priority";
  complete.className = "complete";

  editBtn.className = "edit-item";
  deleteBtn.className = "delete-item";
  completeBtn.className = "complete-btn";

  editBtn.src = editSmallSVG;
  deleteBtn.src = deleteSVG;
  if (!task.id) {
    currentProjectsList.checkDuplicateItem(task);
  }
  item.id = task.id;

  title.textContent = task.title;
  description.textContent = task.description;
  date.textContent = task.date;
  complete.textContent = "Complete:";

  setPriority(priority, task);
  setCompleteOption(task, completeBtn);
  complete.appendChild(completeBtn);

  item.appendChild(title);
  item.appendChild(description);
  item.appendChild(date);
  item.appendChild(priority);
  item.appendChild(complete);

  item.appendChild(editBtn);
  item.appendChild(deleteBtn);

  editBtn.addEventListener("click", editTaskModalRender);
  deleteBtn.addEventListener("click", deleteItem);
  completeBtn.addEventListener("click", changeCompleteOption);

  return item;
}
