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
___CSS_LOADER_EXPORT___.push([module.id, `:root {
    font-size: 62.5%;
}
body {
    margin: 0;
}
#content {
    width: 1080px;
    margin: 3rem auto;
    gap: 1rem;

    display: grid;
    grid-template-columns: repeat(3, calc(1080px / 3));
    align-items: center;
}

.tabs {
    display: flex;
    flex-direction: column;
    gap: 1.6rem;
}

.home-tab {
    font-size: 6.4rem;
    padding: .8rem 1.6rem;
}
.menu-tab, .contact-tab {
    font-size: 3.6rem;
    padding: .8rem 1.6rem;

}

.menu-tab:hover, .contact-tab:hover, .home-tab:hover {
    background-color: rgba(0, 0, 0, 0.171);
}

.menu-tab:active, .contact-tab:active, .home-tab:active {
    background-color: rgba(0, 0, 0, 0.5);
}

img {
    width: calc(1080px / 3);
}

.text {
    box-sizing: border-box;
    font-size: 2.2rem;
    line-height: 4.3rem;
    padding: 1.6rem 3.2rem;
}

.category, .contact-block{
    font-size: 1.8rem;
    box-sizing: border-box;
    align-self: start;

    display: flex;
    flex-direction: column;
    gap: 1.6rem;
}

.category-name, .contact-title {
    padding: .8rem;
    font-weight: bold;
}

.items-wrapper {
    border-left: 3px solid black;
    padding: .8rem;
    display: flex;
    flex-direction: column;
    gap: 1.6rem;
}

.menu-item-wrapper {
    display: flex;
    gap: 3.2rem;
    justify-content: space-between;
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,gBAAgB;AACpB;AACA;IACI,SAAS;AACb;AACA;IACI,aAAa;IACb,iBAAiB;IACjB,SAAS;;IAET,aAAa;IACb,kDAAkD;IAClD,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,WAAW;AACf;;AAEA;IACI,iBAAiB;IACjB,qBAAqB;AACzB;AACA;IACI,iBAAiB;IACjB,qBAAqB;;AAEzB;;AAEA;IACI,sCAAsC;AAC1C;;AAEA;IACI,oCAAoC;AACxC;;AAEA;IACI,uBAAuB;AAC3B;;AAEA;IACI,sBAAsB;IACtB,iBAAiB;IACjB,mBAAmB;IACnB,sBAAsB;AAC1B;;AAEA;IACI,iBAAiB;IACjB,sBAAsB;IACtB,iBAAiB;;IAEjB,aAAa;IACb,sBAAsB;IACtB,WAAW;AACf;;AAEA;IACI,cAAc;IACd,iBAAiB;AACrB;;AAEA;IACI,4BAA4B;IAC5B,cAAc;IACd,aAAa;IACb,sBAAsB;IACtB,WAAW;AACf;;AAEA;IACI,aAAa;IACb,WAAW;IACX,8BAA8B;AAClC","sourcesContent":[":root {\n    font-size: 62.5%;\n}\nbody {\n    margin: 0;\n}\n#content {\n    width: 1080px;\n    margin: 3rem auto;\n    gap: 1rem;\n\n    display: grid;\n    grid-template-columns: repeat(3, calc(1080px / 3));\n    align-items: center;\n}\n\n.tabs {\n    display: flex;\n    flex-direction: column;\n    gap: 1.6rem;\n}\n\n.home-tab {\n    font-size: 6.4rem;\n    padding: .8rem 1.6rem;\n}\n.menu-tab, .contact-tab {\n    font-size: 3.6rem;\n    padding: .8rem 1.6rem;\n\n}\n\n.menu-tab:hover, .contact-tab:hover, .home-tab:hover {\n    background-color: rgba(0, 0, 0, 0.171);\n}\n\n.menu-tab:active, .contact-tab:active, .home-tab:active {\n    background-color: rgba(0, 0, 0, 0.5);\n}\n\nimg {\n    width: calc(1080px / 3);\n}\n\n.text {\n    box-sizing: border-box;\n    font-size: 2.2rem;\n    line-height: 4.3rem;\n    padding: 1.6rem 3.2rem;\n}\n\n.category, .contact-block{\n    font-size: 1.8rem;\n    box-sizing: border-box;\n    align-self: start;\n\n    display: flex;\n    flex-direction: column;\n    gap: 1.6rem;\n}\n\n.category-name, .contact-title {\n    padding: .8rem;\n    font-weight: bold;\n}\n\n.items-wrapper {\n    border-left: 3px solid black;\n    padding: .8rem;\n    display: flex;\n    flex-direction: column;\n    gap: 1.6rem;\n}\n\n.menu-item-wrapper {\n    display: flex;\n    gap: 3.2rem;\n    justify-content: space-between;\n}\n"],"sourceRoot":""}]);
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

/***/ "./src/contactPage.js":
/*!****************************!*\
  !*** ./src/contactPage.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   loadContact: () => (/* binding */ loadContact)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");


let contentDiv

const loadContact = () => {
    contentDiv = document.querySelector('#content');

    let contactDiv = document.createElement('div');
    let itemsWrapper = document.createElement('div');
    let titleDiv = document.createElement('div');
    let addressDiv = document.createElement('div');
    let phoneDiv = document.createElement('div');
    let emailDiv = document.createElement('div');
    
    contactDiv.classList.add('contact-block');
    itemsWrapper.classList.add('items-wrapper');
    titleDiv.classList.add('contact-title');
    addressDiv.classList.add('item');
    phoneDiv.classList.add('item');
    emailDiv.classList.add('item');

    titleDiv.textContent = 'Contact';
    addressDiv.textContent = '123 Rosewood Lane, Sapphire Springs, CA 90210'
    phoneDiv.textContent = '54-2332-3242'
    emailDiv.textContent = 'randomuser123@example.com'


    contactDiv.appendChild(titleDiv);
    itemsWrapper.appendChild(addressDiv);
    itemsWrapper.appendChild(phoneDiv);
    itemsWrapper.appendChild(emailDiv);
    contactDiv.appendChild(itemsWrapper);
    contentDiv.appendChild(contactDiv);
}



/***/ }),

/***/ "./src/homePage.js":
/*!*************************!*\
  !*** ./src/homePage.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   loadHome: () => (/* binding */ loadHome)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");


let contentDiv

const loadHome = () => {
    contentDiv = document.querySelector('#content');
    loadSection(
        `Welcome to "Elysian Eats," where culinary artistry meets opulent ambiance in a symphony of indulgence. Nestled in the heart of the city's most vibrant district, this high-end restaurant is a gastronomic haven for those seeking an unforgettable dining experience. As you step through the imposing mahogany doors, you're greeted by an enchanting fusion of modern elegance and timeless charm.`,
        'https://images.pexels.com/photos/1109197/pexels-photo-1109197.jpeg',
    );

    loadSection(
        `The interior of "Elysian Eats" exudes sophistication, with its soft, ambient lighting casting a warm glow on plush velvet upholstery and polished marble tables. Crystal chandeliers glisten overhead, casting dancing shadows on the walls adorned with original works of art. The air is filled with a symphony of aromas, a tantalizing preview of the culinary delights awaiting you.`,
        'https://images.pexels.com/photos/4253127/pexels-photo-4253127.jpeg',
    );
    loadSection(
        `Our world-renowned chefs, artisans of flavor, have curated a menu that reflects their passion for culinary excellence. Each dish is a masterpiece, a harmonious blend of exquisite ingredients sourced from around the globe, artfully plated to tantalize the senses. Whether you crave succulent seafood, tender cuts of meat, or inspired vegetarian creations, "Elysian Eats" offers a feast for every palate.`,
        'https://images.pexels.com/photos/3338497/pexels-photo-3338497.jpeg?auto=compress&cs=tinysrgb&w=1600',
    );
    loadSection(
        ``,
        'https://images.pexels.com/photos/4253320/pexels-photo-4253320.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    );
}

const loadSection = (text, imgURL) => {
    let imgTag = document.createElement('img');
    imgTag.setAttribute('src',imgURL);
    let textDiv = document.createElement('div');
    textDiv.classList.add('text');
    textDiv.textContent = text

    contentDiv.appendChild(imgTag);
    contentDiv.appendChild(textDiv);
}



/***/ }),

/***/ "./src/menuPage.js":
/*!*************************!*\
  !*** ./src/menuPage.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   loadMenu: () => (/* binding */ loadMenu)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");


let contentDiv

const loadMenu = () => {
    contentDiv = document.querySelector('#content');

    loadMenuCategory(
        'Starters',
        ['Seared Scallop with Truffle Risotto', 10],
        ['Foie Gras with Brioche and Fruit Compote', 14],
        ['Lobster Bisque', 12],
        ['Beef Tartare', 10],
        ['Pan-Seared Duck Breast', 9],
        );

    loadMenuCategory(
        'Breakfast',
        ['Eggs Benedict Royale', 18],
        ['Quiche Lorraine', 16],
        ['Avocado Toast with Smoked Salmon', 14],
        ['Croissant French Toast', 16],
        ['Truffle Scrambled Eggs', 20],
        ['Belgian Waffle Delight', 14],
        ['Shakshuka Royale', 22]
        );

    loadMenuCategory(
        'Main Plates',
        ['Filet Mignon', 35],
        ['Lobster Tail with Garlic Butter', 40],
        ['Truffle Risotto with Wild Mushrooms', 30],
        ['Grilled Chilean Sea Bass', 40],
        [`Duck à l'Orange`, 35],
        ['Veal Osso Buco', 40],
        ['Wild-caught Salmon with Lemon-Dill Sauce', 30],
        ['Vegetable Wellington', 25],
        ['Surf and Turf', 55],
        );

    loadMenuCategory(
        'Drinks',
        ['Classic Martini', 12],
        ['French 75', 14],
        ['Negroni Sbagliato', 14.5],
        ['Boulevardier', 14],
        ['Mango and Chili Margarita', 16],
        ['Aviation Cocktail', 15],
        ['Elderflower Spritz', 12]
        );
    loadMenuCategory(
        'Desserts',
        ['Molten Chocolate Lava Cake', 12],
        ['Crème Brûlée', 10],
        ['Tiramisu', 12],
        ['Panna Cotta', 10],
        ['Cheesecake with Berry Compote', 12],
        ['Opera Cake', 14],
        ['Lemon Tart', 10],
        ['Caramelized Banana Foster', 12],
        );

    loadMenuCategory(
        'Alcohol Free',
        ['Virgin Mojito', 8],
        ['Cucumber Sparkler', 7],
        ['Ginger Elixir', 8],
        ['Lavender Lemonade', 7],
        );
}

