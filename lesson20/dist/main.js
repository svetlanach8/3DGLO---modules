/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_timer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/timer */ \"./src/modules/timer.js\");\n/* harmony import */ var _modules_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/menu */ \"./src/modules/menu.js\");\n/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/modal */ \"./src/modules/modal.js\");\n\r\n\r\n\r\n\r\n(0,_modules_timer__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('22 July 2022');\r\n(0,_modules_menu__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n(0,_modules_modal__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n\n\n//# sourceURL=webpack://webpack_modules/./src/index.js?");

/***/ }),

/***/ "./src/modules/menu.js":
/*!*****************************!*\
  !*** ./src/modules/menu.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst menu = () => {\r\n  const menuBtn = document.querySelector('.menu');\r\n  const menu = document.querySelector('menu');\r\n  const closeBtn = menu.querySelector('.close-btn');\r\n  const menuItems = menu.querySelectorAll('ul>li>a');\r\n\r\n  const handleMenu = () => {\r\n    menu.classList.toggle('active-menu');\r\n  }\r\n\r\n  menuBtn.addEventListener('click', handleMenu);\r\n  closeBtn.addEventListener('click', handleMenu);\r\n\r\n  menuItems.forEach(menuItem => menuItem.addEventListener('click', handleMenu));\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu);\r\n\n\n//# sourceURL=webpack://webpack_modules/./src/modules/menu.js?");

/***/ }),

/***/ "./src/modules/modal.js":
/*!******************************!*\
  !*** ./src/modules/modal.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst modal = () => {\r\n  const modal = document.querySelector('.popup');\r\n  const modalContent = modal.querySelector('.popup-content');\r\n  const buttons = document.querySelectorAll('.popup-btn');\r\n  const closeBtn = modal.querySelector('.popup-close');\r\n\r\n  let count;\r\n  let idInterval;\r\n\r\n  buttons.forEach(btn => {\r\n    btn.addEventListener('click', () => {\r\n      count = 0;\r\n      AnimateModal();\r\n      modal.style.display = 'block';\r\n    })\r\n  })\r\n\r\n  closeBtn.addEventListener('click', () => {\r\n    modal.style.display = 'none';\r\n    modalContent.style.top = '';\r\n  })\r\n\r\n  const AnimateModal = () => {\r\n    \r\n    count++;\r\n    idInterval = requestAnimationFrame(AnimateModal);\r\n\r\n    if (count < 30) {\r\n      modalContent.style.top = count * 3 + 'px';\r\n    } else {\r\n      cancelAnimationFrame(idInterval);\r\n    }\r\n\r\n    if (document.documentElement.clientWidth < 768) {\r\n      cancelAnimationFrame(idInterval);\r\n      modalContent.style.top = '85px';\r\n    }\r\n  }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modal);\r\n\n\n//# sourceURL=webpack://webpack_modules/./src/modules/modal.js?");

/***/ }),

/***/ "./src/modules/timer.js":
/*!******************************!*\
  !*** ./src/modules/timer.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst timer = (deadline) => {\r\n  const timerHours = document.getElementById('timer-hours');\r\n  const timerMinutes = document.getElementById('timer-minutes');\r\n  const timerSeconds = document.getElementById('timer-seconds');\r\n  let idInterval;\r\n\r\n  const getTimeRemaining = () => {\r\n    let dateStop = new Date(deadline).getTime();\r\n    let dateNow= new Date().getTime();\r\n    let timeRemaining = (dateStop - dateNow) / 1000;\r\n    let hours = Math.floor(timeRemaining / 60 / 60);\r\n    let minutes = Math.floor((timeRemaining / 60) % 60);\r\n    let seconds = Math.floor(timeRemaining % 60);\r\n\r\n    return {timeRemaining, hours, minutes, seconds}\r\n  }\r\n\r\n  const updateClock = () => {\r\n    let getTime = getTimeRemaining();\r\n\r\n    timerHours.textContent = editFormat(getTime.hours);\r\n    timerMinutes.textContent = editFormat(getTime.minutes);\r\n    timerSeconds.textContent = editFormat(getTime.seconds);\r\n\r\n    if (getTime.timeRemaining <= 0) {\r\n      clearInterval(idInterval);\r\n      timerHours.textContent = '00';\r\n      timerMinutes.textContent = '00';\r\n      timerSeconds.textContent = '00';\r\n    }\r\n  }\r\n\r\n  const editFormat = (number) => {\r\n    if (number < 10) {\r\n      return '0' + number\r\n    } else {\r\n      return number\r\n    }\r\n  }\r\n\r\n  idInterval = setInterval(updateClock, 1000);\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (timer);\r\n\n\n//# sourceURL=webpack://webpack_modules/./src/modules/timer.js?");

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
/******/ 			// no module.id needed
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;