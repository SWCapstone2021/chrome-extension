/*! Terms: https://developers.google.com/terms */
(function() {
    /*

        Copyright The Closure Library Authors.
        SPDX-License-Identifier: Apache-2.0
       */
    var h;

    function aa(a) { var b = 0; return function() { return b < a.length ? { done: !1, value: a[b++] } : { done: !0 } } }
    var ba = "function" == typeof Object.create ? Object.create : function(a) {
            function b() {}
            b.prototype = a;
            return new b
        },
        ca = "function" == typeof Object.defineProperties ? Object.defineProperty : function(a, b, c) {
            if (a == Array.prototype || a == Object.prototype) return a;
            a[b] = c.value;
            return a
        };

    function da(a) { a = ["object" == typeof globalThis && globalThis, a, "object" == typeof window && window, "object" == typeof self && self, "object" == typeof global && global]; for (var b = 0; b < a.length; ++b) { var c = a[b]; if (c && c.Math == Math) return c } throw Error("Cannot find global object"); }
    var ea = da(this);

    function fa(a, b) {
        if (b) a: {
            var c = ea;a = a.split(".");
            for (var d = 0; d < a.length - 1; d++) {
                var e = a[d];
                if (!(e in c)) break a;
                c = c[e]
            }
            a = a[a.length - 1];d = c[a];b = b(d);b != d && null != b && ca(c, a, { configurable: !0, writable: !0, value: b })
        }
    }
    var ha;
    if ("function" == typeof Object.setPrototypeOf) ha = Object.setPrototypeOf;
    else {
        var ia;
        a: {
            var ka = { a: !0 },
                la = {};
            try {
                la.__proto__ = ka;
                ia = la.a;
                break a
            } catch (a) {}
            ia = !1
        }
        ha = ia ? function(a, b) { a.__proto__ = b; if (a.__proto__ !== b) throw new TypeError(a + " is not extensible"); return a } : null
    }
    var ma = ha;

    function l(a, b) {
        a.prototype = ba(b.prototype);
        a.prototype.constructor = a;
        if (ma) ma(a, b);
        else
            for (var c in b)
                if ("prototype" != c)
                    if (Object.defineProperties) {
                        var d = Object.getOwnPropertyDescriptor(b, c);
                        d && Object.defineProperty(a, c, d)
                    } else a[c] = b[c];
        a.$ = b.prototype
    }
    fa("Symbol", function(a) {
        function b(e) { if (this instanceof b) throw new TypeError("Symbol is not a constructor"); return new c("jscomp_symbol_" + (e || "") + "_" + d++, e) }

        function c(e, f) {
            this.Hf = e;
            ca(this, "description", { configurable: !0, writable: !0, value: f })
        }
        if (a) return a;
        c.prototype.toString = function() { return this.Hf };
        var d = 0;
        return b
    });
    fa("Symbol.iterator", function(a) {
        if (a) return a;
        a = Symbol("Symbol.iterator");
        for (var b = "Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "), c = 0; c < b.length; c++) { var d = ea[b[c]]; "function" === typeof d && "function" != typeof d.prototype[a] && ca(d.prototype, a, { configurable: !0, writable: !0, value: function() { return na(aa(this)) } }) }
        return a
    });

    function na(a) {
        a = { next: a };
        a[Symbol.iterator] = function() { return this };
        return a
    }

    function oa(a, b) {
        a instanceof String && (a += "");
        var c = 0,
            d = !1,
            e = {
                next: function() {
                    if (!d && c < a.length) { var f = c++; return { value: b(f, a[f]), done: !1 } }
                    d = !0;
                    return { done: !0, value: void 0 }
                }
            };
        e[Symbol.iterator] = function() { return e };
        return e
    }
    fa("Array.prototype.values", function(a) { return a ? a : function() { return oa(this, function(b, c) { return c }) } });
    var qa = "function" == typeof Object.assign ? Object.assign : function(a, b) {
        for (var c = 1; c < arguments.length; c++) {
            var d = arguments[c];
            if (d)
                for (var e in d) Object.prototype.hasOwnProperty.call(d, e) && (a[e] = d[e])
        }
        return a
    };
    fa("Object.assign", function(a) { return a || qa });
    fa("Array.prototype.keys", function(a) { return a ? a : function() { return oa(this, function(b) { return b }) } });
    fa("Object.is", function(a) { return a ? a : function(b, c) { return b === c ? 0 !== b || 1 / b === 1 / c : b !== b && c !== c } });
    fa("Array.prototype.includes", function(a) {
        return a ? a : function(b, c) {
            var d = this;
            d instanceof String && (d = String(d));
            var e = d.length;
            c = c || 0;
            for (0 > c && (c = Math.max(c + e, 0)); c < e; c++) { var f = d[c]; if (f === b || Object.is(f, b)) return !0 }
            return !1
        }
    });
    fa("String.prototype.includes", function(a) { return a ? a : function(b, c) { if (null == this) throw new TypeError("The 'this' value for String.prototype.includes must not be null or undefined"); if (b instanceof RegExp) throw new TypeError("First argument to String.prototype.includes must not be a regular expression"); return -1 !== (this + "").indexOf(b, c || 0) } });
    fa("Array.prototype.entries", function(a) { return a ? a : function() { return oa(this, function(b, c) { return [b, c] }) } });
    var r = this || self,
        ra = /^[\w+/_-]+[=]{0,2}$/,
        sa = null;

    function ta(a) { return (a = a.querySelector && a.querySelector("script[nonce]")) && (a = a.nonce || a.getAttribute("nonce")) && ra.test(a) ? a : "" }

    function ua() {}

    function va(a) {
        a.Pa = void 0;
        a.Ad = function() { return a.Pa ? a.Pa : a.Pa = new a }
    }

    function wa(a) { var b = typeof a; return "object" != b ? b : a ? Array.isArray(a) ? "array" : b : "null" }

    function xa(a) { var b = wa(a); return "array" == b || "object" == b && "number" == typeof a.length }

    function t(a) { var b = typeof a; return "object" == b && null != a || "function" == b }

    function ya(a, b, c) { return a.call.apply(a.bind, arguments) }

    function za(a, b, c) {
        if (!a) throw Error();
        if (2 < arguments.length) {
            var d = Array.prototype.slice.call(arguments, 2);
            return function() {
                var e = Array.prototype.slice.call(arguments);
                Array.prototype.unshift.apply(e, d);
                return a.apply(b, e)
            }
        }
        return function() { return a.apply(b, arguments) }
    }

    function u(a, b, c) { u = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? ya : za; return u.apply(null, arguments) }

    function Aa(a, b) {
        var c = Array.prototype.slice.call(arguments, 1);
        return function() {
            var d = c.slice();
            d.push.apply(d, arguments);
            return a.apply(this, d)
        }
    }

    function v(a, b) { for (var c in b) a[c] = b[c] }

    function w(a, b) {
        a = a.split(".");
        var c = r;
        a[0] in c || "undefined" == typeof c.execScript || c.execScript("var " + a[0]);
        for (var d; a.length && (d = a.shift());) a.length || void 0 === b ? c = c[d] && c[d] !== Object.prototype[d] ? c[d] : c[d] = {} : c[d] = b
    }

    function x(a, b) {
        function c() {}
        c.prototype = b.prototype;
        a.$ = b.prototype;
        a.prototype = new c;
        a.prototype.constructor = a;
        a.bi = function(d, e, f) { for (var g = Array(arguments.length - 2), k = 2; k < arguments.length; k++) g[k - 2] = arguments[k]; return b.prototype[e].apply(d, g) }
    }

    function Ba(a) { return a };

    function Ca(a) {
        if (Error.captureStackTrace) Error.captureStackTrace(this, Ca);
        else {
            var b = Error().stack;
            b && (this.stack = b)
        }
        a && (this.message = String(a))
    }
    x(Ca, Error);
    Ca.prototype.name = "CustomError";
    var Da;

    function Ea(a, b) {
        a = a.split("%s");
        for (var c = "", d = a.length - 1, e = 0; e < d; e++) c += a[e] + (e < b.length ? b[e] : "%s");
        Ca.call(this, c + a[d])
    }
    x(Ea, Ca);
    Ea.prototype.name = "AssertionError";

    function Fa(a, b) { throw new Ea("Failure" + (a ? ": " + a : ""), Array.prototype.slice.call(arguments, 1)); };
    var Ga = Array.prototype.indexOf ? function(a, b) { return Array.prototype.indexOf.call(a, b, void 0) } : function(a, b) {
            if ("string" === typeof a) return "string" !== typeof b || 1 != b.length ? -1 : a.indexOf(b, 0);
            for (var c = 0; c < a.length; c++)
                if (c in a && a[c] === b) return c;
            return -1
        },
        Ha = Array.prototype.forEach ? function(a, b, c) { Array.prototype.forEach.call(a, b, c) } : function(a, b, c) { for (var d = a.length, e = "string" === typeof a ? a.split("") : a, f = 0; f < d; f++) f in e && b.call(c, e[f], f, a) };

    function Ia(a, b) { for (var c = "string" === typeof a ? a.split("") : a, d = a.length - 1; 0 <= d; --d) d in c && b.call(void 0, c[d], d, a) }
    var Ja = Array.prototype.filter ? function(a, b) { return Array.prototype.filter.call(a, b, void 0) } : function(a, b) {
            for (var c = a.length, d = [], e = 0, f = "string" === typeof a ? a.split("") : a, g = 0; g < c; g++)
                if (g in f) {
                    var k = f[g];
                    b.call(void 0, k, g, a) && (d[e++] = k)
                }
            return d
        },
        Ka = Array.prototype.map ? function(a, b) { return Array.prototype.map.call(a, b, void 0) } : function(a, b) { for (var c = a.length, d = Array(c), e = "string" === typeof a ? a.split("") : a, f = 0; f < c; f++) f in e && (d[f] = b.call(void 0, e[f], f, a)); return d },
        La = Array.prototype.some ? function(a,
            b) { return Array.prototype.some.call(a, b, void 0) } : function(a, b) {
            for (var c = a.length, d = "string" === typeof a ? a.split("") : a, e = 0; e < c; e++)
                if (e in d && b.call(void 0, d[e], e, a)) return !0;
            return !1
        };

    function Ma(a, b) { return 0 <= Ga(a, b) }

    function Na(a, b) {
        b = Ga(a, b);
        var c;
        (c = 0 <= b) && Oa(a, b);
        return c
    }

    function Oa(a, b) { return 1 == Array.prototype.splice.call(a, b, 1).length }

    function Pa(a, b) {
        a: {
            for (var c = a.length, d = "string" === typeof a ? a.split("") : a, e = 0; e < c; e++)
                if (e in d && b.call(void 0, d[e], e, a)) { b = e; break a }
            b = -1
        }
        0 <= b && Oa(a, b)
    }

    function Qa(a, b) {
        var c = 0;
        Ia(a, function(d, e) { b.call(void 0, d, e, a) && Oa(a, e) && c++ })
    }

    function Ra(a) { return Array.prototype.concat.apply([], arguments) }

    function Sa(a) { var b = a.length; if (0 < b) { for (var c = Array(b), d = 0; d < b; d++) c[d] = a[d]; return c } return [] }

    function Ta(a, b, c, d) { return Array.prototype.splice.apply(a, Ua(arguments, 1)) }

    function Ua(a, b, c) { return 2 >= arguments.length ? Array.prototype.slice.call(a, b) : Array.prototype.slice.call(a, b, c) };

    function Va(a, b, c) { for (var d in a) b.call(c, a[d], d, a) }

    function Xa(a, b) {
        for (var c in a)
            if (b.call(void 0, a[c], c, a)) return !0;
        return !1
    }

    function Ya(a) {
        var b = {},
            c;
        for (c in a) b[c] = a[c];
        return b
    }
    var Za = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");

    function $a(a, b) { for (var c, d, e = 1; e < arguments.length; e++) { d = arguments[e]; for (c in d) a[c] = d[c]; for (var f = 0; f < Za.length; f++) c = Za[f], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c]) } };
    var ab;

    function bb() {
        if (void 0 === ab) {
            var a = null,
                b = r.trustedTypes;
            if (b && b.createPolicy) try { a = b.createPolicy("goog#html", { createHTML: Ba, createScript: Ba, createScriptURL: Ba }) } catch (c) { r.console && r.console.error(c.message) }
            ab = a
        }
        return ab
    };

    function cb(a, b) {
        this.ee = a === db && b || "";
        this.Wf = eb
    }
    cb.prototype.Ua = !0;
    cb.prototype.Oa = function() { return this.ee };
    cb.prototype.toString = function() { return "Const{" + this.ee + "}" };

    function fb(a) {
        if (a instanceof cb && a.constructor === cb && a.Wf === eb) return a.ee;
        Fa("expected object of type Const, got '" + a + "'");
        return "type_error:Const"
    }
    var eb = {},
        db = {};

    function gb(a, b) { this.Vd = b === hb ? a : "" }
    h = gb.prototype;
    h.Ua = !0;
    h.Oa = function() { return this.Vd.toString() };
    h.Id = !0;
    h.Ec = function() { return 1 };
    h.toString = function() { return this.Vd + "" };

    function ib(a) {
        if (a instanceof gb && a.constructor === gb) return a.Vd;
        Fa("expected object of type TrustedResourceUrl, got '" + a + "' of type " + wa(a));
        return "type_error:TrustedResourceUrl"
    }

    function jb() {
        var a = fb(kb),
            b = bb();
        a = b ? b.createScriptURL(a) : a;
        return new gb(a, hb)
    }
    var hb = {};
    var lb = String.prototype.trim ? function(a) { return a.trim() } : function(a) { return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1] };

    function mb(a, b) {
        if (b) a = a.replace(nb, "&amp;").replace(ob, "&lt;").replace(pb, "&gt;").replace(qb, "&quot;").replace(rb, "&#39;").replace(sb, "&#0;");
        else { if (!tb.test(a)) return a; - 1 != a.indexOf("&") && (a = a.replace(nb, "&amp;")); - 1 != a.indexOf("<") && (a = a.replace(ob, "&lt;")); - 1 != a.indexOf(">") && (a = a.replace(pb, "&gt;")); - 1 != a.indexOf('"') && (a = a.replace(qb, "&quot;")); - 1 != a.indexOf("'") && (a = a.replace(rb, "&#39;")); - 1 != a.indexOf("\x00") && (a = a.replace(sb, "&#0;")) }
        return a
    }
    var nb = /&/g,
        ob = /</g,
        pb = />/g,
        qb = /"/g,
        rb = /'/g,
        sb = /\x00/g,
        tb = /[\x00&<>"']/;

    function ub(a, b) { return a < b ? -1 : a > b ? 1 : 0 };

    function vb(a, b) { this.Ud = b === wb ? a : "" }
    h = vb.prototype;
    h.Ua = !0;
    h.Oa = function() { return this.Ud.toString() };
    h.Id = !0;
    h.Ec = function() { return 1 };
    h.toString = function() { return this.Ud.toString() };

    function xb(a) {
        if (a instanceof vb && a.constructor === vb) return a.Ud;
        Fa("expected object of type SafeUrl, got '" + a + "' of type " + wa(a));
        return "type_error:SafeUrl"
    }
    var yb = /^(?:audio\/(?:3gpp2|3gpp|aac|L16|midi|mp3|mp4|mpeg|oga|ogg|opus|x-m4a|x-matroska|x-wav|wav|webm)|font\/\w+|image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp|x-icon)|video\/(?:mpeg|mp4|ogg|webm|quicktime|x-matroska))(?:;\w+=(?:\w+|"[\w;,= ]+"))*$/i,
        Ab = /^data:(.*);base64,[a-z0-9+\/]+=*$/i,
        Bb = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;

    function Cb(a) {
        if (a instanceof vb) return a;
        a = "object" == typeof a && a.Ua ? a.Oa() : String(a);
        if (Bb.test(a)) a = Db(a);
        else {
            a = String(a);
            a = a.replace(/(%0A|%0D)/g, "");
            var b = a.match(Ab);
            a = b && yb.test(b[1]) ? Db(a) : null
        }
        return a
    }

    function Eb(a) {
        if (a instanceof vb) return a;
        a = "object" == typeof a && a.Ua ? a.Oa() : String(a);
        Bb.test(a) || (a = "about:invalid#zClosurez");
        return Db(a)
    }
    var wb = {};

    function Db(a) { return new vb(a, wb) }
    var Fb = Db("about:invalid#zClosurez");

    function Gb(a, b) { this.Td = b === Hb ? a : "" }
    Gb.prototype.Ua = !0;
    Gb.prototype.Oa = function() { return this.Td };
    Gb.prototype.toString = function() { return this.Td.toString() };
    var Hb = {};
    var Ib = {};

    function Jb(a, b) {
        this.Sd = b === Ib ? a : "";
        this.Ua = !0
    }
    Jb.prototype.Oa = function() { return this.Sd };
    Jb.prototype.toString = function() { return this.Sd.toString() };
    var Kb;
    a: {
        var Lb = r.navigator;
        if (Lb) { var Mb = Lb.userAgent; if (Mb) { Kb = Mb; break a } }
        Kb = ""
    }

    function y(a) { return -1 != Kb.indexOf(a) };

    function Nb() { return (y("Chrome") || y("CriOS")) && !y("Edge") };

    function Ob(a, b, c) {
        this.Rd = c === Pb ? a : "";
        this.tg = b
    }
    h = Ob.prototype;
    h.Id = !0;
    h.Ec = function() { return this.tg };
    h.Ua = !0;
    h.Oa = function() { return this.Rd.toString() };
    h.toString = function() { return this.Rd.toString() };

    function Qb(a) {
        if (a instanceof Ob && a.constructor === Ob) return a.Rd;
        Fa("expected object of type SafeHtml, got '" + a + "' of type " + wa(a));
        return "type_error:SafeHtml"
    }

    function Rb(a) {
        if (a instanceof Ob) return a;
        var b = "object" == typeof a,
            c = null;
        b && a.Id && (c = a.Ec());
        return Sb(mb(b && a.Ua ? a.Oa() : String(a)), c)
    }
    var Pb = {};

    function Sb(a, b) {
        var c = bb();
        a = c ? c.createHTML(a) : a;
        return new Ob(a, b, Pb)
    }
    var Tb = new Ob(r.trustedTypes && r.trustedTypes.emptyHTML || "", 0, Pb);

    function Ub(a, b) {
        var c = Vb(a);
        c && "undefined" != typeof c[b] && (a && (a instanceof c[b] || !(a instanceof c.Location || a instanceof c.Element)) || Fa("Argument is not a %s (or a non-Element, non-Location mock); got: %s", b, Wb(a)))
    }

    function Wb(a) { if (t(a)) try { return a.constructor.displayName || a.constructor.name || Object.prototype.toString.call(a) } catch (b) { return "<object could not be stringified>" } else return void 0 === a ? "undefined" : null === a ? "null" : typeof a }

    function Vb(a) {
        try {
            var b = a && a.ownerDocument,
                c = b && (b.defaultView || b.parentWindow);
            c = c || r;
            if (c.Element && c.Location) return c
        } catch (d) {}
        return null
    };
    var Xb = function(a) {
        var b = !1,
            c;
        return function() { b || (c = a(), b = !0); return c }
    }(function() {
        if ("undefined" === typeof document) return !1;
        var a = document.createElement("div"),
            b = document.createElement("div");
        b.appendChild(document.createElement("div"));
        a.appendChild(b);
        if (!a.firstChild) return !1;
        b = a.firstChild.firstChild;
        a.innerHTML = Qb(Tb);
        return !b.parentElement
    });

    function Yb(a, b) {
        Ub(a, "HTMLScriptElement");
        a.src = ib(b);
        (b = a.ownerDocument && a.ownerDocument.defaultView) && b != r ? b = ta(b.document) : (null === sa && (sa = ta(r.document)), b = sa);
        b && a.setAttribute("nonce", b)
    }

    function Zb(a, b) {
        var c = Vb(a);
        c && (!a || !(a instanceof c.Location) && a instanceof c.Element) && Fa("Argument is not a Location (or a non-Element mock); got: %s", Wb(a));
        b = b instanceof vb ? b : Eb(b);
        a.assign(xb(b))
    }

    function $b(a, b, c, d) {
        a = a instanceof vb ? a : Eb(a);
        b = b || r;
        c = c instanceof cb ? fb(c) : c || "";
        return void 0 !== d ? b.open(xb(a), c, d, void 0) : b.open(xb(a), c)
    };

    function ac(a) { return a = mb(a, void 0) };
    var bc = "StopIteration" in r ? r.StopIteration : { message: "StopIteration", stack: "" };

    function cc() {}
    cc.prototype.next = function() { throw bc; };
    cc.prototype.hb = function() { return this };

    function dc(a) {
        if (a instanceof cc) return a;
        if ("function" == typeof a.hb) return a.hb(!1);
        if (xa(a)) {
            var b = 0,
                c = new cc;
            c.next = function() {
                for (;;) {
                    if (b >= a.length) throw bc;
                    if (b in a) return a[b++];
                    b++
                }
            };
            return c
        }
        throw Error("Not implemented");
    }

    function ec(a, b) { if (xa(a)) try { Ha(a, b, void 0) } catch (c) { if (c !== bc) throw c; } else { a = dc(a); try { for (;;) b.call(void 0, a.next(), void 0, a) } catch (c) { if (c !== bc) throw c; } } }

    function fc(a) {
        if (xa(a)) return Sa(a);
        a = dc(a);
        var b = [];
        ec(a, function(c) { b.push(c) });
        return b
    };

    function gc(a, b) {
        this.Fa = {};
        this.K = [];
        this.sc = this.S = 0;
        var c = arguments.length;
        if (1 < c) { if (c % 2) throw Error("Uneven number of arguments"); for (var d = 0; d < c; d += 2) this.set(arguments[d], arguments[d + 1]) } else a && this.addAll(a)
    }
    h = gc.prototype;
    h.wa = function() { hc(this); for (var a = [], b = 0; b < this.K.length; b++) a.push(this.Fa[this.K[b]]); return a };
    h.Ma = function() { hc(this); return this.K.concat() };
    h.$a = function(a) { return ic(this.Fa, a) };
    h.Fb = function() { return 0 == this.S };
    h.clear = function() {
        this.Fa = {};
        this.sc = this.S = this.K.length = 0
    };
    h.remove = function(a) { return ic(this.Fa, a) ? (delete this.Fa[a], this.S--, this.sc++, this.K.length > 2 * this.S && hc(this), !0) : !1 };

    function hc(a) {
        if (a.S != a.K.length) {
            for (var b = 0, c = 0; b < a.K.length;) {
                var d = a.K[b];
                ic(a.Fa, d) && (a.K[c++] = d);
                b++
            }
            a.K.length = c
        }
        if (a.S != a.K.length) {
            var e = {};
            for (c = b = 0; b < a.K.length;) d = a.K[b], ic(e, d) || (a.K[c++] = d, e[d] = 1), b++;
            a.K.length = c
        }
    }
    h.get = function(a, b) { return ic(this.Fa, a) ? this.Fa[a] : b };
    h.set = function(a, b) {
        ic(this.Fa, a) || (this.S++, this.K.push(a), this.sc++);
        this.Fa[a] = b
    };
    h.addAll = function(a) {
        if (a instanceof gc)
            for (var b = a.Ma(), c = 0; c < b.length; c++) this.set(b[c], a.get(b[c]));
        else
            for (b in a) this.set(b, a[b])
    };
    h.forEach = function(a, b) {
        for (var c = this.Ma(), d = 0; d < c.length; d++) {
            var e = c[d],
                f = this.get(e);
            a.call(b, f, e, this)
        }
    };
    h.clone = function() { return new gc(this) };
    h.hb = function(a) {
        hc(this);
        var b = 0,
            c = this.sc,
            d = this,
            e = new cc;
        e.next = function() { if (c != d.sc) throw Error("The map has changed since the iterator was created"); if (b >= d.K.length) throw bc; var f = d.K[b++]; return a ? f : d.Fa[f] };
        return e
    };

    function ic(a, b) { return Object.prototype.hasOwnProperty.call(a, b) };

    function jc(a) {
        if (a.wa && "function" == typeof a.wa) return a.wa();
        if ("string" === typeof a) return a.split("");
        if (xa(a)) { for (var b = [], c = a.length, d = 0; d < c; d++) b.push(a[d]); return b }
        b = [];
        c = 0;
        for (d in a) b[c++] = a[d];
        return b
    }

    function kc(a) {
        if (a.Ma && "function" == typeof a.Ma) return a.Ma();
        if (!a.wa || "function" != typeof a.wa) {
            if (xa(a) || "string" === typeof a) {
                var b = [];
                a = a.length;
                for (var c = 0; c < a; c++) b.push(c);
                return b
            }
            b = [];
            c = 0;
            for (var d in a) b[c++] = d;
            return b
        }
    }

    function lc(a, b, c) {
        if (a.forEach && "function" == typeof a.forEach) a.forEach(b, c);
        else if (xa(a) || "string" === typeof a) Ha(a, b, c);
        else
            for (var d = kc(a), e = jc(a), f = e.length, g = 0; g < f; g++) b.call(c, e[g], d && d[g], a)
    };
    var mc = /^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;

    function nc(a, b) {
        if (a) {
            a = a.split("&");
            for (var c = 0; c < a.length; c++) {
                var d = a[c].indexOf("="),
                    e = null;
                if (0 <= d) {
                    var f = a[c].substring(0, d);
                    e = a[c].substring(d + 1)
                } else f = a[c];
                b(f, e ? decodeURIComponent(e.replace(/\+/g, " ")) : "")
            }
        }
    }

    function oc(a, b, c, d) {
        for (var e = c.length; 0 <= (b = a.indexOf(c, b)) && b < d;) {
            var f = a.charCodeAt(b - 1);
            if (38 == f || 63 == f)
                if (f = a.charCodeAt(b + e), !f || 61 == f || 38 == f || 35 == f) return b;
            b += e + 1
        }
        return -1
    }
    var pc = /#|$/;

    function qc(a, b) {
        var c = a.search(pc),
            d = oc(a, 0, b, c);
        if (0 > d) return null;
        var e = a.indexOf("&", d);
        if (0 > e || e > c) e = c;
        d += b.length + 1;
        return decodeURIComponent(a.substr(d, e - d).replace(/\+/g, " "))
    }
    var rc = /[?&]($|#)/;

    function sc(a, b) {
        this.ua = this.vb = this.gb = "";
        this.Jb = null;
        this.mb = this.qa = "";
        this.xa = this.Sg = !1;
        if (a instanceof sc) {
            this.xa = void 0 !== b ? b : a.xa;
            tc(this, a.gb);
            var c = a.vb;
            uc(this);
            this.vb = c;
            c = a.ua;
            uc(this);
            this.ua = c;
            vc(this, a.Jb);
            c = a.qa;
            uc(this);
            this.qa = c;
            wc(this, a.Y.clone());
            a = a.mb;
            uc(this);
            this.mb = a
        } else a && (c = String(a).match(mc)) ? (this.xa = !!b, tc(this, c[1] || "", !0), a = c[2] || "", uc(this), this.vb = xc(a), a = c[3] || "", uc(this), this.ua = xc(a, !0), vc(this, c[4]), a = c[5] || "", uc(this), this.qa = xc(a, !0), wc(this, c[6] || "", !0), a = c[7] || "", uc(this), this.mb = xc(a)) : (this.xa = !!b, this.Y = new yc(null, this.xa))
    }
    h = sc.prototype;
    h.toString = function() {
        var a = [],
            b = this.gb;
        b && a.push(zc(b, Ac, !0), ":");
        var c = this.ua;
        if (c || "file" == b) a.push("//"), (b = this.vb) && a.push(zc(b, Ac, !0), "@"), a.push(encodeURIComponent(String(c)).replace(/%25([0-9a-fA-F]{2})/g, "%$1")), c = this.Jb, null != c && a.push(":", String(c));
        if (c = this.qa) this.ua && "/" != c.charAt(0) && a.push("/"), a.push(zc(c, "/" == c.charAt(0) ? Bc : Cc, !0));
        (c = this.Y.toString()) && a.push("?", c);
        (c = this.mb) && a.push("#", zc(c, Dc));
        return a.join("")
    };
    h.resolve = function(a) {
        var b = this.clone(),
            c = !!a.gb;
        c ? tc(b, a.gb) : c = !!a.vb;
        if (c) {
            var d = a.vb;
            uc(b);
            b.vb = d
        } else c = !!a.ua;
        c ? (d = a.ua, uc(b), b.ua = d) : c = null != a.Jb;
        d = a.qa;
        if (c) vc(b, a.Jb);
        else if (c = !!a.qa) {
            if ("/" != d.charAt(0))
                if (this.ua && !this.qa) d = "/" + d;
                else { var e = b.qa.lastIndexOf("/"); - 1 != e && (d = b.qa.substr(0, e + 1) + d) }
            e = d;
            if (".." == e || "." == e) d = "";
            else if (-1 != e.indexOf("./") || -1 != e.indexOf("/.")) {
                d = 0 == e.lastIndexOf("/", 0);
                e = e.split("/");
                for (var f = [], g = 0; g < e.length;) {
                    var k = e[g++];
                    "." == k ? d && g == e.length && f.push("") :
                        ".." == k ? ((1 < f.length || 1 == f.length && "" != f[0]) && f.pop(), d && g == e.length && f.push("")) : (f.push(k), d = !0)
                }
                d = f.join("/")
            } else d = e
        }
        c ? (uc(b), b.qa = d) : c = "" !== a.Y.toString();
        c ? wc(b, a.Y.clone()) : c = !!a.mb;
        c && (a = a.mb, uc(b), b.mb = a);
        return b
    };
    h.clone = function() { return new sc(this) };

    function tc(a, b, c) {
        uc(a);
        a.gb = c ? xc(b, !0) : b;
        a.gb && (a.gb = a.gb.replace(/:$/, ""))
    }

    function vc(a, b) {
        uc(a);
        if (b) {
            b = Number(b);
            if (isNaN(b) || 0 > b) throw Error("Bad port number " + b);
            a.Jb = b
        } else a.Jb = null
    }

    function wc(a, b, c) {
        uc(a);
        b instanceof yc ? (a.Y = b, a.Y.$d(a.xa)) : (c || (b = zc(b, Ec)), a.Y = new yc(b, a.xa))
    }
    h.getQuery = function() { return this.Y.toString() };

    function Fc(a, b, c) {
        uc(a);
        a.Y.set(b, c)
    }
    h.removeParameter = function(a) {
        uc(this);
        this.Y.remove(a);
        return this
    };

    function uc(a) { if (a.Sg) throw Error("Tried to modify a read-only Uri"); }
    h.$d = function(a) {
        this.xa = a;
        this.Y && this.Y.$d(a)
    };

    function Gc(a) { return a instanceof sc ? a.clone() : new sc(a, void 0) }

    function xc(a, b) { return a ? b ? decodeURI(a.replace(/%25/g, "%2525")) : decodeURIComponent(a) : "" }

    function zc(a, b, c) { return "string" === typeof a ? (a = encodeURI(a).replace(b, Hc), c && (a = a.replace(/%25([0-9a-fA-F]{2})/g, "%$1")), a) : null }

    function Hc(a) { a = a.charCodeAt(0); return "%" + (a >> 4 & 15).toString(16) + (a & 15).toString(16) }
    var Ac = /[#\/\?@]/g,
        Cc = /[#\?:]/g,
        Bc = /[#\?]/g,
        Ec = /[#\?@]/g,
        Dc = /#/g;

    function yc(a, b) {
        this.S = this.T = null;
        this.pa = a || null;
        this.xa = !!b
    }

    function Ic(a) { a.T || (a.T = new gc, a.S = 0, a.pa && nc(a.pa, function(b, c) { a.add(decodeURIComponent(b.replace(/\+/g, " ")), c) })) }
    h = yc.prototype;
    h.add = function(a, b) {
        Ic(this);
        this.pa = null;
        a = Jc(this, a);
        var c = this.T.get(a);
        c || this.T.set(a, c = []);
        c.push(b);
        this.S += 1;
        return this
    };
    h.remove = function(a) {
        Ic(this);
        a = Jc(this, a);
        return this.T.$a(a) ? (this.pa = null, this.S -= this.T.get(a).length, this.T.remove(a)) : !1
    };
    h.clear = function() {
        this.T = this.pa = null;
        this.S = 0
    };
    h.Fb = function() { Ic(this); return 0 == this.S };
    h.$a = function(a) {
        Ic(this);
        a = Jc(this, a);
        return this.T.$a(a)
    };
    h.forEach = function(a, b) {
        Ic(this);
        this.T.forEach(function(c, d) { Ha(c, function(e) { a.call(b, e, d, this) }, this) }, this)
    };
    h.Ma = function() {
        Ic(this);
        for (var a = this.T.wa(), b = this.T.Ma(), c = [], d = 0; d < b.length; d++)
            for (var e = a[d], f = 0; f < e.length; f++) c.push(b[d]);
        return c
    };
    h.wa = function(a) {
        Ic(this);
        var b = [];
        if ("string" === typeof a) this.$a(a) && (b = Ra(b, this.T.get(Jc(this, a))));
        else { a = this.T.wa(); for (var c = 0; c < a.length; c++) b = Ra(b, a[c]) }
        return b
    };
    h.set = function(a, b) {
        Ic(this);
        this.pa = null;
        a = Jc(this, a);
        this.$a(a) && (this.S -= this.T.get(a).length);
        this.T.set(a, [b]);
        this.S += 1;
        return this
    };
    h.get = function(a, b) {
        if (!a) return b;
        a = this.wa(a);
        return 0 < a.length ? String(a[0]) : b
    };
    h.toString = function() {
        if (this.pa) return this.pa;
        if (!this.T) return "";
        for (var a = [], b = this.T.Ma(), c = 0; c < b.length; c++) {
            var d = b[c],
                e = encodeURIComponent(String(d));
            d = this.wa(d);
            for (var f = 0; f < d.length; f++) {
                var g = e;
                "" !== d[f] && (g += "=" + encodeURIComponent(String(d[f])));
                a.push(g)
            }
        }
        return this.pa = a.join("&")
    };
    h.clone = function() {
        var a = new yc;
        a.pa = this.pa;
        this.T && (a.T = this.T.clone(), a.S = this.S);
        return a
    };

    function Jc(a, b) {
        b = String(b);
        a.xa && (b = b.toLowerCase());
        return b
    }
    h.$d = function(a) {
        a && !this.xa && (Ic(this), this.pa = null, this.T.forEach(function(b, c) {
            var d = c.toLowerCase();
            c != d && (this.remove(c), this.remove(d), 0 < b.length && (this.pa = null, this.T.set(Jc(this, d), Sa(b)), this.S += b.length))
        }, this));
        this.xa = a
    };
    h.extend = function(a) { for (var b = 0; b < arguments.length; b++) lc(arguments[b], function(c, d) { this.add(d, c) }, this) };
    var Kc = { ni: !0 },
        Lc = { pi: !0 },
        Mc = { oi: !0 },
        Nc = { mi: !0 };

    function Oc() { throw Error("Do not instantiate directly"); }
    Oc.prototype.Sb = null;
    Oc.prototype.toString = function() { return this.content };

    function Pc() { Oc.call(this) }
    x(Pc, Oc);
    Pc.prototype.kb = Kc;

    function Qc() { Oc.call(this) }
    x(Qc, Oc);
    Qc.prototype.kb = Lc;
    Qc.prototype.Sb = 1;

    function Rc(a, b) { return null != a && a.kb === b };

    function Sc(a) { Sc[" "](a); return a }
    Sc[" "] = ua;

    function Tc(a, b) { var c = Uc; return Object.prototype.hasOwnProperty.call(c, a) ? c[a] : c[a] = b(a) };
    var Vc = y("Opera"),
        z = y("Trident") || y("MSIE"),
        Wc = y("Edge"),
        Xc = Wc || z,
        Yc = y("Gecko") && !(-1 != Kb.toLowerCase().indexOf("webkit") && !y("Edge")) && !(y("Trident") || y("MSIE")) && !y("Edge"),
        Zc = -1 != Kb.toLowerCase().indexOf("webkit") && !y("Edge"),
        $c = Zc && y("Mobile"),
        ad = y("Macintosh");

    function bd() { var a = r.document; return a ? a.documentMode : void 0 }
    var cd;
    a: {
        var dd = "",
            ed = function() { var a = Kb; if (Yc) return /rv:([^\);]+)(\)|;)/.exec(a); if (Wc) return /Edge\/([\d\.]+)/.exec(a); if (z) return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a); if (Zc) return /WebKit\/(\S+)/.exec(a); if (Vc) return /(?:Version)[ \/]?(\S+)/.exec(a) }();ed && (dd = ed ? ed[1] : "");
        if (z) { var fd = bd(); if (null != fd && fd > parseFloat(dd)) { cd = String(fd); break a } }
        cd = dd
    }
    var gd = cd,
        Uc = {};

    function hd(a) {
        return Tc(a, function() {
            for (var b = 0, c = lb(String(gd)).split("."), d = lb(String(a)).split("."), e = Math.max(c.length, d.length), f = 0; 0 == b && f < e; f++) {
                var g = c[f] || "",
                    k = d[f] || "";
                do {
                    g = /(\d*)(\D*)(.*)/.exec(g) || ["", "", "", ""];
                    k = /(\d*)(\D*)(.*)/.exec(k) || ["", "", "", ""];
                    if (0 == g[0].length && 0 == k[0].length) break;
                    b = ub(0 == g[1].length ? 0 : parseInt(g[1], 10), 0 == k[1].length ? 0 : parseInt(k[1], 10)) || ub(0 == g[2].length, 0 == k[2].length) || ub(g[2], k[2]);
                    g = g[3];
                    k = k[3]
                } while (0 == b)
            }
            return 0 <= b
        })
    }
    var id;
    if (r.document && z) {
        var jd = bd();
        id = jd ? jd : parseInt(gd, 10) || void 0
    } else id = void 0;
    var kd = id;
    var ld = Object.freeze || function(a) { return a };

    function md(a) {
        if (null != a) switch (a.Sb) {
            case 1:
                return 1;
            case -1:
                return -1;
            case 0:
                return 0
        }
        return null
    }

    function B(a) { return Rc(a, Kc) ? a : a instanceof Ob ? C(Qb(a).toString(), a.Ec()) : C(String(String(a)).replace(nd, od), md(a)) }
    var C = function(a) {
            function b(c) { this.content = c }
            b.prototype = a.prototype;
            return function(c, d) {
                c = new b(String(c));
                void 0 !== d && (c.Sb = d);
                return c
            }
        }(Pc),
        pd = function(a) {
            function b(c) { this.content = c }
            b.prototype = a.prototype;
            return function(c) { return new b(String(c)) }
        }(Qc),
        D = {};

    function qd(a, b) { return a && b && a.Rg && b.Rg ? a.kb !== b.kb ? !1 : a.toString() === b.toString() : a instanceof Oc && b instanceof Oc ? a.kb != b.kb ? !1 : a.toString() == b.toString() : a == b }

    function rd(a) { return a instanceof Oc ? !!a.content : !!a }
    var sd = function(a) {
        function b(c) { this.content = c }
        b.prototype = a.prototype;
        return function(c, d) {
            c = String(c);
            if (!c) return "";
            c = new b(c);
            void 0 !== d && (c.Sb = d);
            return c
        }
    }(Pc);

    function td(a) { return a.replace(/<\//g, "<\\/").replace(/\]\]>/g, "]]\\>") }

    function ud(a) {
        if (Rc(a, Kc)) {
            var b = String;
            a = String(a.content).replace(vd, "").replace(wd, "&lt;");
            b = b(a).replace(xd, od)
        } else b = String(a).replace(nd, od);
        return b
    }

    function yd(a) { Rc(a, Lc) || Rc(a, Mc) ? a = zd(a) : a instanceof vb ? a = zd(xb(a)) : a instanceof gb ? a = zd(ib(a).toString()) : (a = String(a), Ad.test(a) ? a = a.replace(Bd, Cd) : (Fa("Bad value `%s` for |filterNormalizeUri", [a]), a = "about:invalid#zSoyz")); return a }

    function Dd(a) { Rc(a, Lc) || Rc(a, Mc) ? a = zd(a) : a instanceof vb ? a = zd(xb(a)) : a instanceof gb ? a = zd(ib(a).toString()) : (a = String(a), Ed.test(a) ? a = a.replace(Bd, Cd) : (Fa("Bad value `%s` for |filterNormalizeMediaUri", [a]), a = "about:invalid#zSoyz")); return a }

    function Fd(a) { Rc(a, Nc) ? a = td(a.content) : null == a ? a = "" : a instanceof Gb ? (a instanceof Gb && a.constructor === Gb ? a = a.Td : (Fa("expected object of type SafeStyle, got '" + a + "' of type " + wa(a)), a = "type_error:SafeStyle"), a = td(a)) : a instanceof Jb ? (a instanceof Jb && a.constructor === Jb ? a = a.Sd : (Fa("expected object of type SafeStyleSheet, got '" + a + "' of type " + wa(a)), a = "type_error:SafeStyleSheet"), a = td(a)) : (a = String(a), Gd.test(a) || (Fa("Bad value `%s` for |filterCssValue", [a]), a = "zSoyz")); return a }

    function E(a, b, c, d) { a || (a = c instanceof Function ? c.displayName || c.name || "unknown type name" : c instanceof Object ? c.constructor.displayName || c.constructor.name || Object.prototype.toString.call(c) : null === c ? "null" : typeof c, Fa("expected @param " + b + " of type " + d + (", but got " + a) + ".")); return c }
    var Hd = { "\x00": "&#0;", "\t": "&#9;", "\n": "&#10;", "\x0B": "&#11;", "\f": "&#12;", "\r": "&#13;", " ": "&#32;", '"': "&quot;", "&": "&amp;", "'": "&#39;", "-": "&#45;", "/": "&#47;", "<": "&lt;", "=": "&#61;", ">": "&gt;", "`": "&#96;", "\u0085": "&#133;", "\u00a0": "&#160;", "\u2028": "&#8232;", "\u2029": "&#8233;" };

    function od(a) { return Hd[a] }
    var Id = {
        "\x00": "%00",
        "\u0001": "%01",
        "\u0002": "%02",
        "\u0003": "%03",
        "\u0004": "%04",
        "\u0005": "%05",
        "\u0006": "%06",
        "\u0007": "%07",
        "\b": "%08",
        "\t": "%09",
        "\n": "%0A",
        "\x0B": "%0B",
        "\f": "%0C",
        "\r": "%0D",
        "\u000e": "%0E",
        "\u000f": "%0F",
        "\u0010": "%10",
        "\u0011": "%11",
        "\u0012": "%12",
        "\u0013": "%13",
        "\u0014": "%14",
        "\u0015": "%15",
        "\u0016": "%16",
        "\u0017": "%17",
        "\u0018": "%18",
        "\u0019": "%19",
        "\u001a": "%1A",
        "\u001b": "%1B",
        "\u001c": "%1C",
        "\u001d": "%1D",
        "\u001e": "%1E",
        "\u001f": "%1F",
        " ": "%20",
        '"': "%22",
        "'": "%27",
        "(": "%28",
        ")": "%29",
        "<": "%3C",
        ">": "%3E",
        "\\": "%5C",
        "{": "%7B",
        "}": "%7D",
        "\u007f": "%7F",
        "\u0085": "%C2%85",
        "\u00a0": "%C2%A0",
        "\u2028": "%E2%80%A8",
        "\u2029": "%E2%80%A9",
        "\uff01": "%EF%BC%81",
        "\uff03": "%EF%BC%83",
        "\uff04": "%EF%BC%84",
        "\uff06": "%EF%BC%86",
        "\uff07": "%EF%BC%87",
        "\uff08": "%EF%BC%88",
        "\uff09": "%EF%BC%89",
        "\uff0a": "%EF%BC%8A",
        "\uff0b": "%EF%BC%8B",
        "\uff0c": "%EF%BC%8C",
        "\uff0f": "%EF%BC%8F",
        "\uff1a": "%EF%BC%9A",
        "\uff1b": "%EF%BC%9B",
        "\uff1d": "%EF%BC%9D",
        "\uff1f": "%EF%BC%9F",
        "\uff20": "%EF%BC%A0",
        "\uff3b": "%EF%BC%BB",
        "\uff3d": "%EF%BC%BD"
    };

    function Cd(a) { return Id[a] }
    var nd = /[\x00\x22\x26\x27\x3c\x3e]/g,
        xd = /[\x00\x22\x27\x3c\x3e]/g,
        Bd = /[\x00- \x22\x27-\x29\x3c\x3e\\\x7b\x7d\x7f\x85\xa0\u2028\u2029\uff01\uff03\uff04\uff06-\uff0c\uff0f\uff1a\uff1b\uff1d\uff1f\uff20\uff3b\uff3d]/g,
        Gd = /^(?!-*(?:expression|(?:moz-)?binding))(?:(?:[.#]?-?(?:[_a-z0-9-]+)(?:-[_a-z0-9-]+)*-?|(?:rgb|hsl)a?\([0-9.%,\u0020]+\)|-?(?:[0-9]+(?:\.[0-9]*)?|\.[0-9]+)(?:[a-z]{1,4}|%)?|!important)(?:\s*[,\u0020]\s*|$))*$/i,
        Ad = /^(?![^#?]*\/(?:\.|%2E){2}(?:[\/?#]|$))(?:(?:https?|mailto):|[^&:\/?#]*(?:[\/?#]|$))/i,
        Ed =
        /^[^&:\/?#]*(?:[\/?#]|$)|^https?:|^data:image\/[a-z0-9+]+;base64,[a-z0-9+\/]+=*$|^blob:/i;

    function zd(a) { return String(a).replace(Bd, Cd) }
    var vd = /<(?:!|\/?([a-zA-Z][a-zA-Z0-9:\-]*))(?:[^>'"]|"[^"]*"|'[^']*')*>/g,
        wd = /</g;

    function Jd(a) {
        this.oa = void 0;
        this.aa = {};
        if (a) {
            var b = kc(a);
            a = jc(a);
            for (var c = 0; c < b.length; c++) this.set(b[c], a[c])
        }
    }
    h = Jd.prototype;
    h.set = function(a, b) { Kd(this, a, b, !1) };
    h.add = function(a, b) { Kd(this, a, b, !0) };

    function Kd(a, b, c, d) {
        for (var e = 0; e < b.length; e++) {
            var f = b.charAt(e);
            a.aa[f] || (a.aa[f] = new Jd);
            a = a.aa[f]
        }
        if (d && void 0 !== a.oa) throw Error('The collection already contains the key "' + b + '"');
        a.oa = c
    }
    h.get = function(a) {
        a: {
            for (var b = this, c = 0; c < a.length; c++)
                if (b = b.aa[a.charAt(c)], !b) { a = void 0; break a }
            a = b
        }
        return a ? a.oa : void 0
    };
    h.wa = function() {
        var a = [];
        Ld(this, a);
        return a
    };

    function Ld(a, b) { void 0 !== a.oa && b.push(a.oa); for (var c in a.aa) Ld(a.aa[c], b) }
    h.Ma = function(a) {
        var b = [];
        if (a) {
            for (var c = this, d = 0; d < a.length; d++) {
                var e = a.charAt(d);
                if (!c.aa[e]) return [];
                c = c.aa[e]
            }
            Md(c, a, b)
        } else Md(this, "", b);
        return b
    };

    function Md(a, b, c) { void 0 !== a.oa && c.push(b); for (var d in a.aa) Md(a.aa[d], b + d, c) }
    h.$a = function(a) { return void 0 !== this.get(a) };
    h.clear = function() {
        this.aa = {};
        this.oa = void 0
    };
    h.remove = function(a) {
        for (var b = this, c = [], d = 0; d < a.length; d++) {
            var e = a.charAt(d);
            if (!b.aa[e]) throw Error('The collection does not have the key "' + a + '"');
            c.push([b, e]);
            b = b.aa[e]
        }
        a = b.oa;
        for (delete b.oa; 0 < c.length;)
            if (e = c.pop(), b = e[0], e = e[1], b.aa[e].Fb()) delete b.aa[e];
            else break;
        return a
    };
    h.clone = function() { return new Jd(this) };
    h.Fb = function() {
        var a;
        if (a = void 0 === this.oa) a: {
            for (var b in this.aa) { a = !1; break a }
            a = !0
        }
        return a
    };

    function Nd(a) {
        this.Ta = a;
        this.fe = new Jd;
        for (a = 0; a < this.Ta.length; a++) {
            var b = this.fe.get("+" + this.Ta[a].g);
            b ? b.push(this.Ta[a]) : this.fe.add("+" + this.Ta[a].g, [this.Ta[a]])
        }
    }
    Nd.prototype.search = function(a) {
        var b = this.fe,
            c = {},
            d = 0;
        void 0 !== b.oa && (c[d] = b.oa);
        for (; d < a.length; d++) {
            var e = a.charAt(d);
            if (!(e in b.aa)) break;
            b = b.aa[e];
            void 0 !== b.oa && (c[d] = b.oa)
        }
        for (var f in c)
            if (c.hasOwnProperty(f)) return c[f];
        return []
    };

    function Od(a) {
        for (var b = 0; b < Pd.length; b++)
            if (Pd[b].h === a) return Pd[b];
        return null
    }

    function Qd(a) { a = a.toUpperCase(); for (var b = [], c = 0; c < Pd.length; c++) Pd[c].i === a && b.push(Pd[c]); return b }

    function Rd(a) {
        if (0 < a.length && "+" == a.charAt(0)) {
            a = a.substring(1);
            for (var b = [], c = 0; c < Pd.length; c++) Pd[c].g == a && b.push(Pd[c]);
            a = b
        } else a = Qd(a);
        return a
    }

    function Sd(a) { a.sort(function(b, c) { return b.name.localeCompare(c.name, "en") }) }
    var Pd = [{ name: "Afghanistan", h: "93-AF-0", g: "93", i: "AF" }, { name: "\u00c5land Islands", h: "358-AX-0", g: "358", i: "AX" }, { name: "Albania", h: "355-AL-0", g: "355", i: "AL" }, { name: "Algeria", h: "213-DZ-0", g: "213", i: "DZ" }, { name: "American Samoa", h: "1-AS-0", g: "1", i: "AS" }, { name: "Andorra", h: "376-AD-0", g: "376", i: "AD" }, { name: "Angola", h: "244-AO-0", g: "244", i: "AO" }, { name: "Anguilla", h: "1-AI-0", g: "1", i: "AI" }, { name: "Antigua and Barbuda", h: "1-AG-0", g: "1", i: "AG" }, { name: "Argentina", h: "54-AR-0", g: "54", i: "AR" }, {
            name: "Armenia",
            h: "374-AM-0",
            g: "374",
            i: "AM"
        }, { name: "Aruba", h: "297-AW-0", g: "297", i: "AW" }, { name: "Ascension Island", h: "247-AC-0", g: "247", i: "AC" }, { name: "Australia", h: "61-AU-0", g: "61", i: "AU" }, { name: "Austria", h: "43-AT-0", g: "43", i: "AT" }, { name: "Azerbaijan", h: "994-AZ-0", g: "994", i: "AZ" }, { name: "Bahamas", h: "1-BS-0", g: "1", i: "BS" }, { name: "Bahrain", h: "973-BH-0", g: "973", i: "BH" }, { name: "Bangladesh", h: "880-BD-0", g: "880", i: "BD" }, { name: "Barbados", h: "1-BB-0", g: "1", i: "BB" }, { name: "Belarus", h: "375-BY-0", g: "375", i: "BY" }, {
            name: "Belgium",
            h: "32-BE-0",
            g: "32",
            i: "BE"
        }, { name: "Belize", h: "501-BZ-0", g: "501", i: "BZ" }, { name: "Benin", h: "229-BJ-0", g: "229", i: "BJ" }, { name: "Bermuda", h: "1-BM-0", g: "1", i: "BM" }, { name: "Bhutan", h: "975-BT-0", g: "975", i: "BT" }, { name: "Bolivia", h: "591-BO-0", g: "591", i: "BO" }, { name: "Bosnia and Herzegovina", h: "387-BA-0", g: "387", i: "BA" }, { name: "Botswana", h: "267-BW-0", g: "267", i: "BW" }, { name: "Brazil", h: "55-BR-0", g: "55", i: "BR" }, { name: "British Indian Ocean Territory", h: "246-IO-0", g: "246", i: "IO" }, { name: "British Virgin Islands", h: "1-VG-0", g: "1", i: "VG" }, {
            name: "Brunei",
            h: "673-BN-0",
            g: "673",
            i: "BN"
        }, { name: "Bulgaria", h: "359-BG-0", g: "359", i: "BG" }, { name: "Burkina Faso", h: "226-BF-0", g: "226", i: "BF" }, { name: "Burundi", h: "257-BI-0", g: "257", i: "BI" }, { name: "Cambodia", h: "855-KH-0", g: "855", i: "KH" }, { name: "Cameroon", h: "237-CM-0", g: "237", i: "CM" }, { name: "Canada", h: "1-CA-0", g: "1", i: "CA" }, { name: "Cape Verde", h: "238-CV-0", g: "238", i: "CV" }, { name: "Caribbean Netherlands", h: "599-BQ-0", g: "599", i: "BQ" }, { name: "Cayman Islands", h: "1-KY-0", g: "1", i: "KY" }, {
            name: "Central African Republic",
            h: "236-CF-0",
            g: "236",
            i: "CF"
        }, { name: "Chad", h: "235-TD-0", g: "235", i: "TD" }, { name: "Chile", h: "56-CL-0", g: "56", i: "CL" }, { name: "China", h: "86-CN-0", g: "86", i: "CN" }, { name: "Christmas Island", h: "61-CX-0", g: "61", i: "CX" }, { name: "Cocos [Keeling] Islands", h: "61-CC-0", g: "61", i: "CC" }, { name: "Colombia", h: "57-CO-0", g: "57", i: "CO" }, { name: "Comoros", h: "269-KM-0", g: "269", i: "KM" }, { name: "Democratic Republic Congo", h: "243-CD-0", g: "243", i: "CD" }, { name: "Republic of Congo", h: "242-CG-0", g: "242", i: "CG" }, { name: "Cook Islands", h: "682-CK-0", g: "682", i: "CK" },
        { name: "Costa Rica", h: "506-CR-0", g: "506", i: "CR" }, { name: "C\u00f4te d'Ivoire", h: "225-CI-0", g: "225", i: "CI" }, { name: "Croatia", h: "385-HR-0", g: "385", i: "HR" }, { name: "Cuba", h: "53-CU-0", g: "53", i: "CU" }, { name: "Cura\u00e7ao", h: "599-CW-0", g: "599", i: "CW" }, { name: "Cyprus", h: "357-CY-0", g: "357", i: "CY" }, { name: "Czech Republic", h: "420-CZ-0", g: "420", i: "CZ" }, { name: "Denmark", h: "45-DK-0", g: "45", i: "DK" }, { name: "Djibouti", h: "253-DJ-0", g: "253", i: "DJ" }, { name: "Dominica", h: "1-DM-0", g: "1", i: "DM" }, {
            name: "Dominican Republic",
            h: "1-DO-0",
            g: "1",
            i: "DO"
        }, { name: "East Timor", h: "670-TL-0", g: "670", i: "TL" }, { name: "Ecuador", h: "593-EC-0", g: "593", i: "EC" }, { name: "Egypt", h: "20-EG-0", g: "20", i: "EG" }, { name: "El Salvador", h: "503-SV-0", g: "503", i: "SV" }, { name: "Equatorial Guinea", h: "240-GQ-0", g: "240", i: "GQ" }, { name: "Eritrea", h: "291-ER-0", g: "291", i: "ER" }, { name: "Estonia", h: "372-EE-0", g: "372", i: "EE" }, { name: "Ethiopia", h: "251-ET-0", g: "251", i: "ET" }, { name: "Falkland Islands [Islas Malvinas]", h: "500-FK-0", g: "500", i: "FK" }, {
            name: "Faroe Islands",
            h: "298-FO-0",
            g: "298",
            i: "FO"
        }, { name: "Fiji", h: "679-FJ-0", g: "679", i: "FJ" }, { name: "Finland", h: "358-FI-0", g: "358", i: "FI" }, { name: "France", h: "33-FR-0", g: "33", i: "FR" }, { name: "French Guiana", h: "594-GF-0", g: "594", i: "GF" }, { name: "French Polynesia", h: "689-PF-0", g: "689", i: "PF" }, { name: "Gabon", h: "241-GA-0", g: "241", i: "GA" }, { name: "Gambia", h: "220-GM-0", g: "220", i: "GM" }, { name: "Georgia", h: "995-GE-0", g: "995", i: "GE" }, { name: "Germany", h: "49-DE-0", g: "49", i: "DE" }, { name: "Ghana", h: "233-GH-0", g: "233", i: "GH" }, { name: "Gibraltar", h: "350-GI-0", g: "350", i: "GI" },
        { name: "Greece", h: "30-GR-0", g: "30", i: "GR" }, { name: "Greenland", h: "299-GL-0", g: "299", i: "GL" }, { name: "Grenada", h: "1-GD-0", g: "1", i: "GD" }, { name: "Guadeloupe", h: "590-GP-0", g: "590", i: "GP" }, { name: "Guam", h: "1-GU-0", g: "1", i: "GU" }, { name: "Guatemala", h: "502-GT-0", g: "502", i: "GT" }, { name: "Guernsey", h: "44-GG-0", g: "44", i: "GG" }, { name: "Guinea Conakry", h: "224-GN-0", g: "224", i: "GN" }, { name: "Guinea-Bissau", h: "245-GW-0", g: "245", i: "GW" }, { name: "Guyana", h: "592-GY-0", g: "592", i: "GY" }, { name: "Haiti", h: "509-HT-0", g: "509", i: "HT" }, {
            name: "Heard Island and McDonald Islands",
            h: "672-HM-0",
            g: "672",
            i: "HM"
        }, { name: "Honduras", h: "504-HN-0", g: "504", i: "HN" }, { name: "Hong Kong", h: "852-HK-0", g: "852", i: "HK" }, { name: "Hungary", h: "36-HU-0", g: "36", i: "HU" }, { name: "Iceland", h: "354-IS-0", g: "354", i: "IS" }, { name: "India", h: "91-IN-0", g: "91", i: "IN" }, { name: "Indonesia", h: "62-ID-0", g: "62", i: "ID" }, { name: "Iran", h: "98-IR-0", g: "98", i: "IR" }, { name: "Iraq", h: "964-IQ-0", g: "964", i: "IQ" }, { name: "Ireland", h: "353-IE-0", g: "353", i: "IE" }, { name: "Isle of Man", h: "44-IM-0", g: "44", i: "IM" }, {
            name: "Israel",
            h: "972-IL-0",
            g: "972",
            i: "IL"
        }, { name: "Italy", h: "39-IT-0", g: "39", i: "IT" }, { name: "Jamaica", h: "1-JM-0", g: "1", i: "JM" }, { name: "Japan", h: "81-JP-0", g: "81", i: "JP" }, { name: "Jersey", h: "44-JE-0", g: "44", i: "JE" }, { name: "Jordan", h: "962-JO-0", g: "962", i: "JO" }, { name: "Kazakhstan", h: "7-KZ-0", g: "7", i: "KZ" }, { name: "Kenya", h: "254-KE-0", g: "254", i: "KE" }, { name: "Kiribati", h: "686-KI-0", g: "686", i: "KI" }, { name: "Kosovo", h: "377-XK-0", g: "377", i: "XK" }, { name: "Kosovo", h: "381-XK-0", g: "381", i: "XK" }, { name: "Kosovo", h: "386-XK-0", g: "386", i: "XK" }, {
            name: "Kuwait",
            h: "965-KW-0",
            g: "965",
            i: "KW"
        }, { name: "Kyrgyzstan", h: "996-KG-0", g: "996", i: "KG" }, { name: "Laos", h: "856-LA-0", g: "856", i: "LA" }, { name: "Latvia", h: "371-LV-0", g: "371", i: "LV" }, { name: "Lebanon", h: "961-LB-0", g: "961", i: "LB" }, { name: "Lesotho", h: "266-LS-0", g: "266", i: "LS" }, { name: "Liberia", h: "231-LR-0", g: "231", i: "LR" }, { name: "Libya", h: "218-LY-0", g: "218", i: "LY" }, { name: "Liechtenstein", h: "423-LI-0", g: "423", i: "LI" }, { name: "Lithuania", h: "370-LT-0", g: "370", i: "LT" }, { name: "Luxembourg", h: "352-LU-0", g: "352", i: "LU" }, {
            name: "Macau",
            h: "853-MO-0",
            g: "853",
            i: "MO"
        }, { name: "Macedonia", h: "389-MK-0", g: "389", i: "MK" }, { name: "Madagascar", h: "261-MG-0", g: "261", i: "MG" }, { name: "Malawi", h: "265-MW-0", g: "265", i: "MW" }, { name: "Malaysia", h: "60-MY-0", g: "60", i: "MY" }, { name: "Maldives", h: "960-MV-0", g: "960", i: "MV" }, { name: "Mali", h: "223-ML-0", g: "223", i: "ML" }, { name: "Malta", h: "356-MT-0", g: "356", i: "MT" }, { name: "Marshall Islands", h: "692-MH-0", g: "692", i: "MH" }, { name: "Martinique", h: "596-MQ-0", g: "596", i: "MQ" }, { name: "Mauritania", h: "222-MR-0", g: "222", i: "MR" }, {
            name: "Mauritius",
            h: "230-MU-0",
            g: "230",
            i: "MU"
        }, { name: "Mayotte", h: "262-YT-0", g: "262", i: "YT" }, { name: "Mexico", h: "52-MX-0", g: "52", i: "MX" }, { name: "Micronesia", h: "691-FM-0", g: "691", i: "FM" }, { name: "Moldova", h: "373-MD-0", g: "373", i: "MD" }, { name: "Monaco", h: "377-MC-0", g: "377", i: "MC" }, { name: "Mongolia", h: "976-MN-0", g: "976", i: "MN" }, { name: "Montenegro", h: "382-ME-0", g: "382", i: "ME" }, { name: "Montserrat", h: "1-MS-0", g: "1", i: "MS" }, { name: "Morocco", h: "212-MA-0", g: "212", i: "MA" }, { name: "Mozambique", h: "258-MZ-0", g: "258", i: "MZ" }, {
            name: "Myanmar [Burma]",
            h: "95-MM-0",
            g: "95",
            i: "MM"
        }, { name: "Namibia", h: "264-NA-0", g: "264", i: "NA" }, { name: "Nauru", h: "674-NR-0", g: "674", i: "NR" }, { name: "Nepal", h: "977-NP-0", g: "977", i: "NP" }, { name: "Netherlands", h: "31-NL-0", g: "31", i: "NL" }, { name: "New Caledonia", h: "687-NC-0", g: "687", i: "NC" }, { name: "New Zealand", h: "64-NZ-0", g: "64", i: "NZ" }, { name: "Nicaragua", h: "505-NI-0", g: "505", i: "NI" }, { name: "Niger", h: "227-NE-0", g: "227", i: "NE" }, { name: "Nigeria", h: "234-NG-0", g: "234", i: "NG" }, { name: "Niue", h: "683-NU-0", g: "683", i: "NU" }, {
            name: "Norfolk Island",
            h: "672-NF-0",
            g: "672",
            i: "NF"
        }, { name: "North Korea", h: "850-KP-0", g: "850", i: "KP" }, { name: "Northern Mariana Islands", h: "1-MP-0", g: "1", i: "MP" }, { name: "Norway", h: "47-NO-0", g: "47", i: "NO" }, { name: "Oman", h: "968-OM-0", g: "968", i: "OM" }, { name: "Pakistan", h: "92-PK-0", g: "92", i: "PK" }, { name: "Palau", h: "680-PW-0", g: "680", i: "PW" }, { name: "Palestinian Territories", h: "970-PS-0", g: "970", i: "PS" }, { name: "Panama", h: "507-PA-0", g: "507", i: "PA" }, { name: "Papua New Guinea", h: "675-PG-0", g: "675", i: "PG" }, { name: "Paraguay", h: "595-PY-0", g: "595", i: "PY" }, {
            name: "Peru",
            h: "51-PE-0",
            g: "51",
            i: "PE"
        }, { name: "Philippines", h: "63-PH-0", g: "63", i: "PH" }, { name: "Poland", h: "48-PL-0", g: "48", i: "PL" }, { name: "Portugal", h: "351-PT-0", g: "351", i: "PT" }, { name: "Puerto Rico", h: "1-PR-0", g: "1", i: "PR" }, { name: "Qatar", h: "974-QA-0", g: "974", i: "QA" }, { name: "R\u00e9union", h: "262-RE-0", g: "262", i: "RE" }, { name: "Romania", h: "40-RO-0", g: "40", i: "RO" }, { name: "Russia", h: "7-RU-0", g: "7", i: "RU" }, { name: "Rwanda", h: "250-RW-0", g: "250", i: "RW" }, { name: "Saint Barth\u00e9lemy", h: "590-BL-0", g: "590", i: "BL" }, {
            name: "Saint Helena",
            h: "290-SH-0",
            g: "290",
            i: "SH"
        }, { name: "St. Kitts", h: "1-KN-0", g: "1", i: "KN" }, { name: "St. Lucia", h: "1-LC-0", g: "1", i: "LC" }, { name: "Saint Martin", h: "590-MF-0", g: "590", i: "MF" }, { name: "Saint Pierre and Miquelon", h: "508-PM-0", g: "508", i: "PM" }, { name: "St. Vincent", h: "1-VC-0", g: "1", i: "VC" }, { name: "Samoa", h: "685-WS-0", g: "685", i: "WS" }, { name: "San Marino", h: "378-SM-0", g: "378", i: "SM" }, { name: "S\u00e3o Tom\u00e9 and Pr\u00edncipe", h: "239-ST-0", g: "239", i: "ST" }, { name: "Saudi Arabia", h: "966-SA-0", g: "966", i: "SA" }, {
            name: "Senegal",
            h: "221-SN-0",
            g: "221",
            i: "SN"
        }, { name: "Serbia", h: "381-RS-0", g: "381", i: "RS" }, { name: "Seychelles", h: "248-SC-0", g: "248", i: "SC" }, { name: "Sierra Leone", h: "232-SL-0", g: "232", i: "SL" }, { name: "Singapore", h: "65-SG-0", g: "65", i: "SG" }, { name: "Sint Maarten", h: "1-SX-0", g: "1", i: "SX" }, { name: "Slovakia", h: "421-SK-0", g: "421", i: "SK" }, { name: "Slovenia", h: "386-SI-0", g: "386", i: "SI" }, { name: "Solomon Islands", h: "677-SB-0", g: "677", i: "SB" }, { name: "Somalia", h: "252-SO-0", g: "252", i: "SO" }, { name: "South Africa", h: "27-ZA-0", g: "27", i: "ZA" }, {
            name: "South Georgia and the South Sandwich Islands",
            h: "500-GS-0",
            g: "500",
            i: "GS"
        }, { name: "South Korea", h: "82-KR-0", g: "82", i: "KR" }, { name: "South Sudan", h: "211-SS-0", g: "211", i: "SS" }, { name: "Spain", h: "34-ES-0", g: "34", i: "ES" }, { name: "Sri Lanka", h: "94-LK-0", g: "94", i: "LK" }, { name: "Sudan", h: "249-SD-0", g: "249", i: "SD" }, { name: "Suriname", h: "597-SR-0", g: "597", i: "SR" }, { name: "Svalbard and Jan Mayen", h: "47-SJ-0", g: "47", i: "SJ" }, { name: "Swaziland", h: "268-SZ-0", g: "268", i: "SZ" }, { name: "Sweden", h: "46-SE-0", g: "46", i: "SE" }, { name: "Switzerland", h: "41-CH-0", g: "41", i: "CH" }, {
            name: "Syria",
            h: "963-SY-0",
            g: "963",
            i: "SY"
        }, { name: "Taiwan", h: "886-TW-0", g: "886", i: "TW" }, { name: "Tajikistan", h: "992-TJ-0", g: "992", i: "TJ" }, { name: "Tanzania", h: "255-TZ-0", g: "255", i: "TZ" }, { name: "Thailand", h: "66-TH-0", g: "66", i: "TH" }, { name: "Togo", h: "228-TG-0", g: "228", i: "TG" }, { name: "Tokelau", h: "690-TK-0", g: "690", i: "TK" }, { name: "Tonga", h: "676-TO-0", g: "676", i: "TO" }, { name: "Trinidad/Tobago", h: "1-TT-0", g: "1", i: "TT" }, { name: "Tunisia", h: "216-TN-0", g: "216", i: "TN" }, { name: "Turkey", h: "90-TR-0", g: "90", i: "TR" }, {
            name: "Turkmenistan",
            h: "993-TM-0",
            g: "993",
            i: "TM"
        }, { name: "Turks and Caicos Islands", h: "1-TC-0", g: "1", i: "TC" }, { name: "Tuvalu", h: "688-TV-0", g: "688", i: "TV" }, { name: "U.S. Virgin Islands", h: "1-VI-0", g: "1", i: "VI" }, { name: "Uganda", h: "256-UG-0", g: "256", i: "UG" }, { name: "Ukraine", h: "380-UA-0", g: "380", i: "UA" }, { name: "United Arab Emirates", h: "971-AE-0", g: "971", i: "AE" }, { name: "United Kingdom", h: "44-GB-0", g: "44", i: "GB" }, { name: "United States", h: "1-US-0", g: "1", i: "US" }, { name: "Uruguay", h: "598-UY-0", g: "598", i: "UY" }, { name: "Uzbekistan", h: "998-UZ-0", g: "998", i: "UZ" },
        { name: "Vanuatu", h: "678-VU-0", g: "678", i: "VU" }, { name: "Vatican City", h: "379-VA-0", g: "379", i: "VA" }, { name: "Venezuela", h: "58-VE-0", g: "58", i: "VE" }, { name: "Vietnam", h: "84-VN-0", g: "84", i: "VN" }, { name: "Wallis and Futuna", h: "681-WF-0", g: "681", i: "WF" }, { name: "Western Sahara", h: "212-EH-0", g: "212", i: "EH" }, { name: "Yemen", h: "967-YE-0", g: "967", i: "YE" }, { name: "Zambia", h: "260-ZM-0", g: "260", i: "ZM" }, { name: "Zimbabwe", h: "263-ZW-0", g: "263", i: "ZW" }
    ];
    Sd(Pd);
    var Td = new Nd(Pd);

    function Ud(a) { return "string" == typeof a.className ? a.className : a.getAttribute && a.getAttribute("class") || "" }

    function Vd(a, b) { "string" == typeof a.className ? a.className = b : a.setAttribute && a.setAttribute("class", b) }

    function Wd(a, b) { return a.classList ? a.classList.contains(b) : Ma(a.classList ? a.classList : Ud(a).match(/\S+/g) || [], b) }

    function Xd(a, b) {
        if (a.classList) a.classList.add(b);
        else if (!Wd(a, b)) {
            var c = Ud(a);
            Vd(a, c + (0 < c.length ? " " + b : b))
        }
    }

    function Yd(a, b) { a.classList ? a.classList.remove(b) : Wd(a, b) && Vd(a, Ja(a.classList ? a.classList : Ud(a).match(/\S+/g) || [], function(c) { return c != b }).join(" ")) };
    try {
        (new self.OffscreenCanvas(0, 0)).getContext("2d")
    } catch (a) {}
    var Zd = !z || 9 <= Number(kd);

    function $d(a, b) {
        this.x = void 0 !== a ? a : 0;
        this.y = void 0 !== b ? b : 0
    }
    h = $d.prototype;
    h.clone = function() { return new $d(this.x, this.y) };
    h.toString = function() { return "(" + this.x + ", " + this.y + ")" };
    h.ceil = function() {
        this.x = Math.ceil(this.x);
        this.y = Math.ceil(this.y);
        return this
    };
    h.floor = function() {
        this.x = Math.floor(this.x);
        this.y = Math.floor(this.y);
        return this
    };
    h.round = function() {
        this.x = Math.round(this.x);
        this.y = Math.round(this.y);
        return this
    };
    h.translate = function(a, b) { a instanceof $d ? (this.x += a.x, this.y += a.y) : (this.x += Number(a), "number" === typeof b && (this.y += b)); return this };
    h.scale = function(a, b) {
        this.x *= a;
        this.y *= "number" === typeof b ? b : a;
        return this
    };

    function ae(a, b) {
        this.width = a;
        this.height = b
    }
    h = ae.prototype;
    h.clone = function() { return new ae(this.width, this.height) };
    h.toString = function() { return "(" + this.width + " x " + this.height + ")" };
    h.aspectRatio = function() { return this.width / this.height };
    h.Fb = function() { return !(this.width * this.height) };
    h.ceil = function() {
        this.width = Math.ceil(this.width);
        this.height = Math.ceil(this.height);
        return this
    };
    h.floor = function() {
        this.width = Math.floor(this.width);
        this.height = Math.floor(this.height);
        return this
    };
    h.round = function() {
        this.width = Math.round(this.width);
        this.height = Math.round(this.height);
        return this
    };
    h.scale = function(a, b) {
        this.width *= a;
        this.height *= "number" === typeof b ? b : a;
        return this
    };

    function be(a) { return a ? new ce(de(a)) : Da || (Da = new ce) }

    function ee(a, b) { var c = b || document; return c.querySelectorAll && c.querySelector ? c.querySelectorAll("." + a) : fe(document, a, b) }

    function ge(a, b) {
        var c = b || document;
        if (c.getElementsByClassName) a = c.getElementsByClassName(a)[0];
        else {
            c = document;
            var d = b || c;
            a = d.querySelectorAll && d.querySelector && a ? d.querySelector(a ? "." + a : "") : fe(c, a, b)[0] || null
        }
        return a || null
    }

    function fe(a, b, c) {
        var d;
        a = c || a;
        if (a.querySelectorAll && a.querySelector && b) return a.querySelectorAll(b ? "." + b : "");
        if (b && a.getElementsByClassName) { var e = a.getElementsByClassName(b); return e }
        e = a.getElementsByTagName("*");
        if (b) {
            var f = {};
            for (c = d = 0; a = e[c]; c++) { var g = a.className; "function" == typeof g.split && Ma(g.split(/\s+/), b) && (f[d++] = a) }
            f.length = d;
            return f
        }
        return e
    }

    function he(a, b) { Va(b, function(c, d) { c && "object" == typeof c && c.Ua && (c = c.Oa()); "style" == d ? a.style.cssText = c : "class" == d ? a.className = c : "for" == d ? a.htmlFor = c : ie.hasOwnProperty(d) ? a.setAttribute(ie[d], c) : 0 == d.lastIndexOf("aria-", 0) || 0 == d.lastIndexOf("data-", 0) ? a.setAttribute(d, c) : a[d] = c }) }
    var ie = { cellpadding: "cellPadding", cellspacing: "cellSpacing", colspan: "colSpan", frameborder: "frameBorder", height: "height", maxlength: "maxLength", nonce: "nonce", role: "role", rowspan: "rowSpan", type: "type", usemap: "useMap", valign: "vAlign", width: "width" };

    function je(a) { return a.scrollingElement ? a.scrollingElement : Zc || "CSS1Compat" != a.compatMode ? a.body || a.documentElement : a.documentElement }

    function ke(a, b, c, d) {
        function e(k) { k && b.appendChild("string" === typeof k ? a.createTextNode(k) : k) }
        for (; d < c.length; d++) {
            var f = c[d];
            if (!xa(f) || t(f) && 0 < f.nodeType) e(f);
            else {
                a: {
                    if (f && "number" == typeof f.length) { if (t(f)) { var g = "function" == typeof f.item || "string" == typeof f.item; break a } if ("function" === typeof f) { g = "function" == typeof f.item; break a } }
                    g = !1
                }
                Ha(g ? Sa(f) : f, e)
            }
        }
    }

    function le(a, b) { b = String(b); "application/xhtml+xml" === a.contentType && (b = b.toLowerCase()); return a.createElement(b) }

    function me(a) { return a && a.parentNode ? a.parentNode.removeChild(a) : null }

    function de(a) { return 9 == a.nodeType ? a : a.ownerDocument || a.document }

    function ne(a, b) {
        if ("textContent" in a) a.textContent = b;
        else if (3 == a.nodeType) a.data = String(b);
        else if (a.firstChild && 3 == a.firstChild.nodeType) {
            for (; a.lastChild != a.firstChild;) a.removeChild(a.lastChild);
            a.firstChild.data = String(b)
        } else {
            for (var c; c = a.firstChild;) a.removeChild(c);
            a.appendChild(de(a).createTextNode(String(b)))
        }
    }

    function oe(a, b) { return b ? pe(a, function(c) { return !b || "string" === typeof c.className && Ma(c.className.split(/\s+/), b) }) : null }

    function pe(a, b) {
        for (var c = 0; a;) {
            if (b(a)) return a;
            a = a.parentNode;
            c++
        }
        return null
    }

    function ce(a) { this.ha = a || r.document || document }
    h = ce.prototype;
    h.Cb = be;
    h.ia = function() {};
    h.getElementsByTagName = function(a, b) { return (b || this.ha).getElementsByTagName(String(a)) };
    h.Fc = function(a, b) { return ee(a, b || this.ha) };
    h.A = function(a, b) { return ge(a, b || this.ha) };
    h.vd = function(a, b, c) {
        var d = this.ha,
            e = arguments,
            f = String(e[0]),
            g = e[1];
        if (!Zd && g && (g.name || g.type)) {
            f = ["<", f];
            g.name && f.push(' name="', ac(g.name), '"');
            if (g.type) {
                f.push(' type="', ac(g.type), '"');
                var k = {};
                $a(k, g);
                delete k.type;
                g = k
            }
            f.push(">");
            f = f.join("")
        }
        f = le(d, f);
        g && ("string" === typeof g ? f.className = g : Array.isArray(g) ? f.className = g.join(" ") : he(f, g));
        2 < e.length && ke(d, f, e, 2)
    };
    h.createElement = function(a) { return le(this.ha, a) };
    h.createTextNode = function(a) { return this.ha.createTextNode(String(a)) };
    h.getWindow = function() { var a = this.ha; return a.parentWindow || a.defaultView };
    h.appendChild = function(a, b) { a.appendChild(b) };
    h.append = function(a, b) { ke(de(a), a, arguments, 1) };
    h.canHaveChildren = function(a) {
        if (1 != a.nodeType) return !1;
        switch (a.tagName) {
            case "APPLET":
            case "AREA":
            case "BASE":
            case "BR":
            case "COL":
            case "COMMAND":
            case "EMBED":
            case "FRAME":
            case "HR":
            case "IMG":
            case "INPUT":
            case "IFRAME":
            case "ISINDEX":
            case "KEYGEN":
            case "LINK":
            case "NOFRAMES":
            case "NOSCRIPT":
            case "META":
            case "OBJECT":
            case "PARAM":
            case "SCRIPT":
            case "SOURCE":
            case "STYLE":
            case "TRACK":
            case "WBR":
                return !1
        }
        return !0
    };
    h.removeNode = me;
    h.contains = function(a, b) { if (!a || !b) return !1; if (a.contains && 1 == b.nodeType) return a == b || a.contains(b); if ("undefined" != typeof a.compareDocumentPosition) return a == b || !!(a.compareDocumentPosition(b) & 16); for (; b && a != b;) b = b.parentNode; return b == a };

    function qe(a, b, c) {
        b || (b = {});
        c = c || window;
        var d = a instanceof vb ? a : Cb("undefined" != typeof a.href ? a.href : String(a)) || Fb;
        a = b.target || a.target;
        var e = [];
        for (f in b) switch (f) {
            case "width":
            case "height":
            case "top":
            case "left":
                e.push(f + "=" + b[f]);
                break;
            case "target":
            case "noopener":
            case "noreferrer":
                break;
            default:
                e.push(f + "=" + (b[f] ? 1 : 0))
        }
        var f = e.join(",");
        (y("iPhone") && !y("iPod") && !y("iPad") || y("iPad") || y("iPod")) && c.navigator && c.navigator.standalone && a && "_self" != a ? (f = le(document, "A"), Ub(f, "HTMLAnchorElement"),
            d = d instanceof vb ? d : Eb(d), f.href = xb(d), f.setAttribute("target", a), b.noreferrer && f.setAttribute("rel", "noreferrer"), b = document.createEvent("MouseEvent"), b.initMouseEvent("click", !0, !0, c, 1), f.dispatchEvent(b), c = {}) : b.noreferrer ? (c = $b("", c, a, f), b = xb(d), c && (Xc && -1 != b.indexOf(";") && (b = "'" + b.replace(/'/g, "%27") + "'"), c.opener = null, b = '<meta name="referrer" content="no-referrer"><meta http-equiv="refresh" content="0; url=' + ac(b) + '">', b = Sb(b, null), (d = c.document) && d.write && (d.write(Qb(b)), d.close()))) : (c = $b(d,
            c, a, f)) && b.noopener && (c.opener = null);
        return c
    };

    function re(a) {
        var b = a.type;
        if ("string" === typeof b) switch (b.toLowerCase()) {
            case "checkbox":
            case "radio":
                return a.checked ? a.value : null;
            case "select-one":
                return b = a.selectedIndex, 0 <= b ? a.options[b].value : null;
            case "select-multiple":
                b = [];
                for (var c, d = 0; c = a.options[d]; d++) c.selected && b.push(c.value);
                return b.length ? b : null
        }
        return null != a.value ? a.value : null
    }

    function se(a, b) {
        var c = a.type;
        switch ("string" === typeof c && c.toLowerCase()) {
            case "checkbox":
            case "radio":
                a.checked = b;
                break;
            case "select-one":
                a.selectedIndex = -1;
                if ("string" === typeof b)
                    for (var d = 0; c = a.options[d]; d++)
                        if (c.value == b) { c.selected = !0; break }
                break;
            case "select-multiple":
                "string" === typeof b && (b = [b]);
                for (d = 0; c = a.options[d]; d++)
                    if (c.selected = !1, b)
                        for (var e, f = 0; e = b[f]; f++) c.value == e && (c.selected = !0);
                break;
            default:
                a.value = null != b ? b : ""
        }
    };
    var te = function() {
        if (!r.addEventListener || !Object.defineProperty) return !1;
        var a = !1,
            b = Object.defineProperty({}, "passive", { get: function() { a = !0 } });
        try { r.addEventListener("test", ua, b), r.removeEventListener("test", ua, b) } catch (c) {}
        return a
    }();

    function ue(a) { a && "function" == typeof a.m && a.m() };

    function ve() {
        this.Ab = this.Ab;
        this.sb = this.sb
    }
    ve.prototype.Ab = !1;
    ve.prototype.isDisposed = function() { return this.Ab };
    ve.prototype.m = function() { this.Ab || (this.Ab = !0, this.l()) };

    function we(a, b) { a.Ab ? b() : (a.sb || (a.sb = []), a.sb.push(b)) }
    ve.prototype.l = function() {
        if (this.sb)
            for (; this.sb.length;) this.sb.shift()()
    };

    function xe(a, b) {
        this.type = a;
        this.currentTarget = this.target = b;
        this.defaultPrevented = this.mc = !1
    }
    xe.prototype.stopPropagation = function() { this.mc = !0 };
    xe.prototype.preventDefault = function() { this.defaultPrevented = !0 };

    function ye(a, b) {
        xe.call(this, a ? a.type : "");
        this.relatedTarget = this.currentTarget = this.target = null;
        this.button = this.screenY = this.screenX = this.clientY = this.clientX = this.offsetY = this.offsetX = 0;
        this.key = "";
        this.charCode = this.keyCode = 0;
        this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1;
        this.state = null;
        this.pointerId = 0;
        this.pointerType = "";
        this.La = null;
        a && this.init(a, b)
    }
    x(ye, xe);
    var ze = ld({ 2: "touch", 3: "pen", 4: "mouse" });
    ye.prototype.init = function(a, b) {
        var c = this.type = a.type,
            d = a.changedTouches && a.changedTouches.length ? a.changedTouches[0] : null;
        this.target = a.target || a.srcElement;
        this.currentTarget = b;
        if (b = a.relatedTarget) {
            if (Yc) {
                a: {
                    try { Sc(b.nodeName); var e = !0; break a } catch (f) {}
                    e = !1
                }
                e || (b = null)
            }
        } else "mouseover" == c ? b = a.fromElement : "mouseout" == c && (b = a.toElement);
        this.relatedTarget = b;
        d ? (this.clientX = void 0 !== d.clientX ? d.clientX : d.pageX, this.clientY = void 0 !== d.clientY ? d.clientY : d.pageY, this.screenX = d.screenX || 0, this.screenY =
            d.screenY || 0) : (this.offsetX = Zc || void 0 !== a.offsetX ? a.offsetX : a.layerX, this.offsetY = Zc || void 0 !== a.offsetY ? a.offsetY : a.layerY, this.clientX = void 0 !== a.clientX ? a.clientX : a.pageX, this.clientY = void 0 !== a.clientY ? a.clientY : a.pageY, this.screenX = a.screenX || 0, this.screenY = a.screenY || 0);
        this.button = a.button;
        this.keyCode = a.keyCode || 0;
        this.key = a.key || "";
        this.charCode = a.charCode || ("keypress" == c ? a.keyCode : 0);
        this.ctrlKey = a.ctrlKey;
        this.altKey = a.altKey;
        this.shiftKey = a.shiftKey;
        this.metaKey = a.metaKey;
        this.pointerId =
            a.pointerId || 0;
        this.pointerType = "string" === typeof a.pointerType ? a.pointerType : ze[a.pointerType] || "";
        this.state = a.state;
        this.La = a;
        a.defaultPrevented && ye.$.preventDefault.call(this)
    };
    ye.prototype.stopPropagation = function() {
        ye.$.stopPropagation.call(this);
        this.La.stopPropagation ? this.La.stopPropagation() : this.La.cancelBubble = !0
    };
    ye.prototype.preventDefault = function() {
        ye.$.preventDefault.call(this);
        var a = this.La;
        a.preventDefault ? a.preventDefault() : a.returnValue = !1
    };
    var Ae = "closure_listenable_" + (1E6 * Math.random() | 0);

    function Be(a) { return !(!a || !a[Ae]) };
    var Ce = 0;

    function De(a, b, c, d, e) {
        this.listener = a;
        this.Xc = null;
        this.src = b;
        this.type = c;
        this.capture = !!d;
        this.Mc = e;
        this.key = ++Ce;
        this.oc = this.xc = !1
    }

    function Ee(a) {
        a.oc = !0;
        a.listener = null;
        a.Xc = null;
        a.src = null;
        a.Mc = null
    };

    function Fe(a) {
        this.src = a;
        this.ka = {};
        this.rc = 0
    }
    h = Fe.prototype;
    h.add = function(a, b, c, d, e) {
        var f = a.toString();
        a = this.ka[f];
        a || (a = this.ka[f] = [], this.rc++);
        var g = Ge(a, b, d, e); - 1 < g ? (b = a[g], c || (b.xc = !1)) : (b = new De(b, this.src, f, !!d, e), b.xc = c, a.push(b));
        return b
    };
    h.remove = function(a, b, c, d) {
        a = a.toString();
        if (!(a in this.ka)) return !1;
        var e = this.ka[a];
        b = Ge(e, b, c, d);
        return -1 < b ? (Ee(e[b]), Oa(e, b), 0 == e.length && (delete this.ka[a], this.rc--), !0) : !1
    };

    function He(a, b) {
        var c = b.type;
        c in a.ka && Na(a.ka[c], b) && (Ee(b), 0 == a.ka[c].length && (delete a.ka[c], a.rc--))
    }
    h.Yc = function(a) {
        a = a && a.toString();
        var b = 0,
            c;
        for (c in this.ka)
            if (!a || c == a) {
                for (var d = this.ka[c], e = 0; e < d.length; e++) ++b, Ee(d[e]);
                delete this.ka[c];
                this.rc--
            }
    };
    h.Vb = function(a, b, c, d) {
        a = this.ka[a.toString()];
        var e = -1;
        a && (e = Ge(a, b, c, d));
        return -1 < e ? a[e] : null
    };
    h.hasListener = function(a, b) {
        var c = void 0 !== a,
            d = c ? a.toString() : "",
            e = void 0 !== b;
        return Xa(this.ka, function(f) {
            for (var g = 0; g < f.length; ++g)
                if (!(c && f[g].type != d || e && f[g].capture != b)) return !0;
            return !1
        })
    };

    function Ge(a, b, c, d) { for (var e = 0; e < a.length; ++e) { var f = a[e]; if (!f.oc && f.listener == b && f.capture == !!c && f.Mc == d) return e } return -1 };
    var Ie = "closure_lm_" + (1E6 * Math.random() | 0),
        Je = {},
        Ke = 0;

    function Le(a, b, c, d, e) {
        if (d && d.once) return Me(a, b, c, d, e);
        if (Array.isArray(b)) { for (var f = 0; f < b.length; f++) Le(a, b[f], c, d, e); return null }
        c = Ne(c);
        return Be(a) ? a.listen(b, c, t(d) ? !!d.capture : !!d, e) : Oe(a, b, c, !1, d, e)
    }

    function Oe(a, b, c, d, e, f) {
        if (!b) throw Error("Invalid event type");
        var g = t(e) ? !!e.capture : !!e,
            k = Pe(a);
        k || (a[Ie] = k = new Fe(a));
        c = k.add(b, c, d, g, f);
        if (c.Xc) return c;
        d = Re();
        c.Xc = d;
        d.src = a;
        d.listener = c;
        if (a.addEventListener) te || (e = g), void 0 === e && (e = !1), a.addEventListener(b.toString(), d, e);
        else if (a.attachEvent) a.attachEvent(Se(b.toString()), d);
        else if (a.addListener && a.removeListener) a.addListener(d);
        else throw Error("addEventListener and attachEvent are unavailable.");
        Ke++;
        return c
    }

    function Re() {
        function a(c) { return b.call(a.src, a.listener, c) }
        var b = Te;
        return a
    }

    function Me(a, b, c, d, e) {
        if (Array.isArray(b)) { for (var f = 0; f < b.length; f++) Me(a, b[f], c, d, e); return null }
        c = Ne(c);
        return Be(a) ? a.Ze(b, c, t(d) ? !!d.capture : !!d, e) : Oe(a, b, c, !0, d, e)
    }

    function Ue(a, b, c, d, e) {
        if (Array.isArray(b))
            for (var f = 0; f < b.length; f++) Ue(a, b[f], c, d, e);
        else d = t(d) ? !!d.capture : !!d, c = Ne(c), Be(a) ? a.ge(b, c, d, e) : a && (a = Pe(a)) && (b = a.Vb(b, c, d, e)) && Ve(b)
    }

    function Ve(a) {
        if ("number" !== typeof a && a && !a.oc) {
            var b = a.src;
            if (Be(b)) He(b.Ka, a);
            else {
                var c = a.type,
                    d = a.Xc;
                b.removeEventListener ? b.removeEventListener(c, d, a.capture) : b.detachEvent ? b.detachEvent(Se(c), d) : b.addListener && b.removeListener && b.removeListener(d);
                Ke--;
                (c = Pe(b)) ? (He(c, a), 0 == c.rc && (c.src = null, b[Ie] = null)) : Ee(a)
            }
        }
    }

    function Se(a) { return a in Je ? Je[a] : Je[a] = "on" + a }

    function Te(a, b) {
        if (a.oc) a = !0;
        else {
            b = new ye(b, this);
            var c = a.listener,
                d = a.Mc || a.src;
            a.xc && Ve(a);
            a = c.call(d, b)
        }
        return a
    }

    function Pe(a) { a = a[Ie]; return a instanceof Fe ? a : null }
    var We = "__closure_events_fn_" + (1E9 * Math.random() >>> 0);

    function Ne(a) {
        if ("function" === typeof a) return a;
        a[We] || (a[We] = function(b) { return a.handleEvent(b) });
        return a[We]
    };

    function Xe() {
        ve.call(this);
        this.Ka = new Fe(this);
        this.Xf = this;
        this.Wc = null
    }
    x(Xe, ve);
    Xe.prototype[Ae] = !0;
    h = Xe.prototype;
    h.be = function(a) { this.Wc = a };
    h.addEventListener = function(a, b, c, d) { Le(this, a, b, c, d) };
    h.removeEventListener = function(a, b, c, d) { Ue(this, a, b, c, d) };
    h.dispatchEvent = function(a) {
        var b, c = this.Wc;
        if (c)
            for (b = []; c; c = c.Wc) b.push(c);
        c = this.Xf;
        var d = a.type || a;
        if ("string" === typeof a) a = new xe(a, c);
        else if (a instanceof xe) a.target = a.target || c;
        else {
            var e = a;
            a = new xe(d, c);
            $a(a, e)
        }
        e = !0;
        if (b)
            for (var f = b.length - 1; !a.mc && 0 <= f; f--) {
                var g = a.currentTarget = b[f];
                e = Ye(g, d, !0, a) && e
            }
        a.mc || (g = a.currentTarget = c, e = Ye(g, d, !0, a) && e, a.mc || (e = Ye(g, d, !1, a) && e));
        if (b)
            for (f = 0; !a.mc && f < b.length; f++) g = a.currentTarget = b[f], e = Ye(g, d, !1, a) && e;
        return e
    };
    h.l = function() {
        Xe.$.l.call(this);
        this.Ka && this.Ka.Yc(void 0);
        this.Wc = null
    };
    h.listen = function(a, b, c, d) { return this.Ka.add(String(a), b, !1, c, d) };
    h.Ze = function(a, b, c, d) { return this.Ka.add(String(a), b, !0, c, d) };
    h.ge = function(a, b, c, d) { this.Ka.remove(String(a), b, c, d) };

    function Ye(a, b, c, d) {
        b = a.Ka.ka[String(b)];
        if (!b) return !0;
        b = b.concat();
        for (var e = !0, f = 0; f < b.length; ++f) {
            var g = b[f];
            if (g && !g.oc && g.capture == c) {
                var k = g.listener,
                    n = g.Mc || g.src;
                g.xc && He(a.Ka, g);
                e = !1 !== k.call(n, d) && e
            }
        }
        return e && !d.defaultPrevented
    }
    h.Vb = function(a, b, c, d) { return this.Ka.Vb(String(a), b, c, d) };
    h.hasListener = function(a, b) { return this.Ka.hasListener(void 0 !== a ? String(a) : void 0, b) };

    function Ze(a) {
        if (a.altKey && !a.ctrlKey || a.metaKey || 112 <= a.keyCode && 123 >= a.keyCode) return !1;
        if ($e(a.keyCode)) return !0;
        switch (a.keyCode) {
            case 18:
            case 20:
            case 93:
            case 17:
            case 40:
            case 35:
            case 27:
            case 36:
            case 45:
            case 37:
            case 224:
            case 91:
            case 144:
            case 12:
            case 34:
            case 33:
            case 19:
            case 255:
            case 44:
            case 39:
            case 145:
            case 16:
            case 38:
            case 252:
            case 224:
            case 92:
                return !1;
            case 0:
                return !Yc;
            default:
                return 166 > a.keyCode || 183 < a.keyCode
        }
    }

    function af(a, b, c, d, e, f) {
        if (Zc && !hd("525")) return !0;
        if (ad && e) return $e(a);
        if (e && !d) return !1;
        if (!Yc) { "number" === typeof b && (b = bf(b)); var g = 17 == b || 18 == b || ad && 91 == b; if ((!c || ad) && g || ad && 16 == b && (d || f)) return !1 }
        if ((Zc || Wc) && d && c) switch (a) {
            case 220:
            case 219:
            case 221:
            case 192:
            case 186:
            case 189:
            case 187:
            case 188:
            case 190:
            case 191:
            case 192:
            case 222:
                return !1
        }
        if (z && d && b == a) return !1;
        switch (a) {
            case 13:
                return Yc ? f || e ? !1 : !(c && d) : !0;
            case 27:
                return !(Zc || Wc || Yc)
        }
        return Yc && (d || e || f) ? !1 : $e(a)
    }

    function $e(a) {
        if (48 <= a && 57 >= a || 96 <= a && 106 >= a || 65 <= a && 90 >= a || (Zc || Wc) && 0 == a) return !0;
        switch (a) {
            case 32:
            case 43:
            case 63:
            case 64:
            case 107:
            case 109:
            case 110:
            case 111:
            case 186:
            case 59:
            case 189:
            case 187:
            case 61:
            case 188:
            case 190:
            case 191:
            case 192:
            case 222:
            case 219:
            case 220:
            case 221:
            case 163:
            case 58:
                return !0;
            case 173:
                return Yc;
            default:
                return !1
        }
    }

    function bf(a) {
        if (Yc) a = cf(a);
        else if (ad && Zc) switch (a) {
            case 93:
                a = 91
        }
        return a
    }

    function cf(a) {
        switch (a) {
            case 61:
                return 187;
            case 59:
                return 186;
            case 173:
                return 189;
            case 224:
                return 91;
            case 0:
                return 224;
            default:
                return a
        }
    };

    function df(a) {
        Xe.call(this);
        this.j = a;
        Le(a, "keydown", this.Jc, !1, this);
        Le(a, "click", this.Pe, !1, this)
    }
    x(df, Xe);
    df.prototype.Jc = function(a) {
        (13 == a.keyCode || Zc && 3 == a.keyCode) && ef(this, a)
    };
    df.prototype.Pe = function(a) { ef(this, a) };

    function ef(a, b) { var c = new ff(b); if (a.dispatchEvent(c)) { c = new gf(b); try { a.dispatchEvent(c) } finally { b.stopPropagation() } } }
    df.prototype.l = function() {
        df.$.l.call(this);
        Ue(this.j, "keydown", this.Jc, !1, this);
        Ue(this.j, "click", this.Pe, !1, this);
        delete this.j
    };

    function gf(a) {
        ye.call(this, a.La);
        this.type = "action"
    }
    x(gf, ye);

    function ff(a) {
        ye.call(this, a.La);
        this.type = "beforeaction"
    }
    x(ff, ye);

    function hf(a) {
        Xe.call(this);
        this.j = a;
        a = z ? "focusout" : "blur";
        this.Ug = Le(this.j, z ? "focusin" : "focus", this, !z);
        this.Vg = Le(this.j, a, this, !z)
    }
    x(hf, Xe);
    hf.prototype.handleEvent = function(a) {
        var b = new ye(a.La);
        b.type = "focusin" == a.type || "focus" == a.type ? "focusin" : "focusout";
        this.dispatchEvent(b)
    };
    hf.prototype.l = function() {
        hf.$.l.call(this);
        Ve(this.Ug);
        Ve(this.Vg);
        delete this.j
    };

    function jf(a) {
        ve.call(this);
        this.Hd = a;
        this.K = {}
    }
    x(jf, ve);
    var kf = [];
    h = jf.prototype;
    h.listen = function(a, b, c, d) {
        Array.isArray(b) || (b && (kf[0] = b.toString()), b = kf);
        for (var e = 0; e < b.length; e++) {
            var f = Le(a, b[e], c || this.handleEvent, d || !1, this.Hd || this);
            if (!f) break;
            this.K[f.key] = f
        }
        return this
    };
    h.Ze = function(a, b, c, d) { return lf(this, a, b, c, d) };

    function lf(a, b, c, d, e, f) {
        if (Array.isArray(c))
            for (var g = 0; g < c.length; g++) lf(a, b, c[g], d, e, f);
        else {
            b = Me(b, c, d || a.handleEvent, e, f || a.Hd || a);
            if (!b) return a;
            a.K[b.key] = b
        }
        return a
    }
    h.ge = function(a, b, c, d, e) {
        if (Array.isArray(b))
            for (var f = 0; f < b.length; f++) this.ge(a, b[f], c, d, e);
        else c = c || this.handleEvent, d = t(d) ? !!d.capture : !!d, e = e || this.Hd || this, c = Ne(c), d = !!d, b = Be(a) ? a.Vb(b, c, d, e) : a ? (a = Pe(a)) ? a.Vb(b, c, d, e) : null : null, b && (Ve(b), delete this.K[b.key])
    };
    h.Yc = function() {
        Va(this.K, function(a, b) { this.K.hasOwnProperty(b) && Ve(a) }, this);
        this.K = {}
    };
    h.l = function() {
        jf.$.l.call(this);
        this.Yc()
    };
    h.handleEvent = function() { throw Error("EventHandler.handleEvent not implemented"); };

    function mf(a, b) {
        this.Tg = 100;
        this.pg = a;
        this.nh = b;
        this.Tc = 0;
        this.Nc = null
    }
    mf.prototype.get = function() {
        if (0 < this.Tc) {
            this.Tc--;
            var a = this.Nc;
            this.Nc = a.next;
            a.next = null
        } else a = this.pg();
        return a
    };
    mf.prototype.put = function(a) {
        this.nh(a);
        this.Tc < this.Tg && (this.Tc++, a.next = this.Nc, this.Nc = a)
    };
    var nf;

    function of() {
        var a = r.MessageChannel;
        "undefined" === typeof a && "undefined" !== typeof window && window.postMessage && window.addEventListener && !y("Presto") && (a = function() {
            var e = le(document, "IFRAME");
            e.style.display = "none";
            document.documentElement.appendChild(e);
            var f = e.contentWindow;
            e = f.document;
            e.open();
            e.close();
            var g = "callImmediate" + Math.random(),
                k = "file:" == f.location.protocol ? "*" : f.location.protocol + "//" + f.location.host;
            e = u(function(n) { if (("*" == k || n.origin == k) && n.data == g) this.port1.onmessage() }, this);
            f.addEventListener("message", e, !1);
            this.port1 = {};
            this.port2 = { postMessage: function() { f.postMessage(g, k) } }
        });
        if ("undefined" !== typeof a && !y("Trident") && !y("MSIE")) {
            var b = new a,
                c = {},
                d = c;
            b.port1.onmessage = function() {
                if (void 0 !== c.next) {
                    c = c.next;
                    var e = c.xe;
                    c.xe = null;
                    e()
                }
            };
            return function(e) {
                d.next = { xe: e };
                d = d.next;
                b.port2.postMessage(0)
            }
        }
        return function(e) { r.setTimeout(e, 0) }
    };

    function pf(a) { r.setTimeout(function() { throw a; }, 0) };

    function qf() { this.ed = this.Pb = null }
    qf.prototype.add = function(a, b) {
        var c = rf.get();
        c.set(a, b);
        this.ed ? this.ed.next = c : this.Pb = c;
        this.ed = c
    };
    qf.prototype.remove = function() {
        var a = null;
        this.Pb && (a = this.Pb, this.Pb = this.Pb.next, this.Pb || (this.ed = null), a.next = null);
        return a
    };
    var rf = new mf(function() { return new sf }, function(a) { return a.reset() });

    function sf() { this.next = this.scope = this.zd = null }
    sf.prototype.set = function(a, b) {
        this.zd = a;
        this.scope = b;
        this.next = null
    };
    sf.prototype.reset = function() { this.next = this.scope = this.zd = null };

    function tf(a, b) {
        uf || vf();
        wf || (uf(), wf = !0);
        xf.add(a, b)
    }
    var uf;

    function vf() {
        if (r.Promise && r.Promise.resolve) {
            var a = r.Promise.resolve(void 0);
            uf = function() { a.then(yf) }
        } else uf = function() { var b = yf; "function" !== typeof r.setImmediate || r.Window && r.Window.prototype && !y("Edge") && r.Window.prototype.setImmediate == r.setImmediate ? (nf || (nf = of()), nf(b)) : r.setImmediate(b) }
    }
    var wf = !1,
        xf = new qf;

    function yf() {
        for (var a; a = xf.remove();) {
            try { a.zd.call(a.scope) } catch (b) { pf(b) }
            rf.put(a)
        }
        wf = !1
    };

    function zf(a) { if (!a) return !1; try { return !!a.$goog_Thenable } catch (b) { return !1 } };

    function F(a) {
        this.P = 0;
        this.Wa = void 0;
        this.xb = this.Za = this.W = null;
        this.Hc = this.yd = !1;
        if (a != ua) try {
            var b = this;
            a.call(void 0, function(c) { Af(b, 2, c) }, function(c) {
                if (!(c instanceof Bf)) try { if (c instanceof Error) throw c; throw Error("Promise rejected."); } catch (d) {}
                Af(b, 3, c)
            })
        } catch (c) { Af(this, 3, c) }
    }

    function Cf() {
        this.next = this.context = this.Ib = this.fc = this.child = null;
        this.Qb = !1
    }
    Cf.prototype.reset = function() {
        this.context = this.Ib = this.fc = this.child = null;
        this.Qb = !1
    };
    var Df = new mf(function() { return new Cf }, function(a) { a.reset() });

    function Ef(a, b, c) {
        var d = Df.get();
        d.fc = a;
        d.Ib = b;
        d.context = c;
        return d
    }

    function G(a) {
        if (a instanceof F) return a;
        var b = new F(ua);
        Af(b, 2, a);
        return b
    }

    function Ff(a) { return new F(function(b, c) { c(a) }) }
    F.prototype.then = function(a, b, c) { return Gf(this, "function" === typeof a ? a : null, "function" === typeof b ? b : null, c) };
    F.prototype.$goog_Thenable = !0;
    h = F.prototype;
    h.Hh = function(a, b) {
        a = Ef(a, a, b);
        a.Qb = !0;
        Hf(this, a);
        return this
    };
    h.pc = function(a, b) { return Gf(this, null, a, b) };
    h.cancel = function(a) {
        if (0 == this.P) {
            var b = new Bf(a);
            tf(function() { If(this, b) }, this)
        }
    };

    function If(a, b) {
        if (0 == a.P)
            if (a.W) {
                var c = a.W;
                if (c.Za) {
                    for (var d = 0, e = null, f = null, g = c.Za; g && (g.Qb || (d++, g.child == a && (e = g), !(e && 1 < d))); g = g.next) e || (f = g);
                    e && (0 == c.P && 1 == d ? If(c, b) : (f ? (d = f, d.next == c.xb && (c.xb = d), d.next = d.next.next) : Jf(c), Kf(c, e, 3, b)))
                }
                a.W = null
            } else Af(a, 3, b)
    }

    function Hf(a, b) {
        a.Za || 2 != a.P && 3 != a.P || Lf(a);
        a.xb ? a.xb.next = b : a.Za = b;
        a.xb = b
    }

    function Gf(a, b, c, d) {
        var e = Ef(null, null, null);
        e.child = new F(function(f, g) {
            e.fc = b ? function(k) {
                try {
                    var n = b.call(d, k);
                    f(n)
                } catch (p) { g(p) }
            } : f;
            e.Ib = c ? function(k) {
                try {
                    var n = c.call(d, k);
                    void 0 === n && k instanceof Bf ? g(k) : f(n)
                } catch (p) { g(p) }
            } : g
        });
        e.child.W = a;
        Hf(a, e);
        return e.child
    }
    h.Kh = function(a) {
        this.P = 0;
        Af(this, 2, a)
    };
    h.Lh = function(a) {
        this.P = 0;
        Af(this, 3, a)
    };

    function Af(a, b, c) {
        if (0 == a.P) {
            a === c && (b = 3, c = new TypeError("Promise cannot resolve to itself"));
            a.P = 1;
            a: {
                var d = c,
                    e = a.Kh,
                    f = a.Lh;
                if (d instanceof F) { Hf(d, Ef(e || ua, f || null, a)); var g = !0 } else if (zf(d)) d.then(e, f, a),
                g = !0;
                else {
                    if (t(d)) try {
                        var k = d.then;
                        if ("function" === typeof k) {
                            Mf(d, k, e, f, a);
                            g = !0;
                            break a
                        }
                    } catch (n) {
                        f.call(a, n);
                        g = !0;
                        break a
                    }
                    g = !1
                }
            }
            g || (a.Wa = c, a.P = b, a.W = null, Lf(a), 3 != b || c instanceof Bf || Nf(a, c))
        }
    }

    function Mf(a, b, c, d, e) {
        function f(n) { k || (k = !0, d.call(e, n)) }

        function g(n) { k || (k = !0, c.call(e, n)) }
        var k = !1;
        try { b.call(a, g, f) } catch (n) { f(n) }
    }

    function Lf(a) { a.yd || (a.yd = !0, tf(a.zg, a)) }

    function Jf(a) {
        var b = null;
        a.Za && (b = a.Za, a.Za = b.next, b.next = null);
        a.Za || (a.xb = null);
        return b
    }
    h.zg = function() {
        for (var a; a = Jf(this);) Kf(this, a, this.P, this.Wa);
        this.yd = !1
    };

    function Kf(a, b, c, d) {
        if (3 == c && b.Ib && !b.Qb)
            for (; a && a.Hc; a = a.W) a.Hc = !1;
        if (b.child) b.child.W = null, Of(b, c, d);
        else try { b.Qb ? b.fc.call(b.context) : Of(b, c, d) } catch (e) { Pf.call(null, e) }
        Df.put(b)
    }

    function Of(a, b, c) { 2 == b ? a.fc.call(a.context, c) : a.Ib && a.Ib.call(a.context, c) }

    function Nf(a, b) {
        a.Hc = !0;
        tf(function() { a.Hc && Pf.call(null, b) })
    }
    var Pf = pf;

    function Bf(a) { Ca.call(this, a) }
    x(Bf, Ca);
    Bf.prototype.name = "cancel";

    function Qf(a, b) {
        Xe.call(this);
        this.Pc = a || 1;
        this.qc = b || r;
        this.ue = u(this.Jh, this);
        this.Xe = Date.now()
    }
    x(Qf, Xe);
    h = Qf.prototype;
    h.enabled = !1;
    h.da = null;
    h.setInterval = function(a) {
        this.Pc = a;
        this.da && this.enabled ? (this.stop(), this.start()) : this.da && this.stop()
    };
    h.Jh = function() {
        if (this.enabled) {
            var a = Date.now() - this.Xe;
            0 < a && a < .8 * this.Pc ? this.da = this.qc.setTimeout(this.ue, this.Pc - a) : (this.da && (this.qc.clearTimeout(this.da), this.da = null), this.dispatchEvent("tick"), this.enabled && (this.stop(), this.start()))
        }
    };
    h.start = function() {
        this.enabled = !0;
        this.da || (this.da = this.qc.setTimeout(this.ue, this.Pc), this.Xe = Date.now())
    };
    h.stop = function() {
        this.enabled = !1;
        this.da && (this.qc.clearTimeout(this.da), this.da = null)
    };
    h.l = function() {
        Qf.$.l.call(this);
        this.stop();
        delete this.qc
    };

    function Rf(a, b) {
        if ("function" === typeof a) b && (a = u(a, b));
        else if (a && "function" == typeof a.handleEvent) a = u(a.handleEvent, a);
        else throw Error("Invalid listener argument");
        return 2147483647 < Number(0) ? -1 : r.setTimeout(a, 0)
    };

    function Sf(a) {
        Xe.call(this);
        this.da = null;
        this.j = a;
        a = z || Wc || Zc && !hd("531") && "TEXTAREA" == a.tagName;
        this.Ke = new jf(this);
        this.Ke.listen(this.j, a ? ["keydown", "paste", "cut", "drop", "input"] : "input", this)
    }
    x(Sf, Xe);
    Sf.prototype.handleEvent = function(a) {
        if ("input" == a.type) z && hd(10) && 0 == a.keyCode && 0 == a.charCode || (Tf(this), this.dispatchEvent(Uf(a)));
        else if ("keydown" != a.type || Ze(a)) {
            var b = "keydown" == a.type ? this.j.value : null;
            z && 229 == a.keyCode && (b = null);
            var c = Uf(a);
            Tf(this);
            this.da = Rf(function() {
                this.da = null;
                this.j.value != b && this.dispatchEvent(c)
            }, this)
        }
    };

    function Tf(a) { null != a.da && (r.clearTimeout(a.da), a.da = null) }

    function Uf(a) {
        a = new ye(a.La);
        a.type = "input";
        return a
    }
    Sf.prototype.l = function() {
        Sf.$.l.call(this);
        this.Ke.m();
        Tf(this);
        delete this.j
    };

    function Vf(a, b, c, d) {
        ye.call(this, d);
        this.type = "key";
        this.keyCode = a;
        this.charCode = b;
        this.repeat = c
    }
    x(Vf, ye);

    function Wf(a, b) {
        Xe.call(this);
        a && (this.Rc && this.detach(), this.j = a, this.Qc = Le(this.j, "keypress", this, b), this.Md = Le(this.j, "keydown", this.Jc, b, this), this.Rc = Le(this.j, "keyup", this.Ig, b, this))
    }
    x(Wf, Xe);
    h = Wf.prototype;
    h.j = null;
    h.Qc = null;
    h.Md = null;
    h.Rc = null;
    h.ma = -1;
    h.Qa = -1;
    h.nd = !1;
    var Xf = { 3: 13, 12: 144, 63232: 38, 63233: 40, 63234: 37, 63235: 39, 63236: 112, 63237: 113, 63238: 114, 63239: 115, 63240: 116, 63241: 117, 63242: 118, 63243: 119, 63244: 120, 63245: 121, 63246: 122, 63247: 123, 63248: 44, 63272: 46, 63273: 36, 63275: 35, 63276: 33, 63277: 34, 63289: 144, 63302: 45 },
        Yf = { Up: 38, Down: 40, Left: 37, Right: 39, Enter: 13, F1: 112, F2: 113, F3: 114, F4: 115, F5: 116, F6: 117, F7: 118, F8: 119, F9: 120, F10: 121, F11: 122, F12: 123, "U+007F": 46, Home: 36, End: 35, PageUp: 33, PageDown: 34, Insert: 45 },
        Zf = !Zc || hd("525"),
        $f = ad && Yc;
    h = Wf.prototype;
    h.Jc = function(a) {
        if (Zc || Wc)
            if (17 == this.ma && !a.ctrlKey || 18 == this.ma && !a.altKey || ad && 91 == this.ma && !a.metaKey) this.Qa = this.ma = -1; - 1 == this.ma && (a.ctrlKey && 17 != a.keyCode ? this.ma = 17 : a.altKey && 18 != a.keyCode ? this.ma = 18 : a.metaKey && 91 != a.keyCode && (this.ma = 91));
        Zf && !af(a.keyCode, this.ma, a.shiftKey, a.ctrlKey, a.altKey, a.metaKey) ? this.handleEvent(a) : (this.Qa = bf(a.keyCode), $f && (this.nd = a.altKey))
    };
    h.Ig = function(a) {
        this.Qa = this.ma = -1;
        this.nd = a.altKey
    };
    h.handleEvent = function(a) {
        var b = a.La,
            c = b.altKey;
        if (z && "keypress" == a.type) { var d = this.Qa; var e = 13 != d && 27 != d ? b.keyCode : 0 } else(Zc || Wc) && "keypress" == a.type ? (d = this.Qa, e = 0 <= b.charCode && 63232 > b.charCode && $e(d) ? b.charCode : 0) : Vc && !Zc ? (d = this.Qa, e = $e(d) ? b.keyCode : 0) : ("keypress" == a.type ? ($f && (c = this.nd), b.keyCode == b.charCode ? 32 > b.keyCode ? (d = b.keyCode, e = 0) : (d = this.Qa, e = b.charCode) : (d = b.keyCode || this.Qa, e = b.charCode || 0)) : (d = b.keyCode || this.Qa, e = b.charCode || 0), ad && 63 == e && 224 == d && (d = 191));
        var f = d = bf(d);
        d ? 63232 <=
            d && d in Xf ? f = Xf[d] : 25 == d && a.shiftKey && (f = 9) : b.keyIdentifier && b.keyIdentifier in Yf && (f = Yf[b.keyIdentifier]);
        Yc && Zf && "keypress" == a.type && !af(f, this.ma, a.shiftKey, a.ctrlKey, c, a.metaKey) || (a = f == this.ma, this.ma = f, b = new Vf(f, e, a, b), b.altKey = c, this.dispatchEvent(b))
    };
    h.ia = function() { return this.j };
    h.detach = function() {
        this.Qc && (Ve(this.Qc), Ve(this.Md), Ve(this.Rc), this.Rc = this.Md = this.Qc = null);
        this.j = null;
        this.Qa = this.ma = -1
    };
    h.l = function() {
        Wf.$.l.call(this);
        this.detach()
    };

    function ag(a, b, c, d) {
        this.top = a;
        this.right = b;
        this.bottom = c;
        this.left = d
    }
    h = ag.prototype;
    h.clone = function() { return new ag(this.top, this.right, this.bottom, this.left) };
    h.toString = function() { return "(" + this.top + "t, " + this.right + "r, " + this.bottom + "b, " + this.left + "l)" };
    h.contains = function(a) { return this && a ? a instanceof ag ? a.left >= this.left && a.right <= this.right && a.top >= this.top && a.bottom <= this.bottom : a.x >= this.left && a.x <= this.right && a.y >= this.top && a.y <= this.bottom : !1 };
    h.expand = function(a, b, c, d) { t(a) ? (this.top -= a.top, this.right += a.right, this.bottom += a.bottom, this.left -= a.left) : (this.top -= a, this.right += Number(b), this.bottom += Number(c), this.left -= Number(d)); return this };
    h.ceil = function() {
        this.top = Math.ceil(this.top);
        this.right = Math.ceil(this.right);
        this.bottom = Math.ceil(this.bottom);
        this.left = Math.ceil(this.left);
        return this
    };
    h.floor = function() {
        this.top = Math.floor(this.top);
        this.right = Math.floor(this.right);
        this.bottom = Math.floor(this.bottom);
        this.left = Math.floor(this.left);
        return this
    };
    h.round = function() {
        this.top = Math.round(this.top);
        this.right = Math.round(this.right);
        this.bottom = Math.round(this.bottom);
        this.left = Math.round(this.left);
        return this
    };
    h.translate = function(a, b) { a instanceof $d ? (this.left += a.x, this.right += a.x, this.top += a.y, this.bottom += a.y) : (this.left += a, this.right += a, "number" === typeof b && (this.top += b, this.bottom += b)); return this };
    h.scale = function(a, b) {
        b = "number" === typeof b ? b : a;
        this.left *= a;
        this.right *= a;
        this.top *= b;
        this.bottom *= b;
        return this
    };

    function bg(a, b) { var c = de(a); return c.defaultView && c.defaultView.getComputedStyle && (a = c.defaultView.getComputedStyle(a, null)) ? a[b] || a.getPropertyValue(b) || "" : "" }

    function cg(a) { try { return a.getBoundingClientRect() } catch (b) { return { left: 0, top: 0, right: 0, bottom: 0 } } }

    function dg(a, b) {
        b = b || je(document);
        var c = b || je(document);
        var d = eg(a),
            e = eg(c);
        if (!z || 9 <= Number(kd)) {
            g = bg(c, "borderLeftWidth");
            var f = bg(c, "borderRightWidth");
            k = bg(c, "borderTopWidth");
            n = bg(c, "borderBottomWidth");
            f = new ag(parseFloat(k), parseFloat(f), parseFloat(n), parseFloat(g))
        } else {
            var g = fg(c, "borderLeft");
            f = fg(c, "borderRight");
            var k = fg(c, "borderTop"),
                n = fg(c, "borderBottom");
            f = new ag(k, f, n, g)
        }
        c == je(document) ? (g = d.x - c.scrollLeft, d = d.y - c.scrollTop, !z || 10 <= Number(kd) || (g += f.left, d += f.top)) : (g = d.x - e.x - f.left,
            d = d.y - e.y - f.top);
        e = a.offsetWidth;
        f = a.offsetHeight;
        k = Zc && !e && !f;
        (void 0 === e || k) && a.getBoundingClientRect ? (a = cg(a), a = new ae(a.right - a.left, a.bottom - a.top)) : a = new ae(e, f);
        e = c.clientHeight - a.height;
        f = c.scrollLeft;
        k = c.scrollTop;
        f += Math.min(g, Math.max(g - (c.clientWidth - a.width), 0));
        k += Math.min(d, Math.max(d - e, 0));
        c = new $d(f, k);
        b.scrollLeft = c.x;
        b.scrollTop = c.y
    }

    function eg(a) {
        var b = de(a),
            c = new $d(0, 0);
        var d = b ? de(b) : document;
        d = !z || 9 <= Number(kd) || "CSS1Compat" == be(d).ha.compatMode ? d.documentElement : d.body;
        if (a == d) return c;
        a = cg(a);
        d = be(b).ha;
        b = je(d);
        d = d.parentWindow || d.defaultView;
        b = z && hd("10") && d.pageYOffset != b.scrollTop ? new $d(b.scrollLeft, b.scrollTop) : new $d(d.pageXOffset || b.scrollLeft, d.pageYOffset || b.scrollTop);
        c.x = a.left + b.x;
        c.y = a.top + b.y;
        return c
    }
    var gg = { thin: 2, medium: 4, thick: 6 };

    function fg(a, b) {
        if ("none" == (a.currentStyle ? a.currentStyle[b + "Style"] : null)) return 0;
        var c = a.currentStyle ? a.currentStyle[b + "Width"] : null;
        if (c in gg) a = gg[c];
        else if (/^\d+px?$/.test(c)) a = parseInt(c, 10);
        else {
            b = a.style.left;
            var d = a.runtimeStyle.left;
            a.runtimeStyle.left = a.currentStyle.left;
            a.style.left = c;
            c = a.style.pixelLeft;
            a.style.left = b;
            a.runtimeStyle.left = d;
            a = +c
        }
        return a
    };

    function hg() {}
    va(hg);
    hg.prototype.ah = 0;
    hg.prototype.Lg = "";

    function ig(a) {
        Xe.call(this);
        this.Tb = a || be();
        this.pb = null;
        this.qb = !1;
        this.j = null;
        this.cb = void 0;
        this.zc = this.yb = this.W = null;
        this.Oh = !1
    }
    x(ig, Xe);
    h = ig.prototype;
    h.Kg = hg.Ad();
    h.getId = function() {
        var a;
        (a = this.pb) || (a = this.Kg, a = this.pb = a.Lg + ":" + (a.ah++).toString(36));
        return a
    };
    h.ia = function() { return this.j };
    h.Fc = function(a) { return this.j ? this.Tb.Fc(a, this.j) : [] };
    h.A = function(a) { return this.j ? this.Tb.A(a, this.j) : null };

    function jg(a) { a.cb || (a.cb = new jf(a)); return a.cb }
    h.getParent = function() { return this.W };
    h.be = function(a) {
        if (this.W && this.W != a) throw Error("Method not supported");
        ig.$.be.call(this, a)
    };
    h.Cb = function() { return this.Tb };
    h.vd = function() { this.j = this.Tb.createElement("DIV") };
    h.render = function(a) {
        if (this.qb) throw Error("Component already rendered");
        this.j || this.vd();
        a ? a.insertBefore(this.j, null) : this.Tb.ha.body.appendChild(this.j);
        this.W && !this.W.qb || this.s()
    };
    h.s = function() {
        this.qb = !0;
        kg(this, function(a) {!a.qb && a.ia() && a.s() })
    };
    h.Ub = function() {
        kg(this, function(a) { a.qb && a.Ub() });
        this.cb && this.cb.Yc();
        this.qb = !1
    };
    h.l = function() {
        this.qb && this.Ub();
        this.cb && (this.cb.m(), delete this.cb);
        kg(this, function(a) { a.m() });
        !this.Oh && this.j && me(this.j);
        this.W = this.j = this.zc = this.yb = null;
        ig.$.l.call(this)
    };
    h.hasChildren = function() { return !!this.yb && 0 != this.yb.length };

    function kg(a, b) { a.yb && Ha(a.yb, b, void 0) }
    h.removeChild = function(a, b) {
        if (a) {
            var c = "string" === typeof a ? a : a.getId();
            this.zc && c ? (a = this.zc, a = (null !== a && c in a ? a[c] : void 0) || null) : a = null;
            if (c && a) {
                var d = this.zc;
                c in d && delete d[c];
                Na(this.yb, a);
                b && (a.Ub(), a.j && me(a.j));
                b = a;
                if (null == b) throw Error("Unable to set parent component");
                b.W = null;
                ig.$.be.call(b, null)
            }
        }
        if (!a) throw Error("Child is not in parent component");
        return a
    };

    function H(a, b) {
        var c = oe(a, "firebaseui-textfield");
        b ? (Yd(a, "firebaseui-input-invalid"), Xd(a, "firebaseui-input"), c && Yd(c, "firebaseui-textfield-invalid")) : (Yd(a, "firebaseui-input"), Xd(a, "firebaseui-input-invalid"), c && Xd(c, "firebaseui-textfield-invalid"))
    }

    function lg(a, b, c) {
        b = new Sf(b);
        we(a, Aa(ue, b));
        jg(a).listen(b, "input", c)
    }

    function mg(a, b, c) {
        b = new Wf(b);
        we(a, Aa(ue, b));
        jg(a).listen(b, "key", function(d) { 13 == d.keyCode && (d.stopPropagation(), d.preventDefault(), c(d)) })
    }

    function ng(a, b, c) {
        b = new hf(b);
        we(a, Aa(ue, b));
        jg(a).listen(b, "focusin", c)
    }

    function og(a, b, c) {
        b = new hf(b);
        we(a, Aa(ue, b));
        jg(a).listen(b, "focusout", c)
    }

    function I(a, b, c) {
        b = new df(b);
        we(a, Aa(ue, b));
        jg(a).listen(b, "action", function(d) {
            d.stopPropagation();
            d.preventDefault();
            c(d)
        })
    }

    function pg(a) { Xd(a, "firebaseui-hidden") }

    function qg(a, b) {
        b && ne(a, b);
        Yd(a, "firebaseui-hidden")
    }

    function rg(a) { return !Wd(a, "firebaseui-hidden") && "none" != a.style.display };

    function sg(a) { tg(a, "upgradeElement") }

    function ug(a) { tg(a, "downgradeElements") }
    var vg = ["mdl-js-textfield", "mdl-js-progress", "mdl-js-spinner", "mdl-js-button"];

    function tg(a, b) {
        a && window.componentHandler && window.componentHandler[b] && Ha(vg, function(c) {
            if (Wd(a, c)) window.componentHandler[b](a);
            Ha(ee(c, a), function(d) { window.componentHandler[b](d) })
        })
    };

    function wg(a, b, c) {
        xg.call(this);
        document.body.appendChild(a);
        a.showModal || window.dialogPolyfill.registerDialog(a);
        a.showModal();
        sg(a);
        b && I(this, a, function(f) {
            var g = a.getBoundingClientRect();
            (f.clientX < g.left || g.left + g.width < f.clientX || f.clientY < g.top || g.top + g.height < f.clientY) && xg.call(this)
        });
        if (!c) {
            var d = this.ia().parentElement || this.ia().parentNode;
            if (d) {
                var e = this;
                this.nc = function() {
                    if (a.open) {
                        var f = a.getBoundingClientRect().height,
                            g = d.getBoundingClientRect().height,
                            k = d.getBoundingClientRect().top -
                            document.body.getBoundingClientRect().top,
                            n = d.getBoundingClientRect().left - document.body.getBoundingClientRect().left,
                            p = a.getBoundingClientRect().width,
                            m = d.getBoundingClientRect().width;
                        a.style.top = (k + (g - f) / 2).toString() + "px";
                        f = n + (m - p) / 2;
                        a.style.left = f.toString() + "px";
                        a.style.right = (document.body.getBoundingClientRect().width - f - p).toString() + "px"
                    } else window.removeEventListener("resize", e.nc)
                };
                this.nc();
                window.addEventListener("resize", this.nc, !1)
            }
        }
    }

    function xg() {
        var a = yg.call(this);
        a && (ug(a), a.open && a.close(), me(a), this.nc && window.removeEventListener("resize", this.nc))
    }

    function yg() { return ge("firebaseui-id-dialog") };

    function zg(a, b, c, d) {
        a = a(b || Ag, c);
        d = (d || be()).createElement("DIV");
        if (t(a))
            if (a instanceof Oc) {
                if (a.kb !== Kc) throw Error("Sanitized content was not of kind HTML.");
                a = Sb(a.toString(), a.Sb || null)
            } else Fa("Soy template output is unsafe for use as HTML: " + a), a = Rb("zSoyz");
        else a = Rb(String(a));
        a.Oa().match(Bg);
        if (Xb())
            for (; d.lastChild;) d.removeChild(d.lastChild);
        d.innerHTML = Qb(a);
        1 == d.childNodes.length && (a = d.firstChild, 1 == a.nodeType && (d = a));
        return d
    }
    var Bg = /^<(body|caption|col|colgroup|head|html|tr|td|th|tbody|thead|tfoot)>/i,
        Ag = {};

    function Cg() { return D["firebaseui.auth.soy2.strings.dialogVerifyingPhoneNumber"] ? D["firebaseui.auth.soy2.strings.dialogVerifyingPhoneNumber"](void 0, void 0) : "Verifying..." }

    function Dg(a, b) { return D["firebaseui.auth.soy2.strings.errorInvalidPhoneNumber"] ? D["firebaseui.auth.soy2.strings.errorInvalidPhoneNumber"](a, b) : "Enter a valid phone number" }

    function Eg(a, b) { return D["firebaseui.auth.soy2.strings.errorInvalidConfirmationCode"] ? D["firebaseui.auth.soy2.strings.errorInvalidConfirmationCode"](a, b) : "Wrong code. Try again." }

    function Fg() { return D["firebaseui.auth.soy2.strings.errorMissingPassword"] ? D["firebaseui.auth.soy2.strings.errorMissingPassword"](void 0, void 0) : "Enter your password" }

    function Gg() { return D["firebaseui.auth.soy2.strings.errorSendPasswordReset"] ? D["firebaseui.auth.soy2.strings.errorSendPasswordReset"](void 0, void 0) : "Unable to send password reset code to specified email" }

    function Hg(a, b) { return D["firebaseui.auth.soy2.strings.internalError"] ? D["firebaseui.auth.soy2.strings.internalError"](a, b) : "Something went wrong. Please try again." }

    function Ig() { return D["firebaseui.auth.soy2.strings.errorAnonymousEmailBlockingSignIn"] ? D["firebaseui.auth.soy2.strings.errorAnonymousEmailBlockingSignIn"](void 0, void 0) : "This email already exists without any means of sign-in. Please reset the password to recover." }

    function Jg(a) {
        a = a || {};
        a = a.code;
        if (D["firebaseui.auth.soy2.strings.errorCIAP"]) a = D["firebaseui.auth.soy2.strings.errorCIAP"]({ code: a }, void 0);
        else {
            E(null == a || "string" === typeof a, "code", a, "null|string|undefined");
            var b = "";
            switch (t(a) ? a.toString() : a) {
                case "invalid-argument":
                    b += "Client specified an invalid argument.";
                    break;
                case "invalid-configuration":
                    b += "Client specified an invalid project configuration.";
                    break;
                case "failed-precondition":
                    b += "Request can not be executed in the current system state.";
                    break;
                case "out-of-range":
                    b += "Client specified an invalid range.";
                    break;
                case "unauthenticated":
                    b += "Request not authenticated due to missing, invalid, or expired OAuth token.";
                    break;
                case "permission-denied":
                    b += "Client does not have sufficient permission.";
                    break;
                case "not-found":
                    b += "Specified resource is not found.";
                    break;
                case "aborted":
                    b += "Concurrency conflict, such as read-modify-write conflict.";
                    break;
                case "already-exists":
                    b += "The resource that a client tried to create already exists.";
                    break;
                case "resource-exhausted":
                    b +=
                        "Either out of resource quota or reaching rate limiting.";
                    break;
                case "cancelled":
                    b += "Request cancelled by the client.";
                    break;
                case "data-loss":
                    b += "Unrecoverable data loss or data corruption.";
                    break;
                case "unknown":
                    b += "Unknown server error.";
                    break;
                case "internal":
                    b += "Internal server error.";
                    break;
                case "not-implemented":
                    b += "API method not implemented by the server.";
                    break;
                case "unavailable":
                    b += "Service unavailable.";
                    break;
                case "deadline-exceeded":
                    b += "Request deadline exceeded.";
                    break;
                case "auth/user-disabled":
                    b +=
                        "The user account has been disabled by an administrator.";
                    break;
                case "auth/timeout":
                    b += "The operation has timed out.";
                    break;
                case "auth/too-many-requests":
                    b += "We have blocked all requests from this device due to unusual activity. Try again later.";
                    break;
                case "auth/quota-exceeded":
                    b += "The quota for this operation has been exceeded. Try again later.";
                    break;
                case "auth/network-request-failed":
                    b += "A network error has occurred. Try again later.";
                    break;
                case "restart-process":
                    b += "An issue was encountered when authenticating your request. Please visit the URL that redirected you to this page again to restart the authentication process.";
                    break;
                case "no-matching-tenant-for-email":
                    b += "No sign-in provider is available for the given email, please try with a different email."
            }
            a = b
        }
        return a
    }

    function Lg() { return D["firebaseui.auth.soy2.strings.errorLoginAgain_"] ? D["firebaseui.auth.soy2.strings.errorLoginAgain_"](null, void 0) : "Please login again to perform this operation" };
    var Mg = /^[+a-zA-Z0-9_.!#$%&'*\/=?^`{|}~-]+@([a-zA-Z0-9-]+\.)+[a-zA-Z0-9]{2,63}$/;

    function Ng() { return this.A("firebaseui-id-email") }

    function Og() { return this.A("firebaseui-id-email-error") }

    function Pg(a) {
        var b = Ng.call(this),
            c = Og.call(this);
        lg(this, b, function() { rg(c) && (H(b, !0), pg(c)) });
        a && mg(this, b, function() { a() })
    }

    function Qg() { return lb(re(Ng.call(this)) || "") }

    function Rg() {
        var a = Ng.call(this);
        var b = Og.call(this);
        var c = re(a) || "";
        c ? Mg.test(c) ? (H(a, !0), pg(b), b = !0) : (H(a, !1), qg(b, (D["firebaseui.auth.soy2.strings.errorInvalidEmail"] ? D["firebaseui.auth.soy2.strings.errorInvalidEmail"](void 0, void 0) : "That email address isn't correct").toString()), b = !1) : (H(a, !1), qg(b, (D["firebaseui.auth.soy2.strings.errorMissingEmail"] ? D["firebaseui.auth.soy2.strings.errorMissingEmail"](void 0, void 0) : "Enter your email address to continue").toString()), b = !1);
        return b ? lb(re(a)) :
            null
    };

    function J() { return this.A("firebaseui-id-submit") }

    function K() { return this.A("firebaseui-id-secondary-link") }

    function Sg(a, b) {
        I(this, J.call(this), function(d) { a(d) });
        var c = K.call(this);
        c && b && I(this, c, function(d) { b(d) })
    };
    var Tg = !z && !(y("Safari") && !(Nb() || y("Coast") || y("Opera") || y("Edge") || y("Edg/") || y("OPR") || y("Firefox") || y("FxiOS") || y("Silk") || y("Android")));

    function Ug(a, b) {
        if (/-[a-z]/.test(b)) return null;
        if (Tg && a.dataset) {
            if (!(!y("Android") || Nb() || y("Firefox") || y("FxiOS") || y("Opera") || y("Silk") || b in a.dataset)) return null;
            a = a.dataset[b];
            return void 0 === a ? null : a
        }
        return a.getAttribute("data-" + String(b).replace(/([A-Z])/g, "-$1").toLowerCase())
    };

    function Vg(a, b) { a = a || {}; return Wg(b, a.email, a.disabled, a.ig) }

    function Wg(a, b, c, d) {
        if (D["firebaseui.auth.soy2.element.email"]) return D["firebaseui.auth.soy2.element.email"]({ email: b, disabled: c, ig: d }, a);
        E(null == b || "string" === typeof b, "email", b, "null|string|undefined");
        E(null == c || "boolean" === typeof c, "disabled", c, "boolean|null|undefined");
        E(null == d || "boolean" === typeof d, "changeEmail", d, "boolean|null|undefined");
        a = '<div class="firebaseui-textfield mdl-textfield mdl-js-textfield mdl-textfield--floating-label"><label class="mdl-textfield__label firebaseui-label" for="email">';
        a =
            (d ? a + "Enter new email address" : a + "Email") + ('</label><input type="email" name="email" autocomplete="username" class="mdl-textfield__input firebaseui-input firebaseui-id-email" value="' + ud(null != b ? b : "") + '"' + (c ? " disabled" : "") + '></div><div class="firebaseui-error-wrapper"><p class="firebaseui-error firebaseui-text-input-error firebaseui-hidden firebaseui-id-email-error"></p></div>');
        return C(a)
    }

    function Xg(a, b) {
        if (D["firebaseui.auth.soy2.element.submitButton"]) return D["firebaseui.auth.soy2.element.submitButton"]({ label: b }, a);
        E(null == b || "string" === typeof b, "label", b, "null|string|undefined");
        a = '<button type="submit" class="firebaseui-id-submit firebaseui-button mdl-button mdl-js-button mdl-button--raised mdl-button--colored">';
        a = b ? a + B(b) : a + "Next";
        return C(a + "</button>")
    }

    function Yg(a) {
        if (D["firebaseui.auth.soy2.element.signInButton"]) return D["firebaseui.auth.soy2.element.signInButton"](null, a);
        a = "" + Xg(a, "Sign In");
        return C(a)
    }

    function Zg(a) {
        if (D["firebaseui.auth.soy2.element.saveButton"]) return D["firebaseui.auth.soy2.element.saveButton"](null, a);
        a = "" + Xg(a, "Save");
        return C(a)
    }

    function $g(a) {
        if (D["firebaseui.auth.soy2.element.continueButton"]) return D["firebaseui.auth.soy2.element.continueButton"](null, a);
        a = "" + Xg(a, "Continue");
        return C(a)
    }

    function ah(a, b) {
        if (D["firebaseui.auth.soy2.element.newPassword"]) return D["firebaseui.auth.soy2.element.newPassword"]({ label: b }, a);
        E(null == b || "string" === typeof b, "label", b, "null|string|undefined");
        a = '<div class="firebaseui-new-password-component"><div class="firebaseui-textfield mdl-textfield mdl-js-textfield mdl-textfield--floating-label"><label class="mdl-textfield__label firebaseui-label" for="newPassword">';
        a = b ? a + B(b) : a + "Choose password";
        return C(a + '</label><input type="password" name="newPassword" autocomplete="new-password" class="mdl-textfield__input firebaseui-input firebaseui-id-new-password"></div><a href="javascript:void(0)" class="firebaseui-input-floating-button firebaseui-id-password-toggle firebaseui-input-toggle-on firebaseui-input-toggle-blur"></a><div class="firebaseui-error-wrapper"><p class="firebaseui-error firebaseui-text-input-error firebaseui-hidden firebaseui-id-new-password-error"></p></div></div>')
    }

    function bh(a) {
        if (D["firebaseui.auth.soy2.element.password"]) return D["firebaseui.auth.soy2.element.password"]({ current: void 0 }, a);
        E(!0, "current", void 0, "boolean|null|undefined");
        return C('<div class="firebaseui-textfield mdl-textfield mdl-js-textfield mdl-textfield--floating-label"><label class="mdl-textfield__label firebaseui-label" for="password">Password</label><input type="password" name="password" autocomplete="current-password" class="mdl-textfield__input firebaseui-input firebaseui-id-password"></div><div class="firebaseui-error-wrapper"><p class="firebaseui-error firebaseui-text-input-error firebaseui-hidden firebaseui-id-password-error"></p></div>')
    }

    function ch(a) { return D["firebaseui.auth.soy2.element.passwordRecoveryButton"] ? D["firebaseui.auth.soy2.element.passwordRecoveryButton"](null, a) : C('<a class="firebaseui-link firebaseui-id-secondary-link" href="javascript:void(0)">Trouble signing in?</a>') }

    function dh(a, b) {
        if (D["firebaseui.auth.soy2.element.cancelButton"]) return D["firebaseui.auth.soy2.element.cancelButton"]({ label: b }, a);
        E(null == b || "string" === typeof b, "label", b, "null|string|undefined");
        a = '<button class="firebaseui-id-secondary-link firebaseui-button mdl-button mdl-js-button mdl-button--primary">';
        a = b ? a + B(b) : a + "Cancel";
        return C(a + "</button>")
    }

    function eh(a, b) {
        if (D["firebaseui.auth.soy2.element.tosPpLink"]) return D["firebaseui.auth.soy2.element.tosPpLink"](a, b);
        a = b.O;
        var c = "";
        rd(b.R) && rd(a) && (c += '<ul class="firebaseui-tos-list firebaseui-tos"><li class="firebaseui-inline-list-item"><a href="javascript:void(0)" class="firebaseui-link firebaseui-tos-link" target="_blank">Terms of Service</a></li><li class="firebaseui-inline-list-item"><a href="javascript:void(0)" class="firebaseui-link firebaseui-pp-link" target="_blank">Privacy Policy</a></li></ul>');
        return C(c)
    }

    function fh(a, b) {
        if (D["firebaseui.auth.soy2.element.fullMessageTosPp"]) return D["firebaseui.auth.soy2.element.fullMessageTosPp"](a, b);
        a = b.O;
        var c = "";
        rd(b.R) && rd(a) && (c += '<p class="firebaseui-tos firebaseui-tospp-full-message">By continuing, you are indicating that you accept our <a href="javascript:void(0)" class="firebaseui-link firebaseui-tos-link" target="_blank">Terms of Service</a> and <a href="javascript:void(0)" class="firebaseui-link firebaseui-pp-link" target="_blank">Privacy Policy</a>.</p>');
        return C(c)
    }

    function gh(a, b) {
        a = a.message;
        D["firebaseui.auth.soy2.element.infoBar"] ? b = D["firebaseui.auth.soy2.element.infoBar"]({ message: a }, b) : (E("string" === typeof a, "message", a, "string"), b = '<div class="firebaseui-info-bar firebaseui-id-info-bar"><p class="firebaseui-info-bar-message">' + B(a) + '&nbsp;&nbsp;<a href="javascript:void(0)" class="firebaseui-link firebaseui-id-dismiss-info-bar">', b = C(b + "Dismiss</a></p></div>"));
        return b
    }

    function hh(a, b, c) {
        if (D["firebaseui.auth.soy2.element.dialog"]) return D["firebaseui.auth.soy2.element.dialog"]({ content: b, ci: c }, a);
        E("string" === typeof b || b instanceof Pc || b instanceof Ob, "content", b, "!goog.html.SafeHtml|!goog.soy.data.SanitizedHtml|!soy.$$EMPTY_STRING_|string");
        E(null == c || "string" === typeof c, "classes", c, "null|string|undefined");
        return C('<dialog class="mdl-dialog firebaseui-dialog firebaseui-id-dialog' + (c ? " " + ud(c) : "") + '">' + B(b) + "</dialog>")
    }

    function ih(a, b) {
        var c = a.Zb;
        a = a.message;
        D["firebaseui.auth.soy2.element.progressDialog"] ? b = D["firebaseui.auth.soy2.element.progressDialog"]({ Zb: c, message: a }, b) : (E("string" === typeof c, "iconClass", c, "string"), E("string" === typeof a, "message", a, "string"), b = C(hh(b, sd('<div class="firebaseui-dialog-icon-wrapper"><div class="' + ud(c) + ' firebaseui-dialog-icon"></div></div><div class="firebaseui-progress-dialog-message">' + B(a) + "</div>"))));
        return b
    }

    function jh(a, b) {
        a = a.items;
        if (D["firebaseui.auth.soy2.element.listBoxDialog"]) b = D["firebaseui.auth.soy2.element.listBoxDialog"]({ items: a }, b);
        else {
            E(Array.isArray(a), "items", a, "!Array<{id: string, iconClass: string, label: string,}>");
            for (var c = '<div class="firebaseui-list-box-actions">', d = a.length, e = 0; e < d; e++) {
                var f = a[e];
                c += '<button type="button" data-listboxid="' + ud(f.id) + '" class="mdl-button firebaseui-id-list-box-dialog-button firebaseui-list-box-dialog-button">' + (f.Zb ? '<div class="firebaseui-list-box-icon-wrapper"><div class="firebaseui-list-box-icon ' +
                    ud(f.Zb) + '"></div></div>' : "") + '<div class="firebaseui-list-box-label-wrapper">' + B(f.label) + "</div></button>"
            }
            b = "" + hh(b, sd(c + "</div>"), "firebaseui-list-box-dialog");
            b = C(b)
        }
        return b
    }

    function kh(a, b) { a = a || {}; return lh(b, a.Df) }

    function lh(a, b) {
        if (D["firebaseui.auth.soy2.element.busyIndicator"]) return D["firebaseui.auth.soy2.element.busyIndicator"]({ Df: b }, a);
        E(null == b || "boolean" === typeof b, "useSpinner", b, "boolean|null|undefined");
        return C(b ? '<div class="mdl-spinner mdl-spinner--single-color mdl-js-spinner is-active firebaseui-busy-indicator firebaseui-id-busy-indicator"></div>' : '<div class="mdl-progress mdl-js-progress mdl-progress__indeterminate firebaseui-busy-indicator firebaseui-id-busy-indicator"></div>')
    }

    function mh(a, b) {
        a = a || {};
        a = a.U;
        D["firebaseui.auth.soy2.element.idpName"] ? b = D["firebaseui.auth.soy2.element.idpName"]({ U: a }, b) : (E(null == a || t(a), "providerConfig", a, "null|undefined|{providerId: (null|string|undefined), providerName: (null|string|undefined), fullLabel: (null|string|undefined), buttonColor: (null|string|undefined), iconUrl: (null|string|undefined),}"), b = b.sg, b = a.na ? "" + a.na : b[a.providerId] ? "" + b[a.providerId] : rd(a.providerId) && 0 == ("" + a.providerId).indexOf("saml.") ? "" + ("" + a.providerId).substring(5) :
            rd(a.providerId) && 0 == ("" + a.providerId).indexOf("oidc.") ? "" + ("" + a.providerId).substring(5) : "" + a.providerId);
        return b
    };

    function nh() { me(oh.call(this)) }

    function oh() { return this.A("firebaseui-id-info-bar") }

    function ph() { return this.A("firebaseui-id-dismiss-info-bar") };

    function qh(a, b, c) {
        var d = this;
        a = zg(jh, { items: a }, null, this.Cb());
        wg.call(this, a, !0, !0);
        c && (c = rh(a, c)) && (c.focus(), dg(c, a));
        I(this, a, function(e) { if (e = (e = oe(e.target, "firebaseui-id-list-box-dialog-button")) && Ug(e, "listboxid")) xg.call(d), b(e) })
    }

    function rh(a, b) {
        a = (a || document).getElementsByTagName("BUTTON");
        for (var c = 0; c < a.length; c++)
            if (Ug(a[c], "listboxid") === b) return a[c];
        return null
    };

    function sh() { return this.A("firebaseui-id-name") }

    function th() { return this.A("firebaseui-id-name-error") };

    function uh() { return this.A("firebaseui-id-new-password") }

    function vh() { return this.A("firebaseui-id-password-toggle") }

    function wh() {
        this.Ld = !this.Ld;
        var a = vh.call(this),
            b = uh.call(this);
        this.Ld ? (b.type = "text", Xd(a, "firebaseui-input-toggle-off"), Yd(a, "firebaseui-input-toggle-on")) : (b.type = "password", Xd(a, "firebaseui-input-toggle-on"), Yd(a, "firebaseui-input-toggle-off"));
        b.focus()
    }

    function xh() { return this.A("firebaseui-id-new-password-error") }

    function yh() {
        this.Ld = !1;
        var a = uh.call(this);
        a.type = "password";
        var b = xh.call(this);
        lg(this, a, function() { rg(b) && (H(a, !0), pg(b)) });
        var c = vh.call(this);
        Xd(c, "firebaseui-input-toggle-on");
        Yd(c, "firebaseui-input-toggle-off");
        ng(this, a, function() {
            Xd(c, "firebaseui-input-toggle-focus");
            Yd(c, "firebaseui-input-toggle-blur")
        });
        og(this, a, function() {
            Xd(c, "firebaseui-input-toggle-blur");
            Yd(c, "firebaseui-input-toggle-focus")
        });
        I(this, c, u(wh, this))
    }

    function zh() {
        var a = uh.call(this);
        var b = xh.call(this);
        re(a) ? (H(a, !0), pg(b), b = !0) : (H(a, !1), qg(b, Fg().toString()), b = !1);
        return b ? re(a) : null
    };

    function Ah() { return this.A("firebaseui-id-password") }

    function Bh() { return this.A("firebaseui-id-password-error") }

    function Ch() {
        var a = Ah.call(this),
            b = Bh.call(this);
        lg(this, a, function() { rg(b) && (H(a, !0), pg(b)) })
    }

    function Dh() {
        var a = Ah.call(this);
        var b = Bh.call(this);
        re(a) ? (H(a, !0), pg(b), b = !0) : (H(a, !1), qg(b, Fg().toString()), b = !1);
        return b ? re(a) : null
    };

    function Eh() { return this.A("firebaseui-id-phone-confirmation-code") }

    function Fh() { return this.A("firebaseui-id-phone-confirmation-code-error") };

    function Gh(a, b) {
        this.Ac = a;
        this.Va = b
    }

    function Hh(a) { a = lb(a); var b = Td.search(a); return 0 < b.length ? new Gh("1" == b[0].g ? "1-US-0" : b[0].h, lb(a.substr(b[0].g.length + 1))) : null }

    function Ih(a) { var b = Od(a.Ac); if (!b) throw Error("Country ID " + a.Ac + " not found."); return "+" + b.g + a.Va };

    function Jh() { return this.A("firebaseui-id-phone-number") }

    function Kh() { return this.A("firebaseui-id-country-selector") }

    function Lh() { return this.A("firebaseui-id-phone-number-error") }

    function Mh(a, b) {
        var c = a.Ta,
            d = Nh("1-US-0", c);
        b = b && Nh(b, c) ? b : d ? "1-US-0" : 0 < c.length ? c[0].h : null;
        if (!b) throw Error("No available default country");
        Oh.call(this, b, a)
    }

    function Nh(a, b) { a = Od(a); return !(!a || !Ma(b, a)) }

    function Ph(a) { return Ka(a, function(b) { return { id: b.h, Zb: "firebaseui-flag " + Qh(b), label: b.name + " \u200e+" + b.g } }) }

    function Qh(a) { return "firebaseui-flag-" + a.i }

    function Rh(a) {
        var b = this;
        qh.call(this, Ph(a.Ta), function(c) {
            Oh.call(b, c, a, !0);
            b.nb().focus()
        }, this.lc)
    }

    function Oh(a, b, c) {
        var d = Od(a);
        d && (c && (c = lb(re(Jh.call(this)) || ""), b = b.search(c), b.length && b[0].g != d.g && (c = "+" + d.g + c.substr(b[0].g.length + 1), se(Jh.call(this), c))), b = Od(this.lc), this.lc = a, a = this.A("firebaseui-id-country-selector-flag"), b && Yd(a, Qh(b)), Xd(a, Qh(d)), ne(this.A("firebaseui-id-country-selector-code"), "\u200e+" + d.g))
    };

    function Sh() { return this.A("firebaseui-id-resend-countdown") };
    var Th = {},
        Uh = 0;

    function Vh(a, b) {
        if (!a) throw Error("Event target element must be provided!");
        a = Wh(a);
        if (Th[a] && Th[a].length)
            for (var c = 0; c < Th[a].length; c++) Th[a][c].dispatchEvent(b)
    }

    function Xh(a) {
        var b = Wh(a.ia());
        Th[b] && Th[b].length && (Pa(Th[b], function(c) { return c == a }), Th[b].length || delete Th[b])
    }

    function Wh(a) { "undefined" === typeof a.Ge && (a.Ge = Uh, Uh++); return a.Ge }

    function Yh(a) {
        if (!a) throw Error("Event target element must be provided!");
        Xe.call(this);
        this.vg = a
    }
    l(Yh, Xe);
    Yh.prototype.ia = function() { return this.vg };
    Yh.prototype.register = function() {
        var a = Wh(this.ia());
        Th[a] ? Ma(Th[a], this) || Th[a].push(this) : Th[a] = [this]
    };
    Yh.prototype.unregister = function() { Xh(this) };
    var Zh = {
        rg: {
            "google.com": "https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg",
            "github.com": "https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/github.svg",
            "facebook.com": "https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/facebook.svg",
            "twitter.com": "https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/twitter.svg",
            password: "https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/mail.svg",
            phone: "https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/phone.svg",
            anonymous: "https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/anonymous.png",
            "microsoft.com": "https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/microsoft.svg",
            "yahoo.com": "https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/yahoo.svg",
            "apple.com": "https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/apple.png",
            saml: "https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/saml.svg",
            oidc: "https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/oidc.svg"
        },
        qg: {
            "google.com": "#ffffff",
            "github.com": "#333333",
            "facebook.com": "#3b5998",
            "twitter.com": "#55acee",
            password: "#db4437",
            phone: "#02bd7e",
            anonymous: "#f4b400",
            "microsoft.com": "#2F2F2F",
            "yahoo.com": "#720E9E",
            "apple.com": "#000000",
            saml: "#007bff",
            oidc: "#007bff"
        },
        sg: { "google.com": "Google", "github.com": "GitHub", "facebook.com": "Facebook", "twitter.com": "Twitter", password: "Password", phone: "Phone", anonymous: "Guest", "microsoft.com": "Microsoft", "yahoo.com": "Yahoo", "apple.com": "Apple" }
    };

    function $h(a, b, c) { xe.call(this, a, b); for (var d in c) this[d] = c[d] }
    x($h, xe);

    function L(a, b, c, d, e) {
        ig.call(this, c);
        this.sf = a;
        this.rf = b;
        this.Oc = !1;
        this.Vc = d || null;
        this.Sa = this.Ha = null;
        this.Eb = Ya(Zh);
        $a(this.Eb, e || {})
    }
    x(L, ig);
    h = L.prototype;
    h.vd = function() {
        var a = zg(this.sf, this.rf, this.Eb, this.Cb());
        sg(a);
        this.j = a
    };
    h.s = function() {
        L.$.s.call(this);
        Vh(M(this), new $h("pageEnter", M(this), { pageId: this.Vc }));
        if (this.Oe() && this.Eb.R) {
            var a = this.Eb.R;
            I(this, this.Oe(), function() { a() })
        }
        if (this.Ne() && this.Eb.O) {
            var b = this.Eb.O;
            I(this, this.Ne(), function() { b() })
        }
    };
    h.Ub = function() {
        Vh(M(this), new $h("pageExit", M(this), { pageId: this.Vc }));
        L.$.Ub.call(this)
    };
    h.l = function() {
        window.clearTimeout(this.Ha);
        this.rf = this.sf = this.Ha = null;
        this.Oc = !1;
        this.Sa = null;
        ug(this.ia());
        L.$.l.call(this)
    };

    function ai(a) {
        a.Oc = !0;
        var b = Wd(a.ia(), "firebaseui-use-spinner");
        a.Ha = window.setTimeout(function() { a.ia() && null === a.Sa && (a.Sa = zg(kh, { Df: b }, null, a.Cb()), a.ia().appendChild(a.Sa), sg(a.Sa)) }, 500)
    }
    h.ba = function(a, b, c, d) {
        function e() {
            if (f.isDisposed()) return null;
            f.Oc = !1;
            window.clearTimeout(f.Ha);
            f.Ha = null;
            f.Sa && (ug(f.Sa), me(f.Sa), f.Sa = null)
        }
        var f = this;
        if (f.Oc) return null;
        ai(f);
        return a.apply(null, b).then(c, d).then(e, e)
    };

    function M(a) { return a.ia().parentElement || a.ia().parentNode }

    function bi(a, b, c) { mg(a, b, function() { c.focus() }) }

    function ci(a, b, c) { mg(a, b, function() { c() }) }
    v(L.prototype, {
        J: function(a) {
            nh.call(this);
            var b = zg(gh, { message: a }, null, this.Cb());
            this.ia().appendChild(b);
            I(this, ph.call(this), function() { me(b) })
        },
        ei: nh,
        hi: oh,
        gi: ph,
        Lb: function(a, b) {
            a = zg(ih, { Zb: a, message: b }, null, this.Cb());
            wg.call(this, a)
        },
        fa: xg,
        Cg: yg,
        ji: function() { return this.A("firebaseui-tos") },
        Oe: function() { return this.A("firebaseui-tos-link") },
        Ne: function() { return this.A("firebaseui-pp-link") },
        ki: function() { return this.A("firebaseui-tos-list") }
    });

    function di(a, b) {
        if (D["firebaseui.auth.soy2.page.signIn"]) return D["firebaseui.auth.soy2.page.signIn"](a, b);
        a = a || {};
        E(null == a.email || "string" === typeof a.email, "email", a.email, "null|string|undefined");
        var c = E(null == a.lb || "boolean" === typeof a.lb, "displayCancelButton", a.lb, "boolean|null|undefined"),
            d = E(null == a.ga || "boolean" === typeof a.ga, "displayFullTosPpMessage", a.ga, "boolean|null|undefined");
        a = '<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-sign-in"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Sign in with email</h1></div><div class="firebaseui-card-content"><div class="firebaseui-relative-wrapper">' +
            (Vg(a, b) + '</div></div><div class="firebaseui-card-actions"><div class="firebaseui-form-actions">' + (c ? dh(b) : "") + Xg(b) + '</div></div><div class="firebaseui-card-footer">' + (d ? fh(a, b) : eh(a, b)) + "</div></form></div>");
        return C(a)
    }

    function ei(a, b) {
        if (D["firebaseui.auth.soy2.page.passwordSignIn"]) return D["firebaseui.auth.soy2.page.passwordSignIn"](a, b);
        a = a || {};
        E(null == a.email || "string" === typeof a.email, "email", a.email, "null|string|undefined");
        var c = E(null == a.ga || "boolean" === typeof a.ga, "displayFullTosPpMessage", a.ga, "boolean|null|undefined");
        a = '<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-password-sign-in"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Sign in' +
            ('</h1></div><div class="firebaseui-card-content">' + Vg(a, b) + bh(b) + '</div><div class="firebaseui-card-actions"><div class="firebaseui-form-links">' + ch(b) + '</div><div class="firebaseui-form-actions">' + Yg(b) + '</div></div><div class="firebaseui-card-footer">' + (c ? fh(a, b) : eh(a, b)) + "</div></form></div>");
        return C(a)
    }

    function fi(a, b) {
        if (D["firebaseui.auth.soy2.page.passwordSignUp"]) return D["firebaseui.auth.soy2.page.passwordSignUp"](a, b);
        a = a || {};
        E(null == a.email || "string" === typeof a.email, "email", a.email, "null|string|undefined");
        var c = E(null == a.Wd || "boolean" === typeof a.Wd, "requireDisplayName", a.Wd, "boolean|null|undefined");
        E(null == a.name || "string" === typeof a.name, "name", a.name, "null|string|undefined");
        var d = E(null == a.ib || "boolean" === typeof a.ib, "allowCancel", a.ib, "boolean|null|undefined"),
            e = E(null == a.ga || "boolean" ===
                typeof a.ga, "displayFullTosPpMessage", a.ga, "boolean|null|undefined"),
            f = '<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-password-sign-up"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Create account',
            g = '</h1></div><div class="firebaseui-card-content">' + Vg(a, b);
        c ? (c = a || {}, c = c.name, D["firebaseui.auth.soy2.element.name"] ? c = D["firebaseui.auth.soy2.element.name"]({ name: c }, b) : (E(null == c || "string" === typeof c, "name", c, "null|string|undefined"),
                c = '<div class="firebaseui-textfield mdl-textfield mdl-js-textfield mdl-textfield--floating-label"><label class="mdl-textfield__label firebaseui-label" for="name">First &amp; last name</label><input type="text" name="name" autocomplete="name" class="mdl-textfield__input firebaseui-input firebaseui-id-name" value="' + (ud(null != c ? c : "") + '"></div><div class="firebaseui-error-wrapper"><p class="firebaseui-error firebaseui-text-input-error firebaseui-hidden firebaseui-id-name-error"></p></div>'), c = C(c))) :
            c = "";
        a = f + (g + c + ah(b) + '</div><div class="firebaseui-card-actions"><div class="firebaseui-form-actions">' + (d ? dh(b) : "") + Zg(b) + '</div></div><div class="firebaseui-card-footer">' + (e ? fh(a, b) : eh(a, b)) + "</div></form></div>");
        return C(a)
    }

    function gi(a, b) {
        if (D["firebaseui.auth.soy2.page.passwordRecovery"]) return D["firebaseui.auth.soy2.page.passwordRecovery"](a, b);
        a = a || {};
        E(null == a.email || "string" === typeof a.email, "email", a.email, "null|string|undefined");
        var c = E(null == a.ib || "boolean" === typeof a.ib, "allowCancel", a.ib, "boolean|null|undefined");
        c = '<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-password-recovery"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Recover password</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">Get instructions sent to this email that explain how to reset your password</p>' +
            (Vg(a, b) + '</div><div class="firebaseui-card-actions"><div class="firebaseui-form-actions">' + (c ? dh(b) : ""));
        c += Xg(b, "Send");
        c += '</div></div><div class="firebaseui-card-footer">' + eh(a, b) + "</div></form></div>";
        return C(c)
    }

    function hi(a, b) {
        if (D["firebaseui.auth.soy2.page.passwordRecoveryEmailSent"]) return D["firebaseui.auth.soy2.page.passwordRecoveryEmailSent"](a, b);
        var c = E("string" === typeof a.email, "email", a.email, "string"),
            d = E(null == a.C || "boolean" === typeof a.C, "allowContinue", a.C, "boolean|null|undefined");
        var e = '<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-password-recovery-email-sent"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Check your email</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">';
        c = "Follow the instructions sent to <strong>" + (B(c) + "</strong> to recover your password");
        e = e + c + '</p></div><div class="firebaseui-card-actions">';
        d && (e = e + '<div class="firebaseui-form-actions">' + Xg(b, "Done"), e += "</div>");
        e += '</div><div class="firebaseui-card-footer">' + eh(a, b) + "</div></div>";
        return C(e)
    }

    function ii(a, b) { return D["firebaseui.auth.soy2.page.callback"] ? D["firebaseui.auth.soy2.page.callback"](a, b) : C('<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-callback"><div class="firebaseui-callback-indicator-container">' + lh(b) + "</div></div>") }

    function ji(a, b) { return D["firebaseui.auth.soy2.page.spinner"] ? D["firebaseui.auth.soy2.page.spinner"](a, b) : C('<div class="firebaseui-container firebaseui-id-page-spinner">' + lh(b, !0) + "</div>") }

    function ki(a, b) { return D["firebaseui.auth.soy2.page.blank"] ? D["firebaseui.auth.soy2.page.blank"](a, b) : C('<div class="firebaseui-container firebaseui-id-page-blank firebaseui-use-spinner"></div>') }

    function li(a, b) {
        if (D["firebaseui.auth.soy2.page.emailLinkSignInSent"]) return D["firebaseui.auth.soy2.page.emailLinkSignInSent"](a, b);
        var c = E("string" === typeof a.email, "email", a.email, "string");
        var d = '<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-email-link-sign-in-sent"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Sign-in email sent</h1></div><div class="firebaseui-card-content"><div class="firebaseui-email-sent"></div><p class="firebaseui-text">';
        c =
            "A sign-in email with additional instructions was sent to <strong>" + (B(c) + "</strong>. Check your email to complete sign-in.");
        d += c;
        c = D["firebaseui.auth.soy2.element.troubleGettingEmailButton"] ? D["firebaseui.auth.soy2.element.troubleGettingEmailButton"](null, b) : C('<a class="firebaseui-link firebaseui-id-trouble-getting-email-link" href="javascript:void(0)">Trouble getting email?</a>');
        d = d + ('</p></div><div class="firebaseui-card-actions"><div class="firebaseui-form-links">' + c + '</div><div class="firebaseui-form-actions">') +
            dh(b, "Back");
        d += '</div></div><div class="firebaseui-card-footer">' + eh(a, b) + "</div></form></div>";
        return C(d)
    }

    function mi(a, b) {
        if (D["firebaseui.auth.soy2.page.emailNotReceived"]) return D["firebaseui.auth.soy2.page.emailNotReceived"](a, b);
        a = a || {};
        var c = '<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-email-not-received"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Trouble getting email?</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">Try these common fixes:<ul><li>Check if the email was marked as spam or filtered.</li><li>Check your internet connection.</li><li>Check that you did not misspell your email.</li><li>Check that your inbox space is not running out or other inbox settings related issues.</li></ul></p><p class="firebaseui-text">If the steps above didn\'t work, you can resend the email. Note that this will deactivate the link in the older email.';
        var d =
            D["firebaseui.auth.soy2.element.resendEmailLinkButton"] ? D["firebaseui.auth.soy2.element.resendEmailLinkButton"](null, b) : C('<a class="firebaseui-link firebaseui-id-resend-email-link" href="javascript:void(0)">Resend</a>');
        c = c + ('</p></div><div class="firebaseui-card-actions"><div class="firebaseui-form-links">' + d + '</div><div class="firebaseui-form-actions">') + dh(b, "Back");
        c += '</div></div><div class="firebaseui-card-footer">' + eh(a, b) + "</div></form></div>";
        return C(c)
    }

    function ni(a, b) {
        if (D["firebaseui.auth.soy2.page.emailLinkSignInConfirmation"]) return D["firebaseui.auth.soy2.page.emailLinkSignInConfirmation"](a, b);
        a = a || {};
        E(null == a.email || "string" === typeof a.email, "email", a.email, "null|string|undefined");
        a = '<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-email-link-sign-in-confirmation"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Confirm email</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">Confirm your email to complete sign in</p><div class="firebaseui-relative-wrapper">' +
            (Vg(a, b) + '</div></div><div class="firebaseui-card-actions"><div class="firebaseui-form-actions">' + dh(b) + Xg(b) + '</div></div><div class="firebaseui-card-footer">' + eh(a, b) + "</div></form></div>");
        return C(a)
    }

    function oi(a, b) {
        if (D["firebaseui.auth.soy2.page.differentDeviceError"]) return D["firebaseui.auth.soy2.page.differentDeviceError"](a, b);
        a = '<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-different-device-error"><div class="firebaseui-card-header"><h1 class="firebaseui-title">New device or browser detected</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">Try opening the link using the same device or browser where you started the sign-in process.</p></div><div class="firebaseui-card-actions"><div class="firebaseui-form-actions">' + dh(b,
            "Dismiss");
        return C(a + "</div></div></div>")
    }

    function pi(a, b) {
        if (D["firebaseui.auth.soy2.page.anonymousUserMismatch"]) return D["firebaseui.auth.soy2.page.anonymousUserMismatch"](a, b);
        a = '<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-anonymous-user-mismatch"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Session ended</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">The session associated with this sign-in request has either expired or was cleared.</p></div><div class="firebaseui-card-actions"><div class="firebaseui-form-actions">' + dh(b,
            "Dismiss");
        return C(a + "</div></div></div>")
    }

    function qi(a, b) {
        if (D["firebaseui.auth.soy2.page.passwordLinking"]) return D["firebaseui.auth.soy2.page.passwordLinking"](a, b);
        var c = E("string" === typeof a.email, "email", a.email, "string");
        var d = '<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-password-linking"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Sign in</h1></div><div class="firebaseui-card-content"><h2 class="firebaseui-subtitle">You already have an account</h2><p class="firebaseui-text">';
        c =
            "You\u2019ve already used <strong>" + (B(c) + "</strong> to sign in. Enter your password for that account.");
        d = d + c + ("</p>" + bh(b) + '</div><div class="firebaseui-card-actions"><div class="firebaseui-form-links">' + ch(b) + '</div><div class="firebaseui-form-actions">' + Yg(b) + '</div></div><div class="firebaseui-card-footer">' + eh(a, b) + "</div></form></div>");
        return C(d)
    }

    function ri(a, b) {
        if (D["firebaseui.auth.soy2.page.emailLinkSignInLinking"]) return D["firebaseui.auth.soy2.page.emailLinkSignInLinking"](a, b);
        var c = E("string" === typeof a.email, "email", a.email, "string");
        E(null == a.U || t(a.U), "providerConfig", a.U, "null|undefined|{providerId: (null|string|undefined), providerName: (null|string|undefined), fullLabel: (null|string|undefined), buttonColor: (null|string|undefined), iconUrl: (null|string|undefined),}");
        var d = "",
            e = "" + mh(a, b);
        d += '<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-email-link-sign-in-linking"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Sign in</h1></div><div class="firebaseui-card-content"><h2 class="firebaseui-subtitle">You already have an account</h2><p class="firebaseui-text firebaseui-text-justify">';
        c = "You\u2019ve already used <strong>" + (B(c) + ("</strong>. You can connect your <strong>" + (B(e) + ("</strong> account with <strong>" + (B(c) + "</strong> by signing in with email link below.")))));
        d = d + c + '<p class="firebaseui-text firebaseui-text-justify">';
        e = "For this flow to successfully connect your " + (B(e) + " account with this email, you have to open the link on the same device or browser.");
        d = d + e + ('</p></div><div class="firebaseui-card-actions"><div class="firebaseui-form-actions">' + Yg(b) + '</div></div><div class="firebaseui-card-footer">' +
            eh(a, b) + "</div></form></div>");
        return C(d)
    }

    function si(a, b) {
        if (D["firebaseui.auth.soy2.page.emailLinkSignInLinkingDifferentDevice"]) return D["firebaseui.auth.soy2.page.emailLinkSignInLinkingDifferentDevice"](a, b);
        a = a || {};
        E(null == a.U || t(a.U), "providerConfig", a.U, "null|undefined|{providerId: (null|string|undefined), providerName: (null|string|undefined), fullLabel: (null|string|undefined), buttonColor: (null|string|undefined), iconUrl: (null|string|undefined),}");
        var c = "",
            d = "" + mh(a, b);
        c += '<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-email-link-sign-in-linking-different-device"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Sign in</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text firebaseui-text-justify">';
        var e =
            "You originally intended to connect <strong>" + (B(d) + "</strong> to your email account but have opened the link on a different device where you are not signed in.");
        c = c + e + '</p><p class="firebaseui-text firebaseui-text-justify">';
        d = "If you still want to connect your <strong>" + (B(d) + "</strong> account, open the link on the same device where you started sign-in. Otherwise, tap Continue to sign-in on this device.");
        c = c + d + ('</p></div><div class="firebaseui-card-actions"><div class="firebaseui-form-actions">' +
            $g(b) + '</div></div><div class="firebaseui-card-footer">' + eh(a, b) + "</div></form></div>");
        return C(c)
    }

    function ti(a, b) {
        if (D["firebaseui.auth.soy2.page.federatedLinking"]) return D["firebaseui.auth.soy2.page.federatedLinking"](a, b);
        var c = E("string" === typeof a.email, "email", a.email, "string");
        E(null == a.U || t(a.U), "providerConfig", a.U, "null|undefined|{providerId: (null|string|undefined), providerName: (null|string|undefined), fullLabel: (null|string|undefined), buttonColor: (null|string|undefined), iconUrl: (null|string|undefined),}");
        var d = "",
            e = "" + mh(a, b);
        d += '<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-federated-linking"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Sign in</h1></div><div class="firebaseui-card-content"><h2 class="firebaseui-subtitle">You already have an account</h2><p class="firebaseui-text">';
        c = "You\u2019ve already used <strong>" + (B(c) + ("</strong>. Sign in with " + (B(e) + " to continue.")));
        d = d + c + '</p></div><div class="firebaseui-card-actions"><div class="firebaseui-form-actions">' + Xg(b, "Sign in with " + e);
        d += '</div></div><div class="firebaseui-card-footer">' + eh(a, b) + "</div></form></div>";
        return C(d)
    }

    function ui(a, b) {
        if (D["firebaseui.auth.soy2.page.unauthorizedUser"]) return D["firebaseui.auth.soy2.page.unauthorizedUser"](a, b);
        a = a || {};
        var c = E(null == a.email || "string" === typeof a.email, "email", a.email, "null|string|undefined"),
            d = E(null == a.md || "string" === typeof a.md, "adminEmail", a.md, "null|string|undefined"),
            e = E(null == a.wd || "boolean" === typeof a.wd, "displayHelpLink", a.wd, "boolean|null|undefined");
        var f = '<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-unauthorized-user"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Not Authorized</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">';
        c ? (c = "<strong>" + (B(c) + "</strong> is not authorized to view the requested page."), f += c) : f += "User is not authorized to view the requested page.";
        f += "</p>";
        d && (f += '<p class="firebaseui-text firebaseui-id-unauthorized-user-admin-email">', d = "Please contact <strong>" + (B(d) + "</strong> for authorization."), f = f + d + "</p>");
        f += '</div><div class="firebaseui-card-actions"><div class="firebaseui-form-links">';
        e && (f += '<a class="firebaseui-link firebaseui-id-unauthorized-user-help-link" href="javascript:void(0)" target="_blank">Learn More</a>');
        f = f + '</div><div class="firebaseui-form-actions">' + dh(b, "Back");
        f += '</div></div><div class="firebaseui-card-footer">' + eh(a, b) + "</div></form></div>";
        return C(f)
    }

    function vi(a, b) {
        if (D["firebaseui.auth.soy2.page.unsupportedProvider"]) return D["firebaseui.auth.soy2.page.unsupportedProvider"](a, b);
        var c = E("string" === typeof a.email, "email", a.email, "string");
        var d = '<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-unsupported-provider"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Sign in</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">';
        c = "To continue sign in with <strong>" +
            (B(c) + "</strong> on this device, you have to recover the password.");
        d = d + c + ('</p></div><div class="firebaseui-card-actions"><div class="firebaseui-form-actions">' + dh(b));
        d += Xg(b, "Recover password");
        d += '</div></div><div class="firebaseui-card-footer">' + eh(a, b) + "</div></form></div>";
        return C(d)
    }

    function wi(a, b) {
        if (D["firebaseui.auth.soy2.page.passwordReset"]) return D["firebaseui.auth.soy2.page.passwordReset"](a, b);
        var c = E("string" === typeof a.email, "email", a.email, "string");
        var d = '<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-password-reset"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Reset your password</h1></div><div class="firebaseui-card-content">';
        c = '<p class="firebaseui-text">for <strong>' + (B(c) + "</strong></p>");
        d += c;
        c = { label: "New password" };
        for (var e in a) e in c || (c[e] = a[e]);
        a = c || {};
        a = ah(b, a.label);
        d = d + a + ('</div><div class="firebaseui-card-actions"><div class="firebaseui-form-actions">' + Zg(b) + "</div></div></form></div>");
        return C(d)
    }

    function xi(a, b) {
        a = a || {};
        a = a.C;
        D["firebaseui.auth.soy2.page.passwordResetSuccess"] ? b = D["firebaseui.auth.soy2.page.passwordResetSuccess"]({ C: a }, b) : (E(null == a || "boolean" === typeof a, "allowContinue", a, "boolean|null|undefined"), b = '<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-password-reset-success"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Password changed</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">You can now sign in with your new password</p></div><div class="firebaseui-card-actions">' + ((a ?
            '<div class="firebaseui-form-actions">' + $g(b) + "</div>" : "") + "</div></div>"), b = C(b));
        return b
    }

    function yi(a, b) {
        a = a || {};
        a = a.C;
        D["firebaseui.auth.soy2.page.passwordResetFailure"] ? b = D["firebaseui.auth.soy2.page.passwordResetFailure"]({ C: a }, b) : (E(null == a || "boolean" === typeof a, "allowContinue", a, "boolean|null|undefined"), b = '<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-password-reset-failure"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Try resetting your password again</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">Your request to reset your password has expired or the link has already been used</p></div><div class="firebaseui-card-actions">' + ((a ?
            '<div class="firebaseui-form-actions">' + $g(b) + "</div>" : "") + "</div></div>"), b = C(b));
        return b
    }

    function zi(a, b) {
        var c = a.email;
        a = a.C;
        if (D["firebaseui.auth.soy2.page.emailChangeRevokeSuccess"]) b = D["firebaseui.auth.soy2.page.emailChangeRevokeSuccess"]({ email: c, C: a }, b);
        else {
            E("string" === typeof c, "email", c, "string");
            E(null == a || "boolean" === typeof a, "allowContinue", a, "boolean|null|undefined");
            var d = '<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-email-change-revoke-success"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Updated email address</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">';
            c =
                "Your sign-in email address has been changed back to <strong>" + (B(c) + "</strong>.");
            d = d + c + '</p><p class="firebaseui-text">If you didn\u2019t ask to change your sign-in email, it\u2019s possible someone is trying to access your account and you should <a class="firebaseui-link firebaseui-id-reset-password-link" href="javascript:void(0)">change your password right away</a>.';
            d += '</p></div><div class="firebaseui-card-actions">' + (a ? '<div class="firebaseui-form-actions">' + $g(b) + "</div>" : "") + "</div></form></div>";
            b = C(d)
        }
        return b
    }

    function Ai(a, b) {
        a = a || {};
        a = a.C;
        D["firebaseui.auth.soy2.page.emailChangeRevokeFailure"] ? b = D["firebaseui.auth.soy2.page.emailChangeRevokeFailure"]({ C: a }, b) : (E(null == a || "boolean" === typeof a, "allowContinue", a, "boolean|null|undefined"), b = '<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-email-change-revoke-failure"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Unable to update your email address</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">There was a problem changing your sign-in email back.</p><p class="firebaseui-text">If you try again and still can\u2019t reset your email, try asking your administrator for help.</p></div><div class="firebaseui-card-actions">' + ((a ?
            '<div class="firebaseui-form-actions">' + $g(b) + "</div>" : "") + "</div></div>"), b = C(b));
        return b
    }

    function Bi(a, b) {
        a = a || {};
        a = a.C;
        D["firebaseui.auth.soy2.page.emailVerificationSuccess"] ? b = D["firebaseui.auth.soy2.page.emailVerificationSuccess"]({ C: a }, b) : (E(null == a || "boolean" === typeof a, "allowContinue", a, "boolean|null|undefined"), b = '<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-email-verification-success"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Your email has been verified</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">You can now sign in with your new account</p></div><div class="firebaseui-card-actions">' + ((a ?
            '<div class="firebaseui-form-actions">' + $g(b) + "</div>" : "") + "</div></div>"), b = C(b));
        return b
    }

    function Ci(a, b) {
        a = a || {};
        a = a.C;
        D["firebaseui.auth.soy2.page.emailVerificationFailure"] ? b = D["firebaseui.auth.soy2.page.emailVerificationFailure"]({ C: a }, b) : (E(null == a || "boolean" === typeof a, "allowContinue", a, "boolean|null|undefined"), b = '<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-email-verification-failure"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Try verifying your email again</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">Your request to verify your email has expired or the link has already been used</p></div><div class="firebaseui-card-actions">' + ((a ?
            '<div class="firebaseui-form-actions">' + $g(b) + "</div>" : "") + "</div></div>"), b = C(b));
        return b
    }

    function Di(a, b) {
        var c = a.email;
        a = a.C;
        if (D["firebaseui.auth.soy2.page.verifyAndChangeEmailSuccess"]) b = D["firebaseui.auth.soy2.page.verifyAndChangeEmailSuccess"]({ email: c, C: a }, b);
        else {
            E("string" === typeof c, "email", c, "string");
            E(null == a || "boolean" === typeof a, "allowContinue", a, "boolean|null|undefined");
            var d = '<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-verify-and-change-email-success"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Your email has been verified and changed</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">';
            c =
                "You can now sign in with your new email <strong>" + (B(c) + "</strong>.");
            d = d + c + ('</p></div><div class="firebaseui-card-actions">' + (a ? '<div class="firebaseui-form-actions">' + $g(b) + "</div>" : "") + "</div></div>");
            b = C(d)
        }
        return b
    }

    function Ei(a, b) {
        a = a || {};
        a = a.C;
        D["firebaseui.auth.soy2.page.verifyAndChangeEmailFailure"] ? b = D["firebaseui.auth.soy2.page.verifyAndChangeEmailFailure"]({ C: a }, b) : (E(null == a || "boolean" === typeof a, "allowContinue", a, "boolean|null|undefined"), b = '<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-verify-and-change-email-failure"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Try updating your email again</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">Your request to verify and update your email has expired or the link has already been used.</p></div><div class="firebaseui-card-actions">' + ((a ?
            '<div class="firebaseui-form-actions">' + $g(b) + "</div>" : "") + "</div></div>"), b = C(b));
        return b
    }

    function Fi(a, b) {
        var c = a.factorId,
            d = a.phoneNumber;
        a = a.C;
        if (D["firebaseui.auth.soy2.page.revertSecondFactorAdditionSuccess"]) b = D["firebaseui.auth.soy2.page.revertSecondFactorAdditionSuccess"]({ factorId: c, phoneNumber: d, C: a }, b);
        else {
            E("string" === typeof c, "factorId", c, "string");
            E(null == d || "string" === typeof d, "phoneNumber", d, "null|string|undefined");
            E(null == a || "boolean" === typeof a, "allowContinue", a, "boolean|null|undefined");
            var e = '<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-revert-second-factor-addition-success"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Removed second factor</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">';
            switch (t(c) ? c.toString() : c) {
                case "phone":
                    c = "The <strong>" + (B(c) + (" " + (B(d) + "</strong> was removed as a second authentication step.")));
                    e += c;
                    break;
                default:
                    e += "The device or app was removed as a second authentication step."
            }
            e = e + '</p><p class="firebaseui-text">If you don\'t recognize this device, someone might be trying to access your account. Consider <a class="firebaseui-link firebaseui-id-reset-password-link" href="javascript:void(0)">changing your password right away</a>.</p></div><div class="firebaseui-card-actions">' +
                ((a ? '<div class="firebaseui-form-actions">' + $g(b) + "</div>" : "") + "</div></form></div>");
            b = C(e)
        }
        return b
    }

    function Gi(a, b) {
        a = a || {};
        a = a.C;
        D["firebaseui.auth.soy2.page.revertSecondFactorAdditionFailure"] ? b = D["firebaseui.auth.soy2.page.revertSecondFactorAdditionFailure"]({ C: a }, b) : (E(null == a || "boolean" === typeof a, "allowContinue", a, "boolean|null|undefined"), b = '<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-revert-second-factor-addition-failure"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Couldn\'t remove your second factor</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">Something went wrong removing your second factor.</p><p class="firebaseui-text">Try removing it again. If that doesn\'t work, contact support for assistance.</p></div><div class="firebaseui-card-actions">' + ((a ?
            '<div class="firebaseui-form-actions">' + $g(b) + "</div>" : "") + "</div></div>"), b = C(b));
        return b
    }

    function Hi(a, b) {
        var c = a.errorMessage;
        a = a.oe;
        D["firebaseui.auth.soy2.page.recoverableError"] ? b = D["firebaseui.auth.soy2.page.recoverableError"]({ errorMessage: c, oe: a }, b) : (E("string" === typeof c, "errorMessage", c, "string"), E(null == a || "boolean" === typeof a, "allowRetry", a, "boolean|null|undefined"), c = '<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-recoverable-error"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Error encountered</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">' + (B(c) +
            '</p></div><div class="firebaseui-card-actions"><div class="firebaseui-form-actions">'), a && (c += Xg(b, "Retry")), b = C(c + "</div></div></div>"));
        return b
    }

    function Ii(a, b) {
        a = a.errorMessage;
        D["firebaseui.auth.soy2.page.unrecoverableError"] ? b = D["firebaseui.auth.soy2.page.unrecoverableError"]({ errorMessage: a }, b) : (E("string" === typeof a, "errorMessage", a, "string"), b = '<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-unrecoverable-error"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Error encountered</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">' + (B(a) + "</p></div></div>"), b = C(b));
        return b
    }

    function Ji(a, b) {
        if (D["firebaseui.auth.soy2.page.emailMismatch"]) return D["firebaseui.auth.soy2.page.emailMismatch"](a, b);
        var c = E("string" === typeof a.Ef, "userEmail", a.Ef, "string"),
            d = E("string" === typeof a.hf, "pendingEmail", a.hf, "string");
        var e = '<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-email-mismatch"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Sign in</h1></div><div class="firebaseui-card-content"><h2 class="firebaseui-subtitle">';
        c = "Continue with " + (B(c) + "?");
        e = e + c + '</h2><p class="firebaseui-text">';
        d = "You originally wanted to sign in with " + B(d);
        e = e + d + ('</p></div><div class="firebaseui-card-actions"><div class="firebaseui-form-actions">' + dh(b));
        e += Xg(b, "Continue");
        e += '</div></div><div class="firebaseui-card-footer">' + eh(a, b) + "</div></form></div>";
        return C(e)
    }

    function Ki(a, b) {
        if (D["firebaseui.auth.soy2.page.providerSignIn"]) return D["firebaseui.auth.soy2.page.providerSignIn"](a, b);
        for (var c = E(Array.isArray(a.kf), "providerConfigs", a.kf, "!Array<{providerId: string, providerName: (null|string|undefined), fullLabel: (null|string|undefined), buttonColor: (null|string|undefined), iconUrl: (null|string|undefined),}>"), d = '<div class="firebaseui-container firebaseui-page-provider-sign-in firebaseui-id-page-provider-sign-in firebaseui-use-spinner"><div class="firebaseui-card-content"><form onsubmit="return false;"><ul class="firebaseui-idp-list">',
                e = c.length, f = 0; f < e; f++) {
            var g = { U: c[f] },
                k = b;
            if (D["firebaseui.auth.soy2.element.idpButton"]) var n = D["firebaseui.auth.soy2.element.idpButton"](g, k);
            else {
                g = g || {};
                n = E(null == g.U || t(g.U), "providerConfig", g.U, "null|undefined|{providerId: string, providerName: (null|string|undefined), fullLabel: (null|string|undefined), buttonColor: (null|string|undefined), iconUrl: (null|string|undefined),}");
                var p = (p = g) || {};
                var m = p.U;
                if (D["firebaseui.auth.soy2.element.idpClass_"]) p = D["firebaseui.auth.soy2.element.idpClass_"]({ U: m },
                    k);
                else switch (E(null == m || t(m), "providerConfig", m, "null|undefined|{providerId: string, providerName: (null|string|undefined), fullLabel: (null|string|undefined), buttonColor: (null|string|undefined), iconUrl: (null|string|undefined),}"), p = "", m = m.providerId, t(m) ? m.toString() : m) {
                    case "google.com":
                        p += "firebaseui-idp-google";
                        break;
                    case "github.com":
                        p += "firebaseui-idp-github";
                        break;
                    case "facebook.com":
                        p += "firebaseui-idp-facebook";
                        break;
                    case "twitter.com":
                        p += "firebaseui-idp-twitter";
                        break;
                    case "phone":
                        p +=
                            "firebaseui-idp-phone";
                        break;
                    case "anonymous":
                        p += "firebaseui-idp-anonymous";
                        break;
                    case "password":
                        p += "firebaseui-idp-password";
                        break;
                    default:
                        p += "firebaseui-idp-generic"
                }
                p = '<button class="firebaseui-idp-button mdl-button mdl-js-button mdl-button--raised ' + ud(p) + ' firebaseui-id-idp-button" data-provider-id="' + ud(n.providerId) + '" style="background-color:';
                var q = g;
                m = k;
                q = q || {};
                q = q.U;
                D["firebaseui.auth.soy2.element.idpColor_"] ? m = D["firebaseui.auth.soy2.element.idpColor_"]({ U: q }, m) : (E(null == q || t(q), "providerConfig",
                    q, "null|undefined|{providerId: string, providerName: (null|string|undefined), fullLabel: (null|string|undefined), buttonColor: (null|string|undefined), iconUrl: (null|string|undefined),}"), m = m.qg, m = q.Rb ? "" + q.Rb : m[q.providerId] ? "" + m[q.providerId] : 0 == ("" + q.providerId).indexOf("saml.") ? "" + m.saml : 0 == ("" + q.providerId).indexOf("oidc.") ? "" + m.oidc : "" + m.password);
                p = p + ud(Fd(m)) + '"><span class="firebaseui-idp-icon-wrapper"><img class="firebaseui-idp-icon" alt="" src="';
                q = g;
                m = k;
                q = q || {};
                q = q.U;
                D["firebaseui.auth.soy2.element.idpLogo_"] ?
                    m = D["firebaseui.auth.soy2.element.idpLogo_"]({ U: q }, m) : (E(null == q || t(q), "providerConfig", q, "null|undefined|{providerId: string, providerName: (null|string|undefined), fullLabel: (null|string|undefined), buttonColor: (null|string|undefined), iconUrl: (null|string|undefined),}"), m = m.rg, m = q.$b ? yd(q.$b) : m[q.providerId] ? yd(m[q.providerId]) : 0 == ("" + q.providerId).indexOf("saml.") ? yd(m.saml) : 0 == ("" + q.providerId).indexOf("oidc.") ? yd(m.oidc) : yd(m.password), m = pd(m));
                p = p + ud(Dd(m)) + '"></span>';
                qd(n.providerId, "password") ?
                    (p += '<span class="firebaseui-idp-text firebaseui-idp-text-long">', n.va ? p += B(n.va) : n.na ? (g = "Sign in with " + B(mh(g, k)), p += g) : p += "Sign in with email", p += '</span><span class="firebaseui-idp-text firebaseui-idp-text-short">', p = n.na ? p + B(n.na) : p + "Email", p += "</span>") : qd(n.providerId, "phone") ? (p += '<span class="firebaseui-idp-text firebaseui-idp-text-long">', n.va ? p += B(n.va) : n.na ? (g = "Sign in with " + B(mh(g, k)), p += g) : p += "Sign in with phone", p += '</span><span class="firebaseui-idp-text firebaseui-idp-text-short">',
                        p = n.na ? p + B(n.na) : p + "Phone", p += "</span>") : qd(n.providerId, "anonymous") ? (p += '<span class="firebaseui-idp-text firebaseui-idp-text-long">', n.va ? p += B(n.va) : n.na ? (g = "Sign in with " + B(mh(g, k)), p += g) : p += "Continue as guest", p += '</span><span class="firebaseui-idp-text firebaseui-idp-text-short">', p = n.na ? p + B(n.na) : p + "Guest", p += "</span>") : (p += '<span class="firebaseui-idp-text firebaseui-idp-text-long">', n.va ? p += B(n.va) : (m = "Sign in with " + B(mh(g, k)), p += m), p += '</span><span class="firebaseui-idp-text firebaseui-idp-text-short">' +
                        (n.na ? B(n.na) : B(mh(g, k))) + "</span>");
                n = C(p + "</button>")
            }
            d += '<li class="firebaseui-list-item">' + n + "</li>"
        }
        d += '</ul></form></div><div class="firebaseui-card-footer firebaseui-provider-sign-in-footer">' + fh(a, b) + "</div></div>";
        return C(d)
    }

    function Li(a, b) {
        if (D["firebaseui.auth.soy2.page.phoneSignInStart"]) return D["firebaseui.auth.soy2.page.phoneSignInStart"](a, b);
        a = a || {};
        E(null == a.Va || "string" === typeof a.Va, "nationalNumber", a.Va, "null|string|undefined");
        var c = E(null == a.xd || "boolean" === typeof a.xd, "enableVisibleRecaptcha", a.xd, "boolean|null|undefined"),
            d = E(null == a.lb || "boolean" === typeof a.lb, "displayCancelButton", a.lb, "boolean|null|undefined"),
            e = E(null == a.ga || "boolean" === typeof a.ga, "displayFullTosPpMessage", a.ga, "boolean|null|undefined"),
            f = '<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-phone-sign-in-start"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Enter your phone number';
        var g = a || {};
        g = g.Va;
        D["firebaseui.auth.soy2.element.phoneNumber"] ? g = D["firebaseui.auth.soy2.element.phoneNumber"]({ Va: g }, b) : (E(null == g || "string" === typeof g, "nationalNumber", g, "null|string|undefined"), g = '<div class="firebaseui-phone-number"><button class="firebaseui-id-country-selector firebaseui-country-selector mdl-button mdl-js-button"><span class="firebaseui-flag firebaseui-country-selector-flag firebaseui-id-country-selector-flag"></span><span class="firebaseui-id-country-selector-code"></span></button><div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label firebaseui-textfield firebaseui-phone-input-wrapper"><label class="mdl-textfield__label firebaseui-label" for="phoneNumber">Phone number</label><input type="tel" name="phoneNumber" class="mdl-textfield__input firebaseui-input firebaseui-id-phone-number" value="' +
            (ud(null != g ? g : "") + '"></div></div><div class="firebaseui-error-wrapper"><p class="firebaseui-error firebaseui-text-input-error firebaseui-hidden firebaseui-phone-number-error firebaseui-id-phone-number-error"></p></div>'), g = C(g));
        g = '</h1></div><div class="firebaseui-card-content"><div class="firebaseui-relative-wrapper">' + g;
        c = c ? D["firebaseui.auth.soy2.element.recaptcha"] ? D["firebaseui.auth.soy2.element.recaptcha"](null, b) : C('<div class="firebaseui-recaptcha-wrapper"><div class="firebaseui-recaptcha-container"></div><div class="firebaseui-error-wrapper firebaseui-recaptcha-error-wrapper"><p class="firebaseui-error firebaseui-hidden firebaseui-id-recaptcha-error"></p></div></div>') :
            "";
        d = f + (g + c + '</div></div><div class="firebaseui-card-actions"><div class="firebaseui-form-actions">' + (d ? dh(b) : ""));
        d += Xg(b, "Verify");
        e ? D["firebaseui.auth.soy2.element.phoneTosPp"] ? b = D["firebaseui.auth.soy2.element.phoneTosPp"](a, b) : (a = b.O, e = '<p class="firebaseui-tos firebaseui-phone-tos">', e = rd(b.R) && rd(a) ? e + 'By tapping Verify, you are indicating that you accept our <a href="javascript:void(0)" class="firebaseui-link firebaseui-tos-link" target="_blank">Terms of Service</a> and <a href="javascript:void(0)" class="firebaseui-link firebaseui-pp-link" target="_blank">Privacy Policy</a>. An SMS may be sent. Message &amp; data rates may apply.' :
            e + "By tapping Verify, an SMS may be sent. Message &amp; data rates may apply.", b = C(e + "</p>")) : (e = D["firebaseui.auth.soy2.element.phoneAuthSmsNotice"] ? D["firebaseui.auth.soy2.element.phoneAuthSmsNotice"](null, b) : C('<p class="firebaseui-tos firebaseui-phone-sms-notice">By tapping Verify, an SMS may be sent. Message &amp; data rates may apply.</p>'), b = e + eh(a, b));
        return C(d + ('</div></div><div class="firebaseui-card-footer">' + b + "</div></form></div>"))
    }

    function Mi(a, b) {
        if (D["firebaseui.auth.soy2.page.phoneSignInFinish"]) return D["firebaseui.auth.soy2.page.phoneSignInFinish"](a, b);
        a = a || {};
        var c = E(null == a.phoneNumber || "string" === typeof a.phoneNumber, "phoneNumber", a.phoneNumber, "null|string|undefined");
        var d = '<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-phone-sign-in-finish"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Verify your phone number</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">';
        var e = 'Enter the 6-digit code we sent to <a class="firebaseui-link firebaseui-change-phone-number-link firebaseui-id-change-phone-number-link" href="javascript:void(0)">&lrm;' + (B(c) + "</a>");
        B(c);
        c = d + e;
        d = D["firebaseui.auth.soy2.element.phoneConfirmationCode"] ? D["firebaseui.auth.soy2.element.phoneConfirmationCode"](null, b) : C('<div class="firebaseui-textfield mdl-textfield mdl-js-textfield mdl-textfield--floating-label"><label class="mdl-textfield__label firebaseui-label" for="phoneConfirmationCode">6-digit code</label><input type="number" name="phoneConfirmationCode" class="mdl-textfield__input firebaseui-input firebaseui-id-phone-confirmation-code"></div><div class="firebaseui-error-wrapper"><p class="firebaseui-error firebaseui-text-input-error firebaseui-hidden firebaseui-id-phone-confirmation-code-error"></p></div>');
        d = c + ("</p>" + d + '</div><div class="firebaseui-card-actions"><div class="firebaseui-form-actions">' + dh(b));
        c = d += Xg(b, "Continue");
        a = '</div></div><div class="firebaseui-card-footer">' + eh(a, b) + "</div></form>";
        b = D["firebaseui.auth.soy2.element.resend"] ? D["firebaseui.auth.soy2.element.resend"](null, b) : C('<div class="firebaseui-resend-container"><span class="firebaseui-id-resend-countdown"></span><a href="javascript:void(0)" class="firebaseui-id-resend-link firebaseui-hidden firebaseui-link">Resend</a></div>');
        return C(c + (a + b + "</div>"))
    }

    function Ni(a, b) { return D["firebaseui.auth.soy2.page.signOut"] ? D["firebaseui.auth.soy2.page.signOut"](a, b) : C('<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-sign-out"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Sign Out</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">You are now successfully signed out.</p></div></div>') }

    function Oi(a, b) {
        if (D["firebaseui.auth.soy2.page.selectTenant"]) return D["firebaseui.auth.soy2.page.selectTenant"](a, b);
        for (var c = E(Array.isArray(a.tf), "tenantConfigs", a.tf, "!Array<{tenantId: (null|string|undefined), fullLabel: (null|string|undefined), displayName: string, buttonColor: string, iconUrl: string,}>"), d = '<div class="firebaseui-container firebaseui-page-select-tenant firebaseui-id-page-select-tenant"><div class="firebaseui-card-content"><form onsubmit="return false;"><ul class="firebaseui-tenant-list">',
                e = c.length, f = 0; f < e; f++) {
            var g = c[f];
            if (D["firebaseui.auth.soy2.element.tenantSelectionButton"]) var k = D["firebaseui.auth.soy2.element.tenantSelectionButton"]({ ri: g }, b);
            else {
                E(t(g), "tenantConfig", g, "{tenantId: (null|string|undefined), fullLabel: (null|string|undefined), displayName: string, buttonColor: string, iconUrl: string,}");
                k = '<button class="firebaseui-tenant-button mdl-button mdl-js-button mdl-button--raised firebaseui-tenant-selection-' + ud(g.tenantId ? "" + g.tenantId : "top-level-project") + ' firebaseui-id-tenant-selection-button"' +
                    (g.tenantId ? ' data-tenant-id="' + ud(g.tenantId) + '"' : "") + ' style="background-color:' + ud(Fd(g.Rb)) + '"><span class="firebaseui-idp-icon-wrapper"><img class="firebaseui-idp-icon" alt="" src="' + ud(Dd(g.$b)) + '"></span><span class="firebaseui-idp-text firebaseui-idp-text-long">';
                if (g.va) k += B(g.va);
                else {
                    var n = "Sign in to " + B(g.displayName);
                    k += n
                }
                k += '</span><span class="firebaseui-idp-text firebaseui-idp-text-short">';
                g = B(g.displayName);
                k = k + g + "</span></button>";
                k = C(k)
            }
            d += '<li class="firebaseui-list-item">' +
                k + "</li>"
        }
        d += '</ul></form></div><div class="firebaseui-card-footer firebaseui-provider-sign-in-footer">' + fh(a, b) + "</div></div>";
        return C(d)
    }

    function Pi(a, b) {
        if (D["firebaseui.auth.soy2.page.providerMatchByEmail"]) return D["firebaseui.auth.soy2.page.providerMatchByEmail"](a, b);
        a = a || {};
        a = '<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-provider-match-by-email"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Sign in</h1></div><div class="firebaseui-card-content"><div class="firebaseui-relative-wrapper">' + (Wg(b) + '</div></div><div class="firebaseui-card-actions"><div class="firebaseui-form-actions">' +
            Xg(b) + '</div></div><div class="firebaseui-card-footer">' + fh(a, b) + "</div></form></div>");
        return C(a)
    };

    function Qi(a, b) {
        L.call(this, pi, void 0, b, "anonymousUserMismatch");
        this.ec = a
    }
    l(Qi, L);
    Qi.prototype.s = function() {
        var a = this;
        I(this, this.I(), function() { a.ec() });
        this.I().focus();
        L.prototype.s.call(this)
    };
    Qi.prototype.l = function() {
        this.ec = null;
        L.prototype.l.call(this)
    };
    v(Qi.prototype, { I: K });

    function Ri(a) { L.call(this, ki, void 0, a, "blank") }
    l(Ri, L);

    function Si(a) { L.call(this, ii, void 0, a, "callback") }
    l(Si, L);
    Si.prototype.ba = function(a, b, c, d) { return a.apply(null, b).then(c, d) };

    function Ti(a, b) {
        L.call(this, oi, void 0, b, "differentDeviceError");
        this.ec = a
    }
    l(Ti, L);
    Ti.prototype.s = function() {
        var a = this;
        I(this, this.I(), function() { a.ec() });
        this.I().focus();
        L.prototype.s.call(this)
    };
    Ti.prototype.l = function() {
        this.ec = null;
        L.prototype.l.call(this)
    };
    v(Ti.prototype, { I: K });

    function Ui(a, b, c, d) {
        L.call(this, zi, { email: a, C: !!c }, d, "emailChangeRevoke");
        this.ic = b;
        this.ea = c || null
    }
    l(Ui, L);
    Ui.prototype.s = function() {
        var a = this;
        I(this, Vi(this), function() { a.ic() });
        this.ea && (this.B(this.ea), this.H().focus());
        L.prototype.s.call(this)
    };
    Ui.prototype.l = function() {
        this.ic = this.ea = null;
        L.prototype.l.call(this)
    };

    function Vi(a) { return a.A("firebaseui-id-reset-password-link") }
    v(Ui.prototype, { H: J, I: K, B: Sg });

    function Wi(a, b) {
        try { var c = "number" == typeof a.selectionStart } catch (d) { c = !1 }
        c ? (a.selectionStart = b, a.selectionEnd = b) : z && !hd("9") && ("textarea" == a.type && (b = a.value.substring(0, b).replace(/(\r\n|\r|\n)/g, "\n").length), a = a.createTextRange(), a.collapse(!0), a.move("character", b), a.select())
    };

    function Xi(a, b, c, d, e, f) {
        L.call(this, ni, { email: c }, f, "emailLinkSignInConfirmation", { R: d, O: e });
        this.Ga = a;
        this.F = b
    }
    l(Xi, L);
    Xi.prototype.s = function() {
        this.Ea(this.Ga);
        this.B(this.Ga, this.F);
        this.sa();
        L.prototype.s.call(this)
    };
    Xi.prototype.l = function() {
        this.F = this.Ga = null;
        L.prototype.l.call(this)
    };
    Xi.prototype.sa = function() {
        this.D().focus();
        Wi(this.D(), (this.D().value || "").length)
    };
    v(Xi.prototype, { D: Ng, bb: Og, Ea: Pg, getEmail: Qg, ta: Rg, H: J, I: K, B: Sg });

    function Yi(a, b, c, d, e, f) {
        L.call(this, ri, { email: a, U: b }, f, "emailLinkSignInLinking", { R: d, O: e });
        this.v = c
    }
    l(Yi, L);
    Yi.prototype.s = function() {
        this.B(this.v);
        this.H().focus();
        L.prototype.s.call(this)
    };
    Yi.prototype.l = function() {
        this.v = null;
        L.prototype.l.call(this)
    };
    v(Yi.prototype, { H: J, B: Sg });

    function Zi(a, b, c, d, e) {
        L.call(this, si, { U: a }, e, "emailLinkSignInLinkingDifferentDevice", { R: c, O: d });
        this.ea = b
    }
    l(Zi, L);
    Zi.prototype.s = function() {
        this.B(this.ea);
        this.H().focus();
        L.prototype.s.call(this)
    };
    Zi.prototype.l = function() {
        this.ea = null;
        L.prototype.l.call(this)
    };
    v(Zi.prototype, { H: J, B: Sg });

    function $i(a, b, c, d, e, f) {
        L.call(this, li, { email: a }, f, "emailLinkSignInSent", { R: d, O: e });
        this.ff = b;
        this.F = c
    }
    l($i, L);
    $i.prototype.s = function() {
        var a = this;
        I(this, this.I(), function() { a.F() });
        I(this, this.A("firebaseui-id-trouble-getting-email-link"), function() { a.ff() });
        this.I().focus();
        L.prototype.s.call(this)
    };
    $i.prototype.l = function() {
        this.F = this.ff = null;
        L.prototype.l.call(this)
    };
    v($i.prototype, { I: K });

    function aj(a, b, c, d, e, f, g) {
        L.call(this, Ji, { Ef: a, hf: b }, g, "emailMismatch", { R: e, O: f });
        this.ea = c;
        this.F = d
    }
    l(aj, L);
    aj.prototype.s = function() {
        this.B(this.ea, this.F);
        this.H().focus();
        L.prototype.s.call(this)
    };
    aj.prototype.l = function() {
        this.F = this.v = null;
        L.prototype.l.call(this)
    };
    v(aj.prototype, { H: J, I: K, B: Sg });

    function bj(a, b, c, d, e) {
        L.call(this, mi, void 0, e, "emailNotReceived", { R: c, O: d });
        this.hc = a;
        this.F = b
    }
    l(bj, L);
    bj.prototype.s = function() {
        var a = this;
        I(this, this.I(), function() { a.F() });
        I(this, this.Gc(), function() { a.hc() });
        this.I().focus();
        L.prototype.s.call(this)
    };
    bj.prototype.Gc = function() { return this.A("firebaseui-id-resend-email-link") };
    bj.prototype.l = function() {
        this.F = this.hc = null;
        L.prototype.l.call(this)
    };
    v(bj.prototype, { I: K });

    function cj(a, b, c, d, e, f) {
        L.call(this, ti, { email: a, U: b }, f, "federatedLinking", { R: d, O: e });
        this.v = c
    }
    l(cj, L);
    cj.prototype.s = function() {
        this.B(this.v);
        this.H().focus();
        L.prototype.s.call(this)
    };
    cj.prototype.l = function() {
        this.v = null;
        L.prototype.l.call(this)
    };
    v(cj.prototype, { H: J, B: Sg });

    function N(a, b, c, d, e, f) {
        L.call(this, a, b, d, e || "notice", f);
        this.ea = c || null
    }
    x(N, L);
    N.prototype.s = function() {
        this.ea && (this.B(this.ea), this.H().focus());
        N.$.s.call(this)
    };
    N.prototype.l = function() {
        this.ea = null;
        N.$.l.call(this)
    };
    v(N.prototype, { H: J, I: K, B: Sg });

    function dj(a, b, c, d, e) { N.call(this, hi, { email: a, C: !!b }, b, e, "passwordRecoveryEmailSent", { R: c, O: d }) }
    x(dj, N);

    function ej(a, b) { N.call(this, Bi, { C: !!a }, a, b, "emailVerificationSuccess") }
    x(ej, N);

    function fj(a, b) { N.call(this, Ci, { C: !!a }, a, b, "emailVerificationFailure") }
    x(fj, N);

    function gj(a, b, c) { N.call(this, Di, { email: a, C: !!b }, b, c, "verifyAndChangeEmailSuccess") }
    x(gj, N);

    function hj(a, b) { N.call(this, Ei, { C: !!a }, a, b, "verifyAndChangeEmailFailure") }
    x(hj, N);

    function ij(a, b) { N.call(this, Gi, { C: !!a }, a, b, "revertSecondFactorAdditionFailure") }
    x(ij, N);

    function jj(a) { N.call(this, Ni, void 0, void 0, a, "signOut") }
    x(jj, N);

    function kj(a, b) { N.call(this, xi, { C: !!a }, a, b, "passwordResetSuccess") }
    x(kj, N);

    function lj(a, b) { N.call(this, yi, { C: !!a }, a, b, "passwordResetFailure") }
    x(lj, N);

    function mj(a, b) { N.call(this, Ai, { C: !!a }, a, b, "emailChangeRevokeFailure") }
    x(mj, N);

    function nj(a, b, c) { N.call(this, Hi, { errorMessage: a, oe: !!b }, b, c, "recoverableError") }
    x(nj, N);

    function oj(a, b) { N.call(this, Ii, { errorMessage: a }, void 0, b, "unrecoverableError") }
    x(oj, N);

    function pj(a, b, c, d, e, f) {
        L.call(this, qi, { email: a }, f, "passwordLinking", { R: d, O: e });
        this.v = b;
        this.Uc = c
    }
    l(pj, L);
    pj.prototype.s = function() {
        this.Kd();
        this.B(this.v, this.Uc);
        ci(this, this.Na(), this.v);
        this.Na().focus();
        L.prototype.s.call(this)
    };
    pj.prototype.l = function() {
        this.v = null;
        L.prototype.l.call(this)
    };
    pj.prototype.ta = function() { return re(this.A("firebaseui-id-email")) };
    v(pj.prototype, { Na: Ah, Cd: Bh, Kd: Ch, td: Dh, H: J, I: K, B: Sg });

    function qj(a, b, c, d, e, f) {
        L.call(this, gi, { email: c, ib: !!b }, f, "passwordRecovery", { R: d, O: e });
        this.v = a;
        this.F = b
    }
    l(qj, L);
    qj.prototype.s = function() {
        this.Ea();
        this.B(this.v, this.F);
        re(this.D()) || this.D().focus();
        ci(this, this.D(), this.v);
        L.prototype.s.call(this)
    };
    qj.prototype.l = function() {
        this.F = this.v = null;
        L.prototype.l.call(this)
    };
    v(qj.prototype, { D: Ng, bb: Og, Ea: Pg, getEmail: Qg, ta: Rg, H: J, I: K, B: Sg });

    function rj(a, b, c) {
        L.call(this, wi, { email: a }, c, "passwordReset");
        this.v = b
    }
    l(rj, L);
    rj.prototype.s = function() {
        this.Jd();
        this.B(this.v);
        ci(this, this.Da(), this.v);
        this.Da().focus();
        L.prototype.s.call(this)
    };
    rj.prototype.l = function() {
        this.v = null;
        L.prototype.l.call(this)
    };
    v(rj.prototype, { Da: uh, Bd: xh, Dg: vh, Jd: yh, sd: zh, H: J, I: K, B: Sg });

    function sj(a, b, c, d, e, f, g) {
        L.call(this, ei, { email: c, ga: !!f }, g, "passwordSignIn", { R: d, O: e });
        this.v = a;
        this.Uc = b
    }
    l(sj, L);
    sj.prototype.s = function() {
        this.Ea();
        this.Kd();
        this.B(this.v, this.Uc);
        bi(this, this.D(), this.Na());
        ci(this, this.Na(), this.v);
        re(this.D()) ? this.Na().focus() : this.D().focus();
        L.prototype.s.call(this)
    };
    sj.prototype.l = function() {
        this.Uc = this.v = null;
        L.prototype.l.call(this)
    };
    v(sj.prototype, { D: Ng, bb: Og, Ea: Pg, getEmail: Qg, ta: Rg, Na: Ah, Cd: Bh, Kd: Ch, td: Dh, H: J, I: K, B: Sg });

    function tj(a, b, c, d, e, f, g, k, n) {
        L.call(this, fi, { email: d, Wd: a, name: e, ib: !!c, ga: !!k }, n, "passwordSignUp", { R: f, O: g });
        this.v = b;
        this.F = c;
        this.Xd = a
    }
    l(tj, L);
    tj.prototype.s = function() {
        this.Ea();
        this.Xd && this.Ng();
        this.Jd();
        this.B(this.v, this.F);
        this.sa();
        L.prototype.s.call(this)
    };
    tj.prototype.l = function() {
        this.F = this.v = null;
        L.prototype.l.call(this)
    };
    tj.prototype.sa = function() {
        this.Xd ? (bi(this, this.D(), this.Wb()), bi(this, this.Wb(), this.Da())) : bi(this, this.D(), this.Da());
        this.v && ci(this, this.Da(), this.v);
        re(this.D()) ? this.Xd && !re(this.Wb()) ? this.Wb().focus() : this.Da().focus() : this.D().focus()
    };
    v(tj.prototype, {
        D: Ng,
        bb: Og,
        Ea: Pg,
        getEmail: Qg,
        ta: Rg,
        Wb: sh,
        ii: th,
        Ng: function() {
            var a = sh.call(this),
                b = th.call(this);
            lg(this, a, function() { rg(b) && (H(a, !0), pg(b)) })
        },
        jg: function() {
            var a = sh.call(this);
            var b = th.call(this);
            var c = re(a);
            c = !/^[\s\xa0]*$/.test(null == c ? "" : String(c));
            H(a, c);
            c ? (pg(b), b = !0) : (qg(b, (D["firebaseui.auth.soy2.strings.errorMissingName"] ? D["firebaseui.auth.soy2.strings.errorMissingName"](void 0, void 0) : "Enter your account name").toString()), b = !1);
            return b ? lb(re(a)) : null
        },
        Da: uh,
        Bd: xh,
        Dg: vh,
        Jd: yh,
        sd: zh,
        H: J,
        I: K,
        B: Sg
    });

    function uj(a, b, c, d, e, f, g, k, n) {
        L.call(this, Mi, { phoneNumber: e }, n, "phoneSignInFinish", { R: g, O: k });
        this.mh = f;
        this.tb = new Qf(1E3);
        this.Zd = f;
        this.cf = a;
        this.v = b;
        this.F = c;
        this.hc = d
    }
    l(uj, L);
    uj.prototype.s = function() {
        var a = this;
        this.yf(this.mh);
        Le(this.tb, "tick", this.Gd, !1, this);
        this.tb.start();
        I(this, this.A("firebaseui-id-change-phone-number-link"), function() { a.cf() });
        I(this, this.Gc(), function() { a.hc() });
        this.Og(this.v);
        this.B(this.v, this.F);
        this.sa();
        L.prototype.s.call(this)
    };
    uj.prototype.l = function() {
        this.hc = this.F = this.v = this.cf = null;
        this.tb.stop();
        Ue(this.tb, "tick", this.Gd);
        this.tb = null;
        L.prototype.l.call(this)
    };
    uj.prototype.Gd = function() {
        --this.Zd;
        0 < this.Zd ? this.yf(this.Zd) : (this.tb.stop(), Ue(this.tb, "tick", this.Gd), this.Jg(), this.wh())
    };
    uj.prototype.sa = function() { this.Dd().focus() };
    v(uj.prototype, {
        Dd: Eh,
        Eg: Fh,
        Og: function(a) {
            var b = Eh.call(this),
                c = Fh.call(this);
            lg(this, b, function() { rg(c) && (H(b, !0), pg(c)) });
            a && mg(this, b, function() { a() })
        },
        kg: function() { var a = lb(re(Eh.call(this)) || ""); return /^\d{6}$/.test(a) ? a : null },
        Hg: Sh,
        yf: function(a) {
            var b = Sh.call(this);
            a = (9 < a ? "0:" : "0:0") + a;
            D["firebaseui.auth.soy2.strings.resendCountdown"] ? a = D["firebaseui.auth.soy2.strings.resendCountdown"]({ timeRemaining: a }, void 0) : (E("string" === typeof a, "timeRemaining", a, "string"), a = "Resend code in " + a);
            ne(b,
                a.toString())
        },
        Jg: function() { pg(this.Hg()) },
        Gc: function() { return this.A("firebaseui-id-resend-link") },
        wh: function() { qg(this.Gc()) },
        H: J,
        I: K,
        B: Sg
    });

    function vj(a, b, c, d, e, f, g, k, n, p) {
        L.call(this, Li, { xd: b, Va: n || null, lb: !!c, ga: !!f }, p, "phoneSignInStart", { R: d, O: e });
        this.og = k || null;
        this.wg = b;
        this.v = a;
        this.F = c || null;
        this.Xg = g || null
    }
    l(vj, L);
    vj.prototype.s = function() {
        this.Pg(this.Xg, this.og);
        this.B(this.v, this.F || void 0);
        this.sa();
        L.prototype.s.call(this)
    };
    vj.prototype.l = function() {
        this.F = this.v = null;
        L.prototype.l.call(this)
    };
    vj.prototype.sa = function() {
        this.wg || bi(this, this.nb(), this.H());
        ci(this, this.H(), this.v);
        this.nb().focus();
        Wi(this.nb(), (this.nb().value || "").length)
    };
    v(vj.prototype, {
        Cg: yg,
        nb: Jh,
        Me: Lh,
        Pg: function(a, b, c) {
            var d = this,
                e = Jh.call(this),
                f = Kh.call(this),
                g = Lh.call(this),
                k = a || Td,
                n = k.Ta;
            if (0 == n.length) throw Error("No available countries provided.");
            Mh.call(d, k, b);
            I(this, f, function() { Rh.call(d, k) });
            lg(this, e, function() {
                rg(g) && (H(e, !0), pg(g));
                var p = lb(re(e) || ""),
                    m = Od(this.lc),
                    q = k.search(p);
                p = Nh("1-US-0", n);
                q.length && q[0].g != m.g && (m = q[0], Oh.call(d, "1" == m.g && p ? "1-US-0" : m.h, k))
            });
            c && mg(this, e, function() { c() })
        },
        Fg: function(a) {
            var b = lb(re(Jh.call(this)) || "");
            a =
                a || Td;
            var c = a.Ta,
                d = Td.search(b);
            if (d.length && !Ma(c, d[0])) throw se(Jh.call(this)), Jh.call(this).focus(), b = Lh.call(this), a = D["firebaseui.auth.soy2.strings.errorUnsupportedCountryCode"] ? D["firebaseui.auth.soy2.strings.errorUnsupportedCountryCode"](void 0, void 0) : "The country code provided is not supported.", qg(b, a.toString()), Error("The country code provided is not supported.");
            c = Od(this.lc);
            d.length && d[0].g != c.g && Oh.call(this, d[0].h, a);
            d.length && (b = b.substr(d[0].g.length + 1));
            return b ? new Gh(this.lc,
                b) : null
        },
        fi: Kh,
        Gg: function() { return this.A("firebaseui-recaptcha-container") },
        Ed: function() { return this.A("firebaseui-id-recaptcha-error") },
        H: J,
        I: K,
        B: Sg
    });

    function wj(a, b, c, d) {
        L.call(this, Pi, void 0, d, "providerMatchByEmail", { R: b, O: c });
        this.Ga = a
    }
    l(wj, L);
    wj.prototype.s = function() {
        this.Ea(this.Ga);
        this.B(this.Ga);
        this.sa();
        L.prototype.s.call(this)
    };
    wj.prototype.l = function() {
        this.Ga = null;
        L.prototype.l.call(this)
    };
    wj.prototype.sa = function() {
        this.D().focus();
        Wi(this.D(), (this.D().value || "").length)
    };
    v(wj.prototype, { D: Ng, bb: Og, Ea: Pg, getEmail: Qg, ta: Rg, H: J, B: Sg });

    function xj(a, b, c, d, e) {
        L.call(this, Ki, { kf: b }, e, "providerSignIn", { R: c, O: d });
        this.df = a
    }
    l(xj, L);
    xj.prototype.s = function() {
        this.Mg(this.df);
        L.prototype.s.call(this)
    };
    xj.prototype.l = function() {
        this.df = null;
        L.prototype.l.call(this)
    };
    v(xj.prototype, {
        Mg: function(a) {
            function b(g) { a(g) }
            for (var c = this.Fc("firebaseui-id-idp-button"), d = 0; d < c.length; d++) {
                var e = c[d],
                    f = Ug(e, "providerId");
                I(this, e, Aa(b, f))
            }
        }
    });

    function yj(a, b, c, d, e) {
        L.call(this, Fi, { factorId: a, phoneNumber: c || null, C: !!d }, e, "revertSecondFactorAdditionSuccess");
        this.ic = b;
        this.ea = d || null
    }
    l(yj, L);
    yj.prototype.s = function() {
        var a = this;
        I(this, Vi(this), function() { a.ic() });
        this.ea && (this.B(this.ea), this.H().focus());
        L.prototype.s.call(this)
    };
    yj.prototype.l = function() {
        this.ic = this.ea = null;
        L.prototype.l.call(this)
    };
    v(yj.prototype, { H: J, I: K, B: Sg });

    function zj(a, b, c, d, e) {
        L.call(this, Oi, { tf: b }, e, "selectTenant", { R: c, O: d });
        this.ef = a
    }
    l(zj, L);
    zj.prototype.s = function() {
        Aj(this, this.ef);
        L.prototype.s.call(this)
    };
    zj.prototype.l = function() {
        this.ef = null;
        L.prototype.l.call(this)
    };

    function Aj(a, b) {
        function c(k) { b(k) }
        for (var d = a.Fc("firebaseui-id-tenant-selection-button"), e = 0; e < d.length; e++) {
            var f = d[e],
                g = Ug(f, "tenantId");
            I(a, f, Aa(c, g))
        }
    };

    function Bj(a, b, c, d, e, f, g) {
        L.call(this, di, { email: c, lb: !!b, ga: !!f }, g, "signIn", { R: d, O: e });
        this.Ga = a;
        this.F = b
    }
    l(Bj, L);
    Bj.prototype.s = function() {
        this.Ea(this.Ga);
        this.B(this.Ga, this.F || void 0);
        this.sa();
        L.prototype.s.call(this)
    };
    Bj.prototype.l = function() {
        this.F = this.Ga = null;
        L.prototype.l.call(this)
    };
    Bj.prototype.sa = function() {
        this.D().focus();
        Wi(this.D(), (this.D().value || "").length)
    };
    v(Bj.prototype, { D: Ng, bb: Og, Ea: Pg, getEmail: Qg, ta: Rg, H: J, I: K, B: Sg });

    function Cj(a) { L.call(this, ji, void 0, a, "spinner") }
    l(Cj, L);

    function Dj(a, b, c, d, e, f, g) {
        L.call(this, ui, { email: a, md: c, wd: !!d }, g, "unauthorizedUser", { R: e, O: f });
        this.F = b;
        this.Pd = d
    }
    l(Dj, L);
    Dj.prototype.s = function() {
        var a = this,
            b = this.A("firebaseui-id-unauthorized-user-help-link");
        this.Pd && b && I(this, b, function() { a.Pd() });
        I(this, this.I(), function() { a.F() });
        this.sa();
        L.prototype.s.call(this)
    };
    Dj.prototype.l = function() {
        this.Pd = this.F = null;
        L.prototype.l.call(this)
    };
    Dj.prototype.sa = function() { this.I().focus() };
    v(Dj.prototype, { I: K });

    function Ej(a, b, c, d, e, f) {
        L.call(this, vi, { email: a }, f, "unsupportedProvider", { R: d, O: e });
        this.v = b;
        this.F = c
    }
    l(Ej, L);
    Ej.prototype.s = function() {
        this.B(this.v, this.F);
        this.H().focus();
        L.prototype.s.call(this)
    };
    Ej.prototype.l = function() {
        this.F = this.v = null;
        L.prototype.l.call(this)
    };
    v(Ej.prototype, { H: J, I: K, B: Sg });

    function Fj(a) { this.Z = Gc(a) }

    function Gj(a, b) { b ? Fc(a.Z, O.kd, b) : a.Z.removeParameter(O.kd) }
    Fj.prototype.ce = function(a) { a ? Fc(this.Z, O.ld, a) : this.Z.removeParameter(O.ld) };
    Fj.prototype.Xb = function() { return this.Z.Y.get(O.ld) || null };

    function Hj(a, b) { null !== b ? Fc(a.Z, O.gd, b ? "1" : "0") : a.Z.removeParameter(O.gd) }

    function Ij(a) { return a.Z.Y.get(O.fd) || null }

    function Jj(a, b) { b ? Fc(a.Z, O.PROVIDER_ID, b) : a.Z.removeParameter(O.PROVIDER_ID) }
    Fj.prototype.toString = function() { return this.Z.toString() };
    var O = { fd: "ui_auid", Rh: "apiKey", gd: "ui_sd", Sf: "mode", ne: "oobCode", PROVIDER_ID: "ui_pid", kd: "ui_sid", ld: "tenantId" };

    function Kj() { this.Pa = {} }
    Kj.prototype.define = function(a, b) {
        if (a.toLowerCase() in this.Pa) throw Error("Configuration " + a + " has already been defined.");
        this.Pa[a.toLowerCase()] = b
    };
    Kj.prototype.update = function(a, b) {
        if (!(a.toLowerCase() in this.Pa)) throw Error("Configuration " + a + " is not defined.");
        this.Pa[a.toLowerCase()] = b
    };
    Kj.prototype.get = function(a) { if (!(a.toLowerCase() in this.Pa)) throw Error("Configuration " + a + " is not defined."); return this.Pa[a.toLowerCase()] };

    function Lj(a, b) { a = a.get(b); if (!a) throw Error("Configuration " + b + " is required."); return a };

    function Mj() { this.ha = ("undefined" == typeof document ? null : document) || { cookie: "" } }
    h = Mj.prototype;
    h.isEnabled = function() {
        if (!r.navigator.cookieEnabled) return !1;
        if (!this.Fb()) return !0;
        this.set("TESTCOOKIESENABLED", "1", { Od: 60 });
        if ("1" !== this.get("TESTCOOKIESENABLED")) return !1;
        this.remove("TESTCOOKIESENABLED");
        return !0
    };
    h.set = function(a, b, c) {
        var d = !1;
        if ("object" === typeof c) {
            var e = c.li;
            d = c.oh || !1;
            var f = c.domain || void 0;
            var g = c.path || void 0;
            var k = c.Od
        }
        if (/[;=\s]/.test(a)) throw Error('Invalid cookie name "' + a + '"');
        if (/[;\r\n]/.test(b)) throw Error('Invalid cookie value "' + b + '"');
        void 0 === k && (k = -1);
        this.ha.cookie = a + "=" + b + (f ? ";domain=" + f : "") + (g ? ";path=" + g : "") + (0 > k ? "" : 0 == k ? ";expires=" + (new Date(1970, 1, 1)).toUTCString() : ";expires=" + (new Date(Date.now() + 1E3 * k)).toUTCString()) + (d ? ";secure" : "") + (null != e ? ";samesite=" + e : "")
    };
    h.get = function(a, b) { for (var c = a + "=", d = (this.ha.cookie || "").split(";"), e = 0, f; e < d.length; e++) { f = lb(d[e]); if (0 == f.lastIndexOf(c, 0)) return f.substr(c.length); if (f == a) return "" } return b };
    h.remove = function(a, b, c) {
        var d = this.$a(a);
        this.set(a, "", { Od: 0, path: b, domain: c });
        return d
    };
    h.Ma = function() { return Nj(this).keys };
    h.wa = function() { return Nj(this).values };
    h.Fb = function() { return !this.ha.cookie };
    h.$a = function(a) { return void 0 !== this.get(a) };
    h.clear = function() { for (var a = Nj(this).keys, b = a.length - 1; 0 <= b; b--) this.remove(a[b]) };

    function Nj(a) { a = (a.ha.cookie || "").split(";"); for (var b = [], c = [], d, e, f = 0; f < a.length; f++) e = lb(a[f]), d = e.indexOf("="), -1 == d ? (b.push(""), c.push(e)) : (b.push(e.substring(0, d)), c.push(e.substring(d + 1))); return { keys: b, values: c } };
    var Oj = new Mj;

    function Pj() {};

    function Qj(a, b, c, d) {
        this.Yg = "undefined" !== typeof a && null !== a ? a : -1;
        this.qa = b || null;
        this.ua = c || null;
        this.ph = !!d
    }
    l(Qj, Pj);
    Qj.prototype.set = function(a, b) { Oj.set(a, b, { Od: this.Yg, path: this.qa, domain: this.ua, oh: this.ph }) };
    Qj.prototype.get = function(a) { return Oj.get(a) || null };
    Qj.prototype.remove = function(a) { Oj.remove(a, this.qa, this.ua) };

    function Rj(a) {
        this.bc = a;
        this.la = this.bc.length / 4;
        this.rb = this.la + 6;
        this.P = [
            [],
            [],
            [],
            []
        ];
        this.Mb = [
            [],
            [],
            [],
            []
        ];
        this.ja = Array(Sj * (this.rb + 1));
        for (a = 0; a < this.la; a++) this.ja[a] = [this.bc[4 * a], this.bc[4 * a + 1], this.bc[4 * a + 2], this.bc[4 * a + 3]];
        var b = Array(4);
        for (a = this.la; a < Sj * (this.rb + 1); a++) {
            b[0] = this.ja[a - 1][0];
            b[1] = this.ja[a - 1][1];
            b[2] = this.ja[a - 1][2];
            b[3] = this.ja[a - 1][3];
            if (0 == a % this.la) {
                var c = b,
                    d = c[0];
                c[0] = c[1];
                c[1] = c[2];
                c[2] = c[3];
                c[3] = d;
                Tj(b);
                b[0] ^= Uj[a / this.la][0];
                b[1] ^= Uj[a / this.la][1];
                b[2] ^= Uj[a /
                    this.la][2];
                b[3] ^= Uj[a / this.la][3]
            } else 6 < this.la && 4 == a % this.la && Tj(b);
            this.ja[a] = Array(4);
            this.ja[a][0] = this.ja[a - this.la][0] ^ b[0];
            this.ja[a][1] = this.ja[a - this.la][1] ^ b[1];
            this.ja[a][2] = this.ja[a - this.la][2] ^ b[2];
            this.ja[a][3] = this.ja[a - this.la][3] ^ b[3]
        }
    }
    Rj.prototype.If = 16;
    var Sj = Rj.prototype.If / 4;
    Rj.prototype.encrypt = function(a) {
        Vj(this, a);
        Wj(this, 0);
        for (a = 1; a < this.rb; ++a) {
            Xj(this, Yj);
            Zj(this);
            for (var b = this.P, c = this.Mb[0], d = 0; 4 > d; d++) c[0] = b[0][d], c[1] = b[1][d], c[2] = b[2][d], c[3] = b[3][d], b[0][d] = ak[c[0]] ^ bk[c[1]] ^ c[2] ^ c[3], b[1][d] = c[0] ^ ak[c[1]] ^ bk[c[2]] ^ c[3], b[2][d] = c[0] ^ c[1] ^ ak[c[2]] ^ bk[c[3]], b[3][d] = bk[c[0]] ^ c[1] ^ c[2] ^ ak[c[3]];
            Wj(this, a)
        }
        Xj(this, Yj);
        Zj(this);
        Wj(this, this.rb);
        return ck(this)
    };
    Rj.prototype.decrypt = function(a) {
        Vj(this, a);
        Wj(this, this.rb);
        for (a = 1; a < this.rb; ++a) {
            dk(this);
            Xj(this, ek);
            Wj(this, this.rb - a);
            for (var b = this.P, c = this.Mb[0], d = 0; 4 > d; d++) c[0] = b[0][d], c[1] = b[1][d], c[2] = b[2][d], c[3] = b[3][d], b[0][d] = fk[c[0]] ^ gk[c[1]] ^ hk[c[2]] ^ ik[c[3]], b[1][d] = ik[c[0]] ^ fk[c[1]] ^ gk[c[2]] ^ hk[c[3]], b[2][d] = hk[c[0]] ^ ik[c[1]] ^ fk[c[2]] ^ gk[c[3]], b[3][d] = gk[c[0]] ^ hk[c[1]] ^ ik[c[2]] ^ fk[c[3]]
        }
        dk(this);
        Xj(this, ek);
        Wj(this, 0);
        return ck(this)
    };

    function Vj(a, b) {
        for (var c, d = 0; d < Sj; d++)
            for (var e = 0; 4 > e; e++) c = 4 * e + d, c = b[c], a.P[d][e] = c
    }

    function ck(a) {
        for (var b = [], c = 0; c < Sj; c++)
            for (var d = 0; 4 > d; d++) b[4 * d + c] = a.P[c][d];
        return b
    }

    function Wj(a, b) {
        for (var c = 0; 4 > c; c++)
            for (var d = 0; 4 > d; d++) a.P[c][d] ^= a.ja[4 * b + d][c]
    }

    function Xj(a, b) {
        for (var c = 0; 4 > c; c++)
            for (var d = 0; 4 > d; d++) a.P[c][d] = b[a.P[c][d]]
    }

    function Zj(a) {
        for (var b = 1; 4 > b; b++)
            for (var c = 0; 4 > c; c++) a.Mb[b][c] = a.P[b][c];
        for (b = 1; 4 > b; b++)
            for (c = 0; 4 > c; c++) a.P[b][c] = a.Mb[b][(c + b) % Sj]
    }

    function dk(a) {
        for (var b = 1; 4 > b; b++)
            for (var c = 0; 4 > c; c++) a.Mb[b][(c + b) % Sj] = a.P[b][c];
        for (b = 1; 4 > b; b++)
            for (c = 0; 4 > c; c++) a.P[b][c] = a.Mb[b][c]
    }

    function Tj(a) {
        a[0] = Yj[a[0]];
        a[1] = Yj[a[1]];
        a[2] = Yj[a[2]];
        a[3] = Yj[a[3]]
    }
    var Yj = [99, 124, 119, 123, 242, 107, 111, 197, 48, 1, 103, 43, 254, 215, 171, 118, 202, 130, 201, 125, 250, 89, 71, 240, 173, 212, 162, 175, 156, 164, 114, 192, 183, 253, 147, 38, 54, 63, 247, 204, 52, 165, 229, 241, 113, 216, 49, 21, 4, 199, 35, 195, 24, 150, 5, 154, 7, 18, 128, 226, 235, 39, 178, 117, 9, 131, 44, 26, 27, 110, 90, 160, 82, 59, 214, 179, 41, 227, 47, 132, 83, 209, 0, 237, 32, 252, 177, 91, 106, 203, 190, 57, 74, 76, 88, 207, 208, 239, 170, 251, 67, 77, 51, 133, 69, 249, 2, 127, 80, 60, 159, 168, 81, 163, 64, 143, 146, 157, 56, 245, 188, 182, 218, 33, 16, 255, 243, 210, 205, 12, 19, 236, 95, 151, 68, 23, 196, 167, 126,
            61, 100, 93, 25, 115, 96, 129, 79, 220, 34, 42, 144, 136, 70, 238, 184, 20, 222, 94, 11, 219, 224, 50, 58, 10, 73, 6, 36, 92, 194, 211, 172, 98, 145, 149, 228, 121, 231, 200, 55, 109, 141, 213, 78, 169, 108, 86, 244, 234, 101, 122, 174, 8, 186, 120, 37, 46, 28, 166, 180, 198, 232, 221, 116, 31, 75, 189, 139, 138, 112, 62, 181, 102, 72, 3, 246, 14, 97, 53, 87, 185, 134, 193, 29, 158, 225, 248, 152, 17, 105, 217, 142, 148, 155, 30, 135, 233, 206, 85, 40, 223, 140, 161, 137, 13, 191, 230, 66, 104, 65, 153, 45, 15, 176, 84, 187, 22
        ],
        ek = [82, 9, 106, 213, 48, 54, 165, 56, 191, 64, 163, 158, 129, 243, 215, 251, 124, 227, 57, 130, 155, 47,
            255, 135, 52, 142, 67, 68, 196, 222, 233, 203, 84, 123, 148, 50, 166, 194, 35, 61, 238, 76, 149, 11, 66, 250, 195, 78, 8, 46, 161, 102, 40, 217, 36, 178, 118, 91, 162, 73, 109, 139, 209, 37, 114, 248, 246, 100, 134, 104, 152, 22, 212, 164, 92, 204, 93, 101, 182, 146, 108, 112, 72, 80, 253, 237, 185, 218, 94, 21, 70, 87, 167, 141, 157, 132, 144, 216, 171, 0, 140, 188, 211, 10, 247, 228, 88, 5, 184, 179, 69, 6, 208, 44, 30, 143, 202, 63, 15, 2, 193, 175, 189, 3, 1, 19, 138, 107, 58, 145, 17, 65, 79, 103, 220, 234, 151, 242, 207, 206, 240, 180, 230, 115, 150, 172, 116, 34, 231, 173, 53, 133, 226, 249, 55, 232, 28, 117, 223, 110, 71, 241,
            26, 113, 29, 41, 197, 137, 111, 183, 98, 14, 170, 24, 190, 27, 252, 86, 62, 75, 198, 210, 121, 32, 154, 219, 192, 254, 120, 205, 90, 244, 31, 221, 168, 51, 136, 7, 199, 49, 177, 18, 16, 89, 39, 128, 236, 95, 96, 81, 127, 169, 25, 181, 74, 13, 45, 229, 122, 159, 147, 201, 156, 239, 160, 224, 59, 77, 174, 42, 245, 176, 200, 235, 187, 60, 131, 83, 153, 97, 23, 43, 4, 126, 186, 119, 214, 38, 225, 105, 20, 99, 85, 33, 12, 125
        ],
        Uj = [
            [0, 0, 0, 0],
            [1, 0, 0, 0],
            [2, 0, 0, 0],
            [4, 0, 0, 0],
            [8, 0, 0, 0],
            [16, 0, 0, 0],
            [32, 0, 0, 0],
            [64, 0, 0, 0],
            [128, 0, 0, 0],
            [27, 0, 0, 0],
            [54, 0, 0, 0]
        ],
        ak = [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30,
            32, 34, 36, 38, 40, 42, 44, 46, 48, 50, 52, 54, 56, 58, 60, 62, 64, 66, 68, 70, 72, 74, 76, 78, 80, 82, 84, 86, 88, 90, 92, 94, 96, 98, 100, 102, 104, 106, 108, 110, 112, 114, 116, 118, 120, 122, 124, 126, 128, 130, 132, 134, 136, 138, 140, 142, 144, 146, 148, 150, 152, 154, 156, 158, 160, 162, 164, 166, 168, 170, 172, 174, 176, 178, 180, 182, 184, 186, 188, 190, 192, 194, 196, 198, 200, 202, 204, 206, 208, 210, 212, 214, 216, 218, 220, 222, 224, 226, 228, 230, 232, 234, 236, 238, 240, 242, 244, 246, 248, 250, 252, 254, 27, 25, 31, 29, 19, 17, 23, 21, 11, 9, 15, 13, 3, 1, 7, 5, 59, 57, 63, 61, 51, 49, 55, 53, 43, 41, 47, 45, 35, 33, 39,
            37, 91, 89, 95, 93, 83, 81, 87, 85, 75, 73, 79, 77, 67, 65, 71, 69, 123, 121, 127, 125, 115, 113, 119, 117, 107, 105, 111, 109, 99, 97, 103, 101, 155, 153, 159, 157, 147, 145, 151, 149, 139, 137, 143, 141, 131, 129, 135, 133, 187, 185, 191, 189, 179, 177, 183, 181, 171, 169, 175, 173, 163, 161, 167, 165, 219, 217, 223, 221, 211, 209, 215, 213, 203, 201, 207, 205, 195, 193, 199, 197, 251, 249, 255, 253, 243, 241, 247, 245, 235, 233, 239, 237, 227, 225, 231, 229
        ],
        bk = [0, 3, 6, 5, 12, 15, 10, 9, 24, 27, 30, 29, 20, 23, 18, 17, 48, 51, 54, 53, 60, 63, 58, 57, 40, 43, 46, 45, 36, 39, 34, 33, 96, 99, 102, 101, 108, 111, 106, 105, 120, 123,
            126, 125, 116, 119, 114, 113, 80, 83, 86, 85, 92, 95, 90, 89, 72, 75, 78, 77, 68, 71, 66, 65, 192, 195, 198, 197, 204, 207, 202, 201, 216, 219, 222, 221, 212, 215, 210, 209, 240, 243, 246, 245, 252, 255, 250, 249, 232, 235, 238, 237, 228, 231, 226, 225, 160, 163, 166, 165, 172, 175, 170, 169, 184, 187, 190, 189, 180, 183, 178, 177, 144, 147, 150, 149, 156, 159, 154, 153, 136, 139, 142, 141, 132, 135, 130, 129, 155, 152, 157, 158, 151, 148, 145, 146, 131, 128, 133, 134, 143, 140, 137, 138, 171, 168, 173, 174, 167, 164, 161, 162, 179, 176, 181, 182, 191, 188, 185, 186, 251, 248, 253, 254, 247, 244, 241, 242, 227, 224, 229, 230,
            239, 236, 233, 234, 203, 200, 205, 206, 199, 196, 193, 194, 211, 208, 213, 214, 223, 220, 217, 218, 91, 88, 93, 94, 87, 84, 81, 82, 67, 64, 69, 70, 79, 76, 73, 74, 107, 104, 109, 110, 103, 100, 97, 98, 115, 112, 117, 118, 127, 124, 121, 122, 59, 56, 61, 62, 55, 52, 49, 50, 35, 32, 37, 38, 47, 44, 41, 42, 11, 8, 13, 14, 7, 4, 1, 2, 19, 16, 21, 22, 31, 28, 25, 26
        ],
        ik = [0, 9, 18, 27, 36, 45, 54, 63, 72, 65, 90, 83, 108, 101, 126, 119, 144, 153, 130, 139, 180, 189, 166, 175, 216, 209, 202, 195, 252, 245, 238, 231, 59, 50, 41, 32, 31, 22, 13, 4, 115, 122, 97, 104, 87, 94, 69, 76, 171, 162, 185, 176, 143, 134, 157, 148, 227, 234, 241, 248, 199,
            206, 213, 220, 118, 127, 100, 109, 82, 91, 64, 73, 62, 55, 44, 37, 26, 19, 8, 1, 230, 239, 244, 253, 194, 203, 208, 217, 174, 167, 188, 181, 138, 131, 152, 145, 77, 68, 95, 86, 105, 96, 123, 114, 5, 12, 23, 30, 33, 40, 51, 58, 221, 212, 207, 198, 249, 240, 235, 226, 149, 156, 135, 142, 177, 184, 163, 170, 236, 229, 254, 247, 200, 193, 218, 211, 164, 173, 182, 191, 128, 137, 146, 155, 124, 117, 110, 103, 88, 81, 74, 67, 52, 61, 38, 47, 16, 25, 2, 11, 215, 222, 197, 204, 243, 250, 225, 232, 159, 150, 141, 132, 187, 178, 169, 160, 71, 78, 85, 92, 99, 106, 113, 120, 15, 6, 29, 20, 43, 34, 57, 48, 154, 147, 136, 129, 190, 183, 172, 165,
            210, 219, 192, 201, 246, 255, 228, 237, 10, 3, 24, 17, 46, 39, 60, 53, 66, 75, 80, 89, 102, 111, 116, 125, 161, 168, 179, 186, 133, 140, 151, 158, 233, 224, 251, 242, 205, 196, 223, 214, 49, 56, 35, 42, 21, 28, 7, 14, 121, 112, 107, 98, 93, 84, 79, 70
        ],
        gk = [0, 11, 22, 29, 44, 39, 58, 49, 88, 83, 78, 69, 116, 127, 98, 105, 176, 187, 166, 173, 156, 151, 138, 129, 232, 227, 254, 245, 196, 207, 210, 217, 123, 112, 109, 102, 87, 92, 65, 74, 35, 40, 53, 62, 15, 4, 25, 18, 203, 192, 221, 214, 231, 236, 241, 250, 147, 152, 133, 142, 191, 180, 169, 162, 246, 253, 224, 235, 218, 209, 204, 199, 174, 165, 184, 179, 130, 137, 148, 159, 70, 77,
            80, 91, 106, 97, 124, 119, 30, 21, 8, 3, 50, 57, 36, 47, 141, 134, 155, 144, 161, 170, 183, 188, 213, 222, 195, 200, 249, 242, 239, 228, 61, 54, 43, 32, 17, 26, 7, 12, 101, 110, 115, 120, 73, 66, 95, 84, 247, 252, 225, 234, 219, 208, 205, 198, 175, 164, 185, 178, 131, 136, 149, 158, 71, 76, 81, 90, 107, 96, 125, 118, 31, 20, 9, 2, 51, 56, 37, 46, 140, 135, 154, 145, 160, 171, 182, 189, 212, 223, 194, 201, 248, 243, 238, 229, 60, 55, 42, 33, 16, 27, 6, 13, 100, 111, 114, 121, 72, 67, 94, 85, 1, 10, 23, 28, 45, 38, 59, 48, 89, 82, 79, 68, 117, 126, 99, 104, 177, 186, 167, 172, 157, 150, 139, 128, 233, 226, 255, 244, 197, 206, 211, 216, 122,
            113, 108, 103, 86, 93, 64, 75, 34, 41, 52, 63, 14, 5, 24, 19, 202, 193, 220, 215, 230, 237, 240, 251, 146, 153, 132, 143, 190, 181, 168, 163
        ],
        hk = [0, 13, 26, 23, 52, 57, 46, 35, 104, 101, 114, 127, 92, 81, 70, 75, 208, 221, 202, 199, 228, 233, 254, 243, 184, 181, 162, 175, 140, 129, 150, 155, 187, 182, 161, 172, 143, 130, 149, 152, 211, 222, 201, 196, 231, 234, 253, 240, 107, 102, 113, 124, 95, 82, 69, 72, 3, 14, 25, 20, 55, 58, 45, 32, 109, 96, 119, 122, 89, 84, 67, 78, 5, 8, 31, 18, 49, 60, 43, 38, 189, 176, 167, 170, 137, 132, 147, 158, 213, 216, 207, 194, 225, 236, 251, 246, 214, 219, 204, 193, 226, 239, 248, 245, 190, 179, 164,
            169, 138, 135, 144, 157, 6, 11, 28, 17, 50, 63, 40, 37, 110, 99, 116, 121, 90, 87, 64, 77, 218, 215, 192, 205, 238, 227, 244, 249, 178, 191, 168, 165, 134, 139, 156, 145, 10, 7, 16, 29, 62, 51, 36, 41, 98, 111, 120, 117, 86, 91, 76, 65, 97, 108, 123, 118, 85, 88, 79, 66, 9, 4, 19, 30, 61, 48, 39, 42, 177, 188, 171, 166, 133, 136, 159, 146, 217, 212, 195, 206, 237, 224, 247, 250, 183, 186, 173, 160, 131, 142, 153, 148, 223, 210, 197, 200, 235, 230, 241, 252, 103, 106, 125, 112, 83, 94, 73, 68, 15, 2, 21, 24, 59, 54, 33, 44, 12, 1, 22, 27, 56, 53, 34, 47, 100, 105, 126, 115, 80, 93, 74, 71, 220, 209, 198, 203, 232, 229, 242, 255, 180, 185,
            174, 163, 128, 141, 154, 151
        ],
        fk = [0, 14, 28, 18, 56, 54, 36, 42, 112, 126, 108, 98, 72, 70, 84, 90, 224, 238, 252, 242, 216, 214, 196, 202, 144, 158, 140, 130, 168, 166, 180, 186, 219, 213, 199, 201, 227, 237, 255, 241, 171, 165, 183, 185, 147, 157, 143, 129, 59, 53, 39, 41, 3, 13, 31, 17, 75, 69, 87, 89, 115, 125, 111, 97, 173, 163, 177, 191, 149, 155, 137, 135, 221, 211, 193, 207, 229, 235, 249, 247, 77, 67, 81, 95, 117, 123, 105, 103, 61, 51, 33, 47, 5, 11, 25, 23, 118, 120, 106, 100, 78, 64, 82, 92, 6, 8, 26, 20, 62, 48, 34, 44, 150, 152, 138, 132, 174, 160, 178, 188, 230, 232, 250, 244, 222, 208, 194, 204, 65, 79, 93, 83, 121,
            119, 101, 107, 49, 63, 45, 35, 9, 7, 21, 27, 161, 175, 189, 179, 153, 151, 133, 139, 209, 223, 205, 195, 233, 231, 245, 251, 154, 148, 134, 136, 162, 172, 190, 176, 234, 228, 246, 248, 210, 220, 206, 192, 122, 116, 102, 104, 66, 76, 94, 80, 10, 4, 22, 24, 50, 60, 46, 32, 236, 226, 240, 254, 212, 218, 200, 198, 156, 146, 128, 142, 164, 170, 184, 182, 12, 2, 16, 30, 52, 58, 40, 38, 124, 114, 96, 110, 68, 74, 88, 86, 55, 57, 43, 37, 15, 1, 19, 29, 71, 73, 91, 85, 127, 113, 99, 109, 215, 217, 203, 197, 239, 225, 243, 253, 167, 169, 187, 181, 159, 145, 131, 141
        ];

    function jk(a) {
        for (var b = [], c = 0, d = 0; d < a.length; d++) {
            var e = a.charCodeAt(d);
            255 < e && (b[c++] = e & 255, e >>= 8);
            b[c++] = e
        }
        return b
    }

    function kk(a) { return Ka(a, function(b) { b = b.toString(16); return 1 < b.length ? b : "0" + b }).join("") };

    function lk(a, b) {
        a = new Rj(mk(a));
        b = jk(b);
        for (var c = Ta(b, 0, 16), d = "", e; c.length;) {
            e = 16 - c.length;
            for (var f = 0; f < e; f++) c.push(0);
            d += kk(a.encrypt(c));
            c = Ta(b, 0, 16)
        }
        return d
    }

    function nk(a, b) {
        a = new Rj(mk(a));
        for (var c = [], d = 0; d < b.length; d += 2) c.push(parseInt(b.substring(d, d + 2), 16));
        d = Ta(c, 0, 16);
        for (b = ""; d.length;) {
            d = a.decrypt(d);
            if (8192 >= d.length) d = String.fromCharCode.apply(null, d);
            else {
                for (var e = "", f = 0; f < d.length; f += 8192) e += String.fromCharCode.apply(null, Ua(d, f, f + 8192));
                d = e
            }
            b += d;
            d = Ta(c, 0, 16)
        }
        return b.replace(/(\x00)+$/, "")
    }

    function mk(a) { a = jk(a.substring(0, 32)); for (var b = 32 - a.length, c = 0; c < b; c++) a.push(0); return a };

    function ok() { try { return !(!window.opener || !window.opener.location || window.opener.location.hostname !== window.location.hostname || window.opener.location.protocol !== window.location.protocol) } catch (a) {} return !1 }

    function pk(a) { qe(a, { target: window.cordova && window.cordova.InAppBrowser ? "_system" : "_blank" }, void 0) }

    function qk(a, b) { a = t(a) && 1 == a.nodeType ? a : document.querySelector(String(a)); if (null == a) throw Error(b || "Cannot find element."); return a }

    function rk() { return window.location.href }

    function sk() { var a = null; return (new F(function(b) { "complete" == r.document.readyState ? b() : (a = function() { b() }, Me(window, "load", a)) })).pc(function(b) { Ue(window, "load", a); throw b; }) }

    function tk() { for (var a = 32, b = []; 0 < a;) b.push("1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".charAt(Math.floor(62 * Math.random()))), a--; return b.join("") }

    function uk(a, b, c) { c = void 0 === c ? {} : c; return Object.keys(a).filter(function(d) { return b.includes(d) }).reduce(function(d, e) { d[e] = a[e]; return d }, c) };
    /*
        Portions of this code are from MochiKit, received by
        The Closure Authors under the MIT license. All other code is Copyright
        2005-2009 The Closure Authors. All Rights Reserved.
       */
    function vk(a) {
        var b = wk;
        this.ad = [];
        this.bf = b;
        this.De = a || null;
        this.Yb = this.Bb = !1;
        this.Wa = void 0;
        this.de = this.ag = this.od = !1;
        this.cd = 0;
        this.W = null;
        this.pd = 0
    }
    vk.prototype.cancel = function(a) {
        if (this.Bb) this.Wa instanceof vk && this.Wa.cancel();
        else {
            if (this.W) {
                var b = this.W;
                delete this.W;
                a ? b.cancel(a) : (b.pd--, 0 >= b.pd && b.cancel())
            }
            this.bf ? this.bf.call(this.De, this) : this.de = !0;
            this.Bb || (a = new xk(this), yk(this), zk(this, !1, a))
        }
    };
    vk.prototype.Ae = function(a, b) {
        this.od = !1;
        zk(this, a, b)
    };

    function zk(a, b, c) {
        a.Bb = !0;
        a.Wa = c;
        a.Yb = !b;
        Ak(a)
    }

    function yk(a) {
        if (a.Bb) {
            if (!a.de) throw new Bk(a);
            a.de = !1
        }
    }
    vk.prototype.callback = function(a) {
        yk(this);
        zk(this, !0, a)
    };

    function Ck(a, b, c) {
        a.ad.push([b, c, void 0]);
        a.Bb && Ak(a)
    }
    vk.prototype.then = function(a, b, c) {
        var d, e, f = new F(function(g, k) {
            d = g;
            e = k
        });
        Ck(this, d, function(g) { g instanceof xk ? f.cancel() : e(g) });
        return f.then(a, b, c)
    };
    vk.prototype.$goog_Thenable = !0;

    function Dk(a) { return La(a.ad, function(b) { return "function" === typeof b[1] }) }

    function Ak(a) {
        if (a.cd && a.Bb && Dk(a)) {
            var b = a.cd,
                c = Ek[b];
            c && (r.clearTimeout(c.pb), delete Ek[b]);
            a.cd = 0
        }
        a.W && (a.W.pd--, delete a.W);
        b = a.Wa;
        for (var d = c = !1; a.ad.length && !a.od;) {
            var e = a.ad.shift(),
                f = e[0],
                g = e[1];
            e = e[2];
            if (f = a.Yb ? g : f) try {
                var k = f.call(e || a.De, b);
                void 0 !== k && (a.Yb = a.Yb && (k == b || k instanceof Error), a.Wa = b = k);
                if (zf(b) || "function" === typeof r.Promise && b instanceof r.Promise) d = !0, a.od = !0
            } catch (n) { b = n, a.Yb = !0, Dk(a) || (c = !0) }
        }
        a.Wa = b;
        d && (k = u(a.Ae, a, !0), d = u(a.Ae, a, !1), b instanceof vk ? (Ck(b, k, d), b.ag = !0) : b.then(k, d));
        c && (b = new Fk(b), Ek[b.pb] = b, a.cd = b.pb)
    }

    function Bk() { Ca.call(this) }
    x(Bk, Ca);
    Bk.prototype.message = "Deferred has already fired";
    Bk.prototype.name = "AlreadyCalledError";

    function xk() { Ca.call(this) }
    x(xk, Ca);
    xk.prototype.message = "Deferred was canceled";
    xk.prototype.name = "CanceledError";

    function Fk(a) {
        this.pb = r.setTimeout(u(this.Ih, this), 0);
        this.yg = a
    }
    Fk.prototype.Ih = function() { delete Ek[this.pb]; throw this.yg; };
    var Ek = {};

    function Gk(a) {
        var b = {},
            c = b.document || document,
            d = ib(a).toString(),
            e = le(document, "SCRIPT"),
            f = { nf: e, wf: void 0 },
            g = new vk(f),
            k = null,
            n = null != b.timeout ? b.timeout : 5E3;
        0 < n && (k = window.setTimeout(function() {
            Hk(e, !0);
            var p = new Ik(1, "Timeout reached for loading script " + d);
            yk(g);
            zk(g, !1, p)
        }, n), f.wf = k);
        e.onload = e.onreadystatechange = function() { e.readyState && "loaded" != e.readyState && "complete" != e.readyState || (Hk(e, b.di || !1, k), g.callback(null)) };
        e.onerror = function() {
            Hk(e, !0, k);
            var p = new Ik(0, "Error while loading script " +
                d);
            yk(g);
            zk(g, !1, p)
        };
        f = b.attributes || {};
        $a(f, { type: "text/javascript", charset: "UTF-8" });
        he(e, f);
        Yb(e, a);
        Jk(c).appendChild(e);
        return g
    }

    function Jk(a) { var b = (a || document).getElementsByTagName("HEAD"); return b && 0 != b.length ? b[0] : a.documentElement }

    function wk() {
        if (this && this.nf) {
            var a = this.nf;
            a && "SCRIPT" == a.tagName && Hk(a, !0, this.wf)
        }
    }

    function Hk(a, b, c) {
        null != c && r.clearTimeout(c);
        a.onload = ua;
        a.onerror = ua;
        a.onreadystatechange = ua;
        b && window.setTimeout(function() { me(a) }, 0)
    }

    function Ik(a, b) {
        var c = "Jsloader error (code #" + a + ")";
        b && (c += ": " + b);
        Ca.call(this, c);
        this.code = a
    }
    x(Ik, Ca);

    function Kk() { return r.google && r.google.accounts && r.google.accounts.id || null }

    function Lk(a) {
        this.Db = a || Kk();
        this.Se = !1;
        this.qd = null
    }
    Lk.prototype.cancel = function() { this.Db && this.Se && (this.qd && this.qd(null), this.Db.cancel()) };
    Lk.prototype.show = function(a, b) {
        var c = this;
        if (this.Db && a) return function() {
            c.Se = !0;
            return new F(function(e) {
                c.qd = e;
                c.Db.initialize({ client_id: a, callback: e, auto_select: !b });
                c.Db.prompt()
            })
        }();
        if (a) { var d = Mk.Ad().load().then(function() { c.Db = Kk(); return c.show(a, b) }).pc(function() { return null }); return G(d) }
        return G(null)
    };
    va(Lk);
    var kb = new cb(db, "https://accounts.google.com/gsi/client");

    function Mk() { this.Gb = null }
    Mk.prototype.load = function() {
        var a = this;
        if (this.Gb) return this.Gb;
        var b = jb();
        return Kk() ? G() : this.Gb = sk().then(function() {
            if (!Kk()) return new F(function(c, d) {
                var e = setTimeout(function() {
                    a.Gb = null;
                    d(Error("Network error!"))
                }, 1E4);
                r.onGoogleLibraryLoad = function() {
                    clearTimeout(e);
                    c()
                };
                G(Gk(b)).then(function() { Kk() && c() }).pc(function(f) {
                    clearTimeout(e);
                    a.Gb = null;
                    d(f)
                })
            })
        })
    };
    va(Mk);

    function Nk(a, b) {
        for (var c = 0; c < a.length; c++)
            if (!Ma(Ok, a[c]) && (null !== Pk && a[c] in Pk || Ma(b, a[c]))) return a[c];
        return null
    }
    var Ok = ["emailLink", "password", "phone"],
        Pk = { "facebook.com": "FacebookAuthProvider", "github.com": "GithubAuthProvider", "google.com": "GoogleAuthProvider", password: "EmailAuthProvider", "twitter.com": "TwitterAuthProvider", phone: "PhoneAuthProvider" };

    function Qk() { this.mf = Date.now() }
    var Rk = null;
    Qk.prototype.set = function(a) { this.mf = a };
    Qk.prototype.reset = function() { this.set(Date.now()) };
    Qk.prototype.get = function() { return this.mf };

    function Sk(a, b) {
        this.name = a;
        this.value = b
    }
    Sk.prototype.toString = function() { return this.name };
    var Tk = new Sk("OFF", Infinity),
        Uk = new Sk("SEVERE", 1E3),
        Vk = new Sk("WARNING", 900),
        Wk = new Sk("CONFIG", 700);

    function Xk() {
        this.yc = 0;
        this.clear()
    }
    var Yk;
    Xk.prototype.clear = function() {
        this.ve = Array(this.yc);
        this.Ce = -1;
        this.Ue = !1
    };

    function Zk(a, b, c) {
        this.Cc = null;
        this.reset(a || Tk, b, c, void 0, void 0)
    }
    Zk.prototype.reset = function(a, b, c, d) {
        this.vf = d || Date.now();
        this.Ye = a;
        this.Zg = b;
        this.af = c;
        this.Cc = null
    };

    function $k(a, b) {
        this.level = null;
        this.Qe = [];
        this.parent = (void 0 === b ? null : b) || null;
        this.children = [];
        this.$e = { getName: function() { return a } }
    }

    function al(a) {
        if (a.level) return a.level;
        if (a.parent) return al(a.parent);
        Fa("Root logger has no level set.");
        return Tk
    }

    function bl(a, b) { for (; a;) a.Qe.forEach(function(c) { c(b) }), a = a.parent }

    function cl() {
        this.entries = {};
        var a = new $k("");
        a.level = Wk;
        this.entries[""] = a
    }
    var dl;

    function el(a, b, c) {
        var d = a.entries[b];
        if (d) return void 0 !== c && (d.level = c), d;
        d = el(a, b.substr(0, b.lastIndexOf(".")));
        var e = new $k(b, d);
        a.entries[b] = e;
        d.children.push(e);
        void 0 !== c && (e.level = c);
        return e
    }

    function fl() { dl || (dl = new cl); return dl }

    function gl(a, b, c, d) {
        var e;
        if (e = a)
            if (e = a && b) {
                e = b.value;
                var f = a ? al(el(fl(), a.getName())) : Tk;
                e = e >= f.value
            }
        if (e) {
            b = b || Tk;
            e = el(fl(), a.getName());
            "function" === typeof c && (c = c());
            Yk || (Yk = new Xk);
            f = Yk;
            a = a.getName();
            if (0 < f.yc) {
                var g = (f.Ce + 1) % f.yc;
                f.Ce = g;
                f.Ue ? (f = f.ve[g], f.reset(b, c, a), a = f) : (f.Ue = g == f.yc - 1, a = f.ve[g] = new Zk(b, c, a))
            } else a = new Zk(b, c, a);
            d && (a.Cc = d);
            bl(e, a)
        }
    }

    function hl(a, b) {
        var c = il;
        c && gl(c, Uk, a, b)
    };

    function jl(a) {
        this.fb = a || "";
        Rk || (Rk = new Qk);
        this.Gh = Rk
    }
    h = jl.prototype;
    h.pe = !0;
    h.pf = !0;
    h.vh = !0;
    h.th = !0;
    h.qf = !1;
    h.xh = !1;

    function kl(a) { return 10 > a ? "0" + a : String(a) }

    function ll(a) { jl.call(this, a) }
    x(ll, jl);

    function ml(a, b) {
        var c = [];
        c.push(a.fb, " ");
        if (a.pf) {
            var d = new Date(b.vf);
            c.push("[", kl(d.getFullYear() - 2E3) + kl(d.getMonth() + 1) + kl(d.getDate()) + " " + kl(d.getHours()) + ":" + kl(d.getMinutes()) + ":" + kl(d.getSeconds()) + "." + kl(Math.floor(d.getMilliseconds() / 10)), "] ")
        }
        if (a.vh) {
            d = c.push;
            var e = a.Gh.get();
            e = (b.vf - e) / 1E3;
            var f = e.toFixed(3),
                g = 0;
            if (1 > e) g = 2;
            else
                for (; 100 > e;) g++, e *= 10;
            for (; 0 < g--;) f = " " + f;
            d.call(c, "[", f, "s] ")
        }
        a.th && c.push("[", b.af, "] ");
        a.xh && c.push("[", b.Ye.name, "] ");
        c.push(b.Zg);
        a.qf && (b = b.Cc) &&
            c.push("\n", b instanceof Error ? b.message : b.toString());
        a.pe && c.push("\n");
        return c.join("")
    };

    function nl() {
        this.hh = u(this.Yf, this);
        this.Dc = new ll;
        this.Dc.pf = !1;
        this.Dc.qf = !1;
        this.Te = this.Dc.pe = !1;
        this.Ag = {}
    }
    nl.prototype.Yf = function(a) {
        function b(f) { if (f) { if (f.value >= Uk.value) return "error"; if (f.value >= Vk.value) return "warn"; if (f.value >= Wk.value) return "log" } return "debug" }
        if (!this.Ag[a.af]) {
            var c = ml(this.Dc, a),
                d = ol;
            if (d) {
                var e = b(a.Ye);
                pl(d, e, c, a.Cc)
            }
        }
    };
    var ol = r.console;

    function pl(a, b, c, d) {
        if (a[b]) a[b](c, d || "");
        else a.log(c, d || "")
    };
    var il = el(fl(), "firebaseui", void 0).$e,
        ql = new nl;
    if (1 != ql.Te) {
        var rl = el(fl(), "").$e,
            sl = ql.hh;
        rl && el(fl(), rl.getName()).Qe.push(sl);
        ql.Te = !0
    }

    function tl(a) {
        var b = il;
        b && gl(b, Vk, a, void 0)
    };

    function ul(a, b) {
        this.Je = a;
        this.Ba = b || null
    }
    ul.prototype.getEmail = function() { return this.Je };
    ul.prototype.Nb = function() { return { email: this.Je, credential: this.Ba && this.Ba.toJSON() } };

    function vl(a) { if (a && a.email) { var b = a.credential && firebase.auth.AuthCredential.fromJSON(a.credential); return new ul(a.email, b) } return null };

    function wl(a, b) {
        this.ng = a;
        this.xg = b || function(c) { throw c; };
        this.verificationId = a.verificationId
    }
    wl.prototype.confirm = function(a) { return G(this.ng.confirm(a)).pc(this.xg) };

    function xl(a) { this.uf = a || null }
    xl.prototype.Xb = function() { return this.uf };
    xl.prototype.Nb = function() { return { tenantId: this.uf } };

    function yl() {}
    x(yl, Pj);
    yl.prototype.clear = function() {
        var a = fc(this.hb(!0)),
            b = this;
        Ha(a, function(c) { b.remove(c) })
    };

    function zl(a) { this.za = a }
    x(zl, yl);

    function Al(a) { if (!a.za) return !1; try { return a.za.setItem("__sak", "1"), a.za.removeItem("__sak"), !0 } catch (b) { return !1 } }
    h = zl.prototype;
    h.set = function(a, b) { try { this.za.setItem(a, b) } catch (c) { if (0 == this.za.length) throw "Storage mechanism: Storage disabled"; throw "Storage mechanism: Quota exceeded"; } };
    h.get = function(a) { a = this.za.getItem(a); if ("string" !== typeof a && null !== a) throw "Storage mechanism: Invalid value was encountered"; return a };
    h.remove = function(a) { this.za.removeItem(a) };
    h.hb = function(a) {
        var b = 0,
            c = this.za,
            d = new cc;
        d.next = function() {
            if (b >= c.length) throw bc;
            var e = c.key(b++);
            if (a) return e;
            e = c.getItem(e);
            if ("string" !== typeof e) throw "Storage mechanism: Invalid value was encountered";
            return e
        };
        return d
    };
    h.clear = function() { this.za.clear() };
    h.key = function(a) { return this.za.key(a) };

    function Bl() {
        var a = null;
        try { a = window.localStorage || null } catch (b) {}
        this.za = a
    }
    x(Bl, zl);

    function Cl() {
        var a = null;
        try { a = window.sessionStorage || null } catch (b) {}
        this.za = a
    }
    x(Cl, zl);

    function Dl(a, b) {
        this.dc = a;
        this.fb = b + "::"
    }
    x(Dl, yl);
    Dl.prototype.set = function(a, b) { this.dc.set(this.fb + a, b) };
    Dl.prototype.get = function(a) { return this.dc.get(this.fb + a) };
    Dl.prototype.remove = function(a) { this.dc.remove(this.fb + a) };
    Dl.prototype.hb = function(a) {
        var b = this.dc.hb(!0),
            c = this,
            d = new cc;
        d.next = function() { for (var e = b.next(); e.substr(0, c.fb.length) != c.fb;) e = b.next(); return a ? e.substr(c.fb.length) : c.dc.get(e) };
        return d
    };

    function El(a) {
        var b = [];
        Fl(new Gl, a, b);
        return b.join("")
    }

    function Gl() { this.$c = void 0 }

    function Fl(a, b, c) {
        if (null == b) c.push("null");
        else {
            if ("object" == typeof b) {
                if (Array.isArray(b)) {
                    var d = b;
                    b = d.length;
                    c.push("[");
                    for (var e = "", f = 0; f < b; f++) c.push(e), e = d[f], Fl(a, a.$c ? a.$c.call(d, String(f), e) : e, c), e = ",";
                    c.push("]");
                    return
                }
                if (b instanceof String || b instanceof Number || b instanceof Boolean) b = b.valueOf();
                else {
                    c.push("{");
                    f = "";
                    for (d in b) Object.prototype.hasOwnProperty.call(b, d) && (e = b[d], "function" != typeof e && (c.push(f), Hl(d, c), c.push(":"), Fl(a, a.$c ? a.$c.call(b, d, e) : e, c), f = ","));
                    c.push("}");
                    return
                }
            }
            switch (typeof b) {
                case "string":
                    Hl(b, c);
                    break;
                case "number":
                    c.push(isFinite(b) && !isNaN(b) ? String(b) : "null");
                    break;
                case "boolean":
                    c.push(String(b));
                    break;
                case "function":
                    c.push("null");
                    break;
                default:
                    throw Error("Unknown type: " + typeof b);
            }
        }
    }
    var Il = { '"': '\\"', "\\": "\\\\", "/": "\\/", "\b": "\\b", "\f": "\\f", "\n": "\\n", "\r": "\\r", "\t": "\\t", "\x0B": "\\u000b" },
        Jl = /\uffff/.test("\uffff") ? /[\\"\x00-\x1f\x7f-\uffff]/g : /[\\"\x00-\x1f\x7f-\xff]/g;

    function Hl(a, b) {
        b.push('"', a.replace(Jl, function(c) {
            var d = Il[c];
            d || (d = "\\u" + (c.charCodeAt(0) | 65536).toString(16).substr(1), Il[c] = d);
            return d
        }), '"')
    };

    function Kl(a) { this.Sc = a }
    Kl.prototype.set = function(a, b) { void 0 === b ? this.Sc.remove(a) : this.Sc.set(a, El(b)) };
    Kl.prototype.get = function(a) { try { var b = this.Sc.get(a) } catch (c) { return } if (null !== b) try { return JSON.parse(b) } catch (c) { throw "Storage: Invalid value was encountered"; } };
    Kl.prototype.remove = function(a) { this.Sc.remove(a) };
    Al(new Bl);
    var Ll, Ml = new Cl;
    Ll = Al(Ml) ? new Dl(Ml, "firebaseui") : null;
    var Nl = new Kl(Ll),
        Ol = { name: "pendingEmailCredential", storage: Nl },
        Pl = { name: "redirectStatus", storage: Nl },
        Ql = { name: "redirectUrl", storage: Nl },
        Rl = { name: "emailForSignIn", storage: new Kl(new Qj(3600, "/")) },
        Sl = { name: "pendingEncryptedCredential", storage: new Kl(new Qj(3600, "/")) };

    function Tl(a, b) { return a.storage.get(b ? a.name + ":" + b : a.name) }

    function Ul(a, b) { a.storage.remove(b ? a.name + ":" + b : a.name) }

    function Vl(a, b, c) { a.storage.set(c ? a.name + ":" + c : a.name, b) }

    function Wl(a) { return Tl(Ql, a) || null }

    function Xl(a) { a = Tl(Ol, a) || null; return vl(a) }

    function Yl(a) { Ul(Ol, a) }

    function Zl(a, b) { Vl(Ol, a.Nb(), b) }

    function $l(a) { return (a = Tl(Pl, a) || null) && "undefined" !== typeof a.tenantId ? new xl(a.tenantId) : null }

    function am(a, b) { Vl(Pl, a.Nb(), b) }

    function bm(a, b) {
        b = Tl(Rl, b);
        var c = null;
        if (b) try {
            var d = nk(a, b),
                e = JSON.parse(d);
            c = e && e.email || null
        } catch (f) {}
        return c
    }

    function cm(a, b) {
        b = Tl(Sl, b);
        var c = null;
        if (b) try {
            var d = nk(a, b);
            c = JSON.parse(d)
        } catch (e) {}
        return vl(c || null)
    }

    function dm(a, b, c) { Vl(Sl, lk(a, JSON.stringify(b.Nb())), c) };

    function em(a, b, c) {
        var d = Error.call(this);
        this.message = d.message;
        "stack" in d && (this.stack = d.stack);
        this.code = "firebaseui/" + a;
        if (!(a = b)) {
            a = this.code;
            if (D["firebaseui.auth.soy2.strings.errorAuthUI"]) a = D["firebaseui.auth.soy2.strings.errorAuthUI"]({ code: a }, void 0);
            else {
                E("string" === typeof a, "code", a, "string");
                b = "";
                switch (t(a) ? a.toString() : a) {
                    case "firebaseui/merge-conflict":
                        b += "The current anonymous user failed to upgrade. The non-anonymous credential is already associated with a different user account.";
                        break;
                    default:
                        b += Hg(null, void 0)
                }
                a = b
            }
            a = a.toString()
        }
        this.message = a || "";
        this.credential = c || null
    }
    l(em, Error);
    em.prototype.Nb = function() { return { code: this.code, message: this.message } };
    em.prototype.toJSON = function() { return this.Nb() };

    function fm() {
        this.o = new Kj;
        this.o.define("acUiConfig");
        this.o.define("autoUpgradeAnonymousUsers");
        this.o.define("callbacks");
        this.o.define("credentialHelper", "none");
        this.o.define("immediateFederatedRedirect", !1);
        this.o.define("popupMode", !1);
        this.o.define("privacyPolicyUrl");
        this.o.define("queryParameterForSignInSuccessUrl", "signInSuccessUrl");
        this.o.define("queryParameterForWidgetMode", "mode");
        this.o.define("signInFlow");
        this.o.define("signInOptions");
        this.o.define("signInSuccessUrl");
        this.o.define("siteName");
        this.o.define("tosUrl");
        this.o.define("widgetUrl")
    }

    function gm(a) {
        var b = !!a.o.get("autoUpgradeAnonymousUsers");
        b && !hm(a) && hl('Missing "signInFailure" callback: "signInFailure" callback needs to be provided when "autoUpgradeAnonymousUsers" is set to true.', void 0);
        return b
    }

    function im(a) {
        a = a.o.get("signInOptions") || [];
        for (var b = [], c = 0; c < a.length; c++) {
            var d = a[c];
            d = t(d) ? d : { provider: d };
            d.provider && b.push(d)
        }
        return b
    }

    function jm(a, b) {
        a = im(a);
        for (var c = 0; c < a.length; c++)
            if (a[c].provider === b) return a[c];
        return null
    }

    function km(a) { return Ka(im(a), function(b) { return b.provider }) }

    function lm(a, b) {
        a = mm(a);
        for (var c = 0; c < a.length; c++)
            if (a[c].providerId === b) return a[c];
        return null
    }

    function mm(a) { return Ka(im(a), function(b) { if (Pk[b.provider] || Ma(nm, b.provider)) { b = { providerId: b.provider, na: b.providerName || null, va: b.fullLabel || null, Rb: b.buttonColor || null, $b: b.iconUrl ? xb(Cb(b.iconUrl) || Fb) : null }; for (var c in b) null === b[c] && delete b[c]; return b } return { providerId: b.provider, na: b.providerName || null, va: b.fullLabel || null, Rb: b.buttonColor || null, $b: b.iconUrl ? xb(Cb(b.iconUrl) || Fb) : null, Wg: b.loginHintKey || null } }) }

    function om(a) { var b = jm(a, firebase.auth.GoogleAuthProvider.PROVIDER_ID); return b && b.clientId && "googleyolo" === pm(a) ? b.clientId || null : null }

    function qm(a) { a = jm(a, firebase.auth.EmailAuthProvider.PROVIDER_ID); return !!(a && a.disableSignUp && a.disableSignUp.status) }

    function rm(a) {
        var b = null;
        Ha(im(a), function(d) { d.provider == firebase.auth.PhoneAuthProvider.PROVIDER_ID && t(d.recaptchaParameters) && !Array.isArray(d.recaptchaParameters) && (b = Ya(d.recaptchaParameters)) });
        if (b) {
            var c = [];
            Ha(sm, function(d) { "undefined" !== typeof b[d] && (c.push(d), delete b[d]) });
            c.length && tl('The following provided "recaptchaParameters" keys are not allowed: ' + c.join(", "))
        }
        return b
    }

    function tm(a) { return (a = jm(a, firebase.auth.EmailAuthProvider.PROVIDER_ID)) && a.disableSignUp && a.disableSignUp.adminEmail || null }

    function um(a) { if ((a = jm(a, firebase.auth.EmailAuthProvider.PROVIDER_ID)) && a.disableSignUp) { var b = a.disableSignUp.helpLink || null; if (b && "string" === typeof b) return function() { pk(b) } } return null }

    function vm(a, b) { a = (a = jm(a, b)) && a.scopes; return Array.isArray(a) ? a : [] }

    function wm(a, b) { a = (a = jm(a, b)) && a.customParameters; return t(a) ? (a = Ya(a), b === firebase.auth.GoogleAuthProvider.PROVIDER_ID && delete a.login_hint, b === firebase.auth.GithubAuthProvider.PROVIDER_ID && delete a.login, a) : null }

    function xm(a) {
        a = jm(a, firebase.auth.PhoneAuthProvider.PROVIDER_ID);
        var b = null;
        a && "string" === typeof a.loginHint && (b = Hh(a.loginHint));
        return a && a.defaultNationalNumber || b && b.Va || null
    }

    function ym(a) {
        var b = (a = jm(a, firebase.auth.PhoneAuthProvider.PROVIDER_ID)) && a.defaultCountry || null;
        b = b && Qd(b);
        var c = null;
        a && "string" === typeof a.loginHint && (c = Hh(a.loginHint));
        return b && b[0] || c && Od(c.Ac) || null
    }

    function zm(a) {
        a = jm(a, firebase.auth.PhoneAuthProvider.PROVIDER_ID);
        if (!a) return null;
        var b = a.whitelistedCountries,
            c = a.blacklistedCountries;
        if ("undefined" !== typeof b && (!Array.isArray(b) || 0 == b.length)) throw Error("WhitelistedCountries must be a non-empty array.");
        if ("undefined" !== typeof c && !Array.isArray(c)) throw Error("BlacklistedCountries must be an array.");
        if (b && c) throw Error("Both whitelistedCountries and blacklistedCountries are provided.");
        if (!b && !c) return Pd;
        a = [];
        if (b) {
            c = {};
            for (var d = 0; d < b.length; d++) {
                var e =
                    Rd(b[d]);
                for (var f = 0; f < e.length; f++) c[e[f].h] = e[f]
            }
            for (var g in c) c.hasOwnProperty(g) && a.push(c[g])
        } else {
            g = {};
            for (b = 0; b < c.length; b++)
                for (e = Rd(c[b]), d = 0; d < e.length; d++) g[e[d].h] = e[d];
            for (e = 0; e < Pd.length; e++) null !== g && Pd[e].h in g || a.push(Pd[e])
        }
        return a
    }

    function Am(a) { return Lj(a.o, "queryParameterForWidgetMode") }
    fm.prototype.N = function() {
        var a = this.o.get("tosUrl") || null,
            b = this.o.get("privacyPolicyUrl") || null;
        a && !b && tl("Privacy Policy URL is missing, the link will not be displayed.");
        if (a && b) { if ("function" === typeof a) return a; if ("string" === typeof a) return function() { pk(a) } }
        return null
    };
    fm.prototype.M = function() {
        var a = this.o.get("tosUrl") || null,
            b = this.o.get("privacyPolicyUrl") || null;
        b && !a && tl("Term of Service URL is missing, the link will not be displayed.");
        if (a && b) { if ("function" === typeof b) return b; if ("string" === typeof b) return function() { pk(b) } }
        return null
    };

    function Bm(a) { return (a = jm(a, firebase.auth.EmailAuthProvider.PROVIDER_ID)) && "undefined" !== typeof a.requireDisplayName ? !!a.requireDisplayName : !0 }

    function Cm(a) { a = jm(a, firebase.auth.EmailAuthProvider.PROVIDER_ID); return !(!a || a.signInMethod !== firebase.auth.EmailAuthProvider.EMAIL_LINK_SIGN_IN_METHOD) }

    function Dm(a) { a = jm(a, firebase.auth.EmailAuthProvider.PROVIDER_ID); return !(!a || !a.forceSameDevice) }

    function Em(a) {
        if (Cm(a)) {
            var b = { url: rk(), handleCodeInApp: !0 };
            (a = jm(a, firebase.auth.EmailAuthProvider.PROVIDER_ID)) && "function" === typeof a.emailLinkSignIn && $a(b, a.emailLinkSignIn());
            a = b.url;
            var c = rk();
            c instanceof sc || (c = Gc(c));
            a instanceof sc || (a = Gc(a));
            a = c.resolve(a);
            b.url = a.toString();
            return b
        }
        return null
    }

    function Fm(a) {
        var b = !!a.o.get("immediateFederatedRedirect"),
            c = km(a);
        a = Gm(a);
        return b && 1 == c.length && !Ma(Ok, c[0]) && "redirect" == a
    }

    function Gm(a) {
        a = a.o.get("signInFlow");
        for (var b in Hm)
            if (Hm[b] == a) return Hm[b];
        return "redirect"
    }

    function Im(a) { return Jm(a).signInSuccess || null }

    function Km(a) { return Jm(a).signInSuccessWithAuthResult || null }

    function hm(a) { return Jm(a).signInFailure || null }

    function Jm(a) { return a.o.get("callbacks") || {} }

    function pm(a) {
        if ("http:" !== (window.location && window.location.protocol) && "https:" !== (window.location && window.location.protocol)) return "none";
        a = a.o.get("credentialHelper");
        if ("accountchooser.com" === a) return "none";
        for (var b in Lm)
            if (Lm[b] === a) return Lm[b];
        return "none"
    }
    fm.prototype.Kb = function(a) {
        for (var b in a) try { this.o.update(b, a[b]) } catch (c) { hl('Invalid config: "' + b + '"', void 0) }
        $c && this.o.update("popupMode", !1);
        zm(this)
    };
    fm.prototype.update = function(a, b) {
        this.o.update(a, b);
        zm(this)
    };
    var Lm = { Qh: "accountchooser.com", Th: "googleyolo", NONE: "none" },
        Hm = { Xh: "popup", Yh: "redirect" },
        Mm = { Sh: "callback", RECOVER_EMAIL: "recoverEmail", Zh: "resetPassword", REVERT_SECOND_FACTOR_ADDITION: "revertSecondFactorAddition", $h: "select", ai: "signIn", VERIFY_AND_CHANGE_EMAIL: "verifyAndChangeEmail", VERIFY_EMAIL: "verifyEmail" },
        nm = ["anonymous"],
        sm = ["sitekey", "tabindex", "callback", "expired-callback"];
    var Nm, Om, Pm, Qm, P = {};

    function R(a, b, c, d) { P[a].apply(null, Array.prototype.slice.call(arguments, 1)) };

    function Rm(a) { if ("auth/invalid-credential" === a.code && a.message && -1 !== a.message.indexOf("error=consent_required")) return { code: "auth/user-cancelled" }; if (a.message && -1 !== a.message.indexOf("HTTP Cloud Function returned an error:")) { var b = JSON.parse(a.message.substring(a.message.indexOf("{"), a.message.lastIndexOf("}") + 1)); return { code: a.code, message: b && b.error && b.error.message || a.message } } return a }

    function Sm(a, b, c, d) {
        function e(g) {
            if (!g.name || "cancel" != g.name) {
                a: {
                    var k = g.message;
                    try { var n = ((JSON.parse(k).error || {}).message || "").toLowerCase().match(/invalid.+(access|id)_token/); if (n && n.length) { var p = !0; break a } } catch (m) {}
                    p = !1
                }
                if (p) g = M(b),
                b.m(),
                p = D["firebaseui.auth.soy2.strings.errorExpiredCredential"] ? D["firebaseui.auth.soy2.strings.errorExpiredCredential"](void 0, void 0) : "Your sign-in session has expired. Please try again.",
                S(a, g, void 0, p.toString());
                else {
                    p = g && g.message || "";
                    if (g.code) {
                        if ("auth/email-already-in-use" ==
                            g.code || "auth/credential-already-in-use" == g.code) return;
                        p = T(g)
                    }
                    b.J(p)
                }
            }
        }
        Tm(a);
        if (d) return Um(a, c), G();
        if (!c.credential) throw Error("No credential found!");
        if (!a.u().currentUser && !c.user) throw Error("User not logged in.");
        try { var f = Vm(a, c) } catch (g) { return hl(g.code || g.message, g), b.J(g.code || g.message), G() }
        c = f.then(function(g) { Um(a, g) }, e).then(void 0, e);
        U(a, f);
        return G(c)
    }

    function Um(a, b) {
        if (!b.user) throw Error("No user found");
        var c = Km(V(a));
        Im(V(a)) && c && tl("Both signInSuccess and signInSuccessWithAuthResult callbacks are provided. Only signInSuccessWithAuthResult callback will be invoked.");
        if (c) {
            c = Km(V(a));
            var d = Wl(W(a)) || void 0;
            Ul(Ql, W(a));
            var e = !1;
            if (ok()) {
                if (!c || c(b, d)) e = !0, Zb(window.opener.location, Wm(a, d));
                c || window.close()
            } else if (!c || c(b, d)) e = !0, Zb(window.location, Wm(a, d));
            e || a.reset()
        } else {
            c = b.user;
            b = b.credential;
            d = Im(V(a));
            e = Wl(W(a)) || void 0;
            Ul(Ql, W(a));
            var f = !1;
            if (ok()) {
                if (!d || d(c, b, e)) f = !0, Zb(window.opener.location, Wm(a, e));
                d || window.close()
            } else if (!d || d(c, b, e)) f = !0, Zb(window.location, Wm(a, e));
            f || a.reset()
        }
    }

    function Wm(a, b) { a = b || V(a).o.get("signInSuccessUrl"); if (!a) throw Error("No redirect URL has been found. You must either specify a signInSuccessUrl in the configuration, pass in a redirect URL to the widget URL, or return false from the callback."); return a }

    function T(a) {
        var b = b = { code: a.code };
        b = b.code;
        if (D["firebaseui.auth.soy2.strings.error"]) b = D["firebaseui.auth.soy2.strings.error"]({ code: b }, void 0);
        else {
            E(null == b || "string" === typeof b, "code", b, "null|string|undefined");
            var c = "";
            switch (t(b) ? b.toString() : b) {
                case "auth/email-already-in-use":
                    c += "The email address is already used by another account";
                    break;
                case "auth/requires-recent-login":
                    c += Lg();
                    break;
                case "auth/too-many-requests":
                    c += "You have entered an incorrect password too many times. Please try again in a few minutes.";
                    break;
                case "auth/user-cancelled":
                    c += "Please authorize the required permissions to sign in to the application";
                    break;
                case "auth/user-not-found":
                    c += "That email address doesn't match an existing account";
                    break;
                case "auth/user-token-expired":
                    c += Lg();
                    break;
                case "auth/weak-password":
                    c += "Strong passwords have at least 6 characters and a mix of letters and numbers";
                    break;
                case "auth/wrong-password":
                    c += "The email and password you entered don't match";
                    break;
                case "auth/network-request-failed":
                    c += "A network error has occurred";
                    break;
                case "auth/invalid-phone-number":
                    c += Dg(null, void 0);
                    break;
                case "auth/invalid-verification-code":
                    c += Eg(null, void 0);
                    break;
                case "auth/code-expired":
                    c += "This code is no longer valid";
                    break;
                case "auth/expired-action-code":
                    c += "This code has expired.";
                    break;
                case "auth/invalid-action-code":
                    c += "The action code is invalid. This can happen if the code is malformed, expired, or has already been used."
            }
            b = c
        }
        if (b = b.toString()) return b;
        try {
            return JSON.parse(a.message), hl("Internal error: " + a.message, void 0),
                Hg().toString()
        } catch (d) { return a.message }
    }

    function Xm(a, b, c) {
        var d = Pk[b] && firebase.auth[Pk[b]] ? new firebase.auth[Pk[b]] : 0 == b.indexOf("saml.") ? new firebase.auth.SAMLAuthProvider(b) : new firebase.auth.OAuthProvider(b);
        if (!d) throw Error("Invalid Firebase Auth provider!");
        var e = vm(V(a), b);
        if (d.addScope)
            for (var f = 0; f < e.length; f++) d.addScope(e[f]);
        e = wm(V(a), b) || {};
        c && (a = b == firebase.auth.GoogleAuthProvider.PROVIDER_ID ? "login_hint" : b == firebase.auth.GithubAuthProvider.PROVIDER_ID ? "login" : (a = lm(V(a), b)) && a.Wg, a && (e[a] = c));
        d.setCustomParameters && d.setCustomParameters(e);
        return d
    }

    function Ym(a, b, c, d) {
        function e() {
            var p = new xl(a.Xb());
            am(p, W(a));
            U(a, b.ba(u(a.Fh, a), [n], function() {
                if ("file:" === (window.location && window.location.protocol)) return U(a, a.getRedirectResult().then(function(m) {
                    b.m();
                    Ul(Pl, W(a));
                    R("callback", a, k, G(m))
                }, f))
            }, g))
        }

        function f(p) {
            Ul(Pl, W(a));
            if (!p.name || "cancel" != p.name) switch (p = Rm(p), p.code) {
                case "auth/popup-blocked":
                    e();
                    break;
                case "auth/popup-closed-by-user":
                case "auth/cancelled-popup-request":
                    break;
                case "auth/credential-already-in-use":
                    break;
                case "auth/network-request-failed":
                case "auth/too-many-requests":
                case "auth/user-cancelled":
                    b.J(T(p));
                    break;
                default:
                    b.m(), R("callback", a, k, Ff(p))
            }
        }

        function g(p) {
            Ul(Pl, W(a));
            p.name && "cancel" == p.name || (hl("signInWithRedirect: " + p.code, void 0), p = T(p), "blank" == b.Vc && Fm(V(a)) ? (b.m(), R("providerSignIn", a, k, p)) : b.J(p))
        }
        var k = M(b),
            n = Xm(a, c, d);
        "redirect" == Gm(V(a)) ? e() : U(a, Zm(a, n).then(function(p) {
            b.m();
            R("callback", a, k, G(p))
        }, f))
    }

    function $m(a, b) { U(a, b.ba(u(a.Bh, a), [], function(c) { b.m(); return Sm(a, b, c, !0) }, function(c) { c.name && "cancel" == c.name || (hl("ContinueAsGuest: " + c.code, void 0), c = T(c), b.J(c)) })) }

    function an(a, b, c) {
        function d(f) {
            var g = !1;
            f = b.ba(u(a.Ch, a), [f], function(k) {
                var n = M(b);
                b.m();
                R("callback", a, n, G(k));
                g = !0
            }, function(k) {
                if (!k.name || "cancel" != k.name)
                    if (!k || "auth/credential-already-in-use" != k.code)
                        if (k && "auth/email-already-in-use" == k.code && k.email && k.credential) {
                            var n = M(b);
                            b.m();
                            R("callback", a, n, Ff(k))
                        } else k = T(k), b.J(k)
            });
            U(a, f);
            return f.then(function() { return g }, function() { return !1 })
        }
        if (c && c.credential && c.clientId === om(V(a))) {
            if (vm(V(a), firebase.auth.GoogleAuthProvider.PROVIDER_ID).length) {
                try {
                    var e =
                        JSON.parse(atob(c.credential.split(".")[1])).email
                } catch (f) {}
                Ym(a, b, firebase.auth.GoogleAuthProvider.PROVIDER_ID, e);
                return G(!0)
            }
            return d(firebase.auth.GoogleAuthProvider.credential(c.credential))
        }
        c && b.J((D["firebaseui.auth.soy2.strings.errorUnsupportedCredential"] ? D["firebaseui.auth.soy2.strings.errorUnsupportedCredential"](void 0, void 0) : "The selected credential for the authentication provider is not supported!").toString());
        return G(!1)
    }

    function bn(a, b) {
        var c = b.ta(),
            d = b.td();
        if (c)
            if (d) {
                var e = firebase.auth.EmailAuthProvider.credential(c, d);
                U(a, b.ba(u(a.Dh, a), [c, d], function(f) { return Sm(a, b, { user: f.user, credential: e, operationType: f.operationType, additionalUserInfo: f.additionalUserInfo }) }, function(f) {
                    if (!f.name || "cancel" != f.name) switch (f.code) {
                        case "auth/email-already-in-use":
                            break;
                        case "auth/email-exists":
                            H(b.D(), !1);
                            qg(b.bb(), T(f));
                            break;
                        case "auth/too-many-requests":
                        case "auth/wrong-password":
                            H(b.Na(), !1);
                            qg(b.Cd(), T(f));
                            break;
                        default:
                            hl("verifyPassword: " +
                                f.message, void 0), b.J(T(f))
                    }
                }))
            } else b.Na().focus();
        else b.D().focus()
    }

    function cn(a) { a = km(V(a)); return 1 == a.length && a[0] == firebase.auth.EmailAuthProvider.PROVIDER_ID }

    function dn(a) { a = km(V(a)); return 1 == a.length && a[0] == firebase.auth.PhoneAuthProvider.PROVIDER_ID }

    function S(a, b, c, d) { cn(a) ? d ? R("signIn", a, b, c, d) : en(a, b, c) : a && dn(a) && !d ? R("phoneSignInStart", a, b) : a && Fm(V(a)) && !d ? R("federatedRedirect", a, b, c) : R("providerSignIn", a, b, d, c) }

    function fn(a, b, c, d) {
        var e = M(b);
        U(a, b.ba(u(a.u().fetchSignInMethodsForEmail, a.u()), [c], function(f) {
            b.m();
            gn(a, e, f, c, d)
        }, function(f) {
            f = T(f);
            b.J(f)
        }))
    }

    function gn(a, b, c, d, e, f) {
        c.length || Cm(V(a)) && !Cm(V(a)) ? Ma(c, firebase.auth.EmailAuthProvider.EMAIL_PASSWORD_SIGN_IN_METHOD) ? R("passwordSignIn", a, b, d, f) : 1 == c.length && c[0] === firebase.auth.EmailAuthProvider.EMAIL_LINK_SIGN_IN_METHOD ? Cm(V(a)) ? R("sendEmailLinkForSignIn", a, b, d, function() { R("signIn", a, b) }) : R("unsupportedProvider", a, b, d) : (c = Nk(c, km(V(a)))) ? (Zl(new ul(d), W(a)), R("federatedSignIn", a, b, d, c, e)) : R("unsupportedProvider", a, b, d) : qm(V(a)) ? R("handleUnauthorizedUser", a, b, d, firebase.auth.EmailAuthProvider.PROVIDER_ID) :
            Cm(V(a)) ? R("sendEmailLinkForSignIn", a, b, d, function() { R("signIn", a, b) }) : R("passwordSignUp", a, b, d, void 0, void 0, f)
    }

    function hn(a, b, c, d, e, f) {
        var g = M(b);
        U(a, b.ba(u(a.sendSignInLinkToEmail, a), [c, f], function() {
            b.m();
            R("emailLinkSignInSent", a, g, c, d, f)
        }, e))
    }

    function en(a, b, c) { c ? R("prefilledEmailSignIn", a, b, c) : R("signIn", a, b) };

    function jn() { return qc(rk(), "oobCode") }

    function kn() { var a = qc(rk(), "continueUrl"); return a ? function() { Zb(window.location, a) } : null };

    function ln(a, b, c, d, e) {
        var f = c.sd();
        f && U(a, c.ba(u(a.u().confirmPasswordReset, a.u()), [d, f], function() {
            c.m();
            var g = new kj(e);
            g.render(b);
            X(a, g)
        }, function(g) { mn(a, b, c, g) }))
    }

    function mn(a, b, c, d) { "auth/weak-password" == (d && d.code) ? (a = T(d), H(c.Da(), !1), qg(c.Bd(), a), c.Da().focus()) : (c && c.m(), c = new lj, c.render(b), X(a, c)) }

    function nn(a, b, c) {
        var d = new Ui(c, function() {
            U(a, d.ba(u(a.u().sendPasswordResetEmail, a.u()), [c], function() {
                d.m();
                d = new dj(c, void 0, V(a).N(), V(a).M());
                d.render(b);
                X(a, d)
            }, function() { d.J(Gg().toString()) }))
        });
        d.render(b);
        X(a, d)
    }

    function on(a, b, c, d) {
        var e = new yj(d.factorId, function() {
            e.ba(u(a.u().sendPasswordResetEmail, a.u()), [c], function() {
                e.m();
                e = new dj(c, void 0, V(a).N(), V(a).M());
                e.render(b);
                X(a, e)
            }, function() { e.J(Gg().toString()) })
        }, d.phoneNumber);
        e.render(b);
        X(a, e)
    }
    P.passwordReset = function(a, b, c, d) {
        U(a, a.u().verifyPasswordResetCode(c).then(function(e) {
            var f = new rj(e, function() { ln(a, b, f, c, d) });
            f.render(b);
            X(a, f)
        }, function() { mn(a, b) }))
    };
    P.emailChangeRevocation = function(a, b, c) {
        var d = null;
        U(a, a.u().checkActionCode(c).then(function(e) { d = e.data.email; return a.u().applyActionCode(c) }).then(function() { nn(a, b, d) }, function() {
            var e = new mj;
            e.render(b);
            X(a, e)
        }))
    };
    P.emailVerification = function(a, b, c, d) {
        U(a, a.u().applyActionCode(c).then(function() {
            var e = new ej(d);
            e.render(b);
            X(a, e)
        }, function() {
            var e = new fj;
            e.render(b);
            X(a, e)
        }))
    };
    P.revertSecondFactorAddition = function(a, b, c) {
        var d = null,
            e = null;
        U(a, a.u().checkActionCode(c).then(function(f) {
            d = f.data.email;
            e = f.data.multiFactorInfo;
            return a.u().applyActionCode(c)
        }).then(function() { on(a, b, d, e) }, function() {
            var f = new ij;
            f.render(b);
            X(a, f)
        }))
    };
    P.verifyAndChangeEmail = function(a, b, c, d) {
        var e = null;
        U(a, a.u().checkActionCode(c).then(function(f) { e = f.data.email; return a.u().applyActionCode(c) }).then(function() {
            var f = new gj(e, d);
            f.render(b);
            X(a, f)
        }, function() {
            var f = new hj;
            f.render(b);
            X(a, f)
        }))
    };
    P.anonymousUserMismatch = function(a, b) {
        var c = new Qi(function() {
            c.m();
            S(a, b)
        });
        c.render(b);
        X(a, c)
    };

    function pn(a, b, c) {
        if (c.user) {
            var d = { user: c.user, credential: c.credential, operationType: c.operationType, additionalUserInfo: c.additionalUserInfo },
                e = Xl(W(a)),
                f = e && e.getEmail();
            if (f && !qn(c.user, f)) rn(a, b, d);
            else {
                var g = e && e.Ba;
                g ? U(a, c.user.linkWithCredential(g).then(function(k) {
                    d = { user: k.user, credential: g, operationType: k.operationType, additionalUserInfo: k.additionalUserInfo };
                    sn(a, b, d)
                }, function(k) { tn(a, b, k) })) : sn(a, b, d)
            }
        } else c = M(b), b.m(), Yl(W(a)), S(a, c)
    }

    function sn(a, b, c) {
        Yl(W(a));
        Sm(a, b, c)
    }

    function tn(a, b, c) {
        var d = M(b);
        Yl(W(a));
        c = T(c);
        b.m();
        S(a, d, void 0, c)
    }

    function un(a, b, c, d) {
        var e = M(b);
        U(a, a.u().fetchSignInMethodsForEmail(c).then(function(f) {
            b.m();
            f.length ? Ma(f, firebase.auth.EmailAuthProvider.EMAIL_PASSWORD_SIGN_IN_METHOD) ? R("passwordLinking", a, e, c) : 1 == f.length && f[0] === firebase.auth.EmailAuthProvider.EMAIL_LINK_SIGN_IN_METHOD ? R("emailLinkSignInLinking", a, e, c) : (f = Nk(f, km(V(a)))) ? R("federatedLinking", a, e, c, f, d) : (Yl(W(a)), R("unsupportedProvider", a, e, c)) : (Yl(W(a)), R("passwordRecovery", a, e, c, !1, Ig().toString()))
        }, function(f) { tn(a, b, f) }))
    }

    function rn(a, b, c) {
        var d = M(b);
        U(a, vn(a).then(function() {
            b.m();
            R("emailMismatch", a, d, c)
        }, function(e) { e.name && "cancel" == e.name || (e = T(e.code), b.J(e)) }))
    }

    function qn(a, b) {
        if (b == a.email) return !0;
        if (a.providerData)
            for (var c = 0; c < a.providerData.length; c++)
                if (b == a.providerData[c].email) return !0;
        return !1
    }
    P.callback = function(a, b, c) {
        var d = new Si;
        d.render(b);
        X(a, d);
        b = c || a.getRedirectResult();
        U(a, b.then(function(e) { pn(a, d, e) }, function(e) {
            if ((e = Rm(e)) && ("auth/account-exists-with-different-credential" == e.code || "auth/email-already-in-use" == e.code) && e.email && e.credential) Zl(new ul(e.email, e.credential), W(a)), un(a, d, e.email);
            else if (e && "auth/user-cancelled" == e.code) {
                var f = Xl(W(a)),
                    g = T(e);
                f && f.Ba ? un(a, d, f.getEmail(), g) : f ? fn(a, d, f.getEmail(), g) : tn(a, d, e)
            } else e && "auth/credential-already-in-use" == e.code || (e &&
                "auth/operation-not-supported-in-this-environment" == e.code && cn(a) ? pn(a, d, { user: null, credential: null }) : tn(a, d, e))
        }))
    };
    P.differentDeviceError = function(a, b) {
        var c = new Ti(function() {
            c.m();
            S(a, b)
        });
        c.render(b);
        X(a, c)
    };
    P.emailLinkConfirmation = function(a, b, c, d, e, f) {
        var g = new Xi(function() {
            var k = g.ta();
            k ? (g.m(), d(a, b, k, c)) : g.D().focus()
        }, function() {
            g.m();
            S(a, b, e || void 0)
        }, e || void 0, V(a).N(), V(a).M());
        g.render(b);
        X(a, g);
        f && g.J(f)
    };
    P.emailLinkNewDeviceLinking = function(a, b, c, d) {
        var e = new Fj(c);
        c = e.Z.Y.get(O.PROVIDER_ID) || null;
        Jj(e, null);
        if (c) {
            var f = new Zi(lm(V(a), c), function() {
                f.m();
                d(a, b, e.toString())
            }, V(a).N(), V(a).M());
            f.render(b);
            X(a, f)
        } else S(a, b)
    };

    function wn(a, b, c, d, e) {
        var f = new Ri,
            g = new Fj(c),
            k = g.Z.Y.get(O.ne) || "",
            n = g.Z.Y.get(O.kd) || "",
            p = "1" === g.Z.Y.get(O.gd),
            m = Ij(g),
            q = g.Z.Y.get(O.PROVIDER_ID) || null;
        g = g.Xb();
        a.ce(g);
        var A = !Tl(Rl, W(a)),
            Q = d || bm(n, W(a)),
            Wa = (d = cm(n, W(a))) && d.Ba;
        q && Wa && Wa.providerId !== q && (Wa = null);
        f.render(b);
        X(a, f);
        U(a, f.ba(function() {
            var pa = G(null);
            pa = m && A || A && p ? Ff(Error("anonymous-user-not-found")) : xn(a, c).then(function(zb) { if (q && !Wa) throw Error("pending-credential-not-found"); return zb });
            var ja = null;
            return pa.then(function(zb) {
                ja =
                    zb;
                return e ? null : a.u().checkActionCode(k)
            }).then(function() { return ja })
        }, [], function(pa) { Q ? yn(a, f, Q, c, Wa, pa) : p ? (f.m(), R("differentDeviceError", a, b)) : (f.m(), R("emailLinkConfirmation", a, b, c, zn)) }, function(pa) {
            var ja = void 0;
            if (!pa || !pa.name || "cancel" != pa.name) switch (f.m(), pa && pa.message) {
                case "anonymous-user-not-found":
                    R("differentDeviceError", a, b);
                    break;
                case "anonymous-user-mismatch":
                    R("anonymousUserMismatch", a, b);
                    break;
                case "pending-credential-not-found":
                    R("emailLinkNewDeviceLinking", a, b, c, An);
                    break;
                default:
                    pa && (ja = T(pa)), S(a, b, void 0, ja)
            }
        }))
    }

    function zn(a, b, c, d) { wn(a, b, d, c, !0) }

    function An(a, b, c) { wn(a, b, c) }

    function yn(a, b, c, d, e, f) {
        var g = M(b);
        b.Lb("mdl-spinner mdl-spinner--single-color mdl-js-spinner is-active firebaseui-progress-dialog-loading-icon", (D["firebaseui.auth.soy2.strings.dialogEmailLinkProcessing"] ? D["firebaseui.auth.soy2.strings.dialogEmailLinkProcessing"](void 0, void 0) : "Signing in...").toString());
        var k = null;
        e = (f ? Bn(a, f, c, d, e) : a.signInWithEmailLink(c, d, e)).then(function(n) {
            Ul(Sl, W(a));
            Ul(Rl, W(a));
            b.fa();
            b.Lb("firebaseui-icon-done", (D["firebaseui.auth.soy2.strings.dialogEmailLinkVerified"] ?
                D["firebaseui.auth.soy2.strings.dialogEmailLinkVerified"](void 0, void 0) : "Signed in!").toString());
            k = setTimeout(function() {
                b.fa();
                Sm(a, b, n, !0)
            }, 1E3);
            U(a, function() {
                b && (b.fa(), b.m());
                clearTimeout(k)
            })
        }, function(n) {
            b.fa();
            b.m();
            if (!n.name || "cancel" != n.name) {
                n = Rm(n);
                var p = T(n);
                "auth/email-already-in-use" == n.code || "auth/credential-already-in-use" == n.code ? (Ul(Sl, W(a)), Ul(Rl, W(a))) : "auth/invalid-email" == n.code ? (p = (D["firebaseui.auth.soy2.strings.errorMismatchingEmail"] ? D["firebaseui.auth.soy2.strings.errorMismatchingEmail"](void 0,
                    void 0) : "The email provided does not match the current sign-in session.").toString(), R("emailLinkConfirmation", a, g, d, zn, null, p)) : S(a, g, c, p)
            }
        });
        U(a, e)
    }
    P.emailLinkSignInCallback = wn;

    function Cn(a, b, c, d) {
        var e = M(b);
        hn(a, b, c, function() { S(a, e, c) }, function(f) {
            if (!f.name || "cancel" != f.name) {
                var g = T(f);
                f && "auth/network-request-failed" == f.code ? b.J(g) : (b.m(), S(a, e, c, g))
            }
        }, d)
    }
    P.emailLinkSignInLinking = function(a, b, c) {
        var d = Xl(W(a));
        Yl(W(a));
        if (d) {
            var e = d.Ba.providerId,
                f = new Yi(c, lm(V(a), e), function() { Cn(a, f, c, d) }, V(a).N(), V(a).M());
            f.render(b);
            X(a, f)
        } else S(a, b)
    };
    P.emailLinkSignInSent = function(a, b, c, d, e) {
        var f = new $i(c, function() {
            f.m();
            R("emailNotReceived", a, b, c, d, e)
        }, function() {
            f.m();
            d()
        }, V(a).N(), V(a).M());
        f.render(b);
        X(a, f)
    };
    P.emailMismatch = function(a, b, c) {
        var d = Xl(W(a));
        if (d) {
            var e = new aj(c.user.email, d.getEmail(), function() {
                var f = e;
                Yl(W(a));
                Sm(a, f, c)
            }, function() {
                var f = c.credential.providerId,
                    g = M(e);
                e.m();
                d.Ba ? R("federatedLinking", a, g, d.getEmail(), f) : R("federatedSignIn", a, g, d.getEmail(), f)
            }, V(a).N(), V(a).M());
            e.render(b);
            X(a, e)
        } else S(a, b)
    };
    P.emailNotReceived = function(a, b, c, d, e) {
        var f = new bj(function() {
            hn(a, f, c, d, function(g) {
                g = T(g);
                f.J(g)
            }, e)
        }, function() {
            f.m();
            S(a, b, c)
        }, V(a).N(), V(a).M());
        f.render(b);
        X(a, f)
    };
    P.federatedLinking = function(a, b, c, d, e) {
        var f = Xl(W(a));
        if (f && f.Ba) {
            var g = new cj(c, lm(V(a), d), function() { Ym(a, g, d, c) }, V(a).N(), V(a).M());
            g.render(b);
            X(a, g);
            e && g.J(e)
        } else S(a, b)
    };
    P.federatedRedirect = function(a, b, c) {
        var d = new Ri;
        d.render(b);
        X(a, d);
        b = km(V(a))[0];
        Ym(a, d, b, c)
    };
    P.federatedSignIn = function(a, b, c, d, e) {
        var f = new cj(c, lm(V(a), d), function() { Ym(a, f, d, c) }, V(a).N(), V(a).M());
        f.render(b);
        X(a, f);
        e && f.J(e)
    };

    function Dn(a, b, c, d) {
        var e = b.td();
        e ? U(a, b.ba(u(a.yh, a), [c, e], function(f) {
            f = f.user.linkWithCredential(d).then(function(g) { return Sm(a, b, { user: g.user, credential: d, operationType: g.operationType, additionalUserInfo: g.additionalUserInfo }) });
            U(a, f);
            return f
        }, function(f) {
            if (!f.name || "cancel" != f.name) switch (f.code) {
                case "auth/wrong-password":
                    H(b.Na(), !1);
                    qg(b.Cd(), T(f));
                    break;
                case "auth/too-many-requests":
                    b.J(T(f));
                    break;
                default:
                    hl("signInWithEmailAndPassword: " + f.message, void 0), b.J(T(f))
            }
        })) : b.Na().focus()
    }
    P.passwordLinking = function(a, b, c) {
        var d = Xl(W(a));
        Yl(W(a));
        var e = d && d.Ba;
        if (e) {
            var f = new pj(c, function() { Dn(a, f, c, e) }, function() {
                f.m();
                R("passwordRecovery", a, b, c)
            }, V(a).N(), V(a).M());
            f.render(b);
            X(a, f)
        } else S(a, b)
    };

    function En(a, b) {
        var c = b.ta();
        if (c) {
            var d = M(b);
            U(a, b.ba(u(a.u().sendPasswordResetEmail, a.u()), [c], function() {
                b.m();
                var e = new dj(c, function() {
                    e.m();
                    S(a, d)
                }, V(a).N(), V(a).M());
                e.render(d);
                X(a, e)
            }, function(e) {
                H(b.D(), !1);
                qg(b.bb(), T(e))
            }))
        } else b.D().focus()
    }
    P.passwordRecovery = function(a, b, c, d, e) {
        var f = new qj(function() { En(a, f) }, d ? void 0 : function() {
            f.m();
            S(a, b)
        }, c, V(a).N(), V(a).M());
        f.render(b);
        X(a, f);
        e && f.J(e)
    };
    P.passwordSignIn = function(a, b, c, d) {
        var e = new sj(function() { bn(a, e) }, function() {
            var f = e.getEmail();
            e.m();
            R("passwordRecovery", a, b, f)
        }, c, V(a).N(), V(a).M(), d);
        e.render(b);
        X(a, e)
    };

    function Fn(a, b) {
        var c = Bm(V(a)),
            d = b.ta(),
            e = null;
        c && (e = b.jg());
        var f = b.sd();
        if (d) {
            if (c)
                if (e) e = ac(e);
                else { b.Wb().focus(); return }
            if (f) {
                var g = firebase.auth.EmailAuthProvider.credential(d, f);
                U(a, b.ba(u(a.zh, a), [d, f], function(k) { var n = { user: k.user, credential: g, operationType: k.operationType, additionalUserInfo: k.additionalUserInfo }; return c ? (k = k.user.updateProfile({ displayName: e }).then(function() { return Sm(a, b, n) }), U(a, k), k) : Sm(a, b, n) }, function(k) {
                    if (!k.name || "cancel" != k.name) {
                        var n = Rm(k);
                        k = T(n);
                        switch (n.code) {
                            case "auth/email-already-in-use":
                                return Gn(a,
                                    b, d, n);
                            case "auth/too-many-requests":
                                k = (D["firebaseui.auth.soy2.strings.errorTooManyRequestsCreateAccount"] ? D["firebaseui.auth.soy2.strings.errorTooManyRequestsCreateAccount"](void 0, void 0) : "Too many account requests are coming from your IP address. Try again in a few minutes.").toString();
                            case "auth/operation-not-allowed":
                            case "auth/weak-password":
                                H(b.Da(), !1);
                                qg(b.Bd(), k);
                                break;
                            default:
                                n = "setAccountInfo: " + El(n), hl(n, void 0), b.J(k)
                        }
                    }
                }))
            } else b.Da().focus()
        } else b.D().focus()
    }

    function Gn(a, b, c, d) {
        function e() {
            var g = T(d);
            H(b.D(), !1);
            qg(b.bb(), g);
            b.D().focus()
        }
        var f = a.u().fetchSignInMethodsForEmail(c).then(function(g) { g.length ? e() : (g = M(b), b.m(), R("passwordRecovery", a, g, c, !1, Ig().toString())) }, function() { e() });
        U(a, f);
        return f
    }
    P.passwordSignUp = function(a, b, c, d, e, f) {
        function g() {
            k.m();
            S(a, b)
        }
        var k = new tj(Bm(V(a)), function() { Fn(a, k) }, e ? void 0 : g, c, d, V(a).N(), V(a).M(), f);
        k.render(b);
        X(a, k)
    };

    function Hn(a, b, c, d) {
        function e(g) {
            b.Dd().focus();
            H(b.Dd(), !1);
            qg(b.Eg(), g)
        }
        var f = b.kg();
        f ? (b.Lb("mdl-spinner mdl-spinner--single-color mdl-js-spinner is-active firebaseui-progress-dialog-loading-icon", Cg().toString()), U(a, b.ba(u(d.confirm, d), [f], function(g) {
            b.fa();
            b.Lb("firebaseui-icon-done", (D["firebaseui.auth.soy2.strings.dialogCodeVerified"] ? D["firebaseui.auth.soy2.strings.dialogCodeVerified"](void 0, void 0) : "Verified!").toString());
            var k = setTimeout(function() {
                b.fa();
                b.m();
                var n = {
                    user: In(a).currentUser,
                    credential: null,
                    operationType: g.operationType,
                    additionalUserInfo: g.additionalUserInfo
                };
                Sm(a, b, n, !0)
            }, 1E3);
            U(a, function() {
                b && b.fa();
                clearTimeout(k)
            })
        }, function(g) {
            if (g.name && "cancel" == g.name) b.fa();
            else {
                var k = Rm(g);
                g = T(k);
                switch (k.code) {
                    case "auth/credential-already-in-use":
                        b.fa();
                        break;
                    case "auth/code-expired":
                        k = M(b);
                        b.fa();
                        b.m();
                        R("phoneSignInStart", a, k, c, g);
                        break;
                    case "auth/missing-verification-code":
                    case "auth/invalid-verification-code":
                        b.fa();
                        e(g);
                        break;
                    default:
                        b.fa(), b.J(g)
                }
            }
        }))) : e(Eg().toString())
    }
    P.phoneSignInFinish = function(a, b, c, d, e, f) {
        var g = new uj(function() {
            g.m();
            R("phoneSignInStart", a, b, c)
        }, function() { Hn(a, g, c, e) }, function() {
            g.m();
            S(a, b)
        }, function() {
            g.m();
            R("phoneSignInStart", a, b, c)
        }, Ih(c), d, V(a).N(), V(a).M());
        g.render(b);
        X(a, g);
        f && g.J(f)
    };

    function Jn(a, b, c, d) {
        try { var e = b.Fg(Pm) } catch (f) { return }
        e ? Nm ? (b.Lb("mdl-spinner mdl-spinner--single-color mdl-js-spinner is-active firebaseui-progress-dialog-loading-icon", Cg().toString()), U(a, b.ba(u(a.Eh, a), [Ih(e), c], function(f) {
            var g = M(b);
            b.Lb("firebaseui-icon-done", (D["firebaseui.auth.soy2.strings.dialogCodeSent"] ? D["firebaseui.auth.soy2.strings.dialogCodeSent"](void 0, void 0) : "Code sent!").toString());
            var k = setTimeout(function() {
                b.fa();
                b.m();
                R("phoneSignInFinish", a, g, e, 15, f)
            }, 1E3);
            U(a, function() {
                b &&
                    b.fa();
                clearTimeout(k)
            })
        }, function(f) {
            b.fa();
            if (!f.name || "cancel" != f.name) {
                grecaptcha.reset(Qm);
                Nm = null;
                var g = f && f.message || "";
                if (f.code) switch (f.code) {
                    case "auth/too-many-requests":
                        g = (D["firebaseui.auth.soy2.strings.errorTooManyRequestsPhoneNumber"] ? D["firebaseui.auth.soy2.strings.errorTooManyRequestsPhoneNumber"](void 0, void 0) : "This phone number has been used too many times").toString();
                        break;
                    case "auth/invalid-phone-number":
                    case "auth/missing-phone-number":
                        b.nb().focus();
                        qg(b.Me(), Dg().toString());
                        return;
                    default:
                        g = T(f)
                }
                b.J(g)
            }
        }))) : Om ? qg(b.Ed(), (D["firebaseui.auth.soy2.strings.errorMissingRecaptchaResponse"] ? D["firebaseui.auth.soy2.strings.errorMissingRecaptchaResponse"](void 0, void 0) : "Solve the reCAPTCHA").toString()) : !Om && d && b.H().click() : (b.nb().focus(), qg(b.Me(), Dg().toString()))
    }
    P.phoneSignInStart = function(a, b, c, d) {
        var e = rm(V(a)) || {};
        Nm = null;
        Om = !(e && "invisible" === e.size);
        var f = dn(a),
            g = ym(V(a)),
            k = f ? xm(V(a)) : null;
        g = c && c.Ac || g && g.h || null;
        c = c && c.Va || k;
        (k = zm(V(a))) && Sd(k);
        Pm = k ? new Nd(zm(V(a))) : Td;
        var n = new vj(function(m) { Jn(a, n, p, !(!m || !m.keyCode)) }, Om, f ? null : function() {
            p.clear();
            n.m();
            S(a, b)
        }, V(a).N(), V(a).M(), f, Pm, g, c);
        n.render(b);
        X(a, n);
        d && n.J(d);
        e.callback = function(m) {
            n.Ed() && pg(n.Ed());
            Nm = m;
            Om || Jn(a, n, p)
        };
        e["expired-callback"] = function() { Nm = null };
        var p = new firebase.auth.RecaptchaVerifier(Om ?
            n.Gg() : n.H(), e, In(a).app);
        U(a, n.ba(u(p.render, p), [], function(m) { Qm = m }, function(m) { m.name && "cancel" == m.name || (m = T(m), n.m(), S(a, b, void 0, m)) }))
    };
    P.prefilledEmailSignIn = function(a, b, c) {
        var d = new Ri;
        d.render(b);
        X(a, d);
        U(a, d.ba(u(a.u().fetchSignInMethodsForEmail, a.u()), [c], function(e) {
            d.m();
            var f = !(!cn(a) || !Kn(a));
            gn(a, b, e, c, void 0, f)
        }, function(e) {
            e = T(e);
            d.m();
            R("signIn", a, b, c, e)
        }))
    };
    P.providerSignIn = function(a, b, c, d) {
        var e = new xj(function(f) {
            f == firebase.auth.EmailAuthProvider.PROVIDER_ID ? (e.m(), en(a, b, d)) : f == firebase.auth.PhoneAuthProvider.PROVIDER_ID ? (e.m(), R("phoneSignInStart", a, b)) : "anonymous" == f ? $m(a, e) : Ym(a, e, f, d);
            Y(a);
            a.Fd.cancel()
        }, mm(V(a)), V(a).N(), V(a).M());
        e.render(b);
        X(a, e);
        c && e.J(c);
        Ln(a)
    };
    P.sendEmailLinkForSignIn = function(a, b, c, d) {
        var e = new Si;
        e.render(b);
        X(a, e);
        hn(a, e, c, d, function(f) {
            e.m();
            f = T(f);
            R("signIn", a, b, c, f)
        })
    };
    P.signIn = function(a, b, c, d) {
        var e = cn(a),
            f = new Bj(function() {
                var g = f,
                    k = g.ta() || "";
                k && fn(a, g, k)
            }, e ? null : function() {
                f.m();
                S(a, b, c)
            }, c, V(a).N(), V(a).M(), e);
        f.render(b);
        X(a, f);
        d && f.J(d)
    };
    P.unsupportedProvider = function(a, b, c) {
        var d = new Ej(c, function() {
            d.m();
            R("passwordRecovery", a, b, c)
        }, function() {
            d.m();
            S(a, b, c)
        }, V(a).N(), V(a).M());
        d.render(b);
        X(a, d)
    };

    function Mn(a, b) {
        this.Ee = !1;
        var c = Nn(b);
        if (On[c]) throw Error('An AuthUI instance already exists for the key "' + c + '"');
        On[c] = this;
        this.Aa = a;
        this.gf = null;
        this.Nd = !1;
        Pn(this.Aa);
        this.Ia = firebase.initializeApp({ apiKey: a.app.options.apiKey, authDomain: a.app.options.authDomain }, a.app.name + "-firebaseui-temp").auth();
        if (a = a.emulatorConfig) c = a.port, this.Ia.useEmulator(a.protocol + "://" + a.host + (null === c ? "" : ":" + c), a.options);
        Pn(this.Ia);
        this.Ia.setPersistence && this.Ia.setPersistence(firebase.auth.Auth.Persistence.SESSION);
        this.Zf = b;
        this.o = new fm;
        this.L = this.dd = this.ob = this.tc = this.bd = null;
        this.eb = [];
        this.qe = !1;
        this.Fd = Lk.Ad();
        this.ab = this.kc = null;
        this.Ff = this.ac = !1
    }

    function Pn(a) { a && a.INTERNAL && a.INTERNAL.logFramework && a.INTERNAL.logFramework("FirebaseUI-web") }
    var On = {};

    function Nn(a) { return a || "[DEFAULT]" }
    Mn.prototype.getRedirectResult = function() {
        Y(this);
        if (!this.ob) {
            var a = this;
            this.ob = Qn(this, function(b) { return b && !Xl(W(a)) ? G(In(a).getRedirectResult().then(function(c) { return c }, function(c) { if (c && "auth/email-already-in-use" == c.code && c.email && c.credential) throw c; return Rn(a, c) })) : G(a.u().getRedirectResult().then(function(c) { return gm(V(a)) && !c.user && a.ab && !a.ab.isAnonymous ? In(a).getRedirectResult() : c })) })
        }
        return this.ob
    };

    function X(a, b) {
        Y(a);
        a.L = b
    }
    var Sn = null;
    h = Mn.prototype;
    h.u = function() { Y(this); return this.Ia };

    function In(a) { Y(a); return a.Aa }

    function W(a) { Y(a); return a.Zf }

    function Kn(a) { Y(a); return a.bd ? a.bd.emailHint : void 0 }
    h.Ve = function() { Y(this); return !!$l(W(this)) || Tn(rk()) };

    function Tn(a) { a = new Fj(a); return "signIn" === (a.Z.Y.get(O.Sf) || null) && !!a.Z.Y.get(O.ne) }
    h.start = function(a, b) { Un(this, a, b) };

    function Un(a, b, c, d) {
        Y(a);
        "undefined" !== typeof a.Aa.languageCode && (a.gf = a.Aa.languageCode);
        var e = "en".replace(/_/g, "-");
        a.Aa.languageCode = e;
        a.Ia.languageCode = e;
        a.Nd = !0;
        "undefined" !== typeof a.Aa.tenantId && (a.Ia.tenantId = a.Aa.tenantId);
        a.Kb(c);
        a.bd = d || null;
        var f = r.document;
        a.kc ? a.kc.then(function() { "complete" == f.readyState ? Vn(a, b) : Me(window, "load", function() { Vn(a, b) }) }) : "complete" == f.readyState ? Vn(a, b) : Me(window, "load", function() { Vn(a, b) })
    }

    function Vn(a, b) {
        var c = qk(b, "Could not find the FirebaseUI widget element on the page.");
        c.setAttribute("lang", "en".replace(/_/g, "-"));
        if (Sn) {
            var d = Sn;
            Y(d);
            Xl(W(d)) && tl("UI Widget is already rendered on the page and is pending some user interaction. Only one widget instance can be rendered per page. The previous instance has been automatically reset.");
            Sn.reset()
        }
        Sn = a;
        a.dd = c;
        Wn(a, c);
        if (Al(new Bl) && Al(new Cl)) {
            b = qk(b, "Could not find the FirebaseUI widget element on the page.");
            c = rk();
            d = Lj(V(a).o, "queryParameterForSignInSuccessUrl");
            c = (c = qc(c, d)) ? xb(Cb(c) || Fb) : null;
            a: {
                d = rk();
                var e = Am(V(a));d = qc(d, e) || "";
                for (f in Mm)
                    if (Mm[f].toLowerCase() == d.toLowerCase()) { var f = Mm[f]; break a }
                f = "callback"
            }
            switch (f) {
                case "callback":
                    c && (f = W(a), Vl(Ql, c, f));
                    a.Ve() ? R("callback", a, b) : S(a, b, Kn(a));
                    break;
                case "resetPassword":
                    R("passwordReset", a, b, jn(), kn());
                    break;
                case "recoverEmail":
                    R("emailChangeRevocation", a, b, jn());
                    break;
                case "revertSecondFactorAddition":
                    R("revertSecondFactorAddition", a, b, jn());
                    break;
                case "verifyEmail":
                    R("emailVerification", a, b, jn(),
                        kn());
                    break;
                case "verifyAndChangeEmail":
                    R("verifyAndChangeEmail", a, b, jn(), kn());
                    break;
                case "signIn":
                    R("emailLinkSignInCallback", a, b, rk());
                    Xn();
                    break;
                case "select":
                    c && (f = W(a), Vl(Ql, c, f));
                    S(a, b);
                    break;
                default:
                    throw Error("Unhandled widget operation.");
            }
            b = V(a);
            (b = Jm(b).uiShown || null) && b()
        } else b = qk(b, "Could not find the FirebaseUI widget element on the page."), f = (D["firebaseui.auth.soy2.strings.errorNoWebStorage"] ? D["firebaseui.auth.soy2.strings.errorNoWebStorage"](void 0, void 0) : "The browser you are using does not support Web Storage. Please try again in a different browser.").toString(),
            f = new oj(f), f.render(b), X(a, f);
        b = a.L && "blank" == a.L.Vc && Fm(V(a));
        $l(W(a)) && !b && (b = $l(W(a)), a.ce(b.Xb()), Ul(Pl, W(a)))
    }

    function Qn(a, b) {
        if (a.ac) return b(Yn(a));
        U(a, function() { a.ac = !1 });
        if (gm(V(a))) {
            var c = new F(function(d) {
                U(a, a.Aa.onAuthStateChanged(function(e) {
                    a.ab = e;
                    a.ac || (a.ac = !0, d(b(Yn(a))))
                }))
            });
            U(a, c);
            return c
        }
        a.ac = !0;
        return b(null)
    }

    function Yn(a) { Y(a); return gm(V(a)) && a.ab && a.ab.isAnonymous ? a.ab : null }

    function U(a, b) { Y(a); if (b) { a.eb.push(b); var c = function() { Qa(a.eb, function(d) { return d == b }) }; "function" != typeof b && b.then(c, c) } }
    h.ug = function() {
        Y(this);
        this.qe = !0
    };

    function Zn(a) {
        Y(a);
        var b;
        (b = a.qe) || (a = V(a), a = wm(a, firebase.auth.GoogleAuthProvider.PROVIDER_ID), b = !(!a || "select_account" !== a.prompt));
        return b
    }

    function Tm(a) { "undefined" !== typeof a.Aa.languageCode && a.Nd && (a.Nd = !1, a.Aa.languageCode = a.gf) }
    h.ce = function(a) {
        this.Aa.tenantId = a;
        this.Ia.tenantId = a
    };
    h.Xb = function() { return this.Ia.tenantId || null };
    h.reset = function() {
        Y(this);
        var a = this;
        this.dd && this.dd.removeAttribute("lang");
        this.tc && this.tc.unregister();
        Tm(this);
        this.bd = null;
        Xn();
        Ul(Pl, W(this));
        Y(this);
        this.Fd.cancel();
        this.ob = G({ user: null, credential: null });
        Sn == this && (Sn = null);
        this.dd = null;
        for (var b = 0; b < this.eb.length; b++)
            if ("function" == typeof this.eb[b]) this.eb[b]();
            else this.eb[b].cancel && this.eb[b].cancel();
        this.eb = [];
        Yl(W(this));
        this.L && (this.L.m(), this.L = null);
        this.Bc = null;
        this.Ia && (this.kc = vn(this).then(function() { a.kc = null }, function() {
            a.kc =
                null
        }))
    };

    function Wn(a, b) {
        a.Bc = null;
        a.tc = new Yh(b);
        a.tc.register();
        Le(a.tc, "pageEnter", function(c) {
            c = c && c.pageId;
            if (a.Bc != c) {
                var d = V(a);
                (d = Jm(d).uiChanged || null) && d(a.Bc, c);
                a.Bc = c
            }
        })
    }
    h.Kb = function(a) {
        Y(this);
        this.o.Kb(a);
        !this.Ff && Im(V(this)) && (tl("signInSuccess callback is deprecated. Please use signInSuccessWithAuthResult callback instead."), this.Ff = !0)
    };

    function V(a) { Y(a); return a.o }
    h.signIn = function() {
        Y(this);
        var a = V(this),
            b = Lj(a.o, "widgetUrl");
        a = Am(a);
        var c = b.search(pc);
        for (var d = 0, e, f = []; 0 <= (e = oc(b, d, a, c));) f.push(b.substring(d, e)), d = Math.min(b.indexOf("&", e) + 1 || c, c);
        f.push(b.substr(d));
        b = f.join("").replace(rc, "$1");
        c = "=" + encodeURIComponent("select");
        (a += c) ? (c = b.indexOf("#"), 0 > c && (c = b.length), d = b.indexOf("?"), 0 > d || d > c ? (d = c, e = "") : e = b.substring(d + 1, c), b = [b.substr(0, d), e, b.substr(c)], c = b[1], b[1] = a ? c ? c + "&" + a : a : c, c = b[0] + (b[1] ? "?" + b[1] : "") + b[2]) : c = b;
        V(this).o.get("popupMode") ? (a =
            (window.screen.availHeight - 600) / 2, b = (window.screen.availWidth - 500) / 2, c = c || "about:blank", a = { width: 500, height: 600, top: 0 < a ? a : 0, left: 0 < b ? b : 0, location: !0, resizable: !0, statusbar: !0, toolbar: !1 }, a.target = a.target || c.target || "google_popup", a.width = a.width || 690, a.height = a.height || 500, (a = qe(c, a)) && a.focus()) : Zb(window.location, c)
    };

    function Y(a) { if (a.Ee) throw Error("AuthUI instance is deleted!"); }
    h.delete = function() {
        var a = this;
        Y(this);
        return this.Ia.app.delete().then(function() {
            var b = Nn(W(a));
            delete On[b];
            a.reset();
            a.Ee = !0
        })
    };

    function Ln(a) { Y(a); try { a.Fd.show(om(V(a)), Zn(a)).then(function(b) { return a.L ? an(a, a.L, b) : !1 }) } catch (b) {} }
    h.sendSignInLinkToEmail = function(a, b) {
        Y(this);
        var c = this,
            d = tk();
        if (!Cm(V(this))) return Ff(Error("Email link sign-in should be enabled to trigger email sending."));
        var e = Em(V(this)),
            f = new Fj(e.url);
        Gj(f, d);
        b && b.Ba && (dm(d, b, W(this)), Jj(f, b.Ba.providerId));
        Hj(f, Dm(V(this)));
        return Qn(this, function(g) {
            g && ((g = g.uid) ? Fc(f.Z, O.fd, g) : f.Z.removeParameter(O.fd));
            e.url = f.toString();
            return c.u().sendSignInLinkToEmail(a, e)
        }).then(function() {
            var g = W(c),
                k = {};
            k.email = a;
            Vl(Rl, lk(d, JSON.stringify(k)), g)
        }, function(g) {
            Ul(Sl,
                W(c));
            Ul(Rl, W(c));
            throw g;
        })
    };

    function xn(a, b) {
        var c = Ij(new Fj(b));
        if (!c) return G(null);
        b = new F(function(d, e) {
            var f = In(a).onAuthStateChanged(function(g) {
                f();
                g && g.isAnonymous && g.uid === c ? d(g) : g && g.isAnonymous && g.uid !== c ? e(Error("anonymous-user-mismatch")) : e(Error("anonymous-user-not-found"))
            });
            U(a, f)
        });
        U(a, b);
        return b
    }

    function Bn(a, b, c, d, e) {
        Y(a);
        var f = e || null,
            g = firebase.auth.EmailAuthProvider.credentialWithLink(c, d);
        c = f ? a.u().signInWithEmailLink(c, d).then(function(k) { return k.user.linkWithCredential(f) }).then(function() { return vn(a) }).then(function() { return Rn(a, { code: "auth/email-already-in-use" }, f) }) : a.u().fetchSignInMethodsForEmail(c).then(function(k) { return k.length ? Rn(a, { code: "auth/email-already-in-use" }, g) : b.linkWithCredential(g) });
        U(a, c);
        return c
    }
    h.signInWithEmailLink = function(a, b, c) {
        Y(this);
        var d = c || null,
            e, f = this;
        a = this.u().signInWithEmailLink(a, b).then(function(g) { e = { user: g.user, credential: null, operationType: g.operationType, additionalUserInfo: g.additionalUserInfo }; if (d) return g.user.linkWithCredential(d).then(function(k) { e = { user: k.user, credential: d, operationType: e.operationType, additionalUserInfo: k.additionalUserInfo } }) }).then(function() { vn(f) }).then(function() { return In(f).updateCurrentUser(e.user) }).then(function() {
            e.user = In(f).currentUser;
            return e
        });
        U(this, a);
        return a
    };

    function Xn() {
        var a = rk();
        if (Tn(a)) {
            a = new Fj(a);
            for (var b in O) O.hasOwnProperty(b) && a.Z.removeParameter(O[b]);
            b = { state: "signIn", mode: "emailLink", operation: "clear" };
            var c = r.document.title;
            r.history && r.history.replaceState && r.history.replaceState(b, c, a.toString())
        }
    }
    h.Dh = function(a, b) { Y(this); var c = this; return this.u().signInWithEmailAndPassword(a, b).then(function(d) { return Qn(c, function(e) { return e ? vn(c).then(function() { return Rn(c, { code: "auth/email-already-in-use" }, firebase.auth.EmailAuthProvider.credential(a, b)) }) : d }) }) };
    h.zh = function(a, b) { Y(this); var c = this; return Qn(this, function(d) { if (d) { var e = firebase.auth.EmailAuthProvider.credential(a, b); return d.linkWithCredential(e) } return c.u().createUserWithEmailAndPassword(a, b) }) };
    h.Ch = function(a) { Y(this); var b = this; return Qn(this, function(c) { return c ? c.linkWithCredential(a).then(function(d) { return d }, function(d) { if (d && "auth/email-already-in-use" == d.code && d.email && d.credential) throw d; return Rn(b, d, a) }) : b.u().signInWithCredential(a) }) };

    function Zm(a, b) { Y(a); return Qn(a, function(c) { return c && !Xl(W(a)) ? c.linkWithPopup(b).then(function(d) { return d }, function(d) { if (d && "auth/email-already-in-use" == d.code && d.email && d.credential) throw d; return Rn(a, d) }) : a.u().signInWithPopup(b) }) }
    h.Fh = function(a) {
        Y(this);
        var b = this,
            c = this.ob;
        this.ob = null;
        return Qn(this, function(d) { return d && !Xl(W(b)) ? d.linkWithRedirect(a) : b.u().signInWithRedirect(a) }).then(function() {}, function(d) { b.ob = c; throw d; })
    };
    h.Eh = function(a, b) { Y(this); var c = this; return Qn(this, function(d) { return d ? d.linkWithPhoneNumber(a, b).then(function(e) { return new wl(e, function(f) { if ("auth/credential-already-in-use" == f.code) return Rn(c, f); throw f; }) }) : In(c).signInWithPhoneNumber(a, b).then(function(e) { return new wl(e) }) }) };
    h.Bh = function() { Y(this); return In(this).signInAnonymously() };

    function Vm(a, b) {
        Y(a);
        return Qn(a, function(c) {
            if (a.ab && !a.ab.isAnonymous && gm(V(a)) && !a.u().currentUser) return vn(a).then(function() { "password" == b.credential.providerId && (b.credential = null); return b });
            if (c) return vn(a).then(function() { return c.linkWithCredential(b.credential) }).then(function(d) {
                b.user = d.user;
                b.credential = d.credential;
                b.operationType = d.operationType;
                b.additionalUserInfo = d.additionalUserInfo;
                return b
            }, function(d) {
                if (d && "auth/email-already-in-use" == d.code && d.email && d.credential) throw d;
                return Rn(a, d, b.credential)
            });
            if (!b.user) throw Error('Internal error: An incompatible or outdated version of "firebase.js" may be used.');
            return vn(a).then(function() { return In(a).updateCurrentUser(b.user) }).then(function() {
                b.user = In(a).currentUser;
                b.operationType = "signIn";
                b.credential && b.credential.providerId && "password" == b.credential.providerId && (b.credential = null);
                return b
            })
        })
    }
    h.yh = function(a, b) { Y(this); return this.u().signInWithEmailAndPassword(a, b) };

    function vn(a) { Y(a); return a.u().signOut() }

    function Rn(a, b, c) { Y(a); if (b && b.code && ("auth/email-already-in-use" == b.code || "auth/credential-already-in-use" == b.code)) { var d = hm(V(a)); return G().then(function() { return d(new em("anonymous-upgrade-merge-conflict", null, c || b.credential)) }).then(function() { a.L && (a.L.m(), a.L = null); throw b; }) } return Ff(b) };

    function $n(a) {
        this.o = new Kj;
        this.o.define("authDomain");
        this.o.define("displayMode", "optionFirst");
        this.o.define("tenants");
        this.o.define("callbacks");
        this.o.define("tosUrl");
        this.o.define("privacyPolicyUrl");
        this.Kb(a)
    }
    $n.prototype.Kb = function(a) {
        for (var b in a)
            if (a.hasOwnProperty(b)) try { this.o.update(b, a[b]) } catch (c) { hl('Invalid config: "' + b + '"', void 0) }
    };

    function ao(a) {
        a = a.o.get("displayMode");
        for (var b in bo)
            if (bo[b] === a) return bo[b];
        return "optionFirst"
    }
    $n.prototype.N = function() {
        var a = this.o.get("tosUrl") || null,
            b = this.o.get("privacyPolicyUrl") || null;
        a && !b && tl("Privacy Policy URL is missing, the link will not be displayed.");
        if (a && b) { if ("function" === typeof a) return a; if ("string" === typeof a) return function() { pk(a) } }
        return null
    };
    $n.prototype.M = function() {
        var a = this.o.get("tosUrl") || null,
            b = this.o.get("privacyPolicyUrl") || null;
        b && !a && tl("Terms of Service URL is missing, the link will not be displayed.");
        if (a && b) { if ("function" === typeof b) return b; if ("string" === typeof b) return function() { pk(b) } }
        return null
    };

    function co(a, b) { a = a.o.get("tenants"); if (!a || !a.hasOwnProperty(b) && !a.hasOwnProperty("*")) throw Error("Invalid tenant configuration!"); }

    function eo(a, b, c) {
        a = a.o.get("tenants");
        if (!a) throw Error("Invalid tenant configuration!");
        var d = [];
        a = a[b] || a["*"];
        if (!a) return hl("Invalid tenant configuration: " + (b + " is not configured!"), void 0), d;
        b = a.signInOptions;
        if (!b) throw Error("Invalid tenant configuration: signInOptions are invalid!");
        b.forEach(function(e) {
            if ("string" === typeof e) d.push(e);
            else if ("string" === typeof e.provider) {
                var f = e.hd;
                f && c ? (f instanceof RegExp ? f : new RegExp("@" + f.replace(".", "\\.") + "$")).test(c) && d.push(e.provider) : d.push(e.provider)
            } else e =
                "Invalid tenant configuration: signInOption " + (JSON.stringify(e) + " is invalid!"), hl(e, void 0)
        });
        return d
    }

    function fo(a, b, c) {
        a = go(a, b);
        (b = a.signInOptions) && c && (b = b.filter(function(d) { return "string" === typeof d ? c.includes(d) : c.includes(d.provider) }), a.signInOptions = b);
        return a
    }

    function go(a, b) {
        var c = ho;
        var d = void 0 === d ? {} : d;
        co(a, b);
        a = a.o.get("tenants");
        return uk(a[b] || a["*"], c, d)
    }
    var ho = ["immediateFederatedRedirect", "privacyPolicyUrl", "signInFlow", "signInOptions", "tosUrl"],
        bo = { Wh: "optionFirst", Uh: "identifierFirst" };

    function io(a, b) {
        var c = this;
        this.jb = qk(a);
        this.X = {};
        Object.keys(b).forEach(function(d) { c.X[d] = new $n(b[d]) });
        this.We = this.L = this.Ha = this.ya = this.ub = this.Xa = null;
        Object.defineProperty(this, "languageCode", { get: function() { return this.We }, set: function(d) { this.We = d || null }, enumerable: !1 })
    }
    h = io.prototype;
    h.qh = function(a, b) {
        var c = this;
        jo(this);
        var d = a.apiKey;
        return new F(function(e, f) {
            if (c.X.hasOwnProperty(d)) {
                var g = Jm(c.X[d]).selectTenantUiHidden || null;
                if ("optionFirst" === ao(c.X[d])) {
                    var k = [];
                    b.forEach(function(m) {
                        m = m || "_";
                        var q = c.X[d].o.get("tenants");
                        if (!q) throw Error("Invalid tenant configuration!");
                        (q = q[m] || q["*"]) ? m = { tenantId: "_" !== m ? m : null, va: q.fullLabel || null, displayName: q.displayName, $b: q.iconUrl, Rb: q.buttonColor }: (hl("Invalid tenant configuration: " + (m + " is not configured!"), void 0), m = null);
                        m && k.push(m)
                    });
                    var n = function(m) {
                        m = { tenantId: m, providerIds: eo(c.X[d], m || "_") };
                        e(m)
                    };
                    if (1 === k.length) { n(k[0].tenantId); return }
                    c.L = new zj(function(m) {
                        jo(c);
                        g && g();
                        n(m)
                    }, k, c.X[d].N(), c.X[d].M())
                } else c.L = new wj(function() {
                    var m = c.L.ta();
                    if (m) {
                        for (var q = 0; q < b.length; q++) {
                            var A = eo(c.X[d], b[q] || "_", m);
                            if (0 !== A.length) {
                                m = { tenantId: b[q], providerIds: A, email: m };
                                jo(c);
                                g && g();
                                e(m);
                                return
                            }
                        }
                        c.L.J(Jg({ code: "no-matching-tenant-for-email" }).toString())
                    }
                }, c.X[d].N(), c.X[d].M());
                c.L.render(c.jb);
                (f = Jm(c.X[d]).selectTenantUiShown ||
                    null) && f()
            } else {
                var p = Error("Invalid project configuration: API key is invalid!");
                p.code = "invalid-configuration";
                c.handleError(p);
                f(p)
            }
        })
    };
    h.u = function(a, b) {
        if (!this.X.hasOwnProperty(a)) throw Error("Invalid project configuration: API key is invalid!");
        var c = b || void 0;
        co(this.X[a], b || "_");
        try { this.ub = firebase.app(c).auth() } catch (e) {
            var d = this.X[a].o.get("authDomain");
            if (!d) throw Error("Invalid project configuration: authDomain is required!");
            a = firebase.initializeApp({ apiKey: a, authDomain: d }, c);
            a.auth().tenantId = b;
            this.ub = a.auth()
        }
        return this.ub
    };
    h.Ah = function(a, b) {
        var c = this;
        return new F(function(d, e) {
            function f(q, A) {
                c.Xa = new Mn(a);
                Un(c.Xa, c.jb, q, A)
            }
            var g = a.app.options.apiKey;
            c.X.hasOwnProperty(g) || e(Error("Invalid project configuration: API key is invalid!"));
            var k = fo(c.X[g], a.tenantId || "_", b && b.providerIds);
            jo(c);
            e = { signInSuccessWithAuthResult: function(q) { d(q); return !1 } };
            var n = Jm(c.X[g]).signInUiShown || null,
                p = !1;
            e.uiChanged = function(q, A) {
                null === q && "callback" === A ? ((q = ge("firebaseui-id-page-callback", c.jb)) && pg(q), c.ya = new Cj, c.ya.render(c.jb)) :
                    p || null === q && "spinner" === A || "blank" === A || (c.ya && (c.ya.m(), c.ya = null), p = !0, n && n(a.tenantId))
            };
            k.callbacks = e;
            k.credentialHelper = "none";
            var m;
            b && b.email && (m = { emailHint: b.email });
            c.Xa ? c.Xa.delete().then(function() { f(k, m) }) : f(k, m)
        })
    };
    h.reset = function() {
        var a = this;
        return G().then(function() { a.Xa && a.Xa.delete() }).then(function() {
            a.Xa = null;
            jo(a)
        })
    };
    h.uh = function() {
        var a = this;
        this.ya || this.Ha || (this.Ha = window.setTimeout(function() {
            jo(a);
            a.ya = new Cj;
            a.L = a.ya;
            a.ya.render(a.jb);
            a.Ha = null
        }, 500))
    };
    h.Re = function() {
        window.clearTimeout(this.Ha);
        this.Ha = null;
        this.ya && (this.ya.m(), this.ya = null)
    };
    h.mg = function() {
        jo(this);
        this.L = new jj;
        this.L.render(this.jb);
        return G()
    };

    function jo(a) {
        a.Xa && a.Xa.reset();
        a.Re();
        a.L && a.L.m()
    }
    h.handleError = function(a) {
        var b = this,
            c = Jg({ code: a.code }).toString() || a.message;
        jo(this);
        var d;
        a.retry && "function" === typeof a.retry && (d = function() {
            b.reset();
            a.retry()
        });
        this.L = new nj(c, d);
        this.L.render(this.jb)
    };
    h.gh = function(a) {
        var b = this;
        return G().then(function() {
            var c = b.ub && b.ub.app.options.apiKey;
            if (!b.X.hasOwnProperty(c)) throw Error("Invalid project configuration: API key is invalid!");
            co(b.X[c], a.tenantId || "_");
            if (!b.ub.currentUser || b.ub.currentUser.uid !== a.uid) throw Error("The user being processed does not match the signed in user!");
            return (c = Jm(b.X[c]).beforeSignInSuccess || null) ? c(a) : a
        }).then(function(c) { if (c.uid !== a.uid) throw Error("User with mismatching UID returned."); return c })
    };
    w("firebaseui.auth.FirebaseUiHandler", io);
    w("firebaseui.auth.FirebaseUiHandler.prototype.selectTenant", io.prototype.qh);
    w("firebaseui.auth.FirebaseUiHandler.prototype.getAuth", io.prototype.u);
    w("firebaseui.auth.FirebaseUiHandler.prototype.startSignIn", io.prototype.Ah);
    w("firebaseui.auth.FirebaseUiHandler.prototype.reset", io.prototype.reset);
    w("firebaseui.auth.FirebaseUiHandler.prototype.showProgressBar", io.prototype.uh);
    w("firebaseui.auth.FirebaseUiHandler.prototype.hideProgressBar", io.prototype.Re);
    w("firebaseui.auth.FirebaseUiHandler.prototype.completeSignOut", io.prototype.mg);
    w("firebaseui.auth.FirebaseUiHandler.prototype.handleError", io.prototype.handleError);
    w("firebaseui.auth.FirebaseUiHandler.prototype.processUser", io.prototype.gh);
    w("firebaseui.auth.AuthUI", Mn);
    w("firebaseui.auth.AuthUI.getInstance", function(a) { a = Nn(a); return On[a] ? On[a] : null });
    w("firebaseui.auth.AuthUI.prototype.disableAutoSignIn", Mn.prototype.ug);
    w("firebaseui.auth.AuthUI.prototype.start", Mn.prototype.start);
    w("firebaseui.auth.AuthUI.prototype.setConfig", Mn.prototype.Kb);
    w("firebaseui.auth.AuthUI.prototype.signIn", Mn.prototype.signIn);
    w("firebaseui.auth.AuthUI.prototype.reset", Mn.prototype.reset);
    w("firebaseui.auth.AuthUI.prototype.delete", Mn.prototype.delete);
    w("firebaseui.auth.AuthUI.prototype.isPendingRedirect", Mn.prototype.Ve);
    w("firebaseui.auth.AuthUIError", em);
    w("firebaseui.auth.AuthUIError.prototype.toJSON", em.prototype.toJSON);
    w("firebaseui.auth.CredentialHelper.ACCOUNT_CHOOSER_COM", "accountchooser.com");
    w("firebaseui.auth.CredentialHelper.GOOGLE_YOLO", "googleyolo");
    w("firebaseui.auth.CredentialHelper.NONE", "none");
    w("firebaseui.auth.AnonymousAuthProvider.PROVIDER_ID", "anonymous");
    F.prototype["catch"] = F.prototype.pc;
    F.prototype["finally"] = F.prototype.Hh;
    P.handleUnauthorizedUser = function(a, b, c, d) {
        function e() { S(a, b) }
        d === firebase.auth.EmailAuthProvider.PROVIDER_ID && (e = function() { en(a, b) });
        var f = new Dj(c || null, function() {
            f.m();
            e()
        }, tm(V(a)), um(V(a)), V(a).N(), V(a).M());
        f.render(b);
        X(a, f)
    };
    /*
       
        Copyright 2015 Google Inc. All Rights Reserved.
       
        Licensed under the Apache License, Version 2.0 (the "License");
        you may not use this file except in compliance with the License.
        You may obtain a copy of the License at
       
             http://www.apache.org/licenses/LICENSE-2.0
       
        Unless required by applicable law or agreed to in writing, software
        distributed under the License is distributed on an "AS IS" BASIS,
        WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
        See the License for the specific language governing permissions and
        limitations under the License.
       */
    var Z = { Af: function() {}, Bf: function() {}, Cf: function() {}, he: function() {}, lf: function() {}, register: function() {}, Ie: function() {} };
    Z = function() {
        function a(m, q) {
            for (var A = 0; A < n.length; A++)
                if (n[A].className === m) return "undefined" !== typeof q && (n[A] = q), n[A];
            return !1
        }

        function b(m) { m = m.getAttribute("data-upgraded"); return null === m ? [""] : m.split(",") }

        function c(m, q) { return -1 !== b(m).indexOf(q) }

        function d(m, q, A) {
            if ("CustomEvent" in window && "function" === typeof window.CustomEvent) return new CustomEvent(m, { bubbles: q, cancelable: A });
            var Q = document.createEvent("Events");
            Q.initEvent(m, q, A);
            return Q
        }

        function e(m, q) {
            if ("undefined" === typeof m && "undefined" ===
                typeof q)
                for (m = 0; m < n.length; m++) e(n[m].className, n[m].Ca);
            else {
                if ("undefined" === typeof q) {
                    var A = a(m);
                    A && (q = A.Ca)
                }
                q = document.querySelectorAll("." + q);
                for (A = 0; A < q.length; A++) f(q[A], m)
            }
        }

        function f(m, q) {
            if (!("object" === typeof m && m instanceof Element)) throw Error("Invalid argument provided to upgrade MDL element.");
            var A = d("mdl-componentupgrading", !0, !0);
            m.dispatchEvent(A);
            if (!A.defaultPrevented) {
                A = b(m);
                var Q = [];
                if (q) c(m, q) || Q.push(a(q));
                else {
                    var Wa = m.classList;
                    n.forEach(function(Qe) {
                        Wa.contains(Qe.Ca) &&
                            -1 === Q.indexOf(Qe) && !c(m, Qe.className) && Q.push(Qe)
                    })
                }
                q = 0;
                for (var pa = Q.length, ja; q < pa; q++) {
                    if (ja = Q[q]) {
                        A.push(ja.className);
                        m.setAttribute("data-upgraded", A.join(","));
                        var zb = new ja.lg(m);
                        zb.mdlComponentConfigInternal_ = ja;
                        p.push(zb);
                        for (var Kg = 0, ko = ja.rd.length; Kg < ko; Kg++) ja.rd[Kg](m);
                        ja.wb && (m[ja.className] = zb)
                    } else throw Error("Unable to find a registered component for the given class.");
                    ja = d("mdl-componentupgraded", !0, !1);
                    m.dispatchEvent(ja)
                }
            }
        }

        function g(m) {
            Array.isArray(m) || (m = m instanceof Element ? [m] : Array.prototype.slice.call(m));
            for (var q = 0, A = m.length, Q; q < A; q++) Q = m[q], Q instanceof HTMLElement && (f(Q), 0 < Q.children.length && g(Q.children))
        }

        function k(m) {
            if (m) {
                p.splice(p.indexOf(m), 1);
                var q = m.j.getAttribute("data-upgraded").split(",");
                q.splice(q.indexOf(m.mdlComponentConfigInternal_.zb), 1);
                m.j.setAttribute("data-upgraded", q.join(","));
                q = d("mdl-componentdowngraded", !0, !1);
                m.j.dispatchEvent(q)
            }
        }
        var n = [],
            p = [];
        return {
            Af: e,
            Bf: f,
            Cf: g,
            he: function() { for (var m = 0; m < n.length; m++) e(n[m].className) },
            lf: function(m,
                q) {
                (m = a(m)) && m.rd.push(q)
            },
            register: function(m) {
                var q = !0;
                if ("undefined" !== typeof m.wb || "undefined" !== typeof m.widget) q = m.wb || m.widget;
                var A = { lg: m.constructor || m.constructor, className: m.zb || m.classAsString, Ca: m.Ca || m.cssClass, wb: q, rd: [] };
                n.forEach(function(Q) { if (Q.Ca === A.Ca) throw Error("The provided cssClass has already been registered: " + Q.Ca); if (Q.className === A.className) throw Error("The provided className has already been registered"); });
                if (m.constructor.prototype.hasOwnProperty("mdlComponentConfigInternal_")) throw Error("MDL component classes must not have mdlComponentConfigInternal_ defined as a property.");
                a(m.zb, A) || n.push(A)
            },
            Ie: function(m) {
                function q(Q) { p.filter(function(Wa) { return Wa.j === Q }).forEach(k) }
                if (m instanceof Array || m instanceof NodeList)
                    for (var A = 0; A < m.length; A++) q(m[A]);
                else if (m instanceof Node) q(m);
                else throw Error("Invalid argument provided to downgrade MDL nodes.");
            }
        }
    }();
    Z.upgradeDom = Z.Af;
    Z.upgradeElement = Z.Bf;
    Z.upgradeElements = Z.Cf;
    Z.upgradeAllRegistered = Z.he;
    Z.registerUpgradedCallback = Z.lf;
    Z.register = Z.register;
    Z.downgradeElements = Z.Ie;
    window.componentHandler = Z;
    window.addEventListener("load", function() { "classList" in document.createElement("div") && "querySelector" in document && "addEventListener" in window && Array.prototype.forEach && (document.documentElement.classList.add("mdl-js"), Z.he()) });
    (function() {
        function a(b) {
            this.j = b;
            this.init()
        }
        window.MaterialButton = a;
        a.prototype.Ra = {};
        a.prototype.G = { Vf: "mdl-js-ripple-effect", Uf: "mdl-button__ripple-container", Tf: "mdl-ripple" };
        a.prototype.se = function(b) { b && this.j.blur() };
        a.prototype.disable = function() { this.j.disabled = !0 };
        a.prototype.disable = a.prototype.disable;
        a.prototype.enable = function() { this.j.disabled = !1 };
        a.prototype.enable = a.prototype.enable;
        a.prototype.init = function() {
            if (this.j) {
                if (this.j.classList.contains(this.G.Vf)) {
                    var b = document.createElement("span");
                    b.classList.add(this.G.Uf);
                    this.Yd = document.createElement("span");
                    this.Yd.classList.add(this.G.Tf);
                    b.appendChild(this.Yd);
                    this.fg = this.se.bind(this);
                    this.Yd.addEventListener("mouseup", this.fg);
                    this.j.appendChild(b)
                }
                this.te = this.se.bind(this);
                this.j.addEventListener("mouseup", this.te);
                this.j.addEventListener("mouseleave", this.te)
            }
        };
        Z.register({ constructor: a, zb: "MaterialButton", Ca: "mdl-js-button", wb: !0 })
    })();
    (function() {
        function a(b) {
            this.j = b;
            this.init()
        }
        window.MaterialProgress = a;
        a.prototype.Ra = {};
        a.prototype.G = { Kf: "mdl-progress__indeterminate" };
        a.prototype.sh = function(b) { this.j.classList.contains(this.G.Kf) || (this.jf.style.width = b + "%") };
        a.prototype.setProgress = a.prototype.sh;
        a.prototype.rh = function(b) {
            this.we.style.width = b + "%";
            this.re.style.width = 100 - b + "%"
        };
        a.prototype.setBuffer = a.prototype.rh;
        a.prototype.init = function() {
            if (this.j) {
                var b = document.createElement("div");
                b.className = "progressbar bar bar1";
                this.j.appendChild(b);
                this.jf = b;
                b = document.createElement("div");
                b.className = "bufferbar bar bar2";
                this.j.appendChild(b);
                this.we = b;
                b = document.createElement("div");
                b.className = "auxbar bar bar3";
                this.j.appendChild(b);
                this.re = b;
                this.jf.style.width = "0%";
                this.we.style.width = "100%";
                this.re.style.width = "0%";
                this.j.classList.add("is-upgraded")
            }
        };
        Z.register({ constructor: a, zb: "MaterialProgress", Ca: "mdl-js-progress", wb: !0 })
    })();
    (function() {
        function a(b) {
            this.j = b;
            this.init()
        }
        window.MaterialSpinner = a;
        a.prototype.Ra = { Pf: 4 };
        a.prototype.G = { me: "mdl-spinner__layer", le: "mdl-spinner__circle-clipper", Nf: "mdl-spinner__circle", Of: "mdl-spinner__gap-patch", Qf: "mdl-spinner__left", Rf: "mdl-spinner__right" };
        a.prototype.Be = function(b) {
            var c = document.createElement("div");
            c.classList.add(this.G.me);
            c.classList.add(this.G.me + "-" + b);
            b = document.createElement("div");
            b.classList.add(this.G.le);
            b.classList.add(this.G.Qf);
            var d = document.createElement("div");
            d.classList.add(this.G.Of);
            var e = document.createElement("div");
            e.classList.add(this.G.le);
            e.classList.add(this.G.Rf);
            for (var f = [b, d, e], g = 0; g < f.length; g++) {
                var k = document.createElement("div");
                k.classList.add(this.G.Nf);
                f[g].appendChild(k)
            }
            c.appendChild(b);
            c.appendChild(d);
            c.appendChild(e);
            this.j.appendChild(c)
        };
        a.prototype.createLayer = a.prototype.Be;
        a.prototype.stop = function() { this.j.classList.remove("is-active") };
        a.prototype.stop = a.prototype.stop;
        a.prototype.start = function() { this.j.classList.add("is-active") };
        a.prototype.start = a.prototype.start;
        a.prototype.init = function() {
            if (this.j) {
                for (var b = 1; b <= this.Ra.Pf; b++) this.Be(b);
                this.j.classList.add("is-upgraded")
            }
        };
        Z.register({ constructor: a, zb: "MaterialSpinner", Ca: "mdl-js-spinner", wb: !0 })
    })();
    (function() {
        function a(b) {
            this.j = b;
            this.cc = this.Ra.jd;
            this.init()
        }
        window.MaterialTextfield = a;
        a.prototype.Ra = { jd: -1, ke: "maxrows" };
        a.prototype.G = { Vh: "mdl-textfield__label", Lf: "mdl-textfield__input", ie: "is-dirty", uc: "is-focused", je: "is-disabled", vc: "is-invalid", Mf: "is-upgraded", Jf: "has-placeholder" };
        a.prototype.eh = function(b) {
            var c = b.target.value.split("\n").length;
            13 === b.keyCode && c >= this.cc && b.preventDefault()
        };
        a.prototype.dh = function() { this.j.classList.add(this.G.uc) };
        a.prototype.bh = function() { this.j.classList.remove(this.G.uc) };
        a.prototype.fh = function() { this.Ob() };
        a.prototype.Ob = function() {
            this.ze();
            this.checkValidity();
            this.ye();
            this.ud()
        };
        a.prototype.ze = function() { this.ca.disabled ? this.j.classList.add(this.G.je) : this.j.classList.remove(this.G.je) };
        a.prototype.checkDisabled = a.prototype.ze;
        a.prototype.ud = function() { this.j.querySelector(":focus") ? this.j.classList.add(this.G.uc) : this.j.classList.remove(this.G.uc) };
        a.prototype.checkFocus = a.prototype.ud;
        a.prototype.checkValidity = function() {
            this.ca.validity && (this.ca.validity.valid ?
                this.j.classList.remove(this.G.vc) : this.j.classList.add(this.G.vc))
        };
        a.prototype.checkValidity = a.prototype.checkValidity;
        a.prototype.ye = function() { this.ca.value && 0 < this.ca.value.length ? this.j.classList.add(this.G.ie) : this.j.classList.remove(this.G.ie) };
        a.prototype.checkDirty = a.prototype.ye;
        a.prototype.disable = function() {
            this.ca.disabled = !0;
            this.Ob()
        };
        a.prototype.disable = a.prototype.disable;
        a.prototype.enable = function() {
            this.ca.disabled = !1;
            this.Ob()
        };
        a.prototype.enable = a.prototype.enable;
        a.prototype.hg =
            function(b) {
                this.ca.value = b || "";
                this.Ob()
            };
        a.prototype.change = a.prototype.hg;
        a.prototype.init = function() {
            if (this.j && (this.ca = this.j.querySelector("." + this.G.Lf))) {
                this.ca.hasAttribute(this.Ra.ke) && (this.cc = parseInt(this.ca.getAttribute(this.Ra.ke), 10), isNaN(this.cc) && (this.cc = this.Ra.jd));
                this.ca.hasAttribute("placeholder") && this.j.classList.add(this.G.Jf);
                this.gg = this.Ob.bind(this);
                this.cg = this.dh.bind(this);
                this.bg = this.bh.bind(this);
                this.eg = this.fh.bind(this);
                this.ca.addEventListener("input", this.gg);
                this.ca.addEventListener("focus", this.cg);
                this.ca.addEventListener("blur", this.bg);
                this.ca.addEventListener("reset", this.eg);
                this.cc !== this.Ra.jd && (this.dg = this.eh.bind(this), this.ca.addEventListener("keydown", this.dg));
                var b = this.j.classList.contains(this.G.vc);
                this.Ob();
                this.j.classList.add(this.G.Mf);
                b && this.j.classList.add(this.G.vc);
                this.ca.hasAttribute("autofocus") && (this.j.focus(), this.ud())
            }
        };
        Z.register({ constructor: a, zb: "MaterialTextfield", Ca: "mdl-js-textfield", wb: !0 })
    })();
    /*
       
        Copyright (c) 2013 The Chromium Authors. All rights reserved.
       
        Redistribution and use in source and binary forms, with or without
        modification, are permitted provided that the following conditions are
        met:
       
           * Redistributions of source code must retain the above copyright
        notice, this list of conditions and the following disclaimer.
           * Redistributions in binary form must reproduce the above
        copyright notice, this list of conditions and the following disclaimer
        in the documentation and/or other materials provided with the
        distribution.
           * Neither the name of Google Inc. nor the names of its
        contributors may be used to endorse or promote products derived from
        this software without specific prior written permission.
       
        THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
        "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
        LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
        A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
        OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
        SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
        LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
        DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
        THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
        (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
        OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
       */
    (function() {
        function a(f) {
            for (; f;) {
                if ("DIALOG" == f.nodeName.toUpperCase()) return f;
                f = f.parentElement
            }
            return null
        }

        function b(f) { f && f.blur && f != document.body && f.blur() }

        function c(f) {
            this.V = f;
            this.Qd = this.Zc = !1;
            f.hasAttribute("role") || f.setAttribute("role", "dialog");
            f.show = this.show.bind(this);
            f.showModal = this.showModal.bind(this);
            f.close = this.close.bind(this);
            "returnValue" in f || (f.returnValue = "");
            this.Hb = this.Hb.bind(this);
            "MutationObserver" in window ? (new MutationObserver(this.Hb)).observe(f, {
                attributes: !0,
                attributeFilter: ["open"]
            }) : f.addEventListener("DOMAttrModified", this.Hb);
            Object.defineProperty(f, "open", { set: this.ae.bind(this), get: f.hasAttribute.bind(f, "open") });
            this.Ya = document.createElement("div");
            this.Ya.className = "backdrop";
            this.wc = this.wc.bind(this)
        }
        var d = window.CustomEvent;
        d && "object" != typeof d || (d = function(f, g) {
            g = g || {};
            var k = document.createEvent("CustomEvent");
            k.initCustomEvent(f, !!g.bubbles, !!g.cancelable, g.detail || null);
            return k
        }, d.prototype = window.Event.prototype);
        c.prototype = {get Fe() { return this.V },
            Hb: function() {!this.Qd || this.V.hasAttribute("open") && document.body.contains(this.V) || (this.Qd = !1, this.V.style.zIndex = "", this.Zc && (this.V.style.top = "", this.Zc = !1), this.Ya.removeEventListener("click", this.wc), this.Ya.parentElement && this.Ya.parentElement.removeChild(this.Ya), e.He.kh(this)) },
            ae: function(f) { f ? this.V.hasAttribute("open") || this.V.setAttribute("open", "") : (this.V.removeAttribute("open"), this.Hb()) },
            wc: function(f) {
                var g = document.createEvent("MouseEvents");
                g.initMouseEvent(f.type, f.bubbles,
                    f.cancelable, window, f.detail, f.screenX, f.screenY, f.clientX, f.clientY, f.ctrlKey, f.altKey, f.shiftKey, f.metaKey, f.button, f.relatedTarget);
                this.V.dispatchEvent(g);
                f.stopPropagation()
            },
            Bg: function() {
                var f = this.V.querySelector("[autofocus]:not([disabled])");
                f || (f = ["button", "input", "keygen", "select", "textarea"].map(function(g) { return g + ":not([disabled])" }), f.push('[tabindex]:not([disabled]):not([tabindex=""])'), f = this.V.querySelector(f.join(", ")));
                b(document.activeElement);
                f && f.focus()
            },
            Nh: function(f, g) {
                this.Ya.style.zIndex =
                    f;
                this.V.style.zIndex = g
            },
            show: function() { this.V.open || (this.ae(!0), this.Bg()) },
            showModal: function() {
                if (this.V.hasAttribute("open")) throw Error("Failed to execute 'showModal' on dialog: The element is already open, and therefore cannot be opened modally.");
                if (!document.body.contains(this.V)) throw Error("Failed to execute 'showModal' on dialog: The element is not in a Document.");
                if (!e.He.ih(this)) throw Error("Failed to execute 'showModal' on dialog: There are too many open modal dialogs.");
                this.show();
                this.Qd = !0;
                e.$g(this.V) ? (e.lh(this.V), this.Zc = !0) : this.Zc = !1;
                this.Ya.addEventListener("click", this.wc);
                this.V.parentNode.insertBefore(this.Ya, this.V.nextSibling)
            },
            close: function(f) {
                if (!this.V.hasAttribute("open")) throw Error("Failed to execute 'close' on dialog: The element does not have an 'open' attribute, and therefore cannot be closed.");
                this.ae(!1);
                void 0 !== f && (this.V.returnValue = f);
                f = new d("close", { bubbles: !1, cancelable: !1 });
                this.V.dispatchEvent(f)
            }
        };
        var e = {
            lh: function(f) {
                var g = document.body.scrollTop ||
                    document.documentElement.scrollTop;
                f.style.top = Math.max(g, g + (window.innerHeight - f.offsetHeight) / 2) + "px"
            },
            Qg: function(f) {
                for (var g = 0; g < document.styleSheets.length; ++g) {
                    var k = document.styleSheets[g],
                        n = null;
                    try { n = k.cssRules } catch (A) {}
                    if (n)
                        for (k = 0; k < n.length; ++k) {
                            var p = n[k],
                                m = null;
                            try { m = document.querySelectorAll(p.selectorText) } catch (A) {}
                            var q;
                            if (q = m) a: {
                                for (q = 0; q < m.length; ++q)
                                    if (m[q] == f) { q = !0; break a }
                                q = !1
                            }
                            if (q && (m = p.style.getPropertyValue("top"), p = p.style.getPropertyValue("bottom"), m && "auto" != m || p && "auto" !=
                                    p)) return !0
                        }
                }
                return !1
            },
            $g: function(f) { return "absolute" != window.getComputedStyle(f).position || "auto" != f.style.top && "" != f.style.top || "auto" != f.style.bottom && "" != f.style.bottom ? !1 : !e.Qg(f) },
            Le: function(f) {
                f.showModal && console.warn("This browser already supports <dialog>, the polyfill may not work correctly", f);
                if ("DIALOG" != f.nodeName.toUpperCase()) throw Error("Failed to register dialog: The element is not a dialog.");
                new c(f)
            },
            jh: function(f) { f.showModal || e.Le(f) },
            Ja: function() {
                this.ra = [];
                this.jc = document.createElement("div");
                this.jc.className = "_dialog_overlay";
                this.jc.addEventListener("click", function(f) { f.stopPropagation() });
                this.Kc = this.Kc.bind(this);
                this.Ic = this.Ic.bind(this);
                this.Lc = this.Lc.bind(this);
                this.Gf = 1E5;
                this.Ph = 100150
            }
        };
        e.Ja.prototype.xf = function() { return this.ra.length ? this.ra[this.ra.length - 1].Fe : null };
        e.Ja.prototype.$f = function() {
            document.body.appendChild(this.jc);
            document.body.addEventListener("focus", this.Ic, !0);
            document.addEventListener("keydown", this.Kc);
            document.addEventListener("DOMNodeRemoved",
                this.Lc)
        };
        e.Ja.prototype.Mh = function() {
            document.body.removeChild(this.jc);
            document.body.removeEventListener("focus", this.Ic, !0);
            document.removeEventListener("keydown", this.Kc);
            document.removeEventListener("DOMNodeRemoved", this.Lc)
        };
        e.Ja.prototype.zf = function() { for (var f = this.Gf, g = 0; g < this.ra.length; g++) g == this.ra.length - 1 && (this.jc.style.zIndex = f++), this.ra[g].Nh(f++, f++) };
        e.Ja.prototype.Ic = function(f) { if (a(f.target) != this.xf()) return f.preventDefault(), f.stopPropagation(), b(f.target), !1 };
        e.Ja.prototype.Kc =
            function(f) {
                if (27 == f.keyCode) {
                    f.preventDefault();
                    f.stopPropagation();
                    f = new d("cancel", { bubbles: !1, cancelable: !0 });
                    var g = this.xf();
                    g.dispatchEvent(f) && g.close()
                }
            };
        e.Ja.prototype.Lc = function(f) {
            if ("DIALOG" == f.target.nodeName.toUpperCase()) {
                var g = f.target;
                g.open && this.ra.some(function(k) { if (k.Fe == g) return k.Hb(), !0 })
            }
        };
        e.Ja.prototype.ih = function(f) {
            if (this.ra.length >= (this.Ph - this.Gf) / 2 - 1) return !1;
            this.ra.push(f);
            1 == this.ra.length && this.$f();
            this.zf();
            return !0
        };
        e.Ja.prototype.kh = function(f) {
            f = this.ra.indexOf(f); -
            1 != f && (this.ra.splice(f, 1), this.zf(), 0 == this.ra.length && this.Mh())
        };
        e.He = new e.Ja;
        document.addEventListener("submit", function(f) {
            var g = f.target;
            if (g && g.hasAttribute("method") && "dialog" == g.getAttribute("method").toLowerCase() && (f.preventDefault(), g = a(f.target))) {
                var k, n = ["BUTTON", "INPUT"];
                [document.activeElement, f.explicitOriginalTarget].some(function(p) { if (p && p.form == f.target && -1 != n.indexOf(p.nodeName.toUpperCase())) return k = p.value, !0 });
                g.close(k)
            }
        }, !0);
        e.forceRegisterDialog = e.Le;
        e.registerDialog =
            e.jh;
        "function" === typeof define && "amd" in define ? define(function() { return e }) : "object" === typeof module && "object" === typeof module.exports ? module.exports = e : window.dialogPolyfill = e
    })();
}).call(this);