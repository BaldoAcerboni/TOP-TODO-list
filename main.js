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
  box-shadow: 0 0 5px #000;
  padding: 1rem;
  z-index: 2;
  position: relative;
  width: 300px;
  animation: show 0.5s;
  opacity: 1;
  overflow-x: hidden;
}

#projects.hidden {
  width: 0;
  padding: 0;
  opacity: 0;
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

#projects-ul,
#dynamic-ul {
  padding-left: 0;
}

#projects-ul > li,
#dynamic-ul > li {
  cursor: pointer;
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

@keyframes show {
  0% {
    width: 0;
    opacity: 0;
  }
  80% {
    opacity: 0;
  }
  100% {
    width: 300px;
    opacity: 1;
  }
}

@keyframes hide {
  0% {
    width: 300px;
    opacity: 1;
  }
  20% {
    opacity: 0;
  }
  100% {
    width: 0;
    opacity: 0;
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

#menu-icon {
  cursor: pointer;
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
  background: linear-gradient(#607bce, #445791);
  box-shadow: 0.5rem 0.5rem 1rem -0.5rem #607bce;
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
  background: radial-gradient(#167e8b, #1fa9bb);
  border-radius: 2rem;
  padding: 1rem;
}

#project-modal > * {
  margin: 1rem 0;
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
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["* {\n  margin: 0;\n  box-sizing: border-box;\n  font-family: system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto,\n    Oxygen, Ubuntu, Cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif;\n  text-align: center;\n}\n\n#container {\n  display: flex;\n  align-items: stretch;\n  width: 100%;\n  height: 100vh;\n  position: relative;\n  background: #5e5e5e;\n}\n\n/* \n\n  PROJECTS SIDEBAR\n\n*/\n\n#projects {\n  background: #979797;\n  padding: 1rem;\n  font-size: 1.2rem;\n  box-shadow: 0 0 5px #000;\n  padding: 1rem;\n  z-index: 2;\n  position: relative;\n  width: 300px;\n  animation: show 0.5s;\n  opacity: 1;\n  overflow-x: hidden;\n}\n\n#projects.hidden {\n  width: 0;\n  padding: 0;\n  opacity: 0;\n  animation: hide 0.5s;\n}\n\n#hide-icon {\n  cursor: pointer;\n}\n\n#new-project-btn {\n  width: 100%;\n  padding: 0.5rem 0;\n  background: radial-gradient(#506965, #005b9c);\n  color: #fff;\n  border: 3px solid #007d0c;\n  border-radius: 0.2rem;\n  margin: 1rem 0 0 0;\n  cursor: pointer;\n}\n\n#icons {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  height: 100px;\n}\n\n#projects h2 {\n  font-size: 1.3rem;\n  margin: 1rem 0;\n}\n\n#projects-ul,\n#dynamic-ul {\n  padding-left: 0;\n}\n\n#projects-ul > li,\n#dynamic-ul > li {\n  cursor: pointer;\n}\n\n#projects-ul > li::marker {\n  content: \"#\";\n  color: #000ac4;\n}\n\n#dynamic-ul > li::marker {\n  color: #000ac4;\n  content: \"o\";\n}\n\n#projects-ul > li.active,\n#dynamic-ul > li.active {\n  border: 3px double #75ff4b;\n}\n\n#projects-ul > li.active::marker,\n#dynamic-ul > li.active::marker {\n  color: #75ff4b;\n}\n\n@keyframes show {\n  0% {\n    width: 0;\n    opacity: 0;\n  }\n  80% {\n    opacity: 0;\n  }\n  100% {\n    width: 300px;\n    opacity: 1;\n  }\n}\n\n@keyframes hide {\n  0% {\n    width: 300px;\n    opacity: 1;\n  }\n  20% {\n    opacity: 0;\n  }\n  100% {\n    width: 0;\n    opacity: 0;\n  }\n}\n\n/* \n\nMAIN SECTION\n\n*/\n\n#main {\n  flex-grow: 1;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-around;\n  align-content: safe center;\n  gap: 1rem;\n  position: relative;\n  padding: 25px;\n  overflow-y: auto;\n  margin-top: 100px;\n}\n\n#add-item {\n  position: fixed;\n  bottom: 2rem;\n  left: 50%;\n  cursor: pointer;\n  z-index: 1;\n}\n\n.item {\n  border-radius: 0.5rem;\n  width: 300px;\n  height: 300px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: stretch;\n  position: relative;\n  box-shadow: 0 0 5px #000;\n  background: radial-gradient(#3d3d3d, #506965);\n  padding: 20px;\n}\n\n.item > div {\n  background: radial-gradient(#e7e7e7, #bababa);\n  padding: 0.3rem 1rem;\n  box-shadow: 0 0 3px #000;\n}\n\n.item > div:nth-child(2) {\n  text-align: center;\n  overflow-y: auto;\n}\n\n.edit-item,\n.delete-item {\n  position: absolute;\n  top: 0;\n  cursor: pointer;\n  border-radius: 0.5rem;\n  box-shadow: 0 0 3px #000;\n}\n\n.edit-item {\n  left: 0;\n  background: #6081dc;\n}\n\n.edit-item:active,\n.delete-item:active {\n  box-shadow: inset 0 0 3px #000;\n}\n\n.delete-item {\n  right: 0;\n  background: #ff2020;\n}\n\n.complete {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.complete-btn {\n  cursor: pointer;\n  border-radius: 50%;\n}\n\n.complete-btn.fade-out {\n  animation: fade-out 0.5s linear;\n  opacity: 0;\n}\n\n@keyframes fade-out {\n  0% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0;\n  }\n}\n\n.complete-btn.fade-in {\n  animation: fade-in 0.5s linear;\n  opacity: 1;\n}\n\n@keyframes fade-in {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n\n#active-project {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  background: linear-gradient(#3d3d3d, #2a2f96);\n  color: #fff;\n  z-index: 1;\n}\n\n#menu-icon {\n  cursor: pointer;\n}\n\n#sheet-stack {\n  cursor: pointer;\n}\n\n/* \n\nITEM MODAL\n\n*/\n\n#item-modal {\n  display: flex;\n  position: absolute;\n  width: 70%;\n  min-height: 60%;\n  top: 20%;\n  left: 15%;\n  border-radius: 2rem;\n  padding: 1.5rem;\n  text-align: center;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: stretch;\n  background: linear-gradient(#607bce, #445791);\n  box-shadow: 0.5rem 0.5rem 1rem -0.5rem #607bce;\n  z-index: 10;\n}\n\n#item-modal > div {\n  margin-bottom: 0.8rem;\n}\n\n#item-modal ul {\n  display: flex;\n  gap: 0.5rem;\n  justify-content: space-between;\n}\n\nlabel {\n  font-size: 1.2rem;\n}\n\ndiv > label {\n  display: block;\n  margin-bottom: 0.5rem;\n}\n\n#item-modal li {\n  list-style-type: none;\n  display: flex;\n  justify-content: space-between;\n  border-radius: 0.5rem;\n  margin: 0.4rem 0;\n  padding: 0.5rem;\n  width: 25%;\n}\n\n#high-prio-li {\n  background-color: #ff3434;\n}\n\n#medium-prio-li {\n  background-color: #ffe033;\n}\n\n#low-prio-li {\n  background-color: #6aff2a;\n}\n\n#item-modal ul {\n  padding: 0;\n}\n\ntextarea {\n  resize: none;\n}\n\ninput[type=\"text\"],\ntextarea {\n  width: 80%;\n}\n\ninput:not(input[type=\"radio\"]),\ntextarea {\n  font-size: 1rem;\n  border-radius: 0.3rem;\n  box-shadow: 0 0.3rem 1rem -0.3rem #4a4a4a;\n  border: none;\n}\n\n#confirm-item {\n  width: 80%;\n  padding: 0.5rem;\n  font-size: 1.2rem;\n  background: linear-gradient(#b7b7b7, #fff);\n  border: none;\n  border-radius: 0.5rem;\n  cursor: pointer;\n}\n\n/* \n\nPROJECT MODAL\n\n*/\n\n#project-modal {\n  position: absolute;\n  top: 30%;\n  left: 50%;\n  background: radial-gradient(#167e8b, #1fa9bb);\n  border-radius: 2rem;\n  padding: 1rem;\n}\n\n#project-modal > * {\n  margin: 1rem 0;\n}\n\n#confirm-project {\n  display: block;\n  padding: 0.5rem 2rem;\n  font-size: 1.2rem;\n  background: linear-gradient(45deg, #b0b0b0, #e2e2e2);\n  border: none;\n  border-radius: 0.5rem;\n  margin: 0 auto;\n  cursor: pointer;\n}\n\n.color {\n  background-color: #00c703;\n}\n"],"sourceRoot":""}]);
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




//things to add:
//  -edit item btn
//  -edit project
//  -delete item
//  -delete project
function removeIrrelevantEventListeners() {
  const newTaskBtn = document.getElementById("add-item");
  const newProjectBtn = document.getElementById("new-project-btn");
  const hideSidebarBtn = document.getElementById("hide-icon");
  const showSidebarBtn = document.getElementById("menu-icon");

  const projectUL = document.getElementById("projects-ul");

  newTaskBtn.removeEventListener("click", _modalRender__WEBPACK_IMPORTED_MODULE_1__.newTaskModalRender);
  newProjectBtn.removeEventListener("click", _modalRender__WEBPACK_IMPORTED_MODULE_1__.newProjectModalRender);
  hideSidebarBtn.removeEventListener("click", _loadDOMcrap__WEBPACK_IMPORTED_MODULE_2__.hideSidebar);
  showSidebarBtn.removeEventListener("click", _loadDOMcrap__WEBPACK_IMPORTED_MODULE_2__.showSidebar);

  Array.from(projectUL.childNodes).forEach((e) => {
    e.removeEventListener("click", _renderSingleEl__WEBPACK_IMPORTED_MODULE_3__.changeActiveProject);
  });
}
//things to add:
//  -edit item btn
//  -edit project
//  -delete item
//  -delete project
function reinstateEventListeners() {
  const newTaskBtn = document.getElementById("add-item");
  const newProjectBtn = document.getElementById("new-project-btn");
  const hideSidebarBtn = document.getElementById("hide-icon");
  const showSidebarBtn = document.getElementById("menu-icon");

  const projectUL = document.getElementById("projects-ul");

  newTaskBtn.addEventListener("click", _modalRender__WEBPACK_IMPORTED_MODULE_1__.newTaskModalRender);
  newProjectBtn.addEventListener("click", _modalRender__WEBPACK_IMPORTED_MODULE_1__.newProjectModalRender);
  hideSidebarBtn.addEventListener("click", _loadDOMcrap__WEBPACK_IMPORTED_MODULE_2__.hideSidebar);
  showSidebarBtn.addEventListener("click", _loadDOMcrap__WEBPACK_IMPORTED_MODULE_2__.showSidebar);

  Array.from(projectUL.childNodes).forEach((e) => {
    e.addEventListener("click", _renderSingleEl__WEBPACK_IMPORTED_MODULE_3__.changeActiveProject);
  });
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
/* harmony import */ var _internalLogic__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./internalLogic */ "./src/modules/internalLogic.js");
/* harmony import */ var _renderSingleEl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./renderSingleEl */ "./src/modules/renderSingleEl.js");
/* harmony import */ var _modalRender__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modalRender */ "./src/modules/modalRender.js");










const container = document.getElementById("container");

const itemEdited = new _internalLogic__WEBPACK_IMPORTED_MODULE_4__.TemporaryId("");

function renderContainer() {
  const sidebarRendered = (0,_renderSingleEl__WEBPACK_IMPORTED_MODULE_5__.renderSidebar)();
  const activeProject = whichIsActive(_internalLogic__WEBPACK_IMPORTED_MODULE_4__.currentProjectsList);
  const main = renderMain(activeProject.content, activeProject.title);

  container.appendChild(sidebarRendered);
  container.appendChild(main);
}

function renderMain(group, title) {
  const newMain = document.createElement("div");
  //const activeProject = whichIsActive(currentProjectsList);
  const topContent = (0,_renderSingleEl__WEBPACK_IMPORTED_MODULE_5__.renderTopContent)(title);
  const addItemImg = new Image();

  newMain.id = "main";

  renderTasks(group, newMain); //activeProject

  addItemImg.id = "add-item";
  addItemImg.src = _images_add_svg__WEBPACK_IMPORTED_MODULE_1__;
  addItemImg.style.marginLeft = `${-(addItemImg.offsetWidth / 2)}px`;

  newMain.appendChild(addItemImg);
  newMain.appendChild(topContent);

  addItemImg.addEventListener("click", _modalRender__WEBPACK_IMPORTED_MODULE_6__.newTaskModalRender);

  return newMain;
}

function renderTasks(arr, DOMel) {
  if (arr.length > 0) {
    for (const task of arr) {
      DOMel.appendChild((0,_renderSingleEl__WEBPACK_IMPORTED_MODULE_5__.renderSingleTask)(task));
    }
  }
}

function whichIsActive(projects) {
  let isActive = projects.checkActiveProject();
  if (isActive) {
    return isActive;
  } else {
    projects.setActiveProject(projects.content[0]);
    isActive = projects.checkActiveProject();
    return isActive;
  }
}

function hideSidebar() {
  const sidebar = document.getElementById("projects");

  sidebar.classList.add("hidden");
}
function showSidebar() {
  const sidebar = document.getElementById("projects");

  sidebar.classList.remove("hidden");
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
  const activeProject = _internalLogic__WEBPACK_IMPORTED_MODULE_4__.currentProjectsList.getProjectByItemId(
    e.target.parentNode.id
  ); //whichIsActive(currentProjectsList);
  const task = activeProject.getItem(e.target.parentNode.id);
  e.target.parentNode.remove();
  activeProject.deleteListItem(task);
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
  const project = _internalLogic__WEBPACK_IMPORTED_MODULE_4__.currentProjectsList.getProjectByItemId(id); //whichIsActive(currentProjectsList);
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
  _internalLogic__WEBPACK_IMPORTED_MODULE_4__.currentProjectsList.setInactiveProjects();
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
        _internalLogic__WEBPACK_IMPORTED_MODULE_4__.currentProjectsList.getItemByPriority(p),
        e.target.textContent
      );
    } else if (e.target.id === "next-week") {
      newMain = renderMain(
        _internalLogic__WEBPACK_IMPORTED_MODULE_4__.currentProjectsList.getItemByDueDate(),
        e.target.textContent
      );
    }
  } else if (e.classList.contains("priority-group")) {
    const p = e.id[1];
    newMain = renderMain(
      _internalLogic__WEBPACK_IMPORTED_MODULE_4__.currentProjectsList.getItemByPriority(p),
      e.textContent
    );
  } else if (e.id === "next-week") {
    newMain = renderMain(_internalLogic__WEBPACK_IMPORTED_MODULE_4__.currentProjectsList.getItemByDueDate(), e.textContent);
  }

  lateMain.remove();
  container.appendChild(newMain);
  const edit = document.getElementById("edit-project");
  edit.removeEventListener("click", _modalRender__WEBPACK_IMPORTED_MODULE_6__.editProjectModalRender);
}
/* "dhp"
"dmp"
"dlp" */


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
  const project = _internalLogic__WEBPACK_IMPORTED_MODULE_2__.currentProjectsList.getItem(_loadDOMcrap__WEBPACK_IMPORTED_MODULE_0__.itemEdited.id); //whichIsActive(currentProjectsList);

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
  (0,_loadDOMcrap__WEBPACK_IMPORTED_MODULE_8__.whichIsActive)(_internalLogic__WEBPACK_IMPORTED_MODULE_6__.currentProjectsList);
  for (const project of _internalLogic__WEBPACK_IMPORTED_MODULE_6__.currentProjectsList.content) {
    const li = renderSingleProject(project);
    list.appendChild(li);
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

  /* const priorityGroup = document.getElementsByClassName("priority-group");
  console.log(priorityGroup);
  Array.from(priorityGroup).forEach((e) => {}); */
}

