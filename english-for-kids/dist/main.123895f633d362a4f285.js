/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/script.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/normalize.css/normalize.css":
/*!****************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/normalize.css/normalize.css ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \"/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\\n\\n/* Document\\n   ========================================================================== */\\n\\n/**\\n * 1. Correct the line height in all browsers.\\n * 2. Prevent adjustments of font size after orientation changes in iOS.\\n */\\n\\nhtml {\\n  line-height: 1.15; /* 1 */\\n  -webkit-text-size-adjust: 100%; /* 2 */\\n}\\n\\n/* Sections\\n   ========================================================================== */\\n\\n/**\\n * Remove the margin in all browsers.\\n */\\n\\nbody {\\n  margin: 0;\\n}\\n\\n/**\\n * Render the `main` element consistently in IE.\\n */\\n\\nmain {\\n  display: block;\\n}\\n\\n/**\\n * Correct the font size and margin on `h1` elements within `section` and\\n * `article` contexts in Chrome, Firefox, and Safari.\\n */\\n\\nh1 {\\n  font-size: 2em;\\n  margin: 0.67em 0;\\n}\\n\\n/* Grouping content\\n   ========================================================================== */\\n\\n/**\\n * 1. Add the correct box sizing in Firefox.\\n * 2. Show the overflow in Edge and IE.\\n */\\n\\nhr {\\n  box-sizing: content-box; /* 1 */\\n  height: 0; /* 1 */\\n  overflow: visible; /* 2 */\\n}\\n\\n/**\\n * 1. Correct the inheritance and scaling of font size in all browsers.\\n * 2. Correct the odd `em` font sizing in all browsers.\\n */\\n\\npre {\\n  font-family: monospace, monospace; /* 1 */\\n  font-size: 1em; /* 2 */\\n}\\n\\n/* Text-level semantics\\n   ========================================================================== */\\n\\n/**\\n * Remove the gray background on active links in IE 10.\\n */\\n\\na {\\n  background-color: transparent;\\n}\\n\\n/**\\n * 1. Remove the bottom border in Chrome 57-\\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\\n */\\n\\nabbr[title] {\\n  border-bottom: none; /* 1 */\\n  text-decoration: underline; /* 2 */\\n  text-decoration: underline dotted; /* 2 */\\n}\\n\\n/**\\n * Add the correct font weight in Chrome, Edge, and Safari.\\n */\\n\\nb,\\nstrong {\\n  font-weight: bolder;\\n}\\n\\n/**\\n * 1. Correct the inheritance and scaling of font size in all browsers.\\n * 2. Correct the odd `em` font sizing in all browsers.\\n */\\n\\ncode,\\nkbd,\\nsamp {\\n  font-family: monospace, monospace; /* 1 */\\n  font-size: 1em; /* 2 */\\n}\\n\\n/**\\n * Add the correct font size in all browsers.\\n */\\n\\nsmall {\\n  font-size: 80%;\\n}\\n\\n/**\\n * Prevent `sub` and `sup` elements from affecting the line height in\\n * all browsers.\\n */\\n\\nsub,\\nsup {\\n  font-size: 75%;\\n  line-height: 0;\\n  position: relative;\\n  vertical-align: baseline;\\n}\\n\\nsub {\\n  bottom: -0.25em;\\n}\\n\\nsup {\\n  top: -0.5em;\\n}\\n\\n/* Embedded content\\n   ========================================================================== */\\n\\n/**\\n * Remove the border on images inside links in IE 10.\\n */\\n\\nimg {\\n  border-style: none;\\n}\\n\\n/* Forms\\n   ========================================================================== */\\n\\n/**\\n * 1. Change the font styles in all browsers.\\n * 2. Remove the margin in Firefox and Safari.\\n */\\n\\nbutton,\\ninput,\\noptgroup,\\nselect,\\ntextarea {\\n  font-family: inherit; /* 1 */\\n  font-size: 100%; /* 1 */\\n  line-height: 1.15; /* 1 */\\n  margin: 0; /* 2 */\\n}\\n\\n/**\\n * Show the overflow in IE.\\n * 1. Show the overflow in Edge.\\n */\\n\\nbutton,\\ninput { /* 1 */\\n  overflow: visible;\\n}\\n\\n/**\\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\\n * 1. Remove the inheritance of text transform in Firefox.\\n */\\n\\nbutton,\\nselect { /* 1 */\\n  text-transform: none;\\n}\\n\\n/**\\n * Correct the inability to style clickable types in iOS and Safari.\\n */\\n\\nbutton,\\n[type=\\\"button\\\"],\\n[type=\\\"reset\\\"],\\n[type=\\\"submit\\\"] {\\n  -webkit-appearance: button;\\n}\\n\\n/**\\n * Remove the inner border and padding in Firefox.\\n */\\n\\nbutton::-moz-focus-inner,\\n[type=\\\"button\\\"]::-moz-focus-inner,\\n[type=\\\"reset\\\"]::-moz-focus-inner,\\n[type=\\\"submit\\\"]::-moz-focus-inner {\\n  border-style: none;\\n  padding: 0;\\n}\\n\\n/**\\n * Restore the focus styles unset by the previous rule.\\n */\\n\\nbutton:-moz-focusring,\\n[type=\\\"button\\\"]:-moz-focusring,\\n[type=\\\"reset\\\"]:-moz-focusring,\\n[type=\\\"submit\\\"]:-moz-focusring {\\n  outline: 1px dotted ButtonText;\\n}\\n\\n/**\\n * Correct the padding in Firefox.\\n */\\n\\nfieldset {\\n  padding: 0.35em 0.75em 0.625em;\\n}\\n\\n/**\\n * 1. Correct the text wrapping in Edge and IE.\\n * 2. Correct the color inheritance from `fieldset` elements in IE.\\n * 3. Remove the padding so developers are not caught out when they zero out\\n *    `fieldset` elements in all browsers.\\n */\\n\\nlegend {\\n  box-sizing: border-box; /* 1 */\\n  color: inherit; /* 2 */\\n  display: table; /* 1 */\\n  max-width: 100%; /* 1 */\\n  padding: 0; /* 3 */\\n  white-space: normal; /* 1 */\\n}\\n\\n/**\\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\\n */\\n\\nprogress {\\n  vertical-align: baseline;\\n}\\n\\n/**\\n * Remove the default vertical scrollbar in IE 10+.\\n */\\n\\ntextarea {\\n  overflow: auto;\\n}\\n\\n/**\\n * 1. Add the correct box sizing in IE 10.\\n * 2. Remove the padding in IE 10.\\n */\\n\\n[type=\\\"checkbox\\\"],\\n[type=\\\"radio\\\"] {\\n  box-sizing: border-box; /* 1 */\\n  padding: 0; /* 2 */\\n}\\n\\n/**\\n * Correct the cursor style of increment and decrement buttons in Chrome.\\n */\\n\\n[type=\\\"number\\\"]::-webkit-inner-spin-button,\\n[type=\\\"number\\\"]::-webkit-outer-spin-button {\\n  height: auto;\\n}\\n\\n/**\\n * 1. Correct the odd appearance in Chrome and Safari.\\n * 2. Correct the outline style in Safari.\\n */\\n\\n[type=\\\"search\\\"] {\\n  -webkit-appearance: textfield; /* 1 */\\n  outline-offset: -2px; /* 2 */\\n}\\n\\n/**\\n * Remove the inner padding in Chrome and Safari on macOS.\\n */\\n\\n[type=\\\"search\\\"]::-webkit-search-decoration {\\n  -webkit-appearance: none;\\n}\\n\\n/**\\n * 1. Correct the inability to style clickable types in iOS and Safari.\\n * 2. Change font properties to `inherit` in Safari.\\n */\\n\\n::-webkit-file-upload-button {\\n  -webkit-appearance: button; /* 1 */\\n  font: inherit; /* 2 */\\n}\\n\\n/* Interactive\\n   ========================================================================== */\\n\\n/*\\n * Add the correct display in Edge, IE 10+, and Firefox.\\n */\\n\\ndetails {\\n  display: block;\\n}\\n\\n/*\\n * Add the correct display in all browsers.\\n */\\n\\nsummary {\\n  display: list-item;\\n}\\n\\n/* Misc\\n   ========================================================================== */\\n\\n/**\\n * Add the correct display in IE 10+.\\n */\\n\\ntemplate {\\n  display: none;\\n}\\n\\n/**\\n * Add the correct display in IE 10.\\n */\\n\\n[hidden] {\\n  display: none;\\n}\\n\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./node_modules/normalize.css/normalize.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/hamburger.css":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/hamburger.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \".hamburger{\\r\\n    position: absolute;\\r\\n    width: 25px;\\r\\n    height: 25px;\\r\\n    left: 30px;\\r\\n    display: inline-block;\\r\\n    margin-top: 5px;\\r\\n    z-index: 3;\\r\\n    transition: .5s all;\\r\\n}\\r\\n\\r\\n.navigation{\\r\\n    position: absolute;\\r\\n    height: 100%;\\r\\n    width: 300px;\\r\\n    background: linear-gradient(40deg,#00bf82,#0099ae);\\r\\n    left: -300px;\\r\\n    transition: .5s all;\\r\\n    z-index: 1;\\r\\n    \\r\\n    \\r\\n}\\r\\n\\r\\n.hamburger::before {\\r\\n    content: '';\\r\\n    position: absolute;\\r\\n    display: inline-block;\\r\\n    height: 4px;\\r\\n    width: 100%;\\r\\n    border-radius: 5px;\\r\\n    background-color: rgb(100, 98, 98);\\r\\n    top: calc(50% - 3.1px);\\r\\n}\\r\\n\\r\\n.hamburger::after{\\r\\n    content: '';\\r\\n    position: absolute;\\r\\n    display: inline-block;\\r\\n    height: 4px;\\r\\n    width: 100%;\\r\\n    border-radius: 5px;\\r\\n    background-color: rgb(100, 98, 98);\\r\\n    bottom: 2px;\\r\\n\\r\\n}\\r\\n\\r\\n.hamburger_line {\\r\\n    top: 0;\\r\\n    position: absolute;\\r\\n    display: inline-block;\\r\\n    height: 4px;\\r\\n    width: 100%;\\r\\n    border-radius: 5px;\\r\\n    background-color: rgb(100, 98, 98);\\r\\n}\\r\\n\\r\\n.hamburger-transform {\\r\\n    transform: rotate(90deg);\\r\\n    transition: .5s all;\\r\\n}\\r\\n\\r\\n.burger {\\r\\n    position: relative;\\r\\n    top: 20px;\\r\\n}\\r\\n\\r\\n.show-burger{\\r\\n    left: 0px;\\r\\n    animation-duration: 0.5s;\\r\\n    animation-name: slidein;\\r\\n}\\r\\n\\r\\n.nav{\\r\\n    list-style-type: none;\\r\\n    display: flex;\\r\\n    flex-direction: column;\\r\\n    padding: 125px 50px 50px;\\r\\n}\\r\\n\\r\\n.nav-item{\\r\\n    padding-top: 10px;\\r\\n    font-size: 22px;\\r\\n    font-family: 'Roboto';\\r\\n    font-weight: 500;\\r\\n    cursor: pointer;\\r\\n}\\r\\n\\r\\n.nav-item:hover{\\r\\n    color: aliceblue;\\r\\n}\\r\\n\\r\\n.select-nav-item{\\r\\n    color: darkseagreen;\\r\\n}\\r\\n\\r\\n\\r\\n@keyframes slidein {\\r\\n    from {\\r\\n        left: -300px;\\r\\n    }\\r\\n    to {\\r\\n        left: 0;\\r\\n    }\\r\\n}\\r\\n\\r\\n\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/styles/hamburger.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/style.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/style.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nvar ___CSS_LOADER_AT_RULE_IMPORT_0___ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!../../node_modules/normalize.css */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/normalize.css/normalize.css\");\nvar ___CSS_LOADER_AT_RULE_IMPORT_1___ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./switcher.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles/switcher.css\");\nvar ___CSS_LOADER_AT_RULE_IMPORT_2___ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./hamburger.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles/hamburger.css\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\nexports.i(___CSS_LOADER_AT_RULE_IMPORT_0___);\nexports.i(___CSS_LOADER_AT_RULE_IMPORT_1___);\nexports.i(___CSS_LOADER_AT_RULE_IMPORT_2___);\n// Module\nexports.push([module.i, \".header-container {\\r\\n    /* background-color: aqua; */\\r\\n    /* height: 300px; */\\r\\n    width: 100%;\\r\\n    display: flex;\\r\\n    justify-content: space-between;\\r\\n    max-width: 1350px;\\r\\n    margin-left: auto;\\r\\n    margin-right: auto;\\r\\n    /* position: relative; */\\r\\n}\\r\\n/* content block */\\r\\n.main-container {\\r\\n    margin-top: 80px;\\r\\n    max-width: 1350px;\\r\\n    margin-left: auto;\\r\\n    margin-right: auto;\\r\\n}\\r\\n.wrapper-content{\\r\\n    display: flex;\\r\\n    width: 100%;\\r\\n    height: auto;\\r\\n    justify-content: center;\\r\\n    flex-wrap: wrap;\\r\\n}\\r\\n\\r\\n\\r\\n.card{\\r\\n    position: relative;\\r\\n    width: 280px;\\r\\n    height: 280px;\\r\\n    margin-bottom: 25px;\\r\\n    background: linear-gradient(to bottom, #3BAFDA 0%, #48CFAD 40%, white 40%, white 100%);\\r\\n    perspective: 1000px;\\r\\n    cursor: pointer;\\r\\n    opacity: 1;\\r\\n    box-shadow: 0 2px 5px 0 rgba(0,0,0,.16), 0 2px 10px 0 rgba(0,0,0,.12);\\r\\n    margin: 20px 25px;\\r\\n}\\r\\n.card:hover{\\r\\n    box-shadow: 0 2px 5px 5px rgba(0,0,0,.16), 0 2px 10px 5px rgba(0,0,0,.12);\\r\\n    transition: .5s all;\\r\\n}\\r\\n\\r\\n.front {\\r\\n    text-align: center;\\r\\n}\\r\\n\\r\\n.img-card {\\r\\n    height: 140px;\\r\\n    width: 140px;\\r\\n    border-radius: 50%;\\r\\n    object-fit: cover;\\r\\n    border: 10px solid #fff;\\r\\n    margin-top: 30px;\\r\\n    margin-left: auto;\\r\\n    margin-right: auto;\\r\\n}\\r\\n\\r\\n.card-title{\\r\\n    margin-top: 40px;\\r\\n    font-family: \\\"Roboto\\\";\\r\\n    font-size: 24px;\\r\\n    line-height: 36px;\\r\\n    font-weight: 400;\\r\\n}\\r\\n\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/styles/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/switcher.css":
/*!***********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/switcher.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \".container {\\r\\n    padding: 25px;\\r\\n  }\\r\\n  \\r\\n /* Modified CSS for on/off switch */\\r\\n  .onoffswitch {\\r\\n      position: relative; \\r\\n      width: 78px;\\r\\n      -webkit-user-select:none; -moz-user-select:none; -ms-user-select: none;\\r\\n  }\\r\\n  \\r\\n  .onoffswitch-checkbox {\\r\\n      display: none;\\r\\n  }\\r\\n  \\r\\n  .onoffswitch-label {\\r\\n      display: block; \\r\\n      overflow: hidden; \\r\\n      cursor: pointer;\\r\\n      border: 1px solid #999999; \\r\\n      border-radius: 20px;\\r\\n  }\\r\\n  \\r\\n  .onoffswitch-inner {\\r\\n      width: 200%; margin-left: -100%;\\r\\n      -moz-transition: margin 0.3s ease-in 0s; -webkit-transition: margin 0.3s ease-in 0s;\\r\\n      -o-transition: margin 0.3s ease-in 0s; transition: margin 0.3s ease-in 0s;\\r\\n  }\\r\\n  \\r\\n  .onoffswitch-inner:before, .onoffswitch-inner:after {\\r\\n      float: left; width: 50%; height: 30px; padding: 0; line-height: 30px;\\r\\n      font-size: 15px; color: white; font-family: Trebuchet, Arial, sans-serif; font-weight: bold;\\r\\n      -moz-box-sizing: border-box; -webkit-box-sizing: border-box; box-sizing: border-box;\\r\\n  }\\r\\n  \\r\\n  .onoffswitch-inner:before {\\r\\n      content: \\\"Play\\\";\\r\\n      padding-left: 11px;\\r\\n      background-color: #00A600; color: #FFFFFF;\\r\\n  }\\r\\n  \\r\\n  .onoffswitch-inner:after {\\r\\n      content: \\\"Train\\\";\\r\\n      padding-right: 11px;\\r\\n      background-color: #EEEEEE; color: #999999;\\r\\n      text-align: right;\\r\\n  }\\r\\n  \\r\\n  .onoffswitch-switch {\\r\\n      width: 26px; margin: 2px;\\r\\n      background: #FFFFFF;\\r\\n      border: 2px solid #999999; border-radius: 20px;\\r\\n      position: absolute; top: 0; bottom: 0; right: 44px;\\r\\n      -moz-transition: all 0.3s ease-in 0s; -webkit-transition: all 0.3s ease-in 0s;\\r\\n      -o-transition: all 0.3s ease-in 0s; transition: all 0.3s ease-in 0s; \\r\\n  }\\r\\n  \\r\\n  .onoffswitch-checkbox:checked + .onoffswitch-label .onoffswitch-inner {\\r\\n      margin-left: 0;\\r\\n  }\\r\\n  \\r\\n  .onoffswitch-checkbox:checked + .onoffswitch-label .onoffswitch-switch {\\r\\n      right: 0px; \\r\\n  }\\r\\n  \", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/styles/switcher.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot || '').concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n  return \"/*# \".concat(data, \" */\");\n}\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : undefined;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && btoa) {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src sync recursive ^\\.\\/.*$":
/*!***************************!*\
  !*** ./src sync ^\.\/.*$ ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var map = {\n\t\"./assets/123.png\": \"./src/assets/123.png\",\n\t\"./audio/angry.mp3\": \"./src/audio/angry.mp3\",\n\t\"./audio/bird.mp3\": \"./src/audio/bird.mp3\",\n\t\"./audio/blouse.mp3\": \"./src/audio/blouse.mp3\",\n\t\"./audio/boot.mp3\": \"./src/audio/boot.mp3\",\n\t\"./audio/cat.mp3\": \"./src/audio/cat.mp3\",\n\t\"./audio/chick.mp3\": \"./src/audio/chick.mp3\",\n\t\"./audio/chicken.mp3\": \"./src/audio/chicken.mp3\",\n\t\"./audio/coat.mp3\": \"./src/audio/coat.mp3\",\n\t\"./audio/correct.mp3\": \"./src/audio/correct.mp3\",\n\t\"./audio/cry.mp3\": \"./src/audio/cry.mp3\",\n\t\"./audio/dance.mp3\": \"./src/audio/dance.mp3\",\n\t\"./audio/dive.mp3\": \"./src/audio/dive.mp3\",\n\t\"./audio/dog.mp3\": \"./src/audio/dog.mp3\",\n\t\"./audio/dolphin.mp3\": \"./src/audio/dolphin.mp3\",\n\t\"./audio/draw.mp3\": \"./src/audio/draw.mp3\",\n\t\"./audio/dress.mp3\": \"./src/audio/dress.mp3\",\n\t\"./audio/error.mp3\": \"./src/audio/error.mp3\",\n\t\"./audio/failure.mp3\": \"./src/audio/failure.mp3\",\n\t\"./audio/fish.mp3\": \"./src/audio/fish.mp3\",\n\t\"./audio/fly.mp3\": \"./src/audio/fly.mp3\",\n\t\"./audio/frog.mp3\": \"./src/audio/frog.mp3\",\n\t\"./audio/giraffe.mp3\": \"./src/audio/giraffe.mp3\",\n\t\"./audio/happy.mp3\": \"./src/audio/happy.mp3\",\n\t\"./audio/horse.mp3\": \"./src/audio/horse.mp3\",\n\t\"./audio/hug.mp3\": \"./src/audio/hug.mp3\",\n\t\"./audio/jump.mp3\": \"./src/audio/jump.mp3\",\n\t\"./audio/laugh.mp3\": \"./src/audio/laugh.mp3\",\n\t\"./audio/lion.mp3\": \"./src/audio/lion.mp3\",\n\t\"./audio/mouse.mp3\": \"./src/audio/mouse.mp3\",\n\t\"./audio/open.mp3\": \"./src/audio/open.mp3\",\n\t\"./audio/pants.mp3\": \"./src/audio/pants.mp3\",\n\t\"./audio/pig.mp3\": \"./src/audio/pig.mp3\",\n\t\"./audio/play.mp3\": \"./src/audio/play.mp3\",\n\t\"./audio/point.mp3\": \"./src/audio/point.mp3\",\n\t\"./audio/rabbit.mp3\": \"./src/audio/rabbit.mp3\",\n\t\"./audio/ride.mp3\": \"./src/audio/ride.mp3\",\n\t\"./audio/run.mp3\": \"./src/audio/run.mp3\",\n\t\"./audio/sad.mp3\": \"./src/audio/sad.mp3\",\n\t\"./audio/scared.mp3\": \"./src/audio/scared.mp3\",\n\t\"./audio/sheep.mp3\": \"./src/audio/sheep.mp3\",\n\t\"./audio/shirt.mp3\": \"./src/audio/shirt.mp3\",\n\t\"./audio/shoe.mp3\": \"./src/audio/shoe.mp3\",\n\t\"./audio/sing.mp3\": \"./src/audio/sing.mp3\",\n\t\"./audio/skip.mp3\": \"./src/audio/skip.mp3\",\n\t\"./audio/skirt.mp3\": \"./src/audio/skirt.mp3\",\n\t\"./audio/smile.mp3\": \"./src/audio/smile.mp3\",\n\t\"./audio/success.mp3\": \"./src/audio/success.mp3\",\n\t\"./audio/surprised.mp3\": \"./src/audio/surprised.mp3\",\n\t\"./audio/swim.mp3\": \"./src/audio/swim.mp3\",\n\t\"./audio/tired.mp3\": \"./src/audio/tired.mp3\",\n\t\"./audio/turtle.mp3\": \"./src/audio/turtle.mp3\",\n\t\"./cards\": \"./src/cards.js\",\n\t\"./cards.js\": \"./src/cards.js\",\n\t\"./img/angry.jpg\": \"./src/img/angry.jpg\",\n\t\"./img/argue.jpg\": \"./src/img/argue.jpg\",\n\t\"./img/audio.svg\": \"./src/img/audio.svg\",\n\t\"./img/big.jpg\": \"./src/img/big.jpg\",\n\t\"./img/bird.jpg\": \"./src/img/bird.jpg\",\n\t\"./img/blouse.jpg\": \"./src/img/blouse.jpg\",\n\t\"./img/boot.jpg\": \"./src/img/boot.jpg\",\n\t\"./img/build.jpg\": \"./src/img/build.jpg\",\n\t\"./img/carry.jpg\": \"./src/img/carry.jpg\",\n\t\"./img/cat.jpg\": \"./src/img/cat.jpg\",\n\t\"./img/catch.jpg\": \"./src/img/catch.jpg\",\n\t\"./img/chick.jpg\": \"./src/img/chick.jpg\",\n\t\"./img/chicken.jpg\": \"./src/img/chicken.jpg\",\n\t\"./img/coat.jpg\": \"./src/img/coat.jpg\",\n\t\"./img/cry.jpg\": \"./src/img/cry.jpg\",\n\t\"./img/dance.jpg\": \"./src/img/dance.jpg\",\n\t\"./img/dive.jpg\": \"./src/img/dive.jpg\",\n\t\"./img/dog.jpg\": \"./src/img/dog.jpg\",\n\t\"./img/dolphin.jpg\": \"./src/img/dolphin.jpg\",\n\t\"./img/draw.jpg\": \"./src/img/draw.jpg\",\n\t\"./img/dress.jpg\": \"./src/img/dress.jpg\",\n\t\"./img/drive.jpg\": \"./src/img/drive.jpg\",\n\t\"./img/drop.jpg\": \"./src/img/drop.jpg\",\n\t\"./img/failure.jpg\": \"./src/img/failure.jpg\",\n\t\"./img/fast.jpg\": \"./src/img/fast.jpg\",\n\t\"./img/fish.jpg\": \"./src/img/fish.jpg\",\n\t\"./img/fish1.jpg\": \"./src/img/fish1.jpg\",\n\t\"./img/fly.jpg\": \"./src/img/fly.jpg\",\n\t\"./img/friendly.jpg\": \"./src/img/friendly.jpg\",\n\t\"./img/frog.jpg\": \"./src/img/frog.jpg\",\n\t\"./img/giraffe.jpg\": \"./src/img/giraffe.jpg\",\n\t\"./img/happy.jpg\": \"./src/img/happy.jpg\",\n\t\"./img/horse.jpg\": \"./src/img/horse.jpg\",\n\t\"./img/hug.jpg\": \"./src/img/hug.jpg\",\n\t\"./img/jump.jpg\": \"./src/img/jump.jpg\",\n\t\"./img/laugh.jpg\": \"./src/img/laugh.jpg\",\n\t\"./img/lion.jpg\": \"./src/img/lion.jpg\",\n\t\"./img/mouse.jpg\": \"./src/img/mouse.jpg\",\n\t\"./img/old.jpg\": \"./src/img/old.jpg\",\n\t\"./img/open.jpg\": \"./src/img/open.jpg\",\n\t\"./img/pants.jpg\": \"./src/img/pants.jpg\",\n\t\"./img/pig.jpg\": \"./src/img/pig.jpg\",\n\t\"./img/play.jpg\": \"./src/img/play.jpg\",\n\t\"./img/point.jpg\": \"./src/img/point.jpg\",\n\t\"./img/pull.jpg\": \"./src/img/pull.jpg\",\n\t\"./img/push.jpg\": \"./src/img/push.jpg\",\n\t\"./img/rabbit.jpg\": \"./src/img/rabbit.jpg\",\n\t\"./img/repeat.svg\": \"./src/img/repeat.svg\",\n\t\"./img/ride.jpg\": \"./src/img/ride.jpg\",\n\t\"./img/rotate.svg\": \"./src/img/rotate.svg\",\n\t\"./img/rotate1.svg\": \"./src/img/rotate1.svg\",\n\t\"./img/run.jpg\": \"./src/img/run.jpg\",\n\t\"./img/sad.jpg\": \"./src/img/sad.jpg\",\n\t\"./img/scared.jpg\": \"./src/img/scared.jpg\",\n\t\"./img/screenshot.png\": \"./src/img/screenshot.png\",\n\t\"./img/sheep.jpg\": \"./src/img/sheep.jpg\",\n\t\"./img/shirt.jpg\": \"./src/img/shirt.jpg\",\n\t\"./img/shoe.jpg\": \"./src/img/shoe.jpg\",\n\t\"./img/sing.jpg\": \"./src/img/sing.jpg\",\n\t\"./img/skip.jpg\": \"./src/img/skip.jpg\",\n\t\"./img/skirt.jpg\": \"./src/img/skirt.jpg\",\n\t\"./img/slow.jpg\": \"./src/img/slow.jpg\",\n\t\"./img/small.jpg\": \"./src/img/small.jpg\",\n\t\"./img/smile.jpg\": \"./src/img/smile.jpg\",\n\t\"./img/star-win.svg\": \"./src/img/star-win.svg\",\n\t\"./img/star.svg\": \"./src/img/star.svg\",\n\t\"./img/success.jpg\": \"./src/img/success.jpg\",\n\t\"./img/surprised.jpg\": \"./src/img/surprised.jpg\",\n\t\"./img/swim.jpg\": \"./src/img/swim.jpg\",\n\t\"./img/tired.jpg\": \"./src/img/tired.jpg\",\n\t\"./img/turtle.jpg\": \"./src/img/turtle.jpg\",\n\t\"./img/unfriendly.jpg\": \"./src/img/unfriendly.jpg\",\n\t\"./img/young.jpg\": \"./src/img/young.jpg\",\n\t\"./img/Без названия (3).svg\": \"./src/img/Без названия (3).svg\",\n\t\"./img/Без названия (4).svg\": \"./src/img/Без названия (4).svg\",\n\t\"./img/Без названия.svg\": \"./src/img/Без названия.svg\",\n\t\"./index.html\": \"./src/index.html\",\n\t\"./script\": \"./src/script.js\",\n\t\"./script.js\": \"./src/script.js\",\n\t\"./styles/hamburger.css\": \"./src/styles/hamburger.css\",\n\t\"./styles/style.css\": \"./src/styles/style.css\",\n\t\"./styles/switcher.css\": \"./src/styles/switcher.css\"\n};\n\n\nfunction webpackContext(req) {\n\tvar id = webpackContextResolve(req);\n\treturn __webpack_require__(id);\n}\nfunction webpackContextResolve(req) {\n\tif(!__webpack_require__.o(map, req)) {\n\t\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\t\te.code = 'MODULE_NOT_FOUND';\n\t\tthrow e;\n\t}\n\treturn map[req];\n}\nwebpackContext.keys = function webpackContextKeys() {\n\treturn Object.keys(map);\n};\nwebpackContext.resolve = webpackContextResolve;\nmodule.exports = webpackContext;\nwebpackContext.id = \"./src sync recursive ^\\\\.\\\\/.*$\";\n\n//# sourceURL=webpack:///./src_sync_^\\.\\/.*$?");

/***/ }),

