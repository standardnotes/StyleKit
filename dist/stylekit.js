(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("preact"), require("react"));
	else if(typeof define === 'function' && define.amd)
		define("SK", ["preact", "react"], factory);
	else if(typeof exports === 'object')
		exports["SK"] = factory(require("preact"), require("react"));
	else
		root["SK"] = root["SK"] || {}, root["SK"]["stylekit"] = factory(root["_"], root["_"]);
})(self, function(__WEBPACK_EXTERNAL_MODULE__683__, __WEBPACK_EXTERNAL_MODULE__320__) {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 828:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "AccessibilityIcon": () => (/* reexport */ ic_accessibility),
  "AccountCircleIcon": () => (/* reexport */ ic_account_circle),
  "AccountIllustration": () => (/* reexport */ il_account),
  "AddIcon": () => (/* reexport */ ic_add),
  "ArchiveIcon": () => (/* reexport */ ic_archive),
  "ArrowDownCheckmarkIcon": () => (/* reexport */ arrow_down_checkmark),
  "ArrowDownIcon": () => (/* reexport */ ic_arrow_down),
  "ArrowLeftIcon": () => (/* reexport */ ic_arrow_left),
  "ArrowRightIcon": () => (/* reexport */ ic_arrow_right),
  "ArrowUpIcon": () => (/* reexport */ ic_arrow_up),
  "ArrowsSortDownIcon": () => (/* reexport */ ic_arrows_sort_down),
  "ArrowsSortUpIcon": () => (/* reexport */ ic_arrows_sort_up),
  "AuthenticatorIcon": () => (/* reexport */ ic_authenticator),
  "BlueDotIcon": () => (/* reexport */ blue_dot),
  "CheckBoldIcon": () => (/* reexport */ ic_check_bold),
  "CheckCircleFilledIcon": () => (/* reexport */ ic_check_circle_filled),
  "CheckCircleIcon": () => (/* reexport */ ic_check_circle),
  "CheckIcon": () => (/* reexport */ ic_check),
  "ChevronDownIcon": () => (/* reexport */ ic_chevron_down),
  "ChevronRightIcon": () => (/* reexport */ ic_chevron_right),
  "CircleIcon": () => (/* reexport */ circle_55),
  "ClearCircleFilledIcon": () => (/* reexport */ ic_clear_circle_filled),
  "CloseIcon": () => (/* reexport */ ic_close),
  "CloudOffIcon": () => (/* reexport */ ic_cloud_off),
  "CodeIcon": () => (/* reexport */ ic_code),
  "CopyIcon": () => (/* reexport */ ic_copy),
  "CreateAccountIllustration": () => (/* reexport */ create_account_illustration),
  "DashboardIcon": () => (/* reexport */ ic_dashboard),
  "DiamondIcon": () => (/* reexport */ diamond_with_horizontal_lines),
  "DownloadIcon": () => (/* reexport */ ic_download),
  "EditorIcon": () => (/* reexport */ ic_editor),
  "EmailIcon": () => (/* reexport */ ic_email),
  "EyeIcon": () => (/* reexport */ ic_eye),
  "EyeOffIcon": () => (/* reexport */ ic_eye_off),
  "HashtagIcon": () => (/* reexport */ ic_hashtag),
  "HelpIcon": () => (/* reexport */ ic_help),
  "HistoryIcon": () => (/* reexport */ ic_history),
  "IlNotesIcon": () => (/* reexport */ il_notes),
  "InfoIcon": () => (/* reexport */ ic_info),
  "KeyboardIcon": () => (/* reexport */ ic_keyboard),
  "LinkOffIcon": () => (/* reexport */ ic_link_off),
  "ListBulleted": () => (/* reexport */ ic_list_bulleted),
  "ListedFilledIcon": () => (/* reexport */ ic_listed_filled),
  "ListedIcon": () => (/* reexport */ ic_listed),
  "LockFilledIcon": () => (/* reexport */ ic_lock_filled),
  "LockIcon": () => (/* reexport */ ic_lock),
  "MarkdownIcon": () => (/* reexport */ ic_markdown),
  "MenuArrowDownAlt": () => (/* reexport */ ic_menu_arrow_down_alt),
  "MenuArrowDownIcon": () => (/* reexport */ ic_menu_arrow_down),
  "MenuArrowRight": () => (/* reexport */ ic_menu_arrow_right),
  "MenuCloseIcon": () => (/* reexport */ ic_menu_close),
  "MoreIcon": () => (/* reexport */ ic_more),
  "NotesIcon": () => (/* reexport */ ic_notes),
  "OpenInIcon": () => (/* reexport */ ic_open_in),
  "PasswordIcon": () => (/* reexport */ ic_textbox_password),
  "PencilFilledIcon": () => (/* reexport */ ic_pencil_filled),
  "PencilIcon": () => (/* reexport */ ic_pencil),
  "PencilOffIcon": () => (/* reexport */ ic_pencil_off),
  "PinFilledIcon": () => (/* reexport */ ic_pin_filled),
  "PinIcon": () => (/* reexport */ ic_pin),
  "PlainTextIcon": () => (/* reexport */ ic_text_paragraph),
  "PremiumFeatureIcon": () => (/* reexport */ ic_premium_feature),
  "PremiumIllustration": () => (/* reexport */ il_premium),
  "RedoIcon": () => (/* reexport */ ic_redo),
  "RestoreIcon": () => (/* reexport */ ic_restore),
  "RichTextIcon": () => (/* reexport */ ic_text_rich),
  "SKAlert": () => (/* reexport */ SKAlert),
  "SNLogoAltIcon": () => (/* reexport */ ic_standard_notes_2),
  "SNLogoFull": () => (/* reexport */ ic_sn_logo_full),
  "SNLogoIcon": () => (/* reexport */ ic_standard_notes),
  "SecurityIcon": () => (/* reexport */ ic_security),
  "ServerIcon": () => (/* reexport */ ic_server),
  "SettingsIcon": () => (/* reexport */ ic_settings),
  "SignInIcon": () => (/* reexport */ ic_signin),
  "SignOutIcon": () => (/* reexport */ ic_signout),
  "SpreadsheetsIcon": () => (/* reexport */ ic_spreadsheets),
  "StarIcon": () => (/* reexport */ ic_star),
  "SyncIcon": () => (/* reexport */ ic_sync),
  "TasksIcon": () => (/* reexport */ ic_tasks),
  "ThemesIcon": () => (/* reexport */ ic_themes),
  "ToastContainer": () => (/* reexport */ ToastContainer),
  "TrashFilledIcon": () => (/* reexport */ ic_trash_filled),
  "TrashIcon": () => (/* reexport */ ic_trash),
  "TrashSweepIcon": () => (/* reexport */ ic_trash_sweep),
  "TuneIcon": () => (/* reexport */ ic_tune),
  "UnarchiveIcon": () => (/* reexport */ ic_unarchive),
  "UndoIcon": () => (/* reexport */ ic_undo),
  "UnpinIcon": () => (/* reexport */ ic_pin_off),
  "UserAddIcon": () => (/* reexport */ ic_user_add),
  "UserIcon": () => (/* reexport */ ic_user),
  "UserSwitch": () => (/* reexport */ ic_user_switch),
  "WarningIcon": () => (/* reexport */ ic_warning),
  "WindowIcon": () => (/* reexport */ ic_window),
  "addToast": () => (/* reexport */ addToast),
  "dismissToast": () => (/* reexport */ dismissToast),
  "updateToast": () => (/* reexport */ updateToast)
});

;// CONCATENATED MODULE: ./src/js/Alert.js
class SKAlert {
  /*
  buttons: [{text, style, action}]
  */
  constructor({
    title,
    text,
    buttons
  }) {
    this.title = title;
    this.text = text;
    this.buttons = buttons;
  }

  buttonsString() {
    const genButton = function (buttonDesc, index) {
      return `
        <button id='button-${index}' class='sn-button small ${buttonDesc.style}'>
          <div class='sk-label'>${buttonDesc.text}</div>
        </button>
      `;
    };

    let buttonString = this.buttons.map(function (buttonDesc, index) {
      return genButton(buttonDesc, index);
    }).join('');
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

    let titleTemplate = this.title ? `<div class='sk-h3 sk-panel-section-title'>${this.title}</div>` : '';
    let messageTemplate = this.text ? `<p class='sk-p'>${this.text}</p>` : '';
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
    onElement.appendChild(this.element);

    if (this.buttons && this.buttons.length) {
      this.buttons.forEach((buttonDesc, index) => {
        let buttonElem = this.element.querySelector(`#button-${index}`);

        buttonElem.onclick = () => {
          buttonDesc.action && buttonDesc.action();
          this.dismiss();
        };

        if (index === 0) {
          buttonElem.focus();
        }
      });
    }
  }

}
// EXTERNAL MODULE: external {"commonjs":"react","commonjs2":"react","amd":"react","root":"_"}
var external_commonjs_react_commonjs2_react_amd_react_root_ = __webpack_require__(320);
// EXTERNAL MODULE: external {"commonjs":"preact","commonjs2":"preact","amd":"preact","root":"_"}
var external_commonjs_preact_commonjs2_preact_amd_preact_root_ = __webpack_require__(683);
;// CONCATENATED MODULE: ./node_modules/preact/hooks/dist/hooks.module.js

var t,
    u,
    r,
    o = 0,
    i = [],
    c = external_commonjs_preact_commonjs2_preact_amd_preact_root_.options.__b,
    f = external_commonjs_preact_commonjs2_preact_amd_preact_root_.options.__r,
    e = external_commonjs_preact_commonjs2_preact_amd_preact_root_.options.diffed,
    a = external_commonjs_preact_commonjs2_preact_amd_preact_root_.options.__c,
    v = external_commonjs_preact_commonjs2_preact_amd_preact_root_.options.unmount;

function m(t, r) {
  external_commonjs_preact_commonjs2_preact_amd_preact_root_.options.__h && external_commonjs_preact_commonjs2_preact_amd_preact_root_.options.__h(u, t, o || r), o = 0;
  var i = u.__H || (u.__H = {
    __: [],
    __h: []
  });
  return t >= i.__.length && i.__.push({}), i.__[t];
}

function l(n) {
  return o = 1, p(w, n);
}

function p(n, r, o) {
  var i = m(t++, 2);
  return i.t = n, i.__c || (i.__ = [o ? o(r) : w(void 0, r), function (n) {
    var t = i.t(i.__[0], n);
    i.__[0] !== t && (i.__ = [t, i.__[1]], i.__c.setState({}));
  }], i.__c = u), i.__;
}

function y(r, o) {
  var i = m(t++, 3);
  !external_commonjs_preact_commonjs2_preact_amd_preact_root_.options.__s && k(i.__H, o) && (i.__ = r, i.__H = o, u.__H.__h.push(i));
}

function h(r, o) {
  var i = m(t++, 4);
  !n.__s && k(i.__H, o) && (i.__ = r, i.__H = o, u.__h.push(i));
}

function s(n) {
  return o = 5, d(function () {
    return {
      current: n
    };
  }, []);
}

function _(n, t, u) {
  o = 6, h(function () {
    "function" == typeof n ? n(t()) : n && (n.current = t());
  }, null == u ? u : u.concat(n));
}

function d(n, u) {
  var r = m(t++, 7);
  return k(r.__H, u) && (r.__ = n(), r.__H = u, r.__h = n), r.__;
}

function A(n, t) {
  return o = 8, d(function () {
    return n;
  }, t);
}

function F(n) {
  var r = u.context[n.__c],
      o = m(t++, 9);
  return o.c = n, r ? (null == o.__ && (o.__ = !0, r.sub(u)), r.props.value) : n.__;
}

function T(t, u) {
  n.useDebugValue && n.useDebugValue(u ? u(t) : t);
}

function q(n) {
  var r = m(t++, 10),
      o = l();
  return r.__ = n, u.componentDidCatch || (u.componentDidCatch = function (n) {
    r.__ && r.__(n), o[1](n);
  }), [o[0], function () {
    o[1](void 0);
  }];
}

function x() {
  for (var t; t = i.shift();) if (t.__P) try {
    t.__H.__h.forEach(g), t.__H.__h.forEach(j), t.__H.__h = [];
  } catch (u) {
    t.__H.__h = [], external_commonjs_preact_commonjs2_preact_amd_preact_root_.options.__e(u, t.__v);
  }
}

external_commonjs_preact_commonjs2_preact_amd_preact_root_.options.__b = function (n) {
  u = null, c && c(n);
}, external_commonjs_preact_commonjs2_preact_amd_preact_root_.options.__r = function (n) {
  f && f(n), t = 0;
  var r = (u = n.__c).__H;
  r && (r.__h.forEach(g), r.__h.forEach(j), r.__h = []);
}, external_commonjs_preact_commonjs2_preact_amd_preact_root_.options.diffed = function (t) {
  e && e(t);
  var o = t.__c;
  o && o.__H && o.__H.__h.length && (1 !== i.push(o) && r === external_commonjs_preact_commonjs2_preact_amd_preact_root_.options.requestAnimationFrame || ((r = external_commonjs_preact_commonjs2_preact_amd_preact_root_.options.requestAnimationFrame) || function (n) {
    var t,
        u = function () {
      clearTimeout(r), b && cancelAnimationFrame(t), setTimeout(n);
    },
        r = setTimeout(u, 100);

    b && (t = requestAnimationFrame(u));
  })(x)), u = null;
}, external_commonjs_preact_commonjs2_preact_amd_preact_root_.options.__c = function (t, u) {
  u.some(function (t) {
    try {
      t.__h.forEach(g), t.__h = t.__h.filter(function (n) {
        return !n.__ || j(n);
      });
    } catch (r) {
      u.some(function (n) {
        n.__h && (n.__h = []);
      }), u = [], external_commonjs_preact_commonjs2_preact_amd_preact_root_.options.__e(r, t.__v);
    }
  }), a && a(t, u);
}, external_commonjs_preact_commonjs2_preact_amd_preact_root_.options.unmount = function (t) {
  v && v(t);
  var u,
      r = t.__c;
  r && r.__H && (r.__H.__.forEach(function (n) {
    try {
      g(n);
    } catch (n) {
      u = n;
    }
  }), u && external_commonjs_preact_commonjs2_preact_amd_preact_root_.options.__e(u, r.__v));
};
var b = "function" == typeof requestAnimationFrame;

function g(n) {
  var t = u,
      r = n.__c;
  "function" == typeof r && (n.__c = void 0, r()), u = t;
}

function j(n) {
  var t = u;
  n.__c = n.__(), u = t;
}

function k(n, t) {
  return !n || n.length !== t.length || t.some(function (t, u) {
    return t !== n[u];
  });
}

function w(n, t) {
  return "function" == typeof t ? t(n) : t;
}


;// CONCATENATED MODULE: ./node_modules/nanostores/listen-keys/index.js
function listenKeys(store, keys, listener) {
  let keysSet = new Set([...keys, undefined]);
  return store.listen((value, changed) => {
    if (keysSet.has(changed)) {
      listener(value, changed);
    }
  });
}
;// CONCATENATED MODULE: ./node_modules/@nanostores/preact/index.js


function useStore(store, opts = {}) {
  let [, forceRender] = l({});

  if (false) {}

  y(() => {
    let batching, timer, unlisten;

    let rerender = () => {
      if (!batching) {
        batching = 1;
        timer = setTimeout(() => {
          batching = undefined;
          forceRender({});
        });
      }
    };

    if (opts.keys) {
      unlisten = listenKeys(store, opts.keys, rerender);
    } else {
      unlisten = store.listen(rerender);
    }

    return () => {
      unlisten();
      clearTimeout(timer);
    };
  }, [store, '' + opts.keys]);
  return store.get();
}
;// CONCATENATED MODULE: ./node_modules/nanoid/index.browser.js


let random = bytes => crypto.getRandomValues(new Uint8Array(bytes));

let customRandom = (alphabet, defaultSize, getRandom) => {
  let mask = (2 << Math.log(alphabet.length - 1) / Math.LN2) - 1;
  let step = -~(1.6 * mask * defaultSize / alphabet.length);
  return (size = defaultSize) => {
    let id = '';

    while (true) {
      let bytes = getRandom(step);
      let j = step;

      while (j--) {
        id += alphabet[bytes[j] & mask] || '';
        if (id.length === size) return id;
      }
    }
  };
};

let customAlphabet = (alphabet, size = 21) => customRandom(alphabet, size, random);

let nanoid = (size = 21) => {
  let id = '';
  let bytes = crypto.getRandomValues(new Uint8Array(size));

  while (size--) {
    let byte = bytes[size] & 63;

    if (byte < 36) {
      id += byte.toString(36);
    } else if (byte < 62) {
      id += (byte - 26).toString(36).toUpperCase();
    } else if (byte < 63) {
      id += '_';
    } else {
      id += '-';
    }
  }

  return id;
};


;// CONCATENATED MODULE: ./node_modules/nanostores/atom/index.js

let atom = initialValue => {
  let currentListeners;
  let nextListeners = [];
  let store = {
    lc: 0,
    value: initialValue,

    set(data) {
      store.value = data;
      store.notify();
    },

    get() {
      if (!store.lc) {
        store.listen(() => {})();
      }

      return store.value;
    },

    notify(changedKey) {
      currentListeners = nextListeners;

      for (let listener of currentListeners) {
        listener(store.value, changedKey);
      }
    },

    listen(listener) {
      if (nextListeners === currentListeners) {
        nextListeners = nextListeners.slice();
      }

      store.lc = nextListeners.push(listener);
      return () => {
        if (nextListeners === currentListeners) {
          nextListeners = nextListeners.slice();
        }

        let index = nextListeners.indexOf(listener);

        if (~index) {
          nextListeners.splice(index, 1);
          store.lc--;
          if (!store.lc) store.off();
        }
      };
    },

    subscribe(cb) {
      let unbind = store.listen(cb);
      cb(store.value);
      return unbind;
    },

    off() {}

  };

  if (false) {}

  return store;
};
;// CONCATENATED MODULE: ./node_modules/nanostores/task/index.js
let tasks = 0;
let resolves = [];
function startTask() {
  tasks += 1;
  return () => {
    tasks -= 1;

    if (tasks === 0) {
      let prevResolves = resolves;
      resolves = [];

      for (let i of prevResolves) i();
    }
  };
}
function task(cb) {
  let endTask = startTask();
  return cb().finally(endTask);
}
function allTasks() {
  if (tasks === 0) {
    return Promise.resolve();
  } else {
    return new Promise(resolve => {
      resolves.push(resolve);
    });
  }
}
function cleanTasks() {
  tasks = 0;
}
;// CONCATENATED MODULE: ./node_modules/nanostores/action/index.js

let lastAction = Symbol();

let doAction = (store, actionName, cb, args) => {
  let tracker = { ...store
  };

  tracker.set = (...setArgs) => {
    store[lastAction] = actionName;
    store.set(...setArgs);
    delete store[lastAction];
  };

  if (store.setKey) {
    tracker.setKey = (...setArgs) => {
      store[lastAction] = actionName;
      store.setKey(...setArgs);
      delete store[lastAction];
    };
  }

  let result = cb(tracker, ...args);

  if (result instanceof Promise) {
    let endTask = startTask();
    return result.finally(endTask);
  }

  return result;
};

let action = (store, actionName, cb) => (...args) => doAction(store, actionName, cb, args);
let actionFor = (Template, actionName, cb) => {
  return (store, ...rest) => doAction(store, actionName, cb, rest);
};
;// CONCATENATED MODULE: ./src/components/Toast/enums.ts
var ToastType;

(function (ToastType) {
  ToastType["Regular"] = "regular";
  ToastType["Success"] = "success";
  ToastType["Error"] = "error";
  ToastType["Loading"] = "loading";
})(ToastType || (ToastType = {}));
;// CONCATENATED MODULE: ./src/components/Toast/toastStore.ts



