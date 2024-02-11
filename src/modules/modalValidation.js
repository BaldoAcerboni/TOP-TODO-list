import { reinstateEventListeners } from "./eventListenersManager";
import {
  confirmNewTask,
  confirmEditTask,
  confirmNewProject,
  confirmEditProject,
} from "./modalApplication";

export function validateNewModal(e) {
  e.preventDefault();
  if (e.target.checkValidity()) {
    if (e.target.id === "item-modal") {
      confirmNewTask();
    } else if (e.target.id === "project-modal") {
      confirmNewProject();
    }
    reinstateEventListeners();
  }
}
export function validateEditModal(e) {
  e.preventDefault();
  if (e.target.checkValidity()) {
    if (e.target.id === "item-modal") {
      confirmEditTask();
    } else if (e.target.id === "project-modal") {
      confirmEditProject();
    }
    reinstateEventListeners();
  }
}

export function cancelNewForm(e) {
  const form = e.target.parentNode.parentNode;
  form.removeEventListener("submit", validateNewModal);

  reinstateEventListeners();

  e.target.parentNode.parentNode.remove();
}

export function cancelEditForm(e) {
  const form = e.target.parentNode.parentNode;
  form.removeEventListener("submit", validateEditModal);

  reinstateEventListeners();

  form.remove();
}