/***/ "./src/assets/123.png":
/*!****************************!*\
  !*** ./src/assets/123.png ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"3e62593f3ea6a1851b8ade65a1c7f8aa.png\");\n\n//# sourceURL=webpack:///./src/assets/123.png?");

/***/ }),

/***/ "./src/audio/angry.mp3":
/*!*****************************!*\
  !*** ./src/audio/angry.mp3 ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module parse failed: Unexpected character '\\u0004' (1:3)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n(Source code omitted for this binary file)\");\n\n//# sourceURL=webpack:///./src/audio/angry.mp3?");

/***/ }),

/***/ "./src/audio/bird.mp3":
/*!****************************!*\
  !*** ./src/audio/bird.mp3 ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module parse failed: Unexpected character '\\u0004' (1:3)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n(Source code omitted for this binary file)\");\n\n//# sourceURL=webpack:///./src/audio/bird.mp3?");

/***/ }),

/***/ "./src/audio/blouse.mp3":
/*!******************************!*\
  !*** ./src/audio/blouse.mp3 ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module parse failed: Unexpected character '\\u0004' (1:3)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n(Source code omitted for this binary file)\");\n\n//# sourceURL=webpack:///./src/audio/blouse.mp3?");

/***/ }),

/***/ "./src/audio/boot.mp3":
/*!****************************!*\
  !*** ./src/audio/boot.mp3 ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module parse failed: Unexpected character '\\u0004' (1:3)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n(Source code omitted for this binary file)\");\n\n//# sourceURL=webpack:///./src/audio/boot.mp3?");

/***/ }),

