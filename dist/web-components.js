(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("preact"));
	else if(typeof define === 'function' && define.amd)
		define("SK", ["preact"], factory);
	else if(typeof exports === 'object')
		exports["SK"] = factory(require("preact"));
	else
		root["SK"] = root["SK"] || {}, root["SK"]["web-components"] = factory(root["_"]);
})(self, function(__WEBPACK_EXTERNAL_MODULE__670__) {
return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 245:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */


var ReactPropTypesSecret = __webpack_require__(132);

function emptyFunction() {}

function emptyFunctionWithReset() {}

emptyFunctionWithReset.resetWarningCache = emptyFunction;

module.exports = function () {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      // It is still safe when called from React.
      return;
    }

    var err = new Error('Calling PropTypes validators directly is not supported by the `prop-types` package. ' + 'Use PropTypes.checkPropTypes() to call them. ' + 'Read more at http://fb.me/use-check-prop-types');
    err.name = 'Invariant Violation';
    throw err;
  }

  ;
  shim.isRequired = shim;

  function getShim() {
    return shim;
  }

  ; // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.

  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,
    any: shim,
    arrayOf: getShim,
    element: shim,
    elementType: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim,
    checkPropTypes: emptyFunctionWithReset,
    resetWarningCache: emptyFunction
  };
  ReactPropTypes.PropTypes = ReactPropTypes;
  return ReactPropTypes;
};

/***/ }),

/***/ 838:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
if (false) { var throwOnDirectAccess, ReactIs; } else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = __webpack_require__(245)();
}

/***/ }),

/***/ 132:
/***/ ((module) => {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */


var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';
module.exports = ReactPropTypesSecret;

/***/ }),

/***/ 453:
/***/ ((module) => {

var candidateSelectors = ['input', 'select', 'textarea', 'a[href]', 'button', '[tabindex]', 'audio[controls]', 'video[controls]', '[contenteditable]:not([contenteditable="false"])'];
var candidateSelector = candidateSelectors.join(',');
var matches = typeof Element === 'undefined' ? function () {} : Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;

function tabbable(el, options) {
  options = options || {};
  var regularTabbables = [];
  var orderedTabbables = [];
  var candidates = el.querySelectorAll(candidateSelector);

  if (options.includeContainer) {
    if (matches.call(el, candidateSelector)) {
      candidates = Array.prototype.slice.apply(candidates);
      candidates.unshift(el);
    }
  }

  var i, candidate, candidateTabindex;

  for (i = 0; i < candidates.length; i++) {
    candidate = candidates[i];
    if (!isNodeMatchingSelectorTabbable(candidate)) continue;
    candidateTabindex = getTabindex(candidate);

    if (candidateTabindex === 0) {
      regularTabbables.push(candidate);
    } else {
      orderedTabbables.push({
        documentOrder: i,
        tabIndex: candidateTabindex,
        node: candidate
      });
    }
  }

  var tabbableNodes = orderedTabbables.sort(sortOrderedTabbables).map(function (a) {
    return a.node;
  }).concat(regularTabbables);
  return tabbableNodes;
}

tabbable.isTabbable = isTabbable;
tabbable.isFocusable = isFocusable;

function isNodeMatchingSelectorTabbable(node) {
  if (!isNodeMatchingSelectorFocusable(node) || isNonTabbableRadio(node) || getTabindex(node) < 0) {
    return false;
  }

  return true;
}

function isTabbable(node) {
  if (!node) throw new Error('No node provided');
  if (matches.call(node, candidateSelector) === false) return false;
  return isNodeMatchingSelectorTabbable(node);
}

function isNodeMatchingSelectorFocusable(node) {
  if (node.disabled || isHiddenInput(node) || isHidden(node)) {
    return false;
  }

  return true;
}

var focusableCandidateSelector = candidateSelectors.concat('iframe').join(',');

function isFocusable(node) {
  if (!node) throw new Error('No node provided');
  if (matches.call(node, focusableCandidateSelector) === false) return false;
  return isNodeMatchingSelectorFocusable(node);
}

function getTabindex(node) {
  var tabindexAttr = parseInt(node.getAttribute('tabindex'), 10);
  if (!isNaN(tabindexAttr)) return tabindexAttr; // Browsers do not return `tabIndex` correctly for contentEditable nodes;
  // so if they don't have a tabindex attribute specifically set, assume it's 0.

  if (isContentEditable(node)) return 0;
  return node.tabIndex;
}

function sortOrderedTabbables(a, b) {
  return a.tabIndex === b.tabIndex ? a.documentOrder - b.documentOrder : a.tabIndex - b.tabIndex;
}

function isContentEditable(node) {
  return node.contentEditable === 'true';
}

function isInput(node) {
  return node.tagName === 'INPUT';
}

function isHiddenInput(node) {
  return isInput(node) && node.type === 'hidden';
}

function isRadio(node) {
  return isInput(node) && node.type === 'radio';
}

function isNonTabbableRadio(node) {
  return isRadio(node) && !isTabbableRadio(node);
}

function getCheckedRadio(nodes) {
  for (var i = 0; i < nodes.length; i++) {
    if (nodes[i].checked) {
      return nodes[i];
    }
  }
}

function isTabbableRadio(node) {
  if (!node.name) return true; // This won't account for the edge case where you have radio groups with the same
  // in separate forms on the same page.

  var radioSet = node.ownerDocument.querySelectorAll('input[type="radio"][name="' + node.name + '"]');
  var checked = getCheckedRadio(radioSet);
  return !checked || checked === node;
}

function isHidden(node) {
  // offsetParent being null will allow detecting cases where an element is invisible or inside an invisible element,
  // as long as the element does not use position: fixed. For them, their visibility has to be checked directly as well.
  return node.offsetParent === null || getComputedStyle(node).visibility === 'hidden';
}

module.exports = tabbable;

/***/ }),

/***/ 118:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Button": () => (/* reexport */ component),
  "DropdownMenu": () => (/* reexport */ DropdownMenu_component),
  "Select": () => (/* reexport */ Select_component)
});

// EXTERNAL MODULE: external {"commonjs":"preact","commonjs2":"preact","amd":"preact","root":"_"}
var external_commonjs_preact_commonjs2_preact_amd_preact_root_ = __webpack_require__(670);
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
  !external_commonjs_preact_commonjs2_preact_amd_preact_root_.options.__s && k(i.__H, o) && (i.__ = r, i.__H = o, u.__h.push(i));
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
  return o.__c = n, r ? (null == o.__ && (o.__ = !0, r.sub(u)), r.props.value) : n.__;
}

function T(t, u) {
  external_commonjs_preact_commonjs2_preact_amd_preact_root_.options.useDebugValue && external_commonjs_preact_commonjs2_preact_amd_preact_root_.options.useDebugValue(u ? u(t) : t);
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
  i.forEach(function (t) {
    if (t.__P) try {
      t.__H.__h.forEach(g), t.__H.__h.forEach(j), t.__H.__h = [];
    } catch (u) {
      t.__H.__h = [], external_commonjs_preact_commonjs2_preact_amd_preact_root_.options.__e(u, t.__v);
    }
  }), i = [];
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
  })(x)), u = void 0;
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
  var u = t.__c;
  if (u && u.__H) try {
    u.__H.__.forEach(g);
  } catch (t) {
    external_commonjs_preact_commonjs2_preact_amd_preact_root_.options.__e(t, u.__v);
  }
};
var b = "function" == typeof requestAnimationFrame;

function g(n) {
  var t = u;
  "function" == typeof n.__c && n.__c(), u = t;
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


;// CONCATENATED MODULE: ./node_modules/preact/compat/dist/compat.module.js





function C(n, t) {
  for (var e in t) n[e] = t[e];

  return n;
}

function S(n, t) {
  for (var e in n) if ("__source" !== e && !(e in t)) return !0;

  for (var r in t) if ("__source" !== r && n[r] !== t[r]) return !0;

  return !1;
}

function E(n) {
  this.props = n;
}

function compat_module_g(n, t) {
  function e(n) {
    var e = this.props.ref,
        r = e == n.ref;
    return !r && e && (e.call ? e(null) : e.current = null), t ? !t(this.props, n) || !r : S(this.props, n);
  }

  function r(t) {
    return this.shouldComponentUpdate = e, (0,external_commonjs_preact_commonjs2_preact_amd_preact_root_.createElement)(n, t);
  }

  return r.displayName = "Memo(" + (n.displayName || n.name) + ")", r.prototype.isReactComponent = !0, r.__f = !0, r;
}

(E.prototype = new external_commonjs_preact_commonjs2_preact_amd_preact_root_.Component()).isPureReactComponent = !0, E.prototype.shouldComponentUpdate = function (n, t) {
  return S(this.props, n) || S(this.state, t);
};
var compat_module_w = external_commonjs_preact_commonjs2_preact_amd_preact_root_.options.__b;

external_commonjs_preact_commonjs2_preact_amd_preact_root_.options.__b = function (n) {
  n.type && n.type.__f && n.ref && (n.props.ref = n.ref, n.ref = null), compat_module_w && compat_module_w(n);
};

var R = "undefined" != typeof Symbol && Symbol.for && Symbol.for("react.forward_ref") || 3911;

function compat_module_x(n) {
  function t(t, e) {
    var r = C({}, t);
    return delete r.ref, n(r, (e = t.ref || e) && ("object" != typeof e || "current" in e) ? e : null);
  }

  return t.$$typeof = R, t.render = t, t.prototype.isReactComponent = t.__f = !0, t.displayName = "ForwardRef(" + (n.displayName || n.name) + ")", t;
}

var N = function (n, t) {
  return null == n ? null : (0,external_commonjs_preact_commonjs2_preact_amd_preact_root_.toChildArray)((0,external_commonjs_preact_commonjs2_preact_amd_preact_root_.toChildArray)(n).map(t));
},
    compat_module_k = {
  map: N,
  forEach: N,
  count: function (n) {
    return n ? (0,external_commonjs_preact_commonjs2_preact_amd_preact_root_.toChildArray)(n).length : 0;
  },
  only: function (n) {
    var t = (0,external_commonjs_preact_commonjs2_preact_amd_preact_root_.toChildArray)(n);
    if (1 !== t.length) throw "Children.only";
    return t[0];
  },
  toArray: external_commonjs_preact_commonjs2_preact_amd_preact_root_.toChildArray
},
    compat_module_A = external_commonjs_preact_commonjs2_preact_amd_preact_root_.options.__e;

function O() {
  this.__u = 0, this.t = null, this.__b = null;
}

function L(n) {
  var t = n.__.__c;
  return t && t.__e && t.__e(n);
}

function U(n) {
  var t, e, r;

  function u(u) {
    if (t || (t = n()).then(function (n) {
      e = n.default || n;
    }, function (n) {
      r = n;
    }), r) throw r;
    if (!e) throw t;
    return (0,external_commonjs_preact_commonjs2_preact_amd_preact_root_.createElement)(e, u);
  }

  return u.displayName = "Lazy", u.__f = !0, u;
}

function D() {
  this.u = null, this.o = null;
}

external_commonjs_preact_commonjs2_preact_amd_preact_root_.options.__e = function (n, t, e) {
  if (n.then) for (var r, u = t; u = u.__;) if ((r = u.__c) && r.__c) return null == t.__e && (t.__e = e.__e, t.__k = e.__k), r.__c(n, t);
  compat_module_A(n, t, e);
}, (O.prototype = new external_commonjs_preact_commonjs2_preact_amd_preact_root_.Component()).__c = function (n, t) {
  var e = t.__c,
      r = this;
  null == r.t && (r.t = []), r.t.push(e);

  var u = L(r.__v),
      o = !1,
      i = function () {
    o || (o = !0, e.componentWillUnmount = e.__c, u ? u(l) : l());
  };

  e.__c = e.componentWillUnmount, e.componentWillUnmount = function () {
    i(), e.__c && e.__c();
  };

  var l = function () {
    if (! --r.__u) {
      if (r.state.__e) {
        var n = r.state.__e;

        r.__v.__k[0] = function n(t, e, r) {
          return t && (t.__v = null, t.__k = t.__k && t.__k.map(function (t) {
            return n(t, e, r);
          }), t.__c && t.__c.__P === e && (t.__e && r.insertBefore(t.__e, t.__d), t.__c.__e = !0, t.__c.__P = r)), t;
        }(n, n.__c.__P, n.__c.__O);
      }

      var t;

      for (r.setState({
        __e: r.__b = null
      }); t = r.t.pop();) t.forceUpdate();
    }
  },
      f = !0 === t.__h;

  r.__u++ || f || r.setState({
    __e: r.__b = r.__v.__k[0]
  }), n.then(i, i);
}, O.prototype.componentWillUnmount = function () {
  this.t = [];
}, O.prototype.render = function (n, t) {
  if (this.__b) {
    if (this.__v.__k) {
      var e = document.createElement("div"),
          r = this.__v.__k[0].__c;

      this.__v.__k[0] = function n(t, e, r) {
        return t && (t.__c && t.__c.__H && (t.__c.__H.__.forEach(function (n) {
          "function" == typeof n.__c && n.__c();
        }), t.__c.__H = null), null != (t = C({}, t)).__c && (t.__c.__P === r && (t.__c.__P = e), t.__c = null), t.__k = t.__k && t.__k.map(function (t) {
          return n(t, e, r);
        })), t;
      }(this.__b, e, r.__O = r.__P);
    }

    this.__b = null;
  }

  var u = t.__e && (0,external_commonjs_preact_commonjs2_preact_amd_preact_root_.createElement)(external_commonjs_preact_commonjs2_preact_amd_preact_root_.Fragment, null, n.fallback);
  return u && (u.__h = null), [(0,external_commonjs_preact_commonjs2_preact_amd_preact_root_.createElement)(external_commonjs_preact_commonjs2_preact_amd_preact_root_.Fragment, null, t.__e ? null : n.children), u];
};

var compat_module_F = function (n, t, e) {
  if (++e[1] === e[0] && n.o.delete(t), n.props.revealOrder && ("t" !== n.props.revealOrder[0] || !n.o.size)) for (e = n.u; e;) {
    for (; e.length > 3;) e.pop()();

    if (e[1] < e[0]) break;
    n.u = e = e[2];
  }
};

function M(n) {
  return this.getChildContext = function () {
    return n.context;
  }, n.children;
}

function compat_module_T(n) {
  var t = this,
      e = n.i;
  t.componentWillUnmount = function () {
    (0,external_commonjs_preact_commonjs2_preact_amd_preact_root_.render)(null, t.l), t.l = null, t.i = null;
  }, t.i && t.i !== e && t.componentWillUnmount(), n.__v ? (t.l || (t.i = e, t.l = {
    nodeType: 1,
    parentNode: e,
    childNodes: [],
    appendChild: function (n) {
      this.childNodes.push(n), t.i.appendChild(n);
    },
    insertBefore: function (n, e) {
      this.childNodes.push(n), t.i.appendChild(n);
    },
    removeChild: function (n) {
      this.childNodes.splice(this.childNodes.indexOf(n) >>> 1, 1), t.i.removeChild(n);
    }
  }), (0,external_commonjs_preact_commonjs2_preact_amd_preact_root_.render)((0,external_commonjs_preact_commonjs2_preact_amd_preact_root_.createElement)(M, {
    context: t.context
  }, n.__v), t.l)) : t.l && t.componentWillUnmount();
}

function compat_module_j(n, t) {
  return (0,external_commonjs_preact_commonjs2_preact_amd_preact_root_.createElement)(compat_module_T, {
    __v: n,
    i: t
  });
}

(D.prototype = new external_commonjs_preact_commonjs2_preact_amd_preact_root_.Component()).__e = function (n) {
  var t = this,
      e = L(t.__v),
      r = t.o.get(n);
  return r[0]++, function (u) {
    var o = function () {
      t.props.revealOrder ? (r.push(u), compat_module_F(t, n, r)) : u();
    };

    e ? e(o) : o();
  };
}, D.prototype.render = function (n) {
  this.u = null, this.o = new Map();
  var t = (0,external_commonjs_preact_commonjs2_preact_amd_preact_root_.toChildArray)(n.children);
  n.revealOrder && "b" === n.revealOrder[0] && t.reverse();

  for (var e = t.length; e--;) this.o.set(t[e], this.u = [1, 0, this.u]);

  return n.children;
}, D.prototype.componentDidUpdate = D.prototype.componentDidMount = function () {
  var n = this;
  this.o.forEach(function (t, e) {
    compat_module_F(n, e, t);
  });
};

var I = "undefined" != typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103,
    W = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|fill|flood|font|glyph(?!R)|horiz|marker(?!H|W|U)|overline|paint|stop|strikethrough|stroke|text(?!L)|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,
    P = function (n) {
  return ("undefined" != typeof Symbol && "symbol" == typeof Symbol() ? /fil|che|rad/i : /fil|che|ra/i).test(n);
};

function V(n, t, e) {
  return null == t.__k && (t.textContent = ""), (0,external_commonjs_preact_commonjs2_preact_amd_preact_root_.render)(n, t), "function" == typeof e && e(), n ? n.__c : null;
}

function z(n, t, e) {
  return (0,external_commonjs_preact_commonjs2_preact_amd_preact_root_.hydrate)(n, t), "function" == typeof e && e(), n ? n.__c : null;
}

external_commonjs_preact_commonjs2_preact_amd_preact_root_.Component.prototype.isReactComponent = {}, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(function (n) {
  Object.defineProperty(external_commonjs_preact_commonjs2_preact_amd_preact_root_.Component.prototype, n, {
    configurable: !0,
    get: function () {
      return this["UNSAFE_" + n];
    },
    set: function (t) {
      Object.defineProperty(this, n, {
        configurable: !0,
        writable: !0,
        value: t
      });
    }
  });
});
var B = external_commonjs_preact_commonjs2_preact_amd_preact_root_.options.event;

function H() {}

function Z() {
  return this.cancelBubble;
}

function Y() {
  return this.defaultPrevented;
}

external_commonjs_preact_commonjs2_preact_amd_preact_root_.options.event = function (n) {
  return B && (n = B(n)), n.persist = H, n.isPropagationStopped = Z, n.isDefaultPrevented = Y, n.nativeEvent = n;
};

var $,
    compat_module_q = {
  configurable: !0,
  get: function () {
    return this.class;
  }
},
    G = external_commonjs_preact_commonjs2_preact_amd_preact_root_.options.vnode;

external_commonjs_preact_commonjs2_preact_amd_preact_root_.options.vnode = function (n) {
  var t = n.type,
      e = n.props,
      r = e;

  if ("string" == typeof t) {
    for (var u in r = {}, e) {
      var o = e[u];
      "value" === u && "defaultValue" in e && null == o || ("defaultValue" === u && "value" in e && null == e.value ? u = "value" : "download" === u && !0 === o ? o = "" : /ondoubleclick/i.test(u) ? u = "ondblclick" : /^onchange(textarea|input)/i.test(u + t) && !P(e.type) ? u = "oninput" : /^on(Ani|Tra|Tou|BeforeInp)/.test(u) ? u = u.toLowerCase() : W.test(u) ? u = u.replace(/[A-Z0-9]/, "-$&").toLowerCase() : null === o && (o = void 0), r[u] = o);
    }

    "select" == t && r.multiple && Array.isArray(r.value) && (r.value = (0,external_commonjs_preact_commonjs2_preact_amd_preact_root_.toChildArray)(e.children).forEach(function (n) {
      n.props.selected = -1 != r.value.indexOf(n.props.value);
    })), "select" == t && null != r.defaultValue && (r.value = (0,external_commonjs_preact_commonjs2_preact_amd_preact_root_.toChildArray)(e.children).forEach(function (n) {
      n.props.selected = r.multiple ? -1 != r.defaultValue.indexOf(n.props.value) : r.defaultValue == n.props.value;
    })), n.props = r;
  }

  t && e.class != e.className && (compat_module_q.enumerable = "className" in e, null != e.className && (r.class = e.className), Object.defineProperty(r, "className", compat_module_q)), n.$$typeof = I, G && G(n);
};

var J = external_commonjs_preact_commonjs2_preact_amd_preact_root_.options.__r;

external_commonjs_preact_commonjs2_preact_amd_preact_root_.options.__r = function (n) {
  J && J(n), $ = n.__c;
};

var K = {
  ReactCurrentDispatcher: {
    current: {
      readContext: function (n) {
        return $.__n[n.__c].props.value;
      }
    }
  }
},
    Q = 1,
    X = 2,
    nn = 3,
    tn = 4,
    en = 5;

function rn(n, t) {
  return t();
}

var un = "object" == typeof performance && "function" == typeof performance.now ? performance.now.bind(performance) : function () {
  return Date.now();
},
    on = "16.8.0";

function ln(n) {
  return external_commonjs_preact_commonjs2_preact_amd_preact_root_.createElement.bind(null, n);
}

function fn(n) {
  return !!n && n.$$typeof === I;
}

function cn(n) {
  return fn(n) ? external_commonjs_preact_commonjs2_preact_amd_preact_root_.cloneElement.apply(null, arguments) : n;
}

function an(n) {
  return !!n.__k && ((0,external_commonjs_preact_commonjs2_preact_amd_preact_root_.render)(null, n), !0);
}

function sn(n) {
  return n && (n.base || 1 === n.nodeType && n) || null;
}

var hn = function (n, t) {
  return n(t);
},
    pn = external_commonjs_preact_commonjs2_preact_amd_preact_root_.Fragment;

/* harmony default export */ const compat_module = ({
  useState: l,
  useReducer: p,
  useEffect: y,
  useLayoutEffect: h,
  useRef: s,
  useImperativeHandle: _,
  useMemo: d,
  useCallback: A,
  useContext: F,
  useDebugValue: T,
  version: "16.8.0",
  Children: compat_module_k,
  render: V,
  hydrate: z,
  unmountComponentAtNode: an,
  createPortal: compat_module_j,
  createElement: external_commonjs_preact_commonjs2_preact_amd_preact_root_.createElement,
  createContext: external_commonjs_preact_commonjs2_preact_amd_preact_root_.createContext,
  createFactory: ln,
  cloneElement: cn,
  createRef: external_commonjs_preact_commonjs2_preact_amd_preact_root_.createRef,
  Fragment: external_commonjs_preact_commonjs2_preact_amd_preact_root_.Fragment,
  isValidElement: fn,
  findDOMNode: sn,
  Component: external_commonjs_preact_commonjs2_preact_amd_preact_root_.Component,
  PureComponent: E,
  memo: compat_module_g,
  forwardRef: compat_module_x,
  unstable_batchedUpdates: hn,
  StrictMode: external_commonjs_preact_commonjs2_preact_amd_preact_root_.Fragment,
  Suspense: O,
  SuspenseList: D,
  lazy: U,
  __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: K
});

// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(838);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);
;// CONCATENATED MODULE: ./node_modules/@reach/utils/can-use-dom/dist/reach-utils-can-use-dom.esm.js
function canUseDOM() {
  return !!(typeof window !== "undefined" && window.document && window.document.createElement);
}


;// CONCATENATED MODULE: ./node_modules/@reach/utils/use-isomorphic-layout-effect/dist/reach-utils-use-isomorphic-layout-effect.esm.js


/**
 * React currently throws a warning when using useLayoutEffect on the server. To
 * get around it, we can conditionally useEffect on the server (no-op) and
 * useLayoutEffect in the browser. We occasionally need useLayoutEffect to
 * ensure we don't get a render flash for certain operations, but we may also
 * need affected components to render on the server. One example is when setting
 * a component's descendants to retrieve their index values.
 *
 * Important to note that using this hook as an escape hatch will break the
 * eslint dependency warnings unless you rename the import to `useLayoutEffect`.
 * Use sparingly only when the effect won't effect the rendered HTML to avoid
 * any server/client mismatch.
 *
 * If a useLayoutEffect is needed and the result would create a mismatch, it's
 * likely that the component in question shouldn't be rendered on the server at
 * all, so a better approach would be to lazily render those in a parent
 * component after client-side hydration.
 *
 * https://gist.github.com/gaearon/e7d97cdf38a2907924ea12e4ebdf3c85
 * https://github.com/reduxjs/react-redux/blob/master/src/utils/useIsomorphicLayoutEffect.js
 *
 * @param effect
 * @param deps
 */

var reach_utils_use_isomorphic_layout_effect_esm_useIsomorphicLayoutEffect = /*#__PURE__*/canUseDOM() ? h : y;

;// CONCATENATED MODULE: ./node_modules/@reach/auto-id/dist/reach-auto-id.esm.js


/*
 * Welcome to @reach/auto-id!

 * Let's see if we can make sense of why this hook exists and its
 * implementation.
 *
 * Some background:
 *   1. Accessibiliy APIs rely heavily on element IDs
 *   2. Requiring developers to put IDs on every element in Reach UI is both
 *      cumbersome and error-prone
 *   3. With a component model, we can generate IDs for them!
 *
 * Solution 1: Generate random IDs.
 *
 * This works great as long as you don't server render your app. When React (in
 * the client) tries to reuse the markup from the server, the IDs won't match
 * and React will then recreate the entire DOM tree.
 *
 * Solution 2: Increment an integer
 *
 * This sounds great. Since we're rendering the exact same tree on the server
 * and client, we can increment a counter and get a deterministic result between
 * client and server. Also, JS integers can go up to nine-quadrillion. I'm
 * pretty sure the tab will be closed before an app never needs
 * 10 quadrillion IDs!
 *
 * Problem solved, right?
 *
 * Ah, but there's a catch! React's concurrent rendering makes this approach
 * non-deterministic. While the client and server will end up with the same
 * elements in the end, depending on suspense boundaries (and possibly some user
 * input during the initial render) the incrementing integers won't always match
 * up.
 *
 * Solution 3: Don't use IDs at all on the server; patch after first render.
 *
 * What we've done here is solution 2 with some tricks. With this approach, the
 * ID returned is an empty string on the first render. This way the server and
 * client have the same markup no matter how wild the concurrent rendering may
 * have gotten.
 *
 * After the render, we patch up the components with an incremented ID. This
 * causes a double render on any components with `useId`. Shouldn't be a problem
 * since the components using this hook should be small, and we're only updating
 * the ID attribute on the DOM, nothing big is happening.
 *
 * It doesn't have to be an incremented number, though--we could do generate
 * random strings instead, but incrementing a number is probably the cheapest
 * thing we can do.
 *
 * Additionally, we only do this patchup on the very first client render ever.
 * Any calls to `useId` that happen dynamically in the client will be
 * populated immediately with a value. So, we only get the double render after
 * server hydration and never again, SO BACK OFF ALRIGHT?
 */

var serverHandoffComplete = false;
var id = 0;

var genId = function genId() {
  return ++id;
};
/**
 * useId
 *
 * Autogenerate IDs to facilitate WAI-ARIA and server rendering.
 *
 * Note: The returned ID will initially be `null` and will update after a
 * component mounts. Users may need to supply their own ID if they need
 * consistent values for SSR.
 *
 * @see Docs https://reach.tech/auto-id
 */


function reach_auto_id_esm_useId(idFromProps) {
  /*
   * If this instance isn't part of the initial render, we don't have to do the
   * double render/patch-up dance. We can just generate the ID and return it.
   */
  var initialId = idFromProps || (serverHandoffComplete ? genId() : null);

  var _React$useState = l(initialId),
      id = _React$useState[0],
      setId = _React$useState[1];

  reach_utils_use_isomorphic_layout_effect_esm_useIsomorphicLayoutEffect(function () {
    if (id === null) {
      /*
       * Patch the ID after render. We do this in `useLayoutEffect` to avoid any
       * rendering flicker, though it'll make the first render slower (unlikely
       * to matter, but you're welcome to measure your app and let us know if
       * it's a problem).
       */
      setId(genId());
    } // eslint-disable-next-line react-hooks/exhaustive-deps

  }, []);
  y(function () {
    if (serverHandoffComplete === false) {
      /*
       * Flag all future uses of `useId` to skip the update dance. This is in
       * `useEffect` because it goes after `useLayoutEffect`, ensuring we don't
       * accidentally bail out of the patch-up dance prematurely.
       */
      serverHandoffComplete = true;
    }
  }, []);
  return id != null ? String(id) : undefined;
}


;// CONCATENATED MODULE: ./node_modules/@reach/utils/use-force-update/dist/reach-utils-use-force-update.esm.js

/**
 * Forces a re-render, similar to `forceUpdate` in class components.
 */

function useForceUpdate() {
  var _useState = l(Object.create(null)),
      dispatch = _useState[1];

  return A(function () {
    dispatch(Object.create(null));
  }, []);
}


;// CONCATENATED MODULE: ./node_modules/@reach/portal/dist/reach-portal.esm.js




/**
 * Welcome to @reach/portal!
 *
 * Creates and appends a DOM node to the end of `document.body` and renders a
 * React tree into it. Useful for rendering a natural React element hierarchy
 * with a different DOM hierarchy to prevent parent styles from clipping or
 * hiding content (for popovers, dropdowns, and modals).
 *
 * @see Docs   https://reach.tech/portal
 * @see Source https://github.com/reach/reach-ui/tree/main/packages/portal
 * @see React  https://reactjs.org/docs/portals.html
 */

/**
 * Portal
 *
 * @see Docs https://reach.tech/portal#portal
 */

var Portal = function Portal(_ref) {
  var children = _ref.children,
      _ref$type = _ref.type,
      type = _ref$type === void 0 ? "reach-portal" : _ref$type;
  var mountNode = s(null);
  var portalNode = s(null);
  var forceUpdate = useForceUpdate();
  reach_utils_use_isomorphic_layout_effect_esm_useIsomorphicLayoutEffect(function () {
    // This ref may be null when a hot-loader replaces components on the page
    if (!mountNode.current) return; // It's possible that the content of the portal has, itself, been portaled.
    // In that case, it's important to append to the correct document element.

    var ownerDocument = mountNode.current.ownerDocument;
    portalNode.current = ownerDocument == null ? void 0 : ownerDocument.createElement(type);
    ownerDocument.body.appendChild(portalNode.current);
    forceUpdate();
    return function () {
      if (portalNode.current && portalNode.current.ownerDocument) {
        portalNode.current.ownerDocument.body.removeChild(portalNode.current);
      }
    };
  }, [type, forceUpdate]);
  return portalNode.current ? /*#__PURE__*/compat_module_j(children, portalNode.current) : /*#__PURE__*/(0,external_commonjs_preact_commonjs2_preact_amd_preact_root_.createElement)("span", {
    ref: mountNode
  });
};
/**
 * @see Docs https://reach.tech/portal#portal-props
 */


if (false) {} ////////////////////////////////////////////////////////////////////////////////


/* harmony default export */ const reach_portal_esm = ((/* unused pure expression or super */ null && (Portal)));

;// CONCATENATED MODULE: ./node_modules/@reach/observe-rect/dist/observe-rect.esm.js
var props = ["bottom", "height", "left", "right", "top", "width"];

var rectChanged = function rectChanged(a, b) {
  if (a === void 0) {
    a = {};
  }

  if (b === void 0) {
    b = {};
  }

  return props.some(function (prop) {
    return a[prop] !== b[prop];
  });
};

var observedNodes = /*#__PURE__*/new Map();
var rafId;

var run = function run() {
  var changedStates = [];
  observedNodes.forEach(function (state, node) {
    var newRect = node.getBoundingClientRect();

    if (rectChanged(newRect, state.rect)) {
      state.rect = newRect;
      changedStates.push(state);
    }
  });
  changedStates.forEach(function (state) {
    state.callbacks.forEach(function (cb) {
      return cb(state.rect);
    });
  });
  rafId = window.requestAnimationFrame(run);
};

function observeRect(node, cb) {
  return {
    observe: function observe() {
      var wasEmpty = observedNodes.size === 0;

      if (observedNodes.has(node)) {
        observedNodes.get(node).callbacks.push(cb);
      } else {
        observedNodes.set(node, {
          rect: undefined,
          hasRectChanged: false,
          callbacks: [cb]
        });
      }

      if (wasEmpty) run();
    },
    unobserve: function unobserve() {
      var state = observedNodes.get(node);

      if (state) {
        // Remove the callback
        var index = state.callbacks.indexOf(cb);
        if (index >= 0) state.callbacks.splice(index, 1); // Remove the node reference

        if (!state.callbacks.length) observedNodes["delete"](node); // Stop the loop

        if (!observedNodes.size) cancelAnimationFrame(rafId);
      }
    }
  };
}

/* harmony default export */ const observe_rect_esm = (observeRect);
;// CONCATENATED MODULE: ./node_modules/@reach/utils/type-check/dist/reach-utils-type-check.esm.js
/**
 * Checks whether or not a value is a boolean.
 *
 * @param value
 */
function isBoolean(value) {
  return typeof value === "boolean";
}
/**
 * Checks whether or not a value is a function.
 *
 * @param value
 */


function reach_utils_type_check_esm_isFunction(value) {
  // eslint-disable-next-line eqeqeq
  return !!(value && {}.toString.call(value) == "[object Function]");
}
/**
 * Checks whether or not a value is a number.
 *
 * @param value
 */


function isNumber(value) {
  return typeof value === "number" && !isNaN(value);
}
/**
 * Checks whether or not a value is a string.
 *
 * @param value
 */


function isString(value) {
  return typeof value === "string";
}


;// CONCATENATED MODULE: ./node_modules/@reach/rect/dist/reach-rect.esm.js






/**
 * Welcome to @reach/rect!
 *
 * Measures DOM elements (aka. bounding client rect).
 *
 * @see getBoundingClientRect https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect
 * @see Docs                  https://reach.tech/rect
 * @see Source                https://github.com/reach/reach-ui/tree/main/packages/rect
 */

/**
 * Rect
 *
 * @param props
 */

var Rect = function Rect(_ref) {
  var onChange = _ref.onChange,
      _ref$observe = _ref.observe,
      observe = _ref$observe === void 0 ? true : _ref$observe,
      children = _ref.children;
  var ref = useRef(null);
  var rect = useRect(ref, {
    observe: observe,
    onChange: onChange
  });
  return children({
    ref: ref,
    rect: rect
  });
};
/**
 * @see Docs https://reach.tech/rect#rect-props
 */


if (false) {} ////////////////////////////////////////////////////////////////////////////////

/**
 * useRect
 *
 * @param nodeRef
 * @param observe
 * @param onChange
 */


function useRect(nodeRef, observeOrOptions, deprecated_onChange) {
  var observe;
  var onChange;

  if (isBoolean(observeOrOptions)) {
    observe = observeOrOptions;
  } else {
    var _observeOrOptions$obs;

    observe = (_observeOrOptions$obs = observeOrOptions == null ? void 0 : observeOrOptions.observe) != null ? _observeOrOptions$obs : true;
    onChange = observeOrOptions == null ? void 0 : observeOrOptions.onChange;
  }

  if (reach_utils_type_check_esm_isFunction(deprecated_onChange)) {
    onChange = deprecated_onChange;
  }

  if (false) {}

  var _React$useState = l(nodeRef.current),
      element = _React$useState[0],
      setElement = _React$useState[1];

  var initialRectIsSet = s(false);
  var initialRefIsSet = s(false);

  var _React$useState2 = l(null),
      rect = _React$useState2[0],
      setRect = _React$useState2[1];

  var onChangeRef = s(onChange);
  var stableOnChange = A(function (rect) {
    onChangeRef.current && onChangeRef.current(rect);
  }, []); // eslint-disable-next-line react-hooks/exhaustive-deps

  reach_utils_use_isomorphic_layout_effect_esm_useIsomorphicLayoutEffect(function () {
    onChangeRef.current = onChange;

    if (nodeRef.current !== element) {
      setElement(nodeRef.current);
    }
  });
  reach_utils_use_isomorphic_layout_effect_esm_useIsomorphicLayoutEffect(function () {
    if (element && !initialRectIsSet.current) {
      initialRectIsSet.current = true;
      setRect(element.getBoundingClientRect());
    }
  }, [element]);
  reach_utils_use_isomorphic_layout_effect_esm_useIsomorphicLayoutEffect(function () {
    var observer;
    var elem = element; // State initializes before refs are placed, meaning the element state will
    // be undefined on the first render. We still want the rect on the first
    // render, so initially we'll use the nodeRef that was passed instead of
    // state for our measurements.

    if (!initialRefIsSet.current) {
      initialRefIsSet.current = true;
      elem = nodeRef.current;
    }

    if (!elem) {
      if (false) {}

      return cleanup;
    }

    observer = observe_rect_esm(elem, function (rect) {
      stableOnChange(rect);
      setRect(rect);
    });
    observe && observer.observe();
    return cleanup;

    function cleanup() {
      observer && observer.unobserve();
    }
  }, [observe, element, nodeRef, stableOnChange]);
  return rect;
}

/* harmony default export */ const reach_rect_esm = ((/* unused pure expression or super */ null && (Rect)));

;// CONCATENATED MODULE: ./node_modules/@reach/utils/owner-document/dist/reach-utils-owner-document.esm.js

/**
 * Get an element's owner document. Useful when components are used in iframes
 * or other environments like dev tools.
 *
 * @param element
 */

function getOwnerDocument(element) {
  return canUseDOM() ? element ? element.ownerDocument : document : null;
}
/**
 * TODO: Remove in 1.0
 */


function getOwnerWindow(element) {
  var ownerDocument = getOwnerDocument(element);
  return ownerDocument ? ownerDocument.defaultView || window : null;
}


;// CONCATENATED MODULE: ./node_modules/@reach/utils/compose-refs/dist/reach-utils-compose-refs.esm.js



function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _createForOfIteratorHelperLoose(o, allowArrayLike) {
  var it;

  if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
    if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
      if (it) o = it;
      var i = 0;
      return function () {
        if (i >= o.length) return {
          done: true
        };
        return {
          done: false,
          value: o[i++]
        };
      };
    }

    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  it = o[Symbol.iterator]();
  return it.next.bind(it);
}
/**
 * Passes or assigns an arbitrary value to a ref function or object.
 *
 * @param ref
 * @param value
 */


