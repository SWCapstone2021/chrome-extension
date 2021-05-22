! function(t, e) { "object" == typeof exports && "undefined" != typeof module ? e(require("@firebase/app")) : "function" == typeof define && define.amd ? define(["@firebase/app"], e) : e((t = "undefined" != typeof globalThis ? globalThis : t || self).firebase) }(this, function(e) { "use strict"; try {! function() {
            function t(t) { return t && "object" == typeof t && "default" in t ? t : { default: t } } var zl = t(e);! function() { var t, o = "function" == typeof Object.defineProperties ? Object.defineProperty : function(t, e, n) { t != Array.prototype && t != Object.prototype && (t[e] = n.value) }; var u = function(t) { t = ["object" == typeof window && window, "object" == typeof self && self, "object" == typeof global && global, t]; for (var e = 0; e < t.length; ++e) { var n = t[e]; if (n && n.Math == Math) return n } return globalThis }(this);

                function c(t) { var e, n, i = "undefined" != typeof Symbol && Symbol.iterator && t[Symbol.iterator]; return i ? i.call(t) : { next: (e = t, n = 0, function() { return n < e.length ? { done: !1, value: e[n++] } : { done: !0 } }) } }! function(t, e) { if (e) { var n = u;
                        t = t.split("."); for (var i = 0; i < t.length - 1; i++) { var r = t[i];
                            r in n || (n[r] = {}), n = n[r] }(e = e(i = n[t = t[t.length - 1]])) != i && null != e && o(n, t, { configurable: !0, writable: !0, value: e }) } }("Promise", function(t) {
                    function a(t) { this.b = 0, this.c = void 0, this.a = []; var e = this.f(); try { t(e.resolve, e.reject) } catch (t) { e.reject(t) } }

                    function e() { this.a = null }

                    function s(e) { return e instanceof a ? e : new a(function(t) { t(e) }) } if (t) return t;
                    e.prototype.b = function(t) { var e;
                        null == this.a && (this.a = [], (e = this).c(function() { e.g() })), this.a.push(t) }; var n = u.setTimeout;
                    e.prototype.c = function(t) { n(t, 0) }, e.prototype.g = function() { for (; this.a && this.a.length;) { var t = this.a;
                            this.a = []; for (var e = 0; e < t.length; ++e) { var n = t[e];
                                t[e] = null; try { n() } catch (t) { this.f(t) } } }
                        this.a = null }, e.prototype.f = function(t) { this.c(function() { throw t }) }, a.prototype.f = function() {
                        function t(e) { return function(t) { i || (i = !0, e.call(n, t)) } } var n = this,
                            i = !1; return { resolve: t(this.m), reject: t(this.g) } }, a.prototype.m = function(t) { if (t === this) this.g(new TypeError("A Promise cannot resolve to itself"));
                        else if (t instanceof a) this.s(t);
                        else { t: switch (typeof t) {
                                case "object":
                                    var e = null != t; break t;
                                case "function":
                                    e = !0; break t;
                                default:
                                    e = !1 }
                            e ? this.v(t) : this.h(t) } }, a.prototype.v = function(t) { var e = void 0; try { e = t.then } catch (t) { return void this.g(t) } "function" == typeof e ? this.u(e, t) : this.h(t) }, a.prototype.g = function(t) { this.i(2, t) }, a.prototype.h = function(t) { this.i(1, t) }, a.prototype.i = function(t, e) { if (0 != this.b) throw Error("Cannot settle(" + t + ", " + e + "): Promise already settled in state" + this.b);
                        this.b = t, this.c = e, this.l() }, a.prototype.l = function() { if (null != this.a) { for (var t = 0; t < this.a.length; ++t) r.b(this.a[t]);
                            this.a = null } }; var r = new e; return a.prototype.s = function(t) { var e = this.f();
                        t.Qa(e.resolve, e.reject) }, a.prototype.u = function(t, e) { var n = this.f(); try { t.call(e, n.resolve, n.reject) } catch (t) { n.reject(t) } }, a.prototype.then = function(t, e) {
                        function n(e, t) { return "function" == typeof e ? function(t) { try { i(e(t)) } catch (t) { r(t) } } : t } var i, r, o = new a(function(t, e) { i = t, r = e }); return this.Qa(n(t, i), n(e, r)), o }, a.prototype.catch = function(t) { return this.then(void 0, t) }, a.prototype.Qa = function(t, e) {
                        function n() { switch (i.b) {
                                case 1:
                                    t(i.c); break;
                                case 2:
                                    e(i.c); break;
                                default:
                                    throw Error("Unexpected state: " + i.b) } } var i = this;
                        null == this.a ? r.b(n) : this.a.push(n) }, a.resolve = s, a.reject = function(n) { return new a(function(t, e) { e(n) }) }, a.race = function(r) { return new a(function(t, e) { for (var n = c(r), i = n.next(); !i.done; i = n.next()) s(i.value).Qa(t, e) }) }, a.all = function(t) { var e = c(t),
                            o = e.next(); return o.done ? s([]) : new a(function(n, t) { for (var i = [], r = 0; i.push(void 0), r++, s(o.value).Qa(function(e) { return function(t) { i[e] = t, 0 == --r && n(i) } }(i.length - 1), t), o = e.next(), !o.done;); }) }, a }); var h = h || {},
                    l = this || self,
                    e = /^[\w+/_-]+[=]{0,2}$/,
                    s = null;

                function f(t) { return (t = t.querySelector && t.querySelector("script[nonce]")) && (t = t.nonce || t.getAttribute("nonce")) && e.test(t) ? t : "" }

                function a() {}

                function d(t) { var e = typeof t; return "object" != e ? e : t ? Array.isArray(t) ? "array" : e : "null" }

                function p(t) { var e = d(t); return "array" == e || "object" == e && "number" == typeof t.length }

                function v(t) { return "function" == d(t) }

                function m(t) { var e = typeof t; return "object" == e && null != t || "function" == e } var n = "closure_uid_" + (1e9 * Math.random() >>> 0),
                    i = 0;

                function r(t, e, n) { return t.call.apply(t.bind, arguments) }

                function g(e, n, t) { if (!e) throw Error(); if (2 < arguments.length) { var i = Array.prototype.slice.call(arguments, 2); return function() { var t = Array.prototype.slice.call(arguments); return Array.prototype.unshift.apply(t, i), e.apply(n, t) } } return function() { return e.apply(n, arguments) } }

                function b(t, e, n) { return (b = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? r : g).apply(null, arguments) }

                function y(e) { var n = Array.prototype.slice.call(arguments, 1); return function() { var t = n.slice(); return t.push.apply(t, arguments), e.apply(this, t) } }

                function w(t, e) {
                    function n() {}
                    n.prototype = e.prototype, t.ab = e.prototype, t.prototype = new n, t.prototype.constructor = t }

                function I(t) { return t }

                function T(t, e, n) { this.code = k + t, this.message = e || S[t] || "", this.a = n || null }

                function E(t) { var e = t && t.code; return e ? new T(e.substring(k.length), t.message, t.serverResponse) : null }
                w(T, Error), T.prototype.w = function() { var t = { code: this.code, message: this.message }; return this.a && (t.serverResponse = this.a), t }, T.prototype.toJSON = function() { return this.w() }; var A, k = "auth/",
                    S = { "admin-restricted-operation": "This operation is restricted to administrators only.", "argument-error": "", "app-not-authorized": "This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.", "app-not-installed": "The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.", "captcha-check-failed": "The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.", "code-expired": "The SMS code has expired. Please re-send the verification code to try again.", "cordova-not-ready": "Cordova framework is not ready.", "cors-unsupported": "This browser is not supported.", "credential-already-in-use": "This credential is already associated with a different user account.", "custom-token-mismatch": "The custom token corresponds to a different audience.", "requires-recent-login": "This operation is sensitive and requires recent authentication. Log in again before retrying this request.", "dynamic-link-not-activated": "Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.", "email-change-needs-verification": "Multi-factor users must always have a verified email.", "email-already-in-use": "The email address is already in use by another account.", "expired-action-code": "The action code has expired. ", "cancelled-popup-request": "This operation has been cancelled due to another conflicting popup being opened.", "internal-error": "An internal error has occurred.", "invalid-app-credential": "The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.", "invalid-app-id": "The mobile app identifier is not registed for the current project.", "invalid-user-token": "This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.", "invalid-auth-event": "An internal error has occurred.", "invalid-verification-code": "The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure use the verification code provided by the user.", "invalid-continue-uri": "The continue URL provided in the request is invalid.", "invalid-cordova-configuration": "The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.", "invalid-custom-token": "The custom token format is incorrect. Please check the documentation.", "invalid-dynamic-link-domain": "The provided dynamic link domain is not configured or authorized for the current project.", "invalid-email": "The email address is badly formatted.", "invalid-api-key": "Your API key is invalid, please check you have copied it correctly.", "invalid-cert-hash": "The SHA-1 certificate hash provided is invalid.", "invalid-credential": "The supplied auth credential is malformed or has expired.", "invalid-message-payload": "The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.", "invalid-multi-factor-session": "The request does not contain a valid proof of first factor successful sign-in.", "invalid-oauth-provider": "EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.", "invalid-oauth-client-id": "The OAuth client ID provided is either invalid or does not match the specified API key.", "unauthorized-domain": "This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.", "invalid-action-code": "The action code is invalid. This can happen if the code is malformed, expired, or has already been used.", "wrong-password": "The password is invalid or the user does not have a password.", "invalid-persistence-type": "The specified persistence type is invalid. It can only be local, session or none.", "invalid-phone-number": "The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].", "invalid-provider-id": "The specified provider ID is invalid.", "invalid-recipient-email": "The email corresponding to this action failed to send as the provided recipient email address is invalid.", "invalid-sender": "The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.", "invalid-verification-id": "The verification ID used to create the phone auth credential is invalid.", "invalid-tenant-id": "The Auth instance's tenant ID is invalid.", "multi-factor-info-not-found": "The user does not have a second factor matching the identifier provided.", "multi-factor-auth-required": "Proof of ownership of a second factor is required to complete sign-in.", "missing-android-pkg-name": "An Android Package Name must be provided if the Android App is required to be installed.", "auth-domain-config-required": "Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.", "missing-app-credential": "The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.", "missing-verification-code": "The phone auth credential was created with an empty SMS verification code.", "missing-continue-uri": "A continue URL must be provided in the request.", "missing-iframe-start": "An internal error has occurred.", "missing-ios-bundle-id": "An iOS Bundle ID must be provided if an App Store ID is provided.", "missing-multi-factor-info": "No second factor identifier is provided.", "missing-multi-factor-session": "The request is missing proof of first factor successful sign-in.", "missing-or-invalid-nonce": "The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.", "missing-phone-number": "To send verification codes, provide a phone number for the recipient.", "missing-verification-id": "The phone auth credential was created with an empty verification ID.", "app-deleted": "This instance of FirebaseApp has been deleted.", "account-exists-with-different-credential": "An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.", "network-request-failed": "A network error (such as timeout, interrupted connection or unreachable host) has occurred.", "no-auth-event": "An internal error has occurred.", "no-such-provider": "User was not linked to an account with the given provider.", "null-user": "A null user object was provided as the argument for an operation which requires a non-null user object.", "operation-not-allowed": "The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.", "operation-not-supported-in-this-environment": 'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.', "popup-blocked": "Unable to establish a connection with the popup. It may have been blocked by the browser.", "popup-closed-by-user": "The popup has been closed by the user before finalizing the operation.", "provider-already-linked": "User can only be linked to one identity for the given provider.", "quota-exceeded": "The project's quota for this operation has been exceeded.", "redirect-cancelled-by-user": "The redirect operation has been cancelled by the user before finalizing.", "redirect-operation-pending": "A redirect sign-in operation is already pending.", "rejected-credential": "The request contains malformed or mismatching credentials.", "second-factor-already-in-use": "The second factor is already enrolled on this account.", "maximum-second-factor-count-exceeded": "The maximum allowed number of second factors on a user has been exceeded.", "tenant-id-mismatch": "The provided tenant ID does not match the Auth instance's tenant ID", timeout: "The operation has timed out.", "user-token-expired": "The user's credential is no longer valid. The user must sign in again.", "too-many-requests": "We have blocked all requests from this device due to unusual activity. Try again later.", "unauthorized-continue-uri": "The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.", "unsupported-first-factor": "Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor.", "unsupported-persistence-type": "The current environment does not support the specified persistence type.", "unsupported-tenant-operation": "This operation is not supported in a multi-tenant context.", "unverified-email": "The operation requires a verified email.", "user-cancelled": "The user did not grant your application the permissions it requested.", "user-not-found": "There is no user record corresponding to this identifier. The user may have been deleted.", "user-disabled": "The user account has been disabled by an administrator.", "user-mismatch": "The supplied credentials do not correspond to the previously signed in user.", "user-signed-out": "", "weak-password": "The password must be 6 characters long or more.", "web-storage-unsupported": "This browser is not supported or 3rd party cookies and data may be disabled." },
                    N = { ld: { Ta: "https://staging-identitytoolkit.sandbox.googleapis.com/identitytoolkit/v3/relyingparty/", Za: "https://staging-securetoken.sandbox.googleapis.com/v1/token", Wa: "https://staging-identitytoolkit.sandbox.googleapis.com/v2/", id: "b" }, sd: { Ta: "https://www.googleapis.com/identitytoolkit/v3/relyingparty/", Za: "https://securetoken.googleapis.com/v1/token", Wa: "https://identitytoolkit.googleapis.com/v2/", id: "p" }, ud: { Ta: "https://staging-www.sandbox.googleapis.com/identitytoolkit/v3/relyingparty/", Za: "https://staging-securetoken.sandbox.googleapis.com/v1/token", Wa: "https://staging-identitytoolkit.sandbox.googleapis.com/v2/", id: "s" }, vd: { Ta: "https://www-googleapis-test.sandbox.google.com/identitytoolkit/v3/relyingparty/", Za: "https://test-securetoken.sandbox.googleapis.com/v1/token", Wa: "https://test-identitytoolkit.sandbox.googleapis.com/v2/", id: "t" } };

                function _(t) { for (var e in N)
                        if (N[e].id === t) return t = N[e], { firebaseEndpoint: t.Ta, secureTokenEndpoint: t.Za, identityPlatformEndpoint: t.Wa };
                    return null }

                function O(t) { if (t) try { return t.$goog_Thenable } catch (t) { return } }

                function C(t) { var e;
                    Error.captureStackTrace ? Error.captureStackTrace(this, C) : (e = Error().stack) && (this.stack = e), t && (this.message = String(t)) }

                function R(t, e) { for (var n = "", i = (t = t.split("%s")).length - 1, r = 0; r < i; r++) n += t[r] + (r < e.length ? e[r] : "%s");
                    C.call(this, n + t[i]) }

                function D(t) { throw new R("Failure" + (t ? ": " + t : ""), Array.prototype.slice.call(arguments, 1)) }

                function P(t, e) { this.c = t, this.f = e, this.b = 0, this.a = null }

                function L(t, e) { t.f(e), t.b < 100 && (t.b++, e.next = t.a, t.a = e) }

                function x() { this.b = this.a = null }
                A = _("__EID__") ? "__EID__" : void 0, w(C, Error), C.prototype.name = "CustomError", w(R, C), R.prototype.name = "AssertionError", P.prototype.get = function() { var t; return 0 < this.b ? (this.b--, t = this.a, this.a = t.next, t.next = null) : t = this.c(), t }; var M = new P(function() { return new j }, function(t) { t.reset() });

                function j() { this.next = this.b = this.a = null }
                x.prototype.add = function(t, e) { var n = M.get();
                    n.set(t, e), this.b ? this.b.next = n : this.a = n, this.b = n }, j.prototype.set = function(t, e) { this.a = t, this.b = e, this.next = null }, j.prototype.reset = function() { this.next = this.b = this.a = null }; var U = Array.prototype.indexOf ? function(t, e) { return Array.prototype.indexOf.call(t, e, void 0) } : function(t, e) { if ("string" == typeof t) return "string" != typeof e || 1 != e.length ? -1 : t.indexOf(e, 0); for (var n = 0; n < t.length; n++)
                            if (n in t && t[n] === e) return n;
                        return -1 },
                    V = Array.prototype.forEach ? function(t, e, n) { Array.prototype.forEach.call(t, e, n) } : function(t, e, n) { for (var i = t.length, r = "string" == typeof t ? t.split("") : t, o = 0; o < i; o++) o in r && e.call(n, r[o], o, t) }; var F = Array.prototype.filter ? function(t, e) { return Array.prototype.filter.call(t, e, void 0) } : function(t, e) { for (var n, i = t.length, r = [], o = 0, a = "string" == typeof t ? t.split("") : t, s = 0; s < i; s++) s in a && (n = a[s], e.call(void 0, n, s, t) && (r[o++] = n)); return r },
                    q = Array.prototype.map ? function(t, e) { return Array.prototype.map.call(t, e, void 0) } : function(t, e) { for (var n = t.length, i = Array(n), r = "string" == typeof t ? t.split("") : t, o = 0; o < n; o++) o in r && (i[o] = e.call(void 0, r[o], o, t)); return i },
                    H = Array.prototype.some ? function(t, e) { return Array.prototype.some.call(t, e, void 0) } : function(t, e) { for (var n = t.length, i = "string" == typeof t ? t.split("") : t, r = 0; r < n; r++)
                            if (r in i && e.call(void 0, i[r], r, t)) return !0;
                        return !1 };

                function K(t, e) { return 0 <= U(t, e) }

                function G(t, e) { var n; return (n = 0 <= (e = U(t, e))) && Array.prototype.splice.call(t, e, 1), n }

                function B(n, i) {! function(t, e) { for (var n = "string" == typeof t ? t.split("") : t, i = t.length - 1; 0 <= i; --i) i in n && e.call(void 0, n[i], i, t) }(n, function(t, e) { i.call(void 0, t, e, n) && 1 == Array.prototype.splice.call(n, e, 1).length && 0 }) }

                function W() { return Array.prototype.concat.apply([], arguments) }

                function X(t) { var e = t.length; if (0 < e) { for (var n = Array(e), i = 0; i < e; i++) n[i] = t[i]; return n } return [] } var J, Y = String.prototype.trim ? function(t) { return t.trim() } : function(t) { return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1] },
                    z = /&/g,
                    $ = /</g,
                    Z = />/g,
                    Q = /"/g,
                    tt = /'/g,
                    et = /\x00/g,
                    nt = /[\x00&<>"']/;

                function it(t, e) { return -1 != t.indexOf(e) }

                function rt(t, e) { return t < e ? -1 : e < t ? 1 : 0 }
                t: { var ot = l.navigator; if (ot) { ot = ot.userAgent; if (ot) { J = ot; break t } }
                    J = "" }

                function at(t) { return it(J, t) }

                function st(t, e) { for (var n in t) e.call(void 0, t[n], n, t) }

                function ut(t) { for (var e in t) return; return 1 }

                function ct(t) { var e, n = {}; for (e in t) n[e] = t[e]; return n } var ht = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");

                function lt(t) { for (var e, n, i = 1; i < arguments.length; i++) { for (e in n = arguments[i]) t[e] = n[e]; for (var r = 0; r < ht.length; r++) e = ht[r], Object.prototype.hasOwnProperty.call(n, e) && (t[e] = n[e]) } }

                function ft(t, e) { t: { try { var n = t && t.ownerDocument,
                                n = n && (n.defaultView || n.parentWindow); if ((n = n || l).Element && n.Location) { var i = n; break t } } catch (t) {}
                        i = null } if (i && void 0 !== i[e] && (!t || !(t instanceof i[e]) && (t instanceof i.Location || t instanceof i.Element))) { if (m(t)) try { var r = t.constructor.displayName || t.constructor.name || Object.prototype.toString.call(t) } catch (t) { r = "<object could not be stringified>" } else r = void 0 === t ? "undefined" : null === t ? "null" : typeof t;
                        D("Argument is not a %s (or a non-Element, non-Location mock); got: %s", e, r) } }

                function dt(t, e) { this.a = t === gt && e || "", this.b = mt }

                function pt(t) { return t instanceof dt && t.constructor === dt && t.b === mt ? t.a : (D("expected object of type Const, got '" + t + "'"), "type_error:Const") }
                dt.prototype.sa = !0, dt.prototype.ra = function() { return this.a }, dt.prototype.toString = function() { return "Const{" + this.a + "}" }; var vt, mt = {},
                    gt = {};

                function bt() { if (void 0 === vt) { var t = null,
                            e = l.trustedTypes; if (e && e.createPolicy) { try { t = e.createPolicy("goog#html", { createHTML: I, createScript: I, createScriptURL: I }) } catch (t) { l.console && l.console.error(t.message) }
                            vt = t } else vt = t } return vt }

                function yt(t, e) { this.a = e === At ? t : "" }

                function wt(t) { return t instanceof yt && t.constructor === yt ? t.a : (D("expected object of type TrustedResourceUrl, got '" + t + "' of type " + d(t)), "type_error:TrustedResourceUrl") }

                function It(t, n) { var e, i = pt(t); if (!Et.test(i)) throw Error("Invalid TrustedResourceUrl format: " + i); return t = i.replace(Tt, function(t, e) { if (!Object.prototype.hasOwnProperty.call(n, e)) throw Error('Found marker, "' + e + '", in format string, "' + i + '", but no valid label mapping found in args: ' + JSON.stringify(n)); return (t = n[e]) instanceof dt ? pt(t) : encodeURIComponent(String(t)) }), e = t, t = bt(), new yt(e = t ? t.createScriptURL(e) : e, At) }
                yt.prototype.sa = !0, yt.prototype.ra = function() { return this.a.toString() }, yt.prototype.toString = function() { return "TrustedResourceUrl{" + this.a + "}" }; var Tt = /%{(\w+)}/g,
                    Et = /^((https:)?\/\/[0-9a-z.:[\]-]+\/|\/[^/\\]|[^:/\\%]+\/|[^:/\\%]*[?#]|about:blank#)/i,
                    At = {};

                function kt(t, e) { this.a = e === Dt ? t : "" }

                function St(t) { return t instanceof kt && t.constructor === kt ? t.a : (D("expected object of type SafeUrl, got '" + t + "' of type " + d(t)), "type_error:SafeUrl") }
                kt.prototype.sa = !0, kt.prototype.ra = function() { return this.a.toString() }, kt.prototype.toString = function() { return "SafeUrl{" + this.a + "}" }; var Nt = /^(?:audio\/(?:3gpp2|3gpp|aac|L16|midi|mp3|mp4|mpeg|oga|ogg|opus|x-m4a|x-matroska|x-wav|wav|webm)|font\/\w+|image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp|x-icon)|text\/csv|video\/(?:mpeg|mp4|ogg|webm|quicktime|x-matroska))(?:;\w+=(?:\w+|"[\w;,= ]+"))*$/i,
                    _t = /^data:(.*);base64,[a-z0-9+\/]+=*$/i,
                    Ot = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;

                function Ct(t) { return t instanceof kt ? t : (t = "object" == typeof t && t.sa ? t.ra() : String(t), t = Ot.test(t) || (e = (t = (t = String(t)).replace(/(%0A|%0D)/g, "")).match(_t)) && Nt.test(e[1]) ? new kt(t, Dt) : null); var e }

                function Rt(t) { return t instanceof kt ? t : (t = "object" == typeof t && t.sa ? t.ra() : String(t), new kt(t = !Ot.test(t) ? "about:invalid#zClosurez" : t, Dt)) } var Dt = {},
                    Pt = new kt("about:invalid#zClosurez", Dt);

                function Lt(t, e, n) { this.a = n === xt ? t : "" }
                Lt.prototype.sa = !0, Lt.prototype.ra = function() { return this.a.toString() }, Lt.prototype.toString = function() { return "SafeHtml{" + this.a + "}" }; var xt = {};

                function Mt(t, e, n, i) { return t = t instanceof kt ? t : Rt(t), e = e || l, n = n instanceof dt ? pt(n) : n || "", e.open(St(t), n, i, void 0) }

                function jt(t) { for (var e = t.split("%s"), n = "", i = Array.prototype.slice.call(arguments, 1); i.length && 1 < e.length;) n += e.shift() + i.shift(); return n + e.join("%s") }

                function Ut(t) { return nt.test(t) && (-1 != (t = -1 != (t = -1 != (t = -1 != (t = -1 != (t = -1 != t.indexOf("&") ? t.replace(z, "&amp;") : t).indexOf("<") ? t.replace($, "&lt;") : t).indexOf(">") ? t.replace(Z, "&gt;") : t).indexOf('"') ? t.replace(Q, "&quot;") : t).indexOf("'") ? t.replace(tt, "&#39;") : t).indexOf("\0") && (t = t.replace(et, "&#0;"))), t }

                function Vt(t) { return Vt[" "](t), t }
                Vt[" "] = a; var Ft, qt = at("Opera"),
                    Ht = at("Trident") || at("MSIE"),
                    Kt = at("Edge"),
                    Gt = Kt || Ht,
                    Bt = at("Gecko") && !(it(J.toLowerCase(), "webkit") && !at("Edge")) && !(at("Trident") || at("MSIE")) && !at("Edge"),
                    Wt = it(J.toLowerCase(), "webkit") && !at("Edge");

                function Xt() { var t = l.document; return t ? t.documentMode : void 0 }
                t: { var Jt = "",
                        Yt = (Yt = J, Bt ? /rv:([^\);]+)(\)|;)/.exec(Yt) : Kt ? /Edge\/([\d\.]+)/.exec(Yt) : Ht ? /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(Yt) : Wt ? /WebKit\/(\S+)/.exec(Yt) : qt ? /(?:Version)[ \/]?(\S+)/.exec(Yt) : void 0); if (Yt && (Jt = Yt ? Yt[1] : ""), Ht) { Yt = Xt(); if (null != Yt && Yt > parseFloat(Jt)) { Ft = String(Yt); break t } }
                    Ft = Jt }
                var zt = {};

                function $t(s) { return t = s, e = function() { for (var t = 0, e = Y(String(Ft)).split("."), n = Y(String(s)).split("."), i = Math.max(e.length, n.length), r = 0; 0 == t && r < i; r++)
                            for (var o = e[r] || "", a = n[r] || ""; o = /(\d*)(\D*)(.*)/.exec(o) || ["", "", "", ""], a = /(\d*)(\D*)(.*)/.exec(a) || ["", "", "", ""], (0 != o[0].length || 0 != a[0].length) && (t = rt(0 == o[1].length ? 0 : parseInt(o[1], 10), 0 == a[1].length ? 0 : parseInt(a[1], 10)) || rt(0 == o[2].length, 0 == a[2].length) || rt(o[2], a[2]), o = o[3], a = a[3], 0 == t);); return 0 <= t }, n = zt, Object.prototype.hasOwnProperty.call(n, t) ? n[t] : n[t] = e(t); var t, e, n } var Zt = l.document && Ht && (Xt() || parseInt(Ft, 10)) || void 0; try { new self.OffscreenCanvas(0, 0).getContext("2d") } catch (t) {} var Qt = !Ht || 9 <= Number(Zt);

                function te(t) { var e = document; return "string" == typeof t ? e.getElementById(t) : t }

                function ee(n, t) { st(t, function(t, e) { t && "object" == typeof t && t.sa && (t = t.ra()), "style" == e ? n.style.cssText = t : "class" == e ? n.className = t : "for" == e ? n.htmlFor = t : re.hasOwnProperty(e) ? n.setAttribute(re[e], t) : 0 == e.lastIndexOf("aria-", 0) || 0 == e.lastIndexOf("data-", 0) ? n.setAttribute(e, t) : n[e] = t }) } var ne, ie, re = { cellpadding: "cellPadding", cellspacing: "cellSpacing", colspan: "colSpan", frameborder: "frameBorder", height: "height", maxlength: "maxLength", nonce: "nonce", role: "role", rowspan: "rowSpan", type: "type", usemap: "useMap", valign: "vAlign", width: "width" };

                function oe() { var t, e = arguments,
                        n = document,
                        i = String(e[0]),
                        r = e[1]; return !Qt && r && (r.name || r.type) && (i = ["<", i], r.name && i.push(' name="', Ut(r.name), '"'), r.type && (i.push(' type="', Ut(r.type), '"'), lt(t = {}, r), delete t.type, r = t), i.push(">"), i = i.join("")), i = ae(n, i), r && ("string" == typeof r ? i.className = r : Array.isArray(r) ? i.className = r.join(" ") : ee(i, r)), 2 < e.length && function(e, n, t) {
                        function i(t) { t && n.appendChild("string" == typeof t ? e.createTextNode(t) : t) } for (var r = 2; r < t.length; r++) { var o = t[r]; if (!p(o) || m(o) && 0 < o.nodeType) i(o);
                            else { t: { if (o && "number" == typeof o.length) { if (m(o)) { var a = "function" == typeof o.item || "string" == typeof o.item; break t } if (v(o)) { a = "function" == typeof o.item; break t } }
                                    a = !1 }
                                V(a ? X(o) : o, i) } } }(n, i, e), i }

                function ae(t, e) { return e = String(e), "application/xhtml+xml" === t.contentType && (e = e.toLowerCase()), t.createElement(e) }

                function se(t) { l.setTimeout(function() { throw t }, 0) }

                function ue(t, e) { ie || function() {
                        { var t;
                            ie = l.Promise && l.Promise.resolve ? (t = l.Promise.resolve(void 0), function() { t.then(le) }) : function() { var t = le;!v(l.setImmediate) || l.Window && l.Window.prototype && !at("Edge") && l.Window.prototype.setImmediate == l.setImmediate ? (ne = ne || function() { var t = l.MessageChannel; if (void 0 === (t = void 0 === t && "undefined" != typeof window && window.postMessage && window.addEventListener && !at("Presto") ? function() { var t = ae(document, "IFRAME");
                                            t.style.display = "none", document.documentElement.appendChild(t); var e = t.contentWindow;
                                            (t = e.document).open(), t.close(); var n = "callImmediate" + Math.random(),
                                                i = "file:" == e.location.protocol ? "*" : e.location.protocol + "//" + e.location.host;
                                            t = b(function(t) { "*" != i && t.origin != i || t.data != n || this.port1.onmessage() }, this), e.addEventListener("message", t, !1), this.port1 = {}, this.port2 = { postMessage: function() { e.postMessage(n, i) } } } : t) || at("Trident") || at("MSIE")) return function(t) { l.setTimeout(t, 0) }; var e = new t,
                                        n = {},
                                        i = n; return e.port1.onmessage = function() { var t;
                                            void 0 !== n.next && (t = (n = n.next).Gb, n.Gb = null, t()) },
                                        function(t) { i.next = { Gb: t }, i = i.next, e.port2.postMessage(0) } }())(t) : l.setImmediate(t) } } }(), ce || (ie(), ce = !0), he.add(t, e) } var ce = !1,
                    he = new x;

                function le() { for (var t, e, n; n = e = void 0, n = null, (e = he).a && (n = e.a, e.a = e.a.next, e.a || (e.b = null), n.next = null), t = n;) { try { t.a.call(t.b) } catch (t) { se(t) }
                        L(M, t) }
                    ce = !1 }

                function fe(t, e) { if (this.a = de, this.i = void 0, this.f = this.b = this.c = null, this.g = this.h = !1, t != a) try { var n = this;
                        t.call(e, function(t) { ke(n, pe, t) }, function(t) { if (!(t instanceof De)) try { if (t instanceof Error) throw t; throw Error("Promise rejected.") } catch (t) {}
                            ke(n, ve, t) }) } catch (t) { ke(this, ve, t) } } var de = 0,
                    pe = 2,
                    ve = 3;

                function me() { this.next = this.f = this.b = this.g = this.a = null, this.c = !1 }
                me.prototype.reset = function() { this.f = this.b = this.g = this.a = null, this.c = !1 }; var ge = new P(function() { return new me }, function(t) { t.reset() });

                function be(t, e, n) { var i = ge.get(); return i.g = t, i.b = e, i.f = n, i }

                function ye(t) { if (t instanceof fe) return t; var e = new fe(a); return ke(e, pe, t), e }

                function we(n) { return new fe(function(t, e) { e(n) }) }

                function Ie(t, e, n) { Se(t, e, n, null) || ue(y(e, t)) }

                function Te(n) { return new fe(function(i) { var r = n.length,
                            o = []; if (r)
                            for (var t = function(t, e, n) { r--, o[t] = e ? { Pb: !0, value: n } : { Pb: !1, reason: n }, 0 == r && i(o) }, e = 0; e < n.length; e++) Ie(n[e], y(t, e, !0), y(t, e, !1));
                        else i(o) }) }

                function Ee(t, e) { t.b || t.a != pe && t.a != ve || Ne(t), t.f ? t.f.next = e : t.b = e, t.f = e }

                function Ae(t, r, o, a) { var e = be(null, null, null); return e.a = new fe(function(n, i) { e.g = r ? function(t) { try { var e = r.call(a, t);
                                n(e) } catch (t) { i(t) } } : n, e.b = o ? function(t) { try { var e = o.call(a, t);
                                void 0 === e && t instanceof De ? i(t) : n(e) } catch (t) { i(t) } } : i }), Ee(e.a.c = t, e), e.a }

                function ke(t, e, n) { var i, r;
                    t.a == de && (t === n && (e = ve, n = new TypeError("Promise cannot resolve to itself")), t.a = 1, Se(n, t.$c, t.ad, t) || (t.i = n, t.a = e, t.c = null, Ne(t), e != ve || n instanceof De || (r = n, (i = t).g = !0, ue(function() { i.g && Re.call(null, r) })))) }

                function Se(t, e, n, i) { if (t instanceof fe) return Ee(t, be(e || a, n || null, i)), 1; if (O(t)) return t.then(e, n, i), 1; if (m(t)) try { var r = t.then; if (v(r)) return function(t, e, n, i, r) {
                            function o(t) { a || (a = !0, i.call(r, t)) } var a = !1; try { e.call(t, function(t) { a || (a = !0, n.call(r, t)) }, o) } catch (t) { o(t) } }(t, r, e, n, i), 1 } catch (t) { return n.call(i, t), 1 } }

                function Ne(t) { t.h || (t.h = !0, ue(t.gc, t)) }

                function _e(t) { var e = null; return t.b && (e = t.b, t.b = e.next, e.next = null), t.b || (t.f = null), e }

                function Oe(t, e, n, i) { if (n == ve && e.b && !e.c)
                        for (; t && t.g; t = t.c) t.g = !1; if (e.a) e.a.c = null, Ce(e, n, i);
                    else try { e.c ? e.g.call(e.f) : Ce(e, n, i) } catch (t) { Re.call(null, t) }
                    L(ge, e) }

                function Ce(t, e, n) { e == pe ? t.g.call(t.f, n) : t.b && t.b.call(t.f, n) }
                fe.prototype.then = function(t, e, n) { return Ae(this, v(t) ? t : null, v(e) ? e : null, n) }, fe.prototype.$goog_Thenable = !0, (t = fe.prototype).oa = function(t, e) { return (t = be(t, t, e)).c = !0, Ee(this, t), this }, t.o = function(t, e) { return Ae(this, null, t, e) }, t.cancel = function(t) { var e;
                    this.a == de && (e = new De(t), ue(function() {! function t(e, n) { if (e.a == de)
                                if (e.c) { var i = e.c; if (i.b) { for (var r = 0, o = null, a = null, s = i.b; s && (s.c || (r++, !((o = s.a == e ? s : o) && 1 < r))); s = s.next) o || (a = s);
                                        o && (i.a == de && 1 == r ? t(i, n) : (a ? ((r = a).next == i.f && (i.f = r), r.next = r.next.next) : _e(i), Oe(i, o, ve, n))) }
                                    e.c = null } else ke(e, ve, n) }(this, e) }, this)) }, t.$c = function(t) { this.a = de, ke(this, pe, t) }, t.ad = function(t) { this.a = de, ke(this, ve, t) }, t.gc = function() { for (var t; t = _e(this);) Oe(this, t, this.a, this.i);
                    this.h = !1 }; var Re = se;

                function De(t) { C.call(this, t) }

                function Pe() { this.xa = this.xa, this.pa = this.pa }
                w(De, C); var Le = 0;

                function xe(t) { t.xa || (t.xa = !0, t.Da(), 0 == Le) || (t = t, Object.prototype.hasOwnProperty.call(t, n) && t[n] || (t[n] = ++i)) }
                Pe.prototype.xa = !(De.prototype.name = "cancel"), Pe.prototype.Da = function() { if (this.pa)
                        for (; this.pa.length;) this.pa.shift()() }; var Me = Object.freeze || function(t) { return t },
                    je = !Ht || 9 <= Number(Zt),
                    Ue = Ht && !$t("9"),
                    Ve = function() { if (!l.addEventListener || !Object.defineProperty) return !1; var t = !1,
                            e = Object.defineProperty({}, "passive", { get: function() { t = !0 } }); try { l.addEventListener("test", a, e), l.removeEventListener("test", a, e) } catch (t) {} return t }();

                function Fe(t, e) { this.type = t, this.b = this.target = e, this.defaultPrevented = !1 }

                function qe(t, e) { if (Fe.call(this, t ? t.type : ""), this.relatedTarget = this.b = this.target = null, this.button = this.screenY = this.screenX = this.clientY = this.clientX = 0, this.key = "", this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1, this.pointerId = 0, this.pointerType = "", this.a = null, t) { var n = this.type = t.type,
                            i = t.changedTouches && t.changedTouches.length ? t.changedTouches[0] : null; if (this.target = t.target || t.srcElement, this.b = e, e = t.relatedTarget) { if (Bt) { t: { try { Vt(e.nodeName); var r = !0; break t } catch (t) {}
                                    r = !1 }
                                r || (e = null) } } else "mouseover" == n ? e = t.fromElement : "mouseout" == n && (e = t.toElement);
                        this.relatedTarget = e, i ? (this.clientX = void 0 !== i.clientX ? i.clientX : i.pageX, this.clientY = void 0 !== i.clientY ? i.clientY : i.pageY, this.screenX = i.screenX || 0, this.screenY = i.screenY || 0) : (this.clientX = void 0 !== t.clientX ? t.clientX : t.pageX, this.clientY = void 0 !== t.clientY ? t.clientY : t.pageY, this.screenX = t.screenX || 0, this.screenY = t.screenY || 0), this.button = t.button, this.key = t.key || "", this.ctrlKey = t.ctrlKey, this.altKey = t.altKey, this.shiftKey = t.shiftKey, this.metaKey = t.metaKey, this.pointerId = t.pointerId || 0, this.pointerType = "string" == typeof t.pointerType ? t.pointerType : He[t.pointerType] || "", (this.a = t).defaultPrevented && this.preventDefault() } }
                Fe.prototype.preventDefault = function() { this.defaultPrevented = !0 }, w(qe, Fe); var He = Me({ 2: "touch", 3: "pen", 4: "mouse" });
                qe.prototype.preventDefault = function() { qe.ab.preventDefault.call(this); var t = this.a; if (t.preventDefault) t.preventDefault();
                    else if (t.returnValue = !1, Ue) try {
                        (t.ctrlKey || 112 <= t.keyCode && t.keyCode <= 123) && (t.keyCode = -1) } catch (t) {} }, qe.prototype.g = function() { return this.a }; var Ke = "closure_listenable_" + (1e6 * Math.random() | 0),
                    Ge = 0;

                function Be(t, e, n, i, r) { this.listener = t, this.proxy = null, this.src = e, this.type = n, this.capture = !!i, this.Va = r, this.key = ++Ge, this.va = this.Pa = !1 }

                function We(t) { t.va = !0, t.listener = null, t.proxy = null, t.src = null, t.Va = null }

                function Xe(t) { this.src = t, this.a = {}, this.b = 0 }

                function Je(t, e) { var n = e.type;
                    n in t.a && G(t.a[n], e) && (We(e), 0 == t.a[n].length && (delete t.a[n], t.b--)) }

                function Ye(t, e, n, i) { for (var r = 0; r < t.length; ++r) { var o = t[r]; if (!o.va && o.listener == e && o.capture == !!n && o.Va == i) return r } return -1 }
                Xe.prototype.add = function(t, e, n, i, r) { var o = t.toString();
                    (t = this.a[o]) || (t = this.a[o] = [], this.b++); var a = Ye(t, e, i, r); return -1 < a ? (e = t[a], n || (e.Pa = !1)) : ((e = new Be(e, this.src, o, !!i, r)).Pa = n, t.push(e)), e }; var ze = "closure_lm_" + (1e6 * Math.random() | 0),
                    $e = {};

                function Ze(t, e, n, i, r) { if (i && i.once) tn(t, e, n, i, r);
                    else if (Array.isArray(e))
                        for (var o = 0; o < e.length; o++) Ze(t, e[o], n, i, r);
                    else n = hn(n), t && t[Ke] ? fn(t, e, n, m(i) ? !!i.capture : !!i, r) : Qe(t, e, n, !1, i, r) }

                function Qe(t, e, n, i, r, o) { if (!e) throw Error("Invalid event type"); var a, s, u = m(r) ? !!r.capture : !!r,
                        c = un(t); if (c || (t[ze] = c = new Xe(t)), !(n = c.add(e, n, i, u, o)).proxy)
                        if (a = sn, i = s = je ? function(t) { return a.call(s.src, s.listener, t) } : function(t) { if (!(t = a.call(s.src, s.listener, t))) return t }, (n.proxy = i).src = t, i.listener = n, t.addEventListener) void 0 === (r = !Ve ? u : r) && (r = !1), t.addEventListener(e.toString(), i, r);
                        else if (t.attachEvent) t.attachEvent(rn(e.toString()), i);
                    else { if (!t.addListener || !t.removeListener) throw Error("addEventListener and attachEvent are unavailable.");
                        t.addListener(i) } }

                function tn(t, e, n, i, r) { if (Array.isArray(e))
                        for (var o = 0; o < e.length; o++) tn(t, e[o], n, i, r);
                    else n = hn(n), t && t[Ke] ? dn(t, e, n, m(i) ? !!i.capture : !!i, r) : Qe(t, e, n, !0, i, r) }

                function en(t, e, n, i, r) { if (Array.isArray(e))
                        for (var o = 0; o < e.length; o++) en(t, e[o], n, i, r);
                    else i = m(i) ? !!i.capture : !!i, n = hn(n), t && t[Ke] ? (t = t.v, (e = String(e).toString()) in t.a && (-1 < (n = Ye(o = t.a[e], n, i, r)) && (We(o[n]), Array.prototype.splice.call(o, n, 1), 0 == o.length && (delete t.a[e], t.b--)))) : (t = t && un(t)) && (e = t.a[e.toString()], (n = (t = -1) < (t = e ? Ye(e, n, i, r) : t) ? e[t] : null) && nn(n)) }

                function nn(t) { var e, n, i; "number" != typeof t && t && !t.va && ((e = t.src) && e[Ke] ? Je(e.v, t) : (n = t.type, i = t.proxy, e.removeEventListener ? e.removeEventListener(n, i, t.capture) : e.detachEvent ? e.detachEvent(rn(n), i) : e.addListener && e.removeListener && e.removeListener(i), (n = un(e)) ? (Je(n, t), 0 == n.b && (n.src = null, e[ze] = null)) : We(t))) }

                function rn(t) { return t in $e ? $e[t] : $e[t] = "on" + t }

                function on(t, e, n, i) { var r = !0; if ((t = un(t)) && (e = t.a[e.toString()]))
                        for (e = e.concat(), t = 0; t < e.length; t++) { var o = e[t];
                            o && o.capture == n && !o.va && (o = an(o, i), r = r && !1 !== o) }
                    return r }

                function an(t, e) { var n = t.listener,
                        i = t.Va || t.src; return t.Pa && nn(t), n.call(i, e) }

                function sn(t, e) { if (t.va) return !0; if (je) return an(t, new qe(e, this)); if (!e) t: { e = ["window", "event"]; for (var n = l, i = 0; i < e.length; i++)
                            if (null == (n = n[e[i]])) { e = null; break t }
                        e = n }
                    if (e = new qe(i = e, this), n = !0, !(i.keyCode < 0 || null != i.returnValue)) { t: { var r = !1; if (0 == i.keyCode) try { i.keyCode = -1; break t } catch (t) { r = !0 }!r && null != i.returnValue || (i.returnValue = !0) } for (i = [], r = e.b; r; r = r.parentNode) i.push(r); for (t = t.type, r = i.length - 1; 0 <= r; r--) { e.b = i[r]; var o = on(i[r], t, !0, e),
                                n = n && o } for (r = 0; r < i.length; r++) e.b = i[r], o = on(i[r], t, !1, e), n = n && o } return n }

                function un(t) { return (t = t[ze]) instanceof Xe ? t : null } var cn = "__closure_events_fn_" + (1e9 * Math.random() >>> 0);

                function hn(e) { return v(e) ? e : (e[cn] || (e[cn] = function(t) { return e.handleEvent(t) }), e[cn]) }

                function ln() { Pe.call(this), this.v = new Xe(this), (this.ac = this).gb = null }

                function fn(t, e, n, i, r) { t.v.add(String(e), n, !1, i, r) }

                function dn(t, e, n, i, r) { t.v.add(String(e), n, !0, i, r) }

                function pn(t, e, n, i) { if (!(e = t.v.a[String(e)])) return !0;
                    e = e.concat(); for (var r = !0, o = 0; o < e.length; ++o) { var a, s, u = e[o];
                        u && !u.va && u.capture == n && (a = u.listener, s = u.Va || u.src, u.Pa && Je(t.v, u), r = !1 !== a.call(s, i) && r) } return r && !i.defaultPrevented }

                function vn(t, e, n) { if (v(t)) n && (t = b(t, n));
                    else { if (!t || "function" != typeof t.handleEvent) throw Error("Invalid listener argument");
                        t = b(t.handleEvent, t) } return 2147483647 < Number(e) ? -1 : l.setTimeout(t, e || 0) }

                function mn(n) { var i = null; return new fe(function(t, e) {-1 == (i = vn(function() { t(void 0) }, n)) && e(Error("Failed to schedule timer.")) }).o(function(t) { throw l.clearTimeout(i), t }) }

                function gn(t) { if (t.W && "function" == typeof t.W) return t.W(); if ("string" == typeof t) return t.split(""); if (p(t)) { for (var e = [], n = t.length, i = 0; i < n; i++) e.push(t[i]); return e } for (i in e = [], n = 0, t) e[n++] = t[i]; return e }

                function bn(t) { if (t.Y && "function" == typeof t.Y) return t.Y(); if (!t.W || "function" != typeof t.W) { if (p(t) || "string" == typeof t) { var e = [];
                            t = t.length; for (var n = 0; n < t; n++) e.push(n); return e } for (var i in e = [], n = 0, t) e[n++] = i; return e } }

                function yn(t, e) { this.b = {}, this.a = [], this.c = 0; var n = arguments.length; if (1 < n) { if (n % 2) throw Error("Uneven number of arguments"); for (var i = 0; i < n; i += 2) this.set(arguments[i], arguments[i + 1]) } else if (t)
                        if (t instanceof yn)
                            for (n = t.Y(), i = 0; i < n.length; i++) this.set(n[i], t.get(n[i]));
                        else
                            for (i in t) this.set(i, t[i]) }

                function wn(t) { if (t.c != t.a.length) { for (var e = 0, n = 0; e < t.a.length;) { var i = t.a[e];
                            In(t.b, i) && (t.a[n++] = i), e++ }
                        t.a.length = n } if (t.c != t.a.length) { for (var r = {}, n = e = 0; e < t.a.length;) In(r, i = t.a[e]) || (r[t.a[n++] = i] = 1), e++;
                        t.a.length = n } }

                function In(t, e) { return Object.prototype.hasOwnProperty.call(t, e) }
                w(ln, Pe), ln.prototype[Ke] = !0, ln.prototype.addEventListener = function(t, e, n, i) { Ze(this, t, e, n, i) }, ln.prototype.removeEventListener = function(t, e, n, i) { en(this, t, e, n, i) }, ln.prototype.dispatchEvent = function(t) { var e; if (n = this.gb)
                        for (e = []; n; n = n.gb) e.push(n); var n = this.ac,
                        i = t.type || t; if ("string" == typeof t ? t = new Fe(t, n) : t instanceof Fe ? t.target = t.target || n : (a = t, lt(t = new Fe(i, n), a)), a = !0, e)
                        for (var r = e.length - 1; 0 <= r; r--) var o = t.b = e[r],
                            a = pn(o, i, !0, t) && a; if (a = pn(o = t.b = n, i, !0, t) && a, a = pn(o, i, !1, t) && a, e)
                        for (r = 0; r < e.length; r++) a = pn(o = t.b = e[r], i, !1, t) && a; return a }, ln.prototype.Da = function() { if (ln.ab.Da.call(this), this.v) { var t, e = this.v; for (t in e.a) { for (var n = e.a[t], i = 0; i < n.length; i++) We(n[i]);
                            delete e.a[t], e.b-- } }
                    this.gb = null }, (t = yn.prototype).W = function() { wn(this); for (var t = [], e = 0; e < this.a.length; e++) t.push(this.b[this.a[e]]); return t }, t.Y = function() { return wn(this), this.a.concat() }, t.clear = function() { this.b = {}, this.c = this.a.length = 0 }, t.get = function(t, e) { return In(this.b, t) ? this.b[t] : e }, t.set = function(t, e) { In(this.b, t) || (this.c++, this.a.push(t)), this.b[t] = e }, t.forEach = function(t, e) { for (var n = this.Y(), i = 0; i < n.length; i++) { var r = n[i],
                            o = this.get(r);
                        t.call(e, o, r, this) } }; var Tn = /^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;

                function En(t, e) { var n;
                    this.a = this.l = this.c = "", this.g = null, this.h = this.f = "", this.i = !1, t instanceof En ? (this.i = void 0 !== e ? e : t.i, An(this, t.c), this.l = t.l, this.a = t.a, kn(this, t.g), this.f = t.f, Sn(this, Bn(t.b)), this.h = t.h) : t && (n = String(t).match(Tn)) ? (this.i = !!e, An(this, n[1] || "", !0), this.l = Rn(n[2] || ""), this.a = Rn(n[3] || "", !0), kn(this, n[4]), this.f = Rn(n[5] || "", !0), Sn(this, n[6] || "", !0), this.h = Rn(n[7] || "")) : (this.i = !!e, this.b = new Vn(null, this.i)) }

                function An(t, e, n) { t.c = n ? Rn(e, !0) : e, t.c && (t.c = t.c.replace(/:$/, "")) }

                function kn(t, e) { if (e) { if (e = Number(e), isNaN(e) || e < 0) throw Error("Bad port number " + e);
                        t.g = e } else t.g = null }

                function Sn(t, e, n) { var i, r;
                    e instanceof Vn ? (t.b = e, i = t.b, (r = t.i) && !i.f && (Fn(i), i.c = null, i.a.forEach(function(t, e) { var n = e.toLowerCase();
                        e != n && (Hn(this, e), Gn(this, n, t)) }, i)), i.f = r) : (n || (e = Dn(e, jn)), t.b = new Vn(e, t.i)) }

                function Nn(t, e, n) { t.b.set(e, n) }

                function _n(t, e) { return t.b.get(e) }

                function On(t) { return t instanceof En ? new En(t) : new En(t, void 0) }

                function Cn(t, e, n, i) { var r = new En(null, void 0); return t && An(r, t), e && (r.a = e), n && kn(r, n), i && (r.f = i), r }

                function Rn(t, e) { return t ? e ? decodeURI(t.replace(/%25/g, "%2525")) : decodeURIComponent(t) : "" }

                function Dn(t, e, n) { return "string" == typeof t ? (t = encodeURI(t).replace(e, Pn), t = n ? t.replace(/%25([0-9a-fA-F]{2})/g, "%$1") : t) : null }

                function Pn(t) { return "%" + ((t = t.charCodeAt(0)) >> 4 & 15).toString(16) + (15 & t).toString(16) }
                En.prototype.toString = function() { var t = [],
                        e = this.c;
                    e && t.push(Dn(e, Ln, !0), ":"); var n = this.a; return !n && "file" != e || (t.push("//"), (e = this.l) && t.push(Dn(e, Ln, !0), "@"), t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g, "%$1")), null != (n = this.g) && t.push(":", String(n))), (n = this.f) && (this.a && "/" != n.charAt(0) && t.push("/"), t.push(Dn(n, "/" == n.charAt(0) ? Mn : xn, !0))), (n = this.b.toString()) && t.push("?", n), (n = this.h) && t.push("#", Dn(n, Un)), t.join("") }, En.prototype.resolve = function(t) { var e = new En(this),
                        n = !!t.c;
                    n ? An(e, t.c) : n = !!t.l, n ? e.l = t.l : n = !!t.a, n ? e.a = t.a : n = null != t.g; var i = t.f; if (n) kn(e, t.g);
                    else if (n = !!t.f)
                        if ("/" != i.charAt(0) && (this.a && !this.f ? i = "/" + i : -1 != (r = e.f.lastIndexOf("/")) && (i = e.f.substr(0, r + 1) + i)), ".." == (r = i) || "." == r) i = "";
                        else if (it(r, "./") || it(r, "/.")) { for (var i = 0 == r.lastIndexOf("/", 0), r = r.split("/"), o = [], a = 0; a < r.length;) { var s = r[a++]; "." == s ? i && a == r.length && o.push("") : ".." == s ? ((1 < o.length || 1 == o.length && "" != o[0]) && o.pop(), i && a == r.length && o.push("")) : (o.push(s), i = !0) }
                        i = o.join("/") } else i = r; return n ? e.f = i : n = "" !== t.b.toString(), n ? Sn(e, Bn(t.b)) : n = !!t.h, n && (e.h = t.h), e }; var Ln = /[#\/\?@]/g,
                    xn = /[#\?:]/g,
                    Mn = /[#\?]/g,
                    jn = /[#\?@]/g,
                    Un = /#/g;

                function Vn(t, e) { this.b = this.a = null, this.c = t || null, this.f = !!e }

                function Fn(n) { n.a || (n.a = new yn, n.b = 0, n.c && function(t, e) { if (t) { t = t.split("&"); for (var n = 0; n < t.length; n++) { var i, r = t[n].indexOf("="),
                                    o = null;
                                0 <= r ? (i = t[n].substring(0, r), o = t[n].substring(r + 1)) : i = t[n], e(i, o ? decodeURIComponent(o.replace(/\+/g, " ")) : "") } } }(n.c, function(t, e) { n.add(decodeURIComponent(t.replace(/\+/g, " ")), e) })) }

                function qn(t) { var e = bn(t); if (void 0 === e) throw Error("Keys are undefined"); var n = new Vn(null, void 0);
                    t = gn(t); for (var i = 0; i < e.length; i++) { var r = e[i],
                            o = t[i];
                        Array.isArray(o) ? Gn(n, r, o) : n.add(r, o) } return n }

                function Hn(t, e) { Fn(t), e = Wn(t, e), In(t.a.b, e) && (t.c = null, t.b -= t.a.get(e).length, In((t = t.a).b, e) && (delete t.b[e], t.c--, t.a.length > 2 * t.c && wn(t))) }

                function Kn(t, e) { return Fn(t), e = Wn(t, e), In(t.a.b, e) }

                function Gn(t, e, n) { Hn(t, e), 0 < n.length && (t.c = null, t.a.set(Wn(t, e), X(n)), t.b += n.length) }

                function Bn(t) { var e = new Vn; return e.c = t.c, t.a && (e.a = new yn(t.a), e.b = t.b), e }

                function Wn(t, e) { return e = String(e), e = t.f ? e.toLowerCase() : e }

                function Xn(t) { var e = []; return function t(e, n, i) { if (null == n) i.push("null");
                        else { if ("object" == typeof n) { if (Array.isArray(n)) { var r = n;
                                    n = r.length, i.push("["); for (var o = "", a = 0; a < n; a++) i.push(o), t(e, r[a], i), o = ","; return void i.push("]") } if (!(n instanceof String || n instanceof Number || n instanceof Boolean)) { for (r in i.push("{"), o = "", n) Object.prototype.hasOwnProperty.call(n, r) && (a = n[r], "function" != typeof a && (i.push(o), $n(r, i), i.push(":"), t(e, a, i), o = ",")); return void i.push("}") }
                                n = n.valueOf() } switch (typeof n) {
                                case "string":
                                    $n(n, i); break;
                                case "number":
                                    i.push(isFinite(n) && !isNaN(n) ? String(n) : "null"); break;
                                case "boolean":
                                    i.push(String(n)); break;
                                case "function":
                                    i.push("null"); break;
                                default:
                                    throw Error("Unknown type: " + typeof n) } } }(new Jn, t, e), e.join("") }

                function Jn() {}(t = Vn.prototype).add = function(t, e) { Fn(this), this.c = null, t = Wn(this, t); var n = this.a.get(t); return n || this.a.set(t, n = []), n.push(e), this.b += 1, this }, t.clear = function() { this.a = this.c = null, this.b = 0 }, t.forEach = function(n, i) { Fn(this), this.a.forEach(function(t, e) { V(t, function(t) { n.call(i, t, e, this) }, this) }, this) }, t.Y = function() { Fn(this); for (var t = this.a.W(), e = this.a.Y(), n = [], i = 0; i < e.length; i++)
                        for (var r = t[i], o = 0; o < r.length; o++) n.push(e[i]); return n }, t.W = function(t) { Fn(this); var e = []; if ("string" == typeof t) Kn(this, t) && (e = W(e, this.a.get(Wn(this, t))));
                    else { t = this.a.W(); for (var n = 0; n < t.length; n++) e = W(e, t[n]) } return e }, t.set = function(t, e) { return Fn(this), this.c = null, Kn(this, t = Wn(this, t)) && (this.b -= this.a.get(t).length), this.a.set(t, [e]), this.b += 1, this }, t.get = function(t, e) { return t && 0 < (t = this.W(t)).length ? String(t[0]) : e }, t.toString = function() { if (this.c) return this.c; if (!this.a) return ""; for (var t = [], e = this.a.Y(), n = 0; n < e.length; n++)
                        for (var i = e[n], r = encodeURIComponent(String(i)), i = this.W(i), o = 0; o < i.length; o++) { var a = r; "" !== i[o] && (a += "=" + encodeURIComponent(String(i[o]))), t.push(a) }
                    return this.c = t.join("&") }; var Yn = { '"': '\\"', "\\": "\\\\", "/": "\\/", "\b": "\\b", "\f": "\\f", "\n": "\\n", "\r": "\\r", "\t": "\\t", "\v": "\\u000b" },
                    zn = /\uffff/.test("\uffff") ? /[\\"\x00-\x1f\x7f-\uffff]/g : /[\\"\x00-\x1f\x7f-\xff]/g;

                function $n(t, e) { e.push('"', t.replace(zn, function(t) { var e = Yn[t]; return e || (e = "\\u" + (65536 | t.charCodeAt(0)).toString(16).substr(1), Yn[t] = e), e }), '"') }

                function Zn() { var t = gi(); return Ht && Zt && 11 == Zt || /Edge\/\d+/.test(t) }

                function Qn() { return l.window && l.window.location.href || self && self.location && self.location.href || "" }

                function ti(t, e) { e = e || l.window; var n = "about:blank";
                    t && (n = St(Ct(t) || Pt)), e.location.href = n }

                function ei(t) { return !!((t = (t || gi()).toLowerCase()).match(/android/) || t.match(/webos/) || t.match(/iphone|ipad|ipod/) || t.match(/blackberry/) || t.match(/windows phone/) || t.match(/iemobile/)) }

                function ni(t) { t = t || l.window; try { t.close() } catch (t) {} }

                function ii(t, e, n) { var i = Math.floor(1e9 * Math.random()).toString();
                    e = e || 500, n = n || 600; var r = (window.screen.availHeight - n) / 2,
                        o = (window.screen.availWidth - e) / 2; for (a in e = { width: e, height: n, top: 0 < r ? r : 0, left: 0 < o ? o : 0, location: !0, resizable: !0, statusbar: !0, toolbar: !1 }, n = gi().toLowerCase(), i && (e.target = i, it(n, "crios/") && (e.target = "_blank")), pi(gi()) == fi && (t = t || "http://localhost", e.scrollbars = !0), n = t || "", (t = e) || (t = {}), i = window, e = n instanceof kt ? n : Ct(void 0 !== n.href ? n.href : String(n)) || Pt, n = t.target || n.target, r = [], t) switch (a) {
                        case "width":
                        case "height":
                        case "top":
                        case "left":
                            r.push(a + "=" + t[a]); break;
                        case "target":
                        case "noopener":
                        case "noreferrer":
                            break;
                        default:
                            r.push(a + "=" + (t[a] ? 1 : 0)) }
                    var a = r.join(","); if ((at("iPhone") && !at("iPod") && !at("iPad") || at("iPad") || at("iPod")) && i.navigator && i.navigator.standalone && n && "_self" != n ? (ft(a = ae(document, "A"), "HTMLAnchorElement"), e = e instanceof kt ? e : Rt(e), a.href = St(e), a.setAttribute("target", n), t.noreferrer && a.setAttribute("rel", "noreferrer"), (t = document.createEvent("MouseEvent")).initMouseEvent("click", !0, !0, i, 1), a.dispatchEvent(t), a = {}) : t.noreferrer ? (a = Mt("", i, n, a), t = St(e), a && (Gt && it(t, ";") && (t = "'" + t.replace(/'/g, "%27") + "'"), a.opener = null, t = '<meta name="referrer" content="no-referrer"><meta http-equiv="refresh" content="0; url=' + Ut(t) + '">', t = new Lt(t = (i = bt()) ? i.createHTML(t) : t, 0, xt), i = a.document) && (i.write((o = t) instanceof Lt && o.constructor === Lt ? o.a : (D("expected object of type SafeHtml, got '" + o + "' of type " + d(o)), "type_error:SafeHtml")), i.close())) : (a = Mt(e, i, n, a)) && t.noopener && (a.opener = null), a) try { a.focus() } catch (t) {}
                    return a } var ri = /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,
                    oi = /^[^@]+@[^@]+$/;

                function ai() { var e = null; return new fe(function(t) { "complete" == l.document.readyState ? t() : (e = function() { t() }, tn(window, "load", e)) }).o(function(t) { throw en(window, "load", e), t }) }

                function si(t) { return t = t || gi(), !("file:" !== Ti() && "ionic:" !== Ti() || !t.toLowerCase().match(/iphone|ipad|ipod|android/)) }

                function ui() { var t = l.window; try { return t && t != t.top } catch (t) { return } }

                function ci() { return void 0 !== l.WorkerGlobalScope && "function" == typeof l.importScripts }

                function hi() { return zl.default.INTERNAL.hasOwnProperty("reactNative") ? "ReactNative" : zl.default.INTERNAL.hasOwnProperty("node") ? "Node" : ci() ? "Worker" : "Browser" }

                function li() { var t = hi(); return "ReactNative" === t || "Node" === t } var fi = "Firefox",
                    di = "Chrome";

                function pi(t) { var e = t.toLowerCase(); return it(e, "opera/") || it(e, "opr/") || it(e, "opios/") ? "Opera" : it(e, "iemobile") ? "IEMobile" : it(e, "msie") || it(e, "trident/") ? "IE" : it(e, "edge/") ? "Edge" : it(e, "firefox/") ? fi : it(e, "silk/") ? "Silk" : it(e, "blackberry") ? "Blackberry" : it(e, "webos") ? "Webos" : !it(e, "safari/") || it(e, "chrome/") || it(e, "crios/") || it(e, "android") ? !it(e, "chrome/") && !it(e, "crios/") || it(e, "edge/") ? it(e, "android") ? "Android" : (t = t.match(/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/)) && 2 == t.length ? t[1] : "Other" : di : "Safari" } var vi = { md: "FirebaseCore-web", od: "FirebaseUI-web" };

                function mi(t, e) { e = e || []; var n, i = [],
                        r = {}; for (n in vi) r[vi[n]] = !0; for (n = 0; n < e.length; n++) void 0 !== r[e[n]] && (delete r[e[n]], i.push(e[n])); return i.sort(), (e = i).length || (e = ["FirebaseCore-web"]), "Browser" === (i = hi()) ? i = pi(r = gi()) : "Worker" === i && (i = pi(r = gi()) + "-" + i), i + "/JsCore/" + t + "/" + e.join(",") }

                function gi() { return l.navigator && l.navigator.userAgent || "" }

                function bi(t, e) { t = t.split("."), e = e || l; for (var n = 0; n < t.length && "object" == typeof e && null != e; n++) e = e[t[n]]; return e = n != t.length ? void 0 : e }

                function yi() { try { var t = l.localStorage,
                            e = Ni(); if (t) return t.setItem(e, "1"), t.removeItem(e), !Zn() || !!l.indexedDB } catch (t) { return ci() && !!l.indexedDB } return !1 }

                function wi() { return (Ii() || "chrome-extension:" === Ti() || si()) && !li() && yi() && !ci() }

                function Ii() { return "http:" === Ti() || "https:" === Ti() }

                function Ti() { return l.location && l.location.protocol || null }

                function Ei(t) { return !ei(t = t || gi()) && pi(t) != fi }

                function Ai(t) { return void 0 === t ? null : Xn(t) }

                function ki(t) { var e, n = {}; for (e in t) t.hasOwnProperty(e) && null !== t[e] && void 0 !== t[e] && (n[e] = t[e]); return n }

                function Si(t) { if (null !== t) return JSON.parse(t) }

                function Ni(t) { return t || Math.floor(1e9 * Math.random()).toString() }

                function _i(t) { return "Safari" != pi(t = t || gi()) && !t.toLowerCase().match(/iphone|ipad|ipod/) }

                function Oi() { var t = l.___jsl; if (t && t.H)
                        for (var e in t.H)
                            if (t.H[e].r = t.H[e].r || [], t.H[e].L = t.H[e].L || [], t.H[e].r = t.H[e].L.concat(), t.CP)
                                for (var n = 0; n < t.CP.length; n++) t.CP[n] = null }

                function Ci(t, e) { if (e < t) throw Error("Short delay should be less than long delay!");
                    this.a = t, this.c = e, t = gi(), e = hi(), this.b = ei(t) || "ReactNative" === e }

                function Ri() { var t = l.document; return !t || void 0 === t.visibilityState || "visible" == t.visibilityState }

                function Di() { var e = l.document,
                        n = null; return Ri() || !e ? ye() : new fe(function(t) { n = function() { Ri() && (e.removeEventListener("visibilitychange", n, !1), t()) }, e.addEventListener("visibilitychange", n, !1) }).o(function(t) { throw e.removeEventListener("visibilitychange", n, !1), t }) }

                function Pi(t) { try { var e = new Date(parseInt(t, 10)); if (!isNaN(e.getTime()) && !/[^0-9]/.test(t)) return e.toUTCString() } catch (t) {} return null }

                function Li() { return bi("fireauth.oauthhelper", l) || bi("fireauth.iframe", l) }
                Ci.prototype.get = function() { var t = l.navigator; return !t || "boolean" != typeof t.onLine || !Ii() && "chrome-extension:" !== Ti() && void 0 === t.connection || t.onLine ? this.b ? this.c : this.a : Math.min(5e3, this.a) }; var xi, Mi = {};

                function ji(t) { Mi[t] || (Mi[t] = !0, "undefined" != typeof console && "function" == typeof console.warn && console.warn(t)) } try { var Ui = {};
                    Object.defineProperty(Ui, "abcd", { configurable: !0, enumerable: !0, value: 1 }), Object.defineProperty(Ui, "abcd", { configurable: !0, enumerable: !0, value: 2 }), xi = 2 == Ui.abcd } catch (t) { xi = !1 }

                function Vi(t, e, n) { xi ? Object.defineProperty(t, e, { configurable: !0, enumerable: !0, value: n }) : t[e] = n }

                function Fi(t, e) { if (e)
                        for (var n in e) e.hasOwnProperty(n) && Vi(t, n, e[n]) }

                function qi(t) { var e = {}; return Fi(e, t), e }

                function Hi(t) { var e = t; if ("object" == typeof t && null != t)
                        for (var n in e = "length" in t ? [] : {}, t) Vi(e, n, Hi(t[n])); return e }

                function Ki(t) { var e = t && (t[Ji] ? "phone" : null); if (!(e && t && t[Xi])) throw new T("internal-error", "Internal assert: invalid MultiFactorInfo object");
                    Vi(this, "uid", t[Xi]), Vi(this, "displayName", t[Bi] || null); var n = null;
                    Vi(this, "enrollmentTime", n = t[Wi] ? new Date(t[Wi]).toUTCString() : n), Vi(this, "factorId", e) }

                function Gi(t) { try { var e = new Yi(t) } catch (t) { e = null } return e }
                Ki.prototype.w = function() { return { uid: this.uid, displayName: this.displayName, factorId: this.factorId, enrollmentTime: this.enrollmentTime } }; var Bi = "displayName",
                    Wi = "enrolledAt",
                    Xi = "mfaEnrollmentId",
                    Ji = "phoneInfo";

                function Yi(t) { Ki.call(this, t), Vi(this, "phoneNumber", t[Ji]) }

                function zi(t) { var e = {},
                        n = t[tr],
                        i = t[nr],
                        r = t[ir]; if (t = Gi(t[er]), !r || r != Zi && r != Qi && !n || r == Qi && !i || r == $i && !t) throw Error("Invalid checkActionCode response!");
                    r == Qi ? (e[or] = n || null, e[sr] = n || null, e[rr] = i) : (e[or] = i || null, e[sr] = i || null, e[rr] = n || null), e[ar] = t || null, Vi(this, cr, r), Vi(this, ur, Hi(e)) }
                w(Yi, Ki), Yi.prototype.w = function() { var t = Yi.ab.w.call(this); return t.phoneNumber = this.phoneNumber, t }; var $i = "REVERT_SECOND_FACTOR_ADDITION",
                    Zi = "EMAIL_SIGNIN",
                    Qi = "VERIFY_AND_CHANGE_EMAIL",
                    tr = "email",
                    er = "mfaInfo",
                    nr = "newEmail",
                    ir = "requestType",
                    rr = "email",
                    or = "fromEmail",
                    ar = "multiFactorInfo",
                    sr = "previousEmail",
                    ur = "data",
                    cr = "operation";

                function hr(t) { var e = _n(t = On(t), lr) || null,
                        n = _n(t, fr) || null,
                        i = (i = _n(t, vr) || null) && gr[i] || null; if (!e || !n || !i) throw new T("argument-error", lr + ", " + fr + "and " + vr + " are required in a valid action code URL.");
                    Fi(this, { apiKey: e, operation: i, code: n, continueUrl: _n(t, dr) || null, languageCode: _n(t, pr) || null, tenantId: _n(t, mr) || null }) } var lr = "apiKey",
                    fr = "oobCode",
                    dr = "continueUrl",
                    pr = "languageCode",
                    vr = "mode",
                    mr = "tenantId",
                    gr = { recoverEmail: "RECOVER_EMAIL", resetPassword: "PASSWORD_RESET", revertSecondFactorAddition: $i, signIn: Zi, verifyAndChangeEmail: Qi, verifyEmail: "VERIFY_EMAIL" };

                function br(t) { try { return new hr(t) } catch (t) { return null } }

                function yr(t) { if (void 0 === (e = t[Ar])) throw new T("missing-continue-uri"); if ("string" != typeof e || "string" == typeof e && !e.length) throw new T("invalid-continue-uri"); if (this.h = e, this.b = this.a = null, this.g = !1, (i = t[wr]) && "object" == typeof i) { var e = i[Nr],
                            n = i[kr],
                            i = i[Sr]; if ("string" == typeof e && e.length) { if (this.a = e, void 0 !== n && "boolean" != typeof n) throw new T("argument-error", kr + " property must be a boolean when specified."); if (this.g = !!n, void 0 !== i && ("string" != typeof i || "string" == typeof i && !i.length)) throw new T("argument-error", Sr + " property must be a non empty string when specified.");
                            this.b = i || null } else { if (void 0 !== e) throw new T("argument-error", Nr + " property must be a non empty string when specified."); if (void 0 !== n || void 0 !== i) throw new T("missing-android-pkg-name") } } else if (void 0 !== i) throw new T("argument-error", wr + " property must be a non null object when specified."); if (this.f = null, (e = t[Er]) && "object" == typeof e) { if ("string" == typeof(e = e[_r]) && e.length) this.f = e;
                        else if (void 0 !== e) throw new T("argument-error", _r + " property must be a non empty string when specified.") } else if (void 0 !== e) throw new T("argument-error", Er + " property must be a non null object when specified."); if (void 0 !== (e = t[Tr]) && "boolean" != typeof e) throw new T("argument-error", Tr + " property must be a boolean when specified."); if (this.c = !!e, void 0 !== (t = t[Ir]) && ("string" != typeof t || "string" == typeof t && !t.length)) throw new T("argument-error", Ir + " property must be a non empty string when specified.");
                    this.i = t || null } var wr = "android",
                    Ir = "dynamicLinkDomain",
                    Tr = "handleCodeInApp",
                    Er = "iOS",
                    Ar = "url",
                    kr = "installApp",
                    Sr = "minimumVersion",
                    Nr = "packageName",
                    _r = "bundleId";

                function Or(t) { var e, n = {}; for (e in n.continueUrl = t.h, n.canHandleCodeInApp = t.c, (n.androidPackageName = t.a) && (n.androidMinimumVersion = t.b, n.androidInstallApp = t.g), n.iOSBundleId = t.f, n.dynamicLinkDomain = t.i, n) null === n[e] && delete n[e]; return n } var Cr = null;

                function Rr(t) { var e = []; return function(i, t) {
                        function e(t) { for (; r < i.length;) { var e = i.charAt(r++),
                                    n = Cr[e]; if (null != n) return n; if (!/^[\s\xa0]*$/.test(e)) throw Error("Unknown base64 encoding at char: " + e) } return t }! function() { if (!Cr) { Cr = {}; for (var t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), e = ["+/=", "+/", "-_=", "-_.", "-_"], n = 0; n < 5; n++)
                                    for (var i = t.concat(e[n].split("")), r = 0; r < i.length; r++) { var o = i[r];
                                        void 0 === Cr[o] && (Cr[o] = r) } } }(); for (var r = 0;;) { var n = e(-1),
                                o = e(0),
                                a = e(64),
                                s = e(64); if (64 === s && -1 === n) break;
                            t(n << 2 | o >> 4), 64 != a && (t(o << 4 & 240 | a >> 2), 64 != s && t(a << 6 & 192 | s)) } }(t, function(t) { e.push(t) }), e }

                function Dr(t) { var e = Lr(t); if (!(e && e.sub && e.iss && e.aud && e.exp)) throw Error("Invalid JWT");
                    this.h = t, this.a = e.exp, this.i = e.sub, t = Date.now() / 1e3, this.g = e.iat || (t > this.a ? this.a : t), this.b = e.provider_id || e.firebase && e.firebase.sign_in_provider || null, this.f = e.firebase && e.firebase.tenant || null, this.c = !!e.is_anonymous || "anonymous" == this.b }

                function Pr(t) { try { return new Dr(t) } catch (t) { return null } }

                function Lr(t) { if (!t) return null; if (3 != (t = t.split(".")).length) return null; for (var e = (4 - (t = t[1]).length % 4) % 4, n = 0; n < e; n++) t += "."; try { var i = Rr(t); for (t = [], n = e = 0; e < i.length;) { var r, o, a, s = i[e++];
                            s < 128 ? t[n++] = String.fromCharCode(s) : 191 < s && s < 224 ? (r = i[e++], t[n++] = String.fromCharCode((31 & s) << 6 | 63 & r)) : 239 < s && s < 365 ? (a = ((7 & s) << 18 | (63 & (r = i[e++])) << 12 | (63 & (o = i[e++])) << 6 | 63 & i[e++]) - 65536, t[n++] = String.fromCharCode(55296 + (a >> 10)), t[n++] = String.fromCharCode(56320 + (1023 & a))) : (r = i[e++], o = i[e++], t[n++] = String.fromCharCode((15 & s) << 12 | (63 & r) << 6 | 63 & o)) } return JSON.parse(t.join("")) } catch (t) {} return null }
                Dr.prototype.T = function() { return this.f }, Dr.prototype.l = function() { return this.c }, Dr.prototype.toString = function() { return this.h }; var xr = "oauth_consumer_key oauth_nonce oauth_signature oauth_signature_method oauth_timestamp oauth_token oauth_version".split(" "),
                    Mr = ["client_id", "response_type", "scope", "redirect_uri", "state"],
                    jr = { nd: { Ja: "locale", ua: 700, ta: 600, fa: "facebook.com", Xa: Mr }, pd: { Ja: null, ua: 500, ta: 750, fa: "github.com", Xa: Mr }, qd: { Ja: "hl", ua: 515, ta: 680, fa: "google.com", Xa: Mr }, wd: { Ja: "lang", ua: 485, ta: 705, fa: "twitter.com", Xa: xr }, kd: { Ja: "locale", ua: 640, ta: 600, fa: "apple.com", Xa: [] } };

                function Ur(t) { for (var e in jr)
                        if (jr[e].fa == t) return jr[e];
                    return null }

                function Vr(t) { var e = {};
                    e["facebook.com"] = Gr, e["google.com"] = Wr, e["github.com"] = Br, e["twitter.com"] = Xr; var n = t && t[qr]; try { if (n) return new(e[n] || Kr)(t); if (void 0 !== t[Fr]) return new Hr(t) } catch (t) {} return null } var Fr = "idToken",
                    qr = "providerId";

                function Hr(t) { var e, n = t[qr]; if (n || !t[Fr] || (e = Pr(t[Fr])) && e.b && (n = e.b), !n) throw Error("Invalid additional user info!"); "anonymous" != n && "custom" != n || (n = null), e = !1, void 0 !== t.isNewUser ? e = !!t.isNewUser : "identitytoolkit#SignupNewUserResponse" === t.kind && (e = !0), Vi(this, "providerId", n), Vi(this, "isNewUser", e) }

                function Kr(t) { Hr.call(this, t), Vi(this, "profile", Hi((t = Si(t.rawUserInfo || "{}")) || {})) }

                function Gr(t) { if (Kr.call(this, t), "facebook.com" != this.providerId) throw Error("Invalid provider ID!") }

                function Br(t) { if (Kr.call(this, t), "github.com" != this.providerId) throw Error("Invalid provider ID!");
                    Vi(this, "username", this.profile && this.profile.login || null) }

                function Wr(t) { if (Kr.call(this, t), "google.com" != this.providerId) throw Error("Invalid provider ID!") }

                function Xr(t) { if (Kr.call(this, t), "twitter.com" != this.providerId) throw Error("Invalid provider ID!");
                    Vi(this, "username", t.screenName || null) }

                function Jr(t) { var e = _n(i = On(t), "link"),
                        n = _n(On(e), "link"),
                        i = _n(i, "deep_link_id"); return _n(On(i), "link") || i || n || e || t }

                function Yr(t, e) { if (!t && !e) throw new T("internal-error", "Internal assert: no raw session string available"); if (t && e) throw new T("internal-error", "Internal assert: unable to determine the session type");
                    this.a = t || null, this.b = e || null, this.type = this.a ? zr : $r }
                w(Kr, Hr), w(Gr, Kr), w(Br, Kr), w(Wr, Kr), w(Xr, Kr); var zr = "enroll",
                    $r = "signin";

                function Zr() {}

                function Qr(t, n) { return t.then(function(t) { if (t[Ha]) { var e = Pr(t[Ha]); if (!e || n != e.i) throw new T("user-mismatch"); return t } throw new T("user-mismatch") }).o(function(t) { throw t && t.code && t.code == k + "user-not-found" ? new T("user-mismatch") : t }) }

                function to(t, e) { if (!e) throw new T("internal-error", "failed to construct a credential");
                    this.a = e, Vi(this, "providerId", t), Vi(this, "signInMethod", t) }

                function eo(t) { return { pendingToken: t.a, requestUri: "http://localhost" } }

                function no(t) { if (t && t.providerId && t.signInMethod && 0 == t.providerId.indexOf("saml.") && t.pendingToken) try { return new to(t.providerId, t.pendingToken) } catch (t) {}
                    return null }

                function io(t, e, n) { if (this.a = null, e.idToken || e.accessToken) e.idToken && Vi(this, "idToken", e.idToken), e.accessToken && Vi(this, "accessToken", e.accessToken), e.nonce && !e.pendingToken && Vi(this, "nonce", e.nonce), e.pendingToken && (this.a = e.pendingToken);
                    else { if (!e.oauthToken || !e.oauthTokenSecret) throw new T("internal-error", "failed to construct a credential");
                        Vi(this, "accessToken", e.oauthToken), Vi(this, "secret", e.oauthTokenSecret) }
                    Vi(this, "providerId", t), Vi(this, "signInMethod", n) }

                function ro(t) { var e = {}; return t.idToken && (e.id_token = t.idToken), t.accessToken && (e.access_token = t.accessToken), t.secret && (e.oauth_token_secret = t.secret), e.providerId = t.providerId, t.nonce && !t.a && (e.nonce = t.nonce), e = { postBody: qn(e).toString(), requestUri: "http://localhost" }, t.a && (delete e.postBody, e.pendingToken = t.a), e }

                function oo(t) { if (t && t.providerId && t.signInMethod) { var e = { idToken: t.oauthIdToken, accessToken: t.oauthTokenSecret ? null : t.oauthAccessToken, oauthTokenSecret: t.oauthTokenSecret, oauthToken: t.oauthTokenSecret && t.oauthAccessToken, nonce: t.nonce, pendingToken: t.pendingToken }; try { return new io(t.providerId, e, t.signInMethod) } catch (t) {} } return null }

                function ao(t, e) { this.Qc = e || [], Fi(this, { providerId: t, isOAuthProvider: !0 }), this.Ib = {}, this.pb = (Ur(t) || {}).Ja || null, this.ob = null }

                function so(t) { if ("string" != typeof t || 0 != t.indexOf("saml.")) throw new T("argument-error", 'SAML provider IDs must be prefixed with "saml."');
                    ao.call(this, t, []) }

                function uo(t) { ao.call(this, t, Mr), this.a = [] }

                function co() { uo.call(this, "facebook.com") }

                function ho(t) { if (!t) throw new T("argument-error", "credential failed: expected 1 argument (the OAuth access token)."); var e = t; return m(t) && (e = t.accessToken), (new co).credential({ accessToken: e }) }

                function lo() { uo.call(this, "github.com") }

                function fo(t) { if (!t) throw new T("argument-error", "credential failed: expected 1 argument (the OAuth access token)."); var e = t; return m(t) && (e = t.accessToken), (new lo).credential({ accessToken: e }) }

                function po() { uo.call(this, "google.com"), this.Ca("profile") }

                function vo(t, e) { var n = t; return m(t) && (n = t.idToken, e = t.accessToken), (new po).credential({ idToken: n, accessToken: e }) }

                function mo() { ao.call(this, "twitter.com", xr) }

                function go(t, e) { var n = t; if (!(n = !m(n) ? { oauthToken: t, oauthTokenSecret: e } : n).oauthToken || !n.oauthTokenSecret) throw new T("argument-error", "credential failed: expected 2 arguments (the OAuth access token and secret)."); return new io("twitter.com", n, "twitter.com") }

                function bo(t, e, n) { this.a = t, this.f = e, Vi(this, "providerId", "password"), Vi(this, "signInMethod", n === wo.EMAIL_LINK_SIGN_IN_METHOD ? wo.EMAIL_LINK_SIGN_IN_METHOD : wo.EMAIL_PASSWORD_SIGN_IN_METHOD) }

                function yo(t) { return t && t.email && t.password ? new bo(t.email, t.password, t.signInMethod) : null }

                function wo() { Fi(this, { providerId: "password", isOAuthProvider: !1 }) }

                function Io(t, e) { if (!(e = To(e))) throw new T("argument-error", "Invalid email link!"); return new bo(t, e.code, wo.EMAIL_LINK_SIGN_IN_METHOD) }

                function To(t) { return (t = br(t = Jr(t))) && t.operation === Zi ? t : null }

                function Eo(t) { if (!(t.eb && t.cb || t.La && t.ea)) throw new T("internal-error");
                    this.a = t, Vi(this, "providerId", "phone"), this.fa = "phone", Vi(this, "signInMethod", "phone") }

                function Ao(e) { if (e && "phone" === e.providerId && (e.verificationId && e.verificationCode || e.temporaryProof && e.phoneNumber)) { var n = {}; return V(["verificationId", "verificationCode", "temporaryProof", "phoneNumber"], function(t) { e[t] && (n[t] = e[t]) }), new Eo(n) } return null }

                function ko(t) { return t.a.La && t.a.ea ? { temporaryProof: t.a.La, phoneNumber: t.a.ea } : { sessionInfo: t.a.eb, code: t.a.cb } }

                function So(t) { try { this.a = t || zl.default.auth() } catch (t) { throw new T("argument-error", "Either an instance of firebase.auth.Auth must be passed as an argument to the firebase.auth.PhoneAuthProvider constructor, or the default firebase App instance must be initialized via firebase.initializeApp().") }
                    Fi(this, { providerId: "phone", isOAuthProvider: !1 }) }

                function No(t, e) { if (!t) throw new T("missing-verification-id"); if (!e) throw new T("missing-verification-code"); return new Eo({ eb: t, cb: e }) }

                function _o(t) { if (t.temporaryProof && t.phoneNumber) return new Eo({ La: t.temporaryProof, ea: t.phoneNumber }); var e = t && t.providerId; if (!e || "password" === e) return null; var n = t && t.oauthAccessToken,
                        i = t && t.oauthTokenSecret,
                        r = t && t.nonce,
                        o = t && t.oauthIdToken,
                        a = t && t.pendingToken; try { switch (e) {
                            case "google.com":
                                return vo(o, n);
                            case "facebook.com":
                                return ho(n);
                            case "github.com":
                                return fo(n);
                            case "twitter.com":
                                return go(n, i);
                            default:
                                return n || i || o || a ? a ? 0 == e.indexOf("saml.") ? new to(e, a) : new io(e, { pendingToken: a, idToken: t.oauthIdToken, accessToken: t.oauthAccessToken }, e) : new uo(e).credential({ idToken: o, accessToken: n, rawNonce: r }) : null } } catch (t) { return null } }

                function Oo(t) { if (!t.isOAuthProvider) throw new T("invalid-oauth-provider") }

                function Co(t, e, n, i, r, o, a) { if (this.c = t, this.b = e || null, this.g = n || null, this.f = i || null, this.i = o || null, this.h = a || null, this.a = r || null, !this.g && !this.a) throw new T("invalid-auth-event"); if (this.g && this.a) throw new T("invalid-auth-event"); if (this.g && !this.f) throw new T("invalid-auth-event") }

                function Ro(t) { return (t = t || {}).type ? new Co(t.type, t.eventId, t.urlResponse, t.sessionId, t.error && E(t.error), t.postBody, t.tenantId) : null }

                function Do() { this.b = null, this.a = [] }
                Yr.prototype.Ha = function() { return this.a ? ye(this.a) : ye(this.b) }, Yr.prototype.w = function() { return this.type == zr ? { multiFactorSession: { idToken: this.a } } : { multiFactorSession: { pendingCredential: this.b } } }, Zr.prototype.ka = function() {}, Zr.prototype.b = function() {}, Zr.prototype.c = function() {}, Zr.prototype.w = function() {}, to.prototype.ka = function(t) { return hs(t, eo(this)) }, to.prototype.b = function(t, e) { var n = eo(this); return n.idToken = e, ls(t, n) }, to.prototype.c = function(t, e) { return Qr(fs(t, eo(this)), e) }, to.prototype.w = function() { return { providerId: this.providerId, signInMethod: this.signInMethod, pendingToken: this.a } }, io.prototype.ka = function(t) { return hs(t, ro(this)) }, io.prototype.b = function(t, e) { var n = ro(this); return n.idToken = e, ls(t, n) }, io.prototype.c = function(t, e) { return Qr(fs(t, ro(this)), e) }, io.prototype.w = function() { var t = { providerId: this.providerId, signInMethod: this.signInMethod }; return this.idToken && (t.oauthIdToken = this.idToken), this.accessToken && (t.oauthAccessToken = this.accessToken), this.secret && (t.oauthTokenSecret = this.secret), this.nonce && (t.nonce = this.nonce), this.a && (t.pendingToken = this.a), t }, ao.prototype.Ka = function(t) { return this.Ib = ct(t), this }, w(so, ao), w(uo, ao), uo.prototype.Ca = function(t) { return K(this.a, t) || this.a.push(t), this }, uo.prototype.Qb = function() { return X(this.a) }, uo.prototype.credential = function(t, e) { e = m(t) ? { idToken: t.idToken || null, accessToken: t.accessToken || null, nonce: t.rawNonce || null } : { idToken: t || null, accessToken: e || null }; if (!e.idToken && !e.accessToken) throw new T("argument-error", "credential failed: must provide the ID token and/or the access token."); return new io(this.providerId, e, this.providerId) }, w(co, uo), Vi(co, "PROVIDER_ID", "facebook.com"), Vi(co, "FACEBOOK_SIGN_IN_METHOD", "facebook.com"), w(lo, uo), Vi(lo, "PROVIDER_ID", "github.com"), Vi(lo, "GITHUB_SIGN_IN_METHOD", "github.com"), w(po, uo), Vi(po, "PROVIDER_ID", "google.com"), Vi(po, "GOOGLE_SIGN_IN_METHOD", "google.com"), w(mo, ao), Vi(mo, "PROVIDER_ID", "twitter.com"), Vi(mo, "TWITTER_SIGN_IN_METHOD", "twitter.com"), bo.prototype.ka = function(t) { return this.signInMethod == wo.EMAIL_LINK_SIGN_IN_METHOD ? Xs(t, ws, { email: this.a, oobCode: this.f }) : Xs(t, Hs, { email: this.a, password: this.f }) }, bo.prototype.b = function(t, e) { return this.signInMethod == wo.EMAIL_LINK_SIGN_IN_METHOD ? Xs(t, Is, { idToken: e, email: this.a, oobCode: this.f }) : Xs(t, Ls, { idToken: e, email: this.a, password: this.f }) }, bo.prototype.c = function(t, e) { return Qr(this.ka(t), e) }, bo.prototype.w = function() { return { email: this.a, password: this.f, signInMethod: this.signInMethod } }, Fi(wo, { PROVIDER_ID: "password" }), Fi(wo, { EMAIL_LINK_SIGN_IN_METHOD: "emailLink" }), Fi(wo, { EMAIL_PASSWORD_SIGN_IN_METHOD: "password" }), Eo.prototype.ka = function(t) { return t.fb(ko(this)) }, Eo.prototype.b = function(t, e) { var n = ko(this); return n.idToken = e, Xs(t, Gs, n) }, Eo.prototype.c = function(t, e) { var n = ko(this); return n.operation = "REAUTH", Qr(t = Xs(t, Bs, n), e) }, Eo.prototype.w = function() { var t = { providerId: "phone" }; return this.a.eb && (t.verificationId = this.a.eb), this.a.cb && (t.verificationCode = this.a.cb), this.a.La && (t.temporaryProof = this.a.La), this.a.ea && (t.phoneNumber = this.a.ea), t }, So.prototype.fb = function(i, r) { var o = this.a.a; return ye(r.verify()).then(function(n) { if ("string" != typeof n) throw new T("argument-error", "An implementation of firebase.auth.ApplicationVerifier.prototype.verify() must return a firebase.Promise that resolves with a string."); if ("recaptcha" !== r.type) throw new T("argument-error", 'Only firebase.auth.ApplicationVerifiers with type="recaptcha" are currently supported.'); var t = m(i) ? i.session : null,
                            e = m(i) ? i.phoneNumber : i,
                            t = t && t.type == zr ? t.Ha().then(function(t) { return Xs(o, Ms, { idToken: t, phoneEnrollmentInfo: { phoneNumber: e, recaptchaToken: n } }).then(function(t) { return t.phoneSessionInfo.sessionInfo }) }) : t && t.type == $r ? t.Ha().then(function(t) { return e = o, t = { mfaPendingCredential: t, mfaEnrollmentId: i.multiFactorHint && i.multiFactorHint.uid || i.multiFactorUid, phoneSignInInfo: { recaptchaToken: n } }, Xs(e, js, t).then(function(t) { return t.phoneResponseInfo.sessionInfo }); var e }) : Xs(o, Ds, { phoneNumber: e, recaptchaToken: n }); return t.then(function(t) { return "function" == typeof r.reset && r.reset(), t }, function(t) { throw "function" == typeof r.reset && r.reset(), t }) }) }, Fi(So, { PROVIDER_ID: "phone" }), Fi(So, { PHONE_SIGN_IN_METHOD: "phone" }), Co.prototype.getUid = function() { var t = []; return t.push(this.c), this.b && t.push(this.b), this.f && t.push(this.f), this.h && t.push(this.h), t.join("-") }, Co.prototype.T = function() { return this.h }, Co.prototype.w = function() { return { type: this.c, eventId: this.b, urlResponse: this.g, sessionId: this.f, postBody: this.i, tenantId: this.h, error: this.a && this.a.w() } }; var Po, Lo = null;

                function xo(t) { var e = "unauthorized-domain",
                        n = void 0,
                        i = On(t);
                    t = i.a, "chrome-extension" == (i = i.c) ? n = jt("This chrome extension ID (chrome-extension://%s) is not authorized to run this operation. Add it to the OAuth redirect domains list in the Firebase console -> Auth section -> Sign in method tab.", t) : "http" == i || "https" == i ? n = jt("This domain (%s) is not authorized to run this operation. Add it to the OAuth redirect domains list in the Firebase console -> Auth section -> Sign in method tab.", t) : e = "operation-not-supported-in-this-environment", T.call(this, e, n) }

                function Mo(t, e, n) { T.call(this, t, n), (t = e || {}).Jb && Vi(this, "email", t.Jb), t.ea && Vi(this, "phoneNumber", t.ea), t.credential && Vi(this, "credential", t.credential), t.Zb && Vi(this, "tenantId", t.Zb) }

                function jo(t) { if (t.code) { var e = t.code || "";
                        0 == e.indexOf(k) && (e = e.substring(k.length)); var n = { credential: _o(t), Zb: t.tenantId }; if (t.email) n.Jb = t.email;
                        else if (t.phoneNumber) n.ea = t.phoneNumber;
                        else if (!n.credential) return new T(e, t.message || void 0); return new Mo(e, n, t.message) } return null }

                function Uo() {}

                function Vo(t) { return t.c || (t.c = t.b()) }

                function Fo() {}

                function qo(t) { if (t.f || "undefined" != typeof XMLHttpRequest || "undefined" == typeof ActiveXObject) return t.f; for (var e = ["MSXML2.XMLHTTP.6.0", "MSXML2.XMLHTTP.3.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"], n = 0; n < e.length; n++) { var i = e[n]; try { return new ActiveXObject(i), t.f = i } catch (t) {} } throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed") }

                function Ho() {}

                function Ko() { this.a = new XDomainRequest, this.readyState = 0, this.onreadystatechange = null, this.responseType = this.responseText = this.response = "", this.status = -1, this.statusText = "", this.a.onload = b(this.qc, this), this.a.onerror = b(this.Sb, this), this.a.onprogress = b(this.rc, this), this.a.ontimeout = b(this.vc, this) }

                function Go(t, e) { t.readyState = e, t.onreadystatechange && t.onreadystatechange() }

                function Bo(t, e, n) { this.reset(t, e, n, void 0, void 0) }

                function Wo(t) { this.f = t, this.b = this.c = this.a = null }

                function Xo(t, e) { this.name = t, this.value = e }
                w(xo, T), w(Mo, T), Mo.prototype.w = function() { var t = { code: this.code, message: this.message };
                    this.email && (t.email = this.email), this.phoneNumber && (t.phoneNumber = this.phoneNumber), this.tenantId && (t.tenantId = this.tenantId); var e = this.credential && this.credential.w(); return e && lt(t, e), t }, Mo.prototype.toJSON = function() { return this.w() }, Uo.prototype.c = null, w(Fo, Uo), Fo.prototype.a = function() { var t = qo(this); return t ? new ActiveXObject(t) : new XMLHttpRequest }, Fo.prototype.b = function() { var t = {}; return qo(this) && (t[0] = !0, t[1] = !0), t }, Po = new Fo, w(Ho, Uo), Ho.prototype.a = function() { var t = new XMLHttpRequest; if ("withCredentials" in t) return t; if ("undefined" != typeof XDomainRequest) return new Ko; throw Error("Unsupported browser") }, Ho.prototype.b = function() { return {} }, (t = Ko.prototype).open = function(t, e, n) { if (null != n && !n) throw Error("Only async requests are supported.");
                    this.a.open(t, e) }, t.send = function(t) { if (t) { if ("string" != typeof t) throw Error("Only string data is supported");
                        this.a.send(t) } else this.a.send() }, t.abort = function() { this.a.abort() }, t.setRequestHeader = function() {}, t.getResponseHeader = function(t) { return "content-type" == t.toLowerCase() ? this.a.contentType : "" }, t.qc = function() { this.status = 200, this.response = this.responseText = this.a.responseText, Go(this, 4) }, t.Sb = function() { this.status = 500, this.response = this.responseText = "", Go(this, 4) }, t.vc = function() { this.Sb() }, t.rc = function() { this.status = 200, Go(this, 1) }, t.getAllResponseHeaders = function() { return "content-type: " + this.a.contentType }, Bo.prototype.a = null, Bo.prototype.reset = function(t, e, n, i, r) { delete this.a }, Xo.prototype.toString = function() { return this.name }; var Jo = new Xo("SEVERE", 1e3),
                    Yo = new Xo("WARNING", 900),
                    zo = new Xo("CONFIG", 700),
                    $o = new Xo("FINE", 500);
                Wo.prototype.log = function(t, e, n) { if (t.value >= function t(e) { return e.c || (e.a ? t(e.a) : (D("Root logger has no level set."), null)) }(this).value)
                        for (v(e) && (e = e()), t = new Bo(t, String(e), this.f), n && (t.a = n), n = this; n;) n = n.a }; var Zo, Qo = {},
                    ta = null;

                function ea(t) { var e, n, i; return ta || (ta = new Wo(""), (Qo[""] = ta).c = zo), (e = Qo[t]) || (e = new Wo(t), i = t.lastIndexOf("."), n = t.substr(i + 1), (i = ea(t.substr(0, i))).b || (i.b = {}), (i.b[n] = e).a = i, Qo[t] = e), e }

                function na(t, e) { t && t.log($o, e, void 0) }

                function ia(t) { this.f = t }

                function ra(t) { ln.call(this), this.u = t, this.h = void 0, this.readyState = oa, this.status = 0, this.responseType = this.responseText = this.response = this.statusText = "", this.onreadystatechange = null, this.l = new Headers, this.b = null, this.s = "GET", this.f = "", this.a = !1, this.i = ea("goog.net.FetchXmlHttp"), this.m = this.c = this.g = null }
                w(ia, Uo), ia.prototype.a = function() { return new ra(this.f) }, ia.prototype.b = (Zo = {}, function() { return Zo }), w(ra, ln); var oa = 0;

                function aa(t) { t.c.read().then(t.pc.bind(t)).catch(t.Ua.bind(t)) }

                function sa(t) { t.readyState = 4, t.g = null, t.c = null, t.m = null, ua(t) }

                function ua(t) { t.onreadystatechange && t.onreadystatechange.call(t) }

                function ca(t) { ln.call(this), this.headers = new yn, this.D = t || null, this.c = !1, this.C = this.a = null, this.h = this.R = this.l = "", this.f = this.O = this.i = this.J = !1, this.g = 0, this.s = null, this.m = ha, this.u = this.S = !1 }(t = ra.prototype).open = function(t, e) { if (this.readyState != oa) throw this.abort(), Error("Error reopening a connection");
                    this.s = t, this.f = e, this.readyState = 1, ua(this) }, t.send = function(t) { if (1 != this.readyState) throw this.abort(), Error("need to call open() first. ");
                    this.a = !0; var e = { headers: this.l, method: this.s, credentials: this.h, cache: void 0 };
                    t && (e.body = t), this.u.fetch(new Request(this.f, e)).then(this.uc.bind(this), this.Ua.bind(this)) }, t.abort = function() { this.response = this.responseText = "", this.l = new Headers, this.status = 0, this.c && this.c.cancel("Request was aborted."), 1 <= this.readyState && this.a && 4 != this.readyState && (this.a = !1, sa(this)), this.readyState = oa }, t.uc = function(t) { this.a && (this.g = t, this.b || (this.status = this.g.status, this.statusText = this.g.statusText, this.b = t.headers, this.readyState = 2, ua(this)), this.a && (this.readyState = 3, ua(this), this.a && ("arraybuffer" === this.responseType ? t.arrayBuffer().then(this.sc.bind(this), this.Ua.bind(this)) : void 0 !== l.ReadableStream && "body" in t ? (this.response = this.responseText = "", this.c = t.body.getReader(), this.m = new TextDecoder, aa(this)) : t.text().then(this.tc.bind(this), this.Ua.bind(this))))) }, t.pc = function(t) { var e;
                    this.a && ((e = this.m.decode(t.value || new Uint8Array(0), { stream: !t.done })) && (this.response = this.responseText += e), (t.done ? sa : ua)(this), 3 == this.readyState && aa(this)) }, t.tc = function(t) { this.a && (this.response = this.responseText = t, sa(this)) }, t.sc = function(t) { this.a && (this.response = t, sa(this)) }, t.Ua = function(t) { var e = this.i;
                    e && e.log(Yo, "Failed to fetch url " + this.f, t instanceof Error ? t : Error(t)), this.a && sa(this) }, t.setRequestHeader = function(t, e) { this.l.append(t, e) }, t.getResponseHeader = function(t) { return this.b ? this.b.get(t.toLowerCase()) || "" : ((t = this.i) && t.log(Yo, "Attempting to get response header but no headers have been received for url: " + this.f, void 0), "") }, t.getAllResponseHeaders = function() { if (!this.b) { var t = this.i; return t && t.log(Yo, "Attempting to get all response headers but no headers have been received for url: " + this.f, void 0), "" } for (var t = [], e = this.b.entries(), n = e.next(); !n.done;) n = n.value, t.push(n[0] + ": " + n[1]), n = e.next(); return t.join("\r\n") }, Object.defineProperty(ra.prototype, "withCredentials", { get: function() { return "include" === this.h }, set: function(t) { this.h = t ? "include" : "same-origin" } }), w(ca, ln); var ha = "";
                ca.prototype.b = ea("goog.net.XhrIo"); var la = /^https?$/i,
                    fa = ["POST", "PUT"];

                function da(e, t, n, i, r) { if (e.a) throw Error("[goog.net.XhrIo] Object is active with another request=" + e.l + "; newUri=" + t);
                    n = n ? n.toUpperCase() : "GET", e.l = t, e.h = "", e.R = n, e.J = !1, e.c = !0, e.a = (e.D || Po).a(), e.C = e.D ? Vo(e.D) : Vo(Po), e.a.onreadystatechange = b(e.Vb, e); try { na(e.b, Ta(e, "Opening Xhr")), e.O = !0, e.a.open(n, String(t), !0), e.O = !1 } catch (t) { return na(e.b, Ta(e, "Error opening Xhr: " + t.message)), void va(e, t) }
                    t = i || ""; var o, a = new yn(e.headers);
                    r && function(t, e) { if (t.forEach && "function" == typeof t.forEach) t.forEach(e, void 0);
                        else if (p(t) || "string" == typeof t) V(t, e, void 0);
                        else
                            for (var n = bn(t), i = gn(t), r = i.length, o = 0; o < r; o++) e.call(void 0, i[o], n && n[o], t) }(r, function(t, e) { a.set(e, t) }), r = function(t) { t: { for (var e = pa, n = t.length, i = "string" == typeof t ? t.split("") : t, r = 0; r < n; r++)
                                if (r in i && e.call(void 0, i[r], r, t)) { e = r; break t }
                            e = -1 } return e < 0 ? null : "string" == typeof t ? t.charAt(e) : t[e] }(a.Y()), i = l.FormData && t instanceof l.FormData, !K(fa, n) || r || i || a.set("Content-Type", "application/x-www-form-urlencoded;charset=utf-8"), a.forEach(function(t, e) { this.a.setRequestHeader(e, t) }, e), e.m && (e.a.responseType = e.m), "withCredentials" in e.a && e.a.withCredentials !== e.S && (e.a.withCredentials = e.S); try { ya(e), 0 < e.g && (e.u = (o = e.a, Ht && $t(9) && "number" == typeof o.timeout && void 0 !== o.ontimeout), na(e.b, Ta(e, "Will abort after " + e.g + "ms if incomplete, xhr2 " + e.u)), e.u ? (e.a.timeout = e.g, e.a.ontimeout = b(e.Ma, e)) : e.s = vn(e.Ma, e.g, e)), na(e.b, Ta(e, "Sending request")), e.i = !0, e.a.send(t), e.i = !1 } catch (t) { na(e.b, Ta(e, "Send error: " + t.message)), va(e, t) } }

                function pa(t) { return "content-type" == t.toLowerCase() }

                function va(t, e) { t.c = !1, t.a && (t.f = !0, t.a.abort(), t.f = !1), t.h = e, ma(t), ba(t) }

                function ma(t) { t.J || (t.J = !0, t.dispatchEvent("complete"), t.dispatchEvent("error")) }

                function ga(e) { if (e.c && void 0 !== h)
                        if (e.C[1] && 4 == wa(e) && 2 == Ia(e)) na(e.b, Ta(e, "Local request error detected and ignored"));
                        else if (e.i && 4 == wa(e)) vn(e.Vb, 0, e);
                    else if (e.dispatchEvent("readystatechange"), 4 == wa(e)) { na(e.b, Ta(e, "Request complete")), e.c = !1; try { var t, n, i, r, o = Ia(e);
                            t: switch (o) {
                                case 200:
                                case 201:
                                case 202:
                                case 204:
                                case 206:
                                case 304:
                                case 1223:
                                    var a = !0; break t;
                                default:
                                    a = !1 }
                            if ((t = a) || ((n = 0 === o) && (!(r = String(e.l).match(Tn)[1] || null) && l.self && l.self.location && (r = (i = l.self.location.protocol).substr(0, i.length - 1)), n = !la.test(r ? r.toLowerCase() : "")), t = n), t) e.dispatchEvent("complete"), e.dispatchEvent("success");
                            else { try { var s = 2 < wa(e) ? e.a.statusText : "" } catch (t) { na(e.b, "Can not get status: " + t.message), s = "" }
                                e.h = s + " [" + Ia(e) + "]", ma(e) } } finally { ba(e) } } }

                function ba(e, t) { if (e.a) { ya(e); var n = e.a,
                            i = e.C[0] ? a : null;
                        e.a = null, e.C = null, t || e.dispatchEvent("ready"); try { n.onreadystatechange = i } catch (t) {
                            (e = e.b) && e.log(Jo, "Problem encountered resetting onreadystatechange: " + t.message, void 0) } } }

                function ya(t) { t.a && t.u && (t.a.ontimeout = null), t.s && (l.clearTimeout(t.s), t.s = null) }

                function wa(t) { return t.a ? t.a.readyState : 0 }

                function Ia(t) { try { return 2 < wa(t) ? t.a.status : -1 } catch (t) { return -1 } }

                function Ta(t, e) { return e + " [" + t.R + " " + t.l + " " + Ia(t) + "]" }

                function Ea(t) { var e = La;
                    this.g = [], this.u = e, this.s = t || null, this.f = this.a = !1, this.c = void 0, this.v = this.C = this.i = !1, this.h = 0, this.b = null, this.l = 0 }

                function Aa(t, e, n) { t.a = !0, t.c = n, t.f = !e, _a(t) }

                function ka(t) { if (t.a) { if (!t.v) throw new Oa;
                        t.v = !1 } }

                function Sa(t, e, n, i) { t.g.push([e, n, i]), t.a && _a(t) }

                function Na(t) { return H(t.g, function(t) { return v(t[1]) }) }

                function _a(e) { var n;
                    e.h && e.a && Na(e) && (i = e.h, (n = Da[i]) && (l.clearTimeout(n.a), delete Da[i]), e.h = 0), e.b && (e.b.l--, delete e.b); for (var i = e.c, t = n = !1; e.g.length && !e.i;) { var r = (a = e.g.shift())[0],
                            o = a[1],
                            a = a[2]; if (r = e.f ? o : r) try { var s = r.call(a || e.s, i);
                            void 0 !== s && (e.f = e.f && (s == i || s instanceof Error), e.c = i = s), (O(i) || "function" == typeof l.Promise && i instanceof l.Promise) && (t = !0, e.i = !0) } catch (t) { i = t, e.f = !0, Na(e) || (n = !0) } }
                    e.c = i, t && (s = b(e.m, e, !0), t = b(e.m, e, !1), i instanceof Ea ? (Sa(i, s, t), i.C = !0) : i.then(s, t)), n && (i = new Ra(i), Da[i.a] = i, e.h = i.a) }

                function Oa() { C.call(this) }

                function Ca() { C.call(this) }

                function Ra(t) { this.a = l.setTimeout(b(this.c, this), 0), this.b = t }(t = ca.prototype).Ma = function() { void 0 !== h && this.a && (this.h = "Timed out after " + this.g + "ms, aborting", na(this.b, Ta(this, this.h)), this.dispatchEvent("timeout"), this.abort(8)) }, t.abort = function() { this.a && this.c && (na(this.b, Ta(this, "Aborting")), this.c = !1, this.f = !0, this.a.abort(), this.f = !1, this.dispatchEvent("complete"), this.dispatchEvent("abort"), ba(this)) }, t.Da = function() { this.a && (this.c && (this.c = !1, this.f = !0, this.a.abort(), this.f = !1), ba(this, !0)), ca.ab.Da.call(this) }, t.Vb = function() { this.xa || (this.O || this.i || this.f ? ga(this) : this.Jc()) }, t.Jc = function() { ga(this) }, t.getResponse = function() { try { if (!this.a) return null; if ("response" in this.a) return this.a.response; switch (this.m) {
                            case ha:
                            case "text":
                                return this.a.responseText;
                            case "arraybuffer":
                                if ("mozResponseArrayBuffer" in this.a) return this.a.mozResponseArrayBuffer } var t = this.b; return t && t.log(Jo, "Response type " + this.m + " is not supported on this browser", void 0), null } catch (t) { return na(this.b, "Can not get response: " + t.message), null } }, Ea.prototype.cancel = function(t) { var e;
                    this.a ? this.c instanceof Ea && this.c.cancel() : (this.b && (e = this.b, delete this.b, t ? e.cancel(t) : (e.l--, e.l <= 0 && e.cancel())), this.u ? this.u.call(this.s, this) : this.v = !0, this.a || (t = new Ca, ka(this), Aa(this, !1, t))) }, Ea.prototype.m = function(t, e) { this.i = !1, Aa(this, t, e) }, Ea.prototype.then = function(t, e, n) { var i, r, o = new fe(function(t, e) { i = t, r = e }); return Sa(this, i, function(t) { t instanceof Ca ? o.cancel() : r(t) }), o.then(t, e, n) }, Ea.prototype.$goog_Thenable = !0, w(Oa, C), Oa.prototype.message = "Deferred has already fired", Oa.prototype.name = "AlreadyCalledError", w(Ca, C), Ca.prototype.message = "Deferred was canceled", Ca.prototype.name = "CanceledError", Ra.prototype.c = function() { throw delete Da[this.a], this.b }; var Da = {};

                function Pa(t) { var e = document,
                        n = wt(t).toString(),
                        i = ae(document, "SCRIPT"),
                        r = { Wb: i, Ma: void 0 },
                        o = new Ea(r),
                        a = window.setTimeout(function() { xa(i, !0); var t = new Ua(ja, "Timeout reached for loading script " + n);
                            ka(o), Aa(o, !1, t) }, 5e3); return r.Ma = a, i.onload = i.onreadystatechange = function() { i.readyState && "loaded" != i.readyState && "complete" != i.readyState || (xa(i, !1, a), ka(o), Aa(o, !0, null)) }, i.onerror = function() { xa(i, !0, a); var t = new Ua(Ma, "Error while loading script " + n);
                        ka(o), Aa(o, !1, t) }, lt(r = {}, { type: "text/javascript", charset: "UTF-8" }), ee(i, r), r = t, ft(t = i, "HTMLScriptElement"), t.src = wt(r), (r = (r = t.ownerDocument && t.ownerDocument.defaultView) && r != l ? f(r.document) : s = null === s ? f(l.document) : s) && t.setAttribute("nonce", r), ((e = ((r = e) || document).getElementsByTagName("HEAD")) && 0 != e.length ? e[0] : r.documentElement).appendChild(i), o }

                function La() { var t;
                    this && this.Wb && ((t = this.Wb) && "SCRIPT" == t.tagName && xa(t, !0, this.Ma)) }

                function xa(t, e, n) { null != n && l.clearTimeout(n), t.onload = a, t.onerror = a, t.onreadystatechange = a, e && window.setTimeout(function() { t && t.parentNode && t.parentNode.removeChild(t) }, 0) } var Ma = 0,
                    ja = 1;

                function Ua(t, e) { var n = "Jsloader error (code #" + t + ")";
                    e && (n += ": " + e), C.call(this, n), this.code = t }

                function Va(t) { this.f = t }

                function Fa(t, e, n) { if (this.c = t, t = e || {}, this.l = t.secureTokenEndpoint || "https://securetoken.googleapis.com/v1/token", this.m = t.secureTokenTimeout || Ka, this.g = ct(t.secureTokenHeaders || Ga), this.h = t.firebaseEndpoint || "https://www.googleapis.com/identitytoolkit/v3/relyingparty/", this.i = t.identityPlatformEndpoint || "https://identitytoolkit.googleapis.com/v2/", this.v = t.firebaseTimeout || Ba, this.a = ct(t.firebaseHeaders || Wa), n && (this.a["X-Client-Version"] = n, this.g["X-Client-Version"] = n), n = "Node" == hi(), !(n = l.XMLHttpRequest || n && zl.default.INTERNAL.node && zl.default.INTERNAL.node.XMLHttpRequest) && !ci()) throw new T("internal-error", "The XMLHttpRequest compatibility library was not found.");
                    this.f = void 0, ci() ? this.f = new ia(self) : li() ? this.f = new Va(n) : this.f = new Ho, this.b = null }
                w(Ua, C), w(Va, Uo), Va.prototype.a = function() { return new this.f }, Va.prototype.b = function() { return {} }; var qa, Ha = "idToken",
                    Ka = new Ci(3e4, 6e4),
                    Ga = { "Content-Type": "application/x-www-form-urlencoded" },
                    Ba = new Ci(3e4, 6e4),
                    Wa = { "Content-Type": "application/json" };

                function Xa(t, e) { e ? t.a["X-Firebase-Locale"] = e : delete t.a["X-Firebase-Locale"] }

                function Ja(t, e) { e && (t.l = Ya("https://securetoken.googleapis.com/v1/token", e), t.h = Ya("https://www.googleapis.com/identitytoolkit/v3/relyingparty/", e), t.i = Ya("https://identitytoolkit.googleapis.com/v2/", e)) }

                function Ya(t, e) { return t = On(t), e = On(e.url), t.f = t.a + t.f, An(t, e.c), t.a = e.a, kn(t, e.g), t.toString() }

                function za(t, e) { e ? (t.a["X-Client-Version"] = e, t.g["X-Client-Version"] = e) : (delete t.a["X-Client-Version"], delete t.g["X-Client-Version"]) }

                function $a(t, e, n, i, r, o, a) { var s;
                    (t = ((s = pi(s = gi()) == di && (s = s.match(/\sChrome\/(\d+)/i)) && 2 == s.length ? parseInt(s[1], 10) : null) && s < 30 || Ht && Zt && !(9 < Zt)) && !ci() ? (qa = qa || new fe(function(t, e) { var n, i;
                        n = t, i = e, ((window.gapi || {}).client || {}).request ? n() : (l[Qa] = function() {
                            ((window.gapi || {}).client || {}).request ? n() : i(Error("CORS_UNSUPPORTED")) }, function(t, e) { Sa(t, null, e, void 0) }(Pa(It(Za, { onload: Qa })), function() { i(Error("CORS_UNSUPPORTED")) })) }), b(t.s, t)) : b(t.u, t))(e, n, i, r, o, a) }
                Fa.prototype.T = function() { return this.b }, Fa.prototype.u = function(t, n, e, i, r, o) { if (ci() && (void 0 === l.fetch || void 0 === l.Headers || void 0 === l.Request)) throw new T("operation-not-supported-in-this-environment", "fetch, Headers and Request native APIs or equivalent Polyfills must be available to support HTTP requests from a Worker environment."); var a, s = new ca(this.f);
                    o && (s.g = Math.max(0, o), a = setTimeout(function() { s.dispatchEvent("timeout") }, o)), fn(s, "complete", function() { a && clearTimeout(a); var e = null; try { e = JSON.parse(function(e) { try { return e.a ? e.a.responseText : "" } catch (t) { return na(e.b, "Can not get responseText: " + t.message), "" } }(this)) || null } catch (t) { e = null }
                        n && n(e) }), dn(s, "ready", function() { a && clearTimeout(a), xe(this) }), dn(s, "timeout", function() { a && clearTimeout(a), xe(this), n && n(null) }), da(s, t, e, i, r) }; var Za = new dt(gt, "https://apis.google.com/js/client.js?onload=%{onload}"),
                    Qa = "__fcb" + Math.floor(1e6 * Math.random()).toString();

                function ts(t, e, n, i, r, o, a) { var s = On(e + n);
                    Nn(s, "key", t.c), a && Nn(s, "cb", Date.now().toString()); var u = "GET" == i; if (u)
                        for (var c in r) r.hasOwnProperty(c) && Nn(s, c, r[c]); return new fe(function(e, n) { $a(t, s.toString(), function(t) { t ? t.error ? n(Ys(t, o || {})) : e(t) : n(new T("network-request-failed")) }, i, u ? void 0 : Xn(ki(r)), t.a, t.v.get()) }) }

                function es(t) { if ("string" != typeof(t = t.email) || !oi.test(t)) throw new T("invalid-email") }

                function ns(t) { "email" in t && es(t) }

                function is(t) { if (!t[Ha]) { if (t.mfaPendingCredential) throw new T("multi-factor-auth-required", null, ct(t)); throw new T("internal-error") } }

                function rs(t) { if (t.phoneNumber || t.temporaryProof) { if (!t.phoneNumber || !t.temporaryProof) throw new T("internal-error") } else { if (!t.sessionInfo) throw new T("missing-verification-id"); if (!t.code) throw new T("missing-verification-code") } }
                Fa.prototype.s = function(t, n, i, r, o) { var a = this;
                    qa.then(function() { window.gapi.client.setApiKey(a.c); var e = window.gapi.auth.getToken();
                        window.gapi.auth.setToken(null), window.gapi.client.request({ path: t, method: i, body: r, headers: o, authType: "none", callback: function(t) { window.gapi.auth.setToken(e), n && n(t) } }) }).o(function(t) { n && n({ error: { message: t && t.message || "CORS_UNSUPPORTED" } }) }) }, Fa.prototype.zb = function() { return Xs(this, xs, {}) }, Fa.prototype.Bb = function(t, e) { return Xs(this, Ps, { idToken: t, email: e }) }, Fa.prototype.Cb = function(t, e) { return Xs(this, Ls, { idToken: t, password: e }) }; var os = { displayName: "DISPLAY_NAME", photoUrl: "PHOTO_URL" };

                function as(t) { if (!t.phoneVerificationInfo) throw new T("internal-error"); if (!t.phoneVerificationInfo.sessionInfo) throw new T("missing-verification-id"); if (!t.phoneVerificationInfo.code) throw new T("missing-verification-code") }

                function ss(t) { if (!t.requestUri || !t.sessionId && !t.postBody && !t.pendingToken) throw new T("internal-error") }

                function us(t, e) { return e.oauthIdToken && e.providerId && 0 == e.providerId.indexOf("oidc.") && !e.pendingToken && (t.sessionId ? e.nonce = t.sessionId : t.postBody && (Kn(t = new Vn(t.postBody), "nonce") && (e.nonce = t.get("nonce")))), e }

                function cs(t) { var e = null; if (t.needConfirmation ? (t.code = "account-exists-with-different-credential", e = jo(t)) : "FEDERATED_USER_ID_ALREADY_LINKED" == t.errorMessage ? (t.code = "credential-already-in-use", e = jo(t)) : "EMAIL_EXISTS" == t.errorMessage ? (t.code = "email-already-in-use", e = jo(t)) : t.errorMessage && (e = Js(t.errorMessage)), e) throw e;
                    is(t) }

                function hs(t, e) { return e.returnIdpCredential = !0, Xs(t, Us, e) }

                function ls(t, e) { return e.returnIdpCredential = !0, Xs(t, Fs, e) }

                function fs(t, e) { return e.returnIdpCredential = !0, e.autoCreate = !1, Xs(t, Vs, e) }

                function ds(t) { if (!t.oobCode) throw new T("invalid-action-code") }(t = Fa.prototype).Db = function(t, i) { var r = { idToken: t },
                        o = []; return st(os, function(t, e) { var n = i[e];
                        null === n ? o.push(t) : e in i && (r[e] = n) }), o.length && (r.deleteAttribute = o), Xs(this, Ps, r) }, t.vb = function(t, e) { return lt(t = { requestType: "PASSWORD_RESET", email: t }, e), Xs(this, _s, t) }, t.wb = function(t, e) { return lt(t = { requestType: "EMAIL_SIGNIN", email: t }, e), Xs(this, ks, t) }, t.ub = function(t, e) { return lt(t = { requestType: "VERIFY_EMAIL", idToken: t }, e), Xs(this, Ss, t) }, t.Eb = function(t, e, n) { return lt(t = { requestType: "VERIFY_AND_CHANGE_EMAIL", idToken: t, newEmail: e }, n), Xs(this, Ns, t) }, t.fb = function(t) { return Xs(this, Ks, t) }, t.nb = function(t, e) { return Xs(this, Rs, { oobCode: t, newPassword: e }) }, t.Ra = function(t) { return Xs(this, vs, { oobCode: t }) }, t.jb = function(t) { return Xs(this, ps, { oobCode: t }) }; var ps = { endpoint: "setAccountInfo", A: ds, Z: "email", B: !0 },
                    vs = { endpoint: "resetPassword", A: ds, G: function(t) { var e = t.requestType; if (!e || !t.email && "EMAIL_SIGNIN" != e && "VERIFY_AND_CHANGE_EMAIL" != e) throw new T("internal-error") }, B: !0 },
                    ms = { endpoint: "signupNewUser", A: function(t) { if (es(t), !t.password) throw new T("weak-password") }, G: is, V: !0, B: !0 },
                    gs = { endpoint: "createAuthUri", B: !0 },
                    bs = { endpoint: "deleteAccount", N: ["idToken"] },
                    ys = { endpoint: "setAccountInfo", N: ["idToken", "deleteProvider"], A: function(t) { if (!Array.isArray(t.deleteProvider)) throw new T("internal-error") } },
                    ws = { endpoint: "emailLinkSignin", N: ["email", "oobCode"], A: es, G: is, V: !0, B: !0 },
                    Is = { endpoint: "emailLinkSignin", N: ["idToken", "email", "oobCode"], A: es, G: is, V: !0 },
                    Ts = { endpoint: "accounts/mfaEnrollment:finalize", N: ["idToken", "phoneVerificationInfo"], A: as, G: is, B: !0, Na: !0 },
                    Es = { endpoint: "accounts/mfaSignIn:finalize", N: ["mfaPendingCredential", "phoneVerificationInfo"], A: as, G: is, B: !0, Na: !0 },
                    As = { endpoint: "getAccountInfo" },
                    ks = { endpoint: "getOobConfirmationCode", N: ["requestType"], A: function(t) { if ("EMAIL_SIGNIN" != t.requestType) throw new T("internal-error");
                            es(t) }, Z: "email", B: !0 },
                    Ss = { endpoint: "getOobConfirmationCode", N: ["idToken", "requestType"], A: function(t) { if ("VERIFY_EMAIL" != t.requestType) throw new T("internal-error") }, Z: "email", B: !0 },
                    Ns = { endpoint: "getOobConfirmationCode", N: ["idToken", "newEmail", "requestType"], A: function(t) { if ("VERIFY_AND_CHANGE_EMAIL" != t.requestType) throw new T("internal-error") }, Z: "email", B: !0 },
                    _s = { endpoint: "getOobConfirmationCode", N: ["requestType"], A: function(t) { if ("PASSWORD_RESET" != t.requestType) throw new T("internal-error");
                            es(t) }, Z: "email", B: !0 },
                    Os = { lb: !0, endpoint: "getProjectConfig", Ub: "GET" },
                    Cs = { lb: !0, endpoint: "getRecaptchaParam", Ub: "GET", G: function(t) { if (!t.recaptchaSiteKey) throw new T("internal-error") } },
                    Rs = { endpoint: "resetPassword", A: ds, Z: "email", B: !0 },
                    Ds = { endpoint: "sendVerificationCode", N: ["phoneNumber", "recaptchaToken"], Z: "sessionInfo", B: !0 },
                    Ps = { endpoint: "setAccountInfo", N: ["idToken"], A: ns, V: !0 },
                    Ls = { endpoint: "setAccountInfo", N: ["idToken"], A: function(t) { if (ns(t), !t.password) throw new T("weak-password") }, G: is, V: !0 },
                    xs = { endpoint: "signupNewUser", G: is, V: !0, B: !0 },
                    Ms = { endpoint: "accounts/mfaEnrollment:start", N: ["idToken", "phoneEnrollmentInfo"], A: function(t) { if (!t.phoneEnrollmentInfo) throw new T("internal-error"); if (!t.phoneEnrollmentInfo.phoneNumber) throw new T("missing-phone-number"); if (!t.phoneEnrollmentInfo.recaptchaToken) throw new T("missing-app-credential") }, G: function(t) { if (!t.phoneSessionInfo || !t.phoneSessionInfo.sessionInfo) throw new T("internal-error") }, B: !0, Na: !0 },
                    js = { endpoint: "accounts/mfaSignIn:start", N: ["mfaPendingCredential", "mfaEnrollmentId", "phoneSignInInfo"], A: function(t) { if (!t.phoneSignInInfo || !t.phoneSignInInfo.recaptchaToken) throw new T("missing-app-credential") }, G: function(t) { if (!t.phoneResponseInfo || !t.phoneResponseInfo.sessionInfo) throw new T("internal-error") }, B: !0, Na: !0 },
                    Us = { endpoint: "verifyAssertion", A: ss, Ya: us, G: cs, V: !0, B: !0 },
                    Vs = { endpoint: "verifyAssertion", A: ss, Ya: us, G: function(t) { if (t.errorMessage && "USER_NOT_FOUND" == t.errorMessage) throw new T("user-not-found"); if (t.errorMessage) throw Js(t.errorMessage);
                            is(t) }, V: !0, B: !0 },
                    Fs = { endpoint: "verifyAssertion", A: function(t) { if (ss(t), !t.idToken) throw new T("internal-error") }, Ya: us, G: cs, V: !0 },
                    qs = { endpoint: "verifyCustomToken", A: function(t) { if (!t.token) throw new T("invalid-custom-token") }, G: is, V: !0, B: !0 },
                    Hs = { endpoint: "verifyPassword", A: function(t) { if (es(t), !t.password) throw new T("wrong-password") }, G: is, V: !0, B: !0 },
                    Ks = { endpoint: "verifyPhoneNumber", A: rs, G: is, B: !0 },
                    Gs = { endpoint: "verifyPhoneNumber", A: function(t) { if (!t.idToken) throw new T("internal-error");
                            rs(t) }, G: function(t) { if (t.temporaryProof) throw t.code = "credential-already-in-use", jo(t);
                            is(t) } },
                    Bs = { Hb: { USER_NOT_FOUND: "user-not-found" }, endpoint: "verifyPhoneNumber", A: rs, G: is, B: !0 },
                    Ws = { endpoint: "accounts/mfaEnrollment:withdraw", N: ["idToken", "mfaEnrollmentId"], G: function(t) { if (!!t[Ha] ^ !!t.refreshToken) throw new T("internal-error") }, B: !0, Na: !0 };

                function Xs(t, e, n) { if (! function(t, e) { if (!e || !e.length) return 1; if (t) { for (var n = 0; n < e.length; n++) { var i = t[e[n]]; if (null == i || "" === i) return } return 1 } }(n, e.N)) return we(new T("internal-error")); var i, r = !!e.Na,
                        o = e.Ub || "POST"; return ye(n).then(e.A).then(function() { return e.V && (n.returnSecureToken = !0), e.B && t.b && void 0 === n.tenantId && (n.tenantId = t.b), ts(t, r ? t.i : t.h, e.endpoint, o, n, e.Hb, e.lb || !1) }).then(function(t) { return i = t, e.Ya ? e.Ya(n, i) : i }).then(e.G).then(function() { if (!e.Z) return i; if (!(e.Z in i)) throw new T("internal-error"); return i[e.Z] }) }

                function Js(t) { return Ys({ error: { errors: [{ message: t }], code: 400, message: t } }) }

                function Ys(t, e) { var n, i = (t.error && t.error.errors && t.error.errors[0] || {}).reason || "",
                        r = { keyInvalid: "invalid-api-key", ipRefererBlocked: "app-not-authorized" }; if (i = r[i] ? new T(r[i]) : null) return i; for (n in i = t.error && t.error.message || "", lt(r = { INVALID_CUSTOM_TOKEN: "invalid-custom-token", CREDENTIAL_MISMATCH: "custom-token-mismatch", MISSING_CUSTOM_TOKEN: "internal-error", INVALID_IDENTIFIER: "invalid-email", MISSING_CONTINUE_URI: "internal-error", INVALID_EMAIL: "invalid-email", INVALID_PASSWORD: "wrong-password", USER_DISABLED: "user-disabled", MISSING_PASSWORD: "internal-error", EMAIL_EXISTS: "email-already-in-use", PASSWORD_LOGIN_DISABLED: "operation-not-allowed", INVALID_IDP_RESPONSE: "invalid-credential", INVALID_PENDING_TOKEN: "invalid-credential", FEDERATED_USER_ID_ALREADY_LINKED: "credential-already-in-use", MISSING_OR_INVALID_NONCE: "missing-or-invalid-nonce", INVALID_MESSAGE_PAYLOAD: "invalid-message-payload", INVALID_RECIPIENT_EMAIL: "invalid-recipient-email", INVALID_SENDER: "invalid-sender", EMAIL_NOT_FOUND: "user-not-found", RESET_PASSWORD_EXCEED_LIMIT: "too-many-requests", EXPIRED_OOB_CODE: "expired-action-code", INVALID_OOB_CODE: "invalid-action-code", MISSING_OOB_CODE: "internal-error", INVALID_PROVIDER_ID: "invalid-provider-id", CREDENTIAL_TOO_OLD_LOGIN_AGAIN: "requires-recent-login", INVALID_ID_TOKEN: "invalid-user-token", TOKEN_EXPIRED: "user-token-expired", USER_NOT_FOUND: "user-token-expired", CORS_UNSUPPORTED: "cors-unsupported", DYNAMIC_LINK_NOT_ACTIVATED: "dynamic-link-not-activated", INVALID_APP_ID: "invalid-app-id", TOO_MANY_ATTEMPTS_TRY_LATER: "too-many-requests", WEAK_PASSWORD: "weak-password", OPERATION_NOT_ALLOWED: "operation-not-allowed", USER_CANCELLED: "user-cancelled", CAPTCHA_CHECK_FAILED: "captcha-check-failed", INVALID_APP_CREDENTIAL: "invalid-app-credential", INVALID_CODE: "invalid-verification-code", INVALID_PHONE_NUMBER: "invalid-phone-number", INVALID_SESSION_INFO: "invalid-verification-id", INVALID_TEMPORARY_PROOF: "invalid-credential", MISSING_APP_CREDENTIAL: "missing-app-credential", MISSING_CODE: "missing-verification-code", MISSING_PHONE_NUMBER: "missing-phone-number", MISSING_SESSION_INFO: "missing-verification-id", QUOTA_EXCEEDED: "quota-exceeded", SESSION_EXPIRED: "code-expired", REJECTED_CREDENTIAL: "rejected-credential", INVALID_CONTINUE_URI: "invalid-continue-uri", MISSING_ANDROID_PACKAGE_NAME: "missing-android-pkg-name", MISSING_IOS_BUNDLE_ID: "missing-ios-bundle-id", UNAUTHORIZED_DOMAIN: "unauthorized-continue-uri", INVALID_DYNAMIC_LINK_DOMAIN: "invalid-dynamic-link-domain", INVALID_OAUTH_CLIENT_ID: "invalid-oauth-client-id", INVALID_CERT_HASH: "invalid-cert-hash", UNSUPPORTED_TENANT_OPERATION: "unsupported-tenant-operation", INVALID_TENANT_ID: "invalid-tenant-id", TENANT_ID_MISMATCH: "tenant-id-mismatch", ADMIN_ONLY_OPERATION: "admin-restricted-operation", INVALID_MFA_PENDING_CREDENTIAL: "invalid-multi-factor-session", MFA_ENROLLMENT_NOT_FOUND: "multi-factor-info-not-found", MISSING_MFA_PENDING_CREDENTIAL: "missing-multi-factor-session", MISSING_MFA_ENROLLMENT_ID: "missing-multi-factor-info", EMAIL_CHANGE_NEEDS_VERIFICATION: "email-change-needs-verification", SECOND_FACTOR_EXISTS: "second-factor-already-in-use", SECOND_FACTOR_LIMIT_EXCEEDED: "maximum-second-factor-count-exceeded", UNSUPPORTED_FIRST_FACTOR: "unsupported-first-factor", UNVERIFIED_EMAIL: "unverified-email" }, e || {}), e = (e = i.match(/^[^\s]+\s*:\s*([\s\S]*)$/)) && 1 < e.length ? e[1] : void 0, r)
                        if (0 === i.indexOf(n)) return new T(r[n], e);
                    return new T("internal-error", e = !e && t ? Ai(t) : e) }

                function zs(t) { var o;
                    this.b = t, this.a = null, this.rb = (o = this, (tu = tu || new fe(function(t, e) {
                        function n() { Oi(), bi("gapi.load")("gapi.iframes", { callback: t, ontimeout: function() { Oi(), e(Error("Network Error")) }, timeout: Zs.get() }) } var i;
                        bi("gapi.iframes.Iframe") ? t() : bi("gapi.load") ? n() : (i = "__iframefcb" + Math.floor(1e6 * Math.random()).toString(), l[i] = function() { bi("gapi.load") ? n() : e(Error("Network Error")) }, ye(Pa(i = It($s, { onload: i }))).o(function() { e(Error("Network Error")) })) }).o(function(t) { throw tu = null, t })).then(function() { return new fe(function(i, r) { bi("gapi.iframes.getContext")().open({ where: document.body, url: o.b, messageHandlersFilter: bi("gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER"), attributes: { style: { position: "absolute", top: "-100px", width: "1px", height: "1px" } }, dontclear: !0 }, function(t) {
                                function e() { clearTimeout(n), i() }
                                o.a = t, o.a.restyle({ setHideOnLeave: !1 }); var n = setTimeout(function() { r(Error("Network Error")) }, Qs.get());
                                t.ping(e).then(e, function() { r(Error("Network Error")) }) }) }) })) } var $s = new dt(gt, "https://apis.google.com/js/api.js?onload=%{onload}"),
                    Zs = new Ci(3e4, 6e4),
                    Qs = new Ci(5e3, 15e3),
                    tu = null;

                function eu(t, e, n, i) { this.l = t, this.h = e, this.i = n, this.g = i, this.f = null, t = this.g ? Cn((t = On(this.g.url)).c, t.a, t.g, "/emulator/auth/iframe") : Cn("https", this.l, null, "/__/auth/iframe"), this.a = t, Nn(this.a, "apiKey", this.h), Nn(this.a, "appName", this.i), this.b = null, this.c = [] }

                function nu(t, e, n, i, r, o) { this.u = t, this.s = e, this.c = n, this.m = i, this.v = o, this.i = this.g = this.l = null, this.a = r, this.h = this.f = null }

                function iu(t) { try { return zl.default.app(t).auth().Ga() } catch (t) { return [] } }

                function ru(t, e, n, i, r, o) { this.s = t, this.g = e, this.b = n, this.f = o, this.c = i || null, this.i = r || null, this.l = this.u = this.C = null, this.h = [], this.m = this.a = null }

                function ou(t) { var s = Qn(); return Xs(t, Os, {}).then(function(t) { return t.authorizedDomains || [] }).then(function(t) { t: { for (var e = (n = On(s)).c, n = n.a, i = 0; i < t.length; i++) { var r = t[i],
                                    o = n,
                                    a = e; if (o = 0 == r.indexOf("chrome-extension://") ? On(r).a == o && "chrome-extension" == a : ("http" == a || "https" == a) && (ri.test(r) ? o == r : (r = r.split(".").join("\\."), new RegExp("^(.+\\." + r + "|" + r + ")$", "i").test(o)))) { t = !0; break t } }
                            t = !1 } if (!t) throw new xo(Qn()) }) }

                function au(r) { return r.m || (r.m = ai().then(function() { var t, e, n, i;
                        r.u || (t = r.c, e = r.i, n = iu(r.b), (i = new eu(r.s, r.g, r.b, r.f)).f = t, i.b = e, i.c = X(n || []), r.u = i.toString()), r.v = new zs(r.u),
                            function(i) { if (!i.v) throw Error("IfcHandler must be initialized!");! function(t, e) { t.rb.then(function() { t.a.register("authEvent", e, bi("gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER")) }) }(i.v, function(t) { var e = {}; if (t && t.authEvent) { var n = !1; for (t = Ro(t.authEvent), e = 0; e < i.h.length; e++) n = i.h[e](t) || n; return (e = {}).status = n ? "ACK" : "ERROR", ye(e) } return e.status = "ERROR", ye(e) }) }(r) }), r.m) }

                function su(t) { return t.l || (t.C = t.c ? mi(t.c, iu(t.b)) : null, t.l = new Fa(t.g, _(t.i), t.C), t.f && Ja(t.l, t.f)), t.l }

                function uu(t, e, n, i, r, o, a, s, u, c, h, l) { return (t = new nu(t, e, n, i, r, l)).l = o, t.g = a, t.i = s, t.b = ct(u || null), t.f = c, t.yb(h).toString() }

                function cu(t) { if (this.a = t || zl.default.INTERNAL.reactNative && zl.default.INTERNAL.reactNative.AsyncStorage, !this.a) throw new T("internal-error", "The React Native compatibility library was not found.");
                    this.type = "asyncStorage" }

                function hu(t) { this.b = t, this.a = {}, this.f = b(this.c, this) }
                eu.prototype.toString = function() { return this.f ? Nn(this.a, "v", this.f) : Hn(this.a.b, "v"), this.b ? Nn(this.a, "eid", this.b) : Hn(this.a.b, "eid"), this.c.length ? Nn(this.a, "fw", this.c.join(",")) : Hn(this.a.b, "fw"), this.a.toString() }, nu.prototype.yb = function(t) { return this.h = t, this }, nu.prototype.toString = function() { var t; if (Nn(t = this.v ? Cn((t = On(this.v.url)).c, t.a, t.g, "/emulator/auth/handler") : Cn("https", this.u, null, "/__/auth/handler"), "apiKey", this.s), Nn(t, "appName", this.c), Nn(t, "authType", this.m), this.a.isOAuthProvider) { var e = this.a; try { var n = zl.default.app(this.c).auth().la() } catch (t) { n = null } for (i in e.ob = n, Nn(t, "providerId", this.a.providerId), e = ki((n = this.a).Ib)) e[i] = e[i].toString(); for (var i = n.Qc, e = ct(e), r = 0; r < i.length; r++) { var o = i[r];
                            o in e && delete e[o] }
                        n.pb && n.ob && !e[n.pb] && (e[n.pb] = n.ob), ut(e) || Nn(t, "customParameters", Ai(e)) } if ("function" == typeof this.a.Qb && ((n = this.a.Qb()).length && Nn(t, "scopes", n.join(","))), this.l ? Nn(t, "redirectUrl", this.l) : Hn(t.b, "redirectUrl"), this.g ? Nn(t, "eventId", this.g) : Hn(t.b, "eventId"), this.i ? Nn(t, "v", this.i) : Hn(t.b, "v"), this.b)
                        for (var a in this.b) this.b.hasOwnProperty(a) && !_n(t, a) && Nn(t, a, this.b[a]); return this.h ? Nn(t, "tid", this.h) : Hn(t.b, "tid"), this.f ? Nn(t, "eid", this.f) : Hn(t.b, "eid"), (a = iu(this.c)).length && Nn(t, "fw", a.join(",")), t.toString() }, (t = ru.prototype).Ob = function(e, n, t) { var i = new T("popup-closed-by-user"),
                        r = new T("web-storage-unsupported"),
                        o = this,
                        a = !1; return this.ma().then(function() { var t, i;
                        i = { type: "webStorageSupport" }, au(t = o).then(function() { return e = t.v, n = i, e.rb.then(function() { return new fe(function(t) { e.a.send(n.type, n, t, bi("gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER")) }) }); var e, n }).then(function(t) { if (t && t.length && void 0 !== t[0].webStorageSupport) return t[0].webStorageSupport; throw Error() }).then(function(t) { t || (e && ni(e), n(r), a = !0) }) }).o(function() {}).then(function() { if (!a) return n = e, new fe(function(e) { return function t() { mn(2e3).then(function() { return n && !n.closed ? t() : void e() }) }() }); var n }).then(function() { if (!a) return mn(t).then(function() { n(i) }) }) }, t.Xb = function() { var t = gi(); return !Ei(t) && !_i(t) }, t.Tb = function() { return !1 }, t.Mb = function(e, t, n, i, r, o, a, s) { if (!e) return we(new T("popup-blocked")); if (a && !Ei()) return this.ma().o(function(t) { ni(e), r(t) }), i(), ye();
                    this.a || (this.a = ou(su(this))); var u = this; return this.a.then(function() { var t = u.ma().o(function(t) { throw ni(e), r(t), t }); return i(), t }).then(function() { Oo(n), a || ti(uu(u.s, u.g, u.b, t, n, null, o, u.c, void 0, u.i, s, u.f), e) }).o(function(t) { throw "auth/network-request-failed" == t.code && (u.a = null), t }) }, t.Nb = function(t, e, n, i) { this.a || (this.a = ou(su(this))); var r = this; return this.a.then(function() { Oo(e), ti(uu(r.s, r.g, r.b, t, e, Qn(), n, r.c, void 0, r.i, i, r.f)) }).o(function(t) { throw "auth/network-request-failed" == t.code && (r.a = null), t }) }, t.ma = function() { var t = this; return au(this).then(function() { return t.v.rb }).o(function() { throw t.a = null, new T("network-request-failed") }) }, t.$b = function() { return !0 }, t.Ea = function(t) { this.h.push(t) }, t.Sa = function(e) { B(this.h, function(t) { return t == e }) }, (t = cu.prototype).get = function(t) { return ye(this.a.getItem(t)).then(function(t) { return t && Si(t) }) }, t.set = function(t, e) { return ye(this.a.setItem(t, Ai(e))) }, t.U = function(t) { return ye(this.a.removeItem(t)) }, t.ca = function() {}, t.ia = function() {}; var lu, fu = [];

                function du(t, e, n) { ut(t.a) && t.b.addEventListener("message", t.f), void 0 === t.a[e] && (t.a[e] = []), t.a[e].push(n) }

                function pu(t) { this.a = t }

                function vu(t) { this.c = t, this.b = !1, this.a = [] }

                function mu(i, t, e, n) { var r, o, a, s, u = e || {},
                        c = null; if (i.b) return we(Error("connection_unavailable")); var h = n ? 800 : 50,
                        l = "undefined" != typeof MessageChannel ? new MessageChannel : null; return new fe(function(e, n) { l ? (r = Math.floor(Math.random() * Math.pow(10, 20)).toString(), l.port1.start(), a = setTimeout(function() { n(Error("unsupported_event")) }, h), c = { messageChannel: l, onMessage: o = function(t) { t.data.eventId === r && ("ack" === t.data.status ? (clearTimeout(a), s = setTimeout(function() { n(Error("timeout")) }, 3e3)) : "done" === t.data.status ? (clearTimeout(s), void 0 !== t.data.response ? e(t.data.response) : n(Error("unknown_error"))) : (clearTimeout(a), clearTimeout(s), n(Error("invalid_response")))) } }, i.a.push(c), l.port1.addEventListener("message", o), i.c.postMessage({ eventType: t, eventId: r, data: u }, [l.port2])) : n(Error("connection_unavailable")) }).then(function(t) { return gu(i, c), t }).o(function(t) { throw gu(i, c), t }) }

                function gu(t, e) { var n, i;
                    e && (n = e.messageChannel, i = e.onMessage, n && (n.port1.removeEventListener("message", i), n.port1.close()), B(t.a, function(t) { return t == e })) }

                function bu() { if (!Tu()) throw new T("web-storage-unsupported");
                    this.c = {}, this.a = [], this.b = 0, this.m = l.indexedDB, this.type = "indexedDB", this.g = this.v = this.f = this.l = null, this.s = !1, this.h = null; var t, e, n, i = this;
                    ci() && self ? (this.v = (n = ci() ? self : null, V(fu, function(t) { t.b == n && (e = t) }), e || (e = new hu(n), fu.push(e)), e), du(this.v, "keyChanged", function(t, n) { return Nu(i).then(function(e) { return 0 < e.length && V(i.a, function(t) { t(e) }), { keyProcessed: K(e, n.key) } }) }), du(this.v, "ping", function() { return ye(["keyChanged"]) })) : ((t = l.navigator) && t.serviceWorker ? ye().then(function() { return t.serviceWorker.ready }).then(function(t) { return t.active || null }).o(function() { return null }) : ye(null)).then(function(t) {
                        (i.h = t) && (i.g = new vu(new pu(t)), mu(i.g, "ping", null, !0).then(function(t) { t[0].fulfilled && K(t[0].value, "keyChanged") && (i.s = !0) }).o(function() {})) }) }

                function yu(r) { return new fe(function(e, n) { var t = r.m.open("firebaseLocalStorageDb", 1);
                        t.onerror = function(t) { try { t.preventDefault() } catch (t) {}
                            n(Error(t.target.error)) }, t.onupgradeneeded = function(t) { t = t.target.result; try { t.createObjectStore("firebaseLocalStorage", { keyPath: "fbase_key" }) } catch (t) { n(t) } }, t.onsuccess = function(t) { var i;
                            (t = t.target.result).objectStoreNames.contains("firebaseLocalStorage") ? e(t) : (i = r, new fe(function(t, e) { var n = i.m.deleteDatabase("firebaseLocalStorageDb");
                                n.onsuccess = function() { t() }, n.onerror = function(t) { e(Error(t.target.error)) } }).then(function() { return yu(r) }).then(function(t) { e(t) }).o(function(t) { n(t) })) } }) }

                function wu(t) { return t.i || (t.i = yu(t)), t.i }

                function Iu(r, t) { var o = 0; return new fe(function e(n, i) { wu(r).then(t).then(n).o(function(t) { return 3 < ++o ? void i(t) : wu(r).then(function(t) { return t.close(), r.i = void 0, e(n, i) }).o(function(t) { i(t) }) }) }) }

                function Tu() { try { return l.indexedDB } catch (t) { return } }

                function Eu(t) { return t.objectStore("firebaseLocalStorage") }

                function Au(t, e) { return t.transaction(["firebaseLocalStorage"], e ? "readwrite" : "readonly") }

                function ku(t) { return new fe(function(e, n) { t.onsuccess = function(t) { t && t.target ? e(t.target.result) : e() }, t.onerror = function(t) { n(t.target.error) } }) }

                function Su(t, e) { return t.g && t.h && ((n = l.navigator) && n.serviceWorker && n.serviceWorker.controller || null) === t.h ? mu(t.g, "keyChanged", { key: e }, t.s).then(function() {}).o(function() {}) : ye(); var n }

                function Nu(i) { return wu(i).then(function(t) { var r = Eu(Au(t, !1)); return r.getAll ? ku(r.getAll()) : new fe(function(e, n) { var i = [],
                                t = r.openCursor();
                            t.onsuccess = function(t) {
                                (t = t.target.result) ? (i.push(t.value), t.continue()) : e(i) }, t.onerror = function(t) { n(t.target.error) } }) }).then(function(t) { var e = {},
                            n = []; if (0 == i.b) { for (n = 0; n < t.length; n++) e[t[n].fbase_key] = t[n].value;
                            n = function t(e, n) { var i, r = []; for (i in e) i in n && typeof e[i] == typeof n[i] ? "object" == typeof e[i] && null != e[i] && null != n[i] ? 0 < t(e[i], n[i]).length && r.push(i) : e[i] !== n[i] && r.push(i) : r.push(i); for (i in n) i in e || r.push(i); return r }(i.c, e), i.c = e } return n }) }

                function _u(t) { t.l && t.l.cancel("STOP_EVENT"), t.f && (clearTimeout(t.f), t.f = null) }

                function Ou(t) { var i = this,
                        r = null;
                    this.a = [], this.type = "indexedDB", this.c = t, this.b = ye().then(function() { if (Tu()) { var e = Ni(),
                                n = "__sak" + e; return lu = lu || new bu, (r = lu).set(n, e).then(function() { return r.get(n) }).then(function(t) { if (t !== e) throw Error("indexedDB not supported!"); return r.U(n) }).then(function() { return r }).o(function() { return i.c }) } return i.c }).then(function(t) { return i.type = t.type, t.ca(function(e) { V(i.a, function(t) { t(e) }) }), t }) }

                function Cu() { this.a = {}, this.type = "inMemory" }

                function Ru() { if (! function() { var t = "Node" == hi(); if (!(t = Du() || t && zl.default.INTERNAL.node && zl.default.INTERNAL.node.localStorage)) return !1; try { return t.setItem("__sak", "1"), t.removeItem("__sak"), !0 } catch (t) { return !1 } }()) { if ("Node" == hi()) throw new T("internal-error", "The LocalStorage compatibility library was not found."); throw new T("web-storage-unsupported") }
                    this.a = Du() || zl.default.INTERNAL.node.localStorage, this.type = "localStorage" }

                function Du() { try { var t = l.localStorage,
                            e = Ni(); return t && (t.setItem(e, "1"), t.removeItem(e)), t } catch (t) { return null } }

                function Pu() { this.type = "nullStorage" }

                function Lu() { if (! function() { var t = "Node" == hi(); if (!(t = xu() || t && zl.default.INTERNAL.node && zl.default.INTERNAL.node.sessionStorage)) return !1; try { return t.setItem("__sak", "1"), t.removeItem("__sak"), !0 } catch (t) { return !1 } }()) { if ("Node" == hi()) throw new T("internal-error", "The SessionStorage compatibility library was not found."); throw new T("web-storage-unsupported") }
                    this.a = xu() || zl.default.INTERNAL.node.sessionStorage, this.type = "sessionStorage" }

                function xu() { try { var t = l.sessionStorage,
                            e = Ni(); return t && (t.setItem(e, "1"), t.removeItem(e)), t } catch (t) { return null } }

                function Mu() { var t = {};
                    t.Browser = Vu, t.Node = Fu, t.ReactNative = qu, t.Worker = Hu, this.a = t[hi()] }
                hu.prototype.c = function(n) { var e, i = n.data.eventType,
                        r = n.data.eventId,
                        t = this.a[i];
                    t && 0 < t.length && (n.ports[0].postMessage({ status: "ack", eventId: r, eventType: i, response: null }), e = [], V(t, function(t) { e.push(ye().then(function() { return t(n.origin, n.data.data) })) }), Te(e).then(function(t) { var e = [];
                        V(t, function(t) { e.push({ fulfilled: t.Pb, value: t.value, reason: t.reason ? t.reason.message : void 0 }) }), V(e, function(t) { for (var e in t) void 0 === t[e] && delete t[e] }), n.ports[0].postMessage({ status: "done", eventId: r, eventType: i, response: e }) })) }, pu.prototype.postMessage = function(t, e) { this.a.postMessage(t, e) }, vu.prototype.close = function() { for (; 0 < this.a.length;) gu(this, this.a[0]);
                    this.b = !0 }, (t = bu.prototype).set = function(i, r) { var o = this,
                        a = !1; return Iu(this, function(t) { return ku((t = Eu(Au(t, !0))).get(i)) }).then(function(n) { return Iu(o, function(t) { if (t = Eu(Au(t, !0)), n) return n.value = r, ku(t.put(n));
                            o.b++, a = !0; var e = {}; return e.fbase_key = i, e.value = r, ku(t.add(e)) }) }).then(function() { return o.c[i] = r, Su(o, i) }).oa(function() { a && o.b-- }) }, t.get = function(e) { return Iu(this, function(t) { return ku(Eu(Au(t, !1)).get(e)) }).then(function(t) { return t && t.value }) }, t.U = function(e) { var n = this,
                        i = !1; return Iu(this, function(t) { return i = !0, n.b++, ku(Eu(Au(t, !0)).delete(e)) }).then(function() { return delete n.c[e], Su(n, e) }).oa(function() { i && n.b-- }) }, t.ca = function(t) { var n;
                    0 == this.a.length && (_u(n = this), function e() { n.f = setTimeout(function() { n.l = Nu(n).then(function(e) { 0 < e.length && V(n.a, function(t) { t(e) }) }).then(function() { e() }).o(function(t) { "STOP_EVENT" != t.message && e() }) }, 800) }()), this.a.push(t) }, t.ia = function(e) { B(this.a, function(t) { return t == e }), 0 == this.a.length && _u(this) }, (t = Ou.prototype).get = function(e) { return this.b.then(function(t) { return t.get(e) }) }, t.set = function(e, n) { return this.b.then(function(t) { return t.set(e, n) }) }, t.U = function(e) { return this.b.then(function(t) { return t.U(e) }) }, t.ca = function(t) { this.a.push(t) }, t.ia = function(e) { B(this.a, function(t) { return t == e }) }, (t = Cu.prototype).get = function(t) { return ye(this.a[t]) }, t.set = function(t, e) { return this.a[t] = e, ye() }, t.U = function(t) { return delete this.a[t], ye() }, t.ca = function() {}, t.ia = function() {}, (t = Ru.prototype).get = function(t) { var e = this; return ye().then(function() { return Si(e.a.getItem(t)) }) }, t.set = function(e, n) { var i = this; return ye().then(function() { var t = Ai(n);
                        null === t ? i.U(e) : i.a.setItem(e, t) }) }, t.U = function(t) { var e = this; return ye().then(function() { e.a.removeItem(t) }) }, t.ca = function(t) { l.window && Ze(l.window, "storage", t) }, t.ia = function(t) { l.window && en(l.window, "storage", t) }, (t = Pu.prototype).get = function() { return ye(null) }, t.set = function() { return ye() }, t.U = function() { return ye() }, t.ca = function() {}, t.ia = function() {}, (t = Lu.prototype).get = function(t) { var e = this; return ye().then(function() { return Si(e.a.getItem(t)) }) }, t.set = function(e, n) { var i = this; return ye().then(function() { var t = Ai(n);
                        null === t ? i.U(e) : i.a.setItem(e, t) }) }, t.U = function(t) { var e = this; return ye().then(function() { e.a.removeItem(t) }) }, t.ca = function() {}, t.ia = function() {}; var ju, Uu, Vu = { F: Ru, bb: Lu },
                    Fu = { F: Ru, bb: Lu },
                    qu = { F: cu, bb: Pu },
                    Hu = { F: Ru, bb: Pu },
                    Ku = { rd: "local", NONE: "none", td: "session" };

                function Gu() { var t = !(_i(gi()) || !ui()),
                        e = Ei(),
                        n = yi();
                    this.m = t, this.h = e, this.l = n, this.a = {}, t = ju = ju || new Mu; try { this.g = !Zn() && Li() || !l.indexedDB ? new t.a.F : new Ou(new(ci() ? Cu : t.a.F)) } catch (t) { this.g = new Cu, this.h = !0 } try { this.i = new t.a.bb } catch (t) { this.i = new Cu }
                    this.v = new Cu, this.f = b(this.Yb, this), this.b = {} }

                function Bu() { return Uu = Uu || new Gu }

                function Wu(t, e) { switch (e) {
                        case "session":
                            return t.i;
                        case "none":
                            return t.v;
                        default:
                            return t.g } }

                function Xu(t, e) { return "firebase:" + t.name + (e ? ":" + e : "") }

                function Ju(t, e, n) { return n = Xu(e, n), "local" == e.F && (t.b[n] = null), Wu(t, e.F).U(n) }

                function Yu(t) { t.c && (clearInterval(t.c), t.c = null) }

                function zu(t) { this.a = t, this.b = Bu() }(t = Gu.prototype).get = function(t, e) { return Wu(this, t.F).get(Xu(t, e)) }, t.set = function(e, t, n) { var i = Xu(e, n),
                        r = this,
                        o = Wu(this, e.F); return o.set(i, t).then(function() { return o.get(i) }).then(function(t) { "local" == e.F && (r.b[i] = t) }) }, t.addListener = function(t, e, n) { var i;
                    t = Xu(t, e), this.l && (this.b[t] = l.localStorage.getItem(t)), ut(this.a) && (Wu(this, "local").ca(this.f), this.h || (Zn() || !Li()) && l.indexedDB || !this.l || (Yu(i = this), i.c = setInterval(function() { for (var t in i.a) { var e = l.localStorage.getItem(t),
                                n = i.b[t];
                            e != n && (i.b[t] = e, e = new qe({ type: "storage", key: t, target: window, oldValue: n, newValue: e, a: !0 }), i.Yb(e)) } }, 1e3))), this.a[t] || (this.a[t] = []), this.a[t].push(n) }, t.removeListener = function(t, e, n) { t = Xu(t, e), this.a[t] && (B(this.a[t], function(t) { return t == n }), 0 == this.a[t].length && delete this.a[t]), ut(this.a) && (Wu(this, "local").ia(this.f), Yu(this)) }, t.Yb = function(t) { if (t && t.g) { var e = t.a.key; if (null == e)
                            for (var n in this.a) { var i = this.b[n];
                                void 0 === i && (i = null); var r = l.localStorage.getItem(n);
                                r !== i && (this.b[n] = r, this.mb(n)) } else if (0 == e.indexOf("firebase:") && this.a[e]) { if (void 0 !== t.a.a ? Wu(this, "local").ia(this.f) : Yu(this), this.m)
                                    if (n = l.localStorage.getItem(e), (i = t.a.newValue) !== n) null !== i ? l.localStorage.setItem(e, i) : l.localStorage.removeItem(e);
                                    else if (this.b[e] === i && void 0 === t.a.a) return; var o = this,
                                    n = function() { void 0 === t.a.a && o.b[e] === l.localStorage.getItem(e) || (o.b[e] = l.localStorage.getItem(e), o.mb(e)) };
                                Ht && Zt && 10 == Zt && l.localStorage.getItem(e) !== t.a.newValue && t.a.newValue !== t.a.oldValue ? setTimeout(n, 10) : n() } } else V(t, b(this.mb, this)) }, t.mb = function(t) { this.a[t] && V(this.a[t], function(t) { t() }) }; var $u, Zu = { name: "authEvent", F: "local" };

                function Qu() { this.a = Bu() }

                function tc(t, e) { this.b = ec, this.f = l.Uint8Array ? new Uint8Array(this.b) : Array(this.b), this.g = this.c = 0, this.a = [], this.i = t, this.h = e, this.l = l.Int32Array ? new Int32Array(64) : Array(64), void 0 === $u && ($u = l.Int32Array ? new Int32Array(uc) : uc), this.reset() }
                w(tc, function() { this.b = -1 }); for (var ec = 64, nc = ec - 1, ic = [], rc = 0; rc < nc; rc++) ic[rc] = 0; var oc = W(128, ic);

                function ac(t) { for (var e = t.f, n = t.l, i = 0, r = 0; r < e.length;) n[i++] = e[r] << 24 | e[r + 1] << 16 | e[r + 2] << 8 | e[r + 3], r = 4 * i; for (e = 16; e < 64; e++) { var r = 0 | n[e - 15],
                            i = 0 | n[e - 2],
                            o = (0 | n[e - 16]) + ((r >>> 7 | r << 25) ^ (r >>> 18 | r << 14) ^ r >>> 3) | 0,
                            a = (0 | n[e - 7]) + ((i >>> 17 | i << 15) ^ (i >>> 19 | i << 13) ^ i >>> 10) | 0;
                        n[e] = o + a | 0 }
                    i = 0 | t.a[0], r = 0 | t.a[1]; var s = 0 | t.a[2],
                        u = 0 | t.a[3],
                        c = 0 | t.a[4],
                        h = 0 | t.a[5],
                        l = 0 | t.a[6]; for (o = 0 | t.a[7], e = 0; e < 64; e++) { var f = ((i >>> 2 | i << 30) ^ (i >>> 13 | i << 19) ^ (i >>> 22 | i << 10)) + (i & r ^ i & s ^ r & s) | 0;
                        a = (o = o + ((c >>> 6 | c << 26) ^ (c >>> 11 | c << 21) ^ (c >>> 25 | c << 7)) | 0) + ((a = (a = c & h ^ ~c & l) + (0 | $u[e]) | 0) + (0 | n[e]) | 0) | 0, o = l, l = h, h = c, c = u + a | 0, u = s, s = r, r = i, i = a + f | 0 }
                    t.a[0] = t.a[0] + i | 0, t.a[1] = t.a[1] + r | 0, t.a[2] = t.a[2] + s | 0, t.a[3] = t.a[3] + u | 0, t.a[4] = t.a[4] + c | 0, t.a[5] = t.a[5] + h | 0, t.a[6] = t.a[6] + l | 0, t.a[7] = t.a[7] + o | 0 }

                function sc(t, e, n) { void 0 === n && (n = e.length); var i = 0,
                        r = t.c; if ("string" == typeof e)
                        for (; i < n;) t.f[r++] = e.charCodeAt(i++), r == t.b && (ac(t), r = 0);
                    else { if (!p(e)) throw Error("message must be string or array"); for (; i < n;) { var o = e[i++]; if (!("number" == typeof o && 0 <= o && o <= 255 && o == (0 | o))) throw Error("message must be a byte array");
                            t.f[r++] = o, r == t.b && (ac(t), r = 0) } }
                    t.c = r, t.g += n }
                tc.prototype.reset = function() { this.g = this.c = 0, this.a = l.Int32Array ? new Int32Array(this.h) : X(this.h) }; var uc = [1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298];

                function cc() { tc.call(this, 8, hc) }
                w(cc, tc); var hc = [1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225];

                function lc(t, e, n, i, r, o) { this.v = t, this.i = e, this.l = n, this.m = i || null, this.u = r || null, this.s = o, this.h = e + ":" + n, this.C = new Qu, this.g = new zu(this.h), this.f = null, this.b = [], this.a = this.c = null }

                function fc(t) { return new T("invalid-cordova-configuration", t) }

                function dc(t) { var e = new cc;
                    sc(e, t), t = []; var n = 8 * e.g;
                    e.c < 56 ? sc(e, oc, 56 - e.c) : sc(e, oc, e.b - (e.c - 56)); for (var i = 63; 56 <= i; i--) e.f[i] = 255 & n, n /= 256; for (ac(e), i = n = 0; i < e.i; i++)
                        for (var r = 24; 0 <= r; r -= 8) t[n++] = e.a[i] >> r & 255; return q(t, function(t) { return 1 < (t = t.toString(16)).length ? t : "0" + t }).join("") }

                function pc(t, e) { for (var n = 0; n < t.b.length; n++) try { t.b[n](e) } catch (t) {} }

                function vc(s) { return s.f || (s.f = s.ma().then(function() { return new fe(function(n) {
                            function e(i) { t = !0, a && a.cancel(), mc(r).then(function(t) { var e, n = o;
                                    t && i && i.url && (e = null, n = (e = -1 != (n = Jr(i.url)).indexOf("/__/auth/callback") ? (e = "object" == typeof(e = Si(_n(e = On(n), "firebaseError") || null)) ? E(e) : null) ? new Co(t.c, t.b, null, null, e, null, t.T()) : new Co(t.c, t.b, n, t.f, null, null, t.T()) : e) || o), pc(r, n) }) } var r, o, t, a, i;
                            s.Ea(function t(e) { return n(e), s.Sa(t), !1 }), r = s, o = new Co("unknown", null, null, null, new T("no-auth-event")), t = !1, a = mn(500).then(function() { return mc(r).then(function() { t || pc(r, o) }) }), i = l.handleOpenURL, l.handleOpenURL = function(t) { if (0 == t.toLowerCase().indexOf(bi("BuildInfo.packageName", l).toLowerCase() + "://") && e({ url: t }), "function" == typeof i) try { i(t) } catch (t) { console.error(t) } }, Lo = Lo || new Do,
                                function(t) { var n = Lo;
                                    n.a.push(t), n.b || (n.b = function(t) { for (var e = 0; e < n.a.length; e++) n.a[e](t) }, "function" == typeof(t = bi("universalLinks.subscribe", l)) && t(null, n.b)) }(e) }) })), s.f }

                function mc(e) { var t, n = null; return (t = e.g).b.get(Zu, t.a).then(Ro).then(function(t) { return n = t, Ju((t = e.g).b, Zu, t.a) }).then(function() { return n }) }

                function gc(t) { this.a = t, this.b = Bu() }(t = lc.prototype).ma = function() { return this.Ia || (this.Ia = (si(void 0) ? ai().then(function() { return new fe(function(t, e) { var n = l.document,
                                i = setTimeout(function() { e(Error("Cordova framework is not ready.")) }, 1e3);
                            n.addEventListener("deviceready", function() { clearTimeout(i), t() }, !1) }) }) : we(Error("Cordova must run in an Android or iOS file scheme."))).then(function() { if ("function" != typeof bi("universalLinks.subscribe", l)) throw fc("cordova-universal-links-plugin-fix is not installed"); if (void 0 === bi("BuildInfo.packageName", l)) throw fc("cordova-plugin-buildinfo is not installed"); if ("function" != typeof bi("cordova.plugins.browsertab.openUrl", l)) throw fc("cordova-plugin-browsertab is not installed"); if ("function" != typeof bi("cordova.InAppBrowser.open", l)) throw fc("cordova-plugin-inappbrowser is not installed") }, function() { throw new T("cordova-not-ready") })) }, t.Ob = function(t, e) { return e(new T("operation-not-supported-in-this-environment")), ye() }, t.Mb = function() { return we(new T("operation-not-supported-in-this-environment")) }, t.$b = function() { return !1 }, t.Xb = function() { return !0 }, t.Tb = function() { return !0 }, t.Nb = function(t, e, n, i) { if (this.c) return we(new T("redirect-operation-pending")); var r = this,
                        o = l.document,
                        a = null,
                        s = null,
                        u = null,
                        c = null; return this.c = ye().then(function() { return Oo(e), vc(r) }).then(function() { return function(n, t, e, i, r) { var o = function() { for (var t = 20, e = []; 0 < t;) e.push("1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".charAt(Math.floor(62 * Math.random()))), t--; return e.join("") }(),
                                a = new Co(t, i, null, o, new T("no-auth-event"), null, r),
                                s = bi("BuildInfo.packageName", l); if ("string" != typeof s) throw new T("invalid-cordova-configuration"); var u = bi("BuildInfo.displayName", l),
                                c = {}; if (gi().toLowerCase().match(/iphone|ipad|ipod/)) c.ibi = s;
                            else { if (!gi().toLowerCase().match(/android/)) return we(new T("operation-not-supported-in-this-environment"));
                                c.apn = s }
                            u && (c.appDisplayName = u), o = dc(o), c.sessionId = o; var h = uu(n.v, n.i, n.l, t, e, null, i, n.m, c, n.u, r, n.s); return n.ma().then(function() { var t = n.h; return n.C.a.set(Zu, a.w(), t) }).then(function() { var t = bi("cordova.plugins.browsertab.isAvailable", l); if ("function" != typeof t) throw new T("invalid-cordova-configuration"); var e = null;
                                t(function(t) { if (t) { if ("function" != typeof(e = bi("cordova.plugins.browsertab.openUrl", l))) throw new T("invalid-cordova-configuration");
                                        e(h) } else { if ("function" != typeof(e = bi("cordova.InAppBrowser.open", l))) throw new T("invalid-cordova-configuration");
                                        t = gi(), n.a = e(h, t.match(/(iPad|iPhone|iPod).*OS 7_\d/i) || t.match(/(iPad|iPhone|iPod).*OS 8_\d/i) ? "_blank" : "_system", "location=yes") } }) }) }(r, t, e, n, i) }).then(function() { return new fe(function(e, t) { s = function() { var t = bi("cordova.plugins.browsertab.close", l); return e(), "function" == typeof t && t(), r.a && "function" == typeof r.a.close && (r.a.close(), r.a = null), !1 }, r.Ea(s), u = function() { a = a || mn(2e3).then(function() { t(new T("redirect-cancelled-by-user")) }) }, c = function() { Ri() && u() }, o.addEventListener("resume", u, !1), gi().toLowerCase().match(/android/) || o.addEventListener("visibilitychange", c, !1) }).o(function(t) { return mc(r).then(function() { throw t }) }) }).oa(function() { u && o.removeEventListener("resume", u, !1), c && o.removeEventListener("visibilitychange", c, !1), a && a.cancel(), s && r.Sa(s), r.c = null }) }, t.Ea = function(e) { this.b.push(e), vc(this).o(function(t) { "auth/invalid-cordova-configuration" === t.code && (t = new Co("unknown", null, null, null, new T("no-auth-event")), e(t)) }) }, t.Sa = function(e) { B(this.b, function(t) { return t == e }) }; var bc = { name: "pendingRedirect", F: "session" };

                function yc(t) { return Ju(t.b, bc, t.a) }

                function wc(t, e, n, i) { this.i = {}, this.u = 0, this.D = t, this.v = e, this.m = n, this.J = i, this.h = [], this.f = !1, this.l = b(this.s, this), this.b = new xc, this.C = new Fc, this.g = new gc(Pc(this.v, this.m)), this.c = {}, this.c.unknown = this.b, this.c.signInViaRedirect = this.b, this.c.linkViaRedirect = this.b, this.c.reauthViaRedirect = this.b, this.c.signInViaPopup = this.C, this.c.linkViaPopup = this.C, this.c.reauthViaPopup = this.C, this.a = Ic(this.D, this.v, this.m, A, this.J) }

                function Ic(t, e, n, i, r) { var o = zl.default.SDK_VERSION || null; return new(si() ? lc : ru)(t, e, n, o, i, r) }

                function Tc(e) { e.f || (e.f = !0, e.a.Ea(e.l)); var n = e.a; return e.a.ma().o(function(t) { throw e.a == n && e.reset(), t }) }

                function Ec(n) { n.a.Xb() && Tc(n).o(function(t) { var e = new Co("unknown", null, null, null, new T("operation-not-supported-in-this-environment"));
                        Oc(t) && n.s(e) }), n.a.Tb() || Mc(n.b) }

                function Ac(n, t) { K(n.h, t) || n.h.push(t), n.f || (t = n.g).b.get(bc, t.a).then(function(t) { return "pending" == t }).then(function(t) { t ? yc(n.g).then(function() { Tc(n).o(function(t) { var e = new Co("unknown", null, null, null, new T("operation-not-supported-in-this-environment"));
                                Oc(t) && n.s(e) }) }) : Ec(n) }).o(function() { Ec(n) }) }

                function kc(t, e) { B(t.h, function(t) { return t == e }) }
                wc.prototype.reset = function() { this.f = !1, this.a.Sa(this.l), this.a = Ic(this.D, this.v, this.m, null, this.J), this.i = {} }, wc.prototype.s = function(t) { if (!t) throw new T("invalid-auth-event"); if (6e5 <= Date.now() - this.u && (this.i = {}, this.u = 0), t && t.getUid() && this.i.hasOwnProperty(t.getUid())) return !1; for (var e = !1, n = 0; n < this.h.length; n++) { var i = this.h[n]; if (i.Fb(t.c, t.b)) {
                            (e = this.c[t.c]) && (e.h(t, i), t && (t.f || t.b) && (this.i[t.getUid()] = !0, this.u = Date.now())), e = !0; break } } return Mc(this.b), e }; var Sc = new Ci(2e3, 1e4),
                    Nc = new Ci(3e4, 6e4);

                function _c(t, e, n, i, r, o, a) { return t.a.Mb(e, n, i, function() { t.f || (t.f = !0, t.a.Ea(t.l)) }, function() { t.reset() }, r, o, a) }

                function Oc(t) { return !(!t || "auth/cordova-not-ready" != t.code) }

                function Cc(e, t, n, i, r) { var o, a; return (a = e.g).b.set(bc, "pending", a.a).then(function() { return e.a.Nb(t, n, i, r).o(function(t) { if (Oc(t)) throw new T("operation-not-supported-in-this-environment"); return o = t, yc(e.g).then(function() { throw o }) }).then(function() { return e.a.$b() ? new fe(function() {}) : yc(e.g).then(function() { return e.qa() }).then(function() {}).o(function() {}) }) }) }

                function Rc(t, e, n, i, r) { return t.a.Ob(i, function(t) { e.na(n, null, t, r) }, Sc.get()) }
                wc.prototype.qa = function() { return this.b.qa() }; var Dc = {};

                function Pc(t, e, n) { return t = t + ":" + e, t = n ? t + ":" + n.url : t }

                function Lc(t, e, n, i) { var r = Pc(e, n, i); return Dc[r] || (Dc[r] = new wc(t, e, n, i)), Dc[r] }

                function xc() { this.b = null, this.f = [], this.c = [], this.a = null, this.i = this.g = !1 }

                function Mc(t) { t.g || (t.g = !0, Vc(t, !1, null, null)) }

                function jc(t) { t.g && !t.i && Vc(t, !1, null, null) }

                function Uc(t, e) { if (t.b = function() { return ye(e) }, t.f.length)
                        for (var n = 0; n < t.f.length; n++) t.f[n](e) }

                function Vc(t, e, n, i) { e ? i ? function(t, e) { if (t.b = function() { return we(e) }, t.c.length)
                            for (var n = 0; n < t.c.length; n++) t.c[n](e) }(t, i) : Uc(t, n) : Uc(t, { user: null }), t.f = [], t.c = [] }

                function Fc() {}

                function qc() { this.ib = !1, Object.defineProperty(this, "appVerificationDisabled", { get: function() { return this.ib }, set: function(t) { this.ib = t }, enumerable: !1 }) }

                function Hc(t, e) { this.a = e, Vi(this, "verificationId", t) }

                function Kc(t, e, n, i) { return new So(t).fb(e, n).then(function(t) { return new Hc(t, i) }) }

                function Gc(t) { var e = Lr(t); if (!(e && e.exp && e.auth_time && e.iat)) throw new T("internal-error", "An internal error occurred. The token obtained by Firebase appears to be malformed. Please retry the operation.");
                    Fi(this, { token: t, expirationTime: Pi(1e3 * e.exp), authTime: Pi(1e3 * e.auth_time), issuedAtTime: Pi(1e3 * e.iat), signInProvider: e.firebase && e.firebase.sign_in_provider ? e.firebase.sign_in_provider : null, signInSecondFactor: e.firebase && e.firebase.sign_in_second_factor ? e.firebase.sign_in_second_factor : null, claims: e }) }

                function Bc(t, e, n) { var i = e && e[Xc]; if (!i) throw new T("argument-error", "Internal assert: Invalid MultiFactorResolver");
                    this.a = t, this.f = ct(e), this.g = n, this.c = new Yr(null, i), this.b = []; var r = this;
                    V(e[Wc] || [], function(t) {
                        (t = Gi(t)) && r.b.push(t) }), Vi(this, "auth", this.a), Vi(this, "session", this.c), Vi(this, "hints", this.b) }
                xc.prototype.reset = function() { this.b = null, this.a && (this.a.cancel(), this.a = null) }, xc.prototype.h = function(t, e) { var n, i, r, o;
                    t ? (this.reset(), this.g = !0, n = t.c, i = t.b, r = t.a && "auth/web-storage-unsupported" == t.a.code, o = t.a && "auth/operation-not-supported-in-this-environment" == t.a.code, this.i = !(!r && !o), "unknown" != n || r || o ? t.a ? (Vc(this, !0, null, t.a), ye()) : e.Fa(n, i) ? function(e, t, n) { n = n.Fa(t.c, t.b); var i = t.g,
                            r = t.f,
                            o = t.i,
                            a = t.T(),
                            s = !!t.c.match(/Redirect$/);
                        n(i, r, a, o).then(function(t) { Vc(e, s, t, null) }).o(function(t) { Vc(e, s, null, t) }) }(this, t, e) : we(new T("invalid-auth-event")) : (Vc(this, !1, null, null), ye())) : we(new T("invalid-auth-event")) }, xc.prototype.qa = function() { var r = this; return new fe(function(t, e) { var n, i;
                        r.b ? r.b().then(t, e) : (r.f.push(t), r.c.push(e), n = r, i = new T("timeout"), n.a && n.a.cancel(), n.a = mn(Nc.get()).then(function() { n.b || (n.g = !0, Vc(n, !0, null, i)) })) }) }, Fc.prototype.h = function(t, e) { var n, i, r, o, a;
                    t ? (n = t.c, i = t.b, t.a ? (e.na(t.c, null, t.a, t.b), ye()) : e.Fa(n, i) ? (r = e, o = (t = t).b, a = t.c, r.Fa(a, o)(t.g, t.f, t.T(), t.i).then(function(t) { r.na(a, t, null, o) }).o(function(t) { r.na(a, null, t, o) })) : we(new T("invalid-auth-event"))) : we(new T("invalid-auth-event")) }, Hc.prototype.confirm = function(t) { return t = No(this.verificationId, t), this.a(t) }; var Wc = "mfaInfo",
                    Xc = "mfaPendingCredential";

                function Jc(t, e, n, i) { T.call(this, "multi-factor-auth-required", i, e), this.b = new Bc(t, e, n), Vi(this, "resolver", this.b) }

                function Yc(t, e, n) { if (t && m(t.serverResponse) && "auth/multi-factor-auth-required" === t.code) try { return new Jc(e, t.serverResponse, n, t.message) } catch (t) {}
                    return null }

                function zc() {}

                function $c(t) { Vi(this, "factorId", t.fa), this.a = t }

                function Zc(t) { if ($c.call(this, t), this.a.fa != So.PROVIDER_ID) throw new T("argument-error", "firebase.auth.PhoneMultiFactorAssertion requires a valid firebase.auth.PhoneAuthCredential") }

                function Qc(t, e) { for (var n in Fe.call(this, t), e) this[n] = e[n] }

                function th(t, e) { this.a = t, this.b = [], this.c = b(this.yc, this), Ze(this.a, "userReloaded", this.c); var i = [];
                    e && e.multiFactor && e.multiFactor.enrolledFactors && V(e.multiFactor.enrolledFactors, function(t) { var e = null,
                            n = {}; if (t) { t.uid && (n[Xi] = t.uid), t.displayName && (n[Bi] = t.displayName), t.enrollmentTime && (n[Wi] = new Date(t.enrollmentTime).toISOString()), t.phoneNumber && (n[Ji] = t.phoneNumber); try { e = new Yi(n) } catch (t) {}
                            t = e } else t = null;
                        t && i.push(t) }), eh(this, i) }

                function eh(t, e) { t.b = e, Vi(t, "enrolledFactors", e) }

                function nh(t, e, n) { if (this.h = t, this.i = e, this.g = n, this.c = 3e4, this.f = 96e4, this.b = null, this.a = this.c, this.f < this.c) throw Error("Proactive refresh lower bound greater than upper bound!") }

                function ih(t, e) { return e ? (t.a = t.c, t.g()) : (e = t.a, t.a *= 2, t.a > t.f && (t.a = t.f), e) }

                function rh(t) { this.f = t, this.b = this.a = null, this.c = Date.now() }

                function oh(t, e) { void 0 === e && (e = t.b ? (e = t.b).a - e.g : 0), t.c = Date.now() + 1e3 * e }

                function ah(t, e) { t.b = Pr(e[Ha] || ""), t.a = e.refreshToken, oh(t, void 0 !== (e = e.expiresIn) ? Number(e) : void 0) }

                function sh(e, t) { return i = e.f, r = t, new fe(function(e, n) { "refresh_token" == r.grant_type && r.refresh_token || "authorization_code" == r.grant_type && r.code ? $a(i, i.l + "?key=" + encodeURIComponent(i.c), function(t) { t ? t.error ? n(Ys(t)) : t.access_token && t.refresh_token ? e(t) : n(new T("internal-error")) : n(new T("network-request-failed")) }, "POST", qn(r).toString(), i.g, i.m.get()) : n(new T("internal-error")) }).then(function(t) { return e.b = Pr(t.access_token), e.a = t.refresh_token, oh(e, t.expires_in), { accessToken: e.b.toString(), refreshToken: e.a } }).o(function(t) { throw "auth/user-token-expired" == t.code && (e.a = null), t }); var i, r }

                function uh(t, e) { this.a = t || null, this.b = e || null, Fi(this, { lastSignInTime: Pi(e || null), creationTime: Pi(t || null) }) }

                function ch(t, e, n, i, r, o) { Fi(this, { uid: t, displayName: i || null, photoURL: r || null, email: n || null, phoneNumber: o || null, providerId: e }) }

                function hh(t, e, n) { this.J = [], this.l = t.apiKey, this.m = t.appName, this.s = t.authDomain || null; var i, r = zl.default.SDK_VERSION ? mi(zl.default.SDK_VERSION) : null;
                    this.a = new Fa(this.l, _(A), r), t.emulatorConfig && Ja(this.a, t.emulatorConfig), this.b = new rh(this.a), bh(this, e[Ha]), ah(this.b, e), Vi(this, "refreshToken", this.b.a), Ih(this, n || {}), ln.call(this), this.R = !1, this.s && wi() && (this.i = Lc(this.s, this.l, this.m)), this.S = [], this.h = null, this.u = (i = this, new nh(function() { return i.I(!0) }, function(t) { return !(!t || "auth/network-request-failed" != t.code) }, function() { var t = i.b.c - Date.now() - 3e5; return 0 < t ? t : 0 })), this.aa = b(this.hb, this); var o = this;
                    this.ya = null, this.Oa = function(t) { o.wa(t.h) }, this.ja = null, this.Aa = function(t) { Ja(o.a, t.c) }, this.X = null, this.$ = [], this.Ba = function(t) { dh(o, t.f) }, this.ba = null, this.O = new th(this, n), Vi(this, "multiFactor", this.O) }

                function lh(t, e) { t.ja && en(t.ja, "languageCodeChanged", t.Oa), (t.ja = e) && Ze(e, "languageCodeChanged", t.Oa) }

                function fh(t, e) { t.X && en(t.X, "emulatorConfigChanged", t.Aa), (t.X = e) && Ze(e, "emulatorConfigChanged", t.Aa) }

                function dh(t, e) { t.$ = e, za(t.a, zl.default.SDK_VERSION ? mi(zl.default.SDK_VERSION, t.$) : null) }

                function ph(t, e) { t.ba && en(t.ba, "frameworkChanged", t.Ba), (t.ba = e) && Ze(e, "frameworkChanged", t.Ba) }

                function vh(e) { try { return zl.default.app(e.m).auth() } catch (t) { throw new T("internal-error", "No firebase.auth.Auth instance is available for the Firebase App '" + e.m + "'!") } }

                function mh(t) { t.D || t.u.b || (t.u.start(), en(t, "tokenChanged", t.aa), Ze(t, "tokenChanged", t.aa)) }

                function gh(t) { en(t, "tokenChanged", t.aa), t.u.stop() }

                function bh(t, e) { t.za = e, Vi(t, "_lat", e) }

                function yh(t) { for (var e = [], n = 0; n < t.S.length; n++) e.push(t.S[n](t)); return Te(e).then(function() { return t }) }

                function wh(t) { t.i && !t.R && (t.R = !0, Ac(t.i, t)) }

                function Ih(t, e) { Fi(t, { uid: e.uid, displayName: e.displayName || null, photoURL: e.photoURL || null, email: e.email || null, emailVerified: e.emailVerified || !1, phoneNumber: e.phoneNumber || null, isAnonymous: e.isAnonymous || !1, tenantId: e.tenantId || null, metadata: new uh(e.createdAt, e.lastLoginAt), providerData: [] }), t.a.b = t.tenantId }

                function Th() {}

                function Eh(t) { return ye().then(function() { if (t.D) throw new T("app-deleted") }) }

                function Ah(t) { return q(t.providerData, function(t) { return t.providerId }) }

                function kh(t, e) { e && (Sh(t, e.providerId), t.providerData.push(e)) }

                function Sh(t, e) { B(t.providerData, function(t) { return t.providerId == e }) }

                function Nh(t, e, n) {
                    ("uid" != e || n) && t.hasOwnProperty(e) && Vi(t, e, n) }

                function _h(e, t) { var n, i;
                    e != t && (Fi(e, { uid: t.uid, displayName: t.displayName, photoURL: t.photoURL, email: t.email, emailVerified: t.emailVerified, phoneNumber: t.phoneNumber, isAnonymous: t.isAnonymous, tenantId: t.tenantId, providerData: [] }), t.metadata ? Vi(e, "metadata", new uh((i = t.metadata).a, i.b)) : Vi(e, "metadata", new uh), V(t.providerData, function(t) { kh(e, t) }), n = e.b, i = t.b, n.b = i.b, n.a = i.a, n.c = i.c, Vi(e, "refreshToken", e.b.a), eh(e.O, t.O.b)) }

                function Oh(r) { return r.I().then(function(t) { var e, n, i = r.isAnonymous; return n = t, Xs((e = r).a, As, { idToken: n }).then(b(e.Kc, e)).then(function() { return i || Nh(r, "isAnonymous", !1), t }) }) }

                function Ch(t, e) { e[Ha] && t.za != e[Ha] && (ah(t.b, e), t.dispatchEvent(new Qc("tokenChanged")), bh(t, e[Ha]), Nh(t, "refreshToken", t.b.a)) }

                function Rh(t, e) { return Oh(t).then(function() { if (K(Ah(t), e)) return yh(t).then(function() { throw new T("provider-already-linked") }) }) }

                function Dh(t, e, n) { return qi({ user: t, credential: _o(e), additionalUserInfo: e = Vr(e), operationType: n }) }

                function Ph(t, e) { return Ch(t, e), t.reload().then(function() { return t }) }

                function Lh(n, i, t, e, r) { if (!wi()) return we(new T("operation-not-supported-in-this-environment")); if (n.h && !r) return we(n.h); var o = Ur(t.providerId),
                        a = Ni(n.uid + ":::"),
                        s = null,
                        u = ii(s = (!Ei() || ui()) && n.s && t.isOAuthProvider ? uu(n.s, n.l, n.m, i, t, null, a, zl.default.SDK_VERSION || null, null, null, n.tenantId) : s, o && o.ua, o && o.ta); return e = e().then(function() { if (Mh(n), !r) return n.I().then(function() {}) }).then(function() { return _c(n.i, u, i, t, a, !!s, n.tenantId) }).then(function() { return new fe(function(t, e) { n.na(i, null, new T("cancelled-popup-request"), n.g || null), n.f = t, n.C = e, n.g = a, n.c = Rc(n.i, n, i, u, a) }) }).then(function(t) { return u && ni(u), t ? qi(t) : null }).o(function(t) { throw u && ni(u), t }), jh(n, e, r) }

                function xh(e, t, n, i, r) { if (!wi()) return we(new T("operation-not-supported-in-this-environment")); if (e.h && !r) return we(e.h); var o = null,
                        a = Ni(e.uid + ":::"); return i = i().then(function() { if (Mh(e), !r) return e.I().then(function() {}) }).then(function() { return e.ga = a, yh(e) }).then(function(t) { return t = e.ha ? (t = e.ha).b.set(Fh, e.w(), t.a) : t }).then(function() { return Cc(e.i, t, n, a, e.tenantId) }).o(function(t) { if (o = t, e.ha) return qh(e.ha); throw o }).then(function() { if (o) throw o }), jh(e, i, r) }

                function Mh(t) { if (!t.i || !t.R) { if (t.i && !t.R) throw new T("internal-error"); throw new T("auth-domain-config-required") } }

                function jh(n, t, e) { var i, r = (t = t, e = e, (i = n).h && !e ? (t.cancel(), we(i.h)) : t.o(function(t) { throw !t || "auth/user-disabled" != t.code && "auth/user-token-expired" != t.code || (i.h || i.dispatchEvent(new Qc("userInvalidated")), i.h = t), t })); return n.J.push(r), r.oa(function() { G(n.J, r) }), r.o(function(t) { var e = null; throw (e = t && "auth/multi-factor-auth-required" === t.code ? Yc(t.w(), vh(n), b(n.jc, n)) : e) || t }) }

                function Uh(t) { if (!t.apiKey) return null; var e = { apiKey: t.apiKey, authDomain: t.authDomain, appName: t.appName, emulatorConfig: t.emulatorConfig },
                        n = {}; if (!t.stsTokenManager || !t.stsTokenManager.accessToken) return null;
                    n[Ha] = t.stsTokenManager.accessToken, n.refreshToken = t.stsTokenManager.refreshToken || null; var i = t.stsTokenManager.expirationTime;
                    i && (n.expiresIn = (i - Date.now()) / 1e3); var r = new hh(e, n, t); return t.providerData && V(t.providerData, function(t) { t && kh(r, qi(t)) }), t.redirectEventId && (r.ga = t.redirectEventId), r }

                function Vh(t) { this.a = t, this.b = Bu() }
                Bc.prototype.Rc = function(t) { var n = this; return t.sb(this.a.a, this.c).then(function(t) { var e = ct(n.f); return delete e[Wc], delete e[Xc], lt(e, t), n.g(e) }) }, w(Jc, T), zc.prototype.sb = function(t, e, n) { return e.type == zr ? (o = this, a = t, s = n, e.Ha().then(function(t) { return t = { idToken: t }, void 0 !== s && (t.displayName = s), lt(t, { phoneVerificationInfo: ko(o.a) }), Xs(a, Ts, t) })) : (i = this, r = t, e.Ha().then(function(t) { return lt(t = { mfaPendingCredential: t }, { phoneVerificationInfo: ko(i.a) }), Xs(r, Es, t) })); var i, r, o, a, s }, w($c, zc), w(Zc, $c), w(Qc, Fe), (t = th.prototype).yc = function(t) { var e;
                    eh(this, (t = t.hd, e = [], V(t.mfaInfo || [], function(t) {
                        (t = Gi(t)) && e.push(t) }), e)) }, t.Rb = function() { return this.a.I().then(function(t) { return new Yr(t, null) }) }, t.fc = function(e, n) { var i = this,
                        r = this.a.a; return this.Rb().then(function(t) { return e.sb(r, t, n) }).then(function(t) { return Ch(i.a, t), i.a.reload() }) }, t.bd = function(t) { var n = this,
                        i = "string" == typeof t ? t : t.uid,
                        e = this.a.a; return this.a.I().then(function(t) { return Xs(e, Ws, { idToken: t, mfaEnrollmentId: i }) }).then(function(t) { var e = F(n.b, function(t) { return t.uid != i }); return eh(n, e), Ch(n.a, t), n.a.reload().o(function(t) { if ("auth/user-token-expired" != t.code) throw t }) }) }, t.w = function() { return { multiFactor: { enrolledFactors: q(this.b, function(t) { return t.w() }) } } }, nh.prototype.start = function() { this.a = this.c,
                        function e(n, t) { n.stop();
                            n.b = mn(ih(n, t)).then(Di).then(function() { return n.h() }).then(function() { e(n, !0) }).o(function(t) { n.i(t) && e(n, !1) }) }(this, !0) }, nh.prototype.stop = function() { this.b && (this.b.cancel(), this.b = null) }, rh.prototype.w = function() { return { apiKey: this.f.c, refreshToken: this.a, accessToken: this.b && this.b.toString(), expirationTime: this.c } }, rh.prototype.getToken = function(t) { return t = !!t, this.b && !this.a ? we(new T("user-token-expired")) : t || !this.b || Date.now() > this.c - 3e4 ? this.a ? sh(this, { grant_type: "refresh_token", refresh_token: this.a }) : ye(null) : ye({ accessToken: this.b.toString(), refreshToken: this.a }) }, uh.prototype.w = function() { return { lastLoginAt: this.b, createdAt: this.a } }, w(hh, ln), hh.prototype.wa = function(t) { this.ya = t, Xa(this.a, t) }, hh.prototype.la = function() { return this.ya }, hh.prototype.Ga = function() { return X(this.$) }, hh.prototype.hb = function() { this.u.b && (this.u.stop(), this.u.start()) }, Vi(hh.prototype, "providerId", "firebase"), (t = hh.prototype).reload = function() { var t = this; return jh(this, Eh(this).then(function() { return Oh(t).then(function() { return yh(t) }).then(Th) })) }, t.oc = function(t) { return this.I(t).then(function(t) { return new Gc(t) }) }, t.I = function(t) { var e = this; return jh(this, Eh(this).then(function() { return e.b.getToken(t) }).then(function(t) { if (!t) throw new T("internal-error"); return t.accessToken != e.za && (bh(e, t.accessToken), e.dispatchEvent(new Qc("tokenChanged"))), Nh(e, "refreshToken", t.refreshToken), t.accessToken })) }, t.Kc = function(t) { if (!(t = t.users) || !t.length) throw new T("internal-error");
                    Ih(this, { uid: (t = t[0]).localId, displayName: t.displayName, photoURL: t.photoUrl, email: t.email, emailVerified: !!t.emailVerified, phoneNumber: t.phoneNumber, lastLoginAt: t.lastLoginAt, createdAt: t.createdAt, tenantId: t.tenantId }); for (var e, n = (e = (e = t).providerUserInfo) && e.length ? q(e, function(t) { return new ch(t.rawId, t.providerId, t.email, t.displayName, t.photoUrl, t.phoneNumber) }) : [], i = 0; i < n.length; i++) kh(this, n[i]);
                    Nh(this, "isAnonymous", !(this.email && t.passwordHash || this.providerData && this.providerData.length)), this.dispatchEvent(new Qc("userReloaded", { hd: t })) }, t.Lc = function(t) { return ji("firebase.User.prototype.reauthenticateAndRetrieveDataWithCredential is deprecated. Please use firebase.User.prototype.reauthenticateWithCredential instead."), this.tb(t) }, t.tb = function(t) { var e = this,
                        n = null; return jh(this, t.c(this.a, this.uid).then(function(t) { return Ch(e, t), n = Dh(e, t, "reauthenticate"), e.h = null, e.reload() }).then(function() { return n }), !0) }, t.Cc = function(t) { return ji("firebase.User.prototype.linkAndRetrieveDataWithCredential is deprecated. Please use firebase.User.prototype.linkWithCredential instead."), this.qb(t) }, t.qb = function(e) { var n = this,
                        i = null; return jh(this, Rh(this, e.providerId).then(function() { return n.I() }).then(function(t) { return e.b(n.a, t) }).then(function(t) { return i = Dh(n, t, "link"), Ph(n, t) }).then(function() { return i })) }, t.Dc = function(t, e) { var n = this; return jh(this, Rh(this, "phone").then(function() { return Kc(vh(n), t, e, b(n.qb, n)) })) }, t.Mc = function(t, e) { var n = this; return jh(this, ye().then(function() { return Kc(vh(n), t, e, b(n.tb, n)) }), !0) }, t.Bb = function(e) { var n = this; return jh(this, this.I().then(function(t) { return n.a.Bb(t, e) }).then(function(t) { return Ch(n, t), n.reload() })) }, t.ed = function(e) { var n = this; return jh(this, this.I().then(function(t) { return e.b(n.a, t) }).then(function(t) { return Ch(n, t), n.reload() })) }, t.Cb = function(e) { var n = this; return jh(this, this.I().then(function(t) { return n.a.Cb(t, e) }).then(function(t) { return Ch(n, t), n.reload() })) }, t.Db = function(e) { if (void 0 === e.displayName && void 0 === e.photoURL) return Eh(this); var n = this; return jh(this, this.I().then(function(t) { return n.a.Db(t, { displayName: e.displayName, photoUrl: e.photoURL }) }).then(function(t) { return Ch(n, t), Nh(n, "displayName", t.displayName || null), Nh(n, "photoURL", t.photoUrl || null), V(n.providerData, function(t) { "password" === t.providerId && (Vi(t, "displayName", n.displayName), Vi(t, "photoURL", n.photoURL)) }), yh(n) }).then(Th)) }, t.cd = function(e) { var n = this; return jh(this, Oh(this).then(function(t) { return K(Ah(n), e) ? Xs(n.a, ys, { idToken: t, deleteProvider: [e] }).then(function(t) { var e = {}; return V(t.providerUserInfo || [], function(t) { e[t.providerId] = !0 }), V(Ah(n), function(t) { e[t] || Sh(n, t) }), e[So.PROVIDER_ID] || Vi(n, "phoneNumber", null), yh(n) }) : yh(n).then(function() { throw new T("no-such-provider") }) })) }, t.delete = function() { var e = this; return jh(this, this.I().then(function(t) { return Xs(e.a, bs, { idToken: t }) }).then(function() { e.dispatchEvent(new Qc("userDeleted")) })).then(function() { for (var t = 0; t < e.J.length; t++) e.J[t].cancel("app-deleted");
                        lh(e, null), fh(e, null), ph(e, null), e.J = [], e.D = !0, gh(e), Vi(e, "refreshToken", null), e.i && kc(e.i, e) }) }, t.Fb = function(t, e) { return !!("linkViaPopup" == t && (this.g || null) == e && this.f || "reauthViaPopup" == t && (this.g || null) == e && this.f || "linkViaRedirect" == t && (this.ga || null) == e || "reauthViaRedirect" == t && (this.ga || null) == e) }, t.na = function(t, e, n, i) { "linkViaPopup" != t && "reauthViaPopup" != t || i != (this.g || null) || (n && this.C ? this.C(n) : e && !n && this.f && this.f(e), this.c && (this.c.cancel(), this.c = null), delete this.f, delete this.C) }, t.Fa = function(t, e) { return "linkViaPopup" == t && e == (this.g || null) ? b(this.Kb, this) : "reauthViaPopup" == t && e == (this.g || null) ? b(this.Lb, this) : "linkViaRedirect" == t && (this.ga || null) == e ? b(this.Kb, this) : "reauthViaRedirect" == t && (this.ga || null) == e ? b(this.Lb, this) : null }, t.Ec = function(t) { var e = this; return Lh(this, "linkViaPopup", t, function() { return Rh(e, t.providerId).then(function() { return yh(e) }) }, !1) }, t.Nc = function(t) { return Lh(this, "reauthViaPopup", t, function() { return ye() }, !0) }, t.Fc = function(t) { var e = this; return xh(this, "linkViaRedirect", t, function() { return Rh(e, t.providerId) }, !1) }, t.Oc = function(t) { return xh(this, "reauthViaRedirect", t, function() { return ye() }, !0) }, t.Kb = function(e, n, t, i) { var r = this;
                    this.c && (this.c.cancel(), this.c = null); var o = null; return t = this.I().then(function(t) { return ls(r.a, { requestUri: e, postBody: i, sessionId: n, idToken: t }) }).then(function(t) { return o = Dh(r, t, "link"), Ph(r, t) }).then(function() { return o }), jh(this, t) }, t.Lb = function(t, e, n, i) { var r = this;
                    this.c && (this.c.cancel(), this.c = null); var o = null; return jh(this, ye().then(function() { return Qr(fs(r.a, { requestUri: t, sessionId: e, postBody: i, tenantId: n }), r.uid) }).then(function(t) { return o = Dh(r, t, "reauthenticate"), Ch(r, t), r.h = null, r.reload() }).then(function() { return o }), !0) }, t.ub = function(e) { var n = this,
                        i = null; return jh(this, this.I().then(function(t) { return i = t, void 0 === e || ut(e) ? {} : Or(new yr(e)) }).then(function(t) { return n.a.ub(i, t) }).then(function(t) { if (n.email != t) return n.reload() }).then(function() {})) }, t.Eb = function(e, n) { var i = this,
                        r = null; return jh(this, this.I().then(function(t) { return r = t, void 0 === n || ut(n) ? {} : Or(new yr(n)) }).then(function(t) { return i.a.Eb(r, e, t) }).then(function(t) { if (i.email != t) return i.reload() }).then(function() {})) }, t.jc = function(t) { var e = null,
                        n = this; return jh(this, t = Qr(ye(t), n.uid).then(function(t) { return e = Dh(n, t, "reauthenticate"), Ch(n, t), n.h = null, n.reload() }).then(function() { return e }), !0) }, t.toJSON = function() { return this.w() }, t.w = function() { var e = { uid: this.uid, displayName: this.displayName, photoURL: this.photoURL, email: this.email, emailVerified: this.emailVerified, phoneNumber: this.phoneNumber, isAnonymous: this.isAnonymous, tenantId: this.tenantId, providerData: [], apiKey: this.l, appName: this.m, authDomain: this.s, stsTokenManager: this.b.w(), redirectEventId: this.ga || null }; return this.metadata && lt(e, this.metadata.w()), V(this.providerData, function(t) { e.providerData.push(function(t) { var e, n = {}; for (e in t) t.hasOwnProperty(e) && (n[e] = t[e]); return n }(t)) }), lt(e, this.O.w()), e }; var Fh = { name: "redirectUser", F: "session" };

                function qh(t) { return Ju(t.b, Fh, t.a) }

                function Hh(t) { var e, n, i, r;
                    this.a = t, this.b = Bu(), this.c = null, this.f = (n = Bh("local"), i = Bh("session"), r = Bh("none"), function(n, i, r) { var o = Xu(i, r),
                            a = Wu(n, i.F); return n.get(i, r).then(function(t) { var e = null; try { e = Si(l.localStorage.getItem(o)) } catch (t) {} if (e && !t) return l.localStorage.removeItem(o), n.set(i, e, r);
                            e && t && "localStorage" != a.type && l.localStorage.removeItem(o) }) }((e = this).b, n, e.a).then(function() { return e.b.get(i, e.a) }).then(function(t) { return t ? i : e.b.get(r, e.a).then(function(t) { return t ? r : e.b.get(n, e.a).then(function(t) { return t ? n : e.b.get(Gh, e.a).then(function(t) { return t ? Bh(t) : n }) }) }) }).then(function(t) { return e.c = t, Kh(e, t.F) }).o(function() { e.c || (e.c = n) })), this.b.addListener(Bh("local"), this.a, b(this.g, this)) }

                function Kh(t, e) { var n, s, i = []; for (n in Ku) Ku[n] !== e && i.push(Ju(t.b, Bh(Ku[n]), t.a)); return i.push(Ju(t.b, Gh, t.a)), s = i, new fe(function(n, e) { var i = s.length,
                            r = []; if (i)
                            for (var t = function(t, e) { i--, r[t] = e, 0 == i && n(r) }, o = function(t) { e(t) }, a = 0; a < s.length; a++) Ie(s[a], y(t, a), o);
                        else n(r) }) }
                Hh.prototype.g = function() { var e = this,
                        n = Bh("local");
                    Yh(this, function() { return ye().then(function() { return e.c && "local" != e.c.F ? e.b.get(n, e.a) : null }).then(function(t) { if (t) return Kh(e, "local").then(function() { e.c = n }) }) }) }; var Gh = { name: "persistence", F: "session" };

                function Bh(t) { return { name: "authUser", F: t } }

                function Wh(t, e) { return Yh(t, function() { return t.b.set(t.c, e.w(), t.a) }) }

                function Xh(t) { return Yh(t, function() { return Ju(t.b, t.c, t.a) }) }

                function Jh(t, e, n) { return Yh(t, function() { return t.b.get(t.c, t.a).then(function(t) { return t && e && (t.authDomain = e), t && n && (t.emulatorConfig = n), Uh(t || {}) }) }) }

                function Yh(t, e) { return t.f = t.f.then(e, e), t.f }

                function zh(t) { if (this.l = !1, Vi(this, "settings", new qc), Vi(this, "app", t), !this.app.options || !this.app.options.apiKey) throw new T("invalid-api-key"); var n, e, i, r, o, a;
                    t = zl.default.SDK_VERSION ? mi(zl.default.SDK_VERSION) : null, this.a = new Fa(this.app.options && this.app.options.apiKey, _(A), t), this.R = [], this.s = [], this.O = [], this.hb = zl.default.INTERNAL.createSubscribe(b(this.zc, this)), this.X = void 0, this.bc = zl.default.INTERNAL.createSubscribe(b(this.Ac, this)), il(this, null), this.i = new Hh(this.app.options.apiKey + ":" + this.app.name), this.D = new Vh(this.app.options.apiKey + ":" + this.app.name), this.$ = ul(this, (e = (n = this).app.options.authDomain, t = function(e) { var t = function(t, e) { return t.b.get(Fh, t.a).then(function(t) { return t && e && (t.authDomain = e), Uh(t || {}) }) }(e.D, e.app.options.authDomain).then(function(t) { return (e.m = t) && (t.ha = e.D), qh(e.D) }); return ul(e, t) }(n).then(function() { return Jh(n.i, e, n.P) }).then(function(e) { return e ? (e.ha = n.D, n.m && (n.m.ga || null) == (e.ga || null) ? e : e.reload().then(function() { return Wh(n.i, e).then(function() { return e }) }).o(function(t) { return "auth/network-request-failed" == t.code ? e : Xh(n.i) })) : null }).then(function(t) { il(n, t || null) }), ul(n, t))), this.h = ul(this, (i = this).$.then(function() { return el(i) }).o(function() {}).then(function() { if (!i.l) return i.ja() }).o(function() {}).then(function() { var t;
                        i.l || (i.ba = !0, (t = i.i).b.addListener(Bh("local"), t.a, i.ja)) })), this.ba = !1, this.ja = b(this.Zc, this), this.Ba = b(this.da, this), this.ya = b(this.mc, this), this.za = b(this.wc, this), this.Aa = b(this.xc, this), this.b = null, o = (r = this).app.options.authDomain, a = r.app.options.apiKey, o && wi() && (r.Oa = r.$.then(function() { var t; if (!r.l) return r.b = Lc(o, a, r.app.name, r.P), Ac(r.b, r), ol(r) && wh(ol(r)), r.m && (wh(r.m), (t = r.m).wa(r.la()), lh(t, r), dh(t = r.m, r.J), ph(t, r), Ja((t = r.m).a, r.P), fh(t, r), r.m = null), r.b })), this.INTERNAL = {}, this.INTERNAL.delete = b(this.delete, this), this.INTERNAL.logFramework = b(this.Gc, this), this.u = 0, ln.call(this), t = this, Object.defineProperty(t, "lc", { get: function() { return this.la() }, set: function(t) { this.wa(t) }, enumerable: !1 }), t.aa = null, Object.defineProperty(t, "ti", { get: function() { return this.T() }, set: function(t) { this.yb(t) }, enumerable: !1 }), t.S = null, Object.defineProperty(t, "emulatorConfig", { get: function() { var t; return t = this.P ? qi({ protocol: (t = On(this.P.url)).c, host: t.a, port: t.g, options: qi({ disableWarnings: this.P.ec }) }) : null }, enumerable: !1 }), this.J = [], this.P = null }

                function $h(t) { Fe.call(this, "languageCodeChanged"), this.h = t }

                function Zh(t) { Fe.call(this, "emulatorConfigChanged"), this.c = t }

                function Qh(t) { Fe.call(this, "frameworkChanged"), this.f = t }

                function tl(t) { return t.Oa || we(new T("auth-domain-config-required")) }

                function el(t) { if (!wi()) return we(new T("operation-not-supported-in-this-environment")); var e = tl(t).then(function() { return t.b.qa() }).then(function(t) { return t ? qi(t) : null }); return ul(t, e) }

                function nl(o, a) { var s = {}; return s.apiKey = o.app.options.apiKey, s.authDomain = o.app.options.authDomain, s.appName = o.app.name, o.P && (s.emulatorConfig = o.P), o.$.then(function() { return t = s, e = a, n = o.D, i = o.Ga(), r = new hh(t, e), n && (r.ha = n), i && dh(r, i), r.reload().then(function() { return r }); var t, e, n, i, r }).then(function(t) { return ol(o) && t.uid == ol(o).uid ? _h(ol(o), t) : (il(o, t), wh(t)), o.da(t) }).then(function() { sl(o) }) }

                function il(t, e) { var n, i;
                    ol(t) && (n = ol(t), i = t.Ba, B(n.S, function(t) { return t == i }), en(ol(t), "tokenChanged", t.ya), en(ol(t), "userDeleted", t.za), en(ol(t), "userInvalidated", t.Aa), gh(ol(t))), e && (e.S.push(t.Ba), Ze(e, "tokenChanged", t.ya), Ze(e, "userDeleted", t.za), Ze(e, "userInvalidated", t.Aa), 0 < t.u && mh(e)), Vi(t, "currentUser", e), e && (e.wa(t.la()), lh(e, t), dh(e, t.J), ph(e, t), Ja(e.a, t.P), fh(e, t)) }

                function rl(n, t) { var e = null,
                        i = null; return ul(n, t.then(function(t) { return e = _o(t), i = Vr(t), nl(n, t) }, function(t) { var e = null; throw (e = t && "auth/multi-factor-auth-required" === t.code ? Yc(t.w(), n, b(n.kc, n)) : e) || t }).then(function() { return qi({ user: ol(n), credential: e, additionalUserInfo: i, operationType: "signIn" }) })) }

                function ol(t) { return t.currentUser }

                function al(t) { return ol(t) && ol(t)._lat || null }

                function sl(t) { if (t.ba) { for (var e = 0; e < t.s.length; e++) t.s[e] && t.s[e](al(t)); if (t.X !== t.getUid() && t.O.length)
                            for (t.X = t.getUid(), e = 0; e < t.O.length; e++) t.O[e] && t.O[e](al(t)) } }

                function ul(t, e) { return t.R.push(e), e.oa(function() { G(t.R, e) }), e }

                function cl() {}

                function hl() { this.a = {}, this.b = 1e12 }
                Hh.prototype.xb = function(e) { var n = null,
                        i = this; return function(t) { var e = new T("invalid-persistence-type"),
                            n = new T("unsupported-persistence-type");
                        t: { for (i in Ku)
                                if (Ku[i] == t) { var i = !0; break t }
                            i = !1 }
                        if (!i || "string" != typeof t) throw e; switch (hi()) {
                            case "ReactNative":
                                if ("session" === t) throw n; break;
                            case "Node":
                                if ("none" !== t) throw n; break;
                            case "Worker":
                                if ("session" === t || !Tu() && "none" !== t) throw n; break;
                            default:
                                if (!yi() && "none" !== t) throw n } }(e), Yh(this, function() { return e != i.c.F ? i.b.get(i.c, i.a).then(function(t) { return n = t, Kh(i, e) }).then(function() { if (i.c = Bh(e), n) return i.b.set(i.c, n, i.a) }) : ye() }) }, w(zh, ln), w($h, Fe), w(Zh, Fe), w(Qh, Fe), (t = zh.prototype).xb = function(t) { return t = this.i.xb(t), ul(this, t) }, t.wa = function(t) { this.aa === t || this.l || (this.aa = t, Xa(this.a, this.aa), this.dispatchEvent(new $h(this.la()))) }, t.la = function() { return this.aa }, t.fd = function() { var t = l.navigator;
                    this.wa(t && (t.languages && t.languages[0] || t.language || t.userLanguage) || null) }, t.gd = function(t, e) { if (!this.P) { if (!/^https?:\/\//.test(t)) throw new T("argument-error", "Emulator URL must start with a valid scheme (http:// or https://).");
                        e = !!e && !!e.disableWarnings, n = e, "undefined" != typeof console && "function" == typeof console.info && console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."), l.document && !n && ai().then(function() { var t = l.document.createElement("div");
                            t.innerText = "Running in emulator mode. Do not use with production credentials.", t.style.position = "fixed", t.style.width = "100%", t.style.backgroundColor = "#ffffff", t.style.border = ".1em solid #000000", t.style.color = "#b50000", t.style.bottom = "0px", t.style.left = "0px", t.style.margin = "0px", t.style.zIndex = 1e4, t.style.textAlign = "center", t.classList.add("firebase-emulator-warning"), l.document.body.appendChild(t) }), this.P = { url: t, ec: e }, this.settings.ib = !0, Ja(this.a, this.P), this.dispatchEvent(new Zh(this.P)) } var n }, t.Gc = function(t) { this.J.push(t), za(this.a, zl.default.SDK_VERSION ? mi(zl.default.SDK_VERSION, this.J) : null), this.dispatchEvent(new Qh(this.J)) }, t.Ga = function() { return X(this.J) }, t.yb = function(t) { this.S === t || this.l || (this.S = t, this.a.b = this.S) }, t.T = function() { return this.S }, t.toJSON = function() { return { apiKey: this.app.options.apiKey, authDomain: this.app.options.authDomain, appName: this.app.name, currentUser: ol(this) && ol(this).w() } }, t.Fb = function(t, e) { switch (t) {
                        case "unknown":
                        case "signInViaRedirect":
                            return !0;
                        case "signInViaPopup":
                            return this.g == e && !!this.f;
                        default:
                            return !1 } }, t.na = function(t, e, n, i) { "signInViaPopup" == t && this.g == i && (n && this.C ? this.C(n) : e && !n && this.f && this.f(e), this.c && (this.c.cancel(), this.c = null), delete this.f, delete this.C) }, t.Fa = function(t, e) { return "signInViaRedirect" == t || "signInViaPopup" == t && this.g == e && this.f ? b(this.ic, this) : null }, t.ic = function(t, e, n, i) { var r = this,
                        o = { requestUri: t, postBody: i, sessionId: e, tenantId: n }; return this.c && (this.c.cancel(), this.c = null), r.$.then(function() { return rl(r, hs(r.a, o)) }) }, t.Xc = function(e) { if (!wi()) return we(new T("operation-not-supported-in-this-environment")); var n = this,
                        t = Ur(e.providerId),
                        i = Ni(),
                        r = null,
                        o = ii(r = (!Ei() || ui()) && this.app.options.authDomain && e.isOAuthProvider ? uu(this.app.options.authDomain, this.app.options.apiKey, this.app.name, "signInViaPopup", e, null, i, zl.default.SDK_VERSION || null, null, null, this.T(), this.P) : r, t && t.ua, t && t.ta); return ul(this, t = tl(this).then(function(t) { return _c(t, o, "signInViaPopup", e, i, !!r, n.T()) }).then(function() { return new fe(function(t, e) { n.na("signInViaPopup", null, new T("cancelled-popup-request"), n.g), n.f = t, n.C = e, n.g = i, n.c = Rc(n.b, n, "signInViaPopup", o, i) }) }).then(function(t) { return o && ni(o), t ? qi(t) : null }).o(function(t) { throw o && ni(o), t })) }, t.Yc = function(t) { if (!wi()) return we(new T("operation-not-supported-in-this-environment")); var e = this; return ul(this, tl(this).then(function() { return Yh(t = e.i, function() { return t.b.set(Gh, t.c.F, t.a) }); var t }).then(function() { return Cc(e.b, "signInViaRedirect", t, void 0, e.T()) })) }, t.qa = function() { var e = this; return el(this).then(function(t) { return e.b && jc(e.b.b), t }).o(function(t) { throw e.b && jc(e.b.b), t }) }, t.dd = function(t) { if (!t) return we(new T("null-user")); if (this.S != t.tenantId) return we(new T("tenant-id-mismatch")); var e = this,
                        n = {};
                    n.apiKey = this.app.options.apiKey, n.authDomain = this.app.options.authDomain, n.appName = this.app.name; var i, r, o, a, s, u = (i = t, r = n, o = e.D, a = e.Ga(), s = i.b, (n = {})[Ha] = s.b && s.b.toString(), n.refreshToken = s.a, r = new hh(r || { apiKey: i.l, authDomain: i.s, appName: i.m }, n), o && (r.ha = o), a && dh(r, a), _h(r, i), r); return ul(this, this.h.then(function() { if (e.app.options.apiKey != t.l) return u.reload() }).then(function() { return ol(e) && t.uid == ol(e).uid ? (_h(ol(e), t), e.da(t)) : (il(e, u), wh(u), e.da(u)) }).then(function() { sl(e) })) }, t.Ab = function() { var t = this,
                        e = this.h.then(function() { return t.b && jc(t.b.b), ol(t) ? (il(t, null), Xh(t.i).then(function() { sl(t) })) : ye() }); return ul(this, e) }, t.Zc = function() { var i = this; return Jh(this.i, this.app.options.authDomain).then(function(t) { if (!i.l) { var e, n; if ((e = ol(i) && t) && (e = ol(i).uid, n = t.uid, e = null != e && "" !== e && null != n && "" !== n && e == n), e) return _h(ol(i), t), ol(i).I();
                            (ol(i) || t) && (il(i, t), t && (wh(t), t.ha = i.D), i.b && Ac(i.b, i), sl(i)) } }) }, t.da = function(t) { return Wh(this.i, t) }, t.mc = function() { sl(this), this.da(ol(this)) }, t.wc = function() { this.Ab() }, t.xc = function() { this.Ab() }, t.kc = function(t) { var e = this; return this.h.then(function() { return rl(e, ye(t)) }) }, t.zc = function(t) { var e = this;
                    this.addAuthTokenListener(function() { t.next(ol(e)) }) }, t.Ac = function(t) { var e, n, i = this;
                    n = function() { t.next(ol(i)) }, (e = this).O.push(n), ul(e, e.h.then(function() {!e.l && K(e.O, n) && e.X !== e.getUid() && (e.X = e.getUid(), n(al(e))) })) }, t.Ic = function(t, e, n) { var i = this; return this.ba && Promise.resolve().then(function() { "function" == typeof t ? t(ol(i)) : "function" == typeof t.next && t.next(ol(i)) }), this.hb(t, e, n) }, t.Hc = function(t, e, n) { var i = this; return this.ba && Promise.resolve().then(function() { i.X = i.getUid(), "function" == typeof t ? t(ol(i)) : "function" == typeof t.next && t.next(ol(i)) }), this.bc(t, e, n) }, t.nc = function(t) { var e = this,
                        n = this.h.then(function() { return ol(e) ? ol(e).I(t).then(function(t) { return { accessToken: t } }) : null }); return ul(this, n) }, t.Tc = function(t) { var n = this; return this.h.then(function() { return rl(n, Xs(n.a, qs, { token: t })) }).then(function(t) { var e = t.user; return Nh(e, "isAnonymous", !1), n.da(e), t }) }, t.Uc = function(t, e) { var n = this; return this.h.then(function() { return rl(n, Xs(n.a, Hs, { email: t, password: e })) }) }, t.dc = function(t, e) { var n = this; return this.h.then(function() { return rl(n, Xs(n.a, ms, { email: t, password: e })) }) }, t.$a = function(t) { var e = this; return this.h.then(function() { return rl(e, t.ka(e.a)) }) }, t.Sc = function(t) { return ji("firebase.auth.Auth.prototype.signInAndRetrieveDataWithCredential is deprecated. Please use firebase.auth.Auth.prototype.signInWithCredential instead."), this.$a(t) }, t.zb = function() { var n = this; return this.h.then(function() { var t = ol(n); if (t && t.isAnonymous) { var e = qi({ providerId: null, isNewUser: !1 }); return qi({ user: t, credential: null, additionalUserInfo: e, operationType: "signIn" }) } return rl(n, n.a.zb()).then(function(t) { var e = t.user; return Nh(e, "isAnonymous", !0), n.da(e), t }) }) }, t.getUid = function() { return ol(this) && ol(this).uid || null }, t.cc = function(t) { this.addAuthTokenListener(t), this.u++, 0 < this.u && ol(this) && mh(ol(this)) }, t.Pc = function(e) { var n = this;
                    V(this.s, function(t) { t == e && n.u-- }), this.u < 0 && (this.u = 0), 0 == this.u && ol(this) && gh(ol(this)), this.removeAuthTokenListener(e) }, t.addAuthTokenListener = function(t) { var e = this;
                    this.s.push(t), ul(this, this.h.then(function() { e.l || K(e.s, t) && t(al(e)) })) }, t.removeAuthTokenListener = function(e) { B(this.s, function(t) { return t == e }) }, t.delete = function() { this.l = !0; for (var t = 0; t < this.R.length; t++) this.R[t].cancel("app-deleted"); return this.R = [], this.i && (t = this.i).b.removeListener(Bh("local"), t.a, this.ja), this.b && (kc(this.b, this), jc(this.b.b)), Promise.resolve() }, t.hc = function(t) { return ul(this, Xs(this.a, gs, { identifier: t, continueUri: Ii() ? Qn() : "http://localhost" }).then(function(t) { return t.signinMethods || [] })) }, t.Bc = function(t) { return !!To(t) }, t.wb = function(e, n) { var i = this; return ul(this, ye().then(function() { var t = new yr(n); if (!t.c) throw new T("argument-error", Tr + " must be true when sending sign in link to email"); return Or(t) }).then(function(t) { return i.a.wb(e, t) }).then(function() {})) }, t.jd = function(t) { return this.Ra(t).then(function(t) { return t.data.email }) }, t.nb = function(t, e) { return ul(this, this.a.nb(t, e).then(function() {})) }, t.Ra = function(t) { return ul(this, this.a.Ra(t).then(function(t) { return new zi(t) })) }, t.jb = function(t) { return ul(this, this.a.jb(t).then(function() {})) }, t.vb = function(e, t) { var n = this; return ul(this, ye().then(function() { return void 0 === t || ut(t) ? {} : Or(new yr(t)) }).then(function(t) { return n.a.vb(e, t) }).then(function() {})) }, t.Wc = function(t, e) { return ul(this, Kc(this, t, e, b(this.$a, this))) }, t.Vc = function(n, i) { var r = this; return ul(this, ye().then(function() { var t = i || Qn(),
                            e = Io(n, t); if (!(t = To(t))) throw new T("argument-error", "Invalid email link!"); if (t.tenantId !== r.T()) throw new T("tenant-id-mismatch"); return r.$a(e) })) }, cl.prototype.render = function() {}, cl.prototype.reset = function() {}, cl.prototype.getResponse = function() {}, cl.prototype.execute = function() {}; var ll = null;

                function fl(t, e) { return (e = dl(e)) && t.a[e] || null }

                function dl(t) { return (t = void 0 === t ? 1e12 : t) ? t.toString() : null }

                function pl(t, e) { this.g = !1, this.c = e, this.a = this.b = null, this.h = "invisible" !== this.c.size, this.f = te(t); var n = this;
                    this.i = function() { n.execute() }, this.h ? this.execute() : Ze(this.f, "click", this.i) }

                function vl(t) { if (t.g) throw Error("reCAPTCHA mock was already deleted!") }

                function ml() {}

                function gl() {}
                hl.prototype.render = function(t, e) { return this.a[this.b.toString()] = new pl(t, e), this.b++ }, hl.prototype.reset = function(t) { var e = fl(this, t);
                    t = dl(t), e && t && (e.delete(), delete this.a[t]) }, hl.prototype.getResponse = function(t) { return (t = fl(this, t)) ? t.getResponse() : null }, hl.prototype.execute = function(t) {
                    (t = fl(this, t)) && t.execute() }, pl.prototype.getResponse = function() { return vl(this), this.b }, pl.prototype.execute = function() { vl(this); var n = this;
                    this.a || (this.a = setTimeout(function() { n.b = function() { for (var t = 50, e = []; 0 < t;) e.push("1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".charAt(Math.floor(62 * Math.random()))), t--; return e.join("") }(); var t = n.c.callback,
                            e = n.c["expired-callback"]; if (t) try { t(n.b) } catch (t) {}
                        n.a = setTimeout(function() { if (n.a = null, n.b = null, e) try { e() } catch (t) {}
                            n.h && n.execute() }, 6e4) }, 500)) }, pl.prototype.delete = function() { vl(this), this.g = !0, clearTimeout(this.a), this.a = null, en(this.f, "click", this.i) }, Vi(ml, "FACTOR_ID", "phone"), gl.prototype.g = function() { return ye(ll = ll || new hl) }, gl.prototype.c = function() {}; var bl = null;

                function yl() { this.b = l.grecaptcha ? 1 / 0 : 0, this.f = null, this.a = "__rcb" + Math.floor(1e6 * Math.random()).toString() } var wl = new dt(gt, "https://www.google.com/recaptcha/api.js?onload=%{onload}&render=explicit&hl=%{hl}"),
                    Il = new Ci(3e4, 6e4);
                yl.prototype.g = function(r) { var o = this; return new fe(function(t, e) { var i = setTimeout(function() { e(new T("network-request-failed")) }, Il.get());!l.grecaptcha || r !== o.f && !o.b ? (l[o.a] = function() { var n;
                            l.grecaptcha ? (o.f = r, n = l.grecaptcha.render, l.grecaptcha.render = function(t, e) { return t = n(t, e), o.b++, t }, clearTimeout(i), t(l.grecaptcha)) : (clearTimeout(i), e(new T("internal-error"))), delete l[o.a] }, ye(Pa(It(wl, { onload: o.a, hl: r || "" }))).o(function() { clearTimeout(i), e(new T("internal-error", "Unable to load external reCAPTCHA dependencies!")) })) : (clearTimeout(i), t(l.grecaptcha)) }) }, yl.prototype.c = function() { this.b-- }; var Tl = null;

                function El(t, e, n, i, r, o, a) { if (Vi(this, "type", "recaptcha"), this.c = this.f = null, this.D = !1, this.v = e, this.g = null, a = a ? bl = bl || new gl : Tl = Tl || new yl, this.m = a, this.a = n || { theme: "light", type: "image" }, this.h = [], this.a[Sl]) throw new T("argument-error", "sitekey should not be provided for reCAPTCHA as one is automatically provisioned for the current project."); if (this.i = "invisible" === this.a[Nl], !l.document) throw new T("operation-not-supported-in-this-environment", "RecaptchaVerifier is only supported in a browser HTTP/HTTPS environment with DOM support."); if (!te(e) || !this.i && te(e).hasChildNodes()) throw new T("argument-error", "reCAPTCHA container is either not found or already contains inner elements!");
                    this.s = new Fa(t, o || null, r || null), this.u = i || function() { return null }; var s = this;
                    this.l = []; var u = this.a[Al];
                    this.a[Al] = function(t) { var e;
                        _l(s, t), "function" == typeof u ? u(t) : "string" != typeof u || "function" == typeof(e = bi(u, l)) && e(t) }; var c = this.a[kl];
                    this.a[kl] = function() { var t;
                        _l(s, null), "function" == typeof c ? c() : "string" != typeof c || "function" == typeof(t = bi(c, l)) && t() } } var Al = "callback",
                    kl = "expired-callback",
                    Sl = "sitekey",
                    Nl = "size";

                function _l(t, e) { for (var n = 0; n < t.l.length; n++) try { t.l[n](e) } catch (t) {} }

                function Ol(t, e) { return t.h.push(e), e.oa(function() { G(t.h, e) }), e }

                function Cl(t) { if (t.D) throw new T("internal-error", "RecaptchaVerifier instance has been destroyed.") }

                function Rl(t, e, n) { var i = !1; try { this.b = n || zl.default.app() } catch (t) { throw new T("argument-error", "No firebase.app.App instance is currently initialized.") } if (!this.b.options || !this.b.options.apiKey) throw new T("invalid-api-key");
                    n = this.b.options.apiKey; var r = this,
                        o = null; try { o = this.b.auth().Ga() } catch (t) {} try { i = this.b.auth().settings.appVerificationDisabledForTesting } catch (t) {}
                    o = zl.default.SDK_VERSION ? mi(zl.default.SDK_VERSION, o) : null, El.call(this, n, t, e, function() { try { var e = r.b.auth().la() } catch (t) { e = null } return e }, o, _(A), i) }

                function Dl(t, e, n, i) { t: { n = Array.prototype.slice.call(n); for (var r = 0, o = !1, a = 0; a < e.length; a++)
                            if (e[a].optional) o = !0;
                            else { if (o) throw new T("internal-error", "Argument validator encountered a required argument after an optional argument.");
                                r++ }
                        if (o = e.length, n.length < r || o < n.length) i = "Expected " + (r == o ? 1 == r ? "1 argument" : r + " arguments" : r + "-" + o + " arguments") + " but got " + n.length + ".";
                        else { for (r = 0; r < n.length; r++)
                                if (o = e[r].optional && void 0 === n[r], !e[r].M(n[r]) && !o) { if (e = e[r], r < 0 || r >= Pl.length) throw new T("internal-error", "Argument validator received an unsupported number of arguments.");
                                    n = Pl[r], i = (i ? "" : n + " argument ") + (e.name ? '"' + e.name + '" ' : "") + "must be " + e.K + "."; break t }
                            i = null } } if (i) throw new T("argument-error", t + " failed: " + i) }(t = El.prototype).Ia = function() { var e = this; return this.f || (this.f = Ol(this, ye().then(function() { if (Ii() && !ci()) return ai(); throw new T("operation-not-supported-in-this-environment", "RecaptchaVerifier is only supported in a browser HTTP/HTTPS environment.") }).then(function() { return e.m.g(e.u()) }).then(function(t) { return e.g = t, Xs(e.s, Cs, {}) }).then(function(t) { e.a[Sl] = t.recaptchaSiteKey }).o(function(t) { throw e.f = null, t }))) }, t.render = function() { Cl(this); var n = this; return Ol(this, this.Ia().then(function() { var t, e; return null === n.c && (e = n.v, n.i || (t = te(e), e = oe("DIV"), t.appendChild(e)), n.c = n.g.render(e, n.a)), n.c })) }, t.verify = function() { Cl(this); var r = this; return Ol(this, this.render().then(function(e) { return new fe(function(n) { var i, t = r.g.getResponse(e);
                            t ? n(t) : (i = function(t) { var e;
                                t && (e = i, B(r.l, function(t) { return t == e }), n(t)) }, r.l.push(i), r.i && r.g.execute(r.c)) }) })) }, t.reset = function() { Cl(this), null !== this.c && this.g.reset(this.c) }, t.clear = function() { Cl(this), this.D = !0, this.m.c(); for (var t, e = 0; e < this.h.length; e++) this.h[e].cancel("RecaptchaVerifier instance has been destroyed."); if (!this.i) { e = te(this.v); for (; t = e.firstChild;) e.removeChild(t) } }, w(Rl, El); var Pl = "First Second Third Fourth Fifth Sixth Seventh Eighth Ninth".split(" ");

                function Ll(t, e) { return { name: t || "", K: "a valid string", optional: !!e, M: function(t) { return "string" == typeof t } } }

                function xl(t, e) { return { name: t || "", K: "a boolean", optional: !!e, M: function(t) { return "boolean" == typeof t } } }

                function Ml(t, e) { return { name: t || "", K: "a valid object", optional: !!e, M: m } }

                function jl(t, e) { return { name: t || "", K: "a function", optional: !!e, M: function(t) { return "function" == typeof t } } }

                function Ul(t, e) { return { name: t || "", K: "null", optional: !!e, M: function(t) { return null === t } } }

                function Vl(n) { return { name: n ? n + "Credential" : "credential", K: n ? "a valid " + n + " credential" : "a valid credential", optional: !1, M: function(t) { if (!t) return !1; var e = !n || t.providerId === n; return !(!t.ka || !e) } } }

                function Fl() { return { name: "multiFactorAssertion", K: "a valid multiFactorAssertion", optional: !1, M: function(t) { return !!t && !!t.sb } } }

                function ql() { return { name: "authProvider", K: "a valid Auth provider", optional: !1, M: function(t) { return !!(t && t.providerId && t.hasOwnProperty && t.hasOwnProperty("isOAuthProvider")) } } }

                function Hl(t, e) { return m(t) && "string" == typeof t.type && t.type === e && "function" == typeof t.Ha }

                function Kl(t) { return m(t) && "string" == typeof t.uid }

                function Gl() { return { name: "applicationVerifier", K: "an implementation of firebase.auth.ApplicationVerifier", optional: !1, M: function(t) { return !(!t || "string" != typeof t.type || "function" != typeof t.verify) } } }

                function Bl(e, n, t, i) { return { name: t || "", K: e.K + " or " + n.K, optional: !!i, M: function(t) { return e.M(t) || n.M(t) } } }

                function Wl(t, e) { for (var n in e) { var i = e[n].name;
                        t[i] = Yl(i, t[n], e[n].j) } }

                function Xl(t, e) { for (var n in e) { var i = e[n].name;
                        i !== n && Object.defineProperty(t, i, { get: y(function(t) { return this[t] }, n), set: y(function(t, e, n, i) { Dl(t, [n], [i], !0), this[e] = i }, i, n, e[n].kb), enumerable: !0 }) } }

                function Jl(t, e, n, i) { t[e] = Yl(e, n, i) }

                function Yl(t, e, n) {
                    function i() { var t = Array.prototype.slice.call(arguments); return Dl(o, n, t), e.apply(this, t) } if (!n) return e; var r, o = (t = (t = t).split("."))[t.length - 1]; for (r in e) i[r] = e[r]; for (r in e.prototype) i.prototype[r] = e.prototype[r]; return i }
                Wl(zh.prototype, { jb: { name: "applyActionCode", j: [Ll("code")] }, Ra: { name: "checkActionCode", j: [Ll("code")] }, nb: { name: "confirmPasswordReset", j: [Ll("code"), Ll("newPassword")] }, dc: { name: "createUserWithEmailAndPassword", j: [Ll("email"), Ll("password")] }, hc: { name: "fetchSignInMethodsForEmail", j: [Ll("email")] }, qa: { name: "getRedirectResult", j: [] }, Bc: { name: "isSignInWithEmailLink", j: [Ll("emailLink")] }, Hc: { name: "onAuthStateChanged", j: [Bl(Ml(), jl(), "nextOrObserver"), jl("opt_error", !0), jl("opt_completed", !0)] }, Ic: { name: "onIdTokenChanged", j: [Bl(Ml(), jl(), "nextOrObserver"), jl("opt_error", !0), jl("opt_completed", !0)] }, vb: { name: "sendPasswordResetEmail", j: [Ll("email"), Bl(Ml("opt_actionCodeSettings", !0), Ul(null, !0), "opt_actionCodeSettings", !0)] }, wb: { name: "sendSignInLinkToEmail", j: [Ll("email"), Ml("actionCodeSettings")] }, xb: { name: "setPersistence", j: [Ll("persistence")] }, Sc: { name: "signInAndRetrieveDataWithCredential", j: [Vl()] }, zb: { name: "signInAnonymously", j: [] }, $a: { name: "signInWithCredential", j: [Vl()] }, Tc: { name: "signInWithCustomToken", j: [Ll("token")] }, Uc: { name: "signInWithEmailAndPassword", j: [Ll("email"), Ll("password")] }, Vc: { name: "signInWithEmailLink", j: [Ll("email"), Ll("emailLink", !0)] }, Wc: { name: "signInWithPhoneNumber", j: [Ll("phoneNumber"), Gl()] }, Xc: { name: "signInWithPopup", j: [ql()] }, Yc: { name: "signInWithRedirect", j: [ql()] }, dd: { name: "updateCurrentUser", j: [Bl({ name: "user", K: "an instance of Firebase User", optional: !1, M: function(t) { return !!(t && t instanceof hh) } }, Ul(), "user")] }, Ab: { name: "signOut", j: [] }, toJSON: { name: "toJSON", j: [Ll(null, !0)] }, fd: { name: "useDeviceLanguage", j: [] }, gd: { name: "useEmulator", j: [Ll("url"), Ml("options", !0)] }, jd: { name: "verifyPasswordResetCode", j: [Ll("code")] } }), Xl(zh.prototype, { lc: { name: "languageCode", kb: Bl(Ll(), Ul(), "languageCode") }, ti: { name: "tenantId", kb: Bl(Ll(), Ul(), "tenantId") } }), (zh.Persistence = Ku).LOCAL = "local", zh.Persistence.SESSION = "session", zh.Persistence.NONE = "none", Wl(hh.prototype, { delete: { name: "delete", j: [] }, oc: { name: "getIdTokenResult", j: [xl("opt_forceRefresh", !0)] }, I: { name: "getIdToken", j: [xl("opt_forceRefresh", !0)] }, Cc: { name: "linkAndRetrieveDataWithCredential", j: [Vl()] }, qb: { name: "linkWithCredential", j: [Vl()] }, Dc: { name: "linkWithPhoneNumber", j: [Ll("phoneNumber"), Gl()] }, Ec: { name: "linkWithPopup", j: [ql()] }, Fc: { name: "linkWithRedirect", j: [ql()] }, Lc: { name: "reauthenticateAndRetrieveDataWithCredential", j: [Vl()] }, tb: { name: "reauthenticateWithCredential", j: [Vl()] }, Mc: { name: "reauthenticateWithPhoneNumber", j: [Ll("phoneNumber"), Gl()] }, Nc: { name: "reauthenticateWithPopup", j: [ql()] }, Oc: { name: "reauthenticateWithRedirect", j: [ql()] }, reload: { name: "reload", j: [] }, ub: { name: "sendEmailVerification", j: [Bl(Ml("opt_actionCodeSettings", !0), Ul(null, !0), "opt_actionCodeSettings", !0)] }, toJSON: { name: "toJSON", j: [Ll(null, !0)] }, cd: { name: "unlink", j: [Ll("provider")] }, Bb: { name: "updateEmail", j: [Ll("email")] }, Cb: { name: "updatePassword", j: [Ll("password")] }, ed: { name: "updatePhoneNumber", j: [Vl("phone")] }, Db: { name: "updateProfile", j: [Ml("profile")] }, Eb: { name: "verifyBeforeUpdateEmail", j: [Ll("email"), Bl(Ml("opt_actionCodeSettings", !0), Ul(null, !0), "opt_actionCodeSettings", !0)] } }), Wl(hl.prototype, { execute: { name: "execute" }, render: { name: "render" }, reset: { name: "reset" }, getResponse: { name: "getResponse" } }), Wl(cl.prototype, { execute: { name: "execute" }, render: { name: "render" }, reset: { name: "reset" }, getResponse: { name: "getResponse" } }), Wl(fe.prototype, { oa: { name: "finally" }, o: { name: "catch" }, then: { name: "then" } }), Xl(qc.prototype, { appVerificationDisabled: { name: "appVerificationDisabledForTesting", kb: xl("appVerificationDisabledForTesting") } }), Wl(Hc.prototype, { confirm: { name: "confirm", j: [Ll("verificationCode")] } }), Jl(Zr, "fromJSON", function(t) { t = "string" == typeof t ? JSON.parse(t) : t; for (var e, n = [oo, yo, Ao, no], i = 0; i < n.length; i++)
                            if (e = n[i](t)) return e;
                        return null }, [Bl(Ll(), Ml(), "json")]), Jl(wo, "credential", function(t, e) { return new bo(t, e) }, [Ll("email"), Ll("password")]), Wl(bo.prototype, { w: { name: "toJSON", j: [Ll(null, !0)] } }), Wl(co.prototype, { Ca: { name: "addScope", j: [Ll("scope")] }, Ka: { name: "setCustomParameters", j: [Ml("customOAuthParameters")] } }), Jl(co, "credential", ho, [Bl(Ll(), Ml(), "token")]), Jl(wo, "credentialWithLink", Io, [Ll("email"), Ll("emailLink")]), Wl(lo.prototype, { Ca: { name: "addScope", j: [Ll("scope")] }, Ka: { name: "setCustomParameters", j: [Ml("customOAuthParameters")] } }), Jl(lo, "credential", fo, [Bl(Ll(), Ml(), "token")]), Wl(po.prototype, { Ca: { name: "addScope", j: [Ll("scope")] }, Ka: { name: "setCustomParameters", j: [Ml("customOAuthParameters")] } }), Jl(po, "credential", vo, [Bl(Ll(), Bl(Ml(), Ul()), "idToken"), Bl(Ll(), Ul(), "accessToken", !0)]), Wl(mo.prototype, { Ka: { name: "setCustomParameters", j: [Ml("customOAuthParameters")] } }), Jl(mo, "credential", go, [Bl(Ll(), Ml(), "token"), Ll("secret", !0)]), Wl(uo.prototype, { Ca: { name: "addScope", j: [Ll("scope")] }, credential: { name: "credential", j: [Bl(Ll(), Bl(Ml(), Ul()), "optionsOrIdToken"), Bl(Ll(), Ul(), "accessToken", !0)] }, Ka: { name: "setCustomParameters", j: [Ml("customOAuthParameters")] } }), Wl(io.prototype, { w: { name: "toJSON", j: [Ll(null, !0)] } }), Wl(to.prototype, { w: { name: "toJSON", j: [Ll(null, !0)] } }), Jl(So, "credential", No, [Ll("verificationId"), Ll("verificationCode")]), Wl(So.prototype, { fb: { name: "verifyPhoneNumber", j: [Bl(Ll(), { name: "phoneInfoOptions", K: "valid phone info options", optional: !1, M: function(t) { return !!t && (t.session && t.phoneNumber ? Hl(t.session, zr) && "string" == typeof t.phoneNumber : t.session && t.multiFactorHint ? Hl(t.session, $r) && Kl(t.multiFactorHint) : t.session && t.multiFactorUid ? Hl(t.session, $r) && "string" == typeof t.multiFactorUid : !!t.phoneNumber && "string" == typeof t.phoneNumber) } }, "phoneInfoOptions"), Gl()] } }), Wl(Eo.prototype, { w: { name: "toJSON", j: [Ll(null, !0)] } }), Wl(T.prototype, { toJSON: { name: "toJSON", j: [Ll(null, !0)] } }), Wl(Mo.prototype, { toJSON: { name: "toJSON", j: [Ll(null, !0)] } }), Wl(xo.prototype, { toJSON: { name: "toJSON", j: [Ll(null, !0)] } }), Wl(Jc.prototype, { toJSON: { name: "toJSON", j: [Ll(null, !0)] } }), Wl(Bc.prototype, { Rc: { name: "resolveSignIn", j: [Fl()] } }), Wl(th.prototype, { Rb: { name: "getSession", j: [] }, fc: { name: "enroll", j: [Fl(), Ll("displayName", !0)] }, bd: { name: "unenroll", j: [Bl({ name: "multiFactorInfo", K: "a valid multiFactorInfo", optional: !1, M: Kl }, Ll(), "multiFactorInfoIdentifier")] } }), Wl(Rl.prototype, { clear: { name: "clear", j: [] }, render: { name: "render", j: [] }, verify: { name: "verify", j: [] } }), Jl(hr, "parseLink", br, [Ll("link")]), Jl(ml, "assertion", function(t) { return new Zc(t) }, [Vl("phone")]),
                    function() { if (void 0 === zl.default || !zl.default.INTERNAL || !zl.default.INTERNAL.registerComponent) throw Error("Cannot find the firebase namespace; be sure to include firebase-app.js before this library."); var t = { ActionCodeInfo: { Operation: { EMAIL_SIGNIN: Zi, PASSWORD_RESET: "PASSWORD_RESET", RECOVER_EMAIL: "RECOVER_EMAIL", REVERT_SECOND_FACTOR_ADDITION: $i, VERIFY_AND_CHANGE_EMAIL: Qi, VERIFY_EMAIL: "VERIFY_EMAIL" } }, Auth: zh, AuthCredential: Zr, Error: T };
                        Jl(t, "EmailAuthProvider", wo, []), Jl(t, "FacebookAuthProvider", co, []), Jl(t, "GithubAuthProvider", lo, []), Jl(t, "GoogleAuthProvider", po, []), Jl(t, "TwitterAuthProvider", mo, []), Jl(t, "OAuthProvider", uo, [Ll("providerId")]), Jl(t, "SAMLAuthProvider", so, [Ll("providerId")]), Jl(t, "PhoneAuthProvider", So, [{ name: "auth", K: "an instance of Firebase Auth", optional: !0, M: function(t) { return !!(t && t instanceof zh) } }]), Jl(t, "RecaptchaVerifier", Rl, [Bl(Ll(), { name: "", K: "an HTML element", optional: !1, M: function(t) { return !!(t && t instanceof Element) } }, "recaptchaContainer"), Ml("recaptchaParameters", !0), { name: "app", K: "an instance of Firebase App", optional: !0, M: function(t) { return !!(t && t instanceof zl.default.app.App) } }]), Jl(t, "ActionCodeURL", hr, []), Jl(t, "PhoneMultiFactorGenerator", ml, []), zl.default.INTERNAL.registerComponent({ name: "auth", instanceFactory: function(t) { return new zh(t = t.getProvider("app").getImmediate()) }, multipleInstances: !1, serviceProps: t, instantiationMode: "LAZY", type: "PUBLIC" }), zl.default.INTERNAL.registerComponent({ name: "auth-internal", instanceFactory: function(t) { return { getUid: b((t = t.getProvider("auth").getImmediate()).getUid, t), getToken: b(t.nc, t), addAuthTokenListener: b(t.cc, t), removeAuthTokenListener: b(t.Pc, t) } }, multipleInstances: !1, instantiationMode: "LAZY", type: "PRIVATE" }), zl.default.registerVersion("@firebase/auth", "0.16.6"), zl.default.INTERNAL.extendNamespace({ User: hh }) }() }.apply("undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}) }.apply(this, arguments) } catch (t) { throw console.error(t), new Error("Cannot instantiate firebase-auth.js - be sure to load firebase-app.js first.") } });
//# sourceMappingURL=firebase-auth.js.map