/***/ "./src/audio/cat.mp3":
/*!***************************!*\
  !*** ./src/audio/cat.mp3 ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module parse failed: Unexpected character '\\u0004' (1:3)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n(Source code omitted for this binary file)\");\n\n//# sourceURL=webpack:///./src/audio/cat.mp3?");

/***/ }),

/***/ "./src/audio/chick.mp3":
/*!*****************************!*\
  !*** ./src/audio/chick.mp3 ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module parse failed: Unexpected character '\\u0004' (1:3)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n(Source code omitted for this binary file)\");\n\n//# sourceURL=webpack:///./src/audio/chick.mp3?");

/***/ }),

/***/ "./src/audio/chicken.mp3":
/*!*******************************!*\
  !*** ./src/audio/chicken.mp3 ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module parse failed: Unexpected character '\\u0004' (1:3)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n(Source code omitted for this binary file)\");\n\n//# sourceURL=webpack:///./src/audio/chicken.mp3?");

/***/ }),

/***/ "./src/audio/coat.mp3":
/*!****************************!*\
  !*** ./src/audio/coat.mp3 ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module parse failed: Unexpected character '\\u0004' (1:3)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n(Source code omitted for this binary file)\");\n\n//# sourceURL=webpack:///./src/audio/coat.mp3?");

/***/ }),

