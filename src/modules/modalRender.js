import { itemEdited, whichIsActive } from "./loadDOMcrap";
import { removeIrrelevantEventListeners } from "./eventListenersManager";
import { validateNewModal, validateEditModal } from "./modalValidation";
import {
  Task,
  Project,
  currentProjectsList,
  TemporaryId,
} from "./internalLogic";

export function newTaskModalRender() {
  const elList = newTaskModalCreateElements();
  const formToRender = newTaskRenderLoops(elList);

  container.appendChild(formToRender);
  removeIrrelevantEventListeners();

  formToRender.addEventListener("submit", validateNewModal);
}

export function editTaskModalRender(e) {
  const id = e.target.parentNode.id;

  const activeProject = currentProjectsList.getProjectByItemId(
    e.target.parentNode.id
  ); //whichIsActive(currentProjectsList);
  const taskToEdit = activeProject.getItem(id);
  const elList = newTaskModalCreateElements();
  const formToRender = newTaskRenderLoops(elList);

  container.appendChild(formToRender);

  const titleInput = document.getElementById("title-input");
  const descriptionInput = document.getElementById("description-input");
  const dateInput = document.getElementById("date-input");
  const highPRadio = document.getElementById("high-priority");
  const mediumPRadio = document.getElementById("medium-priority");
  const lowPRadio = document.getElementById("low-priority");

  titleInput.value = taskToEdit.title;
  descriptionInput.value = taskToEdit.description;
  dateInput.value = taskToEdit.date;

  switch (taskToEdit.priority) {
    case "h":
      highPRadio.setAttribute("checked", "");
      break;
    case "m":
      mediumPRadio.setAttribute("checked", "");
      break;
    case "l":
      lowPRadio.setAttribute("checked", "");
      break;
  }

  removeIrrelevantEventListeners();

  itemEdited.setTempId(id);

  formToRender.addEventListener("submit", validateEditModal);
}

//doing it the easy way with form.innerHTML = `actual HTML` was way better(~40
//lines vs ~150 lines), but when i realized, i was too committed already hence
//the abomination below was created
function newTaskModalCreateElements() {
  const form = document.createElement("form");
  const h2 = document.createElement("h2");
  const containingDiv = document.createElement("div");

  const titleLabel = document.createElement("label");
  const titleInput = document.createElement("input");

  const descriptionLabel = document.createElement("label");
  const descriptionInput = document.createElement("textarea");

  const dateLabel = document.createElement("label");
  const dateInput = document.createElement("input");

  const hpRadioLabel = document.createElement("label");
  const hpRadioInput = document.createElement("input");
  const mpRadioLabel = document.createElement("label");
  const mpRadioInput = document.createElement("input");
  const lpRadioLabel = document.createElement("label");
  const lpRadioInput = document.createElement("input");

  const confirmBtn = document.createElement("button");

  //ATTRIBUTES
  form.id = "item-modal";
  h2.textContent = "Priority:";

  titleLabel.textContent = "Title:";
  titleLabel.setAttribute("for", "title-input");
  titleInput.id = "title-input";
  titleInput.setAttribute("type", "text");
  titleInput.setAttribute("maxlength", "25");
  titleInput.setAttribute("required", "");

  descriptionLabel.textContent = "Description:";
  descriptionLabel.setAttribute("for", "description-input");
  descriptionInput.id = "description-input";
  descriptionInput.setAttribute("name", "description-input");
  descriptionInput.setAttribute("cols", "30");
  descriptionInput.setAttribute("rows", "4");
  descriptionInput.setAttribute("required", "");

  dateLabel.textContent = "Date:";
  dateLabel.setAttribute("for", "date-input");
  dateInput.id = "date-input";
  dateInput.setAttribute("type", "date");
  dateInput.setAttribute("required", "");

  hpRadioLabel.textContent = "High";
  hpRadioLabel.setAttribute("for", "high-priority");
  hpRadioInput.id = "high-priority";
  hpRadioInput.setAttribute("name", "priority");
  hpRadioInput.setAttribute("type", "radio");
  hpRadioInput.setAttribute("checked", "");

  mpRadioLabel.textContent = "Medium";
  mpRadioLabel.setAttribute("for", "medium-priority");
  mpRadioInput.id = "medium-priority";
  mpRadioInput.setAttribute("name", "priority");
  mpRadioInput.setAttribute("type", "radio");

  lpRadioLabel.textContent = "Low";
  lpRadioLabel.setAttribute("for", "low-priority");
  lpRadioInput.id = "low-priority";
  lpRadioInput.setAttribute("name", "priority");
  lpRadioInput.setAttribute("type", "radio");

  confirmBtn.textContent = "CONFIRM";
  confirmBtn.id = "confirm-item";
  confirmBtn.setAttribute("type", "submit");

  return {
    form,
    h2,
    containingDiv,
    titleLabel,
    titleInput,
    descriptionLabel,
    descriptionInput,
    dateLabel,
    dateInput,
    hpRadioLabel,
    hpRadioInput,
    mpRadioLabel,
    mpRadioInput,
    lpRadioLabel,
    lpRadioInput,
    confirmBtn,
  };
}

//the abomination to end all abominations:
//a loop containing a switch statement which also contains another loop which also
//contains another switch statement.
//almost proud of it TBH.
function newTaskRenderLoops(list) {
  for (let i = 0; i < 6; i++) {
    const div = document.createElement("div");
    switch (i) {
      case 0:
        div.appendChild(list.titleLabel);
        div.appendChild(list.titleInput);
        break;
      case 1:
        div.appendChild(list.descriptionLabel);
        div.appendChild(list.descriptionInput);
        break;
      case 2:
        div.appendChild(list.dateLabel);
        div.appendChild(list.dateInput);
        break;
      case 4:
        const ul = document.createElement("ul");
        for (let j = 0; j < 3; j++) {
          const li = document.createElement("li");
          switch (j) {
            case 0:
              li.id = "high-prio-li";
              li.appendChild(list.hpRadioLabel);
              li.appendChild(list.hpRadioInput);
              ul.appendChild(li);
              break;
            case 1:
              li.id = "medium-prio-li";
              li.appendChild(list.mpRadioLabel);
              li.appendChild(list.mpRadioInput);
              ul.appendChild(li);
              break;
            case 2:
              li.id = "low-prio-li";
              li.appendChild(list.lpRadioLabel);
              li.appendChild(list.lpRadioInput);
              ul.appendChild(li);
              break;
          }
        }
        div.appendChild(ul);
        break;
      case 5:
        div.appendChild(list.confirmBtn);
        break;
    }
    list.form.appendChild(div);
  }
  return list.form;
}

export function projectModalCreateElement() {
  const form = document.createElement("form");
  form.id = "project-modal";
  //ain't doing the same crap twice
  form.innerHTML = `
    <label for="project-name">Project name:</label>
    <input type="text" id="project-name" maxlength="15" required />
    <button type="submit" id="confirm-project">CONFIRM</button>`;

  //center element without knowing its width(pos: absolute & left: 50%)
  form.style.marginLeft = `-${form.offsetWidth / 2}px`;

  return form;
}

export function newProjectModalRender() {
  const form = projectModalCreateElement();

  container.appendChild(form);

  removeIrrelevantEventListeners();

  form.addEventListener("submit", validateNewModal);
}

export function editProjectModalRender() {
  const form = projectModalCreateElement();
  const project = whichIsActive(currentProjectsList);

  container.appendChild(form);

  const title = document.getElementById("project-name");

  itemEdited.setTempId(project.id);
  title.value = project.title;

  removeIrrelevantEventListeners();

  form.addEventListener("submit", validateEditModal);
}
