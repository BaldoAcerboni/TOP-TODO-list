/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
  margin: 0;
  box-sizing: border-box;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  text-align: center;
}

#container {
  display: flex;
  align-items: stretch;
  width: 100%;
  height: 100vh;
  position: relative;
  background: #5e5e5e;
}

/* 

  PROJECTS SIDEBAR

*/

#projects {
  background: #979797;
  padding: 1rem;
  font-size: 1.2rem;
  border-right: 2px solid #00078d;
  padding: 1rem;
  z-index: 2;
  position: relative;
  width: 300px;
  overflow-x: hidden;
}

#projects.visible {
  animation: show 0.5s;
  width: 300px;
  position: relative;
}

#projects.hidden {
  position: absolute;
  left: -300px;
  height: 100vh;
  animation: hide 0.5s;
}

#hide-icon {
  cursor: pointer;
}

#new-project-btn {
  width: 100%;
  padding: 0.5rem 0;
  background: radial-gradient(#506965, #005b9c);
  color: #fff;
  border: 3px solid #007d0c;
  border-radius: 0.2rem;
  margin: 1rem 0 0 0;
  cursor: pointer;
}

#icons {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  height: 100px;
}

#projects h2 {
  font-size: 1.3rem;
  margin: 1rem 0;
}

#projects li:hover {
  background: #626262;
  color: #fff;
}

#projects-ul,
#dynamic-ul {
  padding-left: 0;
}

#projects-ul > li,
#dynamic-ul > li {
  cursor: pointer;
  position: relative;
}

#projects-ul > li::marker {
  content: "#";
  color: #000ac4;
}

#dynamic-ul > li::marker {
  color: #000ac4;
  content: "o";
}

#projects-ul > li.active,
#dynamic-ul > li.active {
  border: 3px double #75ff4b;
}

#projects-ul > li.active::marker,
#dynamic-ul > li.active::marker {
  color: #75ff4b;
}

.delete-project {
  position: absolute;
  right: 2.4px;
  background: #ff2020;
  height: 100%;
}
#projects-ul > li.active > .delete-project {
  right: 0;
}

@keyframes show {
  0% {
    left: -300px;
  }
  100% {
    left: 0;
  }
}

@keyframes hide {
  0% {
    left: 0;
  }
  100% {
    left: -300px;
  }
}

/* 

MAIN SECTION

*/

#main {
  flex-grow: 1;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-content: safe center;
  gap: 1rem;
  position: relative;
  padding: 25px;
  overflow-y: auto;
  margin-top: 100px;
}

#add-item {
  position: fixed;
  bottom: 2rem;
  left: 50%;
  cursor: pointer;
  z-index: 1;
}

.item {
  border-radius: 0.5rem;
  width: 300px;
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: stretch;
  position: relative;
  box-shadow: 0 0 5px #000;
  background: radial-gradient(#3d3d3d, #506965);
  padding: 20px;
}

.item:hover {
  transform: scale(1.05, 1.05);
}

.item > div {
  background: radial-gradient(#e7e7e7, #bababa);
  padding: 0.3rem 1rem;
  box-shadow: 0 0 3px #000;
}

.item > div:nth-child(2) {
  text-align: center;
  overflow-y: auto;
}

.edit-item,
.delete-item {
  position: absolute;
  top: 0;
  cursor: pointer;
  border-radius: 0.5rem;
  box-shadow: 0 0 3px #000;
}

.edit-item {
  left: 0;
  background: #6081dc;
}

.edit-item:active,
.delete-item:active {
  box-shadow: inset 0 0 3px #000;
}

.delete-item {
  right: 0;
  background: #ff2020;
}

.complete {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.complete-btn {
  cursor: pointer;
  border-radius: 50%;
}

.complete-btn.fade-out {
  animation: fade-out 0.5s linear;
  opacity: 0;
}

@keyframes fade-out {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}

.complete-btn.fade-in {
  animation: fade-in 0.5s linear;
  opacity: 1;
}

@keyframes fade-in {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

#active-project {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: linear-gradient(#3d3d3d, #2a2f96);
  color: #fff;
  z-index: 1;
}

#menu-icon,
#edit-project {
  cursor: pointer;
  border-radius: 0.5rem;
  background: linear-gradient(#2a2f96, #3d3d3d);
}

#sheet-stack {
  cursor: pointer;
}

/* 

ITEM MODAL

*/

#item-modal {
  display: flex;
  position: absolute;
  width: 70%;
  min-height: 60%;
  top: 20%;
  left: 15%;
  border-radius: 2rem;
  padding: 1.5rem;
  text-align: center;
  flex-direction: column;
  justify-content: space-between;
  align-items: stretch;
  background: radial-gradient(#3d3d3d, #2a2f96);
  box-shadow: 0.5rem 0.5rem 1rem -0.5rem #000;
  z-index: 10;
}

#item-modal > div {
  margin-bottom: 0.8rem;
}

#item-modal ul {
  display: flex;
  gap: 0.5rem;
  justify-content: space-between;
}

label {
  font-size: 1.2rem;
}

div > label {
  display: block;
  margin-bottom: 0.5rem;
  color: #fff;
}

#item-modal li {
  list-style-type: none;
  display: flex;
  justify-content: space-between;
  border-radius: 0.5rem;
  margin: 0.4rem 0;
  padding: 0.5rem;
  width: 25%;
}

#high-prio-li {
  background-color: #ff3434;
}

#medium-prio-li {
  background-color: #ffe033;
}

#low-prio-li {
  background-color: #6aff2a;
}

#item-modal ul {
  padding: 0;
}

textarea {
  resize: none;
}

input[type="text"],
textarea {
  width: 80%;
}

input:not(input[type="radio"]),
textarea {
  font-size: 1rem;
  border-radius: 0.3rem;
  box-shadow: 0 0.3rem 1rem -0.3rem #4a4a4a;
  border: none;
}

#confirm-item,
#cancel-item {
  width: 40%;
  padding: 0.5rem;
  font-size: 1.2rem;
  background: linear-gradient(#b7b7b7, #fff);
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  margin: 0 1rem;
}

/* 

PROJECT MODAL

*/

#project-modal {
  position: absolute;
  top: 30%;
  left: 50%;
  background: radial-gradient(#3d3d3d, #2a2f96);
  box-shadow: 0.5rem 0.5rem 1rem -0.5rem #000;
  border-radius: 2rem;
  padding: 1rem;
}

#project-modal > * {
  margin: 1rem 0;
}

#project-modal > label {
  color: #fff;
}

#confirm-project,
#cancel-project {
  width: 40%;
  padding: 0.5rem 2rem;
  font-size: 1.2rem;
  background: linear-gradient(45deg, #b0b0b0, #e2e2e2);
  border: none;
  border-radius: 0.5rem;
  margin: 0 1rem;
  cursor: pointer;
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["* {\n  margin: 0;\n  box-sizing: border-box;\n  font-family: system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto,\n    Oxygen, Ubuntu, Cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif;\n  text-align: center;\n}\n\n#container {\n  display: flex;\n  align-items: stretch;\n  width: 100%;\n  height: 100vh;\n  position: relative;\n  background: #5e5e5e;\n}\n\n/* \n\n  PROJECTS SIDEBAR\n\n*/\n\n#projects {\n  background: #979797;\n  padding: 1rem;\n  font-size: 1.2rem;\n  border-right: 2px solid #00078d;\n  padding: 1rem;\n  z-index: 2;\n  position: relative;\n  width: 300px;\n  overflow-x: hidden;\n}\n\n#projects.visible {\n  animation: show 0.5s;\n  width: 300px;\n  position: relative;\n}\n\n#projects.hidden {\n  position: absolute;\n  left: -300px;\n  height: 100vh;\n  animation: hide 0.5s;\n}\n\n#hide-icon {\n  cursor: pointer;\n}\n\n#new-project-btn {\n  width: 100%;\n  padding: 0.5rem 0;\n  background: radial-gradient(#506965, #005b9c);\n  color: #fff;\n  border: 3px solid #007d0c;\n  border-radius: 0.2rem;\n  margin: 1rem 0 0 0;\n  cursor: pointer;\n}\n\n#icons {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  height: 100px;\n}\n\n#projects h2 {\n  font-size: 1.3rem;\n  margin: 1rem 0;\n}\n\n#projects li:hover {\n  background: #626262;\n  color: #fff;\n}\n\n#projects-ul,\n#dynamic-ul {\n  padding-left: 0;\n}\n\n#projects-ul > li,\n#dynamic-ul > li {\n  cursor: pointer;\n  position: relative;\n}\n\n#projects-ul > li::marker {\n  content: \"#\";\n  color: #000ac4;\n}\n\n#dynamic-ul > li::marker {\n  color: #000ac4;\n  content: \"o\";\n}\n\n#projects-ul > li.active,\n#dynamic-ul > li.active {\n  border: 3px double #75ff4b;\n}\n\n#projects-ul > li.active::marker,\n#dynamic-ul > li.active::marker {\n  color: #75ff4b;\n}\n\n.delete-project {\n  position: absolute;\n  right: 2.4px;\n  background: #ff2020;\n  height: 100%;\n}\n#projects-ul > li.active > .delete-project {\n  right: 0;\n}\n\n@keyframes show {\n  0% {\n    left: -300px;\n  }\n  100% {\n    left: 0;\n  }\n}\n\n@keyframes hide {\n  0% {\n    left: 0;\n  }\n  100% {\n    left: -300px;\n  }\n}\n\n/* \n\nMAIN SECTION\n\n*/\n\n#main {\n  flex-grow: 1;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-around;\n  align-content: safe center;\n  gap: 1rem;\n  position: relative;\n  padding: 25px;\n  overflow-y: auto;\n  margin-top: 100px;\n}\n\n#add-item {\n  position: fixed;\n  bottom: 2rem;\n  left: 50%;\n  cursor: pointer;\n  z-index: 1;\n}\n\n.item {\n  border-radius: 0.5rem;\n  width: 300px;\n  height: 300px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: stretch;\n  position: relative;\n  box-shadow: 0 0 5px #000;\n  background: radial-gradient(#3d3d3d, #506965);\n  padding: 20px;\n}\n\n.item:hover {\n  transform: scale(1.05, 1.05);\n}\n\n.item > div {\n  background: radial-gradient(#e7e7e7, #bababa);\n  padding: 0.3rem 1rem;\n  box-shadow: 0 0 3px #000;\n}\n\n.item > div:nth-child(2) {\n  text-align: center;\n  overflow-y: auto;\n}\n\n.edit-item,\n.delete-item {\n  position: absolute;\n  top: 0;\n  cursor: pointer;\n  border-radius: 0.5rem;\n  box-shadow: 0 0 3px #000;\n}\n\n.edit-item {\n  left: 0;\n  background: #6081dc;\n}\n\n.edit-item:active,\n.delete-item:active {\n  box-shadow: inset 0 0 3px #000;\n}\n\n.delete-item {\n  right: 0;\n  background: #ff2020;\n}\n\n.complete {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.complete-btn {\n  cursor: pointer;\n  border-radius: 50%;\n}\n\n.complete-btn.fade-out {\n  animation: fade-out 0.5s linear;\n  opacity: 0;\n}\n\n@keyframes fade-out {\n  0% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0;\n  }\n}\n\n.complete-btn.fade-in {\n  animation: fade-in 0.5s linear;\n  opacity: 1;\n}\n\n@keyframes fade-in {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n\n#active-project {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  background: linear-gradient(#3d3d3d, #2a2f96);\n  color: #fff;\n  z-index: 1;\n}\n\n#menu-icon,\n#edit-project {\n  cursor: pointer;\n  border-radius: 0.5rem;\n  background: linear-gradient(#2a2f96, #3d3d3d);\n}\n\n#sheet-stack {\n  cursor: pointer;\n}\n\n/* \n\nITEM MODAL\n\n*/\n\n#item-modal {\n  display: flex;\n  position: absolute;\n  width: 70%;\n  min-height: 60%;\n  top: 20%;\n  left: 15%;\n  border-radius: 2rem;\n  padding: 1.5rem;\n  text-align: center;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: stretch;\n  background: radial-gradient(#3d3d3d, #2a2f96);\n  box-shadow: 0.5rem 0.5rem 1rem -0.5rem #000;\n  z-index: 10;\n}\n\n#item-modal > div {\n  margin-bottom: 0.8rem;\n}\n\n#item-modal ul {\n  display: flex;\n  gap: 0.5rem;\n  justify-content: space-between;\n}\n\nlabel {\n  font-size: 1.2rem;\n}\n\ndiv > label {\n  display: block;\n  margin-bottom: 0.5rem;\n  color: #fff;\n}\n\n#item-modal li {\n  list-style-type: none;\n  display: flex;\n  justify-content: space-between;\n  border-radius: 0.5rem;\n  margin: 0.4rem 0;\n  padding: 0.5rem;\n  width: 25%;\n}\n\n#high-prio-li {\n  background-color: #ff3434;\n}\n\n#medium-prio-li {\n  background-color: #ffe033;\n}\n\n#low-prio-li {\n  background-color: #6aff2a;\n}\n\n#item-modal ul {\n  padding: 0;\n}\n\ntextarea {\n  resize: none;\n}\n\ninput[type=\"text\"],\ntextarea {\n  width: 80%;\n}\n\ninput:not(input[type=\"radio\"]),\ntextarea {\n  font-size: 1rem;\n  border-radius: 0.3rem;\n  box-shadow: 0 0.3rem 1rem -0.3rem #4a4a4a;\n  border: none;\n}\n\n#confirm-item,\n#cancel-item {\n  width: 40%;\n  padding: 0.5rem;\n  font-size: 1.2rem;\n  background: linear-gradient(#b7b7b7, #fff);\n  border: none;\n  border-radius: 0.5rem;\n  cursor: pointer;\n  margin: 0 1rem;\n}\n\n/* \n\nPROJECT MODAL\n\n*/\n\n#project-modal {\n  position: absolute;\n  top: 30%;\n  left: 50%;\n  background: radial-gradient(#3d3d3d, #2a2f96);\n  box-shadow: 0.5rem 0.5rem 1rem -0.5rem #000;\n  border-radius: 2rem;\n  padding: 1rem;\n}\n\n#project-modal > * {\n  margin: 1rem 0;\n}\n\n#project-modal > label {\n  color: #fff;\n}\n\n#confirm-project,\n#cancel-project {\n  width: 40%;\n  padding: 0.5rem 2rem;\n  font-size: 1.2rem;\n  background: linear-gradient(45deg, #b0b0b0, #e2e2e2);\n  border: none;\n  border-radius: 0.5rem;\n  margin: 0 1rem;\n  cursor: pointer;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/modules/constructors.js":
/*!*************************************!*\
  !*** ./src/modules/constructors.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Project: () => (/* binding */ Project),
/* harmony export */   ProjectsArr: () => (/* binding */ ProjectsArr),
/* harmony export */   Task: () => (/* binding */ Task),
/* harmony export */   TemporaryId: () => (/* binding */ TemporaryId)
/* harmony export */ });
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

const setInactiveProjects = function () {
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

const setFreshComplete = function (complete) {
  this.complete = complete;
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
      const offset = date.getTimezoneOffset() * 60000;
      const dateOff = Number(date) + offset;
      const daysRemaining = (dateOff - today) / 86400000;
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

function Task(title, description, date, priority) {
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
Task.prototype.setFreshComplete = setFreshComplete;

/* 

  --PROJECT CONSTRUCTOR--

*/

function Project(title) {
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
Project.prototype.delTemp = delTemp;

/* 

  --PROJECTS ARRAY CONSTRUCTOR--

*/

function ProjectsArr() {
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
ProjectsArr.prototype.deleteListItem = deleteListItem;

/* 

  --TEMPORARY OBJ TO STORE ID--

*/

function TemporaryId(id) {
  this.id = id;
}
TemporaryId.prototype.delTemp = delTemp;
TemporaryId.prototype.setTempId = setTempId;


/***/ }),

/***/ "./src/modules/eventListenersManager.js":
/*!**********************************************!*\
  !*** ./src/modules/eventListenersManager.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   reinstateEventListeners: () => (/* binding */ reinstateEventListeners),
/* harmony export */   removeIrrelevantEventListeners: () => (/* binding */ removeIrrelevantEventListeners)
/* harmony export */ });
/* harmony import */ var _localStorage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./localStorage */ "./src/modules/localStorage.js");
/* harmony import */ var _modalRender__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modalRender */ "./src/modules/modalRender.js");
/* harmony import */ var _loadDOMcrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./loadDOMcrap */ "./src/modules/loadDOMcrap.js");
/* harmony import */ var _renderSingleEl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./renderSingleEl */ "./src/modules/renderSingleEl.js");





function removeIrrelevantEventListeners() {
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

  newProjectBtn.removeEventListener("click", _modalRender__WEBPACK_IMPORTED_MODULE_1__.newProjectModalRender);
  hideSidebarBtn.removeEventListener("click", _loadDOMcrap__WEBPACK_IMPORTED_MODULE_2__.hideSidebar);
  showSidebarBtn.removeEventListener("click", _loadDOMcrap__WEBPACK_IMPORTED_MODULE_2__.showSidebar);

  if (newTaskBtn) {
    newTaskBtn.removeEventListener("click", _modalRender__WEBPACK_IMPORTED_MODULE_1__.newTaskModalRender);
  }

  if (_localStorage__WEBPACK_IMPORTED_MODULE_0__.currentProjectsList.content.length > 0) {
    //do not remember why the func call below is here, i do remember there was an
    //error at a certain point in time that got fixed by it, but i can not reproduce it
    //after app finalization so let me just leave it commented out because it
    //messes up the dynamically grouped elements
    //whichIsActive(currentProjectsList);
    if (Array.from(task).length > 0) {
      Array.from(editTaskBtn).forEach((e) => {
        e.removeEventListener("click", _modalRender__WEBPACK_IMPORTED_MODULE_1__.editTaskModalRender);
      });
      Array.from(deleteTaskBtn).forEach((e) => {
        e.removeEventListener("click", _loadDOMcrap__WEBPACK_IMPORTED_MODULE_2__.deleteItem);
      });
      Array.from(completeBtn).forEach((e) => {
        e.removeEventListener("click", _loadDOMcrap__WEBPACK_IMPORTED_MODULE_2__.changeCompleteOption);
      });
      Array.from(deleteProjectBtn).forEach((e) => {
        e.removeEventListener("click", _loadDOMcrap__WEBPACK_IMPORTED_MODULE_2__.deleteProject);
      });
    }

    editProjectBtn.removeEventListener("click", _modalRender__WEBPACK_IMPORTED_MODULE_1__.editProjectModalRender);
    Array.from(projectUL.childNodes).forEach((e) => {
      e.removeEventListener("click", _renderSingleEl__WEBPACK_IMPORTED_MODULE_3__.changeActiveProject);
    });
  }
}

function reinstateEventListeners() {
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

  newProjectBtn.addEventListener("click", _modalRender__WEBPACK_IMPORTED_MODULE_1__.newProjectModalRender);
  hideSidebarBtn.addEventListener("click", _loadDOMcrap__WEBPACK_IMPORTED_MODULE_2__.hideSidebar);
  showSidebarBtn.addEventListener("click", _loadDOMcrap__WEBPACK_IMPORTED_MODULE_2__.showSidebar);

  if (newTaskBtn) {
    newTaskBtn.addEventListener("click", _modalRender__WEBPACK_IMPORTED_MODULE_1__.newTaskModalRender);
  }

  if (_localStorage__WEBPACK_IMPORTED_MODULE_0__.currentProjectsList.content.length > 0) {
    (0,_loadDOMcrap__WEBPACK_IMPORTED_MODULE_2__.whichIsActive)(_localStorage__WEBPACK_IMPORTED_MODULE_0__.currentProjectsList);

    if (Array.from(task).length > 0) {
      Array.from(editTaskBtn).forEach((e) => {
        e.addEventListener("click", _modalRender__WEBPACK_IMPORTED_MODULE_1__.editTaskModalRender);
      });
      Array.from(deleteTaskBtn).forEach((e) => {
        e.addEventListener("click", _loadDOMcrap__WEBPACK_IMPORTED_MODULE_2__.deleteItem);
      });
      Array.from(completeBtn).forEach((e) => {
        e.addEventListener("click", _loadDOMcrap__WEBPACK_IMPORTED_MODULE_2__.changeCompleteOption);
      });
      Array.from(deleteProjectBtn).forEach((e) => {
        e.addEventListener("click", _loadDOMcrap__WEBPACK_IMPORTED_MODULE_2__.deleteProject);
      });
    }
    //new

    editProjectBtn.addEventListener("click", _modalRender__WEBPACK_IMPORTED_MODULE_1__.editProjectModalRender);
    Array.from(projectUL.childNodes).forEach((e) => {
      e.addEventListener("click", _renderSingleEl__WEBPACK_IMPORTED_MODULE_3__.changeActiveProject);
    });
  }
}


/***/ }),

/***/ "./src/modules/loadDOMcrap.js":
/*!************************************!*\
  !*** ./src/modules/loadDOMcrap.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   changeCompleteOption: () => (/* binding */ changeCompleteOption),
/* harmony export */   deactivateAllProjects: () => (/* binding */ deactivateAllProjects),
/* harmony export */   deleteItem: () => (/* binding */ deleteItem),
/* harmony export */   deleteProject: () => (/* binding */ deleteProject),
/* harmony export */   hideSidebar: () => (/* binding */ hideSidebar),
/* harmony export */   itemEdited: () => (/* binding */ itemEdited),
/* harmony export */   renderContainer: () => (/* binding */ renderContainer),
/* harmony export */   renderMain: () => (/* binding */ renderMain),
/* harmony export */   setCompleteOption: () => (/* binding */ setCompleteOption),
/* harmony export */   setPriority: () => (/* binding */ setPriority),
/* harmony export */   showGroup: () => (/* binding */ showGroup),
/* harmony export */   showSidebar: () => (/* binding */ showSidebar),
/* harmony export */   whichIsActive: () => (/* binding */ whichIsActive)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../style.css */ "./src/style.css");
/* harmony import */ var _images_add_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/add.svg */ "./src/images/add.svg");
/* harmony import */ var _images_complete_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/complete.svg */ "./src/images/complete.svg");
/* harmony import */ var _images_incomplete_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../images/incomplete.svg */ "./src/images/incomplete.svg");
/* harmony import */ var _images_stack_of_sheets_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../images/stack-of-sheets.svg */ "./src/images/stack-of-sheets.svg");
/* harmony import */ var _constructors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./constructors */ "./src/modules/constructors.js");
/* harmony import */ var _renderSingleEl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./renderSingleEl */ "./src/modules/renderSingleEl.js");
/* harmony import */ var _modalRender__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modalRender */ "./src/modules/modalRender.js");
/* harmony import */ var _localStorage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./localStorage */ "./src/modules/localStorage.js");