/***/ "./src/audio/correct.mp3":
/*!*******************************!*\
  !*** ./src/audio/correct.mp3 ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module parse failed: Unexpected character '�' (1:0)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n(Source code omitted for this binary file)\");\n\n//# sourceURL=webpack:///./src/audio/correct.mp3?");

/***/ }),

/***/ "./src/audio/cry.mp3":
/*!***************************!*\
  !*** ./src/audio/cry.mp3 ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module parse failed: Unexpected character '\\u0004' (1:3)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n(Source code omitted for this binary file)\");\n\n//# sourceURL=webpack:///./src/audio/cry.mp3?");

/***/ }),

/***/ "./src/audio/dance.mp3":
/*!*****************************!*\
  !*** ./src/audio/dance.mp3 ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module parse failed: Unexpected character '\\u0004' (1:3)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n(Source code omitted for this binary file)\");\n\n//# sourceURL=webpack:///./src/audio/dance.mp3?");

/***/ }),

/***/ "./src/audio/dive.mp3":
/*!****************************!*\
  !*** ./src/audio/dive.mp3 ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module parse failed: Unexpected character '\\u0004' (1:3)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n(Source code omitted for this binary file)\");\n\n//# sourceURL=webpack:///./src/audio/dive.mp3?");

/***/ }),

/***/ "./src/audio/dog.mp3":
/*!***************************!*\
  !*** ./src/audio/dog.mp3 ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module parse failed: Unexpected character '\\u0004' (1:3)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n(Source code omitted for this binary file)\");\n\n//# sourceURL=webpack:///./src/audio/dog.mp3?");

/***/ }),

/***/ "./src/audio/dolphin.mp3":
/*!*******************************!*\
  !*** ./src/audio/dolphin.mp3 ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module parse failed: Unexpected character '\\u0004' (1:3)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n(Source code omitted for this binary file)\");\n\n//# sourceURL=webpack:///./src/audio/dolphin.mp3?");

/***/ }),

/***/ "./src/audio/draw.mp3":
/*!****************************!*\
  !*** ./src/audio/draw.mp3 ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module parse failed: Unexpected character '\\u0004' (1:3)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n(Source code omitted for this binary file)\");\n\n//# sourceURL=webpack:///./src/audio/draw.mp3?");

/***/ }),

/***/ "./src/audio/dress.mp3":
/*!*****************************!*\
  !*** ./src/audio/dress.mp3 ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module parse failed: Unexpected character '\\u0004' (1:3)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n(Source code omitted for this binary file)\");\n\n//# sourceURL=webpack:///./src/audio/dress.mp3?");

/***/ }),

/***/ "./src/audio/error.mp3":
/*!*****************************!*\
  !*** ./src/audio/error.mp3 ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module parse failed: Unexpected character '�' (1:0)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n(Source code omitted for this binary file)\");\n\n//# sourceURL=webpack:///./src/audio/error.mp3?");

/***/ }),

/***/ "./src/audio/failure.mp3":
/*!*******************************!*\
  !*** ./src/audio/failure.mp3 ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module parse failed: Unexpected character '�' (1:0)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n(Source code omitted for this binary file)\");\n\n//# sourceURL=webpack:///./src/audio/failure.mp3?");

/***/ }),

/***/ "./src/audio/fish.mp3":
/*!****************************!*\
  !*** ./src/audio/fish.mp3 ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module parse failed: Unexpected character '\\u0004' (1:3)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n(Source code omitted for this binary file)\");\n\n//# sourceURL=webpack:///./src/audio/fish.mp3?");

/***/ }),

/***/ "./src/audio/fly.mp3":
/*!***************************!*\
  !*** ./src/audio/fly.mp3 ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module parse failed: Unexpected character '\\u0004' (1:3)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n(Source code omitted for this binary file)\");\n\n//# sourceURL=webpack:///./src/audio/fly.mp3?");

/***/ }),

/***/ "./src/audio/frog.mp3":
/*!****************************!*\
  !*** ./src/audio/frog.mp3 ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module parse failed: Unexpected character '\\u0004' (1:3)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n(Source code omitted for this binary file)\");\n\n//# sourceURL=webpack:///./src/audio/frog.mp3?");

/***/ }),

/***/ "./src/audio/giraffe.mp3":
/*!*******************************!*\
  !*** ./src/audio/giraffe.mp3 ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module parse failed: Unexpected character '\\u0004' (1:3)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n(Source code omitted for this binary file)\");\n\n//# sourceURL=webpack:///./src/audio/giraffe.mp3?");

/***/ }),

/***/ "./src/audio/happy.mp3":
/*!*****************************!*\
  !*** ./src/audio/happy.mp3 ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module parse failed: Unexpected character '\\u0004' (1:3)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n(Source code omitted for this binary file)\");\n\n//# sourceURL=webpack:///./src/audio/happy.mp3?");

/***/ }),

/***/ "./src/audio/horse.mp3":
/*!*****************************!*\
  !*** ./src/audio/horse.mp3 ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module parse failed: Unexpected character '\\u0004' (1:3)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n(Source code omitted for this binary file)\");\n\n//# sourceURL=webpack:///./src/audio/horse.mp3?");

/***/ }),

/***/ "./src/audio/hug.mp3":
/*!***************************!*\
  !*** ./src/audio/hug.mp3 ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module parse failed: Unexpected character '\\u0004' (1:3)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n(Source code omitted for this binary file)\");\n\n//# sourceURL=webpack:///./src/audio/hug.mp3?");

/***/ }),

/***/ "./src/audio/jump.mp3":
/*!****************************!*\
  !*** ./src/audio/jump.mp3 ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module parse failed: Unexpected character '\\u0004' (1:3)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n(Source code omitted for this binary file)\");\n\n//# sourceURL=webpack:///./src/audio/jump.mp3?");

/***/ }),

/***/ "./src/audio/laugh.mp3":
/*!*****************************!*\
  !*** ./src/audio/laugh.mp3 ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module parse failed: Unexpected character '\\u0004' (1:3)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n(Source code omitted for this binary file)\");\n\n//# sourceURL=webpack:///./src/audio/laugh.mp3?");

/***/ }),

/***/ "./src/audio/lion.mp3":
/*!****************************!*\
  !*** ./src/audio/lion.mp3 ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module parse failed: Unexpected character '\\u0004' (1:3)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n(Source code omitted for this binary file)\");\n\n//# sourceURL=webpack:///./src/audio/lion.mp3?");

/***/ }),

/***/ "./src/audio/mouse.mp3":
/*!*****************************!*\
  !*** ./src/audio/mouse.mp3 ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module parse failed: Unexpected character '\\u0004' (1:3)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n(Source code omitted for this binary file)\");\n\n//# sourceURL=webpack:///./src/audio/mouse.mp3?");

/***/ }),

/***/ "./src/audio/open.mp3":
/*!****************************!*\
  !*** ./src/audio/open.mp3 ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module parse failed: Unexpected character '\\u0004' (1:3)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n(Source code omitted for this binary file)\");\n\n//# sourceURL=webpack:///./src/audio/open.mp3?");

/***/ }),

