//Wed Sep 11 2024 05:42:09 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const david_Tx = new david_wS("趣动"),
  david_To = "V1.0.0",
  david_TI = "qdngapp";
let david_Tv = david_Tx.getjson(david_TI, []);
const david_Th = david_Tx.isNode() ? require("fs") : "",
  david_TQ = david_Tx.isNode() ? require("ws") : "",
  david_TM = "david_cookies.js";
david_Tx.isNode() && !david_Th.existsSync(david_TM) && (david_Tx.log("🔔 外挂ck文件不存在，开始创建模版>>>"), david_Th.writeFileSync("./david_cookies.js", "//独立CK文件，主要用来处理多账号大数据量CK,注意JRTTAPP外边不用加引号，依葫芦画瓢。\n//今日头条(三个账号)\nlet JRTTAPP = [{},{},{}]\n//番茄小说(一个账号)\nlet FQXSAPP = [{}]\n//抖音极速版(两个账号)\nlet DYJSBAPP = [{},{}]\n    \nlet APPS = {\n    JRTT: JRTTAPP,\n    FQXS: FQXSAPP,\n    DYJSB: DYJSBAPP\n}\n\nmodule.exports = APPS", T => {}));
const david_TJ = david_Tx.isNode() ? require("http") : "",
  david_Tu = david_Tx.isNode() ? require("./sendNotify") : "",
  david_TE = david_Tx.isNode() ? require("./david_cookies") : "";
let david_TP = david_Tx.getdata("tguserid") || 1,
  david_TW = david_Tx.getdata("qdngactivecode") || 0,
  david_TV = david_Tx.getval("qdnguserck") || 1,
  david_Tt = david_Tx.getval("apiHost") || "http://106.15.104.124:8080";
david_Tx.getval("apiHosts") && (david_Tt = david_Tx.getval("apiHosts"));
let david_TX = david_Tx.getval("cleanCache") || false;
const david_Tc = 0;
let david_Ta = david_Tx.getval("tz") || "1",
  david_Tj = undefined,
  david_Ti = undefined,
  david_N0 = false,
  david_N1 = "qdng_cookies.json";
var david_N2 = "",
  david_N3 = "";
let david_N6 = "",
  david_N7 = [],
  david_N8 = [],
  david_Ny = [],
  david_NS = [],
  david_ND = [],
  david_NA = [],
  david_NZ = [],
  david_Nb = "",
  david_NF = "",
  david_NH = "",
  david_Nm = "",
  david_Nf = "",
  david_Ng = "",
  david_Nl = "",
  david_Nr = "",
  david_Ns = 1,
  david_Nd = 1,
  david_Nq = 1;
let david_Np = 1,
  david_NU = "",
  david_NY = "",
  david_NB = 3,
  david_Nk = "";
