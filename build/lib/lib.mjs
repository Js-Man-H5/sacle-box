import { defineComponent as z, ref as y, onMounted as A, onUnmounted as F, openBlock as U, createElementBlock as H, normalizeStyle as X, renderSlot as D } from "vue";
var p = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function q(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var j = q, J = typeof p == "object" && p && p.Object === Object && p, K = J, Q = K, V = typeof self == "object" && self && self.Object === Object && self, Y = Q || V || Function("return this")(), R = Y, Z = R, ee = function() {
  return Z.Date.now();
}, te = ee, ne = /\s/;
function re(e) {
  for (var t = e.length; t-- && ne.test(e.charAt(t)); )
    ;
  return t;
}
var ie = re, oe = ie, ae = /^\s+/;
function ce(e) {
  return e && e.slice(0, oe(e) + 1).replace(ae, "");
}
var fe = ce, se = R, le = se.Symbol, C = le, x = C, N = Object.prototype, de = N.hasOwnProperty, ue = N.toString, g = x ? x.toStringTag : void 0;
function me(e) {
  var t = de.call(e, g), n = e[g];
  try {
    e[g] = void 0;
    var i = !0;
  } catch {
  }
  var o = ue.call(e);
  return i && (t ? e[g] = n : delete e[g]), o;
}
var be = me, ge = Object.prototype, ve = ge.toString;
function ye(e) {
  return ve.call(e);
}
var pe = ye, E = C, _e = be, Te = pe, he = "[object Null]", Se = "[object Undefined]", I = E ? E.toStringTag : void 0;
function je(e) {
  return e == null ? e === void 0 ? Se : he : I && I in Object(e) ? _e(e) : Te(e);
}
var $e = je;
function we(e) {
  return e != null && typeof e == "object";
}
var Oe = we, xe = $e, Ee = Oe, Ie = "[object Symbol]";
function ke(e) {
  return typeof e == "symbol" || Ee(e) && xe(e) == Ie;
}
var Be = ke, Le = fe, k = j, Re = Be, B = 0 / 0, Ce = /^[-+]0x[0-9a-f]+$/i, Ne = /^0b[01]+$/i, We = /^0o[0-7]+$/i, Ge = parseInt;
function Pe(e) {
  if (typeof e == "number")
    return e;
  if (Re(e))
    return B;
  if (k(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = k(t) ? t + "" : t;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = Le(e);
  var n = Ne.test(e);
  return n || We.test(e) ? Ge(e.slice(2), n ? 2 : 8) : Ce.test(e) ? B : +e;
}
var Me = Pe, ze = j, S = te, L = Me, Ae = "Expected a function", Fe = Math.max, Ue = Math.min;
function He(e, t, n) {
  var i, o, s, l, a, c, f = 0, u = !1, m = !1, _ = !0;
  if (typeof e != "function")
    throw new TypeError(Ae);
  t = L(t) || 0, ze(n) && (u = !!n.leading, m = "maxWait" in n, s = m ? Fe(L(n.maxWait) || 0, t) : s, _ = "trailing" in n ? !!n.trailing : _);
  function T(r) {
    var d = i, b = o;
    return i = o = void 0, f = r, l = e.apply(b, d), l;
  }
  function W(r) {
    return f = r, a = setTimeout(v, t), u ? T(r) : l;
  }
  function G(r) {
    var d = r - c, b = r - f, O = t - d;
    return m ? Ue(O, s - b) : O;
  }
  function $(r) {
    var d = r - c, b = r - f;
    return c === void 0 || d >= t || d < 0 || m && b >= s;
  }
  function v() {
    var r = S();
    if ($(r))
      return w(r);
    a = setTimeout(v, G(r));
  }
  function w(r) {
    return a = void 0, _ && i ? T(r) : (i = o = void 0, l);
  }
  function P() {
    a !== void 0 && clearTimeout(a), f = 0, i = c = o = a = void 0;
  }
  function M() {
    return a === void 0 ? l : w(S());
  }
  function h() {
    var r = S(), d = $(r);
    if (i = arguments, o = this, c = r, d) {
      if (a === void 0)
        return W(c);
      if (m)
        return clearTimeout(a), a = setTimeout(v, t), T(c);
    }
    return a === void 0 && (a = setTimeout(v, t)), l;
  }
  return h.cancel = P, h.flush = M, h;
}
var Xe = He, De = Xe, qe = j, Je = "Expected a function";
function Ke(e, t, n) {
  var i = !0, o = !0;
  if (typeof e != "function")
    throw new TypeError(Je);
  return qe(n) && (i = "leading" in n ? !!n.leading : i, o = "trailing" in n ? !!n.trailing : o), De(e, t, {
    leading: i,
    maxWait: t,
    trailing: o
  });
}
var Qe = Ke;
const Ve = {
  name: "SacleBox"
}, Ye = /* @__PURE__ */ z({
  ...Ve,
  props: {
    width: { default: 1920 },
    height: { default: 1080 }
  },
  setup(e) {
    const t = e, n = y(0), i = y(t.width), o = y(), s = y(t.height), l = () => {
      const f = window.innerHeight / s.value, u = window.innerWidth / i.value;
      return u < f ? u : f;
    }, a = () => {
      n.value = l(), o.value && o.value.style.setProperty("--scale", n.value);
    }, c = Qe(() => {
      a();
    }, 200);
    return A(() => {
      a(), window.addEventListener("resize", c);
    }), F(() => {
      window.removeEventListener("resize", c);
    }), (f, u) => (U(), H("div", {
      class: "ScaleBox",
      ref_key: "dom",
      ref: o,
      style: X({
        width: i.value + "px",
        height: s.value + "px"
      })
    }, [
      D(f.$slots, "default", {}, void 0, !0)
    ], 4));
  }
});
const Ze = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [i, o] of t)
    n[i] = o;
  return n;
}, et = /* @__PURE__ */ Ze(Ye, [["__scopeId", "data-v-e608d16a"]]), tt = [et], rt = {
  install(e) {
    tt.forEach((t) => {
      e.component(t.name, t);
    });
  }
};
export {
  et as SacleBox,
  rt as default
};