/***/ "./src/audio/pants.mp3":
/*!*****************************!*\
  !*** ./src/audio/pants.mp3 ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module parse failed: Unexpected character '\\u0004' (1:3)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n(Source code omitted for this binary file)\");\n\n//# sourceURL=webpack:///./src/audio/pants.mp3?");

/***/ }),

/***/ "./src/audio/pig.mp3":
/*!***************************!*\
  !*** ./src/audio/pig.mp3 ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module parse failed: Unexpected character '\\u0004' (1:3)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n(Source code omitted for this binary file)\");\n\n//# sourceURL=webpack:///./src/audio/pig.mp3?");

/***/ }),

/***/ "./src/audio/play.mp3":
/*!****************************!*\
  !*** ./src/audio/play.mp3 ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module parse failed: Unexpected character '\\u0004' (1:3)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n(Source code omitted for this binary file)\");\n\n//# sourceURL=webpack:///./src/audio/play.mp3?");

/***/ }),

/***/ "./src/audio/point.mp3":
/*!*****************************!*\
  !*** ./src/audio/point.mp3 ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module parse failed: Unexpected character '\\u0004' (1:3)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n(Source code omitted for this binary file)\");\n\n//# sourceURL=webpack:///./src/audio/point.mp3?");

/***/ }),

/***/ "./src/audio/rabbit.mp3":
/*!******************************!*\
  !*** ./src/audio/rabbit.mp3 ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module parse failed: Unexpected character '\\u0004' (1:3)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n(Source code omitted for this binary file)\");\n\n//# sourceURL=webpack:///./src/audio/rabbit.mp3?");

/***/ }),

/***/ "./src/audio/ride.mp3":
/*!****************************!*\
  !*** ./src/audio/ride.mp3 ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module parse failed: Unexpected character '\\u0004' (1:3)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n(Source code omitted for this binary file)\");\n\n//# sourceURL=webpack:///./src/audio/ride.mp3?");

/***/ }),

/***/ "./src/audio/run.mp3":
/*!***************************!*\
  !*** ./src/audio/run.mp3 ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module parse failed: Unexpected character '\\u0004' (1:3)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n(Source code omitted for this binary file)\");\n\n//# sourceURL=webpack:///./src/audio/run.mp3?");

/***/ }),

/***/ "./src/audio/sad.mp3":
/*!***************************!*\
  !*** ./src/audio/sad.mp3 ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module parse failed: Unexpected character '\\u0004' (1:3)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n(Source code omitted for this binary file)\");\n\n//# sourceURL=webpack:///./src/audio/sad.mp3?");

/***/ }),

/***/ "./src/audio/scared.mp3":
/*!******************************!*\
  !*** ./src/audio/scared.mp3 ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module parse failed: Unexpected character '\\u0004' (1:3)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n(Source code omitted for this binary file)\");\n\n//# sourceURL=webpack:///./src/audio/scared.mp3?");

/***/ }),

/***/ "./src/audio/sheep.mp3":
/*!*****************************!*\
  !*** ./src/audio/sheep.mp3 ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module parse failed: Unexpected character '\\u0004' (1:3)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n(Source code omitted for this binary file)\");\n\n//# sourceURL=webpack:///./src/audio/sheep.mp3?");

/***/ }),

/***/ "./src/audio/shirt.mp3":
/*!*****************************!*\
  !*** ./src/audio/shirt.mp3 ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module parse failed: Unexpected character '\\u0004' (1:3)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n(Source code omitted for this binary file)\");\n\n//# sourceURL=webpack:///./src/audio/shirt.mp3?");

/***/ }),

/***/ "./src/audio/shoe.mp3":
/*!****************************!*\
  !*** ./src/audio/shoe.mp3 ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module parse failed: Unexpected character '\\u0004' (1:3)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n(Source code omitted for this binary file)\");\n\n//# sourceURL=webpack:///./src/audio/shoe.mp3?");

/***/ }),

/***/ "./src/audio/sing.mp3":
/*!****************************!*\
  !*** ./src/audio/sing.mp3 ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module parse failed: Unexpected character '\\u0004' (1:3)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n(Source code omitted for this binary file)\");\n\n//# sourceURL=webpack:///./src/audio/sing.mp3?");

/***/ }),

/***/ "./src/audio/skip.mp3":
/*!****************************!*\
  !*** ./src/audio/skip.mp3 ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module parse failed: Unexpected character '\\u0004' (1:3)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n(Source code omitted for this binary file)\");\n\n//# sourceURL=webpack:///./src/audio/skip.mp3?");

/***/ }),

/***/ "./src/audio/skirt.mp3":
/*!*****************************!*\
  !*** ./src/audio/skirt.mp3 ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module parse failed: Unexpected character '\\u0004' (1:3)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n(Source code omitted for this binary file)\");\n\n//# sourceURL=webpack:///./src/audio/skirt.mp3?");

/***/ }),

/***/ "./src/audio/smile.mp3":
/*!*****************************!*\
  !*** ./src/audio/smile.mp3 ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module parse failed: Unexpected character '\\u0004' (1:3)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n(Source code omitted for this binary file)\");\n\n//# sourceURL=webpack:///./src/audio/smile.mp3?");

/***/ }),

/***/ "./src/audio/success.mp3":
/*!*******************************!*\
  !*** ./src/audio/success.mp3 ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module parse failed: Unexpected character '\\u0002' (1:3)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n(Source code omitted for this binary file)\");\n\n//# sourceURL=webpack:///./src/audio/success.mp3?");

/***/ }),

/***/ "./src/audio/surprised.mp3":
/*!*********************************!*\
  !*** ./src/audio/surprised.mp3 ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module parse failed: Unexpected character '\\u0004' (1:3)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n(Source code omitted for this binary file)\");\n\n//# sourceURL=webpack:///./src/audio/surprised.mp3?");

/***/ }),

/***/ "./src/audio/swim.mp3":
/*!****************************!*\
  !*** ./src/audio/swim.mp3 ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module parse failed: Unexpected character '\\u0004' (1:3)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n(Source code omitted for this binary file)\");\n\n//# sourceURL=webpack:///./src/audio/swim.mp3?");

/***/ }),

/***/ "./src/audio/tired.mp3":
/*!*****************************!*\
  !*** ./src/audio/tired.mp3 ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module parse failed: Unexpected character '\\u0004' (1:3)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n(Source code omitted for this binary file)\");\n\n//# sourceURL=webpack:///./src/audio/tired.mp3?");

/***/ }),

/***/ "./src/audio/turtle.mp3":
/*!******************************!*\
  !*** ./src/audio/turtle.mp3 ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module parse failed: Unexpected character '\\u0004' (1:3)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n(Source code omitted for this binary file)\");\n\n//# sourceURL=webpack:///./src/audio/turtle.mp3?");

/***/ }),

