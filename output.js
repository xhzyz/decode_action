//Thu May 01 2025 01:10:58 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
NAME = "恐龙打工日记";
VALY = ["kldgrj"];
CK = "";
let L = process.env.weixinToken,
  l = process.env.xqkdddl || "",
  f = process.env.WECHAT_SERVER || "",
  K = "vip.dsrhkj.cn",
  M = "/app/index.php?i=3&t=0&v=1.15&from=wxapp&c=entry&a=wxapp&do=distribute&m=bh_cat",
  w = "https://" + K;
const k = ["\n", "@"];
usid = 0;
class x {
  constructor(e) {
    this.num = ++usid;
    this.one = 0;
    this.strck = e;
    this.token = e.split("#")[0];
  }
  async moshi() {
    const D = {
      QkpsL: "wxid",
      QWfOJ: function (B, b) {
        return B === b;
      },
      NVGwq: "VnOVQ",
      OcPVP: "当前使用CK模式",
      JhdxP: function (B, b) {
        return B !== b;
      },
      EbDnh: "tPhpF",
      XnEop: "AzcpH",
      qLXnQ: "0|2|4|1|3"
    };
    const X = D;
    if (!this.token.startsWith(X.QkpsL)) {
      X.QWfOJ(X.NVGwq, X.NVGwq) ? (console.log(X.OcPVP), this.wxcode = 0) : X = B.toUpperCase();
    } else {
      if (X.JhdxP(X.EbDnh, X.XnEop)) {
        const b = X.qLXnQ.split("|");
        let j = 0;
        while (true) {
          switch (b[j++]) {
            case "0":
              console.log("当前使用code模式");
              continue;
            case "1":
              this.wxcode = 1;
              continue;
            case "2":
              this.wxid = this.token;
              continue;
            case "3":
              this.token = this.ck;
              continue;
            case "4":
              await this.readck();
              continue;
          }
          break;
        }
      } else {
        B.log(this.num + " " + b + "：" + j.info.msg);
      }
    }
  }
  headers() {
    const b = {
      "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36 MicroMessenger/7.0.20.1781(0x6700143B) NetType/WIFI MiniProgramEnv/Windows WindowsWechat/WMPF WindowsWechat(0x63090b13) XWEB/9129",
      xweb_xhr: "1",
      referer: "https://servicewechat.com/wxebc856cb722e51d1/2/page-frame.html",
      "accept-language": "zh-CN,zh;q=0.9"
    };
    return b;
  }
  async hqdl() {
    let B = await $.task("get", l, {
      "User-Agent": "Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Mobile Safari/537.36"
    });
    this.dlip = B.split("\n")[0];
    console.log("账号" + this.num + "：代理IP：" + this.dlip);
  }
  async user_task_list() {
    await $.wait($.RT(1000, 3000));
    await this.list();
    await $.wait($.RT(1000, 3000));
  }
  async huoqucode() {
    this.one = 1;
    const X = Object.keys(this.headers()).find(W => W.toLowerCase() === "referer"),
      B = this.headers()[X],
      b = new URL(B).pathname.split("/")[1];
    let j = await $.task("post", f + "/wx/app/code", {
      "Content-Type": "application/json"
    }, "{\"wxid\": \"" + this.wxid + "\",\"appid\": \"" + b + "\"}");
    if (j.Code == 0) {
      let W = j.Data.code;
      await this.logintoken(W);
    } else {
      return;
    }
  }
  async logintoken(D) {
    let b = "获取ck";
    await $.wait($.RT(1000, 3000));
    let j = await this.task("get", "" + w + M + "&code=" + D + "&parent_id=&contr=noLogin&action=login&version=1.0.43", this.headers());
    if (j.status == 1) {
      this.token = j.info;
      this.ck = this.token;
      await this.writeck();
      await $.wait($.RT(3000, 5000));
    } else {
      let r = j.msg;
      console.log(this.num + " " + b + "：" + r);
      if (L !== undefined) {
        await this.wxpusher(r);
      }
      return;
    }
  }
  async login() {
    let B = "用户信息",
      b = await this.task("get", "" + w + M + "&action=home&contr=index&parent_id=0&token=" + this.token + "&is_new=1&version=1.0.43", this.headers());
    if (b.status == 1) {
      this.isLogin = true;
      let {
        nickname: W,
        currency: r,
        foodstuff: P,
        money: V,
        warehouse: Q
      } = b.info.member;
      this.warehouse = Q;
      this.num = "|" + W + "|";
      console.log(this.num + " 金币：" + r + " 💰：" + V + " 食物：" + P);
      if (!b.info.daily_food.status) {
        await $.wait($.RT(3000, 5000));
        await this.shiwu();
      }
      if (!b.info.is_sign) {
        await $.wait($.RT(3000, 5000));
        await this.qiandao();
      }
    } else {
      this.isLogin = false;
      let A = b.info;
      console.log(this.num + " " + B + "：" + A);
      if (A.includes("login") && this.wxcode && !this.one) {
        await this.huoqucode();
        await $.wait($.RT(3000, 5000));
        await this.login();
      } else {
        if (L) {
          await this.wxpusher(A);
        }
      }
    }
  }
  async qiandao() {
    let D = "签到",
      X = await this.task("get", "" + w + M + "&action=sign&contr=my&token=" + this.token + "&version=1.0.43", this.headers());
    if (X.status == 1) {
      console.log(this.num + " " + D + "：成功！");
      await $.wait($.RT(23000, 25000));
      if (this.warehouse > 0) {
        await $.wait($.RT(3000, 5000));
        await this.qiandaofanbei();
      }
    } else {
      let j = X.info;
      console.log(this.num + " " + D + "：" + j);
    }
  }
  async qiandaofanbei() {
    const D = {
      QvcQb: "get",
      JluZl: function (j, W) {
        return j == W;
      },
      Amtrh: function (j, W) {
        return j !== W;
      },
      dFgHQ: "YEClv",
      QzuZh: function (j, W) {
        return j === W;
      },
      Bzppi: "KmRVQ",
      ElskI: "xoGnS"
    };
    const X = D;
    let B = "贡献",
      b = await this.task(X.QvcQb, "" + w + M + "&action=upcurrency&contr=my&token=" + this.token + "&version=1.0.43", this.headers());
    if (X.JluZl(b.status, 1)) {
      X.Amtrh(X.dFgHQ, X.dFgHQ) ? X = B : console.log(this.num + " " + B + "：" + b.info.collect_currency + "金币");
    } else {
      if (X.QzuZh(X.Bzppi, X.ElskI)) {
        U.log("================ 请求 ================");
        h.log(z);
        A.log("================ 返回 ================");
        G.safeGet(n) ? o.log(Y.parse(T)) : q.log(a);
      } else {
        let r = b.info;
        console.log(this.num + " " + B + "：" + r);
      }
    }
  }
  async shiwu() {
    const D = {
      vUWvL: function (j, W) {
        return j + W;
      },
      jRapI: "http://",
      VoJSe: "get",
      ryvZI: function (j, W) {
        return j == W;
      },
      GaGtE: function (j, W) {
        return j === W;
      },
      OcWxf: "SJjCc",
      fLQji: function (j, W) {
        return j !== W;
      },
      QeOhM: "RmGbJ"
    };
    const X = D;
    let B = "食物",
      b = await this.task(X.VoJSe, "" + w + M + "&action=daily&contr=food&token=" + this.token + "&version=1.0.43", this.headers());
    if (X.ryvZI(b.status, 1)) {
      X.GaGtE(X.OcWxf, X.OcWxf) ? console.log(this.num + " " + B + "：领取成功！") : X = B;
    } else {
      if (X.fLQji(X.QeOhM, X.QeOhM)) {
        var r = {
          url: b,
          headers: j,
          body: W,
          proxy: X.vUWvL(X.jRapI, r)
        };
      } else {
        let r = b.info;
        console.log(this.num + " " + B + "：" + r);
      }
    }
  }
  async list() {
    let B = "广告id",
      b = await this.task("get", "" + w + M + "&action=index&contr=task&token=" + this.token + "&version=1.0.43", this.headers());
    if (b.status == 1) {
      let j = b.info.task.s;
      for (let W of j) {
        let {
          id: r
        } = W;
        await $.wait($.RT(23000, 23500));
        await this.guangao(r);
      }
    } else {
      let Q = b.info;
      console.log(this.num + " " + B + "：" + Q);
    }
  }
  async weishi() {
    let D = "喂食龙群",
      X = await this.task("get", "" + w + M + "&action=feed&contr=my&token=" + this.token + "&is_remind=1&version=1.0.43", this.headers());
    if (X.status == 1) {
      console.log(this.num + " " + D + "：加" + X.info.percentage + "体力");
    } else {
      let b = X.info;
      console.log(this.num + " " + D + "：" + b);
    }
  }
  async guangao(D) {
    let b = "📺",
      j = await this.task("get", "" + w + M + "&action=complete&contr=task&task_id=" + D + "&token=" + this.token + "&version=1.0.43", this.headers());
    if (j.status == 1) {
      console.log(this.num + " " + b + "：" + j.info.msg);
    } else {
      let P = j.info;
      console.log(this.num + " " + b + "：" + P);
    }
  }
  async xinxi() {
    let B = "用户信息",
      b = await this.task("get", "" + w + M + "&action=index&contr=my&token=" + this.token + "&version=1.0.43 ", this.headers());
    if (b.status == 1) {
      let {
        currency: j,
        foodstuff: W,
        bonus_level: r,
        money: P
      } = b.info.member;
      console.log(this.num + " 金币：" + j + " 💰：" + P + " 食物：" + W);
      if (W > 0) {
        await $.wait($.RT(3000, 5000));
        await this.weishi();
      }
      j > 100 && r == 1 && (await $.wait($.RT(3000, 5000)), await this.fenhong());
    } else {
      this.isLogin = false;
      let z = b.info;
      console.log(this.num + " " + B + "：" + z);
    }
  }
  async fenhong() {
    let B = "📺",
      b = await this.task("get", "" + w + M + "&action=upgrade&contr=index&token=" + this.token + "&version=1.0.43", this.headers());
    if (b.status == 1) {
      console.log(this.num + " " + B + "：" + b.info.msg);
    } else {
      let r = b.info;
      console.log(this.num + " " + B + "：" + r);
    }
  }
  async wxpusher(D) {
    const B = {
      "X-Requested-With": "com.tencent.mm",
      "User-Agent": "Dalvik/2.1.0 (Linux; U; Android 13; M2012K11AC Build/TKQ1.220829.002)"
    };
    let j = await $.task("get", "https://wxpusher.zjiecode.com/api/send/message/?appToken=" + L.split("#")[0] + "&content=" + encodeURI("" + L.split("#")[2] + NAME + "[" + this.num + "]:" + D) + "&uid=" + L.split("#")[1], B);
    if (j.code == 1000) {
      console.log("微信通知" + j.msg);
    } else {
      console.log("微信通知失败");
    }
  }
  async writeck() {
    let D = "写入";
    const X = require("fs"),
      B = "xg_" + VALY + ".json";
    let b = {};
    if (X.existsSync(B)) {
      try {
        const W = X.readFileSync(B, "utf8");
        b = JSON.parse(W);
      } catch (P) {
        console.log(D + "：读取文件失败", P);
        return;
      }
    }
    b[this.wxid] = {
      ck: this.ck
    };
    try {
      X.writeFileSync(B, JSON.stringify(b, null, 2));
      console.log(D + "：成功写入CK");
    } catch (U) {
      console.log(D + "：写入文件失败", U);
    }
  }
  async readck() {
    let D = "读取ck";
    const X = require("fs"),
      B = "xg_" + VALY + ".json";
    if (!X.existsSync(B)) {
      console.log(D + "：文件不存在，需要获取code");
      await this.huoqucode();
      return;
    }
    try {
      const j = X.readFileSync(B, "utf8"),
        W = JSON.parse(j);
      if (W[this.wxid] && W[this.wxid].ck) {
        this.ck = W[this.wxid].ck;
        console.log(D + "：成功");
      } else {
        console.log(D + "：未找到对应wxid的CK，需要获取code");
        await this.huoqucode();
      }
    } catch (Q) {
      console.log(D + "：读取文件失败", Q);
      await this.huoqucode();
    }
  }
  async task(X, B, b, j) {
    if (X == "delete") {
      X = X.toUpperCase();
    } else {
      X = X;
    }
    const r = require("request");
    if (X == "post") {
      delete b["Content-Type"];
      delete b["content-type"];
      delete b["Content-Length"];
      delete b["content-length"];
      if ($.safeGet(j)) {
        b["content-type"] = "application/json;charset=utf-8";
      } else {
        b["content-type"] = "application/x-www-form-urlencoded";
      }
      j && (b["content-length"] = $.lengthInUtf8Bytes(j));
    }
    if (X == "get") {
      delete b["Content-Type"];
      delete b["content-length"];
      delete b["content-type"];
      delete b["Content-Length"];
    }
    b.Host = B.replace("//", "/").split("/")[1];
    if (X.indexOf("T") < 0) {
      const m = {
        url: B,
        headers: b,
        body: j,
        timeout: 20000
      };
      var P = m;
    } else {
      var P = {
        url: B,
        headers: b,
        form: JSON.parse(j),
        timeout: 20000
      };
    }
    return new Promise(async T => {
      r[X.toLowerCase()](P, async (a, C, R) => {
        try {} catch (J) {} finally {
          if (!a) {
            if ($.safeGet(R)) {
              R = JSON.parse(R);
            } else {
              R = R;
            }
          } else {
            if (l == undefined) {
              console.log("请检查网络设置");
              R = JSON.parse("{\"code\":\"99\"}");
            } else {
              await this.hqdl();
              R = await this.task(X, B, b, j);
            }
          }
          return T(R);
        }
      });
    });
  }
}
$ = e0();
!(async () => {
  console.log("🔔[" + NAME + "] 📅 " + $.timenow(3) + ":" + $.timenow(4) + ":" + $.timenow(5));
  await $.ExamineCookie();
  console.log("当前使用本地网络运行脚本");
  for (let B of $.cookie_list) {
    console.log("-".repeat(20));
    let j = $.RT(150000, 490000);
    console.log("随机延迟" + Math.round(j * 0.001) + "秒");
    await $.wait(j);
    await B.moshi();
    await B.login();
    B.isLogin && (await B.user_task_list(), await B.xinxi());
  }
})().catch(D => {
  console.log(D);
}).finally(() => {});
function e0() {
  return new class {
    constructor() {
      this.cookie_list = [];
      this.message = "";
      this.CryptoJS = require("crypto-js");
      this.NodeRSA = require("node-rsa");
      this.request = require("request");
      this.Sha_Rsa = require("jsrsasign");
    }
    maskPhone(j) {
      if (j && j.length === 11) {
        return j.substring(0, 3) + "****" + j.substring(7);
      }
      return j;
    }
    async Multithreading(j, W, r) {
      let V = [];
      !r && (r = 1);
      while (r--) {
        for (let U of $.cookie_list) {
          V.push(U[j](W));
        }
      }
      await Promise.allSettled(V);
    }
    ExamineCookie() {
      let W = process.env[VALY] || CK,
        r = 0;
      if (W) {
        for (let V of k) {
          if (W.includes(V)) {
            this.splitor = V;
            break;
          }
        }
        for (let h of W.split(this.splitor).filter(z => !!z)) {
          $.cookie_list.push(new x(h));
        }
        r = $.cookie_list.length;
      } else {
        console.log("\n【" + NAME + "】：未填写变量: " + VALY);
      }
      console.log("共找到" + r + "个账号");
      return $.cookie_list;
    }
    task(j, W, r, P, V) {
      j == "delete" ? j = j.toUpperCase() : j = j;
      if (j == "post") {
        delete r["content-type"];
        delete r["Content-type"];
        delete r["content-Type"];
        $.safeGet(P) ? r["Content-Type"] = "application/json;charset=UTF-8" : r["Content-Type"] = "application/x-www-form-urlencoded";
        if (P) {
          r["Content-Length"] = $.lengthInUtf8Bytes(P);
        }
      }
      j == "get" && (delete r["content-type"], delete r["Content-type"], delete r["content-Type"], delete r["Content-Length"]);
      r.Host = W.replace("//", "/").split("/")[1];
      return new Promise(async H => {
        if (j.indexOf("T") < 0) {
          var y = {
            url: W,
            headers: r,
            body: P,
            proxy: "http://" + V
          };
        } else {
          var y = {
            url: W,
            headers: r,
            form: JSON.parse(P),
            proxy: "http://" + V
          };
        }
        if (!V) {
          delete y.proxy;
        }
        this.request[j.toLowerCase()](y, (q, a, C) => {
          try {
            if (C) {}
          } catch (s) {
            console.log(s, W + "\n" + r);
          } finally {
            let Z = "";
            if (!q) {
              if ($.safeGet(C)) {
                Z = JSON.parse(C);
              } else {
                C.indexOf("/") != -1 && C.indexOf("+") != -1 ? Z = $.decrypts(C) : Z = C;
              }
            } else {
              Z = W + "   API请求失败，请检查网络重试\n" + q;
            }
            return H(Z);
          }
        });
      });
    }
    lengthInUtf8Bytes(j) {
      let r = encodeURIComponent(j).match(/%[89ABab]/g);
      return j.length + (r ? r.length : 0);
    }
    randomArr(j) {
      return j[parseInt(Math.random() * j.length, 10)];
    }
    wait(j) {
      return new Promise(W => setTimeout(W, j));
    }
    time(j) {
      if (j == 10) {
        return Math.round(+new Date() / 1000);
      } else {
        return +new Date();
      }
    }
    timenow(j) {
      let P = new Date();
      if (j == undefined) {
        let V = new Date(),
          Q = V.getFullYear() + "-",
          U = (V.getMonth() + 1 < 10 ? "0" + (V.getMonth() + 1) : V.getMonth() + 1) + "-",
          h = V.getDate() < 10 ? "0" + V.getDate() : V.getDate() + " ",
          z = V.getHours() + ":",
          A = V.getMinutes() + ":",
          G = V.getSeconds() + 1 < 10 ? "0" + V.getSeconds() : V.getSeconds();
        return Q + U + h + z + A + G;
      } else {
        if (j == 0) {
          return P.getFullYear();
        } else {
          if (j == 1) {
            return P.getMonth() + 1 < 10 ? "0" + (P.getMonth() + 1) : P.getMonth() + 1;
          } else {
            if (j == 2) {
              return P.getDate() < 10 ? "0" + P.getDate() : P.getDate();
            } else {
              if (j == 3) {
                return P.getHours();
              } else {
                if (j == 4) {
                  return P.getMinutes();
                } else {
                  if (j == 5) {
                    return P.getSeconds() + 1 < 10 ? "0" + P.getSeconds() : P.getSeconds();
                  }
                }
              }
            }
          }
        }
      }
    }
    safeGet(j) {
      try {
        if (typeof JSON.parse(j) == "object") {
          return true;
        }
      } catch (V) {
        return false;
      }
    }
    SJS(j, W) {
      if (W == 0) {
        let P = "QWERTYUIOPASDFGHJKLZXCVBNM01234567890123456789",
          V = P.length,
          Q = "";
        for (let U = 0; U < j; U++) {
          Q += P.charAt(Math.floor(Math.random() * V));
        }
        return Q;
      } else {
        if (W == 1) {
          let A = "qwertyuiopasdfghjklzxcvbnm0123456789",
            G = A.length,
            n = "";
          for (let m = 0; m < j; m++) {
            n += A.charAt(Math.floor(Math.random() * G));
          }
          return n;
        } else {
          if (W == 2) {
            let H = "QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm0123456789",
              I = H.length,
              y = "";
            for (let o = 0; o < j; o++) {
              y += H.charAt(Math.floor(Math.random() * I));
            }
            return y;
          } else {
            let Y = "0123456789",
              T = Y.length,
              q = "";
            for (let a = 0; a < j; a++) {
              q += Y.charAt(Math.floor(Math.random() * T));
            }
            return q;
          }
        }
      }
    }
    udid(j) {
      function W() {
        return ((1 + Math.random()) * 65536 | 0).toString(16).substring(1);
      }
      let r = W() + W() + "-" + W() + "-" + W() + "-" + W() + "-" + W() + W() + W();
      return j == 0 ? r.toUpperCase() : r.toLowerCase();
    }
    encodeUnicode(j) {
      var W = [];
      for (var r = 0; r < j.length; r++) {
        W[r] = ("00" + j.charCodeAt(r).toString(16)).slice(-4);
      }
      return "\\u" + W.join("\\u");
    }
    decodeUnicode(j) {
      j = j.replace(/\\u/g, "%u");
      return unescape(unescape(j));
    }
    RT(j, W) {
      return Math.round(Math.random() * (W - j) + j);
    }
    arrNull(j) {
      var W = j.filter(P => {
        return P && P.trim();
      });
      return W;
    }
    nowtime() {
      return new Date(new Date().getTime() + new Date().getTimezoneOffset() * 60 * 1000 + 28800000);
    }
    timecs() {
      let j = $.nowtime();
      JSON.stringify(j).indexOf(" ") >= 0 && (j = j.replace(" ", "T"));
      return new Date(j).getTime() - 28800000;
    }
    rtjson(j, W, r, P) {
      return P == 0 ? JSON.stringify(j.split(W).reduce((V, Q) => {
        let U = Q.split(r);
        V[U[0].trim()] = U[1].trim();
        return V;
      }, {})) : j.split(W).reduce((V, Q) => {
        let U = Q.split(r);
        V[U[0].trim()] = U[1].trim();
        return V;
      }, {});
    }
    MD5Encrypt(j, W) {
      if (j == 0) {
        return this.CryptoJS.MD5(W).toString().toLowerCase();
      } else {
        if (j == 1) {
          return this.CryptoJS.MD5(W).toString().toUpperCase();
        } else {
          if (j == 2) {
            return this.CryptoJS.MD5(W).toString().substring(8, 24).toLowerCase();
          } else {
            if (j == 3) {
              return this.CryptoJS.MD5(W).toString().substring(8, 24).toUpperCase();
            }
          }
        }
      }
    }
    SHA_Encrypt(j, W, r) {
      return j == 0 ? this.CryptoJS[W](r).toString(this.CryptoJS.enc.Base64) : this.CryptoJS[W](r).toString();
    }
    HmacSHA_Encrypt(j, W, r, P) {
      return j == 0 ? this.CryptoJS[W](r, P).toString(this.CryptoJS.enc.Base64) : this.CryptoJS[W](r, P).toString();
    }
    Base64(j, W) {
      return j == 0 ? this.CryptoJS.enc.Base64.stringify(this.CryptoJS.enc.Utf8.parse(W)) : this.CryptoJS.enc.Utf8.stringify(this.CryptoJS.enc.Base64.parse(W));
    }
    DecryptCrypto(j, W, r, P, V, Q, U) {
      if (j == 0) {
        const h = this.CryptoJS[W].encrypt(this.CryptoJS.enc.Utf8.parse(V), this.CryptoJS.enc.Utf8.parse(Q), {
          iv: this.CryptoJS.enc.Utf8.parse(U),
          mode: this.CryptoJS.mode[r],
          padding: this.CryptoJS.pad[P]
        });
        return h.toString();
      } else {
        const z = this.CryptoJS[W].decrypt(V, this.CryptoJS.enc.Utf8.parse(Q), {
          iv: this.CryptoJS.enc.Utf8.parse(U),
          mode: this.CryptoJS.mode[r],
          padding: this.CryptoJS.pad[P]
        });
        return z.toString(this.CryptoJS.enc.Utf8);
      }
    }
    RSA(j, W) {
      const r = require("node-rsa");
      let P = new r("-----BEGIN PUBLIC KEY-----\n" + W + "\n-----END PUBLIC KEY-----");
      const V = {
        encryptionScheme: "pkcs1"
      };
      P.setOptions(V);
      return P.encrypt(j, "base64", "utf8");
    }
    SHA_RSA(j, W) {
      let r = this.Sha_Rsa.KEYUTIL.getKey("-----BEGIN PRIVATE KEY-----\n" + $.getNewline(W, 76) + "\n-----END PRIVATE KEY-----");
      const P = {
        alg: "SHA256withRSA"
      };
      let V = new this.Sha_Rsa.KJUR.crypto.Signature(P);
      V.init(r);
      V.updateString(j);
      let Q = V.sign(),
        U = this.Sha_Rsa.hextob64u(Q);
      return U;
    }
  }();
}
async function e1(D, X) {
  const b = require("node-rsa");
  let j = new b("-----BEGIN PUBLIC KEY-----\n" + X + "\n-----END PUBLIC KEY-----");
  const W = {
    encryptionScheme: "pkcs1"
  };
  j.setOptions(W);
  return j.encrypt(D, "base64", "utf8");
}
function e2(e) {
  const X = new Date(),
    B = X.getHours(),
    b = X.getMinutes(),
    j = X.getSeconds(),
    W = e === 0 ? String(B).padStart(2, "0") : String(B),
    r = e === 0 ? String(b).padStart(2, "0") : String(b),
    P = e === 0 ? String(j).padStart(2, "0") : String(j);
  return W + ":" + r + ":" + P;
}
function e3(e) {
  let X = "";
  const B = new Date(),
    b = B.getFullYear();
  e == 0 ? X = String(B.getMonth() + 1).padStart(2, "0") : X = String(B.getMonth() + 1);
  const j = String(B.getDate()).padStart(2, "0");
  return b + "-" + X + "-" + j;
}