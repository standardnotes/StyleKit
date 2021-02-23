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

/***/ 92:
/***/ ((module) => {

"use strict";
/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var __DEV__ = "production" !== 'production';

var warning = function () {};

if (__DEV__) {
  var printWarning = function printWarning(format, args) {
    var len = arguments.length;
    args = new Array(len > 1 ? len - 1 : 0);

    for (var key = 1; key < len; key++) {
      args[key - 1] = arguments[key];
    }

    var argIndex = 0;
    var message = 'Warning: ' + format.replace(/%s/g, function () {
      return args[argIndex++];
    });

    if (typeof console !== 'undefined') {
      console.error(message);
    }

    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };

  warning = function (condition, format, args) {
    var len = arguments.length;
    args = new Array(len > 2 ? len - 2 : 0);

    for (var key = 2; key < len; key++) {
      args[key - 2] = arguments[key];
    }

    if (format === undefined) {
      throw new Error('`warning(condition, format, ...args)` requires a warning ' + 'message argument');
    }

    if (!condition) {
      printWarning.apply(null, [format].concat(args));
    }
  };
}

module.exports = warning;

/***/ }),

/***/ 152:
/***/ (() => {

"use strict";




/***/ }),

/***/ 36:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

;// CONCATENATED MODULE: ./node_modules/preact/dist/preact.module.js
var n,
    l,
    u,
    i,
    t,
    r,
    o = {},
    f = [],
    e = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;

function c(n, l) {
  for (var u in l) n[u] = l[u];

  return n;
}

function s(n) {
  var l = n.parentNode;
  l && l.removeChild(n);
}

function preact_module_a(n, l, u) {
  var i,
      t,
      r,
      o = arguments,
      f = {};

  for (r in l) "key" == r ? i = l[r] : "ref" == r ? t = l[r] : f[r] = l[r];

  if (arguments.length > 3) for (u = [u], r = 3; r < arguments.length; r++) u.push(o[r]);
  if (null != u && (f.children = u), "function" == typeof n && null != n.defaultProps) for (r in n.defaultProps) void 0 === f[r] && (f[r] = n.defaultProps[r]);
  return v(n, f, i, t, null);
}

function v(l, u, i, t, r) {
  var o = {
    type: l,
    props: u,
    key: i,
    ref: t,
    __k: null,
    __: null,
    __b: 0,
    __e: null,
    __d: void 0,
    __c: null,
    __h: null,
    constructor: void 0,
    __v: null == r ? ++n.__v : r
  };
  return null != n.vnode && n.vnode(o), o;
}

function h() {
  return {
    current: null
  };
}

function y(n) {
  return n.children;
}

function p(n, l) {
  this.props = n, this.context = l;
}

function d(n, l) {
  if (null == l) return n.__ ? d(n.__, n.__.__k.indexOf(n) + 1) : null;

  for (var u; l < n.__k.length; l++) if (null != (u = n.__k[l]) && null != u.__e) return u.__e;

  return "function" == typeof n.type ? d(n) : null;
}

function _(n) {
  var l, u;

  if (null != (n = n.__) && null != n.__c) {
    for (n.__e = n.__c.base = null, l = 0; l < n.__k.length; l++) if (null != (u = n.__k[l]) && null != u.__e) {
      n.__e = n.__c.base = u.__e;
      break;
    }

    return _(n);
  }
}

function k(l) {
  (!l.__d && (l.__d = !0) && u.push(l) && !m.__r++ || t !== n.debounceRendering) && ((t = n.debounceRendering) || i)(m);
}

function m() {
  for (var n; m.__r = u.length;) n = u.sort(function (n, l) {
    return n.__v.__b - l.__v.__b;
  }), u = [], n.some(function (n) {
    var l, u, i, t, r, o;
    n.__d && (r = (t = (l = n).__v).__e, (o = l.__P) && (u = [], (i = c({}, t)).__v = t.__v + 1, T(o, t, i, l.__n, void 0 !== o.ownerSVGElement, null != t.__h ? [r] : null, u, null == r ? d(t) : r, t.__h), j(u, t), t.__e != r && _(t)));
  });
}

function b(n, l, u, i, t, r, e, c, s, a) {
  var h,
      p,
      _,
      k,
      m,
      b,
      w,
      A = i && i.__k || f,
      P = A.length;

  for (u.__k = [], h = 0; h < l.length; h++) if (null != (k = u.__k[h] = null == (k = l[h]) || "boolean" == typeof k ? null : "string" == typeof k || "number" == typeof k ? v(null, k, null, null, k) : Array.isArray(k) ? v(y, {
    children: k
  }, null, null, null) : k.__b > 0 ? v(k.type, k.props, k.key, null, k.__v) : k)) {
    if (k.__ = u, k.__b = u.__b + 1, null === (_ = A[h]) || _ && k.key == _.key && k.type === _.type) A[h] = void 0;else for (p = 0; p < P; p++) {
      if ((_ = A[p]) && k.key == _.key && k.type === _.type) {
        A[p] = void 0;
        break;
      }

      _ = null;
    }
    T(n, k, _ = _ || o, t, r, e, c, s, a), m = k.__e, (p = k.ref) && _.ref != p && (w || (w = []), _.ref && w.push(_.ref, null, k), w.push(p, k.__c || m, k)), null != m ? (null == b && (b = m), "function" == typeof k.type && null != k.__k && k.__k === _.__k ? k.__d = s = g(k, s, n) : s = x(n, k, _, A, m, s), a || "option" !== u.type ? "function" == typeof u.type && (u.__d = s) : n.value = "") : s && _.__e == s && s.parentNode != n && (s = d(_));
  }

  for (u.__e = b, h = P; h--;) null != A[h] && ("function" == typeof u.type && null != A[h].__e && A[h].__e == u.__d && (u.__d = d(i, h + 1)), L(A[h], A[h]));

  if (w) for (h = 0; h < w.length; h++) I(w[h], w[++h], w[++h]);
}

function g(n, l, u) {
  var i, t;

  for (i = 0; i < n.__k.length; i++) (t = n.__k[i]) && (t.__ = n, l = "function" == typeof t.type ? g(t, l, u) : x(u, t, t, n.__k, t.__e, l));

  return l;
}

function w(n, l) {
  return l = l || [], null == n || "boolean" == typeof n || (Array.isArray(n) ? n.some(function (n) {
    w(n, l);
  }) : l.push(n)), l;
}

function x(n, l, u, i, t, r) {
  var o, f, e;
  if (void 0 !== l.__d) o = l.__d, l.__d = void 0;else if (null == u || t != r || null == t.parentNode) n: if (null == r || r.parentNode !== n) n.appendChild(t), o = null;else {
    for (f = r, e = 0; (f = f.nextSibling) && e < i.length; e += 2) if (f == t) break n;

    n.insertBefore(t, r), o = r;
  }
  return void 0 !== o ? o : t.nextSibling;
}

function A(n, l, u, i, t) {
  var r;

  for (r in u) "children" === r || "key" === r || r in l || C(n, r, null, u[r], i);

  for (r in l) t && "function" != typeof l[r] || "children" === r || "key" === r || "value" === r || "checked" === r || u[r] === l[r] || C(n, r, l[r], u[r], i);
}

function P(n, l, u) {
  "-" === l[0] ? n.setProperty(l, u) : n[l] = null == u ? "" : "number" != typeof u || e.test(l) ? u : u + "px";
}

function C(n, l, u, i, t) {
  var r;

  n: if ("style" === l) {
    if ("string" == typeof u) n.style.cssText = u;else {
      if ("string" == typeof i && (n.style.cssText = i = ""), i) for (l in i) u && l in u || P(n.style, l, "");
      if (u) for (l in u) i && u[l] === i[l] || P(n.style, l, u[l]);
    }
  } else if ("o" === l[0] && "n" === l[1]) r = l !== (l = l.replace(/Capture$/, "")), l = l.toLowerCase() in n ? l.toLowerCase().slice(2) : l.slice(2), n.l || (n.l = {}), n.l[l + r] = u, u ? i || n.addEventListener(l, r ? H : $, r) : n.removeEventListener(l, r ? H : $, r);else if ("dangerouslySetInnerHTML" !== l) {
    if (t) l = l.replace(/xlink[H:h]/, "h").replace(/sName$/, "s");else if ("href" !== l && "list" !== l && "form" !== l && "download" !== l && l in n) try {
      n[l] = null == u ? "" : u;
      break n;
    } catch (n) {}
    "function" == typeof u || (null != u && (!1 !== u || "a" === l[0] && "r" === l[1]) ? n.setAttribute(l, u) : n.removeAttribute(l));
  }
}

function $(l) {
  this.l[l.type + !1](n.event ? n.event(l) : l);
}

function H(l) {
  this.l[l.type + !0](n.event ? n.event(l) : l);
}

function T(l, u, i, t, r, o, f, e, s) {
  var a,
      v,
      h,
      d,
      _,
      k,
      m,
      g,
      w,
      x,
      A,
      P = u.type;

  if (void 0 !== u.constructor) return null;
  null != i.__h && (s = i.__h, e = u.__e = i.__e, u.__h = null, o = [e]), (a = n.__b) && a(u);

  try {
    n: if ("function" == typeof P) {
      if (g = u.props, w = (a = P.contextType) && t[a.__c], x = a ? w ? w.props.value : a.__ : t, i.__c ? m = (v = u.__c = i.__c).__ = v.__E : ("prototype" in P && P.prototype.render ? u.__c = v = new P(g, x) : (u.__c = v = new p(g, x), v.constructor = P, v.render = M), w && w.sub(v), v.props = g, v.state || (v.state = {}), v.context = x, v.__n = t, h = v.__d = !0, v.__h = []), null == v.__s && (v.__s = v.state), null != P.getDerivedStateFromProps && (v.__s == v.state && (v.__s = c({}, v.__s)), c(v.__s, P.getDerivedStateFromProps(g, v.__s))), d = v.props, _ = v.state, h) null == P.getDerivedStateFromProps && null != v.componentWillMount && v.componentWillMount(), null != v.componentDidMount && v.__h.push(v.componentDidMount);else {
        if (null == P.getDerivedStateFromProps && g !== d && null != v.componentWillReceiveProps && v.componentWillReceiveProps(g, x), !v.__e && null != v.shouldComponentUpdate && !1 === v.shouldComponentUpdate(g, v.__s, x) || u.__v === i.__v) {
          v.props = g, v.state = v.__s, u.__v !== i.__v && (v.__d = !1), v.__v = u, u.__e = i.__e, u.__k = i.__k, v.__h.length && f.push(v);
          break n;
        }

        null != v.componentWillUpdate && v.componentWillUpdate(g, v.__s, x), null != v.componentDidUpdate && v.__h.push(function () {
          v.componentDidUpdate(d, _, k);
        });
      }
      v.context = x, v.props = g, v.state = v.__s, (a = n.__r) && a(u), v.__d = !1, v.__v = u, v.__P = l, a = v.render(v.props, v.state, v.context), v.state = v.__s, null != v.getChildContext && (t = c(c({}, t), v.getChildContext())), h || null == v.getSnapshotBeforeUpdate || (k = v.getSnapshotBeforeUpdate(d, _)), A = null != a && a.type === y && null == a.key ? a.props.children : a, b(l, Array.isArray(A) ? A : [A], u, i, t, r, o, f, e, s), v.base = u.__e, u.__h = null, v.__h.length && f.push(v), m && (v.__E = v.__ = null), v.__e = !1;
    } else null == o && u.__v === i.__v ? (u.__k = i.__k, u.__e = i.__e) : u.__e = z(i.__e, u, i, t, r, o, f, s);

    (a = n.diffed) && a(u);
  } catch (l) {
    u.__v = null, (s || null != o) && (u.__e = e, u.__h = !!s, o[o.indexOf(e)] = null), n.__e(l, u, i);
  }
}

function j(l, u) {
  n.__c && n.__c(u, l), l.some(function (u) {
    try {
      l = u.__h, u.__h = [], l.some(function (n) {
        n.call(u);
      });
    } catch (l) {
      n.__e(l, u.__v);
    }
  });
}

function z(n, l, u, i, t, r, e, c) {
  var a,
      v,
      h,
      y,
      p = u.props,
      d = l.props,
      _ = l.type,
      k = 0;
  if ("svg" === _ && (t = !0), null != r) for (; k < r.length; k++) if ((a = r[k]) && (a === n || (_ ? a.localName == _ : 3 == a.nodeType))) {
    n = a, r[k] = null;
    break;
  }

  if (null == n) {
    if (null === _) return document.createTextNode(d);
    n = t ? document.createElementNS("http://www.w3.org/2000/svg", _) : document.createElement(_, d.is && d), r = null, c = !1;
  }

  if (null === _) p === d || c && n.data === d || (n.data = d);else {
    if (r = r && f.slice.call(n.childNodes), v = (p = u.props || o).dangerouslySetInnerHTML, h = d.dangerouslySetInnerHTML, !c) {
      if (null != r) for (p = {}, y = 0; y < n.attributes.length; y++) p[n.attributes[y].name] = n.attributes[y].value;
      (h || v) && (h && (v && h.__html == v.__html || h.__html === n.innerHTML) || (n.innerHTML = h && h.__html || ""));
    }

    if (A(n, d, p, t, c), h) l.__k = [];else if (k = l.props.children, b(n, Array.isArray(k) ? k : [k], l, u, i, t && "foreignObject" !== _, r, e, n.firstChild, c), null != r) for (k = r.length; k--;) null != r[k] && s(r[k]);
    c || ("value" in d && void 0 !== (k = d.value) && (k !== n.value || "progress" === _ && !k) && C(n, "value", k, p.value, !1), "checked" in d && void 0 !== (k = d.checked) && k !== n.checked && C(n, "checked", k, p.checked, !1));
  }
  return n;
}

function I(l, u, i) {
  try {
    "function" == typeof l ? l(u) : l.current = u;
  } catch (l) {
    n.__e(l, i);
  }
}

function L(l, u, i) {
  var t, r, o;

  if (n.unmount && n.unmount(l), (t = l.ref) && (t.current && t.current !== l.__e || I(t, null, u)), i || "function" == typeof l.type || (i = null != (r = l.__e)), l.__e = l.__d = void 0, null != (t = l.__c)) {
    if (t.componentWillUnmount) try {
      t.componentWillUnmount();
    } catch (l) {
      n.__e(l, u);
    }
    t.base = t.__P = null;
  }

  if (t = l.__k) for (o = 0; o < t.length; o++) t[o] && L(t[o], u, i);
  null != r && s(r);
}

function M(n, l, u) {
  return this.constructor(n, u);
}

