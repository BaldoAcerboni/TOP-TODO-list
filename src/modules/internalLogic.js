/* 

  --METHODS--

*/

const addNewItem = function (item) {
  this.content.push(item);
};

const randomId = function (type) {
  const num = `${Math.floor(Math.random() * 10)}${Math.floor(
    Math.random() * 10
  )}${Math.floor(Math.random() * 10)}`;
  return `${type}${num}`;
};

const checkDuplicateItem = function (item) {
  let id = randomId(item.type);
  for (const project of this.content) {
    for (const el of project.content) {
      if (el.id !== "" && el.id === id) {
        this.checkDuplicateItem(item);
      }
    }
    item.assignId(id);
    return;
  }
};

const checkDuplicateProject = function (el) {
  let id = randomId(el.type);
  for (const project of this.content) {
    if (project.id === id && project.id) {
      this.checkDuplicateProject(el);
    }
  }
  el.assignId(id);
  return;
};

const assignId = function (id) {
  this.id = id;
};

const setActiveProject = function (item) {
  item.active = true;
};

const setInactiveProjects = function (item) {
  for (const el of this.content) {
    el.active = false;
  }
};

const checkActiveProject = function () {
  for (let i = 0; i < this.content.length; i++) {
    if (this.content[i].active === true) {
      const active = this.content[i];
      return active;
    }
  }
};

const editItem = function (title, description, date, priority) {
  if (description && date && priority) {
    this.description = description;
    this.date = date;
    this.priority = priority;
  }
  this.title = title;
};

const getItem = function (id) {
  const len = this.content.length;
  for (let i = 0; i < len; i++) {
    if (this.content[i].id === id) {
      return this.content[i];
    }
  }
};

const deleteListItem = function (item) {
  let pos;
  for (let i = 0; i < this.content.length; i++) {
    if (this.content[i] === item) {
      pos = i;
    }
  }
  if (pos !== undefined) {
    this.content.splice(pos, 1);
    item.delTemp();
  }
};

const delTemp = function () {
  for (const prop in this) {
    this[prop] = null;
  }
};

const setTempId = function (id) {
  this.id = id;
};

const setComplete = function () {
  this.complete = !this.complete;
};

const getProjectByItemId = function (id) {
  for (const project of this.content) {
    const ItemGotten = project.getItem(id);
    if (ItemGotten) {
      return project;
    }
  }
};

const getItemByPriority = function (priority) {
  const arr = [];
  for (const project of this.content) {
    for (const item of project.content) {
      if (item.priority === priority) {
        arr.push(item);
      }
    }
  }
  return arr;
};

const getItemByDueDate = function () {
  const arr = [];
  const today = new Date();
  for (const project of this.content) {
    for (const item of project.content) {
      const date = new Date(item.date);
      const daysRemaining = (date - today) / 86400000;
      if (daysRemaining > 0 && daysRemaining < 7) {
        arr.push(item);
      }
    }
  }
  return arr;
};
/* 

  --TASK CONSTRUCTOR--

*/

export function Task(title, description, date, priority) {
  this.title = title;
  this.description = description;
  this.date = date;
  this.priority = priority;
  this.type = "T";
  this.id = "";
  this.complete = false;
}

Task.prototype.editItem = editItem;
Task.prototype.delTemp = delTemp;
Task.prototype.setComplete = setComplete;
Task.prototype.assignId = assignId;

/* 

  --PROJECT CONSTRUCTOR--

*/

export function Project(title) {
  this.title = title;
  this.type = "P";
  this.active = false;
  this.content = [];
  this.id = "";
}

Project.prototype.addNewItem = addNewItem;
Project.prototype.randomId = randomId;
Project.prototype.assignId = assignId;
Project.prototype.editItem = editItem;
Project.prototype.getItem = getItem;
Project.prototype.deleteListItem = deleteListItem;

/* 

  --PROJECTS ARRAY CONSTRUCTOR--

*/

export function ProjectsArr() {
  this.content = [];
}
ProjectsArr.prototype.addNewItem = addNewItem;
ProjectsArr.prototype.checkDuplicateItem = checkDuplicateItem;
ProjectsArr.prototype.checkDuplicateProject = checkDuplicateProject;
ProjectsArr.prototype.checkActiveProject = checkActiveProject;
ProjectsArr.prototype.setActiveProject = setActiveProject;
ProjectsArr.prototype.setInactiveProjects = setInactiveProjects;
ProjectsArr.prototype.getItem = getItem;
ProjectsArr.prototype.getProjectByItemId = getProjectByItemId;
ProjectsArr.prototype.getItemByPriority = getItemByPriority;
ProjectsArr.prototype.getItemByDueDate = getItemByDueDate;

/* 

  --TEMPORARY OBJ TO STORE ID--

*/

export function TemporaryId(id) {
  this.id = id;
}
TemporaryId.prototype.delTemp = delTemp;
TemporaryId.prototype.setTempId = setTempId;

export const currentProjectsList = new ProjectsArr();

/* 

  --TESTS--

*/

const work = new Project("Work");
const misc = new Project("Miscellaneous");
const work1 = new Task(
  "titolo",
  "descrizione di sta cippa sta ceppa e sta ciappa",
  "2024-02-20",
  "h"
);
const work2 = new Task(
  "titolo2",
  "descrizione di sta cippa sta ceppa e sta chiappa",
  "2024-02-24",
  "m"
);

const misc1 = new Task("misc1", "desc1", "2024-03-02", "l");
const misc2 = new Task("misc2", "desc2", "2024-02-20", "h");
const misc3 = new Task("misc3", "desc3", "2024-02-12", "m");

currentProjectsList.addNewItem(work);
currentProjectsList.addNewItem(misc);

work.addNewItem(work1);
work.addNewItem(work2);

misc.addNewItem(misc1);
misc.addNewItem(misc2);
misc.addNewItem(misc3);
