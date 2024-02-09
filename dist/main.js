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

#confirm-item {
  width: 80%;
  padding: 0.5rem;
  font-size: 1.2rem;
  background: linear-gradient(#b7b7b7, #fff);
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
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

#confirm-project {
  display: block;
  padding: 0.5rem 2rem;
  font-size: 1.2rem;
  background: linear-gradient(45deg, #b0b0b0, #e2e2e2);
  border: none;
  border-radius: 0.5rem;
  margin: 0 auto;
  cursor: pointer;
}

.color {
  background-color: #00c703;
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["* {\n  margin: 0;\n  box-sizing: border-box;\n  font-family: system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto,\n    Oxygen, Ubuntu, Cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif;\n  text-align: center;\n}\n\n#container {\n  display: flex;\n  align-items: stretch;\n  width: 100%;\n  height: 100vh;\n  position: relative;\n  background: #5e5e5e;\n}\n\n/* \n\n  PROJECTS SIDEBAR\n\n*/\n\n#projects {\n  background: #979797;\n  padding: 1rem;\n  font-size: 1.2rem;\n  border-right: 2px solid #00078d;\n  padding: 1rem;\n  z-index: 2;\n  position: relative;\n  width: 300px;\n  overflow-x: hidden;\n}\n\n#projects.visible {\n  animation: show 0.5s;\n  width: 300px;\n  position: relative;\n}\n\n#projects.hidden {\n  position: absolute;\n  left: -300px;\n  height: 100vh;\n  animation: hide 0.5s;\n}\n\n#hide-icon {\n  cursor: pointer;\n}\n\n#new-project-btn {\n  width: 100%;\n  padding: 0.5rem 0;\n  background: radial-gradient(#506965, #005b9c);\n  color: #fff;\n  border: 3px solid #007d0c;\n  border-radius: 0.2rem;\n  margin: 1rem 0 0 0;\n  cursor: pointer;\n}\n\n#icons {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  height: 100px;\n}\n\n#projects h2 {\n  font-size: 1.3rem;\n  margin: 1rem 0;\n}\n\n#projects li:hover {\n  background: #626262;\n  color: #fff;\n}\n\n#projects-ul,\n#dynamic-ul {\n  padding-left: 0;\n}\n\n#projects-ul > li,\n#dynamic-ul > li {\n  cursor: pointer;\n  position: relative;\n}\n\n#projects-ul > li::marker {\n  content: \"#\";\n  color: #000ac4;\n}\n\n#dynamic-ul > li::marker {\n  color: #000ac4;\n  content: \"o\";\n}\n\n#projects-ul > li.active,\n#dynamic-ul > li.active {\n  border: 3px double #75ff4b;\n}\n\n#projects-ul > li.active::marker,\n#dynamic-ul > li.active::marker {\n  color: #75ff4b;\n}\n\n.delete-project {\n  position: absolute;\n  right: 2.4px;\n  background: #ff2020;\n  height: 100%;\n}\n#projects-ul > li.active > .delete-project {\n  right: 0;\n}\n\n@keyframes show {\n  0% {\n    left: -300px;\n  }\n  100% {\n    left: 0;\n  }\n}\n\n@keyframes hide {\n  0% {\n    left: 0;\n  }\n  100% {\n    left: -300px;\n  }\n}\n\n/* \n\nMAIN SECTION\n\n*/\n\n#main {\n  flex-grow: 1;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-around;\n  align-content: safe center;\n  gap: 1rem;\n  position: relative;\n  padding: 25px;\n  overflow-y: auto;\n  margin-top: 100px;\n}\n\n#add-item {\n  position: fixed;\n  bottom: 2rem;\n  left: 50%;\n  cursor: pointer;\n  z-index: 1;\n}\n\n.item {\n  border-radius: 0.5rem;\n  width: 300px;\n  height: 300px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: stretch;\n  position: relative;\n  box-shadow: 0 0 5px #000;\n  background: radial-gradient(#3d3d3d, #506965);\n  padding: 20px;\n}\n\n.item:hover {\n  transform: scale(1.05, 1.05);\n}\n\n.item > div {\n  background: radial-gradient(#e7e7e7, #bababa);\n  padding: 0.3rem 1rem;\n  box-shadow: 0 0 3px #000;\n}\n\n.item > div:nth-child(2) {\n  text-align: center;\n  overflow-y: auto;\n}\n\n.edit-item,\n.delete-item {\n  position: absolute;\n  top: 0;\n  cursor: pointer;\n  border-radius: 0.5rem;\n  box-shadow: 0 0 3px #000;\n}\n\n.edit-item {\n  left: 0;\n  background: #6081dc;\n}\n\n.edit-item:active,\n.delete-item:active {\n  box-shadow: inset 0 0 3px #000;\n}\n\n.delete-item {\n  right: 0;\n  background: #ff2020;\n}\n\n.complete {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.complete-btn {\n  cursor: pointer;\n  border-radius: 50%;\n}\n\n.complete-btn.fade-out {\n  animation: fade-out 0.5s linear;\n  opacity: 0;\n}\n\n@keyframes fade-out {\n  0% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0;\n  }\n}\n\n.complete-btn.fade-in {\n  animation: fade-in 0.5s linear;\n  opacity: 1;\n}\n\n@keyframes fade-in {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n\n#active-project {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  background: linear-gradient(#3d3d3d, #2a2f96);\n  color: #fff;\n  z-index: 1;\n}\n\n#menu-icon,\n#edit-project {\n  cursor: pointer;\n  border-radius: 0.5rem;\n  background: linear-gradient(#2a2f96, #3d3d3d);\n}\n\n#sheet-stack {\n  cursor: pointer;\n}\n\n/* \n\nITEM MODAL\n\n*/\n\n#item-modal {\n  display: flex;\n  position: absolute;\n  width: 70%;\n  min-height: 60%;\n  top: 20%;\n  left: 15%;\n  border-radius: 2rem;\n  padding: 1.5rem;\n  text-align: center;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: stretch;\n  background: radial-gradient(#3d3d3d, #2a2f96);\n  box-shadow: 0.5rem 0.5rem 1rem -0.5rem #000;\n  z-index: 10;\n}\n\n#item-modal > div {\n  margin-bottom: 0.8rem;\n}\n\n#item-modal ul {\n  display: flex;\n  gap: 0.5rem;\n  justify-content: space-between;\n}\n\nlabel {\n  font-size: 1.2rem;\n}\n\ndiv > label {\n  display: block;\n  margin-bottom: 0.5rem;\n  color: #fff;\n}\n\n#item-modal li {\n  list-style-type: none;\n  display: flex;\n  justify-content: space-between;\n  border-radius: 0.5rem;\n  margin: 0.4rem 0;\n  padding: 0.5rem;\n  width: 25%;\n}\n\n#high-prio-li {\n  background-color: #ff3434;\n}\n\n#medium-prio-li {\n  background-color: #ffe033;\n}\n\n#low-prio-li {\n  background-color: #6aff2a;\n}\n\n#item-modal ul {\n  padding: 0;\n}\n\ntextarea {\n  resize: none;\n}\n\ninput[type=\"text\"],\ntextarea {\n  width: 80%;\n}\n\ninput:not(input[type=\"radio\"]),\ntextarea {\n  font-size: 1rem;\n  border-radius: 0.3rem;\n  box-shadow: 0 0.3rem 1rem -0.3rem #4a4a4a;\n  border: none;\n}\n\n#confirm-item {\n  width: 80%;\n  padding: 0.5rem;\n  font-size: 1.2rem;\n  background: linear-gradient(#b7b7b7, #fff);\n  border: none;\n  border-radius: 0.5rem;\n  cursor: pointer;\n}\n\n/* \n\nPROJECT MODAL\n\n*/\n\n#project-modal {\n  position: absolute;\n  top: 30%;\n  left: 50%;\n  background: radial-gradient(#3d3d3d, #2a2f96);\n  box-shadow: 0.5rem 0.5rem 1rem -0.5rem #000;\n  border-radius: 2rem;\n  padding: 1rem;\n}\n\n#project-modal > * {\n  margin: 1rem 0;\n}\n\n#project-modal > label {\n  color: #fff;\n}\n\n#confirm-project {\n  display: block;\n  padding: 0.5rem 2rem;\n  font-size: 1.2rem;\n  background: linear-gradient(45deg, #b0b0b0, #e2e2e2);\n  border: none;\n  border-radius: 0.5rem;\n  margin: 0 auto;\n  cursor: pointer;\n}\n\n.color {\n  background-color: #00c703;\n}\n"],"sourceRoot":""}]);
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
/* harmony import */ var _internalLogic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internalLogic */ "./src/modules/internalLogic.js");
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

  if (_internalLogic__WEBPACK_IMPORTED_MODULE_0__.currentProjectsList.content.length > 0) {
    (0,_loadDOMcrap__WEBPACK_IMPORTED_MODULE_2__.whichIsActive)(_internalLogic__WEBPACK_IMPORTED_MODULE_0__.currentProjectsList);
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

  if (_internalLogic__WEBPACK_IMPORTED_MODULE_0__.currentProjectsList.content.length > 0) {
    (0,_loadDOMcrap__WEBPACK_IMPORTED_MODULE_2__.whichIsActive)(_internalLogic__WEBPACK_IMPORTED_MODULE_0__.currentProjectsList);

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

/***/ "./src/modules/internalLogic.js":
/*!**************************************!*\
  !*** ./src/modules/internalLogic.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Project: () => (/* binding */ Project),
/* harmony export */   ProjectsArr: () => (/* binding */ ProjectsArr),
/* harmony export */   Task: () => (/* binding */ Task),
/* harmony export */   TemporaryId: () => (/* binding */ TemporaryId),
/* harmony export */   currentProjectsList: () => (/* binding */ currentProjectsList)
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

const currentProjectsList = new ProjectsArr();

/* 

  --TESTS--

*/

/* const work = new Project("Work");
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
misc.addNewItem(misc3); */


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
/* harmony import */ var _internalLogic__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./internalLogic */ "./src/modules/internalLogic.js");
/* harmony import */ var _renderSingleEl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./renderSingleEl */ "./src/modules/renderSingleEl.js");
/* harmony import */ var _modalRender__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modalRender */ "./src/modules/modalRender.js");











const container = document.getElementById("container");
const head = document.getElementsByTagName("head");
const faviconIcon = document.createElement("link");
const faviconMask = document.createElement("link");

faviconIcon.rel = "icon";
faviconIcon.href = _images_stack_of_sheets_svg__WEBPACK_IMPORTED_MODULE_4__;

faviconMask.rel = "mask-icon";
faviconMask.href = _images_stack_of_sheets_svg__WEBPACK_IMPORTED_MODULE_4__;
faviconMask.color = "#3443ae";
/* 
<link rel="icon" href="../src/images/stack-of-sheets.svg" />
<link
  rel="”mask-icon”"
  href="../src/images/stack-of-sheets.svg"
  color="#3443ae"
/>
*/

const itemEdited = new _internalLogic__WEBPACK_IMPORTED_MODULE_5__.TemporaryId("");

function renderContainer() {
  const sidebarRendered = (0,_renderSingleEl__WEBPACK_IMPORTED_MODULE_6__.renderSidebar)();
  const activeProject = whichIsActive(_internalLogic__WEBPACK_IMPORTED_MODULE_5__.currentProjectsList) || new _internalLogic__WEBPACK_IMPORTED_MODULE_5__.Project("");
  const main = renderMain(activeProject.content, activeProject.title);

  container.appendChild(sidebarRendered);
  container.appendChild(main);
}

function renderMain(group, title) {
  const newMain = document.createElement("div");
  const topContent = (0,_renderSingleEl__WEBPACK_IMPORTED_MODULE_6__.renderTopContent)(title);
  const addItemImg = new Image();

  newMain.id = "main";

  renderTasks(group, newMain); //activeProject

  addItemImg.id = "add-item";
  addItemImg.src = _images_add_svg__WEBPACK_IMPORTED_MODULE_1__;
  addItemImg.style.marginLeft = `${-(addItemImg.offsetWidth / 2)}px`;

  newMain.appendChild(addItemImg);
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
  if (_internalLogic__WEBPACK_IMPORTED_MODULE_5__.currentProjectsList.content.length > 0) {
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
  const activeProject = _internalLogic__WEBPACK_IMPORTED_MODULE_5__.currentProjectsList.getProjectByItemId(
    e.target.parentNode.id
  );
  const task = activeProject.getItem(e.target.parentNode.id);
  e.target.parentNode.remove();
  activeProject.deleteListItem(task);
}
/* 

there is probably a better way to write this function

*/
function deleteProject(e) {
  e.stopPropagation();
  const project = _internalLogic__WEBPACK_IMPORTED_MODULE_5__.currentProjectsList.getItem(e.target.parentNode.id);

  _internalLogic__WEBPACK_IMPORTED_MODULE_5__.currentProjectsList.deleteListItem(project);

  if (_internalLogic__WEBPACK_IMPORTED_MODULE_5__.currentProjectsList.content.length === 0) {
    const thisWeek = document.getElementById("next-week");
    e.target.parentNode.remove();
    thisWeek.classList.add("active");
    showGroup(thisWeek);
  } else {
    //const activeProject = whichIsActive(currentProjectsList);
    const lateMain = document.getElementById("main");
    const lateSidebar = document.getElementById("projects");

    lateMain.remove();
    lateSidebar.remove();
    renderContainer();
  }
}

function setCompleteOption(task, DOMel) {
  if (task.complete) {
    DOMel.src = _images_complete_svg__WEBPACK_IMPORTED_MODULE_2__;
  } else {
    DOMel.src = _images_incomplete_svg__WEBPACK_IMPORTED_MODULE_3__;
  }
}

function changeCompleteOption(e) {
  const id = e.target.parentNode.parentNode.id;
  const project = _internalLogic__WEBPACK_IMPORTED_MODULE_5__.currentProjectsList.getProjectByItemId(id);
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
  _internalLogic__WEBPACK_IMPORTED_MODULE_5__.currentProjectsList.setInactiveProjects();
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
        _internalLogic__WEBPACK_IMPORTED_MODULE_5__.currentProjectsList.getItemByPriority(p),
        e.target.textContent
      );
    } else if (e.target.id === "next-week") {
      newMain = renderMain(
        _internalLogic__WEBPACK_IMPORTED_MODULE_5__.currentProjectsList.getItemByDueDate(),
        e.target.textContent
      );
    }
  } else if (e.classList.contains("priority-group")) {
    const p = e.id[1];
    newMain = renderMain(
      _internalLogic__WEBPACK_IMPORTED_MODULE_5__.currentProjectsList.getItemByPriority(p),
      e.textContent
    );
  } else if (e.id === "next-week") {
    newMain = renderMain(_internalLogic__WEBPACK_IMPORTED_MODULE_5__.currentProjectsList.getItemByDueDate(), e.textContent);
  }

  lateMain.remove();
  container.appendChild(newMain);
  const edit = document.getElementById("edit-project");
  const addTask = document.getElementById("add-item");
  addTask.remove();
  edit.removeEventListener("click", _modalRender__WEBPACK_IMPORTED_MODULE_7__.editProjectModalRender);
}


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
/* harmony import */ var _internalLogic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./internalLogic */ "./src/modules/internalLogic.js");





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

  const activeProject = (0,_loadDOMcrap__WEBPACK_IMPORTED_MODULE_0__.whichIsActive)(_internalLogic__WEBPACK_IMPORTED_MODULE_2__.currentProjectsList);
  const newTask = new _internalLogic__WEBPACK_IMPORTED_MODULE_2__.Task(title, description, date, priority);

  activeProject.addNewItem(newTask);
  const taskDOM = (0,_renderSingleEl__WEBPACK_IMPORTED_MODULE_1__.renderSingleTask)(newTask);
  main.appendChild(taskDOM);
  form.remove();
}