const toastStore = atom([]);
const updateToast = action(toastStore, 'updateToast', (store, toastId, options) => {
  const existingToasts = store.get();
  store.set(existingToasts.map(toast => {
    if (toast.id === toastId) {
      return Object.assign(Object.assign({}, toast), options);
    } else {
      return toast;
    }
  }));
});
const removeToast = action(toastStore, 'removeToast', (store, toastId) => {
  const existingToasts = store.get();
  store.set(existingToasts.filter(toast => toast.id !== toastId));
});
const dismissToast = action(toastStore, 'dismissToast', (store, toastId) => {
  const existingToasts = store.get();
  store.set(existingToasts.map(toast => {
    if (toast.id === toastId) {
      return Object.assign(Object.assign({}, toast), {
        dismissed: true
      });
    } else {
      return toast;
    }
  }));
  setTimeout(() => {
    removeToast(toastId);
  }, 175);
});
const addToast = action(toastStore, 'addToast', (store, options) => {
  var _a, _b, _c;

  const existingToasts = store.get();
  const id = (_a = options.id) !== null && _a !== void 0 ? _a : nanoid();
  const toast = Object.assign(Object.assign({}, options), {
    id,
    dismissed: false
  });
  store.set([toast, ...existingToasts]);
  const autoClose = (_b = options.autoClose) !== null && _b !== void 0 ? _b : !options.actions && options.type !== ToastType.Loading;
  const duration = (_c = options.duration) !== null && _c !== void 0 ? _c : 4000;

  if (autoClose) {
    setTimeout(() => {
      dismissToast(id);
    }, duration);
  }

  return id;
});
;// CONCATENATED MODULE: ./src/assets/icons/ic-accessibility.svg
var _path;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var SvgIcAccessibility = function SvgIcAccessibility(props) {
  return /*#__PURE__*/external_commonjs_react_commonjs2_react_amd_react_root_.createElement("svg", _extends({
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path || (_path = /*#__PURE__*/external_commonjs_react_commonjs2_react_amd_react_root_.createElement("path", {
    d: "M17.5 7.5h-5v10.833h-1.667v-5H9.167v5H7.5V7.5h-5V5.833h15V7.5ZM10 1.667A1.667 1.667 0 1 1 10 5a1.667 1.667 0 0 1 0-3.333Z"
  })));
};

/* harmony default export */ const ic_accessibility = (SvgIcAccessibility);
;// CONCATENATED MODULE: ./src/assets/icons/ic-account-circle.svg
var ic_account_circle_path;

function ic_account_circle_extends() { ic_account_circle_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return ic_account_circle_extends.apply(this, arguments); }



var SvgIcAccountCircle = function SvgIcAccountCircle(props) {
  return /*#__PURE__*/external_commonjs_react_commonjs2_react_amd_react_root_.createElement("svg", ic_account_circle_extends({
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), ic_account_circle_path || (ic_account_circle_path = /*#__PURE__*/external_commonjs_react_commonjs2_react_amd_react_root_.createElement("path", {
    d: "M10 16a6.027 6.027 0 0 1-5-2.667c.025-1.666 3.333-2.583 5-2.583 1.667 0 4.975.917 5 2.583A6.027 6.027 0 0 1 10 16Zm0-11.833a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm0-2.5A8.333 8.333 0 1 0 18.333 10c0-4.608-3.75-8.333-8.333-8.333Z"
  })));
};

/* harmony default export */ const ic_account_circle = (SvgIcAccountCircle);
;// CONCATENATED MODULE: ./src/assets/icons/il-account.svg
var _circle, _g, _defs;

function il_account_extends() { il_account_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return il_account_extends.apply(this, arguments); }



var SvgIlAccount = function SvgIlAccount(props) {
  return /*#__PURE__*/external_commonjs_react_commonjs2_react_amd_react_root_.createElement("svg", il_account_extends({
    width: 120,
    height: 120,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _circle || (_circle = /*#__PURE__*/external_commonjs_react_commonjs2_react_amd_react_root_.createElement("circle", {
    cx: 60,
    cy: 60,
    r: 60,
    fill: "#F4F5F7"
  })), _g || (_g = /*#__PURE__*/external_commonjs_react_commonjs2_react_amd_react_root_.createElement("g", {
    filter: "url(#il-account_svg__a)"
  }, /*#__PURE__*/external_commonjs_react_commonjs2_react_amd_react_root_.createElement("rect", {
    x: 31,
    y: 31,
    width: 58,
    height: 58,
    rx: 4,
    fill: "#fff"
  }), /*#__PURE__*/external_commonjs_react_commonjs2_react_amd_react_root_.createElement("rect", {
    x: 64,
    y: 45,
    width: 17,
    height: 4,
    rx: 2,
    fill: "#BBBEC4"
  }), /*#__PURE__*/external_commonjs_react_commonjs2_react_amd_react_root_.createElement("rect", {
    x: 64,
    y: 51,
    width: 17,
    height: 4,
    rx: 2,
    fill: "#BBBEC4"
  }), /*#__PURE__*/external_commonjs_react_commonjs2_react_amd_react_root_.createElement("rect", {
    x: 64,
    y: 57,
    width: 17,
    height: 4,
    rx: 2,
    fill: "#BBBEC4"
  }), /*#__PURE__*/external_commonjs_react_commonjs2_react_amd_react_root_.createElement("path", {
    d: "M54 45a7.5 7.5 0 1 1 0 15 7.5 7.5 0 0 1 0-15Zm0 16.875c5.006 0 15 2.494 15 7.5V75H39v-5.625c0-5.006 9.994-7.5 15-7.5Z",
    fill: "#BBBEC4"
  }))), _defs || (_defs = /*#__PURE__*/external_commonjs_react_commonjs2_react_amd_react_root_.createElement("defs", null, /*#__PURE__*/external_commonjs_react_commonjs2_react_amd_react_root_.createElement("filter", {
    id: "il-account_svg__a",
    x: 19,
    y: 23,
    width: 82,
    height: 82,
    filterUnits: "userSpaceOnUse",
    colorInterpolationFilters: "sRGB"
  }, /*#__PURE__*/external_commonjs_react_commonjs2_react_amd_react_root_.createElement("feFlood", {
    floodOpacity: 0,
    result: "BackgroundImageFix"
  }), /*#__PURE__*/external_commonjs_react_commonjs2_react_amd_react_root_.createElement("feColorMatrix", {
    "in": "SourceAlpha",
    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
    result: "hardAlpha"
  }), /*#__PURE__*/external_commonjs_react_commonjs2_react_amd_react_root_.createElement("feOffset", {
    dy: 4
  }), /*#__PURE__*/external_commonjs_react_commonjs2_react_amd_react_root_.createElement("feGaussianBlur", {
    stdDeviation: 6
  }), /*#__PURE__*/external_commonjs_react_commonjs2_react_amd_react_root_.createElement("feColorMatrix", {
    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.16 0"
  }), /*#__PURE__*/external_commonjs_react_commonjs2_react_amd_react_root_.createElement("feBlend", {
    in2: "BackgroundImageFix",
    result: "effect1_dropShadow_118_16"
  }), /*#__PURE__*/external_commonjs_react_commonjs2_react_amd_react_root_.createElement("feBlend", {
    "in": "SourceGraphic",
    in2: "effect1_dropShadow_118_16",
    result: "shape"
  })))));
};

/* harmony default export */ const il_account = (SvgIlAccount);
;// CONCATENATED MODULE: ./src/assets/icons/ic-add.svg
var ic_add_path;

function ic_add_extends() { ic_add_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return ic_add_extends.apply(this, arguments); }



var SvgIcAdd = function SvgIcAdd(props) {
  return /*#__PURE__*/external_commonjs_react_commonjs2_react_amd_react_root_.createElement("svg", ic_add_extends({
    viewBox: "0 0 16 16",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), ic_add_path || (ic_add_path = /*#__PURE__*/external_commonjs_react_commonjs2_react_amd_react_root_.createElement("path", {
    d: "M13.6 8a.8.8 0 0 1-.8.8h-4v4a.8.8 0 1 1-1.6 0v-4h-4a.8.8 0 1 1 0-1.6h4v-4a.8.8 0 0 1 1.6 0v4h4a.8.8 0 0 1 .8.8Z"
  })));
};

/* harmony default export */ const ic_add = (SvgIcAdd);
;// CONCATENATED MODULE: ./src/assets/icons/ic-archive.svg
var ic_archive_path, _path2;

function ic_archive_extends() { ic_archive_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return ic_archive_extends.apply(this, arguments); }



var SvgIcArchive = function SvgIcArchive(props) {
  return /*#__PURE__*/external_commonjs_react_commonjs2_react_amd_react_root_.createElement("svg", ic_archive_extends({
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), ic_archive_path || (ic_archive_path = /*#__PURE__*/external_commonjs_react_commonjs2_react_amd_react_root_.createElement("path", {
    d: "M15.444 12.333h-3.11a2.333 2.333 0 1 1-4.667 0H4.556V4.556h10.888v7.777Zm0-9.333H4.556C3.692 3 3 3.7 3 4.556v10.888A1.556 1.556 0 0 0 4.556 17h10.888A1.556 1.556 0 0 0 17 15.444V4.556A1.556 1.556 0 0 0 15.444 3Z"
  })), _path2 || (_path2 = /*#__PURE__*/external_commonjs_react_commonjs2_react_amd_react_root_.createElement("path", {
    d: "M13.111 8.444h-1.555V6.111H8.444v2.333H6.89L10 11.555l3.111-3.11Z"
  })));
};

/* harmony default export */ const ic_archive = (SvgIcArchive);
;// CONCATENATED MODULE: ./src/assets/icons/arrow-down-checkmark.svg
var arrow_down_checkmark_path;

function arrow_down_checkmark_extends() { arrow_down_checkmark_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return arrow_down_checkmark_extends.apply(this, arguments); }



var SvgArrowDownCheckmark = function SvgArrowDownCheckmark(props) {
  return /*#__PURE__*/external_commonjs_react_commonjs2_react_amd_react_root_.createElement("svg", arrow_down_checkmark_extends({
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), arrow_down_checkmark_path || (arrow_down_checkmark_path = /*#__PURE__*/external_commonjs_react_commonjs2_react_amd_react_root_.createElement("path", {
    d: "m6.417 6.908 3.825 3.825 3.825-3.825 1.175 1.183-5 5-5-5 1.175-1.183Z",
    fill: "#181818"
  })));
};

/* harmony default export */ const arrow_down_checkmark = (SvgArrowDownCheckmark);
;// CONCATENATED MODULE: ./src/assets/icons/ic-arrow-up.svg
var ic_arrow_up_path;

function ic_arrow_up_extends() { ic_arrow_up_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return ic_arrow_up_extends.apply(this, arguments); }



var SvgIcArrowUp = function SvgIcArrowUp(props) {
  return /*#__PURE__*/external_commonjs_react_commonjs2_react_amd_react_root_.createElement("svg", ic_arrow_up_extends({
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), ic_arrow_up_path || (ic_arrow_up_path = /*#__PURE__*/external_commonjs_react_commonjs2_react_amd_react_root_.createElement("path", {
    d: "M10.9 16.6H9.234v-10l-3.992 3.992a.837.837 0 0 1-1.183-1.184L10.067 3.4l6.008 6.008a.837.837 0 1 1-1.183 1.184L10.9 6.6v10Z"
  })));
};

/* harmony default export */ const ic_arrow_up = (SvgIcArrowUp);
;// CONCATENATED MODULE: ./src/assets/icons/ic-arrow-down.svg
var ic_arrow_down_path;

function ic_arrow_down_extends() { ic_arrow_down_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return ic_arrow_down_extends.apply(this, arguments); }



var SvgIcArrowDown = function SvgIcArrowDown(props) {
  return /*#__PURE__*/external_commonjs_react_commonjs2_react_amd_react_root_.createElement("svg", ic_arrow_down_extends({
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), ic_arrow_down_path || (ic_arrow_down_path = /*#__PURE__*/external_commonjs_react_commonjs2_react_amd_react_root_.createElement("path", {
    d: "M9.234 3.4H10.9v10l3.992-3.992a.837.837 0 0 1 1.183 1.184L10.067 16.6 4.059 10.59a.837.837 0 1 1 1.183-1.183L9.234 13.4v-10Z"
  })));
};

/* harmony default export */ const ic_arrow_down = (SvgIcArrowDown);
;// CONCATENATED MODULE: ./src/assets/icons/ic-arrow-left.svg
var ic_arrow_left_path;

function ic_arrow_left_extends() { ic_arrow_left_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return ic_arrow_left_extends.apply(this, arguments); }



var SvgIcArrowLeft = function SvgIcArrowLeft(props) {
  return /*#__PURE__*/external_commonjs_react_commonjs2_react_amd_react_root_.createElement("svg", ic_arrow_left_extends({
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), ic_arrow_left_path || (ic_arrow_left_path = /*#__PURE__*/external_commonjs_react_commonjs2_react_amd_react_root_.createElement("path", {
    d: "M16.667 9.167v1.666h-10l3.991 3.992a.837.837 0 1 1-1.183 1.183L3.467 10l6.008-6.008a.837.837 0 1 1 1.183 1.183L6.667 9.167h10Z"
  })));
};

/* harmony default export */ const ic_arrow_left = (SvgIcArrowLeft);
;// CONCATENATED MODULE: ./src/assets/icons/ic-arrow-right.svg
var ic_arrow_right_path;

function ic_arrow_right_extends() { ic_arrow_right_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return ic_arrow_right_extends.apply(this, arguments); }



var SvgIcArrowRight = function SvgIcArrowRight(props) {
  return /*#__PURE__*/external_commonjs_react_commonjs2_react_amd_react_root_.createElement("svg", ic_arrow_right_extends({
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), ic_arrow_right_path || (ic_arrow_right_path = /*#__PURE__*/external_commonjs_react_commonjs2_react_amd_react_root_.createElement("path", {
    d: "M3.467 10.833V9.167h10L9.475 5.175a.837.837 0 1 1 1.183-1.183L16.667 10l-6.009 6.008a.837.837 0 1 1-1.183-1.183l3.992-3.992h-10Z"
  })));
};

/* harmony default export */ const ic_arrow_right = (SvgIcArrowRight);
;// CONCATENATED MODULE: ./src/assets/icons/ic-arrows-sort-down.svg
var ic_arrows_sort_down_path, ic_arrows_sort_down_path2;

function ic_arrows_sort_down_extends() { ic_arrows_sort_down_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return ic_arrows_sort_down_extends.apply(this, arguments); }



var SvgIcArrowsSortDown = function SvgIcArrowsSortDown(props) {
  return /*#__PURE__*/external_commonjs_react_commonjs2_react_amd_react_root_.createElement("svg", ic_arrows_sort_down_extends({
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), ic_arrows_sort_down_path || (ic_arrows_sort_down_path = /*#__PURE__*/external_commonjs_react_commonjs2_react_amd_react_root_.createElement("path", {
    d: "M7.5 2.5 4.167 5.833h2.5v5.834h1.666V5.833h2.5L7.5 2.5Z"
  })), ic_arrows_sort_down_path2 || (ic_arrows_sort_down_path2 = /*#__PURE__*/external_commonjs_react_commonjs2_react_amd_react_root_.createElement("path", {
    d: "M13.333 8.333v5.834h2.5L12.5 17.5l-3.334-3.333h2.5V8.333h1.667Z",
    fill: "#086DD6"
  })));
};

/* harmony default export */ const ic_arrows_sort_down = (SvgIcArrowsSortDown);
;// CONCATENATED MODULE: ./src/assets/icons/ic-arrows-sort-up.svg
var ic_arrows_sort_up_path, ic_arrows_sort_up_path2;

function ic_arrows_sort_up_extends() { ic_arrows_sort_up_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return ic_arrows_sort_up_extends.apply(this, arguments); }



var SvgIcArrowsSortUp = function SvgIcArrowsSortUp(props) {
  return /*#__PURE__*/external_commonjs_react_commonjs2_react_amd_react_root_.createElement("svg", ic_arrows_sort_up_extends({
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), ic_arrows_sort_up_path || (ic_arrows_sort_up_path = /*#__PURE__*/external_commonjs_react_commonjs2_react_amd_react_root_.createElement("path", {
    d: "M7.5 2.5 4.167 5.833h2.5v5.834h1.666V5.833h2.5L7.5 2.5Z",
    fill: "#086DD6"
  })), ic_arrows_sort_up_path2 || (ic_arrows_sort_up_path2 = /*#__PURE__*/external_commonjs_react_commonjs2_react_amd_react_root_.createElement("path", {
    d: "M13.333 8.333v5.834h2.5L12.5 17.5l-3.334-3.333h2.5V8.333h1.667Z"
  })));
};

/* harmony default export */ const ic_arrows_sort_up = (SvgIcArrowsSortUp);
;// CONCATENATED MODULE: ./src/assets/icons/ic-authenticator.svg
var ic_authenticator_path;

function ic_authenticator_extends() { ic_authenticator_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return ic_authenticator_extends.apply(this, arguments); }



var SvgIcAuthenticator = function SvgIcAuthenticator(props) {
  return /*#__PURE__*/external_commonjs_react_commonjs2_react_amd_react_root_.createElement("svg", ic_authenticator_extends({
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), ic_authenticator_path || (ic_authenticator_path = /*#__PURE__*/external_commonjs_react_commonjs2_react_amd_react_root_.createElement("path", {
    d: "M9.167 14.167a.833.833 0 1 0 1.666 0 .833.833 0 0 0-1.666 0Zm0-11.667v3.333h1.666v-1.6c2.825.409 5 2.825 5 5.767a5.833 5.833 0 1 1-11.666 0c0-1.4.491-2.683 1.316-3.683L10 10.833l1.175-1.175-5.667-5.666v.016A7.46 7.46 0 0 0 2.5 10 7.5 7.5 0 1 0 10 2.5h-.833ZM15 10a.833.833 0 1 0-1.667 0A.833.833 0 0 0 15 10ZM5 10a.833.833 0 1 0 1.667 0A.833.833 0 0 0 5 10Z"
  })));
};

/* harmony default export */ const ic_authenticator = (SvgIcAuthenticator);
;// CONCATENATED MODULE: ./src/assets/icons/blue-dot.svg
var blue_dot_path;

function blue_dot_extends() { blue_dot_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return blue_dot_extends.apply(this, arguments); }



var SvgBlueDot = function SvgBlueDot(props) {
  return /*#__PURE__*/external_commonjs_react_commonjs2_react_amd_react_root_.createElement("svg", blue_dot_extends({
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), blue_dot_path || (blue_dot_path = /*#__PURE__*/external_commonjs_react_commonjs2_react_amd_react_root_.createElement("path", {
    d: "M9.372 12.747a6.167 6.167 0 0 0 3.381-8.04 6.167 6.167 0 0 0-8.041-3.375A6.167 6.167 0 0 0 1.33 9.37a6.167 6.167 0 0 0 8.042 3.376Z",
    fill: "#BED7FE"
  })));
};

/* harmony default export */ const blue_dot = (SvgBlueDot);
;// CONCATENATED MODULE: ./src/assets/icons/ic-check-bold.svg
var ic_check_bold_path;

function ic_check_bold_extends() { ic_check_bold_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return ic_check_bold_extends.apply(this, arguments); }



var SvgIcCheckBold = function SvgIcCheckBold(props) {
  return /*#__PURE__*/external_commonjs_react_commonjs2_react_amd_react_root_.createElement("svg", ic_check_bold_extends({
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), ic_check_bold_path || (ic_check_bold_path = /*#__PURE__*/external_commonjs_react_commonjs2_react_amd_react_root_.createElement("path", {
    d: "m7.5 17.017-5.175-5.175 2.358-2.359L7.5 12.308l8.233-8.241 2.359 2.358L7.5 17.017Z"
  })));
};

/* harmony default export */ const ic_check_bold = (SvgIcCheckBold);
;// CONCATENATED MODULE: ./src/assets/icons/ic-check-circle.svg
var ic_check_circle_path;

function ic_check_circle_extends() { ic_check_circle_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return ic_check_circle_extends.apply(this, arguments); }



var SvgIcCheckCircle = function SvgIcCheckCircle(props) {
  return /*#__PURE__*/external_commonjs_react_commonjs2_react_amd_react_root_.createElement("svg", ic_check_circle_extends({
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), ic_check_circle_path || (ic_check_circle_path = /*#__PURE__*/external_commonjs_react_commonjs2_react_amd_react_root_.createElement("path", {
    d: "M10 1.667c-4.583 0-8.333 3.75-8.333 8.333s3.75 8.333 8.333 8.333 8.333-3.75 8.333-8.333S14.583 1.667 10 1.667Zm0 15A6.676 6.676 0 0 1 3.333 10 6.676 6.676 0 0 1 10 3.333 6.676 6.676 0 0 1 16.667 10 6.676 6.676 0 0 1 10 16.667Zm3.825-10.35-5.492 5.491-2.158-2.15L5 10.833l3.333 3.334L15 7.5l-1.175-1.183Z"
  })));
};

/* harmony default export */ const ic_check_circle = (SvgIcCheckCircle);
;// CONCATENATED MODULE: ./src/assets/icons/ic-check-circle-filled.svg
var ic_check_circle_filled_path;

function ic_check_circle_filled_extends() { ic_check_circle_filled_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return ic_check_circle_filled_extends.apply(this, arguments); }



var SvgIcCheckCircleFilled = function SvgIcCheckCircleFilled(props) {
  return /*#__PURE__*/external_commonjs_react_commonjs2_react_amd_react_root_.createElement("svg", ic_check_circle_filled_extends({
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), ic_check_circle_filled_path || (ic_check_circle_filled_path = /*#__PURE__*/external_commonjs_react_commonjs2_react_amd_react_root_.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M10.005 18.34a8.335 8.335 0 1 0 0-16.67 8.335 8.335 0 0 0 0 16.67ZM8.57 14 5 10.16l1.007-1.09 2.564 2.756L13.993 6 15 7.09 8.571 14Z",
    fill: "currentColor"
  })));
};

/* harmony default export */ const ic_check_circle_filled = (SvgIcCheckCircleFilled);
;// CONCATENATED MODULE: ./src/assets/icons/ic-check.svg
var ic_check_path;

function ic_check_extends() { ic_check_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return ic_check_extends.apply(this, arguments); }



var SvgIcCheck = function SvgIcCheck(props) {
  return /*#__PURE__*/external_commonjs_react_commonjs2_react_amd_react_root_.createElement("svg", ic_check_extends({
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), ic_check_path || (ic_check_path = /*#__PURE__*/external_commonjs_react_commonjs2_react_amd_react_root_.createElement("path", {
    d: "m17.5 5.833-10 10-4.583-4.583 1.175-1.175 3.408 3.4 8.825-8.817L17.5 5.833Z"
  })));
};

/* harmony default export */ const ic_check = (SvgIcCheck);
;// CONCATENATED MODULE: ./src/assets/icons/ic-chevron-down.svg
var ic_chevron_down_path;

function ic_chevron_down_extends() { ic_chevron_down_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return ic_chevron_down_extends.apply(this, arguments); }



var SvgIcChevronDown = function SvgIcChevronDown(props) {
  return /*#__PURE__*/external_commonjs_react_commonjs2_react_amd_react_root_.createElement("svg", ic_chevron_down_extends({
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), ic_chevron_down_path || (ic_chevron_down_path = /*#__PURE__*/external_commonjs_react_commonjs2_react_amd_react_root_.createElement("path", {
    d: "m6.176 7.15 3.825 3.825 3.825-3.825 1.175 1.183-5 5-5-5L6.176 7.15Z"
  })));
};

/* harmony default export */ const ic_chevron_down = (SvgIcChevronDown);
;// CONCATENATED MODULE: ./src/assets/icons/ic-chevron-right.svg
var ic_chevron_right_path;

function ic_chevron_right_extends() { ic_chevron_right_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return ic_chevron_right_extends.apply(this, arguments); }



var SvgIcChevronRight = function SvgIcChevronRight(props) {
  return /*#__PURE__*/external_commonjs_react_commonjs2_react_amd_react_root_.createElement("svg", ic_chevron_right_extends({
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), ic_chevron_right_path || (ic_chevron_right_path = /*#__PURE__*/external_commonjs_react_commonjs2_react_amd_react_root_.createElement("path", {
    d: "m6.91 14.067 3.824-3.825L6.91 6.417l1.184-1.175 5 5-5 5-1.184-1.175Z"
  })));
};

/* harmony default export */ const ic_chevron_right = (SvgIcChevronRight);
;// CONCATENATED MODULE: ./src/assets/icons/circle-55.svg
var _rect, circle_55_defs;

function circle_55_extends() { circle_55_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return circle_55_extends.apply(this, arguments); }



var SvgCircle55 = function SvgCircle55(props) {
  return /*#__PURE__*/external_commonjs_react_commonjs2_react_amd_react_root_.createElement("svg", circle_55_extends({
    viewBox: "0 0 55 55",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink"
  }, props), _rect || (_rect = /*#__PURE__*/external_commonjs_react_commonjs2_react_amd_react_root_.createElement("rect", {
    opacity: 0.36,
    width: 54.564,
    height: 54.564,
    rx: 27.282,
    fill: "url(#circle-55_svg__a)"
  })), circle_55_defs || (circle_55_defs = /*#__PURE__*/external_commonjs_react_commonjs2_react_amd_react_root_.createElement("defs", null, /*#__PURE__*/external_commonjs_react_commonjs2_react_amd_react_root_.createElement("pattern", {
    id: "circle-55_svg__a",
    patternContentUnits: "objectBoundingBox",
    width: 0.082,
    height: 0.082
  }, /*#__PURE__*/external_commonjs_react_commonjs2_react_amd_react_root_.createElement("use", {
    xlinkHref: "#circle-55_svg__b",
    transform: "scale(.00916)"
  })), /*#__PURE__*/external_commonjs_react_commonjs2_react_amd_react_root_.createElement("image", {
    id: "circle-55_svg__b",
    width: 9,
    height: 9,
    xlinkHref: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAJCAYAAADgkQYQAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAtSURBVHgB1dChDQAACAPBHwn23wVWAYMkxdKkVacKkF1jj80oyDfoFxgD1UdRPHMLOJmKMAEAAAAASUVORK5CYII="
  }))));
};

/* harmony default export */ const circle_55 = (SvgCircle55);
;// CONCATENATED MODULE: ./src/assets/icons/ic-clear-circle-filled.svg
var ic_clear_circle_filled_path;

function ic_clear_circle_filled_extends() { ic_clear_circle_filled_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return ic_clear_circle_filled_extends.apply(this, arguments); }



var SvgIcClearCircleFilled = function SvgIcClearCircleFilled(props) {
  return /*#__PURE__*/external_commonjs_react_commonjs2_react_amd_react_root_.createElement("svg", ic_clear_circle_filled_extends({
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), ic_clear_circle_filled_path || (ic_clear_circle_filled_path = /*#__PURE__*/external_commonjs_react_commonjs2_react_amd_react_root_.createElement("path", {
    d: "M12.946 12.946a.833.833 0 0 1-1.178 0L10 11.178l-1.768 1.768a.833.833 0 1 1-1.178-1.178L8.82 10 7.054 8.232a.833.833 0 1 1 1.178-1.178L10 8.82l1.768-1.767a.833.833 0 1 1 1.178 1.178L11.178 10l1.768 1.768a.833.833 0 0 1 0 1.178Zm2.946-8.839A8.334 8.334 0 1 0 4.107 15.893 8.334 8.334 0 0 0 15.892 4.107Z",
    fill: "currentColor"
  })));
};

/* harmony default export */ const ic_clear_circle_filled = (SvgIcClearCircleFilled);
;// CONCATENATED MODULE: ./src/assets/icons/ic-close.svg
var ic_close_path;

function ic_close_extends() { ic_close_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return ic_close_extends.apply(this, arguments); }



var SvgIcClose = function SvgIcClose(props) {
  return /*#__PURE__*/external_commonjs_react_commonjs2_react_amd_react_root_.createElement("svg", ic_close_extends({
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), ic_close_path || (ic_close_path = /*#__PURE__*/external_commonjs_react_commonjs2_react_amd_react_root_.createElement("path", {
    d: "M15.246 5.93a.83.83 0 1 0-1.175-1.176L10 8.825l-4.072-4.07a.83.83 0 1 0-1.175 1.174L8.825 10l-4.07 4.07a.83.83 0 1 0 1.174 1.176L10 11.176l4.07 4.07a.83.83 0 1 0 1.176-1.175L11.176 10l4.07-4.072Z"
  })));
};

/* harmony default export */ const ic_close = (SvgIcClose);
;// CONCATENATED MODULE: ./src/assets/icons/ic-cloud-off.svg
var ic_cloud_off_path;

function ic_cloud_off_extends() { ic_cloud_off_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return ic_cloud_off_extends.apply(this, arguments); }



var SvgIcCloudOff = function SvgIcCloudOff(props) {
  return /*#__PURE__*/external_commonjs_react_commonjs2_react_amd_react_root_.createElement("svg", ic_cloud_off_extends({
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), ic_cloud_off_path || (ic_cloud_off_path = /*#__PURE__*/external_commonjs_react_commonjs2_react_amd_react_root_.createElement("path", {
    d: "M6.442 8.333 13.108 15H5a3.333 3.333 0 0 1 0-6.667h1.442ZM2.5 4.392l2.292 2.275C2.133 6.792 0 8.975 0 11.667a5 5 0 0 0 5 5h9.775l1.667 1.666 1.058-1.058L3.558 3.333 2.5 4.392Zm13.625 3.966A6.242 6.242 0 0 0 10 3.333a6.09 6.09 0 0 0-3.333.975l1.208 1.217a4.583 4.583 0 0 1 6.708 4.058V10h1.25a2.5 2.5 0 0 1 2.5 2.5c0 .942-.533 1.758-1.3 2.183l1.209 1.209A4.17 4.17 0 0 0 20 12.5c0-2.2-1.708-3.983-3.875-4.142Z"
  })));
};

/* harmony default export */ const ic_cloud_off = (SvgIcCloudOff);
;// CONCATENATED MODULE: ./src/assets/icons/ic-code.svg
var ic_code_path;

function ic_code_extends() { ic_code_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return ic_code_extends.apply(this, arguments); }



var SvgIcCode = function SvgIcCode(props) {
  return /*#__PURE__*/external_commonjs_react_commonjs2_react_amd_react_root_.createElement("svg", ic_code_extends({
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), ic_code_path || (ic_code_path = /*#__PURE__*/external_commonjs_react_commonjs2_react_amd_react_root_.createElement("path", {
    d: "m10.742 2.5 1.633.333L9.258 17.5l-1.633-.333L10.742 2.5Zm5.583 7.5-2.992-2.992V4.65l5.35 5.35-5.35 5.342v-2.359L16.325 10ZM1.317 10l5.35-5.35v2.358L3.675 10l2.992 2.983v2.359L1.317 10Z"
  })));
};

/* harmony default export */ const ic_code = (SvgIcCode);
;// CONCATENATED MODULE: ./src/assets/icons/ic-copy.svg
var ic_copy_path;

function ic_copy_extends() { ic_copy_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return ic_copy_extends.apply(this, arguments); }



var SvgIcCopy = function SvgIcCopy(props) {
  return /*#__PURE__*/external_commonjs_react_commonjs2_react_amd_react_root_.createElement("svg", ic_copy_extends({
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), ic_copy_path || (ic_copy_path = /*#__PURE__*/external_commonjs_react_commonjs2_react_amd_react_root_.createElement("path", {
    d: "M1.667 3.666a2 2 0 0 1 2-2h7.667a2 2 0 0 1 2 2v9.667H3.667a2 2 0 0 1-2-2V3.666Zm14.667 3a2 2 0 0 1 2 2v7.667a2 2 0 0 1-2 2H8.667a2 2 0 0 1-2-2V15h8.334V6.666h1.333Zm-13-3.333v8.333h8.333V3.333H3.334Z"
  })));
};

/* harmony default export */ const ic_copy = (SvgIcCopy);
;// CONCATENATED MODULE: ./src/assets/icons/create-account-illustration.svg
var create_account_illustration_path, create_account_illustration_path2, _path3, _path4, _path5, _path6, _path7, _path8, _path9, _path10, create_account_illustration_g, _g2, _g3, _path11, _path12, _path13, _path14, _path15, _path16, _path17, _path18, create_account_illustration_defs;

function create_account_illustration_extends() { create_account_illustration_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return create_account_illustration_extends.apply(this, arguments); }



var SvgCreateAccountIllustration = function SvgCreateAccountIllustration(props) {
  return /*#__PURE__*/external_commonjs_react_commonjs2_react_amd_react_root_.createElement("svg", create_account_illustration_extends({
    width: 320,
    height: 292,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink"
  }, props), create_account_illustration_path || (create_account_illustration_path = /*#__PURE__*/external_commonjs_react_commonjs2_react_amd_react_root_.createElement("path", {
    opacity: 0.36,
    d: "M28.293 250.445s119.325-68.117 263.415 0H28.293Z",
    fill: "url(#create-account-illustration_svg__a)"
  })), create_account_illustration_path2 || (create_account_illustration_path2 = /*#__PURE__*/external_commonjs_react_commonjs2_react_amd_react_root_.createElement("path", {
    d: "M91.802 33.601 28.69 47.885a4.8 4.8 0 0 0-3.622 5.741l21.7 95.884a4.8 4.8 0 0 0 5.742 3.622l63.112-14.283a4.8 4.8 0 0 0 3.622-5.742l-21.7-95.883a4.8 4.8 0 0 0-5.742-3.623Z",
    fill: "#3F3D56"
  })), _path3 || (_path3 = /*#__PURE__*/external_commonjs_react_commonjs2_react_amd_react_root_.createElement("path", {
    d: "M31.3 65.229a2.144 2.144 0 1 0 0-4.288 2.144 2.144 0 0 0 0 4.288ZM33.443 73.09a2.144 2.144 0 1 0 0-4.287 2.144 2.144 0 0 0 0 4.287ZM47.377 130.616a2.144 2.144 0 1 0 0-4.288 2.144 2.144 0 0 0 0 4.288ZM49.521 138.476a2.144 2.144 0 1 0 0-4.288 2.144 2.144 0 0 0 0 4.288Z",
    fill: "#fff"
  })), _path4 || (_path4 = /*#__PURE__*/external_commonjs_react_commonjs2_react_amd_react_root_.createElement("path", {
    d: "m91.536 73.477-43.518 9.85 1.642 7.252 43.518-9.849-1.642-7.253Z",
    fill: "#F5F5F5"
  })), _path5 || (_path5 = /*#__PURE__*/external_commonjs_react_commonjs2_react_amd_react_root_.createElement("path", {
    d: "M149.289 70.248 76.813 86.65l23.819 105.248 72.477-16.403-23.82-105.247Z",
    fill: "#2B6FCF"
  })), _path6 || (_path6 = /*#__PURE__*/external_commonjs_react_commonjs2_react_amd_react_root_.createElement("path", {
    d: "m225.719 52.95-72.476 16.403 23.819 105.248 72.476-16.403-23.819-105.247Z",
    fill: "#3F3D56"
  })), _path7 || (_path7 = /*#__PURE__*/external_commonjs_react_commonjs2_react_amd_react_root_.createElement("path", {
    d: "m135.842 85.268-43.518 9.85 1.641 7.252 43.518-9.849-1.641-7.253ZM147.062 101.154l-58.024 13.132.41 1.813 58.024-13.131-.41-1.814ZM148.019 105.386l-58.024 13.132.41 1.813 58.025-13.132-.411-1.813ZM148.977 109.616l-58.024 13.132.41 1.813 58.024-13.132-.41-1.813ZM119.713 120.687l-27.803 6.292.41 1.814 27.804-6.293-.411-1.813ZM124.902 123.96l-32.034 7.25.41 1.813 32.035-7.25-.411-1.813ZM151.849 122.31l-58.024 13.131.41 1.814 58.025-13.132-.411-1.813ZM152.807 126.541l-58.024 13.132.41 1.813 58.025-13.132-.411-1.813ZM149.533 131.729 95.74 143.903l.41 1.814 53.794-12.175-.411-1.813ZM154.722 135.003l-58.024 13.132.41 1.813 58.025-13.132-.411-1.813ZM127.876 145.526l-30.22 6.839.41 1.813 30.221-6.839-.411-1.813Z",
    fill: "#F5F5F5"
  })), _path8 || (_path8 = /*#__PURE__*/external_commonjs_react_commonjs2_react_amd_react_root_.createElement("path", {
    opacity: 0.3,
    d: "m209.358 132.168-32.034 7.25.411 1.813 32.034-7.25-.411-1.813ZM236.306 130.517l-58.024 13.131.41 1.814 58.024-13.132-.41-1.813ZM237.263 134.747l-58.024 13.132.411 1.813 58.024-13.132-.411-1.813ZM233.99 139.936l-53.793 12.174.41 1.814 53.793-12.175-.41-1.813ZM239.178 143.209l-58.024 13.132.411 1.813 58.024-13.132-.411-1.813Z",
    fill: "#2B6FCF"
  })), _path9 || (_path9 = /*#__PURE__*/external_commonjs_react_commonjs2_react_amd_react_root_.createElement("path", {
    d: "m156.112 146.76-35.056 7.934 5.471 24.177 35.057-7.934-5.472-24.177Z",
    fill: "#F5F5F5"
  })), _path10 || (_path10 = /*#__PURE__*/external_commonjs_react_commonjs2_react_amd_react_root_.createElement("path", {
    opacity: 0.3,
    d: "m197.607 66.207-35.056 7.934 5.471 24.176 35.057-7.933-5.472-24.177ZM231.919 91.481l-35.056 7.934 5.471 24.177 35.057-7.934-5.472-24.177Z",
    fill: "#2B6FCF"
  })), create_account_illustration_g || (create_account_illustration_g = /*#__PURE__*/external_commonjs_react_commonjs2_react_amd_react_root_.createElement("g", {
    opacity: 0.5,
    fill: "#47E6B1"
  }, /*#__PURE__*/external_commonjs_react_commonjs2_react_amd_react_root_.createElement("path", {
    opacity: 0.5,
    d: "M67.386 214.327h-1.072v6.074h1.072v-6.074Z"
  }), /*#__PURE__*/external_commonjs_react_commonjs2_react_amd_react_root_.createElement("path", {
    opacity: 0.5,
    d: "M69.888 217.9v-1.072h-6.075v1.072h6.075Z"
  }))), _g2 || (_g2 = /*#__PURE__*/external_commonjs_react_commonjs2_react_amd_react_root_.createElement("g", {
    opacity: 0.5,
    fill: "#47E6B1"
  }, /*#__PURE__*/external_commonjs_react_commonjs2_react_amd_react_root_.createElement("path", {
    opacity: 0.5,
    d: "M184.224 32h-1.072v6.074h1.072V32Z"
  }), /*#__PURE__*/external_commonjs_react_commonjs2_react_amd_react_root_.createElement("path", {
    opacity: 0.5,
    d: "M186.726 35.573v-1.072h-6.075v1.072h6.075Z"
  }))), _g3 || (_g3 = /*#__PURE__*/external_commonjs_react_commonjs2_react_amd_react_root_.createElement("g", {
    opacity: 0.5,
    fill: "#47E6B1"
  }, /*#__PURE__*/external_commonjs_react_commonjs2_react_amd_react_root_.createElement("path", {
    opacity: 0.5,
    d: "M317.499 76.663h-1.072v6.074h1.072v-6.074Z"
  }), /*#__PURE__*/external_commonjs_react_commonjs2_react_amd_react_root_.createElement("path", {
    opacity: 0.5,
    d: "M320 80.236v-1.072h-6.074v1.072H320Z"
  }))), _path11 || (_path11 = /*#__PURE__*/external_commonjs_react_commonjs2_react_amd_react_root_.createElement("path", {
    opacity: 0.5,
    d: "M128.733 213.722a1.314 1.314 0 0 1-.732-1.587.651.651 0 0 0 .029-.146.662.662 0 0 0-.43-.657.656.656 0 0 0-.826.35 1.31 1.31 0 0 1-1.587.732.654.654 0 0 0-.145-.029.663.663 0 0 0-.658.43.656.656 0 0 0 .351.826 1.314 1.314 0 0 1 .731 1.587.655.655 0 0 0 .814.817.656.656 0 0 0 .34-.235.61.61 0 0 0 .073-.129c.129-.296.362-.534.654-.669.293-.134.625-.157.933-.063a.659.659 0 0 0 .803-.401.656.656 0 0 0-.35-.826ZM180.97 258.26a1.316 1.316 0 0 1-.669-.654 1.319 1.319 0 0 1-.063-.933.651.651 0 0 0 .029-.146.662.662 0 0 0-.43-.657.656.656 0 0 0-.826.35 1.31 1.31 0 0 1-1.587.732.651.651 0 0 0-.146-.029.662.662 0 0 0-.657.43.656.656 0 0 0 .35.826 1.31 1.31 0 0 1 .732 1.587.654.654 0 0 0-.029.145.663.663 0 0 0 .43.658.656.656 0 0 0 .826-.35c.129-.296.362-.534.654-.669.293-.134.625-.157.933-.063a.654.654 0 0 0 .145.029.663.663 0 0 0 .658-.43.656.656 0 0 0-.35-.826ZM4.391 107.5a1.313 1.313 0 0 1-.731-1.587.628.628 0 0 0-.077-.545.656.656 0 0 0-1.15.093 1.315 1.315 0 0 1-1.587.731.657.657 0 0 0-.453 1.227 1.317 1.317 0 0 1 .732 1.587.627.627 0 0 0 .077.546.66.66 0 0 0 1.077.036.622.622 0 0 0 .073-.129 1.31 1.31 0 0 1 1.587-.732.657.657 0 0 0 .145.029.665.665 0 0 0 .658-.429.66.66 0 0 0-.221-.754.64.64 0 0 0-.13-.073ZM313.529 161.788a1.31 1.31 0 0 1-.731-1.587.651.651 0 0 0-.078-.545.652.652 0 0 0-.737-.272.66.66 0 0 0-.34.235.722.722 0 0 0-.073.13 1.31 1.31 0 0 1-1.586.731.653.653 0 0 0-.546.078.658.658 0 0 0-.036 1.077c.04.029.083.053.129.072a1.318 1.318 0 0 1 .732 1.587.6.6 0 0 0-.029.146.653.653 0 0 0 .429.657.659.659 0 0 0 .754-.221.63.63 0 0 0 .073-.129 1.31 1.31 0 0 1 1.586-.732.62.62 0 0 0 .546-.077.662.662 0 0 0 .272-.737.658.658 0 0 0-.365-.413Z",
    fill: "#4D8AF0"
  })), _path12 || (_path12 = /*#__PURE__*/external_commonjs_react_commonjs2_react_amd_react_root_.createElement("path", {
    opacity: 0.5,
    d: "M38.445 196.819a2.144 2.144 0 1 0 0-4.288 2.144 2.144 0 0 0 0 4.288Z",
    fill: "#F55F44"
  })), _path13 || (_path13 = /*#__PURE__*/external_commonjs_react_commonjs2_react_amd_react_root_.createElement("path", {
    opacity: 0.5,
    d: "M114.907 36.288a2.144 2.144 0 1 0 0-4.288 2.144 2.144 0 0 0 0 4.288Z",
    fill: "#4D8AF0"
  })), _path14 || (_path14 = /*#__PURE__*/external_commonjs_react_commonjs2_react_amd_react_root_.createElement("path", {
    opacity: 0.5,
    d: "M165.716 197.766a2.144 2.144 0 1 0 0-4.288 2.144 2.144 0 0 0 0 4.288Z",
    fill: "#47E6B1"
  })), _path15 || (_path15 = /*#__PURE__*/external_commonjs_react_commonjs2_react_amd_react_root_.createElement("path", {
    opacity: 0.5,
    d: "M289.343 251.362a2.144 2.144 0 1 0 0-4.288 2.144 2.144 0 0 0 0 4.288Z",
    fill: "#F55F44"
  })), _path16 || (_path16 = /*#__PURE__*/external_commonjs_react_commonjs2_react_amd_react_root_.createElement("path", {
    d: "m248.302 78.978-63.113 14.284a4.801 4.801 0 0 0-3.622 5.741l21.7 95.884a4.8 4.8 0 0 0 5.742 3.622l63.112-14.283a4.8 4.8 0 0 0 3.622-5.742l-21.7-95.883a4.8 4.8 0 0 0-5.741-3.623Z",
    fill: "#2B6FCF"
  })), _path17 || (_path17 = /*#__PURE__*/external_commonjs_react_commonjs2_react_amd_react_root_.createElement("path", {
    d: "M187.798 110.607a2.143 2.143 0 1 0 0-4.287 2.143 2.143 0 0 0 0 4.287ZM189.942 118.467a2.143 2.143 0 1 0 0-4.286 2.143 2.143 0 0 0 0 4.286ZM203.876 175.994a2.144 2.144 0 1 0 0-4.288 2.144 2.144 0 0 0 0 4.288ZM206.02 183.854a2.144 2.144 0 1 0 0-4.288 2.144 2.144 0 0 0 0 4.288Z",
    fill: "#fff"
  })), _path18 || (_path18 = /*#__PURE__*/external_commonjs_react_commonjs2_react_amd_react_root_.createElement("path", {
    d: "m248.035 118.855-43.518 9.849 1.642 7.253 43.518-9.849-1.642-7.253Z",
    fill: "#F5F5F5"
  })), create_account_illustration_defs || (create_account_illustration_defs = /*#__PURE__*/external_commonjs_react_commonjs2_react_amd_react_root_.createElement("defs", null, /*#__PURE__*/external_commonjs_react_commonjs2_react_amd_react_root_.createElement("pattern", {
    id: "create-account-illustration_svg__a",
    patternContentUnits: "objectBoundingBox",
    width: 0.017,
    height: 0.149
  }, /*#__PURE__*/external_commonjs_react_commonjs2_react_amd_react_root_.createElement("use", {
    xlinkHref: "#create-account-illustration_svg__b",
    transform: "scale(.0019 .01652)"
  })), /*#__PURE__*/external_commonjs_react_commonjs2_react_amd_react_root_.createElement("image", {
    id: "create-account-illustration_svg__b",
    width: 9,
    height: 9,
    xlinkHref: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAJCAYAAADgkQYQAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAtSURBVHgB1dChDQAACAPBHwn23wVWAYMkxdKkVacKkF1jj80oyDfoFxgD1UdRPHMLOJmKMAEAAAAASUVORK5CYII="
  }))));
};

/* harmony default export */ const create_account_illustration = (SvgCreateAccountIllustration);
;// CONCATENATED MODULE: ./src/assets/icons/ic-dashboard.svg
var ic_dashboard_path;

function ic_dashboard_extends() { ic_dashboard_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return ic_dashboard_extends.apply(this, arguments); }



var SvgIcDashboard = function SvgIcDashboard(props) {
  return /*#__PURE__*/external_commonjs_react_commonjs2_react_amd_react_root_.createElement("svg", ic_dashboard_extends({
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), ic_dashboard_path || (ic_dashboard_path = /*#__PURE__*/external_commonjs_react_commonjs2_react_amd_react_root_.createElement("path", {
    d: "M15.833 4.167v1.666H12.5V4.167h3.333Zm-8.333 0v5H4.167v-5H7.5Zm8.333 6.666v5H12.5v-5h3.333ZM7.5 14.167v1.666H4.167v-1.666H7.5ZM17.5 2.5h-6.667v5H17.5v-5Zm-8.333 0H2.5v8.333h6.667V2.5ZM17.5 9.167h-6.667V17.5H17.5V9.167ZM9.167 12.5H2.5v5h6.667v-5Z"
  })));
};

/* harmony default export */ const ic_dashboard = (SvgIcDashboard);
;// CONCATENATED MODULE: ./src/assets/icons/diamond-with-horizontal-lines.svg
var diamond_with_horizontal_lines_rect, diamond_with_horizontal_lines_defs;

function diamond_with_horizontal_lines_extends() { diamond_with_horizontal_lines_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return diamond_with_horizontal_lines_extends.apply(this, arguments); }



var SvgDiamondWithHorizontalLines = function SvgDiamondWithHorizontalLines(props) {
  return /*#__PURE__*/external_commonjs_react_commonjs2_react_amd_react_root_.createElement("svg", diamond_with_horizontal_lines_extends({
    viewBox: "0 0 104 104",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink"
  }, props), diamond_with_horizontal_lines_rect || (diamond_with_horizontal_lines_rect = /*#__PURE__*/external_commonjs_react_commonjs2_react_amd_react_root_.createElement("rect", {
    opacity: 0.36,
    y: 52,
    width: 73.539,
    height: 73.539,
    rx: 8,
    transform: "rotate(-45 0 52)",
    fill: "url(#diamond-with-horizontal-lines_svg__a)"
  })), diamond_with_horizontal_lines_defs || (diamond_with_horizontal_lines_defs = /*#__PURE__*/external_commonjs_react_commonjs2_react_amd_react_root_.createElement("defs", null, /*#__PURE__*/external_commonjs_react_commonjs2_react_amd_react_root_.createElement("pattern", {
    id: "diamond-with-horizontal-lines_svg__a",
    patternContentUnits: "objectBoundingBox",
    width: 0.061,
    height: 0.061
  }, /*#__PURE__*/external_commonjs_react_commonjs2_react_amd_react_root_.createElement("use", {
    xlinkHref: "#diamond-with-horizontal-lines_svg__b",
    transform: "scale(.0068)"
  })), /*#__PURE__*/external_commonjs_react_commonjs2_react_amd_react_root_.createElement("image", {
    id: "diamond-with-horizontal-lines_svg__b",
    width: 9,
    height: 9,
    xlinkHref: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAJCAYAAADgkQYQAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAtSURBVHgB1dChDQAACAPBHwn23wVWAYMkxdKkVacKkF1jj80oyDfoFxgD1UdRPHMLOJmKMAEAAAAASUVORK5CYII="
  }))));
};

/* harmony default export */ const diamond_with_horizontal_lines = (SvgDiamondWithHorizontalLines);
;// CONCATENATED MODULE: ./src/assets/icons/ic-download.svg
var ic_download_path;

function ic_download_extends() { ic_download_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return ic_download_extends.apply(this, arguments); }



var SvgIcDownload = function SvgIcDownload(props) {
  return /*#__PURE__*/external_commonjs_react_commonjs2_react_amd_react_root_.createElement("svg", ic_download_extends({
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), ic_download_path || (ic_download_path = /*#__PURE__*/external_commonjs_react_commonjs2_react_amd_react_root_.createElement("path", {
    d: "M11 3.5v6h1.17L10 11.67 7.83 9.5H9v-6h2Zm2-2H7v6H3l7 7 7-7h-4v-6Zm4 15H3v2h14v-2Z"
  })));
};

/* harmony default export */ const ic_download = (SvgIcDownload);
;// CONCATENATED MODULE: ./src/assets/icons/ic-editor.svg
var ic_editor_path;

function ic_editor_extends() { ic_editor_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return ic_editor_extends.apply(this, arguments); }



var SvgIcEditor = function SvgIcEditor(props) {
  return /*#__PURE__*/external_commonjs_react_commonjs2_react_amd_react_root_.createElement("svg", ic_editor_extends({
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), ic_editor_path || (ic_editor_path = /*#__PURE__*/external_commonjs_react_commonjs2_react_amd_react_root_.createElement("path", {
    d: "M14.167 3.607V8.43L12.5 6.82 10.833 8.43V3.607H7.5v12.857h8.333V3.607h-1.666ZM2.5 6.017V4.412h1.667v-.804c0-.892.75-1.607 1.666-1.607h10c.875 0 1.667.763 1.667 1.607v12.857c0 .844-.792 1.607-1.667 1.607h-10c-.875 0-1.666-.763-1.666-1.607v-.803H2.5v-1.607h1.667v-3.215H2.5V9.232h1.667V6.018H2.5Zm1.667-1.606v1.607h1.666V4.41H4.167Zm0 11.25h1.666v-1.607H4.167v1.607Zm0-4.822h1.666V9.232H4.167v1.607Z"
  })));
};

/* harmony default export */ const ic_editor = (SvgIcEditor);
;// CONCATENATED MODULE: ./src/assets/icons/ic-email.svg
var ic_email_path;

function ic_email_extends() { ic_email_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return ic_email_extends.apply(this, arguments); }



var SvgIcEmail = function SvgIcEmail(props) {
  return /*#__PURE__*/external_commonjs_react_commonjs2_react_amd_react_root_.createElement("svg", ic_email_extends({
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), ic_email_path || (ic_email_path = /*#__PURE__*/external_commonjs_react_commonjs2_react_amd_react_root_.createElement("path", {
    d: "M3.333 3.333h13.334A1.667 1.667 0 0 1 18.332 5v10a1.667 1.667 0 0 1-1.666 1.667H3.332c-.925 0-1.667-.75-1.667-1.667V5a1.66 1.66 0 0 1 1.667-1.667ZM10 9.167 16.666 5H3.333L10 9.167ZM3.333 15h13.334V6.975L10 11.133 3.333 6.975V15Z"
  })));
};

/* harmony default export */ const ic_email = (SvgIcEmail);
;// CONCATENATED MODULE: ./src/assets/icons/ic-eye.svg
var ic_eye_path;

function ic_eye_extends() { ic_eye_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return ic_eye_extends.apply(this, arguments); }



var SvgIcEye = function SvgIcEye(props) {
  return /*#__PURE__*/external_commonjs_react_commonjs2_react_amd_react_root_.createElement("svg", ic_eye_extends({
    viewBox: "0 0 16 10",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), ic_eye_path || (ic_eye_path = /*#__PURE__*/external_commonjs_react_commonjs2_react_amd_react_root_.createElement("path", {
    d: "M8 3a2 2 0 1 1 0 4 2 2 0 0 1 0-4Zm0-3c3.333 0 6.18 2.073 7.333 5-1.153 2.927-4 5-7.333 5S1.82 7.927.667 5C1.82 2.073 4.667 0 8 0ZM2.12 5a6.547 6.547 0 0 0 11.76 0A6.547 6.547 0 0 0 2.12 5Z"
  })));
};

/* harmony default export */ const ic_eye = (SvgIcEye);
;// CONCATENATED MODULE: ./src/assets/icons/ic-eye-off.svg
var ic_eye_off_path;

function ic_eye_off_extends() { ic_eye_off_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return ic_eye_off_extends.apply(this, arguments); }



var SvgIcEyeOff = function SvgIcEyeOff(props) {
  return /*#__PURE__*/external_commonjs_react_commonjs2_react_amd_react_root_.createElement("svg", ic_eye_off_extends({
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), ic_eye_off_path || (ic_eye_off_path = /*#__PURE__*/external_commonjs_react_commonjs2_react_amd_react_root_.createElement("path", {
    d: "m1.667 4.392 1.066-1.059 13.934 13.934-1.059 1.066-2.566-2.566A9.647 9.647 0 0 1 10 16.25c-4.167 0-7.725-2.592-9.167-6.25a9.795 9.795 0 0 1 2.659-3.783L1.667 4.392ZM10 7.5a2.5 2.5 0 0 1 2.358 3.333L9.167 7.642A2.5 2.5 0 0 1 10 7.5Zm0-3.75c4.167 0 7.725 2.592 9.167 6.25a9.824 9.824 0 0 1-3.334 4.325l-1.183-1.192A8.219 8.219 0 0 0 17.35 10 8.184 8.184 0 0 0 10 5.417c-.908 0-1.8.15-2.633.416L6.083 4.558A9.887 9.887 0 0 1 10 3.75ZM2.65 10A8.184 8.184 0 0 0 10 14.583c.575 0 1.142-.058 1.667-.175l-1.9-1.908A2.553 2.553 0 0 1 7.5 10.233L4.667 7.392A8.212 8.212 0 0 0 2.65 10Z"
  })));
};

/* harmony default export */ const ic_eye_off = (SvgIcEyeOff);
;// CONCATENATED MODULE: ./src/assets/icons/ic-hashtag.svg
var ic_hashtag_path;

function ic_hashtag_extends() { ic_hashtag_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return ic_hashtag_extends.apply(this, arguments); }



var SvgIcHashtag = function SvgIcHashtag(props) {
  return /*#__PURE__*/external_commonjs_react_commonjs2_react_amd_react_root_.createElement("svg", ic_hashtag_extends({
    viewBox: "0 0 20 20",
    fillRule: "evenodd",
    clipRule: "evenodd",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), ic_hashtag_path || (ic_hashtag_path = /*#__PURE__*/external_commonjs_react_commonjs2_react_amd_react_root_.createElement("path", {
    d: "M8.6 3.5H7v3.4H3.5v1.6H7v2.9H3.5V13H7v3.5h1.6V13h2.9v3.5h1.6V13h3.4v-1.6h-3.4V8.5h3.4V6.9h-3.4V3.5h-1.6v3.4H8.6V3.5Zm0 5v2.9h2.9V8.5H8.6Z"
  })));
};

/* harmony default export */ const ic_hashtag = (SvgIcHashtag);
;// CONCATENATED MODULE: ./src/assets/icons/ic-help.svg
var ic_help_path;

function ic_help_extends() { ic_help_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return ic_help_extends.apply(this, arguments); }



var SvgIcHelp = function SvgIcHelp(props) {
  return /*#__PURE__*/external_commonjs_react_commonjs2_react_amd_react_root_.createElement("svg", ic_help_extends({
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), ic_help_path || (ic_help_path = /*#__PURE__*/external_commonjs_react_commonjs2_react_amd_react_root_.createElement("path", {
    d: "M9.167 15h1.666v-1.667H9.167V15ZM10 1.667a8.333 8.333 0 1 0 0 16.666 8.333 8.333 0 0 0 0-16.666Zm0 15A6.676 6.676 0 0 1 3.333 10 6.676 6.676 0 0 1 10 3.333 6.676 6.676 0 0 1 16.667 10 6.676 6.676 0 0 1 10 16.667ZM10 5a3.333 3.333 0 0 0-3.333 3.333h1.666a1.667 1.667 0 1 1 3.334 0c0 1.667-2.5 1.459-2.5 4.167h1.666c0-1.875 2.5-2.083 2.5-4.167A3.333 3.333 0 0 0 10 5Z"
  })));
};

/* harmony default export */ const ic_help = (SvgIcHelp);
;// CONCATENATED MODULE: ./src/assets/icons/ic-history.svg
var ic_history_path;

function ic_history_extends() { ic_history_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return ic_history_extends.apply(this, arguments); }



var SvgIcHistory = function SvgIcHistory(props) {
  return /*#__PURE__*/external_commonjs_react_commonjs2_react_amd_react_root_.createElement("svg", ic_history_extends({
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), ic_history_path || (ic_history_path = /*#__PURE__*/external_commonjs_react_commonjs2_react_amd_react_root_.createElement("path", {
    d: "M11.667 6.667h-1.25v4.166l3.566 2.117.6-1.008-2.916-1.734V6.667ZM11.25 2.5a7.5 7.5 0 0 0-7.5 7.5h-2.5l3.3 3.358L7.917 10h-2.5a5.833 5.833 0 1 1 5.833 5.833 5.786 5.786 0 0 1-4.117-1.716L5.95 15.3a7.413 7.413 0 0 0 5.3 2.2 7.5 7.5 0 0 0 0-15Z"
  })));
};

/* harmony default export */ const ic_history = (SvgIcHistory);
;// CONCATENATED MODULE: ./src/assets/icons/il-notes.svg
var il_notes_circle, il_notes_g, il_notes_rect, _rect2, _rect3, il_notes_g2, _rect4, _rect5, _rect6, il_notes_defs;

function il_notes_extends() { il_notes_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return il_notes_extends.apply(this, arguments); }



var SvgIlNotes = function SvgIlNotes(props) {
  return /*#__PURE__*/external_commonjs_react_commonjs2_react_amd_react_root_.createElement("svg", il_notes_extends({
    width: 120,
    height: 120,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), il_notes_circle || (il_notes_circle = /*#__PURE__*/external_commonjs_react_commonjs2_react_amd_react_root_.createElement("circle", {
    cx: 60,
    cy: 60,
    r: 60,
    fill: "#F4F5F7"
  })), il_notes_g || (il_notes_g = /*#__PURE__*/external_commonjs_react_commonjs2_react_amd_react_root_.createElement("g", {
    filter: "url(#il-notes_svg__a)"
  }, /*#__PURE__*/external_commonjs_react_commonjs2_react_amd_react_root_.createElement("rect", {
    x: 21.505,
    y: 49.353,
    width: 40,
    height: 40,
    rx: 4,
    transform: "rotate(-15 21.505 49.353)",
    fill: "#fff"
  }))), il_notes_rect || (il_notes_rect = /*#__PURE__*/external_commonjs_react_commonjs2_react_amd_react_root_.createElement("rect", {
    x: 29.889,
    y: 57.459,
    width: 28,
    height: 4,
    rx: 2,
    transform: "rotate(-15 29.889 57.46)",
    fill: "#BBBEC4"
  })), _rect2 || (_rect2 = /*#__PURE__*/external_commonjs_react_commonjs2_react_amd_react_root_.createElement("rect", {
    x: 31.959,
    y: 65.186,
    width: 28,
    height: 4,
    rx: 2,
    transform: "rotate(-15 31.96 65.186)",
    fill: "#BBBEC4"
  })), _rect3 || (_rect3 = /*#__PURE__*/external_commonjs_react_commonjs2_react_amd_react_root_.createElement("rect", {
    x: 34.03,
    y: 72.914,
    width: 16,
    height: 4,
    rx: 2,
    transform: "rotate(-15 34.03 72.914)",
    fill: "#BBBEC4"
  })), il_notes_g2 || (il_notes_g2 = /*#__PURE__*/external_commonjs_react_commonjs2_react_amd_react_root_.createElement("g", {
    filter: "url(#il-notes_svg__b)"
  }, /*#__PURE__*/external_commonjs_react_commonjs2_react_amd_react_root_.createElement("rect", {
    x: 40,
    y: 32,
    width: 56,
    height: 56,
    rx: 4,
    fill: "#fff"
  }))), _rect4 || (_rect4 = /*#__PURE__*/external_commonjs_react_commonjs2_react_amd_react_root_.createElement("rect", {
    x: 48,
    y: 46,
    width: 40,
    height: 6,
    rx: 3,
    fill: "#BBBEC4"
  })), _rect5 || (_rect5 = /*#__PURE__*/external_commonjs_react_commonjs2_react_amd_react_root_.createElement("rect", {
    x: 48,
    y: 57,
    width: 40,
    height: 6,
    rx: 3,
    fill: "#BBBEC4"
  })), _rect6 || (_rect6 = /*#__PURE__*/external_commonjs_react_commonjs2_react_amd_react_root_.createElement("rect", {
    x: 48,
    y: 68,
    width: 22,
    height: 6,
    rx: 3,
    fill: "#BBBEC4"
  })), il_notes_defs || (il_notes_defs = /*#__PURE__*/external_commonjs_react_commonjs2_react_amd_react_root_.createElement("defs", null, /*#__PURE__*/external_commonjs_react_commonjs2_react_amd_react_root_.createElement("filter", {
    id: "il-notes_svg__a",
    x: 10.403,
    y: 31.898,
    width: 71.194,
    height: 71.194,
    filterUnits: "userSpaceOnUse",
    colorInterpolationFilters: "sRGB"
  }, /*#__PURE__*/external_commonjs_react_commonjs2_react_amd_react_root_.createElement("feFlood", {
    floodOpacity: 0,
    result: "BackgroundImageFix"
  }), /*#__PURE__*/external_commonjs_react_commonjs2_react_amd_react_root_.createElement("feColorMatrix", {
    "in": "SourceAlpha",
    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
  }), /*#__PURE__*/external_commonjs_react_commonjs2_react_amd_react_root_.createElement("feOffset", {
    dy: 4
  }), /*#__PURE__*/external_commonjs_react_commonjs2_react_amd_react_root_.createElement("feGaussianBlur", {
    stdDeviation: 6
  }), /*#__PURE__*/external_commonjs_react_commonjs2_react_amd_react_root_.createElement("feColorMatrix", {
    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.16 0"
  }), /*#__PURE__*/external_commonjs_react_commonjs2_react_amd_react_root_.createElement("feBlend", {
    in2: "BackgroundImageFix",
    result: "effect1_dropShadow"
  }), /*#__PURE__*/external_commonjs_react_commonjs2_react_amd_react_root_.createElement("feBlend", {
    "in": "SourceGraphic",
    in2: "effect1_dropShadow",
    result: "shape"
  })), /*#__PURE__*/external_commonjs_react_commonjs2_react_amd_react_root_.createElement("filter", {
    id: "il-notes_svg__b",
    x: 28,
    y: 24,
    width: 80,
    height: 80,
    filterUnits: "userSpaceOnUse",
    colorInterpolationFilters: "sRGB"
  }, /*#__PURE__*/external_commonjs_react_commonjs2_react_amd_react_root_.createElement("feFlood", {
    floodOpacity: 0,
    result: "BackgroundImageFix"
  }), /*#__PURE__*/external_commonjs_react_commonjs2_react_amd_react_root_.createElement("feColorMatrix", {
    "in": "SourceAlpha",
    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
  }), /*#__PURE__*/external_commonjs_react_commonjs2_react_amd_react_root_.createElement("feOffset", {
    dy: 4
  }), /*#__PURE__*/external_commonjs_react_commonjs2_react_amd_react_root_.createElement("feGaussianBlur", {
    stdDeviation: 6
  }), /*#__PURE__*/external_commonjs_react_commonjs2_react_amd_react_root_.createElement("feColorMatrix", {
    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.16 0"
  }), /*#__PURE__*/external_commonjs_react_commonjs2_react_amd_react_root_.createElement("feBlend", {
    in2: "BackgroundImageFix",
    result: "effect1_dropShadow"
  }), /*#__PURE__*/external_commonjs_react_commonjs2_react_amd_react_root_.createElement("feBlend", {
    "in": "SourceGraphic",
    in2: "effect1_dropShadow",
    result: "shape"
  })))));
};

/* harmony default export */ const il_notes = (SvgIlNotes);
;// CONCATENATED MODULE: ./src/assets/icons/ic-info.svg
var ic_info_path;

function ic_info_extends() { ic_info_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return ic_info_extends.apply(this, arguments); }



var SvgIcInfo = function SvgIcInfo(props) {
  return /*#__PURE__*/external_commonjs_react_commonjs2_react_amd_react_root_.createElement("svg", ic_info_extends({
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), ic_info_path || (ic_info_path = /*#__PURE__*/external_commonjs_react_commonjs2_react_amd_react_root_.createElement("path", {
    d: "M9.167 7.5h1.666V5.833H9.167V7.5ZM10 16.667A6.675 6.675 0 0 1 3.333 10 6.676 6.676 0 0 1 10 3.333 6.675 6.675 0 0 1 16.667 10 6.675 6.675 0 0 1 10 16.667Zm0-15a8.333 8.333 0 1 0 0 16.666 8.333 8.333 0 0 0 0-16.666Zm-.833 12.5h1.666v-5H9.167v5Z"
  })));
};

/* harmony default export */ const ic_info = (SvgIcInfo);
;// CONCATENATED MODULE: ./src/assets/icons/ic-keyboard.svg
var ic_keyboard_path;

function ic_keyboard_extends() { ic_keyboard_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return ic_keyboard_extends.apply(this, arguments); }



var SvgIcKeyboard = function SvgIcKeyboard(props) {
  return /*#__PURE__*/external_commonjs_react_commonjs2_react_amd_react_root_.createElement("svg", ic_keyboard_extends({
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), ic_keyboard_path || (ic_keyboard_path = /*#__PURE__*/external_commonjs_react_commonjs2_react_amd_react_root_.createElement("path", {
    d: "M3.333 4.167a1.667 1.667 0 0 0-1.666 1.666v8.334a1.667 1.667 0 0 0 1.666 1.666h13.334a1.667 1.667 0 0 0 1.666-1.666V5.833a1.667 1.667 0 0 0-1.666-1.666H3.333Zm0 1.666h13.334v8.334H3.333V5.833Zm.834.834v1.666h1.666V6.667H4.167Zm2.5 0v1.666h1.666V6.667H6.667Zm2.5 0v1.666h1.666V6.667H9.167Zm2.5 0v1.666h1.666V6.667h-1.666Zm2.5 0v1.666h1.666V6.667h-1.666Zm-10 2.5v1.666h1.666V9.167H4.167Zm2.5 0v1.666h1.666V9.167H6.667Zm2.5 0v1.666h1.666V9.167H9.167Zm2.5 0v1.666h1.666V9.167h-1.666Zm2.5 0v1.666h1.666V9.167h-1.666Zm-7.5 2.5v1.666h6.666v-1.666H6.667Z"
  })));
};

/* harmony default export */ const ic_keyboard = (SvgIcKeyboard);
;// CONCATENATED MODULE: ./src/assets/icons/ic-link-off.svg
var ic_link_off_path;

function ic_link_off_extends() { ic_link_off_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return ic_link_off_extends.apply(this, arguments); }



var SvgIcLinkOff = function SvgIcLinkOff(props) {
  return /*#__PURE__*/external_commonjs_react_commonjs2_react_amd_react_root_.createElement("svg", ic_link_off_extends({
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), ic_link_off_path || (ic_link_off_path = /*#__PURE__*/external_commonjs_react_commonjs2_react_amd_react_root_.createElement("path", {
    d: "M14.167 5.833h-3.334v1.584h3.334A2.586 2.586 0 0 1 16.75 10c0 1.192-.817 2.192-1.925 2.5l1.217 1.2c1.358-.692 2.291-2.075 2.291-3.7a4.167 4.167 0 0 0-4.166-4.167Zm-.834 3.334h-1.825l1.667 1.666h.158V9.167ZM1.667 3.558 4.258 6.15a4.16 4.16 0 0 0-1.37 6.796 4.167 4.167 0 0 0 2.945 1.22h3.334v-1.583H5.833A2.586 2.586 0 0 1 3.25 10a2.58 2.58 0 0 1 2.3-2.558l1.725 1.725h-.608v1.666h2.275l1.891 1.892v1.442h1.442l3.342 3.333 1.05-1.05L2.725 2.5 1.667 3.558Z"
  })));
};

/* harmony default export */ const ic_link_off = (SvgIcLinkOff);
;// CONCATENATED MODULE: ./src/assets/icons/ic-list-bulleted.svg
var ic_list_bulleted_path;

function ic_list_bulleted_extends() { ic_list_bulleted_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return ic_list_bulleted_extends.apply(this, arguments); }



var SvgIcListBulleted = function SvgIcListBulleted(props) {
  return /*#__PURE__*/external_commonjs_react_commonjs2_react_amd_react_root_.createElement("svg", ic_list_bulleted_extends({
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), ic_list_bulleted_path || (ic_list_bulleted_path = /*#__PURE__*/external_commonjs_react_commonjs2_react_amd_react_root_.createElement("path", {
    d: "M5.833 4.167H17.5v1.666H5.833V4.167Zm0 6.666V9.167H17.5v1.666H5.833Zm-2.5-7.083a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5Zm0 5a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5Zm2.5 7.083v-1.666H17.5v1.666H5.833Zm-2.5-2.083a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5Z"
  })));
};

/* harmony default export */ const ic_list_bulleted = (SvgIcListBulleted);
;// CONCATENATED MODULE: ./src/assets/icons/ic-listed.svg
var ic_listed_path;

function ic_listed_extends() { ic_listed_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return ic_listed_extends.apply(this, arguments); }



var SvgIcListed = function SvgIcListed(props) {
  return /*#__PURE__*/external_commonjs_react_commonjs2_react_amd_react_root_.createElement("svg", ic_listed_extends({
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), ic_listed_path || (ic_listed_path = /*#__PURE__*/external_commonjs_react_commonjs2_react_amd_react_root_.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M4.286 3.6h11.428c.379 0 .686.307.686.686v11.428a.686.686 0 0 1-.686.686H4.286a.686.686 0 0 1-.686-.686V4.286c0-.379.307-.686.686-.686ZM2 4.286A2.286 2.286 0 0 1 4.286 2h11.428A2.286 2.286 0 0 1 18 4.286v11.428A2.286 2.286 0 0 1 15.714 18H4.286A2.286 2.286 0 0 1 2 15.714V4.286Zm7.805 2.03c.142-.045.365-.075.668-.09V6c-.463.023-1.123.034-1.98.034-.9 0-1.564-.011-1.993-.034v.226c.277.015.48.045.605.09a.394.394 0 0 1 .265.26c.05.128.076.335.076.622v5.604c0 .287-.025.494-.076.622a.393.393 0 0 1-.265.26c-.126.045-.328.075-.605.09V14c.908-.023 2.279-.034 4.112-.034 1.354 0 2.316.011 2.888.034a14.745 14.745 0 0 1-.088-1.785c0-.407.012-.739.037-.995h-.29c-.126.761-.399 1.371-.82 1.83-.411.46-.903.69-1.475.69h-.618c-.236 0-.408-.019-.517-.056a.36.36 0 0 1-.215-.215c-.042-.113-.063-.29-.063-.531v-5.74c0-.287.026-.494.076-.622a.43.43 0 0 1 .278-.26Z",
    fill: "currentColor"
  })));
};

/* harmony default export */ const ic_listed = (SvgIcListed);
;// CONCATENATED MODULE: ./src/assets/icons/ic-listed-filled.svg
var ic_listed_filled_path;

function ic_listed_filled_extends() { ic_listed_filled_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return ic_listed_filled_extends.apply(this, arguments); }



var SvgIcListedFilled = function SvgIcListedFilled(props) {
  return /*#__PURE__*/external_commonjs_react_commonjs2_react_amd_react_root_.createElement("svg", ic_listed_filled_extends({
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), ic_listed_filled_path || (ic_listed_filled_path = /*#__PURE__*/external_commonjs_react_commonjs2_react_amd_react_root_.createElement("path", {
    clipRule: "evenodd",
    d: "M2 4.286A2.286 2.286 0 0 1 4.286 2h11.428A2.286 2.286 0 0 1 18 4.286v11.428A2.286 2.286 0 0 1 15.714 18H4.286A2.286 2.286 0 0 1 2 15.714V4.286Zm7.805 2.03c.142-.045.365-.075.668-.09V6c-.463.023-1.123.034-1.98.034-.9 0-1.564-.011-1.993-.034v.226c.277.015.48.045.605.09a.394.394 0 0 1 .265.26c.05.128.076.335.076.622v5.604c0 .287-.025.494-.076.622a.393.393 0 0 1-.265.26c-.126.045-.328.075-.605.09V14c.908-.023 2.279-.034 4.112-.034 1.354 0 2.316.011 2.888.034a14.745 14.745 0 0 1-.088-1.785c0-.407.012-.739.037-.995h-.29c-.126.761-.399 1.371-.82 1.83-.411.46-.903.69-1.475.69h-.618c-.236 0-.408-.019-.517-.056a.36.36 0 0 1-.215-.215c-.042-.113-.063-.29-.063-.531v-5.74c0-.287.026-.494.076-.622a.43.43 0 0 1 .278-.26Z"
  })));
};

/* harmony default export */ const ic_listed_filled = (SvgIcListedFilled);
;// CONCATENATED MODULE: ./src/assets/icons/ic-lock-filled.svg
var ic_lock_filled_path;

function ic_lock_filled_extends() { ic_lock_filled_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return ic_lock_filled_extends.apply(this, arguments); }



var SvgIcLockFilled = function SvgIcLockFilled(props) {
  return /*#__PURE__*/external_commonjs_react_commonjs2_react_amd_react_root_.createElement("svg", ic_lock_filled_extends({
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), ic_lock_filled_path || (ic_lock_filled_path = /*#__PURE__*/external_commonjs_react_commonjs2_react_amd_react_root_.createElement("path", {
    d: "M10 14.167a1.666 1.666 0 1 0 0-3.333 1.666 1.666 0 0 0 0 3.333Zm5-7.5a1.667 1.667 0 0 1 1.667 1.666v8.334A1.667 1.667 0 0 1 15 18.333H5a1.667 1.667 0 0 1-1.667-1.666V8.333c0-.925.75-1.666 1.667-1.666h.833V5a4.167 4.167 0 0 1 8.334 0v1.667H15ZM10 2.5A2.5 2.5 0 0 0 7.5 5v1.667h5V5A2.5 2.5 0 0 0 10 2.5Z"
  })));
};

/* harmony default export */ const ic_lock_filled = (SvgIcLockFilled);
;// CONCATENATED MODULE: ./src/assets/icons/ic-lock.svg
var ic_lock_path;

function ic_lock_extends() { ic_lock_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return ic_lock_extends.apply(this, arguments); }



var SvgIcLock = function SvgIcLock(props) {
  return /*#__PURE__*/external_commonjs_react_commonjs2_react_amd_react_root_.createElement("svg", ic_lock_extends({
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), ic_lock_path || (ic_lock_path = /*#__PURE__*/external_commonjs_react_commonjs2_react_amd_react_root_.createElement("path", {
    d: "M10 14.167c-.925 0-1.666-.75-1.666-1.667A1.667 1.667 0 1 1 10 14.167Zm5 2.5V8.333H5v8.334h10Zm0-10a1.667 1.667 0 0 1 1.667 1.666v8.334A1.667 1.667 0 0 1 15 18.333H5c-.925 0-1.667-.75-1.667-1.666V8.333A1.66 1.66 0 0 1 5 6.667h.833V5a4.167 4.167 0 1 1 8.334 0v1.667H15ZM10 2.5A2.5 2.5 0 0 0 7.5 5v1.667h5V5A2.5 2.5 0 0 0 10 2.5Z"
  })));
};

/* harmony default export */ const ic_lock = (SvgIcLock);
;// CONCATENATED MODULE: ./src/assets/icons/ic-markdown.svg
var ic_markdown_path;

function ic_markdown_extends() { ic_markdown_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return ic_markdown_extends.apply(this, arguments); }



var SvgIcMarkdown = function SvgIcMarkdown(props) {
  return /*#__PURE__*/external_commonjs_react_commonjs2_react_amd_react_root_.createElement("svg", ic_markdown_extends({
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), ic_markdown_path || (ic_markdown_path = /*#__PURE__*/external_commonjs_react_commonjs2_react_amd_react_root_.createElement("path", {
    d: "M12.5 3.333V5H15v10h-2.5v1.667h4.167V3.333H12.5Zm-9.167 0v13.334H7.5V15H5V5h2.5V3.333H3.333Z"
  })));
};

/* harmony default export */ const ic_markdown = (SvgIcMarkdown);
;// CONCATENATED MODULE: ./src/assets/icons/ic-menu-arrow-down-alt.svg
var ic_menu_arrow_down_alt_path;

function ic_menu_arrow_down_alt_extends() { ic_menu_arrow_down_alt_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return ic_menu_arrow_down_alt_extends.apply(this, arguments); }



var SvgIcMenuArrowDownAlt = function SvgIcMenuArrowDownAlt(props) {
  return /*#__PURE__*/external_commonjs_react_commonjs2_react_amd_react_root_.createElement("svg", ic_menu_arrow_down_alt_extends({
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), ic_menu_arrow_down_alt_path || (ic_menu_arrow_down_alt_path = /*#__PURE__*/external_commonjs_react_commonjs2_react_amd_react_root_.createElement("path", {
    d: "M5.833 8.333 10 12.5l4.167-4.167H5.833Z"
  })));
};

/* harmony default export */ const ic_menu_arrow_down_alt = (SvgIcMenuArrowDownAlt);
;// CONCATENATED MODULE: ./src/assets/icons/ic-menu-arrow-down.svg
var ic_menu_arrow_down_path;

function ic_menu_arrow_down_extends() { ic_menu_arrow_down_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return ic_menu_arrow_down_extends.apply(this, arguments); }



var SvgIcMenuArrowDown = function SvgIcMenuArrowDown(props) {
  return /*#__PURE__*/external_commonjs_react_commonjs2_react_amd_react_root_.createElement("svg", ic_menu_arrow_down_extends({
    viewBox: "0 0 8 4",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), ic_menu_arrow_down_path || (ic_menu_arrow_down_path = /*#__PURE__*/external_commonjs_react_commonjs2_react_amd_react_root_.createElement("path", {
    d: "M.667.667 4 4 7.333.667H.667Z"
  })));
};

/* harmony default export */ const ic_menu_arrow_down = (SvgIcMenuArrowDown);
;// CONCATENATED MODULE: ./src/assets/icons/ic-menu-arrow-right.svg
var ic_menu_arrow_right_path;

function ic_menu_arrow_right_extends() { ic_menu_arrow_right_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return ic_menu_arrow_right_extends.apply(this, arguments); }



var SvgIcMenuArrowRight = function SvgIcMenuArrowRight(props) {
  return /*#__PURE__*/external_commonjs_react_commonjs2_react_amd_react_root_.createElement("svg", ic_menu_arrow_right_extends({
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), ic_menu_arrow_right_path || (ic_menu_arrow_right_path = /*#__PURE__*/external_commonjs_react_commonjs2_react_amd_react_root_.createElement("path", {
    d: "m7.917 14.583 4.166-4.166L7.917 6.25v8.333Z"
  })));
};

/* harmony default export */ const ic_menu_arrow_right = (SvgIcMenuArrowRight);
;// CONCATENATED MODULE: ./src/assets/icons/ic-menu-close.svg
var ic_menu_close_path;

function ic_menu_close_extends() { ic_menu_close_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return ic_menu_close_extends.apply(this, arguments); }



var SvgIcMenuClose = function SvgIcMenuClose(props) {
  return /*#__PURE__*/external_commonjs_react_commonjs2_react_amd_react_root_.createElement("svg", ic_menu_close_extends({
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), ic_menu_close_path || (ic_menu_close_path = /*#__PURE__*/external_commonjs_react_commonjs2_react_amd_react_root_.createElement("path", {
    d: "m17.5 13.008-1.175 1.159L12.15 10l4.175-4.167L17.5 6.992 14.533 10l2.967 3.008ZM2.5 5h10.833v1.667H2.5V5Zm0 5.833V9.167h8.333v1.666H2.5ZM2.5 15v-1.667h10.833V15H2.5Z"
  })));
};

/* harmony default export */ const ic_menu_close = (SvgIcMenuClose);
;// CONCATENATED MODULE: ./src/assets/icons/ic-more.svg
var ic_more_path;

function ic_more_extends() { ic_more_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return ic_more_extends.apply(this, arguments); }



var SvgIcMore = function SvgIcMore(props) {
  return /*#__PURE__*/external_commonjs_react_commonjs2_react_amd_react_root_.createElement("svg", ic_more_extends({
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), ic_more_path || (ic_more_path = /*#__PURE__*/external_commonjs_react_commonjs2_react_amd_react_root_.createElement("path", {
    d: "M13.333 10a1.666 1.666 0 1 1 3.333 0 1.666 1.666 0 0 1-3.333 0Zm-5 0a1.667 1.667 0 1 1 3.334 0 1.667 1.667 0 0 1-3.334 0Zm-5 0a1.667 1.667 0 1 1 3.334 0 1.667 1.667 0 0 1-3.334 0Z"
  })));
};

/* harmony default export */ const ic_more = (SvgIcMore);
;// CONCATENATED MODULE: ./src/assets/icons/ic-notes.svg
var ic_notes_path;

function ic_notes_extends() { ic_notes_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return ic_notes_extends.apply(this, arguments); }



var SvgIcNotes = function SvgIcNotes(props) {
  return /*#__PURE__*/external_commonjs_react_commonjs2_react_amd_react_root_.createElement("svg", ic_notes_extends({
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), ic_notes_path || (ic_notes_path = /*#__PURE__*/external_commonjs_react_commonjs2_react_amd_react_root_.createElement("path", {
    d: "M4.556 3A1.55 1.55 0 0 0 3 4.556v10.888A1.55 1.55 0 0 0 4.556 17h10.888A1.55 1.55 0 0 0 17 15.444V4.556A1.55 1.55 0 0 0 15.444 3H4.556Zm0 1.556h10.888v10.888H4.556V4.556ZM6.11 6.11v1.556h7.778V6.11H6.11Zm0 3.111v1.556h7.778V9.222H6.11Zm0 3.111v1.556h5.445v-1.556H6.11Z"
  })));
};

/* harmony default export */ const ic_notes = (SvgIcNotes);
;// CONCATENATED MODULE: ./src/assets/icons/ic-open-in.svg
var ic_open_in_path;

function ic_open_in_extends() { ic_open_in_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return ic_open_in_extends.apply(this, arguments); }



var SvgIcOpenIn = function SvgIcOpenIn(props) {
  return /*#__PURE__*/external_commonjs_react_commonjs2_react_amd_react_root_.createElement("svg", ic_open_in_extends({
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), ic_open_in_path || (ic_open_in_path = /*#__PURE__*/external_commonjs_react_commonjs2_react_amd_react_root_.createElement("path", {
    d: "M11.667 2.5v1.667h2.991l-8.191 8.191 1.175 1.175 8.191-8.191v2.991H17.5V2.5h-5.833Zm4.166 13.333H4.167V4.167H10V2.5H4.167c-.925 0-1.667.75-1.667 1.667v11.666A1.666 1.666 0 0 0 4.167 17.5h11.666a1.666 1.666 0 0 0 1.667-1.667V10h-1.667v5.833Z"
  })));
};

/* harmony default export */ const ic_open_in = (SvgIcOpenIn);
;// CONCATENATED MODULE: ./src/assets/icons/ic-textbox-password.svg
var ic_textbox_password_path;

function ic_textbox_password_extends() { ic_textbox_password_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return ic_textbox_password_extends.apply(this, arguments); }



var SvgIcTextboxPassword = function SvgIcTextboxPassword(props) {
  return /*#__PURE__*/external_commonjs_react_commonjs2_react_amd_react_root_.createElement("svg", ic_textbox_password_extends({
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), ic_textbox_password_path || (ic_textbox_password_path = /*#__PURE__*/external_commonjs_react_commonjs2_react_amd_react_root_.createElement("path", {
    d: "M16.2 7.8h4.2v8.4h-4.2v1.68a.84.84 0 0 0 .84.84h1.68v1.68h-2.1c-.462 0-1.26-.378-1.26-.84 0 .462-.798.84-1.26.84H12v-1.68h1.68a.84.84 0 0 0 .84-.84V6.12a.84.84 0 0 0-.84-.84H12V3.6h2.1c.462 0 1.26.378 1.26.84 0-.462.798-.84 1.26-.84h2.1v1.68h-1.68a.84.84 0 0 0-.84.84V7.8Zm-12.6 0h9.24v1.68H5.28v5.04h7.56v1.68H3.6V7.8Zm15.12 6.72V9.48H16.2v5.04h2.52ZM9.06 12a1.26 1.26 0 1 0-2.52 0 1.26 1.26 0 0 0 2.52 0Zm3.78-.932a1.254 1.254 0 0 0-1.78.092 1.238 1.238 0 0 0 .1 1.772 1.24 1.24 0 0 0 1.68 0v-1.864Z"
  })));
};

/* harmony default export */ const ic_textbox_password = (SvgIcTextboxPassword);
;// CONCATENATED MODULE: ./src/assets/icons/ic-pencil-off.svg
var ic_pencil_off_path;

function ic_pencil_off_extends() { ic_pencil_off_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return ic_pencil_off_extends.apply(this, arguments); }



var SvgIcPencilOff = function SvgIcPencilOff(props) {
  return /*#__PURE__*/external_commonjs_react_commonjs2_react_amd_react_root_.createElement("svg", ic_pencil_off_extends({
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), ic_pencil_off_path || (ic_pencil_off_path = /*#__PURE__*/external_commonjs_react_commonjs2_react_amd_react_root_.createElement("path", {
    d: "m9.25 7.9 3-3 2.85 2.85-3 3-1.05-1.05L13 7.675 12.325 7l-1.95 1.95L9.25 7.9Zm8.025-3.45L15.55 2.725a.81.81 0 0 0-.525-.225.81.81 0 0 0-.525.225l-1.35 1.35L16 6.925 17.275 5.5c.3-.225.3-.75 0-1.05ZM16 16.525l-.975.975-4.875-4.875L6.85 16H4v-2.85l3.375-3.375-4.875-4.8L3.475 4 16 16.525Zm-6.9-4.95-.675-.675L5.5 13.825v.675h.675L9.1 11.575Z"
  })));
};

/* harmony default export */ const ic_pencil_off = (SvgIcPencilOff);
;// CONCATENATED MODULE: ./src/assets/icons/ic-pencil.svg
var ic_pencil_path;

function ic_pencil_extends() { ic_pencil_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return ic_pencil_extends.apply(this, arguments); }



var SvgIcPencil = function SvgIcPencil(props) {
  return /*#__PURE__*/external_commonjs_react_commonjs2_react_amd_react_root_.createElement("svg", ic_pencil_extends({
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), ic_pencil_path || (ic_pencil_path = /*#__PURE__*/external_commonjs_react_commonjs2_react_amd_react_root_.createElement("path", {
    d: "m11.717 7.5.783.783-7.567 7.55h-.766v-.766l7.55-7.567Zm3-5a.834.834 0 0 0-.584.242l-1.525 1.525 3.125 3.125 1.525-1.525c.325-.325.325-.867 0-1.175l-1.95-1.95a.818.818 0 0 0-.591-.242Zm-3 2.658L2.5 14.375V17.5h3.125l9.217-9.217-3.125-3.125Z"
  })));
};

/* harmony default export */ const ic_pencil = (SvgIcPencil);
;// CONCATENATED MODULE: ./src/assets/icons/ic-pencil-filled.svg
var ic_pencil_filled_path;

function ic_pencil_filled_extends() { ic_pencil_filled_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return ic_pencil_filled_extends.apply(this, arguments); }



var SvgIcPencilFilled = function SvgIcPencilFilled(props) {
  return /*#__PURE__*/external_commonjs_react_commonjs2_react_amd_react_root_.createElement("svg", ic_pencil_filled_extends({
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), ic_pencil_filled_path || (ic_pencil_filled_path = /*#__PURE__*/external_commonjs_react_commonjs2_react_amd_react_root_.createElement("path", {
    d: "M17.258 5.867c.325-.325.325-.867 0-1.175l-1.95-1.95c-.308-.325-.85-.325-1.175 0L12.6 4.267l3.125 3.125 1.533-1.525ZM2.5 14.375V17.5h3.125l9.217-9.225-3.125-3.125L2.5 14.375Z"
  })));
};

/* harmony default export */ const ic_pencil_filled = (SvgIcPencilFilled);
;// CONCATENATED MODULE: ./src/assets/icons/ic-pin-filled.svg
var ic_pin_filled_path;

function ic_pin_filled_extends() { ic_pin_filled_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return ic_pin_filled_extends.apply(this, arguments); }



var SvgIcPinFilled = function SvgIcPinFilled(props) {
  return /*#__PURE__*/external_commonjs_react_commonjs2_react_amd_react_root_.createElement("svg", ic_pin_filled_extends({
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), ic_pin_filled_path || (ic_pin_filled_path = /*#__PURE__*/external_commonjs_react_commonjs2_react_amd_react_root_.createElement("path", {
    d: "M13 10V4h.75V2.5h-7.5V4H7v6l-2.5 1.5V13h4.9v4.5h1.2V13h4.9v-1.5L13 10Z"
  })));
};

/* harmony default export */ const ic_pin_filled = (SvgIcPinFilled);
;// CONCATENATED MODULE: ./src/assets/icons/ic-pin.svg
var ic_pin_path;

function ic_pin_extends() { ic_pin_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return ic_pin_extends.apply(this, arguments); }



var SvgIcPin = function SvgIcPin(props) {
  return /*#__PURE__*/external_commonjs_react_commonjs2_react_amd_react_root_.createElement("svg", ic_pin_extends({
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), ic_pin_path || (ic_pin_path = /*#__PURE__*/external_commonjs_react_commonjs2_react_amd_react_root_.createElement("path", {
    d: "M13 10V4h.75V2.5h-7.5V4H7v6l-2.5 1.5V13h4.9v4.5h1.2V13h4.9v-1.5L13 10Zm-6.4 1.5 1.9-.9V4h3v6.6l1.9.9H6.6Z"
  })));
};

/* harmony default export */ const ic_pin = (SvgIcPin);
;// CONCATENATED MODULE: ./src/assets/icons/ic-text-paragraph.svg
var ic_text_paragraph_path;

function ic_text_paragraph_extends() { ic_text_paragraph_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return ic_text_paragraph_extends.apply(this, arguments); }



var SvgIcTextParagraph = function SvgIcTextParagraph(props) {
  return /*#__PURE__*/external_commonjs_react_commonjs2_react_amd_react_root_.createElement("svg", ic_text_paragraph_extends({
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), ic_text_paragraph_path || (ic_text_paragraph_path = /*#__PURE__*/external_commonjs_react_commonjs2_react_amd_react_root_.createElement("path", {
    d: "M17 5v1.667H3V5h14ZM3 15h7v-1.667H3V15Zm0-4.167h14V9.167H3v1.666Z"
  })));
};

/* harmony default export */ const ic_text_paragraph = (SvgIcTextParagraph);
;// CONCATENATED MODULE: ./src/assets/icons/ic-premium-feature.svg
var ic_premium_feature_rect, ic_premium_feature_path;

function ic_premium_feature_extends() { ic_premium_feature_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return ic_premium_feature_extends.apply(this, arguments); }



var SvgIcPremiumFeature = function SvgIcPremiumFeature(props) {
  return /*#__PURE__*/external_commonjs_react_commonjs2_react_amd_react_root_.createElement("svg", ic_premium_feature_extends({
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), ic_premium_feature_rect || (ic_premium_feature_rect = /*#__PURE__*/external_commonjs_react_commonjs2_react_amd_react_root_.createElement("rect", {
    opacity: 0.36,
    x: 1,
    y: 1,
    width: 18,
    height: 18,
    rx: 9,
    fill: "#BBBEC4"
  })), ic_premium_feature_path || (ic_premium_feature_path = /*#__PURE__*/external_commonjs_react_commonjs2_react_amd_react_root_.createElement("path", {
    d: "M6.667 12H8c0 .72.913 1.333 2 1.333 1.086 0 2-.613 2-1.333 0-.733-.694-1-2.16-1.353C8.427 10.293 6.667 9.853 6.667 8c0-1.193.98-2.207 2.333-2.547V4h2v1.453c1.353.34 2.333 1.354 2.333 2.547H12c0-.72-.914-1.333-2-1.333-1.087 0-2 .613-2 1.333 0 .733.693 1 2.16 1.353 1.413.354 3.173.794 3.173 2.647 0 1.193-.98 2.207-2.333 2.547V16H9v-1.453c-1.354-.34-2.333-1.354-2.333-2.547Z",
    fill: "#72767E"
  })));
};

/* harmony default export */ const ic_premium_feature = (SvgIcPremiumFeature);
;// CONCATENATED MODULE: ./src/assets/icons/il-premium.svg
var il_premium_circle, il_premium_g, il_premium_defs;

function il_premium_extends() { il_premium_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return il_premium_extends.apply(this, arguments); }



var SvgIlPremium = function SvgIlPremium(props) {
  return /*#__PURE__*/external_commonjs_react_commonjs2_react_amd_react_root_.createElement("svg", il_premium_extends({
    width: 120,
    height: 120,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), il_premium_circle || (il_premium_circle = /*#__PURE__*/external_commonjs_react_commonjs2_react_amd_react_root_.createElement("circle", {
    cx: 60,
    cy: 60,
    r: 60,
    fill: "#F4F5F7"
  })), il_premium_g || (il_premium_g = /*#__PURE__*/external_commonjs_react_commonjs2_react_amd_react_root_.createElement("g", {
    filter: "url(#il-premium_svg__a)"
  }, /*#__PURE__*/external_commonjs_react_commonjs2_react_amd_react_root_.createElement("rect", {
    x: 31,
    y: 31,
    width: 58,
    height: 58,
    rx: 4,
    fill: "#fff"
  }), /*#__PURE__*/external_commonjs_react_commonjs2_react_amd_react_root_.createElement("path", {
    d: "M50 66h4c0 2.16 2.74 4 6 4s6-1.84 6-4c0-2.2-2.08-3-6.48-4.06C55.28 60.88 50 59.56 50 54c0-3.58 2.94-6.62 7-7.64V42h6v4.36c4.06 1.02 7 4.06 7 7.64h-4c0-2.16-2.74-4-6-4s-6 1.84-6 4c0 2.2 2.08 3 6.48 4.06C64.72 59.12 70 60.44 70 66c0 3.58-2.94 6.62-7 7.64V78h-6v-4.36c-4.06-1.02-7-4.06-7-7.64Z",
    fill: "#BBBEC4"
  }))), il_premium_defs || (il_premium_defs = /*#__PURE__*/external_commonjs_react_commonjs2_react_amd_react_root_.createElement("defs", null, /*#__PURE__*/external_commonjs_react_commonjs2_react_amd_react_root_.createElement("filter", {
    id: "il-premium_svg__a",
    x: 19,
    y: 23,
    width: 82,
    height: 82,
    filterUnits: "userSpaceOnUse",
    colorInterpolationFilters: "sRGB"
  }, /*#__PURE__*/external_commonjs_react_commonjs2_react_amd_react_root_.createElement("feFlood", {
    floodOpacity: 0,
    result: "BackgroundImageFix"
  }), /*#__PURE__*/external_commonjs_react_commonjs2_react_amd_react_root_.createElement("feColorMatrix", {
    "in": "SourceAlpha",
    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
    result: "hardAlpha"
  }), /*#__PURE__*/external_commonjs_react_commonjs2_react_amd_react_root_.createElement("feOffset", {
    dy: 4
  }), /*#__PURE__*/external_commonjs_react_commonjs2_react_amd_react_root_.createElement("feGaussianBlur", {
    stdDeviation: 6
  }), /*#__PURE__*/external_commonjs_react_commonjs2_react_amd_react_root_.createElement("feColorMatrix", {
    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.16 0"
  }), /*#__PURE__*/external_commonjs_react_commonjs2_react_amd_react_root_.createElement("feBlend", {
    in2: "BackgroundImageFix",
    result: "effect1_dropShadow_5_1809"
  }), /*#__PURE__*/external_commonjs_react_commonjs2_react_amd_react_root_.createElement("feBlend", {
    "in": "SourceGraphic",
    in2: "effect1_dropShadow_5_1809",
    result: "shape"
  })))));
};

/* harmony default export */ const il_premium = (SvgIlPremium);
;// CONCATENATED MODULE: ./src/assets/icons/ic-redo.svg
var ic_redo_path;

function ic_redo_extends() { ic_redo_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return ic_redo_extends.apply(this, arguments); }



var SvgIcRedo = function SvgIcRedo(props) {
  return /*#__PURE__*/external_commonjs_react_commonjs2_react_amd_react_root_.createElement("svg", ic_redo_extends({
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), ic_redo_path || (ic_redo_path = /*#__PURE__*/external_commonjs_react_commonjs2_react_amd_react_root_.createElement("path", {
    d: "M14.537 9.4a7.306 7.306 0 0 0-4.722-1.733c-3.182 0-5.87 2.02-6.815 4.813l1.615.52c.718-2.127 2.771-3.667 5.2-3.667 1.335 0 2.553.48 3.504 1.254L10.842 13H17V7l-2.463 2.4Z"
  })));
};

/* harmony default export */ const ic_redo = (SvgIcRedo);
;// CONCATENATED MODULE: ./src/assets/icons/ic-restore.svg
var ic_restore_path;

function ic_restore_extends() { ic_restore_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return ic_restore_extends.apply(this, arguments); }



var SvgIcRestore = function SvgIcRestore(props) {
  return /*#__PURE__*/external_commonjs_react_commonjs2_react_amd_react_root_.createElement("svg", ic_restore_extends({
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), ic_restore_path || (ic_restore_path = /*#__PURE__*/external_commonjs_react_commonjs2_react_amd_react_root_.createElement("path", {
    d: "M10 2.5A7.5 7.5 0 0 0 2.5 10H0l3.333 3.333L6.667 10h-2.5A5.833 5.833 0 1 1 10 15.833a5.946 5.946 0 0 1-3.383-1.083l-1.2 1.2A7.595 7.595 0 0 0 10 17.5a7.5 7.5 0 0 0 0-15Zm1.667 7.5a1.667 1.667 0 1 0-3.333 0 1.667 1.667 0 0 0 3.333 0Z"
  })));
};

/* harmony default export */ const ic_restore = (SvgIcRestore);
;// CONCATENATED MODULE: ./src/assets/icons/ic-text-rich.svg
var ic_text_rich_path;

function ic_text_rich_extends() { ic_text_rich_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return ic_text_rich_extends.apply(this, arguments); }



var SvgIcTextRich = function SvgIcTextRich(props) {
  return /*#__PURE__*/external_commonjs_react_commonjs2_react_amd_react_root_.createElement("svg", ic_text_rich_extends({
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), ic_text_rich_path || (ic_text_rich_path = /*#__PURE__*/external_commonjs_react_commonjs2_react_amd_react_root_.createElement("path", {
    d: "M2.5 7.5h5v5h-5v-5Zm0-3.333h15v1.666h-15V4.166Zm15 3.333v1.666H9.167V7.5H17.5Zm0 3.333V12.5H9.167v-1.667H17.5Zm-15 3.333h11.667v1.667H2.5v-1.667Z"
  })));
};

/* harmony default export */ const ic_text_rich = (SvgIcTextRich);
;// CONCATENATED MODULE: ./src/assets/icons/ic-security.svg
var ic_security_path;

function ic_security_extends() { ic_security_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return ic_security_extends.apply(this, arguments); }



var SvgIcSecurity = function SvgIcSecurity(props) {
  return /*#__PURE__*/external_commonjs_react_commonjs2_react_amd_react_root_.createElement("svg", ic_security_extends({
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), ic_security_path || (ic_security_path = /*#__PURE__*/external_commonjs_react_commonjs2_react_amd_react_root_.createElement("path", {
    d: "M10 10h5.444c-.412 2.99-2.55 5.658-5.444 6.487V10H4.556V5.855L10 3.593V10Zm0-8L3 4.91v4.363c0 4.036 2.987 7.803 7 8.727 4.013-.924 7-4.69 7-8.727V4.909L10 2Z"
  })));
};

/* harmony default export */ const ic_security = (SvgIcSecurity);
;// CONCATENATED MODULE: ./src/assets/icons/ic-server.svg
var ic_server_path;

function ic_server_extends() { ic_server_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return ic_server_extends.apply(this, arguments); }



var SvgIcServer = function SvgIcServer(props) {
  return /*#__PURE__*/external_commonjs_react_commonjs2_react_amd_react_root_.createElement("svg", ic_server_extends({
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), ic_server_path || (ic_server_path = /*#__PURE__*/external_commonjs_react_commonjs2_react_amd_react_root_.createElement("path", {
    d: "M10.833 15.833h.834a.833.833 0 0 1 .833.834h5.833v1.666H12.5a.833.833 0 0 1-.833.834H8.333a.833.833 0 0 1-.833-.834H1.667v-1.666H7.5a.833.833 0 0 1 .833-.834h.834v-1.666H3.333a.833.833 0 0 1-.833-.834V10a.833.833 0 0 1 .833-.833h13.334A.833.833 0 0 1 17.5 10v3.333a.833.833 0 0 1-.833.834h-5.834v1.666ZM3.333 2.5h13.334a.833.833 0 0 1 .833.833v3.334a.833.833 0 0 1-.833.833H3.333a.833.833 0 0 1-.833-.833V3.333a.833.833 0 0 1 .833-.833ZM7.5 5.833h.833V4.167H7.5v1.666Zm0 6.667h.833v-1.667H7.5V12.5ZM4.167 4.167v1.666h1.666V4.167H4.167Zm0 6.666V12.5h1.666v-1.667H4.167Z"
  })));
};

/* harmony default export */ const ic_server = (SvgIcServer);
;// CONCATENATED MODULE: ./src/assets/icons/ic-settings.svg
var ic_settings_path;

function ic_settings_extends() { ic_settings_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return ic_settings_extends.apply(this, arguments); }



var SvgIcSettings = function SvgIcSettings(props) {
  return /*#__PURE__*/external_commonjs_react_commonjs2_react_amd_react_root_.createElement("svg", ic_settings_extends({
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), ic_settings_path || (ic_settings_path = /*#__PURE__*/external_commonjs_react_commonjs2_react_amd_react_root_.createElement("path", {
    d: "M10 6.667a3.333 3.333 0 1 1 0 6.666 3.333 3.333 0 0 1 0-6.666Zm0 1.666a1.667 1.667 0 1 0 0 3.334 1.667 1.667 0 0 0 0-3.334Zm-1.667 10a.421.421 0 0 1-.416-.35l-.309-2.208A5.79 5.79 0 0 1 6.2 14.95l-2.075.842a.419.419 0 0 1-.508-.184L1.95 12.725a.41.41 0 0 1 .1-.533l1.758-1.384L3.75 10l.058-.833L2.05 7.808a.41.41 0 0 1-.1-.533l1.667-2.883a.41.41 0 0 1 .508-.184l2.075.834a6.04 6.04 0 0 1 1.408-.817l.309-2.208c.033-.2.208-.35.416-.35h3.334c.208 0 .383.15.416.35l.309 2.208a6.04 6.04 0 0 1 1.408.817l2.075-.834a.41.41 0 0 1 .508.184l1.667 2.883a.41.41 0 0 1-.1.533l-1.758 1.359.058.833-.058.833 1.758 1.359c.158.125.208.35.1.533l-1.667 2.883a.41.41 0 0 1-.508.184l-2.075-.834a6.042 6.042 0 0 1-1.408.817l-.309 2.208a.421.421 0 0 1-.416.35H8.333Zm1.042-15-.308 2.175c-1 .209-1.884.742-2.525 1.484l-2.009-.867-.625 1.083L5.667 8.5a4.625 4.625 0 0 0 0 3L3.9 12.8l.625 1.083 2.025-.866a4.536 4.536 0 0 0 2.508 1.466l.309 2.184h1.266l.309-2.175a4.598 4.598 0 0 0 2.508-1.475l2.025.866.625-1.083-1.767-1.292a4.65 4.65 0 0 0 0-3.008l1.759-1.292-.625-1.083-2.009.867a4.517 4.517 0 0 0-2.525-1.475l-.308-2.184h-1.25Z"
  })));
};

/* harmony default export */ const ic_settings = (SvgIcSettings);
;// CONCATENATED MODULE: ./src/assets/icons/ic-signin.svg
var ic_signin_path;

function ic_signin_extends() { ic_signin_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return ic_signin_extends.apply(this, arguments); }



var SvgIcSignin = function SvgIcSignin(props) {
  return /*#__PURE__*/external_commonjs_react_commonjs2_react_amd_react_root_.createElement("svg", ic_signin_extends({
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), ic_signin_path || (ic_signin_path = /*#__PURE__*/external_commonjs_react_commonjs2_react_amd_react_root_.createElement("path", {
    d: "M15.833 2.5H4.167A1.66 1.66 0 0 0 2.5 4.167V7.5h1.667V4.167h11.666v11.666H4.167V12.5H2.5v3.333A1.666 1.666 0 0 0 4.167 17.5h11.666a1.666 1.666 0 0 0 1.667-1.667V4.167c0-.925-.75-1.667-1.667-1.667ZM8.4 12.983l1.183 1.184L13.75 10 9.583 5.833 8.4 7.008l2.158 2.159H2.5v1.666h8.058L8.4 12.983Z"
  })));
};

/* harmony default export */ const ic_signin = (SvgIcSignin);
;// CONCATENATED MODULE: ./src/assets/icons/ic-signout.svg
var ic_signout_path;

function ic_signout_extends() { ic_signout_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return ic_signout_extends.apply(this, arguments); }



var SvgIcSignout = function SvgIcSignout(props) {
  return /*#__PURE__*/external_commonjs_react_commonjs2_react_amd_react_root_.createElement("svg", ic_signout_extends({
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), ic_signout_path || (ic_signout_path = /*#__PURE__*/external_commonjs_react_commonjs2_react_amd_react_root_.createElement("path", {
    d: "m11.733 12.992 2.159-2.159H5.833V9.167h8.059l-2.159-2.159 1.184-1.175L17.083 10l-4.166 4.167-1.184-1.175Zm4.1-10.492A1.666 1.666 0 0 1 17.5 4.167v3.891l-1.667-1.666V4.167H4.167v11.666h11.666v-2.225l1.667-1.666v3.891a1.666 1.666 0 0 1-1.667 1.667H4.167c-.925 0-1.667-.75-1.667-1.667V4.167A1.66 1.66 0 0 1 4.167 2.5h11.666Z"
  })));
};

/* harmony default export */ const ic_signout = (SvgIcSignout);
;// CONCATENATED MODULE: ./src/assets/icons/ic-standard-notes.svg
var ic_standard_notes_path;

function ic_standard_notes_extends() { ic_standard_notes_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return ic_standard_notes_extends.apply(this, arguments); }



var SvgIcStandardNotes = function SvgIcStandardNotes(props) {
  return /*#__PURE__*/external_commonjs_react_commonjs2_react_amd_react_root_.createElement("svg", ic_standard_notes_extends({
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), ic_standard_notes_path || (ic_standard_notes_path = /*#__PURE__*/external_commonjs_react_commonjs2_react_amd_react_root_.createElement("path", {
    clipRule: "evenodd",
    d: "M4.286 3.6h11.428c.379 0 .686.307.686.686v11.428a.686.686 0 0 1-.686.686H4.286a.686.686 0 0 1-.686-.686V4.286c0-.379.307-.686.686-.686ZM2 4.286A2.286 2.286 0 0 1 4.286 2h11.428A2.286 2.286 0 0 1 18 4.286v11.428A2.286 2.286 0 0 1 15.714 18H4.286A2.286 2.286 0 0 1 2 15.714V4.286Zm9.937 5.254v4.293h1.601V9.54c0-1.94-1.613-3.512-3.602-3.512-1.99 0-3.603 1.572-3.603 3.512v4.293h1.602V9.54c0-1.078.896-1.951 2-1.951 1.106 0 2.002.873 2.002 1.951Z"
  })));
};

/* harmony default export */ const ic_standard_notes = (SvgIcStandardNotes);
;// CONCATENATED MODULE: ./src/assets/icons/ic-standard-notes-2.svg
var ic_standard_notes_2_path, ic_standard_notes_2_path2;

function ic_standard_notes_2_extends() { ic_standard_notes_2_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return ic_standard_notes_2_extends.apply(this, arguments); }



var SvgIcStandardNotes2 = function SvgIcStandardNotes2(props) {
  return /*#__PURE__*/external_commonjs_react_commonjs2_react_amd_react_root_.createElement("svg", ic_standard_notes_2_extends({
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), ic_standard_notes_2_path || (ic_standard_notes_2_path = /*#__PURE__*/external_commonjs_react_commonjs2_react_amd_react_root_.createElement("path", {
    d: "M12.004 9.604v4.293h1.6V9.604c0-1.94-1.612-3.512-3.601-3.512-1.99 0-3.603 1.572-3.603 3.512v4.293h1.601V9.604c0-1.078.896-1.951 2.002-1.951 1.105 0 2 .873 2 1.95Z"
  })), ic_standard_notes_2_path2 || (ic_standard_notes_2_path2 = /*#__PURE__*/external_commonjs_react_commonjs2_react_amd_react_root_.createElement("path", {
    clipRule: "evenodd",
    d: "M1.667 3.333c0-.92.746-1.667 1.666-1.667h13.334c.92 0 1.666.747 1.666 1.667v13.334c0 .92-.746 1.666-1.666 1.666H3.333c-.92 0-1.666-.746-1.666-1.666V3.332ZM3.333 2.5h13.334c.46 0 .833.373.833.833v13.334c0 .46-.373.833-.833.833H3.333a.833.833 0 0 1-.833-.834V3.333c0-.46.373-.833.833-.833Z"
  })));
};

/* harmony default export */ const ic_standard_notes_2 = (SvgIcStandardNotes2);
;// CONCATENATED MODULE: ./src/assets/icons/ic-sn-logo-full.svg
var ic_sn_logo_full_path;

function ic_sn_logo_full_extends() { ic_sn_logo_full_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return ic_sn_logo_full_extends.apply(this, arguments); }



var SvgIcSnLogoFull = function SvgIcSnLogoFull(props) {
  return /*#__PURE__*/external_commonjs_react_commonjs2_react_amd_react_root_.createElement("svg", ic_sn_logo_full_extends({
    width: 148,
    height: 25,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), ic_sn_logo_full_path || (ic_sn_logo_full_path = /*#__PURE__*/external_commonjs_react_commonjs2_react_amd_react_root_.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M0 5c0-2.761 2.242-5 5.008-5h15.024a5.004 5.004 0 0 1 5.008 5v15c0 2.761-2.242 5-5.008 5H5.008A5.004 5.004 0 0 1 0 20V5Zm5.008-2.813h15.024A2.815 2.815 0 0 1 22.849 5v15a2.815 2.815 0 0 1-2.817 2.813H5.008A2.815 2.815 0 0 1 2.191 20V5a2.815 2.815 0 0 1 2.817-2.813Zm10.157 9.686v5.854h2.187v-5.854c0-2.645-2.203-4.79-4.92-4.79s-4.92 2.145-4.92 4.79v5.854h2.187v-5.854c0-1.47 1.223-2.661 2.733-2.661s2.733 1.191 2.733 2.66Zm57.436 5.848h1.834V6h-1.93v5.225h-.049a3.018 3.018 0 0 0-.37-.388 2.74 2.74 0 0 0-.547-.372 3.066 3.066 0 0 0-.724-.279 3.344 3.344 0 0 0-.95-.124c-.547 0-1.05.103-1.512.31-.461.197-.858.47-1.19.822-.333.351-.59.765-.773 1.24a4.249 4.249 0 0 0-.274 1.535c0 .548.086 1.065.258 1.55.182.476.434.894.756 1.256.333.352.73.636 1.19.853.473.207 1.004.31 1.594.31.547 0 1.056-.114 1.528-.341a2.585 2.585 0 0 0 1.127-.992h.032v1.116Zm-4.393-2.884a3.038 3.038 0 0 1-.129-.868c0-.29.043-.574.13-.853.096-.29.235-.547.417-.775.183-.227.413-.408.692-.543.28-.144.606-.217.982-.217.354 0 .67.073.95.217.278.145.514.331.707.559.204.227.354.485.45.775.108.29.162.579.162.868 0 .29-.054.579-.161.868-.097.28-.247.532-.45.76-.194.227-.43.413-.709.558a2.16 2.16 0 0 1-.95.202c-.375 0-.702-.073-.98-.218a2.13 2.13 0 0 1-.693-.558 2.484 2.484 0 0 1-.418-.775ZM39.662 9.04c-.215-.269-.52-.491-.917-.667a2.681 2.681 0 0 0-1.175-.279c-.236 0-.472.031-.708.093-.236.052-.45.14-.644.264a1.456 1.456 0 0 0-.483.465 1.248 1.248 0 0 0-.176.682c0 .248.053.46.16.636.108.175.252.325.435.45.193.123.424.232.692.325.268.093.563.186.885.279.364.113.74.243 1.126.387.397.145.757.336 1.078.574.333.238.601.538.805.9.214.361.322.81.322 1.348 0 .59-.113 1.106-.338 1.55a3.227 3.227 0 0 1-.901 1.086c-.376.29-.816.506-1.32.65A5.748 5.748 0 0 1 36.91 18c-.74 0-1.464-.13-2.172-.388-.708-.268-1.287-.661-1.738-1.178l1.448-1.302a2.9 2.9 0 0 0 1.11.883c.473.218.934.326 1.384.326.236 0 .478-.026.724-.077.247-.063.467-.16.66-.295.204-.134.365-.3.483-.496.129-.207.193-.46.193-.76 0-.29-.07-.527-.21-.713a1.72 1.72 0 0 0-.562-.496 3.849 3.849 0 0 0-.837-.372l-1.014-.326a10.304 10.304 0 0 1-1.03-.372 3.563 3.563 0 0 1-.933-.573 2.869 2.869 0 0 1-.66-.869c-.171-.351-.257-.785-.257-1.302 0-.558.118-1.039.354-1.442.247-.403.563-.734.95-.992a4.176 4.176 0 0 1 1.335-.59 5.912 5.912 0 0 1 1.528-.2c.58 0 1.164.097 1.754.294.601.196 1.121.49 1.561.883l-1.32 1.396Zm2.13 1.24v1.488h1.351v3.473c0 .362.032.703.097 1.024.075.31.204.589.386.837.193.238.45.429.772.573.322.135.74.202 1.255.202.215 0 .44-.02.676-.062.236-.031.44-.078.612-.14l-.065-1.457a2.026 2.026 0 0 1-.402.124c-.15.02-.29.031-.418.031-.43 0-.708-.108-.837-.325-.118-.218-.177-.491-.177-.822v-3.458h1.93V10.28h-1.93V8.124h-1.899v2.155h-1.352Zm11.325 6.496h.049v.946h1.802v-4.527c0-.372-.054-.744-.161-1.117a2.49 2.49 0 0 0-.531-1.007c-.258-.3-.612-.543-1.062-.729-.44-.186-1.003-.279-1.69-.279a5.43 5.43 0 0 0-1.754.295 4.406 4.406 0 0 0-1.512.883l.997 1.132c.247-.238.558-.44.934-.605a2.885 2.885 0 0 1 1.174-.248c.483 0 .896.114 1.24.341.353.218.53.559.53 1.024v.186c-.6 0-1.217.03-1.85.093a7.09 7.09 0 0 0-1.706.34c-.515.177-.938.43-1.271.76-.322.331-.483.776-.483 1.334 0 .434.091.8.274 1.1.193.29.429.528.708.714.29.176.6.3.933.372.343.083.67.124.982.124.547 0 1.035-.103 1.464-.31.429-.217.74-.491.933-.822Zm-.418-2.45h.434v.264c0 .59-.171 1.054-.515 1.396-.343.34-.847.511-1.512.511-.161 0-.322-.015-.483-.046a1.435 1.435 0 0 1-.434-.155 1.03 1.03 0 0 1-.322-.28.852.852 0 0 1-.113-.45c0-.278.097-.495.29-.65.193-.166.434-.29.724-.372.29-.093.606-.15.95-.17.342-.032.67-.047.98-.047Zm6.353-4.046h-1.835v7.442h1.931v-4.093c0-.248.038-.491.113-.729.075-.248.182-.465.322-.65.15-.187.338-.337.563-.45.225-.125.493-.187.804-.187.311 0 .558.062.74.186.194.124.344.285.451.481.108.186.177.398.21.636.032.238.048.465.048.682v4.124h1.93V13.07c0-.383-.053-.755-.16-1.117a2.628 2.628 0 0 0-.515-.96 2.374 2.374 0 0 0-.885-.667c-.354-.176-.783-.264-1.288-.264-.579 0-1.083.145-1.512.434-.419.28-.714.605-.885.977h-.032v-1.194Zm22.524 6.496h-.048c-.193.33-.504.605-.933.822-.43.207-.917.31-1.465.31-.31 0-.638-.041-.981-.124a3.026 3.026 0 0 1-.933-.372 2.543 2.543 0 0 1-.708-.713c-.183-.3-.274-.667-.274-1.101 0-.558.161-1.003.483-1.333.332-.331.756-.584 1.271-.76a7.089 7.089 0 0 1 1.706-.341c.633-.062 1.25-.093 1.85-.093v-.186c0-.465-.177-.806-.53-1.024-.344-.227-.757-.34-1.24-.34-.407 0-.799.082-1.174.247a3.174 3.174 0 0 0-.934.605l-.997-1.132c.44-.393.944-.687 1.512-.883a5.43 5.43 0 0 1 1.754-.295c.687 0 1.25.093 1.69.28.45.185.804.428 1.062.728.257.3.434.635.53 1.008.108.372.162.744.162 1.116v4.527h-1.803v-.946Zm-.032-2.45h-.434c-.311 0-.638.016-.982.047-.343.02-.66.078-.95.17-.289.083-.53.207-.723.373-.193.155-.29.372-.29.65 0 .177.038.327.113.45.085.114.193.207.322.28.128.072.273.124.434.155.16.03.322.046.483.046.665 0 1.169-.17 1.512-.511.344-.342.515-.807.515-1.396v-.263Zm4.084-4.046h1.85v1.24h.033c.214-.434.515-.785.901-1.054s.837-.403 1.352-.403c.075 0 .155.005.241.016.086 0 .16.01.225.03v1.706a2.693 2.693 0 0 0-.338-.062 2.16 2.16 0 0 0-.257-.016c-.44 0-.794.078-1.062.233a1.905 1.905 0 0 0-.933 1.225c-.054.227-.08.408-.08.542v3.985h-1.932v-7.442Zm13.431 7.442h-1.834v-1.116h-.032a2.585 2.585 0 0 1-1.127.992 3.475 3.475 0 0 1-1.528.341c-.59 0-1.121-.103-1.593-.31a3.915 3.915 0 0 1-1.191-.853 4.057 4.057 0 0 1-.757-1.256 4.62 4.62 0 0 1-.257-1.55c0-.548.091-1.06.274-1.535.182-.475.44-.889.772-1.24.332-.352.73-.626 1.19-.822.462-.207.966-.31 1.513-.31.354 0 .67.041.95.124.279.072.52.165.724.28.214.113.397.237.547.371.15.135.273.264.37.388h.048V6h1.931v11.72Zm-6.356-3.752c0 .29.043.579.129.868.096.29.236.548.418.775.183.228.413.414.692.559.28.144.606.217.982.217.354 0 .67-.068.95-.202.278-.145.514-.33.707-.558.204-.228.354-.48.45-.76.108-.29.162-.579.162-.868 0-.29-.054-.579-.161-.868a2.186 2.186 0 0 0-.45-.775 2.318 2.318 0 0 0-.709-.559 2.03 2.03 0 0 0-.95-.217c-.375 0-.702.073-.98.217-.28.135-.51.316-.693.543a2.482 2.482 0 0 0-.418.775 2.886 2.886 0 0 0-.129.853Zm12.821-7.225h2.688l5.294 8.217h.032V6.744h2.027v10.977h-2.574l-5.407-8.48h-.032v8.48h-2.028V6.744Zm12.009 7.225c0-.59.107-1.121.322-1.597.225-.486.525-.9.901-1.24.375-.341.82-.605 1.335-.79a4.793 4.793 0 0 1 1.642-.28c.579 0 1.126.093 1.641.28.515.185.96.449 1.335.79.376.34.671.754.885 1.24.226.476.338 1.008.338 1.597 0 .59-.112 1.127-.338 1.612a3.788 3.788 0 0 1-.885 1.256c-.375.341-.82.61-1.335.806a4.566 4.566 0 0 1-1.641.295c-.58 0-1.127-.098-1.642-.295a4.166 4.166 0 0 1-1.335-.806 3.998 3.998 0 0 1-.901-1.256 3.94 3.94 0 0 1-.322-1.612Zm1.963 0c0 .29.043.579.129.868.096.29.236.548.418.775.182.228.413.414.692.559.279.144.611.217.998.217.386 0 .718-.073.997-.218.279-.144.51-.33.692-.558.183-.227.317-.485.402-.775.097-.29.145-.579.145-.868 0-.29-.048-.574-.145-.853a2.221 2.221 0 0 0-.402-.775 1.962 1.962 0 0 0-.692-.543c-.279-.144-.611-.217-.997-.217-.387 0-.719.073-.998.217-.279.135-.51.316-.692.543a2.479 2.479 0 0 0-.418.775 2.88 2.88 0 0 0-.129.853Zm7.198-2.202V10.28h1.352V8.124h1.899v2.155h1.931v1.488h-1.931v3.458c0 .33.059.604.177.822.128.217.407.325.836.325.129 0 .269-.01.419-.03.15-.032.284-.073.402-.125l.064 1.457a2.93 2.93 0 0 1-.611.14 3.922 3.922 0 0 1-.676.062c-.515 0-.933-.067-1.255-.202a2.06 2.06 0 0 1-.772-.573 2.308 2.308 0 0 1-.386-.837 5.142 5.142 0 0 1-.097-1.024v-3.473h-1.352Zm13.949 2.326v.248c0 .083-.006.166-.016.248h-5.874c.022.269.092.517.21.744.128.217.295.409.498.574.204.155.435.279.692.372.258.093.526.14.805.14.483 0 .89-.083 1.223-.248.332-.176.606-.414.821-.714l1.287.993c-.762.992-1.867 1.488-3.315 1.488a5.002 5.002 0 0 1-1.657-.264 4.141 4.141 0 0 1-1.32-.775 3.62 3.62 0 0 1-.869-1.21c-.204-.485-.305-1.033-.305-1.643 0-.599.101-1.142.305-1.627.215-.497.504-.915.869-1.256.365-.352.794-.62 1.287-.806a4.443 4.443 0 0 1 1.626-.295c.536 0 1.03.088 1.48.264.461.165.858.418 1.191.76.332.33.59.749.772 1.255.193.496.29 1.08.29 1.752Zm-1.931-.837c0-.238-.038-.465-.113-.682a1.445 1.445 0 0 0-.901-.962 1.912 1.912 0 0 0-.804-.155c-.58 0-1.073.17-1.481.512-.397.33-.617.76-.66 1.287h3.959Zm8.033-.992a2.136 2.136 0 0 0-.708-.559 2.003 2.003 0 0 0-.982-.248c-.311 0-.595.062-.853.186a.64.64 0 0 0-.386.62c0 .29.14.497.419.62.289.114.708.233 1.255.357.289.062.579.145.869.248.3.104.568.243.804.419.247.165.445.377.596.636.15.248.225.553.225.914 0 .455-.091.843-.274 1.163-.171.31-.407.563-.708.76a2.848 2.848 0 0 1-1.029.419c-.387.093-.789.139-1.207.139a5.092 5.092 0 0 1-1.754-.31 3.79 3.79 0 0 1-1.416-.915l1.271-1.147c.214.269.493.49.837.667.343.175.724.263 1.142.263.14 0 .279-.015.418-.046.151-.031.285-.078.403-.14a.875.875 0 0 0 .306-.279.744.744 0 0 0 .112-.419c0-.31-.15-.532-.45-.666-.29-.135-.73-.269-1.32-.403a7.95 7.95 0 0 1-.853-.233 3.2 3.2 0 0 1-.724-.388 1.904 1.904 0 0 1-.515-.604c-.128-.238-.193-.532-.193-.884 0-.413.086-.77.258-1.07.182-.3.418-.542.708-.728.289-.197.616-.341.981-.434.365-.094.74-.14 1.127-.14.557 0 1.099.093 1.625.28.536.185.96.47 1.271.852l-1.255 1.07Z",
    fill: "#086DD6"
  })));
};

/* harmony default export */ const ic_sn_logo_full = (SvgIcSnLogoFull);
;// CONCATENATED MODULE: ./src/assets/icons/ic-spreadsheets.svg
var ic_spreadsheets_path;

function ic_spreadsheets_extends() { ic_spreadsheets_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return ic_spreadsheets_extends.apply(this, arguments); }



var SvgIcSpreadsheets = function SvgIcSpreadsheets(props) {
  return /*#__PURE__*/external_commonjs_react_commonjs2_react_amd_react_root_.createElement("svg", ic_spreadsheets_extends({
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), ic_spreadsheets_path || (ic_spreadsheets_path = /*#__PURE__*/external_commonjs_react_commonjs2_react_amd_react_root_.createElement("path", {
    d: "M4 3h12c.398 0 .78.155 1.06.432.282.276.44.65.44 1.042v11.052c0 .391-.158.766-.44 1.042A1.514 1.514 0 0 1 16 17H4c-.398 0-.78-.155-1.06-.432a1.46 1.46 0 0 1-.44-1.042V4.474c0-.391.158-.766.44-1.042A1.514 1.514 0 0 1 4 3Zm0 2.947v2.21h3v-2.21H4Zm4.5 0v2.21h3v-2.21h-3Zm7.5 2.21v-2.21h-3v2.21h3ZM4 9.633v2.21h3v-2.21H4Zm0 5.894h3v-2.21H4v2.21Zm4.5-5.894v2.21h3v-2.21h-3Zm0 5.894h3v-2.21h-3v2.21Zm7.5 0v-2.21h-3v2.21h3Zm0-5.894h-3v2.21h3v-2.21Z"
  })));
};

/* harmony default export */ const ic_spreadsheets = (SvgIcSpreadsheets);
;// CONCATENATED MODULE: ./src/assets/icons/ic-star.svg
var ic_star_path;

function ic_star_extends() { ic_star_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return ic_star_extends.apply(this, arguments); }



var SvgIcStar = function SvgIcStar(props) {
  return /*#__PURE__*/external_commonjs_react_commonjs2_react_amd_react_root_.createElement("svg", ic_star_extends({
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), ic_star_path || (ic_star_path = /*#__PURE__*/external_commonjs_react_commonjs2_react_amd_react_root_.createElement("path", {
    d: "M10.104 12.887a.2.2 0 0 0-.207 0l-2.625 1.585a.2.2 0 0 1-.299-.216l.692-2.989a.2.2 0 0 0-.064-.196l-2.318-2.01a.2.2 0 0 1 .114-.35l3.058-.26a.2.2 0 0 0 .167-.12l1.194-2.82a.2.2 0 0 1 .368 0l1.194 2.82a.2.2 0 0 0 .167.12l3.058.26a.2.2 0 0 1 .114.35L12.4 11.07a.2.2 0 0 0-.063.196l.69 2.99a.2.2 0 0 1-.297.215l-2.625-1.585Zm7.871-4.877a.2.2 0 0 0-.114-.35l-5.4-.458a.2.2 0 0 1-.166-.121l-2.11-4.98a.2.2 0 0 0-.37 0l-2.11 4.98a.2.2 0 0 1-.167.12l-5.4.46a.2.2 0 0 0-.114.35l4.093 3.552a.2.2 0 0 1 .064.196l-1.224 5.28a.2.2 0 0 0 .298.217l4.642-2.802a.2.2 0 0 1 .206 0l4.641 2.801a.2.2 0 0 0 .298-.216l-1.231-5.28a.2.2 0 0 1 .064-.196l4.1-3.553Z"
  })));
};

/* harmony default export */ const ic_star = (SvgIcStar);
;// CONCATENATED MODULE: ./src/assets/icons/ic-sync.svg
var ic_sync_path;

function ic_sync_extends() { ic_sync_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return ic_sync_extends.apply(this, arguments); }



var SvgIcSync = function SvgIcSync(props) {
  return /*#__PURE__*/external_commonjs_react_commonjs2_react_amd_react_root_.createElement("svg", ic_sync_extends({
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), ic_sync_path || (ic_sync_path = /*#__PURE__*/external_commonjs_react_commonjs2_react_amd_react_root_.createElement("path", {
    d: "M10 15a5 5 0 0 1-5-5c0-.833.208-1.642.583-2.333L4.367 6.45A6.609 6.609 0 0 0 3.333 10 6.667 6.667 0 0 0 10 16.667v2.5l3.333-3.334L10 12.5V15Zm0-11.667v-2.5L6.667 4.167 10 7.5V5a5 5 0 0 1 5 5c0 .833-.208 1.642-.583 2.333l1.216 1.217A6.61 6.61 0 0 0 16.667 10 6.667 6.667 0 0 0 10 3.333Z"
  })));
};

/* harmony default export */ const ic_sync = (SvgIcSync);
;// CONCATENATED MODULE: ./src/assets/icons/ic-tasks.svg
var ic_tasks_path;

function ic_tasks_extends() { ic_tasks_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return ic_tasks_extends.apply(this, arguments); }



var SvgIcTasks = function SvgIcTasks(props) {
  return /*#__PURE__*/external_commonjs_react_commonjs2_react_amd_react_root_.createElement("svg", ic_tasks_extends({
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), ic_tasks_path || (ic_tasks_path = /*#__PURE__*/external_commonjs_react_commonjs2_react_amd_react_root_.createElement("path", {
    d: "M15.833 15.833H4.167V4.167H12.5V2.5H4.167A1.66 1.66 0 0 0 2.5 4.167v11.666A1.666 1.666 0 0 0 4.167 17.5h11.666a1.666 1.666 0 0 0 1.667-1.667V9.167h-1.667v6.666ZM6.592 8.4 5.417 9.583l3.75 3.75L17.5 5l-1.175-1.183-7.158 7.158L6.592 8.4Z"
  })));
};

/* harmony default export */ const ic_tasks = (SvgIcTasks);
;// CONCATENATED MODULE: ./src/assets/icons/ic-themes.svg
var ic_themes_path;

function ic_themes_extends() { ic_themes_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return ic_themes_extends.apply(this, arguments); }



var SvgIcThemes = function SvgIcThemes(props) {
  return /*#__PURE__*/external_commonjs_react_commonjs2_react_amd_react_root_.createElement("svg", ic_themes_extends({
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), ic_themes_path || (ic_themes_path = /*#__PURE__*/external_commonjs_react_commonjs2_react_amd_react_root_.createElement("path", {
    d: "M10 18a7.999 7.999 0 1 1 0-16c4.4 0 8 3.2 8 7.2a4.8 4.8 0 0 1-4.8 4.8h-1.44c-.24 0-.4.16-.4.4 0 .08.08.16.08.24.32.4.48.88.48 1.36.08 1.12-.8 2-1.92 2Zm0-14.4a6.4 6.4 0 1 0 0 12.8c.24 0 .4-.16.4-.4 0-.16-.08-.24-.08-.32-.32-.4-.48-.8-.48-1.28 0-1.12.88-2 2-2h1.36a3.2 3.2 0 0 0 3.2-3.2c0-3.12-2.88-5.6-6.4-5.6ZM5.6 8.4c.64 0 1.2.56 1.2 1.2 0 .64-.56 1.2-1.2 1.2-.64 0-1.2-.56-1.2-1.2 0-.64.56-1.2 1.2-1.2ZM8 5.2c.64 0 1.2.56 1.2 1.2 0 .64-.56 1.2-1.2 1.2-.64 0-1.2-.56-1.2-1.2 0-.64.56-1.2 1.2-1.2Zm4 0c.64 0 1.2.56 1.2 1.2 0 .64-.56 1.2-1.2 1.2-.64 0-1.2-.56-1.2-1.2 0-.64.56-1.2 1.2-1.2Zm2.4 3.2c.64 0 1.2.56 1.2 1.2 0 .64-.56 1.2-1.2 1.2-.64 0-1.2-.56-1.2-1.2 0-.64.56-1.2 1.2-1.2Z"
  })));
};

/* harmony default export */ const ic_themes = (SvgIcThemes);
;// CONCATENATED MODULE: ./src/assets/icons/ic-trash-filled.svg
var ic_trash_filled_path;

function ic_trash_filled_extends() { ic_trash_filled_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return ic_trash_filled_extends.apply(this, arguments); }



var SvgIcTrashFilled = function SvgIcTrashFilled(props) {
  return /*#__PURE__*/external_commonjs_react_commonjs2_react_amd_react_root_.createElement("svg", ic_trash_filled_extends({
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), ic_trash_filled_path || (ic_trash_filled_path = /*#__PURE__*/external_commonjs_react_commonjs2_react_amd_react_root_.createElement("path", {
    d: "M7.5 2.5v.833H3.333V5h.834v10.833A1.666 1.666 0 0 0 5.833 17.5h8.334a1.667 1.667 0 0 0 1.666-1.667V5h.834V3.333H12.5V2.5h-5Zm0 4.167h1.667v7.5H7.5v-7.5Zm3.333 0H12.5v7.5h-1.667v-7.5Z"
  })));
};

/* harmony default export */ const ic_trash_filled = (SvgIcTrashFilled);
;// CONCATENATED MODULE: ./src/assets/icons/ic-trash.svg
var ic_trash_path;

function ic_trash_extends() { ic_trash_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return ic_trash_extends.apply(this, arguments); }



var SvgIcTrash = function SvgIcTrash(props) {
  return /*#__PURE__*/external_commonjs_react_commonjs2_react_amd_react_root_.createElement("svg", ic_trash_extends({
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), ic_trash_path || (ic_trash_path = /*#__PURE__*/external_commonjs_react_commonjs2_react_amd_react_root_.createElement("path", {
    d: "M7.5 2.5v.833H3.333V5h.834v10.833A1.666 1.666 0 0 0 5.833 17.5h8.334a1.667 1.667 0 0 0 1.666-1.667V5h.834V3.333H12.5V2.5h-5ZM5.833 5h8.334v10.833H5.833V5ZM7.5 6.667v7.5h1.667v-7.5H7.5Zm3.333 0v7.5H12.5v-7.5h-1.667Z"
  })));
};

/* harmony default export */ const ic_trash = (SvgIcTrash);
;// CONCATENATED MODULE: ./src/assets/icons/ic-trash-sweep.svg
var ic_trash_sweep_path;

function ic_trash_sweep_extends() { ic_trash_sweep_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return ic_trash_sweep_extends.apply(this, arguments); }



var SvgIcTrashSweep = function SvgIcTrashSweep(props) {
  return /*#__PURE__*/external_commonjs_react_commonjs2_react_amd_react_root_.createElement("svg", ic_trash_sweep_extends({
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), ic_trash_sweep_path || (ic_trash_sweep_path = /*#__PURE__*/external_commonjs_react_commonjs2_react_amd_react_root_.createElement("path", {
    d: "M12.5 13.333h3.333V15H12.5v-1.667Zm0-6.666h5.833v1.666H12.5V6.667Zm0 3.333h5v1.667h-5V10ZM9.167 8.333V15h-5V8.333h5Zm1.666-1.666H2.5V15a1.667 1.667 0 0 0 1.667 1.667h5A1.667 1.667 0 0 0 10.833 15V6.667Zm.834-2.5h-2.5l-.834-.834H5l-.833.834h-2.5v1.666h10V4.167Z"
  })));
};

/* harmony default export */ const ic_trash_sweep = (SvgIcTrashSweep);
;// CONCATENATED MODULE: ./src/assets/icons/ic-tune.svg
var ic_tune_path;

function ic_tune_extends() { ic_tune_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return ic_tune_extends.apply(this, arguments); }



var SvgIcTune = function SvgIcTune(props) {
  return /*#__PURE__*/external_commonjs_react_commonjs2_react_amd_react_root_.createElement("svg", ic_tune_extends({
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), ic_tune_path || (ic_tune_path = /*#__PURE__*/external_commonjs_react_commonjs2_react_amd_react_root_.createElement("path", {
    d: "M2.5 14.167v1.666h5v-1.666h-5Zm0-10v1.666h8.333V4.167H2.5ZM10.833 17.5v-1.667H17.5v-1.666h-6.667V12.5H9.167v5h1.666Zm-5-10v1.667H2.5v1.666h3.333V12.5H7.5v-5H5.833ZM17.5 10.833V9.167H9.167v1.666H17.5Zm-5-3.333h1.667V5.833H17.5V4.167h-3.333V2.5H12.5v5Z"
  })));
};

/* harmony default export */ const ic_tune = (SvgIcTune);
;// CONCATENATED MODULE: ./src/assets/icons/ic-unarchive.svg
var ic_unarchive_path;

function ic_unarchive_extends() { ic_unarchive_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return ic_unarchive_extends.apply(this, arguments); }



var SvgIcUnarchive = function SvgIcUnarchive(props) {
  return /*#__PURE__*/external_commonjs_react_commonjs2_react_amd_react_root_.createElement("svg", ic_unarchive_extends({
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), ic_unarchive_path || (ic_unarchive_path = /*#__PURE__*/external_commonjs_react_commonjs2_react_amd_react_root_.createElement("path", {
    clipRule: "evenodd",
    d: "M12.333 12.333h3.111V4.556H4.556v7.777h3.11a2.333 2.333 0 1 0 4.667 0ZM4.556 3h10.888A1.556 1.556 0 0 1 17 4.556v10.888A1.556 1.556 0 0 1 15.444 17H4.556A1.556 1.556 0 0 1 3 15.444V4.556C3 3.7 3.692 3 4.556 3Zm3.888 5.917H6.89L10 5.806l3.111 3.11h-1.556v2.334h-3.11V8.917Z"
  })));
};

/* harmony default export */ const ic_unarchive = (SvgIcUnarchive);
;// CONCATENATED MODULE: ./src/assets/icons/ic-undo.svg
var ic_undo_path;

function ic_undo_extends() { ic_undo_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return ic_undo_extends.apply(this, arguments); }



var SvgIcUndo = function SvgIcUndo(props) {
  return /*#__PURE__*/external_commonjs_react_commonjs2_react_amd_react_root_.createElement("svg", ic_undo_extends({
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), ic_undo_path || (ic_undo_path = /*#__PURE__*/external_commonjs_react_commonjs2_react_amd_react_root_.createElement("path", {
    d: "M10.181 7.667A7.3 7.3 0 0 0 5.462 9.4L3 7v6h6.155L6.68 10.587a5.523 5.523 0 0 1 3.501-1.254c2.421 0 4.48 1.54 5.198 3.667L17 12.48c-.95-2.793-3.639-4.813-6.819-4.813Z"
  })));
};

/* harmony default export */ const ic_undo = (SvgIcUndo);
;// CONCATENATED MODULE: ./src/assets/icons/ic-pin-off.svg
var ic_pin_off_path;

function ic_pin_off_extends() { ic_pin_off_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return ic_pin_off_extends.apply(this, arguments); }



var SvgIcPinOff = function SvgIcPinOff(props) {
  return /*#__PURE__*/external_commonjs_react_commonjs2_react_amd_react_root_.createElement("svg", ic_pin_off_extends({
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), ic_pin_off_path || (ic_pin_off_path = /*#__PURE__*/external_commonjs_react_commonjs2_react_amd_react_root_.createElement("path", {
    clipRule: "evenodd",
    d: "M7 9.69 1.667 4.357l1.178-1.179L16.987 17.32 15.81 18.5l-5.209-5.21V17.5H9.4V13H4.5v-1.5L7 10v-.31Zm1.81 1.81H6.6l1.5-.71.71.71ZM11.5 4v5.476L15.024 13h.476v-1.5L13 10V4h.75V2.5h-7.5V4H7v.976l1.5 1.5V4h3Z"
  })));
};

/* harmony default export */ const ic_pin_off = (SvgIcPinOff);
;// CONCATENATED MODULE: ./src/assets/icons/ic-user-add.svg
var ic_user_add_path;

function ic_user_add_extends() { ic_user_add_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return ic_user_add_extends.apply(this, arguments); }



var SvgIcUserAdd = function SvgIcUserAdd(props) {
  return /*#__PURE__*/external_commonjs_react_commonjs2_react_amd_react_root_.createElement("svg", ic_user_add_extends({
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), ic_user_add_path || (ic_user_add_path = /*#__PURE__*/external_commonjs_react_commonjs2_react_amd_react_root_.createElement("path", {
    d: "M12.5 3.333a3.333 3.333 0 1 0 0 6.667 3.333 3.333 0 0 0 0-6.667Zm0 1.584a1.75 1.75 0 1 1 0 3.5 1.75 1.75 0 0 1 0-3.5Zm-9.167.916v2.5h-2.5V10h2.5v2.5H5V10h2.5V8.333H5v-2.5H3.333Zm9.167 5c-2.225 0-6.667 1.109-6.667 3.334v2.5h13.334v-2.5c0-2.225-4.442-3.334-6.667-3.334Zm0 1.584c2.475 0 5.083 1.216 5.083 1.75v.916H7.417v-.916c0-.534 2.583-1.75 5.083-1.75Z"
  })));
};

/* harmony default export */ const ic_user_add = (SvgIcUserAdd);
;// CONCATENATED MODULE: ./src/assets/icons/ic-user.svg
var ic_user_path;

function ic_user_extends() { ic_user_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return ic_user_extends.apply(this, arguments); }



var SvgIcUser = function SvgIcUser(props) {
  return /*#__PURE__*/external_commonjs_react_commonjs2_react_amd_react_root_.createElement("svg", ic_user_extends({
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), ic_user_path || (ic_user_path = /*#__PURE__*/external_commonjs_react_commonjs2_react_amd_react_root_.createElement("path", {
    d: "M10 3a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7Zm0 1.75a1.75 1.75 0 1 0 0 3.5 1.75 1.75 0 0 0 0-3.5Zm0 6.125c2.336 0 7 1.164 7 3.5V17H3v-2.625c0-2.336 4.664-3.5 7-3.5Zm0 1.662c-2.599 0-5.338 1.278-5.338 1.838v.963h10.675v-.963c0-.56-2.738-1.838-5.337-1.838Z"
  })));
};

/* harmony default export */ const ic_user = (SvgIcUser);
;// CONCATENATED MODULE: ./src/assets/icons/ic-user-switch.svg
var ic_user_switch_path;

function ic_user_switch_extends() { ic_user_switch_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return ic_user_switch_extends.apply(this, arguments); }



var SvgIcUserSwitch = function SvgIcUserSwitch(props) {
  return /*#__PURE__*/external_commonjs_react_commonjs2_react_amd_react_root_.createElement("svg", ic_user_switch_extends({
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), ic_user_switch_path || (ic_user_switch_path = /*#__PURE__*/external_commonjs_react_commonjs2_react_amd_react_root_.createElement("path", {
    d: "M15.833 17.5v-1.667H12.5v-1.666h3.333V12.5l2.5 2.5-2.5 2.5Zm-5-2.5c0 .592.125 1.158.35 1.667H1.667v-2.5c0-1.842 2.983-3.334 6.666-3.334.834 0 1.634.075 2.375.217a9.637 9.637 0 0 1 1.884.55 4.164 4.164 0 0 0-1.759 3.4Zm-7.5-.833V15h5.834c0-.867.191-1.692.533-2.433L8.333 12.5c-2.758 0-5 .75-5 1.667Zm5-10.834a3.333 3.333 0 1 1 0 6.667 3.333 3.333 0 0 1 0-6.667Zm0 1.667a1.667 1.667 0 1 0 0 3.333 1.667 1.667 0 0 0 0-3.333Z"
  })));
};

/* harmony default export */ const ic_user_switch = (SvgIcUserSwitch);
;// CONCATENATED MODULE: ./src/assets/icons/ic-warning.svg
var ic_warning_path;

function ic_warning_extends() { ic_warning_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return ic_warning_extends.apply(this, arguments); }



var SvgIcWarning = function SvgIcWarning(props) {
  return /*#__PURE__*/external_commonjs_react_commonjs2_react_amd_react_root_.createElement("svg", ic_warning_extends({
    viewBox: "0 0 20 20",
    fill: "#fff",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), ic_warning_path || (ic_warning_path = /*#__PURE__*/external_commonjs_react_commonjs2_react_amd_react_root_.createElement("path", {
    d: "M10.833 10.834H9.167v-5h1.666v5Zm0 3.333H9.167V12.5h1.666v1.667ZM10 1.667a8.333 8.333 0 1 0 0 16.667 8.333 8.333 0 0 0 0-16.667Z",
    fill: "currentColor"
  })));
};

/* harmony default export */ const ic_warning = (SvgIcWarning);
;// CONCATENATED MODULE: ./src/assets/icons/ic-window.svg
var ic_window_path;

function ic_window_extends() { ic_window_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return ic_window_extends.apply(this, arguments); }



var SvgIcWindow = function SvgIcWindow(props) {
  return /*#__PURE__*/external_commonjs_react_commonjs2_react_amd_react_root_.createElement("svg", ic_window_extends({
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), ic_window_path || (ic_window_path = /*#__PURE__*/external_commonjs_react_commonjs2_react_amd_react_root_.createElement("path", {
    d: "M3.333 3.333h13.334v13.334H3.333V3.333ZM5 6.667V15h10V6.667H5Z"
  })));
};

/* harmony default export */ const ic_window = (SvgIcWindow);
;// CONCATENATED MODULE: ./src/assets/icons/index.js




























































































;// CONCATENATED MODULE: ./src/components/Toast/Toast.tsx





const colorForToastType = type => {
  switch (type) {
    case ToastType.Success:
      return 'color-success';

    case ToastType.Error:
      return 'color-danger';

    default:
      return 'color-info';
  }
};

const iconForToastType = type => {
  switch (type) {
    case ToastType.Success:
      return external_commonjs_react_commonjs2_react_amd_react_root_.createElement(ic_check_circle_filled, {
        className: colorForToastType(type)
      });

    case ToastType.Error:
      return external_commonjs_react_commonjs2_react_amd_react_root_.createElement(ic_clear_circle_filled, {
        className: colorForToastType(type)
      });

    case ToastType.Loading:
      return external_commonjs_react_commonjs2_react_amd_react_root_.createElement("div", {
        className: "sk-spinner w-4 h-4 spinner-info"
      });

    default:
      return null;
  }
};

const Toast = ({
  toast,
  index
}) => {
  var _a;

  const icon = iconForToastType(toast.type);
  const hasActions = ((_a = toast === null || toast === void 0 ? void 0 : toast.actions) === null || _a === void 0 ? void 0 : _a.length) > 0;
  return external_commonjs_react_commonjs2_react_amd_react_root_.createElement("div", {
    className: `inline-flex items-center bg-grey-5 mt-2 rounded opacity-0 animation-fill-forwards select-none max-w-80 ${toast.dismissed ? 'slide-out-left-animation' : 'slide-in-right-animation'} ${hasActions ? 'p-2 pl-3' : 'p-3 cursor-pointer'}`,
    style: {
      boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.16)',
      transition: 'all 0.2s ease',
      willChange: 'transform'
    },
    onClick: () => {
      if (!hasActions && toast.type !== ToastType.Loading) {
        dismissToast(toast.id);
      }
    }
  }, icon ? external_commonjs_react_commonjs2_react_amd_react_root_.createElement("div", {
    className: "flex flex-shrink-0 items-center justify-center sn-icon mr-2"
  }, icon) : null, external_commonjs_react_commonjs2_react_amd_react_root_.createElement("div", {
    className: "text-sm"
  }, toast.message), hasActions && external_commonjs_react_commonjs2_react_amd_react_root_.createElement("div", {
    className: "ml-4"
  }, toast.actions.map((action, index) => external_commonjs_react_commonjs2_react_amd_react_root_.createElement("button", {
    style: {
      paddingLeft: '0.45rem',
      paddingRight: '0.45rem'
    },
    className: `py-1 border-0 bg-transparent cursor-pointer font-semibold text-sm hover:bg-grey-3 rounded ${colorForToastType(toast.type)} ${index !== 0 ? 'ml-2' : ''}`,
    onClick: () => {
      action.callback(toast.id);
    }
  }, action.label))));
};
;// CONCATENATED MODULE: ./src/components/Toast/ToastContainer.tsx




const ToastContainer = () => {
  const toasts = useStore(toastStore);
  return external_commonjs_react_commonjs2_react_amd_react_root_.createElement("div", {
    className: "flex flex-col items-end fixed",
    style: {
      zIndex: 9999,
      bottom: '1.5rem',
      right: '1.5rem'
    }
  }, toasts.map((toast, index) => external_commonjs_react_commonjs2_react_amd_react_root_.createElement(Toast, {
    toast: toast,
    index: index,
    key: toast.id
  })));
};
;// CONCATENATED MODULE: ./src/components/Toast/index.ts


;// CONCATENATED MODULE: ./src/assets/index.js

;// CONCATENATED MODULE: ./src/stylekit.js






/***/ }),

/***/ 683:
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE__683__;

/***/ }),

/***/ 320:
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE__320__;

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			388: 0,
/******/ 			532: 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkSK_name_"] = self["webpackChunkSK_name_"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, [532], () => (__webpack_require__(828)))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});