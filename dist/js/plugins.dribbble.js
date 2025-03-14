/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!************************************!*\
  !*** ./src/js/plugins.dribbble.js ***!
  \************************************/
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
/**
 * @preserve
 * Jribbble v2.0.4 | Thu Jun 4 01:49:29 2015 -0400
 * Copyright (c) 2015, Tyler Gaw me@tylergaw.com
 * Released under the ISC-LICENSE
 */
!function (e, t, r, s) {
  "use strict";

  e.jribbble = {};
  var n = null,
    o = "https://api.dribbble.com/v1",
    i = ["animated", "attachments", "debuts", "playoffs", "rebounds", "teams"],
    u = {
      token: "Jribbble: Missing Dribbble access token. Set one with $.jribbble.accessToken = YOUR_ACCESS_TOKEN. If you do not have an access token, you must register a new application at https://dribbble.com/account/applications/new",
      singular: function singular(e) {
        return e.substr(0, e.length - 1);
      },
      idRequired: function idRequired(e) {
        return "Jribbble: You have to provide a " + this.singular(e) + ' ID. ex: $.jribbble.%@("1234").'.replace(/%@/g, e);
      },
      subResource: function subResource(e) {
        return "Jribbble: You have to provide a " + this.singular(e) + ' ID to get %@. ex: $.jribbble.%@("1234").%@()'.replace(/%@/g, e);
      },
      shotId: function shotId(e) {
        return "Jribbble: You have to provide a shot ID to get %@. ex: " + ' $.jribbble.shots("1234").%@()'.replace(/%@/g, e);
      },
      commentLikes: 'Jribbble: You have to provide a comment ID to get likes. ex:  $.jribbble.shots("1234").comments("456").likes()'
    },
    c = function c(e, t) {
      if (e && "object" != _typeof(e)) return e;
      throw new Error(u.idRequired(t));
    },
    l = function l(e) {
      var t = {};
      return e.forEach(function (e) {
        t[e] = d.call(this, e);
      }.bind(this)), t;
    },
    h = function h(t) {
      var r = e.param(t);
      return r ? "?" + r : "";
    },
    a = function a(e) {
      if (0 !== e.length) {
        var t = e[0],
          r = _typeof(t),
          s = {};
        if ("number" === r || "string" === r) {
          var n = i.indexOf(t);
          n > -1 ? s.list = t : s.resource = t;
        } else "object" === r && (s = t);
        return s;
      }
    },
    b = function b() {
      var t = e.extend({}, e.Deferred()),
        r = function r() {
          return this.methods = [], this.response = null, this.flushed = !1, this.add = function (e) {
            this.flushed ? e(this.scope) : this.methods.push(e);
          }, this.flush = function (e) {
            if (!this.flushed) {
              for (this.scope = e, this.flushed = !0; this.methods[0];) this.methods.shift()(e);
              return e;
            }
          }, this;
        };
      return t.queue = new r(), t.url = o, t.get = function () {
        return n ? (e.ajax({
          type: "GET",
          url: this.url,
          beforeSend: function beforeSend(e) {
            e.setRequestHeader("Authorization", "Bearer " + n);
          },
          success: function (e) {
            this.resolve(e);
          }.bind(this),
          error: function (e) {
            this.reject(e);
          }.bind(this)
        }), this) : (console.error(u.token), !1);
      }, t;
    },
    f = function f(t) {
      return function (r) {
        return e.extend(this, b()), this.queue.add(function (e) {
          e.url += "/" + t + "/" + r;
        }), setTimeout(function () {
          this.queue.flush(this).get();
        }.bind(this)), this;
      };
    },
    d = function d(e) {
      return function (t) {
        return this.queue.add(function (r) {
          r.url += "/" + e + "/" + h(t || {});
        }), this;
      };
    };
  e.jribbble.shots = function (t, r) {
    var s = a([].slice.call(arguments)) || {},
      n = r || {},
      o = function o(t) {
        return function (r, s) {
          var n = a([].slice.call(arguments)) || {},
            o = s || {};
          return this.queue.add(function (r) {
            if (!r.shotId) throw new Error(u.shotId(t));
            r.url += "/" + t + "/", n.resource && (r.url += n.resource, delete n.resource), r.url += h(e.extend(n, o));
          }), this;
        };
      },
      i = function i() {
        return e.extend(this, b()), this.url += "/shots/", this.queue.add(function (t) {
          s.resource && (t.shotId = s.resource, t.url += s.resource, delete s.resource), t.url += h(e.extend(s, n));
        }), setTimeout(function () {
          this.queue.flush(this).get();
        }.bind(this)), this;
      };
    return i.prototype.attachments = o("attachments"), i.prototype.buckets = o("buckets"), i.prototype.likes = o("likes"), i.prototype.projects = o("projects"), i.prototype.rebounds = o("rebounds"), i.prototype.comments = function (t, r) {
      var s = a([].slice.call(arguments)) || {},
        n = r || {};
      return this.queue.add(function (t) {
        if (!t.shotId) throw new Error(u.shotId("comments"));
        t.url += "/comments/", s.resource && (t.commentId = s.resource, t.url += s.resource + "/", delete s.resource), t.url += h(e.extend(s, n));
      }), this.likes = function (e) {
        var t = e || {};
        return this.queue.add(function (e) {
          if (!e.commentId) throw new Error(u.commentLikes);
          e.url += "likes/" + h(t);
        }), this;
      }, this;
    }, new i();
  }, e.jribbble.teams = function (e) {
    var t = "teams",
      r = c(e, t),
      s = f.call(this, t);
    return s.prototype = l.call(this, ["members", "shots"]), new s(r);
  }, e.jribbble.users = function (e) {
    var t = "users",
      r = c(e, t),
      s = f.call(this, t);
    return s.prototype = l.call(this, ["buckets", "followers", "following", "likes", "projects", "shots", "teams"]), s.prototype.isFollowing = function (e) {
      return this.queue.add(function (t) {
        t.url += "/following/" + e;
      }), this;
    }, new s(r);
  }, e.jribbble.buckets = function (e) {
    var t = "buckets",
      r = c(e, t),
      s = f.call(this, t);
    return s.prototype = l.call(this, ["shots"]), new s(r);
  }, e.jribbble.projects = function (e) {
    var t = "projects",
      r = c(e, t),
      s = f.call(this, t);
    return s.prototype = l.call(this, ["shots"]), new s(r);
  }, e.jribbble.setToken = function (e) {
    return n = e, this;
  };
}(jQuery, window, document);
/******/ })()
;