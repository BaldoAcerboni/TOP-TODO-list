/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("function ListItem(title, description, date, priority, type) {\n  this.title = title;\n  this.description = description;\n  this.date = date;\n  this.priority = priority;\n  this.type = type;\n}\n\nconst item1 = new ListItem(\"bubi\", \"the bubi\", \"2024-02-01\", 1, \"work\");\nconsole.log(item1);\n\nconst item2 = new ListItem(\n  \"bobo\",\n  \"the bobo\",\n  \"2024-03-03\",\n  3,\n  \"miscellaneous\"\n);\nconsole.log(item2);\n\n\n//# sourceURL=webpack://top-todo-list/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;