const loadMenuCategory = (categoryName, ...Items) => {
    let categoryDiv = document.createElement('div');
    let categoryNameDiv = document.createElement('div');
    let itemsWrapper = document.createElement('div');
    
    categoryDiv.classList.add('category');
    categoryNameDiv.classList.add('category-name');
    itemsWrapper.classList.add('items-wrapper');

    categoryNameDiv.textContent = categoryName;

    categoryDiv.appendChild(categoryNameDiv);

    for (let [name, price] of Items) {
        loadMenuItem(name, price, itemsWrapper);
    }

    categoryDiv.appendChild(itemsWrapper);
    contentDiv.appendChild(categoryDiv);
}

const loadMenuItem = (name, price, wrapper) => {
    let nameDiv = document.createElement('div');
    let priceDiv = document.createElement('div');
    let itemWrapper = document.createElement('div');

    nameDiv.classList.add('menu-item-name');
    priceDiv.classList.add('menu-item-price');
    itemWrapper.classList.add('menu-item-wrapper');

    nameDiv.textContent = name;
    priceDiv.textContent = price;

    itemWrapper.appendChild(nameDiv);
    itemWrapper.appendChild(priceDiv);

    wrapper.appendChild(itemWrapper);
}



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
/* harmony import */ var _homePage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./homePage */ "./src/homePage.js");
/* harmony import */ var _menuPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menuPage */ "./src/menuPage.js");
/* harmony import */ var _contactPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contactPage */ "./src/contactPage.js");




