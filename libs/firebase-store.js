  ! function(t, e) { "object" == typeof exports && "undefined" != typeof module ? e(require("@firebase/app")) : "function" == typeof define && define.amd ? define(["@firebase/app"], e) : e((t = "undefined" != typeof globalThis ? globalThis : t || self).firebase) }(this, function(cm) { "use strict"; try {! function() {
              function t(t) { return t && "object" == typeof t && "default" in t ? t : { default: t } } var e = t(cm),
                  r = function(t, e) { return (r = Object.setPrototypeOf || { __proto__: [] }
                          instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]) })(t, e) };

              function n(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");

                  function n() { this.constructor = t }
                  r(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n) } var o = function() { return (o = Object.assign || function(t) { for (var e, n = 1, r = arguments.length; n < r; n++)
                          for (var i in e = arguments[n]) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]); return t }).apply(this, arguments) };

              function y(t, s, a, u) { return new(a = a || Promise)(function(n, e) {
                      function r(t) { try { o(u.next(t)) } catch (t) { e(t) } }

                      function i(t) { try { o(u.throw(t)) } catch (t) { e(t) } }

                      function o(t) { var e;
                          t.done ? n(t.value) : ((e = t.value) instanceof a ? e : new a(function(t) { t(e) })).then(r, i) }
                      o((u = u.apply(t, s || [])).next()) }) }

              function g(n, r) { var i, o, s, a = { label: 0, sent: function() { if (1 & s[0]) throw s[1]; return s[1] }, trys: [], ops: [] },
                      t = { next: e(0), throw: e(1), return: e(2) }; return "function" == typeof Symbol && (t[Symbol.iterator] = function() { return this }), t;

                  function e(e) { return function(t) { return function(e) { if (i) throw new TypeError("Generator is already executing."); for (; a;) try { if (i = 1, o && (s = 2 & e[0] ? o.return : e[0] ? o.throw || ((s = o.return) && s.call(o), 0) : o.next) && !(s = s.call(o, e[1])).done) return s; switch (o = 0, (e = s ? [2 & e[0], s.value] : e)[0]) {
                                      case 0:
                                      case 1:
                                          s = e; break;
                                      case 4:
                                          return a.label++, { value: e[1], done: !1 };
                                      case 5:
                                          a.label++, o = e[1], e = [0]; continue;
                                      case 7:
                                          e = a.ops.pop(), a.trys.pop(); continue;
                                      default:
                                          if (!(s = 0 < (s = a.trys).length && s[s.length - 1]) && (6 === e[0] || 2 === e[0])) { a = 0; continue } if (3 === e[0] && (!s || e[1] > s[0] && e[1] < s[3])) { a.label = e[1]; break } if (6 === e[0] && a.label < s[1]) { a.label = s[1], s = e; break } if (s && a.label < s[2]) { a.label = s[2], a.ops.push(e); break }
                                          s[2] && a.ops.pop(), a.trys.pop(); continue }
                                  e = r.call(n, a) } catch (t) { e = [6, t], o = 0 } finally { i = s = 0 }
                              if (5 & e[0]) throw e[1]; return { value: e[0] ? e[1] : void 0, done: !0 } }([e, t]) } } }

              function s(t, e) { for (var n = 0, r = e.length, i = t.length; n < r; n++, i++) t[i] = e[n]; return t } var a = { byteToCharMap_: null, charToByteMap_: null, byteToCharMapWebSafe_: null, charToByteMapWebSafe_: null, ENCODED_VALS_BASE: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", get ENCODED_VALS() { return this.ENCODED_VALS_BASE + "+/=" }, get ENCODED_VALS_WEBSAFE() { return this.ENCODED_VALS_BASE + "-_." }, HAS_NATIVE_SUPPORT: "function" == typeof atob, encodeByteArray: function(t, e) { if (!Array.isArray(t)) throw Error("encodeByteArray takes an array as a parameter");
                      this.init_(); for (var n = e ? this.byteToCharMapWebSafe_ : this.byteToCharMap_, r = [], i = 0; i < t.length; i += 3) { var o = t[i],
                              s = i + 1 < t.length,
                              a = s ? t[i + 1] : 0,
                              u = i + 2 < t.length,
                              c = u ? t[i + 2] : 0,
                              h = o >> 2,
                              o = (3 & o) << 4 | a >> 4,
                              a = (15 & a) << 2 | c >> 6,
                              c = 63 & c;
                          u || (c = 64, s || (a = 64)), r.push(n[h], n[o], n[a], n[c]) } return r.join("") }, encodeString: function(t, e) { return this.HAS_NATIVE_SUPPORT && !e ? btoa(t) : this.encodeByteArray(function(t) { for (var e = [], n = 0, r = 0; r < t.length; r++) { var i = t.charCodeAt(r);
                              i < 128 ? e[n++] = i : (i < 2048 ? e[n++] = i >> 6 | 192 : (55296 == (64512 & i) && r + 1 < t.length && 56320 == (64512 & t.charCodeAt(r + 1)) ? (i = 65536 + ((1023 & i) << 10) + (1023 & t.charCodeAt(++r)), e[n++] = i >> 18 | 240, e[n++] = i >> 12 & 63 | 128) : e[n++] = i >> 12 | 224, e[n++] = i >> 6 & 63 | 128), e[n++] = 63 & i | 128) } return e }(t), e) }, decodeString: function(t, e) { return this.HAS_NATIVE_SUPPORT && !e ? atob(t) : function(t) { for (var e = [], n = 0, r = 0; n < t.length;) { var i, o, s, a = t[n++];
                              a < 128 ? e[r++] = String.fromCharCode(a) : 191 < a && a < 224 ? (o = t[n++], e[r++] = String.fromCharCode((31 & a) << 6 | 63 & o)) : 239 < a && a < 365 ? (i = ((7 & a) << 18 | (63 & (o = t[n++])) << 12 | (63 & (s = t[n++])) << 6 | 63 & t[n++]) - 65536, e[r++] = String.fromCharCode(55296 + (i >> 10)), e[r++] = String.fromCharCode(56320 + (1023 & i))) : (o = t[n++], s = t[n++], e[r++] = String.fromCharCode((15 & a) << 12 | (63 & o) << 6 | 63 & s)) } return e.join("") }(this.decodeStringToByteArray(t, e)) }, decodeStringToByteArray: function(t, e) { this.init_(); for (var n = e ? this.charToByteMapWebSafe_ : this.charToByteMap_, r = [], i = 0; i < t.length;) { var o = n[t.charAt(i++)],
                              s = i < t.length ? n[t.charAt(i)] : 0,
                              a = ++i < t.length ? n[t.charAt(i)] : 64,
                              u = ++i < t.length ? n[t.charAt(i)] : 64; if (++i, null == o || null == s || null == a || null == u) throw Error();
                          o = o << 2 | s >> 4;
                          r.push(o), 64 !== a && (s = s << 4 & 240 | a >> 2, r.push(s), 64 !== u && (u = a << 6 & 192 | u, r.push(u))) } return r }, init_: function() { if (!this.byteToCharMap_) { this.byteToCharMap_ = {}, this.charToByteMap_ = {}, this.byteToCharMapWebSafe_ = {}, this.charToByteMapWebSafe_ = {}; for (var t = 0; t < this.ENCODED_VALS.length; t++) this.byteToCharMap_[t] = this.ENCODED_VALS.charAt(t), this.charToByteMap_[this.byteToCharMap_[t]] = t, this.byteToCharMapWebSafe_[t] = this.ENCODED_VALS_WEBSAFE.charAt(t), (this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]] = t) >= this.ENCODED_VALS_BASE.length && (this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)] = t, this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)] = t) } } };

              function h() { return "undefined" != typeof navigator && "string" == typeof navigator.userAgent ? navigator.userAgent : "" } var i, u = "FirebaseError",
                  c = (n(l, i = Error), l);

              function l(t, e, n) { e = i.call(this, e) || this; return e.code = t, e.customData = n, e.name = u, Object.setPrototypeOf(e, l.prototype), Error.captureStackTrace && Error.captureStackTrace(e, f.prototype.create), e } var f = (d.prototype.create = function(t) { for (var e = [], n = 1; n < arguments.length; n++) e[n - 1] = arguments[n]; var r, i = e[0] || {},
                      o = this.service + "/" + t,
                      t = this.errors[t],
                      t = t ? (r = i, t.replace(m, function(t, e) { var n = r[e]; return null != n ? String(n) : "<" + e + "?>" })) : "Error",
                      t = this.serviceName + ": " + t + " (" + o + ")."; return new c(o, t, i) }, d);

              function d(t, e, n) { this.service = t, this.serviceName = e, this.errors = n } var p, m = /\{\$([^}]+)}/g;

              function v(t) { return t && t._delegate ? t._delegate : t }(_e = p = p || {})[_e.DEBUG = 0] = "DEBUG", _e[_e.VERBOSE = 1] = "VERBOSE", _e[_e.INFO = 2] = "INFO", _e[_e.WARN = 3] = "WARN", _e[_e.ERROR = 4] = "ERROR", _e[_e.SILENT = 5] = "SILENT";

              function b(t, e) { for (var n = [], r = 2; r < arguments.length; r++) n[r - 2] = arguments[r]; if (!(e < t.logLevel)) { var i = (new Date).toISOString(),
                          o = T[e]; if (!o) throw new Error("Attempted to log a message with an invalid logType (value: " + e + ")");
                      console[o].apply(console, s(["[" + i + "]  " + t.name + ":"], n)) } } var w = { debug: p.DEBUG, verbose: p.VERBOSE, info: p.INFO, warn: p.WARN, error: p.ERROR, silent: p.SILENT },
                  E = p.INFO,
                  T = ((Se = {})[p.DEBUG] = "log", Se[p.VERBOSE] = "log", Se[p.INFO] = "info", Se[p.WARN] = "warn", Se[p.ERROR] = "error", Se),
                  I = (Object.defineProperty(_.prototype, "logLevel", { get: function() { return this._logLevel }, set: function(t) { if (!(t in p)) throw new TypeError('Invalid value "' + t + '" assigned to `logLevel`');
                          this._logLevel = t }, enumerable: !1, configurable: !0 }), _.prototype.setLogLevel = function(t) { this._logLevel = "string" == typeof t ? w[t] : t }, Object.defineProperty(_.prototype, "logHandler", { get: function() { return this._logHandler }, set: function(t) { if ("function" != typeof t) throw new TypeError("Value assigned to `logHandler` must be a function");
                          this._logHandler = t }, enumerable: !1, configurable: !0 }), Object.defineProperty(_.prototype, "userLogHandler", { get: function() { return this._userLogHandler }, set: function(t) { this._userLogHandler = t }, enumerable: !1, configurable: !0 }), _.prototype.debug = function() { for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                      this._userLogHandler && this._userLogHandler.apply(this, s([this, p.DEBUG], t)), this._logHandler.apply(this, s([this, p.DEBUG], t)) }, _.prototype.log = function() { for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                      this._userLogHandler && this._userLogHandler.apply(this, s([this, p.VERBOSE], t)), this._logHandler.apply(this, s([this, p.VERBOSE], t)) }, _.prototype.info = function() { for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                      this._userLogHandler && this._userLogHandler.apply(this, s([this, p.INFO], t)), this._logHandler.apply(this, s([this, p.INFO], t)) }, _.prototype.warn = function() { for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                      this._userLogHandler && this._userLogHandler.apply(this, s([this, p.WARN], t)), this._logHandler.apply(this, s([this, p.WARN], t)) }, _.prototype.error = function() { for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                      this._userLogHandler && this._userLogHandler.apply(this, s([this, p.ERROR], t)), this._logHandler.apply(this, s([this, p.ERROR], t)) }, _);

              function _(t) { this.name = t, this._logLevel = E, this._logHandler = b, this._userLogHandler = null } var S = function(t, e) { return (S = Object.setPrototypeOf || { __proto__: [] }
                      instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]) })(t, e) };

              function A(t) { var e = "function" == typeof Symbol && Symbol.iterator,
                      n = e && t[e],
                      r = 0; if (n) return n.call(t); if (t && "number" == typeof t.length) return { next: function() { return { value: (t = t && r >= t.length ? void 0 : t) && t[r++], done: !t } } }; throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.") } var N, D = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
                  C = {},
                  k = D || self;

              function R() {}

              function x(t) { var e = typeof t; return "array" == (e = "object" != e ? e : t ? Array.isArray(t) ? "array" : e : "null") || "object" == e && "number" == typeof t.length }

              function O(t) { var e = typeof t; return "object" == e && null != t || "function" == e } var L = "closure_uid_" + (1e9 * Math.random() >>> 0),
                  P = 0;

              function M(t, e, n) { return t.call.apply(t.bind, arguments) }

              function F(e, n, t) { if (!e) throw Error(); if (2 < arguments.length) { var r = Array.prototype.slice.call(arguments, 2); return function() { var t = Array.prototype.slice.call(arguments); return Array.prototype.unshift.apply(t, r), e.apply(n, t) } } return function() { return e.apply(n, arguments) } }

              function V(t, e, n) { return (V = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? M : F).apply(null, arguments) }

              function U(e) { var n = Array.prototype.slice.call(arguments, 1); return function() { var t = n.slice(); return t.push.apply(t, arguments), e.apply(this, t) } }

              function q() { return Date.now() }

              function B(t, o) {
                  function e() {}
                  e.prototype = o.prototype, t.X = o.prototype, t.prototype = new e, (t.prototype.constructor = t).Kb = function(t, e, n) { for (var r = Array(arguments.length - 2), i = 2; i < arguments.length; i++) r[i - 2] = arguments[i]; return o.prototype[e].apply(t, r) } }

              function j() { this.j = this.j, this.i = this.i }
              j.prototype.j = !1, j.prototype.ja = function() { var t;!this.j && (this.j = !0, this.G(), 0) && (t = this, Object.prototype.hasOwnProperty.call(t, L) && t[L] || (t[L] = ++P)) }, j.prototype.G = function() { if (this.i)
                      for (; this.i.length;) this.i.shift()() }; var K = Array.prototype.indexOf ? function(t, e) { return Array.prototype.indexOf.call(t, e, void 0) } : function(t, e) { if ("string" == typeof t) return "string" != typeof e || 1 != e.length ? -1 : t.indexOf(e, 0); for (var n = 0; n < t.length; n++)
                          if (n in t && t[n] === e) return n;
                      return -1 },
                  G = Array.prototype.forEach ? function(t, e, n) { Array.prototype.forEach.call(t, e, n) } : function(t, e, n) { for (var r = t.length, i = "string" == typeof t ? t.split("") : t, o = 0; o < r; o++) o in i && e.call(n, i[o], o, t) };

              function Q() { return Array.prototype.concat.apply([], arguments) }

              function z(t) { var e = t.length; if (0 < e) { for (var n = Array(e), r = 0; r < e; r++) n[r] = t[r]; return n } return [] }

              function H(t) { return /^[\s\xa0]*$/.test(t) } var W, Y = String.prototype.trim ? function(t) { return t.trim() } : function(t) { return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1] };

              function X(t, e) { return -1 != t.indexOf(e) }

              function J(t, e) { return t < e ? -1 : e < t ? 1 : 0 }
              t: { var $ = k.navigator; if ($) { $ = $.userAgent; if ($) { W = $; break t } }
                  W = "" }

              function Z(t, e, n) { for (var r in t) e.call(n, t[r], r, t) }

              function tt(t) { var e, n = {}; for (e in t) n[e] = t[e]; return n } var et = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");

              function nt(t) { for (var e, n, r = 1; r < arguments.length; r++) { for (e in n = arguments[r]) t[e] = n[e]; for (var i = 0; i < et.length; i++) e = et[i], Object.prototype.hasOwnProperty.call(n, e) && (t[e] = n[e]) } }

              function rt(t) { return rt[" "](t), t }
              rt[" "] = R; var it, ot = X(W, "Opera"),
                  st = X(W, "Trident") || X(W, "MSIE"),
                  at = X(W, "Edge"),
                  ut = at || st,
                  ct = X(W, "Gecko") && !(X(W.toLowerCase(), "webkit") && !X(W, "Edge")) && !(X(W, "Trident") || X(W, "MSIE")) && !X(W, "Edge"),
                  ht = X(W.toLowerCase(), "webkit") && !X(W, "Edge");

              function lt() { var t = k.document; return t ? t.documentMode : void 0 }
              t: { var ft = "",
                      dt = (dt = W, ct ? /rv:([^\);]+)(\)|;)/.exec(dt) : at ? /Edge\/([\d\.]+)/.exec(dt) : st ? /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(dt) : ht ? /WebKit\/(\S+)/.exec(dt) : ot ? /(?:Version)[ \/]?(\S+)/.exec(dt) : void 0); if (dt && (ft = dt ? dt[1] : ""), st) { dt = lt(); if (null != dt && dt > parseFloat(ft)) { it = String(dt); break t } }
                  it = ft }
              var pt = {};

              function yt(a) { return t = a, e = function() { for (var t = 0, e = Y(String(it)).split("."), n = Y(String(a)).split("."), r = Math.max(e.length, n.length), i = 0; 0 == t && i < r; i++)
                          for (var o = e[i] || "", s = n[i] || ""; o = /(\d*)(\D*)(.*)/.exec(o) || ["", "", "", ""], s = /(\d*)(\D*)(.*)/.exec(s) || ["", "", "", ""], (0 != o[0].length || 0 != s[0].length) && (t = J(0 == o[1].length ? 0 : parseInt(o[1], 10), 0 == s[1].length ? 0 : parseInt(s[1], 10)) || J(0 == o[2].length, 0 == s[2].length) || J(o[2], s[2]), o = o[3], s = s[3], 0 == t);); return 0 <= t }, n = pt, Object.prototype.hasOwnProperty.call(n, t) ? n[t] : n[t] = e(t); var t, e, n } var gt = k.document && st && (lt() || parseInt(it, 10)) || void 0,
                  mt = !st || 9 <= Number(gt),
                  vt = st && !yt("9"),
                  bt = function() { if (!k.addEventListener || !Object.defineProperty) return !1; var t = !1,
                          e = Object.defineProperty({}, "passive", { get: function() { t = !0 } }); try { k.addEventListener("test", R, e), k.removeEventListener("test", R, e) } catch (t) {} return t }();

              function wt(t, e) { this.type = t, this.a = this.target = e, this.defaultPrevented = !1 }

              function Et(t, e) { if (wt.call(this, t ? t.type : ""), this.relatedTarget = this.a = this.target = null, this.button = this.screenY = this.screenX = this.clientY = this.clientX = 0, this.key = "", this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1, this.pointerId = 0, this.pointerType = "", this.c = null, t) { var n = this.type = t.type,
                          r = t.changedTouches && t.changedTouches.length ? t.changedTouches[0] : null; if (this.target = t.target || t.srcElement, this.a = e, e = t.relatedTarget) { if (ct) { t: { try { rt(e.nodeName); var i = !0; break t } catch (t) {}
                                  i = !1 }
                              i || (e = null) } } else "mouseover" == n ? e = t.fromElement : "mouseout" == n && (e = t.toElement);
                      this.relatedTarget = e, r ? (this.clientX = void 0 !== r.clientX ? r.clientX : r.pageX, this.clientY = void 0 !== r.clientY ? r.clientY : r.pageY, this.screenX = r.screenX || 0, this.screenY = r.screenY || 0) : (this.clientX = void 0 !== t.clientX ? t.clientX : t.pageX, this.clientY = void 0 !== t.clientY ? t.clientY : t.pageY, this.screenX = t.screenX || 0, this.screenY = t.screenY || 0), this.button = t.button, this.key = t.key || "", this.ctrlKey = t.ctrlKey, this.altKey = t.altKey, this.shiftKey = t.shiftKey, this.metaKey = t.metaKey, this.pointerId = t.pointerId || 0, this.pointerType = "string" == typeof t.pointerType ? t.pointerType : Tt[t.pointerType] || "", (this.c = t).defaultPrevented && this.b() } }
              wt.prototype.b = function() { this.defaultPrevented = !0 }, B(Et, wt); var Tt = { 2: "touch", 3: "pen", 4: "mouse" };
              Et.prototype.b = function() { Et.X.b.call(this); var t = this.c; if (t.preventDefault) t.preventDefault();
                  else if (t.returnValue = !1, vt) try {
                      (t.ctrlKey || 112 <= t.keyCode && t.keyCode <= 123) && (t.keyCode = -1) } catch (t) {} }; var It = "closure_listenable_" + (1e6 * Math.random() | 0),
                  _t = 0;

              function St(t, e, n, r, i) { this.listener = t, this.proxy = null, this.src = e, this.type = n, this.capture = !!r, this.ca = i, this.key = ++_t, this.Y = this.Z = !1 }

              function At(t) { t.Y = !0, t.listener = null, t.proxy = null, t.src = null, t.ca = null }

              function Nt(t) { this.src = t, this.a = {}, this.b = 0 }

              function Dt(t, e) { var n, r, i, o = e.type;
                  o in t.a && (n = t.a[o], (i = 0 <= (r = K(n, e))) && Array.prototype.splice.call(n, r, 1), i && (At(e), 0 == t.a[o].length && (delete t.a[o], t.b--))) }

              function Ct(t, e, n, r) { for (var i = 0; i < t.length; ++i) { var o = t[i]; if (!o.Y && o.listener == e && o.capture == !!n && o.ca == r) return i } return -1 }
              Nt.prototype.add = function(t, e, n, r, i) { var o = t.toString();
                  (t = this.a[o]) || (t = this.a[o] = [], this.b++); var s = Ct(t, e, r, i); return -1 < s ? (e = t[s], n || (e.Z = !1)) : ((e = new St(e, this.src, o, !!r, i)).Z = n, t.push(e)), e }; var kt = "closure_lm_" + (1e6 * Math.random() | 0),
                  Rt = {};

              function xt(t, e, n, r, i) { if (r && r.once) return function t(e, n, r, i, o) { if (Array.isArray(n)) { for (var s = 0; s < n.length; s++) t(e, n[s], r, i, o); return null }
                      r = qt(r); return e && e[It] ? e.wa(n, r, O(i) ? !!i.capture : !!i, o) : Ot(e, n, r, !0, i, o) }(t, e, n, r, i); if (Array.isArray(e)) { for (var o = 0; o < e.length; o++) xt(t, e[o], n, r, i); return null } return n = qt(n), t && t[It] ? t.va(e, n, O(r) ? !!r.capture : !!r, i) : Ot(t, e, n, !1, r, i) }

              function Ot(t, e, n, r, i, o) { if (!e) throw Error("Invalid event type"); var s = O(i) ? !!i.capture : !!i; if (s && !mt) return null; var a, u, c = Vt(t); if (c || (t[kt] = c = new Nt(t)), (n = c.add(e, n, r, s, o)).proxy) return n; if (a = Ft, r = u = mt ? function(t) { return a.call(u.src, u.listener, t) } : function(t) { if (!(t = a.call(u.src, u.listener, t))) return t }, (n.proxy = r).src = t, r.listener = n, t.addEventListener) void 0 === (i = !bt ? s : i) && (i = !1), t.addEventListener(e.toString(), r, i);
                  else if (t.attachEvent) t.attachEvent(Pt(e.toString()), r);
                  else { if (!t.addListener || !t.removeListener) throw Error("addEventListener and attachEvent are unavailable.");
                      t.addListener(r) } return n }

              function Lt(t) { var e, n, r; "number" != typeof t && t && !t.Y && ((e = t.src) && e[It] ? Dt(e.c, t) : (n = t.type, r = t.proxy, e.removeEventListener ? e.removeEventListener(n, r, t.capture) : e.detachEvent ? e.detachEvent(Pt(n), r) : e.addListener && e.removeListener && e.removeListener(r), (n = Vt(e)) ? (Dt(n, t), 0 == n.b && (n.src = null, e[kt] = null)) : At(t))) }

              function Pt(t) { return t in Rt ? Rt[t] : Rt[t] = "on" + t }

              function Mt(t, e) { var n = t.listener,
                      r = t.ca || t.src; return t.Z && Lt(t), n.call(r, e) }

              function Ft(t, e) { if (t.Y) return !0; if (mt) return Mt(t, new Et(e, this)); if (!e) t: { e = ["window", "event"]; for (var n = k, r = 0; r < e.length; r++)
                          if (null == (n = n[e[r]])) { e = null; break t }
                      e = n }
                  return Mt(t, e = new Et(e, this)) }

              function Vt(t) { return (t = t[kt]) instanceof Nt ? t : null } var Ut = "__closure_events_fn_" + (1e9 * Math.random() >>> 0);

              function qt(e) { return "function" == typeof e ? e : (e[Ut] || (e[Ut] = function(t) { return e.handleEvent(t) }), e[Ut]) }

              function Bt() { j.call(this), this.c = new Nt(this), (this.J = this).C = null }

              function jt(t, e) { var n, r = t.C; if (r)
                      for (n = []; r; r = r.C) n.push(r); if (t = t.J, r = e.type || e, "string" == typeof e ? e = new wt(e, t) : e instanceof wt ? e.target = e.target || t : (s = e, nt(e = new wt(r, t), s)), s = !0, n)
                      for (var i = n.length - 1; 0 <= i; i--) var o = e.a = n[i],
                          s = Kt(o, r, !0, e) && s; if (s = Kt(o = e.a = t, r, !0, e) && s, s = Kt(o, r, !1, e) && s, n)
                      for (i = 0; i < n.length; i++) s = Kt(o = e.a = n[i], r, !1, e) && s }

              function Kt(t, e, n, r) { if (!(e = t.c.a[String(e)])) return !0;
                  e = e.concat(); for (var i = !0, o = 0; o < e.length; ++o) { var s, a, u = e[o];
                      u && !u.Y && u.capture == n && (s = u.listener, a = u.ca || u.src, u.Z && Dt(t.c, u), i = !1 !== s.call(a, r) && i) } return i && !r.defaultPrevented }
              B(Bt, j), Bt.prototype[It] = !0, (N = Bt.prototype).addEventListener = function(t, e, n, r) { xt(this, t, e, n, r) }, N.removeEventListener = function(t, e, n, r) {! function t(e, n, r, i, o) { if (Array.isArray(n))
                          for (var s = 0; s < n.length; s++) t(e, n[s], r, i, o);
                      else i = O(i) ? !!i.capture : !!i, r = qt(r), e && e[It] ? (e = e.c, (n = String(n).toString()) in e.a && -1 < (r = Ct(s = e.a[n], r, i, o)) && (At(s[r]), Array.prototype.splice.call(s, r, 1), 0 == s.length && (delete e.a[n], e.b--))) : (e = e && Vt(e)) && (n = e.a[n.toString()], (r = (e = -1) < (e = n ? Ct(n, r, i, o) : e) ? n[e] : null) && Lt(r)) }(this, t, e, n, r) }, N.G = function() { if (Bt.X.G.call(this), this.c) { var t, e = this.c; for (t in e.a) { for (var n = e.a[t], r = 0; r < n.length; r++) At(n[r]);
                          delete e.a[t], e.b-- } }
                  this.C = null }, N.va = function(t, e, n, r) { return this.c.add(String(t), e, !1, n, r) }, N.wa = function(t, e, n, r) { return this.c.add(String(t), e, !0, n, r) }; var Gt = k.JSON.stringify;

              function Qt() { this.b = this.a = null } var zt, Ht = (Wt.prototype.get = function() { var t; return 0 < this.b ? (this.b--, t = this.a, this.a = t.next, t.next = null) : t = this.c(), t }, new Wt(function() { return new Yt }, function(t) { t.reset() }));

              function Wt(t, e) { this.c = t, this.f = e, this.b = 0, this.a = null }

              function Yt() { this.next = this.b = this.a = null }

              function Xt(t, e) { var n;
                  zt || (n = k.Promise.resolve(void 0), zt = function() { n.then(Zt) }), Jt || (zt(), Jt = !0), $t.add(t, e) }
              Qt.prototype.add = function(t, e) { var n = Ht.get();
                  n.set(t, e), this.b ? this.b.next = n : this.a = n, this.b = n }, Yt.prototype.set = function(t, e) { this.a = t, this.b = e, this.next = null }; var Jt = !(Yt.prototype.reset = function() { this.next = this.b = this.a = null }),
                  $t = new Qt;

              function Zt() { for (var t, e; n = e = void 0, n = null, (e = $t).a && (n = e.a, e.a = e.a.next, e.a || (e.b = null), n.next = null), t = n;) { try { t.a.call(t.b) } catch (t) {! function(t) { k.setTimeout(function() { throw t }, 0) }(t) } var n = Ht;
                      n.f(t), n.b < 100 && (n.b++, t.next = n.a, n.a = t) }
                  Jt = !1 }

              function te(t, e) { Bt.call(this), this.b = t || 1, this.a = e || k, this.f = V(this.Za, this), this.g = q() }

              function ee(t) { t.aa = !1, t.M && (t.a.clearTimeout(t.M), t.M = null) }

              function ne(t, e, n) { if ("function" == typeof t) n && (t = V(t, n));
                  else { if (!t || "function" != typeof t.handleEvent) throw Error("Invalid listener argument");
                      t = V(t.handleEvent, t) } return 2147483647 < Number(e) ? -1 : k.setTimeout(t, e || 0) }
              B(te, Bt), (N = te.prototype).aa = !1, N.M = null, N.Za = function() { var t;
                  this.aa && (0 < (t = q() - this.g) && t < .8 * this.b ? this.M = this.a.setTimeout(this.f, this.b - t) : (this.M && (this.a.clearTimeout(this.M), this.M = null), jt(this, "tick"), this.aa && (ee(this), this.start()))) }, N.start = function() { this.aa = !0, this.M || (this.M = this.a.setTimeout(this.f, this.b), this.g = q()) }, N.G = function() { te.X.G.call(this), ee(this), delete this.a }; var re, ie, oe, se = (S(ie = ue, oe = re = j), ie.prototype = null === oe ? Object.create(oe) : (ae.prototype = oe.prototype, new ae), ue.prototype.f = function(t) { this.b = arguments, this.a ? this.c = !0 : function t(e) { e.a = ne(function() { e.a = null, e.c && (e.c = !1, t(e)) }, e.h); var n = e.b;
                      e.b = null, e.g.apply(null, n) }(this) }, ue.prototype.G = function() { re.prototype.G.call(this), this.a && (k.clearTimeout(this.a), this.a = null, this.c = !1, this.b = null) }, ue);

              function ae() { this.constructor = ie }

              function ue(t, e) { var n = re.call(this) || this; return n.g = t, n.h = e, n.b = null, n.c = !1, n.a = null, n }

              function ce(t) { j.call(this), this.b = t, this.a = {} }
              B(ce, j); var he = [];

              function le(t, e, n, r) { Array.isArray(n) || (n && (he[0] = n.toString()), n = he); for (var i = 0; i < n.length; i++) { var o = xt(e, n[i], r || t.handleEvent, !1, t.b || t); if (!o) break;
                      t.a[o.key] = o } }

              function fe(t) { Z(t.a, function(t, e) { this.a.hasOwnProperty(e) && Lt(t) }, t), t.a = {} }

              function de() { this.a = !0 }

              function pe(t, e, n, r) { t.info(function() { return "XMLHTTP TEXT (" + e + "): " + function(t, e) { if (!t.a) return e; if (!e) return null; try { var n = JSON.parse(e); if (n)
                                  for (t = 0; t < n.length; t++)
                                      if (Array.isArray(n[t])) { var r = n[t]; if (!(r.length < 2)) { var i = r[1]; if (Array.isArray(i) && !(i.length < 1)) { r = i[0]; if ("noop" != r && "stop" != r && "close" != r)
                                                      for (var o = 1; o < i.length; o++) i[o] = "" } } }
                              return Gt(n) } catch (t) { return e } }(t, n) + (r ? " " + r : "") }) }
              ce.prototype.G = function() { ce.X.G.call(this), fe(this) }, ce.prototype.handleEvent = function() { throw Error("EventHandler.handleEvent not implemented") }, de.prototype.info = function() {}; var ye = {},
                  ge = null;

              function me() { return ge = ge || new Bt }

              function ve(t) { wt.call(this, ye.Fa, t) }

              function be(t) { var e = me();
                  jt(e, new ve(e)) }

              function we(t, e) { wt.call(this, ye.STAT_EVENT, t), this.stat = e }

              function Ee(t) { var e = me();
                  jt(e, new we(e, t)) }

              function Te(t) { wt.call(this, ye.Ga, t) }

              function Ie(t, e) { if ("function" != typeof t) throw Error("Fn must not be null and must be a function"); return k.setTimeout(function() { t() }, e) }
              ye.Fa = "serverreachability", B(ve, wt), ye.STAT_EVENT = "statevent", B(we, wt), ye.Ga = "timingevent", B(Te, wt); var _e = { NO_ERROR: 0, $a: 1, nb: 2, mb: 3, hb: 4, lb: 5, ob: 6, Da: 7, TIMEOUT: 8, rb: 9 },
                  Se = { fb: "complete", Bb: "success", Ea: "error", Da: "abort", tb: "ready", ub: "readystatechange", TIMEOUT: "timeout", pb: "incrementaldata", sb: "progress", ib: "downloadprogress", Jb: "uploadprogress" };

              function Ae() {}

              function Ne(t) { var e; return e = !(e = t.a) ? t.a = {} : e }

              function De() {}
              Ae.prototype.a = null;
              D = { OPEN: "a", eb: "b", Ea: "c", qb: "d" };

              function Ce() { wt.call(this, "d") }

              function ke() { wt.call(this, "c") }

              function Re() {}

              function xe(t, e, n, r) { this.g = t, this.c = e, this.f = n, this.S = r || 1, this.J = new ce(this), this.P = Le, t = ut ? 125 : void 0, this.R = new te(t), this.B = null, this.b = !1, this.j = this.l = this.i = this.H = this.u = this.T = this.o = null, this.s = [], this.a = null, this.D = 0, this.h = this.m = null, this.N = -1, this.A = !1, this.O = 0, this.F = null, this.V = this.C = this.U = this.I = !1 }
              B(Ce, wt), B(ke, wt), B(Re, Ae); var Oe = new Re,
                  Le = 45e3,
                  Pe = {},
                  Me = {};

              function Fe(t, e, n) { t.H = 1, t.i = on($e(e)), t.j = n, t.I = !0, Ve(t, null) }

              function Ve(t, e) { t.u = q(), qe(t), t.l = $e(t.i); var s, a, u, c, h, l, n = t.l,
                      r = t.S;
                  Array.isArray(r) || (r = [String(r)]), vn(n.b, "t", r), t.D = 0, t.a = lr(t.g, t.g.C ? e : null), 0 < t.O && (t.F = new se(V(t.Ca, t, t.a), t.O)), le(t.J, t.a, "readystatechange", t.Xa), e = t.B ? tt(t.B) : {}, t.j ? (t.m || (t.m = "POST"), e["Content-Type"] = "application/x-www-form-urlencoded", t.a.ba(t.l, t.m, t.j, e)) : (t.m = "GET", t.a.ba(t.l, t.m, null, e)), be(1), s = t.c, a = t.m, u = t.l, c = t.f, h = t.S, l = t.j, s.info(function() { if (s.a)
                          if (l)
                              for (var t = "", e = l.split("&"), n = 0; n < e.length; n++) { var r, i, o = e[n].split("=");
                                  1 < o.length && (r = o[0], o = o[1], t = 2 <= (i = r.split("_")).length && "type" == i[1] ? t + (r + "=") + o + "&" : t + (r + "=redacted&")) } else t = null;
                          else t = l;
                      return "XMLHTTP REQ (" + c + ") [attempt " + h + "]: " + a + "\n" + u + "\n" + t }) }

              function Ue(t, e, n) { for (var r, i, o, s = !0; !t.A && t.D < n.length;) { var a = (a = n, o = i = void 0, i = (r = t).D, -1 == (o = a.indexOf("\n", i)) ? Me : (i = Number(a.substring(i, o)), isNaN(i) ? Pe : (o += 1) + i > a.length ? Me : (a = a.substr(o, i), r.D = o + i, a))); if (a == Me) { 4 == e && (t.h = 4, Ee(14), s = !1), pe(t.c, t.f, null, "[Incomplete Response]"); break } if (a == Pe) { t.h = 4, Ee(15), pe(t.c, t.f, n, "[Invalid Chunk]"), s = !1; break }
                      pe(t.c, t.f, a, null), Qe(t, a) }
                  4 == e && 0 == n.length && (t.h = 1, Ee(16), s = !1), t.b = t.b && s, s ? 0 < n.length && !t.V && (t.V = !0, (e = t.g).a == t && e.U && !e.F && (e.c.info("Great, no buffering proxy detected. Bytes received: " + n.length), rr(e), e.F = !0, Ee(11))) : (pe(t.c, t.f, n, "[Invalid Chunked Response]"), Ge(t), Ke(t)) }

              function qe(t) { t.T = q() + t.P, Be(t, t.P) }

              function Be(t, e) { if (null != t.o) throw Error("WatchDog timer not null");
                  t.o = Ie(V(t.Va, t), e) }

              function je(t) { t.o && (k.clearTimeout(t.o), t.o = null) }

              function Ke(t) { 0 == t.g.v || t.A || sr(t.g, t) }

              function Ge(t) { je(t); var e = t.F;
                  e && "function" == typeof e.ja && e.ja(), t.F = null, ee(t.R), fe(t.J), t.a && (e = t.a, t.a = null, e.abort(), e.ja()) }

              function Qe(t, e) { try { var n, r, i, o, s, a = t.g; if (0 != a.v && (a.a == t || Sn(a.b, t)))
                          if (a.I = t.N, !t.C && Sn(a.b, t) && 3 == a.v) { try { var u = a.ka.a.parse(e) } catch (t) { u = null } if (Array.isArray(u) && 3 == u.length) { var c = u; if (0 == c[0]) { t: if (!a.j) { if (a.a) { if (!(a.a.u + 3e3 < t.u)) break t;
                                              or(a), Wn(a) }
                                          nr(a), Ee(18) } }
                                  else a.oa = c[1], 0 < a.oa - a.P && c[2] < 37500 && a.H && 0 == a.o && !a.m && (a.m = Ie(V(a.Sa, a), 6e3)); if (_n(a.b) <= 1 && a.ea) { try { a.ea() } catch (t) {}
                                      a.ea = void 0 } } else ur(a, 11) } else if (!t.C && a.a != t || or(a), !H(e))
                          for (e = u = a.ka.a.parse(e), u = 0; u < e.length; u++) c = e[u], a.P = c[0], c = c[1], 2 == a.v ? "c" == c[0] ? (a.J = c[1], a.ga = c[2], null != (r = c[3]) && (a.ha = r, a.c.info("VER=" + a.ha)), null != (o = c[4]) && (a.pa = o, a.c.info("SVER=" + a.pa)), null != (r = c[5]) && "number" == typeof r && 0 < r && (n = 1.5 * r, a.D = n, a.c.info("backChannelRequestTimeoutMs_=" + n)), n = a, (o = t.a) && (!(r = o.a ? o.a.getResponseHeader("X-Client-Wire-Protocol") : null) || !(i = n.b).a && (X(r, "spdy") || X(r, "quic") || X(r, "h2")) && (i.f = i.g, i.a = new Set, i.b && (An(i, i.b), i.b = null)), !n.A || (s = o.a ? o.a.getResponseHeader("X-HTTP-Session-Id") : null) && (n.na = s, rn(n.B, n.A, s))), a.v = 3, a.f && a.f.ta(), a.U && (a.N = q() - t.u, a.c.info("Handshake RTT: " + a.N + "ms")), i = t, (n = a).la = hr(n, n.C ? n.ga : null, n.fa), i.C ? (Nn(n.b, i), o = i, (s = n.D) && o.setTimeout(s), o.o && (je(o), qe(o)), n.a = i) : er(n), 0 < a.g.length && Jn(a)) : "stop" != c[0] && "close" != c[0] || ur(a, 7) : 3 == a.v && ("stop" == c[0] || "close" == c[0] ? "stop" == c[0] ? ur(a, 7) : Hn(a) : "noop" != c[0] && a.f && a.f.sa(c), a.o = 0);
                      be(4) } catch (t) {} }

              function ze(t, e) { if (t.forEach && "function" == typeof t.forEach) t.forEach(e, void 0);
                  else if (x(t) || "string" == typeof t) G(t, e, void 0);
                  else { if (t.L && "function" == typeof t.L) var n = t.L();
                      else if (t.K && "function" == typeof t.K) n = void 0;
                      else if (x(t) || "string" == typeof t)
                          for (var n = [], r = t.length, i = 0; i < r; i++) n.push(i);
                      else
                          for (i in n = [], r = 0, t) n[r++] = i; for (var i = (r = function(t) { if (t.K && "function" == typeof t.K) return t.K(); if ("string" == typeof t) return t.split(""); if (x(t)) { for (var e = [], n = t.length, r = 0; r < n; r++) e.push(t[r]); return e } for (r in e = [], n = 0, t) e[n++] = t[r]; return e }(t)).length, o = 0; o < i; o++) e.call(void 0, r[o], n && n[o], t) } }

              function He(t, e) { this.b = {}, this.a = [], this.c = 0; var n = arguments.length; if (1 < n) { if (n % 2) throw Error("Uneven number of arguments"); for (var r = 0; r < n; r += 2) this.set(arguments[r], arguments[r + 1]) } else if (t)
                      if (t instanceof He)
                          for (n = t.L(), r = 0; r < n.length; r++) this.set(n[r], t.get(n[r]));
                      else
                          for (r in t) this.set(r, t[r]) }

              function We(t) { if (t.c != t.a.length) { for (var e = 0, n = 0; e < t.a.length;) { var r = t.a[e];
                          Ye(t.b, r) && (t.a[n++] = r), e++ }
                      t.a.length = n } if (t.c != t.a.length) { for (var i = {}, n = e = 0; e < t.a.length;) Ye(i, r = t.a[e]) || (i[t.a[n++] = r] = 1), e++;
                      t.a.length = n } }

              function Ye(t, e) { return Object.prototype.hasOwnProperty.call(t, e) }(N = xe.prototype).setTimeout = function(t) { this.P = t }, N.Xa = function(t) { t = t.target; var e = this.F;
                  e && 3 == Kn(t) ? e.f() : this.Ca(t) }, N.Ca = function(t) { try { if (t == this.a) t: { var e = Kn(this.a),
                              n = this.a.ua(),
                              r = this.a.W(); if (!(e < 3 || 3 == e && !ut && !this.a.$())) { this.A || 4 != e || 7 == n || be(8 == n || r <= 0 ? 3 : 2), je(this); var i = this.a.W();
                              this.N = i; var o = this.a.$(); if (this.b = 200 == i, r = this.c, u = this.m, c = this.l, h = this.f, l = this.S, f = e, d = i, r.info(function() { return "XMLHTTP RESP (" + h + ") [ attempt " + l + "]: " + u + "\n" + c + "\n" + f + " " + d }), this.b) { if (this.U && !this.C) { e: { if (this.a) { var s = this.a; if ((s = s.a ? s.a.getResponseHeader("X-HTTP-Initial-Response") : null) && !H(s)) { var a = s; break e } }
                                          a = null } if (!a) { this.b = !1, this.h = 3, Ee(12), Ge(this), Ke(this); break t }
                                      pe(this.c, this.f, a, "Initial handshake response via X-HTTP-Initial-Response"), this.C = !0, Qe(this, a) }
                                  this.I ? (Ue(this, e, o), ut && this.b && 3 == e && (le(this.J, this.R, "tick", this.Wa), this.R.start())) : (pe(this.c, this.f, o, null), Qe(this, o)), 4 == e && Ge(this), this.b && !this.A && (4 == e ? sr(this.g, this) : (this.b = !1, qe(this))) } else 400 == i && 0 < o.indexOf("Unknown SID") ? (this.h = 3, Ee(12)) : (this.h = 0, Ee(13)), Ge(this), Ke(this) } } } catch (t) {} var u, c, h, l, f, d }, N.Wa = function() { var t, e;
                  this.a && (t = Kn(this.a), e = this.a.$(), this.D < e.length && (je(this), Ue(this, t, e), this.b && 4 != t && qe(this))) }, N.cancel = function() { this.A = !0, Ge(this) }, N.Va = function() { this.o = null; var t, e, n = q();
                  0 <= n - this.T ? (t = this.c, e = this.l, t.info(function() { return "TIMEOUT: " + e }), 2 != this.H && (be(3), Ee(17)), Ge(this), this.h = 2, Ke(this)) : Be(this, this.T - n) }, (N = He.prototype).K = function() { We(this); for (var t = [], e = 0; e < this.a.length; e++) t.push(this.b[this.a[e]]); return t }, N.L = function() { return We(this), this.a.concat() }, N.get = function(t, e) { return Ye(this.b, t) ? this.b[t] : e }, N.set = function(t, e) { Ye(this.b, t) || (this.c++, this.a.push(t)), this.b[t] = e }, N.forEach = function(t, e) { for (var n = this.L(), r = 0; r < n.length; r++) { var i = n[r],
                          o = this.get(i);
                      t.call(e, o, i, this) } }; var Xe = /^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;

              function Je(t, e) { var n;
                  this.c = this.j = this.f = "", this.h = null, this.i = this.g = "", this.a = !1, t instanceof Je ? (this.a = void 0 !== e ? e : t.a, Ze(this, t.f), this.j = t.j, tn(this, t.c), en(this, t.h), this.g = t.g, e = t.b, (n = new pn).c = e.c, e.a && (n.a = new He(e.a), n.b = e.b), nn(this, n), this.i = t.i) : t && (n = String(t).match(Xe)) ? (this.a = !!e, Ze(this, n[1] || "", !0), this.j = sn(n[2] || ""), tn(this, n[3] || "", !0), en(this, n[4]), this.g = sn(n[5] || "", !0), nn(this, n[6] || "", !0), this.i = sn(n[7] || "")) : (this.a = !!e, this.b = new pn(null, this.a)) }

              function $e(t) { return new Je(t) }

              function Ze(t, e, n) { t.f = n ? sn(e, !0) : e, t.f && (t.f = t.f.replace(/:$/, "")) }

              function tn(t, e, n) { t.c = n ? sn(e, !0) : e }

              function en(t, e) { if (e) { if (e = Number(e), isNaN(e) || e < 0) throw Error("Bad port number " + e);
                      t.h = e } else t.h = null }

              function nn(t, e, n) { var r, i;
                  e instanceof pn ? (t.b = e, r = t.b, (i = t.a) && !r.f && (yn(r), r.c = null, r.a.forEach(function(t, e) { var n = e.toLowerCase();
                      e != n && (gn(this, e), vn(this, n, t)) }, r)), r.f = i) : (n || (e = an(e, fn)), t.b = new pn(e, t.a)) }

              function rn(t, e, n) { t.b.set(e, n) }

              function on(t) { return rn(t, "zx", Math.floor(2147483648 * Math.random()).toString(36) + Math.abs(Math.floor(2147483648 * Math.random()) ^ q()).toString(36)), t }

              function sn(t, e) { return t ? e ? decodeURI(t.replace(/%25/g, "%2525")) : decodeURIComponent(t) : "" }

              function an(t, e, n) { return "string" == typeof t ? (t = encodeURI(t).replace(e, un), t = n ? t.replace(/%25([0-9a-fA-F]{2})/g, "%$1") : t) : null }

              function un(t) { return "%" + ((t = t.charCodeAt(0)) >> 4 & 15).toString(16) + (15 & t).toString(16) }
              Je.prototype.toString = function() { var t = [],
                      e = this.f;
                  e && t.push(an(e, cn, !0), ":"); var n = this.c; return !n && "file" != e || (t.push("//"), (e = this.j) && t.push(an(e, cn, !0), "@"), t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g, "%$1")), null != (n = this.h) && t.push(":", String(n))), (n = this.g) && (this.c && "/" != n.charAt(0) && t.push("/"), t.push(an(n, "/" == n.charAt(0) ? ln : hn, !0))), (n = this.b.toString()) && t.push("?", n), (n = this.i) && t.push("#", an(n, dn)), t.join("") }; var cn = /[#\/\?@]/g,
                  hn = /[#\?:]/g,
                  ln = /[#\?]/g,
                  fn = /[#\?@]/g,
                  dn = /#/g;

              function pn(t, e) { this.b = this.a = null, this.c = t || null, this.f = !!e }

              function yn(n) { n.a || (n.a = new He, n.b = 0, n.c && function(t, e) { if (t) { t = t.split("&"); for (var n = 0; n < t.length; n++) { var r, i = t[n].indexOf("="),
                                  o = null;
                              0 <= i ? (r = t[n].substring(0, i), o = t[n].substring(i + 1)) : r = t[n], e(r, o ? decodeURIComponent(o.replace(/\+/g, " ")) : "") } } }(n.c, function(t, e) { n.add(decodeURIComponent(t.replace(/\+/g, " ")), e) })) }

              function gn(t, e) { yn(t), e = bn(t, e), Ye(t.a.b, e) && (t.c = null, t.b -= t.a.get(e).length, Ye((t = t.a).b, e) && (delete t.b[e], t.c--, t.a.length > 2 * t.c && We(t))) }

              function mn(t, e) { return yn(t), e = bn(t, e), Ye(t.a.b, e) }

              function vn(t, e, n) { gn(t, e), 0 < n.length && (t.c = null, t.a.set(bn(t, e), z(n)), t.b += n.length) }

              function bn(t, e) { return e = String(e), e = t.f ? e.toLowerCase() : e }(N = pn.prototype).add = function(t, e) { yn(this), this.c = null, t = bn(this, t); var n = this.a.get(t); return n || this.a.set(t, n = []), n.push(e), this.b += 1, this }, N.forEach = function(n, r) { yn(this), this.a.forEach(function(t, e) { G(t, function(t) { n.call(r, t, e, this) }, this) }, this) }, N.L = function() { yn(this); for (var t = this.a.K(), e = this.a.L(), n = [], r = 0; r < e.length; r++)
                      for (var i = t[r], o = 0; o < i.length; o++) n.push(e[r]); return n }, N.K = function(t) { yn(this); var e = []; if ("string" == typeof t) mn(this, t) && (e = Q(e, this.a.get(bn(this, t))));
                  else { t = this.a.K(); for (var n = 0; n < t.length; n++) e = Q(e, t[n]) } return e }, N.set = function(t, e) { return yn(this), this.c = null, mn(this, t = bn(this, t)) && (this.b -= this.a.get(t).length), this.a.set(t, [e]), this.b += 1, this }, N.get = function(t, e) { return t && 0 < (t = this.K(t)).length ? String(t[0]) : e }, N.toString = function() { if (this.c) return this.c; if (!this.a) return ""; for (var t = [], e = this.a.L(), n = 0; n < e.length; n++)
                      for (var r = e[n], i = encodeURIComponent(String(r)), r = this.K(r), o = 0; o < r.length; o++) { var s = i; "" !== r[o] && (s += "=" + encodeURIComponent(String(r[o]))), t.push(s) }
                  return this.c = t.join("&") }; var wn = function(t, e) { this.b = t, this.a = e };

              function En(t) { this.g = t || Tn, t = k.PerformanceNavigationTiming ? 0 < (t = k.performance.getEntriesByType("navigation")).length && ("hq" == t[0].nextHopProtocol || "h2" == t[0].nextHopProtocol) : !!(k.ia && k.ia.ya && k.ia.ya() && k.ia.ya().Lb), this.f = t ? this.g : 1, this.a = null, 1 < this.f && (this.a = new Set), this.b = null, this.c = [] } var Tn = 10;

              function In(t) { return t.b || t.a && t.a.size >= t.f }

              function _n(t) { return t.b ? 1 : t.a ? t.a.size : 0 }

              function Sn(t, e) { return t.b ? t.b == e : t.a && t.a.has(e) }

              function An(t, e) { t.a ? t.a.add(e) : t.b = e }

              function Nn(t, e) { t.b && t.b == e ? t.b = null : t.a && t.a.has(e) && t.a.delete(e) }

              function Dn(t) { var e, n; if (null != t.b) return t.c.concat(t.b.s); if (null == t.a || 0 === t.a.size) return z(t.c); var r = t.c; try { for (var i = A(t.a.values()), o = i.next(); !o.done; o = i.next()) var s = o.value,
                          r = r.concat(s.s) } catch (t) { e = { error: t } } finally { try { o && !o.done && (n = i.return) && n.call(i) } finally { if (e) throw e.error } } return r }

              function Cn() {}

              function kn() { this.a = new Cn }

              function Rn(t, e, n, r, i) { try { e.onload = null, e.onerror = null, e.onabort = null, e.ontimeout = null, i(r) } catch (t) {} }
              En.prototype.cancel = function() { var e, t; if (this.c = Dn(this), this.b) this.b.cancel(), this.b = null;
                  else if (this.a && 0 !== this.a.size) { try { for (var n = A(this.a.values()), r = n.next(); !r.done; r = n.next()) r.value.cancel() } catch (t) { e = { error: t } } finally { try { r && !r.done && (t = n.return) && t.call(n) } finally { if (e) throw e.error } }
                      this.a.clear() } }, Cn.prototype.stringify = function(t) { return k.JSON.stringify(t, void 0) }, Cn.prototype.parse = function(t) { return k.JSON.parse(t, void 0) }; var xn = k.JSON.parse;

              function On(t) { Bt.call(this), this.headers = new He, this.H = t || null, this.b = !1, this.s = this.a = null, this.B = "", this.h = 0, this.f = "", this.g = this.A = this.l = this.u = !1, this.o = 0, this.m = null, this.I = Ln, this.D = this.F = !1 }
              B(On, Bt); var Ln = "",
                  Pn = /^https?$/i,
                  Mn = ["POST", "PUT"];

              function Fn(t) { return "content-type" == t.toLowerCase() }

              function Vn(t, e) { t.b = !1, t.a && (t.g = !0, t.a.abort(), t.g = !1), t.f = e, t.h = 5, Un(t), Bn(t) }

              function Un(t) { t.u || (t.u = !0, jt(t, "complete"), jt(t, "error")) }

              function qn(t) { if (t.b && void 0 !== C && (!t.s[1] || 4 != Kn(t) || 2 != t.W()))
                      if (t.l && 4 == Kn(t)) ne(t.za, 0, t);
                      else if (jt(t, "readystatechange"), 4 == Kn(t)) { t.b = !1; try { var e, n, r, i, o = t.W();
                          t: switch (o) {
                              case 200:
                              case 201:
                              case 202:
                              case 204:
                              case 206:
                              case 304:
                              case 1223:
                                  var s = !0; break t;
                              default:
                                  s = !1 }(e = s) || ((n = 0 === o) && (!(i = String(t.B).match(Xe)[1] || null) && k.self && k.self.location && (i = (r = k.self.location.protocol).substr(0, r.length - 1)), n = !Pn.test(i ? i.toLowerCase() : "")), e = n); if (e) jt(t, "complete"), jt(t, "success");
                          else { t.h = 6; try { var a = 2 < Kn(t) ? t.a.statusText : "" } catch (o) { a = "" }
                              t.f = a + " [" + t.W() + "]", Un(t) } } finally { Bn(t) } } }

              function Bn(t, e) { if (t.a) { jn(t); var n = t.a,
                          r = t.s[0] ? R : null;
                      t.a = null, t.s = null, e || jt(t, "ready"); try { n.onreadystatechange = r } catch (t) {} } }

              function jn(t) { t.a && t.D && (t.a.ontimeout = null), t.m && (k.clearTimeout(t.m), t.m = null) }

              function Kn(t) { return t.a ? t.a.readyState : 0 }

              function Gn(t, e, n) { t: { for (r in n) { var r = !1; break t }
                      r = !0 } var i;r || (i = "", Z(n, function(t, e) { i += e, i += ":", i += t, i += "\r\n" }), n = i, "string" == typeof t ? null != n && encodeURIComponent(String(n)) : rn(t, e, n)) }

              function Qn(t, e, n) { return n && n.internalChannelParams && n.internalChannelParams[t] || e }

              function zn(t) { this.pa = 0, this.g = [], this.c = new de, this.ga = this.la = this.B = this.fa = this.a = this.na = this.A = this.V = this.i = this.O = this.l = null, this.Oa = this.R = 0, this.La = Qn("failFast", !1, t), this.H = this.m = this.j = this.h = this.f = null, this.S = !0, this.I = this.oa = this.P = -1, this.T = this.o = this.u = 0, this.Ha = Qn("baseRetryDelayMs", 5e3, t), this.Ra = Qn("retryDelaySeedMs", 1e4, t), this.Ma = Qn("forwardChannelMaxRetries", 2, t), this.ma = Qn("forwardChannelRequestTimeoutMs", 2e4, t), this.Na = t && t.g || void 0, this.D = void 0, this.C = t && t.supportsCrossDomainXhr || !1, this.J = "", this.b = new En(t && t.concurrentRequestLimit), this.ka = new kn, this.da = t && t.fastHandshake || !1, this.Ia = t && t.b || !1, t && t.f && (this.c.a = !1), t && t.forceLongPolling && (this.S = !1), this.U = !this.da && this.S && t && t.detectBufferingProxy || !1, this.ea = void 0, this.N = 0, this.F = !1, this.s = null, (this.Ka = t && t.c || !1) && this.c.info("Opt-in to enable Chrome Origin Trials.") }

              function Hn(t) { var e, n;
                  Yn(t), 3 == t.v && (e = t.R++, rn(n = $e(t.B), "SID", t.J), rn(n, "RID", e), rn(n, "TYPE", "terminate"), Zn(t, n), (e = new xe(t, t.c, e, void 0)).H = 2, e.i = on($e(n)), n = !1, !(n = k.navigator && k.navigator.sendBeacon ? k.navigator.sendBeacon(e.i.toString(), "") : n) && k.Image && ((new Image).src = e.i, n = !0), n || (e.a = lr(e.g, null), e.a.ba(e.i)), e.u = q(), qe(e)), cr(t) }

              function Wn(t) { t.a && (rr(t), t.a.cancel(), t.a = null) }

              function Yn(t) { Wn(t), t.j && (k.clearTimeout(t.j), t.j = null), or(t), t.b.cancel(), t.h && ("number" == typeof t.h && k.clearTimeout(t.h), t.h = null) }

              function Xn(t, e) { t.g.push(new wn(t.Oa++, e)), 3 == t.v && Jn(t) }

              function Jn(t) { In(t.b) || t.h || (t.h = !0, Xt(t.Ba, t), t.u = 0) }

              function $n(t, e) { var n = e ? e.f : t.R++,
                      r = $e(t.B);
                  rn(r, "SID", t.J), rn(r, "RID", n), rn(r, "AID", t.P), Zn(t, r), t.i && t.l && Gn(r, t.i, t.l), n = new xe(t, t.c, n, t.u + 1), null === t.i && (n.B = t.l), e && (t.g = e.s.concat(t.g)), e = tr(t, n, 1e3), n.setTimeout(Math.round(.5 * t.ma) + Math.round(.5 * t.ma * Math.random())), An(t.b, n), Fe(n, r, e) }

              function Zn(t, n) { t.f && ze({}, function(t, e) { rn(n, e, t) }) }

              function tr(t, e, n) { n = Math.min(t.g.length, n); var r = t.f ? V(t.f.Ja, t.f, t) : null;
                  t: for (var i = t.g, o = -1;;) { var s = ["count=" + n]; - 1 == o ? 0 < n ? (o = i[0].b, s.push("ofs=" + o)) : o = 0 : s.push("ofs=" + o); for (var a = !0, u = 0; u < n; u++) { var c = i[u].b,
                              h = i[u].a; if ((c -= o) < 0) o = Math.max(0, i[u].b - 100), a = !1;
                          else try {! function(t, r, e) { var i = e || ""; try { ze(t, function(t, e) { var n = t;
                                          O(t) && (n = Gt(t)), r.push(i + e + "=" + encodeURIComponent(n)) }) } catch (t) { throw r.push(i + "type=" + encodeURIComponent("_badmap")), t } }(h, s, "req" + c + "_") } catch (t) { r && r(h) } } if (a) { r = s.join("&"); break t } }
                  return t = t.g.splice(0, n), e.s = t, r }

              function er(t) { t.a || t.j || (t.T = 1, Xt(t.Aa, t), t.o = 0) }

              function nr(t) { return !(t.a || t.j || 3 <= t.o) && (t.T++, t.j = Ie(V(t.Aa, t), ar(t, t.o)), t.o++, 1) }

              function rr(t) { null != t.s && (k.clearTimeout(t.s), t.s = null) }

              function ir(t) { t.a = new xe(t, t.c, "rpc", t.T), null === t.i && (t.a.B = t.l), t.a.O = 0; var e = $e(t.la);
                  rn(e, "RID", "rpc"), rn(e, "SID", t.J), rn(e, "CI", t.H ? "0" : "1"), rn(e, "AID", t.P), Zn(t, e), rn(e, "TYPE", "xmlhttp"), t.i && t.l && Gn(e, t.i, t.l), t.D && t.a.setTimeout(t.D); var n = t.a;
                  t = t.ga, n.H = 1, n.i = on($e(e)), n.j = null, n.I = !0, Ve(n, t) }

              function or(t) { null != t.m && (k.clearTimeout(t.m), t.m = null) }

              function sr(t, e) { var n, r, i, o = null; if (t.a == e) { or(t), rr(t), t.a = null; var s = 2 } else { if (!Sn(t.b, e)) return;
                      o = e.s, Nn(t.b, e), s = 1 } if (t.I = e.N, 0 != t.v)
                      if (e.b) 1 == s ? (o = e.j ? e.j.length : 0, e = q() - e.u, n = t.u, jt(s = me(), new Te(s)), Jn(t)) : er(t);
                      else if (3 == (n = e.h) || 0 == n && 0 < t.I || (1 != s || (i = e, _n((r = t).b) >= r.b.f - (r.h ? 1 : 0) || (r.h ? (r.g = i.s.concat(r.g), 0) : 1 == r.v || 2 == r.v || r.u >= (r.La ? 0 : r.Ma) || (r.h = Ie(V(r.Ba, r, i), ar(r, r.u)), r.u++, 0)))) && (2 != s || !nr(t))) switch (o && 0 < o.length && (e = t.b, e.c = e.c.concat(o)), n) {
                      case 1:
                          ur(t, 5); break;
                      case 4:
                          ur(t, 10); break;
                      case 3:
                          ur(t, 6); break;
                      default:
                          ur(t, 2) } }

              function ar(t, e) { var n = t.Ha + Math.floor(Math.random() * t.Ra); return t.f || (n *= 2), n * e }

              function ur(t, e) { var n, r, i, o;
                  t.c.info("Error code " + e), 2 == e ? (r = null, t.f && (r = null), o = V(t.Ya, t), r || (r = new Je("//www.google.com/images/cleardot.gif"), k.location && "http" == k.location.protocol || Ze(r, "https"), on(r)), n = r.toString(), r = o, o = new de, k.Image ? ((i = new Image).onload = U(Rn, o, i, "TestLoadImage: loaded", !0, r), i.onerror = U(Rn, o, i, "TestLoadImage: error", !1, r), i.onabort = U(Rn, o, i, "TestLoadImage: abort", !1, r), i.ontimeout = U(Rn, o, i, "TestLoadImage: timeout", !1, r), k.setTimeout(function() { i.ontimeout && i.ontimeout() }, 1e4), i.src = n) : r(!1)) : Ee(2), t.v = 0, t.f && t.f.ra(e), cr(t), Yn(t) }

              function cr(t) { t.v = 0, t.I = -1, t.f && (0 == Dn(t.b).length && 0 == t.g.length || (t.b.c.length = 0, z(t.g), t.g.length = 0), t.f.qa()) }

              function hr(t, e, n) { var r, i, o, s, a, u = (s = n) instanceof Je ? $e(s) : new Je(s, void 0); return "" != u.c ? (e && tn(u, e + "." + u.c), en(u, u.h)) : (a = k.location, r = a.protocol, i = e ? e + "." + a.hostname : a.hostname, o = +a.port, s = n, a = new Je(null, void 0), r && Ze(a, r), i && tn(a, i), o && en(a, o), s && (a.g = s), u = a), t.V && Z(t.V, function(t, e) { rn(u, e, t) }), e = t.A, n = t.na, e && n && rn(u, e, n), rn(u, "VER", t.ha), Zn(t, u), u }

              function lr(t, e) { if (e && !t.C) throw Error("Can't create secondary domain capable XhrIo object."); return (e = new On(t.Na)).F = t.C, e }

              function fr() {}

              function dr() { if (st && !(10 <= Number(gt))) throw Error("Environmental error: no available transport.") }

              function pr(t, e) { Bt.call(this), this.a = new zn(e), this.o = t, this.b = e && e.messageUrlParams || null, t = e && e.messageHeaders || null, e && e.clientProtocolHeaderRequired && (t ? t["X-Client-Protocol"] = "webchannel" : t = { "X-Client-Protocol": "webchannel" }), this.a.l = t, t = e && e.initMessageHeaders || null, e && e.messageContentType && (t ? t["X-WebChannel-Content-Type"] = e.messageContentType : t = { "X-WebChannel-Content-Type": e.messageContentType }), e && e.a && (t ? t["X-WebChannel-Client-Profile"] = e.a : t = { "X-WebChannel-Client-Profile": e.a }), this.a.O = t, (t = e && e.httpHeadersOverwriteParam) && !H(t) && (this.a.i = t), this.m = e && e.supportsCrossDomainXhr || !1, this.l = e && e.sendRawJson || !1, (e = e && e.httpSessionIdParam) && !H(e) && (this.a.A = e, null !== (t = this.b) && e in t && (e in (t = this.b) && delete t[e])), this.f = new mr(this) }

              function yr(t) { Ce.call(this); var e = t.__sm__; if (e) { t: { for (var n in e) { t = n; break t }
                          t = void 0 }(this.c = t) ? (t = this.c, this.data = null !== e && t in e ? e[t] : void 0) : this.data = e }
                  else this.data = t }

              function gr() { ke.call(this), this.status = 1 }

              function mr(t) { this.a = t }(N = On.prototype).ba = function(t, e, n, r) { if (this.a) throw Error("[goog.net.XhrIo] Object is active with another request=" + this.B + "; newUri=" + t);
                  e = e ? e.toUpperCase() : "GET", this.B = t, this.f = "", this.h = 0, this.u = !1, this.b = !0, this.a = new XMLHttpRequest, this.s = this.H ? Ne(this.H) : Ne(Oe), this.a.onreadystatechange = V(this.za, this); try { this.A = !0, this.a.open(e, String(t), !0), this.A = !1 } catch (t) { return void Vn(this, t) }
                  t = n || ""; var i, o = new He(this.headers);
                  r && ze(r, function(t, e) { o.set(e, t) }), r = function(t) { t: { for (var e = Fn, n = t.length, r = "string" == typeof t ? t.split("") : t, i = 0; i < n; i++)
                              if (i in r && e.call(void 0, r[i], i, t)) { e = i; break t }
                          e = -1 } return e < 0 ? null : "string" == typeof t ? t.charAt(e) : t[e] }(o.L()), n = k.FormData && t instanceof k.FormData, 0 <= K(Mn, e) && !r && !n && o.set("Content-Type", "application/x-www-form-urlencoded;charset=utf-8"), o.forEach(function(t, e) { this.a.setRequestHeader(e, t) }, this), this.I && (this.a.responseType = this.I), "withCredentials" in this.a && this.a.withCredentials !== this.F && (this.a.withCredentials = this.F); try { jn(this), 0 < this.o && ((this.D = (i = this.a, st && yt(9) && "number" == typeof i.timeout && void 0 !== i.ontimeout)) ? (this.a.timeout = this.o, this.a.ontimeout = V(this.xa, this)) : this.m = ne(this.xa, this.o, this)), this.l = !0, this.a.send(t), this.l = !1 } catch (t) { Vn(this, t) } }, N.xa = function() { void 0 !== C && this.a && (this.f = "Timed out after " + this.o + "ms, aborting", this.h = 8, jt(this, "timeout"), this.abort(8)) }, N.abort = function(t) { this.a && this.b && (this.b = !1, this.g = !0, this.a.abort(), this.g = !1, this.h = t || 7, jt(this, "complete"), jt(this, "abort"), Bn(this)) }, N.G = function() { this.a && (this.b && (this.b = !1, this.g = !0, this.a.abort(), this.g = !1), Bn(this, !0)), On.X.G.call(this) }, N.za = function() { this.j || (this.A || this.l || this.g ? qn(this) : this.Ua()) }, N.Ua = function() { qn(this) }, N.W = function() { try { return 2 < Kn(this) ? this.a.status : -1 } catch (t) { return -1 } }, N.$ = function() { try { return this.a ? this.a.responseText : "" } catch (t) { return "" } }, N.Pa = function(t) { if (this.a) { var e = this.a.responseText; return t && 0 == e.indexOf(t) && (e = e.substring(t.length)), xn(e) } }, N.ua = function() { return this.h }, N.Qa = function() { return "string" == typeof this.f ? this.f : String(this.f) }, (N = zn.prototype).ha = 8, N.v = 1, N.Ba = function(t) { if (this.h)
                      if (this.h = null, 1 == this.v) { if (!t) { this.R = Math.floor(1e5 * Math.random()), t = this.R++; var e, n = new xe(this, this.c, t, void 0),
                                  r = this.l; if (this.O && (r ? nt(r = tt(r), this.O) : r = this.O), null === this.i && (n.B = r), this.da) t: { for (var i = e = 0; i < this.g.length; i++) { var o = this.g[i]; if ("__data__" in o.a && "string" == typeof(o = o.a.__data__) ? o = o.length : o = void 0, void 0 === o) break; if (4096 < (e += o)) { e = i; break t } if (4096 === e || i === this.g.length - 1) { e = i + 1; break t } }
                                  e = 1e3 }
                              else e = 1e3;
                              e = tr(this, n, e), rn(i = $e(this.B), "RID", t), rn(i, "CVER", 22), this.A && rn(i, "X-HTTP-Session-Id", this.A), Zn(this, i), this.i && r && Gn(i, this.i, r), An(this.b, n), this.Ia && rn(i, "TYPE", "init"), this.da ? (rn(i, "$req", e), rn(i, "SID", "null"), n.U = !0, Fe(n, i, null)) : Fe(n, i, e), this.v = 2 } } else 3 == this.v && (t ? $n(this, t) : 0 == this.g.length || In(this.b) || $n(this)) }, N.Aa = function() { var t;
                  this.j = null, ir(this), this.U && !(this.F || null == this.a || this.N <= 0) && (t = 2 * this.N, this.c.info("BP detection timer enabled: " + t), this.s = Ie(V(this.Ta, this), t)) }, N.Ta = function() { this.s && (this.s = null, this.c.info("BP detection timeout reached."), this.c.info("Buffering proxy detected and switch to long-polling!"), this.H = !1, this.F = !0, Ee(10), Wn(this), ir(this)) }, N.Sa = function() { null != this.m && (this.m = null, Wn(this), nr(this), Ee(19)) }, N.Ya = function(t) { t ? (this.c.info("Successfully pinged google.com"), Ee(2)) : (this.c.info("Failed to ping google.com"), Ee(1)) }, (N = fr.prototype).ta = function() {}, N.sa = function() {}, N.ra = function() {}, N.qa = function() {}, N.Ja = function() {}, dr.prototype.a = function(t, e) { return new pr(t, e) }, B(pr, Bt), pr.prototype.g = function() { this.a.f = this.f, this.m && (this.a.C = !0); var t = this.a,
                      e = this.o,
                      n = this.b || void 0;
                  Ee(0), t.fa = e, t.V = n || {}, t.H = t.S, t.B = hr(t, null, t.fa), Jn(t) }, pr.prototype.close = function() { Hn(this.a) }, pr.prototype.h = function(t) { var e; "string" == typeof t ? ((e = {}).__data__ = t, Xn(this.a, e)) : this.l ? ((e = {}).__data__ = Gt(t), Xn(this.a, e)) : Xn(this.a, t) }, pr.prototype.G = function() { this.a.f = null, delete this.f, Hn(this.a), delete this.a, pr.X.G.call(this) }, B(yr, Ce), B(gr, ke), B(mr, fr), mr.prototype.ta = function() { jt(this.a, "a") }, mr.prototype.sa = function(t) { jt(this.a, new yr(t)) }, mr.prototype.ra = function(t) { jt(this.a, new gr) }, mr.prototype.qa = function() { jt(this.a, "b") }, dr.prototype.createWebChannel = dr.prototype.a, pr.prototype.send = pr.prototype.h, pr.prototype.open = pr.prototype.g, _e.NO_ERROR = 0, _e.TIMEOUT = 8, _e.HTTP_ERROR = 6, Se.COMPLETE = "complete", (De.EventType = D).OPEN = "a", D.CLOSE = "b", D.ERROR = "c", D.MESSAGE = "d", Bt.prototype.listen = Bt.prototype.va, On.prototype.listenOnce = On.prototype.wa, On.prototype.getLastError = On.prototype.Qa, On.prototype.getLastErrorCode = On.prototype.ua, On.prototype.getStatus = On.prototype.W, On.prototype.getResponseJson = On.prototype.Pa, On.prototype.getResponseText = On.prototype.$, On.prototype.send = On.prototype.ba; var vr = me,
                  br = _e,
                  wr = Se,
                  Er = ye,
                  Tr = 10,
                  Ir = 11,
                  _r = De,
                  Sr = On,
                  Ar = (Nr.prototype.t = function(t) { return this.previousValue = Math.max(t, this.previousValue), this.previousValue }, Nr.prototype.next = function() { var t = ++this.previousValue; return this.i && this.i(t), t }, Nr);

              function Nr(t, e) { var n = this;
                  this.previousValue = t, e && (e.sequenceNumberHandler = function(t) { return n.t(t) }, this.i = function(t) { return e.writeSequenceNumber(t) }) }
              Ar.o = -1; var Dr, Cr = { OK: "ok", CANCELLED: "cancelled", UNKNOWN: "unknown", INVALID_ARGUMENT: "invalid-argument", DEADLINE_EXCEEDED: "deadline-exceeded", NOT_FOUND: "not-found", ALREADY_EXISTS: "already-exists", PERMISSION_DENIED: "permission-denied", UNAUTHENTICATED: "unauthenticated", RESOURCE_EXHAUSTED: "resource-exhausted", FAILED_PRECONDITION: "failed-precondition", ABORTED: "aborted", OUT_OF_RANGE: "out-of-range", UNIMPLEMENTED: "unimplemented", INTERNAL: "internal", UNAVAILABLE: "unavailable", DATA_LOSS: "data-loss" },
                  kr = (n(xr, Dr = Error), xr),
                  Rr = new I("@firebase/firestore");

              function xr(t, e) { var n = this; return (n = Dr.call(this, e) || this).code = t, n.message = e, n.name = "FirebaseError", n.toString = function() { return n.name + ": [code=" + n.code + "]: " + n.message }, n }

              function Or() { return Rr.logLevel }

              function Lr(t) { for (var e, n = [], r = 1; r < arguments.length; r++) n[r - 1] = arguments[r];
                  Rr.logLevel <= p.DEBUG && (e = n.map(Fr), Rr.debug.apply(Rr, s(["Firestore (8.6.2): " + t], e))) }

              function Pr(t) { for (var e, n = [], r = 1; r < arguments.length; r++) n[r - 1] = arguments[r];
                  Rr.logLevel <= p.ERROR && (e = n.map(Fr), Rr.error.apply(Rr, s(["Firestore (8.6.2): " + t], e))) }

              function Mr(t) { for (var e, n = [], r = 1; r < arguments.length; r++) n[r - 1] = arguments[r];
                  Rr.logLevel <= p.WARN && (e = n.map(Fr), Rr.warn.apply(Rr, s(["Firestore (8.6.2): " + t], e))) }

              function Fr(e) { if ("string" == typeof e) return e; try { return JSON.stringify(e) } catch (t) { return e } }

              function Vr(t) { t = "FIRESTORE (8.6.2) INTERNAL ASSERTION FAILED: " + (t = void 0 === t ? "Unexpected state" : t); throw Pr(t), new Error(t) }

              function Ur(t) { t || Vr() } var qr = (Br.u = function() { for (var t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", e = Math.floor(256 / t.length) * t.length, n = ""; n.length < 20;)
                      for (var r = function(t) { var e = "undefined" != typeof self && (self.crypto || self.msCrypto),
                                  n = new Uint8Array(t); if (e && "function" == typeof e.getRandomValues) e.getRandomValues(n);
                              else
                                  for (var r = 0; r < t; r++) n[r] = Math.floor(256 * Math.random()); return n }(40), i = 0; i < r.length; ++i) n.length < 20 && r[i] < e && (n += t.charAt(r[i] % t.length)); return n }, Br);

              function Br() {}

              function jr(t, e) { return t < e ? -1 : e < t ? 1 : 0 }

              function Kr(t, n, r) { return t.length === n.length && t.every(function(t, e) { return r(t, n[e]) }) }

              function Gr(t) { return t + "\0" } var Qr = (Wr.now = function() { return Wr.fromMillis(Date.now()) }, Wr.fromDate = function(t) { return Wr.fromMillis(t.getTime()) }, Wr.fromMillis = function(t) { var e = Math.floor(t / 1e3); return new Wr(e, Math.floor(1e6 * (t - 1e3 * e))) }, Wr.prototype.toDate = function() { return new Date(this.toMillis()) }, Wr.prototype.toMillis = function() { return 1e3 * this.seconds + this.nanoseconds / 1e6 }, Wr.prototype._compareTo = function(t) { return this.seconds === t.seconds ? jr(this.nanoseconds, t.nanoseconds) : jr(this.seconds, t.seconds) }, Wr.prototype.isEqual = function(t) { return t.seconds === this.seconds && t.nanoseconds === this.nanoseconds }, Wr.prototype.toString = function() { return "Timestamp(seconds=" + this.seconds + ", nanoseconds=" + this.nanoseconds + ")" }, Wr.prototype.toJSON = function() { return { seconds: this.seconds, nanoseconds: this.nanoseconds } }, Wr.prototype.valueOf = function() { var t = this.seconds - -62135596800; return String(t).padStart(12, "0") + "." + String(this.nanoseconds).padStart(9, "0") }, Wr),
                  zr = (Hr.fromTimestamp = function(t) { return new Hr(t) }, Hr.min = function() { return new Hr(new Qr(0, 0)) }, Hr.prototype.compareTo = function(t) { return this.timestamp._compareTo(t.timestamp) }, Hr.prototype.isEqual = function(t) { return this.timestamp.isEqual(t.timestamp) }, Hr.prototype.toMicroseconds = function() { return 1e6 * this.timestamp.seconds + this.timestamp.nanoseconds / 1e3 }, Hr.prototype.toString = function() { return "SnapshotVersion(" + this.timestamp.toString() + ")" }, Hr.prototype.toTimestamp = function() { return this.timestamp }, Hr);

              function Hr(t) { this.timestamp = t }

              function Wr(t, e) { if (this.seconds = t, (this.nanoseconds = e) < 0) throw new kr(Cr.INVALID_ARGUMENT, "Timestamp nanoseconds out of range: " + e); if (1e9 <= e) throw new kr(Cr.INVALID_ARGUMENT, "Timestamp nanoseconds out of range: " + e); if (t < -62135596800) throw new kr(Cr.INVALID_ARGUMENT, "Timestamp seconds out of range: " + t); if (253402300800 <= t) throw new kr(Cr.INVALID_ARGUMENT, "Timestamp seconds out of range: " + t) }

              function Yr(t) { var e, n = 0; for (e in t) Object.prototype.hasOwnProperty.call(t, e) && n++; return n }

              function Xr(t, e) { for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && e(n, t[n]) }

              function Jr(t) { for (var e in t)
                      if (Object.prototype.hasOwnProperty.call(t, e)) return !1;
                  return !0 } var $r, Zr, Se = (Object.defineProperty(ci.prototype, "length", { get: function() { return this.len }, enumerable: !1, configurable: !0 }), ci.prototype.isEqual = function(t) { return 0 === ci.comparator(this, t) }, ci.prototype.child = function(t) { var e = this.segments.slice(this.offset, this.limit()); return t instanceof ci ? t.forEach(function(t) { e.push(t) }) : e.push(t), this.construct(e) }, ci.prototype.limit = function() { return this.offset + this.length }, ci.prototype.popFirst = function(t) { return t = void 0 === t ? 1 : t, this.construct(this.segments, this.offset + t, this.length - t) }, ci.prototype.popLast = function() { return this.construct(this.segments, this.offset, this.length - 1) }, ci.prototype.firstSegment = function() { return this.segments[this.offset] }, ci.prototype.lastSegment = function() { return this.get(this.length - 1) }, ci.prototype.get = function(t) { return this.segments[this.offset + t] }, ci.prototype.isEmpty = function() { return 0 === this.length }, ci.prototype.isPrefixOf = function(t) { if (t.length < this.length) return !1; for (var e = 0; e < this.length; e++)
                          if (this.get(e) !== t.get(e)) return !1;
                      return !0 }, ci.prototype.isImmediateParentOf = function(t) { if (this.length + 1 !== t.length) return !1; for (var e = 0; e < this.length; e++)
                          if (this.get(e) !== t.get(e)) return !1;
                      return !0 }, ci.prototype.forEach = function(t) { for (var e = this.offset, n = this.limit(); e < n; e++) t(this.segments[e]) }, ci.prototype.toArray = function() { return this.segments.slice(this.offset, this.limit()) }, ci.comparator = function(t, e) { for (var n = Math.min(t.length, e.length), r = 0; r < n; r++) { var i = t.get(r),
                              o = e.get(r); if (i < o) return -1; if (o < i) return 1 } return t.length < e.length ? -1 : t.length > e.length ? 1 : 0 }, ci),
                  ti = (n(ui, Zr = Se), ui.prototype.construct = function(t, e, n) { return new ui(t, e, n) }, ui.prototype.canonicalString = function() { return this.toArray().join("/") }, ui.prototype.toString = function() { return this.canonicalString() }, ui.fromString = function() { for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e]; for (var n = [], r = 0, i = t; r < i.length; r++) { var o = i[r]; if (0 <= o.indexOf("//")) throw new kr(Cr.INVALID_ARGUMENT, "Invalid segment (" + o + "). Paths must not contain // in them.");
                          n.push.apply(n, o.split("/").filter(function(t) { return 0 < t.length })) } return new ui(n) }, ui.emptyPath = function() { return new ui([]) }, ui),
                  ei = /^[_a-zA-Z][_a-zA-Z0-9]*$/,
                  ni = (n(ai, $r = Se), ai.prototype.construct = function(t, e, n) { return new ai(t, e, n) }, ai.isValidIdentifier = function(t) { return ei.test(t) }, ai.prototype.canonicalString = function() { return this.toArray().map(function(t) { return t = t.replace(/\\/g, "\\\\").replace(/`/g, "\\`"), t = !ai.isValidIdentifier(t) ? "`" + t + "`" : t }).join(".") }, ai.prototype.toString = function() { return this.canonicalString() }, ai.prototype.isKeyField = function() { return 1 === this.length && "__name__" === this.get(0) }, ai.keyField = function() { return new ai(["__name__"]) }, ai.fromServerFormat = function(t) { for (var e = [], n = "", r = 0, i = function() { if (0 === n.length) throw new kr(Cr.INVALID_ARGUMENT, "Invalid field path (" + t + "). Paths must not be empty, begin with '.', end with '.', or contain '..'");
                              e.push(n), n = "" }, o = !1; r < t.length;) { var s = t[r]; if ("\\" === s) { if (r + 1 === t.length) throw new kr(Cr.INVALID_ARGUMENT, "Path has trailing escape character: " + t); var a = t[r + 1]; if ("\\" !== a && "." !== a && "`" !== a) throw new kr(Cr.INVALID_ARGUMENT, "Path has invalid escape sequence: " + t);
                              n += a, r += 2 } else "`" === s ? o = !o : "." !== s || o ? n += s : i(), r++ } if (i(), o) throw new kr(Cr.INVALID_ARGUMENT, "Unterminated ` in path: " + t); return new ai(e) }, ai.emptyPath = function() { return new ai([]) }, ai),
                  ri = (si.prototype.covers = function(t) { for (var e = 0, n = this.fields; e < n.length; e++)
                          if (n[e].isPrefixOf(t)) return !0;
                      return !1 }, si.prototype.isEqual = function(t) { return Kr(this.fields, t.fields, function(t, e) { return t.isEqual(e) }) }, si),
                  ii = (oi.fromBase64String = function(t) { return new oi(atob(t)) }, oi.fromUint8Array = function(t) { return new oi(function(t) { for (var e = "", n = 0; n < t.length; ++n) e += String.fromCharCode(t[n]); return e }(t)) }, oi.prototype.toBase64 = function() { return t = this.binaryString, btoa(t); var t }, oi.prototype.toUint8Array = function() { return function(t) { for (var e = new Uint8Array(t.length), n = 0; n < t.length; n++) e[n] = t.charCodeAt(n); return e }(this.binaryString) }, oi.prototype.approximateByteSize = function() { return 2 * this.binaryString.length }, oi.prototype.compareTo = function(t) { return jr(this.binaryString, t.binaryString) }, oi.prototype.isEqual = function(t) { return this.binaryString === t.binaryString }, oi);

              function oi(t) { this.binaryString = t }

              function si(t) {
                  (this.fields = t).sort(ni.comparator) }

              function ai() { return null !== $r && $r.apply(this, arguments) || this }

              function ui() { return null !== Zr && Zr.apply(this, arguments) || this }

              function ci(t, e, n) { void 0 === e ? e = 0 : e > t.length && Vr(), void 0 === n ? n = t.length - e : n > t.length - e && Vr(), this.segments = t, this.offset = e, this.len = n }
              ii.EMPTY_BYTE_STRING = new ii(""); var hi = new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);

              function li(t) { if (Ur(!!t), "string" != typeof t) return { seconds: fi(t.seconds), nanos: fi(t.nanos) }; var e = 0,
                      n = hi.exec(t);
                  Ur(!!n), n[1] && (n = ((n = n[1]) + "000000000").substr(0, 9), e = Number(n));
                  t = new Date(t); return { seconds: Math.floor(t.getTime() / 1e3), nanos: e } }

              function fi(t) { return "number" == typeof t ? t : "string" == typeof t ? Number(t) : 0 }

              function di(t) { return "string" == typeof t ? ii.fromBase64String(t) : ii.fromUint8Array(t) }

              function pi(t) { return "server_timestamp" === (null === (t = ((null === (t = null == t ? void 0 : t.mapValue) || void 0 === t ? void 0 : t.fields) || {}).__type__) || void 0 === t ? void 0 : t.stringValue) }

              function yi(t) { t = li(t.mapValue.fields.__local_write_time__.timestampValue); return new Qr(t.seconds, t.nanos) }

              function gi(t) { return null == t }

              function mi(t) { return 0 === t && 1 / t == -1 / 0 }

              function vi(t) { return "number" == typeof t && Number.isInteger(t) && !mi(t) && t <= Number.MAX_SAFE_INTEGER && t >= Number.MIN_SAFE_INTEGER } var bi = (wi.fromPath = function(t) { return new wi(ti.fromString(t)) }, wi.fromName = function(t) { return new wi(ti.fromString(t).popFirst(5)) }, wi.prototype.hasCollectionId = function(t) { return 2 <= this.path.length && this.path.get(this.path.length - 2) === t }, wi.prototype.isEqual = function(t) { return null !== t && 0 === ti.comparator(this.path, t.path) }, wi.prototype.toString = function() { return this.path.toString() }, wi.comparator = function(t, e) { return ti.comparator(t.path, e.path) }, wi.isDocumentKey = function(t) { return t.length % 2 == 0 }, wi.fromSegments = function(t) { return new wi(new ti(t.slice())) }, wi);

              function wi(t) { this.path = t }

              function Ei(t) { return "nullValue" in t ? 0 : "booleanValue" in t ? 1 : "integerValue" in t || "doubleValue" in t ? 2 : "timestampValue" in t ? 3 : "stringValue" in t ? 5 : "bytesValue" in t ? 6 : "referenceValue" in t ? 7 : "geoPointValue" in t ? 8 : "arrayValue" in t ? 9 : "mapValue" in t ? pi(t) ? 4 : 10 : Vr() }

              function Ti(r, i) { var t, e, n = Ei(r); if (n !== Ei(i)) return !1; switch (n) {
                      case 0:
                          return !0;
                      case 1:
                          return r.booleanValue === i.booleanValue;
                      case 4:
                          return yi(r).isEqual(yi(i));
                      case 3:
                          return function(t) { if ("string" == typeof r.timestampValue && "string" == typeof t.timestampValue && r.timestampValue.length === t.timestampValue.length) return r.timestampValue === t.timestampValue; var e = li(r.timestampValue),
                                  t = li(t.timestampValue); return e.seconds === t.seconds && e.nanos === t.nanos }(i);
                      case 5:
                          return r.stringValue === i.stringValue;
                      case 6:
                          return e = i, di(r.bytesValue).isEqual(di(e.bytesValue));
                      case 7:
                          return r.referenceValue === i.referenceValue;
                      case 8:
                          return t = i, fi((e = r).geoPointValue.latitude) === fi(t.geoPointValue.latitude) && fi(e.geoPointValue.longitude) === fi(t.geoPointValue.longitude);
                      case 2:
                          return function(t, e) { if ("integerValue" in t && "integerValue" in e) return fi(t.integerValue) === fi(e.integerValue); if ("doubleValue" in t && "doubleValue" in e) { t = fi(t.doubleValue), e = fi(e.doubleValue); return t === e ? mi(t) === mi(e) : isNaN(t) && isNaN(e) } return !1 }(r, i);
                      case 9:
                          return Kr(r.arrayValue.values || [], i.arrayValue.values || [], Ti);
                      case 10:
                          return function() { var t, e = r.mapValue.fields || {},
                                  n = i.mapValue.fields || {}; if (Yr(e) !== Yr(n)) return !1; for (t in e)
                                  if (e.hasOwnProperty(t) && (void 0 === n[t] || !Ti(e[t], n[t]))) return !1;
                              return !0 }();
                      default:
                          return Vr() } }

              function Ii(t, e) { return void 0 !== (t.values || []).find(function(t) { return Ti(t, e) }) }

              function _i(t, e) { var n, r, i, o = Ei(t),
                      s = Ei(e); if (o !== s) return jr(o, s); switch (o) {
                      case 0:
                          return 0;
                      case 1:
                          return jr(t.booleanValue, e.booleanValue);
                      case 2:
                          return r = e, i = fi(t.integerValue || t.doubleValue), r = fi(r.integerValue || r.doubleValue), i < r ? -1 : r < i ? 1 : i === r ? 0 : isNaN(i) ? isNaN(r) ? 0 : -1 : 1;
                      case 3:
                          return Si(t.timestampValue, e.timestampValue);
                      case 4:
                          return Si(yi(t), yi(e));
                      case 5:
                          return jr(t.stringValue, e.stringValue);
                      case 6:
                          return function(t, e) { t = di(t), e = di(e); return t.compareTo(e) }(t.bytesValue, e.bytesValue);
                      case 7:
                          return function(t, e) { for (var n = t.split("/"), r = e.split("/"), i = 0; i < n.length && i < r.length; i++) { var o = jr(n[i], r[i]); if (0 !== o) return o } return jr(n.length, r.length) }(t.referenceValue, e.referenceValue);
                      case 8:
                          return n = t.geoPointValue, i = e.geoPointValue, 0 !== (r = jr(fi(n.latitude), fi(i.latitude))) ? r : jr(fi(n.longitude), fi(i.longitude));
                      case 9:
                          return function(t, e) { for (var n = t.values || [], r = e.values || [], i = 0; i < n.length && i < r.length; ++i) { var o = _i(n[i], r[i]); if (o) return o } return jr(n.length, r.length) }(t.arrayValue, e.arrayValue);
                      case 10:
                          return function(t, e) { var n = t.fields || {},
                                  r = Object.keys(n),
                                  i = e.fields || {},
                                  o = Object.keys(i);
                              r.sort(), o.sort(); for (var s = 0; s < r.length && s < o.length; ++s) { var a = jr(r[s], o[s]); if (0 !== a) return a;
                                  a = _i(n[r[s]], i[o[s]]); if (0 !== a) return a } return jr(r.length, o.length) }(t.mapValue, e.mapValue);
                      default:
                          throw Vr() } }

              function Si(t, e) { if ("string" == typeof t && "string" == typeof e && t.length === e.length) return jr(t, e); var n = li(t),
                      t = li(e),
                      e = jr(n.seconds, t.seconds); return 0 !== e ? e : jr(n.nanos, t.nanos) }

              function Ai(t) { return function s(t) { return "nullValue" in t ? "null" : "booleanValue" in t ? "" + t.booleanValue : "integerValue" in t ? "" + t.integerValue : "doubleValue" in t ? "" + t.doubleValue : "timestampValue" in t ? function(t) { var t = li(t); return "time(" + t.seconds + "," + t.nanos + ")" }(t.timestampValue) : "stringValue" in t ? t.stringValue : "bytesValue" in t ? di(t.bytesValue).toBase64() : "referenceValue" in t ? (e = t.referenceValue, bi.fromName(e).toString()) : "geoPointValue" in t ? "geo(" + (e = t.geoPointValue).latitude + "," + e.longitude + ")" : "arrayValue" in t ? function(t) { for (var e = "[", n = !0, r = 0, i = t.values || []; r < i.length; r++) n ? n = !1 : e += ",", e += s(i[r]); return e + "]" }(t.arrayValue) : "mapValue" in t ? function(t) { for (var e = "{", n = !0, r = 0, i = Object.keys(t.fields || {}).sort(); r < i.length; r++) { var o = i[r];
                              n ? n = !1 : e += ",", e += o + ":" + s(t.fields[o]) } return e + "}" }(t.mapValue) : Vr(); var e }(t) }

              function Ni(t, e) { return { referenceValue: "projects/" + t.projectId + "/databases/" + t.database + "/documents/" + e.path.canonicalString() } }

              function Di(t) { return t && "integerValue" in t }

              function Ci(t) { return !!t && "arrayValue" in t }

              function ki(t) { return t && "nullValue" in t }

              function Ri(t) { return t && "doubleValue" in t && isNaN(Number(t.doubleValue)) }

              function xi(t) { return t && "mapValue" in t } var Oi = (Li.empty = function() { return new Li({ mapValue: {} }) }, Li.prototype.field = function(t) { return Li.extractNestedValue(this.buildProto(), t) }, Li.prototype.toProto = function() { return this.field(ni.emptyPath()) }, Li.prototype.set = function(t, e) { this.setOverlay(t, e) }, Li.prototype.setAll = function(t) { var n = this;
                  t.forEach(function(t, e) { t ? n.set(e, t) : n.delete(e) }) }, Li.prototype.delete = function(t) { this.setOverlay(t, null) }, Li.prototype.isEqual = function(t) { return Ti(this.buildProto(), t.buildProto()) }, Li.prototype.setOverlay = function(t, e) { for (var n = this.overlayMap, r = 0; r < t.length - 1; ++r) var i = t.get(r),
                      o = n.get(i),
                      n = (o instanceof Map || (o = o && 10 === Ei(o) ? new Map(Object.entries(o.mapValue.fields || {})) : new Map, n.set(i, o)), o);
                  n.set(t.lastSegment(), e) }, Li.prototype.applyOverlay = function(r, t) { var i = this,
                      o = !1,
                      e = Li.extractNestedValue(this.partialValue, r),
                      s = xi(e) ? Object.assign({}, e.mapValue.fields) : {}; return t.forEach(function(t, e) { var n;
                      t instanceof Map ? null != (n = i.applyOverlay(r.child(e), t)) && (s[e] = n, o = !0) : null !== t ? (s[e] = t, o = !0) : s.hasOwnProperty(e) && (delete s[e], o = !0) }), o ? { mapValue: { fields: s } } : null }, Li.prototype.buildProto = function() { var t = this.applyOverlay(ni.emptyPath(), this.overlayMap); return null != t && (this.partialValue = t, this.overlayMap.clear()), this.partialValue }, Li.extractNestedValue = function(t, e) { if (e.isEmpty()) return t; for (var n = t, r = 0; r < e.length - 1; ++r) { if (!n.mapValue.fields) return null; if (!xi(n = n.mapValue.fields[e.get(r)])) return null } return (n = (n.mapValue.fields || {})[e.lastSegment()]) || null }, Li.prototype.clone = function() { return new Li(this.buildProto()) }, Li);

              function Li(t) { this.overlayMap = new Map, this.partialValue = t } var Pi = (Fi.newInvalidDocument = function(t) { return new Fi(t, 0, zr.min(), Oi.empty(), 0) }, Fi.newFoundDocument = function(t, e, n) { return new Fi(t, 1, e, n, 0) }, Fi.newNoDocument = function(t, e) { return new Fi(t, 2, e, Oi.empty(), 0) }, Fi.newUnknownDocument = function(t, e) { return new Fi(t, 3, e, Oi.empty(), 2) }, Fi.prototype.convertToFoundDocument = function(t, e) { return this.version = t, this.documentType = 1, this.data = e, this.documentState = 0, this }, Fi.prototype.convertToNoDocument = function(t) { return this.version = t, this.documentType = 2, this.data = Oi.empty(), this.documentState = 0, this }, Fi.prototype.convertToUnknownDocument = function(t) { return this.version = t, this.documentType = 3, this.data = Oi.empty(), this.documentState = 2, this }, Fi.prototype.setHasCommittedMutations = function() { return this.documentState = 2, this }, Fi.prototype.setHasLocalMutations = function() { return this.documentState = 1, this }, Object.defineProperty(Fi.prototype, "hasLocalMutations", { get: function() { return 1 === this.documentState }, enumerable: !1, configurable: !0 }), Object.defineProperty(Fi.prototype, "hasCommittedMutations", { get: function() { return 2 === this.documentState }, enumerable: !1, configurable: !0 }), Object.defineProperty(Fi.prototype, "hasPendingWrites", { get: function() { return this.hasLocalMutations || this.hasCommittedMutations }, enumerable: !1, configurable: !0 }), Fi.prototype.isValidDocument = function() { return 0 !== this.documentType }, Fi.prototype.isFoundDocument = function() { return 1 === this.documentType }, Fi.prototype.isNoDocument = function() { return 2 === this.documentType }, Fi.prototype.isUnknownDocument = function() { return 3 === this.documentType }, Fi.prototype.isEqual = function(t) { return t instanceof Fi && this.key.isEqual(t.key) && this.version.isEqual(t.version) && this.documentType === t.documentType && this.documentState === t.documentState && this.data.isEqual(t.data) }, Fi.prototype.clone = function() { return new Fi(this.key, this.documentType, this.version, this.data.clone(), this.documentState) }, Fi.prototype.toString = function() { return "Document(" + this.key + ", " + this.version + ", " + JSON.stringify(this.data.toProto()) + ", {documentType: " + this.documentType + "}), {documentState: " + this.documentState + "})" }, Fi),
                  Mi = function(t, e, n, r, i, o, s) { void 0 === e && (e = null), void 0 === n && (n = []), void 0 === r && (r = []), void 0 === i && (i = null), void 0 === o && (o = null), void 0 === s && (s = null), this.path = t, this.collectionGroup = e, this.orderBy = n, this.filters = r, this.limit = i, this.startAt = o, this.endAt = s, this.h = null };

              function Fi(t, e, n, r, i) { this.key = t, this.documentType = e, this.version = n, this.data = r, this.documentState = i }

              function Vi(t, e, n, r, i, o, s) { return new Mi(t, e = void 0 === e ? null : e, n = void 0 === n ? [] : n, r = void 0 === r ? [] : r, i = void 0 === i ? null : i, o = void 0 === o ? null : o, s = void 0 === s ? null : s) }

              function Ui(t) { var e = t; return null === e.h && (t = e.path.canonicalString(), null !== e.collectionGroup && (t += "|cg:" + e.collectionGroup), t += "|f:", t += e.filters.map(function(t) { return (t = t).field.canonicalString() + t.op.toString() + Ai(t.value) }).join(","), t += "|ob:", t += e.orderBy.map(function(t) { return (t = t).field.canonicalString() + t.dir }).join(","), gi(e.limit) || (t += "|l:", t += e.limit), e.startAt && (t += "|lb:", t += yo(e.startAt)), e.endAt && (t += "|ub:", t += yo(e.endAt)), e.h = t), e.h }

              function qi(t, e) { if (t.limit !== e.limit) return !1; if (t.orderBy.length !== e.orderBy.length) return !1; for (var n, r, i = 0; i < t.orderBy.length; i++)
                      if (n = t.orderBy[i], r = e.orderBy[i], n.dir !== r.dir || !n.field.isEqual(r.field)) return !1;
                  if (t.filters.length !== e.filters.length) return !1; for (var o, s, a = 0; a < t.filters.length; a++)
                      if (o = t.filters[a], s = e.filters[a], o.op !== s.op || !o.field.isEqual(s.field) || !Ti(o.value, s.value)) return !1;
                  return t.collectionGroup === e.collectionGroup && !!t.path.isEqual(e.path) && !!vo(t.startAt, e.startAt) && vo(t.endAt, e.endAt) }

              function Bi(t) { return bi.isDocumentKey(t.path) && null === t.collectionGroup && 0 === t.filters.length } var ji, Ki = (n(Gi, ji = function() {}), Gi.create = function(t, e, n) { return t.isKeyField() ? "in" === e || "not-in" === e ? this.l(t, e, n) : new Wi(t, e, n) : "array-contains" === e ? new oo(t, n) : "in" === e ? new so(t, n) : "not-in" === e ? new ao(t, n) : "array-contains-any" === e ? new uo(t, n) : new Gi(t, e, n) }, Gi.l = function(t, e, n) { return new("in" === e ? Yi : Xi)(t, n) }, Gi.prototype.matches = function(t) { t = t.data.field(this.field); return "!=" === this.op ? null !== t && this.m(_i(t, this.value)) : null !== t && Ei(this.value) === Ei(t) && this.m(_i(t, this.value)) }, Gi.prototype.m = function(t) { switch (this.op) {
                      case "<":
                          return t < 0;
                      case "<=":
                          return t <= 0;
                      case "==":
                          return 0 === t;
                      case "!=":
                          return 0 !== t;
                      case ">":
                          return 0 < t;
                      case ">=":
                          return 0 <= t;
                      default:
                          return Vr() } }, Gi.prototype.g = function() { return 0 <= ["<", "<=", ">", ">=", "!=", "not-in"].indexOf(this.op) }, Gi);

              function Gi(t, e, n) { var r = this; return (r = ji.call(this) || this).field = t, r.op = e, r.value = n, r } var Qi, zi, Hi, Wi = (n(Zi, Hi = Ki), Zi.prototype.matches = function(t) { t = bi.comparator(t.key, this.key); return this.m(t) }, Zi),
                  Yi = (n($i, zi = Ki), $i.prototype.matches = function(e) { return this.keys.some(function(t) { return t.isEqual(e.key) }) }, $i),
                  Xi = (n(Ji, Qi = Ki), Ji.prototype.matches = function(e) { return !this.keys.some(function(t) { return t.isEqual(e.key) }) }, Ji);

              function Ji(t, e) { var n = this; return (n = Qi.call(this, t, "not-in", e) || this).keys = to(0, e), n }

              function $i(t, e) { var n = this; return (n = zi.call(this, t, "in", e) || this).keys = to(0, e), n }

              function Zi(t, e, n) { var r = this; return (r = Hi.call(this, t, e, n) || this).key = bi.fromName(n.referenceValue), r }

              function to(t, e) { return ((null === (e = e.arrayValue) || void 0 === e ? void 0 : e.values) || []).map(function(t) { return bi.fromName(t.referenceValue) }) } var eo, no, ro, io, oo = (n(po, io = Ki), po.prototype.matches = function(t) { t = t.data.field(this.field); return Ci(t) && Ii(t.arrayValue, this.value) }, po),
                  so = (n(fo, ro = Ki), fo.prototype.matches = function(t) { t = t.data.field(this.field); return null !== t && Ii(this.value.arrayValue, t) }, fo),
                  ao = (n(lo, no = Ki), lo.prototype.matches = function(t) { if (Ii(this.value.arrayValue, { nullValue: "NULL_VALUE" })) return !1;
                      t = t.data.field(this.field); return null !== t && !Ii(this.value.arrayValue, t) }, lo),
                  uo = (n(ho, eo = Ki), ho.prototype.matches = function(t) { var e = this,
                          t = t.data.field(this.field); return !(!Ci(t) || !t.arrayValue.values) && t.arrayValue.values.some(function(t) { return Ii(e.value.arrayValue, t) }) }, ho),
                  co = function(t, e) { this.position = t, this.before = e };

              function ho(t, e) { return eo.call(this, t, "array-contains-any", e) || this }

              function lo(t, e) { return no.call(this, t, "not-in", e) || this }

              function fo(t, e) { return ro.call(this, t, "in", e) || this }

              function po(t, e) { return io.call(this, t, "array-contains", e) || this }

              function yo(t) { return (t.before ? "b" : "a") + ":" + t.position.map(Ai).join(",") } var go = function(t, e) { void 0 === e && (e = "asc"), this.field = t, this.dir = e };

              function mo(t, e, n) { for (var r = 0, i = 0; i < t.position.length; i++) { var o = e[i],
                          s = t.position[i],
                          r = o.field.isKeyField() ? bi.comparator(bi.fromName(s.referenceValue), n.key) : _i(s, n.data.field(o.field)); if ("desc" === o.dir && (r *= -1), 0 !== r) break } return t.before ? r <= 0 : r < 0 }

              function vo(t, e) { if (null === t) return null === e; if (null === e) return !1; if (t.before !== e.before || t.position.length !== e.position.length) return !1; for (var n = 0; n < t.position.length; n++)
                      if (!Ti(t.position[n], e.position[n])) return !1;
                  return !0 } var bo = function(t, e, n, r, i, o, s, a) { void 0 === e && (e = null), void 0 === n && (n = []), void 0 === r && (r = []), void 0 === i && (i = null), void 0 === o && (o = "F"), void 0 === s && (s = null), void 0 === a && (a = null), this.path = t, this.collectionGroup = e, this.explicitOrderBy = n, this.filters = r, this.limit = i, this.limitType = o, this.startAt = s, this.endAt = a, this.p = null, this.T = null, this.startAt, this.endAt };

              function wo(t, e, n, r, i, o, s, a) { return new bo(t, e, n, r, i, o, s, a) }

              function Eo(t) { return new bo(t) }

              function To(t) { return !gi(t.limit) && "F" === t.limitType }

              function Io(t) { return !gi(t.limit) && "L" === t.limitType }

              function _o(t) { return 0 < t.explicitOrderBy.length ? t.explicitOrderBy[0].field : null }

              function So(t) { for (var e = 0, n = t.filters; e < n.length; e++) { var r = n[e]; if (r.g()) return r.field } return null }

              function Ao(t) { return null !== t.collectionGroup }

              function No(t) { var e = t; if (null === e.p) { e.p = []; var n = So(e),
                          t = _o(e); if (null !== n && null === t) n.isKeyField() || e.p.push(new go(n)), e.p.push(new go(ni.keyField(), "asc"));
                      else { for (var r = !1, i = 0, o = e.explicitOrderBy; i < o.length; i++) { var s = o[i];
                              e.p.push(s), s.field.isKeyField() && (r = !0) }
                          r || (n = 0 < e.explicitOrderBy.length ? e.explicitOrderBy[e.explicitOrderBy.length - 1].dir : "asc", e.p.push(new go(ni.keyField(), n))) } } return e.p }

              function Do(t) { var e = t; if (!e.T)
                      if ("F" === e.limitType) e.T = Vi(e.path, e.collectionGroup, No(e), e.filters, e.limit, e.startAt, e.endAt);
                      else { for (var n = [], r = 0, i = No(e); r < i.length; r++) { var o = i[r],
                                  s = "desc" === o.dir ? "asc" : "desc";
                              n.push(new go(o.field, s)) } var a = e.endAt ? new co(e.endAt.position, !e.endAt.before) : null,
                              t = e.startAt ? new co(e.startAt.position, !e.startAt.before) : null;
                          e.T = Vi(e.path, e.collectionGroup, n, e.filters, e.limit, a, t) }
                  return e.T }

              function Co(t, e, n) { return new bo(t.path, t.collectionGroup, t.explicitOrderBy.slice(), t.filters.slice(), e, n, t.startAt, t.endAt) }

              function ko(t, e) { return qi(Do(t), Do(e)) && t.limitType === e.limitType }

              function Ro(t) { return Ui(Do(t)) + "|lt:" + t.limitType }

              function xo(t) { return "Query(target=" + (e = Do(t), n = e.path.canonicalString(), null !== e.collectionGroup && (n += " collectionGroup=" + e.collectionGroup), 0 < e.filters.length && (n += ", filters: [" + e.filters.map(function(t) { return (t = t).field.canonicalString() + " " + t.op + " " + Ai(t.value) }).join(", ") + "]"), gi(e.limit) || (n += ", limit: " + e.limit), 0 < e.orderBy.length && (n += ", orderBy: [" + e.orderBy.map(function(t) { return (t = t).field.canonicalString() + " (" + t.dir + ")" }).join(", ") + "]"), e.startAt && (n += ", startAt: " + yo(e.startAt)), e.endAt && (n += ", endAt: " + yo(e.endAt)), "Target(" + n + ")") + "; limitType=" + t.limitType + ")"; var e, n }

              function Oo(i, t) { return t.isFoundDocument() && (e = i, n = t.key.path, null !== e.collectionGroup ? t.key.hasCollectionId(e.collectionGroup) && e.path.isPrefixOf(n) : bi.isDocumentKey(e.path) ? e.path.isEqual(n) : e.path.isImmediateParentOf(n)) && function(t) { for (var e = 0, n = i.explicitOrderBy; e < n.length; e++) { var r = n[e]; if (!r.field.isKeyField() && null === t.data.field(r.field)) return } return 1 }(t) && function(t) { for (var e = 0, n = i.filters; e < n.length; e++)
                          if (!n[e].matches(t)) return;
                      return 1 }(t) && (n = t, (!(t = i).startAt || mo(t.startAt, No(t), n)) && (!t.endAt || !mo(t.endAt, No(t), n))); var e, n }

              function Lo(a) { return function(t, e) { for (var n = !1, r = 0, i = No(a); r < i.length; r++) { var o = i[r],
                              s = function(t, r, e) { var n = t.field.isKeyField() ? bi.comparator(r.key, e.key) : function(t, e) { var n = r.data.field(t),
                                          t = e.data.field(t); return null !== n && null !== t ? _i(n, t) : Vr() }(t.field, e); switch (t.dir) {
                                      case "asc":
                                          return n;
                                      case "desc":
                                          return -1 * n;
                                      default:
                                          return Vr() } }(o, t, e); if (0 !== s) return s;
                          n = n || o.field.isKeyField() } return 0 } }

              function Po(t, e) { if (t.I) { if (isNaN(e)) return { doubleValue: "NaN" }; if (e === 1 / 0) return { doubleValue: "Infinity" }; if (e === -1 / 0) return { doubleValue: "-Infinity" } } return { doubleValue: mi(e) ? "-0" : e } }

              function Mo(t) { return { integerValue: "" + t } }

              function Fo(t, e) { return vi(e) ? Mo(e) : Po(t, e) }
              I = function() { this._ = void 0 };

              function Vo(t, e) { return t instanceof Jo ? Di(t = e) || t && "doubleValue" in t ? e : { integerValue: 0 } : null } var Uo, qo, Bo = (n(Go, qo = I), Go),
                  jo = (n(Ko, Uo = I), Ko);

              function Ko(t) { var e = this; return (e = Uo.call(this) || this).elements = t, e }

              function Go() { return null !== qo && qo.apply(this, arguments) || this }

              function Qo(t, e) { for (var n = ts(e), r = 0, i = t.elements; r < i.length; r++) ! function(e) { n.some(function(t) { return Ti(t, e) }) || n.push(e) }(i[r]); return { arrayValue: { values: n } } } var zo, Ho = (n(Wo, zo = I), Wo);

              function Wo(t) { var e = this; return (e = zo.call(this) || this).elements = t, e }

              function Yo(t, e) { for (var n = ts(e), r = 0, i = t.elements; r < i.length; r++) ! function(e) { n = n.filter(function(t) { return !Ti(t, e) }) }(i[r]); return { arrayValue: { values: n } } } var Xo, Jo = (n($o, Xo = I), $o);

              function $o(t, e) { var n = this; return (n = Xo.call(this) || this).R = t, n.A = e, n }

              function Zo(t) { return fi(t.integerValue || t.doubleValue) }

              function ts(t) { return Ci(t) && t.arrayValue.values ? t.arrayValue.values.slice() : [] }

              function es(t, e) { this.version = t, this.transformResults = e } var ns = function(t, e) { this.field = t, this.transform = e },
                  rs = (is.none = function() { return new is }, is.exists = function(t) { return new is(void 0, t) }, is.updateTime = function(t) { return new is(t) }, Object.defineProperty(is.prototype, "isNone", { get: function() { return void 0 === this.updateTime && void 0 === this.exists }, enumerable: !1, configurable: !0 }), is.prototype.isEqual = function(t) { return this.exists === t.exists && (this.updateTime ? !!t.updateTime && this.updateTime.isEqual(t.updateTime) : !t.updateTime) }, is);

              function is(t, e) { this.updateTime = t, this.exists = e }

              function os(t, e) { return void 0 !== t.updateTime ? e.isFoundDocument() && e.version.isEqual(t.updateTime) : void 0 === t.exists || t.exists === e.isFoundDocument() }
              Se = function() {};

              function ss(t, e, n) { var r, i, o, s;
                  t instanceof ls ? (i = e, o = n, os((r = t).precondition, i) && (s = r.value.clone(), o = ms(r.fieldTransforms, o, i), s.setAll(o), i.convertToFoundDocument(us(i), s).setHasLocalMutations())) : t instanceof fs ? (o = e, i = n, os((s = t).precondition, o) && (n = ms(s.fieldTransforms, i, o), (i = o.data).setAll(ys(s)), i.setAll(n), o.convertToFoundDocument(us(o), i).setHasLocalMutations())) : (e = e, os(t.precondition, e) && e.convertToNoDocument(zr.min())) }

              function as(t, e) { return t.type === e.type && !!t.key.isEqual(e.key) && !!t.precondition.isEqual(e.precondition) && (n = t.fieldTransforms, r = e.fieldTransforms, !!(void 0 === n && void 0 === r || n && r && Kr(n, r, function(t, e) { return e = e, (t = t).field.isEqual(e.field) && (t = t.transform, e = e.transform, t instanceof jo && e instanceof jo || t instanceof Ho && e instanceof Ho ? Kr(t.elements, e.elements, Ti) : t instanceof Jo && e instanceof Jo ? Ti(t.A, e.A) : t instanceof Bo && e instanceof Bo) }))) && (0 === t.type ? t.value.isEqual(e.value) : 1 !== t.type || t.data.isEqual(e.data) && t.fieldMask.isEqual(e.fieldMask)); var n, r }

              function us(t) { return t.isFoundDocument() ? t.version : zr.min() } var cs, hs, ls = (n(ps, hs = Se), ps),
                  fs = (n(ds, cs = Se), ds);

              function ds(t, e, n, r, i) { void 0 === i && (i = []); var o = this; return (o = cs.call(this) || this).key = t, o.data = e, o.fieldMask = n, o.precondition = r, o.fieldTransforms = i, o.type = 1, o }

              function ps(t, e, n, r) { void 0 === r && (r = []); var i = this; return (i = hs.call(this) || this).key = t, i.value = e, i.precondition = n, i.fieldTransforms = r, i.type = 0, i }

              function ys(n) { var r = new Map; return n.fieldMask.fields.forEach(function(t) { var e;
                      t.isEmpty() || (e = n.data.field(t), r.set(t, e)) }), r }

              function gs(t, e, n) { var r = new Map;
                  Ur(t.length === n.length); for (var i = 0; i < n.length; i++) { var o = t[i],
                          s = o.transform,
                          a = e.data.field(o.field);
                      r.set(o.field, (o = s, s = a, a = n[i], o instanceof jo ? Qo(o, s) : o instanceof Ho ? Yo(o, s) : a)) } return r }

              function ms(t, e, n) { for (var r, i = new Map, o = 0, s = t; o < s.length; o++) { var a = s[o],
                          u = a.transform,
                          c = n.data.field(a.field);
                      i.set(a.field, (r = c, a = e, c = void 0, (u = u) instanceof Bo ? (c = { fields: { __type__: { stringValue: "server_timestamp" }, __local_write_time__: { timestampValue: { seconds: a.seconds, nanos: a.nanoseconds } } } }, r && (c.fields.__previous_value__ = r), { mapValue: c }) : u instanceof jo ? Qo(u, r) : u instanceof Ho ? Yo(u, r) : (u = Vo(c = u, r), r = Zo(u) + Zo(c.A), Di(u) && Di(c.A) ? Mo(r) : Po(c.R, r)))) } return i }

              function vs(t) { this.count = t } var bs, ws, Es, Ts = (n(Ss, Es = Se), Ss),
                  Is = (n(_s, ws = Se), _s);

              function _s(t, e) { var n = this; return (n = ws.call(this) || this).key = t, n.precondition = e, n.type = 3, n.fieldTransforms = [], n }

              function Ss(t, e) { var n = this; return (n = Es.call(this) || this).key = t, n.precondition = e, n.type = 2, n.fieldTransforms = [], n }

              function As(t) { switch (t) {
                      case Cr.OK:
                          return Vr(), 0;
                      case Cr.CANCELLED:
                      case Cr.UNKNOWN:
                      case Cr.DEADLINE_EXCEEDED:
                      case Cr.RESOURCE_EXHAUSTED:
                      case Cr.INTERNAL:
                      case Cr.UNAVAILABLE:
                      case Cr.UNAUTHENTICATED:
                          return;
                      case Cr.INVALID_ARGUMENT:
                      case Cr.NOT_FOUND:
                      case Cr.ALREADY_EXISTS:
                      case Cr.PERMISSION_DENIED:
                      case Cr.FAILED_PRECONDITION:
                      case Cr.ABORTED:
                      case Cr.OUT_OF_RANGE:
                      case Cr.UNIMPLEMENTED:
                      case Cr.DATA_LOSS:
                          return 1;
                      default:
                          return Vr(), 0 } }

              function Ns(t) { if (void 0 === t) return Pr("GRPC error has no .code"), Cr.UNKNOWN; switch (t) {
                      case bs.OK:
                          return Cr.OK;
                      case bs.CANCELLED:
                          return Cr.CANCELLED;
                      case bs.UNKNOWN:
                          return Cr.UNKNOWN;
                      case bs.DEADLINE_EXCEEDED:
                          return Cr.DEADLINE_EXCEEDED;
                      case bs.RESOURCE_EXHAUSTED:
                          return Cr.RESOURCE_EXHAUSTED;
                      case bs.INTERNAL:
                          return Cr.INTERNAL;
                      case bs.UNAVAILABLE:
                          return Cr.UNAVAILABLE;
                      case bs.UNAUTHENTICATED:
                          return Cr.UNAUTHENTICATED;
                      case bs.INVALID_ARGUMENT:
                          return Cr.INVALID_ARGUMENT;
                      case bs.NOT_FOUND:
                          return Cr.NOT_FOUND;
                      case bs.ALREADY_EXISTS:
                          return Cr.ALREADY_EXISTS;
                      case bs.PERMISSION_DENIED:
                          return Cr.PERMISSION_DENIED;
                      case bs.FAILED_PRECONDITION:
                          return Cr.FAILED_PRECONDITION;
                      case bs.ABORTED:
                          return Cr.ABORTED;
                      case bs.OUT_OF_RANGE:
                          return Cr.OUT_OF_RANGE;
                      case bs.UNIMPLEMENTED:
                          return Cr.UNIMPLEMENTED;
                      case bs.DATA_LOSS:
                          return Cr.DATA_LOSS;
                      default:
                          return Vr() } }(I = bs = bs || {})[I.OK = 0] = "OK", I[I.CANCELLED = 1] = "CANCELLED", I[I.UNKNOWN = 2] = "UNKNOWN", I[I.INVALID_ARGUMENT = 3] = "INVALID_ARGUMENT", I[I.DEADLINE_EXCEEDED = 4] = "DEADLINE_EXCEEDED", I[I.NOT_FOUND = 5] = "NOT_FOUND", I[I.ALREADY_EXISTS = 6] = "ALREADY_EXISTS", I[I.PERMISSION_DENIED = 7] = "PERMISSION_DENIED", I[I.UNAUTHENTICATED = 16] = "UNAUTHENTICATED", I[I.RESOURCE_EXHAUSTED = 8] = "RESOURCE_EXHAUSTED", I[I.FAILED_PRECONDITION = 9] = "FAILED_PRECONDITION", I[I.ABORTED = 10] = "ABORTED", I[I.OUT_OF_RANGE = 11] = "OUT_OF_RANGE", I[I.UNIMPLEMENTED = 12] = "UNIMPLEMENTED", I[I.INTERNAL = 13] = "INTERNAL", I[I.UNAVAILABLE = 14] = "UNAVAILABLE", I[I.DATA_LOSS = 15] = "DATA_LOSS"; var Ds = (Os.prototype.insert = function(t, e) { return new Os(this.comparator, this.root.insert(t, e, this.comparator).copy(null, null, ks.BLACK, null, null)) }, Os.prototype.remove = function(t) { return new Os(this.comparator, this.root.remove(t, this.comparator).copy(null, null, ks.BLACK, null, null)) }, Os.prototype.get = function(t) { for (var e = this.root; !e.isEmpty();) { var n = this.comparator(t, e.key); if (0 === n) return e.value;
                          n < 0 ? e = e.left : 0 < n && (e = e.right) } return null }, Os.prototype.indexOf = function(t) { for (var e = 0, n = this.root; !n.isEmpty();) { var r = this.comparator(t, n.key); if (0 === r) return e + n.left.size;
                          n = r < 0 ? n.left : (e += n.left.size + 1, n.right) } return -1 }, Os.prototype.isEmpty = function() { return this.root.isEmpty() }, Object.defineProperty(Os.prototype, "size", { get: function() { return this.root.size }, enumerable: !1, configurable: !0 }), Os.prototype.minKey = function() { return this.root.minKey() }, Os.prototype.maxKey = function() { return this.root.maxKey() }, Os.prototype.inorderTraversal = function(t) { return this.root.inorderTraversal(t) }, Os.prototype.forEach = function(n) { this.inorderTraversal(function(t, e) { return n(t, e), !1 }) }, Os.prototype.toString = function() { var n = []; return this.inorderTraversal(function(t, e) { return n.push(t + ":" + e), !1 }), "{" + n.join(", ") + "}" }, Os.prototype.reverseTraversal = function(t) { return this.root.reverseTraversal(t) }, Os.prototype.getIterator = function() { return new Cs(this.root, null, this.comparator, !1) }, Os.prototype.getIteratorFrom = function(t) { return new Cs(this.root, t, this.comparator, !1) }, Os.prototype.getReverseIterator = function() { return new Cs(this.root, null, this.comparator, !0) }, Os.prototype.getReverseIteratorFrom = function(t) { return new Cs(this.root, t, this.comparator, !0) }, Os),
                  Cs = (xs.prototype.getNext = function() { var t = this.nodeStack.pop(),
                          e = { key: t.key, value: t.value }; if (this.isReverse)
                          for (t = t.left; !t.isEmpty();) this.nodeStack.push(t), t = t.right;
                      else
                          for (t = t.right; !t.isEmpty();) this.nodeStack.push(t), t = t.left; return e }, xs.prototype.hasNext = function() { return 0 < this.nodeStack.length }, xs.prototype.peek = function() { if (0 === this.nodeStack.length) return null; var t = this.nodeStack[this.nodeStack.length - 1]; return { key: t.key, value: t.value } }, xs),
                  ks = (Rs.prototype.copy = function(t, e, n, r, i) { return new Rs(null != t ? t : this.key, null != e ? e : this.value, null != n ? n : this.color, null != r ? r : this.left, null != i ? i : this.right) }, Rs.prototype.isEmpty = function() { return !1 }, Rs.prototype.inorderTraversal = function(t) { return this.left.inorderTraversal(t) || t(this.key, this.value) || this.right.inorderTraversal(t) }, Rs.prototype.reverseTraversal = function(t) { return this.right.reverseTraversal(t) || t(this.key, this.value) || this.left.reverseTraversal(t) }, Rs.prototype.min = function() { return this.left.isEmpty() ? this : this.left.min() }, Rs.prototype.minKey = function() { return this.min().key }, Rs.prototype.maxKey = function() { return this.right.isEmpty() ? this.key : this.right.maxKey() }, Rs.prototype.insert = function(t, e, n) { var r = this,
                          i = n(t, r.key); return (r = i < 0 ? r.copy(null, null, null, r.left.insert(t, e, n), null) : 0 === i ? r.copy(null, e, null, null, null) : r.copy(null, null, null, null, r.right.insert(t, e, n))).fixUp() }, Rs.prototype.removeMin = function() { if (this.left.isEmpty()) return Rs.EMPTY; var t = this; return (t = (t = !t.left.isRed() && !t.left.left.isRed() ? t.moveRedLeft() : t).copy(null, null, null, t.left.removeMin(), null)).fixUp() }, Rs.prototype.remove = function(t, e) { var n, r = this; if (e(t, r.key) < 0) r = (r = !(r.left.isEmpty() || r.left.isRed() || r.left.left.isRed()) ? r.moveRedLeft() : r).copy(null, null, null, r.left.remove(t, e), null);
                      else { if (0 === e(t, (r = !((r = r.left.isRed() ? r.rotateRight() : r).right.isEmpty() || r.right.isRed() || r.right.left.isRed()) ? r.moveRedRight() : r).key)) { if (r.right.isEmpty()) return Rs.EMPTY;
                              n = r.right.min(), r = r.copy(n.key, n.value, null, null, r.right.removeMin()) }
                          r = r.copy(null, null, null, null, r.right.remove(t, e)) } return r.fixUp() }, Rs.prototype.isRed = function() { return this.color }, Rs.prototype.fixUp = function() { var t = this; return t = (t = (t = t.right.isRed() && !t.left.isRed() ? t.rotateLeft() : t).left.isRed() && t.left.left.isRed() ? t.rotateRight() : t).left.isRed() && t.right.isRed() ? t.colorFlip() : t }, Rs.prototype.moveRedLeft = function() { var t = this.colorFlip(); return t = t.right.left.isRed() ? (t = (t = t.copy(null, null, null, null, t.right.rotateRight())).rotateLeft()).colorFlip() : t }, Rs.prototype.moveRedRight = function() { var t = this.colorFlip(); return t = t.left.left.isRed() ? (t = t.rotateRight()).colorFlip() : t }, Rs.prototype.rotateLeft = function() { var t = this.copy(null, null, Rs.RED, null, this.right.left); return this.right.copy(null, null, this.color, t, null) }, Rs.prototype.rotateRight = function() { var t = this.copy(null, null, Rs.RED, this.left.right, null); return this.left.copy(null, null, this.color, null, t) }, Rs.prototype.colorFlip = function() { var t = this.left.copy(null, null, !this.left.color, null, null),
                          e = this.right.copy(null, null, !this.right.color, null, null); return this.copy(null, null, !this.color, t, e) }, Rs.prototype.checkMaxDepth = function() { var t = this.check(); return Math.pow(2, t) <= this.size + 1 }, Rs.prototype.check = function() { if (this.isRed() && this.left.isRed()) throw Vr(); if (this.right.isRed()) throw Vr(); var t = this.left.check(); if (t !== this.right.check()) throw Vr(); return t + (this.isRed() ? 0 : 1) }, Rs);

              function Rs(t, e, n, r, i) { this.key = t, this.value = e, this.color = null != n ? n : Rs.RED, this.left = null != r ? r : Rs.EMPTY, this.right = null != i ? i : Rs.EMPTY, this.size = this.left.size + 1 + this.right.size }

              function xs(t, e, n, r) { this.isReverse = r, this.nodeStack = []; for (var i = 1; !t.isEmpty();)
                      if (i = e ? n(t.key, e) : 1, r && (i *= -1), i < 0) t = this.isReverse ? t.left : t.right;
                      else { if (0 === i) { this.nodeStack.push(t); break }
                          this.nodeStack.push(t), t = this.isReverse ? t.right : t.left } }

              function Os(t, e) { this.comparator = t, this.root = e || ks.EMPTY }

              function Ls() { this.size = 0 }
              ks.EMPTY = null, ks.RED = !0, ks.BLACK = !1, ks.EMPTY = (Object.defineProperty(Ls.prototype, "key", { get: function() { throw Vr() }, enumerable: !1, configurable: !0 }), Object.defineProperty(Ls.prototype, "value", { get: function() { throw Vr() }, enumerable: !1, configurable: !0 }), Object.defineProperty(Ls.prototype, "color", { get: function() { throw Vr() }, enumerable: !1, configurable: !0 }), Object.defineProperty(Ls.prototype, "left", { get: function() { throw Vr() }, enumerable: !1, configurable: !0 }), Object.defineProperty(Ls.prototype, "right", { get: function() { throw Vr() }, enumerable: !1, configurable: !0 }), Ls.prototype.copy = function(t, e, n, r, i) { return this }, Ls.prototype.insert = function(t, e, n) { return new ks(t, e) }, Ls.prototype.remove = function(t, e) { return this }, Ls.prototype.isEmpty = function() { return !0 }, Ls.prototype.inorderTraversal = function(t) { return !1 }, Ls.prototype.reverseTraversal = function(t) { return !1 }, Ls.prototype.minKey = function() { return null }, Ls.prototype.maxKey = function() { return null }, Ls.prototype.isRed = function() { return !1 }, Ls.prototype.checkMaxDepth = function() { return !0 }, Ls.prototype.check = function() { return 0 }, new Ls); var Ps = (Us.prototype.has = function(t) { return null !== this.data.get(t) }, Us.prototype.first = function() { return this.data.minKey() }, Us.prototype.last = function() { return this.data.maxKey() }, Object.defineProperty(Us.prototype, "size", { get: function() { return this.data.size }, enumerable: !1, configurable: !0 }), Us.prototype.indexOf = function(t) { return this.data.indexOf(t) }, Us.prototype.forEach = function(n) { this.data.inorderTraversal(function(t, e) { return n(t), !1 }) }, Us.prototype.forEachInRange = function(t, e) { for (var n = this.data.getIteratorFrom(t[0]); n.hasNext();) { var r = n.getNext(); if (0 <= this.comparator(r.key, t[1])) return;
                          e(r.key) } }, Us.prototype.forEachWhile = function(t, e) { for (var n = void 0 !== e ? this.data.getIteratorFrom(e) : this.data.getIterator(); n.hasNext();)
                          if (!t(n.getNext().key)) return }, Us.prototype.firstAfterOrEqual = function(t) { t = this.data.getIteratorFrom(t); return t.hasNext() ? t.getNext().key : null }, Us.prototype.getIterator = function() { return new Ms(this.data.getIterator()) }, Us.prototype.getIteratorFrom = function(t) { return new Ms(this.data.getIteratorFrom(t)) }, Us.prototype.add = function(t) { return this.copy(this.data.remove(t).insert(t, !0)) }, Us.prototype.delete = function(t) { return this.has(t) ? this.copy(this.data.remove(t)) : this }, Us.prototype.isEmpty = function() { return this.data.isEmpty() }, Us.prototype.unionWith = function(t) { var e = this; return e.size < t.size && (e = t, t = this), t.forEach(function(t) { e = e.add(t) }), e }, Us.prototype.isEqual = function(t) { if (!(t instanceof Us)) return !1; if (this.size !== t.size) return !1; for (var e = this.data.getIterator(), n = t.data.getIterator(); e.hasNext();) { var r = e.getNext().key,
                              i = n.getNext().key; if (0 !== this.comparator(r, i)) return !1 } return !0 }, Us.prototype.toArray = function() { var e = []; return this.forEach(function(t) { e.push(t) }), e }, Us.prototype.toString = function() { var e = []; return this.forEach(function(t) { return e.push(t) }), "SortedSet(" + e.toString() + ")" }, Us.prototype.copy = function(t) { var e = new Us(this.comparator); return e.data = t, e }, Us),
                  Ms = (Vs.prototype.getNext = function() { return this.iter.getNext().key }, Vs.prototype.hasNext = function() { return this.iter.hasNext() }, Vs),
                  Fs = new Ds(bi.comparator);

              function Vs(t) { this.iter = t }

              function Us(t) { this.comparator = t, this.data = new Ds(this.comparator) } var qs = new Ds(bi.comparator); var Bs = new Ds(bi.comparator); var js = new Ps(bi.comparator);

              function Ks() { for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e]; for (var n = js, r = 0, i = t; r < i.length; r++) var o = i[r],
                      n = n.add(o); return n } var Gs = new Ps(jr); var Qs = (ea.createSynthesizedRemoteEventForCurrentChange = function(t, e) { var n = new Map; return n.set(t, zs.createSynthesizedTargetChangeForCurrentChange(t, e)), new ea(zr.min(), n, Gs, Fs, Ks()) }, ea),
                  zs = (ta.createSynthesizedTargetChangeForCurrentChange = function(t, e) { return new ta(ii.EMPTY_BYTE_STRING, e, Ks(), Ks(), Ks()) }, ta),
                  Hs = function(t, e, n, r) { this.v = t, this.removedTargetIds = e, this.key = n, this.P = r },
                  Ws = function(t, e) { this.targetId = t, this.V = e },
                  Ys = function(t, e, n, r) { void 0 === n && (n = ii.EMPTY_BYTE_STRING), void 0 === r && (r = null), this.state = t, this.targetIds = e, this.resumeToken = n, this.cause = r },
                  Xs = (Object.defineProperty(Zs.prototype, "current", { get: function() { return this.N }, enumerable: !1, configurable: !0 }), Object.defineProperty(Zs.prototype, "resumeToken", { get: function() { return this.C }, enumerable: !1, configurable: !0 }), Object.defineProperty(Zs.prototype, "k", { get: function() { return 0 !== this.S }, enumerable: !1, configurable: !0 }), Object.defineProperty(Zs.prototype, "O", { get: function() { return this.F }, enumerable: !1, configurable: !0 }), Zs.prototype.$ = function(t) { 0 < t.approximateByteSize() && (this.F = !0, this.C = t) }, Zs.prototype.M = function() { var n = Ks(),
                          r = Ks(),
                          i = Ks(); return this.D.forEach(function(t, e) { switch (e) {
                              case 0:
                                  n = n.add(t); break;
                              case 2:
                                  r = r.add(t); break;
                              case 1:
                                  i = i.add(t); break;
                              default:
                                  Vr() } }), new zs(this.C, this.N, n, r, i) }, Zs.prototype.L = function() { this.F = !1, this.D = ra() }, Zs.prototype.B = function(t, e) { this.F = !0, this.D = this.D.insert(t, e) }, Zs.prototype.q = function(t) { this.F = !0, this.D = this.D.remove(t) }, Zs.prototype.U = function() { this.S += 1 }, Zs.prototype.K = function() {--this.S }, Zs.prototype.j = function() { this.F = !0, this.N = !0 }, Zs),
                  Js = ($s.prototype.X = function(t) { for (var e = 0, n = t.v; e < n.length; e++) { var r = n[e];
                          t.P && t.P.isFoundDocument() ? this.Z(r, t.P) : this.tt(r, t.key, t.P) } for (var i = 0, o = t.removedTargetIds; i < o.length; i++) r = o[i], this.tt(r, t.key, t.P) }, $s.prototype.et = function(n) { var r = this;
                      this.forEachTarget(n, function(t) { var e = r.nt(t); switch (n.state) {
                              case 0:
                                  r.st(t) && e.$(n.resumeToken); break;
                              case 1:
                                  e.K(), e.k || e.L(), e.$(n.resumeToken); break;
                              case 2:
                                  e.K(), e.k || r.removeTarget(t); break;
                              case 3:
                                  r.st(t) && (e.j(), e.$(n.resumeToken)); break;
                              case 4:
                                  r.st(t) && (r.it(t), e.$(n.resumeToken)); break;
                              default:
                                  Vr() } }) }, $s.prototype.forEachTarget = function(t, n) { var r = this;
                      0 < t.targetIds.length ? t.targetIds.forEach(n) : this.G.forEach(function(t, e) { r.st(e) && n(e) }) }, $s.prototype.rt = function(t) { var e = t.targetId,
                          n = t.V.count,
                          t = this.ot(e);
                      t && (Bi(t = t.target) ? 0 === n ? (t = new bi(t.path), this.tt(e, t, Pi.newNoDocument(t, zr.min()))) : Ur(1 === n) : this.ct(e) !== n && (this.it(e), this.Y = this.Y.add(e))) }, $s.prototype.at = function(r) { var i = this,
                          o = new Map;
                      this.G.forEach(function(t, e) { var n = i.ot(e);
                          n && (t.current && Bi(n.target) && (n = new bi(n.target.path), null !== i.H.get(n) || i.ut(e, n) || i.tt(e, n, Pi.newNoDocument(n, r))), t.O && (o.set(e, t.M()), t.L())) }); var s = Ks();
                      this.J.forEach(function(t, e) { var n = !0;
                          e.forEachWhile(function(t) { t = i.ot(t); return !t || 2 === t.purpose || (n = !1) }), n && (s = s.add(t)) }); var t = new Qs(r, o, this.Y, this.H, s); return this.H = Fs, this.J = na(), this.Y = new Ps(jr), t }, $s.prototype.Z = function(t, e) { var n;
                      this.st(t) && (n = this.ut(t, e.key) ? 2 : 0, this.nt(t).B(e.key, n), this.H = this.H.insert(e.key, e), this.J = this.J.insert(e.key, this.ht(e.key).add(t))) }, $s.prototype.tt = function(t, e, n) { var r;
                      this.st(t) && (r = this.nt(t), this.ut(t, e) ? r.B(e, 1) : r.q(e), this.J = this.J.insert(e, this.ht(e).delete(t)), n && (this.H = this.H.insert(e, n))) }, $s.prototype.removeTarget = function(t) { this.G.delete(t) }, $s.prototype.ct = function(t) { var e = this.nt(t).M(); return this.W.getRemoteKeysForTarget(t).size + e.addedDocuments.size - e.removedDocuments.size }, $s.prototype.U = function(t) { this.nt(t).U() }, $s.prototype.nt = function(t) { var e = this.G.get(t); return e || (e = new Xs, this.G.set(t, e)), e }, $s.prototype.ht = function(t) { var e = this.J.get(t); return e || (e = new Ps(jr), this.J = this.J.insert(t, e)), e }, $s.prototype.st = function(t) { var e = null !== this.ot(t); return e || Lr("WatchChangeAggregator", "Detected inactive target", t), e }, $s.prototype.ot = function(t) { var e = this.G.get(t); return e && e.k ? null : this.W.lt(t) }, $s.prototype.it = function(e) { var n = this;
                      this.G.set(e, new Xs), this.W.getRemoteKeysForTarget(e).forEach(function(t) { n.tt(e, t, null) }) }, $s.prototype.ut = function(t, e) { return this.W.getRemoteKeysForTarget(t).has(e) }, $s);

              function $s(t) { this.W = t, this.G = new Map, this.H = Fs, this.J = na(), this.Y = new Ps(jr) }

              function Zs() { this.S = 0, this.D = ra(), this.C = ii.EMPTY_BYTE_STRING, this.N = !1, this.F = !0 }

              function ta(t, e, n, r, i) { this.resumeToken = t, this.current = e, this.addedDocuments = n, this.modifiedDocuments = r, this.removedDocuments = i }

              function ea(t, e, n, r, i) { this.snapshotVersion = t, this.targetChanges = e, this.targetMismatches = n, this.documentUpdates = r, this.resolvedLimboDocuments = i }

              function na() { return new Ds(bi.comparator) }

              function ra() { return new Ds(bi.comparator) } var ia = { asc: "ASCENDING", desc: "DESCENDING" },
                  oa = { "<": "LESS_THAN", "<=": "LESS_THAN_OR_EQUAL", ">": "GREATER_THAN", ">=": "GREATER_THAN_OR_EQUAL", "==": "EQUAL", "!=": "NOT_EQUAL", "array-contains": "ARRAY_CONTAINS", in: "IN", "not-in": "NOT_IN", "array-contains-any": "ARRAY_CONTAINS_ANY" },
                  sa = function(t, e) { this.databaseId = t, this.I = e };

              function aa(t, e) { return t.I ? new Date(1e3 * e.seconds).toISOString().replace(/\.\d*/, "").replace("Z", "") + "." + ("000000000" + e.nanoseconds).slice(-9) + "Z" : { seconds: "" + e.seconds, nanos: e.nanoseconds } }

              function ua(t, e) { return t.I ? e.toBase64() : e.toUint8Array() }

              function ca(t) { return Ur(!!t), zr.fromTimestamp((t = li(t), new Qr(t.seconds, t.nanos))) }

              function ha(t, e) { return new ti(["projects", t.projectId, "databases", t.database]).child("documents").child(e).canonicalString() }

              function la(t) { t = ti.fromString(t); return Ur(Ra(t)), t }

              function fa(t, e) { return ha(t.databaseId, e.path) }

              function da(t, e) { e = la(e); if (e.get(1) !== t.databaseId.projectId) throw new kr(Cr.INVALID_ARGUMENT, "Tried to deserialize key from different project: " + e.get(1) + " vs " + t.databaseId.projectId); if (e.get(3) !== t.databaseId.database) throw new kr(Cr.INVALID_ARGUMENT, "Tried to deserialize key from different database: " + e.get(3) + " vs " + t.databaseId.database); return new bi(ma(e)) }

              function pa(t, e) { return ha(t.databaseId, e) }

              function ya(t) { t = la(t); return 4 === t.length ? ti.emptyPath() : ma(t) }

              function ga(t) { return new ti(["projects", t.databaseId.projectId, "databases", t.databaseId.database]).canonicalString() }

              function ma(t) { return Ur(4 < t.length && "documents" === t.get(4)), t.popFirst(5) }

              function va(t, e, n) { return { name: fa(t, e), fields: n.toProto().mapValue.fields } }

              function ba(t, e, n) { var r = da(t, e.name),
                      t = ca(e.updateTime),
                      e = new Oi({ mapValue: { fields: e.fields } }),
                      e = Pi.newFoundDocument(r, t, e); return n && e.setHasCommittedMutations(), n ? e.setHasCommittedMutations() : e }

              function wa(t, e) { var n, r, i; if (e instanceof ls) n = { update: va(t, e.key, e.value) };
                  else if (e instanceof Ts) n = { delete: fa(t, e.key) };
                  else if (e instanceof fs) n = { update: va(t, e.key, e.data), updateMask: (i = e.fieldMask, r = [], i.fields.forEach(function(t) { return r.push(t.canonicalString()) }), { fieldPaths: r }) };
                  else { if (!(e instanceof Is)) return Vr();
                      n = { verify: fa(t, e.key) } } return 0 < e.fieldTransforms.length && (n.updateTransforms = e.fieldTransforms.map(function(t) { var e = t.transform; if (e instanceof Bo) return { fieldPath: t.field.canonicalString(), setToServerValue: "REQUEST_TIME" }; if (e instanceof jo) return { fieldPath: t.field.canonicalString(), appendMissingElements: { values: e.elements } }; if (e instanceof Ho) return { fieldPath: t.field.canonicalString(), removeAllFromArray: { values: e.elements } }; if (e instanceof Jo) return { fieldPath: t.field.canonicalString(), increment: e.A }; throw Vr() })), e.precondition.isNone || (n.currentDocument = void 0 !== (i = e.precondition).updateTime ? { updateTime: (e = t, t = i.updateTime, aa(e, t.toTimestamp())) } : void 0 !== i.exists ? { exists: i.exists } : Vr()), n }

              function Ea(e, t) { var n = t.currentDocument ? void 0 !== (s = t.currentDocument).updateTime ? rs.updateTime(ca(s.updateTime)) : void 0 !== s.exists ? rs.exists(s.exists) : rs.none() : rs.none(),
                      r = t.updateTransforms ? t.updateTransforms.map(function(t) { return function(t, e) { var n, r = null; "setToServerValue" in e ? (Ur("REQUEST_TIME" === e.setToServerValue), r = new Bo) : "appendMissingElements" in e ? (n = e.appendMissingElements.values || [], r = new jo(n)) : "removeAllFromArray" in e ? (n = e.removeAllFromArray.values || [], r = new Ho(n)) : "increment" in e ? r = new Jo(t, e.increment) : Vr();
                              e = ni.fromServerFormat(e.fieldPath); return new ns(e, r) }(e, t) }) : []; if (t.update) { t.update.name; var i = da(e, t.update.name),
                          o = new Oi({ mapValue: { fields: t.update.fields } }); if (t.updateMask) { var s = (s = t.updateMask.fieldPaths || [], new ri(s.map(function(t) { return ni.fromServerFormat(t) }))); return new fs(i, o, s, n, r) } return new ls(i, o, n, r) } if (t.delete) { r = da(e, t.delete); return new Ts(r, n) } if (t.verify) { t = da(e, t.verify); return new Is(t, n) } return Vr() }

              function Ta(t, e) { return { documents: [pa(t, e.path)] } }

              function Ia(t, e) { var n = { structuredQuery: {} },
                      r = e.path;
                  null !== e.collectionGroup ? (n.parent = pa(t, r), n.structuredQuery.from = [{ collectionId: e.collectionGroup, allDescendants: !0 }]) : (n.parent = pa(t, r.popLast()), n.structuredQuery.from = [{ collectionId: r.lastSegment() }]);
                  r = function(t) { if (0 !== t.length) { t = t.map(function(t) { if ("==" === t.op) { if (Ri(t.value)) return { unaryFilter: { field: Na(t.field), op: "IS_NAN" } }; if (ki(t.value)) return { unaryFilter: { field: Na(t.field), op: "IS_NULL" } } } else if ("!=" === t.op) { if (Ri(t.value)) return { unaryFilter: { field: Na(t.field), op: "IS_NOT_NAN" } }; if (ki(t.value)) return { unaryFilter: { field: Na(t.field), op: "IS_NOT_NULL" } } } return { fieldFilter: { field: Na(t.field), op: (e = t.op, oa[e]), value: t.value } }; var e }); return 1 === t.length ? t[0] : { compositeFilter: { op: "AND", filters: t } } } }(e.filters);
                  r && (n.structuredQuery.where = r);
                  r = function(t) { if (0 !== t.length) return t.map(function(t) { return { field: Na((t = t).field), direction: (t = t.dir, ia[t]) } }) }(e.orderBy);
                  r && (n.structuredQuery.orderBy = r);
                  r = e.limit, r = t.I || gi(r) ? r : { value: r }; return null !== r && (n.structuredQuery.limit = r), e.startAt && (n.structuredQuery.startAt = Sa(e.startAt)), e.endAt && (n.structuredQuery.endAt = Sa(e.endAt)), n }

              function _a(t) { var e = ya(t.parent),
                      n = t.structuredQuery,
                      r = n.from ? n.from.length : 0,
                      i = null;
                  0 < r && (Ur(1 === r), (a = n.from[0]).allDescendants ? i = a.collectionId : e = e.child(a.collectionId)); var o = [];
                  n.where && (o = function e(t) { return t ? void 0 !== t.unaryFilter ? [ka(t)] : void 0 !== t.fieldFilter ? [Ca(t)] : void 0 !== t.compositeFilter ? t.compositeFilter.filters.map(function(t) { return e(t) }).reduce(function(t, e) { return t.concat(e) }) : Vr() : [] }(n.where)); var s = [],
                      t = null,
                      r = null,
                      a = null; return wo(e, i, s = n.orderBy ? n.orderBy.map(function(t) { return new go(Da((e = t).field), function() { switch (e.direction) {
                              case "ASCENDING":
                                  return "asc";
                              case "DESCENDING":
                                  return "desc";
                              default:
                                  return } }()); var e }) : s, o, t = n.limit ? gi(o = "object" == typeof(o = n.limit) ? o.value : o) ? null : o : t, "F", r = n.startAt ? Aa(n.startAt) : r, a = n.endAt ? Aa(n.endAt) : a) }

              function Sa(t) { return { before: t.before, values: t.position } }

              function Aa(t) { var e = !!t.before,
                      t = t.values || []; return new co(t, e) }

              function Na(t) { return { fieldPath: t.canonicalString() } }

              function Da(t) { return ni.fromServerFormat(t.fieldPath) }

              function Ca(t) { return Ki.create(Da(t.fieldFilter.field), function() { switch (t.fieldFilter.op) {
                          case "EQUAL":
                              return "==";
                          case "NOT_EQUAL":
                              return "!=";
                          case "GREATER_THAN":
                              return ">";
                          case "GREATER_THAN_OR_EQUAL":
                              return ">=";
                          case "LESS_THAN":
                              return "<";
                          case "LESS_THAN_OR_EQUAL":
                              return "<=";
                          case "ARRAY_CONTAINS":
                              return "array-contains";
                          case "IN":
                              return "in";
                          case "NOT_IN":
                              return "not-in";
                          case "ARRAY_CONTAINS_ANY":
                              return "array-contains-any";
                          case "OPERATOR_UNSPECIFIED":
                          default:
                              return Vr() } }(), t.fieldFilter.value) }

              function ka(t) { switch (t.unaryFilter.op) {
                      case "IS_NAN":
                          var e = Da(t.unaryFilter.field); return Ki.create(e, "==", { doubleValue: NaN });
                      case "IS_NULL":
                          e = Da(t.unaryFilter.field); return Ki.create(e, "==", { nullValue: "NULL_VALUE" });
                      case "IS_NOT_NAN":
                          var n = Da(t.unaryFilter.field); return Ki.create(n, "!=", { doubleValue: NaN });
                      case "IS_NOT_NULL":
                          n = Da(t.unaryFilter.field); return Ki.create(n, "!=", { nullValue: "NULL_VALUE" });
                      case "OPERATOR_UNSPECIFIED":
                      default:
                          return Vr() } }

              function Ra(t) { return 4 <= t.length && "projects" === t.get(0) && "databases" === t.get(2) }

              function xa(t) { for (var e = "", n = 0; n < t.length; n++) 0 < e.length && (e = Oa(e)), e = function(t, e) { for (var n = e, r = t.length, i = 0; i < r; i++) { var o = t.charAt(i); switch (o) {
                              case "\0":
                                  n += "\x01\x10"; break;
                              case "\x01":
                                  n += "\x01\x11"; break;
                              default:
                                  n += o } } return n }(t.get(n), e); return Oa(e) }

              function Oa(t) { return t + "\x01\x01" }

              function La(t) { var e = t.length; if (Ur(2 <= e), 2 === e) return Ur("\x01" === t.charAt(0) && "\x01" === t.charAt(1)), ti.emptyPath(); for (var n = e - 2, r = [], i = "", o = 0; o < e;) { var s = t.indexOf("\x01", o); switch ((s < 0 || n < s) && Vr(), t.charAt(s + 1)) {
                          case "\x01":
                              var a = t.substring(o, s),
                                  u = void 0;
                              0 === i.length ? u = a : (u = i += a, i = ""), r.push(u); break;
                          case "\x10":
                              i += t.substring(o, s), i += "\0"; break;
                          case "\x11":
                              i += t.substring(o, s + 1); break;
                          default:
                              Vr() }
                      o = s + 2 } return new ti(r) }

              function Pa(t, e, n) { this.ownerId = t, this.allowTabSynchronization = e, this.leaseTimestampMs = n } var Ma = function(t, e) { this.seconds = t, this.nanoseconds = e };
              Pa.store = "owner", Pa.key = "owner";

              function Fa(t, e, n) { this.userId = t, this.lastAcknowledgedBatchId = e, this.lastStreamToken = n }
              Fa.store = "mutationQueues", Fa.keyPath = "userId";

              function Va(t, e, n, r, i) { this.userId = t, this.batchId = e, this.localWriteTimeMs = n, this.baseMutations = r, this.mutations = i }
              Va.store = "mutations", Va.keyPath = "batchId", Va.userMutationsIndex = "userMutationsIndex", Va.userMutationsKeyPath = ["userId", "batchId"]; var Ua = (qa.prefixForUser = function(t) { return [t] }, qa.prefixForPath = function(t, e) { return [t, xa(e)] }, qa.key = function(t, e, n) { return [t, xa(e), n] }, qa);

              function qa() {}
              Ua.store = "documentMutations", Ua.PLACEHOLDER = new Ua;

              function Ba(t, e) { this.path = t, this.readTime = e }

              function ja(t, e) { this.path = t, this.version = e } var Ka = function(t, e, n, r, i, o) { this.unknownDocument = t, this.noDocument = e, this.document = n, this.hasCommittedMutations = r, this.readTime = i, this.parentPath = o };
              Ka.store = "remoteDocuments", Ka.readTimeIndex = "readTimeIndex", Ka.readTimeIndexPath = "readTime", Ka.collectionReadTimeIndex = "collectionReadTimeIndex", Ka.collectionReadTimeIndexPath = ["parentPath", "readTime"];

              function Ga(t) { this.byteSize = t }
              Ga.store = "remoteDocumentGlobal", Ga.key = "remoteDocumentGlobalKey";

              function Qa(t, e, n, r, i, o, s) { this.targetId = t, this.canonicalId = e, this.readTime = n, this.resumeToken = r, this.lastListenSequenceNumber = i, this.lastLimboFreeSnapshotVersion = o, this.query = s }
              Qa.store = "targets", Qa.keyPath = "targetId", Qa.queryTargetsIndexName = "queryTargetsIndex", Qa.queryTargetsKeyPath = ["canonicalId", "targetId"]; var za = function(t, e, n) { this.targetId = t, this.path = e, this.sequenceNumber = n };
              za.store = "targetDocuments", za.keyPath = ["targetId", "path"], za.documentTargetsIndex = "documentTargetsIndex", za.documentTargetsKeyPath = ["path", "targetId"];

              function Ha(t, e, n, r) { this.highestTargetId = t, this.highestListenSequenceNumber = e, this.lastRemoteSnapshotVersion = n, this.targetCount = r }
              Ha.key = "targetGlobalKey", Ha.store = "targetGlobal";

              function Wa(t, e) { this.collectionId = t, this.parent = e }
              Wa.store = "collectionParents", Wa.keyPath = ["collectionId", "parent"];

              function Ya(t, e, n, r) { this.clientId = t, this.updateTimeMs = e, this.networkEnabled = n, this.inForeground = r }
              Ya.store = "clientMetadata", Ya.keyPath = "clientId";

              function Xa(t, e, n) { this.bundleId = t, this.createTime = e, this.version = n }
              Xa.store = "bundles", Xa.keyPath = "bundleId";

              function Ja(t, e, n) { this.name = t, this.readTime = e, this.bundledQuery = n }
              Ja.store = "namedQueries", Ja.keyPath = "name"; var $a, Za = s(s([], s(s([], s(s([], s(s([], [Fa.store, Va.store, Ua.store, Ka.store, Qa.store, Pa.store, Ha.store, za.store]), [Ya.store])), [Ga.store])), [Wa.store])), [Xa.store, Ja.store]),
                  tu = "The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.",
                  Se = (fu.prototype.addOnCommittedListener = function(t) { this.onCommittedListeners.push(t) }, fu.prototype.raiseOnCommittedEvent = function() { this.onCommittedListeners.forEach(function(t) { return t() }) }, fu),
                  eu = function() { var n = this;
                      this.promise = new Promise(function(t, e) { n.resolve = t, n.reject = e }) },
                  nu = (lu.prototype.catch = function(t) { return this.next(void 0, t) }, lu.prototype.next = function(r, i) { var o = this; return this.callbackAttached && Vr(), this.callbackAttached = !0, this.isDone ? this.error ? this.wrapFailure(i, this.error) : this.wrapSuccess(r, this.result) : new lu(function(e, n) { o.nextCallback = function(t) { o.wrapSuccess(r, t).next(e, n) }, o.catchCallback = function(t) { o.wrapFailure(i, t).next(e, n) } }) }, lu.prototype.toPromise = function() { var n = this; return new Promise(function(t, e) { n.next(t, e) }) }, lu.prototype.wrapUserFunction = function(t) { try { var e = t(); return e instanceof lu ? e : lu.resolve(e) } catch (t) { return lu.reject(t) } }, lu.prototype.wrapSuccess = function(t, e) { return t ? this.wrapUserFunction(function() { return t(e) }) : lu.resolve(e) }, lu.prototype.wrapFailure = function(t, e) { return t ? this.wrapUserFunction(function() { return t(e) }) : lu.reject(e) }, lu.resolve = function(n) { return new lu(function(t, e) { t(n) }) }, lu.reject = function(n) { return new lu(function(t, e) { e(n) }) }, lu.waitFor = function(t) { return new lu(function(e, n) { var r = 0,
                              i = 0,
                              o = !1;
                          t.forEach(function(t) {++r, t.next(function() {++i, o && i === r && e() }, function(t) { return n(t) }) }), o = !0, i === r && e() }) }, lu.or = function(t) { for (var n = lu.resolve(!1), e = 0, r = t; e < r.length; e++) ! function(e) { n = n.next(function(t) { return t ? lu.resolve(t) : e() }) }(r[e]); return n }, lu.forEach = function(t, n) { var r = this,
                          i = []; return t.forEach(function(t, e) { i.push(n.call(r, t, e)) }), this.waitFor(i) }, lu),
                  ru = (hu.open = function(t, e, n, r) { try { return new hu(e, t.transaction(r, n)) } catch (t) { throw new su(e, t) } }, Object.defineProperty(hu.prototype, "dt", { get: function() { return this.ft.promise }, enumerable: !1, configurable: !0 }), hu.prototype.abort = function(t) { t && this.ft.reject(t), this.aborted || (Lr("SimpleDb", "Aborting transaction:", t ? t.message : "Client-initiated abort"), this.aborted = !0, this.transaction.abort()) }, hu.prototype.store = function(t) { t = this.transaction.objectStore(t); return new pu(t) }, hu),
                  iu = (cu.delete = function(t) { return Lr("SimpleDb", "Removing database:", t), gu(window.indexedDB.deleteDatabase(t)).toPromise() }, cu.yt = function() { if ("undefined" == typeof indexedDB) return !1; if (cu.gt()) return !0; var t = h(),
                          e = cu._t(t),
                          n = 0 < e && e < 10,
                          e = cu.Et(t),
                          e = 0 < e && e < 4.5; return !(0 < t.indexOf("MSIE ") || 0 < t.indexOf("Trident/") || 0 < t.indexOf("Edge/") || n || e) }, cu.gt = function() { var t; return "undefined" != typeof process && "YES" === (null === (t = process.env) || void 0 === t ? void 0 : t.Tt) }, cu.It = function(t, e) { return t.store(e) }, cu._t = function(t) { t = t.match(/i(?:phone|pad|pod) os ([\d_]+)/i), t = t ? t[1].split("_").slice(0, 2).join(".") : "-1"; return Number(t) }, cu.Et = function(t) { t = t.match(/Android ([\d.]+)/i), t = t ? t[1].split(".").slice(0, 2).join(".") : "-1"; return Number(t) }, cu.prototype.At = function(o) { return y(this, void 0, void 0, function() { var e, i = this; return g(this, function(t) { switch (t.label) {
                                  case 0:
                                      return this.db ? [3, 2] : (Lr("SimpleDb", "Opening database:", this.name), e = this, [4, new Promise(function(e, n) { var r = indexedDB.open(i.name, i.version);
                                          r.onsuccess = function(t) { t = t.target.result;
                                              e(t) }, r.onblocked = function() { n(new su(o, "Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed.")) }, r.onerror = function(t) { t = t.target.error; "VersionError" === t.name ? n(new kr(Cr.FAILED_PRECONDITION, "A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")) : n(new su(o, t)) }, r.onupgradeneeded = function(t) { Lr("SimpleDb", 'Database "' + i.name + '" requires upgrade from version:', t.oldVersion); var e = t.target.result;
                                              i.wt.Rt(e, r.transaction, t.oldVersion, i.version).next(function() { Lr("SimpleDb", "Database upgrade to version " + i.version + " complete") }) } })]);
                                  case 1:
                                      e.db = t.sent(), t.label = 2;
                                  case 2:
                                      return [2, (this.bt && (this.db.onversionchange = function(t) { return i.bt(t) }), this.db)] } }) }) }, cu.prototype.vt = function(e) { this.bt = e, this.db && (this.db.onversionchange = function(t) { return e(t) }) }, cu.prototype.runTransaction = function(a, n, u, c) { return y(this, void 0, void 0, function() { var i, o, s, e; return g(this, function(t) { switch (t.label) {
                                  case 0:
                                      i = "readonly" === n, o = 0, e = function() { var e, n, r; return g(this, function(t) { switch (t.label) {
                                                  case 0:
                                                      ++o, t.label = 1;
                                                  case 1:
                                                      return t.trys.push([1, 4, , 5]), [4, s.At(a)];
                                                  case 2:
                                                      return s.db = t.sent(), e = ru.open(s.db, a, i ? "readonly" : "readwrite", u), n = c(e).catch(function(t) { return e.abort(t), nu.reject(t) }).toPromise(), r = {}, n.catch(function() {}), [4, e.dt];
                                                  case 3:
                                                      return [2, (r.value = (t.sent(), n), r)];
                                                  case 4:
                                                      return n = t.sent(), r = "FirebaseError" !== n.name && o < 3, Lr("SimpleDb", "Transaction failed with error:", n.message, "Retrying:", r), s.close(), r ? [3, 5] : [2, { value: Promise.reject(n) }];
                                                  case 5:
                                                      return [2] } }) }, s = this, t.label = 1;
                                  case 1:
                                      return [5, e()];
                                  case 2:
                                      if ("object" == typeof(e = t.sent())) return [2, e.value];
                                      t.label = 3;
                                  case 3:
                                      return [3, 1];
                                  case 4:
                                      return [2] } }) }) }, cu.prototype.close = function() { this.db && this.db.close(), this.db = void 0 }, cu),
                  ou = (Object.defineProperty(uu.prototype, "isDone", { get: function() { return this.Vt }, enumerable: !1, configurable: !0 }), Object.defineProperty(uu.prototype, "Dt", { get: function() { return this.St }, enumerable: !1, configurable: !0 }), Object.defineProperty(uu.prototype, "cursor", { set: function(t) { this.Pt = t }, enumerable: !1, configurable: !0 }), uu.prototype.done = function() { this.Vt = !0 }, uu.prototype.Ct = function(t) { this.St = t }, uu.prototype.delete = function() { return gu(this.Pt.delete()) }, uu),
                  su = (n(au, $a = kr), au);

              function au(t, e) { var n = this; return (n = $a.call(this, Cr.UNAVAILABLE, "IndexedDB transaction '" + t + "' failed: " + e) || this).name = "IndexedDbTransactionError", n }

              function uu(t) { this.Pt = t, this.Vt = !1, this.St = null }

              function cu(t, e, n) { this.name = t, this.version = e, this.wt = n, 12.2 === cu._t(h()) && Pr("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.") }

              function hu(e, t) { var n = this;
                  this.action = e, this.transaction = t, this.aborted = !1, this.ft = new eu, this.transaction.oncomplete = function() { n.ft.resolve() }, this.transaction.onabort = function() { t.error ? n.ft.reject(new su(e, t.error)) : n.ft.resolve() }, this.transaction.onerror = function(t) { t = vu(t.target.error);
                      n.ft.reject(new su(e, t)) } }

              function lu(t) { var e = this;
                  this.nextCallback = null, this.catchCallback = null, this.result = void 0, this.error = void 0, this.isDone = !1, this.callbackAttached = !1, t(function(t) { e.isDone = !0, e.result = t, e.nextCallback && e.nextCallback(t) }, function(t) { e.isDone = !0, e.error = t, e.catchCallback && e.catchCallback(t) }) }

              function fu() { this.onCommittedListeners = [] }

              function du(t) { return "IndexedDbTransactionError" === t.name } var pu = (yu.prototype.put = function(t, e) { t = void 0 !== e ? (Lr("SimpleDb", "PUT", this.store.name, t, e), this.store.put(e, t)) : (Lr("SimpleDb", "PUT", this.store.name, "<auto-key>", t), this.store.put(t)); return gu(t) }, yu.prototype.add = function(t) { return Lr("SimpleDb", "ADD", this.store.name, t, t), gu(this.store.add(t)) }, yu.prototype.get = function(e) { var n = this; return gu(this.store.get(e)).next(function(t) { return void 0 === t && (t = null), Lr("SimpleDb", "GET", n.store.name, e, t), t }) }, yu.prototype.delete = function(t) { return Lr("SimpleDb", "DELETE", this.store.name, t), gu(this.store.delete(t)) }, yu.prototype.count = function() { return Lr("SimpleDb", "COUNT", this.store.name), gu(this.store.count()) }, yu.prototype.Nt = function(t, e) { var e = this.cursor(this.options(t, e)),
                      n = []; return this.xt(e, function(t, e) { n.push(e) }).next(function() { return n }) }, yu.prototype.Ft = function(t, e) { Lr("SimpleDb", "DELETE ALL", this.store.name);
                  e = this.options(t, e);
                  e.kt = !1;
                  e = this.cursor(e); return this.xt(e, function(t, e, n) { return n.delete() }) }, yu.prototype.Ot = function(t, e) { e ? n = t : (n = {}, e = t); var n = this.cursor(n); return this.xt(n, e) }, yu.prototype.$t = function(r) { var t = this.cursor({}); return new nu(function(n, e) { t.onerror = function(t) { t = vu(t.target.error);
                          e(t) }, t.onsuccess = function(t) { var e = t.target.result;
                          e ? r(e.primaryKey, e.value).next(function(t) { t ? e.continue() : n() }) : n() } }) }, yu.prototype.xt = function(t, i) { var o = []; return new nu(function(r, e) { t.onerror = function(t) { e(t.target.error) }, t.onsuccess = function(t) { var e, n = t.target.result;
                          n ? (e = new ou(n), (t = i(n.primaryKey, n.value, e)) instanceof nu && (t = t.catch(function(t) { return e.done(), nu.reject(t) }), o.push(t)), e.isDone ? r() : null === e.Dt ? n.continue() : n.continue(e.Dt)) : r() } }).next(function() { return nu.waitFor(o) }) }, yu.prototype.options = function(t, e) { var n; return void 0 !== t && ("string" == typeof t ? n = t : e = t), { index: n, range: e } }, yu.prototype.cursor = function(t) { var e = "next"; if (t.reverse && (e = "prev"), t.index) { var n = this.store.index(t.index); return t.kt ? n.openKeyCursor(t.range, e) : n.openCursor(t.range, e) } return this.store.openCursor(t.range, e) }, yu);

              function yu(t) { this.store = t }

              function gu(t) { return new nu(function(e, n) { t.onsuccess = function(t) { t = t.target.result;
                          e(t) }, t.onerror = function(t) { t = vu(t.target.error);
                          n(t) } }) } var mu = !1;

              function vu(t) { var e = iu._t(h()); if (12.2 <= e && e < 13) { e = "An internal error was encountered in the Indexed Database server"; if (0 <= t.message.indexOf(e)) { var n = new kr("internal", "IOS_INDEXEDDB_BUG1: IndexedDb has thrown '" + e + "'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround."); return mu || (mu = !0, setTimeout(function() { throw n }, 0)), n } } return t } var bu, wu = (n(Eu, bu = Se), Eu);

              function Eu(t, e) { var n = this; return (n = bu.call(this) || this).Mt = t, n.currentSequenceNumber = e, n }

              function Tu(t, e) { return iu.It(t.Mt, e) } var Iu = (Cu.prototype.applyToRemoteDocument = function(t, e) { for (var n, r, i, o, s, a, u = e.mutationResults, c = 0; c < this.mutations.length; c++) { var h = this.mutations[c];
                          h.key.isEqual(t.key) && (n = h, r = t, i = u[c], h = a = s = o = void 0, n instanceof ls ? (s = r, a = i, h = (o = n).value.clone(), o = gs(o.fieldTransforms, s, a.transformResults), h.setAll(o), s.convertToFoundDocument(a.version, h).setHasCommittedMutations()) : n instanceof fs ? (o = r, s = i, os((a = n).precondition, o) ? (h = gs(a.fieldTransforms, o, s.transformResults), (n = o.data).setAll(ys(a)), n.setAll(h), o.convertToFoundDocument(s.version, n).setHasCommittedMutations()) : o.convertToUnknownDocument(s.version)) : r.convertToNoDocument(i.version).setHasCommittedMutations()) } }, Cu.prototype.applyToLocalView = function(t) { for (var e = 0, n = this.baseMutations; e < n.length; e++)(r = n[e]).key.isEqual(t.key) && ss(r, t, this.localWriteTime); for (var r, i = 0, o = this.mutations; i < o.length; i++)(r = o[i]).key.isEqual(t.key) && ss(r, t, this.localWriteTime) }, Cu.prototype.applyToLocalDocumentSet = function(n) { var r = this;
                      this.mutations.forEach(function(t) { var e = n.get(t.key),
                              t = e;
                          r.applyToLocalView(t), e.isValidDocument() || t.convertToNoDocument(zr.min()) }) }, Cu.prototype.keys = function() { return this.mutations.reduce(function(t, e) { return t.add(e.key) }, Ks()) }, Cu.prototype.isEqual = function(t) { return this.batchId === t.batchId && Kr(this.mutations, t.mutations, as) && Kr(this.baseMutations, t.baseMutations, as) }, Cu),
                  _u = (Du.from = function(t, e, n) { Ur(t.mutations.length === n.length); for (var r = Bs, i = t.mutations, o = 0; o < i.length; o++) r = r.insert(i[o].key, n[o].version); return new Du(t, e, n, r) }, Du),
                  Su = (Nu.prototype.withSequenceNumber = function(t) { return new Nu(this.target, this.targetId, this.purpose, t, this.snapshotVersion, this.lastLimboFreeSnapshotVersion, this.resumeToken) }, Nu.prototype.withResumeToken = function(t, e) { return new Nu(this.target, this.targetId, this.purpose, this.sequenceNumber, e, this.lastLimboFreeSnapshotVersion, t) }, Nu.prototype.withLastLimboFreeSnapshotVersion = function(t) { return new Nu(this.target, this.targetId, this.purpose, this.sequenceNumber, this.snapshotVersion, t, this.resumeToken) }, Nu),
                  Au = function(t) { this.Lt = t };

              function Nu(t, e, n, r, i, o, s) { void 0 === i && (i = zr.min()), void 0 === o && (o = zr.min()), void 0 === s && (s = ii.EMPTY_BYTE_STRING), this.target = t, this.targetId = e, this.purpose = n, this.sequenceNumber = r, this.snapshotVersion = i, this.lastLimboFreeSnapshotVersion = o, this.resumeToken = s }

              function Du(t, e, n, r) { this.batch = t, this.commitVersion = e, this.mutationResults = n, this.docVersions = r }

              function Cu(t, e, n, r) { this.batchId = t, this.localWriteTime = e, this.baseMutations = n, this.mutations = r }

              function ku(t, e) { if (e.document) return ba(t.Lt, e.document, !!e.hasCommittedMutations); if (e.noDocument) { var n = bi.fromSegments(e.noDocument.path),
                          r = Pu(e.noDocument.readTime),
                          n = Pi.newNoDocument(n, r); return e.hasCommittedMutations ? n.setHasCommittedMutations() : n } if (e.unknownDocument) { n = bi.fromSegments(e.unknownDocument.path), r = Pu(e.unknownDocument.version); return Pi.newUnknownDocument(n, r) } return Vr() }

              function Ru(t, e, n) { var r = xu(n),
                      n = e.key.path.popLast().toArray(); if (e.isFoundDocument()) { var i = { name: fa(o = t.Lt, (s = e).key), fields: s.data.toProto().mapValue.fields, updateTime: aa(o, s.version.toTimestamp()) },
                          o = e.hasCommittedMutations; return new Ka(null, null, i, o, r, n) } if (e.isNoDocument()) { var s = e.key.path.toArray(),
                          i = Lu(e.version),
                          o = e.hasCommittedMutations; return new Ka(null, new Ba(s, i), null, o, r, n) } if (e.isUnknownDocument()) { o = e.key.path.toArray(), e = Lu(e.version); return new Ka(new ja(o, e), null, null, !0, r, n) } return Vr() }

              function xu(t) { t = t.toTimestamp(); return [t.seconds, t.nanoseconds] }

              function Ou(t) { t = new Qr(t[0], t[1]); return zr.fromTimestamp(t) }

              function Lu(t) { t = t.toTimestamp(); return new Ma(t.seconds, t.nanoseconds) }

              function Pu(t) { t = new Qr(t.seconds, t.nanoseconds); return zr.fromTimestamp(t) }

              function Mu(e, t) { for (var n = (t.baseMutations || []).map(function(t) { return Ea(e.Lt, t) }), r = 0; r < t.mutations.length - 1; ++r) { var i, o = t.mutations[r];
                      r + 1 < t.mutations.length && void 0 !== t.mutations[r + 1].transform && (i = t.mutations[r + 1], o.updateTransforms = i.transform.fieldTransforms, t.mutations.splice(r + 1, 1), ++r) } var s = t.mutations.map(function(t) { return Ea(e.Lt, t) }),
                      a = Qr.fromMillis(t.localWriteTimeMs); return new Iu(t.batchId, a, n, s) }

              function Fu(t) { var e = Pu(t.readTime),
                      n = void 0 !== t.lastLimboFreeSnapshotVersion ? Pu(t.lastLimboFreeSnapshotVersion) : zr.min(),
                      r = void 0 !== t.query.documents ? (Ur(1 === (r = t.query).documents.length), Do(Eo(ya(r.documents[0])))) : Do(_a(t.query)); return new Su(r, t.targetId, 0, t.lastListenSequenceNumber, e, n, ii.fromBase64String(t.resumeToken)) }

              function Vu(t, e) { var n = Lu(e.snapshotVersion),
                      r = Lu(e.lastLimboFreeSnapshotVersion),
                      i = (Bi(e.target) ? Ta : Ia)(t.Lt, e.target),
                      t = e.resumeToken.toBase64(); return new Qa(e.targetId, Ui(e.target), n, t, e.sequenceNumber, r, i) }

              function Uu(t) { var e = _a({ parent: t.parent, structuredQuery: t.structuredQuery }); return "LAST" === t.limitType ? Co(e, e.limit, "L") : e } var qu = (Bu.prototype.getBundleMetadata = function(t, e) { return ju(t).get(e).next(function(t) { if (t) return { id: (t = t).bundleId, createTime: Pu(t.createTime), version: t.version } }) }, Bu.prototype.saveBundleMetadata = function(t, e) { return ju(t).put({ bundleId: (e = e).id, createTime: Lu(ca(e.createTime)), version: e.version }) }, Bu.prototype.getNamedQuery = function(t, e) { return Ku(t).get(e).next(function(t) { if (t) return { name: (t = t).name, query: Uu(t.bundledQuery), readTime: Pu(t.readTime) } }) }, Bu.prototype.saveNamedQuery = function(t, e) { return Ku(t).put({ name: (e = e).name, readTime: Lu(ca(e.readTime)), bundledQuery: e.bundledQuery }) }, Bu);

              function Bu() {}

              function ju(t) { return Tu(t, Xa.store) }

              function Ku(t) { return Tu(t, Ja.store) } var Gu = (Yu.prototype.addToCollectionParentIndex = function(t, e) { return this.Bt.add(e), nu.resolve() }, Yu.prototype.getCollectionParents = function(t, e) { return nu.resolve(this.Bt.getEntries(e)) }, Yu),
                  Qu = (Wu.prototype.add = function(t) { var e = t.lastSegment(),
                          n = t.popLast(),
                          r = this.index[e] || new Ps(ti.comparator),
                          t = !r.has(n); return this.index[e] = r.add(n), t }, Wu.prototype.has = function(t) { var e = t.lastSegment(),
                          t = t.popLast(),
                          e = this.index[e]; return e && e.has(t) }, Wu.prototype.getEntries = function(t) { return (this.index[t] || new Ps(ti.comparator)).toArray() }, Wu),
                  zu = (Hu.prototype.addToCollectionParentIndex = function(t, e) { var n = this; if (this.qt.has(e)) return nu.resolve(); var r = e.lastSegment(),
                          i = e.popLast();
                      t.addOnCommittedListener(function() { n.qt.add(e) });
                      i = { collectionId: r, parent: xa(i) }; return Xu(t).put(i) }, Hu.prototype.getCollectionParents = function(t, i) { var o = [],
                          e = IDBKeyRange.bound([i, ""], [Gr(i), ""], !1, !0); return Xu(t).Nt(e).next(function(t) { for (var e = 0, n = t; e < n.length; e++) { var r = n[e]; if (r.collectionId !== i) break;
                              o.push(La(r.parent)) } return o }) }, Hu);

              function Hu() { this.qt = new Qu }

              function Wu() { this.index = {} }

              function Yu() { this.Bt = new Qu }

              function Xu(t) { return Tu(t, Wa.store) } var Ju = { didRun: !1, sequenceNumbersCollected: 0, targetsRemoved: 0, documentsRemoved: 0 },
                  $u = (Zu.withCacheSize = function(t) { return new Zu(t, Zu.DEFAULT_COLLECTION_PERCENTILE, Zu.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT) }, Zu);

              function Zu(t, e, n) { this.cacheSizeCollectionThreshold = t, this.percentileToCollect = e, this.maximumSequenceNumbersToCollect = n }

              function tc(t, e, n) { var r = t.store(Va.store),
                      i = t.store(Ua.store),
                      o = [],
                      t = IDBKeyRange.only(n.batchId),
                      s = 0,
                      t = r.Ot({ range: t }, function(t, e, n) { return s++, n.delete() });
                  o.push(t.next(function() { Ur(1 === s) })); for (var a = [], u = 0, c = n.mutations; u < c.length; u++) { var h = c[u],
                          l = Ua.key(e, h.key.path, n.batchId);
                      o.push(i.delete(l)), a.push(h.key) } return nu.waitFor(o).next(function() { return a }) }

              function ec(t) { if (!t) return 0; var e; if (t.document) e = t.document;
                  else if (t.unknownDocument) e = t.unknownDocument;
                  else { if (!t.noDocument) throw Vr();
                      e = t.noDocument } return JSON.stringify(e).length }
              $u.DEFAULT_COLLECTION_PERCENTILE = 10, $u.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT = 1e3, $u.DEFAULT = new $u(41943040, $u.DEFAULT_COLLECTION_PERCENTILE, $u.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT), $u.DISABLED = new $u(-1, 0, 0); var nc = (rc.Kt = function(t, e, n, r) { return Ur("" !== t.uid), new rc(t.isAuthenticated() ? t.uid : "", e, n, r) }, rc.prototype.checkEmpty = function(t) { var r = !0,
                      e = IDBKeyRange.bound([this.userId, Number.NEGATIVE_INFINITY], [this.userId, Number.POSITIVE_INFINITY]); return oc(t).Ot({ index: Va.userMutationsIndex, range: e }, function(t, e, n) { r = !1, n.done() }).next(function() { return r }) }, rc.prototype.addMutationBatch = function(p, y, g, m) { var v = this,
                      b = sc(p),
                      w = oc(p); return w.add({}).next(function(t) { Ur("number" == typeof t); for (var e, n, r, i, o, s = new Iu(t, y, g, m), a = (e = v.R, n = v.userId, i = (r = s).baseMutations.map(function(t) { return wa(e.Lt, t) }), o = r.mutations.map(function(t) { return wa(e.Lt, t) }), new Va(n, r.batchId, r.localWriteTime.toMillis(), i, o)), u = [], c = new Ps(function(t, e) { return jr(t.canonicalString(), e.canonicalString()) }), h = 0, l = m; h < l.length; h++) { var f = l[h],
                              d = Ua.key(v.userId, f.key.path, t),
                              c = c.add(f.key.path.popLast());
                          u.push(w.put(a)), u.push(b.put(d, Ua.PLACEHOLDER)) } return c.forEach(function(t) { u.push(v.Ut.addToCollectionParentIndex(p, t)) }), p.addOnCommittedListener(function() { v.Qt[t] = s.keys() }), nu.waitFor(u).next(function() { return s }) }) }, rc.prototype.lookupMutationBatch = function(t, e) { var n = this; return oc(t).get(e).next(function(t) { return t ? (Ur(t.userId === n.userId), Mu(n.R, t)) : null }) }, rc.prototype.jt = function(t, e) { var n = this; return this.Qt[e] ? nu.resolve(this.Qt[e]) : this.lookupMutationBatch(t, e).next(function(t) { if (t) { t = t.keys(); return n.Qt[e] = t } return null }) }, rc.prototype.getNextMutationBatchAfterBatchId = function(t, e) { var r = this,
                      i = e + 1,
                      e = IDBKeyRange.lowerBound([this.userId, i]),
                      o = null; return oc(t).Ot({ index: Va.userMutationsIndex, range: e }, function(t, e, n) { e.userId === r.userId && (Ur(e.batchId >= i), o = Mu(r.R, e)), n.done() }).next(function() { return o }) }, rc.prototype.getHighestUnacknowledgedBatchId = function(t) { var e = IDBKeyRange.upperBound([this.userId, Number.POSITIVE_INFINITY]),
                      r = -1; return oc(t).Ot({ index: Va.userMutationsIndex, range: e, reverse: !0 }, function(t, e, n) { r = e.batchId, n.done() }).next(function() { return r }) }, rc.prototype.getAllMutationBatches = function(t) { var e = this,
                      n = IDBKeyRange.bound([this.userId, -1], [this.userId, Number.POSITIVE_INFINITY]); return oc(t).Nt(Va.userMutationsIndex, n).next(function(t) { return t.map(function(t) { return Mu(e.R, t) }) }) }, rc.prototype.getAllMutationBatchesAffectingDocumentKey = function(o, s) { var a = this,
                      t = Ua.prefixForPath(this.userId, s.path),
                      t = IDBKeyRange.lowerBound(t),
                      u = []; return sc(o).Ot({ range: t }, function(t, e, n) { var r = t[0],
                          i = t[1],
                          t = t[2],
                          i = La(i); if (r === a.userId && s.path.isEqual(i)) return oc(o).get(t).next(function(t) { if (!t) throw Vr();
                          Ur(t.userId === a.userId), u.push(Mu(a.R, t)) });
                      n.done() }).next(function() { return u }) }, rc.prototype.getAllMutationBatchesAffectingDocumentKeys = function(e, t) { var s = this,
                      a = new Ps(jr),
                      n = []; return t.forEach(function(o) { var t = Ua.prefixForPath(s.userId, o.path),
                          t = IDBKeyRange.lowerBound(t),
                          t = sc(e).Ot({ range: t }, function(t, e, n) { var r = t[0],
                                  i = t[1],
                                  t = t[2],
                                  i = La(i);
                              r === s.userId && o.path.isEqual(i) ? a = a.add(t) : n.done() });
                      n.push(t) }), nu.waitFor(n).next(function() { return s.Wt(e, a) }) }, rc.prototype.getAllMutationBatchesAffectingQuery = function(t, e) { var o = this,
                      s = e.path,
                      a = s.length + 1,
                      e = Ua.prefixForPath(this.userId, s),
                      e = IDBKeyRange.lowerBound(e),
                      u = new Ps(jr); return sc(t).Ot({ range: e }, function(t, e, n) { var r = t[0],
                          i = t[1],
                          t = t[2],
                          i = La(i);
                      r === o.userId && s.isPrefixOf(i) ? i.length === a && (u = u.add(t)) : n.done() }).next(function() { return o.Wt(t, u) }) }, rc.prototype.Wt = function(e, t) { var n = this,
                      r = [],
                      i = []; return t.forEach(function(t) { i.push(oc(e).get(t).next(function(t) { if (null === t) throw Vr();
                          Ur(t.userId === n.userId), r.push(Mu(n.R, t)) })) }), nu.waitFor(i).next(function() { return r }) }, rc.prototype.removeMutationBatch = function(e, n) { var r = this; return tc(e.Mt, this.userId, n).next(function(t) { return e.addOnCommittedListener(function() { r.Gt(n.batchId) }), nu.forEach(t, function(t) { return r.referenceDelegate.markPotentiallyOrphaned(e, t) }) }) }, rc.prototype.Gt = function(t) { delete this.Qt[t] }, rc.prototype.performConsistencyCheck = function(e) { var i = this; return this.checkEmpty(e).next(function(t) { if (!t) return nu.resolve(); var t = IDBKeyRange.lowerBound(Ua.prefixForUser(i.userId)),
                          r = []; return sc(e).Ot({ range: t }, function(t, e, n) { t[0] === i.userId ? (t = La(t[1]), r.push(t)) : n.done() }).next(function() { Ur(0 === r.length) }) }) }, rc.prototype.containsKey = function(t, e) { return ic(t, this.userId, e) }, rc.prototype.zt = function(t) { var e = this; return ac(t).get(this.userId).next(function(t) { return t || new Fa(e.userId, -1, "") }) }, rc);

              function rc(t, e, n, r) { this.userId = t, this.R = e, this.Ut = n, this.referenceDelegate = r, this.Qt = {} }

              function ic(t, o, e) { var e = Ua.prefixForPath(o, e.path),
                      s = e[1],
                      e = IDBKeyRange.lowerBound(e),
                      a = !1; return sc(t).Ot({ range: e, kt: !0 }, function(t, e, n) { var r = t[0],
                          i = t[1];
                      t[2], r === o && i === s && (a = !0), n.done() }).next(function() { return a }) }

              function oc(t) { return Tu(t, Va.store) }

              function sc(t) { return Tu(t, Ua.store) }

              function ac(t) { return Tu(t, Fa.store) } var uc = (lc.prototype.next = function() { return this.Ht += 2, this.Ht }, lc.Jt = function() { return new lc(0) }, lc.Yt = function() { return new lc(-1) }, lc),
                  cc = (hc.prototype.allocateTargetId = function(n) { var r = this; return this.Xt(n).next(function(t) { var e = new uc(t.highestTargetId); return t.highestTargetId = e.next(), r.Zt(n, t).next(function() { return t.highestTargetId }) }) }, hc.prototype.getLastRemoteSnapshotVersion = function(t) { return this.Xt(t).next(function(t) { return zr.fromTimestamp(new Qr(t.lastRemoteSnapshotVersion.seconds, t.lastRemoteSnapshotVersion.nanoseconds)) }) }, hc.prototype.getHighestSequenceNumber = function(t) { return this.Xt(t).next(function(t) { return t.highestListenSequenceNumber }) }, hc.prototype.setTargetsMetadata = function(e, n, r) { var i = this; return this.Xt(e).next(function(t) { return t.highestListenSequenceNumber = n, r && (t.lastRemoteSnapshotVersion = r.toTimestamp()), n > t.highestListenSequenceNumber && (t.highestListenSequenceNumber = n), i.Zt(e, t) }) }, hc.prototype.addTargetData = function(e, n) { var r = this; return this.te(e, n).next(function() { return r.Xt(e).next(function(t) { return t.targetCount += 1, r.ee(n, t), r.Zt(e, t) }) }) }, hc.prototype.updateTargetData = function(t, e) { return this.te(t, e) }, hc.prototype.removeTargetData = function(e, t) { var n = this; return this.removeMatchingKeysForTargetId(e, t.targetId).next(function() { return fc(e).delete(t.targetId) }).next(function() { return n.Xt(e) }).next(function(t) { return Ur(0 < t.targetCount), --t.targetCount, n.Zt(e, t) }) }, hc.prototype.removeTargets = function(n, r, i) { var o = this,
                          s = 0,
                          a = []; return fc(n).Ot(function(t, e) { e = Fu(e);
                          e.sequenceNumber <= r && null === i.get(e.targetId) && (s++, a.push(o.removeTargetData(n, e))) }).next(function() { return nu.waitFor(a) }).next(function() { return s }) }, hc.prototype.forEachTarget = function(t, n) { return fc(t).Ot(function(t, e) { e = Fu(e);
                          n(e) }) }, hc.prototype.Xt = function(t) { return dc(t).get(Ha.key).next(function(t) { return Ur(null !== t), t }) }, hc.prototype.Zt = function(t, e) { return dc(t).put(Ha.key, e) }, hc.prototype.te = function(t, e) { return fc(t).put(Vu(this.R, e)) }, hc.prototype.ee = function(t, e) { var n = !1; return t.targetId > e.highestTargetId && (e.highestTargetId = t.targetId, n = !0), t.sequenceNumber > e.highestListenSequenceNumber && (e.highestListenSequenceNumber = t.sequenceNumber, n = !0), n }, hc.prototype.getTargetCount = function(t) { return this.Xt(t).next(function(t) { return t.targetCount }) }, hc.prototype.getTargetData = function(t, r) { var e = Ui(r),
                          e = IDBKeyRange.bound([e, Number.NEGATIVE_INFINITY], [e, Number.POSITIVE_INFINITY]),
                          i = null; return fc(t).Ot({ range: e, index: Qa.queryTargetsIndexName }, function(t, e, n) { e = Fu(e);
                          qi(r, e.target) && (i = e, n.done()) }).next(function() { return i }) }, hc.prototype.addMatchingKeys = function(n, t, r) { var i = this,
                          o = [],
                          s = pc(n); return t.forEach(function(t) { var e = xa(t.path);
                          o.push(s.put(new za(r, e))), o.push(i.referenceDelegate.addReference(n, r, t)) }), nu.waitFor(o) }, hc.prototype.removeMatchingKeys = function(n, t, r) { var i = this,
                          o = pc(n); return nu.forEach(t, function(t) { var e = xa(t.path); return nu.waitFor([o.delete([r, e]), i.referenceDelegate.removeReference(n, r, t)]) }) }, hc.prototype.removeMatchingKeysForTargetId = function(t, e) { t = pc(t), e = IDBKeyRange.bound([e], [e + 1], !1, !0); return t.delete(e) }, hc.prototype.getMatchingKeysForTargetId = function(t, e) { var e = IDBKeyRange.bound([e], [e + 1], !1, !0),
                          t = pc(t),
                          r = Ks(); return t.Ot({ range: e, kt: !0 }, function(t, e, n) { t = La(t[1]), t = new bi(t);
                          r = r.add(t) }).next(function() { return r }) }, hc.prototype.containsKey = function(t, e) { var e = xa(e.path),
                          e = IDBKeyRange.bound([e], [Gr(e)], !1, !0),
                          i = 0; return pc(t).Ot({ index: za.documentTargetsIndex, kt: !0, range: e }, function(t, e, n) { var r = t[0];
                          t[1], 0 !== r && (i++, n.done()) }).next(function() { return 0 < i }) }, hc.prototype.lt = function(t, e) { return fc(t).get(e).next(function(t) { return t ? Fu(t) : null }) }, hc);

              function hc(t, e) { this.referenceDelegate = t, this.R = e }

              function lc(t) { this.Ht = t }

              function fc(t) { return Tu(t, Qa.store) }

              function dc(t) { return Tu(t, Ha.store) }

              function pc(t) { return Tu(t, za.store) }

              function yc(e) { return y(this, void 0, void 0, function() { return g(this, function(t) { if (e.code !== Cr.FAILED_PRECONDITION || e.message !== tu) throw e; return Lr("LocalStore", "Unexpectedly lost primary lease"), [2] }) }) }

              function gc(t, e) { var n = t[0],
                      r = t[1],
                      t = e[0],
                      e = e[1],
                      t = jr(n, t); return 0 === t ? jr(r, e) : t } var mc = (_c.prototype.ie = function() { return ++this.se }, _c.prototype.re = function(t) { var e = [t, this.ie()];
                      this.buffer.size < this.ne ? this.buffer = this.buffer.add(e) : gc(e, t = this.buffer.last()) < 0 && (this.buffer = this.buffer.delete(t).add(e)) }, Object.defineProperty(_c.prototype, "maxValue", { get: function() { return this.buffer.last()[0] }, enumerable: !1, configurable: !0 }), _c),
                  vc = (Ic.prototype.start = function(t) {-1 !== this.garbageCollector.params.cacheSizeCollectionThreshold && this.ae(t) }, Ic.prototype.stop = function() { this.ce && (this.ce.cancel(), this.ce = null) }, Object.defineProperty(Ic.prototype, "started", { get: function() { return null !== this.ce }, enumerable: !1, configurable: !0 }), Ic.prototype.ae = function(n) { var t = this,
                          e = this.oe ? 3e5 : 6e4;
                      Lr("LruGarbageCollector", "Garbage collection scheduled in " + e + "ms"), this.ce = this.asyncQueue.enqueueAfterDelay("lru_garbage_collection", e, function() { return y(t, void 0, void 0, function() { var e; return g(this, function(t) { switch (t.label) {
                                      case 0:
                                          this.ce = null, this.oe = !0, t.label = 1;
                                      case 1:
                                          return t.trys.push([1, 3, , 7]), [4, n.collectGarbage(this.garbageCollector)];
                                      case 2:
                                          return t.sent(), [3, 7];
                                      case 3:
                                          return du(e = t.sent()) ? (Lr("LruGarbageCollector", "Ignoring IndexedDB error during garbage collection: ", e), [3, 6]) : [3, 4];
                                      case 4:
                                          return [4, yc(e)];
                                      case 5:
                                          t.sent(), t.label = 6;
                                      case 6:
                                          return [3, 7];
                                      case 7:
                                          return [4, this.ae(n)];
                                      case 8:
                                          return t.sent(), [2] } }) }) }) }, Ic),
                  bc = (Tc.prototype.calculateTargetCount = function(t, e) { return this.ue.he(t).next(function(t) { return Math.floor(e / 100 * t) }) }, Tc.prototype.nthSequenceNumber = function(t, e) { var n = this; if (0 === e) return nu.resolve(Ar.o); var r = new mc(e); return this.ue.forEachTarget(t, function(t) { return r.re(t.sequenceNumber) }).next(function() { return n.ue.le(t, function(t) { return r.re(t) }) }).next(function() { return r.maxValue }) }, Tc.prototype.removeTargets = function(t, e, n) { return this.ue.removeTargets(t, e, n) }, Tc.prototype.removeOrphanedDocuments = function(t, e) { return this.ue.removeOrphanedDocuments(t, e) }, Tc.prototype.collect = function(e, n) { var r = this; return -1 === this.params.cacheSizeCollectionThreshold ? (Lr("LruGarbageCollector", "Garbage collection skipped; disabled"), nu.resolve(Ju)) : this.getCacheSize(e).next(function(t) { return t < r.params.cacheSizeCollectionThreshold ? (Lr("LruGarbageCollector", "Garbage collection skipped; Cache size " + t + " is lower than threshold " + r.params.cacheSizeCollectionThreshold), Ju) : r.fe(e, n) }) }, Tc.prototype.getCacheSize = function(t) { return this.ue.getCacheSize(t) }, Tc.prototype.fe = function(e, n) { var r, i, o, s, a, u, c, h = this,
                          l = Date.now(); return this.calculateTargetCount(e, this.params.percentileToCollect).next(function(t) { return i = t > h.params.maximumSequenceNumbersToCollect ? (Lr("LruGarbageCollector", "Capping sequence numbers to collect down to the maximum of " + h.params.maximumSequenceNumbersToCollect + " from " + t), h.params.maximumSequenceNumbersToCollect) : t, s = Date.now(), h.nthSequenceNumber(e, i) }).next(function(t) { return r = t, a = Date.now(), h.removeTargets(e, r, n) }).next(function(t) { return o = t, u = Date.now(), h.removeOrphanedDocuments(e, r) }).next(function(t) { return c = Date.now(), Or() <= p.DEBUG && Lr("LruGarbageCollector", "LRU Garbage Collection\n\tCounted targets in " + (s - l) + "ms\n\tDetermined least recently used " + i + " in " + (a - s) + "ms\n\tRemoved " + o + " targets in " + (u - a) + "ms\n\tRemoved " + t + " documents in " + (c - u) + "ms\nTotal Duration: " + (c - l) + "ms"), nu.resolve({ didRun: !0, sequenceNumbersCollected: i, targetsRemoved: o, documentsRemoved: t }) }) }, Tc),
                  wc = (Ec.prototype.he = function(t) { var n = this.de(t); return this.db.getTargetCache().getTargetCount(t).next(function(e) { return n.next(function(t) { return e + t }) }) }, Ec.prototype.de = function(t) { var e = 0; return this.le(t, function(t) { e++ }).next(function() { return e }) }, Ec.prototype.forEachTarget = function(t, e) { return this.db.getTargetCache().forEachTarget(t, e) }, Ec.prototype.le = function(t, n) { return this.we(t, function(t, e) { return n(e) }) }, Ec.prototype.addReference = function(t, e, n) { return Sc(t, n) }, Ec.prototype.removeReference = function(t, e, n) { return Sc(t, n) }, Ec.prototype.removeTargets = function(t, e, n) { return this.db.getTargetCache().removeTargets(t, e, n) }, Ec.prototype.markPotentiallyOrphaned = Sc, Ec.prototype._e = function(t, e) { return r = e, i = !1, ac(n = t).$t(function(t) { return ic(n, t, r).next(function(t) { return t && (i = !0), nu.resolve(!t) }) }).next(function() { return i }); var n, r, i }, Ec.prototype.removeOrphanedDocuments = function(n, r) { var i = this,
                          o = this.db.getRemoteDocumentCache().newChangeBuffer(),
                          s = [],
                          a = 0; return this.we(n, function(e, t) { t <= r && (t = i._e(n, e).next(function(t) { if (!t) return a++, o.getEntry(n, e).next(function() { return o.removeEntry(e), pc(n).delete([0, xa(e.path)]) }) }), s.push(t)) }).next(function() { return nu.waitFor(s) }).next(function() { return o.apply(n) }).next(function() { return a }) }, Ec.prototype.removeTarget = function(t, e) { e = e.withSequenceNumber(t.currentSequenceNumber); return this.db.getTargetCache().updateTargetData(t, e) }, Ec.prototype.updateLimboDocument = Sc, Ec.prototype.we = function(t, r) { var i, t = pc(t),
                          o = Ar.o; return t.Ot({ index: za.documentTargetsIndex }, function(t, e) { var n = t[0],
                              t = (t[1], e.path),
                              e = e.sequenceNumber;
                          0 === n ? (o !== Ar.o && r(new bi(La(i)), o), o = e, i = t) : o = Ar.o }).next(function() { o !== Ar.o && r(new bi(La(i)), o) }) }, Ec.prototype.getCacheSize = function(t) { return this.db.getRemoteDocumentCache().getSize(t) }, Ec);

              function Ec(t, e) { this.db = t, this.garbageCollector = new bc(this, e) }

              function Tc(t, e) { this.ue = t, this.params = e }

              function Ic(t, e) { this.garbageCollector = t, this.asyncQueue = e, this.oe = !1, this.ce = null }

              function _c(t) { this.ne = t, this.buffer = new Ps(gc), this.se = 0 }

              function Sc(t, e) { return pc(t).put((t = t.currentSequenceNumber, new za(0, xa(e.path), t))) } var Ac, Nc = (Oc.prototype.get = function(t) { var e = this.mapKeyFn(t),
                          e = this.inner[e]; if (void 0 !== e)
                          for (var n = 0, r = e; n < r.length; n++) { var i = r[n],
                                  o = i[0],
                                  i = i[1]; if (this.equalsFn(o, t)) return i } }, Oc.prototype.has = function(t) { return void 0 !== this.get(t) }, Oc.prototype.set = function(t, e) { var n = this.mapKeyFn(t),
                          r = this.inner[n]; if (void 0 !== r) { for (var i = 0; i < r.length; i++)
                              if (this.equalsFn(r[i][0], t)) return void(r[i] = [t, e]);
                          r.push([t, e]) } else this.inner[n] = [
                          [t, e]
                      ] }, Oc.prototype.delete = function(t) { var e = this.mapKeyFn(t),
                          n = this.inner[e]; if (void 0 === n) return !1; for (var r = 0; r < n.length; r++)
                          if (this.equalsFn(n[r][0], t)) return 1 === n.length ? delete this.inner[e] : n.splice(r, 1), !0;
                      return !1 }, Oc.prototype.forEach = function(s) { Xr(this.inner, function(t, e) { for (var n = 0, r = e; n < r.length; n++) { var i = r[n],
                                  o = i[0],
                                  i = i[1];
                              s(o, i) } }) }, Oc.prototype.isEmpty = function() { return Jr(this.inner) }, Oc),
                  I = (xc.prototype.getReadTime = function(t) { t = this.changes.get(t); return t ? t.readTime : zr.min() }, xc.prototype.addEntry = function(t, e) { this.assertNotApplied(), this.changes.set(t.key, { document: t, readTime: e }) }, xc.prototype.removeEntry = function(t, e) { void 0 === e && (e = null), this.assertNotApplied(), this.changes.set(t, { document: Pi.newInvalidDocument(t), readTime: e }) }, xc.prototype.getEntry = function(t, e) { this.assertNotApplied(); var n = this.changes.get(e); return void 0 !== n ? nu.resolve(n.document) : this.getFromCache(t, e) }, xc.prototype.getEntries = function(t, e) { return this.getAllFromCache(t, e) }, xc.prototype.apply = function(t) { return this.assertNotApplied(), this.changesApplied = !0, this.applyChanges(t) }, xc.prototype.assertNotApplied = function() {}, xc),
                  Dc = (Rc.prototype.addEntry = function(t, e, n) { return Pc(t).put(Mc(e), n) }, Rc.prototype.removeEntry = function(t, e) { t = Pc(t), e = Mc(e); return t.delete(e) }, Rc.prototype.updateMetadata = function(e, n) { var r = this; return this.getMetadata(e).next(function(t) { return t.byteSize += n, r.me(e, t) }) }, Rc.prototype.getEntry = function(t, e) { var n = this; return Pc(t).get(Mc(e)).next(function(t) { return n.ye(e, t) }) }, Rc.prototype.ge = function(t, e) { var n = this; return Pc(t).get(Mc(e)).next(function(t) { return { document: n.ye(e, t), size: ec(t) } }) }, Rc.prototype.getEntries = function(t, e) { var n = this,
                          r = Fs; return this.pe(t, e, function(t, e) { e = n.ye(t, e);
                          r = r.insert(t, e) }).next(function() { return r }) }, Rc.prototype.Ee = function(t, e) { var r = this,
                          i = Fs,
                          o = new Ds(bi.comparator); return this.pe(t, e, function(t, e) { var n = r.ye(t, e);
                          i = i.insert(t, n), o = o.insert(t, ec(e)) }).next(function() { return { documents: i, Te: o } }) }, Rc.prototype.pe = function(t, e, i) { if (e.isEmpty()) return nu.resolve(); var n = IDBKeyRange.bound(e.first().path.toArray(), e.last().path.toArray()),
                          o = e.getIterator(),
                          s = o.getNext(); return Pc(t).Ot({ range: n }, function(t, e, n) { for (var r = bi.fromSegments(t); s && bi.comparator(s, r) < 0;) i(s, null), s = o.getNext();
                          s && s.isEqual(r) && (i(s, e), s = o.hasNext() ? o.getNext() : null), s ? n.Ct(s.path.toArray()) : n.done() }).next(function() { for (; s;) i(s, null), s = o.hasNext() ? o.getNext() : null }) }, Rc.prototype.getDocumentsMatchingQuery = function(t, r, e) { var n, i = this,
                          o = Fs,
                          s = r.path.length + 1,
                          a = {}; return e.isEqual(zr.min()) ? (n = r.path.toArray(), a.range = IDBKeyRange.lowerBound(n)) : (n = r.path.toArray(), e = xu(e), a.range = IDBKeyRange.lowerBound([n, e], !0), a.index = Ka.collectionReadTimeIndex), Pc(t).Ot(a, function(t, e, n) { t.length === s && (e = ku(i.R, e), r.path.isPrefixOf(e.key.path) ? Oo(r, e) && (o = o.insert(e.key, e)) : n.done()) }).next(function() { return o }) }, Rc.prototype.newChangeBuffer = function(t) { return new Cc(this, !!t && t.trackRemovals) }, Rc.prototype.getSize = function(t) { return this.getMetadata(t).next(function(t) { return t.byteSize }) }, Rc.prototype.getMetadata = function(t) { return Lc(t).get(Ga.key).next(function(t) { return Ur(!!t), t }) }, Rc.prototype.me = function(t, e) { return Lc(t).put(Ga.key, e) }, Rc.prototype.ye = function(t, e) { if (e) { e = ku(this.R, e); if (!e.isNoDocument() || !e.version.isEqual(zr.min())) return e } return Pi.newInvalidDocument(t) }, Rc),
                  Cc = (n(kc, Ac = I), kc.prototype.applyChanges = function(i) { var o = this,
                          s = [],
                          a = 0,
                          u = new Ps(function(t, e) { return jr(t.canonicalString(), e.canonicalString()) }); return this.changes.forEach(function(t, e) { var n, r = o.Ae.get(t);
                          e.document.isValidDocument() ? (n = Ru(o.Ie.R, e.document, o.getReadTime(t)), u = u.add(t.path.popLast()), e = ec(n), a += e - r, s.push(o.Ie.addEntry(i, t, n))) : (a -= r, o.trackRemovals ? (r = Ru(o.Ie.R, Pi.newNoDocument(t, zr.min()), o.getReadTime(t)), s.push(o.Ie.addEntry(i, t, r))) : s.push(o.Ie.removeEntry(i, t))) }), u.forEach(function(t) { s.push(o.Ie.Ut.addToCollectionParentIndex(i, t)) }), s.push(this.Ie.updateMetadata(i, a)), nu.waitFor(s) }, kc.prototype.getFromCache = function(t, e) { var n = this; return this.Ie.ge(t, e).next(function(t) { return n.Ae.set(e, t.size), t.document }) }, kc.prototype.getAllFromCache = function(t, e) { var n = this; return this.Ie.Ee(t, e).next(function(t) { var e = t.documents; return t.Te.forEach(function(t, e) { n.Ae.set(t, e) }), e }) }, kc);

              function kc(t, e) { var n = this; return (n = Ac.call(this) || this).Ie = t, n.trackRemovals = e, n.Ae = new Nc(function(t) { return t.toString() }, function(t, e) { return t.isEqual(e) }), n }

              function Rc(t, e) { this.R = t, this.Ut = e }

              function xc() { this.changes = new Nc(function(t) { return t.toString() }, function(t, e) { return t.isEqual(e) }), this.changesApplied = !1 }

              function Oc(t, e) { this.mapKeyFn = t, this.equalsFn = e, this.inner = {} }

              function Lc(t) { return Tu(t, Ga.store) }

              function Pc(t) { return Tu(t, Ka.store) }

              function Mc(t) { return t.path.toArray() } var Fc = (Vc.prototype.Rt = function(e, n, t, r) { var i = this;
                  Ur(t < r && 0 <= t && r <= 11); var o = new ru("createOrUpgrade", n);
                  t < 1 && 1 <= r && (e.createObjectStore(Pa.store), (s = e).createObjectStore(Fa.store, { keyPath: Fa.keyPath }), s.createObjectStore(Va.store, { keyPath: Va.keyPath, autoIncrement: !0 }).createIndex(Va.userMutationsIndex, Va.userMutationsKeyPath, { unique: !0 }), s.createObjectStore(Ua.store), Uc(e), e.createObjectStore(Ka.store)); var s, a = nu.resolve(); return t < 3 && 3 <= r && (0 !== t && ((s = e).deleteObjectStore(za.store), s.deleteObjectStore(Qa.store), s.deleteObjectStore(Ha.store), Uc(e)), a = a.next(function() { return t = o.store(Ha.store), e = new Ha(0, 0, zr.min().toTimestamp(), 0), t.put(Ha.key, e); var t, e })), t < 4 && 4 <= r && (a = (a = 0 !== t ? a.next(function() { return n = e, (r = o).store(Va.store).Nt().next(function(t) { n.deleteObjectStore(Va.store), n.createObjectStore(Va.store, { keyPath: Va.keyPath, autoIncrement: !0 }).createIndex(Va.userMutationsIndex, Va.userMutationsKeyPath, { unique: !0 }); var e = r.store(Va.store),
                              t = t.map(function(t) { return e.put(t) }); return nu.waitFor(t) }); var n, r }) : a).next(function() { e.createObjectStore(Ya.store, { keyPath: Ya.keyPath }) })), t < 5 && 5 <= r && (a = a.next(function() { return i.Re(o) })), t < 6 && 6 <= r && (a = a.next(function() { return e.createObjectStore(Ga.store), i.be(o) })), t < 7 && 7 <= r && (a = a.next(function() { return i.ve(o) })), t < 8 && 8 <= r && (a = a.next(function() { return i.Pe(e, o) })), t < 9 && 9 <= r && (a = a.next(function() { var t;
                      (t = e).objectStoreNames.contains("remoteDocumentChanges") && t.deleteObjectStore("remoteDocumentChanges"), (t = n.objectStore(Ka.store)).createIndex(Ka.readTimeIndex, Ka.readTimeIndexPath, { unique: !1 }), t.createIndex(Ka.collectionReadTimeIndex, Ka.collectionReadTimeIndexPath, { unique: !1 }) })), t < 10 && 10 <= r && (a = a.next(function() { return i.Ve(o) })), a = t < 11 && 11 <= r ? a.next(function() { e.createObjectStore(Xa.store, { keyPath: Xa.keyPath }), e.createObjectStore(Ja.store, { keyPath: Ja.keyPath }) }) : a }, Vc.prototype.be = function(e) { var n = 0; return e.store(Ka.store).Ot(function(t, e) { n += ec(e) }).next(function() { var t = new Ga(n); return e.store(Ga.store).put(Ga.key, t) }) }, Vc.prototype.Re = function(n) { var r = this,
                      t = n.store(Fa.store),
                      i = n.store(Va.store); return t.Nt().next(function(t) { return nu.forEach(t, function(e) { var t = IDBKeyRange.bound([e.userId, -1], [e.userId, e.lastAcknowledgedBatchId]); return i.Nt(Va.userMutationsIndex, t).next(function(t) { return nu.forEach(t, function(t) { Ur(t.userId === e.userId);
                                  t = Mu(r.R, t); return tc(n, e.userId, t).next(function() {}) }) }) }) }) }, Vc.prototype.ve = function(t) { var o = t.store(za.store),
                      e = t.store(Ka.store); return t.store(Ha.store).get(Ha.key).next(function(r) { var i = []; return e.Ot(function(t, e) { var n = new ti(t),
                              t = [0, xa(n)];
                          i.push(o.get(t).next(function(t) { return t ? nu.resolve() : o.put(new za(0, xa(n), r.highestListenSequenceNumber)) })) }).next(function() { return nu.waitFor(i) }) }) }, Vc.prototype.Pe = function(t, e) { t.createObjectStore(Wa.store, { keyPath: Wa.keyPath });

                  function r(t) { if (i.add(t)) { var e = t.lastSegment(),
                              t = t.popLast(); return n.put({ collectionId: e, parent: xa(t) }) } } var n = e.store(Wa.store),
                      i = new Qu; return e.store(Ka.store).Ot({ kt: !0 }, function(t, e) { t = new ti(t); return r(t.popLast()) }).next(function() { return e.store(Ua.store).Ot({ kt: !0 }, function(t, e) { t[0]; var n = t[1],
                              n = (t[2], La(n)); return r(n.popLast()) }) }) }, Vc.prototype.Ve = function(t) { var n = this,
                      r = t.store(Qa.store); return r.Ot(function(t, e) { e = Fu(e), e = Vu(n.R, e); return r.put(e) }) }, Vc);

              function Vc(t) { this.R = t }

              function Uc(t) { t.createObjectStore(za.store, { keyPath: za.keyPath }).createIndex(za.documentTargetsIndex, za.documentTargetsKeyPath, { unique: !0 }), t.createObjectStore(Qa.store, { keyPath: Qa.keyPath }).createIndex(Qa.queryTargetsIndexName, Qa.queryTargetsKeyPath, { unique: !0 }), t.createObjectStore(Ha.store) } var qc = "Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.",
                  Bc = (jc.prototype.start = function() { var e = this; return this.je().then(function() { if (!e.isPrimary && !e.allowTabSynchronization) throw new kr(Cr.FAILED_PRECONDITION, qc); return e.We(), e.Ge(), e.ze(), e.runTransaction("getHighestListenSequenceNumber", "readonly", function(t) { return e.qe.getHighestSequenceNumber(t) }) }).then(function(t) { e.Ne = new Ar(t, e.De) }).then(function() { e.xe = !0 }).catch(function(t) { return e.Be && e.Be.close(), Promise.reject(t) }) }, jc.prototype.He = function(n) { var t = this; return this.Me = function(e) { return y(t, void 0, void 0, function() { return g(this, function(t) { return this.started ? [2, n(e)] : [2] }) }) }, n(this.isPrimary) }, jc.prototype.setDatabaseDeletedListener = function(n) { var t = this;
                      this.Be.vt(function(e) { return y(t, void 0, void 0, function() { return g(this, function(t) { switch (t.label) {
                                      case 0:
                                          return null === e.newVersion ? [4, n()] : [3, 2];
                                      case 1:
                                          t.sent(), t.label = 2;
                                      case 2:
                                          return [2] } }) }) }) }, jc.prototype.setNetworkEnabled = function(t) { var e = this;
                      this.networkEnabled !== t && (this.networkEnabled = t, this.Se.enqueueAndForget(function() { return y(e, void 0, void 0, function() { return g(this, function(t) { switch (t.label) {
                                      case 0:
                                          return this.started ? [4, this.je()] : [3, 2];
                                      case 1:
                                          t.sent(), t.label = 2;
                                      case 2:
                                          return [2] } }) }) })) }, jc.prototype.je = function() { var n = this; return this.runTransaction("updateClientMetadataAndTryBecomePrimary", "readwrite", function(e) { return Gc(e).put(new Ya(n.clientId, Date.now(), n.networkEnabled, n.inForeground)).next(function() { if (n.isPrimary) return n.Je(e).next(function(t) { t || (n.isPrimary = !1, n.Se.enqueueRetryable(function() { return n.Me(!1) })) }) }).next(function() { return n.Ye(e) }).next(function(t) { return n.isPrimary && !t ? n.Xe(e).next(function() { return !1 }) : !!t && n.Ze(e).next(function() { return !0 }) }) }).catch(function(t) { if (du(t)) return Lr("IndexedDbPersistence", "Failed to extend owner lease: ", t), n.isPrimary; if (!n.allowTabSynchronization) throw t; return Lr("IndexedDbPersistence", "Releasing owner lease after error during lease refresh", t), !1 }).then(function(t) { n.isPrimary !== t && n.Se.enqueueRetryable(function() { return n.Me(t) }), n.isPrimary = t }) }, jc.prototype.Je = function(t) { var e = this; return Kc(t).get(Pa.key).next(function(t) { return nu.resolve(e.tn(t)) }) }, jc.prototype.en = function(t) { return Gc(t).delete(this.clientId) }, jc.prototype.nn = function() { return y(this, void 0, void 0, function() { var e, n, r, i, o = this; return g(this, function(t) { switch (t.label) {
                                  case 0:
                                      return !this.isPrimary || this.sn(this.$e, 18e5) ? [3, 2] : (this.$e = Date.now(), [4, this.runTransaction("maybeGarbageCollectMultiClientState", "readwrite-primary", function(t) { var r = Tu(t, Ya.store); return r.Nt().next(function(t) { var e = o.rn(t, 18e5),
                                                  n = t.filter(function(t) { return -1 === e.indexOf(t) }); return nu.forEach(n, function(t) { return r.delete(t.clientId) }).next(function() { return n }) }) }).catch(function() { return [] })]);
                                  case 1:
                                      if (e = t.sent(), this.Ke)
                                          for (n = 0, r = e; n < r.length; n++) i = r[n], this.Ke.removeItem(this.on(i.clientId));
                                      t.label = 2;
                                  case 2:
                                      return [2] } }) }) }, jc.prototype.ze = function() { var t = this;
                      this.Oe = this.Se.enqueueAfterDelay("client_metadata_refresh", 4e3, function() { return t.je().then(function() { return t.nn() }).then(function() { return t.ze() }) }) }, jc.prototype.tn = function(t) { return !!t && t.ownerId === this.clientId }, jc.prototype.Ye = function(e) { var r = this; return this.Ce ? nu.resolve(!0) : Kc(e).get(Pa.key).next(function(t) { if (null !== t && r.sn(t.leaseTimestampMs, 5e3) && !r.cn(t.ownerId)) { if (r.tn(t) && r.networkEnabled) return !0; if (!r.tn(t)) { if (!t.allowTabSynchronization) throw new kr(Cr.FAILED_PRECONDITION, qc); return !1 } } return !(!r.networkEnabled || !r.inForeground) || Gc(e).Nt().next(function(t) { return void 0 === r.rn(t, 5e3).find(function(t) { if (r.clientId !== t.clientId) { var e = !r.networkEnabled && t.networkEnabled,
                                          n = !r.inForeground && t.inForeground,
                                          t = r.networkEnabled === t.networkEnabled; if (e || n && t) return !0 } return !1 }) }) }).next(function(t) { return r.isPrimary !== t && Lr("IndexedDbPersistence", "Client " + (t ? "is" : "is not") + " eligible for a primary lease."), t }) }, jc.prototype.shutdown = function() { return y(this, void 0, void 0, function() { var n = this; return g(this, function(t) { switch (t.label) {
                                  case 0:
                                      return this.xe = !1, this.an(), this.Oe && (this.Oe.cancel(), this.Oe = null), this.un(), this.hn(), [4, this.Be.runTransaction("shutdown", "readwrite", [Pa.store, Ya.store], function(t) { var e = new wu(t, Ar.o); return n.Xe(e).next(function() { return n.en(e) }) })];
                                  case 1:
                                      return t.sent(), this.Be.close(), this.ln(), [2] } }) }) }, jc.prototype.rn = function(t, e) { var n = this; return t.filter(function(t) { return n.sn(t.updateTimeMs, e) && !n.cn(t.clientId) }) }, jc.prototype.fn = function() { var e = this; return this.runTransaction("getActiveClients", "readonly", function(t) { return Gc(t).Nt().next(function(t) { return e.rn(t, 18e5).map(function(t) { return t.clientId }) }) }) }, Object.defineProperty(jc.prototype, "started", { get: function() { return this.xe }, enumerable: !1, configurable: !0 }), jc.prototype.getMutationQueue = function(t) { return nc.Kt(t, this.R, this.Ut, this.referenceDelegate) }, jc.prototype.getTargetCache = function() { return this.qe }, jc.prototype.getRemoteDocumentCache = function() { return this.Ue }, jc.prototype.getIndexManager = function() { return this.Ut }, jc.prototype.getBundleCache = function() { return this.Qe }, jc.prototype.runTransaction = function(e, n, r) { var i = this;
                      Lr("IndexedDbPersistence", "Starting transaction:", e); var o, t = "readonly" === n ? "readonly" : "readwrite"; return this.Be.runTransaction(e, t, Za, function(t) { return o = new wu(t, i.Ne ? i.Ne.next() : Ar.o), "readwrite-primary" === n ? i.Je(o).next(function(t) { return !!t || i.Ye(o) }).next(function(t) { if (!t) throw Pr("Failed to obtain primary lease for action '" + e + "'."), i.isPrimary = !1, i.Se.enqueueRetryable(function() { return i.Me(!1) }), new kr(Cr.FAILED_PRECONDITION, tu); return r(o) }).next(function(t) { return i.Ze(o).next(function() { return t }) }) : i.dn(o).next(function() { return r(o) }) }).then(function(t) { return o.raiseOnCommittedEvent(), t }) }, jc.prototype.dn = function(t) { var e = this; return Kc(t).get(Pa.key).next(function(t) { if (null !== t && e.sn(t.leaseTimestampMs, 5e3) && !e.cn(t.ownerId) && !e.tn(t) && !(e.Ce || e.allowTabSynchronization && t.allowTabSynchronization)) throw new kr(Cr.FAILED_PRECONDITION, qc) }) }, jc.prototype.Ze = function(t) { var e = new Pa(this.clientId, this.allowTabSynchronization, Date.now()); return Kc(t).put(Pa.key, e) }, jc.yt = function() { return iu.yt() }, jc.prototype.Xe = function(t) { var e = this,
                          n = Kc(t); return n.get(Pa.key).next(function(t) { return e.tn(t) ? (Lr("IndexedDbPersistence", "Releasing primary lease."), n.delete(Pa.key)) : nu.resolve() }) }, jc.prototype.sn = function(t, e) { var n = Date.now(); return !(t < n - e || n < t && (Pr("Detected an update time that is in the future: " + t + " > " + n), 1)) }, jc.prototype.We = function() { var t = this;
                      null !== this.document && "function" == typeof this.document.addEventListener && (this.ke = function() { t.Se.enqueueAndForget(function() { return t.inForeground = "visible" === t.document.visibilityState, t.je() }) }, this.document.addEventListener("visibilitychange", this.ke), this.inForeground = "visible" === this.document.visibilityState) }, jc.prototype.un = function() { this.ke && (this.document.removeEventListener("visibilitychange", this.ke), this.ke = null) }, jc.prototype.Ge = function() { var t, e = this; "function" == typeof(null === (t = this.window) || void 0 === t ? void 0 : t.addEventListener) && (this.Fe = function() { e.an(), e.Se.enqueueAndForget(function() { return e.shutdown() }) }, this.window.addEventListener("pagehide", this.Fe)) }, jc.prototype.hn = function() { this.Fe && (this.window.removeEventListener("pagehide", this.Fe), this.Fe = null) }, jc.prototype.cn = function(t) { try { var e = null !== (null === (e = this.Ke) || void 0 === e ? void 0 : e.getItem(this.on(t))); return Lr("IndexedDbPersistence", "Client '" + t + "' " + (e ? "is" : "is not") + " zombied in LocalStorage"), e } catch (t) { return Pr("IndexedDbPersistence", "Failed to get zombied client id.", t), !1 } }, jc.prototype.an = function() { if (this.Ke) try { this.Ke.setItem(this.on(this.clientId), String(Date.now())) } catch (t) { Pr("Failed to set zombie client id.", t) } }, jc.prototype.ln = function() { if (this.Ke) try { this.Ke.removeItem(this.on(this.clientId)) } catch (t) {} }, jc.prototype.on = function(t) { return "firestore_zombie_" + this.persistenceKey + "_" + t }, jc);

              function jc(t, e, n, r, i, o, s, a, u, c) { if (this.allowTabSynchronization = t, this.persistenceKey = e, this.clientId = n, this.Se = i, this.window = o, this.document = s, this.De = u, this.Ce = c, this.Ne = null, this.xe = !1, this.isPrimary = !1, this.networkEnabled = !0, this.Fe = null, this.inForeground = !1, this.ke = null, this.Oe = null, this.$e = Number.NEGATIVE_INFINITY, this.Me = function(t) { return Promise.resolve() }, !jc.yt()) throw new kr(Cr.UNIMPLEMENTED, "This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");
                  this.referenceDelegate = new wc(this, r), this.Le = e + "main", this.R = new Au(a), this.Be = new iu(this.Le, 11, new Fc(this.R)), this.qe = new cc(this.referenceDelegate, this.R), this.Ut = new zu, this.Ue = (e = this.R, a = this.Ut, new Dc(e, a)), this.Qe = new qu, this.window && this.window.localStorage ? this.Ke = this.window.localStorage : (this.Ke = null, !1 === c && Pr("IndexedDbPersistence", "LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page.")) }

              function Kc(t) { return Tu(t, Pa.store) }

              function Gc(t) { return Tu(t, Ya.store) }

              function Qc(t, e) { var n = t.projectId; return t.isDefaultDatabase || (n += "." + t.database), "firestore/" + e + "/" + n + "/" }

              function zc(t, e) { this.progress = t, this.wn = e } var Hc = (th.prototype.mn = function(e, n) { var r = this; return this._n.getAllMutationBatchesAffectingDocumentKey(e, n).next(function(t) { return r.yn(e, n, t) }) }, th.prototype.yn = function(t, e, r) { return this.Ue.getEntry(t, e).next(function(t) { for (var e = 0, n = r; e < n.length; e++) n[e].applyToLocalView(t); return t }) }, th.prototype.gn = function(t, i) { t.forEach(function(t, e) { for (var n = 0, r = i; n < r.length; n++) r[n].applyToLocalView(e) }) }, th.prototype.pn = function(e, t) { var n = this; return this.Ue.getEntries(e, t).next(function(t) { return n.En(e, t).next(function() { return t }) }) }, th.prototype.En = function(t, e) { var n = this; return this._n.getAllMutationBatchesAffectingDocumentKeys(t, e).next(function(t) { return n.gn(e, t) }) }, th.prototype.getDocumentsMatchingQuery = function(t, e, n) { return r = e, bi.isDocumentKey(r.path) && null === r.collectionGroup && 0 === r.filters.length ? this.Tn(t, e.path) : Ao(e) ? this.In(t, e, n) : this.An(t, e, n); var r }, th.prototype.Tn = function(t, e) { return this.mn(t, new bi(e)).next(function(t) { var e = qs; return e = t.isFoundDocument() ? e.insert(t.key, t) : e }) }, th.prototype.In = function(n, r, i) { var o = this,
                          s = r.collectionGroup,
                          a = qs; return this.Ut.getCollectionParents(n, s).next(function(t) { return nu.forEach(t, function(t) { var e, e = (e = r, t = t.child(s), new bo(t, null, e.explicitOrderBy.slice(), e.filters.slice(), e.limit, e.limitType, e.startAt, e.endAt)); return o.An(n, e, i).next(function(t) { t.forEach(function(t, e) { a = a.insert(t, e) }) }) }).next(function() { return a }) }) }, th.prototype.An = function(e, n, t) { var c, h, r = this; return this.Ue.getDocumentsMatchingQuery(e, n, t).next(function(t) { return c = t, r._n.getAllMutationBatchesAffectingQuery(e, n) }).next(function(t) { return h = t, r.Rn(e, h, c).next(function(t) { c = t; for (var e = 0, n = h; e < n.length; e++)
                                  for (var r = n[e], i = 0, o = r.mutations; i < o.length; i++) { var s = o[i],
                                          a = s.key,
                                          u = c.get(a);
                                      null == u && (u = Pi.newInvalidDocument(a), c = c.insert(a, u)), ss(s, u, r.localWriteTime), u.isFoundDocument() || (c = c.remove(a)) } }) }).next(function() { return c.forEach(function(t, e) { Oo(n, e) || (c = c.remove(t)) }), c }) }, th.prototype.Rn = function(t, e, n) { for (var r = Ks(), i = 0, o = e; i < o.length; i++)
                          for (var s = 0, a = o[i].mutations; s < a.length; s++) { var u = a[s];
                              u instanceof fs && null === n.get(u.key) && (r = r.add(u.key)) }
                      var c = n; return this.Ue.getEntries(t, r).next(function(t) { return t.forEach(function(t, e) { e.isFoundDocument() && (c = c.insert(t, e)) }), c }) }, th),
                  Wc = (Zc.Pn = function(t, e) { for (var n = Ks(), r = Ks(), i = 0, o = e.docChanges; i < o.length; i++) { var s = o[i]; switch (s.type) {
                              case 0:
                                  n = n.add(s.doc.key); break;
                              case 1:
                                  r = r.add(s.doc.key) } } return new Zc(t, e.fromCache, n, r) }, Zc),
                  Yc = ($c.prototype.Vn = function(t) { this.Sn = t }, $c.prototype.getDocumentsMatchingQuery = function(e, r, i, o) { var s = this; return 0 === r.filters.length && null === r.limit && null == r.startAt && null == r.endAt && (0 === r.explicitOrderBy.length || 1 === r.explicitOrderBy.length && r.explicitOrderBy[0].field.isKeyField()) || i.isEqual(zr.min()) ? this.Dn(e, r) : this.Sn.pn(e, o).next(function(t) { var n = s.Cn(r, t); return (To(r) || Io(r)) && s.Nn(r.limitType, n, o, i) ? s.Dn(e, r) : (Or() <= p.DEBUG && Lr("QueryEngine", "Re-using previous result from %s to execute query: %s", i.toString(), xo(r)), s.Sn.getDocumentsMatchingQuery(e, r, i).next(function(e) { return n.forEach(function(t) { e = e.insert(t.key, t) }), e })) }) }, $c.prototype.Cn = function(n, t) { var r = new Ps(Lo(n)); return t.forEach(function(t, e) { Oo(n, e) && (r = r.add(e)) }), r }, $c.prototype.Nn = function(t, e, n, r) { if (n.size !== e.size) return !0;
                      e = "F" === t ? e.last() : e.first(); return !!e && (e.hasPendingWrites || 0 < e.version.compareTo(r)) }, $c.prototype.Dn = function(t, e) { return Or() <= p.DEBUG && Lr("QueryEngine", "Using full collection scan to execute query:", xo(e)), this.Sn.getDocumentsMatchingQuery(t, e, zr.min()) }, $c),
                  Xc = (Jc.prototype.collectGarbage = function(e) { var n = this; return this.persistence.runTransaction("Collect garbage", "readwrite-primary", function(t) { return e.collect(t, n.Fn) }) }, Jc);

              function Jc(t, e, n, r) { this.persistence = t, this.xn = e, this.R = r, this.Fn = new Ds(jr), this.kn = new Nc(Ui, qi), this.On = zr.min(), this._n = t.getMutationQueue(n), this.$n = t.getRemoteDocumentCache(), this.qe = t.getTargetCache(), this.Mn = new Hc(this.$n, this._n, this.persistence.getIndexManager()), this.Qe = t.getBundleCache(), this.xn.Vn(this.Mn) }

              function $c() {}

              function Zc(t, e, n, r) { this.targetId = t, this.fromCache = e, this.bn = n, this.vn = r }

              function th(t, e, n) { this.Ue = t, this._n = e, this.Ut = n }

              function eh(t, e, n, r) { return new Xc(t, e, n, r) }

              function nh(i, o) { return y(this, void 0, void 0, function() { var e, n, v, r; return g(this, function(t) { switch (t.label) {
                              case 0:
                                  return n = (e = i)._n, v = e.Mn, [4, e.persistence.runTransaction("Handle user change", "readonly", function(g) { var m; return e._n.getAllMutationBatches(g).next(function(t) { return m = t, n = e.persistence.getMutationQueue(o), v = new Hc(e.$n, n, e.persistence.getIndexManager()), n.getAllMutationBatches(g) }).next(function(t) { for (var e = [], n = [], r = Ks(), i = 0, o = m; i < o.length; i++) { var s = o[i];
                                              e.push(s.batchId); for (var a = 0, u = s.mutations; a < u.length; a++) var c = u[a],
                                                  r = r.add(c.key) } for (var h = 0, l = t; h < l.length; h++) { var f = l[h];
                                              n.push(f.batchId); for (var d = 0, p = f.mutations; d < p.length; d++) { var y = p[d];
                                                  r = r.add(y.key) } } return v.pn(g, r).next(function(t) { return { Ln: t, removedBatchIds: e, addedBatchIds: n } }) }) })];
                              case 1:
                                  return r = t.sent(), [2, (e._n = n, e.Mn = v, e.xn.Vn(e.Mn), r)] } }) }) }

              function rh(t, h) { var l = t; return l.persistence.runTransaction("Acknowledge batch", "readwrite-primary", function(t) { var e, r, i, o, s, n, a, u = h.batch.keys(),
                          c = l.$n.newChangeBuffer({ trackRemovals: !0 }); return e = l, r = t, o = c, s = (i = h).batch, n = s.keys(), a = nu.resolve(), n.forEach(function(n) { a = a.next(function() { return o.getEntry(r, n) }).next(function(t) { var e = i.docVersions.get(n);
                              Ur(null !== e), t.version.compareTo(e) < 0 && (s.applyToRemoteDocument(t, i), t.isValidDocument() && o.addEntry(t, i.commitVersion)) }) }), a.next(function() { return e._n.removeMutationBatch(r, s) }).next(function() { return c.apply(t) }).next(function() { return l._n.performConsistencyCheck(t) }).next(function() { return l.Mn.pn(t, u) }) }) }

              function ih(t) { var e = t; return e.persistence.runTransaction("Get last remote snapshot version", "readonly", function(t) { return e.qe.getLastRemoteSnapshotVersion(t) }) }

              function oh(t, r) { var u = t,
                      c = r.snapshotVersion,
                      h = u.Fn; return u.persistence.runTransaction("Apply remote event", "readwrite-primary", function(s) { var t = u.$n.newChangeBuffer({ trackRemovals: !0 });
                      h = u.Fn; var a = [];
                      r.targetChanges.forEach(function(t, e) { var n, r, i, o = h.get(e);
                          o && (a.push(u.qe.removeMatchingKeys(s, t.removedDocuments, e).next(function() { return u.qe.addMatchingKeys(s, t.addedDocuments, e) })), 0 < (i = t.resumeToken).approximateByteSize() && (n = o.withResumeToken(i, c).withSequenceNumber(s.currentSequenceNumber), h = h.insert(e, n), r = o, i = t, Ur(0 < (o = n).resumeToken.approximateByteSize()), (0 === r.resumeToken.approximateByteSize() || 3e8 <= o.snapshotVersion.toMicroseconds() - r.snapshotVersion.toMicroseconds() || 0 < i.addedDocuments.size + i.modifiedDocuments.size + i.removedDocuments.size) && a.push(u.qe.updateTargetData(s, n)))) }); var e, n = Fs; return r.documentUpdates.forEach(function(t, e) { r.resolvedLimboDocuments.has(t) && a.push(u.persistence.referenceDelegate.updateLimboDocument(s, t)) }), a.push(sh(s, t, r.documentUpdates, c, void 0).next(function(t) { n = t })), c.isEqual(zr.min()) || (e = u.qe.getLastRemoteSnapshotVersion(s).next(function(t) { return u.qe.setTargetsMetadata(s, s.currentSequenceNumber, c) }), a.push(e)), nu.waitFor(a).next(function() { return t.apply(s) }).next(function() { return u.Mn.En(s, n) }).next(function() { return n }) }).then(function(t) { return u.Fn = h, t }) }

              function sh(t, s, e, a, u) { var n = Ks(); return e.forEach(function(t) { return n = n.add(t) }), s.getEntries(t, n).next(function(i) { var o = Fs; return e.forEach(function(t, e) { var n = i.get(t),
                              r = (null == u ? void 0 : u.get(t)) || a;
                          e.isNoDocument() && e.version.isEqual(zr.min()) ? (s.removeEntry(t, r), o = o.insert(t, e)) : !n.isValidDocument() || 0 < e.version.compareTo(n.version) || 0 === e.version.compareTo(n.version) && n.hasPendingWrites ? (s.addEntry(e, r), o = o.insert(t, e)) : Lr("LocalStore", "Ignoring outdated watch update for ", t, ". Current version:", n.version, " Watch version:", e.version) }), o }) }

              function ah(t, r) { var i = t; return i.persistence.runTransaction("Allocate target", "readwrite", function(e) { var n; return i.qe.getTargetData(e, r).next(function(t) { return t ? (n = t, nu.resolve(n)) : i.qe.allocateTargetId(e).next(function(t) { return n = new Su(r, t, 0, e.currentSequenceNumber), i.qe.addTargetData(e, n).next(function() { return n }) }) }) }).then(function(t) { var e = i.Fn.get(t.targetId); return (null === e || 0 < t.snapshotVersion.compareTo(e.snapshotVersion)) && (i.Fn = i.Fn.insert(t.targetId, t), i.kn.set(r, t.targetId)), t }) }

              function uh(i, o, s) { return y(this, void 0, void 0, function() { var e, n, r; return g(this, function(t) { switch (t.label) {
                              case 0:
                                  n = (e = i).Fn.get(o), r = s ? "readwrite" : "readwrite-primary", t.label = 1;
                              case 1:
                                  return t.trys.push([1, 4, , 5]), s ? [3, 3] : [4, e.persistence.runTransaction("Release target", r, function(t) { return e.persistence.referenceDelegate.removeTarget(t, n) })];
                              case 2:
                                  t.sent(), t.label = 3;
                              case 3:
                                  return [3, 5];
                              case 4:
                                  if (!du(r = t.sent())) throw r; return Lr("LocalStore", "Failed to update sequence numbers for target " + o + ": " + r), [3, 5];
                              case 5:
                                  return e.Fn = e.Fn.remove(o), e.kn.delete(n.target), [2] } }) }) }

              function ch(t, o, s) { var a = t,
                      u = zr.min(),
                      c = Ks(); return a.persistence.runTransaction("Execute query", "readonly", function(e) { return t = a, n = e, r = Do(o), (void 0 !== (t = (i = t).kn.get(r)) ? nu.resolve(i.Fn.get(t)) : i.qe.getTargetData(n, r)).next(function(t) { if (t) return u = t.lastLimboFreeSnapshotVersion, a.qe.getMatchingKeysForTargetId(e, t.targetId).next(function(t) { c = t }) }).next(function() { return a.xn.getDocumentsMatchingQuery(e, o, s ? u : zr.min(), s ? c : Ks()) }).next(function(t) { return { documents: t, Bn: c } }); var t, n, r, i }) }

              function hh(t, e) { var n = t,
                      r = n.qe,
                      t = n.Fn.get(e); return t ? Promise.resolve(t.target) : n.persistence.runTransaction("Get target data", "readonly", function(t) { return r.lt(t, e).next(function(t) { return t ? t.target : null }) }) }

              function lh(t) { var s = t; return s.persistence.runTransaction("Get new document changes", "readonly", function(t) { return e = s.$n, n = t, t = s.On, r = e, i = Fs, o = xu(t), t = Pc(n), n = IDBKeyRange.lowerBound(o, !0), t.Ot({ index: Ka.readTimeIndex, range: n }, function(t, e) { var n = ku(r.R, e);
                          i = i.insert(n.key, n), o = e.readTime }).next(function() { return { wn: i, readTime: Ou(o) } }); var e, n, r, i, o }).then(function(t) { var e = t.wn,
                          t = t.readTime; return s.On = t, e }) }

              function fh(n) { return y(this, void 0, void 0, function() { var e; return g(this, function(t) { return [2, (e = n).persistence.runTransaction("Synchronize last document change read time", "readonly", function(t) { return t = Pc(t), r = zr.min(), t.Ot({ index: Ka.readTimeIndex, reverse: !0 }, function(t, e, n) { e.readTime && (r = Ou(e.readTime)), n.done() }).next(function() { return r }); var r }).then(function(t) { e.On = t })] }) }) } var dh, ph, yh = (Mh.prototype.getBundleMetadata = function(t, e) { return nu.resolve(this.Kn.get(e)) }, Mh.prototype.saveBundleMetadata = function(t, e) { return this.Kn.set(e.id, { id: e.id, version: e.version, createTime: ca(e.createTime) }), nu.resolve() }, Mh.prototype.getNamedQuery = function(t, e) { return nu.resolve(this.jn.get(e)) }, Mh.prototype.saveNamedQuery = function(t, e) { return this.jn.set(e.name, { name: (e = e).name, query: Uu(e.bundledQuery), readTime: ca(e.readTime) }), nu.resolve() }, Mh),
                  gh = (Ph.prototype.isEmpty = function() { return this.Wn.isEmpty() }, Ph.prototype.addReference = function(t, e) { e = new mh(t, e);
                      this.Wn = this.Wn.add(e), this.zn = this.zn.add(e) }, Ph.prototype.Jn = function(t, e) { var n = this;
                      t.forEach(function(t) { return n.addReference(t, e) }) }, Ph.prototype.removeReference = function(t, e) { this.Yn(new mh(t, e)) }, Ph.prototype.Xn = function(t, e) { var n = this;
                      t.forEach(function(t) { return n.removeReference(t, e) }) }, Ph.prototype.Zn = function(t) { var e = this,
                          n = new bi(new ti([])),
                          r = new mh(n, t),
                          t = new mh(n, t + 1),
                          i = []; return this.zn.forEachInRange([r, t], function(t) { e.Yn(t), i.push(t.key) }), i }, Ph.prototype.ts = function() { var e = this;
                      this.Wn.forEach(function(t) { return e.Yn(t) }) }, Ph.prototype.Yn = function(t) { this.Wn = this.Wn.delete(t), this.zn = this.zn.delete(t) }, Ph.prototype.es = function(t) { var e = new bi(new ti([])),
                          n = new mh(e, t),
                          t = new mh(e, t + 1),
                          r = Ks(); return this.zn.forEachInRange([n, t], function(t) { r = r.add(t.key) }), r }, Ph.prototype.containsKey = function(t) { var e = new mh(t, 0),
                          e = this.Wn.firstAfterOrEqual(e); return null !== e && t.isEqual(e.key) }, Ph),
                  mh = (Lh.Gn = function(t, e) { return bi.comparator(t.key, e.key) || jr(t.ns, e.ns) }, Lh.Hn = function(t, e) { return jr(t.ns, e.ns) || bi.comparator(t.key, e.key) }, Lh),
                  vh = (Oh.prototype.checkEmpty = function(t) { return nu.resolve(0 === this._n.length) }, Oh.prototype.addMutationBatch = function(t, e, n, r) { var i = this.ss;
                      this.ss++, 0 < this._n.length && this._n[this._n.length - 1];
                      n = new Iu(i, e, n, r);
                      this._n.push(n); for (var o = 0, s = r; o < s.length; o++) { var a = s[o];
                          this.rs = this.rs.add(new mh(a.key, i)), this.Ut.addToCollectionParentIndex(t, a.key.path.popLast()) } return nu.resolve(n) }, Oh.prototype.lookupMutationBatch = function(t, e) { return nu.resolve(this.os(e)) }, Oh.prototype.getNextMutationBatchAfterBatchId = function(t, e) { e += 1, e = this.cs(e), e = e < 0 ? 0 : e; return nu.resolve(this._n.length > e ? this._n[e] : null) }, Oh.prototype.getHighestUnacknowledgedBatchId = function() { return nu.resolve(0 === this._n.length ? -1 : this.ss - 1) }, Oh.prototype.getAllMutationBatches = function(t) { return nu.resolve(this._n.slice()) }, Oh.prototype.getAllMutationBatchesAffectingDocumentKey = function(t, e) { var n = this,
                          r = new mh(e, 0),
                          e = new mh(e, Number.POSITIVE_INFINITY),
                          i = []; return this.rs.forEachInRange([r, e], function(t) { t = n.os(t.ns);
                          i.push(t) }), nu.resolve(i) }, Oh.prototype.getAllMutationBatchesAffectingDocumentKeys = function(t, e) { var n = this,
                          r = new Ps(jr); return e.forEach(function(t) { var e = new mh(t, 0),
                              t = new mh(t, Number.POSITIVE_INFINITY);
                          n.rs.forEachInRange([e, t], function(t) { r = r.add(t.ns) }) }), nu.resolve(this.us(r)) }, Oh.prototype.getAllMutationBatchesAffectingQuery = function(t, e) { var n = e.path,
                          r = n.length + 1,
                          e = n;
                      bi.isDocumentKey(e) || (e = e.child("")); var e = new mh(new bi(e), 0),
                          i = new Ps(jr); return this.rs.forEachWhile(function(t) { var e = t.key.path; return !!n.isPrefixOf(e) && (e.length === r && (i = i.add(t.ns)), !0) }, e), nu.resolve(this.us(i)) }, Oh.prototype.us = function(t) { var e = this,
                          n = []; return t.forEach(function(t) { t = e.os(t);
                          null !== t && n.push(t) }), n }, Oh.prototype.removeMutationBatch = function(n, r) { var i = this;
                      Ur(0 === this.hs(r.batchId, "removed")), this._n.shift(); var o = this.rs; return nu.forEach(r.mutations, function(t) { var e = new mh(t.key, r.batchId); return o = o.delete(e), i.referenceDelegate.markPotentiallyOrphaned(n, t.key) }).next(function() { i.rs = o }) }, Oh.prototype.Gt = function(t) {}, Oh.prototype.containsKey = function(t, e) { var n = new mh(e, 0),
                          n = this.rs.firstAfterOrEqual(n); return nu.resolve(e.isEqual(n && n.key)) }, Oh.prototype.performConsistencyCheck = function(t) { return this._n.length, nu.resolve() }, Oh.prototype.hs = function(t, e) { return this.cs(t) }, Oh.prototype.cs = function(t) { return 0 === this._n.length ? 0 : t - this._n[0].batchId }, Oh.prototype.os = function(t) { t = this.cs(t); return t < 0 || t >= this._n.length ? null : this._n[t] }, Oh),
                  bh = (xh.prototype.addEntry = function(t, e, n) { var r = e.key,
                          i = this.docs.get(r),
                          o = i ? i.size : 0,
                          i = this.ls(e); return this.docs = this.docs.insert(r, { document: e.clone(), size: i, readTime: n }), this.size += i - o, this.Ut.addToCollectionParentIndex(t, r.path.popLast()) }, xh.prototype.removeEntry = function(t) { var e = this.docs.get(t);
                      e && (this.docs = this.docs.remove(t), this.size -= e.size) }, xh.prototype.getEntry = function(t, e) { var n = this.docs.get(e); return nu.resolve(n ? n.document.clone() : Pi.newInvalidDocument(e)) }, xh.prototype.getEntries = function(t, e) { var n = this,
                          r = Fs; return e.forEach(function(t) { var e = n.docs.get(t);
                          r = r.insert(t, e ? e.document.clone() : Pi.newInvalidDocument(t)) }), nu.resolve(r) }, xh.prototype.getDocumentsMatchingQuery = function(t, e, n) { for (var r = Fs, i = new bi(e.path.child("")), o = this.docs.getIteratorFrom(i); o.hasNext();) { var s = o.getNext(),
                              a = s.key,
                              u = s.value,
                              s = u.document,
                              u = u.readTime; if (!e.path.isPrefixOf(a.path)) break;
                          u.compareTo(n) <= 0 || Oo(e, s) && (r = r.insert(s.key, s.clone())) } return nu.resolve(r) }, xh.prototype.fs = function(t, e) { return nu.forEach(this.docs, function(t) { return e(t) }) }, xh.prototype.newChangeBuffer = function(t) { return new wh(this) }, xh.prototype.getSize = function(t) { return nu.resolve(this.size) }, xh),
                  wh = (n(Rh, ph = I), Rh.prototype.applyChanges = function(n) { var r = this,
                          i = []; return this.changes.forEach(function(t, e) { e.document.isValidDocument() ? i.push(r.Ie.addEntry(n, e.document, r.getReadTime(t))) : r.Ie.removeEntry(t) }), nu.waitFor(i) }, Rh.prototype.getFromCache = function(t, e) { return this.Ie.getEntry(t, e) }, Rh.prototype.getAllFromCache = function(t, e) { return this.Ie.getEntries(t, e) }, Rh),
                  Eh = (kh.prototype.forEachTarget = function(t, n) { return this.ds.forEach(function(t, e) { return n(e) }), nu.resolve() }, kh.prototype.getLastRemoteSnapshotVersion = function(t) { return nu.resolve(this.lastRemoteSnapshotVersion) }, kh.prototype.getHighestSequenceNumber = function(t) { return nu.resolve(this.ws) }, kh.prototype.allocateTargetId = function(t) { return this.highestTargetId = this.ys.next(), nu.resolve(this.highestTargetId) }, kh.prototype.setTargetsMetadata = function(t, e, n) { return n && (this.lastRemoteSnapshotVersion = n), e > this.ws && (this.ws = e), nu.resolve() }, kh.prototype.te = function(t) { this.ds.set(t.target, t); var e = t.targetId;
                      e > this.highestTargetId && (this.ys = new uc(e), this.highestTargetId = e), t.sequenceNumber > this.ws && (this.ws = t.sequenceNumber) }, kh.prototype.addTargetData = function(t, e) { return this.te(e), this.targetCount += 1, nu.resolve() }, kh.prototype.updateTargetData = function(t, e) { return this.te(e), nu.resolve() }, kh.prototype.removeTargetData = function(t, e) { return this.ds.delete(e.target), this._s.Zn(e.targetId), --this.targetCount, nu.resolve() }, kh.prototype.removeTargets = function(n, r, i) { var o = this,
                          s = 0,
                          a = []; return this.ds.forEach(function(t, e) { e.sequenceNumber <= r && null === i.get(e.targetId) && (o.ds.delete(t), a.push(o.removeMatchingKeysForTargetId(n, e.targetId)), s++) }), nu.waitFor(a).next(function() { return s }) }, kh.prototype.getTargetCount = function(t) { return nu.resolve(this.targetCount) }, kh.prototype.getTargetData = function(t, e) { e = this.ds.get(e) || null; return nu.resolve(e) }, kh.prototype.addMatchingKeys = function(t, e, n) { return this._s.Jn(e, n), nu.resolve() }, kh.prototype.removeMatchingKeys = function(e, t, n) { this._s.Xn(t, n); var r = this.persistence.referenceDelegate,
                          i = []; return r && t.forEach(function(t) { i.push(r.markPotentiallyOrphaned(e, t)) }), nu.waitFor(i) }, kh.prototype.removeMatchingKeysForTargetId = function(t, e) { return this._s.Zn(e), nu.resolve() }, kh.prototype.getMatchingKeysForTargetId = function(t, e) { e = this._s.es(e); return nu.resolve(e) }, kh.prototype.containsKey = function(t, e) { return nu.resolve(this._s.containsKey(e)) }, kh),
                  Th = (Ch.prototype.start = function() { return Promise.resolve() }, Ch.prototype.shutdown = function() { return this.xe = !1, Promise.resolve() }, Object.defineProperty(Ch.prototype, "started", { get: function() { return this.xe }, enumerable: !1, configurable: !0 }), Ch.prototype.setDatabaseDeletedListener = function() {}, Ch.prototype.setNetworkEnabled = function() {}, Ch.prototype.getIndexManager = function() { return this.Ut }, Ch.prototype.getMutationQueue = function(t) { var e = this.gs[t.toKey()]; return e || (e = new vh(this.Ut, this.referenceDelegate), this.gs[t.toKey()] = e), e }, Ch.prototype.getTargetCache = function() { return this.qe }, Ch.prototype.getRemoteDocumentCache = function() { return this.Ue }, Ch.prototype.getBundleCache = function() { return this.Qe }, Ch.prototype.runTransaction = function(t, e, n) { var r = this;
                      Lr("MemoryPersistence", "Starting transaction:", t); var i = new Ih(this.Ne.next()); return this.referenceDelegate.Es(), n(i).next(function(t) { return r.referenceDelegate.Ts(i).next(function() { return t }) }).toPromise().then(function(t) { return i.raiseOnCommittedEvent(), t }) }, Ch.prototype.Is = function(e, n) { return nu.or(Object.values(this.gs).map(function(t) { return function() { return t.containsKey(e, n) } })) }, Ch),
                  Ih = (n(Dh, dh = Se), Dh),
                  _h = (Nh.bs = function(t) { return new Nh(t) }, Object.defineProperty(Nh.prototype, "vs", { get: function() { if (this.Rs) return this.Rs; throw Vr() }, enumerable: !1, configurable: !0 }), Nh.prototype.addReference = function(t, e, n) { return this.As.addReference(n, e), this.vs.delete(n.toString()), nu.resolve() }, Nh.prototype.removeReference = function(t, e, n) { return this.As.removeReference(n, e), this.vs.add(n.toString()), nu.resolve() }, Nh.prototype.markPotentiallyOrphaned = function(t, e) { return this.vs.add(e.toString()), nu.resolve() }, Nh.prototype.removeTarget = function(t, e) { var n = this;
                      this.As.Zn(e.targetId).forEach(function(t) { return n.vs.add(t.toString()) }); var r = this.persistence.getTargetCache(); return r.getMatchingKeysForTargetId(t, e.targetId).next(function(t) { t.forEach(function(t) { return n.vs.add(t.toString()) }) }).next(function() { return r.removeTargetData(t, e) }) }, Nh.prototype.Es = function() { this.Rs = new Set }, Nh.prototype.Ts = function(n) { var r = this,
                          i = this.persistence.getRemoteDocumentCache().newChangeBuffer(); return nu.forEach(this.vs, function(t) { var e = bi.fromPath(t); return r.Ps(n, e).next(function(t) { t || i.removeEntry(e) }) }).next(function() { return r.Rs = null, i.apply(n) }) }, Nh.prototype.updateLimboDocument = function(t, e) { var n = this; return this.Ps(t, e).next(function(t) { t ? n.vs.delete(e.toString()) : n.vs.add(e.toString()) }) }, Nh.prototype.ps = function(t) { return 0 }, Nh.prototype.Ps = function(t, e) { var n = this; return nu.or([function() { return nu.resolve(n.As.containsKey(e)) }, function() { return n.persistence.getTargetCache().containsKey(t, e) }, function() { return n.persistence.Is(t, e) }]) }, Nh),
                  Sh = (Ah.prototype.isAuthenticated = function() { return null != this.uid }, Ah.prototype.toKey = function() { return this.isAuthenticated() ? "uid:" + this.uid : "anonymous-user" }, Ah.prototype.isEqual = function(t) { return t.uid === this.uid }, Ah);

              function Ah(t) { this.uid = t }

              function Nh(t) { this.persistence = t, this.As = new gh, this.Rs = null }

              function Dh(t) { var e = this; return (e = dh.call(this) || this).currentSequenceNumber = t, e }

              function Ch(t, e) { var n = this;
                  this.gs = {}, this.Ne = new Ar(0), this.xe = !1, this.xe = !0, this.referenceDelegate = t(this), this.qe = new Eh(this), this.Ut = new Gu, this.Ue = (t = this.Ut, new bh(t, function(t) { return n.referenceDelegate.ps(t) })), this.R = new Au(e), this.Qe = new yh(this.R) }

              function kh(t) { this.persistence = t, this.ds = new Nc(Ui, qi), this.lastRemoteSnapshotVersion = zr.min(), this.highestTargetId = 0, this.ws = 0, this._s = new gh, this.targetCount = 0, this.ys = uc.Jt() }

              function Rh(t) { var e = this; return (e = ph.call(this) || this).Ie = t, e }

              function xh(t, e) { this.Ut = t, this.ls = e, this.docs = new Ds(bi.comparator), this.size = 0 }

              function Oh(t, e) { this.Ut = t, this.referenceDelegate = e, this._n = [], this.ss = 1, this.rs = new Ps(mh.Gn) }

              function Lh(t, e) { this.key = t, this.ns = e }

              function Ph() { this.Wn = new Ps(mh.Gn), this.zn = new Ps(mh.Hn) }

              function Mh(t) { this.R = t, this.Kn = new Map, this.jn = new Map }

              function Fh(t, e) { return "firestore_clients_" + t + "_" + e }

              function Vh(t, e, n) { n = "firestore_mutations_" + t + "_" + n; return e.isAuthenticated() && (n += "_" + e.uid), n }

              function Uh(t, e) { return "firestore_targets_" + t + "_" + e }
              Sh.UNAUTHENTICATED = new Sh(null), Sh.GOOGLE_CREDENTIALS = new Sh("google-credentials-uid"), Sh.FIRST_PARTY = new Sh("first-party-uid"); var qh, Bh = (hl.Vs = function(t, e, n) { var r, i = JSON.parse(n),
                          o = "object" == typeof i && -1 !== ["pending", "acknowledged", "rejected"].indexOf(i.state) && (void 0 === i.error || "object" == typeof i.error); return o && i.error && (o = "string" == typeof i.error.message && "string" == typeof i.error.code) && (r = new kr(i.error.code, i.error.message)), o ? new hl(t, e, i.state, r) : (Pr("SharedClientState", "Failed to parse mutation state for ID '" + e + "': " + n), null) }, hl.prototype.Ss = function() { var t = { state: this.state, updateTimeMs: Date.now() }; return this.error && (t.error = { code: this.error.code, message: this.error.message }), JSON.stringify(t) }, hl),
                  jh = (cl.Vs = function(t, e) { var n, r = JSON.parse(e),
                          i = "object" == typeof r && -1 !== ["not-current", "current", "rejected"].indexOf(r.state) && (void 0 === r.error || "object" == typeof r.error); return i && r.error && (i = "string" == typeof r.error.message && "string" == typeof r.error.code) && (n = new kr(r.error.code, r.error.message)), i ? new cl(t, r.state, n) : (Pr("SharedClientState", "Failed to parse target state for ID '" + t + "': " + e), null) }, cl.prototype.Ss = function() { var t = { state: this.state, updateTimeMs: Date.now() }; return this.error && (t.error = { code: this.error.code, message: this.error.message }), JSON.stringify(t) }, cl),
                  Kh = (ul.Vs = function(t, e) { for (var n = JSON.parse(e), r = "object" == typeof n && n.activeTargetIds instanceof Array, i = Gs, o = 0; r && o < n.activeTargetIds.length; ++o) r = vi(n.activeTargetIds[o]), i = i.add(n.activeTargetIds[o]); return r ? new ul(t, i) : (Pr("SharedClientState", "Failed to parse client data for instance '" + t + "': " + e), null) }, ul),
                  Gh = (al.Vs = function(t) { var e = JSON.parse(t); return "object" == typeof e && -1 !== ["Unknown", "Online", "Offline"].indexOf(e.onlineState) && "string" == typeof e.clientId ? new al(e.clientId, e.onlineState) : (Pr("SharedClientState", "Failed to parse online state: " + t), null) }, al),
                  Qh = (sl.prototype.Ds = function(t) { this.activeTargetIds = this.activeTargetIds.add(t) }, sl.prototype.Cs = function(t) { this.activeTargetIds = this.activeTargetIds.delete(t) }, sl.prototype.Ss = function() { var t = { activeTargetIds: this.activeTargetIds.toArray(), updateTimeMs: Date.now() }; return JSON.stringify(t) }, sl),
                  zh = (ol.yt = function(t) { return !(!t || !t.localStorage) }, ol.prototype.start = function() { return y(this, void 0, void 0, function() { var e, n, r, i, o, s, a, u, c, h, l = this; return g(this, function(t) { switch (t.label) {
                                  case 0:
                                      return [4, this.syncEngine.fn()];
                                  case 1:
                                      for (s = t.sent(), e = 0, n = s; e < n.length; e++)(r = n[e]) !== this.Ns && (i = this.getItem(Fh(this.persistenceKey, r))) && (o = Kh.Vs(r, i)) && (this.ks = this.ks.insert(o.clientId, o)); for (this.Ks(), (s = this.storage.getItem(this.Us)) && (a = this.js(s)) && this.Ws(a), u = 0, c = this.Os; u < c.length; u++) h = c[u], this.Fs(h); return this.Os = [], this.window.addEventListener("pagehide", function() { return l.shutdown() }), this.started = !0, [2] } }) }) }, ol.prototype.writeSequenceNumber = function(t) { this.setItem(this.Ms, JSON.stringify(t)) }, ol.prototype.getAllActiveQueryTargets = function() { return this.Gs(this.ks) }, ol.prototype.isActiveQueryTarget = function(n) { var r = !1; return this.ks.forEach(function(t, e) { e.activeTargetIds.has(n) && (r = !0) }), r }, ol.prototype.addPendingMutation = function(t) { this.zs(t, "pending") }, ol.prototype.updateMutationState = function(t, e, n) { this.zs(t, e, n), this.Hs(t) }, ol.prototype.addLocalQueryTarget = function(t) { var e, n = "not-current"; return this.isActiveQueryTarget(t) && (!(e = this.storage.getItem(Uh(this.persistenceKey, t))) || (e = jh.Vs(t, e)) && (n = e.state)), this.Js.Ds(t), this.Ks(), n }, ol.prototype.removeLocalQueryTarget = function(t) { this.Js.Cs(t), this.Ks() }, ol.prototype.isLocalQueryTarget = function(t) { return this.Js.activeTargetIds.has(t) }, ol.prototype.clearQueryState = function(t) { this.removeItem(Uh(this.persistenceKey, t)) }, ol.prototype.updateQueryState = function(t, e, n) { this.Ys(t, e, n) }, ol.prototype.handleUserChange = function(t, e, n) { var r = this;
                      e.forEach(function(t) { r.Hs(t) }), this.currentUser = t, n.forEach(function(t) { r.addPendingMutation(t) }) }, ol.prototype.setOnlineState = function(t) { this.Xs(t) }, ol.prototype.notifyBundleLoaded = function() { this.Zs() }, ol.prototype.shutdown = function() { this.started && (this.window.removeEventListener("storage", this.xs), this.removeItem(this.$s), this.started = !1) }, ol.prototype.getItem = function(t) { var e = this.storage.getItem(t); return Lr("SharedClientState", "READ", t, e), e }, ol.prototype.setItem = function(t, e) { Lr("SharedClientState", "SET", t, e), this.storage.setItem(t, e) }, ol.prototype.removeItem = function(t) { Lr("SharedClientState", "REMOVE", t), this.storage.removeItem(t) }, ol.prototype.Fs = function(t) { var e = this,
                          o = t;
                      o.storageArea === this.storage && (Lr("SharedClientState", "EVENT", o.key, o.newValue), o.key !== this.$s ? this.Se.enqueueRetryable(function() { return y(e, void 0, void 0, function() { var e, n, r, i; return g(this, function(t) { if (this.started) { if (null !== o.key)
                                          if (this.Ls.test(o.key)) { if (null == o.newValue) return e = this.ti(o.key), [2, this.ei(e, null)]; if (e = this.ni(o.key, o.newValue)) return [2, this.ei(e.clientId, e)] } else if (this.Bs.test(o.key)) { if (null !== o.newValue && (n = this.si(o.key, o.newValue))) return [2, this.ii(n)] } else if (this.qs.test(o.key)) { if (null !== o.newValue && (r = this.ri(o.key, o.newValue))) return [2, this.oi(r)] } else if (o.key === this.Us) { if (null !== o.newValue && (i = this.js(o.newValue))) return [2, this.Ws(i)] } else if (o.key === this.Ms)(i = function(t) { var e = Ar.o; if (null != t) try { var n = JSON.parse(t);
                                              Ur("number" == typeof n), e = n } catch (t) { Pr("SharedClientState", "Failed to read sequence number from WebStorage", t) }
                                          return e }(o.newValue)) !== Ar.o && this.sequenceNumberHandler(i);
                                      else if (o.key === this.Qs) return [2, this.syncEngine.ci()] } else this.Os.push(o); return [2] }) }) }) : Pr("Received WebStorage notification for local change. Another client might have garbage-collected our state")) }, Object.defineProperty(ol.prototype, "Js", { get: function() { return this.ks.get(this.Ns) }, enumerable: !1, configurable: !0 }), ol.prototype.Ks = function() { this.setItem(this.$s, this.Js.Ss()) }, ol.prototype.zs = function(t, e, n) { n = new Bh(this.currentUser, t, e, n), t = Vh(this.persistenceKey, this.currentUser, t);
                      this.setItem(t, n.Ss()) }, ol.prototype.Hs = function(t) { t = Vh(this.persistenceKey, this.currentUser, t);
                      this.removeItem(t) }, ol.prototype.Xs = function(t) { t = { clientId: this.Ns, onlineState: t };
                      this.storage.setItem(this.Us, JSON.stringify(t)) }, ol.prototype.Ys = function(t, e, n) { var r = Uh(this.persistenceKey, t),
                          n = new jh(t, e, n);
                      this.setItem(r, n.Ss()) }, ol.prototype.Zs = function() { this.setItem(this.Qs, "value-not-used") }, ol.prototype.ti = function(t) { t = this.Ls.exec(t); return t ? t[1] : null }, ol.prototype.ni = function(t, e) { t = this.ti(t); return Kh.Vs(t, e) }, ol.prototype.si = function(t, e) { var n = this.Bs.exec(t),
                          t = Number(n[1]),
                          n = void 0 !== n[2] ? n[2] : null; return Bh.Vs(new Sh(n), t, e) }, ol.prototype.ri = function(t, e) { t = this.qs.exec(t), t = Number(t[1]); return jh.Vs(t, e) }, ol.prototype.js = function(t) { return Gh.Vs(t) }, ol.prototype.ii = function(e) { return y(this, void 0, void 0, function() { return g(this, function(t) { return e.user.uid === this.currentUser.uid ? [2, this.syncEngine.ai(e.batchId, e.state, e.error)] : (Lr("SharedClientState", "Ignoring mutation for non-active user " + e.user.uid), [2]) }) }) }, ol.prototype.oi = function(t) { return this.syncEngine.ui(t.targetId, t.state, t.error) }, ol.prototype.ei = function(t, e) { var n = this,
                          r = e ? this.ks.insert(t, e) : this.ks.remove(t),
                          i = this.Gs(this.ks),
                          o = this.Gs(r),
                          s = [],
                          a = []; return o.forEach(function(t) { i.has(t) || s.push(t) }), i.forEach(function(t) { o.has(t) || a.push(t) }), this.syncEngine.hi(s, a).then(function() { n.ks = r }) }, ol.prototype.Ws = function(t) { this.ks.get(t.clientId) && this.onlineStateHandler(t.onlineState) }, ol.prototype.Gs = function(t) { var n = Gs; return t.forEach(function(t, e) { n = n.unionWith(e.activeTargetIds) }), n }, ol),
                  Hh = (il.prototype.addPendingMutation = function(t) {}, il.prototype.updateMutationState = function(t, e, n) {}, il.prototype.addLocalQueryTarget = function(t) { return this.li.Ds(t), this.fi[t] || "not-current" }, il.prototype.updateQueryState = function(t, e, n) { this.fi[t] = e }, il.prototype.removeLocalQueryTarget = function(t) { this.li.Cs(t) }, il.prototype.isLocalQueryTarget = function(t) { return this.li.activeTargetIds.has(t) }, il.prototype.clearQueryState = function(t) { delete this.fi[t] }, il.prototype.getAllActiveQueryTargets = function() { return this.li.activeTargetIds }, il.prototype.isActiveQueryTarget = function(t) { return this.li.activeTargetIds.has(t) }, il.prototype.start = function() { return this.li = new Qh, Promise.resolve() }, il.prototype.handleUserChange = function(t, e, n) {}, il.prototype.setOnlineState = function(t) {}, il.prototype.shutdown = function() {}, il.prototype.writeSequenceNumber = function(t) {}, il.prototype.notifyBundleLoaded = function() {}, il),
                  Wh = (rl.prototype.di = function(t) {}, rl.prototype.shutdown = function() {}, rl),
                  Yh = (nl.prototype.di = function(t) { this.gi.push(t) }, nl.prototype.shutdown = function() { window.removeEventListener("online", this.wi), window.removeEventListener("offline", this.mi) }, nl.prototype.pi = function() { window.addEventListener("online", this.wi), window.addEventListener("offline", this.mi) }, nl.prototype._i = function() { Lr("ConnectivityMonitor", "Network connectivity changed: AVAILABLE"); for (var t = 0, e = this.gi; t < e.length; t++)(0, e[t])(0) }, nl.prototype.yi = function() { Lr("ConnectivityMonitor", "Network connectivity changed: UNAVAILABLE"); for (var t = 0, e = this.gi; t < e.length; t++)(0, e[t])(1) }, nl.yt = function() { return "undefined" != typeof window && void 0 !== window.addEventListener && void 0 !== window.removeEventListener }, nl),
                  Xh = { BatchGetDocuments: "batchGet", Commit: "commit", RunQuery: "runQuery" },
                  Jh = (el.prototype.Ii = function(t) { this.Ai = t }, el.prototype.Ri = function(t) { this.bi = t }, el.prototype.onMessage = function(t) { this.vi = t }, el.prototype.close = function() { this.Ti() }, el.prototype.send = function(t) { this.Ei(t) }, el.prototype.Pi = function() { this.Ai() }, el.prototype.Vi = function(t) { this.bi(t) }, el.prototype.Si = function(t) { this.vi(t) }, el),
                  $h = (tl.prototype.Ni = function(e, t, n, r) { var i = this.xi(e, t);
                      Lr("RestConnection", "Sending: ", i, n);
                      t = {}; return this.Fi(t, r), this.ki(e, i, t, n).then(function(t) { return Lr("RestConnection", "Received: ", t), t }, function(t) { throw Mr("RestConnection", e + " failed with error: ", t, "url: ", i, "request:", n), t }) }, tl.prototype.Oi = function(t, e, n, r) { return this.Ni(t, e, n, r) }, tl.prototype.Fi = function(t, e) { if (t["X-Goog-Api-Client"] = "gl-js/ fire/8.6.2", t["Content-Type"] = "text/plain", this.databaseInfo.appId && (t["X-Firebase-GMPID"] = this.databaseInfo.appId), e)
                          for (var n in e.authHeaders) e.authHeaders.hasOwnProperty(n) && (t[n] = e.authHeaders[n]) }, tl.prototype.xi = function(t, e) { t = Xh[t]; return this.Di + "/v1/" + e + ":" + t }, n(Zh, qh = tl), Zh.prototype.ki = function(o, e, s, a) { return new Promise(function(n, r) { var i = new Sr;
                          i.listenOnce(wr.COMPLETE, function() { try { switch (i.getLastErrorCode()) {
                                      case br.NO_ERROR:
                                          var t = i.getResponseJson();
                                          Lr("Connection", "XHR received:", JSON.stringify(t)), n(t); break;
                                      case br.TIMEOUT:
                                          Lr("Connection", 'RPC "' + o + '" timed out'), r(new kr(Cr.DEADLINE_EXCEEDED, "Request time out")); break;
                                      case br.HTTP_ERROR:
                                          var e = i.getStatus();
                                          Lr("Connection", 'RPC "' + o + '" failed with status:', e, "response text:", i.getResponseText()), 0 < e ? (t = i.getResponseJson().error) && t.status && t.message ? (e = t.status.toLowerCase().replace(/_/g, "-"), e = 0 <= Object.values(Cr).indexOf(e) ? e : Cr.UNKNOWN, r(new kr(e, t.message))) : r(new kr(Cr.UNKNOWN, "Server responded with status " + i.getStatus())) : r(new kr(Cr.UNAVAILABLE, "Connection failed.")); break;
                                      default:
                                          Vr() } } finally { Lr("Connection", 'RPC "' + o + '" completed.') } }); var t = JSON.stringify(a);
                          i.send(e, "POST", t, s, 15) }) }, Zh.prototype.$i = function(t, e) { var n, r = [this.Di, "/", "google.firestore.v1.Firestore", "/", t, "/channel"],
                          i = new dr,
                          o = vr(),
                          t = { httpSessionIdParam: "gsessionid", initMessageHeaders: {}, messageUrlParams: { database: "projects/" + this.databaseId.projectId + "/databases/" + this.databaseId.database }, sendRawJson: !0, supportsCrossDomainXhr: !0, internalChannelParams: { forwardChannelRequestTimeoutMs: 6e5 }, forceLongPolling: this.forceLongPolling, detectBufferingProxy: this.autoDetectLongPolling };
                      this.Fi(t.initMessageHeaders, e), "undefined" != typeof window && (window.cordova || window.phonegap || window.PhoneGap) && /ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(h()) || "object" == typeof navigator && "ReactNative" === navigator.product || 0 <= h().indexOf("Electron/") || (0 <= (n = h()).indexOf("MSIE ") || 0 <= n.indexOf("Trident/")) || 0 <= h().indexOf("MSAppHost/") || "object" == typeof(n = "object" == typeof chrome ? chrome.runtime : "object" == typeof browser ? browser.runtime : void 0) && void 0 !== n.id || (t.httpHeadersOverwriteParam = "$httpHeaders");
                      r = r.join("");
                      Lr("Connection", "Creating WebChannel: " + r, t); var s = i.createWebChannel(r, t),
                          a = !1,
                          u = !1,
                          c = new Jh({ Ei: function(t) { u ? Lr("Connection", "Not sending because WebChannel is closed:", t) : (a || (Lr("Connection", "Opening WebChannel transport."), s.open(), a = !0), Lr("Connection", "WebChannel sending:", t), s.send(t)) }, Ti: function() { return s.close() } }),
                          t = function(t, e, n) { t.listen(e, function(t) { try { n(t) } catch (t) { setTimeout(function() { throw t }, 0) } }) }; return t(s, _r.EventType.OPEN, function() { u || Lr("Connection", "WebChannel transport opened.") }), t(s, _r.EventType.CLOSE, function() { u || (u = !0, Lr("Connection", "WebChannel transport closed"), c.Vi()) }), t(s, _r.EventType.ERROR, function(t) { u || (u = !0, Mr("Connection", "WebChannel transport errored:", t), c.Vi(new kr(Cr.UNAVAILABLE, "The operation could not be completed"))) }), t(s, _r.EventType.MESSAGE, function(t) { var e, n, r, i;
                          u || (Ur(!!(e = t.data[0])), (n = e.error || (null === (i = e[0]) || void 0 === i ? void 0 : i.error)) ? (Lr("Connection", "WebChannel received error:", n), r = n.status, t = function() { var t = bs[r]; if (void 0 !== t) return Ns(t) }(), i = n.message, void 0 === t && (t = Cr.INTERNAL, i = "Unknown error status: " + r + " with message " + n.message), u = !0, c.Vi(new kr(t, i)), s.close()) : (Lr("Connection", "WebChannel received:", e), c.Si(e))) }), t(o, Er.STAT_EVENT, function(t) { t.stat === Tr ? Lr("Connection", "Detected buffering proxy") : t.stat === Ir && Lr("Connection", "Detected no buffering proxy") }), setTimeout(function() { c.Pi() }, 0), c }, Zh);

              function Zh(t) { var e = this; return (e = qh.call(this, t) || this).forceLongPolling = t.forceLongPolling, e.autoDetectLongPolling = t.autoDetectLongPolling, e }

              function tl(t) { this.databaseInfo = t, this.databaseId = t.databaseId; var e = t.ssl ? "https" : "http";
                  this.Di = e + "://" + t.host, this.Ci = "projects/" + this.databaseId.projectId + "/databases/" + this.databaseId.database + "/documents" }

              function el(t) { this.Ei = t.Ei, this.Ti = t.Ti }

              function nl() { var t = this;
                  this.wi = function() { return t._i() }, this.mi = function() { return t.yi() }, this.gi = [], this.pi() }

              function rl() {}

              function il() { this.li = new Qh, this.fi = {}, this.onlineStateHandler = null, this.sequenceNumberHandler = null }

              function ol(t, e, n, r, i) { this.window = t, this.Se = e, this.persistenceKey = n, this.Ns = r, this.syncEngine = null, this.onlineStateHandler = null, this.sequenceNumberHandler = null, this.xs = this.Fs.bind(this), this.ks = new Ds(jr), this.started = !1, this.Os = [];
                  n = n.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
                  this.storage = this.window.localStorage, this.currentUser = i, this.$s = Fh(this.persistenceKey, this.Ns), this.Ms = "firestore_sequence_number_" + this.persistenceKey, this.ks = this.ks.insert(this.Ns, new Qh), this.Ls = new RegExp("^firestore_clients_" + n + "_([^_]*)$"), this.Bs = new RegExp("^firestore_mutations_" + n + "_(\\d+)(?:_(.*))?$"), this.qs = new RegExp("^firestore_targets_" + n + "_(\\d+)$"), this.Us = "firestore_online_state_" + this.persistenceKey, this.Qs = "firestore_bundle_loaded_" + this.persistenceKey, this.window.addEventListener("storage", this.xs) }

              function sl() { this.activeTargetIds = Gs }

              function al(t, e) { this.clientId = t, this.onlineState = e }

              function ul(t, e) { this.clientId = t, this.activeTargetIds = e }

              function cl(t, e, n) { this.targetId = t, this.state = e, this.error = n }

              function hl(t, e, n, r) { this.user = t, this.batchId = e, this.state = n, this.error = r }

              function ll() { return "undefined" != typeof window ? window : null }

              function fl() { return "undefined" != typeof document ? document : null }

              function dl(t) { return new sa(t, !0) }

              function pl(t, e, n, r, i) { var o = this;
                  this.localStore = t, this.datastore = e, this.asyncQueue = n, this.remoteSyncer = {}, this.kr = [], this.Or = new Map, this.$r = new Set, this.Mr = [], this.Lr = i, this.Lr.di(function(t) { n.enqueueAndForget(function() { return y(o, void 0, void 0, function() { return g(this, function(t) { switch (t.label) {
                                      case 0:
                                          return Fl(this) ? (Lr("RemoteStore", "Restarting streams for network reachability change."), [4, function(n) { return y(this, void 0, void 0, function() { var e; return g(this, function(t) { switch (t.label) {
                                                          case 0:
                                                              return (e = n).$r.add(4), [4, kl(e)];
                                                          case 1:
                                                              return t.sent(), e.Br.set("Unknown"), e.$r.delete(4), [4, Cl(e)];
                                                          case 2:
                                                              return t.sent(), [2] } }) }) }(this)]) : [3, 2];
                                      case 1:
                                          t.sent(), t.label = 2;
                                      case 2:
                                          return [2] } }) }) }) }), this.Br = new Tl(n, r) } var yl, gl, ml, vl = (Dl.prototype.reset = function() { this.qi = 0 }, Dl.prototype.Ki = function() { this.qi = this.Bi }, Dl.prototype.ji = function(t) { var e = this;
                      this.cancel(); var n = Math.floor(this.qi + this.Wi()),
                          r = Math.max(0, Date.now() - this.Qi),
                          i = Math.max(0, n - r);
                      0 < i && Lr("ExponentialBackoff", "Backing off for " + i + " ms (base delay: " + this.qi + " ms, delay with jitter: " + n + " ms, last attempt: " + r + " ms ago)"), this.Ui = this.Se.enqueueAfterDelay(this.timerId, i, function() { return e.Qi = Date.now(), t() }), this.qi *= this.Li, this.qi < this.Mi && (this.qi = this.Mi), this.qi > this.Bi && (this.qi = this.Bi) }, Dl.prototype.Gi = function() { null !== this.Ui && (this.Ui.skipDelay(), this.Ui = null) }, Dl.prototype.cancel = function() { null !== this.Ui && (this.Ui.cancel(), this.Ui = null) }, Dl.prototype.Wi = function() { return (Math.random() - .5) * this.qi }, Dl),
                  I = (Nl.prototype.tr = function() { return 1 === this.state || 2 === this.state || 4 === this.state }, Nl.prototype.er = function() { return 2 === this.state }, Nl.prototype.start = function() { 3 !== this.state ? this.auth() : this.nr() }, Nl.prototype.stop = function() { return y(this, void 0, void 0, function() { return g(this, function(t) { switch (t.label) {
                                  case 0:
                                      return this.tr() ? [4, this.close(0)] : [3, 2];
                                  case 1:
                                      t.sent(), t.label = 2;
                                  case 2:
                                      return [2] } }) }) }, Nl.prototype.sr = function() { this.state = 0, this.Zi.reset() }, Nl.prototype.ir = function() { var t = this;
                      this.er() && null === this.Xi && (this.Xi = this.Se.enqueueAfterDelay(this.zi, 6e4, function() { return t.rr() })) }, Nl.prototype.cr = function(t) { this.ar(), this.stream.send(t) }, Nl.prototype.rr = function() { return y(this, void 0, void 0, function() { return g(this, function(t) { return this.er() ? [2, this.close(0)] : [2] }) }) }, Nl.prototype.ar = function() { this.Xi && (this.Xi.cancel(), this.Xi = null) }, Nl.prototype.close = function(e, n) { return y(this, void 0, void 0, function() { return g(this, function(t) { switch (t.label) {
                                  case 0:
                                      return this.ar(), this.Zi.cancel(), this.Yi++, 3 !== e ? this.Zi.reset() : n && n.code === Cr.RESOURCE_EXHAUSTED ? (Pr(n.toString()), Pr("Using maximum backoff delay to prevent overloading the backend."), this.Zi.Ki()) : n && n.code === Cr.UNAUTHENTICATED && this.Ji.invalidateToken(), null !== this.stream && (this.ur(), this.stream.close(), this.stream = null), this.state = e, [4, this.listener.Ri(n)];
                                  case 1:
                                      return t.sent(), [2] } }) }) }, Nl.prototype.ur = function() {}, Nl.prototype.auth = function() { var n = this;
                      this.state = 1; var t = this.hr(this.Yi),
                          e = this.Yi;
                      this.Ji.getToken().then(function(t) { n.Yi === e && n.lr(t) }, function(e) { t(function() { var t = new kr(Cr.UNKNOWN, "Fetching auth token failed: " + e.message); return n.dr(t) }) }) }, Nl.prototype.lr = function(t) { var e = this,
                          n = this.hr(this.Yi);
                      this.stream = this.wr(t), this.stream.Ii(function() { n(function() { return e.state = 2, e.listener.Ii() }) }), this.stream.Ri(function(t) { n(function() { return e.dr(t) }) }), this.stream.onMessage(function(t) { n(function() { return e.onMessage(t) }) }) }, Nl.prototype.nr = function() { var t = this;
                      this.state = 4, this.Zi.ji(function() { return y(t, void 0, void 0, function() { return g(this, function(t) { return this.state = 0, this.start(), [2] }) }) }) }, Nl.prototype.dr = function(t) { return Lr("PersistentStream", "close with error: " + t), this.stream = null, this.close(3, t) }, Nl.prototype.hr = function(e) { var n = this; return function(t) { n.Se.enqueueAndForget(function() { return n.Yi === e ? t() : (Lr("PersistentStream", "stream callback skipped by getCloseGuardedDispatcher."), Promise.resolve()) }) } }, Nl),
                  bl = (n(Al, ml = I), Al.prototype.wr = function(t) { return this.Hi.$i("Listen", t) }, Al.prototype.onMessage = function(t) { this.Zi.reset(); var e = function(t, e) { if ("targetChange" in e) { e.targetChange; var n = "NO_CHANGE" === (o = e.targetChange.targetChangeType || "NO_CHANGE") ? 0 : "ADD" === o ? 1 : "REMOVE" === o ? 2 : "CURRENT" === o ? 3 : "RESET" === o ? 4 : Vr(),
                                      r = e.targetChange.targetIds || [],
                                      i = (s = e.targetChange.resumeToken, t.I ? (Ur(void 0 === s || "string" == typeof s), ii.fromBase64String(s || "")) : (Ur(void 0 === s || s instanceof Uint8Array), ii.fromUint8Array(s || new Uint8Array))),
                                      o = (a = e.targetChange.cause) && (u = void 0 === (c = a).code ? Cr.UNKNOWN : Ns(c.code), new kr(u, c.message || "")),
                                      s = new Ys(n, r, i, o || null) } else if ("documentChange" in e) { e.documentChange, (n = e.documentChange).document, n.document.name, n.document.updateTime; var r = da(t, n.document.name),
                                      i = ca(n.document.updateTime),
                                      a = new Oi({ mapValue: { fields: n.document.fields } }),
                                      u = (o = Pi.newFoundDocument(r, i, a), n.targetIds || []),
                                      c = n.removedTargetIds || [];
                                  s = new Hs(u, c, o.key, o) } else if ("documentDelete" in e) e.documentDelete, (n = e.documentDelete).document, r = da(t, n.document), i = n.readTime ? ca(n.readTime) : zr.min(), a = Pi.newNoDocument(r, i), o = n.removedTargetIds || [], s = new Hs([], o, a.key, a);
                              else if ("documentRemove" in e) e.documentRemove, (n = e.documentRemove).document, r = da(t, n.document), i = n.removedTargetIds || [], s = new Hs([], i, r, null);
                              else { if (!("filter" in e)) return Vr();
                                  e.filter;
                                  e = e.filter;
                                  e.targetId, n = e.count || 0, r = new vs(n), i = e.targetId, s = new Ws(i, r) } return s }(this.R, t),
                          t = function(t) { if (!("targetChange" in t)) return zr.min();
                              t = t.targetChange; return (!t.targetIds || !t.targetIds.length) && t.readTime ? ca(t.readTime) : zr.min() }(t); return this.listener._r(e, t) }, Al.prototype.mr = function(t) { var e, n, r, i = {};
                      i.database = ga(this.R), i.addTarget = (e = this.R, (r = Bi(r = (n = t).target) ? { documents: Ta(e, r) } : { query: Ia(e, r) }).targetId = n.targetId, 0 < n.resumeToken.approximateByteSize() ? r.resumeToken = ua(e, n.resumeToken) : 0 < n.snapshotVersion.compareTo(zr.min()) && (r.readTime = aa(e, n.snapshotVersion.toTimestamp())), r); var o, t = (this.R, o = t, null == (t = function() { switch (o.purpose) {
                              case 0:
                                  return null;
                              case 1:
                                  return "existence-filter-mismatch";
                              case 2:
                                  return "limbo-document";
                              default:
                                  return Vr() } }()) ? null : { "goog-listen-tags": t });
                      t && (i.labels = t), this.cr(i) }, Al.prototype.yr = function(t) { var e = {};
                      e.database = ga(this.R), e.removeTarget = t, this.cr(e) }, Al),
                  wl = (n(Sl, gl = I), Object.defineProperty(Sl.prototype, "pr", { get: function() { return this.gr }, enumerable: !1, configurable: !0 }), Sl.prototype.start = function() { this.gr = !1, this.lastStreamToken = void 0, gl.prototype.start.call(this) }, Sl.prototype.ur = function() { this.gr && this.Er([]) }, Sl.prototype.wr = function(t) { return this.Hi.$i("Write", t) }, Sl.prototype.onMessage = function(t) { if (Ur(!!t.streamToken), this.lastStreamToken = t.streamToken, this.gr) { this.Zi.reset(); var e = (n = t.writeResults, r = t.commitTime, n && 0 < n.length ? (Ur(void 0 !== r), n.map(function(t) { return n = r, (t = (e = t).updateTime ? ca(e.updateTime) : ca(n)).isEqual(zr.min()) && (t = ca(n)), new es(t, e.transformResults || []); var e, n })) : []),
                              n = ca(t.commitTime); return this.listener.Tr(n, e) } var n, r; return Ur(!t.writeResults || 0 === t.writeResults.length), this.gr = !0, this.listener.Ir() }, Sl.prototype.Ar = function() { var t = {};
                      t.database = ga(this.R), this.cr(t) }, Sl.prototype.Er = function(t) { var e = this,
                          t = { streamToken: this.lastStreamToken, writes: t.map(function(t) { return wa(e.R, t) }) };
                      this.cr(t) }, Sl),
                  El = (n(_l, yl = function() {}), _l.prototype.br = function() { if (this.Rr) throw new kr(Cr.FAILED_PRECONDITION, "The client has already been terminated.") }, _l.prototype.Ni = function(e, n, r) { var i = this; return this.br(), this.credentials.getToken().then(function(t) { return i.Hi.Ni(e, n, r, t) }).catch(function(t) { throw "FirebaseError" === t.name ? (t.code === Cr.UNAUTHENTICATED && i.credentials.invalidateToken(), t) : new kr(Cr.UNKNOWN, t.toString()) }) }, _l.prototype.Oi = function(e, n, r) { var i = this; return this.br(), this.credentials.getToken().then(function(t) { return i.Hi.Oi(e, n, r, t) }).catch(function(t) { throw "FirebaseError" === t.name ? (t.code === Cr.UNAUTHENTICATED && i.credentials.invalidateToken(), t) : new kr(Cr.UNKNOWN, t.toString()) }) }, _l.prototype.terminate = function() { this.Rr = !0 }, _l),
                  Tl = (Il.prototype.Sr = function() { var t = this;
                      0 === this.vr && (this.Dr("Unknown"), this.Pr = this.asyncQueue.enqueueAfterDelay("online_state_timeout", 1e4, function() { return t.Pr = null, t.Cr("Backend didn't respond within 10 seconds."), t.Dr("Offline"), Promise.resolve() })) }, Il.prototype.Nr = function(t) { "Online" === this.state ? this.Dr("Unknown") : (this.vr++, 1 <= this.vr && (this.Fr(), this.Cr("Connection failed 1 times. Most recent error: " + t.toString()), this.Dr("Offline"))) }, Il.prototype.set = function(t) { this.Fr(), this.vr = 0, "Online" === t && (this.Vr = !1), this.Dr(t) }, Il.prototype.Dr = function(t) { t !== this.state && (this.state = t, this.onlineStateHandler(t)) }, Il.prototype.Cr = function(t) { t = "Could not reach Cloud Firestore backend. " + t + "\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.";
                      this.Vr ? (Pr(t), this.Vr = !1) : Lr("OnlineStateTracker", t) }, Il.prototype.Fr = function() { null !== this.Pr && (this.Pr.cancel(), this.Pr = null) }, Il);

              function Il(t, e) { this.asyncQueue = t, this.onlineStateHandler = e, this.state = "Unknown", this.vr = 0, this.Pr = null, this.Vr = !0 }

              function _l(t, e, n) { var r = this; return (r = yl.call(this) || this).credentials = t, r.Hi = e, r.R = n, r.Rr = !1, r }

              function Sl(t, e, n, r, i) { var o = this; return (o = gl.call(this, t, "write_stream_connection_backoff", "write_stream_idle", e, n, i) || this).R = r, o.gr = !1, o }

              function Al(t, e, n, r, i) { var o = this; return (o = ml.call(this, t, "listen_stream_connection_backoff", "listen_stream_idle", e, n, i) || this).R = r, o }

              function Nl(t, e, n, r, i, o) { this.Se = t, this.zi = n, this.Hi = r, this.Ji = i, this.listener = o, this.state = 0, this.Yi = 0, this.Xi = null, this.stream = null, this.Zi = new vl(t, e) }

              function Dl(t, e, n, r, i) { void 0 === n && (n = 1e3), void 0 === r && (r = 1.5), void 0 === i && (i = 6e4), this.Se = t, this.timerId = e, this.Mi = n, this.Li = r, this.Bi = i, this.qi = 0, this.Ui = null, this.Qi = Date.now(), this.reset() }

              function Cl(r) { return y(this, void 0, void 0, function() { var e, n; return g(this, function(t) { switch (t.label) {
                              case 0:
                                  if (!Fl(r)) return [3, 4];
                                  e = 0, n = r.Mr, t.label = 1;
                              case 1:
                                  return e < n.length ? [4, (0, n[e])(!0)] : [3, 4];
                              case 2:
                                  t.sent(), t.label = 3;
                              case 3:
                                  return e++, [3, 1];
                              case 4:
                                  return [2] } }) }) }

              function kl(r) { return y(this, void 0, void 0, function() { var e, n; return g(this, function(t) { switch (t.label) {
                              case 0:
                                  e = 0, n = r.Mr, t.label = 1;
                              case 1:
                                  return e < n.length ? [4, (0, n[e])(!1)] : [3, 4];
                              case 2:
                                  t.sent(), t.label = 3;
                              case 3:
                                  return e++, [3, 1];
                              case 4:
                                  return [2] } }) }) }

              function Rl(t, e) { t.Or.has(e.targetId) || (t.Or.set(e.targetId, e), Ml(t) ? Pl(t) : zl(t).er() && Ol(t, e)) }

              function xl(t, e) { var n = t,
                      t = zl(n);
                  n.Or.delete(e), t.er() && Ll(n, e), 0 === n.Or.size && (t.er() ? t.ir() : Fl(n) && n.Br.set("Unknown")) }

              function Ol(t, e) { t.qr.U(e.targetId), zl(t).mr(e) }

              function Ll(t, e) { t.qr.U(e), zl(t).yr(e) }

              function Pl(e) { e.qr = new Js({ getRemoteKeysForTarget: function(t) { return e.remoteSyncer.getRemoteKeysForTarget(t) }, lt: function(t) { return e.Or.get(t) || null } }), zl(e).start(), e.Br.Sr() }

              function Ml(t) { return Fl(t) && !zl(t).tr() && 0 < t.Or.size }

              function Fl(t) { return 0 === t.$r.size }

              function Vl(t) { t.qr = void 0 }

              function Ul(s, a, u) { return y(this, void 0, void 0, function() { var n, o; return g(this, function(t) { switch (t.label) {
                              case 0:
                                  if (s.Br.set("Online"), !(a instanceof Ys && 2 === a.state && a.cause)) return [3, 6];
                                  t.label = 1;
                              case 1:
                                  return t.trys.push([1, 3, , 5]), [4, function(o, s) { return y(this, void 0, void 0, function() { var e, n, r, i; return g(this, function(t) { switch (t.label) {
                                                  case 0:
                                                      e = s.cause, n = 0, r = s.targetIds, t.label = 1;
                                                  case 1:
                                                      return n < r.length ? (i = r[n], o.Or.has(i) ? [4, o.remoteSyncer.rejectListen(i, e)] : [3, 3]) : [3, 5];
                                                  case 2:
                                                      t.sent(), o.Or.delete(i), o.qr.removeTarget(i), t.label = 3;
                                                  case 3:
                                                      t.label = 4;
                                                  case 4:
                                                      return n++, [3, 1];
                                                  case 5:
                                                      return [2] } }) }) }(s, a)];
                              case 2:
                                  return t.sent(), [3, 5];
                              case 3:
                                  return n = t.sent(), Lr("RemoteStore", "Failed to remove targets %s: %s ", a.targetIds.join(","), n), [4, ql(s, n)];
                              case 4:
                                  return t.sent(), [3, 5];
                              case 5:
                                  return [3, 13];
                              case 6:
                                  if (a instanceof Hs ? s.qr.X(a) : a instanceof Ws ? s.qr.rt(a) : s.qr.et(a), u.isEqual(zr.min())) return [3, 13];
                                  t.label = 7;
                              case 7:
                                  return t.trys.push([7, 11, , 13]), [4, ih(s.localStore)];
                              case 8:
                                  return o = t.sent(), 0 <= u.compareTo(o) ? [4, (i = u, (e = (r = s).qr.at(i)).targetChanges.forEach(function(t, e) { var n;
                                      0 < t.resumeToken.approximateByteSize() && ((n = r.Or.get(e)) && r.Or.set(e, n.withResumeToken(t.resumeToken, i))) }), e.targetMismatches.forEach(function(t) { var e = r.Or.get(t);
                                      e && (r.Or.set(t, e.withResumeToken(ii.EMPTY_BYTE_STRING, e.snapshotVersion)), Ll(r, t), e = new Su(e.target, t, 1, e.sequenceNumber), Ol(r, e)) }), r.remoteSyncer.applyRemoteEvent(e))] : [3, 10];
                              case 9:
                                  t.sent(), t.label = 10;
                              case 10:
                                  return [3, 13];
                              case 11:
                                  return Lr("RemoteStore", "Failed to raise snapshot:", o = t.sent()), [4, ql(s, o)];
                              case 12:
                                  return t.sent(), [3, 13];
                              case 13:
                                  return [2] } var r, i, e }) }) }

              function ql(n, r, i) { return y(this, void 0, void 0, function() { var e = this; return g(this, function(t) { switch (t.label) {
                              case 0:
                                  if (!du(r)) throw r; return n.$r.add(1), [4, kl(n)];
                              case 1:
                                  return t.sent(), n.Br.set("Offline"), i = i || function() { return ih(n.localStore) }, n.asyncQueue.enqueueRetryable(function() { return y(e, void 0, void 0, function() { return g(this, function(t) { switch (t.label) {
                                                  case 0:
                                                      return Lr("RemoteStore", "Retrying IndexedDB access"), [4, i()];
                                                  case 1:
                                                      return t.sent(), n.$r.delete(1), [4, Cl(n)];
                                                  case 2:
                                                      return t.sent(), [2] } }) }) }), [2] } }) }) }

              function Bl(e, n) { return n().catch(function(t) { return ql(e, t, n) }) }

              function jl(u) { return y(this, void 0, void 0, function() { var i, o, s, a; return g(this, function(t) { switch (t.label) {
                              case 0:
                                  o = Hl(i = u), s = 0 < i.kr.length ? i.kr[i.kr.length - 1].batchId : -1, t.label = 1;
                              case 1:
                                  if (!(Fl(i) && i.kr.length < 10)) return [3, 7];
                                  t.label = 2;
                              case 2:
                                  return t.trys.push([2, 4, , 6]), [4, (e = i.localStore, n = s, (r = e).persistence.runTransaction("Get next mutation batch", "readonly", function(t) { return void 0 === n && (n = -1), r._n.getNextMutationBatchAfterBatchId(t, n) }))];
                              case 3:
                                  return null === (a = t.sent()) ? (0 === i.kr.length && o.ir(), [3, 7]) : (s = a.batchId, function(t, e) { t.kr.push(e);
                                      t = Hl(t);
                                      t.er() && t.pr && t.Er(e.mutations) }(i, a), [3, 6]);
                              case 4:
                                  return a = t.sent(), [4, ql(i, a)];
                              case 5:
                                  return t.sent(), [3, 6];
                              case 6:
                                  return [3, 1];
                              case 7:
                                  return Kl(i) && Gl(i), [2] } var e, n, r }) }) }

              function Kl(t) { return Fl(t) && !Hl(t).tr() && 0 < t.kr.length }

              function Gl(t) { Hl(t).start() }

              function Ql(n, r) { return y(this, void 0, void 0, function() { var e; return g(this, function(t) { switch (t.label) {
                              case 0:
                                  return e = n, r ? (e.$r.delete(2), [4, Cl(e)]) : [3, 2];
                              case 1:
                                  return t.sent(), [3, 5];
                              case 2:
                                  return r ? [3, 4] : (e.$r.add(2), [4, kl(e)]);
                              case 3:
                                  t.sent(), e.Br.set("Unknown"), t.label = 4;
                              case 4:
                                  t.label = 5;
                              case 5:
                                  return [2] } }) }) }

              function zl(n) { var t, e, r, i = this; return n.Ur || (n.Ur = (t = n.datastore, e = n.asyncQueue, r = { Ii: function(n) { return y(this, void 0, void 0, function() { return g(this, function(t) { return n.Or.forEach(function(t, e) { Ol(n, t) }), [2] }) }) }.bind(null, n), Ri: function(e, n) { return y(this, void 0, void 0, function() { return g(this, function(t) { return Vl(e), Ml(e) ? (e.Br.Nr(n), Pl(e)) : e.Br.set("Unknown"), [2] }) }) }.bind(null, n), _r: Ul.bind(null, n) }, t.br(), new bl(e, t.Hi, t.credentials, t.R, r)), n.Mr.push(function(e) { return y(i, void 0, void 0, function() { return g(this, function(t) { switch (t.label) {
                                  case 0:
                                      return e ? (n.Ur.sr(), Ml(n) ? Pl(n) : n.Br.set("Unknown"), [3, 3]) : [3, 1];
                                  case 1:
                                      return [4, n.Ur.stop()];
                                  case 2:
                                      t.sent(), Vl(n), t.label = 3;
                                  case 3:
                                      return [2] } }) }) })), n.Ur }

              function Hl(n) { var t, e, r, i = this; return n.Qr || (n.Qr = (t = n.datastore, e = n.asyncQueue, r = { Ii: function(e) { return y(this, void 0, void 0, function() { return g(this, function(t) { return Hl(e).Ar(), [2] }) }) }.bind(null, n), Ri: function(e, n) { return y(this, void 0, void 0, function() { return g(this, function(t) { switch (t.label) {
                                      case 0:
                                          return n && Hl(e).pr ? [4, function(r, i) { return y(this, void 0, void 0, function() { var e, n; return g(this, function(t) { switch (t.label) {
                                                          case 0:
                                                              return As(n = i.code) && n !== Cr.ABORTED ? (e = r.kr.shift(), Hl(r).sr(), [4, Bl(r, function() { return r.remoteSyncer.rejectFailedWrite(e.batchId, i) })]) : [3, 3];
                                                          case 1:
                                                              return t.sent(), [4, jl(r)];
                                                          case 2:
                                                              t.sent(), t.label = 3;
                                                          case 3:
                                                              return [2] } }) }) }(e, n)] : [3, 2];
                                      case 1:
                                          t.sent(), t.label = 2;
                                      case 2:
                                          return Kl(e) && Gl(e), [2] } }) }) }.bind(null, n), Ir: function(o) { return y(this, void 0, void 0, function() { var e, n, r, i; return g(this, function(t) { for (e = Hl(o), n = 0, r = o.kr; n < r.length; n++) i = r[n], e.Er(i.mutations); return [2] }) }) }.bind(null, n), Tr: function(r, i, o) { return y(this, void 0, void 0, function() { var e, n; return g(this, function(t) { switch (t.label) {
                                      case 0:
                                          return e = r.kr.shift(), n = _u.from(e, i, o), [4, Bl(r, function() { return r.remoteSyncer.applySuccessfulWrite(n) })];
                                      case 1:
                                          return t.sent(), [4, jl(r)];
                                      case 2:
                                          return t.sent(), [2] } }) }) }.bind(null, n) }, t.br(), new wl(e, t.Hi, t.credentials, t.R, r)), n.Mr.push(function(e) { return y(i, void 0, void 0, function() { return g(this, function(t) { switch (t.label) {
                                  case 0:
                                      return e ? (n.Qr.sr(), [4, jl(n)]) : [3, 2];
                                  case 1:
                                      return t.sent(), [3, 4];
                                  case 2:
                                      return [4, n.Qr.stop()];
                                  case 3:
                                      t.sent(), 0 < n.kr.length && (Lr("RemoteStore", "Stopping write stream with " + n.kr.length + " pending writes"), n.kr = []), t.label = 4;
                                  case 4:
                                      return [2] } }) }) })), n.Qr } var Wl = (Yl.createAndSchedule = function(t, e, n, r, i) { i = new Yl(t, e, Date.now() + n, r, i); return i.start(n), i }, Yl.prototype.start = function(t) { var e = this;
                  this.timerHandle = setTimeout(function() { return e.handleDelayElapsed() }, t) }, Yl.prototype.skipDelay = function() { return this.handleDelayElapsed() }, Yl.prototype.cancel = function(t) { null !== this.timerHandle && (this.clearTimeout(), this.deferred.reject(new kr(Cr.CANCELLED, "Operation cancelled" + (t ? ": " + t : "")))) }, Yl.prototype.handleDelayElapsed = function() { var e = this;
                  this.asyncQueue.enqueueAndForget(function() { return null !== e.timerHandle ? (e.clearTimeout(), e.op().then(function(t) { return e.deferred.resolve(t) })) : Promise.resolve() }) }, Yl.prototype.clearTimeout = function() { null !== this.timerHandle && (this.removalCallback(this), clearTimeout(this.timerHandle), this.timerHandle = null) }, Yl);

              function Yl(t, e, n, r, i) { this.asyncQueue = t, this.timerId = e, this.targetTimeMs = n, this.op = r, this.removalCallback = i, this.deferred = new eu, this.then = this.deferred.promise.then.bind(this.deferred.promise), this.deferred.promise.catch(function(t) {}) }

              function Xl(t, e) { if (Pr("AsyncQueue", e + ": " + t), du(t)) return new kr(Cr.UNAVAILABLE, e + ": " + t); throw t }

              function Jl() { this.queries = new Nc(Ro, ko), this.onlineState = "Unknown", this.Gr = new Set } var $l = (of.emptySet = function(t) { return new of(t.comparator) }, of.prototype.has = function(t) { return null != this.keyedMap.get(t) }, of.prototype.get = function(t) { return this.keyedMap.get(t) }, of.prototype.first = function() { return this.sortedSet.minKey() }, of.prototype.last = function() { return this.sortedSet.maxKey() }, of.prototype.isEmpty = function() { return this.sortedSet.isEmpty() }, of.prototype.indexOf = function(t) { t = this.keyedMap.get(t); return t ? this.sortedSet.indexOf(t) : -1 }, Object.defineProperty(of.prototype, "size", { get: function() { return this.sortedSet.size }, enumerable: !1, configurable: !0 }), of.prototype.forEach = function(n) { this.sortedSet.inorderTraversal(function(t, e) { return n(t), !1 }) }, of.prototype.add = function(t) { var e = this.delete(t.key); return e.copy(e.keyedMap.insert(t.key, t), e.sortedSet.insert(t, null)) }, of.prototype.delete = function(t) { var e = this.get(t); return e ? this.copy(this.keyedMap.remove(t), this.sortedSet.remove(e)) : this }, of.prototype.isEqual = function(t) { if (!(t instanceof of)) return !1; if (this.size !== t.size) return !1; for (var e = this.sortedSet.getIterator(), n = t.sortedSet.getIterator(); e.hasNext();) { var r = e.getNext().key,
                              i = n.getNext().key; if (!r.isEqual(i)) return !1 } return !0 }, of.prototype.toString = function() { var e = []; return this.forEach(function(t) { e.push(t.toString()) }), 0 === e.length ? "DocumentSet ()" : "DocumentSet (\n  " + e.join("  \n") + "\n)" }, of.prototype.copy = function(t, e) { var n = new of; return n.comparator = this.comparator, n.keyedMap = t, n.sortedSet = e, n }, of),
                  Zl = (rf.prototype.track = function(t) { var e = t.doc.key,
                          n = this.Kr.get(e);!n || 0 !== t.type && 3 === n.type ? this.Kr = this.Kr.insert(e, t) : 3 === t.type && 1 !== n.type ? this.Kr = this.Kr.insert(e, { type: n.type, doc: t.doc }) : 2 === t.type && 2 === n.type ? this.Kr = this.Kr.insert(e, { type: 2, doc: t.doc }) : 2 === t.type && 0 === n.type ? this.Kr = this.Kr.insert(e, { type: 0, doc: t.doc }) : 1 === t.type && 0 === n.type ? this.Kr = this.Kr.remove(e) : 1 === t.type && 2 === n.type ? this.Kr = this.Kr.insert(e, { type: 1, doc: n.doc }) : 0 === t.type && 1 === n.type ? this.Kr = this.Kr.insert(e, { type: 2, doc: t.doc }) : Vr() }, rf.prototype.jr = function() { var n = []; return this.Kr.inorderTraversal(function(t, e) { n.push(e) }), n }, rf),
                  tf = (nf.fromInitialDocuments = function(t, e, n, r) { var i = []; return e.forEach(function(t) { i.push({ type: 0, doc: t }) }), new nf(t, e, $l.emptySet(e), i, n, r, !0, !1) }, Object.defineProperty(nf.prototype, "hasPendingWrites", { get: function() { return !this.mutatedKeys.isEmpty() }, enumerable: !1, configurable: !0 }), nf.prototype.isEqual = function(t) { if (!(this.fromCache === t.fromCache && this.syncStateChanged === t.syncStateChanged && this.mutatedKeys.isEqual(t.mutatedKeys) && ko(this.query, t.query) && this.docs.isEqual(t.docs) && this.oldDocs.isEqual(t.oldDocs))) return !1; var e = this.docChanges,
                          n = t.docChanges; if (e.length !== n.length) return !1; for (var r = 0; r < e.length; r++)
                          if (e[r].type !== n[r].type || !e[r].doc.isEqual(n[r].doc)) return !1;
                      return !0 }, nf),
                  ef = function() { this.Wr = void 0, this.listeners = [] };

              function nf(t, e, n, r, i, o, s, a) { this.query = t, this.docs = e, this.oldDocs = n, this.docChanges = r, this.mutatedKeys = i, this.fromCache = o, this.syncStateChanged = s, this.excludesMetadataChanges = a }

              function rf() { this.Kr = new Ds(bi.comparator) }

              function of(n) { this.comparator = n ? function(t, e) { return n(t, e) || bi.comparator(t.key, e.key) } : function(t, e) { return bi.comparator(t.key, e.key) }, this.keyedMap = qs, this.sortedSet = new Ds(this.comparator) }

              function sf(s, a) { return y(this, void 0, void 0, function() { var e, n, r, i, o; return g(this, function(t) { switch (t.label) {
                              case 0:
                                  if (e = s, n = a.query, r = !1, (i = e.queries.get(n)) || (r = !0, i = new ef), !r) return [3, 4];
                                  t.label = 1;
                              case 1:
                                  return t.trys.push([1, 3, , 4]), o = i, [4, e.onListen(n)];
                              case 2:
                                  return o.Wr = t.sent(), [3, 4];
                              case 3:
                                  return o = t.sent(), o = Xl(o, "Initialization of query '" + xo(a.query) + "' failed"), [2, void a.onError(o)];
                              case 4:
                                  return e.queries.set(n, i), i.listeners.push(a), a.zr(e.onlineState), i.Wr && a.Hr(i.Wr) && uf(e), [2] } }) }) }

              function af(s, a) { return y(this, void 0, void 0, function() { var e, n, r, i, o; return g(this, function(t) { return e = s, n = a.query, r = !1, (i = e.queries.get(n)) && 0 <= (o = i.listeners.indexOf(a)) && (i.listeners.splice(o, 1), r = 0 === i.listeners.length), r ? [2, (e.queries.delete(n), e.onUnlisten(n))] : [2] }) }) }

              function uf(t) { t.Gr.forEach(function(t) { t.next() }) } var cf = (gf.prototype.Hr = function(t) { if (!this.options.includeMetadataChanges) { for (var e = [], n = 0, r = t.docChanges; n < r.length; n++) { var i = r[n];
                              3 !== i.type && e.push(i) }
                          t = new tf(t.query, t.docs, t.oldDocs, e, t.mutatedKeys, t.fromCache, t.syncStateChanged, !0) } var o = !1; return this.Yr ? this.Zr(t) && (this.Jr.next(t), o = !0) : this.eo(t, this.onlineState) && (this.no(t), o = !0), this.Xr = t, o }, gf.prototype.onError = function(t) { this.Jr.error(t) }, gf.prototype.zr = function(t) { this.onlineState = t; var e = !1; return this.Xr && !this.Yr && this.eo(this.Xr, t) && (this.no(this.Xr), e = !0), e }, gf.prototype.eo = function(t, e) { if (!t.fromCache) return !0; var n = "Offline" !== e; return !(this.options.so && n || t.docs.isEmpty() && "Offline" !== e) }, gf.prototype.Zr = function(t) { if (0 < t.docChanges.length) return !0; var e = this.Xr && this.Xr.hasPendingWrites !== t.hasPendingWrites; return !(!t.syncStateChanged && !e) && !0 === this.options.includeMetadataChanges }, gf.prototype.no = function(t) { t = tf.fromInitialDocuments(t.query, t.docs, t.mutatedKeys, t.fromCache), this.Yr = !0, this.Jr.next(t) }, gf),
                  hf = (yf.prototype.io = function() { return "metadata" in this.payload }, yf),
                  lf = (pf.prototype.qn = function(t) { return da(this.R, t) }, pf.prototype.Un = function(t) { return t.metadata.exists ? ba(this.R, t.document, !1) : Pi.newNoDocument(this.qn(t.metadata.name), this.Qn(t.metadata.readTime)) }, pf.prototype.Qn = ca, pf),
                  ff = (df.prototype.oo = function(t) { this.progress.bytesLoaded += t.byteLength; var e = this.progress.documentsLoaded; return t.payload.namedQuery ? this.queries.push(t.payload.namedQuery) : t.payload.documentMetadata ? (this.documents.push({ metadata: t.payload.documentMetadata }), t.payload.documentMetadata.exists || ++e) : t.payload.document && (this.documents[this.documents.length - 1].document = t.payload.document, ++e), e !== this.progress.documentsLoaded ? (this.progress.documentsLoaded = e, Object.assign({}, this.progress)) : null }, df.prototype.co = function(t) { for (var e = new Map, n = new lf(this.R), r = 0, i = t; r < i.length; r++) { var o = i[r]; if (o.metadata.queries)
                              for (var s = n.qn(o.metadata.name), a = 0, u = o.metadata.queries; a < u.length; a++) { var c = u[a],
                                      h = (e.get(c) || Ks()).add(s);
                                  e.set(c, h) } } return e }, df.prototype.complete = function() { return y(this, void 0, void 0, function() { var e, n, r, i; return g(this, function(t) { switch (t.label) {
                                  case 0:
                                      return [4, function(l, f, d, p) { return y(this, void 0, void 0, function() { var n, r, i, o, e, s, a, u, c, h; return g(this, function(t) { switch (t.label) {
                                                      case 0:
                                                          for (n = l, r = Ks(), i = Fs, o = Bs, e = 0, s = d; e < s.length; e++) a = s[e], u = f.qn(a.metadata.name), a.document && (r = r.add(u)), i = i.insert(u, f.Un(a)), o = o.insert(u, f.Qn(a.metadata.readTime)); return c = n.$n.newChangeBuffer({ trackRemovals: !0 }), [4, ah(n, Do(Eo(ti.fromString("__bundle__/docs/" + p))))];
                                                      case 1:
                                                          return h = t.sent(), [2, n.persistence.runTransaction("Apply bundle documents", "readwrite", function(e) { return sh(e, c, i, zr.min(), o).next(function(t) { return c.apply(e), t }).next(function(t) { return n.qe.removeMatchingKeysForTargetId(e, h.targetId).next(function() { return n.qe.addMatchingKeys(e, r, h.targetId) }).next(function() { return n.Mn.En(e, t) }).next(function() { return t }) }) })] } }) }) }(this.localStore, new lf(this.R), this.documents, this.ro.id)];
                                  case 1:
                                      e = t.sent(), n = this.co(this.documents), r = 0, i = this.queries, t.label = 2;
                                  case 2:
                                      return r < i.length ? (i = i[r], [4, function(e, i, o) { return void 0 === o && (o = Ks()), y(this, void 0, void 0, function() { var n, r; return g(this, function(t) { switch (t.label) {
                                                      case 0:
                                                          return [4, ah(e, Do(Uu(i.bundledQuery)))];
                                                      case 1:
                                                          return n = t.sent(), [2, (r = e).persistence.runTransaction("Save named query", "readwrite", function(t) { var e = ca(i.readTime); if (0 <= n.snapshotVersion.compareTo(e)) return r.Qe.saveNamedQuery(t, i);
                                                              e = n.withResumeToken(ii.EMPTY_BYTE_STRING, e); return r.Fn = r.Fn.insert(e.targetId, e), r.qe.updateTargetData(t, e).next(function() { return r.qe.removeMatchingKeysForTargetId(t, n.targetId) }).next(function() { return r.qe.addMatchingKeys(t, o, n.targetId) }).next(function() { return r.Qe.saveNamedQuery(t, i) }) })] } }) }) }(this.localStore, i, n.get(i.name))]) : [3, 5];
                                  case 3:
                                      t.sent(), t.label = 4;
                                  case 4:
                                      return r++, [3, 2];
                                  case 5:
                                      return [2, (this.progress.taskState = "Success", new zc(Object.assign({}, this.progress), e))] } }) }) }, df);

              function df(t, e, n) { this.ro = t, this.localStore = e, this.R = n, this.queries = [], this.documents = [], this.progress = mf(t) }

              function pf(t) { this.R = t }

              function yf(t, e) { this.payload = t, this.byteLength = e }

              function gf(t, e, n) { this.query = t, this.Jr = e, this.Yr = !1, this.Xr = null, this.onlineState = "Unknown", this.options = n || {} }

              function mf(t) { return { taskState: "Running", documentsLoaded: 0, bytesLoaded: 0, totalDocuments: t.totalDocuments, totalBytes: t.totalBytes } } var vf = function(t) { this.key = t },
                  bf = function(t) { this.key = t },
                  wf = (Object.defineProperty(Sf.prototype, "wo", { get: function() { return this.ao }, enumerable: !1, configurable: !0 }), Sf.prototype._o = function(t, e) { var s = this,
                          a = e ? e.mo : new Zl,
                          u = (e || this).fo,
                          c = (e || this).mutatedKeys,
                          h = u,
                          l = !1,
                          f = To(this.query) && u.size === this.query.limit ? u.last() : null,
                          d = Io(this.query) && u.size === this.query.limit ? u.first() : null; if (t.inorderTraversal(function(t, e) { var n = u.get(t),
                                  r = Oo(s.query, e) ? e : null,
                                  i = !!n && s.mutatedKeys.has(n.key),
                                  o = !!r && (r.hasLocalMutations || s.mutatedKeys.has(r.key) && r.hasCommittedMutations),
                                  e = !1;
                              n && r ? n.data.isEqual(r.data) ? i !== o && (a.track({ type: 3, doc: r }), e = !0) : s.yo(n, r) || (a.track({ type: 2, doc: r }), e = !0, (f && 0 < s.lo(r, f) || d && s.lo(r, d) < 0) && (l = !0)) : !n && r ? (a.track({ type: 0, doc: r }), e = !0) : n && !r && (a.track({ type: 1, doc: n }), e = !0, (f || d) && (l = !0)), e && (c = r ? (h = h.add(r), o ? c.add(t) : c.delete(t)) : (h = h.delete(t), c.delete(t))) }), To(this.query) || Io(this.query))
                          for (; h.size > this.query.limit;) { var n = To(this.query) ? h.last() : h.first(),
                                  h = h.delete(n.key),
                                  c = c.delete(n.key);
                              a.track({ type: 1, doc: n }) }
                      return { fo: h, mo: a, Nn: l, mutatedKeys: c } }, Sf.prototype.yo = function(t, e) { return t.hasLocalMutations && e.hasCommittedMutations && !e.hasLocalMutations }, Sf.prototype.applyChanges = function(t, e, n) { var o = this,
                          r = this.fo;
                      this.fo = t.fo, this.mutatedKeys = t.mutatedKeys; var i = t.mo.jr();
                      i.sort(function(t, e) { return r = t.type, i = e.type, n(r) - n(i) || o.lo(t.doc, e.doc);

                          function n(t) { switch (t) {
                                  case 0:
                                      return 1;
                                  case 2:
                                  case 3:
                                      return 2;
                                  case 1:
                                      return 0;
                                  default:
                                      return Vr() } } var r, i }), this.po(n); var s = e ? this.Eo() : [],
                          n = 0 === this.ho.size && this.current ? 1 : 0,
                          e = n !== this.uo; return this.uo = n, 0 !== i.length || e ? { snapshot: new tf(this.query, t.fo, r, i, t.mutatedKeys, 0 == n, e, !1), To: s } : { To: s } }, Sf.prototype.zr = function(t) { return this.current && "Offline" === t ? (this.current = !1, this.applyChanges({ fo: this.fo, mo: new Zl, mutatedKeys: this.mutatedKeys, Nn: !1 }, !1)) : { To: [] } }, Sf.prototype.Io = function(t) { return !this.ao.has(t) && !!this.fo.has(t) && !this.fo.get(t).hasLocalMutations }, Sf.prototype.po = function(t) { var e = this;
                      t && (t.addedDocuments.forEach(function(t) { return e.ao = e.ao.add(t) }), t.modifiedDocuments.forEach(function(t) {}), t.removedDocuments.forEach(function(t) { return e.ao = e.ao.delete(t) }), this.current = t.current) }, Sf.prototype.Eo = function() { var e = this; if (!this.current) return []; var n = this.ho;
                      this.ho = Ks(), this.fo.forEach(function(t) { e.Io(t.key) && (e.ho = e.ho.add(t.key)) }); var r = []; return n.forEach(function(t) { e.ho.has(t) || r.push(new bf(t)) }), this.ho.forEach(function(t) { n.has(t) || r.push(new vf(t)) }), r }, Sf.prototype.Ao = function(t) { this.ao = t.Bn, this.ho = Ks();
                      t = this._o(t.documents); return this.applyChanges(t, !0) }, Sf.prototype.Ro = function() { return tf.fromInitialDocuments(this.query, this.fo, this.mutatedKeys, 0 === this.uo) }, Sf),
                  Ef = function(t, e, n) { this.query = t, this.targetId = e, this.view = n },
                  Tf = function(t) { this.key = t, this.bo = !1 },
                  If = (Object.defineProperty(_f.prototype, "isPrimaryClient", { get: function() { return !0 === this.Oo }, enumerable: !1, configurable: !0 }), _f);

              function _f(t, e, n, r, i, o) { this.localStore = t, this.remoteStore = e, this.eventManager = n, this.sharedClientState = r, this.currentUser = i, this.maxConcurrentLimboResolutions = o, this.vo = {}, this.Po = new Nc(Ro, ko), this.Vo = new Map, this.So = new Set, this.Do = new Ds(bi.comparator), this.Co = new Map, this.No = new gh, this.xo = {}, this.Fo = new Map, this.ko = uc.Yt(), this.onlineState = "Unknown", this.Oo = void 0 }

              function Sf(t, e) { this.query = t, this.ao = e, this.uo = null, this.current = !1, this.ho = Ks(), this.mutatedKeys = Ks(), this.lo = Lo(t), this.fo = new $l(this.lo) }

              function Af(i, o, s, a) { return y(this, void 0, void 0, function() { var e, n, r; return g(this, function(t) { switch (t.label) {
                              case 0:
                                  return i.$o = function(t, e, n) { return function(r, i, o, s) { return y(this, void 0, void 0, function() { var e, n; return g(this, function(t) { switch (t.label) {
                                                      case 0:
                                                          return (e = i.view._o(o)).Nn ? [4, ch(r.localStore, i.query, !1).then(function(t) { t = t.documents; return i.view._o(t, e) })] : [3, 2];
                                                      case 1:
                                                          e = t.sent(), t.label = 2;
                                                      case 2:
                                                          return n = s && s.targetChanges.get(i.targetId), n = i.view.applyChanges(e, r.isPrimaryClient, n), [2, (Mf(r, i.targetId, n.To), n.snapshot)] } }) }) }(i, t, e, n) }, [4, ch(i.localStore, o, !0)];
                              case 1:
                                  return n = t.sent(), r = new wf(o, n.Bn), e = r._o(n.documents), n = zs.createSynthesizedTargetChangeForCurrentChange(s, a && "Offline" !== i.onlineState), n = r.applyChanges(e, i.isPrimaryClient, n), Mf(i, s, n.To), r = new Ef(o, s, r), [2, (i.Po.set(o, r), i.Vo.has(s) ? i.Vo.get(s).push(o) : i.Vo.set(s, [o]), n.snapshot)] } }) }) }

              function Nf(f, d, p) { return y(this, void 0, void 0, function() { var s, l; return g(this, function(t) { switch (t.label) {
                              case 0:
                                  l = Qf(f), t.label = 1;
                              case 1:
                                  return t.trys.push([1, 5, , 6]), [4, (i = l.localStore, a = d, c = i, h = Qr.now(), o = a.reduce(function(t, e) { return t.add(e.key) }, Ks()), c.persistence.runTransaction("Locally write mutations", "readwrite", function(s) { return c.Mn.pn(s, o).next(function(t) { u = t; for (var e = [], n = 0, r = a; n < r.length; n++) { var i = r[n],
                                                  o = function(t, e) { for (var n = null, r = 0, i = t.fieldTransforms; r < i.length; r++) { var o = i[r],
                                                              s = e.data.field(o.field),
                                                              s = Vo(o.transform, s || null);
                                                          null != s && (n = null == n ? Oi.empty() : n).set(o.field, s) } return n || null }(i, u.get(i.key));
                                              null != o && e.push(new fs(i.key, o, function s(t) { var a = []; return Xr(t.fields || {}, function(t, e) { var n = new ni([t]); if (xi(e))
                                                          if (0 === (e = s(e.mapValue).fields).length) a.push(n);
                                                          else
                                                              for (var r = 0, i = e; r < i.length; r++) { var o = i[r];
                                                                  a.push(n.child(o)) } else a.push(n) }), new ri(a) }(o.toProto().mapValue), rs.exists(!0))) } return c._n.addMutationBatch(s, h, e, a) }) }).then(function(t) { return t.applyToLocalDocumentSet(u), { batchId: t.batchId, changes: u } }))];
                              case 2:
                                  return s = t.sent(), l.sharedClientState.addPendingMutation(s.batchId), e = l, n = s.batchId, r = p, i = (i = (i = e.xo[e.currentUser.toKey()]) || new Ds(jr)).insert(n, r), e.xo[e.currentUser.toKey()] = i, [4, Vf(l, s.changes)];
                              case 3:
                                  return t.sent(), [4, jl(l.remoteStore)];
                              case 4:
                                  return t.sent(), [3, 6];
                              case 5:
                                  return l = t.sent(), l = Xl(l, "Failed to persist write"), p.reject(l), [3, 6];
                              case 6:
                                  return [2] } var e, n, r, i, a, u, c, h, o }) }) }

              function Df(r, i) { return y(this, void 0, void 0, function() { var n, e; return g(this, function(t) { switch (t.label) {
                              case 0:
                                  n = r, t.label = 1;
                              case 1:
                                  return t.trys.push([1, 4, , 6]), [4, oh(n.localStore, i)];
                              case 2:
                                  return e = t.sent(), i.targetChanges.forEach(function(t, e) { e = n.Co.get(e);
                                      e && (Ur(t.addedDocuments.size + t.modifiedDocuments.size + t.removedDocuments.size <= 1), 0 < t.addedDocuments.size ? e.bo = !0 : 0 < t.modifiedDocuments.size ? Ur(e.bo) : 0 < t.removedDocuments.size && (Ur(e.bo), e.bo = !1)) }), [4, Vf(n, e, i)];
                              case 3:
                                  return t.sent(), [3, 6];
                              case 4:
                                  return [4, yc(t.sent())];
                              case 5:
                                  return t.sent(), [3, 6];
                              case 6:
                                  return [2] } }) }) }

              function Cf(t, n, e) { var r, t = t;
                  (t.isPrimaryClient && 0 === e || !t.isPrimaryClient && 1 === e) && (r = [], t.Po.forEach(function(t, e) { e = e.view.zr(n);
                      e.snapshot && r.push(e.snapshot) }), function(t, i) { t.onlineState = i; var o = !1;
                      t.queries.forEach(function(t, e) { for (var n = 0, r = e.listeners; n < r.length; n++) r[n].zr(i) && (o = !0) }), o && uf(t) }(t.eventManager, n), r.length && t.vo._r(r), t.onlineState = n, t.isPrimaryClient && t.sharedClientState.setOnlineState(n)) }

              function kf(s, a, u) { return y(this, void 0, void 0, function() { var n, o; return g(this, function(t) { switch (t.label) {
                              case 0:
                                  n = s, t.label = 1;
                              case 1:
                                  return t.trys.push([1, 4, , 6]), [4, (e = n.localStore, r = a, (i = e).persistence.runTransaction("Reject batch", "readwrite-primary", function(e) { var n; return i._n.lookupMutationBatch(e, r).next(function(t) { return Ur(null !== t), n = t.keys(), i._n.removeMutationBatch(e, t) }).next(function() { return i._n.performConsistencyCheck(e) }).next(function() { return i.Mn.pn(e, n) }) }))];
                              case 2:
                                  return o = t.sent(), Of(n, a, u), xf(n, a), n.sharedClientState.updateMutationState(a, "rejected", u), [4, Vf(n, o)];
                              case 3:
                                  return t.sent(), [3, 6];
                              case 4:
                                  return [4, yc(t.sent())];
                              case 5:
                                  return t.sent(), [3, 6];
                              case 6:
                                  return [2] } var e, r, i }) }) }

              function Rf(o, s) { return y(this, void 0, void 0, function() { var n, r, i; return g(this, function(t) { switch (t.label) {
                              case 0:
                                  Fl((n = o).remoteStore) || Lr("SyncEngine", "The network is disabled. The task returned by 'awaitPendingWrites()' will not complete until the network is enabled."), t.label = 1;
                              case 1:
                                  return t.trys.push([1, 3, , 4]), [4, (e = n.localStore).persistence.runTransaction("Get highest unacknowledged batch id", "readonly", function(t) { return e._n.getHighestUnacknowledgedBatchId(t) })];
                              case 2:
                                  return -1 === (r = t.sent()) ? [2, void s.resolve()] : ((i = n.Fo.get(r) || []).push(s), n.Fo.set(r, i), [3, 4]);
                              case 3:
                                  return i = t.sent(), i = Xl(i, "Initialization of waitForPendingWrites() operation failed"), s.reject(i), [3, 4];
                              case 4:
                                  return [2] } var e }) }) }

              function xf(t, e) {
                  (t.Fo.get(e) || []).forEach(function(t) { t.resolve() }), t.Fo.delete(e) }

              function Of(t, e, n) { var r = t,
                      i = r.xo[r.currentUser.toKey()];
                  i && ((t = i.get(e)) && (n ? t.reject(n) : t.resolve(), i = i.remove(e)), r.xo[r.currentUser.toKey()] = i) }

              function Lf(e, t, n) { void 0 === n && (n = null), e.sharedClientState.removeLocalQueryTarget(t); for (var r = 0, i = e.Vo.get(t); r < i.length; r++) { var o = i[r];
                      e.Po.delete(o), n && e.vo.Mo(o, n) }
                  e.Vo.delete(t), e.isPrimaryClient && e.No.Zn(t).forEach(function(t) { e.No.containsKey(t) || Pf(e, t) }) }

              function Pf(t, e) { t.So.delete(e.path.canonicalString()); var n = t.Do.get(e);
                  null !== n && (xl(t.remoteStore, n), t.Do = t.Do.remove(e), t.Co.delete(n), Ff(t)) }

              function Mf(t, e, n) { for (var r, i, o, s = 0, a = n; s < a.length; s++) { var u = a[s];
                      u instanceof vf ? (t.No.addReference(u.key, e), r = t, o = void 0, i = (o = (i = u).key).path.canonicalString(), r.Do.get(o) || r.So.has(i) || (Lr("SyncEngine", "New document in limbo: " + o), r.So.add(i), Ff(r))) : u instanceof bf ? (Lr("SyncEngine", "Document no longer in limbo: " + u.key), t.No.removeReference(u.key, e), t.No.containsKey(u.key) || Pf(t, u.key)) : Vr() } }

              function Ff(t) { for (; 0 < t.So.size && t.Do.size < t.maxConcurrentLimboResolutions;) { var e = t.So.values().next().value;
                      t.So.delete(e); var n = new bi(ti.fromString(e)),
                          e = t.ko.next();
                      t.Co.set(e, new Tf(n)), t.Do = t.Do.insert(n, e), Rl(t.remoteStore, new Su(Do(Eo(n.path)), e, 2, Ar.o)) } }

              function Vf(e, s, a) { return y(this, void 0, void 0, function() { var n, r, i, o; return g(this, function(t) { switch (t.label) {
                              case 0:
                                  return r = [], i = [], o = [], (n = e).Po.isEmpty() ? [3, 3] : (n.Po.forEach(function(t, e) { o.push(n.$o(e, s, a).then(function(t) { t && (n.isPrimaryClient && n.sharedClientState.updateQueryState(e.targetId, t.fromCache ? "not-current" : "current"), r.push(t), t = Wc.Pn(e.targetId, t), i.push(t)) })) }), [4, Promise.all(o)]);
                              case 1:
                                  return t.sent(), n.vo._r(r), [4, function(u, c) { return y(this, void 0, void 0, function() { var r, e, n, i, o, s, a; return g(this, function(t) { switch (t.label) {
                                                  case 0:
                                                      r = u, t.label = 1;
                                                  case 1:
                                                      return t.trys.push([1, 3, , 4]), [4, r.persistence.runTransaction("notifyLocalViewChanges", "readwrite", function(n) { return nu.forEach(c, function(e) { return nu.forEach(e.bn, function(t) { return r.persistence.referenceDelegate.addReference(n, e.targetId, t) }).next(function() { return nu.forEach(e.vn, function(t) { return r.persistence.referenceDelegate.removeReference(n, e.targetId, t) }) }) }) })];
                                                  case 2:
                                                      return t.sent(), [3, 4];
                                                  case 3:
                                                      if (!du(e = t.sent())) throw e; return Lr("LocalStore", "Failed to update sequence numbers: " + e), [3, 4];
                                                  case 4:
                                                      for (n = 0, i = c; n < i.length; n++) a = i[n], o = a.targetId, a.fromCache || (s = r.Fn.get(o), a = s.snapshotVersion, a = s.withLastLimboFreeSnapshotVersion(a), r.Fn = r.Fn.insert(o, a)); return [2] } }) }) }(n.localStore, i)];
                              case 2:
                                  t.sent(), t.label = 3;
                              case 3:
                                  return [2] } }) }) }

              function Uf(i, o) { return y(this, void 0, void 0, function() { var n, r; return g(this, function(t) { switch (t.label) {
                              case 0:
                                  return (n = i).currentUser.isEqual(o) ? [3, 3] : (Lr("SyncEngine", "User change. New user:", o.toKey()), [4, nh(n.localStore, o)]);
                              case 1:
                                  return r = t.sent(), n.currentUser = o, (e = n).Fo.forEach(function(t) { t.forEach(function(t) { t.reject(new kr(Cr.CANCELLED, "'waitForPendingWrites' promise is rejected due to a user change.")) }) }), e.Fo.clear(), n.sharedClientState.handleUserChange(o, r.removedBatchIds, r.addedBatchIds), [4, Vf(n, r.Ln)];
                              case 2:
                                  t.sent(), t.label = 3;
                              case 3:
                                  return [2] } var e }) }) }

              function qf(a, u, c, h) { return y(this, void 0, void 0, function() { var o, s; return g(this, function(t) { switch (t.label) {
                              case 0:
                                  return [4, (e = (o = a).localStore, n = u, i = (r = e)._n, r.persistence.runTransaction("Lookup mutation documents", "readonly", function(e) { return i.jt(e, n).next(function(t) { return t ? r.Mn.pn(e, t) : nu.resolve(null) }) }))];
                              case 1:
                                  return null === (s = t.sent()) ? [3, 6] : "pending" !== c ? [3, 3] : [4, jl(o.remoteStore)];
                              case 2:
                                  return t.sent(), [3, 4];
                              case 3:
                                  "acknowledged" === c || "rejected" === c ? (Of(o, u, h || null), xf(o, u), o.localStore._n.Gt(u)) : Vr(), t.label = 4;
                              case 4:
                                  return [4, Vf(o, s)];
                              case 5:
                                  return t.sent(), [3, 7];
                              case 6:
                                  Lr("SyncEngine", "Cannot apply mutation batch with id: " + u), t.label = 7;
                              case 7:
                                  return [2] } var e, n, r, i }) }) }

              function Bf(h, l) { return y(this, void 0, void 0, function() { var r, e, i, o, s, a, u, c; return g(this, function(t) { switch (t.label) {
                              case 0:
                                  return Gf(r = h), Qf(r), !0 !== l || !0 === r.Oo ? [3, 3] : (e = r.sharedClientState.getAllActiveQueryTargets(), [4, jf(r, e.toArray())]);
                              case 1:
                                  return i = t.sent(), r.Oo = !0, [4, Ql(r.remoteStore, !0)];
                              case 2:
                                  for (t.sent(), o = 0, s = i; o < s.length; o++) a = s[o], Rl(r.remoteStore, a); return [3, 7];
                              case 3:
                                  return !1 !== l || !1 === r.Oo ? [3, 7] : (u = [], c = Promise.resolve(), r.Vo.forEach(function(t, e) { r.sharedClientState.isLocalQueryTarget(e) ? u.push(e) : c = c.then(function() { return Lf(r, e), uh(r.localStore, e, !0) }), xl(r.remoteStore, e) }), [4, c]);
                              case 4:
                                  return t.sent(), [4, jf(r, u)];
                              case 5:
                                  return t.sent(), (n = r).Co.forEach(function(t, e) { xl(n.remoteStore, e) }), n.No.ts(), n.Co = new Map, n.Do = new Ds(bi.comparator), r.Oo = !1, [4, Ql(r.remoteStore, !1)];
                              case 6:
                                  t.sent(), t.label = 7;
                              case 7:
                                  return [2] } var n }) }) }

              function jf(d, p) { return y(this, void 0, void 0, function() { var e, n, r, i, o, s, a, u, c, h, l, f; return g(this, function(t) { switch (t.label) {
                              case 0:
                                  e = d, n = [], r = [], i = 0, o = p, t.label = 1;
                              case 1:
                                  return i < o.length ? (s = o[i], a = void 0, (u = e.Vo.get(s)) && 0 !== u.length ? [4, ah(e.localStore, Do(u[0]))] : [3, 7]) : [3, 13];
                              case 2:
                                  a = t.sent(), c = 0, h = u, t.label = 3;
                              case 3:
                                  return c < h.length ? (l = h[c], l = e.Po.get(l), [4, function(r, i) { return y(this, void 0, void 0, function() { var e, n; return g(this, function(t) { switch (t.label) {
                                                  case 0:
                                                      return [4, ch((e = r).localStore, i.query, !0)];
                                                  case 1:
                                                      return n = t.sent(), n = i.view.Ao(n), [2, (e.isPrimaryClient && Mf(e, i.targetId, n.To), n)] } }) }) }(e, l)]) : [3, 6];
                              case 4:
                                  (l = t.sent()).snapshot && r.push(l.snapshot), t.label = 5;
                              case 5:
                                  return c++, [3, 3];
                              case 6:
                                  return [3, 11];
                              case 7:
                                  return [4, hh(e.localStore, s)];
                              case 8:
                                  return f = t.sent(), [4, ah(e.localStore, f)];
                              case 9:
                                  return a = t.sent(), [4, Af(e, Kf(f), s, !1)];
                              case 10:
                                  t.sent(), t.label = 11;
                              case 11:
                                  n.push(a), t.label = 12;
                              case 12:
                                  return i++, [3, 1];
                              case 13:
                                  return [2, (e.vo._r(r), n)] } }) }) }

              function Kf(t) { return wo(t.path, t.collectionGroup, t.orderBy, t.filters, t.limit, "F", t.startAt, t.endAt) }

              function Gf(t) { return t.remoteStore.remoteSyncer.applyRemoteEvent = Df.bind(null, t), t.remoteStore.remoteSyncer.getRemoteKeysForTarget = function(t, e) { var n = t; if ((t = n.Co.get(e)) && t.bo) return Ks().add(t.key); var r = Ks(); if (!(e = n.Vo.get(e))) return r; for (var i = 0, o = e; i < o.length; i++) var s = o[i],
                          s = n.Po.get(s),
                          r = r.unionWith(s.view.wo); return r }.bind(null, t), t.remoteStore.remoteSyncer.rejectListen = function(o, s, a) { return y(this, void 0, void 0, function() { var e, n, r, i; return g(this, function(t) { switch (t.label) {
                                  case 0:
                                      return (e = o).sharedClientState.updateQueryState(s, "rejected", a), i = e.Co.get(s), (n = i && i.key) ? (r = (r = new Ds(bi.comparator)).insert(n, Pi.newNoDocument(n, zr.min())), i = Ks().add(n), i = new Qs(zr.min(), new Map, new Ps(jr), r, i), [4, Df(e, i)]) : [3, 2];
                                  case 1:
                                      return t.sent(), e.Do = e.Do.remove(n), e.Co.delete(s), Ff(e), [3, 4];
                                  case 2:
                                      return [4, uh(e.localStore, s, !1).then(function() { return Lf(e, s, a) }).catch(yc)];
                                  case 3:
                                      t.sent(), t.label = 4;
                                  case 4:
                                      return [2] } }) }) }.bind(null, t), t.vo._r = function(t, e) { for (var n = t, r = !1, i = 0, o = e; i < o.length; i++) { var s = o[i],
                              a = s.query,
                              a = n.queries.get(a); if (a) { for (var u = 0, c = a.listeners; u < c.length; u++) c[u].Hr(s) && (r = !0);
                              a.Wr = s } }
                      r && uf(n) }.bind(null, t.eventManager), t.vo.Mo = function(t, e, n) { var r = t; if (t = r.queries.get(e))
                          for (var i = 0, o = t.listeners; i < o.length; i++) o[i].onError(n);
                      r.queries.delete(e) }.bind(null, t.eventManager), t }

              function Qf(t) { return t.remoteStore.remoteSyncer.applySuccessfulWrite = function(i, o) { return y(this, void 0, void 0, function() { var e, n, r; return g(this, function(t) { switch (t.label) {
                                  case 0:
                                      e = i, n = o.batch.batchId, t.label = 1;
                                  case 1:
                                      return t.trys.push([1, 4, , 6]), [4, rh(e.localStore, o)];
                                  case 2:
                                      return r = t.sent(), Of(e, n, null), xf(e, n), e.sharedClientState.updateMutationState(n, "acknowledged"), [4, Vf(e, r)];
                                  case 3:
                                      return t.sent(), [3, 6];
                                  case 4:
                                      return [4, yc(t.sent())];
                                  case 5:
                                      return t.sent(), [3, 6];
                                  case 6:
                                      return [2] } }) }) }.bind(null, t), t.remoteStore.remoteSyncer.rejectFailedWrite = kf.bind(null, t), t }

              function zf(t, e, n) { var r = t;! function(f, d, p) { return y(this, void 0, void 0, function() { var a, u, c, h, l; return g(this, function(t) { switch (t.label) {
                                  case 0:
                                      return t.trys.push([0, 14, , 15]), [4, d.getMetadata()];
                                  case 1:
                                      return a = t.sent(), [4, (r = f.localStore, o = r, s = ca((i = a).createTime), o.persistence.runTransaction("hasNewerBundle", "readonly", function(t) { return o.Qe.getBundleMetadata(t, i.id) }).then(function(t) { return !!t && 0 <= t.createTime.compareTo(s) }))];
                                  case 2:
                                      return t.sent() ? [4, d.close()] : [3, 4];
                                  case 3:
                                      return [2, (t.sent(), void p._completeWith({ taskState: "Success", documentsLoaded: a.totalDocuments, bytesLoaded: a.totalBytes, totalDocuments: a.totalDocuments, totalBytes: a.totalBytes }))];
                                  case 4:
                                      return p._updateProgress(mf(a)), u = new ff(a, f.localStore, d.R), [4, d.Lo()];
                                  case 5:
                                      c = t.sent(), t.label = 6;
                                  case 6:
                                      return c ? [4, u.oo(c)] : [3, 10];
                                  case 7:
                                      return (h = t.sent()) && p._updateProgress(h), [4, d.Lo()];
                                  case 8:
                                      c = t.sent(), t.label = 9;
                                  case 9:
                                      return [3, 6];
                                  case 10:
                                      return [4, u.complete()];
                                  case 11:
                                      return l = t.sent(), [4, Vf(f, l.wn, void 0)];
                                  case 12:
                                      return t.sent(), [4, (r = f.localStore, e = a, (n = r).persistence.runTransaction("Save bundle", "readwrite", function(t) { return n.Qe.saveBundleMetadata(t, e) }))];
                                  case 13:
                                      return t.sent(), p._completeWith(l.progress), [3, 15];
                                  case 14:
                                      return Mr("SyncEngine", "Loading bundle failed with " + (l = t.sent())), p._failWith(l), [3, 15];
                                  case 15:
                                      return [2] } var e, n, r, i, o, s }) }) }(r, e, n).then(function() { r.sharedClientState.notifyBundleLoaded() }) } var Hf, Wf, Yf = (nd.prototype.initialize = function(e) { return y(this, void 0, void 0, function() { return g(this, function(t) { switch (t.label) {
                                  case 0:
                                      return this.R = dl(e.databaseInfo.databaseId), this.sharedClientState = this.Bo(e), this.persistence = this.qo(e), [4, this.persistence.start()];
                                  case 1:
                                      return t.sent(), this.gcScheduler = this.Uo(e), this.localStore = this.Qo(e), [2] } }) }) }, nd.prototype.Uo = function(t) { return null }, nd.prototype.Qo = function(t) { return eh(this.persistence, new Yc, t.initialUser, this.R) }, nd.prototype.qo = function(t) { return new Th(_h.bs, this.R) }, nd.prototype.Bo = function(t) { return new Hh }, nd.prototype.terminate = function() { return y(this, void 0, void 0, function() { return g(this, function(t) { switch (t.label) {
                                  case 0:
                                      return this.gcScheduler && this.gcScheduler.stop(), [4, this.sharedClientState.shutdown()];
                                  case 1:
                                      return t.sent(), [4, this.persistence.shutdown()];
                                  case 2:
                                      return t.sent(), [2] } }) }) }, nd),
                  Xf = (n(ed, Wf = Yf), ed.prototype.initialize = function(e) { return y(this, void 0, void 0, function() { return g(this, function(t) { switch (t.label) {
                                  case 0:
                                      return [4, Wf.prototype.initialize.call(this, e)];
                                  case 1:
                                      return t.sent(), [4, fh(this.localStore)];
                                  case 2:
                                      return t.sent(), [4, this.Ko.initialize(this, e)];
                                  case 3:
                                      return t.sent(), [4, Qf(this.Ko.syncEngine)];
                                  case 4:
                                      return t.sent(), [4, jl(this.Ko.remoteStore)];
                                  case 5:
                                      return t.sent(), [2] } }) }) }, ed.prototype.Qo = function(t) { return eh(this.persistence, new Yc, t.initialUser, this.R) }, ed.prototype.Uo = function(t) { var e = this.persistence.referenceDelegate.garbageCollector; return new vc(e, t.asyncQueue) }, ed.prototype.qo = function(t) { var e = Qc(t.databaseInfo.databaseId, t.databaseInfo.persistenceKey),
                          n = void 0 !== this.cacheSizeBytes ? $u.withCacheSize(this.cacheSizeBytes) : $u.DEFAULT; return new Bc(this.synchronizeTabs, e, t.clientId, n, t.asyncQueue, ll(), fl(), this.R, this.sharedClientState, !!this.forceOwnership) }, ed.prototype.Bo = function(t) { return new Hh }, ed),
                  Jf = (n(td, Hf = Xf), td.prototype.initialize = function(r) { return y(this, void 0, void 0, function() { var e, n = this; return g(this, function(t) { switch (t.label) {
                                  case 0:
                                      return [4, Hf.prototype.initialize.call(this, r)];
                                  case 1:
                                      return t.sent(), e = this.Ko.syncEngine, this.sharedClientState instanceof zh ? (this.sharedClientState.syncEngine = { ai: qf.bind(null, e), ui: function(i, o, s, a) { return y(this, void 0, void 0, function() { var e, n, r; return g(this, function(t) { switch (t.label) {
                                                          case 0:
                                                              return (e = i).Oo ? (Lr("SyncEngine", "Ignoring unexpected query state notification."), [3, 8]) : [3, 1];
                                                          case 1:
                                                              if (!e.Vo.has(o)) return [3, 8]; switch (s) {
                                                                  case "current":
                                                                  case "not-current":
                                                                      return [3, 2];
                                                                  case "rejected":
                                                                      return [3, 5] } return [3, 7];
                                                          case 2:
                                                              return [4, lh(e.localStore)];
                                                          case 3:
                                                              return n = t.sent(), r = Qs.createSynthesizedRemoteEventForCurrentChange(o, "current" === s), [4, Vf(e, n, r)];
                                                          case 4:
                                                              return t.sent(), [3, 8];
                                                          case 5:
                                                              return [4, uh(e.localStore, o, !0)];
                                                          case 6:
                                                              return t.sent(), Lf(e, o, a), [3, 8];
                                                          case 7:
                                                              Vr(), t.label = 8;
                                                          case 8:
                                                              return [2] } }) }) }.bind(null, e), hi: function(c, h, l) { return y(this, void 0, void 0, function() { var n, e, r, i, o, s, a, u; return g(this, function(t) { switch (t.label) {
                                                          case 0:
                                                              if (!(n = Gf(c)).Oo) return [3, 10];
                                                              e = 0, r = h, t.label = 1;
                                                          case 1:
                                                              return e < r.length ? (r = r[e], n.Vo.has(r) ? (Lr("SyncEngine", "Adding an already active target " + r), [3, 5]) : [4, hh(n.localStore, r)]) : [3, 6];
                                                          case 2:
                                                              return i = t.sent(), [4, ah(n.localStore, i)];
                                                          case 3:
                                                              return o = t.sent(), [4, Af(n, Kf(i), o.targetId, !1)];
                                                          case 4:
                                                              t.sent(), Rl(n.remoteStore, o), t.label = 5;
                                                          case 5:
                                                              return e++, [3, 1];
                                                          case 6:
                                                              s = function(e) { return g(this, function(t) { switch (t.label) {
                                                                          case 0:
                                                                              return n.Vo.has(e) ? [4, uh(n.localStore, e, !1).then(function() { xl(n.remoteStore, e), Lf(n, e) }).catch(yc)] : [3, 2];
                                                                          case 1:
                                                                              t.sent(), t.label = 2;
                                                                          case 2:
                                                                              return [2] } }) }, a = 0, u = l, t.label = 7;
                                                          case 7:
                                                              return a < u.length ? (u = u[a], [5, s(u)]) : [3, 10];
                                                          case 8:
                                                              t.sent(), t.label = 9;
                                                          case 9:
                                                              return a++, [3, 7];
                                                          case 10:
                                                              return [2] } }) }) }.bind(null, e), fn: function(t) { return t.localStore.persistence.fn() }.bind(null, e), ci: function(n) { return y(this, void 0, void 0, function() { var e; return g(this, function(t) { return [2, lh((e = n).localStore).then(function(t) { return Vf(e, t) })] }) }) }.bind(null, e) }, [4, this.sharedClientState.start()]) : [3, 3];
                                  case 2:
                                      t.sent(), t.label = 3;
                                  case 3:
                                      return [4, this.persistence.He(function(e) { return y(n, void 0, void 0, function() { return g(this, function(t) { switch (t.label) {
                                                      case 0:
                                                          return [4, Bf(this.Ko.syncEngine, e)];
                                                      case 1:
                                                          return t.sent(), this.gcScheduler && (e && !this.gcScheduler.started ? this.gcScheduler.start(this.localStore) : e || this.gcScheduler.stop()), [2] } }) }) })];
                                  case 4:
                                      return t.sent(), [2] } }) }) }, td.prototype.Bo = function(t) { var e = ll(); if (!zh.yt(e)) throw new kr(Cr.UNIMPLEMENTED, "IndexedDB persistence is only available on platforms that support LocalStorage."); var n = Qc(t.databaseInfo.databaseId, t.databaseInfo.persistenceKey); return new zh(e, t.asyncQueue, n, t.clientId, t.initialUser) }, td),
                  $f = (Zf.prototype.initialize = function(n, r) { return y(this, void 0, void 0, function() { var e = this; return g(this, function(t) { switch (t.label) {
                                  case 0:
                                      return this.localStore ? [3, 2] : (this.localStore = n.localStore, this.sharedClientState = n.sharedClientState, this.datastore = this.createDatastore(r), this.remoteStore = this.createRemoteStore(r), this.eventManager = this.createEventManager(r), this.syncEngine = this.createSyncEngine(r, !n.synchronizeTabs), this.sharedClientState.onlineStateHandler = function(t) { return Cf(e.syncEngine, t, 1) }, this.remoteStore.remoteSyncer.handleCredentialChange = Uf.bind(null, this.syncEngine), [4, Ql(this.remoteStore, this.syncEngine.isPrimaryClient)]);
                                  case 1:
                                      t.sent(), t.label = 2;
                                  case 2:
                                      return [2] } }) }) }, Zf.prototype.createEventManager = function(t) { return new Jl }, Zf.prototype.createDatastore = function(t) { var e = dl(t.databaseInfo.databaseId),
                          n = (n = t.databaseInfo, new $h(n)); return t = t.credentials, new El(t, n, e) }, Zf.prototype.createRemoteStore = function(t) { var e = this,
                          n = this.localStore,
                          r = this.datastore,
                          i = t.asyncQueue,
                          o = function(t) { return Cf(e.syncEngine, t, 0) },
                          t = new(Yh.yt() ? Yh : Wh); return new pl(n, r, i, o, t) }, Zf.prototype.createSyncEngine = function(t, e) { return function(t, e, n, r, i, o, s) { o = new If(t, e, n, r, i, o); return s && (o.Oo = !0), o }(this.localStore, this.remoteStore, this.eventManager, this.sharedClientState, t.initialUser, t.maxConcurrentLimboResolutions, e) }, Zf.prototype.terminate = function() { return function(n) { return y(this, void 0, void 0, function() { var e; return g(this, function(t) { switch (t.label) {
                                      case 0:
                                          return e = n, Lr("RemoteStore", "RemoteStore shutting down."), e.$r.add(5), [4, kl(e)];
                                      case 1:
                                          return t.sent(), e.Lr.shutdown(), e.Br.set("Unknown"), [2] } }) }) }(this.remoteStore) }, Zf);

              function Zf() {}

              function td(t, e) { var n = this; return (n = Hf.call(this, t, e, !1) || this).Ko = t, n.cacheSizeBytes = e, n.synchronizeTabs = !0, n }

              function ed(t, e, n) { var r = this; return (r = Wf.call(this) || this).Ko = t, r.cacheSizeBytes = e, r.forceOwnership = n, r.synchronizeTabs = !1, r }

              function nd() { this.synchronizeTabs = !1 }

              function rd(n, r) { void 0 === r && (r = 10240); var i = 0; return { read: function() { return y(this, void 0, void 0, function() { var e; return g(this, function(t) { return i < n.byteLength ? (e = { value: n.slice(i, i + r), done: !1 }, [2, (i += r, e)]) : [2, { done: !0 }] }) }) }, cancel: function() { return y(this, void 0, void 0, function() { return g(this, function(t) { return [2] }) }) }, releaseLock: function() {}, closed: Promise.reject("unimplemented") } } var id = (dd.prototype.next = function(t) { this.observer.next && this.jo(this.observer.next, t) }, dd.prototype.error = function(t) { this.observer.error ? this.jo(this.observer.error, t) : console.error("Uncaught Error in snapshot listener:", t) }, dd.prototype.Wo = function() { this.muted = !0 }, dd.prototype.jo = function(t, e) { var n = this;
                      this.muted || setTimeout(function() { n.muted || t(e) }, 0) }, dd),
                  od = (fd.prototype.close = function() { return this.Go.cancel() }, fd.prototype.getMetadata = function() { return y(this, void 0, void 0, function() { return g(this, function(t) { return [2, this.metadata.promise] }) }) }, fd.prototype.Lo = function() { return y(this, void 0, void 0, function() { return g(this, function(t) { switch (t.label) {
                                  case 0:
                                      return [4, this.getMetadata()];
                                  case 1:
                                      return [2, (t.sent(), this.Ho())] } }) }) }, fd.prototype.Ho = function() { return y(this, void 0, void 0, function() { var e, n, r; return g(this, function(t) { switch (t.label) {
                                  case 0:
                                      return [4, this.Jo()];
                                  case 1:
                                      return null === (e = t.sent()) ? [2, null] : (r = this.zo.decode(e), n = Number(r), isNaN(n) && this.Yo("length string (" + r + ") is not valid number"), [4, this.Xo(n)]);
                                  case 2:
                                      return r = t.sent(), [2, new hf(JSON.parse(r), e.length + n)] } }) }) }, fd.prototype.Zo = function() { return this.buffer.findIndex(function(t) { return t === "{".charCodeAt(0) }) }, fd.prototype.Jo = function() { return y(this, void 0, void 0, function() { var e, n; return g(this, function(t) { switch (t.label) {
                                  case 0:
                                      return this.Zo() < 0 ? [4, this.tc()] : [3, 3];
                                  case 1:
                                      if (t.sent()) return [3, 3];
                                      t.label = 2;
                                  case 2:
                                      return [3, 0];
                                  case 3:
                                      return 0 === this.buffer.length ? [2, null] : ((e = this.Zo()) < 0 && this.Yo("Reached the end of bundle when a length string is expected."), n = this.buffer.slice(0, e), [2, (this.buffer = this.buffer.slice(e), n)]) } }) }) }, fd.prototype.Xo = function(n) { return y(this, void 0, void 0, function() { var e; return g(this, function(t) { switch (t.label) {
                                  case 0:
                                      return this.buffer.length < n ? [4, this.tc()] : [3, 3];
                                  case 1:
                                      t.sent() && this.Yo("Reached the end of bundle when more is expected."), t.label = 2;
                                  case 2:
                                      return [3, 0];
                                  case 3:
                                      return e = this.zo.decode(this.buffer.slice(0, n)), [2, (this.buffer = this.buffer.slice(n), e)] } }) }) }, fd.prototype.Yo = function(t) { throw this.Go.cancel(), new Error("Invalid bundle format: " + t) }, fd.prototype.tc = function() { return y(this, void 0, void 0, function() { var e, n; return g(this, function(t) { switch (t.label) {
                                  case 0:
                                      return [4, this.Go.read()];
                                  case 1:
                                      return (e = t.sent()).done || ((n = new Uint8Array(this.buffer.length + e.value.length)).set(this.buffer), n.set(e.value, this.buffer.length), this.buffer = n), [2, e.done] } }) }) }, fd),
                  sd = (ld.prototype.lookup = function(r) { return y(this, void 0, void 0, function() { var e, n = this; return g(this, function(t) { switch (t.label) {
                                  case 0:
                                      if (this.ensureCommitNotCalled(), 0 < this.mutations.length) throw new kr(Cr.INVALID_ARGUMENT, "Firestore transactions require all reads to be executed before all writes."); return [4, function(s, a) { return y(this, void 0, void 0, function() { var n, e, r, i, o; return g(this, function(t) { switch (t.label) {
                                                      case 0:
                                                          return e = ga((n = s).R) + "/documents", r = { documents: a.map(function(t) { return fa(n.R, t) }) }, [4, n.Oi("BatchGetDocuments", e, r)];
                                                      case 1:
                                                          return r = t.sent(), i = new Map, r.forEach(function(t) { var e, t = (e = n.R, "found" in (t = t) ? function(t, e) { Ur(!!e.found), e.found.name, e.found.updateTime; var n = da(t, e.found.name),
                                                                      t = ca(e.found.updateTime),
                                                                      e = new Oi({ mapValue: { fields: e.found.fields } }); return Pi.newFoundDocument(n, t, e) }(e, t) : "missing" in t ? function(t, e) { Ur(!!e.missing), Ur(!!e.readTime);
                                                                  t = da(t, e.missing), e = ca(e.readTime); return Pi.newNoDocument(t, e) }(e, t) : Vr());
                                                              i.set(t.key.toString(), t) }), o = [], [2, (a.forEach(function(t) { t = i.get(t.toString());
                                                              Ur(!!t), o.push(t) }), o)] } }) }) }(this.datastore, r)];
                                  case 1:
                                      return [2, ((e = t.sent()).forEach(function(t) { return n.recordVersion(t) }), e)] } }) }) }, ld.prototype.set = function(t, e) { this.write(e.toMutation(t, this.precondition(t))), this.writtenDocs.add(t.toString()) }, ld.prototype.update = function(t, e) { try { this.write(e.toMutation(t, this.preconditionForUpdate(t))) } catch (t) { this.lastWriteError = t }
                      this.writtenDocs.add(t.toString()) }, ld.prototype.delete = function(t) { this.write(new Ts(t, this.precondition(t))), this.writtenDocs.add(t.toString()) }, ld.prototype.commit = function() { return y(this, void 0, void 0, function() { var e, n = this; return g(this, function(t) { switch (t.label) {
                                  case 0:
                                      if (this.ensureCommitNotCalled(), this.lastWriteError) throw this.lastWriteError; return e = this.readVersions, this.mutations.forEach(function(t) { e.delete(t.key.toString()) }), e.forEach(function(t, e) { e = bi.fromPath(e);
                                          n.mutations.push(new Is(e, n.precondition(e))) }), [4, function(i, o) { return y(this, void 0, void 0, function() { var e, n, r; return g(this, function(t) { switch (t.label) {
                                                      case 0:
                                                          return n = ga((e = i).R) + "/documents", r = { writes: o.map(function(t) { return wa(e.R, t) }) }, [4, e.Ni("Commit", n, r)];
                                                      case 1:
                                                          return t.sent(), [2] } }) }) }(this.datastore, this.mutations)];
                                  case 1:
                                      return t.sent(), this.committed = !0, [2] } }) }) }, ld.prototype.recordVersion = function(t) { var e; if (t.isFoundDocument()) e = t.version;
                      else { if (!t.isNoDocument()) throw Vr();
                          e = zr.min() } var n = this.readVersions.get(t.key.toString()); if (n) { if (!e.isEqual(n)) throw new kr(Cr.ABORTED, "Document version changed between two reads.") } else this.readVersions.set(t.key.toString(), e) }, ld.prototype.precondition = function(t) { var e = this.readVersions.get(t.toString()); return !this.writtenDocs.has(t.toString()) && e ? rs.updateTime(e) : rs.none() }, ld.prototype.preconditionForUpdate = function(t) { var e = this.readVersions.get(t.toString()); if (this.writtenDocs.has(t.toString()) || !e) return rs.exists(!0); if (e.isEqual(zr.min())) throw new kr(Cr.INVALID_ARGUMENT, "Can't update a document that doesn't exist."); return rs.updateTime(e) }, ld.prototype.write = function(t) { this.ensureCommitNotCalled(), this.mutations.push(t) }, ld.prototype.ensureCommitNotCalled = function() {}, ld),
                  ad = (hd.prototype.run = function() { this.nc() }, hd.prototype.nc = function() { var t = this;
                      this.Zi.ji(function() { return y(t, void 0, void 0, function() { var e, n, r = this; return g(this, function(t) { return e = new sd(this.datastore), (n = this.sc(e)) && n.then(function(t) { r.asyncQueue.enqueueAndForget(function() { return e.commit().then(function() { r.deferred.resolve(t) }).catch(function(t) { r.ic(t) }) }) }).catch(function(t) { r.ic(t) }), [2] }) }) }) }, hd.prototype.sc = function(t) { try { var e = this.updateFunction(t); return !gi(e) && e.catch && e.then ? e : (this.deferred.reject(Error("Transaction callback must return a Promise")), null) } catch (t) { return this.deferred.reject(t), null } }, hd.prototype.ic = function(t) { var e = this;
                      0 < this.ec && this.rc(t) ? (--this.ec, this.asyncQueue.enqueueAndForget(function() { return e.nc(), Promise.resolve() })) : this.deferred.reject(t) }, hd.prototype.rc = function(t) { if ("FirebaseError" !== t.name) return !1;
                      t = t.code; return "aborted" === t || "failed-precondition" === t || !As(t) }, hd),
                  ud = (cd.prototype.getConfiguration = function() { return y(this, void 0, void 0, function() { return g(this, function(t) { return [2, { asyncQueue: this.asyncQueue, databaseInfo: this.databaseInfo, clientId: this.clientId, credentials: this.credentials, initialUser: this.user, maxConcurrentLimboResolutions: 100 }] }) }) }, cd.prototype.setCredentialChangeListener = function(t) { this.credentialListener = t }, cd.prototype.verifyNotTerminated = function() { if (this.asyncQueue.isShuttingDown) throw new kr(Cr.FAILED_PRECONDITION, "The client has already been terminated.") }, cd.prototype.terminate = function() { var t = this;
                      this.asyncQueue.enterRestrictedMode(); var n = new eu; return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(function() { return y(t, void 0, void 0, function() { var e; return g(this, function(t) { switch (t.label) {
                                      case 0:
                                          return t.trys.push([0, 5, , 6]), this.onlineComponents ? [4, this.onlineComponents.terminate()] : [3, 2];
                                      case 1:
                                          t.sent(), t.label = 2;
                                      case 2:
                                          return this.offlineComponents ? [4, this.offlineComponents.terminate()] : [3, 4];
                                      case 3:
                                          t.sent(), t.label = 4;
                                      case 4:
                                          return this.credentials.removeChangeListener(), n.resolve(), [3, 6];
                                      case 5:
                                          return e = t.sent(), e = Xl(e, "Failed to shutdown persistence"), n.reject(e), [3, 6];
                                      case 6:
                                          return [2] } }) }) }), n.promise }, cd);

              function cd(t, e, n) { var r = this;
                  this.credentials = t, this.asyncQueue = e, this.databaseInfo = n, this.user = Sh.UNAUTHENTICATED, this.clientId = qr.u(), this.credentialListener = function() { return Promise.resolve() }, this.credentials.setChangeListener(e, function(e) { return y(r, void 0, void 0, function() { return g(this, function(t) { switch (t.label) {
                                  case 0:
                                      return Lr("FirestoreClient", "Received user=", e.uid), [4, this.credentialListener(e)];
                                  case 1:
                                      return t.sent(), this.user = e, [2] } }) }) }) }

              function hd(t, e, n, r) { this.asyncQueue = t, this.datastore = e, this.updateFunction = n, this.deferred = r, this.ec = 5, this.Zi = new vl(this.asyncQueue, "transaction_retry") }

              function ld(t) { this.datastore = t, this.readVersions = new Map, this.mutations = [], this.committed = !1, this.lastWriteError = null, this.writtenDocs = new Set }

              function fd(t, e) { var n = this;
                  this.Go = t, this.R = e, this.metadata = new eu, this.buffer = new Uint8Array, this.zo = new TextDecoder("utf-8"), this.Ho().then(function(t) { t && t.io() ? n.metadata.resolve(t.payload.metadata) : n.metadata.reject(new Error("The first element of the bundle is not a metadata, it is\n             " + JSON.stringify(null == t ? void 0 : t.payload))) }, function(t) { return n.metadata.reject(t) }) }

              function dd(t) { this.observer = t, this.muted = !1 }

              function pd(i, o) { return y(this, void 0, void 0, function() { var e, n, r = this; return g(this, function(t) { switch (t.label) {
                              case 0:
                                  return i.asyncQueue.verifyOperationInProgress(), Lr("FirestoreClient", "Initializing OfflineComponentProvider"), [4, i.getConfiguration()];
                              case 1:
                                  return e = t.sent(), [4, o.initialize(e)];
                              case 2:
                                  return t.sent(), n = e.initialUser, i.setCredentialChangeListener(function(e) { return y(r, void 0, void 0, function() { return g(this, function(t) { switch (t.label) {
                                                  case 0:
                                                      return n.isEqual(e) ? [3, 2] : [4, nh(o.localStore, e)];
                                                  case 1:
                                                      t.sent(), n = e, t.label = 2;
                                                  case 2:
                                                      return [2] } }) }) }), o.persistence.setDatabaseDeletedListener(function() { return i.terminate() }), i.offlineComponents = o, [2] } }) }) }

              function yd(r, i) { return y(this, void 0, void 0, function() { var e, n; return g(this, function(t) { switch (t.label) {
                              case 0:
                                  return r.asyncQueue.verifyOperationInProgress(), [4, gd(r)];
                              case 1:
                                  return e = t.sent(), Lr("FirestoreClient", "Initializing OnlineComponentProvider"), [4, r.getConfiguration()];
                              case 2:
                                  return n = t.sent(), [4, i.initialize(e, n)];
                              case 3:
                                  return t.sent(), r.setCredentialChangeListener(function(t) { return function(r, i) { return y(this, void 0, void 0, function() { var e, n; return g(this, function(t) { switch (t.label) {
                                                      case 0:
                                                          return (e = r).asyncQueue.verifyOperationInProgress(), Lr("RemoteStore", "RemoteStore received new credentials"), n = Fl(e), e.$r.add(3), [4, kl(e)];
                                                      case 1:
                                                          return t.sent(), n && e.Br.set("Unknown"), [4, e.remoteSyncer.handleCredentialChange(i)];
                                                      case 2:
                                                          return t.sent(), e.$r.delete(3), [4, Cl(e)];
                                                      case 3:
                                                          return t.sent(), [2] } }) }) }(i.remoteStore, t) }), r.onlineComponents = i, [2] } }) }) }

              function gd(e) { return y(this, void 0, void 0, function() { return g(this, function(t) { switch (t.label) {
                              case 0:
                                  return e.offlineComponents ? [3, 2] : (Lr("FirestoreClient", "Using default OfflineComponentProvider"), [4, pd(e, new Yf)]);
                              case 1:
                                  t.sent(), t.label = 2;
                              case 2:
                                  return [2, e.offlineComponents] } }) }) }

              function md(e) { return y(this, void 0, void 0, function() { return g(this, function(t) { switch (t.label) {
                              case 0:
                                  return e.onlineComponents ? [3, 2] : (Lr("FirestoreClient", "Using default OnlineComponentProvider"), [4, yd(e, new $f)]);
                              case 1:
                                  t.sent(), t.label = 2;
                              case 2:
                                  return [2, e.onlineComponents] } }) }) }

              function vd(t) { return gd(t).then(function(t) { return t.persistence }) }

              function bd(t) { return gd(t).then(function(t) { return t.localStore }) }

              function wd(t) { return md(t).then(function(t) { return t.remoteStore }) }

              function Ed(t) { return md(t).then(function(t) { return t.syncEngine }) }

              function Td(r) { return y(this, void 0, void 0, function() { var e, n; return g(this, function(t) { switch (t.label) {
                              case 0:
                                  return [4, md(r)];
                              case 1:
                                  return e = t.sent(), [2, ((n = e.eventManager).onListen = function(s, a) { return y(this, void 0, void 0, function() { var e, n, r, i, o; return g(this, function(t) { switch (t.label) {
                                                  case 0:
                                                      return e = Gf(s), (o = e.Po.get(a)) ? (n = o.targetId, e.sharedClientState.addLocalQueryTarget(n), r = o.view.Ro(), [3, 4]) : [3, 1];
                                                  case 1:
                                                      return [4, ah(e.localStore, Do(a))];
                                                  case 2:
                                                      return i = t.sent(), o = e.sharedClientState.addLocalQueryTarget(i.targetId), n = i.targetId, [4, Af(e, a, n, "current" === o)];
                                                  case 3:
                                                      r = t.sent(), e.isPrimaryClient && Rl(e.remoteStore, i), t.label = 4;
                                                  case 4:
                                                      return [2, r] } }) }) }.bind(null, e.syncEngine), n.onUnlisten = function(i, o) { return y(this, void 0, void 0, function() { var e, n, r; return g(this, function(t) { switch (t.label) {
                                                  case 0:
                                                      return n = (e = i).Po.get(o), 1 < (r = e.Vo.get(n.targetId)).length ? [2, (e.Vo.set(n.targetId, r.filter(function(t) { return !ko(t, o) })), void e.Po.delete(o))] : e.isPrimaryClient ? (e.sharedClientState.removeLocalQueryTarget(n.targetId), e.sharedClientState.isActiveQueryTarget(n.targetId) ? [3, 2] : [4, uh(e.localStore, n.targetId, !1).then(function() { e.sharedClientState.clearQueryState(n.targetId), xl(e.remoteStore, n.targetId), Lf(e, n.targetId) }).catch(yc)]) : [3, 3];
                                                  case 1:
                                                      t.sent(), t.label = 2;
                                                  case 2:
                                                      return [3, 5];
                                                  case 3:
                                                      return Lf(e, n.targetId), [4, uh(e.localStore, n.targetId, !0)];
                                                  case 4:
                                                      t.sent(), t.label = 5;
                                                  case 5:
                                                      return [2] } }) }) }.bind(null, e.syncEngine), n)] } }) }) }

              function Id(n, r, i) { var t = this;
                  void 0 === i && (i = {}); var o = new eu; return n.asyncQueue.enqueueAndForget(function() { return y(t, void 0, void 0, function() { var e; return g(this, function(t) { switch (t.label) {
                                  case 0:
                                      return e = function(n, r, i, o, s) { var t = new id({ next: function(t) { r.enqueueAndForget(function() { return af(n, a) }); var e = t.docs.has(i);!e && t.fromCache ? s.reject(new kr(Cr.UNAVAILABLE, "Failed to get document because the client is offline.")) : e && t.fromCache && o && "server" === o.source ? s.reject(new kr(Cr.UNAVAILABLE, 'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')) : s.resolve(t) }, error: function(t) { return s.reject(t) } }),
                                              a = new cf(Eo(i.path), t, { includeMetadataChanges: !0, so: !0 }); return sf(n, a) }, [4, Td(n)];
                                  case 1:
                                      return [2, e.apply(void 0, [t.sent(), n.asyncQueue, r, i, o])] } }) }) }), o.promise }

              function _d(n, r, i) { var t = this;
                  void 0 === i && (i = {}); var o = new eu; return n.asyncQueue.enqueueAndForget(function() { return y(t, void 0, void 0, function() { var e; return g(this, function(t) { switch (t.label) {
                                  case 0:
                                      return e = function(e, n, t, r, i) { var o = new id({ next: function(t) { n.enqueueAndForget(function() { return af(e, s) }), t.fromCache && "server" === r.source ? i.reject(new kr(Cr.UNAVAILABLE, 'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')) : i.resolve(t) }, error: function(t) { return i.reject(t) } }),
                                              s = new cf(t, o, { includeMetadataChanges: !0, so: !0 }); return sf(e, s) }, [4, Td(n)];
                                  case 1:
                                      return [2, e.apply(void 0, [t.sent(), n.asyncQueue, r, i, o])] } }) }) }), o.promise }

              function Sd(t, e) { this.user = e, this.type = "OAuth", this.authHeaders = {}, this.authHeaders.Authorization = "Bearer " + t } var Ad = function(t, e, n, r, i, o, s) { this.databaseId = t, this.appId = e, this.persistenceKey = n, this.host = r, this.ssl = i, this.forceLongPolling = o, this.autoDetectLongPolling = s },
                  Nd = (Object.defineProperty(Ud.prototype, "isDefaultDatabase", { get: function() { return "(default)" === this.database }, enumerable: !1, configurable: !0 }), Ud.prototype.isEqual = function(t) { return t instanceof Ud && t.projectId === this.projectId && t.database === this.database }, Ud),
                  Dd = new Map,
                  Cd = (Vd.prototype.getToken = function() { return Promise.resolve(null) }, Vd.prototype.invalidateToken = function() {}, Vd.prototype.setChangeListener = function(t, e) { this.changeListener = e, t.enqueueRetryable(function() { return e(Sh.UNAUTHENTICATED) }) }, Vd.prototype.removeChangeListener = function() { this.changeListener = null }, Vd),
                  kd = (Fd.prototype.getToken = function() { return Promise.resolve(this.token) }, Fd.prototype.invalidateToken = function() {}, Fd.prototype.setChangeListener = function(t, e) { var n = this;
                      this.changeListener = e, t.enqueueRetryable(function() { return e(n.token.user) }) }, Fd.prototype.removeChangeListener = function() { this.changeListener = null }, Fd),
                  Rd = (Md.prototype.getToken = function() { var e = this,
                          n = this.cc,
                          t = this.forceRefresh; return this.forceRefresh = !1, this.auth ? this.auth.getToken(t).then(function(t) { return e.cc !== n ? (Lr("FirebaseCredentialsProvider", "getToken aborted due to token change."), e.getToken()) : t ? (Ur("string" == typeof t.accessToken), new Sd(t.accessToken, e.currentUser)) : null }) : Promise.resolve(null) }, Md.prototype.invalidateToken = function() { this.forceRefresh = !0 }, Md.prototype.setChangeListener = function(t, e) { this.ac = !0, this.asyncQueue = t, this.changeListener = e }, Md.prototype.removeChangeListener = function() { this.auth && this.auth.removeAuthTokenListener(this.uc), this.changeListener = function() { return Promise.resolve() } }, Md.prototype.hc = function() { var t = this.auth && this.auth.getUid(); return Ur(null === t || "string" == typeof t), new Sh(t) }, Md.prototype.lc = function() { var t = this;
                      this.ac && (this.ac = !1, this.asyncQueue.enqueueRetryable(function() { return y(t, void 0, void 0, function() { return g(this, function(t) { switch (t.label) {
                                      case 0:
                                          return [4, this.oc.promise];
                                      case 1:
                                          return t.sent(), [4, this.changeListener(this.currentUser)];
                                      case 2:
                                          return t.sent(), this.ac = !0, [2] } }) }) })) }, Md),
                  xd = (Object.defineProperty(Pd.prototype, "authHeaders", { get: function() { var t = { "X-Goog-AuthUser": this.dc },
                              e = this.fc.auth.getAuthHeaderValueForFirstParty([]); return e && (t.Authorization = e), this.wc && (t["X-Goog-Iam-Authorization-Token"] = this.wc), t }, enumerable: !1, configurable: !0 }), Pd),
                  Od = (Ld.prototype.getToken = function() { return Promise.resolve(new xd(this.fc, this.dc, this.wc)) }, Ld.prototype.setChangeListener = function(t, e) { t.enqueueRetryable(function() { return e(Sh.FIRST_PARTY) }) }, Ld.prototype.removeChangeListener = function() {}, Ld.prototype.invalidateToken = function() {}, Ld);

              function Ld(t, e, n) { this.fc = t, this.dc = e, this.wc = n }

              function Pd(t, e, n) { this.fc = t, this.dc = e, this.wc = n, this.type = "FirstParty", this.user = Sh.FIRST_PARTY }

              function Md(e) { var n = this;
                  this.currentUser = Sh.UNAUTHENTICATED, this.oc = new eu, this.cc = 0, this.changeListener = function() { return Promise.resolve() }, this.ac = !1, this.forceRefresh = !1, this.auth = null, this.asyncQueue = null, this.uc = function() { n.cc++, n.currentUser = n.hc(), n.oc.resolve(), n.ac && n.asyncQueue.enqueueRetryable(function() { return n.changeListener(n.currentUser) }) };

                  function r(t) { Lr("FirebaseCredentialsProvider", "Auth detected"), n.auth = t, n.lc(), n.auth.addAuthTokenListener(n.uc) }
                  e.onInit(r), setTimeout(function() { var t;
                      n.auth || ((t = e.getImmediate({ optional: !0 })) ? r(t) : n.ac && (Lr("FirebaseCredentialsProvider", "Auth not yet detected"), n.asyncQueue.enqueueRetryable(function() { return n.changeListener(n.currentUser) }))) }, 0) }

              function Fd(t) { this.token = t, this.changeListener = null }

              function Vd() { this.changeListener = null }

              function Ud(t, e) { this.projectId = t, this.database = e || "(default)" }

              function qd(t, e, n) { if (!n) throw new kr(Cr.INVALID_ARGUMENT, "Function " + t + "() cannot be called with an empty " + e + ".") }

              function Bd(t, e) { if (void 0 === e) return { merge: !1 }; if (void 0 !== e.mergeFields && void 0 !== e.merge) throw new kr(Cr.INVALID_ARGUMENT, "Invalid options passed to function " + t + '(): You cannot specify both "merge" and "mergeFields".'); return e }

              function jd(t, e, n, r) { if (!0 === e && !0 === r) throw new kr(Cr.INVALID_ARGUMENT, t + " and " + n + " cannot be used together.") }

              function Kd(t) { if (!bi.isDocumentKey(t)) throw new kr(Cr.INVALID_ARGUMENT, "Invalid document reference. Document references must have an even number of segments, but " + t + " has " + t.length + ".") }

              function Gd(t) { if (bi.isDocumentKey(t)) throw new kr(Cr.INVALID_ARGUMENT, "Invalid collection reference. Collection references must have an odd number of segments, but " + t + " has " + t.length + ".") }

              function Qd(e) { if (void 0 === e) return "undefined"; if (null === e) return "null"; if ("string" == typeof e) return 20 < e.length && (e = e.substring(0, 20) + "..."), JSON.stringify(e); if ("number" == typeof e || "boolean" == typeof e) return "" + e; if ("object" != typeof e) return "function" == typeof e ? "a function" : Vr(); if (e instanceof Array) return "an array"; var t = function() { if (e.constructor) { var t = /function\s+([^\s(]+)\s*\(/.exec(e.constructor.toString()); if (t && 1 < t.length) return t[1] } return null }(); return t ? "a custom " + t + " object" : "an object" }

              function zd(t, e) { if ((t = "_delegate" in t ? t._delegate : t) instanceof e) return t; if (e.name === t.constructor.name) throw new kr(Cr.INVALID_ARGUMENT, "Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");
                  t = Qd(t); throw new kr(Cr.INVALID_ARGUMENT, "Expected type '" + e.name + "', but it was: " + t) }

              function Hd(t, e) { if (e <= 0) throw new kr(Cr.INVALID_ARGUMENT, "Function " + t + "() requires a positive number, but it was: " + e + ".") } var Wd, Yd = (ip.prototype.isEqual = function(t) { return this.host === t.host && this.ssl === t.ssl && this.credentials === t.credentials && this.cacheSizeBytes === t.cacheSizeBytes && this.experimentalForceLongPolling === t.experimentalForceLongPolling && this.experimentalAutoDetectLongPolling === t.experimentalAutoDetectLongPolling && this.ignoreUndefinedProperties === t.ignoreUndefinedProperties }, ip),
                  Xd = (Object.defineProperty(rp.prototype, "app", { get: function() { if (!this._app) throw new kr(Cr.FAILED_PRECONDITION, "Firestore was not initialized using the Firebase SDK. 'app' is not available"); return this._app }, enumerable: !1, configurable: !0 }), Object.defineProperty(rp.prototype, "_initialized", { get: function() { return this._settingsFrozen }, enumerable: !1, configurable: !0 }), Object.defineProperty(rp.prototype, "_terminated", { get: function() { return void 0 !== this._terminateTask }, enumerable: !1, configurable: !0 }), rp.prototype._setSettings = function(t) { if (this._settingsFrozen) throw new kr(Cr.FAILED_PRECONDITION, "Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");
                      this._settings = new Yd(t), void 0 !== t.credentials && (this._credentials = function(t) { if (!t) return new Cd; switch (t.type) {
                              case "gapi":
                                  var e = t.client; return Ur(!("object" != typeof e || null === e || !e.auth || !e.auth.getAuthHeaderValueForFirstParty)), new Od(e, t.sessionIndex || "0", t.iamToken || null);
                              case "provider":
                                  return t.client;
                              default:
                                  throw new kr(Cr.INVALID_ARGUMENT, "makeCredentialsProvider failed due to invalid credential type") } }(t.credentials)) }, rp.prototype._getSettings = function() { return this._settings }, rp.prototype._freezeSettings = function() { return this._settingsFrozen = !0, this._settings }, rp.prototype._delete = function() { return this._terminateTask || (this._terminateTask = this._terminate()), this._terminateTask }, rp.prototype.toJSON = function() { return { app: this._app, databaseId: this._databaseId, settings: this._settings } }, rp.prototype._terminate = function() { return (t = Dd.get(this)) && (Lr("ComponentProvider", "Removing Datastore"), Dd.delete(this), t.terminate()), Promise.resolve(); var t }, rp),
                  Jd = (Object.defineProperty(np.prototype, "_path", { get: function() { return this._key.path }, enumerable: !1, configurable: !0 }), Object.defineProperty(np.prototype, "id", { get: function() { return this._key.path.lastSegment() }, enumerable: !1, configurable: !0 }), Object.defineProperty(np.prototype, "path", { get: function() { return this._key.path.canonicalString() }, enumerable: !1, configurable: !0 }), Object.defineProperty(np.prototype, "parent", { get: function() { return new Zd(this.firestore, this.converter, this._key.path.popLast()) }, enumerable: !1, configurable: !0 }), np.prototype.withConverter = function(t) { return new np(this.firestore, t, this._key) }, np),
                  $d = (ep.prototype.withConverter = function(t) { return new ep(this.firestore, t, this._query) }, ep),
                  Zd = (n(tp, Wd = $d), Object.defineProperty(tp.prototype, "id", { get: function() { return this._query.path.lastSegment() }, enumerable: !1, configurable: !0 }), Object.defineProperty(tp.prototype, "path", { get: function() { return this._query.path.canonicalString() }, enumerable: !1, configurable: !0 }), Object.defineProperty(tp.prototype, "parent", { get: function() { var t = this._path.popLast(); return t.isEmpty() ? null : new Jd(this.firestore, null, new bi(t)) }, enumerable: !1, configurable: !0 }), tp.prototype.withConverter = function(t) { return new tp(this.firestore, t, this._path) }, tp);

              function tp(t, e, n) { var r = this; return (r = Wd.call(this, t, e, Eo(n)) || this)._path = n, r.type = "collection", r }

              function ep(t, e, n) { this.converter = e, this._query = n, this.type = "query", this.firestore = t }

              function np(t, e, n) { this.converter = e, this._key = n, this.type = "document", this.firestore = t }

              function rp(t, e) { this.type = "firestore-lite", this._persistenceKey = "(lite)", this._settings = new Yd({}), this._settingsFrozen = !1, t instanceof Nd ? (this._databaseId = t, this._credentials = new Cd) : (this._app = t, this._databaseId = function(t) { if (!Object.prototype.hasOwnProperty.apply(t.options, ["projectId"])) throw new kr(Cr.INVALID_ARGUMENT, '"projectId" not provided in firebase.initializeApp.'); return new Nd(t.options.projectId) }(t), this._credentials = new Rd(e)) }

              function ip(t) { var e; if (void 0 === t.host) { if (void 0 !== t.ssl) throw new kr(Cr.INVALID_ARGUMENT, "Can't provide ssl option if host option is not set");
                      this.host = "firestore.googleapis.com", this.ssl = !0 } else this.host = t.host, this.ssl = null === (e = t.ssl) || void 0 === e || e; if (this.credentials = t.credentials, this.ignoreUndefinedProperties = !!t.ignoreUndefinedProperties, void 0 === t.cacheSizeBytes) this.cacheSizeBytes = 41943040;
                  else { if (-1 !== t.cacheSizeBytes && t.cacheSizeBytes < 1048576) throw new kr(Cr.INVALID_ARGUMENT, "cacheSizeBytes must be at least 1048576");
                      this.cacheSizeBytes = t.cacheSizeBytes }
                  this.experimentalForceLongPolling = !!t.experimentalForceLongPolling, this.experimentalAutoDetectLongPolling = !!t.experimentalAutoDetectLongPolling, jd("experimentalForceLongPolling", t.experimentalForceLongPolling, "experimentalAutoDetectLongPolling", t.experimentalAutoDetectLongPolling) }

              function op(t, e) { for (var n, r = [], i = 2; i < arguments.length; i++) r[i - 2] = arguments[i]; if (t = v(t), qd("collection", "path", e), t instanceof Xd) return Gd(n = ti.fromString.apply(ti, s([e], r))), new Zd(t, null, n); if (!(t instanceof Jd || t instanceof Zd)) throw new kr(Cr.INVALID_ARGUMENT, "Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore"); return Gd(n = ti.fromString.apply(ti, s([t.path], r)).child(ti.fromString(e))), new Zd(t.firestore, null, n) }

              function sp(t, e) { for (var n, r = [], i = 2; i < arguments.length; i++) r[i - 2] = arguments[i]; if (t = v(t), qd("doc", "path", e = 1 === arguments.length ? qr.u() : e), t instanceof Xd) return Kd(n = ti.fromString.apply(ti, s([e], r))), new Jd(t, null, new bi(n)); if (!(t instanceof Jd || t instanceof Zd)) throw new kr(Cr.INVALID_ARGUMENT, "Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore"); return Kd(n = t._path.child(ti.fromString.apply(ti, s([e], r)))), new Jd(t.firestore, t instanceof Zd ? t.converter : null, new bi(n)) }

              function ap(t, e) { return t = v(t), e = v(e), (t instanceof Jd || t instanceof Zd) && (e instanceof Jd || e instanceof Zd) && t.firestore === e.firestore && t.path === e.path && t.converter === e.converter }

              function up(t, e) { return t = v(t), e = v(e), t instanceof $d && e instanceof $d && t.firestore === e.firestore && ko(t._query, e._query) && t.converter === e.converter } var cp = (Object.defineProperty(hp.prototype, "isShuttingDown", { get: function() { return this.yc }, enumerable: !1, configurable: !0 }), hp.prototype.enqueueAndForget = function(t) { this.enqueue(t) }, hp.prototype.enqueueAndForgetEvenWhileRestricted = function(t) { this.Rc(), this.bc(t) }, hp.prototype.enterRestrictedMode = function() { var t;
                  this.yc || (this.yc = !0, (t = fl()) && "function" == typeof t.removeEventListener && t.removeEventListener("visibilitychange", this.Ac)) }, hp.prototype.enqueue = function(t) { return this.Rc(), this.yc ? new Promise(function(t) {}) : this.bc(t) }, hp.prototype.enqueueRetryable = function(t) { var e = this;
                  this.enqueueAndForget(function() { return e.mc.push(t), e.vc() }) }, hp.prototype.vc = function() { return y(this, void 0, void 0, function() { var e, n = this; return g(this, function(t) { switch (t.label) {
                              case 0:
                                  if (0 === this.mc.length) return [3, 5];
                                  t.label = 1;
                              case 1:
                                  return t.trys.push([1, 3, , 4]), [4, this.mc[0]()];
                              case 2:
                                  return t.sent(), this.mc.shift(), this.Zi.reset(), [3, 4];
                              case 3:
                                  if (!du(e = t.sent())) throw e; return Lr("AsyncQueue", "Operation failed with retryable error: " + e), [3, 4];
                              case 4:
                                  0 < this.mc.length && this.Zi.ji(function() { return n.vc() }), t.label = 5;
                              case 5:
                                  return [2] } }) }) }, hp.prototype.bc = function(t) { var r = this,
                      e = this._c.then(function() { return r.Tc = !0, t().catch(function(t) { throw r.Ec = t, r.Tc = !1, Pr("INTERNAL UNHANDLED ERROR: ", (n = (e = t).message || "", n = e.stack ? e.stack.includes(e.message) ? e.stack : e.message + "\n" + e.stack : n)), t; var e, n }).then(function(t) { return r.Tc = !1, t }) }); return this._c = e }, hp.prototype.enqueueAfterDelay = function(t, e, n) { var r = this;
                  this.Rc(), -1 < this.Ic.indexOf(t) && (e = 0);
                  n = Wl.createAndSchedule(this, t, e, n, function(t) { return r.Pc(t) }); return this.gc.push(n), n }, hp.prototype.Rc = function() { this.Ec && Vr() }, hp.prototype.verifyOperationInProgress = function() {}, hp.prototype.Vc = function() { return y(this, void 0, void 0, function() { var e; return g(this, function(t) { switch (t.label) {
                              case 0:
                                  return [4, e = this._c];
                              case 1:
                                  t.sent(), t.label = 2;
                              case 2:
                                  if (e !== this._c) return [3, 0];
                                  t.label = 3;
                              case 3:
                                  return [2] } }) }) }, hp.prototype.Sc = function(t) { for (var e = 0, n = this.gc; e < n.length; e++)
                      if (n[e].timerId === t) return !0;
                  return !1 }, hp.prototype.Dc = function(r) { var i = this; return this.Vc().then(function() { i.gc.sort(function(t, e) { return t.targetTimeMs - e.targetTimeMs }); for (var t = 0, e = i.gc; t < e.length; t++) { var n = e[t]; if (n.skipDelay(), "all" !== r && n.timerId === r) break } return i.Vc() }) }, hp.prototype.Cc = function(t) { this.Ic.push(t) }, hp.prototype.Pc = function(t) { t = this.gc.indexOf(t);
                  this.gc.splice(t, 1) }, hp);

              function hp() { var e = this;
                  this._c = Promise.resolve(), this.mc = [], this.yc = !1, this.gc = [], this.Ec = null, this.Tc = !1, this.Ic = [], this.Zi = new vl(this, "async_queue_retry"), this.Ac = function() { var t = fl();
                      t && Lr("AsyncQueue", "Visibility state changed to " + t.visibilityState), e.Zi.Gi() }; var t = fl();
                  t && "function" == typeof t.addEventListener && t.addEventListener("visibilitychange", this.Ac) }

              function lp(i) { return function() { if ("object" == typeof i && null !== i)
                          for (var t = i, e = 0, n = ["next", "error", "complete"]; e < n.length; e++) { var r = n[e]; if (r in t && "function" == typeof t[r]) return 1 } }() } var fp, dp = (gp.prototype.onProgress = function(t, e, n) { this._progressObserver = { next: t, error: e, complete: n } }, gp.prototype.catch = function(t) { return this._taskCompletionResolver.promise.catch(t) }, gp.prototype.then = function(t, e) { return this._taskCompletionResolver.promise.then(t, e) }, gp.prototype._completeWith = function(t) { this._updateProgress(t), this._progressObserver.complete && this._progressObserver.complete(), this._taskCompletionResolver.resolve(t) }, gp.prototype._failWith = function(t) { this._lastProgress.taskState = "Error", this._progressObserver.next && this._progressObserver.next(this._lastProgress), this._progressObserver.error && this._progressObserver.error(t), this._taskCompletionResolver.reject(t) }, gp.prototype._updateProgress = function(t) { this._lastProgress = t, this._progressObserver.next && this._progressObserver.next(t) }, gp),
                  pp = (n(yp, fp = Xd), yp.prototype._terminate = function() { return this._firestoreClient || vp(this), this._firestoreClient.terminate() }, yp);

              function yp(t, e) { var n = this; return (n = fp.call(this, t, e) || this).type = "firestore", n._queue = new cp, n._persistenceKey = "name" in t ? t.name : "[DEFAULT]", n }

              function gp() { this._progressObserver = {}, this._taskCompletionResolver = new eu, this._lastProgress = { taskState: "Running", totalBytes: 0, totalDocuments: 0, bytesLoaded: 0, documentsLoaded: 0 } }

              function mp(t) { return t._firestoreClient || vp(t), t._firestoreClient.verifyNotTerminated(), t._firestoreClient }

              function vp(t) { var e, n, r, i = t._freezeSettings(),
                      i = (e = t._databaseId, n = (null === (r = t._app) || void 0 === r ? void 0 : r.options.appId) || "", r = t._persistenceKey, new Ad(e, n, r, i.host, i.ssl, i.experimentalForceLongPolling, i.experimentalAutoDetectLongPolling));
                  t._firestoreClient = new ud(t._credentials, t._queue, i) }

              function bp(r, i, o) { var t = this,
                      s = new eu; return r.asyncQueue.enqueue(function() { return y(t, void 0, void 0, function() { var n; return g(this, function(t) { switch (t.label) {
                                  case 0:
                                      return t.trys.push([0, 3, , 4]), [4, pd(r, o)];
                                  case 1:
                                      return t.sent(), [4, yd(r, i)];
                                  case 2:
                                      return t.sent(), s.resolve(), [3, 4];
                                  case 3:
                                      if (!("FirebaseError" === (e = n = t.sent()).name ? e.code === Cr.FAILED_PRECONDITION || e.code === Cr.UNIMPLEMENTED : !("undefined" != typeof DOMException && e instanceof DOMException) || 22 === e.code || 20 === e.code || 11 === e.code)) throw n; return console.warn("Error enabling offline persistence. Falling back to persistence disabled: " + n), s.reject(n), [3, 4];
                                  case 4:
                                      return [2] } var e }) }) }).then(function() { return s.promise }) }

              function wp(t) { if (t._initialized || t._terminated) throw new kr(Cr.FAILED_PRECONDITION, "Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.") } var Ep = (xp.prototype.isEqual = function(t) { return this._internalPath.isEqual(t._internalPath) }, xp),
                  Tp = (Rp.fromBase64String = function(t) { try { return new Rp(ii.fromBase64String(t)) } catch (t) { throw new kr(Cr.INVALID_ARGUMENT, "Failed to construct data from Base64 string: " + t) } }, Rp.fromUint8Array = function(t) { return new Rp(ii.fromUint8Array(t)) }, Rp.prototype.toBase64 = function() { return this._byteString.toBase64() }, Rp.prototype.toUint8Array = function() { return this._byteString.toUint8Array() }, Rp.prototype.toString = function() { return "Bytes(base64: " + this.toBase64() + ")" }, Rp.prototype.isEqual = function(t) { return this._byteString.isEqual(t._byteString) }, Rp),
                  Ip = function(t) { this._methodName = t },
                  _p = (Object.defineProperty(kp.prototype, "latitude", { get: function() { return this._lat }, enumerable: !1, configurable: !0 }), Object.defineProperty(kp.prototype, "longitude", { get: function() { return this._long }, enumerable: !1, configurable: !0 }), kp.prototype.isEqual = function(t) { return this._lat === t._lat && this._long === t._long }, kp.prototype.toJSON = function() { return { latitude: this._lat, longitude: this._long } }, kp.prototype._compareTo = function(t) { return jr(this._lat, t._lat) || jr(this._long, t._long) }, kp),
                  Sp = /^__.*__$/,
                  Ap = (Cp.prototype.toMutation = function(t, e) { return null !== this.fieldMask ? new fs(t, this.data, this.fieldMask, e, this.fieldTransforms) : new ls(t, this.data, e, this.fieldTransforms) }, Cp),
                  Np = (Dp.prototype.toMutation = function(t, e) { return new fs(t, this.data, this.fieldMask, e, this.fieldTransforms) }, Dp);

              function Dp(t, e, n) { this.data = t, this.fieldMask = e, this.fieldTransforms = n }

              function Cp(t, e, n) { this.data = t, this.fieldMask = e, this.fieldTransforms = n }

              function kp(t, e) { if (!isFinite(t) || t < -90 || 90 < t) throw new kr(Cr.INVALID_ARGUMENT, "Latitude must be a number between -90 and 90, but was: " + t); if (!isFinite(e) || e < -180 || 180 < e) throw new kr(Cr.INVALID_ARGUMENT, "Longitude must be a number between -180 and 180, but was: " + e);
                  this._lat = t, this._long = e }

              function Rp(t) { this._byteString = t }

              function xp() { for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e]; for (var n = 0; n < t.length; ++n)
                      if (0 === t[n].length) throw new kr(Cr.INVALID_ARGUMENT, "Invalid field name at argument $(i + 1). Field names must not be empty.");
                  this._internalPath = new ni(t) }

              function Op(t) { switch (t) {
                      case 0:
                      case 2:
                      case 1:
                          return 1;
                      case 3:
                      case 4:
                          return;
                      default:
                          throw Vr() } } var Lp = (Object.defineProperty(Fp.prototype, "path", { get: function() { return this.settings.path }, enumerable: !1, configurable: !0 }), Object.defineProperty(Fp.prototype, "xc", { get: function() { return this.settings.xc }, enumerable: !1, configurable: !0 }), Fp.prototype.Fc = function(t) { return new Fp(Object.assign(Object.assign({}, this.settings), t), this.databaseId, this.R, this.ignoreUndefinedProperties, this.fieldTransforms, this.fieldMask) }, Fp.prototype.kc = function(t) { var e = null === (e = this.path) || void 0 === e ? void 0 : e.child(t),
                          e = this.Fc({ path: e, Oc: !1 }); return e.$c(t), e }, Fp.prototype.Mc = function(t) { var e, t = null === (e = this.path) || void 0 === e ? void 0 : e.child(t),
                          t = this.Fc({ path: t, Oc: !1 }); return t.Nc(), t }, Fp.prototype.Lc = function(t) { return this.Fc({ path: void 0, Oc: !0 }) }, Fp.prototype.Bc = function(t) { return fy(t, this.settings.methodName, this.settings.qc || !1, this.path, this.settings.Uc) }, Fp.prototype.contains = function(e) { return void 0 !== this.fieldMask.find(function(t) { return e.isPrefixOf(t) }) || void 0 !== this.fieldTransforms.find(function(t) { return e.isPrefixOf(t.field) }) }, Fp.prototype.Nc = function() { if (this.path)
                          for (var t = 0; t < this.path.length; t++) this.$c(this.path.get(t)) }, Fp.prototype.$c = function(t) { if (0 === t.length) throw this.Bc("Document fields must not be empty"); if (Op(this.xc) && Sp.test(t)) throw this.Bc('Document fields cannot begin and end with "__"') }, Fp),
                  Pp = (Mp.prototype.Qc = function(t, e, n, r) { return void 0 === r && (r = !1), new Lp({ xc: t, methodName: e, Uc: n, path: ni.emptyPath(), Oc: !1, qc: r }, this.databaseId, this.R, this.ignoreUndefinedProperties) }, Mp);

              function Mp(t, e, n) { this.databaseId = t, this.ignoreUndefinedProperties = e, this.R = n || dl(t) }

              function Fp(t, e, n, r, i, o) { this.settings = t, this.databaseId = e, this.R = n, this.ignoreUndefinedProperties = r, void 0 === i && this.Nc(), this.fieldTransforms = i || [], this.fieldMask = o || [] }

              function Vp(t) { var e = t._freezeSettings(),
                      n = dl(t._databaseId); return new Pp(t._databaseId, !!e.ignoreUndefinedProperties, n) }

              function Up(t, e, n, r, i, o) { void 0 === o && (o = {}); var s = t.Qc(o.merge || o.mergeFields ? 2 : 0, e, n, i);
                  uy("Data must be an object, but it was:", s, r); var a, u, r = sy(r, s); if (o.merge) a = new ri(s.fieldMask), u = s.fieldTransforms;
                  else if (o.mergeFields) { for (var c = [], h = 0, l = o.mergeFields; h < l.length; h++) { var f = cy(e, l[h], n); if (!s.contains(f)) throw new kr(Cr.INVALID_ARGUMENT, "Field '" + f + "' is specified in your field mask but missing from your input data.");
                          dy(c, f) || c.push(f) }
                      a = new ri(c), u = s.fieldTransforms.filter(function(t) { return a.covers(t.field) }) } else a = null, u = s.fieldTransforms; return new Ap(new Oi(r), a, u) } var qp, Bp = (n(jp, qp = Ip), jp.prototype._toFieldTransform = function(t) { if (2 !== t.xc) throw 1 === t.xc ? t.Bc(this._methodName + "() can only appear at the top level of your update data") : t.Bc(this._methodName + "() cannot be used with set() unless you pass {merge:true}"); return t.fieldMask.push(t.path), null }, jp.prototype.isEqual = function(t) { return t instanceof jp }, jp);

              function jp() { return null !== qp && qp.apply(this, arguments) || this }

              function Kp(t, e, n) { return new Lp({ xc: 3, Uc: e.settings.Uc, methodName: t._methodName, Oc: n }, e.databaseId, e.R, e.ignoreUndefinedProperties) } var Gp, Qp, zp, Hp, Wp = (n(ey, Hp = Ip), ey.prototype._toFieldTransform = function(t) { return new ns(t.path, new Bo) }, ey.prototype.isEqual = function(t) { return t instanceof ey }, ey),
                  Yp = (n(ty, zp = Ip), ty.prototype._toFieldTransform = function(t) { var e = Kp(this, t, !0),
                          n = this.Kc.map(function(t) { return oy(t, e) }),
                          n = new jo(n); return new ns(t.path, n) }, ty.prototype.isEqual = function(t) { return this === t }, ty),
                  Xp = (n(Zp, Qp = Ip), Zp.prototype._toFieldTransform = function(t) { var e = Kp(this, t, !0),
                          n = this.Kc.map(function(t) { return oy(t, e) }),
                          n = new Ho(n); return new ns(t.path, n) }, Zp.prototype.isEqual = function(t) { return this === t }, Zp),
                  Jp = (n($p, Gp = Ip), $p.prototype._toFieldTransform = function(t) { var e = new Jo(t.R, Fo(t.R, this.jc)); return new ns(t.path, e) }, $p.prototype.isEqual = function(t) { return this === t }, $p);

              function $p(t, e) { var n = this; return (n = Gp.call(this, t) || this).jc = e, n }

              function Zp(t, e) { var n = this; return (n = Qp.call(this, t) || this).Kc = e, n }

              function ty(t, e) { var n = this; return (n = zp.call(this, t) || this).Kc = e, n }

              function ey() { return null !== Hp && Hp.apply(this, arguments) || this }

              function ny(t, r, i, e) { var o = t.Qc(1, r, i);
                  uy("Data must be an object, but it was:", o, e); var s = [],
                      a = Oi.empty();
                  Xr(e, function(t, e) { var n = ly(r, t, i);
                      e = v(e);
                      t = o.Mc(n);
                      e instanceof Bp ? s.push(n) : null != (t = oy(e, t)) && (s.push(n), a.set(n, t)) });
                  e = new ri(s); return new Np(a, e, o.fieldTransforms) }

              function ry(t, e, n, r, i, o) { var s = t.Qc(1, e, n),
                      a = [cy(e, r, n)],
                      u = [i]; if (o.length % 2 != 0) throw new kr(Cr.INVALID_ARGUMENT, "Function " + e + "() needs to be called with an even number of arguments that alternate between field names and values."); for (var c = 0; c < o.length; c += 2) a.push(cy(e, o[c])), u.push(o[c + 1]); for (var h, l, f, d = [], p = Oi.empty(), y = a.length - 1; 0 <= y; --y) dy(d, a[y]) || (h = a[y], l = v(l = u[y]), f = s.Mc(h), l instanceof Bp ? d.push(h) : null != (f = oy(l, f)) && (d.push(h), p.set(h, f)));
                  i = new ri(d); return new Np(p, i, s.fieldTransforms) }

              function iy(t, e, n, r) { return void 0 === r && (r = !1), oy(n, t.Qc(r ? 4 : 3, e)) }

              function oy(s, t) { if (ay(s = v(s))) return uy("Unsupported field value:", t, s), sy(s, t); if (s instanceof Ip) return function(t, e) { if (!Op(e.xc)) throw e.Bc(t._methodName + "() can only be used with update() and set()"); if (!e.path) throw e.Bc(t._methodName + "() is not currently supported inside arrays");
                      t = t._toFieldTransform(e);
                      t && e.fieldTransforms.push(t) }(s, t), null; if (void 0 === s && t.ignoreUndefinedProperties) return null; if (t.path && t.fieldMask.push(t.path), s instanceof Array) { if (t.settings.Oc && 4 !== t.xc) throw t.Bc("Nested arrays are not supported"); return function(t) { for (var e = [], n = 0, r = 0, i = s; r < i.length; r++) { var o = oy(i[r], t.Lc(n));
                              null == o && (o = { nullValue: "NULL_VALUE" }), e.push(o), n++ } return { arrayValue: { values: e } } }(t) } return function(t, e) { if (null === (t = v(t))) return { nullValue: "NULL_VALUE" }; if ("number" == typeof t) return Fo(e.R, t); if ("boolean" == typeof t) return { booleanValue: t }; if ("string" == typeof t) return { stringValue: t }; if (t instanceof Date) { var n = Qr.fromDate(t); return { timestampValue: aa(e.R, n) } } if (t instanceof Qr) return n = new Qr(t.seconds, 1e3 * Math.floor(t.nanoseconds / 1e3)), { timestampValue: aa(e.R, n) }; if (t instanceof _p) return { geoPointValue: { latitude: t.latitude, longitude: t.longitude } }; if (t instanceof Tp) return { bytesValue: ua(e.R, t._byteString) }; if (t instanceof Jd) { var n = e.databaseId,
                              r = t.firestore._databaseId; if (!r.isEqual(n)) throw e.Bc("Document reference is for database " + r.projectId + "/" + r.database + " but should be for database " + n.projectId + "/" + n.database); return { referenceValue: ha(t.firestore._databaseId || e.databaseId, t._key.path) } } throw e.Bc("Unsupported field value: " + Qd(t)) }(s, t) }

              function sy(t, n) { var r = {}; return Jr(t) ? n.path && 0 < n.path.length && n.fieldMask.push(n.path) : Xr(t, function(t, e) { e = oy(e, n.kc(t));
                      null != e && (r[t] = e) }), { mapValue: { fields: r } } }

              function ay(t) { return !("object" != typeof t || null === t || t instanceof Array || t instanceof Date || t instanceof Qr || t instanceof _p || t instanceof Tp || t instanceof Jd || t instanceof Ip) }

              function uy(t, e, n) { if (!ay(n) || ("object" != typeof(r = n) || null === r || Object.getPrototypeOf(r) !== Object.prototype && null !== Object.getPrototypeOf(r))) { n = Qd(n); throw "an object" === n ? e.Bc(t + " a custom object") : e.Bc(t + " " + n) } var r }

              function cy(t, e, n) { if ((e = v(e)) instanceof Ep) return e._internalPath; if ("string" == typeof e) return ly(t, e); throw fy("Field path arguments must be of type string or FieldPath.", t, !1, void 0, n) } var hy = new RegExp("[~\\*/\\[\\]]");

              function ly(e, n, r) { if (0 <= n.search(hy)) throw fy("Invalid field path (" + n + "). Paths must not contain '~', '*', '/', '[', or ']'", e, !1, void 0, r); try { return (new(Ep.bind.apply(Ep, s([void 0], n.split(".")))))._internalPath } catch (t) { throw fy("Invalid field path (" + n + "). Paths must not be empty, begin with '.', end with '.', or contain '..'", e, !1, void 0, r) } }

              function fy(t, e, n, r, i) { var o = r && !r.isEmpty(),
                      s = void 0 !== i,
                      e = "Function " + e + "() called with invalid data";
                  n && (e += " (via `toFirestore()`)");
                  n = ""; return (o || s) && (n += " (found", o && (n += " in field " + r), s && (n += " in document " + i), n += ")"), new kr(Cr.INVALID_ARGUMENT, (e += ". ") + t + n) }

              function dy(t, e) { return t.some(function(t) { return t.isEqual(e) }) } var py, yy = (Object.defineProperty(vy.prototype, "id", { get: function() { return this._key.path.lastSegment() }, enumerable: !1, configurable: !0 }), Object.defineProperty(vy.prototype, "ref", { get: function() { return new Jd(this._firestore, this._converter, this._key) }, enumerable: !1, configurable: !0 }), vy.prototype.exists = function() { return null !== this._document }, vy.prototype.data = function() { if (this._document) { if (this._converter) { var t = new gy(this._firestore, this._userDataWriter, this._key, this._document, null); return this._converter.fromFirestore(t) } return this._userDataWriter.convertValue(this._document.data.toProto()) } }, vy.prototype.get = function(t) { if (this._document) { t = this._document.data.field(by("DocumentSnapshot.get", t)); if (null !== t) return this._userDataWriter.convertValue(t) } }, vy),
                  gy = (n(my, py = yy), my.prototype.data = function() { return py.prototype.data.call(this) }, my);

              function my() { return null !== py && py.apply(this, arguments) || this }

              function vy(t, e, n, r, i) { this._firestore = t, this._userDataWriter = e, this._key = n, this._document = r, this._converter = i }

              function by(t, e) { return "string" == typeof e ? ly(t, e) : (e instanceof Ep ? e : e._delegate)._internalPath } var wy, Ey, Ty = (Cy.prototype.isEqual = function(t) { return this.hasPendingWrites === t.hasPendingWrites && this.fromCache === t.fromCache }, Cy),
                  Iy = (n(Dy, Ey = yy), Dy.prototype.exists = function() { return Ey.prototype.exists.call(this) }, Dy.prototype.data = function(t) { if (void 0 === t && (t = {}), this._document) { if (this._converter) { var e = new _y(this._firestore, this._userDataWriter, this._key, this._document, this.metadata, null); return this._converter.fromFirestore(e, t) } return this._userDataWriter.convertValue(this._document.data.toProto(), t.serverTimestamps) } }, Dy.prototype.get = function(t, e) { if (void 0 === e && (e = {}), this._document) { t = this._document.data.field(by("DocumentSnapshot.get", t)); if (null !== t) return this._userDataWriter.convertValue(t, e.serverTimestamps) } }, Dy),
                  _y = (n(Ny, wy = Iy), Ny.prototype.data = function(t) { return void 0 === t && (t = {}), wy.prototype.data.call(this, t) }, Ny),
                  Sy = (Object.defineProperty(Ay.prototype, "docs", { get: function() { var e = []; return this.forEach(function(t) { return e.push(t) }), e }, enumerable: !1, configurable: !0 }), Object.defineProperty(Ay.prototype, "size", { get: function() { return this._snapshot.docs.size }, enumerable: !1, configurable: !0 }), Object.defineProperty(Ay.prototype, "empty", { get: function() { return 0 === this.size }, enumerable: !1, configurable: !0 }), Ay.prototype.forEach = function(e, n) { var r = this;
                      this._snapshot.docs.forEach(function(t) { e.call(n, new _y(r._firestore, r._userDataWriter, t.key, t, new Ty(r._snapshot.mutatedKeys.has(t.key), r._snapshot.fromCache), r.query.converter)) }) }, Ay.prototype.docChanges = function(t) { t = !!(t = void 0 === t ? {} : t).includeMetadataChanges; if (t && this._snapshot.excludesMetadataChanges) throw new kr(Cr.INVALID_ARGUMENT, "To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot()."); return this._cachedChanges && this._cachedChangesIncludeMetadataChanges === t || (this._cachedChanges = function(i, e) { if (i._snapshot.oldDocs.isEmpty()) { var n = 0; return i._snapshot.docChanges.map(function(t) { var e = new _y(i._firestore, i._userDataWriter, t.doc.key, t.doc, new Ty(i._snapshot.mutatedKeys.has(t.doc.key), i._snapshot.fromCache), i.query.converter); return t.doc, { type: "added", doc: e, oldIndex: -1, newIndex: n++ } }) } var o = i._snapshot.oldDocs; return i._snapshot.docChanges.filter(function(t) { return e || 3 !== t.type }).map(function(t) { var e = new _y(i._firestore, i._userDataWriter, t.doc.key, t.doc, new Ty(i._snapshot.mutatedKeys.has(t.doc.key), i._snapshot.fromCache), i.query.converter),
                                  n = -1,
                                  r = -1; return 0 !== t.type && (n = o.indexOf(t.doc.key), o = o.delete(t.doc.key)), 1 !== t.type && (r = (o = o.add(t.doc)).indexOf(t.doc.key)), { type: function(t) { switch (t) {
                                          case 0:
                                              return "added";
                                          case 2:
                                          case 3:
                                              return "modified";
                                          case 1:
                                              return "removed";
                                          default:
                                              return Vr() } }(t.type), doc: e, oldIndex: n, newIndex: r } }) }(this, t), this._cachedChangesIncludeMetadataChanges = t), this._cachedChanges }, Ay);

              function Ay(t, e, n, r) { this._firestore = t, this._userDataWriter = e, this._snapshot = r, this.metadata = new Ty(r.hasPendingWrites, r.fromCache), this.query = n }

              function Ny() { return null !== wy && wy.apply(this, arguments) || this }

              function Dy(t, e, n, r, i, o) { var s = this; return (s = Ey.call(this, t, e, n, r, o) || this)._firestore = t, s._firestoreImpl = t, s.metadata = i, s }

              function Cy(t, e) { this.hasPendingWrites = t, this.fromCache = e }

              function ky(t, e) { return t instanceof Iy && e instanceof Iy ? t._firestore === e._firestore && t._key.isEqual(e._key) && (null === t._document ? null === e._document : t._document.isEqual(e._document)) && t._converter === e._converter : t instanceof Sy && e instanceof Sy && t._firestore === e._firestore && up(t.query, e.query) && t.metadata.isEqual(e.metadata) && t._snapshot.isEqual(e._snapshot) }

              function Ry(t) { if (Io(t) && 0 === t.explicitOrderBy.length) throw new kr(Cr.UNIMPLEMENTED, "limitToLast() queries require specifying at least one orderBy() clause") }
              Se = function() {};

              function xy(t) { for (var e = [], n = 1; n < arguments.length; n++) e[n - 1] = arguments[n]; for (var r = 0, i = e; r < i.length; r++) t = i[r]._apply(t); return t } var Oy, Ly, Py, My, Fy, Vy = (n(Hy, Fy = Se), Hy.prototype._apply = function(t) { var e = Vp(t.firestore),
                          e = function(t, e, n, r, i, o) { if (r.isKeyField()) { if ("array-contains" === i || "array-contains-any" === i) throw new kr(Cr.INVALID_ARGUMENT, "Invalid Query. You can't perform '" + i + "' queries on FieldPath.documentId()."); if ("in" === i || "not-in" === i) { Xy(o, i); for (var s = [], a = 0, u = o; a < u.length; a++) { var c = u[a];
                                          s.push(Yy(n, t, c)) }
                                      h = { arrayValue: { values: s } } } else h = Yy(n, t, o) } else "in" !== i && "not-in" !== i && "array-contains-any" !== i || Xy(o, i), h = iy(e, "where", o, "in" === i || "not-in" === i); var h = Ki.create(r, i, h); return function(t, e) { if (e.g()) { var n = So(t); if (null !== n && !n.isEqual(e.field)) throw new kr(Cr.INVALID_ARGUMENT, "Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '" + n.toString() + "' and '" + e.field.toString() + "'");
                                      n = _o(t);
                                      null !== n && Jy(0, e.field, n) }
                                  t = function(t, e) { for (var n = 0, r = t.filters; n < r.length; n++) { var i = r[n]; if (0 <= e.indexOf(i.op)) return i.op } return null }(t, function() { switch (e.op) {
                                          case "!=":
                                              return ["!=", "not-in"];
                                          case "array-contains":
                                              return ["array-contains", "array-contains-any", "not-in"];
                                          case "in":
                                              return ["array-contains-any", "in", "not-in"];
                                          case "array-contains-any":
                                              return ["array-contains", "array-contains-any", "in", "not-in"];
                                          case "not-in":
                                              return ["array-contains", "array-contains-any", "in", "not-in", "!="];
                                          default:
                                              return [] } }()); if (null !== t) throw t === e.op ? new kr(Cr.INVALID_ARGUMENT, "Invalid query. You cannot use more than one '" + e.op.toString() + "' filter.") : new kr(Cr.INVALID_ARGUMENT, "Invalid query. You cannot use '" + e.op.toString() + "' filters with '" + t.toString() + "' filters.") }(t, h), h }(t._query, e, t.firestore._databaseId, this.Wc, this.Gc, this.zc); return new $d(t.firestore, t.converter, (t = t._query, e = t.filters.concat([e]), new bo(t.path, t.collectionGroup, t.explicitOrderBy.slice(), e, t.limit, t.limitType, t.startAt, t.endAt))) }, Hy),
                  Uy = (n(zy, My = Se), zy.prototype._apply = function(t) { var e = function(t, e, n) { if (null !== t.startAt) throw new kr(Cr.INVALID_ARGUMENT, "Invalid query. You must not call startAt() or startAfter() before calling orderBy()."); if (null !== t.endAt) throw new kr(Cr.INVALID_ARGUMENT, "Invalid query. You must not call endAt() or endBefore() before calling orderBy()."); var r = new go(e, n); return e = r, null !== _o(n = t) || null !== (t = So(n)) && Jy(0, t, e.field), r }(t._query, this.Wc, this.Hc); return new $d(t.firestore, t.converter, (t = t._query, e = t.explicitOrderBy.concat([e]), new bo(t.path, t.collectionGroup, e, t.filters.slice(), t.limit, t.limitType, t.startAt, t.endAt))) }, zy),
                  qy = (n(Qy, Py = Se), Qy.prototype._apply = function(t) { return new $d(t.firestore, t.converter, Co(t._query, this.Jc, this.Yc)) }, Qy),
                  By = (n(Gy, Ly = Se), Gy.prototype._apply = function(t) { var e = Wy(t, this.type, this.Xc, this.Zc); return new $d(t.firestore, t.converter, (t = t._query, e = e, new bo(t.path, t.collectionGroup, t.explicitOrderBy.slice(), t.filters.slice(), t.limit, t.limitType, e, t.endAt))) }, Gy),
                  jy = (n(Ky, Oy = Se), Ky.prototype._apply = function(t) { var e = Wy(t, this.type, this.Xc, this.Zc); return new $d(t.firestore, t.converter, (t = t._query, e = e, new bo(t.path, t.collectionGroup, t.explicitOrderBy.slice(), t.filters.slice(), t.limit, t.limitType, t.startAt, e))) }, Ky);

              function Ky(t, e, n) { var r = this; return (r = Oy.call(this) || this).type = t, r.Xc = e, r.Zc = n, r }

              function Gy(t, e, n) { var r = this; return (r = Ly.call(this) || this).type = t, r.Xc = e, r.Zc = n, r }

              function Qy(t, e, n) { var r = this; return (r = Py.call(this) || this).type = t, r.Jc = e, r.Yc = n, r }

              function zy(t, e) { var n = this; return (n = My.call(this) || this).Wc = t, n.Hc = e, n.type = "orderBy", n }

              function Hy(t, e, n) { var r = this; return (r = Fy.call(this) || this).Wc = t, r.Gc = e, r.zc = n, r.type = "where", r }

              function Wy(t, c, e, n) { if (e[0] = v(e[0]), e[0] instanceof yy) return function(t, e, n, r) { if (!n) throw new kr(Cr.NOT_FOUND, "Can't use a DocumentSnapshot that doesn't exist for " + c + "()."); for (var i = [], o = 0, s = No(t); o < s.length; o++) { var a = s[o]; if (a.field.isKeyField()) i.push(Ni(e, n.key));
                          else { var u = n.data.field(a.field); if (pi(u)) throw new kr(Cr.INVALID_ARGUMENT, 'Invalid query. You are trying to start or end a query using a document for which the field "' + a.field + '" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)'); if (null === u) { a = a.field.canonicalString(); throw new kr(Cr.INVALID_ARGUMENT, "Invalid query. You are trying to start or end a query using a document for which the field '" + a + "' (used as the orderBy) does not exist.") }
                              i.push(u) } } return new co(i, r) }(t._query, t.firestore._databaseId, e[0]._document, n); var r = Vp(t.firestore); return function(t, e, n, r, i, o) { var s = t.explicitOrderBy; if (i.length > s.length) throw new kr(Cr.INVALID_ARGUMENT, "Too many arguments provided to " + r + "(). The number of arguments must be less than or equal to the number of orderBy() clauses"); for (var a = [], u = 0; u < i.length; u++) { var c = i[u]; if (s[u].field.isKeyField()) { if ("string" != typeof c) throw new kr(Cr.INVALID_ARGUMENT, "Invalid query. Expected a string for document ID in " + r + "(), but got a " + typeof c); if (!Ao(t) && -1 !== c.indexOf("/")) throw new kr(Cr.INVALID_ARGUMENT, "Invalid query. When querying a collection and ordering by FieldPath.documentId(), the value passed to " + r + "() must be a plain document ID, but '" + c + "' contains a slash."); var h = t.path.child(ti.fromString(c)); if (!bi.isDocumentKey(h)) throw new kr(Cr.INVALID_ARGUMENT, "Invalid query. When querying a collection group and ordering by FieldPath.documentId(), the value passed to " + r + "() must result in a valid document path, but '" + h + "' is not because it contains an odd number of segments.");
                              h = new bi(h);
                              a.push(Ni(e, h)) } else { c = iy(n, r, c);
                              a.push(c) } } return new co(a, o) }(t._query, t.firestore._databaseId, r, c, e, n) }

              function Yy(t, e, n) { if ("string" == typeof(n = v(n))) { if ("" === n) throw new kr(Cr.INVALID_ARGUMENT, "Invalid query. When querying with FieldPath.documentId(), you must provide a valid document ID, but it was an empty string."); if (!Ao(e) && -1 !== n.indexOf("/")) throw new kr(Cr.INVALID_ARGUMENT, "Invalid query. When querying a collection by FieldPath.documentId(), you must provide a plain document ID, but '" + n + "' contains a '/' character.");
                      e = e.path.child(ti.fromString(n)); if (!bi.isDocumentKey(e)) throw new kr(Cr.INVALID_ARGUMENT, "Invalid query. When querying a collection group by FieldPath.documentId(), the value provided must result in a valid document path, but '" + e + "' is not because it has an odd number of segments (" + e.length + ")."); return Ni(t, new bi(e)) } if (n instanceof Jd) return Ni(t, n._key); throw new kr(Cr.INVALID_ARGUMENT, "Invalid query. When querying with FieldPath.documentId(), you must provide a valid string or a DocumentReference, but it was: " + Qd(n) + ".") }

              function Xy(t, e) { if (!Array.isArray(t) || 0 === t.length) throw new kr(Cr.INVALID_ARGUMENT, "Invalid Query. A non-empty array is required for '" + e.toString() + "' filters."); if (10 < t.length) throw new kr(Cr.INVALID_ARGUMENT, "Invalid Query. '" + e.toString() + "' filters support a maximum of 10 elements in the value array.") }

              function Jy(t, e, n) { if (!n.isEqual(e)) throw new kr(Cr.INVALID_ARGUMENT, "Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '" + e.toString() + "' and so you must also use '" + e.toString() + "' as your first argument to orderBy(), but your first orderBy() is on field '" + n.toString() + "' instead.") }
              $y.prototype.convertValue = function(t, e) { switch (void 0 === e && (e = "none"), Ei(t)) {
                      case 0:
                          return null;
                      case 1:
                          return t.booleanValue;
                      case 2:
                          return fi(t.integerValue || t.doubleValue);
                      case 3:
                          return this.convertTimestamp(t.timestampValue);
                      case 4:
                          return this.convertServerTimestamp(t, e);
                      case 5:
                          return t.stringValue;
                      case 6:
                          return this.convertBytes(di(t.bytesValue));
                      case 7:
                          return this.convertReference(t.referenceValue);
                      case 8:
                          return this.convertGeoPoint(t.geoPointValue);
                      case 9:
                          return this.convertArray(t.arrayValue, e);
                      case 10:
                          return this.convertObject(t.mapValue, e);
                      default:
                          throw Vr() } }, $y.prototype.convertObject = function(t, n) { var r = this,
                      i = {}; return Xr(t.fields || {}, function(t, e) { i[t] = r.convertValue(e, n) }), i }, $y.prototype.convertGeoPoint = function(t) { return new _p(fi(t.latitude), fi(t.longitude)) }, $y.prototype.convertArray = function(t, e) { var n = this; return (t.values || []).map(function(t) { return n.convertValue(t, e) }) }, $y.prototype.convertServerTimestamp = function(t, e) { switch (e) {
                      case "previous":
                          var n = function t(e) { e = e.mapValue.fields.__previous_value__; return pi(e) ? t(e) : e }(t); return null == n ? null : this.convertValue(n, e);
                      case "estimate":
                          return this.convertTimestamp(yi(t));
                      default:
                          return null } }, $y.prototype.convertTimestamp = function(t) { t = li(t); return new Qr(t.seconds, t.nanos) }, $y.prototype.convertDocumentKey = function(t, e) { var n = ti.fromString(t);
                  Ur(Ra(n));
                  t = new Nd(n.get(1), n.get(3)), n = new bi(n.popFirst(5)); return t.isEqual(e) || Pr("Document " + n + " contains a document reference within a different database (" + t.projectId + "/" + t.database + ") which is not supported. It will be treated as a reference in the current database (" + e.projectId + "/" + e.database + ") instead."), n }, I = $y;

              function $y() {}

              function Zy(t, e, n) { return t ? n && (n.merge || n.mergeFields) ? t.toFirestore(e, n) : t.toFirestore(e) : e } var tg, eg = (n(ig, tg = I), ig.prototype.convertBytes = function(t) { return new Tp(t) }, ig.prototype.convertReference = function(t) { t = this.convertDocumentKey(t, this.firestore._databaseId); return new Jd(this.firestore, null, t) }, ig),
                  ng = (rg.prototype.set = function(t, e, n) { this._verifyNotCommitted();
                      t = og(t, this._firestore), e = Zy(t.converter, e, n), n = Up(this._dataReader, "WriteBatch.set", t._key, e, null !== t.converter, n); return this._mutations.push(n.toMutation(t._key, rs.none())), this }, rg.prototype.update = function(t, e, n) { for (var r = [], i = 3; i < arguments.length; i++) r[i - 3] = arguments[i];
                      this._verifyNotCommitted();
                      t = og(t, this._firestore), e = "string" == typeof(e = v(e)) || e instanceof Ep ? ry(this._dataReader, "WriteBatch.update", t._key, e, n, r) : ny(this._dataReader, "WriteBatch.update", t._key, e); return this._mutations.push(e.toMutation(t._key, rs.exists(!0))), this }, rg.prototype.delete = function(t) { this._verifyNotCommitted();
                      t = og(t, this._firestore); return this._mutations = this._mutations.concat(new Ts(t._key, rs.none())), this }, rg.prototype.commit = function() { return this._verifyNotCommitted(), this._committed = !0, 0 < this._mutations.length ? this._commitHandler(this._mutations) : Promise.resolve() }, rg.prototype._verifyNotCommitted = function() { if (this._committed) throw new kr(Cr.FAILED_PRECONDITION, "A write batch can no longer be used after commit() has been called.") }, rg);

              function rg(t, e) { this._firestore = t, this._commitHandler = e, this._mutations = [], this._committed = !1, this._dataReader = Vp(t) }

              function ig(t) { var e = this; return (e = tg.call(this) || this).firestore = t, e }

              function og(t, e) { if ((t = v(t)).firestore !== e) throw new kr(Cr.INVALID_ARGUMENT, "Provided document reference is from a different Firestore instance."); return t } var sg, ag = (n(ug, sg = I), ug.prototype.convertBytes = function(t) { return new Tp(t) }, ug.prototype.convertReference = function(t) { t = this.convertDocumentKey(t, this.firestore._databaseId); return new Jd(this.firestore, null, t) }, ug);

              function ug(t) { var e = this; return (e = sg.call(this) || this).firestore = t, e }

              function cg(t, e, n) { for (var r = [], i = 3; i < arguments.length; i++) r[i - 3] = arguments[i];
                  t = zd(t, Jd); var o = zd(t.firestore, pp),
                      s = Vp(o); return lg(o, [("string" == typeof(e = v(e)) || e instanceof Ep ? ry(s, "updateDoc", t._key, e, n, r) : ny(s, "updateDoc", t._key, e)).toMutation(t._key, rs.exists(!0))]) }

              function hg(e) { for (var n = [], t = 1; t < arguments.length; t++) n[t - 1] = arguments[t];
                  e = v(e); var r = { includeMetadataChanges: !1 },
                      i = 0; "object" != typeof n[i] || lp(n[i]) || (r = n[i], i++); var o, s, a, u, c, h, l = { includeMetadataChanges: r.includeMetadataChanges }; return lp(n[i]) && (o = n[i], n[i] = null === (r = o.next) || void 0 === r ? void 0 : r.bind(o), n[i + 1] = null === (r = o.error) || void 0 === r ? void 0 : r.bind(o), n[i + 2] = null === (r = o.complete) || void 0 === r ? void 0 : r.bind(o)), e instanceof Jd ? (a = zd(e.firestore, pp), u = Eo(e._key.path), h = { next: function(t) { n[i] && n[i](fg(a, e, t)) }, error: n[i + 1], complete: n[i + 2] }) : (s = zd(e, $d), a = zd(s.firestore, pp), u = s._query, c = new ag(a), h = { next: function(t) { n[i] && n[i](new Sy(a, c, s, t)) }, error: n[i + 1], complete: n[i + 2] }, Ry(e._query)),
                      function(n, t, e) { var r = this,
                              i = new id(h),
                              o = new cf(t, i, e); return n.asyncQueue.enqueueAndForget(function() { return y(r, void 0, void 0, function() { var e; return g(this, function(t) { switch (t.label) {
                                              case 0:
                                                  return e = sf, [4, Td(n)];
                                              case 1:
                                                  return [2, e.apply(void 0, [t.sent(), o])] } }) }) }),
                              function() { i.Wo(), n.asyncQueue.enqueueAndForget(function() { return y(r, void 0, void 0, function() { var e; return g(this, function(t) { switch (t.label) {
                                                  case 0:
                                                      return e = af, [4, Td(n)];
                                                  case 1:
                                                      return [2, e.apply(void 0, [t.sent(), o])] } }) }) }) } }(mp(a), u, l) }

              function lg(t, e) { return function(n, r) { var t = this,
                          i = new eu; return n.asyncQueue.enqueueAndForget(function() { return y(t, void 0, void 0, function() { var e; return g(this, function(t) { switch (t.label) {
                                      case 0:
                                          return e = Nf, [4, Ed(n)];
                                      case 1:
                                          return [2, e.apply(void 0, [t.sent(), r, i])] } }) }) }), i.promise }(mp(t), e) }

              function fg(t, e, n) { var r = n.docs.get(e._key),
                      i = new ag(t); return new Iy(t, i, e._key, r, new Ty(n.hasPendingWrites, n.fromCache), e.converter) } var dg, pg = (gg.prototype.get = function(t) { var e = this,
                      n = og(t, this._firestore),
                      r = new eg(this._firestore); return this._transaction.lookup([n._key]).then(function(t) { if (!t || 1 !== t.length) return Vr();
                      t = t[0]; if (t.isFoundDocument()) return new yy(e._firestore, r, t.key, t, n.converter); if (t.isNoDocument()) return new yy(e._firestore, r, n._key, null, n.converter); throw Vr() }) }, gg.prototype.set = function(t, e, n) { t = og(t, this._firestore), e = Zy(t.converter, e, n), n = Up(this._dataReader, "Transaction.set", t._key, e, null !== t.converter, n); return this._transaction.set(t._key, n), this }, gg.prototype.update = function(t, e, n) { for (var r = [], i = 3; i < arguments.length; i++) r[i - 3] = arguments[i];
                  t = og(t, this._firestore), e = "string" == typeof(e = v(e)) || e instanceof Ep ? ry(this._dataReader, "Transaction.update", t._key, e, n, r) : ny(this._dataReader, "Transaction.update", t._key, e); return this._transaction.update(t._key, e), this }, gg.prototype.delete = function(t) { t = og(t, this._firestore); return this._transaction.delete(t._key), this }, n(yg, dg = gg), yg.prototype.get = function(t) { var e = this,
                      n = og(t, this._firestore),
                      r = new ag(this._firestore); return dg.prototype.get.call(this, t).then(function(t) { return new Iy(e._firestore, r, n._key, t._document, new Ty(!1, !1), n.converter) }) }, yg);

              function yg(t, e) { var n = this; return (n = dg.call(this, t, e) || this)._firestore = t, n }

              function gg(t, e) { this._firestore = t, this._transaction = e, this._dataReader = Vp(t) }

              function mg() { if ("undefined" == typeof Uint8Array) throw new kr(Cr.UNIMPLEMENTED, "Uint8Arrays are not available in this environment.") }

              function vg() { if ("undefined" == typeof atob) throw new kr(Cr.UNIMPLEMENTED, "Blobs are unavailable in Firestore in this environment.") } var bg, wg = (Ng.fromBase64String = function(t) { return vg(), new Ng(Tp.fromBase64String(t)) }, Ng.fromUint8Array = function(t) { return mg(), new Ng(Tp.fromUint8Array(t)) }, Ng.prototype.toBase64 = function() { return vg(), this._delegate.toBase64() }, Ng.prototype.toUint8Array = function() { return mg(), this._delegate.toUint8Array() }, Ng.prototype.isEqual = function(t) { return this._delegate.isEqual(t._delegate) }, Ng.prototype.toString = function() { return "Blob(base64: " + this.toBase64() + ")" }, Ng),
                  Eg = (Ag.prototype.enableIndexedDbPersistence = function(t, e) { return function(t, e) { wp(t = zd(t, pp)); var n = mp(t),
                              r = t._freezeSettings(),
                              t = new $f; return bp(n, t, new Xf(t, r.cacheSizeBytes, null == e ? void 0 : e.forceOwnership)) }(t._delegate, { forceOwnership: e }) }, Ag.prototype.enableMultiTabIndexedDbPersistence = function(t) { return function(t) { wp(t = zd(t, pp)); var e = mp(t),
                              n = t._freezeSettings(),
                              t = new $f; return bp(e, t, new Jf(t, n.cacheSizeBytes)) }(t._delegate) }, Ag.prototype.clearIndexedDbPersistence = function(t) { return function(n) { var t = this; if (n._initialized && !n._terminated) throw new kr(Cr.FAILED_PRECONDITION, "Persistence can only be cleared before a Firestore instance is initialized or after it is terminated."); var r = new eu; return n._queue.enqueueAndForgetEvenWhileRestricted(function() { return y(t, void 0, void 0, function() { var e; return g(this, function(t) { switch (t.label) {
                                          case 0:
                                              return t.trys.push([0, 2, , 3]), [4, function(n) { return y(this, void 0, void 0, function() { var e; return g(this, function(t) { switch (t.label) {
                                                              case 0:
                                                                  return iu.yt() ? (e = n + "main", [4, iu.delete(e)]) : [2, Promise.resolve()];
                                                              case 1:
                                                                  return t.sent(), [2] } }) }) }(Qc(n._databaseId, n._persistenceKey))];
                                          case 1:
                                              return t.sent(), r.resolve(), [3, 3];
                                          case 2:
                                              return e = t.sent(), r.reject(e), [3, 3];
                                          case 3:
                                              return [2] } }) }) }), r.promise }(t._delegate) }, Ag),
                  Tg = (Object.defineProperty(Sg.prototype, "_databaseId", { get: function() { return this._delegate._databaseId }, enumerable: !1, configurable: !0 }), Sg.prototype.settings = function(t) { t.merge && delete(t = Object.assign(Object.assign({}, this._delegate._getSettings()), t)).merge, this._delegate._setSettings(t) }, Sg.prototype.useEmulator = function(t, e, n) { void 0 === n && (n = {}),
                          function(t, e, n, r) { void 0 === r && (r = {}); var i = (t = zd(t, Xd))._getSettings(); if ("firestore.googleapis.com" !== i.host && i.host !== e && Mr("Host has been set in both settings() and useEmulator(), emulator host will be used"), t._setSettings(Object.assign(Object.assign({}, i), { host: e + ":" + n, ssl: !1 })), r.mockUserToken) { n = function(t, e) { if (t.uid) throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.'); var n = e || "demo-project",
                                          r = t.iat || 0; if (!(e = t.sub || t.user_id)) throw new Error("mockUserToken must contain 'sub' or 'user_id' field!"); return t = o({ iss: "https://securetoken.google.com/" + n, aud: n, iat: r, exp: r + 3600, auth_time: r, sub: e, user_id: e, firebase: { sign_in_provider: "custom", identities: {} } }, t), [a.encodeString(JSON.stringify({ alg: "none", type: "JWT" }), !1), a.encodeString(JSON.stringify(t), !1), ""].join(".") }(r.mockUserToken), r = r.mockUserToken.sub || r.mockUserToken.user_id; if (!r) throw new kr(Cr.INVALID_ARGUMENT, "mockUserToken must contain 'sub' or 'user_id' field!");
                                  t._credentials = new kd(new Sd(n, new Sh(r))) } }(this._delegate, t, e, n) }, Sg.prototype.enableNetwork = function() { return function(i) { var t = this; return i.asyncQueue.enqueue(function() { return y(t, void 0, void 0, function() { var n, r; return g(this, function(t) { switch (t.label) {
                                          case 0:
                                              return [4, vd(i)];
                                          case 1:
                                              return n = t.sent(), [4, wd(i)];
                                          case 2:
                                              return r = t.sent(), [2, (n.setNetworkEnabled(!0), (e = r).$r.delete(0), Cl(e))] } var e }) }) }) }(mp(zd(this._delegate, pp))) }, Sg.prototype.disableNetwork = function() { return function(r) { var t = this; return r.asyncQueue.enqueue(function() { return y(t, void 0, void 0, function() { var e, n; return g(this, function(t) { switch (t.label) {
                                          case 0:
                                              return [4, vd(r)];
                                          case 1:
                                              return e = t.sent(), [4, wd(r)];
                                          case 2:
                                              return n = t.sent(), [2, (e.setNetworkEnabled(!1), function(n) { return y(this, void 0, void 0, function() { var e; return g(this, function(t) { switch (t.label) {
                                                              case 0:
                                                                  return (e = n).$r.add(0), [4, kl(e)];
                                                              case 1:
                                                                  return t.sent(), e.Br.set("Offline"), [2] } }) }) }(n))] } }) }) }) }(mp(zd(this._delegate, pp))) }, Sg.prototype.enablePersistence = function(t) { var e = !1,
                          n = !1; return t && jd("synchronizeTabs", e = !!t.synchronizeTabs, "experimentalForceOwningTab", n = !!t.experimentalForceOwningTab), e ? this.ta.enableMultiTabIndexedDbPersistence(this) : this.ta.enableIndexedDbPersistence(this, n) }, Sg.prototype.clearPersistence = function() { return this.ta.clearIndexedDbPersistence(this) }, Sg.prototype.terminate = function() { return this.ea && (this.ea._removeServiceInstance("firestore"), this.ea._removeServiceInstance("firestore-exp")), this._delegate._delete() }, Sg.prototype.waitForPendingWrites = function() { return function(n) { var t = this,
                              r = new eu; return n.asyncQueue.enqueueAndForget(function() { return y(t, void 0, void 0, function() { var e; return g(this, function(t) { switch (t.label) {
                                          case 0:
                                              return e = Rf, [4, Ed(n)];
                                          case 1:
                                              return [2, e.apply(void 0, [t.sent(), r])] } }) }) }), r.promise }(mp(zd(this._delegate, pp))) }, Sg.prototype.onSnapshotsInSync = function(t) { return e = this._delegate, t = t,
                          function(n, t) { var e = this,
                                  r = new id(t); return n.asyncQueue.enqueueAndForget(function() { return y(e, void 0, void 0, function() { var e; return g(this, function(t) { switch (t.label) {
                                                  case 0:
                                                      return e = function(t, e) { t.Gr.add(e), e.next() }, [4, Td(n)];
                                                  case 1:
                                                      return [2, e.apply(void 0, [t.sent(), r])] } }) }) }),
                                  function() { r.Wo(), n.asyncQueue.enqueueAndForget(function() { return y(e, void 0, void 0, function() { var e; return g(this, function(t) { switch (t.label) {
                                                      case 0:
                                                          return e = function(t, e) { t.Gr.delete(e) }, [4, Td(n)];
                                                      case 1:
                                                          return [2, e.apply(void 0, [t.sent(), r])] } }) }) }) } }(mp(zd(e, pp)), lp(t) ? t : { next: t }); var e }, Object.defineProperty(Sg.prototype, "app", { get: function() { if (!this.ea) throw new kr(Cr.FAILED_PRECONDITION, "Firestore was not initialized using the Firebase SDK. 'app' is not available"); return this.ea }, enumerable: !1, configurable: !0 }), Sg.prototype.collection = function(t) { try { return new zg(this, op(this._delegate, t)) } catch (t) { throw Mg(t, "collection()", "Firestore.collection()") } }, Sg.prototype.doc = function(t) { try { return new Lg(this, sp(this._delegate, t)) } catch (t) { throw Mg(t, "doc()", "Firestore.doc()") } }, Sg.prototype.collectionGroup = function(t) { try { return new Kg(this, function(t, e) { if (t = zd(t, Xd), qd("collectionGroup", "collection id", e), 0 <= e.indexOf("/")) throw new kr(Cr.INVALID_ARGUMENT, "Invalid collection ID '" + e + "' passed to function collectionGroup(). Collection IDs must not contain '/'."); return new $d(t, null, (e = e, new bo(ti.emptyPath(), e))) }(this._delegate, t)) } catch (t) { throw Mg(t, "collectionGroup()", "Firestore.collectionGroup()") } }, Sg.prototype.runTransaction = function(e) { var n, r = this; return function(n, r) { var t = this,
                              i = new eu; return n.asyncQueue.enqueueAndForget(function() { return y(t, void 0, void 0, function() { var e; return g(this, function(t) { switch (t.label) {
                                          case 0:
                                              return [4, md(n).then(function(t) { return t.datastore })];
                                          case 1:
                                              return e = t.sent(), new ad(n.asyncQueue, e, r, i).run(), [2] } }) }) }), i.promise }(mp(n = this._delegate), function(t) { return t = new pg(n, t), e(new Dg(r, t)) }) }, Sg.prototype.batch = function() { var e = this; return mp(this._delegate), new Cg(new ng(this._delegate, function(t) { return lg(e._delegate, t) })) }, Sg.prototype.loadBundle = function(t) { throw new kr(Cr.FAILED_PRECONDITION, '"loadBundle()" does not exist, have you imported "firebase/firestore/bundle"?') }, Sg.prototype.namedQuery = function(t) { throw new kr(Cr.FAILED_PRECONDITION, '"namedQuery()" does not exist, have you imported "firebase/firestore/bundle"?') }, Sg),
                  Ig = (n(_g, bg = I), _g.prototype.convertBytes = function(t) { return new wg(new Tp(t)) }, _g.prototype.convertReference = function(t) { t = this.convertDocumentKey(t, this.firestore._databaseId); return Lg.na(t, this.firestore, null) }, _g);

              function _g(t) { var e = this; return (e = bg.call(this) || this).firestore = t, e }

              function Sg(t, e, n) { var r = this;
                  this._delegate = e, this.ta = n, this.INTERNAL = { delete: function() { return r.terminate() } }, t instanceof Nd || (this.ea = t) }

              function Ag() {}

              function Ng(t) { this._delegate = t } var Dg = (Og.prototype.get = function(t) { var e = this,
                          n = Zg(t); return this._delegate.get(n).then(function(t) { return new Bg(e._firestore, new Iy(e._firestore._delegate, e._userDataWriter, t._key, t._document, t.metadata, n.converter)) }) }, Og.prototype.set = function(t, e, n) { t = Zg(t); return n ? (Bd("Transaction.set", n), this._delegate.set(t, e, n)) : this._delegate.set(t, e), this }, Og.prototype.update = function(t, e, n) { for (var r = [], i = 3; i < arguments.length; i++) r[i - 3] = arguments[i]; var o = Zg(t); return 2 === arguments.length ? this._delegate.update(o, e) : (t = this._delegate).update.apply(t, s([o, e, n], r)), this }, Og.prototype.delete = function(t) { t = Zg(t); return this._delegate.delete(t), this }, Og),
                  Cg = (xg.prototype.set = function(t, e, n) { t = Zg(t); return n ? (Bd("WriteBatch.set", n), this._delegate.set(t, e, n)) : this._delegate.set(t, e), this }, xg.prototype.update = function(t, e, n) { for (var r = [], i = 3; i < arguments.length; i++) r[i - 3] = arguments[i]; var o = Zg(t); return 2 === arguments.length ? this._delegate.update(o, e) : (t = this._delegate).update.apply(t, s([o, e, n], r)), this }, xg.prototype.delete = function(t) { t = Zg(t); return this._delegate.delete(t), this }, xg.prototype.commit = function() { return this._delegate.commit() }, xg),
                  kg = (Rg.prototype.fromFirestore = function(t, e) { t = new _y(this._firestore._delegate, this._userDataWriter, t._key, t._document, t.metadata, null); return this._delegate.fromFirestore(new jg(this._firestore, t), null != e ? e : {}) }, Rg.prototype.toFirestore = function(t, e) { return e ? this._delegate.toFirestore(t, e) : this._delegate.toFirestore(t) }, Rg.sa = function(t, e) { var n = Rg.ia,
                          r = n.get(t);
                      r || (r = new WeakMap, n.set(t, r));
                      n = r.get(e); return n || (n = new Rg(t, new Ig(t), e), r.set(e, n)), n }, Rg);

              function Rg(t, e, n) { this._firestore = t, this._userDataWriter = e, this._delegate = n }

              function xg(t) { this._delegate = t }

              function Og(t, e) { this._firestore = t, this._delegate = e, this._userDataWriter = new Ig(t) }
              kg.ia = new WeakMap; var Lg = (Pg.ra = function(t, e, n) { if (t.length % 2 != 0) throw new kr(Cr.INVALID_ARGUMENT, "Invalid document reference. Document references must have an even number of segments, but " + t.canonicalString() + " has " + t.length); return new Pg(e, new Jd(e._delegate, n, new bi(t))) }, Pg.na = function(t, e, n) { return new Pg(e, new Jd(e._delegate, n, t)) }, Object.defineProperty(Pg.prototype, "id", { get: function() { return this._delegate.id }, enumerable: !1, configurable: !0 }), Object.defineProperty(Pg.prototype, "parent", { get: function() { return new zg(this.firestore, this._delegate.parent) }, enumerable: !1, configurable: !0 }), Object.defineProperty(Pg.prototype, "path", { get: function() { return this._delegate.path }, enumerable: !1, configurable: !0 }), Pg.prototype.collection = function(t) { try { return new zg(this.firestore, op(this._delegate, t)) } catch (t) { throw Mg(t, "collection()", "DocumentReference.collection()") } }, Pg.prototype.isEqual = function(t) { return (t = v(t)) instanceof Jd && ap(this._delegate, t) }, Pg.prototype.set = function(t, e) { e = Bd("DocumentReference.set", e); try { return function(t, e, n) { t = zd(t, Jd); var r = zd(t.firestore, pp),
                              e = Zy(t.converter, e, n); return lg(r, [Up(Vp(r), "setDoc", t._key, e, null !== t.converter, n).toMutation(t._key, rs.none())]) }(this._delegate, t, e) } catch (t) { throw Mg(t, "setDoc()", "DocumentReference.set()") } }, Pg.prototype.update = function(t, e) { for (var n = [], r = 2; r < arguments.length; r++) n[r - 2] = arguments[r]; try { return 1 === arguments.length ? cg(this._delegate, t) : cg.apply(void 0, s([this._delegate, t, e], n)) } catch (t) { throw Mg(t, "updateDoc()", "DocumentReference.update()") } }, Pg.prototype.delete = function() { return lg(zd((t = this._delegate).firestore, pp), [new Ts(t._key, rs.none())]); var t }, Pg.prototype.onSnapshot = function() { for (var e = this, t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n]; var r = Fg(t),
                      i = Vg(t, function(t) { return new Bg(e.firestore, new Iy(e.firestore._delegate, e._userDataWriter, t._key, t._document, t.metadata, e._delegate.converter)) }); return hg(this._delegate, r, i) }, Pg.prototype.get = function(t) { var e = this; return ("cache" === (null == t ? void 0 : t.source) ? function(e) { e = zd(e, Jd); var n = zd(e.firestore, pp),
                          t = mp(n),
                          r = new ag(n); return function(n, r) { var t = this,
                              i = new eu; return n.asyncQueue.enqueueAndForget(function() { return y(t, void 0, void 0, function() { var e; return g(this, function(t) { switch (t.label) {
                                          case 0:
                                              return e = function(o, s, a) { return y(this, void 0, void 0, function() { var r, i; return g(this, function(t) { switch (t.label) {
                                                              case 0:
                                                                  return t.trys.push([0, 2, , 3]), [4, (e = s, (n = o).persistence.runTransaction("read document", "readonly", function(t) { return n.Mn.mn(t, e) }))];
                                                              case 1:
                                                                  return (i = t.sent()).isFoundDocument() ? a.resolve(i) : i.isNoDocument() ? a.resolve(null) : a.reject(new kr(Cr.UNAVAILABLE, "Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)")), [3, 3];
                                                              case 2:
                                                                  return r = t.sent(), i = Xl(r, "Failed to get document '" + s + " from cache"), a.reject(i), [3, 3];
                                                              case 3:
                                                                  return [2] } var e, n }) }) }, [4, bd(n)];
                                          case 1:
                                              return [2, e.apply(void 0, [t.sent(), r, i])] } }) }) }), i.promise }(t, e._key).then(function(t) { return new Iy(n, r, e._key, t, new Ty(null !== t && t.hasLocalMutations, !0), e.converter) }) } : "server" === (null == t ? void 0 : t.source) ? function(e) { e = zd(e, Jd); var n = zd(e.firestore, pp); return Id(mp(n), e._key, { source: "server" }).then(function(t) { return fg(n, e, t) }) } : function(e) { e = zd(e, Jd); var n = zd(e.firestore, pp); return Id(mp(n), e._key).then(function(t) { return fg(n, e, t) }) })(this._delegate).then(function(t) { return new Bg(e.firestore, new Iy(e.firestore._delegate, e._userDataWriter, t._key, t._document, t.metadata, e._delegate.converter)) }) }, Pg.prototype.withConverter = function(t) { return new Pg(this.firestore, t ? this._delegate.withConverter(kg.sa(this.firestore, t)) : this._delegate.withConverter(null)) }, Pg);

              function Pg(t, e) { this.firestore = t, this._delegate = e, this._userDataWriter = new Ig(t) }

              function Mg(t, e, n) { return t.message = t.message.replace(e, n), t }

              function Fg(t) { for (var e = 0, n = t; e < n.length; e++) { var r = n[e]; if ("object" == typeof r && !lp(r)) return r } return {} }

              function Vg(t, e) { var n; return { next: function(t) { n.next && n.next(e(t)) }, error: null === (t = (n = lp(t[0]) ? t[0] : lp(t[1]) ? t[1] : "function" == typeof t[0] ? { next: t[0], error: t[1], complete: t[2] } : { next: t[1], error: t[2], complete: t[3] }).error) || void 0 === t ? void 0 : t.bind(n), complete: null === (t = n.complete) || void 0 === t ? void 0 : t.bind(n) } } var Ug, qg, Bg = (Object.defineProperty($g.prototype, "ref", { get: function() { return new Lg(this._firestore, this._delegate.ref) }, enumerable: !1, configurable: !0 }), Object.defineProperty($g.prototype, "id", { get: function() { return this._delegate.id }, enumerable: !1, configurable: !0 }), Object.defineProperty($g.prototype, "metadata", { get: function() { return this._delegate.metadata }, enumerable: !1, configurable: !0 }), Object.defineProperty($g.prototype, "exists", { get: function() { return this._delegate.exists() }, enumerable: !1, configurable: !0 }), $g.prototype.data = function(t) { return this._delegate.data(t) }, $g.prototype.get = function(t, e) { return this._delegate.get(t, e) }, $g.prototype.isEqual = function(t) { return ky(this._delegate, t._delegate) }, $g),
                  jg = (n(Jg, qg = Bg), Jg.prototype.data = function(t) { return this._delegate.data(t) }, Jg),
                  Kg = (Xg.prototype.where = function(t, e, n) { try { return new Xg(this.firestore, xy(this._delegate, (r = n, i = e, o = by("where", t), new Vy(o, i, r)))) } catch (t) { throw Mg(t, /(orderBy|where)\(\)/, "Query.$1()") } var r, i, o }, Xg.prototype.orderBy = function(t, e) { try { return new Xg(this.firestore, xy(this._delegate, (n = void 0 === e ? "asc" : e, r = by("orderBy", t), new Uy(r, n)))) } catch (t) { throw Mg(t, /(orderBy|where)\(\)/, "Query.$1()") } var n, r }, Xg.prototype.limit = function(t) { try { return new Xg(this.firestore, xy(this._delegate, (Hd("limit", e = t), new qy("limit", e, "F")))) } catch (t) { throw Mg(t, "limit()", "Query.limit()") } var e }, Xg.prototype.limitToLast = function(t) { try { return new Xg(this.firestore, xy(this._delegate, (Hd("limitToLast", e = t), new qy("limitToLast", e, "L")))) } catch (t) { throw Mg(t, "limitToLast()", "Query.limitToLast()") } var e }, Xg.prototype.startAt = function() { for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e]; try { return new Xg(this.firestore, xy(this._delegate, function() { for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e]; return new By("startAt", t, !0) }.apply(void 0, t))) } catch (t) { throw Mg(t, "startAt()", "Query.startAt()") } }, Xg.prototype.startAfter = function() { for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e]; try { return new Xg(this.firestore, xy(this._delegate, function() { for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e]; return new By("startAfter", t, !1) }.apply(void 0, t))) } catch (t) { throw Mg(t, "startAfter()", "Query.startAfter()") } }, Xg.prototype.endBefore = function() { for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e]; try { return new Xg(this.firestore, xy(this._delegate, function() { for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e]; return new jy("endBefore", t, !0) }.apply(void 0, t))) } catch (t) { throw Mg(t, "endBefore()", "Query.endBefore()") } }, Xg.prototype.endAt = function() { for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e]; try { return new Xg(this.firestore, xy(this._delegate, function() { for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e]; return new jy("endAt", t, !1) }.apply(void 0, t))) } catch (t) { throw Mg(t, "endAt()", "Query.endAt()") } }, Xg.prototype.isEqual = function(t) { return up(this._delegate, t._delegate) }, Xg.prototype.get = function(t) { var e = this; return ("cache" === (null == t ? void 0 : t.source) ? function(e) { e = zd(e, $d); var n = zd(e.firestore, pp),
                              t = mp(n),
                              r = new ag(n); return function(n, r) { var t = this,
                                  i = new eu; return n.asyncQueue.enqueueAndForget(function() { return y(t, void 0, void 0, function() { var e; return g(this, function(t) { switch (t.label) {
                                              case 0:
                                                  return e = function(i, o, s) { return y(this, void 0, void 0, function() { var e, n, r; return g(this, function(t) { switch (t.label) {
                                                                  case 0:
                                                                      return t.trys.push([0, 2, , 3]), [4, ch(i, o, !0)];
                                                                  case 1:
                                                                      return r = t.sent(), e = new wf(o, r.Bn), n = e._o(r.documents), n = e.applyChanges(n, !1), s.resolve(n.snapshot), [3, 3];
                                                                  case 2:
                                                                      return n = t.sent(), r = Xl(n, "Failed to execute query '" + o + " against cache"), s.reject(r), [3, 3];
                                                                  case 3:
                                                                      return [2] } }) }) }, [4, bd(n)];
                                              case 1:
                                                  return [2, e.apply(void 0, [t.sent(), r, i])] } }) }) }), i.promise }(t, e._query).then(function(t) { return new Sy(n, r, e, t) }) } : "server" === (null == t ? void 0 : t.source) ? function(e) { e = zd(e, $d); var n = zd(e.firestore, pp),
                              t = mp(n),
                              r = new ag(n); return _d(t, e._query, { source: "server" }).then(function(t) { return new Sy(n, r, e, t) }) } : function(e) { e = zd(e, $d); var n = zd(e.firestore, pp),
                              t = mp(n),
                              r = new ag(n); return Ry(e._query), _d(t, e._query).then(function(t) { return new Sy(n, r, e, t) }) })(this._delegate).then(function(t) { return new Qg(e.firestore, new Sy(e.firestore._delegate, e._userDataWriter, e._delegate, t._snapshot)) }) }, Xg.prototype.onSnapshot = function() { for (var e = this, t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n]; var r = Fg(t),
                          i = Vg(t, function(t) { return new Qg(e.firestore, new Sy(e.firestore._delegate, e._userDataWriter, e._delegate, t._snapshot)) }); return hg(this._delegate, r, i) }, Xg.prototype.withConverter = function(t) { return new Xg(this.firestore, t ? this._delegate.withConverter(kg.sa(this.firestore, t)) : this._delegate.withConverter(null)) }, Xg),
                  Gg = (Object.defineProperty(Yg.prototype, "type", { get: function() { return this._delegate.type }, enumerable: !1, configurable: !0 }), Object.defineProperty(Yg.prototype, "doc", { get: function() { return new jg(this._firestore, this._delegate.doc) }, enumerable: !1, configurable: !0 }), Object.defineProperty(Yg.prototype, "oldIndex", { get: function() { return this._delegate.oldIndex }, enumerable: !1, configurable: !0 }), Object.defineProperty(Yg.prototype, "newIndex", { get: function() { return this._delegate.newIndex }, enumerable: !1, configurable: !0 }), Yg),
                  Qg = (Object.defineProperty(Wg.prototype, "query", { get: function() { return new Kg(this._firestore, this._delegate.query) }, enumerable: !1, configurable: !0 }), Object.defineProperty(Wg.prototype, "metadata", { get: function() { return this._delegate.metadata }, enumerable: !1, configurable: !0 }), Object.defineProperty(Wg.prototype, "size", { get: function() { return this._delegate.size }, enumerable: !1, configurable: !0 }), Object.defineProperty(Wg.prototype, "empty", { get: function() { return this._delegate.empty }, enumerable: !1, configurable: !0 }), Object.defineProperty(Wg.prototype, "docs", { get: function() { var e = this; return this._delegate.docs.map(function(t) { return new jg(e._firestore, t) }) }, enumerable: !1, configurable: !0 }), Wg.prototype.docChanges = function(t) { var e = this; return this._delegate.docChanges(t).map(function(t) { return new Gg(e._firestore, t) }) }, Wg.prototype.forEach = function(e, n) { var r = this;
                      this._delegate.forEach(function(t) { e.call(n, new jg(r._firestore, t)) }) }, Wg.prototype.isEqual = function(t) { return ky(this._delegate, t._delegate) }, Wg),
                  zg = (n(Hg, Ug = Kg), Object.defineProperty(Hg.prototype, "id", { get: function() { return this._delegate.id }, enumerable: !1, configurable: !0 }), Object.defineProperty(Hg.prototype, "path", { get: function() { return this._delegate.path }, enumerable: !1, configurable: !0 }), Object.defineProperty(Hg.prototype, "parent", { get: function() { var t = this._delegate.parent; return t ? new Lg(this.firestore, t) : null }, enumerable: !1, configurable: !0 }), Hg.prototype.doc = function(t) { try { return new Lg(this.firestore, void 0 === t ? sp(this._delegate) : sp(this._delegate, t)) } catch (t) { throw Mg(t, "doc()", "CollectionReference.doc()") } }, Hg.prototype.add = function(t) { var e, n, r, i = this; return e = this._delegate, n = t, t = zd(e.firestore, pp), r = sp(e), n = Zy(e.converter, n), lg(t, [Up(Vp(e.firestore), "addDoc", r._key, n, null !== e.converter, {}).toMutation(r._key, rs.exists(!1))]).then(function() { return r }).then(function(t) { return new Lg(i.firestore, t) }) }, Hg.prototype.isEqual = function(t) { return ap(this._delegate, t._delegate) }, Hg.prototype.withConverter = function(t) { return new Hg(this.firestore, t ? this._delegate.withConverter(kg.sa(this.firestore, t)) : this._delegate.withConverter(null)) }, Hg);

              function Hg(t, e) { var n = this; return (n = Ug.call(this, t, e) || this).firestore = t, n._delegate = e, n }

              function Wg(t, e) { this._firestore = t, this._delegate = e }

              function Yg(t, e) { this._firestore = t, this._delegate = e }

              function Xg(t, e) { this.firestore = t, this._delegate = e, this._userDataWriter = new Ig(t) }

              function Jg() { return null !== qg && qg.apply(this, arguments) || this }

              function $g(t, e) { this._firestore = t, this._delegate = e }

              function Zg(t) { return zd(t, Jd) }
              em.documentId = function() { return new em(ni.keyField().canonicalString()) }, em.prototype.isEqual = function(t) { return (t = v(t)) instanceof Ep && this._delegate._internalPath.isEqual(t._internalPath) }, Se = em, tm.serverTimestamp = function() { var t = new Wp("serverTimestamp"); return t._methodName = "FieldValue.serverTimestamp", new tm(t) }, tm.delete = function() { var t = new Bp("deleteField"); return t._methodName = "FieldValue.delete", new tm(t) }, tm.arrayUnion = function() { for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e]; var n = function() { for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e]; return new Yp("arrayUnion", t) }.apply(void 0, t); return n._methodName = "FieldValue.arrayUnion", new tm(n) }, tm.arrayRemove = function() { for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e]; var n = function() { for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e]; return new Xp("arrayRemove", t) }.apply(void 0, t); return n._methodName = "FieldValue.arrayRemove", new tm(n) }, tm.increment = function(t) { t = new Jp("increment", t); return t._methodName = "FieldValue.increment", new tm(t) }, tm.prototype.isEqual = function(t) { return this._delegate.isEqual(t._delegate) }, I = tm;

              function tm(t) { this._delegate = t }

              function em() { for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                  this._delegate = new(Ep.bind.apply(Ep, s([void 0], t))) }

              function nm(t) { return e = this._delegate, s = t, n = mp(e = zd(e, pp)), t = new dp,
                      function(n, t, r) { var e, i = this,
                              o = (e = s, t = dl(t), e = function(t) { if (t instanceof Uint8Array) return rd(t, void 0); if (t instanceof ArrayBuffer) return rd(new Uint8Array(t), void 0); if (t instanceof ReadableStream) return t.getReader(); throw new Error("Source of `toByteStreamReader` has to be a ArrayBuffer or ReadableStream") }("string" == typeof e ? (new TextEncoder).encode(e) : e), new od(e, t));
                          n.asyncQueue.enqueueAndForget(function() { return y(i, void 0, void 0, function() { var e; return g(this, function(t) { switch (t.label) {
                                          case 0:
                                              return e = zf, [4, Ed(n)];
                                          case 1:
                                              return e.apply(void 0, [t.sent(), o, r]), [2] } }) }) }) }(n, e._databaseId, t), t; var e, s, n }

              function rm(t) { var e = this,
                      n = this._delegate,
                      t = t; return function(n, r) { var t = this; return n.asyncQueue.enqueue(function() { return y(t, void 0, void 0, function() { var e; return g(this, function(t) { switch (t.label) {
                                      case 0:
                                          return e = function(t, e) { var n = t; return n.persistence.runTransaction("Get named query", "readonly", function(t) { return n.Qe.getNamedQuery(t, e) }) }, [4, bd(n)];
                                      case 1:
                                          return [2, e.apply(void 0, [t.sent(), r])] } }) }) }) }(mp(n = zd(n, pp)), t).then(function(t) { return t ? new $d(n, null, t.query) : null }).then(function(t) { return t ? new Kg(e, t) : null }) } var im = (om.prototype.setInstantiationMode = function(t) { return this.instantiationMode = t, this }, om.prototype.setMultipleInstances = function(t) { return this.multipleInstances = t, this }, om.prototype.setServiceProps = function(t) { return this.serviceProps = t, this }, om.prototype.setInstanceCreatedCallback = function(t) { return this.onInstanceCreated = t, this }, om);

              function om(t, e, n) { this.name = t, this.instanceFactory = e, this.type = n, this.multipleInstances = !1, this.serviceProps = {}, this.instantiationMode = "LAZY", this.onInstanceCreated = null } var sm, am, um = { Firestore: Tg, GeoPoint: _p, Timestamp: Qr, Blob: wg, Transaction: Dg, WriteBatch: Cg, DocumentReference: Lg, DocumentSnapshot: Bg, Query: Kg, QueryDocumentSnapshot: jg, QuerySnapshot: Qg, CollectionReference: zg, FieldPath: Se, FieldValue: I, setLogLevel: function(t) { Rr.setLogLevel(t) }, CACHE_SIZE_UNLIMITED: -1 };
              (sm = e.default).INTERNAL.registerComponent(new im("firestore", function(t) { var e = t.getProvider("app").getImmediate(); return e = e, t = t.getProvider("auth-internal"), new Tg(e, new pp(e, t), new Eg) }, "PUBLIC").setServiceProps(Object.assign({}, um))), sm.registerVersion("@firebase/firestore", "2.3.1"), (am = Tg).prototype.loadBundle = nm, am.prototype.namedQuery = rm }.apply(this, arguments) } catch (t) { throw console.error(t), new Error("Cannot instantiate firebase-firestore.js - be sure to load firebase-app.js first.") } });
  //# sourceMappingURL=firebase-firestore.js.map