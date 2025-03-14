/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/plugins.textrotator.js":
/*!***************************************!*\
  !*** ./src/js/plugins.textrotator.js ***!
  \***************************************/
/***/ (function(module, exports, __webpack_require__) {

/* module decorator */ module = __webpack_require__.nmd(module);
var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
/*! Morphext - v2.4.7 - 2016-11-04 */
!function (a) {
  "use strict";

  function b(b, c) {
    this.element = a(b), this.settings = a.extend({}, d, c), this._defaults = d, this._init();
  }
  var c = "Morphext",
    d = {
      animation: "bounceIn",
      separator: ",",
      speed: 2e3,
      complete: a.noop
    };
  b.prototype = {
    _init: function _init() {
      var b = this;
      this.phrases = [], this.element.addClass("morphext"), a.each(this.element.text().split(this.settings.separator), function (c, d) {
        b.phrases.push(a.trim(d));
      }), this.index = -1, this.animate(), this.start();
    },
    animate: function animate() {
      this.index = ++this.index % this.phrases.length, this.element[0].innerHTML = '<span class="animated ' + this.settings.animation + '">' + this.phrases[this.index] + "</span>", a.isFunction(this.settings.complete) && this.settings.complete.call(this);
    },
    start: function start() {
      var a = this;
      this._interval = setInterval(function () {
        a.animate();
      }, this.settings.speed);
    },
    stop: function stop() {
      this._interval = clearInterval(this._interval);
    }
  }, a.fn[c] = function (d) {
    return this.each(function () {
      a.data(this, "plugin_" + c) || a.data(this, "plugin_" + c, new b(this, d));
    });
  };
}(jQuery);

/*!
 *
 *   typed.js - A JavaScript Typing Animation Library
 *   Author: Matt Boldt <me@mattboldt.com>
 *   Version: v2.0.12
 *   Url: https://github.com/mattboldt/typed.js
 *   License(s): MIT
 *
 */
(function (t, e) {
  "object" == ( false ? 0 : _typeof(exports)) && "object" == ( false ? 0 : _typeof(module)) ? module.exports = e() :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (e),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : 0;
})(this, function () {
  return function (t) {
    function e(n) {
      if (s[n]) return s[n].exports;
      var i = s[n] = {
        exports: {},
        id: n,
        loaded: !1
      };
      return t[n].call(i.exports, i, i.exports, e), i.loaded = !0, i.exports;
    }
    var s = {};
    return e.m = t, e.c = s, e.p = "", e(0);
  }([function (t, e, s) {
    "use strict";

    function n(t, e) {
      if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
    }
    Object.defineProperty(e, "__esModule", {
      value: !0
    });
    var i = function () {
        function t(t, e) {
          for (var s = 0; s < e.length; s++) {
            var n = e[s];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n);
          }
        }
        return function (e, s, n) {
          return s && t(e.prototype, s), n && t(e, n), e;
        };
      }(),
      r = s(1),
      o = s(3),
      a = function () {
        function t(e, s) {
          n(this, t), r.initializer.load(this, s, e), this.begin();
        }
        return i(t, [{
          key: "toggle",
          value: function value() {
            this.pause.status ? this.start() : this.stop();
          }
        }, {
          key: "stop",
          value: function value() {
            this.typingComplete || this.pause.status || (this.toggleBlinking(!0), this.pause.status = !0, this.options.onStop(this.arrayPos, this));
          }
        }, {
          key: "start",
          value: function value() {
            this.typingComplete || this.pause.status && (this.pause.status = !1, this.pause.typewrite ? this.typewrite(this.pause.curString, this.pause.curStrPos) : this.backspace(this.pause.curString, this.pause.curStrPos), this.options.onStart(this.arrayPos, this));
          }
        }, {
          key: "destroy",
          value: function value() {
            this.reset(!1), this.options.onDestroy(this);
          }
        }, {
          key: "reset",
          value: function value() {
            var t = arguments.length <= 0 || void 0 === arguments[0] || arguments[0];
            clearInterval(this.timeout), this.replaceText(""), this.cursor && this.cursor.parentNode && (this.cursor.parentNode.removeChild(this.cursor), this.cursor = null), this.strPos = 0, this.arrayPos = 0, this.curLoop = 0, t && (this.insertCursor(), this.options.onReset(this), this.begin());
          }
        }, {
          key: "begin",
          value: function value() {
            var t = this;
            this.options.onBegin(this), this.typingComplete = !1, this.shuffleStringsIfNeeded(this), this.insertCursor(), this.bindInputFocusEvents && this.bindFocusEvents(), this.timeout = setTimeout(function () {
              t.currentElContent && 0 !== t.currentElContent.length ? t.backspace(t.currentElContent, t.currentElContent.length) : t.typewrite(t.strings[t.sequence[t.arrayPos]], t.strPos);
            }, this.startDelay);
          }
        }, {
          key: "typewrite",
          value: function value(t, e) {
            var s = this;
            this.fadeOut && this.el.classList.contains(this.fadeOutClass) && (this.el.classList.remove(this.fadeOutClass), this.cursor && this.cursor.classList.remove(this.fadeOutClass));
            var n = this.humanizer(this.typeSpeed),
              i = 1;
            return this.pause.status === !0 ? void this.setPauseStatus(t, e, !0) : void (this.timeout = setTimeout(function () {
              e = o.htmlParser.typeHtmlChars(t, e, s);
              var n = 0,
                r = t.substr(e);
              if ("^" === r.charAt(0) && /^\^\d+/.test(r)) {
                var a = 1;
                r = /\d+/.exec(r)[0], a += r.length, n = parseInt(r), s.temporaryPause = !0, s.options.onTypingPaused(s.arrayPos, s), t = t.substring(0, e) + t.substring(e + a), s.toggleBlinking(!0);
              }
              if ("`" === r.charAt(0)) {
                for (; "`" !== t.substr(e + i).charAt(0) && (i++, !(e + i > t.length)););
                var u = t.substring(0, e),
                  l = t.substring(u.length + 1, e + i),
                  c = t.substring(e + i + 1);
                t = u + l + c, i--;
              }
              s.timeout = setTimeout(function () {
                s.toggleBlinking(!1), e >= t.length ? s.doneTyping(t, e) : s.keepTyping(t, e, i), s.temporaryPause && (s.temporaryPause = !1, s.options.onTypingResumed(s.arrayPos, s));
              }, n);
            }, n));
          }
        }, {
          key: "keepTyping",
          value: function value(t, e, s) {
            0 === e && (this.toggleBlinking(!1), this.options.preStringTyped(this.arrayPos, this)), e += s;
            var n = t.substr(0, e);
            this.replaceText(n), this.typewrite(t, e);
          }
        }, {
          key: "doneTyping",
          value: function value(t, e) {
            var s = this;
            this.options.onStringTyped(this.arrayPos, this), this.toggleBlinking(!0), this.arrayPos === this.strings.length - 1 && (this.complete(), this.loop === !1 || this.curLoop === this.loopCount) || (this.timeout = setTimeout(function () {
              s.backspace(t, e);
            }, this.backDelay));
          }
        }, {
          key: "backspace",
          value: function value(t, e) {
            var s = this;
            if (this.pause.status === !0) return void this.setPauseStatus(t, e, !1);
            if (this.fadeOut) return this.initFadeOut();
            this.toggleBlinking(!1);
            var n = this.humanizer(this.backSpeed);
            this.timeout = setTimeout(function () {
              e = o.htmlParser.backSpaceHtmlChars(t, e, s);
              var n = t.substr(0, e);
              if (s.replaceText(n), s.smartBackspace) {
                var i = s.strings[s.arrayPos + 1];
                i && n === i.substr(0, e) ? s.stopNum = e : s.stopNum = 0;
              }
              e > s.stopNum ? (e--, s.backspace(t, e)) : e <= s.stopNum && (s.arrayPos++, s.arrayPos === s.strings.length ? (s.arrayPos = 0, s.options.onLastStringBackspaced(), s.shuffleStringsIfNeeded(), s.begin()) : s.typewrite(s.strings[s.sequence[s.arrayPos]], e));
            }, n);
          }
        }, {
          key: "complete",
          value: function value() {
            this.options.onComplete(this), this.loop ? this.curLoop++ : this.typingComplete = !0;
          }
        }, {
          key: "setPauseStatus",
          value: function value(t, e, s) {
            this.pause.typewrite = s, this.pause.curString = t, this.pause.curStrPos = e;
          }
        }, {
          key: "toggleBlinking",
          value: function value(t) {
            this.cursor && (this.pause.status || this.cursorBlinking !== t && (this.cursorBlinking = t, t ? this.cursor.classList.add("typed-cursor--blink") : this.cursor.classList.remove("typed-cursor--blink")));
          }
        }, {
          key: "humanizer",
          value: function value(t) {
            return Math.round(Math.random() * t / 2) + t;
          }
        }, {
          key: "shuffleStringsIfNeeded",
          value: function value() {
            this.shuffle && (this.sequence = this.sequence.sort(function () {
              return Math.random() - .5;
            }));
          }
        }, {
          key: "initFadeOut",
          value: function value() {
            var t = this;
            return this.el.className += " " + this.fadeOutClass, this.cursor && (this.cursor.className += " " + this.fadeOutClass), setTimeout(function () {
              t.arrayPos++, t.replaceText(""), t.strings.length > t.arrayPos ? t.typewrite(t.strings[t.sequence[t.arrayPos]], 0) : (t.typewrite(t.strings[0], 0), t.arrayPos = 0);
            }, this.fadeOutDelay);
          }
        }, {
          key: "replaceText",
          value: function value(t) {
            this.attr ? this.el.setAttribute(this.attr, t) : this.isInput ? this.el.value = t : "html" === this.contentType ? this.el.innerHTML = t : this.el.textContent = t;
          }
        }, {
          key: "bindFocusEvents",
          value: function value() {
            var t = this;
            this.isInput && (this.el.addEventListener("focus", function (e) {
              t.stop();
            }), this.el.addEventListener("blur", function (e) {
              t.el.value && 0 !== t.el.value.length || t.start();
            }));
          }
        }, {
          key: "insertCursor",
          value: function value() {
            this.showCursor && (this.cursor || (this.cursor = document.createElement("span"), this.cursor.className = "typed-cursor", this.cursor.setAttribute("aria-hidden", !0), this.cursor.innerHTML = this.cursorChar, this.el.parentNode && this.el.parentNode.insertBefore(this.cursor, this.el.nextSibling)));
          }
        }]), t;
      }();
    e["default"] = a, t.exports = e["default"];
  }, function (t, e, s) {
    "use strict";

    function n(t) {
      return t && t.__esModule ? t : {
        "default": t
      };
    }
    function i(t, e) {
      if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
    }
    Object.defineProperty(e, "__esModule", {
      value: !0
    });
    var r = Object.assign || function (t) {
        for (var e = 1; e < arguments.length; e++) {
          var s = arguments[e];
          for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (t[n] = s[n]);
        }
        return t;
      },
      o = function () {
        function t(t, e) {
          for (var s = 0; s < e.length; s++) {
            var n = e[s];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n);
          }
        }
        return function (e, s, n) {
          return s && t(e.prototype, s), n && t(e, n), e;
        };
      }(),
      a = s(2),
      u = n(a),
      l = function () {
        function t() {
          i(this, t);
        }
        return o(t, [{
          key: "load",
          value: function value(t, e, s) {
            if ("string" == typeof s ? t.el = document.querySelector(s) : t.el = s, t.options = r({}, u["default"], e), t.isInput = "input" === t.el.tagName.toLowerCase(), t.attr = t.options.attr, t.bindInputFocusEvents = t.options.bindInputFocusEvents, t.showCursor = !t.isInput && t.options.showCursor, t.cursorChar = t.options.cursorChar, t.cursorBlinking = !0, t.elContent = t.attr ? t.el.getAttribute(t.attr) : t.el.textContent, t.contentType = t.options.contentType, t.typeSpeed = t.options.typeSpeed, t.startDelay = t.options.startDelay, t.backSpeed = t.options.backSpeed, t.smartBackspace = t.options.smartBackspace, t.backDelay = t.options.backDelay, t.fadeOut = t.options.fadeOut, t.fadeOutClass = t.options.fadeOutClass, t.fadeOutDelay = t.options.fadeOutDelay, t.isPaused = !1, t.strings = t.options.strings.map(function (t) {
              return t.trim();
            }), "string" == typeof t.options.stringsElement ? t.stringsElement = document.querySelector(t.options.stringsElement) : t.stringsElement = t.options.stringsElement, t.stringsElement) {
              t.strings = [], t.stringsElement.style.display = "none";
              var n = Array.prototype.slice.apply(t.stringsElement.children),
                i = n.length;
              if (i) for (var o = 0; o < i; o += 1) {
                var a = n[o];
                t.strings.push(a.innerHTML.trim());
              }
            }
            t.strPos = 0, t.arrayPos = 0, t.stopNum = 0, t.loop = t.options.loop, t.loopCount = t.options.loopCount, t.curLoop = 0, t.shuffle = t.options.shuffle, t.sequence = [], t.pause = {
              status: !1,
              typewrite: !0,
              curString: "",
              curStrPos: 0
            }, t.typingComplete = !1;
            for (var o in t.strings) t.sequence[o] = o;
            t.currentElContent = this.getCurrentElContent(t), t.autoInsertCss = t.options.autoInsertCss, this.appendAnimationCss(t);
          }
        }, {
          key: "getCurrentElContent",
          value: function value(t) {
            var e = "";
            return e = t.attr ? t.el.getAttribute(t.attr) : t.isInput ? t.el.value : "html" === t.contentType ? t.el.innerHTML : t.el.textContent;
          }
        }, {
          key: "appendAnimationCss",
          value: function value(t) {
            var e = "data-typed-js-css";
            if (t.autoInsertCss && (t.showCursor || t.fadeOut) && !document.querySelector("[" + e + "]")) {
              var s = document.createElement("style");
              s.type = "text/css", s.setAttribute(e, !0);
              var n = "";
              t.showCursor && (n += "\n        .typed-cursor{\n          opacity: 1;\n        }\n        .typed-cursor.typed-cursor--blink{\n          animation: typedjsBlink 0.7s infinite;\n          -webkit-animation: typedjsBlink 0.7s infinite;\n                  animation: typedjsBlink 0.7s infinite;\n        }\n        @keyframes typedjsBlink{\n          50% { opacity: 0.0; }\n        }\n        @-webkit-keyframes typedjsBlink{\n          0% { opacity: 1; }\n          50% { opacity: 0.0; }\n          100% { opacity: 1; }\n        }\n      "), t.fadeOut && (n += "\n        .typed-fade-out{\n          opacity: 0;\n          transition: opacity .25s;\n        }\n        .typed-cursor.typed-cursor--blink.typed-fade-out{\n          -webkit-animation: 0;\n          animation: 0;\n        }\n      "), 0 !== s.length && (s.innerHTML = n, document.body.appendChild(s));
            }
          }
        }]), t;
      }();
    e["default"] = l;
    var c = new l();
    e.initializer = c;
  }, function (t, e) {
    "use strict";

    Object.defineProperty(e, "__esModule", {
      value: !0
    });
    var s = {
      strings: ["These are the default values...", "You know what you should do?", "Use your own!", "Have a great day!"],
      stringsElement: null,
      typeSpeed: 0,
      startDelay: 0,
      backSpeed: 0,
      smartBackspace: !0,
      shuffle: !1,
      backDelay: 700,
      fadeOut: !1,
      fadeOutClass: "typed-fade-out",
      fadeOutDelay: 500,
      loop: !1,
      loopCount: 1 / 0,
      showCursor: !0,
      cursorChar: "|",
      autoInsertCss: !0,
      attr: null,
      bindInputFocusEvents: !1,
      contentType: "html",
      onBegin: function onBegin(t) {},
      onComplete: function onComplete(t) {},
      preStringTyped: function preStringTyped(t, e) {},
      onStringTyped: function onStringTyped(t, e) {},
      onLastStringBackspaced: function onLastStringBackspaced(t) {},
      onTypingPaused: function onTypingPaused(t, e) {},
      onTypingResumed: function onTypingResumed(t, e) {},
      onReset: function onReset(t) {},
      onStop: function onStop(t, e) {},
      onStart: function onStart(t, e) {},
      onDestroy: function onDestroy(t) {}
    };
    e["default"] = s, t.exports = e["default"];
  }, function (t, e) {
    "use strict";

    function s(t, e) {
      if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
    }
    Object.defineProperty(e, "__esModule", {
      value: !0
    });
    var n = function () {
        function t(t, e) {
          for (var s = 0; s < e.length; s++) {
            var n = e[s];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n);
          }
        }
        return function (e, s, n) {
          return s && t(e.prototype, s), n && t(e, n), e;
        };
      }(),
      i = function () {
        function t() {
          s(this, t);
        }
        return n(t, [{
          key: "typeHtmlChars",
          value: function value(t, e, s) {
            if ("html" !== s.contentType) return e;
            var n = t.substr(e).charAt(0);
            if ("<" === n || "&" === n) {
              var i = "";
              for (i = "<" === n ? ">" : ";"; t.substr(e + 1).charAt(0) !== i && (e++, !(e + 1 > t.length)););
              e++;
            }
            return e;
          }
        }, {
          key: "backSpaceHtmlChars",
          value: function value(t, e, s) {
            if ("html" !== s.contentType) return e;
            var n = t.substr(e).charAt(0);
            if (">" === n || ";" === n) {
              var i = "";
              for (i = ">" === n ? "<" : "&"; t.substr(e - 1).charAt(0) !== i && (e--, !(e < 0)););
              e--;
            }
            return e;
          }
        }]), t;
      }();
    e["default"] = i;
    var r = new i();
    e.htmlParser = r;
  }]);
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
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/plugins.textrotator.js");
/******/ 	
/******/ })()
;