import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function Xg(n, o) {
  for (var i = 0; i < o.length; i++) {
    const l = o[i];
    if (typeof l != "string" && !Array.isArray(l)) {
      for (const u in l)
        if (u !== "default" && !(u in n)) {
          const d = Object.getOwnPropertyDescriptor(l, u);
          d &&
            Object.defineProperty(
              n,
              u,
              d.get ? d : { enumerable: !0, get: () => l[u] }
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(n, Symbol.toStringTag, { value: "Module" })
  );
}
(function () {
  const o = document.createElement("link").relList;
  if (o && o.supports && o.supports("modulepreload")) return;
  for (const u of document.querySelectorAll('link[rel="modulepreload"]')) l(u);
  new MutationObserver((u) => {
    for (const d of u)
      if (d.type === "childList")
        for (const f of d.addedNodes)
          f.tagName === "LINK" && f.rel === "modulepreload" && l(f);
  }).observe(document, { childList: !0, subtree: !0 });
  function i(u) {
    const d = {};
    return (
      u.integrity && (d.integrity = u.integrity),
      u.referrerPolicy && (d.referrerPolicy = u.referrerPolicy),
      u.crossOrigin === "use-credentials"
        ? (d.credentials = "include")
        : u.crossOrigin === "anonymous"
        ? (d.credentials = "omit")
        : (d.credentials = "same-origin"),
      d
    );
  }
  function l(u) {
    if (u.ep) return;
    u.ep = !0;
    const d = i(u);
    fetch(u.href, d);
  }
})();
function Xf(n) {
  return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, "default")
    ? n.default
    : n;
}
var Ra = { exports: {} },
  Wo = {},
  ja = { exports: {} },
  we = {};
var of;
function Zg() {
  if (of) return we;
  of = 1;
  var n = Symbol.for("react.element"),
    o = Symbol.for("react.portal"),
    i = Symbol.for("react.fragment"),
    l = Symbol.for("react.strict_mode"),
    u = Symbol.for("react.profiler"),
    d = Symbol.for("react.provider"),
    f = Symbol.for("react.context"),
    h = Symbol.for("react.forward_ref"),
    m = Symbol.for("react.suspense"),
    v = Symbol.for("react.memo"),
    y = Symbol.for("react.lazy"),
    w = Symbol.iterator;
  function N(T) {
    return T === null || typeof T != "object"
      ? null
      : ((T = (w && T[w]) || T["@@iterator"]),
        typeof T == "function" ? T : null);
  }
  var x = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    R = Object.assign,
    C = {};
  function E(T, A, Y) {
    (this.props = T),
      (this.context = A),
      (this.refs = C),
      (this.updater = Y || x);
  }
  (E.prototype.isReactComponent = {}),
    (E.prototype.setState = function (T, A) {
      if (typeof T != "object" && typeof T != "function" && T != null)
        throw Error(
          "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
        );
      this.updater.enqueueSetState(this, T, A, "setState");
    }),
    (E.prototype.forceUpdate = function (T) {
      this.updater.enqueueForceUpdate(this, T, "forceUpdate");
    });
  function M() {}
  M.prototype = E.prototype;
  function L(T, A, Y) {
    (this.props = T),
      (this.context = A),
      (this.refs = C),
      (this.updater = Y || x);
  }
  var D = (L.prototype = new M());
  (D.constructor = L), R(D, E.prototype), (D.isPureReactComponent = !0);
  var z = Array.isArray,
    H = Object.prototype.hasOwnProperty,
    K = { current: null },
    G = { key: !0, ref: !0, __self: !0, __source: !0 };
  function ce(T, A, Y) {
    var J,
      ue = {},
      ve = null,
      se = null;
    if (A != null)
      for (J in (A.ref !== void 0 && (se = A.ref),
      A.key !== void 0 && (ve = "" + A.key),
      A))
        H.call(A, J) && !G.hasOwnProperty(J) && (ue[J] = A[J]);
    var Se = arguments.length - 2;
    if (Se === 1) ue.children = Y;
    else if (1 < Se) {
      for (var Ee = Array(Se), Fe = 0; Fe < Se; Fe++)
        Ee[Fe] = arguments[Fe + 2];
      ue.children = Ee;
    }
    if (T && T.defaultProps)
      for (J in ((Se = T.defaultProps), Se))
        ue[J] === void 0 && (ue[J] = Se[J]);
    return {
      $$typeof: n,
      type: T,
      key: ve,
      ref: se,
      props: ue,
      _owner: K.current,
    };
  }
  function ge(T, A) {
    return {
      $$typeof: n,
      type: T.type,
      key: A,
      ref: T.ref,
      props: T.props,
      _owner: T._owner,
    };
  }
  function pe(T) {
    return typeof T == "object" && T !== null && T.$$typeof === n;
  }
  function xe(T) {
    var A = { "=": "=0", ":": "=2" };
    return (
      "$" +
      T.replace(/[=:]/g, function (Y) {
        return A[Y];
      })
    );
  }
  var Z = /\/+/g;
  function he(T, A) {
    return typeof T == "object" && T !== null && T.key != null
      ? xe("" + T.key)
      : A.toString(36);
  }
  function q(T, A, Y, J, ue) {
    var ve = typeof T;
    (ve === "undefined" || ve === "boolean") && (T = null);
    var se = !1;
    if (T === null) se = !0;
    else
      switch (ve) {
        case "string":
        case "number":
          se = !0;
          break;
        case "object":
          switch (T.$$typeof) {
            case n:
            case o:
              se = !0;
          }
      }
    if (se)
      return (
        (se = T),
        (ue = ue(se)),
        (T = J === "" ? "." + he(se, 0) : J),
        z(ue)
          ? ((Y = ""),
            T != null && (Y = T.replace(Z, "$&/") + "/"),
            q(ue, A, Y, "", function (Fe) {
              return Fe;
            }))
          : ue != null &&
            (pe(ue) &&
              (ue = ge(
                ue,
                Y +
                  (!ue.key || (se && se.key === ue.key)
                    ? ""
                    : ("" + ue.key).replace(Z, "$&/") + "/") +
                  T
              )),
            A.push(ue)),
        1
      );
    if (((se = 0), (J = J === "" ? "." : J + ":"), z(T)))
      for (var Se = 0; Se < T.length; Se++) {
        ve = T[Se];
        var Ee = J + he(ve, Se);
        se += q(ve, A, Y, Ee, ue);
      }
    else if (((Ee = N(T)), typeof Ee == "function"))
      for (T = Ee.call(T), Se = 0; !(ve = T.next()).done; )
        (ve = ve.value), (Ee = J + he(ve, Se++)), (se += q(ve, A, Y, Ee, ue));
    else if (ve === "object")
      throw (
        ((A = String(T)),
        Error(
          "Objects are not valid as a React child (found: " +
            (A === "[object Object]"
              ? "object with keys {" + Object.keys(T).join(", ") + "}"
              : A) +
            "). If you meant to render a collection of children, use an array instead."
        ))
      );
    return se;
  }
  function me(T, A, Y) {
    if (T == null) return T;
    var J = [],
      ue = 0;
    return (
      q(T, J, "", "", function (ve) {
        return A.call(Y, ve, ue++);
      }),
      J
    );
  }
  function ie(T) {
    if (T._status === -1) {
      var A = T._result;
      (A = A()),
        A.then(
          function (Y) {
            (T._status === 0 || T._status === -1) &&
              ((T._status = 1), (T._result = Y));
          },
          function (Y) {
            (T._status === 0 || T._status === -1) &&
              ((T._status = 2), (T._result = Y));
          }
        ),
        T._status === -1 && ((T._status = 0), (T._result = A));
    }
    if (T._status === 1) return T._result.default;
    throw T._result;
  }
  var re = { current: null },
    I = { transition: null },
    F = {
      ReactCurrentDispatcher: re,
      ReactCurrentBatchConfig: I,
      ReactCurrentOwner: K,
    };
  function V() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return (
    (we.Children = {
      map: me,
      forEach: function (T, A, Y) {
        me(
          T,
          function () {
            A.apply(this, arguments);
          },
          Y
        );
      },
      count: function (T) {
        var A = 0;
        return (
          me(T, function () {
            A++;
          }),
          A
        );
      },
      toArray: function (T) {
        return (
          me(T, function (A) {
            return A;
          }) || []
        );
      },
      only: function (T) {
        if (!pe(T))
          throw Error(
            "React.Children.only expected to receive a single React element child."
          );
        return T;
      },
    }),
    (we.Component = E),
    (we.Fragment = i),
    (we.Profiler = u),
    (we.PureComponent = L),
    (we.StrictMode = l),
    (we.Suspense = m),
    (we.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = F),
    (we.act = V),
    (we.cloneElement = function (T, A, Y) {
      if (T == null)
        throw Error(
          "React.cloneElement(...): The argument must be a React element, but you passed " +
            T +
            "."
        );
      var J = R({}, T.props),
        ue = T.key,
        ve = T.ref,
        se = T._owner;
      if (A != null) {
        if (
          (A.ref !== void 0 && ((ve = A.ref), (se = K.current)),
          A.key !== void 0 && (ue = "" + A.key),
          T.type && T.type.defaultProps)
        )
          var Se = T.type.defaultProps;
        for (Ee in A)
          H.call(A, Ee) &&
            !G.hasOwnProperty(Ee) &&
            (J[Ee] = A[Ee] === void 0 && Se !== void 0 ? Se[Ee] : A[Ee]);
      }
      var Ee = arguments.length - 2;
      if (Ee === 1) J.children = Y;
      else if (1 < Ee) {
        Se = Array(Ee);
        for (var Fe = 0; Fe < Ee; Fe++) Se[Fe] = arguments[Fe + 2];
        J.children = Se;
      }
      return {
        $$typeof: n,
        type: T.type,
        key: ue,
        ref: ve,
        props: J,
        _owner: se,
      };
    }),
    (we.createContext = function (T) {
      return (
        (T = {
          $$typeof: f,
          _currentValue: T,
          _currentValue2: T,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
          _defaultValue: null,
          _globalName: null,
        }),
        (T.Provider = { $$typeof: d, _context: T }),
        (T.Consumer = T)
      );
    }),
    (we.createElement = ce),
    (we.createFactory = function (T) {
      var A = ce.bind(null, T);
      return (A.type = T), A;
    }),
    (we.createRef = function () {
      return { current: null };
    }),
    (we.forwardRef = function (T) {
      return { $$typeof: h, render: T };
    }),
    (we.isValidElement = pe),
    (we.lazy = function (T) {
      return { $$typeof: y, _payload: { _status: -1, _result: T }, _init: ie };
    }),
    (we.memo = function (T, A) {
      return { $$typeof: v, type: T, compare: A === void 0 ? null : A };
    }),
    (we.startTransition = function (T) {
      var A = I.transition;
      I.transition = {};
      try {
        T();
      } finally {
        I.transition = A;
      }
    }),
    (we.unstable_act = V),
    (we.useCallback = function (T, A) {
      return re.current.useCallback(T, A);
    }),
    (we.useContext = function (T) {
      return re.current.useContext(T);
    }),
    (we.useDebugValue = function () {}),
    (we.useDeferredValue = function (T) {
      return re.current.useDeferredValue(T);
    }),
    (we.useEffect = function (T, A) {
      return re.current.useEffect(T, A);
    }),
    (we.useId = function () {
      return re.current.useId();
    }),
    (we.useImperativeHandle = function (T, A, Y) {
      return re.current.useImperativeHandle(T, A, Y);
    }),
    (we.useInsertionEffect = function (T, A) {
      return re.current.useInsertionEffect(T, A);
    }),
    (we.useLayoutEffect = function (T, A) {
      return re.current.useLayoutEffect(T, A);
    }),
    (we.useMemo = function (T, A) {
      return re.current.useMemo(T, A);
    }),
    (we.useReducer = function (T, A, Y) {
      return re.current.useReducer(T, A, Y);
    }),
    (we.useRef = function (T) {
      return re.current.useRef(T);
    }),
    (we.useState = function (T) {
      return re.current.useState(T);
    }),
    (we.useSyncExternalStore = function (T, A, Y) {
      return re.current.useSyncExternalStore(T, A, Y);
    }),
    (we.useTransition = function () {
      return re.current.useTransition();
    }),
    (we.version = "18.3.1"),
    we
  );
}
var sf;
function ru() {
  return sf || ((sf = 1), (ja.exports = Zg())), ja.exports;
}
var lf;
function Jg() {
  if (lf) return Wo;
  lf = 1;
  var n = ru(),
    o = Symbol.for("react.element"),
    i = Symbol.for("react.fragment"),
    l = Object.prototype.hasOwnProperty,
    u = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    d = { key: !0, ref: !0, __self: !0, __source: !0 };
  function f(h, m, v) {
    var y,
      w = {},
      N = null,
      x = null;
    v !== void 0 && (N = "" + v),
      m.key !== void 0 && (N = "" + m.key),
      m.ref !== void 0 && (x = m.ref);
    for (y in m) l.call(m, y) && !d.hasOwnProperty(y) && (w[y] = m[y]);
    if (h && h.defaultProps)
      for (y in ((m = h.defaultProps), m)) w[y] === void 0 && (w[y] = m[y]);
    return {
      $$typeof: o,
      type: h,
      key: N,
      ref: x,
      props: w,
      _owner: u.current,
    };
  }
  return (Wo.Fragment = i), (Wo.jsx = f), (Wo.jsxs = f), Wo;
}
var af;
function ev() {
  return af || ((af = 1), (Ra.exports = Jg())), Ra.exports;
}
var g = ev(),
  xs = {},
  Oa = { exports: {} },
  mt = {},
  _a = { exports: {} },
  Ma = {};
var uf;
function tv() {
  return (
    uf ||
      ((uf = 1),
      (function (n) {
        function o(I, F) {
          var V = I.length;
          I.push(F);
          e: for (; 0 < V; ) {
            var T = (V - 1) >>> 1,
              A = I[T];
            if (0 < u(A, F)) (I[T] = F), (I[V] = A), (V = T);
            else break e;
          }
        }
        function i(I) {
          return I.length === 0 ? null : I[0];
        }
        function l(I) {
          if (I.length === 0) return null;
          var F = I[0],
            V = I.pop();
          if (V !== F) {
            I[0] = V;
            e: for (var T = 0, A = I.length, Y = A >>> 1; T < Y; ) {
              var J = 2 * (T + 1) - 1,
                ue = I[J],
                ve = J + 1,
                se = I[ve];
              if (0 > u(ue, V))
                ve < A && 0 > u(se, ue)
                  ? ((I[T] = se), (I[ve] = V), (T = ve))
                  : ((I[T] = ue), (I[J] = V), (T = J));
              else if (ve < A && 0 > u(se, V))
                (I[T] = se), (I[ve] = V), (T = ve);
              else break e;
            }
          }
          return F;
        }
        function u(I, F) {
          var V = I.sortIndex - F.sortIndex;
          return V !== 0 ? V : I.id - F.id;
        }
        if (
          typeof performance == "object" &&
          typeof performance.now == "function"
        ) {
          var d = performance;
          n.unstable_now = function () {
            return d.now();
          };
        } else {
          var f = Date,
            h = f.now();
          n.unstable_now = function () {
            return f.now() - h;
          };
        }
        var m = [],
          v = [],
          y = 1,
          w = null,
          N = 3,
          x = !1,
          R = !1,
          C = !1,
          E = typeof setTimeout == "function" ? setTimeout : null,
          M = typeof clearTimeout == "function" ? clearTimeout : null,
          L = typeof setImmediate < "u" ? setImmediate : null;
        typeof navigator < "u" &&
          navigator.scheduling !== void 0 &&
          navigator.scheduling.isInputPending !== void 0 &&
          navigator.scheduling.isInputPending.bind(navigator.scheduling);
        function D(I) {
          for (var F = i(v); F !== null; ) {
            if (F.callback === null) l(v);
            else if (F.startTime <= I)
              l(v), (F.sortIndex = F.expirationTime), o(m, F);
            else break;
            F = i(v);
          }
        }
        function z(I) {
          if (((C = !1), D(I), !R))
            if (i(m) !== null) (R = !0), ie(H);
            else {
              var F = i(v);
              F !== null && re(z, F.startTime - I);
            }
        }
        function H(I, F) {
          (R = !1), C && ((C = !1), M(ce), (ce = -1)), (x = !0);
          var V = N;
          try {
            for (
              D(F), w = i(m);
              w !== null && (!(w.expirationTime > F) || (I && !xe()));

            ) {
              var T = w.callback;
              if (typeof T == "function") {
                (w.callback = null), (N = w.priorityLevel);
                var A = T(w.expirationTime <= F);
                (F = n.unstable_now()),
                  typeof A == "function"
                    ? (w.callback = A)
                    : w === i(m) && l(m),
                  D(F);
              } else l(m);
              w = i(m);
            }
            if (w !== null) var Y = !0;
            else {
              var J = i(v);
              J !== null && re(z, J.startTime - F), (Y = !1);
            }
            return Y;
          } finally {
            (w = null), (N = V), (x = !1);
          }
        }
        var K = !1,
          G = null,
          ce = -1,
          ge = 5,
          pe = -1;
        function xe() {
          return !(n.unstable_now() - pe < ge);
        }
        function Z() {
          if (G !== null) {
            var I = n.unstable_now();
            pe = I;
            var F = !0;
            try {
              F = G(!0, I);
            } finally {
              F ? he() : ((K = !1), (G = null));
            }
          } else K = !1;
        }
        var he;
        if (typeof L == "function")
          he = function () {
            L(Z);
          };
        else if (typeof MessageChannel < "u") {
          var q = new MessageChannel(),
            me = q.port2;
          (q.port1.onmessage = Z),
            (he = function () {
              me.postMessage(null);
            });
        } else
          he = function () {
            E(Z, 0);
          };
        function ie(I) {
          (G = I), K || ((K = !0), he());
        }
        function re(I, F) {
          ce = E(function () {
            I(n.unstable_now());
          }, F);
        }
        (n.unstable_IdlePriority = 5),
          (n.unstable_ImmediatePriority = 1),
          (n.unstable_LowPriority = 4),
          (n.unstable_NormalPriority = 3),
          (n.unstable_Profiling = null),
          (n.unstable_UserBlockingPriority = 2),
          (n.unstable_cancelCallback = function (I) {
            I.callback = null;
          }),
          (n.unstable_continueExecution = function () {
            R || x || ((R = !0), ie(H));
          }),
          (n.unstable_forceFrameRate = function (I) {
            0 > I || 125 < I
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
                )
              : (ge = 0 < I ? Math.floor(1e3 / I) : 5);
          }),
          (n.unstable_getCurrentPriorityLevel = function () {
            return N;
          }),
          (n.unstable_getFirstCallbackNode = function () {
            return i(m);
          }),
          (n.unstable_next = function (I) {
            switch (N) {
              case 1:
              case 2:
              case 3:
                var F = 3;
                break;
              default:
                F = N;
            }
            var V = N;
            N = F;
            try {
              return I();
            } finally {
              N = V;
            }
          }),
          (n.unstable_pauseExecution = function () {}),
          (n.unstable_requestPaint = function () {}),
          (n.unstable_runWithPriority = function (I, F) {
            switch (I) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                I = 3;
            }
            var V = N;
            N = I;
            try {
              return F();
            } finally {
              N = V;
            }
          }),
          (n.unstable_scheduleCallback = function (I, F, V) {
            var T = n.unstable_now();
            switch (
              (typeof V == "object" && V !== null
                ? ((V = V.delay),
                  (V = typeof V == "number" && 0 < V ? T + V : T))
                : (V = T),
              I)
            ) {
              case 1:
                var A = -1;
                break;
              case 2:
                A = 250;
                break;
              case 5:
                A = 1073741823;
                break;
              case 4:
                A = 1e4;
                break;
              default:
                A = 5e3;
            }
            return (
              (A = V + A),
              (I = {
                id: y++,
                callback: F,
                priorityLevel: I,
                startTime: V,
                expirationTime: A,
                sortIndex: -1,
              }),
              V > T
                ? ((I.sortIndex = V),
                  o(v, I),
                  i(m) === null &&
                    I === i(v) &&
                    (C ? (M(ce), (ce = -1)) : (C = !0), re(z, V - T)))
                : ((I.sortIndex = A), o(m, I), R || x || ((R = !0), ie(H))),
              I
            );
          }),
          (n.unstable_shouldYield = xe),
          (n.unstable_wrapCallback = function (I) {
            var F = N;
            return function () {
              var V = N;
              N = F;
              try {
                return I.apply(this, arguments);
              } finally {
                N = V;
              }
            };
          });
      })(Ma)),
    Ma
  );
}
var cf;
function nv() {
  return cf || ((cf = 1), (_a.exports = tv())), _a.exports;
}
var df;
function rv() {
  if (df) return mt;
  df = 1;
  var n = ru(),
    o = nv();
  function i(e) {
    for (
      var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e,
        r = 1;
      r < arguments.length;
      r++
    )
      t += "&args[]=" + encodeURIComponent(arguments[r]);
    return (
      "Minified React error #" +
      e +
      "; visit " +
      t +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  var l = new Set(),
    u = {};
  function d(e, t) {
    f(e, t), f(e + "Capture", t);
  }
  function f(e, t) {
    for (u[e] = t, e = 0; e < t.length; e++) l.add(t[e]);
  }
  var h = !(
      typeof window > "u" ||
      typeof window.document > "u" ||
      typeof window.document.createElement > "u"
    ),
    m = Object.prototype.hasOwnProperty,
    v =
      /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    y = {},
    w = {};
  function N(e) {
    return m.call(w, e)
      ? !0
      : m.call(y, e)
      ? !1
      : v.test(e)
      ? (w[e] = !0)
      : ((y[e] = !0), !1);
  }
  function x(e, t, r, s) {
    if (r !== null && r.type === 0) return !1;
    switch (typeof t) {
      case "function":
      case "symbol":
        return !0;
      case "boolean":
        return s
          ? !1
          : r !== null
          ? !r.acceptsBooleans
          : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
      default:
        return !1;
    }
  }
  function R(e, t, r, s) {
    if (t === null || typeof t > "u" || x(e, t, r, s)) return !0;
    if (s) return !1;
    if (r !== null)
      switch (r.type) {
        case 3:
          return !t;
        case 4:
          return t === !1;
        case 5:
          return isNaN(t);
        case 6:
          return isNaN(t) || 1 > t;
      }
    return !1;
  }
  function C(e, t, r, s, a, c, p) {
    (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
      (this.attributeName = s),
      (this.attributeNamespace = a),
      (this.mustUseProperty = r),
      (this.propertyName = e),
      (this.type = t),
      (this.sanitizeURL = c),
      (this.removeEmptyString = p);
  }
  var E = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
    .split(" ")
    .forEach(function (e) {
      E[e] = new C(e, 0, !1, e, null, !1, !1);
    }),
    [
      ["acceptCharset", "accept-charset"],
      ["className", "class"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
    ].forEach(function (e) {
      var t = e[0];
      E[t] = new C(t, 1, !1, e[1], null, !1, !1);
    }),
    ["contentEditable", "draggable", "spellCheck", "value"].forEach(function (
      e
    ) {
      E[e] = new C(e, 2, !1, e.toLowerCase(), null, !1, !1);
    }),
    [
      "autoReverse",
      "externalResourcesRequired",
      "focusable",
      "preserveAlpha",
    ].forEach(function (e) {
      E[e] = new C(e, 2, !1, e, null, !1, !1);
    }),
    "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
      .split(" ")
      .forEach(function (e) {
        E[e] = new C(e, 3, !1, e.toLowerCase(), null, !1, !1);
      }),
    ["checked", "multiple", "muted", "selected"].forEach(function (e) {
      E[e] = new C(e, 3, !0, e, null, !1, !1);
    }),
    ["capture", "download"].forEach(function (e) {
      E[e] = new C(e, 4, !1, e, null, !1, !1);
    }),
    ["cols", "rows", "size", "span"].forEach(function (e) {
      E[e] = new C(e, 6, !1, e, null, !1, !1);
    }),
    ["rowSpan", "start"].forEach(function (e) {
      E[e] = new C(e, 5, !1, e.toLowerCase(), null, !1, !1);
    });
  var M = /[\-:]([a-z])/g;
  function L(e) {
    return e[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
    .split(" ")
    .forEach(function (e) {
      var t = e.replace(M, L);
      E[t] = new C(t, 1, !1, e, null, !1, !1);
    }),
    "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
      .split(" ")
      .forEach(function (e) {
        var t = e.replace(M, L);
        E[t] = new C(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
      }),
    ["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
      var t = e.replace(M, L);
      E[t] = new C(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
    }),
    ["tabIndex", "crossOrigin"].forEach(function (e) {
      E[e] = new C(e, 1, !1, e.toLowerCase(), null, !1, !1);
    }),
    (E.xlinkHref = new C(
      "xlinkHref",
      1,
      !1,
      "xlink:href",
      "http://www.w3.org/1999/xlink",
      !0,
      !1
    )),
    ["src", "href", "action", "formAction"].forEach(function (e) {
      E[e] = new C(e, 1, !1, e.toLowerCase(), null, !0, !0);
    });
  function D(e, t, r, s) {
    var a = E.hasOwnProperty(t) ? E[t] : null;
    (a !== null
      ? a.type !== 0
      : s ||
        !(2 < t.length) ||
        (t[0] !== "o" && t[0] !== "O") ||
        (t[1] !== "n" && t[1] !== "N")) &&
      (R(t, r, a, s) && (r = null),
      s || a === null
        ? N(t) &&
          (r === null ? e.removeAttribute(t) : e.setAttribute(t, "" + r))
        : a.mustUseProperty
        ? (e[a.propertyName] = r === null ? (a.type === 3 ? !1 : "") : r)
        : ((t = a.attributeName),
          (s = a.attributeNamespace),
          r === null
            ? e.removeAttribute(t)
            : ((a = a.type),
              (r = a === 3 || (a === 4 && r === !0) ? "" : "" + r),
              s ? e.setAttributeNS(s, t, r) : e.setAttribute(t, r))));
  }
  var z = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    H = Symbol.for("react.element"),
    K = Symbol.for("react.portal"),
    G = Symbol.for("react.fragment"),
    ce = Symbol.for("react.strict_mode"),
    ge = Symbol.for("react.profiler"),
    pe = Symbol.for("react.provider"),
    xe = Symbol.for("react.context"),
    Z = Symbol.for("react.forward_ref"),
    he = Symbol.for("react.suspense"),
    q = Symbol.for("react.suspense_list"),
    me = Symbol.for("react.memo"),
    ie = Symbol.for("react.lazy"),
    re = Symbol.for("react.offscreen"),
    I = Symbol.iterator;
  function F(e) {
    return e === null || typeof e != "object"
      ? null
      : ((e = (I && e[I]) || e["@@iterator"]),
        typeof e == "function" ? e : null);
  }
  var V = Object.assign,
    T;
  function A(e) {
    if (T === void 0)
      try {
        throw Error();
      } catch (r) {
        var t = r.stack.trim().match(/\n( *(at )?)/);
        T = (t && t[1]) || "";
      }
    return (
      `
` +
      T +
      e
    );
  }
  var Y = !1;
  function J(e, t) {
    if (!e || Y) return "";
    Y = !0;
    var r = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (t)
        if (
          ((t = function () {
            throw Error();
          }),
          Object.defineProperty(t.prototype, "props", {
            set: function () {
              throw Error();
            },
          }),
          typeof Reflect == "object" && Reflect.construct)
        ) {
          try {
            Reflect.construct(t, []);
          } catch (_) {
            var s = _;
          }
          Reflect.construct(e, [], t);
        } else {
          try {
            t.call();
          } catch (_) {
            s = _;
          }
          e.call(t.prototype);
        }
      else {
        try {
          throw Error();
        } catch (_) {
          s = _;
        }
        e();
      }
    } catch (_) {
      if (_ && s && typeof _.stack == "string") {
        for (
          var a = _.stack.split(`
`),
            c = s.stack.split(`
`),
            p = a.length - 1,
            b = c.length - 1;
          1 <= p && 0 <= b && a[p] !== c[b];

        )
          b--;
        for (; 1 <= p && 0 <= b; p--, b--)
          if (a[p] !== c[b]) {
            if (p !== 1 || b !== 1)
              do
                if ((p--, b--, 0 > b || a[p] !== c[b])) {
                  var k =
                    `
` + a[p].replace(" at new ", " at ");
                  return (
                    e.displayName &&
                      k.includes("<anonymous>") &&
                      (k = k.replace("<anonymous>", e.displayName)),
                    k
                  );
                }
              while (1 <= p && 0 <= b);
            break;
          }
      }
    } finally {
      (Y = !1), (Error.prepareStackTrace = r);
    }
    return (e = e ? e.displayName || e.name : "") ? A(e) : "";
  }
  function ue(e) {
    switch (e.tag) {
      case 5:
        return A(e.type);
      case 16:
        return A("Lazy");
      case 13:
        return A("Suspense");
      case 19:
        return A("SuspenseList");
      case 0:
      case 2:
      case 15:
        return (e = J(e.type, !1)), e;
      case 11:
        return (e = J(e.type.render, !1)), e;
      case 1:
        return (e = J(e.type, !0)), e;
      default:
        return "";
    }
  }
  function ve(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case G:
        return "Fragment";
      case K:
        return "Portal";
      case ge:
        return "Profiler";
      case ce:
        return "StrictMode";
      case he:
        return "Suspense";
      case q:
        return "SuspenseList";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case xe:
          return (e.displayName || "Context") + ".Consumer";
        case pe:
          return (e._context.displayName || "Context") + ".Provider";
        case Z:
          var t = e.render;
          return (
            (e = e.displayName),
            e ||
              ((e = t.displayName || t.name || ""),
              (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
            e
          );
        case me:
          return (
            (t = e.displayName || null), t !== null ? t : ve(e.type) || "Memo"
          );
        case ie:
          (t = e._payload), (e = e._init);
          try {
            return ve(e(t));
          } catch {}
      }
    return null;
  }
  function se(e) {
    var t = e.type;
    switch (e.tag) {
      case 24:
        return "Cache";
      case 9:
        return (t.displayName || "Context") + ".Consumer";
      case 10:
        return (t._context.displayName || "Context") + ".Provider";
      case 18:
        return "DehydratedFragment";
      case 11:
        return (
          (e = t.render),
          (e = e.displayName || e.name || ""),
          t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
        );
      case 7:
        return "Fragment";
      case 5:
        return t;
      case 4:
        return "Portal";
      case 3:
        return "Root";
      case 6:
        return "Text";
      case 16:
        return ve(t);
      case 8:
        return t === ce ? "StrictMode" : "Mode";
      case 22:
        return "Offscreen";
      case 12:
        return "Profiler";
      case 21:
        return "Scope";
      case 13:
        return "Suspense";
      case 19:
        return "SuspenseList";
      case 25:
        return "TracingMarker";
      case 1:
      case 0:
      case 17:
      case 2:
      case 14:
      case 15:
        if (typeof t == "function") return t.displayName || t.name || null;
        if (typeof t == "string") return t;
    }
    return null;
  }
  function Se(e) {
    switch (typeof e) {
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return e;
      case "object":
        return e;
      default:
        return "";
    }
  }
  function Ee(e) {
    var t = e.type;
    return (
      (e = e.nodeName) &&
      e.toLowerCase() === "input" &&
      (t === "checkbox" || t === "radio")
    );
  }
  function Fe(e) {
    var t = Ee(e) ? "checked" : "value",
      r = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
      s = "" + e[t];
    if (
      !e.hasOwnProperty(t) &&
      typeof r < "u" &&
      typeof r.get == "function" &&
      typeof r.set == "function"
    ) {
      var a = r.get,
        c = r.set;
      return (
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function () {
            return a.call(this);
          },
          set: function (p) {
            (s = "" + p), c.call(this, p);
          },
        }),
        Object.defineProperty(e, t, { enumerable: r.enumerable }),
        {
          getValue: function () {
            return s;
          },
          setValue: function (p) {
            s = "" + p;
          },
          stopTracking: function () {
            (e._valueTracker = null), delete e[t];
          },
        }
      );
    }
  }
  function Ct(e) {
    e._valueTracker || (e._valueTracker = Fe(e));
  }
  function Cn(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var r = t.getValue(),
      s = "";
    return (
      e && (s = Ee(e) ? (e.checked ? "true" : "false") : e.value),
      (e = s),
      e !== r ? (t.setValue(e), !0) : !1
    );
  }
  function kt(e) {
    if (
      ((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u")
    )
      return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  function oo(e, t) {
    var r = t.checked;
    return V({}, t, {
      defaultChecked: void 0,
      defaultValue: void 0,
      value: void 0,
      checked: r ?? e._wrapperState.initialChecked,
    });
  }
  function ii(e, t) {
    var r = t.defaultValue == null ? "" : t.defaultValue,
      s = t.checked != null ? t.checked : t.defaultChecked;
    (r = Se(t.value != null ? t.value : r)),
      (e._wrapperState = {
        initialChecked: s,
        initialValue: r,
        controlled:
          t.type === "checkbox" || t.type === "radio"
            ? t.checked != null
            : t.value != null,
      });
  }
  function io(e, t) {
    (t = t.checked), t != null && D(e, "checked", t, !1);
  }
  function so(e, t) {
    io(e, t);
    var r = Se(t.value),
      s = t.type;
    if (r != null)
      s === "number"
        ? ((r === 0 && e.value === "") || e.value != r) && (e.value = "" + r)
        : e.value !== "" + r && (e.value = "" + r);
    else if (s === "submit" || s === "reset") {
      e.removeAttribute("value");
      return;
    }
    t.hasOwnProperty("value")
      ? lo(e, t.type, r)
      : t.hasOwnProperty("defaultValue") && lo(e, t.type, Se(t.defaultValue)),
      t.checked == null &&
        t.defaultChecked != null &&
        (e.defaultChecked = !!t.defaultChecked);
  }
  function yr(e, t, r) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
      var s = t.type;
      if (
        !(
          (s !== "submit" && s !== "reset") ||
          (t.value !== void 0 && t.value !== null)
        )
      )
        return;
      (t = "" + e._wrapperState.initialValue),
        r || t === e.value || (e.value = t),
        (e.defaultValue = t);
    }
    (r = e.name),
      r !== "" && (e.name = ""),
      (e.defaultChecked = !!e._wrapperState.initialChecked),
      r !== "" && (e.name = r);
  }
  function lo(e, t, r) {
    (t !== "number" || kt(e.ownerDocument) !== e) &&
      (r == null
        ? (e.defaultValue = "" + e._wrapperState.initialValue)
        : e.defaultValue !== "" + r && (e.defaultValue = "" + r));
  }
  var kn = Array.isArray;
  function Pt(e, t, r, s) {
    if (((e = e.options), t)) {
      t = {};
      for (var a = 0; a < r.length; a++) t["$" + r[a]] = !0;
      for (r = 0; r < e.length; r++)
        (a = t.hasOwnProperty("$" + e[r].value)),
          e[r].selected !== a && (e[r].selected = a),
          a && s && (e[r].defaultSelected = !0);
    } else {
      for (r = "" + Se(r), t = null, a = 0; a < e.length; a++) {
        if (e[a].value === r) {
          (e[a].selected = !0), s && (e[a].defaultSelected = !0);
          return;
        }
        t !== null || e[a].disabled || (t = e[a]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function xr(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(i(91));
    return V({}, t, {
      value: void 0,
      defaultValue: void 0,
      children: "" + e._wrapperState.initialValue,
    });
  }
  function qt(e, t) {
    var r = t.value;
    if (r == null) {
      if (((r = t.children), (t = t.defaultValue), r != null)) {
        if (t != null) throw Error(i(92));
        if (kn(r)) {
          if (1 < r.length) throw Error(i(93));
          r = r[0];
        }
        t = r;
      }
      t == null && (t = ""), (r = t);
    }
    e._wrapperState = { initialValue: Se(r) };
  }
  function si(e, t) {
    var r = Se(t.value),
      s = Se(t.defaultValue);
    r != null &&
      ((r = "" + r),
      r !== e.value && (e.value = r),
      t.defaultValue == null && e.defaultValue !== r && (e.defaultValue = r)),
      s != null && (e.defaultValue = "" + s);
  }
  function li(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue &&
      t !== "" &&
      t !== null &&
      (e.value = t);
  }
  function rt(e) {
    switch (e) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function Gt(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml"
      ? rt(t)
      : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
      ? "http://www.w3.org/1999/xhtml"
      : e;
  }
  var wr,
    ai = (function (e) {
      return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
        ? function (t, r, s, a) {
            MSApp.execUnsafeLocalFunction(function () {
              return e(t, r, s, a);
            });
          }
        : e;
    })(function (e, t) {
      if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
        e.innerHTML = t;
      else {
        for (
          wr = wr || document.createElement("div"),
            wr.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
            t = wr.firstChild;
          e.firstChild;

        )
          e.removeChild(e.firstChild);
        for (; t.firstChild; ) e.appendChild(t.firstChild);
      }
    });
  function Yt(e, t) {
    if (t) {
      var r = e.firstChild;
      if (r && r === e.lastChild && r.nodeType === 3) {
        r.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var tr = {
      animationIterationCount: !0,
      aspectRatio: !0,
      borderImageOutset: !0,
      borderImageSlice: !0,
      borderImageWidth: !0,
      boxFlex: !0,
      boxFlexGroup: !0,
      boxOrdinalGroup: !0,
      columnCount: !0,
      columns: !0,
      flex: !0,
      flexGrow: !0,
      flexPositive: !0,
      flexShrink: !0,
      flexNegative: !0,
      flexOrder: !0,
      gridArea: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowSpan: !0,
      gridRowStart: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnSpan: !0,
      gridColumnStart: !0,
      fontWeight: !0,
      lineClamp: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      tabSize: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
      fillOpacity: !0,
      floodOpacity: !0,
      stopOpacity: !0,
      strokeDasharray: !0,
      strokeDashoffset: !0,
      strokeMiterlimit: !0,
      strokeOpacity: !0,
      strokeWidth: !0,
    },
    ui = ["Webkit", "ms", "Moz", "O"];
  Object.keys(tr).forEach(function (e) {
    ui.forEach(function (t) {
      (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (tr[t] = tr[e]);
    });
  });
  function Sr(e, t, r) {
    return t == null || typeof t == "boolean" || t === ""
      ? ""
      : r || typeof t != "number" || t === 0 || (tr.hasOwnProperty(e) && tr[e])
      ? ("" + t).trim()
      : t + "px";
  }
  function cn(e, t) {
    e = e.style;
    for (var r in t)
      if (t.hasOwnProperty(r)) {
        var s = r.indexOf("--") === 0,
          a = Sr(r, t[r], s);
        r === "float" && (r = "cssFloat"), s ? e.setProperty(r, a) : (e[r] = a);
      }
  }
  var ci = V(
    { menuitem: !0 },
    {
      area: !0,
      base: !0,
      br: !0,
      col: !0,
      embed: !0,
      hr: !0,
      img: !0,
      input: !0,
      keygen: !0,
      link: !0,
      meta: !0,
      param: !0,
      source: !0,
      track: !0,
      wbr: !0,
    }
  );
  function Xt(e, t) {
    if (t) {
      if (ci[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
        throw Error(i(137, e));
      if (t.dangerouslySetInnerHTML != null) {
        if (t.children != null) throw Error(i(60));
        if (
          typeof t.dangerouslySetInnerHTML != "object" ||
          !("__html" in t.dangerouslySetInnerHTML)
        )
          throw Error(i(61));
      }
      if (t.style != null && typeof t.style != "object") throw Error(i(62));
    }
  }
  function ao(e, t) {
    if (e.indexOf("-") === -1) return typeof t.is == "string";
    switch (e) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var uo = null;
  function br(e) {
    return (
      (e = e.target || e.srcElement || window),
      e.correspondingUseElement && (e = e.correspondingUseElement),
      e.nodeType === 3 ? e.parentNode : e
    );
  }
  var Er = null,
    Pn = null,
    Zt = null;
  function Mt(e) {
    if ((e = jo(e))) {
      if (typeof Er != "function") throw Error(i(280));
      var t = e.stateNode;
      t && ((t = Ai(t)), Er(e.stateNode, e.type, t));
    }
  }
  function di(e) {
    Pn ? (Zt ? Zt.push(e) : (Zt = [e])) : (Pn = e);
  }
  function fe() {
    if (Pn) {
      var e = Pn,
        t = Zt;
      if (((Zt = Pn = null), Mt(e), t)) for (e = 0; e < t.length; e++) Mt(t[e]);
    }
  }
  function ke(e, t) {
    return e(t);
  }
  function Ne() {}
  var ot = !1;
  function at(e, t, r) {
    if (ot) return e(t, r);
    ot = !0;
    try {
      return ke(e, t, r);
    } finally {
      (ot = !1), (Pn !== null || Zt !== null) && (Ne(), fe());
    }
  }
  function ut(e, t) {
    var r = e.stateNode;
    if (r === null) return null;
    var s = Ai(r);
    if (s === null) return null;
    r = s[t];
    e: switch (t) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (s = !s.disabled) ||
          ((e = e.type),
          (s = !(
            e === "button" ||
            e === "input" ||
            e === "select" ||
            e === "textarea"
          ))),
          (e = !s);
        break e;
      default:
        e = !1;
    }
    if (e) return null;
    if (r && typeof r != "function") throw Error(i(231, t, typeof r));
    return r;
  }
  var At = !1;
  if (h)
    try {
      var qe = {};
      Object.defineProperty(qe, "passive", {
        get: function () {
          At = !0;
        },
      }),
        window.addEventListener("test", qe, qe),
        window.removeEventListener("test", qe, qe);
    } catch {
      At = !1;
    }
  function Jt(e, t, r, s, a, c, p, b, k) {
    var _ = Array.prototype.slice.call(arguments, 3);
    try {
      t.apply(r, _);
    } catch (B) {
      this.onError(B);
    }
  }
  var co = !1,
    fi = null,
    pi = !1,
    qs = null,
    om = {
      onError: function (e) {
        (co = !0), (fi = e);
      },
    };
  function im(e, t, r, s, a, c, p, b, k) {
    (co = !1), (fi = null), Jt.apply(om, arguments);
  }
  function sm(e, t, r, s, a, c, p, b, k) {
    if ((im.apply(this, arguments), co)) {
      if (co) {
        var _ = fi;
        (co = !1), (fi = null);
      } else throw Error(i(198));
      pi || ((pi = !0), (qs = _));
    }
  }
  function nr(e) {
    var t = e,
      r = e;
    if (e.alternate) for (; t.return; ) t = t.return;
    else {
      e = t;
      do (t = e), (t.flags & 4098) !== 0 && (r = t.return), (e = t.return);
      while (e);
    }
    return t.tag === 3 ? r : null;
  }
  function Nu(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if (
        (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
        t !== null)
      )
        return t.dehydrated;
    }
    return null;
  }
  function Tu(e) {
    if (nr(e) !== e) throw Error(i(188));
  }
  function lm(e) {
    var t = e.alternate;
    if (!t) {
      if (((t = nr(e)), t === null)) throw Error(i(188));
      return t !== e ? null : e;
    }
    for (var r = e, s = t; ; ) {
      var a = r.return;
      if (a === null) break;
      var c = a.alternate;
      if (c === null) {
        if (((s = a.return), s !== null)) {
          r = s;
          continue;
        }
        break;
      }
      if (a.child === c.child) {
        for (c = a.child; c; ) {
          if (c === r) return Tu(a), e;
          if (c === s) return Tu(a), t;
          c = c.sibling;
        }
        throw Error(i(188));
      }
      if (r.return !== s.return) (r = a), (s = c);
      else {
        for (var p = !1, b = a.child; b; ) {
          if (b === r) {
            (p = !0), (r = a), (s = c);
            break;
          }
          if (b === s) {
            (p = !0), (s = a), (r = c);
            break;
          }
          b = b.sibling;
        }
        if (!p) {
          for (b = c.child; b; ) {
            if (b === r) {
              (p = !0), (r = c), (s = a);
              break;
            }
            if (b === s) {
              (p = !0), (s = c), (r = a);
              break;
            }
            b = b.sibling;
          }
          if (!p) throw Error(i(189));
        }
      }
      if (r.alternate !== s) throw Error(i(190));
    }
    if (r.tag !== 3) throw Error(i(188));
    return r.stateNode.current === r ? e : t;
  }
  function Ru(e) {
    return (e = lm(e)), e !== null ? ju(e) : null;
  }
  function ju(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null; ) {
      var t = ju(e);
      if (t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  var Ou = o.unstable_scheduleCallback,
    _u = o.unstable_cancelCallback,
    am = o.unstable_shouldYield,
    um = o.unstable_requestPaint,
    De = o.unstable_now,
    cm = o.unstable_getCurrentPriorityLevel,
    Gs = o.unstable_ImmediatePriority,
    Mu = o.unstable_UserBlockingPriority,
    hi = o.unstable_NormalPriority,
    dm = o.unstable_LowPriority,
    Au = o.unstable_IdlePriority,
    mi = null,
    en = null;
  function fm(e) {
    if (en && typeof en.onCommitFiberRoot == "function")
      try {
        en.onCommitFiberRoot(mi, e, void 0, (e.current.flags & 128) === 128);
      } catch {}
  }
  var Lt = Math.clz32 ? Math.clz32 : mm,
    pm = Math.log,
    hm = Math.LN2;
  function mm(e) {
    return (e >>>= 0), e === 0 ? 32 : (31 - ((pm(e) / hm) | 0)) | 0;
  }
  var gi = 64,
    vi = 4194304;
  function fo(e) {
    switch (e & -e) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e & 4194240;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return e & 130023424;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 1073741824;
      default:
        return e;
    }
  }
  function yi(e, t) {
    var r = e.pendingLanes;
    if (r === 0) return 0;
    var s = 0,
      a = e.suspendedLanes,
      c = e.pingedLanes,
      p = r & 268435455;
    if (p !== 0) {
      var b = p & ~a;
      b !== 0 ? (s = fo(b)) : ((c &= p), c !== 0 && (s = fo(c)));
    } else (p = r & ~a), p !== 0 ? (s = fo(p)) : c !== 0 && (s = fo(c));
    if (s === 0) return 0;
    if (
      t !== 0 &&
      t !== s &&
      (t & a) === 0 &&
      ((a = s & -s), (c = t & -t), a >= c || (a === 16 && (c & 4194240) !== 0))
    )
      return t;
    if (((s & 4) !== 0 && (s |= r & 16), (t = e.entangledLanes), t !== 0))
      for (e = e.entanglements, t &= s; 0 < t; )
        (r = 31 - Lt(t)), (a = 1 << r), (s |= e[r]), (t &= ~a);
    return s;
  }
  function gm(e, t) {
    switch (e) {
      case 1:
      case 2:
      case 4:
        return t + 250;
      case 8:
      case 16:
      case 32:
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return -1;
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function vm(e, t) {
    for (
      var r = e.suspendedLanes,
        s = e.pingedLanes,
        a = e.expirationTimes,
        c = e.pendingLanes;
      0 < c;

    ) {
      var p = 31 - Lt(c),
        b = 1 << p,
        k = a[p];
      k === -1
        ? ((b & r) === 0 || (b & s) !== 0) && (a[p] = gm(b, t))
        : k <= t && (e.expiredLanes |= b),
        (c &= ~b);
    }
  }
  function Ys(e) {
    return (
      (e = e.pendingLanes & -1073741825),
      e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
    );
  }
  function Lu() {
    var e = gi;
    return (gi <<= 1), (gi & 4194240) === 0 && (gi = 64), e;
  }
  function Xs(e) {
    for (var t = [], r = 0; 31 > r; r++) t.push(e);
    return t;
  }
  function po(e, t, r) {
    (e.pendingLanes |= t),
      t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
      (e = e.eventTimes),
      (t = 31 - Lt(t)),
      (e[t] = r);
  }
  function ym(e, t) {
    var r = e.pendingLanes & ~t;
    (e.pendingLanes = t),
      (e.suspendedLanes = 0),
      (e.pingedLanes = 0),
      (e.expiredLanes &= t),
      (e.mutableReadLanes &= t),
      (e.entangledLanes &= t),
      (t = e.entanglements);
    var s = e.eventTimes;
    for (e = e.expirationTimes; 0 < r; ) {
      var a = 31 - Lt(r),
        c = 1 << a;
      (t[a] = 0), (s[a] = -1), (e[a] = -1), (r &= ~c);
    }
  }
  function Zs(e, t) {
    var r = (e.entangledLanes |= t);
    for (e = e.entanglements; r; ) {
      var s = 31 - Lt(r),
        a = 1 << s;
      (a & t) | (e[s] & t) && (e[s] |= t), (r &= ~a);
    }
  }
  var Pe = 0;
  function Du(e) {
    return (
      (e &= -e),
      1 < e ? (4 < e ? ((e & 268435455) !== 0 ? 16 : 536870912) : 4) : 1
    );
  }
  var Iu,
    Js,
    Fu,
    zu,
    Uu,
    el = !1,
    xi = [],
    Nn = null,
    Tn = null,
    Rn = null,
    ho = new Map(),
    mo = new Map(),
    jn = [],
    xm =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
        " "
      );
  function Bu(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        Nn = null;
        break;
      case "dragenter":
      case "dragleave":
        Tn = null;
        break;
      case "mouseover":
      case "mouseout":
        Rn = null;
        break;
      case "pointerover":
      case "pointerout":
        ho.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        mo.delete(t.pointerId);
    }
  }
  function go(e, t, r, s, a, c) {
    return e === null || e.nativeEvent !== c
      ? ((e = {
          blockedOn: t,
          domEventName: r,
          eventSystemFlags: s,
          nativeEvent: c,
          targetContainers: [a],
        }),
        t !== null && ((t = jo(t)), t !== null && Js(t)),
        e)
      : ((e.eventSystemFlags |= s),
        (t = e.targetContainers),
        a !== null && t.indexOf(a) === -1 && t.push(a),
        e);
  }
  function wm(e, t, r, s, a) {
    switch (t) {
      case "focusin":
        return (Nn = go(Nn, e, t, r, s, a)), !0;
      case "dragenter":
        return (Tn = go(Tn, e, t, r, s, a)), !0;
      case "mouseover":
        return (Rn = go(Rn, e, t, r, s, a)), !0;
      case "pointerover":
        var c = a.pointerId;
        return ho.set(c, go(ho.get(c) || null, e, t, r, s, a)), !0;
      case "gotpointercapture":
        return (
          (c = a.pointerId), mo.set(c, go(mo.get(c) || null, e, t, r, s, a)), !0
        );
    }
    return !1;
  }
  function $u(e) {
    var t = rr(e.target);
    if (t !== null) {
      var r = nr(t);
      if (r !== null) {
        if (((t = r.tag), t === 13)) {
          if (((t = Nu(r)), t !== null)) {
            (e.blockedOn = t),
              Uu(e.priority, function () {
                Fu(r);
              });
            return;
          }
        } else if (t === 3 && r.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = r.tag === 3 ? r.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function wi(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var r = nl(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
      if (r === null) {
        r = e.nativeEvent;
        var s = new r.constructor(r.type, r);
        (uo = s), r.target.dispatchEvent(s), (uo = null);
      } else return (t = jo(r)), t !== null && Js(t), (e.blockedOn = r), !1;
      t.shift();
    }
    return !0;
  }
  function Vu(e, t, r) {
    wi(e) && r.delete(t);
  }
  function Sm() {
    (el = !1),
      Nn !== null && wi(Nn) && (Nn = null),
      Tn !== null && wi(Tn) && (Tn = null),
      Rn !== null && wi(Rn) && (Rn = null),
      ho.forEach(Vu),
      mo.forEach(Vu);
  }
  function vo(e, t) {
    e.blockedOn === t &&
      ((e.blockedOn = null),
      el ||
        ((el = !0),
        o.unstable_scheduleCallback(o.unstable_NormalPriority, Sm)));
  }
  function yo(e) {
    function t(a) {
      return vo(a, e);
    }
    if (0 < xi.length) {
      vo(xi[0], e);
      for (var r = 1; r < xi.length; r++) {
        var s = xi[r];
        s.blockedOn === e && (s.blockedOn = null);
      }
    }
    for (
      Nn !== null && vo(Nn, e),
        Tn !== null && vo(Tn, e),
        Rn !== null && vo(Rn, e),
        ho.forEach(t),
        mo.forEach(t),
        r = 0;
      r < jn.length;
      r++
    )
      (s = jn[r]), s.blockedOn === e && (s.blockedOn = null);
    for (; 0 < jn.length && ((r = jn[0]), r.blockedOn === null); )
      $u(r), r.blockedOn === null && jn.shift();
  }
  var Cr = z.ReactCurrentBatchConfig,
    Si = !0;
  function bm(e, t, r, s) {
    var a = Pe,
      c = Cr.transition;
    Cr.transition = null;
    try {
      (Pe = 1), tl(e, t, r, s);
    } finally {
      (Pe = a), (Cr.transition = c);
    }
  }
  function Em(e, t, r, s) {
    var a = Pe,
      c = Cr.transition;
    Cr.transition = null;
    try {
      (Pe = 4), tl(e, t, r, s);
    } finally {
      (Pe = a), (Cr.transition = c);
    }
  }
  function tl(e, t, r, s) {
    if (Si) {
      var a = nl(e, t, r, s);
      if (a === null) xl(e, t, s, bi, r), Bu(e, s);
      else if (wm(a, e, t, r, s)) s.stopPropagation();
      else if ((Bu(e, s), t & 4 && -1 < xm.indexOf(e))) {
        for (; a !== null; ) {
          var c = jo(a);
          if (
            (c !== null && Iu(c),
            (c = nl(e, t, r, s)),
            c === null && xl(e, t, s, bi, r),
            c === a)
          )
            break;
          a = c;
        }
        a !== null && s.stopPropagation();
      } else xl(e, t, s, null, r);
    }
  }
  var bi = null;
  function nl(e, t, r, s) {
    if (((bi = null), (e = br(s)), (e = rr(e)), e !== null))
      if (((t = nr(e)), t === null)) e = null;
      else if (((r = t.tag), r === 13)) {
        if (((e = Nu(t)), e !== null)) return e;
        e = null;
      } else if (r === 3) {
        if (t.stateNode.current.memoizedState.isDehydrated)
          return t.tag === 3 ? t.stateNode.containerInfo : null;
        e = null;
      } else t !== e && (e = null);
    return (bi = e), null;
  }
  function Hu(e) {
    switch (e) {
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 1;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "toggle":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 4;
      case "message":
        switch (cm()) {
          case Gs:
            return 1;
          case Mu:
            return 4;
          case hi:
          case dm:
            return 16;
          case Au:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var On = null,
    rl = null,
    Ei = null;
  function Wu() {
    if (Ei) return Ei;
    var e,
      t = rl,
      r = t.length,
      s,
      a = "value" in On ? On.value : On.textContent,
      c = a.length;
    for (e = 0; e < r && t[e] === a[e]; e++);
    var p = r - e;
    for (s = 1; s <= p && t[r - s] === a[c - s]; s++);
    return (Ei = a.slice(e, 1 < s ? 1 - s : void 0));
  }
  function Ci(e) {
    var t = e.keyCode;
    return (
      "charCode" in e
        ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
        : (e = t),
      e === 10 && (e = 13),
      32 <= e || e === 13 ? e : 0
    );
  }
  function ki() {
    return !0;
  }
  function Qu() {
    return !1;
  }
  function yt(e) {
    function t(r, s, a, c, p) {
      (this._reactName = r),
        (this._targetInst = a),
        (this.type = s),
        (this.nativeEvent = c),
        (this.target = p),
        (this.currentTarget = null);
      for (var b in e)
        e.hasOwnProperty(b) && ((r = e[b]), (this[b] = r ? r(c) : c[b]));
      return (
        (this.isDefaultPrevented = (
          c.defaultPrevented != null ? c.defaultPrevented : c.returnValue === !1
        )
          ? ki
          : Qu),
        (this.isPropagationStopped = Qu),
        this
      );
    }
    return (
      V(t.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var r = this.nativeEvent;
          r &&
            (r.preventDefault
              ? r.preventDefault()
              : typeof r.returnValue != "unknown" && (r.returnValue = !1),
            (this.isDefaultPrevented = ki));
        },
        stopPropagation: function () {
          var r = this.nativeEvent;
          r &&
            (r.stopPropagation
              ? r.stopPropagation()
              : typeof r.cancelBubble != "unknown" && (r.cancelBubble = !0),
            (this.isPropagationStopped = ki));
        },
        persist: function () {},
        isPersistent: ki,
      }),
      t
    );
  }
  var kr = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    ol = yt(kr),
    xo = V({}, kr, { view: 0, detail: 0 }),
    Cm = yt(xo),
    il,
    sl,
    wo,
    Pi = V({}, xo, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: al,
      button: 0,
      buttons: 0,
      relatedTarget: function (e) {
        return e.relatedTarget === void 0
          ? e.fromElement === e.srcElement
            ? e.toElement
            : e.fromElement
          : e.relatedTarget;
      },
      movementX: function (e) {
        return "movementX" in e
          ? e.movementX
          : (e !== wo &&
              (wo && e.type === "mousemove"
                ? ((il = e.screenX - wo.screenX), (sl = e.screenY - wo.screenY))
                : (sl = il = 0),
              (wo = e)),
            il);
      },
      movementY: function (e) {
        return "movementY" in e ? e.movementY : sl;
      },
    }),
    Ku = yt(Pi),
    km = V({}, Pi, { dataTransfer: 0 }),
    Pm = yt(km),
    Nm = V({}, xo, { relatedTarget: 0 }),
    ll = yt(Nm),
    Tm = V({}, kr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Rm = yt(Tm),
    jm = V({}, kr, {
      clipboardData: function (e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      },
    }),
    Om = yt(jm),
    _m = V({}, kr, { data: 0 }),
    qu = yt(_m),
    Mm = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified",
    },
    Am = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta",
    },
    Lm = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey",
    };
  function Dm(e) {
    var t = this.nativeEvent;
    return t.getModifierState
      ? t.getModifierState(e)
      : (e = Lm[e])
      ? !!t[e]
      : !1;
  }
  function al() {
    return Dm;
  }
  var Im = V({}, xo, {
      key: function (e) {
        if (e.key) {
          var t = Mm[e.key] || e.key;
          if (t !== "Unidentified") return t;
        }
        return e.type === "keypress"
          ? ((e = Ci(e)), e === 13 ? "Enter" : String.fromCharCode(e))
          : e.type === "keydown" || e.type === "keyup"
          ? Am[e.keyCode] || "Unidentified"
          : "";
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: al,
      charCode: function (e) {
        return e.type === "keypress" ? Ci(e) : 0;
      },
      keyCode: function (e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function (e) {
        return e.type === "keypress"
          ? Ci(e)
          : e.type === "keydown" || e.type === "keyup"
          ? e.keyCode
          : 0;
      },
    }),
    Fm = yt(Im),
    zm = V({}, Pi, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0,
    }),
    Gu = yt(zm),
    Um = V({}, xo, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: al,
    }),
    Bm = yt(Um),
    $m = V({}, kr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Vm = yt($m),
    Hm = V({}, Pi, {
      deltaX: function (e) {
        return "deltaX" in e
          ? e.deltaX
          : "wheelDeltaX" in e
          ? -e.wheelDeltaX
          : 0;
      },
      deltaY: function (e) {
        return "deltaY" in e
          ? e.deltaY
          : "wheelDeltaY" in e
          ? -e.wheelDeltaY
          : "wheelDelta" in e
          ? -e.wheelDelta
          : 0;
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    Wm = yt(Hm),
    Qm = [9, 13, 27, 32],
    ul = h && "CompositionEvent" in window,
    So = null;
  h && "documentMode" in document && (So = document.documentMode);
  var Km = h && "TextEvent" in window && !So,
    Yu = h && (!ul || (So && 8 < So && 11 >= So)),
    Xu = " ",
    Zu = !1;
  function Ju(e, t) {
    switch (e) {
      case "keyup":
        return Qm.indexOf(t.keyCode) !== -1;
      case "keydown":
        return t.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function ec(e) {
    return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
  }
  var Pr = !1;
  function qm(e, t) {
    switch (e) {
      case "compositionend":
        return ec(t);
      case "keypress":
        return t.which !== 32 ? null : ((Zu = !0), Xu);
      case "textInput":
        return (e = t.data), e === Xu && Zu ? null : e;
      default:
        return null;
    }
  }
  function Gm(e, t) {
    if (Pr)
      return e === "compositionend" || (!ul && Ju(e, t))
        ? ((e = Wu()), (Ei = rl = On = null), (Pr = !1), e)
        : null;
    switch (e) {
      case "paste":
        return null;
      case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
          if (t.char && 1 < t.char.length) return t.char;
          if (t.which) return String.fromCharCode(t.which);
        }
        return null;
      case "compositionend":
        return Yu && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var Ym = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0,
  };
  function tc(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!Ym[e.type] : t === "textarea";
  }
  function nc(e, t, r, s) {
    di(s),
      (t = Oi(t, "onChange")),
      0 < t.length &&
        ((r = new ol("onChange", "change", null, r, s)),
        e.push({ event: r, listeners: t }));
  }
  var bo = null,
    Eo = null;
  function Xm(e) {
    wc(e, 0);
  }
  function Ni(e) {
    var t = Or(e);
    if (Cn(t)) return e;
  }
  function Zm(e, t) {
    if (e === "change") return t;
  }
  var rc = !1;
  if (h) {
    var cl;
    if (h) {
      var dl = "oninput" in document;
      if (!dl) {
        var oc = document.createElement("div");
        oc.setAttribute("oninput", "return;"),
          (dl = typeof oc.oninput == "function");
      }
      cl = dl;
    } else cl = !1;
    rc = cl && (!document.documentMode || 9 < document.documentMode);
  }
  function ic() {
    bo && (bo.detachEvent("onpropertychange", sc), (Eo = bo = null));
  }
  function sc(e) {
    if (e.propertyName === "value" && Ni(Eo)) {
      var t = [];
      nc(t, Eo, e, br(e)), at(Xm, t);
    }
  }
  function Jm(e, t, r) {
    e === "focusin"
      ? (ic(), (bo = t), (Eo = r), bo.attachEvent("onpropertychange", sc))
      : e === "focusout" && ic();
  }
  function eg(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return Ni(Eo);
  }
  function tg(e, t) {
    if (e === "click") return Ni(t);
  }
  function ng(e, t) {
    if (e === "input" || e === "change") return Ni(t);
  }
  function rg(e, t) {
    return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
  }
  var Dt = typeof Object.is == "function" ? Object.is : rg;
  function Co(e, t) {
    if (Dt(e, t)) return !0;
    if (
      typeof e != "object" ||
      e === null ||
      typeof t != "object" ||
      t === null
    )
      return !1;
    var r = Object.keys(e),
      s = Object.keys(t);
    if (r.length !== s.length) return !1;
    for (s = 0; s < r.length; s++) {
      var a = r[s];
      if (!m.call(t, a) || !Dt(e[a], t[a])) return !1;
    }
    return !0;
  }
  function lc(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function ac(e, t) {
    var r = lc(e);
    e = 0;
    for (var s; r; ) {
      if (r.nodeType === 3) {
        if (((s = e + r.textContent.length), e <= t && s >= t))
          return { node: r, offset: t - e };
        e = s;
      }
      e: {
        for (; r; ) {
          if (r.nextSibling) {
            r = r.nextSibling;
            break e;
          }
          r = r.parentNode;
        }
        r = void 0;
      }
      r = lc(r);
    }
  }
  function uc(e, t) {
    return e && t
      ? e === t
        ? !0
        : e && e.nodeType === 3
        ? !1
        : t && t.nodeType === 3
        ? uc(e, t.parentNode)
        : "contains" in e
        ? e.contains(t)
        : e.compareDocumentPosition
        ? !!(e.compareDocumentPosition(t) & 16)
        : !1
      : !1;
  }
  function cc() {
    for (var e = window, t = kt(); t instanceof e.HTMLIFrameElement; ) {
      try {
        var r = typeof t.contentWindow.location.href == "string";
      } catch {
        r = !1;
      }
      if (r) e = t.contentWindow;
      else break;
      t = kt(e.document);
    }
    return t;
  }
  function fl(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return (
      t &&
      ((t === "input" &&
        (e.type === "text" ||
          e.type === "search" ||
          e.type === "tel" ||
          e.type === "url" ||
          e.type === "password")) ||
        t === "textarea" ||
        e.contentEditable === "true")
    );
  }
  function og(e) {
    var t = cc(),
      r = e.focusedElem,
      s = e.selectionRange;
    if (
      t !== r &&
      r &&
      r.ownerDocument &&
      uc(r.ownerDocument.documentElement, r)
    ) {
      if (s !== null && fl(r)) {
        if (
          ((t = s.start),
          (e = s.end),
          e === void 0 && (e = t),
          "selectionStart" in r)
        )
          (r.selectionStart = t),
            (r.selectionEnd = Math.min(e, r.value.length));
        else if (
          ((e = ((t = r.ownerDocument || document) && t.defaultView) || window),
          e.getSelection)
        ) {
          e = e.getSelection();
          var a = r.textContent.length,
            c = Math.min(s.start, a);
          (s = s.end === void 0 ? c : Math.min(s.end, a)),
            !e.extend && c > s && ((a = s), (s = c), (c = a)),
            (a = ac(r, c));
          var p = ac(r, s);
          a &&
            p &&
            (e.rangeCount !== 1 ||
              e.anchorNode !== a.node ||
              e.anchorOffset !== a.offset ||
              e.focusNode !== p.node ||
              e.focusOffset !== p.offset) &&
            ((t = t.createRange()),
            t.setStart(a.node, a.offset),
            e.removeAllRanges(),
            c > s
              ? (e.addRange(t), e.extend(p.node, p.offset))
              : (t.setEnd(p.node, p.offset), e.addRange(t)));
        }
      }
      for (t = [], e = r; (e = e.parentNode); )
        e.nodeType === 1 &&
          t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
      for (typeof r.focus == "function" && r.focus(), r = 0; r < t.length; r++)
        (e = t[r]),
          (e.element.scrollLeft = e.left),
          (e.element.scrollTop = e.top);
    }
  }
  var ig = h && "documentMode" in document && 11 >= document.documentMode,
    Nr = null,
    pl = null,
    ko = null,
    hl = !1;
  function dc(e, t, r) {
    var s =
      r.window === r ? r.document : r.nodeType === 9 ? r : r.ownerDocument;
    hl ||
      Nr == null ||
      Nr !== kt(s) ||
      ((s = Nr),
      "selectionStart" in s && fl(s)
        ? (s = { start: s.selectionStart, end: s.selectionEnd })
        : ((s = (
            (s.ownerDocument && s.ownerDocument.defaultView) ||
            window
          ).getSelection()),
          (s = {
            anchorNode: s.anchorNode,
            anchorOffset: s.anchorOffset,
            focusNode: s.focusNode,
            focusOffset: s.focusOffset,
          })),
      (ko && Co(ko, s)) ||
        ((ko = s),
        (s = Oi(pl, "onSelect")),
        0 < s.length &&
          ((t = new ol("onSelect", "select", null, t, r)),
          e.push({ event: t, listeners: s }),
          (t.target = Nr))));
  }
  function Ti(e, t) {
    var r = {};
    return (
      (r[e.toLowerCase()] = t.toLowerCase()),
      (r["Webkit" + e] = "webkit" + t),
      (r["Moz" + e] = "moz" + t),
      r
    );
  }
  var Tr = {
      animationend: Ti("Animation", "AnimationEnd"),
      animationiteration: Ti("Animation", "AnimationIteration"),
      animationstart: Ti("Animation", "AnimationStart"),
      transitionend: Ti("Transition", "TransitionEnd"),
    },
    ml = {},
    fc = {};
  h &&
    ((fc = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete Tr.animationend.animation,
      delete Tr.animationiteration.animation,
      delete Tr.animationstart.animation),
    "TransitionEvent" in window || delete Tr.transitionend.transition);
  function Ri(e) {
    if (ml[e]) return ml[e];
    if (!Tr[e]) return e;
    var t = Tr[e],
      r;
    for (r in t) if (t.hasOwnProperty(r) && r in fc) return (ml[e] = t[r]);
    return e;
  }
  var pc = Ri("animationend"),
    hc = Ri("animationiteration"),
    mc = Ri("animationstart"),
    gc = Ri("transitionend"),
    vc = new Map(),
    yc =
      "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " "
      );
  function _n(e, t) {
    vc.set(e, t), d(t, [e]);
  }
  for (var gl = 0; gl < yc.length; gl++) {
    var vl = yc[gl],
      sg = vl.toLowerCase(),
      lg = vl[0].toUpperCase() + vl.slice(1);
    _n(sg, "on" + lg);
  }
  _n(pc, "onAnimationEnd"),
    _n(hc, "onAnimationIteration"),
    _n(mc, "onAnimationStart"),
    _n("dblclick", "onDoubleClick"),
    _n("focusin", "onFocus"),
    _n("focusout", "onBlur"),
    _n(gc, "onTransitionEnd"),
    f("onMouseEnter", ["mouseout", "mouseover"]),
    f("onMouseLeave", ["mouseout", "mouseover"]),
    f("onPointerEnter", ["pointerout", "pointerover"]),
    f("onPointerLeave", ["pointerout", "pointerover"]),
    d(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " "
      )
    ),
    d(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " "
      )
    ),
    d("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    d(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" ")
    ),
    d(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" ")
    ),
    d(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
    );
  var Po =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " "
      ),
    ag = new Set(
      "cancel close invalid load scroll toggle".split(" ").concat(Po)
    );
  function xc(e, t, r) {
    var s = e.type || "unknown-event";
    (e.currentTarget = r), sm(s, t, void 0, e), (e.currentTarget = null);
  }
  function wc(e, t) {
    t = (t & 4) !== 0;
    for (var r = 0; r < e.length; r++) {
      var s = e[r],
        a = s.event;
      s = s.listeners;
      e: {
        var c = void 0;
        if (t)
          for (var p = s.length - 1; 0 <= p; p--) {
            var b = s[p],
              k = b.instance,
              _ = b.currentTarget;
            if (((b = b.listener), k !== c && a.isPropagationStopped()))
              break e;
            xc(a, b, _), (c = k);
          }
        else
          for (p = 0; p < s.length; p++) {
            if (
              ((b = s[p]),
              (k = b.instance),
              (_ = b.currentTarget),
              (b = b.listener),
              k !== c && a.isPropagationStopped())
            )
              break e;
            xc(a, b, _), (c = k);
          }
      }
    }
    if (pi) throw ((e = qs), (pi = !1), (qs = null), e);
  }
  function Re(e, t) {
    var r = t[kl];
    r === void 0 && (r = t[kl] = new Set());
    var s = e + "__bubble";
    r.has(s) || (Sc(t, e, 2, !1), r.add(s));
  }
  function yl(e, t, r) {
    var s = 0;
    t && (s |= 4), Sc(r, e, s, t);
  }
  var ji = "_reactListening" + Math.random().toString(36).slice(2);
  function No(e) {
    if (!e[ji]) {
      (e[ji] = !0),
        l.forEach(function (r) {
          r !== "selectionchange" && (ag.has(r) || yl(r, !1, e), yl(r, !0, e));
        });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[ji] || ((t[ji] = !0), yl("selectionchange", !1, t));
    }
  }
  function Sc(e, t, r, s) {
    switch (Hu(t)) {
      case 1:
        var a = bm;
        break;
      case 4:
        a = Em;
        break;
      default:
        a = tl;
    }
    (r = a.bind(null, t, r, e)),
      (a = void 0),
      !At ||
        (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
        (a = !0),
      s
        ? a !== void 0
          ? e.addEventListener(t, r, { capture: !0, passive: a })
          : e.addEventListener(t, r, !0)
        : a !== void 0
        ? e.addEventListener(t, r, { passive: a })
        : e.addEventListener(t, r, !1);
  }
  function xl(e, t, r, s, a) {
    var c = s;
    if ((t & 1) === 0 && (t & 2) === 0 && s !== null)
      e: for (;;) {
        if (s === null) return;
        var p = s.tag;
        if (p === 3 || p === 4) {
          var b = s.stateNode.containerInfo;
          if (b === a || (b.nodeType === 8 && b.parentNode === a)) break;
          if (p === 4)
            for (p = s.return; p !== null; ) {
              var k = p.tag;
              if (
                (k === 3 || k === 4) &&
                ((k = p.stateNode.containerInfo),
                k === a || (k.nodeType === 8 && k.parentNode === a))
              )
                return;
              p = p.return;
            }
          for (; b !== null; ) {
            if (((p = rr(b)), p === null)) return;
            if (((k = p.tag), k === 5 || k === 6)) {
              s = c = p;
              continue e;
            }
            b = b.parentNode;
          }
        }
        s = s.return;
      }
    at(function () {
      var _ = c,
        B = br(r),
        $ = [];
      e: {
        var U = vc.get(e);
        if (U !== void 0) {
          var X = ol,
            te = e;
          switch (e) {
            case "keypress":
              if (Ci(r) === 0) break e;
            case "keydown":
            case "keyup":
              X = Fm;
              break;
            case "focusin":
              (te = "focus"), (X = ll);
              break;
            case "focusout":
              (te = "blur"), (X = ll);
              break;
            case "beforeblur":
            case "afterblur":
              X = ll;
              break;
            case "click":
              if (r.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              X = Ku;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              X = Pm;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              X = Bm;
              break;
            case pc:
            case hc:
            case mc:
              X = Rm;
              break;
            case gc:
              X = Vm;
              break;
            case "scroll":
              X = Cm;
              break;
            case "wheel":
              X = Wm;
              break;
            case "copy":
            case "cut":
            case "paste":
              X = Om;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              X = Gu;
          }
          var ne = (t & 4) !== 0,
            Ie = !ne && e === "scroll",
            j = ne ? (U !== null ? U + "Capture" : null) : U;
          ne = [];
          for (var P = _, O; P !== null; ) {
            O = P;
            var W = O.stateNode;
            if (
              (O.tag === 5 &&
                W !== null &&
                ((O = W),
                j !== null &&
                  ((W = ut(P, j)), W != null && ne.push(To(P, W, O)))),
              Ie)
            )
              break;
            P = P.return;
          }
          0 < ne.length &&
            ((U = new X(U, te, null, r, B)),
            $.push({ event: U, listeners: ne }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (
            ((U = e === "mouseover" || e === "pointerover"),
            (X = e === "mouseout" || e === "pointerout"),
            U &&
              r !== uo &&
              (te = r.relatedTarget || r.fromElement) &&
              (rr(te) || te[dn]))
          )
            break e;
          if (
            (X || U) &&
            ((U =
              B.window === B
                ? B
                : (U = B.ownerDocument)
                ? U.defaultView || U.parentWindow
                : window),
            X
              ? ((te = r.relatedTarget || r.toElement),
                (X = _),
                (te = te ? rr(te) : null),
                te !== null &&
                  ((Ie = nr(te)),
                  te !== Ie || (te.tag !== 5 && te.tag !== 6)) &&
                  (te = null))
              : ((X = null), (te = _)),
            X !== te)
          ) {
            if (
              ((ne = Ku),
              (W = "onMouseLeave"),
              (j = "onMouseEnter"),
              (P = "mouse"),
              (e === "pointerout" || e === "pointerover") &&
                ((ne = Gu),
                (W = "onPointerLeave"),
                (j = "onPointerEnter"),
                (P = "pointer")),
              (Ie = X == null ? U : Or(X)),
              (O = te == null ? U : Or(te)),
              (U = new ne(W, P + "leave", X, r, B)),
              (U.target = Ie),
              (U.relatedTarget = O),
              (W = null),
              rr(B) === _ &&
                ((ne = new ne(j, P + "enter", te, r, B)),
                (ne.target = O),
                (ne.relatedTarget = Ie),
                (W = ne)),
              (Ie = W),
              X && te)
            )
              t: {
                for (ne = X, j = te, P = 0, O = ne; O; O = Rr(O)) P++;
                for (O = 0, W = j; W; W = Rr(W)) O++;
                for (; 0 < P - O; ) (ne = Rr(ne)), P--;
                for (; 0 < O - P; ) (j = Rr(j)), O--;
                for (; P--; ) {
                  if (ne === j || (j !== null && ne === j.alternate)) break t;
                  (ne = Rr(ne)), (j = Rr(j));
                }
                ne = null;
              }
            else ne = null;
            X !== null && bc($, U, X, ne, !1),
              te !== null && Ie !== null && bc($, Ie, te, ne, !0);
          }
        }
        e: {
          if (
            ((U = _ ? Or(_) : window),
            (X = U.nodeName && U.nodeName.toLowerCase()),
            X === "select" || (X === "input" && U.type === "file"))
          )
            var oe = Zm;
          else if (tc(U))
            if (rc) oe = ng;
            else {
              oe = eg;
              var le = Jm;
            }
          else
            (X = U.nodeName) &&
              X.toLowerCase() === "input" &&
              (U.type === "checkbox" || U.type === "radio") &&
              (oe = tg);
          if (oe && (oe = oe(e, _))) {
            nc($, oe, r, B);
            break e;
          }
          le && le(e, U, _),
            e === "focusout" &&
              (le = U._wrapperState) &&
              le.controlled &&
              U.type === "number" &&
              lo(U, "number", U.value);
        }
        switch (((le = _ ? Or(_) : window), e)) {
          case "focusin":
            (tc(le) || le.contentEditable === "true") &&
              ((Nr = le), (pl = _), (ko = null));
            break;
          case "focusout":
            ko = pl = Nr = null;
            break;
          case "mousedown":
            hl = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            (hl = !1), dc($, r, B);
            break;
          case "selectionchange":
            if (ig) break;
          case "keydown":
          case "keyup":
            dc($, r, B);
        }
        var ae;
        if (ul)
          e: {
            switch (e) {
              case "compositionstart":
                var de = "onCompositionStart";
                break e;
              case "compositionend":
                de = "onCompositionEnd";
                break e;
              case "compositionupdate":
                de = "onCompositionUpdate";
                break e;
            }
            de = void 0;
          }
        else
          Pr
            ? Ju(e, r) && (de = "onCompositionEnd")
            : e === "keydown" &&
              r.keyCode === 229 &&
              (de = "onCompositionStart");
        de &&
          (Yu &&
            r.locale !== "ko" &&
            (Pr || de !== "onCompositionStart"
              ? de === "onCompositionEnd" && Pr && (ae = Wu())
              : ((On = B),
                (rl = "value" in On ? On.value : On.textContent),
                (Pr = !0))),
          (le = Oi(_, de)),
          0 < le.length &&
            ((de = new qu(de, e, null, r, B)),
            $.push({ event: de, listeners: le }),
            ae
              ? (de.data = ae)
              : ((ae = ec(r)), ae !== null && (de.data = ae)))),
          (ae = Km ? qm(e, r) : Gm(e, r)) &&
            ((_ = Oi(_, "onBeforeInput")),
            0 < _.length &&
              ((B = new qu("onBeforeInput", "beforeinput", null, r, B)),
              $.push({ event: B, listeners: _ }),
              (B.data = ae)));
      }
      wc($, t);
    });
  }
  function To(e, t, r) {
    return { instance: e, listener: t, currentTarget: r };
  }
  function Oi(e, t) {
    for (var r = t + "Capture", s = []; e !== null; ) {
      var a = e,
        c = a.stateNode;
      a.tag === 5 &&
        c !== null &&
        ((a = c),
        (c = ut(e, r)),
        c != null && s.unshift(To(e, c, a)),
        (c = ut(e, t)),
        c != null && s.push(To(e, c, a))),
        (e = e.return);
    }
    return s;
  }
  function Rr(e) {
    if (e === null) return null;
    do e = e.return;
    while (e && e.tag !== 5);
    return e || null;
  }
  function bc(e, t, r, s, a) {
    for (var c = t._reactName, p = []; r !== null && r !== s; ) {
      var b = r,
        k = b.alternate,
        _ = b.stateNode;
      if (k !== null && k === s) break;
      b.tag === 5 &&
        _ !== null &&
        ((b = _),
        a
          ? ((k = ut(r, c)), k != null && p.unshift(To(r, k, b)))
          : a || ((k = ut(r, c)), k != null && p.push(To(r, k, b)))),
        (r = r.return);
    }
    p.length !== 0 && e.push({ event: t, listeners: p });
  }
  var ug = /\r\n?/g,
    cg = /\u0000|\uFFFD/g;
  function Ec(e) {
    return (typeof e == "string" ? e : "" + e)
      .replace(
        ug,
        `
`
      )
      .replace(cg, "");
  }
  function _i(e, t, r) {
    if (((t = Ec(t)), Ec(e) !== t && r)) throw Error(i(425));
  }
  function Mi() {}
  var wl = null,
    Sl = null;
  function bl(e, t) {
    return (
      e === "textarea" ||
      e === "noscript" ||
      typeof t.children == "string" ||
      typeof t.children == "number" ||
      (typeof t.dangerouslySetInnerHTML == "object" &&
        t.dangerouslySetInnerHTML !== null &&
        t.dangerouslySetInnerHTML.__html != null)
    );
  }
  var El = typeof setTimeout == "function" ? setTimeout : void 0,
    dg = typeof clearTimeout == "function" ? clearTimeout : void 0,
    Cc = typeof Promise == "function" ? Promise : void 0,
    fg =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof Cc < "u"
        ? function (e) {
            return Cc.resolve(null).then(e).catch(pg);
          }
        : El;
  function pg(e) {
    setTimeout(function () {
      throw e;
    });
  }
  function Cl(e, t) {
    var r = t,
      s = 0;
    do {
      var a = r.nextSibling;
      if ((e.removeChild(r), a && a.nodeType === 8))
        if (((r = a.data), r === "/$")) {
          if (s === 0) {
            e.removeChild(a), yo(t);
            return;
          }
          s--;
        } else (r !== "$" && r !== "$?" && r !== "$!") || s++;
      r = a;
    } while (r);
    yo(t);
  }
  function Mn(e) {
    for (; e != null; e = e.nextSibling) {
      var t = e.nodeType;
      if (t === 1 || t === 3) break;
      if (t === 8) {
        if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
        if (t === "/$") return null;
      }
    }
    return e;
  }
  function kc(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var r = e.data;
        if (r === "$" || r === "$!" || r === "$?") {
          if (t === 0) return e;
          t--;
        } else r === "/$" && t++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  var jr = Math.random().toString(36).slice(2),
    tn = "__reactFiber$" + jr,
    Ro = "__reactProps$" + jr,
    dn = "__reactContainer$" + jr,
    kl = "__reactEvents$" + jr,
    hg = "__reactListeners$" + jr,
    mg = "__reactHandles$" + jr;
  function rr(e) {
    var t = e[tn];
    if (t) return t;
    for (var r = e.parentNode; r; ) {
      if ((t = r[dn] || r[tn])) {
        if (
          ((r = t.alternate),
          t.child !== null || (r !== null && r.child !== null))
        )
          for (e = kc(e); e !== null; ) {
            if ((r = e[tn])) return r;
            e = kc(e);
          }
        return t;
      }
      (e = r), (r = e.parentNode);
    }
    return null;
  }
  function jo(e) {
    return (
      (e = e[tn] || e[dn]),
      !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3)
        ? null
        : e
    );
  }
  function Or(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(i(33));
  }
  function Ai(e) {
    return e[Ro] || null;
  }
  var Pl = [],
    _r = -1;
  function An(e) {
    return { current: e };
  }
  function je(e) {
    0 > _r || ((e.current = Pl[_r]), (Pl[_r] = null), _r--);
  }
  function Te(e, t) {
    _r++, (Pl[_r] = e.current), (e.current = t);
  }
  var Ln = {},
    Ze = An(Ln),
    ct = An(!1),
    or = Ln;
  function Mr(e, t) {
    var r = e.type.contextTypes;
    if (!r) return Ln;
    var s = e.stateNode;
    if (s && s.__reactInternalMemoizedUnmaskedChildContext === t)
      return s.__reactInternalMemoizedMaskedChildContext;
    var a = {},
      c;
    for (c in r) a[c] = t[c];
    return (
      s &&
        ((e = e.stateNode),
        (e.__reactInternalMemoizedUnmaskedChildContext = t),
        (e.__reactInternalMemoizedMaskedChildContext = a)),
      a
    );
  }
  function dt(e) {
    return (e = e.childContextTypes), e != null;
  }
  function Li() {
    je(ct), je(Ze);
  }
  function Pc(e, t, r) {
    if (Ze.current !== Ln) throw Error(i(168));
    Te(Ze, t), Te(ct, r);
  }
  function Nc(e, t, r) {
    var s = e.stateNode;
    if (((t = t.childContextTypes), typeof s.getChildContext != "function"))
      return r;
    s = s.getChildContext();
    for (var a in s) if (!(a in t)) throw Error(i(108, se(e) || "Unknown", a));
    return V({}, r, s);
  }
  function Di(e) {
    return (
      (e =
        ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) ||
        Ln),
      (or = Ze.current),
      Te(Ze, e),
      Te(ct, ct.current),
      !0
    );
  }
  function Tc(e, t, r) {
    var s = e.stateNode;
    if (!s) throw Error(i(169));
    r
      ? ((e = Nc(e, t, or)),
        (s.__reactInternalMemoizedMergedChildContext = e),
        je(ct),
        je(Ze),
        Te(Ze, e))
      : je(ct),
      Te(ct, r);
  }
  var fn = null,
    Ii = !1,
    Nl = !1;
  function Rc(e) {
    fn === null ? (fn = [e]) : fn.push(e);
  }
  function gg(e) {
    (Ii = !0), Rc(e);
  }
  function Dn() {
    if (!Nl && fn !== null) {
      Nl = !0;
      var e = 0,
        t = Pe;
      try {
        var r = fn;
        for (Pe = 1; e < r.length; e++) {
          var s = r[e];
          do s = s(!0);
          while (s !== null);
        }
        (fn = null), (Ii = !1);
      } catch (a) {
        throw (fn !== null && (fn = fn.slice(e + 1)), Ou(Gs, Dn), a);
      } finally {
        (Pe = t), (Nl = !1);
      }
    }
    return null;
  }
  var Ar = [],
    Lr = 0,
    Fi = null,
    zi = 0,
    Nt = [],
    Tt = 0,
    ir = null,
    pn = 1,
    hn = "";
  function sr(e, t) {
    (Ar[Lr++] = zi), (Ar[Lr++] = Fi), (Fi = e), (zi = t);
  }
  function jc(e, t, r) {
    (Nt[Tt++] = pn), (Nt[Tt++] = hn), (Nt[Tt++] = ir), (ir = e);
    var s = pn;
    e = hn;
    var a = 32 - Lt(s) - 1;
    (s &= ~(1 << a)), (r += 1);
    var c = 32 - Lt(t) + a;
    if (30 < c) {
      var p = a - (a % 5);
      (c = (s & ((1 << p) - 1)).toString(32)),
        (s >>= p),
        (a -= p),
        (pn = (1 << (32 - Lt(t) + a)) | (r << a) | s),
        (hn = c + e);
    } else (pn = (1 << c) | (r << a) | s), (hn = e);
  }
  function Tl(e) {
    e.return !== null && (sr(e, 1), jc(e, 1, 0));
  }
  function Rl(e) {
    for (; e === Fi; )
      (Fi = Ar[--Lr]), (Ar[Lr] = null), (zi = Ar[--Lr]), (Ar[Lr] = null);
    for (; e === ir; )
      (ir = Nt[--Tt]),
        (Nt[Tt] = null),
        (hn = Nt[--Tt]),
        (Nt[Tt] = null),
        (pn = Nt[--Tt]),
        (Nt[Tt] = null);
  }
  var xt = null,
    wt = null,
    _e = !1,
    It = null;
  function Oc(e, t) {
    var r = _t(5, null, null, 0);
    (r.elementType = "DELETED"),
      (r.stateNode = t),
      (r.return = e),
      (t = e.deletions),
      t === null ? ((e.deletions = [r]), (e.flags |= 16)) : t.push(r);
  }
  function _c(e, t) {
    switch (e.tag) {
      case 5:
        var r = e.type;
        return (
          (t =
            t.nodeType !== 1 || r.toLowerCase() !== t.nodeName.toLowerCase()
              ? null
              : t),
          t !== null
            ? ((e.stateNode = t), (xt = e), (wt = Mn(t.firstChild)), !0)
            : !1
        );
      case 6:
        return (
          (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
          t !== null ? ((e.stateNode = t), (xt = e), (wt = null), !0) : !1
        );
      case 13:
        return (
          (t = t.nodeType !== 8 ? null : t),
          t !== null
            ? ((r = ir !== null ? { id: pn, overflow: hn } : null),
              (e.memoizedState = {
                dehydrated: t,
                treeContext: r,
                retryLane: 1073741824,
              }),
              (r = _t(18, null, null, 0)),
              (r.stateNode = t),
              (r.return = e),
              (e.child = r),
              (xt = e),
              (wt = null),
              !0)
            : !1
        );
      default:
        return !1;
    }
  }
  function jl(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
  }
  function Ol(e) {
    if (_e) {
      var t = wt;
      if (t) {
        var r = t;
        if (!_c(e, t)) {
          if (jl(e)) throw Error(i(418));
          t = Mn(r.nextSibling);
          var s = xt;
          t && _c(e, t)
            ? Oc(s, r)
            : ((e.flags = (e.flags & -4097) | 2), (_e = !1), (xt = e));
        }
      } else {
        if (jl(e)) throw Error(i(418));
        (e.flags = (e.flags & -4097) | 2), (_e = !1), (xt = e);
      }
    }
  }
  function Mc(e) {
    for (
      e = e.return;
      e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;

    )
      e = e.return;
    xt = e;
  }
  function Ui(e) {
    if (e !== xt) return !1;
    if (!_e) return Mc(e), (_e = !0), !1;
    var t;
    if (
      ((t = e.tag !== 3) &&
        !(t = e.tag !== 5) &&
        ((t = e.type),
        (t = t !== "head" && t !== "body" && !bl(e.type, e.memoizedProps))),
      t && (t = wt))
    ) {
      if (jl(e)) throw (Ac(), Error(i(418)));
      for (; t; ) Oc(e, t), (t = Mn(t.nextSibling));
    }
    if ((Mc(e), e.tag === 13)) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
        throw Error(i(317));
      e: {
        for (e = e.nextSibling, t = 0; e; ) {
          if (e.nodeType === 8) {
            var r = e.data;
            if (r === "/$") {
              if (t === 0) {
                wt = Mn(e.nextSibling);
                break e;
              }
              t--;
            } else (r !== "$" && r !== "$!" && r !== "$?") || t++;
          }
          e = e.nextSibling;
        }
        wt = null;
      }
    } else wt = xt ? Mn(e.stateNode.nextSibling) : null;
    return !0;
  }
  function Ac() {
    for (var e = wt; e; ) e = Mn(e.nextSibling);
  }
  function Dr() {
    (wt = xt = null), (_e = !1);
  }
  function _l(e) {
    It === null ? (It = [e]) : It.push(e);
  }
  var vg = z.ReactCurrentBatchConfig;
  function Oo(e, t, r) {
    if (
      ((e = r.ref),
      e !== null && typeof e != "function" && typeof e != "object")
    ) {
      if (r._owner) {
        if (((r = r._owner), r)) {
          if (r.tag !== 1) throw Error(i(309));
          var s = r.stateNode;
        }
        if (!s) throw Error(i(147, e));
        var a = s,
          c = "" + e;
        return t !== null &&
          t.ref !== null &&
          typeof t.ref == "function" &&
          t.ref._stringRef === c
          ? t.ref
          : ((t = function (p) {
              var b = a.refs;
              p === null ? delete b[c] : (b[c] = p);
            }),
            (t._stringRef = c),
            t);
      }
      if (typeof e != "string") throw Error(i(284));
      if (!r._owner) throw Error(i(290, e));
    }
    return e;
  }
  function Bi(e, t) {
    throw (
      ((e = Object.prototype.toString.call(t)),
      Error(
        i(
          31,
          e === "[object Object]"
            ? "object with keys {" + Object.keys(t).join(", ") + "}"
            : e
        )
      ))
    );
  }
  function Lc(e) {
    var t = e._init;
    return t(e._payload);
  }
  function Dc(e) {
    function t(j, P) {
      if (e) {
        var O = j.deletions;
        O === null ? ((j.deletions = [P]), (j.flags |= 16)) : O.push(P);
      }
    }
    function r(j, P) {
      if (!e) return null;
      for (; P !== null; ) t(j, P), (P = P.sibling);
      return null;
    }
    function s(j, P) {
      for (j = new Map(); P !== null; )
        P.key !== null ? j.set(P.key, P) : j.set(P.index, P), (P = P.sibling);
      return j;
    }
    function a(j, P) {
      return (j = Hn(j, P)), (j.index = 0), (j.sibling = null), j;
    }
    function c(j, P, O) {
      return (
        (j.index = O),
        e
          ? ((O = j.alternate),
            O !== null
              ? ((O = O.index), O < P ? ((j.flags |= 2), P) : O)
              : ((j.flags |= 2), P))
          : ((j.flags |= 1048576), P)
      );
    }
    function p(j) {
      return e && j.alternate === null && (j.flags |= 2), j;
    }
    function b(j, P, O, W) {
      return P === null || P.tag !== 6
        ? ((P = Ea(O, j.mode, W)), (P.return = j), P)
        : ((P = a(P, O)), (P.return = j), P);
    }
    function k(j, P, O, W) {
      var oe = O.type;
      return oe === G
        ? B(j, P, O.props.children, W, O.key)
        : P !== null &&
          (P.elementType === oe ||
            (typeof oe == "object" &&
              oe !== null &&
              oe.$$typeof === ie &&
              Lc(oe) === P.type))
        ? ((W = a(P, O.props)), (W.ref = Oo(j, P, O)), (W.return = j), W)
        : ((W = ds(O.type, O.key, O.props, null, j.mode, W)),
          (W.ref = Oo(j, P, O)),
          (W.return = j),
          W);
    }
    function _(j, P, O, W) {
      return P === null ||
        P.tag !== 4 ||
        P.stateNode.containerInfo !== O.containerInfo ||
        P.stateNode.implementation !== O.implementation
        ? ((P = Ca(O, j.mode, W)), (P.return = j), P)
        : ((P = a(P, O.children || [])), (P.return = j), P);
    }
    function B(j, P, O, W, oe) {
      return P === null || P.tag !== 7
        ? ((P = hr(O, j.mode, W, oe)), (P.return = j), P)
        : ((P = a(P, O)), (P.return = j), P);
    }
    function $(j, P, O) {
      if ((typeof P == "string" && P !== "") || typeof P == "number")
        return (P = Ea("" + P, j.mode, O)), (P.return = j), P;
      if (typeof P == "object" && P !== null) {
        switch (P.$$typeof) {
          case H:
            return (
              (O = ds(P.type, P.key, P.props, null, j.mode, O)),
              (O.ref = Oo(j, null, P)),
              (O.return = j),
              O
            );
          case K:
            return (P = Ca(P, j.mode, O)), (P.return = j), P;
          case ie:
            var W = P._init;
            return $(j, W(P._payload), O);
        }
        if (kn(P) || F(P))
          return (P = hr(P, j.mode, O, null)), (P.return = j), P;
        Bi(j, P);
      }
      return null;
    }
    function U(j, P, O, W) {
      var oe = P !== null ? P.key : null;
      if ((typeof O == "string" && O !== "") || typeof O == "number")
        return oe !== null ? null : b(j, P, "" + O, W);
      if (typeof O == "object" && O !== null) {
        switch (O.$$typeof) {
          case H:
            return O.key === oe ? k(j, P, O, W) : null;
          case K:
            return O.key === oe ? _(j, P, O, W) : null;
          case ie:
            return (oe = O._init), U(j, P, oe(O._payload), W);
        }
        if (kn(O) || F(O)) return oe !== null ? null : B(j, P, O, W, null);
        Bi(j, O);
      }
      return null;
    }
    function X(j, P, O, W, oe) {
      if ((typeof W == "string" && W !== "") || typeof W == "number")
        return (j = j.get(O) || null), b(P, j, "" + W, oe);
      if (typeof W == "object" && W !== null) {
        switch (W.$$typeof) {
          case H:
            return (
              (j = j.get(W.key === null ? O : W.key) || null), k(P, j, W, oe)
            );
          case K:
            return (
              (j = j.get(W.key === null ? O : W.key) || null), _(P, j, W, oe)
            );
          case ie:
            var le = W._init;
            return X(j, P, O, le(W._payload), oe);
        }
        if (kn(W) || F(W)) return (j = j.get(O) || null), B(P, j, W, oe, null);
        Bi(P, W);
      }
      return null;
    }
    function te(j, P, O, W) {
      for (
        var oe = null, le = null, ae = P, de = (P = 0), Ke = null;
        ae !== null && de < O.length;
        de++
      ) {
        ae.index > de ? ((Ke = ae), (ae = null)) : (Ke = ae.sibling);
        var Ce = U(j, ae, O[de], W);
        if (Ce === null) {
          ae === null && (ae = Ke);
          break;
        }
        e && ae && Ce.alternate === null && t(j, ae),
          (P = c(Ce, P, de)),
          le === null ? (oe = Ce) : (le.sibling = Ce),
          (le = Ce),
          (ae = Ke);
      }
      if (de === O.length) return r(j, ae), _e && sr(j, de), oe;
      if (ae === null) {
        for (; de < O.length; de++)
          (ae = $(j, O[de], W)),
            ae !== null &&
              ((P = c(ae, P, de)),
              le === null ? (oe = ae) : (le.sibling = ae),
              (le = ae));
        return _e && sr(j, de), oe;
      }
      for (ae = s(j, ae); de < O.length; de++)
        (Ke = X(ae, j, de, O[de], W)),
          Ke !== null &&
            (e &&
              Ke.alternate !== null &&
              ae.delete(Ke.key === null ? de : Ke.key),
            (P = c(Ke, P, de)),
            le === null ? (oe = Ke) : (le.sibling = Ke),
            (le = Ke));
      return (
        e &&
          ae.forEach(function (Wn) {
            return t(j, Wn);
          }),
        _e && sr(j, de),
        oe
      );
    }
    function ne(j, P, O, W) {
      var oe = F(O);
      if (typeof oe != "function") throw Error(i(150));
      if (((O = oe.call(O)), O == null)) throw Error(i(151));
      for (
        var le = (oe = null), ae = P, de = (P = 0), Ke = null, Ce = O.next();
        ae !== null && !Ce.done;
        de++, Ce = O.next()
      ) {
        ae.index > de ? ((Ke = ae), (ae = null)) : (Ke = ae.sibling);
        var Wn = U(j, ae, Ce.value, W);
        if (Wn === null) {
          ae === null && (ae = Ke);
          break;
        }
        e && ae && Wn.alternate === null && t(j, ae),
          (P = c(Wn, P, de)),
          le === null ? (oe = Wn) : (le.sibling = Wn),
          (le = Wn),
          (ae = Ke);
      }
      if (Ce.done) return r(j, ae), _e && sr(j, de), oe;
      if (ae === null) {
        for (; !Ce.done; de++, Ce = O.next())
          (Ce = $(j, Ce.value, W)),
            Ce !== null &&
              ((P = c(Ce, P, de)),
              le === null ? (oe = Ce) : (le.sibling = Ce),
              (le = Ce));
        return _e && sr(j, de), oe;
      }
      for (ae = s(j, ae); !Ce.done; de++, Ce = O.next())
        (Ce = X(ae, j, de, Ce.value, W)),
          Ce !== null &&
            (e &&
              Ce.alternate !== null &&
              ae.delete(Ce.key === null ? de : Ce.key),
            (P = c(Ce, P, de)),
            le === null ? (oe = Ce) : (le.sibling = Ce),
            (le = Ce));
      return (
        e &&
          ae.forEach(function (Yg) {
            return t(j, Yg);
          }),
        _e && sr(j, de),
        oe
      );
    }
    function Ie(j, P, O, W) {
      if (
        (typeof O == "object" &&
          O !== null &&
          O.type === G &&
          O.key === null &&
          (O = O.props.children),
        typeof O == "object" && O !== null)
      ) {
        switch (O.$$typeof) {
          case H:
            e: {
              for (var oe = O.key, le = P; le !== null; ) {
                if (le.key === oe) {
                  if (((oe = O.type), oe === G)) {
                    if (le.tag === 7) {
                      r(j, le.sibling),
                        (P = a(le, O.props.children)),
                        (P.return = j),
                        (j = P);
                      break e;
                    }
                  } else if (
                    le.elementType === oe ||
                    (typeof oe == "object" &&
                      oe !== null &&
                      oe.$$typeof === ie &&
                      Lc(oe) === le.type)
                  ) {
                    r(j, le.sibling),
                      (P = a(le, O.props)),
                      (P.ref = Oo(j, le, O)),
                      (P.return = j),
                      (j = P);
                    break e;
                  }
                  r(j, le);
                  break;
                } else t(j, le);
                le = le.sibling;
              }
              O.type === G
                ? ((P = hr(O.props.children, j.mode, W, O.key)),
                  (P.return = j),
                  (j = P))
                : ((W = ds(O.type, O.key, O.props, null, j.mode, W)),
                  (W.ref = Oo(j, P, O)),
                  (W.return = j),
                  (j = W));
            }
            return p(j);
          case K:
            e: {
              for (le = O.key; P !== null; ) {
                if (P.key === le)
                  if (
                    P.tag === 4 &&
                    P.stateNode.containerInfo === O.containerInfo &&
                    P.stateNode.implementation === O.implementation
                  ) {
                    r(j, P.sibling),
                      (P = a(P, O.children || [])),
                      (P.return = j),
                      (j = P);
                    break e;
                  } else {
                    r(j, P);
                    break;
                  }
                else t(j, P);
                P = P.sibling;
              }
              (P = Ca(O, j.mode, W)), (P.return = j), (j = P);
            }
            return p(j);
          case ie:
            return (le = O._init), Ie(j, P, le(O._payload), W);
        }
        if (kn(O)) return te(j, P, O, W);
        if (F(O)) return ne(j, P, O, W);
        Bi(j, O);
      }
      return (typeof O == "string" && O !== "") || typeof O == "number"
        ? ((O = "" + O),
          P !== null && P.tag === 6
            ? (r(j, P.sibling), (P = a(P, O)), (P.return = j), (j = P))
            : (r(j, P), (P = Ea(O, j.mode, W)), (P.return = j), (j = P)),
          p(j))
        : r(j, P);
    }
    return Ie;
  }
  var Ir = Dc(!0),
    Ic = Dc(!1),
    $i = An(null),
    Vi = null,
    Fr = null,
    Ml = null;
  function Al() {
    Ml = Fr = Vi = null;
  }
  function Ll(e) {
    var t = $i.current;
    je($i), (e._currentValue = t);
  }
  function Dl(e, t, r) {
    for (; e !== null; ) {
      var s = e.alternate;
      if (
        ((e.childLanes & t) !== t
          ? ((e.childLanes |= t), s !== null && (s.childLanes |= t))
          : s !== null && (s.childLanes & t) !== t && (s.childLanes |= t),
        e === r)
      )
        break;
      e = e.return;
    }
  }
  function zr(e, t) {
    (Vi = e),
      (Ml = Fr = null),
      (e = e.dependencies),
      e !== null &&
        e.firstContext !== null &&
        ((e.lanes & t) !== 0 && (ft = !0), (e.firstContext = null));
  }
  function Rt(e) {
    var t = e._currentValue;
    if (Ml !== e)
      if (((e = { context: e, memoizedValue: t, next: null }), Fr === null)) {
        if (Vi === null) throw Error(i(308));
        (Fr = e), (Vi.dependencies = { lanes: 0, firstContext: e });
      } else Fr = Fr.next = e;
    return t;
  }
  var lr = null;
  function Il(e) {
    lr === null ? (lr = [e]) : lr.push(e);
  }
  function Fc(e, t, r, s) {
    var a = t.interleaved;
    return (
      a === null ? ((r.next = r), Il(t)) : ((r.next = a.next), (a.next = r)),
      (t.interleaved = r),
      mn(e, s)
    );
  }
  function mn(e, t) {
    e.lanes |= t;
    var r = e.alternate;
    for (r !== null && (r.lanes |= t), r = e, e = e.return; e !== null; )
      (e.childLanes |= t),
        (r = e.alternate),
        r !== null && (r.childLanes |= t),
        (r = e),
        (e = e.return);
    return r.tag === 3 ? r.stateNode : null;
  }
  var In = !1;
  function Fl(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, interleaved: null, lanes: 0 },
      effects: null,
    };
  }
  function zc(e, t) {
    (e = e.updateQueue),
      t.updateQueue === e &&
        (t.updateQueue = {
          baseState: e.baseState,
          firstBaseUpdate: e.firstBaseUpdate,
          lastBaseUpdate: e.lastBaseUpdate,
          shared: e.shared,
          effects: e.effects,
        });
  }
  function gn(e, t) {
    return {
      eventTime: e,
      lane: t,
      tag: 0,
      payload: null,
      callback: null,
      next: null,
    };
  }
  function Fn(e, t, r) {
    var s = e.updateQueue;
    if (s === null) return null;
    if (((s = s.shared), (be & 2) !== 0)) {
      var a = s.pending;
      return (
        a === null ? (t.next = t) : ((t.next = a.next), (a.next = t)),
        (s.pending = t),
        mn(e, r)
      );
    }
    return (
      (a = s.interleaved),
      a === null ? ((t.next = t), Il(s)) : ((t.next = a.next), (a.next = t)),
      (s.interleaved = t),
      mn(e, r)
    );
  }
  function Hi(e, t, r) {
    if (
      ((t = t.updateQueue), t !== null && ((t = t.shared), (r & 4194240) !== 0))
    ) {
      var s = t.lanes;
      (s &= e.pendingLanes), (r |= s), (t.lanes = r), Zs(e, r);
    }
  }
  function Uc(e, t) {
    var r = e.updateQueue,
      s = e.alternate;
    if (s !== null && ((s = s.updateQueue), r === s)) {
      var a = null,
        c = null;
      if (((r = r.firstBaseUpdate), r !== null)) {
        do {
          var p = {
            eventTime: r.eventTime,
            lane: r.lane,
            tag: r.tag,
            payload: r.payload,
            callback: r.callback,
            next: null,
          };
          c === null ? (a = c = p) : (c = c.next = p), (r = r.next);
        } while (r !== null);
        c === null ? (a = c = t) : (c = c.next = t);
      } else a = c = t;
      (r = {
        baseState: s.baseState,
        firstBaseUpdate: a,
        lastBaseUpdate: c,
        shared: s.shared,
        effects: s.effects,
      }),
        (e.updateQueue = r);
      return;
    }
    (e = r.lastBaseUpdate),
      e === null ? (r.firstBaseUpdate = t) : (e.next = t),
      (r.lastBaseUpdate = t);
  }
  function Wi(e, t, r, s) {
    var a = e.updateQueue;
    In = !1;
    var c = a.firstBaseUpdate,
      p = a.lastBaseUpdate,
      b = a.shared.pending;
    if (b !== null) {
      a.shared.pending = null;
      var k = b,
        _ = k.next;
      (k.next = null), p === null ? (c = _) : (p.next = _), (p = k);
      var B = e.alternate;
      B !== null &&
        ((B = B.updateQueue),
        (b = B.lastBaseUpdate),
        b !== p &&
          (b === null ? (B.firstBaseUpdate = _) : (b.next = _),
          (B.lastBaseUpdate = k)));
    }
    if (c !== null) {
      var $ = a.baseState;
      (p = 0), (B = _ = k = null), (b = c);
      do {
        var U = b.lane,
          X = b.eventTime;
        if ((s & U) === U) {
          B !== null &&
            (B = B.next =
              {
                eventTime: X,
                lane: 0,
                tag: b.tag,
                payload: b.payload,
                callback: b.callback,
                next: null,
              });
          e: {
            var te = e,
              ne = b;
            switch (((U = t), (X = r), ne.tag)) {
              case 1:
                if (((te = ne.payload), typeof te == "function")) {
                  $ = te.call(X, $, U);
                  break e;
                }
                $ = te;
                break e;
              case 3:
                te.flags = (te.flags & -65537) | 128;
              case 0:
                if (
                  ((te = ne.payload),
                  (U = typeof te == "function" ? te.call(X, $, U) : te),
                  U == null)
                )
                  break e;
                $ = V({}, $, U);
                break e;
              case 2:
                In = !0;
            }
          }
          b.callback !== null &&
            b.lane !== 0 &&
            ((e.flags |= 64),
            (U = a.effects),
            U === null ? (a.effects = [b]) : U.push(b));
        } else
          (X = {
            eventTime: X,
            lane: U,
            tag: b.tag,
            payload: b.payload,
            callback: b.callback,
            next: null,
          }),
            B === null ? ((_ = B = X), (k = $)) : (B = B.next = X),
            (p |= U);
        if (((b = b.next), b === null)) {
          if (((b = a.shared.pending), b === null)) break;
          (U = b),
            (b = U.next),
            (U.next = null),
            (a.lastBaseUpdate = U),
            (a.shared.pending = null);
        }
      } while (!0);
      if (
        (B === null && (k = $),
        (a.baseState = k),
        (a.firstBaseUpdate = _),
        (a.lastBaseUpdate = B),
        (t = a.shared.interleaved),
        t !== null)
      ) {
        a = t;
        do (p |= a.lane), (a = a.next);
        while (a !== t);
      } else c === null && (a.shared.lanes = 0);
      (cr |= p), (e.lanes = p), (e.memoizedState = $);
    }
  }
  function Bc(e, t, r) {
    if (((e = t.effects), (t.effects = null), e !== null))
      for (t = 0; t < e.length; t++) {
        var s = e[t],
          a = s.callback;
        if (a !== null) {
          if (((s.callback = null), (s = r), typeof a != "function"))
            throw Error(i(191, a));
          a.call(s);
        }
      }
  }
  var _o = {},
    nn = An(_o),
    Mo = An(_o),
    Ao = An(_o);
  function ar(e) {
    if (e === _o) throw Error(i(174));
    return e;
  }
  function zl(e, t) {
    switch ((Te(Ao, t), Te(Mo, e), Te(nn, _o), (e = t.nodeType), e)) {
      case 9:
      case 11:
        t = (t = t.documentElement) ? t.namespaceURI : Gt(null, "");
        break;
      default:
        (e = e === 8 ? t.parentNode : t),
          (t = e.namespaceURI || null),
          (e = e.tagName),
          (t = Gt(t, e));
    }
    je(nn), Te(nn, t);
  }
  function Ur() {
    je(nn), je(Mo), je(Ao);
  }
  function $c(e) {
    ar(Ao.current);
    var t = ar(nn.current),
      r = Gt(t, e.type);
    t !== r && (Te(Mo, e), Te(nn, r));
  }
  function Ul(e) {
    Mo.current === e && (je(nn), je(Mo));
  }
  var Me = An(0);
  function Qi(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var r = t.memoizedState;
        if (
          r !== null &&
          ((r = r.dehydrated), r === null || r.data === "$?" || r.data === "$!")
        )
          return t;
      } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
        if ((t.flags & 128) !== 0) return t;
      } else if (t.child !== null) {
        (t.child.return = t), (t = t.child);
        continue;
      }
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return null;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
    return null;
  }
  var Bl = [];
  function $l() {
    for (var e = 0; e < Bl.length; e++)
      Bl[e]._workInProgressVersionPrimary = null;
    Bl.length = 0;
  }
  var Ki = z.ReactCurrentDispatcher,
    Vl = z.ReactCurrentBatchConfig,
    ur = 0,
    Ae = null,
    $e = null,
    We = null,
    qi = !1,
    Lo = !1,
    Do = 0,
    yg = 0;
  function Je() {
    throw Error(i(321));
  }
  function Hl(e, t) {
    if (t === null) return !1;
    for (var r = 0; r < t.length && r < e.length; r++)
      if (!Dt(e[r], t[r])) return !1;
    return !0;
  }
  function Wl(e, t, r, s, a, c) {
    if (
      ((ur = c),
      (Ae = t),
      (t.memoizedState = null),
      (t.updateQueue = null),
      (t.lanes = 0),
      (Ki.current = e === null || e.memoizedState === null ? bg : Eg),
      (e = r(s, a)),
      Lo)
    ) {
      c = 0;
      do {
        if (((Lo = !1), (Do = 0), 25 <= c)) throw Error(i(301));
        (c += 1),
          (We = $e = null),
          (t.updateQueue = null),
          (Ki.current = Cg),
          (e = r(s, a));
      } while (Lo);
    }
    if (
      ((Ki.current = Xi),
      (t = $e !== null && $e.next !== null),
      (ur = 0),
      (We = $e = Ae = null),
      (qi = !1),
      t)
    )
      throw Error(i(300));
    return e;
  }
  function Ql() {
    var e = Do !== 0;
    return (Do = 0), e;
  }
  function rn() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return We === null ? (Ae.memoizedState = We = e) : (We = We.next = e), We;
  }
  function jt() {
    if ($e === null) {
      var e = Ae.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = $e.next;
    var t = We === null ? Ae.memoizedState : We.next;
    if (t !== null) (We = t), ($e = e);
    else {
      if (e === null) throw Error(i(310));
      ($e = e),
        (e = {
          memoizedState: $e.memoizedState,
          baseState: $e.baseState,
          baseQueue: $e.baseQueue,
          queue: $e.queue,
          next: null,
        }),
        We === null ? (Ae.memoizedState = We = e) : (We = We.next = e);
    }
    return We;
  }
  function Io(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function Kl(e) {
    var t = jt(),
      r = t.queue;
    if (r === null) throw Error(i(311));
    r.lastRenderedReducer = e;
    var s = $e,
      a = s.baseQueue,
      c = r.pending;
    if (c !== null) {
      if (a !== null) {
        var p = a.next;
        (a.next = c.next), (c.next = p);
      }
      (s.baseQueue = a = c), (r.pending = null);
    }
    if (a !== null) {
      (c = a.next), (s = s.baseState);
      var b = (p = null),
        k = null,
        _ = c;
      do {
        var B = _.lane;
        if ((ur & B) === B)
          k !== null &&
            (k = k.next =
              {
                lane: 0,
                action: _.action,
                hasEagerState: _.hasEagerState,
                eagerState: _.eagerState,
                next: null,
              }),
            (s = _.hasEagerState ? _.eagerState : e(s, _.action));
        else {
          var $ = {
            lane: B,
            action: _.action,
            hasEagerState: _.hasEagerState,
            eagerState: _.eagerState,
            next: null,
          };
          k === null ? ((b = k = $), (p = s)) : (k = k.next = $),
            (Ae.lanes |= B),
            (cr |= B);
        }
        _ = _.next;
      } while (_ !== null && _ !== c);
      k === null ? (p = s) : (k.next = b),
        Dt(s, t.memoizedState) || (ft = !0),
        (t.memoizedState = s),
        (t.baseState = p),
        (t.baseQueue = k),
        (r.lastRenderedState = s);
    }
    if (((e = r.interleaved), e !== null)) {
      a = e;
      do (c = a.lane), (Ae.lanes |= c), (cr |= c), (a = a.next);
      while (a !== e);
    } else a === null && (r.lanes = 0);
    return [t.memoizedState, r.dispatch];
  }
  function ql(e) {
    var t = jt(),
      r = t.queue;
    if (r === null) throw Error(i(311));
    r.lastRenderedReducer = e;
    var s = r.dispatch,
      a = r.pending,
      c = t.memoizedState;
    if (a !== null) {
      r.pending = null;
      var p = (a = a.next);
      do (c = e(c, p.action)), (p = p.next);
      while (p !== a);
      Dt(c, t.memoizedState) || (ft = !0),
        (t.memoizedState = c),
        t.baseQueue === null && (t.baseState = c),
        (r.lastRenderedState = c);
    }
    return [c, s];
  }
  function Vc() {}
  function Hc(e, t) {
    var r = Ae,
      s = jt(),
      a = t(),
      c = !Dt(s.memoizedState, a);
    if (
      (c && ((s.memoizedState = a), (ft = !0)),
      (s = s.queue),
      Gl(Kc.bind(null, r, s, e), [e]),
      s.getSnapshot !== t || c || (We !== null && We.memoizedState.tag & 1))
    ) {
      if (
        ((r.flags |= 2048),
        Fo(9, Qc.bind(null, r, s, a, t), void 0, null),
        Qe === null)
      )
        throw Error(i(349));
      (ur & 30) !== 0 || Wc(r, t, a);
    }
    return a;
  }
  function Wc(e, t, r) {
    (e.flags |= 16384),
      (e = { getSnapshot: t, value: r }),
      (t = Ae.updateQueue),
      t === null
        ? ((t = { lastEffect: null, stores: null }),
          (Ae.updateQueue = t),
          (t.stores = [e]))
        : ((r = t.stores), r === null ? (t.stores = [e]) : r.push(e));
  }
  function Qc(e, t, r, s) {
    (t.value = r), (t.getSnapshot = s), qc(t) && Gc(e);
  }
  function Kc(e, t, r) {
    return r(function () {
      qc(t) && Gc(e);
    });
  }
  function qc(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var r = t();
      return !Dt(e, r);
    } catch {
      return !0;
    }
  }
  function Gc(e) {
    var t = mn(e, 1);
    t !== null && Bt(t, e, 1, -1);
  }
  function Yc(e) {
    var t = rn();
    return (
      typeof e == "function" && (e = e()),
      (t.memoizedState = t.baseState = e),
      (e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Io,
        lastRenderedState: e,
      }),
      (t.queue = e),
      (e = e.dispatch = Sg.bind(null, Ae, e)),
      [t.memoizedState, e]
    );
  }
  function Fo(e, t, r, s) {
    return (
      (e = { tag: e, create: t, destroy: r, deps: s, next: null }),
      (t = Ae.updateQueue),
      t === null
        ? ((t = { lastEffect: null, stores: null }),
          (Ae.updateQueue = t),
          (t.lastEffect = e.next = e))
        : ((r = t.lastEffect),
          r === null
            ? (t.lastEffect = e.next = e)
            : ((s = r.next), (r.next = e), (e.next = s), (t.lastEffect = e))),
      e
    );
  }
  function Xc() {
    return jt().memoizedState;
  }
  function Gi(e, t, r, s) {
    var a = rn();
    (Ae.flags |= e),
      (a.memoizedState = Fo(1 | t, r, void 0, s === void 0 ? null : s));
  }
  function Yi(e, t, r, s) {
    var a = jt();
    s = s === void 0 ? null : s;
    var c = void 0;
    if ($e !== null) {
      var p = $e.memoizedState;
      if (((c = p.destroy), s !== null && Hl(s, p.deps))) {
        a.memoizedState = Fo(t, r, c, s);
        return;
      }
    }
    (Ae.flags |= e), (a.memoizedState = Fo(1 | t, r, c, s));
  }
  function Zc(e, t) {
    return Gi(8390656, 8, e, t);
  }
  function Gl(e, t) {
    return Yi(2048, 8, e, t);
  }
  function Jc(e, t) {
    return Yi(4, 2, e, t);
  }
  function ed(e, t) {
    return Yi(4, 4, e, t);
  }
  function td(e, t) {
    if (typeof t == "function")
      return (
        (e = e()),
        t(e),
        function () {
          t(null);
        }
      );
    if (t != null)
      return (
        (e = e()),
        (t.current = e),
        function () {
          t.current = null;
        }
      );
  }
  function nd(e, t, r) {
    return (
      (r = r != null ? r.concat([e]) : null), Yi(4, 4, td.bind(null, t, e), r)
    );
  }
  function Yl() {}
  function rd(e, t) {
    var r = jt();
    t = t === void 0 ? null : t;
    var s = r.memoizedState;
    return s !== null && t !== null && Hl(t, s[1])
      ? s[0]
      : ((r.memoizedState = [e, t]), e);
  }
  function od(e, t) {
    var r = jt();
    t = t === void 0 ? null : t;
    var s = r.memoizedState;
    return s !== null && t !== null && Hl(t, s[1])
      ? s[0]
      : ((e = e()), (r.memoizedState = [e, t]), e);
  }
  function id(e, t, r) {
    return (ur & 21) === 0
      ? (e.baseState && ((e.baseState = !1), (ft = !0)), (e.memoizedState = r))
      : (Dt(r, t) ||
          ((r = Lu()), (Ae.lanes |= r), (cr |= r), (e.baseState = !0)),
        t);
  }
  function xg(e, t) {
    var r = Pe;
    (Pe = r !== 0 && 4 > r ? r : 4), e(!0);
    var s = Vl.transition;
    Vl.transition = {};
    try {
      e(!1), t();
    } finally {
      (Pe = r), (Vl.transition = s);
    }
  }
  function sd() {
    return jt().memoizedState;
  }
  function wg(e, t, r) {
    var s = $n(e);
    if (
      ((r = {
        lane: s,
        action: r,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      ld(e))
    )
      ad(t, r);
    else if (((r = Fc(e, t, r, s)), r !== null)) {
      var a = st();
      Bt(r, e, s, a), ud(r, t, s);
    }
  }
  function Sg(e, t, r) {
    var s = $n(e),
      a = {
        lane: s,
        action: r,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      };
    if (ld(e)) ad(t, a);
    else {
      var c = e.alternate;
      if (
        e.lanes === 0 &&
        (c === null || c.lanes === 0) &&
        ((c = t.lastRenderedReducer), c !== null)
      )
        try {
          var p = t.lastRenderedState,
            b = c(p, r);
          if (((a.hasEagerState = !0), (a.eagerState = b), Dt(b, p))) {
            var k = t.interleaved;
            k === null
              ? ((a.next = a), Il(t))
              : ((a.next = k.next), (k.next = a)),
              (t.interleaved = a);
            return;
          }
        } catch {
        } finally {
        }
      (r = Fc(e, t, a, s)),
        r !== null && ((a = st()), Bt(r, e, s, a), ud(r, t, s));
    }
  }
  function ld(e) {
    var t = e.alternate;
    return e === Ae || (t !== null && t === Ae);
  }
  function ad(e, t) {
    Lo = qi = !0;
    var r = e.pending;
    r === null ? (t.next = t) : ((t.next = r.next), (r.next = t)),
      (e.pending = t);
  }
  function ud(e, t, r) {
    if ((r & 4194240) !== 0) {
      var s = t.lanes;
      (s &= e.pendingLanes), (r |= s), (t.lanes = r), Zs(e, r);
    }
  }
  var Xi = {
      readContext: Rt,
      useCallback: Je,
      useContext: Je,
      useEffect: Je,
      useImperativeHandle: Je,
      useInsertionEffect: Je,
      useLayoutEffect: Je,
      useMemo: Je,
      useReducer: Je,
      useRef: Je,
      useState: Je,
      useDebugValue: Je,
      useDeferredValue: Je,
      useTransition: Je,
      useMutableSource: Je,
      useSyncExternalStore: Je,
      useId: Je,
      unstable_isNewReconciler: !1,
    },
    bg = {
      readContext: Rt,
      useCallback: function (e, t) {
        return (rn().memoizedState = [e, t === void 0 ? null : t]), e;
      },
      useContext: Rt,
      useEffect: Zc,
      useImperativeHandle: function (e, t, r) {
        return (
          (r = r != null ? r.concat([e]) : null),
          Gi(4194308, 4, td.bind(null, t, e), r)
        );
      },
      useLayoutEffect: function (e, t) {
        return Gi(4194308, 4, e, t);
      },
      useInsertionEffect: function (e, t) {
        return Gi(4, 2, e, t);
      },
      useMemo: function (e, t) {
        var r = rn();
        return (
          (t = t === void 0 ? null : t),
          (e = e()),
          (r.memoizedState = [e, t]),
          e
        );
      },
      useReducer: function (e, t, r) {
        var s = rn();
        return (
          (t = r !== void 0 ? r(t) : t),
          (s.memoizedState = s.baseState = t),
          (e = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: t,
          }),
          (s.queue = e),
          (e = e.dispatch = wg.bind(null, Ae, e)),
          [s.memoizedState, e]
        );
      },
      useRef: function (e) {
        var t = rn();
        return (e = { current: e }), (t.memoizedState = e);
      },
      useState: Yc,
      useDebugValue: Yl,
      useDeferredValue: function (e) {
        return (rn().memoizedState = e);
      },
      useTransition: function () {
        var e = Yc(!1),
          t = e[0];
        return (e = xg.bind(null, e[1])), (rn().memoizedState = e), [t, e];
      },
      useMutableSource: function () {},
      useSyncExternalStore: function (e, t, r) {
        var s = Ae,
          a = rn();
        if (_e) {
          if (r === void 0) throw Error(i(407));
          r = r();
        } else {
          if (((r = t()), Qe === null)) throw Error(i(349));
          (ur & 30) !== 0 || Wc(s, t, r);
        }
        a.memoizedState = r;
        var c = { value: r, getSnapshot: t };
        return (
          (a.queue = c),
          Zc(Kc.bind(null, s, c, e), [e]),
          (s.flags |= 2048),
          Fo(9, Qc.bind(null, s, c, r, t), void 0, null),
          r
        );
      },
      useId: function () {
        var e = rn(),
          t = Qe.identifierPrefix;
        if (_e) {
          var r = hn,
            s = pn;
          (r = (s & ~(1 << (32 - Lt(s) - 1))).toString(32) + r),
            (t = ":" + t + "R" + r),
            (r = Do++),
            0 < r && (t += "H" + r.toString(32)),
            (t += ":");
        } else (r = yg++), (t = ":" + t + "r" + r.toString(32) + ":");
        return (e.memoizedState = t);
      },
      unstable_isNewReconciler: !1,
    },
    Eg = {
      readContext: Rt,
      useCallback: rd,
      useContext: Rt,
      useEffect: Gl,
      useImperativeHandle: nd,
      useInsertionEffect: Jc,
      useLayoutEffect: ed,
      useMemo: od,
      useReducer: Kl,
      useRef: Xc,
      useState: function () {
        return Kl(Io);
      },
      useDebugValue: Yl,
      useDeferredValue: function (e) {
        var t = jt();
        return id(t, $e.memoizedState, e);
      },
      useTransition: function () {
        var e = Kl(Io)[0],
          t = jt().memoizedState;
        return [e, t];
      },
      useMutableSource: Vc,
      useSyncExternalStore: Hc,
      useId: sd,
      unstable_isNewReconciler: !1,
    },
    Cg = {
      readContext: Rt,
      useCallback: rd,
      useContext: Rt,
      useEffect: Gl,
      useImperativeHandle: nd,
      useInsertionEffect: Jc,
      useLayoutEffect: ed,
      useMemo: od,
      useReducer: ql,
      useRef: Xc,
      useState: function () {
        return ql(Io);
      },
      useDebugValue: Yl,
      useDeferredValue: function (e) {
        var t = jt();
        return $e === null ? (t.memoizedState = e) : id(t, $e.memoizedState, e);
      },
      useTransition: function () {
        var e = ql(Io)[0],
          t = jt().memoizedState;
        return [e, t];
      },
      useMutableSource: Vc,
      useSyncExternalStore: Hc,
      useId: sd,
      unstable_isNewReconciler: !1,
    };
  function Ft(e, t) {
    if (e && e.defaultProps) {
      (t = V({}, t)), (e = e.defaultProps);
      for (var r in e) t[r] === void 0 && (t[r] = e[r]);
      return t;
    }
    return t;
  }
  function Xl(e, t, r, s) {
    (t = e.memoizedState),
      (r = r(s, t)),
      (r = r == null ? t : V({}, t, r)),
      (e.memoizedState = r),
      e.lanes === 0 && (e.updateQueue.baseState = r);
  }
  var Zi = {
    isMounted: function (e) {
      return (e = e._reactInternals) ? nr(e) === e : !1;
    },
    enqueueSetState: function (e, t, r) {
      e = e._reactInternals;
      var s = st(),
        a = $n(e),
        c = gn(s, a);
      (c.payload = t),
        r != null && (c.callback = r),
        (t = Fn(e, c, a)),
        t !== null && (Bt(t, e, a, s), Hi(t, e, a));
    },
    enqueueReplaceState: function (e, t, r) {
      e = e._reactInternals;
      var s = st(),
        a = $n(e),
        c = gn(s, a);
      (c.tag = 1),
        (c.payload = t),
        r != null && (c.callback = r),
        (t = Fn(e, c, a)),
        t !== null && (Bt(t, e, a, s), Hi(t, e, a));
    },
    enqueueForceUpdate: function (e, t) {
      e = e._reactInternals;
      var r = st(),
        s = $n(e),
        a = gn(r, s);
      (a.tag = 2),
        t != null && (a.callback = t),
        (t = Fn(e, a, s)),
        t !== null && (Bt(t, e, s, r), Hi(t, e, s));
    },
  };
  function cd(e, t, r, s, a, c, p) {
    return (
      (e = e.stateNode),
      typeof e.shouldComponentUpdate == "function"
        ? e.shouldComponentUpdate(s, c, p)
        : t.prototype && t.prototype.isPureReactComponent
        ? !Co(r, s) || !Co(a, c)
        : !0
    );
  }
  function dd(e, t, r) {
    var s = !1,
      a = Ln,
      c = t.contextType;
    return (
      typeof c == "object" && c !== null
        ? (c = Rt(c))
        : ((a = dt(t) ? or : Ze.current),
          (s = t.contextTypes),
          (c = (s = s != null) ? Mr(e, a) : Ln)),
      (t = new t(r, c)),
      (e.memoizedState =
        t.state !== null && t.state !== void 0 ? t.state : null),
      (t.updater = Zi),
      (e.stateNode = t),
      (t._reactInternals = e),
      s &&
        ((e = e.stateNode),
        (e.__reactInternalMemoizedUnmaskedChildContext = a),
        (e.__reactInternalMemoizedMaskedChildContext = c)),
      t
    );
  }
  function fd(e, t, r, s) {
    (e = t.state),
      typeof t.componentWillReceiveProps == "function" &&
        t.componentWillReceiveProps(r, s),
      typeof t.UNSAFE_componentWillReceiveProps == "function" &&
        t.UNSAFE_componentWillReceiveProps(r, s),
      t.state !== e && Zi.enqueueReplaceState(t, t.state, null);
  }
  function Zl(e, t, r, s) {
    var a = e.stateNode;
    (a.props = r), (a.state = e.memoizedState), (a.refs = {}), Fl(e);
    var c = t.contextType;
    typeof c == "object" && c !== null
      ? (a.context = Rt(c))
      : ((c = dt(t) ? or : Ze.current), (a.context = Mr(e, c))),
      (a.state = e.memoizedState),
      (c = t.getDerivedStateFromProps),
      typeof c == "function" && (Xl(e, t, c, r), (a.state = e.memoizedState)),
      typeof t.getDerivedStateFromProps == "function" ||
        typeof a.getSnapshotBeforeUpdate == "function" ||
        (typeof a.UNSAFE_componentWillMount != "function" &&
          typeof a.componentWillMount != "function") ||
        ((t = a.state),
        typeof a.componentWillMount == "function" && a.componentWillMount(),
        typeof a.UNSAFE_componentWillMount == "function" &&
          a.UNSAFE_componentWillMount(),
        t !== a.state && Zi.enqueueReplaceState(a, a.state, null),
        Wi(e, r, a, s),
        (a.state = e.memoizedState)),
      typeof a.componentDidMount == "function" && (e.flags |= 4194308);
  }
  function Br(e, t) {
    try {
      var r = "",
        s = t;
      do (r += ue(s)), (s = s.return);
      while (s);
      var a = r;
    } catch (c) {
      a =
        `
Error generating stack: ` +
        c.message +
        `
` +
        c.stack;
    }
    return { value: e, source: t, stack: a, digest: null };
  }
  function Jl(e, t, r) {
    return { value: e, source: null, stack: r ?? null, digest: t ?? null };
  }
  function ea(e, t) {
    try {
      console.error(t.value);
    } catch (r) {
      setTimeout(function () {
        throw r;
      });
    }
  }
  var kg = typeof WeakMap == "function" ? WeakMap : Map;
  function pd(e, t, r) {
    (r = gn(-1, r)), (r.tag = 3), (r.payload = { element: null });
    var s = t.value;
    return (
      (r.callback = function () {
        is || ((is = !0), (ma = s)), ea(e, t);
      }),
      r
    );
  }
  function hd(e, t, r) {
    (r = gn(-1, r)), (r.tag = 3);
    var s = e.type.getDerivedStateFromError;
    if (typeof s == "function") {
      var a = t.value;
      (r.payload = function () {
        return s(a);
      }),
        (r.callback = function () {
          ea(e, t);
        });
    }
    var c = e.stateNode;
    return (
      c !== null &&
        typeof c.componentDidCatch == "function" &&
        (r.callback = function () {
          ea(e, t),
            typeof s != "function" &&
              (Un === null ? (Un = new Set([this])) : Un.add(this));
          var p = t.stack;
          this.componentDidCatch(t.value, {
            componentStack: p !== null ? p : "",
          });
        }),
      r
    );
  }
  function md(e, t, r) {
    var s = e.pingCache;
    if (s === null) {
      s = e.pingCache = new kg();
      var a = new Set();
      s.set(t, a);
    } else (a = s.get(t)), a === void 0 && ((a = new Set()), s.set(t, a));
    a.has(r) || (a.add(r), (e = zg.bind(null, e, t, r)), t.then(e, e));
  }
  function gd(e) {
    do {
      var t;
      if (
        ((t = e.tag === 13) &&
          ((t = e.memoizedState),
          (t = t !== null ? t.dehydrated !== null : !0)),
        t)
      )
        return e;
      e = e.return;
    } while (e !== null);
    return null;
  }
  function vd(e, t, r, s, a) {
    return (e.mode & 1) === 0
      ? (e === t
          ? (e.flags |= 65536)
          : ((e.flags |= 128),
            (r.flags |= 131072),
            (r.flags &= -52805),
            r.tag === 1 &&
              (r.alternate === null
                ? (r.tag = 17)
                : ((t = gn(-1, 1)), (t.tag = 2), Fn(r, t, 1))),
            (r.lanes |= 1)),
        e)
      : ((e.flags |= 65536), (e.lanes = a), e);
  }
  var Pg = z.ReactCurrentOwner,
    ft = !1;
  function it(e, t, r, s) {
    t.child = e === null ? Ic(t, null, r, s) : Ir(t, e.child, r, s);
  }
  function yd(e, t, r, s, a) {
    r = r.render;
    var c = t.ref;
    return (
      zr(t, a),
      (s = Wl(e, t, r, s, c, a)),
      (r = Ql()),
      e !== null && !ft
        ? ((t.updateQueue = e.updateQueue),
          (t.flags &= -2053),
          (e.lanes &= ~a),
          vn(e, t, a))
        : (_e && r && Tl(t), (t.flags |= 1), it(e, t, s, a), t.child)
    );
  }
  function xd(e, t, r, s, a) {
    if (e === null) {
      var c = r.type;
      return typeof c == "function" &&
        !ba(c) &&
        c.defaultProps === void 0 &&
        r.compare === null &&
        r.defaultProps === void 0
        ? ((t.tag = 15), (t.type = c), wd(e, t, c, s, a))
        : ((e = ds(r.type, null, s, t, t.mode, a)),
          (e.ref = t.ref),
          (e.return = t),
          (t.child = e));
    }
    if (((c = e.child), (e.lanes & a) === 0)) {
      var p = c.memoizedProps;
      if (
        ((r = r.compare), (r = r !== null ? r : Co), r(p, s) && e.ref === t.ref)
      )
        return vn(e, t, a);
    }
    return (
      (t.flags |= 1),
      (e = Hn(c, s)),
      (e.ref = t.ref),
      (e.return = t),
      (t.child = e)
    );
  }
  function wd(e, t, r, s, a) {
    if (e !== null) {
      var c = e.memoizedProps;
      if (Co(c, s) && e.ref === t.ref)
        if (((ft = !1), (t.pendingProps = s = c), (e.lanes & a) !== 0))
          (e.flags & 131072) !== 0 && (ft = !0);
        else return (t.lanes = e.lanes), vn(e, t, a);
    }
    return ta(e, t, r, s, a);
  }
  function Sd(e, t, r) {
    var s = t.pendingProps,
      a = s.children,
      c = e !== null ? e.memoizedState : null;
    if (s.mode === "hidden")
      if ((t.mode & 1) === 0)
        (t.memoizedState = {
          baseLanes: 0,
          cachePool: null,
          transitions: null,
        }),
          Te(Vr, St),
          (St |= r);
      else {
        if ((r & 1073741824) === 0)
          return (
            (e = c !== null ? c.baseLanes | r : r),
            (t.lanes = t.childLanes = 1073741824),
            (t.memoizedState = {
              baseLanes: e,
              cachePool: null,
              transitions: null,
            }),
            (t.updateQueue = null),
            Te(Vr, St),
            (St |= e),
            null
          );
        (t.memoizedState = {
          baseLanes: 0,
          cachePool: null,
          transitions: null,
        }),
          (s = c !== null ? c.baseLanes : r),
          Te(Vr, St),
          (St |= s);
      }
    else
      c !== null ? ((s = c.baseLanes | r), (t.memoizedState = null)) : (s = r),
        Te(Vr, St),
        (St |= s);
    return it(e, t, a, r), t.child;
  }
  function bd(e, t) {
    var r = t.ref;
    ((e === null && r !== null) || (e !== null && e.ref !== r)) &&
      ((t.flags |= 512), (t.flags |= 2097152));
  }
  function ta(e, t, r, s, a) {
    var c = dt(r) ? or : Ze.current;
    return (
      (c = Mr(t, c)),
      zr(t, a),
      (r = Wl(e, t, r, s, c, a)),
      (s = Ql()),
      e !== null && !ft
        ? ((t.updateQueue = e.updateQueue),
          (t.flags &= -2053),
          (e.lanes &= ~a),
          vn(e, t, a))
        : (_e && s && Tl(t), (t.flags |= 1), it(e, t, r, a), t.child)
    );
  }
  function Ed(e, t, r, s, a) {
    if (dt(r)) {
      var c = !0;
      Di(t);
    } else c = !1;
    if ((zr(t, a), t.stateNode === null))
      es(e, t), dd(t, r, s), Zl(t, r, s, a), (s = !0);
    else if (e === null) {
      var p = t.stateNode,
        b = t.memoizedProps;
      p.props = b;
      var k = p.context,
        _ = r.contextType;
      typeof _ == "object" && _ !== null
        ? (_ = Rt(_))
        : ((_ = dt(r) ? or : Ze.current), (_ = Mr(t, _)));
      var B = r.getDerivedStateFromProps,
        $ =
          typeof B == "function" ||
          typeof p.getSnapshotBeforeUpdate == "function";
      $ ||
        (typeof p.UNSAFE_componentWillReceiveProps != "function" &&
          typeof p.componentWillReceiveProps != "function") ||
        ((b !== s || k !== _) && fd(t, p, s, _)),
        (In = !1);
      var U = t.memoizedState;
      (p.state = U),
        Wi(t, s, p, a),
        (k = t.memoizedState),
        b !== s || U !== k || ct.current || In
          ? (typeof B == "function" && (Xl(t, r, B, s), (k = t.memoizedState)),
            (b = In || cd(t, r, b, s, U, k, _))
              ? ($ ||
                  (typeof p.UNSAFE_componentWillMount != "function" &&
                    typeof p.componentWillMount != "function") ||
                  (typeof p.componentWillMount == "function" &&
                    p.componentWillMount(),
                  typeof p.UNSAFE_componentWillMount == "function" &&
                    p.UNSAFE_componentWillMount()),
                typeof p.componentDidMount == "function" &&
                  (t.flags |= 4194308))
              : (typeof p.componentDidMount == "function" &&
                  (t.flags |= 4194308),
                (t.memoizedProps = s),
                (t.memoizedState = k)),
            (p.props = s),
            (p.state = k),
            (p.context = _),
            (s = b))
          : (typeof p.componentDidMount == "function" && (t.flags |= 4194308),
            (s = !1));
    } else {
      (p = t.stateNode),
        zc(e, t),
        (b = t.memoizedProps),
        (_ = t.type === t.elementType ? b : Ft(t.type, b)),
        (p.props = _),
        ($ = t.pendingProps),
        (U = p.context),
        (k = r.contextType),
        typeof k == "object" && k !== null
          ? (k = Rt(k))
          : ((k = dt(r) ? or : Ze.current), (k = Mr(t, k)));
      var X = r.getDerivedStateFromProps;
      (B =
        typeof X == "function" ||
        typeof p.getSnapshotBeforeUpdate == "function") ||
        (typeof p.UNSAFE_componentWillReceiveProps != "function" &&
          typeof p.componentWillReceiveProps != "function") ||
        ((b !== $ || U !== k) && fd(t, p, s, k)),
        (In = !1),
        (U = t.memoizedState),
        (p.state = U),
        Wi(t, s, p, a);
      var te = t.memoizedState;
      b !== $ || U !== te || ct.current || In
        ? (typeof X == "function" && (Xl(t, r, X, s), (te = t.memoizedState)),
          (_ = In || cd(t, r, _, s, U, te, k) || !1)
            ? (B ||
                (typeof p.UNSAFE_componentWillUpdate != "function" &&
                  typeof p.componentWillUpdate != "function") ||
                (typeof p.componentWillUpdate == "function" &&
                  p.componentWillUpdate(s, te, k),
                typeof p.UNSAFE_componentWillUpdate == "function" &&
                  p.UNSAFE_componentWillUpdate(s, te, k)),
              typeof p.componentDidUpdate == "function" && (t.flags |= 4),
              typeof p.getSnapshotBeforeUpdate == "function" &&
                (t.flags |= 1024))
            : (typeof p.componentDidUpdate != "function" ||
                (b === e.memoizedProps && U === e.memoizedState) ||
                (t.flags |= 4),
              typeof p.getSnapshotBeforeUpdate != "function" ||
                (b === e.memoizedProps && U === e.memoizedState) ||
                (t.flags |= 1024),
              (t.memoizedProps = s),
              (t.memoizedState = te)),
          (p.props = s),
          (p.state = te),
          (p.context = k),
          (s = _))
        : (typeof p.componentDidUpdate != "function" ||
            (b === e.memoizedProps && U === e.memoizedState) ||
            (t.flags |= 4),
          typeof p.getSnapshotBeforeUpdate != "function" ||
            (b === e.memoizedProps && U === e.memoizedState) ||
            (t.flags |= 1024),
          (s = !1));
    }
    return na(e, t, r, s, c, a);
  }
  function na(e, t, r, s, a, c) {
    bd(e, t);
    var p = (t.flags & 128) !== 0;
    if (!s && !p) return a && Tc(t, r, !1), vn(e, t, c);
    (s = t.stateNode), (Pg.current = t);
    var b =
      p && typeof r.getDerivedStateFromError != "function" ? null : s.render();
    return (
      (t.flags |= 1),
      e !== null && p
        ? ((t.child = Ir(t, e.child, null, c)), (t.child = Ir(t, null, b, c)))
        : it(e, t, b, c),
      (t.memoizedState = s.state),
      a && Tc(t, r, !0),
      t.child
    );
  }
  function Cd(e) {
    var t = e.stateNode;
    t.pendingContext
      ? Pc(e, t.pendingContext, t.pendingContext !== t.context)
      : t.context && Pc(e, t.context, !1),
      zl(e, t.containerInfo);
  }
  function kd(e, t, r, s, a) {
    return Dr(), _l(a), (t.flags |= 256), it(e, t, r, s), t.child;
  }
  var ra = { dehydrated: null, treeContext: null, retryLane: 0 };
  function oa(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
  }
  function Pd(e, t, r) {
    var s = t.pendingProps,
      a = Me.current,
      c = !1,
      p = (t.flags & 128) !== 0,
      b;
    if (
      ((b = p) ||
        (b = e !== null && e.memoizedState === null ? !1 : (a & 2) !== 0),
      b
        ? ((c = !0), (t.flags &= -129))
        : (e === null || e.memoizedState !== null) && (a |= 1),
      Te(Me, a & 1),
      e === null)
    )
      return (
        Ol(t),
        (e = t.memoizedState),
        e !== null && ((e = e.dehydrated), e !== null)
          ? ((t.mode & 1) === 0
              ? (t.lanes = 1)
              : e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824),
            null)
          : ((p = s.children),
            (e = s.fallback),
            c
              ? ((s = t.mode),
                (c = t.child),
                (p = { mode: "hidden", children: p }),
                (s & 1) === 0 && c !== null
                  ? ((c.childLanes = 0), (c.pendingProps = p))
                  : (c = fs(p, s, 0, null)),
                (e = hr(e, s, r, null)),
                (c.return = t),
                (e.return = t),
                (c.sibling = e),
                (t.child = c),
                (t.child.memoizedState = oa(r)),
                (t.memoizedState = ra),
                e)
              : ia(t, p))
      );
    if (((a = e.memoizedState), a !== null && ((b = a.dehydrated), b !== null)))
      return Ng(e, t, p, s, b, a, r);
    if (c) {
      (c = s.fallback), (p = t.mode), (a = e.child), (b = a.sibling);
      var k = { mode: "hidden", children: s.children };
      return (
        (p & 1) === 0 && t.child !== a
          ? ((s = t.child),
            (s.childLanes = 0),
            (s.pendingProps = k),
            (t.deletions = null))
          : ((s = Hn(a, k)), (s.subtreeFlags = a.subtreeFlags & 14680064)),
        b !== null ? (c = Hn(b, c)) : ((c = hr(c, p, r, null)), (c.flags |= 2)),
        (c.return = t),
        (s.return = t),
        (s.sibling = c),
        (t.child = s),
        (s = c),
        (c = t.child),
        (p = e.child.memoizedState),
        (p =
          p === null
            ? oa(r)
            : {
                baseLanes: p.baseLanes | r,
                cachePool: null,
                transitions: p.transitions,
              }),
        (c.memoizedState = p),
        (c.childLanes = e.childLanes & ~r),
        (t.memoizedState = ra),
        s
      );
    }
    return (
      (c = e.child),
      (e = c.sibling),
      (s = Hn(c, { mode: "visible", children: s.children })),
      (t.mode & 1) === 0 && (s.lanes = r),
      (s.return = t),
      (s.sibling = null),
      e !== null &&
        ((r = t.deletions),
        r === null ? ((t.deletions = [e]), (t.flags |= 16)) : r.push(e)),
      (t.child = s),
      (t.memoizedState = null),
      s
    );
  }
  function ia(e, t) {
    return (
      (t = fs({ mode: "visible", children: t }, e.mode, 0, null)),
      (t.return = e),
      (e.child = t)
    );
  }
  function Ji(e, t, r, s) {
    return (
      s !== null && _l(s),
      Ir(t, e.child, null, r),
      (e = ia(t, t.pendingProps.children)),
      (e.flags |= 2),
      (t.memoizedState = null),
      e
    );
  }
  function Ng(e, t, r, s, a, c, p) {
    if (r)
      return t.flags & 256
        ? ((t.flags &= -257), (s = Jl(Error(i(422)))), Ji(e, t, p, s))
        : t.memoizedState !== null
        ? ((t.child = e.child), (t.flags |= 128), null)
        : ((c = s.fallback),
          (a = t.mode),
          (s = fs({ mode: "visible", children: s.children }, a, 0, null)),
          (c = hr(c, a, p, null)),
          (c.flags |= 2),
          (s.return = t),
          (c.return = t),
          (s.sibling = c),
          (t.child = s),
          (t.mode & 1) !== 0 && Ir(t, e.child, null, p),
          (t.child.memoizedState = oa(p)),
          (t.memoizedState = ra),
          c);
    if ((t.mode & 1) === 0) return Ji(e, t, p, null);
    if (a.data === "$!") {
      if (((s = a.nextSibling && a.nextSibling.dataset), s)) var b = s.dgst;
      return (
        (s = b), (c = Error(i(419))), (s = Jl(c, s, void 0)), Ji(e, t, p, s)
      );
    }
    if (((b = (p & e.childLanes) !== 0), ft || b)) {
      if (((s = Qe), s !== null)) {
        switch (p & -p) {
          case 4:
            a = 2;
            break;
          case 16:
            a = 8;
            break;
          case 64:
          case 128:
          case 256:
          case 512:
          case 1024:
          case 2048:
          case 4096:
          case 8192:
          case 16384:
          case 32768:
          case 65536:
          case 131072:
          case 262144:
          case 524288:
          case 1048576:
          case 2097152:
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
          case 67108864:
            a = 32;
            break;
          case 536870912:
            a = 268435456;
            break;
          default:
            a = 0;
        }
        (a = (a & (s.suspendedLanes | p)) !== 0 ? 0 : a),
          a !== 0 &&
            a !== c.retryLane &&
            ((c.retryLane = a), mn(e, a), Bt(s, e, a, -1));
      }
      return Sa(), (s = Jl(Error(i(421)))), Ji(e, t, p, s);
    }
    return a.data === "$?"
      ? ((t.flags |= 128),
        (t.child = e.child),
        (t = Ug.bind(null, e)),
        (a._reactRetry = t),
        null)
      : ((e = c.treeContext),
        (wt = Mn(a.nextSibling)),
        (xt = t),
        (_e = !0),
        (It = null),
        e !== null &&
          ((Nt[Tt++] = pn),
          (Nt[Tt++] = hn),
          (Nt[Tt++] = ir),
          (pn = e.id),
          (hn = e.overflow),
          (ir = t)),
        (t = ia(t, s.children)),
        (t.flags |= 4096),
        t);
  }
  function Nd(e, t, r) {
    e.lanes |= t;
    var s = e.alternate;
    s !== null && (s.lanes |= t), Dl(e.return, t, r);
  }
  function sa(e, t, r, s, a) {
    var c = e.memoizedState;
    c === null
      ? (e.memoizedState = {
          isBackwards: t,
          rendering: null,
          renderingStartTime: 0,
          last: s,
          tail: r,
          tailMode: a,
        })
      : ((c.isBackwards = t),
        (c.rendering = null),
        (c.renderingStartTime = 0),
        (c.last = s),
        (c.tail = r),
        (c.tailMode = a));
  }
  function Td(e, t, r) {
    var s = t.pendingProps,
      a = s.revealOrder,
      c = s.tail;
    if ((it(e, t, s.children, r), (s = Me.current), (s & 2) !== 0))
      (s = (s & 1) | 2), (t.flags |= 128);
    else {
      if (e !== null && (e.flags & 128) !== 0)
        e: for (e = t.child; e !== null; ) {
          if (e.tag === 13) e.memoizedState !== null && Nd(e, r, t);
          else if (e.tag === 19) Nd(e, r, t);
          else if (e.child !== null) {
            (e.child.return = e), (e = e.child);
            continue;
          }
          if (e === t) break e;
          for (; e.sibling === null; ) {
            if (e.return === null || e.return === t) break e;
            e = e.return;
          }
          (e.sibling.return = e.return), (e = e.sibling);
        }
      s &= 1;
    }
    if ((Te(Me, s), (t.mode & 1) === 0)) t.memoizedState = null;
    else
      switch (a) {
        case "forwards":
          for (r = t.child, a = null; r !== null; )
            (e = r.alternate),
              e !== null && Qi(e) === null && (a = r),
              (r = r.sibling);
          (r = a),
            r === null
              ? ((a = t.child), (t.child = null))
              : ((a = r.sibling), (r.sibling = null)),
            sa(t, !1, a, r, c);
          break;
        case "backwards":
          for (r = null, a = t.child, t.child = null; a !== null; ) {
            if (((e = a.alternate), e !== null && Qi(e) === null)) {
              t.child = a;
              break;
            }
            (e = a.sibling), (a.sibling = r), (r = a), (a = e);
          }
          sa(t, !0, r, null, c);
          break;
        case "together":
          sa(t, !1, null, null, void 0);
          break;
        default:
          t.memoizedState = null;
      }
    return t.child;
  }
  function es(e, t) {
    (t.mode & 1) === 0 &&
      e !== null &&
      ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
  }
  function vn(e, t, r) {
    if (
      (e !== null && (t.dependencies = e.dependencies),
      (cr |= t.lanes),
      (r & t.childLanes) === 0)
    )
      return null;
    if (e !== null && t.child !== e.child) throw Error(i(153));
    if (t.child !== null) {
      for (
        e = t.child, r = Hn(e, e.pendingProps), t.child = r, r.return = t;
        e.sibling !== null;

      )
        (e = e.sibling),
          (r = r.sibling = Hn(e, e.pendingProps)),
          (r.return = t);
      r.sibling = null;
    }
    return t.child;
  }
  function Tg(e, t, r) {
    switch (t.tag) {
      case 3:
        Cd(t), Dr();
        break;
      case 5:
        $c(t);
        break;
      case 1:
        dt(t.type) && Di(t);
        break;
      case 4:
        zl(t, t.stateNode.containerInfo);
        break;
      case 10:
        var s = t.type._context,
          a = t.memoizedProps.value;
        Te($i, s._currentValue), (s._currentValue = a);
        break;
      case 13:
        if (((s = t.memoizedState), s !== null))
          return s.dehydrated !== null
            ? (Te(Me, Me.current & 1), (t.flags |= 128), null)
            : (r & t.child.childLanes) !== 0
            ? Pd(e, t, r)
            : (Te(Me, Me.current & 1),
              (e = vn(e, t, r)),
              e !== null ? e.sibling : null);
        Te(Me, Me.current & 1);
        break;
      case 19:
        if (((s = (r & t.childLanes) !== 0), (e.flags & 128) !== 0)) {
          if (s) return Td(e, t, r);
          t.flags |= 128;
        }
        if (
          ((a = t.memoizedState),
          a !== null &&
            ((a.rendering = null), (a.tail = null), (a.lastEffect = null)),
          Te(Me, Me.current),
          s)
        )
          break;
        return null;
      case 22:
      case 23:
        return (t.lanes = 0), Sd(e, t, r);
    }
    return vn(e, t, r);
  }
  var Rd, la, jd, Od;
  (Rd = function (e, t) {
    for (var r = t.child; r !== null; ) {
      if (r.tag === 5 || r.tag === 6) e.appendChild(r.stateNode);
      else if (r.tag !== 4 && r.child !== null) {
        (r.child.return = r), (r = r.child);
        continue;
      }
      if (r === t) break;
      for (; r.sibling === null; ) {
        if (r.return === null || r.return === t) return;
        r = r.return;
      }
      (r.sibling.return = r.return), (r = r.sibling);
    }
  }),
    (la = function () {}),
    (jd = function (e, t, r, s) {
      var a = e.memoizedProps;
      if (a !== s) {
        (e = t.stateNode), ar(nn.current);
        var c = null;
        switch (r) {
          case "input":
            (a = oo(e, a)), (s = oo(e, s)), (c = []);
            break;
          case "select":
            (a = V({}, a, { value: void 0 })),
              (s = V({}, s, { value: void 0 })),
              (c = []);
            break;
          case "textarea":
            (a = xr(e, a)), (s = xr(e, s)), (c = []);
            break;
          default:
            typeof a.onClick != "function" &&
              typeof s.onClick == "function" &&
              (e.onclick = Mi);
        }
        Xt(r, s);
        var p;
        r = null;
        for (_ in a)
          if (!s.hasOwnProperty(_) && a.hasOwnProperty(_) && a[_] != null)
            if (_ === "style") {
              var b = a[_];
              for (p in b) b.hasOwnProperty(p) && (r || (r = {}), (r[p] = ""));
            } else
              _ !== "dangerouslySetInnerHTML" &&
                _ !== "children" &&
                _ !== "suppressContentEditableWarning" &&
                _ !== "suppressHydrationWarning" &&
                _ !== "autoFocus" &&
                (u.hasOwnProperty(_)
                  ? c || (c = [])
                  : (c = c || []).push(_, null));
        for (_ in s) {
          var k = s[_];
          if (
            ((b = a?.[_]),
            s.hasOwnProperty(_) && k !== b && (k != null || b != null))
          )
            if (_ === "style")
              if (b) {
                for (p in b)
                  !b.hasOwnProperty(p) ||
                    (k && k.hasOwnProperty(p)) ||
                    (r || (r = {}), (r[p] = ""));
                for (p in k)
                  k.hasOwnProperty(p) &&
                    b[p] !== k[p] &&
                    (r || (r = {}), (r[p] = k[p]));
              } else r || (c || (c = []), c.push(_, r)), (r = k);
            else
              _ === "dangerouslySetInnerHTML"
                ? ((k = k ? k.__html : void 0),
                  (b = b ? b.__html : void 0),
                  k != null && b !== k && (c = c || []).push(_, k))
                : _ === "children"
                ? (typeof k != "string" && typeof k != "number") ||
                  (c = c || []).push(_, "" + k)
                : _ !== "suppressContentEditableWarning" &&
                  _ !== "suppressHydrationWarning" &&
                  (u.hasOwnProperty(_)
                    ? (k != null && _ === "onScroll" && Re("scroll", e),
                      c || b === k || (c = []))
                    : (c = c || []).push(_, k));
        }
        r && (c = c || []).push("style", r);
        var _ = c;
        (t.updateQueue = _) && (t.flags |= 4);
      }
    }),
    (Od = function (e, t, r, s) {
      r !== s && (t.flags |= 4);
    });
  function zo(e, t) {
    if (!_e)
      switch (e.tailMode) {
        case "hidden":
          t = e.tail;
          for (var r = null; t !== null; )
            t.alternate !== null && (r = t), (t = t.sibling);
          r === null ? (e.tail = null) : (r.sibling = null);
          break;
        case "collapsed":
          r = e.tail;
          for (var s = null; r !== null; )
            r.alternate !== null && (s = r), (r = r.sibling);
          s === null
            ? t || e.tail === null
              ? (e.tail = null)
              : (e.tail.sibling = null)
            : (s.sibling = null);
      }
  }
  function et(e) {
    var t = e.alternate !== null && e.alternate.child === e.child,
      r = 0,
      s = 0;
    if (t)
      for (var a = e.child; a !== null; )
        (r |= a.lanes | a.childLanes),
          (s |= a.subtreeFlags & 14680064),
          (s |= a.flags & 14680064),
          (a.return = e),
          (a = a.sibling);
    else
      for (a = e.child; a !== null; )
        (r |= a.lanes | a.childLanes),
          (s |= a.subtreeFlags),
          (s |= a.flags),
          (a.return = e),
          (a = a.sibling);
    return (e.subtreeFlags |= s), (e.childLanes = r), t;
  }
  function Rg(e, t, r) {
    var s = t.pendingProps;
    switch ((Rl(t), t.tag)) {
      case 2:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return et(t), null;
      case 1:
        return dt(t.type) && Li(), et(t), null;
      case 3:
        return (
          (s = t.stateNode),
          Ur(),
          je(ct),
          je(Ze),
          $l(),
          s.pendingContext &&
            ((s.context = s.pendingContext), (s.pendingContext = null)),
          (e === null || e.child === null) &&
            (Ui(t)
              ? (t.flags |= 4)
              : e === null ||
                (e.memoizedState.isDehydrated && (t.flags & 256) === 0) ||
                ((t.flags |= 1024), It !== null && (ya(It), (It = null)))),
          la(e, t),
          et(t),
          null
        );
      case 5:
        Ul(t);
        var a = ar(Ao.current);
        if (((r = t.type), e !== null && t.stateNode != null))
          jd(e, t, r, s, a),
            e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
        else {
          if (!s) {
            if (t.stateNode === null) throw Error(i(166));
            return et(t), null;
          }
          if (((e = ar(nn.current)), Ui(t))) {
            (s = t.stateNode), (r = t.type);
            var c = t.memoizedProps;
            switch (((s[tn] = t), (s[Ro] = c), (e = (t.mode & 1) !== 0), r)) {
              case "dialog":
                Re("cancel", s), Re("close", s);
                break;
              case "iframe":
              case "object":
              case "embed":
                Re("load", s);
                break;
              case "video":
              case "audio":
                for (a = 0; a < Po.length; a++) Re(Po[a], s);
                break;
              case "source":
                Re("error", s);
                break;
              case "img":
              case "image":
              case "link":
                Re("error", s), Re("load", s);
                break;
              case "details":
                Re("toggle", s);
                break;
              case "input":
                ii(s, c), Re("invalid", s);
                break;
              case "select":
                (s._wrapperState = { wasMultiple: !!c.multiple }),
                  Re("invalid", s);
                break;
              case "textarea":
                qt(s, c), Re("invalid", s);
            }
            Xt(r, c), (a = null);
            for (var p in c)
              if (c.hasOwnProperty(p)) {
                var b = c[p];
                p === "children"
                  ? typeof b == "string"
                    ? s.textContent !== b &&
                      (c.suppressHydrationWarning !== !0 &&
                        _i(s.textContent, b, e),
                      (a = ["children", b]))
                    : typeof b == "number" &&
                      s.textContent !== "" + b &&
                      (c.suppressHydrationWarning !== !0 &&
                        _i(s.textContent, b, e),
                      (a = ["children", "" + b]))
                  : u.hasOwnProperty(p) &&
                    b != null &&
                    p === "onScroll" &&
                    Re("scroll", s);
              }
            switch (r) {
              case "input":
                Ct(s), yr(s, c, !0);
                break;
              case "textarea":
                Ct(s), li(s);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof c.onClick == "function" && (s.onclick = Mi);
            }
            (s = a), (t.updateQueue = s), s !== null && (t.flags |= 4);
          } else {
            (p = a.nodeType === 9 ? a : a.ownerDocument),
              e === "http://www.w3.org/1999/xhtml" && (e = rt(r)),
              e === "http://www.w3.org/1999/xhtml"
                ? r === "script"
                  ? ((e = p.createElement("div")),
                    (e.innerHTML = "<script></script>"),
                    (e = e.removeChild(e.firstChild)))
                  : typeof s.is == "string"
                  ? (e = p.createElement(r, { is: s.is }))
                  : ((e = p.createElement(r)),
                    r === "select" &&
                      ((p = e),
                      s.multiple
                        ? (p.multiple = !0)
                        : s.size && (p.size = s.size)))
                : (e = p.createElementNS(e, r)),
              (e[tn] = t),
              (e[Ro] = s),
              Rd(e, t, !1, !1),
              (t.stateNode = e);
            e: {
              switch (((p = ao(r, s)), r)) {
                case "dialog":
                  Re("cancel", e), Re("close", e), (a = s);
                  break;
                case "iframe":
                case "object":
                case "embed":
                  Re("load", e), (a = s);
                  break;
                case "video":
                case "audio":
                  for (a = 0; a < Po.length; a++) Re(Po[a], e);
                  a = s;
                  break;
                case "source":
                  Re("error", e), (a = s);
                  break;
                case "img":
                case "image":
                case "link":
                  Re("error", e), Re("load", e), (a = s);
                  break;
                case "details":
                  Re("toggle", e), (a = s);
                  break;
                case "input":
                  ii(e, s), (a = oo(e, s)), Re("invalid", e);
                  break;
                case "option":
                  a = s;
                  break;
                case "select":
                  (e._wrapperState = { wasMultiple: !!s.multiple }),
                    (a = V({}, s, { value: void 0 })),
                    Re("invalid", e);
                  break;
                case "textarea":
                  qt(e, s), (a = xr(e, s)), Re("invalid", e);
                  break;
                default:
                  a = s;
              }
              Xt(r, a), (b = a);
              for (c in b)
                if (b.hasOwnProperty(c)) {
                  var k = b[c];
                  c === "style"
                    ? cn(e, k)
                    : c === "dangerouslySetInnerHTML"
                    ? ((k = k ? k.__html : void 0), k != null && ai(e, k))
                    : c === "children"
                    ? typeof k == "string"
                      ? (r !== "textarea" || k !== "") && Yt(e, k)
                      : typeof k == "number" && Yt(e, "" + k)
                    : c !== "suppressContentEditableWarning" &&
                      c !== "suppressHydrationWarning" &&
                      c !== "autoFocus" &&
                      (u.hasOwnProperty(c)
                        ? k != null && c === "onScroll" && Re("scroll", e)
                        : k != null && D(e, c, k, p));
                }
              switch (r) {
                case "input":
                  Ct(e), yr(e, s, !1);
                  break;
                case "textarea":
                  Ct(e), li(e);
                  break;
                case "option":
                  s.value != null && e.setAttribute("value", "" + Se(s.value));
                  break;
                case "select":
                  (e.multiple = !!s.multiple),
                    (c = s.value),
                    c != null
                      ? Pt(e, !!s.multiple, c, !1)
                      : s.defaultValue != null &&
                        Pt(e, !!s.multiple, s.defaultValue, !0);
                  break;
                default:
                  typeof a.onClick == "function" && (e.onclick = Mi);
              }
              switch (r) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  s = !!s.autoFocus;
                  break e;
                case "img":
                  s = !0;
                  break e;
                default:
                  s = !1;
              }
            }
            s && (t.flags |= 4);
          }
          t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
        }
        return et(t), null;
      case 6:
        if (e && t.stateNode != null) Od(e, t, e.memoizedProps, s);
        else {
          if (typeof s != "string" && t.stateNode === null) throw Error(i(166));
          if (((r = ar(Ao.current)), ar(nn.current), Ui(t))) {
            if (
              ((s = t.stateNode),
              (r = t.memoizedProps),
              (s[tn] = t),
              (c = s.nodeValue !== r) && ((e = xt), e !== null))
            )
              switch (e.tag) {
                case 3:
                  _i(s.nodeValue, r, (e.mode & 1) !== 0);
                  break;
                case 5:
                  e.memoizedProps.suppressHydrationWarning !== !0 &&
                    _i(s.nodeValue, r, (e.mode & 1) !== 0);
              }
            c && (t.flags |= 4);
          } else
            (s = (r.nodeType === 9 ? r : r.ownerDocument).createTextNode(s)),
              (s[tn] = t),
              (t.stateNode = s);
        }
        return et(t), null;
      case 13:
        if (
          (je(Me),
          (s = t.memoizedState),
          e === null ||
            (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
        ) {
          if (_e && wt !== null && (t.mode & 1) !== 0 && (t.flags & 128) === 0)
            Ac(), Dr(), (t.flags |= 98560), (c = !1);
          else if (((c = Ui(t)), s !== null && s.dehydrated !== null)) {
            if (e === null) {
              if (!c) throw Error(i(318));
              if (
                ((c = t.memoizedState),
                (c = c !== null ? c.dehydrated : null),
                !c)
              )
                throw Error(i(317));
              c[tn] = t;
            } else
              Dr(),
                (t.flags & 128) === 0 && (t.memoizedState = null),
                (t.flags |= 4);
            et(t), (c = !1);
          } else It !== null && (ya(It), (It = null)), (c = !0);
          if (!c) return t.flags & 65536 ? t : null;
        }
        return (t.flags & 128) !== 0
          ? ((t.lanes = r), t)
          : ((s = s !== null),
            s !== (e !== null && e.memoizedState !== null) &&
              s &&
              ((t.child.flags |= 8192),
              (t.mode & 1) !== 0 &&
                (e === null || (Me.current & 1) !== 0
                  ? Ve === 0 && (Ve = 3)
                  : Sa())),
            t.updateQueue !== null && (t.flags |= 4),
            et(t),
            null);
      case 4:
        return (
          Ur(),
          la(e, t),
          e === null && No(t.stateNode.containerInfo),
          et(t),
          null
        );
      case 10:
        return Ll(t.type._context), et(t), null;
      case 17:
        return dt(t.type) && Li(), et(t), null;
      case 19:
        if ((je(Me), (c = t.memoizedState), c === null)) return et(t), null;
        if (((s = (t.flags & 128) !== 0), (p = c.rendering), p === null))
          if (s) zo(c, !1);
          else {
            if (Ve !== 0 || (e !== null && (e.flags & 128) !== 0))
              for (e = t.child; e !== null; ) {
                if (((p = Qi(e)), p !== null)) {
                  for (
                    t.flags |= 128,
                      zo(c, !1),
                      s = p.updateQueue,
                      s !== null && ((t.updateQueue = s), (t.flags |= 4)),
                      t.subtreeFlags = 0,
                      s = r,
                      r = t.child;
                    r !== null;

                  )
                    (c = r),
                      (e = s),
                      (c.flags &= 14680066),
                      (p = c.alternate),
                      p === null
                        ? ((c.childLanes = 0),
                          (c.lanes = e),
                          (c.child = null),
                          (c.subtreeFlags = 0),
                          (c.memoizedProps = null),
                          (c.memoizedState = null),
                          (c.updateQueue = null),
                          (c.dependencies = null),
                          (c.stateNode = null))
                        : ((c.childLanes = p.childLanes),
                          (c.lanes = p.lanes),
                          (c.child = p.child),
                          (c.subtreeFlags = 0),
                          (c.deletions = null),
                          (c.memoizedProps = p.memoizedProps),
                          (c.memoizedState = p.memoizedState),
                          (c.updateQueue = p.updateQueue),
                          (c.type = p.type),
                          (e = p.dependencies),
                          (c.dependencies =
                            e === null
                              ? null
                              : {
                                  lanes: e.lanes,
                                  firstContext: e.firstContext,
                                })),
                      (r = r.sibling);
                  return Te(Me, (Me.current & 1) | 2), t.child;
                }
                e = e.sibling;
              }
            c.tail !== null &&
              De() > Hr &&
              ((t.flags |= 128), (s = !0), zo(c, !1), (t.lanes = 4194304));
          }
        else {
          if (!s)
            if (((e = Qi(p)), e !== null)) {
              if (
                ((t.flags |= 128),
                (s = !0),
                (r = e.updateQueue),
                r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                zo(c, !0),
                c.tail === null &&
                  c.tailMode === "hidden" &&
                  !p.alternate &&
                  !_e)
              )
                return et(t), null;
            } else
              2 * De() - c.renderingStartTime > Hr &&
                r !== 1073741824 &&
                ((t.flags |= 128), (s = !0), zo(c, !1), (t.lanes = 4194304));
          c.isBackwards
            ? ((p.sibling = t.child), (t.child = p))
            : ((r = c.last),
              r !== null ? (r.sibling = p) : (t.child = p),
              (c.last = p));
        }
        return c.tail !== null
          ? ((t = c.tail),
            (c.rendering = t),
            (c.tail = t.sibling),
            (c.renderingStartTime = De()),
            (t.sibling = null),
            (r = Me.current),
            Te(Me, s ? (r & 1) | 2 : r & 1),
            t)
          : (et(t), null);
      case 22:
      case 23:
        return (
          wa(),
          (s = t.memoizedState !== null),
          e !== null && (e.memoizedState !== null) !== s && (t.flags |= 8192),
          s && (t.mode & 1) !== 0
            ? (St & 1073741824) !== 0 &&
              (et(t), t.subtreeFlags & 6 && (t.flags |= 8192))
            : et(t),
          null
        );
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(i(156, t.tag));
  }
  function jg(e, t) {
    switch ((Rl(t), t.tag)) {
      case 1:
        return (
          dt(t.type) && Li(),
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 3:
        return (
          Ur(),
          je(ct),
          je(Ze),
          $l(),
          (e = t.flags),
          (e & 65536) !== 0 && (e & 128) === 0
            ? ((t.flags = (e & -65537) | 128), t)
            : null
        );
      case 5:
        return Ul(t), null;
      case 13:
        if (
          (je(Me), (e = t.memoizedState), e !== null && e.dehydrated !== null)
        ) {
          if (t.alternate === null) throw Error(i(340));
          Dr();
        }
        return (
          (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 19:
        return je(Me), null;
      case 4:
        return Ur(), null;
      case 10:
        return Ll(t.type._context), null;
      case 22:
      case 23:
        return wa(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var ts = !1,
    tt = !1,
    Og = typeof WeakSet == "function" ? WeakSet : Set,
    ee = null;
  function $r(e, t) {
    var r = e.ref;
    if (r !== null)
      if (typeof r == "function")
        try {
          r(null);
        } catch (s) {
          Le(e, t, s);
        }
      else r.current = null;
  }
  function aa(e, t, r) {
    try {
      r();
    } catch (s) {
      Le(e, t, s);
    }
  }
  var _d = !1;
  function _g(e, t) {
    if (((wl = Si), (e = cc()), fl(e))) {
      if ("selectionStart" in e)
        var r = { start: e.selectionStart, end: e.selectionEnd };
      else
        e: {
          r = ((r = e.ownerDocument) && r.defaultView) || window;
          var s = r.getSelection && r.getSelection();
          if (s && s.rangeCount !== 0) {
            r = s.anchorNode;
            var a = s.anchorOffset,
              c = s.focusNode;
            s = s.focusOffset;
            try {
              r.nodeType, c.nodeType;
            } catch {
              r = null;
              break e;
            }
            var p = 0,
              b = -1,
              k = -1,
              _ = 0,
              B = 0,
              $ = e,
              U = null;
            t: for (;;) {
              for (
                var X;
                $ !== r || (a !== 0 && $.nodeType !== 3) || (b = p + a),
                  $ !== c || (s !== 0 && $.nodeType !== 3) || (k = p + s),
                  $.nodeType === 3 && (p += $.nodeValue.length),
                  (X = $.firstChild) !== null;

              )
                (U = $), ($ = X);
              for (;;) {
                if ($ === e) break t;
                if (
                  (U === r && ++_ === a && (b = p),
                  U === c && ++B === s && (k = p),
                  (X = $.nextSibling) !== null)
                )
                  break;
                ($ = U), (U = $.parentNode);
              }
              $ = X;
            }
            r = b === -1 || k === -1 ? null : { start: b, end: k };
          } else r = null;
        }
      r = r || { start: 0, end: 0 };
    } else r = null;
    for (
      Sl = { focusedElem: e, selectionRange: r }, Si = !1, ee = t;
      ee !== null;

    )
      if (
        ((t = ee), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null)
      )
        (e.return = t), (ee = e);
      else
        for (; ee !== null; ) {
          t = ee;
          try {
            var te = t.alternate;
            if ((t.flags & 1024) !== 0)
              switch (t.tag) {
                case 0:
                case 11:
                case 15:
                  break;
                case 1:
                  if (te !== null) {
                    var ne = te.memoizedProps,
                      Ie = te.memoizedState,
                      j = t.stateNode,
                      P = j.getSnapshotBeforeUpdate(
                        t.elementType === t.type ? ne : Ft(t.type, ne),
                        Ie
                      );
                    j.__reactInternalSnapshotBeforeUpdate = P;
                  }
                  break;
                case 3:
                  var O = t.stateNode.containerInfo;
                  O.nodeType === 1
                    ? (O.textContent = "")
                    : O.nodeType === 9 &&
                      O.documentElement &&
                      O.removeChild(O.documentElement);
                  break;
                case 5:
                case 6:
                case 4:
                case 17:
                  break;
                default:
                  throw Error(i(163));
              }
          } catch (W) {
            Le(t, t.return, W);
          }
          if (((e = t.sibling), e !== null)) {
            (e.return = t.return), (ee = e);
            break;
          }
          ee = t.return;
        }
    return (te = _d), (_d = !1), te;
  }
  function Uo(e, t, r) {
    var s = t.updateQueue;
    if (((s = s !== null ? s.lastEffect : null), s !== null)) {
      var a = (s = s.next);
      do {
        if ((a.tag & e) === e) {
          var c = a.destroy;
          (a.destroy = void 0), c !== void 0 && aa(t, r, c);
        }
        a = a.next;
      } while (a !== s);
    }
  }
  function ns(e, t) {
    if (
      ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
    ) {
      var r = (t = t.next);
      do {
        if ((r.tag & e) === e) {
          var s = r.create;
          r.destroy = s();
        }
        r = r.next;
      } while (r !== t);
    }
  }
  function ua(e) {
    var t = e.ref;
    if (t !== null) {
      var r = e.stateNode;
      switch (e.tag) {
        case 5:
          e = r;
          break;
        default:
          e = r;
      }
      typeof t == "function" ? t(e) : (t.current = e);
    }
  }
  function Md(e) {
    var t = e.alternate;
    t !== null && ((e.alternate = null), Md(t)),
      (e.child = null),
      (e.deletions = null),
      (e.sibling = null),
      e.tag === 5 &&
        ((t = e.stateNode),
        t !== null &&
          (delete t[tn],
          delete t[Ro],
          delete t[kl],
          delete t[hg],
          delete t[mg])),
      (e.stateNode = null),
      (e.return = null),
      (e.dependencies = null),
      (e.memoizedProps = null),
      (e.memoizedState = null),
      (e.pendingProps = null),
      (e.stateNode = null),
      (e.updateQueue = null);
  }
  function Ad(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
  }
  function Ld(e) {
    e: for (;;) {
      for (; e.sibling === null; ) {
        if (e.return === null || Ad(e.return)) return null;
        e = e.return;
      }
      for (
        e.sibling.return = e.return, e = e.sibling;
        e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

      ) {
        if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
        (e.child.return = e), (e = e.child);
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function ca(e, t, r) {
    var s = e.tag;
    if (s === 5 || s === 6)
      (e = e.stateNode),
        t
          ? r.nodeType === 8
            ? r.parentNode.insertBefore(e, t)
            : r.insertBefore(e, t)
          : (r.nodeType === 8
              ? ((t = r.parentNode), t.insertBefore(e, r))
              : ((t = r), t.appendChild(e)),
            (r = r._reactRootContainer),
            r != null || t.onclick !== null || (t.onclick = Mi));
    else if (s !== 4 && ((e = e.child), e !== null))
      for (ca(e, t, r), e = e.sibling; e !== null; )
        ca(e, t, r), (e = e.sibling);
  }
  function da(e, t, r) {
    var s = e.tag;
    if (s === 5 || s === 6)
      (e = e.stateNode), t ? r.insertBefore(e, t) : r.appendChild(e);
    else if (s !== 4 && ((e = e.child), e !== null))
      for (da(e, t, r), e = e.sibling; e !== null; )
        da(e, t, r), (e = e.sibling);
  }
  var Ge = null,
    zt = !1;
  function zn(e, t, r) {
    for (r = r.child; r !== null; ) Dd(e, t, r), (r = r.sibling);
  }
  function Dd(e, t, r) {
    if (en && typeof en.onCommitFiberUnmount == "function")
      try {
        en.onCommitFiberUnmount(mi, r);
      } catch {}
    switch (r.tag) {
      case 5:
        tt || $r(r, t);
      case 6:
        var s = Ge,
          a = zt;
        (Ge = null),
          zn(e, t, r),
          (Ge = s),
          (zt = a),
          Ge !== null &&
            (zt
              ? ((e = Ge),
                (r = r.stateNode),
                e.nodeType === 8
                  ? e.parentNode.removeChild(r)
                  : e.removeChild(r))
              : Ge.removeChild(r.stateNode));
        break;
      case 18:
        Ge !== null &&
          (zt
            ? ((e = Ge),
              (r = r.stateNode),
              e.nodeType === 8
                ? Cl(e.parentNode, r)
                : e.nodeType === 1 && Cl(e, r),
              yo(e))
            : Cl(Ge, r.stateNode));
        break;
      case 4:
        (s = Ge),
          (a = zt),
          (Ge = r.stateNode.containerInfo),
          (zt = !0),
          zn(e, t, r),
          (Ge = s),
          (zt = a);
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (
          !tt &&
          ((s = r.updateQueue), s !== null && ((s = s.lastEffect), s !== null))
        ) {
          a = s = s.next;
          do {
            var c = a,
              p = c.destroy;
            (c = c.tag),
              p !== void 0 && ((c & 2) !== 0 || (c & 4) !== 0) && aa(r, t, p),
              (a = a.next);
          } while (a !== s);
        }
        zn(e, t, r);
        break;
      case 1:
        if (
          !tt &&
          ($r(r, t),
          (s = r.stateNode),
          typeof s.componentWillUnmount == "function")
        )
          try {
            (s.props = r.memoizedProps),
              (s.state = r.memoizedState),
              s.componentWillUnmount();
          } catch (b) {
            Le(r, t, b);
          }
        zn(e, t, r);
        break;
      case 21:
        zn(e, t, r);
        break;
      case 22:
        r.mode & 1
          ? ((tt = (s = tt) || r.memoizedState !== null), zn(e, t, r), (tt = s))
          : zn(e, t, r);
        break;
      default:
        zn(e, t, r);
    }
  }
  function Id(e) {
    var t = e.updateQueue;
    if (t !== null) {
      e.updateQueue = null;
      var r = e.stateNode;
      r === null && (r = e.stateNode = new Og()),
        t.forEach(function (s) {
          var a = Bg.bind(null, e, s);
          r.has(s) || (r.add(s), s.then(a, a));
        });
    }
  }
  function Ut(e, t) {
    var r = t.deletions;
    if (r !== null)
      for (var s = 0; s < r.length; s++) {
        var a = r[s];
        try {
          var c = e,
            p = t,
            b = p;
          e: for (; b !== null; ) {
            switch (b.tag) {
              case 5:
                (Ge = b.stateNode), (zt = !1);
                break e;
              case 3:
                (Ge = b.stateNode.containerInfo), (zt = !0);
                break e;
              case 4:
                (Ge = b.stateNode.containerInfo), (zt = !0);
                break e;
            }
            b = b.return;
          }
          if (Ge === null) throw Error(i(160));
          Dd(c, p, a), (Ge = null), (zt = !1);
          var k = a.alternate;
          k !== null && (k.return = null), (a.return = null);
        } catch (_) {
          Le(a, t, _);
        }
      }
    if (t.subtreeFlags & 12854)
      for (t = t.child; t !== null; ) Fd(t, e), (t = t.sibling);
  }
  function Fd(e, t) {
    var r = e.alternate,
      s = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if ((Ut(t, e), on(e), s & 4)) {
          try {
            Uo(3, e, e.return), ns(3, e);
          } catch (ne) {
            Le(e, e.return, ne);
          }
          try {
            Uo(5, e, e.return);
          } catch (ne) {
            Le(e, e.return, ne);
          }
        }
        break;
      case 1:
        Ut(t, e), on(e), s & 512 && r !== null && $r(r, r.return);
        break;
      case 5:
        if (
          (Ut(t, e),
          on(e),
          s & 512 && r !== null && $r(r, r.return),
          e.flags & 32)
        ) {
          var a = e.stateNode;
          try {
            Yt(a, "");
          } catch (ne) {
            Le(e, e.return, ne);
          }
        }
        if (s & 4 && ((a = e.stateNode), a != null)) {
          var c = e.memoizedProps,
            p = r !== null ? r.memoizedProps : c,
            b = e.type,
            k = e.updateQueue;
          if (((e.updateQueue = null), k !== null))
            try {
              b === "input" && c.type === "radio" && c.name != null && io(a, c),
                ao(b, p);
              var _ = ao(b, c);
              for (p = 0; p < k.length; p += 2) {
                var B = k[p],
                  $ = k[p + 1];
                B === "style"
                  ? cn(a, $)
                  : B === "dangerouslySetInnerHTML"
                  ? ai(a, $)
                  : B === "children"
                  ? Yt(a, $)
                  : D(a, B, $, _);
              }
              switch (b) {
                case "input":
                  so(a, c);
                  break;
                case "textarea":
                  si(a, c);
                  break;
                case "select":
                  var U = a._wrapperState.wasMultiple;
                  a._wrapperState.wasMultiple = !!c.multiple;
                  var X = c.value;
                  X != null
                    ? Pt(a, !!c.multiple, X, !1)
                    : U !== !!c.multiple &&
                      (c.defaultValue != null
                        ? Pt(a, !!c.multiple, c.defaultValue, !0)
                        : Pt(a, !!c.multiple, c.multiple ? [] : "", !1));
              }
              a[Ro] = c;
            } catch (ne) {
              Le(e, e.return, ne);
            }
        }
        break;
      case 6:
        if ((Ut(t, e), on(e), s & 4)) {
          if (e.stateNode === null) throw Error(i(162));
          (a = e.stateNode), (c = e.memoizedProps);
          try {
            a.nodeValue = c;
          } catch (ne) {
            Le(e, e.return, ne);
          }
        }
        break;
      case 3:
        if (
          (Ut(t, e), on(e), s & 4 && r !== null && r.memoizedState.isDehydrated)
        )
          try {
            yo(t.containerInfo);
          } catch (ne) {
            Le(e, e.return, ne);
          }
        break;
      case 4:
        Ut(t, e), on(e);
        break;
      case 13:
        Ut(t, e),
          on(e),
          (a = e.child),
          a.flags & 8192 &&
            ((c = a.memoizedState !== null),
            (a.stateNode.isHidden = c),
            !c ||
              (a.alternate !== null && a.alternate.memoizedState !== null) ||
              (ha = De())),
          s & 4 && Id(e);
        break;
      case 22:
        if (
          ((B = r !== null && r.memoizedState !== null),
          e.mode & 1 ? ((tt = (_ = tt) || B), Ut(t, e), (tt = _)) : Ut(t, e),
          on(e),
          s & 8192)
        ) {
          if (
            ((_ = e.memoizedState !== null),
            (e.stateNode.isHidden = _) && !B && (e.mode & 1) !== 0)
          )
            for (ee = e, B = e.child; B !== null; ) {
              for ($ = ee = B; ee !== null; ) {
                switch (((U = ee), (X = U.child), U.tag)) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    Uo(4, U, U.return);
                    break;
                  case 1:
                    $r(U, U.return);
                    var te = U.stateNode;
                    if (typeof te.componentWillUnmount == "function") {
                      (s = U), (r = U.return);
                      try {
                        (t = s),
                          (te.props = t.memoizedProps),
                          (te.state = t.memoizedState),
                          te.componentWillUnmount();
                      } catch (ne) {
                        Le(s, r, ne);
                      }
                    }
                    break;
                  case 5:
                    $r(U, U.return);
                    break;
                  case 22:
                    if (U.memoizedState !== null) {
                      Bd($);
                      continue;
                    }
                }
                X !== null ? ((X.return = U), (ee = X)) : Bd($);
              }
              B = B.sibling;
            }
          e: for (B = null, $ = e; ; ) {
            if ($.tag === 5) {
              if (B === null) {
                B = $;
                try {
                  (a = $.stateNode),
                    _
                      ? ((c = a.style),
                        typeof c.setProperty == "function"
                          ? c.setProperty("display", "none", "important")
                          : (c.display = "none"))
                      : ((b = $.stateNode),
                        (k = $.memoizedProps.style),
                        (p =
                          k != null && k.hasOwnProperty("display")
                            ? k.display
                            : null),
                        (b.style.display = Sr("display", p)));
                } catch (ne) {
                  Le(e, e.return, ne);
                }
              }
            } else if ($.tag === 6) {
              if (B === null)
                try {
                  $.stateNode.nodeValue = _ ? "" : $.memoizedProps;
                } catch (ne) {
                  Le(e, e.return, ne);
                }
            } else if (
              (($.tag !== 22 && $.tag !== 23) ||
                $.memoizedState === null ||
                $ === e) &&
              $.child !== null
            ) {
              ($.child.return = $), ($ = $.child);
              continue;
            }
            if ($ === e) break e;
            for (; $.sibling === null; ) {
              if ($.return === null || $.return === e) break e;
              B === $ && (B = null), ($ = $.return);
            }
            B === $ && (B = null),
              ($.sibling.return = $.return),
              ($ = $.sibling);
          }
        }
        break;
      case 19:
        Ut(t, e), on(e), s & 4 && Id(e);
        break;
      case 21:
        break;
      default:
        Ut(t, e), on(e);
    }
  }
  function on(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        e: {
          for (var r = e.return; r !== null; ) {
            if (Ad(r)) {
              var s = r;
              break e;
            }
            r = r.return;
          }
          throw Error(i(160));
        }
        switch (s.tag) {
          case 5:
            var a = s.stateNode;
            s.flags & 32 && (Yt(a, ""), (s.flags &= -33));
            var c = Ld(e);
            da(e, c, a);
            break;
          case 3:
          case 4:
            var p = s.stateNode.containerInfo,
              b = Ld(e);
            ca(e, b, p);
            break;
          default:
            throw Error(i(161));
        }
      } catch (k) {
        Le(e, e.return, k);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function Mg(e, t, r) {
    (ee = e), zd(e);
  }
  function zd(e, t, r) {
    for (var s = (e.mode & 1) !== 0; ee !== null; ) {
      var a = ee,
        c = a.child;
      if (a.tag === 22 && s) {
        var p = a.memoizedState !== null || ts;
        if (!p) {
          var b = a.alternate,
            k = (b !== null && b.memoizedState !== null) || tt;
          b = ts;
          var _ = tt;
          if (((ts = p), (tt = k) && !_))
            for (ee = a; ee !== null; )
              (p = ee),
                (k = p.child),
                p.tag === 22 && p.memoizedState !== null
                  ? $d(a)
                  : k !== null
                  ? ((k.return = p), (ee = k))
                  : $d(a);
          for (; c !== null; ) (ee = c), zd(c), (c = c.sibling);
          (ee = a), (ts = b), (tt = _);
        }
        Ud(e);
      } else
        (a.subtreeFlags & 8772) !== 0 && c !== null
          ? ((c.return = a), (ee = c))
          : Ud(e);
    }
  }
  function Ud(e) {
    for (; ee !== null; ) {
      var t = ee;
      if ((t.flags & 8772) !== 0) {
        var r = t.alternate;
        try {
          if ((t.flags & 8772) !== 0)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                tt || ns(5, t);
                break;
              case 1:
                var s = t.stateNode;
                if (t.flags & 4 && !tt)
                  if (r === null) s.componentDidMount();
                  else {
                    var a =
                      t.elementType === t.type
                        ? r.memoizedProps
                        : Ft(t.type, r.memoizedProps);
                    s.componentDidUpdate(
                      a,
                      r.memoizedState,
                      s.__reactInternalSnapshotBeforeUpdate
                    );
                  }
                var c = t.updateQueue;
                c !== null && Bc(t, c, s);
                break;
              case 3:
                var p = t.updateQueue;
                if (p !== null) {
                  if (((r = null), t.child !== null))
                    switch (t.child.tag) {
                      case 5:
                        r = t.child.stateNode;
                        break;
                      case 1:
                        r = t.child.stateNode;
                    }
                  Bc(t, p, r);
                }
                break;
              case 5:
                var b = t.stateNode;
                if (r === null && t.flags & 4) {
                  r = b;
                  var k = t.memoizedProps;
                  switch (t.type) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                      k.autoFocus && r.focus();
                      break;
                    case "img":
                      k.src && (r.src = k.src);
                  }
                }
                break;
              case 6:
                break;
              case 4:
                break;
              case 12:
                break;
              case 13:
                if (t.memoizedState === null) {
                  var _ = t.alternate;
                  if (_ !== null) {
                    var B = _.memoizedState;
                    if (B !== null) {
                      var $ = B.dehydrated;
                      $ !== null && yo($);
                    }
                  }
                }
                break;
              case 19:
              case 17:
              case 21:
              case 22:
              case 23:
              case 25:
                break;
              default:
                throw Error(i(163));
            }
          tt || (t.flags & 512 && ua(t));
        } catch (U) {
          Le(t, t.return, U);
        }
      }
      if (t === e) {
        ee = null;
        break;
      }
      if (((r = t.sibling), r !== null)) {
        (r.return = t.return), (ee = r);
        break;
      }
      ee = t.return;
    }
  }
  function Bd(e) {
    for (; ee !== null; ) {
      var t = ee;
      if (t === e) {
        ee = null;
        break;
      }
      var r = t.sibling;
      if (r !== null) {
        (r.return = t.return), (ee = r);
        break;
      }
      ee = t.return;
    }
  }
  function $d(e) {
    for (; ee !== null; ) {
      var t = ee;
      try {
        switch (t.tag) {
          case 0:
          case 11:
          case 15:
            var r = t.return;
            try {
              ns(4, t);
            } catch (k) {
              Le(t, r, k);
            }
            break;
          case 1:
            var s = t.stateNode;
            if (typeof s.componentDidMount == "function") {
              var a = t.return;
              try {
                s.componentDidMount();
              } catch (k) {
                Le(t, a, k);
              }
            }
            var c = t.return;
            try {
              ua(t);
            } catch (k) {
              Le(t, c, k);
            }
            break;
          case 5:
            var p = t.return;
            try {
              ua(t);
            } catch (k) {
              Le(t, p, k);
            }
        }
      } catch (k) {
        Le(t, t.return, k);
      }
      if (t === e) {
        ee = null;
        break;
      }
      var b = t.sibling;
      if (b !== null) {
        (b.return = t.return), (ee = b);
        break;
      }
      ee = t.return;
    }
  }
  var Ag = Math.ceil,
    rs = z.ReactCurrentDispatcher,
    fa = z.ReactCurrentOwner,
    Ot = z.ReactCurrentBatchConfig,
    be = 0,
    Qe = null,
    ze = null,
    Ye = 0,
    St = 0,
    Vr = An(0),
    Ve = 0,
    Bo = null,
    cr = 0,
    os = 0,
    pa = 0,
    $o = null,
    pt = null,
    ha = 0,
    Hr = 1 / 0,
    yn = null,
    is = !1,
    ma = null,
    Un = null,
    ss = !1,
    Bn = null,
    ls = 0,
    Vo = 0,
    ga = null,
    as = -1,
    us = 0;
  function st() {
    return (be & 6) !== 0 ? De() : as !== -1 ? as : (as = De());
  }
  function $n(e) {
    return (e.mode & 1) === 0
      ? 1
      : (be & 2) !== 0 && Ye !== 0
      ? Ye & -Ye
      : vg.transition !== null
      ? (us === 0 && (us = Lu()), us)
      : ((e = Pe),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Hu(e.type))),
        e);
  }
  function Bt(e, t, r, s) {
    if (50 < Vo) throw ((Vo = 0), (ga = null), Error(i(185)));
    po(e, r, s),
      ((be & 2) === 0 || e !== Qe) &&
        (e === Qe && ((be & 2) === 0 && (os |= r), Ve === 4 && Vn(e, Ye)),
        ht(e, s),
        r === 1 &&
          be === 0 &&
          (t.mode & 1) === 0 &&
          ((Hr = De() + 500), Ii && Dn()));
  }
  function ht(e, t) {
    var r = e.callbackNode;
    vm(e, t);
    var s = yi(e, e === Qe ? Ye : 0);
    if (s === 0)
      r !== null && _u(r), (e.callbackNode = null), (e.callbackPriority = 0);
    else if (((t = s & -s), e.callbackPriority !== t)) {
      if ((r != null && _u(r), t === 1))
        e.tag === 0 ? gg(Hd.bind(null, e)) : Rc(Hd.bind(null, e)),
          fg(function () {
            (be & 6) === 0 && Dn();
          }),
          (r = null);
      else {
        switch (Du(s)) {
          case 1:
            r = Gs;
            break;
          case 4:
            r = Mu;
            break;
          case 16:
            r = hi;
            break;
          case 536870912:
            r = Au;
            break;
          default:
            r = hi;
        }
        r = Zd(r, Vd.bind(null, e));
      }
      (e.callbackPriority = t), (e.callbackNode = r);
    }
  }
  function Vd(e, t) {
    if (((as = -1), (us = 0), (be & 6) !== 0)) throw Error(i(327));
    var r = e.callbackNode;
    if (Wr() && e.callbackNode !== r) return null;
    var s = yi(e, e === Qe ? Ye : 0);
    if (s === 0) return null;
    if ((s & 30) !== 0 || (s & e.expiredLanes) !== 0 || t) t = cs(e, s);
    else {
      t = s;
      var a = be;
      be |= 2;
      var c = Qd();
      (Qe !== e || Ye !== t) && ((yn = null), (Hr = De() + 500), fr(e, t));
      do
        try {
          Ig();
          break;
        } catch (b) {
          Wd(e, b);
        }
      while (!0);
      Al(),
        (rs.current = c),
        (be = a),
        ze !== null ? (t = 0) : ((Qe = null), (Ye = 0), (t = Ve));
    }
    if (t !== 0) {
      if (
        (t === 2 && ((a = Ys(e)), a !== 0 && ((s = a), (t = va(e, a)))),
        t === 1)
      )
        throw ((r = Bo), fr(e, 0), Vn(e, s), ht(e, De()), r);
      if (t === 6) Vn(e, s);
      else {
        if (
          ((a = e.current.alternate),
          (s & 30) === 0 &&
            !Lg(a) &&
            ((t = cs(e, s)),
            t === 2 && ((c = Ys(e)), c !== 0 && ((s = c), (t = va(e, c)))),
            t === 1))
        )
          throw ((r = Bo), fr(e, 0), Vn(e, s), ht(e, De()), r);
        switch (((e.finishedWork = a), (e.finishedLanes = s), t)) {
          case 0:
          case 1:
            throw Error(i(345));
          case 2:
            pr(e, pt, yn);
            break;
          case 3:
            if (
              (Vn(e, s),
              (s & 130023424) === s && ((t = ha + 500 - De()), 10 < t))
            ) {
              if (yi(e, 0) !== 0) break;
              if (((a = e.suspendedLanes), (a & s) !== s)) {
                st(), (e.pingedLanes |= e.suspendedLanes & a);
                break;
              }
              e.timeoutHandle = El(pr.bind(null, e, pt, yn), t);
              break;
            }
            pr(e, pt, yn);
            break;
          case 4:
            if ((Vn(e, s), (s & 4194240) === s)) break;
            for (t = e.eventTimes, a = -1; 0 < s; ) {
              var p = 31 - Lt(s);
              (c = 1 << p), (p = t[p]), p > a && (a = p), (s &= ~c);
            }
            if (
              ((s = a),
              (s = De() - s),
              (s =
                (120 > s
                  ? 120
                  : 480 > s
                  ? 480
                  : 1080 > s
                  ? 1080
                  : 1920 > s
                  ? 1920
                  : 3e3 > s
                  ? 3e3
                  : 4320 > s
                  ? 4320
                  : 1960 * Ag(s / 1960)) - s),
              10 < s)
            ) {
              e.timeoutHandle = El(pr.bind(null, e, pt, yn), s);
              break;
            }
            pr(e, pt, yn);
            break;
          case 5:
            pr(e, pt, yn);
            break;
          default:
            throw Error(i(329));
        }
      }
    }
    return ht(e, De()), e.callbackNode === r ? Vd.bind(null, e) : null;
  }
  function va(e, t) {
    var r = $o;
    return (
      e.current.memoizedState.isDehydrated && (fr(e, t).flags |= 256),
      (e = cs(e, t)),
      e !== 2 && ((t = pt), (pt = r), t !== null && ya(t)),
      e
    );
  }
  function ya(e) {
    pt === null ? (pt = e) : pt.push.apply(pt, e);
  }
  function Lg(e) {
    for (var t = e; ; ) {
      if (t.flags & 16384) {
        var r = t.updateQueue;
        if (r !== null && ((r = r.stores), r !== null))
          for (var s = 0; s < r.length; s++) {
            var a = r[s],
              c = a.getSnapshot;
            a = a.value;
            try {
              if (!Dt(c(), a)) return !1;
            } catch {
              return !1;
            }
          }
      }
      if (((r = t.child), t.subtreeFlags & 16384 && r !== null))
        (r.return = t), (t = r);
      else {
        if (t === e) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) return !0;
          t = t.return;
        }
        (t.sibling.return = t.return), (t = t.sibling);
      }
    }
    return !0;
  }
  function Vn(e, t) {
    for (
      t &= ~pa,
        t &= ~os,
        e.suspendedLanes |= t,
        e.pingedLanes &= ~t,
        e = e.expirationTimes;
      0 < t;

    ) {
      var r = 31 - Lt(t),
        s = 1 << r;
      (e[r] = -1), (t &= ~s);
    }
  }
  function Hd(e) {
    if ((be & 6) !== 0) throw Error(i(327));
    Wr();
    var t = yi(e, 0);
    if ((t & 1) === 0) return ht(e, De()), null;
    var r = cs(e, t);
    if (e.tag !== 0 && r === 2) {
      var s = Ys(e);
      s !== 0 && ((t = s), (r = va(e, s)));
    }
    if (r === 1) throw ((r = Bo), fr(e, 0), Vn(e, t), ht(e, De()), r);
    if (r === 6) throw Error(i(345));
    return (
      (e.finishedWork = e.current.alternate),
      (e.finishedLanes = t),
      pr(e, pt, yn),
      ht(e, De()),
      null
    );
  }
  function xa(e, t) {
    var r = be;
    be |= 1;
    try {
      return e(t);
    } finally {
      (be = r), be === 0 && ((Hr = De() + 500), Ii && Dn());
    }
  }
  function dr(e) {
    Bn !== null && Bn.tag === 0 && (be & 6) === 0 && Wr();
    var t = be;
    be |= 1;
    var r = Ot.transition,
      s = Pe;
    try {
      if (((Ot.transition = null), (Pe = 1), e)) return e();
    } finally {
      (Pe = s), (Ot.transition = r), (be = t), (be & 6) === 0 && Dn();
    }
  }
  function wa() {
    (St = Vr.current), je(Vr);
  }
  function fr(e, t) {
    (e.finishedWork = null), (e.finishedLanes = 0);
    var r = e.timeoutHandle;
    if ((r !== -1 && ((e.timeoutHandle = -1), dg(r)), ze !== null))
      for (r = ze.return; r !== null; ) {
        var s = r;
        switch ((Rl(s), s.tag)) {
          case 1:
            (s = s.type.childContextTypes), s != null && Li();
            break;
          case 3:
            Ur(), je(ct), je(Ze), $l();
            break;
          case 5:
            Ul(s);
            break;
          case 4:
            Ur();
            break;
          case 13:
            je(Me);
            break;
          case 19:
            je(Me);
            break;
          case 10:
            Ll(s.type._context);
            break;
          case 22:
          case 23:
            wa();
        }
        r = r.return;
      }
    if (
      ((Qe = e),
      (ze = e = Hn(e.current, null)),
      (Ye = St = t),
      (Ve = 0),
      (Bo = null),
      (pa = os = cr = 0),
      (pt = $o = null),
      lr !== null)
    ) {
      for (t = 0; t < lr.length; t++)
        if (((r = lr[t]), (s = r.interleaved), s !== null)) {
          r.interleaved = null;
          var a = s.next,
            c = r.pending;
          if (c !== null) {
            var p = c.next;
            (c.next = a), (s.next = p);
          }
          r.pending = s;
        }
      lr = null;
    }
    return e;
  }
  function Wd(e, t) {
    do {
      var r = ze;
      try {
        if ((Al(), (Ki.current = Xi), qi)) {
          for (var s = Ae.memoizedState; s !== null; ) {
            var a = s.queue;
            a !== null && (a.pending = null), (s = s.next);
          }
          qi = !1;
        }
        if (
          ((ur = 0),
          (We = $e = Ae = null),
          (Lo = !1),
          (Do = 0),
          (fa.current = null),
          r === null || r.return === null)
        ) {
          (Ve = 1), (Bo = t), (ze = null);
          break;
        }
        e: {
          var c = e,
            p = r.return,
            b = r,
            k = t;
          if (
            ((t = Ye),
            (b.flags |= 32768),
            k !== null && typeof k == "object" && typeof k.then == "function")
          ) {
            var _ = k,
              B = b,
              $ = B.tag;
            if ((B.mode & 1) === 0 && ($ === 0 || $ === 11 || $ === 15)) {
              var U = B.alternate;
              U
                ? ((B.updateQueue = U.updateQueue),
                  (B.memoizedState = U.memoizedState),
                  (B.lanes = U.lanes))
                : ((B.updateQueue = null), (B.memoizedState = null));
            }
            var X = gd(p);
            if (X !== null) {
              (X.flags &= -257),
                vd(X, p, b, c, t),
                X.mode & 1 && md(c, _, t),
                (t = X),
                (k = _);
              var te = t.updateQueue;
              if (te === null) {
                var ne = new Set();
                ne.add(k), (t.updateQueue = ne);
              } else te.add(k);
              break e;
            } else {
              if ((t & 1) === 0) {
                md(c, _, t), Sa();
                break e;
              }
              k = Error(i(426));
            }
          } else if (_e && b.mode & 1) {
            var Ie = gd(p);
            if (Ie !== null) {
              (Ie.flags & 65536) === 0 && (Ie.flags |= 256),
                vd(Ie, p, b, c, t),
                _l(Br(k, b));
              break e;
            }
          }
          (c = k = Br(k, b)),
            Ve !== 4 && (Ve = 2),
            $o === null ? ($o = [c]) : $o.push(c),
            (c = p);
          do {
            switch (c.tag) {
              case 3:
                (c.flags |= 65536), (t &= -t), (c.lanes |= t);
                var j = pd(c, k, t);
                Uc(c, j);
                break e;
              case 1:
                b = k;
                var P = c.type,
                  O = c.stateNode;
                if (
                  (c.flags & 128) === 0 &&
                  (typeof P.getDerivedStateFromError == "function" ||
                    (O !== null &&
                      typeof O.componentDidCatch == "function" &&
                      (Un === null || !Un.has(O))))
                ) {
                  (c.flags |= 65536), (t &= -t), (c.lanes |= t);
                  var W = hd(c, b, t);
                  Uc(c, W);
                  break e;
                }
            }
            c = c.return;
          } while (c !== null);
        }
        qd(r);
      } catch (oe) {
        (t = oe), ze === r && r !== null && (ze = r = r.return);
        continue;
      }
      break;
    } while (!0);
  }
  function Qd() {
    var e = rs.current;
    return (rs.current = Xi), e === null ? Xi : e;
  }
  function Sa() {
    (Ve === 0 || Ve === 3 || Ve === 2) && (Ve = 4),
      Qe === null ||
        ((cr & 268435455) === 0 && (os & 268435455) === 0) ||
        Vn(Qe, Ye);
  }
  function cs(e, t) {
    var r = be;
    be |= 2;
    var s = Qd();
    (Qe !== e || Ye !== t) && ((yn = null), fr(e, t));
    do
      try {
        Dg();
        break;
      } catch (a) {
        Wd(e, a);
      }
    while (!0);
    if ((Al(), (be = r), (rs.current = s), ze !== null)) throw Error(i(261));
    return (Qe = null), (Ye = 0), Ve;
  }
  function Dg() {
    for (; ze !== null; ) Kd(ze);
  }
  function Ig() {
    for (; ze !== null && !am(); ) Kd(ze);
  }
  function Kd(e) {
    var t = Xd(e.alternate, e, St);
    (e.memoizedProps = e.pendingProps),
      t === null ? qd(e) : (ze = t),
      (fa.current = null);
  }
  function qd(e) {
    var t = e;
    do {
      var r = t.alternate;
      if (((e = t.return), (t.flags & 32768) === 0)) {
        if (((r = Rg(r, t, St)), r !== null)) {
          ze = r;
          return;
        }
      } else {
        if (((r = jg(r, t)), r !== null)) {
          (r.flags &= 32767), (ze = r);
          return;
        }
        if (e !== null)
          (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
        else {
          (Ve = 6), (ze = null);
          return;
        }
      }
      if (((t = t.sibling), t !== null)) {
        ze = t;
        return;
      }
      ze = t = e;
    } while (t !== null);
    Ve === 0 && (Ve = 5);
  }
  function pr(e, t, r) {
    var s = Pe,
      a = Ot.transition;
    try {
      (Ot.transition = null), (Pe = 1), Fg(e, t, r, s);
    } finally {
      (Ot.transition = a), (Pe = s);
    }
    return null;
  }
  function Fg(e, t, r, s) {
    do Wr();
    while (Bn !== null);
    if ((be & 6) !== 0) throw Error(i(327));
    r = e.finishedWork;
    var a = e.finishedLanes;
    if (r === null) return null;
    if (((e.finishedWork = null), (e.finishedLanes = 0), r === e.current))
      throw Error(i(177));
    (e.callbackNode = null), (e.callbackPriority = 0);
    var c = r.lanes | r.childLanes;
    if (
      (ym(e, c),
      e === Qe && ((ze = Qe = null), (Ye = 0)),
      ((r.subtreeFlags & 2064) === 0 && (r.flags & 2064) === 0) ||
        ss ||
        ((ss = !0),
        Zd(hi, function () {
          return Wr(), null;
        })),
      (c = (r.flags & 15990) !== 0),
      (r.subtreeFlags & 15990) !== 0 || c)
    ) {
      (c = Ot.transition), (Ot.transition = null);
      var p = Pe;
      Pe = 1;
      var b = be;
      (be |= 4),
        (fa.current = null),
        _g(e, r),
        Fd(r, e),
        og(Sl),
        (Si = !!wl),
        (Sl = wl = null),
        (e.current = r),
        Mg(r),
        um(),
        (be = b),
        (Pe = p),
        (Ot.transition = c);
    } else e.current = r;
    if (
      (ss && ((ss = !1), (Bn = e), (ls = a)),
      (c = e.pendingLanes),
      c === 0 && (Un = null),
      fm(r.stateNode),
      ht(e, De()),
      t !== null)
    )
      for (s = e.onRecoverableError, r = 0; r < t.length; r++)
        (a = t[r]), s(a.value, { componentStack: a.stack, digest: a.digest });
    if (is) throw ((is = !1), (e = ma), (ma = null), e);
    return (
      (ls & 1) !== 0 && e.tag !== 0 && Wr(),
      (c = e.pendingLanes),
      (c & 1) !== 0 ? (e === ga ? Vo++ : ((Vo = 0), (ga = e))) : (Vo = 0),
      Dn(),
      null
    );
  }
  function Wr() {
    if (Bn !== null) {
      var e = Du(ls),
        t = Ot.transition,
        r = Pe;
      try {
        if (((Ot.transition = null), (Pe = 16 > e ? 16 : e), Bn === null))
          var s = !1;
        else {
          if (((e = Bn), (Bn = null), (ls = 0), (be & 6) !== 0))
            throw Error(i(331));
          var a = be;
          for (be |= 4, ee = e.current; ee !== null; ) {
            var c = ee,
              p = c.child;
            if ((ee.flags & 16) !== 0) {
              var b = c.deletions;
              if (b !== null) {
                for (var k = 0; k < b.length; k++) {
                  var _ = b[k];
                  for (ee = _; ee !== null; ) {
                    var B = ee;
                    switch (B.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Uo(8, B, c);
                    }
                    var $ = B.child;
                    if ($ !== null) ($.return = B), (ee = $);
                    else
                      for (; ee !== null; ) {
                        B = ee;
                        var U = B.sibling,
                          X = B.return;
                        if ((Md(B), B === _)) {
                          ee = null;
                          break;
                        }
                        if (U !== null) {
                          (U.return = X), (ee = U);
                          break;
                        }
                        ee = X;
                      }
                  }
                }
                var te = c.alternate;
                if (te !== null) {
                  var ne = te.child;
                  if (ne !== null) {
                    te.child = null;
                    do {
                      var Ie = ne.sibling;
                      (ne.sibling = null), (ne = Ie);
                    } while (ne !== null);
                  }
                }
                ee = c;
              }
            }
            if ((c.subtreeFlags & 2064) !== 0 && p !== null)
              (p.return = c), (ee = p);
            else
              e: for (; ee !== null; ) {
                if (((c = ee), (c.flags & 2048) !== 0))
                  switch (c.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Uo(9, c, c.return);
                  }
                var j = c.sibling;
                if (j !== null) {
                  (j.return = c.return), (ee = j);
                  break e;
                }
                ee = c.return;
              }
          }
          var P = e.current;
          for (ee = P; ee !== null; ) {
            p = ee;
            var O = p.child;
            if ((p.subtreeFlags & 2064) !== 0 && O !== null)
              (O.return = p), (ee = O);
            else
              e: for (p = P; ee !== null; ) {
                if (((b = ee), (b.flags & 2048) !== 0))
                  try {
                    switch (b.tag) {
                      case 0:
                      case 11:
                      case 15:
                        ns(9, b);
                    }
                  } catch (oe) {
                    Le(b, b.return, oe);
                  }
                if (b === p) {
                  ee = null;
                  break e;
                }
                var W = b.sibling;
                if (W !== null) {
                  (W.return = b.return), (ee = W);
                  break e;
                }
                ee = b.return;
              }
          }
          if (
            ((be = a),
            Dn(),
            en && typeof en.onPostCommitFiberRoot == "function")
          )
            try {
              en.onPostCommitFiberRoot(mi, e);
            } catch {}
          s = !0;
        }
        return s;
      } finally {
        (Pe = r), (Ot.transition = t);
      }
    }
    return !1;
  }
  function Gd(e, t, r) {
    (t = Br(r, t)),
      (t = pd(e, t, 1)),
      (e = Fn(e, t, 1)),
      (t = st()),
      e !== null && (po(e, 1, t), ht(e, t));
  }
  function Le(e, t, r) {
    if (e.tag === 3) Gd(e, e, r);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          Gd(t, e, r);
          break;
        } else if (t.tag === 1) {
          var s = t.stateNode;
          if (
            typeof t.type.getDerivedStateFromError == "function" ||
            (typeof s.componentDidCatch == "function" &&
              (Un === null || !Un.has(s)))
          ) {
            (e = Br(r, e)),
              (e = hd(t, e, 1)),
              (t = Fn(t, e, 1)),
              (e = st()),
              t !== null && (po(t, 1, e), ht(t, e));
            break;
          }
        }
        t = t.return;
      }
  }
  function zg(e, t, r) {
    var s = e.pingCache;
    s !== null && s.delete(t),
      (t = st()),
      (e.pingedLanes |= e.suspendedLanes & r),
      Qe === e &&
        (Ye & r) === r &&
        (Ve === 4 || (Ve === 3 && (Ye & 130023424) === Ye && 500 > De() - ha)
          ? fr(e, 0)
          : (pa |= r)),
      ht(e, t);
  }
  function Yd(e, t) {
    t === 0 &&
      ((e.mode & 1) === 0
        ? (t = 1)
        : ((t = vi), (vi <<= 1), (vi & 130023424) === 0 && (vi = 4194304)));
    var r = st();
    (e = mn(e, t)), e !== null && (po(e, t, r), ht(e, r));
  }
  function Ug(e) {
    var t = e.memoizedState,
      r = 0;
    t !== null && (r = t.retryLane), Yd(e, r);
  }
  function Bg(e, t) {
    var r = 0;
    switch (e.tag) {
      case 13:
        var s = e.stateNode,
          a = e.memoizedState;
        a !== null && (r = a.retryLane);
        break;
      case 19:
        s = e.stateNode;
        break;
      default:
        throw Error(i(314));
    }
    s !== null && s.delete(t), Yd(e, r);
  }
  var Xd;
  Xd = function (e, t, r) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps || ct.current) ft = !0;
      else {
        if ((e.lanes & r) === 0 && (t.flags & 128) === 0)
          return (ft = !1), Tg(e, t, r);
        ft = (e.flags & 131072) !== 0;
      }
    else (ft = !1), _e && (t.flags & 1048576) !== 0 && jc(t, zi, t.index);
    switch (((t.lanes = 0), t.tag)) {
      case 2:
        var s = t.type;
        es(e, t), (e = t.pendingProps);
        var a = Mr(t, Ze.current);
        zr(t, r), (a = Wl(null, t, s, e, a, r));
        var c = Ql();
        return (
          (t.flags |= 1),
          typeof a == "object" &&
          a !== null &&
          typeof a.render == "function" &&
          a.$$typeof === void 0
            ? ((t.tag = 1),
              (t.memoizedState = null),
              (t.updateQueue = null),
              dt(s) ? ((c = !0), Di(t)) : (c = !1),
              (t.memoizedState =
                a.state !== null && a.state !== void 0 ? a.state : null),
              Fl(t),
              (a.updater = Zi),
              (t.stateNode = a),
              (a._reactInternals = t),
              Zl(t, s, e, r),
              (t = na(null, t, s, !0, c, r)))
            : ((t.tag = 0), _e && c && Tl(t), it(null, t, a, r), (t = t.child)),
          t
        );
      case 16:
        s = t.elementType;
        e: {
          switch (
            (es(e, t),
            (e = t.pendingProps),
            (a = s._init),
            (s = a(s._payload)),
            (t.type = s),
            (a = t.tag = Vg(s)),
            (e = Ft(s, e)),
            a)
          ) {
            case 0:
              t = ta(null, t, s, e, r);
              break e;
            case 1:
              t = Ed(null, t, s, e, r);
              break e;
            case 11:
              t = yd(null, t, s, e, r);
              break e;
            case 14:
              t = xd(null, t, s, Ft(s.type, e), r);
              break e;
          }
          throw Error(i(306, s, ""));
        }
        return t;
      case 0:
        return (
          (s = t.type),
          (a = t.pendingProps),
          (a = t.elementType === s ? a : Ft(s, a)),
          ta(e, t, s, a, r)
        );
      case 1:
        return (
          (s = t.type),
          (a = t.pendingProps),
          (a = t.elementType === s ? a : Ft(s, a)),
          Ed(e, t, s, a, r)
        );
      case 3:
        e: {
          if ((Cd(t), e === null)) throw Error(i(387));
          (s = t.pendingProps),
            (c = t.memoizedState),
            (a = c.element),
            zc(e, t),
            Wi(t, s, null, r);
          var p = t.memoizedState;
          if (((s = p.element), c.isDehydrated))
            if (
              ((c = {
                element: s,
                isDehydrated: !1,
                cache: p.cache,
                pendingSuspenseBoundaries: p.pendingSuspenseBoundaries,
                transitions: p.transitions,
              }),
              (t.updateQueue.baseState = c),
              (t.memoizedState = c),
              t.flags & 256)
            ) {
              (a = Br(Error(i(423)), t)), (t = kd(e, t, s, r, a));
              break e;
            } else if (s !== a) {
              (a = Br(Error(i(424)), t)), (t = kd(e, t, s, r, a));
              break e;
            } else
              for (
                wt = Mn(t.stateNode.containerInfo.firstChild),
                  xt = t,
                  _e = !0,
                  It = null,
                  r = Ic(t, null, s, r),
                  t.child = r;
                r;

              )
                (r.flags = (r.flags & -3) | 4096), (r = r.sibling);
          else {
            if ((Dr(), s === a)) {
              t = vn(e, t, r);
              break e;
            }
            it(e, t, s, r);
          }
          t = t.child;
        }
        return t;
      case 5:
        return (
          $c(t),
          e === null && Ol(t),
          (s = t.type),
          (a = t.pendingProps),
          (c = e !== null ? e.memoizedProps : null),
          (p = a.children),
          bl(s, a) ? (p = null) : c !== null && bl(s, c) && (t.flags |= 32),
          bd(e, t),
          it(e, t, p, r),
          t.child
        );
      case 6:
        return e === null && Ol(t), null;
      case 13:
        return Pd(e, t, r);
      case 4:
        return (
          zl(t, t.stateNode.containerInfo),
          (s = t.pendingProps),
          e === null ? (t.child = Ir(t, null, s, r)) : it(e, t, s, r),
          t.child
        );
      case 11:
        return (
          (s = t.type),
          (a = t.pendingProps),
          (a = t.elementType === s ? a : Ft(s, a)),
          yd(e, t, s, a, r)
        );
      case 7:
        return it(e, t, t.pendingProps, r), t.child;
      case 8:
        return it(e, t, t.pendingProps.children, r), t.child;
      case 12:
        return it(e, t, t.pendingProps.children, r), t.child;
      case 10:
        e: {
          if (
            ((s = t.type._context),
            (a = t.pendingProps),
            (c = t.memoizedProps),
            (p = a.value),
            Te($i, s._currentValue),
            (s._currentValue = p),
            c !== null)
          )
            if (Dt(c.value, p)) {
              if (c.children === a.children && !ct.current) {
                t = vn(e, t, r);
                break e;
              }
            } else
              for (c = t.child, c !== null && (c.return = t); c !== null; ) {
                var b = c.dependencies;
                if (b !== null) {
                  p = c.child;
                  for (var k = b.firstContext; k !== null; ) {
                    if (k.context === s) {
                      if (c.tag === 1) {
                        (k = gn(-1, r & -r)), (k.tag = 2);
                        var _ = c.updateQueue;
                        if (_ !== null) {
                          _ = _.shared;
                          var B = _.pending;
                          B === null
                            ? (k.next = k)
                            : ((k.next = B.next), (B.next = k)),
                            (_.pending = k);
                        }
                      }
                      (c.lanes |= r),
                        (k = c.alternate),
                        k !== null && (k.lanes |= r),
                        Dl(c.return, r, t),
                        (b.lanes |= r);
                      break;
                    }
                    k = k.next;
                  }
                } else if (c.tag === 10) p = c.type === t.type ? null : c.child;
                else if (c.tag === 18) {
                  if (((p = c.return), p === null)) throw Error(i(341));
                  (p.lanes |= r),
                    (b = p.alternate),
                    b !== null && (b.lanes |= r),
                    Dl(p, r, t),
                    (p = c.sibling);
                } else p = c.child;
                if (p !== null) p.return = c;
                else
                  for (p = c; p !== null; ) {
                    if (p === t) {
                      p = null;
                      break;
                    }
                    if (((c = p.sibling), c !== null)) {
                      (c.return = p.return), (p = c);
                      break;
                    }
                    p = p.return;
                  }
                c = p;
              }
          it(e, t, a.children, r), (t = t.child);
        }
        return t;
      case 9:
        return (
          (a = t.type),
          (s = t.pendingProps.children),
          zr(t, r),
          (a = Rt(a)),
          (s = s(a)),
          (t.flags |= 1),
          it(e, t, s, r),
          t.child
        );
      case 14:
        return (
          (s = t.type),
          (a = Ft(s, t.pendingProps)),
          (a = Ft(s.type, a)),
          xd(e, t, s, a, r)
        );
      case 15:
        return wd(e, t, t.type, t.pendingProps, r);
      case 17:
        return (
          (s = t.type),
          (a = t.pendingProps),
          (a = t.elementType === s ? a : Ft(s, a)),
          es(e, t),
          (t.tag = 1),
          dt(s) ? ((e = !0), Di(t)) : (e = !1),
          zr(t, r),
          dd(t, s, a),
          Zl(t, s, a, r),
          na(null, t, s, !0, e, r)
        );
      case 19:
        return Td(e, t, r);
      case 22:
        return Sd(e, t, r);
    }
    throw Error(i(156, t.tag));
  };
  function Zd(e, t) {
    return Ou(e, t);
  }
  function $g(e, t, r, s) {
    (this.tag = e),
      (this.key = r),
      (this.sibling =
        this.child =
        this.return =
        this.stateNode =
        this.type =
        this.elementType =
          null),
      (this.index = 0),
      (this.ref = null),
      (this.pendingProps = t),
      (this.dependencies =
        this.memoizedState =
        this.updateQueue =
        this.memoizedProps =
          null),
      (this.mode = s),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null);
  }
  function _t(e, t, r, s) {
    return new $g(e, t, r, s);
  }
  function ba(e) {
    return (e = e.prototype), !(!e || !e.isReactComponent);
  }
  function Vg(e) {
    if (typeof e == "function") return ba(e) ? 1 : 0;
    if (e != null) {
      if (((e = e.$$typeof), e === Z)) return 11;
      if (e === me) return 14;
    }
    return 2;
  }
  function Hn(e, t) {
    var r = e.alternate;
    return (
      r === null
        ? ((r = _t(e.tag, t, e.key, e.mode)),
          (r.elementType = e.elementType),
          (r.type = e.type),
          (r.stateNode = e.stateNode),
          (r.alternate = e),
          (e.alternate = r))
        : ((r.pendingProps = t),
          (r.type = e.type),
          (r.flags = 0),
          (r.subtreeFlags = 0),
          (r.deletions = null)),
      (r.flags = e.flags & 14680064),
      (r.childLanes = e.childLanes),
      (r.lanes = e.lanes),
      (r.child = e.child),
      (r.memoizedProps = e.memoizedProps),
      (r.memoizedState = e.memoizedState),
      (r.updateQueue = e.updateQueue),
      (t = e.dependencies),
      (r.dependencies =
        t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
      (r.sibling = e.sibling),
      (r.index = e.index),
      (r.ref = e.ref),
      r
    );
  }
  function ds(e, t, r, s, a, c) {
    var p = 2;
    if (((s = e), typeof e == "function")) ba(e) && (p = 1);
    else if (typeof e == "string") p = 5;
    else
      e: switch (e) {
        case G:
          return hr(r.children, a, c, t);
        case ce:
          (p = 8), (a |= 8);
          break;
        case ge:
          return (
            (e = _t(12, r, t, a | 2)), (e.elementType = ge), (e.lanes = c), e
          );
        case he:
          return (e = _t(13, r, t, a)), (e.elementType = he), (e.lanes = c), e;
        case q:
          return (e = _t(19, r, t, a)), (e.elementType = q), (e.lanes = c), e;
        case re:
          return fs(r, a, c, t);
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case pe:
                p = 10;
                break e;
              case xe:
                p = 9;
                break e;
              case Z:
                p = 11;
                break e;
              case me:
                p = 14;
                break e;
              case ie:
                (p = 16), (s = null);
                break e;
            }
          throw Error(i(130, e == null ? e : typeof e, ""));
      }
    return (
      (t = _t(p, r, t, a)), (t.elementType = e), (t.type = s), (t.lanes = c), t
    );
  }
  function hr(e, t, r, s) {
    return (e = _t(7, e, s, t)), (e.lanes = r), e;
  }
  function fs(e, t, r, s) {
    return (
      (e = _t(22, e, s, t)),
      (e.elementType = re),
      (e.lanes = r),
      (e.stateNode = { isHidden: !1 }),
      e
    );
  }
  function Ea(e, t, r) {
    return (e = _t(6, e, null, t)), (e.lanes = r), e;
  }
  function Ca(e, t, r) {
    return (
      (t = _t(4, e.children !== null ? e.children : [], e.key, t)),
      (t.lanes = r),
      (t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation,
      }),
      t
    );
  }
  function Hg(e, t, r, s, a) {
    (this.tag = t),
      (this.containerInfo = e),
      (this.finishedWork =
        this.pingCache =
        this.current =
        this.pendingChildren =
          null),
      (this.timeoutHandle = -1),
      (this.callbackNode = this.pendingContext = this.context = null),
      (this.callbackPriority = 0),
      (this.eventTimes = Xs(0)),
      (this.expirationTimes = Xs(-1)),
      (this.entangledLanes =
        this.finishedLanes =
        this.mutableReadLanes =
        this.expiredLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = Xs(0)),
      (this.identifierPrefix = s),
      (this.onRecoverableError = a),
      (this.mutableSourceEagerHydrationData = null);
  }
  function ka(e, t, r, s, a, c, p, b, k) {
    return (
      (e = new Hg(e, t, r, b, k)),
      t === 1 ? ((t = 1), c === !0 && (t |= 8)) : (t = 0),
      (c = _t(3, null, null, t)),
      (e.current = c),
      (c.stateNode = e),
      (c.memoizedState = {
        element: s,
        isDehydrated: r,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null,
      }),
      Fl(c),
      e
    );
  }
  function Wg(e, t, r) {
    var s =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: K,
      key: s == null ? null : "" + s,
      children: e,
      containerInfo: t,
      implementation: r,
    };
  }
  function Jd(e) {
    if (!e) return Ln;
    e = e._reactInternals;
    e: {
      if (nr(e) !== e || e.tag !== 1) throw Error(i(170));
      var t = e;
      do {
        switch (t.tag) {
          case 3:
            t = t.stateNode.context;
            break e;
          case 1:
            if (dt(t.type)) {
              t = t.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        t = t.return;
      } while (t !== null);
      throw Error(i(171));
    }
    if (e.tag === 1) {
      var r = e.type;
      if (dt(r)) return Nc(e, r, t);
    }
    return t;
  }
  function ef(e, t, r, s, a, c, p, b, k) {
    return (
      (e = ka(r, s, !0, e, a, c, p, b, k)),
      (e.context = Jd(null)),
      (r = e.current),
      (s = st()),
      (a = $n(r)),
      (c = gn(s, a)),
      (c.callback = t ?? null),
      Fn(r, c, a),
      (e.current.lanes = a),
      po(e, a, s),
      ht(e, s),
      e
    );
  }
  function ps(e, t, r, s) {
    var a = t.current,
      c = st(),
      p = $n(a);
    return (
      (r = Jd(r)),
      t.context === null ? (t.context = r) : (t.pendingContext = r),
      (t = gn(c, p)),
      (t.payload = { element: e }),
      (s = s === void 0 ? null : s),
      s !== null && (t.callback = s),
      (e = Fn(a, t, p)),
      e !== null && (Bt(e, a, p, c), Hi(e, a, p)),
      p
    );
  }
  function hs(e) {
    if (((e = e.current), !e.child)) return null;
    switch (e.child.tag) {
      case 5:
        return e.child.stateNode;
      default:
        return e.child.stateNode;
    }
  }
  function tf(e, t) {
    if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
      var r = e.retryLane;
      e.retryLane = r !== 0 && r < t ? r : t;
    }
  }
  function Pa(e, t) {
    tf(e, t), (e = e.alternate) && tf(e, t);
  }
  function Qg() {
    return null;
  }
  var nf =
    typeof reportError == "function"
      ? reportError
      : function (e) {
          console.error(e);
        };
  function Na(e) {
    this._internalRoot = e;
  }
  (ms.prototype.render = Na.prototype.render =
    function (e) {
      var t = this._internalRoot;
      if (t === null) throw Error(i(409));
      ps(e, t, null, null);
    }),
    (ms.prototype.unmount = Na.prototype.unmount =
      function () {
        var e = this._internalRoot;
        if (e !== null) {
          this._internalRoot = null;
          var t = e.containerInfo;
          dr(function () {
            ps(null, e, null, null);
          }),
            (t[dn] = null);
        }
      });
  function ms(e) {
    this._internalRoot = e;
  }
  ms.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
      var t = zu();
      e = { blockedOn: null, target: e, priority: t };
      for (var r = 0; r < jn.length && t !== 0 && t < jn[r].priority; r++);
      jn.splice(r, 0, e), r === 0 && $u(e);
    }
  };
  function Ta(e) {
    return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
  }
  function gs(e) {
    return !(
      !e ||
      (e.nodeType !== 1 &&
        e.nodeType !== 9 &&
        e.nodeType !== 11 &&
        (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
    );
  }
  function rf() {}
  function Kg(e, t, r, s, a) {
    if (a) {
      if (typeof s == "function") {
        var c = s;
        s = function () {
          var _ = hs(p);
          c.call(_);
        };
      }
      var p = ef(t, s, e, 0, null, !1, !1, "", rf);
      return (
        (e._reactRootContainer = p),
        (e[dn] = p.current),
        No(e.nodeType === 8 ? e.parentNode : e),
        dr(),
        p
      );
    }
    for (; (a = e.lastChild); ) e.removeChild(a);
    if (typeof s == "function") {
      var b = s;
      s = function () {
        var _ = hs(k);
        b.call(_);
      };
    }
    var k = ka(e, 0, !1, null, null, !1, !1, "", rf);
    return (
      (e._reactRootContainer = k),
      (e[dn] = k.current),
      No(e.nodeType === 8 ? e.parentNode : e),
      dr(function () {
        ps(t, k, r, s);
      }),
      k
    );
  }
  function vs(e, t, r, s, a) {
    var c = r._reactRootContainer;
    if (c) {
      var p = c;
      if (typeof a == "function") {
        var b = a;
        a = function () {
          var k = hs(p);
          b.call(k);
        };
      }
      ps(t, p, e, a);
    } else p = Kg(r, t, e, a, s);
    return hs(p);
  }
  (Iu = function (e) {
    switch (e.tag) {
      case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
          var r = fo(t.pendingLanes);
          r !== 0 &&
            (Zs(t, r | 1),
            ht(t, De()),
            (be & 6) === 0 && ((Hr = De() + 500), Dn()));
        }
        break;
      case 13:
        dr(function () {
          var s = mn(e, 1);
          if (s !== null) {
            var a = st();
            Bt(s, e, 1, a);
          }
        }),
          Pa(e, 1);
    }
  }),
    (Js = function (e) {
      if (e.tag === 13) {
        var t = mn(e, 134217728);
        if (t !== null) {
          var r = st();
          Bt(t, e, 134217728, r);
        }
        Pa(e, 134217728);
      }
    }),
    (Fu = function (e) {
      if (e.tag === 13) {
        var t = $n(e),
          r = mn(e, t);
        if (r !== null) {
          var s = st();
          Bt(r, e, t, s);
        }
        Pa(e, t);
      }
    }),
    (zu = function () {
      return Pe;
    }),
    (Uu = function (e, t) {
      var r = Pe;
      try {
        return (Pe = e), t();
      } finally {
        Pe = r;
      }
    }),
    (Er = function (e, t, r) {
      switch (t) {
        case "input":
          if ((so(e, r), (t = r.name), r.type === "radio" && t != null)) {
            for (r = e; r.parentNode; ) r = r.parentNode;
            for (
              r = r.querySelectorAll(
                "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
              ),
                t = 0;
              t < r.length;
              t++
            ) {
              var s = r[t];
              if (s !== e && s.form === e.form) {
                var a = Ai(s);
                if (!a) throw Error(i(90));
                Cn(s), so(s, a);
              }
            }
          }
          break;
        case "textarea":
          si(e, r);
          break;
        case "select":
          (t = r.value), t != null && Pt(e, !!r.multiple, t, !1);
      }
    }),
    (ke = xa),
    (Ne = dr);
  var qg = { usingClientEntryPoint: !1, Events: [jo, Or, Ai, di, fe, xa] },
    Ho = {
      findFiberByHostInstance: rr,
      bundleType: 0,
      version: "18.3.1",
      rendererPackageName: "react-dom",
    },
    Gg = {
      bundleType: Ho.bundleType,
      version: Ho.version,
      rendererPackageName: Ho.rendererPackageName,
      rendererConfig: Ho.rendererConfig,
      overrideHookState: null,
      overrideHookStateDeletePath: null,
      overrideHookStateRenamePath: null,
      overrideProps: null,
      overridePropsDeletePath: null,
      overridePropsRenamePath: null,
      setErrorHandler: null,
      setSuspenseHandler: null,
      scheduleUpdate: null,
      currentDispatcherRef: z.ReactCurrentDispatcher,
      findHostInstanceByFiber: function (e) {
        return (e = Ru(e)), e === null ? null : e.stateNode;
      },
      findFiberByHostInstance: Ho.findFiberByHostInstance || Qg,
      findHostInstancesForRefresh: null,
      scheduleRefresh: null,
      scheduleRoot: null,
      setRefreshHandler: null,
      getCurrentFiber: null,
      reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
    };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var ys = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!ys.isDisabled && ys.supportsFiber)
      try {
        (mi = ys.inject(Gg)), (en = ys);
      } catch {}
  }
  return (
    (mt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = qg),
    (mt.createPortal = function (e, t) {
      var r =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!Ta(t)) throw Error(i(200));
      return Wg(e, t, null, r);
    }),
    (mt.createRoot = function (e, t) {
      if (!Ta(e)) throw Error(i(299));
      var r = !1,
        s = "",
        a = nf;
      return (
        t != null &&
          (t.unstable_strictMode === !0 && (r = !0),
          t.identifierPrefix !== void 0 && (s = t.identifierPrefix),
          t.onRecoverableError !== void 0 && (a = t.onRecoverableError)),
        (t = ka(e, 1, !1, null, null, r, !1, s, a)),
        (e[dn] = t.current),
        No(e.nodeType === 8 ? e.parentNode : e),
        new Na(t)
      );
    }),
    (mt.findDOMNode = function (e) {
      if (e == null) return null;
      if (e.nodeType === 1) return e;
      var t = e._reactInternals;
      if (t === void 0)
        throw typeof e.render == "function"
          ? Error(i(188))
          : ((e = Object.keys(e).join(",")), Error(i(268, e)));
      return (e = Ru(t)), (e = e === null ? null : e.stateNode), e;
    }),
    (mt.flushSync = function (e) {
      return dr(e);
    }),
    (mt.hydrate = function (e, t, r) {
      if (!gs(t)) throw Error(i(200));
      return vs(null, e, t, !0, r);
    }),
    (mt.hydrateRoot = function (e, t, r) {
      if (!Ta(e)) throw Error(i(405));
      var s = (r != null && r.hydratedSources) || null,
        a = !1,
        c = "",
        p = nf;
      if (
        (r != null &&
          (r.unstable_strictMode === !0 && (a = !0),
          r.identifierPrefix !== void 0 && (c = r.identifierPrefix),
          r.onRecoverableError !== void 0 && (p = r.onRecoverableError)),
        (t = ef(t, null, e, 1, r ?? null, a, !1, c, p)),
        (e[dn] = t.current),
        No(e),
        s)
      )
        for (e = 0; e < s.length; e++)
          (r = s[e]),
            (a = r._getVersion),
            (a = a(r._source)),
            t.mutableSourceEagerHydrationData == null
              ? (t.mutableSourceEagerHydrationData = [r, a])
              : t.mutableSourceEagerHydrationData.push(r, a);
      return new ms(t);
    }),
    (mt.render = function (e, t, r) {
      if (!gs(t)) throw Error(i(200));
      return vs(null, e, t, !1, r);
    }),
    (mt.unmountComponentAtNode = function (e) {
      if (!gs(e)) throw Error(i(40));
      return e._reactRootContainer
        ? (dr(function () {
            vs(null, null, e, !1, function () {
              (e._reactRootContainer = null), (e[dn] = null);
            });
          }),
          !0)
        : !1;
    }),
    (mt.unstable_batchedUpdates = xa),
    (mt.unstable_renderSubtreeIntoContainer = function (e, t, r, s) {
      if (!gs(r)) throw Error(i(200));
      if (e == null || e._reactInternals === void 0) throw Error(i(38));
      return vs(e, t, r, !1, s);
    }),
    (mt.version = "18.3.1-next-f1338f8080-20240426"),
    mt
  );
}
var ff;
function Zf() {
  if (ff) return Oa.exports;
  ff = 1;
  function n() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n);
      } catch (o) {
        console.error(o);
      }
  }
  return n(), (Oa.exports = rv()), Oa.exports;
}
var pf;
function ov() {
  if (pf) return xs;
  pf = 1;
  var n = Zf();
  return (xs.createRoot = n.createRoot), (xs.hydrateRoot = n.hydrateRoot), xs;
}
var iv = ov(),
  S = ru();
const Q = Xf(S),
  Jf = Xg({ __proto__: null, default: Q }, [S]),
  sv = 1,
  lv = 1e6;
let Aa = 0;
function av() {
  return (Aa = (Aa + 1) % Number.MAX_SAFE_INTEGER), Aa.toString();
}
const La = new Map(),
  hf = (n) => {
    if (La.has(n)) return;
    const o = setTimeout(() => {
      La.delete(n), qo({ type: "REMOVE_TOAST", toastId: n });
    }, lv);
    La.set(n, o);
  },
  uv = (n, o) => {
    switch (o.type) {
      case "ADD_TOAST":
        return { ...n, toasts: [o.toast, ...n.toasts].slice(0, sv) };
      case "UPDATE_TOAST":
        return {
          ...n,
          toasts: n.toasts.map((i) =>
            i.id === o.toast.id ? { ...i, ...o.toast } : i
          ),
        };
      case "DISMISS_TOAST": {
        const { toastId: i } = o;
        return (
          i
            ? hf(i)
            : n.toasts.forEach((l) => {
                hf(l.id);
              }),
          {
            ...n,
            toasts: n.toasts.map((l) =>
              l.id === i || i === void 0 ? { ...l, open: !1 } : l
            ),
          }
        );
      }
      case "REMOVE_TOAST":
        return o.toastId === void 0
          ? { ...n, toasts: [] }
          : { ...n, toasts: n.toasts.filter((i) => i.id !== o.toastId) };
    }
  },
  ks = [];
let Ps = { toasts: [] };
function qo(n) {
  (Ps = uv(Ps, n)),
    ks.forEach((o) => {
      o(Ps);
    });
}
function cv({ ...n }) {
  const o = av(),
    i = (u) => qo({ type: "UPDATE_TOAST", toast: { ...u, id: o } }),
    l = () => qo({ type: "DISMISS_TOAST", toastId: o });
  return (
    qo({
      type: "ADD_TOAST",
      toast: {
        ...n,
        id: o,
        open: !0,
        onOpenChange: (u) => {
          u || l();
        },
      },
    }),
    { id: o, dismiss: l, update: i }
  );
}
function dv() {
  const [n, o] = S.useState(Ps);
  return (
    S.useEffect(
      () => (
        ks.push(o),
        () => {
          const i = ks.indexOf(o);
          i > -1 && ks.splice(i, 1);
        }
      ),
      [n]
    ),
    {
      ...n,
      toast: cv,
      dismiss: (i) => qo({ type: "DISMISS_TOAST", toastId: i }),
    }
  );
}
var Ds = Zf();
const ep = Xf(Ds);
function He(n, o, { checkForDefaultPrevented: i = !0 } = {}) {
  return function (u) {
    if ((n?.(u), i === !1 || !u.defaultPrevented)) return o?.(u);
  };
}
function mf(n, o) {
  if (typeof n == "function") return n(o);
  n != null && (n.current = o);
}
function tp(...n) {
  return (o) => {
    let i = !1;
    const l = n.map((u) => {
      const d = mf(u, o);
      return !i && typeof d == "function" && (i = !0), d;
    });
    if (i)
      return () => {
        for (let u = 0; u < l.length; u++) {
          const d = l[u];
          typeof d == "function" ? d() : mf(n[u], null);
        }
      };
  };
}
function Wt(...n) {
  return S.useCallback(tp(...n), n);
}
function Is(n, o = []) {
  let i = [];
  function l(d, f) {
    const h = S.createContext(f),
      m = i.length;
    i = [...i, f];
    const v = (w) => {
      const { scope: N, children: x, ...R } = w,
        C = N?.[n]?.[m] || h,
        E = S.useMemo(() => R, Object.values(R));
      return g.jsx(C.Provider, { value: E, children: x });
    };
    v.displayName = d + "Provider";
    function y(w, N) {
      const x = N?.[n]?.[m] || h,
        R = S.useContext(x);
      if (R) return R;
      if (f !== void 0) return f;
      throw new Error(`\`${w}\` must be used within \`${d}\``);
    }
    return [v, y];
  }
  const u = () => {
    const d = i.map((f) => S.createContext(f));
    return function (h) {
      const m = h?.[n] || d;
      return S.useMemo(() => ({ [`__scope${n}`]: { ...h, [n]: m } }), [h, m]);
    };
  };
  return (u.scopeName = n), [l, fv(u, ...o)];
}
function fv(...n) {
  const o = n[0];
  if (n.length === 1) return o;
  const i = () => {
    const l = n.map((u) => ({ useScope: u(), scopeName: u.scopeName }));
    return function (d) {
      const f = l.reduce((h, { useScope: m, scopeName: v }) => {
        const w = m(d)[`__scope${v}`];
        return { ...h, ...w };
      }, {});
      return S.useMemo(() => ({ [`__scope${o.scopeName}`]: f }), [f]);
    };
  };
  return (i.scopeName = o.scopeName), i;
}
function Rs(n) {
  const o = hv(n),
    i = S.forwardRef((l, u) => {
      const { children: d, ...f } = l,
        h = S.Children.toArray(d),
        m = h.find(gv);
      if (m) {
        const v = m.props.children,
          y = h.map((w) =>
            w === m
              ? S.Children.count(v) > 1
                ? S.Children.only(null)
                : S.isValidElement(v)
                ? v.props.children
                : null
              : w
          );
        return g.jsx(o, {
          ...f,
          ref: u,
          children: S.isValidElement(v) ? S.cloneElement(v, void 0, y) : null,
        });
      }
      return g.jsx(o, { ...f, ref: u, children: d });
    });
  return (i.displayName = `${n}.Slot`), i;
}
var pv = Rs("Slot");
function hv(n) {
  const o = S.forwardRef((i, l) => {
    const { children: u, ...d } = i;
    if (S.isValidElement(u)) {
      const f = yv(u),
        h = vv(d, u.props);
      return (
        u.type !== S.Fragment && (h.ref = l ? tp(l, f) : f),
        S.cloneElement(u, h)
      );
    }
    return S.Children.count(u) > 1 ? S.Children.only(null) : null;
  });
  return (o.displayName = `${n}.SlotClone`), o;
}
var np = Symbol("radix.slottable");
function mv(n) {
  const o = ({ children: i }) => g.jsx(g.Fragment, { children: i });
  return (o.displayName = `${n}.Slottable`), (o.__radixId = np), o;
}
function gv(n) {
  return (
    S.isValidElement(n) &&
    typeof n.type == "function" &&
    "__radixId" in n.type &&
    n.type.__radixId === np
  );
}
function vv(n, o) {
  const i = { ...o };
  for (const l in o) {
    const u = n[l],
      d = o[l];
    /^on[A-Z]/.test(l)
      ? u && d
        ? (i[l] = (...h) => {
            const m = d(...h);
            return u(...h), m;
          })
        : u && (i[l] = u)
      : l === "style"
      ? (i[l] = { ...u, ...d })
      : l === "className" && (i[l] = [u, d].filter(Boolean).join(" "));
  }
  return { ...n, ...i };
}
function yv(n) {
  let o = Object.getOwnPropertyDescriptor(n.props, "ref")?.get,
    i = o && "isReactWarning" in o && o.isReactWarning;
  return i
    ? n.ref
    : ((o = Object.getOwnPropertyDescriptor(n, "ref")?.get),
      (i = o && "isReactWarning" in o && o.isReactWarning),
      i ? n.props.ref : n.props.ref || n.ref);
}
function xv(n) {
  const o = n + "CollectionProvider",
    [i, l] = Is(o),
    [u, d] = i(o, { collectionRef: { current: null }, itemMap: new Map() }),
    f = (C) => {
      const { scope: E, children: M } = C,
        L = Q.useRef(null),
        D = Q.useRef(new Map()).current;
      return g.jsx(u, { scope: E, itemMap: D, collectionRef: L, children: M });
    };
  f.displayName = o;
  const h = n + "CollectionSlot",
    m = Rs(h),
    v = Q.forwardRef((C, E) => {
      const { scope: M, children: L } = C,
        D = d(h, M),
        z = Wt(E, D.collectionRef);
      return g.jsx(m, { ref: z, children: L });
    });
  v.displayName = h;
  const y = n + "CollectionItemSlot",
    w = "data-radix-collection-item",
    N = Rs(y),
    x = Q.forwardRef((C, E) => {
      const { scope: M, children: L, ...D } = C,
        z = Q.useRef(null),
        H = Wt(E, z),
        K = d(y, M);
      return (
        Q.useEffect(
          () => (
            K.itemMap.set(z, { ref: z, ...D }), () => void K.itemMap.delete(z)
          )
        ),
        g.jsx(N, { [w]: "", ref: H, children: L })
      );
    });
  x.displayName = y;
  function R(C) {
    const E = d(n + "CollectionConsumer", C);
    return Q.useCallback(() => {
      const L = E.collectionRef.current;
      if (!L) return [];
      const D = Array.from(L.querySelectorAll(`[${w}]`));
      return Array.from(E.itemMap.values()).sort(
        (K, G) => D.indexOf(K.ref.current) - D.indexOf(G.ref.current)
      );
    }, [E.collectionRef, E.itemMap]);
  }
  return [{ Provider: f, Slot: v, ItemSlot: x }, R, l];
}
var wv = [
    "a",
    "button",
    "div",
    "form",
    "h2",
    "h3",
    "img",
    "input",
    "label",
    "li",
    "nav",
    "ol",
    "p",
    "select",
    "span",
    "svg",
    "ul",
  ],
  vt = wv.reduce((n, o) => {
    const i = Rs(`Primitive.${o}`),
      l = S.forwardRef((u, d) => {
        const { asChild: f, ...h } = u,
          m = f ? i : o;
        return (
          typeof window < "u" && (window[Symbol.for("radix-ui")] = !0),
          g.jsx(m, { ...h, ref: d })
        );
      });
    return (l.displayName = `Primitive.${o}`), { ...n, [o]: l };
  }, {});
function rp(n, o) {
  n && Ds.flushSync(() => n.dispatchEvent(o));
}
function Xn(n) {
  const o = S.useRef(n);
  return (
    S.useEffect(() => {
      o.current = n;
    }),
    S.useMemo(
      () =>
        (...i) =>
          o.current?.(...i),
      []
    )
  );
}
function Sv(n, o = globalThis?.document) {
  const i = Xn(n);
  S.useEffect(() => {
    const l = (u) => {
      u.key === "Escape" && i(u);
    };
    return (
      o.addEventListener("keydown", l, { capture: !0 }),
      () => o.removeEventListener("keydown", l, { capture: !0 })
    );
  }, [i, o]);
}
var bv = "DismissableLayer",
  $a = "dismissableLayer.update",
  Ev = "dismissableLayer.pointerDownOutside",
  Cv = "dismissableLayer.focusOutside",
  gf,
  op = S.createContext({
    layers: new Set(),
    layersWithOutsidePointerEventsDisabled: new Set(),
    branches: new Set(),
  }),
  ou = S.forwardRef((n, o) => {
    const {
        disableOutsidePointerEvents: i = !1,
        onEscapeKeyDown: l,
        onPointerDownOutside: u,
        onFocusOutside: d,
        onInteractOutside: f,
        onDismiss: h,
        ...m
      } = n,
      v = S.useContext(op),
      [y, w] = S.useState(null),
      N = y?.ownerDocument ?? globalThis?.document,
      [, x] = S.useState({}),
      R = Wt(o, (G) => w(G)),
      C = Array.from(v.layers),
      [E] = [...v.layersWithOutsidePointerEventsDisabled].slice(-1),
      M = C.indexOf(E),
      L = y ? C.indexOf(y) : -1,
      D = v.layersWithOutsidePointerEventsDisabled.size > 0,
      z = L >= M,
      H = Pv((G) => {
        const ce = G.target,
          ge = [...v.branches].some((pe) => pe.contains(ce));
        !z || ge || (u?.(G), f?.(G), G.defaultPrevented || h?.());
      }, N),
      K = Nv((G) => {
        const ce = G.target;
        [...v.branches].some((pe) => pe.contains(ce)) ||
          (d?.(G), f?.(G), G.defaultPrevented || h?.());
      }, N);
    return (
      Sv((G) => {
        L === v.layers.size - 1 &&
          (l?.(G), !G.defaultPrevented && h && (G.preventDefault(), h()));
      }, N),
      S.useEffect(() => {
        if (y)
          return (
            i &&
              (v.layersWithOutsidePointerEventsDisabled.size === 0 &&
                ((gf = N.body.style.pointerEvents),
                (N.body.style.pointerEvents = "none")),
              v.layersWithOutsidePointerEventsDisabled.add(y)),
            v.layers.add(y),
            vf(),
            () => {
              i &&
                v.layersWithOutsidePointerEventsDisabled.size === 1 &&
                (N.body.style.pointerEvents = gf);
            }
          );
      }, [y, N, i, v]),
      S.useEffect(
        () => () => {
          y &&
            (v.layers.delete(y),
            v.layersWithOutsidePointerEventsDisabled.delete(y),
            vf());
        },
        [y, v]
      ),
      S.useEffect(() => {
        const G = () => x({});
        return (
          document.addEventListener($a, G),
          () => document.removeEventListener($a, G)
        );
      }, []),
      g.jsx(vt.div, {
        ...m,
        ref: R,
        style: {
          pointerEvents: D ? (z ? "auto" : "none") : void 0,
          ...n.style,
        },
        onFocusCapture: He(n.onFocusCapture, K.onFocusCapture),
        onBlurCapture: He(n.onBlurCapture, K.onBlurCapture),
        onPointerDownCapture: He(
          n.onPointerDownCapture,
          H.onPointerDownCapture
        ),
      })
    );
  });
ou.displayName = bv;
var kv = "DismissableLayerBranch",
  ip = S.forwardRef((n, o) => {
    const i = S.useContext(op),
      l = S.useRef(null),
      u = Wt(o, l);
    return (
      S.useEffect(() => {
        const d = l.current;
        if (d)
          return (
            i.branches.add(d),
            () => {
              i.branches.delete(d);
            }
          );
      }, [i.branches]),
      g.jsx(vt.div, { ...n, ref: u })
    );
  });
ip.displayName = kv;
function Pv(n, o = globalThis?.document) {
  const i = Xn(n),
    l = S.useRef(!1),
    u = S.useRef(() => {});
  return (
    S.useEffect(() => {
      const d = (h) => {
          if (h.target && !l.current) {
            let m = function () {
              sp(Ev, i, v, { discrete: !0 });
            };
            const v = { originalEvent: h };
            h.pointerType === "touch"
              ? (o.removeEventListener("click", u.current),
                (u.current = m),
                o.addEventListener("click", u.current, { once: !0 }))
              : m();
          } else o.removeEventListener("click", u.current);
          l.current = !1;
        },
        f = window.setTimeout(() => {
          o.addEventListener("pointerdown", d);
        }, 0);
      return () => {
        window.clearTimeout(f),
          o.removeEventListener("pointerdown", d),
          o.removeEventListener("click", u.current);
      };
    }, [o, i]),
    { onPointerDownCapture: () => (l.current = !0) }
  );
}
function Nv(n, o = globalThis?.document) {
  const i = Xn(n),
    l = S.useRef(!1);
  return (
    S.useEffect(() => {
      const u = (d) => {
        d.target &&
          !l.current &&
          sp(Cv, i, { originalEvent: d }, { discrete: !1 });
      };
      return (
        o.addEventListener("focusin", u),
        () => o.removeEventListener("focusin", u)
      );
    }, [o, i]),
    {
      onFocusCapture: () => (l.current = !0),
      onBlurCapture: () => (l.current = !1),
    }
  );
}
function vf() {
  const n = new CustomEvent($a);
  document.dispatchEvent(n);
}
function sp(n, o, i, { discrete: l }) {
  const u = i.originalEvent.target,
    d = new CustomEvent(n, { bubbles: !1, cancelable: !0, detail: i });
  o && u.addEventListener(n, o, { once: !0 }),
    l ? rp(u, d) : u.dispatchEvent(d);
}
var Tv = ou,
  Rv = ip,
  Zn = globalThis?.document ? S.useLayoutEffect : () => {},
  jv = "Portal",
  lp = S.forwardRef((n, o) => {
    const { container: i, ...l } = n,
      [u, d] = S.useState(!1);
    Zn(() => d(!0), []);
    const f = i || (u && globalThis?.document?.body);
    return f ? ep.createPortal(g.jsx(vt.div, { ...l, ref: o }), f) : null;
  });
lp.displayName = jv;
function Ov(n, o) {
  return S.useReducer((i, l) => o[i][l] ?? i, n);
}
var iu = (n) => {
  const { present: o, children: i } = n,
    l = _v(o),
    u =
      typeof i == "function" ? i({ present: l.isPresent }) : S.Children.only(i),
    d = Wt(l.ref, Mv(u));
  return typeof i == "function" || l.isPresent
    ? S.cloneElement(u, { ref: d })
    : null;
};
iu.displayName = "Presence";
function _v(n) {
  const [o, i] = S.useState(),
    l = S.useRef(null),
    u = S.useRef(n),
    d = S.useRef("none"),
    f = n ? "mounted" : "unmounted",
    [h, m] = Ov(f, {
      mounted: { UNMOUNT: "unmounted", ANIMATION_OUT: "unmountSuspended" },
      unmountSuspended: { MOUNT: "mounted", ANIMATION_END: "unmounted" },
      unmounted: { MOUNT: "mounted" },
    });
  return (
    S.useEffect(() => {
      const v = ws(l.current);
      d.current = h === "mounted" ? v : "none";
    }, [h]),
    Zn(() => {
      const v = l.current,
        y = u.current;
      if (y !== n) {
        const N = d.current,
          x = ws(v);
        n
          ? m("MOUNT")
          : x === "none" || v?.display === "none"
          ? m("UNMOUNT")
          : m(y && N !== x ? "ANIMATION_OUT" : "UNMOUNT"),
          (u.current = n);
      }
    }, [n, m]),
    Zn(() => {
      if (o) {
        let v;
        const y = o.ownerDocument.defaultView ?? window,
          w = (x) => {
            const C = ws(l.current).includes(x.animationName);
            if (x.target === o && C && (m("ANIMATION_END"), !u.current)) {
              const E = o.style.animationFillMode;
              (o.style.animationFillMode = "forwards"),
                (v = y.setTimeout(() => {
                  o.style.animationFillMode === "forwards" &&
                    (o.style.animationFillMode = E);
                }));
            }
          },
          N = (x) => {
            x.target === o && (d.current = ws(l.current));
          };
        return (
          o.addEventListener("animationstart", N),
          o.addEventListener("animationcancel", w),
          o.addEventListener("animationend", w),
          () => {
            y.clearTimeout(v),
              o.removeEventListener("animationstart", N),
              o.removeEventListener("animationcancel", w),
              o.removeEventListener("animationend", w);
          }
        );
      } else m("ANIMATION_END");
    }, [o, m]),
    {
      isPresent: ["mounted", "unmountSuspended"].includes(h),
      ref: S.useCallback((v) => {
        (l.current = v ? getComputedStyle(v) : null), i(v);
      }, []),
    }
  );
}
function ws(n) {
  return n?.animationName || "none";
}
function Mv(n) {
  let o = Object.getOwnPropertyDescriptor(n.props, "ref")?.get,
    i = o && "isReactWarning" in o && o.isReactWarning;
  return i
    ? n.ref
    : ((o = Object.getOwnPropertyDescriptor(n, "ref")?.get),
      (i = o && "isReactWarning" in o && o.isReactWarning),
      i ? n.props.ref : n.props.ref || n.ref);
}
var Av = Jf[" useInsertionEffect ".trim().toString()] || Zn;
function Lv({ prop: n, defaultProp: o, onChange: i = () => {}, caller: l }) {
  const [u, d, f] = Dv({ defaultProp: o, onChange: i }),
    h = n !== void 0,
    m = h ? n : u;
  {
    const y = S.useRef(n !== void 0);
    S.useEffect(() => {
      const w = y.current;
      w !== h &&
        console.warn(
          `${l} is changing from ${w ? "controlled" : "uncontrolled"} to ${
            h ? "controlled" : "uncontrolled"
          }. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`
        ),
        (y.current = h);
    }, [h, l]);
  }
  const v = S.useCallback(
    (y) => {
      if (h) {
        const w = Iv(y) ? y(n) : y;
        w !== n && f.current?.(w);
      } else d(y);
    },
    [h, n, d, f]
  );
  return [m, v];
}
function Dv({ defaultProp: n, onChange: o }) {
  const [i, l] = S.useState(n),
    u = S.useRef(i),
    d = S.useRef(o);
  return (
    Av(() => {
      d.current = o;
    }, [o]),
    S.useEffect(() => {
      u.current !== i && (d.current?.(i), (u.current = i));
    }, [i, u]),
    [i, l, d]
  );
}
function Iv(n) {
  return typeof n == "function";
}
var Fv = Object.freeze({
    position: "absolute",
    border: 0,
    width: 1,
    height: 1,
    padding: 0,
    margin: -1,
    overflow: "hidden",
    clip: "rect(0, 0, 0, 0)",
    whiteSpace: "nowrap",
    wordWrap: "normal",
  }),
  zv = "VisuallyHidden",
  Fs = S.forwardRef((n, o) =>
    g.jsx(vt.span, { ...n, ref: o, style: { ...Fv, ...n.style } })
  );
Fs.displayName = zv;
var Uv = Fs,
  su = "ToastProvider",
  [lu, Bv, $v] = xv("Toast"),
  [ap] = Is("Toast", [$v]),
  [Vv, zs] = ap(su),
  up = (n) => {
    const {
        __scopeToast: o,
        label: i = "Notification",
        duration: l = 5e3,
        swipeDirection: u = "right",
        swipeThreshold: d = 50,
        children: f,
      } = n,
      [h, m] = S.useState(null),
      [v, y] = S.useState(0),
      w = S.useRef(!1),
      N = S.useRef(!1);
    return (
      i.trim() ||
        console.error(
          `Invalid prop \`label\` supplied to \`${su}\`. Expected non-empty \`string\`.`
        ),
      g.jsx(lu.Provider, {
        scope: o,
        children: g.jsx(Vv, {
          scope: o,
          label: i,
          duration: l,
          swipeDirection: u,
          swipeThreshold: d,
          toastCount: v,
          viewport: h,
          onViewportChange: m,
          onToastAdd: S.useCallback(() => y((x) => x + 1), []),
          onToastRemove: S.useCallback(() => y((x) => x - 1), []),
          isFocusedToastEscapeKeyDownRef: w,
          isClosePausedRef: N,
          children: f,
        }),
      })
    );
  };
up.displayName = su;
var cp = "ToastViewport",
  Hv = ["F8"],
  Va = "toast.viewportPause",
  Ha = "toast.viewportResume",
  dp = S.forwardRef((n, o) => {
    const {
        __scopeToast: i,
        hotkey: l = Hv,
        label: u = "Notifications ({hotkey})",
        ...d
      } = n,
      f = zs(cp, i),
      h = Bv(i),
      m = S.useRef(null),
      v = S.useRef(null),
      y = S.useRef(null),
      w = S.useRef(null),
      N = Wt(o, w, f.onViewportChange),
      x = l.join("+").replace(/Key/g, "").replace(/Digit/g, ""),
      R = f.toastCount > 0;
    S.useEffect(() => {
      const E = (M) => {
        l.length !== 0 &&
          l.every((D) => M[D] || M.code === D) &&
          w.current?.focus();
      };
      return (
        document.addEventListener("keydown", E),
        () => document.removeEventListener("keydown", E)
      );
    }, [l]),
      S.useEffect(() => {
        const E = m.current,
          M = w.current;
        if (R && E && M) {
          const L = () => {
              if (!f.isClosePausedRef.current) {
                const K = new CustomEvent(Va);
                M.dispatchEvent(K), (f.isClosePausedRef.current = !0);
              }
            },
            D = () => {
              if (f.isClosePausedRef.current) {
                const K = new CustomEvent(Ha);
                M.dispatchEvent(K), (f.isClosePausedRef.current = !1);
              }
            },
            z = (K) => {
              !E.contains(K.relatedTarget) && D();
            },
            H = () => {
              E.contains(document.activeElement) || D();
            };
          return (
            E.addEventListener("focusin", L),
            E.addEventListener("focusout", z),
            E.addEventListener("pointermove", L),
            E.addEventListener("pointerleave", H),
            window.addEventListener("blur", L),
            window.addEventListener("focus", D),
            () => {
              E.removeEventListener("focusin", L),
                E.removeEventListener("focusout", z),
                E.removeEventListener("pointermove", L),
                E.removeEventListener("pointerleave", H),
                window.removeEventListener("blur", L),
                window.removeEventListener("focus", D);
            }
          );
        }
      }, [R, f.isClosePausedRef]);
    const C = S.useCallback(
      ({ tabbingDirection: E }) => {
        const L = h().map((D) => {
          const z = D.ref.current,
            H = [z, ...ry(z)];
          return E === "forwards" ? H : H.reverse();
        });
        return (E === "forwards" ? L.reverse() : L).flat();
      },
      [h]
    );
    return (
      S.useEffect(() => {
        const E = w.current;
        if (E) {
          const M = (L) => {
            const D = L.altKey || L.ctrlKey || L.metaKey;
            if (L.key === "Tab" && !D) {
              const H = document.activeElement,
                K = L.shiftKey;
              if (L.target === E && K) {
                v.current?.focus();
                return;
              }
              const ge = C({ tabbingDirection: K ? "backwards" : "forwards" }),
                pe = ge.findIndex((xe) => xe === H);
              Da(ge.slice(pe + 1))
                ? L.preventDefault()
                : K
                ? v.current?.focus()
                : y.current?.focus();
            }
          };
          return (
            E.addEventListener("keydown", M),
            () => E.removeEventListener("keydown", M)
          );
        }
      }, [h, C]),
      g.jsxs(Rv, {
        ref: m,
        role: "region",
        "aria-label": u.replace("{hotkey}", x),
        tabIndex: -1,
        style: { pointerEvents: R ? void 0 : "none" },
        children: [
          R &&
            g.jsx(Wa, {
              ref: v,
              onFocusFromOutsideViewport: () => {
                const E = C({ tabbingDirection: "forwards" });
                Da(E);
              },
            }),
          g.jsx(lu.Slot, {
            scope: i,
            children: g.jsx(vt.ol, { tabIndex: -1, ...d, ref: N }),
          }),
          R &&
            g.jsx(Wa, {
              ref: y,
              onFocusFromOutsideViewport: () => {
                const E = C({ tabbingDirection: "backwards" });
                Da(E);
              },
            }),
        ],
      })
    );
  });
dp.displayName = cp;
var fp = "ToastFocusProxy",
  Wa = S.forwardRef((n, o) => {
    const { __scopeToast: i, onFocusFromOutsideViewport: l, ...u } = n,
      d = zs(fp, i);
    return g.jsx(Fs, {
      "aria-hidden": !0,
      tabIndex: 0,
      ...u,
      ref: o,
      style: { position: "fixed" },
      onFocus: (f) => {
        const h = f.relatedTarget;
        !d.viewport?.contains(h) && l();
      },
    });
  });
Wa.displayName = fp;
var ti = "Toast",
  Wv = "toast.swipeStart",
  Qv = "toast.swipeMove",
  Kv = "toast.swipeCancel",
  qv = "toast.swipeEnd",
  pp = S.forwardRef((n, o) => {
    const { forceMount: i, open: l, defaultOpen: u, onOpenChange: d, ...f } = n,
      [h, m] = Lv({ prop: l, defaultProp: u ?? !0, onChange: d, caller: ti });
    return g.jsx(iu, {
      present: i || h,
      children: g.jsx(Xv, {
        open: h,
        ...f,
        ref: o,
        onClose: () => m(!1),
        onPause: Xn(n.onPause),
        onResume: Xn(n.onResume),
        onSwipeStart: He(n.onSwipeStart, (v) => {
          v.currentTarget.setAttribute("data-swipe", "start");
        }),
        onSwipeMove: He(n.onSwipeMove, (v) => {
          const { x: y, y: w } = v.detail.delta;
          v.currentTarget.setAttribute("data-swipe", "move"),
            v.currentTarget.style.setProperty(
              "--radix-toast-swipe-move-x",
              `${y}px`
            ),
            v.currentTarget.style.setProperty(
              "--radix-toast-swipe-move-y",
              `${w}px`
            );
        }),
        onSwipeCancel: He(n.onSwipeCancel, (v) => {
          v.currentTarget.setAttribute("data-swipe", "cancel"),
            v.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),
            v.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),
            v.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"),
            v.currentTarget.style.removeProperty("--radix-toast-swipe-end-y");
        }),
        onSwipeEnd: He(n.onSwipeEnd, (v) => {
          const { x: y, y: w } = v.detail.delta;
          v.currentTarget.setAttribute("data-swipe", "end"),
            v.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),
            v.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),
            v.currentTarget.style.setProperty(
              "--radix-toast-swipe-end-x",
              `${y}px`
            ),
            v.currentTarget.style.setProperty(
              "--radix-toast-swipe-end-y",
              `${w}px`
            ),
            m(!1);
        }),
      }),
    });
  });
pp.displayName = ti;
var [Gv, Yv] = ap(ti, { onClose() {} }),
  Xv = S.forwardRef((n, o) => {
    const {
        __scopeToast: i,
        type: l = "foreground",
        duration: u,
        open: d,
        onClose: f,
        onEscapeKeyDown: h,
        onPause: m,
        onResume: v,
        onSwipeStart: y,
        onSwipeMove: w,
        onSwipeCancel: N,
        onSwipeEnd: x,
        ...R
      } = n,
      C = zs(ti, i),
      [E, M] = S.useState(null),
      L = Wt(o, (q) => M(q)),
      D = S.useRef(null),
      z = S.useRef(null),
      H = u || C.duration,
      K = S.useRef(0),
      G = S.useRef(H),
      ce = S.useRef(0),
      { onToastAdd: ge, onToastRemove: pe } = C,
      xe = Xn(() => {
        E?.contains(document.activeElement) && C.viewport?.focus(), f();
      }),
      Z = S.useCallback(
        (q) => {
          !q ||
            q === 1 / 0 ||
            (window.clearTimeout(ce.current),
            (K.current = new Date().getTime()),
            (ce.current = window.setTimeout(xe, q)));
        },
        [xe]
      );
    S.useEffect(() => {
      const q = C.viewport;
      if (q) {
        const me = () => {
            Z(G.current), v?.();
          },
          ie = () => {
            const re = new Date().getTime() - K.current;
            (G.current = G.current - re),
              window.clearTimeout(ce.current),
              m?.();
          };
        return (
          q.addEventListener(Va, ie),
          q.addEventListener(Ha, me),
          () => {
            q.removeEventListener(Va, ie), q.removeEventListener(Ha, me);
          }
        );
      }
    }, [C.viewport, H, m, v, Z]),
      S.useEffect(() => {
        d && !C.isClosePausedRef.current && Z(H);
      }, [d, H, C.isClosePausedRef, Z]),
      S.useEffect(() => (ge(), () => pe()), [ge, pe]);
    const he = S.useMemo(() => (E ? wp(E) : null), [E]);
    return C.viewport
      ? g.jsxs(g.Fragment, {
          children: [
            he &&
              g.jsx(Zv, {
                __scopeToast: i,
                role: "status",
                "aria-live": l === "foreground" ? "assertive" : "polite",
                "aria-atomic": !0,
                children: he,
              }),
            g.jsx(Gv, {
              scope: i,
              onClose: xe,
              children: Ds.createPortal(
                g.jsx(lu.ItemSlot, {
                  scope: i,
                  children: g.jsx(Tv, {
                    asChild: !0,
                    onEscapeKeyDown: He(h, () => {
                      C.isFocusedToastEscapeKeyDownRef.current || xe(),
                        (C.isFocusedToastEscapeKeyDownRef.current = !1);
                    }),
                    children: g.jsx(vt.li, {
                      role: "status",
                      "aria-live": "off",
                      "aria-atomic": !0,
                      tabIndex: 0,
                      "data-state": d ? "open" : "closed",
                      "data-swipe-direction": C.swipeDirection,
                      ...R,
                      ref: L,
                      style: {
                        userSelect: "none",
                        touchAction: "none",
                        ...n.style,
                      },
                      onKeyDown: He(n.onKeyDown, (q) => {
                        q.key === "Escape" &&
                          (h?.(q.nativeEvent),
                          q.nativeEvent.defaultPrevented ||
                            ((C.isFocusedToastEscapeKeyDownRef.current = !0),
                            xe()));
                      }),
                      onPointerDown: He(n.onPointerDown, (q) => {
                        q.button === 0 &&
                          (D.current = { x: q.clientX, y: q.clientY });
                      }),
                      onPointerMove: He(n.onPointerMove, (q) => {
                        if (!D.current) return;
                        const me = q.clientX - D.current.x,
                          ie = q.clientY - D.current.y,
                          re = !!z.current,
                          I = ["left", "right"].includes(C.swipeDirection),
                          F = ["left", "up"].includes(C.swipeDirection)
                            ? Math.min
                            : Math.max,
                          V = I ? F(0, me) : 0,
                          T = I ? 0 : F(0, ie),
                          A = q.pointerType === "touch" ? 10 : 2,
                          Y = { x: V, y: T },
                          J = { originalEvent: q, delta: Y };
                        re
                          ? ((z.current = Y), Ss(Qv, w, J, { discrete: !1 }))
                          : yf(Y, C.swipeDirection, A)
                          ? ((z.current = Y),
                            Ss(Wv, y, J, { discrete: !1 }),
                            q.target.setPointerCapture(q.pointerId))
                          : (Math.abs(me) > A || Math.abs(ie) > A) &&
                            (D.current = null);
                      }),
                      onPointerUp: He(n.onPointerUp, (q) => {
                        const me = z.current,
                          ie = q.target;
                        if (
                          (ie.hasPointerCapture(q.pointerId) &&
                            ie.releasePointerCapture(q.pointerId),
                          (z.current = null),
                          (D.current = null),
                          me)
                        ) {
                          const re = q.currentTarget,
                            I = { originalEvent: q, delta: me };
                          yf(me, C.swipeDirection, C.swipeThreshold)
                            ? Ss(qv, x, I, { discrete: !0 })
                            : Ss(Kv, N, I, { discrete: !0 }),
                            re.addEventListener(
                              "click",
                              (F) => F.preventDefault(),
                              { once: !0 }
                            );
                        }
                      }),
                    }),
                  }),
                }),
                C.viewport
              ),
            }),
          ],
        })
      : null;
  }),
  Zv = (n) => {
    const { __scopeToast: o, children: i, ...l } = n,
      u = zs(ti, o),
      [d, f] = S.useState(!1),
      [h, m] = S.useState(!1);
    return (
      ty(() => f(!0)),
      S.useEffect(() => {
        const v = window.setTimeout(() => m(!0), 1e3);
        return () => window.clearTimeout(v);
      }, []),
      h
        ? null
        : g.jsx(lp, {
            asChild: !0,
            children: g.jsx(Fs, {
              ...l,
              children:
                d && g.jsxs(g.Fragment, { children: [u.label, " ", i] }),
            }),
          })
    );
  },
  Jv = "ToastTitle",
  hp = S.forwardRef((n, o) => {
    const { __scopeToast: i, ...l } = n;
    return g.jsx(vt.div, { ...l, ref: o });
  });
hp.displayName = Jv;
var ey = "ToastDescription",
  mp = S.forwardRef((n, o) => {
    const { __scopeToast: i, ...l } = n;
    return g.jsx(vt.div, { ...l, ref: o });
  });
mp.displayName = ey;
var gp = "ToastAction",
  vp = S.forwardRef((n, o) => {
    const { altText: i, ...l } = n;
    return i.trim()
      ? g.jsx(xp, {
          altText: i,
          asChild: !0,
          children: g.jsx(au, { ...l, ref: o }),
        })
      : (console.error(
          `Invalid prop \`altText\` supplied to \`${gp}\`. Expected non-empty \`string\`.`
        ),
        null);
  });
vp.displayName = gp;
var yp = "ToastClose",
  au = S.forwardRef((n, o) => {
    const { __scopeToast: i, ...l } = n,
      u = Yv(yp, i);
    return g.jsx(xp, {
      asChild: !0,
      children: g.jsx(vt.button, {
        type: "button",
        ...l,
        ref: o,
        onClick: He(n.onClick, u.onClose),
      }),
    });
  });
au.displayName = yp;
var xp = S.forwardRef((n, o) => {
  const { __scopeToast: i, altText: l, ...u } = n;
  return g.jsx(vt.div, {
    "data-radix-toast-announce-exclude": "",
    "data-radix-toast-announce-alt": l || void 0,
    ...u,
    ref: o,
  });
});
function wp(n) {
  const o = [];
  return (
    Array.from(n.childNodes).forEach((l) => {
      if (
        (l.nodeType === l.TEXT_NODE && l.textContent && o.push(l.textContent),
        ny(l))
      ) {
        const u = l.ariaHidden || l.hidden || l.style.display === "none",
          d = l.dataset.radixToastAnnounceExclude === "";
        if (!u)
          if (d) {
            const f = l.dataset.radixToastAnnounceAlt;
            f && o.push(f);
          } else o.push(...wp(l));
      }
    }),
    o
  );
}
function Ss(n, o, i, { discrete: l }) {
  const u = i.originalEvent.currentTarget,
    d = new CustomEvent(n, { bubbles: !0, cancelable: !0, detail: i });
  o && u.addEventListener(n, o, { once: !0 }),
    l ? rp(u, d) : u.dispatchEvent(d);
}
var yf = (n, o, i = 0) => {
  const l = Math.abs(n.x),
    u = Math.abs(n.y),
    d = l > u;
  return o === "left" || o === "right" ? d && l > i : !d && u > i;
};
function ty(n = () => {}) {
  const o = Xn(n);
  Zn(() => {
    let i = 0,
      l = 0;
    return (
      (i = window.requestAnimationFrame(
        () => (l = window.requestAnimationFrame(o))
      )),
      () => {
        window.cancelAnimationFrame(i), window.cancelAnimationFrame(l);
      }
    );
  }, [o]);
}
function ny(n) {
  return n.nodeType === n.ELEMENT_NODE;
}
function ry(n) {
  const o = [],
    i = document.createTreeWalker(n, NodeFilter.SHOW_ELEMENT, {
      acceptNode: (l) => {
        const u = l.tagName === "INPUT" && l.type === "hidden";
        return l.disabled || l.hidden || u
          ? NodeFilter.FILTER_SKIP
          : l.tabIndex >= 0
          ? NodeFilter.FILTER_ACCEPT
          : NodeFilter.FILTER_SKIP;
      },
    });
  for (; i.nextNode(); ) o.push(i.currentNode);
  return o;
}
function Da(n) {
  const o = document.activeElement;
  return n.some((i) =>
    i === o ? !0 : (i.focus(), document.activeElement !== o)
  );
}
var oy = up,
  Sp = dp,
  bp = pp,
  Ep = hp,
  Cp = mp,
  kp = vp,
  Pp = au;
function Np(n) {
  var o,
    i,
    l = "";
  if (typeof n == "string" || typeof n == "number") l += n;
  else if (typeof n == "object")
    if (Array.isArray(n)) {
      var u = n.length;
      for (o = 0; o < u; o++)
        n[o] && (i = Np(n[o])) && (l && (l += " "), (l += i));
    } else for (i in n) n[i] && (l && (l += " "), (l += i));
  return l;
}
function Tp() {
  for (var n, o, i = 0, l = "", u = arguments.length; i < u; i++)
    (n = arguments[i]) && (o = Np(n)) && (l && (l += " "), (l += o));
  return l;
}
const xf = (n) => (typeof n == "boolean" ? `${n}` : n === 0 ? "0" : n),
  wf = Tp,
  Rp = (n, o) => (i) => {
    var l;
    if (o?.variants == null) return wf(n, i?.class, i?.className);
    const { variants: u, defaultVariants: d } = o,
      f = Object.keys(u).map((v) => {
        const y = i?.[v],
          w = d?.[v];
        if (y === null) return null;
        const N = xf(y) || xf(w);
        return u[v][N];
      }),
      h =
        i &&
        Object.entries(i).reduce((v, y) => {
          let [w, N] = y;
          return N === void 0 || (v[w] = N), v;
        }, {}),
      m =
        o == null || (l = o.compoundVariants) === null || l === void 0
          ? void 0
          : l.reduce((v, y) => {
              let { class: w, className: N, ...x } = y;
              return Object.entries(x).every((R) => {
                let [C, E] = R;
                return Array.isArray(E)
                  ? E.includes({ ...d, ...h }[C])
                  : { ...d, ...h }[C] === E;
              })
                ? [...v, w, N]
                : v;
            }, []);
    return wf(n, f, m, i?.class, i?.className);
  };
const iy = (n) => n.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
  jp = (...n) =>
    n
      .filter((o, i, l) => !!o && o.trim() !== "" && l.indexOf(o) === i)
      .join(" ")
      .trim();
var sy = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};
const ly = S.forwardRef(
  (
    {
      color: n = "currentColor",
      size: o = 24,
      strokeWidth: i = 2,
      absoluteStrokeWidth: l,
      className: u = "",
      children: d,
      iconNode: f,
      ...h
    },
    m
  ) =>
    S.createElement(
      "svg",
      {
        ref: m,
        ...sy,
        width: o,
        height: o,
        stroke: n,
        strokeWidth: l ? (Number(i) * 24) / Number(o) : i,
        className: jp("lucide", u),
        ...h,
      },
      [
        ...f.map(([v, y]) => S.createElement(v, y)),
        ...(Array.isArray(d) ? d : [d]),
      ]
    )
);
const Be = (n, o) => {
  const i = S.forwardRef(({ className: l, ...u }, d) =>
    S.createElement(ly, {
      ref: d,
      iconNode: o,
      className: jp(`lucide-${iy(n)}`, l),
      ...u,
    })
  );
  return (i.displayName = `${n}`), i;
};
const ay = Be("Briefcase", [
  ["path", { d: "M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16", key: "jecpp" }],
  [
    "rect",
    { width: "20", height: "14", x: "2", y: "6", rx: "2", key: "i6l2r4" },
  ],
]);
const Op = Be("Car", [
  [
    "path",
    {
      d: "M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2",
      key: "5owen",
    },
  ],
  ["circle", { cx: "7", cy: "17", r: "2", key: "u2ysq9" }],
  ["path", { d: "M9 17h6", key: "r8uit2" }],
  ["circle", { cx: "17", cy: "17", r: "2", key: "axvx0g" }],
]);
const uy = Be("Clock", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["polyline", { points: "12 6 12 12 16 14", key: "68esgv" }],
]);
const cy = Be("Coffee", [
  ["path", { d: "M10 2v2", key: "7u0qdc" }],
  ["path", { d: "M14 2v2", key: "6buw04" }],
  [
    "path",
    {
      d: "M16 8a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h14a4 4 0 1 1 0 8h-1",
      key: "pwadti",
    },
  ],
  ["path", { d: "M6 2v2", key: "colzsn" }],
]);
const _p = Be("Dumbbell", [
  ["path", { d: "M14.4 14.4 9.6 9.6", key: "ic80wn" }],
  [
    "path",
    {
      d: "M18.657 21.485a2 2 0 1 1-2.829-2.828l-1.767 1.768a2 2 0 1 1-2.829-2.829l6.364-6.364a2 2 0 1 1 2.829 2.829l-1.768 1.767a2 2 0 1 1 2.828 2.829z",
      key: "nnl7wr",
    },
  ],
  ["path", { d: "m21.5 21.5-1.4-1.4", key: "1f1ice" }],
  ["path", { d: "M3.9 3.9 2.5 2.5", key: "1evmna" }],
  [
    "path",
    {
      d: "M6.404 12.768a2 2 0 1 1-2.829-2.829l1.768-1.767a2 2 0 1 1-2.828-2.829l2.828-2.828a2 2 0 1 1 2.829 2.828l1.767-1.768a2 2 0 1 1 2.829 2.829z",
      key: "yhosts",
    },
  ],
]);
const dy = Be("Facebook", [
  [
    "path",
    {
      d: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z",
      key: "1jg4f8",
    },
  ],
]);
const Mp = Be("Heart", [
  [
    "path",
    {
      d: "M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",
      key: "c3ymky",
    },
  ],
]);
const fy = Be("Instagram", [
  [
    "rect",
    {
      width: "20",
      height: "20",
      x: "2",
      y: "2",
      rx: "5",
      ry: "5",
      key: "2e1cvw",
    },
  ],
  [
    "path",
    { d: "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z", key: "9exkf1" },
  ],
  ["line", { x1: "17.5", x2: "17.51", y1: "6.5", y2: "6.5", key: "r4j83e" }],
]);
const Ap = Be("Mail", [
  [
    "rect",
    { width: "20", height: "16", x: "2", y: "4", rx: "2", key: "18n3k1" },
  ],
  ["path", { d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7", key: "1ocrg3" }],
]);
const Lp = Be("MapPin", [
  [
    "path",
    {
      d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",
      key: "1r0f0z",
    },
  ],
  ["circle", { cx: "12", cy: "10", r: "3", key: "ilqhr7" }],
]);
const py = Be("Menu", [
  ["line", { x1: "4", x2: "20", y1: "12", y2: "12", key: "1e0a9i" }],
  ["line", { x1: "4", x2: "20", y1: "6", y2: "6", key: "1owob3" }],
  ["line", { x1: "4", x2: "20", y1: "18", y2: "18", key: "yk5zj1" }],
]);
const Dp = Be("Phone", [
  [
    "path",
    {
      d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",
      key: "foiqr5",
    },
  ],
]);
const hy = Be("Sparkles", [
  [
    "path",
    {
      d: "M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",
      key: "4pj2yx",
    },
  ],
  ["path", { d: "M20 3v4", key: "1olli1" }],
  ["path", { d: "M22 5h-4", key: "1gvqau" }],
  ["path", { d: "M4 17v2", key: "vumght" }],
  ["path", { d: "M5 18H3", key: "zchphs" }],
]);
const my = Be("TrendingUp", [
  ["polyline", { points: "22 7 13.5 15.5 8.5 10.5 2 17", key: "126l90" }],
  ["polyline", { points: "16 7 22 7 22 13", key: "kwv8wd" }],
]);
const gy = Be("Twitter", [
  [
    "path",
    {
      d: "M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z",
      key: "pff0z6",
    },
  ],
]);
const vy = Be("Users", [
  ["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", key: "1yyitq" }],
  ["circle", { cx: "9", cy: "7", r: "4", key: "nufk8" }],
  ["path", { d: "M22 21v-2a4 4 0 0 0-3-3.87", key: "kshegd" }],
  ["path", { d: "M16 3.13a4 4 0 0 1 0 7.75", key: "1da9ce" }],
]);
const yy = Be("UtensilsCrossed", [
  [
    "path",
    {
      d: "m16 2-2.3 2.3a3 3 0 0 0 0 4.2l1.8 1.8a3 3 0 0 0 4.2 0L22 8",
      key: "n7qcjb",
    },
  ],
  [
    "path",
    {
      d: "M15 15 3.3 3.3a4.2 4.2 0 0 0 0 6l7.3 7.3c.7.7 2 .7 2.8 0L15 15Zm0 0 7 7",
      key: "d0u48b",
    },
  ],
  ["path", { d: "m2.1 21.8 6.4-6.3", key: "yn04lh" }],
  ["path", { d: "m19 5-7 7", key: "194lzd" }],
]);
const Ip = Be("Utensils", [
  ["path", { d: "M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2", key: "cjf0a3" }],
  ["path", { d: "M7 2v20", key: "1473qp" }],
  [
    "path",
    { d: "M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7", key: "j28e5" },
  ],
]);
const Fp = Be("Wifi", [
  ["path", { d: "M12 20h.01", key: "zekei9" }],
  ["path", { d: "M2 8.82a15 15 0 0 1 20 0", key: "dnpr2z" }],
  ["path", { d: "M5 12.859a10 10 0 0 1 14 0", key: "1x1e6c" }],
  ["path", { d: "M8.5 16.429a5 5 0 0 1 7 0", key: "1bycff" }],
]);
const zp = Be("X", [
    ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
    ["path", { d: "m6 6 12 12", key: "d8bk6v" }],
  ]),
  uu = "-",
  xy = (n) => {
    const o = Sy(n),
      { conflictingClassGroups: i, conflictingClassGroupModifiers: l } = n;
    return {
      getClassGroupId: (f) => {
        const h = f.split(uu);
        return h[0] === "" && h.length !== 1 && h.shift(), Up(h, o) || wy(f);
      },
      getConflictingClassGroupIds: (f, h) => {
        const m = i[f] || [];
        return h && l[f] ? [...m, ...l[f]] : m;
      },
    };
  },
  Up = (n, o) => {
    if (n.length === 0) return o.classGroupId;
    const i = n[0],
      l = o.nextPart.get(i),
      u = l ? Up(n.slice(1), l) : void 0;
    if (u) return u;
    if (o.validators.length === 0) return;
    const d = n.join(uu);
    return o.validators.find(({ validator: f }) => f(d))?.classGroupId;
  },
  Sf = /^\[(.+)\]$/,
  wy = (n) => {
    if (Sf.test(n)) {
      const o = Sf.exec(n)[1],
        i = o?.substring(0, o.indexOf(":"));
      if (i) return "arbitrary.." + i;
    }
  },
  Sy = (n) => {
    const { theme: o, prefix: i } = n,
      l = { nextPart: new Map(), validators: [] };
    return (
      Ey(Object.entries(n.classGroups), i).forEach(([d, f]) => {
        Qa(f, l, d, o);
      }),
      l
    );
  },
  Qa = (n, o, i, l) => {
    n.forEach((u) => {
      if (typeof u == "string") {
        const d = u === "" ? o : bf(o, u);
        d.classGroupId = i;
        return;
      }
      if (typeof u == "function") {
        if (by(u)) {
          Qa(u(l), o, i, l);
          return;
        }
        o.validators.push({ validator: u, classGroupId: i });
        return;
      }
      Object.entries(u).forEach(([d, f]) => {
        Qa(f, bf(o, d), i, l);
      });
    });
  },
  bf = (n, o) => {
    let i = n;
    return (
      o.split(uu).forEach((l) => {
        i.nextPart.has(l) ||
          i.nextPart.set(l, { nextPart: new Map(), validators: [] }),
          (i = i.nextPart.get(l));
      }),
      i
    );
  },
  by = (n) => n.isThemeGetter,
  Ey = (n, o) =>
    o
      ? n.map(([i, l]) => {
          const u = l.map((d) =>
            typeof d == "string"
              ? o + d
              : typeof d == "object"
              ? Object.fromEntries(
                  Object.entries(d).map(([f, h]) => [o + f, h])
                )
              : d
          );
          return [i, u];
        })
      : n,
  Cy = (n) => {
    if (n < 1) return { get: () => {}, set: () => {} };
    let o = 0,
      i = new Map(),
      l = new Map();
    const u = (d, f) => {
      i.set(d, f), o++, o > n && ((o = 0), (l = i), (i = new Map()));
    };
    return {
      get(d) {
        let f = i.get(d);
        if (f !== void 0) return f;
        if ((f = l.get(d)) !== void 0) return u(d, f), f;
      },
      set(d, f) {
        i.has(d) ? i.set(d, f) : u(d, f);
      },
    };
  },
  Bp = "!",
  ky = (n) => {
    const { separator: o, experimentalParseClassName: i } = n,
      l = o.length === 1,
      u = o[0],
      d = o.length,
      f = (h) => {
        const m = [];
        let v = 0,
          y = 0,
          w;
        for (let E = 0; E < h.length; E++) {
          let M = h[E];
          if (v === 0) {
            if (M === u && (l || h.slice(E, E + d) === o)) {
              m.push(h.slice(y, E)), (y = E + d);
              continue;
            }
            if (M === "/") {
              w = E;
              continue;
            }
          }
          M === "[" ? v++ : M === "]" && v--;
        }
        const N = m.length === 0 ? h : h.substring(y),
          x = N.startsWith(Bp),
          R = x ? N.substring(1) : N,
          C = w && w > y ? w - y : void 0;
        return {
          modifiers: m,
          hasImportantModifier: x,
          baseClassName: R,
          maybePostfixModifierPosition: C,
        };
      };
    return i ? (h) => i({ className: h, parseClassName: f }) : f;
  },
  Py = (n) => {
    if (n.length <= 1) return n;
    const o = [];
    let i = [];
    return (
      n.forEach((l) => {
        l[0] === "[" ? (o.push(...i.sort(), l), (i = [])) : i.push(l);
      }),
      o.push(...i.sort()),
      o
    );
  },
  Ny = (n) => ({ cache: Cy(n.cacheSize), parseClassName: ky(n), ...xy(n) }),
  Ty = /\s+/,
  Ry = (n, o) => {
    const {
        parseClassName: i,
        getClassGroupId: l,
        getConflictingClassGroupIds: u,
      } = o,
      d = [],
      f = n.trim().split(Ty);
    let h = "";
    for (let m = f.length - 1; m >= 0; m -= 1) {
      const v = f[m],
        {
          modifiers: y,
          hasImportantModifier: w,
          baseClassName: N,
          maybePostfixModifierPosition: x,
        } = i(v);
      let R = !!x,
        C = l(R ? N.substring(0, x) : N);
      if (!C) {
        if (!R) {
          h = v + (h.length > 0 ? " " + h : h);
          continue;
        }
        if (((C = l(N)), !C)) {
          h = v + (h.length > 0 ? " " + h : h);
          continue;
        }
        R = !1;
      }
      const E = Py(y).join(":"),
        M = w ? E + Bp : E,
        L = M + C;
      if (d.includes(L)) continue;
      d.push(L);
      const D = u(C, R);
      for (let z = 0; z < D.length; ++z) {
        const H = D[z];
        d.push(M + H);
      }
      h = v + (h.length > 0 ? " " + h : h);
    }
    return h;
  };
function jy() {
  let n = 0,
    o,
    i,
    l = "";
  for (; n < arguments.length; )
    (o = arguments[n++]) && (i = $p(o)) && (l && (l += " "), (l += i));
  return l;
}
const $p = (n) => {
  if (typeof n == "string") return n;
  let o,
    i = "";
  for (let l = 0; l < n.length; l++)
    n[l] && (o = $p(n[l])) && (i && (i += " "), (i += o));
  return i;
};
function Oy(n, ...o) {
  let i,
    l,
    u,
    d = f;
  function f(m) {
    const v = o.reduce((y, w) => w(y), n());
    return (i = Ny(v)), (l = i.cache.get), (u = i.cache.set), (d = h), h(m);
  }
  function h(m) {
    const v = l(m);
    if (v) return v;
    const y = Ry(m, i);
    return u(m, y), y;
  }
  return function () {
    return d(jy.apply(null, arguments));
  };
}
const Oe = (n) => {
    const o = (i) => i[n] || [];
    return (o.isThemeGetter = !0), o;
  },
  Vp = /^\[(?:([a-z-]+):)?(.+)\]$/i,
  _y = /^\d+\/\d+$/,
  My = new Set(["px", "full", "screen"]),
  Ay = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
  Ly =
    /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
  Dy = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,
  Iy = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
  Fy =
    /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,
  xn = (n) => Qr(n) || My.has(n) || _y.test(n),
  Qn = (n) => Xr(n, "length", Qy),
  Qr = (n) => !!n && !Number.isNaN(Number(n)),
  Ia = (n) => Xr(n, "number", Qr),
  Qo = (n) => !!n && Number.isInteger(Number(n)),
  zy = (n) => n.endsWith("%") && Qr(n.slice(0, -1)),
  ye = (n) => Vp.test(n),
  Kn = (n) => Ay.test(n),
  Uy = new Set(["length", "size", "percentage"]),
  By = (n) => Xr(n, Uy, Hp),
  $y = (n) => Xr(n, "position", Hp),
  Vy = new Set(["image", "url"]),
  Hy = (n) => Xr(n, Vy, qy),
  Wy = (n) => Xr(n, "", Ky),
  Ko = () => !0,
  Xr = (n, o, i) => {
    const l = Vp.exec(n);
    return l
      ? l[1]
        ? typeof o == "string"
          ? l[1] === o
          : o.has(l[1])
        : i(l[2])
      : !1;
  },
  Qy = (n) => Ly.test(n) && !Dy.test(n),
  Hp = () => !1,
  Ky = (n) => Iy.test(n),
  qy = (n) => Fy.test(n),
  Gy = () => {
    const n = Oe("colors"),
      o = Oe("spacing"),
      i = Oe("blur"),
      l = Oe("brightness"),
      u = Oe("borderColor"),
      d = Oe("borderRadius"),
      f = Oe("borderSpacing"),
      h = Oe("borderWidth"),
      m = Oe("contrast"),
      v = Oe("grayscale"),
      y = Oe("hueRotate"),
      w = Oe("invert"),
      N = Oe("gap"),
      x = Oe("gradientColorStops"),
      R = Oe("gradientColorStopPositions"),
      C = Oe("inset"),
      E = Oe("margin"),
      M = Oe("opacity"),
      L = Oe("padding"),
      D = Oe("saturate"),
      z = Oe("scale"),
      H = Oe("sepia"),
      K = Oe("skew"),
      G = Oe("space"),
      ce = Oe("translate"),
      ge = () => ["auto", "contain", "none"],
      pe = () => ["auto", "hidden", "clip", "visible", "scroll"],
      xe = () => ["auto", ye, o],
      Z = () => [ye, o],
      he = () => ["", xn, Qn],
      q = () => ["auto", Qr, ye],
      me = () => [
        "bottom",
        "center",
        "left",
        "left-bottom",
        "left-top",
        "right",
        "right-bottom",
        "right-top",
        "top",
      ],
      ie = () => ["solid", "dashed", "dotted", "double", "none"],
      re = () => [
        "normal",
        "multiply",
        "screen",
        "overlay",
        "darken",
        "lighten",
        "color-dodge",
        "color-burn",
        "hard-light",
        "soft-light",
        "difference",
        "exclusion",
        "hue",
        "saturation",
        "color",
        "luminosity",
      ],
      I = () => [
        "start",
        "end",
        "center",
        "between",
        "around",
        "evenly",
        "stretch",
      ],
      F = () => ["", "0", ye],
      V = () => [
        "auto",
        "avoid",
        "all",
        "avoid-page",
        "page",
        "left",
        "right",
        "column",
      ],
      T = () => [Qr, ye];
    return {
      cacheSize: 500,
      separator: ":",
      theme: {
        colors: [Ko],
        spacing: [xn, Qn],
        blur: ["none", "", Kn, ye],
        brightness: T(),
        borderColor: [n],
        borderRadius: ["none", "", "full", Kn, ye],
        borderSpacing: Z(),
        borderWidth: he(),
        contrast: T(),
        grayscale: F(),
        hueRotate: T(),
        invert: F(),
        gap: Z(),
        gradientColorStops: [n],
        gradientColorStopPositions: [zy, Qn],
        inset: xe(),
        margin: xe(),
        opacity: T(),
        padding: Z(),
        saturate: T(),
        scale: T(),
        sepia: F(),
        skew: T(),
        space: Z(),
        translate: Z(),
      },
      classGroups: {
        aspect: [{ aspect: ["auto", "square", "video", ye] }],
        container: ["container"],
        columns: [{ columns: [Kn] }],
        "break-after": [{ "break-after": V() }],
        "break-before": [{ "break-before": V() }],
        "break-inside": [
          { "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"] },
        ],
        "box-decoration": [{ "box-decoration": ["slice", "clone"] }],
        box: [{ box: ["border", "content"] }],
        display: [
          "block",
          "inline-block",
          "inline",
          "flex",
          "inline-flex",
          "table",
          "inline-table",
          "table-caption",
          "table-cell",
          "table-column",
          "table-column-group",
          "table-footer-group",
          "table-header-group",
          "table-row-group",
          "table-row",
          "flow-root",
          "grid",
          "inline-grid",
          "contents",
          "list-item",
          "hidden",
        ],
        float: [{ float: ["right", "left", "none", "start", "end"] }],
        clear: [{ clear: ["left", "right", "both", "none", "start", "end"] }],
        isolation: ["isolate", "isolation-auto"],
        "object-fit": [
          { object: ["contain", "cover", "fill", "none", "scale-down"] },
        ],
        "object-position": [{ object: [...me(), ye] }],
        overflow: [{ overflow: pe() }],
        "overflow-x": [{ "overflow-x": pe() }],
        "overflow-y": [{ "overflow-y": pe() }],
        overscroll: [{ overscroll: ge() }],
        "overscroll-x": [{ "overscroll-x": ge() }],
        "overscroll-y": [{ "overscroll-y": ge() }],
        position: ["static", "fixed", "absolute", "relative", "sticky"],
        inset: [{ inset: [C] }],
        "inset-x": [{ "inset-x": [C] }],
        "inset-y": [{ "inset-y": [C] }],
        start: [{ start: [C] }],
        end: [{ end: [C] }],
        top: [{ top: [C] }],
        right: [{ right: [C] }],
        bottom: [{ bottom: [C] }],
        left: [{ left: [C] }],
        visibility: ["visible", "invisible", "collapse"],
        z: [{ z: ["auto", Qo, ye] }],
        basis: [{ basis: xe() }],
        "flex-direction": [
          { flex: ["row", "row-reverse", "col", "col-reverse"] },
        ],
        "flex-wrap": [{ flex: ["wrap", "wrap-reverse", "nowrap"] }],
        flex: [{ flex: ["1", "auto", "initial", "none", ye] }],
        grow: [{ grow: F() }],
        shrink: [{ shrink: F() }],
        order: [{ order: ["first", "last", "none", Qo, ye] }],
        "grid-cols": [{ "grid-cols": [Ko] }],
        "col-start-end": [{ col: ["auto", { span: ["full", Qo, ye] }, ye] }],
        "col-start": [{ "col-start": q() }],
        "col-end": [{ "col-end": q() }],
        "grid-rows": [{ "grid-rows": [Ko] }],
        "row-start-end": [{ row: ["auto", { span: [Qo, ye] }, ye] }],
        "row-start": [{ "row-start": q() }],
        "row-end": [{ "row-end": q() }],
        "grid-flow": [
          { "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"] },
        ],
        "auto-cols": [{ "auto-cols": ["auto", "min", "max", "fr", ye] }],
        "auto-rows": [{ "auto-rows": ["auto", "min", "max", "fr", ye] }],
        gap: [{ gap: [N] }],
        "gap-x": [{ "gap-x": [N] }],
        "gap-y": [{ "gap-y": [N] }],
        "justify-content": [{ justify: ["normal", ...I()] }],
        "justify-items": [
          { "justify-items": ["start", "end", "center", "stretch"] },
        ],
        "justify-self": [
          { "justify-self": ["auto", "start", "end", "center", "stretch"] },
        ],
        "align-content": [{ content: ["normal", ...I(), "baseline"] }],
        "align-items": [
          { items: ["start", "end", "center", "baseline", "stretch"] },
        ],
        "align-self": [
          { self: ["auto", "start", "end", "center", "stretch", "baseline"] },
        ],
        "place-content": [{ "place-content": [...I(), "baseline"] }],
        "place-items": [
          { "place-items": ["start", "end", "center", "baseline", "stretch"] },
        ],
        "place-self": [
          { "place-self": ["auto", "start", "end", "center", "stretch"] },
        ],
        p: [{ p: [L] }],
        px: [{ px: [L] }],
        py: [{ py: [L] }],
        ps: [{ ps: [L] }],
        pe: [{ pe: [L] }],
        pt: [{ pt: [L] }],
        pr: [{ pr: [L] }],
        pb: [{ pb: [L] }],
        pl: [{ pl: [L] }],
        m: [{ m: [E] }],
        mx: [{ mx: [E] }],
        my: [{ my: [E] }],
        ms: [{ ms: [E] }],
        me: [{ me: [E] }],
        mt: [{ mt: [E] }],
        mr: [{ mr: [E] }],
        mb: [{ mb: [E] }],
        ml: [{ ml: [E] }],
        "space-x": [{ "space-x": [G] }],
        "space-x-reverse": ["space-x-reverse"],
        "space-y": [{ "space-y": [G] }],
        "space-y-reverse": ["space-y-reverse"],
        w: [{ w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", ye, o] }],
        "min-w": [{ "min-w": [ye, o, "min", "max", "fit"] }],
        "max-w": [
          {
            "max-w": [
              ye,
              o,
              "none",
              "full",
              "min",
              "max",
              "fit",
              "prose",
              { screen: [Kn] },
              Kn,
            ],
          },
        ],
        h: [{ h: [ye, o, "auto", "min", "max", "fit", "svh", "lvh", "dvh"] }],
        "min-h": [
          { "min-h": [ye, o, "min", "max", "fit", "svh", "lvh", "dvh"] },
        ],
        "max-h": [
          { "max-h": [ye, o, "min", "max", "fit", "svh", "lvh", "dvh"] },
        ],
        size: [{ size: [ye, o, "auto", "min", "max", "fit"] }],
        "font-size": [{ text: ["base", Kn, Qn] }],
        "font-smoothing": ["antialiased", "subpixel-antialiased"],
        "font-style": ["italic", "not-italic"],
        "font-weight": [
          {
            font: [
              "thin",
              "extralight",
              "light",
              "normal",
              "medium",
              "semibold",
              "bold",
              "extrabold",
              "black",
              Ia,
            ],
          },
        ],
        "font-family": [{ font: [Ko] }],
        "fvn-normal": ["normal-nums"],
        "fvn-ordinal": ["ordinal"],
        "fvn-slashed-zero": ["slashed-zero"],
        "fvn-figure": ["lining-nums", "oldstyle-nums"],
        "fvn-spacing": ["proportional-nums", "tabular-nums"],
        "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
        tracking: [
          {
            tracking: [
              "tighter",
              "tight",
              "normal",
              "wide",
              "wider",
              "widest",
              ye,
            ],
          },
        ],
        "line-clamp": [{ "line-clamp": ["none", Qr, Ia] }],
        leading: [
          {
            leading: [
              "none",
              "tight",
              "snug",
              "normal",
              "relaxed",
              "loose",
              xn,
              ye,
            ],
          },
        ],
        "list-image": [{ "list-image": ["none", ye] }],
        "list-style-type": [{ list: ["none", "disc", "decimal", ye] }],
        "list-style-position": [{ list: ["inside", "outside"] }],
        "placeholder-color": [{ placeholder: [n] }],
        "placeholder-opacity": [{ "placeholder-opacity": [M] }],
        "text-alignment": [
          { text: ["left", "center", "right", "justify", "start", "end"] },
        ],
        "text-color": [{ text: [n] }],
        "text-opacity": [{ "text-opacity": [M] }],
        "text-decoration": [
          "underline",
          "overline",
          "line-through",
          "no-underline",
        ],
        "text-decoration-style": [{ decoration: [...ie(), "wavy"] }],
        "text-decoration-thickness": [
          { decoration: ["auto", "from-font", xn, Qn] },
        ],
        "underline-offset": [{ "underline-offset": ["auto", xn, ye] }],
        "text-decoration-color": [{ decoration: [n] }],
        "text-transform": [
          "uppercase",
          "lowercase",
          "capitalize",
          "normal-case",
        ],
        "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
        "text-wrap": [{ text: ["wrap", "nowrap", "balance", "pretty"] }],
        indent: [{ indent: Z() }],
        "vertical-align": [
          {
            align: [
              "baseline",
              "top",
              "middle",
              "bottom",
              "text-top",
              "text-bottom",
              "sub",
              "super",
              ye,
            ],
          },
        ],
        whitespace: [
          {
            whitespace: [
              "normal",
              "nowrap",
              "pre",
              "pre-line",
              "pre-wrap",
              "break-spaces",
            ],
          },
        ],
        break: [{ break: ["normal", "words", "all", "keep"] }],
        hyphens: [{ hyphens: ["none", "manual", "auto"] }],
        content: [{ content: ["none", ye] }],
        "bg-attachment": [{ bg: ["fixed", "local", "scroll"] }],
        "bg-clip": [{ "bg-clip": ["border", "padding", "content", "text"] }],
        "bg-opacity": [{ "bg-opacity": [M] }],
        "bg-origin": [{ "bg-origin": ["border", "padding", "content"] }],
        "bg-position": [{ bg: [...me(), $y] }],
        "bg-repeat": [
          { bg: ["no-repeat", { repeat: ["", "x", "y", "round", "space"] }] },
        ],
        "bg-size": [{ bg: ["auto", "cover", "contain", By] }],
        "bg-image": [
          {
            bg: [
              "none",
              { "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"] },
              Hy,
            ],
          },
        ],
        "bg-color": [{ bg: [n] }],
        "gradient-from-pos": [{ from: [R] }],
        "gradient-via-pos": [{ via: [R] }],
        "gradient-to-pos": [{ to: [R] }],
        "gradient-from": [{ from: [x] }],
        "gradient-via": [{ via: [x] }],
        "gradient-to": [{ to: [x] }],
        rounded: [{ rounded: [d] }],
        "rounded-s": [{ "rounded-s": [d] }],
        "rounded-e": [{ "rounded-e": [d] }],
        "rounded-t": [{ "rounded-t": [d] }],
        "rounded-r": [{ "rounded-r": [d] }],
        "rounded-b": [{ "rounded-b": [d] }],
        "rounded-l": [{ "rounded-l": [d] }],
        "rounded-ss": [{ "rounded-ss": [d] }],
        "rounded-se": [{ "rounded-se": [d] }],
        "rounded-ee": [{ "rounded-ee": [d] }],
        "rounded-es": [{ "rounded-es": [d] }],
        "rounded-tl": [{ "rounded-tl": [d] }],
        "rounded-tr": [{ "rounded-tr": [d] }],
        "rounded-br": [{ "rounded-br": [d] }],
        "rounded-bl": [{ "rounded-bl": [d] }],
        "border-w": [{ border: [h] }],
        "border-w-x": [{ "border-x": [h] }],
        "border-w-y": [{ "border-y": [h] }],
        "border-w-s": [{ "border-s": [h] }],
        "border-w-e": [{ "border-e": [h] }],
        "border-w-t": [{ "border-t": [h] }],
        "border-w-r": [{ "border-r": [h] }],
        "border-w-b": [{ "border-b": [h] }],
        "border-w-l": [{ "border-l": [h] }],
        "border-opacity": [{ "border-opacity": [M] }],
        "border-style": [{ border: [...ie(), "hidden"] }],
        "divide-x": [{ "divide-x": [h] }],
        "divide-x-reverse": ["divide-x-reverse"],
        "divide-y": [{ "divide-y": [h] }],
        "divide-y-reverse": ["divide-y-reverse"],
        "divide-opacity": [{ "divide-opacity": [M] }],
        "divide-style": [{ divide: ie() }],
        "border-color": [{ border: [u] }],
        "border-color-x": [{ "border-x": [u] }],
        "border-color-y": [{ "border-y": [u] }],
        "border-color-s": [{ "border-s": [u] }],
        "border-color-e": [{ "border-e": [u] }],
        "border-color-t": [{ "border-t": [u] }],
        "border-color-r": [{ "border-r": [u] }],
        "border-color-b": [{ "border-b": [u] }],
        "border-color-l": [{ "border-l": [u] }],
        "divide-color": [{ divide: [u] }],
        "outline-style": [{ outline: ["", ...ie()] }],
        "outline-offset": [{ "outline-offset": [xn, ye] }],
        "outline-w": [{ outline: [xn, Qn] }],
        "outline-color": [{ outline: [n] }],
        "ring-w": [{ ring: he() }],
        "ring-w-inset": ["ring-inset"],
        "ring-color": [{ ring: [n] }],
        "ring-opacity": [{ "ring-opacity": [M] }],
        "ring-offset-w": [{ "ring-offset": [xn, Qn] }],
        "ring-offset-color": [{ "ring-offset": [n] }],
        shadow: [{ shadow: ["", "inner", "none", Kn, Wy] }],
        "shadow-color": [{ shadow: [Ko] }],
        opacity: [{ opacity: [M] }],
        "mix-blend": [
          { "mix-blend": [...re(), "plus-lighter", "plus-darker"] },
        ],
        "bg-blend": [{ "bg-blend": re() }],
        filter: [{ filter: ["", "none"] }],
        blur: [{ blur: [i] }],
        brightness: [{ brightness: [l] }],
        contrast: [{ contrast: [m] }],
        "drop-shadow": [{ "drop-shadow": ["", "none", Kn, ye] }],
        grayscale: [{ grayscale: [v] }],
        "hue-rotate": [{ "hue-rotate": [y] }],
        invert: [{ invert: [w] }],
        saturate: [{ saturate: [D] }],
        sepia: [{ sepia: [H] }],
        "backdrop-filter": [{ "backdrop-filter": ["", "none"] }],
        "backdrop-blur": [{ "backdrop-blur": [i] }],
        "backdrop-brightness": [{ "backdrop-brightness": [l] }],
        "backdrop-contrast": [{ "backdrop-contrast": [m] }],
        "backdrop-grayscale": [{ "backdrop-grayscale": [v] }],
        "backdrop-hue-rotate": [{ "backdrop-hue-rotate": [y] }],
        "backdrop-invert": [{ "backdrop-invert": [w] }],
        "backdrop-opacity": [{ "backdrop-opacity": [M] }],
        "backdrop-saturate": [{ "backdrop-saturate": [D] }],
        "backdrop-sepia": [{ "backdrop-sepia": [H] }],
        "border-collapse": [{ border: ["collapse", "separate"] }],
        "border-spacing": [{ "border-spacing": [f] }],
        "border-spacing-x": [{ "border-spacing-x": [f] }],
        "border-spacing-y": [{ "border-spacing-y": [f] }],
        "table-layout": [{ table: ["auto", "fixed"] }],
        caption: [{ caption: ["top", "bottom"] }],
        transition: [
          {
            transition: [
              "none",
              "all",
              "",
              "colors",
              "opacity",
              "shadow",
              "transform",
              ye,
            ],
          },
        ],
        duration: [{ duration: T() }],
        ease: [{ ease: ["linear", "in", "out", "in-out", ye] }],
        delay: [{ delay: T() }],
        animate: [{ animate: ["none", "spin", "ping", "pulse", "bounce", ye] }],
        transform: [{ transform: ["", "gpu", "none"] }],
        scale: [{ scale: [z] }],
        "scale-x": [{ "scale-x": [z] }],
        "scale-y": [{ "scale-y": [z] }],
        rotate: [{ rotate: [Qo, ye] }],
        "translate-x": [{ "translate-x": [ce] }],
        "translate-y": [{ "translate-y": [ce] }],
        "skew-x": [{ "skew-x": [K] }],
        "skew-y": [{ "skew-y": [K] }],
        "transform-origin": [
          {
            origin: [
              "center",
              "top",
              "top-right",
              "right",
              "bottom-right",
              "bottom",
              "bottom-left",
              "left",
              "top-left",
              ye,
            ],
          },
        ],
        accent: [{ accent: ["auto", n] }],
        appearance: [{ appearance: ["none", "auto"] }],
        cursor: [
          {
            cursor: [
              "auto",
              "default",
              "pointer",
              "wait",
              "text",
              "move",
              "help",
              "not-allowed",
              "none",
              "context-menu",
              "progress",
              "cell",
              "crosshair",
              "vertical-text",
              "alias",
              "copy",
              "no-drop",
              "grab",
              "grabbing",
              "all-scroll",
              "col-resize",
              "row-resize",
              "n-resize",
              "e-resize",
              "s-resize",
              "w-resize",
              "ne-resize",
              "nw-resize",
              "se-resize",
              "sw-resize",
              "ew-resize",
              "ns-resize",
              "nesw-resize",
              "nwse-resize",
              "zoom-in",
              "zoom-out",
              ye,
            ],
          },
        ],
        "caret-color": [{ caret: [n] }],
        "pointer-events": [{ "pointer-events": ["none", "auto"] }],
        resize: [{ resize: ["none", "y", "x", ""] }],
        "scroll-behavior": [{ scroll: ["auto", "smooth"] }],
        "scroll-m": [{ "scroll-m": Z() }],
        "scroll-mx": [{ "scroll-mx": Z() }],
        "scroll-my": [{ "scroll-my": Z() }],
        "scroll-ms": [{ "scroll-ms": Z() }],
        "scroll-me": [{ "scroll-me": Z() }],
        "scroll-mt": [{ "scroll-mt": Z() }],
        "scroll-mr": [{ "scroll-mr": Z() }],
        "scroll-mb": [{ "scroll-mb": Z() }],
        "scroll-ml": [{ "scroll-ml": Z() }],
        "scroll-p": [{ "scroll-p": Z() }],
        "scroll-px": [{ "scroll-px": Z() }],
        "scroll-py": [{ "scroll-py": Z() }],
        "scroll-ps": [{ "scroll-ps": Z() }],
        "scroll-pe": [{ "scroll-pe": Z() }],
        "scroll-pt": [{ "scroll-pt": Z() }],
        "scroll-pr": [{ "scroll-pr": Z() }],
        "scroll-pb": [{ "scroll-pb": Z() }],
        "scroll-pl": [{ "scroll-pl": Z() }],
        "snap-align": [{ snap: ["start", "end", "center", "align-none"] }],
        "snap-stop": [{ snap: ["normal", "always"] }],
        "snap-type": [{ snap: ["none", "x", "y", "both"] }],
        "snap-strictness": [{ snap: ["mandatory", "proximity"] }],
        touch: [{ touch: ["auto", "none", "manipulation"] }],
        "touch-x": [{ "touch-pan": ["x", "left", "right"] }],
        "touch-y": [{ "touch-pan": ["y", "up", "down"] }],
        "touch-pz": ["touch-pinch-zoom"],
        select: [{ select: ["none", "text", "all", "auto"] }],
        "will-change": [
          { "will-change": ["auto", "scroll", "contents", "transform", ye] },
        ],
        fill: [{ fill: [n, "none"] }],
        "stroke-w": [{ stroke: [xn, Qn, Ia] }],
        stroke: [{ stroke: [n, "none"] }],
        sr: ["sr-only", "not-sr-only"],
        "forced-color-adjust": [{ "forced-color-adjust": ["auto", "none"] }],
      },
      conflictingClassGroups: {
        overflow: ["overflow-x", "overflow-y"],
        overscroll: ["overscroll-x", "overscroll-y"],
        inset: [
          "inset-x",
          "inset-y",
          "start",
          "end",
          "top",
          "right",
          "bottom",
          "left",
        ],
        "inset-x": ["right", "left"],
        "inset-y": ["top", "bottom"],
        flex: ["basis", "grow", "shrink"],
        gap: ["gap-x", "gap-y"],
        p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
        px: ["pr", "pl"],
        py: ["pt", "pb"],
        m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
        mx: ["mr", "ml"],
        my: ["mt", "mb"],
        size: ["w", "h"],
        "font-size": ["leading"],
        "fvn-normal": [
          "fvn-ordinal",
          "fvn-slashed-zero",
          "fvn-figure",
          "fvn-spacing",
          "fvn-fraction",
        ],
        "fvn-ordinal": ["fvn-normal"],
        "fvn-slashed-zero": ["fvn-normal"],
        "fvn-figure": ["fvn-normal"],
        "fvn-spacing": ["fvn-normal"],
        "fvn-fraction": ["fvn-normal"],
        "line-clamp": ["display", "overflow"],
        rounded: [
          "rounded-s",
          "rounded-e",
          "rounded-t",
          "rounded-r",
          "rounded-b",
          "rounded-l",
          "rounded-ss",
          "rounded-se",
          "rounded-ee",
          "rounded-es",
          "rounded-tl",
          "rounded-tr",
          "rounded-br",
          "rounded-bl",
        ],
        "rounded-s": ["rounded-ss", "rounded-es"],
        "rounded-e": ["rounded-se", "rounded-ee"],
        "rounded-t": ["rounded-tl", "rounded-tr"],
        "rounded-r": ["rounded-tr", "rounded-br"],
        "rounded-b": ["rounded-br", "rounded-bl"],
        "rounded-l": ["rounded-tl", "rounded-bl"],
        "border-spacing": ["border-spacing-x", "border-spacing-y"],
        "border-w": [
          "border-w-s",
          "border-w-e",
          "border-w-t",
          "border-w-r",
          "border-w-b",
          "border-w-l",
        ],
        "border-w-x": ["border-w-r", "border-w-l"],
        "border-w-y": ["border-w-t", "border-w-b"],
        "border-color": [
          "border-color-s",
          "border-color-e",
          "border-color-t",
          "border-color-r",
          "border-color-b",
          "border-color-l",
        ],
        "border-color-x": ["border-color-r", "border-color-l"],
        "border-color-y": ["border-color-t", "border-color-b"],
        "scroll-m": [
          "scroll-mx",
          "scroll-my",
          "scroll-ms",
          "scroll-me",
          "scroll-mt",
          "scroll-mr",
          "scroll-mb",
          "scroll-ml",
        ],
        "scroll-mx": ["scroll-mr", "scroll-ml"],
        "scroll-my": ["scroll-mt", "scroll-mb"],
        "scroll-p": [
          "scroll-px",
          "scroll-py",
          "scroll-ps",
          "scroll-pe",
          "scroll-pt",
          "scroll-pr",
          "scroll-pb",
          "scroll-pl",
        ],
        "scroll-px": ["scroll-pr", "scroll-pl"],
        "scroll-py": ["scroll-pt", "scroll-pb"],
        touch: ["touch-x", "touch-y", "touch-pz"],
        "touch-x": ["touch"],
        "touch-y": ["touch"],
        "touch-pz": ["touch"],
      },
      conflictingClassGroupModifiers: { "font-size": ["leading"] },
    };
  },
  Yy = Oy(Gy);
function nt(...n) {
  return Yy(Tp(n));
}
const Xy = oy,
  Wp = S.forwardRef(({ className: n, ...o }, i) =>
    g.jsx(Sp, {
      ref: i,
      className: nt(
        "fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",
        n
      ),
      ...o,
    })
  );
Wp.displayName = Sp.displayName;
const Zy = Rp(
    "group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full",
    {
      variants: {
        variant: {
          default: "border bg-background text-foreground",
          destructive:
            "destructive group border-destructive bg-destructive text-destructive-foreground",
        },
      },
      defaultVariants: { variant: "default" },
    }
  ),
  Qp = S.forwardRef(({ className: n, variant: o, ...i }, l) =>
    g.jsx(bp, { ref: l, className: nt(Zy({ variant: o }), n), ...i })
  );
Qp.displayName = bp.displayName;
const Jy = S.forwardRef(({ className: n, ...o }, i) =>
  g.jsx(kp, {
    ref: i,
    className: nt(
      "inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors group-[.destructive]:border-muted/40 hover:bg-secondary group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 group-[.destructive]:focus:ring-destructive disabled:pointer-events-none disabled:opacity-50",
      n
    ),
    ...o,
  })
);
Jy.displayName = kp.displayName;
const Kp = S.forwardRef(({ className: n, ...o }, i) =>
  g.jsx(Pp, {
    ref: i,
    className: nt(
      "absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity group-hover:opacity-100 group-[.destructive]:text-red-300 hover:text-foreground group-[.destructive]:hover:text-red-50 focus:opacity-100 focus:outline-none focus:ring-2 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",
      n
    ),
    "toast-close": "",
    ...o,
    children: g.jsx(zp, { className: "h-4 w-4" }),
  })
);
Kp.displayName = Pp.displayName;
const qp = S.forwardRef(({ className: n, ...o }, i) =>
  g.jsx(Ep, { ref: i, className: nt("text-sm font-semibold", n), ...o })
);
qp.displayName = Ep.displayName;
const Gp = S.forwardRef(({ className: n, ...o }, i) =>
  g.jsx(Cp, { ref: i, className: nt("text-sm opacity-90", n), ...o })
);
Gp.displayName = Cp.displayName;
function e0() {
  const { toasts: n } = dv();
  return g.jsxs(Xy, {
    children: [
      n.map(function ({ id: o, title: i, description: l, action: u, ...d }) {
        return g.jsxs(
          Qp,
          {
            ...d,
            children: [
              g.jsxs("div", {
                className: "grid gap-1",
                children: [
                  i && g.jsx(qp, { children: i }),
                  l && g.jsx(Gp, { children: l }),
                ],
              }),
              u,
              g.jsx(Kp, {}),
            ],
          },
          o
        );
      }),
      g.jsx(Wp, {}),
    ],
  });
}
var Ef = ["light", "dark"],
  t0 = "(prefers-color-scheme: dark)",
  n0 = S.createContext(void 0),
  r0 = { setTheme: (n) => {}, themes: [] },
  o0 = () => {
    var n;
    return (n = S.useContext(n0)) != null ? n : r0;
  };
S.memo(
  ({
    forcedTheme: n,
    storageKey: o,
    attribute: i,
    enableSystem: l,
    enableColorScheme: u,
    defaultTheme: d,
    value: f,
    attrs: h,
    nonce: m,
  }) => {
    let v = d === "system",
      y =
        i === "class"
          ? `var d=document.documentElement,c=d.classList;${`c.remove(${h
              .map((R) => `'${R}'`)
              .join(",")})`};`
          : `var d=document.documentElement,n='${i}',s='setAttribute';`,
      w = u
        ? Ef.includes(d) && d
          ? `if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'${d}'`
          : "if(e==='light'||e==='dark')d.style.colorScheme=e"
        : "",
      N = (R, C = !1, E = !0) => {
        let M = f ? f[R] : R,
          L = C ? R + "|| ''" : `'${M}'`,
          D = "";
        return (
          u &&
            E &&
            !C &&
            Ef.includes(R) &&
            (D += `d.style.colorScheme = '${R}';`),
          i === "class"
            ? C || M
              ? (D += `c.add(${L})`)
              : (D += "null")
            : M && (D += `d[s](n,${L})`),
          D
        );
      },
      x = n
        ? `!function(){${y}${N(n)}}()`
        : l
        ? `!function(){try{${y}var e=localStorage.getItem('${o}');if('system'===e||(!e&&${v})){var t='${t0}',m=window.matchMedia(t);if(m.media!==t||m.matches){${N(
            "dark"
          )}}else{${N("light")}}}else if(e){${
            f ? `var x=${JSON.stringify(f)};` : ""
          }${N(f ? "x[e]" : "e", !0)}}${
            v ? "" : "else{" + N(d, !1, !1) + "}"
          }${w}}catch(e){}}()`
        : `!function(){try{${y}var e=localStorage.getItem('${o}');if(e){${
            f ? `var x=${JSON.stringify(f)};` : ""
          }${N(f ? "x[e]" : "e", !0)}}else{${N(
            d,
            !1,
            !1
          )};}${w}}catch(t){}}();`;
    return S.createElement("script", {
      nonce: m,
      dangerouslySetInnerHTML: { __html: x },
    });
  }
);
var i0 = (n) => {
    switch (n) {
      case "success":
        return a0;
      case "info":
        return c0;
      case "warning":
        return u0;
      case "error":
        return d0;
      default:
        return null;
    }
  },
  s0 = Array(12).fill(0),
  l0 = ({ visible: n, className: o }) =>
    Q.createElement(
      "div",
      {
        className: ["sonner-loading-wrapper", o].filter(Boolean).join(" "),
        "data-visible": n,
      },
      Q.createElement(
        "div",
        { className: "sonner-spinner" },
        s0.map((i, l) =>
          Q.createElement("div", {
            className: "sonner-loading-bar",
            key: `spinner-bar-${l}`,
          })
        )
      )
    ),
  a0 = Q.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      fill: "currentColor",
      height: "20",
      width: "20",
    },
    Q.createElement("path", {
      fillRule: "evenodd",
      d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",
      clipRule: "evenodd",
    })
  ),
  u0 = Q.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      fill: "currentColor",
      height: "20",
      width: "20",
    },
    Q.createElement("path", {
      fillRule: "evenodd",
      d: "M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z",
      clipRule: "evenodd",
    })
  ),
  c0 = Q.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      fill: "currentColor",
      height: "20",
      width: "20",
    },
    Q.createElement("path", {
      fillRule: "evenodd",
      d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z",
      clipRule: "evenodd",
    })
  ),
  d0 = Q.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      fill: "currentColor",
      height: "20",
      width: "20",
    },
    Q.createElement("path", {
      fillRule: "evenodd",
      d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z",
      clipRule: "evenodd",
    })
  ),
  f0 = Q.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: "12",
      height: "12",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "1.5",
      strokeLinecap: "round",
      strokeLinejoin: "round",
    },
    Q.createElement("line", { x1: "18", y1: "6", x2: "6", y2: "18" }),
    Q.createElement("line", { x1: "6", y1: "6", x2: "18", y2: "18" })
  ),
  p0 = () => {
    let [n, o] = Q.useState(document.hidden);
    return (
      Q.useEffect(() => {
        let i = () => {
          o(document.hidden);
        };
        return (
          document.addEventListener("visibilitychange", i),
          () => window.removeEventListener("visibilitychange", i)
        );
      }, []),
      n
    );
  },
  Ka = 1,
  h0 = class {
    constructor() {
      (this.subscribe = (n) => (
        this.subscribers.push(n),
        () => {
          let o = this.subscribers.indexOf(n);
          this.subscribers.splice(o, 1);
        }
      )),
        (this.publish = (n) => {
          this.subscribers.forEach((o) => o(n));
        }),
        (this.addToast = (n) => {
          this.publish(n), (this.toasts = [...this.toasts, n]);
        }),
        (this.create = (n) => {
          var o;
          let { message: i, ...l } = n,
            u =
              typeof n?.id == "number" ||
              ((o = n.id) == null ? void 0 : o.length) > 0
                ? n.id
                : Ka++,
            d = this.toasts.find((h) => h.id === u),
            f = n.dismissible === void 0 ? !0 : n.dismissible;
          return (
            this.dismissedToasts.has(u) && this.dismissedToasts.delete(u),
            d
              ? (this.toasts = this.toasts.map((h) =>
                  h.id === u
                    ? (this.publish({ ...h, ...n, id: u, title: i }),
                      { ...h, ...n, id: u, dismissible: f, title: i })
                    : h
                ))
              : this.addToast({ title: i, ...l, dismissible: f, id: u }),
            u
          );
        }),
        (this.dismiss = (n) => (
          this.dismissedToasts.add(n),
          n ||
            this.toasts.forEach((o) => {
              this.subscribers.forEach((i) => i({ id: o.id, dismiss: !0 }));
            }),
          this.subscribers.forEach((o) => o({ id: n, dismiss: !0 })),
          n
        )),
        (this.message = (n, o) => this.create({ ...o, message: n })),
        (this.error = (n, o) =>
          this.create({ ...o, message: n, type: "error" })),
        (this.success = (n, o) =>
          this.create({ ...o, type: "success", message: n })),
        (this.info = (n, o) => this.create({ ...o, type: "info", message: n })),
        (this.warning = (n, o) =>
          this.create({ ...o, type: "warning", message: n })),
        (this.loading = (n, o) =>
          this.create({ ...o, type: "loading", message: n })),
        (this.promise = (n, o) => {
          if (!o) return;
          let i;
          o.loading !== void 0 &&
            (i = this.create({
              ...o,
              promise: n,
              type: "loading",
              message: o.loading,
              description:
                typeof o.description != "function" ? o.description : void 0,
            }));
          let l = n instanceof Promise ? n : n(),
            u = i !== void 0,
            d,
            f = l
              .then(async (m) => {
                if (((d = ["resolve", m]), Q.isValidElement(m)))
                  (u = !1), this.create({ id: i, type: "default", message: m });
                else if (g0(m) && !m.ok) {
                  u = !1;
                  let v =
                      typeof o.error == "function"
                        ? await o.error(`HTTP error! status: ${m.status}`)
                        : o.error,
                    y =
                      typeof o.description == "function"
                        ? await o.description(`HTTP error! status: ${m.status}`)
                        : o.description;
                  this.create({
                    id: i,
                    type: "error",
                    message: v,
                    description: y,
                  });
                } else if (o.success !== void 0) {
                  u = !1;
                  let v =
                      typeof o.success == "function"
                        ? await o.success(m)
                        : o.success,
                    y =
                      typeof o.description == "function"
                        ? await o.description(m)
                        : o.description;
                  this.create({
                    id: i,
                    type: "success",
                    message: v,
                    description: y,
                  });
                }
              })
              .catch(async (m) => {
                if (((d = ["reject", m]), o.error !== void 0)) {
                  u = !1;
                  let v =
                      typeof o.error == "function" ? await o.error(m) : o.error,
                    y =
                      typeof o.description == "function"
                        ? await o.description(m)
                        : o.description;
                  this.create({
                    id: i,
                    type: "error",
                    message: v,
                    description: y,
                  });
                }
              })
              .finally(() => {
                var m;
                u && (this.dismiss(i), (i = void 0)),
                  (m = o.finally) == null || m.call(o);
              }),
            h = () =>
              new Promise((m, v) =>
                f.then(() => (d[0] === "reject" ? v(d[1]) : m(d[1]))).catch(v)
              );
          return typeof i != "string" && typeof i != "number"
            ? { unwrap: h }
            : Object.assign(i, { unwrap: h });
        }),
        (this.custom = (n, o) => {
          let i = o?.id || Ka++;
          return this.create({ jsx: n(i), id: i, ...o }), i;
        }),
        (this.getActiveToasts = () =>
          this.toasts.filter((n) => !this.dismissedToasts.has(n.id))),
        (this.subscribers = []),
        (this.toasts = []),
        (this.dismissedToasts = new Set());
    }
  },
  gt = new h0(),
  m0 = (n, o) => {
    let i = o?.id || Ka++;
    return gt.addToast({ title: n, ...o, id: i }), i;
  },
  g0 = (n) =>
    n &&
    typeof n == "object" &&
    "ok" in n &&
    typeof n.ok == "boolean" &&
    "status" in n &&
    typeof n.status == "number",
  v0 = m0,
  y0 = () => gt.toasts,
  x0 = () => gt.getActiveToasts();
Object.assign(
  v0,
  {
    success: gt.success,
    info: gt.info,
    warning: gt.warning,
    error: gt.error,
    custom: gt.custom,
    message: gt.message,
    promise: gt.promise,
    dismiss: gt.dismiss,
    loading: gt.loading,
  },
  { getHistory: y0, getToasts: x0 }
);
function w0(n, { insertAt: o } = {}) {
  if (typeof document > "u") return;
  let i = document.head || document.getElementsByTagName("head")[0],
    l = document.createElement("style");
  (l.type = "text/css"),
    o === "top" && i.firstChild
      ? i.insertBefore(l, i.firstChild)
      : i.appendChild(l),
    l.styleSheet
      ? (l.styleSheet.cssText = n)
      : l.appendChild(document.createTextNode(n));
}
w0(`:where(html[dir="ltr"]),:where([data-sonner-toaster][dir="ltr"]){--toast-icon-margin-start: -3px;--toast-icon-margin-end: 4px;--toast-svg-margin-start: -1px;--toast-svg-margin-end: 0px;--toast-button-margin-start: auto;--toast-button-margin-end: 0;--toast-close-button-start: 0;--toast-close-button-end: unset;--toast-close-button-transform: translate(-35%, -35%)}:where(html[dir="rtl"]),:where([data-sonner-toaster][dir="rtl"]){--toast-icon-margin-start: 4px;--toast-icon-margin-end: -3px;--toast-svg-margin-start: 0px;--toast-svg-margin-end: -1px;--toast-button-margin-start: 0;--toast-button-margin-end: auto;--toast-close-button-start: unset;--toast-close-button-end: 0;--toast-close-button-transform: translate(35%, -35%)}:where([data-sonner-toaster]){position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1: hsl(0, 0%, 99%);--gray2: hsl(0, 0%, 97.3%);--gray3: hsl(0, 0%, 95.1%);--gray4: hsl(0, 0%, 93%);--gray5: hsl(0, 0%, 90.9%);--gray6: hsl(0, 0%, 88.7%);--gray7: hsl(0, 0%, 85.8%);--gray8: hsl(0, 0%, 78%);--gray9: hsl(0, 0%, 56.1%);--gray10: hsl(0, 0%, 52.3%);--gray11: hsl(0, 0%, 43.5%);--gray12: hsl(0, 0%, 9%);--border-radius: 8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:none;z-index:999999999;transition:transform .4s ease}:where([data-sonner-toaster][data-lifted="true"]){transform:translateY(-10px)}@media (hover: none) and (pointer: coarse){:where([data-sonner-toaster][data-lifted="true"]){transform:none}}:where([data-sonner-toaster][data-x-position="right"]){right:var(--offset-right)}:where([data-sonner-toaster][data-x-position="left"]){left:var(--offset-left)}:where([data-sonner-toaster][data-x-position="center"]){left:50%;transform:translate(-50%)}:where([data-sonner-toaster][data-y-position="top"]){top:var(--offset-top)}:where([data-sonner-toaster][data-y-position="bottom"]){bottom:var(--offset-bottom)}:where([data-sonner-toast]){--y: translateY(100%);--lift-amount: calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);filter:blur(0);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:none;overflow-wrap:anywhere}:where([data-sonner-toast][data-styled="true"]){padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px #0000001a;width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}:where([data-sonner-toast]:focus-visible){box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast][data-y-position="top"]){top:0;--y: translateY(-100%);--lift: 1;--lift-amount: calc(1 * var(--gap))}:where([data-sonner-toast][data-y-position="bottom"]){bottom:0;--y: translateY(100%);--lift: -1;--lift-amount: calc(var(--lift) * var(--gap))}:where([data-sonner-toast]) :where([data-description]){font-weight:400;line-height:1.4;color:inherit}:where([data-sonner-toast]) :where([data-title]){font-weight:500;line-height:1.5;color:inherit}:where([data-sonner-toast]) :where([data-icon]){display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}:where([data-sonner-toast][data-promise="true"]) :where([data-icon])>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}:where([data-sonner-toast]) :where([data-icon])>*{flex-shrink:0}:where([data-sonner-toast]) :where([data-icon]) svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}:where([data-sonner-toast]) :where([data-content]){display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;cursor:pointer;outline:none;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}:where([data-sonner-toast]) :where([data-button]):focus-visible{box-shadow:0 0 0 2px #0006}:where([data-sonner-toast]) :where([data-button]):first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}:where([data-sonner-toast]) :where([data-cancel]){color:var(--normal-text);background:rgba(0,0,0,.08)}:where([data-sonner-toast][data-theme="dark"]) :where([data-cancel]){background:rgba(255,255,255,.3)}:where([data-sonner-toast]) :where([data-close-button]){position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;color:var(--gray12);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}[data-sonner-toast] [data-close-button]{background:var(--gray1)}:where([data-sonner-toast]) :where([data-close-button]):focus-visible{box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast]) :where([data-disabled="true"]){cursor:not-allowed}:where([data-sonner-toast]):hover :where([data-close-button]):hover{background:var(--gray2);border-color:var(--gray5)}:where([data-sonner-toast][data-swiping="true"]):before{content:"";position:absolute;left:-50%;right:-50%;height:100%;z-index:-1}:where([data-sonner-toast][data-y-position="top"][data-swiping="true"]):before{bottom:50%;transform:scaleY(3) translateY(50%)}:where([data-sonner-toast][data-y-position="bottom"][data-swiping="true"]):before{top:50%;transform:scaleY(3) translateY(-50%)}:where([data-sonner-toast][data-swiping="false"][data-removed="true"]):before{content:"";position:absolute;inset:0;transform:scaleY(2)}:where([data-sonner-toast]):after{content:"";position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}:where([data-sonner-toast][data-mounted="true"]){--y: translateY(0);opacity:1}:where([data-sonner-toast][data-expanded="false"][data-front="false"]){--scale: var(--toasts-before) * .05 + 1;--y: translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}:where([data-sonner-toast])>*{transition:opacity .4s}:where([data-sonner-toast][data-expanded="false"][data-front="false"][data-styled="true"])>*{opacity:0}:where([data-sonner-toast][data-visible="false"]){opacity:0;pointer-events:none}:where([data-sonner-toast][data-mounted="true"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}:where([data-sonner-toast][data-removed="true"][data-front="true"][data-swipe-out="false"]){--y: translateY(calc(var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="false"]){--y: translateY(40%);opacity:0;transition:transform .5s,opacity .2s}:where([data-sonner-toast][data-removed="true"][data-front="false"]):before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount-y, 0px)) translate(var(--swipe-amount-x, 0px));transition:none}[data-sonner-toast][data-swiped=true]{user-select:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation-duration:.2s;animation-timing-function:ease-out;animation-fill-mode:forwards}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=left]{animation-name:swipe-out-left}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=right]{animation-name:swipe-out-right}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=up]{animation-name:swipe-out-up}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=down]{animation-name:swipe-out-down}@keyframes swipe-out-left{0%{transform:var(--y) translate(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translate(calc(var(--swipe-amount-x) - 100%));opacity:0}}@keyframes swipe-out-right{0%{transform:var(--y) translate(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translate(calc(var(--swipe-amount-x) + 100%));opacity:0}}@keyframes swipe-out-up{0%{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) - 100%));opacity:0}}@keyframes swipe-out-down{0%{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) + 100%));opacity:0}}@media (max-width: 600px){[data-sonner-toaster]{position:fixed;right:var(--mobile-offset-right);left:var(--mobile-offset-left);width:100%}[data-sonner-toaster][dir=rtl]{left:calc(var(--mobile-offset-left) * -1)}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset-left) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset-left)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--mobile-offset-bottom)}[data-sonner-toaster][data-y-position=top]{top:var(--mobile-offset-top)}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset-left);right:var(--mobile-offset-right);transform:none}}[data-sonner-toaster][data-theme=light]{--normal-bg: #fff;--normal-border: var(--gray4);--normal-text: var(--gray12);--success-bg: hsl(143, 85%, 96%);--success-border: hsl(145, 92%, 91%);--success-text: hsl(140, 100%, 27%);--info-bg: hsl(208, 100%, 97%);--info-border: hsl(221, 91%, 91%);--info-text: hsl(210, 92%, 45%);--warning-bg: hsl(49, 100%, 97%);--warning-border: hsl(49, 91%, 91%);--warning-text: hsl(31, 92%, 45%);--error-bg: hsl(359, 100%, 97%);--error-border: hsl(359, 100%, 94%);--error-text: hsl(360, 100%, 45%)}[data-sonner-toaster][data-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg: #000;--normal-border: hsl(0, 0%, 20%);--normal-text: var(--gray1)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg: #fff;--normal-border: var(--gray3);--normal-text: var(--gray12)}[data-sonner-toaster][data-theme=dark]{--normal-bg: #000;--normal-bg-hover: hsl(0, 0%, 12%);--normal-border: hsl(0, 0%, 20%);--normal-border-hover: hsl(0, 0%, 25%);--normal-text: var(--gray1);--success-bg: hsl(150, 100%, 6%);--success-border: hsl(147, 100%, 12%);--success-text: hsl(150, 86%, 65%);--info-bg: hsl(215, 100%, 6%);--info-border: hsl(223, 100%, 12%);--info-text: hsl(216, 87%, 65%);--warning-bg: hsl(64, 100%, 6%);--warning-border: hsl(60, 100%, 12%);--warning-text: hsl(46, 87%, 65%);--error-bg: hsl(358, 76%, 10%);--error-border: hsl(357, 89%, 16%);--error-text: hsl(358, 100%, 81%)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast] [data-close-button]{background:var(--normal-bg);border-color:var(--normal-border);color:var(--normal-text)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast] [data-close-button]:hover{background:var(--normal-bg-hover);border-color:var(--normal-border-hover)}[data-rich-colors=true][data-sonner-toast][data-type=success],[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info],[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning],[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error],[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size: 16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:nth-child(1){animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}to{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}to{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}to{opacity:.15}}@media (prefers-reduced-motion){[data-sonner-toast],[data-sonner-toast]>*,.sonner-loading-bar{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}
`);
function bs(n) {
  return n.label !== void 0;
}
var S0 = 3,
  b0 = "32px",
  E0 = "16px",
  Cf = 4e3,
  C0 = 356,
  k0 = 14,
  P0 = 20,
  N0 = 200;
function $t(...n) {
  return n.filter(Boolean).join(" ");
}
function T0(n) {
  let [o, i] = n.split("-"),
    l = [];
  return o && l.push(o), i && l.push(i), l;
}
var R0 = (n) => {
  var o, i, l, u, d, f, h, m, v, y, w;
  let {
      invert: N,
      toast: x,
      unstyled: R,
      interacting: C,
      setHeights: E,
      visibleToasts: M,
      heights: L,
      index: D,
      toasts: z,
      expanded: H,
      removeToast: K,
      defaultRichColors: G,
      closeButton: ce,
      style: ge,
      cancelButtonStyle: pe,
      actionButtonStyle: xe,
      className: Z = "",
      descriptionClassName: he = "",
      duration: q,
      position: me,
      gap: ie,
      loadingIcon: re,
      expandByDefault: I,
      classNames: F,
      icons: V,
      closeButtonAriaLabel: T = "Close toast",
      pauseWhenPageIsHidden: A,
    } = n,
    [Y, J] = Q.useState(null),
    [ue, ve] = Q.useState(null),
    [se, Se] = Q.useState(!1),
    [Ee, Fe] = Q.useState(!1),
    [Ct, Cn] = Q.useState(!1),
    [kt, oo] = Q.useState(!1),
    [ii, io] = Q.useState(!1),
    [so, yr] = Q.useState(0),
    [lo, kn] = Q.useState(0),
    Pt = Q.useRef(x.duration || q || Cf),
    xr = Q.useRef(null),
    qt = Q.useRef(null),
    si = D === 0,
    li = D + 1 <= M,
    rt = x.type,
    Gt = x.dismissible !== !1,
    wr = x.className || "",
    ai = x.descriptionClassName || "",
    Yt = Q.useMemo(
      () => L.findIndex((fe) => fe.toastId === x.id) || 0,
      [L, x.id]
    ),
    tr = Q.useMemo(() => {
      var fe;
      return (fe = x.closeButton) != null ? fe : ce;
    }, [x.closeButton, ce]),
    ui = Q.useMemo(() => x.duration || q || Cf, [x.duration, q]),
    Sr = Q.useRef(0),
    cn = Q.useRef(0),
    ci = Q.useRef(0),
    Xt = Q.useRef(null),
    [ao, uo] = me.split("-"),
    br = Q.useMemo(
      () => L.reduce((fe, ke, Ne) => (Ne >= Yt ? fe : fe + ke.height), 0),
      [L, Yt]
    ),
    Er = p0(),
    Pn = x.invert || N,
    Zt = rt === "loading";
  (cn.current = Q.useMemo(() => Yt * ie + br, [Yt, br])),
    Q.useEffect(() => {
      Pt.current = ui;
    }, [ui]),
    Q.useEffect(() => {
      Se(!0);
    }, []),
    Q.useEffect(() => {
      let fe = qt.current;
      if (fe) {
        let ke = fe.getBoundingClientRect().height;
        return (
          kn(ke),
          E((Ne) => [
            { toastId: x.id, height: ke, position: x.position },
            ...Ne,
          ]),
          () => E((Ne) => Ne.filter((ot) => ot.toastId !== x.id))
        );
      }
    }, [E, x.id]),
    Q.useLayoutEffect(() => {
      if (!se) return;
      let fe = qt.current,
        ke = fe.style.height;
      fe.style.height = "auto";
      let Ne = fe.getBoundingClientRect().height;
      (fe.style.height = ke),
        kn(Ne),
        E((ot) =>
          ot.find((at) => at.toastId === x.id)
            ? ot.map((at) => (at.toastId === x.id ? { ...at, height: Ne } : at))
            : [{ toastId: x.id, height: Ne, position: x.position }, ...ot]
        );
    }, [se, x.title, x.description, E, x.id]);
  let Mt = Q.useCallback(() => {
    Fe(!0),
      yr(cn.current),
      E((fe) => fe.filter((ke) => ke.toastId !== x.id)),
      setTimeout(() => {
        K(x);
      }, N0);
  }, [x, K, E, cn]);
  Q.useEffect(() => {
    if (
      (x.promise && rt === "loading") ||
      x.duration === 1 / 0 ||
      x.type === "loading"
    )
      return;
    let fe;
    return (
      H || C || (A && Er)
        ? (() => {
            if (ci.current < Sr.current) {
              let ke = new Date().getTime() - Sr.current;
              Pt.current = Pt.current - ke;
            }
            ci.current = new Date().getTime();
          })()
        : Pt.current !== 1 / 0 &&
          ((Sr.current = new Date().getTime()),
          (fe = setTimeout(() => {
            var ke;
            (ke = x.onAutoClose) == null || ke.call(x, x), Mt();
          }, Pt.current))),
      () => clearTimeout(fe)
    );
  }, [H, C, x, rt, A, Er, Mt]),
    Q.useEffect(() => {
      x.delete && Mt();
    }, [Mt, x.delete]);
  function di() {
    var fe, ke, Ne;
    return V != null && V.loading
      ? Q.createElement(
          "div",
          {
            className: $t(
              F?.loader,
              (fe = x?.classNames) == null ? void 0 : fe.loader,
              "sonner-loader"
            ),
            "data-visible": rt === "loading",
          },
          V.loading
        )
      : re
      ? Q.createElement(
          "div",
          {
            className: $t(
              F?.loader,
              (ke = x?.classNames) == null ? void 0 : ke.loader,
              "sonner-loader"
            ),
            "data-visible": rt === "loading",
          },
          re
        )
      : Q.createElement(l0, {
          className: $t(
            F?.loader,
            (Ne = x?.classNames) == null ? void 0 : Ne.loader
          ),
          visible: rt === "loading",
        });
  }
  return Q.createElement(
    "li",
    {
      tabIndex: 0,
      ref: qt,
      className: $t(
        Z,
        wr,
        F?.toast,
        (o = x?.classNames) == null ? void 0 : o.toast,
        F?.default,
        F?.[rt],
        (i = x?.classNames) == null ? void 0 : i[rt]
      ),
      "data-sonner-toast": "",
      "data-rich-colors": (l = x.richColors) != null ? l : G,
      "data-styled": !(x.jsx || x.unstyled || R),
      "data-mounted": se,
      "data-promise": !!x.promise,
      "data-swiped": ii,
      "data-removed": Ee,
      "data-visible": li,
      "data-y-position": ao,
      "data-x-position": uo,
      "data-index": D,
      "data-front": si,
      "data-swiping": Ct,
      "data-dismissible": Gt,
      "data-type": rt,
      "data-invert": Pn,
      "data-swipe-out": kt,
      "data-swipe-direction": ue,
      "data-expanded": !!(H || (I && se)),
      style: {
        "--index": D,
        "--toasts-before": D,
        "--z-index": z.length - D,
        "--offset": `${Ee ? so : cn.current}px`,
        "--initial-height": I ? "auto" : `${lo}px`,
        ...ge,
        ...x.style,
      },
      onDragEnd: () => {
        Cn(!1), J(null), (Xt.current = null);
      },
      onPointerDown: (fe) => {
        Zt ||
          !Gt ||
          ((xr.current = new Date()),
          yr(cn.current),
          fe.target.setPointerCapture(fe.pointerId),
          fe.target.tagName !== "BUTTON" &&
            (Cn(!0), (Xt.current = { x: fe.clientX, y: fe.clientY })));
      },
      onPointerUp: () => {
        var fe, ke, Ne, ot;
        if (kt || !Gt) return;
        Xt.current = null;
        let at = Number(
            ((fe = qt.current) == null
              ? void 0
              : fe.style
                  .getPropertyValue("--swipe-amount-x")
                  .replace("px", "")) || 0
          ),
          ut = Number(
            ((ke = qt.current) == null
              ? void 0
              : ke.style
                  .getPropertyValue("--swipe-amount-y")
                  .replace("px", "")) || 0
          ),
          At =
            new Date().getTime() -
            ((Ne = xr.current) == null ? void 0 : Ne.getTime()),
          qe = Y === "x" ? at : ut,
          Jt = Math.abs(qe) / At;
        if (Math.abs(qe) >= P0 || Jt > 0.11) {
          yr(cn.current),
            (ot = x.onDismiss) == null || ot.call(x, x),
            ve(
              Y === "x" ? (at > 0 ? "right" : "left") : ut > 0 ? "down" : "up"
            ),
            Mt(),
            oo(!0),
            io(!1);
          return;
        }
        Cn(!1), J(null);
      },
      onPointerMove: (fe) => {
        var ke, Ne, ot, at;
        if (
          !Xt.current ||
          !Gt ||
          ((ke = window.getSelection()) == null
            ? void 0
            : ke.toString().length) > 0
        )
          return;
        let ut = fe.clientY - Xt.current.y,
          At = fe.clientX - Xt.current.x,
          qe = (Ne = n.swipeDirections) != null ? Ne : T0(me);
        !Y &&
          (Math.abs(At) > 1 || Math.abs(ut) > 1) &&
          J(Math.abs(At) > Math.abs(ut) ? "x" : "y");
        let Jt = { x: 0, y: 0 };
        Y === "y"
          ? (qe.includes("top") || qe.includes("bottom")) &&
            ((qe.includes("top") && ut < 0) ||
              (qe.includes("bottom") && ut > 0)) &&
            (Jt.y = ut)
          : Y === "x" &&
            (qe.includes("left") || qe.includes("right")) &&
            ((qe.includes("left") && At < 0) ||
              (qe.includes("right") && At > 0)) &&
            (Jt.x = At),
          (Math.abs(Jt.x) > 0 || Math.abs(Jt.y) > 0) && io(!0),
          (ot = qt.current) == null ||
            ot.style.setProperty("--swipe-amount-x", `${Jt.x}px`),
          (at = qt.current) == null ||
            at.style.setProperty("--swipe-amount-y", `${Jt.y}px`);
      },
    },
    tr && !x.jsx
      ? Q.createElement(
          "button",
          {
            "aria-label": T,
            "data-disabled": Zt,
            "data-close-button": !0,
            onClick:
              Zt || !Gt
                ? () => {}
                : () => {
                    var fe;
                    Mt(), (fe = x.onDismiss) == null || fe.call(x, x);
                  },
            className: $t(
              F?.closeButton,
              (u = x?.classNames) == null ? void 0 : u.closeButton
            ),
          },
          (d = V?.close) != null ? d : f0
        )
      : null,
    x.jsx || S.isValidElement(x.title)
      ? x.jsx
        ? x.jsx
        : typeof x.title == "function"
        ? x.title()
        : x.title
      : Q.createElement(
          Q.Fragment,
          null,
          rt || x.icon || x.promise
            ? Q.createElement(
                "div",
                {
                  "data-icon": "",
                  className: $t(
                    F?.icon,
                    (f = x?.classNames) == null ? void 0 : f.icon
                  ),
                },
                x.promise || (x.type === "loading" && !x.icon)
                  ? x.icon || di()
                  : null,
                x.type !== "loading" ? x.icon || V?.[rt] || i0(rt) : null
              )
            : null,
          Q.createElement(
            "div",
            {
              "data-content": "",
              className: $t(
                F?.content,
                (h = x?.classNames) == null ? void 0 : h.content
              ),
            },
            Q.createElement(
              "div",
              {
                "data-title": "",
                className: $t(
                  F?.title,
                  (m = x?.classNames) == null ? void 0 : m.title
                ),
              },
              typeof x.title == "function" ? x.title() : x.title
            ),
            x.description
              ? Q.createElement(
                  "div",
                  {
                    "data-description": "",
                    className: $t(
                      he,
                      ai,
                      F?.description,
                      (v = x?.classNames) == null ? void 0 : v.description
                    ),
                  },
                  typeof x.description == "function"
                    ? x.description()
                    : x.description
                )
              : null
          ),
          S.isValidElement(x.cancel)
            ? x.cancel
            : x.cancel && bs(x.cancel)
            ? Q.createElement(
                "button",
                {
                  "data-button": !0,
                  "data-cancel": !0,
                  style: x.cancelButtonStyle || pe,
                  onClick: (fe) => {
                    var ke, Ne;
                    bs(x.cancel) &&
                      Gt &&
                      ((Ne = (ke = x.cancel).onClick) == null ||
                        Ne.call(ke, fe),
                      Mt());
                  },
                  className: $t(
                    F?.cancelButton,
                    (y = x?.classNames) == null ? void 0 : y.cancelButton
                  ),
                },
                x.cancel.label
              )
            : null,
          S.isValidElement(x.action)
            ? x.action
            : x.action && bs(x.action)
            ? Q.createElement(
                "button",
                {
                  "data-button": !0,
                  "data-action": !0,
                  style: x.actionButtonStyle || xe,
                  onClick: (fe) => {
                    var ke, Ne;
                    bs(x.action) &&
                      ((Ne = (ke = x.action).onClick) == null ||
                        Ne.call(ke, fe),
                      !fe.defaultPrevented && Mt());
                  },
                  className: $t(
                    F?.actionButton,
                    (w = x?.classNames) == null ? void 0 : w.actionButton
                  ),
                },
                x.action.label
              )
            : null
        )
  );
};
function kf() {
  if (typeof window > "u" || typeof document > "u") return "ltr";
  let n = document.documentElement.getAttribute("dir");
  return n === "auto" || !n
    ? window.getComputedStyle(document.documentElement).direction
    : n;
}
function j0(n, o) {
  let i = {};
  return (
    [n, o].forEach((l, u) => {
      let d = u === 1,
        f = d ? "--mobile-offset" : "--offset",
        h = d ? E0 : b0;
      function m(v) {
        ["top", "right", "bottom", "left"].forEach((y) => {
          i[`${f}-${y}`] = typeof v == "number" ? `${v}px` : v;
        });
      }
      typeof l == "number" || typeof l == "string"
        ? m(l)
        : typeof l == "object"
        ? ["top", "right", "bottom", "left"].forEach((v) => {
            l[v] === void 0
              ? (i[`${f}-${v}`] = h)
              : (i[`${f}-${v}`] = typeof l[v] == "number" ? `${l[v]}px` : l[v]);
          })
        : m(h);
    }),
    i
  );
}
var O0 = S.forwardRef(function (n, o) {
  let {
      invert: i,
      position: l = "bottom-right",
      hotkey: u = ["altKey", "KeyT"],
      expand: d,
      closeButton: f,
      className: h,
      offset: m,
      mobileOffset: v,
      theme: y = "light",
      richColors: w,
      duration: N,
      style: x,
      visibleToasts: R = S0,
      toastOptions: C,
      dir: E = kf(),
      gap: M = k0,
      loadingIcon: L,
      icons: D,
      containerAriaLabel: z = "Notifications",
      pauseWhenPageIsHidden: H,
    } = n,
    [K, G] = Q.useState([]),
    ce = Q.useMemo(
      () =>
        Array.from(
          new Set(
            [l].concat(K.filter((A) => A.position).map((A) => A.position))
          )
        ),
      [K, l]
    ),
    [ge, pe] = Q.useState([]),
    [xe, Z] = Q.useState(!1),
    [he, q] = Q.useState(!1),
    [me, ie] = Q.useState(
      y !== "system"
        ? y
        : typeof window < "u" &&
          window.matchMedia &&
          window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light"
    ),
    re = Q.useRef(null),
    I = u.join("+").replace(/Key/g, "").replace(/Digit/g, ""),
    F = Q.useRef(null),
    V = Q.useRef(!1),
    T = Q.useCallback((A) => {
      G((Y) => {
        var J;
        return (
          ((J = Y.find((ue) => ue.id === A.id)) != null && J.delete) ||
            gt.dismiss(A.id),
          Y.filter(({ id: ue }) => ue !== A.id)
        );
      });
    }, []);
  return (
    Q.useEffect(
      () =>
        gt.subscribe((A) => {
          if (A.dismiss) {
            G((Y) => Y.map((J) => (J.id === A.id ? { ...J, delete: !0 } : J)));
            return;
          }
          setTimeout(() => {
            ep.flushSync(() => {
              G((Y) => {
                let J = Y.findIndex((ue) => ue.id === A.id);
                return J !== -1
                  ? [...Y.slice(0, J), { ...Y[J], ...A }, ...Y.slice(J + 1)]
                  : [A, ...Y];
              });
            });
          });
        }),
      []
    ),
    Q.useEffect(() => {
      if (y !== "system") {
        ie(y);
        return;
      }
      if (
        (y === "system" &&
          (window.matchMedia &&
          window.matchMedia("(prefers-color-scheme: dark)").matches
            ? ie("dark")
            : ie("light")),
        typeof window > "u")
      )
        return;
      let A = window.matchMedia("(prefers-color-scheme: dark)");
      try {
        A.addEventListener("change", ({ matches: Y }) => {
          ie(Y ? "dark" : "light");
        });
      } catch {
        A.addListener(({ matches: J }) => {
          try {
            ie(J ? "dark" : "light");
          } catch (ue) {
            console.error(ue);
          }
        });
      }
    }, [y]),
    Q.useEffect(() => {
      K.length <= 1 && Z(!1);
    }, [K]),
    Q.useEffect(() => {
      let A = (Y) => {
        var J, ue;
        u.every((ve) => Y[ve] || Y.code === ve) &&
          (Z(!0), (J = re.current) == null || J.focus()),
          Y.code === "Escape" &&
            (document.activeElement === re.current ||
              ((ue = re.current) != null &&
                ue.contains(document.activeElement))) &&
            Z(!1);
      };
      return (
        document.addEventListener("keydown", A),
        () => document.removeEventListener("keydown", A)
      );
    }, [u]),
    Q.useEffect(() => {
      if (re.current)
        return () => {
          F.current &&
            (F.current.focus({ preventScroll: !0 }),
            (F.current = null),
            (V.current = !1));
        };
    }, [re.current]),
    Q.createElement(
      "section",
      {
        ref: o,
        "aria-label": `${z} ${I}`,
        tabIndex: -1,
        "aria-live": "polite",
        "aria-relevant": "additions text",
        "aria-atomic": "false",
        suppressHydrationWarning: !0,
      },
      ce.map((A, Y) => {
        var J;
        let [ue, ve] = A.split("-");
        return K.length
          ? Q.createElement(
              "ol",
              {
                key: A,
                dir: E === "auto" ? kf() : E,
                tabIndex: -1,
                ref: re,
                className: h,
                "data-sonner-toaster": !0,
                "data-theme": me,
                "data-y-position": ue,
                "data-lifted": xe && K.length > 1 && !d,
                "data-x-position": ve,
                style: {
                  "--front-toast-height": `${
                    ((J = ge[0]) == null ? void 0 : J.height) || 0
                  }px`,
                  "--width": `${C0}px`,
                  "--gap": `${M}px`,
                  ...x,
                  ...j0(m, v),
                },
                onBlur: (se) => {
                  V.current &&
                    !se.currentTarget.contains(se.relatedTarget) &&
                    ((V.current = !1),
                    F.current &&
                      (F.current.focus({ preventScroll: !0 }),
                      (F.current = null)));
                },
                onFocus: (se) => {
                  (se.target instanceof HTMLElement &&
                    se.target.dataset.dismissible === "false") ||
                    V.current ||
                    ((V.current = !0), (F.current = se.relatedTarget));
                },
                onMouseEnter: () => Z(!0),
                onMouseMove: () => Z(!0),
                onMouseLeave: () => {
                  he || Z(!1);
                },
                onDragEnd: () => Z(!1),
                onPointerDown: (se) => {
                  (se.target instanceof HTMLElement &&
                    se.target.dataset.dismissible === "false") ||
                    q(!0);
                },
                onPointerUp: () => q(!1),
              },
              K.filter(
                (se) => (!se.position && Y === 0) || se.position === A
              ).map((se, Se) => {
                var Ee, Fe;
                return Q.createElement(R0, {
                  key: se.id,
                  icons: D,
                  index: Se,
                  toast: se,
                  defaultRichColors: w,
                  duration: (Ee = C?.duration) != null ? Ee : N,
                  className: C?.className,
                  descriptionClassName: C?.descriptionClassName,
                  invert: i,
                  visibleToasts: R,
                  closeButton: (Fe = C?.closeButton) != null ? Fe : f,
                  interacting: he,
                  position: A,
                  style: C?.style,
                  unstyled: C?.unstyled,
                  classNames: C?.classNames,
                  cancelButtonStyle: C?.cancelButtonStyle,
                  actionButtonStyle: C?.actionButtonStyle,
                  removeToast: T,
                  toasts: K.filter((Ct) => Ct.position == se.position),
                  heights: ge.filter((Ct) => Ct.position == se.position),
                  setHeights: pe,
                  expandByDefault: d,
                  gap: M,
                  loadingIcon: L,
                  expanded: xe,
                  pauseWhenPageIsHidden: H,
                  swipeDirections: n.swipeDirections,
                });
              })
            )
          : null;
      })
    )
  );
});
const _0 = ({ ...n }) => {
    const { theme: o = "system" } = o0();
    return g.jsx(O0, {
      theme: o,
      className: "toaster group",
      toastOptions: {
        classNames: {
          toast:
            "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
          description: "group-[.toast]:text-muted-foreground",
          actionButton:
            "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
          cancelButton:
            "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground",
        },
      },
      ...n,
    });
  },
  M0 = ["top", "right", "bottom", "left"],
  Jn = Math.min,
  bt = Math.max,
  js = Math.round,
  Es = Math.floor,
  ln = (n) => ({ x: n, y: n }),
  A0 = { left: "right", right: "left", bottom: "top", top: "bottom" },
  L0 = { start: "end", end: "start" };
function qa(n, o, i) {
  return bt(n, Jn(o, i));
}
function bn(n, o) {
  return typeof n == "function" ? n(o) : n;
}
function En(n) {
  return n.split("-")[0];
}
function Zr(n) {
  return n.split("-")[1];
}
function cu(n) {
  return n === "x" ? "y" : "x";
}
function du(n) {
  return n === "y" ? "height" : "width";
}
const D0 = new Set(["top", "bottom"]);
function sn(n) {
  return D0.has(En(n)) ? "y" : "x";
}
function fu(n) {
  return cu(sn(n));
}
function I0(n, o, i) {
  i === void 0 && (i = !1);
  const l = Zr(n),
    u = fu(n),
    d = du(u);
  let f =
    u === "x"
      ? l === (i ? "end" : "start")
        ? "right"
        : "left"
      : l === "start"
      ? "bottom"
      : "top";
  return o.reference[d] > o.floating[d] && (f = Os(f)), [f, Os(f)];
}
function F0(n) {
  const o = Os(n);
  return [Ga(n), o, Ga(o)];
}
function Ga(n) {
  return n.replace(/start|end/g, (o) => L0[o]);
}
const Pf = ["left", "right"],
  Nf = ["right", "left"],
  z0 = ["top", "bottom"],
  U0 = ["bottom", "top"];
function B0(n, o, i) {
  switch (n) {
    case "top":
    case "bottom":
      return i ? (o ? Nf : Pf) : o ? Pf : Nf;
    case "left":
    case "right":
      return o ? z0 : U0;
    default:
      return [];
  }
}
function $0(n, o, i, l) {
  const u = Zr(n);
  let d = B0(En(n), i === "start", l);
  return (
    u && ((d = d.map((f) => f + "-" + u)), o && (d = d.concat(d.map(Ga)))), d
  );
}
function Os(n) {
  return n.replace(/left|right|bottom|top/g, (o) => A0[o]);
}
function V0(n) {
  return { top: 0, right: 0, bottom: 0, left: 0, ...n };
}
function Yp(n) {
  return typeof n != "number"
    ? V0(n)
    : { top: n, right: n, bottom: n, left: n };
}
function _s(n) {
  const { x: o, y: i, width: l, height: u } = n;
  return {
    width: l,
    height: u,
    top: i,
    left: o,
    right: o + l,
    bottom: i + u,
    x: o,
    y: i,
  };
}
function Tf(n, o, i) {
  let { reference: l, floating: u } = n;
  const d = sn(o),
    f = fu(o),
    h = du(f),
    m = En(o),
    v = d === "y",
    y = l.x + l.width / 2 - u.width / 2,
    w = l.y + l.height / 2 - u.height / 2,
    N = l[h] / 2 - u[h] / 2;
  let x;
  switch (m) {
    case "top":
      x = { x: y, y: l.y - u.height };
      break;
    case "bottom":
      x = { x: y, y: l.y + l.height };
      break;
    case "right":
      x = { x: l.x + l.width, y: w };
      break;
    case "left":
      x = { x: l.x - u.width, y: w };
      break;
    default:
      x = { x: l.x, y: l.y };
  }
  switch (Zr(o)) {
    case "start":
      x[f] -= N * (i && v ? -1 : 1);
      break;
    case "end":
      x[f] += N * (i && v ? -1 : 1);
      break;
  }
  return x;
}
const H0 = async (n, o, i) => {
  const {
      placement: l = "bottom",
      strategy: u = "absolute",
      middleware: d = [],
      platform: f,
    } = i,
    h = d.filter(Boolean),
    m = await (f.isRTL == null ? void 0 : f.isRTL(o));
  let v = await f.getElementRects({ reference: n, floating: o, strategy: u }),
    { x: y, y: w } = Tf(v, l, m),
    N = l,
    x = {},
    R = 0;
  for (let C = 0; C < h.length; C++) {
    const { name: E, fn: M } = h[C],
      {
        x: L,
        y: D,
        data: z,
        reset: H,
      } = await M({
        x: y,
        y: w,
        initialPlacement: l,
        placement: N,
        strategy: u,
        middlewareData: x,
        rects: v,
        platform: f,
        elements: { reference: n, floating: o },
      });
    (y = L ?? y),
      (w = D ?? w),
      (x = { ...x, [E]: { ...x[E], ...z } }),
      H &&
        R <= 50 &&
        (R++,
        typeof H == "object" &&
          (H.placement && (N = H.placement),
          H.rects &&
            (v =
              H.rects === !0
                ? await f.getElementRects({
                    reference: n,
                    floating: o,
                    strategy: u,
                  })
                : H.rects),
          ({ x: y, y: w } = Tf(v, N, m))),
        (C = -1));
  }
  return { x: y, y: w, placement: N, strategy: u, middlewareData: x };
};
async function Go(n, o) {
  var i;
  o === void 0 && (o = {});
  const { x: l, y: u, platform: d, rects: f, elements: h, strategy: m } = n,
    {
      boundary: v = "clippingAncestors",
      rootBoundary: y = "viewport",
      elementContext: w = "floating",
      altBoundary: N = !1,
      padding: x = 0,
    } = bn(o, n),
    R = Yp(x),
    E = h[N ? (w === "floating" ? "reference" : "floating") : w],
    M = _s(
      await d.getClippingRect({
        element:
          (i = await (d.isElement == null ? void 0 : d.isElement(E))) == null ||
          i
            ? E
            : E.contextElement ||
              (await (d.getDocumentElement == null
                ? void 0
                : d.getDocumentElement(h.floating))),
        boundary: v,
        rootBoundary: y,
        strategy: m,
      })
    ),
    L =
      w === "floating"
        ? { x: l, y: u, width: f.floating.width, height: f.floating.height }
        : f.reference,
    D = await (d.getOffsetParent == null
      ? void 0
      : d.getOffsetParent(h.floating)),
    z = (await (d.isElement == null ? void 0 : d.isElement(D)))
      ? (await (d.getScale == null ? void 0 : d.getScale(D))) || { x: 1, y: 1 }
      : { x: 1, y: 1 },
    H = _s(
      d.convertOffsetParentRelativeRectToViewportRelativeRect
        ? await d.convertOffsetParentRelativeRectToViewportRelativeRect({
            elements: h,
            rect: L,
            offsetParent: D,
            strategy: m,
          })
        : L
    );
  return {
    top: (M.top - H.top + R.top) / z.y,
    bottom: (H.bottom - M.bottom + R.bottom) / z.y,
    left: (M.left - H.left + R.left) / z.x,
    right: (H.right - M.right + R.right) / z.x,
  };
}
const W0 = (n) => ({
    name: "arrow",
    options: n,
    async fn(o) {
      const {
          x: i,
          y: l,
          placement: u,
          rects: d,
          platform: f,
          elements: h,
          middlewareData: m,
        } = o,
        { element: v, padding: y = 0 } = bn(n, o) || {};
      if (v == null) return {};
      const w = Yp(y),
        N = { x: i, y: l },
        x = fu(u),
        R = du(x),
        C = await f.getDimensions(v),
        E = x === "y",
        M = E ? "top" : "left",
        L = E ? "bottom" : "right",
        D = E ? "clientHeight" : "clientWidth",
        z = d.reference[R] + d.reference[x] - N[x] - d.floating[R],
        H = N[x] - d.reference[x],
        K = await (f.getOffsetParent == null ? void 0 : f.getOffsetParent(v));
      let G = K ? K[D] : 0;
      (!G || !(await (f.isElement == null ? void 0 : f.isElement(K)))) &&
        (G = h.floating[D] || d.floating[R]);
      const ce = z / 2 - H / 2,
        ge = G / 2 - C[R] / 2 - 1,
        pe = Jn(w[M], ge),
        xe = Jn(w[L], ge),
        Z = pe,
        he = G - C[R] - xe,
        q = G / 2 - C[R] / 2 + ce,
        me = qa(Z, q, he),
        ie =
          !m.arrow &&
          Zr(u) != null &&
          q !== me &&
          d.reference[R] / 2 - (q < Z ? pe : xe) - C[R] / 2 < 0,
        re = ie ? (q < Z ? q - Z : q - he) : 0;
      return {
        [x]: N[x] + re,
        data: {
          [x]: me,
          centerOffset: q - me - re,
          ...(ie && { alignmentOffset: re }),
        },
        reset: ie,
      };
    },
  }),
  Q0 = function (n) {
    return (
      n === void 0 && (n = {}),
      {
        name: "flip",
        options: n,
        async fn(o) {
          var i, l;
          const {
              placement: u,
              middlewareData: d,
              rects: f,
              initialPlacement: h,
              platform: m,
              elements: v,
            } = o,
            {
              mainAxis: y = !0,
              crossAxis: w = !0,
              fallbackPlacements: N,
              fallbackStrategy: x = "bestFit",
              fallbackAxisSideDirection: R = "none",
              flipAlignment: C = !0,
              ...E
            } = bn(n, o);
          if ((i = d.arrow) != null && i.alignmentOffset) return {};
          const M = En(u),
            L = sn(h),
            D = En(h) === h,
            z = await (m.isRTL == null ? void 0 : m.isRTL(v.floating)),
            H = N || (D || !C ? [Os(h)] : F0(h)),
            K = R !== "none";
          !N && K && H.push(...$0(h, C, R, z));
          const G = [h, ...H],
            ce = await Go(o, E),
            ge = [];
          let pe = ((l = d.flip) == null ? void 0 : l.overflows) || [];
          if ((y && ge.push(ce[M]), w)) {
            const q = I0(u, f, z);
            ge.push(ce[q[0]], ce[q[1]]);
          }
          if (
            ((pe = [...pe, { placement: u, overflows: ge }]),
            !ge.every((q) => q <= 0))
          ) {
            var xe, Z;
            const q = (((xe = d.flip) == null ? void 0 : xe.index) || 0) + 1,
              me = G[q];
            if (
              me &&
              (!(w === "alignment" ? L !== sn(me) : !1) ||
                pe.every((I) => I.overflows[0] > 0 && sn(I.placement) === L))
            )
              return {
                data: { index: q, overflows: pe },
                reset: { placement: me },
              };
            let ie =
              (Z = pe
                .filter((re) => re.overflows[0] <= 0)
                .sort((re, I) => re.overflows[1] - I.overflows[1])[0]) == null
                ? void 0
                : Z.placement;
            if (!ie)
              switch (x) {
                case "bestFit": {
                  var he;
                  const re =
                    (he = pe
                      .filter((I) => {
                        if (K) {
                          const F = sn(I.placement);
                          return F === L || F === "y";
                        }
                        return !0;
                      })
                      .map((I) => [
                        I.placement,
                        I.overflows
                          .filter((F) => F > 0)
                          .reduce((F, V) => F + V, 0),
                      ])
                      .sort((I, F) => I[1] - F[1])[0]) == null
                      ? void 0
                      : he[0];
                  re && (ie = re);
                  break;
                }
                case "initialPlacement":
                  ie = h;
                  break;
              }
            if (u !== ie) return { reset: { placement: ie } };
          }
          return {};
        },
      }
    );
  };
function Rf(n, o) {
  return {
    top: n.top - o.height,
    right: n.right - o.width,
    bottom: n.bottom - o.height,
    left: n.left - o.width,
  };
}
function jf(n) {
  return M0.some((o) => n[o] >= 0);
}
const K0 = function (n) {
    return (
      n === void 0 && (n = {}),
      {
        name: "hide",
        options: n,
        async fn(o) {
          const { rects: i } = o,
            { strategy: l = "referenceHidden", ...u } = bn(n, o);
          switch (l) {
            case "referenceHidden": {
              const d = await Go(o, { ...u, elementContext: "reference" }),
                f = Rf(d, i.reference);
              return {
                data: { referenceHiddenOffsets: f, referenceHidden: jf(f) },
              };
            }
            case "escaped": {
              const d = await Go(o, { ...u, altBoundary: !0 }),
                f = Rf(d, i.floating);
              return { data: { escapedOffsets: f, escaped: jf(f) } };
            }
            default:
              return {};
          }
        },
      }
    );
  },
  Xp = new Set(["left", "top"]);
async function q0(n, o) {
  const { placement: i, platform: l, elements: u } = n,
    d = await (l.isRTL == null ? void 0 : l.isRTL(u.floating)),
    f = En(i),
    h = Zr(i),
    m = sn(i) === "y",
    v = Xp.has(f) ? -1 : 1,
    y = d && m ? -1 : 1,
    w = bn(o, n);
  let {
    mainAxis: N,
    crossAxis: x,
    alignmentAxis: R,
  } = typeof w == "number"
    ? { mainAxis: w, crossAxis: 0, alignmentAxis: null }
    : {
        mainAxis: w.mainAxis || 0,
        crossAxis: w.crossAxis || 0,
        alignmentAxis: w.alignmentAxis,
      };
  return (
    h && typeof R == "number" && (x = h === "end" ? R * -1 : R),
    m ? { x: x * y, y: N * v } : { x: N * v, y: x * y }
  );
}
const G0 = function (n) {
    return (
      n === void 0 && (n = 0),
      {
        name: "offset",
        options: n,
        async fn(o) {
          var i, l;
          const { x: u, y: d, placement: f, middlewareData: h } = o,
            m = await q0(o, n);
          return f === ((i = h.offset) == null ? void 0 : i.placement) &&
            (l = h.arrow) != null &&
            l.alignmentOffset
            ? {}
            : { x: u + m.x, y: d + m.y, data: { ...m, placement: f } };
        },
      }
    );
  },
  Y0 = function (n) {
    return (
      n === void 0 && (n = {}),
      {
        name: "shift",
        options: n,
        async fn(o) {
          const { x: i, y: l, placement: u } = o,
            {
              mainAxis: d = !0,
              crossAxis: f = !1,
              limiter: h = {
                fn: (E) => {
                  let { x: M, y: L } = E;
                  return { x: M, y: L };
                },
              },
              ...m
            } = bn(n, o),
            v = { x: i, y: l },
            y = await Go(o, m),
            w = sn(En(u)),
            N = cu(w);
          let x = v[N],
            R = v[w];
          if (d) {
            const E = N === "y" ? "top" : "left",
              M = N === "y" ? "bottom" : "right",
              L = x + y[E],
              D = x - y[M];
            x = qa(L, x, D);
          }
          if (f) {
            const E = w === "y" ? "top" : "left",
              M = w === "y" ? "bottom" : "right",
              L = R + y[E],
              D = R - y[M];
            R = qa(L, R, D);
          }
          const C = h.fn({ ...o, [N]: x, [w]: R });
          return {
            ...C,
            data: { x: C.x - i, y: C.y - l, enabled: { [N]: d, [w]: f } },
          };
        },
      }
    );
  },
  X0 = function (n) {
    return (
      n === void 0 && (n = {}),
      {
        options: n,
        fn(o) {
          const { x: i, y: l, placement: u, rects: d, middlewareData: f } = o,
            { offset: h = 0, mainAxis: m = !0, crossAxis: v = !0 } = bn(n, o),
            y = { x: i, y: l },
            w = sn(u),
            N = cu(w);
          let x = y[N],
            R = y[w];
          const C = bn(h, o),
            E =
              typeof C == "number"
                ? { mainAxis: C, crossAxis: 0 }
                : { mainAxis: 0, crossAxis: 0, ...C };
          if (m) {
            const D = N === "y" ? "height" : "width",
              z = d.reference[N] - d.floating[D] + E.mainAxis,
              H = d.reference[N] + d.reference[D] - E.mainAxis;
            x < z ? (x = z) : x > H && (x = H);
          }
          if (v) {
            var M, L;
            const D = N === "y" ? "width" : "height",
              z = Xp.has(En(u)),
              H =
                d.reference[w] -
                d.floating[D] +
                ((z && ((M = f.offset) == null ? void 0 : M[w])) || 0) +
                (z ? 0 : E.crossAxis),
              K =
                d.reference[w] +
                d.reference[D] +
                (z ? 0 : ((L = f.offset) == null ? void 0 : L[w]) || 0) -
                (z ? E.crossAxis : 0);
            R < H ? (R = H) : R > K && (R = K);
          }
          return { [N]: x, [w]: R };
        },
      }
    );
  },
  Z0 = function (n) {
    return (
      n === void 0 && (n = {}),
      {
        name: "size",
        options: n,
        async fn(o) {
          var i, l;
          const { placement: u, rects: d, platform: f, elements: h } = o,
            { apply: m = () => {}, ...v } = bn(n, o),
            y = await Go(o, v),
            w = En(u),
            N = Zr(u),
            x = sn(u) === "y",
            { width: R, height: C } = d.floating;
          let E, M;
          w === "top" || w === "bottom"
            ? ((E = w),
              (M =
                N ===
                ((await (f.isRTL == null ? void 0 : f.isRTL(h.floating)))
                  ? "start"
                  : "end")
                  ? "left"
                  : "right"))
            : ((M = w), (E = N === "end" ? "top" : "bottom"));
          const L = C - y.top - y.bottom,
            D = R - y.left - y.right,
            z = Jn(C - y[E], L),
            H = Jn(R - y[M], D),
            K = !o.middlewareData.shift;
          let G = z,
            ce = H;
          if (
            ((i = o.middlewareData.shift) != null && i.enabled.x && (ce = D),
            (l = o.middlewareData.shift) != null && l.enabled.y && (G = L),
            K && !N)
          ) {
            const pe = bt(y.left, 0),
              xe = bt(y.right, 0),
              Z = bt(y.top, 0),
              he = bt(y.bottom, 0);
            x
              ? (ce =
                  R -
                  2 * (pe !== 0 || xe !== 0 ? pe + xe : bt(y.left, y.right)))
              : (G =
                  C - 2 * (Z !== 0 || he !== 0 ? Z + he : bt(y.top, y.bottom)));
          }
          await m({ ...o, availableWidth: ce, availableHeight: G });
          const ge = await f.getDimensions(h.floating);
          return R !== ge.width || C !== ge.height
            ? { reset: { rects: !0 } }
            : {};
        },
      }
    );
  };
function Us() {
  return typeof window < "u";
}
function Jr(n) {
  return Zp(n) ? (n.nodeName || "").toLowerCase() : "#document";
}
function Et(n) {
  var o;
  return (
    (n == null || (o = n.ownerDocument) == null ? void 0 : o.defaultView) ||
    window
  );
}
function un(n) {
  var o;
  return (o = (Zp(n) ? n.ownerDocument : n.document) || window.document) == null
    ? void 0
    : o.documentElement;
}
function Zp(n) {
  return Us() ? n instanceof Node || n instanceof Et(n).Node : !1;
}
function Qt(n) {
  return Us() ? n instanceof Element || n instanceof Et(n).Element : !1;
}
function an(n) {
  return Us() ? n instanceof HTMLElement || n instanceof Et(n).HTMLElement : !1;
}
function Of(n) {
  return !Us() || typeof ShadowRoot > "u"
    ? !1
    : n instanceof ShadowRoot || n instanceof Et(n).ShadowRoot;
}
const J0 = new Set(["inline", "contents"]);
function ni(n) {
  const { overflow: o, overflowX: i, overflowY: l, display: u } = Kt(n);
  return /auto|scroll|overlay|hidden|clip/.test(o + l + i) && !J0.has(u);
}
const ex = new Set(["table", "td", "th"]);
function tx(n) {
  return ex.has(Jr(n));
}
const nx = [":popover-open", ":modal"];
function Bs(n) {
  return nx.some((o) => {
    try {
      return n.matches(o);
    } catch {
      return !1;
    }
  });
}
const rx = ["transform", "translate", "scale", "rotate", "perspective"],
  ox = ["transform", "translate", "scale", "rotate", "perspective", "filter"],
  ix = ["paint", "layout", "strict", "content"];
function pu(n) {
  const o = hu(),
    i = Qt(n) ? Kt(n) : n;
  return (
    rx.some((l) => (i[l] ? i[l] !== "none" : !1)) ||
    (i.containerType ? i.containerType !== "normal" : !1) ||
    (!o && (i.backdropFilter ? i.backdropFilter !== "none" : !1)) ||
    (!o && (i.filter ? i.filter !== "none" : !1)) ||
    ox.some((l) => (i.willChange || "").includes(l)) ||
    ix.some((l) => (i.contain || "").includes(l))
  );
}
function sx(n) {
  let o = er(n);
  for (; an(o) && !Gr(o); ) {
    if (pu(o)) return o;
    if (Bs(o)) return null;
    o = er(o);
  }
  return null;
}
function hu() {
  return typeof CSS > "u" || !CSS.supports
    ? !1
    : CSS.supports("-webkit-backdrop-filter", "none");
}
const lx = new Set(["html", "body", "#document"]);
function Gr(n) {
  return lx.has(Jr(n));
}
function Kt(n) {
  return Et(n).getComputedStyle(n);
}
function $s(n) {
  return Qt(n)
    ? { scrollLeft: n.scrollLeft, scrollTop: n.scrollTop }
    : { scrollLeft: n.scrollX, scrollTop: n.scrollY };
}
function er(n) {
  if (Jr(n) === "html") return n;
  const o = n.assignedSlot || n.parentNode || (Of(n) && n.host) || un(n);
  return Of(o) ? o.host : o;
}
function Jp(n) {
  const o = er(n);
  return Gr(o)
    ? n.ownerDocument
      ? n.ownerDocument.body
      : n.body
    : an(o) && ni(o)
    ? o
    : Jp(o);
}
function Yo(n, o, i) {
  var l;
  o === void 0 && (o = []), i === void 0 && (i = !0);
  const u = Jp(n),
    d = u === ((l = n.ownerDocument) == null ? void 0 : l.body),
    f = Et(u);
  if (d) {
    const h = Ya(f);
    return o.concat(
      f,
      f.visualViewport || [],
      ni(u) ? u : [],
      h && i ? Yo(h) : []
    );
  }
  return o.concat(u, Yo(u, [], i));
}
function Ya(n) {
  return n.parent && Object.getPrototypeOf(n.parent) ? n.frameElement : null;
}
function eh(n) {
  const o = Kt(n);
  let i = parseFloat(o.width) || 0,
    l = parseFloat(o.height) || 0;
  const u = an(n),
    d = u ? n.offsetWidth : i,
    f = u ? n.offsetHeight : l,
    h = js(i) !== d || js(l) !== f;
  return h && ((i = d), (l = f)), { width: i, height: l, $: h };
}
function mu(n) {
  return Qt(n) ? n : n.contextElement;
}
function Kr(n) {
  const o = mu(n);
  if (!an(o)) return ln(1);
  const i = o.getBoundingClientRect(),
    { width: l, height: u, $: d } = eh(o);
  let f = (d ? js(i.width) : i.width) / l,
    h = (d ? js(i.height) : i.height) / u;
  return (
    (!f || !Number.isFinite(f)) && (f = 1),
    (!h || !Number.isFinite(h)) && (h = 1),
    { x: f, y: h }
  );
}
const ax = ln(0);
function th(n) {
  const o = Et(n);
  return !hu() || !o.visualViewport
    ? ax
    : { x: o.visualViewport.offsetLeft, y: o.visualViewport.offsetTop };
}
function ux(n, o, i) {
  return o === void 0 && (o = !1), !i || (o && i !== Et(n)) ? !1 : o;
}
function mr(n, o, i, l) {
  o === void 0 && (o = !1), i === void 0 && (i = !1);
  const u = n.getBoundingClientRect(),
    d = mu(n);
  let f = ln(1);
  o && (l ? Qt(l) && (f = Kr(l)) : (f = Kr(n)));
  const h = ux(d, i, l) ? th(d) : ln(0);
  let m = (u.left + h.x) / f.x,
    v = (u.top + h.y) / f.y,
    y = u.width / f.x,
    w = u.height / f.y;
  if (d) {
    const N = Et(d),
      x = l && Qt(l) ? Et(l) : l;
    let R = N,
      C = Ya(R);
    for (; C && l && x !== R; ) {
      const E = Kr(C),
        M = C.getBoundingClientRect(),
        L = Kt(C),
        D = M.left + (C.clientLeft + parseFloat(L.paddingLeft)) * E.x,
        z = M.top + (C.clientTop + parseFloat(L.paddingTop)) * E.y;
      (m *= E.x),
        (v *= E.y),
        (y *= E.x),
        (w *= E.y),
        (m += D),
        (v += z),
        (R = Et(C)),
        (C = Ya(R));
    }
  }
  return _s({ width: y, height: w, x: m, y: v });
}
function gu(n, o) {
  const i = $s(n).scrollLeft;
  return o ? o.left + i : mr(un(n)).left + i;
}
function nh(n, o, i) {
  i === void 0 && (i = !1);
  const l = n.getBoundingClientRect(),
    u = l.left + o.scrollLeft - (i ? 0 : gu(n, l)),
    d = l.top + o.scrollTop;
  return { x: u, y: d };
}
function cx(n) {
  let { elements: o, rect: i, offsetParent: l, strategy: u } = n;
  const d = u === "fixed",
    f = un(l),
    h = o ? Bs(o.floating) : !1;
  if (l === f || (h && d)) return i;
  let m = { scrollLeft: 0, scrollTop: 0 },
    v = ln(1);
  const y = ln(0),
    w = an(l);
  if (
    (w || (!w && !d)) &&
    ((Jr(l) !== "body" || ni(f)) && (m = $s(l)), an(l))
  ) {
    const x = mr(l);
    (v = Kr(l)), (y.x = x.x + l.clientLeft), (y.y = x.y + l.clientTop);
  }
  const N = f && !w && !d ? nh(f, m, !0) : ln(0);
  return {
    width: i.width * v.x,
    height: i.height * v.y,
    x: i.x * v.x - m.scrollLeft * v.x + y.x + N.x,
    y: i.y * v.y - m.scrollTop * v.y + y.y + N.y,
  };
}
function dx(n) {
  return Array.from(n.getClientRects());
}
function fx(n) {
  const o = un(n),
    i = $s(n),
    l = n.ownerDocument.body,
    u = bt(o.scrollWidth, o.clientWidth, l.scrollWidth, l.clientWidth),
    d = bt(o.scrollHeight, o.clientHeight, l.scrollHeight, l.clientHeight);
  let f = -i.scrollLeft + gu(n);
  const h = -i.scrollTop;
  return (
    Kt(l).direction === "rtl" && (f += bt(o.clientWidth, l.clientWidth) - u),
    { width: u, height: d, x: f, y: h }
  );
}
function px(n, o) {
  const i = Et(n),
    l = un(n),
    u = i.visualViewport;
  let d = l.clientWidth,
    f = l.clientHeight,
    h = 0,
    m = 0;
  if (u) {
    (d = u.width), (f = u.height);
    const v = hu();
    (!v || (v && o === "fixed")) && ((h = u.offsetLeft), (m = u.offsetTop));
  }
  return { width: d, height: f, x: h, y: m };
}
const hx = new Set(["absolute", "fixed"]);
function mx(n, o) {
  const i = mr(n, !0, o === "fixed"),
    l = i.top + n.clientTop,
    u = i.left + n.clientLeft,
    d = an(n) ? Kr(n) : ln(1),
    f = n.clientWidth * d.x,
    h = n.clientHeight * d.y,
    m = u * d.x,
    v = l * d.y;
  return { width: f, height: h, x: m, y: v };
}
function _f(n, o, i) {
  let l;
  if (o === "viewport") l = px(n, i);
  else if (o === "document") l = fx(un(n));
  else if (Qt(o)) l = mx(o, i);
  else {
    const u = th(n);
    l = { x: o.x - u.x, y: o.y - u.y, width: o.width, height: o.height };
  }
  return _s(l);
}
function rh(n, o) {
  const i = er(n);
  return i === o || !Qt(i) || Gr(i)
    ? !1
    : Kt(i).position === "fixed" || rh(i, o);
}
function gx(n, o) {
  const i = o.get(n);
  if (i) return i;
  let l = Yo(n, [], !1).filter((h) => Qt(h) && Jr(h) !== "body"),
    u = null;
  const d = Kt(n).position === "fixed";
  let f = d ? er(n) : n;
  for (; Qt(f) && !Gr(f); ) {
    const h = Kt(f),
      m = pu(f);
    !m && h.position === "fixed" && (u = null),
      (
        d
          ? !m && !u
          : (!m && h.position === "static" && !!u && hx.has(u.position)) ||
            (ni(f) && !m && rh(n, f))
      )
        ? (l = l.filter((y) => y !== f))
        : (u = h),
      (f = er(f));
  }
  return o.set(n, l), l;
}
function vx(n) {
  let { element: o, boundary: i, rootBoundary: l, strategy: u } = n;
  const f = [
      ...(i === "clippingAncestors"
        ? Bs(o)
          ? []
          : gx(o, this._c)
        : [].concat(i)),
      l,
    ],
    h = f[0],
    m = f.reduce((v, y) => {
      const w = _f(o, y, u);
      return (
        (v.top = bt(w.top, v.top)),
        (v.right = Jn(w.right, v.right)),
        (v.bottom = Jn(w.bottom, v.bottom)),
        (v.left = bt(w.left, v.left)),
        v
      );
    }, _f(o, h, u));
  return {
    width: m.right - m.left,
    height: m.bottom - m.top,
    x: m.left,
    y: m.top,
  };
}
function yx(n) {
  const { width: o, height: i } = eh(n);
  return { width: o, height: i };
}
function xx(n, o, i) {
  const l = an(o),
    u = un(o),
    d = i === "fixed",
    f = mr(n, !0, d, o);
  let h = { scrollLeft: 0, scrollTop: 0 };
  const m = ln(0);
  function v() {
    m.x = gu(u);
  }
  if (l || (!l && !d))
    if (((Jr(o) !== "body" || ni(u)) && (h = $s(o)), l)) {
      const x = mr(o, !0, d, o);
      (m.x = x.x + o.clientLeft), (m.y = x.y + o.clientTop);
    } else u && v();
  d && !l && u && v();
  const y = u && !l && !d ? nh(u, h) : ln(0),
    w = f.left + h.scrollLeft - m.x - y.x,
    N = f.top + h.scrollTop - m.y - y.y;
  return { x: w, y: N, width: f.width, height: f.height };
}
function Fa(n) {
  return Kt(n).position === "static";
}
function Mf(n, o) {
  if (!an(n) || Kt(n).position === "fixed") return null;
  if (o) return o(n);
  let i = n.offsetParent;
  return un(n) === i && (i = i.ownerDocument.body), i;
}
function oh(n, o) {
  const i = Et(n);
  if (Bs(n)) return i;
  if (!an(n)) {
    let u = er(n);
    for (; u && !Gr(u); ) {
      if (Qt(u) && !Fa(u)) return u;
      u = er(u);
    }
    return i;
  }
  let l = Mf(n, o);
  for (; l && tx(l) && Fa(l); ) l = Mf(l, o);
  return l && Gr(l) && Fa(l) && !pu(l) ? i : l || sx(n) || i;
}
const wx = async function (n) {
  const o = this.getOffsetParent || oh,
    i = this.getDimensions,
    l = await i(n.floating);
  return {
    reference: xx(n.reference, await o(n.floating), n.strategy),
    floating: { x: 0, y: 0, width: l.width, height: l.height },
  };
};
function Sx(n) {
  return Kt(n).direction === "rtl";
}
const bx = {
  convertOffsetParentRelativeRectToViewportRelativeRect: cx,
  getDocumentElement: un,
  getClippingRect: vx,
  getOffsetParent: oh,
  getElementRects: wx,
  getClientRects: dx,
  getDimensions: yx,
  getScale: Kr,
  isElement: Qt,
  isRTL: Sx,
};
function ih(n, o) {
  return (
    n.x === o.x && n.y === o.y && n.width === o.width && n.height === o.height
  );
}
function Ex(n, o) {
  let i = null,
    l;
  const u = un(n);
  function d() {
    var h;
    clearTimeout(l), (h = i) == null || h.disconnect(), (i = null);
  }
  function f(h, m) {
    h === void 0 && (h = !1), m === void 0 && (m = 1), d();
    const v = n.getBoundingClientRect(),
      { left: y, top: w, width: N, height: x } = v;
    if ((h || o(), !N || !x)) return;
    const R = Es(w),
      C = Es(u.clientWidth - (y + N)),
      E = Es(u.clientHeight - (w + x)),
      M = Es(y),
      D = {
        rootMargin: -R + "px " + -C + "px " + -E + "px " + -M + "px",
        threshold: bt(0, Jn(1, m)) || 1,
      };
    let z = !0;
    function H(K) {
      const G = K[0].intersectionRatio;
      if (G !== m) {
        if (!z) return f();
        G
          ? f(!1, G)
          : (l = setTimeout(() => {
              f(!1, 1e-7);
            }, 1e3));
      }
      G === 1 && !ih(v, n.getBoundingClientRect()) && f(), (z = !1);
    }
    try {
      i = new IntersectionObserver(H, { ...D, root: u.ownerDocument });
    } catch {
      i = new IntersectionObserver(H, D);
    }
    i.observe(n);
  }
  return f(!0), d;
}
function Cx(n, o, i, l) {
  l === void 0 && (l = {});
  const {
      ancestorScroll: u = !0,
      ancestorResize: d = !0,
      elementResize: f = typeof ResizeObserver == "function",
      layoutShift: h = typeof IntersectionObserver == "function",
      animationFrame: m = !1,
    } = l,
    v = mu(n),
    y = u || d ? [...(v ? Yo(v) : []), ...Yo(o)] : [];
  y.forEach((M) => {
    u && M.addEventListener("scroll", i, { passive: !0 }),
      d && M.addEventListener("resize", i);
  });
  const w = v && h ? Ex(v, i) : null;
  let N = -1,
    x = null;
  f &&
    ((x = new ResizeObserver((M) => {
      let [L] = M;
      L &&
        L.target === v &&
        x &&
        (x.unobserve(o),
        cancelAnimationFrame(N),
        (N = requestAnimationFrame(() => {
          var D;
          (D = x) == null || D.observe(o);
        }))),
        i();
    })),
    v && !m && x.observe(v),
    x.observe(o));
  let R,
    C = m ? mr(n) : null;
  m && E();
  function E() {
    const M = mr(n);
    C && !ih(C, M) && i(), (C = M), (R = requestAnimationFrame(E));
  }
  return (
    i(),
    () => {
      var M;
      y.forEach((L) => {
        u && L.removeEventListener("scroll", i),
          d && L.removeEventListener("resize", i);
      }),
        w?.(),
        (M = x) == null || M.disconnect(),
        (x = null),
        m && cancelAnimationFrame(R);
    }
  );
}
const kx = G0,
  Px = Y0,
  Nx = Q0,
  Tx = Z0,
  Rx = K0,
  Af = W0,
  jx = X0,
  Ox = (n, o, i) => {
    const l = new Map(),
      u = { platform: bx, ...i },
      d = { ...u.platform, _c: l };
    return H0(n, o, { ...u, platform: d });
  };
var _x = typeof document < "u",
  Mx = function () {},
  Ns = _x ? S.useLayoutEffect : Mx;
function Ms(n, o) {
  if (n === o) return !0;
  if (typeof n != typeof o) return !1;
  if (typeof n == "function" && n.toString() === o.toString()) return !0;
  let i, l, u;
  if (n && o && typeof n == "object") {
    if (Array.isArray(n)) {
      if (((i = n.length), i !== o.length)) return !1;
      for (l = i; l-- !== 0; ) if (!Ms(n[l], o[l])) return !1;
      return !0;
    }
    if (((u = Object.keys(n)), (i = u.length), i !== Object.keys(o).length))
      return !1;
    for (l = i; l-- !== 0; ) if (!{}.hasOwnProperty.call(o, u[l])) return !1;
    for (l = i; l-- !== 0; ) {
      const d = u[l];
      if (!(d === "_owner" && n.$$typeof) && !Ms(n[d], o[d])) return !1;
    }
    return !0;
  }
  return n !== n && o !== o;
}
function sh(n) {
  return typeof window > "u"
    ? 1
    : (n.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function Lf(n, o) {
  const i = sh(n);
  return Math.round(o * i) / i;
}
function za(n) {
  const o = S.useRef(n);
  return (
    Ns(() => {
      o.current = n;
    }),
    o
  );
}
function Ax(n) {
  n === void 0 && (n = {});
  const {
      placement: o = "bottom",
      strategy: i = "absolute",
      middleware: l = [],
      platform: u,
      elements: { reference: d, floating: f } = {},
      transform: h = !0,
      whileElementsMounted: m,
      open: v,
    } = n,
    [y, w] = S.useState({
      x: 0,
      y: 0,
      strategy: i,
      placement: o,
      middlewareData: {},
      isPositioned: !1,
    }),
    [N, x] = S.useState(l);
  Ms(N, l) || x(l);
  const [R, C] = S.useState(null),
    [E, M] = S.useState(null),
    L = S.useCallback((I) => {
      I !== K.current && ((K.current = I), C(I));
    }, []),
    D = S.useCallback((I) => {
      I !== G.current && ((G.current = I), M(I));
    }, []),
    z = d || R,
    H = f || E,
    K = S.useRef(null),
    G = S.useRef(null),
    ce = S.useRef(y),
    ge = m != null,
    pe = za(m),
    xe = za(u),
    Z = za(v),
    he = S.useCallback(() => {
      if (!K.current || !G.current) return;
      const I = { placement: o, strategy: i, middleware: N };
      xe.current && (I.platform = xe.current),
        Ox(K.current, G.current, I).then((F) => {
          const V = { ...F, isPositioned: Z.current !== !1 };
          q.current &&
            !Ms(ce.current, V) &&
            ((ce.current = V),
            Ds.flushSync(() => {
              w(V);
            }));
        });
    }, [N, o, i, xe, Z]);
  Ns(() => {
    v === !1 &&
      ce.current.isPositioned &&
      ((ce.current.isPositioned = !1), w((I) => ({ ...I, isPositioned: !1 })));
  }, [v]);
  const q = S.useRef(!1);
  Ns(
    () => (
      (q.current = !0),
      () => {
        q.current = !1;
      }
    ),
    []
  ),
    Ns(() => {
      if ((z && (K.current = z), H && (G.current = H), z && H)) {
        if (pe.current) return pe.current(z, H, he);
        he();
      }
    }, [z, H, he, pe, ge]);
  const me = S.useMemo(
      () => ({ reference: K, floating: G, setReference: L, setFloating: D }),
      [L, D]
    ),
    ie = S.useMemo(() => ({ reference: z, floating: H }), [z, H]),
    re = S.useMemo(() => {
      const I = { position: i, left: 0, top: 0 };
      if (!ie.floating) return I;
      const F = Lf(ie.floating, y.x),
        V = Lf(ie.floating, y.y);
      return h
        ? {
            ...I,
            transform: "translate(" + F + "px, " + V + "px)",
            ...(sh(ie.floating) >= 1.5 && { willChange: "transform" }),
          }
        : { position: i, left: F, top: V };
    }, [i, h, ie.floating, y.x, y.y]);
  return S.useMemo(
    () => ({ ...y, update: he, refs: me, elements: ie, floatingStyles: re }),
    [y, he, me, ie, re]
  );
}
const Lx = (n) => {
    function o(i) {
      return {}.hasOwnProperty.call(i, "current");
    }
    return {
      name: "arrow",
      options: n,
      fn(i) {
        const { element: l, padding: u } = typeof n == "function" ? n(i) : n;
        return l && o(l)
          ? l.current != null
            ? Af({ element: l.current, padding: u }).fn(i)
            : {}
          : l
          ? Af({ element: l, padding: u }).fn(i)
          : {};
      },
    };
  },
  Dx = (n, o) => ({ ...kx(n), options: [n, o] }),
  Ix = (n, o) => ({ ...Px(n), options: [n, o] }),
  Fx = (n, o) => ({ ...jx(n), options: [n, o] }),
  zx = (n, o) => ({ ...Nx(n), options: [n, o] }),
  Ux = (n, o) => ({ ...Tx(n), options: [n, o] }),
  Bx = (n, o) => ({ ...Rx(n), options: [n, o] }),
  $x = (n, o) => ({ ...Lx(n), options: [n, o] });
var Vx = "Arrow",
  lh = S.forwardRef((n, o) => {
    const { children: i, width: l = 10, height: u = 5, ...d } = n;
    return g.jsx(vt.svg, {
      ...d,
      ref: o,
      width: l,
      height: u,
      viewBox: "0 0 30 10",
      preserveAspectRatio: "none",
      children: n.asChild ? i : g.jsx("polygon", { points: "0,0 30,0 15,10" }),
    });
  });
lh.displayName = Vx;
var Hx = lh;
function Wx(n) {
  const [o, i] = S.useState(void 0);
  return (
    Zn(() => {
      if (n) {
        i({ width: n.offsetWidth, height: n.offsetHeight });
        const l = new ResizeObserver((u) => {
          if (!Array.isArray(u) || !u.length) return;
          const d = u[0];
          let f, h;
          if ("borderBoxSize" in d) {
            const m = d.borderBoxSize,
              v = Array.isArray(m) ? m[0] : m;
            (f = v.inlineSize), (h = v.blockSize);
          } else (f = n.offsetWidth), (h = n.offsetHeight);
          i({ width: f, height: h });
        });
        return l.observe(n, { box: "border-box" }), () => l.unobserve(n);
      } else i(void 0);
    }, [n]),
    o
  );
}
var ah = "Popper",
  [uh, ch] = Is(ah),
  [gS, dh] = uh(ah),
  fh = "PopperAnchor",
  ph = S.forwardRef((n, o) => {
    const { __scopePopper: i, virtualRef: l, ...u } = n,
      d = dh(fh, i),
      f = S.useRef(null),
      h = Wt(o, f);
    return (
      S.useEffect(() => {
        d.onAnchorChange(l?.current || f.current);
      }),
      l ? null : g.jsx(vt.div, { ...u, ref: h })
    );
  });
ph.displayName = fh;
var vu = "PopperContent",
  [Qx, Kx] = uh(vu),
  hh = S.forwardRef((n, o) => {
    const {
        __scopePopper: i,
        side: l = "bottom",
        sideOffset: u = 0,
        align: d = "center",
        alignOffset: f = 0,
        arrowPadding: h = 0,
        avoidCollisions: m = !0,
        collisionBoundary: v = [],
        collisionPadding: y = 0,
        sticky: w = "partial",
        hideWhenDetached: N = !1,
        updatePositionStrategy: x = "optimized",
        onPlaced: R,
        ...C
      } = n,
      E = dh(vu, i),
      [M, L] = S.useState(null),
      D = Wt(o, (se) => L(se)),
      [z, H] = S.useState(null),
      K = Wx(z),
      G = K?.width ?? 0,
      ce = K?.height ?? 0,
      ge = l + (d !== "center" ? "-" + d : ""),
      pe =
        typeof y == "number"
          ? y
          : { top: 0, right: 0, bottom: 0, left: 0, ...y },
      xe = Array.isArray(v) ? v : [v],
      Z = xe.length > 0,
      he = { padding: pe, boundary: xe.filter(Gx), altBoundary: Z },
      {
        refs: q,
        floatingStyles: me,
        placement: ie,
        isPositioned: re,
        middlewareData: I,
      } = Ax({
        strategy: "fixed",
        placement: ge,
        whileElementsMounted: (...se) =>
          Cx(...se, { animationFrame: x === "always" }),
        elements: { reference: E.anchor },
        middleware: [
          Dx({ mainAxis: u + ce, alignmentAxis: f }),
          m &&
            Ix({
              mainAxis: !0,
              crossAxis: !1,
              limiter: w === "partial" ? Fx() : void 0,
              ...he,
            }),
          m && zx({ ...he }),
          Ux({
            ...he,
            apply: ({
              elements: se,
              rects: Se,
              availableWidth: Ee,
              availableHeight: Fe,
            }) => {
              const { width: Ct, height: Cn } = Se.reference,
                kt = se.floating.style;
              kt.setProperty("--radix-popper-available-width", `${Ee}px`),
                kt.setProperty("--radix-popper-available-height", `${Fe}px`),
                kt.setProperty("--radix-popper-anchor-width", `${Ct}px`),
                kt.setProperty("--radix-popper-anchor-height", `${Cn}px`);
            },
          }),
          z && $x({ element: z, padding: h }),
          Yx({ arrowWidth: G, arrowHeight: ce }),
          N && Bx({ strategy: "referenceHidden", ...he }),
        ],
      }),
      [F, V] = vh(ie),
      T = Xn(R);
    Zn(() => {
      re && T?.();
    }, [re, T]);
    const A = I.arrow?.x,
      Y = I.arrow?.y,
      J = I.arrow?.centerOffset !== 0,
      [ue, ve] = S.useState();
    return (
      Zn(() => {
        M && ve(window.getComputedStyle(M).zIndex);
      }, [M]),
      g.jsx("div", {
        ref: q.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
          ...me,
          transform: re ? me.transform : "translate(0, -200%)",
          minWidth: "max-content",
          zIndex: ue,
          "--radix-popper-transform-origin": [
            I.transformOrigin?.x,
            I.transformOrigin?.y,
          ].join(" "),
          ...(I.hide?.referenceHidden && {
            visibility: "hidden",
            pointerEvents: "none",
          }),
        },
        dir: n.dir,
        children: g.jsx(Qx, {
          scope: i,
          placedSide: F,
          onArrowChange: H,
          arrowX: A,
          arrowY: Y,
          shouldHideArrow: J,
          children: g.jsx(vt.div, {
            "data-side": F,
            "data-align": V,
            ...C,
            ref: D,
            style: { ...C.style, animation: re ? void 0 : "none" },
          }),
        }),
      })
    );
  });
hh.displayName = vu;
var mh = "PopperArrow",
  qx = { top: "bottom", right: "left", bottom: "top", left: "right" },
  gh = S.forwardRef(function (o, i) {
    const { __scopePopper: l, ...u } = o,
      d = Kx(mh, l),
      f = qx[d.placedSide];
    return g.jsx("span", {
      ref: d.onArrowChange,
      style: {
        position: "absolute",
        left: d.arrowX,
        top: d.arrowY,
        [f]: 0,
        transformOrigin: {
          top: "",
          right: "0 0",
          bottom: "center 0",
          left: "100% 0",
        }[d.placedSide],
        transform: {
          top: "translateY(100%)",
          right: "translateY(50%) rotate(90deg) translateX(-50%)",
          bottom: "rotate(180deg)",
          left: "translateY(50%) rotate(-90deg) translateX(50%)",
        }[d.placedSide],
        visibility: d.shouldHideArrow ? "hidden" : void 0,
      },
      children: g.jsx(Hx, {
        ...u,
        ref: i,
        style: { ...u.style, display: "block" },
      }),
    });
  });
gh.displayName = mh;
function Gx(n) {
  return n !== null;
}
var Yx = (n) => ({
  name: "transformOrigin",
  options: n,
  fn(o) {
    const { placement: i, rects: l, middlewareData: u } = o,
      f = u.arrow?.centerOffset !== 0,
      h = f ? 0 : n.arrowWidth,
      m = f ? 0 : n.arrowHeight,
      [v, y] = vh(i),
      w = { start: "0%", center: "50%", end: "100%" }[y],
      N = (u.arrow?.x ?? 0) + h / 2,
      x = (u.arrow?.y ?? 0) + m / 2;
    let R = "",
      C = "";
    return (
      v === "bottom"
        ? ((R = f ? w : `${N}px`), (C = `${-m}px`))
        : v === "top"
        ? ((R = f ? w : `${N}px`), (C = `${l.floating.height + m}px`))
        : v === "right"
        ? ((R = `${-m}px`), (C = f ? w : `${x}px`))
        : v === "left" &&
          ((R = `${l.floating.width + m}px`), (C = f ? w : `${x}px`)),
      { data: { x: R, y: C } }
    );
  },
});
function vh(n) {
  const [o, i = "center"] = n.split("-");
  return [o, i];
}
var Xx = ph,
  Zx = hh,
  Jx = gh,
  [Vs] = Is("Tooltip", [ch]),
  yu = ch(),
  yh = "TooltipProvider",
  ew = 700,
  Df = "tooltip.open",
  [tw, xh] = Vs(yh),
  wh = (n) => {
    const {
        __scopeTooltip: o,
        delayDuration: i = ew,
        skipDelayDuration: l = 300,
        disableHoverableContent: u = !1,
        children: d,
      } = n,
      f = S.useRef(!0),
      h = S.useRef(!1),
      m = S.useRef(0);
    return (
      S.useEffect(() => {
        const v = m.current;
        return () => window.clearTimeout(v);
      }, []),
      g.jsx(tw, {
        scope: o,
        isOpenDelayedRef: f,
        delayDuration: i,
        onOpen: S.useCallback(() => {
          window.clearTimeout(m.current), (f.current = !1);
        }, []),
        onClose: S.useCallback(() => {
          window.clearTimeout(m.current),
            (m.current = window.setTimeout(() => (f.current = !0), l));
        }, [l]),
        isPointerInTransitRef: h,
        onPointerInTransitChange: S.useCallback((v) => {
          h.current = v;
        }, []),
        disableHoverableContent: u,
        children: d,
      })
    );
  };
wh.displayName = yh;
var Sh = "Tooltip",
  [vS, Hs] = Vs(Sh),
  Xa = "TooltipTrigger",
  nw = S.forwardRef((n, o) => {
    const { __scopeTooltip: i, ...l } = n,
      u = Hs(Xa, i),
      d = xh(Xa, i),
      f = yu(i),
      h = S.useRef(null),
      m = Wt(o, h, u.onTriggerChange),
      v = S.useRef(!1),
      y = S.useRef(!1),
      w = S.useCallback(() => (v.current = !1), []);
    return (
      S.useEffect(
        () => () => document.removeEventListener("pointerup", w),
        [w]
      ),
      g.jsx(Xx, {
        asChild: !0,
        ...f,
        children: g.jsx(vt.button, {
          "aria-describedby": u.open ? u.contentId : void 0,
          "data-state": u.stateAttribute,
          ...l,
          ref: m,
          onPointerMove: He(n.onPointerMove, (N) => {
            N.pointerType !== "touch" &&
              !y.current &&
              !d.isPointerInTransitRef.current &&
              (u.onTriggerEnter(), (y.current = !0));
          }),
          onPointerLeave: He(n.onPointerLeave, () => {
            u.onTriggerLeave(), (y.current = !1);
          }),
          onPointerDown: He(n.onPointerDown, () => {
            u.open && u.onClose(),
              (v.current = !0),
              document.addEventListener("pointerup", w, { once: !0 });
          }),
          onFocus: He(n.onFocus, () => {
            v.current || u.onOpen();
          }),
          onBlur: He(n.onBlur, u.onClose),
          onClick: He(n.onClick, u.onClose),
        }),
      })
    );
  });
nw.displayName = Xa;
var rw = "TooltipPortal",
  [yS, ow] = Vs(rw, { forceMount: void 0 }),
  Yr = "TooltipContent",
  bh = S.forwardRef((n, o) => {
    const i = ow(Yr, n.__scopeTooltip),
      { forceMount: l = i.forceMount, side: u = "top", ...d } = n,
      f = Hs(Yr, n.__scopeTooltip);
    return g.jsx(iu, {
      present: l || f.open,
      children: f.disableHoverableContent
        ? g.jsx(Eh, { side: u, ...d, ref: o })
        : g.jsx(iw, { side: u, ...d, ref: o }),
    });
  }),
  iw = S.forwardRef((n, o) => {
    const i = Hs(Yr, n.__scopeTooltip),
      l = xh(Yr, n.__scopeTooltip),
      u = S.useRef(null),
      d = Wt(o, u),
      [f, h] = S.useState(null),
      { trigger: m, onClose: v } = i,
      y = u.current,
      { onPointerInTransitChange: w } = l,
      N = S.useCallback(() => {
        h(null), w(!1);
      }, [w]),
      x = S.useCallback(
        (R, C) => {
          const E = R.currentTarget,
            M = { x: R.clientX, y: R.clientY },
            L = cw(M, E.getBoundingClientRect()),
            D = dw(M, L),
            z = fw(C.getBoundingClientRect()),
            H = hw([...D, ...z]);
          h(H), w(!0);
        },
        [w]
      );
    return (
      S.useEffect(() => () => N(), [N]),
      S.useEffect(() => {
        if (m && y) {
          const R = (E) => x(E, y),
            C = (E) => x(E, m);
          return (
            m.addEventListener("pointerleave", R),
            y.addEventListener("pointerleave", C),
            () => {
              m.removeEventListener("pointerleave", R),
                y.removeEventListener("pointerleave", C);
            }
          );
        }
      }, [m, y, x, N]),
      S.useEffect(() => {
        if (f) {
          const R = (C) => {
            const E = C.target,
              M = { x: C.clientX, y: C.clientY },
              L = m?.contains(E) || y?.contains(E),
              D = !pw(M, f);
            L ? N() : D && (N(), v());
          };
          return (
            document.addEventListener("pointermove", R),
            () => document.removeEventListener("pointermove", R)
          );
        }
      }, [m, y, f, v, N]),
      g.jsx(Eh, { ...n, ref: d })
    );
  }),
  [sw, lw] = Vs(Sh, { isInside: !1 }),
  aw = mv("TooltipContent"),
  Eh = S.forwardRef((n, o) => {
    const {
        __scopeTooltip: i,
        children: l,
        "aria-label": u,
        onEscapeKeyDown: d,
        onPointerDownOutside: f,
        ...h
      } = n,
      m = Hs(Yr, i),
      v = yu(i),
      { onClose: y } = m;
    return (
      S.useEffect(
        () => (
          document.addEventListener(Df, y),
          () => document.removeEventListener(Df, y)
        ),
        [y]
      ),
      S.useEffect(() => {
        if (m.trigger) {
          const w = (N) => {
            N.target?.contains(m.trigger) && y();
          };
          return (
            window.addEventListener("scroll", w, { capture: !0 }),
            () => window.removeEventListener("scroll", w, { capture: !0 })
          );
        }
      }, [m.trigger, y]),
      g.jsx(ou, {
        asChild: !0,
        disableOutsidePointerEvents: !1,
        onEscapeKeyDown: d,
        onPointerDownOutside: f,
        onFocusOutside: (w) => w.preventDefault(),
        onDismiss: y,
        children: g.jsxs(Zx, {
          "data-state": m.stateAttribute,
          ...v,
          ...h,
          ref: o,
          style: {
            ...h.style,
            "--radix-tooltip-content-transform-origin":
              "var(--radix-popper-transform-origin)",
            "--radix-tooltip-content-available-width":
              "var(--radix-popper-available-width)",
            "--radix-tooltip-content-available-height":
              "var(--radix-popper-available-height)",
            "--radix-tooltip-trigger-width": "var(--radix-popper-anchor-width)",
            "--radix-tooltip-trigger-height":
              "var(--radix-popper-anchor-height)",
          },
          children: [
            g.jsx(aw, { children: l }),
            g.jsx(sw, {
              scope: i,
              isInside: !0,
              children: g.jsx(Uv, {
                id: m.contentId,
                role: "tooltip",
                children: u || l,
              }),
            }),
          ],
        }),
      })
    );
  });
bh.displayName = Yr;
var Ch = "TooltipArrow",
  uw = S.forwardRef((n, o) => {
    const { __scopeTooltip: i, ...l } = n,
      u = yu(i);
    return lw(Ch, i).isInside ? null : g.jsx(Jx, { ...u, ...l, ref: o });
  });
uw.displayName = Ch;
function cw(n, o) {
  const i = Math.abs(o.top - n.y),
    l = Math.abs(o.bottom - n.y),
    u = Math.abs(o.right - n.x),
    d = Math.abs(o.left - n.x);
  switch (Math.min(i, l, u, d)) {
    case d:
      return "left";
    case u:
      return "right";
    case i:
      return "top";
    case l:
      return "bottom";
    default:
      throw new Error("unreachable");
  }
}
function dw(n, o, i = 5) {
  const l = [];
  switch (o) {
    case "top":
      l.push({ x: n.x - i, y: n.y + i }, { x: n.x + i, y: n.y + i });
      break;
    case "bottom":
      l.push({ x: n.x - i, y: n.y - i }, { x: n.x + i, y: n.y - i });
      break;
    case "left":
      l.push({ x: n.x + i, y: n.y - i }, { x: n.x + i, y: n.y + i });
      break;
    case "right":
      l.push({ x: n.x - i, y: n.y - i }, { x: n.x - i, y: n.y + i });
      break;
  }
  return l;
}
function fw(n) {
  const { top: o, right: i, bottom: l, left: u } = n;
  return [
    { x: u, y: o },
    { x: i, y: o },
    { x: i, y: l },
    { x: u, y: l },
  ];
}
function pw(n, o) {
  const { x: i, y: l } = n;
  let u = !1;
  for (let d = 0, f = o.length - 1; d < o.length; f = d++) {
    const h = o[d],
      m = o[f],
      v = h.x,
      y = h.y,
      w = m.x,
      N = m.y;
    y > l != N > l && i < ((w - v) * (l - y)) / (N - y) + v && (u = !u);
  }
  return u;
}
function hw(n) {
  const o = n.slice();
  return (
    o.sort((i, l) =>
      i.x < l.x ? -1 : i.x > l.x ? 1 : i.y < l.y ? -1 : i.y > l.y ? 1 : 0
    ),
    mw(o)
  );
}
function mw(n) {
  if (n.length <= 1) return n.slice();
  const o = [];
  for (let l = 0; l < n.length; l++) {
    const u = n[l];
    for (; o.length >= 2; ) {
      const d = o[o.length - 1],
        f = o[o.length - 2];
      if ((d.x - f.x) * (u.y - f.y) >= (d.y - f.y) * (u.x - f.x)) o.pop();
      else break;
    }
    o.push(u);
  }
  o.pop();
  const i = [];
  for (let l = n.length - 1; l >= 0; l--) {
    const u = n[l];
    for (; i.length >= 2; ) {
      const d = i[i.length - 1],
        f = i[i.length - 2];
      if ((d.x - f.x) * (u.y - f.y) >= (d.y - f.y) * (u.x - f.x)) i.pop();
      else break;
    }
    i.push(u);
  }
  return (
    i.pop(),
    o.length === 1 && i.length === 1 && o[0].x === i[0].x && o[0].y === i[0].y
      ? o
      : o.concat(i)
  );
}
var gw = wh,
  kh = bh;
const vw = gw,
  yw = S.forwardRef(({ className: n, sideOffset: o = 4, ...i }, l) =>
    g.jsx(kh, {
      ref: l,
      sideOffset: o,
      className: nt(
        "z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        n
      ),
      ...i,
    })
  );
yw.displayName = kh.displayName;
var Ws = class {
    constructor() {
      (this.listeners = new Set()),
        (this.subscribe = this.subscribe.bind(this));
    }
    subscribe(n) {
      return (
        this.listeners.add(n),
        this.onSubscribe(),
        () => {
          this.listeners.delete(n), this.onUnsubscribe();
        }
      );
    }
    hasListeners() {
      return this.listeners.size > 0;
    }
    onSubscribe() {}
    onUnsubscribe() {}
  },
  Qs = typeof window > "u" || "Deno" in globalThis;
function Vt() {}
function xw(n, o) {
  return typeof n == "function" ? n(o) : n;
}
function ww(n) {
  return typeof n == "number" && n >= 0 && n !== 1 / 0;
}
function Sw(n, o) {
  return Math.max(n + (o || 0) - Date.now(), 0);
}
function Za(n, o) {
  return typeof n == "function" ? n(o) : n;
}
function bw(n, o) {
  return typeof n == "function" ? n(o) : n;
}
function If(n, o) {
  const {
    type: i = "all",
    exact: l,
    fetchStatus: u,
    predicate: d,
    queryKey: f,
    stale: h,
  } = n;
  if (f) {
    if (l) {
      if (o.queryHash !== xu(f, o.options)) return !1;
    } else if (!Zo(o.queryKey, f)) return !1;
  }
  if (i !== "all") {
    const m = o.isActive();
    if ((i === "active" && !m) || (i === "inactive" && m)) return !1;
  }
  return !(
    (typeof h == "boolean" && o.isStale() !== h) ||
    (u && u !== o.state.fetchStatus) ||
    (d && !d(o))
  );
}
function Ff(n, o) {
  const { exact: i, status: l, predicate: u, mutationKey: d } = n;
  if (d) {
    if (!o.options.mutationKey) return !1;
    if (i) {
      if (Xo(o.options.mutationKey) !== Xo(d)) return !1;
    } else if (!Zo(o.options.mutationKey, d)) return !1;
  }
  return !((l && o.state.status !== l) || (u && !u(o)));
}
function xu(n, o) {
  return (o?.queryKeyHashFn || Xo)(n);
}
function Xo(n) {
  return JSON.stringify(n, (o, i) =>
    Ja(i)
      ? Object.keys(i)
          .sort()
          .reduce((l, u) => ((l[u] = i[u]), l), {})
      : i
  );
}
function Zo(n, o) {
  return n === o
    ? !0
    : typeof n != typeof o
    ? !1
    : n && o && typeof n == "object" && typeof o == "object"
    ? Object.keys(o).every((i) => Zo(n[i], o[i]))
    : !1;
}
function Ph(n, o) {
  if (n === o) return n;
  const i = zf(n) && zf(o);
  if (i || (Ja(n) && Ja(o))) {
    const l = i ? n : Object.keys(n),
      u = l.length,
      d = i ? o : Object.keys(o),
      f = d.length,
      h = i ? [] : {},
      m = new Set(l);
    let v = 0;
    for (let y = 0; y < f; y++) {
      const w = i ? y : d[y];
      ((!i && m.has(w)) || i) && n[w] === void 0 && o[w] === void 0
        ? ((h[w] = void 0), v++)
        : ((h[w] = Ph(n[w], o[w])), h[w] === n[w] && n[w] !== void 0 && v++);
    }
    return u === f && v === u ? n : h;
  }
  return o;
}
function zf(n) {
  return Array.isArray(n) && n.length === Object.keys(n).length;
}
function Ja(n) {
  if (!Uf(n)) return !1;
  const o = n.constructor;
  if (o === void 0) return !0;
  const i = o.prototype;
  return !(
    !Uf(i) ||
    !i.hasOwnProperty("isPrototypeOf") ||
    Object.getPrototypeOf(n) !== Object.prototype
  );
}
function Uf(n) {
  return Object.prototype.toString.call(n) === "[object Object]";
}
function Ew(n) {
  return new Promise((o) => {
    setTimeout(o, n);
  });
}
function Cw(n, o, i) {
  return typeof i.structuralSharing == "function"
    ? i.structuralSharing(n, o)
    : i.structuralSharing !== !1
    ? Ph(n, o)
    : o;
}
function kw(n, o, i = 0) {
  const l = [...n, o];
  return i && l.length > i ? l.slice(1) : l;
}
function Pw(n, o, i = 0) {
  const l = [o, ...n];
  return i && l.length > i ? l.slice(0, -1) : l;
}
var wu = Symbol();
function Nh(n, o) {
  return !n.queryFn && o?.initialPromise
    ? () => o.initialPromise
    : !n.queryFn || n.queryFn === wu
    ? () => Promise.reject(new Error(`Missing queryFn: '${n.queryHash}'`))
    : n.queryFn;
}
var Nw = class extends Ws {
    #e;
    #t;
    #n;
    constructor() {
      super(),
        (this.#n = (n) => {
          if (!Qs && window.addEventListener) {
            const o = () => n();
            return (
              window.addEventListener("visibilitychange", o, !1),
              () => {
                window.removeEventListener("visibilitychange", o);
              }
            );
          }
        });
    }
    onSubscribe() {
      this.#t || this.setEventListener(this.#n);
    }
    onUnsubscribe() {
      this.hasListeners() || (this.#t?.(), (this.#t = void 0));
    }
    setEventListener(n) {
      (this.#n = n),
        this.#t?.(),
        (this.#t = n((o) => {
          typeof o == "boolean" ? this.setFocused(o) : this.onFocus();
        }));
    }
    setFocused(n) {
      this.#e !== n && ((this.#e = n), this.onFocus());
    }
    onFocus() {
      const n = this.isFocused();
      this.listeners.forEach((o) => {
        o(n);
      });
    }
    isFocused() {
      return typeof this.#e == "boolean"
        ? this.#e
        : globalThis.document?.visibilityState !== "hidden";
    }
  },
  Th = new Nw(),
  Tw = class extends Ws {
    #e = !0;
    #t;
    #n;
    constructor() {
      super(),
        (this.#n = (n) => {
          if (!Qs && window.addEventListener) {
            const o = () => n(!0),
              i = () => n(!1);
            return (
              window.addEventListener("online", o, !1),
              window.addEventListener("offline", i, !1),
              () => {
                window.removeEventListener("online", o),
                  window.removeEventListener("offline", i);
              }
            );
          }
        });
    }
    onSubscribe() {
      this.#t || this.setEventListener(this.#n);
    }
    onUnsubscribe() {
      this.hasListeners() || (this.#t?.(), (this.#t = void 0));
    }
    setEventListener(n) {
      (this.#n = n), this.#t?.(), (this.#t = n(this.setOnline.bind(this)));
    }
    setOnline(n) {
      this.#e !== n &&
        ((this.#e = n),
        this.listeners.forEach((i) => {
          i(n);
        }));
    }
    isOnline() {
      return this.#e;
    }
  },
  As = new Tw();
function Rw() {
  let n, o;
  const i = new Promise((u, d) => {
    (n = u), (o = d);
  });
  (i.status = "pending"), i.catch(() => {});
  function l(u) {
    Object.assign(i, u), delete i.resolve, delete i.reject;
  }
  return (
    (i.resolve = (u) => {
      l({ status: "fulfilled", value: u }), n(u);
    }),
    (i.reject = (u) => {
      l({ status: "rejected", reason: u }), o(u);
    }),
    i
  );
}
function jw(n) {
  return Math.min(1e3 * 2 ** n, 3e4);
}
function Rh(n) {
  return (n ?? "online") === "online" ? As.isOnline() : !0;
}
var jh = class extends Error {
  constructor(n) {
    super("CancelledError"),
      (this.revert = n?.revert),
      (this.silent = n?.silent);
  }
};
function Ua(n) {
  return n instanceof jh;
}
function Oh(n) {
  let o = !1,
    i = 0,
    l = !1,
    u;
  const d = Rw(),
    f = (C) => {
      l || (N(new jh(C)), n.abort?.());
    },
    h = () => {
      o = !0;
    },
    m = () => {
      o = !1;
    },
    v = () =>
      Th.isFocused() &&
      (n.networkMode === "always" || As.isOnline()) &&
      n.canRun(),
    y = () => Rh(n.networkMode) && n.canRun(),
    w = (C) => {
      l || ((l = !0), n.onSuccess?.(C), u?.(), d.resolve(C));
    },
    N = (C) => {
      l || ((l = !0), n.onError?.(C), u?.(), d.reject(C));
    },
    x = () =>
      new Promise((C) => {
        (u = (E) => {
          (l || v()) && C(E);
        }),
          n.onPause?.();
      }).then(() => {
        (u = void 0), l || n.onContinue?.();
      }),
    R = () => {
      if (l) return;
      let C;
      const E = i === 0 ? n.initialPromise : void 0;
      try {
        C = E ?? n.fn();
      } catch (M) {
        C = Promise.reject(M);
      }
      Promise.resolve(C)
        .then(w)
        .catch((M) => {
          if (l) return;
          const L = n.retry ?? (Qs ? 0 : 3),
            D = n.retryDelay ?? jw,
            z = typeof D == "function" ? D(i, M) : D,
            H =
              L === !0 ||
              (typeof L == "number" && i < L) ||
              (typeof L == "function" && L(i, M));
          if (o || !H) {
            N(M);
            return;
          }
          i++,
            n.onFail?.(i, M),
            Ew(z)
              .then(() => (v() ? void 0 : x()))
              .then(() => {
                o ? N(M) : R();
              });
        });
    };
  return {
    promise: d,
    cancel: f,
    continue: () => (u?.(), d),
    cancelRetry: h,
    continueRetry: m,
    canStart: y,
    start: () => (y() ? R() : x().then(R), d),
  };
}
var Ow = (n) => setTimeout(n, 0);
function _w() {
  let n = [],
    o = 0,
    i = (h) => {
      h();
    },
    l = (h) => {
      h();
    },
    u = Ow;
  const d = (h) => {
      o
        ? n.push(h)
        : u(() => {
            i(h);
          });
    },
    f = () => {
      const h = n;
      (n = []),
        h.length &&
          u(() => {
            l(() => {
              h.forEach((m) => {
                i(m);
              });
            });
          });
    };
  return {
    batch: (h) => {
      let m;
      o++;
      try {
        m = h();
      } finally {
        o--, o || f();
      }
      return m;
    },
    batchCalls:
      (h) =>
      (...m) => {
        d(() => {
          h(...m);
        });
      },
    schedule: d,
    setNotifyFunction: (h) => {
      i = h;
    },
    setBatchNotifyFunction: (h) => {
      l = h;
    },
    setScheduler: (h) => {
      u = h;
    },
  };
}
var lt = _w(),
  _h = class {
    #e;
    destroy() {
      this.clearGcTimeout();
    }
    scheduleGc() {
      this.clearGcTimeout(),
        ww(this.gcTime) &&
          (this.#e = setTimeout(() => {
            this.optionalRemove();
          }, this.gcTime));
    }
    updateGcTime(n) {
      this.gcTime = Math.max(this.gcTime || 0, n ?? (Qs ? 1 / 0 : 300 * 1e3));
    }
    clearGcTimeout() {
      this.#e && (clearTimeout(this.#e), (this.#e = void 0));
    }
  },
  Mw = class extends _h {
    #e;
    #t;
    #n;
    #o;
    #r;
    #s;
    #l;
    constructor(n) {
      super(),
        (this.#l = !1),
        (this.#s = n.defaultOptions),
        this.setOptions(n.options),
        (this.observers = []),
        (this.#o = n.client),
        (this.#n = this.#o.getQueryCache()),
        (this.queryKey = n.queryKey),
        (this.queryHash = n.queryHash),
        (this.#e = Lw(this.options)),
        (this.state = n.state ?? this.#e),
        this.scheduleGc();
    }
    get meta() {
      return this.options.meta;
    }
    get promise() {
      return this.#r?.promise;
    }
    setOptions(n) {
      (this.options = { ...this.#s, ...n }),
        this.updateGcTime(this.options.gcTime);
    }
    optionalRemove() {
      !this.observers.length &&
        this.state.fetchStatus === "idle" &&
        this.#n.remove(this);
    }
    setData(n, o) {
      const i = Cw(this.state.data, n, this.options);
      return (
        this.#i({
          data: i,
          type: "success",
          dataUpdatedAt: o?.updatedAt,
          manual: o?.manual,
        }),
        i
      );
    }
    setState(n, o) {
      this.#i({ type: "setState", state: n, setStateOptions: o });
    }
    cancel(n) {
      const o = this.#r?.promise;
      return this.#r?.cancel(n), o ? o.then(Vt).catch(Vt) : Promise.resolve();
    }
    destroy() {
      super.destroy(), this.cancel({ silent: !0 });
    }
    reset() {
      this.destroy(), this.setState(this.#e);
    }
    isActive() {
      return this.observers.some((n) => bw(n.options.enabled, this) !== !1);
    }
    isDisabled() {
      return this.getObserversCount() > 0
        ? !this.isActive()
        : this.options.queryFn === wu ||
            this.state.dataUpdateCount + this.state.errorUpdateCount === 0;
    }
    isStatic() {
      return this.getObserversCount() > 0
        ? this.observers.some((n) => Za(n.options.staleTime, this) === "static")
        : !1;
    }
    isStale() {
      return this.getObserversCount() > 0
        ? this.observers.some((n) => n.getCurrentResult().isStale)
        : this.state.data === void 0 || this.state.isInvalidated;
    }
    isStaleByTime(n = 0) {
      return this.state.data === void 0
        ? !0
        : n === "static"
        ? !1
        : this.state.isInvalidated
        ? !0
        : !Sw(this.state.dataUpdatedAt, n);
    }
    onFocus() {
      this.observers
        .find((o) => o.shouldFetchOnWindowFocus())
        ?.refetch({ cancelRefetch: !1 }),
        this.#r?.continue();
    }
    onOnline() {
      this.observers
        .find((o) => o.shouldFetchOnReconnect())
        ?.refetch({ cancelRefetch: !1 }),
        this.#r?.continue();
    }
    addObserver(n) {
      this.observers.includes(n) ||
        (this.observers.push(n),
        this.clearGcTimeout(),
        this.#n.notify({ type: "observerAdded", query: this, observer: n }));
    }
    removeObserver(n) {
      this.observers.includes(n) &&
        ((this.observers = this.observers.filter((o) => o !== n)),
        this.observers.length ||
          (this.#r &&
            (this.#l ? this.#r.cancel({ revert: !0 }) : this.#r.cancelRetry()),
          this.scheduleGc()),
        this.#n.notify({ type: "observerRemoved", query: this, observer: n }));
    }
    getObserversCount() {
      return this.observers.length;
    }
    invalidate() {
      this.state.isInvalidated || this.#i({ type: "invalidate" });
    }
    fetch(n, o) {
      if (this.state.fetchStatus !== "idle") {
        if (this.state.data !== void 0 && o?.cancelRefetch)
          this.cancel({ silent: !0 });
        else if (this.#r) return this.#r.continueRetry(), this.#r.promise;
      }
      if ((n && this.setOptions(n), !this.options.queryFn)) {
        const m = this.observers.find((v) => v.options.queryFn);
        m && this.setOptions(m.options);
      }
      const i = new AbortController(),
        l = (m) => {
          Object.defineProperty(m, "signal", {
            enumerable: !0,
            get: () => ((this.#l = !0), i.signal),
          });
        },
        u = () => {
          const m = Nh(this.options, o),
            y = (() => {
              const w = {
                client: this.#o,
                queryKey: this.queryKey,
                meta: this.meta,
              };
              return l(w), w;
            })();
          return (
            (this.#l = !1),
            this.options.persister ? this.options.persister(m, y, this) : m(y)
          );
        },
        f = (() => {
          const m = {
            fetchOptions: o,
            options: this.options,
            queryKey: this.queryKey,
            client: this.#o,
            state: this.state,
            fetchFn: u,
          };
          return l(m), m;
        })();
      this.options.behavior?.onFetch(f, this),
        (this.#t = this.state),
        (this.state.fetchStatus === "idle" ||
          this.state.fetchMeta !== f.fetchOptions?.meta) &&
          this.#i({ type: "fetch", meta: f.fetchOptions?.meta });
      const h = (m) => {
        (Ua(m) && m.silent) || this.#i({ type: "error", error: m }),
          Ua(m) ||
            (this.#n.config.onError?.(m, this),
            this.#n.config.onSettled?.(this.state.data, m, this)),
          this.scheduleGc();
      };
      return (
        (this.#r = Oh({
          initialPromise: o?.initialPromise,
          fn: f.fetchFn,
          abort: i.abort.bind(i),
          onSuccess: (m) => {
            if (m === void 0) {
              h(new Error(`${this.queryHash} data is undefined`));
              return;
            }
            try {
              this.setData(m);
            } catch (v) {
              h(v);
              return;
            }
            this.#n.config.onSuccess?.(m, this),
              this.#n.config.onSettled?.(m, this.state.error, this),
              this.scheduleGc();
          },
          onError: h,
          onFail: (m, v) => {
            this.#i({ type: "failed", failureCount: m, error: v });
          },
          onPause: () => {
            this.#i({ type: "pause" });
          },
          onContinue: () => {
            this.#i({ type: "continue" });
          },
          retry: f.options.retry,
          retryDelay: f.options.retryDelay,
          networkMode: f.options.networkMode,
          canRun: () => !0,
        })),
        this.#r.start()
      );
    }
    #i(n) {
      const o = (i) => {
        switch (n.type) {
          case "failed":
            return {
              ...i,
              fetchFailureCount: n.failureCount,
              fetchFailureReason: n.error,
            };
          case "pause":
            return { ...i, fetchStatus: "paused" };
          case "continue":
            return { ...i, fetchStatus: "fetching" };
          case "fetch":
            return {
              ...i,
              ...Aw(i.data, this.options),
              fetchMeta: n.meta ?? null,
            };
          case "success":
            return (
              (this.#t = void 0),
              {
                ...i,
                data: n.data,
                dataUpdateCount: i.dataUpdateCount + 1,
                dataUpdatedAt: n.dataUpdatedAt ?? Date.now(),
                error: null,
                isInvalidated: !1,
                status: "success",
                ...(!n.manual && {
                  fetchStatus: "idle",
                  fetchFailureCount: 0,
                  fetchFailureReason: null,
                }),
              }
            );
          case "error":
            const l = n.error;
            return Ua(l) && l.revert && this.#t
              ? { ...this.#t, fetchStatus: "idle" }
              : {
                  ...i,
                  error: l,
                  errorUpdateCount: i.errorUpdateCount + 1,
                  errorUpdatedAt: Date.now(),
                  fetchFailureCount: i.fetchFailureCount + 1,
                  fetchFailureReason: l,
                  fetchStatus: "idle",
                  status: "error",
                };
          case "invalidate":
            return { ...i, isInvalidated: !0 };
          case "setState":
            return { ...i, ...n.state };
        }
      };
      (this.state = o(this.state)),
        lt.batch(() => {
          this.observers.forEach((i) => {
            i.onQueryUpdate();
          }),
            this.#n.notify({ query: this, type: "updated", action: n });
        });
    }
  };
function Aw(n, o) {
  return {
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchStatus: Rh(o.networkMode) ? "fetching" : "paused",
    ...(n === void 0 && { error: null, status: "pending" }),
  };
}
function Lw(n) {
  const o =
      typeof n.initialData == "function" ? n.initialData() : n.initialData,
    i = o !== void 0,
    l = i
      ? typeof n.initialDataUpdatedAt == "function"
        ? n.initialDataUpdatedAt()
        : n.initialDataUpdatedAt
      : 0;
  return {
    data: o,
    dataUpdateCount: 0,
    dataUpdatedAt: i ? l ?? Date.now() : 0,
    error: null,
    errorUpdateCount: 0,
    errorUpdatedAt: 0,
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchMeta: null,
    isInvalidated: !1,
    status: i ? "success" : "pending",
    fetchStatus: "idle",
  };
}
var Dw = class extends Ws {
    constructor(n = {}) {
      super(), (this.config = n), (this.#e = new Map());
    }
    #e;
    build(n, o, i) {
      const l = o.queryKey,
        u = o.queryHash ?? xu(l, o);
      let d = this.get(u);
      return (
        d ||
          ((d = new Mw({
            client: n,
            queryKey: l,
            queryHash: u,
            options: n.defaultQueryOptions(o),
            state: i,
            defaultOptions: n.getQueryDefaults(l),
          })),
          this.add(d)),
        d
      );
    }
    add(n) {
      this.#e.has(n.queryHash) ||
        (this.#e.set(n.queryHash, n), this.notify({ type: "added", query: n }));
    }
    remove(n) {
      const o = this.#e.get(n.queryHash);
      o &&
        (n.destroy(),
        o === n && this.#e.delete(n.queryHash),
        this.notify({ type: "removed", query: n }));
    }
    clear() {
      lt.batch(() => {
        this.getAll().forEach((n) => {
          this.remove(n);
        });
      });
    }
    get(n) {
      return this.#e.get(n);
    }
    getAll() {
      return [...this.#e.values()];
    }
    find(n) {
      const o = { exact: !0, ...n };
      return this.getAll().find((i) => If(o, i));
    }
    findAll(n = {}) {
      const o = this.getAll();
      return Object.keys(n).length > 0 ? o.filter((i) => If(n, i)) : o;
    }
    notify(n) {
      lt.batch(() => {
        this.listeners.forEach((o) => {
          o(n);
        });
      });
    }
    onFocus() {
      lt.batch(() => {
        this.getAll().forEach((n) => {
          n.onFocus();
        });
      });
    }
    onOnline() {
      lt.batch(() => {
        this.getAll().forEach((n) => {
          n.onOnline();
        });
      });
    }
  },
  Iw = class extends _h {
    #e;
    #t;
    #n;
    constructor(n) {
      super(),
        (this.mutationId = n.mutationId),
        (this.#t = n.mutationCache),
        (this.#e = []),
        (this.state = n.state || Fw()),
        this.setOptions(n.options),
        this.scheduleGc();
    }
    setOptions(n) {
      (this.options = n), this.updateGcTime(this.options.gcTime);
    }
    get meta() {
      return this.options.meta;
    }
    addObserver(n) {
      this.#e.includes(n) ||
        (this.#e.push(n),
        this.clearGcTimeout(),
        this.#t.notify({ type: "observerAdded", mutation: this, observer: n }));
    }
    removeObserver(n) {
      (this.#e = this.#e.filter((o) => o !== n)),
        this.scheduleGc(),
        this.#t.notify({
          type: "observerRemoved",
          mutation: this,
          observer: n,
        });
    }
    optionalRemove() {
      this.#e.length ||
        (this.state.status === "pending"
          ? this.scheduleGc()
          : this.#t.remove(this));
    }
    continue() {
      return this.#n?.continue() ?? this.execute(this.state.variables);
    }
    async execute(n) {
      const o = () => {
        this.#o({ type: "continue" });
      };
      this.#n = Oh({
        fn: () =>
          this.options.mutationFn
            ? this.options.mutationFn(n)
            : Promise.reject(new Error("No mutationFn found")),
        onFail: (u, d) => {
          this.#o({ type: "failed", failureCount: u, error: d });
        },
        onPause: () => {
          this.#o({ type: "pause" });
        },
        onContinue: o,
        retry: this.options.retry ?? 0,
        retryDelay: this.options.retryDelay,
        networkMode: this.options.networkMode,
        canRun: () => this.#t.canRun(this),
      });
      const i = this.state.status === "pending",
        l = !this.#n.canStart();
      try {
        if (i) o();
        else {
          this.#o({ type: "pending", variables: n, isPaused: l }),
            await this.#t.config.onMutate?.(n, this);
          const d = await this.options.onMutate?.(n);
          d !== this.state.context &&
            this.#o({ type: "pending", context: d, variables: n, isPaused: l });
        }
        const u = await this.#n.start();
        return (
          await this.#t.config.onSuccess?.(u, n, this.state.context, this),
          await this.options.onSuccess?.(u, n, this.state.context),
          await this.#t.config.onSettled?.(
            u,
            null,
            this.state.variables,
            this.state.context,
            this
          ),
          await this.options.onSettled?.(u, null, n, this.state.context),
          this.#o({ type: "success", data: u }),
          u
        );
      } catch (u) {
        try {
          throw (
            (await this.#t.config.onError?.(u, n, this.state.context, this),
            await this.options.onError?.(u, n, this.state.context),
            await this.#t.config.onSettled?.(
              void 0,
              u,
              this.state.variables,
              this.state.context,
              this
            ),
            await this.options.onSettled?.(void 0, u, n, this.state.context),
            u)
          );
        } finally {
          this.#o({ type: "error", error: u });
        }
      } finally {
        this.#t.runNext(this);
      }
    }
    #o(n) {
      const o = (i) => {
        switch (n.type) {
          case "failed":
            return {
              ...i,
              failureCount: n.failureCount,
              failureReason: n.error,
            };
          case "pause":
            return { ...i, isPaused: !0 };
          case "continue":
            return { ...i, isPaused: !1 };
          case "pending":
            return {
              ...i,
              context: n.context,
              data: void 0,
              failureCount: 0,
              failureReason: null,
              error: null,
              isPaused: n.isPaused,
              status: "pending",
              variables: n.variables,
              submittedAt: Date.now(),
            };
          case "success":
            return {
              ...i,
              data: n.data,
              failureCount: 0,
              failureReason: null,
              error: null,
              status: "success",
              isPaused: !1,
            };
          case "error":
            return {
              ...i,
              data: void 0,
              error: n.error,
              failureCount: i.failureCount + 1,
              failureReason: n.error,
              isPaused: !1,
              status: "error",
            };
        }
      };
      (this.state = o(this.state)),
        lt.batch(() => {
          this.#e.forEach((i) => {
            i.onMutationUpdate(n);
          }),
            this.#t.notify({ mutation: this, type: "updated", action: n });
        });
    }
  };
function Fw() {
  return {
    context: void 0,
    data: void 0,
    error: null,
    failureCount: 0,
    failureReason: null,
    isPaused: !1,
    status: "idle",
    variables: void 0,
    submittedAt: 0,
  };
}
var zw = class extends Ws {
  constructor(n = {}) {
    super(),
      (this.config = n),
      (this.#e = new Set()),
      (this.#t = new Map()),
      (this.#n = 0);
  }
  #e;
  #t;
  #n;
  build(n, o, i) {
    const l = new Iw({
      mutationCache: this,
      mutationId: ++this.#n,
      options: n.defaultMutationOptions(o),
      state: i,
    });
    return this.add(l), l;
  }
  add(n) {
    this.#e.add(n);
    const o = Cs(n);
    if (typeof o == "string") {
      const i = this.#t.get(o);
      i ? i.push(n) : this.#t.set(o, [n]);
    }
    this.notify({ type: "added", mutation: n });
  }
  remove(n) {
    if (this.#e.delete(n)) {
      const o = Cs(n);
      if (typeof o == "string") {
        const i = this.#t.get(o);
        if (i)
          if (i.length > 1) {
            const l = i.indexOf(n);
            l !== -1 && i.splice(l, 1);
          } else i[0] === n && this.#t.delete(o);
      }
    }
    this.notify({ type: "removed", mutation: n });
  }
  canRun(n) {
    const o = Cs(n);
    if (typeof o == "string") {
      const l = this.#t.get(o)?.find((u) => u.state.status === "pending");
      return !l || l === n;
    } else return !0;
  }
  runNext(n) {
    const o = Cs(n);
    return typeof o == "string"
      ? this.#t
          .get(o)
          ?.find((l) => l !== n && l.state.isPaused)
          ?.continue() ?? Promise.resolve()
      : Promise.resolve();
  }
  clear() {
    lt.batch(() => {
      this.#e.forEach((n) => {
        this.notify({ type: "removed", mutation: n });
      }),
        this.#e.clear(),
        this.#t.clear();
    });
  }
  getAll() {
    return Array.from(this.#e);
  }
  find(n) {
    const o = { exact: !0, ...n };
    return this.getAll().find((i) => Ff(o, i));
  }
  findAll(n = {}) {
    return this.getAll().filter((o) => Ff(n, o));
  }
  notify(n) {
    lt.batch(() => {
      this.listeners.forEach((o) => {
        o(n);
      });
    });
  }
  resumePausedMutations() {
    const n = this.getAll().filter((o) => o.state.isPaused);
    return lt.batch(() => Promise.all(n.map((o) => o.continue().catch(Vt))));
  }
};
function Cs(n) {
  return n.options.scope?.id;
}
function Bf(n) {
  return {
    onFetch: (o, i) => {
      const l = o.options,
        u = o.fetchOptions?.meta?.fetchMore?.direction,
        d = o.state.data?.pages || [],
        f = o.state.data?.pageParams || [];
      let h = { pages: [], pageParams: [] },
        m = 0;
      const v = async () => {
        let y = !1;
        const w = (R) => {
            Object.defineProperty(R, "signal", {
              enumerable: !0,
              get: () => (
                o.signal.aborted
                  ? (y = !0)
                  : o.signal.addEventListener("abort", () => {
                      y = !0;
                    }),
                o.signal
              ),
            });
          },
          N = Nh(o.options, o.fetchOptions),
          x = async (R, C, E) => {
            if (y) return Promise.reject();
            if (C == null && R.pages.length) return Promise.resolve(R);
            const L = (() => {
                const K = {
                  client: o.client,
                  queryKey: o.queryKey,
                  pageParam: C,
                  direction: E ? "backward" : "forward",
                  meta: o.options.meta,
                };
                return w(K), K;
              })(),
              D = await N(L),
              { maxPages: z } = o.options,
              H = E ? Pw : kw;
            return {
              pages: H(R.pages, D, z),
              pageParams: H(R.pageParams, C, z),
            };
          };
        if (u && d.length) {
          const R = u === "backward",
            C = R ? Uw : $f,
            E = { pages: d, pageParams: f },
            M = C(l, E);
          h = await x(E, M, R);
        } else {
          const R = n ?? d.length;
          do {
            const C = m === 0 ? f[0] ?? l.initialPageParam : $f(l, h);
            if (m > 0 && C == null) break;
            (h = await x(h, C)), m++;
          } while (m < R);
        }
        return h;
      };
      o.options.persister
        ? (o.fetchFn = () =>
            o.options.persister?.(
              v,
              {
                client: o.client,
                queryKey: o.queryKey,
                meta: o.options.meta,
                signal: o.signal,
              },
              i
            ))
        : (o.fetchFn = v);
    },
  };
}
function $f(n, { pages: o, pageParams: i }) {
  const l = o.length - 1;
  return o.length > 0 ? n.getNextPageParam(o[l], o, i[l], i) : void 0;
}
function Uw(n, { pages: o, pageParams: i }) {
  return o.length > 0 ? n.getPreviousPageParam?.(o[0], o, i[0], i) : void 0;
}
var Bw = class {
    #e;
    #t;
    #n;
    #o;
    #r;
    #s;
    #l;
    #i;
    constructor(n = {}) {
      (this.#e = n.queryCache || new Dw()),
        (this.#t = n.mutationCache || new zw()),
        (this.#n = n.defaultOptions || {}),
        (this.#o = new Map()),
        (this.#r = new Map()),
        (this.#s = 0);
    }
    mount() {
      this.#s++,
        this.#s === 1 &&
          ((this.#l = Th.subscribe(async (n) => {
            n && (await this.resumePausedMutations(), this.#e.onFocus());
          })),
          (this.#i = As.subscribe(async (n) => {
            n && (await this.resumePausedMutations(), this.#e.onOnline());
          })));
    }
    unmount() {
      this.#s--,
        this.#s === 0 &&
          (this.#l?.(), (this.#l = void 0), this.#i?.(), (this.#i = void 0));
    }
    isFetching(n) {
      return this.#e.findAll({ ...n, fetchStatus: "fetching" }).length;
    }
    isMutating(n) {
      return this.#t.findAll({ ...n, status: "pending" }).length;
    }
    getQueryData(n) {
      const o = this.defaultQueryOptions({ queryKey: n });
      return this.#e.get(o.queryHash)?.state.data;
    }
    ensureQueryData(n) {
      const o = this.defaultQueryOptions(n),
        i = this.#e.build(this, o),
        l = i.state.data;
      return l === void 0
        ? this.fetchQuery(n)
        : (n.revalidateIfStale &&
            i.isStaleByTime(Za(o.staleTime, i)) &&
            this.prefetchQuery(o),
          Promise.resolve(l));
    }
    getQueriesData(n) {
      return this.#e.findAll(n).map(({ queryKey: o, state: i }) => {
        const l = i.data;
        return [o, l];
      });
    }
    setQueryData(n, o, i) {
      const l = this.defaultQueryOptions({ queryKey: n }),
        d = this.#e.get(l.queryHash)?.state.data,
        f = xw(o, d);
      if (f !== void 0)
        return this.#e.build(this, l).setData(f, { ...i, manual: !0 });
    }
    setQueriesData(n, o, i) {
      return lt.batch(() =>
        this.#e
          .findAll(n)
          .map(({ queryKey: l }) => [l, this.setQueryData(l, o, i)])
      );
    }
    getQueryState(n) {
      const o = this.defaultQueryOptions({ queryKey: n });
      return this.#e.get(o.queryHash)?.state;
    }
    removeQueries(n) {
      const o = this.#e;
      lt.batch(() => {
        o.findAll(n).forEach((i) => {
          o.remove(i);
        });
      });
    }
    resetQueries(n, o) {
      const i = this.#e;
      return lt.batch(
        () => (
          i.findAll(n).forEach((l) => {
            l.reset();
          }),
          this.refetchQueries({ type: "active", ...n }, o)
        )
      );
    }
    cancelQueries(n, o = {}) {
      const i = { revert: !0, ...o },
        l = lt.batch(() => this.#e.findAll(n).map((u) => u.cancel(i)));
      return Promise.all(l).then(Vt).catch(Vt);
    }
    invalidateQueries(n, o = {}) {
      return lt.batch(
        () => (
          this.#e.findAll(n).forEach((i) => {
            i.invalidate();
          }),
          n?.refetchType === "none"
            ? Promise.resolve()
            : this.refetchQueries(
                { ...n, type: n?.refetchType ?? n?.type ?? "active" },
                o
              )
        )
      );
    }
    refetchQueries(n, o = {}) {
      const i = { ...o, cancelRefetch: o.cancelRefetch ?? !0 },
        l = lt.batch(() =>
          this.#e
            .findAll(n)
            .filter((u) => !u.isDisabled() && !u.isStatic())
            .map((u) => {
              let d = u.fetch(void 0, i);
              return (
                i.throwOnError || (d = d.catch(Vt)),
                u.state.fetchStatus === "paused" ? Promise.resolve() : d
              );
            })
        );
      return Promise.all(l).then(Vt);
    }
    fetchQuery(n) {
      const o = this.defaultQueryOptions(n);
      o.retry === void 0 && (o.retry = !1);
      const i = this.#e.build(this, o);
      return i.isStaleByTime(Za(o.staleTime, i))
        ? i.fetch(o)
        : Promise.resolve(i.state.data);
    }
    prefetchQuery(n) {
      return this.fetchQuery(n).then(Vt).catch(Vt);
    }
    fetchInfiniteQuery(n) {
      return (n.behavior = Bf(n.pages)), this.fetchQuery(n);
    }
    prefetchInfiniteQuery(n) {
      return this.fetchInfiniteQuery(n).then(Vt).catch(Vt);
    }
    ensureInfiniteQueryData(n) {
      return (n.behavior = Bf(n.pages)), this.ensureQueryData(n);
    }
    resumePausedMutations() {
      return As.isOnline()
        ? this.#t.resumePausedMutations()
        : Promise.resolve();
    }
    getQueryCache() {
      return this.#e;
    }
    getMutationCache() {
      return this.#t;
    }
    getDefaultOptions() {
      return this.#n;
    }
    setDefaultOptions(n) {
      this.#n = n;
    }
    setQueryDefaults(n, o) {
      this.#o.set(Xo(n), { queryKey: n, defaultOptions: o });
    }
    getQueryDefaults(n) {
      const o = [...this.#o.values()],
        i = {};
      return (
        o.forEach((l) => {
          Zo(n, l.queryKey) && Object.assign(i, l.defaultOptions);
        }),
        i
      );
    }
    setMutationDefaults(n, o) {
      this.#r.set(Xo(n), { mutationKey: n, defaultOptions: o });
    }
    getMutationDefaults(n) {
      const o = [...this.#r.values()],
        i = {};
      return (
        o.forEach((l) => {
          Zo(n, l.mutationKey) && Object.assign(i, l.defaultOptions);
        }),
        i
      );
    }
    defaultQueryOptions(n) {
      if (n._defaulted) return n;
      const o = {
        ...this.#n.queries,
        ...this.getQueryDefaults(n.queryKey),
        ...n,
        _defaulted: !0,
      };
      return (
        o.queryHash || (o.queryHash = xu(o.queryKey, o)),
        o.refetchOnReconnect === void 0 &&
          (o.refetchOnReconnect = o.networkMode !== "always"),
        o.throwOnError === void 0 && (o.throwOnError = !!o.suspense),
        !o.networkMode && o.persister && (o.networkMode = "offlineFirst"),
        o.queryFn === wu && (o.enabled = !1),
        o
      );
    }
    defaultMutationOptions(n) {
      return n?._defaulted
        ? n
        : {
            ...this.#n.mutations,
            ...(n?.mutationKey && this.getMutationDefaults(n.mutationKey)),
            ...n,
            _defaulted: !0,
          };
    }
    clear() {
      this.#e.clear(), this.#t.clear();
    }
  },
  $w = S.createContext(void 0),
  Vw = ({ client: n, children: o }) => (
    S.useEffect(
      () => (
        n.mount(),
        () => {
          n.unmount();
        }
      ),
      [n]
    ),
    g.jsx($w.Provider, { value: n, children: o })
  );
function Jo() {
  return (
    (Jo = Object.assign
      ? Object.assign.bind()
      : function (n) {
          for (var o = 1; o < arguments.length; o++) {
            var i = arguments[o];
            for (var l in i)
              Object.prototype.hasOwnProperty.call(i, l) && (n[l] = i[l]);
          }
          return n;
        }),
    Jo.apply(this, arguments)
  );
}
var Gn;
(function (n) {
  (n.Pop = "POP"), (n.Push = "PUSH"), (n.Replace = "REPLACE");
})(Gn || (Gn = {}));
const Vf = "popstate";
function Hw(n) {
  n === void 0 && (n = {});
  function o(l, u) {
    let { pathname: d, search: f, hash: h } = l.location;
    return eu(
      "",
      { pathname: d, search: f, hash: h },
      (u.state && u.state.usr) || null,
      (u.state && u.state.key) || "default"
    );
  }
  function i(l, u) {
    return typeof u == "string" ? u : Ls(u);
  }
  return Qw(o, i, null, n);
}
function Ue(n, o) {
  if (n === !1 || n === null || typeof n > "u") throw new Error(o);
}
function Mh(n, o) {
  if (!n) {
    typeof console < "u" && console.warn(o);
    try {
      throw new Error(o);
    } catch {}
  }
}
function Ww() {
  return Math.random().toString(36).substr(2, 8);
}
function Hf(n, o) {
  return { usr: n.state, key: n.key, idx: o };
}
function eu(n, o, i, l) {
  return (
    i === void 0 && (i = null),
    Jo(
      { pathname: typeof n == "string" ? n : n.pathname, search: "", hash: "" },
      typeof o == "string" ? eo(o) : o,
      { state: i, key: (o && o.key) || l || Ww() }
    )
  );
}
function Ls(n) {
  let { pathname: o = "/", search: i = "", hash: l = "" } = n;
  return (
    i && i !== "?" && (o += i.charAt(0) === "?" ? i : "?" + i),
    l && l !== "#" && (o += l.charAt(0) === "#" ? l : "#" + l),
    o
  );
}
function eo(n) {
  let o = {};
  if (n) {
    let i = n.indexOf("#");
    i >= 0 && ((o.hash = n.substr(i)), (n = n.substr(0, i)));
    let l = n.indexOf("?");
    l >= 0 && ((o.search = n.substr(l)), (n = n.substr(0, l))),
      n && (o.pathname = n);
  }
  return o;
}
function Qw(n, o, i, l) {
  l === void 0 && (l = {});
  let { window: u = document.defaultView, v5Compat: d = !1 } = l,
    f = u.history,
    h = Gn.Pop,
    m = null,
    v = y();
  v == null && ((v = 0), f.replaceState(Jo({}, f.state, { idx: v }), ""));
  function y() {
    return (f.state || { idx: null }).idx;
  }
  function w() {
    h = Gn.Pop;
    let E = y(),
      M = E == null ? null : E - v;
    (v = E), m && m({ action: h, location: C.location, delta: M });
  }
  function N(E, M) {
    h = Gn.Push;
    let L = eu(C.location, E, M);
    v = y() + 1;
    let D = Hf(L, v),
      z = C.createHref(L);
    try {
      f.pushState(D, "", z);
    } catch (H) {
      if (H instanceof DOMException && H.name === "DataCloneError") throw H;
      u.location.assign(z);
    }
    d && m && m({ action: h, location: C.location, delta: 1 });
  }
  function x(E, M) {
    h = Gn.Replace;
    let L = eu(C.location, E, M);
    v = y();
    let D = Hf(L, v),
      z = C.createHref(L);
    f.replaceState(D, "", z),
      d && m && m({ action: h, location: C.location, delta: 0 });
  }
  function R(E) {
    let M = u.location.origin !== "null" ? u.location.origin : u.location.href,
      L = typeof E == "string" ? E : Ls(E);
    return (
      (L = L.replace(/ $/, "%20")),
      Ue(
        M,
        "No window.location.(origin|href) available to create URL for href: " +
          L
      ),
      new URL(L, M)
    );
  }
  let C = {
    get action() {
      return h;
    },
    get location() {
      return n(u, f);
    },
    listen(E) {
      if (m) throw new Error("A history only accepts one active listener");
      return (
        u.addEventListener(Vf, w),
        (m = E),
        () => {
          u.removeEventListener(Vf, w), (m = null);
        }
      );
    },
    createHref(E) {
      return o(u, E);
    },
    createURL: R,
    encodeLocation(E) {
      let M = R(E);
      return { pathname: M.pathname, search: M.search, hash: M.hash };
    },
    push: N,
    replace: x,
    go(E) {
      return f.go(E);
    },
  };
  return C;
}
var Wf;
(function (n) {
  (n.data = "data"),
    (n.deferred = "deferred"),
    (n.redirect = "redirect"),
    (n.error = "error");
})(Wf || (Wf = {}));
function Kw(n, o, i) {
  return i === void 0 && (i = "/"), qw(n, o, i);
}
function qw(n, o, i, l) {
  let u = typeof o == "string" ? eo(o) : o,
    d = Su(u.pathname || "/", i);
  if (d == null) return null;
  let f = Ah(n);
  Gw(f);
  let h = null;
  for (let m = 0; h == null && m < f.length; ++m) {
    let v = l1(d);
    h = o1(f[m], v);
  }
  return h;
}
function Ah(n, o, i, l) {
  o === void 0 && (o = []), i === void 0 && (i = []), l === void 0 && (l = "");
  let u = (d, f, h) => {
    let m = {
      relativePath: h === void 0 ? d.path || "" : h,
      caseSensitive: d.caseSensitive === !0,
      childrenIndex: f,
      route: d,
    };
    m.relativePath.startsWith("/") &&
      (Ue(
        m.relativePath.startsWith(l),
        'Absolute route path "' +
          m.relativePath +
          '" nested under path ' +
          ('"' + l + '" is not valid. An absolute child route path ') +
          "must start with the combined path of all its parent routes."
      ),
      (m.relativePath = m.relativePath.slice(l.length)));
    let v = Yn([l, m.relativePath]),
      y = i.concat(m);
    d.children &&
      d.children.length > 0 &&
      (Ue(
        d.index !== !0,
        "Index routes must not have child routes. Please remove " +
          ('all child routes from route path "' + v + '".')
      ),
      Ah(d.children, o, y, v)),
      !(d.path == null && !d.index) &&
        o.push({ path: v, score: n1(v, d.index), routesMeta: y });
  };
  return (
    n.forEach((d, f) => {
      var h;
      if (d.path === "" || !((h = d.path) != null && h.includes("?"))) u(d, f);
      else for (let m of Lh(d.path)) u(d, f, m);
    }),
    o
  );
}
function Lh(n) {
  let o = n.split("/");
  if (o.length === 0) return [];
  let [i, ...l] = o,
    u = i.endsWith("?"),
    d = i.replace(/\?$/, "");
  if (l.length === 0) return u ? [d, ""] : [d];
  let f = Lh(l.join("/")),
    h = [];
  return (
    h.push(...f.map((m) => (m === "" ? d : [d, m].join("/")))),
    u && h.push(...f),
    h.map((m) => (n.startsWith("/") && m === "" ? "/" : m))
  );
}
function Gw(n) {
  n.sort((o, i) =>
    o.score !== i.score
      ? i.score - o.score
      : r1(
          o.routesMeta.map((l) => l.childrenIndex),
          i.routesMeta.map((l) => l.childrenIndex)
        )
  );
}
const Yw = /^:[\w-]+$/,
  Xw = 3,
  Zw = 2,
  Jw = 1,
  e1 = 10,
  t1 = -2,
  Qf = (n) => n === "*";
function n1(n, o) {
  let i = n.split("/"),
    l = i.length;
  return (
    i.some(Qf) && (l += t1),
    o && (l += Zw),
    i
      .filter((u) => !Qf(u))
      .reduce((u, d) => u + (Yw.test(d) ? Xw : d === "" ? Jw : e1), l)
  );
}
function r1(n, o) {
  return n.length === o.length && n.slice(0, -1).every((l, u) => l === o[u])
    ? n[n.length - 1] - o[o.length - 1]
    : 0;
}
function o1(n, o, i) {
  let { routesMeta: l } = n,
    u = {},
    d = "/",
    f = [];
  for (let h = 0; h < l.length; ++h) {
    let m = l[h],
      v = h === l.length - 1,
      y = d === "/" ? o : o.slice(d.length) || "/",
      w = i1(
        { path: m.relativePath, caseSensitive: m.caseSensitive, end: v },
        y
      ),
      N = m.route;
    if (!w) return null;
    Object.assign(u, w.params),
      f.push({
        params: u,
        pathname: Yn([d, w.pathname]),
        pathnameBase: d1(Yn([d, w.pathnameBase])),
        route: N,
      }),
      w.pathnameBase !== "/" && (d = Yn([d, w.pathnameBase]));
  }
  return f;
}
function i1(n, o) {
  typeof n == "string" && (n = { path: n, caseSensitive: !1, end: !0 });
  let [i, l] = s1(n.path, n.caseSensitive, n.end),
    u = o.match(i);
  if (!u) return null;
  let d = u[0],
    f = d.replace(/(.)\/+$/, "$1"),
    h = u.slice(1);
  return {
    params: l.reduce((v, y, w) => {
      let { paramName: N, isOptional: x } = y;
      if (N === "*") {
        let C = h[w] || "";
        f = d.slice(0, d.length - C.length).replace(/(.)\/+$/, "$1");
      }
      const R = h[w];
      return (
        x && !R ? (v[N] = void 0) : (v[N] = (R || "").replace(/%2F/g, "/")), v
      );
    }, {}),
    pathname: d,
    pathnameBase: f,
    pattern: n,
  };
}
function s1(n, o, i) {
  o === void 0 && (o = !1),
    i === void 0 && (i = !0),
    Mh(
      n === "*" || !n.endsWith("*") || n.endsWith("/*"),
      'Route path "' +
        n +
        '" will be treated as if it were ' +
        ('"' + n.replace(/\*$/, "/*") + '" because the `*` character must ') +
        "always follow a `/` in the pattern. To get rid of this warning, " +
        ('please change the route path to "' + n.replace(/\*$/, "/*") + '".')
    );
  let l = [],
    u =
      "^" +
      n
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (f, h, m) => (
            l.push({ paramName: h, isOptional: m != null }),
            m ? "/?([^\\/]+)?" : "/([^\\/]+)"
          )
        );
  return (
    n.endsWith("*")
      ? (l.push({ paramName: "*" }),
        (u += n === "*" || n === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : i
      ? (u += "\\/*$")
      : n !== "" && n !== "/" && (u += "(?:(?=\\/|$))"),
    [new RegExp(u, o ? void 0 : "i"), l]
  );
}
function l1(n) {
  try {
    return n
      .split("/")
      .map((o) => decodeURIComponent(o).replace(/\//g, "%2F"))
      .join("/");
  } catch (o) {
    return (
      Mh(
        !1,
        'The URL path "' +
          n +
          '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
          ("encoding (" + o + ").")
      ),
      n
    );
  }
}
function Su(n, o) {
  if (o === "/") return n;
  if (!n.toLowerCase().startsWith(o.toLowerCase())) return null;
  let i = o.endsWith("/") ? o.length - 1 : o.length,
    l = n.charAt(i);
  return l && l !== "/" ? null : n.slice(i) || "/";
}
function a1(n, o) {
  o === void 0 && (o = "/");
  let {
    pathname: i,
    search: l = "",
    hash: u = "",
  } = typeof n == "string" ? eo(n) : n;
  return {
    pathname: i ? (i.startsWith("/") ? i : u1(i, o)) : o,
    search: f1(l),
    hash: p1(u),
  };
}
function u1(n, o) {
  let i = o.replace(/\/+$/, "").split("/");
  return (
    n.split("/").forEach((u) => {
      u === ".." ? i.length > 1 && i.pop() : u !== "." && i.push(u);
    }),
    i.length > 1 ? i.join("/") : "/"
  );
}
function Ba(n, o, i, l) {
  return (
    "Cannot include a '" +
    n +
    "' character in a manually specified " +
    ("`to." +
      o +
      "` field [" +
      JSON.stringify(l) +
      "].  Please separate it out to the ") +
    ("`to." + i + "` field. Alternatively you may provide the full path as ") +
    'a string in <Link to="..."> and the router will parse it for you.'
  );
}
function c1(n) {
  return n.filter(
    (o, i) => i === 0 || (o.route.path && o.route.path.length > 0)
  );
}
function Dh(n, o) {
  let i = c1(n);
  return o
    ? i.map((l, u) => (u === i.length - 1 ? l.pathname : l.pathnameBase))
    : i.map((l) => l.pathnameBase);
}
function Ih(n, o, i, l) {
  l === void 0 && (l = !1);
  let u;
  typeof n == "string"
    ? (u = eo(n))
    : ((u = Jo({}, n)),
      Ue(
        !u.pathname || !u.pathname.includes("?"),
        Ba("?", "pathname", "search", u)
      ),
      Ue(
        !u.pathname || !u.pathname.includes("#"),
        Ba("#", "pathname", "hash", u)
      ),
      Ue(!u.search || !u.search.includes("#"), Ba("#", "search", "hash", u)));
  let d = n === "" || u.pathname === "",
    f = d ? "/" : u.pathname,
    h;
  if (f == null) h = i;
  else {
    let w = o.length - 1;
    if (!l && f.startsWith("..")) {
      let N = f.split("/");
      for (; N[0] === ".."; ) N.shift(), (w -= 1);
      u.pathname = N.join("/");
    }
    h = w >= 0 ? o[w] : "/";
  }
  let m = a1(u, h),
    v = f && f !== "/" && f.endsWith("/"),
    y = (d || f === ".") && i.endsWith("/");
  return !m.pathname.endsWith("/") && (v || y) && (m.pathname += "/"), m;
}
const Yn = (n) => n.join("/").replace(/\/\/+/g, "/"),
  d1 = (n) => n.replace(/\/+$/, "").replace(/^\/*/, "/"),
  f1 = (n) => (!n || n === "?" ? "" : n.startsWith("?") ? n : "?" + n),
  p1 = (n) => (!n || n === "#" ? "" : n.startsWith("#") ? n : "#" + n);
function h1(n) {
  return (
    n != null &&
    typeof n.status == "number" &&
    typeof n.statusText == "string" &&
    typeof n.internal == "boolean" &&
    "data" in n
  );
}
const Fh = ["post", "put", "patch", "delete"];
new Set(Fh);
const m1 = ["get", ...Fh];
new Set(m1);
function ei() {
  return (
    (ei = Object.assign
      ? Object.assign.bind()
      : function (n) {
          for (var o = 1; o < arguments.length; o++) {
            var i = arguments[o];
            for (var l in i)
              Object.prototype.hasOwnProperty.call(i, l) && (n[l] = i[l]);
          }
          return n;
        }),
    ei.apply(this, arguments)
  );
}
const bu = S.createContext(null),
  g1 = S.createContext(null),
  gr = S.createContext(null),
  Ks = S.createContext(null),
  vr = S.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
  zh = S.createContext(null);
function v1(n, o) {
  let { relative: i } = o === void 0 ? {} : o;
  ri() || Ue(!1);
  let { basename: l, navigator: u } = S.useContext(gr),
    { hash: d, pathname: f, search: h } = Bh(n, { relative: i }),
    m = f;
  return (
    l !== "/" && (m = f === "/" ? l : Yn([l, f])),
    u.createHref({ pathname: m, search: h, hash: d })
  );
}
function ri() {
  return S.useContext(Ks) != null;
}
function to() {
  return ri() || Ue(!1), S.useContext(Ks).location;
}
function Uh(n) {
  S.useContext(gr).static || S.useLayoutEffect(n);
}
function y1() {
  let { isDataRoute: n } = S.useContext(vr);
  return n ? O1() : x1();
}
function x1() {
  ri() || Ue(!1);
  let n = S.useContext(bu),
    { basename: o, future: i, navigator: l } = S.useContext(gr),
    { matches: u } = S.useContext(vr),
    { pathname: d } = to(),
    f = JSON.stringify(Dh(u, i.v7_relativeSplatPath)),
    h = S.useRef(!1);
  return (
    Uh(() => {
      h.current = !0;
    }),
    S.useCallback(
      function (v, y) {
        if ((y === void 0 && (y = {}), !h.current)) return;
        if (typeof v == "number") {
          l.go(v);
          return;
        }
        let w = Ih(v, JSON.parse(f), d, y.relative === "path");
        n == null &&
          o !== "/" &&
          (w.pathname = w.pathname === "/" ? o : Yn([o, w.pathname])),
          (y.replace ? l.replace : l.push)(w, y.state, y);
      },
      [o, l, f, d, n]
    )
  );
}
function Bh(n, o) {
  let { relative: i } = o === void 0 ? {} : o,
    { future: l } = S.useContext(gr),
    { matches: u } = S.useContext(vr),
    { pathname: d } = to(),
    f = JSON.stringify(Dh(u, l.v7_relativeSplatPath));
  return S.useMemo(() => Ih(n, JSON.parse(f), d, i === "path"), [n, f, d, i]);
}
function w1(n, o) {
  return S1(n, o);
}
function S1(n, o, i, l) {
  ri() || Ue(!1);
  let { navigator: u } = S.useContext(gr),
    { matches: d } = S.useContext(vr),
    f = d[d.length - 1],
    h = f ? f.params : {};
  f && f.pathname;
  let m = f ? f.pathnameBase : "/";
  f && f.route;
  let v = to(),
    y;
  if (o) {
    var w;
    let E = typeof o == "string" ? eo(o) : o;
    m === "/" || ((w = E.pathname) != null && w.startsWith(m)) || Ue(!1),
      (y = E);
  } else y = v;
  let N = y.pathname || "/",
    x = N;
  if (m !== "/") {
    let E = m.replace(/^\//, "").split("/");
    x = "/" + N.replace(/^\//, "").split("/").slice(E.length).join("/");
  }
  let R = Kw(n, { pathname: x }),
    C = P1(
      R &&
        R.map((E) =>
          Object.assign({}, E, {
            params: Object.assign({}, h, E.params),
            pathname: Yn([
              m,
              u.encodeLocation
                ? u.encodeLocation(E.pathname).pathname
                : E.pathname,
            ]),
            pathnameBase:
              E.pathnameBase === "/"
                ? m
                : Yn([
                    m,
                    u.encodeLocation
                      ? u.encodeLocation(E.pathnameBase).pathname
                      : E.pathnameBase,
                  ]),
          })
        ),
      d,
      i,
      l
    );
  return o && C
    ? S.createElement(
        Ks.Provider,
        {
          value: {
            location: ei(
              {
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default",
              },
              y
            ),
            navigationType: Gn.Pop,
          },
        },
        C
      )
    : C;
}
function b1() {
  let n = j1(),
    o = h1(n)
      ? n.status + " " + n.statusText
      : n instanceof Error
      ? n.message
      : JSON.stringify(n),
    i = n instanceof Error ? n.stack : null,
    u = { padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)" };
  return S.createElement(
    S.Fragment,
    null,
    S.createElement("h2", null, "Unexpected Application Error!"),
    S.createElement("h3", { style: { fontStyle: "italic" } }, o),
    i ? S.createElement("pre", { style: u }, i) : null,
    null
  );
}
const E1 = S.createElement(b1, null);
class C1 extends S.Component {
  constructor(o) {
    super(o),
      (this.state = {
        location: o.location,
        revalidation: o.revalidation,
        error: o.error,
      });
  }
  static getDerivedStateFromError(o) {
    return { error: o };
  }
  static getDerivedStateFromProps(o, i) {
    return i.location !== o.location ||
      (i.revalidation !== "idle" && o.revalidation === "idle")
      ? { error: o.error, location: o.location, revalidation: o.revalidation }
      : {
          error: o.error !== void 0 ? o.error : i.error,
          location: i.location,
          revalidation: o.revalidation || i.revalidation,
        };
  }
  componentDidCatch(o, i) {
    console.error(
      "React Router caught the following error during render",
      o,
      i
    );
  }
  render() {
    return this.state.error !== void 0
      ? S.createElement(
          vr.Provider,
          { value: this.props.routeContext },
          S.createElement(zh.Provider, {
            value: this.state.error,
            children: this.props.component,
          })
        )
      : this.props.children;
  }
}
function k1(n) {
  let { routeContext: o, match: i, children: l } = n,
    u = S.useContext(bu);
  return (
    u &&
      u.static &&
      u.staticContext &&
      (i.route.errorElement || i.route.ErrorBoundary) &&
      (u.staticContext._deepestRenderedBoundaryId = i.route.id),
    S.createElement(vr.Provider, { value: o }, l)
  );
}
function P1(n, o, i, l) {
  var u;
  if (
    (o === void 0 && (o = []),
    i === void 0 && (i = null),
    l === void 0 && (l = null),
    n == null)
  ) {
    var d;
    if (!i) return null;
    if (i.errors) n = i.matches;
    else if (
      (d = l) != null &&
      d.v7_partialHydration &&
      o.length === 0 &&
      !i.initialized &&
      i.matches.length > 0
    )
      n = i.matches;
    else return null;
  }
  let f = n,
    h = (u = i) == null ? void 0 : u.errors;
  if (h != null) {
    let y = f.findIndex((w) => w.route.id && h?.[w.route.id] !== void 0);
    y >= 0 || Ue(!1), (f = f.slice(0, Math.min(f.length, y + 1)));
  }
  let m = !1,
    v = -1;
  if (i && l && l.v7_partialHydration)
    for (let y = 0; y < f.length; y++) {
      let w = f[y];
      if (
        ((w.route.HydrateFallback || w.route.hydrateFallbackElement) && (v = y),
        w.route.id)
      ) {
        let { loaderData: N, errors: x } = i,
          R =
            w.route.loader &&
            N[w.route.id] === void 0 &&
            (!x || x[w.route.id] === void 0);
        if (w.route.lazy || R) {
          (m = !0), v >= 0 ? (f = f.slice(0, v + 1)) : (f = [f[0]]);
          break;
        }
      }
    }
  return f.reduceRight((y, w, N) => {
    let x,
      R = !1,
      C = null,
      E = null;
    i &&
      ((x = h && w.route.id ? h[w.route.id] : void 0),
      (C = w.route.errorElement || E1),
      m &&
        (v < 0 && N === 0
          ? (_1("route-fallback"), (R = !0), (E = null))
          : v === N &&
            ((R = !0), (E = w.route.hydrateFallbackElement || null))));
    let M = o.concat(f.slice(0, N + 1)),
      L = () => {
        let D;
        return (
          x
            ? (D = C)
            : R
            ? (D = E)
            : w.route.Component
            ? (D = S.createElement(w.route.Component, null))
            : w.route.element
            ? (D = w.route.element)
            : (D = y),
          S.createElement(k1, {
            match: w,
            routeContext: { outlet: y, matches: M, isDataRoute: i != null },
            children: D,
          })
        );
      };
    return i && (w.route.ErrorBoundary || w.route.errorElement || N === 0)
      ? S.createElement(C1, {
          location: i.location,
          revalidation: i.revalidation,
          component: C,
          error: x,
          children: L(),
          routeContext: { outlet: null, matches: M, isDataRoute: !0 },
        })
      : L();
  }, null);
}
var $h = (function (n) {
    return (
      (n.UseBlocker = "useBlocker"),
      (n.UseRevalidator = "useRevalidator"),
      (n.UseNavigateStable = "useNavigate"),
      n
    );
  })($h || {}),
  Vh = (function (n) {
    return (
      (n.UseBlocker = "useBlocker"),
      (n.UseLoaderData = "useLoaderData"),
      (n.UseActionData = "useActionData"),
      (n.UseRouteError = "useRouteError"),
      (n.UseNavigation = "useNavigation"),
      (n.UseRouteLoaderData = "useRouteLoaderData"),
      (n.UseMatches = "useMatches"),
      (n.UseRevalidator = "useRevalidator"),
      (n.UseNavigateStable = "useNavigate"),
      (n.UseRouteId = "useRouteId"),
      n
    );
  })(Vh || {});
function N1(n) {
  let o = S.useContext(bu);
  return o || Ue(!1), o;
}
function T1(n) {
  let o = S.useContext(g1);
  return o || Ue(!1), o;
}
function R1(n) {
  let o = S.useContext(vr);
  return o || Ue(!1), o;
}
function Hh(n) {
  let o = R1(),
    i = o.matches[o.matches.length - 1];
  return i.route.id || Ue(!1), i.route.id;
}
function j1() {
  var n;
  let o = S.useContext(zh),
    i = T1(),
    l = Hh();
  return o !== void 0 ? o : (n = i.errors) == null ? void 0 : n[l];
}
function O1() {
  let { router: n } = N1($h.UseNavigateStable),
    o = Hh(Vh.UseNavigateStable),
    i = S.useRef(!1);
  return (
    Uh(() => {
      i.current = !0;
    }),
    S.useCallback(
      function (u, d) {
        d === void 0 && (d = {}),
          i.current &&
            (typeof u == "number"
              ? n.navigate(u)
              : n.navigate(u, ei({ fromRouteId: o }, d)));
      },
      [n, o]
    )
  );
}
const Kf = {};
function _1(n, o, i) {
  Kf[n] || (Kf[n] = !0);
}
function M1(n, o) {
  n?.v7_startTransition, n?.v7_relativeSplatPath;
}
function qn(n) {
  Ue(!1);
}
function A1(n) {
  let {
    basename: o = "/",
    children: i = null,
    location: l,
    navigationType: u = Gn.Pop,
    navigator: d,
    static: f = !1,
    future: h,
  } = n;
  ri() && Ue(!1);
  let m = o.replace(/^\/*/, "/"),
    v = S.useMemo(
      () => ({
        basename: m,
        navigator: d,
        static: f,
        future: ei({ v7_relativeSplatPath: !1 }, h),
      }),
      [m, h, d, f]
    );
  typeof l == "string" && (l = eo(l));
  let {
      pathname: y = "/",
      search: w = "",
      hash: N = "",
      state: x = null,
      key: R = "default",
    } = l,
    C = S.useMemo(() => {
      let E = Su(y, m);
      return E == null
        ? null
        : {
            location: { pathname: E, search: w, hash: N, state: x, key: R },
            navigationType: u,
          };
    }, [m, y, w, N, x, R, u]);
  return C == null
    ? null
    : S.createElement(
        gr.Provider,
        { value: v },
        S.createElement(Ks.Provider, { children: i, value: C })
      );
}
function L1(n) {
  let { children: o, location: i } = n;
  return w1(tu(o), i);
}
new Promise(() => {});
function tu(n, o) {
  o === void 0 && (o = []);
  let i = [];
  return (
    S.Children.forEach(n, (l, u) => {
      if (!S.isValidElement(l)) return;
      let d = [...o, u];
      if (l.type === S.Fragment) {
        i.push.apply(i, tu(l.props.children, d));
        return;
      }
      l.type !== qn && Ue(!1), !l.props.index || !l.props.children || Ue(!1);
      let f = {
        id: l.props.id || d.join("-"),
        caseSensitive: l.props.caseSensitive,
        element: l.props.element,
        Component: l.props.Component,
        index: l.props.index,
        path: l.props.path,
        loader: l.props.loader,
        action: l.props.action,
        errorElement: l.props.errorElement,
        ErrorBoundary: l.props.ErrorBoundary,
        hasErrorBoundary:
          l.props.ErrorBoundary != null || l.props.errorElement != null,
        shouldRevalidate: l.props.shouldRevalidate,
        handle: l.props.handle,
        lazy: l.props.lazy,
      };
      l.props.children && (f.children = tu(l.props.children, d)), i.push(f);
    }),
    i
  );
}
function nu() {
  return (
    (nu = Object.assign
      ? Object.assign.bind()
      : function (n) {
          for (var o = 1; o < arguments.length; o++) {
            var i = arguments[o];
            for (var l in i)
              Object.prototype.hasOwnProperty.call(i, l) && (n[l] = i[l]);
          }
          return n;
        }),
    nu.apply(this, arguments)
  );
}
function D1(n, o) {
  if (n == null) return {};
  var i = {},
    l = Object.keys(n),
    u,
    d;
  for (d = 0; d < l.length; d++)
    (u = l[d]), !(o.indexOf(u) >= 0) && (i[u] = n[u]);
  return i;
}
function I1(n) {
  return !!(n.metaKey || n.altKey || n.ctrlKey || n.shiftKey);
}
function F1(n, o) {
  return n.button === 0 && (!o || o === "_self") && !I1(n);
}
const z1 = [
    "onClick",
    "relative",
    "reloadDocument",
    "replace",
    "state",
    "target",
    "to",
    "preventScrollReset",
    "viewTransition",
  ],
  U1 = "6";
try {
  window.__reactRouterVersion = U1;
} catch {}
const B1 = "startTransition",
  qf = Jf[B1];
function $1(n) {
  let { basename: o, children: i, future: l, window: u } = n,
    d = S.useRef();
  d.current == null && (d.current = Hw({ window: u, v5Compat: !0 }));
  let f = d.current,
    [h, m] = S.useState({ action: f.action, location: f.location }),
    { v7_startTransition: v } = l || {},
    y = S.useCallback(
      (w) => {
        v && qf ? qf(() => m(w)) : m(w);
      },
      [m, v]
    );
  return (
    S.useLayoutEffect(() => f.listen(y), [f, y]),
    S.useEffect(() => M1(l), [l]),
    S.createElement(A1, {
      basename: o,
      children: i,
      location: h.location,
      navigationType: h.action,
      navigator: f,
      future: l,
    })
  );
}
const V1 =
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  H1 = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  Ht = S.forwardRef(function (o, i) {
    let {
        onClick: l,
        relative: u,
        reloadDocument: d,
        replace: f,
        state: h,
        target: m,
        to: v,
        preventScrollReset: y,
        viewTransition: w,
      } = o,
      N = D1(o, z1),
      { basename: x } = S.useContext(gr),
      R,
      C = !1;
    if (typeof v == "string" && H1.test(v) && ((R = v), V1))
      try {
        let D = new URL(window.location.href),
          z = v.startsWith("//") ? new URL(D.protocol + v) : new URL(v),
          H = Su(z.pathname, x);
        z.origin === D.origin && H != null
          ? (v = H + z.search + z.hash)
          : (C = !0);
      } catch {}
    let E = v1(v, { relative: u }),
      M = W1(v, {
        replace: f,
        state: h,
        target: m,
        preventScrollReset: y,
        relative: u,
        viewTransition: w,
      });
    function L(D) {
      l && l(D), D.defaultPrevented || M(D);
    }
    return S.createElement(
      "a",
      nu({}, N, { href: R || E, onClick: C || d ? l : L, ref: i, target: m })
    );
  });
var Gf;
(function (n) {
  (n.UseScrollRestoration = "useScrollRestoration"),
    (n.UseSubmit = "useSubmit"),
    (n.UseSubmitFetcher = "useSubmitFetcher"),
    (n.UseFetcher = "useFetcher"),
    (n.useViewTransitionState = "useViewTransitionState");
})(Gf || (Gf = {}));
var Yf;
(function (n) {
  (n.UseFetcher = "useFetcher"),
    (n.UseFetchers = "useFetchers"),
    (n.UseScrollRestoration = "useScrollRestoration");
})(Yf || (Yf = {}));
function W1(n, o) {
  let {
      target: i,
      replace: l,
      state: u,
      preventScrollReset: d,
      relative: f,
      viewTransition: h,
    } = o === void 0 ? {} : o,
    m = y1(),
    v = to(),
    y = Bh(n, { relative: f });
  return S.useCallback(
    (w) => {
      if (F1(w, i)) {
        w.preventDefault();
        let N = l !== void 0 ? l : Ls(v) === Ls(y);
        m(n, {
          replace: N,
          state: u,
          preventScrollReset: d,
          relative: f,
          viewTransition: h,
        });
      }
    },
    [v, m, y, l, u, i, n, d, f, h]
  );
}
const Q1 = Rp(
    "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
    {
      variants: {
        variant: {
          default: "bg-primary text-primary-foreground hover:bg-primary/90",
          destructive:
            "bg-destructive text-destructive-foreground hover:bg-destructive/90",
          outline:
            "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
          secondary:
            "bg-secondary text-secondary-foreground hover:bg-secondary/80",
          ghost: "hover:bg-accent hover:text-accent-foreground",
          link: "text-primary underline-offset-4 hover:underline",
        },
        size: {
          default: "h-10 px-4 py-2",
          sm: "h-9 rounded-md px-3",
          lg: "h-11 rounded-md px-8",
          icon: "h-10 w-10",
        },
      },
      defaultVariants: { variant: "default", size: "default" },
    }
  ),
  qr = S.forwardRef(
    ({ className: n, variant: o, size: i, asChild: l = !1, ...u }, d) => {
      const f = l ? pv : "button";
      return g.jsx(f, {
        className: nt(Q1({ variant: o, size: i, className: n })),
        ref: d,
        ...u,
      });
    }
  );
qr.displayName = "Button";
const wn = S.forwardRef(({ className: n, ...o }, i) =>
  g.jsx("div", {
    ref: i,
    className: nt(
      "rounded-lg border bg-card text-card-foreground shadow-sm",
      n
    ),
    ...o,
  })
);
wn.displayName = "Card";
const Eu = S.forwardRef(({ className: n, ...o }, i) =>
  g.jsx("div", {
    ref: i,
    className: nt("flex flex-col space-y-1.5 p-6", n),
    ...o,
  })
);
Eu.displayName = "CardHeader";
const Cu = S.forwardRef(({ className: n, ...o }, i) =>
  g.jsx("h3", {
    ref: i,
    className: nt("text-2xl font-semibold leading-none tracking-tight", n),
    ...o,
  })
);
Cu.displayName = "CardTitle";
const ku = S.forwardRef(({ className: n, ...o }, i) =>
  g.jsx("p", {
    ref: i,
    className: nt("text-sm text-muted-foreground", n),
    ...o,
  })
);
ku.displayName = "CardDescription";
const Sn = S.forwardRef(({ className: n, ...o }, i) =>
  g.jsx("div", { ref: i, className: nt("p-6 pt-0", n), ...o })
);
Sn.displayName = "CardContent";
const K1 = S.forwardRef(({ className: n, ...o }, i) =>
  g.jsx("div", { ref: i, className: nt("flex items-center p-6 pt-0", n), ...o })
);
K1.displayName = "CardFooter";
const no = () => {
    const [n, o] = S.useState(!1),
      i = to(),
      l = [
        { name: "Home", path: "/" },
        { name: "Rooms & Suites", path: "/rooms" },
        { name: "About Us", path: "/about" },
        { name: "Gallery", path: "/gallery" },
        { name: "Services", path: "/services" },
        { name: "Contact", path: "/contact" },
      ],
      u = (d) => i.pathname === d;
    return g.jsx("nav", {
      className: "sticky top-0 z-50 bg-card shadow-sm border-b border-border",
      children: g.jsxs("div", {
        className: "container mx-auto px-4",
        children: [
          g.jsxs("div", {
            className: "flex items-center justify-between h-20",
            children: [
              g.jsx(Ht, {
                to: "/",
                className: "flex items-center space-x-2",
                children: g.jsx("h1", {
                  className:
                    "text-2xl font-bold bg-gradient-to-r from-luxury-gold to-primary bg-clip-text text-transparent",
                  children: "Sea Bridge View Hotel",
                }),
              }),
              g.jsx("div", {
                className: "hidden md:flex items-center space-x-8",
                children: l.map((d) =>
                  g.jsx(
                    Ht,
                    {
                      to: d.path,
                      className: `text-sm font-medium transition-colors hover:text-primary ${
                        u(d.path)
                          ? "text-primary border-b-2 border-primary pb-1"
                          : "text-foreground"
                      }`,
                      children: d.name,
                    },
                    d.path
                  )
                ),
              }),
              g.jsx("button", {
                className: "md:hidden",
                onClick: () => o(!n),
                "aria-label": "Toggle menu",
                children: n ? g.jsx(zp, { size: 24 }) : g.jsx(py, { size: 24 }),
              }),
            ],
          }),
          n &&
            g.jsx("div", {
              className: "md:hidden pb-4 space-y-3",
              children: l.map((d) =>
                g.jsx(
                  Ht,
                  {
                    to: d.path,
                    onClick: () => o(!1),
                    className: `block py-2 text-sm font-medium transition-colors ${
                      u(d.path)
                        ? "text-primary"
                        : "text-foreground hover:text-primary"
                    }`,
                    children: d.name,
                  },
                  d.path
                )
              ),
            }),
        ],
      }),
    });
  },
  ro = () =>
    g.jsx("footer", {
      className: "bg-card border-t border-border",
      children: g.jsxs("div", {
        className: "container mx-auto px-4 py-12",
        children: [
          g.jsxs("div", {
            className: "grid grid-cols-1 md:grid-cols-4 gap-8",
            children: [
              g.jsxs("div", {
                children: [
                  g.jsx("h3", {
                    className: "text-xl font-bold text-primary mb-4",
                    children: "Sea Bridge View Hotel - Mbarara",
                  }),
                  g.jsx("p", {
                    className: "text-muted-foreground text-sm",
                    children:
                      "Experience luxury and comfort in the heart of elegance.",
                  }),
                ],
              }),
              g.jsxs("div", {
                children: [
                  g.jsx("h4", {
                    className: "font-semibold mb-4",
                    children: "Quick Links",
                  }),
                  g.jsxs("ul", {
                    className: "space-y-2",
                    children: [
                      g.jsx("li", {
                        children: g.jsx(Ht, {
                          to: "/rooms",
                          className:
                            "text-sm text-muted-foreground hover:text-primary transition-colors",
                          children: "Rooms & Suites",
                        }),
                      }),
                      g.jsx("li", {
                        children: g.jsx(Ht, {
                          to: "/about",
                          className:
                            "text-sm text-muted-foreground hover:text-primary transition-colors",
                          children: "About Us",
                        }),
                      }),
                      g.jsx("li", {
                        children: g.jsx(Ht, {
                          to: "/services",
                          className:
                            "text-sm text-muted-foreground hover:text-primary transition-colors",
                          children: "Services",
                        }),
                      }),
                      g.jsx("li", {
                        children: g.jsx(Ht, {
                          to: "/contact",
                          className:
                            "text-sm text-muted-foreground hover:text-primary transition-colors",
                          children: "Contact",
                        }),
                      }),
                    ],
                  }),
                ],
              }),
              g.jsxs("div", {
                children: [
                  g.jsx("h4", {
                    className: "font-semibold mb-4",
                    children: "Contact Us",
                  }),
                  g.jsxs("ul", {
                    className: "space-y-3",
                    children: [
                      g.jsxs("li", {
                        className:
                          "flex items-start space-x-2 text-sm text-muted-foreground",
                        children: [
                          g.jsx(Lp, {
                            size: 16,
                            className: "mt-1 text-primary",
                          }),
                          g.jsx("span", { children: "Mbarara City" }),
                        ],
                      }),
                      g.jsxs("li", {
                        className:
                          "flex items-center space-x-2 text-sm text-muted-foreground",
                        children: [
                          g.jsx(Dp, { size: 16, className: "text-primary" }),
                          g.jsx("span", { children: "(+256)790448115" }),
                        ],
                      }),
                      g.jsxs("li", {
                        className:
                          "flex items-center space-x-2 text-sm text-muted-foreground",
                        children: [
                          g.jsx(Ap, { size: 16, className: "text-primary" }),
                          g.jsx(Ht, {
                            to: "/contact",
                            children: g.jsx("span", {
                              children: "sbvhotel@gmail.com",
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              g.jsxs("div", {
                children: [
                  g.jsx("h4", {
                    className: "font-semibold mb-4",
                    children: "Follow Us",
                  }),
                  g.jsxs("div", {
                    className: "flex space-x-4",
                    children: [
                      g.jsx("a", {
                        href: "#",
                        className:
                          "text-muted-foreground hover:text-primary transition-colors",
                        "aria-label": "Facebook",
                        children: g.jsx(dy, { size: 20 }),
                      }),
                      g.jsx("a", {
                        href: "#",
                        className:
                          "text-muted-foreground hover:text-primary transition-colors",
                        "aria-label": "Instagram",
                        children: g.jsx(fy, { size: 20 }),
                      }),
                      g.jsx("a", {
                        href: "#",
                        className:
                          "text-muted-foreground hover:text-primary transition-colors",
                        "aria-label": "Twitter",
                        children: g.jsx(gy, { size: 20 }),
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
          g.jsx("div", {
            className: "mt-8 pt-8 border-t border-border text-center",
            children: g.jsxs("p", {
              className: "text-sm text-muted-foreground",
              children: [
                "© ",
                new Date().getFullYear(),
                " Sea Bridge View Hotel - Mbarara. All rights reserved.",
              ],
            }),
          }),
        ],
      }),
    }),
  Wh = "/assets/hotel-hero-CVWh1GQa.jpg",
  q1 = () => {
    const n = [
      {
        icon: Fp,
        title: "Free Wi-Fi",
        description: "High-speed internet throughout the property",
      },
      {
        icon: cy,
        title: "24/7 Room Service",
        description: "Exquisite dining at your convenience",
      },
      {
        icon: Op,
        title: "Valet Parking",
        description: "Complimentary parking for all guests",
      },
      {
        icon: Ip,
        title: "Fine Dining",
        description: "World-class restaurants on-site",
      },
      {
        icon: _p,
        title: "Fitness Center",
        description: "State-of-the-art gym facilities",
      },
    ];
    return g.jsxs("div", {
      className: "min-h-screen bg-background",
      children: [
        g.jsx(no, {}),
        g.jsxs("section", {
          className:
            "relative h-[600px] md:h-[700px] flex items-center justify-center overflow-hidden",
          children: [
            g.jsx("div", {
              className: "absolute inset-0 bg-cover bg-center",
              style: { backgroundImage: `url(${Wh})` },
              children: g.jsx("div", {
                className:
                  "absolute inset-0 bg-gradient-to-r from-background/80 to-background/40",
              }),
            }),
            g.jsxs("div", {
              className: "relative z-10 text-center px-4 max-w-4xl mx-auto",
              children: [
                g.jsx("h1", {
                  className:
                    "text-4xl md:text-6xl font-bold mb-6 text-foreground",
                  children: "Welcome to Sea Bridge View Hotel - Mbarara",
                }),
                g.jsx("p", {
                  className:
                    "text-lg md:text-xl mb-8 text-muted-foreground max-w-2xl mx-auto",
                  children:
                    "Experience unparalleled luxury and hospitality in the heart of elegance. Where every moment becomes a cherished memory.",
                }),
                g.jsxs("div", {
                  className: "flex flex-col sm:flex-row gap-4 justify-center",
                  children: [
                    g.jsx(Ht, {
                      to: "/rooms",
                      children: g.jsx(qr, {
                        size: "lg",
                        className:
                          "bg-primary hover:bg-primary/90 text-primary-foreground font-semibold",
                        children: "Explore Rooms",
                      }),
                    }),
                    g.jsx(Ht, {
                      to: "/contact",
                      children: g.jsx(qr, {
                        size: "lg",
                        variant: "outline",
                        className:
                          "border-primary text-primary hover:bg-primary/10",
                        children: "Contact Us",
                      }),
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
        g.jsx("section", {
          className: "py-16 px-4",
          children: g.jsxs("div", {
            className: "container mx-auto",
            children: [
              g.jsx("h2", {
                className:
                  "text-3xl md:text-4xl font-bold text-center mb-12 text-foreground",
                children: "World-Class Services",
              }),
              g.jsx("div", {
                className:
                  "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
                children: n.map((o, i) =>
                  g.jsx(
                    wn,
                    {
                      className:
                        "border-border hover:shadow-lg transition-shadow",
                      children: g.jsxs(Sn, {
                        className: "p-6 text-center",
                        children: [
                          g.jsx(o.icon, {
                            className: "w-12 h-12 mx-auto mb-4 text-primary",
                          }),
                          g.jsx("h3", {
                            className:
                              "text-xl font-semibold mb-2 text-foreground",
                            children: o.title,
                          }),
                          g.jsx("p", {
                            className: "text-muted-foreground",
                            children: o.description,
                          }),
                        ],
                      }),
                    },
                    i
                  )
                ),
              }),
            ],
          }),
        }),
        g.jsx("section", {
          className: "py-16 px-4 bg-gradient-to-r from-warm-cream to-secondary",
          children: g.jsxs("div", {
            className: "container mx-auto text-center",
            children: [
              g.jsx("h2", {
                className:
                  "text-3xl md:text-4xl font-bold mb-6 text-foreground",
                children: "Ready for an Unforgettable Experience?",
              }),
              g.jsx("p", {
                className:
                  "text-lg mb-8 text-muted-foreground max-w-2xl mx-auto",
                children:
                  "Discover luxury redefined. Contact us today to inquire about availability and special offers.",
              }),
              g.jsx(Ht, {
                to: "/contact",
                children: g.jsx(qr, {
                  size: "lg",
                  className:
                    "bg-primary hover:bg-primary/90 text-primary-foreground font-semibold",
                  children: "Get in Touch",
                }),
              }),
            ],
          }),
        }),
        g.jsx(ro, {}),
      ],
    });
  },
  Qh = "/assets/deluxe-room-Cq2mUEQ1.jpg",
  Kh = "/assets/executive-suite-CZxygJgb.jpg",
  qh = "/assets/presidential-suite-qPGj5ZRT.jpg",
  G1 = () => {
    const n = [
      {
        title: "Deluxe Room",
        image: Qh,
        price: "Ugx 100,000",
        description:
          "Elegant room with city views, king-size bed, and modern amenities",
        amenities: [
          "Free Wi-Fi",
          "Smart TV",
          "Air Conditioning",
          "Coffee Maker",
        ],
      },
      {
        title: "Executive Suite",
        image: Kh,
        price: "Ugx 100,000",
        description:
          "Spacious suite with separate living area and premium furnishings",
        amenities: [
          "Free Wi-Fi",
          "Smart TV",
          "Air Conditioning",
          "Coffee Maker",
          "Mini Bar",
        ],
      },
      {
        title: "Standard Room",
        image: qh,
        price: "Ugx 100,000",
        description:
          "Ultimate luxury with panoramic views, grand piano, and exclusive services",
        amenities: [
          "Free Wi-Fi",
          "Smart TV",
          "Air Conditioning",
          "Coffee Maker",
          "Butler Service",
        ],
      },
    ];
    return g.jsxs("div", {
      className: "min-h-screen bg-background",
      children: [
        g.jsx(no, {}),
        g.jsx("section", {
          className: "py-16 px-4",
          children: g.jsxs("div", {
            className: "container mx-auto",
            children: [
              g.jsxs("div", {
                className: "text-center mb-12",
                children: [
                  g.jsx("h1", {
                    className:
                      "text-4xl md:text-5xl font-bold mb-4 text-foreground",
                    children: "Rooms & Suites",
                  }),
                  g.jsx("p", {
                    className:
                      "text-lg text-muted-foreground max-w-2xl mx-auto",
                    children:
                      "Choose from our selection of beautifully appointed rooms and suites, each designed to provide the ultimate comfort and luxury.",
                  }),
                ],
              }),
              g.jsx("div", {
                className:
                  "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",
                children: n.map((o, i) =>
                  g.jsxs(
                    wn,
                    {
                      className:
                        "overflow-hidden border-border hover:shadow-xl transition-all",
                      children: [
                        g.jsxs("div", {
                          className: "relative h-64 overflow-hidden",
                          children: [
                            g.jsx("img", {
                              src: o.image,
                              alt: o.title,
                              className:
                                "w-full h-full object-cover hover:scale-105 transition-transform duration-300",
                            }),
                            g.jsxs("div", {
                              className:
                                "absolute top-4 right-4 bg-primary text-primary-foreground px-4 py-2 rounded-full font-bold",
                              children: [
                                o.price,
                                g.jsx("span", {
                                  className: "text-sm",
                                  children: "/night",
                                }),
                              ],
                            }),
                          ],
                        }),
                        g.jsxs(Eu, {
                          children: [
                            g.jsx(Cu, {
                              className: "text-foreground",
                              children: o.title,
                            }),
                            g.jsx(ku, {
                              className: "text-sm text-muted-foreground",
                            }),
                          ],
                        }),
                        g.jsxs(Sn, {
                          children: [
                            g.jsx("p", {
                              className: "text-muted-foreground mb-4",
                              children: o.description,
                            }),
                            g.jsxs("div", {
                              className: "space-y-2 mb-6",
                              children: [
                                g.jsx("h4", {
                                  className:
                                    "font-semibold text-sm text-foreground",
                                  children: "Amenities:",
                                }),
                                g.jsx("div", {
                                  className: "grid grid-cols-2 gap-2",
                                  children: o.amenities.map((l, u) =>
                                    g.jsxs(
                                      "div",
                                      {
                                        className:
                                          "flex items-center space-x-2 text-sm text-muted-foreground",
                                        children: [
                                          g.jsx("div", {
                                            className:
                                              "w-1.5 h-1.5 bg-primary rounded-full",
                                          }),
                                          g.jsx("span", { children: l }),
                                        ],
                                      },
                                      u
                                    )
                                  ),
                                }),
                              ],
                            }),
                            g.jsx(qr, {
                              className:
                                "w-full bg-primary hover:bg-primary/90",
                              children: g.jsx("a", {
                                href: `/contact?subject=Inquiry%20about%20${encodeURIComponent(
                                  o.title
                                )}`,
                                children: "Inquire Now",
                              }),
                            }),
                          ],
                        }),
                      ],
                    },
                    i
                  )
                ),
              }),
            ],
          }),
        }),
        g.jsx(ro, {}),
      ],
    });
  },
  Y1 = () =>
    g.jsxs("div", {
      className: "min-h-screen bg-background",
      children: [
        g.jsx(no, {}),
        g.jsx("section", {
          className: "py-16 px-4",
          children: g.jsxs("div", {
            className: "container mx-auto max-w-4xl",
            children: [
              g.jsxs("div", {
                className: "text-center mb-12",
                children: [
                  g.jsx("h1", {
                    className:
                      "text-4xl md:text-5xl font-bold mb-4 text-foreground",
                    children: "About",
                  }),
                  g.jsx("h1", {
                    className:
                      "text-4xl md:text-5xl font-bold mb-4 text-foreground",
                    children: "Sea Bridge View Hotel - Mbarara",
                  }),
                  g.jsx("p", {
                    className: "text-lg text-muted-foreground",
                    children: "A Legacy of Excellence and Hospitality",
                  }),
                ],
              }),
              g.jsx("div", {
                className: "prose prose-lg max-w-none mb-16",
                children: g.jsxs("div", {
                  className: "space-y-6 text-muted-foreground",
                  children: [
                    g.jsx("p", {
                      className: "text-lg leading-relaxed",
                      children:
                        "After our establishment in 2025, Sea Bridge has been synonymous with luxury, elegance, and exceptional service. Nestled in the heart of the Mbarara City, our hotel has become a landmark destination for discerning travelers seeking an unforgettable experience.",
                    }),
                    g.jsx("p", {
                      className: "text-lg leading-relaxed",
                      children:
                        "Our story began with a vision to create a comfortable environment where guests could escape the ordinary and immerse themselves in extraordinary comfort. Over the decades, we have refined this vision, combining timeless elegance with modern amenities to create a truly unique hospitality experience.",
                    }),
                    g.jsx("p", {
                      className: "text-lg leading-relaxed",
                      children:
                        "Every detail at Sea Bridge View Hotel - Mbarara reflects our commitment to excellence—from our meticulously designed rooms and suites to our world-class dining experiences and personalized concierge services. We believe that luxury is not just about opulence; it's about creating moments that matter.",
                    }),
                  ],
                }),
              }),
              g.jsxs("div", {
                className: "p-6 bg-card border border-border rounded-lg",
                children: [
                  g.jsx(Mp, { className: "w-12 h-12 text-primary mb-4" }),
                  g.jsx("h3", {
                    className: "text-xl font-semibold mb-2 text-foreground",
                    children: "Guest-Centric Approach",
                  }),
                  g.jsx("p", {
                    className: "text-muted-foreground",
                    children:
                      "Every decision we make is guided by our dedication to exceeding guest expectations.",
                  }),
                ],
              }),
              g.jsxs("div", {
                className: "p-6 bg-card border border-border rounded-lg",
                children: [
                  g.jsx(vy, { className: "w-12 h-12 text-primary mb-4" }),
                  g.jsx("h3", {
                    className: "text-xl font-semibold mb-2 text-foreground",
                    children: "Expert Team",
                  }),
                  g.jsx("p", {
                    className: "text-muted-foreground",
                    children:
                      "Our dedicated staff brings years of hospitality expertise and genuine warmth to every interaction.",
                  }),
                ],
              }),
              g.jsxs("div", {
                className: "p-6 bg-card border border-border rounded-lg",
                children: [
                  g.jsx(my, { className: "w-12 h-12 text-primary mb-4" }),
                  g.jsx("h3", {
                    className: "text-xl font-semibold mb-2 text-foreground",
                    children: "Continuous Innovation",
                  }),
                  g.jsx("p", {
                    className: "text-muted-foreground",
                    children:
                      "We constantly evolve to incorporate the latest in comfort, technology, and sustainable practices.",
                  }),
                ],
              }),
              g.jsxs("div", {
                className:
                  "bg-gradient-to-r from-warm-cream to-secondary p-8 rounded-lg text-center",
                children: [
                  g.jsx("h2", {
                    className:
                      "text-2xl md:text-3xl font-bold mb-4 text-foreground",
                    children: "Our Mission",
                  }),
                  g.jsx("p", {
                    className:
                      "text-lg text-muted-foreground max-w-2xl mx-auto",
                    children:
                      "To provide an unparalleled hospitality experience where every guest feels valued, pampered, and at home. We strive to create lasting memories through exceptional service, elegant surroundings, and genuine care.",
                  }),
                ],
              }),
            ],
          }),
        }),
        g.jsx(ro, {}),
      ],
    }),
  X1 = () => {
    const n = [
      { src: Wh, title: "Hotel Exterior", category: "Exterior" },
      { src: Qh, title: "Deluxe Room", category: "Rooms" },
      { src: Kh, title: "Executive Suite", category: "Suites" },
      { src: qh, title: "Presidential Suite", category: "Suites" },
    ];
    return g.jsxs("div", {
      className: "min-h-screen bg-background",
      children: [
        g.jsx(no, {}),
        g.jsx("section", {
          className: "py-16 px-4",
          children: g.jsxs("div", {
            className: "container mx-auto",
            children: [
              g.jsxs("div", {
                className: "text-center mb-12",
                children: [
                  g.jsx("h1", {
                    className:
                      "text-4xl md:text-5xl font-bold mb-4 text-foreground",
                    children: "Gallery",
                  }),
                  g.jsx("p", {
                    className:
                      "text-lg text-muted-foreground max-w-2xl mx-auto",
                    children:
                      "Explore the elegance and luxury that awaits you at Sea Bridge View Hotel - Mbarara. From stunning architecture to beautifully appointed rooms.",
                  }),
                ],
              }),
              g.jsx("div", {
                className:
                  "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
                children: n.map((o, i) =>
                  g.jsxs(
                    "div",
                    {
                      className:
                        "group relative overflow-hidden rounded-lg border border-border hover:shadow-xl transition-all cursor-pointer aspect-[4/3]",
                      children: [
                        g.jsx("img", {
                          src: o.src,
                          alt: o.title,
                          className:
                            "w-full h-full object-cover group-hover:scale-110 transition-transform duration-300",
                        }),
                        g.jsx("div", {
                          className:
                            "absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity",
                          children: g.jsxs("div", {
                            className: "absolute bottom-0 left-0 right-0 p-6",
                            children: [
                              g.jsx("p", {
                                className:
                                  "text-sm text-primary font-semibold mb-1",
                                children: o.category,
                              }),
                              g.jsx("h3", {
                                className: "text-xl font-bold text-foreground",
                                children: o.title,
                              }),
                            ],
                          }),
                        }),
                      ],
                    },
                    i
                  )
                ),
              }),
              g.jsx("div", {
                className: "mt-12 text-center",
                children: g.jsx("p", {
                  className: "text-muted-foreground mb-6",
                  children:
                    "Want to see more? Visit us and experience the luxury in person.",
                }),
              }),
            ],
          }),
        }),
        g.jsx(ro, {}),
      ],
    });
  },
  Z1 = () => {
    const n = [
      {
        icon: Ip,
        title: "Fine Dining",
        description:
          "Experience culinary excellence at our world-class restaurants featuring international and local cuisine prepared by master chefs.",
      },
      {
        icon: ay,
        title: "Event Facilities",
        description:
          "Host your corporate events, conferences, or celebrations in our elegant ballrooms and meeting spaces equipped with modern technology.",
      },
      {
        icon: Mp,
        title: "Spa & Wellness",
        description:
          "Rejuvenate your body and mind at our luxury spa offering therapeutic massages, facials, and wellness treatments.",
      },
      {
        icon: Fp,
        title: "High-Speed Internet",
        description:
          "Stay connected with complimentary high-speed Wi-Fi throughout the hotel, perfect for business and leisure travelers.",
      },
      {
        icon: Op,
        title: "Parking Services",
        description: "Enjoy complimentary valet parking.",
      },
      {
        icon: _p,
        title: "Fitness Center",
        description:
          "Maintain your fitness routine in our state-of-the-art gym featuring the latest equipment and personal training services.",
      },
      {
        icon: hy,
        title: "Reception Services",
        description:
          "Our dedicated reception team is available 24/7 to assist with reservations, recommendations, and special requests.",
      },
      {
        icon: yy,
        title: "24/7 Room Service",
        description:
          "Indulge in delicious meals and beverages delivered to your room at any time, day or night.",
      },
    ];
    return g.jsxs("div", {
      className: "min-h-screen bg-background",
      children: [
        g.jsx(no, {}),
        g.jsx("section", {
          className: "py-16 px-4",
          children: g.jsxs("div", {
            className: "container mx-auto",
            children: [
              g.jsxs("div", {
                className: "text-center mb-12",
                children: [
                  g.jsx("h1", {
                    className:
                      "text-4xl md:text-5xl font-bold mb-4 text-foreground",
                    children: "Services",
                  }),
                  g.jsx("p", {
                    className:
                      "text-lg text-muted-foreground max-w-2xl mx-auto",
                    children:
                      "Discover the comprehensive range of services designed to make your stay exceptional. From dining to wellness, we have everything you need.",
                  }),
                ],
              }),
              g.jsx("div", {
                className:
                  "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6",
                children: n.map((o, i) =>
                  g.jsxs(
                    wn,
                    {
                      className: "border-border hover:shadow-lg transition-all",
                      children: [
                        g.jsxs(Eu, {
                          children: [
                            g.jsx(o.icon, {
                              className: "w-12 h-12 text-primary mb-4",
                            }),
                            g.jsx(Cu, {
                              className: "text-foreground",
                              children: o.title,
                            }),
                          ],
                        }),
                        g.jsx(Sn, {
                          children: g.jsx(ku, {
                            className: "text-muted-foreground",
                            children: o.description,
                          }),
                        }),
                      ],
                    },
                    i
                  )
                ),
              }),
              g.jsxs("div", {
                className:
                  "mt-16 bg-gradient-to-r from-warm-cream to-secondary p-8 md:p-12 rounded-lg text-center",
                children: [
                  g.jsx("h2", {
                    className:
                      "text-2xl md:text-3xl font-bold mb-4 text-foreground",
                    children: "Need Something Special?",
                  }),
                  g.jsx("p", {
                    className:
                      "text-lg text-muted-foreground max-w-2xl mx-auto mb-6",
                    children:
                      "We understand that every guest is unique. If you have specific requirements or special requests, our team is here to make it happen.",
                  }),
                ],
              }),
            ],
          }),
        }),
        g.jsx(ro, {}),
      ],
    });
  },
  Ts = S.forwardRef(({ className: n, type: o, ...i }, l) =>
    g.jsx("input", {
      type: o,
      className: nt(
        "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        n
      ),
      ref: l,
      ...i,
    })
  );
Ts.displayName = "Input";
const Gh = S.forwardRef(({ className: n, ...o }, i) =>
  g.jsx("textarea", {
    className: nt(
      "flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
      n
    ),
    ref: i,
    ...o,
  })
);
Gh.displayName = "Textarea";
class oi {
  constructor(o = 0, i = "Network Error") {
    (this.status = o), (this.text = i);
  }
}
const J1 = () => {
    if (!(typeof localStorage > "u"))
      return {
        get: (n) => Promise.resolve(localStorage.getItem(n)),
        set: (n, o) => Promise.resolve(localStorage.setItem(n, o)),
        remove: (n) => Promise.resolve(localStorage.removeItem(n)),
      };
  },
  Xe = {
    origin: "https://api.emailjs.com",
    blockHeadless: !1,
    storageProvider: J1(),
  },
  Pu = (n) =>
    n
      ? typeof n == "string"
        ? { publicKey: n }
        : n.toString() === "[object Object]"
        ? n
        : {}
      : {},
  eS = (n, o = "https://api.emailjs.com") => {
    if (!n) return;
    const i = Pu(n);
    (Xe.publicKey = i.publicKey),
      (Xe.blockHeadless = i.blockHeadless),
      (Xe.storageProvider = i.storageProvider),
      (Xe.blockList = i.blockList),
      (Xe.limitRate = i.limitRate),
      (Xe.origin = i.origin || o);
  },
  Yh = async (n, o, i = {}) => {
    const l = await fetch(Xe.origin + n, {
        method: "POST",
        headers: i,
        body: o,
      }),
      u = await l.text(),
      d = new oi(l.status, u);
    if (l.ok) return d;
    throw d;
  },
  Xh = (n, o, i) => {
    if (!n || typeof n != "string")
      throw "The public key is required. Visit https://dashboard.emailjs.com/admin/account";
    if (!o || typeof o != "string")
      throw "The service ID is required. Visit https://dashboard.emailjs.com/admin";
    if (!i || typeof i != "string")
      throw "The template ID is required. Visit https://dashboard.emailjs.com/admin/templates";
  },
  tS = (n) => {
    if (n && n.toString() !== "[object Object]")
      throw "The template params have to be the object. Visit https://www.emailjs.com/docs/sdk/send/";
  },
  Zh = (n) => n.webdriver || !n.languages || n.languages.length === 0,
  Jh = () => new oi(451, "Unavailable For Headless Browser"),
  nS = (n, o) => {
    if (!Array.isArray(n)) throw "The BlockList list has to be an array";
    if (typeof o != "string")
      throw "The BlockList watchVariable has to be a string";
  },
  rS = (n) => !n.list?.length || !n.watchVariable,
  oS = (n, o) => (n instanceof FormData ? n.get(o) : n[o]),
  em = (n, o) => {
    if (rS(n)) return !1;
    nS(n.list, n.watchVariable);
    const i = oS(o, n.watchVariable);
    return typeof i != "string" ? !1 : n.list.includes(i);
  },
  tm = () => new oi(403, "Forbidden"),
  iS = (n, o) => {
    if (typeof n != "number" || n < 0)
      throw "The LimitRate throttle has to be a positive number";
    if (o && typeof o != "string")
      throw "The LimitRate ID has to be a non-empty string";
  },
  sS = async (n, o, i) => {
    const l = Number((await i.get(n)) || 0);
    return o - Date.now() + l;
  },
  nm = async (n, o, i) => {
    if (!o.throttle || !i) return !1;
    iS(o.throttle, o.id);
    const l = o.id || n;
    return (await sS(l, o.throttle, i)) > 0
      ? !0
      : (await i.set(l, Date.now().toString()), !1);
  },
  rm = () => new oi(429, "Too Many Requests"),
  lS = async (n, o, i, l) => {
    const u = Pu(l),
      d = u.publicKey || Xe.publicKey,
      f = u.blockHeadless || Xe.blockHeadless,
      h = u.storageProvider || Xe.storageProvider,
      m = { ...Xe.blockList, ...u.blockList },
      v = { ...Xe.limitRate, ...u.limitRate };
    return f && Zh(navigator)
      ? Promise.reject(Jh())
      : (Xh(d, n, o),
        tS(i),
        i && em(m, i)
          ? Promise.reject(tm())
          : (await nm(location.pathname, v, h))
          ? Promise.reject(rm())
          : Yh(
              "/api/v1.0/email/send",
              JSON.stringify({
                lib_version: "4.4.1",
                user_id: d,
                service_id: n,
                template_id: o,
                template_params: i,
              }),
              { "Content-type": "application/json" }
            ));
  },
  aS = (n) => {
    if (!n || n.nodeName !== "FORM")
      throw "The 3rd parameter is expected to be the HTML form element or the style selector of the form";
  },
  uS = (n) => (typeof n == "string" ? document.querySelector(n) : n),
  cS = async (n, o, i, l) => {
    const u = Pu(l),
      d = u.publicKey || Xe.publicKey,
      f = u.blockHeadless || Xe.blockHeadless,
      h = Xe.storageProvider || u.storageProvider,
      m = { ...Xe.blockList, ...u.blockList },
      v = { ...Xe.limitRate, ...u.limitRate };
    if (f && Zh(navigator)) return Promise.reject(Jh());
    const y = uS(i);
    Xh(d, n, o), aS(y);
    const w = new FormData(y);
    return em(m, w)
      ? Promise.reject(tm())
      : (await nm(location.pathname, v, h))
      ? Promise.reject(rm())
      : (w.append("lib_version", "4.4.1"),
        w.append("service_id", n),
        w.append("template_id", o),
        w.append("user_id", d),
        Yh("/api/v1.0/email/send-form", w));
  },
  dS = { init: eS, send: lS, sendForm: cS, EmailJSResponseStatus: oi },
  fS = () => {
    const n = S.useRef(),
      o = (i) => {
        i.preventDefault(),
          dS
            .sendForm("service_qg6mx96", "template_z0gpvwp", n.current, {
              publicKey: "wqDtWctCA5Ox7KL0T",
            })
            .then(
              () => {
                alert("Message sent successfully!"), i.target.reset();
              },
              (l) => {
                alert("Failed to send the message, please try again.");
              }
            );
      };
    return g.jsxs("div", {
      className: "min-h-screen bg-background",
      children: [
        g.jsx(no, {}),
        g.jsx("section", {
          className: "py-16 px-4",
          children: g.jsxs("div", {
            className: "container mx-auto max-w-6xl",
            children: [
              g.jsxs("div", {
                className: "text-center mb-12",
                children: [
                  g.jsx("h1", {
                    className:
                      "text-4xl md:text-5xl font-bold mb-4 text-foreground",
                    children: "Contact Us",
                  }),
                  g.jsx("p", {
                    className:
                      "text-lg text-muted-foreground max-w-2xl mx-auto",
                    children:
                      "Get in touch with us for inquiries, reservations, or any questions. We're here to help make your stay unforgettable.",
                  }),
                ],
              }),
              g.jsxs("div", {
                className: "grid grid-cols-1 lg:grid-cols-2 gap-8",
                children: [
                  g.jsxs("div", {
                    className: "space-y-6",
                    children: [
                      g.jsx(wn, {
                        className: "border-border",
                        children: g.jsx(Sn, {
                          className: "p-6",
                          children: g.jsxs("div", {
                            className: "flex items-start space-x-4",
                            children: [
                              g.jsx(Lp, {
                                className: "w-6 h-6 text-primary mt-1",
                              }),
                              g.jsxs("div", {
                                children: [
                                  g.jsx("h3", {
                                    className:
                                      "font-semibold text-lg mb-2 text-foreground",
                                    children: "Address",
                                  }),
                                  g.jsxs("p", {
                                    className: "text-muted-foreground",
                                    children: [
                                      "Mbarara City",
                                      g.jsx("br", {}),
                                      "Uganda",
                                      g.jsx("br", {}),
                                      "Uganda",
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                        }),
                      }),
                      g.jsx(wn, {
                        className: "border-border",
                        children: g.jsx(Sn, {
                          className: "p-6",
                          children: g.jsxs("div", {
                            className: "flex items-start space-x-4",
                            children: [
                              g.jsx(Dp, {
                                className: "w-6 h-6 text-primary mt-1",
                              }),
                              g.jsxs("div", {
                                children: [
                                  g.jsx("h3", {
                                    className:
                                      "font-semibold text-lg mb-2 text-foreground",
                                    children: "Phone",
                                  }),
                                  g.jsxs("p", {
                                    className: "text-muted-foreground",
                                    children: [
                                      "Main: +256 790448115",
                                      g.jsx("br", {}),
                                      "Reservations: +256 790448115",
                                      g.jsx("br", {}),
                                      "Report: +256 790448115",
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                        }),
                      }),
                      g.jsx(wn, {
                        className: "border-border",
                        children: g.jsx(Sn, {
                          className: "p-6",
                          children: g.jsxs("div", {
                            className: "flex items-start space-x-4",
                            children: [
                              g.jsx(Ap, {
                                className: "w-6 h-6 text-primary mt-1",
                              }),
                              g.jsxs("div", {
                                children: [
                                  g.jsx("h3", {
                                    className:
                                      "font-semibold text-lg mb-2 text-foreground",
                                    children: "Email",
                                  }),
                                  g.jsxs("p", {
                                    className: "text-muted-foreground",
                                    children: [
                                      "General: sbvhotel@gmail.com",
                                      g.jsx("br", {}),
                                      "Reservations: sbvhotel@gmail.com",
                                      g.jsx("br", {}),
                                      "Events: sbvhotel@gmail.com",
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                        }),
                      }),
                      g.jsx(wn, {
                        className: "border-border",
                        children: g.jsx(Sn, {
                          className: "p-6",
                          children: g.jsxs("div", {
                            className: "flex items-start space-x-4",
                            children: [
                              g.jsx(uy, {
                                className: "w-6 h-6 text-primary mt-1",
                              }),
                              g.jsxs("div", {
                                children: [
                                  g.jsx("h3", {
                                    className:
                                      "font-semibold text-lg mb-2 text-foreground",
                                    children: "Hours",
                                  }),
                                  g.jsxs("p", {
                                    className: "text-muted-foreground",
                                    children: [
                                      "Front Desk: 24/7",
                                      g.jsx("br", {}),
                                      "Dining: 6:00 AM - 11:00 PM",
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                        }),
                      }),
                    ],
                  }),
                  g.jsx(wn, {
                    className: "border-border",
                    children: g.jsxs(Sn, {
                      className: "p-6",
                      children: [
                        g.jsx("h2", {
                          className: "text-2xl font-bold mb-6 text-foreground",
                          children: "Make a Reservation or Inquiry",
                        }),
                        g.jsx("form", {
                          ref: n,
                          onSubmit: o,
                          className: "space-y-4",
                          children: g.jsxs("div", {
                            children: [
                              g.jsxs("div", {
                                children: [
                                  g.jsx("label", {
                                    htmlFor: "name",
                                    className:
                                      "block text-sm font-medium mb-2 text-foreground",
                                    children: "Name",
                                  }),
                                  g.jsx(Ts, {
                                    id: "name",
                                    name: "name",
                                    type: "text",
                                    placeholder: "Your Fullname",
                                    required: !0,
                                    className: "border-border",
                                  }),
                                ],
                              }),
                              g.jsxs("div", {
                                children: [
                                  g.jsx("label", {
                                    htmlFor: "email",
                                    className:
                                      "block text-sm font-medium mb-2 text-foreground",
                                    children: "Email",
                                  }),
                                  g.jsx(Ts, {
                                    id: "email",
                                    name: "email",
                                    type: "email",
                                    placeholder: "customer@email.com",
                                    required: !0,
                                    className: "border-border",
                                  }),
                                ],
                              }),
                              g.jsxs("div", {
                                children: [
                                  g.jsx("label", {
                                    htmlFor: "phone",
                                    className:
                                      "block text-sm font-medium mb-2 text-foreground",
                                    children: "Phone",
                                  }),
                                  g.jsx(Ts, {
                                    id: "phone",
                                    name: "phone",
                                    type: "tel",
                                    placeholder: "(+256) 790448115",
                                    required: !0,
                                    className: "border-border",
                                  }),
                                ],
                              }),
                              g.jsxs("div", {
                                children: [
                                  g.jsx("label", {
                                    htmlFor: "message",
                                    className:
                                      "block text-sm font-medium mb-2 text-foreground",
                                    children: "Message",
                                  }),
                                  g.jsx(Gh, {
                                    id: "message",
                                    name: "message",
                                    placeholder: "Tell us about your inquiry",
                                    required: !0,
                                    className: "border-border",
                                    rows: 6,
                                  }),
                                ],
                              }),
                              g.jsx(qr, {
                                type: "submit",
                                className:
                                  "mt-4 bg-primary hover:bg-primary/90",
                                children: g.jsx("input", {
                                  type: "submit",
                                  value: "Send",
                                }),
                              }),
                            ],
                          }),
                        }),
                      ],
                    }),
                  }),
                ],
              }),
            ],
          }),
        }),
        g.jsx(ro, {}),
      ],
    });
  },
  pS = () => {
    const n = to();
    return (
      S.useEffect(() => {
        console.error(
          "404 Error: User attempted to access non-existent route:",
          n.pathname
        );
      }, [n.pathname]),
      g.jsx(
        <Router>
          <Routes>
            <Route path="/test/" element={<TestComponent />} />{" "}
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Router>
      ),
      g.jsx("div", {
        className: "flex min-h-screen items-center justify-center bg-muted",
        children: g.jsxs("div", {
          className: "text-center",
          children: [
            g.jsx("h1", {
              className: "mb-4 text-4xl font-bold",
              children: "404",
            }),
            g.jsx("p", {
              className: "mb-4 text-xl text-muted-foreground",
              children: "Oops! Page not found",
            }),
            g.jsx("a", {
              href: "/",
              className: "text-primary underline hover:text-primary/90",
              children: "Return to Home",
            }),
          ],
        }),
      })
    );
  },
  hS = new Bw(),
  mS = () =>
    g.jsx(Vw, {
      client: hS,
      children: g.jsxs(vw, {
        children: [
          g.jsx(e0, {}),
          g.jsx(_0, {}),
          g.jsx($1, {
            children: g.jsxs(L1, {
              children: [
                g.jsx(qn, { path: "/", element: g.jsx(q1, {}) }),
                g.jsx(qn, { path: "/rooms", element: g.jsx(G1, {}) }),
                g.jsx(qn, { path: "/about", element: g.jsx(Y1, {}) }),
                g.jsx(qn, { path: "/gallery", element: g.jsx(X1, {}) }),
                g.jsx(qn, { path: "/services", element: g.jsx(Z1, {}) }),
                g.jsx(qn, { path: "/contact", element: g.jsx(fS, {}) }),
                g.jsx(qn, { path: "*", element: g.jsx(pS, {}) }),
              ],
            }),
          }),
        ],
      }),
    });
iv.createRoot(document.getElementById("root")).render(g.jsx(mS, {}));
