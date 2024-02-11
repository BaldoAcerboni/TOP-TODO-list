import { whichIsActive, itemEdited, showGroup } from "./loadDOMcrap";
import { renderSingleProject, renderTopContent } from "./renderSingleEl";
import { Task, Project } from "./constructors";
import { renderSingleTask } from "./renderSingleEl";
import { currentProjectsList, updateLocalStorage } from "./localStorage";

export function confirmNewTask() {
  const main = document.getElementById("main");
  const form = document.getElementById("item-modal");
  const title = document.getElementById("title-input").value;
  const description = document.getElementById("description-input").value;
  const date = document.getElementById("date-input").value;
  const priorities = document.getElementsByName("priority");

  let priority;
  Array.from(priorities).forEach((e) => {
    if (e.checked) {
      priority = e.id[0];
    }
  });

  const activeProject = whichIsActive(currentProjectsList);
  const newTask = new Task(title, description, date, priority);

  activeProject.addNewItem(newTask);
  const taskDOM = renderSingleTask(newTask);
  main.appendChild(taskDOM);
  form.remove();
  updateLocalStorage();
}

export function confirmEditTask() {
  const main = document.getElementById("main");
  const form = document.getElementById("item-modal");
  const title = document.getElementById("title-input").value;
  const description = document.getElementById("description-input").value;
  const date = document.getElementById("date-input").value;
  const priorities = document.getElementsByName("priority");
  const activeProject = currentProjectsList.getProjectByItemId(itemEdited.id);
  const dynamicGroupUl = document.getElementById("dynamic-ul");
  const task = activeProject.getItem(itemEdited.id);
  const DOMItem = document.getElementById(itemEdited.id);
  let priority;

  Array.from(priorities).forEach((e) => {
    if (e.checked) {
      priority = e.id[0];
    }
  });

  task.editItem(title, description, date, priority);

  let pos;
  Array.from(main.childNodes).forEach((e) => {
    if (e.id === DOMItem.id) {
      pos = Array.from(main.childNodes).indexOf(DOMItem);
    }
  });

  if (currentProjectsList.checkActiveProject()) {
    DOMItem.remove();
    main.insertBefore(renderSingleTask(task), main.children[pos]);
  } else {
    Array.from(dynamicGroupUl.children).forEach((e) => {
      if (e.classList.contains("active")) {
        showGroup(e);
      }
    });
  }

  form.remove();
  updateLocalStorage();
  itemEdited.setTempId("");
}

export function confirmNewProject() {
  const projectUL = document.getElementById("projects-ul");
  const form = document.getElementById("project-modal");
  const title = document.getElementById("project-name").value;
  const newProject = new Project(title);

  currentProjectsList.addNewItem(newProject);

  const li = renderSingleProject(newProject);
  projectUL.appendChild(li);

  form.remove();
  updateLocalStorage();
}

export function confirmEditProject() {
  const lateTopContent = document.getElementById("active-project");
  const main = document.getElementById("main");
  const projectUL = document.getElementById("projects-ul");
  const form = document.getElementById("project-modal");
  const title = document.getElementById("project-name").value;
  const project = currentProjectsList.getItem(itemEdited.id);
  const DOMItem = document.getElementById(itemEdited.id);

  project.editItem(title);
  let pos;
  Array.from(projectUL.childNodes).forEach((e) => {
    if (e.id === DOMItem.id) {
      pos = Array.from(projectUL.childNodes).indexOf(DOMItem);
    }
  });
  DOMItem.remove();

  projectUL.insertBefore(renderSingleProject(project), projectUL.children[pos]);

  form.remove();
  lateTopContent.remove();
  updateLocalStorage();
  main.appendChild(renderTopContent(whichIsActive(currentProjectsList).title));
}