let contentDiv = document.querySelector('#content');
let currentPage = 'home'

const loadTabs = () => {

    let homeTab = document.createElement('div');
    homeTab.classList.add('home-tab');
    homeTab.textContent = 'Elysian Eats'
    homeTab.addEventListener('click', () => {
        if (currentPage == 'home') return;
        load('home');
    });

    let menuTab = document.createElement('div');
    menuTab.classList.add('menu-tab');
    menuTab.textContent = 'Menu';
    menuTab.addEventListener('click', () => {
        if(currentPage == 'menu') return;
        load('menu');
    });

    let contactTab = document.createElement('div');
    contactTab.classList.add('contact-tab')
    contactTab.textContent = 'Contact';
    contactTab.addEventListener('click', () => {
        if(currentPage == 'contact') return;
        load('contact');
    })
    
    let tabMenu = document.createElement('div');
    tabMenu.classList.add('tabs');
    tabMenu.appendChild(homeTab)
    tabMenu.appendChild(menuTab)
    tabMenu.appendChild(contactTab)
    
    contentDiv.appendChild(tabMenu);
}

const load = (page) => {
    currentPage = page
    let newContent = document.createElement('div');
    newContent.id = 'content'
    contentDiv.replaceWith(newContent);
    contentDiv = document.querySelector('#content');
    loadTabs()
    switch (page) {
        case 'home':
            ;(0,_homePage__WEBPACK_IMPORTED_MODULE_0__.loadHome)();
            break;
        case 'menu':
            (0,_menuPage__WEBPACK_IMPORTED_MODULE_1__.loadMenu)();
            break;
        case 'contact':
            (0,_contactPage__WEBPACK_IMPORTED_MODULE_2__.loadContact)();
            break;
    }
}; load('contact');


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqQ29COztBQUVwQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsQ29COztBQUVwQjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7O1VDNUdBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7Ozs7Ozs7Ozs7OztBQ0FzQztBQUNBO0FBQ007O0FBRTVDO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxvREFBUTtBQUNwQjtBQUNBO0FBQ0EsWUFBWSxtREFBUTtBQUNwQjtBQUNBO0FBQ0EsWUFBWSx5REFBVztBQUN2QjtBQUNBO0FBQ0EsR0FBRyIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvY29udGFjdFBhZ2UuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2hvbWVQYWdlLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tZW51UGFnZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYDpyb290IHtcbiAgICBmb250LXNpemU6IDYyLjUlO1xufVxuYm9keSB7XG4gICAgbWFyZ2luOiAwO1xufVxuI2NvbnRlbnQge1xuICAgIHdpZHRoOiAxMDgwcHg7XG4gICAgbWFyZ2luOiAzcmVtIGF1dG87XG4gICAgZ2FwOiAxcmVtO1xuXG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCBjYWxjKDEwODBweCAvIDMpKTtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4udGFicyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdhcDogMS42cmVtO1xufVxuXG4uaG9tZS10YWIge1xuICAgIGZvbnQtc2l6ZTogNi40cmVtO1xuICAgIHBhZGRpbmc6IC44cmVtIDEuNnJlbTtcbn1cbi5tZW51LXRhYiwgLmNvbnRhY3QtdGFiIHtcbiAgICBmb250LXNpemU6IDMuNnJlbTtcbiAgICBwYWRkaW5nOiAuOHJlbSAxLjZyZW07XG5cbn1cblxuLm1lbnUtdGFiOmhvdmVyLCAuY29udGFjdC10YWI6aG92ZXIsIC5ob21lLXRhYjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjE3MSk7XG59XG5cbi5tZW51LXRhYjphY3RpdmUsIC5jb250YWN0LXRhYjphY3RpdmUsIC5ob21lLXRhYjphY3RpdmUge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcbn1cblxuaW1nIHtcbiAgICB3aWR0aDogY2FsYygxMDgwcHggLyAzKTtcbn1cblxuLnRleHQge1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgZm9udC1zaXplOiAyLjJyZW07XG4gICAgbGluZS1oZWlnaHQ6IDQuM3JlbTtcbiAgICBwYWRkaW5nOiAxLjZyZW0gMy4ycmVtO1xufVxuXG4uY2F0ZWdvcnksIC5jb250YWN0LWJsb2Nre1xuICAgIGZvbnQtc2l6ZTogMS44cmVtO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgYWxpZ24tc2VsZjogc3RhcnQ7XG5cbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZ2FwOiAxLjZyZW07XG59XG5cbi5jYXRlZ29yeS1uYW1lLCAuY29udGFjdC10aXRsZSB7XG4gICAgcGFkZGluZzogLjhyZW07XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5pdGVtcy13cmFwcGVyIHtcbiAgICBib3JkZXItbGVmdDogM3B4IHNvbGlkIGJsYWNrO1xuICAgIHBhZGRpbmc6IC44cmVtO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IDEuNnJlbTtcbn1cblxuLm1lbnUtaXRlbS13cmFwcGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGdhcDogMy4ycmVtO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksU0FBUztBQUNiO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsaUJBQWlCO0lBQ2pCLFNBQVM7O0lBRVQsYUFBYTtJQUNiLGtEQUFrRDtJQUNsRCxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixxQkFBcUI7QUFDekI7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQixxQkFBcUI7O0FBRXpCOztBQUVBO0lBQ0ksc0NBQXNDO0FBQzFDOztBQUVBO0lBQ0ksb0NBQW9DO0FBQ3hDOztBQUVBO0lBQ0ksdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIsc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLHNCQUFzQjtJQUN0QixpQkFBaUI7O0lBRWpCLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsV0FBVztBQUNmOztBQUVBO0lBQ0ksY0FBYztJQUNkLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLDRCQUE0QjtJQUM1QixjQUFjO0lBQ2QsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsV0FBVztJQUNYLDhCQUE4QjtBQUNsQ1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdCB7XFxuICAgIGZvbnQtc2l6ZTogNjIuNSU7XFxufVxcbmJvZHkge1xcbiAgICBtYXJnaW46IDA7XFxufVxcbiNjb250ZW50IHtcXG4gICAgd2lkdGg6IDEwODBweDtcXG4gICAgbWFyZ2luOiAzcmVtIGF1dG87XFxuICAgIGdhcDogMXJlbTtcXG5cXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgY2FsYygxMDgwcHggLyAzKSk7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi50YWJzIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAxLjZyZW07XFxufVxcblxcbi5ob21lLXRhYiB7XFxuICAgIGZvbnQtc2l6ZTogNi40cmVtO1xcbiAgICBwYWRkaW5nOiAuOHJlbSAxLjZyZW07XFxufVxcbi5tZW51LXRhYiwgLmNvbnRhY3QtdGFiIHtcXG4gICAgZm9udC1zaXplOiAzLjZyZW07XFxuICAgIHBhZGRpbmc6IC44cmVtIDEuNnJlbTtcXG5cXG59XFxuXFxuLm1lbnUtdGFiOmhvdmVyLCAuY29udGFjdC10YWI6aG92ZXIsIC5ob21lLXRhYjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4xNzEpO1xcbn1cXG5cXG4ubWVudS10YWI6YWN0aXZlLCAuY29udGFjdC10YWI6YWN0aXZlLCAuaG9tZS10YWI6YWN0aXZlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xcbn1cXG5cXG5pbWcge1xcbiAgICB3aWR0aDogY2FsYygxMDgwcHggLyAzKTtcXG59XFxuXFxuLnRleHQge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBmb250LXNpemU6IDIuMnJlbTtcXG4gICAgbGluZS1oZWlnaHQ6IDQuM3JlbTtcXG4gICAgcGFkZGluZzogMS42cmVtIDMuMnJlbTtcXG59XFxuXFxuLmNhdGVnb3J5LCAuY29udGFjdC1ibG9ja3tcXG4gICAgZm9udC1zaXplOiAxLjhyZW07XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIGFsaWduLXNlbGY6IHN0YXJ0O1xcblxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDEuNnJlbTtcXG59XFxuXFxuLmNhdGVnb3J5LW5hbWUsIC5jb250YWN0LXRpdGxlIHtcXG4gICAgcGFkZGluZzogLjhyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4uaXRlbXMtd3JhcHBlciB7XFxuICAgIGJvcmRlci1sZWZ0OiAzcHggc29saWQgYmxhY2s7XFxuICAgIHBhZGRpbmc6IC44cmVtO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDEuNnJlbTtcXG59XFxuXFxuLm1lbnUtaXRlbS13cmFwcGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAzLjJyZW07XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnXG5cbmxldCBjb250ZW50RGl2XG5cbmNvbnN0IGxvYWRDb250YWN0ID0gKCkgPT4ge1xuICAgIGNvbnRlbnREaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpO1xuXG4gICAgbGV0IGNvbnRhY3REaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBsZXQgaXRlbXNXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbGV0IHRpdGxlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbGV0IGFkZHJlc3NEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBsZXQgcGhvbmVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBsZXQgZW1haWxEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBcbiAgICBjb250YWN0RGl2LmNsYXNzTGlzdC5hZGQoJ2NvbnRhY3QtYmxvY2snKTtcbiAgICBpdGVtc1dyYXBwZXIuY2xhc3NMaXN0LmFkZCgnaXRlbXMtd3JhcHBlcicpO1xuICAgIHRpdGxlRGl2LmNsYXNzTGlzdC5hZGQoJ2NvbnRhY3QtdGl0bGUnKTtcbiAgICBhZGRyZXNzRGl2LmNsYXNzTGlzdC5hZGQoJ2l0ZW0nKTtcbiAgICBwaG9uZURpdi5jbGFzc0xpc3QuYWRkKCdpdGVtJyk7XG4gICAgZW1haWxEaXYuY2xhc3NMaXN0LmFkZCgnaXRlbScpO1xuXG4gICAgdGl0bGVEaXYudGV4dENvbnRlbnQgPSAnQ29udGFjdCc7XG4gICAgYWRkcmVzc0Rpdi50ZXh0Q29udGVudCA9ICcxMjMgUm9zZXdvb2QgTGFuZSwgU2FwcGhpcmUgU3ByaW5ncywgQ0EgOTAyMTAnXG4gICAgcGhvbmVEaXYudGV4dENvbnRlbnQgPSAnNTQtMjMzMi0zMjQyJ1xuICAgIGVtYWlsRGl2LnRleHRDb250ZW50ID0gJ3JhbmRvbXVzZXIxMjNAZXhhbXBsZS5jb20nXG5cblxuICAgIGNvbnRhY3REaXYuYXBwZW5kQ2hpbGQodGl0bGVEaXYpO1xuICAgIGl0ZW1zV3JhcHBlci5hcHBlbmRDaGlsZChhZGRyZXNzRGl2KTtcbiAgICBpdGVtc1dyYXBwZXIuYXBwZW5kQ2hpbGQocGhvbmVEaXYpO1xuICAgIGl0ZW1zV3JhcHBlci5hcHBlbmRDaGlsZChlbWFpbERpdik7XG4gICAgY29udGFjdERpdi5hcHBlbmRDaGlsZChpdGVtc1dyYXBwZXIpO1xuICAgIGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQoY29udGFjdERpdik7XG59XG5cbmV4cG9ydCB7bG9hZENvbnRhY3R9IiwiaW1wb3J0ICcuL3N0eWxlLmNzcydcblxubGV0IGNvbnRlbnREaXZcblxuY29uc3QgbG9hZEhvbWUgPSAoKSA9PiB7XG4gICAgY29udGVudERpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50Jyk7XG4gICAgbG9hZFNlY3Rpb24oXG4gICAgICAgIGBXZWxjb21lIHRvIFwiRWx5c2lhbiBFYXRzLFwiIHdoZXJlIGN1bGluYXJ5IGFydGlzdHJ5IG1lZXRzIG9wdWxlbnQgYW1iaWFuY2UgaW4gYSBzeW1waG9ueSBvZiBpbmR1bGdlbmNlLiBOZXN0bGVkIGluIHRoZSBoZWFydCBvZiB0aGUgY2l0eSdzIG1vc3QgdmlicmFudCBkaXN0cmljdCwgdGhpcyBoaWdoLWVuZCByZXN0YXVyYW50IGlzIGEgZ2FzdHJvbm9taWMgaGF2ZW4gZm9yIHRob3NlIHNlZWtpbmcgYW4gdW5mb3JnZXR0YWJsZSBkaW5pbmcgZXhwZXJpZW5jZS4gQXMgeW91IHN0ZXAgdGhyb3VnaCB0aGUgaW1wb3NpbmcgbWFob2dhbnkgZG9vcnMsIHlvdSdyZSBncmVldGVkIGJ5IGFuIGVuY2hhbnRpbmcgZnVzaW9uIG9mIG1vZGVybiBlbGVnYW5jZSBhbmQgdGltZWxlc3MgY2hhcm0uYCxcbiAgICAgICAgJ2h0dHBzOi8vaW1hZ2VzLnBleGVscy5jb20vcGhvdG9zLzExMDkxOTcvcGV4ZWxzLXBob3RvLTExMDkxOTcuanBlZycsXG4gICAgKTtcblxuICAgIGxvYWRTZWN0aW9uKFxuICAgICAgICBgVGhlIGludGVyaW9yIG9mIFwiRWx5c2lhbiBFYXRzXCIgZXh1ZGVzIHNvcGhpc3RpY2F0aW9uLCB3aXRoIGl0cyBzb2Z0LCBhbWJpZW50IGxpZ2h0aW5nIGNhc3RpbmcgYSB3YXJtIGdsb3cgb24gcGx1c2ggdmVsdmV0IHVwaG9sc3RlcnkgYW5kIHBvbGlzaGVkIG1hcmJsZSB0YWJsZXMuIENyeXN0YWwgY2hhbmRlbGllcnMgZ2xpc3RlbiBvdmVyaGVhZCwgY2FzdGluZyBkYW5jaW5nIHNoYWRvd3Mgb24gdGhlIHdhbGxzIGFkb3JuZWQgd2l0aCBvcmlnaW5hbCB3b3JrcyBvZiBhcnQuIFRoZSBhaXIgaXMgZmlsbGVkIHdpdGggYSBzeW1waG9ueSBvZiBhcm9tYXMsIGEgdGFudGFsaXppbmcgcHJldmlldyBvZiB0aGUgY3VsaW5hcnkgZGVsaWdodHMgYXdhaXRpbmcgeW91LmAsXG4gICAgICAgICdodHRwczovL2ltYWdlcy5wZXhlbHMuY29tL3Bob3Rvcy80MjUzMTI3L3BleGVscy1waG90by00MjUzMTI3LmpwZWcnLFxuICAgICk7XG4gICAgbG9hZFNlY3Rpb24oXG4gICAgICAgIGBPdXIgd29ybGQtcmVub3duZWQgY2hlZnMsIGFydGlzYW5zIG9mIGZsYXZvciwgaGF2ZSBjdXJhdGVkIGEgbWVudSB0aGF0IHJlZmxlY3RzIHRoZWlyIHBhc3Npb24gZm9yIGN1bGluYXJ5IGV4Y2VsbGVuY2UuIEVhY2ggZGlzaCBpcyBhIG1hc3RlcnBpZWNlLCBhIGhhcm1vbmlvdXMgYmxlbmQgb2YgZXhxdWlzaXRlIGluZ3JlZGllbnRzIHNvdXJjZWQgZnJvbSBhcm91bmQgdGhlIGdsb2JlLCBhcnRmdWxseSBwbGF0ZWQgdG8gdGFudGFsaXplIHRoZSBzZW5zZXMuIFdoZXRoZXIgeW91IGNyYXZlIHN1Y2N1bGVudCBzZWFmb29kLCB0ZW5kZXIgY3V0cyBvZiBtZWF0LCBvciBpbnNwaXJlZCB2ZWdldGFyaWFuIGNyZWF0aW9ucywgXCJFbHlzaWFuIEVhdHNcIiBvZmZlcnMgYSBmZWFzdCBmb3IgZXZlcnkgcGFsYXRlLmAsXG4gICAgICAgICdodHRwczovL2ltYWdlcy5wZXhlbHMuY29tL3Bob3Rvcy8zMzM4NDk3L3BleGVscy1waG90by0zMzM4NDk3LmpwZWc/YXV0bz1jb21wcmVzcyZjcz10aW55c3JnYiZ3PTE2MDAnLFxuICAgICk7XG4gICAgbG9hZFNlY3Rpb24oXG4gICAgICAgIGBgLFxuICAgICAgICAnaHR0cHM6Ly9pbWFnZXMucGV4ZWxzLmNvbS9waG90b3MvNDI1MzMyMC9wZXhlbHMtcGhvdG8tNDI1MzMyMC5qcGVnP2F1dG89Y29tcHJlc3MmY3M9dGlueXNyZ2Imdz0xMjYwJmg9NzUwJmRwcj0xJyxcbiAgICApO1xufVxuXG5jb25zdCBsb2FkU2VjdGlvbiA9ICh0ZXh0LCBpbWdVUkwpID0+IHtcbiAgICBsZXQgaW1nVGFnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgaW1nVGFnLnNldEF0dHJpYnV0ZSgnc3JjJyxpbWdVUkwpO1xuICAgIGxldCB0ZXh0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGV4dERpdi5jbGFzc0xpc3QuYWRkKCd0ZXh0Jyk7XG4gICAgdGV4dERpdi50ZXh0Q29udGVudCA9IHRleHRcblxuICAgIGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQoaW1nVGFnKTtcbiAgICBjb250ZW50RGl2LmFwcGVuZENoaWxkKHRleHREaXYpO1xufVxuXG5leHBvcnQge2xvYWRIb21lfSIsImltcG9ydCAnLi9zdHlsZS5jc3MnXG5cbmxldCBjb250ZW50RGl2XG5cbmNvbnN0IGxvYWRNZW51ID0gKCkgPT4ge1xuICAgIGNvbnRlbnREaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpO1xuXG4gICAgbG9hZE1lbnVDYXRlZ29yeShcbiAgICAgICAgJ1N0YXJ0ZXJzJyxcbiAgICAgICAgWydTZWFyZWQgU2NhbGxvcCB3aXRoIFRydWZmbGUgUmlzb3R0bycsIDEwXSxcbiAgICAgICAgWydGb2llIEdyYXMgd2l0aCBCcmlvY2hlIGFuZCBGcnVpdCBDb21wb3RlJywgMTRdLFxuICAgICAgICBbJ0xvYnN0ZXIgQmlzcXVlJywgMTJdLFxuICAgICAgICBbJ0JlZWYgVGFydGFyZScsIDEwXSxcbiAgICAgICAgWydQYW4tU2VhcmVkIER1Y2sgQnJlYXN0JywgOV0sXG4gICAgICAgICk7XG5cbiAgICBsb2FkTWVudUNhdGVnb3J5KFxuICAgICAgICAnQnJlYWtmYXN0JyxcbiAgICAgICAgWydFZ2dzIEJlbmVkaWN0IFJveWFsZScsIDE4XSxcbiAgICAgICAgWydRdWljaGUgTG9ycmFpbmUnLCAxNl0sXG4gICAgICAgIFsnQXZvY2FkbyBUb2FzdCB3aXRoIFNtb2tlZCBTYWxtb24nLCAxNF0sXG4gICAgICAgIFsnQ3JvaXNzYW50IEZyZW5jaCBUb2FzdCcsIDE2XSxcbiAgICAgICAgWydUcnVmZmxlIFNjcmFtYmxlZCBFZ2dzJywgMjBdLFxuICAgICAgICBbJ0JlbGdpYW4gV2FmZmxlIERlbGlnaHQnLCAxNF0sXG4gICAgICAgIFsnU2hha3NodWthIFJveWFsZScsIDIyXVxuICAgICAgICApO1xuXG4gICAgbG9hZE1lbnVDYXRlZ29yeShcbiAgICAgICAgJ01haW4gUGxhdGVzJyxcbiAgICAgICAgWydGaWxldCBNaWdub24nLCAzNV0sXG4gICAgICAgIFsnTG9ic3RlciBUYWlsIHdpdGggR2FybGljIEJ1dHRlcicsIDQwXSxcbiAgICAgICAgWydUcnVmZmxlIFJpc290dG8gd2l0aCBXaWxkIE11c2hyb29tcycsIDMwXSxcbiAgICAgICAgWydHcmlsbGVkIENoaWxlYW4gU2VhIEJhc3MnLCA0MF0sXG4gICAgICAgIFtgRHVjayDDoCBsJ09yYW5nZWAsIDM1XSxcbiAgICAgICAgWydWZWFsIE9zc28gQnVjbycsIDQwXSxcbiAgICAgICAgWydXaWxkLWNhdWdodCBTYWxtb24gd2l0aCBMZW1vbi1EaWxsIFNhdWNlJywgMzBdLFxuICAgICAgICBbJ1ZlZ2V0YWJsZSBXZWxsaW5ndG9uJywgMjVdLFxuICAgICAgICBbJ1N1cmYgYW5kIFR1cmYnLCA1NV0sXG4gICAgICAgICk7XG5cbiAgICBsb2FkTWVudUNhdGVnb3J5KFxuICAgICAgICAnRHJpbmtzJyxcbiAgICAgICAgWydDbGFzc2ljIE1hcnRpbmknLCAxMl0sXG4gICAgICAgIFsnRnJlbmNoIDc1JywgMTRdLFxuICAgICAgICBbJ05lZ3JvbmkgU2JhZ2xpYXRvJywgMTQuNV0sXG4gICAgICAgIFsnQm91bGV2YXJkaWVyJywgMTRdLFxuICAgICAgICBbJ01hbmdvIGFuZCBDaGlsaSBNYXJnYXJpdGEnLCAxNl0sXG4gICAgICAgIFsnQXZpYXRpb24gQ29ja3RhaWwnLCAxNV0sXG4gICAgICAgIFsnRWxkZXJmbG93ZXIgU3ByaXR6JywgMTJdXG4gICAgICAgICk7XG4gICAgbG9hZE1lbnVDYXRlZ29yeShcbiAgICAgICAgJ0Rlc3NlcnRzJyxcbiAgICAgICAgWydNb2x0ZW4gQ2hvY29sYXRlIExhdmEgQ2FrZScsIDEyXSxcbiAgICAgICAgWydDcsOobWUgQnLDu2zDqWUnLCAxMF0sXG4gICAgICAgIFsnVGlyYW1pc3UnLCAxMl0sXG4gICAgICAgIFsnUGFubmEgQ290dGEnLCAxMF0sXG4gICAgICAgIFsnQ2hlZXNlY2FrZSB3aXRoIEJlcnJ5IENvbXBvdGUnLCAxMl0sXG4gICAgICAgIFsnT3BlcmEgQ2FrZScsIDE0XSxcbiAgICAgICAgWydMZW1vbiBUYXJ0JywgMTBdLFxuICAgICAgICBbJ0NhcmFtZWxpemVkIEJhbmFuYSBGb3N0ZXInLCAxMl0sXG4gICAgICAgICk7XG5cbiAgICBsb2FkTWVudUNhdGVnb3J5KFxuICAgICAgICAnQWxjb2hvbCBGcmVlJyxcbiAgICAgICAgWydWaXJnaW4gTW9qaXRvJywgOF0sXG4gICAgICAgIFsnQ3VjdW1iZXIgU3BhcmtsZXInLCA3XSxcbiAgICAgICAgWydHaW5nZXIgRWxpeGlyJywgOF0sXG4gICAgICAgIFsnTGF2ZW5kZXIgTGVtb25hZGUnLCA3XSxcbiAgICAgICAgKTtcbn1cblxuY29uc3QgbG9hZE1lbnVDYXRlZ29yeSA9IChjYXRlZ29yeU5hbWUsIC4uLkl0ZW1zKSA9PiB7XG4gICAgbGV0IGNhdGVnb3J5RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbGV0IGNhdGVnb3J5TmFtZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGxldCBpdGVtc1dyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBcbiAgICBjYXRlZ29yeURpdi5jbGFzc0xpc3QuYWRkKCdjYXRlZ29yeScpO1xuICAgIGNhdGVnb3J5TmFtZURpdi5jbGFzc0xpc3QuYWRkKCdjYXRlZ29yeS1uYW1lJyk7XG4gICAgaXRlbXNXcmFwcGVyLmNsYXNzTGlzdC5hZGQoJ2l0ZW1zLXdyYXBwZXInKTtcblxuICAgIGNhdGVnb3J5TmFtZURpdi50ZXh0Q29udGVudCA9IGNhdGVnb3J5TmFtZTtcblxuICAgIGNhdGVnb3J5RGl2LmFwcGVuZENoaWxkKGNhdGVnb3J5TmFtZURpdik7XG5cbiAgICBmb3IgKGxldCBbbmFtZSwgcHJpY2VdIG9mIEl0ZW1zKSB7XG4gICAgICAgIGxvYWRNZW51SXRlbShuYW1lLCBwcmljZSwgaXRlbXNXcmFwcGVyKTtcbiAgICB9XG5cbiAgICBjYXRlZ29yeURpdi5hcHBlbmRDaGlsZChpdGVtc1dyYXBwZXIpO1xuICAgIGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQoY2F0ZWdvcnlEaXYpO1xufVxuXG5jb25zdCBsb2FkTWVudUl0ZW0gPSAobmFtZSwgcHJpY2UsIHdyYXBwZXIpID0+IHtcbiAgICBsZXQgbmFtZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGxldCBwcmljZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGxldCBpdGVtV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgbmFtZURpdi5jbGFzc0xpc3QuYWRkKCdtZW51LWl0ZW0tbmFtZScpO1xuICAgIHByaWNlRGl2LmNsYXNzTGlzdC5hZGQoJ21lbnUtaXRlbS1wcmljZScpO1xuICAgIGl0ZW1XcmFwcGVyLmNsYXNzTGlzdC5hZGQoJ21lbnUtaXRlbS13cmFwcGVyJyk7XG5cbiAgICBuYW1lRGl2LnRleHRDb250ZW50ID0gbmFtZTtcbiAgICBwcmljZURpdi50ZXh0Q29udGVudCA9IHByaWNlO1xuXG4gICAgaXRlbVdyYXBwZXIuYXBwZW5kQ2hpbGQobmFtZURpdik7XG4gICAgaXRlbVdyYXBwZXIuYXBwZW5kQ2hpbGQocHJpY2VEaXYpO1xuXG4gICAgd3JhcHBlci5hcHBlbmRDaGlsZChpdGVtV3JhcHBlcik7XG59XG5cbmV4cG9ydCB7bG9hZE1lbnV9IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IHsgbG9hZEhvbWUgfSBmcm9tICcuL2hvbWVQYWdlJztcbmltcG9ydCB7IGxvYWRNZW51IH0gZnJvbSAnLi9tZW51UGFnZSc7XG5pbXBvcnQgeyBsb2FkQ29udGFjdCB9IGZyb20gJy4vY29udGFjdFBhZ2UnO1xuXG5sZXQgY29udGVudERpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50Jyk7XG5sZXQgY3VycmVudFBhZ2UgPSAnaG9tZSdcblxuY29uc3QgbG9hZFRhYnMgPSAoKSA9PiB7XG5cbiAgICBsZXQgaG9tZVRhYiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGhvbWVUYWIuY2xhc3NMaXN0LmFkZCgnaG9tZS10YWInKTtcbiAgICBob21lVGFiLnRleHRDb250ZW50ID0gJ0VseXNpYW4gRWF0cydcbiAgICBob21lVGFiLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBpZiAoY3VycmVudFBhZ2UgPT0gJ2hvbWUnKSByZXR1cm47XG4gICAgICAgIGxvYWQoJ2hvbWUnKTtcbiAgICB9KTtcblxuICAgIGxldCBtZW51VGFiID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbWVudVRhYi5jbGFzc0xpc3QuYWRkKCdtZW51LXRhYicpO1xuICAgIG1lbnVUYWIudGV4dENvbnRlbnQgPSAnTWVudSc7XG4gICAgbWVudVRhYi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgaWYoY3VycmVudFBhZ2UgPT0gJ21lbnUnKSByZXR1cm47XG4gICAgICAgIGxvYWQoJ21lbnUnKTtcbiAgICB9KTtcblxuICAgIGxldCBjb250YWN0VGFiID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29udGFjdFRhYi5jbGFzc0xpc3QuYWRkKCdjb250YWN0LXRhYicpXG4gICAgY29udGFjdFRhYi50ZXh0Q29udGVudCA9ICdDb250YWN0JztcbiAgICBjb250YWN0VGFiLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBpZihjdXJyZW50UGFnZSA9PSAnY29udGFjdCcpIHJldHVybjtcbiAgICAgICAgbG9hZCgnY29udGFjdCcpO1xuICAgIH0pXG4gICAgXG4gICAgbGV0IHRhYk1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0YWJNZW51LmNsYXNzTGlzdC5hZGQoJ3RhYnMnKTtcbiAgICB0YWJNZW51LmFwcGVuZENoaWxkKGhvbWVUYWIpXG4gICAgdGFiTWVudS5hcHBlbmRDaGlsZChtZW51VGFiKVxuICAgIHRhYk1lbnUuYXBwZW5kQ2hpbGQoY29udGFjdFRhYilcbiAgICBcbiAgICBjb250ZW50RGl2LmFwcGVuZENoaWxkKHRhYk1lbnUpO1xufVxuXG5jb25zdCBsb2FkID0gKHBhZ2UpID0+IHtcbiAgICBjdXJyZW50UGFnZSA9IHBhZ2VcbiAgICBsZXQgbmV3Q29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG5ld0NvbnRlbnQuaWQgPSAnY29udGVudCdcbiAgICBjb250ZW50RGl2LnJlcGxhY2VXaXRoKG5ld0NvbnRlbnQpO1xuICAgIGNvbnRlbnREaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpO1xuICAgIGxvYWRUYWJzKClcbiAgICBzd2l0Y2ggKHBhZ2UpIHtcbiAgICAgICAgY2FzZSAnaG9tZSc6XG4gICAgICAgICAgICBsb2FkSG9tZSgpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ21lbnUnOlxuICAgICAgICAgICAgbG9hZE1lbnUoKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdjb250YWN0JzpcbiAgICAgICAgICAgIGxvYWRDb250YWN0KCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICB9XG59OyBsb2FkKCdjb250YWN0Jyk7XG5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==