function N(l, u, i) {
  var t, r, e;
  n.__ && n.__(l, u), r = (t = "function" == typeof i) ? null : i && i.__k || u.__k, e = [], T(u, l = (!t && i || u).__k = preact_module_a(y, null, [l]), r || o, o, void 0 !== u.ownerSVGElement, !t && i ? [i] : r ? null : u.firstChild ? f.slice.call(u.childNodes) : null, e, !t && i ? i : r ? r.__e : u.firstChild, t), j(e, l);
}

function O(n, l) {
  N(n, l, O);
}

function S(n, l, u) {
  var i,
      t,
      r,
      o = arguments,
      f = c({}, n.props);

  for (r in l) "key" == r ? i = l[r] : "ref" == r ? t = l[r] : f[r] = l[r];

  if (arguments.length > 3) for (u = [u], r = 3; r < arguments.length; r++) u.push(o[r]);
  return null != u && (f.children = u), v(n.type, f, i || n.key, t || n.ref, null);
}

function q(n, l) {
  var u = {
    __c: l = "__cC" + r++,
    __: n,
    Consumer: function (n, l) {
      return n.children(l);
    },
    Provider: function (n) {
      var u, i;
      return this.getChildContext || (u = [], (i = {})[l] = this, this.getChildContext = function () {
        return i;
      }, this.shouldComponentUpdate = function (n) {
        this.props.value !== n.value && u.some(k);
      }, this.sub = function (n) {
        u.push(n);
        var l = n.componentWillUnmount;

        n.componentWillUnmount = function () {
          u.splice(u.indexOf(n), 1), l && l.call(n);
        };
      }), n.children;
    }
  };
  return u.Provider.__ = u.Consumer.contextType = u;
}

n = {
  __e: function (n, l) {
    for (var u, i, t; l = l.__;) if ((u = l.__c) && !u.__) try {
      if ((i = u.constructor) && null != i.getDerivedStateFromError && (u.setState(i.getDerivedStateFromError(n)), t = u.__d), null != u.componentDidCatch && (u.componentDidCatch(n), t = u.__d), t) return u.__E = u;
    } catch (l) {
      n = l;
    }

    throw n;
  },
  __v: 0
}, l = function (n) {
  return null != n && void 0 === n.constructor;
}, p.prototype.setState = function (n, l) {
  var u;
  u = null != this.__s && this.__s !== this.state ? this.__s : this.__s = c({}, this.state), "function" == typeof n && (n = n(c({}, u), this.props)), n && c(u, n), null != n && this.__v && (l && this.__h.push(l), k(this));
}, p.prototype.forceUpdate = function (n) {
  this.__v && (this.__e = !0, n && this.__h.push(n), k(this));
}, p.prototype.render = y, u = [], i = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, m.__r = 0, r = 0;

;// CONCATENATED MODULE: ./node_modules/preact-custom-element/dist/preact-custom-element.esm.js


function preact_custom_element_esm_r() {
  return (preact_custom_element_esm_r = Object.assign || function (t) {
    for (var e = 1; e < arguments.length; e++) {
      var n = arguments[e];

      for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o]);
    }

    return t;
  }).apply(this, arguments);
}

function preact_custom_element_esm_i(t) {
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

  return S(e, n);
}

function a() {
  var o = new CustomEvent("_preact", {
    detail: {},
    bubbles: !0,
    cancelable: !0
  });
  this.dispatchEvent(o), this._vdom = preact_module_a(preact_custom_element_esm_i, preact_custom_element_esm_r({}, this._props, {
    context: o.detail.context
  }), function e(n, o) {
    if (3 === n.nodeType) return n.data;
    if (1 !== n.nodeType) return null;
    var r = [],
        i = {},
        a = 0,
        c = n.attributes,
        l = n.childNodes;

    for (a = c.length; a--;) "slot" !== c[a].name && (i[c[a].name] = c[a].value, i[preact_custom_element_esm_s(c[a].name)] = c[a].value);

    for (a = l.length; a--;) {
      var p = e(l[a], null),
          d = l[a].slot;
      d ? i[d] = preact_module_a(preact_custom_element_esm_u, {
        name: d
      }, p) : r[a] = p;
    }

    var h = o ? preact_module_a(preact_custom_element_esm_u, null, r) : r;
    return preact_module_a(o || n.nodeName.toLowerCase(), i, h);
  }(this, this._vdomComponent)), (this.hasAttribute("hydrate") ? O : N)(this._vdom, this._root);
}

function preact_custom_element_esm_s(t) {
  return t.replace(/-(\w)/g, function (t, e) {
    return e ? e.toUpperCase() : "";
  });
}

function preact_custom_element_esm_c(t, e, r) {
  if (this._vdom) {
    var i = {};
    i[t] = r = null == r ? void 0 : r, i[preact_custom_element_esm_s(t)] = r, this._vdom = S(this._vdom, i), N(this._vdom, this._root);
  }
}

function preact_custom_element_esm_l() {
  N(this._vdom = null, this._root);
}