function assignRef(ref, value) {
  if (ref == null) return;

  if (reach_utils_type_check_esm_isFunction(ref)) {
    ref(value);
  } else {
    try {
      ref.current = value;
    } catch (error) {
      throw new Error("Cannot assign value \"" + value + "\" to ref \"" + ref + "\"");
    }
  }
}
/**
 * Passes or assigns a value to multiple refs (typically a DOM node). Useful for
 * dealing with components that need an explicit ref for DOM calculations but
 * also forwards refs assigned by an app.
 *
 * @param refs Refs to fork
 */


function useComposedRefs() {
  for (var _len = arguments.length, refs = new Array(_len), _key = 0; _key < _len; _key++) {
    refs[_key] = arguments[_key];
  }

  return A(function (node) {
    for (var _iterator = _createForOfIteratorHelperLoose(refs), _step; !(_step = _iterator()).done;) {
      var ref = _step.value;
      assignRef(ref, node);
    } // eslint-disable-next-line react-hooks/exhaustive-deps

  }, refs);
}


// EXTERNAL MODULE: ./node_modules/tabbable/index.js
var tabbable = __webpack_require__(453);
var tabbable_default = /*#__PURE__*/__webpack_require__.n(tabbable);
;// CONCATENATED MODULE: ./node_modules/@reach/popover/dist/reach-popover.esm.js







function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
} ////////////////////////////////////////////////////////////////////////////////

/**
 * Popover
 */


var Popover = /*#__PURE__*/compat_module_x(function Popover(props, ref) {
  return /*#__PURE__*/(0,external_commonjs_preact_commonjs2_preact_amd_preact_root_.createElement)(Portal, null, /*#__PURE__*/(0,external_commonjs_preact_commonjs2_preact_amd_preact_root_.createElement)(PopoverImpl, _extends({
    ref: ref
  }, props)));
});

if (false) {} ////////////////////////////////////////////////////////////////////////////////

/**
 * PopoverImpl
 *
 * Popover is conditionally rendered so we can't start measuring until it shows
 * up, so useRect needs to live down here not up in Popover
 */


var PopoverImpl = /*#__PURE__*/compat_module_x(function PopoverImpl(_ref, forwardedRef) {
  var _ref$as = _ref.as,
      Comp = _ref$as === void 0 ? "div" : _ref$as,
      targetRef = _ref.targetRef,
      _ref$position = _ref.position,
      position = _ref$position === void 0 ? positionDefault : _ref$position,
      _ref$unstable_observa = _ref.unstable_observableRefs,
      unstable_observableRefs = _ref$unstable_observa === void 0 ? [] : _ref$unstable_observa,
      props = _objectWithoutPropertiesLoose(_ref, ["as", "targetRef", "position", "unstable_observableRefs"]);

  var popoverRef = s(null);
  var popoverRect = useRect(popoverRef, {
    observe: !props.hidden
  });
  var targetRect = useRect(targetRef, {
    observe: !props.hidden
  });
  var ref = useComposedRefs(popoverRef, forwardedRef);
  useSimulateTabNavigationForReactTree(targetRef, popoverRef);
  return /*#__PURE__*/(0,external_commonjs_preact_commonjs2_preact_amd_preact_root_.createElement)(Comp, _extends({
    "data-reach-popover": "",
    ref: ref
  }, props, {
    style: _extends({
      position: "absolute"
    }, getStyles.apply(void 0, [position, targetRect, popoverRect].concat(unstable_observableRefs)), props.style)
  }));
});

if (false) {} ////////////////////////////////////////////////////////////////////////////////