const container = document.getElementById("container");
const head = document.getElementsByTagName("head");
const faviconIcon = document.createElement("link");
const faviconMask = document.createElement("link");

faviconIcon.rel = "icon";
faviconIcon.href = _images_stack_of_sheets_svg__WEBPACK_IMPORTED_MODULE_4__;

faviconMask.rel = "mask-icon";
faviconMask.href = _images_stack_of_sheets_svg__WEBPACK_IMPORTED_MODULE_4__;
faviconMask.color = "#3443ae";

Array.from(head).forEach((e) => {
  e.appendChild(faviconIcon);
  e.appendChild(faviconMask);
});

const itemEdited = new _constructors__WEBPACK_IMPORTED_MODULE_5__.TemporaryId("");

function renderContainer() {
  const sidebarRendered = (0,_renderSingleEl__WEBPACK_IMPORTED_MODULE_6__.renderSidebar)();
  const activeProject = whichIsActive(_localStorage__WEBPACK_IMPORTED_MODULE_8__.currentProjectsList) || new _constructors__WEBPACK_IMPORTED_MODULE_5__.Project("");
  const main = renderMain(activeProject.content, activeProject.title);

  container.appendChild(sidebarRendered);
  container.appendChild(main);
}

function renderMain(group, title) {
  const newMain = document.createElement("div");
  const topContent = (0,_renderSingleEl__WEBPACK_IMPORTED_MODULE_6__.renderTopContent)(title);
  const addItemImg = new Image();

  newMain.id = "main";

  renderTasks(group, newMain);

  addItemImg.id = "add-item";
  addItemImg.src = _images_add_svg__WEBPACK_IMPORTED_MODULE_1__;
  addItemImg.style.marginLeft = `${-(addItemImg.offsetWidth / 2)}px`;

  if (_localStorage__WEBPACK_IMPORTED_MODULE_8__.currentProjectsList.content.length > 0) {
    newMain.appendChild(addItemImg);
  }

  newMain.appendChild(topContent);

  addItemImg.addEventListener("click", _modalRender__WEBPACK_IMPORTED_MODULE_7__.newTaskModalRender);

  return newMain;
}

function renderTasks(arr, DOMel) {
  if (arr.length > 0) {
    for (const task of arr) {
      DOMel.appendChild((0,_renderSingleEl__WEBPACK_IMPORTED_MODULE_6__.renderSingleTask)(task));
    }
  }
}

function whichIsActive(projects) {
  if (_localStorage__WEBPACK_IMPORTED_MODULE_8__.currentProjectsList.content.length > 0) {
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

function hideSidebar() {
  const sidebar = document.getElementById("projects");
  const main = document.getElementById("main");
  main.width = "100%";

  sidebar.classList.add("hidden");
}
function showSidebar() {
  const sidebar = document.getElementById("projects");

  sidebar.classList.add("visible");
  sidebar.classList.remove("hidden");
  setTimeout(() => {
    sidebar.classList.remove("visible");
  }, 500);
}

function setPriority(DOMel, item) {
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

function deleteItem(e) {
  const activeProject = _localStorage__WEBPACK_IMPORTED_MODULE_8__.currentProjectsList.getProjectByItemId(
    e.target.parentNode.id
  );
  const task = activeProject.getItem(e.target.parentNode.id);
  e.target.parentNode.remove();
  activeProject.deleteListItem(task);
  (0,_localStorage__WEBPACK_IMPORTED_MODULE_8__.updateLocalStorage)();
}

function deleteProject(e) {
  e.stopPropagation();
  const project = _localStorage__WEBPACK_IMPORTED_MODULE_8__.currentProjectsList.getItem(e.target.parentNode.id);

  _localStorage__WEBPACK_IMPORTED_MODULE_8__.currentProjectsList.deleteListItem(project);

  if (_localStorage__WEBPACK_IMPORTED_MODULE_8__.currentProjectsList.content.length === 0) {
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
  (0,_localStorage__WEBPACK_IMPORTED_MODULE_8__.updateLocalStorage)();
}

function setCompleteOption(task, DOMel) {
  if (task.complete) {
    DOMel.src = _images_complete_svg__WEBPACK_IMPORTED_MODULE_2__;
  } else {
    DOMel.src = _images_incomplete_svg__WEBPACK_IMPORTED_MODULE_3__;
  }
  (0,_localStorage__WEBPACK_IMPORTED_MODULE_8__.updateLocalStorage)();
}

function changeCompleteOption(e) {
  const id = e.target.parentNode.parentNode.id;
  const project = _localStorage__WEBPACK_IMPORTED_MODULE_8__.currentProjectsList.getProjectByItemId(id);
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

function deactivateAllProjects(e) {
  const projectUl = document.getElementById("projects-ul");
  _localStorage__WEBPACK_IMPORTED_MODULE_8__.currentProjectsList.setInactiveProjects();
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

function showGroup(e) {
  const lateMain = document.getElementById("main");
  let newMain;
  if (e.target) {
    if (e.target.classList.contains("priority-group")) {
      const p = e.target.id[1];
      newMain = renderMain(
        _localStorage__WEBPACK_IMPORTED_MODULE_8__.currentProjectsList.getItemByPriority(p),
        e.target.textContent
      );
    } else if (e.target.id === "next-week") {
      newMain = renderMain(
        _localStorage__WEBPACK_IMPORTED_MODULE_8__.currentProjectsList.getItemByDueDate(),
        e.target.textContent
      );
    }
  } else if (e.classList.contains("priority-group")) {
    const p = e.id[1];
    newMain = renderMain(
      _localStorage__WEBPACK_IMPORTED_MODULE_8__.currentProjectsList.getItemByPriority(p),
      e.textContent
    );
  } else if (e.id === "next-week") {
    newMain = renderMain(_localStorage__WEBPACK_IMPORTED_MODULE_8__.currentProjectsList.getItemByDueDate(), e.textContent);
  }

  lateMain.remove();
  container.appendChild(newMain);
  const edit = document.getElementById("edit-project");
  const addTask = document.getElementById("add-item");
  if (addTask) {
    addTask.remove();
  }
  _localStorage__WEBPACK_IMPORTED_MODULE_8__.currentProjectsList.setInactiveProjects();
  edit.removeEventListener("click", _modalRender__WEBPACK_IMPORTED_MODULE_7__.editProjectModalRender);
}


/***/ }),

/***/ "./src/modules/localStorage.js":
/*!*************************************!*\
  !*** ./src/modules/localStorage.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   currentProjectsList: () => (/* binding */ currentProjectsList),
/* harmony export */   updateLocalStorage: () => (/* binding */ updateLocalStorage)
/* harmony export */ });
/* harmony import */ var _constructors_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constructors.js */ "./src/modules/constructors.js");


function getListFromStorage() {
  let temp = JSON.parse(localStorage.getItem("currentProjectsList"));
  return setStoragePLAsInstanceOfClass(temp);
}

function setStoragePLAsInstanceOfClass(list) {
  const pList = new _constructors_js__WEBPACK_IMPORTED_MODULE_0__.ProjectsArr();
  for (const storageProject of list.content) {
    const project = setStorageProjectAsInstanceOfClass(storageProject);
    pList.addNewItem(project);
  }
  return pList;
}

function setStorageProjectAsInstanceOfClass(project) {
  const p = new _constructors_js__WEBPACK_IMPORTED_MODULE_0__.Project(project.title);
  p.assignId(project.id);
  for (const storageTask of project.content) {
    const task = setStorageTaskAsInstanceOfClass(storageTask);
    p.addNewItem(task);
  }
  return p;
}

function setStorageTaskAsInstanceOfClass(task) {
  const t = new _constructors_js__WEBPACK_IMPORTED_MODULE_0__.Task(task.title, task.description, task.date, task.priority);
  t.assignId(task.id);
  t.setFreshComplete(task.complete);
  return t;
}

function initializeStorage() {
  const obj = new _constructors_js__WEBPACK_IMPORTED_MODULE_0__.ProjectsArr();
  localStorage.setItem("currentProjectsList", JSON.stringify(obj));
  return obj;
}

function checkLocalStorage() {
  if (localStorage.getItem("currentProjectsList")) {
    const tempList = getListFromStorage();
    return tempList;
  } else {
    const tempList = initializeStorage();
    return tempList;
  }
}

function updateLocalStorage() {
  localStorage.setItem(
    "currentProjectsList",
    JSON.stringify(currentProjectsList)
  );
}

const currentProjectsList = checkLocalStorage();


/***/ }),

/***/ "./src/modules/modalApplication.js":
/*!*****************************************!*\
  !*** ./src/modules/modalApplication.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   confirmEditProject: () => (/* binding */ confirmEditProject),
/* harmony export */   confirmEditTask: () => (/* binding */ confirmEditTask),
/* harmony export */   confirmNewProject: () => (/* binding */ confirmNewProject),
/* harmony export */   confirmNewTask: () => (/* binding */ confirmNewTask)
/* harmony export */ });
/* harmony import */ var _loadDOMcrap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loadDOMcrap */ "./src/modules/loadDOMcrap.js");
/* harmony import */ var _renderSingleEl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderSingleEl */ "./src/modules/renderSingleEl.js");
/* harmony import */ var _constructors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constructors */ "./src/modules/constructors.js");
/* harmony import */ var _localStorage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./localStorage */ "./src/modules/localStorage.js");






function confirmNewTask() {
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

  const activeProject = (0,_loadDOMcrap__WEBPACK_IMPORTED_MODULE_0__.whichIsActive)(_localStorage__WEBPACK_IMPORTED_MODULE_3__.currentProjectsList);
  const newTask = new _constructors__WEBPACK_IMPORTED_MODULE_2__.Task(title, description, date, priority);

  activeProject.addNewItem(newTask);
  const taskDOM = (0,_renderSingleEl__WEBPACK_IMPORTED_MODULE_1__.renderSingleTask)(newTask);
  main.appendChild(taskDOM);
  form.remove();
  (0,_localStorage__WEBPACK_IMPORTED_MODULE_3__.updateLocalStorage)();
}

function confirmEditTask() {
  const main = document.getElementById("main");
  const form = document.getElementById("item-modal");
  const title = document.getElementById("title-input").value;
  const description = document.getElementById("description-input").value;
  const date = document.getElementById("date-input").value;
  const priorities = document.getElementsByName("priority");
  const activeProject = _localStorage__WEBPACK_IMPORTED_MODULE_3__.currentProjectsList.getProjectByItemId(_loadDOMcrap__WEBPACK_IMPORTED_MODULE_0__.itemEdited.id);
  const dynamicGroupUl = document.getElementById("dynamic-ul");
  const task = activeProject.getItem(_loadDOMcrap__WEBPACK_IMPORTED_MODULE_0__.itemEdited.id);
  const DOMItem = document.getElementById(_loadDOMcrap__WEBPACK_IMPORTED_MODULE_0__.itemEdited.id);
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

  if (_localStorage__WEBPACK_IMPORTED_MODULE_3__.currentProjectsList.checkActiveProject()) {
    DOMItem.remove();
    main.insertBefore((0,_renderSingleEl__WEBPACK_IMPORTED_MODULE_1__.renderSingleTask)(task), main.children[pos]);
  } else {
    Array.from(dynamicGroupUl.children).forEach((e) => {
      if (e.classList.contains("active")) {
        (0,_loadDOMcrap__WEBPACK_IMPORTED_MODULE_0__.showGroup)(e);
      }
    });
  }

  form.remove();
  (0,_localStorage__WEBPACK_IMPORTED_MODULE_3__.updateLocalStorage)();
  _loadDOMcrap__WEBPACK_IMPORTED_MODULE_0__.itemEdited.setTempId("");
}

function confirmNewProject() {
  const projectUL = document.getElementById("projects-ul");
  const form = document.getElementById("project-modal");
  const title = document.getElementById("project-name").value;
  const newProject = new _constructors__WEBPACK_IMPORTED_MODULE_2__.Project(title);

  _localStorage__WEBPACK_IMPORTED_MODULE_3__.currentProjectsList.addNewItem(newProject);

  const li = (0,_renderSingleEl__WEBPACK_IMPORTED_MODULE_1__.renderSingleProject)(newProject);
  projectUL.appendChild(li);

  form.remove();
  (0,_localStorage__WEBPACK_IMPORTED_MODULE_3__.updateLocalStorage)();
}

function confirmEditProject() {
  const lateTopContent = document.getElementById("active-project");
  const main = document.getElementById("main");
  const projectUL = document.getElementById("projects-ul");
  const form = document.getElementById("project-modal");
  const title = document.getElementById("project-name").value;
  const project = _localStorage__WEBPACK_IMPORTED_MODULE_3__.currentProjectsList.getItem(_loadDOMcrap__WEBPACK_IMPORTED_MODULE_0__.itemEdited.id);
  const DOMItem = document.getElementById(_loadDOMcrap__WEBPACK_IMPORTED_MODULE_0__.itemEdited.id);

  project.editItem(title);
  let pos;
  Array.from(projectUL.childNodes).forEach((e) => {
    if (e.id === DOMItem.id) {
      pos = Array.from(projectUL.childNodes).indexOf(DOMItem);
    }
  });
  DOMItem.remove();

  projectUL.insertBefore((0,_renderSingleEl__WEBPACK_IMPORTED_MODULE_1__.renderSingleProject)(project), projectUL.children[pos]);

  form.remove();
  lateTopContent.remove();
  (0,_localStorage__WEBPACK_IMPORTED_MODULE_3__.updateLocalStorage)();
  main.appendChild((0,_renderSingleEl__WEBPACK_IMPORTED_MODULE_1__.renderTopContent)((0,_loadDOMcrap__WEBPACK_IMPORTED_MODULE_0__.whichIsActive)(_localStorage__WEBPACK_IMPORTED_MODULE_3__.currentProjectsList).title));
}


/***/ }),

/***/ "./src/modules/modalRender.js":
/*!************************************!*\
  !*** ./src/modules/modalRender.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   editProjectModalRender: () => (/* binding */ editProjectModalRender),
/* harmony export */   editTaskModalRender: () => (/* binding */ editTaskModalRender),
/* harmony export */   newProjectModalRender: () => (/* binding */ newProjectModalRender),
/* harmony export */   newTaskModalRender: () => (/* binding */ newTaskModalRender),
/* harmony export */   projectModalCreateElement: () => (/* binding */ projectModalCreateElement)
/* harmony export */ });
/* harmony import */ var _loadDOMcrap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loadDOMcrap */ "./src/modules/loadDOMcrap.js");
/* harmony import */ var _eventListenersManager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./eventListenersManager */ "./src/modules/eventListenersManager.js");
/* harmony import */ var _modalValidation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modalValidation */ "./src/modules/modalValidation.js");
/* harmony import */ var _localStorage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./localStorage */ "./src/modules/localStorage.js");





function newTaskModalRender() {
  const elList = newTaskModalCreateElements();
  const formToRender = newTaskRenderLoops(elList);

  container.appendChild(formToRender);

  const cancelBtn = document.getElementById("cancel-item");

  (0,_eventListenersManager__WEBPACK_IMPORTED_MODULE_1__.removeIrrelevantEventListeners)();
  cancelBtn.addEventListener("click", _modalValidation__WEBPACK_IMPORTED_MODULE_2__.cancelNewForm);
  formToRender.addEventListener("submit", _modalValidation__WEBPACK_IMPORTED_MODULE_2__.validateNewModal);
}

function editTaskModalRender(e) {
  const id = e.target.parentNode.id;

  const activeProject = _localStorage__WEBPACK_IMPORTED_MODULE_3__.currentProjectsList.getProjectByItemId(
    e.target.parentNode.id
  );

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
  const cancelBtn = document.getElementById("cancel-item");

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

  (0,_eventListenersManager__WEBPACK_IMPORTED_MODULE_1__.removeIrrelevantEventListeners)();
  _loadDOMcrap__WEBPACK_IMPORTED_MODULE_0__.itemEdited.setTempId(id);
  cancelBtn.addEventListener("click", _modalValidation__WEBPACK_IMPORTED_MODULE_2__.cancelEditForm);
  formToRender.addEventListener("submit", _modalValidation__WEBPACK_IMPORTED_MODULE_2__.validateEditModal);
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
  const cancelBtn = document.createElement("button");

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

  cancelBtn.textContent = "CANCEL";
  cancelBtn.id = "cancel-item";
  cancelBtn.setAttribute("type", "button");

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
    cancelBtn,
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
        div.appendChild(list.cancelBtn);
        break;
    }
    list.form.appendChild(div);
  }
  return list.form;
}

function projectModalCreateElement() {
  const form = document.createElement("form");
  form.id = "project-modal";
  //ain't doing the same crap twice
  form.innerHTML = `
    <label for="project-name">Project name:</label>
    <input type="text" id="project-name" maxlength="15" required />
    <div>
      <button type="submit" id="confirm-project">CONFIRM</button>
      <button type="button" id="cancel-project">CANCEL</button>
    </div>`;

  //center element without knowing its width(pos: absolute & left: 50%)
  form.style.marginLeft = `-${form.offsetWidth / 2}px`;

  return form;
}

function newProjectModalRender() {
  const form = projectModalCreateElement();

  container.appendChild(form);

  const cancelBtn = document.getElementById("cancel-project");

  (0,_eventListenersManager__WEBPACK_IMPORTED_MODULE_1__.removeIrrelevantEventListeners)();
  cancelBtn.addEventListener("click", _modalValidation__WEBPACK_IMPORTED_MODULE_2__.cancelNewForm);
  form.addEventListener("submit", _modalValidation__WEBPACK_IMPORTED_MODULE_2__.validateNewModal);
}

function editProjectModalRender() {
  const form = projectModalCreateElement();
  const project = (0,_loadDOMcrap__WEBPACK_IMPORTED_MODULE_0__.whichIsActive)(_localStorage__WEBPACK_IMPORTED_MODULE_3__.currentProjectsList);

  container.appendChild(form);

  const title = document.getElementById("project-name");
  const cancelBtn = document.getElementById("cancel-project");

  _loadDOMcrap__WEBPACK_IMPORTED_MODULE_0__.itemEdited.setTempId(project.id);
  title.value = project.title;

  (0,_eventListenersManager__WEBPACK_IMPORTED_MODULE_1__.removeIrrelevantEventListeners)();
  cancelBtn.addEventListener("click", _modalValidation__WEBPACK_IMPORTED_MODULE_2__.cancelEditForm);
  form.addEventListener("submit", _modalValidation__WEBPACK_IMPORTED_MODULE_2__.validateEditModal);
}


/***/ }),

/***/ "./src/modules/modalValidation.js":
/*!****************************************!*\
  !*** ./src/modules/modalValidation.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   cancelEditForm: () => (/* binding */ cancelEditForm),
/* harmony export */   cancelNewForm: () => (/* binding */ cancelNewForm),
/* harmony export */   validateEditModal: () => (/* binding */ validateEditModal),
/* harmony export */   validateNewModal: () => (/* binding */ validateNewModal)
/* harmony export */ });
/* harmony import */ var _eventListenersManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./eventListenersManager */ "./src/modules/eventListenersManager.js");
/* harmony import */ var _modalApplication__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modalApplication */ "./src/modules/modalApplication.js");



function validateNewModal(e) {
  e.preventDefault();
  if (e.target.checkValidity()) {
    if (e.target.id === "item-modal") {
      (0,_modalApplication__WEBPACK_IMPORTED_MODULE_1__.confirmNewTask)();
    } else if (e.target.id === "project-modal") {
      (0,_modalApplication__WEBPACK_IMPORTED_MODULE_1__.confirmNewProject)();
    }
    (0,_eventListenersManager__WEBPACK_IMPORTED_MODULE_0__.reinstateEventListeners)();
  }
}
function validateEditModal(e) {
  e.preventDefault();
  if (e.target.checkValidity()) {
    if (e.target.id === "item-modal") {
      (0,_modalApplication__WEBPACK_IMPORTED_MODULE_1__.confirmEditTask)();
    } else if (e.target.id === "project-modal") {
      (0,_modalApplication__WEBPACK_IMPORTED_MODULE_1__.confirmEditProject)();
    }
    (0,_eventListenersManager__WEBPACK_IMPORTED_MODULE_0__.reinstateEventListeners)();
  }
}

function cancelNewForm(e) {
  const form = e.target.parentNode.parentNode;
  form.removeEventListener("submit", validateNewModal);

  (0,_eventListenersManager__WEBPACK_IMPORTED_MODULE_0__.reinstateEventListeners)();

  e.target.parentNode.parentNode.remove();
}

function cancelEditForm(e) {
  const form = e.target.parentNode.parentNode;
  form.removeEventListener("submit", validateEditModal);

  (0,_eventListenersManager__WEBPACK_IMPORTED_MODULE_0__.reinstateEventListeners)();

  form.remove();
}


/***/ }),

/***/ "./src/modules/renderSingleEl.js":
/*!***************************************!*\
  !*** ./src/modules/renderSingleEl.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   changeActiveProject: () => (/* binding */ changeActiveProject),
/* harmony export */   renderSidebar: () => (/* binding */ renderSidebar),
/* harmony export */   renderSingleProject: () => (/* binding */ renderSingleProject),
/* harmony export */   renderSingleTask: () => (/* binding */ renderSingleTask),
/* harmony export */   renderTopContent: () => (/* binding */ renderTopContent)
/* harmony export */ });
/* harmony import */ var _images_edit_small_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../images/edit-small.svg */ "./src/images/edit-small.svg");
/* harmony import */ var _images_hide_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/hide.svg */ "./src/images/hide.svg");
/* harmony import */ var _images_stack_of_sheets_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/stack-of-sheets.svg */ "./src/images/stack-of-sheets.svg");
/* harmony import */ var _images_delete_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../images/delete.svg */ "./src/images/delete.svg");
/* harmony import */ var _images_edit_big_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../images/edit-big.svg */ "./src/images/edit-big.svg");
/* harmony import */ var _images_menu_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../images/menu.svg */ "./src/images/menu.svg");
/* harmony import */ var _modalRender__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modalRender */ "./src/modules/modalRender.js");
/* harmony import */ var _loadDOMcrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./loadDOMcrap */ "./src/modules/loadDOMcrap.js");
/* harmony import */ var _localStorage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./localStorage */ "./src/modules/localStorage.js");











