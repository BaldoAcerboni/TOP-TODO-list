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

Array.from(head).forEach((e) => {
  e.appendChild(faviconIcon);
  e.appendChild(faviconMask);
});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTyxnRkFBZ0YsVUFBVSxZQUFZLE1BQU0sT0FBTyxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxPQUFPLFFBQVEsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksV0FBVyxNQUFNLE1BQU0sVUFBVSxPQUFPLE1BQU0sVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLE1BQU0sWUFBWSxPQUFPLE1BQU0sVUFBVSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxLQUFLLEtBQUssVUFBVSxNQUFNLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLEtBQUssTUFBTSxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssVUFBVSxLQUFLLE1BQU0sUUFBUSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxNQUFNLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLEtBQUssTUFBTSxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLEtBQUssTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxNQUFNLE1BQU0sVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsT0FBTyxRQUFRLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLE9BQU8sUUFBUSxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVks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LEVBQUUsSUFBSTtBQUN2Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esa0JBQWtCLHlCQUF5QjtBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esa0JBQWtCLFNBQVM7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esa0JBQWtCLHlCQUF5QjtBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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Q0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLG9DQUFvQyw2REFBbUI7QUFDdkQsc0NBQXNDLG9EQUFVO0FBQ2hELHdDQUF3Qyw4REFBb0I7O0FBRTVEO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUN2UEE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDbEJBOzs7Ozs7Ozs7Ozs7QUNBa0Q7O0FBRWxELGdDQUFnQyxvRUFBcUI7QUFDckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvcC10b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvcC10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvcC10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b3AtdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvcC10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9wLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9wLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b3AtdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvcC10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b3AtdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9wLXRvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL2V2ZW50TGlzdGVuZXJzTWFuYWdlci5qcyIsIndlYnBhY2s6Ly90b3AtdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvaW50ZXJuYWxMb2dpYy5qcyIsIndlYnBhY2s6Ly90b3AtdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvbG9hZERPTWNyYXAuanMiLCJ3ZWJwYWNrOi8vdG9wLXRvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL21vZGFsQXBwbGljYXRpb24uanMiLCJ3ZWJwYWNrOi8vdG9wLXRvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL21vZGFsUmVuZGVyLmpzIiwid2VicGFjazovL3RvcC10b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy9tb2RhbFZhbGlkYXRpb24uanMiLCJ3ZWJwYWNrOi8vdG9wLXRvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL3JlbmRlclNpbmdsZUVsLmpzIiwid2VicGFjazovL3RvcC10b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9wLXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b3AtdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b3AtdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vdG9wLXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvcC10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b3AtdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3RvcC10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvcC10b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYCoge1xuICBtYXJnaW46IDA7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGZvbnQtZmFtaWx5OiBzeXN0ZW0tdWksIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgXCJTZWdvZSBVSVwiLCBSb2JvdG8sXG4gICAgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgXCJPcGVuIFNhbnNcIiwgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbiNjb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogc3RyZXRjaDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwdmg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYmFja2dyb3VuZDogIzVlNWU1ZTtcbn1cblxuLyogXG5cbiAgUFJPSkVDVFMgU0lERUJBUlxuXG4qL1xuXG4jcHJvamVjdHMge1xuICBiYWNrZ3JvdW5kOiAjOTc5Nzk3O1xuICBwYWRkaW5nOiAxcmVtO1xuICBmb250LXNpemU6IDEuMnJlbTtcbiAgYm9yZGVyLXJpZ2h0OiAycHggc29saWQgIzAwMDc4ZDtcbiAgcGFkZGluZzogMXJlbTtcbiAgei1pbmRleDogMjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMzAwcHg7XG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcbn1cblxuI3Byb2plY3RzLnZpc2libGUge1xuICBhbmltYXRpb246IHNob3cgMC41cztcbiAgd2lkdGg6IDMwMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbiNwcm9qZWN0cy5oaWRkZW4ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IC0zMDBweDtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgYW5pbWF0aW9uOiBoaWRlIDAuNXM7XG59XG5cbiNoaWRlLWljb24ge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbiNuZXctcHJvamVjdC1idG4ge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMC41cmVtIDA7XG4gIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudCgjNTA2OTY1LCAjMDA1YjljKTtcbiAgY29sb3I6ICNmZmY7XG4gIGJvcmRlcjogM3B4IHNvbGlkICMwMDdkMGM7XG4gIGJvcmRlci1yYWRpdXM6IDAuMnJlbTtcbiAgbWFyZ2luOiAxcmVtIDAgMCAwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbiNpY29ucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIGhlaWdodDogMTAwcHg7XG59XG5cbiNwcm9qZWN0cyBoMiB7XG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xuICBtYXJnaW46IDFyZW0gMDtcbn1cblxuI3Byb2plY3RzIGxpOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogIzYyNjI2MjtcbiAgY29sb3I6ICNmZmY7XG59XG5cbiNwcm9qZWN0cy11bCxcbiNkeW5hbWljLXVsIHtcbiAgcGFkZGluZy1sZWZ0OiAwO1xufVxuXG4jcHJvamVjdHMtdWwgPiBsaSxcbiNkeW5hbWljLXVsID4gbGkge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuI3Byb2plY3RzLXVsID4gbGk6Om1hcmtlciB7XG4gIGNvbnRlbnQ6IFwiI1wiO1xuICBjb2xvcjogIzAwMGFjNDtcbn1cblxuI2R5bmFtaWMtdWwgPiBsaTo6bWFya2VyIHtcbiAgY29sb3I6ICMwMDBhYzQ7XG4gIGNvbnRlbnQ6IFwib1wiO1xufVxuXG4jcHJvamVjdHMtdWwgPiBsaS5hY3RpdmUsXG4jZHluYW1pYy11bCA+IGxpLmFjdGl2ZSB7XG4gIGJvcmRlcjogM3B4IGRvdWJsZSAjNzVmZjRiO1xufVxuXG4jcHJvamVjdHMtdWwgPiBsaS5hY3RpdmU6Om1hcmtlcixcbiNkeW5hbWljLXVsID4gbGkuYWN0aXZlOjptYXJrZXIge1xuICBjb2xvcjogIzc1ZmY0Yjtcbn1cblxuLmRlbGV0ZS1wcm9qZWN0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMi40cHg7XG4gIGJhY2tncm91bmQ6ICNmZjIwMjA7XG4gIGhlaWdodDogMTAwJTtcbn1cbiNwcm9qZWN0cy11bCA+IGxpLmFjdGl2ZSA+IC5kZWxldGUtcHJvamVjdCB7XG4gIHJpZ2h0OiAwO1xufVxuXG5Aa2V5ZnJhbWVzIHNob3cge1xuICAwJSB7XG4gICAgbGVmdDogLTMwMHB4O1xuICB9XG4gIDEwMCUge1xuICAgIGxlZnQ6IDA7XG4gIH1cbn1cblxuQGtleWZyYW1lcyBoaWRlIHtcbiAgMCUge1xuICAgIGxlZnQ6IDA7XG4gIH1cbiAgMTAwJSB7XG4gICAgbGVmdDogLTMwMHB4O1xuICB9XG59XG5cbi8qIFxuXG5NQUlOIFNFQ1RJT05cblxuKi9cblxuI21haW4ge1xuICBmbGV4LWdyb3c6IDE7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIGFsaWduLWNvbnRlbnQ6IHNhZmUgY2VudGVyO1xuICBnYXA6IDFyZW07XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcGFkZGluZzogMjVweDtcbiAgb3ZlcmZsb3cteTogYXV0bztcbiAgbWFyZ2luLXRvcDogMTAwcHg7XG59XG5cbiNhZGQtaXRlbSB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYm90dG9tOiAycmVtO1xuICBsZWZ0OiA1MCU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgei1pbmRleDogMTtcbn1cblxuLml0ZW0ge1xuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XG4gIHdpZHRoOiAzMDBweDtcbiAgaGVpZ2h0OiAzMDBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogc3RyZXRjaDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBib3gtc2hhZG93OiAwIDAgNXB4ICMwMDA7XG4gIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudCgjM2QzZDNkLCAjNTA2OTY1KTtcbiAgcGFkZGluZzogMjBweDtcbn1cblxuLml0ZW06aG92ZXIge1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUsIDEuMDUpO1xufVxuXG4uaXRlbSA+IGRpdiB7XG4gIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudCgjZTdlN2U3LCAjYmFiYWJhKTtcbiAgcGFkZGluZzogMC4zcmVtIDFyZW07XG4gIGJveC1zaGFkb3c6IDAgMCAzcHggIzAwMDtcbn1cblxuLml0ZW0gPiBkaXY6bnRoLWNoaWxkKDIpIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBvdmVyZmxvdy15OiBhdXRvO1xufVxuXG4uZWRpdC1pdGVtLFxuLmRlbGV0ZS1pdGVtIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xuICBib3gtc2hhZG93OiAwIDAgM3B4ICMwMDA7XG59XG5cbi5lZGl0LWl0ZW0ge1xuICBsZWZ0OiAwO1xuICBiYWNrZ3JvdW5kOiAjNjA4MWRjO1xufVxuXG4uZWRpdC1pdGVtOmFjdGl2ZSxcbi5kZWxldGUtaXRlbTphY3RpdmUge1xuICBib3gtc2hhZG93OiBpbnNldCAwIDAgM3B4ICMwMDA7XG59XG5cbi5kZWxldGUtaXRlbSB7XG4gIHJpZ2h0OiAwO1xuICBiYWNrZ3JvdW5kOiAjZmYyMDIwO1xufVxuXG4uY29tcGxldGUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5jb21wbGV0ZS1idG4ge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cblxuLmNvbXBsZXRlLWJ0bi5mYWRlLW91dCB7XG4gIGFuaW1hdGlvbjogZmFkZS1vdXQgMC41cyBsaW5lYXI7XG4gIG9wYWNpdHk6IDA7XG59XG5cbkBrZXlmcmFtZXMgZmFkZS1vdXQge1xuICAwJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxuICAxMDAlIHtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG59XG5cbi5jb21wbGV0ZS1idG4uZmFkZS1pbiB7XG4gIGFuaW1hdGlvbjogZmFkZS1pbiAwLjVzIGxpbmVhcjtcbiAgb3BhY2l0eTogMTtcbn1cblxuQGtleWZyYW1lcyBmYWRlLWluIHtcbiAgMCUge1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbiAgMTAwJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxufVxuXG4jYWN0aXZlLXByb2plY3Qge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCMzZDNkM2QsICMyYTJmOTYpO1xuICBjb2xvcjogI2ZmZjtcbiAgei1pbmRleDogMTtcbn1cblxuI21lbnUtaWNvbixcbiNlZGl0LXByb2plY3Qge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCMyYTJmOTYsICMzZDNkM2QpO1xufVxuXG4jc2hlZXQtc3RhY2sge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi8qIFxuXG5JVEVNIE1PREFMXG5cbiovXG5cbiNpdGVtLW1vZGFsIHtcbiAgZGlzcGxheTogZmxleDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogNzAlO1xuICBtaW4taGVpZ2h0OiA2MCU7XG4gIHRvcDogMjAlO1xuICBsZWZ0OiAxNSU7XG4gIGJvcmRlci1yYWRpdXM6IDJyZW07XG4gIHBhZGRpbmc6IDEuNXJlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xuICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoIzNkM2QzZCwgIzJhMmY5Nik7XG4gIGJveC1zaGFkb3c6IDAuNXJlbSAwLjVyZW0gMXJlbSAtMC41cmVtICMwMDA7XG4gIHotaW5kZXg6IDEwO1xufVxuXG4jaXRlbS1tb2RhbCA+IGRpdiB7XG4gIG1hcmdpbi1ib3R0b206IDAuOHJlbTtcbn1cblxuI2l0ZW0tbW9kYWwgdWwge1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDAuNXJlbTtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG5sYWJlbCB7XG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xufVxuXG5kaXYgPiBsYWJlbCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4jaXRlbS1tb2RhbCBsaSB7XG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XG4gIG1hcmdpbjogMC40cmVtIDA7XG4gIHBhZGRpbmc6IDAuNXJlbTtcbiAgd2lkdGg6IDI1JTtcbn1cblxuI2hpZ2gtcHJpby1saSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjM0MzQ7XG59XG5cbiNtZWRpdW0tcHJpby1saSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmUwMzM7XG59XG5cbiNsb3ctcHJpby1saSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM2YWZmMmE7XG59XG5cbiNpdGVtLW1vZGFsIHVsIHtcbiAgcGFkZGluZzogMDtcbn1cblxudGV4dGFyZWEge1xuICByZXNpemU6IG5vbmU7XG59XG5cbmlucHV0W3R5cGU9XCJ0ZXh0XCJdLFxudGV4dGFyZWEge1xuICB3aWR0aDogODAlO1xufVxuXG5pbnB1dDpub3QoaW5wdXRbdHlwZT1cInJhZGlvXCJdKSxcbnRleHRhcmVhIHtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBib3JkZXItcmFkaXVzOiAwLjNyZW07XG4gIGJveC1zaGFkb3c6IDAgMC4zcmVtIDFyZW0gLTAuM3JlbSAjNGE0YTRhO1xuICBib3JkZXI6IG5vbmU7XG59XG5cbiNjb25maXJtLWl0ZW0ge1xuICB3aWR0aDogODAlO1xuICBwYWRkaW5nOiAwLjVyZW07XG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoI2I3YjdiNywgI2ZmZik7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi8qIFxuXG5QUk9KRUNUIE1PREFMXG5cbiovXG5cbiNwcm9qZWN0LW1vZGFsIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDMwJTtcbiAgbGVmdDogNTAlO1xuICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoIzNkM2QzZCwgIzJhMmY5Nik7XG4gIGJveC1zaGFkb3c6IDAuNXJlbSAwLjVyZW0gMXJlbSAtMC41cmVtICMwMDA7XG4gIGJvcmRlci1yYWRpdXM6IDJyZW07XG4gIHBhZGRpbmc6IDFyZW07XG59XG5cbiNwcm9qZWN0LW1vZGFsID4gKiB7XG4gIG1hcmdpbjogMXJlbSAwO1xufVxuXG4jcHJvamVjdC1tb2RhbCA+IGxhYmVsIHtcbiAgY29sb3I6ICNmZmY7XG59XG5cbiNjb25maXJtLXByb2plY3Qge1xuICBkaXNwbGF5OiBibG9jaztcbiAgcGFkZGluZzogMC41cmVtIDJyZW07XG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcsICNiMGIwYjAsICNlMmUyZTIpO1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmNvbG9yIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwYzcwMztcbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLFNBQVM7RUFDVCxzQkFBc0I7RUFDdEI7d0VBQ3NFO0VBQ3RFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixvQkFBb0I7RUFDcEIsV0FBVztFQUNYLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsbUJBQW1CO0FBQ3JCOztBQUVBOzs7O0NBSUM7O0FBRUQ7RUFDRSxtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLGlCQUFpQjtFQUNqQiwrQkFBK0I7RUFDL0IsYUFBYTtFQUNiLFVBQVU7RUFDVixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLG9CQUFvQjtFQUNwQixZQUFZO0VBQ1osa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixhQUFhO0VBQ2Isb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIsNkNBQTZDO0VBQzdDLFdBQVc7RUFDWCx5QkFBeUI7RUFDekIscUJBQXFCO0VBQ3JCLGtCQUFrQjtFQUNsQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtFQUM5Qix1QkFBdUI7RUFDdkIsYUFBYTtBQUNmOztBQUVB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RUFDckIsV0FBVztBQUNiOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIscUJBQXFCO0VBQ3JCLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsVUFBVTtBQUNaOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsVUFBVTtBQUNaOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBOztFQUVFLFVBQVU7QUFDWjs7QUFFQTs7RUFFRSxlQUFlO0VBQ2YscUJBQXFCO0VBQ3JCLHlDQUF5QztFQUN6QyxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQiwwQ0FBMEM7RUFDMUMsWUFBWTtFQUNaLHFCQUFxQjtFQUNyQixlQUFlO0FBQ2pCOztBQUVBOzs7O0NBSUM7O0FBRUQ7RUFDRSxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFNBQVM7RUFDVCw2Q0FBNkM7RUFDN0MsMkNBQTJDO0VBQzNDLG1CQUFtQjtFQUNuQixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsY0FBYztFQUNkLG9CQUFvQjtFQUNwQixpQkFBaUI7RUFDakIsb0RBQW9EO0VBQ3BELFlBQVk7RUFDWixxQkFBcUI7RUFDckIsY0FBYztFQUNkLGVBQWU7QUFDakI7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0JcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxuICBtYXJnaW46IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgZm9udC1mYW1pbHk6IHN5c3RlbS11aSwgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBcXFwiU2Vnb2UgVUlcXFwiLCBSb2JvdG8sXFxuICAgIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsIFxcXCJPcGVuIFNhbnNcXFwiLCBcXFwiSGVsdmV0aWNhIE5ldWVcXFwiLCBzYW5zLXNlcmlmO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4jY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogc3RyZXRjaDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGJhY2tncm91bmQ6ICM1ZTVlNWU7XFxufVxcblxcbi8qIFxcblxcbiAgUFJPSkVDVFMgU0lERUJBUlxcblxcbiovXFxuXFxuI3Byb2plY3RzIHtcXG4gIGJhY2tncm91bmQ6ICM5Nzk3OTc7XFxuICBwYWRkaW5nOiAxcmVtO1xcbiAgZm9udC1zaXplOiAxLjJyZW07XFxuICBib3JkZXItcmlnaHQ6IDJweCBzb2xpZCAjMDAwNzhkO1xcbiAgcGFkZGluZzogMXJlbTtcXG4gIHotaW5kZXg6IDI7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB3aWR0aDogMzAwcHg7XFxuICBvdmVyZmxvdy14OiBoaWRkZW47XFxufVxcblxcbiNwcm9qZWN0cy52aXNpYmxlIHtcXG4gIGFuaW1hdGlvbjogc2hvdyAwLjVzO1xcbiAgd2lkdGg6IDMwMHB4O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4jcHJvamVjdHMuaGlkZGVuIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IC0zMDBweDtcXG4gIGhlaWdodDogMTAwdmg7XFxuICBhbmltYXRpb246IGhpZGUgMC41cztcXG59XFxuXFxuI2hpZGUtaWNvbiB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbiNuZXctcHJvamVjdC1idG4ge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwYWRkaW5nOiAwLjVyZW0gMDtcXG4gIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudCgjNTA2OTY1LCAjMDA1YjljKTtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgYm9yZGVyOiAzcHggc29saWQgIzAwN2QwYztcXG4gIGJvcmRlci1yYWRpdXM6IDAuMnJlbTtcXG4gIG1hcmdpbjogMXJlbSAwIDAgMDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuI2ljb25zIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gIGhlaWdodDogMTAwcHg7XFxufVxcblxcbiNwcm9qZWN0cyBoMiB7XFxuICBmb250LXNpemU6IDEuM3JlbTtcXG4gIG1hcmdpbjogMXJlbSAwO1xcbn1cXG5cXG4jcHJvamVjdHMgbGk6aG92ZXIge1xcbiAgYmFja2dyb3VuZDogIzYyNjI2MjtcXG4gIGNvbG9yOiAjZmZmO1xcbn1cXG5cXG4jcHJvamVjdHMtdWwsXFxuI2R5bmFtaWMtdWwge1xcbiAgcGFkZGluZy1sZWZ0OiAwO1xcbn1cXG5cXG4jcHJvamVjdHMtdWwgPiBsaSxcXG4jZHluYW1pYy11bCA+IGxpIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuI3Byb2plY3RzLXVsID4gbGk6Om1hcmtlciB7XFxuICBjb250ZW50OiBcXFwiI1xcXCI7XFxuICBjb2xvcjogIzAwMGFjNDtcXG59XFxuXFxuI2R5bmFtaWMtdWwgPiBsaTo6bWFya2VyIHtcXG4gIGNvbG9yOiAjMDAwYWM0O1xcbiAgY29udGVudDogXFxcIm9cXFwiO1xcbn1cXG5cXG4jcHJvamVjdHMtdWwgPiBsaS5hY3RpdmUsXFxuI2R5bmFtaWMtdWwgPiBsaS5hY3RpdmUge1xcbiAgYm9yZGVyOiAzcHggZG91YmxlICM3NWZmNGI7XFxufVxcblxcbiNwcm9qZWN0cy11bCA+IGxpLmFjdGl2ZTo6bWFya2VyLFxcbiNkeW5hbWljLXVsID4gbGkuYWN0aXZlOjptYXJrZXIge1xcbiAgY29sb3I6ICM3NWZmNGI7XFxufVxcblxcbi5kZWxldGUtcHJvamVjdCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICByaWdodDogMi40cHg7XFxuICBiYWNrZ3JvdW5kOiAjZmYyMDIwO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG4jcHJvamVjdHMtdWwgPiBsaS5hY3RpdmUgPiAuZGVsZXRlLXByb2plY3Qge1xcbiAgcmlnaHQ6IDA7XFxufVxcblxcbkBrZXlmcmFtZXMgc2hvdyB7XFxuICAwJSB7XFxuICAgIGxlZnQ6IC0zMDBweDtcXG4gIH1cXG4gIDEwMCUge1xcbiAgICBsZWZ0OiAwO1xcbiAgfVxcbn1cXG5cXG5Aa2V5ZnJhbWVzIGhpZGUge1xcbiAgMCUge1xcbiAgICBsZWZ0OiAwO1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIGxlZnQ6IC0zMDBweDtcXG4gIH1cXG59XFxuXFxuLyogXFxuXFxuTUFJTiBTRUNUSU9OXFxuXFxuKi9cXG5cXG4jbWFpbiB7XFxuICBmbGV4LWdyb3c6IDE7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICBhbGlnbi1jb250ZW50OiBzYWZlIGNlbnRlcjtcXG4gIGdhcDogMXJlbTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHBhZGRpbmc6IDI1cHg7XFxuICBvdmVyZmxvdy15OiBhdXRvO1xcbiAgbWFyZ2luLXRvcDogMTAwcHg7XFxufVxcblxcbiNhZGQtaXRlbSB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBib3R0b206IDJyZW07XFxuICBsZWZ0OiA1MCU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB6LWluZGV4OiAxO1xcbn1cXG5cXG4uaXRlbSB7XFxuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxuICB3aWR0aDogMzAwcHg7XFxuICBoZWlnaHQ6IDMwMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogc3RyZXRjaDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGJveC1zaGFkb3c6IDAgMCA1cHggIzAwMDtcXG4gIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudCgjM2QzZDNkLCAjNTA2OTY1KTtcXG4gIHBhZGRpbmc6IDIwcHg7XFxufVxcblxcbi5pdGVtOmhvdmVyIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wNSwgMS4wNSk7XFxufVxcblxcbi5pdGVtID4gZGl2IHtcXG4gIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudCgjZTdlN2U3LCAjYmFiYWJhKTtcXG4gIHBhZGRpbmc6IDAuM3JlbSAxcmVtO1xcbiAgYm94LXNoYWRvdzogMCAwIDNweCAjMDAwO1xcbn1cXG5cXG4uaXRlbSA+IGRpdjpudGgtY2hpbGQoMikge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgb3ZlcmZsb3cteTogYXV0bztcXG59XFxuXFxuLmVkaXQtaXRlbSxcXG4uZGVsZXRlLWl0ZW0ge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcbiAgYm94LXNoYWRvdzogMCAwIDNweCAjMDAwO1xcbn1cXG5cXG4uZWRpdC1pdGVtIHtcXG4gIGxlZnQ6IDA7XFxuICBiYWNrZ3JvdW5kOiAjNjA4MWRjO1xcbn1cXG5cXG4uZWRpdC1pdGVtOmFjdGl2ZSxcXG4uZGVsZXRlLWl0ZW06YWN0aXZlIHtcXG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMCAzcHggIzAwMDtcXG59XFxuXFxuLmRlbGV0ZS1pdGVtIHtcXG4gIHJpZ2h0OiAwO1xcbiAgYmFja2dyb3VuZDogI2ZmMjAyMDtcXG59XFxuXFxuLmNvbXBsZXRlIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uY29tcGxldGUtYnRuIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG59XFxuXFxuLmNvbXBsZXRlLWJ0bi5mYWRlLW91dCB7XFxuICBhbmltYXRpb246IGZhZGUtb3V0IDAuNXMgbGluZWFyO1xcbiAgb3BhY2l0eTogMDtcXG59XFxuXFxuQGtleWZyYW1lcyBmYWRlLW91dCB7XFxuICAwJSB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICB9XFxuICAxMDAlIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gIH1cXG59XFxuXFxuLmNvbXBsZXRlLWJ0bi5mYWRlLWluIHtcXG4gIGFuaW1hdGlvbjogZmFkZS1pbiAwLjVzIGxpbmVhcjtcXG4gIG9wYWNpdHk6IDE7XFxufVxcblxcbkBrZXlmcmFtZXMgZmFkZS1pbiB7XFxuICAwJSB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICB9XFxuICAxMDAlIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gIH1cXG59XFxuXFxuI2FjdGl2ZS1wcm9qZWN0IHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgjM2QzZDNkLCAjMmEyZjk2KTtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgei1pbmRleDogMTtcXG59XFxuXFxuI21lbnUtaWNvbixcXG4jZWRpdC1wcm9qZWN0IHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgjMmEyZjk2LCAjM2QzZDNkKTtcXG59XFxuXFxuI3NoZWV0LXN0YWNrIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLyogXFxuXFxuSVRFTSBNT0RBTFxcblxcbiovXFxuXFxuI2l0ZW0tbW9kYWwge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHdpZHRoOiA3MCU7XFxuICBtaW4taGVpZ2h0OiA2MCU7XFxuICB0b3A6IDIwJTtcXG4gIGxlZnQ6IDE1JTtcXG4gIGJvcmRlci1yYWRpdXM6IDJyZW07XFxuICBwYWRkaW5nOiAxLjVyZW07XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XFxuICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoIzNkM2QzZCwgIzJhMmY5Nik7XFxuICBib3gtc2hhZG93OiAwLjVyZW0gMC41cmVtIDFyZW0gLTAuNXJlbSAjMDAwO1xcbiAgei1pbmRleDogMTA7XFxufVxcblxcbiNpdGVtLW1vZGFsID4gZGl2IHtcXG4gIG1hcmdpbi1ib3R0b206IDAuOHJlbTtcXG59XFxuXFxuI2l0ZW0tbW9kYWwgdWwge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMC41cmVtO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG5sYWJlbCB7XFxuICBmb250LXNpemU6IDEuMnJlbTtcXG59XFxuXFxuZGl2ID4gbGFiZWwge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XFxuICBjb2xvcjogI2ZmZjtcXG59XFxuXFxuI2l0ZW0tbW9kYWwgbGkge1xcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXG4gIG1hcmdpbjogMC40cmVtIDA7XFxuICBwYWRkaW5nOiAwLjVyZW07XFxuICB3aWR0aDogMjUlO1xcbn1cXG5cXG4jaGlnaC1wcmlvLWxpIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjM0MzQ7XFxufVxcblxcbiNtZWRpdW0tcHJpby1saSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZlMDMzO1xcbn1cXG5cXG4jbG93LXByaW8tbGkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzZhZmYyYTtcXG59XFxuXFxuI2l0ZW0tbW9kYWwgdWwge1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxudGV4dGFyZWEge1xcbiAgcmVzaXplOiBub25lO1xcbn1cXG5cXG5pbnB1dFt0eXBlPVxcXCJ0ZXh0XFxcIl0sXFxudGV4dGFyZWEge1xcbiAgd2lkdGg6IDgwJTtcXG59XFxuXFxuaW5wdXQ6bm90KGlucHV0W3R5cGU9XFxcInJhZGlvXFxcIl0pLFxcbnRleHRhcmVhIHtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDAuM3JlbTtcXG4gIGJveC1zaGFkb3c6IDAgMC4zcmVtIDFyZW0gLTAuM3JlbSAjNGE0YTRhO1xcbiAgYm9yZGVyOiBub25lO1xcbn1cXG5cXG4jY29uZmlybS1pdGVtIHtcXG4gIHdpZHRoOiA4MCU7XFxuICBwYWRkaW5nOiAwLjVyZW07XFxuICBmb250LXNpemU6IDEuMnJlbTtcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgjYjdiN2I3LCAjZmZmKTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLyogXFxuXFxuUFJPSkVDVCBNT0RBTFxcblxcbiovXFxuXFxuI3Byb2plY3QtbW9kYWwge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAzMCU7XFxuICBsZWZ0OiA1MCU7XFxuICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoIzNkM2QzZCwgIzJhMmY5Nik7XFxuICBib3gtc2hhZG93OiAwLjVyZW0gMC41cmVtIDFyZW0gLTAuNXJlbSAjMDAwO1xcbiAgYm9yZGVyLXJhZGl1czogMnJlbTtcXG4gIHBhZGRpbmc6IDFyZW07XFxufVxcblxcbiNwcm9qZWN0LW1vZGFsID4gKiB7XFxuICBtYXJnaW46IDFyZW0gMDtcXG59XFxuXFxuI3Byb2plY3QtbW9kYWwgPiBsYWJlbCB7XFxuICBjb2xvcjogI2ZmZjtcXG59XFxuXFxuI2NvbmZpcm0tcHJvamVjdCB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHBhZGRpbmc6IDAuNXJlbSAycmVtO1xcbiAgZm9udC1zaXplOiAxLjJyZW07XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcsICNiMGIwYjAsICNlMmUyZTIpO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcbiAgbWFyZ2luOiAwIGF1dG87XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5jb2xvciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBjNzAzO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHtcbiAgVGFzayxcbiAgUHJvamVjdCxcbiAgY3VycmVudFByb2plY3RzTGlzdCxcbiAgVGVtcG9yYXJ5SWQsXG59IGZyb20gXCIuL2ludGVybmFsTG9naWNcIjtcbmltcG9ydCB7XG4gIG5ld1Rhc2tNb2RhbFJlbmRlcixcbiAgbmV3UHJvamVjdE1vZGFsUmVuZGVyLFxuICBlZGl0UHJvamVjdE1vZGFsUmVuZGVyLFxuICBlZGl0VGFza01vZGFsUmVuZGVyLFxufSBmcm9tIFwiLi9tb2RhbFJlbmRlclwiO1xuaW1wb3J0IHtcbiAgaGlkZVNpZGViYXIsXG4gIHNob3dTaWRlYmFyLFxuICBkZWxldGVJdGVtLFxuICBjaGFuZ2VDb21wbGV0ZU9wdGlvbixcbiAgZGVsZXRlUHJvamVjdCxcbiAgd2hpY2hJc0FjdGl2ZSxcbn0gZnJvbSBcIi4vbG9hZERPTWNyYXBcIjtcbmltcG9ydCB7IGNoYW5nZUFjdGl2ZVByb2plY3QgfSBmcm9tIFwiLi9yZW5kZXJTaW5nbGVFbFwiO1xuXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlSXJyZWxldmFudEV2ZW50TGlzdGVuZXJzKCkge1xuICBjb25zdCBuZXdUYXNrQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGQtaXRlbVwiKTtcbiAgY29uc3QgbmV3UHJvamVjdEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmV3LXByb2plY3QtYnRuXCIpO1xuICBjb25zdCBoaWRlU2lkZWJhckJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaGlkZS1pY29uXCIpO1xuICBjb25zdCBzaG93U2lkZWJhckJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWVudS1pY29uXCIpO1xuXG4gIGNvbnN0IHByb2plY3RVTCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdHMtdWxcIik7XG5cbiAgY29uc3QgdGFzayA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJpdGVtXCIpO1xuICBjb25zdCBlZGl0UHJvamVjdEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZWRpdC1wcm9qZWN0XCIpO1xuICBjb25zdCBlZGl0VGFza0J0biA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJlZGl0LWl0ZW1cIik7XG4gIGNvbnN0IGRlbGV0ZVRhc2tCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiZGVsZXRlLWl0ZW1cIik7XG4gIGNvbnN0IGNvbXBsZXRlQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImNvbXBsZXRlLWJ0blwiKTtcbiAgY29uc3QgZGVsZXRlUHJvamVjdEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJkZWxldGUtcHJvamVjdFwiKTtcblxuICBuZXdQcm9qZWN0QnRuLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBuZXdQcm9qZWN0TW9kYWxSZW5kZXIpO1xuICBoaWRlU2lkZWJhckJ0bi5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgaGlkZVNpZGViYXIpO1xuICBzaG93U2lkZWJhckJ0bi5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgc2hvd1NpZGViYXIpO1xuXG4gIGlmIChuZXdUYXNrQnRuKSB7XG4gICAgbmV3VGFza0J0bi5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgbmV3VGFza01vZGFsUmVuZGVyKTtcbiAgfVxuXG4gIGlmIChjdXJyZW50UHJvamVjdHNMaXN0LmNvbnRlbnQubGVuZ3RoID4gMCkge1xuICAgIHdoaWNoSXNBY3RpdmUoY3VycmVudFByb2plY3RzTGlzdCk7XG4gICAgaWYgKEFycmF5LmZyb20odGFzaykubGVuZ3RoID4gMCkge1xuICAgICAgQXJyYXkuZnJvbShlZGl0VGFza0J0bikuZm9yRWFjaCgoZSkgPT4ge1xuICAgICAgICBlLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBlZGl0VGFza01vZGFsUmVuZGVyKTtcbiAgICAgIH0pO1xuICAgICAgQXJyYXkuZnJvbShkZWxldGVUYXNrQnRuKS5mb3JFYWNoKChlKSA9PiB7XG4gICAgICAgIGUucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGRlbGV0ZUl0ZW0pO1xuICAgICAgfSk7XG4gICAgICBBcnJheS5mcm9tKGNvbXBsZXRlQnRuKS5mb3JFYWNoKChlKSA9PiB7XG4gICAgICAgIGUucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNoYW5nZUNvbXBsZXRlT3B0aW9uKTtcbiAgICAgIH0pO1xuICAgICAgQXJyYXkuZnJvbShkZWxldGVQcm9qZWN0QnRuKS5mb3JFYWNoKChlKSA9PiB7XG4gICAgICAgIGUucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGRlbGV0ZVByb2plY3QpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgZWRpdFByb2plY3RCdG4ucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGVkaXRQcm9qZWN0TW9kYWxSZW5kZXIpO1xuICAgIEFycmF5LmZyb20ocHJvamVjdFVMLmNoaWxkTm9kZXMpLmZvckVhY2goKGUpID0+IHtcbiAgICAgIGUucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNoYW5nZUFjdGl2ZVByb2plY3QpO1xuICAgIH0pO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZWluc3RhdGVFdmVudExpc3RlbmVycygpIHtcbiAgY29uc3QgbmV3VGFza0J0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkLWl0ZW1cIik7XG4gIGNvbnN0IG5ld1Byb2plY3RCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5ldy1wcm9qZWN0LWJ0blwiKTtcbiAgY29uc3QgaGlkZVNpZGViYXJCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImhpZGUtaWNvblwiKTtcbiAgY29uc3Qgc2hvd1NpZGViYXJCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1lbnUtaWNvblwiKTtcblxuICBjb25zdCBwcm9qZWN0VUwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3RzLXVsXCIpO1xuXG4gIGNvbnN0IHRhc2sgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiaXRlbVwiKTtcbiAgY29uc3QgZWRpdFByb2plY3RCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVkaXQtcHJvamVjdFwiKTtcbiAgY29uc3QgZWRpdFRhc2tCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiZWRpdC1pdGVtXCIpO1xuICBjb25zdCBkZWxldGVUYXNrQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImRlbGV0ZS1pdGVtXCIpO1xuICBjb25zdCBjb21wbGV0ZUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJjb21wbGV0ZS1idG5cIik7XG4gIGNvbnN0IGRlbGV0ZVByb2plY3RCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiZGVsZXRlLXByb2plY3RcIik7XG5cbiAgbmV3UHJvamVjdEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgbmV3UHJvamVjdE1vZGFsUmVuZGVyKTtcbiAgaGlkZVNpZGViYXJCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGhpZGVTaWRlYmFyKTtcbiAgc2hvd1NpZGViYXJCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHNob3dTaWRlYmFyKTtcblxuICBpZiAobmV3VGFza0J0bikge1xuICAgIG5ld1Rhc2tCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIG5ld1Rhc2tNb2RhbFJlbmRlcik7XG4gIH1cblxuICBpZiAoY3VycmVudFByb2plY3RzTGlzdC5jb250ZW50Lmxlbmd0aCA+IDApIHtcbiAgICB3aGljaElzQWN0aXZlKGN1cnJlbnRQcm9qZWN0c0xpc3QpO1xuXG4gICAgaWYgKEFycmF5LmZyb20odGFzaykubGVuZ3RoID4gMCkge1xuICAgICAgQXJyYXkuZnJvbShlZGl0VGFza0J0bikuZm9yRWFjaCgoZSkgPT4ge1xuICAgICAgICBlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBlZGl0VGFza01vZGFsUmVuZGVyKTtcbiAgICAgIH0pO1xuICAgICAgQXJyYXkuZnJvbShkZWxldGVUYXNrQnRuKS5mb3JFYWNoKChlKSA9PiB7XG4gICAgICAgIGUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGRlbGV0ZUl0ZW0pO1xuICAgICAgfSk7XG4gICAgICBBcnJheS5mcm9tKGNvbXBsZXRlQnRuKS5mb3JFYWNoKChlKSA9PiB7XG4gICAgICAgIGUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNoYW5nZUNvbXBsZXRlT3B0aW9uKTtcbiAgICAgIH0pO1xuICAgICAgQXJyYXkuZnJvbShkZWxldGVQcm9qZWN0QnRuKS5mb3JFYWNoKChlKSA9PiB7XG4gICAgICAgIGUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGRlbGV0ZVByb2plY3QpO1xuICAgICAgfSk7XG4gICAgfVxuICAgIC8vbmV3XG5cbiAgICBlZGl0UHJvamVjdEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZWRpdFByb2plY3RNb2RhbFJlbmRlcik7XG4gICAgQXJyYXkuZnJvbShwcm9qZWN0VUwuY2hpbGROb2RlcykuZm9yRWFjaCgoZSkgPT4ge1xuICAgICAgZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2hhbmdlQWN0aXZlUHJvamVjdCk7XG4gICAgfSk7XG4gIH1cbn1cbiIsIi8qIFxuXG4gIC0tTUVUSE9EUy0tXG5cbiovXG5cbmNvbnN0IGFkZE5ld0l0ZW0gPSBmdW5jdGlvbiAoaXRlbSkge1xuICB0aGlzLmNvbnRlbnQucHVzaChpdGVtKTtcbn07XG5cbmNvbnN0IHJhbmRvbUlkID0gZnVuY3Rpb24gKHR5cGUpIHtcbiAgY29uc3QgbnVtID0gYCR7TWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApfSR7TWF0aC5mbG9vcihcbiAgICBNYXRoLnJhbmRvbSgpICogMTBcbiAgKX0ke01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKX1gO1xuICByZXR1cm4gYCR7dHlwZX0ke251bX1gO1xufTtcblxuY29uc3QgY2hlY2tEdXBsaWNhdGVJdGVtID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgbGV0IGlkID0gcmFuZG9tSWQoaXRlbS50eXBlKTtcbiAgZm9yIChjb25zdCBwcm9qZWN0IG9mIHRoaXMuY29udGVudCkge1xuICAgIGZvciAoY29uc3QgZWwgb2YgcHJvamVjdC5jb250ZW50KSB7XG4gICAgICBpZiAoZWwuaWQgIT09IFwiXCIgJiYgZWwuaWQgPT09IGlkKSB7XG4gICAgICAgIHRoaXMuY2hlY2tEdXBsaWNhdGVJdGVtKGl0ZW0pO1xuICAgICAgfVxuICAgIH1cbiAgICBpdGVtLmFzc2lnbklkKGlkKTtcbiAgICByZXR1cm47XG4gIH1cbn07XG5cbmNvbnN0IGNoZWNrRHVwbGljYXRlUHJvamVjdCA9IGZ1bmN0aW9uIChlbCkge1xuICBsZXQgaWQgPSByYW5kb21JZChlbC50eXBlKTtcbiAgZm9yIChjb25zdCBwcm9qZWN0IG9mIHRoaXMuY29udGVudCkge1xuICAgIGlmIChwcm9qZWN0LmlkID09PSBpZCAmJiBwcm9qZWN0LmlkKSB7XG4gICAgICB0aGlzLmNoZWNrRHVwbGljYXRlUHJvamVjdChlbCk7XG4gICAgfVxuICB9XG4gIGVsLmFzc2lnbklkKGlkKTtcbiAgcmV0dXJuO1xufTtcblxuY29uc3QgYXNzaWduSWQgPSBmdW5jdGlvbiAoaWQpIHtcbiAgdGhpcy5pZCA9IGlkO1xufTtcblxuY29uc3Qgc2V0QWN0aXZlUHJvamVjdCA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIGl0ZW0uYWN0aXZlID0gdHJ1ZTtcbn07XG5cbmNvbnN0IHNldEluYWN0aXZlUHJvamVjdHMgPSBmdW5jdGlvbiAoKSB7XG4gIGZvciAoY29uc3QgZWwgb2YgdGhpcy5jb250ZW50KSB7XG4gICAgZWwuYWN0aXZlID0gZmFsc2U7XG4gIH1cbn07XG5cbmNvbnN0IGNoZWNrQWN0aXZlUHJvamVjdCA9IGZ1bmN0aW9uICgpIHtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmNvbnRlbnQubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAodGhpcy5jb250ZW50W2ldLmFjdGl2ZSA9PT0gdHJ1ZSkge1xuICAgICAgY29uc3QgYWN0aXZlID0gdGhpcy5jb250ZW50W2ldO1xuICAgICAgcmV0dXJuIGFjdGl2ZTtcbiAgICB9XG4gIH1cbn07XG5cbmNvbnN0IGVkaXRJdGVtID0gZnVuY3Rpb24gKHRpdGxlLCBkZXNjcmlwdGlvbiwgZGF0ZSwgcHJpb3JpdHkpIHtcbiAgaWYgKGRlc2NyaXB0aW9uICYmIGRhdGUgJiYgcHJpb3JpdHkpIHtcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgdGhpcy5kYXRlID0gZGF0ZTtcbiAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XG4gIH1cbiAgdGhpcy50aXRsZSA9IHRpdGxlO1xufTtcblxuY29uc3QgZ2V0SXRlbSA9IGZ1bmN0aW9uIChpZCkge1xuICBjb25zdCBsZW4gPSB0aGlzLmNvbnRlbnQubGVuZ3RoO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgaWYgKHRoaXMuY29udGVudFtpXS5pZCA9PT0gaWQpIHtcbiAgICAgIHJldHVybiB0aGlzLmNvbnRlbnRbaV07XG4gICAgfVxuICB9XG59O1xuXG5jb25zdCBkZWxldGVMaXN0SXRlbSA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIGxldCBwb3M7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5jb250ZW50Lmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHRoaXMuY29udGVudFtpXSA9PT0gaXRlbSkge1xuICAgICAgcG9zID0gaTtcbiAgICB9XG4gIH1cbiAgaWYgKHBvcyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5jb250ZW50LnNwbGljZShwb3MsIDEpO1xuICAgIGl0ZW0uZGVsVGVtcCgpO1xuICB9XG59O1xuXG5jb25zdCBkZWxUZW1wID0gZnVuY3Rpb24gKCkge1xuICBmb3IgKGNvbnN0IHByb3AgaW4gdGhpcykge1xuICAgIHRoaXNbcHJvcF0gPSBudWxsO1xuICB9XG59O1xuXG5jb25zdCBzZXRUZW1wSWQgPSBmdW5jdGlvbiAoaWQpIHtcbiAgdGhpcy5pZCA9IGlkO1xufTtcblxuY29uc3Qgc2V0Q29tcGxldGUgPSBmdW5jdGlvbiAoKSB7XG4gIHRoaXMuY29tcGxldGUgPSAhdGhpcy5jb21wbGV0ZTtcbn07XG5cbmNvbnN0IGdldFByb2plY3RCeUl0ZW1JZCA9IGZ1bmN0aW9uIChpZCkge1xuICBmb3IgKGNvbnN0IHByb2plY3Qgb2YgdGhpcy5jb250ZW50KSB7XG4gICAgY29uc3QgSXRlbUdvdHRlbiA9IHByb2plY3QuZ2V0SXRlbShpZCk7XG4gICAgaWYgKEl0ZW1Hb3R0ZW4pIHtcbiAgICAgIHJldHVybiBwcm9qZWN0O1xuICAgIH1cbiAgfVxufTtcblxuY29uc3QgZ2V0SXRlbUJ5UHJpb3JpdHkgPSBmdW5jdGlvbiAocHJpb3JpdHkpIHtcbiAgY29uc3QgYXJyID0gW107XG4gIGZvciAoY29uc3QgcHJvamVjdCBvZiB0aGlzLmNvbnRlbnQpIHtcbiAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgcHJvamVjdC5jb250ZW50KSB7XG4gICAgICBpZiAoaXRlbS5wcmlvcml0eSA9PT0gcHJpb3JpdHkpIHtcbiAgICAgICAgYXJyLnB1c2goaXRlbSk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiBhcnI7XG59O1xuXG5jb25zdCBnZXRJdGVtQnlEdWVEYXRlID0gZnVuY3Rpb24gKCkge1xuICBjb25zdCBhcnIgPSBbXTtcbiAgY29uc3QgdG9kYXkgPSBuZXcgRGF0ZSgpO1xuICBmb3IgKGNvbnN0IHByb2plY3Qgb2YgdGhpcy5jb250ZW50KSB7XG4gICAgZm9yIChjb25zdCBpdGVtIG9mIHByb2plY3QuY29udGVudCkge1xuICAgICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKGl0ZW0uZGF0ZSk7XG4gICAgICBjb25zdCBvZmZzZXQgPSBkYXRlLmdldFRpbWV6b25lT2Zmc2V0KCkgKiA2MDAwMDtcbiAgICAgIGNvbnN0IGRhdGVPZmYgPSBOdW1iZXIoZGF0ZSkgKyBvZmZzZXQ7XG4gICAgICBjb25zdCBkYXlzUmVtYWluaW5nID0gKGRhdGVPZmYgLSB0b2RheSkgLyA4NjQwMDAwMDtcbiAgICAgIGlmIChkYXlzUmVtYWluaW5nID4gMCAmJiBkYXlzUmVtYWluaW5nIDwgNykge1xuICAgICAgICBhcnIucHVzaChpdGVtKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIGFycjtcbn07XG4vKiBcblxuICAtLVRBU0sgQ09OU1RSVUNUT1ItLVxuXG4qL1xuXG5leHBvcnQgZnVuY3Rpb24gVGFzayh0aXRsZSwgZGVzY3JpcHRpb24sIGRhdGUsIHByaW9yaXR5KSB7XG4gIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICB0aGlzLmRhdGUgPSBkYXRlO1xuICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XG4gIHRoaXMudHlwZSA9IFwiVFwiO1xuICB0aGlzLmlkID0gXCJcIjtcbiAgdGhpcy5jb21wbGV0ZSA9IGZhbHNlO1xufVxuXG5UYXNrLnByb3RvdHlwZS5lZGl0SXRlbSA9IGVkaXRJdGVtO1xuVGFzay5wcm90b3R5cGUuZGVsVGVtcCA9IGRlbFRlbXA7XG5UYXNrLnByb3RvdHlwZS5zZXRDb21wbGV0ZSA9IHNldENvbXBsZXRlO1xuVGFzay5wcm90b3R5cGUuYXNzaWduSWQgPSBhc3NpZ25JZDtcblxuLyogXG5cbiAgLS1QUk9KRUNUIENPTlNUUlVDVE9SLS1cblxuKi9cblxuZXhwb3J0IGZ1bmN0aW9uIFByb2plY3QodGl0bGUpIHtcbiAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICB0aGlzLnR5cGUgPSBcIlBcIjtcbiAgdGhpcy5hY3RpdmUgPSBmYWxzZTtcbiAgdGhpcy5jb250ZW50ID0gW107XG4gIHRoaXMuaWQgPSBcIlwiO1xufVxuXG5Qcm9qZWN0LnByb3RvdHlwZS5hZGROZXdJdGVtID0gYWRkTmV3SXRlbTtcblByb2plY3QucHJvdG90eXBlLnJhbmRvbUlkID0gcmFuZG9tSWQ7XG5Qcm9qZWN0LnByb3RvdHlwZS5hc3NpZ25JZCA9IGFzc2lnbklkO1xuUHJvamVjdC5wcm90b3R5cGUuZWRpdEl0ZW0gPSBlZGl0SXRlbTtcblByb2plY3QucHJvdG90eXBlLmdldEl0ZW0gPSBnZXRJdGVtO1xuUHJvamVjdC5wcm90b3R5cGUuZGVsZXRlTGlzdEl0ZW0gPSBkZWxldGVMaXN0SXRlbTtcblByb2plY3QucHJvdG90eXBlLmRlbFRlbXAgPSBkZWxUZW1wO1xuXG4vKiBcblxuICAtLVBST0pFQ1RTIEFSUkFZIENPTlNUUlVDVE9SLS1cblxuKi9cblxuZXhwb3J0IGZ1bmN0aW9uIFByb2plY3RzQXJyKCkge1xuICB0aGlzLmNvbnRlbnQgPSBbXTtcbn1cblByb2plY3RzQXJyLnByb3RvdHlwZS5hZGROZXdJdGVtID0gYWRkTmV3SXRlbTtcblByb2plY3RzQXJyLnByb3RvdHlwZS5jaGVja0R1cGxpY2F0ZUl0ZW0gPSBjaGVja0R1cGxpY2F0ZUl0ZW07XG5Qcm9qZWN0c0Fyci5wcm90b3R5cGUuY2hlY2tEdXBsaWNhdGVQcm9qZWN0ID0gY2hlY2tEdXBsaWNhdGVQcm9qZWN0O1xuUHJvamVjdHNBcnIucHJvdG90eXBlLmNoZWNrQWN0aXZlUHJvamVjdCA9IGNoZWNrQWN0aXZlUHJvamVjdDtcblByb2plY3RzQXJyLnByb3RvdHlwZS5zZXRBY3RpdmVQcm9qZWN0ID0gc2V0QWN0aXZlUHJvamVjdDtcblByb2plY3RzQXJyLnByb3RvdHlwZS5zZXRJbmFjdGl2ZVByb2plY3RzID0gc2V0SW5hY3RpdmVQcm9qZWN0cztcblByb2plY3RzQXJyLnByb3RvdHlwZS5nZXRJdGVtID0gZ2V0SXRlbTtcblByb2plY3RzQXJyLnByb3RvdHlwZS5nZXRQcm9qZWN0QnlJdGVtSWQgPSBnZXRQcm9qZWN0QnlJdGVtSWQ7XG5Qcm9qZWN0c0Fyci5wcm90b3R5cGUuZ2V0SXRlbUJ5UHJpb3JpdHkgPSBnZXRJdGVtQnlQcmlvcml0eTtcblByb2plY3RzQXJyLnByb3RvdHlwZS5nZXRJdGVtQnlEdWVEYXRlID0gZ2V0SXRlbUJ5RHVlRGF0ZTtcblByb2plY3RzQXJyLnByb3RvdHlwZS5kZWxldGVMaXN0SXRlbSA9IGRlbGV0ZUxpc3RJdGVtO1xuXG4vKiBcblxuICAtLVRFTVBPUkFSWSBPQkogVE8gU1RPUkUgSUQtLVxuXG4qL1xuXG5leHBvcnQgZnVuY3Rpb24gVGVtcG9yYXJ5SWQoaWQpIHtcbiAgdGhpcy5pZCA9IGlkO1xufVxuVGVtcG9yYXJ5SWQucHJvdG90eXBlLmRlbFRlbXAgPSBkZWxUZW1wO1xuVGVtcG9yYXJ5SWQucHJvdG90eXBlLnNldFRlbXBJZCA9IHNldFRlbXBJZDtcblxuZXhwb3J0IGNvbnN0IGN1cnJlbnRQcm9qZWN0c0xpc3QgPSBuZXcgUHJvamVjdHNBcnIoKTtcblxuLyogXG5cbiAgLS1URVNUUy0tXG5cbiovXG5cbi8qIGNvbnN0IHdvcmsgPSBuZXcgUHJvamVjdChcIldvcmtcIik7XG5jb25zdCBtaXNjID0gbmV3IFByb2plY3QoXCJNaXNjZWxsYW5lb3VzXCIpO1xuY29uc3Qgd29yazEgPSBuZXcgVGFzayhcbiAgXCJ0aXRvbG9cIixcbiAgXCJkZXNjcml6aW9uZSBkaSBzdGEgY2lwcGEgc3RhIGNlcHBhIGUgc3RhIGNpYXBwYVwiLFxuICBcIjIwMjQtMDItMjBcIixcbiAgXCJoXCJcbik7XG5jb25zdCB3b3JrMiA9IG5ldyBUYXNrKFxuICBcInRpdG9sbzJcIixcbiAgXCJkZXNjcml6aW9uZSBkaSBzdGEgY2lwcGEgc3RhIGNlcHBhIGUgc3RhIGNoaWFwcGFcIixcbiAgXCIyMDI0LTAyLTI0XCIsXG4gIFwibVwiXG4pO1xuXG5jb25zdCBtaXNjMSA9IG5ldyBUYXNrKFwibWlzYzFcIiwgXCJkZXNjMVwiLCBcIjIwMjQtMDMtMDJcIiwgXCJsXCIpO1xuY29uc3QgbWlzYzIgPSBuZXcgVGFzayhcIm1pc2MyXCIsIFwiZGVzYzJcIiwgXCIyMDI0LTAyLTIwXCIsIFwiaFwiKTtcbmNvbnN0IG1pc2MzID0gbmV3IFRhc2soXCJtaXNjM1wiLCBcImRlc2MzXCIsIFwiMjAyNC0wMi0xMlwiLCBcIm1cIik7XG5cbmN1cnJlbnRQcm9qZWN0c0xpc3QuYWRkTmV3SXRlbSh3b3JrKTtcbmN1cnJlbnRQcm9qZWN0c0xpc3QuYWRkTmV3SXRlbShtaXNjKTtcblxud29yay5hZGROZXdJdGVtKHdvcmsxKTtcbndvcmsuYWRkTmV3SXRlbSh3b3JrMik7XG5cbm1pc2MuYWRkTmV3SXRlbShtaXNjMSk7XG5taXNjLmFkZE5ld0l0ZW0obWlzYzIpO1xubWlzYy5hZGROZXdJdGVtKG1pc2MzKTsgKi9cbiIsImltcG9ydCBcIi4uL3N0eWxlLmNzc1wiO1xuXG5pbXBvcnQgYWRkU1ZHIGZyb20gXCIuLi9pbWFnZXMvYWRkLnN2Z1wiO1xuaW1wb3J0IGNvbXBsZXRlU1ZHIGZyb20gXCIuLi9pbWFnZXMvY29tcGxldGUuc3ZnXCI7XG5pbXBvcnQgaW5jb21wbGV0ZVNWRyBmcm9tIFwiLi4vaW1hZ2VzL2luY29tcGxldGUuc3ZnXCI7XG5pbXBvcnQgc2hlZXRTdGFja1NWRyBmcm9tIFwiLi4vaW1hZ2VzL3N0YWNrLW9mLXNoZWV0cy5zdmdcIjtcblxuaW1wb3J0IHtcbiAgVGFzayxcbiAgUHJvamVjdCxcbiAgY3VycmVudFByb2plY3RzTGlzdCxcbiAgVGVtcG9yYXJ5SWQsXG59IGZyb20gXCIuL2ludGVybmFsTG9naWNcIjtcbmltcG9ydCB7XG4gIHJlbmRlclNpZGViYXIsXG4gIHJlbmRlclNpbmdsZVByb2plY3QsXG4gIHJlbmRlclNpbmdsZVRhc2ssXG4gIHJlbmRlclRvcENvbnRlbnQsXG59IGZyb20gXCIuL3JlbmRlclNpbmdsZUVsXCI7XG5pbXBvcnQge1xuICBwcm9qZWN0TW9kYWxDcmVhdGVFbGVtZW50LFxuICBuZXdUYXNrTW9kYWxSZW5kZXIsXG4gIGVkaXRUYXNrTW9kYWxSZW5kZXIsXG4gIG5ld1Byb2plY3RNb2RhbFJlbmRlcixcbiAgZWRpdFByb2plY3RNb2RhbFJlbmRlcixcbn0gZnJvbSBcIi4vbW9kYWxSZW5kZXJcIjtcblxuY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250YWluZXJcIik7XG5jb25zdCBoZWFkID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJoZWFkXCIpO1xuY29uc3QgZmF2aWNvbkljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlua1wiKTtcbmNvbnN0IGZhdmljb25NYXNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpbmtcIik7XG5cbmZhdmljb25JY29uLnJlbCA9IFwiaWNvblwiO1xuZmF2aWNvbkljb24uaHJlZiA9IHNoZWV0U3RhY2tTVkc7XG5cbmZhdmljb25NYXNrLnJlbCA9IFwibWFzay1pY29uXCI7XG5mYXZpY29uTWFzay5ocmVmID0gc2hlZXRTdGFja1NWRztcbmZhdmljb25NYXNrLmNvbG9yID0gXCIjMzQ0M2FlXCI7XG5cbkFycmF5LmZyb20oaGVhZCkuZm9yRWFjaCgoZSkgPT4ge1xuICBlLmFwcGVuZENoaWxkKGZhdmljb25JY29uKTtcbiAgZS5hcHBlbmRDaGlsZChmYXZpY29uTWFzayk7XG59KTtcblxuLyogXG48bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi4uL3NyYy9pbWFnZXMvc3RhY2stb2Ytc2hlZXRzLnN2Z1wiIC8+XG48bGlua1xuICByZWw9XCLigJ1tYXNrLWljb27igJ1cIlxuICBocmVmPVwiLi4vc3JjL2ltYWdlcy9zdGFjay1vZi1zaGVldHMuc3ZnXCJcbiAgY29sb3I9XCIjMzQ0M2FlXCJcbi8+XG4qL1xuXG5leHBvcnQgY29uc3QgaXRlbUVkaXRlZCA9IG5ldyBUZW1wb3JhcnlJZChcIlwiKTtcblxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlckNvbnRhaW5lcigpIHtcbiAgY29uc3Qgc2lkZWJhclJlbmRlcmVkID0gcmVuZGVyU2lkZWJhcigpO1xuICBjb25zdCBhY3RpdmVQcm9qZWN0ID0gd2hpY2hJc0FjdGl2ZShjdXJyZW50UHJvamVjdHNMaXN0KSB8fCBuZXcgUHJvamVjdChcIlwiKTtcbiAgY29uc3QgbWFpbiA9IHJlbmRlck1haW4oYWN0aXZlUHJvamVjdC5jb250ZW50LCBhY3RpdmVQcm9qZWN0LnRpdGxlKTtcblxuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoc2lkZWJhclJlbmRlcmVkKTtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKG1haW4pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyTWFpbihncm91cCwgdGl0bGUpIHtcbiAgY29uc3QgbmV3TWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IHRvcENvbnRlbnQgPSByZW5kZXJUb3BDb250ZW50KHRpdGxlKTtcbiAgY29uc3QgYWRkSXRlbUltZyA9IG5ldyBJbWFnZSgpO1xuXG4gIG5ld01haW4uaWQgPSBcIm1haW5cIjtcblxuICByZW5kZXJUYXNrcyhncm91cCwgbmV3TWFpbik7IC8vYWN0aXZlUHJvamVjdFxuXG4gIGFkZEl0ZW1JbWcuaWQgPSBcImFkZC1pdGVtXCI7XG4gIGFkZEl0ZW1JbWcuc3JjID0gYWRkU1ZHO1xuICBhZGRJdGVtSW1nLnN0eWxlLm1hcmdpbkxlZnQgPSBgJHstKGFkZEl0ZW1JbWcub2Zmc2V0V2lkdGggLyAyKX1weGA7XG5cbiAgbmV3TWFpbi5hcHBlbmRDaGlsZChhZGRJdGVtSW1nKTtcbiAgbmV3TWFpbi5hcHBlbmRDaGlsZCh0b3BDb250ZW50KTtcblxuICBhZGRJdGVtSW1nLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBuZXdUYXNrTW9kYWxSZW5kZXIpO1xuXG4gIHJldHVybiBuZXdNYWluO1xufVxuXG5mdW5jdGlvbiByZW5kZXJUYXNrcyhhcnIsIERPTWVsKSB7XG4gIGlmIChhcnIubGVuZ3RoID4gMCkge1xuICAgIGZvciAoY29uc3QgdGFzayBvZiBhcnIpIHtcbiAgICAgIERPTWVsLmFwcGVuZENoaWxkKHJlbmRlclNpbmdsZVRhc2sodGFzaykpO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gd2hpY2hJc0FjdGl2ZShwcm9qZWN0cykge1xuICBpZiAoY3VycmVudFByb2plY3RzTGlzdC5jb250ZW50Lmxlbmd0aCA+IDApIHtcbiAgICBsZXQgaXNBY3RpdmUgPSBwcm9qZWN0cy5jaGVja0FjdGl2ZVByb2plY3QoKTtcbiAgICBpZiAoaXNBY3RpdmUpIHtcbiAgICAgIHJldHVybiBpc0FjdGl2ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgcHJvamVjdHMuc2V0QWN0aXZlUHJvamVjdChwcm9qZWN0cy5jb250ZW50WzBdKTtcbiAgICAgIGlzQWN0aXZlID0gcHJvamVjdHMuY2hlY2tBY3RpdmVQcm9qZWN0KCk7XG4gICAgICByZXR1cm4gaXNBY3RpdmU7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBoaWRlU2lkZWJhcigpIHtcbiAgY29uc3Qgc2lkZWJhciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdHNcIik7XG4gIGNvbnN0IG1haW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1haW5cIik7XG4gIG1haW4ud2lkdGggPSBcIjEwMCVcIjtcblxuICBzaWRlYmFyLmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XG59XG5leHBvcnQgZnVuY3Rpb24gc2hvd1NpZGViYXIoKSB7XG4gIGNvbnN0IHNpZGViYXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3RzXCIpO1xuXG4gIHNpZGViYXIuY2xhc3NMaXN0LmFkZChcInZpc2libGVcIik7XG4gIHNpZGViYXIuY2xhc3NMaXN0LnJlbW92ZShcImhpZGRlblwiKTtcbiAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgc2lkZWJhci5jbGFzc0xpc3QucmVtb3ZlKFwidmlzaWJsZVwiKTtcbiAgfSwgNTAwKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNldFByaW9yaXR5KERPTWVsLCBpdGVtKSB7XG4gIGlmIChpdGVtLnByaW9yaXR5ID09PSBcImhcIikge1xuICAgIERPTWVsLnN0eWxlLmJhY2tncm91bmQgPSBcIiNmZjM0MzRcIjtcbiAgICBET01lbC50ZXh0Q29udGVudCA9IFwiSGlnaCBwcmlvcml0eVwiO1xuICB9IGVsc2UgaWYgKGl0ZW0ucHJpb3JpdHkgPT09IFwibVwiKSB7XG4gICAgRE9NZWwuc3R5bGUuYmFja2dyb3VuZCA9IFwiI2ZmZTAzM1wiO1xuICAgIERPTWVsLnRleHRDb250ZW50ID0gXCJNZWRpdW0gcHJpb3JpdHlcIjtcbiAgfSBlbHNlIHtcbiAgICBET01lbC5zdHlsZS5iYWNrZ3JvdW5kID0gXCIjNmFmZjJhXCI7XG4gICAgRE9NZWwudGV4dENvbnRlbnQgPSBcIkxvdyBwcmlvcml0eVwiO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWxldGVJdGVtKGUpIHtcbiAgY29uc3QgYWN0aXZlUHJvamVjdCA9IGN1cnJlbnRQcm9qZWN0c0xpc3QuZ2V0UHJvamVjdEJ5SXRlbUlkKFxuICAgIGUudGFyZ2V0LnBhcmVudE5vZGUuaWRcbiAgKTtcbiAgY29uc3QgdGFzayA9IGFjdGl2ZVByb2plY3QuZ2V0SXRlbShlLnRhcmdldC5wYXJlbnROb2RlLmlkKTtcbiAgZS50YXJnZXQucGFyZW50Tm9kZS5yZW1vdmUoKTtcbiAgYWN0aXZlUHJvamVjdC5kZWxldGVMaXN0SXRlbSh0YXNrKTtcbn1cbi8qIFxuXG50aGVyZSBpcyBwcm9iYWJseSBhIGJldHRlciB3YXkgdG8gd3JpdGUgdGhpcyBmdW5jdGlvblxuXG4qL1xuZXhwb3J0IGZ1bmN0aW9uIGRlbGV0ZVByb2plY3QoZSkge1xuICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICBjb25zdCBwcm9qZWN0ID0gY3VycmVudFByb2plY3RzTGlzdC5nZXRJdGVtKGUudGFyZ2V0LnBhcmVudE5vZGUuaWQpO1xuXG4gIGN1cnJlbnRQcm9qZWN0c0xpc3QuZGVsZXRlTGlzdEl0ZW0ocHJvamVjdCk7XG5cbiAgaWYgKGN1cnJlbnRQcm9qZWN0c0xpc3QuY29udGVudC5sZW5ndGggPT09IDApIHtcbiAgICBjb25zdCB0aGlzV2VlayA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmV4dC13ZWVrXCIpO1xuICAgIGUudGFyZ2V0LnBhcmVudE5vZGUucmVtb3ZlKCk7XG4gICAgdGhpc1dlZWsuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbiAgICBzaG93R3JvdXAodGhpc1dlZWspO1xuICB9IGVsc2Uge1xuICAgIC8vY29uc3QgYWN0aXZlUHJvamVjdCA9IHdoaWNoSXNBY3RpdmUoY3VycmVudFByb2plY3RzTGlzdCk7XG4gICAgY29uc3QgbGF0ZU1haW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1haW5cIik7XG4gICAgY29uc3QgbGF0ZVNpZGViYXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3RzXCIpO1xuXG4gICAgbGF0ZU1haW4ucmVtb3ZlKCk7XG4gICAgbGF0ZVNpZGViYXIucmVtb3ZlKCk7XG4gICAgcmVuZGVyQ29udGFpbmVyKCk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNldENvbXBsZXRlT3B0aW9uKHRhc2ssIERPTWVsKSB7XG4gIGlmICh0YXNrLmNvbXBsZXRlKSB7XG4gICAgRE9NZWwuc3JjID0gY29tcGxldGVTVkc7XG4gIH0gZWxzZSB7XG4gICAgRE9NZWwuc3JjID0gaW5jb21wbGV0ZVNWRztcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gY2hhbmdlQ29tcGxldGVPcHRpb24oZSkge1xuICBjb25zdCBpZCA9IGUudGFyZ2V0LnBhcmVudE5vZGUucGFyZW50Tm9kZS5pZDtcbiAgY29uc3QgcHJvamVjdCA9IGN1cnJlbnRQcm9qZWN0c0xpc3QuZ2V0UHJvamVjdEJ5SXRlbUlkKGlkKTtcbiAgY29uc3QgdGFzayA9IHByb2plY3QuZ2V0SXRlbShpZCk7XG5cbiAgdGFzay5zZXRDb21wbGV0ZSgpO1xuXG4gIGUudGFyZ2V0LmNsYXNzTGlzdCArPSBcIiBmYWRlLW91dFwiO1xuICBlLnRhcmdldC5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2hhbmdlQ29tcGxldGVPcHRpb24pO1xuXG4gIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgIHNldENvbXBsZXRlT3B0aW9uKHRhc2ssIGUudGFyZ2V0KTtcbiAgICBlLnRhcmdldC5jbGFzc05hbWUgPSBcImNvbXBsZXRlLWJ0biBmYWRlLWluXCI7XG5cbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGUudGFyZ2V0LmNsYXNzTmFtZSA9IFwiY29tcGxldGUtYnRuXCI7XG4gICAgICBlLnRhcmdldC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2hhbmdlQ29tcGxldGVPcHRpb24pO1xuICAgIH0sIDUwMCk7XG4gIH0sIDUwMCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWFjdGl2YXRlQWxsUHJvamVjdHMoZSkge1xuICBjb25zdCBwcm9qZWN0VWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3RzLXVsXCIpO1xuICBjdXJyZW50UHJvamVjdHNMaXN0LnNldEluYWN0aXZlUHJvamVjdHMoKTtcbiAgQXJyYXkuZnJvbShwcm9qZWN0VWwuY2hpbGROb2RlcykuZm9yRWFjaCgoZWwpID0+IHtcbiAgICBlbC5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICB9KTtcbiAgaWYgKCFlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJhY3RpdmVcIikpIHtcbiAgICBBcnJheS5mcm9tKGUudGFyZ2V0LnBhcmVudE5vZGUuY2hpbGRyZW4pLmZvckVhY2goKGVsKSA9PiB7XG4gICAgICBpZiAoZWwgIT09IGUudGFyZ2V0KSB7XG4gICAgICAgIGVsLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBlLnRhcmdldC5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzaG93R3JvdXAoZSkge1xuICBjb25zdCBsYXRlTWFpbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFpblwiKTtcbiAgbGV0IG5ld01haW47XG4gIGlmIChlLnRhcmdldCkge1xuICAgIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJwcmlvcml0eS1ncm91cFwiKSkge1xuICAgICAgY29uc3QgcCA9IGUudGFyZ2V0LmlkWzFdO1xuICAgICAgbmV3TWFpbiA9IHJlbmRlck1haW4oXG4gICAgICAgIGN1cnJlbnRQcm9qZWN0c0xpc3QuZ2V0SXRlbUJ5UHJpb3JpdHkocCksXG4gICAgICAgIGUudGFyZ2V0LnRleHRDb250ZW50XG4gICAgICApO1xuICAgIH0gZWxzZSBpZiAoZS50YXJnZXQuaWQgPT09IFwibmV4dC13ZWVrXCIpIHtcbiAgICAgIG5ld01haW4gPSByZW5kZXJNYWluKFxuICAgICAgICBjdXJyZW50UHJvamVjdHNMaXN0LmdldEl0ZW1CeUR1ZURhdGUoKSxcbiAgICAgICAgZS50YXJnZXQudGV4dENvbnRlbnRcbiAgICAgICk7XG4gICAgfVxuICB9IGVsc2UgaWYgKGUuY2xhc3NMaXN0LmNvbnRhaW5zKFwicHJpb3JpdHktZ3JvdXBcIikpIHtcbiAgICBjb25zdCBwID0gZS5pZFsxXTtcbiAgICBuZXdNYWluID0gcmVuZGVyTWFpbihcbiAgICAgIGN1cnJlbnRQcm9qZWN0c0xpc3QuZ2V0SXRlbUJ5UHJpb3JpdHkocCksXG4gICAgICBlLnRleHRDb250ZW50XG4gICAgKTtcbiAgfSBlbHNlIGlmIChlLmlkID09PSBcIm5leHQtd2Vla1wiKSB7XG4gICAgbmV3TWFpbiA9IHJlbmRlck1haW4oY3VycmVudFByb2plY3RzTGlzdC5nZXRJdGVtQnlEdWVEYXRlKCksIGUudGV4dENvbnRlbnQpO1xuICB9XG5cbiAgbGF0ZU1haW4ucmVtb3ZlKCk7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChuZXdNYWluKTtcbiAgY29uc3QgZWRpdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZWRpdC1wcm9qZWN0XCIpO1xuICBjb25zdCBhZGRUYXNrID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGQtaXRlbVwiKTtcbiAgYWRkVGFzay5yZW1vdmUoKTtcbiAgZWRpdC5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZWRpdFByb2plY3RNb2RhbFJlbmRlcik7XG59XG4iLCJpbXBvcnQgeyB3aGljaElzQWN0aXZlLCBpdGVtRWRpdGVkLCBzaG93R3JvdXAgfSBmcm9tIFwiLi9sb2FkRE9NY3JhcFwiO1xuaW1wb3J0IHsgcmVuZGVyU2luZ2xlUHJvamVjdCwgcmVuZGVyVG9wQ29udGVudCB9IGZyb20gXCIuL3JlbmRlclNpbmdsZUVsXCI7XG5pbXBvcnQge1xuICBUYXNrLFxuICBQcm9qZWN0LFxuICBjdXJyZW50UHJvamVjdHNMaXN0LFxuICBUZW1wb3JhcnlJZCxcbn0gZnJvbSBcIi4vaW50ZXJuYWxMb2dpY1wiO1xuaW1wb3J0IHsgcmVuZGVyU2luZ2xlVGFzayB9IGZyb20gXCIuL3JlbmRlclNpbmdsZUVsXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBjb25maXJtTmV3VGFzaygpIHtcbiAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFpblwiKTtcbiAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaXRlbS1tb2RhbFwiKTtcbiAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRpdGxlLWlucHV0XCIpLnZhbHVlO1xuICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGVzY3JpcHRpb24taW5wdXRcIikudmFsdWU7XG4gIGNvbnN0IGRhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRhdGUtaW5wdXRcIikudmFsdWU7XG4gIGNvbnN0IHByaW9yaXRpZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5TmFtZShcInByaW9yaXR5XCIpO1xuXG4gIGxldCBwcmlvcml0eTtcbiAgQXJyYXkuZnJvbShwcmlvcml0aWVzKS5mb3JFYWNoKChlKSA9PiB7XG4gICAgaWYgKGUuY2hlY2tlZCkge1xuICAgICAgcHJpb3JpdHkgPSBlLmlkWzBdO1xuICAgIH1cbiAgfSk7XG5cbiAgY29uc3QgYWN0aXZlUHJvamVjdCA9IHdoaWNoSXNBY3RpdmUoY3VycmVudFByb2plY3RzTGlzdCk7XG4gIGNvbnN0IG5ld1Rhc2sgPSBuZXcgVGFzayh0aXRsZSwgZGVzY3JpcHRpb24sIGRhdGUsIHByaW9yaXR5KTtcblxuICBhY3RpdmVQcm9qZWN0LmFkZE5ld0l0ZW0obmV3VGFzayk7XG4gIGNvbnN0IHRhc2tET00gPSByZW5kZXJTaW5nbGVUYXNrKG5ld1Rhc2spO1xuICBtYWluLmFwcGVuZENoaWxkKHRhc2tET00pO1xuICBmb3JtLnJlbW92ZSgpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29uZmlybUVkaXRUYXNrKCkge1xuICBjb25zdCBtYWluID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluXCIpO1xuICBjb25zdCBmb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpdGVtLW1vZGFsXCIpO1xuICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGl0bGUtaW5wdXRcIikudmFsdWU7XG4gIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkZXNjcmlwdGlvbi1pbnB1dFwiKS52YWx1ZTtcbiAgY29uc3QgZGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGF0ZS1pbnB1dFwiKS52YWx1ZTtcbiAgY29uc3QgcHJpb3JpdGllcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlOYW1lKFwicHJpb3JpdHlcIik7XG4gIGNvbnN0IGFjdGl2ZVByb2plY3QgPSBjdXJyZW50UHJvamVjdHNMaXN0LmdldFByb2plY3RCeUl0ZW1JZChpdGVtRWRpdGVkLmlkKTsgLy93aGljaElzQWN0aXZlKGN1cnJlbnRQcm9qZWN0c0xpc3QpO1xuICBjb25zdCBkeW5hbWljR3JvdXBVbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZHluYW1pYy11bFwiKTtcbiAgY29uc3QgdGFzayA9IGFjdGl2ZVByb2plY3QuZ2V0SXRlbShpdGVtRWRpdGVkLmlkKTtcbiAgY29uc3QgRE9NSXRlbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGl0ZW1FZGl0ZWQuaWQpO1xuICBsZXQgcHJpb3JpdHk7XG5cbiAgQXJyYXkuZnJvbShwcmlvcml0aWVzKS5mb3JFYWNoKChlKSA9PiB7XG4gICAgaWYgKGUuY2hlY2tlZCkge1xuICAgICAgcHJpb3JpdHkgPSBlLmlkWzBdO1xuICAgIH1cbiAgfSk7XG5cbiAgdGFzay5lZGl0SXRlbSh0aXRsZSwgZGVzY3JpcHRpb24sIGRhdGUsIHByaW9yaXR5KTtcblxuICBsZXQgcG9zO1xuICBBcnJheS5mcm9tKG1haW4uY2hpbGROb2RlcykuZm9yRWFjaCgoZSkgPT4ge1xuICAgIGlmIChlLmlkID09PSBET01JdGVtLmlkKSB7XG4gICAgICBwb3MgPSBBcnJheS5mcm9tKG1haW4uY2hpbGROb2RlcykuaW5kZXhPZihET01JdGVtKTtcbiAgICB9XG4gIH0pO1xuXG4gIGlmIChjdXJyZW50UHJvamVjdHNMaXN0LmNoZWNrQWN0aXZlUHJvamVjdCgpKSB7XG4gICAgRE9NSXRlbS5yZW1vdmUoKTtcbiAgICBtYWluLmluc2VydEJlZm9yZShyZW5kZXJTaW5nbGVUYXNrKHRhc2spLCBtYWluLmNoaWxkcmVuW3Bvc10pO1xuICB9IGVsc2Uge1xuICAgIEFycmF5LmZyb20oZHluYW1pY0dyb3VwVWwuY2hpbGRyZW4pLmZvckVhY2goKGUpID0+IHtcbiAgICAgIGlmIChlLmNsYXNzTGlzdC5jb250YWlucyhcImFjdGl2ZVwiKSkge1xuICAgICAgICBzaG93R3JvdXAoZSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBmb3JtLnJlbW92ZSgpO1xuICBpdGVtRWRpdGVkLnNldFRlbXBJZChcIlwiKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbmZpcm1OZXdQcm9qZWN0KCkge1xuICBjb25zdCBwcm9qZWN0VUwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3RzLXVsXCIpO1xuICBjb25zdCBmb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0LW1vZGFsXCIpO1xuICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdC1uYW1lXCIpLnZhbHVlO1xuICBjb25zdCBuZXdQcm9qZWN0ID0gbmV3IFByb2plY3QodGl0bGUpO1xuXG4gIGN1cnJlbnRQcm9qZWN0c0xpc3QuYWRkTmV3SXRlbShuZXdQcm9qZWN0KTtcblxuICBjb25zdCBsaSA9IHJlbmRlclNpbmdsZVByb2plY3QobmV3UHJvamVjdCk7XG4gIHByb2plY3RVTC5hcHBlbmRDaGlsZChsaSk7XG5cbiAgZm9ybS5yZW1vdmUoKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbmZpcm1FZGl0UHJvamVjdCgpIHtcbiAgY29uc3QgbGF0ZVRvcENvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFjdGl2ZS1wcm9qZWN0XCIpO1xuICBjb25zdCBtYWluID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluXCIpO1xuICBjb25zdCBwcm9qZWN0VUwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3RzLXVsXCIpO1xuICBjb25zdCBmb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0LW1vZGFsXCIpO1xuICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdC1uYW1lXCIpLnZhbHVlO1xuICBjb25zdCBwcm9qZWN0ID0gY3VycmVudFByb2plY3RzTGlzdC5nZXRJdGVtKGl0ZW1FZGl0ZWQuaWQpO1xuXG4gIHByb2plY3QuZWRpdEl0ZW0odGl0bGUpO1xuXG4gIEFycmF5LmZyb20ocHJvamVjdFVMLmNoaWxkcmVuKS5mb3JFYWNoKChlKSA9PiB7XG4gICAgaWYgKGUuaWQgPT09IHByb2plY3QuaWQpIHtcbiAgICAgIGUudGV4dENvbnRlbnQgPSBwcm9qZWN0LnRpdGxlO1xuICAgIH1cbiAgfSk7XG5cbiAgZm9ybS5yZW1vdmUoKTtcbiAgbGF0ZVRvcENvbnRlbnQucmVtb3ZlKCk7XG4gIG1haW4uYXBwZW5kQ2hpbGQocmVuZGVyVG9wQ29udGVudCh3aGljaElzQWN0aXZlKGN1cnJlbnRQcm9qZWN0c0xpc3QpLnRpdGxlKSk7XG59XG4iLCJpbXBvcnQgeyBpdGVtRWRpdGVkLCB3aGljaElzQWN0aXZlIH0gZnJvbSBcIi4vbG9hZERPTWNyYXBcIjtcbmltcG9ydCB7IHJlbW92ZUlycmVsZXZhbnRFdmVudExpc3RlbmVycyB9IGZyb20gXCIuL2V2ZW50TGlzdGVuZXJzTWFuYWdlclwiO1xuaW1wb3J0IHsgdmFsaWRhdGVOZXdNb2RhbCwgdmFsaWRhdGVFZGl0TW9kYWwgfSBmcm9tIFwiLi9tb2RhbFZhbGlkYXRpb25cIjtcbmltcG9ydCB7XG4gIFRhc2ssXG4gIFByb2plY3QsXG4gIGN1cnJlbnRQcm9qZWN0c0xpc3QsXG4gIFRlbXBvcmFyeUlkLFxufSBmcm9tIFwiLi9pbnRlcm5hbExvZ2ljXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBuZXdUYXNrTW9kYWxSZW5kZXIoKSB7XG4gIGNvbnN0IGVsTGlzdCA9IG5ld1Rhc2tNb2RhbENyZWF0ZUVsZW1lbnRzKCk7XG4gIGNvbnN0IGZvcm1Ub1JlbmRlciA9IG5ld1Rhc2tSZW5kZXJMb29wcyhlbExpc3QpO1xuXG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChmb3JtVG9SZW5kZXIpO1xuICByZW1vdmVJcnJlbGV2YW50RXZlbnRMaXN0ZW5lcnMoKTtcblxuICBmb3JtVG9SZW5kZXIuYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCB2YWxpZGF0ZU5ld01vZGFsKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGVkaXRUYXNrTW9kYWxSZW5kZXIoZSkge1xuICBjb25zdCBpZCA9IGUudGFyZ2V0LnBhcmVudE5vZGUuaWQ7XG5cbiAgY29uc3QgYWN0aXZlUHJvamVjdCA9IGN1cnJlbnRQcm9qZWN0c0xpc3QuZ2V0UHJvamVjdEJ5SXRlbUlkKFxuICAgIGUudGFyZ2V0LnBhcmVudE5vZGUuaWRcbiAgKTtcbiAgY29uc3QgdGFza1RvRWRpdCA9IGFjdGl2ZVByb2plY3QuZ2V0SXRlbShpZCk7XG4gIGNvbnN0IGVsTGlzdCA9IG5ld1Rhc2tNb2RhbENyZWF0ZUVsZW1lbnRzKCk7XG4gIGNvbnN0IGZvcm1Ub1JlbmRlciA9IG5ld1Rhc2tSZW5kZXJMb29wcyhlbExpc3QpO1xuXG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChmb3JtVG9SZW5kZXIpO1xuXG4gIGNvbnN0IHRpdGxlSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRpdGxlLWlucHV0XCIpO1xuICBjb25zdCBkZXNjcmlwdGlvbklucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkZXNjcmlwdGlvbi1pbnB1dFwiKTtcbiAgY29uc3QgZGF0ZUlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkYXRlLWlucHV0XCIpO1xuICBjb25zdCBoaWdoUFJhZGlvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJoaWdoLXByaW9yaXR5XCIpO1xuICBjb25zdCBtZWRpdW1QUmFkaW8gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1lZGl1bS1wcmlvcml0eVwiKTtcbiAgY29uc3QgbG93UFJhZGlvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsb3ctcHJpb3JpdHlcIik7XG5cbiAgdGl0bGVJbnB1dC52YWx1ZSA9IHRhc2tUb0VkaXQudGl0bGU7XG4gIGRlc2NyaXB0aW9uSW5wdXQudmFsdWUgPSB0YXNrVG9FZGl0LmRlc2NyaXB0aW9uO1xuICBkYXRlSW5wdXQudmFsdWUgPSB0YXNrVG9FZGl0LmRhdGU7XG5cbiAgc3dpdGNoICh0YXNrVG9FZGl0LnByaW9yaXR5KSB7XG4gICAgY2FzZSBcImhcIjpcbiAgICAgIGhpZ2hQUmFkaW8uc2V0QXR0cmlidXRlKFwiY2hlY2tlZFwiLCBcIlwiKTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJtXCI6XG4gICAgICBtZWRpdW1QUmFkaW8uc2V0QXR0cmlidXRlKFwiY2hlY2tlZFwiLCBcIlwiKTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJsXCI6XG4gICAgICBsb3dQUmFkaW8uc2V0QXR0cmlidXRlKFwiY2hlY2tlZFwiLCBcIlwiKTtcbiAgICAgIGJyZWFrO1xuICB9XG5cbiAgcmVtb3ZlSXJyZWxldmFudEV2ZW50TGlzdGVuZXJzKCk7XG5cbiAgaXRlbUVkaXRlZC5zZXRUZW1wSWQoaWQpO1xuXG4gIGZvcm1Ub1JlbmRlci5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIHZhbGlkYXRlRWRpdE1vZGFsKTtcbn1cblxuLy9kb2luZyBpdCB0aGUgZWFzeSB3YXkgd2l0aCBmb3JtLmlubmVySFRNTCA9IGBhY3R1YWwgSFRNTGAgd2FzIHdheSBiZXR0ZXIofjQwXG4vL2xpbmVzIHZzIH4xNTAgbGluZXMpLCBidXQgd2hlbiBpIHJlYWxpemVkLCBpIHdhcyB0b28gY29tbWl0dGVkIGFscmVhZHkgaGVuY2Vcbi8vdGhlIGFib21pbmF0aW9uIGJlbG93IHdhcyBjcmVhdGVkXG5mdW5jdGlvbiBuZXdUYXNrTW9kYWxDcmVhdGVFbGVtZW50cygpIHtcbiAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpO1xuICBjb25zdCBoMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgY29uc3QgY29udGFpbmluZ0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgY29uc3QgdGl0bGVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgY29uc3QgdGl0bGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcblxuICBjb25zdCBkZXNjcmlwdGlvbkxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICBjb25zdCBkZXNjcmlwdGlvbklucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRleHRhcmVhXCIpO1xuXG4gIGNvbnN0IGRhdGVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgY29uc3QgZGF0ZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuXG4gIGNvbnN0IGhwUmFkaW9MYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgY29uc3QgaHBSYWRpb0lucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICBjb25zdCBtcFJhZGlvTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gIGNvbnN0IG1wUmFkaW9JbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgY29uc3QgbHBSYWRpb0xhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICBjb25zdCBscFJhZGlvSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG5cbiAgY29uc3QgY29uZmlybUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG5cbiAgLy9BVFRSSUJVVEVTXG4gIGZvcm0uaWQgPSBcIml0ZW0tbW9kYWxcIjtcbiAgaDIudGV4dENvbnRlbnQgPSBcIlByaW9yaXR5OlwiO1xuXG4gIHRpdGxlTGFiZWwudGV4dENvbnRlbnQgPSBcIlRpdGxlOlwiO1xuICB0aXRsZUxhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBcInRpdGxlLWlucHV0XCIpO1xuICB0aXRsZUlucHV0LmlkID0gXCJ0aXRsZS1pbnB1dFwiO1xuICB0aXRsZUlucHV0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJ0ZXh0XCIpO1xuICB0aXRsZUlucHV0LnNldEF0dHJpYnV0ZShcIm1heGxlbmd0aFwiLCBcIjI1XCIpO1xuICB0aXRsZUlucHV0LnNldEF0dHJpYnV0ZShcInJlcXVpcmVkXCIsIFwiXCIpO1xuXG4gIGRlc2NyaXB0aW9uTGFiZWwudGV4dENvbnRlbnQgPSBcIkRlc2NyaXB0aW9uOlwiO1xuICBkZXNjcmlwdGlvbkxhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBcImRlc2NyaXB0aW9uLWlucHV0XCIpO1xuICBkZXNjcmlwdGlvbklucHV0LmlkID0gXCJkZXNjcmlwdGlvbi1pbnB1dFwiO1xuICBkZXNjcmlwdGlvbklucHV0LnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJkZXNjcmlwdGlvbi1pbnB1dFwiKTtcbiAgZGVzY3JpcHRpb25JbnB1dC5zZXRBdHRyaWJ1dGUoXCJjb2xzXCIsIFwiMzBcIik7XG4gIGRlc2NyaXB0aW9uSW5wdXQuc2V0QXR0cmlidXRlKFwicm93c1wiLCBcIjRcIik7XG4gIGRlc2NyaXB0aW9uSW5wdXQuc2V0QXR0cmlidXRlKFwicmVxdWlyZWRcIiwgXCJcIik7XG5cbiAgZGF0ZUxhYmVsLnRleHRDb250ZW50ID0gXCJEYXRlOlwiO1xuICBkYXRlTGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwiZGF0ZS1pbnB1dFwiKTtcbiAgZGF0ZUlucHV0LmlkID0gXCJkYXRlLWlucHV0XCI7XG4gIGRhdGVJbnB1dC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiZGF0ZVwiKTtcbiAgZGF0ZUlucHV0LnNldEF0dHJpYnV0ZShcInJlcXVpcmVkXCIsIFwiXCIpO1xuXG4gIGhwUmFkaW9MYWJlbC50ZXh0Q29udGVudCA9IFwiSGlnaFwiO1xuICBocFJhZGlvTGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwiaGlnaC1wcmlvcml0eVwiKTtcbiAgaHBSYWRpb0lucHV0LmlkID0gXCJoaWdoLXByaW9yaXR5XCI7XG4gIGhwUmFkaW9JbnB1dC5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwicHJpb3JpdHlcIik7XG4gIGhwUmFkaW9JbnB1dC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwicmFkaW9cIik7XG4gIGhwUmFkaW9JbnB1dC5zZXRBdHRyaWJ1dGUoXCJjaGVja2VkXCIsIFwiXCIpO1xuXG4gIG1wUmFkaW9MYWJlbC50ZXh0Q29udGVudCA9IFwiTWVkaXVtXCI7XG4gIG1wUmFkaW9MYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJtZWRpdW0tcHJpb3JpdHlcIik7XG4gIG1wUmFkaW9JbnB1dC5pZCA9IFwibWVkaXVtLXByaW9yaXR5XCI7XG4gIG1wUmFkaW9JbnB1dC5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwicHJpb3JpdHlcIik7XG4gIG1wUmFkaW9JbnB1dC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwicmFkaW9cIik7XG5cbiAgbHBSYWRpb0xhYmVsLnRleHRDb250ZW50ID0gXCJMb3dcIjtcbiAgbHBSYWRpb0xhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBcImxvdy1wcmlvcml0eVwiKTtcbiAgbHBSYWRpb0lucHV0LmlkID0gXCJsb3ctcHJpb3JpdHlcIjtcbiAgbHBSYWRpb0lucHV0LnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJwcmlvcml0eVwiKTtcbiAgbHBSYWRpb0lucHV0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJyYWRpb1wiKTtcblxuICBjb25maXJtQnRuLnRleHRDb250ZW50ID0gXCJDT05GSVJNXCI7XG4gIGNvbmZpcm1CdG4uaWQgPSBcImNvbmZpcm0taXRlbVwiO1xuICBjb25maXJtQnRuLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJzdWJtaXRcIik7XG5cbiAgcmV0dXJuIHtcbiAgICBmb3JtLFxuICAgIGgyLFxuICAgIGNvbnRhaW5pbmdEaXYsXG4gICAgdGl0bGVMYWJlbCxcbiAgICB0aXRsZUlucHV0LFxuICAgIGRlc2NyaXB0aW9uTGFiZWwsXG4gICAgZGVzY3JpcHRpb25JbnB1dCxcbiAgICBkYXRlTGFiZWwsXG4gICAgZGF0ZUlucHV0LFxuICAgIGhwUmFkaW9MYWJlbCxcbiAgICBocFJhZGlvSW5wdXQsXG4gICAgbXBSYWRpb0xhYmVsLFxuICAgIG1wUmFkaW9JbnB1dCxcbiAgICBscFJhZGlvTGFiZWwsXG4gICAgbHBSYWRpb0lucHV0LFxuICAgIGNvbmZpcm1CdG4sXG4gIH07XG59XG5cbi8vdGhlIGFib21pbmF0aW9uIHRvIGVuZCBhbGwgYWJvbWluYXRpb25zOlxuLy9hIGxvb3AgY29udGFpbmluZyBhIHN3aXRjaCBzdGF0ZW1lbnQgd2hpY2ggYWxzbyBjb250YWlucyBhbm90aGVyIGxvb3Agd2hpY2ggYWxzb1xuLy9jb250YWlucyBhbm90aGVyIHN3aXRjaCBzdGF0ZW1lbnQuXG4vL2FsbW9zdCBwcm91ZCBvZiBpdCBUQkguXG5mdW5jdGlvbiBuZXdUYXNrUmVuZGVyTG9vcHMobGlzdCkge1xuICBmb3IgKGxldCBpID0gMDsgaSA8IDY7IGkrKykge1xuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgc3dpdGNoIChpKSB7XG4gICAgICBjYXNlIDA6XG4gICAgICAgIGRpdi5hcHBlbmRDaGlsZChsaXN0LnRpdGxlTGFiZWwpO1xuICAgICAgICBkaXYuYXBwZW5kQ2hpbGQobGlzdC50aXRsZUlucHV0KTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDE6XG4gICAgICAgIGRpdi5hcHBlbmRDaGlsZChsaXN0LmRlc2NyaXB0aW9uTGFiZWwpO1xuICAgICAgICBkaXYuYXBwZW5kQ2hpbGQobGlzdC5kZXNjcmlwdGlvbklucHV0KTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDI6XG4gICAgICAgIGRpdi5hcHBlbmRDaGlsZChsaXN0LmRhdGVMYWJlbCk7XG4gICAgICAgIGRpdi5hcHBlbmRDaGlsZChsaXN0LmRhdGVJbnB1dCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSA0OlxuICAgICAgICBjb25zdCB1bCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCAzOyBqKyspIHtcbiAgICAgICAgICBjb25zdCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICAgICAgICBzd2l0Y2ggKGopIHtcbiAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgbGkuaWQgPSBcImhpZ2gtcHJpby1saVwiO1xuICAgICAgICAgICAgICBsaS5hcHBlbmRDaGlsZChsaXN0LmhwUmFkaW9MYWJlbCk7XG4gICAgICAgICAgICAgIGxpLmFwcGVuZENoaWxkKGxpc3QuaHBSYWRpb0lucHV0KTtcbiAgICAgICAgICAgICAgdWwuYXBwZW5kQ2hpbGQobGkpO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgbGkuaWQgPSBcIm1lZGl1bS1wcmlvLWxpXCI7XG4gICAgICAgICAgICAgIGxpLmFwcGVuZENoaWxkKGxpc3QubXBSYWRpb0xhYmVsKTtcbiAgICAgICAgICAgICAgbGkuYXBwZW5kQ2hpbGQobGlzdC5tcFJhZGlvSW5wdXQpO1xuICAgICAgICAgICAgICB1bC5hcHBlbmRDaGlsZChsaSk7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICBsaS5pZCA9IFwibG93LXByaW8tbGlcIjtcbiAgICAgICAgICAgICAgbGkuYXBwZW5kQ2hpbGQobGlzdC5scFJhZGlvTGFiZWwpO1xuICAgICAgICAgICAgICBsaS5hcHBlbmRDaGlsZChsaXN0LmxwUmFkaW9JbnB1dCk7XG4gICAgICAgICAgICAgIHVsLmFwcGVuZENoaWxkKGxpKTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGRpdi5hcHBlbmRDaGlsZCh1bCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSA1OlxuICAgICAgICBkaXYuYXBwZW5kQ2hpbGQobGlzdC5jb25maXJtQnRuKTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICAgIGxpc3QuZm9ybS5hcHBlbmRDaGlsZChkaXYpO1xuICB9XG4gIHJldHVybiBsaXN0LmZvcm07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm9qZWN0TW9kYWxDcmVhdGVFbGVtZW50KCkge1xuICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIik7XG4gIGZvcm0uaWQgPSBcInByb2plY3QtbW9kYWxcIjtcbiAgLy9haW4ndCBkb2luZyB0aGUgc2FtZSBjcmFwIHR3aWNlXG4gIGZvcm0uaW5uZXJIVE1MID0gYFxuICAgIDxsYWJlbCBmb3I9XCJwcm9qZWN0LW5hbWVcIj5Qcm9qZWN0IG5hbWU6PC9sYWJlbD5cbiAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cInByb2plY3QtbmFtZVwiIG1heGxlbmd0aD1cIjE1XCIgcmVxdWlyZWQgLz5cbiAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBpZD1cImNvbmZpcm0tcHJvamVjdFwiPkNPTkZJUk08L2J1dHRvbj5gO1xuXG4gIC8vY2VudGVyIGVsZW1lbnQgd2l0aG91dCBrbm93aW5nIGl0cyB3aWR0aChwb3M6IGFic29sdXRlICYgbGVmdDogNTAlKVxuICBmb3JtLnN0eWxlLm1hcmdpbkxlZnQgPSBgLSR7Zm9ybS5vZmZzZXRXaWR0aCAvIDJ9cHhgO1xuXG4gIHJldHVybiBmb3JtO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbmV3UHJvamVjdE1vZGFsUmVuZGVyKCkge1xuICBjb25zdCBmb3JtID0gcHJvamVjdE1vZGFsQ3JlYXRlRWxlbWVudCgpO1xuXG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChmb3JtKTtcblxuICByZW1vdmVJcnJlbGV2YW50RXZlbnRMaXN0ZW5lcnMoKTtcblxuICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgdmFsaWRhdGVOZXdNb2RhbCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBlZGl0UHJvamVjdE1vZGFsUmVuZGVyKCkge1xuICBjb25zdCBmb3JtID0gcHJvamVjdE1vZGFsQ3JlYXRlRWxlbWVudCgpO1xuICBjb25zdCBwcm9qZWN0ID0gd2hpY2hJc0FjdGl2ZShjdXJyZW50UHJvamVjdHNMaXN0KTtcblxuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZm9ybSk7XG5cbiAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3QtbmFtZVwiKTtcblxuICBpdGVtRWRpdGVkLnNldFRlbXBJZChwcm9qZWN0LmlkKTtcbiAgdGl0bGUudmFsdWUgPSBwcm9qZWN0LnRpdGxlO1xuXG4gIHJlbW92ZUlycmVsZXZhbnRFdmVudExpc3RlbmVycygpO1xuXG4gIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCB2YWxpZGF0ZUVkaXRNb2RhbCk7XG59XG4iLCJpbXBvcnQgeyByZWluc3RhdGVFdmVudExpc3RlbmVycyB9IGZyb20gXCIuL2V2ZW50TGlzdGVuZXJzTWFuYWdlclwiO1xuaW1wb3J0IHtcbiAgY29uZmlybU5ld1Rhc2ssXG4gIGNvbmZpcm1FZGl0VGFzayxcbiAgY29uZmlybU5ld1Byb2plY3QsXG4gIGNvbmZpcm1FZGl0UHJvamVjdCxcbn0gZnJvbSBcIi4vbW9kYWxBcHBsaWNhdGlvblwiO1xuXG5leHBvcnQgZnVuY3Rpb24gdmFsaWRhdGVOZXdNb2RhbChlKSB7XG4gIGUucHJldmVudERlZmF1bHQoKTtcbiAgaWYgKGUudGFyZ2V0LmNoZWNrVmFsaWRpdHkoKSkge1xuICAgIGlmIChlLnRhcmdldC5pZCA9PT0gXCJpdGVtLW1vZGFsXCIpIHtcbiAgICAgIGNvbmZpcm1OZXdUYXNrKCk7XG4gICAgfSBlbHNlIGlmIChlLnRhcmdldC5pZCA9PT0gXCJwcm9qZWN0LW1vZGFsXCIpIHtcbiAgICAgIGNvbmZpcm1OZXdQcm9qZWN0KCk7XG4gICAgfVxuICAgIHJlaW5zdGF0ZUV2ZW50TGlzdGVuZXJzKCk7XG4gIH1cbn1cbmV4cG9ydCBmdW5jdGlvbiB2YWxpZGF0ZUVkaXRNb2RhbChlKSB7XG4gIGUucHJldmVudERlZmF1bHQoKTtcbiAgaWYgKGUudGFyZ2V0LmNoZWNrVmFsaWRpdHkoKSkge1xuICAgIGlmIChlLnRhcmdldC5pZCA9PT0gXCJpdGVtLW1vZGFsXCIpIHtcbiAgICAgIGNvbmZpcm1FZGl0VGFzaygpO1xuICAgIH0gZWxzZSBpZiAoZS50YXJnZXQuaWQgPT09IFwicHJvamVjdC1tb2RhbFwiKSB7XG4gICAgICBjb25maXJtRWRpdFByb2plY3QoKTtcbiAgICB9XG4gICAgcmVpbnN0YXRlRXZlbnRMaXN0ZW5lcnMoKTtcbiAgfVxufVxuIiwiaW1wb3J0IGVkaXRTbWFsbFNWRyBmcm9tIFwiLi4vaW1hZ2VzL2VkaXQtc21hbGwuc3ZnXCI7XG5pbXBvcnQgaGlkZVNWRyBmcm9tIFwiLi4vaW1hZ2VzL2hpZGUuc3ZnXCI7XG5pbXBvcnQgc2hlZXRTdGFja1NWRyBmcm9tIFwiLi4vaW1hZ2VzL3N0YWNrLW9mLXNoZWV0cy5zdmdcIjtcbmltcG9ydCBkZWxldGVTVkcgZnJvbSBcIi4uL2ltYWdlcy9kZWxldGUuc3ZnXCI7XG5pbXBvcnQgZWRpdEJpZ1NWRyBmcm9tIFwiLi4vaW1hZ2VzL2VkaXQtYmlnLnN2Z1wiO1xuaW1wb3J0IG1lbnVTVkcgZnJvbSBcIi4uL2ltYWdlcy9tZW51LnN2Z1wiO1xuXG5pbXBvcnQge1xuICBUYXNrLFxuICBQcm9qZWN0LFxuICBjdXJyZW50UHJvamVjdHNMaXN0LFxuICBUZW1wb3JhcnlJZCxcbn0gZnJvbSBcIi4vaW50ZXJuYWxMb2dpY1wiO1xuaW1wb3J0IHtcbiAgZWRpdFRhc2tNb2RhbFJlbmRlcixcbiAgbmV3UHJvamVjdE1vZGFsUmVuZGVyLFxuICBlZGl0UHJvamVjdE1vZGFsUmVuZGVyLFxufSBmcm9tIFwiLi9tb2RhbFJlbmRlclwiO1xuaW1wb3J0IHtcbiAgd2hpY2hJc0FjdGl2ZSxcbiAgaGlkZVNpZGViYXIsXG4gIHNob3dTaWRlYmFyLFxuICByZW5kZXJNYWluLFxuICBzZXRQcmlvcml0eSxcbiAgZGVsZXRlSXRlbSxcbiAgc2V0Q29tcGxldGVPcHRpb24sXG4gIGNoYW5nZUNvbXBsZXRlT3B0aW9uLFxuICBkZWFjdGl2YXRlQWxsUHJvamVjdHMsXG4gIHNob3dHcm91cCxcbiAgZGVsZXRlUHJvamVjdCxcbn0gZnJvbSBcIi4vbG9hZERPTWNyYXBcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlclNpZGViYXIoKSB7XG4gIGNvbnN0IHNpZGViYXJSZW5kZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBzaWRlYmFySWNvbnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBuZXdQcm9qZWN0QnRuUmVuZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgY29uc3QgcHJvamVjdExpc3RUaXRsZVJlbmRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgY29uc3QgcHJvamVjdFVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xuICBjb25zdCBkeW5hbWljVWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XG4gIGNvbnN0IGR5bmFtaWNUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgY29uc3QgaGlkZUltZyA9IG5ldyBJbWFnZSgpO1xuICBjb25zdCBzaGVldFN0YWNrSW1nID0gbmV3IEltYWdlKCk7XG5cbiAgc2lkZWJhclJlbmRlci5pZCA9IFwicHJvamVjdHNcIjtcbiAgc2lkZWJhckljb25zLmlkID0gXCJpY29uc1wiO1xuICBuZXdQcm9qZWN0QnRuUmVuZGVyLmlkID0gXCJuZXctcHJvamVjdC1idG5cIjtcbiAgcHJvamVjdFVsLmlkID0gXCJwcm9qZWN0cy11bFwiO1xuICBkeW5hbWljVWwuaWQgPSBcImR5bmFtaWMtdWxcIjtcbiAgZHluYW1pY1RpdGxlLmlkID0gXCJkeW5hbWljLWgyXCI7XG4gIGhpZGVJbWcuaWQgPSBcImhpZGUtaWNvblwiO1xuICBoaWRlSW1nLnNyYyA9IGhpZGVTVkc7XG4gIHNoZWV0U3RhY2tJbWcuc3JjID0gc2hlZXRTdGFja1NWRztcblxuICBuZXdQcm9qZWN0QnRuUmVuZGVyLnRleHRDb250ZW50ID0gXCJDUkVBVEUgTkVXIFBST0pFQ1RcIjtcbiAgcHJvamVjdExpc3RUaXRsZVJlbmRlci50ZXh0Q29udGVudCA9IFwiWW91ciBwcm9qZWN0czpcIjtcbiAgZHluYW1pY1RpdGxlLnRleHRDb250ZW50ID0gXCJEeW5hbWljYWxseSBncm91cGVkIHRhc2tzXCI7XG5cbiAgc2lkZWJhckljb25zLmFwcGVuZENoaWxkKHNoZWV0U3RhY2tJbWcpO1xuICBzaWRlYmFySWNvbnMuYXBwZW5kQ2hpbGQoaGlkZUltZyk7XG5cbiAgcmVuZGVyUHJvamVjdFVsKHByb2plY3RVbCk7XG4gIHJlbmRlckR5bmFtaWNVbChkeW5hbWljVWwpO1xuXG4gIHNpZGViYXJSZW5kZXIuYXBwZW5kQ2hpbGQoc2lkZWJhckljb25zKTtcbiAgc2lkZWJhclJlbmRlci5hcHBlbmRDaGlsZChkeW5hbWljVGl0bGUpO1xuICBzaWRlYmFyUmVuZGVyLmFwcGVuZENoaWxkKGR5bmFtaWNVbCk7XG4gIHNpZGViYXJSZW5kZXIuYXBwZW5kQ2hpbGQobmV3UHJvamVjdEJ0blJlbmRlcik7XG4gIHNpZGViYXJSZW5kZXIuYXBwZW5kQ2hpbGQocHJvamVjdExpc3RUaXRsZVJlbmRlcik7XG4gIHNpZGViYXJSZW5kZXIuYXBwZW5kQ2hpbGQocHJvamVjdFVsKTtcblxuICBuZXdQcm9qZWN0QnRuUmVuZGVyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBuZXdQcm9qZWN0TW9kYWxSZW5kZXIpO1xuICBoaWRlSW1nLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBoaWRlU2lkZWJhcik7XG5cbiAgcmV0dXJuIHNpZGViYXJSZW5kZXI7XG59XG5cbmZ1bmN0aW9uIHJlbmRlclByb2plY3RVbChsaXN0KSB7XG4gIGlmIChjdXJyZW50UHJvamVjdHNMaXN0LmNvbnRlbnQubGVuZ3RoID4gMCkge1xuICAgIHdoaWNoSXNBY3RpdmUoY3VycmVudFByb2plY3RzTGlzdCk7XG4gICAgZm9yIChjb25zdCBwcm9qZWN0IG9mIGN1cnJlbnRQcm9qZWN0c0xpc3QuY29udGVudCkge1xuICAgICAgY29uc3QgbGkgPSByZW5kZXJTaW5nbGVQcm9qZWN0KHByb2plY3QpO1xuICAgICAgbGlzdC5hcHBlbmRDaGlsZChsaSk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIHJlbmRlckR5bmFtaWNVbCh1bCkge1xuICBjb25zdCBuZXh0V2VlayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgY29uc3QgaGlnaFByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICBjb25zdCBtZWRpdW1Qcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgY29uc3QgbG93UHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG5cbiAgbmV4dFdlZWsuaWQgPSBcIm5leHQtd2Vla1wiO1xuICBoaWdoUHJpb3JpdHkuaWQgPSBcImRocFwiO1xuICBtZWRpdW1Qcmlvcml0eS5pZCA9IFwiZG1wXCI7XG4gIGxvd1ByaW9yaXR5LmlkID0gXCJkbHBcIjtcbiAgaGlnaFByaW9yaXR5LmNsYXNzTmFtZSA9IFwicHJpb3JpdHktZ3JvdXBcIjtcbiAgbWVkaXVtUHJpb3JpdHkuY2xhc3NOYW1lID0gXCJwcmlvcml0eS1ncm91cFwiO1xuICBsb3dQcmlvcml0eS5jbGFzc05hbWUgPSBcInByaW9yaXR5LWdyb3VwXCI7XG5cbiAgbmV4dFdlZWsudGV4dENvbnRlbnQgPSBcIkR1ZSB0aGlzIHdlZWtcIjtcbiAgaGlnaFByaW9yaXR5LnRleHRDb250ZW50ID0gXCJIaWdoIHByaW9yaXR5XCI7XG4gIG1lZGl1bVByaW9yaXR5LnRleHRDb250ZW50ID0gXCJNZWRpdW0gcHJpb3JpdHlcIjtcbiAgbG93UHJpb3JpdHkudGV4dENvbnRlbnQgPSBcIkxvdyBwcmlvcml0eVwiO1xuXG4gIHVsLmFwcGVuZENoaWxkKG5leHRXZWVrKTtcbiAgdWwuYXBwZW5kQ2hpbGQoaGlnaFByaW9yaXR5KTtcbiAgdWwuYXBwZW5kQ2hpbGQobWVkaXVtUHJpb3JpdHkpO1xuICB1bC5hcHBlbmRDaGlsZChsb3dQcmlvcml0eSk7XG5cbiAgQXJyYXkuZnJvbSh1bC5jaGlsZE5vZGVzKS5mb3JFYWNoKChlKSA9PiB7XG4gICAgZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZGVhY3RpdmF0ZUFsbFByb2plY3RzKTtcbiAgICBlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBzaG93R3JvdXApO1xuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlclNpbmdsZVByb2plY3QocHJvamVjdCkge1xuICBjb25zdCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgY29uc3QgZGVsZXRlQnRuID0gbmV3IEltYWdlKCk7XG5cbiAgbGkudGV4dENvbnRlbnQgPSBgJHtwcm9qZWN0LnRpdGxlfWA7XG4gIGRlbGV0ZUJ0bi5zcmMgPSBkZWxldGVTVkc7XG4gIGRlbGV0ZUJ0bi5jbGFzc05hbWUgPSBcImRlbGV0ZS1wcm9qZWN0XCI7XG5cbiAgaWYgKCFwcm9qZWN0LmlkKSB7XG4gICAgY3VycmVudFByb2plY3RzTGlzdC5jaGVja0R1cGxpY2F0ZVByb2plY3QocHJvamVjdCk7XG4gIH1cbiAgbGkuaWQgPSBwcm9qZWN0LmlkO1xuICBsaS5hcHBlbmRDaGlsZChkZWxldGVCdG4pO1xuXG4gIGRlbGV0ZUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZGVsZXRlUHJvamVjdCk7XG4gIGxpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjaGFuZ2VBY3RpdmVQcm9qZWN0KTtcblxuICBpZiAocHJvamVjdC5hY3RpdmUpIHtcbiAgICBsaS5jbGFzc05hbWUgPSBcImFjdGl2ZVwiO1xuICB9IGVsc2Uge1xuICAgIGxpLmNsYXNzTmFtZSA9IFwiXCI7XG4gIH1cbiAgcmV0dXJuIGxpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2hhbmdlQWN0aXZlUHJvamVjdChlKSB7XG4gIGNvbnN0IHByb2plY3RVbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdHMtdWxcIik7XG4gIGNvbnN0IGR5bmFtaWNHcm91cCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZHluYW1pYy11bFwiKTtcbiAgY29uc3QgbGF0ZU1haW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1haW5cIik7XG5cbiAgQXJyYXkuZnJvbShwcm9qZWN0VWwuY2hpbGROb2RlcykuZm9yRWFjaCgoZWwpID0+IHtcbiAgICBpZiAoZS50YXJnZXQgIT09IGVsKSB7XG4gICAgICBlbC5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBlbC5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICAgIH1cbiAgfSk7XG5cbiAgQXJyYXkuZnJvbShkeW5hbWljR3JvdXAuY2hpbGRyZW4pLmZvckVhY2goKGVsKSA9PiB7XG4gICAgZWwuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgfSk7XG5cbiAgZm9yIChjb25zdCBwcm9qIG9mIGN1cnJlbnRQcm9qZWN0c0xpc3QuY29udGVudCkge1xuICAgIGlmIChwcm9qLmlkID09PSBlLnRhcmdldC5pZCAmJiAhcHJvai5hY3RpdmUpIHtcbiAgICAgIGN1cnJlbnRQcm9qZWN0c0xpc3Quc2V0SW5hY3RpdmVQcm9qZWN0cygpO1xuICAgICAgY3VycmVudFByb2plY3RzTGlzdC5zZXRBY3RpdmVQcm9qZWN0KHByb2opO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0IGFjdGl2ZVByb2plY3QgPSB3aGljaElzQWN0aXZlKGN1cnJlbnRQcm9qZWN0c0xpc3QpO1xuXG4gIGxhdGVNYWluLnJlbW92ZSgpO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQocmVuZGVyTWFpbihhY3RpdmVQcm9qZWN0LmNvbnRlbnQsIGFjdGl2ZVByb2plY3QudGl0bGUpKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlclRvcENvbnRlbnQocHJvamVjdFRpdGxlKSB7XG4gIGNvbnN0IG5ld1RvcFNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcblxuICBjb25zdCBlZGl0UHJvamVjdEltZyA9IG5ldyBJbWFnZSgpO1xuICBjb25zdCBzaG93SW1nID0gbmV3IEltYWdlKCk7XG5cbiAgbmV3VG9wU2VjdGlvbi5pZCA9IFwiYWN0aXZlLXByb2plY3RcIjtcbiAgZWRpdFByb2plY3RJbWcuaWQgPSBcImVkaXQtcHJvamVjdFwiO1xuICBzaG93SW1nLmlkID0gXCJtZW51LWljb25cIjtcblxuICB0aXRsZS50ZXh0Q29udGVudCA9IHByb2plY3RUaXRsZTtcbiAgZWRpdFByb2plY3RJbWcuc3JjID0gZWRpdEJpZ1NWRztcbiAgc2hvd0ltZy5zcmMgPSBtZW51U1ZHO1xuXG4gIG5ld1RvcFNlY3Rpb24uYXBwZW5kQ2hpbGQoc2hvd0ltZyk7XG4gIG5ld1RvcFNlY3Rpb24uYXBwZW5kQ2hpbGQodGl0bGUpO1xuICBuZXdUb3BTZWN0aW9uLmFwcGVuZENoaWxkKGVkaXRQcm9qZWN0SW1nKTtcblxuICBzaG93SW1nLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBzaG93U2lkZWJhcik7XG4gIGVkaXRQcm9qZWN0SW1nLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBlZGl0UHJvamVjdE1vZGFsUmVuZGVyKTtcbiAgcmV0dXJuIG5ld1RvcFNlY3Rpb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJTaW5nbGVUYXNrKHRhc2spIHtcbiAgY29uc3QgaXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBkYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgcHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBjb21wbGV0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGVkaXRCdG4gPSBuZXcgSW1hZ2UoKTtcbiAgY29uc3QgZGVsZXRlQnRuID0gbmV3IEltYWdlKCk7XG4gIGNvbnN0IGNvbXBsZXRlQnRuID0gbmV3IEltYWdlKCk7XG5cbiAgaXRlbS5jbGFzc05hbWUgPSBcIml0ZW1cIjtcbiAgdGl0bGUuY2xhc3NOYW1lID0gXCJ0aXRsZVwiO1xuICBkZXNjcmlwdGlvbi5jbGFzc05hbWUgPSBcImRlc2NyaXB0aW9uXCI7XG4gIGRhdGUuY2xhc3NOYW1lID0gXCJkYXRlXCI7XG4gIHByaW9yaXR5LmNsYXNzTmFtZSA9IFwicHJpb3JpdHlcIjtcbiAgY29tcGxldGUuY2xhc3NOYW1lID0gXCJjb21wbGV0ZVwiO1xuXG4gIGVkaXRCdG4uY2xhc3NOYW1lID0gXCJlZGl0LWl0ZW1cIjtcbiAgZGVsZXRlQnRuLmNsYXNzTmFtZSA9IFwiZGVsZXRlLWl0ZW1cIjtcbiAgY29tcGxldGVCdG4uY2xhc3NOYW1lID0gXCJjb21wbGV0ZS1idG5cIjtcblxuICBlZGl0QnRuLnNyYyA9IGVkaXRTbWFsbFNWRztcbiAgZGVsZXRlQnRuLnNyYyA9IGRlbGV0ZVNWRztcbiAgaWYgKCF0YXNrLmlkKSB7XG4gICAgY3VycmVudFByb2plY3RzTGlzdC5jaGVja0R1cGxpY2F0ZUl0ZW0odGFzayk7XG4gIH1cbiAgaXRlbS5pZCA9IHRhc2suaWQ7XG5cbiAgdGl0bGUudGV4dENvbnRlbnQgPSB0YXNrLnRpdGxlO1xuICBkZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IHRhc2suZGVzY3JpcHRpb247XG4gIGRhdGUudGV4dENvbnRlbnQgPSB0YXNrLmRhdGU7XG4gIGNvbXBsZXRlLnRleHRDb250ZW50ID0gXCJDb21wbGV0ZTpcIjtcblxuICBzZXRQcmlvcml0eShwcmlvcml0eSwgdGFzayk7XG4gIHNldENvbXBsZXRlT3B0aW9uKHRhc2ssIGNvbXBsZXRlQnRuKTtcbiAgY29tcGxldGUuYXBwZW5kQ2hpbGQoY29tcGxldGVCdG4pO1xuXG4gIGl0ZW0uYXBwZW5kQ2hpbGQodGl0bGUpO1xuICBpdGVtLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKTtcbiAgaXRlbS5hcHBlbmRDaGlsZChkYXRlKTtcbiAgaXRlbS5hcHBlbmRDaGlsZChwcmlvcml0eSk7XG4gIGl0ZW0uYXBwZW5kQ2hpbGQoY29tcGxldGUpO1xuXG4gIGl0ZW0uYXBwZW5kQ2hpbGQoZWRpdEJ0bik7XG4gIGl0ZW0uYXBwZW5kQ2hpbGQoZGVsZXRlQnRuKTtcblxuICBlZGl0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBlZGl0VGFza01vZGFsUmVuZGVyKTtcbiAgZGVsZXRlQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBkZWxldGVJdGVtKTtcbiAgY29tcGxldGVCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNoYW5nZUNvbXBsZXRlT3B0aW9uKTtcblxuICByZXR1cm4gaXRlbTtcbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgIXNjcmlwdFVybCkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICogYXMgaXRlbXMgZnJvbSBcIi4vbW9kdWxlcy9sb2FkRE9NY3JhcC5qc1wiO1xuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgaXRlbXMucmVuZGVyQ29udGFpbmVyKCkpO1xuLyogXG5UTyBETzpcbi1sb2NhbCBzdG9yYWdlO1xuLWdpdCBodWIgZGVwbG95bWVudDtcbiovXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=