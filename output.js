//Sat Aug 17 2024 08:30:48 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
//Sat Aug 17 2024 08:29:04 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const $ = new Env("\u6148\u6653");
{
  (() => {
    function b(F) {
      "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? b = function (I) {
        return typeof I;
      } : b = function (I) {
        return I && "function" == typeof Symbol && I.constructor === Symbol && I !== Symbol.prototype ? "symbol" : typeof I;
      };
      return b(F);
    }
    function c(F, G) {
      var I = "undefined" != typeof Symbol && F[Symbol.iterator] || F["@@iterator"];
      if (!I) {
        if (Array.isArray(F) || (I = d(F)) || G && F && "number" == typeof F.length) {
          if (I) {
            F = I;
          }
          var J = 0,
            K = function () {};
          return {
            s: K,
            n: function () {
              var P = {
                done: !0
              };
              return J >= F.length ? P : {
                done: !1,
                value: F[J++]
              };
            },
            e: function (P) {
              throw P;
            },
            f: K
          };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }
      var L,
        M = !0,
        N = !1;
      return {
        s: function () {
          I = I.call(F);
        },
        n: function () {
          var R = I.next();
          M = R.done;
          return R;
        },
        e: function (R) {
          N = !0;
          L = R;
        },
        f: function () {
          try {
            M || null == I.return || I.return();
          } finally {
            if (N) {
              throw L;
            }
          }
        }
      };
    }
    function d(F, G) {
      if (F) {
        if ("string" == typeof F) {
          return f(F, G);
        }
        var I = {}.toString.call(F).slice(8, -1);
        "Object" === I && F.constructor && (I = F.constructor.name);
        return "Map" === I || "Set" === I ? Array.from(F) : "Arguments" === I || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(I) ? f(F, G) : 0;
      }
    }
    function f(F, G) {
      if (null == G || G > F.length) {
        G = F.length;
      }
      for (var I = 0, J = Array(G); I < G; I++) {
        J[I] = F[I];
      }
      return J;
    }
    function g() {
      g = function () {
        return J;
      };
      var H,
        J = {},
        K = Object.prototype,
        M = K.hasOwnProperty,
        N = Object.defineProperty || function (aj, ak, al) {
          aj[ak] = al.value;
        },
        O = "function" == typeof Symbol ? Symbol : {},
        P = O.iterator || "@@iterator",
        Q = O.asyncIterator || "@@asyncIterator",
        V = O.toStringTag || "@@toStringTag";
      function W(aj, ak, al) {
        var am = {};
        am.value = al;
        am.enumerable = !0;
        am.configurable = !0;
        am.writable = !0;
        Object.defineProperty(aj, ak, am);
        return aj[ak];
      }
      try {
        W({}, "");
      } catch (ak) {
        W = function (al, am, an) {
          return al[am] = an;
        };
      }
      function X(am, an, ao, ap) {
        var aq = an && an.prototype instanceof a4 ? an : a4,
          ar = Object.create(aq.prototype),
          as = new ah(ap || []);
        N(ar, "_invoke", {
          value: ad(am, ao, as)
        });
        return ar;
      }
      function Y(am, an, ao) {
        try {
          return {
            type: "normal",
            arg: am.call(an, ao)
          };
        } catch (at) {
          var aq = {
            type: "throw",
            arg: at
          };
          return aq;
        }
      }
      J.wrap = X;
      var Z = "suspendedStart",
        a0 = "suspendedYield",
        a1 = "executing",
        a2 = "completed",
        a3 = {};
      function a4() {}
      function a5() {}
      function a6() {}
      var a7 = {};
      W(a7, P, function () {
        return this;
      });
      var a8 = Object.getPrototypeOf,
        a9 = a8 && a8(a8(ai([])));
      if (a9 && a9 !== K && M.call(a9, P)) {
        a7 = a9;
      }
      a6.prototype = a4.prototype = Object.create(a7);
      var aa = a6.prototype;
      function ab(am) {
        ["next", "throw", "return"].forEach(function (ap) {
          W(am, ap, function (as) {
            return this._invoke(ap, as);
          });
        });
      }
      function ac(am, an) {
        function ar(as, at, au, av) {
          var ax = Y(am[as], am, at);
          if ("throw" !== ax.type) {
            var ay = ax.arg,
              az = ay.value;
            return az && "object" == b(az) && M.call(az, "__await") ? an.resolve(az.__await).then(function (aC) {
              ar("next", aC, au, av);
            }, function (aC) {
              ar("throw", aC, au, av);
            }) : an.resolve(az).then(function (aC) {
              ay.value = aC;
              au(ay);
            }, function (aC) {
              return ar("throw", aC, au, av);
            });
          }
          av(ax.arg);
        }
        var ap;
        N(this, "_invoke", {
          value: function (as, at) {
            function au() {
              return new an(function (ax, ay) {
                ar(as, at, ax, ay);
              });
            }
            return ap ? ap = ap.then(au, au) : ap = au();
          }
        });
      }
      function ad(am, an, ao) {
        var aq = Z;
        return function (ar, as) {
          if (aq === a1) {
            throw Error("Generator is already running");
          }
          if (aq === a2) {
            if ("throw" === ar) {
              throw as;
            }
            var at = {};
            at.value = H;
            at.done = !0;
            return at;
          }
          for (ao.method = ar, ao.arg = as;;) {
            var au = ao.delegate;
            if (au) {
              var av = ae(au, ao);
              if (av) {
                if (av === a3) {
                  continue;
                }
                return av;
              }
            }
            if ("next" === ao.method) {
              ao.sent = ao._sent = ao.arg;
            } else {
              if ("throw" === ao.method) {
                if (aq === Z) {
                  throw aq = a2, ao.arg;
                }
                ao.dispatchException(ao.arg);
              } else {
                if ("return" === ao.method) {
                  ao.abrupt("return", ao.arg);
                }
              }
            }
            aq = a1;
            var aw = Y(am, an, ao);
            if ("normal" === aw.type) {
              ao.done ? aq = a2 : aq = a0;
              if (aw.arg === a3) {
                continue;
              }
              var ax = {};
              ax.value = aw.arg;
              ax.done = ao.done;
              return ax;
            }
            if ("throw" === aw.type) {
              aq = a2;
              ao.method = "throw";
              ao.arg = aw.arg;
            }
          }
        };
      }
      function ae(am, an) {
        {
          var ar = an.method,
            as = am.iterator[ar];
          continue;
        }
        {
          if ("throw" === at.type) {
            an.method = "throw";
            an.arg = at.arg;
            an.delegate = null;
            return a3;
          }
          continue;
        }
        {
          var at = Y(as, am.iterator, an.arg);
          continue;
        }
        {
          if (as === H) {
            an.delegate = null;
            "throw" === ar && am.iterator.return && (an.method = "return", an.arg = H, ae(am, an), "throw" === an.method) || "return" !== ar && (an.method = "throw", an.arg = new TypeError("The iterator does not provide a '" + ar + "' method"));
            return a3;
          }
          continue;
        }
        {
          return aq ? aq.done ? (an[am.resultName] = aq.value, an.next = am.nextLoc, "return" !== an.method && (an.method = "next", an.arg = H), an.delegate = null, a3) : aq : (an.method = "throw", an.arg = new TypeError("iterator result is not an object"), an.delegate = null, a3);
        }
        {
          var aq = at.arg;
          continue;
        }
        {
          var ar = an.method,
            as = am.iterator[ar];
          continue;
        }
        {
          if ("throw" === at.type) {
            an.method = "throw";
            an.arg = at.arg;
            an.delegate = null;
            return a3;
          }
          continue;
        }
        {
          var at = Y(as, am.iterator, an.arg);
          continue;
        }
        {
          var at = Y(as, am.iterator, an.arg);
          continue;
        }
        {
          if ("throw" === at.type) {
            an.method = "throw";
            an.arg = at.arg;
            an.delegate = null;
            return a3;
          }
          continue;
        }
        {
          var at = Y(as, am.iterator, an.arg);
          continue;
        }
        {
          var aq = at.arg;
          continue;
        }
        {
          var ar = an.method,
            as = am.iterator[ar];
          continue;
        }
        {
          if ("throw" === at.type) {
            an.method = "throw";
            an.arg = at.arg;
            an.delegate = null;
            return a3;
          }
          continue;
        }
        {
          var at = Y(as, am.iterator, an.arg);
          continue;
        }
        {
          return aq ? aq.done ? (an[am.resultName] = aq.value, an.next = am.nextLoc, "return" !== an.method && (an.method = "next", an.arg = H), an.delegate = null, a3) : aq : (an.method = "throw", an.arg = new TypeError("iterator result is not an object"), an.delegate = null, a3);
        }
        {
          var aq = at.arg;
          continue;
        }
        {
          var ar = an.method,
            as = am.iterator[ar];
          continue;
        }
        {
          if ("throw" === at.type) {
            an.method = "throw";
            an.arg = at.arg;
            an.delegate = null;
            return a3;
          }
          continue;
        }
        {
          var at = Y(as, am.iterator, an.arg);
          continue;
        }
      }
      function af(am) {
        var ao = {};
        ao.tryLoc = am[0];
        var ap = ao;
        1 in am && (ap.catchLoc = am[1]);
        2 in am && (ap.finallyLoc = am[2], ap.afterLoc = am[3]);
        this.tryEntries.push(ap);
      }
      function ag(am) {
        var an = am.completion || {};
        an.type = "normal";
        delete an.arg;
        am.completion = an;
      }
      function ah(am) {
        var an = {
          tryLoc: "root"
        };
        this.tryEntries = [an];
        am.forEach(af, this);
        this.reset(!0);
      }
      function ai(am) {
        if (am || "" === am) {
          var ao = am[P];
          if (ao) {
            return ao.call(am);
          }
          if ("function" == typeof am.next) {
            return am;
          }
          if (!isNaN(am.length)) {
            var ap = -1,
              aq = function as() {
                for (; ++ap < am.length;) {
                  if (M.call(am, ap)) {
                    as.value = am[ap];
                    as.done = !1;
                    return as;
                  }
                }
                as.value = H;
                as.done = !0;
                return as;
              };
            return aq.next = aq;
          }
        }
        throw new TypeError(b(am) + " is not iterable");
      }
      a5.prototype = a6;
      N(aa, "constructor", {
        value: a6,
        configurable: !0
      });
      N(a6, "constructor", {
        value: a5,
        configurable: !0
      });
      a5.displayName = W(a6, V, "GeneratorFunction");
      J.isGeneratorFunction = function (am) {
        var an = "function" == typeof am && am.constructor;
        return !!an && (an === a5 || "GeneratorFunction" === (an.displayName || an.name));
      };
      J.mark = function (am) {
        Object.setPrototypeOf ? Object.setPrototypeOf(am, a6) : (am.__proto__ = a6, W(am, V, "GeneratorFunction"));
        am.prototype = Object.create(aa);
        return am;
      };
      J.awrap = function (am) {
        var an = {};
        an.__await = am;
        return an;
      };
      ab(ac.prototype);
      W(ac.prototype, Q, function () {
        return this;
      });
      J.AsyncIterator = ac;
      J.async = function (am, an, ao, ap, aq) {
        if (0 === aq) {
          aq = Promise;
        }
        var as = new ac(X(am, an, ao, ap), aq);
        return J.isGeneratorFunction(an) ? as : as.next().then(function (au) {
          return au.done ? au.value : as.next();
        });
      };
      ab(aa);
      W(aa, V, "Generator");
      W(aa, P, function () {
        return this;
      });
      W(aa, "toString", function () {
        return "[object Generator]";
      });
      J.keys = function (am) {
        var ao = Object(am),
          ap = [];
        for (var aq in ao) ap.push(aq);
        ap.reverse();
        return function ar() {
          for (; ap.length;) {
            var as = ap.pop();
            if (as in ao) {
              ar.value = as;
              ar.done = !1;
              return ar;
            }
          }
          ar.done = !0;
          return ar;
        };
      };
      J.values = ai;
      ah.prototype = {
        constructor: ah,
        reset: function (am) {
          this.prev = 0;
          this.next = 0;
          this.sent = this._sent = H;
          this.done = !1;
          this.delegate = null;
          this.method = "next";
          this.arg = H;
          this.tryEntries.forEach(ag);
          if (!am) {
            for (var an in this) if ("t" === an.charAt(0) && M.call(this, an) && !isNaN(+an.slice(1))) {
              this[an] = H;
            }
          }
        },
        stop: function () {
          this.done = !0;
          var am = this.tryEntries[0].completion;
          if ("throw" === am.type) {
            throw am.arg;
          }
          return this.rval;
        },
        dispatchException: function (am) {
          if (this.done) {
            throw am;
          }
          var ao = this;
          function av(aw, ax) {
            ar.type = "throw";
            ar.arg = am;
            ao.next = aw;
            ax && (ao.method = "next", ao.arg = H);
            return !!ax;
          }
          for (var ap = this.tryEntries.length - 1; ap >= 0; --ap) {
            var aq = this.tryEntries[ap],
              ar = aq.completion;
            if ("root" === aq.tryLoc) {
              return av("end");
            }
            if (aq.tryLoc <= this.prev) {
              var as = M.call(aq, "catchLoc"),
                at = M.call(aq, "finallyLoc");
              if (as && at) {
                if (this.prev < aq.catchLoc) {
                  return av(aq.catchLoc, !0);
                }
                if (this.prev < aq.finallyLoc) {
                  return av(aq.finallyLoc);
                }
              } else {
                if (as) {
                  if (this.prev < aq.catchLoc) {
                    return av(aq.catchLoc, !0);
                  }
                } else {
                  if (!at) {
                    throw Error("try statement without catch or finally");
                  }
                  if (this.prev < aq.finallyLoc) {
                    return av(aq.finallyLoc);
                  }
                }
              }
            }
          }
        },
        abrupt: function (am, an) {
          for (var ap = this.tryEntries.length - 1; ap >= 0; --ap) {
            var aq = this.tryEntries[ap];
            if (aq.tryLoc <= this.prev && M.call(aq, "finallyLoc") && this.prev < aq.finallyLoc) {
              var ar = aq;
              break;
            }
          }
          if (ar && ("break" === am || "continue" === am) && ar.tryLoc <= an && an <= ar.finallyLoc) {
            ar = null;
          }
          var as = ar ? ar.completion : {};
          as.type = am;
          as.arg = an;
          return ar ? (this.method = "next", this.next = ar.finallyLoc, a3) : this.complete(as);
        },
        complete: function (am, an) {
          if ("throw" === am.type) {
            throw am.arg;
          }
          "break" === am.type || "continue" === am.type ? this.next = am.arg : "return" === am.type ? (this.rval = this.arg = am.arg, this.method = "return", this.next = "end") : "normal" === am.type && an && (this.next = an);
          return a3;
        },
        finish: function (am) {
          for (var ao = this.tryEntries.length - 1; ao >= 0; --ao) {
            var ap = this.tryEntries[ao];
            if (ap.finallyLoc === am) {
              this.complete(ap.completion, ap.afterLoc);
              ag(ap);
              return a3;
            }
          }
        },
        catch: function (am) {
          for (var an = this.tryEntries.length - 1; an >= 0; --an) {
            var ao = this.tryEntries[an];
            if (ao.tryLoc === am) {
              var ap = ao.completion;
              if ("throw" === ap.type) {
                var aq = ap.arg;
                ag(ao);
              }
              return aq;
            }
          }
          throw Error("illegal catch attempt");
        },
        delegateYield: function (am, an, ao) {
          this.delegate = {
            iterator: ai(am),
            resultName: an,
            nextLoc: ao
          };
          "next" === this.method && (this.arg = H);
          return a3;
        }
      };
      return J;
    }
    function h(F, G, H, I, J, K, L) {
      try {
        var N = F[K](L),
          O = N.value;
      } catch (Q) {
        return H(Q);
      }
      N.done ? G(O) : Promise.resolve(O).then(I, J);
    }
    function i(F) {
      return function () {
        var I = this,
          J = arguments;
        return new Promise(function (K, L) {
          var N = F.apply(I, J);
          function O(Q) {
            h(N, K, L, O, P, "next", Q);
          }
          function P(Q) {
            h(N, K, L, O, P, "throw", Q);
          }
          O(0);
        });
      };
    }
    var j = $.getdata("CiXiao") || "",
      k = 0,
      l = "",
      m = "",
      n = "",
      o = "";
    function p() {
      return q.apply(this, arguments);
    }
    function q() {
      q = i(g().mark(function F() {
        var J, K, N, P, Q, V, W, X, Y, Z, a0, a1, a2, a3, a4, a5, a6, a7, a8, a9, aa, ab, ac, ad, ae, af, ag, ah, ai, aj, ak, al, am, an, ao, ap, aq, ar;
        return g().wrap(function (at) {
          for (;;) {
            switch (at.prev = at.next) {
              case 0:
                {
                  if (console.log("\u4F5C\u8005\uFF1A@xzxxn777\n\u9891\u9053\uFF1Ahttps://t.me/xzxxn777\n\u7FA4\u7EC4\uFF1Ahttps://t.me/xzxxn7777\n\u81EA\u7528\u673A\u573A\u63A8\u8350\uFF1Ahttps://xn--diqv0fut7b.com\n"), j) {
                    at.next = 6;
                    break;
                  }
                  console.log("\u5148\u53BBboxjs\u586B\u5199\u8D26\u53F7\u5BC6\u7801");
                  at.next = 5;
                  return D("\u5148\u53BBboxjs\u586B\u5199\u8D26\u53F7\u5BC6\u7801");
                }
              case 5:
                {
                  return at.abrupt("return");
                }
              case 6:
                {
                  at.next = 8;
                  return B();
                }
              case 8:
                {
                  k = at.sent;
                  J = j.split(" ");
                  K = c(J);
                  at.prev = 11;
                  K.s();
                }
              case 13:
                {
                  if ((N = K.n()).done) {
                    at.next = 111;
                    break;
                  }
                  P = N.value;
                  console.log("\u968F\u673A\u751F\u6210device");
                  m = A();
                  console.log(m);
                  phone_number = P.split("&")[0];
                  o = P.split("&")[1];
                  console.log("\u7528\u6237\uFF1A".concat(phone_number, "\u5F00\u59CB\u4EFB\u52A1"));
                  console.log("\u83B7\u53D6userinfoId");
                  Q = Date.now().toString() + w(5) + x();
                  V = k.md5("@#@$AXdm123%)(ds".concat(Q, "api/UserInfo/GetRedNumberModel"));
                  at.next = 26;
                  return t("/api/UserInfo/GetRedNumberModel?newspapergroupId=15403&sign=".concat(V, "&stamp=").concat(Q));
                }
              case 26:
                {
                  W = at.sent;
                  n = W.data.userinfo.Id;
                  console.log(n);
                  at.next = 31;
                  return r("/ReadActivityTaskList?json=true");
                }
              case 31:
                {
                  X = at.sent;
                  Y = c(X.data);
                  at.prev = 33;
                  Y.s();
                }
              case 35:
                {
                  if ((Z = Y.n()).done) {
                    at.next = 101;
                    break;
                  }
                  a0 = Z.value;
                  console.log(a0.activityTypeName);
                  at.next = 40;
                  return r("/ReadActivityTaskData?yunyingActivityTaskId=".concat(a0.yunyingActivityTaskId, "&json=true"));
                }
              case 40:
                {
                  if (a1 = at.sent, a1.data.totalCount != a1.data.completedCount) {
                    at.next = 44;
                    break;
                  }
                  console.log("\u5DF2\u5B8C\u6210");
                  return at.abrupt("continue", 99);
                }
              case 44:
                {
                  a2 = c(a1.data.taskDetails);
                  at.prev = 45;
                  a2.s();
                }
              case 47:
                {
                  if ((a3 = a2.n()).done) {
                    at.next = 68;
                    break;
                  }
                  if (a4 = a3.value, !a4.isComplete) {
                    at.next = 51;
                    break;
                  }
                  return at.abrupt("continue", 66);
                }
              case 51:
                {
                  for (console.log("\u6587\u7AE0\uFF1A".concat(a4.title)), a5 = a4.url.split("?")[1], a6 = {}, a7 = a5.split("&"), a8 = 0, a9 = a7.length; a8 < a9; a8++) {
                    aa = a7[a8].split("=");
                    a6[aa[0]] = aa[1];
                  }
                  ab = Date.now().toString() + w(5) + x();
                  ac = k.md5("@#@$AXdm123%)(ds".concat(ab, "api/Yunying/ReadArticle"));
                  at.next = 60;
                  return t("api/Yunying/ReadArticle?articleType=1&newspapergroupId=".concat(a6.NewspaperGroupId, "&sign=").concat(ac, "&stamp=").concat(ab, "&ArticleId=").concat(a4.articleId, "&taskDetailId=").concat(a4.taskDetailId));
                }
              case 60:
                {
                  ad = at.sent;
                  console.log(ad.message);
                  at.next = 64;
                  return r("/ChceckCompleteTaskDetail?taskDetailId=".concat(a4.taskDetailId, "&yunyingActivityTaskId=").concat(a0.yunyingActivityTaskId, "&round=").concat(a0.round, "&json=true"));
                }
              case 64:
                {
                  ae = at.sent;
                  console.log(ae.success);
                }
              case 66:
                {
                  at.next = 47;
                  break;
                }
              case 68:
                {
                  at.next = 73;
                  break;
                }
              case 70:
                {
                  at.prev = 70;
                  at.t0 = at.catch(45);
                  a2.e(at.t0);
                }
              case 73:
                {
                  at.prev = 73;
                  a2.f();
                  return at.finish(73);
                }
              case 76:
                {
                  at.next = 78;
                  return r("/CanDrawPrizeList?json=true");
                }
              case 78:
                {
                  af = at.sent;
                  console.log("\u62E5\u6709".concat(af.data.length, "\u6B21\u62BD\u5956"));
                  ag = c(af.data);
                  at.prev = 81;
                  ag.s();
                }
              case 83:
                {
                  if ((ah = ag.n()).done) {
                    at.next = 91;
                    break;
                  }
                  ai = ah.value;
                  at.next = 87;
                  return r("/DrawAward?awardRecordId=".concat(ai.awardRecordId, "&json=true"));
                }
              case 87:
                {
                  aj = at.sent;
                  1 == aj.data.awardType ? (console.log("\u62BD\u5956\u83B7\u5F97\uFF1A".concat(null == aj || null === (ak = aj.data) || 0 === ak ? 0 : ak.award).concat(null == aj || null === (al = aj.data) || 0 === al ? 0 : al.name)), l += "\u7528\u6237\uFF1A".concat(phone_number, " \u62BD\u5956\u83B7\u5F97\uFF1A").concat(null == aj || null === (am = aj.data) || 0 === am ? 0 : am.award).concat(null == aj || null === (an = aj.data) || 0 === an ? 0 : an.name, "\n")) : 2 == aj.data.awardType ? (console.log("\u62BD\u5956\u83B7\u5F97\uFF1A".concat(null == aj || null === (ao = aj.data) || 0 === ao ? 0 : ao.scoreAward).concat(null == aj || null === (ap = aj.data) || 0 === ap ? 0 : ap.name)), l += "\u7528\u6237\uFF1A".concat(phone_number, " \u62BD\u5956\u83B7\u5F97\uFF1A").concat(null == aj || null === (aq = aj.data) || 0 === aq ? 0 : aq.scoreAward).concat(null == aj || null === (ar = aj.data) || 0 === ar ? 0 : ar.name, "\n")) : (console.log("\u8C22\u8C22\u53C2\u4E0E"), l += "\u7528\u6237\uFF1A".concat(phone_number, " \u62BD\u5956\u83B7\u5F97\uFF1A\u8C22\u8C22\u53C2\u4E0E\n"));
                }
              case 89:
                {
                  at.next = 83;
                  break;
                }
              case 91:
                {
                  at.next = 96;
                  break;
                }
              case 93:
                {
                  at.prev = 93;
                  at.t1 = at.catch(81);
                  ag.e(at.t1);
                }
              case 96:
                {
                  at.prev = 96;
                  ag.f();
                  return at.finish(96);
                }
              case 99:
                {
                  at.next = 35;
                  break;
                }
              case 101:
                {
                  at.next = 106;
                  break;
                }
              case 103:
                {
                  at.prev = 103;
                  at.t2 = at.catch(33);
                  Y.e(at.t2);
                }
              case 106:
                {
                  at.prev = 106;
                  Y.f();
                  return at.finish(106);
                }
              case 109:
                {
                  at.next = 13;
                  break;
                }
              case 111:
                {
                  at.next = 116;
                  break;
                }
              case 113:
                {
                  at.prev = 113;
                  at.t3 = at.catch(11);
                  K.e(at.t3);
                }
              case 116:
                {
                  at.prev = 116;
                  K.f();
                  return at.finish(116);
                }
              case 119:
                {
                  if (!l) {
                    at.next = 122;
                    break;
                  }
                  at.next = 122;
                  return D(l);
                }
              case 122:
                {}
              case "end":
                {
                  return at.stop();
                }
            }
          }
        }, F, null, [[11, 113, 116, 119], [33, 103, 106, 109], [45, 70, 73, 76], [81, 93, 96, 99]]);
      }));
      return q.apply(this, arguments);
    }
    function r(F) {
      return s.apply(this, arguments);
    }
    function s() {
      s = i(g().mark(function G(H) {
        return g().wrap(function (J) {
          for (;;) {
            switch (J.prev = J.next) {
              case 0:
                {
                  return J.abrupt("return", new Promise(function (L) {
                    var M = {
                      url: "https://cxh5.xiaodingkeji.com/h5api/api/YunyingV720".concat(H),
                      headers: {
                        pragma: "no-cache",
                        "cache-control": "no-cache",
                        accept: "application/json, text/plain, */*",
                        "x-token": o,
                        "x-requested-with": "XMLHttpRequest",
                        "sec-fetch-site": "same-origin",
                        "sec-fetch-mode": "cors",
                        "sec-fetch-dest": "empty",
                        "accept-encoding": "gzip, deflate",
                        "accept-language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
                        "user-agent": "Mozilla/5.0 (Linux; Android 11; 21091116AC Build/RP1A.200720.011; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/94.0.4606.85 Mobile Safari/537.36 GdyBridgeWebView;xdinformation;x-token:[" + o + "];x-userinfoId:[" + n + "];x-device:[" + m + "]"
                      }
                    };
                    $.get(M, function () {
                      var O = i(g().mark(function P(Q, R, S) {
                        return g().wrap(function (U) {
                          for (;;) {
                            switch (U.prev = U.next) {
                              case 0:
                                {
                                  if (U.prev = 0, !Q) {
                                    U.next = 6;
                                    break;
                                  }
                                  console.log("".concat(JSON.stringify(Q)));
                                  console.log("".concat($.name, " API\u8BF7\u6C42\u5931\u8D25\uFF0C\u8BF7\u68C0\u67E5\u7F51\u8DEF\u91CD\u8BD5"));
                                  U.next = 9;
                                  break;
                                }
                              case 6:
                                {
                                  U.next = 8;
                                  return $.wait(2000);
                                }
                              case 8:
                                {
                                  L(JSON.parse(S));
                                }
                              case 9:
                                {
                                  U.next = 14;
                                  break;
                                }
                              case 11:
                                {
                                  U.prev = 11;
                                  U.t0 = U.catch(0);
                                  $.logErr(U.t0, R);
                                }
                              case 14:
                                {
                                  U.prev = 14;
                                  L();
                                  return U.finish(14);
                                }
                              case 17:
                                {}
                              case "end":
                                {
                                  return U.stop();
                                }
                            }
                          }
                        }, P, null, [[0, 11, 14, 17]]);
                      }));
                      return function (Q, R, S) {
                        return O.apply(this, arguments);
                      };
                    }());
                  }));
                }
              case 1:
                {}
              case "end":
                {
                  return J.stop();
                }
            }
          }
        }, G);
      }));
      return s.apply(this, arguments);
    }
    function t(F) {
      return u.apply(this, arguments);
    }
    function u() {
      u = i(g().mark(function F(G) {
        return g().wrap(function (I) {
          for (;;) {
            switch (I.prev = I.next) {
              case 0:
                {
                  return I.abrupt("return", new Promise(function (K) {
                    var L = {
                      "accept-version": "200",
                      "x-version": "730",
                      version: "7.17.7",
                      "x-token": o,
                      Connection: "Keep-Alive",
                      "accept-encoding": "gzip",
                      "user-agent": "okhttp/3.11.0"
                    };
                    var M = {
                      url: "https://cxapi.xiaodingkeji.com/".concat(G),
                      headers: L
                    };
                    $.get(M, function () {
                      var O = i(g().mark(function P(Q, R, S) {
                        return g().wrap(function (U) {
                          for (;;) {
                            switch (U.prev = U.next) {
                              case 0:
                                {
                                  if (U.prev = 0, !Q) {
                                    U.next = 6;
                                    break;
                                  }
                                  console.log("".concat(JSON.stringify(Q)));
                                  console.log("".concat($.name, " API\u8BF7\u6C42\u5931\u8D25\uFF0C\u8BF7\u68C0\u67E5\u7F51\u8DEF\u91CD\u8BD5"));
                                  U.next = 9;
                                  break;
                                }
                              case 6:
                                {
                                  U.next = 8;
                                  return $.wait(2000);
                                }
                              case 8:
                                {
                                  K(JSON.parse(S));
                                }
                              case 9:
                                {
                                  U.next = 14;
                                  break;
                                }
                              case 11:
                                {
                                  U.prev = 11;
                                  U.t0 = U.catch(0);
                                  $.logErr(U.t0, R);
                                }
                              case 14:
                                {
                                  U.prev = 14;
                                  K();
                                  return U.finish(14);
                                }
                              case 17:
                                {}
                              case "end":
                                {
                                  return U.stop();
                                }
                            }
                          }
                        }, P, null, [[0, 11, 14, 17]]);
                      }));
                      return function (Q, R, S) {
                        return O.apply(this, arguments);
                      };
                    }());
                  }));
                }
              case 1:
                {}
              case "end":
                {
                  return I.stop();
                }
            }
          }
        }, F);
      }));
      return u.apply(this, arguments);
    }
    function v() {
      var F = new Date(),
        G = function (N) {
          return N.toString().padStart(2, "0");
        },
        H = F.getFullYear(),
        I = G(F.getMonth() + 1),
        J = G(F.getDate()),
        K = G(F.getHours()),
        L = G(F.getMinutes()),
        M = G(F.getSeconds());
      return "".concat(H).concat(I).concat(J).concat(K).concat(L).concat(M);
    }
    function w(F) {
      for (var G = "abcdefghijklmnopqrstuvwxyz0123456789", H = "", I = 0; I < F; I++) {
        H += G.charAt(Math.floor(36 * Math.random()));
      }
      return H;
    }
    function x() {
      var F = v();
      F || (F = w(8));
      return w(2) + F.substring(3) + w(3);
    }
    function y() {
      for (var F = "", G = 0; G < 16; G++) {
        var H = Math.floor(16 * Math.random());
        F += "0123456789abcdef"[H];
      }
      return F;
    }
    function z() {
      return "xxxxxxxx-xxxx-6xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (G) {
        var H = 16 * Math.random() | 0,
          I = "x" === G ? H : 3 & H | 8;
        return I.toString(16);
      });
    }
    function A() {
      var F = y(),
        G = z().replace(/-/g, "");
      CryptoJS = k.createCryptoJS();
      return CryptoJS.SHA1("".concat(F, "|unknown|").concat(G)).toString().toUpperCase();
    }
    function B() {
      return C.apply(this, arguments);
    }
    function C() {
      C = i(g().mark(function G() {
        var H;
        return g().wrap(function I(J) {
          for (;;) {
            switch (J.prev = J.next) {
              case 0:
                {
                  if (H = $.getdata("Utils_Code") || "", !H || !Object.keys(H).length) {
                    J.next = 5;
                    break;
                  }
                  console.log("\u2705 ".concat($.name, ": \u7F13\u5B58\u4E2D\u5B58\u5728Utils\u4EE3\u7801, \u8DF3\u8FC7\u4E0B\u8F7D"));
                  eval(H);
                  return J.abrupt("return", creatUtils());
                }
              case 5:
                {
                  console.log("\uD83D\uDE80 ".concat($.name, ": \u5F00\u59CB\u4E0B\u8F7DUtils\u4EE3\u7801"));
                  return J.abrupt("return", new Promise(function () {
                    var L = i(g().mark(function M(N) {
                      return g().wrap(function P(Q) {
                        for (;;) {
                          switch (Q.prev = Q.next) {
                            case 0:
                              {
                                $.getScript("https://mirror.ghproxy.com/https://raw.githubusercontent.com/xzxxn777/Surge/main/Utils/Utils.js").then(function (S) {
                                  $.setdata(S, "Utils_Code");
                                  eval(S);
                                  console.log("\u2705 Utils\u52A0\u8F7D\u6210\u529F, \u8BF7\u7EE7\u7EED");
                                  N(creatUtils());
                                });
                              }
                            case 1:
                              {}
                            case "end":
                              {
                                return Q.stop();
                              }
                          }
                        }
                      }, M);
                    }));
                    return function (N) {
                      return L.apply(this, arguments);
                    };
                  }()));
                }
              case 7:
                {}
              case "end":
                {
                  return J.stop();
                }
            }
          }
        }, G);
      }));
      return C.apply(this, arguments);
    }
    function D(F) {
      return E.apply(this, arguments);
    }
    function E() {
      E = i(g().mark(function H(I) {
        return g().wrap(function (J) {
          for (;;) {
            switch (J.prev = J.next) {
              case 0:
                {
                  $.msg($.name, "", I);
                }
              case 1:
                {}
              case "end":
                {
                  return J.stop();
                }
            }
          }
        }, H);
      }));
      return E.apply(this, arguments);
    }
    i(g().mark(function F() {
      return g().wrap(function (H) {
        for (;;) {
          switch (H.prev = H.next) {
            case 0:
              {
                H.next = 2;
                return p();
              }
            case 2:
              {}
            case "end":
              {
                return H.stop();
              }
          }
        }
      }, F);
    }))().catch(function (G) {
      $.log(G);
    }).finally(function () {
      $.done({});
    });
  })();
}
function Env(t, e) {
  class s {
    constructor(t) {
      this.env = t;
    }
    send(t, e = "GET") {
      "string" == typeof t ? t = {
        url: t
      } : t = t;
      let s = this.get;
      if ("POST" === e) {
        s = this.post;
      }
      const o = new Promise((e, o) => {
        s.call(this, t, (t, s, i) => {
          t ? o(t) : e(s);
        });
      });
      return t.timeout ? ((t, e = 1000) => Promise.race([t, new Promise((t, s) => {
        setTimeout(() => {
          s(new Error("\u8BF7\u6C42\u8D85\u65F6"));
        }, e);
      })]))(o, t.timeout) : o;
    }
    get(t) {
      return this.send.call(this.env, t);
    }
    post(t) {
      return this.send.call(this.env, t, "POST");
    }
  }
  return new class {
    constructor(t, e) {
      this.logLevels = {
        debug: 0,
        info: 1,
        warn: 2,
        error: 3
      };
      this.logLevelPrefixs = {
        debug: "[DEBUG] ",
        info: "[INFO] ",
        warn: "[WARN] ",
        error: "[ERROR] "
      };
      this.logLevel = "info";
      this.name = t;
      this.http = new s(this);
      this.data = null;
      this.dataFile = "box.dat";
      this.logs = [];
      this.isMute = !1;
      this.isNeedRewrite = !1;
      this.logSeparator = "\n";
      this.encoding = "utf-8";
      this.startTime = new Date().getTime();
      Object.assign(this, e);
      this.log("", `🔔${this.name}, 开始!`);
    }
    getEnv() {
      return "undefined" != typeof $environment && $environment["surge-version"] ? "Surge" : "undefined" != typeof $environment && $environment["stash-version"] ? "Stash" : "undefined" != typeof $task ? "Quantumult X" : "undefined" != typeof $loon ? "Loon" : "undefined" != typeof $rocket ? "Shadowrocket" : 0;
    }
    isQuanX() {
      return "Quantumult X" === this.getEnv();
    }
    isSurge() {
      return "Surge" === this.getEnv();
    }
    isLoon() {
      return "Loon" === this.getEnv();
    }
    isShadowrocket() {
      return "Shadowrocket" === this.getEnv();
    }
    isStash() {
      return "Stash" === this.getEnv();
    }
    toObj(t, e = null) {
      try {
        return JSON.parse(t);
      } catch {
        return e;
      }
    }
    toStr(t, e = null, ...s) {
      try {
        return JSON.stringify(t, ...s);
      } catch {
        return e;
      }
    }
    getjson(t, e) {
      let s = e;
      if (this.getdata(t)) {
        try {
          s = JSON.parse(this.getdata(t));
        } catch {}
      }
      return s;
    }
    setjson(t, e) {
      try {
        return this.setdata(JSON.stringify(t), e);
      } catch {
        return !1;
      }
    }
    getScript(t) {
      return new Promise(e => {
        this.get({
          url: t
        }, (t, s, o) => e(o));
      });
    }
    runScript(t, e) {
      return new Promise(s => {
        let o = this.getdata("@chavy_boxjs_userCfgs.httpapi");
        o ? o = o.replace(/\n/g, "").trim() : o = o;
        let i = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
        i ? i = 1 * i : i = 20;
        e && e.timeout ? i = e.timeout : i = i;
        const [r, a] = o.split("@"),
          n = {
            url: `http://${a}/v1/scripting/evaluate`,
            body: {
              script_text: t,
              mock_type: "cron",
              timeout: i
            },
            headers: {
              "X-Key": r,
              Accept: "*/*"
            },
            policy: "DIRECT",
            timeout: i
          };
        this.post(n, (t, e, o) => s(o));
      }).catch(t => this.logErr(t));
    }
    lodash_get(t, e, s = 0) {
      const o = e.replace(/\[(\d+)\]/g, ".$1").split(".");
      let i = t;
      for (const t of o) if (i = Object(i)[t], 0 === i) {
        return s;
      }
      return i;
    }
    lodash_set(t, e, s) {
      Object(t) !== t || (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), e.slice(0, -1).reduce((t, s, o) => Object(t[s]) === t[s] ? t[s] : Math.abs(e[o + 1]) >> 0 == +e[o + 1] ? t[s] = [] : t[s] = {}, t)[e[e.length - 1]] = s);
      return t;
    }
    getdata(t) {
      let e = this.getval(t);
      if (/^@/.test(t)) {
        const [, s, o] = /^@(.*?)\.(.*?)$/.exec(t),
          i = s ? this.getval(s) : "";
        if (i) {
          try {
            const t = JSON.parse(i);
            t ? e = this.lodash_get(t, o, "") : e = e;
          } catch (t) {
            e = "";
          }
        }
      }
      return e;
    }
    setdata(t, e) {
      let s = !1;
      if (/^@/.test(e)) {
        const [, o, i] = /^@(.*?)\.(.*?)$/.exec(e),
          r = this.getval(o),
          a = o ? "null" === r ? null : r || "{}" : "{}";
        try {
          const e = JSON.parse(a);
          this.lodash_set(e, i, t);
          s = this.setval(JSON.stringify(e), o);
        } catch (e) {
          const r = {};
          this.lodash_set(r, i, t);
          s = this.setval(JSON.stringify(r), o);
        }
      } else {
        s = this.setval(t, e);
      }
      return s;
    }
    getval(t) {
      switch (this.getEnv()) {
        case "Surge":
          {}
        case "Loon":
          {}
        case "Stash":
          {}
        case "Shadowrocket":
          {
            return $persistentStore.read(t);
          }
        case "Quantumult X":
          {
            return $prefs.valueForKey(t);
          }
        default:
          {
            return this.data && this.data[t] || null;
          }
      }
    }
    setval(t, e) {
      switch (this.getEnv()) {
        case "Surge":
          {}
        case "Loon":
          {}
        case "Stash":
          {}
        case "Shadowrocket":
          {
            return $persistentStore.write(t, e);
          }
        case "Quantumult X":
          {
            return $prefs.setValueForKey(t, e);
          }
        default:
          {
            return this.data && this.data[e] || null;
          }
      }
    }
    initGotEnv(t) {
      this.got ? this.got = this.got : this.got = require("got");
      this.cktough ? this.cktough = this.cktough : this.cktough = require("tough-cookie");
      this.ckjar ? this.ckjar = this.ckjar : this.ckjar = new this.cktough.CookieJar();
      t && (t.headers ? t.headers = t.headers : t.headers = {}, t && (t.headers ? t.headers = t.headers : t.headers = {}, 0 === t.headers.cookie && 0 === t.headers.Cookie && 0 === t.cookieJar && (t.cookieJar = this.ckjar)));
    }
    get(t, e = () => {}) {
      switch (t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"], delete t.headers["content-type"], delete t.headers["content-length"]), t.params && (t.url += "?" + this.queryStr(t.params)), 0 === t.followRedirect || t.followRedirect || ((this.isSurge() || this.isLoon()) && (t["auto-redirect"] = !1), this.isQuanX() && (t.opts ? t.opts.redirection = !1 : t.opts = {
        redirection: !1
      })), this.getEnv()) {
        case "Surge":
          {}
        case "Loon":
          {}
        case "Stash":
          {}
        case "Shadowrocket":
          {}
        default:
          {
            this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
              "X-Surge-Skip-Scripting": !1
            }));
            $httpClient.get(t, (t, s, o) => {
              !t && s && (s.body = o, s.status ? s.statusCode = s.status : s.statusCode = s.statusCode, s.status = s.statusCode);
              e(t, s, o);
            });
            break;
          }
        case "Quantumult X":
          {
            this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
              hints: !1
            }));
            $task.fetch(t).then(t => {
              const {
                statusCode: s,
                statusCode: o,
                headers: i,
                body: r,
                bodyBytes: a
              } = t;
              e(null, {
                status: s,
                statusCode: o,
                headers: i,
                body: r,
                bodyBytes: a
              }, r, a);
            }, t => e(t && t.error || "UndefinedError"));
          }
      }
    }
    post(t, e = () => {}) {
      const s = t.method ? t.method.toLocaleLowerCase() : "post";
      switch (t.body && t.headers && !t.headers["Content-Type"] && !t.headers["content-type"] && (t.headers["content-type"] = "application/x-www-form-urlencoded"), t.headers && (delete t.headers["Content-Length"], delete t.headers["content-length"]), 0 === t.followRedirect || t.followRedirect || ((this.isSurge() || this.isLoon()) && (t["auto-redirect"] = !1), this.isQuanX() && (t.opts ? t.opts.redirection = !1 : t.opts = {
        redirection: !1
      })), this.getEnv()) {
        case "Surge":
          {}
        case "Loon":
          {}
        case "Stash":
          {}
        case "Shadowrocket":
          {}
        default:
          {
            this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
              "X-Surge-Skip-Scripting": !1
            }));
            $httpClient[s](t, (t, s, o) => {
              !t && s && (s.body = o, s.status ? s.statusCode = s.status : s.statusCode = s.statusCode, s.status = s.statusCode);
              e(t, s, o);
            });
            break;
          }
        case "Quantumult X":
          {
            t.method = s;
            this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
              hints: !1
            }));
            $task.fetch(t).then(t => {
              const {
                statusCode: s,
                statusCode: o,
                headers: i,
                body: r,
                bodyBytes: a
              } = t;
              e(null, {
                status: s,
                statusCode: o,
                headers: i,
                body: r,
                bodyBytes: a
              }, r, a);
            }, t => e(t && t.error || "UndefinedError"));
          }
      }
    }
    time(t, e = null) {
      const s = e ? new Date(e) : new Date();
      let o = {
        "M+": s.getMonth() + 1,
        "d+": s.getDate(),
        "H+": s.getHours(),
        "m+": s.getMinutes(),
        "s+": s.getSeconds(),
        "q+": Math.floor((s.getMonth() + 3) / 3),
        S: s.getMilliseconds()
      };
      if (/(y+)/.test(t)) {
        t = t.replace(RegExp.$1, (s.getFullYear() + "").substr(4 - RegExp.$1.length));
      }
      for (let e in o) if (new RegExp("(" + e + ")").test(t)) {
        t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? o[e] : ("00" + o[e]).substr(("" + o[e]).length));
      }
      return t;
    }
    queryStr(t) {
      let e = "";
      for (const s in t) {
        let o = t[s];
        if (null != o && "" !== o) {
          "object" == typeof o && (o = JSON.stringify(o));
          e += `${s}=${o}&`;
        }
      }
      e = e.substring(0, e.length - 1);
      return e;
    }
    msg(e = t, s = "", o = "", i = {}) {
      const r = t => {
        const {
          $open: e,
          $copy: s,
          $media: o,
          $mediaMime: i
        } = t;
        switch (typeof t) {
          case 0:
            {
              return t;
            }
          case "string":
            {
              switch (this.getEnv()) {
                case "Surge":
                  {}
                case "Stash":
                  {}
                default:
                  {
                    return {
                      url: t
                    };
                  }
                case "Loon":
                  {}
                case "Shadowrocket":
                  {
                    return t;
                  }
                case "Quantumult X":
                  {
                    return {
                      "open-url": t
                    };
                  }
              }
            }
          case "object":
            {
              switch (this.getEnv()) {
                case "Surge":
                  {}
                case "Stash":
                  {}
                case "Shadowrocket":
                  {}
                default:
                  {
                    const r = {};
                    let a = t.openUrl || t.url || t["open-url"] || e;
                    if (a) {
                      Object.assign(r, {
                        action: "open-url",
                        url: a
                      });
                    }
                    let n = t["update-pasteboard"] || t.updatePasteboard || s;
                    n && Object.assign(r, {
                      action: "clipboard",
                      text: n
                    });
                    if (o) {
                      let t, e, s;
                      if (o.startsWith("http")) {
                        t = o;
                      } else {
                        if (o.startsWith("data:")) {
                          const [t] = o.split(";"),
                            [, i] = o.split(",");
                          e = i;
                          s = t.replace("data:", "");
                        } else {
                          e = o;
                          s = (t => {
                            const e = {
                              JVBERi0: "application/pdf",
                              R0lGODdh: "image/gif",
                              R0lGODlh: "image/gif",
                              iVBORw0KGgo: "image/png",
                              "/9j/": "image/jpg"
                            };
                            for (var s in e) if (0 === t.indexOf(s)) {
                              return e[s];
                            }
                            return null;
                          })(o);
                        }
                      }
                      Object.assign(r, {
                        "media-url": t,
                        "media-base64": e,
                        "media-base64-mime": i ?? s
                      });
                    }
                    Object.assign(r, {
                      "auto-dismiss": t["auto-dismiss"],
                      sound: t.sound
                    });
                    return r;
                  }
                case "Loon":
                  {
                    const s = {};
                    let i = t.openUrl || t.url || t["open-url"] || e;
                    if (i) {
                      Object.assign(s, {
                        openUrl: i
                      });
                    }
                    let r = t.mediaUrl || t["media-url"];
                    o?.startsWith("http") && (r = o);
                    r && Object.assign(s, {
                      mediaUrl: r
                    });
                    console.log(JSON.stringify(s));
                    return s;
                  }
                case "Quantumult X":
                  {
                    const i = {};
                    let r = t["open-url"] || t.url || t.openUrl || e;
                    if (r) {
                      Object.assign(i, {
                        "open-url": r
                      });
                    }
                    let a = t["media-url"] || t.mediaUrl;
                    o?.startsWith("http") && (a = o);
                    a && Object.assign(i, {
                      "media-url": a
                    });
                    let n = t["update-pasteboard"] || t.updatePasteboard || s;
                    n && Object.assign(i, {
                      "update-pasteboard": n
                    });
                    console.log(JSON.stringify(i));
                    return i;
                  }
              }
            }
          default:
            {
              return;
            }
        }
      };
      if (!this.isMute) {
        switch (this.getEnv()) {
          case "Surge":
            {}
          case "Loon":
            {}
          case "Stash":
            {}
          case "Shadowrocket":
            {}
          default:
            {
              $notification.post(e, s, o, r(i));
              break;
            }
          case "Quantumult X":
            {
              $notify(e, s, o, r(i));
            }
        }
      }
      if (!this.isMuteLog) {
        let t = ["", "==============\uD83D\uDCE3\u7CFB\u7EDF\u901A\u77E5\uD83D\uDCE3=============="];
        t.push(e);
        s && t.push(s);
        o && t.push(o);
        console.log(t.join("\n"));
        this.logs = this.logs.concat(t);
      }
    }
    debug(...t) {
      if (this.logLevels[this.logLevel] <= this.logLevels.debug) {
        t.length > 0 && (this.logs = [...this.logs, ...t]);
        console.log(`${this.logLevelPrefixs.debug}${t.map(t => t ?? String(t)).join(this.logSeparator)}`);
      }
    }
    info(...t) {
      if (this.logLevels[this.logLevel] <= this.logLevels.info) {
        t.length > 0 && (this.logs = [...this.logs, ...t]);
        console.log(`${this.logLevelPrefixs.info}${t.map(t => t ?? String(t)).join(this.logSeparator)}`);
      }
    }
    warn(...t) {
      if (this.logLevels[this.logLevel] <= this.logLevels.warn) {
        t.length > 0 && (this.logs = [...this.logs, ...t]);
        console.log(`${this.logLevelPrefixs.warn}${t.map(t => t ?? String(t)).join(this.logSeparator)}`);
      }
    }
    error(...t) {
      if (this.logLevels[this.logLevel] <= this.logLevels.error) {
        t.length > 0 && (this.logs = [...this.logs, ...t]);
        console.log(`${this.logLevelPrefixs.error}${t.map(t => t ?? String(t)).join(this.logSeparator)}`);
      }
    }
    log(...t) {
      t.length > 0 && (this.logs = [...this.logs, ...t]);
      console.log(t.map(t => t ?? String(t)).join(this.logSeparator));
    }
    logErr(t, e) {
      this.getEnv();
      this.log("", `❗️${this.name}, 错误!`, e, t);
    }
    wait(t) {
      return new Promise(e => setTimeout(e, t));
    }
    done(t = {}) {
      const e = (new Date().getTime() - this.startTime) / 1000;
      this.log("", `🔔${this.name}, 结束! 🕛 ${e} 秒`);
      this.log();
      this.getEnv();
      $done(t);
    }
  }(t, e);
}