function renderSingleProject(project) {
  const li = document.createElement("li");

  li.textContent = `${project.title}`;

  if (!project.id) {
    _internalLogic__WEBPACK_IMPORTED_MODULE_6__.currentProjectsList.checkDuplicateProject(project);
  }
  li.id = project.id;

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

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU8sZ0ZBQWdGLFVBQVUsWUFBWSxNQUFNLE9BQU8sYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxRQUFRLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLE9BQU8sTUFBTSxVQUFVLE9BQU8sTUFBTSxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLE1BQU0sWUFBWSxPQUFPLE1BQU0sVUFBVSxPQUFPLEtBQUssS0FBSyxVQUFVLFVBQVUsS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFLLFVBQVUsVUFBVSxLQUFLLE1BQU0sS0FBSyxLQUFLLFVBQVUsVUFBVSxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssVUFBVSxVQUFVLEtBQUssTUFBTSxRQUFRLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLE1BQU0sWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEs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Ozs7Ozs7Ozs7QUNwREE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUJBQWlCLCtCQUErQixFQUFFO0FBQ2xEO0FBQ0EsSUFBSSxFQUFFLCtCQUErQjtBQUNyQyxZQUFZLEtBQUssRUFBRSxJQUFJO0FBQ3ZCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxrQkFBa0IseUJBQXlCO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxrQkFBa0IsU0FBUztBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxrQkFBa0IseUJBQXlCO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7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V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDbEJBOzs7Ozs7Ozs7Ozs7QUNBa0Q7O0FBRWxELGdDQUFnQyxvRUFBcUI7O0FBRXJEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQix3Q0FBd0M7QUFDeEM7QUFDQSxpQ0FBaUM7QUFDakM7O0FBRUE7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvcC10b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvcC10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvcC10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b3AtdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvcC10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9wLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9wLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b3AtdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvcC10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b3AtdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9wLXRvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL2V2ZW50TGlzdGVuZXJzTWFuYWdlci5qcyIsIndlYnBhY2s6Ly90b3AtdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvaW50ZXJuYWxMb2dpYy5qcyIsIndlYnBhY2s6Ly90b3AtdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvbG9hZERPTWNyYXAuanMiLCJ3ZWJwYWNrOi8vdG9wLXRvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL21vZGFsQXBwbGljYXRpb24uanMiLCJ3ZWJwYWNrOi8vdG9wLXRvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL21vZGFsUmVuZGVyLmpzIiwid2VicGFjazovL3RvcC10b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy9tb2RhbFZhbGlkYXRpb24uanMiLCJ3ZWJwYWNrOi8vdG9wLXRvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL3JlbmRlclNpbmdsZUVsLmpzIiwid2VicGFjazovL3RvcC10b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9wLXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b3AtdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b3AtdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vdG9wLXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvcC10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b3AtdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3RvcC10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvcC10b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYCoge1xuICBtYXJnaW46IDA7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGZvbnQtZmFtaWx5OiBzeXN0ZW0tdWksIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgXCJTZWdvZSBVSVwiLCBSb2JvdG8sXG4gICAgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgXCJPcGVuIFNhbnNcIiwgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbiNjb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogc3RyZXRjaDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwdmg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYmFja2dyb3VuZDogIzVlNWU1ZTtcbn1cblxuLyogXG5cbiAgUFJPSkVDVFMgU0lERUJBUlxuXG4qL1xuXG4jcHJvamVjdHMge1xuICBiYWNrZ3JvdW5kOiAjOTc5Nzk3O1xuICBwYWRkaW5nOiAxcmVtO1xuICBmb250LXNpemU6IDEuMnJlbTtcbiAgYm94LXNoYWRvdzogMCAwIDVweCAjMDAwO1xuICBwYWRkaW5nOiAxcmVtO1xuICB6LWluZGV4OiAyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAzMDBweDtcbiAgYW5pbWF0aW9uOiBzaG93IDAuNXM7XG4gIG9wYWNpdHk6IDE7XG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcbn1cblxuI3Byb2plY3RzLmhpZGRlbiB7XG4gIHdpZHRoOiAwO1xuICBwYWRkaW5nOiAwO1xuICBvcGFjaXR5OiAwO1xuICBhbmltYXRpb246IGhpZGUgMC41cztcbn1cblxuI2hpZGUtaWNvbiB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuI25ldy1wcm9qZWN0LWJ0biB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAwLjVyZW0gMDtcbiAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KCM1MDY5NjUsICMwMDViOWMpO1xuICBjb2xvcjogI2ZmZjtcbiAgYm9yZGVyOiAzcHggc29saWQgIzAwN2QwYztcbiAgYm9yZGVyLXJhZGl1czogMC4ycmVtO1xuICBtYXJnaW46IDFyZW0gMCAwIDA7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuI2ljb25zIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgaGVpZ2h0OiAxMDBweDtcbn1cblxuI3Byb2plY3RzIGgyIHtcbiAgZm9udC1zaXplOiAxLjNyZW07XG4gIG1hcmdpbjogMXJlbSAwO1xufVxuXG4jcHJvamVjdHMtdWwsXG4jZHluYW1pYy11bCB7XG4gIHBhZGRpbmctbGVmdDogMDtcbn1cblxuI3Byb2plY3RzLXVsID4gbGksXG4jZHluYW1pYy11bCA+IGxpIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4jcHJvamVjdHMtdWwgPiBsaTo6bWFya2VyIHtcbiAgY29udGVudDogXCIjXCI7XG4gIGNvbG9yOiAjMDAwYWM0O1xufVxuXG4jZHluYW1pYy11bCA+IGxpOjptYXJrZXIge1xuICBjb2xvcjogIzAwMGFjNDtcbiAgY29udGVudDogXCJvXCI7XG59XG5cbiNwcm9qZWN0cy11bCA+IGxpLmFjdGl2ZSxcbiNkeW5hbWljLXVsID4gbGkuYWN0aXZlIHtcbiAgYm9yZGVyOiAzcHggZG91YmxlICM3NWZmNGI7XG59XG5cbiNwcm9qZWN0cy11bCA+IGxpLmFjdGl2ZTo6bWFya2VyLFxuI2R5bmFtaWMtdWwgPiBsaS5hY3RpdmU6Om1hcmtlciB7XG4gIGNvbG9yOiAjNzVmZjRiO1xufVxuXG5Aa2V5ZnJhbWVzIHNob3cge1xuICAwJSB7XG4gICAgd2lkdGg6IDA7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuICA4MCUge1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbiAgMTAwJSB7XG4gICAgd2lkdGg6IDMwMHB4O1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbn1cblxuQGtleWZyYW1lcyBoaWRlIHtcbiAgMCUge1xuICAgIHdpZHRoOiAzMDBweDtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG4gIDIwJSB7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuICAxMDAlIHtcbiAgICB3aWR0aDogMDtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG59XG5cbi8qIFxuXG5NQUlOIFNFQ1RJT05cblxuKi9cblxuI21haW4ge1xuICBmbGV4LWdyb3c6IDE7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIGFsaWduLWNvbnRlbnQ6IHNhZmUgY2VudGVyO1xuICBnYXA6IDFyZW07XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcGFkZGluZzogMjVweDtcbiAgb3ZlcmZsb3cteTogYXV0bztcbiAgbWFyZ2luLXRvcDogMTAwcHg7XG59XG5cbiNhZGQtaXRlbSB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYm90dG9tOiAycmVtO1xuICBsZWZ0OiA1MCU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgei1pbmRleDogMTtcbn1cblxuLml0ZW0ge1xuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XG4gIHdpZHRoOiAzMDBweDtcbiAgaGVpZ2h0OiAzMDBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogc3RyZXRjaDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBib3gtc2hhZG93OiAwIDAgNXB4ICMwMDA7XG4gIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudCgjM2QzZDNkLCAjNTA2OTY1KTtcbiAgcGFkZGluZzogMjBweDtcbn1cblxuLml0ZW0gPiBkaXYge1xuICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoI2U3ZTdlNywgI2JhYmFiYSk7XG4gIHBhZGRpbmc6IDAuM3JlbSAxcmVtO1xuICBib3gtc2hhZG93OiAwIDAgM3B4ICMwMDA7XG59XG5cbi5pdGVtID4gZGl2Om50aC1jaGlsZCgyKSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgb3ZlcmZsb3cteTogYXV0bztcbn1cblxuLmVkaXQtaXRlbSxcbi5kZWxldGUtaXRlbSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcbiAgYm94LXNoYWRvdzogMCAwIDNweCAjMDAwO1xufVxuXG4uZWRpdC1pdGVtIHtcbiAgbGVmdDogMDtcbiAgYmFja2dyb3VuZDogIzYwODFkYztcbn1cblxuLmVkaXQtaXRlbTphY3RpdmUsXG4uZGVsZXRlLWl0ZW06YWN0aXZlIHtcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDNweCAjMDAwO1xufVxuXG4uZGVsZXRlLWl0ZW0ge1xuICByaWdodDogMDtcbiAgYmFja2dyb3VuZDogI2ZmMjAyMDtcbn1cblxuLmNvbXBsZXRlIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uY29tcGxldGUtYnRuIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG5cbi5jb21wbGV0ZS1idG4uZmFkZS1vdXQge1xuICBhbmltYXRpb246IGZhZGUtb3V0IDAuNXMgbGluZWFyO1xuICBvcGFjaXR5OiAwO1xufVxuXG5Aa2V5ZnJhbWVzIGZhZGUtb3V0IHtcbiAgMCUge1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbiAgMTAwJSB7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxufVxuXG4uY29tcGxldGUtYnRuLmZhZGUtaW4ge1xuICBhbmltYXRpb246IGZhZGUtaW4gMC41cyBsaW5lYXI7XG4gIG9wYWNpdHk6IDE7XG59XG5cbkBrZXlmcmFtZXMgZmFkZS1pbiB7XG4gIDAlIHtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG4gIDEwMCUge1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbn1cblxuI2FjdGl2ZS1wcm9qZWN0IHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgjM2QzZDNkLCAjMmEyZjk2KTtcbiAgY29sb3I6ICNmZmY7XG4gIHotaW5kZXg6IDE7XG59XG5cbiNtZW51LWljb24ge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbiNzaGVldC1zdGFjayB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLyogXG5cbklURU0gTU9EQUxcblxuKi9cblxuI2l0ZW0tbW9kYWwge1xuICBkaXNwbGF5OiBmbGV4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiA3MCU7XG4gIG1pbi1oZWlnaHQ6IDYwJTtcbiAgdG9wOiAyMCU7XG4gIGxlZnQ6IDE1JTtcbiAgYm9yZGVyLXJhZGl1czogMnJlbTtcbiAgcGFkZGluZzogMS41cmVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgjNjA3YmNlLCAjNDQ1NzkxKTtcbiAgYm94LXNoYWRvdzogMC41cmVtIDAuNXJlbSAxcmVtIC0wLjVyZW0gIzYwN2JjZTtcbiAgei1pbmRleDogMTA7XG59XG5cbiNpdGVtLW1vZGFsID4gZGl2IHtcbiAgbWFyZ2luLWJvdHRvbTogMC44cmVtO1xufVxuXG4jaXRlbS1tb2RhbCB1bCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogMC41cmVtO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbmxhYmVsIHtcbiAgZm9udC1zaXplOiAxLjJyZW07XG59XG5cbmRpdiA+IGxhYmVsIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcbn1cblxuI2l0ZW0tbW9kYWwgbGkge1xuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xuICBtYXJnaW46IDAuNHJlbSAwO1xuICBwYWRkaW5nOiAwLjVyZW07XG4gIHdpZHRoOiAyNSU7XG59XG5cbiNoaWdoLXByaW8tbGkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmYzNDM0O1xufVxuXG4jbWVkaXVtLXByaW8tbGkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZlMDMzO1xufVxuXG4jbG93LXByaW8tbGkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNmFmZjJhO1xufVxuXG4jaXRlbS1tb2RhbCB1bCB7XG4gIHBhZGRpbmc6IDA7XG59XG5cbnRleHRhcmVhIHtcbiAgcmVzaXplOiBub25lO1xufVxuXG5pbnB1dFt0eXBlPVwidGV4dFwiXSxcbnRleHRhcmVhIHtcbiAgd2lkdGg6IDgwJTtcbn1cblxuaW5wdXQ6bm90KGlucHV0W3R5cGU9XCJyYWRpb1wiXSksXG50ZXh0YXJlYSB7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgYm9yZGVyLXJhZGl1czogMC4zcmVtO1xuICBib3gtc2hhZG93OiAwIDAuM3JlbSAxcmVtIC0wLjNyZW0gIzRhNGE0YTtcbiAgYm9yZGVyOiBub25lO1xufVxuXG4jY29uZmlybS1pdGVtIHtcbiAgd2lkdGg6IDgwJTtcbiAgcGFkZGluZzogMC41cmVtO1xuICBmb250LXNpemU6IDEuMnJlbTtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCNiN2I3YjcsICNmZmYpO1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4vKiBcblxuUFJPSkVDVCBNT0RBTFxuXG4qL1xuXG4jcHJvamVjdC1tb2RhbCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAzMCU7XG4gIGxlZnQ6IDUwJTtcbiAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KCMxNjdlOGIsICMxZmE5YmIpO1xuICBib3JkZXItcmFkaXVzOiAycmVtO1xuICBwYWRkaW5nOiAxcmVtO1xufVxuXG4jcHJvamVjdC1tb2RhbCA+ICoge1xuICBtYXJnaW46IDFyZW0gMDtcbn1cblxuI2NvbmZpcm0tcHJvamVjdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwYWRkaW5nOiAwLjVyZW0gMnJlbTtcbiAgZm9udC1zaXplOiAxLjJyZW07XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg0NWRlZywgI2IwYjBiMCwgI2UyZTJlMik7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xuICBtYXJnaW46IDAgYXV0bztcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uY29sb3Ige1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBjNzAzO1xufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsU0FBUztFQUNULHNCQUFzQjtFQUN0Qjt3RUFDc0U7RUFDdEUsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG9CQUFvQjtFQUNwQixXQUFXO0VBQ1gsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixtQkFBbUI7QUFDckI7O0FBRUE7Ozs7Q0FJQzs7QUFFRDtFQUNFLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IsaUJBQWlCO0VBQ2pCLHdCQUF3QjtFQUN4QixhQUFhO0VBQ2IsVUFBVTtFQUNWLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osb0JBQW9CO0VBQ3BCLFVBQVU7RUFDVixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxRQUFRO0VBQ1IsVUFBVTtFQUNWLFVBQVU7RUFDVixvQkFBb0I7QUFD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QUN2Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixXQUFXO0VBQ1gsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsY0FBYztFQUNkLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLHFCQUFxQjtFQUNyQixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLFVBQVU7QUFDWjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLFVBQVU7QUFDWjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTs7RUFFRSxVQUFVO0FBQ1o7O0FBRUE7O0VBRUUsZUFBZTtFQUNmLHFCQUFxQjtFQUNyQix5Q0FBeUM7RUFDekMsWUFBWTtBQUNkOztBQUVBO0VBQ0UsVUFBVTtFQUNWLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsMENBQTBDO0VBQzFDLFlBQVk7RUFDWixxQkFBcUI7RUFDckIsZUFBZTtBQUNqQjs7QUFFQTs7OztDQUlDOztBQUVEO0VBQ0Usa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixTQUFTO0VBQ1QsNkNBQTZDO0VBQzdDLG1CQUFtQjtFQUNuQixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsY0FBYztFQUNkLG9CQUFvQjtFQUNwQixpQkFBaUI7RUFDakIsb0RBQW9EO0VBQ3BELFlBQVk7RUFDWixxQkFBcUI7RUFDckIsY0FBYztFQUNkLGVBQWU7QUFDakI7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0JcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxuICBtYXJnaW46IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgZm9udC1mYW1pbHk6IHN5c3RlbS11aSwgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBcXFwiU2Vnb2UgVUlcXFwiLCBSb2JvdG8sXFxuICAgIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsIFxcXCJPcGVuIFNhbnNcXFwiLCBcXFwiSGVsdmV0aWNhIE5ldWVcXFwiLCBzYW5zLXNlcmlmO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4jY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogc3RyZXRjaDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGJhY2tncm91bmQ6ICM1ZTVlNWU7XFxufVxcblxcbi8qIFxcblxcbiAgUFJPSkVDVFMgU0lERUJBUlxcblxcbiovXFxuXFxuI3Byb2plY3RzIHtcXG4gIGJhY2tncm91bmQ6ICM5Nzk3OTc7XFxuICBwYWRkaW5nOiAxcmVtO1xcbiAgZm9udC1zaXplOiAxLjJyZW07XFxuICBib3gtc2hhZG93OiAwIDAgNXB4ICMwMDA7XFxuICBwYWRkaW5nOiAxcmVtO1xcbiAgei1pbmRleDogMjtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHdpZHRoOiAzMDBweDtcXG4gIGFuaW1hdGlvbjogc2hvdyAwLjVzO1xcbiAgb3BhY2l0eTogMTtcXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcXG59XFxuXFxuI3Byb2plY3RzLmhpZGRlbiB7XFxuICB3aWR0aDogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBvcGFjaXR5OiAwO1xcbiAgYW5pbWF0aW9uOiBoaWRlIDAuNXM7XFxufVxcblxcbiNoaWRlLWljb24ge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4jbmV3LXByb2plY3QtYnRuIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZzogMC41cmVtIDA7XFxuICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoIzUwNjk2NSwgIzAwNWI5Yyk7XFxuICBjb2xvcjogI2ZmZjtcXG4gIGJvcmRlcjogM3B4IHNvbGlkICMwMDdkMGM7XFxuICBib3JkZXItcmFkaXVzOiAwLjJyZW07XFxuICBtYXJnaW46IDFyZW0gMCAwIDA7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbiNpY29ucyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICBoZWlnaHQ6IDEwMHB4O1xcbn1cXG5cXG4jcHJvamVjdHMgaDIge1xcbiAgZm9udC1zaXplOiAxLjNyZW07XFxuICBtYXJnaW46IDFyZW0gMDtcXG59XFxuXFxuI3Byb2plY3RzLXVsLFxcbiNkeW5hbWljLXVsIHtcXG4gIHBhZGRpbmctbGVmdDogMDtcXG59XFxuXFxuI3Byb2plY3RzLXVsID4gbGksXFxuI2R5bmFtaWMtdWwgPiBsaSB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbiNwcm9qZWN0cy11bCA+IGxpOjptYXJrZXIge1xcbiAgY29udGVudDogXFxcIiNcXFwiO1xcbiAgY29sb3I6ICMwMDBhYzQ7XFxufVxcblxcbiNkeW5hbWljLXVsID4gbGk6Om1hcmtlciB7XFxuICBjb2xvcjogIzAwMGFjNDtcXG4gIGNvbnRlbnQ6IFxcXCJvXFxcIjtcXG59XFxuXFxuI3Byb2plY3RzLXVsID4gbGkuYWN0aXZlLFxcbiNkeW5hbWljLXVsID4gbGkuYWN0aXZlIHtcXG4gIGJvcmRlcjogM3B4IGRvdWJsZSAjNzVmZjRiO1xcbn1cXG5cXG4jcHJvamVjdHMtdWwgPiBsaS5hY3RpdmU6Om1hcmtlcixcXG4jZHluYW1pYy11bCA+IGxpLmFjdGl2ZTo6bWFya2VyIHtcXG4gIGNvbG9yOiAjNzVmZjRiO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIHNob3cge1xcbiAgMCUge1xcbiAgICB3aWR0aDogMDtcXG4gICAgb3BhY2l0eTogMDtcXG4gIH1cXG4gIDgwJSB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICB9XFxuICAxMDAlIHtcXG4gICAgd2lkdGg6IDMwMHB4O1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgfVxcbn1cXG5cXG5Aa2V5ZnJhbWVzIGhpZGUge1xcbiAgMCUge1xcbiAgICB3aWR0aDogMzAwcHg7XFxuICAgIG9wYWNpdHk6IDE7XFxuICB9XFxuICAyMCUge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIHdpZHRoOiAwO1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgfVxcbn1cXG5cXG4vKiBcXG5cXG5NQUlOIFNFQ1RJT05cXG5cXG4qL1xcblxcbiNtYWluIHtcXG4gIGZsZXgtZ3JvdzogMTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gIGFsaWduLWNvbnRlbnQ6IHNhZmUgY2VudGVyO1xcbiAgZ2FwOiAxcmVtO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgcGFkZGluZzogMjVweDtcXG4gIG92ZXJmbG93LXk6IGF1dG87XFxuICBtYXJnaW4tdG9wOiAxMDBweDtcXG59XFxuXFxuI2FkZC1pdGVtIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGJvdHRvbTogMnJlbTtcXG4gIGxlZnQ6IDUwJTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHotaW5kZXg6IDE7XFxufVxcblxcbi5pdGVtIHtcXG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXG4gIHdpZHRoOiAzMDBweDtcXG4gIGhlaWdodDogMzAwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgYm94LXNoYWRvdzogMCAwIDVweCAjMDAwO1xcbiAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KCMzZDNkM2QsICM1MDY5NjUpO1xcbiAgcGFkZGluZzogMjBweDtcXG59XFxuXFxuLml0ZW0gPiBkaXYge1xcbiAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KCNlN2U3ZTcsICNiYWJhYmEpO1xcbiAgcGFkZGluZzogMC4zcmVtIDFyZW07XFxuICBib3gtc2hhZG93OiAwIDAgM3B4ICMwMDA7XFxufVxcblxcbi5pdGVtID4gZGl2Om50aC1jaGlsZCgyKSB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBvdmVyZmxvdy15OiBhdXRvO1xcbn1cXG5cXG4uZWRpdC1pdGVtLFxcbi5kZWxldGUtaXRlbSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDA7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxuICBib3gtc2hhZG93OiAwIDAgM3B4ICMwMDA7XFxufVxcblxcbi5lZGl0LWl0ZW0ge1xcbiAgbGVmdDogMDtcXG4gIGJhY2tncm91bmQ6ICM2MDgxZGM7XFxufVxcblxcbi5lZGl0LWl0ZW06YWN0aXZlLFxcbi5kZWxldGUtaXRlbTphY3RpdmUge1xcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDNweCAjMDAwO1xcbn1cXG5cXG4uZGVsZXRlLWl0ZW0ge1xcbiAgcmlnaHQ6IDA7XFxuICBiYWNrZ3JvdW5kOiAjZmYyMDIwO1xcbn1cXG5cXG4uY29tcGxldGUge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5jb21wbGV0ZS1idG4ge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbn1cXG5cXG4uY29tcGxldGUtYnRuLmZhZGUtb3V0IHtcXG4gIGFuaW1hdGlvbjogZmFkZS1vdXQgMC41cyBsaW5lYXI7XFxuICBvcGFjaXR5OiAwO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIGZhZGUtb3V0IHtcXG4gIDAlIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gIH1cXG4gIDEwMCUge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgfVxcbn1cXG5cXG4uY29tcGxldGUtYnRuLmZhZGUtaW4ge1xcbiAgYW5pbWF0aW9uOiBmYWRlLWluIDAuNXMgbGluZWFyO1xcbiAgb3BhY2l0eTogMTtcXG59XFxuXFxuQGtleWZyYW1lcyBmYWRlLWluIHtcXG4gIDAlIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gIH1cXG4gIDEwMCUge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgfVxcbn1cXG5cXG4jYWN0aXZlLXByb2plY3Qge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCMzZDNkM2QsICMyYTJmOTYpO1xcbiAgY29sb3I6ICNmZmY7XFxuICB6LWluZGV4OiAxO1xcbn1cXG5cXG4jbWVudS1pY29uIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuI3NoZWV0LXN0YWNrIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLyogXFxuXFxuSVRFTSBNT0RBTFxcblxcbiovXFxuXFxuI2l0ZW0tbW9kYWwge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHdpZHRoOiA3MCU7XFxuICBtaW4taGVpZ2h0OiA2MCU7XFxuICB0b3A6IDIwJTtcXG4gIGxlZnQ6IDE1JTtcXG4gIGJvcmRlci1yYWRpdXM6IDJyZW07XFxuICBwYWRkaW5nOiAxLjVyZW07XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoIzYwN2JjZSwgIzQ0NTc5MSk7XFxuICBib3gtc2hhZG93OiAwLjVyZW0gMC41cmVtIDFyZW0gLTAuNXJlbSAjNjA3YmNlO1xcbiAgei1pbmRleDogMTA7XFxufVxcblxcbiNpdGVtLW1vZGFsID4gZGl2IHtcXG4gIG1hcmdpbi1ib3R0b206IDAuOHJlbTtcXG59XFxuXFxuI2l0ZW0tbW9kYWwgdWwge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMC41cmVtO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG5sYWJlbCB7XFxuICBmb250LXNpemU6IDEuMnJlbTtcXG59XFxuXFxuZGl2ID4gbGFiZWwge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XFxufVxcblxcbiNpdGVtLW1vZGFsIGxpIHtcXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxuICBtYXJnaW46IDAuNHJlbSAwO1xcbiAgcGFkZGluZzogMC41cmVtO1xcbiAgd2lkdGg6IDI1JTtcXG59XFxuXFxuI2hpZ2gtcHJpby1saSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmYzNDM0O1xcbn1cXG5cXG4jbWVkaXVtLXByaW8tbGkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZTAzMztcXG59XFxuXFxuI2xvdy1wcmlvLWxpIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM2YWZmMmE7XFxufVxcblxcbiNpdGVtLW1vZGFsIHVsIHtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbnRleHRhcmVhIHtcXG4gIHJlc2l6ZTogbm9uZTtcXG59XFxuXFxuaW5wdXRbdHlwZT1cXFwidGV4dFxcXCJdLFxcbnRleHRhcmVhIHtcXG4gIHdpZHRoOiA4MCU7XFxufVxcblxcbmlucHV0Om5vdChpbnB1dFt0eXBlPVxcXCJyYWRpb1xcXCJdKSxcXG50ZXh0YXJlYSB7XFxuICBmb250LXNpemU6IDFyZW07XFxuICBib3JkZXItcmFkaXVzOiAwLjNyZW07XFxuICBib3gtc2hhZG93OiAwIDAuM3JlbSAxcmVtIC0wLjNyZW0gIzRhNGE0YTtcXG4gIGJvcmRlcjogbm9uZTtcXG59XFxuXFxuI2NvbmZpcm0taXRlbSB7XFxuICB3aWR0aDogODAlO1xcbiAgcGFkZGluZzogMC41cmVtO1xcbiAgZm9udC1zaXplOiAxLjJyZW07XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoI2I3YjdiNywgI2ZmZik7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi8qIFxcblxcblBST0pFQ1QgTU9EQUxcXG5cXG4qL1xcblxcbiNwcm9qZWN0LW1vZGFsIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMzAlO1xcbiAgbGVmdDogNTAlO1xcbiAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KCMxNjdlOGIsICMxZmE5YmIpO1xcbiAgYm9yZGVyLXJhZGl1czogMnJlbTtcXG4gIHBhZGRpbmc6IDFyZW07XFxufVxcblxcbiNwcm9qZWN0LW1vZGFsID4gKiB7XFxuICBtYXJnaW46IDFyZW0gMDtcXG59XFxuXFxuI2NvbmZpcm0tcHJvamVjdCB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHBhZGRpbmc6IDAuNXJlbSAycmVtO1xcbiAgZm9udC1zaXplOiAxLjJyZW07XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcsICNiMGIwYjAsICNlMmUyZTIpO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcbiAgbWFyZ2luOiAwIGF1dG87XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5jb2xvciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBjNzAzO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHtcbiAgVGFzayxcbiAgUHJvamVjdCxcbiAgY3VycmVudFByb2plY3RzTGlzdCxcbiAgVGVtcG9yYXJ5SWQsXG59IGZyb20gXCIuL2ludGVybmFsTG9naWNcIjtcbmltcG9ydCB7IG5ld1Rhc2tNb2RhbFJlbmRlciwgbmV3UHJvamVjdE1vZGFsUmVuZGVyIH0gZnJvbSBcIi4vbW9kYWxSZW5kZXJcIjtcbmltcG9ydCB7IGhpZGVTaWRlYmFyLCBzaG93U2lkZWJhciB9IGZyb20gXCIuL2xvYWRET01jcmFwXCI7XG5pbXBvcnQgeyBjaGFuZ2VBY3RpdmVQcm9qZWN0IH0gZnJvbSBcIi4vcmVuZGVyU2luZ2xlRWxcIjtcbi8vdGhpbmdzIHRvIGFkZDpcbi8vICAtZWRpdCBpdGVtIGJ0blxuLy8gIC1lZGl0IHByb2plY3Rcbi8vICAtZGVsZXRlIGl0ZW1cbi8vICAtZGVsZXRlIHByb2plY3RcbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVJcnJlbGV2YW50RXZlbnRMaXN0ZW5lcnMoKSB7XG4gIGNvbnN0IG5ld1Rhc2tCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZC1pdGVtXCIpO1xuICBjb25zdCBuZXdQcm9qZWN0QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuZXctcHJvamVjdC1idG5cIik7XG4gIGNvbnN0IGhpZGVTaWRlYmFyQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJoaWRlLWljb25cIik7XG4gIGNvbnN0IHNob3dTaWRlYmFyQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtZW51LWljb25cIik7XG5cbiAgY29uc3QgcHJvamVjdFVMID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0cy11bFwiKTtcblxuICBuZXdUYXNrQnRuLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBuZXdUYXNrTW9kYWxSZW5kZXIpO1xuICBuZXdQcm9qZWN0QnRuLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBuZXdQcm9qZWN0TW9kYWxSZW5kZXIpO1xuICBoaWRlU2lkZWJhckJ0bi5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgaGlkZVNpZGViYXIpO1xuICBzaG93U2lkZWJhckJ0bi5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgc2hvd1NpZGViYXIpO1xuXG4gIEFycmF5LmZyb20ocHJvamVjdFVMLmNoaWxkTm9kZXMpLmZvckVhY2goKGUpID0+IHtcbiAgICBlLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjaGFuZ2VBY3RpdmVQcm9qZWN0KTtcbiAgfSk7XG59XG4vL3RoaW5ncyB0byBhZGQ6XG4vLyAgLWVkaXQgaXRlbSBidG5cbi8vICAtZWRpdCBwcm9qZWN0XG4vLyAgLWRlbGV0ZSBpdGVtXG4vLyAgLWRlbGV0ZSBwcm9qZWN0XG5leHBvcnQgZnVuY3Rpb24gcmVpbnN0YXRlRXZlbnRMaXN0ZW5lcnMoKSB7XG4gIGNvbnN0IG5ld1Rhc2tCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZC1pdGVtXCIpO1xuICBjb25zdCBuZXdQcm9qZWN0QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuZXctcHJvamVjdC1idG5cIik7XG4gIGNvbnN0IGhpZGVTaWRlYmFyQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJoaWRlLWljb25cIik7XG4gIGNvbnN0IHNob3dTaWRlYmFyQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtZW51LWljb25cIik7XG5cbiAgY29uc3QgcHJvamVjdFVMID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0cy11bFwiKTtcblxuICBuZXdUYXNrQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBuZXdUYXNrTW9kYWxSZW5kZXIpO1xuICBuZXdQcm9qZWN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBuZXdQcm9qZWN0TW9kYWxSZW5kZXIpO1xuICBoaWRlU2lkZWJhckJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgaGlkZVNpZGViYXIpO1xuICBzaG93U2lkZWJhckJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgc2hvd1NpZGViYXIpO1xuXG4gIEFycmF5LmZyb20ocHJvamVjdFVMLmNoaWxkTm9kZXMpLmZvckVhY2goKGUpID0+IHtcbiAgICBlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjaGFuZ2VBY3RpdmVQcm9qZWN0KTtcbiAgfSk7XG59XG4iLCIvKiBcblxuICAtLU1FVEhPRFMtLVxuXG4qL1xuXG5jb25zdCBhZGROZXdJdGVtID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdGhpcy5jb250ZW50LnB1c2goaXRlbSk7XG59O1xuXG5jb25zdCByYW5kb21JZCA9IGZ1bmN0aW9uICh0eXBlKSB7XG4gIGNvbnN0IG51bSA9IGAke01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKX0ke01hdGguZmxvb3IoXG4gICAgTWF0aC5yYW5kb20oKSAqIDEwXG4gICl9JHtNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCl9YDtcbiAgcmV0dXJuIGAke3R5cGV9JHtudW19YDtcbn07XG5cbmNvbnN0IGNoZWNrRHVwbGljYXRlSXRlbSA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIGxldCBpZCA9IHJhbmRvbUlkKGl0ZW0udHlwZSk7XG4gIGZvciAoY29uc3QgcHJvamVjdCBvZiB0aGlzLmNvbnRlbnQpIHtcbiAgICBmb3IgKGNvbnN0IGVsIG9mIHByb2plY3QuY29udGVudCkge1xuICAgICAgaWYgKGVsLmlkICE9PSBcIlwiICYmIGVsLmlkID09PSBpZCkge1xuICAgICAgICB0aGlzLmNoZWNrRHVwbGljYXRlSXRlbShpdGVtKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaXRlbS5hc3NpZ25JZChpZCk7XG4gICAgcmV0dXJuO1xuICB9XG59O1xuXG5jb25zdCBjaGVja0R1cGxpY2F0ZVByb2plY3QgPSBmdW5jdGlvbiAoZWwpIHtcbiAgbGV0IGlkID0gcmFuZG9tSWQoZWwudHlwZSk7XG4gIGZvciAoY29uc3QgcHJvamVjdCBvZiB0aGlzLmNvbnRlbnQpIHtcbiAgICBpZiAocHJvamVjdC5pZCA9PT0gaWQgJiYgcHJvamVjdC5pZCkge1xuICAgICAgdGhpcy5jaGVja0R1cGxpY2F0ZVByb2plY3QoZWwpO1xuICAgIH1cbiAgfVxuICBlbC5hc3NpZ25JZChpZCk7XG4gIHJldHVybjtcbn07XG5cbmNvbnN0IGFzc2lnbklkID0gZnVuY3Rpb24gKGlkKSB7XG4gIHRoaXMuaWQgPSBpZDtcbn07XG5cbmNvbnN0IHNldEFjdGl2ZVByb2plY3QgPSBmdW5jdGlvbiAoaXRlbSkge1xuICBpdGVtLmFjdGl2ZSA9IHRydWU7XG59O1xuXG5jb25zdCBzZXRJbmFjdGl2ZVByb2plY3RzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgZm9yIChjb25zdCBlbCBvZiB0aGlzLmNvbnRlbnQpIHtcbiAgICBlbC5hY3RpdmUgPSBmYWxzZTtcbiAgfVxufTtcblxuY29uc3QgY2hlY2tBY3RpdmVQcm9qZWN0ID0gZnVuY3Rpb24gKCkge1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuY29udGVudC5sZW5ndGg7IGkrKykge1xuICAgIGlmICh0aGlzLmNvbnRlbnRbaV0uYWN0aXZlID09PSB0cnVlKSB7XG4gICAgICBjb25zdCBhY3RpdmUgPSB0aGlzLmNvbnRlbnRbaV07XG4gICAgICByZXR1cm4gYWN0aXZlO1xuICAgIH1cbiAgfVxufTtcblxuY29uc3QgZWRpdEl0ZW0gPSBmdW5jdGlvbiAodGl0bGUsIGRlc2NyaXB0aW9uLCBkYXRlLCBwcmlvcml0eSkge1xuICBpZiAoZGVzY3JpcHRpb24gJiYgZGF0ZSAmJiBwcmlvcml0eSkge1xuICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICB0aGlzLmRhdGUgPSBkYXRlO1xuICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgfVxuICB0aGlzLnRpdGxlID0gdGl0bGU7XG59O1xuXG5jb25zdCBnZXRJdGVtID0gZnVuY3Rpb24gKGlkKSB7XG4gIGNvbnN0IGxlbiA9IHRoaXMuY29udGVudC5sZW5ndGg7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcbiAgICBpZiAodGhpcy5jb250ZW50W2ldLmlkID09PSBpZCkge1xuICAgICAgcmV0dXJuIHRoaXMuY29udGVudFtpXTtcbiAgICB9XG4gIH1cbn07XG5cbmNvbnN0IGRlbGV0ZUxpc3RJdGVtID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgbGV0IHBvcztcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmNvbnRlbnQubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAodGhpcy5jb250ZW50W2ldID09PSBpdGVtKSB7XG4gICAgICBwb3MgPSBpO1xuICAgIH1cbiAgfVxuICBpZiAocG9zICE9PSB1bmRlZmluZWQpIHtcbiAgICB0aGlzLmNvbnRlbnQuc3BsaWNlKHBvcywgMSk7XG4gICAgaXRlbS5kZWxUZW1wKCk7XG4gIH1cbn07XG5cbmNvbnN0IGRlbFRlbXAgPSBmdW5jdGlvbiAoKSB7XG4gIGZvciAoY29uc3QgcHJvcCBpbiB0aGlzKSB7XG4gICAgdGhpc1twcm9wXSA9IG51bGw7XG4gIH1cbn07XG5cbmNvbnN0IHNldFRlbXBJZCA9IGZ1bmN0aW9uIChpZCkge1xuICB0aGlzLmlkID0gaWQ7XG59O1xuXG5jb25zdCBzZXRDb21wbGV0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgdGhpcy5jb21wbGV0ZSA9ICF0aGlzLmNvbXBsZXRlO1xufTtcblxuY29uc3QgZ2V0UHJvamVjdEJ5SXRlbUlkID0gZnVuY3Rpb24gKGlkKSB7XG4gIGZvciAoY29uc3QgcHJvamVjdCBvZiB0aGlzLmNvbnRlbnQpIHtcbiAgICBjb25zdCBJdGVtR290dGVuID0gcHJvamVjdC5nZXRJdGVtKGlkKTtcbiAgICBpZiAoSXRlbUdvdHRlbikge1xuICAgICAgcmV0dXJuIHByb2plY3Q7XG4gICAgfVxuICB9XG59O1xuXG5jb25zdCBnZXRJdGVtQnlQcmlvcml0eSA9IGZ1bmN0aW9uIChwcmlvcml0eSkge1xuICBjb25zdCBhcnIgPSBbXTtcbiAgZm9yIChjb25zdCBwcm9qZWN0IG9mIHRoaXMuY29udGVudCkge1xuICAgIGZvciAoY29uc3QgaXRlbSBvZiBwcm9qZWN0LmNvbnRlbnQpIHtcbiAgICAgIGlmIChpdGVtLnByaW9yaXR5ID09PSBwcmlvcml0eSkge1xuICAgICAgICBhcnIucHVzaChpdGVtKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIGFycjtcbn07XG5cbmNvbnN0IGdldEl0ZW1CeUR1ZURhdGUgPSBmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IGFyciA9IFtdO1xuICBjb25zdCB0b2RheSA9IG5ldyBEYXRlKCk7XG4gIGZvciAoY29uc3QgcHJvamVjdCBvZiB0aGlzLmNvbnRlbnQpIHtcbiAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgcHJvamVjdC5jb250ZW50KSB7XG4gICAgICBjb25zdCBkYXRlID0gbmV3IERhdGUoaXRlbS5kYXRlKTtcbiAgICAgIGNvbnN0IGRheXNSZW1haW5pbmcgPSAoZGF0ZSAtIHRvZGF5KSAvIDg2NDAwMDAwO1xuICAgICAgaWYgKGRheXNSZW1haW5pbmcgPiAwICYmIGRheXNSZW1haW5pbmcgPCA3KSB7XG4gICAgICAgIGFyci5wdXNoKGl0ZW0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gYXJyO1xufTtcbi8qIFxuXG4gIC0tVEFTSyBDT05TVFJVQ1RPUi0tXG5cbiovXG5cbmV4cG9ydCBmdW5jdGlvbiBUYXNrKHRpdGxlLCBkZXNjcmlwdGlvbiwgZGF0ZSwgcHJpb3JpdHkpIHtcbiAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gIHRoaXMuZGF0ZSA9IGRhdGU7XG4gIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgdGhpcy50eXBlID0gXCJUXCI7XG4gIHRoaXMuaWQgPSBcIlwiO1xuICB0aGlzLmNvbXBsZXRlID0gZmFsc2U7XG59XG5cblRhc2sucHJvdG90eXBlLmVkaXRJdGVtID0gZWRpdEl0ZW07XG5UYXNrLnByb3RvdHlwZS5kZWxUZW1wID0gZGVsVGVtcDtcblRhc2sucHJvdG90eXBlLnNldENvbXBsZXRlID0gc2V0Q29tcGxldGU7XG5UYXNrLnByb3RvdHlwZS5hc3NpZ25JZCA9IGFzc2lnbklkO1xuXG4vKiBcblxuICAtLVBST0pFQ1QgQ09OU1RSVUNUT1ItLVxuXG4qL1xuXG5leHBvcnQgZnVuY3Rpb24gUHJvamVjdCh0aXRsZSkge1xuICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gIHRoaXMudHlwZSA9IFwiUFwiO1xuICB0aGlzLmFjdGl2ZSA9IGZhbHNlO1xuICB0aGlzLmNvbnRlbnQgPSBbXTtcbiAgdGhpcy5pZCA9IFwiXCI7XG59XG5cblByb2plY3QucHJvdG90eXBlLmFkZE5ld0l0ZW0gPSBhZGROZXdJdGVtO1xuUHJvamVjdC5wcm90b3R5cGUucmFuZG9tSWQgPSByYW5kb21JZDtcblByb2plY3QucHJvdG90eXBlLmFzc2lnbklkID0gYXNzaWduSWQ7XG5Qcm9qZWN0LnByb3RvdHlwZS5lZGl0SXRlbSA9IGVkaXRJdGVtO1xuUHJvamVjdC5wcm90b3R5cGUuZ2V0SXRlbSA9IGdldEl0ZW07XG5Qcm9qZWN0LnByb3RvdHlwZS5kZWxldGVMaXN0SXRlbSA9IGRlbGV0ZUxpc3RJdGVtO1xuXG4vKiBcblxuICAtLVBST0pFQ1RTIEFSUkFZIENPTlNUUlVDVE9SLS1cblxuKi9cblxuZXhwb3J0IGZ1bmN0aW9uIFByb2plY3RzQXJyKCkge1xuICB0aGlzLmNvbnRlbnQgPSBbXTtcbn1cblByb2plY3RzQXJyLnByb3RvdHlwZS5hZGROZXdJdGVtID0gYWRkTmV3SXRlbTtcblByb2plY3RzQXJyLnByb3RvdHlwZS5jaGVja0R1cGxpY2F0ZUl0ZW0gPSBjaGVja0R1cGxpY2F0ZUl0ZW07XG5Qcm9qZWN0c0Fyci5wcm90b3R5cGUuY2hlY2tEdXBsaWNhdGVQcm9qZWN0ID0gY2hlY2tEdXBsaWNhdGVQcm9qZWN0O1xuUHJvamVjdHNBcnIucHJvdG90eXBlLmNoZWNrQWN0aXZlUHJvamVjdCA9IGNoZWNrQWN0aXZlUHJvamVjdDtcblByb2plY3RzQXJyLnByb3RvdHlwZS5zZXRBY3RpdmVQcm9qZWN0ID0gc2V0QWN0aXZlUHJvamVjdDtcblByb2plY3RzQXJyLnByb3RvdHlwZS5zZXRJbmFjdGl2ZVByb2plY3RzID0gc2V0SW5hY3RpdmVQcm9qZWN0cztcblByb2plY3RzQXJyLnByb3RvdHlwZS5nZXRJdGVtID0gZ2V0SXRlbTtcblByb2plY3RzQXJyLnByb3RvdHlwZS5nZXRQcm9qZWN0QnlJdGVtSWQgPSBnZXRQcm9qZWN0QnlJdGVtSWQ7XG5Qcm9qZWN0c0Fyci5wcm90b3R5cGUuZ2V0SXRlbUJ5UHJpb3JpdHkgPSBnZXRJdGVtQnlQcmlvcml0eTtcblByb2plY3RzQXJyLnByb3RvdHlwZS5nZXRJdGVtQnlEdWVEYXRlID0gZ2V0SXRlbUJ5RHVlRGF0ZTtcblxuLyogXG5cbiAgLS1URU1QT1JBUlkgT0JKIFRPIFNUT1JFIElELS1cblxuKi9cblxuZXhwb3J0IGZ1bmN0aW9uIFRlbXBvcmFyeUlkKGlkKSB7XG4gIHRoaXMuaWQgPSBpZDtcbn1cblRlbXBvcmFyeUlkLnByb3RvdHlwZS5kZWxUZW1wID0gZGVsVGVtcDtcblRlbXBvcmFyeUlkLnByb3RvdHlwZS5zZXRUZW1wSWQgPSBzZXRUZW1wSWQ7XG5cbmV4cG9ydCBjb25zdCBjdXJyZW50UHJvamVjdHNMaXN0ID0gbmV3IFByb2plY3RzQXJyKCk7XG5cbi8qIFxuXG4gIC0tVEVTVFMtLVxuXG4qL1xuXG5jb25zdCB3b3JrID0gbmV3IFByb2plY3QoXCJXb3JrXCIpO1xuY29uc3QgbWlzYyA9IG5ldyBQcm9qZWN0KFwiTWlzY2VsbGFuZW91c1wiKTtcbmNvbnN0IHdvcmsxID0gbmV3IFRhc2soXG4gIFwidGl0b2xvXCIsXG4gIFwiZGVzY3JpemlvbmUgZGkgc3RhIGNpcHBhIHN0YSBjZXBwYSBlIHN0YSBjaWFwcGFcIixcbiAgXCIyMDI0LTAyLTIwXCIsXG4gIFwiaFwiXG4pO1xuY29uc3Qgd29yazIgPSBuZXcgVGFzayhcbiAgXCJ0aXRvbG8yXCIsXG4gIFwiZGVzY3JpemlvbmUgZGkgc3RhIGNpcHBhIHN0YSBjZXBwYSBlIHN0YSBjaGlhcHBhXCIsXG4gIFwiMjAyNC0wMi0yNFwiLFxuICBcIm1cIlxuKTtcblxuY29uc3QgbWlzYzEgPSBuZXcgVGFzayhcIm1pc2MxXCIsIFwiZGVzYzFcIiwgXCIyMDI0LTAzLTAyXCIsIFwibFwiKTtcbmNvbnN0IG1pc2MyID0gbmV3IFRhc2soXCJtaXNjMlwiLCBcImRlc2MyXCIsIFwiMjAyNC0wMi0yMFwiLCBcImhcIik7XG5jb25zdCBtaXNjMyA9IG5ldyBUYXNrKFwibWlzYzNcIiwgXCJkZXNjM1wiLCBcIjIwMjQtMDItMTJcIiwgXCJtXCIpO1xuXG5jdXJyZW50UHJvamVjdHNMaXN0LmFkZE5ld0l0ZW0od29yayk7XG5jdXJyZW50UHJvamVjdHNMaXN0LmFkZE5ld0l0ZW0obWlzYyk7XG5cbndvcmsuYWRkTmV3SXRlbSh3b3JrMSk7XG53b3JrLmFkZE5ld0l0ZW0od29yazIpO1xuXG5taXNjLmFkZE5ld0l0ZW0obWlzYzEpO1xubWlzYy5hZGROZXdJdGVtKG1pc2MyKTtcbm1pc2MuYWRkTmV3SXRlbShtaXNjMyk7XG4iLCJpbXBvcnQgXCIuLi9zdHlsZS5jc3NcIjtcblxuaW1wb3J0IGFkZFNWRyBmcm9tIFwiLi4vaW1hZ2VzL2FkZC5zdmdcIjtcbmltcG9ydCBjb21wbGV0ZVNWRyBmcm9tIFwiLi4vaW1hZ2VzL2NvbXBsZXRlLnN2Z1wiO1xuaW1wb3J0IGluY29tcGxldGVTVkcgZnJvbSBcIi4uL2ltYWdlcy9pbmNvbXBsZXRlLnN2Z1wiO1xuXG5pbXBvcnQge1xuICBUYXNrLFxuICBQcm9qZWN0LFxuICBjdXJyZW50UHJvamVjdHNMaXN0LFxuICBUZW1wb3JhcnlJZCxcbn0gZnJvbSBcIi4vaW50ZXJuYWxMb2dpY1wiO1xuaW1wb3J0IHtcbiAgcmVuZGVyU2lkZWJhcixcbiAgcmVuZGVyU2luZ2xlUHJvamVjdCxcbiAgcmVuZGVyU2luZ2xlVGFzayxcbiAgcmVuZGVyVG9wQ29udGVudCxcbn0gZnJvbSBcIi4vcmVuZGVyU2luZ2xlRWxcIjtcbmltcG9ydCB7XG4gIHByb2plY3RNb2RhbENyZWF0ZUVsZW1lbnQsXG4gIG5ld1Rhc2tNb2RhbFJlbmRlcixcbiAgZWRpdFRhc2tNb2RhbFJlbmRlcixcbiAgbmV3UHJvamVjdE1vZGFsUmVuZGVyLFxuICBlZGl0UHJvamVjdE1vZGFsUmVuZGVyLFxufSBmcm9tIFwiLi9tb2RhbFJlbmRlclwiO1xuXG5jb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRhaW5lclwiKTtcblxuZXhwb3J0IGNvbnN0IGl0ZW1FZGl0ZWQgPSBuZXcgVGVtcG9yYXJ5SWQoXCJcIik7XG5cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJDb250YWluZXIoKSB7XG4gIGNvbnN0IHNpZGViYXJSZW5kZXJlZCA9IHJlbmRlclNpZGViYXIoKTtcbiAgY29uc3QgYWN0aXZlUHJvamVjdCA9IHdoaWNoSXNBY3RpdmUoY3VycmVudFByb2plY3RzTGlzdCk7XG4gIGNvbnN0IG1haW4gPSByZW5kZXJNYWluKGFjdGl2ZVByb2plY3QuY29udGVudCwgYWN0aXZlUHJvamVjdC50aXRsZSk7XG5cbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKHNpZGViYXJSZW5kZXJlZCk7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChtYWluKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlck1haW4oZ3JvdXAsIHRpdGxlKSB7XG4gIGNvbnN0IG5ld01haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAvL2NvbnN0IGFjdGl2ZVByb2plY3QgPSB3aGljaElzQWN0aXZlKGN1cnJlbnRQcm9qZWN0c0xpc3QpO1xuICBjb25zdCB0b3BDb250ZW50ID0gcmVuZGVyVG9wQ29udGVudCh0aXRsZSk7XG4gIGNvbnN0IGFkZEl0ZW1JbWcgPSBuZXcgSW1hZ2UoKTtcblxuICBuZXdNYWluLmlkID0gXCJtYWluXCI7XG5cbiAgcmVuZGVyVGFza3MoZ3JvdXAsIG5ld01haW4pOyAvL2FjdGl2ZVByb2plY3RcblxuICBhZGRJdGVtSW1nLmlkID0gXCJhZGQtaXRlbVwiO1xuICBhZGRJdGVtSW1nLnNyYyA9IGFkZFNWRztcbiAgYWRkSXRlbUltZy5zdHlsZS5tYXJnaW5MZWZ0ID0gYCR7LShhZGRJdGVtSW1nLm9mZnNldFdpZHRoIC8gMil9cHhgO1xuXG4gIG5ld01haW4uYXBwZW5kQ2hpbGQoYWRkSXRlbUltZyk7XG4gIG5ld01haW4uYXBwZW5kQ2hpbGQodG9wQ29udGVudCk7XG5cbiAgYWRkSXRlbUltZy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgbmV3VGFza01vZGFsUmVuZGVyKTtcblxuICByZXR1cm4gbmV3TWFpbjtcbn1cblxuZnVuY3Rpb24gcmVuZGVyVGFza3MoYXJyLCBET01lbCkge1xuICBpZiAoYXJyLmxlbmd0aCA+IDApIHtcbiAgICBmb3IgKGNvbnN0IHRhc2sgb2YgYXJyKSB7XG4gICAgICBET01lbC5hcHBlbmRDaGlsZChyZW5kZXJTaW5nbGVUYXNrKHRhc2spKTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHdoaWNoSXNBY3RpdmUocHJvamVjdHMpIHtcbiAgbGV0IGlzQWN0aXZlID0gcHJvamVjdHMuY2hlY2tBY3RpdmVQcm9qZWN0KCk7XG4gIGlmIChpc0FjdGl2ZSkge1xuICAgIHJldHVybiBpc0FjdGl2ZTtcbiAgfSBlbHNlIHtcbiAgICBwcm9qZWN0cy5zZXRBY3RpdmVQcm9qZWN0KHByb2plY3RzLmNvbnRlbnRbMF0pO1xuICAgIGlzQWN0aXZlID0gcHJvamVjdHMuY2hlY2tBY3RpdmVQcm9qZWN0KCk7XG4gICAgcmV0dXJuIGlzQWN0aXZlO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBoaWRlU2lkZWJhcigpIHtcbiAgY29uc3Qgc2lkZWJhciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdHNcIik7XG5cbiAgc2lkZWJhci5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHNob3dTaWRlYmFyKCkge1xuICBjb25zdCBzaWRlYmFyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0c1wiKTtcblxuICBzaWRlYmFyLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXRQcmlvcml0eShET01lbCwgaXRlbSkge1xuICBpZiAoaXRlbS5wcmlvcml0eSA9PT0gXCJoXCIpIHtcbiAgICBET01lbC5zdHlsZS5iYWNrZ3JvdW5kID0gXCIjZmYzNDM0XCI7XG4gICAgRE9NZWwudGV4dENvbnRlbnQgPSBcIkhpZ2ggcHJpb3JpdHlcIjtcbiAgfSBlbHNlIGlmIChpdGVtLnByaW9yaXR5ID09PSBcIm1cIikge1xuICAgIERPTWVsLnN0eWxlLmJhY2tncm91bmQgPSBcIiNmZmUwMzNcIjtcbiAgICBET01lbC50ZXh0Q29udGVudCA9IFwiTWVkaXVtIHByaW9yaXR5XCI7XG4gIH0gZWxzZSB7XG4gICAgRE9NZWwuc3R5bGUuYmFja2dyb3VuZCA9IFwiIzZhZmYyYVwiO1xuICAgIERPTWVsLnRleHRDb250ZW50ID0gXCJMb3cgcHJpb3JpdHlcIjtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVsZXRlSXRlbShlKSB7XG4gIGNvbnN0IGFjdGl2ZVByb2plY3QgPSBjdXJyZW50UHJvamVjdHNMaXN0LmdldFByb2plY3RCeUl0ZW1JZChcbiAgICBlLnRhcmdldC5wYXJlbnROb2RlLmlkXG4gICk7IC8vd2hpY2hJc0FjdGl2ZShjdXJyZW50UHJvamVjdHNMaXN0KTtcbiAgY29uc3QgdGFzayA9IGFjdGl2ZVByb2plY3QuZ2V0SXRlbShlLnRhcmdldC5wYXJlbnROb2RlLmlkKTtcbiAgZS50YXJnZXQucGFyZW50Tm9kZS5yZW1vdmUoKTtcbiAgYWN0aXZlUHJvamVjdC5kZWxldGVMaXN0SXRlbSh0YXNrKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNldENvbXBsZXRlT3B0aW9uKHRhc2ssIERPTWVsKSB7XG4gIGlmICh0YXNrLmNvbXBsZXRlKSB7XG4gICAgRE9NZWwuc3JjID0gY29tcGxldGVTVkc7XG4gIH0gZWxzZSB7XG4gICAgRE9NZWwuc3JjID0gaW5jb21wbGV0ZVNWRztcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gY2hhbmdlQ29tcGxldGVPcHRpb24oZSkge1xuICBjb25zdCBpZCA9IGUudGFyZ2V0LnBhcmVudE5vZGUucGFyZW50Tm9kZS5pZDtcbiAgY29uc3QgcHJvamVjdCA9IGN1cnJlbnRQcm9qZWN0c0xpc3QuZ2V0UHJvamVjdEJ5SXRlbUlkKGlkKTsgLy93aGljaElzQWN0aXZlKGN1cnJlbnRQcm9qZWN0c0xpc3QpO1xuICBjb25zdCB0YXNrID0gcHJvamVjdC5nZXRJdGVtKGlkKTtcblxuICB0YXNrLnNldENvbXBsZXRlKCk7XG5cbiAgZS50YXJnZXQuY2xhc3NMaXN0ICs9IFwiIGZhZGUtb3V0XCI7XG4gIGUudGFyZ2V0LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjaGFuZ2VDb21wbGV0ZU9wdGlvbik7XG5cbiAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgc2V0Q29tcGxldGVPcHRpb24odGFzaywgZS50YXJnZXQpO1xuICAgIGUudGFyZ2V0LmNsYXNzTmFtZSA9IFwiY29tcGxldGUtYnRuIGZhZGUtaW5cIjtcblxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgZS50YXJnZXQuY2xhc3NOYW1lID0gXCJjb21wbGV0ZS1idG5cIjtcbiAgICAgIGUudGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjaGFuZ2VDb21wbGV0ZU9wdGlvbik7XG4gICAgfSwgNTAwKTtcbiAgfSwgNTAwKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlYWN0aXZhdGVBbGxQcm9qZWN0cyhlKSB7XG4gIGNvbnN0IHByb2plY3RVbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdHMtdWxcIik7XG4gIGN1cnJlbnRQcm9qZWN0c0xpc3Quc2V0SW5hY3RpdmVQcm9qZWN0cygpO1xuICBBcnJheS5mcm9tKHByb2plY3RVbC5jaGlsZE5vZGVzKS5mb3JFYWNoKChlbCkgPT4ge1xuICAgIGVsLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gIH0pO1xuICBpZiAoIWUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcImFjdGl2ZVwiKSkge1xuICAgIEFycmF5LmZyb20oZS50YXJnZXQucGFyZW50Tm9kZS5jaGlsZHJlbikuZm9yRWFjaCgoZWwpID0+IHtcbiAgICAgIGlmIChlbCAhPT0gZS50YXJnZXQpIHtcbiAgICAgICAgZWwuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNob3dHcm91cChlKSB7XG4gIGNvbnN0IGxhdGVNYWluID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluXCIpO1xuICBsZXQgbmV3TWFpbjtcbiAgaWYgKGUudGFyZ2V0KSB7XG4gICAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcInByaW9yaXR5LWdyb3VwXCIpKSB7XG4gICAgICBjb25zdCBwID0gZS50YXJnZXQuaWRbMV07XG4gICAgICBuZXdNYWluID0gcmVuZGVyTWFpbihcbiAgICAgICAgY3VycmVudFByb2plY3RzTGlzdC5nZXRJdGVtQnlQcmlvcml0eShwKSxcbiAgICAgICAgZS50YXJnZXQudGV4dENvbnRlbnRcbiAgICAgICk7XG4gICAgfSBlbHNlIGlmIChlLnRhcmdldC5pZCA9PT0gXCJuZXh0LXdlZWtcIikge1xuICAgICAgbmV3TWFpbiA9IHJlbmRlck1haW4oXG4gICAgICAgIGN1cnJlbnRQcm9qZWN0c0xpc3QuZ2V0SXRlbUJ5RHVlRGF0ZSgpLFxuICAgICAgICBlLnRhcmdldC50ZXh0Q29udGVudFxuICAgICAgKTtcbiAgICB9XG4gIH0gZWxzZSBpZiAoZS5jbGFzc0xpc3QuY29udGFpbnMoXCJwcmlvcml0eS1ncm91cFwiKSkge1xuICAgIGNvbnN0IHAgPSBlLmlkWzFdO1xuICAgIG5ld01haW4gPSByZW5kZXJNYWluKFxuICAgICAgY3VycmVudFByb2plY3RzTGlzdC5nZXRJdGVtQnlQcmlvcml0eShwKSxcbiAgICAgIGUudGV4dENvbnRlbnRcbiAgICApO1xuICB9IGVsc2UgaWYgKGUuaWQgPT09IFwibmV4dC13ZWVrXCIpIHtcbiAgICBuZXdNYWluID0gcmVuZGVyTWFpbihjdXJyZW50UHJvamVjdHNMaXN0LmdldEl0ZW1CeUR1ZURhdGUoKSwgZS50ZXh0Q29udGVudCk7XG4gIH1cblxuICBsYXRlTWFpbi5yZW1vdmUoKTtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKG5ld01haW4pO1xuICBjb25zdCBlZGl0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlZGl0LXByb2plY3RcIik7XG4gIGVkaXQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGVkaXRQcm9qZWN0TW9kYWxSZW5kZXIpO1xufVxuLyogXCJkaHBcIlxuXCJkbXBcIlxuXCJkbHBcIiAqL1xuIiwiaW1wb3J0IHsgd2hpY2hJc0FjdGl2ZSwgaXRlbUVkaXRlZCwgc2hvd0dyb3VwIH0gZnJvbSBcIi4vbG9hZERPTWNyYXBcIjtcbmltcG9ydCB7IHJlbmRlclNpbmdsZVByb2plY3QsIHJlbmRlclRvcENvbnRlbnQgfSBmcm9tIFwiLi9yZW5kZXJTaW5nbGVFbFwiO1xuaW1wb3J0IHtcbiAgVGFzayxcbiAgUHJvamVjdCxcbiAgY3VycmVudFByb2plY3RzTGlzdCxcbiAgVGVtcG9yYXJ5SWQsXG59IGZyb20gXCIuL2ludGVybmFsTG9naWNcIjtcbmltcG9ydCB7IHJlbmRlclNpbmdsZVRhc2sgfSBmcm9tIFwiLi9yZW5kZXJTaW5nbGVFbFwiO1xuXG5leHBvcnQgZnVuY3Rpb24gY29uZmlybU5ld1Rhc2soKSB7XG4gIGNvbnN0IG1haW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1haW5cIik7XG4gIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIml0ZW0tbW9kYWxcIik7XG4gIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0aXRsZS1pbnB1dFwiKS52YWx1ZTtcbiAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRlc2NyaXB0aW9uLWlucHV0XCIpLnZhbHVlO1xuICBjb25zdCBkYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkYXRlLWlucHV0XCIpLnZhbHVlO1xuICBjb25zdCBwcmlvcml0aWVzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeU5hbWUoXCJwcmlvcml0eVwiKTtcblxuICBsZXQgcHJpb3JpdHk7XG4gIEFycmF5LmZyb20ocHJpb3JpdGllcykuZm9yRWFjaCgoZSkgPT4ge1xuICAgIGlmIChlLmNoZWNrZWQpIHtcbiAgICAgIHByaW9yaXR5ID0gZS5pZFswXTtcbiAgICB9XG4gIH0pO1xuXG4gIGNvbnN0IGFjdGl2ZVByb2plY3QgPSB3aGljaElzQWN0aXZlKGN1cnJlbnRQcm9qZWN0c0xpc3QpO1xuICBjb25zdCBuZXdUYXNrID0gbmV3IFRhc2sodGl0bGUsIGRlc2NyaXB0aW9uLCBkYXRlLCBwcmlvcml0eSk7XG5cbiAgYWN0aXZlUHJvamVjdC5hZGROZXdJdGVtKG5ld1Rhc2spO1xuICBjb25zdCB0YXNrRE9NID0gcmVuZGVyU2luZ2xlVGFzayhuZXdUYXNrKTtcbiAgbWFpbi5hcHBlbmRDaGlsZCh0YXNrRE9NKTtcbiAgZm9ybS5yZW1vdmUoKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbmZpcm1FZGl0VGFzaygpIHtcbiAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFpblwiKTtcbiAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaXRlbS1tb2RhbFwiKTtcbiAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRpdGxlLWlucHV0XCIpLnZhbHVlO1xuICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGVzY3JpcHRpb24taW5wdXRcIikudmFsdWU7XG4gIGNvbnN0IGRhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRhdGUtaW5wdXRcIikudmFsdWU7XG4gIGNvbnN0IHByaW9yaXRpZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5TmFtZShcInByaW9yaXR5XCIpO1xuICBjb25zdCBhY3RpdmVQcm9qZWN0ID0gY3VycmVudFByb2plY3RzTGlzdC5nZXRQcm9qZWN0QnlJdGVtSWQoaXRlbUVkaXRlZC5pZCk7IC8vd2hpY2hJc0FjdGl2ZShjdXJyZW50UHJvamVjdHNMaXN0KTtcbiAgY29uc3QgZHluYW1pY0dyb3VwVWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImR5bmFtaWMtdWxcIik7XG4gIGNvbnN0IHRhc2sgPSBhY3RpdmVQcm9qZWN0LmdldEl0ZW0oaXRlbUVkaXRlZC5pZCk7XG4gIGNvbnN0IERPTUl0ZW0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpdGVtRWRpdGVkLmlkKTtcbiAgbGV0IHByaW9yaXR5O1xuXG4gIEFycmF5LmZyb20ocHJpb3JpdGllcykuZm9yRWFjaCgoZSkgPT4ge1xuICAgIGlmIChlLmNoZWNrZWQpIHtcbiAgICAgIHByaW9yaXR5ID0gZS5pZFswXTtcbiAgICB9XG4gIH0pO1xuXG4gIHRhc2suZWRpdEl0ZW0odGl0bGUsIGRlc2NyaXB0aW9uLCBkYXRlLCBwcmlvcml0eSk7XG5cbiAgbGV0IHBvcztcbiAgQXJyYXkuZnJvbShtYWluLmNoaWxkTm9kZXMpLmZvckVhY2goKGUpID0+IHtcbiAgICBpZiAoZS5pZCA9PT0gRE9NSXRlbS5pZCkge1xuICAgICAgcG9zID0gQXJyYXkuZnJvbShtYWluLmNoaWxkTm9kZXMpLmluZGV4T2YoRE9NSXRlbSk7XG4gICAgfVxuICB9KTtcblxuICBpZiAoY3VycmVudFByb2plY3RzTGlzdC5jaGVja0FjdGl2ZVByb2plY3QoKSkge1xuICAgIERPTUl0ZW0ucmVtb3ZlKCk7XG4gICAgbWFpbi5pbnNlcnRCZWZvcmUocmVuZGVyU2luZ2xlVGFzayh0YXNrKSwgbWFpbi5jaGlsZHJlbltwb3NdKTtcbiAgfSBlbHNlIHtcbiAgICBBcnJheS5mcm9tKGR5bmFtaWNHcm91cFVsLmNoaWxkcmVuKS5mb3JFYWNoKChlKSA9PiB7XG4gICAgICBpZiAoZS5jbGFzc0xpc3QuY29udGFpbnMoXCJhY3RpdmVcIikpIHtcbiAgICAgICAgc2hvd0dyb3VwKGUpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgZm9ybS5yZW1vdmUoKTtcbiAgaXRlbUVkaXRlZC5zZXRUZW1wSWQoXCJcIik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb25maXJtTmV3UHJvamVjdCgpIHtcbiAgY29uc3QgcHJvamVjdFVMID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0cy11bFwiKTtcbiAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdC1tb2RhbFwiKTtcbiAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3QtbmFtZVwiKS52YWx1ZTtcbiAgY29uc3QgbmV3UHJvamVjdCA9IG5ldyBQcm9qZWN0KHRpdGxlKTtcblxuICBjdXJyZW50UHJvamVjdHNMaXN0LmFkZE5ld0l0ZW0obmV3UHJvamVjdCk7XG5cbiAgY29uc3QgbGkgPSByZW5kZXJTaW5nbGVQcm9qZWN0KG5ld1Byb2plY3QpO1xuICBwcm9qZWN0VUwuYXBwZW5kQ2hpbGQobGkpO1xuXG4gIGZvcm0ucmVtb3ZlKCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb25maXJtRWRpdFByb2plY3QoKSB7XG4gIGNvbnN0IGxhdGVUb3BDb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhY3RpdmUtcHJvamVjdFwiKTtcbiAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFpblwiKTtcbiAgY29uc3QgcHJvamVjdFVMID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0cy11bFwiKTtcbiAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdC1tb2RhbFwiKTtcbiAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3QtbmFtZVwiKS52YWx1ZTtcbiAgY29uc3QgcHJvamVjdCA9IGN1cnJlbnRQcm9qZWN0c0xpc3QuZ2V0SXRlbShpdGVtRWRpdGVkLmlkKTsgLy93aGljaElzQWN0aXZlKGN1cnJlbnRQcm9qZWN0c0xpc3QpO1xuXG4gIHByb2plY3QuZWRpdEl0ZW0odGl0bGUpO1xuXG4gIEFycmF5LmZyb20ocHJvamVjdFVMLmNoaWxkcmVuKS5mb3JFYWNoKChlKSA9PiB7XG4gICAgaWYgKGUuaWQgPT09IHByb2plY3QuaWQpIHtcbiAgICAgIGUudGV4dENvbnRlbnQgPSBwcm9qZWN0LnRpdGxlO1xuICAgIH1cbiAgfSk7XG5cbiAgZm9ybS5yZW1vdmUoKTtcbiAgbGF0ZVRvcENvbnRlbnQucmVtb3ZlKCk7XG4gIG1haW4uYXBwZW5kQ2hpbGQocmVuZGVyVG9wQ29udGVudCh3aGljaElzQWN0aXZlKGN1cnJlbnRQcm9qZWN0c0xpc3QpLnRpdGxlKSk7XG59XG4iLCJpbXBvcnQgeyBpdGVtRWRpdGVkLCB3aGljaElzQWN0aXZlIH0gZnJvbSBcIi4vbG9hZERPTWNyYXBcIjtcbmltcG9ydCB7IHJlbW92ZUlycmVsZXZhbnRFdmVudExpc3RlbmVycyB9IGZyb20gXCIuL2V2ZW50TGlzdGVuZXJzTWFuYWdlclwiO1xuaW1wb3J0IHsgdmFsaWRhdGVOZXdNb2RhbCwgdmFsaWRhdGVFZGl0TW9kYWwgfSBmcm9tIFwiLi9tb2RhbFZhbGlkYXRpb25cIjtcbmltcG9ydCB7XG4gIFRhc2ssXG4gIFByb2plY3QsXG4gIGN1cnJlbnRQcm9qZWN0c0xpc3QsXG4gIFRlbXBvcmFyeUlkLFxufSBmcm9tIFwiLi9pbnRlcm5hbExvZ2ljXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBuZXdUYXNrTW9kYWxSZW5kZXIoKSB7XG4gIGNvbnN0IGVsTGlzdCA9IG5ld1Rhc2tNb2RhbENyZWF0ZUVsZW1lbnRzKCk7XG4gIGNvbnN0IGZvcm1Ub1JlbmRlciA9IG5ld1Rhc2tSZW5kZXJMb29wcyhlbExpc3QpO1xuXG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChmb3JtVG9SZW5kZXIpO1xuICByZW1vdmVJcnJlbGV2YW50RXZlbnRMaXN0ZW5lcnMoKTtcblxuICBmb3JtVG9SZW5kZXIuYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCB2YWxpZGF0ZU5ld01vZGFsKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGVkaXRUYXNrTW9kYWxSZW5kZXIoZSkge1xuICBjb25zdCBpZCA9IGUudGFyZ2V0LnBhcmVudE5vZGUuaWQ7XG5cbiAgY29uc3QgYWN0aXZlUHJvamVjdCA9IGN1cnJlbnRQcm9qZWN0c0xpc3QuZ2V0UHJvamVjdEJ5SXRlbUlkKFxuICAgIGUudGFyZ2V0LnBhcmVudE5vZGUuaWRcbiAgKTsgLy93aGljaElzQWN0aXZlKGN1cnJlbnRQcm9qZWN0c0xpc3QpO1xuICBjb25zdCB0YXNrVG9FZGl0ID0gYWN0aXZlUHJvamVjdC5nZXRJdGVtKGlkKTtcbiAgY29uc3QgZWxMaXN0ID0gbmV3VGFza01vZGFsQ3JlYXRlRWxlbWVudHMoKTtcbiAgY29uc3QgZm9ybVRvUmVuZGVyID0gbmV3VGFza1JlbmRlckxvb3BzKGVsTGlzdCk7XG5cbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKGZvcm1Ub1JlbmRlcik7XG5cbiAgY29uc3QgdGl0bGVJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGl0bGUtaW5wdXRcIik7XG4gIGNvbnN0IGRlc2NyaXB0aW9uSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRlc2NyaXB0aW9uLWlucHV0XCIpO1xuICBjb25zdCBkYXRlSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRhdGUtaW5wdXRcIik7XG4gIGNvbnN0IGhpZ2hQUmFkaW8gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImhpZ2gtcHJpb3JpdHlcIik7XG4gIGNvbnN0IG1lZGl1bVBSYWRpbyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWVkaXVtLXByaW9yaXR5XCIpO1xuICBjb25zdCBsb3dQUmFkaW8gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxvdy1wcmlvcml0eVwiKTtcblxuICB0aXRsZUlucHV0LnZhbHVlID0gdGFza1RvRWRpdC50aXRsZTtcbiAgZGVzY3JpcHRpb25JbnB1dC52YWx1ZSA9IHRhc2tUb0VkaXQuZGVzY3JpcHRpb247XG4gIGRhdGVJbnB1dC52YWx1ZSA9IHRhc2tUb0VkaXQuZGF0ZTtcblxuICBzd2l0Y2ggKHRhc2tUb0VkaXQucHJpb3JpdHkpIHtcbiAgICBjYXNlIFwiaFwiOlxuICAgICAgaGlnaFBSYWRpby5zZXRBdHRyaWJ1dGUoXCJjaGVja2VkXCIsIFwiXCIpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcIm1cIjpcbiAgICAgIG1lZGl1bVBSYWRpby5zZXRBdHRyaWJ1dGUoXCJjaGVja2VkXCIsIFwiXCIpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcImxcIjpcbiAgICAgIGxvd1BSYWRpby5zZXRBdHRyaWJ1dGUoXCJjaGVja2VkXCIsIFwiXCIpO1xuICAgICAgYnJlYWs7XG4gIH1cblxuICByZW1vdmVJcnJlbGV2YW50RXZlbnRMaXN0ZW5lcnMoKTtcblxuICBpdGVtRWRpdGVkLnNldFRlbXBJZChpZCk7XG5cbiAgZm9ybVRvUmVuZGVyLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgdmFsaWRhdGVFZGl0TW9kYWwpO1xufVxuXG4vL2RvaW5nIGl0IHRoZSBlYXN5IHdheSB3aXRoIGZvcm0uaW5uZXJIVE1MID0gYGFjdHVhbCBIVE1MYCB3YXMgd2F5IGJldHRlcih+NDBcbi8vbGluZXMgdnMgfjE1MCBsaW5lcyksIGJ1dCB3aGVuIGkgcmVhbGl6ZWQsIGkgd2FzIHRvbyBjb21taXR0ZWQgYWxyZWFkeSBoZW5jZVxuLy90aGUgYWJvbWluYXRpb24gYmVsb3cgd2FzIGNyZWF0ZWRcbmZ1bmN0aW9uIG5ld1Rhc2tNb2RhbENyZWF0ZUVsZW1lbnRzKCkge1xuICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIik7XG4gIGNvbnN0IGgyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICBjb25zdCBjb250YWluaW5nRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuICBjb25zdCB0aXRsZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICBjb25zdCB0aXRsZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuXG4gIGNvbnN0IGRlc2NyaXB0aW9uTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gIGNvbnN0IGRlc2NyaXB0aW9uSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGV4dGFyZWFcIik7XG5cbiAgY29uc3QgZGF0ZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICBjb25zdCBkYXRlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG5cbiAgY29uc3QgaHBSYWRpb0xhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICBjb25zdCBocFJhZGlvSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gIGNvbnN0IG1wUmFkaW9MYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgY29uc3QgbXBSYWRpb0lucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICBjb25zdCBscFJhZGlvTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gIGNvbnN0IGxwUmFkaW9JbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcblxuICBjb25zdCBjb25maXJtQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcblxuICAvL0FUVFJJQlVURVNcbiAgZm9ybS5pZCA9IFwiaXRlbS1tb2RhbFwiO1xuICBoMi50ZXh0Q29udGVudCA9IFwiUHJpb3JpdHk6XCI7XG5cbiAgdGl0bGVMYWJlbC50ZXh0Q29udGVudCA9IFwiVGl0bGU6XCI7XG4gIHRpdGxlTGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwidGl0bGUtaW5wdXRcIik7XG4gIHRpdGxlSW5wdXQuaWQgPSBcInRpdGxlLWlucHV0XCI7XG4gIHRpdGxlSW5wdXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInRleHRcIik7XG4gIHRpdGxlSW5wdXQuc2V0QXR0cmlidXRlKFwibWF4bGVuZ3RoXCIsIFwiMjVcIik7XG4gIHRpdGxlSW5wdXQuc2V0QXR0cmlidXRlKFwicmVxdWlyZWRcIiwgXCJcIik7XG5cbiAgZGVzY3JpcHRpb25MYWJlbC50ZXh0Q29udGVudCA9IFwiRGVzY3JpcHRpb246XCI7XG4gIGRlc2NyaXB0aW9uTGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwiZGVzY3JpcHRpb24taW5wdXRcIik7XG4gIGRlc2NyaXB0aW9uSW5wdXQuaWQgPSBcImRlc2NyaXB0aW9uLWlucHV0XCI7XG4gIGRlc2NyaXB0aW9uSW5wdXQuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcImRlc2NyaXB0aW9uLWlucHV0XCIpO1xuICBkZXNjcmlwdGlvbklucHV0LnNldEF0dHJpYnV0ZShcImNvbHNcIiwgXCIzMFwiKTtcbiAgZGVzY3JpcHRpb25JbnB1dC5zZXRBdHRyaWJ1dGUoXCJyb3dzXCIsIFwiNFwiKTtcbiAgZGVzY3JpcHRpb25JbnB1dC5zZXRBdHRyaWJ1dGUoXCJyZXF1aXJlZFwiLCBcIlwiKTtcblxuICBkYXRlTGFiZWwudGV4dENvbnRlbnQgPSBcIkRhdGU6XCI7XG4gIGRhdGVMYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJkYXRlLWlucHV0XCIpO1xuICBkYXRlSW5wdXQuaWQgPSBcImRhdGUtaW5wdXRcIjtcbiAgZGF0ZUlucHV0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJkYXRlXCIpO1xuICBkYXRlSW5wdXQuc2V0QXR0cmlidXRlKFwicmVxdWlyZWRcIiwgXCJcIik7XG5cbiAgaHBSYWRpb0xhYmVsLnRleHRDb250ZW50ID0gXCJIaWdoXCI7XG4gIGhwUmFkaW9MYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJoaWdoLXByaW9yaXR5XCIpO1xuICBocFJhZGlvSW5wdXQuaWQgPSBcImhpZ2gtcHJpb3JpdHlcIjtcbiAgaHBSYWRpb0lucHV0LnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJwcmlvcml0eVwiKTtcbiAgaHBSYWRpb0lucHV0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJyYWRpb1wiKTtcbiAgaHBSYWRpb0lucHV0LnNldEF0dHJpYnV0ZShcImNoZWNrZWRcIiwgXCJcIik7XG5cbiAgbXBSYWRpb0xhYmVsLnRleHRDb250ZW50ID0gXCJNZWRpdW1cIjtcbiAgbXBSYWRpb0xhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBcIm1lZGl1bS1wcmlvcml0eVwiKTtcbiAgbXBSYWRpb0lucHV0LmlkID0gXCJtZWRpdW0tcHJpb3JpdHlcIjtcbiAgbXBSYWRpb0lucHV0LnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJwcmlvcml0eVwiKTtcbiAgbXBSYWRpb0lucHV0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJyYWRpb1wiKTtcblxuICBscFJhZGlvTGFiZWwudGV4dENvbnRlbnQgPSBcIkxvd1wiO1xuICBscFJhZGlvTGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwibG93LXByaW9yaXR5XCIpO1xuICBscFJhZGlvSW5wdXQuaWQgPSBcImxvdy1wcmlvcml0eVwiO1xuICBscFJhZGlvSW5wdXQuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcInByaW9yaXR5XCIpO1xuICBscFJhZGlvSW5wdXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInJhZGlvXCIpO1xuXG4gIGNvbmZpcm1CdG4udGV4dENvbnRlbnQgPSBcIkNPTkZJUk1cIjtcbiAgY29uZmlybUJ0bi5pZCA9IFwiY29uZmlybS1pdGVtXCI7XG4gIGNvbmZpcm1CdG4uc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInN1Ym1pdFwiKTtcblxuICByZXR1cm4ge1xuICAgIGZvcm0sXG4gICAgaDIsXG4gICAgY29udGFpbmluZ0RpdixcbiAgICB0aXRsZUxhYmVsLFxuICAgIHRpdGxlSW5wdXQsXG4gICAgZGVzY3JpcHRpb25MYWJlbCxcbiAgICBkZXNjcmlwdGlvbklucHV0LFxuICAgIGRhdGVMYWJlbCxcbiAgICBkYXRlSW5wdXQsXG4gICAgaHBSYWRpb0xhYmVsLFxuICAgIGhwUmFkaW9JbnB1dCxcbiAgICBtcFJhZGlvTGFiZWwsXG4gICAgbXBSYWRpb0lucHV0LFxuICAgIGxwUmFkaW9MYWJlbCxcbiAgICBscFJhZGlvSW5wdXQsXG4gICAgY29uZmlybUJ0bixcbiAgfTtcbn1cblxuLy90aGUgYWJvbWluYXRpb24gdG8gZW5kIGFsbCBhYm9taW5hdGlvbnM6XG4vL2EgbG9vcCBjb250YWluaW5nIGEgc3dpdGNoIHN0YXRlbWVudCB3aGljaCBhbHNvIGNvbnRhaW5zIGFub3RoZXIgbG9vcCB3aGljaCBhbHNvXG4vL2NvbnRhaW5zIGFub3RoZXIgc3dpdGNoIHN0YXRlbWVudC5cbi8vYWxtb3N0IHByb3VkIG9mIGl0IFRCSC5cbmZ1bmN0aW9uIG5ld1Rhc2tSZW5kZXJMb29wcyhsaXN0KSB7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgNjsgaSsrKSB7XG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBzd2l0Y2ggKGkpIHtcbiAgICAgIGNhc2UgMDpcbiAgICAgICAgZGl2LmFwcGVuZENoaWxkKGxpc3QudGl0bGVMYWJlbCk7XG4gICAgICAgIGRpdi5hcHBlbmRDaGlsZChsaXN0LnRpdGxlSW5wdXQpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgMTpcbiAgICAgICAgZGl2LmFwcGVuZENoaWxkKGxpc3QuZGVzY3JpcHRpb25MYWJlbCk7XG4gICAgICAgIGRpdi5hcHBlbmRDaGlsZChsaXN0LmRlc2NyaXB0aW9uSW5wdXQpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgMjpcbiAgICAgICAgZGl2LmFwcGVuZENoaWxkKGxpc3QuZGF0ZUxhYmVsKTtcbiAgICAgICAgZGl2LmFwcGVuZENoaWxkKGxpc3QuZGF0ZUlucHV0KTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDQ6XG4gICAgICAgIGNvbnN0IHVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IDM7IGorKykge1xuICAgICAgICAgIGNvbnN0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICAgICAgICAgIHN3aXRjaCAoaikge1xuICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICBsaS5pZCA9IFwiaGlnaC1wcmlvLWxpXCI7XG4gICAgICAgICAgICAgIGxpLmFwcGVuZENoaWxkKGxpc3QuaHBSYWRpb0xhYmVsKTtcbiAgICAgICAgICAgICAgbGkuYXBwZW5kQ2hpbGQobGlzdC5ocFJhZGlvSW5wdXQpO1xuICAgICAgICAgICAgICB1bC5hcHBlbmRDaGlsZChsaSk7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICBsaS5pZCA9IFwibWVkaXVtLXByaW8tbGlcIjtcbiAgICAgICAgICAgICAgbGkuYXBwZW5kQ2hpbGQobGlzdC5tcFJhZGlvTGFiZWwpO1xuICAgICAgICAgICAgICBsaS5hcHBlbmRDaGlsZChsaXN0Lm1wUmFkaW9JbnB1dCk7XG4gICAgICAgICAgICAgIHVsLmFwcGVuZENoaWxkKGxpKTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgIGxpLmlkID0gXCJsb3ctcHJpby1saVwiO1xuICAgICAgICAgICAgICBsaS5hcHBlbmRDaGlsZChsaXN0LmxwUmFkaW9MYWJlbCk7XG4gICAgICAgICAgICAgIGxpLmFwcGVuZENoaWxkKGxpc3QubHBSYWRpb0lucHV0KTtcbiAgICAgICAgICAgICAgdWwuYXBwZW5kQ2hpbGQobGkpO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZGl2LmFwcGVuZENoaWxkKHVsKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDU6XG4gICAgICAgIGRpdi5hcHBlbmRDaGlsZChsaXN0LmNvbmZpcm1CdG4pO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gICAgbGlzdC5mb3JtLmFwcGVuZENoaWxkKGRpdik7XG4gIH1cbiAgcmV0dXJuIGxpc3QuZm9ybTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByb2plY3RNb2RhbENyZWF0ZUVsZW1lbnQoKSB7XG4gIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKTtcbiAgZm9ybS5pZCA9IFwicHJvamVjdC1tb2RhbFwiO1xuICAvL2Fpbid0IGRvaW5nIHRoZSBzYW1lIGNyYXAgdHdpY2VcbiAgZm9ybS5pbm5lckhUTUwgPSBgXG4gICAgPGxhYmVsIGZvcj1cInByb2plY3QtbmFtZVwiPlByb2plY3QgbmFtZTo8L2xhYmVsPlxuICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwicHJvamVjdC1uYW1lXCIgbWF4bGVuZ3RoPVwiMTVcIiByZXF1aXJlZCAvPlxuICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGlkPVwiY29uZmlybS1wcm9qZWN0XCI+Q09ORklSTTwvYnV0dG9uPmA7XG5cbiAgLy9jZW50ZXIgZWxlbWVudCB3aXRob3V0IGtub3dpbmcgaXRzIHdpZHRoKHBvczogYWJzb2x1dGUgJiBsZWZ0OiA1MCUpXG4gIGZvcm0uc3R5bGUubWFyZ2luTGVmdCA9IGAtJHtmb3JtLm9mZnNldFdpZHRoIC8gMn1weGA7XG5cbiAgcmV0dXJuIGZvcm07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBuZXdQcm9qZWN0TW9kYWxSZW5kZXIoKSB7XG4gIGNvbnN0IGZvcm0gPSBwcm9qZWN0TW9kYWxDcmVhdGVFbGVtZW50KCk7XG5cbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKGZvcm0pO1xuXG4gIHJlbW92ZUlycmVsZXZhbnRFdmVudExpc3RlbmVycygpO1xuXG4gIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCB2YWxpZGF0ZU5ld01vZGFsKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGVkaXRQcm9qZWN0TW9kYWxSZW5kZXIoKSB7XG4gIGNvbnN0IGZvcm0gPSBwcm9qZWN0TW9kYWxDcmVhdGVFbGVtZW50KCk7XG4gIGNvbnN0IHByb2plY3QgPSB3aGljaElzQWN0aXZlKGN1cnJlbnRQcm9qZWN0c0xpc3QpO1xuXG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChmb3JtKTtcblxuICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdC1uYW1lXCIpO1xuXG4gIGl0ZW1FZGl0ZWQuc2V0VGVtcElkKHByb2plY3QuaWQpO1xuICB0aXRsZS52YWx1ZSA9IHByb2plY3QudGl0bGU7XG5cbiAgcmVtb3ZlSXJyZWxldmFudEV2ZW50TGlzdGVuZXJzKCk7XG5cbiAgZm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIHZhbGlkYXRlRWRpdE1vZGFsKTtcbn1cbiIsImltcG9ydCB7IHJlaW5zdGF0ZUV2ZW50TGlzdGVuZXJzIH0gZnJvbSBcIi4vZXZlbnRMaXN0ZW5lcnNNYW5hZ2VyXCI7XG5pbXBvcnQge1xuICBjb25maXJtTmV3VGFzayxcbiAgY29uZmlybUVkaXRUYXNrLFxuICBjb25maXJtTmV3UHJvamVjdCxcbiAgY29uZmlybUVkaXRQcm9qZWN0LFxufSBmcm9tIFwiLi9tb2RhbEFwcGxpY2F0aW9uXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiB2YWxpZGF0ZU5ld01vZGFsKGUpIHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICBpZiAoZS50YXJnZXQuY2hlY2tWYWxpZGl0eSgpKSB7XG4gICAgaWYgKGUudGFyZ2V0LmlkID09PSBcIml0ZW0tbW9kYWxcIikge1xuICAgICAgY29uZmlybU5ld1Rhc2soKTtcbiAgICB9IGVsc2UgaWYgKGUudGFyZ2V0LmlkID09PSBcInByb2plY3QtbW9kYWxcIikge1xuICAgICAgY29uZmlybU5ld1Byb2plY3QoKTtcbiAgICB9XG4gICAgcmVpbnN0YXRlRXZlbnRMaXN0ZW5lcnMoKTtcbiAgfVxufVxuZXhwb3J0IGZ1bmN0aW9uIHZhbGlkYXRlRWRpdE1vZGFsKGUpIHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICBpZiAoZS50YXJnZXQuY2hlY2tWYWxpZGl0eSgpKSB7XG4gICAgaWYgKGUudGFyZ2V0LmlkID09PSBcIml0ZW0tbW9kYWxcIikge1xuICAgICAgY29uZmlybUVkaXRUYXNrKCk7XG4gICAgfSBlbHNlIGlmIChlLnRhcmdldC5pZCA9PT0gXCJwcm9qZWN0LW1vZGFsXCIpIHtcbiAgICAgIGNvbmZpcm1FZGl0UHJvamVjdCgpO1xuICAgIH1cbiAgICByZWluc3RhdGVFdmVudExpc3RlbmVycygpO1xuICB9XG59XG4iLCJpbXBvcnQgZWRpdFNtYWxsU1ZHIGZyb20gXCIuLi9pbWFnZXMvZWRpdC1zbWFsbC5zdmdcIjtcbmltcG9ydCBoaWRlU1ZHIGZyb20gXCIuLi9pbWFnZXMvaGlkZS5zdmdcIjtcbmltcG9ydCBzaGVldFN0YWNrU1ZHIGZyb20gXCIuLi9pbWFnZXMvc3RhY2stb2Ytc2hlZXRzLnN2Z1wiO1xuaW1wb3J0IGRlbGV0ZVNWRyBmcm9tIFwiLi4vaW1hZ2VzL2RlbGV0ZS5zdmdcIjtcbmltcG9ydCBlZGl0QmlnU1ZHIGZyb20gXCIuLi9pbWFnZXMvZWRpdC1iaWcuc3ZnXCI7XG5pbXBvcnQgbWVudVNWRyBmcm9tIFwiLi4vaW1hZ2VzL21lbnUuc3ZnXCI7XG5cbmltcG9ydCB7XG4gIFRhc2ssXG4gIFByb2plY3QsXG4gIGN1cnJlbnRQcm9qZWN0c0xpc3QsXG4gIFRlbXBvcmFyeUlkLFxufSBmcm9tIFwiLi9pbnRlcm5hbExvZ2ljXCI7XG5pbXBvcnQge1xuICBlZGl0VGFza01vZGFsUmVuZGVyLFxuICBuZXdQcm9qZWN0TW9kYWxSZW5kZXIsXG4gIGVkaXRQcm9qZWN0TW9kYWxSZW5kZXIsXG59IGZyb20gXCIuL21vZGFsUmVuZGVyXCI7XG5pbXBvcnQge1xuICB3aGljaElzQWN0aXZlLFxuICBoaWRlU2lkZWJhcixcbiAgc2hvd1NpZGViYXIsXG4gIHJlbmRlck1haW4sXG4gIHNldFByaW9yaXR5LFxuICBkZWxldGVJdGVtLFxuICBzZXRDb21wbGV0ZU9wdGlvbixcbiAgY2hhbmdlQ29tcGxldGVPcHRpb24sXG4gIGRlYWN0aXZhdGVBbGxQcm9qZWN0cyxcbiAgc2hvd0dyb3VwLFxufSBmcm9tIFwiLi9sb2FkRE9NY3JhcFwiO1xuXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyU2lkZWJhcigpIHtcbiAgY29uc3Qgc2lkZWJhclJlbmRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IHNpZGViYXJJY29ucyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IG5ld1Byb2plY3RCdG5SZW5kZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBjb25zdCBwcm9qZWN0TGlzdFRpdGxlUmVuZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICBjb25zdCBwcm9qZWN0VWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XG4gIGNvbnN0IGR5bmFtaWNVbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcbiAgY29uc3QgZHluYW1pY1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICBjb25zdCBoaWRlSW1nID0gbmV3IEltYWdlKCk7XG4gIGNvbnN0IHNoZWV0U3RhY2tJbWcgPSBuZXcgSW1hZ2UoKTtcblxuICBzaWRlYmFyUmVuZGVyLmlkID0gXCJwcm9qZWN0c1wiO1xuICBzaWRlYmFySWNvbnMuaWQgPSBcImljb25zXCI7XG4gIG5ld1Byb2plY3RCdG5SZW5kZXIuaWQgPSBcIm5ldy1wcm9qZWN0LWJ0blwiO1xuICBwcm9qZWN0VWwuaWQgPSBcInByb2plY3RzLXVsXCI7XG4gIGR5bmFtaWNVbC5pZCA9IFwiZHluYW1pYy11bFwiO1xuICBkeW5hbWljVGl0bGUuaWQgPSBcImR5bmFtaWMtaDJcIjtcbiAgaGlkZUltZy5pZCA9IFwiaGlkZS1pY29uXCI7XG4gIGhpZGVJbWcuc3JjID0gaGlkZVNWRztcbiAgc2hlZXRTdGFja0ltZy5zcmMgPSBzaGVldFN0YWNrU1ZHO1xuXG4gIG5ld1Byb2plY3RCdG5SZW5kZXIudGV4dENvbnRlbnQgPSBcIkNSRUFURSBORVcgUFJPSkVDVFwiO1xuICBwcm9qZWN0TGlzdFRpdGxlUmVuZGVyLnRleHRDb250ZW50ID0gXCJZb3VyIHByb2plY3RzOlwiO1xuICBkeW5hbWljVGl0bGUudGV4dENvbnRlbnQgPSBcIkR5bmFtaWNhbGx5IGdyb3VwZWQgdGFza3NcIjtcblxuICBzaWRlYmFySWNvbnMuYXBwZW5kQ2hpbGQoc2hlZXRTdGFja0ltZyk7XG4gIHNpZGViYXJJY29ucy5hcHBlbmRDaGlsZChoaWRlSW1nKTtcblxuICByZW5kZXJQcm9qZWN0VWwocHJvamVjdFVsKTtcbiAgcmVuZGVyRHluYW1pY1VsKGR5bmFtaWNVbCk7XG5cbiAgc2lkZWJhclJlbmRlci5hcHBlbmRDaGlsZChzaWRlYmFySWNvbnMpO1xuICBzaWRlYmFyUmVuZGVyLmFwcGVuZENoaWxkKGR5bmFtaWNUaXRsZSk7XG4gIHNpZGViYXJSZW5kZXIuYXBwZW5kQ2hpbGQoZHluYW1pY1VsKTtcbiAgc2lkZWJhclJlbmRlci5hcHBlbmRDaGlsZChuZXdQcm9qZWN0QnRuUmVuZGVyKTtcbiAgc2lkZWJhclJlbmRlci5hcHBlbmRDaGlsZChwcm9qZWN0TGlzdFRpdGxlUmVuZGVyKTtcbiAgc2lkZWJhclJlbmRlci5hcHBlbmRDaGlsZChwcm9qZWN0VWwpO1xuXG4gIG5ld1Byb2plY3RCdG5SZW5kZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIG5ld1Byb2plY3RNb2RhbFJlbmRlcik7XG4gIGhpZGVJbWcuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGhpZGVTaWRlYmFyKTtcblxuICByZXR1cm4gc2lkZWJhclJlbmRlcjtcbn1cblxuZnVuY3Rpb24gcmVuZGVyUHJvamVjdFVsKGxpc3QpIHtcbiAgd2hpY2hJc0FjdGl2ZShjdXJyZW50UHJvamVjdHNMaXN0KTtcbiAgZm9yIChjb25zdCBwcm9qZWN0IG9mIGN1cnJlbnRQcm9qZWN0c0xpc3QuY29udGVudCkge1xuICAgIGNvbnN0IGxpID0gcmVuZGVyU2luZ2xlUHJvamVjdChwcm9qZWN0KTtcbiAgICBsaXN0LmFwcGVuZENoaWxkKGxpKTtcbiAgfVxufVxuXG5mdW5jdGlvbiByZW5kZXJEeW5hbWljVWwodWwpIHtcbiAgY29uc3QgbmV4dFdlZWsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gIGNvbnN0IGhpZ2hQcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgY29uc3QgbWVkaXVtUHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gIGNvbnN0IGxvd1ByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuXG4gIG5leHRXZWVrLmlkID0gXCJuZXh0LXdlZWtcIjtcbiAgaGlnaFByaW9yaXR5LmlkID0gXCJkaHBcIjtcbiAgbWVkaXVtUHJpb3JpdHkuaWQgPSBcImRtcFwiO1xuICBsb3dQcmlvcml0eS5pZCA9IFwiZGxwXCI7XG4gIGhpZ2hQcmlvcml0eS5jbGFzc05hbWUgPSBcInByaW9yaXR5LWdyb3VwXCI7XG4gIG1lZGl1bVByaW9yaXR5LmNsYXNzTmFtZSA9IFwicHJpb3JpdHktZ3JvdXBcIjtcbiAgbG93UHJpb3JpdHkuY2xhc3NOYW1lID0gXCJwcmlvcml0eS1ncm91cFwiO1xuXG4gIG5leHRXZWVrLnRleHRDb250ZW50ID0gXCJEdWUgdGhpcyB3ZWVrXCI7XG4gIGhpZ2hQcmlvcml0eS50ZXh0Q29udGVudCA9IFwiSGlnaCBwcmlvcml0eVwiO1xuICBtZWRpdW1Qcmlvcml0eS50ZXh0Q29udGVudCA9IFwiTWVkaXVtIHByaW9yaXR5XCI7XG4gIGxvd1ByaW9yaXR5LnRleHRDb250ZW50ID0gXCJMb3cgcHJpb3JpdHlcIjtcblxuICB1bC5hcHBlbmRDaGlsZChuZXh0V2Vlayk7XG4gIHVsLmFwcGVuZENoaWxkKGhpZ2hQcmlvcml0eSk7XG4gIHVsLmFwcGVuZENoaWxkKG1lZGl1bVByaW9yaXR5KTtcbiAgdWwuYXBwZW5kQ2hpbGQobG93UHJpb3JpdHkpO1xuXG4gIEFycmF5LmZyb20odWwuY2hpbGROb2RlcykuZm9yRWFjaCgoZSkgPT4ge1xuICAgIGUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGRlYWN0aXZhdGVBbGxQcm9qZWN0cyk7XG4gICAgZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgc2hvd0dyb3VwKTtcbiAgfSk7XG5cbiAgLyogY29uc3QgcHJpb3JpdHlHcm91cCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJwcmlvcml0eS1ncm91cFwiKTtcbiAgY29uc29sZS5sb2cocHJpb3JpdHlHcm91cCk7XG4gIEFycmF5LmZyb20ocHJpb3JpdHlHcm91cCkuZm9yRWFjaCgoZSkgPT4ge30pOyAqL1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyU2luZ2xlUHJvamVjdChwcm9qZWN0KSB7XG4gIGNvbnN0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuXG4gIGxpLnRleHRDb250ZW50ID0gYCR7cHJvamVjdC50aXRsZX1gO1xuXG4gIGlmICghcHJvamVjdC5pZCkge1xuICAgIGN1cnJlbnRQcm9qZWN0c0xpc3QuY2hlY2tEdXBsaWNhdGVQcm9qZWN0KHByb2plY3QpO1xuICB9XG4gIGxpLmlkID0gcHJvamVjdC5pZDtcblxuICBsaS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2hhbmdlQWN0aXZlUHJvamVjdCk7XG5cbiAgaWYgKHByb2plY3QuYWN0aXZlKSB7XG4gICAgbGkuY2xhc3NOYW1lID0gXCJhY3RpdmVcIjtcbiAgfSBlbHNlIHtcbiAgICBsaS5jbGFzc05hbWUgPSBcIlwiO1xuICB9XG4gIHJldHVybiBsaTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNoYW5nZUFjdGl2ZVByb2plY3QoZSkge1xuICBjb25zdCBwcm9qZWN0VWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3RzLXVsXCIpO1xuICBjb25zdCBkeW5hbWljR3JvdXAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImR5bmFtaWMtdWxcIik7XG4gIGNvbnN0IGxhdGVNYWluID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluXCIpO1xuXG4gIEFycmF5LmZyb20ocHJvamVjdFVsLmNoaWxkTm9kZXMpLmZvckVhY2goKGVsKSA9PiB7XG4gICAgaWYgKGUudGFyZ2V0ICE9PSBlbCkge1xuICAgICAgZWwuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZWwuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbiAgICB9XG4gIH0pO1xuXG4gIEFycmF5LmZyb20oZHluYW1pY0dyb3VwLmNoaWxkcmVuKS5mb3JFYWNoKChlbCkgPT4ge1xuICAgIGVsLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gIH0pO1xuXG4gIGZvciAoY29uc3QgcHJvaiBvZiBjdXJyZW50UHJvamVjdHNMaXN0LmNvbnRlbnQpIHtcbiAgICBpZiAocHJvai5pZCA9PT0gZS50YXJnZXQuaWQgJiYgIXByb2ouYWN0aXZlKSB7XG4gICAgICBjdXJyZW50UHJvamVjdHNMaXN0LnNldEluYWN0aXZlUHJvamVjdHMoKTtcbiAgICAgIGN1cnJlbnRQcm9qZWN0c0xpc3Quc2V0QWN0aXZlUHJvamVjdChwcm9qKTtcbiAgICB9XG4gIH1cblxuICBjb25zdCBhY3RpdmVQcm9qZWN0ID0gd2hpY2hJc0FjdGl2ZShjdXJyZW50UHJvamVjdHNMaXN0KTtcblxuICBsYXRlTWFpbi5yZW1vdmUoKTtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKHJlbmRlck1haW4oYWN0aXZlUHJvamVjdC5jb250ZW50LCBhY3RpdmVQcm9qZWN0LnRpdGxlKSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJUb3BDb250ZW50KHByb2plY3RUaXRsZSkge1xuICBjb25zdCBuZXdUb3BTZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG5cbiAgY29uc3QgZWRpdFByb2plY3RJbWcgPSBuZXcgSW1hZ2UoKTtcbiAgY29uc3Qgc2hvd0ltZyA9IG5ldyBJbWFnZSgpO1xuXG4gIG5ld1RvcFNlY3Rpb24uaWQgPSBcImFjdGl2ZS1wcm9qZWN0XCI7XG4gIGVkaXRQcm9qZWN0SW1nLmlkID0gXCJlZGl0LXByb2plY3RcIjtcbiAgc2hvd0ltZy5pZCA9IFwibWVudS1pY29uXCI7XG5cbiAgdGl0bGUudGV4dENvbnRlbnQgPSBwcm9qZWN0VGl0bGU7XG4gIGVkaXRQcm9qZWN0SW1nLnNyYyA9IGVkaXRCaWdTVkc7XG4gIHNob3dJbWcuc3JjID0gbWVudVNWRztcblxuICBuZXdUb3BTZWN0aW9uLmFwcGVuZENoaWxkKHNob3dJbWcpO1xuICBuZXdUb3BTZWN0aW9uLmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgbmV3VG9wU2VjdGlvbi5hcHBlbmRDaGlsZChlZGl0UHJvamVjdEltZyk7XG5cbiAgc2hvd0ltZy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgc2hvd1NpZGViYXIpO1xuICBlZGl0UHJvamVjdEltZy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZWRpdFByb2plY3RNb2RhbFJlbmRlcik7XG4gIHJldHVybiBuZXdUb3BTZWN0aW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyU2luZ2xlVGFzayh0YXNrKSB7XG4gIGNvbnN0IGl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgZGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IHByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgY29tcGxldGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBlZGl0QnRuID0gbmV3IEltYWdlKCk7XG4gIGNvbnN0IGRlbGV0ZUJ0biA9IG5ldyBJbWFnZSgpO1xuICBjb25zdCBjb21wbGV0ZUJ0biA9IG5ldyBJbWFnZSgpO1xuXG4gIGl0ZW0uY2xhc3NOYW1lID0gXCJpdGVtXCI7XG4gIHRpdGxlLmNsYXNzTmFtZSA9IFwidGl0bGVcIjtcbiAgZGVzY3JpcHRpb24uY2xhc3NOYW1lID0gXCJkZXNjcmlwdGlvblwiO1xuICBkYXRlLmNsYXNzTmFtZSA9IFwiZGF0ZVwiO1xuICBwcmlvcml0eS5jbGFzc05hbWUgPSBcInByaW9yaXR5XCI7XG4gIGNvbXBsZXRlLmNsYXNzTmFtZSA9IFwiY29tcGxldGVcIjtcblxuICBlZGl0QnRuLmNsYXNzTmFtZSA9IFwiZWRpdC1pdGVtXCI7XG4gIGRlbGV0ZUJ0bi5jbGFzc05hbWUgPSBcImRlbGV0ZS1pdGVtXCI7XG4gIGNvbXBsZXRlQnRuLmNsYXNzTmFtZSA9IFwiY29tcGxldGUtYnRuXCI7XG5cbiAgZWRpdEJ0bi5zcmMgPSBlZGl0U21hbGxTVkc7XG4gIGRlbGV0ZUJ0bi5zcmMgPSBkZWxldGVTVkc7XG4gIGlmICghdGFzay5pZCkge1xuICAgIGN1cnJlbnRQcm9qZWN0c0xpc3QuY2hlY2tEdXBsaWNhdGVJdGVtKHRhc2spO1xuICB9XG4gIGl0ZW0uaWQgPSB0YXNrLmlkO1xuXG4gIHRpdGxlLnRleHRDb250ZW50ID0gdGFzay50aXRsZTtcbiAgZGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSB0YXNrLmRlc2NyaXB0aW9uO1xuICBkYXRlLnRleHRDb250ZW50ID0gdGFzay5kYXRlO1xuICBjb21wbGV0ZS50ZXh0Q29udGVudCA9IFwiQ29tcGxldGU6XCI7XG5cbiAgc2V0UHJpb3JpdHkocHJpb3JpdHksIHRhc2spO1xuICBzZXRDb21wbGV0ZU9wdGlvbih0YXNrLCBjb21wbGV0ZUJ0bik7XG4gIGNvbXBsZXRlLmFwcGVuZENoaWxkKGNvbXBsZXRlQnRuKTtcblxuICBpdGVtLmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgaXRlbS5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbik7XG4gIGl0ZW0uYXBwZW5kQ2hpbGQoZGF0ZSk7XG4gIGl0ZW0uYXBwZW5kQ2hpbGQocHJpb3JpdHkpO1xuICBpdGVtLmFwcGVuZENoaWxkKGNvbXBsZXRlKTtcblxuICBpdGVtLmFwcGVuZENoaWxkKGVkaXRCdG4pO1xuICBpdGVtLmFwcGVuZENoaWxkKGRlbGV0ZUJ0bik7XG5cbiAgZWRpdEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZWRpdFRhc2tNb2RhbFJlbmRlcik7XG4gIGRlbGV0ZUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZGVsZXRlSXRlbSk7XG4gIGNvbXBsZXRlQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjaGFuZ2VDb21wbGV0ZU9wdGlvbik7XG5cbiAgcmV0dXJuIGl0ZW07XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAqIGFzIGl0ZW1zIGZyb20gXCIuL21vZHVsZXMvbG9hZERPTWNyYXAuanNcIjtcblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsIGl0ZW1zLnJlbmRlckNvbnRhaW5lcigpKTtcblxuY29uc3QgdG9kYXkgPSBuZXcgRGF0ZSgpO1xuY29uc3QgdG9kYXlNcyA9IHRvZGF5LmdldFRpbWUoKTtcbmNvbnN0IGRhdGUgPSBuZXcgRGF0ZShcIjIwMjQtMDItMTZcIik7XG5jb25zdCBkYXRlTXMgPSBkYXRlLmdldFRpbWUoKTtcbi8qIGRhdGUuc2V0RnVsbFllYXIoXCIyMDI0XCIpO1xuZGF0ZS5zZXRNb250aChcIjAxXCIpO1xuZGF0ZS5zZXREYXRlKFwiMVwiKTsqL1xuY29uc29sZS5sb2coKGRhdGUgLSB0b2RheSkgLyA4NjQwMDAwMCk7IC8vICAvIDg2NDAwMDAwXG4vKiBjb25zb2xlLmxvZyhcImRhdGVNc1wiLCBkYXRlTXMpO1xuY29uc29sZS5sb2coXCJ0b2RheU1zXCIsIHRvZGF5TXMpOyAqL1xuY29uc29sZS5sb2coKGRhdGVNcyAtIHRvZGF5TXMpIC8gODY0MDAwMDApO1xuXG5jb25zb2xlLmxvZyhcImRhdGVcIiwgZGF0ZSk7XG5jb25zb2xlLmxvZyhcInRvZGF5XCIsIHRvZGF5KTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==