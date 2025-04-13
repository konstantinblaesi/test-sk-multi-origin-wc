var De = Object.defineProperty;
var Ft = (t) => {
  throw TypeError(t);
};
var Pe = (t, e, r) => e in t ? De(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r;
var O = (t, e, r) => Pe(t, typeof e != "symbol" ? e + "" : e, r), Mt = (t, e, r) => e.has(t) || Ft("Cannot " + r);
var y = (t, e, r) => (Mt(t, e, "read from private field"), r ? r.call(t) : e.get(t)), Et = (t, e, r) => e.has(t) ? Ft("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, r), bt = (t, e, r, n) => (Mt(t, e, "write to private field"), n ? n.call(t, r) : e.set(t, r), r);
const Ie = "5";
var zt;
typeof window < "u" && ((zt = window.__svelte ?? (window.__svelte = {})).v ?? (zt.v = /* @__PURE__ */ new Set())).add(Ie);
const Le = 2, Fe = "[", Me = "]", it = {}, m = Symbol(), je = "http://www.w3.org/1999/xhtml", jt = !1;
var Qt = Array.isArray, qe = Array.prototype.indexOf, Be = Array.from, ft = Object.keys, at = Object.defineProperty, J = Object.getOwnPropertyDescriptor, He = Object.getOwnPropertyDescriptors, Ye = Object.prototype, Ue = Array.prototype, Xt = Object.getPrototypeOf, qt = Object.isExtensible;
function te(t) {
  for (var e = 0; e < t.length; e++)
    t[e]();
}
const S = 2, ee = 4, gt = 8, Dt = 16, Y = 32, U = 64, ot = 128, T = 256, ct = 512, N = 1024, L = 2048, V = 4096, _t = 8192, wt = 16384, Ve = 32768, Ke = 65536, Ge = 1 << 19, re = 1 << 20, Tt = 1 << 21, xt = Symbol("$state"), We = Symbol("legacy props"), Je = Symbol("");
function Ze() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function ze() {
  throw new Error("https://svelte.dev/e/hydration_failed");
}
function Qe() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function Xe() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function tr() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function ne(t) {
  console.warn("https://svelte.dev/e/hydration_mismatch");
}
let H = !1;
function nt(t) {
  H = t;
}
let C;
function Nt(t) {
  if (t === null)
    throw ne(), it;
  return C = t;
}
function se() {
  return Nt(
    /** @type {TemplateNode} */
    /* @__PURE__ */ Pt(C)
  );
}
let er = !1;
function W(t) {
  if (typeof t != "object" || t === null || xt in t)
    return t;
  const e = Xt(t);
  if (e !== Ye && e !== Ue)
    return t;
  var r = /* @__PURE__ */ new Map(), n = Qt(t), s = /* @__PURE__ */ F(0), i = h, f = (l) => {
    var u = h;
    q(i);
    var a = l();
    return q(u), a;
  };
  return n && r.set("length", /* @__PURE__ */ F(
    /** @type {any[]} */
    t.length
  )), new Proxy(
    /** @type {any} */
    t,
    {
      defineProperty(l, u, a) {
        (!("value" in a) || a.configurable === !1 || a.enumerable === !1 || a.writable === !1) && Qe();
        var _ = r.get(u);
        return _ === void 0 ? (_ = f(() => /* @__PURE__ */ F(a.value)), r.set(u, _)) : k(
          _,
          f(() => W(a.value))
        ), !0;
      },
      deleteProperty(l, u) {
        var a = r.get(u);
        if (a === void 0)
          u in l && r.set(
            u,
            f(() => /* @__PURE__ */ F(m))
          );
        else {
          if (n && typeof u == "string") {
            var _ = (
              /** @type {Source<number>} */
              r.get("length")
            ), o = Number(u);
            Number.isInteger(o) && o < _.v && k(_, o);
          }
          k(a, m), Bt(s);
        }
        return !0;
      },
      get(l, u, a) {
        var v;
        if (u === xt)
          return t;
        var _ = r.get(u), o = u in l;
        if (_ === void 0 && (!o || (v = J(l, u)) != null && v.writable) && (_ = f(() => /* @__PURE__ */ F(W(o ? l[u] : m))), r.set(u, _)), _ !== void 0) {
          var c = A(_);
          return c === m ? void 0 : c;
        }
        return Reflect.get(l, u, a);
      },
      getOwnPropertyDescriptor(l, u) {
        var a = Reflect.getOwnPropertyDescriptor(l, u);
        if (a && "value" in a) {
          var _ = r.get(u);
          _ && (a.value = A(_));
        } else if (a === void 0) {
          var o = r.get(u), c = o == null ? void 0 : o.v;
          if (o !== void 0 && c !== m)
            return {
              enumerable: !0,
              configurable: !0,
              value: c,
              writable: !0
            };
        }
        return a;
      },
      has(l, u) {
        var c;
        if (u === xt)
          return !0;
        var a = r.get(u), _ = a !== void 0 && a.v !== m || Reflect.has(l, u);
        if (a !== void 0 || d !== null && (!_ || (c = J(l, u)) != null && c.writable)) {
          a === void 0 && (a = f(() => /* @__PURE__ */ F(_ ? W(l[u]) : m)), r.set(u, a));
          var o = A(a);
          if (o === m)
            return !1;
        }
        return _;
      },
      set(l, u, a, _) {
        var Q;
        var o = r.get(u), c = u in l;
        if (n && u === "length")
          for (var v = a; v < /** @type {Source<number>} */
          o.v; v += 1) {
            var $ = r.get(v + "");
            $ !== void 0 ? k($, m) : v in l && ($ = f(() => /* @__PURE__ */ F(m)), r.set(v + "", $));
          }
        o === void 0 ? (!c || (Q = J(l, u)) != null && Q.writable) && (o = f(() => /* @__PURE__ */ F(void 0)), k(
          o,
          f(() => W(a))
        ), r.set(u, o)) : (c = o.v !== m, k(
          o,
          f(() => W(a))
        ));
        var g = Reflect.getOwnPropertyDescriptor(l, u);
        if (g != null && g.set && g.set.call(_, a), !c) {
          if (n && typeof u == "string") {
            var et = (
              /** @type {Source<number>} */
              r.get("length")
            ), z = Number(u);
            Number.isInteger(z) && z >= et.v && k(et, z + 1);
          }
          Bt(s);
        }
        return !0;
      },
      ownKeys(l) {
        A(s);
        var u = Reflect.ownKeys(l).filter((o) => {
          var c = r.get(o);
          return c === void 0 || c.v !== m;
        });
        for (var [a, _] of r)
          _.v !== m && !(a in l) && u.push(a);
        return u;
      },
      setPrototypeOf() {
        Xe();
      }
    }
  );
}
function Bt(t, e = 1) {
  k(t, t.v + e);
}
var Ht, ie, le, ue;
function Ot() {
  if (Ht === void 0) {
    Ht = window, ie = /Firefox/.test(navigator.userAgent);
    var t = Element.prototype, e = Node.prototype, r = Text.prototype;
    le = J(e, "firstChild").get, ue = J(e, "nextSibling").get, qt(t) && (t.__click = void 0, t.__className = void 0, t.__attributes = null, t.__style = void 0, t.__e = void 0), qt(r) && (r.__t = void 0);
  }
}
function rr(t = "") {
  return document.createTextNode(t);
}
// @__NO_SIDE_EFFECTS__
function fe(t) {
  return le.call(t);
}
// @__NO_SIDE_EFFECTS__
function Pt(t) {
  return ue.call(t);
}
function nr(t) {
  t.textContent = "";
}
function ae(t) {
  return t === this.v;
}
function sr(t, e) {
  return t != t ? e == e : t !== e || t !== null && typeof t == "object" || typeof t == "function";
}
function ir(t) {
  return !sr(t, this.v);
}
// @__NO_SIDE_EFFECTS__
function oe(t) {
  var e = S | L, r = h !== null && (h.f & S) !== 0 ? (
    /** @type {Derived} */
    h
  ) : null;
  return d === null || r !== null && (r.f & T) !== 0 ? e |= T : d.f |= re, {
    ctx: P,
    deps: null,
    effects: null,
    equals: ae,
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
function ce(t) {
  var e = t.effects;
  if (e !== null) {
    t.effects = null;
    for (var r = 0; r < e.length; r += 1)
      j(
        /** @type {Effect} */
        e[r]
      );
  }
}
function lr(t) {
  for (var e = t.parent; e !== null; ) {
    if ((e.f & S) === 0)
      return (
        /** @type {Effect} */
        e
      );
    e = e.parent;
  }
  return null;
}
function _e(t) {
  var e, r = d;
  Z(lr(t));
  try {
    ce(t), e = me(t);
  } finally {
    Z(r);
  }
  return e;
}
function ve(t) {
  var e = _e(t), r = (M || (t.f & T) !== 0) && t.deps !== null ? V : N;
  D(t, r), t.equals(e) || (t.v = e, t.wv = pe());
}
function ur(t, e) {
  var r = e.last;
  r === null ? e.last = e.first = t : (r.next = t, t.prev = r, e.last = t);
}
function K(t, e, r, n = !0) {
  var s = d, i = {
    ctx: P,
    deps: null,
    nodes_start: null,
    nodes_end: null,
    f: t | L,
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
      It(i), i.f |= Ve;
    } catch (u) {
      throw j(i), u;
    }
  else e !== null && Lt(i);
  var f = r && i.deps === null && i.first === null && i.nodes_start === null && i.teardown === null && (i.f & (re | ot)) === 0;
  if (!f && n && (s !== null && ur(i, s), h !== null && (h.f & S) !== 0)) {
    var l = (
      /** @type {Derived} */
      h
    );
    (l.effects ?? (l.effects = [])).push(i);
  }
  return i;
}
function fr(t) {
  const e = K(gt, null, !1);
  return D(e, N), e.teardown = t, e;
}
function ar(t) {
  const e = K(U, t, !0);
  return () => {
    j(e);
  };
}
function or(t) {
  const e = K(U, t, !0);
  return (r = {}) => new Promise((n) => {
    r.outro ? gr(e, () => {
      j(e), n(void 0);
    }) : (j(e), n(void 0));
  });
}
function cr(t) {
  return K(ee, t, !1);
}
function _r(t) {
  return K(gt, t, !0);
}
function vr(t, e = [], r = oe) {
  const n = e.map(r);
  return hr(() => t(...n.map(A)));
}
function hr(t, e = 0) {
  return K(gt | Dt | e, t, !0);
}
function dr(t, e = !0) {
  return K(gt | Y, t, !0, e);
}
function he(t) {
  var e = t.teardown;
  if (e !== null) {
    const r = pt, n = h;
    Ut(!0), q(null);
    try {
      e.call(null);
    } finally {
      Ut(r), q(n);
    }
  }
}
function de(t, e = !1) {
  var r = t.first;
  for (t.first = t.last = null; r !== null; ) {
    var n = r.next;
    (r.f & U) !== 0 ? r.parent = null : j(r, e), r = n;
  }
}
function $r(t) {
  for (var e = t.first; e !== null; ) {
    var r = e.next;
    (e.f & Y) === 0 && j(e), e = r;
  }
}
function j(t, e = !0) {
  var r = !1;
  if ((e || (t.f & Ge) !== 0) && t.nodes_start !== null) {
    for (var n = t.nodes_start, s = t.nodes_end; n !== null; ) {
      var i = n === s ? null : (
        /** @type {TemplateNode} */
        /* @__PURE__ */ Pt(n)
      );
      n.remove(), n = i;
    }
    r = !0;
  }
  de(t, e && !r), $t(t, 0), D(t, wt);
  var f = t.transitions;
  if (f !== null)
    for (const u of f)
      u.stop();
  he(t);
  var l = t.parent;
  l !== null && l.first !== null && $e(t), t.next = t.prev = t.teardown = t.ctx = t.deps = t.fn = t.nodes_start = t.nodes_end = null;
}
function $e(t) {
  var e = t.parent, r = t.prev, n = t.next;
  r !== null && (r.next = n), n !== null && (n.prev = r), e !== null && (e.first === t && (e.first = n), e.last === t && (e.last = r));
}
function gr(t, e) {
  var r = [];
  ge(t, r, !0), wr(r, () => {
    j(t), e && e();
  });
}
function wr(t, e) {
  var r = t.length;
  if (r > 0) {
    var n = () => --r || e();
    for (var s of t)
      s.out(n);
  } else
    e();
}
function ge(t, e, r) {
  if ((t.f & _t) === 0) {
    if (t.f ^= _t, t.transitions !== null)
      for (const f of t.transitions)
        (f.is_global || r) && e.push(f);
    for (var n = t.first; n !== null; ) {
      var s = n.next, i = (n.f & Ke) !== 0 || (n.f & Y) !== 0;
      ge(n, e, i ? r : !1), n = s;
    }
  }
}
let At = [], St = [];
function pr() {
  var t = At;
  At = [], te(t);
}
function yr() {
  var t = St;
  St = [], te(t);
}
function Yt() {
  At.length > 0 && pr(), St.length > 0 && yr();
}
let lt = !1, vt = !1, ht = null, B = !1, pt = !1;
function Ut(t) {
  pt = t;
}
let X = [];
let h = null, R = !1;
function q(t) {
  h = t;
}
let d = null;
function Z(t) {
  d = t;
}
let p = null;
function mr(t) {
  h !== null && h.f & Tt && (p === null ? p = [t] : p.push(t));
}
let w = null, E = 0, b = null;
function Er(t) {
  b = t;
}
let we = 1, dt = 0, M = !1;
function pe() {
  return ++we;
}
function yt(t) {
  var o;
  var e = t.f;
  if ((e & L) !== 0)
    return !0;
  if ((e & V) !== 0) {
    var r = t.deps, n = (e & T) !== 0;
    if (r !== null) {
      var s, i, f = (e & ct) !== 0, l = n && d !== null && !M, u = r.length;
      if (f || l) {
        var a = (
          /** @type {Derived} */
          t
        ), _ = a.parent;
        for (s = 0; s < u; s++)
          i = r[s], (f || !((o = i == null ? void 0 : i.reactions) != null && o.includes(a))) && (i.reactions ?? (i.reactions = [])).push(a);
        f && (a.f ^= ct), l && _ !== null && (_.f & T) === 0 && (a.f ^= T);
      }
      for (s = 0; s < u; s++)
        if (i = r[s], yt(
          /** @type {Derived} */
          i
        ) && ve(
          /** @type {Derived} */
          i
        ), i.wv > t.wv)
          return !0;
    }
    (!n || d !== null && !M) && D(t, N);
  }
  return !1;
}
function br(t, e) {
  for (var r = e; r !== null; ) {
    if ((r.f & ot) !== 0)
      try {
        r.fn(t);
        return;
      } catch {
        r.f ^= ot;
      }
    r = r.parent;
  }
  throw lt = !1, t;
}
function xr(t) {
  return (t.f & wt) === 0 && (t.parent === null || (t.parent.f & ot) === 0);
}
function mt(t, e, r, n) {
  if (lt) {
    if (r === null && (lt = !1), xr(e))
      throw t;
    return;
  }
  r !== null && (lt = !0);
  {
    br(t, e);
    return;
  }
}
function ye(t, e, r = !0) {
  var n = t.reactions;
  if (n !== null)
    for (var s = 0; s < n.length; s++) {
      var i = n[s];
      p != null && p.includes(t) || ((i.f & S) !== 0 ? ye(
        /** @type {Derived} */
        i,
        e,
        !1
      ) : e === i && (r ? D(i, L) : (i.f & N) !== 0 && D(i, V), Lt(
        /** @type {Effect} */
        i
      )));
    }
}
function me(t) {
  var v;
  var e = w, r = E, n = b, s = h, i = M, f = p, l = P, u = R, a = t.f;
  w = /** @type {null | Value[]} */
  null, E = 0, b = null, M = (a & T) !== 0 && (R || !B || h === null), h = (a & (Y | U)) === 0 ? t : null, p = null, Vt(t.ctx), R = !1, dt++, t.f |= Tt;
  try {
    var _ = (
      /** @type {Function} */
      (0, t.fn)()
    ), o = t.deps;
    if (w !== null) {
      var c;
      if ($t(t, E), o !== null && E > 0)
        for (o.length = E + w.length, c = 0; c < w.length; c++)
          o[E + c] = w[c];
      else
        t.deps = o = w;
      if (!M)
        for (c = E; c < o.length; c++)
          ((v = o[c]).reactions ?? (v.reactions = [])).push(t);
    } else o !== null && E < o.length && ($t(t, E), o.length = E);
    if (Ae() && b !== null && !R && o !== null && (t.f & (S | V | L)) === 0)
      for (c = 0; c < /** @type {Source[]} */
      b.length; c++)
        ye(
          b[c],
          /** @type {Effect} */
          t
        );
    return s !== t && (dt++, b !== null && (n === null ? n = b : n.push(.../** @type {Source[]} */
    b))), _;
  } finally {
    w = e, E = r, b = n, h = s, M = i, p = f, Vt(l), R = u, t.f ^= Tt;
  }
}
function Tr(t, e) {
  let r = e.reactions;
  if (r !== null) {
    var n = qe.call(r, t);
    if (n !== -1) {
      var s = r.length - 1;
      s === 0 ? r = e.reactions = null : (r[n] = r[s], r.pop());
    }
  }
  r === null && (e.f & S) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (w === null || !w.includes(e)) && (D(e, V), (e.f & (T | ct)) === 0 && (e.f ^= ct), ce(
    /** @type {Derived} **/
    e
  ), $t(
    /** @type {Derived} **/
    e,
    0
  ));
}
function $t(t, e) {
  var r = t.deps;
  if (r !== null)
    for (var n = e; n < r.length; n++)
      Tr(t, r[n]);
}
function It(t) {
  var e = t.f;
  if ((e & wt) === 0) {
    D(t, N);
    var r = d, n = P, s = B;
    d = t, B = !0;
    try {
      (e & Dt) !== 0 ? $r(t) : de(t), he(t);
      var i = me(t);
      t.teardown = typeof i == "function" ? i : null, t.wv = we;
      var f = t.deps, l;
      jt && er && t.f & L;
    } catch (u) {
      mt(u, t, r, n || t.ctx);
    } finally {
      B = s, d = r;
    }
  }
}
function Nr() {
  try {
    Ze();
  } catch (t) {
    if (ht !== null)
      mt(t, ht, null);
    else
      throw t;
  }
}
function Ee() {
  var t = B;
  try {
    var e = 0;
    for (B = !0; X.length > 0; ) {
      e++ > 1e3 && Nr();
      var r = X, n = r.length;
      X = [];
      for (var s = 0; s < n; s++) {
        var i = Ar(r[s]);
        Or(i);
      }
      tt.clear();
    }
  } finally {
    vt = !1, B = t, ht = null;
  }
}
function Or(t) {
  var e = t.length;
  if (e !== 0)
    for (var r = 0; r < e; r++) {
      var n = t[r];
      if ((n.f & (wt | _t)) === 0)
        try {
          yt(n) && (It(n), n.deps === null && n.first === null && n.nodes_start === null && (n.teardown === null ? $e(n) : n.fn = null));
        } catch (s) {
          mt(s, n, null, n.ctx);
        }
    }
}
function Lt(t) {
  vt || (vt = !0, queueMicrotask(Ee));
  for (var e = ht = t; e.parent !== null; ) {
    e = e.parent;
    var r = e.f;
    if ((r & (U | Y)) !== 0) {
      if ((r & N) === 0) return;
      e.f ^= N;
    }
  }
  X.push(e);
}
function Ar(t) {
  for (var e = [], r = t; r !== null; ) {
    var n = r.f, s = (n & (Y | U)) !== 0, i = s && (n & N) !== 0;
    if (!i && (n & _t) === 0) {
      if ((n & ee) !== 0)
        e.push(r);
      else if (s)
        r.f ^= N;
      else {
        var f = h;
        try {
          h = r, yt(r) && It(r);
        } catch (a) {
          mt(a, r, null, r.ctx);
        } finally {
          h = f;
        }
      }
      var l = r.first;
      if (l !== null) {
        r = l;
        continue;
      }
    }
    var u = r.parent;
    for (r = r.next; r === null && u !== null; )
      r = u.next, u = u.parent;
  }
  return e;
}
function kt(t) {
  var e;
  for (Yt(); X.length > 0; )
    vt = !0, Ee(), Yt();
  return (
    /** @type {T} */
    e
  );
}
function A(t) {
  var e = t.f, r = (e & S) !== 0;
  if (h !== null && !R) {
    if (!(p != null && p.includes(t))) {
      var n = h.deps;
      t.rv < dt && (t.rv = dt, w === null && n !== null && n[E] === t ? E++ : w === null ? w = [t] : (!M || !w.includes(t)) && w.push(t));
    }
  } else if (r && /** @type {Derived} */
  t.deps === null && /** @type {Derived} */
  t.effects === null) {
    var s = (
      /** @type {Derived} */
      t
    ), i = s.parent;
    i !== null && (i.f & T) === 0 && (s.f ^= T);
  }
  return r && (s = /** @type {Derived} */
  t, yt(s) && ve(s)), pt && tt.has(t) ? tt.get(t) : t.v;
}
function Sr(t) {
  var e = R;
  try {
    return R = !0, t();
  } finally {
    R = e;
  }
}
const kr = -7169;
function D(t, e) {
  t.f = t.f & kr | e;
}
const tt = /* @__PURE__ */ new Map();
function be(t, e) {
  var r = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: t,
    reactions: null,
    equals: ae,
    rv: 0,
    wv: 0
  };
  return r;
}
// @__NO_SIDE_EFFECTS__
function F(t, e) {
  const r = be(t);
  return mr(r), r;
}
// @__NO_SIDE_EFFECTS__
function xe(t, e = !1) {
  const r = be(t);
  return e || (r.equals = ir), r;
}
function k(t, e, r = !1) {
  h !== null && !R && Ae() && (h.f & (S | Dt)) !== 0 && !(p != null && p.includes(t)) && tr();
  let n = r ? W(e) : e;
  return Rr(t, n);
}
function Rr(t, e) {
  if (!t.equals(e)) {
    var r = t.v;
    pt ? tt.set(t, e) : tt.set(t, r), t.v = e, (t.f & S) !== 0 && ((t.f & L) !== 0 && _e(
      /** @type {Derived} */
      t
    ), D(t, (t.f & T) === 0 ? N : V)), t.wv = pe(), Te(t, L), d !== null && (d.f & N) !== 0 && (d.f & (Y | U)) === 0 && (b === null ? Er([t]) : b.push(t));
  }
  return e;
}
function Te(t, e) {
  var r = t.reactions;
  if (r !== null)
    for (var n = r.length, s = 0; s < n; s++) {
      var i = r[s], f = i.f;
      (f & L) === 0 && (D(i, e), (f & (N | T)) !== 0 && ((f & S) !== 0 ? Te(
        /** @type {Derived} */
        i,
        V
      ) : Lt(
        /** @type {Effect} */
        i
      )));
    }
}
let P = null;
function Vt(t) {
  P = t;
}
function Ne(t, e = !1, r) {
  var n = P = {
    p: P,
    c: null,
    d: !1,
    e: null,
    m: !1,
    s: t,
    x: null,
    l: null
  };
  fr(() => {
    n.d = !0;
  });
}
function Oe(t) {
  const e = P;
  if (e !== null) {
    t !== void 0 && (e.x = t);
    const f = e.e;
    if (f !== null) {
      var r = d, n = h;
      e.e = null;
      try {
        for (var s = 0; s < f.length; s++) {
          var i = f[s];
          Z(i.effect), q(i.reaction), cr(i.fn);
        }
      } finally {
        Z(r), q(n);
      }
    }
    P = e.p, e.m = !0;
  }
  return t || /** @type {T} */
  {};
}
function Ae() {
  return !0;
}
const Cr = ["touchstart", "touchmove"];
function Dr(t) {
  return Cr.includes(t);
}
const Pr = /* @__PURE__ */ new Set(), Kt = /* @__PURE__ */ new Set();
function st(t) {
  var Q;
  var e = this, r = (
    /** @type {Node} */
    e.ownerDocument
  ), n = t.type, s = ((Q = t.composedPath) == null ? void 0 : Q.call(t)) || [], i = (
    /** @type {null | Element} */
    s[0] || t.target
  ), f = 0, l = t.__root;
  if (l) {
    var u = s.indexOf(l);
    if (u !== -1 && (e === document || e === /** @type {any} */
    window)) {
      t.__root = e;
      return;
    }
    var a = s.indexOf(e);
    if (a === -1)
      return;
    u <= a && (f = u);
  }
  if (i = /** @type {Element} */
  s[f] || t.target, i !== e) {
    at(t, "currentTarget", {
      configurable: !0,
      get() {
        return i || r;
      }
    });
    var _ = h, o = d;
    q(null), Z(null);
    try {
      for (var c, v = []; i !== null; ) {
        var $ = i.assignedSlot || i.parentNode || /** @type {any} */
        i.host || null;
        try {
          var g = i["__" + n];
          if (g != null && (!/** @type {any} */
          i.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          t.target === i))
            if (Qt(g)) {
              var [et, ...z] = g;
              et.apply(i, [t, ...z]);
            } else
              g.call(i, t);
        } catch (rt) {
          c ? v.push(rt) : c = rt;
        }
        if (t.cancelBubble || $ === e || $ === null)
          break;
        i = $;
      }
      if (c) {
        for (let rt of v)
          queueMicrotask(() => {
            throw rt;
          });
        throw c;
      }
    } finally {
      t.__root = e, delete t.currentTarget, q(_), Z(o);
    }
  }
}
function Ir(t) {
  var e = document.createElement("template");
  return e.innerHTML = t, e.content;
}
function Rt(t, e) {
  var r = (
    /** @type {Effect} */
    d
  );
  r.nodes_start === null && (r.nodes_start = t, r.nodes_end = e);
}
// @__NO_SIDE_EFFECTS__
function Lr(t, e) {
  var r = (e & Le) !== 0, n, s = !t.startsWith("<!>");
  return () => {
    if (H)
      return Rt(C, null), C;
    n === void 0 && (n = Ir(s ? t : "<!>" + t), n = /** @type {Node} */
    /* @__PURE__ */ fe(n));
    var i = (
      /** @type {TemplateNode} */
      r || ie ? document.importNode(n, !0) : n.cloneNode(!0)
    );
    return Rt(i, i), i;
  };
}
function Se(t, e) {
  if (H) {
    d.nodes_end = C, se();
    return;
  }
  t !== null && t.before(
    /** @type {Node} */
    e
  );
}
function ke(t, e) {
  return Re(t, e);
}
function Fr(t, e) {
  Ot(), e.intro = e.intro ?? !1;
  const r = e.target, n = H, s = C;
  try {
    for (var i = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ fe(r)
    ); i && (i.nodeType !== 8 || /** @type {Comment} */
    i.data !== Fe); )
      i = /** @type {TemplateNode} */
      /* @__PURE__ */ Pt(i);
    if (!i)
      throw it;
    nt(!0), Nt(
      /** @type {Comment} */
      i
    ), se();
    const f = Re(t, { ...e, anchor: i });
    if (C === null || C.nodeType !== 8 || /** @type {Comment} */
    C.data !== Me)
      throw ne(), it;
    return nt(!1), /**  @type {Exports} */
    f;
  } catch (f) {
    if (f === it)
      return e.recover === !1 && ze(), Ot(), nr(r), nt(!1), ke(t, e);
    throw f;
  } finally {
    nt(n), Nt(s);
  }
}
const G = /* @__PURE__ */ new Map();
function Re(t, { target: e, anchor: r, props: n = {}, events: s, context: i, intro: f = !0 }) {
  Ot();
  var l = /* @__PURE__ */ new Set(), u = (o) => {
    for (var c = 0; c < o.length; c++) {
      var v = o[c];
      if (!l.has(v)) {
        l.add(v);
        var $ = Dr(v);
        e.addEventListener(v, st, { passive: $ });
        var g = G.get(v);
        g === void 0 ? (document.addEventListener(v, st, { passive: $ }), G.set(v, 1)) : G.set(v, g + 1);
      }
    }
  };
  u(Be(Pr)), Kt.add(u);
  var a = void 0, _ = or(() => {
    var o = r ?? e.appendChild(rr());
    return dr(() => {
      if (i) {
        Ne({});
        var c = (
          /** @type {ComponentContext} */
          P
        );
        c.c = i;
      }
      s && (n.$$events = s), H && Rt(
        /** @type {TemplateNode} */
        o,
        null
      ), a = t(o, n) || {}, H && (d.nodes_end = C), i && Oe();
    }), () => {
      var $;
      for (var c of l) {
        e.removeEventListener(c, st);
        var v = (
          /** @type {number} */
          G.get(c)
        );
        --v === 0 ? (document.removeEventListener(c, st), G.delete(c)) : G.set(c, v);
      }
      Kt.delete(u), o !== r && (($ = o.parentNode) == null || $.removeChild(o));
    };
  });
  return Ct.set(a, _), a;
}
let Ct = /* @__PURE__ */ new WeakMap();
function Mr(t, e) {
  const r = Ct.get(t);
  return r ? (Ct.delete(t), r(e)) : Promise.resolve();
}
const jr = Symbol("is custom element"), qr = Symbol("is html");
function Gt(t, e, r, n) {
  var s = Br(t);
  H && (s[e] = t.getAttribute(e), e === "src" || e === "srcset" || e === "href" && t.nodeName === "LINK") || s[e] !== (s[e] = r) && (e === "loading" && (t[Je] = r), r == null ? t.removeAttribute(e) : typeof r != "string" && Hr(t).includes(e) ? t[e] = r : t.setAttribute(e, r));
}
function Br(t) {
  return (
    /** @type {Record<string | symbol, unknown>} **/
    // @ts-expect-error
    t.__attributes ?? (t.__attributes = {
      [jr]: t.nodeName.includes("-"),
      [qr]: t.namespaceURI === je
    })
  );
}
var Wt = /* @__PURE__ */ new Map();
function Hr(t) {
  var e = Wt.get(t.nodeName);
  if (e) return e;
  Wt.set(t.nodeName, e = []);
  for (var r, n = t, s = Element.prototype; s !== n; ) {
    r = He(n);
    for (var i in r)
      r[i].set && e.push(i);
    n = Xt(n);
  }
  return e;
}
function Jt(t) {
  var e;
  return ((e = t.ctx) == null ? void 0 : e.d) ?? !1;
}
function Zt(t, e, r, n) {
  var s;
  s = /** @type {V} */
  t[e];
  var i = (
    /** @type {V} */
    n
  ), f = !0, l = !1, u = () => (l = !0, f && (f = !1, i = /** @type {V} */
  n), i), a;
  a = () => {
    var v = (
      /** @type {V} */
      t[e]
    );
    return v === void 0 ? u() : (f = !0, l = !1, v);
  };
  var _ = !1, o = /* @__PURE__ */ xe(s), c = /* @__PURE__ */ oe(() => {
    var v = a(), $ = A(o);
    return _ ? (_ = !1, $) : o.v = v;
  });
  return function(v, $) {
    if (arguments.length > 0) {
      const g = $ ? A(c) : v;
      if (!c.equals(g)) {
        if (_ = !0, k(o, g), l && i !== void 0 && (i = g), Jt(c))
          return v;
        Sr(() => A(c));
      }
      return v;
    }
    return Jt(c) ? c.v : A(c);
  };
}
function Yr(t) {
  return new Ur(t);
}
var I, x;
class Ur {
  /**
   * @param {ComponentConstructorOptions & {
   *  component: any;
   * }} options
   */
  constructor(e) {
    /** @type {any} */
    Et(this, I);
    /** @type {Record<string, any>} */
    Et(this, x);
    var i;
    var r = /* @__PURE__ */ new Map(), n = (f, l) => {
      var u = /* @__PURE__ */ xe(l);
      return r.set(f, u), u;
    };
    const s = new Proxy(
      { ...e.props || {}, $$events: {} },
      {
        get(f, l) {
          return A(r.get(l) ?? n(l, Reflect.get(f, l)));
        },
        has(f, l) {
          return l === We ? !0 : (A(r.get(l) ?? n(l, Reflect.get(f, l))), Reflect.has(f, l));
        },
        set(f, l, u) {
          return k(r.get(l) ?? n(l, u), u), Reflect.set(f, l, u);
        }
      }
    );
    bt(this, x, (e.hydrate ? Fr : ke)(e.component, {
      target: e.target,
      anchor: e.anchor,
      props: s,
      context: e.context,
      intro: e.intro ?? !1,
      recover: e.recover
    })), (!((i = e == null ? void 0 : e.props) != null && i.$$host) || e.sync === !1) && kt(), bt(this, I, s.$$events);
    for (const f of Object.keys(y(this, x)))
      f === "$set" || f === "$destroy" || f === "$on" || at(this, f, {
        get() {
          return y(this, x)[f];
        },
        /** @param {any} value */
        set(l) {
          y(this, x)[f] = l;
        },
        enumerable: !0
      });
    y(this, x).$set = /** @param {Record<string, any>} next */
    (f) => {
      Object.assign(s, f);
    }, y(this, x).$destroy = () => {
      Mr(y(this, x));
    };
  }
  /** @param {Record<string, any>} props */
  $set(e) {
    y(this, x).$set(e);
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
    y(this, x).$destroy();
  }
}
I = new WeakMap(), x = new WeakMap();
let Ce;
typeof HTMLElement == "function" && (Ce = class extends HTMLElement {
  /**
   * @param {*} $$componentCtor
   * @param {*} $$slots
   * @param {*} use_shadow_dom
   */
  constructor(e, r, n) {
    super();
    /** The Svelte component constructor */
    O(this, "$$ctor");
    /** Slots */
    O(this, "$$s");
    /** @type {any} The Svelte component instance */
    O(this, "$$c");
    /** Whether or not the custom element is connected */
    O(this, "$$cn", !1);
    /** @type {Record<string, any>} Component props data */
    O(this, "$$d", {});
    /** `true` if currently in the process of reflecting component props back to attributes */
    O(this, "$$r", !1);
    /** @type {Record<string, CustomElementPropDefinition>} Props definition (name, reflected, type etc) */
    O(this, "$$p_d", {});
    /** @type {Record<string, EventListenerOrEventListenerObject[]>} Event listeners */
    O(this, "$$l", {});
    /** @type {Map<EventListenerOrEventListenerObject, Function>} Event listener unsubscribe functions */
    O(this, "$$l_u", /* @__PURE__ */ new Map());
    /** @type {any} The managed render effect for reflecting attributes */
    O(this, "$$me");
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
          s !== "default" && (f.name = s), Se(i, f);
        };
      };
      if (await Promise.resolve(), !this.$$cn || this.$$c)
        return;
      const r = {}, n = Vr(this);
      for (const s of this.$$s)
        s in n && (s === "default" && !this.$$d.children ? (this.$$d.children = e(s), r.default = !0) : r[s] = e(s));
      for (const s of this.attributes) {
        const i = this.$$g_p(s.name);
        i in this.$$d || (this.$$d[i] = ut(i, s.value, this.$$p_d, "toProp"));
      }
      for (const s in this.$$p_d)
        !(s in this.$$d) && this[s] !== void 0 && (this.$$d[s] = this[s], delete this[s]);
      this.$$c = Yr({
        component: this.$$ctor,
        target: this.shadowRoot || this,
        props: {
          ...this.$$d,
          $$slots: r,
          $$host: this
        }
      }), this.$$me = ar(() => {
        _r(() => {
          var s;
          this.$$r = !0;
          for (const i of ft(this.$$c)) {
            if (!((s = this.$$p_d[i]) != null && s.reflect)) continue;
            this.$$d[i] = this.$$c[i];
            const f = ut(
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
    this.$$r || (e = this.$$g_p(e), this.$$d[e] = ut(e, n, this.$$p_d, "toProp"), (s = this.$$c) == null || s.$set({ [e]: this.$$d[e] }));
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
    return ft(this.$$p_d).find(
      (r) => this.$$p_d[r].attribute === e || !this.$$p_d[r].attribute && r.toLowerCase() === e
    ) || e;
  }
});
function ut(t, e, r, n) {
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
function Vr(t) {
  const e = {};
  return t.childNodes.forEach((r) => {
    e[
      /** @type {Element} node */
      r.slot || "default"
    ] = !0;
  }), e;
}
function Kr(t, e, r, n, s, i) {
  let f = class extends Ce {
    constructor() {
      super(t, r, s), this.$$p_d = e;
    }
    static get observedAttributes() {
      return ft(e).map(
        (l) => (e[l].attribute || l).toLowerCase()
      );
    }
  };
  return ft(e).forEach((l) => {
    at(f.prototype, l, {
      get() {
        return this.$$c && l in this.$$c ? this.$$c[l] : this.$$d[l];
      },
      set(u) {
        var o;
        u = ut(l, u, e), this.$$d[l] = u;
        var a = this.$$c;
        if (a) {
          var _ = (o = J(a, l)) == null ? void 0 : o.get;
          _ ? a[l] = u : a.$set({ [l]: u });
        }
      }
    });
  }), n.forEach((l) => {
    at(f.prototype, l, {
      get() {
        var u;
        return (u = this.$$c) == null ? void 0 : u[l];
      }
    });
  }), t.element = /** @type {any} */
  f, f;
}
var Gr = /* @__PURE__ */ Lr("<iframe></iframe>");
function Wr(t, e) {
  Ne(e, !0);
  const r = Zt(e, "title"), n = Zt(e, "url");
  var s = Gr();
  return vr(() => {
    Gt(s, "title", r()), Gt(s, "src", n());
  }), Se(t, s), Oe({
    get title() {
      return r();
    },
    set title(i) {
      r(i), kt();
    },
    get url() {
      return n();
    },
    set url(i) {
      n(i), kt();
    }
  });
}
customElements.define("demo-form", Kr(Wr, { title: {}, url: {} }, [], [], !0));
export {
  Wr as default
};
