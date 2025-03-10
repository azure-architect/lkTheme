/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/plugins.piechart.js":
/*!************************************!*\
  !*** ./src/js/plugins.piechart.js ***!
  \************************************/
/***/ (function(module, exports) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
/**!
 * easy-pie-chart
 * Lightweight plugin to render simple, animated and retina optimized pie charts
 *
 * @license
 * @author Robert Fleischmann <rendro87@gmail.com> (http://robert-fleischmann.de)
 * @version 2.1.7
 **/
!function (a, b) {
   true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [Object(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())], __WEBPACK_AMD_DEFINE_RESULT__ = (function (a) {
    return b(a);
  }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : 0;
}(this, function (a) {
  var b = function b(a, _b) {
      var c,
        d = document.createElement("canvas");
      a.appendChild(d), "object" == (typeof G_vmlCanvasManager === "undefined" ? "undefined" : _typeof(G_vmlCanvasManager)) && G_vmlCanvasManager.initElement(d);
      var e = d.getContext("2d");
      d.width = d.height = _b.size;
      var f = 1;
      window.devicePixelRatio > 1 && (f = window.devicePixelRatio, d.style.width = d.style.height = [_b.size, "px"].join(""), d.width = d.height = _b.size * f, e.scale(f, f)), e.translate(_b.size / 2, _b.size / 2), e.rotate((-0.5 + _b.rotate / 180) * Math.PI);
      var g = (_b.size - _b.lineWidth) / 2;
      _b.scaleColor && _b.scaleLength && (g -= _b.scaleLength + 2), Date.now = Date.now || function () {
        return +new Date();
      };
      var h = function h(a, b, c) {
          c = Math.min(Math.max(-1, c || 0), 1);
          var d = 0 >= c ? !0 : !1;
          e.beginPath(), e.arc(0, 0, g, 0, 2 * Math.PI * c, d), e.strokeStyle = a, e.lineWidth = b, e.stroke();
        },
        i = function i() {
          var a, c;
          e.lineWidth = 1, e.fillStyle = _b.scaleColor, e.save();
          for (var d = 24; d > 0; --d) d % 6 === 0 ? (c = _b.scaleLength, a = 0) : (c = .6 * _b.scaleLength, a = _b.scaleLength - c), e.fillRect(-_b.size / 2 + a, 0, c, 1), e.rotate(Math.PI / 12);
          e.restore();
        },
        j = function () {
          return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function (a) {
            window.setTimeout(a, 1e3 / 60);
          };
        }(),
        k = function k() {
          _b.scaleColor && i(), _b.trackColor && h(_b.trackColor, _b.trackWidth || _b.lineWidth, 1);
        };
      this.getCanvas = function () {
        return d;
      }, this.getCtx = function () {
        return e;
      }, this.clear = function () {
        e.clearRect(_b.size / -2, _b.size / -2, _b.size, _b.size);
      }, this.draw = function (a) {
        _b.scaleColor || _b.trackColor ? e.getImageData && e.putImageData ? c ? e.putImageData(c, 0, 0) : (k(), c = e.getImageData(0, 0, _b.size * f, _b.size * f)) : (this.clear(), k()) : this.clear(), e.lineCap = _b.lineCap;
        var d;
        d = "function" == typeof _b.barColor ? _b.barColor(a) : _b.barColor, h(d, _b.lineWidth, a / 100);
      }.bind(this), this.animate = function (a, c) {
        var d = Date.now();
        _b.onStart(a, c);
        var e = function () {
          var f = Math.min(Date.now() - d, _b.animate.duration),
            g = _b.easing(this, f, a, c - a, _b.animate.duration);
          this.draw(g), _b.onStep(a, c, g), f >= _b.animate.duration ? _b.onStop(a, c) : j(e);
        }.bind(this);
        j(e);
      }.bind(this);
    },
    c = function c(a, _c) {
      var d = {
        barColor: "#ef1e25",
        trackColor: "#f9f9f9",
        scaleColor: "#dfe0e0",
        scaleLength: 5,
        lineCap: "round",
        lineWidth: 3,
        trackWidth: void 0,
        size: 110,
        rotate: 0,
        animate: {
          duration: 1e3,
          enabled: !0
        },
        easing: function easing(a, b, c, d, e) {
          return b /= e / 2, 1 > b ? d / 2 * b * b + c : -d / 2 * (--b * (b - 2) - 1) + c;
        },
        onStart: function onStart(a, b) {},
        onStep: function onStep(a, b, c) {},
        onStop: function onStop(a, b) {}
      };
      if ("undefined" != typeof b) d.renderer = b;else {
        if ("undefined" == typeof SVGRenderer) throw new Error("Please load either the SVG- or the CanvasRenderer");
        d.renderer = SVGRenderer;
      }
      var e = {},
        f = 0,
        g = function () {
          this.el = a, this.options = e;
          for (var b in d) d.hasOwnProperty(b) && (e[b] = _c && "undefined" != typeof _c[b] ? _c[b] : d[b], "function" == typeof e[b] && (e[b] = e[b].bind(this)));
          "string" == typeof e.easing && "undefined" != typeof jQuery && jQuery.isFunction(jQuery.easing[e.easing]) ? e.easing = jQuery.easing[e.easing] : e.easing = d.easing, "number" == typeof e.animate && (e.animate = {
            duration: e.animate,
            enabled: !0
          }), "boolean" != typeof e.animate || e.animate || (e.animate = {
            duration: 1e3,
            enabled: e.animate
          }), this.renderer = new e.renderer(a, e), this.renderer.draw(f), a.dataset && a.dataset.percent ? this.update(parseFloat(a.dataset.percent)) : a.getAttribute && a.getAttribute("data-percent") && this.update(parseFloat(a.getAttribute("data-percent")));
        }.bind(this);
      this.update = function (a) {
        return a = parseFloat(a), e.animate.enabled ? this.renderer.animate(f, a) : this.renderer.draw(a), f = a, this;
      }.bind(this), this.disableAnimation = function () {
        return e.animate.enabled = !1, this;
      }, this.enableAnimation = function () {
        return e.animate.enabled = !0, this;
      }, g();
    };
  a.fn.easyPieChart = function (b) {
    return this.each(function () {
      var d;
      a.data(this, "easyPieChart") || (d = a.extend({}, b, a(this).data()), a.data(this, "easyPieChart", new c(this, d)));
    });
  };
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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/plugins.piechart.js");
/******/ 	
/******/ })()
;