function renderSidebar() {
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
  hideImg.src = _images_hide_svg__WEBPACK_IMPORTED_MODULE_1__;
  sheetStackImg.src = _images_stack_of_sheets_svg__WEBPACK_IMPORTED_MODULE_2__;

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

  newProjectBtnRender.addEventListener("click", _modalRender__WEBPACK_IMPORTED_MODULE_6__.newProjectModalRender);
  hideImg.addEventListener("click", _loadDOMcrap__WEBPACK_IMPORTED_MODULE_7__.hideSidebar);

  return sidebarRender;
}

function renderProjectUl(list) {
  if (_localStorage__WEBPACK_IMPORTED_MODULE_8__.currentProjectsList.content.length > 0) {
    (0,_loadDOMcrap__WEBPACK_IMPORTED_MODULE_7__.whichIsActive)(_localStorage__WEBPACK_IMPORTED_MODULE_8__.currentProjectsList);
    for (const project of _localStorage__WEBPACK_IMPORTED_MODULE_8__.currentProjectsList.content) {
      const li = renderSingleProject(project);
      list.appendChild(li);
    }
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
    e.addEventListener("click", _loadDOMcrap__WEBPACK_IMPORTED_MODULE_7__.deactivateAllProjects);
    e.addEventListener("click", _loadDOMcrap__WEBPACK_IMPORTED_MODULE_7__.showGroup);
  });
}

function renderSingleProject(project) {
  const li = document.createElement("li");
  const deleteBtn = new Image();

  li.textContent = `${project.title}`;
  deleteBtn.src = _images_delete_svg__WEBPACK_IMPORTED_MODULE_3__;
  deleteBtn.className = "delete-project";

  if (!project.id) {
    _localStorage__WEBPACK_IMPORTED_MODULE_8__.currentProjectsList.checkDuplicateProject(project);
  }
  li.id = project.id;
  li.appendChild(deleteBtn);

  deleteBtn.addEventListener("click", _loadDOMcrap__WEBPACK_IMPORTED_MODULE_7__.deleteProject);
  li.addEventListener("click", changeActiveProject);

  if (project.active) {
    li.className = "active";
  } else {
    li.className = "";
  }
  return li;
}

function changeActiveProject(e) {
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

  for (const proj of _localStorage__WEBPACK_IMPORTED_MODULE_8__.currentProjectsList.content) {
    if (proj.id === e.target.id && !proj.active) {
      _localStorage__WEBPACK_IMPORTED_MODULE_8__.currentProjectsList.setInactiveProjects();
      _localStorage__WEBPACK_IMPORTED_MODULE_8__.currentProjectsList.setActiveProject(proj);
    }
  }

  const activeProject = (0,_loadDOMcrap__WEBPACK_IMPORTED_MODULE_7__.whichIsActive)(_localStorage__WEBPACK_IMPORTED_MODULE_8__.currentProjectsList);

  lateMain.remove();
  container.appendChild((0,_loadDOMcrap__WEBPACK_IMPORTED_MODULE_7__.renderMain)(activeProject.content, activeProject.title));
}

function renderTopContent(projectTitle) {
  const newTopSection = document.createElement("div");
  const title = document.createElement("h1");

  const editProjectImg = new Image();
  const showImg = new Image();

  newTopSection.id = "active-project";
  editProjectImg.id = "edit-project";
  showImg.id = "menu-icon";

  title.textContent = projectTitle;
  editProjectImg.src = _images_edit_big_svg__WEBPACK_IMPORTED_MODULE_4__;
  showImg.src = _images_menu_svg__WEBPACK_IMPORTED_MODULE_5__;

  newTopSection.appendChild(showImg);
  newTopSection.appendChild(title);
  newTopSection.appendChild(editProjectImg);

  showImg.addEventListener("click", _loadDOMcrap__WEBPACK_IMPORTED_MODULE_7__.showSidebar);
  if (_localStorage__WEBPACK_IMPORTED_MODULE_8__.currentProjectsList.content.length > 0) {
    editProjectImg.addEventListener("click", _modalRender__WEBPACK_IMPORTED_MODULE_6__.editProjectModalRender);
  }

  return newTopSection;
}

function renderSingleTask(task) {
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

  editBtn.src = _images_edit_small_svg__WEBPACK_IMPORTED_MODULE_0__;
  deleteBtn.src = _images_delete_svg__WEBPACK_IMPORTED_MODULE_3__;
  if (!task.id) {
    _localStorage__WEBPACK_IMPORTED_MODULE_8__.currentProjectsList.checkDuplicateItem(task);
  }
  item.id = task.id;

  title.textContent = task.title;
  description.textContent = task.description;
  date.textContent = task.date;
  complete.textContent = "Complete:";

  (0,_loadDOMcrap__WEBPACK_IMPORTED_MODULE_7__.setPriority)(priority, task);
  (0,_loadDOMcrap__WEBPACK_IMPORTED_MODULE_7__.setCompleteOption)(task, completeBtn);
  complete.appendChild(completeBtn);

  item.appendChild(title);
  item.appendChild(description);
  item.appendChild(date);
  item.appendChild(priority);
  item.appendChild(complete);

  item.appendChild(editBtn);
  item.appendChild(deleteBtn);

  editBtn.addEventListener("click", _modalRender__WEBPACK_IMPORTED_MODULE_6__.editTaskModalRender);
  deleteBtn.addEventListener("click", _loadDOMcrap__WEBPACK_IMPORTED_MODULE_7__.deleteItem);
  completeBtn.addEventListener("click", _loadDOMcrap__WEBPACK_IMPORTED_MODULE_7__.changeCompleteOption);

  return item;
}


/***/ }),

/***/ "./src/images/add.svg":
/*!****************************!*\
  !*** ./src/images/add.svg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "aa58593d1bf7fd7679e1.svg";

/***/ }),

/***/ "./src/images/complete.svg":
/*!*********************************!*\
  !*** ./src/images/complete.svg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5f057b0686ebc93a9d89.svg";

/***/ }),

/***/ "./src/images/delete.svg":
/*!*******************************!*\
  !*** ./src/images/delete.svg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "988c7c1a53ef1ec8a687.svg";

/***/ }),

/***/ "./src/images/edit-big.svg":
/*!*********************************!*\
  !*** ./src/images/edit-big.svg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "37ba9d097e324a26b8c6.svg";

/***/ }),

/***/ "./src/images/edit-small.svg":
/*!***********************************!*\
  !*** ./src/images/edit-small.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "72a7dd20505bfa8e6918.svg";

/***/ }),

/***/ "./src/images/hide.svg":
/*!*****************************!*\
  !*** ./src/images/hide.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "837b8669e2eadd0a2efa.svg";

/***/ }),

/***/ "./src/images/incomplete.svg":
/*!***********************************!*\
  !*** ./src/images/incomplete.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f95dd44bc5d0c75aaf44.svg";

/***/ }),

/***/ "./src/images/menu.svg":
/*!*****************************!*\
  !*** ./src/images/menu.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "51a5e14b116c65517743.svg";

/***/ }),

/***/ "./src/images/stack-of-sheets.svg":
/*!****************************************!*\
  !*** ./src/images/stack-of-sheets.svg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "12709afc43ce44459493.svg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_loadDOMcrap_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/loadDOMcrap.js */ "./src/modules/loadDOMcrap.js");