/***/ "./src/cards.js":
/*!**********************!*\
  !*** ./src/cards.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar cards = [['Action (set A)', 'Action (set B)', 'Action (set C)', 'Adjective', 'Animal (set A)', 'Animal (set B)', 'Clothes', 'Emotions'], ['img/dance.jpg', 'img/swim.jpg', 'img/drop.jpg', 'img/friendly.jpg', 'img/cat.jpg', 'img/bird.jpg', 'img/blouse.jpg', 'img/smile.jpg'], [{\n  word: 'cry',\n  translation: 'плакать',\n  image: 'img/cry.jpg',\n  audioSrc: 'audio/cry.mp3'\n}, {\n  word: 'dance',\n  translation: 'танцевать',\n  image: 'img/dance.jpg',\n  audioSrc: 'audio/dance.mp3'\n}, {\n  word: 'dive',\n  translation: 'нырять',\n  image: 'img/dive.jpg',\n  audioSrc: 'audio/dive.mp3'\n}, {\n  word: 'draw',\n  translation: 'рисовать',\n  image: 'img/draw.jpg',\n  audioSrc: 'audio/draw.mp3'\n}, {\n  word: 'fish',\n  translation: 'ловить рыбу',\n  image: 'img/fish.jpg',\n  audioSrc: 'audio/fish.mp3'\n}, {\n  word: 'fly',\n  translation: 'летать',\n  image: 'img/fly.jpg',\n  audioSrc: 'audio/fly.mp3'\n}, {\n  word: 'hug',\n  translation: 'обнимать',\n  image: 'img/hug.jpg',\n  audioSrc: 'audio/hug.mp3'\n}, {\n  word: 'jump',\n  translation: 'прыгать',\n  image: 'img/jump.jpg',\n  audioSrc: 'audio/jump.mp3'\n}], [{\n  word: 'open',\n  translation: 'открывать',\n  image: 'img/open.jpg',\n  audioSrc: 'audio/open.mp3'\n}, {\n  word: 'play',\n  translation: 'играть',\n  image: 'img/play.jpg',\n  audioSrc: 'audio/play.mp3'\n}, {\n  word: 'point',\n  translation: 'указывать',\n  image: 'img/point.jpg',\n  audioSrc: 'audio/point.mp3'\n}, {\n  word: 'ride',\n  translation: 'ездить',\n  image: 'img/ride.jpg',\n  audioSrc: 'audio/ride.mp3'\n}, {\n  word: 'run',\n  translation: 'бегать',\n  image: 'img/run.jpg',\n  audioSrc: 'audio/run.mp3'\n}, {\n  word: 'sing',\n  translation: 'петь',\n  image: 'img/sing.jpg',\n  audioSrc: 'audio/sing.mp3'\n}, {\n  word: 'skip',\n  translation: 'пропускать, прыгать',\n  image: 'img/skip.jpg',\n  audioSrc: 'audio/skip.mp3'\n}, {\n  word: 'swim',\n  translation: 'плавать',\n  image: 'img/swim.jpg',\n  audioSrc: 'audio/swim.mp3'\n}], [{\n  word: 'cat',\n  translation: 'кот',\n  image: 'img/cat.jpg',\n  audioSrc: 'audio/cat.mp3'\n}, {\n  word: 'chick',\n  translation: 'цыплёнок',\n  image: 'img/chick.jpg',\n  audioSrc: 'audio/chick.mp3'\n}, {\n  word: 'chicken',\n  translation: 'курица',\n  image: 'img/chicken.jpg',\n  audioSrc: 'audio/chicken.mp3'\n}, {\n  word: 'dog',\n  translation: 'собака',\n  image: 'img/dog.jpg',\n  audioSrc: 'audio/dog.mp3'\n}, {\n  word: 'horse',\n  translation: 'лошадь',\n  image: 'img/horse.jpg',\n  audioSrc: 'audio/horse.mp3'\n}, {\n  word: 'pig',\n  translation: 'свинья',\n  image: 'img/pig.jpg',\n  audioSrc: 'audio/pig.mp3'\n}, {\n  word: 'rabbit',\n  translation: 'кролик',\n  image: 'img/rabbit.jpg',\n  audioSrc: 'audio/rabbit.mp3'\n}, {\n  word: 'sheep',\n  translation: 'овца',\n  image: 'img/sheep.jpg',\n  audioSrc: 'audio/sheep.mp3'\n}], [{\n  word: 'bird',\n  translation: 'птица',\n  image: 'img/bird.jpg',\n  audioSrc: 'audio/bird.mp3'\n}, {\n  word: 'fish',\n  translation: 'рыба',\n  image: 'img/fish1.jpg',\n  audioSrc: 'audio/fish.mp3'\n}, {\n  word: 'frog',\n  translation: 'жаба',\n  image: 'img/frog.jpg',\n  audioSrc: 'audio/frog.mp3'\n}, {\n  word: 'giraffe',\n  translation: 'жирафа',\n  image: 'img/giraffe.jpg',\n  audioSrc: 'audio/giraffe.mp3'\n}, {\n  word: 'lion',\n  translation: 'лев',\n  image: 'img/lion.jpg',\n  audioSrc: 'audio/lion.mp3'\n}, {\n  word: 'mouse',\n  translation: 'мышь',\n  image: 'img/mouse.jpg',\n  audioSrc: 'audio/mouse.mp3'\n}, {\n  word: 'turtle',\n  translation: 'черепаха',\n  image: 'img/turtle.jpg',\n  audioSrc: 'audio/turtle.mp3'\n}, {\n  word: 'dolphin',\n  translation: 'дельфин',\n  image: 'img/dolphin.jpg',\n  audioSrc: 'audio/dolphin.mp3'\n}], [{\n  word: 'skirt',\n  translation: 'юбка',\n  image: 'img/skirt.jpg',\n  audioSrc: 'audio/skirt.mp3'\n}, {\n  word: 'pants',\n  translation: 'брюки',\n  image: 'img/pants.jpg',\n  audioSrc: 'audio/pants.mp3'\n}, {\n  word: 'blouse',\n  translation: 'блузка',\n  image: 'img/blouse.jpg',\n  audioSrc: 'audio/blouse.mp3'\n}, {\n  word: 'dress',\n  translation: 'платье',\n  image: 'img/dress.jpg',\n  audioSrc: 'audio/dress.mp3'\n}, {\n  word: 'boot',\n  translation: 'ботинок',\n  image: 'img/boot.jpg',\n  audioSrc: 'audio/boot.mp3'\n}, {\n  word: 'shirt',\n  translation: 'рубашка',\n  image: 'img/shirt.jpg',\n  audioSrc: 'audio/shirt.mp3'\n}, {\n  word: 'coat',\n  translation: 'пальто',\n  image: 'img/coat.jpg',\n  audioSrc: 'audio/coat.mp3'\n}, {\n  word: 'shoe',\n  translation: 'туфли',\n  image: 'img/shoe.jpg',\n  audioSrc: 'audio/shoe.mp3'\n}], [{\n  word: 'sad',\n  translation: 'грустный',\n  image: 'img/sad.jpg',\n  audioSrc: 'audio/sad.mp3'\n}, {\n  word: 'angry',\n  translation: 'сердитый',\n  image: 'img/angry.jpg',\n  audioSrc: 'audio/angry.mp3'\n}, {\n  word: 'happy',\n  translation: 'счастливый',\n  image: 'img/happy.jpg',\n  audioSrc: 'audio/happy.mp3'\n}, {\n  word: 'tired',\n  translation: 'уставший',\n  image: 'img/tired.jpg',\n  audioSrc: 'audio/tired.mp3'\n}, {\n  word: 'surprised',\n  translation: 'удивлённый',\n  image: 'img/surprised.jpg',\n  audioSrc: 'audio/surprised.mp3'\n}, {\n  word: 'scared',\n  translation: 'испуганный',\n  image: 'img/scared.jpg',\n  audioSrc: 'audio/scared.mp3'\n}, {\n  word: 'smile',\n  translation: 'улыбка',\n  image: 'img/smile.jpg',\n  audioSrc: 'audio/smile.mp3'\n}, {\n  word: 'laugh',\n  translation: 'смех',\n  image: 'img/laugh.jpg',\n  audioSrc: 'audio/laugh.mp3'\n}]];\n/* harmony default export */ __webpack_exports__[\"default\"] = (cards);\n\n//# sourceURL=webpack:///./src/cards.js?");

/***/ }),

/***/ "./src/img/angry.jpg":
/*!***************************!*\
  !*** ./src/img/angry.jpg ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"8c3a4be0e205518573e21c44c28c784b.jpg\");\n\n//# sourceURL=webpack:///./src/img/angry.jpg?");

/***/ }),

/***/ "./src/img/argue.jpg":
/*!***************************!*\
  !*** ./src/img/argue.jpg ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"4a8b02a85ee7520f32cf67db4a5db6d8.jpg\");\n\n//# sourceURL=webpack:///./src/img/argue.jpg?");

/***/ }),

/***/ "./src/img/audio.svg":
/*!***************************!*\
  !*** ./src/img/audio.svg ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"9a762cb8b818462ec4ff0b9364eebebe.svg\");\n\n//# sourceURL=webpack:///./src/img/audio.svg?");

/***/ }),

/***/ "./src/img/big.jpg":
/*!*************************!*\
  !*** ./src/img/big.jpg ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"413fc4e4b190b0f970336f9c9ff367b3.jpg\");\n\n//# sourceURL=webpack:///./src/img/big.jpg?");

/***/ }),

/***/ "./src/img/bird.jpg":
/*!**************************!*\
  !*** ./src/img/bird.jpg ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"8183fee7ac3d00fe9b87d3ba27c510fc.jpg\");\n\n//# sourceURL=webpack:///./src/img/bird.jpg?");

/***/ }),

/***/ "./src/img/blouse.jpg":
/*!****************************!*\
  !*** ./src/img/blouse.jpg ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"20d412981c7ee51847e2b430bbf30db2.jpg\");\n\n//# sourceURL=webpack:///./src/img/blouse.jpg?");

/***/ }),

/***/ "./src/img/boot.jpg":
/*!**************************!*\
  !*** ./src/img/boot.jpg ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"577e4b48e1ea661d9d6fb8a27849834b.jpg\");\n\n//# sourceURL=webpack:///./src/img/boot.jpg?");

/***/ }),

/***/ "./src/img/build.jpg":
/*!***************************!*\
  !*** ./src/img/build.jpg ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"707ad85d0d46c1916a76adb92a794eac.jpg\");\n\n//# sourceURL=webpack:///./src/img/build.jpg?");

/***/ }),

/***/ "./src/img/carry.jpg":
/*!***************************!*\
  !*** ./src/img/carry.jpg ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"fbea6a03b32b1d89b4687418bdad661d.jpg\");\n\n//# sourceURL=webpack:///./src/img/carry.jpg?");

/***/ }),

/***/ "./src/img/cat.jpg":
/*!*************************!*\
  !*** ./src/img/cat.jpg ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"dd0da6ddfa0192956c69b458e8750228.jpg\");\n\n//# sourceURL=webpack:///./src/img/cat.jpg?");

/***/ }),

/***/ "./src/img/catch.jpg":
/*!***************************!*\
  !*** ./src/img/catch.jpg ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"a48f3731f1af83a82ef79b8591361377.jpg\");\n\n//# sourceURL=webpack:///./src/img/catch.jpg?");

/***/ }),

/***/ "./src/img/chick.jpg":
/*!***************************!*\
  !*** ./src/img/chick.jpg ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"9ebf8f59c9fad68f00aaa5c3921b64c8.jpg\");\n\n//# sourceURL=webpack:///./src/img/chick.jpg?");

/***/ }),

/***/ "./src/img/chicken.jpg":
/*!*****************************!*\
  !*** ./src/img/chicken.jpg ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"cd3bfe14046c82fd1f38ff47656ab579.jpg\");\n\n//# sourceURL=webpack:///./src/img/chicken.jpg?");

/***/ }),

/***/ "./src/img/coat.jpg":
/*!**************************!*\
  !*** ./src/img/coat.jpg ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"b06dd2f1cbd0ec7263bd0e55559c7ed2.jpg\");\n\n//# sourceURL=webpack:///./src/img/coat.jpg?");

/***/ }),

/***/ "./src/img/cry.jpg":
/*!*************************!*\
  !*** ./src/img/cry.jpg ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"abd859b952929f9c3c5a8fa19a3732fe.jpg\");\n\n//# sourceURL=webpack:///./src/img/cry.jpg?");

/***/ }),

/***/ "./src/img/dance.jpg":
/*!***************************!*\
  !*** ./src/img/dance.jpg ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"6f8dcbb35c81387846422a06f4153f3b.jpg\");\n\n//# sourceURL=webpack:///./src/img/dance.jpg?");

/***/ }),

/***/ "./src/img/dive.jpg":
/*!**************************!*\
  !*** ./src/img/dive.jpg ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"ce5ce0eeef856ef6b81353b88e8fc2b5.jpg\");\n\n//# sourceURL=webpack:///./src/img/dive.jpg?");

/***/ }),

/***/ "./src/img/dog.jpg":
/*!*************************!*\
  !*** ./src/img/dog.jpg ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"814e5cc55a7bfa624b27bc49a0339ff3.jpg\");\n\n//# sourceURL=webpack:///./src/img/dog.jpg?");

/***/ }),

