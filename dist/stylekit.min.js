var Stylekit =
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./src/js/Alert.js
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var SKAlert =
/*#__PURE__*/
function () {
  /*
  buttons: [{text, style, action}]
  */
  function SKAlert(_ref) {
    var title = _ref.title,
        text = _ref.text,
        buttons = _ref.buttons;

    _classCallCheck(this, SKAlert);

    this.title = title;
    this.text = text;
    this.buttons = buttons;
  }

  _createClass(SKAlert, [{
    key: "buttonsString",
    value: function buttonsString() {
      var genButton = function genButton(buttonDesc, index) {
        return "\n        <div id='button-".concat(index, "' class='sk-button ").concat(buttonDesc.style, "'>\n          <div class='sk-label'>").concat(buttonDesc.text, "</div>\n        </div>\n      ");
      };

      var buttonString = this.buttons.map(function (buttonDesc, index) {
        return genButton(buttonDesc, index);
      }).join("");
      var str = "\n      <div class='sk-button-group'>\n        ".concat(buttonString, "\n      </div>\n    ");
      return str;
    }
  }, {
    key: "templateString",
    value: function templateString() {
      var buttonsTemplate = this.buttonsString();
      var titleTemplate = this.title ? "<div class='sk-h3 sk-panel-section-title'>".concat(this.title, "</div>") : "";
      var messageTemplate = this.text ? "<p class='sk-p'>".concat(this.text, "</p>") : "";
      var template = "\n      <div class=\"sk-modal\">\n        <div class=\"sk-modal-background\"></div>\n        <div class=\"sk-modal-content\">\n          <div class=\"sn-component\">\n            <div class=\"sk-panel\" style='max-width: 500px;'>\n              <div class=\"sk-panel-content\">\n                <div class=\"sk-panel-section\">\n                  ".concat(titleTemplate, "\n\n                  <div class=\"sk-panel-row\">\n                    ").concat(messageTemplate, "\n                  </div>\n\n                  <div class=\"sk-panel-row\" style='margin-top: 8px;'>\n                    ").concat(buttonsTemplate, "\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    ");
      return template;
    }
  }, {
    key: "present",
    value: function present() {
      var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          onElement = _ref2.onElement;

      if (!onElement) {
        onElement = document.body;
      }

      var div = document.createElement('div');
      div.innerHTML = this.templateString().trim();
      var background = div.querySelector(".sk-modal-background");
      background.addEventListener('click', function () {
        onElement.removeChild(div);
      });
      this.buttons.forEach(function (buttonDesc, index) {
        var buttonElem = div.querySelector("#button-".concat(index));

        buttonElem.onclick = function () {
          buttonDesc.action && buttonDesc.action();
          onElement.removeChild(div);
        };
      });
      onElement.appendChild(div);
    }
  }]);

  return SKAlert;
}();


// CONCATENATED MODULE: ./src/js/Stylekit.js
/* concated harmony reexport SKAlert */__webpack_require__.d(__webpack_exports__, "SKAlert", function() { return SKAlert; });



/***/ })
/******/ ]);