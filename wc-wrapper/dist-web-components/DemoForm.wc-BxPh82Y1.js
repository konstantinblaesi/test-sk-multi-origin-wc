var qe = Object.defineProperty;
var qt = (t) => {
  throw TypeError(t);
};
var He = (t, e, r) => e in t ? qe(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r;
var A = (t, e, r) => He(t, typeof e != "symbol" ? e + "" : e, r), Ht = (t, e, r) => e.has(t) || qt("Cannot " + r);
var y = (t, e, r) => (Ht(t, e, "read from private field"), r ? r.call(t) : e.get(t)), Nt = (t, e, r) => e.has(t) ? qt("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, r), Ot = (t, e, r, n) => (Ht(t, e, "write to private field"), n ? n.call(t, r) : e.set(t, r), r);
const Be = "5";
var ee;
typeof window < "u" && ((ee = window.__svelte ?? (window.__svelte = {})).v ?? (ee.v = /* @__PURE__ */ new Set())).add(Be);
const Ye = 2, Ue = "[", Ve = "]", at = {}, E = Symbol(), Ke = "http://www.w3.org/1999/xhtml", Bt = !1;
function We(t) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
var re = Array.isArray, Ge = Array.prototype.indexOf, Je = Array.from, ht = Object.keys, vt = Object.defineProperty, J = Object.getOwnPropertyDescriptor, Ze = Object.getOwnPropertyDescriptors, ze = Object.prototype, Qe = Array.prototype, ne = Object.getPrototypeOf, Yt = Object.isExtensible;
function se(t) {
  for (var e = 0; e < t.length; e++)
    t[e]();
}
const R = 2, ie = 4, Et = 8, Lt = 16, B = 32, U = 64, dt = 128, x = 256, $t = 512, k = 1024, F = 2048, V = 4096, wt = 8192, bt = 16384, Xe = 32768, tr = 65536, er = 1 << 19, le = 1 << 20, kt = 1 << 21, ot = Symbol("$state"), rr = Symbol("legacy props"), nr = Symbol("");
function sr(t) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function ir() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function lr(t) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function ur() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function fr() {
  throw new Error("https://svelte.dev/e/hydration_failed");
}
function ar() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function or() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function cr() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function ue(t) {
  console.warn("https://svelte.dev/e/hydration_mismatch");
}
let L = !1;
function ut(t) {
  L = t;
}
let O;
function tt(t) {
  if (t === null)
    throw ue(), at;
  return O = t;
}
function fe() {
  return tt(
    /** @type {TemplateNode} */
    /* @__PURE__ */ nt(O)
  );
}
let _r = !1;
function G(t) {
  if (typeof t != "object" || t === null || ot in t)
    return t;
  const e = ne(t);
  if (e !== ze && e !== Qe)
    return t;
  var r = /* @__PURE__ */ new Map(), n = re(t), s = /* @__PURE__ */ M(0), i = v, f = (u) => {
    var l = v;
    H(i);
    var a = u();
    return H(l), a;
  };
  return n && r.set("length", /* @__PURE__ */ M(
    /** @type {any[]} */
    t.length
  )), new Proxy(
    /** @type {any} */
    t,
    {
      defineProperty(u, l, a) {
        (!("value" in a) || a.configurable === !1 || a.enumerable === !1 || a.writable === !1) && ar();
        var _ = r.get(l);
        return _ === void 0 ? (_ = f(() => /* @__PURE__ */ M(a.value)), r.set(l, _)) : C(
          _,
          f(() => G(a.value))
        ), !0;
      },
      deleteProperty(u, l) {
        var a = r.get(l);
        if (a === void 0)
          l in u && r.set(
            l,
            f(() => /* @__PURE__ */ M(E))
          );
        else {
          if (n && typeof l == "string") {
            var _ = (
              /** @type {Source<number>} */
              r.get("length")
            ), o = Number(l);
            Number.isInteger(o) && o < _.v && C(_, o);
          }
          C(a, E), Ut(s);
        }
        return !0;
      },
      get(u, l, a) {
        var h;
        if (l === ot)
          return t;
        var _ = r.get(l), o = l in u;
        if (_ === void 0 && (!o || (h = J(u, l)) != null && h.writable) && (_ = f(() => /* @__PURE__ */ M(G(o ? u[l] : E))), r.set(l, _)), _ !== void 0) {
          var c = S(_);
          return c === E ? void 0 : c;
        }
        return Reflect.get(u, l, a);
      },
      getOwnPropertyDescriptor(u, l) {
        var a = Reflect.getOwnPropertyDescriptor(u, l);
        if (a && "value" in a) {
          var _ = r.get(l);
          _ && (a.value = S(_));
        } else if (a === void 0) {
          var o = r.get(l), c = o == null ? void 0 : o.v;
          if (o !== void 0 && c !== E)
            return {
              enumerable: !0,
              configurable: !0,
              value: c,
              writable: !0
            };
        }
        return a;
      },
      has(u, l) {
        var c;
        if (l === ot)
          return !0;
        var a = r.get(l), _ = a !== void 0 && a.v !== E || Reflect.has(u, l);
        if (a !== void 0 || d !== null && (!_ || (c = J(u, l)) != null && c.writable)) {
          a === void 0 && (a = f(() => /* @__PURE__ */ M(_ ? G(u[l]) : E)), r.set(l, a));
          var o = S(a);
          if (o === E)
            return !1;
        }
        return _;
      },
      set(u, l, a, _) {
        var Q;
        var o = r.get(l), c = l in u;
        if (n && l === "length")
          for (var h = a; h < /** @type {Source<number>} */
          o.v; h += 1) {
            var $ = r.get(h + "");
            $ !== void 0 ? C($, E) : h in u && ($ = f(() => /* @__PURE__ */ M(E)), r.set(h + "", $));
          }
        o === void 0 ? (!c || (Q = J(u, l)) != null && Q.writable) && (o = f(() => /* @__PURE__ */ M(void 0)), C(
          o,
          f(() => G(a))
        ), r.set(l, o)) : (c = o.v !== E, C(
          o,
          f(() => G(a))
        ));
        var w = Reflect.getOwnPropertyDescriptor(u, l);
        if (w != null && w.set && w.set.call(_, a), !c) {
          if (n && typeof l == "string") {
            var it = (
              /** @type {Source<number>} */
              r.get("length")
            ), z = Number(l);
            Number.isInteger(z) && z >= it.v && C(it, z + 1);
          }
          Ut(s);
        }
        return !0;
      },
      ownKeys(u) {
        S(s);
        var l = Reflect.ownKeys(u).filter((o) => {
          var c = r.get(o);
          return c === void 0 || c.v !== E;
        });
        for (var [a, _] of r)
          _.v !== E && !(a in u) && l.push(a);
        return l;
      },
      setPrototypeOf() {
        or();
      }
    }
  );
}
function Ut(t, e = 1) {
  C(t, t.v + e);
}
var Vt, ae, oe, ce;
function At() {
  if (Vt === void 0) {
    Vt = window, ae = /Firefox/.test(navigator.userAgent);
    var t = Element.prototype, e = Node.prototype, r = Text.prototype;
    oe = J(e, "firstChild").get, ce = J(e, "nextSibling").get, Yt(t) && (t.__click = void 0, t.__className = void 0, t.__attributes = null, t.__style = void 0, t.__e = void 0), Yt(r) && (r.__t = void 0);
  }
}
function _e(t = "") {
  return document.createTextNode(t);
}
// @__NO_SIDE_EFFECTS__
function Pt(t) {
  return oe.call(t);
}
// @__NO_SIDE_EFFECTS__
function nt(t) {
  return ce.call(t);
}
function hr(t, e) {
  if (!L) {
    var r = (
      /** @type {DocumentFragment} */
      /* @__PURE__ */ Pt(
        /** @type {Node} */
        t
      )
    );
    return r instanceof Comment && r.data === "" ? /* @__PURE__ */ nt(r) : r;
  }
  return O;
}
function vr(t, e = 1, r = !1) {
  let n = L ? O : t;
  for (var s; e--; )
    s = n, n = /** @type {TemplateNode} */
    /* @__PURE__ */ nt(n);
  if (!L)
    return n;
  var i = n == null ? void 0 : n.nodeType;
  if (r && i !== 3) {
    var f = _e();
    return n === null ? s == null || s.after(f) : n.before(f), tt(f), f;
  }
  return tt(n), /** @type {TemplateNode} */
  n;
}
function dr(t) {
  t.textContent = "";
}
function he(t) {
  return t === this.v;
}
function $r(t, e) {
  return t != t ? e == e : t !== e || t !== null && typeof t == "object" || typeof t == "function";
}
function wr(t) {
  return !$r(t, this.v);
}
// @__NO_SIDE_EFFECTS__
function ve(t) {
  var e = R | F, r = v !== null && (v.f & R) !== 0 ? (
    /** @type {Derived} */
    v
  ) : null;
  return d === null || r !== null && (r.f & x) !== 0 ? e |= x : d.f |= le, {
    ctx: m,
    deps: null,
    effects: null,
    equals: he,
    f: e,
    fn: t,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      null
    ),
    wv: 0,
    parent: r ?? d
  };
}
function de(t) {
  var e = t.effects;
  if (e !== null) {
    t.effects = null;
    for (var r = 0; r < e.length; r += 1)
      q(
        /** @type {Effect} */
        e[r]
      );
  }
}
function pr(t) {
  for (var e = t.parent; e !== null; ) {
    if ((e.f & R) === 0)
      return (
        /** @type {Effect} */
        e
      );
    e = e.parent;
  }
  return null;
}
function $e(t) {
  var e, r = d;
  Z(pr(t));
  try {
    de(t), e = ke(t);
  } finally {
    Z(r);
  }
  return e;
}
function we(t) {
  var e = $e(t), r = (j || (t.f & x) !== 0) && t.deps !== null ? V : k;
  P(t, r), t.equals(e) || (t.v = e, t.wv = Ne());
}
function gr(t) {
  d === null && v === null && lr(), v !== null && (v.f & x) !== 0 && d === null && ir(), st && sr();
}
function yr(t, e) {
  var r = e.last;
  r === null ? e.last = e.first = t : (r.next = t, t.prev = r, e.last = t);
}
function K(t, e, r, n = !0) {
  var s = d, i = {
    ctx: m,
    deps: null,
    nodes_start: null,
    nodes_end: null,
    f: t | F,
    first: null,
    fn: e,
    last: null,
    next: null,
    parent: s,
    prev: null,
    teardown: null,
    transitions: null,
    wv: 0
  };
  if (r)
    try {
      Ft(i), i.f |= Xe;
    } catch (l) {
      throw q(i), l;
    }
  else e !== null && Mt(i);
  var f = r && i.deps === null && i.first === null && i.nodes_start === null && i.teardown === null && (i.f & (le | dt)) === 0;
  if (!f && n && (s !== null && yr(i, s), v !== null && (v.f & R) !== 0)) {
    var u = (
      /** @type {Derived} */
      v
    );
    (u.effects ?? (u.effects = [])).push(i);
  }
  return i;
}
function mr(t) {
  const e = K(Et, null, !1);
  return P(e, k), e.teardown = t, e;
}
function Er(t) {
  gr();
  var e = d !== null && (d.f & B) !== 0 && m !== null && !m.m;
  if (e) {
    var r = (
      /** @type {ComponentContext} */
      m
    );
    (r.e ?? (r.e = [])).push({
      fn: t,
      effect: d,
      reaction: v
    });
  } else {
    var n = It(t);
    return n;
  }
}
function br(t) {
  const e = K(U, t, !0);
  return () => {
    q(e);
  };
}
function xr(t) {
  const e = K(U, t, !0);
  return (r = {}) => new Promise((n) => {
    r.outro ? Ar(e, () => {
      q(e), n(void 0);
    }) : (q(e), n(void 0));
  });
}
function It(t) {
  return K(ie, t, !1);
}
function pe(t) {
  return K(Et, t, !0);
}
function Tr(t, e = [], r = ve) {
  const n = e.map(r);
  return Nr(() => t(...n.map(S)));
}
function Nr(t, e = 0) {
  return K(Et | Lt | e, t, !0);
}
function Or(t, e = !0) {
  return K(Et | B, t, !0, e);
}
function ge(t) {
  var e = t.teardown;
  if (e !== null) {
    const r = st, n = v;
    Wt(!0), H(null);
    try {
      e.call(null);
    } finally {
      Wt(r), H(n);
    }
  }
}
function ye(t, e = !1) {
  var r = t.first;
  for (t.first = t.last = null; r !== null; ) {
    var n = r.next;
    (r.f & U) !== 0 ? r.parent = null : q(r, e), r = n;
  }
}
function kr(t) {
  for (var e = t.first; e !== null; ) {
    var r = e.next;
    (e.f & B) === 0 && q(e), e = r;
  }
}
function q(t, e = !0) {
  var r = !1;
  if ((e || (t.f & er) !== 0) && t.nodes_start !== null) {
    for (var n = t.nodes_start, s = t.nodes_end; n !== null; ) {
      var i = n === s ? null : (
        /** @type {TemplateNode} */
        /* @__PURE__ */ nt(n)
      );
      n.remove(), n = i;
    }
    r = !0;
  }
  ye(t, e && !r), mt(t, 0), P(t, bt);
  var f = t.transitions;
  if (f !== null)
    for (const l of f)
      l.stop();
  ge(t);
  var u = t.parent;
  u !== null && u.first !== null && me(t), t.next = t.prev = t.teardown = t.ctx = t.deps = t.fn = t.nodes_start = t.nodes_end = null;
}
function me(t) {
  var e = t.parent, r = t.prev, n = t.next;
  r !== null && (r.next = n), n !== null && (n.prev = r), e !== null && (e.first === t && (e.first = n), e.last === t && (e.last = r));
}
function Ar(t, e) {
  var r = [];
  Ee(t, r, !0), Sr(r, () => {
    q(t), e && e();
  });
}
function Sr(t, e) {
  var r = t.length;
  if (r > 0) {
    var n = () => --r || e();
    for (var s of t)
      s.out(n);
  } else
    e();
}
function Ee(t, e, r) {
  if ((t.f & wt) === 0) {
    if (t.f ^= wt, t.transitions !== null)
      for (const f of t.transitions)
        (f.is_global || r) && e.push(f);
    for (var n = t.first; n !== null; ) {
      var s = n.next, i = (n.f & tr) !== 0 || (n.f & B) !== 0;
      Ee(n, e, i ? r : !1), n = s;
    }
  }
}
let et = [], St = [];
function be() {
  var t = et;
  et = [], se(t);
}
function Rr() {
  var t = St;
  St = [], se(t);
}
function xe(t) {
  et.length === 0 && queueMicrotask(be), et.push(t);
}
function Kt() {
  et.length > 0 && be(), St.length > 0 && Rr();
}
let ct = !1, pt = !1, gt = null, Y = !1, st = !1;
function Wt(t) {
  st = t;
}
let X = [];
let v = null, D = !1;
function H(t) {
  v = t;
}
let d = null;
function Z(t) {
  d = t;
}
let g = null;
function Cr(t) {
  v !== null && v.f & kt && (g === null ? g = [t] : g.push(t));
}
let p = null, b = 0, T = null;
function Dr(t) {
  T = t;
}
let Te = 1, yt = 0, j = !1;
function Ne() {
  return ++Te;
}
function xt(t) {
  var o;
  var e = t.f;
  if ((e & F) !== 0)
    return !0;
  if ((e & V) !== 0) {
    var r = t.deps, n = (e & x) !== 0;
    if (r !== null) {
      var s, i, f = (e & $t) !== 0, u = n && d !== null && !j, l = r.length;
      if (f || u) {
        var a = (
          /** @type {Derived} */
          t
        ), _ = a.parent;
        for (s = 0; s < l; s++)
          i = r[s], (f || !((o = i == null ? void 0 : i.reactions) != null && o.includes(a))) && (i.reactions ?? (i.reactions = [])).push(a);
        f && (a.f ^= $t), u && _ !== null && (_.f & x) === 0 && (a.f ^= x);
      }
      for (s = 0; s < l; s++)
        if (i = r[s], xt(
          /** @type {Derived} */
          i
        ) && we(
          /** @type {Derived} */
          i
        ), i.wv > t.wv)
          return !0;
    }
    (!n || d !== null && !j) && P(t, k);
  }
  return !1;
}
function Lr(t, e) {
  for (var r = e; r !== null; ) {
    if ((r.f & dt) !== 0)
      try {
        r.fn(t);
        return;
      } catch {
        r.f ^= dt;
      }
    r = r.parent;
  }
  throw ct = !1, t;
}
function Pr(t) {
  return (t.f & bt) === 0 && (t.parent === null || (t.parent.f & dt) === 0);
}
function Tt(t, e, r, n) {
  if (ct) {
    if (r === null && (ct = !1), Pr(e))
      throw t;
    return;
  }
  r !== null && (ct = !0);
  {
    Lr(t, e);
    return;
  }
}
function Oe(t, e, r = !0) {
  var n = t.reactions;
  if (n !== null)
    for (var s = 0; s < n.length; s++) {
      var i = n[s];
      g != null && g.includes(t) || ((i.f & R) !== 0 ? Oe(
        /** @type {Derived} */
        i,
        e,
        !1
      ) : e === i && (r ? P(i, F) : (i.f & k) !== 0 && P(i, V), Mt(
        /** @type {Effect} */
        i
      )));
    }
}
function ke(t) {
  var h;
  var e = p, r = b, n = T, s = v, i = j, f = g, u = m, l = D, a = t.f;
  p = /** @type {null | Value[]} */
  null, b = 0, T = null, j = (a & x) !== 0 && (D || !Y || v === null), v = (a & (B | U)) === 0 ? t : null, g = null, Gt(t.ctx), D = !1, yt++, t.f |= kt;
  try {
    var _ = (
      /** @type {Function} */
      (0, t.fn)()
    ), o = t.deps;
    if (p !== null) {
      var c;
      if (mt(t, b), o !== null && b > 0)
        for (o.length = b + p.length, c = 0; c < p.length; c++)
          o[b + c] = p[c];
      else
        t.deps = o = p;
      if (!j)
        for (c = b; c < o.length; c++)
          ((h = o[c]).reactions ?? (h.reactions = [])).push(t);
    } else o !== null && b < o.length && (mt(t, b), o.length = b);
    if (Pe() && T !== null && !D && o !== null && (t.f & (R | V | F)) === 0)
      for (c = 0; c < /** @type {Source[]} */
      T.length; c++)
        Oe(
          T[c],
          /** @type {Effect} */
          t
        );
    return s !== t && (yt++, T !== null && (n === null ? n = T : n.push(.../** @type {Source[]} */
    T))), _;
  } finally {
    p = e, b = r, T = n, v = s, j = i, g = f, Gt(u), D = l, t.f ^= kt;
  }
}
function Ir(t, e) {
  let r = e.reactions;
  if (r !== null) {
    var n = Ge.call(r, t);
    if (n !== -1) {
      var s = r.length - 1;
      s === 0 ? r = e.reactions = null : (r[n] = r[s], r.pop());
    }
  }
  r === null && (e.f & R) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (p === null || !p.includes(e)) && (P(e, V), (e.f & (x | $t)) === 0 && (e.f ^= $t), de(
    /** @type {Derived} **/
    e
  ), mt(
    /** @type {Derived} **/
    e,
    0
  ));
}
function mt(t, e) {
  var r = t.deps;
  if (r !== null)
    for (var n = e; n < r.length; n++)
      Ir(t, r[n]);
}
function Ft(t) {
  var e = t.f;
  if ((e & bt) === 0) {
    P(t, k);
    var r = d, n = m, s = Y;
    d = t, Y = !0;
    try {
      (e & Lt) !== 0 ? kr(t) : ye(t), ge(t);
      var i = ke(t);
      t.teardown = typeof i == "function" ? i : null, t.wv = Te;
      var f = t.deps, u;
      Bt && _r && t.f & F;
    } catch (l) {
      Tt(l, t, r, n || t.ctx);
    } finally {
      Y = s, d = r;
    }
  }
}
function Fr() {
  try {
    ur();
  } catch (t) {
    if (gt !== null)
      Tt(t, gt, null);
    else
      throw t;
  }
}
function Ae() {
  var t = Y;
  try {
    var e = 0;
    for (Y = !0; X.length > 0; ) {
      e++ > 1e3 && Fr();
      var r = X, n = r.length;
      X = [];
      for (var s = 0; s < n; s++) {
        var i = jr(r[s]);
        Mr(i);
      }
      rt.clear();
    }
  } finally {
    pt = !1, Y = t, gt = null;
  }
}
function Mr(t) {
  var e = t.length;
  if (e !== 0)
    for (var r = 0; r < e; r++) {
      var n = t[r];
      if ((n.f & (bt | wt)) === 0)
        try {
          xt(n) && (Ft(n), n.deps === null && n.first === null && n.nodes_start === null && (n.teardown === null ? me(n) : n.fn = null));
        } catch (s) {
          Tt(s, n, null, n.ctx);
        }
    }
}
function Mt(t) {
  pt || (pt = !0, queueMicrotask(Ae));
  for (var e = gt = t; e.parent !== null; ) {
    e = e.parent;
    var r = e.f;
    if ((r & (U | B)) !== 0) {
      if ((r & k) === 0) return;
      e.f ^= k;
    }
  }
  X.push(e);
}
function jr(t) {
  for (var e = [], r = t; r !== null; ) {
    var n = r.f, s = (n & (B | U)) !== 0, i = s && (n & k) !== 0;
    if (!i && (n & wt) === 0) {
      if ((n & ie) !== 0)
        e.push(r);
      else if (s)
        r.f ^= k;
      else {
        var f = v;
        try {
          v = r, xt(r) && Ft(r);
        } catch (a) {
          Tt(a, r, null, r.ctx);
        } finally {
          v = f;
        }
      }
      var u = r.first;
      if (u !== null) {
        r = u;
        continue;
      }
    }
    var l = r.parent;
    for (r = r.next; r === null && l !== null; )
      r = l.next, l = l.parent;
  }
  return e;
}
function Rt(t) {
  var e;
  for (Kt(); X.length > 0; )
    pt = !0, Ae(), Kt();
  return (
    /** @type {T} */
    e
  );
}
function S(t) {
  var e = t.f, r = (e & R) !== 0;
  if (v !== null && !D) {
    if (!(g != null && g.includes(t))) {
      var n = v.deps;
      t.rv < yt && (t.rv = yt, p === null && n !== null && n[b] === t ? b++ : p === null ? p = [t] : (!j || !p.includes(t)) && p.push(t));
    }
  } else if (r && /** @type {Derived} */
  t.deps === null && /** @type {Derived} */
  t.effects === null) {
    var s = (
      /** @type {Derived} */
      t
    ), i = s.parent;
    i !== null && (i.f & x) === 0 && (s.f ^= x);
  }
  return r && (s = /** @type {Derived} */
  t, xt(s) && we(s)), st && rt.has(t) ? rt.get(t) : t.v;
}
function jt(t) {
  var e = D;
  try {
    return D = !0, t();
  } finally {
    D = e;
  }
}
const qr = -7169;
function P(t, e) {
  t.f = t.f & qr | e;
}
const rt = /* @__PURE__ */ new Map();
function Se(t, e) {
  var r = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: t,
    reactions: null,
    equals: he,
    rv: 0,
    wv: 0
  };
  return r;
}
// @__NO_SIDE_EFFECTS__
function M(t, e) {
  const r = Se(t);
  return Cr(r), r;
}
// @__NO_SIDE_EFFECTS__
function Re(t, e = !1) {
  const r = Se(t);
  return e || (r.equals = wr), r;
}
function C(t, e, r = !1) {
  v !== null && !D && Pe() && (v.f & (R | Lt)) !== 0 && !(g != null && g.includes(t)) && cr();
  let n = r ? G(e) : e;
  return Hr(t, n);
}
function Hr(t, e) {
  if (!t.equals(e)) {
    var r = t.v;
    st ? rt.set(t, e) : rt.set(t, r), t.v = e, (t.f & R) !== 0 && ((t.f & F) !== 0 && $e(
      /** @type {Derived} */
      t
    ), P(t, (t.f & x) === 0 ? k : V)), t.wv = Ne(), Ce(t, F), d !== null && (d.f & k) !== 0 && (d.f & (B | U)) === 0 && (T === null ? Dr([t]) : T.push(t));
  }
  return e;
}
function Ce(t, e) {
  var r = t.reactions;
  if (r !== null)
    for (var n = r.length, s = 0; s < n; s++) {
      var i = r[s], f = i.f;
      (f & F) === 0 && (P(i, e), (f & (k | x)) !== 0 && ((f & R) !== 0 ? Ce(
        /** @type {Derived} */
        i,
        V
      ) : Mt(
        /** @type {Effect} */
        i
      )));
    }
}
let m = null;
function Gt(t) {
  m = t;
}
function De(t, e = !1, r) {
  var n = m = {
    p: m,
    c: null,
    d: !1,
    e: null,
    m: !1,
    s: t,
    x: null,
    l: null
  };
  mr(() => {
    n.d = !0;
  });
}
function Le(t) {
  const e = m;
  if (e !== null) {
    t !== void 0 && (e.x = t);
    const f = e.e;
    if (f !== null) {
      var r = d, n = v;
      e.e = null;
      try {
        for (var s = 0; s < f.length; s++) {
          var i = f[s];
          Z(i.effect), H(i.reaction), It(i.fn);
        }
      } finally {
        Z(r), H(n);
      }
    }
    m = e.p, e.m = !0;
  }
  return t || /** @type {T} */
  {};
}
function Pe() {
  return !0;
}
const Br = ["touchstart", "touchmove"];
function Yr(t) {
  return Br.includes(t);
}
const Ur = /* @__PURE__ */ new Set(), Jt = /* @__PURE__ */ new Set();
function ft(t) {
  var Q;
  var e = this, r = (
    /** @type {Node} */
    e.ownerDocument
  ), n = t.type, s = ((Q = t.composedPath) == null ? void 0 : Q.call(t)) || [], i = (
    /** @type {null | Element} */
    s[0] || t.target
  ), f = 0, u = t.__root;
  if (u) {
    var l = s.indexOf(u);
    if (l !== -1 && (e === document || e === /** @type {any} */
    window)) {
      t.__root = e;
      return;
    }
    var a = s.indexOf(e);
    if (a === -1)
      return;
    l <= a && (f = l);
  }
  if (i = /** @type {Element} */
  s[f] || t.target, i !== e) {
    vt(t, "currentTarget", {
      configurable: !0,
      get() {
        return i || r;
      }
    });
    var _ = v, o = d;
    H(null), Z(null);
    try {
      for (var c, h = []; i !== null; ) {
        var $ = i.assignedSlot || i.parentNode || /** @type {any} */
        i.host || null;
        try {
          var w = i["__" + n];
          if (w != null && (!/** @type {any} */
          i.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          t.target === i))
            if (re(w)) {
              var [it, ...z] = w;
              it.apply(i, [t, ...z]);
            } else
              w.call(i, t);
        } catch (lt) {
          c ? h.push(lt) : c = lt;
        }
        if (t.cancelBubble || $ === e || $ === null)
          break;
        i = $;
      }
      if (c) {
        for (let lt of h)
          queueMicrotask(() => {
            throw lt;
          });
        throw c;
      }
    } finally {
      t.__root = e, delete t.currentTarget, H(_), Z(o);
    }
  }
}
function Vr(t) {
  var e = document.createElement("template");
  return e.innerHTML = t, e.content;
}
function Ct(t, e) {
  var r = (
    /** @type {Effect} */
    d
  );
  r.nodes_start === null && (r.nodes_start = t, r.nodes_end = e);
}
// @__NO_SIDE_EFFECTS__
function Kr(t, e) {
  var r = (e & Ye) !== 0, n, s = !t.startsWith("<!>");
  return () => {
    if (L)
      return Ct(O, null), O;
    n === void 0 && (n = Vr(s ? t : "<!>" + t));
    var i = (
      /** @type {TemplateNode} */
      r || ae ? document.importNode(n, !0) : n.cloneNode(!0)
    );
    {
      var f = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ Pt(i)
      ), u = (
        /** @type {TemplateNode} */
        i.lastChild
      );
      Ct(f, u);
    }
    return i;
  };
}
function Ie(t, e) {
  if (L) {
    d.nodes_end = O, fe();
    return;
  }
  t !== null && t.before(
    /** @type {Node} */
    e
  );
}
function Fe(t, e) {
  return Me(t, e);
}
function Wr(t, e) {
  At(), e.intro = e.intro ?? !1;
  const r = e.target, n = L, s = O;
  try {
    for (var i = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Pt(r)
    ); i && (i.nodeType !== 8 || /** @type {Comment} */
    i.data !== Ue); )
      i = /** @type {TemplateNode} */
      /* @__PURE__ */ nt(i);
    if (!i)
      throw at;
    ut(!0), tt(
      /** @type {Comment} */
      i
    ), fe();
    const f = Me(t, { ...e, anchor: i });
    if (O === null || O.nodeType !== 8 || /** @type {Comment} */
    O.data !== Ve)
      throw ue(), at;
    return ut(!1), /**  @type {Exports} */
    f;
  } catch (f) {
    if (f === at)
      return e.recover === !1 && fr(), At(), dr(r), ut(!1), Fe(t, e);
    throw f;
  } finally {
    ut(n), tt(s);
  }
}
const W = /* @__PURE__ */ new Map();
function Me(t, { target: e, anchor: r, props: n = {}, events: s, context: i, intro: f = !0 }) {
  At();
  var u = /* @__PURE__ */ new Set(), l = (o) => {
    for (var c = 0; c < o.length; c++) {
      var h = o[c];
      if (!u.has(h)) {
        u.add(h);
        var $ = Yr(h);
        e.addEventListener(h, ft, { passive: $ });
        var w = W.get(h);
        w === void 0 ? (document.addEventListener(h, ft, { passive: $ }), W.set(h, 1)) : W.set(h, w + 1);
      }
    }
  };
  l(Je(Ur)), Jt.add(l);
  var a = void 0, _ = xr(() => {
    var o = r ?? e.appendChild(_e());
    return Or(() => {
      if (i) {
        De({});
        var c = (
          /** @type {ComponentContext} */
          m
        );
        c.c = i;
      }
      s && (n.$$events = s), L && Ct(
        /** @type {TemplateNode} */
        o,
        null
      ), a = t(o, n) || {}, L && (d.nodes_end = O), i && Le();
    }), () => {
      var $;
      for (var c of u) {
        e.removeEventListener(c, ft);
        var h = (
          /** @type {number} */
          W.get(c)
        );
        --h === 0 ? (document.removeEventListener(c, ft), W.delete(c)) : W.set(c, h);
      }
      Jt.delete(l), o !== r && (($ = o.parentNode) == null || $.removeChild(o));
    };
  });
  return Dt.set(a, _), a;
}
let Dt = /* @__PURE__ */ new WeakMap();
function Gr(t, e) {
  const r = Dt.get(t);
  return r ? (Dt.delete(t), r(e)) : Promise.resolve();
}
function Jr(t, e) {
  xe(() => {
    var r = t.getRootNode(), n = (
      /** @type {ShadowRoot} */
      r.host ? (
        /** @type {ShadowRoot} */
        r
      ) : (
        /** @type {Document} */
        r.head ?? /** @type {Document} */
        r.ownerDocument.head
      )
    );
    if (!n.querySelector("#" + e.hash)) {
      const s = document.createElement("style");
      s.id = e.hash, s.textContent = e.code, n.appendChild(s);
    }
  });
}
const Zr = Symbol("is custom element"), zr = Symbol("is html");
function Zt(t, e, r, n) {
  var s = Qr(t);
  L && (s[e] = t.getAttribute(e), e === "src" || e === "srcset" || e === "href" && t.nodeName === "LINK") || s[e] !== (s[e] = r) && (e === "loading" && (t[nr] = r), r == null ? t.removeAttribute(e) : typeof r != "string" && Xr(t).includes(e) ? t[e] = r : t.setAttribute(e, r));
}
function Qr(t) {
  return (
    /** @type {Record<string | symbol, unknown>} **/
    // @ts-expect-error
    t.__attributes ?? (t.__attributes = {
      [Zr]: t.nodeName.includes("-"),
      [zr]: t.namespaceURI === Ke
    })
  );
}
var zt = /* @__PURE__ */ new Map();
function Xr(t) {
  var e = zt.get(t.nodeName);
  if (e) return e;
  zt.set(t.nodeName, e = []);
  for (var r, n = t, s = Element.prototype; s !== n; ) {
    r = Ze(n);
    for (var i in r)
      r[i].set && e.push(i);
    n = ne(n);
  }
  return e;
}
function Qt(t, e) {
  return t === e || (t == null ? void 0 : t[ot]) === e;
}
function tn(t = {}, e, r, n) {
  return It(() => {
    var s, i;
    return pe(() => {
      s = i, i = [], jt(() => {
        t !== r(...i) && (e(t, ...i), s && Qt(r(...s), t) && e(null, ...s));
      });
    }), () => {
      xe(() => {
        i && Qt(r(...i), t) && e(null, ...i);
      });
    };
  }), t;
}
function en(t) {
  m === null && We(), Er(() => {
    const e = jt(t);
    if (typeof e == "function") return (
      /** @type {() => void} */
      e
    );
  });
}
function Xt(t) {
  var e;
  return ((e = t.ctx) == null ? void 0 : e.d) ?? !1;
}
function te(t, e, r, n) {
  var s;
  s = /** @type {V} */
  t[e];
  var i = (
    /** @type {V} */
    n
  ), f = !0, u = !1, l = () => (u = !0, f && (f = !1, i = /** @type {V} */
  n), i), a;
  a = () => {
    var h = (
      /** @type {V} */
      t[e]
    );
    return h === void 0 ? l() : (f = !0, u = !1, h);
  };
  var _ = !1, o = /* @__PURE__ */ Re(s), c = /* @__PURE__ */ ve(() => {
    var h = a(), $ = S(o);
    return _ ? (_ = !1, $) : o.v = h;
  });
  return function(h, $) {
    if (arguments.length > 0) {
      const w = $ ? S(c) : h;
      if (!c.equals(w)) {
        if (_ = !0, C(o, w), u && i !== void 0 && (i = w), Xt(c))
          return h;
        jt(() => S(c));
      }
      return h;
    }
    return Xt(c) ? c.v : S(c);
  };
}
function rn(t) {
  return new nn(t);
}
var I, N;
class nn {
  /**
   * @param {ComponentConstructorOptions & {
   *  component: any;
   * }} options
   */
  constructor(e) {
    /** @type {any} */
    Nt(this, I);
    /** @type {Record<string, any>} */
    Nt(this, N);
    var i;
    var r = /* @__PURE__ */ new Map(), n = (f, u) => {
      var l = /* @__PURE__ */ Re(u);
      return r.set(f, l), l;
    };
    const s = new Proxy(
      { ...e.props || {}, $$events: {} },
      {
        get(f, u) {
          return S(r.get(u) ?? n(u, Reflect.get(f, u)));
        },
        has(f, u) {
          return u === rr ? !0 : (S(r.get(u) ?? n(u, Reflect.get(f, u))), Reflect.has(f, u));
        },
        set(f, u, l) {
          return C(r.get(u) ?? n(u, l), l), Reflect.set(f, u, l);
        }
      }
    );
    Ot(this, N, (e.hydrate ? Wr : Fe)(e.component, {
      target: e.target,
      anchor: e.anchor,
      props: s,
      context: e.context,
      intro: e.intro ?? !1,
      recover: e.recover
    })), (!((i = e == null ? void 0 : e.props) != null && i.$$host) || e.sync === !1) && Rt(), Ot(this, I, s.$$events);
    for (const f of Object.keys(y(this, N)))
      f === "$set" || f === "$destroy" || f === "$on" || vt(this, f, {
        get() {
          return y(this, N)[f];
        },
        /** @param {any} value */
        set(u) {
          y(this, N)[f] = u;
        },
        enumerable: !0
      });
    y(this, N).$set = /** @param {Record<string, any>} next */
    (f) => {
      Object.assign(s, f);
    }, y(this, N).$destroy = () => {
      Gr(y(this, N));
    };
  }
  /** @param {Record<string, any>} props */
  $set(e) {
    y(this, N).$set(e);
  }
  /**
   * @param {string} event
   * @param {(...args: any[]) => any} callback
   * @returns {any}
   */
  $on(e, r) {
    y(this, I)[e] = y(this, I)[e] || [];
    const n = (...s) => r.call(this, ...s);
    return y(this, I)[e].push(n), () => {
      y(this, I)[e] = y(this, I)[e].filter(
        /** @param {any} fn */
        (s) => s !== n
      );
    };
  }
  $destroy() {
    y(this, N).$destroy();
  }
}
I = new WeakMap(), N = new WeakMap();
let je;
typeof HTMLElement == "function" && (je = class extends HTMLElement {
  /**
   * @param {*} $$componentCtor
   * @param {*} $$slots
   * @param {*} use_shadow_dom
   */
  constructor(e, r, n) {
    super();
    /** The Svelte component constructor */
    A(this, "$$ctor");
    /** Slots */
    A(this, "$$s");
    /** @type {any} The Svelte component instance */
    A(this, "$$c");
    /** Whether or not the custom element is connected */
    A(this, "$$cn", !1);
    /** @type {Record<string, any>} Component props data */
    A(this, "$$d", {});
    /** `true` if currently in the process of reflecting component props back to attributes */
    A(this, "$$r", !1);
    /** @type {Record<string, CustomElementPropDefinition>} Props definition (name, reflected, type etc) */
    A(this, "$$p_d", {});
    /** @type {Record<string, EventListenerOrEventListenerObject[]>} Event listeners */
    A(this, "$$l", {});
    /** @type {Map<EventListenerOrEventListenerObject, Function>} Event listener unsubscribe functions */
    A(this, "$$l_u", /* @__PURE__ */ new Map());
    /** @type {any} The managed render effect for reflecting attributes */
    A(this, "$$me");
    this.$$ctor = e, this.$$s = r, n && this.attachShadow({ mode: "open" });
  }
  /**
   * @param {string} type
   * @param {EventListenerOrEventListenerObject} listener
   * @param {boolean | AddEventListenerOptions} [options]
   */
  addEventListener(e, r, n) {
    if (this.$$l[e] = this.$$l[e] || [], this.$$l[e].push(r), this.$$c) {
      const s = this.$$c.$on(e, r);
      this.$$l_u.set(r, s);
    }
    super.addEventListener(e, r, n);
  }
  /**
   * @param {string} type
   * @param {EventListenerOrEventListenerObject} listener
   * @param {boolean | AddEventListenerOptions} [options]
   */
  removeEventListener(e, r, n) {
    if (super.removeEventListener(e, r, n), this.$$c) {
      const s = this.$$l_u.get(r);
      s && (s(), this.$$l_u.delete(r));
    }
  }
  async connectedCallback() {
    if (this.$$cn = !0, !this.$$c) {
      let e = function(s) {
        return (i) => {
          const f = document.createElement("slot");
          s !== "default" && (f.name = s), Ie(i, f);
        };
      };
      if (await Promise.resolve(), !this.$$cn || this.$$c)
        return;
      const r = {}, n = sn(this);
      for (const s of this.$$s)
        s in n && (s === "default" && !this.$$d.children ? (this.$$d.children = e(s), r.default = !0) : r[s] = e(s));
      for (const s of this.attributes) {
        const i = this.$$g_p(s.name);
        i in this.$$d || (this.$$d[i] = _t(i, s.value, this.$$p_d, "toProp"));
      }
      for (const s in this.$$p_d)
        !(s in this.$$d) && this[s] !== void 0 && (this.$$d[s] = this[s], delete this[s]);
      this.$$c = rn({
        component: this.$$ctor,
        target: this.shadowRoot || this,
        props: {
          ...this.$$d,
          $$slots: r,
          $$host: this
        }
      }), this.$$me = br(() => {
        pe(() => {
          var s;
          this.$$r = !0;
          for (const i of ht(this.$$c)) {
            if (!((s = this.$$p_d[i]) != null && s.reflect)) continue;
            this.$$d[i] = this.$$c[i];
            const f = _t(
              i,
              this.$$d[i],
              this.$$p_d,
              "toAttribute"
            );
            f == null ? this.removeAttribute(this.$$p_d[i].attribute || i) : this.setAttribute(this.$$p_d[i].attribute || i, f);
          }
          this.$$r = !1;
        });
      });
      for (const s in this.$$l)
        for (const i of this.$$l[s]) {
          const f = this.$$c.$on(s, i);
          this.$$l_u.set(i, f);
        }
      this.$$l = {};
    }
  }
  // We don't need this when working within Svelte code, but for compatibility of people using this outside of Svelte
  // and setting attributes through setAttribute etc, this is helpful
  /**
   * @param {string} attr
   * @param {string} _oldValue
   * @param {string} newValue
   */
  attributeChangedCallback(e, r, n) {
    var s;
    this.$$r || (e = this.$$g_p(e), this.$$d[e] = _t(e, n, this.$$p_d, "toProp"), (s = this.$$c) == null || s.$set({ [e]: this.$$d[e] }));
  }
  disconnectedCallback() {
    this.$$cn = !1, Promise.resolve().then(() => {
      !this.$$cn && this.$$c && (this.$$c.$destroy(), this.$$me(), this.$$c = void 0);
    });
  }
  /**
   * @param {string} attribute_name
   */
  $$g_p(e) {
    return ht(this.$$p_d).find(
      (r) => this.$$p_d[r].attribute === e || !this.$$p_d[r].attribute && r.toLowerCase() === e
    ) || e;
  }
});
function _t(t, e, r, n) {
  var i;
  const s = (i = r[t]) == null ? void 0 : i.type;
  if (e = s === "Boolean" && typeof e != "boolean" ? e != null : e, !n || !r[t])
    return e;
  if (n === "toAttribute")
    switch (s) {
      case "Object":
      case "Array":
        return e == null ? null : JSON.stringify(e);
      case "Boolean":
        return e ? "" : null;
      case "Number":
        return e ?? null;
      default:
        return e;
    }
  else
    switch (s) {
      case "Object":
      case "Array":
        return e && JSON.parse(e);
      case "Boolean":
        return e;
      // conversion already handled above
      case "Number":
        return e != null ? +e : e;
      default:
        return e;
    }
}
function sn(t) {
  const e = {};
  return t.childNodes.forEach((r) => {
    e[
      /** @type {Element} node */
      r.slot || "default"
    ] = !0;
  }), e;
}
function ln(t, e, r, n, s, i) {
  let f = class extends je {
    constructor() {
      super(t, r, s), this.$$p_d = e;
    }
    static get observedAttributes() {
      return ht(e).map(
        (u) => (e[u].attribute || u).toLowerCase()
      );
    }
  };
  return ht(e).forEach((u) => {
    vt(f.prototype, u, {
      get() {
        return this.$$c && u in this.$$c ? this.$$c[u] : this.$$d[u];
      },
      set(l) {
        var o;
        l = _t(u, l, e), this.$$d[u] = l;
        var a = this.$$c;
        if (a) {
          var _ = (o = J(a, u)) == null ? void 0 : o.get;
          _ ? a[u] = l : a.$set({ [u]: l });
        }
      }
    });
  }), n.forEach((u) => {
    vt(f.prototype, u, {
      get() {
        var l;
        return (l = this.$$c) == null ? void 0 : l[u];
      }
    });
  }), t.element = /** @type {any} */
  f, f;
}
var un = /* @__PURE__ */ Kr('<h1>Hello from Form WC Wrapper</h1> <iframe class="svelte-1wpa6px"></iframe>', 1);
const fn = {
  hash: "svelte-1wpa6px",
  code: `iframe.svelte-1wpa6px {
		/* position: absolute;
		top: 0px;
		left: 0px; */border:0px;width:100%;height:100%;user-select:none;}`
};
function an(t, e) {
  De(e, !0), Jr(t, fn);
  const r = te(e, "title"), n = te(e, "url");
  let s;
  const i = new URL(n()).origin;
  en(() => {
    window.addEventListener("message", (l) => {
      if (l.origin !== i) return;
      const { type: a, height: _ } = l.data;
      a === "formHeight" && (s.style.height = `${_}px`);
    });
  });
  var f = un(), u = vr(hr(f), 2);
  return tn(u, (l) => s = l, () => s), Tr(() => {
    Zt(u, "title", r()), Zt(u, "src", n());
  }), Ie(t, f), Le({
    get title() {
      return r();
    },
    set title(l) {
      r(l), Rt();
    },
    get url() {
      return n();
    },
    set url(l) {
      n(l), Rt();
    }
  });
}
customElements.define("demo-form", ln(an, { title: {}, url: {} }, [], [], !0));
export {
  an as default
};
