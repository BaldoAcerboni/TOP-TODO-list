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

head.appendChild(faviconIcon);
head.appendChild(faviconMask);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTyxnRkFBZ0YsVUFBVSxZQUFZLE1BQU0sT0FBTyxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxPQUFPLFFBQVEsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksV0FBVyxNQUFNLE1BQU0sVUFBVSxPQUFPLE1BQU0sVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLE1BQU0sWUFBWSxPQUFPLE1BQU0sVUFBVSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxLQUFLLEtBQUssVUFBVSxNQUFNLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLEtBQUssTUFBTSxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssVUFBVSxLQUFLLE1BQU0sUUFBUSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxNQUFNLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLEtBQUssTUFBTSxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLEtBQUssTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxNQUFNLE1BQU0sVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsT0FBTyxRQUFRLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLE9BQU8sUUFBUSxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVks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LEVBQUUsSUFBSTtBQUN2Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esa0JBQWtCLHlCQUF5QjtBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esa0JBQWtCLFNBQVM7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esa0JBQWtCLHlCQUF5QjtBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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Q0E7O0FBRUEsb0NBQW9DLDZEQUFtQjtBQUN2RCxzQ0FBc0Msb0RBQVU7QUFDaEQsd0NBQXdDLDhEQUFvQjs7QUFFNUQ7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQ3ZQQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NsQkE7Ozs7Ozs7Ozs7OztBQ0FrRDs7QUFFbEQsZ0NBQWdDLG9FQUFxQjtBQUNyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9wLXRvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9wLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9wLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvcC10b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG9wLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b3AtdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b3AtdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvcC10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9wLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvcC10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b3AtdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvZXZlbnRMaXN0ZW5lcnNNYW5hZ2VyLmpzIiwid2VicGFjazovL3RvcC10b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy9pbnRlcm5hbExvZ2ljLmpzIiwid2VicGFjazovL3RvcC10b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy9sb2FkRE9NY3JhcC5qcyIsIndlYnBhY2s6Ly90b3AtdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvbW9kYWxBcHBsaWNhdGlvbi5qcyIsIndlYnBhY2s6Ly90b3AtdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvbW9kYWxSZW5kZXIuanMiLCJ3ZWJwYWNrOi8vdG9wLXRvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL21vZGFsVmFsaWRhdGlvbi5qcyIsIndlYnBhY2s6Ly90b3AtdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvcmVuZGVyU2luZ2xlRWwuanMiLCJ3ZWJwYWNrOi8vdG9wLXRvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b3AtdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvcC10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvcC10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly90b3AtdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9wLXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvcC10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdG9wLXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG9wLXRvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgKiB7XG4gIG1hcmdpbjogMDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgZm9udC1mYW1pbHk6IHN5c3RlbS11aSwgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBcIlNlZ29lIFVJXCIsIFJvYm90byxcbiAgICBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCBcIk9wZW4gU2Fuc1wiLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuI2NvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBiYWNrZ3JvdW5kOiAjNWU1ZTVlO1xufVxuXG4vKiBcblxuICBQUk9KRUNUUyBTSURFQkFSXG5cbiovXG5cbiNwcm9qZWN0cyB7XG4gIGJhY2tncm91bmQ6ICM5Nzk3OTc7XG4gIHBhZGRpbmc6IDFyZW07XG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xuICBib3JkZXItcmlnaHQ6IDJweCBzb2xpZCAjMDAwNzhkO1xuICBwYWRkaW5nOiAxcmVtO1xuICB6LWluZGV4OiAyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAzMDBweDtcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xufVxuXG4jcHJvamVjdHMudmlzaWJsZSB7XG4gIGFuaW1hdGlvbjogc2hvdyAwLjVzO1xuICB3aWR0aDogMzAwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuI3Byb2plY3RzLmhpZGRlbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogLTMwMHB4O1xuICBoZWlnaHQ6IDEwMHZoO1xuICBhbmltYXRpb246IGhpZGUgMC41cztcbn1cblxuI2hpZGUtaWNvbiB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuI25ldy1wcm9qZWN0LWJ0biB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAwLjVyZW0gMDtcbiAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KCM1MDY5NjUsICMwMDViOWMpO1xuICBjb2xvcjogI2ZmZjtcbiAgYm9yZGVyOiAzcHggc29saWQgIzAwN2QwYztcbiAgYm9yZGVyLXJhZGl1czogMC4ycmVtO1xuICBtYXJnaW46IDFyZW0gMCAwIDA7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuI2ljb25zIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgaGVpZ2h0OiAxMDBweDtcbn1cblxuI3Byb2plY3RzIGgyIHtcbiAgZm9udC1zaXplOiAxLjNyZW07XG4gIG1hcmdpbjogMXJlbSAwO1xufVxuXG4jcHJvamVjdHMgbGk6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjNjI2MjYyO1xuICBjb2xvcjogI2ZmZjtcbn1cblxuI3Byb2plY3RzLXVsLFxuI2R5bmFtaWMtdWwge1xuICBwYWRkaW5nLWxlZnQ6IDA7XG59XG5cbiNwcm9qZWN0cy11bCA+IGxpLFxuI2R5bmFtaWMtdWwgPiBsaSB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4jcHJvamVjdHMtdWwgPiBsaTo6bWFya2VyIHtcbiAgY29udGVudDogXCIjXCI7XG4gIGNvbG9yOiAjMDAwYWM0O1xufVxuXG4jZHluYW1pYy11bCA+IGxpOjptYXJrZXIge1xuICBjb2xvcjogIzAwMGFjNDtcbiAgY29udGVudDogXCJvXCI7XG59XG5cbiNwcm9qZWN0cy11bCA+IGxpLmFjdGl2ZSxcbiNkeW5hbWljLXVsID4gbGkuYWN0aXZlIHtcbiAgYm9yZGVyOiAzcHggZG91YmxlICM3NWZmNGI7XG59XG5cbiNwcm9qZWN0cy11bCA+IGxpLmFjdGl2ZTo6bWFya2VyLFxuI2R5bmFtaWMtdWwgPiBsaS5hY3RpdmU6Om1hcmtlciB7XG4gIGNvbG9yOiAjNzVmZjRiO1xufVxuXG4uZGVsZXRlLXByb2plY3Qge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAyLjRweDtcbiAgYmFja2dyb3VuZDogI2ZmMjAyMDtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuI3Byb2plY3RzLXVsID4gbGkuYWN0aXZlID4gLmRlbGV0ZS1wcm9qZWN0IHtcbiAgcmlnaHQ6IDA7XG59XG5cbkBrZXlmcmFtZXMgc2hvdyB7XG4gIDAlIHtcbiAgICBsZWZ0OiAtMzAwcHg7XG4gIH1cbiAgMTAwJSB7XG4gICAgbGVmdDogMDtcbiAgfVxufVxuXG5Aa2V5ZnJhbWVzIGhpZGUge1xuICAwJSB7XG4gICAgbGVmdDogMDtcbiAgfVxuICAxMDAlIHtcbiAgICBsZWZ0OiAtMzAwcHg7XG4gIH1cbn1cblxuLyogXG5cbk1BSU4gU0VDVElPTlxuXG4qL1xuXG4jbWFpbiB7XG4gIGZsZXgtZ3JvdzogMTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgYWxpZ24tY29udGVudDogc2FmZSBjZW50ZXI7XG4gIGdhcDogMXJlbTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nOiAyNXB4O1xuICBvdmVyZmxvdy15OiBhdXRvO1xuICBtYXJnaW4tdG9wOiAxMDBweDtcbn1cblxuI2FkZC1pdGVtIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBib3R0b206IDJyZW07XG4gIGxlZnQ6IDUwJTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB6LWluZGV4OiAxO1xufVxuXG4uaXRlbSB7XG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcbiAgd2lkdGg6IDMwMHB4O1xuICBoZWlnaHQ6IDMwMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJveC1zaGFkb3c6IDAgMCA1cHggIzAwMDtcbiAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KCMzZDNkM2QsICM1MDY5NjUpO1xuICBwYWRkaW5nOiAyMHB4O1xufVxuXG4uaXRlbTpob3ZlciB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wNSwgMS4wNSk7XG59XG5cbi5pdGVtID4gZGl2IHtcbiAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KCNlN2U3ZTcsICNiYWJhYmEpO1xuICBwYWRkaW5nOiAwLjNyZW0gMXJlbTtcbiAgYm94LXNoYWRvdzogMCAwIDNweCAjMDAwO1xufVxuXG4uaXRlbSA+IGRpdjpudGgtY2hpbGQoMikge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG92ZXJmbG93LXk6IGF1dG87XG59XG5cbi5lZGl0LWl0ZW0sXG4uZGVsZXRlLWl0ZW0ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XG4gIGJveC1zaGFkb3c6IDAgMCAzcHggIzAwMDtcbn1cblxuLmVkaXQtaXRlbSB7XG4gIGxlZnQ6IDA7XG4gIGJhY2tncm91bmQ6ICM2MDgxZGM7XG59XG5cbi5lZGl0LWl0ZW06YWN0aXZlLFxuLmRlbGV0ZS1pdGVtOmFjdGl2ZSB7XG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMCAzcHggIzAwMDtcbn1cblxuLmRlbGV0ZS1pdGVtIHtcbiAgcmlnaHQ6IDA7XG4gIGJhY2tncm91bmQ6ICNmZjIwMjA7XG59XG5cbi5jb21wbGV0ZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmNvbXBsZXRlLWJ0biB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuXG4uY29tcGxldGUtYnRuLmZhZGUtb3V0IHtcbiAgYW5pbWF0aW9uOiBmYWRlLW91dCAwLjVzIGxpbmVhcjtcbiAgb3BhY2l0eTogMDtcbn1cblxuQGtleWZyYW1lcyBmYWRlLW91dCB7XG4gIDAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG4gIDEwMCUge1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbn1cblxuLmNvbXBsZXRlLWJ0bi5mYWRlLWluIHtcbiAgYW5pbWF0aW9uOiBmYWRlLWluIDAuNXMgbGluZWFyO1xuICBvcGFjaXR5OiAxO1xufVxuXG5Aa2V5ZnJhbWVzIGZhZGUtaW4ge1xuICAwJSB7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuICAxMDAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59XG5cbiNhY3RpdmUtcHJvamVjdCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoIzNkM2QzZCwgIzJhMmY5Nik7XG4gIGNvbG9yOiAjZmZmO1xuICB6LWluZGV4OiAxO1xufVxuXG4jbWVudS1pY29uLFxuI2VkaXQtcHJvamVjdCB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoIzJhMmY5NiwgIzNkM2QzZCk7XG59XG5cbiNzaGVldC1zdGFjayB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLyogXG5cbklURU0gTU9EQUxcblxuKi9cblxuI2l0ZW0tbW9kYWwge1xuICBkaXNwbGF5OiBmbGV4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiA3MCU7XG4gIG1pbi1oZWlnaHQ6IDYwJTtcbiAgdG9wOiAyMCU7XG4gIGxlZnQ6IDE1JTtcbiAgYm9yZGVyLXJhZGl1czogMnJlbTtcbiAgcGFkZGluZzogMS41cmVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XG4gIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudCgjM2QzZDNkLCAjMmEyZjk2KTtcbiAgYm94LXNoYWRvdzogMC41cmVtIDAuNXJlbSAxcmVtIC0wLjVyZW0gIzAwMDtcbiAgei1pbmRleDogMTA7XG59XG5cbiNpdGVtLW1vZGFsID4gZGl2IHtcbiAgbWFyZ2luLWJvdHRvbTogMC44cmVtO1xufVxuXG4jaXRlbS1tb2RhbCB1bCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogMC41cmVtO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbmxhYmVsIHtcbiAgZm9udC1zaXplOiAxLjJyZW07XG59XG5cbmRpdiA+IGxhYmVsIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcbiAgY29sb3I6ICNmZmY7XG59XG5cbiNpdGVtLW1vZGFsIGxpIHtcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcbiAgbWFyZ2luOiAwLjRyZW0gMDtcbiAgcGFkZGluZzogMC41cmVtO1xuICB3aWR0aDogMjUlO1xufVxuXG4jaGlnaC1wcmlvLWxpIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmMzQzNDtcbn1cblxuI21lZGl1bS1wcmlvLWxpIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZTAzMztcbn1cblxuI2xvdy1wcmlvLWxpIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzZhZmYyYTtcbn1cblxuI2l0ZW0tbW9kYWwgdWwge1xuICBwYWRkaW5nOiAwO1xufVxuXG50ZXh0YXJlYSB7XG4gIHJlc2l6ZTogbm9uZTtcbn1cblxuaW5wdXRbdHlwZT1cInRleHRcIl0sXG50ZXh0YXJlYSB7XG4gIHdpZHRoOiA4MCU7XG59XG5cbmlucHV0Om5vdChpbnB1dFt0eXBlPVwicmFkaW9cIl0pLFxudGV4dGFyZWEge1xuICBmb250LXNpemU6IDFyZW07XG4gIGJvcmRlci1yYWRpdXM6IDAuM3JlbTtcbiAgYm94LXNoYWRvdzogMCAwLjNyZW0gMXJlbSAtMC4zcmVtICM0YTRhNGE7XG4gIGJvcmRlcjogbm9uZTtcbn1cblxuI2NvbmZpcm0taXRlbSB7XG4gIHdpZHRoOiA4MCU7XG4gIHBhZGRpbmc6IDAuNXJlbTtcbiAgZm9udC1zaXplOiAxLjJyZW07XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgjYjdiN2I3LCAjZmZmKTtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLyogXG5cblBST0pFQ1QgTU9EQUxcblxuKi9cblxuI3Byb2plY3QtbW9kYWwge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMzAlO1xuICBsZWZ0OiA1MCU7XG4gIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudCgjM2QzZDNkLCAjMmEyZjk2KTtcbiAgYm94LXNoYWRvdzogMC41cmVtIDAuNXJlbSAxcmVtIC0wLjVyZW0gIzAwMDtcbiAgYm9yZGVyLXJhZGl1czogMnJlbTtcbiAgcGFkZGluZzogMXJlbTtcbn1cblxuI3Byb2plY3QtbW9kYWwgPiAqIHtcbiAgbWFyZ2luOiAxcmVtIDA7XG59XG5cbiNwcm9qZWN0LW1vZGFsID4gbGFiZWwge1xuICBjb2xvcjogI2ZmZjtcbn1cblxuI2NvbmZpcm0tcHJvamVjdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwYWRkaW5nOiAwLjVyZW0gMnJlbTtcbiAgZm9udC1zaXplOiAxLjJyZW07XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg0NWRlZywgI2IwYjBiMCwgI2UyZTJlMik7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xuICBtYXJnaW46IDAgYXV0bztcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uY29sb3Ige1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBjNzAzO1xufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsU0FBUztFQUNULHNCQUFzQjtFQUN0Qjt3RUFDc0U7RUFDdEUsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG9CQUFvQjtFQUNwQixXQUFXO0VBQ1gsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixtQkFBbUI7QUFDckI7O0FBRUE7Ozs7Q0FJQzs7QUFFRDtFQUNFLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IsaUJBQWlCO0VBQ2pCLCtCQUErQjtFQUMvQixhQUFhO0VBQ2IsVUFBVTtFQUNWLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usb0JBQW9CO0VBQ3BCLFlBQVk7RUFDWixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGFBQWE7RUFDYixvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGlCQUFpQjtFQUNqQiw2Q0FBNkM7RUFDN0MsV0FBVztFQUNYLHlCQUF5QjtFQUN6QixxQkFBcUI7RUFDckIsa0JBQWtCO0VBQ2xCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLHVCQUF1QjtFQUN2QixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxpQkFBaUI7RUFD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O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixxQkFBcUI7RUFDckIsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixVQUFVO0FBQ1o7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7O0VBRUUsVUFBVTtBQUNaOztBQUVBOztFQUVFLGVBQWU7RUFDZixxQkFBcUI7RUFDckIseUNBQXlDO0VBQ3pDLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFVBQVU7RUFDVixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLDBDQUEwQztFQUMxQyxZQUFZO0VBQ1oscUJBQXFCO0VBQ3JCLGVBQWU7QUFDakI7O0FBRUE7Ozs7Q0FJQzs7QUFFRDtFQUNFLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsU0FBUztFQUNULDZDQUE2QztFQUM3QywyQ0FBMkM7RUFDM0MsbUJBQW1CO0VBQ25CLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxjQUFjO0VBQ2Qsb0JBQW9CO0VBQ3BCLGlCQUFpQjtFQUNqQixvREFBb0Q7RUFDcEQsWUFBWTtFQUNaLHFCQUFxQjtFQUNyQixjQUFjO0VBQ2QsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqIHtcXG4gIG1hcmdpbjogMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBmb250LWZhbWlseTogc3lzdGVtLXVpLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFxcXCJTZWdvZSBVSVxcXCIsIFJvYm90byxcXG4gICAgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgXFxcIk9wZW4gU2Fuc1xcXCIsIFxcXCJIZWx2ZXRpY2EgTmV1ZVxcXCIsIHNhbnMtc2VyaWY7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbiNjb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgYmFja2dyb3VuZDogIzVlNWU1ZTtcXG59XFxuXFxuLyogXFxuXFxuICBQUk9KRUNUUyBTSURFQkFSXFxuXFxuKi9cXG5cXG4jcHJvamVjdHMge1xcbiAgYmFja2dyb3VuZDogIzk3OTc5NztcXG4gIHBhZGRpbmc6IDFyZW07XFxuICBmb250LXNpemU6IDEuMnJlbTtcXG4gIGJvcmRlci1yaWdodDogMnB4IHNvbGlkICMwMDA3OGQ7XFxuICBwYWRkaW5nOiAxcmVtO1xcbiAgei1pbmRleDogMjtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHdpZHRoOiAzMDBweDtcXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcXG59XFxuXFxuI3Byb2plY3RzLnZpc2libGUge1xcbiAgYW5pbWF0aW9uOiBzaG93IDAuNXM7XFxuICB3aWR0aDogMzAwcHg7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbiNwcm9qZWN0cy5oaWRkZW4ge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogLTMwMHB4O1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIGFuaW1hdGlvbjogaGlkZSAwLjVzO1xcbn1cXG5cXG4jaGlkZS1pY29uIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuI25ldy1wcm9qZWN0LWJ0biB7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBhZGRpbmc6IDAuNXJlbSAwO1xcbiAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KCM1MDY5NjUsICMwMDViOWMpO1xcbiAgY29sb3I6ICNmZmY7XFxuICBib3JkZXI6IDNweCBzb2xpZCAjMDA3ZDBjO1xcbiAgYm9yZGVyLXJhZGl1czogMC4ycmVtO1xcbiAgbWFyZ2luOiAxcmVtIDAgMCAwO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4jaWNvbnMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgaGVpZ2h0OiAxMDBweDtcXG59XFxuXFxuI3Byb2plY3RzIGgyIHtcXG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xcbiAgbWFyZ2luOiAxcmVtIDA7XFxufVxcblxcbiNwcm9qZWN0cyBsaTpob3ZlciB7XFxuICBiYWNrZ3JvdW5kOiAjNjI2MjYyO1xcbiAgY29sb3I6ICNmZmY7XFxufVxcblxcbiNwcm9qZWN0cy11bCxcXG4jZHluYW1pYy11bCB7XFxuICBwYWRkaW5nLWxlZnQ6IDA7XFxufVxcblxcbiNwcm9qZWN0cy11bCA+IGxpLFxcbiNkeW5hbWljLXVsID4gbGkge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4jcHJvamVjdHMtdWwgPiBsaTo6bWFya2VyIHtcXG4gIGNvbnRlbnQ6IFxcXCIjXFxcIjtcXG4gIGNvbG9yOiAjMDAwYWM0O1xcbn1cXG5cXG4jZHluYW1pYy11bCA+IGxpOjptYXJrZXIge1xcbiAgY29sb3I6ICMwMDBhYzQ7XFxuICBjb250ZW50OiBcXFwib1xcXCI7XFxufVxcblxcbiNwcm9qZWN0cy11bCA+IGxpLmFjdGl2ZSxcXG4jZHluYW1pYy11bCA+IGxpLmFjdGl2ZSB7XFxuICBib3JkZXI6IDNweCBkb3VibGUgIzc1ZmY0YjtcXG59XFxuXFxuI3Byb2plY3RzLXVsID4gbGkuYWN0aXZlOjptYXJrZXIsXFxuI2R5bmFtaWMtdWwgPiBsaS5hY3RpdmU6Om1hcmtlciB7XFxuICBjb2xvcjogIzc1ZmY0YjtcXG59XFxuXFxuLmRlbGV0ZS1wcm9qZWN0IHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHJpZ2h0OiAyLjRweDtcXG4gIGJhY2tncm91bmQ6ICNmZjIwMjA7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcbiNwcm9qZWN0cy11bCA+IGxpLmFjdGl2ZSA+IC5kZWxldGUtcHJvamVjdCB7XFxuICByaWdodDogMDtcXG59XFxuXFxuQGtleWZyYW1lcyBzaG93IHtcXG4gIDAlIHtcXG4gICAgbGVmdDogLTMwMHB4O1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIGxlZnQ6IDA7XFxuICB9XFxufVxcblxcbkBrZXlmcmFtZXMgaGlkZSB7XFxuICAwJSB7XFxuICAgIGxlZnQ6IDA7XFxuICB9XFxuICAxMDAlIHtcXG4gICAgbGVmdDogLTMwMHB4O1xcbiAgfVxcbn1cXG5cXG4vKiBcXG5cXG5NQUlOIFNFQ1RJT05cXG5cXG4qL1xcblxcbiNtYWluIHtcXG4gIGZsZXgtZ3JvdzogMTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gIGFsaWduLWNvbnRlbnQ6IHNhZmUgY2VudGVyO1xcbiAgZ2FwOiAxcmVtO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgcGFkZGluZzogMjVweDtcXG4gIG92ZXJmbG93LXk6IGF1dG87XFxuICBtYXJnaW4tdG9wOiAxMDBweDtcXG59XFxuXFxuI2FkZC1pdGVtIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGJvdHRvbTogMnJlbTtcXG4gIGxlZnQ6IDUwJTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHotaW5kZXg6IDE7XFxufVxcblxcbi5pdGVtIHtcXG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXG4gIHdpZHRoOiAzMDBweDtcXG4gIGhlaWdodDogMzAwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgYm94LXNoYWRvdzogMCAwIDVweCAjMDAwO1xcbiAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KCMzZDNkM2QsICM1MDY5NjUpO1xcbiAgcGFkZGluZzogMjBweDtcXG59XFxuXFxuLml0ZW06aG92ZXIge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1LCAxLjA1KTtcXG59XFxuXFxuLml0ZW0gPiBkaXYge1xcbiAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KCNlN2U3ZTcsICNiYWJhYmEpO1xcbiAgcGFkZGluZzogMC4zcmVtIDFyZW07XFxuICBib3gtc2hhZG93OiAwIDAgM3B4ICMwMDA7XFxufVxcblxcbi5pdGVtID4gZGl2Om50aC1jaGlsZCgyKSB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBvdmVyZmxvdy15OiBhdXRvO1xcbn1cXG5cXG4uZWRpdC1pdGVtLFxcbi5kZWxldGUtaXRlbSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDA7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxuICBib3gtc2hhZG93OiAwIDAgM3B4ICMwMDA7XFxufVxcblxcbi5lZGl0LWl0ZW0ge1xcbiAgbGVmdDogMDtcXG4gIGJhY2tncm91bmQ6ICM2MDgxZGM7XFxufVxcblxcbi5lZGl0LWl0ZW06YWN0aXZlLFxcbi5kZWxldGUtaXRlbTphY3RpdmUge1xcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDNweCAjMDAwO1xcbn1cXG5cXG4uZGVsZXRlLWl0ZW0ge1xcbiAgcmlnaHQ6IDA7XFxuICBiYWNrZ3JvdW5kOiAjZmYyMDIwO1xcbn1cXG5cXG4uY29tcGxldGUge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5jb21wbGV0ZS1idG4ge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbn1cXG5cXG4uY29tcGxldGUtYnRuLmZhZGUtb3V0IHtcXG4gIGFuaW1hdGlvbjogZmFkZS1vdXQgMC41cyBsaW5lYXI7XFxuICBvcGFjaXR5OiAwO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIGZhZGUtb3V0IHtcXG4gIDAlIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gIH1cXG4gIDEwMCUge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgfVxcbn1cXG5cXG4uY29tcGxldGUtYnRuLmZhZGUtaW4ge1xcbiAgYW5pbWF0aW9uOiBmYWRlLWluIDAuNXMgbGluZWFyO1xcbiAgb3BhY2l0eTogMTtcXG59XFxuXFxuQGtleWZyYW1lcyBmYWRlLWluIHtcXG4gIDAlIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gIH1cXG4gIDEwMCUge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgfVxcbn1cXG5cXG4jYWN0aXZlLXByb2plY3Qge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCMzZDNkM2QsICMyYTJmOTYpO1xcbiAgY29sb3I6ICNmZmY7XFxuICB6LWluZGV4OiAxO1xcbn1cXG5cXG4jbWVudS1pY29uLFxcbiNlZGl0LXByb2plY3Qge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCMyYTJmOTYsICMzZDNkM2QpO1xcbn1cXG5cXG4jc2hlZXQtc3RhY2sge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4vKiBcXG5cXG5JVEVNIE1PREFMXFxuXFxuKi9cXG5cXG4jaXRlbS1tb2RhbCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgd2lkdGg6IDcwJTtcXG4gIG1pbi1oZWlnaHQ6IDYwJTtcXG4gIHRvcDogMjAlO1xcbiAgbGVmdDogMTUlO1xcbiAgYm9yZGVyLXJhZGl1czogMnJlbTtcXG4gIHBhZGRpbmc6IDEuNXJlbTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogc3RyZXRjaDtcXG4gIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudCgjM2QzZDNkLCAjMmEyZjk2KTtcXG4gIGJveC1zaGFkb3c6IDAuNXJlbSAwLjVyZW0gMXJlbSAtMC41cmVtICMwMDA7XFxuICB6LWluZGV4OiAxMDtcXG59XFxuXFxuI2l0ZW0tbW9kYWwgPiBkaXYge1xcbiAgbWFyZ2luLWJvdHRvbTogMC44cmVtO1xcbn1cXG5cXG4jaXRlbS1tb2RhbCB1bCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAwLjVyZW07XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbmxhYmVsIHtcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcbn1cXG5cXG5kaXYgPiBsYWJlbCB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcXG4gIGNvbG9yOiAjZmZmO1xcbn1cXG5cXG4jaXRlbS1tb2RhbCBsaSB7XFxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcbiAgbWFyZ2luOiAwLjRyZW0gMDtcXG4gIHBhZGRpbmc6IDAuNXJlbTtcXG4gIHdpZHRoOiAyNSU7XFxufVxcblxcbiNoaWdoLXByaW8tbGkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmMzQzNDtcXG59XFxuXFxuI21lZGl1bS1wcmlvLWxpIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmUwMzM7XFxufVxcblxcbiNsb3ctcHJpby1saSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNmFmZjJhO1xcbn1cXG5cXG4jaXRlbS1tb2RhbCB1bCB7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG50ZXh0YXJlYSB7XFxuICByZXNpemU6IG5vbmU7XFxufVxcblxcbmlucHV0W3R5cGU9XFxcInRleHRcXFwiXSxcXG50ZXh0YXJlYSB7XFxuICB3aWR0aDogODAlO1xcbn1cXG5cXG5pbnB1dDpub3QoaW5wdXRbdHlwZT1cXFwicmFkaW9cXFwiXSksXFxudGV4dGFyZWEge1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgYm9yZGVyLXJhZGl1czogMC4zcmVtO1xcbiAgYm94LXNoYWRvdzogMCAwLjNyZW0gMXJlbSAtMC4zcmVtICM0YTRhNGE7XFxuICBib3JkZXI6IG5vbmU7XFxufVxcblxcbiNjb25maXJtLWl0ZW0ge1xcbiAgd2lkdGg6IDgwJTtcXG4gIHBhZGRpbmc6IDAuNXJlbTtcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCNiN2I3YjcsICNmZmYpO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4vKiBcXG5cXG5QUk9KRUNUIE1PREFMXFxuXFxuKi9cXG5cXG4jcHJvamVjdC1tb2RhbCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDMwJTtcXG4gIGxlZnQ6IDUwJTtcXG4gIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudCgjM2QzZDNkLCAjMmEyZjk2KTtcXG4gIGJveC1zaGFkb3c6IDAuNXJlbSAwLjVyZW0gMXJlbSAtMC41cmVtICMwMDA7XFxuICBib3JkZXItcmFkaXVzOiAycmVtO1xcbiAgcGFkZGluZzogMXJlbTtcXG59XFxuXFxuI3Byb2plY3QtbW9kYWwgPiAqIHtcXG4gIG1hcmdpbjogMXJlbSAwO1xcbn1cXG5cXG4jcHJvamVjdC1tb2RhbCA+IGxhYmVsIHtcXG4gIGNvbG9yOiAjZmZmO1xcbn1cXG5cXG4jY29uZmlybS1wcm9qZWN0IHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgcGFkZGluZzogMC41cmVtIDJyZW07XFxuICBmb250LXNpemU6IDEuMnJlbTtcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg0NWRlZywgI2IwYjBiMCwgI2UyZTJlMik7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxuICBtYXJnaW46IDAgYXV0bztcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmNvbG9yIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMGM3MDM7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQge1xuICBUYXNrLFxuICBQcm9qZWN0LFxuICBjdXJyZW50UHJvamVjdHNMaXN0LFxuICBUZW1wb3JhcnlJZCxcbn0gZnJvbSBcIi4vaW50ZXJuYWxMb2dpY1wiO1xuaW1wb3J0IHtcbiAgbmV3VGFza01vZGFsUmVuZGVyLFxuICBuZXdQcm9qZWN0TW9kYWxSZW5kZXIsXG4gIGVkaXRQcm9qZWN0TW9kYWxSZW5kZXIsXG4gIGVkaXRUYXNrTW9kYWxSZW5kZXIsXG59IGZyb20gXCIuL21vZGFsUmVuZGVyXCI7XG5pbXBvcnQge1xuICBoaWRlU2lkZWJhcixcbiAgc2hvd1NpZGViYXIsXG4gIGRlbGV0ZUl0ZW0sXG4gIGNoYW5nZUNvbXBsZXRlT3B0aW9uLFxuICBkZWxldGVQcm9qZWN0LFxuICB3aGljaElzQWN0aXZlLFxufSBmcm9tIFwiLi9sb2FkRE9NY3JhcFwiO1xuaW1wb3J0IHsgY2hhbmdlQWN0aXZlUHJvamVjdCB9IGZyb20gXCIuL3JlbmRlclNpbmdsZUVsXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVJcnJlbGV2YW50RXZlbnRMaXN0ZW5lcnMoKSB7XG4gIGNvbnN0IG5ld1Rhc2tCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZC1pdGVtXCIpO1xuICBjb25zdCBuZXdQcm9qZWN0QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuZXctcHJvamVjdC1idG5cIik7XG4gIGNvbnN0IGhpZGVTaWRlYmFyQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJoaWRlLWljb25cIik7XG4gIGNvbnN0IHNob3dTaWRlYmFyQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtZW51LWljb25cIik7XG5cbiAgY29uc3QgcHJvamVjdFVMID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0cy11bFwiKTtcblxuICBjb25zdCB0YXNrID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcIml0ZW1cIik7XG4gIGNvbnN0IGVkaXRQcm9qZWN0QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlZGl0LXByb2plY3RcIik7XG4gIGNvbnN0IGVkaXRUYXNrQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImVkaXQtaXRlbVwiKTtcbiAgY29uc3QgZGVsZXRlVGFza0J0biA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJkZWxldGUtaXRlbVwiKTtcbiAgY29uc3QgY29tcGxldGVCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiY29tcGxldGUtYnRuXCIpO1xuICBjb25zdCBkZWxldGVQcm9qZWN0QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImRlbGV0ZS1wcm9qZWN0XCIpO1xuXG4gIG5ld1Byb2plY3RCdG4ucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIG5ld1Byb2plY3RNb2RhbFJlbmRlcik7XG4gIGhpZGVTaWRlYmFyQnRuLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBoaWRlU2lkZWJhcik7XG4gIHNob3dTaWRlYmFyQnRuLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBzaG93U2lkZWJhcik7XG5cbiAgaWYgKG5ld1Rhc2tCdG4pIHtcbiAgICBuZXdUYXNrQnRuLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBuZXdUYXNrTW9kYWxSZW5kZXIpO1xuICB9XG5cbiAgaWYgKGN1cnJlbnRQcm9qZWN0c0xpc3QuY29udGVudC5sZW5ndGggPiAwKSB7XG4gICAgd2hpY2hJc0FjdGl2ZShjdXJyZW50UHJvamVjdHNMaXN0KTtcbiAgICBpZiAoQXJyYXkuZnJvbSh0YXNrKS5sZW5ndGggPiAwKSB7XG4gICAgICBBcnJheS5mcm9tKGVkaXRUYXNrQnRuKS5mb3JFYWNoKChlKSA9PiB7XG4gICAgICAgIGUucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGVkaXRUYXNrTW9kYWxSZW5kZXIpO1xuICAgICAgfSk7XG4gICAgICBBcnJheS5mcm9tKGRlbGV0ZVRhc2tCdG4pLmZvckVhY2goKGUpID0+IHtcbiAgICAgICAgZS5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZGVsZXRlSXRlbSk7XG4gICAgICB9KTtcbiAgICAgIEFycmF5LmZyb20oY29tcGxldGVCdG4pLmZvckVhY2goKGUpID0+IHtcbiAgICAgICAgZS5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2hhbmdlQ29tcGxldGVPcHRpb24pO1xuICAgICAgfSk7XG4gICAgICBBcnJheS5mcm9tKGRlbGV0ZVByb2plY3RCdG4pLmZvckVhY2goKGUpID0+IHtcbiAgICAgICAgZS5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZGVsZXRlUHJvamVjdCk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBlZGl0UHJvamVjdEJ0bi5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZWRpdFByb2plY3RNb2RhbFJlbmRlcik7XG4gICAgQXJyYXkuZnJvbShwcm9qZWN0VUwuY2hpbGROb2RlcykuZm9yRWFjaCgoZSkgPT4ge1xuICAgICAgZS5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2hhbmdlQWN0aXZlUHJvamVjdCk7XG4gICAgfSk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlaW5zdGF0ZUV2ZW50TGlzdGVuZXJzKCkge1xuICBjb25zdCBuZXdUYXNrQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGQtaXRlbVwiKTtcbiAgY29uc3QgbmV3UHJvamVjdEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmV3LXByb2plY3QtYnRuXCIpO1xuICBjb25zdCBoaWRlU2lkZWJhckJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaGlkZS1pY29uXCIpO1xuICBjb25zdCBzaG93U2lkZWJhckJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWVudS1pY29uXCIpO1xuXG4gIGNvbnN0IHByb2plY3RVTCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdHMtdWxcIik7XG5cbiAgY29uc3QgdGFzayA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJpdGVtXCIpO1xuICBjb25zdCBlZGl0UHJvamVjdEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZWRpdC1wcm9qZWN0XCIpO1xuICBjb25zdCBlZGl0VGFza0J0biA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJlZGl0LWl0ZW1cIik7XG4gIGNvbnN0IGRlbGV0ZVRhc2tCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiZGVsZXRlLWl0ZW1cIik7XG4gIGNvbnN0IGNvbXBsZXRlQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImNvbXBsZXRlLWJ0blwiKTtcbiAgY29uc3QgZGVsZXRlUHJvamVjdEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJkZWxldGUtcHJvamVjdFwiKTtcblxuICBuZXdQcm9qZWN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBuZXdQcm9qZWN0TW9kYWxSZW5kZXIpO1xuICBoaWRlU2lkZWJhckJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgaGlkZVNpZGViYXIpO1xuICBzaG93U2lkZWJhckJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgc2hvd1NpZGViYXIpO1xuXG4gIGlmIChuZXdUYXNrQnRuKSB7XG4gICAgbmV3VGFza0J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgbmV3VGFza01vZGFsUmVuZGVyKTtcbiAgfVxuXG4gIGlmIChjdXJyZW50UHJvamVjdHNMaXN0LmNvbnRlbnQubGVuZ3RoID4gMCkge1xuICAgIHdoaWNoSXNBY3RpdmUoY3VycmVudFByb2plY3RzTGlzdCk7XG5cbiAgICBpZiAoQXJyYXkuZnJvbSh0YXNrKS5sZW5ndGggPiAwKSB7XG4gICAgICBBcnJheS5mcm9tKGVkaXRUYXNrQnRuKS5mb3JFYWNoKChlKSA9PiB7XG4gICAgICAgIGUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGVkaXRUYXNrTW9kYWxSZW5kZXIpO1xuICAgICAgfSk7XG4gICAgICBBcnJheS5mcm9tKGRlbGV0ZVRhc2tCdG4pLmZvckVhY2goKGUpID0+IHtcbiAgICAgICAgZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZGVsZXRlSXRlbSk7XG4gICAgICB9KTtcbiAgICAgIEFycmF5LmZyb20oY29tcGxldGVCdG4pLmZvckVhY2goKGUpID0+IHtcbiAgICAgICAgZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2hhbmdlQ29tcGxldGVPcHRpb24pO1xuICAgICAgfSk7XG4gICAgICBBcnJheS5mcm9tKGRlbGV0ZVByb2plY3RCdG4pLmZvckVhY2goKGUpID0+IHtcbiAgICAgICAgZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZGVsZXRlUHJvamVjdCk7XG4gICAgICB9KTtcbiAgICB9XG4gICAgLy9uZXdcblxuICAgIGVkaXRQcm9qZWN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBlZGl0UHJvamVjdE1vZGFsUmVuZGVyKTtcbiAgICBBcnJheS5mcm9tKHByb2plY3RVTC5jaGlsZE5vZGVzKS5mb3JFYWNoKChlKSA9PiB7XG4gICAgICBlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjaGFuZ2VBY3RpdmVQcm9qZWN0KTtcbiAgICB9KTtcbiAgfVxufVxuIiwiLyogXG5cbiAgLS1NRVRIT0RTLS1cblxuKi9cblxuY29uc3QgYWRkTmV3SXRlbSA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHRoaXMuY29udGVudC5wdXNoKGl0ZW0pO1xufTtcblxuY29uc3QgcmFuZG9tSWQgPSBmdW5jdGlvbiAodHlwZSkge1xuICBjb25zdCBudW0gPSBgJHtNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCl9JHtNYXRoLmZsb29yKFxuICAgIE1hdGgucmFuZG9tKCkgKiAxMFxuICApfSR7TWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApfWA7XG4gIHJldHVybiBgJHt0eXBlfSR7bnVtfWA7XG59O1xuXG5jb25zdCBjaGVja0R1cGxpY2F0ZUl0ZW0gPSBmdW5jdGlvbiAoaXRlbSkge1xuICBsZXQgaWQgPSByYW5kb21JZChpdGVtLnR5cGUpO1xuICBmb3IgKGNvbnN0IHByb2plY3Qgb2YgdGhpcy5jb250ZW50KSB7XG4gICAgZm9yIChjb25zdCBlbCBvZiBwcm9qZWN0LmNvbnRlbnQpIHtcbiAgICAgIGlmIChlbC5pZCAhPT0gXCJcIiAmJiBlbC5pZCA9PT0gaWQpIHtcbiAgICAgICAgdGhpcy5jaGVja0R1cGxpY2F0ZUl0ZW0oaXRlbSk7XG4gICAgICB9XG4gICAgfVxuICAgIGl0ZW0uYXNzaWduSWQoaWQpO1xuICAgIHJldHVybjtcbiAgfVxufTtcblxuY29uc3QgY2hlY2tEdXBsaWNhdGVQcm9qZWN0ID0gZnVuY3Rpb24gKGVsKSB7XG4gIGxldCBpZCA9IHJhbmRvbUlkKGVsLnR5cGUpO1xuICBmb3IgKGNvbnN0IHByb2plY3Qgb2YgdGhpcy5jb250ZW50KSB7XG4gICAgaWYgKHByb2plY3QuaWQgPT09IGlkICYmIHByb2plY3QuaWQpIHtcbiAgICAgIHRoaXMuY2hlY2tEdXBsaWNhdGVQcm9qZWN0KGVsKTtcbiAgICB9XG4gIH1cbiAgZWwuYXNzaWduSWQoaWQpO1xuICByZXR1cm47XG59O1xuXG5jb25zdCBhc3NpZ25JZCA9IGZ1bmN0aW9uIChpZCkge1xuICB0aGlzLmlkID0gaWQ7XG59O1xuXG5jb25zdCBzZXRBY3RpdmVQcm9qZWN0ID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgaXRlbS5hY3RpdmUgPSB0cnVlO1xufTtcblxuY29uc3Qgc2V0SW5hY3RpdmVQcm9qZWN0cyA9IGZ1bmN0aW9uICgpIHtcbiAgZm9yIChjb25zdCBlbCBvZiB0aGlzLmNvbnRlbnQpIHtcbiAgICBlbC5hY3RpdmUgPSBmYWxzZTtcbiAgfVxufTtcblxuY29uc3QgY2hlY2tBY3RpdmVQcm9qZWN0ID0gZnVuY3Rpb24gKCkge1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuY29udGVudC5sZW5ndGg7IGkrKykge1xuICAgIGlmICh0aGlzLmNvbnRlbnRbaV0uYWN0aXZlID09PSB0cnVlKSB7XG4gICAgICBjb25zdCBhY3RpdmUgPSB0aGlzLmNvbnRlbnRbaV07XG4gICAgICByZXR1cm4gYWN0aXZlO1xuICAgIH1cbiAgfVxufTtcblxuY29uc3QgZWRpdEl0ZW0gPSBmdW5jdGlvbiAodGl0bGUsIGRlc2NyaXB0aW9uLCBkYXRlLCBwcmlvcml0eSkge1xuICBpZiAoZGVzY3JpcHRpb24gJiYgZGF0ZSAmJiBwcmlvcml0eSkge1xuICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICB0aGlzLmRhdGUgPSBkYXRlO1xuICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgfVxuICB0aGlzLnRpdGxlID0gdGl0bGU7XG59O1xuXG5jb25zdCBnZXRJdGVtID0gZnVuY3Rpb24gKGlkKSB7XG4gIGNvbnN0IGxlbiA9IHRoaXMuY29udGVudC5sZW5ndGg7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcbiAgICBpZiAodGhpcy5jb250ZW50W2ldLmlkID09PSBpZCkge1xuICAgICAgcmV0dXJuIHRoaXMuY29udGVudFtpXTtcbiAgICB9XG4gIH1cbn07XG5cbmNvbnN0IGRlbGV0ZUxpc3RJdGVtID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgbGV0IHBvcztcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmNvbnRlbnQubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAodGhpcy5jb250ZW50W2ldID09PSBpdGVtKSB7XG4gICAgICBwb3MgPSBpO1xuICAgIH1cbiAgfVxuICBpZiAocG9zICE9PSB1bmRlZmluZWQpIHtcbiAgICB0aGlzLmNvbnRlbnQuc3BsaWNlKHBvcywgMSk7XG4gICAgaXRlbS5kZWxUZW1wKCk7XG4gIH1cbn07XG5cbmNvbnN0IGRlbFRlbXAgPSBmdW5jdGlvbiAoKSB7XG4gIGZvciAoY29uc3QgcHJvcCBpbiB0aGlzKSB7XG4gICAgdGhpc1twcm9wXSA9IG51bGw7XG4gIH1cbn07XG5cbmNvbnN0IHNldFRlbXBJZCA9IGZ1bmN0aW9uIChpZCkge1xuICB0aGlzLmlkID0gaWQ7XG59O1xuXG5jb25zdCBzZXRDb21wbGV0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgdGhpcy5jb21wbGV0ZSA9ICF0aGlzLmNvbXBsZXRlO1xufTtcblxuY29uc3QgZ2V0UHJvamVjdEJ5SXRlbUlkID0gZnVuY3Rpb24gKGlkKSB7XG4gIGZvciAoY29uc3QgcHJvamVjdCBvZiB0aGlzLmNvbnRlbnQpIHtcbiAgICBjb25zdCBJdGVtR290dGVuID0gcHJvamVjdC5nZXRJdGVtKGlkKTtcbiAgICBpZiAoSXRlbUdvdHRlbikge1xuICAgICAgcmV0dXJuIHByb2plY3Q7XG4gICAgfVxuICB9XG59O1xuXG5jb25zdCBnZXRJdGVtQnlQcmlvcml0eSA9IGZ1bmN0aW9uIChwcmlvcml0eSkge1xuICBjb25zdCBhcnIgPSBbXTtcbiAgZm9yIChjb25zdCBwcm9qZWN0IG9mIHRoaXMuY29udGVudCkge1xuICAgIGZvciAoY29uc3QgaXRlbSBvZiBwcm9qZWN0LmNvbnRlbnQpIHtcbiAgICAgIGlmIChpdGVtLnByaW9yaXR5ID09PSBwcmlvcml0eSkge1xuICAgICAgICBhcnIucHVzaChpdGVtKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIGFycjtcbn07XG5cbmNvbnN0IGdldEl0ZW1CeUR1ZURhdGUgPSBmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IGFyciA9IFtdO1xuICBjb25zdCB0b2RheSA9IG5ldyBEYXRlKCk7XG4gIGZvciAoY29uc3QgcHJvamVjdCBvZiB0aGlzLmNvbnRlbnQpIHtcbiAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgcHJvamVjdC5jb250ZW50KSB7XG4gICAgICBjb25zdCBkYXRlID0gbmV3IERhdGUoaXRlbS5kYXRlKTtcbiAgICAgIGNvbnN0IG9mZnNldCA9IGRhdGUuZ2V0VGltZXpvbmVPZmZzZXQoKSAqIDYwMDAwO1xuICAgICAgY29uc3QgZGF0ZU9mZiA9IE51bWJlcihkYXRlKSArIG9mZnNldDtcbiAgICAgIGNvbnN0IGRheXNSZW1haW5pbmcgPSAoZGF0ZU9mZiAtIHRvZGF5KSAvIDg2NDAwMDAwO1xuICAgICAgaWYgKGRheXNSZW1haW5pbmcgPiAwICYmIGRheXNSZW1haW5pbmcgPCA3KSB7XG4gICAgICAgIGFyci5wdXNoKGl0ZW0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gYXJyO1xufTtcbi8qIFxuXG4gIC0tVEFTSyBDT05TVFJVQ1RPUi0tXG5cbiovXG5cbmV4cG9ydCBmdW5jdGlvbiBUYXNrKHRpdGxlLCBkZXNjcmlwdGlvbiwgZGF0ZSwgcHJpb3JpdHkpIHtcbiAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gIHRoaXMuZGF0ZSA9IGRhdGU7XG4gIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgdGhpcy50eXBlID0gXCJUXCI7XG4gIHRoaXMuaWQgPSBcIlwiO1xuICB0aGlzLmNvbXBsZXRlID0gZmFsc2U7XG59XG5cblRhc2sucHJvdG90eXBlLmVkaXRJdGVtID0gZWRpdEl0ZW07XG5UYXNrLnByb3RvdHlwZS5kZWxUZW1wID0gZGVsVGVtcDtcblRhc2sucHJvdG90eXBlLnNldENvbXBsZXRlID0gc2V0Q29tcGxldGU7XG5UYXNrLnByb3RvdHlwZS5hc3NpZ25JZCA9IGFzc2lnbklkO1xuXG4vKiBcblxuICAtLVBST0pFQ1QgQ09OU1RSVUNUT1ItLVxuXG4qL1xuXG5leHBvcnQgZnVuY3Rpb24gUHJvamVjdCh0aXRsZSkge1xuICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gIHRoaXMudHlwZSA9IFwiUFwiO1xuICB0aGlzLmFjdGl2ZSA9IGZhbHNlO1xuICB0aGlzLmNvbnRlbnQgPSBbXTtcbiAgdGhpcy5pZCA9IFwiXCI7XG59XG5cblByb2plY3QucHJvdG90eXBlLmFkZE5ld0l0ZW0gPSBhZGROZXdJdGVtO1xuUHJvamVjdC5wcm90b3R5cGUucmFuZG9tSWQgPSByYW5kb21JZDtcblByb2plY3QucHJvdG90eXBlLmFzc2lnbklkID0gYXNzaWduSWQ7XG5Qcm9qZWN0LnByb3RvdHlwZS5lZGl0SXRlbSA9IGVkaXRJdGVtO1xuUHJvamVjdC5wcm90b3R5cGUuZ2V0SXRlbSA9IGdldEl0ZW07XG5Qcm9qZWN0LnByb3RvdHlwZS5kZWxldGVMaXN0SXRlbSA9IGRlbGV0ZUxpc3RJdGVtO1xuUHJvamVjdC5wcm90b3R5cGUuZGVsVGVtcCA9IGRlbFRlbXA7XG5cbi8qIFxuXG4gIC0tUFJPSkVDVFMgQVJSQVkgQ09OU1RSVUNUT1ItLVxuXG4qL1xuXG5leHBvcnQgZnVuY3Rpb24gUHJvamVjdHNBcnIoKSB7XG4gIHRoaXMuY29udGVudCA9IFtdO1xufVxuUHJvamVjdHNBcnIucHJvdG90eXBlLmFkZE5ld0l0ZW0gPSBhZGROZXdJdGVtO1xuUHJvamVjdHNBcnIucHJvdG90eXBlLmNoZWNrRHVwbGljYXRlSXRlbSA9IGNoZWNrRHVwbGljYXRlSXRlbTtcblByb2plY3RzQXJyLnByb3RvdHlwZS5jaGVja0R1cGxpY2F0ZVByb2plY3QgPSBjaGVja0R1cGxpY2F0ZVByb2plY3Q7XG5Qcm9qZWN0c0Fyci5wcm90b3R5cGUuY2hlY2tBY3RpdmVQcm9qZWN0ID0gY2hlY2tBY3RpdmVQcm9qZWN0O1xuUHJvamVjdHNBcnIucHJvdG90eXBlLnNldEFjdGl2ZVByb2plY3QgPSBzZXRBY3RpdmVQcm9qZWN0O1xuUHJvamVjdHNBcnIucHJvdG90eXBlLnNldEluYWN0aXZlUHJvamVjdHMgPSBzZXRJbmFjdGl2ZVByb2plY3RzO1xuUHJvamVjdHNBcnIucHJvdG90eXBlLmdldEl0ZW0gPSBnZXRJdGVtO1xuUHJvamVjdHNBcnIucHJvdG90eXBlLmdldFByb2plY3RCeUl0ZW1JZCA9IGdldFByb2plY3RCeUl0ZW1JZDtcblByb2plY3RzQXJyLnByb3RvdHlwZS5nZXRJdGVtQnlQcmlvcml0eSA9IGdldEl0ZW1CeVByaW9yaXR5O1xuUHJvamVjdHNBcnIucHJvdG90eXBlLmdldEl0ZW1CeUR1ZURhdGUgPSBnZXRJdGVtQnlEdWVEYXRlO1xuUHJvamVjdHNBcnIucHJvdG90eXBlLmRlbGV0ZUxpc3RJdGVtID0gZGVsZXRlTGlzdEl0ZW07XG5cbi8qIFxuXG4gIC0tVEVNUE9SQVJZIE9CSiBUTyBTVE9SRSBJRC0tXG5cbiovXG5cbmV4cG9ydCBmdW5jdGlvbiBUZW1wb3JhcnlJZChpZCkge1xuICB0aGlzLmlkID0gaWQ7XG59XG5UZW1wb3JhcnlJZC5wcm90b3R5cGUuZGVsVGVtcCA9IGRlbFRlbXA7XG5UZW1wb3JhcnlJZC5wcm90b3R5cGUuc2V0VGVtcElkID0gc2V0VGVtcElkO1xuXG5leHBvcnQgY29uc3QgY3VycmVudFByb2plY3RzTGlzdCA9IG5ldyBQcm9qZWN0c0FycigpO1xuXG4vKiBcblxuICAtLVRFU1RTLS1cblxuKi9cblxuLyogY29uc3Qgd29yayA9IG5ldyBQcm9qZWN0KFwiV29ya1wiKTtcbmNvbnN0IG1pc2MgPSBuZXcgUHJvamVjdChcIk1pc2NlbGxhbmVvdXNcIik7XG5jb25zdCB3b3JrMSA9IG5ldyBUYXNrKFxuICBcInRpdG9sb1wiLFxuICBcImRlc2NyaXppb25lIGRpIHN0YSBjaXBwYSBzdGEgY2VwcGEgZSBzdGEgY2lhcHBhXCIsXG4gIFwiMjAyNC0wMi0yMFwiLFxuICBcImhcIlxuKTtcbmNvbnN0IHdvcmsyID0gbmV3IFRhc2soXG4gIFwidGl0b2xvMlwiLFxuICBcImRlc2NyaXppb25lIGRpIHN0YSBjaXBwYSBzdGEgY2VwcGEgZSBzdGEgY2hpYXBwYVwiLFxuICBcIjIwMjQtMDItMjRcIixcbiAgXCJtXCJcbik7XG5cbmNvbnN0IG1pc2MxID0gbmV3IFRhc2soXCJtaXNjMVwiLCBcImRlc2MxXCIsIFwiMjAyNC0wMy0wMlwiLCBcImxcIik7XG5jb25zdCBtaXNjMiA9IG5ldyBUYXNrKFwibWlzYzJcIiwgXCJkZXNjMlwiLCBcIjIwMjQtMDItMjBcIiwgXCJoXCIpO1xuY29uc3QgbWlzYzMgPSBuZXcgVGFzayhcIm1pc2MzXCIsIFwiZGVzYzNcIiwgXCIyMDI0LTAyLTEyXCIsIFwibVwiKTtcblxuY3VycmVudFByb2plY3RzTGlzdC5hZGROZXdJdGVtKHdvcmspO1xuY3VycmVudFByb2plY3RzTGlzdC5hZGROZXdJdGVtKG1pc2MpO1xuXG53b3JrLmFkZE5ld0l0ZW0od29yazEpO1xud29yay5hZGROZXdJdGVtKHdvcmsyKTtcblxubWlzYy5hZGROZXdJdGVtKG1pc2MxKTtcbm1pc2MuYWRkTmV3SXRlbShtaXNjMik7XG5taXNjLmFkZE5ld0l0ZW0obWlzYzMpOyAqL1xuIiwiaW1wb3J0IFwiLi4vc3R5bGUuY3NzXCI7XG5cbmltcG9ydCBhZGRTVkcgZnJvbSBcIi4uL2ltYWdlcy9hZGQuc3ZnXCI7XG5pbXBvcnQgY29tcGxldGVTVkcgZnJvbSBcIi4uL2ltYWdlcy9jb21wbGV0ZS5zdmdcIjtcbmltcG9ydCBpbmNvbXBsZXRlU1ZHIGZyb20gXCIuLi9pbWFnZXMvaW5jb21wbGV0ZS5zdmdcIjtcbmltcG9ydCBzaGVldFN0YWNrU1ZHIGZyb20gXCIuLi9pbWFnZXMvc3RhY2stb2Ytc2hlZXRzLnN2Z1wiO1xuXG5pbXBvcnQge1xuICBUYXNrLFxuICBQcm9qZWN0LFxuICBjdXJyZW50UHJvamVjdHNMaXN0LFxuICBUZW1wb3JhcnlJZCxcbn0gZnJvbSBcIi4vaW50ZXJuYWxMb2dpY1wiO1xuaW1wb3J0IHtcbiAgcmVuZGVyU2lkZWJhcixcbiAgcmVuZGVyU2luZ2xlUHJvamVjdCxcbiAgcmVuZGVyU2luZ2xlVGFzayxcbiAgcmVuZGVyVG9wQ29udGVudCxcbn0gZnJvbSBcIi4vcmVuZGVyU2luZ2xlRWxcIjtcbmltcG9ydCB7XG4gIHByb2plY3RNb2RhbENyZWF0ZUVsZW1lbnQsXG4gIG5ld1Rhc2tNb2RhbFJlbmRlcixcbiAgZWRpdFRhc2tNb2RhbFJlbmRlcixcbiAgbmV3UHJvamVjdE1vZGFsUmVuZGVyLFxuICBlZGl0UHJvamVjdE1vZGFsUmVuZGVyLFxufSBmcm9tIFwiLi9tb2RhbFJlbmRlclwiO1xuXG5jb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRhaW5lclwiKTtcbmNvbnN0IGhlYWQgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImhlYWRcIik7XG5jb25zdCBmYXZpY29uSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaW5rXCIpO1xuY29uc3QgZmF2aWNvbk1hc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlua1wiKTtcblxuZmF2aWNvbkljb24ucmVsID0gXCJpY29uXCI7XG5mYXZpY29uSWNvbi5ocmVmID0gc2hlZXRTdGFja1NWRztcblxuZmF2aWNvbk1hc2sucmVsID0gXCJtYXNrLWljb25cIjtcbmZhdmljb25NYXNrLmhyZWYgPSBzaGVldFN0YWNrU1ZHO1xuZmF2aWNvbk1hc2suY29sb3IgPSBcIiMzNDQzYWVcIjtcblxuaGVhZC5hcHBlbmRDaGlsZChmYXZpY29uSWNvbik7XG5oZWFkLmFwcGVuZENoaWxkKGZhdmljb25NYXNrKTtcbi8qIFxuPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIuLi9zcmMvaW1hZ2VzL3N0YWNrLW9mLXNoZWV0cy5zdmdcIiAvPlxuPGxpbmtcbiAgcmVsPVwi4oCdbWFzay1pY29u4oCdXCJcbiAgaHJlZj1cIi4uL3NyYy9pbWFnZXMvc3RhY2stb2Ytc2hlZXRzLnN2Z1wiXG4gIGNvbG9yPVwiIzM0NDNhZVwiXG4vPlxuKi9cblxuZXhwb3J0IGNvbnN0IGl0ZW1FZGl0ZWQgPSBuZXcgVGVtcG9yYXJ5SWQoXCJcIik7XG5cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJDb250YWluZXIoKSB7XG4gIGNvbnN0IHNpZGViYXJSZW5kZXJlZCA9IHJlbmRlclNpZGViYXIoKTtcbiAgY29uc3QgYWN0aXZlUHJvamVjdCA9IHdoaWNoSXNBY3RpdmUoY3VycmVudFByb2plY3RzTGlzdCkgfHwgbmV3IFByb2plY3QoXCJcIik7XG4gIGNvbnN0IG1haW4gPSByZW5kZXJNYWluKGFjdGl2ZVByb2plY3QuY29udGVudCwgYWN0aXZlUHJvamVjdC50aXRsZSk7XG5cbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKHNpZGViYXJSZW5kZXJlZCk7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChtYWluKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlck1haW4oZ3JvdXAsIHRpdGxlKSB7XG4gIGNvbnN0IG5ld01haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCB0b3BDb250ZW50ID0gcmVuZGVyVG9wQ29udGVudCh0aXRsZSk7XG4gIGNvbnN0IGFkZEl0ZW1JbWcgPSBuZXcgSW1hZ2UoKTtcblxuICBuZXdNYWluLmlkID0gXCJtYWluXCI7XG5cbiAgcmVuZGVyVGFza3MoZ3JvdXAsIG5ld01haW4pOyAvL2FjdGl2ZVByb2plY3RcblxuICBhZGRJdGVtSW1nLmlkID0gXCJhZGQtaXRlbVwiO1xuICBhZGRJdGVtSW1nLnNyYyA9IGFkZFNWRztcbiAgYWRkSXRlbUltZy5zdHlsZS5tYXJnaW5MZWZ0ID0gYCR7LShhZGRJdGVtSW1nLm9mZnNldFdpZHRoIC8gMil9cHhgO1xuXG4gIG5ld01haW4uYXBwZW5kQ2hpbGQoYWRkSXRlbUltZyk7XG4gIG5ld01haW4uYXBwZW5kQ2hpbGQodG9wQ29udGVudCk7XG5cbiAgYWRkSXRlbUltZy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgbmV3VGFza01vZGFsUmVuZGVyKTtcblxuICByZXR1cm4gbmV3TWFpbjtcbn1cblxuZnVuY3Rpb24gcmVuZGVyVGFza3MoYXJyLCBET01lbCkge1xuICBpZiAoYXJyLmxlbmd0aCA+IDApIHtcbiAgICBmb3IgKGNvbnN0IHRhc2sgb2YgYXJyKSB7XG4gICAgICBET01lbC5hcHBlbmRDaGlsZChyZW5kZXJTaW5nbGVUYXNrKHRhc2spKTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHdoaWNoSXNBY3RpdmUocHJvamVjdHMpIHtcbiAgaWYgKGN1cnJlbnRQcm9qZWN0c0xpc3QuY29udGVudC5sZW5ndGggPiAwKSB7XG4gICAgbGV0IGlzQWN0aXZlID0gcHJvamVjdHMuY2hlY2tBY3RpdmVQcm9qZWN0KCk7XG4gICAgaWYgKGlzQWN0aXZlKSB7XG4gICAgICByZXR1cm4gaXNBY3RpdmU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHByb2plY3RzLnNldEFjdGl2ZVByb2plY3QocHJvamVjdHMuY29udGVudFswXSk7XG4gICAgICBpc0FjdGl2ZSA9IHByb2plY3RzLmNoZWNrQWN0aXZlUHJvamVjdCgpO1xuICAgICAgcmV0dXJuIGlzQWN0aXZlO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gaGlkZVNpZGViYXIoKSB7XG4gIGNvbnN0IHNpZGViYXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3RzXCIpO1xuICBjb25zdCBtYWluID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluXCIpO1xuICBtYWluLndpZHRoID0gXCIxMDAlXCI7XG5cbiAgc2lkZWJhci5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHNob3dTaWRlYmFyKCkge1xuICBjb25zdCBzaWRlYmFyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0c1wiKTtcblxuICBzaWRlYmFyLmNsYXNzTGlzdC5hZGQoXCJ2aXNpYmxlXCIpO1xuICBzaWRlYmFyLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIik7XG4gIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgIHNpZGViYXIuY2xhc3NMaXN0LnJlbW92ZShcInZpc2libGVcIik7XG4gIH0sIDUwMCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXRQcmlvcml0eShET01lbCwgaXRlbSkge1xuICBpZiAoaXRlbS5wcmlvcml0eSA9PT0gXCJoXCIpIHtcbiAgICBET01lbC5zdHlsZS5iYWNrZ3JvdW5kID0gXCIjZmYzNDM0XCI7XG4gICAgRE9NZWwudGV4dENvbnRlbnQgPSBcIkhpZ2ggcHJpb3JpdHlcIjtcbiAgfSBlbHNlIGlmIChpdGVtLnByaW9yaXR5ID09PSBcIm1cIikge1xuICAgIERPTWVsLnN0eWxlLmJhY2tncm91bmQgPSBcIiNmZmUwMzNcIjtcbiAgICBET01lbC50ZXh0Q29udGVudCA9IFwiTWVkaXVtIHByaW9yaXR5XCI7XG4gIH0gZWxzZSB7XG4gICAgRE9NZWwuc3R5bGUuYmFja2dyb3VuZCA9IFwiIzZhZmYyYVwiO1xuICAgIERPTWVsLnRleHRDb250ZW50ID0gXCJMb3cgcHJpb3JpdHlcIjtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVsZXRlSXRlbShlKSB7XG4gIGNvbnN0IGFjdGl2ZVByb2plY3QgPSBjdXJyZW50UHJvamVjdHNMaXN0LmdldFByb2plY3RCeUl0ZW1JZChcbiAgICBlLnRhcmdldC5wYXJlbnROb2RlLmlkXG4gICk7XG4gIGNvbnN0IHRhc2sgPSBhY3RpdmVQcm9qZWN0LmdldEl0ZW0oZS50YXJnZXQucGFyZW50Tm9kZS5pZCk7XG4gIGUudGFyZ2V0LnBhcmVudE5vZGUucmVtb3ZlKCk7XG4gIGFjdGl2ZVByb2plY3QuZGVsZXRlTGlzdEl0ZW0odGFzayk7XG59XG4vKiBcblxudGhlcmUgaXMgcHJvYmFibHkgYSBiZXR0ZXIgd2F5IHRvIHdyaXRlIHRoaXMgZnVuY3Rpb25cblxuKi9cbmV4cG9ydCBmdW5jdGlvbiBkZWxldGVQcm9qZWN0KGUpIHtcbiAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgY29uc3QgcHJvamVjdCA9IGN1cnJlbnRQcm9qZWN0c0xpc3QuZ2V0SXRlbShlLnRhcmdldC5wYXJlbnROb2RlLmlkKTtcblxuICBjdXJyZW50UHJvamVjdHNMaXN0LmRlbGV0ZUxpc3RJdGVtKHByb2plY3QpO1xuXG4gIGlmIChjdXJyZW50UHJvamVjdHNMaXN0LmNvbnRlbnQubGVuZ3RoID09PSAwKSB7XG4gICAgY29uc3QgdGhpc1dlZWsgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5leHQtd2Vla1wiKTtcbiAgICBlLnRhcmdldC5wYXJlbnROb2RlLnJlbW92ZSgpO1xuICAgIHRoaXNXZWVrLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG4gICAgc2hvd0dyb3VwKHRoaXNXZWVrKTtcbiAgfSBlbHNlIHtcbiAgICAvL2NvbnN0IGFjdGl2ZVByb2plY3QgPSB3aGljaElzQWN0aXZlKGN1cnJlbnRQcm9qZWN0c0xpc3QpO1xuICAgIGNvbnN0IGxhdGVNYWluID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluXCIpO1xuICAgIGNvbnN0IGxhdGVTaWRlYmFyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0c1wiKTtcblxuICAgIGxhdGVNYWluLnJlbW92ZSgpO1xuICAgIGxhdGVTaWRlYmFyLnJlbW92ZSgpO1xuICAgIHJlbmRlckNvbnRhaW5lcigpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXRDb21wbGV0ZU9wdGlvbih0YXNrLCBET01lbCkge1xuICBpZiAodGFzay5jb21wbGV0ZSkge1xuICAgIERPTWVsLnNyYyA9IGNvbXBsZXRlU1ZHO1xuICB9IGVsc2Uge1xuICAgIERPTWVsLnNyYyA9IGluY29tcGxldGVTVkc7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNoYW5nZUNvbXBsZXRlT3B0aW9uKGUpIHtcbiAgY29uc3QgaWQgPSBlLnRhcmdldC5wYXJlbnROb2RlLnBhcmVudE5vZGUuaWQ7XG4gIGNvbnN0IHByb2plY3QgPSBjdXJyZW50UHJvamVjdHNMaXN0LmdldFByb2plY3RCeUl0ZW1JZChpZCk7XG4gIGNvbnN0IHRhc2sgPSBwcm9qZWN0LmdldEl0ZW0oaWQpO1xuXG4gIHRhc2suc2V0Q29tcGxldGUoKTtcblxuICBlLnRhcmdldC5jbGFzc0xpc3QgKz0gXCIgZmFkZS1vdXRcIjtcbiAgZS50YXJnZXQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNoYW5nZUNvbXBsZXRlT3B0aW9uKTtcblxuICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICBzZXRDb21wbGV0ZU9wdGlvbih0YXNrLCBlLnRhcmdldCk7XG4gICAgZS50YXJnZXQuY2xhc3NOYW1lID0gXCJjb21wbGV0ZS1idG4gZmFkZS1pblwiO1xuXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBlLnRhcmdldC5jbGFzc05hbWUgPSBcImNvbXBsZXRlLWJ0blwiO1xuICAgICAgZS50YXJnZXQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNoYW5nZUNvbXBsZXRlT3B0aW9uKTtcbiAgICB9LCA1MDApO1xuICB9LCA1MDApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVhY3RpdmF0ZUFsbFByb2plY3RzKGUpIHtcbiAgY29uc3QgcHJvamVjdFVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0cy11bFwiKTtcbiAgY3VycmVudFByb2plY3RzTGlzdC5zZXRJbmFjdGl2ZVByb2plY3RzKCk7XG4gIEFycmF5LmZyb20ocHJvamVjdFVsLmNoaWxkTm9kZXMpLmZvckVhY2goKGVsKSA9PiB7XG4gICAgZWwuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgfSk7XG4gIGlmICghZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiYWN0aXZlXCIpKSB7XG4gICAgQXJyYXkuZnJvbShlLnRhcmdldC5wYXJlbnROb2RlLmNoaWxkcmVuKS5mb3JFYWNoKChlbCkgPT4ge1xuICAgICAgaWYgKGVsICE9PSBlLnRhcmdldCkge1xuICAgICAgICBlbC5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZS50YXJnZXQuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gc2hvd0dyb3VwKGUpIHtcbiAgY29uc3QgbGF0ZU1haW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1haW5cIik7XG4gIGxldCBuZXdNYWluO1xuICBpZiAoZS50YXJnZXQpIHtcbiAgICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwicHJpb3JpdHktZ3JvdXBcIikpIHtcbiAgICAgIGNvbnN0IHAgPSBlLnRhcmdldC5pZFsxXTtcbiAgICAgIG5ld01haW4gPSByZW5kZXJNYWluKFxuICAgICAgICBjdXJyZW50UHJvamVjdHNMaXN0LmdldEl0ZW1CeVByaW9yaXR5KHApLFxuICAgICAgICBlLnRhcmdldC50ZXh0Q29udGVudFxuICAgICAgKTtcbiAgICB9IGVsc2UgaWYgKGUudGFyZ2V0LmlkID09PSBcIm5leHQtd2Vla1wiKSB7XG4gICAgICBuZXdNYWluID0gcmVuZGVyTWFpbihcbiAgICAgICAgY3VycmVudFByb2plY3RzTGlzdC5nZXRJdGVtQnlEdWVEYXRlKCksXG4gICAgICAgIGUudGFyZ2V0LnRleHRDb250ZW50XG4gICAgICApO1xuICAgIH1cbiAgfSBlbHNlIGlmIChlLmNsYXNzTGlzdC5jb250YWlucyhcInByaW9yaXR5LWdyb3VwXCIpKSB7XG4gICAgY29uc3QgcCA9IGUuaWRbMV07XG4gICAgbmV3TWFpbiA9IHJlbmRlck1haW4oXG4gICAgICBjdXJyZW50UHJvamVjdHNMaXN0LmdldEl0ZW1CeVByaW9yaXR5KHApLFxuICAgICAgZS50ZXh0Q29udGVudFxuICAgICk7XG4gIH0gZWxzZSBpZiAoZS5pZCA9PT0gXCJuZXh0LXdlZWtcIikge1xuICAgIG5ld01haW4gPSByZW5kZXJNYWluKGN1cnJlbnRQcm9qZWN0c0xpc3QuZ2V0SXRlbUJ5RHVlRGF0ZSgpLCBlLnRleHRDb250ZW50KTtcbiAgfVxuXG4gIGxhdGVNYWluLnJlbW92ZSgpO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQobmV3TWFpbik7XG4gIGNvbnN0IGVkaXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVkaXQtcHJvamVjdFwiKTtcbiAgY29uc3QgYWRkVGFzayA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkLWl0ZW1cIik7XG4gIGFkZFRhc2sucmVtb3ZlKCk7XG4gIGVkaXQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGVkaXRQcm9qZWN0TW9kYWxSZW5kZXIpO1xufVxuIiwiaW1wb3J0IHsgd2hpY2hJc0FjdGl2ZSwgaXRlbUVkaXRlZCwgc2hvd0dyb3VwIH0gZnJvbSBcIi4vbG9hZERPTWNyYXBcIjtcbmltcG9ydCB7IHJlbmRlclNpbmdsZVByb2plY3QsIHJlbmRlclRvcENvbnRlbnQgfSBmcm9tIFwiLi9yZW5kZXJTaW5nbGVFbFwiO1xuaW1wb3J0IHtcbiAgVGFzayxcbiAgUHJvamVjdCxcbiAgY3VycmVudFByb2plY3RzTGlzdCxcbiAgVGVtcG9yYXJ5SWQsXG59IGZyb20gXCIuL2ludGVybmFsTG9naWNcIjtcbmltcG9ydCB7IHJlbmRlclNpbmdsZVRhc2sgfSBmcm9tIFwiLi9yZW5kZXJTaW5nbGVFbFwiO1xuXG5leHBvcnQgZnVuY3Rpb24gY29uZmlybU5ld1Rhc2soKSB7XG4gIGNvbnN0IG1haW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1haW5cIik7XG4gIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIml0ZW0tbW9kYWxcIik7XG4gIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0aXRsZS1pbnB1dFwiKS52YWx1ZTtcbiAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRlc2NyaXB0aW9uLWlucHV0XCIpLnZhbHVlO1xuICBjb25zdCBkYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkYXRlLWlucHV0XCIpLnZhbHVlO1xuICBjb25zdCBwcmlvcml0aWVzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeU5hbWUoXCJwcmlvcml0eVwiKTtcblxuICBsZXQgcHJpb3JpdHk7XG4gIEFycmF5LmZyb20ocHJpb3JpdGllcykuZm9yRWFjaCgoZSkgPT4ge1xuICAgIGlmIChlLmNoZWNrZWQpIHtcbiAgICAgIHByaW9yaXR5ID0gZS5pZFswXTtcbiAgICB9XG4gIH0pO1xuXG4gIGNvbnN0IGFjdGl2ZVByb2plY3QgPSB3aGljaElzQWN0aXZlKGN1cnJlbnRQcm9qZWN0c0xpc3QpO1xuICBjb25zdCBuZXdUYXNrID0gbmV3IFRhc2sodGl0bGUsIGRlc2NyaXB0aW9uLCBkYXRlLCBwcmlvcml0eSk7XG5cbiAgYWN0aXZlUHJvamVjdC5hZGROZXdJdGVtKG5ld1Rhc2spO1xuICBjb25zdCB0YXNrRE9NID0gcmVuZGVyU2luZ2xlVGFzayhuZXdUYXNrKTtcbiAgbWFpbi5hcHBlbmRDaGlsZCh0YXNrRE9NKTtcbiAgZm9ybS5yZW1vdmUoKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbmZpcm1FZGl0VGFzaygpIHtcbiAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFpblwiKTtcbiAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaXRlbS1tb2RhbFwiKTtcbiAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRpdGxlLWlucHV0XCIpLnZhbHVlO1xuICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGVzY3JpcHRpb24taW5wdXRcIikudmFsdWU7XG4gIGNvbnN0IGRhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRhdGUtaW5wdXRcIikudmFsdWU7XG4gIGNvbnN0IHByaW9yaXRpZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5TmFtZShcInByaW9yaXR5XCIpO1xuICBjb25zdCBhY3RpdmVQcm9qZWN0ID0gY3VycmVudFByb2plY3RzTGlzdC5nZXRQcm9qZWN0QnlJdGVtSWQoaXRlbUVkaXRlZC5pZCk7IC8vd2hpY2hJc0FjdGl2ZShjdXJyZW50UHJvamVjdHNMaXN0KTtcbiAgY29uc3QgZHluYW1pY0dyb3VwVWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImR5bmFtaWMtdWxcIik7XG4gIGNvbnN0IHRhc2sgPSBhY3RpdmVQcm9qZWN0LmdldEl0ZW0oaXRlbUVkaXRlZC5pZCk7XG4gIGNvbnN0IERPTUl0ZW0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpdGVtRWRpdGVkLmlkKTtcbiAgbGV0IHByaW9yaXR5O1xuXG4gIEFycmF5LmZyb20ocHJpb3JpdGllcykuZm9yRWFjaCgoZSkgPT4ge1xuICAgIGlmIChlLmNoZWNrZWQpIHtcbiAgICAgIHByaW9yaXR5ID0gZS5pZFswXTtcbiAgICB9XG4gIH0pO1xuXG4gIHRhc2suZWRpdEl0ZW0odGl0bGUsIGRlc2NyaXB0aW9uLCBkYXRlLCBwcmlvcml0eSk7XG5cbiAgbGV0IHBvcztcbiAgQXJyYXkuZnJvbShtYWluLmNoaWxkTm9kZXMpLmZvckVhY2goKGUpID0+IHtcbiAgICBpZiAoZS5pZCA9PT0gRE9NSXRlbS5pZCkge1xuICAgICAgcG9zID0gQXJyYXkuZnJvbShtYWluLmNoaWxkTm9kZXMpLmluZGV4T2YoRE9NSXRlbSk7XG4gICAgfVxuICB9KTtcblxuICBpZiAoY3VycmVudFByb2plY3RzTGlzdC5jaGVja0FjdGl2ZVByb2plY3QoKSkge1xuICAgIERPTUl0ZW0ucmVtb3ZlKCk7XG4gICAgbWFpbi5pbnNlcnRCZWZvcmUocmVuZGVyU2luZ2xlVGFzayh0YXNrKSwgbWFpbi5jaGlsZHJlbltwb3NdKTtcbiAgfSBlbHNlIHtcbiAgICBBcnJheS5mcm9tKGR5bmFtaWNHcm91cFVsLmNoaWxkcmVuKS5mb3JFYWNoKChlKSA9PiB7XG4gICAgICBpZiAoZS5jbGFzc0xpc3QuY29udGFpbnMoXCJhY3RpdmVcIikpIHtcbiAgICAgICAgc2hvd0dyb3VwKGUpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgZm9ybS5yZW1vdmUoKTtcbiAgaXRlbUVkaXRlZC5zZXRUZW1wSWQoXCJcIik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb25maXJtTmV3UHJvamVjdCgpIHtcbiAgY29uc3QgcHJvamVjdFVMID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0cy11bFwiKTtcbiAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdC1tb2RhbFwiKTtcbiAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3QtbmFtZVwiKS52YWx1ZTtcbiAgY29uc3QgbmV3UHJvamVjdCA9IG5ldyBQcm9qZWN0KHRpdGxlKTtcblxuICBjdXJyZW50UHJvamVjdHNMaXN0LmFkZE5ld0l0ZW0obmV3UHJvamVjdCk7XG5cbiAgY29uc3QgbGkgPSByZW5kZXJTaW5nbGVQcm9qZWN0KG5ld1Byb2plY3QpO1xuICBwcm9qZWN0VUwuYXBwZW5kQ2hpbGQobGkpO1xuXG4gIGZvcm0ucmVtb3ZlKCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb25maXJtRWRpdFByb2plY3QoKSB7XG4gIGNvbnN0IGxhdGVUb3BDb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhY3RpdmUtcHJvamVjdFwiKTtcbiAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFpblwiKTtcbiAgY29uc3QgcHJvamVjdFVMID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0cy11bFwiKTtcbiAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdC1tb2RhbFwiKTtcbiAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3QtbmFtZVwiKS52YWx1ZTtcbiAgY29uc3QgcHJvamVjdCA9IGN1cnJlbnRQcm9qZWN0c0xpc3QuZ2V0SXRlbShpdGVtRWRpdGVkLmlkKTtcblxuICBwcm9qZWN0LmVkaXRJdGVtKHRpdGxlKTtcblxuICBBcnJheS5mcm9tKHByb2plY3RVTC5jaGlsZHJlbikuZm9yRWFjaCgoZSkgPT4ge1xuICAgIGlmIChlLmlkID09PSBwcm9qZWN0LmlkKSB7XG4gICAgICBlLnRleHRDb250ZW50ID0gcHJvamVjdC50aXRsZTtcbiAgICB9XG4gIH0pO1xuXG4gIGZvcm0ucmVtb3ZlKCk7XG4gIGxhdGVUb3BDb250ZW50LnJlbW92ZSgpO1xuICBtYWluLmFwcGVuZENoaWxkKHJlbmRlclRvcENvbnRlbnQod2hpY2hJc0FjdGl2ZShjdXJyZW50UHJvamVjdHNMaXN0KS50aXRsZSkpO1xufVxuIiwiaW1wb3J0IHsgaXRlbUVkaXRlZCwgd2hpY2hJc0FjdGl2ZSB9IGZyb20gXCIuL2xvYWRET01jcmFwXCI7XG5pbXBvcnQgeyByZW1vdmVJcnJlbGV2YW50RXZlbnRMaXN0ZW5lcnMgfSBmcm9tIFwiLi9ldmVudExpc3RlbmVyc01hbmFnZXJcIjtcbmltcG9ydCB7IHZhbGlkYXRlTmV3TW9kYWwsIHZhbGlkYXRlRWRpdE1vZGFsIH0gZnJvbSBcIi4vbW9kYWxWYWxpZGF0aW9uXCI7XG5pbXBvcnQge1xuICBUYXNrLFxuICBQcm9qZWN0LFxuICBjdXJyZW50UHJvamVjdHNMaXN0LFxuICBUZW1wb3JhcnlJZCxcbn0gZnJvbSBcIi4vaW50ZXJuYWxMb2dpY1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gbmV3VGFza01vZGFsUmVuZGVyKCkge1xuICBjb25zdCBlbExpc3QgPSBuZXdUYXNrTW9kYWxDcmVhdGVFbGVtZW50cygpO1xuICBjb25zdCBmb3JtVG9SZW5kZXIgPSBuZXdUYXNrUmVuZGVyTG9vcHMoZWxMaXN0KTtcblxuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZm9ybVRvUmVuZGVyKTtcbiAgcmVtb3ZlSXJyZWxldmFudEV2ZW50TGlzdGVuZXJzKCk7XG5cbiAgZm9ybVRvUmVuZGVyLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgdmFsaWRhdGVOZXdNb2RhbCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBlZGl0VGFza01vZGFsUmVuZGVyKGUpIHtcbiAgY29uc3QgaWQgPSBlLnRhcmdldC5wYXJlbnROb2RlLmlkO1xuXG4gIGNvbnN0IGFjdGl2ZVByb2plY3QgPSBjdXJyZW50UHJvamVjdHNMaXN0LmdldFByb2plY3RCeUl0ZW1JZChcbiAgICBlLnRhcmdldC5wYXJlbnROb2RlLmlkXG4gICk7XG4gIGNvbnN0IHRhc2tUb0VkaXQgPSBhY3RpdmVQcm9qZWN0LmdldEl0ZW0oaWQpO1xuICBjb25zdCBlbExpc3QgPSBuZXdUYXNrTW9kYWxDcmVhdGVFbGVtZW50cygpO1xuICBjb25zdCBmb3JtVG9SZW5kZXIgPSBuZXdUYXNrUmVuZGVyTG9vcHMoZWxMaXN0KTtcblxuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZm9ybVRvUmVuZGVyKTtcblxuICBjb25zdCB0aXRsZUlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0aXRsZS1pbnB1dFwiKTtcbiAgY29uc3QgZGVzY3JpcHRpb25JbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGVzY3JpcHRpb24taW5wdXRcIik7XG4gIGNvbnN0IGRhdGVJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGF0ZS1pbnB1dFwiKTtcbiAgY29uc3QgaGlnaFBSYWRpbyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaGlnaC1wcmlvcml0eVwiKTtcbiAgY29uc3QgbWVkaXVtUFJhZGlvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtZWRpdW0tcHJpb3JpdHlcIik7XG4gIGNvbnN0IGxvd1BSYWRpbyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibG93LXByaW9yaXR5XCIpO1xuXG4gIHRpdGxlSW5wdXQudmFsdWUgPSB0YXNrVG9FZGl0LnRpdGxlO1xuICBkZXNjcmlwdGlvbklucHV0LnZhbHVlID0gdGFza1RvRWRpdC5kZXNjcmlwdGlvbjtcbiAgZGF0ZUlucHV0LnZhbHVlID0gdGFza1RvRWRpdC5kYXRlO1xuXG4gIHN3aXRjaCAodGFza1RvRWRpdC5wcmlvcml0eSkge1xuICAgIGNhc2UgXCJoXCI6XG4gICAgICBoaWdoUFJhZGlvLnNldEF0dHJpYnV0ZShcImNoZWNrZWRcIiwgXCJcIik7XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwibVwiOlxuICAgICAgbWVkaXVtUFJhZGlvLnNldEF0dHJpYnV0ZShcImNoZWNrZWRcIiwgXCJcIik7XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwibFwiOlxuICAgICAgbG93UFJhZGlvLnNldEF0dHJpYnV0ZShcImNoZWNrZWRcIiwgXCJcIik7XG4gICAgICBicmVhaztcbiAgfVxuXG4gIHJlbW92ZUlycmVsZXZhbnRFdmVudExpc3RlbmVycygpO1xuXG4gIGl0ZW1FZGl0ZWQuc2V0VGVtcElkKGlkKTtcblxuICBmb3JtVG9SZW5kZXIuYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCB2YWxpZGF0ZUVkaXRNb2RhbCk7XG59XG5cbi8vZG9pbmcgaXQgdGhlIGVhc3kgd2F5IHdpdGggZm9ybS5pbm5lckhUTUwgPSBgYWN0dWFsIEhUTUxgIHdhcyB3YXkgYmV0dGVyKH40MFxuLy9saW5lcyB2cyB+MTUwIGxpbmVzKSwgYnV0IHdoZW4gaSByZWFsaXplZCwgaSB3YXMgdG9vIGNvbW1pdHRlZCBhbHJlYWR5IGhlbmNlXG4vL3RoZSBhYm9taW5hdGlvbiBiZWxvdyB3YXMgY3JlYXRlZFxuZnVuY3Rpb24gbmV3VGFza01vZGFsQ3JlYXRlRWxlbWVudHMoKSB7XG4gIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKTtcbiAgY29uc3QgaDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gIGNvbnN0IGNvbnRhaW5pbmdEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG4gIGNvbnN0IHRpdGxlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gIGNvbnN0IHRpdGxlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG5cbiAgY29uc3QgZGVzY3JpcHRpb25MYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgY29uc3QgZGVzY3JpcHRpb25JbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZXh0YXJlYVwiKTtcblxuICBjb25zdCBkYXRlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gIGNvbnN0IGRhdGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcblxuICBjb25zdCBocFJhZGlvTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gIGNvbnN0IGhwUmFkaW9JbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgY29uc3QgbXBSYWRpb0xhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICBjb25zdCBtcFJhZGlvSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gIGNvbnN0IGxwUmFkaW9MYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgY29uc3QgbHBSYWRpb0lucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuXG4gIGNvbnN0IGNvbmZpcm1CdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuXG4gIC8vQVRUUklCVVRFU1xuICBmb3JtLmlkID0gXCJpdGVtLW1vZGFsXCI7XG4gIGgyLnRleHRDb250ZW50ID0gXCJQcmlvcml0eTpcIjtcblxuICB0aXRsZUxhYmVsLnRleHRDb250ZW50ID0gXCJUaXRsZTpcIjtcbiAgdGl0bGVMYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJ0aXRsZS1pbnB1dFwiKTtcbiAgdGl0bGVJbnB1dC5pZCA9IFwidGl0bGUtaW5wdXRcIjtcbiAgdGl0bGVJbnB1dC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwidGV4dFwiKTtcbiAgdGl0bGVJbnB1dC5zZXRBdHRyaWJ1dGUoXCJtYXhsZW5ndGhcIiwgXCIyNVwiKTtcbiAgdGl0bGVJbnB1dC5zZXRBdHRyaWJ1dGUoXCJyZXF1aXJlZFwiLCBcIlwiKTtcblxuICBkZXNjcmlwdGlvbkxhYmVsLnRleHRDb250ZW50ID0gXCJEZXNjcmlwdGlvbjpcIjtcbiAgZGVzY3JpcHRpb25MYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJkZXNjcmlwdGlvbi1pbnB1dFwiKTtcbiAgZGVzY3JpcHRpb25JbnB1dC5pZCA9IFwiZGVzY3JpcHRpb24taW5wdXRcIjtcbiAgZGVzY3JpcHRpb25JbnB1dC5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwiZGVzY3JpcHRpb24taW5wdXRcIik7XG4gIGRlc2NyaXB0aW9uSW5wdXQuc2V0QXR0cmlidXRlKFwiY29sc1wiLCBcIjMwXCIpO1xuICBkZXNjcmlwdGlvbklucHV0LnNldEF0dHJpYnV0ZShcInJvd3NcIiwgXCI0XCIpO1xuICBkZXNjcmlwdGlvbklucHV0LnNldEF0dHJpYnV0ZShcInJlcXVpcmVkXCIsIFwiXCIpO1xuXG4gIGRhdGVMYWJlbC50ZXh0Q29udGVudCA9IFwiRGF0ZTpcIjtcbiAgZGF0ZUxhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBcImRhdGUtaW5wdXRcIik7XG4gIGRhdGVJbnB1dC5pZCA9IFwiZGF0ZS1pbnB1dFwiO1xuICBkYXRlSW5wdXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImRhdGVcIik7XG4gIGRhdGVJbnB1dC5zZXRBdHRyaWJ1dGUoXCJyZXF1aXJlZFwiLCBcIlwiKTtcblxuICBocFJhZGlvTGFiZWwudGV4dENvbnRlbnQgPSBcIkhpZ2hcIjtcbiAgaHBSYWRpb0xhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBcImhpZ2gtcHJpb3JpdHlcIik7XG4gIGhwUmFkaW9JbnB1dC5pZCA9IFwiaGlnaC1wcmlvcml0eVwiO1xuICBocFJhZGlvSW5wdXQuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcInByaW9yaXR5XCIpO1xuICBocFJhZGlvSW5wdXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInJhZGlvXCIpO1xuICBocFJhZGlvSW5wdXQuc2V0QXR0cmlidXRlKFwiY2hlY2tlZFwiLCBcIlwiKTtcblxuICBtcFJhZGlvTGFiZWwudGV4dENvbnRlbnQgPSBcIk1lZGl1bVwiO1xuICBtcFJhZGlvTGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwibWVkaXVtLXByaW9yaXR5XCIpO1xuICBtcFJhZGlvSW5wdXQuaWQgPSBcIm1lZGl1bS1wcmlvcml0eVwiO1xuICBtcFJhZGlvSW5wdXQuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcInByaW9yaXR5XCIpO1xuICBtcFJhZGlvSW5wdXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInJhZGlvXCIpO1xuXG4gIGxwUmFkaW9MYWJlbC50ZXh0Q29udGVudCA9IFwiTG93XCI7XG4gIGxwUmFkaW9MYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJsb3ctcHJpb3JpdHlcIik7XG4gIGxwUmFkaW9JbnB1dC5pZCA9IFwibG93LXByaW9yaXR5XCI7XG4gIGxwUmFkaW9JbnB1dC5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwicHJpb3JpdHlcIik7XG4gIGxwUmFkaW9JbnB1dC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwicmFkaW9cIik7XG5cbiAgY29uZmlybUJ0bi50ZXh0Q29udGVudCA9IFwiQ09ORklSTVwiO1xuICBjb25maXJtQnRuLmlkID0gXCJjb25maXJtLWl0ZW1cIjtcbiAgY29uZmlybUJ0bi5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwic3VibWl0XCIpO1xuXG4gIHJldHVybiB7XG4gICAgZm9ybSxcbiAgICBoMixcbiAgICBjb250YWluaW5nRGl2LFxuICAgIHRpdGxlTGFiZWwsXG4gICAgdGl0bGVJbnB1dCxcbiAgICBkZXNjcmlwdGlvbkxhYmVsLFxuICAgIGRlc2NyaXB0aW9uSW5wdXQsXG4gICAgZGF0ZUxhYmVsLFxuICAgIGRhdGVJbnB1dCxcbiAgICBocFJhZGlvTGFiZWwsXG4gICAgaHBSYWRpb0lucHV0LFxuICAgIG1wUmFkaW9MYWJlbCxcbiAgICBtcFJhZGlvSW5wdXQsXG4gICAgbHBSYWRpb0xhYmVsLFxuICAgIGxwUmFkaW9JbnB1dCxcbiAgICBjb25maXJtQnRuLFxuICB9O1xufVxuXG4vL3RoZSBhYm9taW5hdGlvbiB0byBlbmQgYWxsIGFib21pbmF0aW9uczpcbi8vYSBsb29wIGNvbnRhaW5pbmcgYSBzd2l0Y2ggc3RhdGVtZW50IHdoaWNoIGFsc28gY29udGFpbnMgYW5vdGhlciBsb29wIHdoaWNoIGFsc29cbi8vY29udGFpbnMgYW5vdGhlciBzd2l0Y2ggc3RhdGVtZW50LlxuLy9hbG1vc3QgcHJvdWQgb2YgaXQgVEJILlxuZnVuY3Rpb24gbmV3VGFza1JlbmRlckxvb3BzKGxpc3QpIHtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCA2OyBpKyspIHtcbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHN3aXRjaCAoaSkge1xuICAgICAgY2FzZSAwOlxuICAgICAgICBkaXYuYXBwZW5kQ2hpbGQobGlzdC50aXRsZUxhYmVsKTtcbiAgICAgICAgZGl2LmFwcGVuZENoaWxkKGxpc3QudGl0bGVJbnB1dCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAxOlxuICAgICAgICBkaXYuYXBwZW5kQ2hpbGQobGlzdC5kZXNjcmlwdGlvbkxhYmVsKTtcbiAgICAgICAgZGl2LmFwcGVuZENoaWxkKGxpc3QuZGVzY3JpcHRpb25JbnB1dCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAyOlxuICAgICAgICBkaXYuYXBwZW5kQ2hpbGQobGlzdC5kYXRlTGFiZWwpO1xuICAgICAgICBkaXYuYXBwZW5kQ2hpbGQobGlzdC5kYXRlSW5wdXQpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgNDpcbiAgICAgICAgY29uc3QgdWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgMzsgaisrKSB7XG4gICAgICAgICAgY29uc3QgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgICAgICAgc3dpdGNoIChqKSB7XG4gICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgIGxpLmlkID0gXCJoaWdoLXByaW8tbGlcIjtcbiAgICAgICAgICAgICAgbGkuYXBwZW5kQ2hpbGQobGlzdC5ocFJhZGlvTGFiZWwpO1xuICAgICAgICAgICAgICBsaS5hcHBlbmRDaGlsZChsaXN0LmhwUmFkaW9JbnB1dCk7XG4gICAgICAgICAgICAgIHVsLmFwcGVuZENoaWxkKGxpKTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgIGxpLmlkID0gXCJtZWRpdW0tcHJpby1saVwiO1xuICAgICAgICAgICAgICBsaS5hcHBlbmRDaGlsZChsaXN0Lm1wUmFkaW9MYWJlbCk7XG4gICAgICAgICAgICAgIGxpLmFwcGVuZENoaWxkKGxpc3QubXBSYWRpb0lucHV0KTtcbiAgICAgICAgICAgICAgdWwuYXBwZW5kQ2hpbGQobGkpO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgbGkuaWQgPSBcImxvdy1wcmlvLWxpXCI7XG4gICAgICAgICAgICAgIGxpLmFwcGVuZENoaWxkKGxpc3QubHBSYWRpb0xhYmVsKTtcbiAgICAgICAgICAgICAgbGkuYXBwZW5kQ2hpbGQobGlzdC5scFJhZGlvSW5wdXQpO1xuICAgICAgICAgICAgICB1bC5hcHBlbmRDaGlsZChsaSk7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBkaXYuYXBwZW5kQ2hpbGQodWwpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgNTpcbiAgICAgICAgZGl2LmFwcGVuZENoaWxkKGxpc3QuY29uZmlybUJ0bik7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBsaXN0LmZvcm0uYXBwZW5kQ2hpbGQoZGl2KTtcbiAgfVxuICByZXR1cm4gbGlzdC5mb3JtO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJvamVjdE1vZGFsQ3JlYXRlRWxlbWVudCgpIHtcbiAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpO1xuICBmb3JtLmlkID0gXCJwcm9qZWN0LW1vZGFsXCI7XG4gIC8vYWluJ3QgZG9pbmcgdGhlIHNhbWUgY3JhcCB0d2ljZVxuICBmb3JtLmlubmVySFRNTCA9IGBcbiAgICA8bGFiZWwgZm9yPVwicHJvamVjdC1uYW1lXCI+UHJvamVjdCBuYW1lOjwvbGFiZWw+XG4gICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJwcm9qZWN0LW5hbWVcIiBtYXhsZW5ndGg9XCIxNVwiIHJlcXVpcmVkIC8+XG4gICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgaWQ9XCJjb25maXJtLXByb2plY3RcIj5DT05GSVJNPC9idXR0b24+YDtcblxuICAvL2NlbnRlciBlbGVtZW50IHdpdGhvdXQga25vd2luZyBpdHMgd2lkdGgocG9zOiBhYnNvbHV0ZSAmIGxlZnQ6IDUwJSlcbiAgZm9ybS5zdHlsZS5tYXJnaW5MZWZ0ID0gYC0ke2Zvcm0ub2Zmc2V0V2lkdGggLyAyfXB4YDtcblxuICByZXR1cm4gZm9ybTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG5ld1Byb2plY3RNb2RhbFJlbmRlcigpIHtcbiAgY29uc3QgZm9ybSA9IHByb2plY3RNb2RhbENyZWF0ZUVsZW1lbnQoKTtcblxuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZm9ybSk7XG5cbiAgcmVtb3ZlSXJyZWxldmFudEV2ZW50TGlzdGVuZXJzKCk7XG5cbiAgZm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIHZhbGlkYXRlTmV3TW9kYWwpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZWRpdFByb2plY3RNb2RhbFJlbmRlcigpIHtcbiAgY29uc3QgZm9ybSA9IHByb2plY3RNb2RhbENyZWF0ZUVsZW1lbnQoKTtcbiAgY29uc3QgcHJvamVjdCA9IHdoaWNoSXNBY3RpdmUoY3VycmVudFByb2plY3RzTGlzdCk7XG5cbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKGZvcm0pO1xuXG4gIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0LW5hbWVcIik7XG5cbiAgaXRlbUVkaXRlZC5zZXRUZW1wSWQocHJvamVjdC5pZCk7XG4gIHRpdGxlLnZhbHVlID0gcHJvamVjdC50aXRsZTtcblxuICByZW1vdmVJcnJlbGV2YW50RXZlbnRMaXN0ZW5lcnMoKTtcblxuICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgdmFsaWRhdGVFZGl0TW9kYWwpO1xufVxuIiwiaW1wb3J0IHsgcmVpbnN0YXRlRXZlbnRMaXN0ZW5lcnMgfSBmcm9tIFwiLi9ldmVudExpc3RlbmVyc01hbmFnZXJcIjtcbmltcG9ydCB7XG4gIGNvbmZpcm1OZXdUYXNrLFxuICBjb25maXJtRWRpdFRhc2ssXG4gIGNvbmZpcm1OZXdQcm9qZWN0LFxuICBjb25maXJtRWRpdFByb2plY3QsXG59IGZyb20gXCIuL21vZGFsQXBwbGljYXRpb25cIjtcblxuZXhwb3J0IGZ1bmN0aW9uIHZhbGlkYXRlTmV3TW9kYWwoZSkge1xuICBlLnByZXZlbnREZWZhdWx0KCk7XG4gIGlmIChlLnRhcmdldC5jaGVja1ZhbGlkaXR5KCkpIHtcbiAgICBpZiAoZS50YXJnZXQuaWQgPT09IFwiaXRlbS1tb2RhbFwiKSB7XG4gICAgICBjb25maXJtTmV3VGFzaygpO1xuICAgIH0gZWxzZSBpZiAoZS50YXJnZXQuaWQgPT09IFwicHJvamVjdC1tb2RhbFwiKSB7XG4gICAgICBjb25maXJtTmV3UHJvamVjdCgpO1xuICAgIH1cbiAgICByZWluc3RhdGVFdmVudExpc3RlbmVycygpO1xuICB9XG59XG5leHBvcnQgZnVuY3Rpb24gdmFsaWRhdGVFZGl0TW9kYWwoZSkge1xuICBlLnByZXZlbnREZWZhdWx0KCk7XG4gIGlmIChlLnRhcmdldC5jaGVja1ZhbGlkaXR5KCkpIHtcbiAgICBpZiAoZS50YXJnZXQuaWQgPT09IFwiaXRlbS1tb2RhbFwiKSB7XG4gICAgICBjb25maXJtRWRpdFRhc2soKTtcbiAgICB9IGVsc2UgaWYgKGUudGFyZ2V0LmlkID09PSBcInByb2plY3QtbW9kYWxcIikge1xuICAgICAgY29uZmlybUVkaXRQcm9qZWN0KCk7XG4gICAgfVxuICAgIHJlaW5zdGF0ZUV2ZW50TGlzdGVuZXJzKCk7XG4gIH1cbn1cbiIsImltcG9ydCBlZGl0U21hbGxTVkcgZnJvbSBcIi4uL2ltYWdlcy9lZGl0LXNtYWxsLnN2Z1wiO1xuaW1wb3J0IGhpZGVTVkcgZnJvbSBcIi4uL2ltYWdlcy9oaWRlLnN2Z1wiO1xuaW1wb3J0IHNoZWV0U3RhY2tTVkcgZnJvbSBcIi4uL2ltYWdlcy9zdGFjay1vZi1zaGVldHMuc3ZnXCI7XG5pbXBvcnQgZGVsZXRlU1ZHIGZyb20gXCIuLi9pbWFnZXMvZGVsZXRlLnN2Z1wiO1xuaW1wb3J0IGVkaXRCaWdTVkcgZnJvbSBcIi4uL2ltYWdlcy9lZGl0LWJpZy5zdmdcIjtcbmltcG9ydCBtZW51U1ZHIGZyb20gXCIuLi9pbWFnZXMvbWVudS5zdmdcIjtcblxuaW1wb3J0IHtcbiAgVGFzayxcbiAgUHJvamVjdCxcbiAgY3VycmVudFByb2plY3RzTGlzdCxcbiAgVGVtcG9yYXJ5SWQsXG59IGZyb20gXCIuL2ludGVybmFsTG9naWNcIjtcbmltcG9ydCB7XG4gIGVkaXRUYXNrTW9kYWxSZW5kZXIsXG4gIG5ld1Byb2plY3RNb2RhbFJlbmRlcixcbiAgZWRpdFByb2plY3RNb2RhbFJlbmRlcixcbn0gZnJvbSBcIi4vbW9kYWxSZW5kZXJcIjtcbmltcG9ydCB7XG4gIHdoaWNoSXNBY3RpdmUsXG4gIGhpZGVTaWRlYmFyLFxuICBzaG93U2lkZWJhcixcbiAgcmVuZGVyTWFpbixcbiAgc2V0UHJpb3JpdHksXG4gIGRlbGV0ZUl0ZW0sXG4gIHNldENvbXBsZXRlT3B0aW9uLFxuICBjaGFuZ2VDb21wbGV0ZU9wdGlvbixcbiAgZGVhY3RpdmF0ZUFsbFByb2plY3RzLFxuICBzaG93R3JvdXAsXG4gIGRlbGV0ZVByb2plY3QsXG59IGZyb20gXCIuL2xvYWRET01jcmFwXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJTaWRlYmFyKCkge1xuICBjb25zdCBzaWRlYmFyUmVuZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3Qgc2lkZWJhckljb25zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgbmV3UHJvamVjdEJ0blJlbmRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGNvbnN0IHByb2plY3RMaXN0VGl0bGVSZW5kZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gIGNvbnN0IHByb2plY3RVbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcbiAgY29uc3QgZHluYW1pY1VsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xuICBjb25zdCBkeW5hbWljVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gIGNvbnN0IGhpZGVJbWcgPSBuZXcgSW1hZ2UoKTtcbiAgY29uc3Qgc2hlZXRTdGFja0ltZyA9IG5ldyBJbWFnZSgpO1xuXG4gIHNpZGViYXJSZW5kZXIuaWQgPSBcInByb2plY3RzXCI7XG4gIHNpZGViYXJJY29ucy5pZCA9IFwiaWNvbnNcIjtcbiAgbmV3UHJvamVjdEJ0blJlbmRlci5pZCA9IFwibmV3LXByb2plY3QtYnRuXCI7XG4gIHByb2plY3RVbC5pZCA9IFwicHJvamVjdHMtdWxcIjtcbiAgZHluYW1pY1VsLmlkID0gXCJkeW5hbWljLXVsXCI7XG4gIGR5bmFtaWNUaXRsZS5pZCA9IFwiZHluYW1pYy1oMlwiO1xuICBoaWRlSW1nLmlkID0gXCJoaWRlLWljb25cIjtcbiAgaGlkZUltZy5zcmMgPSBoaWRlU1ZHO1xuICBzaGVldFN0YWNrSW1nLnNyYyA9IHNoZWV0U3RhY2tTVkc7XG5cbiAgbmV3UHJvamVjdEJ0blJlbmRlci50ZXh0Q29udGVudCA9IFwiQ1JFQVRFIE5FVyBQUk9KRUNUXCI7XG4gIHByb2plY3RMaXN0VGl0bGVSZW5kZXIudGV4dENvbnRlbnQgPSBcIllvdXIgcHJvamVjdHM6XCI7XG4gIGR5bmFtaWNUaXRsZS50ZXh0Q29udGVudCA9IFwiRHluYW1pY2FsbHkgZ3JvdXBlZCB0YXNrc1wiO1xuXG4gIHNpZGViYXJJY29ucy5hcHBlbmRDaGlsZChzaGVldFN0YWNrSW1nKTtcbiAgc2lkZWJhckljb25zLmFwcGVuZENoaWxkKGhpZGVJbWcpO1xuXG4gIHJlbmRlclByb2plY3RVbChwcm9qZWN0VWwpO1xuICByZW5kZXJEeW5hbWljVWwoZHluYW1pY1VsKTtcblxuICBzaWRlYmFyUmVuZGVyLmFwcGVuZENoaWxkKHNpZGViYXJJY29ucyk7XG4gIHNpZGViYXJSZW5kZXIuYXBwZW5kQ2hpbGQoZHluYW1pY1RpdGxlKTtcbiAgc2lkZWJhclJlbmRlci5hcHBlbmRDaGlsZChkeW5hbWljVWwpO1xuICBzaWRlYmFyUmVuZGVyLmFwcGVuZENoaWxkKG5ld1Byb2plY3RCdG5SZW5kZXIpO1xuICBzaWRlYmFyUmVuZGVyLmFwcGVuZENoaWxkKHByb2plY3RMaXN0VGl0bGVSZW5kZXIpO1xuICBzaWRlYmFyUmVuZGVyLmFwcGVuZENoaWxkKHByb2plY3RVbCk7XG5cbiAgbmV3UHJvamVjdEJ0blJlbmRlci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgbmV3UHJvamVjdE1vZGFsUmVuZGVyKTtcbiAgaGlkZUltZy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgaGlkZVNpZGViYXIpO1xuXG4gIHJldHVybiBzaWRlYmFyUmVuZGVyO1xufVxuXG5mdW5jdGlvbiByZW5kZXJQcm9qZWN0VWwobGlzdCkge1xuICBpZiAoY3VycmVudFByb2plY3RzTGlzdC5jb250ZW50Lmxlbmd0aCA+IDApIHtcbiAgICB3aGljaElzQWN0aXZlKGN1cnJlbnRQcm9qZWN0c0xpc3QpO1xuICAgIGZvciAoY29uc3QgcHJvamVjdCBvZiBjdXJyZW50UHJvamVjdHNMaXN0LmNvbnRlbnQpIHtcbiAgICAgIGNvbnN0IGxpID0gcmVuZGVyU2luZ2xlUHJvamVjdChwcm9qZWN0KTtcbiAgICAgIGxpc3QuYXBwZW5kQ2hpbGQobGkpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiByZW5kZXJEeW5hbWljVWwodWwpIHtcbiAgY29uc3QgbmV4dFdlZWsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gIGNvbnN0IGhpZ2hQcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgY29uc3QgbWVkaXVtUHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gIGNvbnN0IGxvd1ByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuXG4gIG5leHRXZWVrLmlkID0gXCJuZXh0LXdlZWtcIjtcbiAgaGlnaFByaW9yaXR5LmlkID0gXCJkaHBcIjtcbiAgbWVkaXVtUHJpb3JpdHkuaWQgPSBcImRtcFwiO1xuICBsb3dQcmlvcml0eS5pZCA9IFwiZGxwXCI7XG4gIGhpZ2hQcmlvcml0eS5jbGFzc05hbWUgPSBcInByaW9yaXR5LWdyb3VwXCI7XG4gIG1lZGl1bVByaW9yaXR5LmNsYXNzTmFtZSA9IFwicHJpb3JpdHktZ3JvdXBcIjtcbiAgbG93UHJpb3JpdHkuY2xhc3NOYW1lID0gXCJwcmlvcml0eS1ncm91cFwiO1xuXG4gIG5leHRXZWVrLnRleHRDb250ZW50ID0gXCJEdWUgdGhpcyB3ZWVrXCI7XG4gIGhpZ2hQcmlvcml0eS50ZXh0Q29udGVudCA9IFwiSGlnaCBwcmlvcml0eVwiO1xuICBtZWRpdW1Qcmlvcml0eS50ZXh0Q29udGVudCA9IFwiTWVkaXVtIHByaW9yaXR5XCI7XG4gIGxvd1ByaW9yaXR5LnRleHRDb250ZW50ID0gXCJMb3cgcHJpb3JpdHlcIjtcblxuICB1bC5hcHBlbmRDaGlsZChuZXh0V2Vlayk7XG4gIHVsLmFwcGVuZENoaWxkKGhpZ2hQcmlvcml0eSk7XG4gIHVsLmFwcGVuZENoaWxkKG1lZGl1bVByaW9yaXR5KTtcbiAgdWwuYXBwZW5kQ2hpbGQobG93UHJpb3JpdHkpO1xuXG4gIEFycmF5LmZyb20odWwuY2hpbGROb2RlcykuZm9yRWFjaCgoZSkgPT4ge1xuICAgIGUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGRlYWN0aXZhdGVBbGxQcm9qZWN0cyk7XG4gICAgZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgc2hvd0dyb3VwKTtcbiAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJTaW5nbGVQcm9qZWN0KHByb2plY3QpIHtcbiAgY29uc3QgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gIGNvbnN0IGRlbGV0ZUJ0biA9IG5ldyBJbWFnZSgpO1xuXG4gIGxpLnRleHRDb250ZW50ID0gYCR7cHJvamVjdC50aXRsZX1gO1xuICBkZWxldGVCdG4uc3JjID0gZGVsZXRlU1ZHO1xuICBkZWxldGVCdG4uY2xhc3NOYW1lID0gXCJkZWxldGUtcHJvamVjdFwiO1xuXG4gIGlmICghcHJvamVjdC5pZCkge1xuICAgIGN1cnJlbnRQcm9qZWN0c0xpc3QuY2hlY2tEdXBsaWNhdGVQcm9qZWN0KHByb2plY3QpO1xuICB9XG4gIGxpLmlkID0gcHJvamVjdC5pZDtcbiAgbGkuYXBwZW5kQ2hpbGQoZGVsZXRlQnRuKTtcblxuICBkZWxldGVCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGRlbGV0ZVByb2plY3QpO1xuICBsaS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2hhbmdlQWN0aXZlUHJvamVjdCk7XG5cbiAgaWYgKHByb2plY3QuYWN0aXZlKSB7XG4gICAgbGkuY2xhc3NOYW1lID0gXCJhY3RpdmVcIjtcbiAgfSBlbHNlIHtcbiAgICBsaS5jbGFzc05hbWUgPSBcIlwiO1xuICB9XG4gIHJldHVybiBsaTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNoYW5nZUFjdGl2ZVByb2plY3QoZSkge1xuICBjb25zdCBwcm9qZWN0VWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3RzLXVsXCIpO1xuICBjb25zdCBkeW5hbWljR3JvdXAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImR5bmFtaWMtdWxcIik7XG4gIGNvbnN0IGxhdGVNYWluID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluXCIpO1xuXG4gIEFycmF5LmZyb20ocHJvamVjdFVsLmNoaWxkTm9kZXMpLmZvckVhY2goKGVsKSA9PiB7XG4gICAgaWYgKGUudGFyZ2V0ICE9PSBlbCkge1xuICAgICAgZWwuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZWwuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbiAgICB9XG4gIH0pO1xuXG4gIEFycmF5LmZyb20oZHluYW1pY0dyb3VwLmNoaWxkcmVuKS5mb3JFYWNoKChlbCkgPT4ge1xuICAgIGVsLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gIH0pO1xuXG4gIGZvciAoY29uc3QgcHJvaiBvZiBjdXJyZW50UHJvamVjdHNMaXN0LmNvbnRlbnQpIHtcbiAgICBpZiAocHJvai5pZCA9PT0gZS50YXJnZXQuaWQgJiYgIXByb2ouYWN0aXZlKSB7XG4gICAgICBjdXJyZW50UHJvamVjdHNMaXN0LnNldEluYWN0aXZlUHJvamVjdHMoKTtcbiAgICAgIGN1cnJlbnRQcm9qZWN0c0xpc3Quc2V0QWN0aXZlUHJvamVjdChwcm9qKTtcbiAgICB9XG4gIH1cblxuICBjb25zdCBhY3RpdmVQcm9qZWN0ID0gd2hpY2hJc0FjdGl2ZShjdXJyZW50UHJvamVjdHNMaXN0KTtcblxuICBsYXRlTWFpbi5yZW1vdmUoKTtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKHJlbmRlck1haW4oYWN0aXZlUHJvamVjdC5jb250ZW50LCBhY3RpdmVQcm9qZWN0LnRpdGxlKSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJUb3BDb250ZW50KHByb2plY3RUaXRsZSkge1xuICBjb25zdCBuZXdUb3BTZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG5cbiAgY29uc3QgZWRpdFByb2plY3RJbWcgPSBuZXcgSW1hZ2UoKTtcbiAgY29uc3Qgc2hvd0ltZyA9IG5ldyBJbWFnZSgpO1xuXG4gIG5ld1RvcFNlY3Rpb24uaWQgPSBcImFjdGl2ZS1wcm9qZWN0XCI7XG4gIGVkaXRQcm9qZWN0SW1nLmlkID0gXCJlZGl0LXByb2plY3RcIjtcbiAgc2hvd0ltZy5pZCA9IFwibWVudS1pY29uXCI7XG5cbiAgdGl0bGUudGV4dENvbnRlbnQgPSBwcm9qZWN0VGl0bGU7XG4gIGVkaXRQcm9qZWN0SW1nLnNyYyA9IGVkaXRCaWdTVkc7XG4gIHNob3dJbWcuc3JjID0gbWVudVNWRztcblxuICBuZXdUb3BTZWN0aW9uLmFwcGVuZENoaWxkKHNob3dJbWcpO1xuICBuZXdUb3BTZWN0aW9uLmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgbmV3VG9wU2VjdGlvbi5hcHBlbmRDaGlsZChlZGl0UHJvamVjdEltZyk7XG5cbiAgc2hvd0ltZy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgc2hvd1NpZGViYXIpO1xuICBlZGl0UHJvamVjdEltZy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZWRpdFByb2plY3RNb2RhbFJlbmRlcik7XG4gIHJldHVybiBuZXdUb3BTZWN0aW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyU2luZ2xlVGFzayh0YXNrKSB7XG4gIGNvbnN0IGl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgZGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IHByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgY29tcGxldGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBlZGl0QnRuID0gbmV3IEltYWdlKCk7XG4gIGNvbnN0IGRlbGV0ZUJ0biA9IG5ldyBJbWFnZSgpO1xuICBjb25zdCBjb21wbGV0ZUJ0biA9IG5ldyBJbWFnZSgpO1xuXG4gIGl0ZW0uY2xhc3NOYW1lID0gXCJpdGVtXCI7XG4gIHRpdGxlLmNsYXNzTmFtZSA9IFwidGl0bGVcIjtcbiAgZGVzY3JpcHRpb24uY2xhc3NOYW1lID0gXCJkZXNjcmlwdGlvblwiO1xuICBkYXRlLmNsYXNzTmFtZSA9IFwiZGF0ZVwiO1xuICBwcmlvcml0eS5jbGFzc05hbWUgPSBcInByaW9yaXR5XCI7XG4gIGNvbXBsZXRlLmNsYXNzTmFtZSA9IFwiY29tcGxldGVcIjtcblxuICBlZGl0QnRuLmNsYXNzTmFtZSA9IFwiZWRpdC1pdGVtXCI7XG4gIGRlbGV0ZUJ0bi5jbGFzc05hbWUgPSBcImRlbGV0ZS1pdGVtXCI7XG4gIGNvbXBsZXRlQnRuLmNsYXNzTmFtZSA9IFwiY29tcGxldGUtYnRuXCI7XG5cbiAgZWRpdEJ0bi5zcmMgPSBlZGl0U21hbGxTVkc7XG4gIGRlbGV0ZUJ0bi5zcmMgPSBkZWxldGVTVkc7XG4gIGlmICghdGFzay5pZCkge1xuICAgIGN1cnJlbnRQcm9qZWN0c0xpc3QuY2hlY2tEdXBsaWNhdGVJdGVtKHRhc2spO1xuICB9XG4gIGl0ZW0uaWQgPSB0YXNrLmlkO1xuXG4gIHRpdGxlLnRleHRDb250ZW50ID0gdGFzay50aXRsZTtcbiAgZGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSB0YXNrLmRlc2NyaXB0aW9uO1xuICBkYXRlLnRleHRDb250ZW50ID0gdGFzay5kYXRlO1xuICBjb21wbGV0ZS50ZXh0Q29udGVudCA9IFwiQ29tcGxldGU6XCI7XG5cbiAgc2V0UHJpb3JpdHkocHJpb3JpdHksIHRhc2spO1xuICBzZXRDb21wbGV0ZU9wdGlvbih0YXNrLCBjb21wbGV0ZUJ0bik7XG4gIGNvbXBsZXRlLmFwcGVuZENoaWxkKGNvbXBsZXRlQnRuKTtcblxuICBpdGVtLmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgaXRlbS5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbik7XG4gIGl0ZW0uYXBwZW5kQ2hpbGQoZGF0ZSk7XG4gIGl0ZW0uYXBwZW5kQ2hpbGQocHJpb3JpdHkpO1xuICBpdGVtLmFwcGVuZENoaWxkKGNvbXBsZXRlKTtcblxuICBpdGVtLmFwcGVuZENoaWxkKGVkaXRCdG4pO1xuICBpdGVtLmFwcGVuZENoaWxkKGRlbGV0ZUJ0bik7XG5cbiAgZWRpdEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZWRpdFRhc2tNb2RhbFJlbmRlcik7XG4gIGRlbGV0ZUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZGVsZXRlSXRlbSk7XG4gIGNvbXBsZXRlQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjaGFuZ2VDb21wbGV0ZU9wdGlvbik7XG5cbiAgcmV0dXJuIGl0ZW07XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAqIGFzIGl0ZW1zIGZyb20gXCIuL21vZHVsZXMvbG9hZERPTWNyYXAuanNcIjtcblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsIGl0ZW1zLnJlbmRlckNvbnRhaW5lcigpKTtcbi8qIFxuVE8gRE86XG4tbG9jYWwgc3RvcmFnZTtcbi1naXQgaHViIGRlcGxveW1lbnQ7XG4qL1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9