window.addEventListener("load", (0,_modules_loadDOMcrap_js__WEBPACK_IMPORTED_MODULE_0__.renderContainer)());
/* 
TO DO:
-local storage;
*/

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLGdGQUFnRixVQUFVLFlBQVksTUFBTSxPQUFPLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLE9BQU8sUUFBUSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxXQUFXLE1BQU0sTUFBTSxVQUFVLE9BQU8sTUFBTSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sTUFBTSxZQUFZLE9BQU8sTUFBTSxVQUFVLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLEtBQUssS0FBSyxVQUFVLE1BQU0sS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFLLFVBQVUsS0FBSyxNQUFNLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLEtBQUssTUFBTSxRQUFRLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLE1BQU0sWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFLLFVBQVUsS0FBSyxNQUFNLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFLLFVBQVUsS0FBSyxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLE1BQU0sTUFBTSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxPQUFPLFFBQVEsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxNQUFNLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsVUFBVSxPQUFPLFFBQVEsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsTUFBTSxNQUFNLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZ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QUUsSUFBSTtBQUN2Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esa0JBQWtCLHlCQUF5QjtBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esa0JBQWtCLFNBQVM7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esa0JBQWtCLHlCQUF5QjtBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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Q0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2xCQTs7Ozs7Ozs7Ozs7O0FDQTJEOztBQUUzRCxnQ0FBZ0Msd0VBQWU7QUFDL0M7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b3AtdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90b3AtdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b3AtdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9wLXRvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90b3AtdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvcC10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvcC10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9wLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b3AtdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9wLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvcC10b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy9jb25zdHJ1Y3RvcnMuanMiLCJ3ZWJwYWNrOi8vdG9wLXRvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL2V2ZW50TGlzdGVuZXJzTWFuYWdlci5qcyIsIndlYnBhY2s6Ly90b3AtdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvbG9hZERPTWNyYXAuanMiLCJ3ZWJwYWNrOi8vdG9wLXRvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL2xvY2FsU3RvcmFnZS5qcyIsIndlYnBhY2s6Ly90b3AtdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvbW9kYWxBcHBsaWNhdGlvbi5qcyIsIndlYnBhY2s6Ly90b3AtdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvbW9kYWxSZW5kZXIuanMiLCJ3ZWJwYWNrOi8vdG9wLXRvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL21vZGFsVmFsaWRhdGlvbi5qcyIsIndlYnBhY2s6Ly90b3AtdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvcmVuZGVyU2luZ2xlRWwuanMiLCJ3ZWJwYWNrOi8vdG9wLXRvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b3AtdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvcC10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvcC10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly90b3AtdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9wLXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvcC10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdG9wLXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG9wLXRvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgKiB7XG4gIG1hcmdpbjogMDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgZm9udC1mYW1pbHk6IHN5c3RlbS11aSwgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBcIlNlZ29lIFVJXCIsIFJvYm90byxcbiAgICBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCBcIk9wZW4gU2Fuc1wiLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuI2NvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBiYWNrZ3JvdW5kOiAjNWU1ZTVlO1xufVxuXG4vKiBcblxuICBQUk9KRUNUUyBTSURFQkFSXG5cbiovXG5cbiNwcm9qZWN0cyB7XG4gIGJhY2tncm91bmQ6ICM5Nzk3OTc7XG4gIHBhZGRpbmc6IDFyZW07XG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xuICBib3JkZXItcmlnaHQ6IDJweCBzb2xpZCAjMDAwNzhkO1xuICBwYWRkaW5nOiAxcmVtO1xuICB6LWluZGV4OiAyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAzMDBweDtcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xufVxuXG4jcHJvamVjdHMudmlzaWJsZSB7XG4gIGFuaW1hdGlvbjogc2hvdyAwLjVzO1xuICB3aWR0aDogMzAwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuI3Byb2plY3RzLmhpZGRlbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogLTMwMHB4O1xuICBoZWlnaHQ6IDEwMHZoO1xuICBhbmltYXRpb246IGhpZGUgMC41cztcbn1cblxuI2hpZGUtaWNvbiB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuI25ldy1wcm9qZWN0LWJ0biB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAwLjVyZW0gMDtcbiAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KCM1MDY5NjUsICMwMDViOWMpO1xuICBjb2xvcjogI2ZmZjtcbiAgYm9yZGVyOiAzcHggc29saWQgIzAwN2QwYztcbiAgYm9yZGVyLXJhZGl1czogMC4ycmVtO1xuICBtYXJnaW46IDFyZW0gMCAwIDA7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuI2ljb25zIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgaGVpZ2h0OiAxMDBweDtcbn1cblxuI3Byb2plY3RzIGgyIHtcbiAgZm9udC1zaXplOiAxLjNyZW07XG4gIG1hcmdpbjogMXJlbSAwO1xufVxuXG4jcHJvamVjdHMgbGk6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjNjI2MjYyO1xuICBjb2xvcjogI2ZmZjtcbn1cblxuI3Byb2plY3RzLXVsLFxuI2R5bmFtaWMtdWwge1xuICBwYWRkaW5nLWxlZnQ6IDA7XG59XG5cbiNwcm9qZWN0cy11bCA+IGxpLFxuI2R5bmFtaWMtdWwgPiBsaSB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4jcHJvamVjdHMtdWwgPiBsaTo6bWFya2VyIHtcbiAgY29udGVudDogXCIjXCI7XG4gIGNvbG9yOiAjMDAwYWM0O1xufVxuXG4jZHluYW1pYy11bCA+IGxpOjptYXJrZXIge1xuICBjb2xvcjogIzAwMGFjNDtcbiAgY29udGVudDogXCJvXCI7XG59XG5cbiNwcm9qZWN0cy11bCA+IGxpLmFjdGl2ZSxcbiNkeW5hbWljLXVsID4gbGkuYWN0aXZlIHtcbiAgYm9yZGVyOiAzcHggZG91YmxlICM3NWZmNGI7XG59XG5cbiNwcm9qZWN0cy11bCA+IGxpLmFjdGl2ZTo6bWFya2VyLFxuI2R5bmFtaWMtdWwgPiBsaS5hY3RpdmU6Om1hcmtlciB7XG4gIGNvbG9yOiAjNzVmZjRiO1xufVxuXG4uZGVsZXRlLXByb2plY3Qge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAyLjRweDtcbiAgYmFja2dyb3VuZDogI2ZmMjAyMDtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuI3Byb2plY3RzLXVsID4gbGkuYWN0aXZlID4gLmRlbGV0ZS1wcm9qZWN0IHtcbiAgcmlnaHQ6IDA7XG59XG5cbkBrZXlmcmFtZXMgc2hvdyB7XG4gIDAlIHtcbiAgICBsZWZ0OiAtMzAwcHg7XG4gIH1cbiAgMTAwJSB7XG4gICAgbGVmdDogMDtcbiAgfVxufVxuXG5Aa2V5ZnJhbWVzIGhpZGUge1xuICAwJSB7XG4gICAgbGVmdDogMDtcbiAgfVxuICAxMDAlIHtcbiAgICBsZWZ0OiAtMzAwcHg7XG4gIH1cbn1cblxuLyogXG5cbk1BSU4gU0VDVElPTlxuXG4qL1xuXG4jbWFpbiB7XG4gIGZsZXgtZ3JvdzogMTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgYWxpZ24tY29udGVudDogc2FmZSBjZW50ZXI7XG4gIGdhcDogMXJlbTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nOiAyNXB4O1xuICBvdmVyZmxvdy15OiBhdXRvO1xuICBtYXJnaW4tdG9wOiAxMDBweDtcbn1cblxuI2FkZC1pdGVtIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBib3R0b206IDJyZW07XG4gIGxlZnQ6IDUwJTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB6LWluZGV4OiAxO1xufVxuXG4uaXRlbSB7XG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcbiAgd2lkdGg6IDMwMHB4O1xuICBoZWlnaHQ6IDMwMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJveC1zaGFkb3c6IDAgMCA1cHggIzAwMDtcbiAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KCMzZDNkM2QsICM1MDY5NjUpO1xuICBwYWRkaW5nOiAyMHB4O1xufVxuXG4uaXRlbTpob3ZlciB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wNSwgMS4wNSk7XG59XG5cbi5pdGVtID4gZGl2IHtcbiAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KCNlN2U3ZTcsICNiYWJhYmEpO1xuICBwYWRkaW5nOiAwLjNyZW0gMXJlbTtcbiAgYm94LXNoYWRvdzogMCAwIDNweCAjMDAwO1xufVxuXG4uaXRlbSA+IGRpdjpudGgtY2hpbGQoMikge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG92ZXJmbG93LXk6IGF1dG87XG59XG5cbi5lZGl0LWl0ZW0sXG4uZGVsZXRlLWl0ZW0ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XG4gIGJveC1zaGFkb3c6IDAgMCAzcHggIzAwMDtcbn1cblxuLmVkaXQtaXRlbSB7XG4gIGxlZnQ6IDA7XG4gIGJhY2tncm91bmQ6ICM2MDgxZGM7XG59XG5cbi5lZGl0LWl0ZW06YWN0aXZlLFxuLmRlbGV0ZS1pdGVtOmFjdGl2ZSB7XG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMCAzcHggIzAwMDtcbn1cblxuLmRlbGV0ZS1pdGVtIHtcbiAgcmlnaHQ6IDA7XG4gIGJhY2tncm91bmQ6ICNmZjIwMjA7XG59XG5cbi5jb21wbGV0ZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmNvbXBsZXRlLWJ0biB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuXG4uY29tcGxldGUtYnRuLmZhZGUtb3V0IHtcbiAgYW5pbWF0aW9uOiBmYWRlLW91dCAwLjVzIGxpbmVhcjtcbiAgb3BhY2l0eTogMDtcbn1cblxuQGtleWZyYW1lcyBmYWRlLW91dCB7XG4gIDAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG4gIDEwMCUge1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbn1cblxuLmNvbXBsZXRlLWJ0bi5mYWRlLWluIHtcbiAgYW5pbWF0aW9uOiBmYWRlLWluIDAuNXMgbGluZWFyO1xuICBvcGFjaXR5OiAxO1xufVxuXG5Aa2V5ZnJhbWVzIGZhZGUtaW4ge1xuICAwJSB7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuICAxMDAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59XG5cbiNhY3RpdmUtcHJvamVjdCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoIzNkM2QzZCwgIzJhMmY5Nik7XG4gIGNvbG9yOiAjZmZmO1xuICB6LWluZGV4OiAxO1xufVxuXG4jbWVudS1pY29uLFxuI2VkaXQtcHJvamVjdCB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoIzJhMmY5NiwgIzNkM2QzZCk7XG59XG5cbiNzaGVldC1zdGFjayB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLyogXG5cbklURU0gTU9EQUxcblxuKi9cblxuI2l0ZW0tbW9kYWwge1xuICBkaXNwbGF5OiBmbGV4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiA3MCU7XG4gIG1pbi1oZWlnaHQ6IDYwJTtcbiAgdG9wOiAyMCU7XG4gIGxlZnQ6IDE1JTtcbiAgYm9yZGVyLXJhZGl1czogMnJlbTtcbiAgcGFkZGluZzogMS41cmVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XG4gIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudCgjM2QzZDNkLCAjMmEyZjk2KTtcbiAgYm94LXNoYWRvdzogMC41cmVtIDAuNXJlbSAxcmVtIC0wLjVyZW0gIzAwMDtcbiAgei1pbmRleDogMTA7XG59XG5cbiNpdGVtLW1vZGFsID4gZGl2IHtcbiAgbWFyZ2luLWJvdHRvbTogMC44cmVtO1xufVxuXG4jaXRlbS1tb2RhbCB1bCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogMC41cmVtO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbmxhYmVsIHtcbiAgZm9udC1zaXplOiAxLjJyZW07XG59XG5cbmRpdiA+IGxhYmVsIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcbiAgY29sb3I6ICNmZmY7XG59XG5cbiNpdGVtLW1vZGFsIGxpIHtcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcbiAgbWFyZ2luOiAwLjRyZW0gMDtcbiAgcGFkZGluZzogMC41cmVtO1xuICB3aWR0aDogMjUlO1xufVxuXG4jaGlnaC1wcmlvLWxpIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmMzQzNDtcbn1cblxuI21lZGl1bS1wcmlvLWxpIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZTAzMztcbn1cblxuI2xvdy1wcmlvLWxpIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzZhZmYyYTtcbn1cblxuI2l0ZW0tbW9kYWwgdWwge1xuICBwYWRkaW5nOiAwO1xufVxuXG50ZXh0YXJlYSB7XG4gIHJlc2l6ZTogbm9uZTtcbn1cblxuaW5wdXRbdHlwZT1cInRleHRcIl0sXG50ZXh0YXJlYSB7XG4gIHdpZHRoOiA4MCU7XG59XG5cbmlucHV0Om5vdChpbnB1dFt0eXBlPVwicmFkaW9cIl0pLFxudGV4dGFyZWEge1xuICBmb250LXNpemU6IDFyZW07XG4gIGJvcmRlci1yYWRpdXM6IDAuM3JlbTtcbiAgYm94LXNoYWRvdzogMCAwLjNyZW0gMXJlbSAtMC4zcmVtICM0YTRhNGE7XG4gIGJvcmRlcjogbm9uZTtcbn1cblxuI2NvbmZpcm0taXRlbSxcbiNjYW5jZWwtaXRlbSB7XG4gIHdpZHRoOiA0MCU7XG4gIHBhZGRpbmc6IDAuNXJlbTtcbiAgZm9udC1zaXplOiAxLjJyZW07XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgjYjdiN2I3LCAjZmZmKTtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgbWFyZ2luOiAwIDFyZW07XG59XG5cbi8qIFxuXG5QUk9KRUNUIE1PREFMXG5cbiovXG5cbiNwcm9qZWN0LW1vZGFsIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDMwJTtcbiAgbGVmdDogNTAlO1xuICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoIzNkM2QzZCwgIzJhMmY5Nik7XG4gIGJveC1zaGFkb3c6IDAuNXJlbSAwLjVyZW0gMXJlbSAtMC41cmVtICMwMDA7XG4gIGJvcmRlci1yYWRpdXM6IDJyZW07XG4gIHBhZGRpbmc6IDFyZW07XG59XG5cbiNwcm9qZWN0LW1vZGFsID4gKiB7XG4gIG1hcmdpbjogMXJlbSAwO1xufVxuXG4jcHJvamVjdC1tb2RhbCA+IGxhYmVsIHtcbiAgY29sb3I6ICNmZmY7XG59XG5cbiNjb25maXJtLXByb2plY3QsXG4jY2FuY2VsLXByb2plY3Qge1xuICB3aWR0aDogNDAlO1xuICBwYWRkaW5nOiAwLjVyZW0gMnJlbTtcbiAgZm9udC1zaXplOiAxLjJyZW07XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg0NWRlZywgI2IwYjBiMCwgI2UyZTJlMik7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xuICBtYXJnaW46IDAgMXJlbTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsU0FBUztFQUNULHNCQUFzQjtFQUN0Qjt3RUFDc0U7RUFDdEUsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG9CQUFvQjtFQUNwQixXQUFXO0VBQ1gsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixtQkFBbUI7QUFDckI7O0FBRUE7Ozs7Q0FJQzs7QUFFRDtFQUNFLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IsaUJBQWlCO0VBQ2pCLCtCQUErQjtFQUMvQixhQUFhO0VBQ2IsVUFBVTtFQUNWLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usb0JBQW9CO0VBQ3BCLFlBQVk7RUFDWixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGFBQWE7RUFDYixvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGlCQUFpQjtFQUNqQiw2Q0FBNkM7RUFDN0MsV0FBVztFQUNYLHlCQUF5QjtFQUN6QixxQkFBcUI7RUFDckIsa0JBQWtCO0VBQ2xCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLHVCQUF1QjtFQUN2QixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixXQUFXO0FBQ2I7O0FBRUE7O0VBRUUsZUFBZTtBQUNqQjs7QUFFQTs7RUFFRSxlQUFlO0VBQ2Ysa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsWUFBWTtBQUNkOztBQUVBOztFQUVFLDBCQUEwQjtBQUM1Qjs7QUFFQTs7RUFFRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0Usa0JBQWtC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OztFQUVFLGVBQWU7RUFDZixxQkFBcUI7RUFDckIseUNBQXlDO0VBQ3pDLFlBQVk7QUFDZDs7QUFFQTs7RUFFRSxVQUFVO0VBQ1YsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQiwwQ0FBMEM7RUFDMUMsWUFBWTtFQUNaLHFCQUFxQjtFQUNyQixlQUFlO0VBQ2YsY0FBYztBQUNoQjs7QUFFQTs7OztDQUlDOztBQUVEO0VBQ0Usa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixTQUFTO0VBQ1QsNkNBQTZDO0VBQzdDLDJDQUEyQztFQUMzQyxtQkFBbUI7RUFDbkIsYUFBYTtBQUNmOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTs7RUFFRSxVQUFVO0VBQ1Ysb0JBQW9CO0VBQ3BCLGlCQUFpQjtFQUNqQixvREFBb0Q7RUFDcEQsWUFBWTtFQUNaLHFCQUFxQjtFQUNyQixjQUFjO0VBQ2QsZUFBZTtBQUNqQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqIHtcXG4gIG1hcmdpbjogMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBmb250LWZhbWlseTogc3lzdGVtLXVpLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFxcXCJTZWdvZSBVSVxcXCIsIFJvYm90byxcXG4gICAgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgXFxcIk9wZW4gU2Fuc1xcXCIsIFxcXCJIZWx2ZXRpY2EgTmV1ZVxcXCIsIHNhbnMtc2VyaWY7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbiNjb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgYmFja2dyb3VuZDogIzVlNWU1ZTtcXG59XFxuXFxuLyogXFxuXFxuICBQUk9KRUNUUyBTSURFQkFSXFxuXFxuKi9cXG5cXG4jcHJvamVjdHMge1xcbiAgYmFja2dyb3VuZDogIzk3OTc5NztcXG4gIHBhZGRpbmc6IDFyZW07XFxuICBmb250LXNpemU6IDEuMnJlbTtcXG4gIGJvcmRlci1yaWdodDogMnB4IHNvbGlkICMwMDA3OGQ7XFxuICBwYWRkaW5nOiAxcmVtO1xcbiAgei1pbmRleDogMjtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHdpZHRoOiAzMDBweDtcXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcXG59XFxuXFxuI3Byb2plY3RzLnZpc2libGUge1xcbiAgYW5pbWF0aW9uOiBzaG93IDAuNXM7XFxuICB3aWR0aDogMzAwcHg7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbiNwcm9qZWN0cy5oaWRkZW4ge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogLTMwMHB4O1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIGFuaW1hdGlvbjogaGlkZSAwLjVzO1xcbn1cXG5cXG4jaGlkZS1pY29uIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuI25ldy1wcm9qZWN0LWJ0biB7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBhZGRpbmc6IDAuNXJlbSAwO1xcbiAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KCM1MDY5NjUsICMwMDViOWMpO1xcbiAgY29sb3I6ICNmZmY7XFxuICBib3JkZXI6IDNweCBzb2xpZCAjMDA3ZDBjO1xcbiAgYm9yZGVyLXJhZGl1czogMC4ycmVtO1xcbiAgbWFyZ2luOiAxcmVtIDAgMCAwO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4jaWNvbnMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgaGVpZ2h0OiAxMDBweDtcXG59XFxuXFxuI3Byb2plY3RzIGgyIHtcXG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xcbiAgbWFyZ2luOiAxcmVtIDA7XFxufVxcblxcbiNwcm9qZWN0cyBsaTpob3ZlciB7XFxuICBiYWNrZ3JvdW5kOiAjNjI2MjYyO1xcbiAgY29sb3I6ICNmZmY7XFxufVxcblxcbiNwcm9qZWN0cy11bCxcXG4jZHluYW1pYy11bCB7XFxuICBwYWRkaW5nLWxlZnQ6IDA7XFxufVxcblxcbiNwcm9qZWN0cy11bCA+IGxpLFxcbiNkeW5hbWljLXVsID4gbGkge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4jcHJvamVjdHMtdWwgPiBsaTo6bWFya2VyIHtcXG4gIGNvbnRlbnQ6IFxcXCIjXFxcIjtcXG4gIGNvbG9yOiAjMDAwYWM0O1xcbn1cXG5cXG4jZHluYW1pYy11bCA+IGxpOjptYXJrZXIge1xcbiAgY29sb3I6ICMwMDBhYzQ7XFxuICBjb250ZW50OiBcXFwib1xcXCI7XFxufVxcblxcbiNwcm9qZWN0cy11bCA+IGxpLmFjdGl2ZSxcXG4jZHluYW1pYy11bCA+IGxpLmFjdGl2ZSB7XFxuICBib3JkZXI6IDNweCBkb3VibGUgIzc1ZmY0YjtcXG59XFxuXFxuI3Byb2plY3RzLXVsID4gbGkuYWN0aXZlOjptYXJrZXIsXFxuI2R5bmFtaWMtdWwgPiBsaS5hY3RpdmU6Om1hcmtlciB7XFxuICBjb2xvcjogIzc1ZmY0YjtcXG59XFxuXFxuLmRlbGV0ZS1wcm9qZWN0IHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHJpZ2h0OiAyLjRweDtcXG4gIGJhY2tncm91bmQ6ICNmZjIwMjA7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcbiNwcm9qZWN0cy11bCA+IGxpLmFjdGl2ZSA+IC5kZWxldGUtcHJvamVjdCB7XFxuICByaWdodDogMDtcXG59XFxuXFxuQGtleWZyYW1lcyBzaG93IHtcXG4gIDAlIHtcXG4gICAgbGVmdDogLTMwMHB4O1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIGxlZnQ6IDA7XFxuICB9XFxufVxcblxcbkBrZXlmcmFtZXMgaGlkZSB7XFxuICAwJSB7XFxuICAgIGxlZnQ6IDA7XFxuICB9XFxuICAxMDAlIHtcXG4gICAgbGVmdDogLTMwMHB4O1xcbiAgfVxcbn1cXG5cXG4vKiBcXG5cXG5NQUlOIFNFQ1RJT05cXG5cXG4qL1xcblxcbiNtYWluIHtcXG4gIGZsZXgtZ3JvdzogMTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gIGFsaWduLWNvbnRlbnQ6IHNhZmUgY2VudGVyO1xcbiAgZ2FwOiAxcmVtO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgcGFkZGluZzogMjVweDtcXG4gIG92ZXJmbG93LXk6IGF1dG87XFxuICBtYXJnaW4tdG9wOiAxMDBweDtcXG59XFxuXFxuI2FkZC1pdGVtIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGJvdHRvbTogMnJlbTtcXG4gIGxlZnQ6IDUwJTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHotaW5kZXg6IDE7XFxufVxcblxcbi5pdGVtIHtcXG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXG4gIHdpZHRoOiAzMDBweDtcXG4gIGhlaWdodDogMzAwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgYm94LXNoYWRvdzogMCAwIDVweCAjMDAwO1xcbiAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KCMzZDNkM2QsICM1MDY5NjUpO1xcbiAgcGFkZGluZzogMjBweDtcXG59XFxuXFxuLml0ZW06aG92ZXIge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1LCAxLjA1KTtcXG59XFxuXFxuLml0ZW0gPiBkaXYge1xcbiAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KCNlN2U3ZTcsICNiYWJhYmEpO1xcbiAgcGFkZGluZzogMC4zcmVtIDFyZW07XFxuICBib3gtc2hhZG93OiAwIDAgM3B4ICMwMDA7XFxufVxcblxcbi5pdGVtID4gZGl2Om50aC1jaGlsZCgyKSB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBvdmVyZmxvdy15OiBhdXRvO1xcbn1cXG5cXG4uZWRpdC1pdGVtLFxcbi5kZWxldGUtaXRlbSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDA7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxuICBib3gtc2hhZG93OiAwIDAgM3B4ICMwMDA7XFxufVxcblxcbi5lZGl0LWl0ZW0ge1xcbiAgbGVmdDogMDtcXG4gIGJhY2tncm91bmQ6ICM2MDgxZGM7XFxufVxcblxcbi5lZGl0LWl0ZW06YWN0aXZlLFxcbi5kZWxldGUtaXRlbTphY3RpdmUge1xcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDNweCAjMDAwO1xcbn1cXG5cXG4uZGVsZXRlLWl0ZW0ge1xcbiAgcmlnaHQ6IDA7XFxuICBiYWNrZ3JvdW5kOiAjZmYyMDIwO1xcbn1cXG5cXG4uY29tcGxldGUge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5jb21wbGV0ZS1idG4ge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbn1cXG5cXG4uY29tcGxldGUtYnRuLmZhZGUtb3V0IHtcXG4gIGFuaW1hdGlvbjogZmFkZS1vdXQgMC41cyBsaW5lYXI7XFxuICBvcGFjaXR5OiAwO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIGZhZGUtb3V0IHtcXG4gIDAlIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gIH1cXG4gIDEwMCUge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgfVxcbn1cXG5cXG4uY29tcGxldGUtYnRuLmZhZGUtaW4ge1xcbiAgYW5pbWF0aW9uOiBmYWRlLWluIDAuNXMgbGluZWFyO1xcbiAgb3BhY2l0eTogMTtcXG59XFxuXFxuQGtleWZyYW1lcyBmYWRlLWluIHtcXG4gIDAlIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gIH1cXG4gIDEwMCUge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgfVxcbn1cXG5cXG4jYWN0aXZlLXByb2plY3Qge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCMzZDNkM2QsICMyYTJmOTYpO1xcbiAgY29sb3I6ICNmZmY7XFxuICB6LWluZGV4OiAxO1xcbn1cXG5cXG4jbWVudS1pY29uLFxcbiNlZGl0LXByb2plY3Qge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCMyYTJmOTYsICMzZDNkM2QpO1xcbn1cXG5cXG4jc2hlZXQtc3RhY2sge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4vKiBcXG5cXG5JVEVNIE1PREFMXFxuXFxuKi9cXG5cXG4jaXRlbS1tb2RhbCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgd2lkdGg6IDcwJTtcXG4gIG1pbi1oZWlnaHQ6IDYwJTtcXG4gIHRvcDogMjAlO1xcbiAgbGVmdDogMTUlO1xcbiAgYm9yZGVyLXJhZGl1czogMnJlbTtcXG4gIHBhZGRpbmc6IDEuNXJlbTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogc3RyZXRjaDtcXG4gIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudCgjM2QzZDNkLCAjMmEyZjk2KTtcXG4gIGJveC1zaGFkb3c6IDAuNXJlbSAwLjVyZW0gMXJlbSAtMC41cmVtICMwMDA7XFxuICB6LWluZGV4OiAxMDtcXG59XFxuXFxuI2l0ZW0tbW9kYWwgPiBkaXYge1xcbiAgbWFyZ2luLWJvdHRvbTogMC44cmVtO1xcbn1cXG5cXG4jaXRlbS1tb2RhbCB1bCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAwLjVyZW07XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbmxhYmVsIHtcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcbn1cXG5cXG5kaXYgPiBsYWJlbCB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcXG4gIGNvbG9yOiAjZmZmO1xcbn1cXG5cXG4jaXRlbS1tb2RhbCBsaSB7XFxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcbiAgbWFyZ2luOiAwLjRyZW0gMDtcXG4gIHBhZGRpbmc6IDAuNXJlbTtcXG4gIHdpZHRoOiAyNSU7XFxufVxcblxcbiNoaWdoLXByaW8tbGkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmMzQzNDtcXG59XFxuXFxuI21lZGl1bS1wcmlvLWxpIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmUwMzM7XFxufVxcblxcbiNsb3ctcHJpby1saSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNmFmZjJhO1xcbn1cXG5cXG4jaXRlbS1tb2RhbCB1bCB7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG50ZXh0YXJlYSB7XFxuICByZXNpemU6IG5vbmU7XFxufVxcblxcbmlucHV0W3R5cGU9XFxcInRleHRcXFwiXSxcXG50ZXh0YXJlYSB7XFxuICB3aWR0aDogODAlO1xcbn1cXG5cXG5pbnB1dDpub3QoaW5wdXRbdHlwZT1cXFwicmFkaW9cXFwiXSksXFxudGV4dGFyZWEge1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgYm9yZGVyLXJhZGl1czogMC4zcmVtO1xcbiAgYm94LXNoYWRvdzogMCAwLjNyZW0gMXJlbSAtMC4zcmVtICM0YTRhNGE7XFxuICBib3JkZXI6IG5vbmU7XFxufVxcblxcbiNjb25maXJtLWl0ZW0sXFxuI2NhbmNlbC1pdGVtIHtcXG4gIHdpZHRoOiA0MCU7XFxuICBwYWRkaW5nOiAwLjVyZW07XFxuICBmb250LXNpemU6IDEuMnJlbTtcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgjYjdiN2I3LCAjZmZmKTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIG1hcmdpbjogMCAxcmVtO1xcbn1cXG5cXG4vKiBcXG5cXG5QUk9KRUNUIE1PREFMXFxuXFxuKi9cXG5cXG4jcHJvamVjdC1tb2RhbCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDMwJTtcXG4gIGxlZnQ6IDUwJTtcXG4gIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudCgjM2QzZDNkLCAjMmEyZjk2KTtcXG4gIGJveC1zaGFkb3c6IDAuNXJlbSAwLjVyZW0gMXJlbSAtMC41cmVtICMwMDA7XFxuICBib3JkZXItcmFkaXVzOiAycmVtO1xcbiAgcGFkZGluZzogMXJlbTtcXG59XFxuXFxuI3Byb2plY3QtbW9kYWwgPiAqIHtcXG4gIG1hcmdpbjogMXJlbSAwO1xcbn1cXG5cXG4jcHJvamVjdC1tb2RhbCA+IGxhYmVsIHtcXG4gIGNvbG9yOiAjZmZmO1xcbn1cXG5cXG4jY29uZmlybS1wcm9qZWN0LFxcbiNjYW5jZWwtcHJvamVjdCB7XFxuICB3aWR0aDogNDAlO1xcbiAgcGFkZGluZzogMC41cmVtIDJyZW07XFxuICBmb250LXNpemU6IDEuMnJlbTtcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg0NWRlZywgI2IwYjBiMCwgI2UyZTJlMik7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxuICBtYXJnaW46IDAgMXJlbTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8qIFxuXG4gIC0tTUVUSE9EUy0tXG5cbiovXG5cbmNvbnN0IGFkZE5ld0l0ZW0gPSBmdW5jdGlvbiAoaXRlbSkge1xuICB0aGlzLmNvbnRlbnQucHVzaChpdGVtKTtcbn07XG5cbmNvbnN0IHJhbmRvbUlkID0gZnVuY3Rpb24gKHR5cGUpIHtcbiAgY29uc3QgbnVtID0gYCR7TWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApfSR7TWF0aC5mbG9vcihcbiAgICBNYXRoLnJhbmRvbSgpICogMTBcbiAgKX0ke01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKX1gO1xuICByZXR1cm4gYCR7dHlwZX0ke251bX1gO1xufTtcblxuY29uc3QgY2hlY2tEdXBsaWNhdGVJdGVtID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgbGV0IGlkID0gcmFuZG9tSWQoaXRlbS50eXBlKTtcbiAgZm9yIChjb25zdCBwcm9qZWN0IG9mIHRoaXMuY29udGVudCkge1xuICAgIGZvciAoY29uc3QgZWwgb2YgcHJvamVjdC5jb250ZW50KSB7XG4gICAgICBpZiAoZWwuaWQgIT09IFwiXCIgJiYgZWwuaWQgPT09IGlkKSB7XG4gICAgICAgIHRoaXMuY2hlY2tEdXBsaWNhdGVJdGVtKGl0ZW0pO1xuICAgICAgfVxuICAgIH1cbiAgICBpdGVtLmFzc2lnbklkKGlkKTtcbiAgICByZXR1cm47XG4gIH1cbn07XG5cbmNvbnN0IGNoZWNrRHVwbGljYXRlUHJvamVjdCA9IGZ1bmN0aW9uIChlbCkge1xuICBsZXQgaWQgPSByYW5kb21JZChlbC50eXBlKTtcbiAgZm9yIChjb25zdCBwcm9qZWN0IG9mIHRoaXMuY29udGVudCkge1xuICAgIGlmIChwcm9qZWN0LmlkID09PSBpZCAmJiBwcm9qZWN0LmlkKSB7XG4gICAgICB0aGlzLmNoZWNrRHVwbGljYXRlUHJvamVjdChlbCk7XG4gICAgfVxuICB9XG4gIGVsLmFzc2lnbklkKGlkKTtcbiAgcmV0dXJuO1xufTtcblxuY29uc3QgYXNzaWduSWQgPSBmdW5jdGlvbiAoaWQpIHtcbiAgdGhpcy5pZCA9IGlkO1xufTtcblxuY29uc3Qgc2V0QWN0aXZlUHJvamVjdCA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIGl0ZW0uYWN0aXZlID0gdHJ1ZTtcbn07XG5cbmNvbnN0IHNldEluYWN0aXZlUHJvamVjdHMgPSBmdW5jdGlvbiAoKSB7XG4gIGZvciAoY29uc3QgZWwgb2YgdGhpcy5jb250ZW50KSB7XG4gICAgZWwuYWN0aXZlID0gZmFsc2U7XG4gIH1cbn07XG5cbmNvbnN0IGNoZWNrQWN0aXZlUHJvamVjdCA9IGZ1bmN0aW9uICgpIHtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmNvbnRlbnQubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAodGhpcy5jb250ZW50W2ldLmFjdGl2ZSA9PT0gdHJ1ZSkge1xuICAgICAgY29uc3QgYWN0aXZlID0gdGhpcy5jb250ZW50W2ldO1xuICAgICAgcmV0dXJuIGFjdGl2ZTtcbiAgICB9XG4gIH1cbn07XG5cbmNvbnN0IGVkaXRJdGVtID0gZnVuY3Rpb24gKHRpdGxlLCBkZXNjcmlwdGlvbiwgZGF0ZSwgcHJpb3JpdHkpIHtcbiAgaWYgKGRlc2NyaXB0aW9uICYmIGRhdGUgJiYgcHJpb3JpdHkpIHtcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgdGhpcy5kYXRlID0gZGF0ZTtcbiAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XG4gIH1cbiAgdGhpcy50aXRsZSA9IHRpdGxlO1xufTtcblxuY29uc3QgZ2V0SXRlbSA9IGZ1bmN0aW9uIChpZCkge1xuICBjb25zdCBsZW4gPSB0aGlzLmNvbnRlbnQubGVuZ3RoO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgaWYgKHRoaXMuY29udGVudFtpXS5pZCA9PT0gaWQpIHtcbiAgICAgIHJldHVybiB0aGlzLmNvbnRlbnRbaV07XG4gICAgfVxuICB9XG59O1xuXG5jb25zdCBkZWxldGVMaXN0SXRlbSA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIGxldCBwb3M7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5jb250ZW50Lmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHRoaXMuY29udGVudFtpXSA9PT0gaXRlbSkge1xuICAgICAgcG9zID0gaTtcbiAgICB9XG4gIH1cbiAgaWYgKHBvcyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5jb250ZW50LnNwbGljZShwb3MsIDEpO1xuICAgIGl0ZW0uZGVsVGVtcCgpO1xuICB9XG59O1xuXG5jb25zdCBkZWxUZW1wID0gZnVuY3Rpb24gKCkge1xuICBmb3IgKGNvbnN0IHByb3AgaW4gdGhpcykge1xuICAgIHRoaXNbcHJvcF0gPSBudWxsO1xuICB9XG59O1xuXG5jb25zdCBzZXRUZW1wSWQgPSBmdW5jdGlvbiAoaWQpIHtcbiAgdGhpcy5pZCA9IGlkO1xufTtcblxuY29uc3Qgc2V0RnJlc2hDb21wbGV0ZSA9IGZ1bmN0aW9uIChjb21wbGV0ZSkge1xuICB0aGlzLmNvbXBsZXRlID0gY29tcGxldGU7XG59O1xuXG5jb25zdCBzZXRDb21wbGV0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgdGhpcy5jb21wbGV0ZSA9ICF0aGlzLmNvbXBsZXRlO1xufTtcblxuY29uc3QgZ2V0UHJvamVjdEJ5SXRlbUlkID0gZnVuY3Rpb24gKGlkKSB7XG4gIGZvciAoY29uc3QgcHJvamVjdCBvZiB0aGlzLmNvbnRlbnQpIHtcbiAgICBjb25zdCBJdGVtR290dGVuID0gcHJvamVjdC5nZXRJdGVtKGlkKTtcbiAgICBpZiAoSXRlbUdvdHRlbikge1xuICAgICAgcmV0dXJuIHByb2plY3Q7XG4gICAgfVxuICB9XG59O1xuXG5jb25zdCBnZXRJdGVtQnlQcmlvcml0eSA9IGZ1bmN0aW9uIChwcmlvcml0eSkge1xuICBjb25zdCBhcnIgPSBbXTtcbiAgZm9yIChjb25zdCBwcm9qZWN0IG9mIHRoaXMuY29udGVudCkge1xuICAgIGZvciAoY29uc3QgaXRlbSBvZiBwcm9qZWN0LmNvbnRlbnQpIHtcbiAgICAgIGlmIChpdGVtLnByaW9yaXR5ID09PSBwcmlvcml0eSkge1xuICAgICAgICBhcnIucHVzaChpdGVtKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIGFycjtcbn07XG5cbmNvbnN0IGdldEl0ZW1CeUR1ZURhdGUgPSBmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IGFyciA9IFtdO1xuICBjb25zdCB0b2RheSA9IG5ldyBEYXRlKCk7XG4gIGZvciAoY29uc3QgcHJvamVjdCBvZiB0aGlzLmNvbnRlbnQpIHtcbiAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgcHJvamVjdC5jb250ZW50KSB7XG4gICAgICBjb25zdCBkYXRlID0gbmV3IERhdGUoaXRlbS5kYXRlKTtcbiAgICAgIGNvbnN0IG9mZnNldCA9IGRhdGUuZ2V0VGltZXpvbmVPZmZzZXQoKSAqIDYwMDAwO1xuICAgICAgY29uc3QgZGF0ZU9mZiA9IE51bWJlcihkYXRlKSArIG9mZnNldDtcbiAgICAgIGNvbnN0IGRheXNSZW1haW5pbmcgPSAoZGF0ZU9mZiAtIHRvZGF5KSAvIDg2NDAwMDAwO1xuICAgICAgaWYgKGRheXNSZW1haW5pbmcgPiAwICYmIGRheXNSZW1haW5pbmcgPCA3KSB7XG4gICAgICAgIGFyci5wdXNoKGl0ZW0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gYXJyO1xufTtcbi8qIFxuXG4gIC0tVEFTSyBDT05TVFJVQ1RPUi0tXG5cbiovXG5cbmV4cG9ydCBmdW5jdGlvbiBUYXNrKHRpdGxlLCBkZXNjcmlwdGlvbiwgZGF0ZSwgcHJpb3JpdHkpIHtcbiAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gIHRoaXMuZGF0ZSA9IGRhdGU7XG4gIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgdGhpcy50eXBlID0gXCJUXCI7XG4gIHRoaXMuaWQgPSBcIlwiO1xuICB0aGlzLmNvbXBsZXRlID0gZmFsc2U7XG59XG5cblRhc2sucHJvdG90eXBlLmVkaXRJdGVtID0gZWRpdEl0ZW07XG5UYXNrLnByb3RvdHlwZS5kZWxUZW1wID0gZGVsVGVtcDtcblRhc2sucHJvdG90eXBlLnNldENvbXBsZXRlID0gc2V0Q29tcGxldGU7XG5UYXNrLnByb3RvdHlwZS5hc3NpZ25JZCA9IGFzc2lnbklkO1xuVGFzay5wcm90b3R5cGUuc2V0RnJlc2hDb21wbGV0ZSA9IHNldEZyZXNoQ29tcGxldGU7XG5cbi8qIFxuXG4gIC0tUFJPSkVDVCBDT05TVFJVQ1RPUi0tXG5cbiovXG5cbmV4cG9ydCBmdW5jdGlvbiBQcm9qZWN0KHRpdGxlKSB7XG4gIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgdGhpcy50eXBlID0gXCJQXCI7XG4gIHRoaXMuYWN0aXZlID0gZmFsc2U7XG4gIHRoaXMuY29udGVudCA9IFtdO1xuICB0aGlzLmlkID0gXCJcIjtcbn1cblxuUHJvamVjdC5wcm90b3R5cGUuYWRkTmV3SXRlbSA9IGFkZE5ld0l0ZW07XG5Qcm9qZWN0LnByb3RvdHlwZS5yYW5kb21JZCA9IHJhbmRvbUlkO1xuUHJvamVjdC5wcm90b3R5cGUuYXNzaWduSWQgPSBhc3NpZ25JZDtcblByb2plY3QucHJvdG90eXBlLmVkaXRJdGVtID0gZWRpdEl0ZW07XG5Qcm9qZWN0LnByb3RvdHlwZS5nZXRJdGVtID0gZ2V0SXRlbTtcblByb2plY3QucHJvdG90eXBlLmRlbGV0ZUxpc3RJdGVtID0gZGVsZXRlTGlzdEl0ZW07XG5Qcm9qZWN0LnByb3RvdHlwZS5kZWxUZW1wID0gZGVsVGVtcDtcblxuLyogXG5cbiAgLS1QUk9KRUNUUyBBUlJBWSBDT05TVFJVQ1RPUi0tXG5cbiovXG5cbmV4cG9ydCBmdW5jdGlvbiBQcm9qZWN0c0FycigpIHtcbiAgdGhpcy5jb250ZW50ID0gW107XG59XG5Qcm9qZWN0c0Fyci5wcm90b3R5cGUuYWRkTmV3SXRlbSA9IGFkZE5ld0l0ZW07XG5Qcm9qZWN0c0Fyci5wcm90b3R5cGUuY2hlY2tEdXBsaWNhdGVJdGVtID0gY2hlY2tEdXBsaWNhdGVJdGVtO1xuUHJvamVjdHNBcnIucHJvdG90eXBlLmNoZWNrRHVwbGljYXRlUHJvamVjdCA9IGNoZWNrRHVwbGljYXRlUHJvamVjdDtcblByb2plY3RzQXJyLnByb3RvdHlwZS5jaGVja0FjdGl2ZVByb2plY3QgPSBjaGVja0FjdGl2ZVByb2plY3Q7XG5Qcm9qZWN0c0Fyci5wcm90b3R5cGUuc2V0QWN0aXZlUHJvamVjdCA9IHNldEFjdGl2ZVByb2plY3Q7XG5Qcm9qZWN0c0Fyci5wcm90b3R5cGUuc2V0SW5hY3RpdmVQcm9qZWN0cyA9IHNldEluYWN0aXZlUHJvamVjdHM7XG5Qcm9qZWN0c0Fyci5wcm90b3R5cGUuZ2V0SXRlbSA9IGdldEl0ZW07XG5Qcm9qZWN0c0Fyci5wcm90b3R5cGUuZ2V0UHJvamVjdEJ5SXRlbUlkID0gZ2V0UHJvamVjdEJ5SXRlbUlkO1xuUHJvamVjdHNBcnIucHJvdG90eXBlLmdldEl0ZW1CeVByaW9yaXR5ID0gZ2V0SXRlbUJ5UHJpb3JpdHk7XG5Qcm9qZWN0c0Fyci5wcm90b3R5cGUuZ2V0SXRlbUJ5RHVlRGF0ZSA9IGdldEl0ZW1CeUR1ZURhdGU7XG5Qcm9qZWN0c0Fyci5wcm90b3R5cGUuZGVsZXRlTGlzdEl0ZW0gPSBkZWxldGVMaXN0SXRlbTtcblxuLyogXG5cbiAgLS1URU1QT1JBUlkgT0JKIFRPIFNUT1JFIElELS1cblxuKi9cblxuZXhwb3J0IGZ1bmN0aW9uIFRlbXBvcmFyeUlkKGlkKSB7XG4gIHRoaXMuaWQgPSBpZDtcbn1cblRlbXBvcmFyeUlkLnByb3RvdHlwZS5kZWxUZW1wID0gZGVsVGVtcDtcblRlbXBvcmFyeUlkLnByb3RvdHlwZS5zZXRUZW1wSWQgPSBzZXRUZW1wSWQ7XG4iLCJpbXBvcnQgeyBjdXJyZW50UHJvamVjdHNMaXN0IH0gZnJvbSBcIi4vbG9jYWxTdG9yYWdlXCI7XG5pbXBvcnQge1xuICBuZXdUYXNrTW9kYWxSZW5kZXIsXG4gIG5ld1Byb2plY3RNb2RhbFJlbmRlcixcbiAgZWRpdFByb2plY3RNb2RhbFJlbmRlcixcbiAgZWRpdFRhc2tNb2RhbFJlbmRlcixcbn0gZnJvbSBcIi4vbW9kYWxSZW5kZXJcIjtcbmltcG9ydCB7XG4gIGhpZGVTaWRlYmFyLFxuICBzaG93U2lkZWJhcixcbiAgZGVsZXRlSXRlbSxcbiAgY2hhbmdlQ29tcGxldGVPcHRpb24sXG4gIGRlbGV0ZVByb2plY3QsXG4gIHdoaWNoSXNBY3RpdmUsXG59IGZyb20gXCIuL2xvYWRET01jcmFwXCI7XG5pbXBvcnQgeyBjaGFuZ2VBY3RpdmVQcm9qZWN0IH0gZnJvbSBcIi4vcmVuZGVyU2luZ2xlRWxcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZUlycmVsZXZhbnRFdmVudExpc3RlbmVycygpIHtcbiAgY29uc3QgbmV3VGFza0J0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkLWl0ZW1cIik7XG4gIGNvbnN0IG5ld1Byb2plY3RCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5ldy1wcm9qZWN0LWJ0blwiKTtcbiAgY29uc3QgaGlkZVNpZGViYXJCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImhpZGUtaWNvblwiKTtcbiAgY29uc3Qgc2hvd1NpZGViYXJCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1lbnUtaWNvblwiKTtcblxuICBjb25zdCBwcm9qZWN0VUwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3RzLXVsXCIpO1xuXG4gIGNvbnN0IHRhc2sgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiaXRlbVwiKTtcbiAgY29uc3QgZWRpdFByb2plY3RCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVkaXQtcHJvamVjdFwiKTtcbiAgY29uc3QgZWRpdFRhc2tCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiZWRpdC1pdGVtXCIpO1xuICBjb25zdCBkZWxldGVUYXNrQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImRlbGV0ZS1pdGVtXCIpO1xuICBjb25zdCBjb21wbGV0ZUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJjb21wbGV0ZS1idG5cIik7XG4gIGNvbnN0IGRlbGV0ZVByb2plY3RCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiZGVsZXRlLXByb2plY3RcIik7XG5cbiAgbmV3UHJvamVjdEJ0bi5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgbmV3UHJvamVjdE1vZGFsUmVuZGVyKTtcbiAgaGlkZVNpZGViYXJCdG4ucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGhpZGVTaWRlYmFyKTtcbiAgc2hvd1NpZGViYXJCdG4ucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHNob3dTaWRlYmFyKTtcblxuICBpZiAobmV3VGFza0J0bikge1xuICAgIG5ld1Rhc2tCdG4ucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIG5ld1Rhc2tNb2RhbFJlbmRlcik7XG4gIH1cblxuICBpZiAoY3VycmVudFByb2plY3RzTGlzdC5jb250ZW50Lmxlbmd0aCA+IDApIHtcbiAgICAvL2RvIG5vdCByZW1lbWJlciB3aHkgdGhlIGZ1bmMgY2FsbCBiZWxvdyBpcyBoZXJlLCBpIGRvIHJlbWVtYmVyIHRoZXJlIHdhcyBhblxuICAgIC8vZXJyb3IgYXQgYSBjZXJ0YWluIHBvaW50IGluIHRpbWUgdGhhdCBnb3QgZml4ZWQgYnkgaXQsIGJ1dCBpIGNhbiBub3QgcmVwcm9kdWNlIGl0XG4gICAgLy9hZnRlciBhcHAgZmluYWxpemF0aW9uIHNvIGxldCBtZSBqdXN0IGxlYXZlIGl0IGNvbW1lbnRlZCBvdXQgYmVjYXVzZSBpdFxuICAgIC8vbWVzc2VzIHVwIHRoZSBkeW5hbWljYWxseSBncm91cGVkIGVsZW1lbnRzXG4gICAgLy93aGljaElzQWN0aXZlKGN1cnJlbnRQcm9qZWN0c0xpc3QpO1xuICAgIGlmIChBcnJheS5mcm9tKHRhc2spLmxlbmd0aCA+IDApIHtcbiAgICAgIEFycmF5LmZyb20oZWRpdFRhc2tCdG4pLmZvckVhY2goKGUpID0+IHtcbiAgICAgICAgZS5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZWRpdFRhc2tNb2RhbFJlbmRlcik7XG4gICAgICB9KTtcbiAgICAgIEFycmF5LmZyb20oZGVsZXRlVGFza0J0bikuZm9yRWFjaCgoZSkgPT4ge1xuICAgICAgICBlLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBkZWxldGVJdGVtKTtcbiAgICAgIH0pO1xuICAgICAgQXJyYXkuZnJvbShjb21wbGV0ZUJ0bikuZm9yRWFjaCgoZSkgPT4ge1xuICAgICAgICBlLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjaGFuZ2VDb21wbGV0ZU9wdGlvbik7XG4gICAgICB9KTtcbiAgICAgIEFycmF5LmZyb20oZGVsZXRlUHJvamVjdEJ0bikuZm9yRWFjaCgoZSkgPT4ge1xuICAgICAgICBlLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBkZWxldGVQcm9qZWN0KTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGVkaXRQcm9qZWN0QnRuLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBlZGl0UHJvamVjdE1vZGFsUmVuZGVyKTtcbiAgICBBcnJheS5mcm9tKHByb2plY3RVTC5jaGlsZE5vZGVzKS5mb3JFYWNoKChlKSA9PiB7XG4gICAgICBlLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjaGFuZ2VBY3RpdmVQcm9qZWN0KTtcbiAgICB9KTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVpbnN0YXRlRXZlbnRMaXN0ZW5lcnMoKSB7XG4gIGNvbnN0IG5ld1Rhc2tCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZC1pdGVtXCIpO1xuICBjb25zdCBuZXdQcm9qZWN0QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuZXctcHJvamVjdC1idG5cIik7XG4gIGNvbnN0IGhpZGVTaWRlYmFyQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJoaWRlLWljb25cIik7XG4gIGNvbnN0IHNob3dTaWRlYmFyQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtZW51LWljb25cIik7XG5cbiAgY29uc3QgcHJvamVjdFVMID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0cy11bFwiKTtcblxuICBjb25zdCB0YXNrID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcIml0ZW1cIik7XG4gIGNvbnN0IGVkaXRQcm9qZWN0QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlZGl0LXByb2plY3RcIik7XG4gIGNvbnN0IGVkaXRUYXNrQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImVkaXQtaXRlbVwiKTtcbiAgY29uc3QgZGVsZXRlVGFza0J0biA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJkZWxldGUtaXRlbVwiKTtcbiAgY29uc3QgY29tcGxldGVCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiY29tcGxldGUtYnRuXCIpO1xuICBjb25zdCBkZWxldGVQcm9qZWN0QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImRlbGV0ZS1wcm9qZWN0XCIpO1xuXG4gIG5ld1Byb2plY3RCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIG5ld1Byb2plY3RNb2RhbFJlbmRlcik7XG4gIGhpZGVTaWRlYmFyQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBoaWRlU2lkZWJhcik7XG4gIHNob3dTaWRlYmFyQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBzaG93U2lkZWJhcik7XG5cbiAgaWYgKG5ld1Rhc2tCdG4pIHtcbiAgICBuZXdUYXNrQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBuZXdUYXNrTW9kYWxSZW5kZXIpO1xuICB9XG5cbiAgaWYgKGN1cnJlbnRQcm9qZWN0c0xpc3QuY29udGVudC5sZW5ndGggPiAwKSB7XG4gICAgd2hpY2hJc0FjdGl2ZShjdXJyZW50UHJvamVjdHNMaXN0KTtcblxuICAgIGlmIChBcnJheS5mcm9tKHRhc2spLmxlbmd0aCA+IDApIHtcbiAgICAgIEFycmF5LmZyb20oZWRpdFRhc2tCdG4pLmZvckVhY2goKGUpID0+IHtcbiAgICAgICAgZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZWRpdFRhc2tNb2RhbFJlbmRlcik7XG4gICAgICB9KTtcbiAgICAgIEFycmF5LmZyb20oZGVsZXRlVGFza0J0bikuZm9yRWFjaCgoZSkgPT4ge1xuICAgICAgICBlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBkZWxldGVJdGVtKTtcbiAgICAgIH0pO1xuICAgICAgQXJyYXkuZnJvbShjb21wbGV0ZUJ0bikuZm9yRWFjaCgoZSkgPT4ge1xuICAgICAgICBlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjaGFuZ2VDb21wbGV0ZU9wdGlvbik7XG4gICAgICB9KTtcbiAgICAgIEFycmF5LmZyb20oZGVsZXRlUHJvamVjdEJ0bikuZm9yRWFjaCgoZSkgPT4ge1xuICAgICAgICBlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBkZWxldGVQcm9qZWN0KTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICAvL25ld1xuXG4gICAgZWRpdFByb2plY3RCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGVkaXRQcm9qZWN0TW9kYWxSZW5kZXIpO1xuICAgIEFycmF5LmZyb20ocHJvamVjdFVMLmNoaWxkTm9kZXMpLmZvckVhY2goKGUpID0+IHtcbiAgICAgIGUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNoYW5nZUFjdGl2ZVByb2plY3QpO1xuICAgIH0pO1xuICB9XG59XG4iLCJpbXBvcnQgXCIuLi9zdHlsZS5jc3NcIjtcblxuaW1wb3J0IGFkZFNWRyBmcm9tIFwiLi4vaW1hZ2VzL2FkZC5zdmdcIjtcbmltcG9ydCBjb21wbGV0ZVNWRyBmcm9tIFwiLi4vaW1hZ2VzL2NvbXBsZXRlLnN2Z1wiO1xuaW1wb3J0IGluY29tcGxldGVTVkcgZnJvbSBcIi4uL2ltYWdlcy9pbmNvbXBsZXRlLnN2Z1wiO1xuaW1wb3J0IHNoZWV0U3RhY2tTVkcgZnJvbSBcIi4uL2ltYWdlcy9zdGFjay1vZi1zaGVldHMuc3ZnXCI7XG5cbmltcG9ydCB7IFRhc2ssIFByb2plY3QsIFRlbXBvcmFyeUlkIH0gZnJvbSBcIi4vY29uc3RydWN0b3JzXCI7XG5pbXBvcnQge1xuICByZW5kZXJTaWRlYmFyLFxuICByZW5kZXJTaW5nbGVUYXNrLFxuICByZW5kZXJUb3BDb250ZW50LFxufSBmcm9tIFwiLi9yZW5kZXJTaW5nbGVFbFwiO1xuaW1wb3J0IHsgbmV3VGFza01vZGFsUmVuZGVyLCBlZGl0UHJvamVjdE1vZGFsUmVuZGVyIH0gZnJvbSBcIi4vbW9kYWxSZW5kZXJcIjtcbmltcG9ydCB7IGN1cnJlbnRQcm9qZWN0c0xpc3QsIHVwZGF0ZUxvY2FsU3RvcmFnZSB9IGZyb20gXCIuL2xvY2FsU3RvcmFnZVwiO1xuXG5jb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRhaW5lclwiKTtcbmNvbnN0IGhlYWQgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImhlYWRcIik7XG5jb25zdCBmYXZpY29uSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaW5rXCIpO1xuY29uc3QgZmF2aWNvbk1hc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlua1wiKTtcblxuZmF2aWNvbkljb24ucmVsID0gXCJpY29uXCI7XG5mYXZpY29uSWNvbi5ocmVmID0gc2hlZXRTdGFja1NWRztcblxuZmF2aWNvbk1hc2sucmVsID0gXCJtYXNrLWljb25cIjtcbmZhdmljb25NYXNrLmhyZWYgPSBzaGVldFN0YWNrU1ZHO1xuZmF2aWNvbk1hc2suY29sb3IgPSBcIiMzNDQzYWVcIjtcblxuQXJyYXkuZnJvbShoZWFkKS5mb3JFYWNoKChlKSA9PiB7XG4gIGUuYXBwZW5kQ2hpbGQoZmF2aWNvbkljb24pO1xuICBlLmFwcGVuZENoaWxkKGZhdmljb25NYXNrKTtcbn0pO1xuXG5leHBvcnQgY29uc3QgaXRlbUVkaXRlZCA9IG5ldyBUZW1wb3JhcnlJZChcIlwiKTtcblxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlckNvbnRhaW5lcigpIHtcbiAgY29uc3Qgc2lkZWJhclJlbmRlcmVkID0gcmVuZGVyU2lkZWJhcigpO1xuICBjb25zdCBhY3RpdmVQcm9qZWN0ID0gd2hpY2hJc0FjdGl2ZShjdXJyZW50UHJvamVjdHNMaXN0KSB8fCBuZXcgUHJvamVjdChcIlwiKTtcbiAgY29uc3QgbWFpbiA9IHJlbmRlck1haW4oYWN0aXZlUHJvamVjdC5jb250ZW50LCBhY3RpdmVQcm9qZWN0LnRpdGxlKTtcblxuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoc2lkZWJhclJlbmRlcmVkKTtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKG1haW4pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyTWFpbihncm91cCwgdGl0bGUpIHtcbiAgY29uc3QgbmV3TWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IHRvcENvbnRlbnQgPSByZW5kZXJUb3BDb250ZW50KHRpdGxlKTtcbiAgY29uc3QgYWRkSXRlbUltZyA9IG5ldyBJbWFnZSgpO1xuXG4gIG5ld01haW4uaWQgPSBcIm1haW5cIjtcblxuICByZW5kZXJUYXNrcyhncm91cCwgbmV3TWFpbik7XG5cbiAgYWRkSXRlbUltZy5pZCA9IFwiYWRkLWl0ZW1cIjtcbiAgYWRkSXRlbUltZy5zcmMgPSBhZGRTVkc7XG4gIGFkZEl0ZW1JbWcuc3R5bGUubWFyZ2luTGVmdCA9IGAkey0oYWRkSXRlbUltZy5vZmZzZXRXaWR0aCAvIDIpfXB4YDtcblxuICBpZiAoY3VycmVudFByb2plY3RzTGlzdC5jb250ZW50Lmxlbmd0aCA+IDApIHtcbiAgICBuZXdNYWluLmFwcGVuZENoaWxkKGFkZEl0ZW1JbWcpO1xuICB9XG5cbiAgbmV3TWFpbi5hcHBlbmRDaGlsZCh0b3BDb250ZW50KTtcblxuICBhZGRJdGVtSW1nLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBuZXdUYXNrTW9kYWxSZW5kZXIpO1xuXG4gIHJldHVybiBuZXdNYWluO1xufVxuXG5mdW5jdGlvbiByZW5kZXJUYXNrcyhhcnIsIERPTWVsKSB7XG4gIGlmIChhcnIubGVuZ3RoID4gMCkge1xuICAgIGZvciAoY29uc3QgdGFzayBvZiBhcnIpIHtcbiAgICAgIERPTWVsLmFwcGVuZENoaWxkKHJlbmRlclNpbmdsZVRhc2sodGFzaykpO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gd2hpY2hJc0FjdGl2ZShwcm9qZWN0cykge1xuICBpZiAoY3VycmVudFByb2plY3RzTGlzdC5jb250ZW50Lmxlbmd0aCA+IDApIHtcbiAgICBsZXQgaXNBY3RpdmUgPSBwcm9qZWN0cy5jaGVja0FjdGl2ZVByb2plY3QoKTtcbiAgICBpZiAoaXNBY3RpdmUpIHtcbiAgICAgIHJldHVybiBpc0FjdGl2ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgcHJvamVjdHMuc2V0QWN0aXZlUHJvamVjdChwcm9qZWN0cy5jb250ZW50WzBdKTtcbiAgICAgIGlzQWN0aXZlID0gcHJvamVjdHMuY2hlY2tBY3RpdmVQcm9qZWN0KCk7XG4gICAgICByZXR1cm4gaXNBY3RpdmU7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBoaWRlU2lkZWJhcigpIHtcbiAgY29uc3Qgc2lkZWJhciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdHNcIik7XG4gIGNvbnN0IG1haW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1haW5cIik7XG4gIG1haW4ud2lkdGggPSBcIjEwMCVcIjtcblxuICBzaWRlYmFyLmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XG59XG5leHBvcnQgZnVuY3Rpb24gc2hvd1NpZGViYXIoKSB7XG4gIGNvbnN0IHNpZGViYXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3RzXCIpO1xuXG4gIHNpZGViYXIuY2xhc3NMaXN0LmFkZChcInZpc2libGVcIik7XG4gIHNpZGViYXIuY2xhc3NMaXN0LnJlbW92ZShcImhpZGRlblwiKTtcbiAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgc2lkZWJhci5jbGFzc0xpc3QucmVtb3ZlKFwidmlzaWJsZVwiKTtcbiAgfSwgNTAwKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNldFByaW9yaXR5KERPTWVsLCBpdGVtKSB7XG4gIGlmIChpdGVtLnByaW9yaXR5ID09PSBcImhcIikge1xuICAgIERPTWVsLnN0eWxlLmJhY2tncm91bmQgPSBcIiNmZjM0MzRcIjtcbiAgICBET01lbC50ZXh0Q29udGVudCA9IFwiSGlnaCBwcmlvcml0eVwiO1xuICB9IGVsc2UgaWYgKGl0ZW0ucHJpb3JpdHkgPT09IFwibVwiKSB7XG4gICAgRE9NZWwuc3R5bGUuYmFja2dyb3VuZCA9IFwiI2ZmZTAzM1wiO1xuICAgIERPTWVsLnRleHRDb250ZW50ID0gXCJNZWRpdW0gcHJpb3JpdHlcIjtcbiAgfSBlbHNlIHtcbiAgICBET01lbC5zdHlsZS5iYWNrZ3JvdW5kID0gXCIjNmFmZjJhXCI7XG4gICAgRE9NZWwudGV4dENvbnRlbnQgPSBcIkxvdyBwcmlvcml0eVwiO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWxldGVJdGVtKGUpIHtcbiAgY29uc3QgYWN0aXZlUHJvamVjdCA9IGN1cnJlbnRQcm9qZWN0c0xpc3QuZ2V0UHJvamVjdEJ5SXRlbUlkKFxuICAgIGUudGFyZ2V0LnBhcmVudE5vZGUuaWRcbiAgKTtcbiAgY29uc3QgdGFzayA9IGFjdGl2ZVByb2plY3QuZ2V0SXRlbShlLnRhcmdldC5wYXJlbnROb2RlLmlkKTtcbiAgZS50YXJnZXQucGFyZW50Tm9kZS5yZW1vdmUoKTtcbiAgYWN0aXZlUHJvamVjdC5kZWxldGVMaXN0SXRlbSh0YXNrKTtcbiAgdXBkYXRlTG9jYWxTdG9yYWdlKCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWxldGVQcm9qZWN0KGUpIHtcbiAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgY29uc3QgcHJvamVjdCA9IGN1cnJlbnRQcm9qZWN0c0xpc3QuZ2V0SXRlbShlLnRhcmdldC5wYXJlbnROb2RlLmlkKTtcblxuICBjdXJyZW50UHJvamVjdHNMaXN0LmRlbGV0ZUxpc3RJdGVtKHByb2plY3QpO1xuXG4gIGlmIChjdXJyZW50UHJvamVjdHNMaXN0LmNvbnRlbnQubGVuZ3RoID09PSAwKSB7XG4gICAgY29uc3QgdGhpc1dlZWsgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5leHQtd2Vla1wiKTtcbiAgICBlLnRhcmdldC5wYXJlbnROb2RlLnJlbW92ZSgpO1xuICAgIHRoaXNXZWVrLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG4gICAgc2hvd0dyb3VwKHRoaXNXZWVrKTtcbiAgfSBlbHNlIHtcbiAgICBjb25zdCBsYXRlTWFpbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFpblwiKTtcbiAgICBjb25zdCBsYXRlU2lkZWJhciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdHNcIik7XG5cbiAgICBsYXRlTWFpbi5yZW1vdmUoKTtcbiAgICBsYXRlU2lkZWJhci5yZW1vdmUoKTtcbiAgICByZW5kZXJDb250YWluZXIoKTtcbiAgfVxuICB1cGRhdGVMb2NhbFN0b3JhZ2UoKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNldENvbXBsZXRlT3B0aW9uKHRhc2ssIERPTWVsKSB7XG4gIGlmICh0YXNrLmNvbXBsZXRlKSB7XG4gICAgRE9NZWwuc3JjID0gY29tcGxldGVTVkc7XG4gIH0gZWxzZSB7XG4gICAgRE9NZWwuc3JjID0gaW5jb21wbGV0ZVNWRztcbiAgfVxuICB1cGRhdGVMb2NhbFN0b3JhZ2UoKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNoYW5nZUNvbXBsZXRlT3B0aW9uKGUpIHtcbiAgY29uc3QgaWQgPSBlLnRhcmdldC5wYXJlbnROb2RlLnBhcmVudE5vZGUuaWQ7XG4gIGNvbnN0IHByb2plY3QgPSBjdXJyZW50UHJvamVjdHNMaXN0LmdldFByb2plY3RCeUl0ZW1JZChpZCk7XG4gIGNvbnN0IHRhc2sgPSBwcm9qZWN0LmdldEl0ZW0oaWQpO1xuXG4gIHRhc2suc2V0Q29tcGxldGUoKTtcblxuICBlLnRhcmdldC5jbGFzc0xpc3QgKz0gXCIgZmFkZS1vdXRcIjtcbiAgZS50YXJnZXQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNoYW5nZUNvbXBsZXRlT3B0aW9uKTtcblxuICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICBzZXRDb21wbGV0ZU9wdGlvbih0YXNrLCBlLnRhcmdldCk7XG4gICAgZS50YXJnZXQuY2xhc3NOYW1lID0gXCJjb21wbGV0ZS1idG4gZmFkZS1pblwiO1xuXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBlLnRhcmdldC5jbGFzc05hbWUgPSBcImNvbXBsZXRlLWJ0blwiO1xuICAgICAgZS50YXJnZXQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNoYW5nZUNvbXBsZXRlT3B0aW9uKTtcbiAgICB9LCA1MDApO1xuICB9LCA1MDApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVhY3RpdmF0ZUFsbFByb2plY3RzKGUpIHtcbiAgY29uc3QgcHJvamVjdFVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0cy11bFwiKTtcbiAgY3VycmVudFByb2plY3RzTGlzdC5zZXRJbmFjdGl2ZVByb2plY3RzKCk7XG4gIEFycmF5LmZyb20ocHJvamVjdFVsLmNoaWxkTm9kZXMpLmZvckVhY2goKGVsKSA9PiB7XG4gICAgZWwuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgfSk7XG4gIGlmICghZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiYWN0aXZlXCIpKSB7XG4gICAgQXJyYXkuZnJvbShlLnRhcmdldC5wYXJlbnROb2RlLmNoaWxkcmVuKS5mb3JFYWNoKChlbCkgPT4ge1xuICAgICAgaWYgKGVsICE9PSBlLnRhcmdldCkge1xuICAgICAgICBlbC5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZS50YXJnZXQuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gc2hvd0dyb3VwKGUpIHtcbiAgY29uc3QgbGF0ZU1haW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1haW5cIik7XG4gIGxldCBuZXdNYWluO1xuICBpZiAoZS50YXJnZXQpIHtcbiAgICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwicHJpb3JpdHktZ3JvdXBcIikpIHtcbiAgICAgIGNvbnN0IHAgPSBlLnRhcmdldC5pZFsxXTtcbiAgICAgIG5ld01haW4gPSByZW5kZXJNYWluKFxuICAgICAgICBjdXJyZW50UHJvamVjdHNMaXN0LmdldEl0ZW1CeVByaW9yaXR5KHApLFxuICAgICAgICBlLnRhcmdldC50ZXh0Q29udGVudFxuICAgICAgKTtcbiAgICB9IGVsc2UgaWYgKGUudGFyZ2V0LmlkID09PSBcIm5leHQtd2Vla1wiKSB7XG4gICAgICBuZXdNYWluID0gcmVuZGVyTWFpbihcbiAgICAgICAgY3VycmVudFByb2plY3RzTGlzdC5nZXRJdGVtQnlEdWVEYXRlKCksXG4gICAgICAgIGUudGFyZ2V0LnRleHRDb250ZW50XG4gICAgICApO1xuICAgIH1cbiAgfSBlbHNlIGlmIChlLmNsYXNzTGlzdC5jb250YWlucyhcInByaW9yaXR5LWdyb3VwXCIpKSB7XG4gICAgY29uc3QgcCA9IGUuaWRbMV07XG4gICAgbmV3TWFpbiA9IHJlbmRlck1haW4oXG4gICAgICBjdXJyZW50UHJvamVjdHNMaXN0LmdldEl0ZW1CeVByaW9yaXR5KHApLFxuICAgICAgZS50ZXh0Q29udGVudFxuICAgICk7XG4gIH0gZWxzZSBpZiAoZS5pZCA9PT0gXCJuZXh0LXdlZWtcIikge1xuICAgIG5ld01haW4gPSByZW5kZXJNYWluKGN1cnJlbnRQcm9qZWN0c0xpc3QuZ2V0SXRlbUJ5RHVlRGF0ZSgpLCBlLnRleHRDb250ZW50KTtcbiAgfVxuXG4gIGxhdGVNYWluLnJlbW92ZSgpO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQobmV3TWFpbik7XG4gIGNvbnN0IGVkaXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVkaXQtcHJvamVjdFwiKTtcbiAgY29uc3QgYWRkVGFzayA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkLWl0ZW1cIik7XG4gIGlmIChhZGRUYXNrKSB7XG4gICAgYWRkVGFzay5yZW1vdmUoKTtcbiAgfVxuICBjdXJyZW50UHJvamVjdHNMaXN0LnNldEluYWN0aXZlUHJvamVjdHMoKTtcbiAgZWRpdC5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZWRpdFByb2plY3RNb2RhbFJlbmRlcik7XG59XG4iLCJpbXBvcnQgeyBUYXNrLCBQcm9qZWN0LCBQcm9qZWN0c0FyciB9IGZyb20gXCIuL2NvbnN0cnVjdG9ycy5qc1wiO1xuXG5mdW5jdGlvbiBnZXRMaXN0RnJvbVN0b3JhZ2UoKSB7XG4gIGxldCB0ZW1wID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImN1cnJlbnRQcm9qZWN0c0xpc3RcIikpO1xuICByZXR1cm4gc2V0U3RvcmFnZVBMQXNJbnN0YW5jZU9mQ2xhc3ModGVtcCk7XG59XG5cbmZ1bmN0aW9uIHNldFN0b3JhZ2VQTEFzSW5zdGFuY2VPZkNsYXNzKGxpc3QpIHtcbiAgY29uc3QgcExpc3QgPSBuZXcgUHJvamVjdHNBcnIoKTtcbiAgZm9yIChjb25zdCBzdG9yYWdlUHJvamVjdCBvZiBsaXN0LmNvbnRlbnQpIHtcbiAgICBjb25zdCBwcm9qZWN0ID0gc2V0U3RvcmFnZVByb2plY3RBc0luc3RhbmNlT2ZDbGFzcyhzdG9yYWdlUHJvamVjdCk7XG4gICAgcExpc3QuYWRkTmV3SXRlbShwcm9qZWN0KTtcbiAgfVxuICByZXR1cm4gcExpc3Q7XG59XG5cbmZ1bmN0aW9uIHNldFN0b3JhZ2VQcm9qZWN0QXNJbnN0YW5jZU9mQ2xhc3MocHJvamVjdCkge1xuICBjb25zdCBwID0gbmV3IFByb2plY3QocHJvamVjdC50aXRsZSk7XG4gIHAuYXNzaWduSWQocHJvamVjdC5pZCk7XG4gIGZvciAoY29uc3Qgc3RvcmFnZVRhc2sgb2YgcHJvamVjdC5jb250ZW50KSB7XG4gICAgY29uc3QgdGFzayA9IHNldFN0b3JhZ2VUYXNrQXNJbnN0YW5jZU9mQ2xhc3Moc3RvcmFnZVRhc2spO1xuICAgIHAuYWRkTmV3SXRlbSh0YXNrKTtcbiAgfVxuICByZXR1cm4gcDtcbn1cblxuZnVuY3Rpb24gc2V0U3RvcmFnZVRhc2tBc0luc3RhbmNlT2ZDbGFzcyh0YXNrKSB7XG4gIGNvbnN0IHQgPSBuZXcgVGFzayh0YXNrLnRpdGxlLCB0YXNrLmRlc2NyaXB0aW9uLCB0YXNrLmRhdGUsIHRhc2sucHJpb3JpdHkpO1xuICB0LmFzc2lnbklkKHRhc2suaWQpO1xuICB0LnNldEZyZXNoQ29tcGxldGUodGFzay5jb21wbGV0ZSk7XG4gIHJldHVybiB0O1xufVxuXG5mdW5jdGlvbiBpbml0aWFsaXplU3RvcmFnZSgpIHtcbiAgY29uc3Qgb2JqID0gbmV3IFByb2plY3RzQXJyKCk7XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiY3VycmVudFByb2plY3RzTGlzdFwiLCBKU09OLnN0cmluZ2lmeShvYmopKTtcbiAgcmV0dXJuIG9iajtcbn1cblxuZnVuY3Rpb24gY2hlY2tMb2NhbFN0b3JhZ2UoKSB7XG4gIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImN1cnJlbnRQcm9qZWN0c0xpc3RcIikpIHtcbiAgICBjb25zdCB0ZW1wTGlzdCA9IGdldExpc3RGcm9tU3RvcmFnZSgpO1xuICAgIHJldHVybiB0ZW1wTGlzdDtcbiAgfSBlbHNlIHtcbiAgICBjb25zdCB0ZW1wTGlzdCA9IGluaXRpYWxpemVTdG9yYWdlKCk7XG4gICAgcmV0dXJuIHRlbXBMaXN0O1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVMb2NhbFN0b3JhZ2UoKSB7XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFxuICAgIFwiY3VycmVudFByb2plY3RzTGlzdFwiLFxuICAgIEpTT04uc3RyaW5naWZ5KGN1cnJlbnRQcm9qZWN0c0xpc3QpXG4gICk7XG59XG5cbmV4cG9ydCBjb25zdCBjdXJyZW50UHJvamVjdHNMaXN0ID0gY2hlY2tMb2NhbFN0b3JhZ2UoKTtcbiIsImltcG9ydCB7IHdoaWNoSXNBY3RpdmUsIGl0ZW1FZGl0ZWQsIHNob3dHcm91cCB9IGZyb20gXCIuL2xvYWRET01jcmFwXCI7XG5pbXBvcnQgeyByZW5kZXJTaW5nbGVQcm9qZWN0LCByZW5kZXJUb3BDb250ZW50IH0gZnJvbSBcIi4vcmVuZGVyU2luZ2xlRWxcIjtcbmltcG9ydCB7IFRhc2ssIFByb2plY3QgfSBmcm9tIFwiLi9jb25zdHJ1Y3RvcnNcIjtcbmltcG9ydCB7IHJlbmRlclNpbmdsZVRhc2sgfSBmcm9tIFwiLi9yZW5kZXJTaW5nbGVFbFwiO1xuaW1wb3J0IHsgY3VycmVudFByb2plY3RzTGlzdCwgdXBkYXRlTG9jYWxTdG9yYWdlIH0gZnJvbSBcIi4vbG9jYWxTdG9yYWdlXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBjb25maXJtTmV3VGFzaygpIHtcbiAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFpblwiKTtcbiAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaXRlbS1tb2RhbFwiKTtcbiAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRpdGxlLWlucHV0XCIpLnZhbHVlO1xuICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGVzY3JpcHRpb24taW5wdXRcIikudmFsdWU7XG4gIGNvbnN0IGRhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRhdGUtaW5wdXRcIikudmFsdWU7XG4gIGNvbnN0IHByaW9yaXRpZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5TmFtZShcInByaW9yaXR5XCIpO1xuXG4gIGxldCBwcmlvcml0eTtcbiAgQXJyYXkuZnJvbShwcmlvcml0aWVzKS5mb3JFYWNoKChlKSA9PiB7XG4gICAgaWYgKGUuY2hlY2tlZCkge1xuICAgICAgcHJpb3JpdHkgPSBlLmlkWzBdO1xuICAgIH1cbiAgfSk7XG5cbiAgY29uc3QgYWN0aXZlUHJvamVjdCA9IHdoaWNoSXNBY3RpdmUoY3VycmVudFByb2plY3RzTGlzdCk7XG4gIGNvbnN0IG5ld1Rhc2sgPSBuZXcgVGFzayh0aXRsZSwgZGVzY3JpcHRpb24sIGRhdGUsIHByaW9yaXR5KTtcblxuICBhY3RpdmVQcm9qZWN0LmFkZE5ld0l0ZW0obmV3VGFzayk7XG4gIGNvbnN0IHRhc2tET00gPSByZW5kZXJTaW5nbGVUYXNrKG5ld1Rhc2spO1xuICBtYWluLmFwcGVuZENoaWxkKHRhc2tET00pO1xuICBmb3JtLnJlbW92ZSgpO1xuICB1cGRhdGVMb2NhbFN0b3JhZ2UoKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbmZpcm1FZGl0VGFzaygpIHtcbiAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFpblwiKTtcbiAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaXRlbS1tb2RhbFwiKTtcbiAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRpdGxlLWlucHV0XCIpLnZhbHVlO1xuICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGVzY3JpcHRpb24taW5wdXRcIikudmFsdWU7XG4gIGNvbnN0IGRhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRhdGUtaW5wdXRcIikudmFsdWU7XG4gIGNvbnN0IHByaW9yaXRpZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5TmFtZShcInByaW9yaXR5XCIpO1xuICBjb25zdCBhY3RpdmVQcm9qZWN0ID0gY3VycmVudFByb2plY3RzTGlzdC5nZXRQcm9qZWN0QnlJdGVtSWQoaXRlbUVkaXRlZC5pZCk7XG4gIGNvbnN0IGR5bmFtaWNHcm91cFVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkeW5hbWljLXVsXCIpO1xuICBjb25zdCB0YXNrID0gYWN0aXZlUHJvamVjdC5nZXRJdGVtKGl0ZW1FZGl0ZWQuaWQpO1xuICBjb25zdCBET01JdGVtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaXRlbUVkaXRlZC5pZCk7XG4gIGxldCBwcmlvcml0eTtcblxuICBBcnJheS5mcm9tKHByaW9yaXRpZXMpLmZvckVhY2goKGUpID0+IHtcbiAgICBpZiAoZS5jaGVja2VkKSB7XG4gICAgICBwcmlvcml0eSA9IGUuaWRbMF07XG4gICAgfVxuICB9KTtcblxuICB0YXNrLmVkaXRJdGVtKHRpdGxlLCBkZXNjcmlwdGlvbiwgZGF0ZSwgcHJpb3JpdHkpO1xuXG4gIGxldCBwb3M7XG4gIEFycmF5LmZyb20obWFpbi5jaGlsZE5vZGVzKS5mb3JFYWNoKChlKSA9PiB7XG4gICAgaWYgKGUuaWQgPT09IERPTUl0ZW0uaWQpIHtcbiAgICAgIHBvcyA9IEFycmF5LmZyb20obWFpbi5jaGlsZE5vZGVzKS5pbmRleE9mKERPTUl0ZW0pO1xuICAgIH1cbiAgfSk7XG5cbiAgaWYgKGN1cnJlbnRQcm9qZWN0c0xpc3QuY2hlY2tBY3RpdmVQcm9qZWN0KCkpIHtcbiAgICBET01JdGVtLnJlbW92ZSgpO1xuICAgIG1haW4uaW5zZXJ0QmVmb3JlKHJlbmRlclNpbmdsZVRhc2sodGFzayksIG1haW4uY2hpbGRyZW5bcG9zXSk7XG4gIH0gZWxzZSB7XG4gICAgQXJyYXkuZnJvbShkeW5hbWljR3JvdXBVbC5jaGlsZHJlbikuZm9yRWFjaCgoZSkgPT4ge1xuICAgICAgaWYgKGUuY2xhc3NMaXN0LmNvbnRhaW5zKFwiYWN0aXZlXCIpKSB7XG4gICAgICAgIHNob3dHcm91cChlKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGZvcm0ucmVtb3ZlKCk7XG4gIHVwZGF0ZUxvY2FsU3RvcmFnZSgpO1xuICBpdGVtRWRpdGVkLnNldFRlbXBJZChcIlwiKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbmZpcm1OZXdQcm9qZWN0KCkge1xuICBjb25zdCBwcm9qZWN0VUwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3RzLXVsXCIpO1xuICBjb25zdCBmb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0LW1vZGFsXCIpO1xuICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdC1uYW1lXCIpLnZhbHVlO1xuICBjb25zdCBuZXdQcm9qZWN0ID0gbmV3IFByb2plY3QodGl0bGUpO1xuXG4gIGN1cnJlbnRQcm9qZWN0c0xpc3QuYWRkTmV3SXRlbShuZXdQcm9qZWN0KTtcblxuICBjb25zdCBsaSA9IHJlbmRlclNpbmdsZVByb2plY3QobmV3UHJvamVjdCk7XG4gIHByb2plY3RVTC5hcHBlbmRDaGlsZChsaSk7XG5cbiAgZm9ybS5yZW1vdmUoKTtcbiAgdXBkYXRlTG9jYWxTdG9yYWdlKCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb25maXJtRWRpdFByb2plY3QoKSB7XG4gIGNvbnN0IGxhdGVUb3BDb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhY3RpdmUtcHJvamVjdFwiKTtcbiAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFpblwiKTtcbiAgY29uc3QgcHJvamVjdFVMID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0cy11bFwiKTtcbiAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdC1tb2RhbFwiKTtcbiAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3QtbmFtZVwiKS52YWx1ZTtcbiAgY29uc3QgcHJvamVjdCA9IGN1cnJlbnRQcm9qZWN0c0xpc3QuZ2V0SXRlbShpdGVtRWRpdGVkLmlkKTtcbiAgY29uc3QgRE9NSXRlbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGl0ZW1FZGl0ZWQuaWQpO1xuXG4gIHByb2plY3QuZWRpdEl0ZW0odGl0bGUpO1xuICBsZXQgcG9zO1xuICBBcnJheS5mcm9tKHByb2plY3RVTC5jaGlsZE5vZGVzKS5mb3JFYWNoKChlKSA9PiB7XG4gICAgaWYgKGUuaWQgPT09IERPTUl0ZW0uaWQpIHtcbiAgICAgIHBvcyA9IEFycmF5LmZyb20ocHJvamVjdFVMLmNoaWxkTm9kZXMpLmluZGV4T2YoRE9NSXRlbSk7XG4gICAgfVxuICB9KTtcbiAgRE9NSXRlbS5yZW1vdmUoKTtcblxuICBwcm9qZWN0VUwuaW5zZXJ0QmVmb3JlKHJlbmRlclNpbmdsZVByb2plY3QocHJvamVjdCksIHByb2plY3RVTC5jaGlsZHJlbltwb3NdKTtcblxuICBmb3JtLnJlbW92ZSgpO1xuICBsYXRlVG9wQ29udGVudC5yZW1vdmUoKTtcbiAgdXBkYXRlTG9jYWxTdG9yYWdlKCk7XG4gIG1haW4uYXBwZW5kQ2hpbGQocmVuZGVyVG9wQ29udGVudCh3aGljaElzQWN0aXZlKGN1cnJlbnRQcm9qZWN0c0xpc3QpLnRpdGxlKSk7XG59XG4iLCJpbXBvcnQgeyBpdGVtRWRpdGVkLCB3aGljaElzQWN0aXZlIH0gZnJvbSBcIi4vbG9hZERPTWNyYXBcIjtcbmltcG9ydCB7IHJlbW92ZUlycmVsZXZhbnRFdmVudExpc3RlbmVycyB9IGZyb20gXCIuL2V2ZW50TGlzdGVuZXJzTWFuYWdlclwiO1xuaW1wb3J0IHtcbiAgdmFsaWRhdGVOZXdNb2RhbCxcbiAgdmFsaWRhdGVFZGl0TW9kYWwsXG4gIGNhbmNlbE5ld0Zvcm0sXG4gIGNhbmNlbEVkaXRGb3JtLFxufSBmcm9tIFwiLi9tb2RhbFZhbGlkYXRpb25cIjtcbmltcG9ydCB7IGN1cnJlbnRQcm9qZWN0c0xpc3QgfSBmcm9tIFwiLi9sb2NhbFN0b3JhZ2VcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIG5ld1Rhc2tNb2RhbFJlbmRlcigpIHtcbiAgY29uc3QgZWxMaXN0ID0gbmV3VGFza01vZGFsQ3JlYXRlRWxlbWVudHMoKTtcbiAgY29uc3QgZm9ybVRvUmVuZGVyID0gbmV3VGFza1JlbmRlckxvb3BzKGVsTGlzdCk7XG5cbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKGZvcm1Ub1JlbmRlcik7XG5cbiAgY29uc3QgY2FuY2VsQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYW5jZWwtaXRlbVwiKTtcblxuICByZW1vdmVJcnJlbGV2YW50RXZlbnRMaXN0ZW5lcnMoKTtcbiAgY2FuY2VsQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjYW5jZWxOZXdGb3JtKTtcbiAgZm9ybVRvUmVuZGVyLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgdmFsaWRhdGVOZXdNb2RhbCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBlZGl0VGFza01vZGFsUmVuZGVyKGUpIHtcbiAgY29uc3QgaWQgPSBlLnRhcmdldC5wYXJlbnROb2RlLmlkO1xuXG4gIGNvbnN0IGFjdGl2ZVByb2plY3QgPSBjdXJyZW50UHJvamVjdHNMaXN0LmdldFByb2plY3RCeUl0ZW1JZChcbiAgICBlLnRhcmdldC5wYXJlbnROb2RlLmlkXG4gICk7XG5cbiAgY29uc3QgdGFza1RvRWRpdCA9IGFjdGl2ZVByb2plY3QuZ2V0SXRlbShpZCk7XG4gIGNvbnN0IGVsTGlzdCA9IG5ld1Rhc2tNb2RhbENyZWF0ZUVsZW1lbnRzKCk7XG4gIGNvbnN0IGZvcm1Ub1JlbmRlciA9IG5ld1Rhc2tSZW5kZXJMb29wcyhlbExpc3QpO1xuXG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChmb3JtVG9SZW5kZXIpO1xuXG4gIGNvbnN0IHRpdGxlSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRpdGxlLWlucHV0XCIpO1xuICBjb25zdCBkZXNjcmlwdGlvbklucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkZXNjcmlwdGlvbi1pbnB1dFwiKTtcbiAgY29uc3QgZGF0ZUlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkYXRlLWlucHV0XCIpO1xuICBjb25zdCBoaWdoUFJhZGlvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJoaWdoLXByaW9yaXR5XCIpO1xuICBjb25zdCBtZWRpdW1QUmFkaW8gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1lZGl1bS1wcmlvcml0eVwiKTtcbiAgY29uc3QgbG93UFJhZGlvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsb3ctcHJpb3JpdHlcIik7XG4gIGNvbnN0IGNhbmNlbEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2FuY2VsLWl0ZW1cIik7XG5cbiAgdGl0bGVJbnB1dC52YWx1ZSA9IHRhc2tUb0VkaXQudGl0bGU7XG4gIGRlc2NyaXB0aW9uSW5wdXQudmFsdWUgPSB0YXNrVG9FZGl0LmRlc2NyaXB0aW9uO1xuICBkYXRlSW5wdXQudmFsdWUgPSB0YXNrVG9FZGl0LmRhdGU7XG5cbiAgc3dpdGNoICh0YXNrVG9FZGl0LnByaW9yaXR5KSB7XG4gICAgY2FzZSBcImhcIjpcbiAgICAgIGhpZ2hQUmFkaW8uc2V0QXR0cmlidXRlKFwiY2hlY2tlZFwiLCBcIlwiKTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJtXCI6XG4gICAgICBtZWRpdW1QUmFkaW8uc2V0QXR0cmlidXRlKFwiY2hlY2tlZFwiLCBcIlwiKTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJsXCI6XG4gICAgICBsb3dQUmFkaW8uc2V0QXR0cmlidXRlKFwiY2hlY2tlZFwiLCBcIlwiKTtcbiAgICAgIGJyZWFrO1xuICB9XG5cbiAgcmVtb3ZlSXJyZWxldmFudEV2ZW50TGlzdGVuZXJzKCk7XG4gIGl0ZW1FZGl0ZWQuc2V0VGVtcElkKGlkKTtcbiAgY2FuY2VsQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjYW5jZWxFZGl0Rm9ybSk7XG4gIGZvcm1Ub1JlbmRlci5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIHZhbGlkYXRlRWRpdE1vZGFsKTtcbn1cblxuLy9kb2luZyBpdCB0aGUgZWFzeSB3YXkgd2l0aCBmb3JtLmlubmVySFRNTCA9IGBhY3R1YWwgSFRNTGAgd2FzIHdheSBiZXR0ZXIofjQwXG4vL2xpbmVzIHZzIH4xNTAgbGluZXMpLCBidXQgd2hlbiBpIHJlYWxpemVkLCBpIHdhcyB0b28gY29tbWl0dGVkIGFscmVhZHkgaGVuY2Vcbi8vdGhlIGFib21pbmF0aW9uIGJlbG93IHdhcyBjcmVhdGVkXG5mdW5jdGlvbiBuZXdUYXNrTW9kYWxDcmVhdGVFbGVtZW50cygpIHtcbiAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpO1xuICBjb25zdCBoMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgY29uc3QgY29udGFpbmluZ0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgY29uc3QgdGl0bGVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgY29uc3QgdGl0bGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcblxuICBjb25zdCBkZXNjcmlwdGlvbkxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICBjb25zdCBkZXNjcmlwdGlvbklucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRleHRhcmVhXCIpO1xuXG4gIGNvbnN0IGRhdGVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgY29uc3QgZGF0ZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuXG4gIGNvbnN0IGhwUmFkaW9MYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgY29uc3QgaHBSYWRpb0lucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICBjb25zdCBtcFJhZGlvTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gIGNvbnN0IG1wUmFkaW9JbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgY29uc3QgbHBSYWRpb0xhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICBjb25zdCBscFJhZGlvSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG5cbiAgY29uc3QgY29uZmlybUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGNvbnN0IGNhbmNlbEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG5cbiAgLy9BVFRSSUJVVEVTXG4gIGZvcm0uaWQgPSBcIml0ZW0tbW9kYWxcIjtcbiAgaDIudGV4dENvbnRlbnQgPSBcIlByaW9yaXR5OlwiO1xuXG4gIHRpdGxlTGFiZWwudGV4dENvbnRlbnQgPSBcIlRpdGxlOlwiO1xuICB0aXRsZUxhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBcInRpdGxlLWlucHV0XCIpO1xuICB0aXRsZUlucHV0LmlkID0gXCJ0aXRsZS1pbnB1dFwiO1xuICB0aXRsZUlucHV0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJ0ZXh0XCIpO1xuICB0aXRsZUlucHV0LnNldEF0dHJpYnV0ZShcIm1heGxlbmd0aFwiLCBcIjI1XCIpO1xuICB0aXRsZUlucHV0LnNldEF0dHJpYnV0ZShcInJlcXVpcmVkXCIsIFwiXCIpO1xuXG4gIGRlc2NyaXB0aW9uTGFiZWwudGV4dENvbnRlbnQgPSBcIkRlc2NyaXB0aW9uOlwiO1xuICBkZXNjcmlwdGlvbkxhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBcImRlc2NyaXB0aW9uLWlucHV0XCIpO1xuICBkZXNjcmlwdGlvbklucHV0LmlkID0gXCJkZXNjcmlwdGlvbi1pbnB1dFwiO1xuICBkZXNjcmlwdGlvbklucHV0LnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJkZXNjcmlwdGlvbi1pbnB1dFwiKTtcbiAgZGVzY3JpcHRpb25JbnB1dC5zZXRBdHRyaWJ1dGUoXCJjb2xzXCIsIFwiMzBcIik7XG4gIGRlc2NyaXB0aW9uSW5wdXQuc2V0QXR0cmlidXRlKFwicm93c1wiLCBcIjRcIik7XG4gIGRlc2NyaXB0aW9uSW5wdXQuc2V0QXR0cmlidXRlKFwicmVxdWlyZWRcIiwgXCJcIik7XG5cbiAgZGF0ZUxhYmVsLnRleHRDb250ZW50ID0gXCJEYXRlOlwiO1xuICBkYXRlTGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwiZGF0ZS1pbnB1dFwiKTtcbiAgZGF0ZUlucHV0LmlkID0gXCJkYXRlLWlucHV0XCI7XG4gIGRhdGVJbnB1dC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiZGF0ZVwiKTtcbiAgZGF0ZUlucHV0LnNldEF0dHJpYnV0ZShcInJlcXVpcmVkXCIsIFwiXCIpO1xuXG4gIGhwUmFkaW9MYWJlbC50ZXh0Q29udGVudCA9IFwiSGlnaFwiO1xuICBocFJhZGlvTGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwiaGlnaC1wcmlvcml0eVwiKTtcbiAgaHBSYWRpb0lucHV0LmlkID0gXCJoaWdoLXByaW9yaXR5XCI7XG4gIGhwUmFkaW9JbnB1dC5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwicHJpb3JpdHlcIik7XG4gIGhwUmFkaW9JbnB1dC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwicmFkaW9cIik7XG4gIGhwUmFkaW9JbnB1dC5zZXRBdHRyaWJ1dGUoXCJjaGVja2VkXCIsIFwiXCIpO1xuXG4gIG1wUmFkaW9MYWJlbC50ZXh0Q29udGVudCA9IFwiTWVkaXVtXCI7XG4gIG1wUmFkaW9MYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJtZWRpdW0tcHJpb3JpdHlcIik7XG4gIG1wUmFkaW9JbnB1dC5pZCA9IFwibWVkaXVtLXByaW9yaXR5XCI7XG4gIG1wUmFkaW9JbnB1dC5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwicHJpb3JpdHlcIik7XG4gIG1wUmFkaW9JbnB1dC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwicmFkaW9cIik7XG5cbiAgbHBSYWRpb0xhYmVsLnRleHRDb250ZW50ID0gXCJMb3dcIjtcbiAgbHBSYWRpb0xhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBcImxvdy1wcmlvcml0eVwiKTtcbiAgbHBSYWRpb0lucHV0LmlkID0gXCJsb3ctcHJpb3JpdHlcIjtcbiAgbHBSYWRpb0lucHV0LnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJwcmlvcml0eVwiKTtcbiAgbHBSYWRpb0lucHV0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJyYWRpb1wiKTtcblxuICBjb25maXJtQnRuLnRleHRDb250ZW50ID0gXCJDT05GSVJNXCI7XG4gIGNvbmZpcm1CdG4uaWQgPSBcImNvbmZpcm0taXRlbVwiO1xuICBjb25maXJtQnRuLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJzdWJtaXRcIik7XG5cbiAgY2FuY2VsQnRuLnRleHRDb250ZW50ID0gXCJDQU5DRUxcIjtcbiAgY2FuY2VsQnRuLmlkID0gXCJjYW5jZWwtaXRlbVwiO1xuICBjYW5jZWxCdG4uc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImJ1dHRvblwiKTtcblxuICByZXR1cm4ge1xuICAgIGZvcm0sXG4gICAgaDIsXG4gICAgY29udGFpbmluZ0RpdixcbiAgICB0aXRsZUxhYmVsLFxuICAgIHRpdGxlSW5wdXQsXG4gICAgZGVzY3JpcHRpb25MYWJlbCxcbiAgICBkZXNjcmlwdGlvbklucHV0LFxuICAgIGRhdGVMYWJlbCxcbiAgICBkYXRlSW5wdXQsXG4gICAgaHBSYWRpb0xhYmVsLFxuICAgIGhwUmFkaW9JbnB1dCxcbiAgICBtcFJhZGlvTGFiZWwsXG4gICAgbXBSYWRpb0lucHV0LFxuICAgIGxwUmFkaW9MYWJlbCxcbiAgICBscFJhZGlvSW5wdXQsXG4gICAgY29uZmlybUJ0bixcbiAgICBjYW5jZWxCdG4sXG4gIH07XG59XG5cbi8vdGhlIGFib21pbmF0aW9uIHRvIGVuZCBhbGwgYWJvbWluYXRpb25zOlxuLy9hIGxvb3AgY29udGFpbmluZyBhIHN3aXRjaCBzdGF0ZW1lbnQgd2hpY2ggYWxzbyBjb250YWlucyBhbm90aGVyIGxvb3Agd2hpY2ggYWxzb1xuLy9jb250YWlucyBhbm90aGVyIHN3aXRjaCBzdGF0ZW1lbnQuXG4vL2FsbW9zdCBwcm91ZCBvZiBpdCBUQkguXG5mdW5jdGlvbiBuZXdUYXNrUmVuZGVyTG9vcHMobGlzdCkge1xuICBmb3IgKGxldCBpID0gMDsgaSA8IDY7IGkrKykge1xuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgc3dpdGNoIChpKSB7XG4gICAgICBjYXNlIDA6XG4gICAgICAgIGRpdi5hcHBlbmRDaGlsZChsaXN0LnRpdGxlTGFiZWwpO1xuICAgICAgICBkaXYuYXBwZW5kQ2hpbGQobGlzdC50aXRsZUlucHV0KTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDE6XG4gICAgICAgIGRpdi5hcHBlbmRDaGlsZChsaXN0LmRlc2NyaXB0aW9uTGFiZWwpO1xuICAgICAgICBkaXYuYXBwZW5kQ2hpbGQobGlzdC5kZXNjcmlwdGlvbklucHV0KTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDI6XG4gICAgICAgIGRpdi5hcHBlbmRDaGlsZChsaXN0LmRhdGVMYWJlbCk7XG4gICAgICAgIGRpdi5hcHBlbmRDaGlsZChsaXN0LmRhdGVJbnB1dCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSA0OlxuICAgICAgICBjb25zdCB1bCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCAzOyBqKyspIHtcbiAgICAgICAgICBjb25zdCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICAgICAgICBzd2l0Y2ggKGopIHtcbiAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgbGkuaWQgPSBcImhpZ2gtcHJpby1saVwiO1xuICAgICAgICAgICAgICBsaS5hcHBlbmRDaGlsZChsaXN0LmhwUmFkaW9MYWJlbCk7XG4gICAgICAgICAgICAgIGxpLmFwcGVuZENoaWxkKGxpc3QuaHBSYWRpb0lucHV0KTtcbiAgICAgICAgICAgICAgdWwuYXBwZW5kQ2hpbGQobGkpO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgbGkuaWQgPSBcIm1lZGl1bS1wcmlvLWxpXCI7XG4gICAgICAgICAgICAgIGxpLmFwcGVuZENoaWxkKGxpc3QubXBSYWRpb0xhYmVsKTtcbiAgICAgICAgICAgICAgbGkuYXBwZW5kQ2hpbGQobGlzdC5tcFJhZGlvSW5wdXQpO1xuICAgICAgICAgICAgICB1bC5hcHBlbmRDaGlsZChsaSk7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICBsaS5pZCA9IFwibG93LXByaW8tbGlcIjtcbiAgICAgICAgICAgICAgbGkuYXBwZW5kQ2hpbGQobGlzdC5scFJhZGlvTGFiZWwpO1xuICAgICAgICAgICAgICBsaS5hcHBlbmRDaGlsZChsaXN0LmxwUmFkaW9JbnB1dCk7XG4gICAgICAgICAgICAgIHVsLmFwcGVuZENoaWxkKGxpKTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGRpdi5hcHBlbmRDaGlsZCh1bCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSA1OlxuICAgICAgICBkaXYuYXBwZW5kQ2hpbGQobGlzdC5jb25maXJtQnRuKTtcbiAgICAgICAgZGl2LmFwcGVuZENoaWxkKGxpc3QuY2FuY2VsQnRuKTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICAgIGxpc3QuZm9ybS5hcHBlbmRDaGlsZChkaXYpO1xuICB9XG4gIHJldHVybiBsaXN0LmZvcm07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm9qZWN0TW9kYWxDcmVhdGVFbGVtZW50KCkge1xuICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIik7XG4gIGZvcm0uaWQgPSBcInByb2plY3QtbW9kYWxcIjtcbiAgLy9haW4ndCBkb2luZyB0aGUgc2FtZSBjcmFwIHR3aWNlXG4gIGZvcm0uaW5uZXJIVE1MID0gYFxuICAgIDxsYWJlbCBmb3I9XCJwcm9qZWN0LW5hbWVcIj5Qcm9qZWN0IG5hbWU6PC9sYWJlbD5cbiAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cInByb2plY3QtbmFtZVwiIG1heGxlbmd0aD1cIjE1XCIgcmVxdWlyZWQgLz5cbiAgICA8ZGl2PlxuICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgaWQ9XCJjb25maXJtLXByb2plY3RcIj5DT05GSVJNPC9idXR0b24+XG4gICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBpZD1cImNhbmNlbC1wcm9qZWN0XCI+Q0FOQ0VMPC9idXR0b24+XG4gICAgPC9kaXY+YDtcblxuICAvL2NlbnRlciBlbGVtZW50IHdpdGhvdXQga25vd2luZyBpdHMgd2lkdGgocG9zOiBhYnNvbHV0ZSAmIGxlZnQ6IDUwJSlcbiAgZm9ybS5zdHlsZS5tYXJnaW5MZWZ0ID0gYC0ke2Zvcm0ub2Zmc2V0V2lkdGggLyAyfXB4YDtcblxuICByZXR1cm4gZm9ybTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG5ld1Byb2plY3RNb2RhbFJlbmRlcigpIHtcbiAgY29uc3QgZm9ybSA9IHByb2plY3RNb2RhbENyZWF0ZUVsZW1lbnQoKTtcblxuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZm9ybSk7XG5cbiAgY29uc3QgY2FuY2VsQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYW5jZWwtcHJvamVjdFwiKTtcblxuICByZW1vdmVJcnJlbGV2YW50RXZlbnRMaXN0ZW5lcnMoKTtcbiAgY2FuY2VsQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjYW5jZWxOZXdGb3JtKTtcbiAgZm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIHZhbGlkYXRlTmV3TW9kYWwpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZWRpdFByb2plY3RNb2RhbFJlbmRlcigpIHtcbiAgY29uc3QgZm9ybSA9IHByb2plY3RNb2RhbENyZWF0ZUVsZW1lbnQoKTtcbiAgY29uc3QgcHJvamVjdCA9IHdoaWNoSXNBY3RpdmUoY3VycmVudFByb2plY3RzTGlzdCk7XG5cbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKGZvcm0pO1xuXG4gIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0LW5hbWVcIik7XG4gIGNvbnN0IGNhbmNlbEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2FuY2VsLXByb2plY3RcIik7XG5cbiAgaXRlbUVkaXRlZC5zZXRUZW1wSWQocHJvamVjdC5pZCk7XG4gIHRpdGxlLnZhbHVlID0gcHJvamVjdC50aXRsZTtcblxuICByZW1vdmVJcnJlbGV2YW50RXZlbnRMaXN0ZW5lcnMoKTtcbiAgY2FuY2VsQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjYW5jZWxFZGl0Rm9ybSk7XG4gIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCB2YWxpZGF0ZUVkaXRNb2RhbCk7XG59XG4iLCJpbXBvcnQgeyByZWluc3RhdGVFdmVudExpc3RlbmVycyB9IGZyb20gXCIuL2V2ZW50TGlzdGVuZXJzTWFuYWdlclwiO1xuaW1wb3J0IHtcbiAgY29uZmlybU5ld1Rhc2ssXG4gIGNvbmZpcm1FZGl0VGFzayxcbiAgY29uZmlybU5ld1Byb2plY3QsXG4gIGNvbmZpcm1FZGl0UHJvamVjdCxcbn0gZnJvbSBcIi4vbW9kYWxBcHBsaWNhdGlvblwiO1xuXG5leHBvcnQgZnVuY3Rpb24gdmFsaWRhdGVOZXdNb2RhbChlKSB7XG4gIGUucHJldmVudERlZmF1bHQoKTtcbiAgaWYgKGUudGFyZ2V0LmNoZWNrVmFsaWRpdHkoKSkge1xuICAgIGlmIChlLnRhcmdldC5pZCA9PT0gXCJpdGVtLW1vZGFsXCIpIHtcbiAgICAgIGNvbmZpcm1OZXdUYXNrKCk7XG4gICAgfSBlbHNlIGlmIChlLnRhcmdldC5pZCA9PT0gXCJwcm9qZWN0LW1vZGFsXCIpIHtcbiAgICAgIGNvbmZpcm1OZXdQcm9qZWN0KCk7XG4gICAgfVxuICAgIHJlaW5zdGF0ZUV2ZW50TGlzdGVuZXJzKCk7XG4gIH1cbn1cbmV4cG9ydCBmdW5jdGlvbiB2YWxpZGF0ZUVkaXRNb2RhbChlKSB7XG4gIGUucHJldmVudERlZmF1bHQoKTtcbiAgaWYgKGUudGFyZ2V0LmNoZWNrVmFsaWRpdHkoKSkge1xuICAgIGlmIChlLnRhcmdldC5pZCA9PT0gXCJpdGVtLW1vZGFsXCIpIHtcbiAgICAgIGNvbmZpcm1FZGl0VGFzaygpO1xuICAgIH0gZWxzZSBpZiAoZS50YXJnZXQuaWQgPT09IFwicHJvamVjdC1tb2RhbFwiKSB7XG4gICAgICBjb25maXJtRWRpdFByb2plY3QoKTtcbiAgICB9XG4gICAgcmVpbnN0YXRlRXZlbnRMaXN0ZW5lcnMoKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gY2FuY2VsTmV3Rm9ybShlKSB7XG4gIGNvbnN0IGZvcm0gPSBlLnRhcmdldC5wYXJlbnROb2RlLnBhcmVudE5vZGU7XG4gIGZvcm0ucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCB2YWxpZGF0ZU5ld01vZGFsKTtcblxuICByZWluc3RhdGVFdmVudExpc3RlbmVycygpO1xuXG4gIGUudGFyZ2V0LnBhcmVudE5vZGUucGFyZW50Tm9kZS5yZW1vdmUoKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNhbmNlbEVkaXRGb3JtKGUpIHtcbiAgY29uc3QgZm9ybSA9IGUudGFyZ2V0LnBhcmVudE5vZGUucGFyZW50Tm9kZTtcbiAgZm9ybS5yZW1vdmVFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIHZhbGlkYXRlRWRpdE1vZGFsKTtcblxuICByZWluc3RhdGVFdmVudExpc3RlbmVycygpO1xuXG4gIGZvcm0ucmVtb3ZlKCk7XG59XG4iLCJpbXBvcnQgZWRpdFNtYWxsU1ZHIGZyb20gXCIuLi9pbWFnZXMvZWRpdC1zbWFsbC5zdmdcIjtcbmltcG9ydCBoaWRlU1ZHIGZyb20gXCIuLi9pbWFnZXMvaGlkZS5zdmdcIjtcbmltcG9ydCBzaGVldFN0YWNrU1ZHIGZyb20gXCIuLi9pbWFnZXMvc3RhY2stb2Ytc2hlZXRzLnN2Z1wiO1xuaW1wb3J0IGRlbGV0ZVNWRyBmcm9tIFwiLi4vaW1hZ2VzL2RlbGV0ZS5zdmdcIjtcbmltcG9ydCBlZGl0QmlnU1ZHIGZyb20gXCIuLi9pbWFnZXMvZWRpdC1iaWcuc3ZnXCI7XG5pbXBvcnQgbWVudVNWRyBmcm9tIFwiLi4vaW1hZ2VzL21lbnUuc3ZnXCI7XG5cbmltcG9ydCB7XG4gIGVkaXRUYXNrTW9kYWxSZW5kZXIsXG4gIG5ld1Byb2plY3RNb2RhbFJlbmRlcixcbiAgZWRpdFByb2plY3RNb2RhbFJlbmRlcixcbn0gZnJvbSBcIi4vbW9kYWxSZW5kZXJcIjtcbmltcG9ydCB7XG4gIHdoaWNoSXNBY3RpdmUsXG4gIGhpZGVTaWRlYmFyLFxuICBzaG93U2lkZWJhcixcbiAgcmVuZGVyTWFpbixcbiAgc2V0UHJpb3JpdHksXG4gIGRlbGV0ZUl0ZW0sXG4gIHNldENvbXBsZXRlT3B0aW9uLFxuICBjaGFuZ2VDb21wbGV0ZU9wdGlvbixcbiAgZGVhY3RpdmF0ZUFsbFByb2plY3RzLFxuICBzaG93R3JvdXAsXG4gIGRlbGV0ZVByb2plY3QsXG59IGZyb20gXCIuL2xvYWRET01jcmFwXCI7XG5pbXBvcnQgeyBjdXJyZW50UHJvamVjdHNMaXN0IH0gZnJvbSBcIi4vbG9jYWxTdG9yYWdlXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJTaWRlYmFyKCkge1xuICBjb25zdCBzaWRlYmFyUmVuZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3Qgc2lkZWJhckljb25zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgbmV3UHJvamVjdEJ0blJlbmRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGNvbnN0IHByb2plY3RMaXN0VGl0bGVSZW5kZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gIGNvbnN0IHByb2plY3RVbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcbiAgY29uc3QgZHluYW1pY1VsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xuICBjb25zdCBkeW5hbWljVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gIGNvbnN0IGhpZGVJbWcgPSBuZXcgSW1hZ2UoKTtcbiAgY29uc3Qgc2hlZXRTdGFja0ltZyA9IG5ldyBJbWFnZSgpO1xuXG4gIHNpZGViYXJSZW5kZXIuaWQgPSBcInByb2plY3RzXCI7XG4gIHNpZGViYXJJY29ucy5pZCA9IFwiaWNvbnNcIjtcbiAgbmV3UHJvamVjdEJ0blJlbmRlci5pZCA9IFwibmV3LXByb2plY3QtYnRuXCI7XG4gIHByb2plY3RVbC5pZCA9IFwicHJvamVjdHMtdWxcIjtcbiAgZHluYW1pY1VsLmlkID0gXCJkeW5hbWljLXVsXCI7XG4gIGR5bmFtaWNUaXRsZS5pZCA9IFwiZHluYW1pYy1oMlwiO1xuICBoaWRlSW1nLmlkID0gXCJoaWRlLWljb25cIjtcbiAgaGlkZUltZy5zcmMgPSBoaWRlU1ZHO1xuICBzaGVldFN0YWNrSW1nLnNyYyA9IHNoZWV0U3RhY2tTVkc7XG5cbiAgbmV3UHJvamVjdEJ0blJlbmRlci50ZXh0Q29udGVudCA9IFwiQ1JFQVRFIE5FVyBQUk9KRUNUXCI7XG4gIHByb2plY3RMaXN0VGl0bGVSZW5kZXIudGV4dENvbnRlbnQgPSBcIllvdXIgcHJvamVjdHM6XCI7XG4gIGR5bmFtaWNUaXRsZS50ZXh0Q29udGVudCA9IFwiRHluYW1pY2FsbHkgZ3JvdXBlZCB0YXNrc1wiO1xuXG4gIHNpZGViYXJJY29ucy5hcHBlbmRDaGlsZChzaGVldFN0YWNrSW1nKTtcbiAgc2lkZWJhckljb25zLmFwcGVuZENoaWxkKGhpZGVJbWcpO1xuXG4gIHJlbmRlclByb2plY3RVbChwcm9qZWN0VWwpO1xuICByZW5kZXJEeW5hbWljVWwoZHluYW1pY1VsKTtcblxuICBzaWRlYmFyUmVuZGVyLmFwcGVuZENoaWxkKHNpZGViYXJJY29ucyk7XG4gIHNpZGViYXJSZW5kZXIuYXBwZW5kQ2hpbGQoZHluYW1pY1RpdGxlKTtcbiAgc2lkZWJhclJlbmRlci5hcHBlbmRDaGlsZChkeW5hbWljVWwpO1xuICBzaWRlYmFyUmVuZGVyLmFwcGVuZENoaWxkKG5ld1Byb2plY3RCdG5SZW5kZXIpO1xuICBzaWRlYmFyUmVuZGVyLmFwcGVuZENoaWxkKHByb2plY3RMaXN0VGl0bGVSZW5kZXIpO1xuICBzaWRlYmFyUmVuZGVyLmFwcGVuZENoaWxkKHByb2plY3RVbCk7XG5cbiAgbmV3UHJvamVjdEJ0blJlbmRlci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgbmV3UHJvamVjdE1vZGFsUmVuZGVyKTtcbiAgaGlkZUltZy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgaGlkZVNpZGViYXIpO1xuXG4gIHJldHVybiBzaWRlYmFyUmVuZGVyO1xufVxuXG5mdW5jdGlvbiByZW5kZXJQcm9qZWN0VWwobGlzdCkge1xuICBpZiAoY3VycmVudFByb2plY3RzTGlzdC5jb250ZW50Lmxlbmd0aCA+IDApIHtcbiAgICB3aGljaElzQWN0aXZlKGN1cnJlbnRQcm9qZWN0c0xpc3QpO1xuICAgIGZvciAoY29uc3QgcHJvamVjdCBvZiBjdXJyZW50UHJvamVjdHNMaXN0LmNvbnRlbnQpIHtcbiAgICAgIGNvbnN0IGxpID0gcmVuZGVyU2luZ2xlUHJvamVjdChwcm9qZWN0KTtcbiAgICAgIGxpc3QuYXBwZW5kQ2hpbGQobGkpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiByZW5kZXJEeW5hbWljVWwodWwpIHtcbiAgY29uc3QgbmV4dFdlZWsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gIGNvbnN0IGhpZ2hQcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgY29uc3QgbWVkaXVtUHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gIGNvbnN0IGxvd1ByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuXG4gIG5leHRXZWVrLmlkID0gXCJuZXh0LXdlZWtcIjtcbiAgaGlnaFByaW9yaXR5LmlkID0gXCJkaHBcIjtcbiAgbWVkaXVtUHJpb3JpdHkuaWQgPSBcImRtcFwiO1xuICBsb3dQcmlvcml0eS5pZCA9IFwiZGxwXCI7XG4gIGhpZ2hQcmlvcml0eS5jbGFzc05hbWUgPSBcInByaW9yaXR5LWdyb3VwXCI7XG4gIG1lZGl1bVByaW9yaXR5LmNsYXNzTmFtZSA9IFwicHJpb3JpdHktZ3JvdXBcIjtcbiAgbG93UHJpb3JpdHkuY2xhc3NOYW1lID0gXCJwcmlvcml0eS1ncm91cFwiO1xuXG4gIG5leHRXZWVrLnRleHRDb250ZW50ID0gXCJEdWUgdGhpcyB3ZWVrXCI7XG4gIGhpZ2hQcmlvcml0eS50ZXh0Q29udGVudCA9IFwiSGlnaCBwcmlvcml0eVwiO1xuICBtZWRpdW1Qcmlvcml0eS50ZXh0Q29udGVudCA9IFwiTWVkaXVtIHByaW9yaXR5XCI7XG4gIGxvd1ByaW9yaXR5LnRleHRDb250ZW50ID0gXCJMb3cgcHJpb3JpdHlcIjtcblxuICB1bC5hcHBlbmRDaGlsZChuZXh0V2Vlayk7XG4gIHVsLmFwcGVuZENoaWxkKGhpZ2hQcmlvcml0eSk7XG4gIHVsLmFwcGVuZENoaWxkKG1lZGl1bVByaW9yaXR5KTtcbiAgdWwuYXBwZW5kQ2hpbGQobG93UHJpb3JpdHkpO1xuXG4gIEFycmF5LmZyb20odWwuY2hpbGROb2RlcykuZm9yRWFjaCgoZSkgPT4ge1xuICAgIGUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGRlYWN0aXZhdGVBbGxQcm9qZWN0cyk7XG4gICAgZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgc2hvd0dyb3VwKTtcbiAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJTaW5nbGVQcm9qZWN0KHByb2plY3QpIHtcbiAgY29uc3QgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gIGNvbnN0IGRlbGV0ZUJ0biA9IG5ldyBJbWFnZSgpO1xuXG4gIGxpLnRleHRDb250ZW50ID0gYCR7cHJvamVjdC50aXRsZX1gO1xuICBkZWxldGVCdG4uc3JjID0gZGVsZXRlU1ZHO1xuICBkZWxldGVCdG4uY2xhc3NOYW1lID0gXCJkZWxldGUtcHJvamVjdFwiO1xuXG4gIGlmICghcHJvamVjdC5pZCkge1xuICAgIGN1cnJlbnRQcm9qZWN0c0xpc3QuY2hlY2tEdXBsaWNhdGVQcm9qZWN0KHByb2plY3QpO1xuICB9XG4gIGxpLmlkID0gcHJvamVjdC5pZDtcbiAgbGkuYXBwZW5kQ2hpbGQoZGVsZXRlQnRuKTtcblxuICBkZWxldGVCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGRlbGV0ZVByb2plY3QpO1xuICBsaS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2hhbmdlQWN0aXZlUHJvamVjdCk7XG5cbiAgaWYgKHByb2plY3QuYWN0aXZlKSB7XG4gICAgbGkuY2xhc3NOYW1lID0gXCJhY3RpdmVcIjtcbiAgfSBlbHNlIHtcbiAgICBsaS5jbGFzc05hbWUgPSBcIlwiO1xuICB9XG4gIHJldHVybiBsaTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNoYW5nZUFjdGl2ZVByb2plY3QoZSkge1xuICBjb25zdCBwcm9qZWN0VWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3RzLXVsXCIpO1xuICBjb25zdCBkeW5hbWljR3JvdXAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImR5bmFtaWMtdWxcIik7XG4gIGNvbnN0IGxhdGVNYWluID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluXCIpO1xuXG4gIEFycmF5LmZyb20ocHJvamVjdFVsLmNoaWxkTm9kZXMpLmZvckVhY2goKGVsKSA9PiB7XG4gICAgaWYgKGUudGFyZ2V0ICE9PSBlbCkge1xuICAgICAgZWwuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZWwuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbiAgICB9XG4gIH0pO1xuXG4gIEFycmF5LmZyb20oZHluYW1pY0dyb3VwLmNoaWxkcmVuKS5mb3JFYWNoKChlbCkgPT4ge1xuICAgIGVsLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gIH0pO1xuXG4gIGZvciAoY29uc3QgcHJvaiBvZiBjdXJyZW50UHJvamVjdHNMaXN0LmNvbnRlbnQpIHtcbiAgICBpZiAocHJvai5pZCA9PT0gZS50YXJnZXQuaWQgJiYgIXByb2ouYWN0aXZlKSB7XG4gICAgICBjdXJyZW50UHJvamVjdHNMaXN0LnNldEluYWN0aXZlUHJvamVjdHMoKTtcbiAgICAgIGN1cnJlbnRQcm9qZWN0c0xpc3Quc2V0QWN0aXZlUHJvamVjdChwcm9qKTtcbiAgICB9XG4gIH1cblxuICBjb25zdCBhY3RpdmVQcm9qZWN0ID0gd2hpY2hJc0FjdGl2ZShjdXJyZW50UHJvamVjdHNMaXN0KTtcblxuICBsYXRlTWFpbi5yZW1vdmUoKTtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKHJlbmRlck1haW4oYWN0aXZlUHJvamVjdC5jb250ZW50LCBhY3RpdmVQcm9qZWN0LnRpdGxlKSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJUb3BDb250ZW50KHByb2plY3RUaXRsZSkge1xuICBjb25zdCBuZXdUb3BTZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG5cbiAgY29uc3QgZWRpdFByb2plY3RJbWcgPSBuZXcgSW1hZ2UoKTtcbiAgY29uc3Qgc2hvd0ltZyA9IG5ldyBJbWFnZSgpO1xuXG4gIG5ld1RvcFNlY3Rpb24uaWQgPSBcImFjdGl2ZS1wcm9qZWN0XCI7XG4gIGVkaXRQcm9qZWN0SW1nLmlkID0gXCJlZGl0LXByb2plY3RcIjtcbiAgc2hvd0ltZy5pZCA9IFwibWVudS1pY29uXCI7XG5cbiAgdGl0bGUudGV4dENvbnRlbnQgPSBwcm9qZWN0VGl0bGU7XG4gIGVkaXRQcm9qZWN0SW1nLnNyYyA9IGVkaXRCaWdTVkc7XG4gIHNob3dJbWcuc3JjID0gbWVudVNWRztcblxuICBuZXdUb3BTZWN0aW9uLmFwcGVuZENoaWxkKHNob3dJbWcpO1xuICBuZXdUb3BTZWN0aW9uLmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgbmV3VG9wU2VjdGlvbi5hcHBlbmRDaGlsZChlZGl0UHJvamVjdEltZyk7XG5cbiAgc2hvd0ltZy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgc2hvd1NpZGViYXIpO1xuICBpZiAoY3VycmVudFByb2plY3RzTGlzdC5jb250ZW50Lmxlbmd0aCA+IDApIHtcbiAgICBlZGl0UHJvamVjdEltZy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZWRpdFByb2plY3RNb2RhbFJlbmRlcik7XG4gIH1cblxuICByZXR1cm4gbmV3VG9wU2VjdGlvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlclNpbmdsZVRhc2sodGFzaykge1xuICBjb25zdCBpdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGRhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBwcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGNvbXBsZXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgZWRpdEJ0biA9IG5ldyBJbWFnZSgpO1xuICBjb25zdCBkZWxldGVCdG4gPSBuZXcgSW1hZ2UoKTtcbiAgY29uc3QgY29tcGxldGVCdG4gPSBuZXcgSW1hZ2UoKTtcblxuICBpdGVtLmNsYXNzTmFtZSA9IFwiaXRlbVwiO1xuICB0aXRsZS5jbGFzc05hbWUgPSBcInRpdGxlXCI7XG4gIGRlc2NyaXB0aW9uLmNsYXNzTmFtZSA9IFwiZGVzY3JpcHRpb25cIjtcbiAgZGF0ZS5jbGFzc05hbWUgPSBcImRhdGVcIjtcbiAgcHJpb3JpdHkuY2xhc3NOYW1lID0gXCJwcmlvcml0eVwiO1xuICBjb21wbGV0ZS5jbGFzc05hbWUgPSBcImNvbXBsZXRlXCI7XG5cbiAgZWRpdEJ0bi5jbGFzc05hbWUgPSBcImVkaXQtaXRlbVwiO1xuICBkZWxldGVCdG4uY2xhc3NOYW1lID0gXCJkZWxldGUtaXRlbVwiO1xuICBjb21wbGV0ZUJ0bi5jbGFzc05hbWUgPSBcImNvbXBsZXRlLWJ0blwiO1xuXG4gIGVkaXRCdG4uc3JjID0gZWRpdFNtYWxsU1ZHO1xuICBkZWxldGVCdG4uc3JjID0gZGVsZXRlU1ZHO1xuICBpZiAoIXRhc2suaWQpIHtcbiAgICBjdXJyZW50UHJvamVjdHNMaXN0LmNoZWNrRHVwbGljYXRlSXRlbSh0YXNrKTtcbiAgfVxuICBpdGVtLmlkID0gdGFzay5pZDtcblxuICB0aXRsZS50ZXh0Q29udGVudCA9IHRhc2sudGl0bGU7XG4gIGRlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gdGFzay5kZXNjcmlwdGlvbjtcbiAgZGF0ZS50ZXh0Q29udGVudCA9IHRhc2suZGF0ZTtcbiAgY29tcGxldGUudGV4dENvbnRlbnQgPSBcIkNvbXBsZXRlOlwiO1xuXG4gIHNldFByaW9yaXR5KHByaW9yaXR5LCB0YXNrKTtcbiAgc2V0Q29tcGxldGVPcHRpb24odGFzaywgY29tcGxldGVCdG4pO1xuICBjb21wbGV0ZS5hcHBlbmRDaGlsZChjb21wbGV0ZUJ0bik7XG5cbiAgaXRlbS5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gIGl0ZW0uYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pO1xuICBpdGVtLmFwcGVuZENoaWxkKGRhdGUpO1xuICBpdGVtLmFwcGVuZENoaWxkKHByaW9yaXR5KTtcbiAgaXRlbS5hcHBlbmRDaGlsZChjb21wbGV0ZSk7XG5cbiAgaXRlbS5hcHBlbmRDaGlsZChlZGl0QnRuKTtcbiAgaXRlbS5hcHBlbmRDaGlsZChkZWxldGVCdG4pO1xuXG4gIGVkaXRCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGVkaXRUYXNrTW9kYWxSZW5kZXIpO1xuICBkZWxldGVCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGRlbGV0ZUl0ZW0pO1xuICBjb21wbGV0ZUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2hhbmdlQ29tcGxldGVPcHRpb24pO1xuXG4gIHJldHVybiBpdGVtO1xufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgeyByZW5kZXJDb250YWluZXIgfSBmcm9tIFwiLi9tb2R1bGVzL2xvYWRET01jcmFwLmpzXCI7XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCByZW5kZXJDb250YWluZXIoKSk7XG4vKiBcblRPIERPOlxuLWxvY2FsIHN0b3JhZ2U7XG4qL1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9