/***/ "./src/img/dolphin.jpg":
/*!*****************************!*\
  !*** ./src/img/dolphin.jpg ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"d360e2dc07f84157390132cc4646a28c.jpg\");\n\n//# sourceURL=webpack:///./src/img/dolphin.jpg?");

/***/ }),

/***/ "./src/img/draw.jpg":
/*!**************************!*\
  !*** ./src/img/draw.jpg ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"231002c720578d808ab1334f4f2b6ad5.jpg\");\n\n//# sourceURL=webpack:///./src/img/draw.jpg?");

/***/ }),

/***/ "./src/img/dress.jpg":
/*!***************************!*\
  !*** ./src/img/dress.jpg ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"8aca6ea37dc6fe3b0ff7311bc50e380f.jpg\");\n\n//# sourceURL=webpack:///./src/img/dress.jpg?");

/***/ }),

/***/ "./src/img/drive.jpg":
/*!***************************!*\
  !*** ./src/img/drive.jpg ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"f981927bf224c5610fe148bea445d856.jpg\");\n\n//# sourceURL=webpack:///./src/img/drive.jpg?");

/***/ }),

/***/ "./src/img/drop.jpg":
/*!**************************!*\
  !*** ./src/img/drop.jpg ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"1391b0ecd0ca49bbb1b8b03617e06b78.jpg\");\n\n//# sourceURL=webpack:///./src/img/drop.jpg?");

/***/ }),

/***/ "./src/img/failure.jpg":
/*!*****************************!*\
  !*** ./src/img/failure.jpg ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"f7b0f130a798f2fc378622f00a110db9.jpg\");\n\n//# sourceURL=webpack:///./src/img/failure.jpg?");

/***/ }),

/***/ "./src/img/fast.jpg":
/*!**************************!*\
  !*** ./src/img/fast.jpg ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"9b7a455444e157293f37570f7f87d7a2.jpg\");\n\n//# sourceURL=webpack:///./src/img/fast.jpg?");

/***/ }),

/***/ "./src/img/fish.jpg":
/*!**************************!*\
  !*** ./src/img/fish.jpg ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"de108b9a31f545d4a28d50352a4b39e5.jpg\");\n\n//# sourceURL=webpack:///./src/img/fish.jpg?");

/***/ }),

/***/ "./src/img/fish1.jpg":
/*!***************************!*\
  !*** ./src/img/fish1.jpg ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"eaa97b695006df1dfc65cb12186ffa75.jpg\");\n\n//# sourceURL=webpack:///./src/img/fish1.jpg?");

/***/ }),

/***/ "./src/img/fly.jpg":
/*!*************************!*\
  !*** ./src/img/fly.jpg ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"0979828e54d9f91b646c264266875efe.jpg\");\n\n//# sourceURL=webpack:///./src/img/fly.jpg?");

/***/ }),

/***/ "./src/img/friendly.jpg":
/*!******************************!*\
  !*** ./src/img/friendly.jpg ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"adc604f78b7f8990498fd53bdfe78970.jpg\");\n\n//# sourceURL=webpack:///./src/img/friendly.jpg?");

/***/ }),

/***/ "./src/img/frog.jpg":
/*!**************************!*\
  !*** ./src/img/frog.jpg ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"55540f1e1e4da07e61560f87e48f91dc.jpg\");\n\n//# sourceURL=webpack:///./src/img/frog.jpg?");

/***/ }),

/***/ "./src/img/giraffe.jpg":
/*!*****************************!*\
  !*** ./src/img/giraffe.jpg ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"24a0b70b6bcb584d2f070860711c8cf2.jpg\");\n\n//# sourceURL=webpack:///./src/img/giraffe.jpg?");

/***/ }),

/***/ "./src/img/happy.jpg":
/*!***************************!*\
  !*** ./src/img/happy.jpg ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"c099ff4145c3dca8bc4f21883984d48e.jpg\");\n\n//# sourceURL=webpack:///./src/img/happy.jpg?");

/***/ }),

/***/ "./src/img/horse.jpg":
/*!***************************!*\
  !*** ./src/img/horse.jpg ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"674d315e6ccf630c73ddd4fe42ff9087.jpg\");\n\n//# sourceURL=webpack:///./src/img/horse.jpg?");

/***/ }),

/***/ "./src/img/hug.jpg":
/*!*************************!*\
  !*** ./src/img/hug.jpg ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"1b89e88d08e9f70fceeeb78a200bc148.jpg\");\n\n//# sourceURL=webpack:///./src/img/hug.jpg?");

/***/ }),

/***/ "./src/img/jump.jpg":
/*!**************************!*\
  !*** ./src/img/jump.jpg ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"fefa41aacf4b7223d230417360419fce.jpg\");\n\n//# sourceURL=webpack:///./src/img/jump.jpg?");

/***/ }),

/***/ "./src/img/laugh.jpg":
/*!***************************!*\
  !*** ./src/img/laugh.jpg ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"2fc142e1e2e55e9a1a09bed5efff4ede.jpg\");\n\n//# sourceURL=webpack:///./src/img/laugh.jpg?");

/***/ }),

/***/ "./src/img/lion.jpg":
/*!**************************!*\
  !*** ./src/img/lion.jpg ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"354024659fd141bb9b9f9012936ac1d1.jpg\");\n\n//# sourceURL=webpack:///./src/img/lion.jpg?");

/***/ }),

/***/ "./src/img/mouse.jpg":
/*!***************************!*\
  !*** ./src/img/mouse.jpg ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"4bb9ad2714acbc6bd60d41379f5c1170.jpg\");\n\n//# sourceURL=webpack:///./src/img/mouse.jpg?");

/***/ }),

/***/ "./src/img/old.jpg":
/*!*************************!*\
  !*** ./src/img/old.jpg ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"48388d49053d3c23f7f7e6e1eb43ef41.jpg\");\n\n//# sourceURL=webpack:///./src/img/old.jpg?");

/***/ }),

/***/ "./src/img/open.jpg":
/*!**************************!*\
  !*** ./src/img/open.jpg ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"ecb849724aa600ad1e7c8fc56ce3e965.jpg\");\n\n//# sourceURL=webpack:///./src/img/open.jpg?");

/***/ }),

/***/ "./src/img/pants.jpg":
/*!***************************!*\
  !*** ./src/img/pants.jpg ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"0e769df3605c3b9556065376923a74eb.jpg\");\n\n//# sourceURL=webpack:///./src/img/pants.jpg?");

/***/ }),

/***/ "./src/img/pig.jpg":
/*!*************************!*\
  !*** ./src/img/pig.jpg ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"6a18af671c6967b1d103a9b37ea42017.jpg\");\n\n//# sourceURL=webpack:///./src/img/pig.jpg?");

/***/ }),

/***/ "./src/img/play.jpg":
/*!**************************!*\
  !*** ./src/img/play.jpg ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"ed4610743e4dbeda64c3bf4f5b6197c0.jpg\");\n\n//# sourceURL=webpack:///./src/img/play.jpg?");

/***/ }),

/***/ "./src/img/point.jpg":
/*!***************************!*\
  !*** ./src/img/point.jpg ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"7a6e8db18f628785cb737ca13c342f67.jpg\");\n\n//# sourceURL=webpack:///./src/img/point.jpg?");

/***/ }),

/***/ "./src/img/pull.jpg":
/*!**************************!*\
  !*** ./src/img/pull.jpg ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"7a8b7808b3b1596cc46fccdcb231ba6e.jpg\");\n\n//# sourceURL=webpack:///./src/img/pull.jpg?");

/***/ }),

/***/ "./src/img/push.jpg":
/*!**************************!*\
  !*** ./src/img/push.jpg ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"95fc75076bee439c0c8f344d663fbba7.jpg\");\n\n//# sourceURL=webpack:///./src/img/push.jpg?");

/***/ }),

/***/ "./src/img/rabbit.jpg":
/*!****************************!*\
  !*** ./src/img/rabbit.jpg ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"1cef8840c56f9e7ecad6508317e8853c.jpg\");\n\n//# sourceURL=webpack:///./src/img/rabbit.jpg?");

/***/ }),

/***/ "./src/img/repeat.svg":
/*!****************************!*\
  !*** ./src/img/repeat.svg ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"c910e9bf470a46fb3e372eb5ac38a466.svg\");\n\n//# sourceURL=webpack:///./src/img/repeat.svg?");

/***/ }),

/***/ "./src/img/ride.jpg":
/*!**************************!*\
  !*** ./src/img/ride.jpg ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"6f1fc417f495ecfd42e3b6f9269275e6.jpg\");\n\n//# sourceURL=webpack:///./src/img/ride.jpg?");

/***/ }),

/***/ "./src/img/rotate.svg":
/*!****************************!*\
  !*** ./src/img/rotate.svg ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"8564a665cd6d24805ec6cbbb1c8df495.svg\");\n\n//# sourceURL=webpack:///./src/img/rotate.svg?");

/***/ }),

/***/ "./src/img/rotate1.svg":
/*!*****************************!*\
  !*** ./src/img/rotate1.svg ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"c910e9bf470a46fb3e372eb5ac38a466.svg\");\n\n//# sourceURL=webpack:///./src/img/rotate1.svg?");

/***/ }),

/***/ "./src/img/run.jpg":
/*!*************************!*\
  !*** ./src/img/run.jpg ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"e1d90300dabc179c2cbed320ad812949.jpg\");\n\n//# sourceURL=webpack:///./src/img/run.jpg?");

/***/ }),

/***/ "./src/img/sad.jpg":
/*!*************************!*\
  !*** ./src/img/sad.jpg ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"20a201b7a62508a9df15d9741ff36b7c.jpg\");\n\n//# sourceURL=webpack:///./src/img/sad.jpg?");

/***/ }),