function preact_custom_element_esm_u(e, n) {
  var o = this;
  return preact_module_a("slot", preact_custom_element_esm_r({}, e, {
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

  return (r.prototype = Object.create(HTMLElement.prototype)).constructor = r, r.prototype.connectedCallback = a, r.prototype.attributeChangedCallback = preact_custom_element_esm_c, r.prototype.disconnectedCallback = preact_custom_element_esm_l, n = n || t.observedAttributes || Object.keys(t.propTypes || {}), r.observedAttributes = n, n.forEach(function (t) {
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
;// CONCATENATED MODULE: ./node_modules/preact/hooks/dist/hooks.module.js

var hooks_module_t,
    hooks_module_u,
    hooks_module_r,
    hooks_module_o = 0,
    hooks_module_i = [],
    hooks_module_c = n.__b,
    hooks_module_f = n.__r,
    hooks_module_e = n.diffed,
    hooks_module_a = n.__c,
    hooks_module_v = n.unmount;

function hooks_module_m(t, r) {
  n.__h && n.__h(hooks_module_u, t, hooks_module_o || r), hooks_module_o = 0;
  var i = hooks_module_u.__H || (hooks_module_u.__H = {
    __: [],
    __h: []
  });
  return t >= i.__.length && i.__.push({}), i.__[t];
}

function hooks_module_l(n) {
  return hooks_module_o = 1, hooks_module_p(hooks_module_w, n);
}

function hooks_module_p(n, r, o) {
  var i = hooks_module_m(hooks_module_t++, 2);
  return i.t = n, i.__c || (i.__ = [o ? o(r) : hooks_module_w(void 0, r), function (n) {
    var t = i.t(i.__[0], n);
    i.__[0] !== t && (i.__ = [t, i.__[1]], i.__c.setState({}));
  }], i.__c = hooks_module_u), i.__;
}

function hooks_module_y(r, o) {
  var i = hooks_module_m(hooks_module_t++, 3);
  !n.__s && hooks_module_k(i.__H, o) && (i.__ = r, i.__H = o, hooks_module_u.__H.__h.push(i));
}

function hooks_module_h(r, o) {
  var i = hooks_module_m(hooks_module_t++, 4);
  !n.__s && hooks_module_k(i.__H, o) && (i.__ = r, i.__H = o, hooks_module_u.__h.push(i));
}

function hooks_module_s(n) {
  return hooks_module_o = 5, hooks_module_d(function () {
    return {
      current: n
    };
  }, []);
}

function hooks_module_(n, t, u) {
  hooks_module_o = 6, hooks_module_h(function () {
    "function" == typeof n ? n(t()) : n && (n.current = t());
  }, null == u ? u : u.concat(n));
}

function hooks_module_d(n, u) {
  var r = hooks_module_m(hooks_module_t++, 7);
  return hooks_module_k(r.__H, u) && (r.__ = n(), r.__H = u, r.__h = n), r.__;
}

function hooks_module_A(n, t) {
  return hooks_module_o = 8, hooks_module_d(function () {
    return n;
  }, t);
}

function F(n) {
  var r = hooks_module_u.context[n.__c],
      o = hooks_module_m(hooks_module_t++, 9);
  return o.__c = n, r ? (null == o.__ && (o.__ = !0, r.sub(hooks_module_u)), r.props.value) : n.__;
}

function hooks_module_T(t, u) {
  n.useDebugValue && n.useDebugValue(u ? u(t) : t);
}

function hooks_module_q(n) {
  var r = hooks_module_m(hooks_module_t++, 10),
      o = hooks_module_l();
  return r.__ = n, hooks_module_u.componentDidCatch || (hooks_module_u.componentDidCatch = function (n) {
    r.__ && r.__(n), o[1](n);
  }), [o[0], function () {
    o[1](void 0);
  }];
}

function hooks_module_x() {
  hooks_module_i.forEach(function (t) {
    if (t.__P) try {
      t.__H.__h.forEach(hooks_module_g), t.__H.__h.forEach(hooks_module_j), t.__H.__h = [];
    } catch (u) {
      t.__H.__h = [], n.__e(u, t.__v);
    }
  }), hooks_module_i = [];
}

n.__b = function (n) {
  hooks_module_u = null, hooks_module_c && hooks_module_c(n);
}, n.__r = function (n) {
  hooks_module_f && hooks_module_f(n), hooks_module_t = 0;
  var r = (hooks_module_u = n.__c).__H;
  r && (r.__h.forEach(hooks_module_g), r.__h.forEach(hooks_module_j), r.__h = []);
}, n.diffed = function (t) {
  hooks_module_e && hooks_module_e(t);
  var o = t.__c;
  o && o.__H && o.__H.__h.length && (1 !== hooks_module_i.push(o) && hooks_module_r === n.requestAnimationFrame || ((hooks_module_r = n.requestAnimationFrame) || function (n) {
    var t,
        u = function () {
      clearTimeout(r), hooks_module_b && cancelAnimationFrame(t), setTimeout(n);
    },
        r = setTimeout(u, 100);

    hooks_module_b && (t = requestAnimationFrame(u));
  })(hooks_module_x)), hooks_module_u = void 0;
}, n.__c = function (t, u) {
  u.some(function (t) {
    try {
      t.__h.forEach(hooks_module_g), t.__h = t.__h.filter(function (n) {
        return !n.__ || hooks_module_j(n);
      });
    } catch (r) {
      u.some(function (n) {
        n.__h && (n.__h = []);
      }), u = [], n.__e(r, t.__v);
    }
  }), hooks_module_a && hooks_module_a(t, u);
}, n.unmount = function (t) {
  hooks_module_v && hooks_module_v(t);
  var u = t.__c;
  if (u && u.__H) try {
    u.__H.__.forEach(hooks_module_g);
  } catch (t) {
    n.__e(t, u.__v);
  }
};
var hooks_module_b = "function" == typeof requestAnimationFrame;

function hooks_module_g(n) {
  var t = hooks_module_u;
  "function" == typeof n.__c && n.__c(), hooks_module_u = t;
}

function hooks_module_j(n) {
  var t = hooks_module_u;
  n.__c = n.__(), hooks_module_u = t;
}

function hooks_module_k(n, t) {
  return !n || n.length !== t.length || t.some(function (t, u) {
    return t !== n[u];
  });
}

function hooks_module_w(n, t) {
  return "function" == typeof t ? t(n) : t;
}


;// CONCATENATED MODULE: ./node_modules/preact/compat/dist/compat.module.js





function compat_module_C(n, t) {
  for (var e in t) n[e] = t[e];

  return n;
}

function compat_module_S(n, t) {
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
    return !r && e && (e.call ? e(null) : e.current = null), t ? !t(this.props, n) || !r : compat_module_S(this.props, n);
  }

  function r(t) {
    return this.shouldComponentUpdate = e, preact_module_a(n, t);
  }

  return r.displayName = "Memo(" + (n.displayName || n.name) + ")", r.prototype.isReactComponent = !0, r.__f = !0, r;
}

(E.prototype = new p()).isPureReactComponent = !0, E.prototype.shouldComponentUpdate = function (n, t) {
  return compat_module_S(this.props, n) || compat_module_S(this.state, t);
};
var compat_module_w = n.__b;

n.__b = function (n) {
  n.type && n.type.__f && n.ref && (n.props.ref = n.ref, n.ref = null), compat_module_w && compat_module_w(n);
};

var R = "undefined" != typeof Symbol && Symbol.for && Symbol.for("react.forward_ref") || 3911;

function compat_module_x(n) {
  function t(t, e) {
    var r = compat_module_C({}, t);
    return delete r.ref, n(r, (e = t.ref || e) && ("object" != typeof e || "current" in e) ? e : null);
  }

  return t.$$typeof = R, t.render = t, t.prototype.isReactComponent = t.__f = !0, t.displayName = "ForwardRef(" + (n.displayName || n.name) + ")", t;
}

var compat_module_N = function (n, t) {
  return null == n ? null : w(w(n).map(t));
},
    compat_module_k = {
  map: compat_module_N,
  forEach: compat_module_N,
  count: function (n) {
    return n ? w(n).length : 0;
  },
  only: function (n) {
    var t = w(n);
    if (1 !== t.length) throw "Children.only";
    return t[0];
  },
  toArray: w
},
    compat_module_A = n.__e;

function compat_module_O() {
  this.__u = 0, this.t = null, this.__b = null;
}

function compat_module_L(n) {
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
    return preact_module_a(e, u);
  }

  return u.displayName = "Lazy", u.__f = !0, u;
}

function D() {
  this.u = null, this.o = null;
}

n.__e = function (n, t, e) {
  if (n.then) for (var r, u = t; u = u.__;) if ((r = u.__c) && r.__c) return null == t.__e && (t.__e = e.__e, t.__k = e.__k), r.__c(n, t);
  compat_module_A(n, t, e);
}, (compat_module_O.prototype = new p()).__c = function (n, t) {
  var e = t.__c,
      r = this;
  null == r.t && (r.t = []), r.t.push(e);

  var u = compat_module_L(r.__v),
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
}, compat_module_O.prototype.componentWillUnmount = function () {
  this.t = [];
}, compat_module_O.prototype.render = function (n, t) {
  if (this.__b) {
    if (this.__v.__k) {
      var e = document.createElement("div"),
          r = this.__v.__k[0].__c;

      this.__v.__k[0] = function n(t, e, r) {
        return t && (t.__c && t.__c.__H && (t.__c.__H.__.forEach(function (n) {
          "function" == typeof n.__c && n.__c();
        }), t.__c.__H = null), null != (t = compat_module_C({}, t)).__c && (t.__c.__P === r && (t.__c.__P = e), t.__c = null), t.__k = t.__k && t.__k.map(function (t) {
          return n(t, e, r);
        })), t;
      }(this.__b, e, r.__O = r.__P);
    }

    this.__b = null;
  }

  var u = t.__e && preact_module_a(y, null, n.fallback);
  return u && (u.__h = null), [preact_module_a(y, null, t.__e ? null : n.children), u];
};

var compat_module_F = function (n, t, e) {
  if (++e[1] === e[0] && n.o.delete(t), n.props.revealOrder && ("t" !== n.props.revealOrder[0] || !n.o.size)) for (e = n.u; e;) {
    for (; e.length > 3;) e.pop()();

    if (e[1] < e[0]) break;
    n.u = e = e[2];
  }
};

function compat_module_M(n) {
  return this.getChildContext = function () {
    return n.context;
  }, n.children;
}

function compat_module_T(n) {
  var t = this,
      e = n.i;
  t.componentWillUnmount = function () {
    N(null, t.l), t.l = null, t.i = null;
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
  }), N(preact_module_a(compat_module_M, {
    context: t.context
  }, n.__v), t.l)) : t.l && t.componentWillUnmount();
}

function compat_module_j(n, t) {
  return preact_module_a(compat_module_T, {
    __v: n,
    i: t
  });
}

(D.prototype = new p()).__e = function (n) {
  var t = this,
      e = compat_module_L(t.__v),
      r = t.o.get(n);
  return r[0]++, function (u) {
    var o = function () {
      t.props.revealOrder ? (r.push(u), compat_module_F(t, n, r)) : u();
    };

    e ? e(o) : o();
  };
}, D.prototype.render = function (n) {
  this.u = null, this.o = new Map();
  var t = w(n.children);
  n.revealOrder && "b" === n.revealOrder[0] && t.reverse();

  for (var e = t.length; e--;) this.o.set(t[e], this.u = [1, 0, this.u]);

  return n.children;
}, D.prototype.componentDidUpdate = D.prototype.componentDidMount = function () {
  var n = this;
  this.o.forEach(function (t, e) {
    compat_module_F(n, e, t);
  });
};

var compat_module_I = "undefined" != typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103,
    W = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|fill|flood|font|glyph(?!R)|horiz|marker(?!H|W|U)|overline|paint|stop|strikethrough|stroke|text(?!L)|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,
    compat_module_P = function (n) {
  return ("undefined" != typeof Symbol && "symbol" == typeof Symbol() ? /fil|che|rad/i : /fil|che|ra/i).test(n);
};

function V(n, t, e) {
  return null == t.__k && (t.textContent = ""), N(n, t), "function" == typeof e && e(), n ? n.__c : null;
}

function compat_module_z(n, t, e) {
  return O(n, t), "function" == typeof e && e(), n ? n.__c : null;
}

p.prototype.isReactComponent = {}, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(function (n) {
  Object.defineProperty(p.prototype, n, {
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
var B = n.event;

function compat_module_H() {}

function Z() {
  return this.cancelBubble;
}

function Y() {
  return this.defaultPrevented;
}

n.event = function (n) {
  return B && (n = B(n)), n.persist = compat_module_H, n.isPropagationStopped = Z, n.isDefaultPrevented = Y, n.nativeEvent = n;
};

var compat_module_$,
    compat_module_q = {
  configurable: !0,
  get: function () {
    return this.class;
  }
},
    G = n.vnode;

n.vnode = function (n) {
  var t = n.type,
      e = n.props,
      r = e;

  if ("string" == typeof t) {
    for (var u in r = {}, e) {
      var o = e[u];
      "value" === u && "defaultValue" in e && null == o || ("defaultValue" === u && "value" in e && null == e.value ? u = "value" : "download" === u && !0 === o ? o = "" : /ondoubleclick/i.test(u) ? u = "ondblclick" : /^onchange(textarea|input)/i.test(u + t) && !compat_module_P(e.type) ? u = "oninput" : /^on(Ani|Tra|Tou|BeforeInp)/.test(u) ? u = u.toLowerCase() : W.test(u) ? u = u.replace(/[A-Z0-9]/, "-$&").toLowerCase() : null === o && (o = void 0), r[u] = o);
    }

    "select" == t && r.multiple && Array.isArray(r.value) && (r.value = w(e.children).forEach(function (n) {
      n.props.selected = -1 != r.value.indexOf(n.props.value);
    })), "select" == t && null != r.defaultValue && (r.value = w(e.children).forEach(function (n) {
      n.props.selected = r.multiple ? -1 != r.defaultValue.indexOf(n.props.value) : r.defaultValue == n.props.value;
    })), n.props = r;
  }

  t && e.class != e.className && (compat_module_q.enumerable = "className" in e, null != e.className && (r.class = e.className), Object.defineProperty(r, "className", compat_module_q)), n.$$typeof = compat_module_I, G && G(n);
};

var J = n.__r;

n.__r = function (n) {
  J && J(n), compat_module_$ = n.__c;
};

var K = {
  ReactCurrentDispatcher: {
    current: {
      readContext: function (n) {
        return compat_module_$.__n[n.__c].props.value;
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
  return preact_module_a.bind(null, n);
}

function fn(n) {
  return !!n && n.$$typeof === compat_module_I;
}

function cn(n) {
  return fn(n) ? S.apply(null, arguments) : n;
}

function an(n) {
  return !!n.__k && (N(null, n), !0);
}

function sn(n) {
  return n && (n.base || 1 === n.nodeType && n) || null;
}

var hn = function (n, t) {
  return n(t);
},
    pn = y;

/* harmony default export */ const compat_module = ({
  useState: hooks_module_l,
  useReducer: hooks_module_p,
  useEffect: hooks_module_y,
  useLayoutEffect: hooks_module_h,
  useRef: hooks_module_s,
  useImperativeHandle: hooks_module_,
  useMemo: hooks_module_d,
  useCallback: hooks_module_A,
  useContext: F,
  useDebugValue: hooks_module_T,
  version: "16.8.0",
  Children: compat_module_k,
  render: V,
  hydrate: compat_module_z,
  unmountComponentAtNode: an,
  createPortal: compat_module_j,
  createElement: preact_module_a,
  createContext: q,
  createFactory: ln,
  cloneElement: cn,
  createRef: h,
  Fragment: y,
  isValidElement: fn,
  findDOMNode: sn,
  Component: p,
  PureComponent: E,
  memo: compat_module_g,
  forwardRef: compat_module_x,
  unstable_batchedUpdates: hn,
  StrictMode: y,
  Suspense: compat_module_O,
  SuspenseList: D,
  lazy: U,
  __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: K
});

// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(838);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);
// EXTERNAL MODULE: ./node_modules/warning/warning.js
var warning = __webpack_require__(92);
var warning_default = /*#__PURE__*/__webpack_require__.n(warning);
;// CONCATENATED MODULE: ./node_modules/@reach/utils/dist/utils.esm.js



/* eslint-disable no-restricted-globals, eqeqeq  */

/**
 * React currently throws a warning when using useLayoutEffect on the server.
 * To get around it, we can conditionally useEffect on the server (no-op) and
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
 * TODO: We are calling useLayoutEffect in a couple of places that will likely
 * cause some issues for SSR users, whether the warning shows or not. Audit and
 * fix these.
 *
 * https://gist.github.com/gaearon/e7d97cdf38a2907924ea12e4ebdf3c85
 * https://github.com/reduxjs/react-redux/blob/master/src/utils/useIsomorphicLayoutEffect.js
 *
 * @param effect
 * @param deps
 */

var useIsomorphicLayoutEffect = /*#__PURE__*/canUseDOM() ? hooks_module_h : hooks_module_y;
var checkedPkgs = {};
/**
 * Copy of Facebook's warning package.
 *
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical paths.
 * Removing the logging code for production environments will keep the same
 * logic and follow the same code paths.
 *
 * @see https://github.com/BerkeleyTrue/warning/blob/master/warning.js
 */

var utils_esm_warning = (warning_default());
/**
 * When in dev mode, checks that styles for a given @reach package are loaded.
 *
 * @param packageName Name of the package to check.
 * @example checkStyles("dialog") will check for styles for @reach/dialog
 */

var checkStyles = utils_esm_noop;

if (false) { var _ref, env; }
/**
 * Ponyfill for the global object in some environments.
 *
 * @link https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
 */


var ponyfillGlobal = typeof window != "undefined" && window.Math == Math ? window : typeof self != "undefined" && self.Math == Math ? self :
/*#__PURE__*/
// eslint-disable-next-line no-new-func
Function("return this")();
/**
 * Passes or assigns an arbitrary value to a ref function or object.
 *
 * @param ref
 * @param value
 */

function assignRef(ref, value) {
  if (ref == null) return;

  if (utils_esm_isFunction(ref)) {
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
 * Checks true|"true" vs false|"false"
 *
 * @param value
 */


function boolOrBoolString(value) {
  return value === "true" ? true : isBoolean(value) ? value : false;
}

function canUseDOM() {
  return !!(typeof window !== "undefined" && window.document && window.document.createElement);
}
/**
 * Type-safe clone element
 *
 * @param element
 * @param props
 * @param children
 */


function cloneValidElement(element, props) {
  for (var _len = arguments.length, children = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    children[_key - 2] = arguments[_key];
  }

  return isValidElement(element) ? cloneElement.apply(React, [element, props].concat(children)) : element;
}

function createNamedContext(name, defaultValue) {
  var Ctx = q(defaultValue);
  Ctx.displayName = name;
  return Ctx;
}
/**
 * This is a hack for sure. The thing is, getting a component to intelligently
 * infer props based on a component or JSX string passed into an `as` prop is
 * kind of a huge pain. Getting it to work and satisfy the constraints of
 * `forwardRef` seems dang near impossible. To avoid needing to do this awkward
 * type song-and-dance every time we want to forward a ref into a component
 * that accepts an `as` prop, we abstract all of that mess to this function for
 * the time time being.
 */


function utils_esm_forwardRefWithAs(render) {
  return compat_module_x(render);
}

function memoWithAs(Component, propsAreEqual) {
  return compat_module_g(Component, propsAreEqual);
}
/**
 * Get the size of the working document minus the scrollbar offset.
 *
 * @param element
 */


function getDocumentDimensions(element) {
  var _ownerDocument$docume, _ownerDocument$docume2;

  var ownerDocument = getOwnerDocument(element);
  var ownerWindow = ownerDocument.defaultView || window;

  if (!ownerDocument) {
    return {
      width: 0,
      height: 0
    };
  }

  return {
    width: (_ownerDocument$docume = ownerDocument.documentElement.clientWidth) !== null && _ownerDocument$docume !== void 0 ? _ownerDocument$docume : ownerWindow.innerWidth,
    height: (_ownerDocument$docume2 = ownerDocument.documentElement.clientHeight) !== null && _ownerDocument$docume2 !== void 0 ? _ownerDocument$docume2 : ownerWindow.innerHeight
  };
}
/**
 * Get the scoll position of the global window object relative to a given node.
 *
 * @param element
 */


function getScrollPosition(element) {
  var ownerDocument = getOwnerDocument(element);
  var ownerWindow = ownerDocument.defaultView || window;

  if (!ownerDocument) {
    return {
      scrollX: 0,
      scrollY: 0
    };
  }

  return {
    scrollX: ownerWindow.scrollX,
    scrollY: ownerWindow.scrollY
  };
}
/**
 * Get a computed style value by property.
 *
 * @param element
 * @param styleProp
 */


function getElementComputedStyle(element, styleProp) {
  var ownerDocument = getOwnerDocument(element);
  var ownerWindow = (ownerDocument === null || ownerDocument === void 0 ? void 0 : ownerDocument.defaultView) || window;

  if (ownerWindow) {
    return ownerWindow.getComputedStyle(element, null).getPropertyValue(styleProp);
  }

  return null;
}
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
/**
 * Get the scrollbar offset distance.
 *
 * TODO: Remove in 1.0 (we used this in public examples)
 */


function getScrollbarOffset() {
  try {
    if (window.innerWidth > document.documentElement.clientWidth) {
      return window.innerWidth - document.documentElement.clientWidth;
    }
  } catch (err) {}

  return 0;
}
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


function utils_esm_isFunction(value) {
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
 * Detects right clicks
 *
 * @param nativeEvent
 */


function isRightClick(nativeEvent) {
  return "which" in nativeEvent ? nativeEvent.which === 3 : "button" in nativeEvent ? nativeEvent.button === 2 : false;
}
/**
 * Checks whether or not a value is a string.
 *
 * @param value
 */


function isString(value) {
  return typeof value === "string";
}
/**
 * Joins strings to format IDs for compound components.
 *
 * @param args
 */


function utils_esm_makeId() {
  for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    args[_key2] = arguments[_key2];
  }

  return args.filter(function (val) {
    return val != null;
  }).join("--");
}
/**
 * No-op function.
 */


function utils_esm_noop() {}
/**
 * Convert our state strings for HTML data attributes.
 * No need for a fancy kebab-caser here, we know what our state strings are!
 *
 * @param state
 */


function stateToAttributeString(state) {
  return String(state).replace(/([\s_]+)/g, "-").toLowerCase();
}
/**
 * Check if a component is controlled or uncontrolled and return the correct
 * state value and setter accordingly. If the component state is controlled by
 * the app, the setter is a noop.
 *
 * @param controlledValue
 * @param defaultValue
 */


function useControlledState(controlledValue, defaultValue) {
  var controlledRef = useRef(controlledValue != null);

  var _React$useState = useState(defaultValue),
      valueState = _React$useState[0],
      setValue = _React$useState[1];

  var set = useCallback(function (n) {
    if (!controlledRef.current) {
      setValue(n);
    }
  }, []);
  return [controlledRef.current ? controlledValue : valueState, set];
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


var useControlledSwitchWarning = utils_esm_noop;

if (false) {}

var useCheckStyles = utils_esm_noop;

if (false) {}
/**
 * React hook for creating a value exactly once.
 * @see https://github.com/Andarist/use-constant
 */


function useConstant(fn) {
  var ref = hooks_module_s();

  if (!ref.current) {
    ref.current = {
      v: fn()
    };
  }

  return ref.current.v;
}
/**
 * @param callback
 */


function useEventCallback(callback) {
  var ref = useRef(callback);
  useIsomorphicLayoutEffect(function () {
    ref.current = callback;
  });
  return useCallback(function (event) {
    for (var _len3 = arguments.length, args = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
      args[_key3 - 1] = arguments[_key3];
    }

    return ref.current.apply(ref, [event].concat(args));
  }, []);
}

function useLazyRef(fn) {
  var ref = useRef({
    __internalSet: true
  });

  if (ref.current && ref.current.__internalSet === true) {
    ref.current = fn();
  }

  return ref;
}
/**
 * TODO: Remove in 1.0
 * @alias useStableCallback
 * @param callback
 */


var useCallbackProp = useStableCallback;
/**
 * Adds a DOM event listener
 *
 * @param eventName
 * @param listener
 * @param element
 */

function useEventListener(eventName, listener, element) {
  if (element === void 0) {
    element = window;
  }

  var savedHandler = useRef(listener);
  useEffect(function () {
    savedHandler.current = listener;
  }, [listener]);
  useEffect(function () {
    var isSupported = element && element.addEventListener;

    if (!isSupported) {
      if (false) {}

      return;
    }

    function eventListener(event) {
      savedHandler.current(event);
    }

    element.addEventListener(eventName, eventListener);
    return function () {
      element.removeEventListener(eventName, eventListener);
    };
  }, [eventName, element]);
}
/**
 * Detect when focus changes in our document.
 *
 * @param handleChange
 * @param when
 * @param ownerDocument
 */


function useFocusChange(handleChange, when, ownerDocument) {
  if (handleChange === void 0) {
    handleChange = console.log;
  }

  if (when === void 0) {
    when = "focus";
  }

  if (ownerDocument === void 0) {
    ownerDocument = document;
  }

  var lastActiveElement = useRef(ownerDocument.activeElement);
  useEffect(function () {
    lastActiveElement.current = ownerDocument.activeElement;

    function onChange(event) {
      if (lastActiveElement.current !== ownerDocument.activeElement) {
        handleChange(ownerDocument.activeElement, lastActiveElement.current, event);
        lastActiveElement.current = ownerDocument.activeElement;
      }
    }

    ownerDocument.addEventListener(when, onChange, true);
    return function () {
      ownerDocument.removeEventListener(when, onChange);
    };
  }, [when, handleChange, ownerDocument]);
}
/**
 * Forces a re-render, similar to `forceUpdate` in class components.
 */


function useForceUpdate() {
  var _React$useState2 = hooks_module_l(Object.create(null)),
      dispatch = _React$useState2[1];

  return hooks_module_A(function () {
    dispatch(Object.create(null));
  }, []);
}
/**
 * Passes or assigns a value to multiple refs (typically a DOM node). Useful for
 * dealing with components that need an explicit ref for DOM calculations but
 * also forwards refs assigned by an app.
 *
 * @param refs Refs to fork
 */


function useForkedRef() {
  for (var _len4 = arguments.length, refs = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
    refs[_key4] = arguments[_key4];
  }

  return hooks_module_d(function () {
    if (refs.every(function (ref) {
      return ref == null;
    })) {
      return null;
    }

    return function (node) {
      refs.forEach(function (ref) {
        assignRef(ref, node);
      });
    }; // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [].concat(refs));
}
/**
 * Returns the previous value of a reference after a component update.
 *
 * @param value
 */


function usePrevious(value) {
  var ref = hooks_module_s(null);
  hooks_module_y(function () {
    ref.current = value;
  }, [value]);
  return ref.current;
}
/**
 * Converts a callback to a ref to avoid triggering re-renders when passed as a
 * prop and exposed as a stable function to avoid executing effects when
 * passed as a dependency.
 */


function useStableCallback(callback) {
  var callbackRef = hooks_module_s(callback);
  hooks_module_y(function () {
    callbackRef.current = callback;
  }); // eslint-disable-next-line react-hooks/exhaustive-deps

  return hooks_module_A(function () {
    callbackRef.current && callbackRef.current.apply(callbackRef, arguments);
  }, []);
}
/**
 * Call an effect after a component update, skipping the initial mount.
 *
 * @param effect Effect to call
 * @param deps Effect dependency list
 */


function useUpdateEffect(effect, deps) {
  var mounted = useRef(false);
  useEffect(function () {
    if (mounted.current) {
      effect();
    } else {
      mounted.current = true;
    } // eslint-disable-next-line react-hooks/exhaustive-deps

  }, deps);
}
/**
 * Just a lil state logger
 *
 * @param state
 * @param DEBUG
 */


var useStateLogger = (/* unused pure expression or super */ null && (utils_esm_noop));

if (false) {}
/**
 * Wraps a lib-defined event handler and a user-defined event handler, returning
 * a single handler that allows a user to prevent lib-defined handlers from
 * firing.
 *
 * @param theirHandler User-supplied event handler
 * @param ourHandler Library-supplied event handler
 */


function wrapEvent(theirHandler, ourHandler) {
  return function (event) {
    theirHandler && theirHandler(event);

    if (!event.defaultPrevented) {
      return ourHandler(event);
    }
  };
}


;// CONCATENATED MODULE: ./node_modules/@reach/auto-id/dist/auto-id.esm.js


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


function auto_id_esm_useId(idFromProps) {
  /*
   * If this instance isn't part of the initial render, we don't have to do the
   * double render/patch-up dance. We can just generate the ID and return it.
   */
  var initialId = idFromProps || (serverHandoffComplete ? genId() : null);

  var _React$useState = hooks_module_l(initialId),
      id = _React$useState[0],
      setId = _React$useState[1];

  useIsomorphicLayoutEffect(function () {
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
  hooks_module_y(function () {
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


;// CONCATENATED MODULE: ./node_modules/@reach/portal/dist/portal.esm.js



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
  var mountNode = hooks_module_s(null);
  var portalNode = hooks_module_s(null);
  var forceUpdate = useForceUpdate();
  useIsomorphicLayoutEffect(function () {
    // This ref may be null when a hot-loader replaces components on the page
    if (!mountNode.current) return; // It's possible that the content of the portal has, itself, been portaled.
    // In that case, it's important to append to the correct document element.

    var ownerDocument = mountNode.current.ownerDocument;
    portalNode.current = ownerDocument === null || ownerDocument === void 0 ? void 0 : ownerDocument.createElement(type);
    ownerDocument.body.appendChild(portalNode.current);
    forceUpdate();
    return function () {
      if (portalNode.current && portalNode.current.ownerDocument) {
        portalNode.current.ownerDocument.body.removeChild(portalNode.current);
      }
    };
  }, [type, forceUpdate]);
  return portalNode.current ? compat_module_j(children, portalNode.current) : preact_module_a("span", {
    ref: mountNode
  });
};

if (false) {} ////////////////////////////////////////////////////////////////////////////////


/* harmony default export */ const portal_esm = ((/* unused pure expression or super */ null && (Portal)));

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
;// CONCATENATED MODULE: ./node_modules/@reach/rect/dist/rect.esm.js




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

if (false) {}
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

    observe = (_observeOrOptions$obs = observeOrOptions === null || observeOrOptions === void 0 ? void 0 : observeOrOptions.observe) !== null && _observeOrOptions$obs !== void 0 ? _observeOrOptions$obs : true;
    onChange = observeOrOptions === null || observeOrOptions === void 0 ? void 0 : observeOrOptions.onChange;
  }

  if (utils_esm_isFunction(deprecated_onChange)) {
    onChange = deprecated_onChange;
  }

  if (false) {}

  var _React$useState = hooks_module_l(nodeRef.current),
      element = _React$useState[0],
      setElement = _React$useState[1];

  var initialRectIsSet = hooks_module_s(false);
  var initialRefIsSet = hooks_module_s(false);

  var _React$useState2 = hooks_module_l(null),
      rect = _React$useState2[0],
      setRect = _React$useState2[1];

  var onChangeRef = hooks_module_s(onChange);
  var stableOnChange = hooks_module_A(function (rect) {
    onChangeRef.current && onChangeRef.current(rect);
  }, []); // eslint-disable-next-line react-hooks/exhaustive-deps

  useIsomorphicLayoutEffect(function () {
    onChangeRef.current = onChange;

    if (nodeRef.current !== element) {
      setElement(nodeRef.current);
    }
  });
  useIsomorphicLayoutEffect(function () {
    if (element && !initialRectIsSet.current) {
      initialRectIsSet.current = true;
      setRect(element.getBoundingClientRect());
    }
  }, [element]);
  useIsomorphicLayoutEffect(function () {
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
} ////////////////////////////////////////////////////////////////////////////////


/* harmony default export */ const rect_esm = ((/* unused pure expression or super */ null && (Rect)));

// EXTERNAL MODULE: ./node_modules/tabbable/index.js
var tabbable = __webpack_require__(453);
var tabbable_default = /*#__PURE__*/__webpack_require__.n(tabbable);
;// CONCATENATED MODULE: ./node_modules/@reach/popover/dist/popover.esm.js






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
}

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
/**
 * Popover
 */


var Popover = /*#__PURE__*/utils_esm_forwardRefWithAs(function Popover(props, ref) {
  return preact_module_a(Portal, null, preact_module_a(PopoverImpl, Object.assign({
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


var PopoverImpl = /*#__PURE__*/utils_esm_forwardRefWithAs(function PopoverImpl(_ref, forwardedRef) {
  var _ref$as = _ref.as,
      Comp = _ref$as === void 0 ? "div" : _ref$as,
      targetRef = _ref.targetRef,
      _ref$position = _ref.position,
      position = _ref$position === void 0 ? positionDefault : _ref$position,
      _ref$unstable_observa = _ref.unstable_observableRefs,
      unstable_observableRefs = _ref$unstable_observa === void 0 ? [] : _ref$unstable_observa,
      props = _objectWithoutPropertiesLoose(_ref, ["as", "targetRef", "position", "unstable_observableRefs"]);

  var popoverRef = hooks_module_s(null);
  var popoverRect = useRect(popoverRef, {
    observe: !props.hidden
  });
  var targetRect = useRect(targetRef, {
    observe: !props.hidden
  });
  var ref = useForkedRef(popoverRef, forwardedRef);
  useSimulateTabNavigationForReactTree(targetRef, popoverRef);
  return preact_module_a(Comp, Object.assign({
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

function getTopPosition(targetRect, popoverRect) {
  var _getCollisions = getCollisions(targetRect, popoverRect),
      directionUp = _getCollisions.directionUp;

  return {
    top: directionUp ? targetRect.top - popoverRect.height + window.pageYOffset + "px" : targetRect.top + targetRect.height + window.pageYOffset + "px"
  };
}

var positionDefault = function positionDefault(targetRect, popoverRect) {
  if (!targetRect || !popoverRect) {
    return {};
  }

  var _getCollisions2 = getCollisions(targetRect, popoverRect),
      directionRight = _getCollisions2.directionRight;

  return _extends({
    left: directionRight ? targetRect.right - popoverRect.width + window.pageXOffset + "px" : targetRect.left + window.pageXOffset + "px"
  }, getTopPosition(targetRect, popoverRect));
};

var positionRight = function positionRight(targetRect, popoverRect) {
  if (!targetRect || !popoverRect) {
    return {};
  }

  var _getCollisions3 = getCollisions(targetRect, popoverRect),
      directionLeft = _getCollisions3.directionLeft;

  return _extends({
    left: directionLeft ? targetRect.left + window.pageXOffset + "px" : targetRect.right - popoverRect.width + window.pageXOffset + "px"
  }, getTopPosition(targetRect, popoverRect));
};

var positionMatchWidth = function positionMatchWidth(targetRect, popoverRect) {
  if (!targetRect || !popoverRect) {
    return {};
  }

  return _extends({
    width: targetRect.width,
    left: targetRect.left
  }, getTopPosition(targetRect, popoverRect));
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

  hooks_module_y(function () {
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
    (_triggerRef$current = triggerRef.current) === null || _triggerRef$current === void 0 ? void 0 : _triggerRef$current.focus();
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


/* harmony default export */ const popover_esm = ((/* unused pure expression or super */ null && (Popover)));

;// CONCATENATED MODULE: ./node_modules/@reach/descendants/dist/descendants.esm.js



function descendants_esm_extends() {
  descendants_esm_extends = Object.assign || function (target) {
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

  return descendants_esm_extends.apply(this, arguments);
}

function descendants_esm_objectWithoutPropertiesLoose(source, excluded) {
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

function createDescendantContext(name, initialValue) {
  if (initialValue === void 0) {
    initialValue = {};
  }

  var descendants = [];
  return createNamedContext(name, descendants_esm_extends({
    descendants: descendants,
    registerDescendant: utils_esm_noop,
    unregisterDescendant: utils_esm_noop
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


  var index = indexProp !== null && indexProp !== void 0 ? indexProp : descendants.findIndex(function (item) {
    return item.element === descendant.element;
  });
  var previousDescendants = usePrevious(descendants); // We also need to re-register descendants any time ANY of the other
  // descendants have changed. My brain was melting when I wrote this and it
  // feels a little off, but checking in render and using the result in the
  // effect's dependency array works well enough.

  var someDescendantsHaveChanged = descendants.some(function (descendant, index) {
    var _previousDescendants$;

    return descendant.element !== (previousDescendants === null || previousDescendants === void 0 ? void 0 : (_previousDescendants$ = previousDescendants[index]) === null || _previousDescendants$ === void 0 ? void 0 : _previousDescendants$.element);
  }); // Prevent any flashing

  useIsomorphicLayoutEffect(function () {
    if (!descendant.element) forceUpdate();
    registerDescendant(descendants_esm_extends({}, descendant, {
      index: index
    }));
    return function () {
      return unregisterDescendant(descendant.element);
    }; // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [forceUpdate, index, registerDescendant, someDescendantsHaveChanged, unregisterDescendant].concat(Object.values(descendant)));
  return index;
}

function useDescendantsInit() {
  return hooks_module_l([]);
}

function useDescendants(ctx) {
  return F(ctx).descendants;
}

function DescendantProvider(_ref) {
  var Ctx = _ref.context,
      children = _ref.children,
      items = _ref.items,
      set = _ref.set;
  var registerDescendant = hooks_module_A(function (_ref2) {
    var element = _ref2.element,
        explicitIndex = _ref2.index,
        rest = descendants_esm_objectWithoutPropertiesLoose(_ref2, ["element", "index"]);

    if (!element) {
      return;
    }

    set(function (items) {
      var newItems;

      if (explicitIndex != null) {
        newItems = [].concat(items, [descendants_esm_extends({}, rest, {
          element: element,
          index: explicitIndex
        })]);
      } else if (items.length === 0) {
        // If there are no items, register at index 0 and bail.
        newItems = [].concat(items, [descendants_esm_extends({}, rest, {
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

        var newItem = descendants_esm_extends({}, rest, {
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
        return descendants_esm_extends({}, item, {
          index: index
        });
      });
    });
  }, // set is a state setter initialized by the useDescendantsInit hook.
  // We can safely ignore the lint warning here because it will not change
  // between renders.
  // eslint-disable-next-line react-hooks/exhaustive-deps
  []);
  var unregisterDescendant = hooks_module_A(function (element) {
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
  return preact_module_a(Ctx.Provider, {
    value: hooks_module_d(function () {
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
  var index = currentIndex !== null && currentIndex !== void 0 ? currentIndex : -1;
  return function handleKeyDown(event) {
    if (!["ArrowDown", "ArrowUp", "ArrowLeft", "ArrowRight", "PageUp", "PageDown", "Home", "End"].includes(event.key)) {
      return;
    } // If we use a filter function, we need to re-index our descendants array
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
}


;// CONCATENATED MODULE: ./node_modules/@reach/menu-button/dist/menu-button.esm.js







function menu_button_esm_extends() {
  menu_button_esm_extends = Object.assign || function (target) {
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

  return menu_button_esm_extends.apply(this, arguments);
}

function menu_button_esm_objectWithoutPropertiesLoose(source, excluded) {
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
} // Actions


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
var MenuContext = /*#__PURE__*/createNamedContext("MenuContext", {});
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
  var buttonRef = hooks_module_s(null);
  var menuRef = hooks_module_s(null);
  var popoverRef = hooks_module_s(null);

  var _useDescendantsInit = useDescendantsInit(),
      descendants = _useDescendantsInit[0],
      setDescendants = _useDescendantsInit[1];

  var _React$useReducer = hooks_module_p(reducer, initialState),
      state = _React$useReducer[0],
      dispatch = _React$useReducer[1];

  var _id = auto_id_esm_useId(id);

  var menuId = id || utils_esm_makeId("menu", _id); // We use an event listener attached to the window to capture outside clicks
  // that close the menu. We don't want the initial button click to trigger this
  // when a menu is closed, so we can track this behavior in a ref for now.
  // We shouldn't need this when we rewrite with state machine logic.

  var buttonClickedRef = hooks_module_s(false); // We will put children callbacks in a ref to avoid triggering endless render
  // loops when using render props if the app code doesn't useCallback
  // https://github.com/reach/reach-ui/issues/523

  var selectCallbacks = hooks_module_s([]); // If the popover's position overlaps with an option when the popover
  // initially opens, the mouseup event will trigger a select. To prevent that,
  // we decide the menu button is only ready to make a selection if the pointer
  // moves first, otherwise the user is just registering the initial button
  // click rather than selecting an item. This is similar to a native select
  // on most platforms, and our menu button popover works similarly.

  var readyToSelect = hooks_module_s(false);
  var context = {
    buttonRef: buttonRef,
    dispatch: dispatch,
    menuId: menuId,
    menuRef: menuRef,
    popoverRef: popoverRef,
    buttonClickedRef: buttonClickedRef,
    readyToSelect: readyToSelect,
    selectCallbacks: selectCallbacks,
    state: state
  }; // When the menu is open, focus is placed on the menu itself so that
  // keyboard navigation is still possible.

  hooks_module_y(function () {
    if (state.isExpanded) {
      // @ts-ignore
      window.__REACH_DISABLE_TOOLTIPS = true;
      window.requestAnimationFrame(function () {
        menu_button_esm_focus(menuRef.current);
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
  return preact_module_a(DescendantProvider, {
    context: MenuDescendantContext,
    items: descendants,
    set: setDescendants
  }, preact_module_a(MenuContext.Provider, {
    value: context
  }, utils_esm_isFunction(children) ? children({
    isExpanded: state.isExpanded,
    // TODO: Remove in 1.0
    isOpen: state.isExpanded
  }) : children));
};

if (false) {} ////////////////////////////////////////////////////////////////////////////////

/**
 * MenuButton
 *
 * Wraps a DOM `button` that toggles the opening and closing of the dropdown
 * menu. Must be rendered inside of a `<Menu>`.
 *
 * @see Docs https://reach.tech/menu-button#menubutton
 */


var MenuButton = /*#__PURE__*/utils_esm_forwardRefWithAs(function MenuButton(_ref2, forwardedRef) {
  var _ref2$as = _ref2.as,
      Comp = _ref2$as === void 0 ? "button" : _ref2$as,
      onKeyDown = _ref2.onKeyDown,
      onMouseDown = _ref2.onMouseDown,
      id = _ref2.id,
      props = menu_button_esm_objectWithoutPropertiesLoose(_ref2, ["as", "onKeyDown", "onMouseDown", "id"]);

  var _React$useContext = F(MenuContext),
      buttonRef = _React$useContext.buttonRef,
      buttonClickedRef = _React$useContext.buttonClickedRef,
      menuId = _React$useContext.menuId,
      _React$useContext$sta = _React$useContext.state,
      buttonId = _React$useContext$sta.buttonId,
      isExpanded = _React$useContext$sta.isExpanded,
      dispatch = _React$useContext.dispatch;

  var ref = useForkedRef(buttonRef, forwardedRef);
  var items = useDescendants(MenuDescendantContext);
  var firstNonDisabledIndex = hooks_module_d(function () {
    return items.findIndex(function (item) {
      return !item.disabled;
    });
  }, [items]);
  hooks_module_y(function () {
    var newButtonId = id != null ? id : menuId ? utils_esm_makeId("menu-button", menuId) : "menu-button";

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

    if (menu_button_esm_isRightClick(event.nativeEvent)) {
      return;
    } else if (isExpanded) {
      dispatch({
        type: CLOSE_MENU,
        payload: {
          buttonRef: buttonRef
        }
      });
    } else {
      dispatch({
        type: OPEN_MENU_CLEARED
      });
    }
  }

  return preact_module_a(Comp // When the menu is displayed, the element with role `button` has
  // `aria-expanded` set to `true`. When the menu is hidden, it is
  // recommended that `aria-expanded` is not present.
  // https://www.w3.org/TR/wai-aria-practices-1.2/#menubutton
  , Object.assign({
    "aria-expanded": isExpanded ? true : undefined,
    "aria-haspopup": true,
    "aria-controls": menuId
  }, props, {
    ref: ref,
    "data-reach-menu-button": "",
    id: buttonId || undefined,
    onKeyDown: wrapEvent(onKeyDown, handleKeyDown),
    onMouseDown: wrapEvent(onMouseDown, handleMouseDown),
    type: "button"
  }));
});

if (false) {} ////////////////////////////////////////////////////////////////////////////////

/**
 * MenuItemImpl
 *
 * MenuItem and MenuLink share most of the same functionality captured here.
 */


var MenuItemImpl = /*#__PURE__*/utils_esm_forwardRefWithAs(function MenuItemImpl(_ref3, forwardedRef) {
  var Comp = _ref3.as,
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
      props = menu_button_esm_objectWithoutPropertiesLoose(_ref3, ["as", "index", "isLink", "onClick", "onDragStart", "onMouseDown", "onMouseEnter", "onMouseLeave", "onMouseMove", "onMouseUp", "onSelect", "disabled", "valueText"]);

  var _React$useContext2 = F(MenuContext),
      buttonRef = _React$useContext2.buttonRef,
      dispatch = _React$useContext2.dispatch,
      readyToSelect = _React$useContext2.readyToSelect,
      selectCallbacks = _React$useContext2.selectCallbacks,
      _React$useContext2$st = _React$useContext2.state,
      selectionIndex = _React$useContext2$st.selectionIndex,
      isExpanded = _React$useContext2$st.isExpanded;

  var ownRef = hooks_module_s(null); // After the ref is mounted to the DOM node, we check to see if we have an
  // explicit valueText prop before looking for the node's textContent for
  // typeahead functionality.

  var _React$useState = hooks_module_l(valueTextProp || ""),
      valueText = _React$useState[0],
      setValueText = _React$useState[1];

  var setValueTextFromDom = hooks_module_A(function (node) {
    if (node) {
      ownRef.current = node;

      if (!valueTextProp || node.textContent && valueText !== node.textContent) {
        setValueText(node.textContent);
      }
    }
  }, [valueText, valueTextProp]);
  var ref = useForkedRef(forwardedRef, setValueTextFromDom);
  var mouseEventStarted = hooks_module_s(false);
  var index = useDescendant({
    element: ownRef.current,
    key: valueText,
    disabled: disabled,
    isLink: isLink
  }, MenuDescendantContext, indexProp);
  var isSelected = index === selectionIndex && !disabled; // Update the callback ref array on every render

  selectCallbacks.current[index] = onSelect;

  function select() {
    menu_button_esm_focus(buttonRef.current);
    onSelect && onSelect();
    dispatch({
      type: CLICK_MENU_ITEM
    });
  }

  function handleClick(event) {
    if (isLink && !menu_button_esm_isRightClick(event.nativeEvent)) {
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
    if (menu_button_esm_isRightClick(event.nativeEvent)) return;

    if (isLink) {
      // Signal that the mouse is down so we can react call the right function
      // if the user is clicking on a link.
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

    if (menu_button_esm_isRightClick(event.nativeEvent)) return;

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


  hooks_module_y(function () {
    if (!isExpanded) {
      readyToSelect.current = false;
    }
  }, [isExpanded, readyToSelect]); // Any time a mouseup event occurs anywhere in the document, we reset the
  // mouseEventStarted ref so we can check it again when needed.

  hooks_module_y(function () {
    var ownerDocument = getOwnerDocument(ownRef.current);

    var listener = function listener() {
      return mouseEventStarted.current = false;
    };

    ownerDocument.addEventListener("mouseup", listener);
    return function () {
      return ownerDocument.removeEventListener("mouseup", listener);
    };
  }, []);
  return preact_module_a(Comp, Object.assign({
    role: "menuitem",
    id: useMenuItemId(index),
    tabIndex: -1
  }, props, {
    ref: ref,
    "aria-disabled": disabled || undefined,
    "data-reach-menu-item": "",
    "data-selected": isSelected ? "" : undefined,
    "data-valuetext": valueText,
    onClick: wrapEvent(onClick, handleClick),
    onDragStart: wrapEvent(onDragStart, handleDragStart),
    onMouseDown: wrapEvent(onMouseDown, handleMouseDown),
    onMouseEnter: wrapEvent(onMouseEnter, handleMouseEnter),
    onMouseLeave: wrapEvent(onMouseLeave, handleMouseLeave),
    onMouseMove: wrapEvent(onMouseMove, handleMouseMove),
    onMouseUp: wrapEvent(onMouseUp, handleMouseUp)
  }));
}); ////////////////////////////////////////////////////////////////////////////////

/**
 * MenuItem
 *
 * Handles menu selection. Must be a direct child of a `<MenuList>`.
 *
 * @see Docs https://reach.tech/menu-button#menuitem
 */

var MenuItem = /*#__PURE__*/utils_esm_forwardRefWithAs(function MenuItem(_ref4, forwardedRef) {
  var _ref4$as = _ref4.as,
      as = _ref4$as === void 0 ? "div" : _ref4$as,
      props = menu_button_esm_objectWithoutPropertiesLoose(_ref4, ["as"]);

  return preact_module_a(MenuItemImpl, Object.assign({}, props, {
    ref: forwardedRef,
    as: as
  }));
});

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


var MenuItems = /*#__PURE__*/utils_esm_forwardRefWithAs(function MenuItems(_ref5, forwardedRef) {
  var _ref5$as = _ref5.as,
      Comp = _ref5$as === void 0 ? "div" : _ref5$as,
      children = _ref5.children,
      id = _ref5.id,
      onKeyDown = _ref5.onKeyDown,
      props = menu_button_esm_objectWithoutPropertiesLoose(_ref5, ["as", "children", "id", "onKeyDown"]);

  var _React$useContext3 = F(MenuContext),
      menuId = _React$useContext3.menuId,
      dispatch = _React$useContext3.dispatch,
      buttonRef = _React$useContext3.buttonRef,
      menuRef = _React$useContext3.menuRef,
      selectCallbacks = _React$useContext3.selectCallbacks,
      _React$useContext3$st = _React$useContext3.state,
      isExpanded = _React$useContext3$st.isExpanded,
      buttonId = _React$useContext3$st.buttonId,
      selectionIndex = _React$useContext3$st.selectionIndex,
      typeaheadQuery = _React$useContext3$st.typeaheadQuery;

  var menuItems = useDescendants(MenuDescendantContext);
  var ref = useForkedRef(menuRef, forwardedRef);
  hooks_module_y(function () {
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
  hooks_module_y(function () {
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
  var handleKeyDown = wrapEvent(function handleKeyDown(event) {
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

            menu_button_esm_focus(buttonRef.current);
            selectCallbacks.current[selected.index] && selectCallbacks.current[selected.index]();
            dispatch({
              type: CLICK_MENU_ITEM
            });
          }
        }

        break;

      case "Escape":
        menu_button_esm_focus(buttonRef.current);
        dispatch({
          type: CLOSE_MENU,
          payload: {
            buttonRef: buttonRef
          }
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
  return (// TODO: Should probably file a but in jsx-a11y, but this is correct
    // according to https://www.w3.org/TR/wai-aria-practices-1.2/examples/menu-button/menu-button-actions-active-descendant.html
    // eslint-disable-next-line jsx-a11y/aria-activedescendant-has-tabindex
    preact_module_a(Comp // Refers to the descendant menuitem element that is visually indicated
    // as focused.
    // https://www.w3.org/TR/wai-aria-practices-1.2/examples/menu-button/menu-button-actions-active-descendant.html
    , Object.assign({
      "aria-activedescendant": useMenuItemId(selectionIndex) || undefined,
      "aria-labelledby": buttonId || undefined,
      // The element that contains the menu items displayed by activating the
      // button has role menu.
      // https://www.w3.org/TR/wai-aria-practices-1.2/#menubutton
      role: "menu",
      tabIndex: -1
    }, props, {
      ref: ref,
      "data-reach-menu-items": "",
      id: menuId,
      onKeyDown: wrapEvent(onKeyDown, handleKeyDown)
    }), children)
  );
});

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


var MenuLink = /*#__PURE__*/(/* unused pure expression or super */ null && (forwardRefWithAs(function MenuLink(_ref6, forwardedRef) {
  var _ref6$as = _ref6.as,
      as = _ref6$as === void 0 ? "a" : _ref6$as,
      component = _ref6.component,
      onSelect = _ref6.onSelect,
      props = menu_button_esm_objectWithoutPropertiesLoose(_ref6, ["as", "component", "onSelect"]);

  if (component) {
    console.warn("[@reach/menu-button]: Please use the `as` prop instead of `component`.");
  }

  return createElement("div", {
    role: "none",
    tabIndex: -1
  }, createElement(MenuItemImpl, Object.assign({}, props, {
    ref: forwardedRef,
    "data-reach-menu-link": "",
    as: as,
    isLink: true,
    onSelect: onSelect || noop
  })));
})));

if (false) {} ////////////////////////////////////////////////////////////////////////////////

/**
 * MenuList
 *
 * Wraps a DOM element that renders the menu items. Must be rendered inside of
 * a `<Menu>`.
 *
 * @see Docs https://reach.tech/menu-button#menulist
 */


var MenuList = /*#__PURE__*/utils_esm_forwardRefWithAs(function MenuList(_ref7, forwardedRef) {
  var _ref7$portal = _ref7.portal,
      portal = _ref7$portal === void 0 ? true : _ref7$portal,
      props = menu_button_esm_objectWithoutPropertiesLoose(_ref7, ["portal"]);

  return preact_module_a(MenuPopover, {
    portal: portal
  }, preact_module_a(MenuItems, Object.assign({}, props, {
    ref: forwardedRef,
    "data-reach-menu-list": ""
  })));
});

if (false) {} ////////////////////////////////////////////////////////////////////////////////

/**
 * MenuPopover
 *
 * A low-level wrapper for the popover that appears when a menu button is open.
 * You can compose it with `MenuItems` for more control over the nested
 * components and their rendered DOM nodes, or if you need to nest arbitrary
 * components between the outer wrapper and your list.
 *
 * @see Docs https://reach.tech/menu-button#menupopover
 */


var MenuPopover = /*#__PURE__*/utils_esm_forwardRefWithAs(function MenuPopover(_ref8, forwardedRef) {
  var _ref8$as = _ref8.as,
      Comp = _ref8$as === void 0 ? "div" : _ref8$as,
      children = _ref8.children,
      _ref8$portal = _ref8.portal,
      portal = _ref8$portal === void 0 ? true : _ref8$portal,
      position = _ref8.position,
      props = menu_button_esm_objectWithoutPropertiesLoose(_ref8, ["as", "children", "portal", "position"]);

  var _React$useContext4 = F(MenuContext),
      buttonRef = _React$useContext4.buttonRef,
      buttonClickedRef = _React$useContext4.buttonClickedRef,
      dispatch = _React$useContext4.dispatch,
      menuRef = _React$useContext4.menuRef,
      popoverRef = _React$useContext4.popoverRef,
      isExpanded = _React$useContext4.state.isExpanded;

  var ref = useForkedRef(popoverRef, forwardedRef);
  hooks_module_y(function () {
    var ownerDocument = getOwnerDocument(popoverRef.current);

    function listener(event) {
      if (buttonClickedRef.current) {
        buttonClickedRef.current = false;
      } else if (!popoverContainsEventTarget(popoverRef.current, event.target)) {
        // We on want to close only if focus rests outside the menu
        dispatch({
          type: CLOSE_MENU,
          payload: {
            buttonRef: buttonRef
          }
        });
      }
    }

    ownerDocument.addEventListener("mousedown", listener); // see https://github.com/reach/reach-ui/pull/700#discussion_r530369265
    // ownerDocument.addEventListener("touchstart", listener);

    return function () {
      ownerDocument.removeEventListener("mousedown", listener); // ownerDocument.removeEventListener("touchstart", listener);
    };
  }, [buttonClickedRef, buttonRef, dispatch, menuRef, popoverRef]);

  var commonProps = menu_button_esm_extends({
    ref: ref,
    // TODO: remove in 1.0
    "data-reach-menu": "",
    "data-reach-menu-popover": "",
    hidden: !isExpanded,
    children: children
  }, props);

  return portal ? preact_module_a(Popover, Object.assign({}, commonProps, {
    as: Comp,
    targetRef: buttonRef,
    position: position
  })) : preact_module_a(Comp, Object.assign({}, commonProps));
});

if (false) {} ////////////////////////////////////////////////////////////////////////////////

/**
 * A hook that exposes data for a given `Menu` component to its descendants.
 *
 * @see Docs https://reach.tech/menu-button#usemenubuttoncontext
 */


function useMenuButtonContext() {
  var _React$useContext5 = useContext(MenuContext),
      isExpanded = _React$useContext5.state.isExpanded;

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

    return item.disabled ? false : (_item$element = item.element) === null || _item$element === void 0 ? void 0 : (_item$element$dataset = _item$element.dataset) === null || _item$element$dataset === void 0 ? void 0 : (_item$element$dataset2 = _item$element$dataset.valuetext) === null || _item$element$dataset2 === void 0 ? void 0 : _item$element$dataset2.toLowerCase().startsWith(string);
  });
  return found ? items.indexOf(found) : null;
}

function useMenuItemId(index) {
  var _React$useContext6 = F(MenuContext),
      menuId = _React$useContext6.menuId;

  return index != null && index > -1 ? utils_esm_makeId("option-" + index, menuId) : undefined;
}

function menu_button_esm_isRightClick(nativeEvent) {
  return nativeEvent.which === 3 || nativeEvent.button === 2;
}

function menu_button_esm_focus(element) {
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
      return menu_button_esm_extends({}, state, {
        isExpanded: false,
        selectionIndex: -1
      });

    case CLOSE_MENU:
      return menu_button_esm_extends({}, state, {
        isExpanded: false,
        selectionIndex: -1
      });

    case OPEN_MENU_AT_FIRST_ITEM:
      return menu_button_esm_extends({}, state, {
        isExpanded: true,
        selectionIndex: 0
      });

    case OPEN_MENU_AT_INDEX:
      return menu_button_esm_extends({}, state, {
        isExpanded: true,
        selectionIndex: action.payload.index
      });

    case OPEN_MENU_CLEARED:
      return menu_button_esm_extends({}, state, {
        isExpanded: true,
        selectionIndex: -1
      });

    case SELECT_ITEM_AT_INDEX:
      if (action.payload.index >= 0) {
        return menu_button_esm_extends({}, state, {
          selectionIndex: action.payload.max != null ? Math.min(Math.max(action.payload.index, 0), action.payload.max) : Math.max(action.payload.index, 0)
        });
      }

      return state;

    case CLEAR_SELECTION_INDEX:
      return menu_button_esm_extends({}, state, {
        selectionIndex: -1
      });

    case SET_BUTTON_ID:
      return menu_button_esm_extends({}, state, {
        buttonId: action.payload
      });

    case SEARCH_FOR_ITEM:
      if (typeof action.payload !== "undefined") {
        return menu_button_esm_extends({}, state, {
          typeaheadQuery: action.payload
        });
      }

      return state;

    default:
      return state;
  }
}


;// CONCATENATED MODULE: ./src/components/Button/component.js




const Button = ({
  label,
  onClick,
  variant
}) => {
  return preact_module_a(Menu, null, preact_module_a(MenuButton, {
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
/* harmony default export */ const icons_sprite = ("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogIDxzdmcgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiBmaWxsPSJub25lIiB2aWV3Qm94PSIwIDAgMjAgMjAiIGlkPSJpYy1oaXN0b3J5IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogICAgPHBhdGggZD0iTTExLjY2NyA2LjY2N2gtMS4yNXY0LjE2NmwzLjU2NiAyLjExNy42LTEuMDA4LTIuOTE2LTEuNzM0VjYuNjY3ek0xMS4yNSAyLjVhNy41IDcuNSAwIDAwLTcuNSA3LjVoLTIuNWwzLjMgMy4zNThMNy45MTcgMTBoLTIuNWE1LjgzMyA1LjgzMyAwIDExNS44MzMgNS44MzMgNS43ODYgNS43ODYgMCAwMS00LjExNy0xLjcxNkw1Ljk1IDE1LjNhNy40MTMgNy40MTMgMCAwMDUuMyAyLjIgNy41IDcuNSAwIDAwMC0xNXoiIGZpbGw9IiM3Mjc2N0UiIC8+CiAgPC9zdmc+CiAgPHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCAyMCAyMCIgaWQ9ImljLW1lbnUtYXJyb3ctdXAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgICA8cGF0aCB0cmFuc2Zvcm09InJvdGF0ZSgxODAgOS45OTk5MjU2MTM0MDMzMiwxMC40MTY1NzQ0NzgxNDk0MTQpIiBmaWxsPSIjNzI3NjdFIiBkPSJtNS44MzMyNSw4LjMzMzI1bDQuMTY2NjcsNC4xNjY2NWw0LjE2NjY4LC00LjE2NjY1bC04LjMzMzM1LDB6Ii8+CiAgPC9zdmc+CiAgPHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCAyMCAyMCIgaWQ9ImljLW1lbnUtYXJyb3ctZG93biIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxwYXRoIGQ9Ik01LjgzMyA4LjMzM0wxMCAxMi41bDQuMTY3LTQuMTY3SDUuODMzeiIgZmlsbD0iIzcyNzY3RSIgLz4KICA8L3N2Zz4KICA8c3ZnIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDIwIDIwIiBpZD0iaWMtcmVkbyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxwYXRoIGQ9Ik0xNC41MzcgOS40YTcuMzA2IDcuMzA2IDAgMDAtNC43MjItMS43MzNjLTMuMTgyIDAtNS44NyAyLjAyLTYuODE1IDQuODEzbDEuNjE1LjUyYy43MTgtMi4xMjcgMi43NzEtMy42NjcgNS4yLTMuNjY3IDEuMzM1IDAgMi41NTMuNDggMy41MDQgMS4yNTRMMTAuODQyIDEzSDE3VjdsLTIuNDYzIDIuNHoiIGZpbGw9IiM3Mjc2N0UiIC8+CiAgPC9zdmc+CiAgPHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCAyMCAyMCIgaWQ9ImljLXRleHQtcmljaCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxwYXRoIGQ9Ik0yLjUgNy41aDV2NWgtNXYtNXptMC0zLjMzM2gxNXYxLjY2NmgtMTVWNC4xNjZ6bTE1IDMuMzMzdjEuNjY2SDkuMTY3VjcuNUgxNy41em0wIDMuMzMzVjEyLjVIOS4xNjd2LTEuNjY3SDE3LjV6bS0xNSAzLjMzM2gxMS42Njd2MS42NjdIMi41di0xLjY2N3oiIGZpbGw9IiM3Mjc2N0UiIC8+CiAgPC9zdmc+CiAgPHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCAyMCAyMCIgaWQ9ImljLXVuZG8iIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgICA8cGF0aCBkPSJNMTAuMTgxIDcuNjY3QTcuMyA3LjMgMCAwMDUuNDYyIDkuNEwzIDd2Nmg2LjE1NUw2LjY4IDEwLjU4N2E1LjUyMyA1LjUyMyAwIDAxMy41MDEtMS4yNTRjMi40MjEgMCA0LjQ4IDEuNTQgNS4xOTggMy42NjdMMTcgMTIuNDhjLS45NS0yLjc5My0zLjYzOS00LjgxMy02LjgxOS00LjgxM3oiIGZpbGw9IiM3Mjc2N0UiIC8+CiAgPC9zdmc+Cjwvc3ZnPg==");
;// CONCATENATED MODULE: ./src/components/Icon/component.js




const Icon = ({
  name,
  width,
  height,
  className
}) => {
  return preact_module_a("svg", {
    className: `sn-icon ${className ? className : ''}`,
    width: width,
    height: height
  }, preact_module_a("use", {
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
  return preact_module_a(Menu, null, ({
    isExpanded
  }) => preact_module_a(y, null, preact_module_a(MenuButton, {
    className: "sn-dropdown-menu"
  }, icon && icon, " ", label, " ", isExpanded ? preact_module_a(Icon_component, {
    name: "menu-arrow-up"
  }) : preact_module_a(Icon_component, {
    name: "menu-arrow-down"
  })), preact_module_a(MenuList, {
    className: "sn-dropdown-menu-list"
  }, items && items.map(item => preact_module_a(MenuItem, {
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
var es_n = {
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
      return i = es_t.Running, es_s(r, es_n), u;
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


;// CONCATENATED MODULE: ./node_modules/@reach/machine/dist/machine.esm.js





function machine_esm_extends() {
  machine_esm_extends = Object.assign || function (target) {
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

  return machine_esm_extends.apply(this, arguments);
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
  var machineRef = hooks_module_s(initialMachine);
  var service = useConstant(function () {
    return es_f(machineRef.current).start();
  });
  var lastEventType = hooks_module_s(null);

  var _React$useState = hooks_module_l(function () {
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


  var send = hooks_module_A(function (rawEvent) {
    var event = isString(rawEvent) ? {
      type: rawEvent
    } : rawEvent;
    var refValues = unwrapRefs(refs);
    service.send(machine_esm_extends({}, event, {
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
  hooks_module_y(function () {
    service.subscribe(function setStateIfChanged(newState) {
      if (newState.changed) {
        setState(newState);
      }
    });
    return function () {
      service.stop();
    };
  }, [service]);
  hooks_module_y(function () {
    if (false) {}
  }, [DEBUG, state]); // We are going to pass along our state without the actions to avoid excess
  // renders when the reference changes. We haven't really needed them at this
  // point, but if we do we can maybe reconsider this approach.

  var memoizedState = hooks_module_d(function () {
    return machine_esm_extends({}, state, {
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
}


;// CONCATENATED MODULE: ./node_modules/@reach/listbox/dist/listbox.esm.js








function listbox_esm_extends() {
  listbox_esm_extends = Object.assign || function (target) {
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

  return listbox_esm_extends.apply(this, arguments);
}

function listbox_esm_objectWithoutPropertiesLoose(source, excluded) {
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

var _commonEvents; // States


var ListboxStates;

(function (ListboxStates) {
  // Resting/closed state.
  ListboxStates["Idle"] = "IDLE"; // Listbox is open but the user is not yet navigating.

  ListboxStates["Open"] = "OPEN"; // The user is navigating the list

  ListboxStates["Navigating"] = "NAVIGATING"; // The user has moused-down but hasn't made a selection yet

  ListboxStates["Dragging"] = "DRAGGING"; // The user is interacting with arbitrary elements inside the popover

  ListboxStates["Interacting"] = "INTERACTING";
})(ListboxStates || (ListboxStates = {})); ////////////////////////////////////////////////////////////////////////////////
// Events


var ListboxEvents;

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
  ListboxEvents["OutsideMouseDown"] = "OUTSIDE_MOUSE_DOWN";
  ListboxEvents["OutsideMouseUp"] = "OUTSIDE_MOUSE_UP"; // Uncontrolled value changes come from specific events (click, key, etc.)
  // ValueChange > Value change may have come from somewhere else

  ListboxEvents["ValueChange"] = "VALUE_CHANGE";
  ListboxEvents["OptionMouseDown"] = "OPTION_MOUSE_DOWN";
  ListboxEvents["OptionMouseUp"] = "OPTION_MOUSE_UP";
  ListboxEvents["PopoverPointerDown"] = "POPOVER_POINTER_DOWN";
  ListboxEvents["PopoverPointerUp"] = "POPOVER_POINTER_UP";
  ListboxEvents["UpdateAfterTypeahead"] = "UPDATE_AFTER_TYPEAHEAD";
})(ListboxEvents || (ListboxEvents = {})); ////////////////////////////////////////////////////////////////////////////////
// Actions and conditions


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
var listbox_esm_navigate = /*#__PURE__*/es_r({
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
      })) === null || _data$options$find === void 0 ? void 0 : _data$options$find.value) || null;
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
    return !!((ownerDocument === null || ownerDocument === void 0 ? void 0 : ownerDocument.activeElement) !== list && popover && !popover.contains(relatedTarget || (ownerDocument === null || ownerDocument === void 0 ? void 0 : ownerDocument.activeElement)));
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
  if (event && event.disabled) {
    return false;
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
    return listbox_esm_extends({}, ctx, event.data);
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
      on: listbox_esm_extends({}, commonEvents, (_extends2 = {}, _extends2[ListboxEvents.ButtonMouseDown] = {
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
      on: listbox_esm_extends({}, commonEvents, (_extends3 = {}, _extends3[ListboxEvents.ClearNavSelection] = {
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
        actions: [listbox_esm_navigate, clearTypeahead],
        cond: optionIsNavigable
      }, _extends3[ListboxEvents.OptionMouseEnter] = {
        target: ListboxStates.Navigating,
        actions: [listbox_esm_navigate, clearTypeahead],
        cond: optionIsNavigable
      }, _extends3[ListboxEvents.KeyDownNavigate] = {
        target: ListboxStates.Navigating,
        actions: [listbox_esm_navigate, clearTypeahead, focusList]
      }, _extends3))
    }, _states[ListboxStates.Open] = {
      on: listbox_esm_extends({}, commonEvents, (_extends4 = {}, _extends4[ListboxEvents.ClearNavSelection] = {
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
      }, _extends4[ListboxEvents.OptionTouchStart] = {
        target: ListboxStates.Navigating,
        actions: [listbox_esm_navigate, clearTypeahead],
        cond: optionIsNavigable
      }, _extends4[ListboxEvents.KeyDownNavigate] = {
        target: ListboxStates.Navigating,
        actions: [listbox_esm_navigate, clearTypeahead, focusList]
      }, _extends4[ListboxEvents.KeyDownSearch] = {
        target: ListboxStates.Navigating,
        actions: setTypeahead
      }, _extends4[ListboxEvents.UpdateAfterTypeahead] = {
        actions: [setNavSelectionFromTypeahead]
      }, _extends4[ListboxEvents.ClearTypeahead] = {
        actions: clearTypeahead
      }, _extends4[ListboxEvents.OptionMouseMove] = [{
        target: ListboxStates.Dragging,
        actions: [listbox_esm_navigate],
        cond: optionIsNavigable
      }, {
        target: ListboxStates.Dragging
      }], _extends4))
    }, _states[ListboxStates.Dragging] = {
      on: listbox_esm_extends({}, commonEvents, (_extends5 = {}, _extends5[ListboxEvents.ClearNavSelection] = {
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
        actions: [listbox_esm_navigate, clearTypeahead],
        cond: optionIsNavigable
      }, _extends5[ListboxEvents.OptionMouseEnter] = {
        target: ListboxStates.Dragging,
        actions: [listbox_esm_navigate, clearTypeahead],
        cond: optionIsNavigable
      }, _extends5[ListboxEvents.KeyDownNavigate] = {
        target: ListboxStates.Navigating,
        actions: [listbox_esm_navigate, clearTypeahead, focusList]
      }, _extends5[ListboxEvents.KeyDownSearch] = {
        target: ListboxStates.Navigating,
        actions: setTypeahead
      }, _extends5[ListboxEvents.UpdateAfterTypeahead] = {
        actions: [setNavSelectionFromTypeahead]
      }, _extends5[ListboxEvents.ClearTypeahead] = {
        actions: clearTypeahead
      }, _extends5[ListboxEvents.OptionMouseMove] = [{
        target: ListboxStates.Navigating,
        actions: [listbox_esm_navigate],
        cond: optionIsNavigable
      }, {
        target: ListboxStates.Navigating
      }], _extends5[ListboxEvents.OptionMouseUp] = {
        target: ListboxStates.Idle,
        actions: [assignValue, clearTypeahead, focusButton, selectOption],
        cond: optionIsSelectable
      }, _extends5))
    }, _states[ListboxStates.Navigating] = {
      on: listbox_esm_extends({}, commonEvents, (_extends6 = {}, _extends6[ListboxEvents.ClearNavSelection] = {
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
        actions: [listbox_esm_navigate, clearTypeahead],
        cond: optionIsNavigable
      }, _extends6[ListboxEvents.OptionMouseEnter] = {
        target: ListboxStates.Navigating,
        actions: [listbox_esm_navigate, clearTypeahead],
        cond: optionIsNavigable
      }, _extends6[ListboxEvents.KeyDownNavigate] = {
        target: ListboxStates.Navigating,
        actions: [listbox_esm_navigate, clearTypeahead, focusList]
      }, _extends6[ListboxEvents.KeyDownSearch] = {
        target: ListboxStates.Navigating,
        actions: setTypeahead
      }, _extends6[ListboxEvents.UpdateAfterTypeahead] = {
        actions: [setNavSelectionFromTypeahead]
      }, _extends6[ListboxEvents.ClearTypeahead] = {
        actions: clearTypeahead
      }, _extends6[ListboxEvents.OptionMouseMove] = [{
        target: ListboxStates.Navigating,
        actions: [listbox_esm_navigate],
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
}

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

var ListboxInput = /*#__PURE__*/utils_esm_forwardRefWithAs(function ListboxInput(_ref, forwardedRef) {
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
      _ref$_componentName = _ref._componentName,
      _componentName = _ref$_componentName === void 0 ? "ListboxInput" : _ref$_componentName,
      props = listbox_esm_objectWithoutPropertiesLoose(_ref, ["as", "aria-labelledby", "aria-label", "children", "defaultValue", "disabled", "form", "name", "onChange", "required", "value", "_componentName"]);

  var isControlled = hooks_module_s(valueProp != null);

  var _useDescendantsInit = useDescendantsInit(),
      options = _useDescendantsInit[0],
      setOptions = _useDescendantsInit[1];

  var stableOnChange = useStableCallback(onChange); // DOM refs

  var buttonRef = hooks_module_s(null);
  var hiddenInputRef = hooks_module_s(null);
  var highlightedOptionRef = hooks_module_s(null);
  var inputRef = hooks_module_s(null);
  var listRef = hooks_module_s(null);
  var popoverRef = hooks_module_s(null);
  var selectedOptionRef = hooks_module_s(null);
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
      send = _useMachine[1]; // IDs for aria attributes


  var _id = auto_id_esm_useId(props.id);

  var id = props.id || utils_esm_makeId("listbox-input", _id);
  var ref = useForkedRef(inputRef, forwardedRef); // If the button has children, we just render them as the label.
  // Otherwise we'll find the option with a value that matches the listbox value
  // and use its label in the button. We'll get that here and send it to the
  // button via context.
  // If a user needs the label for SSR to prevent hydration mismatch issues,
  // they need to control the state of the component and pass a label directly
  // to the button.

  var valueLabel = hooks_module_d(function () {
    var selected = options.find(function (option) {
      return option.value === state.context.value;
    });
    return selected ? selected.label : null;
  }, [options, state.context.value]);
  var isExpanded = isListboxExpanded(state.value); // TODO: Remove duplication and memoize

  var context = hooks_module_d(function () {
    return {
      ariaLabel: ariaLabel,
      ariaLabelledBy: ariaLabelledBy,
      disabled: disabled,
      isExpanded: isExpanded,
      listboxId: id,
      listboxValueLabel: valueLabel,
      onValueChange: stableOnChange,
      buttonRef: buttonRef,
      listRef: listRef,
      popoverRef: popoverRef,
      selectedOptionRef: selectedOptionRef,
      highlightedOptionRef: highlightedOptionRef,
      send: send,
      state: state.value,
      stateData: state.context
    };
  }, [ariaLabel, ariaLabelledBy, state.value, state.context, disabled, id, isExpanded, stableOnChange, send, valueLabel]); // For uncontrolled listbox components where no `defaultValue` is provided, we
  // will update the value based on the value of the first selectable option.
  // We call the update directly because:
  //   A) we only ever need to do this once, so we can guard with a ref
  //   B) useLayoutEffect races useDecendant, so we might not have options yet
  //   C) useEffect will cause a flash

  var mounted = hooks_module_s(false);

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

  useControlledSwitchWarning(valueProp, "value", _componentName); // Even if the app controls state, we still need to update it internally to
  // run the state machine transitions

  useControlledStateSync(valueProp, state.context.value, function () {
    send({
      type: ListboxEvents.ValueChange,
      value: valueProp
    });
  });
  useIsomorphicLayoutEffect(function () {
    send({
      type: ListboxEvents.GetDerivedData,
      data: {
        options: options
      }
    });
  }, [options, send]);
  hooks_module_y(function () {
    function handleMouseDown(event) {
      var target = event.target,
          relatedTarget = event.relatedTarget;

      if (!listbox_esm_popoverContainsEventTarget(popoverRef.current, target)) {
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
  hooks_module_y(function () {
    function handleMouseUp(event) {
      var target = event.target,
          relatedTarget = event.relatedTarget;

      if (!listbox_esm_popoverContainsEventTarget(popoverRef.current, target)) {
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
  return preact_module_a(DescendantProvider, {
    context: ListboxDescendantContext,
    items: options,
    set: setOptions
  }, preact_module_a(ListboxContext.Provider, {
    value: context
  }, preact_module_a(Comp, Object.assign({}, props, {
    ref: ref,
    "data-reach-listbox-input": "",
    "data-state": isExpanded ? "expanded" : "closed",
    "data-value": state.context.value,
    id: id
  }), utils_esm_isFunction(children) ? children({
    id: id,
    isExpanded: isExpanded,
    value: state.context.value,
    selectedOptionRef: selectedOptionRef,
    highlightedOptionRef: highlightedOptionRef,
    valueLabel: valueLabel,
    // TODO: Remove in 1.0
    expanded: isExpanded
  }) : children), (form || name || required) && preact_module_a("input", {
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
  })));
});

if (false) {} ////////////////////////////////////////////////////////////////////////////////

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


var Listbox = /*#__PURE__*/(/* unused pure expression or super */ null && (forwardRefWithAs(function Listbox(_ref2, forwardedRef) {
  var _ref2$arrow = _ref2.arrow,
      arrow = _ref2$arrow === void 0 ? "▼" : _ref2$arrow,
      button = _ref2.button,
      children = _ref2.children,
      _ref2$portal = _ref2.portal,
      portal = _ref2$portal === void 0 ? true : _ref2$portal,
      props = listbox_esm_objectWithoutPropertiesLoose(_ref2, ["arrow", "button", "children", "portal"]);

  return createElement(ListboxInput, Object.assign({}, props, {
    _componentName: "Listbox",
    ref: forwardedRef
  }), function (_ref3) {
    var value = _ref3.value,
        valueLabel = _ref3.valueLabel;
    return createElement(Fragment, null, createElement(ListboxButton, {
      arrow: arrow,
      children: button ? isFunction(button) ? button({
        value: value,
        label: valueLabel
      }) : button : undefined
    }), createElement(ListboxPopover, {
      portal: portal
    }, createElement(ListboxList, null, children)));
  });
})));

if (false) {} ////////////////////////////////////////////////////////////////////////////////

/**
 * ListboxButton
 *
 * The interactive toggle button that triggers the popover for the listbox.
 *
 * @see Docs https://reach.tech/listbox#listbox-button
 */


var ListboxButtonImpl = /*#__PURE__*/utils_esm_forwardRefWithAs(function ListboxButton(_ref4, forwardedRef) {
  var ariaLabel = _ref4["aria-label"],
      _ref4$arrow = _ref4.arrow,
      arrow = _ref4$arrow === void 0 ? false : _ref4$arrow,
      _ref4$as = _ref4.as,
      Comp = _ref4$as === void 0 ? "span" : _ref4$as,
      children = _ref4.children,
      onKeyDown = _ref4.onKeyDown,
      onMouseDown = _ref4.onMouseDown,
      onMouseUp = _ref4.onMouseUp,
      props = listbox_esm_objectWithoutPropertiesLoose(_ref4, ["aria-label", "arrow", "as", "children", "onKeyDown", "onMouseDown", "onMouseUp"]);

  var _React$useContext = F(ListboxContext),
      ariaLabelledBy = _React$useContext.ariaLabelledBy,
      buttonRef = _React$useContext.buttonRef,
      disabled = _React$useContext.disabled,
      isExpanded = _React$useContext.isExpanded,
      listboxId = _React$useContext.listboxId,
      stateData = _React$useContext.stateData,
      send = _React$useContext.send,
      listboxValueLabel = _React$useContext.listboxValueLabel;

  var listboxValue = stateData.value;
  var ref = useForkedRef(buttonRef, forwardedRef);
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

  var id = utils_esm_makeId("button", listboxId); // If the button has children, we just render them as the label
  // If a user needs the label on the server to prevent hydration mismatch
  // errors, they need to control the state of the component and pass a label
  // directly to the button.

  var label = hooks_module_d(function () {
    if (!children) {
      return listboxValueLabel;
    } else if (utils_esm_isFunction(children)) {
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
  return preact_module_a(Comp // Applicable to all host language elements regardless of whether a
  // `role` is applied.
  // https://www.w3.org/WAI/PF/aria/states_and_properties#global_states_header
  , Object.assign({
    "aria-disabled": disabled || undefined,
    "aria-expanded": isExpanded || undefined,
    "aria-haspopup": "listbox",
    "aria-labelledby": ariaLabel ? undefined : [ariaLabelledBy, id].filter(Boolean).join(" "),
    "aria-label": ariaLabel,
    // Identifies the element as a button widget.
    // https://www.w3.org/TR/wai-aria-practices-1.2/examples/button/button.html
    role: "button",
    // Includes the element in the tab sequence.
    // https://www.w3.org/TR/wai-aria-practices-1.2/examples/button/button.html
    tabIndex: disabled ? -1 : 0
  }, props, {
    ref: ref,
    "data-reach-listbox-button": "",
    id: id,
    onKeyDown: wrapEvent(onKeyDown, handleKeyDown),
    onMouseDown: wrapEvent(onMouseDown, handleMouseDown),
    onMouseUp: wrapEvent(onMouseUp, handleMouseUp)
  }), label, arrow && preact_module_a(ListboxArrow, null, isBoolean(arrow) ? null : arrow));
});

if (false) {}

var ListboxButton = /*#__PURE__*/memoWithAs(ListboxButtonImpl); ////////////////////////////////////////////////////////////////////////////////

/**
 * ListboxArrow
 *
 * A wrapper component for an arrow to display in the `ListboxButton`
 *
 * @see Docs https://reach.tech/listbox#listboxarrow
 */

var ListboxArrowImpl = /*#__PURE__*/utils_esm_forwardRefWithAs(function ListboxArrow(_ref5, forwardedRef) {
  var _ref5$as = _ref5.as,
      Comp = _ref5$as === void 0 ? "span" : _ref5$as,
      children = _ref5.children,
      props = listbox_esm_objectWithoutPropertiesLoose(_ref5, ["as", "children"]);

  var _React$useContext2 = F(ListboxContext),
      isExpanded = _React$useContext2.isExpanded;

  return preact_module_a(Comp // The arrow provides no semantic value and its inner content should be
  // hidden from the accessibility tree
  , Object.assign({
    "aria-hidden": true
  }, props, {
    ref: forwardedRef,
    "data-reach-listbox-arrow": "",
    "data-expanded": isExpanded ? "" : undefined
  }), utils_esm_isFunction(children) ? children({
    isExpanded: isExpanded,
    // TODO: Remove in 1.0
    expanded: isExpanded
  }) : children || "▼");
});

if (false) {}

var ListboxArrow = /*#__PURE__*/memoWithAs(ListboxArrowImpl); ////////////////////////////////////////////////////////////////////////////////

/**
 * ListboxPopover
 *
 * The popover containing the list of options.
 *
 * @see Docs https://reach.tech/listbox#listboxpopover
 */

var ListboxPopoverImpl = /*#__PURE__*/utils_esm_forwardRefWithAs(function ListboxPopover(_ref6, forwardedRef) {
  var _ref6$as = _ref6.as,
      Comp = _ref6$as === void 0 ? "div" : _ref6$as,
      _ref6$position = _ref6.position,
      position = _ref6$position === void 0 ? positionMatchWidth : _ref6$position,
      onBlur = _ref6.onBlur,
      onKeyDown = _ref6.onKeyDown,
      _ref6$portal = _ref6.portal,
      portal = _ref6$portal === void 0 ? true : _ref6$portal,
      unstable_observableRefs = _ref6.unstable_observableRefs,
      props = listbox_esm_objectWithoutPropertiesLoose(_ref6, ["as", "position", "onBlur", "onKeyDown", "portal", "unstable_observableRefs"]);

  var _React$useContext3 = F(ListboxContext),
      buttonRef = _React$useContext3.buttonRef,
      popoverRef = _React$useContext3.popoverRef,
      send = _React$useContext3.send,
      isExpanded = _React$useContext3.isExpanded;

  var ref = useForkedRef(popoverRef, forwardedRef);
  var handleKeyDown = useKeyDown();

  var commonProps = listbox_esm_extends({
    hidden: !isExpanded,
    tabIndex: -1
  }, props, {
    ref: ref,
    "data-reach-listbox-popover": "",
    onBlur: wrapEvent(onBlur, handleBlur),
    onKeyDown: wrapEvent(onKeyDown, handleKeyDown)
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

  return portal ? preact_module_a(Popover, Object.assign({}, commonProps, {
    as: Comp,
    targetRef: buttonRef,
    position: position,
    unstable_observableRefs: unstable_observableRefs
  })) : preact_module_a(Comp, Object.assign({}, commonProps));
});

if (false) {}

var ListboxPopover = /*#__PURE__*/memoWithAs(ListboxPopoverImpl); ////////////////////////////////////////////////////////////////////////////////

/**
 * ListboxList
 *
 * The list containing all listbox options.
 *
 * @see Docs https://reach.tech/listbox#listboxlist
 */

var ListboxList = /*#__PURE__*/utils_esm_forwardRefWithAs(function ListboxList(_ref7, forwardedRef) {
  var _ref7$as = _ref7.as,
      Comp = _ref7$as === void 0 ? "ul" : _ref7$as,
      props = listbox_esm_objectWithoutPropertiesLoose(_ref7, ["as"]);

  var _React$useContext4 = F(ListboxContext),
      ariaLabel = _React$useContext4.ariaLabel,
      ariaLabelledBy = _React$useContext4.ariaLabelledBy,
      isExpanded = _React$useContext4.isExpanded,
      listboxId = _React$useContext4.listboxId,
      listRef = _React$useContext4.listRef,
      _React$useContext4$st = _React$useContext4.stateData,
      value = _React$useContext4$st.value,
      navigationValue = _React$useContext4$st.navigationValue;

  var ref = useForkedRef(forwardedRef, listRef);
  return preact_module_a(Comp // Tells assistive technologies which of the options, if any, is
  // visually indicated as having keyboard focus. DOM focus remains on the
  // `ul` element and the idref specified for `aria-activedescendant`
  // refers to the `li` element that is visually styled as focused. When
  // navigation keys, such as `Down Arrow`, are pressed, the JavaScript
  // changes the value.
  // https://www.w3.org/TR/wai-aria-practices-1.2/examples/listbox/listbox-grouped.html
  , Object.assign({
    "aria-activedescendant": useOptionId(isExpanded ? navigationValue : value),
    "aria-labelledby": ariaLabel ? undefined : ariaLabelledBy,
    "aria-label": ariaLabel,
    // An element that contains or owns all the listbox options has role
    // listbox.
    // https://www.w3.org/TR/wai-aria-practices-1.2/#Listbox
    role: "listbox",
    // https://www.w3.org/TR/wai-aria-practices-1.2/examples/listbox/listbox-collapsible.html
    tabIndex: -1
  }, props, {
    ref: ref,
    "data-reach-listbox-list": "",
    id: utils_esm_makeId("listbox", listboxId)
  }));
});

if (false) {} ////////////////////////////////////////////////////////////////////////////////

/**
 * ListboxOption
 *
 * A selectable option for the listbox.
 *
 * @see Docs https://reach.tech/listbox#listboxoption
 */


var ListboxOption = /*#__PURE__*/utils_esm_forwardRefWithAs(function ListboxOption(_ref8, forwardedRef) {
  var _ref8$as = _ref8.as,
      Comp = _ref8$as === void 0 ? "li" : _ref8$as,
      children = _ref8.children,
      disabled = _ref8.disabled,
      onMouseDown = _ref8.onMouseDown,
      onMouseEnter = _ref8.onMouseEnter,
      onMouseLeave = _ref8.onMouseLeave,
      onMouseMove = _ref8.onMouseMove,
      onMouseUp = _ref8.onMouseUp,
      onTouchStart = _ref8.onTouchStart,
      value = _ref8.value,
      labelProp = _ref8.label,
      props = listbox_esm_objectWithoutPropertiesLoose(_ref8, ["as", "children", "disabled", "onMouseDown", "onMouseEnter", "onMouseLeave", "onMouseMove", "onMouseUp", "onTouchStart", "value", "label"]);

  if (false) {}

  var _React$useContext5 = F(ListboxContext),
      highlightedOptionRef = _React$useContext5.highlightedOptionRef,
      isExpanded = _React$useContext5.isExpanded,
      onValueChange = _React$useContext5.onValueChange,
      selectedOptionRef = _React$useContext5.selectedOptionRef,
      send = _React$useContext5.send,
      state = _React$useContext5.state,
      _React$useContext5$st = _React$useContext5.stateData,
      listboxValue = _React$useContext5$st.value,
      navigationValue = _React$useContext5$st.navigationValue;

  var _React$useState = hooks_module_l(labelProp),
      labelState = _React$useState[0],
      setLabel = _React$useState[1];

  var label = labelProp || labelState || "";
  var ownRef = hooks_module_s(null);
  useDescendant({
    element: ownRef.current,
    value: value,
    label: label,
    disabled: !!disabled
  }, ListboxDescendantContext); // After the ref is mounted to the DOM node, we check to see if we have an
  // explicit label prop before looking for the node's textContent for
  // typeahead functionality.

  var getLabelFromDomNode = hooks_module_A(function (node) {
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
  var ref = useForkedRef(getLabelFromDomNode, forwardedRef, ownRef, isSelected ? selectedOptionRef : null, isHighlighted ? highlightedOptionRef : null);

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

  return preact_module_a(Comp // In a single-select listbox, the selected option has `aria-selected`
  // set to `true`.
  // https://www.w3.org/TR/wai-aria-practices-1.2/#Listbox
  , Object.assign({
    "aria-selected": (isExpanded ? isHighlighted : isSelected) || undefined,
    "aria-disabled": disabled || undefined,
    // Each option in the listbox has role `option` and is a DOM descendant
    // of the element with role `listbox`.
    // https://www.w3.org/TR/wai-aria-practices-1.2/#Listbox
    role: "option"
  }, props, {
    ref: ref,
    id: useOptionId(value),
    "data-reach-listbox-option": "",
    "data-current": isSelected ? "" : undefined,
    "data-label": label,
    "data-value": value,
    onMouseDown: wrapEvent(onMouseDown, handleMouseDown),
    onMouseEnter: wrapEvent(onMouseEnter, handleMouseEnter),
    onMouseLeave: wrapEvent(onMouseLeave, handleMouseLeave),
    onMouseMove: wrapEvent(onMouseMove, handleMouseMove),
    onMouseUp: wrapEvent(onMouseUp, handleMouseUp),
    onTouchStart: wrapEvent(onTouchStart, handleTouchStart)
  }), children);
});

if (false) {} ////////////////////////////////////////////////////////////////////////////////

/**
 * ListboxGroup
 *
 * A group of related listbox options.
 *
 * @see Docs https://reach.tech/listbox#listboxgroup
 */


var ListboxGroup = /*#__PURE__*/(/* unused pure expression or super */ null && (forwardRefWithAs(function ListboxGroup(_ref9, forwardedRef) {
  var _ref9$as = _ref9.as,
      Comp = _ref9$as === void 0 ? "div" : _ref9$as,
      label = _ref9.label,
      children = _ref9.children,
      props = listbox_esm_objectWithoutPropertiesLoose(_ref9, ["as", "label", "children"]);

  var _React$useContext6 = useContext(ListboxContext),
      listboxId = _React$useContext6.listboxId;

  var labelId = makeId("label", useId(props.id), listboxId);
  return createElement(ListboxGroupContext.Provider, {
    value: {
      labelId: labelId
    }
  }, createElement(Comp // Refers to the element containing the option group label
  // https://www.w3.org/TR/wai-aria-practices-1.2/examples/listbox/listbox-grouped.html
  , Object.assign({
    "aria-labelledby": labelId,
    // Identifies a group of related options
    // https://www.w3.org/TR/wai-aria-practices-1.2/examples/listbox/listbox-grouped.html
    role: "group"
  }, props, {
    "data-reach-listbox-group": "",
    ref: forwardedRef
  }), label && createElement(ListboxGroupLabel, null, label), children));
})));

if (false) {} ////////////////////////////////////////////////////////////////////////////////

/**
 * ListboxGroupLabel
 *
 * @see Docs https://reach.tech/listbox#listboxgrouplabel
 */


var ListboxGroupLabel = /*#__PURE__*/(/* unused pure expression or super */ null && (forwardRefWithAs(function ListboxGroupLabel(_ref10, forwardedRef) {
  var _ref10$as = _ref10.as,
      Comp = _ref10$as === void 0 ? "span" : _ref10$as,
      props = listbox_esm_objectWithoutPropertiesLoose(_ref10, ["as"]);

  var _React$useContext7 = useContext(ListboxGroupContext),
      labelId = _React$useContext7.labelId;

  return createElement(Comp // See examples
  // https://www.w3.org/TR/wai-aria-practices-1.2/examples/listbox/listbox-grouped.html
  , Object.assign({
    // See examples
    // https://www.w3.org/TR/wai-aria-practices-1.2/examples/listbox/listbox-grouped.html
    role: "presentation"
  }, props, {
    ref: forwardedRef,
    "data-reach-listbox-group-label": "",
    id: labelId
  }));
})));

if (false) {} ////////////////////////////////////////////////////////////////////////////////

/**
 * A hook that exposes data for a given `Listbox` component to its descendants.
 *
 * @see Docs https://reach.tech/listbox#uselistboxcontext
 */


function useListboxContext() {
  var _React$useContext8 = useContext(ListboxContext),
      highlightedOptionRef = _React$useContext8.highlightedOptionRef,
      listboxId = _React$useContext8.listboxId,
      listboxValueLabel = _React$useContext8.listboxValueLabel,
      isExpanded = _React$useContext8.isExpanded,
      selectedOptionRef = _React$useContext8.selectedOptionRef,
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
      listboxDisabled = _React$useContext9.disabled,
      onValueChange = _React$useContext9.onValueChange,
      _React$useContext9$st = _React$useContext9.stateData,
      navigationValue = _React$useContext9$st.navigationValue,
      typeaheadQuery = _React$useContext9$st.typeaheadQuery,
      send = _React$useContext9.send;

  var options = useDescendants(ListboxDescendantContext);
  hooks_module_y(function () {
    if (typeaheadQuery) {
      send({
        type: ListboxEvents.UpdateAfterTypeahead,
        query: typeaheadQuery,
        callback: onValueChange
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
  }, [onValueChange, send, typeaheadQuery]);
  var index = options.findIndex(function (_ref11) {
    var value = _ref11.value;
    return value === navigationValue;
  });
  var handleKeyDown = wrapEvent(function (event) {
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
          disabled: !!((navOption === null || navOption === void 0 ? void 0 : navOption.disabled) || listboxDisabled)
        });
        return;

      case " ":
        // Prevent browser from scrolling down
        event.preventDefault();
        send({
          type: ListboxEvents.KeyDownSpace,
          value: navigationValue,
          callback: onValueChange,
          disabled: !!((navOption === null || navOption === void 0 ? void 0 : navOption.disabled) || listboxDisabled)
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

  return value ? utils_esm_makeId("option-" + value, listboxId) : undefined;
}

function listbox_esm_popoverContainsEventTarget(popover, target) {
  return !!(popover && popover.contains(target));
}

function useControlledStateSync(controlPropValue, internalValue, send) {
  var _React$useRef = hooks_module_s(controlPropValue != null),
      isControlled = _React$useRef.current;

  if (isControlled && controlPropValue !== internalValue) {
    send();
  }
}


;// CONCATENATED MODULE: ./src/components/ListBox/component.js






const ListBox = ({
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

  return preact_module_a(ListboxInput, {
    className: "sn-listbox",
    defaultValue: defaultValue,
    onChange: onChange
  }, ({
    value,
    valueLabel,
    isExpanded
  }) => preact_module_a(y, null, preact_module_a(ListboxButton, {
    className: "sn-listbox-button"
  }, preact_module_a("span", {
    "data-value": value
  }, valueLabel ?? placeholder), " ", isExpanded ? preact_module_a(Icon_component, {
    name: "menu-arrow-up"
  }) : preact_module_a(Icon_component, {
    name: "menu-arrow-down"
  })), preact_module_a(ListboxPopover, {
    className: "sn-listbox-popover"
  }, preact_module_a(ListboxList, {
    className: "sn-listbox-list"
  }, options && options.map(option => preact_module_a(ListboxOption, {
    className: "sn-listbox-list-option",
    value: option.value,
    valueText: option.label
  }, option.label))))));
};

ListBox.propTypes = {
  defaultValue: (prop_types_default()).string,
  options: (prop_types_default()).array.isRequired,
  onChange: (prop_types_default()).func.isRequired,
  placeholder: (prop_types_default()).string
};
ListBox.defaultProps = {
  defaultValue: "",
  placeholder: "Choose an option..."
};
/* harmony default export */ const ListBox_component = (ListBox);
;// CONCATENATED MODULE: ./src/components/ListBox/index.js

;// CONCATENATED MODULE: ./src/index.js




;// CONCATENATED MODULE: ./src/custom-elements.js


preact_custom_element_esm(component, 'sn-button');
preact_custom_element_esm(DropdownMenu_component, 'sn-dropdown-menu');
preact_custom_element_esm(ListBox_component, 'sn-listbox');

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
/************************************************************************/
/******/ 	// module exports must be returned from runtime so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	__webpack_require__(152);
/******/ 	return __webpack_require__(36);
/******/ })()
;
});