function confirmEditTask() {
  const main = document.getElementById("main");
  const form = document.getElementById("item-modal");
  const title = document.getElementById("title-input").value;
  const description = document.getElementById("description-input").value;
  const date = document.getElementById("date-input").value;
  const priorities = document.getElementsByName("priority");
  const activeProject = _internalLogic__WEBPACK_IMPORTED_MODULE_2__.currentProjectsList.getProjectByItemId(_loadDOMcrap__WEBPACK_IMPORTED_MODULE_0__.itemEdited.id); //whichIsActive(currentProjectsList);
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

  if (_internalLogic__WEBPACK_IMPORTED_MODULE_2__.currentProjectsList.checkActiveProject()) {
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
  _loadDOMcrap__WEBPACK_IMPORTED_MODULE_0__.itemEdited.setTempId("");
}

function confirmNewProject() {
  const projectUL = document.getElementById("projects-ul");
  const form = document.getElementById("project-modal");
  const title = document.getElementById("project-name").value;
  const newProject = new _internalLogic__WEBPACK_IMPORTED_MODULE_2__.Project(title);

  _internalLogic__WEBPACK_IMPORTED_MODULE_2__.currentProjectsList.addNewItem(newProject);

  const li = (0,_renderSingleEl__WEBPACK_IMPORTED_MODULE_1__.renderSingleProject)(newProject);
  projectUL.appendChild(li);

  form.remove();
}

function confirmEditProject() {
  const lateTopContent = document.getElementById("active-project");
  const main = document.getElementById("main");
  const projectUL = document.getElementById("projects-ul");
  const form = document.getElementById("project-modal");
  const title = document.getElementById("project-name").value;
  const project = _internalLogic__WEBPACK_IMPORTED_MODULE_2__.currentProjectsList.getItem(_loadDOMcrap__WEBPACK_IMPORTED_MODULE_0__.itemEdited.id);

  project.editItem(title);

  Array.from(projectUL.children).forEach((e) => {
    if (e.id === project.id) {
      e.textContent = project.title;
    }
  });

  form.remove();
  lateTopContent.remove();
  main.appendChild((0,_renderSingleEl__WEBPACK_IMPORTED_MODULE_1__.renderTopContent)((0,_loadDOMcrap__WEBPACK_IMPORTED_MODULE_0__.whichIsActive)(_internalLogic__WEBPACK_IMPORTED_MODULE_2__.currentProjectsList).title));
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
/* harmony import */ var _internalLogic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./internalLogic */ "./src/modules/internalLogic.js");





function newTaskModalRender() {
  const elList = newTaskModalCreateElements();
  const formToRender = newTaskRenderLoops(elList);

  container.appendChild(formToRender);
  (0,_eventListenersManager__WEBPACK_IMPORTED_MODULE_1__.removeIrrelevantEventListeners)();

  formToRender.addEventListener("submit", _modalValidation__WEBPACK_IMPORTED_MODULE_2__.validateNewModal);
}

function editTaskModalRender(e) {
  const id = e.target.parentNode.id;

  const activeProject = _internalLogic__WEBPACK_IMPORTED_MODULE_3__.currentProjectsList.getProjectByItemId(
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

function projectModalCreateElement() {
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

function newProjectModalRender() {
  const form = projectModalCreateElement();

  container.appendChild(form);

  (0,_eventListenersManager__WEBPACK_IMPORTED_MODULE_1__.removeIrrelevantEventListeners)();

  form.addEventListener("submit", _modalValidation__WEBPACK_IMPORTED_MODULE_2__.validateNewModal);
}

function editProjectModalRender() {
  const form = projectModalCreateElement();
  const project = (0,_loadDOMcrap__WEBPACK_IMPORTED_MODULE_0__.whichIsActive)(_internalLogic__WEBPACK_IMPORTED_MODULE_3__.currentProjectsList);

  container.appendChild(form);

  const title = document.getElementById("project-name");

  _loadDOMcrap__WEBPACK_IMPORTED_MODULE_0__.itemEdited.setTempId(project.id);
  title.value = project.title;

  (0,_eventListenersManager__WEBPACK_IMPORTED_MODULE_1__.removeIrrelevantEventListeners)();

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
/* harmony import */ var _internalLogic__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./internalLogic */ "./src/modules/internalLogic.js");
/* harmony import */ var _modalRender__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modalRender */ "./src/modules/modalRender.js");
/* harmony import */ var _loadDOMcrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./loadDOMcrap */ "./src/modules/loadDOMcrap.js");











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

  newProjectBtnRender.addEventListener("click", _modalRender__WEBPACK_IMPORTED_MODULE_7__.newProjectModalRender);
  hideImg.addEventListener("click", _loadDOMcrap__WEBPACK_IMPORTED_MODULE_8__.hideSidebar);

  return sidebarRender;
}

function renderProjectUl(list) {
  if (_internalLogic__WEBPACK_IMPORTED_MODULE_6__.currentProjectsList.content.length > 0) {
    (0,_loadDOMcrap__WEBPACK_IMPORTED_MODULE_8__.whichIsActive)(_internalLogic__WEBPACK_IMPORTED_MODULE_6__.currentProjectsList);
    for (const project of _internalLogic__WEBPACK_IMPORTED_MODULE_6__.currentProjectsList.content) {
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
    e.addEventListener("click", _loadDOMcrap__WEBPACK_IMPORTED_MODULE_8__.deactivateAllProjects);
    e.addEventListener("click", _loadDOMcrap__WEBPACK_IMPORTED_MODULE_8__.showGroup);
  });
}

function renderSingleProject(project) {
  const li = document.createElement("li");
  const deleteBtn = new Image();

  li.textContent = `${project.title}`;
  deleteBtn.src = _images_delete_svg__WEBPACK_IMPORTED_MODULE_3__;
  deleteBtn.className = "delete-project";

  if (!project.id) {
    _internalLogic__WEBPACK_IMPORTED_MODULE_6__.currentProjectsList.checkDuplicateProject(project);
  }
  li.id = project.id;
  li.appendChild(deleteBtn);

  deleteBtn.addEventListener("click", _loadDOMcrap__WEBPACK_IMPORTED_MODULE_8__.deleteProject);
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

  for (const proj of _internalLogic__WEBPACK_IMPORTED_MODULE_6__.currentProjectsList.content) {
    if (proj.id === e.target.id && !proj.active) {
      _internalLogic__WEBPACK_IMPORTED_MODULE_6__.currentProjectsList.setInactiveProjects();
      _internalLogic__WEBPACK_IMPORTED_MODULE_6__.currentProjectsList.setActiveProject(proj);
    }
  }

  const activeProject = (0,_loadDOMcrap__WEBPACK_IMPORTED_MODULE_8__.whichIsActive)(_internalLogic__WEBPACK_IMPORTED_MODULE_6__.currentProjectsList);

  lateMain.remove();
  container.appendChild((0,_loadDOMcrap__WEBPACK_IMPORTED_MODULE_8__.renderMain)(activeProject.content, activeProject.title));
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

  showImg.addEventListener("click", _loadDOMcrap__WEBPACK_IMPORTED_MODULE_8__.showSidebar);
  editProjectImg.addEventListener("click", _modalRender__WEBPACK_IMPORTED_MODULE_7__.editProjectModalRender);
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
    _internalLogic__WEBPACK_IMPORTED_MODULE_6__.currentProjectsList.checkDuplicateItem(task);
  }
  item.id = task.id;

  title.textContent = task.title;
  description.textContent = task.description;
  date.textContent = task.date;
  complete.textContent = "Complete:";

  (0,_loadDOMcrap__WEBPACK_IMPORTED_MODULE_8__.setPriority)(priority, task);
  (0,_loadDOMcrap__WEBPACK_IMPORTED_MODULE_8__.setCompleteOption)(task, completeBtn);
  complete.appendChild(completeBtn);

  item.appendChild(title);
  item.appendChild(description);
  item.appendChild(date);
  item.appendChild(priority);
  item.appendChild(complete);

  item.appendChild(editBtn);
  item.appendChild(deleteBtn);

  editBtn.addEventListener("click", _modalRender__WEBPACK_IMPORTED_MODULE_7__.editTaskModalRender);
  deleteBtn.addEventListener("click", _loadDOMcrap__WEBPACK_IMPORTED_MODULE_8__.deleteItem);
  completeBtn.addEventListener("click", _loadDOMcrap__WEBPACK_IMPORTED_MODULE_8__.changeCompleteOption);

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


window.addEventListener("load", _modules_loadDOMcrap_js__WEBPACK_IMPORTED_MODULE_0__.renderContainer());
/* 
TO DO:
-local storage;
-git hub deployment;
*/

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTyxnRkFBZ0YsVUFBVSxZQUFZLE1BQU0sT0FBTyxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxPQUFPLFFBQVEsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksV0FBVyxNQUFNLE1BQU0sVUFBVSxPQUFPLE1BQU0sVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLE1BQU0sWUFBWSxPQUFPLE1BQU0sVUFBVSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxLQUFLLEtBQUssVUFBVSxNQUFNLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLEtBQUssTUFBTSxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssVUFBVSxLQUFLLE1BQU0sUUFBUSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxNQUFNLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLEtBQUssTUFBTSxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLEtBQUssTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxNQUFNLE1BQU0sVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsT0FBTyxRQUFRLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLE9BQU8sUUFBUSxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVks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LEVBQUUsSUFBSTtBQUN2Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esa0JBQWtCLHlCQUF5QjtBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esa0JBQWtCLFNBQVM7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esa0JBQWtCLHlCQUF5QjtBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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QUFvQyw2REFBbUI7QUFDdkQsc0NBQXNDLG9EQUFVO0FBQ2hELHdDQUF3Qyw4REFBb0I7O0FBRTVEO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUN2UEE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDbEJBOzs7Ozs7Ozs7Ozs7QUNBa0Q7O0FBRWxELGdDQUFnQyxvRUFBcUI7QUFDckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvcC10b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvcC10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvcC10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b3AtdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvcC10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9wLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9wLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b3AtdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvcC10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b3AtdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9wLXRvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL2V2ZW50TGlzdGVuZXJzTWFuYWdlci5qcyIsIndlYnBhY2s6Ly90b3AtdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvaW50ZXJuYWxMb2dpYy5qcyIsIndlYnBhY2s6Ly90b3AtdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvbG9hZERPTWNyYXAuanMiLCJ3ZWJwYWNrOi8vdG9wLXRvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL21vZGFsQXBwbGljYXRpb24uanMiLCJ3ZWJwYWNrOi8vdG9wLXRvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL21vZGFsUmVuZGVyLmpzIiwid2VicGFjazovL3RvcC10b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy9tb2RhbFZhbGlkYXRpb24uanMiLCJ3ZWJwYWNrOi8vdG9wLXRvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL3JlbmRlclNpbmdsZUVsLmpzIiwid2VicGFjazovL3RvcC10b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9wLXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b3AtdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b3AtdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vdG9wLXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvcC10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b3AtdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3RvcC10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvcC10b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYCoge1xuICBtYXJnaW46IDA7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGZvbnQtZmFtaWx5OiBzeXN0ZW0tdWksIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgXCJTZWdvZSBVSVwiLCBSb2JvdG8sXG4gICAgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgXCJPcGVuIFNhbnNcIiwgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbiNjb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogc3RyZXRjaDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwdmg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYmFja2dyb3VuZDogIzVlNWU1ZTtcbn1cblxuLyogXG5cbiAgUFJPSkVDVFMgU0lERUJBUlxuXG4qL1xuXG4jcHJvamVjdHMge1xuICBiYWNrZ3JvdW5kOiAjOTc5Nzk3O1xuICBwYWRkaW5nOiAxcmVtO1xuICBmb250LXNpemU6IDEuMnJlbTtcbiAgYm9yZGVyLXJpZ2h0OiAycHggc29saWQgIzAwMDc4ZDtcbiAgcGFkZGluZzogMXJlbTtcbiAgei1pbmRleDogMjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMzAwcHg7XG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcbn1cblxuI3Byb2plY3RzLnZpc2libGUge1xuICBhbmltYXRpb246IHNob3cgMC41cztcbiAgd2lkdGg6IDMwMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbiNwcm9qZWN0cy5oaWRkZW4ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IC0zMDBweDtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgYW5pbWF0aW9uOiBoaWRlIDAuNXM7XG59XG5cbiNoaWRlLWljb24ge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbiNuZXctcHJvamVjdC1idG4ge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMC41cmVtIDA7XG4gIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudCgjNTA2OTY1LCAjMDA1YjljKTtcbiAgY29sb3I6ICNmZmY7XG4gIGJvcmRlcjogM3B4IHNvbGlkICMwMDdkMGM7XG4gIGJvcmRlci1yYWRpdXM6IDAuMnJlbTtcbiAgbWFyZ2luOiAxcmVtIDAgMCAwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbiNpY29ucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIGhlaWdodDogMTAwcHg7XG59XG5cbiNwcm9qZWN0cyBoMiB7XG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xuICBtYXJnaW46IDFyZW0gMDtcbn1cblxuI3Byb2plY3RzIGxpOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogIzYyNjI2MjtcbiAgY29sb3I6ICNmZmY7XG59XG5cbiNwcm9qZWN0cy11bCxcbiNkeW5hbWljLXVsIHtcbiAgcGFkZGluZy1sZWZ0OiAwO1xufVxuXG4jcHJvamVjdHMtdWwgPiBsaSxcbiNkeW5hbWljLXVsID4gbGkge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuI3Byb2plY3RzLXVsID4gbGk6Om1hcmtlciB7XG4gIGNvbnRlbnQ6IFwiI1wiO1xuICBjb2xvcjogIzAwMGFjNDtcbn1cblxuI2R5bmFtaWMtdWwgPiBsaTo6bWFya2VyIHtcbiAgY29sb3I6ICMwMDBhYzQ7XG4gIGNvbnRlbnQ6IFwib1wiO1xufVxuXG4jcHJvamVjdHMtdWwgPiBsaS5hY3RpdmUsXG4jZHluYW1pYy11bCA+IGxpLmFjdGl2ZSB7XG4gIGJvcmRlcjogM3B4IGRvdWJsZSAjNzVmZjRiO1xufVxuXG4jcHJvamVjdHMtdWwgPiBsaS5hY3RpdmU6Om1hcmtlcixcbiNkeW5hbWljLXVsID4gbGkuYWN0aXZlOjptYXJrZXIge1xuICBjb2xvcjogIzc1ZmY0Yjtcbn1cblxuLmRlbGV0ZS1wcm9qZWN0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMi40cHg7XG4gIGJhY2tncm91bmQ6ICNmZjIwMjA7XG4gIGhlaWdodDogMTAwJTtcbn1cbiNwcm9qZWN0cy11bCA+IGxpLmFjdGl2ZSA+IC5kZWxldGUtcHJvamVjdCB7XG4gIHJpZ2h0OiAwO1xufVxuXG5Aa2V5ZnJhbWVzIHNob3cge1xuICAwJSB7XG4gICAgbGVmdDogLTMwMHB4O1xuICB9XG4gIDEwMCUge1xuICAgIGxlZnQ6IDA7XG4gIH1cbn1cblxuQGtleWZyYW1lcyBoaWRlIHtcbiAgMCUge1xuICAgIGxlZnQ6IDA7XG4gIH1cbiAgMTAwJSB7XG4gICAgbGVmdDogLTMwMHB4O1xuICB9XG59XG5cbi8qIFxuXG5NQUlOIFNFQ1RJT05cblxuKi9cblxuI21haW4ge1xuICBmbGV4LWdyb3c6IDE7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIGFsaWduLWNvbnRlbnQ6IHNhZmUgY2VudGVyO1xuICBnYXA6IDFyZW07XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcGFkZGluZzogMjVweDtcbiAgb3ZlcmZsb3cteTogYXV0bztcbiAgbWFyZ2luLXRvcDogMTAwcHg7XG59XG5cbiNhZGQtaXRlbSB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYm90dG9tOiAycmVtO1xuICBsZWZ0OiA1MCU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgei1pbmRleDogMTtcbn1cblxuLml0ZW0ge1xuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XG4gIHdpZHRoOiAzMDBweDtcbiAgaGVpZ2h0OiAzMDBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogc3RyZXRjaDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBib3gtc2hhZG93OiAwIDAgNXB4ICMwMDA7XG4gIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudCgjM2QzZDNkLCAjNTA2OTY1KTtcbiAgcGFkZGluZzogMjBweDtcbn1cblxuLml0ZW06aG92ZXIge1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUsIDEuMDUpO1xufVxuXG4uaXRlbSA+IGRpdiB7XG4gIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudCgjZTdlN2U3LCAjYmFiYWJhKTtcbiAgcGFkZGluZzogMC4zcmVtIDFyZW07XG4gIGJveC1zaGFkb3c6IDAgMCAzcHggIzAwMDtcbn1cblxuLml0ZW0gPiBkaXY6bnRoLWNoaWxkKDIpIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBvdmVyZmxvdy15OiBhdXRvO1xufVxuXG4uZWRpdC1pdGVtLFxuLmRlbGV0ZS1pdGVtIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xuICBib3gtc2hhZG93OiAwIDAgM3B4ICMwMDA7XG59XG5cbi5lZGl0LWl0ZW0ge1xuICBsZWZ0OiAwO1xuICBiYWNrZ3JvdW5kOiAjNjA4MWRjO1xufVxuXG4uZWRpdC1pdGVtOmFjdGl2ZSxcbi5kZWxldGUtaXRlbTphY3RpdmUge1xuICBib3gtc2hhZG93OiBpbnNldCAwIDAgM3B4ICMwMDA7XG59XG5cbi5kZWxldGUtaXRlbSB7XG4gIHJpZ2h0OiAwO1xuICBiYWNrZ3JvdW5kOiAjZmYyMDIwO1xufVxuXG4uY29tcGxldGUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5jb21wbGV0ZS1idG4ge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cblxuLmNvbXBsZXRlLWJ0bi5mYWRlLW91dCB7XG4gIGFuaW1hdGlvbjogZmFkZS1vdXQgMC41cyBsaW5lYXI7XG4gIG9wYWNpdHk6IDA7XG59XG5cbkBrZXlmcmFtZXMgZmFkZS1vdXQge1xuICAwJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxuICAxMDAlIHtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG59XG5cbi5jb21wbGV0ZS1idG4uZmFkZS1pbiB7XG4gIGFuaW1hdGlvbjogZmFkZS1pbiAwLjVzIGxpbmVhcjtcbiAgb3BhY2l0eTogMTtcbn1cblxuQGtleWZyYW1lcyBmYWRlLWluIHtcbiAgMCUge1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbiAgMTAwJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxufVxuXG4jYWN0aXZlLXByb2plY3Qge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCMzZDNkM2QsICMyYTJmOTYpO1xuICBjb2xvcjogI2ZmZjtcbiAgei1pbmRleDogMTtcbn1cblxuI21lbnUtaWNvbixcbiNlZGl0LXByb2plY3Qge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCMyYTJmOTYsICMzZDNkM2QpO1xufVxuXG4jc2hlZXQtc3RhY2sge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi8qIFxuXG5JVEVNIE1PREFMXG5cbiovXG5cbiNpdGVtLW1vZGFsIHtcbiAgZGlzcGxheTogZmxleDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogNzAlO1xuICBtaW4taGVpZ2h0OiA2MCU7XG4gIHRvcDogMjAlO1xuICBsZWZ0OiAxNSU7XG4gIGJvcmRlci1yYWRpdXM6IDJyZW07XG4gIHBhZGRpbmc6IDEuNXJlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xuICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoIzNkM2QzZCwgIzJhMmY5Nik7XG4gIGJveC1zaGFkb3c6IDAuNXJlbSAwLjVyZW0gMXJlbSAtMC41cmVtICMwMDA7XG4gIHotaW5kZXg6IDEwO1xufVxuXG4jaXRlbS1tb2RhbCA+IGRpdiB7XG4gIG1hcmdpbi1ib3R0b206IDAuOHJlbTtcbn1cblxuI2l0ZW0tbW9kYWwgdWwge1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDAuNXJlbTtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG5sYWJlbCB7XG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xufVxuXG5kaXYgPiBsYWJlbCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4jaXRlbS1tb2RhbCBsaSB7XG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XG4gIG1hcmdpbjogMC40cmVtIDA7XG4gIHBhZGRpbmc6IDAuNXJlbTtcbiAgd2lkdGg6IDI1JTtcbn1cblxuI2hpZ2gtcHJpby1saSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjM0MzQ7XG59XG5cbiNtZWRpdW0tcHJpby1saSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmUwMzM7XG59XG5cbiNsb3ctcHJpby1saSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM2YWZmMmE7XG59XG5cbiNpdGVtLW1vZGFsIHVsIHtcbiAgcGFkZGluZzogMDtcbn1cblxudGV4dGFyZWEge1xuICByZXNpemU6IG5vbmU7XG59XG5cbmlucHV0W3R5cGU9XCJ0ZXh0XCJdLFxudGV4dGFyZWEge1xuICB3aWR0aDogODAlO1xufVxuXG5pbnB1dDpub3QoaW5wdXRbdHlwZT1cInJhZGlvXCJdKSxcbnRleHRhcmVhIHtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBib3JkZXItcmFkaXVzOiAwLjNyZW07XG4gIGJveC1zaGFkb3c6IDAgMC4zcmVtIDFyZW0gLTAuM3JlbSAjNGE0YTRhO1xuICBib3JkZXI6IG5vbmU7XG59XG5cbiNjb25maXJtLWl0ZW0ge1xuICB3aWR0aDogODAlO1xuICBwYWRkaW5nOiAwLjVyZW07XG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoI2I3YjdiNywgI2ZmZik7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi8qIFxuXG5QUk9KRUNUIE1PREFMXG5cbiovXG5cbiNwcm9qZWN0LW1vZGFsIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDMwJTtcbiAgbGVmdDogNTAlO1xuICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoIzNkM2QzZCwgIzJhMmY5Nik7XG4gIGJveC1zaGFkb3c6IDAuNXJlbSAwLjVyZW0gMXJlbSAtMC41cmVtICMwMDA7XG4gIGJvcmRlci1yYWRpdXM6IDJyZW07XG4gIHBhZGRpbmc6IDFyZW07XG59XG5cbiNwcm9qZWN0LW1vZGFsID4gKiB7XG4gIG1hcmdpbjogMXJlbSAwO1xufVxuXG4jcHJvamVjdC1tb2RhbCA+IGxhYmVsIHtcbiAgY29sb3I6ICNmZmY7XG59XG5cbiNjb25maXJtLXByb2plY3Qge1xuICBkaXNwbGF5OiBibG9jaztcbiAgcGFkZGluZzogMC41cmVtIDJyZW07XG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcsICNiMGIwYjAsICNlMmUyZTIpO1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmNvbG9yIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwYzcwMztcbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLFNBQVM7RUFDVCxzQkFBc0I7RUFDdEI7d0VBQ3NFO0VBQ3RFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixvQkFBb0I7RUFDcEIsV0FBVztFQUNYLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsbUJBQW1CO0FBQ3JCOztBQUVBOzs7O0NBSUM7O0FBRUQ7RUFDRSxtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLGlCQUFpQjtFQUNqQiwrQkFBK0I7RUFDL0IsYUFBYTtFQUNiLFVBQVU7RUFDVixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLG9CQUFvQjtFQUNwQixZQUFZO0VBQ1osa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixhQUFhO0VBQ2Isb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIsNkNBQTZDO0VBQzdDLFdBQVc7RUFDWCx5QkFBeUI7RUFDekIscUJBQXFCO0VBQ3JCLGtCQUFrQjtFQUNsQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtFQUM5Qix1QkFBdUI7RUFDdkIsYUFBYTtBQUNmOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsV0FBVztBQUNiOztBQUVBOztFQUVFLGVBQWU7QUFDakI7O0FBRUE7O0VBRUUsZUFBZTtFQUNmLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsY0FBYztFQUNkLFlBQVk7QUFDZDs7QUFFQTs7RUFFRSwwQkFBMEI7QUFDNUI7O0FBRUE7O0VBRUUsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLFlBQVk7QUFDZDtBQUNBO0VBQ0UsUUFBUTtBQUNWOztBQUVBO0VBQ0U7SUFDRSxZQUFZO0VBQ2Q7RUFDQTtJQUNFLE9BQU87RUFDVDtBQUNGOztBQUVBO0VBQ0U7SUFDRSxPQUFPO0VBQ1Q7RUFDQTtJQUNFLFlBQVk7RUFDZDtBQUNGOztBQUVBOzs7O0NBSUM7O0FBRUQ7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLGVBQWU7RUFDZiw2QkFBNkI7RUFDN0IsMEJBQTBCO0VBQzFCLFNBQVM7RUFDVCxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLGdCQUFnQjtFQUNoQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsWUFBWTtFQUNaLFNBQVM7RUFDVCxlQUFlO0VBQ2YsVUFBVTtBQUNaOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLFlBQVk7RUFDWixhQUFhO0VBQ2IsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qiw4QkFBOEI7RUFDOUIsb0JBQW9CO0VBQ3BCLGtCQUFrQjtFQUNsQix3QkFBd0I7RUFDeEIsNkNBQTZDO0VBQzdDLGFBQWE7QUFDZjs7QUFFQTtFQUNFLDRCQUE0QjtBQUM5Qjs7QUFFQTtFQUNFLDZDQUE2QztFQUM3QyxvQkFBb0I7RUFDcEIsd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGdCQUFnQjtBQUNsQjs7QUFFQTs7RUFFRSxrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLGVBQWU7RUFDZixxQkFBcUI7RUFDckIsd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0UsT0FBTztFQUNQLG1CQUFtQjtBQUNyQjs7QUFFQTs7RUFFRSw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSxRQUFRO0VBQ1IsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxlQUFlO0VBQ2Ysa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsK0JBQStCO0VBQy9CLFVBQVU7QUFDWjs7QUFFQTtFQUNFO0lBQ0UsVUFBVTtFQUNaO0VBQ0E7SUFDRSxVQUFVO0VBQ1o7QUFDRjs7QUFFQTtFQUNFLDhCQUE4QjtFQUM5QixVQUFVO0FBQ1o7O0FBRUE7RUFDRTtJQUNFLFVBQVU7RUFDWjtFQUNBO0lBQ0UsVUFBVTtFQUNaO0FBQ0Y7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsTUFBTTtFQUNOLE9BQU87RUFDUCxXQUFXO0VBQ1gsYUFBYTtFQUNiLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsbUJBQW1CO0VBQ25CLDZDQUE2QztFQUM3QyxXQUFXO0VBQ1gsVUFBVTtBQUNaOztBQUVBOztFQUVFLGVBQWU7RUFDZixxQkFBcUI7RUFDckIsNkNBQTZDO0FBQy9DOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTs7OztDQUlDOztBQUVEO0VBQ0UsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsZUFBZTtFQUNmLFFBQVE7RUFDUixTQUFTO0VBQ1QsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsc0JBQXNCO0VBQ3RCLDhCQUE4QjtFQUM5QixvQkFBb0I7RUFDcEIsNkNBQTZDO0VBQzdDLDJDQUEyQztFQUMzQyxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsV0FBVztFQUNYLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxxQkFBcUI7RUFDckIsV0FBVztBQUNiOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIscUJBQXFCO0VBQ3JCLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsVUFBVTtBQUNaOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsVUFBVTtBQUNaOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBOztFQUVFLFVBQVU7QUFDWjs7QUFFQTs7RUFFRSxlQUFlO0VBQ2YscUJBQXFCO0VBQ3JCLHlDQUF5QztFQUN6QyxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQiwwQ0FBMEM7RUFDMUMsWUFBWTtFQUNaLHFCQUFxQjtFQUNyQixlQUFlO0FBQ2pCOztBQUVBOzs7O0NBSUM7O0FBRUQ7RUFDRSxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFNBQVM7RUFDVCw2Q0FBNkM7RUFDN0MsMkNBQTJDO0VBQzNDLG1CQUFtQjtFQUNuQixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsY0FBYztFQUNkLG9CQUFvQjtFQUNwQixpQkFBaUI7RUFDakIsb0RBQW9EO0VBQ3BELFlBQVk7RUFDWixxQkFBcUI7RUFDckIsY0FBYztFQUNkLGVBQWU7QUFDakI7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0JcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxuICBtYXJnaW46IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgZm9udC1mYW1pbHk6IHN5c3RlbS11aSwgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBcXFwiU2Vnb2UgVUlcXFwiLCBSb2JvdG8sXFxuICAgIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsIFxcXCJPcGVuIFNhbnNcXFwiLCBcXFwiSGVsdmV0aWNhIE5ldWVcXFwiLCBzYW5zLXNlcmlmO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4jY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogc3RyZXRjaDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGJhY2tncm91bmQ6ICM1ZTVlNWU7XFxufVxcblxcbi8qIFxcblxcbiAgUFJPSkVDVFMgU0lERUJBUlxcblxcbiovXFxuXFxuI3Byb2plY3RzIHtcXG4gIGJhY2tncm91bmQ6ICM5Nzk3OTc7XFxuICBwYWRkaW5nOiAxcmVtO1xcbiAgZm9udC1zaXplOiAxLjJyZW07XFxuICBib3JkZXItcmlnaHQ6IDJweCBzb2xpZCAjMDAwNzhkO1xcbiAgcGFkZGluZzogMXJlbTtcXG4gIHotaW5kZXg6IDI7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB3aWR0aDogMzAwcHg7XFxuICBvdmVyZmxvdy14OiBoaWRkZW47XFxufVxcblxcbiNwcm9qZWN0cy52aXNpYmxlIHtcXG4gIGFuaW1hdGlvbjogc2hvdyAwLjVzO1xcbiAgd2lkdGg6IDMwMHB4O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4jcHJvamVjdHMuaGlkZGVuIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IC0zMDBweDtcXG4gIGhlaWdodDogMTAwdmg7XFxuICBhbmltYXRpb246IGhpZGUgMC41cztcXG59XFxuXFxuI2hpZGUtaWNvbiB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbiNuZXctcHJvamVjdC1idG4ge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwYWRkaW5nOiAwLjVyZW0gMDtcXG4gIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudCgjNTA2OTY1LCAjMDA1YjljKTtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgYm9yZGVyOiAzcHggc29saWQgIzAwN2QwYztcXG4gIGJvcmRlci1yYWRpdXM6IDAuMnJlbTtcXG4gIG1hcmdpbjogMXJlbSAwIDAgMDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuI2ljb25zIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gIGhlaWdodDogMTAwcHg7XFxufVxcblxcbiNwcm9qZWN0cyBoMiB7XFxuICBmb250LXNpemU6IDEuM3JlbTtcXG4gIG1hcmdpbjogMXJlbSAwO1xcbn1cXG5cXG4jcHJvamVjdHMgbGk6aG92ZXIge1xcbiAgYmFja2dyb3VuZDogIzYyNjI2MjtcXG4gIGNvbG9yOiAjZmZmO1xcbn1cXG5cXG4jcHJvamVjdHMtdWwsXFxuI2R5bmFtaWMtdWwge1xcbiAgcGFkZGluZy1sZWZ0OiAwO1xcbn1cXG5cXG4jcHJvamVjdHMtdWwgPiBsaSxcXG4jZHluYW1pYy11bCA+IGxpIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuI3Byb2plY3RzLXVsID4gbGk6Om1hcmtlciB7XFxuICBjb250ZW50OiBcXFwiI1xcXCI7XFxuICBjb2xvcjogIzAwMGFjNDtcXG59XFxuXFxuI2R5bmFtaWMtdWwgPiBsaTo6bWFya2VyIHtcXG4gIGNvbG9yOiAjMDAwYWM0O1xcbiAgY29udGVudDogXFxcIm9cXFwiO1xcbn1cXG5cXG4jcHJvamVjdHMtdWwgPiBsaS5hY3RpdmUsXFxuI2R5bmFtaWMtdWwgPiBsaS5hY3RpdmUge1xcbiAgYm9yZGVyOiAzcHggZG91YmxlICM3NWZmNGI7XFxufVxcblxcbiNwcm9qZWN0cy11bCA+IGxpLmFjdGl2ZTo6bWFya2VyLFxcbiNkeW5hbWljLXVsID4gbGkuYWN0aXZlOjptYXJrZXIge1xcbiAgY29sb3I6ICM3NWZmNGI7XFxufVxcblxcbi5kZWxldGUtcHJvamVjdCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICByaWdodDogMi40cHg7XFxuICBiYWNrZ3JvdW5kOiAjZmYyMDIwO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG4jcHJvamVjdHMtdWwgPiBsaS5hY3RpdmUgPiAuZGVsZXRlLXByb2plY3Qge1xcbiAgcmlnaHQ6IDA7XFxufVxcblxcbkBrZXlmcmFtZXMgc2hvdyB7XFxuICAwJSB7XFxuICAgIGxlZnQ6IC0zMDBweDtcXG4gIH1cXG4gIDEwMCUge1xcbiAgICBsZWZ0OiAwO1xcbiAgfVxcbn1cXG5cXG5Aa2V5ZnJhbWVzIGhpZGUge1xcbiAgMCUge1xcbiAgICBsZWZ0OiAwO1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIGxlZnQ6IC0zMDBweDtcXG4gIH1cXG59XFxuXFxuLyogXFxuXFxuTUFJTiBTRUNUSU9OXFxuXFxuKi9cXG5cXG4jbWFpbiB7XFxuICBmbGV4LWdyb3c6IDE7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICBhbGlnbi1jb250ZW50OiBzYWZlIGNlbnRlcjtcXG4gIGdhcDogMXJlbTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHBhZGRpbmc6IDI1cHg7XFxuICBvdmVyZmxvdy15OiBhdXRvO1xcbiAgbWFyZ2luLXRvcDogMTAwcHg7XFxufVxcblxcbiNhZGQtaXRlbSB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBib3R0b206IDJyZW07XFxuICBsZWZ0OiA1MCU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB6LWluZGV4OiAxO1xcbn1cXG5cXG4uaXRlbSB7XFxuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxuICB3aWR0aDogMzAwcHg7XFxuICBoZWlnaHQ6IDMwMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogc3RyZXRjaDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGJveC1zaGFkb3c6IDAgMCA1cHggIzAwMDtcXG4gIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudCgjM2QzZDNkLCAjNTA2OTY1KTtcXG4gIHBhZGRpbmc6IDIwcHg7XFxufVxcblxcbi5pdGVtOmhvdmVyIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wNSwgMS4wNSk7XFxufVxcblxcbi5pdGVtID4gZGl2IHtcXG4gIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudCgjZTdlN2U3LCAjYmFiYWJhKTtcXG4gIHBhZGRpbmc6IDAuM3JlbSAxcmVtO1xcbiAgYm94LXNoYWRvdzogMCAwIDNweCAjMDAwO1xcbn1cXG5cXG4uaXRlbSA+IGRpdjpudGgtY2hpbGQoMikge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgb3ZlcmZsb3cteTogYXV0bztcXG59XFxuXFxuLmVkaXQtaXRlbSxcXG4uZGVsZXRlLWl0ZW0ge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcbiAgYm94LXNoYWRvdzogMCAwIDNweCAjMDAwO1xcbn1cXG5cXG4uZWRpdC1pdGVtIHtcXG4gIGxlZnQ6IDA7XFxuICBiYWNrZ3JvdW5kOiAjNjA4MWRjO1xcbn1cXG5cXG4uZWRpdC1pdGVtOmFjdGl2ZSxcXG4uZGVsZXRlLWl0ZW06YWN0aXZlIHtcXG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMCAzcHggIzAwMDtcXG59XFxuXFxuLmRlbGV0ZS1pdGVtIHtcXG4gIHJpZ2h0OiAwO1xcbiAgYmFja2dyb3VuZDogI2ZmMjAyMDtcXG59XFxuXFxuLmNvbXBsZXRlIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uY29tcGxldGUtYnRuIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG59XFxuXFxuLmNvbXBsZXRlLWJ0bi5mYWRlLW91dCB7XFxuICBhbmltYXRpb246IGZhZGUtb3V0IDAuNXMgbGluZWFyO1xcbiAgb3BhY2l0eTogMDtcXG59XFxuXFxuQGtleWZyYW1lcyBmYWRlLW91dCB7XFxuICAwJSB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICB9XFxuICAxMDAlIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gIH1cXG59XFxuXFxuLmNvbXBsZXRlLWJ0bi5mYWRlLWluIHtcXG4gIGFuaW1hdGlvbjogZmFkZS1pbiAwLjVzIGxpbmVhcjtcXG4gIG9wYWNpdHk6IDE7XFxufVxcblxcbkBrZXlmcmFtZXMgZmFkZS1pbiB7XFxuICAwJSB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICB9XFxuICAxMDAlIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gIH1cXG59XFxuXFxuI2FjdGl2ZS1wcm9qZWN0IHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgjM2QzZDNkLCAjMmEyZjk2KTtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgei1pbmRleDogMTtcXG59XFxuXFxuI21lbnUtaWNvbixcXG4jZWRpdC1wcm9qZWN0IHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgjMmEyZjk2LCAjM2QzZDNkKTtcXG59XFxuXFxuI3NoZWV0LXN0YWNrIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLyogXFxuXFxuSVRFTSBNT0RBTFxcblxcbiovXFxuXFxuI2l0ZW0tbW9kYWwge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHdpZHRoOiA3MCU7XFxuICBtaW4taGVpZ2h0OiA2MCU7XFxuICB0b3A6IDIwJTtcXG4gIGxlZnQ6IDE1JTtcXG4gIGJvcmRlci1yYWRpdXM6IDJyZW07XFxuICBwYWRkaW5nOiAxLjVyZW07XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XFxuICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoIzNkM2QzZCwgIzJhMmY5Nik7XFxuICBib3gtc2hhZG93OiAwLjVyZW0gMC41cmVtIDFyZW0gLTAuNXJlbSAjMDAwO1xcbiAgei1pbmRleDogMTA7XFxufVxcblxcbiNpdGVtLW1vZGFsID4gZGl2IHtcXG4gIG1hcmdpbi1ib3R0b206IDAuOHJlbTtcXG59XFxuXFxuI2l0ZW0tbW9kYWwgdWwge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMC41cmVtO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG5sYWJlbCB7XFxuICBmb250LXNpemU6IDEuMnJlbTtcXG59XFxuXFxuZGl2ID4gbGFiZWwge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XFxuICBjb2xvcjogI2ZmZjtcXG59XFxuXFxuI2l0ZW0tbW9kYWwgbGkge1xcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXG4gIG1hcmdpbjogMC40cmVtIDA7XFxuICBwYWRkaW5nOiAwLjVyZW07XFxuICB3aWR0aDogMjUlO1xcbn1cXG5cXG4jaGlnaC1wcmlvLWxpIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjM0MzQ7XFxufVxcblxcbiNtZWRpdW0tcHJpby1saSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZlMDMzO1xcbn1cXG5cXG4jbG93LXByaW8tbGkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzZhZmYyYTtcXG59XFxuXFxuI2l0ZW0tbW9kYWwgdWwge1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxudGV4dGFyZWEge1xcbiAgcmVzaXplOiBub25lO1xcbn1cXG5cXG5pbnB1dFt0eXBlPVxcXCJ0ZXh0XFxcIl0sXFxudGV4dGFyZWEge1xcbiAgd2lkdGg6IDgwJTtcXG59XFxuXFxuaW5wdXQ6bm90KGlucHV0W3R5cGU9XFxcInJhZGlvXFxcIl0pLFxcbnRleHRhcmVhIHtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDAuM3JlbTtcXG4gIGJveC1zaGFkb3c6IDAgMC4zcmVtIDFyZW0gLTAuM3JlbSAjNGE0YTRhO1xcbiAgYm9yZGVyOiBub25lO1xcbn1cXG5cXG4jY29uZmlybS1pdGVtIHtcXG4gIHdpZHRoOiA4MCU7XFxuICBwYWRkaW5nOiAwLjVyZW07XFxuICBmb250LXNpemU6IDEuMnJlbTtcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgjYjdiN2I3LCAjZmZmKTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLyogXFxuXFxuUFJPSkVDVCBNT0RBTFxcblxcbiovXFxuXFxuI3Byb2plY3QtbW9kYWwge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAzMCU7XFxuICBsZWZ0OiA1MCU7XFxuICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoIzNkM2QzZCwgIzJhMmY5Nik7XFxuICBib3gtc2hhZG93OiAwLjVyZW0gMC41cmVtIDFyZW0gLTAuNXJlbSAjMDAwO1xcbiAgYm9yZGVyLXJhZGl1czogMnJlbTtcXG4gIHBhZGRpbmc6IDFyZW07XFxufVxcblxcbiNwcm9qZWN0LW1vZGFsID4gKiB7XFxuICBtYXJnaW46IDFyZW0gMDtcXG59XFxuXFxuI3Byb2plY3QtbW9kYWwgPiBsYWJlbCB7XFxuICBjb2xvcjogI2ZmZjtcXG59XFxuXFxuI2NvbmZpcm0tcHJvamVjdCB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHBhZGRpbmc6IDAuNXJlbSAycmVtO1xcbiAgZm9udC1zaXplOiAxLjJyZW07XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcsICNiMGIwYjAsICNlMmUyZTIpO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcbiAgbWFyZ2luOiAwIGF1dG87XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5jb2xvciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBjNzAzO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHtcbiAgVGFzayxcbiAgUHJvamVjdCxcbiAgY3VycmVudFByb2plY3RzTGlzdCxcbiAgVGVtcG9yYXJ5SWQsXG59IGZyb20gXCIuL2ludGVybmFsTG9naWNcIjtcbmltcG9ydCB7XG4gIG5ld1Rhc2tNb2RhbFJlbmRlcixcbiAgbmV3UHJvamVjdE1vZGFsUmVuZGVyLFxuICBlZGl0UHJvamVjdE1vZGFsUmVuZGVyLFxuICBlZGl0VGFza01vZGFsUmVuZGVyLFxufSBmcm9tIFwiLi9tb2RhbFJlbmRlclwiO1xuaW1wb3J0IHtcbiAgaGlkZVNpZGViYXIsXG4gIHNob3dTaWRlYmFyLFxuICBkZWxldGVJdGVtLFxuICBjaGFuZ2VDb21wbGV0ZU9wdGlvbixcbiAgZGVsZXRlUHJvamVjdCxcbiAgd2hpY2hJc0FjdGl2ZSxcbn0gZnJvbSBcIi4vbG9hZERPTWNyYXBcIjtcbmltcG9ydCB7IGNoYW5nZUFjdGl2ZVByb2plY3QgfSBmcm9tIFwiLi9yZW5kZXJTaW5nbGVFbFwiO1xuXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlSXJyZWxldmFudEV2ZW50TGlzdGVuZXJzKCkge1xuICBjb25zdCBuZXdUYXNrQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGQtaXRlbVwiKTtcbiAgY29uc3QgbmV3UHJvamVjdEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmV3LXByb2plY3QtYnRuXCIpO1xuICBjb25zdCBoaWRlU2lkZWJhckJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaGlkZS1pY29uXCIpO1xuICBjb25zdCBzaG93U2lkZWJhckJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWVudS1pY29uXCIpO1xuXG4gIGNvbnN0IHByb2plY3RVTCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdHMtdWxcIik7XG5cbiAgY29uc3QgdGFzayA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJpdGVtXCIpO1xuICBjb25zdCBlZGl0UHJvamVjdEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZWRpdC1wcm9qZWN0XCIpO1xuICBjb25zdCBlZGl0VGFza0J0biA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJlZGl0LWl0ZW1cIik7XG4gIGNvbnN0IGRlbGV0ZVRhc2tCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiZGVsZXRlLWl0ZW1cIik7XG4gIGNvbnN0IGNvbXBsZXRlQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImNvbXBsZXRlLWJ0blwiKTtcbiAgY29uc3QgZGVsZXRlUHJvamVjdEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJkZWxldGUtcHJvamVjdFwiKTtcblxuICBuZXdQcm9qZWN0QnRuLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBuZXdQcm9qZWN0TW9kYWxSZW5kZXIpO1xuICBoaWRlU2lkZWJhckJ0bi5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgaGlkZVNpZGViYXIpO1xuICBzaG93U2lkZWJhckJ0bi5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgc2hvd1NpZGViYXIpO1xuXG4gIGlmIChuZXdUYXNrQnRuKSB7XG4gICAgbmV3VGFza0J0bi5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgbmV3VGFza01vZGFsUmVuZGVyKTtcbiAgfVxuXG4gIGlmIChjdXJyZW50UHJvamVjdHNMaXN0LmNvbnRlbnQubGVuZ3RoID4gMCkge1xuICAgIHdoaWNoSXNBY3RpdmUoY3VycmVudFByb2plY3RzTGlzdCk7XG4gICAgaWYgKEFycmF5LmZyb20odGFzaykubGVuZ3RoID4gMCkge1xuICAgICAgQXJyYXkuZnJvbShlZGl0VGFza0J0bikuZm9yRWFjaCgoZSkgPT4ge1xuICAgICAgICBlLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBlZGl0VGFza01vZGFsUmVuZGVyKTtcbiAgICAgIH0pO1xuICAgICAgQXJyYXkuZnJvbShkZWxldGVUYXNrQnRuKS5mb3JFYWNoKChlKSA9PiB7XG4gICAgICAgIGUucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGRlbGV0ZUl0ZW0pO1xuICAgICAgfSk7XG4gICAgICBBcnJheS5mcm9tKGNvbXBsZXRlQnRuKS5mb3JFYWNoKChlKSA9PiB7XG4gICAgICAgIGUucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNoYW5nZUNvbXBsZXRlT3B0aW9uKTtcbiAgICAgIH0pO1xuICAgICAgQXJyYXkuZnJvbShkZWxldGVQcm9qZWN0QnRuKS5mb3JFYWNoKChlKSA9PiB7XG4gICAgICAgIGUucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGRlbGV0ZVByb2plY3QpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgZWRpdFByb2plY3RCdG4ucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGVkaXRQcm9qZWN0TW9kYWxSZW5kZXIpO1xuICAgIEFycmF5LmZyb20ocHJvamVjdFVMLmNoaWxkTm9kZXMpLmZvckVhY2goKGUpID0+IHtcbiAgICAgIGUucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNoYW5nZUFjdGl2ZVByb2plY3QpO1xuICAgIH0pO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZWluc3RhdGVFdmVudExpc3RlbmVycygpIHtcbiAgY29uc3QgbmV3VGFza0J0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkLWl0ZW1cIik7XG4gIGNvbnN0IG5ld1Byb2plY3RCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5ldy1wcm9qZWN0LWJ0blwiKTtcbiAgY29uc3QgaGlkZVNpZGViYXJCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImhpZGUtaWNvblwiKTtcbiAgY29uc3Qgc2hvd1NpZGViYXJCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1lbnUtaWNvblwiKTtcblxuICBjb25zdCBwcm9qZWN0VUwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3RzLXVsXCIpO1xuXG4gIGNvbnN0IHRhc2sgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiaXRlbVwiKTtcbiAgY29uc3QgZWRpdFByb2plY3RCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVkaXQtcHJvamVjdFwiKTtcbiAgY29uc3QgZWRpdFRhc2tCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiZWRpdC1pdGVtXCIpO1xuICBjb25zdCBkZWxldGVUYXNrQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImRlbGV0ZS1pdGVtXCIpO1xuICBjb25zdCBjb21wbGV0ZUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJjb21wbGV0ZS1idG5cIik7XG4gIGNvbnN0IGRlbGV0ZVByb2plY3RCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiZGVsZXRlLXByb2plY3RcIik7XG5cbiAgbmV3UHJvamVjdEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgbmV3UHJvamVjdE1vZGFsUmVuZGVyKTtcbiAgaGlkZVNpZGViYXJCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGhpZGVTaWRlYmFyKTtcbiAgc2hvd1NpZGViYXJCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHNob3dTaWRlYmFyKTtcblxuICBpZiAobmV3VGFza0J0bikge1xuICAgIG5ld1Rhc2tCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIG5ld1Rhc2tNb2RhbFJlbmRlcik7XG4gIH1cblxuICBpZiAoY3VycmVudFByb2plY3RzTGlzdC5jb250ZW50Lmxlbmd0aCA+IDApIHtcbiAgICB3aGljaElzQWN0aXZlKGN1cnJlbnRQcm9qZWN0c0xpc3QpO1xuXG4gICAgaWYgKEFycmF5LmZyb20odGFzaykubGVuZ3RoID4gMCkge1xuICAgICAgQXJyYXkuZnJvbShlZGl0VGFza0J0bikuZm9yRWFjaCgoZSkgPT4ge1xuICAgICAgICBlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBlZGl0VGFza01vZGFsUmVuZGVyKTtcbiAgICAgIH0pO1xuICAgICAgQXJyYXkuZnJvbShkZWxldGVUYXNrQnRuKS5mb3JFYWNoKChlKSA9PiB7XG4gICAgICAgIGUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGRlbGV0ZUl0ZW0pO1xuICAgICAgfSk7XG4gICAgICBBcnJheS5mcm9tKGNvbXBsZXRlQnRuKS5mb3JFYWNoKChlKSA9PiB7XG4gICAgICAgIGUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNoYW5nZUNvbXBsZXRlT3B0aW9uKTtcbiAgICAgIH0pO1xuICAgICAgQXJyYXkuZnJvbShkZWxldGVQcm9qZWN0QnRuKS5mb3JFYWNoKChlKSA9PiB7XG4gICAgICAgIGUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGRlbGV0ZVByb2plY3QpO1xuICAgICAgfSk7XG4gICAgfVxuICAgIC8vbmV3XG5cbiAgICBlZGl0UHJvamVjdEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZWRpdFByb2plY3RNb2RhbFJlbmRlcik7XG4gICAgQXJyYXkuZnJvbShwcm9qZWN0VUwuY2hpbGROb2RlcykuZm9yRWFjaCgoZSkgPT4ge1xuICAgICAgZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2hhbmdlQWN0aXZlUHJvamVjdCk7XG4gICAgfSk7XG4gIH1cbn1cbiIsIi8qIFxuXG4gIC0tTUVUSE9EUy0tXG5cbiovXG5cbmNvbnN0IGFkZE5ld0l0ZW0gPSBmdW5jdGlvbiAoaXRlbSkge1xuICB0aGlzLmNvbnRlbnQucHVzaChpdGVtKTtcbn07XG5cbmNvbnN0IHJhbmRvbUlkID0gZnVuY3Rpb24gKHR5cGUpIHtcbiAgY29uc3QgbnVtID0gYCR7TWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApfSR7TWF0aC5mbG9vcihcbiAgICBNYXRoLnJhbmRvbSgpICogMTBcbiAgKX0ke01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKX1gO1xuICByZXR1cm4gYCR7dHlwZX0ke251bX1gO1xufTtcblxuY29uc3QgY2hlY2tEdXBsaWNhdGVJdGVtID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgbGV0IGlkID0gcmFuZG9tSWQoaXRlbS50eXBlKTtcbiAgZm9yIChjb25zdCBwcm9qZWN0IG9mIHRoaXMuY29udGVudCkge1xuICAgIGZvciAoY29uc3QgZWwgb2YgcHJvamVjdC5jb250ZW50KSB7XG4gICAgICBpZiAoZWwuaWQgIT09IFwiXCIgJiYgZWwuaWQgPT09IGlkKSB7XG4gICAgICAgIHRoaXMuY2hlY2tEdXBsaWNhdGVJdGVtKGl0ZW0pO1xuICAgICAgfVxuICAgIH1cbiAgICBpdGVtLmFzc2lnbklkKGlkKTtcbiAgICByZXR1cm47XG4gIH1cbn07XG5cbmNvbnN0IGNoZWNrRHVwbGljYXRlUHJvamVjdCA9IGZ1bmN0aW9uIChlbCkge1xuICBsZXQgaWQgPSByYW5kb21JZChlbC50eXBlKTtcbiAgZm9yIChjb25zdCBwcm9qZWN0IG9mIHRoaXMuY29udGVudCkge1xuICAgIGlmIChwcm9qZWN0LmlkID09PSBpZCAmJiBwcm9qZWN0LmlkKSB7XG4gICAgICB0aGlzLmNoZWNrRHVwbGljYXRlUHJvamVjdChlbCk7XG4gICAgfVxuICB9XG4gIGVsLmFzc2lnbklkKGlkKTtcbiAgcmV0dXJuO1xufTtcblxuY29uc3QgYXNzaWduSWQgPSBmdW5jdGlvbiAoaWQpIHtcbiAgdGhpcy5pZCA9IGlkO1xufTtcblxuY29uc3Qgc2V0QWN0aXZlUHJvamVjdCA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIGl0ZW0uYWN0aXZlID0gdHJ1ZTtcbn07XG5cbmNvbnN0IHNldEluYWN0aXZlUHJvamVjdHMgPSBmdW5jdGlvbiAoKSB7XG4gIGZvciAoY29uc3QgZWwgb2YgdGhpcy5jb250ZW50KSB7XG4gICAgZWwuYWN0aXZlID0gZmFsc2U7XG4gIH1cbn07XG5cbmNvbnN0IGNoZWNrQWN0aXZlUHJvamVjdCA9IGZ1bmN0aW9uICgpIHtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmNvbnRlbnQubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAodGhpcy5jb250ZW50W2ldLmFjdGl2ZSA9PT0gdHJ1ZSkge1xuICAgICAgY29uc3QgYWN0aXZlID0gdGhpcy5jb250ZW50W2ldO1xuICAgICAgcmV0dXJuIGFjdGl2ZTtcbiAgICB9XG4gIH1cbn07XG5cbmNvbnN0IGVkaXRJdGVtID0gZnVuY3Rpb24gKHRpdGxlLCBkZXNjcmlwdGlvbiwgZGF0ZSwgcHJpb3JpdHkpIHtcbiAgaWYgKGRlc2NyaXB0aW9uICYmIGRhdGUgJiYgcHJpb3JpdHkpIHtcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgdGhpcy5kYXRlID0gZGF0ZTtcbiAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XG4gIH1cbiAgdGhpcy50aXRsZSA9IHRpdGxlO1xufTtcblxuY29uc3QgZ2V0SXRlbSA9IGZ1bmN0aW9uIChpZCkge1xuICBjb25zdCBsZW4gPSB0aGlzLmNvbnRlbnQubGVuZ3RoO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgaWYgKHRoaXMuY29udGVudFtpXS5pZCA9PT0gaWQpIHtcbiAgICAgIHJldHVybiB0aGlzLmNvbnRlbnRbaV07XG4gICAgfVxuICB9XG59O1xuXG5jb25zdCBkZWxldGVMaXN0SXRlbSA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIGxldCBwb3M7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5jb250ZW50Lmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHRoaXMuY29udGVudFtpXSA9PT0gaXRlbSkge1xuICAgICAgcG9zID0gaTtcbiAgICB9XG4gIH1cbiAgaWYgKHBvcyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5jb250ZW50LnNwbGljZShwb3MsIDEpO1xuICAgIGl0ZW0uZGVsVGVtcCgpO1xuICB9XG59O1xuXG5jb25zdCBkZWxUZW1wID0gZnVuY3Rpb24gKCkge1xuICBmb3IgKGNvbnN0IHByb3AgaW4gdGhpcykge1xuICAgIHRoaXNbcHJvcF0gPSBudWxsO1xuICB9XG59O1xuXG5jb25zdCBzZXRUZW1wSWQgPSBmdW5jdGlvbiAoaWQpIHtcbiAgdGhpcy5pZCA9IGlkO1xufTtcblxuY29uc3Qgc2V0Q29tcGxldGUgPSBmdW5jdGlvbiAoKSB7XG4gIHRoaXMuY29tcGxldGUgPSAhdGhpcy5jb21wbGV0ZTtcbn07XG5cbmNvbnN0IGdldFByb2plY3RCeUl0ZW1JZCA9IGZ1bmN0aW9uIChpZCkge1xuICBmb3IgKGNvbnN0IHByb2plY3Qgb2YgdGhpcy5jb250ZW50KSB7XG4gICAgY29uc3QgSXRlbUdvdHRlbiA9IHByb2plY3QuZ2V0SXRlbShpZCk7XG4gICAgaWYgKEl0ZW1Hb3R0ZW4pIHtcbiAgICAgIHJldHVybiBwcm9qZWN0O1xuICAgIH1cbiAgfVxufTtcblxuY29uc3QgZ2V0SXRlbUJ5UHJpb3JpdHkgPSBmdW5jdGlvbiAocHJpb3JpdHkpIHtcbiAgY29uc3QgYXJyID0gW107XG4gIGZvciAoY29uc3QgcHJvamVjdCBvZiB0aGlzLmNvbnRlbnQpIHtcbiAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgcHJvamVjdC5jb250ZW50KSB7XG4gICAgICBpZiAoaXRlbS5wcmlvcml0eSA9PT0gcHJpb3JpdHkpIHtcbiAgICAgICAgYXJyLnB1c2goaXRlbSk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiBhcnI7XG59O1xuXG5jb25zdCBnZXRJdGVtQnlEdWVEYXRlID0gZnVuY3Rpb24gKCkge1xuICBjb25zdCBhcnIgPSBbXTtcbiAgY29uc3QgdG9kYXkgPSBuZXcgRGF0ZSgpO1xuICBmb3IgKGNvbnN0IHByb2plY3Qgb2YgdGhpcy5jb250ZW50KSB7XG4gICAgZm9yIChjb25zdCBpdGVtIG9mIHByb2plY3QuY29udGVudCkge1xuICAgICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKGl0ZW0uZGF0ZSk7XG4gICAgICBjb25zdCBvZmZzZXQgPSBkYXRlLmdldFRpbWV6b25lT2Zmc2V0KCkgKiA2MDAwMDtcbiAgICAgIGNvbnN0IGRhdGVPZmYgPSBOdW1iZXIoZGF0ZSkgKyBvZmZzZXQ7XG4gICAgICBjb25zdCBkYXlzUmVtYWluaW5nID0gKGRhdGVPZmYgLSB0b2RheSkgLyA4NjQwMDAwMDtcbiAgICAgIGlmIChkYXlzUmVtYWluaW5nID4gMCAmJiBkYXlzUmVtYWluaW5nIDwgNykge1xuICAgICAgICBhcnIucHVzaChpdGVtKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIGFycjtcbn07XG4vKiBcblxuICAtLVRBU0sgQ09OU1RSVUNUT1ItLVxuXG4qL1xuXG5leHBvcnQgZnVuY3Rpb24gVGFzayh0aXRsZSwgZGVzY3JpcHRpb24sIGRhdGUsIHByaW9yaXR5KSB7XG4gIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICB0aGlzLmRhdGUgPSBkYXRlO1xuICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XG4gIHRoaXMudHlwZSA9IFwiVFwiO1xuICB0aGlzLmlkID0gXCJcIjtcbiAgdGhpcy5jb21wbGV0ZSA9IGZhbHNlO1xufVxuXG5UYXNrLnByb3RvdHlwZS5lZGl0SXRlbSA9IGVkaXRJdGVtO1xuVGFzay5wcm90b3R5cGUuZGVsVGVtcCA9IGRlbFRlbXA7XG5UYXNrLnByb3RvdHlwZS5zZXRDb21wbGV0ZSA9IHNldENvbXBsZXRlO1xuVGFzay5wcm90b3R5cGUuYXNzaWduSWQgPSBhc3NpZ25JZDtcblxuLyogXG5cbiAgLS1QUk9KRUNUIENPTlNUUlVDVE9SLS1cblxuKi9cblxuZXhwb3J0IGZ1bmN0aW9uIFByb2plY3QodGl0bGUpIHtcbiAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICB0aGlzLnR5cGUgPSBcIlBcIjtcbiAgdGhpcy5hY3RpdmUgPSBmYWxzZTtcbiAgdGhpcy5jb250ZW50ID0gW107XG4gIHRoaXMuaWQgPSBcIlwiO1xufVxuXG5Qcm9qZWN0LnByb3RvdHlwZS5hZGROZXdJdGVtID0gYWRkTmV3SXRlbTtcblByb2plY3QucHJvdG90eXBlLnJhbmRvbUlkID0gcmFuZG9tSWQ7XG5Qcm9qZWN0LnByb3RvdHlwZS5hc3NpZ25JZCA9IGFzc2lnbklkO1xuUHJvamVjdC5wcm90b3R5cGUuZWRpdEl0ZW0gPSBlZGl0SXRlbTtcblByb2plY3QucHJvdG90eXBlLmdldEl0ZW0gPSBnZXRJdGVtO1xuUHJvamVjdC5wcm90b3R5cGUuZGVsZXRlTGlzdEl0ZW0gPSBkZWxldGVMaXN0SXRlbTtcblByb2plY3QucHJvdG90eXBlLmRlbFRlbXAgPSBkZWxUZW1wO1xuXG4vKiBcblxuICAtLVBST0pFQ1RTIEFSUkFZIENPTlNUUlVDVE9SLS1cblxuKi9cblxuZXhwb3J0IGZ1bmN0aW9uIFByb2plY3RzQXJyKCkge1xuICB0aGlzLmNvbnRlbnQgPSBbXTtcbn1cblByb2plY3RzQXJyLnByb3RvdHlwZS5hZGROZXdJdGVtID0gYWRkTmV3SXRlbTtcblByb2plY3RzQXJyLnByb3RvdHlwZS5jaGVja0R1cGxpY2F0ZUl0ZW0gPSBjaGVja0R1cGxpY2F0ZUl0ZW07XG5Qcm9qZWN0c0Fyci5wcm90b3R5cGUuY2hlY2tEdXBsaWNhdGVQcm9qZWN0ID0gY2hlY2tEdXBsaWNhdGVQcm9qZWN0O1xuUHJvamVjdHNBcnIucHJvdG90eXBlLmNoZWNrQWN0aXZlUHJvamVjdCA9IGNoZWNrQWN0aXZlUHJvamVjdDtcblByb2plY3RzQXJyLnByb3RvdHlwZS5zZXRBY3RpdmVQcm9qZWN0ID0gc2V0QWN0aXZlUHJvamVjdDtcblByb2plY3RzQXJyLnByb3RvdHlwZS5zZXRJbmFjdGl2ZVByb2plY3RzID0gc2V0SW5hY3RpdmVQcm9qZWN0cztcblByb2plY3RzQXJyLnByb3RvdHlwZS5nZXRJdGVtID0gZ2V0SXRlbTtcblByb2plY3RzQXJyLnByb3RvdHlwZS5nZXRQcm9qZWN0QnlJdGVtSWQgPSBnZXRQcm9qZWN0QnlJdGVtSWQ7XG5Qcm9qZWN0c0Fyci5wcm90b3R5cGUuZ2V0SXRlbUJ5UHJpb3JpdHkgPSBnZXRJdGVtQnlQcmlvcml0eTtcblByb2plY3RzQXJyLnByb3RvdHlwZS5nZXRJdGVtQnlEdWVEYXRlID0gZ2V0SXRlbUJ5RHVlRGF0ZTtcblByb2plY3RzQXJyLnByb3RvdHlwZS5kZWxldGVMaXN0SXRlbSA9IGRlbGV0ZUxpc3RJdGVtO1xuXG4vKiBcblxuICAtLVRFTVBPUkFSWSBPQkogVE8gU1RPUkUgSUQtLVxuXG4qL1xuXG5leHBvcnQgZnVuY3Rpb24gVGVtcG9yYXJ5SWQoaWQpIHtcbiAgdGhpcy5pZCA9IGlkO1xufVxuVGVtcG9yYXJ5SWQucHJvdG90eXBlLmRlbFRlbXAgPSBkZWxUZW1wO1xuVGVtcG9yYXJ5SWQucHJvdG90eXBlLnNldFRlbXBJZCA9IHNldFRlbXBJZDtcblxuZXhwb3J0IGNvbnN0IGN1cnJlbnRQcm9qZWN0c0xpc3QgPSBuZXcgUHJvamVjdHNBcnIoKTtcblxuLyogXG5cbiAgLS1URVNUUy0tXG5cbiovXG5cbi8qIGNvbnN0IHdvcmsgPSBuZXcgUHJvamVjdChcIldvcmtcIik7XG5jb25zdCBtaXNjID0gbmV3IFByb2plY3QoXCJNaXNjZWxsYW5lb3VzXCIpO1xuY29uc3Qgd29yazEgPSBuZXcgVGFzayhcbiAgXCJ0aXRvbG9cIixcbiAgXCJkZXNjcml6aW9uZSBkaSBzdGEgY2lwcGEgc3RhIGNlcHBhIGUgc3RhIGNpYXBwYVwiLFxuICBcIjIwMjQtMDItMjBcIixcbiAgXCJoXCJcbik7XG5jb25zdCB3b3JrMiA9IG5ldyBUYXNrKFxuICBcInRpdG9sbzJcIixcbiAgXCJkZXNjcml6aW9uZSBkaSBzdGEgY2lwcGEgc3RhIGNlcHBhIGUgc3RhIGNoaWFwcGFcIixcbiAgXCIyMDI0LTAyLTI0XCIsXG4gIFwibVwiXG4pO1xuXG5jb25zdCBtaXNjMSA9IG5ldyBUYXNrKFwibWlzYzFcIiwgXCJkZXNjMVwiLCBcIjIwMjQtMDMtMDJcIiwgXCJsXCIpO1xuY29uc3QgbWlzYzIgPSBuZXcgVGFzayhcIm1pc2MyXCIsIFwiZGVzYzJcIiwgXCIyMDI0LTAyLTIwXCIsIFwiaFwiKTtcbmNvbnN0IG1pc2MzID0gbmV3IFRhc2soXCJtaXNjM1wiLCBcImRlc2MzXCIsIFwiMjAyNC0wMi0xMlwiLCBcIm1cIik7XG5cbmN1cnJlbnRQcm9qZWN0c0xpc3QuYWRkTmV3SXRlbSh3b3JrKTtcbmN1cnJlbnRQcm9qZWN0c0xpc3QuYWRkTmV3SXRlbShtaXNjKTtcblxud29yay5hZGROZXdJdGVtKHdvcmsxKTtcbndvcmsuYWRkTmV3SXRlbSh3b3JrMik7XG5cbm1pc2MuYWRkTmV3SXRlbShtaXNjMSk7XG5taXNjLmFkZE5ld0l0ZW0obWlzYzIpO1xubWlzYy5hZGROZXdJdGVtKG1pc2MzKTsgKi9cbiIsImltcG9ydCBcIi4uL3N0eWxlLmNzc1wiO1xuXG5pbXBvcnQgYWRkU1ZHIGZyb20gXCIuLi9pbWFnZXMvYWRkLnN2Z1wiO1xuaW1wb3J0IGNvbXBsZXRlU1ZHIGZyb20gXCIuLi9pbWFnZXMvY29tcGxldGUuc3ZnXCI7XG5pbXBvcnQgaW5jb21wbGV0ZVNWRyBmcm9tIFwiLi4vaW1hZ2VzL2luY29tcGxldGUuc3ZnXCI7XG5pbXBvcnQgc2hlZXRTdGFja1NWRyBmcm9tIFwiLi4vaW1hZ2VzL3N0YWNrLW9mLXNoZWV0cy5zdmdcIjtcblxuaW1wb3J0IHtcbiAgVGFzayxcbiAgUHJvamVjdCxcbiAgY3VycmVudFByb2plY3RzTGlzdCxcbiAgVGVtcG9yYXJ5SWQsXG59IGZyb20gXCIuL2ludGVybmFsTG9naWNcIjtcbmltcG9ydCB7XG4gIHJlbmRlclNpZGViYXIsXG4gIHJlbmRlclNpbmdsZVByb2plY3QsXG4gIHJlbmRlclNpbmdsZVRhc2ssXG4gIHJlbmRlclRvcENvbnRlbnQsXG59IGZyb20gXCIuL3JlbmRlclNpbmdsZUVsXCI7XG5pbXBvcnQge1xuICBwcm9qZWN0TW9kYWxDcmVhdGVFbGVtZW50LFxuICBuZXdUYXNrTW9kYWxSZW5kZXIsXG4gIGVkaXRUYXNrTW9kYWxSZW5kZXIsXG4gIG5ld1Byb2plY3RNb2RhbFJlbmRlcixcbiAgZWRpdFByb2plY3RNb2RhbFJlbmRlcixcbn0gZnJvbSBcIi4vbW9kYWxSZW5kZXJcIjtcblxuY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250YWluZXJcIik7XG5jb25zdCBoZWFkID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJoZWFkXCIpO1xuY29uc3QgZmF2aWNvbkljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlua1wiKTtcbmNvbnN0IGZhdmljb25NYXNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpbmtcIik7XG5cbmZhdmljb25JY29uLnJlbCA9IFwiaWNvblwiO1xuZmF2aWNvbkljb24uaHJlZiA9IHNoZWV0U3RhY2tTVkc7XG5cbmZhdmljb25NYXNrLnJlbCA9IFwibWFzay1pY29uXCI7XG5mYXZpY29uTWFzay5ocmVmID0gc2hlZXRTdGFja1NWRztcbmZhdmljb25NYXNrLmNvbG9yID0gXCIjMzQ0M2FlXCI7XG4vKiBcbjxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiLi4vc3JjL2ltYWdlcy9zdGFjay1vZi1zaGVldHMuc3ZnXCIgLz5cbjxsaW5rXG4gIHJlbD1cIuKAnW1hc2staWNvbuKAnVwiXG4gIGhyZWY9XCIuLi9zcmMvaW1hZ2VzL3N0YWNrLW9mLXNoZWV0cy5zdmdcIlxuICBjb2xvcj1cIiMzNDQzYWVcIlxuLz5cbiovXG5cbmV4cG9ydCBjb25zdCBpdGVtRWRpdGVkID0gbmV3IFRlbXBvcmFyeUlkKFwiXCIpO1xuXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyQ29udGFpbmVyKCkge1xuICBjb25zdCBzaWRlYmFyUmVuZGVyZWQgPSByZW5kZXJTaWRlYmFyKCk7XG4gIGNvbnN0IGFjdGl2ZVByb2plY3QgPSB3aGljaElzQWN0aXZlKGN1cnJlbnRQcm9qZWN0c0xpc3QpIHx8IG5ldyBQcm9qZWN0KFwiXCIpO1xuICBjb25zdCBtYWluID0gcmVuZGVyTWFpbihhY3RpdmVQcm9qZWN0LmNvbnRlbnQsIGFjdGl2ZVByb2plY3QudGl0bGUpO1xuXG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChzaWRlYmFyUmVuZGVyZWQpO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQobWFpbik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJNYWluKGdyb3VwLCB0aXRsZSkge1xuICBjb25zdCBuZXdNYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgdG9wQ29udGVudCA9IHJlbmRlclRvcENvbnRlbnQodGl0bGUpO1xuICBjb25zdCBhZGRJdGVtSW1nID0gbmV3IEltYWdlKCk7XG5cbiAgbmV3TWFpbi5pZCA9IFwibWFpblwiO1xuXG4gIHJlbmRlclRhc2tzKGdyb3VwLCBuZXdNYWluKTsgLy9hY3RpdmVQcm9qZWN0XG5cbiAgYWRkSXRlbUltZy5pZCA9IFwiYWRkLWl0ZW1cIjtcbiAgYWRkSXRlbUltZy5zcmMgPSBhZGRTVkc7XG4gIGFkZEl0ZW1JbWcuc3R5bGUubWFyZ2luTGVmdCA9IGAkey0oYWRkSXRlbUltZy5vZmZzZXRXaWR0aCAvIDIpfXB4YDtcblxuICBuZXdNYWluLmFwcGVuZENoaWxkKGFkZEl0ZW1JbWcpO1xuICBuZXdNYWluLmFwcGVuZENoaWxkKHRvcENvbnRlbnQpO1xuXG4gIGFkZEl0ZW1JbWcuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIG5ld1Rhc2tNb2RhbFJlbmRlcik7XG5cbiAgcmV0dXJuIG5ld01haW47XG59XG5cbmZ1bmN0aW9uIHJlbmRlclRhc2tzKGFyciwgRE9NZWwpIHtcbiAgaWYgKGFyci5sZW5ndGggPiAwKSB7XG4gICAgZm9yIChjb25zdCB0YXNrIG9mIGFycikge1xuICAgICAgRE9NZWwuYXBwZW5kQ2hpbGQocmVuZGVyU2luZ2xlVGFzayh0YXNrKSk7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB3aGljaElzQWN0aXZlKHByb2plY3RzKSB7XG4gIGlmIChjdXJyZW50UHJvamVjdHNMaXN0LmNvbnRlbnQubGVuZ3RoID4gMCkge1xuICAgIGxldCBpc0FjdGl2ZSA9IHByb2plY3RzLmNoZWNrQWN0aXZlUHJvamVjdCgpO1xuICAgIGlmIChpc0FjdGl2ZSkge1xuICAgICAgcmV0dXJuIGlzQWN0aXZlO1xuICAgIH0gZWxzZSB7XG4gICAgICBwcm9qZWN0cy5zZXRBY3RpdmVQcm9qZWN0KHByb2plY3RzLmNvbnRlbnRbMF0pO1xuICAgICAgaXNBY3RpdmUgPSBwcm9qZWN0cy5jaGVja0FjdGl2ZVByb2plY3QoKTtcbiAgICAgIHJldHVybiBpc0FjdGl2ZTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGhpZGVTaWRlYmFyKCkge1xuICBjb25zdCBzaWRlYmFyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0c1wiKTtcbiAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFpblwiKTtcbiAgbWFpbi53aWR0aCA9IFwiMTAwJVwiO1xuXG4gIHNpZGViYXIuY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBzaG93U2lkZWJhcigpIHtcbiAgY29uc3Qgc2lkZWJhciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdHNcIik7XG5cbiAgc2lkZWJhci5jbGFzc0xpc3QuYWRkKFwidmlzaWJsZVwiKTtcbiAgc2lkZWJhci5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZGVuXCIpO1xuICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICBzaWRlYmFyLmNsYXNzTGlzdC5yZW1vdmUoXCJ2aXNpYmxlXCIpO1xuICB9LCA1MDApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2V0UHJpb3JpdHkoRE9NZWwsIGl0ZW0pIHtcbiAgaWYgKGl0ZW0ucHJpb3JpdHkgPT09IFwiaFwiKSB7XG4gICAgRE9NZWwuc3R5bGUuYmFja2dyb3VuZCA9IFwiI2ZmMzQzNFwiO1xuICAgIERPTWVsLnRleHRDb250ZW50ID0gXCJIaWdoIHByaW9yaXR5XCI7XG4gIH0gZWxzZSBpZiAoaXRlbS5wcmlvcml0eSA9PT0gXCJtXCIpIHtcbiAgICBET01lbC5zdHlsZS5iYWNrZ3JvdW5kID0gXCIjZmZlMDMzXCI7XG4gICAgRE9NZWwudGV4dENvbnRlbnQgPSBcIk1lZGl1bSBwcmlvcml0eVwiO1xuICB9IGVsc2Uge1xuICAgIERPTWVsLnN0eWxlLmJhY2tncm91bmQgPSBcIiM2YWZmMmFcIjtcbiAgICBET01lbC50ZXh0Q29udGVudCA9IFwiTG93IHByaW9yaXR5XCI7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlbGV0ZUl0ZW0oZSkge1xuICBjb25zdCBhY3RpdmVQcm9qZWN0ID0gY3VycmVudFByb2plY3RzTGlzdC5nZXRQcm9qZWN0QnlJdGVtSWQoXG4gICAgZS50YXJnZXQucGFyZW50Tm9kZS5pZFxuICApO1xuICBjb25zdCB0YXNrID0gYWN0aXZlUHJvamVjdC5nZXRJdGVtKGUudGFyZ2V0LnBhcmVudE5vZGUuaWQpO1xuICBlLnRhcmdldC5wYXJlbnROb2RlLnJlbW92ZSgpO1xuICBhY3RpdmVQcm9qZWN0LmRlbGV0ZUxpc3RJdGVtKHRhc2spO1xufVxuLyogXG5cbnRoZXJlIGlzIHByb2JhYmx5IGEgYmV0dGVyIHdheSB0byB3cml0ZSB0aGlzIGZ1bmN0aW9uXG5cbiovXG5leHBvcnQgZnVuY3Rpb24gZGVsZXRlUHJvamVjdChlKSB7XG4gIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gIGNvbnN0IHByb2plY3QgPSBjdXJyZW50UHJvamVjdHNMaXN0LmdldEl0ZW0oZS50YXJnZXQucGFyZW50Tm9kZS5pZCk7XG5cbiAgY3VycmVudFByb2plY3RzTGlzdC5kZWxldGVMaXN0SXRlbShwcm9qZWN0KTtcblxuICBpZiAoY3VycmVudFByb2plY3RzTGlzdC5jb250ZW50Lmxlbmd0aCA9PT0gMCkge1xuICAgIGNvbnN0IHRoaXNXZWVrID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuZXh0LXdlZWtcIik7XG4gICAgZS50YXJnZXQucGFyZW50Tm9kZS5yZW1vdmUoKTtcbiAgICB0aGlzV2Vlay5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICAgIHNob3dHcm91cCh0aGlzV2Vlayk7XG4gIH0gZWxzZSB7XG4gICAgLy9jb25zdCBhY3RpdmVQcm9qZWN0ID0gd2hpY2hJc0FjdGl2ZShjdXJyZW50UHJvamVjdHNMaXN0KTtcbiAgICBjb25zdCBsYXRlTWFpbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFpblwiKTtcbiAgICBjb25zdCBsYXRlU2lkZWJhciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdHNcIik7XG5cbiAgICBsYXRlTWFpbi5yZW1vdmUoKTtcbiAgICBsYXRlU2lkZWJhci5yZW1vdmUoKTtcbiAgICByZW5kZXJDb250YWluZXIoKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gc2V0Q29tcGxldGVPcHRpb24odGFzaywgRE9NZWwpIHtcbiAgaWYgKHRhc2suY29tcGxldGUpIHtcbiAgICBET01lbC5zcmMgPSBjb21wbGV0ZVNWRztcbiAgfSBlbHNlIHtcbiAgICBET01lbC5zcmMgPSBpbmNvbXBsZXRlU1ZHO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjaGFuZ2VDb21wbGV0ZU9wdGlvbihlKSB7XG4gIGNvbnN0IGlkID0gZS50YXJnZXQucGFyZW50Tm9kZS5wYXJlbnROb2RlLmlkO1xuICBjb25zdCBwcm9qZWN0ID0gY3VycmVudFByb2plY3RzTGlzdC5nZXRQcm9qZWN0QnlJdGVtSWQoaWQpO1xuICBjb25zdCB0YXNrID0gcHJvamVjdC5nZXRJdGVtKGlkKTtcblxuICB0YXNrLnNldENvbXBsZXRlKCk7XG5cbiAgZS50YXJnZXQuY2xhc3NMaXN0ICs9IFwiIGZhZGUtb3V0XCI7XG4gIGUudGFyZ2V0LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjaGFuZ2VDb21wbGV0ZU9wdGlvbik7XG5cbiAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgc2V0Q29tcGxldGVPcHRpb24odGFzaywgZS50YXJnZXQpO1xuICAgIGUudGFyZ2V0LmNsYXNzTmFtZSA9IFwiY29tcGxldGUtYnRuIGZhZGUtaW5cIjtcblxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgZS50YXJnZXQuY2xhc3NOYW1lID0gXCJjb21wbGV0ZS1idG5cIjtcbiAgICAgIGUudGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjaGFuZ2VDb21wbGV0ZU9wdGlvbik7XG4gICAgfSwgNTAwKTtcbiAgfSwgNTAwKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlYWN0aXZhdGVBbGxQcm9qZWN0cyhlKSB7XG4gIGNvbnN0IHByb2plY3RVbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdHMtdWxcIik7XG4gIGN1cnJlbnRQcm9qZWN0c0xpc3Quc2V0SW5hY3RpdmVQcm9qZWN0cygpO1xuICBBcnJheS5mcm9tKHByb2plY3RVbC5jaGlsZE5vZGVzKS5mb3JFYWNoKChlbCkgPT4ge1xuICAgIGVsLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gIH0pO1xuICBpZiAoIWUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcImFjdGl2ZVwiKSkge1xuICAgIEFycmF5LmZyb20oZS50YXJnZXQucGFyZW50Tm9kZS5jaGlsZHJlbikuZm9yRWFjaCgoZWwpID0+IHtcbiAgICAgIGlmIChlbCAhPT0gZS50YXJnZXQpIHtcbiAgICAgICAgZWwuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNob3dHcm91cChlKSB7XG4gIGNvbnN0IGxhdGVNYWluID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluXCIpO1xuICBsZXQgbmV3TWFpbjtcbiAgaWYgKGUudGFyZ2V0KSB7XG4gICAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcInByaW9yaXR5LWdyb3VwXCIpKSB7XG4gICAgICBjb25zdCBwID0gZS50YXJnZXQuaWRbMV07XG4gICAgICBuZXdNYWluID0gcmVuZGVyTWFpbihcbiAgICAgICAgY3VycmVudFByb2plY3RzTGlzdC5nZXRJdGVtQnlQcmlvcml0eShwKSxcbiAgICAgICAgZS50YXJnZXQudGV4dENvbnRlbnRcbiAgICAgICk7XG4gICAgfSBlbHNlIGlmIChlLnRhcmdldC5pZCA9PT0gXCJuZXh0LXdlZWtcIikge1xuICAgICAgbmV3TWFpbiA9IHJlbmRlck1haW4oXG4gICAgICAgIGN1cnJlbnRQcm9qZWN0c0xpc3QuZ2V0SXRlbUJ5RHVlRGF0ZSgpLFxuICAgICAgICBlLnRhcmdldC50ZXh0Q29udGVudFxuICAgICAgKTtcbiAgICB9XG4gIH0gZWxzZSBpZiAoZS5jbGFzc0xpc3QuY29udGFpbnMoXCJwcmlvcml0eS1ncm91cFwiKSkge1xuICAgIGNvbnN0IHAgPSBlLmlkWzFdO1xuICAgIG5ld01haW4gPSByZW5kZXJNYWluKFxuICAgICAgY3VycmVudFByb2plY3RzTGlzdC5nZXRJdGVtQnlQcmlvcml0eShwKSxcbiAgICAgIGUudGV4dENvbnRlbnRcbiAgICApO1xuICB9IGVsc2UgaWYgKGUuaWQgPT09IFwibmV4dC13ZWVrXCIpIHtcbiAgICBuZXdNYWluID0gcmVuZGVyTWFpbihjdXJyZW50UHJvamVjdHNMaXN0LmdldEl0ZW1CeUR1ZURhdGUoKSwgZS50ZXh0Q29udGVudCk7XG4gIH1cblxuICBsYXRlTWFpbi5yZW1vdmUoKTtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKG5ld01haW4pO1xuICBjb25zdCBlZGl0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlZGl0LXByb2plY3RcIik7XG4gIGNvbnN0IGFkZFRhc2sgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZC1pdGVtXCIpO1xuICBhZGRUYXNrLnJlbW92ZSgpO1xuICBlZGl0LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBlZGl0UHJvamVjdE1vZGFsUmVuZGVyKTtcbn1cbiIsImltcG9ydCB7IHdoaWNoSXNBY3RpdmUsIGl0ZW1FZGl0ZWQsIHNob3dHcm91cCB9IGZyb20gXCIuL2xvYWRET01jcmFwXCI7XG5pbXBvcnQgeyByZW5kZXJTaW5nbGVQcm9qZWN0LCByZW5kZXJUb3BDb250ZW50IH0gZnJvbSBcIi4vcmVuZGVyU2luZ2xlRWxcIjtcbmltcG9ydCB7XG4gIFRhc2ssXG4gIFByb2plY3QsXG4gIGN1cnJlbnRQcm9qZWN0c0xpc3QsXG4gIFRlbXBvcmFyeUlkLFxufSBmcm9tIFwiLi9pbnRlcm5hbExvZ2ljXCI7XG5pbXBvcnQgeyByZW5kZXJTaW5nbGVUYXNrIH0gZnJvbSBcIi4vcmVuZGVyU2luZ2xlRWxcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGNvbmZpcm1OZXdUYXNrKCkge1xuICBjb25zdCBtYWluID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluXCIpO1xuICBjb25zdCBmb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpdGVtLW1vZGFsXCIpO1xuICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGl0bGUtaW5wdXRcIikudmFsdWU7XG4gIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkZXNjcmlwdGlvbi1pbnB1dFwiKS52YWx1ZTtcbiAgY29uc3QgZGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGF0ZS1pbnB1dFwiKS52YWx1ZTtcbiAgY29uc3QgcHJpb3JpdGllcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlOYW1lKFwicHJpb3JpdHlcIik7XG5cbiAgbGV0IHByaW9yaXR5O1xuICBBcnJheS5mcm9tKHByaW9yaXRpZXMpLmZvckVhY2goKGUpID0+IHtcbiAgICBpZiAoZS5jaGVja2VkKSB7XG4gICAgICBwcmlvcml0eSA9IGUuaWRbMF07XG4gICAgfVxuICB9KTtcblxuICBjb25zdCBhY3RpdmVQcm9qZWN0ID0gd2hpY2hJc0FjdGl2ZShjdXJyZW50UHJvamVjdHNMaXN0KTtcbiAgY29uc3QgbmV3VGFzayA9IG5ldyBUYXNrKHRpdGxlLCBkZXNjcmlwdGlvbiwgZGF0ZSwgcHJpb3JpdHkpO1xuXG4gIGFjdGl2ZVByb2plY3QuYWRkTmV3SXRlbShuZXdUYXNrKTtcbiAgY29uc3QgdGFza0RPTSA9IHJlbmRlclNpbmdsZVRhc2sobmV3VGFzayk7XG4gIG1haW4uYXBwZW5kQ2hpbGQodGFza0RPTSk7XG4gIGZvcm0ucmVtb3ZlKCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb25maXJtRWRpdFRhc2soKSB7XG4gIGNvbnN0IG1haW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1haW5cIik7XG4gIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIml0ZW0tbW9kYWxcIik7XG4gIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0aXRsZS1pbnB1dFwiKS52YWx1ZTtcbiAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRlc2NyaXB0aW9uLWlucHV0XCIpLnZhbHVlO1xuICBjb25zdCBkYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkYXRlLWlucHV0XCIpLnZhbHVlO1xuICBjb25zdCBwcmlvcml0aWVzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeU5hbWUoXCJwcmlvcml0eVwiKTtcbiAgY29uc3QgYWN0aXZlUHJvamVjdCA9IGN1cnJlbnRQcm9qZWN0c0xpc3QuZ2V0UHJvamVjdEJ5SXRlbUlkKGl0ZW1FZGl0ZWQuaWQpOyAvL3doaWNoSXNBY3RpdmUoY3VycmVudFByb2plY3RzTGlzdCk7XG4gIGNvbnN0IGR5bmFtaWNHcm91cFVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkeW5hbWljLXVsXCIpO1xuICBjb25zdCB0YXNrID0gYWN0aXZlUHJvamVjdC5nZXRJdGVtKGl0ZW1FZGl0ZWQuaWQpO1xuICBjb25zdCBET01JdGVtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaXRlbUVkaXRlZC5pZCk7XG4gIGxldCBwcmlvcml0eTtcblxuICBBcnJheS5mcm9tKHByaW9yaXRpZXMpLmZvckVhY2goKGUpID0+IHtcbiAgICBpZiAoZS5jaGVja2VkKSB7XG4gICAgICBwcmlvcml0eSA9IGUuaWRbMF07XG4gICAgfVxuICB9KTtcblxuICB0YXNrLmVkaXRJdGVtKHRpdGxlLCBkZXNjcmlwdGlvbiwgZGF0ZSwgcHJpb3JpdHkpO1xuXG4gIGxldCBwb3M7XG4gIEFycmF5LmZyb20obWFpbi5jaGlsZE5vZGVzKS5mb3JFYWNoKChlKSA9PiB7XG4gICAgaWYgKGUuaWQgPT09IERPTUl0ZW0uaWQpIHtcbiAgICAgIHBvcyA9IEFycmF5LmZyb20obWFpbi5jaGlsZE5vZGVzKS5pbmRleE9mKERPTUl0ZW0pO1xuICAgIH1cbiAgfSk7XG5cbiAgaWYgKGN1cnJlbnRQcm9qZWN0c0xpc3QuY2hlY2tBY3RpdmVQcm9qZWN0KCkpIHtcbiAgICBET01JdGVtLnJlbW92ZSgpO1xuICAgIG1haW4uaW5zZXJ0QmVmb3JlKHJlbmRlclNpbmdsZVRhc2sodGFzayksIG1haW4uY2hpbGRyZW5bcG9zXSk7XG4gIH0gZWxzZSB7XG4gICAgQXJyYXkuZnJvbShkeW5hbWljR3JvdXBVbC5jaGlsZHJlbikuZm9yRWFjaCgoZSkgPT4ge1xuICAgICAgaWYgKGUuY2xhc3NMaXN0LmNvbnRhaW5zKFwiYWN0aXZlXCIpKSB7XG4gICAgICAgIHNob3dHcm91cChlKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGZvcm0ucmVtb3ZlKCk7XG4gIGl0ZW1FZGl0ZWQuc2V0VGVtcElkKFwiXCIpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29uZmlybU5ld1Byb2plY3QoKSB7XG4gIGNvbnN0IHByb2plY3RVTCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdHMtdWxcIik7XG4gIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3QtbW9kYWxcIik7XG4gIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0LW5hbWVcIikudmFsdWU7XG4gIGNvbnN0IG5ld1Byb2plY3QgPSBuZXcgUHJvamVjdCh0aXRsZSk7XG5cbiAgY3VycmVudFByb2plY3RzTGlzdC5hZGROZXdJdGVtKG5ld1Byb2plY3QpO1xuXG4gIGNvbnN0IGxpID0gcmVuZGVyU2luZ2xlUHJvamVjdChuZXdQcm9qZWN0KTtcbiAgcHJvamVjdFVMLmFwcGVuZENoaWxkKGxpKTtcblxuICBmb3JtLnJlbW92ZSgpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29uZmlybUVkaXRQcm9qZWN0KCkge1xuICBjb25zdCBsYXRlVG9wQ29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWN0aXZlLXByb2plY3RcIik7XG4gIGNvbnN0IG1haW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1haW5cIik7XG4gIGNvbnN0IHByb2plY3RVTCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdHMtdWxcIik7XG4gIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3QtbW9kYWxcIik7XG4gIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0LW5hbWVcIikudmFsdWU7XG4gIGNvbnN0IHByb2plY3QgPSBjdXJyZW50UHJvamVjdHNMaXN0LmdldEl0ZW0oaXRlbUVkaXRlZC5pZCk7XG5cbiAgcHJvamVjdC5lZGl0SXRlbSh0aXRsZSk7XG5cbiAgQXJyYXkuZnJvbShwcm9qZWN0VUwuY2hpbGRyZW4pLmZvckVhY2goKGUpID0+IHtcbiAgICBpZiAoZS5pZCA9PT0gcHJvamVjdC5pZCkge1xuICAgICAgZS50ZXh0Q29udGVudCA9IHByb2plY3QudGl0bGU7XG4gICAgfVxuICB9KTtcblxuICBmb3JtLnJlbW92ZSgpO1xuICBsYXRlVG9wQ29udGVudC5yZW1vdmUoKTtcbiAgbWFpbi5hcHBlbmRDaGlsZChyZW5kZXJUb3BDb250ZW50KHdoaWNoSXNBY3RpdmUoY3VycmVudFByb2plY3RzTGlzdCkudGl0bGUpKTtcbn1cbiIsImltcG9ydCB7IGl0ZW1FZGl0ZWQsIHdoaWNoSXNBY3RpdmUgfSBmcm9tIFwiLi9sb2FkRE9NY3JhcFwiO1xuaW1wb3J0IHsgcmVtb3ZlSXJyZWxldmFudEV2ZW50TGlzdGVuZXJzIH0gZnJvbSBcIi4vZXZlbnRMaXN0ZW5lcnNNYW5hZ2VyXCI7XG5pbXBvcnQgeyB2YWxpZGF0ZU5ld01vZGFsLCB2YWxpZGF0ZUVkaXRNb2RhbCB9IGZyb20gXCIuL21vZGFsVmFsaWRhdGlvblwiO1xuaW1wb3J0IHtcbiAgVGFzayxcbiAgUHJvamVjdCxcbiAgY3VycmVudFByb2plY3RzTGlzdCxcbiAgVGVtcG9yYXJ5SWQsXG59IGZyb20gXCIuL2ludGVybmFsTG9naWNcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIG5ld1Rhc2tNb2RhbFJlbmRlcigpIHtcbiAgY29uc3QgZWxMaXN0ID0gbmV3VGFza01vZGFsQ3JlYXRlRWxlbWVudHMoKTtcbiAgY29uc3QgZm9ybVRvUmVuZGVyID0gbmV3VGFza1JlbmRlckxvb3BzKGVsTGlzdCk7XG5cbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKGZvcm1Ub1JlbmRlcik7XG4gIHJlbW92ZUlycmVsZXZhbnRFdmVudExpc3RlbmVycygpO1xuXG4gIGZvcm1Ub1JlbmRlci5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIHZhbGlkYXRlTmV3TW9kYWwpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZWRpdFRhc2tNb2RhbFJlbmRlcihlKSB7XG4gIGNvbnN0IGlkID0gZS50YXJnZXQucGFyZW50Tm9kZS5pZDtcblxuICBjb25zdCBhY3RpdmVQcm9qZWN0ID0gY3VycmVudFByb2plY3RzTGlzdC5nZXRQcm9qZWN0QnlJdGVtSWQoXG4gICAgZS50YXJnZXQucGFyZW50Tm9kZS5pZFxuICApO1xuICBjb25zdCB0YXNrVG9FZGl0ID0gYWN0aXZlUHJvamVjdC5nZXRJdGVtKGlkKTtcbiAgY29uc3QgZWxMaXN0ID0gbmV3VGFza01vZGFsQ3JlYXRlRWxlbWVudHMoKTtcbiAgY29uc3QgZm9ybVRvUmVuZGVyID0gbmV3VGFza1JlbmRlckxvb3BzKGVsTGlzdCk7XG5cbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKGZvcm1Ub1JlbmRlcik7XG5cbiAgY29uc3QgdGl0bGVJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGl0bGUtaW5wdXRcIik7XG4gIGNvbnN0IGRlc2NyaXB0aW9uSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRlc2NyaXB0aW9uLWlucHV0XCIpO1xuICBjb25zdCBkYXRlSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRhdGUtaW5wdXRcIik7XG4gIGNvbnN0IGhpZ2hQUmFkaW8gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImhpZ2gtcHJpb3JpdHlcIik7XG4gIGNvbnN0IG1lZGl1bVBSYWRpbyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWVkaXVtLXByaW9yaXR5XCIpO1xuICBjb25zdCBsb3dQUmFkaW8gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxvdy1wcmlvcml0eVwiKTtcblxuICB0aXRsZUlucHV0LnZhbHVlID0gdGFza1RvRWRpdC50aXRsZTtcbiAgZGVzY3JpcHRpb25JbnB1dC52YWx1ZSA9IHRhc2tUb0VkaXQuZGVzY3JpcHRpb247XG4gIGRhdGVJbnB1dC52YWx1ZSA9IHRhc2tUb0VkaXQuZGF0ZTtcblxuICBzd2l0Y2ggKHRhc2tUb0VkaXQucHJpb3JpdHkpIHtcbiAgICBjYXNlIFwiaFwiOlxuICAgICAgaGlnaFBSYWRpby5zZXRBdHRyaWJ1dGUoXCJjaGVja2VkXCIsIFwiXCIpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcIm1cIjpcbiAgICAgIG1lZGl1bVBSYWRpby5zZXRBdHRyaWJ1dGUoXCJjaGVja2VkXCIsIFwiXCIpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcImxcIjpcbiAgICAgIGxvd1BSYWRpby5zZXRBdHRyaWJ1dGUoXCJjaGVja2VkXCIsIFwiXCIpO1xuICAgICAgYnJlYWs7XG4gIH1cblxuICByZW1vdmVJcnJlbGV2YW50RXZlbnRMaXN0ZW5lcnMoKTtcblxuICBpdGVtRWRpdGVkLnNldFRlbXBJZChpZCk7XG5cbiAgZm9ybVRvUmVuZGVyLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgdmFsaWRhdGVFZGl0TW9kYWwpO1xufVxuXG4vL2RvaW5nIGl0IHRoZSBlYXN5IHdheSB3aXRoIGZvcm0uaW5uZXJIVE1MID0gYGFjdHVhbCBIVE1MYCB3YXMgd2F5IGJldHRlcih+NDBcbi8vbGluZXMgdnMgfjE1MCBsaW5lcyksIGJ1dCB3aGVuIGkgcmVhbGl6ZWQsIGkgd2FzIHRvbyBjb21taXR0ZWQgYWxyZWFkeSBoZW5jZVxuLy90aGUgYWJvbWluYXRpb24gYmVsb3cgd2FzIGNyZWF0ZWRcbmZ1bmN0aW9uIG5ld1Rhc2tNb2RhbENyZWF0ZUVsZW1lbnRzKCkge1xuICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIik7XG4gIGNvbnN0IGgyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICBjb25zdCBjb250YWluaW5nRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuICBjb25zdCB0aXRsZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICBjb25zdCB0aXRsZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuXG4gIGNvbnN0IGRlc2NyaXB0aW9uTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gIGNvbnN0IGRlc2NyaXB0aW9uSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGV4dGFyZWFcIik7XG5cbiAgY29uc3QgZGF0ZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICBjb25zdCBkYXRlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG5cbiAgY29uc3QgaHBSYWRpb0xhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICBjb25zdCBocFJhZGlvSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gIGNvbnN0IG1wUmFkaW9MYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgY29uc3QgbXBSYWRpb0lucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICBjb25zdCBscFJhZGlvTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gIGNvbnN0IGxwUmFkaW9JbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcblxuICBjb25zdCBjb25maXJtQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcblxuICAvL0FUVFJJQlVURVNcbiAgZm9ybS5pZCA9IFwiaXRlbS1tb2RhbFwiO1xuICBoMi50ZXh0Q29udGVudCA9IFwiUHJpb3JpdHk6XCI7XG5cbiAgdGl0bGVMYWJlbC50ZXh0Q29udGVudCA9IFwiVGl0bGU6XCI7XG4gIHRpdGxlTGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwidGl0bGUtaW5wdXRcIik7XG4gIHRpdGxlSW5wdXQuaWQgPSBcInRpdGxlLWlucHV0XCI7XG4gIHRpdGxlSW5wdXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInRleHRcIik7XG4gIHRpdGxlSW5wdXQuc2V0QXR0cmlidXRlKFwibWF4bGVuZ3RoXCIsIFwiMjVcIik7XG4gIHRpdGxlSW5wdXQuc2V0QXR0cmlidXRlKFwicmVxdWlyZWRcIiwgXCJcIik7XG5cbiAgZGVzY3JpcHRpb25MYWJlbC50ZXh0Q29udGVudCA9IFwiRGVzY3JpcHRpb246XCI7XG4gIGRlc2NyaXB0aW9uTGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwiZGVzY3JpcHRpb24taW5wdXRcIik7XG4gIGRlc2NyaXB0aW9uSW5wdXQuaWQgPSBcImRlc2NyaXB0aW9uLWlucHV0XCI7XG4gIGRlc2NyaXB0aW9uSW5wdXQuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcImRlc2NyaXB0aW9uLWlucHV0XCIpO1xuICBkZXNjcmlwdGlvbklucHV0LnNldEF0dHJpYnV0ZShcImNvbHNcIiwgXCIzMFwiKTtcbiAgZGVzY3JpcHRpb25JbnB1dC5zZXRBdHRyaWJ1dGUoXCJyb3dzXCIsIFwiNFwiKTtcbiAgZGVzY3JpcHRpb25JbnB1dC5zZXRBdHRyaWJ1dGUoXCJyZXF1aXJlZFwiLCBcIlwiKTtcblxuICBkYXRlTGFiZWwudGV4dENvbnRlbnQgPSBcIkRhdGU6XCI7XG4gIGRhdGVMYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJkYXRlLWlucHV0XCIpO1xuICBkYXRlSW5wdXQuaWQgPSBcImRhdGUtaW5wdXRcIjtcbiAgZGF0ZUlucHV0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJkYXRlXCIpO1xuICBkYXRlSW5wdXQuc2V0QXR0cmlidXRlKFwicmVxdWlyZWRcIiwgXCJcIik7XG5cbiAgaHBSYWRpb0xhYmVsLnRleHRDb250ZW50ID0gXCJIaWdoXCI7XG4gIGhwUmFkaW9MYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJoaWdoLXByaW9yaXR5XCIpO1xuICBocFJhZGlvSW5wdXQuaWQgPSBcImhpZ2gtcHJpb3JpdHlcIjtcbiAgaHBSYWRpb0lucHV0LnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJwcmlvcml0eVwiKTtcbiAgaHBSYWRpb0lucHV0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJyYWRpb1wiKTtcbiAgaHBSYWRpb0lucHV0LnNldEF0dHJpYnV0ZShcImNoZWNrZWRcIiwgXCJcIik7XG5cbiAgbXBSYWRpb0xhYmVsLnRleHRDb250ZW50ID0gXCJNZWRpdW1cIjtcbiAgbXBSYWRpb0xhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBcIm1lZGl1bS1wcmlvcml0eVwiKTtcbiAgbXBSYWRpb0lucHV0LmlkID0gXCJtZWRpdW0tcHJpb3JpdHlcIjtcbiAgbXBSYWRpb0lucHV0LnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJwcmlvcml0eVwiKTtcbiAgbXBSYWRpb0lucHV0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJyYWRpb1wiKTtcblxuICBscFJhZGlvTGFiZWwudGV4dENvbnRlbnQgPSBcIkxvd1wiO1xuICBscFJhZGlvTGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwibG93LXByaW9yaXR5XCIpO1xuICBscFJhZGlvSW5wdXQuaWQgPSBcImxvdy1wcmlvcml0eVwiO1xuICBscFJhZGlvSW5wdXQuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcInByaW9yaXR5XCIpO1xuICBscFJhZGlvSW5wdXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInJhZGlvXCIpO1xuXG4gIGNvbmZpcm1CdG4udGV4dENvbnRlbnQgPSBcIkNPTkZJUk1cIjtcbiAgY29uZmlybUJ0bi5pZCA9IFwiY29uZmlybS1pdGVtXCI7XG4gIGNvbmZpcm1CdG4uc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInN1Ym1pdFwiKTtcblxuICByZXR1cm4ge1xuICAgIGZvcm0sXG4gICAgaDIsXG4gICAgY29udGFpbmluZ0RpdixcbiAgICB0aXRsZUxhYmVsLFxuICAgIHRpdGxlSW5wdXQsXG4gICAgZGVzY3JpcHRpb25MYWJlbCxcbiAgICBkZXNjcmlwdGlvbklucHV0LFxuICAgIGRhdGVMYWJlbCxcbiAgICBkYXRlSW5wdXQsXG4gICAgaHBSYWRpb0xhYmVsLFxuICAgIGhwUmFkaW9JbnB1dCxcbiAgICBtcFJhZGlvTGFiZWwsXG4gICAgbXBSYWRpb0lucHV0LFxuICAgIGxwUmFkaW9MYWJlbCxcbiAgICBscFJhZGlvSW5wdXQsXG4gICAgY29uZmlybUJ0bixcbiAgfTtcbn1cblxuLy90aGUgYWJvbWluYXRpb24gdG8gZW5kIGFsbCBhYm9taW5hdGlvbnM6XG4vL2EgbG9vcCBjb250YWluaW5nIGEgc3dpdGNoIHN0YXRlbWVudCB3aGljaCBhbHNvIGNvbnRhaW5zIGFub3RoZXIgbG9vcCB3aGljaCBhbHNvXG4vL2NvbnRhaW5zIGFub3RoZXIgc3dpdGNoIHN0YXRlbWVudC5cbi8vYWxtb3N0IHByb3VkIG9mIGl0IFRCSC5cbmZ1bmN0aW9uIG5ld1Rhc2tSZW5kZXJMb29wcyhsaXN0KSB7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgNjsgaSsrKSB7XG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBzd2l0Y2ggKGkpIHtcbiAgICAgIGNhc2UgMDpcbiAgICAgICAgZGl2LmFwcGVuZENoaWxkKGxpc3QudGl0bGVMYWJlbCk7XG4gICAgICAgIGRpdi5hcHBlbmRDaGlsZChsaXN0LnRpdGxlSW5wdXQpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgMTpcbiAgICAgICAgZGl2LmFwcGVuZENoaWxkKGxpc3QuZGVzY3JpcHRpb25MYWJlbCk7XG4gICAgICAgIGRpdi5hcHBlbmRDaGlsZChsaXN0LmRlc2NyaXB0aW9uSW5wdXQpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgMjpcbiAgICAgICAgZGl2LmFwcGVuZENoaWxkKGxpc3QuZGF0ZUxhYmVsKTtcbiAgICAgICAgZGl2LmFwcGVuZENoaWxkKGxpc3QuZGF0ZUlucHV0KTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDQ6XG4gICAgICAgIGNvbnN0IHVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IDM7IGorKykge1xuICAgICAgICAgIGNvbnN0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICAgICAgICAgIHN3aXRjaCAoaikge1xuICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICBsaS5pZCA9IFwiaGlnaC1wcmlvLWxpXCI7XG4gICAgICAgICAgICAgIGxpLmFwcGVuZENoaWxkKGxpc3QuaHBSYWRpb0xhYmVsKTtcbiAgICAgICAgICAgICAgbGkuYXBwZW5kQ2hpbGQobGlzdC5ocFJhZGlvSW5wdXQpO1xuICAgICAgICAgICAgICB1bC5hcHBlbmRDaGlsZChsaSk7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICBsaS5pZCA9IFwibWVkaXVtLXByaW8tbGlcIjtcbiAgICAgICAgICAgICAgbGkuYXBwZW5kQ2hpbGQobGlzdC5tcFJhZGlvTGFiZWwpO1xuICAgICAgICAgICAgICBsaS5hcHBlbmRDaGlsZChsaXN0Lm1wUmFkaW9JbnB1dCk7XG4gICAgICAgICAgICAgIHVsLmFwcGVuZENoaWxkKGxpKTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgIGxpLmlkID0gXCJsb3ctcHJpby1saVwiO1xuICAgICAgICAgICAgICBsaS5hcHBlbmRDaGlsZChsaXN0LmxwUmFkaW9MYWJlbCk7XG4gICAgICAgICAgICAgIGxpLmFwcGVuZENoaWxkKGxpc3QubHBSYWRpb0lucHV0KTtcbiAgICAgICAgICAgICAgdWwuYXBwZW5kQ2hpbGQobGkpO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZGl2LmFwcGVuZENoaWxkKHVsKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDU6XG4gICAgICAgIGRpdi5hcHBlbmRDaGlsZChsaXN0LmNvbmZpcm1CdG4pO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gICAgbGlzdC5mb3JtLmFwcGVuZENoaWxkKGRpdik7XG4gIH1cbiAgcmV0dXJuIGxpc3QuZm9ybTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByb2plY3RNb2RhbENyZWF0ZUVsZW1lbnQoKSB7XG4gIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKTtcbiAgZm9ybS5pZCA9IFwicHJvamVjdC1tb2RhbFwiO1xuICAvL2Fpbid0IGRvaW5nIHRoZSBzYW1lIGNyYXAgdHdpY2VcbiAgZm9ybS5pbm5lckhUTUwgPSBgXG4gICAgPGxhYmVsIGZvcj1cInByb2plY3QtbmFtZVwiPlByb2plY3QgbmFtZTo8L2xhYmVsPlxuICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwicHJvamVjdC1uYW1lXCIgbWF4bGVuZ3RoPVwiMTVcIiByZXF1aXJlZCAvPlxuICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGlkPVwiY29uZmlybS1wcm9qZWN0XCI+Q09ORklSTTwvYnV0dG9uPmA7XG5cbiAgLy9jZW50ZXIgZWxlbWVudCB3aXRob3V0IGtub3dpbmcgaXRzIHdpZHRoKHBvczogYWJzb2x1dGUgJiBsZWZ0OiA1MCUpXG4gIGZvcm0uc3R5bGUubWFyZ2luTGVmdCA9IGAtJHtmb3JtLm9mZnNldFdpZHRoIC8gMn1weGA7XG5cbiAgcmV0dXJuIGZvcm07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBuZXdQcm9qZWN0TW9kYWxSZW5kZXIoKSB7XG4gIGNvbnN0IGZvcm0gPSBwcm9qZWN0TW9kYWxDcmVhdGVFbGVtZW50KCk7XG5cbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKGZvcm0pO1xuXG4gIHJlbW92ZUlycmVsZXZhbnRFdmVudExpc3RlbmVycygpO1xuXG4gIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCB2YWxpZGF0ZU5ld01vZGFsKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGVkaXRQcm9qZWN0TW9kYWxSZW5kZXIoKSB7XG4gIGNvbnN0IGZvcm0gPSBwcm9qZWN0TW9kYWxDcmVhdGVFbGVtZW50KCk7XG4gIGNvbnN0IHByb2plY3QgPSB3aGljaElzQWN0aXZlKGN1cnJlbnRQcm9qZWN0c0xpc3QpO1xuXG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChmb3JtKTtcblxuICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdC1uYW1lXCIpO1xuXG4gIGl0ZW1FZGl0ZWQuc2V0VGVtcElkKHByb2plY3QuaWQpO1xuICB0aXRsZS52YWx1ZSA9IHByb2plY3QudGl0bGU7XG5cbiAgcmVtb3ZlSXJyZWxldmFudEV2ZW50TGlzdGVuZXJzKCk7XG5cbiAgZm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIHZhbGlkYXRlRWRpdE1vZGFsKTtcbn1cbiIsImltcG9ydCB7IHJlaW5zdGF0ZUV2ZW50TGlzdGVuZXJzIH0gZnJvbSBcIi4vZXZlbnRMaXN0ZW5lcnNNYW5hZ2VyXCI7XG5pbXBvcnQge1xuICBjb25maXJtTmV3VGFzayxcbiAgY29uZmlybUVkaXRUYXNrLFxuICBjb25maXJtTmV3UHJvamVjdCxcbiAgY29uZmlybUVkaXRQcm9qZWN0LFxufSBmcm9tIFwiLi9tb2RhbEFwcGxpY2F0aW9uXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiB2YWxpZGF0ZU5ld01vZGFsKGUpIHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICBpZiAoZS50YXJnZXQuY2hlY2tWYWxpZGl0eSgpKSB7XG4gICAgaWYgKGUudGFyZ2V0LmlkID09PSBcIml0ZW0tbW9kYWxcIikge1xuICAgICAgY29uZmlybU5ld1Rhc2soKTtcbiAgICB9IGVsc2UgaWYgKGUudGFyZ2V0LmlkID09PSBcInByb2plY3QtbW9kYWxcIikge1xuICAgICAgY29uZmlybU5ld1Byb2plY3QoKTtcbiAgICB9XG4gICAgcmVpbnN0YXRlRXZlbnRMaXN0ZW5lcnMoKTtcbiAgfVxufVxuZXhwb3J0IGZ1bmN0aW9uIHZhbGlkYXRlRWRpdE1vZGFsKGUpIHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICBpZiAoZS50YXJnZXQuY2hlY2tWYWxpZGl0eSgpKSB7XG4gICAgaWYgKGUudGFyZ2V0LmlkID09PSBcIml0ZW0tbW9kYWxcIikge1xuICAgICAgY29uZmlybUVkaXRUYXNrKCk7XG4gICAgfSBlbHNlIGlmIChlLnRhcmdldC5pZCA9PT0gXCJwcm9qZWN0LW1vZGFsXCIpIHtcbiAgICAgIGNvbmZpcm1FZGl0UHJvamVjdCgpO1xuICAgIH1cbiAgICByZWluc3RhdGVFdmVudExpc3RlbmVycygpO1xuICB9XG59XG4iLCJpbXBvcnQgZWRpdFNtYWxsU1ZHIGZyb20gXCIuLi9pbWFnZXMvZWRpdC1zbWFsbC5zdmdcIjtcbmltcG9ydCBoaWRlU1ZHIGZyb20gXCIuLi9pbWFnZXMvaGlkZS5zdmdcIjtcbmltcG9ydCBzaGVldFN0YWNrU1ZHIGZyb20gXCIuLi9pbWFnZXMvc3RhY2stb2Ytc2hlZXRzLnN2Z1wiO1xuaW1wb3J0IGRlbGV0ZVNWRyBmcm9tIFwiLi4vaW1hZ2VzL2RlbGV0ZS5zdmdcIjtcbmltcG9ydCBlZGl0QmlnU1ZHIGZyb20gXCIuLi9pbWFnZXMvZWRpdC1iaWcuc3ZnXCI7XG5pbXBvcnQgbWVudVNWRyBmcm9tIFwiLi4vaW1hZ2VzL21lbnUuc3ZnXCI7XG5cbmltcG9ydCB7XG4gIFRhc2ssXG4gIFByb2plY3QsXG4gIGN1cnJlbnRQcm9qZWN0c0xpc3QsXG4gIFRlbXBvcmFyeUlkLFxufSBmcm9tIFwiLi9pbnRlcm5hbExvZ2ljXCI7XG5pbXBvcnQge1xuICBlZGl0VGFza01vZGFsUmVuZGVyLFxuICBuZXdQcm9qZWN0TW9kYWxSZW5kZXIsXG4gIGVkaXRQcm9qZWN0TW9kYWxSZW5kZXIsXG59IGZyb20gXCIuL21vZGFsUmVuZGVyXCI7XG5pbXBvcnQge1xuICB3aGljaElzQWN0aXZlLFxuICBoaWRlU2lkZWJhcixcbiAgc2hvd1NpZGViYXIsXG4gIHJlbmRlck1haW4sXG4gIHNldFByaW9yaXR5LFxuICBkZWxldGVJdGVtLFxuICBzZXRDb21wbGV0ZU9wdGlvbixcbiAgY2hhbmdlQ29tcGxldGVPcHRpb24sXG4gIGRlYWN0aXZhdGVBbGxQcm9qZWN0cyxcbiAgc2hvd0dyb3VwLFxuICBkZWxldGVQcm9qZWN0LFxufSBmcm9tIFwiLi9sb2FkRE9NY3JhcFwiO1xuXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyU2lkZWJhcigpIHtcbiAgY29uc3Qgc2lkZWJhclJlbmRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IHNpZGViYXJJY29ucyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IG5ld1Byb2plY3RCdG5SZW5kZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBjb25zdCBwcm9qZWN0TGlzdFRpdGxlUmVuZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICBjb25zdCBwcm9qZWN0VWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XG4gIGNvbnN0IGR5bmFtaWNVbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcbiAgY29uc3QgZHluYW1pY1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICBjb25zdCBoaWRlSW1nID0gbmV3IEltYWdlKCk7XG4gIGNvbnN0IHNoZWV0U3RhY2tJbWcgPSBuZXcgSW1hZ2UoKTtcblxuICBzaWRlYmFyUmVuZGVyLmlkID0gXCJwcm9qZWN0c1wiO1xuICBzaWRlYmFySWNvbnMuaWQgPSBcImljb25zXCI7XG4gIG5ld1Byb2plY3RCdG5SZW5kZXIuaWQgPSBcIm5ldy1wcm9qZWN0LWJ0blwiO1xuICBwcm9qZWN0VWwuaWQgPSBcInByb2plY3RzLXVsXCI7XG4gIGR5bmFtaWNVbC5pZCA9IFwiZHluYW1pYy11bFwiO1xuICBkeW5hbWljVGl0bGUuaWQgPSBcImR5bmFtaWMtaDJcIjtcbiAgaGlkZUltZy5pZCA9IFwiaGlkZS1pY29uXCI7XG4gIGhpZGVJbWcuc3JjID0gaGlkZVNWRztcbiAgc2hlZXRTdGFja0ltZy5zcmMgPSBzaGVldFN0YWNrU1ZHO1xuXG4gIG5ld1Byb2plY3RCdG5SZW5kZXIudGV4dENvbnRlbnQgPSBcIkNSRUFURSBORVcgUFJPSkVDVFwiO1xuICBwcm9qZWN0TGlzdFRpdGxlUmVuZGVyLnRleHRDb250ZW50ID0gXCJZb3VyIHByb2plY3RzOlwiO1xuICBkeW5hbWljVGl0bGUudGV4dENvbnRlbnQgPSBcIkR5bmFtaWNhbGx5IGdyb3VwZWQgdGFza3NcIjtcblxuICBzaWRlYmFySWNvbnMuYXBwZW5kQ2hpbGQoc2hlZXRTdGFja0ltZyk7XG4gIHNpZGViYXJJY29ucy5hcHBlbmRDaGlsZChoaWRlSW1nKTtcblxuICByZW5kZXJQcm9qZWN0VWwocHJvamVjdFVsKTtcbiAgcmVuZGVyRHluYW1pY1VsKGR5bmFtaWNVbCk7XG5cbiAgc2lkZWJhclJlbmRlci5hcHBlbmRDaGlsZChzaWRlYmFySWNvbnMpO1xuICBzaWRlYmFyUmVuZGVyLmFwcGVuZENoaWxkKGR5bmFtaWNUaXRsZSk7XG4gIHNpZGViYXJSZW5kZXIuYXBwZW5kQ2hpbGQoZHluYW1pY1VsKTtcbiAgc2lkZWJhclJlbmRlci5hcHBlbmRDaGlsZChuZXdQcm9qZWN0QnRuUmVuZGVyKTtcbiAgc2lkZWJhclJlbmRlci5hcHBlbmRDaGlsZChwcm9qZWN0TGlzdFRpdGxlUmVuZGVyKTtcbiAgc2lkZWJhclJlbmRlci5hcHBlbmRDaGlsZChwcm9qZWN0VWwpO1xuXG4gIG5ld1Byb2plY3RCdG5SZW5kZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIG5ld1Byb2plY3RNb2RhbFJlbmRlcik7XG4gIGhpZGVJbWcuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGhpZGVTaWRlYmFyKTtcblxuICByZXR1cm4gc2lkZWJhclJlbmRlcjtcbn1cblxuZnVuY3Rpb24gcmVuZGVyUHJvamVjdFVsKGxpc3QpIHtcbiAgaWYgKGN1cnJlbnRQcm9qZWN0c0xpc3QuY29udGVudC5sZW5ndGggPiAwKSB7XG4gICAgd2hpY2hJc0FjdGl2ZShjdXJyZW50UHJvamVjdHNMaXN0KTtcbiAgICBmb3IgKGNvbnN0IHByb2plY3Qgb2YgY3VycmVudFByb2plY3RzTGlzdC5jb250ZW50KSB7XG4gICAgICBjb25zdCBsaSA9IHJlbmRlclNpbmdsZVByb2plY3QocHJvamVjdCk7XG4gICAgICBsaXN0LmFwcGVuZENoaWxkKGxpKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gcmVuZGVyRHluYW1pY1VsKHVsKSB7XG4gIGNvbnN0IG5leHRXZWVrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICBjb25zdCBoaWdoUHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gIGNvbnN0IG1lZGl1bVByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICBjb25zdCBsb3dQcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcblxuICBuZXh0V2Vlay5pZCA9IFwibmV4dC13ZWVrXCI7XG4gIGhpZ2hQcmlvcml0eS5pZCA9IFwiZGhwXCI7XG4gIG1lZGl1bVByaW9yaXR5LmlkID0gXCJkbXBcIjtcbiAgbG93UHJpb3JpdHkuaWQgPSBcImRscFwiO1xuICBoaWdoUHJpb3JpdHkuY2xhc3NOYW1lID0gXCJwcmlvcml0eS1ncm91cFwiO1xuICBtZWRpdW1Qcmlvcml0eS5jbGFzc05hbWUgPSBcInByaW9yaXR5LWdyb3VwXCI7XG4gIGxvd1ByaW9yaXR5LmNsYXNzTmFtZSA9IFwicHJpb3JpdHktZ3JvdXBcIjtcblxuICBuZXh0V2Vlay50ZXh0Q29udGVudCA9IFwiRHVlIHRoaXMgd2Vla1wiO1xuICBoaWdoUHJpb3JpdHkudGV4dENvbnRlbnQgPSBcIkhpZ2ggcHJpb3JpdHlcIjtcbiAgbWVkaXVtUHJpb3JpdHkudGV4dENvbnRlbnQgPSBcIk1lZGl1bSBwcmlvcml0eVwiO1xuICBsb3dQcmlvcml0eS50ZXh0Q29udGVudCA9IFwiTG93IHByaW9yaXR5XCI7XG5cbiAgdWwuYXBwZW5kQ2hpbGQobmV4dFdlZWspO1xuICB1bC5hcHBlbmRDaGlsZChoaWdoUHJpb3JpdHkpO1xuICB1bC5hcHBlbmRDaGlsZChtZWRpdW1Qcmlvcml0eSk7XG4gIHVsLmFwcGVuZENoaWxkKGxvd1ByaW9yaXR5KTtcblxuICBBcnJheS5mcm9tKHVsLmNoaWxkTm9kZXMpLmZvckVhY2goKGUpID0+IHtcbiAgICBlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBkZWFjdGl2YXRlQWxsUHJvamVjdHMpO1xuICAgIGUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHNob3dHcm91cCk7XG4gIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyU2luZ2xlUHJvamVjdChwcm9qZWN0KSB7XG4gIGNvbnN0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICBjb25zdCBkZWxldGVCdG4gPSBuZXcgSW1hZ2UoKTtcblxuICBsaS50ZXh0Q29udGVudCA9IGAke3Byb2plY3QudGl0bGV9YDtcbiAgZGVsZXRlQnRuLnNyYyA9IGRlbGV0ZVNWRztcbiAgZGVsZXRlQnRuLmNsYXNzTmFtZSA9IFwiZGVsZXRlLXByb2plY3RcIjtcblxuICBpZiAoIXByb2plY3QuaWQpIHtcbiAgICBjdXJyZW50UHJvamVjdHNMaXN0LmNoZWNrRHVwbGljYXRlUHJvamVjdChwcm9qZWN0KTtcbiAgfVxuICBsaS5pZCA9IHByb2plY3QuaWQ7XG4gIGxpLmFwcGVuZENoaWxkKGRlbGV0ZUJ0bik7XG5cbiAgZGVsZXRlQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBkZWxldGVQcm9qZWN0KTtcbiAgbGkuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNoYW5nZUFjdGl2ZVByb2plY3QpO1xuXG4gIGlmIChwcm9qZWN0LmFjdGl2ZSkge1xuICAgIGxpLmNsYXNzTmFtZSA9IFwiYWN0aXZlXCI7XG4gIH0gZWxzZSB7XG4gICAgbGkuY2xhc3NOYW1lID0gXCJcIjtcbiAgfVxuICByZXR1cm4gbGk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjaGFuZ2VBY3RpdmVQcm9qZWN0KGUpIHtcbiAgY29uc3QgcHJvamVjdFVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0cy11bFwiKTtcbiAgY29uc3QgZHluYW1pY0dyb3VwID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkeW5hbWljLXVsXCIpO1xuICBjb25zdCBsYXRlTWFpbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFpblwiKTtcblxuICBBcnJheS5mcm9tKHByb2plY3RVbC5jaGlsZE5vZGVzKS5mb3JFYWNoKChlbCkgPT4ge1xuICAgIGlmIChlLnRhcmdldCAhPT0gZWwpIHtcbiAgICAgIGVsLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGVsLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG4gICAgfVxuICB9KTtcblxuICBBcnJheS5mcm9tKGR5bmFtaWNHcm91cC5jaGlsZHJlbikuZm9yRWFjaCgoZWwpID0+IHtcbiAgICBlbC5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICB9KTtcblxuICBmb3IgKGNvbnN0IHByb2ogb2YgY3VycmVudFByb2plY3RzTGlzdC5jb250ZW50KSB7XG4gICAgaWYgKHByb2ouaWQgPT09IGUudGFyZ2V0LmlkICYmICFwcm9qLmFjdGl2ZSkge1xuICAgICAgY3VycmVudFByb2plY3RzTGlzdC5zZXRJbmFjdGl2ZVByb2plY3RzKCk7XG4gICAgICBjdXJyZW50UHJvamVjdHNMaXN0LnNldEFjdGl2ZVByb2plY3QocHJvaik7XG4gICAgfVxuICB9XG5cbiAgY29uc3QgYWN0aXZlUHJvamVjdCA9IHdoaWNoSXNBY3RpdmUoY3VycmVudFByb2plY3RzTGlzdCk7XG5cbiAgbGF0ZU1haW4ucmVtb3ZlKCk7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChyZW5kZXJNYWluKGFjdGl2ZVByb2plY3QuY29udGVudCwgYWN0aXZlUHJvamVjdC50aXRsZSkpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyVG9wQ29udGVudChwcm9qZWN0VGl0bGUpIHtcbiAgY29uc3QgbmV3VG9wU2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuXG4gIGNvbnN0IGVkaXRQcm9qZWN0SW1nID0gbmV3IEltYWdlKCk7XG4gIGNvbnN0IHNob3dJbWcgPSBuZXcgSW1hZ2UoKTtcblxuICBuZXdUb3BTZWN0aW9uLmlkID0gXCJhY3RpdmUtcHJvamVjdFwiO1xuICBlZGl0UHJvamVjdEltZy5pZCA9IFwiZWRpdC1wcm9qZWN0XCI7XG4gIHNob3dJbWcuaWQgPSBcIm1lbnUtaWNvblwiO1xuXG4gIHRpdGxlLnRleHRDb250ZW50ID0gcHJvamVjdFRpdGxlO1xuICBlZGl0UHJvamVjdEltZy5zcmMgPSBlZGl0QmlnU1ZHO1xuICBzaG93SW1nLnNyYyA9IG1lbnVTVkc7XG5cbiAgbmV3VG9wU2VjdGlvbi5hcHBlbmRDaGlsZChzaG93SW1nKTtcbiAgbmV3VG9wU2VjdGlvbi5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gIG5ld1RvcFNlY3Rpb24uYXBwZW5kQ2hpbGQoZWRpdFByb2plY3RJbWcpO1xuXG4gIHNob3dJbWcuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHNob3dTaWRlYmFyKTtcbiAgZWRpdFByb2plY3RJbWcuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGVkaXRQcm9qZWN0TW9kYWxSZW5kZXIpO1xuICByZXR1cm4gbmV3VG9wU2VjdGlvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlclNpbmdsZVRhc2sodGFzaykge1xuICBjb25zdCBpdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGRhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBwcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGNvbXBsZXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgZWRpdEJ0biA9IG5ldyBJbWFnZSgpO1xuICBjb25zdCBkZWxldGVCdG4gPSBuZXcgSW1hZ2UoKTtcbiAgY29uc3QgY29tcGxldGVCdG4gPSBuZXcgSW1hZ2UoKTtcblxuICBpdGVtLmNsYXNzTmFtZSA9IFwiaXRlbVwiO1xuICB0aXRsZS5jbGFzc05hbWUgPSBcInRpdGxlXCI7XG4gIGRlc2NyaXB0aW9uLmNsYXNzTmFtZSA9IFwiZGVzY3JpcHRpb25cIjtcbiAgZGF0ZS5jbGFzc05hbWUgPSBcImRhdGVcIjtcbiAgcHJpb3JpdHkuY2xhc3NOYW1lID0gXCJwcmlvcml0eVwiO1xuICBjb21wbGV0ZS5jbGFzc05hbWUgPSBcImNvbXBsZXRlXCI7XG5cbiAgZWRpdEJ0bi5jbGFzc05hbWUgPSBcImVkaXQtaXRlbVwiO1xuICBkZWxldGVCdG4uY2xhc3NOYW1lID0gXCJkZWxldGUtaXRlbVwiO1xuICBjb21wbGV0ZUJ0bi5jbGFzc05hbWUgPSBcImNvbXBsZXRlLWJ0blwiO1xuXG4gIGVkaXRCdG4uc3JjID0gZWRpdFNtYWxsU1ZHO1xuICBkZWxldGVCdG4uc3JjID0gZGVsZXRlU1ZHO1xuICBpZiAoIXRhc2suaWQpIHtcbiAgICBjdXJyZW50UHJvamVjdHNMaXN0LmNoZWNrRHVwbGljYXRlSXRlbSh0YXNrKTtcbiAgfVxuICBpdGVtLmlkID0gdGFzay5pZDtcblxuICB0aXRsZS50ZXh0Q29udGVudCA9IHRhc2sudGl0bGU7XG4gIGRlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gdGFzay5kZXNjcmlwdGlvbjtcbiAgZGF0ZS50ZXh0Q29udGVudCA9IHRhc2suZGF0ZTtcbiAgY29tcGxldGUudGV4dENvbnRlbnQgPSBcIkNvbXBsZXRlOlwiO1xuXG4gIHNldFByaW9yaXR5KHByaW9yaXR5LCB0YXNrKTtcbiAgc2V0Q29tcGxldGVPcHRpb24odGFzaywgY29tcGxldGVCdG4pO1xuICBjb21wbGV0ZS5hcHBlbmRDaGlsZChjb21wbGV0ZUJ0bik7XG5cbiAgaXRlbS5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gIGl0ZW0uYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pO1xuICBpdGVtLmFwcGVuZENoaWxkKGRhdGUpO1xuICBpdGVtLmFwcGVuZENoaWxkKHByaW9yaXR5KTtcbiAgaXRlbS5hcHBlbmRDaGlsZChjb21wbGV0ZSk7XG5cbiAgaXRlbS5hcHBlbmRDaGlsZChlZGl0QnRuKTtcbiAgaXRlbS5hcHBlbmRDaGlsZChkZWxldGVCdG4pO1xuXG4gIGVkaXRCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGVkaXRUYXNrTW9kYWxSZW5kZXIpO1xuICBkZWxldGVCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGRlbGV0ZUl0ZW0pO1xuICBjb21wbGV0ZUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2hhbmdlQ29tcGxldGVPcHRpb24pO1xuXG4gIHJldHVybiBpdGVtO1xufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgKiBhcyBpdGVtcyBmcm9tIFwiLi9tb2R1bGVzL2xvYWRET01jcmFwLmpzXCI7XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCBpdGVtcy5yZW5kZXJDb250YWluZXIoKSk7XG4vKiBcblRPIERPOlxuLWxvY2FsIHN0b3JhZ2U7XG4tZ2l0IGh1YiBkZXBsb3ltZW50O1xuKi9cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==