/***/ "./src/img/scared.jpg":
/*!****************************!*\
  !*** ./src/img/scared.jpg ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"2e93dac2287f787bf87ec98e8ada693b.jpg\");\n\n//# sourceURL=webpack:///./src/img/scared.jpg?");

/***/ }),

/***/ "./src/img/screenshot.png":
/*!********************************!*\
  !*** ./src/img/screenshot.png ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"f1c60b299dddecffb40b8594855634f4.png\");\n\n//# sourceURL=webpack:///./src/img/screenshot.png?");

/***/ }),

/***/ "./src/img/sheep.jpg":
/*!***************************!*\
  !*** ./src/img/sheep.jpg ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"907169364d5082f3d0c38683af1d708e.jpg\");\n\n//# sourceURL=webpack:///./src/img/sheep.jpg?");

/***/ }),

/***/ "./src/img/shirt.jpg":
/*!***************************!*\
  !*** ./src/img/shirt.jpg ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"23eb169395100283b5bc877422442d03.jpg\");\n\n//# sourceURL=webpack:///./src/img/shirt.jpg?");

/***/ }),

/***/ "./src/img/shoe.jpg":
/*!**************************!*\
  !*** ./src/img/shoe.jpg ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"989057e877d69a847f639b2f1254b8b2.jpg\");\n\n//# sourceURL=webpack:///./src/img/shoe.jpg?");

/***/ }),

/***/ "./src/img/sing.jpg":
/*!**************************!*\
  !*** ./src/img/sing.jpg ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"99911213af1d6c17c153d4d6c327e9da.jpg\");\n\n//# sourceURL=webpack:///./src/img/sing.jpg?");

/***/ }),

/***/ "./src/img/skip.jpg":
/*!**************************!*\
  !*** ./src/img/skip.jpg ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"46d678cc3a48ce2c02fd70d1a7a1758b.jpg\");\n\n//# sourceURL=webpack:///./src/img/skip.jpg?");

/***/ }),

/***/ "./src/img/skirt.jpg":
/*!***************************!*\
  !*** ./src/img/skirt.jpg ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"204f793cb0608261c6638d22cd4cf769.jpg\");\n\n//# sourceURL=webpack:///./src/img/skirt.jpg?");

/***/ }),

/***/ "./src/img/slow.jpg":
/*!**************************!*\
  !*** ./src/img/slow.jpg ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"9f5963be56033e64a09cd0f6c197e8b9.jpg\");\n\n//# sourceURL=webpack:///./src/img/slow.jpg?");

/***/ }),

/***/ "./src/img/small.jpg":
/*!***************************!*\
  !*** ./src/img/small.jpg ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"62adbef99fc86b3ddcd98f048386b09b.jpg\");\n\n//# sourceURL=webpack:///./src/img/small.jpg?");

/***/ }),

/***/ "./src/img/smile.jpg":
/*!***************************!*\
  !*** ./src/img/smile.jpg ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"9dbdb3dc01594c01b1efb6e097acd569.jpg\");\n\n//# sourceURL=webpack:///./src/img/smile.jpg?");

/***/ }),

/***/ "./src/img/star-win.svg":
/*!******************************!*\
  !*** ./src/img/star-win.svg ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"6295e640ccdd43964c5c7ddfe352cfac.svg\");\n\n//# sourceURL=webpack:///./src/img/star-win.svg?");

/***/ }),

/***/ "./src/img/star.svg":
/*!**************************!*\
  !*** ./src/img/star.svg ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"51d7e25b092b663342a4465ed4cb7fca.svg\");\n\n//# sourceURL=webpack:///./src/img/star.svg?");

/***/ }),

/***/ "./src/img/success.jpg":
/*!*****************************!*\
  !*** ./src/img/success.jpg ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"eaec39d7be0e51e56fb1182a8aec698f.jpg\");\n\n//# sourceURL=webpack:///./src/img/success.jpg?");

/***/ }),

/***/ "./src/img/surprised.jpg":
/*!*******************************!*\
  !*** ./src/img/surprised.jpg ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"ab7a0892139a1729a0719251b555bbb8.jpg\");\n\n//# sourceURL=webpack:///./src/img/surprised.jpg?");

/***/ }),

/***/ "./src/img/swim.jpg":
/*!**************************!*\
  !*** ./src/img/swim.jpg ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"3053a74e766158f729090f294f5f6dbc.jpg\");\n\n//# sourceURL=webpack:///./src/img/swim.jpg?");

/***/ }),

/***/ "./src/img/tired.jpg":
/*!***************************!*\
  !*** ./src/img/tired.jpg ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"904af764e2ace9d6bde35126c2d19fd0.jpg\");\n\n//# sourceURL=webpack:///./src/img/tired.jpg?");

/***/ }),

/***/ "./src/img/turtle.jpg":
/*!****************************!*\
  !*** ./src/img/turtle.jpg ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"9c3654e5e4b5c6b59c18612dc507fd69.jpg\");\n\n//# sourceURL=webpack:///./src/img/turtle.jpg?");

/***/ }),

/***/ "./src/img/unfriendly.jpg":
/*!********************************!*\
  !*** ./src/img/unfriendly.jpg ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"6267965fa36ea6f6881b43a701ca25b7.jpg\");\n\n//# sourceURL=webpack:///./src/img/unfriendly.jpg?");

/***/ }),

/***/ "./src/img/young.jpg":
/*!***************************!*\
  !*** ./src/img/young.jpg ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"7ae81d5fbeae6f3d12a0477c8c572fdd.jpg\");\n\n//# sourceURL=webpack:///./src/img/young.jpg?");

/***/ }),

/***/ "./src/img/Без названия (3).svg":
/*!**************************************!*\
  !*** ./src/img/Без названия (3).svg ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"6295e640ccdd43964c5c7ddfe352cfac.svg\");\n\n//# sourceURL=webpack:///./src/img/%D0%91%D0%B5%D0%B7_%D0%BD%D0%B0%D0%B7%D0%B2%D0%B0%D0%BD%D0%B8%D1%8F_(3).svg?");

/***/ }),

/***/ "./src/img/Без названия (4).svg":
/*!**************************************!*\
  !*** ./src/img/Без названия (4).svg ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"51d7e25b092b663342a4465ed4cb7fca.svg\");\n\n//# sourceURL=webpack:///./src/img/%D0%91%D0%B5%D0%B7_%D0%BD%D0%B0%D0%B7%D0%B2%D0%B0%D0%BD%D0%B8%D1%8F_(4).svg?");

/***/ }),

/***/ "./src/img/Без названия.svg":
/*!**********************************!*\
  !*** ./src/img/Без названия.svg ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"9a762cb8b818462ec4ff0b9364eebebe.svg\");\n\n//# sourceURL=webpack:///./src/img/%D0%91%D0%B5%D0%B7_%D0%BD%D0%B0%D0%B7%D0%B2%D0%B0%D0%BD%D0%B8%D1%8F.svg?");

/***/ }),

/***/ "./src/index.html":
/*!************************!*\
  !*** ./src/index.html ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module parse failed: Unexpected token (1:0)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n> <!DOCTYPE html>\\n| <html lang=\\\"en\\\">\\n| <head>\");\n\n//# sourceURL=webpack:///./src/index.html?");

/***/ }),

/***/ "./src/script.js":
/*!***********************!*\
  !*** ./src/script.js ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/style.css */ \"./src/styles/style.css\");\n/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_style_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _cards_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cards.js */ \"./src/cards.js\");\n\n\nvar burger_line = document.querySelector('.hamburger');\nvar burger_all = document.querySelector('.navigation');\nburger_line.addEventListener('click', closeBurg);\n\nfunction closeBurg() {\n  if (burger_all.classList.contains('show-burger')) {\n    burger_all.classList.remove('show-burger');\n    burger_line.classList.remove('hamburger-transform');\n  } else {\n    burger_all.classList.add('show-burger');\n    burger_line.classList.add('hamburger-transform');\n  }\n}\n\nvar wrapper_content = document.querySelector('.wrapper-content');\n_cards_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"][0].forEach(function (el, index) {\n  var card = document.createElement('div');\n  var front = document.createElement('div');\n  var image = document.createElement('img');\n  var card_title = document.createElement('div');\n  card.className = 'card';\n  card_title.classList = 'card-title';\n  front.className = 'front';\n  image.className = 'img-card';\n  card.append(front);\n  front.append(image);\n  front.append(card_title);\n  card_title.textContent = String(el);\n  image.src = __webpack_require__(\"./src sync recursive ^\\\\.\\\\/.*$\")(\"./\" + _cards_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"][1][index])[\"default\"];\n  wrapper_content.append(card);\n});\nvar nav = document.querySelector('.nav');\nnav.addEventListener('click', function (e) {\n  nav.querySelectorAll('.nav-item').forEach(function (el) {\n    el.classList.remove('select-nav-item');\n  });\n  e.target.classList.add('select-nav-item');\n  burger_all.classList.remove('show-burger');\n  burger_line.classList.remove('hamburger-transform');\n});\n\n//# sourceURL=webpack:///./src/script.js?");

/***/ }),

/***/ "./src/styles/hamburger.css":
/*!**********************************!*\
  !*** ./src/styles/hamburger.css ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./hamburger.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles/hamburger.css\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\nvar exported = content.locals ? content.locals : {};\n\n\n\nmodule.exports = exported;\n\n//# sourceURL=webpack:///./src/styles/hamburger.css?");

/***/ }),

/***/ "./src/styles/style.css":
/*!******************************!*\
  !*** ./src/styles/style.css ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles/style.css\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\nvar exported = content.locals ? content.locals : {};\n\n\n\nmodule.exports = exported;\n\n//# sourceURL=webpack:///./src/styles/style.css?");

/***/ }),

/***/ "./src/styles/switcher.css":
/*!*********************************!*\
  !*** ./src/styles/switcher.css ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./switcher.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles/switcher.css\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\nvar exported = content.locals ? content.locals : {};\n\n\n\nmodule.exports = exported;\n\n//# sourceURL=webpack:///./src/styles/switcher.css?");

/***/ })

/******/ });