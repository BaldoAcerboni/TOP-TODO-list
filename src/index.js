import * as items from "./modules/loadDOMcrap.js";

window.addEventListener("load", items.renderContainer());

const today = new Date();
const todayMs = today.getTime();
const date = new Date("2024-02-16");
const dateMs = date.getTime();
/* date.setFullYear("2024");
date.setMonth("01");
date.setDate("1");*/
console.log((date - today) / 86400000); //  / 86400000
/* console.log("dateMs", dateMs);
console.log("todayMs", todayMs); */
console.log((dateMs - todayMs) / 86400000);

console.log("date", date);
console.log("today", today);
