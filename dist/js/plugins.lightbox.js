/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/plugins.lightbox.js":
/*!************************************!*\
  !*** ./src/js/plugins.lightbox.js ***!
  \************************************/
/***/ ((module, exports) => {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
/*! Magnific Popup - v1.1.0 - 2016-02-20
* http://dimsemenov.com/plugins/magnific-popup/
* Copyright (c) 2016 Dmitry Semenov; */
!function (e) {
   true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [Object(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())], __WEBPACK_AMD_DEFINE_FACTORY__ = (e),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : 0;
}(function (e) {
  var t,
    i,
    n,
    o,
    a,
    r,
    s = function s() {},
    l = !!window.jQuery,
    c = e(window),
    d = function d(e, i) {
      t.ev.on("mfp" + e + ".mfp", i);
    },
    p = function p(t, i, n, o) {
      var a = document.createElement("div");
      return a.className = "mfp-" + t, n && (a.innerHTML = n), o ? i && i.appendChild(a) : (a = e(a), i && a.appendTo(i)), a;
    },
    u = function u(i, n) {
      t.ev.triggerHandler("mfp" + i, n), t.st.callbacks && (i = i.charAt(0).toLowerCase() + i.slice(1), t.st.callbacks[i] && t.st.callbacks[i].apply(t, e.isArray(n) ? n : [n]));
    },
    f = function f(i) {
      return i === r && t.currTemplate.closeBtn || (t.currTemplate.closeBtn = e(t.st.closeMarkup.replace("%title%", t.st.tClose)), t.currTemplate.closeBtn.html(t.st.closeIcon), r = i), t.currTemplate.closeBtn;
    },
    m = function m() {
      e.magnificPopup.instance || ((t = new s()).init(), e.magnificPopup.instance = t);
    };
  s.prototype = {
    constructor: s,
    init: function init() {
      var i = navigator.appVersion;
      t.isLowIE = t.isIE8 = document.all && !document.addEventListener, t.isAndroid = /android/gi.test(i), t.isIOS = /iphone|ipad|ipod/gi.test(i), t.supportsTransition = function () {
        var e = document.createElement("p").style,
          t = ["ms", "O", "Moz", "Webkit"];
        if (void 0 !== e.transition) return !0;
        for (; t.length;) if (t.pop() + "Transition" in e) return !0;
        return !1;
      }(), t.probablyMobile = t.isAndroid || t.isIOS || /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent), n = e(document), t.popupsCache = {};
    },
    open: function open(i) {
      var o;
      if (!1 === i.isObj) {
        t.items = i.items.toArray(), t.index = 0;
        var r,
          s = i.items;
        for (o = 0; o < s.length; o++) if ((r = s[o]).parsed && (r = r.el[0]), r === i.el[0]) {
          t.index = o;
          break;
        }
      } else t.items = e.isArray(i.items) ? i.items : [i.items], t.index = i.index || 0;
      if (!t.isOpen) {
        t.types = [], a = "", i.mainEl && i.mainEl.length ? t.ev = i.mainEl.eq(0) : t.ev = n, i.key ? (t.popupsCache[i.key] || (t.popupsCache[i.key] = {}), t.currTemplate = t.popupsCache[i.key]) : t.currTemplate = {}, t.st = e.extend(!0, {}, e.magnificPopup.defaults, i), t.fixedContentPos = "auto" === t.st.fixedContentPos ? !t.probablyMobile : t.st.fixedContentPos, t.st.modal && (t.st.closeOnContentClick = !1, t.st.closeOnBgClick = !1, t.st.showCloseBtn = !1, t.st.enableEscapeKey = !1), t.bgOverlay || (t.bgOverlay = p("bg").on("click.mfp", function () {
          t.close();
        }), t.wrap = p("wrap").attr("tabindex", -1).on("click.mfp", function (e) {
          t._checkIfClose(e.target) && t.close();
        }), t.container = p("container", t.wrap)), t.contentContainer = p("content"), t.st.preloader && (t.preloader = p("preloader", t.container, t.st.tLoading));
        var l = e.magnificPopup.modules;
        for (o = 0; o < l.length; o++) {
          var m = l[o];
          m = m.charAt(0).toUpperCase() + m.slice(1), t["init" + m].call(t);
        }
        u("BeforeOpen"), t.st.showCloseBtn && (t.st.closeBtnInside ? (d("MarkupParse", function (e, t, i, n) {
          i.close_replaceWith = f(n.type);
        }), a += " mfp-close-btn-in") : t.wrap.append(f())), t.st.alignTop && (a += " mfp-align-top"), t.fixedContentPos ? t.wrap.css({
          overflow: t.st.overflowY,
          overflowX: "hidden",
          overflowY: t.st.overflowY
        }) : t.wrap.css({
          top: c.scrollTop(),
          position: "absolute"
        }), (!1 === t.st.fixedBgPos || "auto" === t.st.fixedBgPos && !t.fixedContentPos) && t.bgOverlay.css({
          height: n.height(),
          position: "absolute"
        }), t.st.enableEscapeKey && n.on("keyup.mfp", function (e) {
          27 === e.keyCode && t.close();
        }), c.on("resize.mfp", function () {
          t.updateSize();
        }), t.st.closeOnContentClick || (a += " mfp-auto-cursor"), a && t.wrap.addClass(a);
        var g = t.wH = c.height(),
          v = {};
        if (t.fixedContentPos && t._hasScrollBar(g)) {
          var h = t._getScrollbarSize();
          h && (v.marginRight = h);
        }
        t.fixedContentPos && (t.isIE7 ? e("body, html").css("overflow", "hidden") : v.overflow = "hidden");
        var C = t.st.mainClass;
        return t.isIE7 && (C += " mfp-ie7"), C && t._addClassToMFP(C), t.updateItemHTML(), u("BuildControls"), e("html").css(v), t.bgOverlay.add(t.wrap).prependTo(t.st.prependTo || e(document.body)), t._lastFocusedEl = document.activeElement, setTimeout(function () {
          t.content ? (t._addClassToMFP("mfp-ready"), t._setFocus()) : t.bgOverlay.addClass("mfp-ready"), n.on("focusin.mfp", t._onFocusIn);
        }, 16), t.isOpen = !0, t.updateSize(g), u("Open"), i;
      }
      t.updateItemHTML();
    },
    close: function close() {
      t.isOpen && (u("BeforeClose"), t.isOpen = !1, t.st.removalDelay && !t.isLowIE && t.supportsTransition ? (t._addClassToMFP("mfp-removing"), setTimeout(function () {
        t._close();
      }, t.st.removalDelay)) : t._close());
    },
    _close: function _close() {
      u("Close");
      var i = "mfp-removing mfp-ready ";
      if (t.bgOverlay.detach(), t.wrap.detach(), t.container.empty(), t.st.mainClass && (i += t.st.mainClass + " "), t._removeClassFromMFP(i), t.fixedContentPos) {
        var o = {
          marginRight: ""
        };
        t.isIE7 ? e("body, html").css("overflow", "") : o.overflow = "", e("html").css(o);
      }
      n.off("keyup.mfp focusin.mfp"), t.ev.off(".mfp"), t.wrap.attr("class", "mfp-wrap").removeAttr("style"), t.bgOverlay.attr("class", "mfp-bg"), t.container.attr("class", "mfp-container"), !t.st.showCloseBtn || t.st.closeBtnInside && !0 !== t.currTemplate[t.currItem.type] || t.currTemplate.closeBtn && t.currTemplate.closeBtn.detach(), t.st.autoFocusLast && t._lastFocusedEl && e(t._lastFocusedEl).focus(), t.currItem = null, t.content = null, t.currTemplate = null, t.prevHeight = 0, u("AfterClose");
    },
    updateSize: function updateSize(e) {
      if (t.isIOS) {
        var i = document.documentElement.clientWidth / window.innerWidth,
          n = window.innerHeight * i;
        t.wrap.css("height", n), t.wH = n;
      } else t.wH = e || c.height();
      t.fixedContentPos || t.wrap.css("height", t.wH), u("Resize");
    },
    updateItemHTML: function updateItemHTML() {
      var i = t.items[t.index];
      t.contentContainer.detach(), t.content && t.content.detach(), i.parsed || (i = t.parseEl(t.index));
      var n = i.type;
      if (u("BeforeChange", [t.currItem ? t.currItem.type : "", n]), t.currItem = i, !t.currTemplate[n]) {
        var a = !!t.st[n] && t.st[n].markup;
        u("FirstMarkupParse", a), t.currTemplate[n] = !a || e(a);
      }
      o && o !== i.type && t.container.removeClass("mfp-" + o + "-holder");
      var r = t["get" + n.charAt(0).toUpperCase() + n.slice(1)](i, t.currTemplate[n]);
      t.appendContent(r, n), i.preloaded = !0, u("Change", i), o = i.type, t.container.prepend(t.contentContainer), u("AfterChange");
    },
    appendContent: function appendContent(e, i) {
      t.content = e, e ? t.st.showCloseBtn && t.st.closeBtnInside && !0 === t.currTemplate[i] ? t.content.find(".mfp-close").length || t.content.append(f()) : t.content = e : t.content = "", u("BeforeAppend"), t.container.addClass("mfp-" + i + "-holder"), t.contentContainer.append(t.content);
    },
    parseEl: function parseEl(i) {
      var n,
        o = t.items[i];
      if (o.tagName ? o = {
        el: e(o)
      } : (n = o.type, o = {
        data: o,
        src: o.src
      }), o.el) {
        for (var a = t.types, r = 0; r < a.length; r++) if (o.el.hasClass("mfp-" + a[r])) {
          n = a[r];
          break;
        }
        o.src = o.el.attr("data-mfp-src"), o.src || (o.src = o.el.attr("href")), o.srcset = o.el.attr("data-srcset") || "", o.sizes = o.el.attr("data-sizes") || "";
      }
      return o.type = n || t.st.type || "inline", o.index = i, o.parsed = !0, t.items[i] = o, u("ElementParse", o), t.items[i];
    },
    addGroup: function addGroup(e, i) {
      var n = function n(_n) {
        _n.mfpEl = this, t._openClick(_n, e, i);
      };
      i || (i = {});
      var o = "click.magnificPopup";
      i.mainEl = e, i.items ? (i.isObj = !0, e.off(o).on(o, n)) : (i.isObj = !1, i.delegate ? e.off(o).on(o, i.delegate, n) : (i.items = e, e.off(o).on(o, n)));
    },
    _openClick: function _openClick(i, n, o) {
      if ((void 0 !== o.midClick ? o.midClick : e.magnificPopup.defaults.midClick) || !(2 === i.which || i.ctrlKey || i.metaKey || i.altKey || i.shiftKey)) {
        var a = void 0 !== o.disableOn ? o.disableOn : e.magnificPopup.defaults.disableOn;
        if (a) if (e.isFunction(a)) {
          if (!a.call(t)) return !0;
        } else if (c.width() < a) return !0;
        i.type && (i.preventDefault(), t.isOpen && i.stopPropagation()), o.el = e(i.mfpEl), o.delegate && (o.items = n.find(o.delegate)), t.open(o);
      }
    },
    updateStatus: function updateStatus(e, n) {
      if (t.preloader) {
        i !== e && t.container.removeClass("mfp-s-" + i), n || "loading" !== e || (n = t.st.tLoading);
        var o = {
          status: e,
          text: n
        };
        u("UpdateStatus", o), e = o.status, n = o.text, t.preloader.html(n), t.preloader.find("a").on("click", function (e) {
          e.stopImmediatePropagation();
        }), t.container.addClass("mfp-s-" + e), i = e;
      }
    },
    _checkIfClose: function _checkIfClose(i) {
      if (!e(i).hasClass("mfp-prevent-close")) {
        var n = t.st.closeOnContentClick,
          o = t.st.closeOnBgClick;
        if (n && o) return !0;
        if (!t.content || e(i).hasClass("mfp-close") || t.preloader && i === t.preloader[0]) return !0;
        if (i === t.content[0] || e.contains(t.content[0], i)) {
          if (n) return !0;
        } else if (o && e.contains(document, i)) return !0;
        return !1;
      }
    },
    _addClassToMFP: function _addClassToMFP(e) {
      t.bgOverlay.addClass(e), t.wrap.addClass(e);
    },
    _removeClassFromMFP: function _removeClassFromMFP(e) {
      this.bgOverlay.removeClass(e), t.wrap.removeClass(e);
    },
    _hasScrollBar: function _hasScrollBar(e) {
      return (t.isIE7 ? n.height() : document.body.scrollHeight) > (e || c.height());
    },
    _setFocus: function _setFocus() {
      (t.st.focus ? t.content.find(t.st.focus).eq(0) : t.wrap).focus();
    },
    _onFocusIn: function _onFocusIn(i) {
      if (i.target !== t.wrap[0] && !e.contains(t.wrap[0], i.target)) return t._setFocus(), !1;
    },
    _parseMarkup: function _parseMarkup(t, i, n) {
      var o;
      n.data && (i = e.extend(n.data, i)), u("MarkupParse", [t, i, n]), e.each(i, function (i, n) {
        if (void 0 === n || !1 === n) return !0;
        if ((o = i.split("_")).length > 1) {
          var a = t.find(".mfp-" + o[0]);
          if (a.length > 0) {
            var r = o[1];
            "replaceWith" === r ? a[0] !== n[0] && a.replaceWith(n) : "img" === r ? a.is("img") ? a.attr("src", n) : a.replaceWith(e("<img>").attr("src", n).attr("class", a.attr("class"))) : a.attr(o[1], n);
          }
        } else t.find(".mfp-" + i).html(n);
      });
    },
    _getScrollbarSize: function _getScrollbarSize() {
      if (void 0 === t.scrollbarSize) {
        var e = document.createElement("div");
        e.style.cssText = "width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;", document.body.appendChild(e), t.scrollbarSize = e.offsetWidth - e.clientWidth, document.body.removeChild(e);
      }
      return t.scrollbarSize;
    }
  }, e.magnificPopup = {
    instance: null,
    proto: s.prototype,
    modules: [],
    open: function open(t, i) {
      return m(), (t = t ? e.extend(!0, {}, t) : {}).isObj = !0, t.index = i || 0, this.instance.open(t);
    },
    close: function close() {
      return e.magnificPopup.instance && e.magnificPopup.instance.close();
    },
    registerModule: function registerModule(t, i) {
      i.options && (e.magnificPopup.defaults[t] = i.options), e.extend(this.proto, i.proto), this.modules.push(t);
    },
    defaults: {
      disableOn: 0,
      key: null,
      midClick: !1,
      mainClass: "",
      preloader: !0,
      focus: "",
      closeOnContentClick: !1,
      closeOnBgClick: !0,
      closeBtnInside: !0,
      showCloseBtn: !0,
      enableEscapeKey: !0,
      modal: !1,
      alignTop: !1,
      removalDelay: 0,
      prependTo: null,
      fixedContentPos: "auto",
      fixedBgPos: "auto",
      overflowY: "auto",
      closeIcon: "&#215;",
      closeMarkup: '<button title="%title%" type="button" class="mfp-close"></button>',
      tClose: "Close (Esc)",
      tLoading: "Loading...",
      autoFocusLast: !0
    }
  }, e.fn.magnificPopup = function (i) {
    m();
    var n = e(this);
    if ("string" == typeof i) {
      if ("open" === i) {
        var o,
          a = l ? n.data("magnificPopup") : n[0].magnificPopup,
          r = parseInt(arguments[1], 10) || 0;
        a.items ? o = a.items[r] : (o = n, a.delegate && (o = o.find(a.delegate)), o = o.eq(r)), t._openClick({
          mfpEl: o
        }, n, a);
      } else t.isOpen && t[i].apply(t, Array.prototype.slice.call(arguments, 1));
    } else i = e.extend(!0, {}, i), l ? n.data("magnificPopup", i) : n[0].magnificPopup = i, t.addGroup(n, i);
    return n;
  };
  var g,
    v,
    h,
    C = function C() {
      h && (v.after(h.addClass(g)).detach(), h = null);
    };
  e.magnificPopup.registerModule("inline", {
    options: {
      hiddenClass: "hide",
      markup: "",
      tNotFound: "Content not found"
    },
    proto: {
      initInline: function initInline() {
        t.types.push("inline"), d("Close.inline", function () {
          C();
        });
      },
      getInline: function getInline(i, n) {
        if (C(), i.src) {
          var o = t.st.inline,
            a = e(i.src);
          if (a.length) {
            var r = a[0].parentNode;
            r && r.tagName && (v || (g = o.hiddenClass, v = p(g), g = "mfp-" + g), h = a.after(v).detach().removeClass(g)), t.updateStatus("ready");
          } else t.updateStatus("error", o.tNotFound), a = e("<div>");
          return i.inlineElement = a, a;
        }
        return t.updateStatus("ready"), t._parseMarkup(n, {}, i), n;
      }
    }
  });
  var y,
    w = function w() {
      y && e(document.body).removeClass(y);
    },
    b = function b() {
      w(), t.req && t.req.abort();
    };
  e.magnificPopup.registerModule("ajax", {
    options: {
      settings: null,
      cursor: "mfp-ajax-cur",
      tError: '<a href="%url%">The content</a> could not be loaded.'
    },
    proto: {
      initAjax: function initAjax() {
        t.types.push("ajax"), y = t.st.ajax.cursor, d("Close.ajax", b), d("BeforeChange.ajax", b);
      },
      getAjax: function getAjax(i) {
        y && e(document.body).addClass(y), t.updateStatus("loading");
        var n = e.extend({
          url: i.src,
          success: function success(n, o, a) {
            var r = {
              data: n,
              xhr: a
            };
            u("ParseAjax", r), t.appendContent(e(r.data), "ajax"), i.finished = !0, w(), t._setFocus(), setTimeout(function () {
              t.wrap.addClass("mfp-ready");
            }, 16), t.updateStatus("ready"), u("AjaxContentAdded");
          },
          error: function error() {
            w(), i.finished = i.loadError = !0, t.updateStatus("error", t.st.ajax.tError.replace("%url%", i.src));
          }
        }, t.st.ajax.settings);
        return t.req = e.ajax(n), "";
      }
    }
  });
  var I,
    x = function x(i) {
      if (i.data && void 0 !== i.data.title) return i.data.title;
      var n = t.st.image.titleSrc;
      if (n) {
        if (e.isFunction(n)) return n.call(t, i);
        if (i.el) return i.el.attr(n) || "";
      }
      return "";
    };
  e.magnificPopup.registerModule("image", {
    options: {
      markup: '<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',
      cursor: "mfp-zoom-out-cur",
      titleSrc: "title",
      verticalFit: !0,
      tError: '<a href="%url%">The image</a> could not be loaded.'
    },
    proto: {
      initImage: function initImage() {
        var i = t.st.image,
          n = ".image";
        t.types.push("image"), d("Open" + n, function () {
          "image" === t.currItem.type && i.cursor && e(document.body).addClass(i.cursor);
        }), d("Close" + n, function () {
          i.cursor && e(document.body).removeClass(i.cursor), c.off("resize.mfp");
        }), d("Resize" + n, t.resizeImage), t.isLowIE && d("AfterChange", t.resizeImage);
      },
      resizeImage: function resizeImage() {
        var e = t.currItem;
        if (e && e.img && t.st.image.verticalFit) {
          var i = 0;
          t.isLowIE && (i = parseInt(e.img.css("padding-top"), 10) + parseInt(e.img.css("padding-bottom"), 10)), e.img.css("max-height", t.wH - i);
        }
      },
      _onImageHasSize: function _onImageHasSize(e) {
        e.img && (e.hasSize = !0, I && clearInterval(I), e.isCheckingImgSize = !1, u("ImageHasSize", e), e.imgHidden && (t.content && t.content.removeClass("mfp-loading"), e.imgHidden = !1));
      },
      findImageSize: function findImageSize(e) {
        var i = 0,
          n = e.img[0],
          o = function o(a) {
            I && clearInterval(I), I = setInterval(function () {
              n.naturalWidth > 0 ? t._onImageHasSize(e) : (i > 200 && clearInterval(I), 3 === ++i ? o(10) : 40 === i ? o(50) : 100 === i && o(500));
            }, a);
          };
        o(1);
      },
      getImage: function getImage(i, n) {
        var o = 0,
          a = function a() {
            i && (i.img[0].complete ? (i.img.off(".mfploader"), i === t.currItem && (t._onImageHasSize(i), t.updateStatus("ready")), i.hasSize = !0, i.loaded = !0, u("ImageLoadComplete")) : ++o < 200 ? setTimeout(a, 100) : r());
          },
          r = function r() {
            i && (i.img.off(".mfploader"), i === t.currItem && (t._onImageHasSize(i), t.updateStatus("error", s.tError.replace("%url%", i.src))), i.hasSize = !0, i.loaded = !0, i.loadError = !0);
          },
          s = t.st.image,
          l = n.find(".mfp-img");
        if (l.length) {
          var c = document.createElement("img");
          c.className = "mfp-img", i.el && i.el.find("img").length && (c.alt = i.el.find("img").attr("alt")), i.img = e(c).on("load.mfploader", a).on("error.mfploader", r), c.src = i.src, c.srcset = i.srcset, c.sizes = i.sizes, l.is("img") && (i.img = i.img.clone()), (c = i.img[0]).naturalWidth > 0 ? i.hasSize = !0 : c.width || (i.hasSize = !1);
        }
        return t._parseMarkup(n, {
          title: x(i),
          img_replaceWith: i.img
        }, i), t.resizeImage(), i.hasSize ? (I && clearInterval(I), i.loadError ? (n.addClass("mfp-loading"), t.updateStatus("error", s.tError.replace("%url%", i.src))) : (n.removeClass("mfp-loading"), t.updateStatus("ready")), n) : (t.updateStatus("loading"), i.loading = !0, i.hasSize || (i.imgHidden = !0, n.addClass("mfp-loading"), t.findImageSize(i)), n);
      }
    }
  });
  var k;
  e.magnificPopup.registerModule("zoom", {
    options: {
      enabled: !1,
      easing: "ease-in-out",
      duration: 300,
      opener: function opener(e) {
        return e.is("img") ? e : e.find("img");
      }
    },
    proto: {
      initZoom: function initZoom() {
        var e,
          i = t.st.zoom,
          n = ".zoom";
        if (i.enabled && t.supportsTransition) {
          var o,
            a,
            r = i.duration,
            s = function s(e) {
              var t = e.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"),
                n = "all " + i.duration / 1e3 + "s " + i.easing,
                o = {
                  position: "fixed",
                  zIndex: 9999,
                  left: 0,
                  top: 0,
                  "-webkit-backface-visibility": "hidden"
                },
                a = "transition";
              return o["-webkit-" + a] = o["-moz-" + a] = o["-o-" + a] = o[a] = n, t.css(o), t;
            },
            l = function l() {
              t.content.css("visibility", "visible");
            };
          d("BuildControls" + n, function () {
            if (t._allowZoom()) {
              if (clearTimeout(o), t.content.css("visibility", "hidden"), !(e = t._getItemToZoom())) return void l();
              (a = s(e)).css(t._getOffset()), t.wrap.append(a), o = setTimeout(function () {
                a.css(t._getOffset(!0)), o = setTimeout(function () {
                  l(), setTimeout(function () {
                    a.remove(), e = a = null, u("ZoomAnimationEnded");
                  }, 16);
                }, r);
              }, 16);
            }
          }), d("BeforeClose" + n, function () {
            if (t._allowZoom()) {
              if (clearTimeout(o), t.st.removalDelay = r, !e) {
                if (!(e = t._getItemToZoom())) return;
                a = s(e);
              }
              a.css(t._getOffset(!0)), t.wrap.append(a), t.content.css("visibility", "hidden"), setTimeout(function () {
                a.css(t._getOffset());
              }, 16);
            }
          }), d("Close" + n, function () {
            t._allowZoom() && (l(), a && a.remove(), e = null);
          });
        }
      },
      _allowZoom: function _allowZoom() {
        return "image" === t.currItem.type;
      },
      _getItemToZoom: function _getItemToZoom() {
        return !!t.currItem.hasSize && t.currItem.img;
      },
      _getOffset: function _getOffset(i) {
        var n,
          o = (n = i ? t.currItem.img : t.st.zoom.opener(t.currItem.el || t.currItem)).offset(),
          a = parseInt(n.css("padding-top"), 10),
          r = parseInt(n.css("padding-bottom"), 10);
        o.top -= e(window).scrollTop() - a;
        var s = {
          width: n.width(),
          height: (l ? n.innerHeight() : n[0].offsetHeight) - r - a
        };
        return void 0 === k && (k = void 0 !== document.createElement("p").style.MozTransform), k ? s["-moz-transform"] = s.transform = "translate(" + o.left + "px," + o.top + "px)" : (s.left = o.left, s.top = o.top), s;
      }
    }
  });
  var T = function T(e) {
    if (t.currTemplate.iframe) {
      var i = t.currTemplate.iframe.find("iframe");
      i.length && (e || (i[0].src = "//about:blank"), t.isIE8 && i.css("display", e ? "block" : "none"));
    }
  };
  e.magnificPopup.registerModule("iframe", {
    options: {
      markup: '<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',
      srcAction: "iframe_src",
      patterns: {
        youtube: {
          index: "youtube.com",
          id: "v=",
          src: "//www.youtube.com/embed/%id%?autoplay=1"
        },
        vimeo: {
          index: "vimeo.com/",
          id: "/",
          src: "//player.vimeo.com/video/%id%?autoplay=1"
        },
        gmaps: {
          index: "//maps.google.",
          src: "%id%&output=embed"
        }
      }
    },
    proto: {
      initIframe: function initIframe() {
        t.types.push("iframe"), d("BeforeChange", function (e, t, i) {
          t !== i && ("iframe" === t ? T() : "iframe" === i && T(!0));
        }), d("Close.iframe", function () {
          T();
        });
      },
      getIframe: function getIframe(i, n) {
        var o = i.src,
          a = t.st.iframe;
        e.each(a.patterns, function () {
          if (o.indexOf(this.index) > -1) return this.id && (o = "string" == typeof this.id ? o.substr(o.lastIndexOf(this.id) + this.id.length, o.length) : this.id.call(this, o)), o = this.src.replace("%id%", o), !1;
        });
        var r = {};
        return a.srcAction && (r[a.srcAction] = o), t._parseMarkup(n, r, i), t.updateStatus("ready"), n;
      }
    }
  });
  var _ = function _(e) {
      var i = t.items.length;
      return e > i - 1 ? e - i : e < 0 ? i + e : e;
    },
    P = function P(e, t, i) {
      return e.replace(/%curr%/gi, t + 1).replace(/%total%/gi, i);
    };
  e.magnificPopup.registerModule("gallery", {
    options: {
      enabled: !1,
      arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
      preload: [0, 2],
      navigateByImgClick: !0,
      arrows: !0,
      tPrev: "Previous (Left arrow key)",
      tNext: "Next (Right arrow key)",
      tCounter: "%curr% of %total%"
    },
    proto: {
      initGallery: function initGallery() {
        var i = t.st.gallery,
          o = ".mfp-gallery";
        if (t.direction = !0, !i || !i.enabled) return !1;
        a += " mfp-gallery", d("Open" + o, function () {
          i.navigateByImgClick && t.wrap.on("click" + o, ".mfp-img", function () {
            if (t.items.length > 1) return t.next(), !1;
          }), n.on("keydown" + o, function (e) {
            37 === e.keyCode ? t.prev() : 39 === e.keyCode && t.next();
          });
        }), d("UpdateStatus" + o, function (e, i) {
          i.text && (i.text = P(i.text, t.currItem.index, t.items.length));
        }), d("MarkupParse" + o, function (e, n, o, a) {
          var r = t.items.length;
          o.counter = r > 1 ? P(i.tCounter, a.index, r) : "";
        }), d("BuildControls" + o, function () {
          if (t.items.length > 1 && i.arrows && !t.arrowLeft) {
            var n = i.arrowMarkup,
              o = t.arrowLeft = e(n.replace(/%title%/gi, i.tPrev).replace(/%dir%/gi, "left")).addClass("mfp-prevent-close"),
              a = t.arrowRight = e(n.replace(/%title%/gi, i.tNext).replace(/%dir%/gi, "right")).addClass("mfp-prevent-close");
            o.click(function () {
              t.prev();
            }), a.click(function () {
              t.next();
            }), t.container.append(o.add(a));
          }
        }), d("Change" + o, function () {
          t._preloadTimeout && clearTimeout(t._preloadTimeout), t._preloadTimeout = setTimeout(function () {
            t.preloadNearbyImages(), t._preloadTimeout = null;
          }, 16);
        }), d("Close" + o, function () {
          n.off(o), t.wrap.off("click" + o), t.arrowRight = t.arrowLeft = null;
        });
      },
      next: function next() {
        t.direction = !0, t.index = _(t.index + 1), t.updateItemHTML();
      },
      prev: function prev() {
        t.direction = !1, t.index = _(t.index - 1), t.updateItemHTML();
      },
      goTo: function goTo(e) {
        t.direction = e >= t.index, t.index = e, t.updateItemHTML();
      },
      preloadNearbyImages: function preloadNearbyImages() {
        var e,
          i = t.st.gallery.preload,
          n = Math.min(i[0], t.items.length),
          o = Math.min(i[1], t.items.length);
        for (e = 1; e <= (t.direction ? o : n); e++) t._preloadItem(t.index + e);
        for (e = 1; e <= (t.direction ? n : o); e++) t._preloadItem(t.index - e);
      },
      _preloadItem: function _preloadItem(i) {
        if (i = _(i), !t.items[i].preloaded) {
          var n = t.items[i];
          n.parsed || (n = t.parseEl(i)), u("LazyLoad", n), "image" === n.type && (n.img = e('<img class="mfp-img" />').on("load.mfploader", function () {
            n.hasSize = !0;
          }).on("error.mfploader", function () {
            n.hasSize = !0, n.loadError = !0, u("LazyLoadError", n);
          }).attr("src", n.src).attr("srcset", n.srcset).attr("sizes", n.sizes)), n.preloaded = !0;
        }
      }
    }
  });
  e.magnificPopup.registerModule("retina", {
    options: {
      replaceSrc: function replaceSrc(e) {
        return e.src.replace(/\.\w+$/, function (e) {
          return "@2x" + e;
        });
      },
      ratio: 1
    },
    proto: {
      initRetina: function initRetina() {
        if (window.devicePixelRatio > 1) {
          var e = t.st.retina,
            i = e.ratio;
          (i = isNaN(i) ? i() : i) > 1 && (d("ImageHasSize.retina", function (e, t) {
            t.img.css({
              "max-width": t.img[0].naturalWidth / i,
              width: "100%"
            });
          }), d("ElementParse.retina", function (t, n) {
            n.src = e.replaceSrc(n, i);
          }));
        }
      }
    }
  }), m();
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
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module used 'module' so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/plugins.lightbox.js");
/******/ 	
/******/ })()
;