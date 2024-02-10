/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/plugins.fastdom.js":
/*!***********************************!*\
  !*** ./src/js/plugins.fastdom.js ***!
  \***********************************/
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
// Fastdom 1.0.11
!function (t) {
  "use strict";

  function e() {
    var e = this;
    e.reads = [], e.writes = [], e.raf = o.bind(t);
  }
  function n(t) {
    t.scheduled || (t.scheduled = !0, t.raf(i.bind(null, t)));
  }
  function i(t) {
    var e,
      i = t.writes,
      r = t.reads;
    try {
      r.length, t.runTasks(r), i.length, t.runTasks(i);
    } catch (t) {
      e = t;
    }
    if (t.scheduled = !1, (r.length || i.length) && n(t), e) {
      if (e.message, !t["catch"]) throw e;
      t["catch"](e);
    }
  }
  function r(t, e) {
    var n = t.indexOf(e);
    return !!~n && !!t.splice(n, 1);
  }
  function s(t, e) {
    for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
  }
  var o = t.requestAnimationFrame || t.webkitRequestAnimationFrame || t.mozRequestAnimationFrame || t.msRequestAnimationFrame || function (t) {
    return setTimeout(t, 16);
  };
  e.prototype = {
    constructor: e,
    runTasks: function runTasks(t) {
      for (var e; e = t.shift();) e();
    },
    measure: function measure(t, e) {
      var i = e ? t.bind(e) : t;
      return this.reads.push(i), n(this), i;
    },
    mutate: function mutate(t, e) {
      var i = e ? t.bind(e) : t;
      return this.writes.push(i), n(this), i;
    },
    clear: function clear(t) {
      return r(this.reads, t) || r(this.writes, t);
    },
    extend: function extend(t) {
      if ("object" != _typeof(t)) throw new Error("expected object");
      var e = Object.create(this);
      return s(e, t), e.fastdom = this, e.initialize && e.initialize(), e;
    },
    "catch": null
  };
  var exports = t.fastdom = t.fastdom || new e();
   true ? !(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {
    return exports;
  }).call(exports, __webpack_require__, exports, module),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : 0;
}("undefined" != typeof window ? window : this);

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
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/plugins.fastdom.js");
/******/ 	
/******/ })()
;