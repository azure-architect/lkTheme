/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/functions.js":
/*!*****************************!*\
  !*** ./src/js/functions.js ***!
  \*****************************/
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
if (typeof jQuery !== 'undefined') {
  var $ = jQuery.noConflict();
}
(function (global, factory) {
  ( false ? 0 : _typeof(exports)) === 'object' && "object" !== 'undefined' ? module.exports = factory() :  true ? !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
		__WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : (0);
})(this, function () {
  // USE STRICT
  "use strict";

  var options = {
    pageTransition: false,
    cursor: false,
    tips: false,
    headerSticky: true,
    headerMobileSticky: false,
    menuBreakpoint: 992,
    pageMenuBreakpoint: 992,
    gmapAPI: '',
    scrollOffset: 60,
    scrollExternalLinks: true,
    smoothScroll: false,
    jsFolder: 'js/',
    cssFolder: 'css/'
  };
  if (typeof cnvsOptions !== 'undefined') {
    options = Object.assign({}, options, cnvsOptions);
  }
  var vars = {
    baseEl: document,
    elRoot: document.documentElement,
    elHead: document.head,
    elBody: document.body,
    viewport: {
      width: 0,
      height: 0
    },
    hash: window.location.hash,
    topScrollOffset: 0,
    elWrapper: document.getElementById('wrapper'),
    elHeader: document.getElementById('header'),
    headerClasses: '',
    elHeaderWrap: document.getElementById('header-wrap'),
    headerWrapClasses: '',
    headerHeight: 0,
    headerOffset: 0,
    headerWrapHeight: 0,
    headerWrapOffset: 0,
    elPrimaryMenus: document.querySelectorAll('.primary-menu'),
    elPrimaryMenuTriggers: document.querySelectorAll('.primary-menu-trigger'),
    elPageMenu: document.getElementById('page-menu'),
    pageMenuOffset: 0,
    elSlider: document.getElementById('slider'),
    elFooter: document.getElementById('footer'),
    elAppMenu: document.querySelector('.app-menu'),
    portfolioAjax: {},
    sliderParallax: {
      el: document.querySelector('.slider-parallax'),
      caption: document.querySelector('.slider-parallax .slider-caption'),
      inner: document.querySelector('.slider-inner'),
      offset: 0
    },
    get menuBreakpoint() {
      return this.elBody.getAttribute('data-menu-breakpoint') || options.menuBreakpoint;
    },
    get pageMenuBreakpoint() {
      return this.elBody.getAttribute('data-pagemenu-breakpoint') || options.pageMenuBreakpoint;
    },
    get customCursor() {
      var value = this.elBody.getAttribute('data-custom-cursor') || options.cursor;
      return value == 'true' || value === true ? true : false;
    },
    get pageTransition() {
      var value = this.elBody.classList.contains('page-transition') || options.pageTransition;
      return value == 'true' || value === true ? true : false;
    },
    get tips() {
      var value = this.elBody.getAttribute('data-tips') || options.tips;
      return value == 'true' || value === true ? true : false;
    },
    get smoothScroll() {
      var value = this.elBody.getAttribute('data-smooth-scroll') || options.smoothScroll;
      return value == 'true' || value === true ? true : false;
    },
    get isRTL() {
      return this.elRoot.getAttribute('dir') == 'rtl' ? true : false;
    },
    scrollPos: {
      x: 0,
      y: 0
    },
    $jq: typeof jQuery !== "undefined" ? jQuery.noConflict() : '',
    resizers: {},
    recalls: {},
    debounced: false,
    events: {},
    modules: {},
    fn: {},
    required: {
      jQuery: {
        plugin: 'jquery',
        fn: function fn() {
          return typeof jQuery !== 'undefined';
        },
        file: options.jsFolder + 'jquery.js',
        id: 'canvas-jquery'
      }
    },
    fnInit: function fnInit() {
      DocumentOnReady.init();
      DocumentOnLoad.init();
      DocumentOnResize.init();
    }
  };
  var Core = function () {
    return {
      getOptions: options,
      getVars: vars,
      run: function run(obj) {
        Object.values(obj).map(function (fn) {
          return typeof fn === 'function' && fn.call();
        });
      },
      runBase: function runBase() {
        Core.run(Base);
      },
      runModules: function runModules() {
        Core.run(Modules);
      },
      runContainerModules: function runContainerModules(parent) {
        if (typeof parent === 'undefined') {
          return false;
        }
        Core.getVars.baseEl = parent;
        Core.runModules();
        Core.getVars.baseEl = document;
      },
      breakpoints: function breakpoints() {
        var viewWidth = Core.viewport().width;
        var breakpoint = {
          xxl: {
            enter: 1400,
            exit: 99999
          },
          xl: {
            enter: 1200,
            exit: 1399
          },
          lg: {
            enter: 992,
            exit: 1199.98
          },
          md: {
            enter: 768,
            exit: 991.98
          },
          sm: {
            enter: 576,
            exit: 767.98
          },
          xs: {
            enter: 0,
            exit: 575.98
          }
        };
        var previous = '';
        Object.keys(breakpoint).forEach(function (key) {
          if (viewWidth > breakpoint[key].enter && viewWidth <= breakpoint[key].exit) {
            vars.elBody.classList.add('device-' + key);
          } else {
            vars.elBody.classList.remove('device-' + key);
            if (previous != '') {
              vars.elBody.classList.remove('device-down-' + previous);
            }
          }
          if (viewWidth <= breakpoint[key].exit) {
            if (previous != '') {
              vars.elBody.classList.add('device-down-' + previous);
            }
          }
          previous = key;
          if (viewWidth > breakpoint[key].enter) {
            vars.elBody.classList.add('device-up-' + key);
            return;
          } else {
            vars.elBody.classList.remove('device-up-' + key);
          }
        });
      },
      colorScheme: function colorScheme() {
        if (vars.elBody.classList.contains('adaptive-color-scheme')) {
          window.matchMedia('(prefers-color-scheme: dark)').matches ? vars.elBody.classList.add('dark') : vars.elBody.classList.remove('dark');
        }
        var bodyColorScheme = Core.cookie.get('__cnvs_body_color_scheme');
        if (bodyColorScheme && bodyColorScheme != '') {
          bodyColorScheme.split(" ").includes('dark') ? vars.elBody.classList.add('dark') : vars.elBody.classList.remove('dark');
        }
      },
      throttle: function throttle(timer, func, delay) {
        if (timer) {
          return;
        }
        timer = setTimeout(function () {
          func();
          timer = undefined;
        }, delay);
      },
      debounce: function debounce(callback, delay) {
        clearTimeout(vars.debounced);
        vars.debounced = setTimeout(callback, delay);
      },
      debouncedResize: function debouncedResize(func, delay) {
        var timeoutId;
        return function () {
          var context = this;
          var args = arguments;
          clearTimeout(timeoutId);
          timeoutId = setTimeout(function () {
            func.apply(context, args);
          }, delay);
        };
      },
      addEvent: function addEvent(el, event) {
        var args = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
        if (typeof el === "undefined" || typeof event === "undefined") {
          return;
        }
        var createEvent = new CustomEvent(event, {
          detail: args
        });
        el.dispatchEvent(createEvent);
        vars.events[event] = true;
      },
      scrollEnd: function scrollEnd(callback) {
        var refresh = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 199;
        if (!callback || typeof callback !== 'function') return;
        window.addEventListener('scroll', function () {
          Core.debounce(callback, refresh);
        }, {
          passive: true
        });
      },
      viewport: function viewport() {
        var viewport = {
          width: window.innerWidth || vars.elRoot.clientWidth,
          height: window.innerHeight || vars.elRoot.clientHeight
        };
        vars.viewport = viewport;
        document.documentElement.style.setProperty('--cnvs-viewport-width', viewport.width);
        document.documentElement.style.setProperty('--cnvs-viewport-height', viewport.height);
        document.documentElement.style.setProperty('--cnvs-body-height', vars.elBody.clientHeight);
        return viewport;
      },
      isElement: function isElement(selector) {
        if (_typeof(selector) === 'object' && selector !== null) {
          return true;
        }
        if (selector instanceof Element || selector instanceof HTMLElement) {
          return true;
        }
        if (typeof selector.jquery !== 'undefined') {
          selector = selector[0];
        }
        if (typeof selector.nodeType !== 'undefined') {
          return true;
        }
        return false;
      },
      getSelector: function getSelector(selector) {
        var jquery = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
        var customjs = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
        if (jquery) {
          if (Core.getVars.baseEl !== document) {
            selector = jQuery(Core.getVars.baseEl).find(selector);
          } else {
            selector = jQuery(selector);
          }
          if (customjs) {
            if (typeof customjs == 'string') {
              selector = selector.filter(':not(' + customjs + ')');
            } else {
              selector = selector.filter(':not(.customjs)');
            }
          }
        } else {
          if (Core.isElement(selector)) {
            selector = selector;
          } else {
            if (customjs) {
              if (typeof customjs == 'string') {
                selector = Core.getVars.baseEl.querySelectorAll(selector + ':not(' + customjs + ')');
              } else {
                selector = Core.getVars.baseEl.querySelectorAll(selector + ':not(.customjs)');
              }
            } else {
              selector = Core.getVars.baseEl.querySelectorAll(selector);
            }
          }
        }
        return selector;
      },
      onResize: function onResize(callback) {
        var refresh = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 333;
        if (!callback || typeof callback !== 'function') return;
        window.addEventListener('resize', function () {
          Core.debounce(callback, refresh);
        });
      },
      imagesLoaded: function imagesLoaded(el) {
        var imgs = el.getElementsByTagName('img') || document.images,
          len = imgs.length,
          counter = 0;
        if (len < 1) {
          Core.addEvent(el, 'CanvasImagesLoaded');
        }
        var incrementCounter = /*#__PURE__*/function () {
          var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  counter++;
                  if (counter === len) {
                    Core.addEvent(el, 'CanvasImagesLoaded');
                  }
                case 2:
                case "end":
                  return _context.stop();
              }
            }, _callee);
          }));
          return function incrementCounter() {
            return _ref.apply(this, arguments);
          };
        }();
        [].forEach.call(imgs, function (img) {
          if (img.complete) {
            incrementCounter();
          } else {
            img.addEventListener('load', incrementCounter, false);
          }
        });
      },
      contains: function contains(classes, selector) {
        var classArray = classes.split(" ");
        var hasClass = false;
        classArray.forEach(function (classTxt) {
          if (vars.elBody.classList.contains(classTxt)) {
            hasClass = true;
          }
        });
        return hasClass;
      },
      has: function has(nodeList, selector) {
        var _slice$call;
        return (_slice$call = [].slice.call(nodeList)) === null || _slice$call === void 0 ? void 0 : _slice$call.filter(function (e) {
          return e.querySelector(selector);
        });
      },
      filtered: function filtered(nodeList, selector) {
        var _slice$call2;
        return (_slice$call2 = [].slice.call(nodeList)) === null || _slice$call2 === void 0 ? void 0 : _slice$call2.filter(function (e) {
          return e.matches(selector);
        });
      },
      parents: function parents(elem, selector) {
        if (!Element.prototype.matches) {
          Element.prototype.matches = Element.prototype.matchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.oMatchesSelector || Element.prototype.webkitMatchesSelector || function (s) {
            var matches = (this.document || this.ownerDocument).querySelectorAll(s),
              i = matches.length;
            while (--i >= 0 && matches.item(i) !== this) {}
            return i > -1;
          };
        }
        var parents = [];
        for (; elem && elem !== document; elem = elem.parentNode) {
          if (selector) {
            if (elem.matches(selector)) {
              parents.push(elem);
            }
            continue;
          }
          parents.push(elem);
        }
        return parents;
      },
      siblings: function siblings(elem) {
        var nodes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        if (nodes) {
          return [].slice.call(nodes).filter(function (sibling) {
            return sibling !== elem;
          });
        } else {
          return [].slice.call(elem.parentNode.children).filter(function (sibling) {
            return sibling !== elem;
          });
        }
      },
      getNext: function getNext(elem, selector) {
        var nextElem = elem.nextElementSibling;
        if (!selector) {
          return nextElem;
        }
        if (nextElem && nextElem.matches(selector)) {
          return nextElem;
        }
        return null;
      },
      offset: function offset(el) {
        var rect = el.getBoundingClientRect(),
          scrollLeft = window.scrollX || document.documentElement.scrollLeft,
          scrollTop = window.scrollY || document.documentElement.scrollTop;
        return {
          top: rect.top + scrollTop,
          left: rect.left + scrollLeft
        };
      },
      isHidden: function isHidden(el) {
        return el.offsetParent === null;
      },
      classesFn: function classesFn(func, classes, selector) {
        var classArray = classes.split(" ");
        classArray.forEach(function (classTxt) {
          if (func == 'add') {
            selector.classList.add(classTxt);
          } else if (func == 'toggle') {
            selector.classList.toggle(classTxt);
          } else {
            selector.classList.remove(classTxt);
          }
        });
      },
      cookie: function () {
        return {
          set: function set(name, value, daysToExpire) {
            var date = new Date();
            date.setTime(date.getTime() + daysToExpire * 24 * 60 * 60 * 1000);
            var expires = "expires=" + date.toUTCString();
            document.cookie = name + "=" + value + ";" + expires + ";path=/";
          },
          get: function get(name) {
            var decodedCookies = decodeURIComponent(document.cookie);
            var cookies = decodedCookies.split(";");
            for (var i = 0; i < cookies.length; i++) {
              var cookie = cookies[i].trim();
              if (cookie.startsWith(name + "=")) {
                return cookie.substring(name.length + 1);
              }
            }
            return null;
          },
          remove: function remove(name) {
            document.cookie = name + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
          }
        };
      }(),
      scrollTo: function scrollTo() {
        var offset = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        var speed = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1250;
        var easing = arguments.length > 2 ? arguments[2] : undefined;
        var behavior = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'smooth';
        if (easing && typeof jQuery !== 'undefined' && typeof jQuery.easing["easeOutQuad"] !== 'undefined') {
          jQuery('body,html').stop(true).animate({
            'scrollTop': Number(offset)
          }, Number(speed), easing);
        } else {
          var smoothScroll = ('scrollBehavior' in document.documentElement.style);
          if (typeof window.scroll === 'function' && smoothScroll) {
            window.scroll({
              top: Number(offset),
              behavior: behavior
            });
          } else {
            var body = Core.getVars.elBody;
            var rootEl = Core.getVars.elRoot;
            body.scrollIntoView();
            rootEl.scrollIntoView();
            var scrollToTop = function scrollToTop() {
              if (body.scrollTop > Number(offset) || rootEl.scrollTop > Number(offset)) {
                body.scrollTop -= 20;
                rootEl.scrollTop -= 20;
                setTimeout(scrollToTop, 10);
              }
            };
            scrollToTop();
          }
        }
      },
      smoothScroll: function smoothScroll() {
        new initSmoothScrollfunction(document, 90, 5);
        function initSmoothScrollfunction(target, speed, smooth) {
          if (target === document) target = document.scrollingElement || document.documentElement || document.body.parentNode || document.body; // cross browser support for document scrolling

          var moving = false;
          var pos = target.scrollTop;
          var frame = target === document.body && document.documentElement ? document.documentElement : target; // safari is the new IE

          target.addEventListener('mousewheel', scrolled, {
            passive: false
          });
          target.addEventListener('DOMMouseScroll', scrolled, {
            passive: false
          });
          function scrolled(e) {
            e.preventDefault(); // disable default scrolling

            var delta = normalizeWheelDelta(e);
            pos += -delta * speed;
            pos = Math.max(0, Math.min(pos, target.scrollHeight - frame.clientHeight)); // limit scrolling

            if (!moving) update();
          }
          function normalizeWheelDelta(e) {
            if (e.detail) {
              if (e.wheelDelta) return e.wheelDelta / e.detail / 40 * (e.detail > 0 ? 1 : -1); // Opera
              else return -e.detail / 3; // Firefox
            } else return e.wheelDelta / 120; // IE,Safari,Chrome
          }
          ;
          function update() {
            moving = true;
            var delta = (pos - target.scrollTop) / smooth;
            target.scrollTop += delta;
            if (Math.abs(delta) > 0.5) requestFrame(update);else moving = false;
          }
          var requestFrame = function () {
            // requestAnimationFrame cross browser
            return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (func) {
              window.setTimeout(func, 1000 / 50);
            };
          }();
        }
      },
      loadCSS: function loadCSS(params) {
        var file = params.file;
        var htmlID = params.id || false;
        var cssFolder = params.cssFolder || false;
        if (!file) {
          return false;
        }
        if (htmlID && document.getElementById(htmlID)) {
          return false;
        }
        var htmlStyle = document.createElement('link');
        htmlStyle.id = htmlID;
        htmlStyle.href = cssFolder ? options.cssFolder + file : file;
        htmlStyle.rel = 'stylesheet';
        htmlStyle.type = 'text/css';
        vars.elHead.appendChild(htmlStyle);
        return true;
      },
      loadJS: function loadJS(params) {
        var file = params.file;
        var htmlID = params.id || false;
        var type = params.type || false;
        var callback = params.callback;
        var async = params.async || true;
        var defer = params.defer || true;
        var jsFolder = params.jsFolder || false;
        if (!file) {
          return false;
        }
        if (htmlID && document.getElementById(htmlID)) {
          return false;
        }
        var htmlScript = document.createElement('script');
        if (typeof callback !== 'undefined') {
          if (typeof callback != 'function') {
            throw new Error('Not a valid callback!');
          } else {
            htmlScript.onload = callback;
          }
        }
        htmlScript.id = htmlID;
        htmlScript.src = jsFolder ? options.jsFolder + file : file;
        if (type) {
          htmlScript.type = type;
        }
        htmlScript.async = async ? true : false;
        htmlScript.defer = defer ? true : false;
        vars.elBody.appendChild(htmlScript);
        return true;
      },
      isFuncTrue: function () {
        var _isFuncTrue = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(fn) {
          var counter;
          return _regeneratorRuntime().wrap(function _callee2$(_context2) {
            while (1) switch (_context2.prev = _context2.next) {
              case 0:
                if (!('function' !== typeof fn)) {
                  _context2.next = 2;
                  break;
                }
                return _context2.abrupt("return", false);
              case 2:
                counter = 0;
                return _context2.abrupt("return", new Promise(function (resolve, reject) {
                  if (fn()) {
                    resolve(true);
                  } else {
                    var _int = setInterval(function () {
                      if (fn()) {
                        clearInterval(_int);
                        resolve(true);
                      } else {
                        if (counter > 30) {
                          clearInterval(_int);
                          reject(true);
                        }
                      }
                      counter++;
                    }, 333);
                  }
                })["catch"](function (error) {
                  console.log('Function does not exist: ' + fn);
                }));
              case 4:
              case "end":
                return _context2.stop();
            }
          }, _callee2);
        }));
        function isFuncTrue(_x) {
          return _isFuncTrue.apply(this, arguments);
        }
        return isFuncTrue;
      }(),
      initFunction: function initFunction(params) {
        vars.elBody.classList.add(params["class"]);
        Core.addEvent(window, params.event);
        vars.events[params.event] = true;
      },
      runModule: function runModule(params) {
        var pluginName = params.plugin.toLowerCase();
        var moduleFile = options.jsFolder + 'modules/' + pluginName + '.js';
        if (params.file) {
          moduleFile = params.file;
        }
        var pluginCheck = function pluginCheck() {
          return typeof CNVS[params.plugin] !== 'undefined';
        };
        if (!pluginCheck()) {
          Core.loadJS({
            file: moduleFile,
            id: 'canvas-' + pluginName + '-fn'
          });
          Core.isFuncTrue(pluginCheck).then(function (cond) {
            if (!cond) {
              return false;
            }
            CNVS[params.plugin].init(params.selector);
          });
        } else {
          CNVS[params.plugin].init(params.selector);
        }
        return true;
      },
      initModule: function initModule(params) {
        if ('dependent' != params.selector) {
          if (_typeof(params.selector) === 'object') {
            if (params.selector instanceof jQuery) {
              params.selector = params.selector[0];
            }
            var _el = params.selector;
          } else {
            var _el = Core.getVars.baseEl.querySelectorAll(params.selector);
          }
          if (_el.length < 1) {
            return false;
          }
        }
        var required = true;
        var dependentActive = true;
        if (params.required && Array.isArray(params.required)) {
          var requireAll = {};
          params.required.forEach(function (req) {
            return requireAll[req.plugin] = !req.fn() ? false : true;
          });
          params.required.forEach(function (req) {
            if (!req.fn()) {
              required = false;
              var getjQuery = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
                var funcAvailable;
                return _regeneratorRuntime().wrap(function _callee3$(_context3) {
                  while (1) switch (_context3.prev = _context3.next) {
                    case 0:
                      Core.loadJS({
                        file: req.file,
                        id: req.id
                      });
                      funcAvailable = new Promise(function (resolve) {
                        var _int2 = setInterval(function () {
                          if (req.fn()) {
                            requireAll[req.plugin] = true;
                            var allTrue = Object.values(requireAll).every(function (value) {
                              return value === true;
                            });
                            if (allTrue) {
                              clearInterval(_int2);
                              resolve(true);
                            }
                          }
                        }, 333);
                      });
                      _context3.next = 4;
                      return funcAvailable;
                    case 4:
                      required = _context3.sent;
                      Core.runModule(params);
                    case 6:
                    case "end":
                      return _context3.stop();
                  }
                }, _callee3);
              }))();
            }
          });
        }
        if (typeof params.dependency !== 'undefined' && typeof params.dependency === 'function') {
          dependentActive = false;
          var runDependent = /*#__PURE__*/function () {
            var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
              var depAvailable;
              return _regeneratorRuntime().wrap(function _callee4$(_context4) {
                while (1) switch (_context4.prev = _context4.next) {
                  case 0:
                    depAvailable = new Promise(function (resolve) {
                      if (params.dependency.call(params, 'dependent') == true) {
                        resolve(true);
                      }
                    });
                    _context4.next = 3;
                    return depAvailable;
                  case 3:
                    return _context4.abrupt("return", _context4.sent);
                  case 4:
                  case "end":
                    return _context4.stop();
                }
              }, _callee4);
            }));
            return function runDependent() {
              return _ref3.apply(this, arguments);
            };
          }();
          dependentActive = runDependent();
        }
        if (required && dependentActive) {
          Core.runModule(params);
        }
        return true;
      },
      topScrollOffset: function topScrollOffset() {
        var _vars$elPageMenu;
        var headerHeight = 0;
        var pageMenuOffset = ((_vars$elPageMenu = vars.elPageMenu) === null || _vars$elPageMenu === void 0 || (_vars$elPageMenu = _vars$elPageMenu.querySelector('#page-menu-wrap')) === null || _vars$elPageMenu === void 0 ? void 0 : _vars$elPageMenu.offsetHeight) || 0;
        if (vars.elBody.classList.contains('is-expanded-menu')) {
          var _vars$elHeader, _vars$elPageMenu2, _vars$elPageMenu3;
          if ((_vars$elHeader = vars.elHeader) !== null && _vars$elHeader !== void 0 && _vars$elHeader.classList.contains('sticky-header')) {
            headerHeight = vars.elHeaderWrap.offsetHeight;
          }
          if ((_vars$elPageMenu2 = vars.elPageMenu) !== null && _vars$elPageMenu2 !== void 0 && _vars$elPageMenu2.classList.contains('dots-menu') || !((_vars$elPageMenu3 = vars.elPageMenu) !== null && _vars$elPageMenu3 !== void 0 && _vars$elPageMenu3.classList.contains('sticky-page-menu'))) {
            pageMenuOffset = 0;
          }
        }
        Core.getVars.topScrollOffset = headerHeight + pageMenuOffset + options.scrollOffset;
      }
    };
  }();
  var Base = function () {
    return {
      init: function init() {
        Mobile.any() && vars.elBody.classList.add('device-touch');
      },
      menuBreakpoint: function menuBreakpoint() {
        if (Core.getVars.menuBreakpoint <= Core.viewport().width) {
          vars.elBody.classList.add('is-expanded-menu');
        } else {
          vars.elBody.classList.remove('is-expanded-menu');
        }
        if (vars.elPageMenu) {
          if (typeof Core.getVars.pageMenuBreakpoint === 'undefined') {
            Core.getVars.pageMenuBreakpoint = Core.getVars.menuBreakpoint;
          }
          if (Core.getVars.pageMenuBreakpoint <= Core.viewport().width) {
            vars.elBody.classList.add('is-expanded-pagemenu');
          } else {
            vars.elBody.classList.remove('is-expanded-pagemenu');
          }
        }
      },
      goToTop: function goToTop() {
        return Core.initModule({
          selector: '#gotoTop',
          plugin: 'GoToTop'
        });
      },
      stickFooterOnSmall: function stickFooterOnSmall() {
        return Core.initModule({
          selector: '#footer',
          plugin: 'StickFooterOnSmall'
        });
      },
      logo: function logo() {
        return Core.initModule({
          selector: '#logo',
          plugin: 'Logo'
        });
      },
      headers: function headers() {
        var _vars$elHeader2, _vars$elHeaderWrap;
        Core.getVars.headerClasses = ((_vars$elHeader2 = vars.elHeader) === null || _vars$elHeader2 === void 0 ? void 0 : _vars$elHeader2.className) || '';
        Core.getVars.headerWrapClasses = ((_vars$elHeaderWrap = vars.elHeaderWrap) === null || _vars$elHeaderWrap === void 0 ? void 0 : _vars$elHeaderWrap.className) || '';
        return Core.initModule({
          selector: '#header',
          plugin: 'Headers'
        });
      },
      menus: function menus() {
        return Core.initModule({
          selector: '#header',
          plugin: 'Menus'
        });
      },
      pageMenu: function pageMenu() {
        return Core.initModule({
          selector: '#page-menu',
          plugin: 'PageMenu'
        });
      },
      sliderDimensions: function sliderDimensions() {
        return Core.initModule({
          selector: '.slider-element',
          plugin: 'SliderDimensions'
        });
      },
      sliderMenuClass: function sliderMenuClass() {
        return Core.initModule({
          selector: '.transparent-header + .swiper_wrapper,.swiper_wrapper + .transparent-header,.transparent-header + .revslider-wrap,.revslider-wrap + .transparent-header',
          plugin: 'SliderMenuClass'
        });
      },
      topSearch: function topSearch() {
        return Core.initModule({
          selector: '#top-search-trigger',
          plugin: 'TopSearch'
        });
      },
      topCart: function topCart() {
        return Core.initModule({
          selector: '#top-cart',
          plugin: 'TopCart'
        });
      },
      sidePanel: function sidePanel() {
        return Core.initModule({
          selector: '#side-panel',
          plugin: 'SidePanel'
        });
      },
      adaptiveColorScheme: function adaptiveColorScheme() {
        return Core.initModule({
          selector: '.adaptive-color-scheme',
          plugin: 'AdaptiveColorScheme'
        });
      },
      portfolioAjax: function portfolioAjax() {
        return Core.initModule({
          selector: '.portfolio-ajax',
          plugin: 'PortfolioAjax'
        });
      },
      cursor: function cursor() {
        if (vars.customCursor) {
          return Core.initModule({
            selector: 'body',
            plugin: 'Cursor'
          });
        }
      },
      setBSTheme: function setBSTheme() {
        var _vars$elBody$querySel;
        if (vars.elBody.classList.contains('dark')) {
          document.querySelector('html').setAttribute('data-bs-theme', 'dark');
        } else {
          var _document$querySelect;
          document.querySelector('html').removeAttribute('data-bs-theme');
          (_document$querySelect = document.querySelectorAll('.dark')) === null || _document$querySelect === void 0 || _document$querySelect.forEach(function (el) {
            el.setAttribute('data-bs-theme', 'dark');
          });
        }
        (_vars$elBody$querySel = vars.elBody.querySelectorAll('.not-dark')) === null || _vars$elBody$querySel === void 0 || _vars$elBody$querySel.forEach(function (el) {
          el.setAttribute('data-bs-theme', 'light');
        });
      }
    };
  }();
  var Modules = function () {
    return {
      easing: function easing() {
        return Core.initModule({
          selector: '[data-easing]',
          plugin: 'Easing',
          required: [vars.required.jQuery]
        });
      },
      bootstrap: function bootstrap() {
        var notExec = true;
        document.querySelectorAll('*').forEach(function (el) {
          if (notExec) {
            el.getAttributeNames().some(function (text) {
              if (text.includes('data-bs')) {
                notExec = false;
                return Core.initModule({
                  selector: 'body',
                  plugin: 'Bootstrap'
                });
              }
            });
          }
        });
      },
      resizeVideos: function resizeVideos(element) {
        return Core.initModule({
          selector: element ? element : 'iframe[src*="youtube"],iframe[src*="vimeo"],iframe[src*="dailymotion"],iframe[src*="maps.google.com"],iframe[src*="google.com/maps"]',
          plugin: 'ResizeVideos',
          required: [vars.required.jQuery]
        });
      },
      pageTransition: function pageTransition() {
        if (vars.pageTransition) {
          return Core.initModule({
            selector: 'body',
            plugin: 'PageTransition'
          });
        }
      },
      lazyLoad: function lazyLoad(element) {
        return Core.initModule({
          selector: element ? element : '.lazy:not(.lazy-loaded)',
          plugin: 'LazyLoad'
        });
      },
      dataClasses: function dataClasses() {
        return Core.initModule({
          selector: '[data-class]',
          plugin: 'DataClasses'
        });
      },
      dataHeights: function dataHeights() {
        return Core.initModule({
          selector: '[data-height-xxl],[data-height-xl],[data-height-lg],[data-height-md],[data-height-sm],[data-height-xs]',
          plugin: 'DataHeights'
        });
      },
      lightbox: function lightbox(element) {
        return Core.initModule({
          selector: element ? element : '[data-lightbox]',
          plugin: 'Lightbox',
          required: [vars.required.jQuery]
        });
      },
      modal: function modal(element) {
        return Core.initModule({
          selector: element ? element : '.modal-on-load',
          plugin: 'Modal',
          required: [vars.required.jQuery]
        });
      },
      animations: function animations(element) {
        return Core.initModule({
          selector: element ? element : '[data-animate]',
          plugin: 'Animations'
        });
      },
      hoverAnimations: function hoverAnimations(element) {
        return Core.initModule({
          selector: element ? element : '[data-hover-animate]',
          plugin: 'HoverAnimations'
        });
      },
      gridInit: function gridInit(element) {
        return Core.initModule({
          selector: element ? element : '.grid-container',
          plugin: 'Grid',
          required: [vars.required.jQuery]
        });
      },
      filterInit: function filterInit(element) {
        return Core.initModule({
          selector: element ? element : '.grid-filter,.custom-filter',
          plugin: 'Filter',
          required: [vars.required.jQuery]
        });
      },
      canvasSlider: function canvasSlider(element) {
        return Core.initModule({
          selector: element ? element : '.swiper_wrapper',
          plugin: 'CanvasSlider'
        });
      },
      sliderParallax: function sliderParallax() {
        return Core.initModule({
          selector: '.slider-parallax',
          plugin: 'SliderParallax'
        });
      },
      flexSlider: function flexSlider(element) {
        return Core.initModule({
          selector: element ? element : '.fslider',
          plugin: 'FlexSlider',
          required: [vars.required.jQuery]
        });
      },
      html5Video: function html5Video(element) {
        return Core.initModule({
          selector: element ? element : '.video-wrap',
          plugin: 'FullVideo'
        });
      },
      youtubeBgVideo: function youtubeBgVideo(element) {
        return Core.initModule({
          selector: element ? element : '.yt-bg-player',
          plugin: 'YoutubeBG',
          required: [vars.required.jQuery]
        });
      },
      toggle: function toggle(element) {
        return Core.initModule({
          selector: element ? element : '.toggle',
          plugin: 'Toggle',
          required: [vars.required.jQuery]
        });
      },
      accordion: function accordion(element) {
        return Core.initModule({
          selector: element ? element : '.accordion',
          plugin: 'Accordion',
          required: [vars.required.jQuery]
        });
      },
      counter: function counter(element) {
        return Core.initModule({
          selector: element ? element : '.counter',
          plugin: 'Counter',
          required: [vars.required.jQuery]
        });
      },
      countdown: function countdown(element) {
        return Core.initModule({
          selector: element ? element : '.countdown',
          plugin: 'Countdown',
          required: [vars.required.jQuery]
        });
      },
      gmap: function gmap(element) {
        return Core.initModule({
          selector: element ? element : '.gmap',
          plugin: 'GoogleMaps',
          required: [vars.required.jQuery]
        });
      },
      roundedSkills: function roundedSkills(element) {
        return Core.initModule({
          selector: element ? element : '.rounded-skill',
          plugin: 'RoundedSkills',
          required: [vars.required.jQuery]
        });
      },
      progress: function progress(element) {
        return Core.initModule({
          selector: element ? element : '.skill-progress',
          plugin: 'Progress'
        });
      },
      twitterFeed: function twitterFeed(element) {
        return Core.initModule({
          selector: element ? element : '.twitter-feed',
          plugin: 'Twitter',
          required: [vars.required.jQuery]
        });
      },
      flickrFeed: function flickrFeed(element) {
        return Core.initModule({
          selector: element ? element : '.flickr-feed',
          plugin: 'Flickr',
          required: [vars.required.jQuery]
        });
      },
      instagram: function instagram(element) {
        return Core.initModule({
          selector: element ? element : '.instagram-photos',
          plugin: 'Instagram'
        });
      },
      // Dribbble Pending

      navTree: function navTree(element) {
        return Core.initModule({
          selector: element ? element : '.nav-tree',
          plugin: 'NavTree',
          required: [vars.required.jQuery]
        });
      },
      carousel: function carousel(element) {
        return Core.initModule({
          selector: element ? element : '.carousel-widget',
          plugin: 'Carousel',
          required: [vars.required.jQuery]
        });
      },
      masonryThumbs: function masonryThumbs(element) {
        return Core.initModule({
          selector: element ? element : '.masonry-thumbs',
          plugin: 'MasonryThumbs',
          required: [vars.required.jQuery]
        });
      },
      notifications: function notifications(element) {
        return Core.initModule({
          selector: element ? element : false,
          plugin: 'Notifications',
          required: [vars.required.jQuery]
        });
      },
      textRotator: function textRotator(element) {
        return Core.initModule({
          selector: element ? element : '.text-rotater',
          plugin: 'TextRotator',
          required: [vars.required.jQuery]
        });
      },
      onePage: function onePage(element) {
        return Core.initModule({
          selector: element ? element : '[data-scrollto],.one-page-menu',
          plugin: 'OnePage'
        });
      },
      ajaxForm: function ajaxForm(element) {
        return Core.initModule({
          selector: element ? element : '.form-widget',
          plugin: 'AjaxForm',
          required: [vars.required.jQuery]
        });
      },
      subscribe: function subscribe(element) {
        return Core.initModule({
          selector: element ? element : '.subscribe-widget',
          plugin: 'Subscribe',
          required: [vars.required.jQuery]
        });
      },
      conditional: function conditional(element) {
        return Core.initModule({
          selector: element ? element : '.form-group[data-condition],.form-group[data-conditions]',
          plugin: 'Conditional'
        });
      },
      shapeDivider: function shapeDivider(element) {
        return Core.initModule({
          selector: element ? element : '.shape-divider',
          plugin: 'ShapeDivider'
        });
      },
      stickySidebar: function stickySidebar(element) {
        return Core.initModule({
          selector: element ? element : '.sticky-sidebar-wrap',
          plugin: 'StickySidebar',
          required: [vars.required.jQuery]
        });
      },
      cookies: function cookies(element) {
        return Core.initModule({
          selector: element ? element : '.gdpr-settings,[data-cookies]',
          plugin: 'Cookies'
        });
      },
      quantity: function quantity(element) {
        return Core.initModule({
          selector: element ? element : '.quantity',
          plugin: 'Quantity'
        });
      },
      readmore: function readmore(element) {
        return Core.initModule({
          selector: element ? element : '[data-readmore]',
          plugin: 'ReadMore'
        });
      },
      pricingSwitcher: function pricingSwitcher(element) {
        return Core.initModule({
          selector: element ? element : '.pricing-tenure-switcher',
          plugin: 'PricingSwitcher'
        });
      },
      ajaxTrigger: function ajaxTrigger(element) {
        return Core.initModule({
          selector: element ? element : '[data-ajax-loader]',
          plugin: 'AjaxTrigger'
        });
      },
      videoFacade: function videoFacade(element) {
        return Core.initModule({
          selector: element ? element : '.video-facade',
          plugin: 'VideoFacade'
        });
      },
      schemeToggle: function schemeToggle(element) {
        return Core.initModule({
          selector: element ? element : '.body-scheme-toggle',
          plugin: 'SchemeToggle'
        });
      },
      clipboardCopy: function clipboardCopy(element) {
        return Core.initModule({
          selector: element ? element : '.clipboard-copy',
          plugin: 'Clipboard'
        });
      },
      codeHighlight: function codeHighlight(element) {
        return Core.initModule({
          selector: element ? element : '.code-highlight',
          plugin: 'CodeHighlight'
        });
      },
      tips: function tips() {
        if (vars.tips) {
          return Core.initModule({
            selector: 'body',
            plugin: 'Tips'
          });
        }
      },
      textSplitter: function textSplitter(element) {
        return Core.initModule({
          selector: element ? element : '.text-splitter',
          plugin: 'TextSplitter'
        });
      },
      mediaActions: function mediaActions(element) {
        return Core.initModule({
          selector: element ? element : '.media-wrap',
          plugin: 'MediaActions'
        });
      },
      viewportDetect: function viewportDetect(element) {
        return Core.initModule({
          selector: element ? element : '.viewport-detect',
          plugin: 'ViewportDetect'
        });
      },
      scrollDetect: function scrollDetect(element) {
        return Core.initModule({
          selector: element ? element : '.scroll-detect',
          plugin: 'ScrollDetect'
        });
      },
      fontSizer: function fontSizer(element) {
        return Core.initModule({
          selector: element ? element : '.font-sizer',
          plugin: 'FontSizer'
        });
      },
      hover3D: function hover3D(element) {
        return Core.initModule({
          selector: element ? element : '.hover-3d',
          plugin: 'Hover3D'
        });
      },
      buttons: function buttons(element) {
        return Core.initModule({
          selector: element ? element : '.button-text-effect',
          plugin: 'Buttons'
        });
      },
      bsComponents: function bsComponents(element) {
        return Core.initModule({
          selector: element ? element : '[data-bs-toggle="tooltip"],[data-bs-toggle="popover"],[data-bs-toggle="tab"],[data-bs-toggle="pill"],.style-msg',
          plugin: 'BSComponents'
        });
      }
    };
  }();
  var Mobile = function () {
    return {
      Android: function Android() {
        return navigator.userAgent.match(/Android/i);
      },
      BlackBerry: function BlackBerry() {
        return navigator.userAgent.match(/BlackBerry/i);
      },
      iOS: function iOS() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
      },
      Opera: function Opera() {
        return navigator.userAgent.match(/Opera Mini/i);
      },
      Windows: function Windows() {
        return navigator.userAgent.match(/IEMobile/i);
      },
      any: function any() {
        return Mobile.Android() || Mobile.BlackBerry() || Mobile.iOS() || Mobile.Opera() || Mobile.Windows();
      }
    };
  }();

  // Add your Custom JS Codes here
  var Custom = function () {
    return {
      onReady: function onReady() {
        // Add JS Codes here to Run on Document Ready
      },
      onLoad: function onLoad() {
        // Add JS Codes here to Run on Window Load
      },
      onResize: function onResize() {
        // Add JS Codes here to Run on Window Resize
      }
    };
  }();
  var DocumentOnResize = function () {
    return {
      init: function init() {
        Core.viewport();
        Core.breakpoints();
        Base.menuBreakpoint();
        Core.run(vars.resizers);
        Custom.onResize();
        Core.addEvent(window, 'cnvsResize');
      }
    };
  }();
  var DocumentOnReady = function () {
    return {
      init: function init() {
        Core.breakpoints();
        Core.colorScheme();
        Core.runBase();
        Core.runModules();
        Core.topScrollOffset();
        if (vars.smoothScroll) {
          new Core.smoothScroll();
        }
        DocumentOnReady.windowscroll();
        Custom.onReady();
      },
      windowscroll: function windowscroll() {
        Core.scrollEnd(function () {
          Base.pageMenu();
        });
      }
    };
  }();
  var DocumentOnLoad = function () {
    return {
      init: function init() {
        Custom.onLoad();
      }
    };
  }();
  document.addEventListener('DOMContentLoaded', function () {
    DocumentOnReady.init();
  });
  window.addEventListener('load', function () {
    DocumentOnLoad.init();
  });
  var resizeFunctions = Core.debouncedResize(function () {
    DocumentOnResize.init();
  }, 250);
  window.addEventListener('resize', function () {
    resizeFunctions();
  });
  var canvas_umd = {
    Core: Core,
    Base: Base,
    Modules: Modules,
    Mobile: Mobile,
    Custom: Custom
  };
  return canvas_umd;
});
(function (global, factory) {
  ( false ? 0 : _typeof(exports)) === 'object' && "object" !== 'undefined' ? module.exports = factory() :  true ? !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
		__WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : (0);
})(this, function () {
  // USE STRICT
  "use strict";

  /**
   * --------------------------------------------------------------------------
   * DO NOT DELETE!! Start (Required)
   * --------------------------------------------------------------------------
   */
  if (SEMICOLON === 'undefined' || SEMICOLON.Core === 'undefined' || SEMICOLON.Base === 'undefined' || SEMICOLON.Modules === 'undefined' || SEMICOLON.Mobile === 'undefined') {
    return false;
  }
  return {};
});

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/functions.js");
/******/ 	
/******/ })()
;