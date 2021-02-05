(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("Stylekit", [], factory);
	else if(typeof exports === 'object')
		exports["Stylekit"] = factory();
	else
		root["Stylekit"] = factory();
})(self, function() {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 939:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "SKAlert": () => (/* reexport */ SKAlert)
});

;// CONCATENATED MODULE: ./src/js/Alert.js
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class SKAlert {
  /*
  buttons: [{text, style, action}]
  */
  constructor({
    title,
    text,
    buttons
  }) {
    _defineProperty(this, "keyupListener", event => {
      if (event.key === "Enter") {
        let primaryButton = this.primaryButton();
        primaryButton.action && primaryButton.action();
        this.dismiss();
      }
    });

    this.title = title;
    this.text = text;
    this.buttons = buttons;
  }

  buttonsString() {
    const genButton = function (buttonDesc, index) {
      return `
        <div id='button-${index}' class='sk-button ${buttonDesc.style}'>
          <div class='sk-label'>${buttonDesc.text}</div>
        </div>
      `;
    };

    let buttonString = this.buttons.map(function (buttonDesc, index) {
      return genButton(buttonDesc, index);
    }).join("");
    let str = `
      <div class='sk-button-group'>
        ${buttonString}
      </div>
    `;
    return str;
  }

  templateString() {
    let buttonsTemplate;
    let panelStyle;

    if (this.buttons) {
      buttonsTemplate = `
        <div class="sk-panel-row" style='margin-top: 8px;'>
          ${this.buttonsString()}
        </div>
      `;
      panelStyle = '';
    } else {
      buttonsTemplate = '';
      panelStyle = 'style="padding-bottom: 8px"';
    }

    let titleTemplate = this.title ? `<div class='sk-h3 sk-panel-section-title'>${this.title}</div>` : "";
    let messageTemplate = this.text ? `<p class='sk-p'>${this.text}</p>` : "";
    let template = `
      <div class="sk-modal">
        <div class="sk-modal-background"></div>
        <div class="sk-modal-content">
          <div class="sn-component">
            <div class="sk-panel" style='max-width: 500px;'>
              <div class="sk-panel-content" ${panelStyle}>
                <div class="sk-panel-section">
                  ${titleTemplate}

                  <div class="sk-panel-row">
                    ${messageTemplate}
                  </div>

                  ${buttonsTemplate}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
    return template;
  }

  dismiss() {
    this.onElement.removeChild(this.element);
    document.removeEventListener("keyup", this.keyupListener);
  }

  primaryButton() {
    let primary = this.buttons.find(button => button.primary === true);

    if (!primary) {
      primary = this.buttons[this.buttons.length - 1];
    }

    return primary;
  }

  present({
    onElement
  } = {}) {
    if (!onElement) {
      onElement = document.body;
    }

    this.onElement = onElement;
    this.element = document.createElement('div');
    this.element.className = 'sn-component';
    this.element.innerHTML = this.templateString().trim();

    if (this.buttons) {
      document.addEventListener("keyup", this.keyupListener);
      this.buttons.forEach((buttonDesc, index) => {
        let buttonElem = this.element.querySelector(`#button-${index}`);

        buttonElem.onclick = () => {
          buttonDesc.action && buttonDesc.action();
          this.dismiss();
        };
      });
    }

    onElement.appendChild(this.element);
  }

}
;// CONCATENATED MODULE: ./src/Stylekit.js




/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
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
/******/ 	// module exports must be returned from runtime so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(939);
/******/ })()
;
});