if (david_Tx.isNode()) {
  process.env.QDNGAPP ? david_Tv = JSON.parse(process.env.QDNGAPP) : david_Tv = david_TE.QDNG;
  david_TP = process.env.TGUSERID;
  david_TW = process.env.QDNGACTIVECODE;
  process.env.APIHOST && (david_Tt = process.env.APIHOST);
  process.env.APIHOSTS && (david_Tt = process.env.APIHOSTS);
  process.env.CLEANCACHE && (david_TX = JSON.parse(process.env.CLEANCACHE));
  david_N2 = new Date(new Date().getTime()).getHours();
  david_N3 = new Date(new Date().getTime()).getMinutes();
  david_Tx.log("🔔 当前环境: Node, 当前时间：" + david_N2 + "点");
} else {
  david_N2 = new Date().getHours();
  david_N3 = new Date().getMinutes();
  david_Tx.log("🔔 当前环境: 手机代理, 当前时间：" + david_N2 + "点");
}
!(async () => {
  if (typeof $request !== "undefined") {
    await david_NR();
  } else {
    if (!david_Tv) {
      david_Tx.log("📢 很抱歉，😭 没有找到账号信息！你确定配置账号信息了吗？");
      return;
    }
    david_Tx.log("📢 开始检测服务器接口状态>>>");
    let w = false;
    const y = david_Tt.split("&"),
      S = y.length;
    for (let H = 0; H < S; H++) {
      if (david_Tx.isNode()) {
        w = await david_Nv("" + y[H], 2500);
      } else {
        if (david_Tx.isSurge() || david_Tx.isLoon()) {
          w = await david_NQ("" + y[H], 2500);
        } else {
          w = await david_Nh("" + y[H], 2500);
        }
      }
      if (w == true) {
        david_Tt = y[H];
        david_Tx.log("📢 接口" + (H + 1) + "[" + y[H] + "]服务器接口正常! 🎉");
        break;
      }
      if (H == S - 1 && w == false) {
        david_Tx.log("📢 抱歉，所有接口都不可用, 请前往交流群置顶获取最新的接口地址! 😭");
        david_Tx.msg(david_Tx.name, "所有接口都不可用, 请尽快前往交流群置顶获取最新的接口地址!");
        return;
      }
    }
    if (!david_TW || !david_TP || david_TP == 1 || david_TW == 0 || david_TW.length != 32) {
      david_Tx.log("❗️ 抱歉，你没有权限运行此脚本, 请关注电报机器人: https://t.me/DavidLoveBot");
      return;
    }
    await david_Nn(david_TI, david_TP, david_TW);
    david_Tx.log("📢 " + david_Ng);
    david_Tx.log("🔔 当前脚本版本号: " + david_To + "，最新版本号: " + david_Nm);
    if (david_Nk != "") {
      let p = new Date(david_Nk).getTime(),
        U = new Date().getTime();
      if (U > p) {
        david_Tx.log("❗️ 抱歉，VIP到期了，请及时付费。");
        return;
      }
    }
    if (david_To < david_Nm) {
      david_Tx.log("❗️ 当前脚本版本号低于服务器版本，请更新脚本吧！");
      david_wN("🔔 当前脚本版本号低于服务器版本，请更新脚本吧！");
      return;
    }
    if (david_NH != true) {
      david_Tx.log("❗️ 抱歉, 此脚本已停用。");
      return;
    }
    if (david_NU != true) {
      david_Tx.log("❗️ 抱歉, 用户不合法，请先私聊机器人加入交流区。 https://t.me/DavidLoveBot");
      return;
    }
    if (david_NF != true) {
      david_Tx.log("❗️ 抱歉，你没有权限运行此脚本, 请关注电报机器人: https://t.me/DavidLoveBot");
      return;
    }
    david_Nr == true ? david_Tx.log("🔔 此脚本采用付费模式。🔒") : david_Tx.log("🔔 此脚本采用免费模式。🔓");
    if (david_Nk != "") {
      if (david_Nr == true) {
        let L = new Date(david_Nk).getTime(),
          O = new Date().getTime();
        if (O > L) {
          david_Tx.log("❗️ 抱歉，VIP到期了，请及时付费。");
          return;
        } else {
          david_Tx.log("🔔 尊敬的会员：您好，你是VIP用户！🔐");
        }
      }
    } else {
      if (david_Nr == true) {
        if (david_Nl != true) {
          david_Tx.log("❗️ 抱歉，你不是付费用户, 你没有权限运行此脚本, 需要使用请查看使用说明。");
          return;
        } else {
          david_Tx.log("🔔 尊敬的会员：您好，你是付费用户！🔐");
        }
      }
    }
    if (david_Ns > 1) {
      david_Tx.log("🔔 尊敬的会员，您好！你使用的是付费多用户授权账号，一次可以运行" + david_NB * david_Ns + "个账号。");
    }
    if (david_Nd > 1) {
      david_Tx.log("🔔 尊敬的会员，您好！你使用的是付费多用户授权账号，一共可以运行" + david_Nq + "次, 已经运行了" + david_Np + "次。");
    }
    if (david_Nf != true) {
      david_Tx.log("❗️ 抱歉,  该用户今天可能已经达到最大运行次数，明天再试吧！");
      return;
    }
    if (david_Tv.length > david_NB * david_Ns) {
      david_Tx.log("❗️ 当前用户一次最多运行" + david_NB * david_Ns + "个账号，需要增加账号请查看置顶说明。");
      return;
    }
    if (david_Tv.length == 0) {
      david_Tx.log("先抓取账号ck，再运行脚本吧！");
      return;
    }
    if (david_Np + david_Tv.length > david_Nq) {
      david_Tx.log("📢 一共发现了" + david_Tv.length + "个账号");
      david_Tx.log("❗️ 当前用户运行次数剩余" + (david_Nq - david_Np) + "次，还可以运行" + (david_Nq - david_Np) + "个账号，还需要" + (david_Tv.length - (david_Nq - david_Np)) + "次，可以通过赞赏后增加运行次数！");
      return;
    }
    david_Nk != "" && david_Tx.log("📢 你的会员有效期到： " + david_Nk);
    david_Tj = await david_NI(david_TX);
    david_Ti = david_Tj.createCryptoJS();
    david_Tx.log("📢 一共发现了" + david_Tv.length + "个账号");
    if (david_Tx.isNode()) {
      if (!david_Th.existsSync(david_N1)) {
        qdng_cks = {};
      } else {
        qdng_cks = JSON.parse(david_Th.readFileSync(david_N1, "utf8"));
      }
    }
    let D = [],
      A = david_Tv.length,
      Z = 0;
    if (david_Tx.isNode() && process.env.QDNG_THREAD_COUNT) {
      Z = parseInt(process.env.QDNG_THREAD_COUNT);
    } else {
      Z = A;
    }
    let b = david_Tv.length;
    if (Z >= A) {
      Z = A;
      b = 1;
      david_Tx.log("📢 你设置的线程数是" + Z + "，账号个数是" + A + "，" + b + "次可全部跑完。");
      for (let T1 = 0; T1 < david_Tv.length; T1++) {
        D.push(david_NG(T1));
        david_N7[T1] = "";
        david_N8[T1] = true;
        if (david_Tx.isNode()) {
          david_NS[T1] = 0;
          await david_NC(T1);
        } else {
          david_NS[T1] = 1;
        }
      }
      await Promise.allSettled(D).then(T5 => {
        david_Tx.isNode() && david_N0 && (david_Tx.log("[温馨提醒]: 即将本地化token，这样可以有效降低登录次数"), david_Th.writeFileSync(david_N1, JSON.stringify(qdng_cks, null, 2)));
        david_Tx.log("日志整理功能如下：");
        david_Tx.log("---------------日志整理开始--------------");
        for (let T8 = 0; T8 < david_Tv.length; T8++) {
          david_Tx.log(david_N7[T8]);
          david_N6 += david_N7[T8];
        }
        david_Tx.log("---------------日志整理结束--------------");
        david_wN(david_N6);
      });
    } else {
      b = Math.ceil(A / Z);
      david_Tx.log("📢 你设置的线程数是" + Z + "，账号个数是" + A + "，计算后分" + b + "次执行，一次可执行" + Z + "个账号，最后一次如果不够" + Z + "个账号，剩多少个账号就跑几个账号。");
      for (let T5 = 0; T5 < b; T5++) {
        for (let T6 = T5 * Z; T6 < Z * (T5 + 1) && T6 < A; T6++) {
          D.push(david_NG(T6));
          david_N7[T6] = "";
          david_NS[T6] = 1;
          await david_NC(T6);
        }
        await Promise.allSettled(D).then(T8 => {
          D = [];
          if (T5 == b - 1) {
            david_Tx.isNode() && david_N0 && (david_Tx.log("[温馨提醒]: 即将本地化token，这样可以有效降低登录次数"), david_Th.writeFileSync(david_N1, JSON.stringify(qdng_cks, null, 2)));
            david_Tx.log("日志整理功能如下：");
            david_Tx.log("---------------日志整理开始--------------");
            for (let Ty = 0; Ty < david_Tv.length; Ty++) {
              david_Tx.log(david_N7[Ty]);
              david_N6 += david_N7[Ty];
            }
            david_Tx.log("---------------日志整理结束--------------");
            david_wN(david_N6);
          }
        });
      }
    }
  }
})().catch(T => david_Tx.logErr(T)).finally(() => david_Tx.done());
async function david_NG(T) {
  return new Promise((w, y) => {
    david_Tx.log("[账号" + (T + 1 < 10 ? "0" + (T + 1) : T + 1) + "]: 开始执行 working......");
    david_NK(w, T);
  });
}
async function david_NC(T) {
  if (david_Tx.isNode()) {
    if (david_ND[T] > 0) {
      david_Tx.log("[账号" + (T + 1 < 10 ? "0" + (T + 1) : T + 1) + "]: 尝试重新连接服务器>>>>>>");
    }
    david_Ny[T] = new david_TQ(david_Tt.replace("http", "ws") + "/ws");
    david_Ny[T].on("open", function S() {
      david_Tx.log("[账号" + (T + 1 < 10 ? "0" + (T + 1) : T + 1) + "]: 签名通道已连接");
    });
    david_Ny[T].on("close", function D() {
      david_Tx.log("[账号" + (T + 1 < 10 ? "0" + (T + 1) : T + 1) + "]: 签名通道已关闭，原因是任务已处理完成");
    });
    david_Ny[T].on("error", function A() {
      david_Tx.log("[账号" + (T + 1 < 10 ? "0" + (T + 1) : T + 1) + "]: 签名通道已关闭，原因是出现错误");
      david_NS[T] = 1;
      david_ND[T]++;
      if (david_ND[T] <= 3) {
        david_NC(T);
      }
    });
  }
}
async function david_NK(T, N) {
  david_Tx.isNode() && (await david_Tx.wait(3000, 5000));
  let y = await david_NL(N, "/login/loginAuto", "post", "自动登录", "refresh_key=" + david_Tv[N].token);
  if (y) {
    david_Tx.log("[账号" + (N + 1 < 10 ? "0" + (N + 1) : N + 1) + "]: 用户名=> " + y.data.username);
    david_N7[N] += "[账号" + (N + 1 < 10 ? "0" + (N + 1) : N + 1) + "]: 用户名=> " + y.data.username + "\n";
    david_Tx.log("[账号" + (N + 1 < 10 ? "0" + (N + 1) : N + 1) + "]: 手机号=> " + david_Tj.phone_num(y.data.phone));
    david_N7[N] += "[账号" + (N + 1 < 10 ? "0" + (N + 1) : N + 1) + "]: 手机号=> " + david_Tj.phone_num(y.data.phone) + "\n";
    david_Tx.log("[账号" + (N + 1 < 10 ? "0" + (N + 1) : N + 1) + "]: 金币=> " + y.data.gold_count);
    david_N7[N] += "[账号" + (N + 1 < 10 ? "0" + (N + 1) : N + 1) + "]: 金币=> " + y.data.gold_count + "\n";
    david_Tx.log("[账号" + (N + 1 < 10 ? "0" + (N + 1) : N + 1) + "]: 现金余额=> " + y.data.gold_money + "元");
    david_N7[N] += "[账号" + (N + 1 < 10 ? "0" + (N + 1) : N + 1) + "]: 现金余额=> " + y.data.gold_money + "元\n";
  }
  y.data.gold_money >= 2 && david_N2 == 8 && (await david_NL(N, "/balance/goldWithdrawal", "post", "提现", "num=20000&pay_type=1"));
  let S = david_Tj.createDayjs(),
    D = S().format("YYYYMM"),
    A = await david_NO(N, "/user/get_sign_info?refresh_key=" + david_Tv[N].token + "&time=" + D + "&sign_type=2", "get", "每日睡觉信息", "");
  if (A && A.data.days_my_is_sign == 2 && david_N2 >= 21 && david_N2 <= 23) {
    let B = await david_NO(N, "/user/user_sign?refresh_key=" + david_Tv[N].token + "&sign_type=2", "post", "早睡打卡", "");
    david_Tx.log("[账号" + (N + 1 < 10 ? "0" + (N + 1) : N + 1) + "]: 早睡打卡任务=> 完成，获得" + B.data.integral + "积分");
    await david_Tx.wait(david_Tj.randomNum(5000, 10000));
    let e = await david_NO(N, "/user/userSignAdv", "post", "早睡打卡翻倍", "token=" + david_Tv[N].token + "&sign_type=2");
    david_Tx.log("[账号" + (N + 1 < 10 ? "0" + (N + 1) : N + 1) + "]: 早睡打卡翻倍任务=> 完成，获得" + e.data.gold + "个金币");
  }
  let Z = await david_NO(N, "/user/get_sign_info?refresh_key=" + david_Tv[N].token + "&time=" + D + "&sign_type=1", "get", "每日早起信息", "");
  if (Z && Z.data.days_my_is_sign == 2 && david_N2 >= 5 && david_N2 <= 9) {
    let K = await david_NO(N, "/user/user_sign?refresh_key=" + david_Tv[N].token + "&sign_type=1", "post", "早起打卡", "");
    david_Tx.log("[账号" + (N + 1 < 10 ? "0" + (N + 1) : N + 1) + "]: 早起打卡任务=> 完成，获得" + K.data.integral + "积分");
    await david_Tx.wait(david_Tj.randomNum(5000, 10000));
    let R = await david_NO(N, "/user/userSignAdv", "post", "早起打卡翻倍", "token=" + david_Tv[N].token + "&sign_type=1");
    david_Tx.log("[账号" + (N + 1 < 10 ? "0" + (N + 1) : N + 1) + "]: 早起打卡翻倍任务=> 完成，获得" + R.data.gold + "个金币");
  }
  let b = await david_NO(N, "/dayask/get_info", "post", "每日答题题目信息", "token=" + david_Tv[N].token);
  while (b.data.power > 0) {
    let L = b.data.question_option,
      O = L.find(z => z.answer == 1);
    if (O && b.data.power > 0) {
      let x = await david_NO(N, "/dayask/user_ask", "post", "提交答案", "ask_id=" + O.ask_id + "&answer[0]=" + O.id + "&is_again=0&token=" + david_Tv[N].token);
      if (x.data.is_true == 1) {
        david_Tx.log("[账号" + (N + 1 < 10 ? "0" + (N + 1) : N + 1) + "]: 回答问题=> ✅正确，获得" + x.data.add_integral + "个金币");
        await david_Tx.wait(david_Tj.randomNum(5000, 10000));
        let o = await david_NO(N, "/dayask/user_double", "post", "回答正确看广告得双倍奖励", "double=2&token=" + david_Tv[N].token + "&id=" + x.data.id);
        david_Tx.log("[账号" + (N + 1 < 10 ? "0" + (N + 1) : N + 1) + "]: 回答问题=> 看广告得双倍奖励，获得" + o.data.add_integral + "个金币");
        await david_Tx.wait(david_Tj.randomNum(5000, 10000));
        b = await david_NO(N, "/dayask/get_info", "post", "每日答题题目信息", "token=" + david_Tv[N].token);
      }
    }
  }
  let F = b.data.big_reward;
  for (let h = 0; h < F.length; h++) {
    let M = F[h];
    if (M.can_receive == 1 && M.is_end == 0) {
      let J = await david_NO(N, "/dayask/user_receive_big_reward", "post", "累计答题奖励", "id=" + M.id + "&token=" + david_Tv[N].token);
      david_Tx.log("[账号" + (N + 1 < 10 ? "0" + (N + 1) : N + 1) + "]: 累计答对" + M.num + "题=> 获得" + J.data.add_integral + "个金币");
      await david_Tx.wait(david_Tj.randomNum(5000, 10000));
    }
  }
  let H = await david_NO(N, "/wheel/get_user_status?token=" + david_Tv[N].token, "get", "获取抽奖信息", "");
  if (H) {
    if (H.data.user_daily_draw_remains > 0) {
      for (let P = 0; P < H.data.user_daily_draw_remains; P++) {
        await david_Tx.wait(david_Tj.randomNum(5000, 10000));
        let V = await david_NO(N, "/wheel/make_draw", "post", "获取抽奖结果", "token=" + david_Tv[N].token);
        david_Tx.log("[账号" + (N + 1 < 10 ? "0" + (N + 1) : N + 1) + "]: 抽奖类型=> " + V.data.award_type);
        if (V.data.award_type == "gold") {
          david_Tx.log("[账号" + (N + 1 < 10 ? "0" + (N + 1) : N + 1) + "]: 抽奖=> 完成，获得" + V.data.award_amount + "个金币");
        }
        if (david_N8[N] && V.data.award_type != "integral") {
          await david_Tx.wait(david_Tj.randomNum(10000, 15000));
          let X = await david_NO(N, "/wheel/view_ad_complete", "post", "获取抽奖结果", "token=" + david_Tv[N].token + "&award_type=" + V.data.award_type + "&award_amount=" + V.data.award_amount + "&multi=" + V.data.award_multi_num);
          if (X) {
            david_Tx.log("[账号" + (N + 1 < 10 ? "0" + (N + 1) : N + 1) + "]: 抽奖看广告得金币=> 完成，获得" + X.data.num + "个金币");
          } else {
            david_N8[N] = false;
          }
          await david_Tx.wait(david_Tj.randomNum(5000, 10000));
        }
      }
    }
    if (H.data.user_daily_view_vad_remains > 0) {
      for (let T2 = 0; T2 < H.data.user_daily_view_vad_remains; T2++) {
        await david_NO(N, "/wheel/view_ad_complete", "post", "获取抽奖信息", "token=" + david_Tv[N].token + "&award_type=draw&award_amount=3&multi=1");
        await david_Tx.wait(david_Tj.randomNum(10000, 15000));
      }
    }
    if (david_N8[N] && H.data.user_brs_adt_5_info == 0) {
      let T4 = await david_NO(N, "/wheel/view_ad_complete", "post", "累计抽奖奖励", "token=" + david_Tv[N].token + "&award_type=gold&award_amount=0&multi=0&draw_times=5");
      if (T4) {
        david_Tx.log("[账号" + (N + 1 < 10 ? "0" + (N + 1) : N + 1) + "]: 累计抽奖5次奖励=> 完成，获得" + T4.data.num + "个金币");
        await david_Tx.wait(david_Tj.randomNum(5000, 10000));
      } else {
        david_N8[N] = false;
      }
    }
    if (david_N8[N] && H.data.user_brs_adt_10_info == 0) {
      let T9 = await david_NO(N, "/wheel/view_ad_complete", "post", "累计抽奖奖励", "token=" + david_Tv[N].token + "&award_type=gold&award_amount=0&multi=0&draw_times=10");
      if (T9) {
        david_Tx.log("[账号" + (N + 1 < 10 ? "0" + (N + 1) : N + 1) + "]: 累计抽奖10次奖励=> 完成，获得" + T9.data.num + "个金币");
        await david_Tx.wait(david_Tj.randomNum(5000, 10000));
      } else {
        david_N8[N] = false;
      }
    }
    if (david_N8[N] && H.data.user_brs_adt_20_info == 0) {
      let Ty = await david_NO(N, "/wheel/view_ad_complete", "post", "累计抽奖奖励", "token=" + david_Tv[N].token + "&award_type=gold&award_amount=0&multi=0&draw_times=20");
      if (Ty) {
        david_Tx.log("[账号" + (N + 1 < 10 ? "0" + (N + 1) : N + 1) + "]: 累计抽奖20次奖励=> 完成，获得" + Ty.data.num + "个金币");
        await david_Tx.wait(david_Tj.randomNum(5000, 10000));
      } else {
        david_N8[N] = false;
      }
    }
  }
  let f = await david_NL(N, "/qudongTask/getTimerBoxTask", "post", "定时宝箱信息", "");
  if (f) {
    let TZ = f.data.task_list[0];
    if (TZ.count_down_seconds == 0) {
      await david_Tx.wait(david_Tj.randomNum(10000, 15000));
      let TF = await david_NL(N, "/qudongTask/pickTaskReward", "post", "开宝箱得金币", "data=&id=" + TZ.id + "&task_id=" + TZ.task_id);
      david_Tx.log("[账号" + (N + 1 < 10 ? "0" + (N + 1) : N + 1) + "]: " + TF.data.task_name + "=> 完成，获得" + TF.data.gold + "个金币");
      if (david_N8[N]) {
        await david_Tx.wait(david_Tj.randomNum(10000, 15000));
        let Tm = await david_NL(N, "/qudongTask/viewAdComplete", "post", "开宝箱看广告得金币", "award_amount=" + TF.data.gold + "&award_type=gold&multi=" + TF.data.gold_multi + "&task_id=" + TZ.task_id);
        if (Tm) {
          david_Tx.log("[账号" + (N + 1 < 10 ? "0" + (N + 1) : N + 1) + "]: " + TF.data.task_name + "翻倍=> 完成，获得" + Tm.data.gold + "个金币");
        } else {
          david_N8[N] = false;
        }
      }
    }
  }
  let g = await david_NL(N, "/sport/addSportRecord", "post", "运动记录", "time_zone=" + encodeURIComponent("GMT+8") + "&sport_type=0&step_count=0&request_time=" + david_Tj.ts10());
  if (g.data.step == 0) {
    david_Tx.log("[账号" + (N + 1 < 10 ? "0" + (N + 1) : N + 1) + "]: 今天还没有上传运动信息，开始上传>>>");
    await david_Tx.wait(david_Tj.randomNum(5000, 15000));
    let Tr = david_Tj.randomNum(10000, 13000);
    g = await david_NL(N, "/sport/addSportRecord", "post", "运动步数上传", "time_zone=" + encodeURIComponent("GMT+8") + "&sport_type=0&step_count=" + Tr + "&request_time=" + david_Tj.ts10());
    david_Tx.log("[账号" + (N + 1 < 10 ? "0" + (N + 1) : N + 1) + "]: 每日运动上传=> 成功上传了" + g.data.step + "步 🎉");
    david_N7[N] += "[账号" + (N + 1 < 10 ? "0" + (N + 1) : N + 1) + "]: 每日运动上传=> 成功上传了" + g.data.step + "步 🎉 \n";
  }
  let l = await david_NL(N, "/gold/get_gold_info", "get", "签到金币任务信息", "");
  if (l && david_N2 < 8) {
    let Ts = l.data.sign_task_list;
    for (let Tq in Ts) {
      let TU = Ts[Tq];
      if (TU.is_receive == 1 && TU.special_status == 2) {
        await david_Tx.wait(david_Tj.randomNum(15000, 20000));
        let TY = await david_NL(N, "/gold/user_gold_sign", "post", "获取签到金", "id=" + TU.id + "&is_adv=" + TU.adv_b);
        david_Tx.log("[账号" + (N + 1 < 10 ? "0" + (N + 1) : N + 1) + "]: 签到第" + (parseInt(Tq) + 1) + "个任务=> 完成，获得" + TY.data.num + "个金币");
        if (TU.is_special == 2) {
          await david_Tx.wait(david_Tj.randomNum(15000, 20000));
          TY = await david_NL(N, "/gold/user_gold_sign", "post", "获取签到金", "id=" + TU.id + "&is_adv=1");
          david_Tx.log("[账号" + (N + 1 < 10 ? "0" + (N + 1) : N + 1) + "]: 签到第" + (parseInt(Tq) + 1) + "个翻倍任务=> 完成，获得" + TY.data.num + "个金币");
        }
      } else {
        if (TU.is_receive == 1 && TU.special_status == 1) {
          await david_Tx.wait(david_Tj.randomNum(15000, 20000));
          let TG = await david_NL(N, "/gold/user_gold_sign", "post", "获取签到金", "id=" + TU.id + "&is_adv=" + TU.adv_b);
          david_Tx.log("[账号" + (N + 1 < 10 ? "0" + (N + 1) : N + 1) + "]: 签到第" + (parseInt(Tq) + 1) + "个大额金币任务=> 完成，获得" + TG.data.num + "个金币");
        }
      }
    }
    let Td = l.data.task_list;
    if (Td) {
      for (let TK = 0; TK < Td.length; TK++) {
        let TL = Td[TK];
        if (TL.is_receive == 1) {
          let Tn = await david_NL(N, "/gold/task_receive", "post", "签到累计" + TL.days + "天奖励", "days=" + TL.days + "&is_adv=2&num=" + TL.reward_num);
          david_Tx.log("[账号" + (N + 1 < 10 ? "0" + (N + 1) : N + 1) + "]: 连续签到" + TL.days + "天任务=> 完成，获得" + Tn.data.num + "个金币");
          await david_Tx.wait(david_Tj.randomNum(5000, 15000));
          let Tz = await david_NL(N, "/gold/task_receive", "post", "签到累计" + TL.days + "天翻倍奖励", "days=" + TL.days + "&is_adv=1&num=" + TL.reward_num);
          david_Tx.log("[账号" + (N + 1 < 10 ? "0" + (N + 1) : N + 1) + "]: 连续签到" + TL.days + "天翻倍任务=> 完成，获得" + Tz.data.num + "个金币");
        }
      }
    }
  }
  let r = await david_NL(N, "/qudongTask/getTodayTaskList", "post", "任务中心列表", ""),
    s = await david_NL(N, "/qudongTask/getTodaySignList", "post", "每日登录App任务信息", "");
  if (s) {
    let To = s.data.user_sign_list,
      TI = To.find(Tv => Tv.words == "今天");
    if (TI && TI.pick_status == 0) {
      let Tv = await david_NL(N, "/qudongTask/pickTaskReward", "post", "每日登录App得金币", "data=&id=" + TI.id + "&task_id=" + TI.task_id);
      await david_Tx.wait(david_Tj.randomNum(5000, 15000));
      let Th = await david_NL(N, "/qudongTask/viewAdComplete", "post", "每日登录App看广告得双倍金币", "award_amount=" + Tv.data.gold + "&award_type=gold&multi=" + Tv.data.gold_multi + "&task_id=" + TI.task_id);
      david_Tx.log("[账号" + (N + 1 < 10 ? "0" + (N + 1) : N + 1) + "]: 每日登录App看广告得双倍金币任务=> 完成，获得" + Th.data.gold + "个金币");
    }
  }
  if (r) {
    let Tu = r.data.find(Tc => Tc.type == "video_bonus_tasks"),
      TE = Tu.tasks;
    for (let Tc in TE) {
      let Tj = TE[Tc],
        Ti = Tj.task_list[0];
      if (Ti.pick_status == 0) {
        await david_Tx.wait(david_Tj.randomNum(15000, 30000));
        let N0 = await david_NL(N, "/qudongTask/pickTaskReward", "post", "看广告得金币", "data=&id=" + Ti.id + "&task_id=" + Ti.task_id);
        david_Tx.log("[账号" + (N + 1 < 10 ? "0" + (N + 1) : N + 1) + "]: " + Ti.task_name + "(" + (parseInt(Tc) + 1) + "/10)=> 完成，获得" + N0.data.gold + "个金币");
      }
      if (Ti.multi_status == 0) {
        await david_Tx.wait(david_Tj.randomNum(15000, 30000));
        let N3 = await david_NL(N, "/qudongTask/viewAdComplete", "post", "再看一次广告翻倍得金币", "award_amount=" + Ti.bonus + "&award_type=gold&multi=" + Ti.multi + "&task_id=" + Ti.task_id);
        david_Tx.log("[账号" + (N + 1 < 10 ? "0" + (N + 1) : N + 1) + "]: " + Ti.task_name + "(" + (parseInt(Tc) + 1) + "/10)_翻倍=> 完成，获得" + N3.data.gold + "个金币");
      }
    }
    let TP = r.data.find(N4 => N4.type == "daily_tasks"),
      TW = TP.tasks.find(N4 => N4.task_tag == "step"),
      TV = TW.task_list;
    for (let N4 in TV) {
      let N5 = TV[N4];
      if (N5.pick_status == 0) {
        await david_Tx.wait(david_Tj.randomNum(1000, 3000));
        let N7 = await david_NL(N, "/qudongTask/pickTaskReward", "post", "完成特定步数得金币", "data=&id=" + N5.id + "&task_id=" + N5.task_id);
        david_Tx.log("[账号" + (N + 1 < 10 ? "0" + (N + 1) : N + 1) + "]: " + N5.task_name + "(" + (parseInt(N4) + 1) + "/10)=> 完成，获得" + N7.data.gold + "个金币");
      }
    }
    let Tt = r.data.find(N9 => N9.type == "habit_tasks");
    if (Tt) {
      for (let NT = 0; NT < Tt.tasks.length; NT++) {
        let Nw = Tt.tasks[NT];
        if (Nw.task_tag != "drink_water") {
          let Ny = Nw.task_list[0];
          if (Ny.finish_status == 1 && Ny.pick_status == 0) {
            let NS = await david_NL(N, "/qudongTask/pickTaskReward", "post", Ny.task_name, "data=&id=" + Ny.id + "&task_id=" + Ny.task_id);
            david_Tx.log("[账号" + (N + 1 < 10 ? "0" + (N + 1) : N + 1) + "]: " + NS.data.task_name + "=> 完成，获得" + NS.data.gold + "个金币");
            if (david_N8[N]) {
              await david_Tx.wait(david_Tj.randomNum(5000, 15000));
              let ND = await david_NL(N, "/qudongTask/viewAdComplete", "post", Ny.task_name + "看广告得双倍金币", "award_amount=" + NS.data.gold + "&award_type=gold&multi=" + NS.data.gold_multi + "&task_id=" + Ny.task_id);
              if (ND) {
                david_Tx.log("[账号" + (N + 1 < 10 ? "0" + (N + 1) : N + 1) + "]: " + Ny.task_name + "看广告得双倍金币=> 完成，获得" + ND.data.gold + "个金币");
              } else {
                david_N8[N] = false;
              }
            }
          }
        }
      }
      let N9 = Tt.tasks.find(Nm => Nm.task_tag == "drink_water");
      if (N9 && david_N2 > 12) {
        let Nm = await david_NL(N, "/user/water_list", "get", "每日喝水信息", ""),
          Nf = Nm.data.list;
        for (let Ng = 0; Ng < Nf.length; Ng++) {
          let Nl = Nf[Ng];
          Nl.is_receive == 2 && (await david_Tx.wait(david_Tj.randomNum(5000, 15000)), await david_NL(N, "/user/receive_water", "post", "喝水", "id=" + Nl.key + "&receive_type=1"), david_Tx.log("[账号" + (N + 1 < 10 ? "0" + (N + 1) : N + 1) + "]: 每日喝水(" + Nl.key + "/8)=> 完成，获得" + Nl.num + "个金币"));
          if (Nl.is_adv == 2) {
            await david_Tx.wait(david_Tj.randomNum(5000, 15000));
            await david_NL(N, "/user/receive_water", "post", "喝水翻倍", "id=" + Nl.key + "&receive_type=2");
            david_Tx.log("[账号" + (N + 1 < 10 ? "0" + (N + 1) : N + 1) + "]: 每日喝水(" + Nl.key + "/8)看广告翻倍=> 完成，获得" + Nl.adv + "个金币");
          }
        }
      }
    }
    let TX = r.data.find(NU => NU.type == "interactive_tasks");
    if (TX) {
      let NY = TX.tasks;
      for (let NB = 0; NB < NY.length; NB++) {
        let Nk = NY[NB].task_list[0];
        if (Nk.task_tag == "invite_user") {
          for (let Ne = 0; Ne < 5; Ne++) {
            await david_Tx.wait(david_Tj.randomNum(10000, 12000));
            let NG = await david_NL(N, "/qudongTask/pickTaskReward", "post", Nk.task_name, "data=&id=" + Nk.id + "&task_id=" + Nk.task_id);
            david_Tx.log("[账号" + (N + 1 < 10 ? "0" + (N + 1) : N + 1) + "]: " + NG.data.task_name + "(" + (Ne + 1) + "/5)=> 完成，获得" + NG.data.gold + "个金币");
            await david_Tx.wait(david_Tj.randomNum(15000, 30000));
            if (david_N8[N]) {
              let NC = await david_NL(N, "/qudongTask/viewAdComplete", "post", NG.data.task_name + "看广告得翻倍金币", "award_amount=" + NG.data.gold + "&award_type=gold&multi=" + NG.data.gold_multi + "&task_id=" + Nk.task_id);
              if (NC) {
                david_Tx.log("[账号" + (N + 1 < 10 ? "0" + (N + 1) : N + 1) + "]: " + NG.data.task_name + "看广告(" + (Ne + 1) + "/5)=> 完成，获得" + NC.data.gold + "个金币");
              } else {
                david_N8[N] = false;
              }
            }
          }
        }
        if (Nk.finish_status == 1 && Nk.pick_status == 0) {
          await david_Tx.wait(david_Tj.randomNum(10000, 12000));
          let Nx = await david_NL(N, "/qudongTask/pickTaskReward", "post", Nk.task_name, "data=&id=" + Nk.id + "&task_id=" + Nk.task_id);
          david_Tx.log("[账号" + (N + 1 < 10 ? "0" + (N + 1) : N + 1) + "]: " + Nx.data.task_name + "=> 完成，获得" + Nx.data.gold + "个金币");
          await david_Tx.wait(david_Tj.randomNum(15000, 30000));
          if (david_N8[N]) {
            let No = await david_NL(N, "/qudongTask/viewAdComplete", "post", Nx.data.task_name + "看广告得翻倍金币", "award_amount=" + Nx.data.gold + "&award_type=gold&multi=" + Nx.data.gold_multi + "&task_id=" + Nk.task_id);
            No ? david_Tx.log("[账号" + (N + 1 < 10 ? "0" + (N + 1) : N + 1) + "]: " + Nx.data.task_name + "看广告=> 完成，获得" + No.data.gold + "个金币") : david_N8[N] = false;
          }
        }
        Nk.task_tag == "view_miniclub_act" && Nk.finish_status == 0 && (await david_NO(N, "/miniclub/activity_info", "post", "浏览同城活动", "token=" + david_Tv[N].token + "&activity_id=34090"), await david_Tx.wait(david_Tj.randomNum(3000, 5000)));
        if (Nk.task_tag == "view_miniclub" && Nk.finish_status == 0) {
          await david_NL(N, "/miniclub/all_club_list", "post", "浏览同城俱乐部主页", "pages=1&type=1");
          await david_Tx.wait(david_Tj.randomNum(3000, 5000));
        }
        if (Nk.task_tag == "browse_award" && Nk.finish_status == 0) {
          await david_NO(N, "/qudongTask/finishBrowseTask", "post", "逛街领奖励", "token=" + david_Tv[N].token + "&task_id=" + Nk.task_id);
          await david_Tx.wait(david_Tj.randomNum(3000, 5000));
        }
        if (Nk.task_tag == "follow_miniclub" && Nk.finish_status == 0) {
          let NE = await david_NL(N, "/miniclub/all_club_list", "post", "浏览同城俱乐部主页", "pages=1&type=1"),
            NP = NE.data.list;
          for (let NW in NP) {
            let Nt = NP[NW];
            if (Nt.is_join == 0) {
              await david_NL(N, "/miniclub/add_club", "post", "关注俱乐部", "club_id=" + Nt.id + "&status=1");
              break;
            }
          }
          await david_Tx.wait(david_Tj.randomNum(3000, 5000));
        }
      }
    }
  }
  if (david_Tx.isNode()) {
    await david_Ny[N].close();
  }
  await david_Nz(david_TI, david_TP);
  T();
}
async function david_NR() {
  if ($request.url.match(/\/qudongTask\/getTodayTaskList/)) {
    const w = $request.body,
      y = w.split("app_imei=")[1].split("&app_type")[0],
      S = w.split("token=")[1];
    let D = david_TV - 1;
    if (david_Tv[D]) {
      david_Tv[D].deviceId = y;
      david_Tv[D].token = S;
    } else {
      const Z = {
        deviceId: y,
        token: S
      };
      david_Tv[D] = Z;
    }
    david_Tx.setdata(JSON.stringify(david_Tv, null, 2), "qdngapp");
    david_Tx.msg(david_Tx.name, "趣动账号" + (D + 1) + "Token获取成功！🎉");
  }
}
async function david_NL(T, N, w, y, S) {
  let A = "https://capi.wewillpro.com" + N,
    Z = await david_wy(T, S);
  if (w == "post") {
    await david_NE(A, Z, T);
  } else {
    A = A + "?" + Z;
    await david_NE(A, "", T);
  }
  await david_NW(w, david_NA[T], david_w2());
  let b = david_Nb;
  if (b != null && b.code == 200) {
    return b;
  } else {
    david_Tx.log("[账号" + (T + 1 < 10 ? "0" + (T + 1) : T + 1) + "]: " + y + "=> " + b.msg);
    david_N7[T] += "[账号" + (T + 1 < 10 ? "0" + (T + 1) : T + 1) + "]: " + y + "=> " + b.msg + "\n";
  }
}
async function david_NO(T, N, w, y, S) {
  let A = "https://capi.wewillpro.com" + N;
  await david_NE(A, S, T);
  await david_NW(w, david_NA[T], david_w2());
  let Z = david_Nb;
  if (Z != null && Z.code == 200) {
    return Z;
  } else {
    david_Tx.log("[账号" + (T + 1 < 10 ? "0" + (T + 1) : T + 1) + "]: " + y + "=> " + Z.msg);
    david_N7[T] += "[账号" + (T + 1 < 10 ? "0" + (T + 1) : T + 1) + "]: " + y + "=> " + Z.msg + "\n";
  }
}
function david_Nn(T, N, w) {
  return new Promise((S, D) => {
    const b = david_Tt + "/script/permissions/lastest",
      F = {
        appName: T,
        userId: N,
        activityCode: w,
        version: david_To
      };
    const m = {
      "Content-Type": "application/json",
      accept: "application/json"
    };
    const f = {
      url: b,
      headers: m,
      body: JSON.stringify(F)
    };
    david_Tx.post(f, async (g, l, r) => {
      if (r && r != null && r.replace(/\"/g, "").length > 50) {
        const p = r.replace(/\"/g, "").slice(34);
        david_Tj = await david_NI(david_TX);
        david_Ti = david_Tj.createCryptoJS();
        result = JSON.parse(david_Ti.enc.Base64.parse(p).toString(david_Ti.enc.Utf8));
        try {
          david_Nm = result.version;
          david_NF = result.userAuth;
          david_NH = result.scriptAuth;
          david_Nf = result.runAuth;
          david_Ng = result.notify;
          david_Nl = result.vipAuth;
          david_Nr = result.isCharge;
          david_Ns = result.runAcounts;
          david_Nd = result.buyCount;
          david_Np = result.runedCounts;
          david_Nq = result.runTotalCounts;
          david_NU = result.userRank;
          david_NY = result.invicate;
          david_NB = result.accountNumbers;
          david_Nk = result.vipDate;
        } catch (k) {
          david_Tx.log(k);
        }
      } else {
        david_Tx.log("请求服务器接口出现错误，请检查网络连接情况");
      }
      S();
    });
  });
}
function david_Nz(T, N) {
  return new Promise((y, S) => {
    const Z = david_Tt + "/script/run/add",
      b = {
        appName: T,
        userId: N,
        activityCode: david_TW,
        version: david_To
      };
    const H = {
      "Content-Type": "application/json",
      accept: "application/json"
    };
    const m = {
      url: Z,
      headers: H,
      body: JSON.stringify(b)
    };
    david_Tx.post(m, async (f, g, l) => {
      y();
    });
  });
}
function david_Nx(N) {
  let S = david_Tv[N].mobile;
  qdng_item = qdng_cks["" + S];
  if (qdng_item) {
    david_Tv[N].refreshToken = qdng_item.refreshToken;
    david_Tv[N].accessToken = qdng_item.accessToken;
    return true;
  } else {
    return false;
  }
}
function david_No(T) {
  qdng_cks[david_Tv[T].mobile] = {
    refreshToken: david_Tv[T].refreshToken,
    accessToken: david_Tv[T].accessToken,
    ts: ts13()
  };
}
async function david_NI(T) {
  let w = david_Tx.getdata("Utils_Code") || "";
  if (!T && w && Object.keys(w).length) {
    david_Tx.log("📢 缓存中存在JS-Utils");
    eval(w);
    return creatUtils();
  }
  david_Tx.log("📢 开始初始化JS-Utils");
  return new Promise(async S => {
    david_Tx.getScript("http://script.david2024.top/scripts/tools/JS-Utils.js").then(A => {
      david_Tx.setdata(A, "Utils_Code");
      eval(A);
      david_Tx.log("📢 JS-Utils加载成功");
      S(creatUtils());
    });
  });
}
function david_Nv(T, N) {
  return new Promise((y, S) => {
    const A = setTimeout(() => {
        y(false);
      }, N),
      Z = david_TJ.get(T, b => {
        clearTimeout(A);
        b.statusCode === 404 ? y(true) : y(false);
      });
    Z.on("error", b => {
      clearTimeout(A);
      y(false);
    });
    Z.on("timeout", () => {
      Z.abort();
      S(new Error("请求超时"));
    });
  });
}
async function david_Nh(T, N = 3000) {
  return new Promise((y, S) => {
    const Z = {
      url: T + "/docs"
    };
    setTimeout(() => {
      y(false);
    }, N);
    david_Tx.get(Z, async (b, F, H) => {
      if (F.status == 401) {
        y(true);
      } else {
        y(false);
      }
    });
  });
}
async function david_NQ(T, N = 3000) {
  return new Promise((y, S) => {
    const A = {
      url: T + "/"
    };
    setTimeout(() => {
      y(false);
    }, N);
    $httpClient.get(A, async (Z, b, F) => {
      F == "{\"detail\":\"Not Found\"}" ? y(true) : y(false);
    });
  });
}
async function david_NM(T, N, w) {
  return new Promise((S, D) => {
    const b = david_Tt + "/redis/hash/get/" + N + "/" + w,
      F = {
        "Content-Type": "application/json",
        accept: "application/json"
      };
    const H = {
      url: b,
      headers: F
    };
    david_Tx.get(H, async (f, g, l) => {
      const d = l.replace(/\"/g, "");
      answerTexts[T] = d;
      S();
    });
  });
}
function david_NJ(T, N, w) {
  return new Promise((S, D) => {
    const b = david_Tt + "/redis/hash/set",
      F = {
        key: T,
        hashKey: N,
        hashValue: w
      };
    const m = {
      "Content-Type": "application/json",
      accept: "application/json"
    };
    const f = {
      url: b,
      headers: m,
      body: JSON.stringify(F)
    };
    david_Tx.post(f, async (g, l, r) => {
      S();
    });
  });
}
function david_Nu(T) {
  return new Promise((w, y) => {
    const D = david_Tt + "/redis/set/pop/" + T,
      A = {
        "Content-Type": "application/json",
        accept: "application/json"
      };
    const Z = {
      url: D,
      headers: A
    };
    david_Tx.get(Z, async (F, H, m) => {
      const g = m.replace(/\"/g, "");
      popCookie = g;
      w();
    });
  });
}
async function david_NE(w, y, S) {
  let A = "Will/3.7.3 (com.rdhy.will; build:104; iOS 16.6.1) Alamofire/5.8.0";
  if (david_Tv[S].ua && david_Tv[S].ua != "") {
    A = david_Tv[S].ua;
  }
  let Z = david_Ni(w);
  const b = {
    "Content-Type": "application/x-www-form-urlencoded; charset=utf-8",
    "User-Agent": A,
    brand: "Apple",
    appVersion: "3.7.3",
    deviceId: david_Tv[S].deviceId,
    Host: Z
  };
  const F = {
    url: w,
    headers: b
  };
  if (y) {
    F.body = y;
  }
  david_NA[S] = F;
  return F;
}
function david_NP(w, y, S) {
  let A = "Mozilla/5.0 (iPhone; CPU iPhone OS 16_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.31(0x18001f34) NetType/WIFI Language/zh_CN";
  david_Tv[S].ua && david_Tv[S].ua != "" && (A = david_Tv[S].ua);
  let Z = david_Ni(w);
  const b = {
    "Content-Type": "application/x-www-form-urlencoded",
    "User-Agent": A,
    Authorization: david_Tv[S].auth,
    Host: Z
  };
  const F = {
    url: w,
    headers: b
  };
  if (y) {
    F.body = y;
  }
  david_NA[S] = F;
  return F;
}
async function david_NW(T, N, w) {
  david_Nb = null;
  return new Promise(S => {
    david_Tx[T](N, async (Z, b, F) => {
      try {
        if (Z) {
          david_Tx.log(w + ": " + T + "请求失败");
          david_Tx.log(JSON.stringify(Z));
          david_Tx.logErr(Z);
        } else {
          if (david_w3(F)) {
            david_Nb = JSON.parse(F);
          } else {
            const l = new URL(N.url);
            david_Tx.log(l.pathname + "发起" + T + "请求时，出现错误，请处理");
          }
        }
      } catch (q) {
        david_Tx.logErr(q, b);
      } finally {
        S(david_Nb);
      }
    });
  });
}
async function david_NV(T, N) {
  if (david_NS[T] == 0) {
    await david_Nt(T, N);
  } else {
    await david_NX(T, N);
  }
}
function david_Nt(T, N) {
  return new Promise((y, S) => {
    function Z(b) {
      let H = b.toString("utf8");
      david_NZ[T] = H;
      david_Ny[T].removeListener("message", Z);
      y(H);
    }
    david_Ny[T].on("message", Z);
    if (david_Ny[T].readyState === 1) {
      const F = {
        method: david_TI,
        params: {}
      };
      F.params.content = N;
      F.params.appName = david_TI;
      F.params.uuid = david_TP;
      david_Ny[T].send(JSON.stringify(F), H => {
        H && S(H);
      });
    } else {
      y(david_NX(T, N));
      david_Ny[T].removeListener("message", Z);
    }
  });
}
function david_NX(T, N) {
  return new Promise((y, S) => {
    const A = david_Tt + "/sign/qdng",
      Z = {
        content: N,
        appName: david_TI,
        uuid: david_TP
      };
    const F = {
      "Content-Type": "application/json",
      accept: "application/json"
    };
    const H = {
      url: A,
      headers: F,
      body: JSON.stringify(Z)
    };
    david_Tx.post(H, async (m, f, g) => {
      const l = g.replace(/\"/g, "");
      david_NZ[T] = l;
      y();
    });
  });
}
function david_Nc(T, N, w) {
  const S = david_Na(T);
  N.forEach(Z => {
    delete S[Z];
  });
  Object.assign(S, w);
  const D = Object.keys(S).sort(),
    A = D.map(Z => Z + "=" + S[Z]).join("&");
  return A;
}
function david_Na(N) {
  if (N == "") {
    return {};
  }
  N = N.replace(/\"/g, "");
  var S,
    D = {},
    A = N.split("&");
  for (var Z = 0; Z < A.length; Z++) {
    S = A[Z].split("=");
    D[S[0]] = S[1];
  }
  return D;
}
function david_Nj(N) {
  const S = N.replace(/[{} ]/g, ""),
    D = S.split(",");
  const A = {};
  D.forEach(Z => {
    const [F, H] = Z.split("=");
    A[F] = H;
  });
  return A;
}
function david_Ni(T) {
  let w = T.substr(T.indexOf("//") + 2),
    y = w.substr(0, w.indexOf("/")),
    S = "",
    D = y.indexOf(":");
  if (D > 0) {
    S = y.substr(0, D);
  } else {
    S = y;
  }
  return S;
}
function david_w0(N, w) {
  var H = new Date(N);
  var Z = new Date(w);
  var F = Z - H;
  var b = Math.floor(F / 1000);
  return b;
}
function david_w1(T, N) {
  if (T.length * 2 <= N) {
    return T;
  }
  var y = 0;
  var S = "";
  for (var D = 0; D < T.length; D++) {
    S = S + T.charAt(D);
    if (T.charCodeAt(D) > 128) {
      y = y + 2;
      if (y >= N) {
        return S.substring(0, S.length - 1) + "...";
      }
    } else {
      y = y + 1;
      if (y >= N) {
        return S.substring(0, S.length - 2) + "...";
      }
    }
  }
  return S;
}
function david_w2() {
  return new Error().stack.split("\n")[3].split("@")[0];
}
function david_w3(N) {
  try {
    if (typeof JSON.parse(N) == "object") {
      return true;
    }
  } catch (A) {
    console.log(A);
    console.log("服务器访问数据为空，请检查自身设备网络情况");
    return false;
  }
}
function david_w4(T) {
  var w = Object.keys(T).map(function (y) {
    return encodeURIComponent(y) + "=" + encodeURIComponent(T[y]);
  }).join("&");
  return w;
}
function david_w5(T) {
  var w = String.fromCharCode(T.charCodeAt(0) + T.length);
  for (var y = 1; y < T.length; y++) {
    w += String.fromCharCode(T.charCodeAt(y) + T.charCodeAt(y - 1));
  }
  return escape(w);
}
function david_w6(T) {
  T = unescape(T);
  var w = String.fromCharCode(T.charCodeAt(0) - T.length);
  for (var y = 1; y < T.length; y++) {
    w += String.fromCharCode(T.charCodeAt(y) - w.charCodeAt(y - 1));
  }
  return w;
}
function david_w7() {
  return "XX:XX:XX:XX:XX:XX".replace(/X/g, function () {
    return "0123456789ABCDEF".charAt(Math.floor(Math.random() * 16));
  });
}
function david_w8(T) {
  return new Promise((w, y) => {
    const A = "https://v1.hitokoto.cn/?c=e",
      Z = {
        accept: "application/json"
      };
    const b = {
      url: A,
      headers: Z
    };
    david_Tx.get(b, async (H, m, f) => {
      let g = JSON.parse(f),
        l = g.hitokoto;
      contents[T] = l + " " + l;
      w();
    });
  });
}
function david_w9() {
  return new Promise((N, w) => {
    const S = "http://api.m.taobao.com/rest/api3.do?api=mtop.common.getTimestamp",
      D = {
        url: S
      };
    david_Tx.get(D, async (Z, b, F) => {
      N(F);
    });
  });
}
function david_wT() {
  david_Ta == 1 && david_Tx.msg(david_Tx.name, "", david_Tx.message);
}
async function david_wN(T) {
  if (david_N2 == 9 || david_N2 == 12 || david_N2 == 18) {
    if (david_Ta == 1) {
      david_Tx.isNode() ? await david_Tu.sendNotify(david_Tx.name, T) : david_Tx.msg(david_Tx.name, "", T);
    } else {
      david_Tx.log(T);
    }
  }
}
async function david_ww(T, N, w) {
  return new Promise((S, D) => {
    const Z = "https://wxpusher.zjiecode.com/api/send/message",
      b = {
        appToken: "AT_6BZsE2IyJuVLPp3mcOkKvpoF245GR9xn",
        content: N,
        summary: "快手答题余额通知",
        contentType: 1,
        uids: [w],
        verifyPay: false
      };
    const H = {
      "Content-Type": "application/json"
    };
    const m = {
      url: Z,
      headers: H,
      body: JSON.stringify(b)
    };
    david_Tx.post(m, async (f, g, l) => {
      S();
    });
  });
}
async function david_wy(T, N) {
  let y = david_Nc(N, [], {
    app_channel: "Apple_iPhone10,2_16.6.1",
    app_imei: david_Tv[T].deviceId,
    app_type: "2",
    app_version: "3.7.3",
    appoint_source: "1",
    time_str: david_Tj.ts10(),
    token: david_Tv[T].token
  });
  let S = david_Na(y);
  await david_NV(T, JSON.stringify(S));
  S.sign = david_NZ[T];
  let D = Object.keys(S).map(A => encodeURIComponent(A) + "=" + encodeURIComponent(S[A])).join("&");
  return david_Nc(D, [], {});
}
function david_wS(T, N) {
  class y {
    constructor(S) {
      this.env = S;
    }
    send(S, D = "GET") {
      S = "string" == typeof S ? {
        url: S
      } : S;
      let b = this.get;
      "POST" === D && (b = this.post);
      return new Promise((F, H) => {
        b.call(this, S, (m, f, g) => {
          m ? H(m) : F(f);
        });
      });
    }
    get(S) {
      return this.send.call(this.env, S);
    }
    post(S) {
      return this.send.call(this.env, S, "POST");
    }
  }
  return new class {
    constructor(S, D) {
      const b = {
        debug: 0,
        info: 1,
        warn: 2,
        error: 3
      };
      const F = {
        debug: "[DEBUG] ",
        info: "[INFO] ",
        warn: "[WARN] ",
        error: "[ERROR] "
      };
      this.logLevels = b;
      this.logLevelPrefixs = F;
      this.logLevel = "info";
      this.name = S;
      this.http = new y(this);
      this.data = null;
      this.dataFile = "box.dat";
      this.logs = [];
      this.isMute = !1;
      this.isNeedRewrite = !1;
      this.logSeparator = "\n";
      this.encoding = "utf-8";
      this.startTime = new Date().getTime();
      Object.assign(this, D);
      this.log("", "🔔 " + this.name + ", 开始!");
    }
    getEnv() {
      return "undefined" != typeof $environment && $environment["surge-version"] ? "Surge" : "undefined" != typeof $environment && $environment["stash-version"] ? "Stash" : "undefined" != typeof module && module.exports ? "Node.js" : "undefined" != typeof $task ? "Quantumult X" : "undefined" != typeof $loon ? "Loon" : "undefined" != typeof $rocket ? "Shadowrocket" : void 0;
    }
    isNode() {
      return "Node.js" === this.getEnv();
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
    toObj(S, D = null) {
      try {
        return JSON.parse(S);
      } catch {
        return D;
      }
    }
    toStr(S, D = null, ...A) {
      try {
        return JSON.stringify(S, ...A);
      } catch {
        return D;
      }
    }
    getjson(S, D) {
      let Z = D;
      if (this.getdata(S)) {
        try {
          Z = JSON.parse(this.getdata(S));
        } catch {}
      }
      return Z;
    }
    setjson(S, D) {
      try {
        return this.setdata(JSON.stringify(S), D);
      } catch {
        return !1;
      }
    }
    getScript(S) {
      return new Promise(D => {
        const A = {
          url: S
        };
        this.get(A, (Z, b, F) => D(F));
      });
    }
    runScript(S, D) {
      return new Promise(A => {
        let Z = this.getdata("@chavy_boxjs_userCfgs.httpapi");
        Z = Z ? Z.replace(/\n/g, "").trim() : Z;
        let b = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
        b = b ? 1 * b : 20;
        b = D && D.timeout ? D.timeout : b;
        const F = {
          script_text: S,
          mock_type: "cron",
          timeout: b
        };
        const [H, m] = Z.split("@"),
          f = {
            url: "http://" + m + "/v1/scripting/evaluate",
            body: F,
            headers: {
              "X-Key": H,
              Accept: "*/*"
            },
            timeout: b
          };
        this.post(f, (g, l, d) => A(d));
      }).catch(A => this.logErr(A));
    }
    loaddata() {
      if (!this.isNode()) {
        return {};
      }
      {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const S = this.path.resolve(this.dataFile),
          D = this.path.resolve(process.cwd(), this.dataFile),
          A = this.fs.existsSync(S),
          Z = !A && this.fs.existsSync(D);
        if (!A && !Z) {
          return {};
        }
        {
          const b = A ? S : D;
          try {
            return JSON.parse(this.fs.readFileSync(b));
          } catch (F) {
            return {};
          }
        }
      }
    }
    writedata() {
      if (this.isNode()) {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const S = this.path.resolve(this.dataFile),
          D = this.path.resolve(process.cwd(), this.dataFile),
          A = this.fs.existsSync(S),
          Z = !A && this.fs.existsSync(D),
          b = JSON.stringify(this.data);
        A ? this.fs.writeFileSync(S, b) : Z ? this.fs.writeFileSync(D, b) : this.fs.writeFileSync(S, b);
      }
    }
    lodash_get(S, D, A) {
      const Z = D.replace(/\[(\d+)\]/g, ".$1").split(".");
      let b = S;
      for (const F of Z) if (b = Object(b)[F], void 0 === b) {
        return A;
      }
      return b;
    }
    lodash_set(S, D, A) {
      Object(S) !== S || (Array.isArray(D) || (D = D.toString().match(/[^.[\]]+/g) || []), D.slice(0, -1).reduce((Z, b, F) => Object(Z[b]) === Z[b] ? Z[b] : Z[b] = Math.abs(D[F + 1]) >> 0 == +D[F + 1] ? [] : {}, S)[D[D.length - 1]] = A);
      return S;
    }
    getdata(S) {
      let D = this.getval(S);
      if (/^@/.test(S)) {
        const [, A, Z] = /^@(.*?)\.(.*?)$/.exec(S),
          b = A ? this.getval(A) : "";
        if (b) {
          try {
            const F = JSON.parse(b);
            D = F ? this.lodash_get(F, Z, "") : D;
          } catch (H) {
            D = "";
          }
        }
      }
      return D;
    }
    setdata(S, D) {
      let A = !1;
      if (/^@/.test(D)) {
        const [, Z, b] = /^@(.*?)\.(.*?)$/.exec(D),
          F = this.getval(Z),
          H = Z ? "null" === F ? null : F || "{}" : "{}";
        try {
          const m = JSON.parse(H);
          this.lodash_set(m, b, S);
          A = this.setval(JSON.stringify(m), Z);
        } catch (f) {
          const g = {};
          this.lodash_set(g, b, S);
          A = this.setval(JSON.stringify(g), Z);
        }
      } else {
        A = this.setval(S, D);
      }
      return A;
    }
    getval(S) {
      switch (this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
          return $persistentStore.read(S);
        case "Quantumult X":
          return $prefs.valueForKey(S);
        case "Node.js":
          this.data = this.loaddata();
          return this.data[S];
        default:
          return this.data && this.data[S] || null;
      }
    }
    setval(S, D) {
      switch (this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
          return $persistentStore.write(S, D);
        case "Quantumult X":
          return $prefs.setValueForKey(S, D);
        case "Node.js":
          this.data = this.loaddata();
          this.data[D] = S;
          this.writedata();
          return !0;
        default:
          return this.data && this.data[D] || null;
      }
    }
    initGotEnv(S) {
      this.got = this.got ? this.got : require("got");
      this.cktough = this.cktough ? this.cktough : require("tough-cookie");
      this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar();
      S && (S.headers = S.headers ? S.headers : {}, S && (S.headers = S.headers ? S.headers : {}, void 0 === S.headers.cookie && void 0 === S.headers.Cookie && void 0 === S.cookieJar && (S.cookieJar = this.ckjar)));
    }
    get(S, D = () => {}) {
      const Z = {
        redirection: !1
      };
      switch (S.headers && (delete S.headers["Content-Type"], delete S.headers["Content-Length"], delete S.headers["content-type"], delete S.headers["content-length"]), S.params && (S.url += "?" + this.queryStr(S.params)), void 0 === S.followRedirect || S.followRedirect || ((this.isSurge() || this.isLoon()) && (S["auto-redirect"] = !1), this.isQuanX() && (S.opts ? S.opts.redirection = !1 : S.opts = Z)), this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
        default:
          const b = {
            "X-Surge-Skip-Scripting": !1
          };
          this.isSurge() && this.isNeedRewrite && (S.headers = S.headers || {}, Object.assign(S.headers, b));
          $httpClient.get(S, (m, f, g) => {
            !m && f && (f.body = g, f.statusCode = f.status ? f.status : f.statusCode, f.status = f.statusCode);
            D(m, f, g);
          });
          break;
        case "Quantumult X":
          const F = {
            hints: !1
          };
          this.isNeedRewrite && (S.opts = S.opts || {}, Object.assign(S.opts, F));
          $task.fetch(S).then(m => {
            const {
              statusCode: f,
              statusCode: g,
              headers: l,
              body: d,
              bodyBytes: q
            } = m;
            const p = {
              status: f,
              statusCode: g,
              headers: l,
              body: d,
              bodyBytes: q
            };
            D(null, p, d, q);
          }, m => D(m && m.error || "UndefinedError"));
          break;
        case "Node.js":
          let H = require("iconv-lite");
          this.initGotEnv(S);
          this.got(S).on("redirect", (m, f) => {
            try {
              if (m.headers["set-cookie"]) {
                const g = m.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();
                g && this.ckjar.setCookieSync(g, null);
                f.cookieJar = this.ckjar;
              }
            } catch (l) {
              this.logErr(l);
            }
          }).then(m => {
            const {
                statusCode: f,
                statusCode: g,
                headers: l,
                rawBody: d
              } = m,
              q = H.decode(d, this.encoding),
              p = {
                status: f,
                statusCode: g,
                headers: l,
                rawBody: d,
                body: q
              };
            D(null, p, q);
          }, m => {
            const {
              message: f,
              response: g
            } = m;
            D(f, g, g && H.decode(g.rawBody, this.encoding));
          });
          break;
      }
    }
    post(S, D = () => {}) {
      const Z = S.method ? S.method.toLocaleLowerCase() : "post",
        b = {
          redirection: !1
        };
      switch (S.body && S.headers && !S.headers["Content-Type"] && !S.headers["content-type"] && (S.headers["content-type"] = "application/x-www-form-urlencoded"), S.headers && (delete S.headers["Content-Length"], delete S.headers["content-length"]), void 0 === S.followRedirect || S.followRedirect || ((this.isSurge() || this.isLoon()) && (S["auto-redirect"] = !1), this.isQuanX() && (S.opts ? S.opts.redirection = !1 : S.opts = b)), this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
        default:
          const F = {
            "X-Surge-Skip-Scripting": !1
          };
          this.isSurge() && this.isNeedRewrite && (S.headers = S.headers || {}, Object.assign(S.headers, F));
          $httpClient[Z](S, (l, d, q) => {
            !l && d && (d.body = q, d.statusCode = d.status ? d.status : d.statusCode, d.status = d.statusCode);
            D(l, d, q);
          });
          break;
        case "Quantumult X":
          const H = {
            hints: !1
          };
          S.method = Z;
          this.isNeedRewrite && (S.opts = S.opts || {}, Object.assign(S.opts, H));
          $task.fetch(S).then(l => {
            const {
                statusCode: d,
                statusCode: q,
                headers: p,
                body: U,
                bodyBytes: Y
              } = l,
              B = {
                status: d,
                statusCode: q,
                headers: p,
                body: U,
                bodyBytes: Y
              };
            D(null, B, U, Y);
          }, l => D(l && l.error || "UndefinedError"));
          break;
        case "Node.js":
          let m = require("iconv-lite");
          this.initGotEnv(S);
          const {
            url: f,
            ...g
          } = S;
          this.got[Z](f, g).then(l => {
            const {
                statusCode: d,
                statusCode: q,
                headers: p,
                rawBody: U
              } = l,
              Y = m.decode(U, this.encoding),
              B = {
                status: d,
                statusCode: q,
                headers: p,
                rawBody: U,
                body: Y
              };
            D(null, B, Y);
          }, l => {
            const {
              message: d,
              response: q
            } = l;
            D(d, q, q && m.decode(q.rawBody, this.encoding));
          });
          break;
      }
    }
    time(S, D = null) {
      const A = D ? new Date(D) : new Date();
      let Z = {
        "M+": A.getMonth() + 1,
        "d+": A.getDate(),
        "H+": A.getHours(),
        "m+": A.getMinutes(),
        "s+": A.getSeconds(),
        "q+": Math.floor((A.getMonth() + 3) / 3),
        S: A.getMilliseconds()
      };
      /(y+)/.test(S) && (S = S.replace(RegExp.$1, (A.getFullYear() + "").substr(4 - RegExp.$1.length)));
      for (let b in Z) new RegExp("(" + b + ")").test(S) && (S = S.replace(RegExp.$1, 1 == RegExp.$1.length ? Z[b] : ("00" + Z[b]).substr(("" + Z[b]).length)));
      return S;
    }
    queryStr(S) {
      let D = "";
      for (const A in S) {
        let Z = S[A];
        null != Z && "" !== Z && ("object" == typeof Z && (Z = JSON.stringify(Z)), D += A + "=" + Z + "&");
      }
      D = D.substring(0, D.length - 1);
      return D;
    }
    msg(S = T, D = "", A = "", Z = {}) {
      const F = H => {
        const {
          $open: m,
          $copy: f,
          $media: g,
          $mediaMime: l
        } = H;
        switch (typeof H) {
          case void 0:
            return H;
          case "string":
            switch (this.getEnv()) {
              case "Surge":
              case "Stash":
              default:
                const d = {
                  url: H
                };
                return d;
              case "Loon":
              case "Shadowrocket":
                return H;
              case "Quantumult X":
                const q = {
                  "open-url": H
                };
                return q;
              case "Node.js":
                return;
            }
          case "object":
            switch (this.getEnv()) {
              case "Surge":
              case "Stash":
              case "Shadowrocket":
              default:
                {
                  const p = {};
                  let U = H.openUrl || H.url || H["open-url"] || m;
                  U && Object.assign(p, {
                    action: "open-url",
                    url: U
                  });
                  let Y = H["update-pasteboard"] || H.updatePasteboard || f;
                  if (Y && Object.assign(p, {
                    action: "clipboard",
                    text: Y
                  }), g) {
                    let k, G, C;
                    if (g.startsWith("http")) {
                      k = g;
                    } else {
                      if (g.startsWith("data:")) {
                        const [K] = g.split(";"),
                          [, R] = g.split(",");
                        G = R;
                        C = K.replace("data:", "");
                      } else {
                        G = g;
                        C = (L => {
                          const O = {
                            JVBERi0: "application/pdf",
                            R0lGODdh: "image/gif",
                            R0lGODlh: "image/gif",
                            iVBORw0KGgo: "image/png",
                            "/9j/": "image/jpg"
                          };
                          for (var x in O) if (0 === L.indexOf(x)) {
                            return O[x];
                          }
                          return null;
                        })(g);
                      }
                    }
                    Object.assign(p, {
                      "media-url": k,
                      "media-base64": G,
                      "media-base64-mime": l ?? C
                    });
                  }
                  const B = {
                    "auto-dismiss": H["auto-dismiss"],
                    sound: H.sound
                  };
                  Object.assign(p, B);
                  return p;
                }
              case "Loon":
                {
                  const L = {};
                  let O = H.openUrl || H.url || H["open-url"] || m;
                  O && Object.assign(L, {
                    openUrl: O
                  });
                  let z = H.mediaUrl || H["media-url"];
                  g?.["startsWith"]("http") && (z = g);
                  z && Object.assign(L, {
                    mediaUrl: z
                  });
                  console.log(JSON.stringify(L));
                  return L;
                }
              case "Quantumult X":
                {
                  const x = {};
                  let I = H["open-url"] || H.url || H.openUrl || m;
                  I && Object.assign(x, {
                    "open-url": I
                  });
                  let v = H["media-url"] || H.mediaUrl;
                  g?.["startsWith"]("http") && (v = g);
                  v && Object.assign(x, {
                    "media-url": v
                  });
                  let h = H["update-pasteboard"] || H.updatePasteboard || f;
                  h && Object.assign(x, {
                    "update-pasteboard": h
                  });
                  console.log(JSON.stringify(x));
                  return x;
                }
              case "Node.js":
                return;
            }
          default:
            return;
        }
      };
      if (!this.isMute) {
        switch (this.getEnv()) {
          case "Surge":
          case "Loon":
          case "Stash":
          case "Shadowrocket":
          default:
            $notification.post(S, D, A, F(Z));
            break;
          case "Quantumult X":
            $notify(S, D, A, F(Z));
            break;
          case "Node.js":
            break;
        }
      }
      if (!this.isMuteLog) {
        let H = ["", "==============📣系统通知📣=============="];
        H.push(S);
        D && H.push(D);
        A && H.push(A);
        console.log(H.join("\n"));
        this.logs = this.logs.concat(H);
      }
    }
    debug(...S) {
      this.logLevels[this.logLevel] <= this.logLevels.debug && (S.length > 0 && (this.logs = [...this.logs, ...S]), console.log("" + this.logLevelPrefixs.debug + S.map(D => D ?? String(D)).join(this.logSeparator)));
    }
    info(...S) {
      this.logLevels[this.logLevel] <= this.logLevels.info && (S.length > 0 && (this.logs = [...this.logs, ...S]), console.log("" + this.logLevelPrefixs.info + S.map(D => D ?? String(D)).join(this.logSeparator)));
    }
    warn(...S) {
      this.logLevels[this.logLevel] <= this.logLevels.warn && (S.length > 0 && (this.logs = [...this.logs, ...S]), console.log("" + this.logLevelPrefixs.warn + S.map(D => D ?? String(D)).join(this.logSeparator)));
    }
    error(...S) {
      this.logLevels[this.logLevel] <= this.logLevels.error && (S.length > 0 && (this.logs = [...this.logs, ...S]), console.log("" + this.logLevelPrefixs.error + S.map(D => D ?? String(D)).join(this.logSeparator)));
    }
    log(...S) {
      S.length > 0 && (this.logs = [...this.logs, ...S]);
      console.log(S.map(D => D ?? String(D)).join(this.logSeparator));
    }
    logErr(S, D) {
      switch (this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
        case "Quantumult X":
        default:
          this.log("", "❗️" + this.name + ", 错误!", D, S);
          break;
        case "Node.js":
          this.log("", "❗️" + this.name + ", 错误!", D, void 0 !== S.message ? S.message : S, S.stack);
          break;
      }
    }
    wait(S) {
      return new Promise(D => setTimeout(D, S));
    }
    done(S = {}) {
      const D = (new Date().getTime() - this.startTime) / 1000;
      switch (this.log("", "🔔" + this.name + ", 结束! 🕛 " + D + " 秒"), this.log(), this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
        case "Quantumult X":
        default:
          $done(S);
          break;
        case "Node.js":
          process.exit(1);
      }
    }
  }(T, N);
}