function getStyles(position, targetRect, popoverRect) {
  for (var _len = arguments.length, unstable_observableRefs = new Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {
    unstable_observableRefs[_key - 3] = arguments[_key];
  }

  return popoverRect ? position.apply(void 0, [targetRect, popoverRect].concat(unstable_observableRefs.map(function (ref) {
    return ref.current;
  }))) : {
    visibility: "hidden"
  };
}

function getTopPosition(targetRect, popoverRect, isDirectionUp) {
  return {
    top: isDirectionUp ? targetRect.top - popoverRect.height + window.pageYOffset + "px" : targetRect.top + targetRect.height + window.pageYOffset + "px"
  };
}

var positionDefault = function positionDefault(targetRect, popoverRect) {
  if (!targetRect || !popoverRect) {
    return {};
  }

  var _getCollisions = getCollisions(targetRect, popoverRect),
      directionRight = _getCollisions.directionRight,
      directionUp = _getCollisions.directionUp;

  return _extends({
    left: directionRight ? targetRect.right - popoverRect.width + window.pageXOffset + "px" : targetRect.left + window.pageXOffset + "px"
  }, getTopPosition(targetRect, popoverRect, directionUp));
};

var positionRight = function positionRight(targetRect, popoverRect) {
  if (!targetRect || !popoverRect) {
    return {};
  }

  var _getCollisions2 = getCollisions(targetRect, popoverRect),
      directionLeft = _getCollisions2.directionLeft,
      directionUp = _getCollisions2.directionUp;

  return _extends({
    left: directionLeft ? targetRect.left + window.pageXOffset + "px" : targetRect.right - popoverRect.width + window.pageXOffset + "px"
  }, getTopPosition(targetRect, popoverRect, directionUp));
};

var positionMatchWidth = function positionMatchWidth(targetRect, popoverRect) {
  if (!targetRect || !popoverRect) {
    return {};
  }

  var _getCollisions3 = getCollisions(targetRect, popoverRect),
      directionUp = _getCollisions3.directionUp;

  return _extends({
    width: targetRect.width,
    left: targetRect.left
  }, getTopPosition(targetRect, popoverRect, directionUp));
};

function getCollisions(targetRect, popoverRect, offsetLeft, offsetBottom) {
  if (offsetLeft === void 0) {
    offsetLeft = 0;
  }

  if (offsetBottom === void 0) {
    offsetBottom = 0;
  }

  var collisions = {
    top: targetRect.top - popoverRect.height < 0,
    right: window.innerWidth < targetRect.left + popoverRect.width - offsetLeft,
    bottom: window.innerHeight < targetRect.bottom + popoverRect.height - offsetBottom,
    left: targetRect.left + targetRect.width - popoverRect.width < 0
  };
  var directionRight = collisions.right && !collisions.left;
  var directionLeft = collisions.left && !collisions.right;
  var directionUp = collisions.bottom && !collisions.top;
  var directionDown = collisions.top && !collisions.bottom;
  return {
    directionRight: directionRight,
    directionLeft: directionLeft,
    directionUp: directionUp,
    directionDown: directionDown
  };
} // Heads up, my jQuery past haunts this function. This hook scopes the tab
// order to the React element tree, instead of the DOM tree. This way, when the
// user navigates with tab from the targetRef, the tab order moves into the
// popup, and then out of the popup back to the rest of the document.
// (We call targetRef, triggerRef inside this function to avoid confusion with
// event.target)


function useSimulateTabNavigationForReactTree(triggerRef, popoverRef) {
  var ownerDocument = getOwnerDocument(triggerRef.current);

  function handleKeyDown(event) {
    if (event.key === "Tab" && popoverRef.current && tabbable_default()(popoverRef.current).length === 0) {
      return;
    }

    if (event.key === "Tab" && event.shiftKey) {
      if (shiftTabbedFromElementAfterTrigger(event)) {
        focusLastTabbableInPopover(event);
      } else if (shiftTabbedOutOfPopover(event)) {
        focusTriggerRef(event);
      } else if (shiftTabbedToBrowserChrome(event)) {
        disableTabbablesInPopover();
      }
    } else if (event.key === "Tab") {
      if (tabbedFromTriggerToPopover()) {
        focusFirstPopoverTabbable(event);
      } else if (tabbedOutOfPopover()) {
        focusTabbableAfterTrigger(event);
      } else if (tabbedToBrowserChrome(event)) {
        disableTabbablesInPopover();
      }
    }
  }

  y(function () {
    ownerDocument.addEventListener("keydown", handleKeyDown);
    return function () {
      ownerDocument.removeEventListener("keydown", handleKeyDown);
    }; // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function getElementAfterTrigger() {
    var elements = tabbable_default()(ownerDocument);
    var targetIndex = elements && triggerRef.current ? elements.indexOf(triggerRef.current) : -1;
    var elementAfterTrigger = elements && elements[targetIndex + 1];
    return popoverRef.current && popoverRef.current.contains(elementAfterTrigger || null) ? false : elementAfterTrigger;
  }

  function tabbedFromTriggerToPopover() {
    return triggerRef.current ? triggerRef.current === ownerDocument.activeElement : false;
  }

  function focusFirstPopoverTabbable(event) {
    var elements = popoverRef.current && tabbable_default()(popoverRef.current);

    if (elements && elements[0]) {
      event.preventDefault();
      elements[0].focus();
    }
  }

  function tabbedOutOfPopover() {
    var inPopover = popoverRef.current ? popoverRef.current.contains(ownerDocument.activeElement || null) : false;

    if (inPopover) {
      var elements = popoverRef.current && tabbable_default()(popoverRef.current);
      return Boolean(elements && elements[elements.length - 1] === ownerDocument.activeElement);
    }

    return false;
  }

  function focusTabbableAfterTrigger(event) {
    var elementAfterTrigger = getElementAfterTrigger();

    if (elementAfterTrigger) {
      event.preventDefault();
      elementAfterTrigger.focus();
    }
  }

  function shiftTabbedFromElementAfterTrigger(event) {
    if (!event.shiftKey) return;
    var elementAfterTrigger = getElementAfterTrigger();
    return event.target === elementAfterTrigger;
  }

  function focusLastTabbableInPopover(event) {
    var elements = popoverRef.current && tabbable_default()(popoverRef.current);
    var last = elements && elements[elements.length - 1];

    if (last) {
      event.preventDefault();
      last.focus();
    }
  }

  function shiftTabbedOutOfPopover(event) {
    var elements = popoverRef.current && tabbable_default()(popoverRef.current);

    if (elements) {
      return elements.length === 0 ? false : event.target === elements[0];
    }

    return false;
  }

  function focusTriggerRef(event) {
    var _triggerRef$current;

    event.preventDefault();
    (_triggerRef$current = triggerRef.current) == null ? void 0 : _triggerRef$current.focus();
  }

  function tabbedToBrowserChrome(event) {
    var elements = popoverRef.current ? tabbable_default()(ownerDocument).filter(function (element) {
      return !popoverRef.current.contains(element);
    }) : null;
    return elements ? event.target === elements[elements.length - 1] : false;
  }

  function shiftTabbedToBrowserChrome(event) {
    // we're assuming the popover will never contain the first tabbable
    // element, and it better not, because the trigger needs to be tabbable!
    return event.target === tabbable_default()(ownerDocument)[0];
  }

  var restoreTabIndexTuplés = [];

  function disableTabbablesInPopover() {
    var elements = popoverRef.current && tabbable_default()(popoverRef.current);

    if (elements) {
      elements.forEach(function (element) {
        restoreTabIndexTuplés.push([element, element.tabIndex]);
        element.tabIndex = -1;
      });
      ownerDocument.addEventListener("focusin", enableTabbablesInPopover);
    }
  }

  function enableTabbablesInPopover() {
    ownerDocument.removeEventListener("focusin", enableTabbablesInPopover);
    restoreTabIndexTuplés.forEach(function (_ref2) {
      var element = _ref2[0],
          tabIndex = _ref2[1];
      element.tabIndex = tabIndex;
    });
  }
} ////////////////////////////////////////////////////////////////////////////////


/* harmony default export */ const reach_popover_esm = ((/* unused pure expression or super */ null && (Popover)));

;// CONCATENATED MODULE: ./node_modules/@reach/utils/use-previous/dist/reach-utils-use-previous.esm.js

/**
 * Returns the previous value of a reference after a component update.
 *
 * @param value
 */

function usePrevious(value) {
  var ref = s(null);
  y(function () {
    ref.current = value;
  }, [value]);
  return ref.current;
}


;// CONCATENATED MODULE: ./node_modules/@reach/utils/context/dist/reach-utils-context.esm.js


function createNamedContext(name, defaultValue) {
  var Ctx = /*#__PURE__*/(0,external_commonjs_preact_commonjs2_preact_amd_preact_root_.createContext)(defaultValue);

  if (false) {}

  return Ctx;
}


;// CONCATENATED MODULE: ./node_modules/@reach/utils/noop/dist/reach-utils-noop.esm.js
function reach_utils_noop_esm_noop() {}


;// CONCATENATED MODULE: ./node_modules/@reach/descendants/dist/reach-descendants.esm.js







function reach_descendants_esm_objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function reach_descendants_esm_extends() {
  reach_descendants_esm_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return reach_descendants_esm_extends.apply(this, arguments);
}

function createDescendantContext(name, initialValue) {
  if (initialValue === void 0) {
    initialValue = {};
  }

  var descendants = [];
  return createNamedContext(name, reach_descendants_esm_extends({
    descendants: descendants,
    registerDescendant: reach_utils_noop_esm_noop,
    unregisterDescendant: reach_utils_noop_esm_noop
  }, initialValue));
}
/**
 * This hook registers our descendant by passing it into an array. We can then
 * search that array by to find its index when registering it in the component.
 * We use this for focus management, keyboard navigation, and typeahead
 * functionality for some components.
 *
 * The hook accepts the element node and (optionally) a key. The key is useful
 * if multiple descendants have identical text values and we need to
 * differentiate siblings for some reason.
 *
 * Our main goals with this are:
 *   1) maximum composability,
 *   2) minimal API friction
 *   3) SSR compatibility*
 *   4) concurrent safe
 *   5) index always up-to-date with the tree despite changes
 *   6) works with memoization of any component in the tree (hopefully)
 *
 * * As for SSR, the good news is that we don't actually need the index on the
 * server for most use-cases, as we are only using it to determine the order of
 * composed descendants for keyboard navigation. However, in the few cases where
 * this is not the case, we can require an explicit index from the app.
 */


function useDescendant(descendant, context, indexProp) {
  var forceUpdate = useForceUpdate();

  var _React$useContext = F(context),
      registerDescendant = _React$useContext.registerDescendant,
      unregisterDescendant = _React$useContext.unregisterDescendant,
      descendants = _React$useContext.descendants; // This will initially return -1 because we haven't registered the descendant
  // on the first render. After we register, this will then return the correct
  // index on the following render and we will re-register descendants
  // so that everything is up-to-date before the user interacts with a
  // collection.


  var index = indexProp != null ? indexProp : descendants.findIndex(function (item) {
    return item.element === descendant.element;
  });
  var previousDescendants = usePrevious(descendants); // We also need to re-register descendants any time ANY of the other
  // descendants have changed. My brain was melting when I wrote this and it
  // feels a little off, but checking in render and using the result in the
  // effect's dependency array works well enough.

  var someDescendantsHaveChanged = descendants.some(function (descendant, index) {
    var _previousDescendants$;

    return descendant.element !== (previousDescendants == null ? void 0 : (_previousDescendants$ = previousDescendants[index]) == null ? void 0 : _previousDescendants$.element);
  }); // Prevent any flashing

  reach_utils_use_isomorphic_layout_effect_esm_useIsomorphicLayoutEffect(function () {
    if (!descendant.element) forceUpdate();
    registerDescendant(reach_descendants_esm_extends({}, descendant, {
      index: index
    }));
    return function () {
      return unregisterDescendant(descendant.element);
    }; // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [forceUpdate, index, registerDescendant, someDescendantsHaveChanged, unregisterDescendant].concat(Object.values(descendant)));
  return index;
}

function useDescendantsInit() {
  return l([]);
}

function useDescendants(ctx) {
  return F(ctx).descendants;
}

function DescendantProvider(_ref) {
  var Ctx = _ref.context,
      children = _ref.children,
      items = _ref.items,
      set = _ref.set;
  var registerDescendant = A(function (_ref2) {
    var element = _ref2.element,
        explicitIndex = _ref2.index,
        rest = reach_descendants_esm_objectWithoutPropertiesLoose(_ref2, ["element", "index"]);

    if (!element) {
      return;
    }

    set(function (items) {
      var newItems;

      if (explicitIndex != null) {
        newItems = [].concat(items, [reach_descendants_esm_extends({}, rest, {
          element: element,
          index: explicitIndex
        })]);
      } else if (items.length === 0) {
        // If there are no items, register at index 0 and bail.
        newItems = [].concat(items, [reach_descendants_esm_extends({}, rest, {
          element: element,
          index: 0
        })]);
      } else if (items.find(function (item) {
        return item.element === element;
      })) {
        // If the element is already registered, just use the same array
        newItems = items;
      } else {
        // When registering a descendant, we need to make sure we insert in
        // into the array in the same order that it appears in the DOM. So as
        // new descendants are added or maybe some are removed, we always know
        // that the array is up-to-date and correct.
        //
        // So here we look at our registered descendants and see if the new
        // element we are adding appears earlier than an existing descendant's
        // DOM node via `node.compareDocumentPosition`. If it does, we insert
        // the new element at this index. Because `registerDescendant` will be
        // called in an effect every time the descendants state value changes,
        // we should be sure that this index is accurate when descendent
        // elements come or go from our component.
        var index = items.findIndex(function (item) {
          if (!item.element || !element) {
            return false;
          } // Does this element's DOM node appear before another item in the
          // array in our DOM tree? If so, return true to grab the index at
          // this point in the array so we know where to insert the new
          // element.


          return Boolean(item.element.compareDocumentPosition(element) & Node.DOCUMENT_POSITION_PRECEDING);
        });

        var newItem = reach_descendants_esm_extends({}, rest, {
          element: element,
          index: index
        }); // If an index is not found we will push the element to the end.


        if (index === -1) {
          newItems = [].concat(items, [newItem]);
        } else {
          newItems = [].concat(items.slice(0, index), [newItem], items.slice(index));
        }
      }

      return newItems.map(function (item, index) {
        return reach_descendants_esm_extends({}, item, {
          index: index
        });
      });
    });
  }, // set is a state setter initialized by the useDescendantsInit hook.
  // We can safely ignore the lint warning here because it will not change
  // between renders.
  // eslint-disable-next-line react-hooks/exhaustive-deps
  []);
  var unregisterDescendant = A(function (element) {
    if (!element) {
      return;
    }

    set(function (items) {
      return items.filter(function (item) {
        return element !== item.element;
      });
    });
  }, // set is a state setter initialized by the useDescendantsInit hook.
  // We can safely ignore the lint warning here because it will not change
  // between renders.
  // eslint-disable-next-line react-hooks/exhaustive-deps
  []);
  return /*#__PURE__*/(0,external_commonjs_preact_commonjs2_preact_amd_preact_root_.createElement)(Ctx.Provider, {
    value: d(function () {
      return {
        descendants: items,
        registerDescendant: registerDescendant,
        unregisterDescendant: unregisterDescendant
      };
    }, [items, registerDescendant, unregisterDescendant])
  }, children);
}
/**
 * Testing this as an abstraction for compound components that use keyboard
 * navigation. Hoping this will help us prevent bugs and mismatched behavior
 * across various components, but it may also prove to be too messy of an
 * abstraction in the end.
 *
 * Currently used in:
 *   - Tabs
 *   - Accordion
 *
 * @param context
 * @param options
 */


function useDescendantKeyDown(context, options) {
  var _React$useContext2 = F(context),
      descendants = _React$useContext2.descendants;

  var callback = options.callback,
      currentIndex = options.currentIndex,
      filter = options.filter,
      _options$key = options.key,
      key = _options$key === void 0 ? "index" : _options$key,
      _options$orientation = options.orientation,
      orientation = _options$orientation === void 0 ? "vertical" : _options$orientation,
      _options$rotate = options.rotate,
      rotate = _options$rotate === void 0 ? true : _options$rotate,
      _options$rtl = options.rtl,
      rtl = _options$rtl === void 0 ? false : _options$rtl;
  return function handleKeyDown(event) {
    if (!["ArrowDown", "ArrowUp", "ArrowLeft", "ArrowRight", "PageUp", "PageDown", "Home", "End"].includes(event.key)) {
      return;
    }

    var index = currentIndex != null ? currentIndex : -1; // If we use a filter function, we need to re-index our descendants array
    // so that filtered descendent elements aren't selected.

    var selectableDescendants = filter ? descendants.filter(filter) : descendants; // Current index should map to the updated array vs. the original
    // descendants array.

    if (filter) {
      index = selectableDescendants.findIndex(function (descendant) {
        return descendant.index === currentIndex;
      });
    } // We need some options for any of this to work!


    if (!selectableDescendants.length) {
      return;
    }

    function getNextOption() {
      var atBottom = index === selectableDescendants.length - 1;
      return atBottom ? rotate ? getFirstOption() : selectableDescendants[index] : selectableDescendants[(index + 1) % selectableDescendants.length];
    }

    function getPreviousOption() {
      var atTop = index === 0;
      return atTop ? rotate ? getLastOption() : selectableDescendants[index] : selectableDescendants[(index - 1 + selectableDescendants.length) % selectableDescendants.length];
    }

    function getFirstOption() {
      return selectableDescendants[0];
    }

    function getLastOption() {
      return selectableDescendants[selectableDescendants.length - 1];
    }

    switch (event.key) {
      case "ArrowDown":
        if (orientation === "vertical" || orientation === "both") {
          event.preventDefault();
          var next = getNextOption();
          callback(key === "option" ? next : next[key]);
        }

        break;

      case "ArrowUp":
        if (orientation === "vertical" || orientation === "both") {
          event.preventDefault();
          var prev = getPreviousOption();
          callback(key === "option" ? prev : prev[key]);
        }

        break;

      case "ArrowLeft":
        if (orientation === "horizontal" || orientation === "both") {
          event.preventDefault();
          var nextOrPrev = (rtl ? getNextOption : getPreviousOption)();
          callback(key === "option" ? nextOrPrev : nextOrPrev[key]);
        }

        break;

      case "ArrowRight":
        if (orientation === "horizontal" || orientation === "both") {
          event.preventDefault();
          var prevOrNext = (rtl ? getPreviousOption : getNextOption)();
          callback(key === "option" ? prevOrNext : prevOrNext[key]);
        }

        break;

      case "PageUp":
        event.preventDefault();
        var prevOrFirst = (event.ctrlKey ? getPreviousOption : getFirstOption)();
        callback(key === "option" ? prevOrFirst : prevOrFirst[key]);
        break;

      case "Home":
        event.preventDefault();
        var first = getFirstOption();
        callback(key === "option" ? first : first[key]);
        break;

      case "PageDown":
        event.preventDefault();
        var nextOrLast = (event.ctrlKey ? getNextOption : getLastOption)();
        callback(key === "option" ? nextOrLast : nextOrLast[key]);
        break;

      case "End":
        event.preventDefault();
        var last = getLastOption();
        callback(key === "option" ? last : last[key]);
        break;
    }
  };
} ////////////////////////////////////////////////////////////////////////////////



;// CONCATENATED MODULE: ./node_modules/@reach/utils/is-right-click/dist/reach-utils-is-right-click.esm.js
/**
 * Detects right clicks
 *
 * @param nativeEvent
 */
function isRightClick(nativeEvent) {
  return "which" in nativeEvent ? nativeEvent.which === 3 : "button" in nativeEvent ? nativeEvent.button === 2 : false;
}


;// CONCATENATED MODULE: ./node_modules/@reach/utils/make-id/dist/reach-utils-make-id.esm.js
/**
 * Joins strings to format IDs for compound components.
 *
 * @param args
 */
function reach_utils_make_id_esm_makeId() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return args.filter(function (val) {
    return val != null;
  }).join("--");
}


;// CONCATENATED MODULE: ./node_modules/@reach/utils/dev-utils/dist/reach-utils-dev-utils.esm.js

/* eslint-disable react-hooks/rules-of-hooks */

var checkedPkgs = {};
/**
 * Just a lil state logger
 *
 * @param state
 * @param DEBUG
 */

function useStateLogger(state, DEBUG) {
  if (DEBUG === void 0) {
    DEBUG = false;
  }

  if (false) { var debugRef; }
}
/**
 * When in dev mode, checks that styles for a given `@reach` package are loaded.
 *
 * @param packageName Name of the package to check.
 * @example checkStyles("dialog") will check for styles for @reach/dialog
 */


function checkStyles(packageName) {
  if (false) { var _ref, environment; }
}
/**
 * When in dev mode, checks that styles for a given `@reach` package are loaded.
 *
 * @param packageName Name of the package to check.
 * @example useCheckStyles("dialog") will check for styles for @reach/dialog
 */


function useCheckStyles(packageName) {
  if (false) { var name; }
}
/**
 * Logs a warning in dev mode when a component switches from controlled to
 * uncontrolled, or vice versa
 *
 * A single prop should typically be used to determine whether or not a
 * component is controlled or not.
 *
 * @param controlledValue
 * @param controlledPropName
 * @param componentName
 */


function useControlledSwitchWarning(controlledValue, controlledPropName, componentName) {
  if (false) { var nameCache, controlledRef; }
}


;// CONCATENATED MODULE: ./node_modules/@reach/utils/compose-event-handlers/dist/reach-utils-compose-event-handlers.esm.js
/**
 * Wraps a lib-defined event handler and a user-defined event handler, returning
 * a single handler that allows a user to prevent lib-defined handlers from
 * firing.
 *
 * @param theirHandler User-supplied event handler
 * @param ourHandler Library-supplied event handler
 */
function composeEventHandlers(theirHandler, ourHandler) {
  return function (event) {
    theirHandler && theirHandler(event);

    if (!event.defaultPrevented) {
      return ourHandler(event);
    }
  };
}


;// CONCATENATED MODULE: ./node_modules/@reach/menu-button/dist/reach-menu-button.esm.js

















function reach_menu_button_esm_extends() {
  reach_menu_button_esm_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return reach_menu_button_esm_extends.apply(this, arguments);
}

function reach_menu_button_esm_objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
} ////////////////////////////////////////////////////////////////////////////////
// Actions


var CLEAR_SELECTION_INDEX = "CLEAR_SELECTION_INDEX";
var CLICK_MENU_ITEM = "CLICK_MENU_ITEM";
var CLOSE_MENU = "CLOSE_MENU";
var OPEN_MENU_AT_FIRST_ITEM = "OPEN_MENU_AT_FIRST_ITEM";
var OPEN_MENU_AT_INDEX = "OPEN_MENU_AT_INDEX";
var OPEN_MENU_CLEARED = "OPEN_MENU_CLEARED";
var SEARCH_FOR_ITEM = "SEARCH_FOR_ITEM";
var SELECT_ITEM_AT_INDEX = "SELECT_ITEM_AT_INDEX";
var SET_BUTTON_ID = "SET_BUTTON_ID";
var MenuDescendantContext = /*#__PURE__*/createDescendantContext("MenuDescendantContext");
var StableMenuContext = /*#__PURE__*/createNamedContext("StableMenuContext", {});
var UnstableMenuContext = /*#__PURE__*/createNamedContext("UnstableMenuContext", {});
var initialState = {
  // The button ID is needed for aria controls and can be set directly and
  // updated for top-level use via context. Otherwise a default is set by useId.
  // TODO: Consider deprecating direct ID in 1.0 in favor of id at the top level
  //       for passing deterministic IDs to descendent components.
  buttonId: null,
  // Whether or not the menu is expanded
  isExpanded: false,
  // When a user begins typing a character string, the selection will change if
  // a matching item is found
  typeaheadQuery: "",
  // The index of the current selected item. When the selection is cleared a
  // value of -1 is used.
  selectionIndex: -1
}; ////////////////////////////////////////////////////////////////////////////////

/**
 * Menu
 *
 * The wrapper component for the other components. No DOM element is rendered.
 *
 * @see Docs https://reach.tech/menu-button#menu
 */

var Menu = function Menu(_ref) {
  var id = _ref.id,
      children = _ref.children;
  var buttonRef = s(null);
  var menuRef = s(null);
  var popoverRef = s(null);

  var _useDescendantsInit = useDescendantsInit(),
      descendants = _useDescendantsInit[0],
      setDescendants = _useDescendantsInit[1];

  var _React$useReducer = p(reducer, initialState),
      state = _React$useReducer[0],
      dispatch = _React$useReducer[1];

  var _id = reach_auto_id_esm_useId(id);

  var menuId = id || reach_utils_make_id_esm_makeId("menu", _id); // We use an event listener attached to the window to capture outside clicks
  // that close the menu. We don't want the initial button click to trigger this
  // when a menu is closed, so we can track this behavior in a ref for now.
  // We shouldn't need this when we rewrite with state machine logic.

  var buttonClickedRef = s(false); // We will put children callbacks in a ref to avoid triggering endless render
  // loops when using render props if the app code doesn't useCallback
  // https://github.com/reach/reach-ui/issues/523

  var selectCallbacks = s([]); // If the popover's position overlaps with an option when the popover
  // initially opens, the mouseup event will trigger a select. To prevent that,
  // we decide the menu button is only ready to make a selection if the pointer
  // moves first, otherwise the user is just registering the initial button
  // click rather than selecting an item. This is similar to a native select
  // on most platforms, and our menu button popover works similarly.

  var readyToSelect = s(false); // Trying a new approach for splitting up contexts by stable/unstable
  // references. We'll see how it goes!

  var stableContext = d(function () {
    return {
      buttonRef: buttonRef,
      dispatch: dispatch,
      menuRef: menuRef,
      popoverRef: popoverRef,
      buttonClickedRef: buttonClickedRef,
      readyToSelect: readyToSelect,
      selectCallbacks: selectCallbacks
    };
  }, []);
  var unstableContext = {
    menuId: menuId,
    state: state
  }; // When the menu is open, focus is placed on the menu itself so that
  // keyboard navigation is still possible.

  y(function () {
    if (state.isExpanded) {
      // @ts-ignore
      window.__REACH_DISABLE_TOOLTIPS = true;
      window.requestAnimationFrame(function () {
        reach_menu_button_esm_focus(menuRef.current);
      });
    } else {
      // We want to ignore the immediate focus of a tooltip so it doesn't pop
      // up again when the menu closes, only pops up when focus returns again
      // to the tooltip (like native OS tooltips).
      // @ts-ignore
      window.__REACH_DISABLE_TOOLTIPS = false;
    }
  }, [state.isExpanded]);
  useCheckStyles("menu-button");
  return /*#__PURE__*/(0,external_commonjs_preact_commonjs2_preact_amd_preact_root_.createElement)(DescendantProvider, {
    context: MenuDescendantContext,
    items: descendants,
    set: setDescendants
  }, /*#__PURE__*/(0,external_commonjs_preact_commonjs2_preact_amd_preact_root_.createElement)(StableMenuContext.Provider, {
    value: stableContext
  }, /*#__PURE__*/(0,external_commonjs_preact_commonjs2_preact_amd_preact_root_.createElement)(UnstableMenuContext.Provider, {
    value: unstableContext
  }, reach_utils_type_check_esm_isFunction(children) ? children({
    isExpanded: state.isExpanded,
    // TODO: Remove in 1.0
    isOpen: state.isExpanded
  }) : children)));
};
/**
 * @see Docs https://reach.tech/menu-button#menu-props
 */


if (false) {} ////////////////////////////////////////////////////////////////////////////////

/**
 * MenuButton
 *
 * Wraps a DOM `button` that toggles the opening and closing of the dropdown
 * menu. Must be rendered inside of a `<Menu>`.
 *
 * @see Docs https://reach.tech/menu-button#menubutton
 */


var MenuButton = /*#__PURE__*/compat_module_x(function MenuButton(_ref2, forwardedRef) {
  var _ref2$as = _ref2.as,
      Comp = _ref2$as === void 0 ? "button" : _ref2$as,
      onKeyDown = _ref2.onKeyDown,
      onMouseDown = _ref2.onMouseDown,
      id = _ref2.id,
      props = reach_menu_button_esm_objectWithoutPropertiesLoose(_ref2, ["as", "onKeyDown", "onMouseDown", "id"]);

  var _React$useContext = F(StableMenuContext),
      buttonRef = _React$useContext.buttonRef,
      buttonClickedRef = _React$useContext.buttonClickedRef,
      dispatch = _React$useContext.dispatch;

  var _React$useContext2 = F(UnstableMenuContext),
      menuId = _React$useContext2.menuId,
      _React$useContext2$st = _React$useContext2.state,
      buttonId = _React$useContext2$st.buttonId,
      isExpanded = _React$useContext2$st.isExpanded;

  var ref = useComposedRefs(buttonRef, forwardedRef);
  var items = useDescendants(MenuDescendantContext);
  var firstNonDisabledIndex = d(function () {
    return items.findIndex(function (item) {
      return !item.disabled;
    });
  }, [items]);
  y(function () {
    var newButtonId = id != null ? id : menuId ? reach_utils_make_id_esm_makeId("menu-button", menuId) : "menu-button";

    if (buttonId !== newButtonId) {
      dispatch({
        type: SET_BUTTON_ID,
        payload: newButtonId
      });
    }
  }, [buttonId, dispatch, id, menuId]);

  function handleKeyDown(event) {
    switch (event.key) {
      case "ArrowDown":
      case "ArrowUp":
        event.preventDefault(); // prevent scroll

        dispatch({
          type: OPEN_MENU_AT_INDEX,
          payload: {
            index: firstNonDisabledIndex
          }
        });
        break;

      case "Enter":
      case " ":
        dispatch({
          type: OPEN_MENU_AT_INDEX,
          payload: {
            index: firstNonDisabledIndex
          }
        });
        break;
    }
  }

  function handleMouseDown(event) {
    if (!isExpanded) {
      buttonClickedRef.current = true;
    }

    if (isRightClick(event.nativeEvent)) {
      return;
    } else if (isExpanded) {
      dispatch({
        type: CLOSE_MENU
      });
    } else {
      dispatch({
        type: OPEN_MENU_CLEARED
      });
    }
  }

  return /*#__PURE__*/(0,external_commonjs_preact_commonjs2_preact_amd_preact_root_.createElement)(Comp // When the menu is displayed, the element with role `button` has
  // `aria-expanded` set to `true`. When the menu is hidden, it is
  // recommended that `aria-expanded` is not present.
  // https://www.w3.org/TR/wai-aria-practices-1.2/#menubutton
  , reach_menu_button_esm_extends({
    "aria-expanded": isExpanded ? true : undefined // The element with role `button` has `aria-haspopup` set to either
    // `"menu"` or `true`.
    // https://www.w3.org/TR/wai-aria-practices-1.2/#menubutton
    ,
    "aria-haspopup": true // Optionally, the element with role `button` has a value specified for
    // `aria-controls` that refers to the element with role `menu`.
    // https://www.w3.org/TR/wai-aria-practices-1.2/#menubutton
    ,
    "aria-controls": menuId
  }, props, {
    ref: ref,
    "data-reach-menu-button": "",
    id: buttonId || undefined,
    onKeyDown: composeEventHandlers(onKeyDown, handleKeyDown),
    onMouseDown: composeEventHandlers(onMouseDown, handleMouseDown),
    type: "button"
  }));
});
/**
 * @see Docs https://reach.tech/menu-button#menubutton-props
 */

if (false) {} ////////////////////////////////////////////////////////////////////////////////

/**
 * MenuItemImpl
 *
 * MenuItem and MenuLink share most of the same functionality captured here.
 */


var MenuItemImpl = /*#__PURE__*/compat_module_x(function MenuItemImpl(_ref3, forwardedRef) {
  var _ref3$as = _ref3.as,
      Comp = _ref3$as === void 0 ? "div" : _ref3$as,
      indexProp = _ref3.index,
      _ref3$isLink = _ref3.isLink,
      isLink = _ref3$isLink === void 0 ? false : _ref3$isLink,
      onClick = _ref3.onClick,
      onDragStart = _ref3.onDragStart,
      onMouseDown = _ref3.onMouseDown,
      onMouseEnter = _ref3.onMouseEnter,
      onMouseLeave = _ref3.onMouseLeave,
      onMouseMove = _ref3.onMouseMove,
      onMouseUp = _ref3.onMouseUp,
      onSelect = _ref3.onSelect,
      disabled = _ref3.disabled,
      valueTextProp = _ref3.valueText,
      props = reach_menu_button_esm_objectWithoutPropertiesLoose(_ref3, ["as", "index", "isLink", "onClick", "onDragStart", "onMouseDown", "onMouseEnter", "onMouseLeave", "onMouseMove", "onMouseUp", "onSelect", "disabled", "valueText"]);

  var _React$useContext3 = F(StableMenuContext),
      buttonRef = _React$useContext3.buttonRef,
      dispatch = _React$useContext3.dispatch,
      readyToSelect = _React$useContext3.readyToSelect,
      selectCallbacks = _React$useContext3.selectCallbacks;

  var _React$useContext4 = F(UnstableMenuContext),
      _React$useContext4$st = _React$useContext4.state,
      selectionIndex = _React$useContext4$st.selectionIndex,
      isExpanded = _React$useContext4$st.isExpanded;

  var ownRef = s(null); // After the ref is mounted to the DOM node, we check to see if we have an
  // explicit valueText prop before looking for the node's textContent for
  // typeahead functionality.

  var _React$useState = l(valueTextProp || ""),
      valueText = _React$useState[0],
      setValueText = _React$useState[1];

  var setValueTextFromDOM = A(function (node) {
    if (!valueTextProp && node != null && node.textContent) {
      setValueText(node.textContent);
    }
  }, [valueTextProp]);
  var ref = useComposedRefs(forwardedRef, ownRef, setValueTextFromDOM);
  var mouseEventStarted = s(false);
  var index = useDescendant({
    element: ownRef.current,
    key: valueText,
    disabled: disabled,
    isLink: isLink
  }, MenuDescendantContext, indexProp);
  var isSelected = index === selectionIndex && !disabled; // Update the callback ref array on every render

  selectCallbacks.current[index] = onSelect;

  function select() {
    reach_menu_button_esm_focus(buttonRef.current);
    onSelect && onSelect();
    dispatch({
      type: CLICK_MENU_ITEM
    });
  }

  function handleClick(event) {
    if (isLink && !isRightClick(event.nativeEvent)) {
      if (disabled) {
        event.preventDefault();
      } else {
        select();
      }
    }
  }

  function handleDragStart(event) {
    // Because we don't preventDefault on mousedown for links (we need the
    // native click event), clicking and holding on a link triggers a
    // dragstart which we don't want.
    if (isLink) {
      event.preventDefault();
    }
  }

  function handleMouseDown(event) {
    if (isRightClick(event.nativeEvent)) {
      return;
    }

    if (isLink) {
      // Signal that the mouse is down so we can call the right function if the
      // user is clicking on a link.
      mouseEventStarted.current = true;
    } else {
      event.preventDefault();
    }
  }

  function handleMouseEnter(event) {
    if (!isSelected && index != null && !disabled) {
      dispatch({
        type: SELECT_ITEM_AT_INDEX,
        payload: {
          index: index
        }
      });
    }
  }

  function handleMouseLeave(event) {
    // Clear out selection when mouse over a non-menu item child.
    dispatch({
      type: CLEAR_SELECTION_INDEX
    });
  }

  function handleMouseMove() {
    readyToSelect.current = true;

    if (!isSelected && index != null && !disabled) {
      dispatch({
        type: SELECT_ITEM_AT_INDEX,
        payload: {
          index: index
        }
      });
    }
  }

  function handleMouseUp(event) {
    if (!readyToSelect.current) {
      readyToSelect.current = true;
      return;
    }

    if (isRightClick(event.nativeEvent)) return;

    if (isLink) {
      // If a mousedown event was initiated on a menu link followed by a
      // mouseup event on the same link, we do nothing; a click event will
      // come next and handle selection. Otherwise, we trigger a click event.
      if (mouseEventStarted.current) {
        mouseEventStarted.current = false;
      } else if (ownRef.current) {
        ownRef.current.click();
      }
    } else {
      if (!disabled) {
        select();
      }
    }
  } // When the menu closes, reset readyToSelect for the next interaction.


  y(function () {
    if (!isExpanded) {
      readyToSelect.current = false;
    }
  }, [isExpanded, readyToSelect]); // Any time a mouseup event occurs anywhere in the document, we reset the
  // mouseEventStarted ref so we can check it again when needed.

  y(function () {
    var ownerDocument = getOwnerDocument(ownRef.current);
    ownerDocument.addEventListener("mouseup", listener);
    return function () {
      ownerDocument.removeEventListener("mouseup", listener);
    };

    function listener() {
      mouseEventStarted.current = false;
    }
  }, []);
  return /*#__PURE__*/(0,external_commonjs_preact_commonjs2_preact_amd_preact_root_.createElement)(Comp, reach_menu_button_esm_extends({
    role: "menuitem",
    id: useMenuItemId(index),
    tabIndex: -1
  }, props, {
    ref: ref,
    "aria-disabled": disabled || undefined,
    "data-reach-menu-item": "",
    "data-selected": isSelected ? "" : undefined,
    "data-valuetext": valueText,
    onClick: composeEventHandlers(onClick, handleClick),
    onDragStart: composeEventHandlers(onDragStart, handleDragStart),
    onMouseDown: composeEventHandlers(onMouseDown, handleMouseDown),
    onMouseEnter: composeEventHandlers(onMouseEnter, handleMouseEnter),
    onMouseLeave: composeEventHandlers(onMouseLeave, handleMouseLeave),
    onMouseMove: composeEventHandlers(onMouseMove, handleMouseMove),
    onMouseUp: composeEventHandlers(onMouseUp, handleMouseUp)
  }));
}); ////////////////////////////////////////////////////////////////////////////////

/**
 * MenuItem
 *
 * Handles menu selection. Must be a direct child of a `<MenuList>`.
 *
 * @see Docs https://reach.tech/menu-button#menuitem
 */

var MenuItem = /*#__PURE__*/compat_module_x(function MenuItem(_ref4, forwardedRef) {
  var _ref4$as = _ref4.as,
      as = _ref4$as === void 0 ? "div" : _ref4$as,
      props = reach_menu_button_esm_objectWithoutPropertiesLoose(_ref4, ["as"]);

  return /*#__PURE__*/(0,external_commonjs_preact_commonjs2_preact_amd_preact_root_.createElement)(MenuItemImpl, reach_menu_button_esm_extends({}, props, {
    ref: forwardedRef,
    as: as
  }));
});
/**
 * @see Docs https://reach.tech/menu-button#menuitem-props
 */

if (false) {} ////////////////////////////////////////////////////////////////////////////////

/**
 * MenuItems
 *
 * A low-level wrapper for menu items. Compose it with `MenuPopover` for more
 * control over the nested components and their rendered DOM nodes, or if you
 * need to nest arbitrary components between the outer wrapper and your list.
 *
 * @see Docs https://reach.tech/menu-button#menuitems
 */


var MenuItems = /*#__PURE__*/compat_module_x(function MenuItems(_ref5, forwardedRef) {
  var _ref5$as = _ref5.as,
      Comp = _ref5$as === void 0 ? "div" : _ref5$as,
      children = _ref5.children;
  _ref5.id;

  var onKeyDown = _ref5.onKeyDown,
      props = reach_menu_button_esm_objectWithoutPropertiesLoose(_ref5, ["as", "children", "id", "onKeyDown"]);

  var _React$useContext5 = F(StableMenuContext),
      dispatch = _React$useContext5.dispatch,
      buttonRef = _React$useContext5.buttonRef,
      menuRef = _React$useContext5.menuRef,
      selectCallbacks = _React$useContext5.selectCallbacks;

  var _React$useContext6 = F(UnstableMenuContext),
      menuId = _React$useContext6.menuId,
      _React$useContext6$st = _React$useContext6.state,
      isExpanded = _React$useContext6$st.isExpanded,
      buttonId = _React$useContext6$st.buttonId,
      selectionIndex = _React$useContext6$st.selectionIndex,
      typeaheadQuery = _React$useContext6$st.typeaheadQuery;

  var menuItems = useDescendants(MenuDescendantContext);
  var ref = useComposedRefs(menuRef, forwardedRef);
  y(function () {
    // Respond to user char key input with typeahead
    var match = findItemFromTypeahead(menuItems, typeaheadQuery);

    if (typeaheadQuery && match != null) {
      dispatch({
        type: SELECT_ITEM_AT_INDEX,
        payload: {
          index: match
        }
      });
    }

    var timeout = window.setTimeout(function () {
      return typeaheadQuery && dispatch({
        type: SEARCH_FOR_ITEM,
        payload: ""
      });
    }, 1000);
    return function () {
      return window.clearTimeout(timeout);
    };
  }, [dispatch, menuItems, typeaheadQuery]);
  var prevMenuItemsLength = usePrevious(menuItems.length);
  var prevSelected = usePrevious(menuItems[selectionIndex]);
  var prevSelectionIndex = usePrevious(selectionIndex);
  y(function () {
    if (selectionIndex > menuItems.length - 1) {
      // If for some reason our selection index is larger than our possible
      // index range (let's say the last item is selected and the list
      // dynamically updates), we need to select the last item in the list.
      dispatch({
        type: SELECT_ITEM_AT_INDEX,
        payload: {
          index: menuItems.length - 1
        }
      });
    } else if ( // Checks if
    //  - menu length has changed
    //  - selection index has not changed BUT selected item has changed
    //
    // This prevents any dynamic adding/removing of menu items from actually
    // changing a user's expected selection.
    prevMenuItemsLength !== menuItems.length && selectionIndex > -1 && prevSelected && prevSelectionIndex === selectionIndex && menuItems[selectionIndex] !== prevSelected) {
      dispatch({
        type: SELECT_ITEM_AT_INDEX,
        payload: {
          index: menuItems.findIndex(function (i) {
            return i.key === prevSelected.key;
          })
        }
      });
    }
  }, [dispatch, menuItems, prevMenuItemsLength, prevSelected, prevSelectionIndex, selectionIndex]);
  var handleKeyDown = composeEventHandlers(function handleKeyDown(event) {
    var key = event.key;

    if (!isExpanded) {
      return;
    }

    switch (key) {
      case "Enter":
      case " ":
        var selected = menuItems.find(function (item) {
          return item.index === selectionIndex;
        }); // For links, the Enter key will trigger a click by default, but for
        // consistent behavior across menu items we'll trigger a click when
        // the spacebar is pressed.

        if (selected) {
          if (selected.isLink && selected.element) {
            selected.element.click();
          } else {
            event.preventDefault(); // Focus the button first by default when an item is selected.
            // We fire the onSelect callback next so the app can manage
            // focus if needed.

            reach_menu_button_esm_focus(buttonRef.current);
            selectCallbacks.current[selected.index] && selectCallbacks.current[selected.index]();
            dispatch({
              type: CLICK_MENU_ITEM
            });
          }
        }

        break;

      case "Escape":
        reach_menu_button_esm_focus(buttonRef.current);
        dispatch({
          type: CLOSE_MENU
        });
        break;

      case "Tab":
        // prevent leaving
        event.preventDefault();
        break;

      default:
        // Check if a user is typing some char keys and respond by setting
        // the query state.
        if (isString(key) && key.length === 1) {
          var query = typeaheadQuery + key.toLowerCase();
          dispatch({
            type: SEARCH_FOR_ITEM,
            payload: query
          });
        }

        break;
    }
  }, useDescendantKeyDown(MenuDescendantContext, {
    currentIndex: selectionIndex,
    orientation: "vertical",
    rotate: false,
    filter: function filter(item) {
      return !item.disabled;
    },
    callback: function callback(index) {
      dispatch({
        type: SELECT_ITEM_AT_INDEX,
        payload: {
          index: index
        }
      });
    },
    key: "index"
  }));
  return (
    /*#__PURE__*/
    // TODO: Should probably file a but in jsx-a11y, but this is correct
    // according to https://www.w3.org/TR/wai-aria-practices-1.2/examples/menu-button/menu-button-actions-active-descendant.html
    // eslint-disable-next-line jsx-a11y/aria-activedescendant-has-tabindex
    (0,external_commonjs_preact_commonjs2_preact_amd_preact_root_.createElement)(Comp // Refers to the descendant menuitem element that is visually indicated
    // as focused.
    // https://www.w3.org/TR/wai-aria-practices-1.2/examples/menu-button/menu-button-actions-active-descendant.html
    , reach_menu_button_esm_extends({
      "aria-activedescendant": useMenuItemId(selectionIndex) || undefined // Refers to the element that contains the accessible name for the
      // `menu`. The menu is labeled by the menu button.
      // https://www.w3.org/TR/wai-aria-practices-1.2/examples/menu-button/menu-button-actions-active-descendant.html
      ,
      "aria-labelledby": buttonId || undefined // The element that contains the menu items displayed by activating the
      // button has role menu.
      // https://www.w3.org/TR/wai-aria-practices-1.2/#menubutton
      ,
      role: "menu",
      tabIndex: -1
    }, props, {
      ref: ref,
      "data-reach-menu-items": "",
      id: menuId,
      onKeyDown: composeEventHandlers(onKeyDown, handleKeyDown)
    }), children)
  );
});
/**
 * @see Docs https://reach.tech/menu-button#menuitems-props
 */

if (false) {} ////////////////////////////////////////////////////////////////////////////////

/**
 * MenuLink
 *
 * Handles linking to a different page in the menu. By default it renders `<a>`,
 * but also accepts any other kind of Link as long as the `Link` uses the
 * `React.forwardRef` API.
 *
 * Must be a direct child of a `<MenuList>`.
 *
 * @see Docs https://reach.tech/menu-button#menulink
 */


var MenuLink = /*#__PURE__*/(/* unused pure expression or super */ null && (forwardRef(function MenuLink(_ref6, forwardedRef) {
  var _ref6$as = _ref6.as,
      as = _ref6$as === void 0 ? "a" : _ref6$as,
      component = _ref6.component,
      onSelect = _ref6.onSelect,
      props = reach_menu_button_esm_objectWithoutPropertiesLoose(_ref6, ["as", "component", "onSelect"]);

  useDevWarning(!component, "[@reach/menu-button]: Please use the `as` prop instead of `component`");
  return /*#__PURE__*/createElement(MenuItemImpl, reach_menu_button_esm_extends({}, props, {
    ref: forwardedRef,
    "data-reach-menu-link": "",
    as: as,
    isLink: true,
    onSelect: onSelect || noop
  }));
})));
/**
 * @see Docs https://reach.tech/menu-button#menulink-props
 */

if (false) {} ////////////////////////////////////////////////////////////////////////////////

/**
 * MenuList
 *
 * Wraps a DOM element that renders the menu items. Must be rendered inside of
 * a `<Menu>`.
 *
 * @see Docs https://reach.tech/menu-button#menulist
 */


var MenuList = /*#__PURE__*/compat_module_x(function MenuList(_ref7, forwardedRef) {
  var _ref7$portal = _ref7.portal,
      portal = _ref7$portal === void 0 ? true : _ref7$portal,
      props = reach_menu_button_esm_objectWithoutPropertiesLoose(_ref7, ["portal"]);

  return /*#__PURE__*/(0,external_commonjs_preact_commonjs2_preact_amd_preact_root_.createElement)(MenuPopover, {
    portal: portal
  }, /*#__PURE__*/(0,external_commonjs_preact_commonjs2_preact_amd_preact_root_.createElement)(MenuItems, reach_menu_button_esm_extends({}, props, {
    ref: forwardedRef,
    "data-reach-menu-list": ""
  })));
});
/**
 * @see Docs https://reach.tech/menu-button#menulist-props
 */

if (false) {} ////////////////////////////////////////////////////////////////////////////////

/**
  * 
  
  *
  * A low-level wrapper for the popover that appears when a menu button is open.
  * You can compose it with `MenuItems` for more control over the nested
  * components and their rendered DOM nodes, or if you need to nest arbitrary
  * components between the outer wrapper and your list.
  *
  * @see Docs https://reach.tech/menu-button#menupopover
  */


var MenuPopover = /*#__PURE__*/compat_module_x(function MenuPopover(_ref8, forwardedRef) {
  var _ref8$as = _ref8.as,
      Comp = _ref8$as === void 0 ? "div" : _ref8$as,
      children = _ref8.children,
      onBlur = _ref8.onBlur,
      _ref8$portal = _ref8.portal,
      portal = _ref8$portal === void 0 ? true : _ref8$portal,
      position = _ref8.position,
      props = reach_menu_button_esm_objectWithoutPropertiesLoose(_ref8, ["as", "children", "onBlur", "portal", "position"]);

  var _React$useContext7 = F(StableMenuContext),
      buttonRef = _React$useContext7.buttonRef,
      buttonClickedRef = _React$useContext7.buttonClickedRef,
      dispatch = _React$useContext7.dispatch,
      menuRef = _React$useContext7.menuRef,
      popoverRef = _React$useContext7.popoverRef;

  var _React$useContext8 = F(UnstableMenuContext),
      isExpanded = _React$useContext8.state.isExpanded;

  var ref = useComposedRefs(popoverRef, forwardedRef);
  y(function () {
    if (!isExpanded) {
      return;
    }

    var ownerDocument = getOwnerDocument(popoverRef.current);

    function listener(event) {
      if (buttonClickedRef.current) {
        buttonClickedRef.current = false;
      } else if (!popoverContainsEventTarget(popoverRef.current, event.target)) {
        // We on want to close only if focus rests outside the menu
        dispatch({
          type: CLOSE_MENU
        });
      }
    }

    ownerDocument.addEventListener("mousedown", listener); // see https://github.com/reach/reach-ui/pull/700#discussion_r530369265
    // ownerDocument.addEventListener("touchstart", listener);

    return function () {
      ownerDocument.removeEventListener("mousedown", listener); // ownerDocument.removeEventListener("touchstart", listener);
    };
  }, [buttonClickedRef, buttonRef, dispatch, menuRef, popoverRef, isExpanded]);

  var commonProps = reach_menu_button_esm_extends({
    ref: ref,
    // TODO: remove in 1.0
    "data-reach-menu": "",
    "data-reach-menu-popover": "",
    hidden: !isExpanded,
    children: children,
    onBlur: composeEventHandlers(onBlur, function (event) {
      if (event.currentTarget.contains(event.relatedTarget)) {
        return;
      }

      dispatch({
        type: CLOSE_MENU
      });
    })
  }, props);

  return portal ? /*#__PURE__*/(0,external_commonjs_preact_commonjs2_preact_amd_preact_root_.createElement)(Popover, reach_menu_button_esm_extends({}, commonProps, {
    as: Comp,
    targetRef: buttonRef,
    position: position
  })) : /*#__PURE__*/(0,external_commonjs_preact_commonjs2_preact_amd_preact_root_.createElement)(Comp, commonProps);
});
/**
 * @see Docs https://reach.tech/menu-button#menupopover-props
 */

if (false) {} ////////////////////////////////////////////////////////////////////////////////

/**
 * A hook that exposes data for a given `Menu` component to its descendants.
 *
 * @see Docs https://reach.tech/menu-button#usemenubuttoncontext
 */


function useMenuButtonContext() {
  var _React$useContext9 = useContext(UnstableMenuContext),
      isExpanded = _React$useContext9.state.isExpanded;

  return useMemo(function () {
    return {
      isExpanded: isExpanded
    };
  }, [isExpanded]);
} ////////////////////////////////////////////////////////////////////////////////

/**
 * When a user's typed input matches the string displayed in a menu item, it is
 * expected that the matching menu item is selected. This is our matching
 * function.
 */


function findItemFromTypeahead(items, string) {
  if (string === void 0) {
    string = "";
  }

  if (!string) {
    return null;
  }

  var found = items.find(function (item) {
    var _item$element, _item$element$dataset, _item$element$dataset2;

    return item.disabled ? false : (_item$element = item.element) == null ? void 0 : (_item$element$dataset = _item$element.dataset) == null ? void 0 : (_item$element$dataset2 = _item$element$dataset.valuetext) == null ? void 0 : _item$element$dataset2.toLowerCase().startsWith(string);
  });
  return found ? items.indexOf(found) : null;
}

function useMenuItemId(index) {
  var _React$useContext10 = F(UnstableMenuContext),
      menuId = _React$useContext10.menuId;

  return index != null && index > -1 ? reach_utils_make_id_esm_makeId("option-" + index, menuId) : undefined;
}

function reach_menu_button_esm_focus(element) {
  element && element.focus();
}

function popoverContainsEventTarget(popover, target) {
  return !!(popover && popover.contains(target));
}

function reducer(state, action) {
  if (action === void 0) {
    action = {};
  }

  switch (action.type) {
    case CLICK_MENU_ITEM:
      return reach_menu_button_esm_extends({}, state, {
        isExpanded: false,
        selectionIndex: -1
      });

    case CLOSE_MENU:
      return reach_menu_button_esm_extends({}, state, {
        isExpanded: false,
        selectionIndex: -1
      });

    case OPEN_MENU_AT_FIRST_ITEM:
      return reach_menu_button_esm_extends({}, state, {
        isExpanded: true,
        selectionIndex: 0
      });

    case OPEN_MENU_AT_INDEX:
      return reach_menu_button_esm_extends({}, state, {
        isExpanded: true,
        selectionIndex: action.payload.index
      });

    case OPEN_MENU_CLEARED:
      return reach_menu_button_esm_extends({}, state, {
        isExpanded: true,
        selectionIndex: -1
      });

    case SELECT_ITEM_AT_INDEX:
      if (action.payload.index >= 0) {
        return reach_menu_button_esm_extends({}, state, {
          selectionIndex: action.payload.max != null ? Math.min(Math.max(action.payload.index, 0), action.payload.max) : Math.max(action.payload.index, 0)
        });
      }

      return state;

    case CLEAR_SELECTION_INDEX:
      return reach_menu_button_esm_extends({}, state, {
        selectionIndex: -1
      });

    case SET_BUTTON_ID:
      return reach_menu_button_esm_extends({}, state, {
        buttonId: action.payload
      });

    case SEARCH_FOR_ITEM:
      if (typeof action.payload !== "undefined") {
        return reach_menu_button_esm_extends({}, state, {
          typeaheadQuery: action.payload
        });
      }

      return state;

    default:
      return state;
  }
}

function useDevWarning(condition, message) {
  if (false) { var messageRef; }
} ////////////////////////////////////////////////////////////////////////////////



;// CONCATENATED MODULE: ./src/components/Button/component.js




const Button = ({
  label,
  onClick,
  variant
}) => {
  return (0,external_commonjs_preact_commonjs2_preact_amd_preact_root_.h)(Menu, null, (0,external_commonjs_preact_commonjs2_preact_amd_preact_root_.h)(MenuButton, {
    className: `sn-button ${variant}`,
    onClick: onClick
  }, label));
};

Button.propTypes = {
  label: (prop_types_default()).string.isRequired,
  onClick: (prop_types_default()).func.isRequired,
  variant: prop_types_default().oneOf(["contrast", "neutral", "info", "warning", "danger", "success"])
};
Button.defaultProps = {
  variant: "info"
};
/* harmony default export */ const component = (Button);
;// CONCATENATED MODULE: ./src/components/Button/index.js

;// CONCATENATED MODULE: ./src/components/Icon/icons-sprite.svg
var _path, _path2, _path3, _path4, _path5, _path6;

function icons_sprite_extends() { icons_sprite_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return icons_sprite_extends.apply(this, arguments); }



var SvgIconsSprite = function SvgIconsSprite(props) {
  return /*#__PURE__*/external_commonjs_preact_commonjs2_preact_amd_preact_root_.createElement("svg", icons_sprite_extends({
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/external_commonjs_preact_commonjs2_preact_amd_preact_root_.createElement("svg", icons_sprite_extends({
    width: 20,
    height: 20,
    fill: "none",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path || (_path = /*#__PURE__*/external_commonjs_preact_commonjs2_preact_amd_preact_root_.createElement("path", {
    d: "M11.667 6.667h-1.25v4.166l3.566 2.117.6-1.008-2.916-1.734V6.667zM11.25 2.5a7.5 7.5 0 0 0-7.5 7.5h-2.5l3.3 3.358L7.917 10h-2.5a5.833 5.833 0 1 1 5.833 5.833 5.786 5.786 0 0 1-4.117-1.716L5.95 15.3a7.413 7.413 0 0 0 5.3 2.2 7.5 7.5 0 0 0 0-15z",
    fill: "#72767E"
  }))), /*#__PURE__*/external_commonjs_preact_commonjs2_preact_amd_preact_root_.createElement("svg", icons_sprite_extends({
    width: 20,
    height: 20,
    fill: "none",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path2 || (_path2 = /*#__PURE__*/external_commonjs_preact_commonjs2_preact_amd_preact_root_.createElement("path", {
    fill: "#72767E",
    d: "M14.167 12.5 10 8.333 5.833 12.5h8.334z"
  }))), /*#__PURE__*/external_commonjs_preact_commonjs2_preact_amd_preact_root_.createElement("svg", icons_sprite_extends({
    width: 20,
    height: 20,
    fill: "none",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path3 || (_path3 = /*#__PURE__*/external_commonjs_preact_commonjs2_preact_amd_preact_root_.createElement("path", {
    d: "M5.833 8.333 10 12.5l4.167-4.167H5.833z",
    fill: "#72767E"
  }))), /*#__PURE__*/external_commonjs_preact_commonjs2_preact_amd_preact_root_.createElement("svg", icons_sprite_extends({
    width: 20,
    height: 20,
    fill: "none",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path4 || (_path4 = /*#__PURE__*/external_commonjs_preact_commonjs2_preact_amd_preact_root_.createElement("path", {
    d: "M14.537 9.4a7.306 7.306 0 0 0-4.722-1.733c-3.182 0-5.87 2.02-6.815 4.813l1.615.52c.718-2.127 2.771-3.667 5.2-3.667 1.335 0 2.553.48 3.504 1.254L10.842 13H17V7l-2.463 2.4z",
    fill: "#72767E"
  }))), /*#__PURE__*/external_commonjs_preact_commonjs2_preact_amd_preact_root_.createElement("svg", icons_sprite_extends({
    width: 20,
    height: 20,
    fill: "none",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path5 || (_path5 = /*#__PURE__*/external_commonjs_preact_commonjs2_preact_amd_preact_root_.createElement("path", {
    d: "M2.5 7.5h5v5h-5v-5zm0-3.333h15v1.666h-15V4.166zm15 3.333v1.666H9.167V7.5H17.5zm0 3.333V12.5H9.167v-1.667H17.5zm-15 3.333h11.667v1.667H2.5v-1.667z",
    fill: "#72767E"
  }))), /*#__PURE__*/external_commonjs_preact_commonjs2_preact_amd_preact_root_.createElement("svg", icons_sprite_extends({
    width: 20,
    height: 20,
    fill: "none",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path6 || (_path6 = /*#__PURE__*/external_commonjs_preact_commonjs2_preact_amd_preact_root_.createElement("path", {
    d: "M10.181 7.667A7.3 7.3 0 0 0 5.462 9.4L3 7v6h6.155L6.68 10.587a5.523 5.523 0 0 1 3.501-1.254c2.421 0 4.48 1.54 5.198 3.667L17 12.48c-.95-2.793-3.639-4.813-6.819-4.813z",
    fill: "#72767E"
  }))));
};

/* harmony default export */ const icons_sprite = (SvgIconsSprite);
;// CONCATENATED MODULE: ./src/components/Icon/component.js




const Icon = ({
  name,
  width,
  height,
  className
}) => {
  return (0,external_commonjs_preact_commonjs2_preact_amd_preact_root_.h)("svg", {
    className: `sn-icon ${className ? className : ''}`,
    width: width,
    height: height
  }, (0,external_commonjs_preact_commonjs2_preact_amd_preact_root_.h)("use", {
    href: icons_sprite + `#ic-${name}`
  }));
};

Icon.propTypes = {
  name: prop_types_default().oneOf(["history", "menu-arrow-down", "menu-arrow-up", "text-rich", "undo", "redo"]).isRequired,
  classList: (prop_types_default()).string,
  width: (prop_types_default()).number,
  height: (prop_types_default()).number
};
Icon.defaultProps = {
  width: 20,
  height: 20
};
/* harmony default export */ const Icon_component = (Icon);
;// CONCATENATED MODULE: ./src/components/Icon/index.js

;// CONCATENATED MODULE: ./src/components/DropdownMenu/component.js





const DropdownMenu = ({
  label,
  items,
  icon,
  onSelectItem
}) => {
  return (0,external_commonjs_preact_commonjs2_preact_amd_preact_root_.h)(Menu, null, ({
    isExpanded
  }) => (0,external_commonjs_preact_commonjs2_preact_amd_preact_root_.h)(external_commonjs_preact_commonjs2_preact_amd_preact_root_.Fragment, null, (0,external_commonjs_preact_commonjs2_preact_amd_preact_root_.h)(MenuButton, {
    className: "sn-dropdown-menu"
  }, icon && icon, " ", label, " ", isExpanded ? (0,external_commonjs_preact_commonjs2_preact_amd_preact_root_.h)(Icon_component, {
    name: "menu-arrow-up"
  }) : (0,external_commonjs_preact_commonjs2_preact_amd_preact_root_.h)(Icon_component, {
    name: "menu-arrow-down"
  })), (0,external_commonjs_preact_commonjs2_preact_amd_preact_root_.h)(MenuList, {
    className: "sn-dropdown-menu-list"
  }, items && items.map(item => (0,external_commonjs_preact_commonjs2_preact_amd_preact_root_.h)(MenuItem, {
    className: "sn-dropdown-menu-list-item",
    valueText: item.value,
    onSelect: () => item.onSelect ? item.onSelect(item.value) : onSelectItem(item.value)
  }, item.icon && item.icon, " ", item.label)))));
};

DropdownMenu.propTypes = {
  label: (prop_types_default()).string.isRequired,
  items: (prop_types_default()).array.isRequired,
  onSelectItem: (prop_types_default()).func.isRequired,
  icon: (prop_types_default()).element
};
/* harmony default export */ const DropdownMenu_component = (DropdownMenu);
;// CONCATENATED MODULE: ./src/components/DropdownMenu/index.js

;// CONCATENATED MODULE: ./node_modules/@reach/utils/use-stable-callback/dist/reach-utils-use-stable-callback.esm.js



/* eslint-disable react-hooks/rules-of-hooks */

/**
 * Converts a callback to a ref to avoid triggering re-renders when passed as a
 * prop and exposed as a stable function to avoid executing effects when
 * passed as a dependency.
 */

function createStableCallbackHook(useEffectHook, callback) {
  var callbackRef = s(callback);
  useEffectHook(function () {
    callbackRef.current = callback;
  }); // eslint-disable-next-line react-hooks/exhaustive-deps

  return A(function () {
    callbackRef.current && callbackRef.current.apply(callbackRef, arguments);
  }, []);
}
/**
 * Converts a callback to a ref to avoid triggering re-renders when passed as a
 * prop and exposed as a stable function to avoid executing effects when passed
 * as a dependency.
 */


function useStableCallback(callback) {
  return createStableCallbackHook(y, callback);
}
/**
 * Converts a callback to a ref to avoid triggering re-renders when passed as a
 * prop and exposed as a stable function to avoid executing effects when passed
 * as a dependency.
 *
 * Use this over `useStableCallback` when you want the callback to be cached in
 * `useLayoutEffect` instead of `useEffect` to deal with timing issues only when
 * needed.
 */


function useStableLayoutCallback(callback) {
  return createStableCallbackHook(useIsomorphicLayoutEffect, callback);
}


;// CONCATENATED MODULE: ./node_modules/@xstate/fsm/es/index.js
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
var es_t;
!function (t) {
  t[t.NotStarted = 0] = "NotStarted", t[t.Running = 1] = "Running", t[t.Stopped = 2] = "Stopped";
}(es_t || (es_t = {}));
var n = {
  type: "xstate.init"
};

function es_e(t) {
  return void 0 === t ? [] : [].concat(t);
}

function es_r(t) {
  return {
    type: "xstate.assign",
    assignment: t
  };
}

function es_i(t, n) {
  return "string" == typeof (t = "string" == typeof t && n && n[t] ? n[t] : t) ? {
    type: t
  } : "function" == typeof t ? {
    type: t.name,
    exec: t
  } : t;
}

function es_o(t) {
  return function (n) {
    return t === n;
  };
}

function es_a(t) {
  return "string" == typeof t ? {
    type: t
  } : t;
}

function es_u(t, n) {
  return {
    value: t,
    context: n,
    actions: [],
    changed: !1,
    matches: es_o(t)
  };
}

function es_c(t, n) {
  void 0 === n && (n = {});
  var r = {
    config: t,
    _options: n,
    initialState: {
      value: t.initial,
      actions: es_e(t.states[t.initial].entry).map(function (t) {
        return es_i(t, n.actions);
      }),
      context: t.context,
      matches: es_o(t.initial)
    },
    transition: function (n, c) {
      var s,
          f,
          l = "string" == typeof n ? {
        value: n,
        context: t.context
      } : n,
          v = l.value,
          p = l.context,
          g = es_a(c),
          y = t.states[v];

      if (y.on) {
        var d = es_e(y.on[g.type]),
            x = function (n) {
          if (void 0 === n) return {
            value: es_u(v, p)
          };
          var e = "string" == typeof n ? {
            target: n
          } : n,
              a = e.target,
              c = void 0 === a ? v : a,
              s = e.actions,
              f = void 0 === s ? [] : s,
              l = e.cond,
              d = p;

          if ((void 0 === l ? function () {
            return !0;
          } : l)(p, g)) {
            var x = t.states[c],
                m = !1,
                h = [].concat(y.exit, f, x.entry).filter(function (t) {
              return t;
            }).map(function (t) {
              return es_i(t, r._options.actions);
            }).filter(function (t) {
              if ("xstate.assign" === t.type) {
                m = !0;
                var n = Object.assign({}, d);
                return "function" == typeof t.assignment ? n = t.assignment(d, g) : Object.keys(t.assignment).forEach(function (e) {
                  n[e] = "function" == typeof t.assignment[e] ? t.assignment[e](d, g) : t.assignment[e];
                }), d = n, !1;
              }

              return !0;
            });
            return {
              value: {
                value: c,
                context: d,
                actions: h,
                changed: c !== v || h.length > 0 || m,
                matches: es_o(c)
              }
            };
          }
        };

        try {
          for (var m = function (t) {
            var n = "function" == typeof Symbol && t[Symbol.iterator],
                e = 0;
            return n ? n.call(t) : {
              next: function () {
                return t && e >= t.length && (t = void 0), {
                  value: t && t[e++],
                  done: !t
                };
              }
            };
          }(d), h = m.next(); !h.done; h = m.next()) {
            var S = x(h.value);
            if ("object" == typeof S) return S.value;
          }
        } catch (t) {
          s = {
            error: t
          };
        } finally {
          try {
            h && !h.done && (f = m.return) && f.call(m);
          } finally {
            if (s) throw s.error;
          }
        }
      }

      return es_u(v, p);
    }
  };
  return r;
}

var es_s = function (t, n) {
  return t.actions.forEach(function (e) {
    var r = e.exec;
    return r && r(t.context, n);
  });
};

function es_f(e) {
  var r = e.initialState,
      i = es_t.NotStarted,
      o = new Set(),
      u = {
    _machine: e,
    send: function (n) {
      i === es_t.Running && (r = e.transition(r, n), es_s(r, es_a(n)), o.forEach(function (t) {
        return t(r);
      }));
    },
    subscribe: function (t) {
      return o.add(t), t(r), {
        unsubscribe: function () {
          return o.delete(t);
        }
      };
    },
    start: function () {
      return i = es_t.Running, es_s(r, n), u;
    },
    stop: function () {
      return i = es_t.Stopped, o.clear(), u;
    },

    get state() {
      return r;
    },

    get status() {
      return i;
    }

  };
  return u;
}


;// CONCATENATED MODULE: ./node_modules/@reach/utils/use-constant/dist/reach-utils-use-constant.esm.js

/**
 * React hook for creating a value exactly once.
 * @see https://github.com/Andarist/use-constant
 */

function useConstant(fn) {
  var ref = s();

  if (!ref.current) {
    ref.current = {
      v: fn()
    };
  }

  return ref.current.v;
}


;// CONCATENATED MODULE: ./node_modules/@reach/machine/dist/reach-machine.esm.js






function reach_machine_esm_extends() {
  reach_machine_esm_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return reach_machine_esm_extends.apply(this, arguments);
}

var getServiceState = function getServiceState(service) {
  var currentValue;
  service.subscribe(function (state) {
    currentValue = state;
  }).unsubscribe();
  return currentValue;
};
/**
 * This `useMachine` works very similiarly to what you get from `@xstate/react`
 * with some additions.
 *  - A second argument `refs` is passed to send all of our refs into our
 *    machine's contextual data object.
 *  - We wrap the `send` function so that refs are updated included in all of
 *    our events so we can use their current value (generally DOM nodes)
 *    anywhere in our actions.
 *  - We initialize the machine inside the component rather than throwing an
 *    error if an outside initializer creates a value that doesn't match. This
 *    is useful as some components may need a different initial state or some
 *    initial data based on props. We should *generally* just update the state
 *    with an event via useEffect and depend on a static initial value, but this
 *    is difficult if that initial value matters for SSR or to prevent some
 *    layout jank before the first paint. I don't think there's a problem with
 *    this approach, but we'll see what happens.
 *
 * @param initialMachine
 * @param refs
 */


function useMachine(initialMachine, refs, DEBUG) {
  // State machine should not change between renders, so let's store it in a
  // ref. This should also help if we need to use a creator function to inject
  // dynamic initial state values based on props.
  var machineRef = s(initialMachine);
  var service = useConstant(function () {
    return es_f(machineRef.current).start();
  });
  var lastEventType = s(null);

  var _React$useState = l(function () {
    return getServiceState(service);
  }),
      state = _React$useState[0],
      setState = _React$useState[1]; // This function reference will change on every render if we just pass on
  // current.matches, but it shouldn't change unless the current value is
  // updated. This was causing some lagginess when profiling in Listbox but
  // is probably an issue everywhere since the parent components that handle
  // state logic at the top might re-create context on each render as a
  // result of this change.
  // Add refs to every event so we can use them to perform actions.


  var send = A(function (rawEvent) {
    var event = isString(rawEvent) ? {
      type: rawEvent
    } : rawEvent;
    var refValues = unwrapRefs(refs);
    service.send(reach_machine_esm_extends({}, event, {
      lastEventType: lastEventType.current,
      refs: refValues
    }));
    lastEventType.current = event.type;

    if (false) {}
  }, // We can disable the lint warning here. Refs will always be refs
  // (TypeScript enforced!) and should not trigger a re-render. The state
  // machine service persist for the life of the component.
  // eslint-disable-next-line react-hooks/exhaustive-deps
  [DEBUG]);
  y(function () {
    service.subscribe(function setStateIfChanged(newState) {
      if (newState.changed) {
        setState(newState);
      }
    });
    return function () {
      service.stop();
    };
  }, [service]);
  y(function () {
    if (false) {}
  }, [DEBUG, state]); // We are going to pass along our state without the actions to avoid excess
  // renders when the reference changes. We haven't really needed them at this
  // point, but if we do we can maybe reconsider this approach.

  var memoizedState = d(function () {
    return reach_machine_esm_extends({}, state, {
      matches: function matches(value) {
        return value === state.value;
      }
    });
  }, // eslint-disable-next-line react-hooks/exhaustive-deps
  [state.changed, state.context, state.value]);
  return [memoizedState, send, service];
}
/**
 * Converts an object with React refs into an object with the same keys and
 * the current value of those refs.
 *
 * @param refs
 */


function unwrapRefs(refs) {
  return Object.entries(refs).reduce(function (value, _ref) {
    var name = _ref[0],
        ref = _ref[1];
    value[name] = ref.current;
    return value;
  }, {});
}
/**
 * Most of the time you want to create a static state machine outside of your
 * component, but in some cases we may need data from props in the first render
 * cycle. We can create our machine in each component IF we only create it once
 * and guarantee that it never changes between renders.
 *
 * This hook can take a machine definition created by a function inline to use
 * values defined in the component, and we never change the machine for the
 * life of the component.
 *
 * @param machineDefinition
 * @param options
 */


function useCreateMachine(machineDefinition, options) {
  return useConstant(function () {
    return es_c(machineDefinition, options);
  });
} ////////////////////////////////////////////////////////////////////////////////



;// CONCATENATED MODULE: ./node_modules/@reach/listbox/dist/reach-listbox.esm.js

















function reach_listbox_esm_extends() {
  reach_listbox_esm_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return reach_listbox_esm_extends.apply(this, arguments);
}

function reach_listbox_esm_objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

var _commonEvents; ////////////////////////////////////////////////////////////////////////////////
// States


var ListboxStates; ////////////////////////////////////////////////////////////////////////////////
// Events

(function (ListboxStates) {
  ListboxStates["Idle"] = "IDLE";
  ListboxStates["Open"] = "OPEN";
  ListboxStates["Navigating"] = "NAVIGATING";
  ListboxStates["Dragging"] = "DRAGGING";
  ListboxStates["Interacting"] = "INTERACTING";
})(ListboxStates || (ListboxStates = {}));

var ListboxEvents; ////////////////////////////////////////////////////////////////////////////////
// Actions and conditions

(function (ListboxEvents) {
  ListboxEvents["ButtonMouseDown"] = "BUTTON_MOUSE_DOWN";
  ListboxEvents["ButtonMouseUp"] = "BUTTON_MOUSE_UP";
  ListboxEvents["Blur"] = "BLUR";
  ListboxEvents["ClearNavSelection"] = "CLEAR_NAV_SELECTION";
  ListboxEvents["ClearTypeahead"] = "CLEAR_TYPEAHEAD";
  ListboxEvents["GetDerivedData"] = "GET_DERIVED_DATA";
  ListboxEvents["KeyDownEscape"] = "KEY_DOWN_ESCAPE";
  ListboxEvents["KeyDownEnter"] = "KEY_DOWN_ENTER";
  ListboxEvents["KeyDownSpace"] = "KEY_DOWN_SPACE";
  ListboxEvents["KeyDownNavigate"] = "KEY_DOWN_NAVIGATE";
  ListboxEvents["KeyDownSearch"] = "KEY_DOWN_SEARCH";
  ListboxEvents["KeyDownTab"] = "KEY_DOWN_TAB";
  ListboxEvents["KeyDownShiftTab"] = "KEY_DOWN_SHIFT_TAB";
  ListboxEvents["OptionTouchStart"] = "OPTION_TOUCH_START";
  ListboxEvents["OptionMouseMove"] = "OPTION_MOUSE_MOVE";
  ListboxEvents["OptionMouseEnter"] = "OPTION_MOUSE_ENTER";
  ListboxEvents["OptionMouseDown"] = "OPTION_MOUSE_DOWN";
  ListboxEvents["OptionMouseUp"] = "OPTION_MOUSE_UP";
  ListboxEvents["OptionClick"] = "OPTION_CLICK";
  ListboxEvents["ListMouseUp"] = "LIST_MOUSE_UP";
  ListboxEvents["OptionPress"] = "OPTION_PRESS";
  ListboxEvents["OutsideMouseDown"] = "OUTSIDE_MOUSE_DOWN";
  ListboxEvents["OutsideMouseUp"] = "OUTSIDE_MOUSE_UP";
  ListboxEvents["ValueChange"] = "VALUE_CHANGE";
  ListboxEvents["PopoverPointerDown"] = "POPOVER_POINTER_DOWN";
  ListboxEvents["PopoverPointerUp"] = "POPOVER_POINTER_UP";
  ListboxEvents["UpdateAfterTypeahead"] = "UPDATE_AFTER_TYPEAHEAD";
})(ListboxEvents || (ListboxEvents = {}));

var clearNavigationValue = /*#__PURE__*/es_r({
  navigationValue: null
});
var clearTypeahead = /*#__PURE__*/es_r({
  typeaheadQuery: null
});
var assignValue = /*#__PURE__*/es_r({
  value: function value(_, event) {
    return event.value;
  }
});
var reach_listbox_esm_navigate = /*#__PURE__*/es_r({
  navigationValue: function navigationValue(data, event) {
    return event.value;
  }
});
var navigateFromCurrentValue = /*#__PURE__*/es_r({
  navigationValue: function navigationValue(data) {
    // Before we navigate based on the current value, we need to make sure the
    // current value is selectable. If not, we should instead navigate to the
    // first selectable option.
    var selected = findOptionFromValue(data.value, data.options);

    if (selected && !selected.disabled) {
      return data.value;
    } else {
      var _data$options$find;

      return ((_data$options$find = data.options.find(function (option) {
        return !option.disabled;
      })) == null ? void 0 : _data$options$find.value) || null;
    }
  }
});

function listboxLostFocus(data, event) {
  if (event.type === ListboxEvents.Blur) {
    var _event$refs = event.refs,
        list = _event$refs.list,
        popover = _event$refs.popover;
    var relatedTarget = event.relatedTarget;
    var ownerDocument = getOwnerDocument(popover);
    return !!((ownerDocument == null ? void 0 : ownerDocument.activeElement) !== list && popover && !popover.contains(relatedTarget || (ownerDocument == null ? void 0 : ownerDocument.activeElement)));
  }

  return false;
}

function clickedOutsideOfListbox(data, event) {
  if (event.type === ListboxEvents.OutsideMouseDown || event.type === ListboxEvents.OutsideMouseUp) {
    var _event$refs2 = event.refs,
        button = _event$refs2.button,
        popover = _event$refs2.popover;
    var relatedTarget = event.relatedTarget; // Close the popover IF:

    return !!( // clicked element is not the button
    relatedTarget !== button && // clicked element is not inside the button
    button && !button.contains(relatedTarget) && // clicked element is not inside the popover
    popover && !popover.contains(relatedTarget));
  }

  return false;
}

function optionIsActive(data, event) {
  return !!data.options.find(function (option) {
    return option.value === data.navigationValue;
  });
}

function shouldNavigate(data, event) {
  var _event$refs3 = event.refs,
      popover = _event$refs3.popover,
      list = _event$refs3.list;
  var relatedTarget = event.relatedTarget; // When a blur event happens, we want to move to Navigating state unless the
  // user is interacting with elements inside the popover...

  if (popover && relatedTarget && popover.contains(relatedTarget) && relatedTarget !== list) {
    return false;
  } // ...otherwise, just make sure the next option is selectable


  return optionIsActive(data);
}

function focusList(data, event) {
  requestAnimationFrame(function () {
    event.refs.list && event.refs.list.focus();
  });
}

function focusButton(data, event) {
  event.refs.button && event.refs.button.focus();
}

function listboxIsNotDisabled(data, event) {
  return !event.disabled;
}

function optionIsNavigable(data, event) {
  if (event.type === ListboxEvents.OptionTouchStart) {
    if (event && event.disabled) {
      return false;
    }
  }

  return true;
}

function optionIsSelectable(data, event) {
  if ("disabled" in event && event.disabled) {
    return false;
  }

  if ("value" in event) {
    return event.value != null;
  }

  return data.navigationValue != null;
}

function selectOption(data, event) {
  event.callback && event.callback(event.value);
}

function submitForm(data, event) {
  if (event.type !== ListboxEvents.KeyDownEnter) {
    return;
  } // So this one is a little weird, but here's what we're doing.
  // When a user presses Enter in the context of a form, the form
  // should submit. Now I know you're probably thinking:
  //
  //      "Aha! I've got it!"
  //          > inputNode.form.submit()
  //      ** cracks knuckles ** "Phew. My work here is done."
  //
  // But alas, we are not so lucky. What's really happening when a
  // user presses enter in a normal form field is that the browser
  // looks at the form the input is in, then looks for the first
  // button or input in that form where its type property is `submit`,
  // then it triggers a click event on that button. COOL, CARRY ON.
  //
  // If we were to fire inputNode.form.submit(), this would bypass any
  // onSubmit handler in the form and just do what the browser
  // normally does when you submit a form and trigger a page refresh.
  // No bueno. So we do what the browser does and just go on a duck
  // hunt for the first submit button in the form and we click that
  // sucker.


  var hiddenInput = event.refs.hiddenInput;

  if (hiddenInput && hiddenInput.form) {
    var submitButton = hiddenInput.form.querySelector("button,[type='submit']");
    submitButton && submitButton.click();
  }
}

var setTypeahead = /*#__PURE__*/es_r({
  typeaheadQuery: function typeaheadQuery(data, event) {
    return (data.typeaheadQuery || "") + event.query;
  }
});
var setValueFromTypeahead = /*#__PURE__*/es_r({
  value: function value(data, event) {
    if (event.type === ListboxEvents.UpdateAfterTypeahead && event.query) {
      var match = findOptionFromTypeahead(data.options, event.query);

      if (match && !match.disabled) {
        event.callback && event.callback(match.value);
        return match.value;
      }
    }

    return data.value;
  }
});
var setNavSelectionFromTypeahead = /*#__PURE__*/es_r({
  navigationValue: function navigationValue(data, event) {
    if (event.type === ListboxEvents.UpdateAfterTypeahead && event.query) {
      var match = findOptionFromTypeahead(data.options, event.query);

      if (match && !match.disabled) {
        return match.value;
      }
    }

    return data.navigationValue;
  }
});
var commonEvents = (_commonEvents = {}, _commonEvents[ListboxEvents.GetDerivedData] = {
  actions: /*#__PURE__*/es_r(function (ctx, event) {
    return reach_listbox_esm_extends({}, ctx, event.data);
  })
}, _commonEvents[ListboxEvents.ValueChange] = {
  actions: [assignValue, selectOption]
}, _commonEvents); ////////////////////////////////////////////////////////////////////////////////

/**
 * Initializer for our state machine.
 *
 * @param initial
 * @param props
 */

var createMachineDefinition = function createMachineDefinition(_ref) {
  var _extends2, _extends3, _extends4, _extends5, _extends6, _states;

  var value = _ref.value;
  return {
    id: "listbox",
    initial: ListboxStates.Idle,
    context: {
      value: value,
      options: [],
      navigationValue: null,
      typeaheadQuery: null
    },
    states: (_states = {}, _states[ListboxStates.Idle] = {
      on: reach_listbox_esm_extends({}, commonEvents, (_extends2 = {}, _extends2[ListboxEvents.ButtonMouseDown] = {
        target: ListboxStates.Open,
        actions: [navigateFromCurrentValue],
        cond: listboxIsNotDisabled
      }, _extends2[ListboxEvents.KeyDownSpace] = {
        target: ListboxStates.Navigating,
        actions: [navigateFromCurrentValue, focusList],
        cond: listboxIsNotDisabled
      }, _extends2[ListboxEvents.KeyDownSearch] = {
        target: ListboxStates.Idle,
        actions: setTypeahead,
        cond: listboxIsNotDisabled
      }, _extends2[ListboxEvents.UpdateAfterTypeahead] = {
        target: ListboxStates.Idle,
        actions: [setValueFromTypeahead],
        cond: listboxIsNotDisabled
      }, _extends2[ListboxEvents.ClearTypeahead] = {
        target: ListboxStates.Idle,
        actions: clearTypeahead
      }, _extends2[ListboxEvents.KeyDownNavigate] = {
        target: ListboxStates.Navigating,
        actions: [navigateFromCurrentValue, clearTypeahead, focusList],
        cond: listboxIsNotDisabled
      }, _extends2[ListboxEvents.KeyDownEnter] = {
        actions: [submitForm],
        cond: listboxIsNotDisabled
      }, _extends2))
    }, _states[ListboxStates.Interacting] = {
      entry: [clearNavigationValue],
      on: reach_listbox_esm_extends({}, commonEvents, (_extends3 = {}, _extends3[ListboxEvents.ClearNavSelection] = {
        actions: [clearNavigationValue, focusList]
      }, _extends3[ListboxEvents.KeyDownEnter] = {
        target: ListboxStates.Idle,
        actions: [assignValue, clearTypeahead, focusButton, selectOption],
        cond: optionIsSelectable
      }, _extends3[ListboxEvents.KeyDownSpace] = {
        target: ListboxStates.Idle,
        actions: [assignValue, clearTypeahead, focusButton, selectOption],
        cond: optionIsSelectable
      }, _extends3[ListboxEvents.ButtonMouseDown] = {
        target: ListboxStates.Idle,
        // When the user triggers a mouseDown event on the button, we call
        // event.preventDefault() because the browser will naturally send a
        // mouseup event and click, which will reopen the button (which we
        // don't want). As such, the click won't blur the open list or
        // re-focus the trigger, so we call `focusButton` to do that manually.
        // We could work around this with deferred transitions with xstate,
        // but @xstate/fsm currently doesn't support that feature and this
        // works good enough for the moment.
        actions: [focusButton]
      }, _extends3[ListboxEvents.KeyDownEscape] = {
        target: ListboxStates.Idle,
        actions: [focusButton]
      }, _extends3[ListboxEvents.OptionMouseDown] = {
        target: ListboxStates.Dragging
      }, _extends3[ListboxEvents.OutsideMouseDown] = [{
        target: ListboxStates.Idle,
        cond: clickedOutsideOfListbox,
        actions: clearTypeahead
      }, {
        target: ListboxStates.Dragging,
        actions: clearTypeahead,
        cond: optionIsActive
      }], _extends3[ListboxEvents.OutsideMouseUp] = [{
        target: ListboxStates.Idle,
        cond: clickedOutsideOfListbox,
        actions: clearTypeahead
      }, {
        target: ListboxStates.Navigating,
        cond: optionIsActive
      }, {
        target: ListboxStates.Interacting,
        actions: clearTypeahead
      }], _extends3[ListboxEvents.KeyDownEnter] = ListboxStates.Interacting, _extends3[ListboxEvents.Blur] = [{
        target: ListboxStates.Idle,
        cond: listboxLostFocus,
        actions: clearTypeahead
      }, {
        target: ListboxStates.Navigating,
        cond: shouldNavigate
      }, {
        target: ListboxStates.Interacting,
        actions: clearTypeahead
      }], _extends3[ListboxEvents.OptionTouchStart] = {
        target: ListboxStates.Navigating,
        actions: [reach_listbox_esm_navigate, clearTypeahead],
        cond: optionIsNavigable
      }, _extends3[ListboxEvents.OptionClick] = {
        target: ListboxStates.Idle,
        actions: [assignValue, clearTypeahead, focusButton, selectOption],
        cond: optionIsSelectable
      }, _extends3[ListboxEvents.OptionPress] = {
        target: ListboxStates.Idle,
        actions: [assignValue, clearTypeahead, focusButton, selectOption],
        cond: optionIsSelectable
      }, _extends3[ListboxEvents.OptionMouseEnter] = {
        target: ListboxStates.Navigating,
        actions: [reach_listbox_esm_navigate, clearTypeahead],
        cond: optionIsNavigable
      }, _extends3[ListboxEvents.KeyDownNavigate] = {
        target: ListboxStates.Navigating,
        actions: [reach_listbox_esm_navigate, clearTypeahead, focusList]
      }, _extends3))
    }, _states[ListboxStates.Open] = {
      on: reach_listbox_esm_extends({}, commonEvents, (_extends4 = {}, _extends4[ListboxEvents.ClearNavSelection] = {
        actions: [clearNavigationValue]
      }, _extends4[ListboxEvents.KeyDownEnter] = {
        target: ListboxStates.Idle,
        actions: [assignValue, clearTypeahead, focusButton, selectOption],
        cond: optionIsSelectable
      }, _extends4[ListboxEvents.KeyDownSpace] = {
        target: ListboxStates.Idle,
        actions: [assignValue, clearTypeahead, focusButton, selectOption],
        cond: optionIsSelectable
      }, _extends4[ListboxEvents.ButtonMouseDown] = {
        target: ListboxStates.Idle,
        actions: [focusButton]
      }, _extends4[ListboxEvents.KeyDownEscape] = {
        target: ListboxStates.Idle,
        actions: [focusButton]
      }, _extends4[ListboxEvents.OptionMouseDown] = {
        target: ListboxStates.Dragging
      }, _extends4[ListboxEvents.OutsideMouseDown] = [{
        target: ListboxStates.Idle,
        cond: clickedOutsideOfListbox,
        actions: clearTypeahead
      }, {
        target: ListboxStates.Dragging,
        cond: optionIsActive
      }, {
        target: ListboxStates.Interacting,
        actions: clearTypeahead
      }], _extends4[ListboxEvents.OutsideMouseUp] = [{
        target: ListboxStates.Idle,
        cond: clickedOutsideOfListbox,
        actions: clearTypeahead
      }, {
        target: ListboxStates.Navigating,
        cond: optionIsActive
      }, {
        target: ListboxStates.Interacting,
        actions: clearTypeahead
      }], _extends4[ListboxEvents.Blur] = [{
        target: ListboxStates.Idle,
        cond: listboxLostFocus,
        actions: clearTypeahead
      }, {
        target: ListboxStates.Navigating,
        cond: shouldNavigate
      }, {
        target: ListboxStates.Interacting,
        actions: clearTypeahead
      }], _extends4[ListboxEvents.ButtonMouseUp] = {
        target: ListboxStates.Navigating,
        actions: [navigateFromCurrentValue, focusList]
      }, _extends4[ListboxEvents.ListMouseUp] = {
        target: ListboxStates.Navigating,
        actions: [navigateFromCurrentValue, focusList]
      }, _extends4[ListboxEvents.OptionTouchStart] = {
        target: ListboxStates.Navigating,
        actions: [reach_listbox_esm_navigate, clearTypeahead],
        cond: optionIsNavigable
      }, _extends4[ListboxEvents.OptionClick] = {
        target: ListboxStates.Idle,
        actions: [assignValue, clearTypeahead, focusButton, selectOption],
        cond: optionIsSelectable
      }, _extends4[ListboxEvents.OptionPress] = {
        target: ListboxStates.Idle,
        actions: [assignValue, clearTypeahead, focusButton, selectOption],
        cond: optionIsSelectable
      }, _extends4[ListboxEvents.KeyDownNavigate] = {
        target: ListboxStates.Navigating,
        actions: [reach_listbox_esm_navigate, clearTypeahead, focusList]
      }, _extends4[ListboxEvents.KeyDownSearch] = {
        target: ListboxStates.Navigating,
        actions: setTypeahead
      }, _extends4[ListboxEvents.UpdateAfterTypeahead] = {
        actions: [setNavSelectionFromTypeahead]
      }, _extends4[ListboxEvents.ClearTypeahead] = {
        actions: clearTypeahead
      }, _extends4[ListboxEvents.OptionMouseMove] = [{
        target: ListboxStates.Dragging,
        actions: [reach_listbox_esm_navigate],
        cond: optionIsNavigable
      }, {
        target: ListboxStates.Dragging
      }], _extends4))
    }, _states[ListboxStates.Dragging] = {
      on: reach_listbox_esm_extends({}, commonEvents, (_extends5 = {}, _extends5[ListboxEvents.ClearNavSelection] = {
        actions: [clearNavigationValue]
      }, _extends5[ListboxEvents.KeyDownEnter] = {
        target: ListboxStates.Idle,
        actions: [assignValue, clearTypeahead, focusButton, selectOption],
        cond: optionIsSelectable
      }, _extends5[ListboxEvents.KeyDownSpace] = {
        target: ListboxStates.Idle,
        actions: [assignValue, clearTypeahead, focusButton, selectOption],
        cond: optionIsSelectable
      }, _extends5[ListboxEvents.ButtonMouseDown] = {
        target: ListboxStates.Idle,
        actions: [focusButton]
      }, _extends5[ListboxEvents.KeyDownEscape] = {
        target: ListboxStates.Idle,
        actions: [focusButton]
      }, _extends5[ListboxEvents.OptionMouseDown] = {
        target: ListboxStates.Dragging
      }, _extends5[ListboxEvents.OutsideMouseDown] = [{
        target: ListboxStates.Idle,
        cond: clickedOutsideOfListbox,
        actions: clearTypeahead
      }, {
        target: ListboxStates.Navigating,
        cond: optionIsActive
      }, {
        target: ListboxStates.Interacting,
        actions: clearTypeahead
      }], _extends5[ListboxEvents.OutsideMouseUp] = [{
        target: ListboxStates.Idle,
        cond: clickedOutsideOfListbox,
        actions: clearTypeahead
      }, {
        target: ListboxStates.Navigating,
        cond: optionIsActive,
        actions: focusList
      }, {
        target: ListboxStates.Interacting,
        actions: [clearTypeahead, focusList]
      }], _extends5[ListboxEvents.Blur] = [{
        target: ListboxStates.Idle,
        cond: listboxLostFocus,
        actions: clearTypeahead
      }, {
        target: ListboxStates.Navigating,
        cond: shouldNavigate
      }, {
        target: ListboxStates.Interacting,
        actions: clearTypeahead
      }], _extends5[ListboxEvents.ButtonMouseUp] = {
        target: ListboxStates.Navigating,
        actions: [navigateFromCurrentValue, focusList]
      }, _extends5[ListboxEvents.OptionTouchStart] = {
        target: ListboxStates.Navigating,
        actions: [reach_listbox_esm_navigate, clearTypeahead],
        cond: optionIsNavigable
      }, _extends5[ListboxEvents.OptionClick] = {
        target: ListboxStates.Idle,
        actions: [assignValue, clearTypeahead, focusButton, selectOption],
        cond: optionIsSelectable
      }, _extends5[ListboxEvents.OptionPress] = {
        target: ListboxStates.Idle,
        actions: [assignValue, clearTypeahead, focusButton, selectOption],
        cond: optionIsSelectable
      }, _extends5[ListboxEvents.OptionMouseEnter] = {
        target: ListboxStates.Dragging,
        actions: [reach_listbox_esm_navigate, clearTypeahead],
        cond: optionIsNavigable
      }, _extends5[ListboxEvents.KeyDownNavigate] = {
        target: ListboxStates.Navigating,
        actions: [reach_listbox_esm_navigate, clearTypeahead, focusList]
      }, _extends5[ListboxEvents.KeyDownSearch] = {
        target: ListboxStates.Navigating,
        actions: setTypeahead
      }, _extends5[ListboxEvents.UpdateAfterTypeahead] = {
        actions: [setNavSelectionFromTypeahead]
      }, _extends5[ListboxEvents.ClearTypeahead] = {
        actions: clearTypeahead
      }, _extends5[ListboxEvents.OptionMouseMove] = [{
        target: ListboxStates.Navigating,
        actions: [reach_listbox_esm_navigate],
        cond: optionIsNavigable
      }, {
        target: ListboxStates.Navigating
      }], _extends5[ListboxEvents.OptionMouseUp] = {
        target: ListboxStates.Idle,
        actions: [assignValue, clearTypeahead, focusButton, selectOption],
        cond: optionIsSelectable
      }, _extends5))
    }, _states[ListboxStates.Navigating] = {
      on: reach_listbox_esm_extends({}, commonEvents, (_extends6 = {}, _extends6[ListboxEvents.ClearNavSelection] = {
        actions: [clearNavigationValue, focusList]
      }, _extends6[ListboxEvents.KeyDownEnter] = {
        target: ListboxStates.Idle,
        actions: [assignValue, clearTypeahead, focusButton, selectOption],
        cond: optionIsSelectable
      }, _extends6[ListboxEvents.KeyDownSpace] = {
        target: ListboxStates.Idle,
        actions: [assignValue, clearTypeahead, focusButton, selectOption],
        cond: optionIsSelectable
      }, _extends6[ListboxEvents.ButtonMouseDown] = {
        target: ListboxStates.Idle,
        actions: [focusButton]
      }, _extends6[ListboxEvents.KeyDownEscape] = {
        target: ListboxStates.Idle,
        actions: [focusButton]
      }, _extends6[ListboxEvents.OptionMouseDown] = {
        target: ListboxStates.Dragging
      }, _extends6[ListboxEvents.OutsideMouseDown] = [{
        target: ListboxStates.Idle,
        cond: clickedOutsideOfListbox,
        actions: clearTypeahead
      }, {
        target: ListboxStates.Navigating,
        cond: optionIsActive
      }, {
        target: ListboxStates.Interacting,
        actions: clearTypeahead
      }], _extends6[ListboxEvents.OutsideMouseUp] = [{
        target: ListboxStates.Idle,
        cond: clickedOutsideOfListbox,
        actions: clearTypeahead
      }, {
        target: ListboxStates.Navigating,
        cond: optionIsActive
      }, {
        target: ListboxStates.Interacting,
        actions: clearTypeahead
      }], _extends6[ListboxEvents.Blur] = [{
        target: ListboxStates.Idle,
        cond: listboxLostFocus,
        actions: clearTypeahead
      }, {
        target: ListboxStates.Navigating,
        cond: shouldNavigate
      }, {
        target: ListboxStates.Interacting,
        actions: clearTypeahead
      }], _extends6[ListboxEvents.ButtonMouseUp] = {
        target: ListboxStates.Navigating,
        actions: [navigateFromCurrentValue, focusList]
      }, _extends6[ListboxEvents.OptionTouchStart] = {
        target: ListboxStates.Navigating,
        actions: [reach_listbox_esm_navigate, clearTypeahead],
        cond: optionIsNavigable
      }, _extends6[ListboxEvents.OptionClick] = {
        target: ListboxStates.Idle,
        actions: [assignValue, clearTypeahead, focusButton, selectOption],
        cond: optionIsSelectable
      }, _extends6[ListboxEvents.OptionPress] = {
        target: ListboxStates.Idle,
        actions: [assignValue, clearTypeahead, focusButton, selectOption],
        cond: optionIsSelectable
      }, _extends6[ListboxEvents.OptionMouseEnter] = {
        target: ListboxStates.Navigating,
        actions: [reach_listbox_esm_navigate, clearTypeahead],
        cond: optionIsNavigable
      }, _extends6[ListboxEvents.KeyDownNavigate] = {
        target: ListboxStates.Navigating,
        actions: [reach_listbox_esm_navigate, clearTypeahead, focusList]
      }, _extends6[ListboxEvents.KeyDownSearch] = {
        target: ListboxStates.Navigating,
        actions: setTypeahead
      }, _extends6[ListboxEvents.UpdateAfterTypeahead] = {
        actions: [setNavSelectionFromTypeahead]
      }, _extends6[ListboxEvents.ClearTypeahead] = {
        actions: clearTypeahead
      }, _extends6[ListboxEvents.OptionMouseMove] = [{
        target: ListboxStates.Navigating,
        actions: [reach_listbox_esm_navigate],
        cond: optionIsNavigable
      }, {
        target: ListboxStates.Navigating
      }], _extends6))
    }, _states)
  };
}; ////////////////////////////////////////////////////////////////////////////////


function findOptionFromTypeahead(options, string) {
  if (string === void 0) {
    string = "";
  }

  if (!string) return null;
  var found = options.find(function (option) {
    return !option.disabled && option.label && option.label.toLowerCase().startsWith(string.toLowerCase());
  });
  return found || null;
}

function findOptionFromValue(value, options) {
  return value ? options.find(function (option) {
    return option.value === value;
  }) : undefined;
} ////////////////////////////////////////////////////////////////////////////////
// Types

/**
 * Shared partial interface for all of our event objects.
 */


var _excluded = ["as", "aria-labelledby", "aria-label", "children", "defaultValue", "disabled", "form", "name", "onChange", "required", "value", "__componentName"],
    _excluded2 = (/* unused pure expression or super */ null && (["arrow", "button", "children", "portal"])),
    _excluded3 = ["aria-label", "arrow", "as", "children", "onKeyDown", "onMouseDown", "onMouseUp"],
    _excluded4 = ["as", "children"],
    _excluded5 = ["as", "position", "onBlur", "onKeyDown", "onMouseUp", "portal", "unstable_observableRefs"],
    _excluded6 = ["as"],
    _excluded7 = ["as", "children", "disabled", "onClick", "onMouseDown", "onMouseEnter", "onMouseLeave", "onMouseMove", "onMouseUp", "onTouchStart", "value", "label"],
    _excluded8 = (/* unused pure expression or super */ null && (["as", "label", "children"])),
    _excluded9 = (/* unused pure expression or super */ null && (["as"]));
var DEBUG = false; ////////////////////////////////////////////////////////////////////////////////
// ListboxContext

var ListboxDescendantContext = /*#__PURE__*/createDescendantContext("ListboxDescendantContext");
var ListboxContext = /*#__PURE__*/createNamedContext("ListboxContext", {});
var ListboxGroupContext = /*#__PURE__*/createNamedContext("ListboxGroupContext", {}); ////////////////////////////////////////////////////////////////////////////////

/**
 * ListboxInput
 *
 * The top-level component and context provider for the listbox.
 *
 * @see Docs https://reach.tech/listbox#listboxinput
 */

var ListboxInput = /*#__PURE__*/compat_module_x(function ListboxInput(_ref, forwardedRef) {
  var _ref$as = _ref.as,
      Comp = _ref$as === void 0 ? "div" : _ref$as,
      ariaLabelledBy = _ref["aria-labelledby"],
      ariaLabel = _ref["aria-label"],
      children = _ref.children,
      defaultValue = _ref.defaultValue,
      _ref$disabled = _ref.disabled,
      disabled = _ref$disabled === void 0 ? false : _ref$disabled,
      form = _ref.form,
      name = _ref.name,
      onChange = _ref.onChange,
      required = _ref.required,
      valueProp = _ref.value,
      _ref$__componentName = _ref.__componentName,
      __componentName = _ref$__componentName === void 0 ? "ListboxInput" : _ref$__componentName,
      props = reach_listbox_esm_objectWithoutPropertiesLoose(_ref, _excluded);

  var isControlled = s(valueProp != null);

  var _useDescendantsInit = useDescendantsInit(),
      options = _useDescendantsInit[0],
      setOptions = _useDescendantsInit[1]; // DOM refs


  var buttonRef = s(null);
  var hiddenInputRef = s(null);
  var highlightedOptionRef = s(null);
  var inputRef = s(null);
  var listRef = s(null);
  var popoverRef = s(null);
  var selectedOptionRef = s(null);
  var machine = useCreateMachine(createMachineDefinition({
    // The initial value of our machine should come from the `value` or
    // `defaultValue` props if they exist.
    value: (isControlled.current ? valueProp : defaultValue) || null
  }));

  var _useMachine = useMachine(machine, {
    button: buttonRef,
    hiddenInput: hiddenInputRef,
    highlightedOption: highlightedOptionRef,
    input: inputRef,
    list: listRef,
    popover: popoverRef,
    selectedOption: selectedOptionRef
  }, DEBUG),
      state = _useMachine[0],
      send = _useMachine[1];

  function handleValueChange(newValue) {
    if (newValue !== state.context.value) {
      onChange == null ? void 0 : onChange(newValue);
    }
  } // IDs for aria attributes


  var _id = reach_auto_id_esm_useId(props.id);

  var id = props.id || reach_utils_make_id_esm_makeId("listbox-input", _id);
  var ref = useComposedRefs(inputRef, forwardedRef); // If the button has children, we just render them as the label.
  // Otherwise we'll find the option with a value that matches the listbox value
  // and use its label in the button. We'll get that here and send it to the
  // button via context.
  // If a user needs the label for SSR to prevent hydration mismatch issues,
  // they need to control the state of the component and pass a label directly
  // to the button.

  var valueLabel = d(function () {
    var selected = options.find(function (option) {
      return option.value === state.context.value;
    });
    return selected ? selected.label : null;
  }, [options, state.context.value]);
  var isExpanded = isListboxExpanded(state.value);
  var context = {
    ariaLabel: ariaLabel,
    ariaLabelledBy: ariaLabelledBy,
    buttonRef: buttonRef,
    disabled: disabled,
    highlightedOptionRef: highlightedOptionRef,
    isExpanded: isExpanded,
    listboxId: id,
    listboxValueLabel: valueLabel,
    listRef: listRef,
    onValueChange: handleValueChange,
    popoverRef: popoverRef,
    selectedOptionRef: selectedOptionRef,
    send: send,
    state: state.value,
    stateData: state.context
  }; // For uncontrolled listbox components where no `defaultValue` is provided, we
  // will update the value based on the value of the first selectable option.
  // We call the update directly because:
  //   A) we only ever need to do this once, so we can guard with a ref
  //   B) useLayoutEffect races useDecendant, so we might not have options yet
  //   C) useEffect will cause a flash

  var mounted = s(false);

  if (!isControlled.current && // the app is not controlling state
  defaultValue == null && // there is no default value
  !mounted.current && // we haven't done this already
  options.length // we have some options
  ) {
      mounted.current = true;
      var first = options.find(function (option) {
        return !option.disabled;
      });

      if (first && first.value) {
        send({
          type: ListboxEvents.ValueChange,
          value: first.value
        });
      }
    }

  useControlledSwitchWarning(valueProp, "value", __componentName); // Even if the app controls state, we still need to update it internally to
  // run the state machine transitions

  useControlledStateSync(valueProp, state.context.value, function () {
    send({
      type: ListboxEvents.ValueChange,
      value: valueProp
    });
  });
  reach_utils_use_isomorphic_layout_effect_esm_useIsomorphicLayoutEffect(function () {
    send({
      type: ListboxEvents.GetDerivedData,
      data: {
        options: options
      }
    });
  }, [options, send]);
  y(function () {
    function handleMouseDown(event) {
      var target = event.target,
          relatedTarget = event.relatedTarget;

      if (!reach_listbox_esm_popoverContainsEventTarget(popoverRef.current, target)) {
        send({
          type: ListboxEvents.OutsideMouseDown,
          relatedTarget: relatedTarget || target
        });
      }
    }

    if (isExpanded) {
      window.addEventListener("mousedown", handleMouseDown);
    }

    return function () {
      window.removeEventListener("mousedown", handleMouseDown);
    };
  }, [send, isExpanded]);
  y(function () {
    function handleMouseUp(event) {
      var target = event.target,
          relatedTarget = event.relatedTarget;

      if (!reach_listbox_esm_popoverContainsEventTarget(popoverRef.current, target)) {
        send({
          type: ListboxEvents.OutsideMouseUp,
          relatedTarget: relatedTarget || target
        });
      }
    }

    if (isExpanded) {
      window.addEventListener("mouseup", handleMouseUp);
    }

    return function () {
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [send, isExpanded]);
  useCheckStyles("listbox");
  return /*#__PURE__*/(0,external_commonjs_preact_commonjs2_preact_amd_preact_root_.createElement)(Comp, reach_listbox_esm_extends({}, props, {
    ref: ref,
    "data-reach-listbox-input": "",
    "data-state": isExpanded ? "expanded" : "closed",
    "data-value": state.context.value,
    id: id
  }), /*#__PURE__*/(0,external_commonjs_preact_commonjs2_preact_amd_preact_root_.createElement)(ListboxContext.Provider, {
    value: context
  }, /*#__PURE__*/(0,external_commonjs_preact_commonjs2_preact_amd_preact_root_.createElement)(DescendantProvider, {
    context: ListboxDescendantContext,
    items: options,
    set: setOptions
  }, reach_utils_type_check_esm_isFunction(children) ? children({
    id: id,
    isExpanded: isExpanded,
    value: state.context.value,
    selectedOptionRef: selectedOptionRef,
    highlightedOptionRef: highlightedOptionRef,
    valueLabel: valueLabel,
    // TODO: Remove in 1.0
    expanded: isExpanded
  }) : children, (form || name || required) && /*#__PURE__*/(0,external_commonjs_preact_commonjs2_preact_amd_preact_root_.createElement)("input", {
    ref: hiddenInputRef,
    "data-reach-listbox-hidden-input": "",
    disabled: disabled,
    form: form,
    name: name,
    readOnly: true,
    required: required,
    tabIndex: -1,
    type: "hidden",
    value: state.context.value || ""
  }))));
});

if (false) {}
/**
 * @see Docs https://reach.tech/listbox#listboxinput-props
 */
////////////////////////////////////////////////////////////////////////////////

/**
 * Listbox
 *
 * High-level listbox API
 *
 * @example
 * <Listbox>
 *   <ListboxOption value="1">Option 1</ListboxOption>
 *   <ListboxOption value="2">Option 2</ListboxOption>
 *   <ListboxOption value="3">Option 3</ListboxOption>
 * </Listbox>
 *
 * @see Docs https://reach.tech/listbox#listbox-1
 */


var Listbox = /*#__PURE__*/(/* unused pure expression or super */ null && (forwardRef(function Listbox(_ref2, forwardedRef) {
  var _ref2$arrow = _ref2.arrow,
      arrow = _ref2$arrow === void 0 ? "▼" : _ref2$arrow,
      button = _ref2.button,
      children = _ref2.children,
      _ref2$portal = _ref2.portal,
      portal = _ref2$portal === void 0 ? true : _ref2$portal,
      props = reach_listbox_esm_objectWithoutPropertiesLoose(_ref2, _excluded2);

  return /*#__PURE__*/createElement(ListboxInput, reach_listbox_esm_extends({}, props, {
    __componentName: "Listbox",
    ref: forwardedRef
  }), function (_ref3) {
    var value = _ref3.value,
        valueLabel = _ref3.valueLabel;
    return /*#__PURE__*/createElement(Fragment, null, /*#__PURE__*/createElement(ListboxButton, {
      arrow: arrow,
      children: button ? isFunction(button) ? button({
        value: value,
        label: valueLabel
      }) : button : undefined
    }), /*#__PURE__*/createElement(ListboxPopover, {
      portal: portal
    }, /*#__PURE__*/createElement(ListboxList, null, children)));
  });
})));

if (false) {}
/**
 * @see Docs https://reach.tech/listbox#listbox-props
 */
////////////////////////////////////////////////////////////////////////////////

/**
 * ListboxButton
 *
 * The interactive toggle button that triggers the popover for the listbox.
 *
 * @see Docs https://reach.tech/listbox#listbox-button
 */


var ListboxButtonImpl = /*#__PURE__*/compat_module_x(function ListboxButton(_ref4, forwardedRef) {
  var ariaLabel = _ref4["aria-label"],
      _ref4$arrow = _ref4.arrow,
      arrow = _ref4$arrow === void 0 ? false : _ref4$arrow,
      _ref4$as = _ref4.as,
      Comp = _ref4$as === void 0 ? "span" : _ref4$as,
      children = _ref4.children,
      onKeyDown = _ref4.onKeyDown,
      onMouseDown = _ref4.onMouseDown,
      onMouseUp = _ref4.onMouseUp,
      props = reach_listbox_esm_objectWithoutPropertiesLoose(_ref4, _excluded3);

  var _React$useContext = F(ListboxContext),
      buttonRef = _React$useContext.buttonRef,
      send = _React$useContext.send,
      ariaLabelledBy = _React$useContext.ariaLabelledBy,
      disabled = _React$useContext.disabled,
      isExpanded = _React$useContext.isExpanded,
      listboxId = _React$useContext.listboxId,
      stateData = _React$useContext.stateData,
      listboxValueLabel = _React$useContext.listboxValueLabel;

  var listboxValue = stateData.value;
  var ref = useComposedRefs(buttonRef, forwardedRef);
  var handleKeyDown = useKeyDown();

  function handleMouseDown(event) {
    if (!isRightClick(event.nativeEvent)) {
      event.preventDefault();
      event.stopPropagation();
      send({
        type: ListboxEvents.ButtonMouseDown,
        disabled: disabled
      });
    }
  }

  function handleMouseUp(event) {
    if (!isRightClick(event.nativeEvent)) {
      event.preventDefault();
      event.stopPropagation();
      send({
        type: ListboxEvents.ButtonMouseUp
      });
    }
  }

  var id = reach_utils_make_id_esm_makeId("button", listboxId); // If the button has children, we just render them as the label
  // If a user needs the label on the server to prevent hydration mismatch
  // errors, they need to control the state of the component and pass a label
  // directly to the button.

  var label = d(function () {
    if (!children) {
      return listboxValueLabel;
    } else if (reach_utils_type_check_esm_isFunction(children)) {
      return children({
        isExpanded: isExpanded,
        label: listboxValueLabel,
        value: listboxValue,
        // TODO: Remove in 1.0
        expanded: isExpanded
      });
    }

    return children;
  }, [children, listboxValueLabel, isExpanded, listboxValue]);
  return /*#__PURE__*/(0,external_commonjs_preact_commonjs2_preact_amd_preact_root_.createElement)(Comp // Applicable to all host language elements regardless of whether a
  // `role` is applied.
  // https://www.w3.org/WAI/PF/aria/states_and_properties#global_states_header
  , reach_listbox_esm_extends({
    "aria-disabled": disabled || undefined // Set by the JavaScript when the listbox is displayed. Otherwise, is
    // not present.
    // https://www.w3.org/TR/wai-aria-practices-1.2/examples/listbox/listbox-collapsible.html
    ,
    "aria-expanded": isExpanded || undefined // Indicates that activating the button displays a listbox.
    // https://www.w3.org/TR/wai-aria-practices-1.2/examples/listbox/listbox-collapsible.html
    ,
    "aria-haspopup": "listbox" // References the two elements whose labels are concatenated by the
    // browser to label the button. The first element is a span containing
    // perceivable label for the listbox component. The second element is
    // the button itself; the button text is set to the name of the
    // currently chosen element.
    // https://www.w3.org/TR/wai-aria-practices-1.2/examples/listbox/listbox-collapsible.html
    // If an `aria-label` is passed, we should skip `aria-labelledby` to
    // avoid confusion.
    ,
    "aria-labelledby": ariaLabel ? undefined : [ariaLabelledBy, id].filter(Boolean).join(" "),
    "aria-label": ariaLabel // Identifies the element as a button widget.
    // https://www.w3.org/TR/wai-aria-practices-1.2/examples/button/button.html
    ,
    role: "button" // Includes the element in the tab sequence.
    // https://www.w3.org/TR/wai-aria-practices-1.2/examples/button/button.html
    ,
    tabIndex: disabled ? -1 : 0
  }, props, {
    ref: ref,
    "data-reach-listbox-button": "",
    id: id,
    onKeyDown: composeEventHandlers(onKeyDown, handleKeyDown),
    onMouseDown: composeEventHandlers(onMouseDown, handleMouseDown),
    onMouseUp: composeEventHandlers(onMouseUp, handleMouseUp)
  }), label, arrow && /*#__PURE__*/(0,external_commonjs_preact_commonjs2_preact_amd_preact_root_.createElement)(ListboxArrow, null, isBoolean(arrow) ? null : arrow));
});

if (false) {}

var ListboxButton = /*#__PURE__*/compat_module_g(ListboxButtonImpl);
/**
 * @see Docs https://reach.tech/listbox#listboxbutton-props
 */
////////////////////////////////////////////////////////////////////////////////

/**
 * ListboxArrow
 *
 * A wrapper component for an arrow to display in the `ListboxButton`
 *
 * @see Docs https://reach.tech/listbox#listboxarrow
 */

var ListboxArrowImpl = /*#__PURE__*/compat_module_x(function ListboxArrow(_ref5, forwardedRef) {
  var _ref5$as = _ref5.as,
      Comp = _ref5$as === void 0 ? "span" : _ref5$as,
      children = _ref5.children,
      props = reach_listbox_esm_objectWithoutPropertiesLoose(_ref5, _excluded4);

  var _React$useContext2 = F(ListboxContext),
      isExpanded = _React$useContext2.isExpanded;

  return /*#__PURE__*/(0,external_commonjs_preact_commonjs2_preact_amd_preact_root_.createElement)(Comp // The arrow provides no semantic value and its inner content should be
  // hidden from the accessibility tree
  , reach_listbox_esm_extends({
    "aria-hidden": true
  }, props, {
    ref: forwardedRef,
    "data-reach-listbox-arrow": "",
    "data-expanded": isExpanded ? "" : undefined
  }), reach_utils_type_check_esm_isFunction(children) ? children({
    isExpanded: isExpanded,
    // TODO: Remove in 1.0
    expanded: isExpanded
  }) : children || "▼");
});

if (false) {}

var ListboxArrow = /*#__PURE__*/compat_module_g(ListboxArrowImpl);
/**
 * @see Docs https://reach.tech/listbox#listboxarrow-props
 */
////////////////////////////////////////////////////////////////////////////////

/**
 * ListboxPopover
 *
 * The popover containing the list of options.
 *
 * @see Docs https://reach.tech/listbox#listboxpopover
 */

var ListboxPopoverImpl = /*#__PURE__*/compat_module_x(function ListboxPopover(_ref6, forwardedRef) {
  var _ref6$as = _ref6.as,
      Comp = _ref6$as === void 0 ? "div" : _ref6$as,
      _ref6$position = _ref6.position,
      position = _ref6$position === void 0 ? positionMatchWidth : _ref6$position,
      onBlur = _ref6.onBlur,
      onKeyDown = _ref6.onKeyDown,
      onMouseUp = _ref6.onMouseUp,
      _ref6$portal = _ref6.portal,
      portal = _ref6$portal === void 0 ? true : _ref6$portal,
      unstable_observableRefs = _ref6.unstable_observableRefs,
      props = reach_listbox_esm_objectWithoutPropertiesLoose(_ref6, _excluded5);

  var _React$useContext3 = F(ListboxContext),
      isExpanded = _React$useContext3.isExpanded,
      buttonRef = _React$useContext3.buttonRef,
      popoverRef = _React$useContext3.popoverRef,
      send = _React$useContext3.send;

  var ref = useComposedRefs(popoverRef, forwardedRef);
  var handleKeyDown = useKeyDown();

  function handleMouseUp() {
    send({
      type: ListboxEvents.ListMouseUp
    });
  }

  var commonProps = reach_listbox_esm_extends({
    hidden: !isExpanded,
    tabIndex: -1
  }, props, {
    ref: ref,
    "data-reach-listbox-popover": "",
    onMouseUp: composeEventHandlers(onMouseUp, handleMouseUp),
    onBlur: composeEventHandlers(onBlur, handleBlur),
    onKeyDown: composeEventHandlers(onKeyDown, handleKeyDown)
  });

  function handleBlur(event) {
    var nativeEvent = event.nativeEvent;
    requestAnimationFrame(function () {
      send({
        type: ListboxEvents.Blur,
        relatedTarget: nativeEvent.relatedTarget || nativeEvent.target
      });
    });
  }

  return portal ? /*#__PURE__*/(0,external_commonjs_preact_commonjs2_preact_amd_preact_root_.createElement)(Popover, reach_listbox_esm_extends({}, commonProps, {
    as: Comp,
    targetRef: buttonRef,
    position: position,
    unstable_observableRefs: unstable_observableRefs
  })) : /*#__PURE__*/(0,external_commonjs_preact_commonjs2_preact_amd_preact_root_.createElement)(Comp, commonProps);
});

if (false) {}

var ListboxPopover = /*#__PURE__*/compat_module_g(ListboxPopoverImpl);
/**
 * @see Docs https://reach.tech/listbox#listboxpopover-props
 */
////////////////////////////////////////////////////////////////////////////////

/**
 * ListboxList
 *
 * The list containing all listbox options.
 *
 * @see Docs https://reach.tech/listbox#listboxlist
 */

var ListboxList = /*#__PURE__*/compat_module_x(function ListboxList(_ref7, forwardedRef) {
  var _ref7$as = _ref7.as,
      Comp = _ref7$as === void 0 ? "ul" : _ref7$as,
      props = reach_listbox_esm_objectWithoutPropertiesLoose(_ref7, _excluded6);

  var _React$useContext4 = F(ListboxContext),
      listRef = _React$useContext4.listRef,
      ariaLabel = _React$useContext4.ariaLabel,
      ariaLabelledBy = _React$useContext4.ariaLabelledBy,
      isExpanded = _React$useContext4.isExpanded,
      listboxId = _React$useContext4.listboxId,
      _React$useContext4$st = _React$useContext4.stateData,
      value = _React$useContext4$st.value,
      navigationValue = _React$useContext4$st.navigationValue;

  var ref = useComposedRefs(forwardedRef, listRef);
  return /*#__PURE__*/(0,external_commonjs_preact_commonjs2_preact_amd_preact_root_.createElement)(Comp // Tells assistive technologies which of the options, if any, is
  // visually indicated as having keyboard focus. DOM focus remains on the
  // `ul` element and the idref specified for `aria-activedescendant`
  // refers to the `li` element that is visually styled as focused. When
  // navigation keys, such as `Down Arrow`, are pressed, the JavaScript
  // changes the value.
  // https://www.w3.org/TR/wai-aria-practices-1.2/examples/listbox/listbox-grouped.html
  , reach_listbox_esm_extends({
    "aria-activedescendant": useOptionId(isExpanded ? navigationValue : value) // If the listbox is not part of another widget, then it has a visible
    // label referenced by `aria-labelledby` on the element with role
    // `listbox`.
    // https://www.w3.org/TR/wai-aria-practices-1.2/#Listbox
    // If an `aria-label` is passed, we should skip `aria-labelledby` to
    // avoid confusion.
    ,
    "aria-labelledby": ariaLabel ? undefined : ariaLabelledBy,
    "aria-label": ariaLabel // An element that contains or owns all the listbox options has role
    // listbox.
    // https://www.w3.org/TR/wai-aria-practices-1.2/#Listbox
    ,
    role: "listbox" // https://www.w3.org/TR/wai-aria-practices-1.2/examples/listbox/listbox-collapsible.html
    ,
    tabIndex: -1
  }, props, {
    ref: ref,
    "data-reach-listbox-list": "",
    id: reach_utils_make_id_esm_makeId("listbox", listboxId)
  }));
});

if (false) {}
/**
 * @see Docs https://reach.tech/listbox#listboxlist-props
 */
////////////////////////////////////////////////////////////////////////////////

/**
 * ListboxOption
 *
 * A selectable option for the listbox.
 *
 * @see Docs https://reach.tech/listbox#listboxoption
 */


var ListboxOption = /*#__PURE__*/compat_module_x(function ListboxOption(_ref8, forwardedRef) {
  var _ref8$as = _ref8.as,
      Comp = _ref8$as === void 0 ? "li" : _ref8$as,
      children = _ref8.children,
      disabled = _ref8.disabled,
      onClick = _ref8.onClick,
      onMouseDown = _ref8.onMouseDown,
      onMouseEnter = _ref8.onMouseEnter,
      onMouseLeave = _ref8.onMouseLeave,
      onMouseMove = _ref8.onMouseMove,
      onMouseUp = _ref8.onMouseUp,
      onTouchStart = _ref8.onTouchStart,
      value = _ref8.value,
      labelProp = _ref8.label,
      props = reach_listbox_esm_objectWithoutPropertiesLoose(_ref8, _excluded7);

  if (false) {}

  var _React$useContext5 = F(ListboxContext),
      highlightedOptionRef = _React$useContext5.highlightedOptionRef,
      selectedOptionRef = _React$useContext5.selectedOptionRef,
      send = _React$useContext5.send,
      isExpanded = _React$useContext5.isExpanded,
      onValueChange = _React$useContext5.onValueChange,
      state = _React$useContext5.state,
      _React$useContext5$st = _React$useContext5.stateData,
      listboxValue = _React$useContext5$st.value,
      navigationValue = _React$useContext5$st.navigationValue;

  var _React$useState = l(labelProp),
      labelState = _React$useState[0],
      setLabel = _React$useState[1];

  var label = labelProp || labelState || "";
  var ownRef = s(null);
  useDescendant({
    element: ownRef.current,
    value: value,
    label: label,
    disabled: !!disabled
  }, ListboxDescendantContext); // After the ref is mounted to the DOM node, we check to see if we have an
  // explicit label prop before looking for the node's textContent for
  // typeahead functionality.

  var getLabelFromDomNode = A(function (node) {
    if (!labelProp && node) {
      setLabel(function (prevState) {
        if (node.textContent && prevState !== node.textContent) {
          return node.textContent;
        }

        return prevState || "";
      });
    }
  }, [labelProp]);
  var isHighlighted = navigationValue ? navigationValue === value : false;
  var isSelected = listboxValue === value;
  var ref = useComposedRefs(getLabelFromDomNode, forwardedRef, ownRef, isSelected ? selectedOptionRef : null, isHighlighted ? highlightedOptionRef : null);

  function handleMouseEnter() {
    send({
      type: ListboxEvents.OptionMouseEnter,
      value: value,
      disabled: !!disabled
    });
  }

  function handleTouchStart() {
    send({
      type: ListboxEvents.OptionTouchStart,
      value: value,
      disabled: !!disabled
    });
  }

  function handleMouseLeave() {
    send({
      type: ListboxEvents.ClearNavSelection
    });
  }

  function handleMouseDown(event) {
    // Prevent blur event from firing and bubbling to the popover
    if (!isRightClick(event.nativeEvent)) {
      event.preventDefault();
      send({
        type: ListboxEvents.OptionMouseDown
      });
    }
  }

  function handleMouseUp(event) {
    if (!isRightClick(event.nativeEvent)) {
      send({
        type: ListboxEvents.OptionMouseUp,
        value: value,
        callback: onValueChange,
        disabled: !!disabled
      });
    }
  }

  function handleClick(event) {
    // Generally an option will be selected on mouseup, but in case this isn't
    // handled correctly by the device (whether because it's a touch/pen or
    // virtual click event) we want to handle selection on a full click event
    // just in case. This should address issues with screenreader selection,
    // but this needs more robust testing.
    if (!isRightClick(event.nativeEvent)) {
      send({
        type: ListboxEvents.OptionClick,
        value: value,
        callback: onValueChange,
        disabled: !!disabled
      });
    }
  }

  function handleMouseMove() {
    // We don't really *need* these guards since we put all of our transition
    // logic in the state machine, but in this case it seems wise not to
    // needlessly run our transitions every time the user's mouse moves. Seems
    // like a lot. 🙃
    if (state === ListboxStates.Open || navigationValue !== value) {
      send({
        type: ListboxEvents.OptionMouseMove,
        value: value,
        disabled: !!disabled
      });
    }
  }

  return /*#__PURE__*/(0,external_commonjs_preact_commonjs2_preact_amd_preact_root_.createElement)(Comp // In a single-select listbox, the selected option has `aria-selected`
  // set to `true`.
  // https://www.w3.org/TR/wai-aria-practices-1.2/#Listbox
  , reach_listbox_esm_extends({
    "aria-selected": (isExpanded ? isHighlighted : isSelected) || undefined // Applicable to all host language elements regardless of whether a
    // `role` is applied.
    // https://www.w3.org/WAI/PF/aria/states_and_properties#global_states_header
    ,
    "aria-disabled": disabled || undefined // Each option in the listbox has role `option` and is a DOM descendant
    // of the element with role `listbox`.
    // https://www.w3.org/TR/wai-aria-practices-1.2/#Listbox
    ,
    role: "option"
  }, props, {
    ref: ref,
    id: useOptionId(value),
    "data-reach-listbox-option": "",
    "data-current-nav": isHighlighted ? "" : undefined,
    "data-current-selected": isSelected ? "" : undefined,
    "data-label": label,
    "data-value": value,
    onClick: composeEventHandlers(onClick, handleClick),
    onMouseDown: composeEventHandlers(onMouseDown, handleMouseDown),
    onMouseEnter: composeEventHandlers(onMouseEnter, handleMouseEnter),
    onMouseLeave: composeEventHandlers(onMouseLeave, handleMouseLeave),
    onMouseMove: composeEventHandlers(onMouseMove, handleMouseMove),
    onMouseUp: composeEventHandlers(onMouseUp, handleMouseUp),
    onTouchStart: composeEventHandlers(onTouchStart, handleTouchStart)
  }), children);
});

if (false) {}
/**
 * @see Docs https://reach.tech/listbox#listboxoption-props
 */
////////////////////////////////////////////////////////////////////////////////

/**
 * ListboxGroup
 *
 * A group of related listbox options.
 *
 * @see Docs https://reach.tech/listbox#listboxgroup
 */


var ListboxGroup = /*#__PURE__*/(/* unused pure expression or super */ null && (forwardRef(function ListboxGroup(_ref9, forwardedRef) {
  var _ref9$as = _ref9.as,
      Comp = _ref9$as === void 0 ? "div" : _ref9$as,
      label = _ref9.label,
      children = _ref9.children,
      props = reach_listbox_esm_objectWithoutPropertiesLoose(_ref9, _excluded8);

  var _React$useContext6 = useContext(ListboxContext),
      listboxId = _React$useContext6.listboxId;

  var labelId = makeId("label", useId(props.id), listboxId);
  return /*#__PURE__*/createElement(ListboxGroupContext.Provider, {
    value: {
      labelId: labelId
    }
  }, /*#__PURE__*/createElement(Comp // Refers to the element containing the option group label
  // https://www.w3.org/TR/wai-aria-practices-1.2/examples/listbox/listbox-grouped.html
  , reach_listbox_esm_extends({
    "aria-labelledby": labelId // Identifies a group of related options
    // https://www.w3.org/TR/wai-aria-practices-1.2/examples/listbox/listbox-grouped.html
    ,
    role: "group"
  }, props, {
    "data-reach-listbox-group": "",
    ref: forwardedRef
  }), label && /*#__PURE__*/createElement(ListboxGroupLabel, null, label), children));
})));

if (false) {}
/**
 * @see Docs https://reach.tech/listbox#listboxgroup-props
 */
////////////////////////////////////////////////////////////////////////////////

/**
 * ListboxGroupLabel
 *
 * @see Docs https://reach.tech/listbox#listboxgrouplabel
 */


var ListboxGroupLabel = /*#__PURE__*/(/* unused pure expression or super */ null && (forwardRef(function ListboxGroupLabel(_ref10, forwardedRef) {
  var _ref10$as = _ref10.as,
      Comp = _ref10$as === void 0 ? "span" : _ref10$as,
      props = reach_listbox_esm_objectWithoutPropertiesLoose(_ref10, _excluded9);

  var _React$useContext7 = useContext(ListboxGroupContext),
      labelId = _React$useContext7.labelId;

  return /*#__PURE__*/createElement(Comp // See examples
  // https://www.w3.org/TR/wai-aria-practices-1.2/examples/listbox/listbox-grouped.html
  , reach_listbox_esm_extends({
    role: "presentation"
  }, props, {
    ref: forwardedRef,
    "data-reach-listbox-group-label": "",
    id: labelId
  }));
})));

if (false) {}
/**
 * @see Docs https://reach.tech/listbox#listboxgroup-props
 */
////////////////////////////////////////////////////////////////////////////////

/**
 * A hook that exposes data for a given `Listbox` component to its descendants.
 *
 * @see Docs https://reach.tech/listbox#uselistboxcontext
 */


function useListboxContext() {
  var _React$useContext8 = useContext(ListboxContext),
      highlightedOptionRef = _React$useContext8.highlightedOptionRef,
      selectedOptionRef = _React$useContext8.selectedOptionRef,
      listboxId = _React$useContext8.listboxId,
      listboxValueLabel = _React$useContext8.listboxValueLabel,
      isExpanded = _React$useContext8.isExpanded,
      value = _React$useContext8.stateData.value;

  return useMemo(function () {
    return {
      id: listboxId,
      isExpanded: isExpanded,
      selectedOptionRef: selectedOptionRef,
      highlightedOptionRef: highlightedOptionRef,
      value: value,
      valueLabel: listboxValueLabel
    };
  }, [listboxId, isExpanded, value, listboxValueLabel, selectedOptionRef, highlightedOptionRef]);
} ////////////////////////////////////////////////////////////////////////////////


function isListboxExpanded(state) {
  return [ListboxStates.Navigating, ListboxStates.Open, ListboxStates.Dragging, ListboxStates.Interacting].includes(state);
}

function useKeyDown() {
  var _React$useContext9 = F(ListboxContext),
      send = _React$useContext9.send,
      listboxDisabled = _React$useContext9.disabled,
      onValueChange = _React$useContext9.onValueChange,
      _React$useContext9$st = _React$useContext9.stateData,
      navigationValue = _React$useContext9$st.navigationValue,
      typeaheadQuery = _React$useContext9$st.typeaheadQuery;

  var options = useDescendants(ListboxDescendantContext);
  var stableOnValueChange = useStableCallback(onValueChange);
  y(function () {
    if (typeaheadQuery) {
      send({
        type: ListboxEvents.UpdateAfterTypeahead,
        query: typeaheadQuery,
        callback: stableOnValueChange
      });
    }

    var timeout = window.setTimeout(function () {
      if (typeaheadQuery != null) {
        send({
          type: ListboxEvents.ClearTypeahead
        });
      }
    }, 1000);
    return function () {
      window.clearTimeout(timeout);
    };
  }, [stableOnValueChange, send, typeaheadQuery]);
  var index = options.findIndex(function (_ref11) {
    var value = _ref11.value;
    return value === navigationValue;
  });
  var handleKeyDown = composeEventHandlers(function (event) {
    var key = event.key;
    var isSearching = isString(key) && key.length === 1;
    var navOption = options.find(function (option) {
      return option.value === navigationValue;
    });

    switch (key) {
      case "Enter":
        send({
          type: ListboxEvents.KeyDownEnter,
          value: navigationValue,
          callback: onValueChange,
          disabled: !!(navOption != null && navOption.disabled || listboxDisabled)
        });
        return;

      case " ":
        // Prevent browser from scrolling down
        event.preventDefault();
        send({
          type: ListboxEvents.KeyDownSpace,
          value: navigationValue,
          callback: onValueChange,
          disabled: !!(navOption != null && navOption.disabled || listboxDisabled)
        });
        return;

      case "Escape":
        send({
          type: ListboxEvents.KeyDownEscape
        });
        return;

      case "Tab":
        var eventType = event.shiftKey ? ListboxEvents.KeyDownShiftTab : ListboxEvents.KeyDownTab;
        send({
          type: eventType
        });
        return;

      default:
        if (isSearching) {
          send({
            type: ListboxEvents.KeyDownSearch,
            query: key,
            disabled: listboxDisabled
          });
        }

        return;
    }
  }, useDescendantKeyDown(ListboxDescendantContext, {
    currentIndex: index,
    orientation: "vertical",
    key: "index",
    rotate: true,
    filter: function filter(option) {
      return !option.disabled;
    },
    callback: function callback(nextIndex) {
      send({
        type: ListboxEvents.KeyDownNavigate,
        value: options[nextIndex].value,
        disabled: listboxDisabled
      });
    }
  }));
  return handleKeyDown;
}

function useOptionId(value) {
  var _React$useContext10 = F(ListboxContext),
      listboxId = _React$useContext10.listboxId;

  return value ? reach_utils_make_id_esm_makeId("option-" + value, listboxId) : undefined;
}

function reach_listbox_esm_popoverContainsEventTarget(popover, target) {
  return !!(popover && popover.contains(target));
} ////////////////////////////////////////////////////////////////////////////////
// Types


function useControlledStateSync(controlPropValue, internalValue, send) {
  var _React$useRef = s(controlPropValue != null),
      isControlled = _React$useRef.current;

  if (isControlled && controlPropValue !== internalValue) {
    send();
  }
} ////////////////////////////////////////////////////////////////////////////////



;// CONCATENATED MODULE: ./node_modules/@reach/listbox/styles.css
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./src/components/Select/component.js






const Select = ({
  defaultValue,
  placeholder,
  options,
  onChange
}) => {
  /**
   * If no options yet, we don't want to render the component.
   */
  if (!options) {
    return;
  }

  return (0,external_commonjs_preact_commonjs2_preact_amd_preact_root_.h)(ListboxInput, {
    className: "sn-select",
    defaultValue: defaultValue,
    onChange: onChange
  }, ({
    value,
    valueLabel,
    isExpanded
  }) => (0,external_commonjs_preact_commonjs2_preact_amd_preact_root_.h)(external_commonjs_preact_commonjs2_preact_amd_preact_root_.Fragment, null, (0,external_commonjs_preact_commonjs2_preact_amd_preact_root_.h)(ListboxButton, {
    className: "sn-select-button"
  }, (0,external_commonjs_preact_commonjs2_preact_amd_preact_root_.h)("span", {
    "data-value": value
  }, valueLabel ?? placeholder), " ", isExpanded ? (0,external_commonjs_preact_commonjs2_preact_amd_preact_root_.h)(Icon_component, {
    name: "menu-arrow-up"
  }) : (0,external_commonjs_preact_commonjs2_preact_amd_preact_root_.h)(Icon_component, {
    name: "menu-arrow-down"
  })), (0,external_commonjs_preact_commonjs2_preact_amd_preact_root_.h)(ListboxPopover, {
    className: "sn-select-popover"
  }, (0,external_commonjs_preact_commonjs2_preact_amd_preact_root_.h)(ListboxList, {
    className: "sn-select-list"
  }, options && options.map(option => (0,external_commonjs_preact_commonjs2_preact_amd_preact_root_.h)(ListboxOption, {
    className: "sn-select-list-option",
    value: option.value,
    valueText: option.label
  }, option.label))))));
};

Select.propTypes = {
  defaultValue: (prop_types_default()).string,
  options: (prop_types_default()).array.isRequired,
  onChange: (prop_types_default()).func.isRequired,
  placeholder: (prop_types_default()).string
};
Select.defaultProps = {
  defaultValue: "",
  placeholder: "Choose an option..."
};
/* harmony default export */ const Select_component = (Select);
;// CONCATENATED MODULE: ./src/components/Select/index.js

;// CONCATENATED MODULE: ./src/index.js





/***/ }),

/***/ 867:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external {"commonjs":"preact","commonjs2":"preact","amd":"preact","root":"_"}
var external_commonjs_preact_commonjs2_preact_amd_preact_root_ = __webpack_require__(670);
;// CONCATENATED MODULE: ./node_modules/preact-custom-element/dist/preact-custom-element.esm.js


function r() {
  return (r = Object.assign || function (t) {
    for (var e = 1; e < arguments.length; e++) {
      var n = arguments[e];

      for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o]);
    }

    return t;
  }).apply(this, arguments);
}

function i(t) {
  this.getChildContext = function () {
    return t.context;
  };

  var e = t.children,
      n = function (t, e) {
    if (null == t) return {};
    var n,
        o,
        r = {},
        i = Object.keys(t);

    for (o = 0; o < i.length; o++) e.indexOf(n = i[o]) >= 0 || (r[n] = t[n]);

    return r;
  }(t, ["context", "children"]);

  return (0,external_commonjs_preact_commonjs2_preact_amd_preact_root_.cloneElement)(e, n);
}

function a() {
  var o = new CustomEvent("_preact", {
    detail: {},
    bubbles: !0,
    cancelable: !0
  });
  this.dispatchEvent(o), this._vdom = (0,external_commonjs_preact_commonjs2_preact_amd_preact_root_.h)(i, r({}, this._props, {
    context: o.detail.context
  }), function e(n, o) {
    if (3 === n.nodeType) return n.data;
    if (1 !== n.nodeType) return null;
    var r = [],
        i = {},
        a = 0,
        c = n.attributes,
        l = n.childNodes;

    for (a = c.length; a--;) "slot" !== c[a].name && (i[c[a].name] = c[a].value, i[s(c[a].name)] = c[a].value);

    for (a = l.length; a--;) {
      var p = e(l[a], null),
          d = l[a].slot;
      d ? i[d] = (0,external_commonjs_preact_commonjs2_preact_amd_preact_root_.h)(u, {
        name: d
      }, p) : r[a] = p;
    }

    var h = o ? (0,external_commonjs_preact_commonjs2_preact_amd_preact_root_.h)(u, null, r) : r;
    return (0,external_commonjs_preact_commonjs2_preact_amd_preact_root_.h)(o || n.nodeName.toLowerCase(), i, h);
  }(this, this._vdomComponent)), (this.hasAttribute("hydrate") ? external_commonjs_preact_commonjs2_preact_amd_preact_root_.hydrate : external_commonjs_preact_commonjs2_preact_amd_preact_root_.render)(this._vdom, this._root);
}

function s(t) {
  return t.replace(/-(\w)/g, function (t, e) {
    return e ? e.toUpperCase() : "";
  });
}

function c(t, e, r) {
  if (this._vdom) {
    var i = {};
    i[t] = r = null == r ? void 0 : r, i[s(t)] = r, this._vdom = (0,external_commonjs_preact_commonjs2_preact_amd_preact_root_.cloneElement)(this._vdom, i), (0,external_commonjs_preact_commonjs2_preact_amd_preact_root_.render)(this._vdom, this._root);
  }
}

function l() {
  (0,external_commonjs_preact_commonjs2_preact_amd_preact_root_.render)(this._vdom = null, this._root);
}

function u(e, n) {
  var o = this;
  return (0,external_commonjs_preact_commonjs2_preact_amd_preact_root_.h)("slot", r({}, e, {
    ref: function (t) {
      t ? (o.ref = t, o._listener || (o._listener = function (t) {
        t.stopPropagation(), t.detail.context = n;
      }, t.addEventListener("_preact", o._listener))) : o.ref.removeEventListener("_preact", o._listener);
    }
  }));
}

/* harmony default export */ function preact_custom_element_esm(t, e, n, o) {
  function r() {
    var e = Reflect.construct(HTMLElement, [], r);
    return e._vdomComponent = t, e._root = o && o.shadow ? e.attachShadow({
      mode: "open"
    }) : e, e;
  }

  return (r.prototype = Object.create(HTMLElement.prototype)).constructor = r, r.prototype.connectedCallback = a, r.prototype.attributeChangedCallback = c, r.prototype.disconnectedCallback = l, n = n || t.observedAttributes || Object.keys(t.propTypes || {}), r.observedAttributes = n, n.forEach(function (t) {
    Object.defineProperty(r.prototype, t, {
      get: function () {
        return this._vdom.props[t];
      },
      set: function (e) {
        this._vdom ? this.attributeChangedCallback(t, null, e) : (this._props || (this._props = {}), this._props[t] = e, this.connectedCallback());
        var n = typeof e;
        null != e && "string" !== n && "boolean" !== n && "number" !== n || this.setAttribute(t, e);
      }
    });
  }), customElements.define(e || t.tagName || t.displayName || t.name, r);
}
// EXTERNAL MODULE: ./src/index.js + 37 modules
var src = __webpack_require__(118);
;// CONCATENATED MODULE: ./src/web-components.js


preact_custom_element_esm(src.Button, 'sn-button');
preact_custom_element_esm(src.DropdownMenu, 'sn-dropdown-menu');
preact_custom_element_esm(src.Select, 'sn-select');

/***/ }),

/***/ 670:
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE__670__;

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/******/ 	// the startup function
/******/ 	// It's empty as some runtime module handles the default behavior
/******/ 	__webpack_require__.x = x => {};
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// Promise = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			195: 0,
/******/ 			160: 0
/******/ 		};
/******/ 		
/******/ 		var deferredModules = [
/******/ 			[867]
/******/ 		];
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
/******/ 		var checkDeferredModules = x => {};
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime, executeModules] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0, resolves = [];
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					resolves.push(installedChunks[chunkId][0]);
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			for(moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) runtime(__webpack_require__);
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			while(resolves.length) {
/******/ 				resolves.shift()();
/******/ 			}
/******/ 		
/******/ 			// add entry modules from loaded chunk to deferred list
/******/ 			if(executeModules) deferredModules.push.apply(deferredModules, executeModules);
/******/ 		
/******/ 			// run deferred modules when all chunks ready
/******/ 			return checkDeferredModules();
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkSK_name_"] = self["webpackChunkSK_name_"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 		
/******/ 		function checkDeferredModulesImpl() {
/******/ 			var result;
/******/ 			for(var i = 0; i < deferredModules.length; i++) {
/******/ 				var deferredModule = deferredModules[i];
/******/ 				var fulfilled = true;
/******/ 				for(var j = 1; j < deferredModule.length; j++) {
/******/ 					var depId = deferredModule[j];
/******/ 					if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferredModules.splice(i--, 1);
/******/ 					result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 				}
/******/ 			}
/******/ 			if(deferredModules.length === 0) {
/******/ 				__webpack_require__.x();
/******/ 				__webpack_require__.x = x => {};
/******/ 			}
/******/ 			return result;
/******/ 		}
/******/ 		var startup = __webpack_require__.x;
/******/ 		__webpack_require__.x = () => {
/******/ 			// reset startup function so it can be called again when more startup code is added
/******/ 			__webpack_require__.x = startup || (x => {});
/******/ 			return (checkDeferredModules = checkDeferredModulesImpl)();
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// module exports must be returned from runtime so entry inlining is disabled
/******/ 	// run startup
/******/ 	return __webpack_require__.x();
/******/ })()
;
});