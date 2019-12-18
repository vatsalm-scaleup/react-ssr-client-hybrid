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
/******/ 	return __webpack_require__(__webpack_require__.s = "./specs/app.spec.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./specs/app.spec.js":
/*!***************************!*\
  !*** ./specs/app.spec.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _chai = __webpack_require__(/*! chai */ \"chai\");\n\nvar _enzyme = __webpack_require__(/*! enzyme */ \"enzyme\");\n\nvar _enzyme2 = _interopRequireDefault(_enzyme);\n\nvar _enzymeAdapterReact = __webpack_require__(/*! enzyme-adapter-react-16 */ \"enzyme-adapter-react-16\");\n\nvar _enzymeAdapterReact2 = _interopRequireDefault(_enzymeAdapterReact);\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _Hello = __webpack_require__(/*! ../src/public/components/Hello */ \"./src/public/components/Hello.js\");\n\nvar _Hello2 = _interopRequireDefault(_Hello);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n_enzyme2.default.configure({ adapter: new _enzymeAdapterReact2.default() });\n\ndescribe('<Hello />', function () {\n  it('renders <Hello />', function () {\n    var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_Hello2.default, { name: 'tests' }));\n    var actual = wrapper.find('h1').text();\n    var expected = 'Hello, tests!';\n\n    (0, _chai.expect)(actual).to.be.equal(expected);\n  });\n});\n\n//# sourceURL=webpack:///./specs/app.spec.js?");

/***/ }),

/***/ "./src/public/components/Hello.js":
/*!****************************************!*\
  !*** ./src/public/components/Hello.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar Hello = function Hello(props) {\n  return _react2.default.createElement(\n    _react2.default.Fragment,\n    null,\n    _react2.default.createElement(\n      \"h1\",\n      null,\n      \"Hello, \",\n      props.name,\n      \"!\"\n    ),\n    _react2.default.createElement(\n      \"a\",\n      { href: \"/with-react-router\" },\n      \"with React Router\"\n    )\n  );\n};\n\nexports.default = Hello;\n\n//# sourceURL=webpack:///./src/public/components/Hello.js?");

/***/ }),

/***/ "chai":
/*!***********************!*\
  !*** external "chai" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"chai\");\n\n//# sourceURL=webpack:///external_%22chai%22?");

/***/ }),

/***/ "enzyme":
/*!*************************!*\
  !*** external "enzyme" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"enzyme\");\n\n//# sourceURL=webpack:///external_%22enzyme%22?");

/***/ }),

/***/ "enzyme-adapter-react-16":
/*!******************************************!*\
  !*** external "enzyme-adapter-react-16" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"enzyme-adapter-react-16\");\n\n//# sourceURL=webpack:///external_%22enzyme-adapter-react-16%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ })

/******/ });