!(function () {
  try {
    var e =
        "undefined" != typeof globalThis
          ? globalThis
          : "undefined" != typeof global
            ? global
            : "undefined" != typeof window
              ? window
              : "undefined" != typeof self
                ? self
                : {},
      n = new e.Error().stack;
    n &&
      ((e._debugIds || (e._debugIds = {}))[n] =
        "c7f43e61-a6e3-101e-fef8-51439ab8c47d");
  } catch (e) {}
})();
(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
  "object" == typeof document ? document.currentScript : void 0,
  111605,
  (t) => {
    "use strict";
    let e, r, i, a, n, s, l, o;
    var u,
      h,
      c = t.i(73709),
      d = t.i(533885),
      M = t.i(643315),
      x = t.i(357716),
      g = t.i(259454);
    try {
      var p = window;
      ((p._sentryModuleMetadata = p._sentryModuleMetadata || {}),
        (p._sentryModuleMetadata[new p.Error().stack] = Object.assign(
          {},
          p._sentryModuleMetadata[new p.Error().stack],
          { "_sentryBundlerPluginAppKey:website": !0 },
        )));
    } catch (t) {}
    let b = [
        {
          label: "Lifecycle",
          states: [
            "sleeping",
            "waking",
            "idle",
            "listening",
            "thinking",
            "searching",
            "working",
          ],
        },
        {
          label: "Reactions",
          states: [
            "excited",
            "surprised",
            "suspicious",
            "angry",
            "drowsy",
            "happy",
            "curious",
            "confused",
            "bored",
            "proud",
            "shy",
            "sad",
            "laughing",
            "scared",
            "playful",
            "celebrate",
          ],
        },
        { label: "Agent morphs", states: ["orbit", "radar", "progress"] },
        {
          label: "Product lifecycle",
          states: [
            "spawning",
            "humming",
            "loading",
            "dictating",
            "writing",
            "sending",
            "receiving",
            "uploading",
            "notifying",
            "alerting",
            "dragging",
            "bouncing",
            "powering-down",
          ],
        },
      ],
      f = b.flatMap((t) => t.states),
      y = new Set(["progress", "spawning"]),
      A = { progress: 2500, spawning: 2e3 },
      m = {
        sleeping: [13, 22, 4],
        waking: [13],
        idle: [0, 8],
        listening: [10, 1, 19],
        thinking: [8, 16, 14, 17, 5],
        searching: [15, 9, 3, 20, 12, 18],
        working: [7, 16, 11, 10],
        excited: [2, 17, 21, 3, 11],
        surprised: [3, 21],
        suspicious: [14, 5, 23],
        angry: [7, 16],
        drowsy: [4, 22, 13],
        happy: [2, 11, 17, 19],
        curious: [3, 21, 0, 15],
        confused: [14, 5, 8],
        bored: [4, 22, 0],
        proud: [15, 8, 2],
        shy: [0, 24, 13],
        sad: [4, 13, 22],
        laughing: [2, 11, 17],
        scared: [3, 21],
        playful: [2, 17, 11, 8],
        celebrate: [2, 8, 17],
        orbit: [0, 8],
        radar: [0, 8],
        progress: [0, 8],
        spawning: [3, 0],
        humming: [0, 8],
        loading: [0, 8],
        dictating: [10, 1, 19],
        sending: [0, 8],
        receiving: [19, 0, 8],
        uploading: [15, 9, 8],
        writing: [15, 9],
        notifying: [3, 21, 0],
        alerting: [3, 21],
        bouncing: [2, 17],
        dragging: [3, 15, 0],
        "powering-down": [13, 22],
      },
      E = {
        sleeping: [6e3, 1e4],
        waking: [800, 800],
        idle: [9e3, 16e3],
        listening: [2800, 5e3],
        thinking: [2e3, 3600],
        searching: [1e3, 1800],
        working: [1800, 3200],
        excited: [1100, 2e3],
        surprised: [2500, 4e3],
        suspicious: [2600, 4500],
        angry: [2200, 3800],
        drowsy: [4e3, 8e3],
        happy: [2500, 4500],
        curious: [1800, 3200],
        confused: [2200, 3800],
        bored: [3500, 6e3],
        proud: [3500, 6e3],
        shy: [3e3, 5500],
        sad: [4e3, 7e3],
        laughing: [1200, 2400],
        scared: [900, 1800],
        playful: [1500, 3e3],
        celebrate: [1400, 2600],
        orbit: [4e3, 8e3],
        radar: [4e3, 8e3],
        progress: [4e3, 8e3],
        spawning: [1200, 1200],
        humming: [5e3, 9e3],
        loading: [6e3, 1e4],
        dictating: [4e3, 8e3],
        sending: [4e3, 8e3],
        receiving: [4e3, 8e3],
        uploading: [4e3, 8e3],
        writing: [4e3, 8e3],
        notifying: [1500, 2600],
        alerting: [2e3, 3600],
        bouncing: [3e3, 6e3],
        dragging: [1600, 3e3],
        "powering-down": [6e3, 9e3],
      },
      w = {
        sleeping: null,
        waking: null,
        idle: [6e3, 14e3],
        listening: [3e3, 7e3],
        thinking: [3500, 7e3],
        searching: [1600, 4e3],
        working: [2800, 5500],
        excited: [2e3, 4e3],
        surprised: [1800, 3500],
        suspicious: [4500, 8e3],
        angry: [3500, 7e3],
        drowsy: null,
        happy: [2500, 5e3],
        curious: [2500, 5500],
        confused: [2800, 5500],
        bored: [4e3, 8e3],
        proud: [3500, 7e3],
        shy: [3e3, 6e3],
        sad: [4e3, 8e3],
        laughing: [2500, 5e3],
        scared: [1200, 3e3],
        playful: [2e3, 4500],
        celebrate: [2200, 4500],
        orbit: null,
        radar: null,
        progress: null,
        spawning: null,
        humming: [4e3, 8e3],
        loading: null,
        dictating: null,
        sending: null,
        receiving: null,
        uploading: null,
        writing: null,
        notifying: [2e3, 4e3],
        alerting: null,
        bouncing: null,
        dragging: [2200, 4500],
        "powering-down": null,
      },
      _ = new Set(["happy", "excited", "proud"]),
      F = new Set(["playful"]);
    try {
      var k = window;
      ((k._sentryModuleMetadata = k._sentryModuleMetadata || {}),
        (k._sentryModuleMetadata[new k.Error().stack] = Object.assign(
          {},
          k._sentryModuleMetadata[new k.Error().stack],
          { "_sentryBundlerPluginAppKey:website": !0 },
        )));
    } catch (t) {}
    let v = (t) => ({ x: t, v: 0, t: t }),
      C = (t, e, r, i) => {
        ((t.v += (-2 * r * e * t.v - e * e * (t.x - t.t)) * i),
          (t.x += t.v * i),
          (Number.isFinite(t.x) && Number.isFinite(t.v)) ||
            ((t.x = t.t), (t.v = 0)));
      },
      H = 1 / 120,
      $ = (t, e) => t + Math.random() * (e - t),
      D = (t, e, r) => Math.min(r, Math.max(e, t)),
      P = (t) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2),
      S = (t) => 1 - Math.pow(1 - t, 3),
      R = (t) =>
        1 + 2.70158 * Math.pow(t - 1, 3) + 1.70158 * Math.pow(t - 1, 2),
      I = (t) => t * t * (3 - 2 * t);
    try {
      var O = window;
      ((O._sentryModuleMetadata = O._sentryModuleMetadata || {}),
        (O._sentryModuleMetadata[new O.Error().stack] = Object.assign(
          {},
          O._sentryModuleMetadata[new O.Error().stack],
          { "_sentryBundlerPluginAppKey:website": !0 },
        )));
    } catch (t) {}
    let j = ["#f9705c", "#5b95f0", "#3fbe86", "#f5b13f", "#9a72ee", "#35c3bd"],
      N = "http://www.w3.org/2000/svg";
    try {
      var B = window;
      ((B._sentryModuleMetadata = B._sentryModuleMetadata || {}),
        (B._sentryModuleMetadata[new B.Error().stack] = Object.assign(
          {},
          B._sentryModuleMetadata[new B.Error().stack],
          { "_sentryBundlerPluginAppKey:website": !0 },
        )));
    } catch (t) {}
    try {
      var L = window;
      ((L._sentryModuleMetadata = L._sentryModuleMetadata || {}),
        (L._sentryModuleMetadata[new L.Error().stack] = Object.assign(
          {},
          L._sentryModuleMetadata[new L.Error().stack],
          { "_sentryBundlerPluginAppKey:website": !0 },
        )));
    } catch (t) {}
    let T = [
        "dots",
        "orbit",
        "radar",
        "progress",
        "gather",
        "wave",
        "send",
        "receive",
        "dock",
        "ball",
        "whirl",
        "pencil",
        "bang",
        "standby",
      ],
      G = {
        thinking: "dots",
        orbit: "orbit",
        radar: "radar",
        progress: "progress",
        spawning: "gather",
        dictating: "wave",
        sending: "send",
        receiving: "receive",
        uploading: "dock",
        bouncing: "ball",
        loading: "whirl",
        "powering-down": "standby",
        writing: "pencil",
        alerting: "bang",
      },
      z = (0, g.ringOutline)(g.CIRCLE_RING),
      K =
        ((u = g.SHAPES.teardrop.ring),
        (h = g.SHAPES.teardrop.ring.length / 2),
        (i = Math.cos((r = (h / (e = u.length)) * Math.PI * 2))),
        (a = Math.sin(r)),
        Array.from({ length: e }, (t, r) => {
          let [n, s] = u[(((r - h) % e) + e) % e],
            l = n - x.HEAD_C,
            o = s - x.HEAD_C;
          return [x.HEAD_C + l * i - o * a, x.HEAD_C + l * a + o * i];
        })),
      V = (t) => ("pencil" === t ? K : g.CIRCLE_RING),
      X = {
        dots: 1.5,
        orbit: 1.14,
        radar: 1.14,
        progress: 1.32,
        gather: 1.15,
        wave: 1.42,
        send: 1.12,
        receive: 1.12,
        dock: 1.3,
        ball: 1.22,
        whirl: 1.45,
        pencil: 1.18,
        bang: 1.28,
        standby: 1.75,
      },
      U =
        ((n = x.HEAD_C - 44 + 15),
        (s = x.HEAD_C + 44 - 15),
        `M${x.HEAD_C - 15} ${n}A15 15 0 0 1 ${x.HEAD_C + 15} ${n}L${x.HEAD_C + 15} ${s}A15 15 0 0 1 ${x.HEAD_C - 15} ${s}Z`),
      W =
        ((l = x.HEAD_C - 48),
        (o = x.HEAD_C + 48),
        `M${x.HEAD_C - 15} ${l + 15}A15 15 0 0 1 ${x.HEAD_C + 15} ${l + 15}L${x.HEAD_C + 8.5} ${o - 8.5}A8.5 8.5 0 0 1 ${x.HEAD_C - 8.5} ${o - 8.5}Z`),
      q = (t, e, r) => ({
        x: t.x + (e.x - t.x) * r,
        y: t.y + (e.y - t.y) * r,
        sx: t.sx + (e.sx - t.sx) * r,
        sy: t.sy + (e.sy - t.sy) * r,
        eye: t.eye + (e.eye - t.eye) * r,
      }),
      Y = [0, 0],
      Z = [
        { h: 48, d: 0.5 },
        { h: 28, d: 0.382 },
        { h: 14, d: 0.27 },
        { h: 6, d: 0.177 },
      ],
      J = (0, d.forwardRef)(function (
        {
          state: t = "idle",
          shape: e = "blob",
          size: r,
          className: i,
          gazeTarget: a = null,
          mouseInteractive: n = !1,
          flipX: s = !1,
          emphasis: l = !1,
          spinSignal: o = 0,
          badgeColor: u = "var(--gb-badge, #1d9bf0)",
          badgeScale: h = 1,
        },
        p,
      ) {
        let b = (0, d.useId)().replace(/[:]/g, ""),
          f = (0, d.useRef)(null),
          k = (0, d.useRef)(null),
          O = (0, d.useRef)(null),
          B = (0, d.useRef)(null),
          L = (function (t, e = !0) {
            let r = (0, d.useRef)({ x: 0, y: 0 }),
              i = (0, d.useRef)(!1),
              [a, n] = (0, d.useState)(!1),
              [s, l] = (0, d.useState)(!1);
            return (
              (0, d.useEffect)(() => {
                if (!e) return;
                let r = t.current;
                if (!r) return;
                let i = new IntersectionObserver(([t]) => {
                  n(t?.isIntersecting ?? !1);
                });
                return (i.observe(r), () => i.disconnect());
              }, [t, e]),
              (0, d.useEffect)(() => {
                if (!e || !a) return;
                let t = (t) => {
                  ((r.current.x = t.clientX),
                    (r.current.y = t.clientY),
                    i.current || ((i.current = !0), l(!0)));
                };
                return (
                  window.addEventListener("pointermove", t, { passive: !0 }),
                  () => window.removeEventListener("pointermove", t)
                );
              }, [a, e]),
              e && a && s ? r.current : null
            );
          })(f, n),
          K = (0, d.useRef)(a);
        K.current = a ?? L;
        let J = (0, d.useRef)(s);
        J.current = s;
        let Q = (0, d.useRef)(l);
        Q.current = l;
        let tt = (0, d.useRef)(u);
        tt.current = u;
        let te = (0, d.useRef)(h);
        te.current = h;
        let tr = (0, d.useRef)({
          spin: () => {},
          bounce: () => {},
          burst: () => {},
        });
        (0, d.useImperativeHandle)(
          p,
          () => ({
            spin: (t) => tr.current.spin(t),
            bounce: () => tr.current.bounce(),
            burst: () => tr.current.burst(),
          }),
          [],
        );
        let ti = (0, d.useRef)(e);
        ti.current = e;
        let ta = (0, d.useRef)(null),
          tn = (0, d.useRef)(null);
        (0, d.useEffect)(() => {
          o > 0 && tr.current.spin();
        }, [o]);
        let ts = (0, d.useRef)([]),
          tl = (0, d.useRef)([]),
          to = (0, d.useRef)(null),
          tu = (0, d.useRef)([]),
          th = (0, d.useRef)([]),
          tc = (0, d.useRef)([]),
          td = (0, d.useRef)(t),
          tM = (0, d.useRef)(0);
        ((0, d.useEffect)(() => {
          ((td.current = t), (tM.current = performance.now()));
        }, [t]),
          (0, d.useEffect)(() => {
            let t = window.matchMedia(
                "(prefers-reduced-motion: reduce)",
              ).matches,
              e = [M.EXPRESSIONS[0][0], M.EXPRESSIONS[0][1]],
              r = e,
              i = v(1),
              a = 0,
              n = v(0),
              s = v(0),
              l = v(0),
              o = v(1),
              u = v(1),
              h = v(1),
              c = v(0),
              d = v(0),
              p = 0,
              L = 0,
              tx = -1e9,
              tg = 0,
              tp = v(1),
              tb = ti.current,
              tf = g.SHAPES[tb].ring,
              ty = g.SHAPES[tb].face,
              tA = g.SHAPES[tb].tiltScale,
              tm = g.SHAPES[tb].beltRadius,
              tE = g.SHAPES[tb].beltRadius,
              tw = v(0),
              t_ = v(1),
              tF = null,
              tk = null,
              tv = null,
              tC = 0,
              tH = !1,
              t$ = 0,
              tD = v(0),
              tP = 0,
              tS = 1,
              tR = !1,
              tI = -1e9,
              tO = Math.PI,
              tj = null,
              tN = 0,
              tB = 0,
              tL = 0,
              tT = 0,
              tG = 0,
              tz = 0,
              tK = 0,
              tV = [],
              tX = 0,
              tU = 0,
              tW = -1,
              tq = 0,
              tY = v(0),
              tZ = v(0),
              tJ = [],
              tQ = { x: -54, y: 26, wig: 0, rot: 17, lift: !0 },
              t1 = 0,
              t0 = -1e9,
              t2 = -1,
              t5 = -0.7,
              t3 = 0,
              t4 = performance.now(),
              t8 = 0,
              t6 = performance.now(),
              t9 = null,
              t7 = -1e9,
              et = (t, n = 7) => {
                if (t === a && 1 === i.t) return;
                let s = Math.min(Math.max(i.x, 0), 1);
                ((e = [
                  (0, x.lerpRing)(e[0], r[0], s),
                  (0, x.lerpRing)(e[1], r[1], s),
                ]),
                  (r = [M.EXPRESSIONS[t][0], M.EXPRESSIONS[t][1]]),
                  (a = t),
                  (i.x = 0),
                  (i.v = 0),
                  (i.t = 1),
                  (ee = n));
              },
              ee = 7,
              er = null,
              ei = { x: 0, y: 0, tx: 0, ty: 0 },
              ea = 0,
              en = 1 / 60,
              es = 1,
              el = 380,
              eo = "",
              eu = 0,
              eh = (t) => 1 - Math.exp(60 * Math.log(1 - t) * en),
              ec = (t = 1, e = 0.5 > Math.random() ? 1 : -1) => {
                er || (er = { x: 0, v: 0, t: t * Math.PI * 2 * e });
              },
              ed = t6 + $(2500, 5e3),
              eM = !1,
              ex = (function ({
                back: t,
                front: e,
                idPrefix: r,
                reduceMotion: i,
                radius: a,
              }) {
                let n = () => a() / 114.2705,
                  s = 0,
                  l = 1,
                  o = !1,
                  u = [],
                  h = $(0, 2 * Math.PI),
                  c = !1,
                  d = [],
                  M = 0,
                  g = [],
                  p = 0,
                  b = 4,
                  f = (t = 1) => {
                    let e = $(-0.85, 0.85);
                    g = [];
                    for (let r = 0; r < t; r++)
                      g.push({
                        tilt: $(0.16, 0.5),
                        roll: e + (r * Math.PI) / t + $(-0.12, 0.12),
                      });
                    ((b = t > 1 ? 3 * t : Math.round($(3, 5))),
                      (p = $(0, 360)));
                  },
                  y = (t, e, r) => {
                    if (u.length > 110) return;
                    g.length || f();
                    let i = g[r % g.length];
                    u.push({
                      x: x.HEAD_C,
                      y: x.HEAD_C,
                      vx: 0,
                      vy: 0,
                      ret: 0,
                      life: 0,
                      max: 9,
                      r:
                        (b <= 3
                          ? $(8, 10.5)
                          : 4 === b
                            ? $(6.6, 8.6)
                            : $(5.6, 7.4)) * 1,
                      rot: $(0, 360),
                      vr: $(-240, 240),
                      curl: 0,
                      color: j[(Math.random() * j.length) | 0],
                      round: !0,
                      star: !1,
                      hue: p + (360 * r) / Math.max(b, 1) + $(-14, 14),
                      hueSpan: $(45, 95) * (0.5 > Math.random() ? 1 : -1),
                      hueVel: $(18, 42) * (0.5 > Math.random() ? 1 : -1),
                      orbit: {
                        lam: t,
                        lamVel: e * $(0.5, 1.1),
                        tilt: i.tilt + $(-0.04, 0.04),
                        roll: i.roll + $(-0.05, 0.05),
                        rad:
                          116 * n() +
                          ((r / g.length) | 0) *
                            (38 / Math.max(Math.ceil(b / g.length) - 1, 1)) +
                          $(-1.5, 1.5),
                        radVel: $(0, 2.5),
                        follow: $(0.74, 0.94),
                        carry: 0,
                        arc: +$(2.2, 3.4),
                      },
                      hist: [],
                      el: null,
                    });
                  },
                  A = 0,
                  m = 0,
                  E = (t) => Math.round(10 * t) / 10,
                  w = (t, e) => {
                    let r = t.length,
                      i = 0;
                    for (let e = 1; e < r; e++)
                      i += Math.hypot(t[e].x - t[e - 1].x, t[e].y - t[e - 1].y);
                    let a = Math.min(e, 0.34 * i),
                      n = [],
                      s = [];
                    for (let e = 0; e < r; e++) {
                      let i = t[e > 0 ? e - 1 : 0],
                        l = t[e < r - 1 ? e + 1 : r - 1],
                        o = l.x - i.x,
                        u = l.y - i.y,
                        h = Math.hypot(o, u) || 1;
                      ((o /= h), (u /= h));
                      let c = (a * (0.5 + (e / (r - 1)) * 0.5)) / 2;
                      (n.push(-u * c), s.push(o * c));
                    }
                    let l = (t) => {
                        let e = Math.max(Math.hypot(n[t], s[t]), 0.2);
                        return `A${E(e)} ${E(e)} 0 0 0 `;
                      },
                      o = (e, i) => {
                        let a = "";
                        for (let r = e; r <= i; r++)
                          a += `${r === e ? "M" : "L"}${E(t[r].x + n[r])} ${E(t[r].y + s[r])}`;
                        a += i === r - 1 ? l(i) : "L";
                        for (let r = i; r >= e; r--)
                          a += `${r === i ? "" : "L"}${E(t[r].x - n[r])} ${E(t[r].y - s[r])}`;
                        return (
                          0 === e &&
                            (a += `${l(0)}${E(t[0].x + n[0])} ${E(t[0].y + s[0])}`),
                          a + "Z"
                        );
                      };
                    if (i < 2) return { front: "", back: "" };
                    let u = "",
                      h = "",
                      c = 0;
                    for (; c < r;) {
                      let e = t[c].z >= 0,
                        i = c;
                      for (; i + 1 < r && t[i + 1].z >= 0 === e;) i++;
                      let a = Math.max(c - 1, 0),
                        n = Math.min(i + 1, r - 1);
                      if (n > a) {
                        let t = o(a, n);
                        e ? (u += t) : (h += t);
                      }
                      c = i + 1;
                    }
                    return { front: u, back: h };
                  },
                  _ = (t, e) => {
                    let r = t.rad * Math.sin(e),
                      i = -t.rad * Math.cos(e) * Math.sin(t.tilt),
                      a = Math.cos(t.roll),
                      n = Math.sin(t.roll);
                    return {
                      x: x.HEAD_C + r * a - i * n,
                      y: x.HEAD_C + r * n + i * a,
                    };
                  },
                  F = (t, e) => Math.cos(e) * Math.cos(t.tilt);
                return {
                  burst: (e = 20, r = 1, a = 0) => {
                    if (!i && t && !(u.length > 120))
                      for (let t = 0; t < e; t++) {
                        let i = (t / e) * Math.PI * 2 + $(-0.35, 0.35),
                          s = $(96, 116) * n(),
                          l = $(170, 360) * r,
                          o = -Math.sin(i),
                          h = Math.cos(i),
                          c = a * l * 0.2,
                          d = 0.18 > Math.random();
                        u.push({
                          x: x.HEAD_C + Math.cos(i) * s,
                          y: x.HEAD_C + Math.sin(i) * s,
                          vx: Math.cos(i) * l + o * c,
                          vy: Math.sin(i) * l + h * c - $(20, 75),
                          life: 0,
                          max: $(0.45, 0.85),
                          r: d ? $(4, 7) : $(3.5, 8),
                          rot: $(0, 360),
                          vr: $(-260, 260),
                          curl: 0,
                          color: d
                            ? x.STAR_GOLD
                            : j[(Math.random() * j.length) | 0],
                          round: !d && 0.3 > Math.random(),
                          star: d,
                          ret: 0,
                          orbit: null,
                          el: null,
                        });
                      }
                  },
                  update: (a, n, g) => {
                    let p, E, k;
                    if (
                      ((l = g.sizeScale),
                      (s = g.spinAngle),
                      (o = g.wideStyle),
                      (!isFinite((p = s - A)) || Math.abs(p) > 1.2) && (p = 0),
                      (A = s),
                      (E = Math.abs(m) >= 0.9),
                      (k = Math.abs((m = n > 0 ? p / n : 0)) >= 0.9),
                      !E && k && (f(o ? 3 : 1), (c = !1)),
                      E && !k && (d.length = 0),
                      !i && t)
                    ) {
                      if (((h = s), !c && Math.abs(m) >= 5)) {
                        ((c = !0), (d = []));
                        for (let t = 0; t < b; t++)
                          d.push({ at: a + t * $(55, 105), i: t });
                      }
                      for (; d.length && a >= d[0].at;) {
                        let t = d.shift();
                        y(h - $(0, 0.18), Math.sign(m) || 1, t.i);
                      }
                    }
                    ((i) => {
                      if (!t || !u.length) return;
                      let a = Math.abs(m) >= 0.9,
                        n = m,
                        s = m * i,
                        o = [];
                      for (let h of u) {
                        h.life += i;
                        let u = D(h.life / h.max, 0, 1);
                        if (h.orbit) {
                          let t = !a || u > 0.55;
                          if (
                            ((h.ret = D(
                              h.ret + (t ? i / 0.5 : -i / 0.35),
                              0,
                              1,
                            )),
                            h.ret >= 1)
                          ) {
                            (h.trailEl?.remove(),
                              h.trailFrontEl?.remove(),
                              h.gradEl?.remove());
                            continue;
                          }
                        } else if (h.life >= h.max) {
                          h.el?.remove();
                          continue;
                        }
                        let c = h.orbit
                          ? Math.min(1, h.life / 0.26)
                          : u < 0.1
                            ? u / 0.1
                            : Math.pow(1 - (u - 0.1) / 0.9, 1.7);
                        if (h.orbit) {
                          let u = h.orbit;
                          (a
                            ? ((u.carry = n * u.follow),
                              (u.lam += s * u.follow + u.lamVel * i))
                            : ((u.lam += (u.carry + u.lamVel) * i),
                              (u.carry *= Math.exp(-2.6 * i)),
                              (u.lamVel *= Math.exp(-2.6 * i))),
                            (u.rad += u.radVel * i));
                          let d = _(u, u.lam);
                          ((h.x = d.x), (h.y = d.y));
                          let x = F(u, u.lam),
                            g = 0.72 + 0.28 * D(x, 0, 1),
                            p = Math.min(h.life / 0.34, 1),
                            b = p * p * (3 - 2 * p),
                            f = Math.max(
                              h.r *
                                g *
                                1.7 *
                                l *
                                b *
                                (1 - 0.72 * h.ret * h.ret),
                              0.5,
                            );
                          if (!h.trailEl) {
                            let i = document.createElementNS(N, "path");
                            (i.setAttribute("data-trail", ""),
                              i.setAttribute("stroke", "none"));
                            let a = document.createElementNS(
                                N,
                                "linearGradient",
                              ),
                              n = `${r}t${M++}`;
                            (a.setAttribute("id", n),
                              a.setAttribute("gradientUnits", "userSpaceOnUse"),
                              (h.stops = []));
                            for (let t = 0; t < 5; t++) {
                              let e = document.createElementNS(N, "stop");
                              (e.setAttribute("offset", (t / 4).toFixed(3)),
                                a.appendChild(e),
                                h.stops.push(e));
                            }
                            (t.appendChild(a),
                              (h.gradEl = a),
                              i.setAttribute("fill", `url(#${n})`),
                              t.appendChild(i),
                              (h.trailEl = i));
                            let s = document.createElementNS(N, "path");
                            (s.setAttribute("data-trail", ""),
                              s.setAttribute("stroke", "none"),
                              s.setAttribute(
                                "fill",
                                h.trailEl.getAttribute("fill") ?? h.color,
                              ),
                              e?.appendChild(s),
                              (h.trailFrontEl = s));
                          }
                          let y = h.hist,
                            A = y.length ? y[y.length - 1].l : u.lam,
                            m = u.lam - A,
                            E = Math.min(Math.ceil(Math.abs(m) / 0.09), 24);
                          for (let t = 1; t <= E; t++) {
                            let e = A + (m * t) / E,
                              r = _(u, e);
                            y.push({ x: r.x, y: r.y, l: e, z: F(u, e) });
                          }
                          y.length ||
                            y.push({ x: h.x, y: h.y, l: u.lam, z: x });
                          let k = u.arc * (1 - h.ret * h.ret * (3 - 2 * h.ret));
                          for (; y.length > 2 && Math.abs(u.lam - y[0].l) > k;)
                            y.shift();
                          let v = Math.abs(u.lam - y[0].l) - k;
                          if (y.length >= 2 && v > 0) {
                            let t = y[0].l + Math.sign(u.lam - y[0].l) * v,
                              e = _(u, t);
                            y[0] = { x: e.x, y: e.y, l: t, z: F(u, t) };
                          }
                          if (
                            (y.length > 48 && y.splice(0, y.length - 48),
                            y.length >= 2)
                          ) {
                            let { front: t, back: e } = w(y, f),
                              r = c.toFixed(3);
                            if (
                              (h.trailEl.setAttribute("d", e),
                              h.trailEl.setAttribute("opacity", r),
                              h.trailFrontEl?.setAttribute("d", t),
                              h.trailFrontEl?.setAttribute("opacity", r),
                              h.stops)
                            ) {
                              let t = (h.hue ?? 0) + (h.hueVel ?? 0) * h.life;
                              for (let e = 0; e < h.stops.length; e++) {
                                let r = e / (h.stops.length - 1),
                                  i = t + r * (h.hueSpan ?? 120);
                                h.stops[e].setAttribute(
                                  "stop-color",
                                  `hsl(${(((i % 360) + 360) % 360).toFixed(0)} 56% ${(56 + 11 * r).toFixed(0)}%)`,
                                );
                              }
                            }
                            let i = y[0],
                              a = y[y.length - 1];
                            (h.gradEl?.setAttribute("x1", i.x.toFixed(1)),
                              h.gradEl?.setAttribute("y1", i.y.toFixed(1)),
                              h.gradEl?.setAttribute("x2", a.x.toFixed(1)),
                              h.gradEl?.setAttribute("y2", a.y.toFixed(1)));
                          } else
                            (h.trailEl.setAttribute("opacity", "0"),
                              h.trailFrontEl?.setAttribute("opacity", "0"));
                          o.push(h);
                          continue;
                        }
                        if (h.curl) {
                          let t = Math.cos(h.curl * i),
                            e = Math.sin(h.curl * i),
                            r = h.vx * t - h.vy * e,
                            a = h.vx * e + h.vy * t;
                          ((h.vx = r), (h.vy = a));
                        }
                        ((h.x += h.vx * i), (h.y += h.vy * i));
                        let d = Math.pow(0.94, 60 * i);
                        ((h.vx *= d), (h.vy = h.vy * d + 40 * i));
                        let g = h.life / h.max,
                          p =
                            g < 0.1
                              ? g / 0.1
                              : Math.pow(1 - (g - 0.1) / 0.9, 1.7),
                          b = Math.max(h.r * (1 - 0.4 * g), 0.5);
                        if (!h.el) {
                          let e = document.createElementNS(
                            N,
                            h.star ? "path" : h.round ? "circle" : "rect",
                          );
                          (h.star && e.setAttribute("d", x.STAR_PATH),
                            e.setAttribute("fill", h.color),
                            t.appendChild(e),
                            (h.el = e));
                        }
                        if (
                          (h.el.setAttribute("opacity", p.toFixed(3)), h.star)
                        )
                          ((h.rot += h.vr * i),
                            h.el.setAttribute(
                              "transform",
                              `translate(${h.x.toFixed(1)} ${h.y.toFixed(1)}) rotate(${h.rot.toFixed(1)}) scale(${b.toFixed(2)})`,
                            ));
                        else if (h.round)
                          (h.el.setAttribute("cx", h.x.toFixed(1)),
                            h.el.setAttribute("cy", h.y.toFixed(1)),
                            h.el.setAttribute("r", b.toFixed(2)));
                        else {
                          let t = Math.max(
                              2 * b,
                              Math.min(0.05 * Math.hypot(h.vx, h.vy), 30),
                            ),
                            e = 1.5 * b,
                            r = (180 * Math.atan2(h.vy, h.vx)) / Math.PI;
                          (h.el.setAttribute("width", t.toFixed(1)),
                            h.el.setAttribute("height", e.toFixed(1)),
                            h.el.setAttribute("rx", (e / 2).toFixed(2)),
                            h.el.setAttribute("x", (h.x - t / 2).toFixed(1)),
                            h.el.setAttribute("y", (h.y - e / 2).toFixed(1)),
                            h.el.setAttribute(
                              "transform",
                              `rotate(${r.toFixed(1)} ${h.x.toFixed(1)} ${h.y.toFixed(1)})`,
                            ));
                        }
                        o.push(h);
                      }
                      u = o;
                    })(n);
                  },
                };
              })({
                back: O.current,
                front: B.current,
                idPrefix: b,
                reduceMotion: t,
                radius: () => tE,
              }),
              eg = 0,
              ep = -1,
              eb = -1,
              ef = !1,
              ey = null,
              eA = Z.reduce((t, e) => t + e.d, 0),
              em = -1,
              eE = 0,
              ew = 0,
              e_ = 0,
              eF = 0,
              ek = 0,
              ev = 0,
              eC = 0,
              eH = () => {
                t || em >= 0 || (em = performance.now());
              },
              e$ = null,
              eD = null,
              eP = (e) => {
                if (t || e$) return;
                let r = 0.5 > Math.random() ? 1 : -1,
                  i =
                    "spinDizzy" === e
                      ? Math.round($(3, 4))
                      : "spinWild" === e
                        ? 9
                        : 1;
                e$ = { kind: e, t0: performance.now(), dir: r, turns: i };
              },
              eS = Math.floor($(0, 5)),
              eR = !1,
              eI = (t) => {
                (tV.push(
                  { at: t, v: 0.05 },
                  { at: t + 70, v: 0.05 },
                  { at: t + 150, v: 1.08 },
                  { at: t + 300, v: 1 },
                ),
                  0.14 > Math.random() &&
                    tV.push({ at: t + 370, v: 0.05 }, { at: t + 480, v: 1 }));
              },
              eO = (t, e) =>
                (0.42 +
                  0.29 * Math.sin(0.0021 * t) * Math.sin(0.0034 * t) +
                  0.29 * Math.sin(0.0013 * t + 1.7)) *
                (0.55 + 0.45 * Math.sin(0.012 * t - 1.05 * Math.abs(e))),
              ej = (e, r, i) => {
                let a = Math.abs(
                  (((((e - tI) / 1400 + 0.119) % 1) + 1) % 1) - r / 3,
                );
                a = Math.min(a, 1 - a);
                let n = t ? 1 : Math.exp(-(a * a) / 0.045),
                  s = +!t;
                return {
                  lift: 9 * n * i * s,
                  pop: 1 + s * (0.84 + 0.22 * n - 1),
                  tone: 1 - 0.5 * s * (1 - n),
                };
              },
              eN = (t, e) => {
                let r = [x.HEAD_C - 62, x.HEAD_C + 62];
                for (let i = 0; i < 2; i++) {
                  let a = tl.current[i];
                  if (!a) continue;
                  let n = D((t - 0.12 * i) / (1 - 0.12 * i), 0, 1);
                  if (n <= 0.004) {
                    a.style.display = "none";
                    continue;
                  }
                  let s = S(n),
                    l = R(n),
                    o = ej(e, 2 * (0 !== i), t),
                    u = ((22 * s * o.pop) / x.HEAD_C) * 1.02;
                  ((a.style.display = ""),
                    a.setAttribute(
                      "transform",
                      `translate(${(x.HEAD_C + (r[i] - x.HEAD_C) * l).toFixed(1)} ${(x.HEAD_C - o.lift).toFixed(1)}) scale(${u.toFixed(4)}) translate(${-x.HEAD_C} ${-x.HEAD_C})`,
                    ),
                    a.setAttribute("opacity", (s * o.tone).toFixed(3)));
                }
              },
              eB = (t, e) => {
                let r = S(t),
                  i = 52 * R(t),
                  a = 0.0017 * e;
                for (let t = 0; t < 5; t++) {
                  let e = th.current[t];
                  if (!e) continue;
                  let n = a + (t * Math.PI * 2) / 5,
                    s = Math.cos(n),
                    l = 0.5 + 0.5 * D(s, 0, 1);
                  ((e.style.display = ""),
                    e.setAttribute(
                      "cx",
                      (x.HEAD_C + i * Math.sin(n)).toFixed(1),
                    ),
                    e.setAttribute(
                      "cy",
                      (x.HEAD_C - 0.42 * i * Math.cos(n)).toFixed(1),
                    ),
                    e.setAttribute("r", Math.max(12 * l * r, 0.3).toFixed(2)),
                    e.setAttribute(
                      "opacity",
                      (D((s + 0.4) / 0.6, 0.18, 1) * r).toFixed(3),
                    ));
                }
              },
              eL = (t, e, r) => {
                let i = S(t);
                for (let t = 0; t < 3; t++) {
                  let a = tc.current[t];
                  if (!a) continue;
                  let n = (e / 1300 + t / 3) % 1;
                  ((a.style.display = ""),
                    a.removeAttribute("stroke-dasharray"),
                    a.removeAttribute("transform"),
                    a.setAttribute("r", (r + (104 - r) * n).toFixed(1)),
                    a.setAttribute(
                      "stroke-width",
                      (3.4 * (1 - 0.55 * n)).toFixed(2),
                    ),
                    a.setAttribute("opacity", (i * (1 - n) * 0.9).toFixed(3)));
                }
              },
              eT = (t, e) => {
                let r = S(t),
                  i = R(t),
                  a = D((e - tC) / (A.progress ?? 2500), 0, 1),
                  n = D(a / 0.85, 0, 1),
                  s = tc.current[3];
                s &&
                  ((s.style.display = ""),
                  s.setAttribute("r", (62 * i).toFixed(1)),
                  s.setAttribute("stroke-width", "5"),
                  s.removeAttribute("stroke-dasharray"),
                  s.removeAttribute("transform"),
                  s.setAttribute("opacity", (0.16 * r).toFixed(3)));
                let l = tc.current[4];
                if (l) {
                  let t = 62 * i,
                    e = 2 * Math.PI * t;
                  ((l.style.display = ""),
                    l.setAttribute("r", t.toFixed(1)),
                    l.setAttribute("stroke-width", "5"),
                    l.setAttribute("stroke-dasharray", `${e.toFixed(1)}`),
                    l.setAttribute(
                      "stroke-dashoffset",
                      (e * (1 - n)).toFixed(1),
                    ),
                    l.setAttribute(
                      "transform",
                      `rotate(-90 ${x.HEAD_C} ${x.HEAD_C})`,
                    ),
                    l.setAttribute("opacity", r.toFixed(3)));
                }
              },
              eG = (t, e) => {
                let r = S(t),
                  i = A.spawning ?? 2e3;
                for (let t = 0; t < 5; t++) {
                  let a = th.current[t];
                  if (!a) continue;
                  let n = D(((e - tC) / i - 0.09 * t) / 0.62, 0, 1);
                  if (n >= 1) {
                    a.style.display = "none";
                    continue;
                  }
                  let s = 1 - Math.pow(1 - n, 3),
                    l = 2.4 * t + 2.2 * n,
                    o = 96 * (1 - s);
                  ((a.style.display = ""),
                    a.setAttribute(
                      "cx",
                      (x.HEAD_C + o * Math.cos(l)).toFixed(1),
                    ),
                    a.setAttribute(
                      "cy",
                      (x.HEAD_C + o * Math.sin(l) * 0.8).toFixed(1),
                    ),
                    a.setAttribute("r", (9 * (0.5 + 0.5 * s) * r).toFixed(2)),
                    a.setAttribute(
                      "opacity",
                      (r * D(5 * n, 0, 1) * (1 - 0.25 * s)).toFixed(3),
                    ));
                }
              },
              ez = (t, e) => {
                let r = [-2, -1, 1, 2];
                for (let i = 0; i < 4; i++) {
                  let a = i < 2 ? tl.current[i] : th.current[i - 2];
                  if (!a) continue;
                  let n = r[i],
                    s = D(
                      (t - 0.1 * Math.abs(n)) / (1 - 0.1 * Math.abs(n)),
                      0,
                      1,
                    );
                  if (s <= 0.004) {
                    a.style.display = "none";
                    continue;
                  }
                  let l = R(s),
                    o = eO(e, n),
                    u = (7 + 9 * D(o, 0.08, 1)) * S(s),
                    h = 6 * D(o, 0, 1) * s;
                  if (((a.style.display = ""), i < 2)) {
                    let t = (u / x.HEAD_C) * 1.02;
                    (a.setAttribute(
                      "transform",
                      `translate(${(x.HEAD_C + 44 * n * l).toFixed(1)} ${(x.HEAD_C - h).toFixed(1)}) scale(${t.toFixed(4)}) translate(${-x.HEAD_C} ${-x.HEAD_C})`,
                    ),
                      a.setAttribute("opacity", s.toFixed(3)));
                  } else
                    (a.setAttribute("cx", (x.HEAD_C + 44 * n * l).toFixed(1)),
                      a.setAttribute("cy", (x.HEAD_C - h).toFixed(1)),
                      a.setAttribute("r", u.toFixed(2)),
                      a.setAttribute("opacity", s.toFixed(3)));
                }
              },
              eK = (t, e) => {
                let r = S(t),
                  i = ((((e - tM.current) / 1500) % 1) + 1) % 1,
                  a = D((i - 0.18) / 0.55, 0, 1),
                  n = a * a * (0.4 + 0.6 * a),
                  s = 108 * n,
                  l = th.current[0];
                if (l) {
                  let t = a > 0 && a < 1;
                  ((l.style.display = t ? "" : "none"),
                    t &&
                      (l.setAttribute("cx", (x.HEAD_C + 0.74 * s).toFixed(1)),
                      l.setAttribute("cy", (x.HEAD_C + -0.62 * s).toFixed(1)),
                      l.setAttribute("r", (10 * (1 - 0.55 * n) * r).toFixed(2)),
                      l.setAttribute("opacity", (r * (1 - n * n)).toFixed(3))));
                }
                let o = th.current[1];
                if (o) {
                  let t = D((i - 0.26) / 0.55, 0, 1),
                    e = t * t * (0.4 + 0.6 * t),
                    n = a > 0 && t > 0 && t < 1;
                  if (((o.style.display = n ? "" : "none"), n)) {
                    let t = 108 * e;
                    (o.setAttribute("cx", (x.HEAD_C + 0.74 * t).toFixed(1)),
                      o.setAttribute("cy", (x.HEAD_C + -0.62 * t).toFixed(1)),
                      o.setAttribute("r", (5 * (1 - 0.6 * e) * r).toFixed(2)),
                      o.setAttribute(
                        "opacity",
                        (0.3 * r * (1 - e)).toFixed(3),
                      ));
                  }
                }
                let u = tc.current[0];
                if (u) {
                  let t = D((i - 0.18) / 0.3, 0, 1),
                    e = t > 0 && t < 1;
                  ((u.style.display = e ? "" : "none"),
                    e &&
                      (u.removeAttribute("stroke-dasharray"),
                      u.removeAttribute("transform"),
                      u.setAttribute("r", (20 + 34 * S(t)).toFixed(1)),
                      u.setAttribute(
                        "stroke-width",
                        (2.8 * (1 - t)).toFixed(2),
                      ),
                      u.setAttribute(
                        "opacity",
                        (r * (1 - t) * 0.8).toFixed(3),
                      )));
                }
              },
              eV = (t, e) => {
                let r = S(t),
                  i = e - tM.current,
                  a = Math.floor(i / 1700);
                a !== t2 &&
                  ((t2 = a), (t5 = $(-(1.25 * Math.PI), 0.25 * Math.PI)));
                let n = (((i / 1700) % 1) + 1) % 1,
                  s = D(n / 0.6, 0, 1),
                  l = 1 - Math.pow(1 - s, 3),
                  o = Math.cos(t5),
                  u = Math.sin(t5),
                  h = 108 * (1 - l),
                  c = th.current[0];
                if (c) {
                  let t = s < 1;
                  if (((c.style.display = t ? "" : "none"), t)) {
                    let t = 18 * Math.sin(s * Math.PI) * (1 - 0.7 * l);
                    (c.setAttribute(
                      "cx",
                      (x.HEAD_C + o * h + -u * t).toFixed(1),
                    ),
                      c.setAttribute(
                        "cy",
                        (x.HEAD_C + u * h + o * t).toFixed(1),
                      ),
                      c.setAttribute("r", (3.5 + 6.5 * l).toFixed(2)),
                      c.setAttribute(
                        "opacity",
                        (r * D(3.5 * s, 0, 1) * (0.3 + 0.7 * l)).toFixed(3),
                      ));
                  }
                }
                let d = tc.current[1];
                if (d) {
                  let t = D((n - 0.58) / 0.32, 0, 1),
                    e = t > 0 && t < 1;
                  ((d.style.display = e ? "" : "none"),
                    e &&
                      (d.removeAttribute("stroke-dasharray"),
                      d.removeAttribute("transform"),
                      d.setAttribute("r", (20 + 26 * S(t)).toFixed(1)),
                      d.setAttribute(
                        "stroke-width",
                        (2.8 * (1 - t)).toFixed(2),
                      ),
                      d.setAttribute(
                        "opacity",
                        (r * (1 - t) * 0.8).toFixed(3),
                      )));
                }
              },
              eX = (t, e) => {
                let r = S(t),
                  i = (e - tM.current) / 1e3;
                for (let t = 0; t < 2; t++) {
                  let a = th.current[t];
                  if (!a) continue;
                  let n = D((i - (0.2 + 1.3 * t)) / 0.9, 0, 1);
                  if (n <= 0) {
                    a.style.display = "none";
                    continue;
                  }
                  let s = 1 - Math.pow(1 - n, 3),
                    l = 0.001 * e * 1.1 + t * Math.PI,
                    o = x.HEAD_C + 42 * Math.sin(l),
                    u =
                      x.HEAD_C + 21 * Math.cos(l) + 2 * Math.sin(0.003 * e + t),
                    h = x.HEAD_C - 120 + 30 * t,
                    c = x.HEAD_C + 95;
                  ((a.style.display = ""),
                    a.setAttribute("cx", (h + (o - h) * s).toFixed(1)),
                    a.setAttribute("cy", (c + (u - c) * s).toFixed(1)),
                    a.setAttribute("r", ((7 + 3 * s) * r).toFixed(2)),
                    a.setAttribute("opacity", (r * D(4 * n, 0, 1)).toFixed(3)));
                }
              },
              eU = (t) => {
                let e = t - tM.current,
                  r = (((e / 2500) % 1) + 1) % 1;
                if (r < 0.68) {
                  let t = r / 0.68,
                    i = D(t / 0.08, 0, 1) * D((1 - t) / 0.08, 0, 1);
                  return {
                    x: -54 + t * t * (3 - 2 * t) * 118,
                    y: 26,
                    wig: 3.2 * Math.sin(24 * t) * i,
                    rot: 17 + +Math.sin(6e-4 * e),
                    lift: !1,
                  };
                }
                let i = P((r - 0.68) / 0.32);
                return {
                  x: 64 - 118 * i,
                  y: 26 - 20 * Math.sin(i * Math.PI),
                  wig: 0,
                  rot: 17 - 2 * Math.sin(i * Math.PI) + +Math.sin(6e-4 * e),
                  lift: !0,
                };
              },
              eW = (t, e) => {
                let r = "writing" === td.current ? eU(e) : tQ,
                  i = tu.current[0];
                if (i) {
                  let e = ((r.rot - 90) * Math.PI) / 180,
                    a = 68 * Math.cos(e),
                    n = 68 * Math.sin(e);
                  ((i.style.display = ""),
                    i.setAttribute("d", U),
                    (i.style.fill = "var(--fg)"),
                    i.setAttribute(
                      "transform",
                      `translate(${(x.HEAD_C + (r.x + a) * t).toFixed(1)} ${(x.HEAD_C + (r.y + 0.15 * r.wig + n) * t).toFixed(1)}) rotate(${(r.rot * t).toFixed(1)}) scale(${S(t).toFixed(3)}) translate(${-x.HEAD_C} ${-x.HEAD_C})`,
                    ),
                    i.setAttribute(
                      "opacity",
                      D(1.6 * t - 0.3, 0, 1).toFixed(3),
                    ));
                }
                if (t > 0.6 && !r.lift) {
                  let t = x.HEAD_C + r.x,
                    e = x.HEAD_C + r.y + r.wig + 19,
                    i = tJ[tJ.length - 1];
                  !i || Math.hypot(t - i[0], e - i[1]) > 2.4
                    ? (tJ.push([t, e]), tJ.length > 64 && tJ.shift())
                    : i && ((i[0] = t), (i[1] = e));
                } else tJ.length && tJ.splice(0, 2);
                let a = tu.current[1];
                a &&
                  (tJ.length < 2
                    ? (a.style.display = "none")
                    : ((a.style.display = ""),
                      (a.style.fill = "none"),
                      (a.style.stroke = "var(--fg)"),
                      a.setAttribute("stroke-width", "6"),
                      a.setAttribute("stroke-linecap", "round"),
                      a.setAttribute("stroke-linejoin", "round"),
                      a.setAttribute(
                        "d",
                        ((t) => {
                          let e = t.length,
                            r = `M${t[0][0].toFixed(1)} ${t[0][1].toFixed(1)}`;
                          if (2 === e)
                            return (
                              r + `L${t[1][0].toFixed(1)} ${t[1][1].toFixed(1)}`
                            );
                          for (let i = 0; i < e - 1; i++) {
                            let a = t[Math.max(i - 1, 0)],
                              n = t[i],
                              s = t[i + 1],
                              l = t[Math.min(i + 2, e - 1)],
                              o = n[0] + (s[0] - a[0]) / 6,
                              u = n[1] + (s[1] - a[1]) / 6,
                              h = s[0] - (l[0] - n[0]) / 6,
                              c = s[1] - (l[1] - n[1]) / 6;
                            r += `C${o.toFixed(1)} ${u.toFixed(1)} ${h.toFixed(1)} ${c.toFixed(1)} ${s[0].toFixed(1)} ${s[1].toFixed(1)}`;
                          }
                          return r;
                        })(tJ),
                      ),
                      a.setAttribute("opacity", D(1.2 * t, 0, 1).toFixed(3))));
              },
              eq = (t, e) => {
                let r = tu.current[2];
                if (!r) return;
                let i = (e - tM.current) / 1e3,
                  a = S(D(1.1 * t, 0, 1)),
                  n = Math.exp(-((i % 2.2) * 5.5)),
                  s = 2.2 * Math.sin(42 * i) * n;
                ((r.style.display = ""),
                  r.setAttribute("d", W),
                  (r.style.fill = "var(--fg)"),
                  r.setAttribute(
                    "transform",
                    `translate(0 ${(-26 - (1 - a) * 70).toFixed(1)}) rotate(${s.toFixed(2)} ${x.HEAD_C} ${(x.HEAD_C - 74).toFixed(1)}) translate(${x.HEAD_C} ${x.HEAD_C}) scale(${D(1.2 * t, 0, 1).toFixed(3)}) translate(${-x.HEAD_C} ${-x.HEAD_C})`,
                  ),
                  r.setAttribute("opacity", D(1.5 * t - 0.2, 0, 1).toFixed(3)));
              },
              eY = (t, e) => {
                let r = S(t),
                  i = th.current[4];
                if (i) {
                  let t = 0.5 + 0.5 * Math.sin(0.0016 * e);
                  ((i.style.display = ""),
                    i.setAttribute("cx", `${x.HEAD_C}`),
                    i.setAttribute("cy", `${x.HEAD_C}`),
                    i.setAttribute("r", (26 + 7 * t).toFixed(1)),
                    i.setAttribute(
                      "opacity",
                      (r * (0.06 + 0.1 * t)).toFixed(3),
                    ));
                }
                let a = tc.current[2];
                if (a) {
                  let e = t < 0.995;
                  ((a.style.display = e ? "" : "none"),
                    e &&
                      (a.removeAttribute("stroke-dasharray"),
                      a.removeAttribute("transform"),
                      a.setAttribute("r", (104 - 88 * r).toFixed(1)),
                      a.setAttribute("stroke-width", "2.4"),
                      a.setAttribute("opacity", ((1 - r) * 0.5).toFixed(3))));
                }
              },
              eZ = (M) => {
                let b = Math.min((M - t4) / 1e3, 0.1);
                ((t4 = M), (en = b));
                let v = G[td.current] ?? null;
                v !== tv && ((tv = v), (tC = M), (tH = !1));
                let S = null != v,
                  R = td.current;
                (v &&
                  y.has(R) &&
                  (!tH && M - tC > (A[R] ?? 2500)
                    ? ((tH = !0), (t$ = M))
                    : tH && M - t$ > 1500 && ((tH = !1), (tC = M)),
                  (S = !tH)),
                  (tw.t = +!!S),
                  v &&
                    v !== tF &&
                    (tF && tw.x > 0.02
                      ? ((tk = tF),
                        (t_.x = 0),
                        (t_.v = 0),
                        (t_.t = 1),
                        t && (t_.x = 1))
                      : ((tk = null), (t_.x = 1), (t_.v = 0), (t_.t = 1)),
                    (tF = v),
                    (tI = M)),
                  !v && tw.x < 0.004 && ((tF = null), (tk = null)),
                  t_.x > 0.996 && (tk = null),
                  S !== tR &&
                    (S && !t && (tS = 0.5 > Math.random() ? 1 : -1),
                    t || (tD.t = tP += tO * tS),
                    (tR = S)),
                  t
                    ? (et(m[td.current][0]),
                      (n.t = 0),
                      (s.t = 0),
                      (l.t = 0),
                      (o.t = 1),
                      (u.t = 1),
                      (h.t = 1))
                    : ((t) => {
                        let e = td.current,
                          r = (t - t6) / 1e3,
                          M = (t - tM.current) / 1e3;
                        if (
                          (tj !== e &&
                            ((tj = e),
                            (tK = 0),
                            (tB = t + $(...E[e])),
                            (tL = t + $(1500, 7e3)),
                            (tX =
                              t +
                              ("excited" === e
                                ? $(400, 1100)
                                : "searching" === e
                                  ? $(800, 1600)
                                  : "working" === e
                                    ? $(1200, 2400)
                                    : $(6e3, 1e4))),
                            (tU = t + $(500, 1200)),
                            (tG = t + $(1200, 2200)),
                            (tz = 0),
                            (p = t + $(500, 1400)),
                            (L = t + $(3e3, 8e3)),
                            (tW = -1),
                            (t2 = -1),
                            "writing" === e && (tJ = []),
                            (eM = !1),
                            "celebrate" === e && (tN = t + 140),
                            "waking" !== e &&
                              "sleeping" !== e &&
                              ("drowsy" !== e && eI(t),
                              et(m[e][0], "excited" === e ? 10 : 8))),
                          "celebrate" === e &&
                            !e$ &&
                            t >= tN &&
                            (eP("spinWild"), (tN = t + 6200)),
                          t >= ed)
                        ) {
                          let r = _.has(e),
                            i = F.has(e);
                          if ((r || i) && !er && em < 0 && !e$) {
                            let t = Math.random();
                            r
                              ? t < 0.55
                                ? ec(1)
                                : eP("spinBounce")
                              : t < 0.34
                                ? eP("spinBounce")
                                : t < 0.62
                                  ? eH()
                                  : t < 0.86
                                    ? eP("spinDizzy")
                                    : ec(1);
                          }
                          ed = t + $(9e3, 18e3);
                        }
                        let x = 1,
                          g = 1;
                        switch (e) {
                          case "sleeping": {
                            m.sleeping.includes(a)
                              ? (x = i.x > 0.85 ? 1 : 0.08)
                              : M < 1.2
                                ? (x = Math.max(
                                    0.08,
                                    1 -
                                      Math.min(1, M / 1) *
                                        (1 + 0.15 * Math.sin(6.5 * M)),
                                  ))
                                : ((x = 0.08), u.x < 0.18 && et(13, 11));
                            let t = Math.min(M / 2, 1),
                              e = Math.sin(D(M / 0.5, 0, 1) * Math.PI);
                            ((n.t = 0 + 4 * t + 2 * Math.sin(0.25 * r)),
                              (s.t = -2 * t),
                              (l.t = 8 * t + 3 * Math.sin(0.55 * r) - 5 * e),
                              (o.t =
                                1 + 0.016 * Math.sin(0.55 * r) + 0.05 * e));
                            break;
                          }
                          case "waking":
                            if (M < 0.5) ((x = 0.07), et(3, 12), (l.t = 6));
                            else if (M < 1.2)
                              ((x = 1),
                                (g = 1.12),
                                (l.t = -5),
                                (s.t = 0),
                                (n.t = 0),
                                (o.t = 1.04),
                                eM || (ex.burst($(9, 13), 0.8), (eM = !0)));
                            else if (M < 2.2)
                              (0 === tV.length && M < 1.4 && eI(t),
                                et(0),
                                (l.t = 0),
                                (o.t = 1));
                            else {
                              let t = Math.min((M - 2.2) / 0.8, 1);
                              (et(0),
                                (n.t =
                                  0 + 6 * Math.sin(t * Math.PI * 3) * (1 - t)),
                                (l.t = 2 * Math.sin(0.9 * r)));
                            }
                            break;
                          case "idle":
                            ((n.t =
                              0 +
                              1.5 * Math.sin(0.5 * r) +
                              0.6 * Math.sin(0.17 * r)),
                              (s.t = +Math.sin(0.27 * r)),
                              (l.t = 1.2 * Math.sin(0.85 * r)),
                              (o.t = 1 + 0.007 * Math.sin(0.85 * r)));
                            break;
                          case "listening":
                            if (
                              ((n.t = 8 + 1.5 * Math.sin(0.5 * r)),
                              (s.t = 2),
                              (l.t = -2 + 0.8 * Math.sin(0.8 * r)),
                              (o.t = 1.015),
                              t >= tG &&
                                ((tT = t + 380), (tG = t + $(1800, 3200))),
                              t < tT)
                            ) {
                              let e = 1 - (tT - t) / 380;
                              ((l.t += 4.5 * Math.sin(e * Math.PI)),
                                (n.t += 2 * Math.sin(e * Math.PI)));
                            }
                            break;
                          case "thinking":
                            ((n.t = -9 + 5 * Math.sin(0.35 * r)),
                              (s.t = 5 * Math.sin(0.3 * r)),
                              (l.t = 2.5 * Math.sin(0.6 * r)),
                              (o.t = 1));
                            break;
                          case "searching": {
                            let e = Math.sin(1.3 * r);
                            ((n.t = 0 + 13 * e),
                              (s.t = 7 * e),
                              (l.t = 3 * Math.sin(1.7 * r)),
                              (o.t = 1),
                              t >= tX && (ec(), (tX = t + $(4e3, 7e3))));
                            break;
                          }
                          case "working": {
                            let e = Math.sin(r * Math.PI * 3.2);
                            ((n.t = 4 + 2.5 * e),
                              (s.t = 3),
                              (l.t = 1.5 + 3 * Math.max(0, e)),
                              (o.t = 1 - 0.02 * Math.max(0, e)),
                              t >= tX && (ec(1, 1), (tX = t + $(6e3, 9e3))));
                            break;
                          }
                          case "excited": {
                            let e = (2.2 * r) % 1;
                            ((l.t = -(10 * Math.sin(e * Math.PI)) + 2),
                              (o.t = e < 0.1 ? 0.92 : e < 0.3 ? 1.05 : 1),
                              (s.t = 4 * Math.sin(1.1 * r)),
                              (g = 1.06),
                              t >= tX && (ec(1), (tX = t + $(2800, 5e3))),
                              (n.t = 0 + 7 * Math.sin(r * Math.PI * 2.2)));
                            break;
                          }
                          case "surprised": {
                            let t = Math.min(M / 1.2, 1);
                            ((s.t = -4 * (1 - t)),
                              (l.t = -8 * (1 - t)),
                              (o.t = M < 0.2 ? 1.08 : 1),
                              (g = 1.15 - 0.08 * t),
                              (n.t = 0 + 1.5 * Math.sin(11 * r) * (1 - t)));
                            break;
                          }
                          case "suspicious":
                            ((n.t = -6 + 3 * Math.sin(0.3 * r)),
                              (s.t = -4 * Math.sin(0.25 * r)),
                              (l.t = 1 + 1.2 * Math.sin(0.45 * r)),
                              (o.t = 1),
                              (x = 0.85),
                              t >= tU && ((n.v += 30), (tU = t + $(4e3, 7e3))));
                            break;
                          case "angry":
                            (t >= tU &&
                              ((t3 = t + 420),
                              (l.v += 70),
                              (tU = t + $(1800, 3200))),
                              (n.t =
                                0 + (t < t3 ? 4.5 * Math.sin(0.05 * t) : 0)),
                              (s.t = 0),
                              (l.t = 3.5),
                              (o.t = 0.975));
                            break;
                          case "drowsy":
                            if (
                              ((n.t = 0 + 2.5 * Math.sin(0.32 * r)),
                              (s.t = 1.5 * Math.sin(0.2 * r)),
                              (l.t = 6 + 2.2 * Math.sin(0.36 * r)),
                              (o.t = 1 + 0.022 * Math.sin(0.36 * r)),
                              (x = 0.34 + 0.07 * Math.sin(0.8 * r)),
                              t >= tG && !tz && (tz = t),
                              tz)
                            ) {
                              let e = (t - tz) / 1e3;
                              if (e < 1.7) {
                                let t = e / 1.7,
                                  r = t * t;
                                ((l.t =
                                  6 +
                                  19 * r +
                                  2.2 * Math.sin(t * Math.PI * 2.5) * (1 - t)),
                                  (n.t = 0 + 10 * r),
                                  (x = 0.34 - r * (0.34 - 0.04)),
                                  (o.t = 1 - 0.045 * r));
                              } else if (e < 2) {
                                let t = Math.sin(((e - 1.7) / 0.3) * Math.PI);
                                ((l.t = 25 - 7 * t),
                                  (n.t = 10 - 4 * t),
                                  (x = 0.04 + 0.42 * t));
                              } else if (e < 3.5) {
                                let t = (e - 1.7 - 0.3) / 1.5,
                                  r = 1 - Math.pow(1 - t, 2.2);
                                ((l.t = 25 + -19 * r),
                                  (n.t = 0 + 10 * (1 - r)),
                                  (x = 0.46 + -0.12 * r),
                                  t > 0.32 && t < 0.46 && (x = 0.05));
                              } else ((tz = 0), (tG = t + $(1500, 3500)));
                            }
                            break;
                          case "happy": {
                            let t = Math.sin(2.4 * r);
                            ((n.t = 0 + 3 * Math.sin(1.2 * r)),
                              (s.t = 2.5 * Math.sin(1.1 * r)),
                              (l.t = -(3 * Math.abs(t))),
                              (o.t = 1 + 0.02 * t),
                              (g = 1.05));
                            break;
                          }
                          case "curious":
                            if (
                              ((n.t = 10 + 6 * Math.sin(0.7 * r)),
                              (s.t = 5 * Math.sin(0.6 * r)),
                              (l.t = -2 + 1.5 * Math.sin(0.9 * r)),
                              (o.t = 1.01),
                              (g = 1.08),
                              t >= tG &&
                                ((tT = t + 440), (tG = t + $(1600, 2800))),
                              t < tT)
                            ) {
                              let e = 1 - (tT - t) / 440;
                              ((s.t += 8 * Math.sin(e * Math.PI)),
                                (n.t += 5 * Math.sin(e * Math.PI)));
                            }
                            break;
                          case "confused": {
                            let e = Math.sin(0.8 * r);
                            ((n.t = 0 + 12 * e),
                              (s.t = 3 * e),
                              (l.t = 2 * Math.sin(0.5 * r)),
                              (o.t = 1),
                              (x = 0.9),
                              t >= tU &&
                                ((n.v += 22), (tU = t + $(2600, 4200))));
                            break;
                          }
                          case "bored":
                            if (
                              ((n.t = -3 + 4 * Math.sin(0.25 * r)),
                              (s.t = 4 * Math.sin(0.2 * r)),
                              (l.t = 5 + 1.5 * Math.sin(0.35 * r)),
                              (o.t = 0.99),
                              (x = 0.6),
                              (g = 0.98),
                              t >= tU &&
                                ((tT = t + 600), (tU = t + $(4e3, 7e3))),
                              t < tT)
                            ) {
                              let e = 1 - (tT - t) / 600;
                              ((o.t = 1 + 0.05 * Math.sin(e * Math.PI)),
                                (l.t += 3 * Math.sin(e * Math.PI)));
                            }
                            break;
                          case "proud":
                            ((n.t = 0 + 2.5 * Math.sin(0.4 * r)),
                              (s.t = 2 * Math.sin(0.35 * r)),
                              (l.t = -4 + Math.sin(0.6 * r)),
                              (o.t = 1.03),
                              (g = 1.02),
                              (x = 0.9));
                            break;
                          case "shy":
                            ((n.t = -8 + 3 * Math.sin(0.5 * r)),
                              (s.t = -3 + 2 * Math.sin(0.4 * r)),
                              (l.t = 3),
                              (o.t = 0.98),
                              (g = 0.95),
                              (x = 0.85));
                            break;
                          case "sad":
                            ((n.t = 3 + 2 * Math.sin(0.3 * r)),
                              (s.t = 1.5 * Math.sin(0.25 * r)),
                              (l.t = 7 + Math.sin(0.4 * r)),
                              (o.t = 0.97),
                              (x = 0.7),
                              (g = 0.97));
                            break;
                          case "laughing": {
                            let t = Math.sin(r * Math.PI * 6.4);
                            ((n.t = 0 + 4 * t),
                              (s.t = 2 * Math.sin(2 * r)),
                              (l.t = -(5 * Math.abs(t))),
                              (o.t = 1 + 0.03 * t),
                              (x = 0.7),
                              (g = 1));
                            break;
                          }
                          case "scared":
                            ((n.t = 0 + 2 * Math.sin(0.04 * t)),
                              (s.t = -2 + 1.5 * Math.sin(0.05 * t)),
                              (l.t = 2 + Math.sin(1.5 * r)),
                              (o.t = 0.97),
                              (g = 1.12),
                              (x = 1.05));
                            break;
                          case "playful":
                            ((n.t = 0 + 8 * Math.sin(1.4 * r)),
                              (s.t = 4 * Math.sin(1.1 * r)),
                              (l.t = -(3 * Math.abs(Math.sin(2.2 * r)))),
                              (o.t = 1 + 0.015 * Math.sin(2.2 * r)),
                              (g = 1.06),
                              t >= tX && (ec(1), (tX = t + $(3500, 6e3))));
                            break;
                          case "celebrate":
                            ((n.t = 0),
                              (s.t = 0),
                              (l.t = -(2.5 * Math.abs(Math.sin(1.6 * r)))),
                              (o.t = 1),
                              (g = 1.1),
                              (x = 1.1));
                            break;
                          case "orbit":
                          case "radar":
                          case "progress":
                          case "spawning":
                          case "loading":
                          case "dictating":
                          case "sending":
                          case "receiving":
                          case "uploading":
                          case "writing":
                          case "alerting":
                          case "bouncing":
                          case "powering-down":
                            ((n.t = 0), (s.t = 0), (l.t = 0), (o.t = 1));
                            break;
                          case "dragging": {
                            let t = (M % 3.4) / 3.4,
                              e = Math.floor(M / 3.4);
                            (t < 0.12
                              ? ((s.t = -16), (l.t = -22), (n.t = -5))
                              : t < 0.62
                                ? ((s.t = -16 + 32 * P((t - 0.12) / 0.5)),
                                  (l.t = -22 + 2 * Math.sin(1.4 * r)),
                                  (n.t = 0 + 6 * Math.sin(2.6 * r)),
                                  (g = 1.06))
                                : (e !== tW && ((tW = e), (l.v += 90)),
                                  (s.t = 16),
                                  (l.t = 0),
                                  (n.t = 0)),
                              (o.t = 1));
                            break;
                          }
                          case "humming":
                            ((n.t = 0 + 2 * Math.sin(0.4 * r)),
                              (s.t = 1.5 * Math.sin(0.3 * r)),
                              (l.t = 1.5 * Math.sin(0.7 * r)),
                              (o.t = 1));
                            break;
                          case "notifying":
                            (tW < 0 &&
                              M > 0.12 &&
                              ((tW = 0), (l.v -= 26), eI(t)),
                              (g = 1 + 0.05 * Math.exp(-(3 * M))),
                              (n.t = 3),
                              (s.t = 2),
                              (l.t = -1),
                              (o.t = 1));
                        }
                        if (t >= p) {
                          let r = () => (0.5 > Math.random() ? -1 : 1),
                            i = 0,
                            a = 0,
                            n = 2500,
                            s = 5e3;
                          switch (e) {
                            case "idle":
                              ((i = 0), (a = 0), (n = 2500), (s = 5500));
                              break;
                            case "listening":
                              ((i = 15 * $(-0.3, 0.3)),
                                (a = 9 * $(-0.25, 0.25)),
                                (n = 2200),
                                (s = 4200));
                              break;
                            case "thinking":
                              ((i = r() * $(0.5, 1) * 15),
                                (a = -(9 * $(0.4, 1))),
                                (n = 1500),
                                (s = 2800));
                              break;
                            case "searching":
                              ((i = r() * $(0.7, 1) * 15),
                                (a = 9 * $(-1, 1)),
                                (n = 550),
                                (s = 1150));
                              break;
                            case "working":
                              ((i = 15 * $(-0.4, 0.4)),
                                (a = 9 * $(0.4, 1)),
                                (n = 1200),
                                (s = 2400));
                              break;
                            case "excited":
                              ((i = 15 * $(-1, 1)),
                                (a = 9 * $(-1, 0.3)),
                                (n = 700),
                                (s = 1400));
                              break;
                            case "surprised":
                              ((i = 0), (a = 0), (n = 1600), (s = 2600));
                              break;
                            case "suspicious":
                              ((i = 15 * r()),
                                (a = 2.6999999999999997),
                                (n = 2200),
                                (s = 4200));
                              break;
                            case "angry":
                              ((i = 15 * $(-0.2, 0.2)),
                                (a = 1.8),
                                (n = 1800),
                                (s = 3200));
                              break;
                            case "drowsy":
                              ((i = 15 * $(-0.4, 0.4)),
                                (a = 9 * $(0.4, 1)),
                                (n = 2500),
                                (s = 4500));
                              break;
                            case "happy":
                              ((i = 15 * $(-0.7, 0.7)),
                                (a = -(9 * $(0, 0.6))),
                                (n = 1800),
                                (s = 3400));
                              break;
                            case "curious":
                              ((i = r() * $(0.6, 1) * 15),
                                (a = 9 * $(-1, 1)),
                                (n = 950),
                                (s = 1900));
                              break;
                            case "confused":
                              ((i = r() * $(0.5, 1) * 15),
                                (a = 9 * $(-0.6, 1)),
                                (n = 1100),
                                (s = 2300));
                              break;
                            case "bored":
                              ((i = r() * $(0.7, 1) * 15),
                                (a = 9 * $(0.4, 0.9)),
                                (n = 3e3),
                                (s = 6e3));
                              break;
                            case "proud":
                              ((i = 15 * $(-0.3, 0.3)),
                                (a = -(9 * $(0.3, 0.7))),
                                (n = 2600),
                                (s = 4600));
                              break;
                            case "shy":
                              ((i = r() * $(0.6, 1) * 15),
                                (a = 9 * $(0.5, 1)),
                                (n = 2e3),
                                (s = 4e3));
                              break;
                            case "sad":
                              ((i = 15 * $(-0.3, 0.3)),
                                (a = 9 * $(0.6, 1)),
                                (n = 2800),
                                (s = 5e3));
                              break;
                            case "laughing":
                              ((i = 15 * $(-0.5, 0.5)),
                                (a = -(9 * $(0.2, 0.6))),
                                (n = 800),
                                (s = 1700));
                              break;
                            case "scared":
                              ((i = r() * $(0.7, 1) * 15),
                                (a = 9 * $(-0.6, 0.6)),
                                (n = 450),
                                (s = 1050));
                              break;
                            case "playful":
                              ((i = r() * $(0.5, 1) * 15),
                                (a = -(9 * $(0, 0.6))),
                                (n = 900),
                                (s = 1800));
                              break;
                            case "notifying": {
                              let t = 0.72 > Math.random();
                              ((i = (t ? 0.45 : 0.1) * 15),
                                (a = -(9 * (t ? 0.3 : 0.05))),
                                (n = 1200),
                                (s = 2400));
                              break;
                            }
                            default:
                              ((i = 15 * $(-0.4, 0.4)), (a = 9 * $(-0.3, 0.3)));
                          }
                          ((c.t = i), (d.t = a), (p = t + $(n, s)));
                        }
                        if (
                          (("idle" === e ||
                            "happy" === e ||
                            "excited" === e ||
                            "curious" === e ||
                            "playful" === e) &&
                            t >= L &&
                            ((tx = t),
                            (tg = 0.5 > Math.random() ? 0 : 1),
                            (L = t + $(4500, 1e4))),
                          (eD = null),
                          (ew = 0),
                          (e_ = 0),
                          (eF = 0),
                          (ek = 0),
                          (ev = 0),
                          (eC = 0),
                          e$)
                        ) {
                          let e = (t - e$.t0) / 1e3,
                            { kind: r, dir: i, turns: a } = e$;
                          if ("spinDizzy" === r) {
                            let t = 0.55 + 0.16 * a;
                            if (e < t) {
                              let r = e / t;
                              eD = a * Math.PI * 2 * i * (r * r);
                            } else if (e < t + 1.5) {
                              let r = e - t,
                                a = Math.pow(1 - r / 1.5, 1.3);
                              ((ew = 17 * Math.sin(10 * r) * i * a),
                                (e_ = 10 * Math.cos(10 * r) * i * a),
                                (eF = 3 * Math.sin(20 * r) * a),
                                (x = 0.46 + 0.14 * Math.sin(21 * r)),
                                (g = 1.03));
                            } else e$ = null;
                          } else if ("spinWild" === r) {
                            let t = 2.3 - 0.3,
                              r = 2 * Math.PI,
                              n = (a * r + 0.5) / (0.15 + (2.3 - 0.3) + 0.3125);
                            if (e < 5.49) {
                              let s;
                              if (e < 0.24)
                                s =
                                  (-0.5 *
                                    (1 - Math.cos((e / 0.24) * Math.PI))) /
                                  2;
                              else if (e < 0.54) {
                                let t = e - 0.24;
                                s = -0.5 + (n * t * t) / 0.6;
                              } else
                                s =
                                  e < 2.54
                                    ? -0.5 + n * (0.15 + (e - 0.24 - 0.3))
                                    : e < 3.79
                                      ? -0.5 +
                                        n * (0.15 + t) +
                                        (1.25 *
                                          n *
                                          (1 -
                                            Math.pow(
                                              1 - (e - 0.24 - 2.3) / 1.25,
                                              4,
                                            ))) /
                                          4
                                      : a * r;
                              eD = s * i;
                              let l = 0;
                              if (e > 2.54) {
                                let t = Math.min((e - 0.24 - 2.3) / 1.25, 1);
                                ((l =
                                  t < 0.4 ? 0 : Math.pow((t - 0.4) / 0.6, 2)),
                                  e >= 3.79 &&
                                    (l = Math.pow(1 - (e - 3.79) / 1.7, 1.6)));
                              }
                              let o = Math.max(e - 0.24 - 2.3, 0);
                              ((ek = (s / (a * r)) * 1080 * i),
                                (ew = 11 * Math.sin(9.2 * o) * i * l),
                                (e_ = (Math.cos(9.2 * o) - 1) * 6 * i * l),
                                (eF = 2.6 * Math.sin(18.4 * o) * l),
                                (ev = 13 * Math.sin(11.5 * o) * i * l),
                                (eC = (Math.cos(9 * o) - 1) * 3.5 * l),
                                (x =
                                  1.14 - 0.44 * l + 0.1 * Math.sin(16 * o) * l),
                                (g = 1.12 - 0.09 * l));
                            } else e$ = null;
                          } else
                            "spinBounce" === r &&
                              (e < 0.7
                                ? (eD = a * Math.PI * 2 * i * P(e / 0.7))
                                : (eH(), (e$ = null)));
                        }
                        if (((eE = 0), em >= 0)) {
                          let e = (t - em) / 1e3;
                          if (e >= eA) em = -1;
                          else {
                            let t = 0,
                              r = 0;
                            for (; r < Z.length && !(e < t + Z[r].d); r++)
                              t += Z[r].d;
                            let { h: i, d: a } = Z[r],
                              n = (e - t) / a;
                            eE = -4 * i * n * (1 - n);
                          }
                        }
                        if ("waking" !== e && "sleeping" !== e && t >= tB) {
                          let r = m[e];
                          ((tK =
                            (tK + 1 + Math.floor($(0, r.length - 1))) %
                            r.length),
                            et(
                              r[tK],
                              "searching" === e || "excited" === e ? 10 : 6,
                            ),
                            (tB = t + $(...E[e])));
                        }
                        let b = w[e];
                        b && t >= tL && (eI(t), (tL = t + $(b[0], b[1])));
                        let f = null;
                        for (; tV.length && t >= tV[0].at;)
                          ((f = tV[0].v), tV.shift());
                        ((u.t = f ?? (tV.length ? u.t : x)), (h.t = g));
                      })(M),
                  Q.current &&
                    ((h.t = Math.max(h.t, 1.32)), (u.t = Math.max(u.t, 1.18))));
                let O = Math.max(1, Math.ceil(b / H)),
                  j = b / O;
                for (let t = 0; t < O; t++)
                  (C(i, ee, 1, j),
                    er && C(er, 6.2, 1, j),
                    C(n, 5, 0.9, j),
                    C(s, 3.5, 1, j),
                    C(l, 4, 1, j),
                    C(o, 10, 0.8, j),
                    C(u, 26, 1, j),
                    C(h, 9, 0.85, j),
                    C(tZ, 9, 0.55, j),
                    C(tY, 6, 1, j),
                    C(c, 13, 1, j),
                    C(d, 13, 1, j),
                    C(tw, 14, 1, j),
                    C(t_, 11, 1, j),
                    C(tp, 10, 1, j),
                    C(tD, 14, 1, j));
                (t && ((t_.x = 1), (tD.x = tD.t), (tw.x = tw.t)),
                  ((a) => {
                    let M = Math.min(Math.max(i.x, 0), 1),
                      p = 0,
                      b = !1;
                    (er &&
                      ((p = er.x),
                      (b = !0),
                      0.004 > Math.abs(er.t - er.x) &&
                        0.015 > Math.abs(er.v) &&
                        ((er = null), (eR = !1), (p = 0), (b = !1))),
                      (ea += (!!Q.current - ea) * eh(0.12)));
                    let y = [
                        (0, x.lerpRing)(e[0], r[0], M),
                        (0, x.lerpRing)(e[1], r[1], M),
                      ],
                      A = [(0, x.centroid)(y[0]), (0, x.centroid)(y[1])],
                      m = (A[0][0] + A[1][0]) / 2,
                      E = (A[0][1] + A[1][1]) / 2,
                      w = (x.HEAD_C - m) * 0.42 * ea,
                      _ = (x.HEAD_C - E) * 0.42 * ea,
                      F = tw.x > 0.001 || Math.abs(tD.t - tD.x) > 0.01;
                    null !== eD && ((p += eD), (b = !0));
                    let v = F ? tD.x : null;
                    v = b ? (v ?? 0) + p : v;
                    let C = g.SHAPES[ti.current];
                    if (ti.current !== tb) {
                      let e = P(D(tp.x, 0, 1)),
                        r = g.SHAPES[tb];
                      ((tf = e >= 1 ? r.ring : (0, x.lerpRing)(tf, r.ring, e)),
                        (ty = e >= 1 ? r.face : q(ty, r.face, e)),
                        (tA += (r.tiltScale - tA) * e),
                        (tm += (r.beltRadius - tm) * e),
                        (tb = ti.current),
                        (tp.x = 0),
                        (tp.v = 0),
                        (tp.t = 1),
                        (() => {
                          if (t) return;
                          ((eS = (eS + 1) % 5), (eR = !1));
                          let e = performance.now();
                          0 === eS
                            ? (eI(e), (l.v -= 55))
                            : 1 === eS
                              ? ((n.v += 34), eI(e))
                              : 2 === eS
                                ? ec(1)
                                : 3 === eS
                                  ? ((n.v -= 34), (l.v -= 30))
                                  : (eI(e), (l.v -= 40), (n.v += 18));
                        })());
                    }
                    let H = P(D(tp.x, 0, 1)),
                      $ = H < 0.999,
                      S = $ ? (0, x.lerpRing)(tf, C.ring, H) : C.ring,
                      R = $ ? q(ty, C.face, H) : C.face,
                      O = $ ? tA + (C.tiltScale - tA) * H : C.tiltScale;
                    ((tE = $ ? tm + (C.beltRadius - tm) * H : C.beltRadius),
                      "loading" === td.current &&
                        (tE += (52 - tE) * D(tw.x, 0, 1)));
                    let j = S[Math.round((7 * S.length) / 8) % S.length],
                      N = !1;
                    b && !$ && C.turnAt && ((S = C.turnAt(p)), (N = !0));
                    let B = C.top,
                      L = C.bottom;
                    if ($ || N)
                      for (let t of ((B = 1 / 0), (L = -1 / 0), S))
                        (t[1] < B && (B = t[1]), t[1] > L && (L = t[1]));
                    let G =
                        $ || N
                          ? (t) =>
                              ((t, e) => {
                                let r = -1 / 0,
                                  i = 1 / 0;
                                for (let a = 0; a < t.length; a++) {
                                  let n = t[a],
                                    s = t[(a + 1) % t.length];
                                  if (n[1] <= e == s[1] <= e) continue;
                                  let l =
                                    n[0] +
                                    ((s[0] - n[0]) * (e - n[1])) /
                                      (s[1] - n[1]);
                                  l <= x.HEAD_C
                                    ? l > r && (r = l)
                                    : l < i && (i = l);
                                }
                                return (
                                  (Y[0] = Number.isFinite(r) ? r : x.HEAD_C),
                                  (Y[1] = Number.isFinite(i) ? i : x.HEAD_C),
                                  Y
                                );
                              })(S, t)
                          : C.spanAt,
                      U = 0,
                      W = 0;
                    for (let t of y[0])
                      U = Math.max(U, Math.abs(t[0] - A[0][0]));
                    for (let t of y[1])
                      W = Math.max(W, Math.abs(t[0] - A[1][0]));
                    let Z = Math.abs(A[1][0] - A[0][0]) * R.sx,
                      tr = U + W > 0.5 ? D((Z - 5) / (U + W), 0.35, 4) : 4;
                    for (let t = 0; t < 2; t++) {
                      let e = ts.current[t];
                      if (!e) continue;
                      let [r, i] = A[t],
                        n = Math.max(u.x, 0.04);
                      if (t === tg && a < tx + 320) {
                        let t = (a - tx) / 320;
                        n = Math.max(
                          n * (t < 0.42 ? 1 - t / 0.42 : (t - 0.42) / 0.58),
                          0.04,
                        );
                      }
                      let s = y[t];
                      e.setAttribute("d", (0, x.ringPath)(s));
                      let l = x.HEAD_C + R.x,
                        o = (r - x.HEAD_C) * R.sx,
                        g = 1,
                        p = !0,
                        b = 1;
                      if (null !== v) {
                        let [t, e] = G(
                            D(
                              x.HEAD_C + R.y + (i - x.HEAD_C) * R.sy,
                              B + 2,
                              L - 2,
                            ),
                          ),
                          r = Math.max((e - t) / 2, 12);
                        l = (t + e) / 2;
                        let a = Math.asin(D(o / r, -1, 1)),
                          n = a + v,
                          s = Math.cos(n),
                          u = Math.max(Math.cos(a), 0.02);
                        ((p = s > 0.02),
                          (g = Math.max(s, 0.02) / u),
                          (o = r * Math.sin(n)),
                          (b = I(D(s / 0.5, 0, 1))));
                      }
                      let m = 1 + 0.07 * Math.sin(M * Math.PI),
                        E =
                          1.4 * Math.sin(42e-5 * a + t) +
                          0.5 * Math.sin(0.001 * a + 2 * t),
                        F = 0.9 * Math.sin(58e-5 * a + t),
                        k = K.current;
                      if (k && f.current) {
                        (!t9 || a - t7 > 200) &&
                          ((t9 = f.current.getBoundingClientRect()), (t7 = a));
                        let t = t9,
                          e = J.current ? -1 : 1;
                        ((ei.tx =
                          22 *
                          D(
                            (k.x - (t.left + t.width / 2)) / t.width,
                            -0.6,
                            0.6,
                          ) *
                          e),
                          (ei.ty =
                            14 *
                            D(
                              (k.y - (t.top + t.height / 2)) / t.height,
                              -0.6,
                              0.6,
                            )));
                      } else ((ei.tx = 0), (ei.ty = 0));
                      let C = eh(0.09);
                      ((ei.x += (ei.tx - ei.x) * C),
                        (ei.y += (ei.ty - ei.y) * C),
                        (E += ei.x * (1 - 0.6 * ea) + w),
                        (F += ei.y * (1 - 0.6 * ea) + _));
                      let H = k ? 0.2 : 1;
                      ((E += c.x * H + ev), (F += d.x * H + eC));
                      let $ = D(tZ.x, 0, 1);
                      ((E -= 10 * $), (F += 7 * $));
                      let P = Math.min(D(h.x, 0.2, 2) * R.eye, tr / m),
                        S = D(g * P * m, 0.02, 2.4),
                        O = D(n * P * m, 0.02, 2.4);
                      e.style.display = p && tw.x < 0.5 ? "" : "none";
                      let N = x.EYE_HALF * O + 2,
                        T = D(
                          x.HEAD_C + R.y + (i + F - x.HEAD_C) * R.sy,
                          B + N,
                          L - N,
                        ),
                        z = -1 / 0,
                        V = 1 / 0;
                      for (let t = 0; t < s.length; t += 2) {
                        let e = (s[t][0] - r) * S,
                          [a, n] = G(T + (s[t][1] - i) * O);
                        (a - e > z && (z = a - e), n - e < V && (V = n - e));
                      }
                      let X = l + o + E * R.sx,
                        q = z <= V ? D(X, z, V) : (z + V) / 2,
                        Y = q + (X - q) * (1 - b),
                        Z = T;
                      if (tZ.x > 0.01) {
                        let e = 20 * D(tZ.x, 0, 1.4),
                          r = Y - j[0],
                          i = Z - j[1],
                          a = Math.hypot(r, i) || 1,
                          n = r / a,
                          s = i / a,
                          l =
                            e +
                            Math.hypot(
                              (0 === t ? U : W) * S * n,
                              x.EYE_HALF * O * s,
                            ) +
                            5;
                        a < l && ((Y += n * (l - a)), (Z += s * (l - a)));
                      }
                      e.setAttribute(
                        "transform",
                        `translate(${Y.toFixed(2)} ${Z.toFixed(2)}) scale(${S.toFixed(4)} ${O.toFixed(4)}) translate(${(-r).toFixed(2)} ${(-i).toFixed(2)})`,
                      );
                    }
                    let tv = D(tw.x, 0, 1),
                      tC = D(t_.x, 0, 1),
                      tH = tC < 0.999 ? tk : null,
                      t$ = D(tv / 0.62, 0, 1),
                      tP = "pencil" === tF || "pencil" === tH,
                      tS = tP
                        ? tC >= 0.999
                          ? V(tF)
                          : (0, x.lerpRing)(V(tH), V(tF), P(tC))
                        : g.CIRCLE_RING;
                    if (
                      N ||
                      ef ||
                      t$ !== ep ||
                      H !== eb ||
                      ti.current !== ey ||
                      tP
                    ) {
                      let t =
                        t$ >= 1
                          ? tP
                            ? (0, g.ringOutline)(tS)
                            : z
                          : !(t$ <= 0) || $ || N
                            ? (0, g.ringOutline)(
                                t$ <= 0 ? S : (0, x.lerpRing)(S, tS, P(t$)),
                              )
                            : C.path;
                      (ta.current?.setAttribute("d", t),
                        tn.current?.setAttribute("d", t),
                        (ep = t$),
                        (eb = H),
                        (ef = N),
                        (ey = ti.current));
                    }
                    for (let t of th.current) t && (t.style.display = "none");
                    for (let t of tc.current) t && (t.style.display = "none");
                    for (let t of tl.current) t && (t.style.display = "none");
                    for (let t of tu.current) t && (t.style.display = "none");
                    let tR = (t) =>
                        null == t
                          ? 0
                          : t === tF
                            ? tv * tC
                            : t === tH
                              ? tv * (1 - tC)
                              : 0,
                      tI = {
                        dots: 22,
                        orbit: 19,
                        radar: 19,
                        progress: 19,
                        gather: 19,
                        wave: 16,
                        send: 20,
                        receive: 20,
                        dock: 20,
                        ball: 18,
                        whirl: 15,
                        pencil: 17,
                        bang: 13,
                        standby: 13,
                      },
                      tO = tF
                        ? tI[tF] * tC + (tH ? tI[tH] : tI[tF]) * (1 - tC)
                        : 19,
                      tj = ej(a, 1, tv),
                      tN = I(D((tv - 0.85) / 0.15, 0, 1)),
                      tB = "dots" === tF || "dots" === tH,
                      tL = tR("dots"),
                      tT = tB
                        ? 1 + (tj.pop - 1) * (tL / Math.max(tv, 0.001)) * tN
                        : 1,
                      tG = a - tM.current,
                      tz = tR("receive");
                    tz > 0.004 &&
                      (tT *=
                        1 +
                        0.11 *
                          Math.sin(
                            D(
                              (((((tG / 1700) % 1) + 1) % 1) - 0.58) / 0.34,
                              0,
                              1,
                            ) * Math.PI,
                          ) *
                          tz);
                    let tK = tR("send");
                    if (tK > 0.004) {
                      let t = (((tG / 1500) % 1) + 1) % 1;
                      tT *=
                        1 +
                        ((t < 0.18
                          ? -0.06 * Math.sin((t / 0.18) * Math.PI)
                          : 0) +
                          (t >= 0.18 && t < 0.42
                            ? 0.05 * Math.sin(((t - 0.18) / 0.24) * Math.PI)
                            : 0)) *
                          tK;
                    }
                    let tV = tR("bang");
                    tV > 0.004 &&
                      (tT *=
                        1 + 0.04 * Math.exp(-(((tG / 1e3) % 2.2) * 5.5)) * tV);
                    let tX = 0,
                      tU = 0,
                      tW = 0,
                      tJ = tR("pencil");
                    if (tJ > 0.004) {
                      let t = "writing" === td.current ? eU(a) : tQ;
                      ("writing" === td.current && (tQ = t),
                        (tX += t.x * tJ),
                        (tU += (t.y + 0.5 * t.wig) * tJ),
                        (tW += t.rot * tJ));
                    }
                    tV > 0.004 && (tU += 58 * tV);
                    let t2 = tR("whirl");
                    if (t2 > 0.004) {
                      let t = a / 1e3;
                      ((tX +=
                        (2 * Math.sin(0.9 * t) + 0.8 * Math.sin(1.7 * t)) * t2),
                        (tU +=
                          (2.4 * Math.sin(1.3 * t) + 1.2 * Math.sin(0.6 * t)) *
                          t2));
                    }
                    let t5 = tR("ball");
                    if (t5 > 0.004) {
                      let t,
                        e = 416 / 0.3844,
                        r = Math.sqrt(80 / (416 / 0.3844));
                      if ("bouncing" === td.current) {
                        let i = (a - tM.current) / 1e3;
                        if (i < r) t = 40 - 0.5 * e * i * i;
                        else {
                          let e = ((((i - r) / 0.62) % 1) + 1) % 1;
                          t = 208 * e * (1 - e);
                        }
                        ((t1 = t), (t0 = a));
                      } else {
                        let r = 0.5 * e,
                          i = Math.min(
                            (a - t0) / 1e3,
                            335.48387096774195 / 2 / r,
                          );
                        t = t1 + (335.48387096774195 / 2) * i - 0.5 * r * i * i;
                      }
                      tU += (40 - t) * t5;
                    }
                    let t3 = (tO / x.HEAD_C) * tT;
                    if (k.current) {
                      let t = 1 - tv,
                        e = s.x * t + e_ * t + tX * tv,
                        r =
                          (l.x + eE) * t + eF * t - tj.lift * tL * tN + tU * tv,
                        i = (n.x * t + ew * t) * O + ek * t + tW * tv,
                        u = t + t3 * tv,
                        h = o.x * t + t3 * tv;
                      k.current.setAttribute(
                        "transform",
                        `translate(${(x.HEAD_C + e).toFixed(2)} ${(x.HEAD_C + r).toFixed(2)}) rotate(${i.toFixed(2)}) scale(${u.toFixed(4)} ${h.toFixed(4)}) translate(${-x.HEAD_C} ${-x.HEAD_C})`,
                      );
                      let c = tR("standby"),
                        d = c > 0 ? (0.28 + 0.2 * Math.sin(0.0016 * a)) * c : 0;
                      k.current.style.opacity = (
                        (1 - (1 - tj.tone) * tL * tN) *
                        (1 - d)
                      ).toFixed(3);
                    }
                    if (((tZ.t = +("notifying" === td.current)), to.current)) {
                      let t = D(tZ.x, 0, 1.4);
                      t <= 0.01
                        ? (to.current.style.display = "none")
                        : ((to.current.style.display = ""),
                          (to.current.style.fill = tt.current),
                          to.current.setAttribute("cx", j[0].toFixed(1)),
                          to.current.setAttribute("cy", j[1].toFixed(1)),
                          to.current.setAttribute(
                            "r",
                            (20 * te.current * t).toFixed(2),
                          ));
                    }
                    for (let t of T) {
                      let e = tR(t);
                      e <= 0.004 ||
                        ("dots" === t
                          ? eN(e, a)
                          : "orbit" === t
                            ? eB(e, a)
                            : "radar" === t
                              ? eL(e, a, tO)
                              : "progress" === t
                                ? eT(e, a)
                                : "gather" === t
                                  ? eG(e, a)
                                  : "wave" === t
                                    ? ez(e, a)
                                    : "send" === t
                                      ? eK(e, a)
                                      : "receive" === t
                                        ? eV(e, a)
                                        : "dock" === t
                                          ? eX(e, a)
                                          : "pencil" === t
                                            ? eW(e, a)
                                            : "bang" === t
                                              ? eq(e, a)
                                              : "standby" === t && eY(e, a));
                    }
                    if (f.current) {
                      let t = 1 - I(D((el - 44) / 90, 0, 1)),
                        e = tF ? X[tF] : 1,
                        r = tH ? X[tH] : e,
                        i = 129.5 / (1 + (e * tC + r * (1 - tC) - 1) * tv * t),
                        a = `${(114.5 - i).toFixed(2)} ${(114.5 - i).toFixed(2)} ${(2 * i).toFixed(2)} ${(2 * i).toFixed(2)}`;
                      a !== eo &&
                        (f.current.setAttribute("viewBox", a), (eo = a));
                    }
                    let t4 = D(tY.x, 0, 1);
                    if (t4 > 0.01)
                      for (let t = 0; t < 2; t++) {
                        let e = th.current[3 + t];
                        if (!e) continue;
                        let r = 0.85 * tq + t * Math.PI,
                          i = 1.3 * C.radius,
                          a = 0.55 + 0.45 * D((Math.cos(r) + 1) / 2, 0, 1);
                        ((e.style.display = ""),
                          e.setAttribute(
                            "cx",
                            (x.HEAD_C + i * Math.sin(r)).toFixed(1),
                          ),
                          e.setAttribute(
                            "cy",
                            (x.HEAD_C - 0.38 * i * Math.cos(r) - 8).toFixed(1),
                          ),
                          e.setAttribute("r", (7.5 * a * t4).toFixed(2)),
                          e.setAttribute(
                            "opacity",
                            ((0.3 + 0.7 * a) * t4).toFixed(3),
                          ));
                      }
                  })(M),
                  ((t) => {
                    if (t - eu < 500 || !f.current) return;
                    eu = t;
                    let e = f.current.getBoundingClientRect().width;
                    e > 0 && ((es = D((340 / e) ** 0.7, 1, 2.6)), (el = e));
                  })(M));
                let N = "humming" === td.current,
                  B = "loading" === td.current;
                if (((tY.t = +!!N), (N || B) && !t)) {
                  let t = (M - tM.current) / 1e3,
                    e = B ? 3 : 1.6,
                    r =
                      t < 0.5
                        ? 7 * P(t / 0.5)
                        : t < 1.3
                          ? 7 + (e - 7) * P((t - 0.5) / 0.8)
                          : e + 0.3 * Math.sin(0.5 * t);
                  tq += r * b;
                }
                (er
                  ? (eg = er.x)
                  : null !== eD
                    ? (eg = eD)
                    : (N || B) && (eg = tq),
                  ex.update(M, b, {
                    spinAngle: eg,
                    sizeScale: es,
                    wideStyle: e$?.kind === "spinWild" || eR || N,
                  }),
                  (t8 = requestAnimationFrame(eZ)));
              };
            return (
              (tr.current = {
                spin: (t = 1) => ec(t),
                bounce: () => eH(),
                burst: () => ex.burst(22, 1.1, 0.3),
              }),
              (t8 = requestAnimationFrame(eZ)),
              () => cancelAnimationFrame(t8)
            );
          }, [b]));
        let tx = g.SHAPES[e];
        return (0, c.jsxs)("svg", {
          ref: f,
          className: i ? `grok-bot-mark ${i}` : "grok-bot-mark",
          style: {
            overflow: "visible",
            ...(r ? { width: r, height: r } : {}),
            ...(s ? { transform: "scaleX(-1)" } : {}),
          },
          "data-state": t,
          viewBox: "-15 -15 259 259",
          xmlns: "http://www.w3.org/2000/svg",
          children: [
            (0, c.jsx)("defs", {
              children: (0, c.jsx)("clipPath", {
                id: b,
                children: (0, c.jsx)("path", { ref: tn, d: tx.path }),
              }),
            }),
            (0, c.jsx)("g", { ref: O, "aria-hidden": "true" }),
            [0, 1].map((t) =>
              (0, c.jsx)(
                "path",
                {
                  className: "grok-bot-mark__head",
                  d: z,
                  style: { display: "none" },
                  ref: (e) => {
                    tl.current[t] = e;
                  },
                },
                t,
              ),
            ),
            [0, 1, 2, 3, 4].map((t) =>
              (0, c.jsx)(
                "circle",
                {
                  cx: x.HEAD_C,
                  cy: x.HEAD_C,
                  r: 0,
                  fill: "none",
                  style: { display: "none", stroke: "var(--fg)" },
                  ref: (e) => {
                    tc.current[t] = e;
                  },
                },
                `ring${t}`,
              ),
            ),
            [0, 1, 2, 3, 4].map((t) =>
              (0, c.jsx)(
                "circle",
                {
                  className: "grok-bot-mark__head",
                  cx: x.HEAD_C,
                  cy: x.HEAD_C,
                  r: 0,
                  style: { display: "none" },
                  ref: (e) => {
                    th.current[t] = e;
                  },
                },
                `part${t}`,
              ),
            ),
            [0, 1, 2].map((t) =>
              (0, c.jsx)(
                "path",
                {
                  style: { display: "none" },
                  ref: (e) => {
                    tu.current[t] = e;
                  },
                },
                `glyph${t}`,
              ),
            ),
            (0, c.jsxs)("g", {
              ref: k,
              children: [
                (0, c.jsx)("path", {
                  ref: ta,
                  className: "grok-bot-mark__head",
                  d: tx.path,
                }),
                (0, c.jsxs)("g", {
                  clipPath: `url(#${b})`,
                  children: [
                    (0, c.jsx)("path", {
                      className: "grok-bot-mark__eye",
                      ref: (t) => {
                        ts.current[0] = t;
                      },
                    }),
                    (0, c.jsx)("path", {
                      className: "grok-bot-mark__eye",
                      ref: (t) => {
                        ts.current[1] = t;
                      },
                    }),
                  ],
                }),
                (0, c.jsx)("circle", {
                  ref: to,
                  cx: x.HEAD_C,
                  cy: x.HEAD_C,
                  r: 0,
                  style: {
                    display: "none",
                    stroke: "var(--bg)",
                    strokeWidth: 10,
                  },
                }),
              ],
            }),
            (0, c.jsx)("g", { ref: B, "aria-hidden": "true" }),
          ],
        });
      });
    (t.s(["GrokBot", 0, J], 879257), t.i(879257));
    var Q = t.i(572231);
    t.s(
      [
        "GROK_BOT_SHAPES",
        () => g.GROK_BOT_SHAPES,
        "GROK_BOT_STATES",
        0,
        f,
        "GROK_BOT_STATE_GROUPS",
        0,
        b,
        "GrokBot",
        0,
        J,
        "GrokBotMark",
        () => Q.default,
      ],
      111605,
    );
  },
]);

//# debugId=c7f43e61-a6e3-101e-fef8-51439ab8c47d
