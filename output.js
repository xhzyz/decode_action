//Wed Aug 14 2024 02:54:03 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const David_0x2a99cb = new David_0x225714("盒马剧场");
const David_0x1faf7c = "V1.0.1";
const David_0x16de32 = "hmjcapp";
let David_0x2dd9a2 = David_0x2a99cb.getjson(David_0x16de32, []);
const David_0x1abd96 = David_0x2a99cb.isNode() ? require("fs") : "";
const David_0x14caea = David_0x2a99cb.isNode() ? require("ws") : "";
const David_0x30c489 = "david_cookies.js";
if (David_0x2a99cb.isNode() && !David_0x1abd96.existsSync(David_0x30c489)) {
  David_0x2a99cb.log("🔔 外挂ck文件不存在，开始创建模版>>>");
  David_0x1abd96.writeFileSync("./david_cookies.js", "//独立CK文件，主要用来处理多账号大数据量CK,注意JRTTAPP外边不用加引号，依葫芦画瓢。\n//今日头条(三个账号)\nlet JRTTAPP = [{},{},{}]\n//番茄小说(一个账号)\nlet FQXSAPP = [{}]\n//抖音极速版(两个账号)\nlet DYJSBAPP = [{},{}]\n    \nlet APPS = {\n    JRTT: JRTTAPP,\n    FQXS: FQXSAPP,\n    DYJSB: DYJSBAPP\n}\n\nmodule.exports = APPS", _0x19f61b => {});
}
const David_0x1e316c = David_0x2a99cb.isNode() ? require("http") : "";
const David_0x582433 = David_0x2a99cb.isNode() ? require("./sendNotify") : "";
const David_0x4fa902 = David_0x2a99cb.isNode() ? require("./david_cookies") : "";
let David_0x16bb1a = David_0x2a99cb.getdata("tguserid") || 1;
let David_0x31a9da = David_0x2a99cb.getdata("hmjcactivecode") || 0;
let David_0x4fe21f = David_0x2a99cb.getval("hmjcuserck") || 1;
let David_0x497432 = David_0x2a99cb.getval("apiHost") || "http://106.15.104.124:8080";
if (David_0x2a99cb.getval("apiHosts")) {
  David_0x497432 = David_0x2a99cb.getval("apiHosts");
}
const David_0x558309 = 0;
let David_0x1f130b = David_0x2a99cb.getval("tz") || "1";
var David_0x69f4a6 = "";
var David_0x28e910 = "";
let David_0xee6ebd = "";
let David_0x199060 = [];
let David_0x1fc9b0 = [];
let David_0x19a7d6 = [];
let David_0x4a9dde = [];
let David_0x22634f = [];
let David_0x23165d = [];
let David_0x4045e4 = "";
let David_0x5b30ac = "";
let David_0x49b342 = "";
let David_0x553c44 = "";
let David_0x53be0d = "";
let David_0x37f531 = "";
let David_0x3732e8 = "";
let David_0x92b2ff = "";
let David_0x1f3978 = 1;
let David_0x54673d = 1;
let David_0x46a6bf = 1;
let David_0x431949 = 1;
let David_0x4255de = "";
let David_0x4d5ec9 = "";
let David_0x32a1a3 = 3;
let David_0x4a354f = "";
if (David_0x2a99cb.isNode()) {
  if (process.env.HMJCAPP) {
    David_0x2dd9a2 = JSON.parse(process.env.HMJCAPP);
  } else {
    David_0x2dd9a2 = David_0x4fa902.HMJC;
  }
  David_0x16bb1a = process.env.TGUSERID;
  David_0x31a9da = process.env.HMJCACTIVECODE;
  if (process.env.APIHOST) {
    David_0x497432 = process.env.APIHOST;
  }
  if (process.env.APIHOSTS) {
    David_0x497432 = process.env.APIHOSTS;
  }
  David_0x69f4a6 = new Date(new Date().getTime()).getHours();
  David_0x28e910 = new Date(new Date().getTime()).getMinutes();
  David_0x2a99cb.log("🔔 当前环境: Node, 当前时间：" + David_0x69f4a6 + "点");
} else {
  David_0x69f4a6 = new Date().getHours();
  David_0x28e910 = new Date().getMinutes();
  David_0x2a99cb.log("🔔 当前环境: 手机代理, 当前时间：" + David_0x69f4a6 + "点");
}
!(async () => {
  if (typeof $request !== "undefined") {
    await David_0x680668();
  } else {
    if (!David_0x2dd9a2) {
      David_0x2a99cb.log("📢 很抱歉，😭 没有找到账号信息！你确定配置账号信息了吗？");
      return;
    }
    David_0x2a99cb.log("📢 开始检测服务器接口状态>>>");
    let _0xcfd567 = false;
    const _0x2b1471 = David_0x497432.split("&");
    const _0x3fd057 = _0x2b1471.length;
    for (let _0x3c1cf9 = 0; _0x3c1cf9 < _0x3fd057; _0x3c1cf9++) {
      if (David_0x2a99cb.isNode()) {
        _0xcfd567 = await David_0x380fbc("" + _0x2b1471[_0x3c1cf9], 2500);
      } else {
        if (David_0x2a99cb.isSurge() || David_0x2a99cb.isLoon()) {
          _0xcfd567 = await David_0x2484b6("" + _0x2b1471[_0x3c1cf9], 2500);
        } else {
          _0xcfd567 = await David_0x29d766("" + _0x2b1471[_0x3c1cf9], 2500);
        }
      }
      if (_0xcfd567 == true) {
        David_0x497432 = _0x2b1471[_0x3c1cf9];
        David_0x2a99cb.log("📢 接口" + (_0x3c1cf9 + 1) + "[" + _0x2b1471[_0x3c1cf9] + "]服务器接口正常! 🎉");
        break;
      }
      if (_0x3c1cf9 == _0x3fd057 - 1 && _0xcfd567 == false) {
        David_0x2a99cb.log("📢 抱歉，所有接口都不可用, 请前往交流群置顶获取最新的接口地址! 😭");
        David_0x2a99cb.msg(David_0x2a99cb.name, "所有接口都不可用, 请尽快前往交流群置顶获取最新的接口地址!");
        return;
      }
    }
    if (!David_0x31a9da || !David_0x16bb1a || David_0x16bb1a == 1 || David_0x31a9da == 0 || David_0x31a9da.length != 32) {
      David_0x2a99cb.log("❗️ 抱歉，你没有权限运行此脚本, 请关注电报机器人: https://t.me/DavidLoveBot");
      return;
    }
    await David_0x16b159(David_0x16de32, David_0x16bb1a, David_0x31a9da);
    David_0x2a99cb.log("📢 " + David_0x37f531);
    David_0x2a99cb.log("🔔 当前脚本版本号: " + David_0x1faf7c + "，最新版本号: " + David_0x553c44);
    if (David_0x4a354f != "") {
      let _0x450fa8 = new Date(David_0x4a354f).getTime();
      let _0x4145ff = new Date().getTime();
      if (_0x4145ff > _0x450fa8) {
        David_0x2a99cb.log("❗️ 抱歉，VIP到期了，请及时付费。");
        return;
      }
    }
    if (David_0x1faf7c < David_0x553c44) {
      David_0x2a99cb.log("❗️ 当前脚本版本号低于服务器版本，请更新脚本吧！");
      David_0xb77f0a("🔔 当前脚本版本号低于服务器版本，请更新脚本吧！");
      return;
    }
    if (David_0x49b342 != true) {
      David_0x2a99cb.log("❗️ 抱歉, 此脚本已停用。");
      return;
    }
    if (David_0x4255de != true) {
      David_0x2a99cb.log("❗️ 抱歉, 用户不合法，请先私聊机器人加入交流区。 https://t.me/DavidLoveBot");
      return;
    }
    if (David_0x5b30ac != true) {
      David_0x2a99cb.log("❗️ 抱歉，你没有权限运行此脚本, 请关注电报机器人: https://t.me/DavidLoveBot");
      return;
    }
    if (David_0x92b2ff == true) {
      David_0x2a99cb.log("🔔 此脚本采用付费模式。🔒");
    } else {
      David_0x2a99cb.log("🔔 此脚本采用免费模式。🔓");
    }
    if (David_0x4a354f != "") {
      if (David_0x92b2ff == true) {
        let _0x3e2bfd = new Date(David_0x4a354f).getTime();
        let _0x976672 = new Date().getTime();
        if (_0x976672 > _0x3e2bfd) {
          David_0x2a99cb.log("❗️ 抱歉，VIP到期了，请及时付费。");
          return;
        } else {
          David_0x2a99cb.log("🔔 尊敬的会员：您好，你是VIP用户！🔐");
        }
      }
    } else {
      if (David_0x92b2ff == true) {
        if (David_0x3732e8 != true) {
          David_0x2a99cb.log("❗️ 抱歉，你不是付费用户, 你没有权限运行此脚本, 需要使用请查看使用说明。");
          return;
        } else {
          David_0x2a99cb.log("🔔 尊敬的会员：您好，你是付费用户！🔐");
        }
      }
    }
    if (David_0x1f3978 > 1) {
      David_0x2a99cb.log("🔔 尊敬的会员，您好！你使用的是付费多用户授权账号，一次可以运行" + David_0x32a1a3 * David_0x1f3978 + "个账号。");
    }
    if (David_0x54673d > 1) {
      David_0x2a99cb.log("🔔 尊敬的会员，您好！你使用的是付费多用户授权账号，一共可以运行" + David_0x46a6bf + "次, 已经运行了" + David_0x431949 + "次。");
    }
    if (David_0x53be0d != true) {
      David_0x2a99cb.log("❗️ 抱歉,  该用户今天可能已经达到最大运行次数，明天再试吧！");
      return;
    }
    if (David_0x2dd9a2.length > David_0x32a1a3 * David_0x1f3978) {
      David_0x2a99cb.log("❗️ 当前用户一次最多运行" + David_0x32a1a3 * David_0x1f3978 + "个账号，需要增加账号请查看置顶说明。");
      return;
    }
    if (David_0x2dd9a2.length == 0) {
      David_0x2a99cb.log("先抓取账号ck，再运行脚本吧！");
      return;
    }
    if (David_0x431949 + David_0x2dd9a2.length > David_0x46a6bf) {
      David_0x2a99cb.log("📢 一共发现了" + David_0x2dd9a2.length + "个账号");
      David_0x2a99cb.log("❗️ 当前用户运行次数剩余" + (David_0x46a6bf - David_0x431949) + "次，还可以运行" + (David_0x46a6bf - David_0x431949) + "个账号，还需要" + (David_0x2dd9a2.length - (David_0x46a6bf - David_0x431949)) + "次，可以通过赞赏后增加运行次数！");
      return;
    }
    if (David_0x4a354f != "") {
      David_0x2a99cb.log("📢 你的会员有效期到： " + David_0x4a354f);
    }
    David_0x2a99cb.log("📢 一共发现了" + David_0x2dd9a2.length + "个账号");
    let _0xc8875e = [];
    let _0x28a737 = David_0x2dd9a2.length;
    let _0x369f5e = 0;
    if (process.env.hmjc_THREAD_COUNT) {
      _0x369f5e = parseInt(process.env.hmjc_THREAD_COUNT);
    } else {
      _0x369f5e = _0x28a737;
    }
    let _0x1cbf85 = David_0x2dd9a2.length;
    if (_0x369f5e >= _0x28a737) {
      _0x369f5e = _0x28a737;
      _0x1cbf85 = 1;
      David_0x2a99cb.log("📢 你设置的线程数是" + _0x369f5e + "，账号个数是" + _0x28a737 + "，" + _0x1cbf85 + "次可全部跑完。");
      for (let _0x55d891 = 0; _0x55d891 < David_0x2dd9a2.length; _0x55d891++) {
        _0xc8875e.push(David_0x32ad75(_0x55d891));
        David_0x199060[_0x55d891] = "";
        David_0x19a7d6[_0x55d891] = 1;
      }
      await Promise.allSettled(_0xc8875e).then(_0x547718 => {
        David_0x2a99cb.log("日志整理功能如下：");
        David_0x2a99cb.log("---------------日志整理开始--------------");
        for (let _0x34aa90 = 0; _0x34aa90 < David_0x2dd9a2.length; _0x34aa90++) {
          David_0x2a99cb.log(David_0x199060[_0x34aa90]);
          David_0xee6ebd += David_0x199060[_0x34aa90];
        }
        David_0x2a99cb.log("---------------日志整理结束--------------");
        David_0xb77f0a(David_0xee6ebd);
      });
    } else {
      _0x1cbf85 = Math.ceil(_0x28a737 / _0x369f5e);
      David_0x2a99cb.log("📢 你设置的线程数是" + _0x369f5e + "，账号个数是" + _0x28a737 + "，计算后分" + _0x1cbf85 + "次执行，一次可执行" + _0x369f5e + "个账号，最后一次如果不够" + _0x369f5e + "个账号，剩多少个账号就跑几个账号。");
      for (let _0xbd70f8 = 0; _0xbd70f8 < _0x1cbf85; _0xbd70f8++) {
        for (let _0x1eafb7 = _0xbd70f8 * _0x369f5e; _0x1eafb7 < _0x369f5e * (_0xbd70f8 + 1) && _0x1eafb7 < _0x28a737; _0x1eafb7++) {
          _0xc8875e.push(David_0x32ad75(_0x1eafb7));
          David_0x199060[_0x1eafb7] = "";
          David_0x19a7d6[_0x1eafb7] = 1;
        }
        await Promise.allSettled(_0xc8875e).then(_0xaae340 => {
          _0xc8875e = [];
          if (_0xbd70f8 == _0x1cbf85 - 1) {
            David_0x2a99cb.log("日志整理功能如下：");
            David_0x2a99cb.log("---------------日志整理开始--------------");
            for (let _0x497405 = 0; _0x497405 < David_0x2dd9a2.length; _0x497405++) {
              David_0x2a99cb.log(David_0x199060[_0x497405]);
              David_0xee6ebd += David_0x199060[_0x497405];
            }
            David_0x2a99cb.log("---------------日志整理结束--------------");
            David_0xb77f0a(David_0xee6ebd);
          }
        });
      }
    }
  }
})().catch(_0x235a0f => David_0x2a99cb.logErr(_0x235a0f)).finally(() => David_0x2a99cb.done());
async function David_0x32ad75(_0x421b4b) {
  return new Promise((_0x156b1a, _0x2eeb13) => {
    David_0x2a99cb.log("[账号" + (_0x421b4b + 1 < 10 ? "0" + (_0x421b4b + 1) : _0x421b4b + 1) + "]: 开始执行 working......");
    David_0x88c82d(_0x156b1a, _0x421b4b);
  });
}
async function David_0x522df4(_0x40ef54) {
  if (David_0x2a99cb.isNode()) {
    if (David_0x4a9dde[_0x40ef54] > 0) {
      David_0x2a99cb.log("[账号" + (_0x40ef54 + 1 < 10 ? "0" + (_0x40ef54 + 1) : _0x40ef54 + 1) + "]: 尝试重新连接服务器>>>>>>");
    }
    David_0x1fc9b0[_0x40ef54] = new David_0x14caea(David_0x497432.replace("http", "ws") + "/ws");
    David_0x1fc9b0[_0x40ef54].on("open", function _0x1d2b2f() {
      David_0x2a99cb.log("[账号" + (_0x40ef54 + 1 < 10 ? "0" + (_0x40ef54 + 1) : _0x40ef54 + 1) + "]: 签名通道已连接");
    });
    David_0x1fc9b0[_0x40ef54].on("close", function _0x30dfb() {
      David_0x2a99cb.log("[账号" + (_0x40ef54 + 1 < 10 ? "0" + (_0x40ef54 + 1) : _0x40ef54 + 1) + "]: 签名通道已关闭，原因是任务已处理完成");
    });
    David_0x1fc9b0[_0x40ef54].on("error", function _0x5043f5() {
      David_0x2a99cb.log("[账号" + (_0x40ef54 + 1 < 10 ? "0" + (_0x40ef54 + 1) : _0x40ef54 + 1) + "]: 签名通道已关闭，原因是出现错误");
      David_0x19a7d6[_0x40ef54] = 1;
      David_0x4a9dde[_0x40ef54]++;
      if (David_0x4a9dde[_0x40ef54] <= 3) {
        David_0x522df4(_0x40ef54);
      }
    });
  }
}
async function David_0x88c82d(_0x14033b, _0x3fbf60) {
  await David_0x2a99cb.wait(3000, 5000);
  await David_0x597db1(_0x3fbf60);
  await David_0x3a5181(_0x3fbf60, 0.3);
  await David_0x45526a(_0x3fbf60);
  await David_0x488c47(David_0x16de32, David_0x16bb1a);
  _0x14033b();
}
async function David_0x680668() {
  if ($request.url.match(/\/passport\/UnionLogin/)) {
    const _0x42e62e = $request.body;
    let _0x2278bf = David_0x4fe21f - 1;
    if (David_0x2dd9a2[_0x2278bf]) {
      David_0x2dd9a2[_0x2278bf].token_body = _0x42e62e;
    } else {
      const _0x4c26a3 = {
        token_body: _0x42e62e
      };
      David_0x2dd9a2[_0x2278bf] = _0x4c26a3;
    }
    David_0x2a99cb.setdata(JSON.stringify(David_0x2dd9a2, null, 2), "hmjcapp");
    David_0x2a99cb.msg(David_0x2a99cb.name, "快音账号" + (_0x2278bf + 1) + "Token获取成功！🎉");
  }
}
async function David_0x597db1(_0x395233) {
  let _0xd11a6f = "https://freevideo.zqqds.cn/free-video-portal/portal/1104";
  if (David_0x2dd9a2[_0x395233].platform == 1) {
    _0xd11a6f = _0xd11a6f.replace("free-video-portal", "free-video-ios");
    _0xd11a6f = _0xd11a6f.replace("freevideo.zqqds.cn", "scapi.kydco.cn/api");
  }
  let _0x15b63a = await David_0x5819c(_0x395233, "{}@encrypt");
  await David_0x14d870(_0xd11a6f, _0x15b63a, _0x395233);
  await David_0x332d2b("post", David_0x22634f[_0x395233], David_0x156a4a());
  let _0x4cef24 = David_0x4045e4;
  if (_0x4cef24 != null && _0x4cef24.code == 0) {
    let _0x27f7e4 = JSON.parse(await David_0x5819c(_0x395233, _0x4cef24.data + "@decrypt"));
    David_0x2a99cb.log("[账号" + (_0x395233 + 1 < 10 ? "0" + (_0x395233 + 1) : _0x395233 + 1) + "]: 用户名=> " + _0x27f7e4.userInfoVo.name);
    David_0x199060[_0x395233] += "[账号" + (_0x395233 + 1 < 10 ? "0" + (_0x395233 + 1) : _0x395233 + 1) + "]: 用户名=> " + _0x27f7e4.userInfoVo.name + "\n";
    David_0x2a99cb.log("[账号" + (_0x395233 + 1 < 10 ? "0" + (_0x395233 + 1) : _0x395233 + 1) + "]: 用户编号=> " + _0x27f7e4.userInfoVo.userId);
    David_0x199060[_0x395233] += "[账号" + (_0x395233 + 1 < 10 ? "0" + (_0x395233 + 1) : _0x395233 + 1) + "]: 用户编号=> " + _0x27f7e4.userInfoVo.userId + "\n";
    David_0x2a99cb.log("[账号" + (_0x395233 + 1 < 10 ? "0" + (_0x395233 + 1) : _0x395233 + 1) + "]: 金币=> " + _0x27f7e4.userInfoVo.golds);
    David_0x199060[_0x395233] += "[账号" + (_0x395233 + 1 < 10 ? "0" + (_0x395233 + 1) : _0x395233 + 1) + "]: 金币=> " + _0x27f7e4.userInfoVo.golds + "\n";
  } else {
    David_0x2a99cb.log("[账号" + (_0x395233 + 1 < 10 ? "0" + (_0x395233 + 1) : _0x395233 + 1) + "]: 用户名信息=> " + _0x4cef24.msg);
    David_0x199060[_0x395233] += "[账号" + (_0x395233 + 1 < 10 ? "0" + (_0x395233 + 1) : _0x395233 + 1) + "]: 用户名信息=> " + _0x4cef24.msg + "\n";
  }
}
async function David_0x45526a(_0x356ca3) {
  let _0xfbb23e = "https://freevideo.zqqds.cn/free-video-portal/portal/1301";
  if (David_0x2dd9a2[_0x356ca3].platform == 1) {
    _0xfbb23e = _0xfbb23e.replace("free-video-portal", "free-video-ios");
    _0xfbb23e = _0xfbb23e.replace("freevideo.zqqds.cn", "scapi.kydco.cn/api");
  }
  let _0x2cbd9f = await David_0x5819c(_0x356ca3, "{\"signText\":1}@encrypt");
  await David_0x14d870(_0xfbb23e, _0x2cbd9f, _0x356ca3);
  await David_0x332d2b("post", David_0x22634f[_0x356ca3], David_0x156a4a());
  let _0xfa11ad = David_0x4045e4;
  if (_0xfa11ad != null && _0xfa11ad.code == 0) {
    let _0xedc539 = JSON.parse(await David_0x5819c(_0x356ca3, _0xfa11ad.data + "@decrypt"));
    let _0x4eb54e = _0xedc539.taskSetList;
    let _0x2c1de2 = _0x4eb54e.find(_0xe0f117 => _0xe0f117.taskSetTitle == "日常任务");
    if (_0x2c1de2) {
      let _0x15d9f2 = _0x2c1de2.taskList;
      for (let _0x464fe2 = 0; _0x464fe2 < _0x15d9f2.length; _0x464fe2++) {
        let _0x49515b = _0x15d9f2[_0x464fe2];
        if (_0x49515b.taskId == 124) {
          if (_0x49515b.taskStatus == 2) {
            await David_0x6cd4e5(_0x356ca3, _0x49515b);
            await David_0x2a99cb.wait(David_0x15149a(10000, 15000));
          }
        } else {
          if (_0x49515b.taskId == 134 || _0x49515b.taskId == 126 || _0x49515b.taskId == 170 || _0x49515b.taskTitle.indexOf("10分钟") != -1) {
            let _0x3f1b40 = _0x49515b.videoInfos;
            if (_0x49515b.taskStatus == 1) {
              for (let _0x411454 = 0; _0x411454 < _0x3f1b40.length; _0x411454++) {
                let _0x2f11a3 = _0x3f1b40[_0x411454];
                await David_0x111c6e(_0x356ca3, _0x2f11a3.bookId);
                await David_0x2a99cb.wait(David_0x15149a(10000, 15000));
              }
            }
            if (_0x49515b.taskStatus == 2) {
              await David_0x6cd4e5(_0x356ca3, _0x49515b);
              await David_0x2a99cb.wait(David_0x15149a(10000, 15000));
            }
          } else {
            if (_0x49515b.taskId == 130 || _0x49515b.taskId == 178) {
              if (_0x49515b.taskStatus == 1) {
                await David_0x13c44b(_0x356ca3, _0x49515b.taskAction, _0x49515b.taskId);
              }
              if (_0x49515b.taskStatus == 2) {
                await David_0x6cd4e5(_0x356ca3, _0x49515b);
                await David_0x2a99cb.wait(David_0x15149a(10000, 15000));
              }
            } else {
              if (_0x49515b.taskId == 138 || _0x49515b.taskId == 146 || _0x49515b.taskTitle.indexOf("签到") != -1) {
                if (_0x49515b.taskStatus == 1) {
                  await David_0x13c44b(_0x356ca3, _0x49515b.taskAction, _0x49515b.taskId);
                  await David_0x2a99cb.wait(David_0x15149a(10000, 15000));
                  await David_0x6cd4e5(_0x356ca3, _0x49515b);
                  if (_0x49515b.taskId == 146) {
                    _0x49515b.taskId = 102;
                    _0x49515b.taskTitle = "签到激励广告";
                    await David_0x6cd4e5(_0x356ca3, _0x49515b);
                  }
                }
                if (_0x49515b.taskStatus == 2) {
                  await David_0x6cd4e5(_0x356ca3, _0x49515b);
                  await David_0x2a99cb.wait(David_0x15149a(10000, 15000));
                }
              } else {
                if (_0x49515b.taskId == 128 || _0x49515b.taskId == 182) {
                  if ((David_0x69f4a6 == 5 || David_0x69f4a6 == 11 || David_0x69f4a6 == 17 || David_0x69f4a6 == 21) && David_0x28e910 < 20) {
                    await David_0x6cd4e5(_0x356ca3, _0x49515b);
                  }
                } else {
                  if (_0x49515b.taskId == 76 || _0x49515b.taskId == 179) {
                    let _0x262020 = _0x49515b.stageReadAwardList;
                    if (_0x49515b.taskStatus != 3) {
                      if (David_0x2dd9a2[_0x356ca3].platform == 1) {
                        await David_0x5582e8(_0x356ca3);
                      } else {
                        await David_0x111c6e(_0x356ca3);
                      }
                    }
                    for (let _0x58a0d6 = 0; _0x58a0d6 < _0x262020.length; _0x58a0d6++) {
                      let _0x1bf220 = _0x262020[_0x58a0d6];
                      if (_0x1bf220.status == 2) {
                        await David_0x6cd4e5(_0x356ca3, _0x49515b);
                        await David_0x2a99cb.wait(David_0x15149a(10000, 15000));
                      }
                    }
                  } else {
                    if (_0x49515b.taskStatus == 1 || _0x49515b.taskStatus == 2) {
                      await David_0x6cd4e5(_0x356ca3, _0x49515b);
                      await David_0x2a99cb.wait(David_0x15149a(10000, 15000));
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  } else {
    David_0x2a99cb.log("[账号" + (_0x356ca3 + 1 < 10 ? "0" + (_0x356ca3 + 1) : _0x356ca3 + 1) + "]: 用户名=> " + _0xfa11ad.msg);
    David_0x199060[_0x356ca3] += "[账号" + (_0x356ca3 + 1 < 10 ? "0" + (_0x356ca3 + 1) : _0x356ca3 + 1) + "]: 用户名=> " + _0xfa11ad.msg + "\n";
  }
}
async function David_0x6cd4e5(_0x4e0fde, _0x431e77) {
  let _0x2a3176 = David_0x4bf9e8();
  let _0x367ea3 = "https://freevideo.zqqds.cn/free-video-portal/portal/1303";
  if (David_0x2dd9a2[_0x4e0fde].platform == 1) {
    _0x367ea3 = _0x367ea3.replace("free-video-portal", "free-video-ios");
    _0x367ea3 = _0x367ea3.replace("freevideo.zqqds.cn", "scapi.kydco.cn/api");
  }
  let _0x97647d = await David_0x5819c(_0x4e0fde, "{\"taskId\":" + _0x431e77.taskId + ",\"buttonClickTime\":" + _0x2a3176 + "}@encrypt");
  if (_0x431e77.awardVideoToken) {
    _0x97647d = await David_0x5819c(_0x4e0fde, "{\"taskId\":" + _0x431e77.taskId + ",\"awardVideoToken\":\"" + _0x431e77.awardVideoToken + "\",\"buttonClickTime\":" + _0x2a3176 + "}@encrypt");
  }
  await David_0x14d870(_0x367ea3, _0x97647d, _0x4e0fde);
  await David_0x332d2b("post", David_0x22634f[_0x4e0fde], David_0x156a4a());
  let _0x24fe3e = David_0x4045e4;
  if (_0x24fe3e != null && _0x24fe3e.code == 0) {
    let _0x978c1e = JSON.parse(await David_0x5819c(_0x4e0fde, _0x24fe3e.data + "@decrypt"));
    if (_0x431e77.taskTitle == "签到") {
      David_0x2a99cb.log("[账号" + (_0x4e0fde + 1 < 10 ? "0" + (_0x4e0fde + 1) : _0x4e0fde + 1) + "]: " + _0x431e77.taskTitle + "完成");
    } else {
      David_0x2a99cb.log("[账号" + (_0x4e0fde + 1 < 10 ? "0" + (_0x4e0fde + 1) : _0x4e0fde + 1) + "]: " + _0x431e77.taskTitle + "完成，" + _0x978c1e.message);
      David_0x199060[_0x4e0fde] += "[账号" + (_0x4e0fde + 1 < 10 ? "0" + (_0x4e0fde + 1) : _0x4e0fde + 1) + "]: " + _0x431e77.taskTitle + "完成，" + _0x978c1e.message + "\n";
    }
    if (_0x978c1e.afterAwardVideoTaskVo) {
      let _0x324f61 = _0x978c1e.afterAwardVideoTaskVo;
      _0x324f61.awardVideoToken = _0x978c1e.awardVideoToken;
      await David_0x2a99cb.wait(David_0x15149a(10000, 15000));
      await David_0x6cd4e5(_0x4e0fde, _0x324f61);
    }
  } else {
    let _0x309902 = JSON.parse(await David_0x5819c(_0x4e0fde, _0x24fe3e.data + "@decrypt"));
    David_0x2a99cb.log("[账号" + (_0x4e0fde + 1 < 10 ? "0" + (_0x4e0fde + 1) : _0x4e0fde + 1) + "]: " + _0x431e77.taskTitle + "，" + _0x309902.message);
    David_0x199060[_0x4e0fde] += "[账号" + (_0x4e0fde + 1 < 10 ? "0" + (_0x4e0fde + 1) : _0x4e0fde + 1) + "]: " + _0x431e77.taskTitle + "，" + _0x309902.message + "\n";
  }
}
async function David_0x111c6e(_0x2a7f01, _0x261c5c) {
  let _0x1b5ac7 = "https://freevideo.zqqds.cn/free-video-portal/portal/1302";
  if (David_0x2dd9a2[_0x2a7f01].platform == 1) {
    _0x1b5ac7 = _0x1b5ac7.replace("free-video-portal", "free-video-ios");
    _0x1b5ac7 = _0x1b5ac7.replace("freevideo.zqqds.cn", "scapi.kydco.cn/api");
  }
  let _0x11ac68 = "4100010" + David_0x15149a(1000, 1500);
  let _0x2e128f = David_0x15149a(55920000, 559203859);
  if (_0x261c5c) {
    _0x11ac68 = _0x261c5c;
  }
  let _0x1926ae = "{\"action\":36,\"taskId\":76,\"readDuration\":120,\"bookId\":\"" + _0x11ac68 + "\",\"chapterId\":\"" + _0x2e128f + "\",\"scene\":2}";
  let _0x2b5c6f = await David_0x5819c(_0x2a7f01, _0x1926ae + "@encrypt");
  await David_0x14d870(_0x1b5ac7, _0x2b5c6f, _0x2a7f01);
  await David_0x332d2b("post", David_0x22634f[_0x2a7f01], David_0x156a4a());
  let _0x79367f = David_0x4045e4;
  if (_0x79367f != null && _0x79367f.code == 0) {
    let _0x53bb5d = JSON.parse(await David_0x5819c(_0x2a7f01, _0x79367f.data + "@decrypt"));
    David_0x2a99cb.log("[账号" + (_0x2a7f01 + 1 < 10 ? "0" + (_0x2a7f01 + 1) : _0x2a7f01 + 1) + "]: 当前看剧总时长=> " + _0x53bb5d.totalReadDuration);
    David_0x199060[_0x2a7f01] += "[账号" + (_0x2a7f01 + 1 < 10 ? "0" + (_0x2a7f01 + 1) : _0x2a7f01 + 1) + "]: 当前看剧总时长=> " + _0x53bb5d.totalReadDuration + "\n";
  } else {
    David_0x2a99cb.log("[账号" + (_0x2a7f01 + 1 < 10 ? "0" + (_0x2a7f01 + 1) : _0x2a7f01 + 1) + "]: 看时长任务异常");
    David_0x199060[_0x2a7f01] += "[账号" + (_0x2a7f01 + 1 < 10 ? "0" + (_0x2a7f01 + 1) : _0x2a7f01 + 1) + "]: 看时长任务异常\n";
  }
}
async function David_0x5582e8(_0x22779e, _0x17ac4e) {
  let _0x57b050 = "https://freevideo.zqqds.cn/free-video-portal/portal/1302";
  if (David_0x2dd9a2[_0x22779e].platform == 1) {
    _0x57b050 = _0x57b050.replace("free-video-portal", "free-video-ios");
    _0x57b050 = _0x57b050.replace("freevideo.zqqds.cn", "scapi.kydco.cn/api");
  }
  let _0xa8dd2a = "4100010" + David_0x15149a(1000, 1500);
  let _0x5422bc = David_0x15149a(55920000, 559203859);
  if (_0x17ac4e) {
    _0xa8dd2a = _0x17ac4e;
  }
  let _0x518943 = "{\"action\":36,\"taskId\":179,\"readDuration\":120,\"bookId\":\"" + _0xa8dd2a + "\",\"chapterId\":\"" + _0x5422bc + "\",\"scene\":2}";
  let _0x56e7b9 = await David_0x5819c(_0x22779e, _0x518943 + "@encrypt");
  await David_0x14d870(_0x57b050, _0x56e7b9, _0x22779e);
  await David_0x332d2b("post", David_0x22634f[_0x22779e], David_0x156a4a());
  let _0x489c79 = David_0x4045e4;
  if (_0x489c79 != null && _0x489c79.code == 0) {
    let _0x219a35 = JSON.parse(await David_0x5819c(_0x22779e, _0x489c79.data + "@decrypt"));
    David_0x2a99cb.log("[账号" + (_0x22779e + 1 < 10 ? "0" + (_0x22779e + 1) : _0x22779e + 1) + "]: 当前看剧总时长=> " + _0x219a35.totalReadDuration);
    David_0x199060[_0x22779e] += "[账号" + (_0x22779e + 1 < 10 ? "0" + (_0x22779e + 1) : _0x22779e + 1) + "]: 当前看剧总时长=> " + _0x219a35.totalReadDuration + "\n";
  } else {
    David_0x2a99cb.log("[账号" + (_0x22779e + 1 < 10 ? "0" + (_0x22779e + 1) : _0x22779e + 1) + "]: 看时长任务异常");
    David_0x199060[_0x22779e] += "[账号" + (_0x22779e + 1 < 10 ? "0" + (_0x22779e + 1) : _0x22779e + 1) + "]: 看时长任务异常\n";
  }
}
async function David_0x13c44b(_0x58a818, _0x2f310c, _0x2754b8) {
  let _0x239739 = "https://freevideo.zqqds.cn/free-video-portal/portal/1302";
  if (David_0x2dd9a2[_0x58a818].platform == 1) {
    _0x239739 = _0x239739.replace("free-video-portal", "free-video-ios");
    _0x239739 = _0x239739.replace("freevideo.zqqds.cn", "scapi.kydco.cn/api");
  }
  let _0x3ee46d = "{\"action\":" + _0x2f310c + ",\"taskId\":" + _0x2754b8 + "}";
  let _0x11fa57 = await David_0x5819c(_0x58a818, _0x3ee46d + "@encrypt");
  await David_0x14d870(_0x239739, _0x11fa57, _0x58a818);
  await David_0x332d2b("post", David_0x22634f[_0x58a818], David_0x156a4a());
  let _0x44ce36 = David_0x4045e4;
  if (!(_0x44ce36 != null && _0x44ce36.code == 0)) {
    David_0x2a99cb.log("[账号" + (_0x58a818 + 1 < 10 ? "0" + (_0x58a818 + 1) : _0x58a818 + 1) + "]: 任务异常");
    David_0x199060[_0x58a818] += "[账号" + (_0x58a818 + 1 < 10 ? "0" + (_0x58a818 + 1) : _0x58a818 + 1) + "]: 任务异常\n";
  }
}
async function David_0x3a5181(_0x1ba5a8, _0x5a6cb2) {
  let _0x222631 = "https://freevideo.zqqds.cn/free-video-portal/portal/1854";
  if (David_0x2dd9a2[_0x1ba5a8].platform == 1) {
    _0x222631 = _0x222631.replace("free-video-portal", "free-video-ios");
    _0x222631 = _0x222631.replace("freevideo.zqqds.cn", "scapi.kydco.cn/api");
  }
  let _0x57aac3 = "{}";
  let _0x3d4db1 = await David_0x5819c(_0x1ba5a8, _0x57aac3 + "@encrypt");
  await David_0x14d870(_0x222631, _0x3d4db1, _0x1ba5a8);
  await David_0x332d2b("post", David_0x22634f[_0x1ba5a8], David_0x156a4a());
  let _0x305609 = David_0x4045e4;
  if (_0x305609 != null && _0x305609.code == 0) {
    let _0x5041d = JSON.parse(await David_0x5819c(_0x1ba5a8, _0x305609.data + "@decrypt"));
    David_0x2a99cb.log("[账号" + (_0x1ba5a8 + 1 < 10 ? "0" + (_0x1ba5a8 + 1) : _0x1ba5a8 + 1) + "]: 可转换现金=> " + _0x5041d.cashAmount + "元");
    David_0x199060[_0x1ba5a8] += "[账号" + (_0x1ba5a8 + 1 < 10 ? "0" + (_0x1ba5a8 + 1) : _0x1ba5a8 + 1) + "]: 可转换现金=> " + _0x5041d.cashAmount + "元\n";
    David_0x2a99cb.log("[账号" + (_0x1ba5a8 + 1 < 10 ? "0" + (_0x1ba5a8 + 1) : _0x1ba5a8 + 1) + "]: 余额=> " + _0x5041d.cashBalance + "元");
    David_0x199060[_0x1ba5a8] += "[账号" + (_0x1ba5a8 + 1 < 10 ? "0" + (_0x1ba5a8 + 1) : _0x1ba5a8 + 1) + "]: 余额=> " + _0x5041d.cashBalance + "元\n";
    let _0x549e7f = _0x5041d.cashOutAmountList.find(_0x2479ef => _0x2479ef.cashoutAmount == _0x5a6cb2);
    if (_0x549e7f) {
      if (_0x5041d.wechatBindInfo.nickname && _0x5041d.cashBalance >= _0x5a6cb2) {
        await David_0x15e738(_0x1ba5a8, _0x549e7f);
      }
    } else {
      let _0x5450cb = _0x5041d.cashOutAmountList.find(_0x370134 => _0x370134.cashoutAmount == 1);
      if (_0x5450cb && _0x5041d.wechatBindInfo && _0x5041d.wechatBindInfo.nickname && _0x5041d.cashBalance >= 1) {
        await David_0x15e738(_0x1ba5a8, _0x5450cb);
      } else {
        let _0x538620 = _0x5041d.cashOutAmountList.find(_0xd6d542 => _0xd6d542.cashoutAmount == 10);
        if (_0x538620 && _0x5041d.wechatBindInfo && _0x5041d.wechatBindInfo.nickname && _0x5041d.cashBalance >= 10) {
          await David_0x15e738(_0x1ba5a8, _0x538620);
        }
      }
    }
  } else {
    David_0x2a99cb.log("[账号" + (_0x1ba5a8 + 1 < 10 ? "0" + (_0x1ba5a8 + 1) : _0x1ba5a8 + 1) + "]: 任务异常");
    David_0x199060[_0x1ba5a8] += "[账号" + (_0x1ba5a8 + 1 < 10 ? "0" + (_0x1ba5a8 + 1) : _0x1ba5a8 + 1) + "]: 任务异常\n";
  }
}
async function David_0x15e738(_0x390ecf, _0x1f0a64) {
  let _0x9217f0 = "https://freevideo.zqqds.cn/free-video-portal/portal/1856";
  if (David_0x2dd9a2[_0x390ecf].platform == 1) {
    _0x9217f0 = _0x9217f0.replace("free-video-portal", "free-video-ios");
    _0x9217f0 = _0x9217f0.replace("freevideo.zqqds.cn", "scapi.kydco.cn/api");
  }
  let _0x474868 = "{\"amountId\":" + _0x1f0a64.id + ",\"dataHashVal\":" + _0x1f0a64.dataHashVal + ",\"type\":\"cash\"}";
  let _0x232a24 = await David_0x5819c(_0x390ecf, _0x474868 + "@encrypt");
  await David_0x14d870(_0x9217f0, _0x232a24, _0x390ecf);
  await David_0x332d2b("post", David_0x22634f[_0x390ecf], David_0x156a4a());
  let _0x31922a = David_0x4045e4;
  if (_0x31922a != null && _0x31922a.code == 13) {
    David_0x2a99cb.log("[账号" + (_0x390ecf + 1 < 10 ? "0" + (_0x390ecf + 1) : _0x390ecf + 1) + "]: 提现" + _0x1f0a64.cashoutAmount + "元，成功！");
    David_0x199060[_0x390ecf] += "[账号" + (_0x390ecf + 1 < 10 ? "0" + (_0x390ecf + 1) : _0x390ecf + 1) + "]: 提现" + _0x1f0a64.cashoutAmount + "元，成功！\n";
  } else {
    David_0x2a99cb.log("[账号" + (_0x390ecf + 1 < 10 ? "0" + (_0x390ecf + 1) : _0x390ecf + 1) + "]: 提现" + _0x1f0a64.cashoutAmount + "元，任务异常");
    David_0x199060[_0x390ecf] += "[账号" + (_0x390ecf + 1 < 10 ? "0" + (_0x390ecf + 1) : _0x390ecf + 1) + "]: 提现" + _0x1f0a64.cashoutAmount + "元，任务异常\n";
  }
}
function David_0x16b159(_0x150c62, _0x577d23, _0x1c2005) {
  return new Promise((_0x143a32, _0x3a9c9c) => {
    const _0x1fbe07 = David_0x497432 + "/script/permissions/lastest";
    const _0x43da8c = {
      appName: _0x150c62,
      userId: _0x577d23,
      activityCode: _0x1c2005,
      version: David_0x1faf7c
    };
    const _0x47c87c = {
      "Content-Type": "application/json",
      accept: "application/json"
    };
    const _0x14790b = {
      url: _0x1fbe07,
      headers: _0x47c87c,
      body: JSON.stringify(_0x43da8c)
    };
    David_0x2a99cb.post(_0x14790b, async (_0xfcfc20, _0x5a689f, _0x5f268d) => {
      if (_0x5f268d && _0x5f268d != null && _0x5f268d.replace(/\"/g, "").length > 50) {
        const _0x404171 = _0x5f268d.replace(/\"/g, "").slice(34);
        const _0x96d4cf = new David_0x44b907();
        result = JSON.parse(_0x96d4cf.decode(_0x404171));
        try {
          David_0x553c44 = result.version;
          David_0x5b30ac = result.userAuth;
          David_0x49b342 = result.scriptAuth;
          David_0x53be0d = result.runAuth;
          David_0x37f531 = result.notify;
          David_0x3732e8 = result.vipAuth;
          David_0x92b2ff = result.isCharge;
          David_0x1f3978 = result.runAcounts;
          David_0x54673d = result.buyCount;
          David_0x431949 = result.runedCounts;
          David_0x46a6bf = result.runTotalCounts;
          David_0x4255de = result.userRank;
          David_0x4d5ec9 = result.invicate;
          David_0x32a1a3 = result.accountNumbers;
          David_0x4a354f = result.vipDate;
        } catch (_0x4499d5) {
          David_0x2a99cb.log(_0x4499d5);
        }
      } else {
        David_0x2a99cb.log("请求服务器接口出现错误，请检查网络连接情况");
      }
      _0x143a32();
    });
  });
}
function David_0x488c47(_0x251540, _0x430213) {
  return new Promise((_0x236416, _0x59cbd5) => {
    const _0x32dfea = David_0x497432 + "/script/run/add";
    const _0x1af28b = {
      appName: _0x251540,
      userId: _0x430213,
      activityCode: David_0x31a9da,
      version: David_0x1faf7c
    };
    const _0x1a0ebf = {
      "Content-Type": "application/json",
      accept: "application/json"
    };
    const _0x5bd36a = {
      url: _0x32dfea,
      headers: _0x1a0ebf,
      body: JSON.stringify(_0x1af28b)
    };
    David_0x2a99cb.post(_0x5bd36a, async (_0x3220fc, _0x124d1f, _0x44b5f6) => {
      _0x236416();
    });
  });
}
function David_0x380fbc(_0x1288d8, _0x2c34d3) {
  return new Promise((_0x22108f, _0x379d37) => {
    const _0x2a871a = setTimeout(() => {
      _0x22108f(false);
    }, _0x2c34d3);
    const _0x4e8a45 = David_0x1e316c.get(_0x1288d8, _0x4548ea => {
      clearTimeout(_0x2a871a);
      if (_0x4548ea.statusCode === 404) {
        _0x22108f(true);
      } else {
        _0x22108f(false);
      }
    });
    _0x4e8a45.on("error", _0x569ad9 => {
      clearTimeout(_0x2a871a);
      _0x22108f(false);
    });
    _0x4e8a45.on("timeout", () => {
      _0x4e8a45.abort();
      _0x379d37(new Error("请求超时"));
    });
  });
}
async function David_0x29d766(_0x31f0b1, _0x431d34 = 3000) {
  return new Promise((_0x2ebaf8, _0x22b6e2) => {
    const _0xb623ce = {
      url: _0x31f0b1 + "/docs"
    };
    setTimeout(() => {
      _0x2ebaf8(false);
    }, _0x431d34);
    David_0x2a99cb.get(_0xb623ce, async (_0x29943b, _0x65f4dc, _0xc2038d) => {
      if (_0x65f4dc.status == 401) {
        _0x2ebaf8(true);
      } else {
        _0x2ebaf8(false);
      }
    });
  });
}
async function David_0x2484b6(_0x2d7634, _0x34f735 = 3000) {
  return new Promise((_0x13b1f6, _0x37f106) => {
    const _0xf9d5f3 = {
      url: _0x2d7634 + "/"
    };
    setTimeout(() => {
      _0x13b1f6(false);
    }, _0x34f735);
    $httpClient.get(_0xf9d5f3, async (_0x183fe8, _0x1ad794, _0x519818) => {
      if (_0x519818 == "{\"detail\":\"Not Found\"}") {
        _0x13b1f6(true);
      } else {
        _0x13b1f6(false);
      }
    });
  });
}
async function David_0x64d979(_0x571cc4, _0x28189d, _0x2f9e1d) {
  return new Promise((_0x15e85, _0x1c954c) => {
    const _0x135658 = David_0x497432 + "/redis/hash/get/" + _0x28189d + "/" + _0x2f9e1d;
    const _0x21bd5c = {
      "Content-Type": "application/json",
      accept: "application/json"
    };
    const _0x4522dc = {
      url: _0x135658,
      headers: _0x21bd5c
    };
    David_0x2a99cb.get(_0x4522dc, async (_0x1d0a47, _0x2eee5c, _0x456fff) => {
      const _0x3e4082 = _0x456fff.replace(/\"/g, "");
      answerTexts[_0x571cc4] = _0x3e4082;
      _0x15e85();
    });
  });
}
function David_0x13094b(_0x48d34c, _0x47a167, _0x48b9e1) {
  return new Promise((_0x2d69d0, _0x1c6806) => {
    const _0x45cbcd = David_0x497432 + "/redis/hash/set";
    const _0x4024eb = {
      key: _0x48d34c,
      hashKey: _0x47a167,
      hashValue: _0x48b9e1
    };
    const _0x1b83c9 = {
      "Content-Type": "application/json",
      accept: "application/json"
    };
    const _0x5bb4d9 = {
      url: _0x45cbcd,
      headers: _0x1b83c9,
      body: JSON.stringify(_0x4024eb)
    };
    David_0x2a99cb.post(_0x5bb4d9, async (_0x2e220b, _0x12fab3, _0x1a6727) => {
      _0x2d69d0();
    });
  });
}
function David_0x363c22(_0x5b5365) {
  return new Promise((_0x3885fc, _0x5607a7) => {
    const _0x2efaac = David_0x497432 + "/redis/set/pop/" + _0x5b5365;
    const _0x5a40e5 = {
      "Content-Type": "application/json",
      accept: "application/json"
    };
    const _0x4036bf = {
      url: _0x2efaac,
      headers: _0x5a40e5
    };
    David_0x2a99cb.get(_0x4036bf, async (_0x19ed6b, _0xeade0e, _0x531784) => {
      const _0x2e3b69 = _0x531784.replace(/\"/g, "");
      popCookie = _0x2e3b69;
      _0x3885fc();
    });
  });
}
async function David_0x14d870(_0x235f82, _0x5bd9fc, _0x4c6002) {
  let _0x451879 = "okhttp/4.10.0";
  if (David_0x2dd9a2[_0x4c6002].ua && David_0x2dd9a2[_0x4c6002].ua != "") {
    _0x451879 = David_0x2dd9a2[_0x4c6002].ua;
  }
  let _0x35889c = David_0x4205dd(_0x235f82);
  const _0x1c5b8b = {
    "Content-Type": "application/json; charset=utf-8",
    "User-Agent": _0x451879,
    datas: David_0x2dd9a2[_0x4c6002].data,
    Host: _0x35889c
  };
  const _0x5232c1 = {
    url: _0x235f82,
    headers: _0x1c5b8b
  };
  if (_0x5bd9fc) {
    _0x5232c1.body = _0x5bd9fc;
  }
  David_0x22634f[_0x4c6002] = _0x5232c1;
  return _0x5232c1;
}
function David_0x414012(_0x10644c, _0x5b05e5, _0x410453) {
  let _0xbfd632 = "Mozilla/5.0 (iPhone; CPU iPhone OS 16_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.31(0x18001f34) NetType/WIFI Language/zh_CN";
  if (David_0x2dd9a2[_0x410453].ua && David_0x2dd9a2[_0x410453].ua != "") {
    _0xbfd632 = David_0x2dd9a2[_0x410453].ua;
  }
  let _0x233c08 = David_0x4205dd(_0x10644c);
  const _0x487bbb = {
    "Content-Type": "application/x-www-form-urlencoded",
    "User-Agent": _0xbfd632,
    Authorization: David_0x2dd9a2[_0x410453].auth,
    Host: _0x233c08
  };
  const _0x32379f = {
    url: _0x10644c,
    headers: _0x487bbb
  };
  if (_0x5b05e5) {
    _0x32379f.body = _0x5b05e5;
  }
  David_0x22634f[_0x410453] = _0x32379f;
  return _0x32379f;
}
async function David_0x332d2b(_0x40ea66, _0xb44150, _0x33d489) {
  David_0x4045e4 = null;
  return new Promise(_0x3e6ff4 => {
    David_0x2a99cb[_0x40ea66](_0xb44150, async (_0xab6655, _0x51e2c9, _0x3ea742) => {
      try {
        if (_0xab6655) {
          David_0x2a99cb.log(_0x33d489 + ": " + _0x40ea66 + "请求失败");
          David_0x2a99cb.log(JSON.stringify(_0xab6655));
          David_0x2a99cb.logErr(_0xab6655);
        } else {
          if (David_0xeb0cf3(_0x3ea742)) {
            David_0x4045e4 = JSON.parse(_0x3ea742);
          } else {
            const _0x44b12d = new URL(_0xb44150.url);
            David_0x2a99cb.log(_0x44b12d.pathname + "发起" + _0x40ea66 + "请求时，出现错误，请处理");
          }
        }
      } catch (_0x1e946f) {
        David_0x2a99cb.logErr(_0x1e946f, _0x51e2c9);
      } finally {
        _0x3e6ff4(David_0x4045e4);
      }
    });
  });
}
async function David_0x548b2f(_0x33fa3d, _0x70f75) {
  if (David_0x19a7d6[_0x33fa3d] == 0) {
    await David_0x5188a9(_0x33fa3d, _0x70f75);
  } else {
    await David_0x5819c(_0x33fa3d, _0x70f75);
  }
}
function David_0x5188a9(_0x38ade5, _0x7fe25) {
  return new Promise((_0x917b75, _0x477715) => {
    function _0x19490c(_0x5923e9) {
      let _0x5abb74 = _0x5923e9.toString("utf8");
      David_0x23165d[_0x38ade5] = _0x5abb74;
      David_0x1fc9b0[_0x38ade5].removeListener("message", _0x19490c);
      _0x917b75(_0x5abb74);
    }
    David_0x1fc9b0[_0x38ade5].on("message", _0x19490c);
    if (David_0x1fc9b0[_0x38ade5].readyState === 1) {
      const _0x3a1b76 = {
        method: David_0x16de32,
        params: {}
      };
      _0x3a1b76.params.content = _0x7fe25;
      _0x3a1b76.params.appName = David_0x16de32;
      _0x3a1b76.params.uuid = David_0x16bb1a;
      David_0x1fc9b0[_0x38ade5].send(JSON.stringify(_0x3a1b76), _0x22cc03 => {
        if (_0x22cc03) {
          _0x477715(_0x22cc03);
        }
      });
    } else {
      _0x917b75(David_0x5819c(_0x38ade5, _0x7fe25));
      David_0x1fc9b0[_0x38ade5].removeListener("message", _0x19490c);
    }
  });
}
function David_0x5819c(_0x1bba8c, _0x117dcf) {
  return new Promise((_0xc334c6, _0x172f8f) => {
    const _0x11cf06 = David_0x497432 + "/sign/hmjc";
    const _0x5ab67a = {
      content: _0x117dcf,
      appName: David_0x16de32,
      uuid: David_0x16bb1a
    };
    const _0x2e26ef = {
      "Content-Type": "application/json",
      accept: "application/json"
    };
    const _0x27164a = {
      url: _0x11cf06,
      headers: _0x2e26ef,
      body: JSON.stringify(_0x5ab67a)
    };
    David_0x2a99cb.post(_0x27164a, async (_0x4b81a8, _0x871f7, _0x3fe4c1) => {
      const _0x53c0e9 = _0x3fe4c1;
      David_0x23165d[_0x1bba8c] = _0x53c0e9;
      _0xc334c6(_0x53c0e9);
      return _0x53c0e9;
    });
  });
}
function David_0x363295(_0x18f281, _0x2b9647, _0x482573) {
  const _0xac444b = David_0x3bbe2c(_0x18f281);
  _0x2b9647.forEach(_0x411105 => {
    delete _0xac444b[_0x411105];
  });
  Object.assign(_0xac444b, _0x482573);
  const _0x540649 = Object.keys(_0xac444b).sort();
  const _0x46209d = _0x540649.map(_0x16d2ba => _0x16d2ba + "=" + _0xac444b[_0x16d2ba]).join("&");
  return _0x46209d;
}
function David_0x3bbe2c(_0x1d5ff1) {
  _0x1d5ff1 = _0x1d5ff1.replace(/\"/g, "");
  var _0x27c75e;
  var _0x30a12e = {};
  var _0x97ebef = _0x1d5ff1.slice(_0x1d5ff1.indexOf("?") + 1).split("&");
  for (var _0x9b7954 = 0; _0x9b7954 < _0x97ebef.length; _0x9b7954++) {
    _0x27c75e = _0x97ebef[_0x9b7954].split("=");
    _0x30a12e[_0x27c75e[0]] = _0x27c75e[1];
  }
  return _0x30a12e;
}
function David_0x51ce40(_0x206c2c) {
  const _0x4b910f = _0x206c2c.replace(/[{} ]/g, "");
  const _0xe3fa5 = _0x4b910f.split(",");
  const _0x45e735 = {};
  _0xe3fa5.forEach(_0x40d271 => {
    const [_0x5dcccd, _0x37bbfe] = _0x40d271.split("=");
    _0x45e735[_0x5dcccd] = _0x37bbfe;
  });
  return _0x45e735;
}
function David_0x4205dd(_0x62fb89) {
  let _0x58a6da = _0x62fb89.substr(_0x62fb89.indexOf("//") + 2);
  let _0x22f8f9 = _0x58a6da.substr(0, _0x58a6da.indexOf("/"));
  let _0x6f790 = "";
  let _0x447783 = _0x22f8f9.indexOf(":");
  if (_0x447783 > 0) {
    _0x6f790 = _0x22f8f9.substr(0, _0x447783);
  } else {
    _0x6f790 = _0x22f8f9;
  }
  return _0x6f790;
}
function David_0x3a2228(_0x24d011, _0x1f9f3d) {
  var _0x269910 = new Date(_0x24d011);
  var _0x2b569c = new Date(_0x1f9f3d);
  var _0x42b82c = _0x2b569c - _0x269910;
  var _0x3e1c57 = Math.floor(_0x42b82c / 1000);
  return _0x3e1c57;
}
function David_0x336799(_0x1dc759, _0x312fa4) {
  if (_0x1dc759.length * 2 <= _0x312fa4) {
    return _0x1dc759;
  }
  var _0x37de07 = 0;
  var _0x3f90af = "";
  for (var _0x167fbf = 0; _0x167fbf < _0x1dc759.length; _0x167fbf++) {
    _0x3f90af = _0x3f90af + _0x1dc759.charAt(_0x167fbf);
    if (_0x1dc759.charCodeAt(_0x167fbf) > 128) {
      _0x37de07 = _0x37de07 + 2;
      if (_0x37de07 >= _0x312fa4) {
        return _0x3f90af.substring(0, _0x3f90af.length - 1) + "...";
      }
    } else {
      _0x37de07 = _0x37de07 + 1;
      if (_0x37de07 >= _0x312fa4) {
        return _0x3f90af.substring(0, _0x3f90af.length - 2) + "...";
      }
    }
  }
  return _0x3f90af;
}
function David_0x156a4a() {
  return new Error().stack.split("\n")[3].split("@")[0];
}
function David_0xeb0cf3(_0x2a9d18) {
  try {
    if (typeof JSON.parse(_0x2a9d18) == "object") {
      return true;
    }
  } catch (_0x2a6fbf) {
    console.log(_0x2a6fbf);
    console.log("服务器访问数据为空，请检查自身设备网络情况");
    return false;
  }
}
function David_0x14472e(_0x29e1c2) {
  var _0x1d0329 = Object.keys(_0x29e1c2).map(function (_0x19ab17) {
    return encodeURIComponent(_0x19ab17) + "=" + encodeURIComponent(_0x29e1c2[_0x19ab17]);
  }).join("&");
  return _0x1d0329;
}
function David_0xa26fbb(_0xce0fad) {
  var _0x496d41 = String.fromCharCode(_0xce0fad.charCodeAt(0) + _0xce0fad.length);
  for (var _0x5de951 = 1; _0x5de951 < _0xce0fad.length; _0x5de951++) {
    _0x496d41 += String.fromCharCode(_0xce0fad.charCodeAt(_0x5de951) + _0xce0fad.charCodeAt(_0x5de951 - 1));
  }
  return escape(_0x496d41);
}
function David_0x25349c(_0x50e95f) {
  _0x50e95f = unescape(_0x50e95f);
  var _0x21c603 = String.fromCharCode(_0x50e95f.charCodeAt(0) - _0x50e95f.length);
  for (var _0x15b628 = 1; _0x15b628 < _0x50e95f.length; _0x15b628++) {
    _0x21c603 += String.fromCharCode(_0x50e95f.charCodeAt(_0x15b628) - _0x21c603.charCodeAt(_0x15b628 - 1));
  }
  return _0x21c603;
}
function David_0x15149a(_0x45e242, _0x2cc01c) {
  switch (arguments.length) {
    case 1:
      {
        return parseInt(Math.random() * _0x45e242 + 1);
        break;
      }
    case 2:
      {
        return parseInt(Math.random() * (_0x2cc01c - _0x45e242 + 1) + _0x45e242);
        break;
      }
    default:
      {
        return 0;
        break;
      }
  }
}
function David_0x10e7b3() {
  return "XX:XX:XX:XX:XX:XX".replace(/X/g, function () {
    return "0123456789ABCDEF".charAt(Math.floor(Math.random() * 16));
  });
}
function David_0x5995a9() {
  function _0x133495() {
    return ((1 + Math.random()) * 65536 | 0).toString(16).substring(1);
  }
  return _0x133495() + _0x133495() + "-" + _0x133495() + "-" + _0x133495() + "-" + _0x133495() + "-" + _0x133495() + _0x133495() + _0x133495();
}
function David_0x5a655f(_0x244c45) {
  if (_0x244c45.length == 11) {
    let _0x4fb414 = _0x244c45.replace(/(\d{3})\d{4}(\d{4})/, "$1****$2");
    return _0x4fb414;
  } else {
    return _0x244c45;
  }
}
function David_0x52b991(_0x24a735) {
  return new Promise((_0x3db57d, _0x3d24a5) => {
    const _0x11116c = "https://v1.hitokoto.cn/?c=e";
    const _0x29abc1 = {
      accept: "application/json"
    };
    const _0x35bc5f = {
      url: _0x11116c,
      headers: _0x29abc1
    };
    David_0x2a99cb.get(_0x35bc5f, async (_0x3ac6a3, _0x4e2ed0, _0x1ef3fb) => {
      let _0x4cbe9e = JSON.parse(_0x1ef3fb);
      let _0x74027 = _0x4cbe9e.hitokoto;
      contents[_0x24a735] = _0x74027 + " " + _0x74027;
      _0x3db57d();
    });
  });
}
function David_0xbe4c22() {
  return new Promise((_0x4116e4, _0x476497) => {
    const _0x535253 = "http://api.m.taobao.com/rest/api3.do?api=mtop.common.getTimestamp";
    const _0x4c1217 = {
      url: _0x535253
    };
    David_0x2a99cb.get(_0x4c1217, async (_0x1d1a86, _0x5cbb75, _0x1bc638) => {
      _0x4116e4(_0x1bc638);
    });
  });
}
function David_0x4bf9e8() {
  return Math.round(new Date().getTime()).toString();
}
function David_0x1daf89() {
  return Math.round(new Date().getTime() / 1000).toString();
}
function David_0x1a5bcb() {
  if (David_0x1f130b == 1) {
    David_0x2a99cb.msg(David_0x2a99cb.name, "", David_0x2a99cb.message);
  }
}
async function David_0xb77f0a(_0x5435df) {
  if (David_0x69f4a6 == 9 || David_0x69f4a6 == 12 || David_0x69f4a6 == 18) {
    if (David_0x1f130b == 1) {
      if (David_0x2a99cb.isNode()) {
        await David_0x582433.sendNotify(David_0x2a99cb.name, _0x5435df);
      } else {
        David_0x2a99cb.msg(David_0x2a99cb.name, "", _0x5435df);
      }
    } else {
      David_0x2a99cb.log(_0x5435df);
    }
  }
}
async function David_0x2a00c1(_0x3fdd43, _0x397c21, _0x1b5abd) {
  return new Promise((_0x316aa8, _0x3a918c) => {
    const _0xe4f9b7 = "https://wxpusher.zjiecode.com/api/send/message";
    const _0x4c1abe = {
      appToken: "AT_6BZsE2IyJuVLPp3mcOkKvpoF245GR9xn",
      content: _0x397c21,
      summary: "快手答题余额通知",
      contentType: 1,
      uids: [_0x1b5abd],
      verifyPay: false
    };
    const _0x17c201 = {
      "Content-Type": "application/json"
    };
    const _0x31c333 = {
      url: _0xe4f9b7,
      headers: _0x17c201,
      body: JSON.stringify(_0x4c1abe)
    };
    David_0x2a99cb.post(_0x31c333, async (_0x5bc405, _0x3c0000, _0x16f05e) => {
      _0x316aa8();
    });
  });
}
function David_0x7f445e(_0x313ef8, _0x48f759) {
  _0x48f759 = _0x48f759 || "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let _0x4063c3 = "";
  for (let _0x436603 = 0; _0x436603 < _0x313ef8; _0x436603++) {
    let _0x325681 = Math.floor(Math.random() * _0x48f759.length);
    _0x4063c3 += _0x48f759.substring(_0x325681, _0x325681 + 1);
  }
  return _0x4063c3;
}
function David_0x3de6bd(_0x483a17) {
  function _0x2c69b2(_0x2702fa, _0x741c7a) {
    return _0x2702fa << _0x741c7a | _0x2702fa >>> 32 - _0x741c7a;
  }
  function _0x545194(_0x16c67b, _0x538830) {
    var _0x3b03b1, _0x52768e, _0x658340, _0x417b98, _0x405d9f;
    _0x658340 = 2147483648 & _0x16c67b;
    _0x417b98 = 2147483648 & _0x538830;
    _0x3b03b1 = 1073741824 & _0x16c67b;
    _0x52768e = 1073741824 & _0x538830;
    _0x405d9f = (1073741823 & _0x16c67b) + (1073741823 & _0x538830);
    return _0x3b03b1 & _0x52768e ? 2147483648 ^ _0x405d9f ^ _0x658340 ^ _0x417b98 : _0x3b03b1 | _0x52768e ? 1073741824 & _0x405d9f ? 3221225472 ^ _0x405d9f ^ _0x658340 ^ _0x417b98 : 1073741824 ^ _0x405d9f ^ _0x658340 ^ _0x417b98 : _0x405d9f ^ _0x658340 ^ _0x417b98;
  }
  function _0x1b44e5(_0x235dcd, _0x20ca80, _0x14682e) {
    return _0x235dcd & _0x20ca80 | ~_0x235dcd & _0x14682e;
  }
  function _0x5e0508(_0x24e25e, _0x576a6f, _0x4318e2) {
    return _0x24e25e & _0x4318e2 | _0x576a6f & ~_0x4318e2;
  }
  function _0x4eb8f9(_0x4ff06c, _0x488cb3, _0x4dcd2a) {
    return _0x4ff06c ^ _0x488cb3 ^ _0x4dcd2a;
  }
  function _0x4a938b(_0xc35d13, _0x5538ee, _0x4699db) {
    return _0x5538ee ^ (_0xc35d13 | ~_0x4699db);
  }
  function _0x15d8c0(_0x139e22, _0x54ab25, _0x1bd86d, _0x2fbc5e, _0xf7cfab, _0x2387cb, _0x14a4b5) {
    _0x139e22 = _0x545194(_0x139e22, _0x545194(_0x545194(_0x1b44e5(_0x54ab25, _0x1bd86d, _0x2fbc5e), _0xf7cfab), _0x14a4b5));
    return _0x545194(_0x2c69b2(_0x139e22, _0x2387cb), _0x54ab25);
  }
  function _0xc21531(_0x22db9f, _0x1efc86, _0x2a7a13, _0x17f09d, _0x6b8c3f, _0x970a84, _0x533330) {
    _0x22db9f = _0x545194(_0x22db9f, _0x545194(_0x545194(_0x5e0508(_0x1efc86, _0x2a7a13, _0x17f09d), _0x6b8c3f), _0x533330));
    return _0x545194(_0x2c69b2(_0x22db9f, _0x970a84), _0x1efc86);
  }
  function _0x1395ed(_0x59a809, _0x1652cc, _0x5f5b39, _0x431b4f, _0x5e5ee6, _0x4a55ec, _0x27661d) {
    _0x59a809 = _0x545194(_0x59a809, _0x545194(_0x545194(_0x4eb8f9(_0x1652cc, _0x5f5b39, _0x431b4f), _0x5e5ee6), _0x27661d));
    return _0x545194(_0x2c69b2(_0x59a809, _0x4a55ec), _0x1652cc);
  }
  function _0x122078(_0x4c8e83, _0x3f8d7b, _0x1caeca, _0x19213e, _0x573021, _0x1396ba, _0x3033b5) {
    _0x4c8e83 = _0x545194(_0x4c8e83, _0x545194(_0x545194(_0x4a938b(_0x3f8d7b, _0x1caeca, _0x19213e), _0x573021), _0x3033b5));
    return _0x545194(_0x2c69b2(_0x4c8e83, _0x1396ba), _0x3f8d7b);
  }
  function _0x3bef41(_0x5cecf8) {
    for (var _0x5f337a, _0x17cfcd = _0x5cecf8.length, _0x52201c = _0x17cfcd + 8, _0x13a02e = (_0x52201c - _0x52201c % 64) / 64, _0x49916a = 16 * (_0x13a02e + 1), _0x1cf8f5 = new Array(_0x49916a - 1), _0x33ebdc = 0, _0x2935c7 = 0; _0x17cfcd > _0x2935c7;) {
      _0x5f337a = (_0x2935c7 - _0x2935c7 % 4) / 4;
      _0x33ebdc = _0x2935c7 % 4 * 8;
      _0x1cf8f5[_0x5f337a] = _0x1cf8f5[_0x5f337a] | _0x5cecf8.charCodeAt(_0x2935c7) << _0x33ebdc;
      _0x2935c7++;
    }
    _0x5f337a = (_0x2935c7 - _0x2935c7 % 4) / 4;
    _0x33ebdc = _0x2935c7 % 4 * 8;
    _0x1cf8f5[_0x5f337a] = _0x1cf8f5[_0x5f337a] | 128 << _0x33ebdc;
    _0x1cf8f5[_0x49916a - 2] = _0x17cfcd << 3;
    _0x1cf8f5[_0x49916a - 1] = _0x17cfcd >>> 29;
    return _0x1cf8f5;
  }
  function _0x168e9e(_0x28867f) {
    var _0x4fd999,
      _0x5cdc94,
      _0x476b49 = "",
      _0x309a92 = "";
    for (_0x5cdc94 = 0; 3 >= _0x5cdc94; _0x5cdc94++) {
      _0x4fd999 = _0x28867f >>> 8 * _0x5cdc94 & 255;
      _0x309a92 = "0" + _0x4fd999.toString(16);
      _0x476b49 += _0x309a92.substr(_0x309a92.length - 2, 2);
    }
    return _0x476b49;
  }
  function _0xb31612(_0x1f615d) {
    _0x1f615d = _0x1f615d.replace(/\r\n/g, "\n");
    for (var _0x57fb72 = "", _0x1b9d15 = 0; _0x1b9d15 < _0x1f615d.length; _0x1b9d15++) {
      var _0x4c33bf = _0x1f615d.charCodeAt(_0x1b9d15);
      128 > _0x4c33bf ? _0x57fb72 += String.fromCharCode(_0x4c33bf) : _0x4c33bf > 127 && 2048 > _0x4c33bf ? (_0x57fb72 += String.fromCharCode(_0x4c33bf >> 6 | 192), _0x57fb72 += String.fromCharCode(63 & _0x4c33bf | 128)) : (_0x57fb72 += String.fromCharCode(_0x4c33bf >> 12 | 224), _0x57fb72 += String.fromCharCode(_0x4c33bf >> 6 & 63 | 128), _0x57fb72 += String.fromCharCode(63 & _0x4c33bf | 128));
    }
    return _0x57fb72;
  }
  var _0x311d70,
    _0x1ddf93,
    _0x4d6fe2,
    _0x65d3a0,
    _0x57ab61,
    _0x368f5d,
    _0x165c1d,
    _0x25e82e,
    _0x312e01,
    _0x1fa48e = [],
    _0x125acc = 7,
    _0xf213de = 12,
    _0x38dd48 = 17,
    _0x12b429 = 22,
    _0x1c8e6c = 5,
    _0x2ba67e = 9,
    _0x58a993 = 14,
    _0x4e85de = 20,
    _0x422436 = 4,
    _0x31c1aa = 11,
    _0x32448b = 16,
    _0x27a508 = 23,
    _0xf3eaec = 6,
    _0x3e254a = 10,
    _0x2bd659 = 15,
    _0x327541 = 21;
  for (_0x483a17 = _0xb31612(_0x483a17), _0x1fa48e = _0x3bef41(_0x483a17), _0x368f5d = 1732584193, _0x165c1d = 4023233417, _0x25e82e = 2562383102, _0x312e01 = 271733878, _0x311d70 = 0; _0x311d70 < _0x1fa48e.length; _0x311d70 += 16) {
    _0x1ddf93 = _0x368f5d;
    _0x4d6fe2 = _0x165c1d;
    _0x65d3a0 = _0x25e82e;
    _0x57ab61 = _0x312e01;
    _0x368f5d = _0x15d8c0(_0x368f5d, _0x165c1d, _0x25e82e, _0x312e01, _0x1fa48e[_0x311d70 + 0], _0x125acc, 3614090360);
    _0x312e01 = _0x15d8c0(_0x312e01, _0x368f5d, _0x165c1d, _0x25e82e, _0x1fa48e[_0x311d70 + 1], _0xf213de, 3905402710);
    _0x25e82e = _0x15d8c0(_0x25e82e, _0x312e01, _0x368f5d, _0x165c1d, _0x1fa48e[_0x311d70 + 2], _0x38dd48, 606105819);
    _0x165c1d = _0x15d8c0(_0x165c1d, _0x25e82e, _0x312e01, _0x368f5d, _0x1fa48e[_0x311d70 + 3], _0x12b429, 3250441966);
    _0x368f5d = _0x15d8c0(_0x368f5d, _0x165c1d, _0x25e82e, _0x312e01, _0x1fa48e[_0x311d70 + 4], _0x125acc, 4118548399);
    _0x312e01 = _0x15d8c0(_0x312e01, _0x368f5d, _0x165c1d, _0x25e82e, _0x1fa48e[_0x311d70 + 5], _0xf213de, 1200080426);
    _0x25e82e = _0x15d8c0(_0x25e82e, _0x312e01, _0x368f5d, _0x165c1d, _0x1fa48e[_0x311d70 + 6], _0x38dd48, 2821735955);
    _0x165c1d = _0x15d8c0(_0x165c1d, _0x25e82e, _0x312e01, _0x368f5d, _0x1fa48e[_0x311d70 + 7], _0x12b429, 4249261313);
    _0x368f5d = _0x15d8c0(_0x368f5d, _0x165c1d, _0x25e82e, _0x312e01, _0x1fa48e[_0x311d70 + 8], _0x125acc, 1770035416);
    _0x312e01 = _0x15d8c0(_0x312e01, _0x368f5d, _0x165c1d, _0x25e82e, _0x1fa48e[_0x311d70 + 9], _0xf213de, 2336552879);
    _0x25e82e = _0x15d8c0(_0x25e82e, _0x312e01, _0x368f5d, _0x165c1d, _0x1fa48e[_0x311d70 + 10], _0x38dd48, 4294925233);
    _0x165c1d = _0x15d8c0(_0x165c1d, _0x25e82e, _0x312e01, _0x368f5d, _0x1fa48e[_0x311d70 + 11], _0x12b429, 2304563134);
    _0x368f5d = _0x15d8c0(_0x368f5d, _0x165c1d, _0x25e82e, _0x312e01, _0x1fa48e[_0x311d70 + 12], _0x125acc, 1804603682);
    _0x312e01 = _0x15d8c0(_0x312e01, _0x368f5d, _0x165c1d, _0x25e82e, _0x1fa48e[_0x311d70 + 13], _0xf213de, 4254626195);
    _0x25e82e = _0x15d8c0(_0x25e82e, _0x312e01, _0x368f5d, _0x165c1d, _0x1fa48e[_0x311d70 + 14], _0x38dd48, 2792965006);
    _0x165c1d = _0x15d8c0(_0x165c1d, _0x25e82e, _0x312e01, _0x368f5d, _0x1fa48e[_0x311d70 + 15], _0x12b429, 1236535329);
    _0x368f5d = _0xc21531(_0x368f5d, _0x165c1d, _0x25e82e, _0x312e01, _0x1fa48e[_0x311d70 + 1], _0x1c8e6c, 4129170786);
    _0x312e01 = _0xc21531(_0x312e01, _0x368f5d, _0x165c1d, _0x25e82e, _0x1fa48e[_0x311d70 + 6], _0x2ba67e, 3225465664);
    _0x25e82e = _0xc21531(_0x25e82e, _0x312e01, _0x368f5d, _0x165c1d, _0x1fa48e[_0x311d70 + 11], _0x58a993, 643717713);
    _0x165c1d = _0xc21531(_0x165c1d, _0x25e82e, _0x312e01, _0x368f5d, _0x1fa48e[_0x311d70 + 0], _0x4e85de, 3921069994);
    _0x368f5d = _0xc21531(_0x368f5d, _0x165c1d, _0x25e82e, _0x312e01, _0x1fa48e[_0x311d70 + 5], _0x1c8e6c, 3593408605);
    _0x312e01 = _0xc21531(_0x312e01, _0x368f5d, _0x165c1d, _0x25e82e, _0x1fa48e[_0x311d70 + 10], _0x2ba67e, 38016083);
    _0x25e82e = _0xc21531(_0x25e82e, _0x312e01, _0x368f5d, _0x165c1d, _0x1fa48e[_0x311d70 + 15], _0x58a993, 3634488961);
    _0x165c1d = _0xc21531(_0x165c1d, _0x25e82e, _0x312e01, _0x368f5d, _0x1fa48e[_0x311d70 + 4], _0x4e85de, 3889429448);
    _0x368f5d = _0xc21531(_0x368f5d, _0x165c1d, _0x25e82e, _0x312e01, _0x1fa48e[_0x311d70 + 9], _0x1c8e6c, 568446438);
    _0x312e01 = _0xc21531(_0x312e01, _0x368f5d, _0x165c1d, _0x25e82e, _0x1fa48e[_0x311d70 + 14], _0x2ba67e, 3275163606);
    _0x25e82e = _0xc21531(_0x25e82e, _0x312e01, _0x368f5d, _0x165c1d, _0x1fa48e[_0x311d70 + 3], _0x58a993, 4107603335);
    _0x165c1d = _0xc21531(_0x165c1d, _0x25e82e, _0x312e01, _0x368f5d, _0x1fa48e[_0x311d70 + 8], _0x4e85de, 1163531501);
    _0x368f5d = _0xc21531(_0x368f5d, _0x165c1d, _0x25e82e, _0x312e01, _0x1fa48e[_0x311d70 + 13], _0x1c8e6c, 2850285829);
    _0x312e01 = _0xc21531(_0x312e01, _0x368f5d, _0x165c1d, _0x25e82e, _0x1fa48e[_0x311d70 + 2], _0x2ba67e, 4243563512);
    _0x25e82e = _0xc21531(_0x25e82e, _0x312e01, _0x368f5d, _0x165c1d, _0x1fa48e[_0x311d70 + 7], _0x58a993, 1735328473);
    _0x165c1d = _0xc21531(_0x165c1d, _0x25e82e, _0x312e01, _0x368f5d, _0x1fa48e[_0x311d70 + 12], _0x4e85de, 2368359562);
    _0x368f5d = _0x1395ed(_0x368f5d, _0x165c1d, _0x25e82e, _0x312e01, _0x1fa48e[_0x311d70 + 5], _0x422436, 4294588738);
    _0x312e01 = _0x1395ed(_0x312e01, _0x368f5d, _0x165c1d, _0x25e82e, _0x1fa48e[_0x311d70 + 8], _0x31c1aa, 2272392833);
    _0x25e82e = _0x1395ed(_0x25e82e, _0x312e01, _0x368f5d, _0x165c1d, _0x1fa48e[_0x311d70 + 11], _0x32448b, 1839030562);
    _0x165c1d = _0x1395ed(_0x165c1d, _0x25e82e, _0x312e01, _0x368f5d, _0x1fa48e[_0x311d70 + 14], _0x27a508, 4259657740);
    _0x368f5d = _0x1395ed(_0x368f5d, _0x165c1d, _0x25e82e, _0x312e01, _0x1fa48e[_0x311d70 + 1], _0x422436, 2763975236);
    _0x312e01 = _0x1395ed(_0x312e01, _0x368f5d, _0x165c1d, _0x25e82e, _0x1fa48e[_0x311d70 + 4], _0x31c1aa, 1272893353);
    _0x25e82e = _0x1395ed(_0x25e82e, _0x312e01, _0x368f5d, _0x165c1d, _0x1fa48e[_0x311d70 + 7], _0x32448b, 4139469664);
    _0x165c1d = _0x1395ed(_0x165c1d, _0x25e82e, _0x312e01, _0x368f5d, _0x1fa48e[_0x311d70 + 10], _0x27a508, 3200236656);
    _0x368f5d = _0x1395ed(_0x368f5d, _0x165c1d, _0x25e82e, _0x312e01, _0x1fa48e[_0x311d70 + 13], _0x422436, 681279174);
    _0x312e01 = _0x1395ed(_0x312e01, _0x368f5d, _0x165c1d, _0x25e82e, _0x1fa48e[_0x311d70 + 0], _0x31c1aa, 3936430074);
    _0x25e82e = _0x1395ed(_0x25e82e, _0x312e01, _0x368f5d, _0x165c1d, _0x1fa48e[_0x311d70 + 3], _0x32448b, 3572445317);
    _0x165c1d = _0x1395ed(_0x165c1d, _0x25e82e, _0x312e01, _0x368f5d, _0x1fa48e[_0x311d70 + 6], _0x27a508, 76029189);
    _0x368f5d = _0x1395ed(_0x368f5d, _0x165c1d, _0x25e82e, _0x312e01, _0x1fa48e[_0x311d70 + 9], _0x422436, 3654602809);
    _0x312e01 = _0x1395ed(_0x312e01, _0x368f5d, _0x165c1d, _0x25e82e, _0x1fa48e[_0x311d70 + 12], _0x31c1aa, 3873151461);
    _0x25e82e = _0x1395ed(_0x25e82e, _0x312e01, _0x368f5d, _0x165c1d, _0x1fa48e[_0x311d70 + 15], _0x32448b, 530742520);
    _0x165c1d = _0x1395ed(_0x165c1d, _0x25e82e, _0x312e01, _0x368f5d, _0x1fa48e[_0x311d70 + 2], _0x27a508, 3299628645);
    _0x368f5d = _0x122078(_0x368f5d, _0x165c1d, _0x25e82e, _0x312e01, _0x1fa48e[_0x311d70 + 0], _0xf3eaec, 4096336452);
    _0x312e01 = _0x122078(_0x312e01, _0x368f5d, _0x165c1d, _0x25e82e, _0x1fa48e[_0x311d70 + 7], _0x3e254a, 1126891415);
    _0x25e82e = _0x122078(_0x25e82e, _0x312e01, _0x368f5d, _0x165c1d, _0x1fa48e[_0x311d70 + 14], _0x2bd659, 2878612391);
    _0x165c1d = _0x122078(_0x165c1d, _0x25e82e, _0x312e01, _0x368f5d, _0x1fa48e[_0x311d70 + 5], _0x327541, 4237533241);
    _0x368f5d = _0x122078(_0x368f5d, _0x165c1d, _0x25e82e, _0x312e01, _0x1fa48e[_0x311d70 + 12], _0xf3eaec, 1700485571);
    _0x312e01 = _0x122078(_0x312e01, _0x368f5d, _0x165c1d, _0x25e82e, _0x1fa48e[_0x311d70 + 3], _0x3e254a, 2399980690);
    _0x25e82e = _0x122078(_0x25e82e, _0x312e01, _0x368f5d, _0x165c1d, _0x1fa48e[_0x311d70 + 10], _0x2bd659, 4293915773);
    _0x165c1d = _0x122078(_0x165c1d, _0x25e82e, _0x312e01, _0x368f5d, _0x1fa48e[_0x311d70 + 1], _0x327541, 2240044497);
    _0x368f5d = _0x122078(_0x368f5d, _0x165c1d, _0x25e82e, _0x312e01, _0x1fa48e[_0x311d70 + 8], _0xf3eaec, 1873313359);
    _0x312e01 = _0x122078(_0x312e01, _0x368f5d, _0x165c1d, _0x25e82e, _0x1fa48e[_0x311d70 + 15], _0x3e254a, 4264355552);
    _0x25e82e = _0x122078(_0x25e82e, _0x312e01, _0x368f5d, _0x165c1d, _0x1fa48e[_0x311d70 + 6], _0x2bd659, 2734768916);
    _0x165c1d = _0x122078(_0x165c1d, _0x25e82e, _0x312e01, _0x368f5d, _0x1fa48e[_0x311d70 + 13], _0x327541, 1309151649);
    _0x368f5d = _0x122078(_0x368f5d, _0x165c1d, _0x25e82e, _0x312e01, _0x1fa48e[_0x311d70 + 4], _0xf3eaec, 4149444226);
    _0x312e01 = _0x122078(_0x312e01, _0x368f5d, _0x165c1d, _0x25e82e, _0x1fa48e[_0x311d70 + 11], _0x3e254a, 3174756917);
    _0x25e82e = _0x122078(_0x25e82e, _0x312e01, _0x368f5d, _0x165c1d, _0x1fa48e[_0x311d70 + 2], _0x2bd659, 718787259);
    _0x165c1d = _0x122078(_0x165c1d, _0x25e82e, _0x312e01, _0x368f5d, _0x1fa48e[_0x311d70 + 9], _0x327541, 3951481745);
    _0x368f5d = _0x545194(_0x368f5d, _0x1ddf93);
    _0x165c1d = _0x545194(_0x165c1d, _0x4d6fe2);
    _0x25e82e = _0x545194(_0x25e82e, _0x65d3a0);
    _0x312e01 = _0x545194(_0x312e01, _0x57ab61);
  }
  var _0x47ace9 = _0x168e9e(_0x368f5d) + _0x168e9e(_0x165c1d) + _0x168e9e(_0x25e82e) + _0x168e9e(_0x312e01);
  return _0x47ace9.toLowerCase();
}
function David_0x300571(_0x5bfd6c) {
  var _0x589149 = 8;
  var _0x276e12 = 0;
  function _0x5327ec(_0x305672, _0x2ad005) {
    var _0x1ddbb4 = (_0x305672 & 65535) + (_0x2ad005 & 65535);
    var _0x10bebf = (_0x305672 >> 16) + (_0x2ad005 >> 16) + (_0x1ddbb4 >> 16);
    return _0x10bebf << 16 | _0x1ddbb4 & 65535;
  }
  function _0x5bd076(_0x33ebaf, _0xe7f17b) {
    return _0x33ebaf >>> _0xe7f17b | _0x33ebaf << 32 - _0xe7f17b;
  }
  function _0x4c540f(_0x77e589, _0x5179a4) {
    return _0x77e589 >>> _0x5179a4;
  }
  function _0x54cb4c(_0x5ddc53, _0xfbfb1, _0x377e2b) {
    return _0x5ddc53 & _0xfbfb1 ^ ~_0x5ddc53 & _0x377e2b;
  }
  function _0xaad3ee(_0x37b4d3, _0x2f77c8, _0x2d53e9) {
    return _0x37b4d3 & _0x2f77c8 ^ _0x37b4d3 & _0x2d53e9 ^ _0x2f77c8 & _0x2d53e9;
  }
  function _0x23e78a(_0x58260d) {
    return _0x5bd076(_0x58260d, 2) ^ _0x5bd076(_0x58260d, 13) ^ _0x5bd076(_0x58260d, 22);
  }
  function _0x503f07(_0x2ecf37) {
    return _0x5bd076(_0x2ecf37, 6) ^ _0x5bd076(_0x2ecf37, 11) ^ _0x5bd076(_0x2ecf37, 25);
  }
  function _0x5878d1(_0x2a5395) {
    return _0x5bd076(_0x2a5395, 7) ^ _0x5bd076(_0x2a5395, 18) ^ _0x4c540f(_0x2a5395, 3);
  }
  function _0xc5254d(_0x5b74cb) {
    return _0x5bd076(_0x5b74cb, 17) ^ _0x5bd076(_0x5b74cb, 19) ^ _0x4c540f(_0x5b74cb, 10);
  }
  function _0x4b338b(_0x4a9357, _0x2a7f6c) {
    var _0x22df95 = new Array(1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298);
    var _0x2341d2 = new Array(1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225);
    var _0x48cbab = new Array(64);
    var _0x5bdb29, _0x44160f, _0x109e90, _0x31a7df, _0x22612a, _0x110a78, _0x5765a7, _0x34207e;
    var _0x59779e, _0x2366ce;
    _0x4a9357[_0x2a7f6c >> 5] |= 128 << 24 - _0x2a7f6c % 32;
    _0x4a9357[(_0x2a7f6c + 64 >> 9 << 4) + 15] = _0x2a7f6c;
    for (var _0x1bd876 = 0; _0x1bd876 < _0x4a9357.length; _0x1bd876 += 16) {
      _0x5bdb29 = _0x2341d2[0];
      _0x44160f = _0x2341d2[1];
      _0x109e90 = _0x2341d2[2];
      _0x31a7df = _0x2341d2[3];
      _0x22612a = _0x2341d2[4];
      _0x110a78 = _0x2341d2[5];
      _0x5765a7 = _0x2341d2[6];
      _0x34207e = _0x2341d2[7];
      for (var _0x2eabc5 = 0; _0x2eabc5 < 64; _0x2eabc5++) {
        if (_0x2eabc5 < 16) {
          _0x48cbab[_0x2eabc5] = _0x4a9357[_0x2eabc5 + _0x1bd876];
        } else {
          _0x48cbab[_0x2eabc5] = _0x5327ec(_0x5327ec(_0x5327ec(_0xc5254d(_0x48cbab[_0x2eabc5 - 2]), _0x48cbab[_0x2eabc5 - 7]), _0x5878d1(_0x48cbab[_0x2eabc5 - 15])), _0x48cbab[_0x2eabc5 - 16]);
        }
        _0x59779e = _0x5327ec(_0x5327ec(_0x5327ec(_0x5327ec(_0x34207e, _0x503f07(_0x22612a)), _0x54cb4c(_0x22612a, _0x110a78, _0x5765a7)), _0x22df95[_0x2eabc5]), _0x48cbab[_0x2eabc5]);
        _0x2366ce = _0x5327ec(_0x23e78a(_0x5bdb29), _0xaad3ee(_0x5bdb29, _0x44160f, _0x109e90));
        _0x34207e = _0x5765a7;
        _0x5765a7 = _0x110a78;
        _0x110a78 = _0x22612a;
        _0x22612a = _0x5327ec(_0x31a7df, _0x59779e);
        _0x31a7df = _0x109e90;
        _0x109e90 = _0x44160f;
        _0x44160f = _0x5bdb29;
        _0x5bdb29 = _0x5327ec(_0x59779e, _0x2366ce);
      }
      _0x2341d2[0] = _0x5327ec(_0x5bdb29, _0x2341d2[0]);
      _0x2341d2[1] = _0x5327ec(_0x44160f, _0x2341d2[1]);
      _0x2341d2[2] = _0x5327ec(_0x109e90, _0x2341d2[2]);
      _0x2341d2[3] = _0x5327ec(_0x31a7df, _0x2341d2[3]);
      _0x2341d2[4] = _0x5327ec(_0x22612a, _0x2341d2[4]);
      _0x2341d2[5] = _0x5327ec(_0x110a78, _0x2341d2[5]);
      _0x2341d2[6] = _0x5327ec(_0x5765a7, _0x2341d2[6]);
      _0x2341d2[7] = _0x5327ec(_0x34207e, _0x2341d2[7]);
    }
    return _0x2341d2;
  }
  function _0x56f594(_0x4ae3d2) {
    var _0x2216d = Array();
    var _0x385dcc = (1 << _0x589149) - 1;
    for (var _0x296d1c = 0; _0x296d1c < _0x4ae3d2.length * _0x589149; _0x296d1c += _0x589149) {
      _0x2216d[_0x296d1c >> 5] |= (_0x4ae3d2.charCodeAt(_0x296d1c / _0x589149) & _0x385dcc) << 24 - _0x296d1c % 32;
    }
    return _0x2216d;
  }
  function _0x1e6d68(_0x491de3) {
    _0x491de3 = _0x491de3.replace(/\r\n/g, "\n");
    var _0x23a1fe = "";
    for (var _0x296668 = 0; _0x296668 < _0x491de3.length; _0x296668++) {
      var _0x922928 = _0x491de3.charCodeAt(_0x296668);
      if (_0x922928 < 128) {
        _0x23a1fe += String.fromCharCode(_0x922928);
      } else {
        if (_0x922928 > 127 && _0x922928 < 2048) {
          _0x23a1fe += String.fromCharCode(_0x922928 >> 6 | 192);
          _0x23a1fe += String.fromCharCode(_0x922928 & 63 | 128);
        } else {
          _0x23a1fe += String.fromCharCode(_0x922928 >> 12 | 224);
          _0x23a1fe += String.fromCharCode(_0x922928 >> 6 & 63 | 128);
          _0x23a1fe += String.fromCharCode(_0x922928 & 63 | 128);
        }
      }
    }
    return _0x23a1fe;
  }
  function _0x41cbbd(_0x1577a4) {
    var _0x328891 = _0x276e12 ? "0123456789ABCDEF" : "0123456789abcdef";
    var _0x253471 = "";
    for (var _0xae7f3f = 0; _0xae7f3f < _0x1577a4.length * 4; _0xae7f3f++) {
      _0x253471 += _0x328891.charAt(_0x1577a4[_0xae7f3f >> 2] >> (3 - _0xae7f3f % 4) * 8 + 4 & 15) + _0x328891.charAt(_0x1577a4[_0xae7f3f >> 2] >> (3 - _0xae7f3f % 4) * 8 & 15);
    }
    return _0x253471;
  }
  _0x5bfd6c = _0x1e6d68(_0x5bfd6c);
  return _0x41cbbd(_0x4b338b(_0x56f594(_0x5bfd6c), _0x5bfd6c.length * _0x589149));
}
function David_0x2cdf0d(_0x207369) {
  function _0x5359bd(_0x9d243b, _0x115f6b) {
    var _0x20fb74 = _0x9d243b << _0x115f6b | _0x9d243b >>> 32 - _0x115f6b;
    return _0x20fb74;
  }
  function _0x280c20(_0x22f75f) {
    var _0x1bd45c = "";
    var _0x9bc467;
    var _0x1ed23e;
    var _0x108c84;
    for (_0x9bc467 = 0; _0x9bc467 <= 6; _0x9bc467 += 2) {
      _0x1ed23e = _0x22f75f >>> _0x9bc467 * 4 + 4 & 15;
      _0x108c84 = _0x22f75f >>> _0x9bc467 * 4 & 15;
      _0x1bd45c += _0x1ed23e.toString(16) + _0x108c84.toString(16);
    }
    return _0x1bd45c;
  }
  function _0x1c550e(_0xf3f2d3) {
    var _0x12c92d = "";
    var _0x292719;
    var _0x5161eb;
    for (_0x292719 = 7; _0x292719 >= 0; _0x292719--) {
      _0x5161eb = _0xf3f2d3 >>> _0x292719 * 4 & 15;
      _0x12c92d += _0x5161eb.toString(16);
    }
    return _0x12c92d;
  }
  function _0x238644(_0x4049e) {
    _0x4049e = _0x4049e.replace(/\r\n/g, "\n");
    var _0x2dc487 = "";
    for (var _0x5726c0 = 0; _0x5726c0 < _0x4049e.length; _0x5726c0++) {
      var _0x5d85ee = _0x4049e.charCodeAt(_0x5726c0);
      if (_0x5d85ee < 128) {
        _0x2dc487 += String.fromCharCode(_0x5d85ee);
      } else {
        if (_0x5d85ee > 127 && _0x5d85ee < 2048) {
          _0x2dc487 += String.fromCharCode(_0x5d85ee >> 6 | 192);
          _0x2dc487 += String.fromCharCode(_0x5d85ee & 63 | 128);
        } else {
          _0x2dc487 += String.fromCharCode(_0x5d85ee >> 12 | 224);
          _0x2dc487 += String.fromCharCode(_0x5d85ee >> 6 & 63 | 128);
          _0x2dc487 += String.fromCharCode(_0x5d85ee & 63 | 128);
        }
      }
    }
    return _0x2dc487;
  }
  var _0x3256bf;
  var _0x4c15b3, _0xf259bd;
  var _0x2527fa = new Array(80);
  var _0x2440ed = 1732584193;
  var _0x58bad8 = 4023233417;
  var _0x4b1c05 = 2562383102;
  var _0x9df3fc = 271733878;
  var _0x11275e = 3285377520;
  var _0x2adf09, _0x22f9d1, _0x239195, _0x2932bf, _0x329adf;
  _0x207369 = _0x238644(_0x207369);
  var _0x5ac9b0 = _0x207369.length;
  var _0x4fb157 = new Array();
  for (_0x4c15b3 = 0; _0x4c15b3 < _0x5ac9b0 - 3; _0x4c15b3 += 4) {
    _0xf259bd = _0x207369.charCodeAt(_0x4c15b3) << 24 | _0x207369.charCodeAt(_0x4c15b3 + 1 < 10 ? "0" + (_0x4c15b3 + 1) : _0x4c15b3 + 1) << 16 | _0x207369.charCodeAt(_0x4c15b3 + 2) << 8 | _0x207369.charCodeAt(_0x4c15b3 + 3);
    _0x4fb157.push(_0xf259bd);
  }
  switch (_0x5ac9b0 % 4) {
    case 0:
      {
        _0x4c15b3 = 2147483648;
        break;
      }
    case 1:
      {
        _0x4c15b3 = _0x207369.charCodeAt(_0x5ac9b0 - 1) << 24 | 8388608;
        break;
      }
    case 2:
      {
        _0x4c15b3 = _0x207369.charCodeAt(_0x5ac9b0 - 2) << 24 | _0x207369.charCodeAt(_0x5ac9b0 - 1) << 16 | 32768;
        break;
      }
    case 3:
      {
        _0x4c15b3 = _0x207369.charCodeAt(_0x5ac9b0 - 3) << 24 | _0x207369.charCodeAt(_0x5ac9b0 - 2) << 16 | _0x207369.charCodeAt(_0x5ac9b0 - 1) << 8 | 128;
        break;
      }
  }
  _0x4fb157.push(_0x4c15b3);
  while (_0x4fb157.length % 16 != 14) {
    _0x4fb157.push(0);
  }
  _0x4fb157.push(_0x5ac9b0 >>> 29);
  _0x4fb157.push(_0x5ac9b0 << 3 & 4294967295);
  for (_0x3256bf = 0; _0x3256bf < _0x4fb157.length; _0x3256bf += 16) {
    for (_0x4c15b3 = 0; _0x4c15b3 < 16; _0x4c15b3++) {
      _0x2527fa[_0x4c15b3] = _0x4fb157[_0x3256bf + _0x4c15b3];
    }
    for (_0x4c15b3 = 16; _0x4c15b3 <= 79; _0x4c15b3++) {
      _0x2527fa[_0x4c15b3] = _0x5359bd(_0x2527fa[_0x4c15b3 - 3] ^ _0x2527fa[_0x4c15b3 - 8] ^ _0x2527fa[_0x4c15b3 - 14] ^ _0x2527fa[_0x4c15b3 - 16], 1);
    }
    _0x2adf09 = _0x2440ed;
    _0x22f9d1 = _0x58bad8;
    _0x239195 = _0x4b1c05;
    _0x2932bf = _0x9df3fc;
    _0x329adf = _0x11275e;
    for (_0x4c15b3 = 0; _0x4c15b3 <= 19; _0x4c15b3++) {
      _0x3f8e40 = _0x5359bd(_0x2adf09, 5) + (_0x22f9d1 & _0x239195 | ~_0x22f9d1 & _0x2932bf) + _0x329adf + _0x2527fa[_0x4c15b3] + 1518500249 & 4294967295;
      _0x329adf = _0x2932bf;
      _0x2932bf = _0x239195;
      _0x239195 = _0x5359bd(_0x22f9d1, 30);
      _0x22f9d1 = _0x2adf09;
      _0x2adf09 = _0x3f8e40;
    }
    for (_0x4c15b3 = 20; _0x4c15b3 <= 39; _0x4c15b3++) {
      _0x3f8e40 = _0x5359bd(_0x2adf09, 5) + (_0x22f9d1 ^ _0x239195 ^ _0x2932bf) + _0x329adf + _0x2527fa[_0x4c15b3] + 1859775393 & 4294967295;
      _0x329adf = _0x2932bf;
      _0x2932bf = _0x239195;
      _0x239195 = _0x5359bd(_0x22f9d1, 30);
      _0x22f9d1 = _0x2adf09;
      _0x2adf09 = _0x3f8e40;
    }
    for (_0x4c15b3 = 40; _0x4c15b3 <= 59; _0x4c15b3++) {
      _0x3f8e40 = _0x5359bd(_0x2adf09, 5) + (_0x22f9d1 & _0x239195 | _0x22f9d1 & _0x2932bf | _0x239195 & _0x2932bf) + _0x329adf + _0x2527fa[_0x4c15b3] + 2400959708 & 4294967295;
      _0x329adf = _0x2932bf;
      _0x2932bf = _0x239195;
      _0x239195 = _0x5359bd(_0x22f9d1, 30);
      _0x22f9d1 = _0x2adf09;
      _0x2adf09 = _0x3f8e40;
    }
    for (_0x4c15b3 = 60; _0x4c15b3 <= 79; _0x4c15b3++) {
      _0x3f8e40 = _0x5359bd(_0x2adf09, 5) + (_0x22f9d1 ^ _0x239195 ^ _0x2932bf) + _0x329adf + _0x2527fa[_0x4c15b3] + 3395469782 & 4294967295;
      _0x329adf = _0x2932bf;
      _0x2932bf = _0x239195;
      _0x239195 = _0x5359bd(_0x22f9d1, 30);
      _0x22f9d1 = _0x2adf09;
      _0x2adf09 = _0x3f8e40;
    }
    _0x2440ed = _0x2440ed + _0x2adf09 & 4294967295;
    _0x58bad8 = _0x58bad8 + _0x22f9d1 & 4294967295;
    _0x4b1c05 = _0x4b1c05 + _0x239195 & 4294967295;
    _0x9df3fc = _0x9df3fc + _0x2932bf & 4294967295;
    _0x11275e = _0x11275e + _0x329adf & 4294967295;
  }
  var _0x3f8e40 = _0x1c550e(_0x2440ed) + _0x1c550e(_0x58bad8) + _0x1c550e(_0x4b1c05) + _0x1c550e(_0x9df3fc) + _0x1c550e(_0x11275e);
  return _0x3f8e40.toLowerCase();
}
function David_0x44b907() {
  var _0x35e2d3 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
  this.encode = function (_0x1a1568) {
    var _0x2c2d31 = "";
    var _0x2d44e3, _0x3b0fbe, _0x8b388b, _0x135c3a, _0x641525, _0x142b6b, _0x20a09d;
    var _0x4162a8 = 0;
    _0x1a1568 = utf8Encode(_0x1a1568);
    while (_0x4162a8 < _0x1a1568.length) {
      _0x2d44e3 = _0x1a1568.charCodeAt(_0x4162a8++);
      _0x3b0fbe = _0x1a1568.charCodeAt(_0x4162a8++);
      _0x8b388b = _0x1a1568.charCodeAt(_0x4162a8++);
      _0x135c3a = _0x2d44e3 >> 2;
      _0x641525 = (_0x2d44e3 & 3) << 4 | _0x3b0fbe >> 4;
      _0x142b6b = (_0x3b0fbe & 15) << 2 | _0x8b388b >> 6;
      _0x20a09d = _0x8b388b & 63;
      if (isNaN(_0x3b0fbe)) {
        _0x142b6b = _0x20a09d = 64;
      } else {
        if (isNaN(_0x8b388b)) {
          _0x20a09d = 64;
        }
      }
      _0x2c2d31 = _0x2c2d31 + _0x35e2d3.charAt(_0x135c3a) + _0x35e2d3.charAt(_0x641525) + _0x35e2d3.charAt(_0x142b6b) + _0x35e2d3.charAt(_0x20a09d);
    }
    return _0x2c2d31;
  };
  this.decode = function (_0x11deb7) {
    var _0x38b791 = "";
    var _0xd64d6a, _0x57ebc6, _0x409e86;
    var _0x50ce2b, _0x3c9977, _0x4d7d1f, _0x16f8fe;
    var _0x74e8eb = 0;
    _0x11deb7 = _0x11deb7.replace(/[^A-Za-z0-9\+\/\=]/g, "");
    while (_0x74e8eb < _0x11deb7.length) {
      _0x50ce2b = _0x35e2d3.indexOf(_0x11deb7.charAt(_0x74e8eb++));
      _0x3c9977 = _0x35e2d3.indexOf(_0x11deb7.charAt(_0x74e8eb++));
      _0x4d7d1f = _0x35e2d3.indexOf(_0x11deb7.charAt(_0x74e8eb++));
      _0x16f8fe = _0x35e2d3.indexOf(_0x11deb7.charAt(_0x74e8eb++));
      _0xd64d6a = _0x50ce2b << 2 | _0x3c9977 >> 4;
      _0x57ebc6 = (_0x3c9977 & 15) << 4 | _0x4d7d1f >> 2;
      _0x409e86 = (_0x4d7d1f & 3) << 6 | _0x16f8fe;
      _0x38b791 = _0x38b791 + String.fromCharCode(_0xd64d6a);
      if (_0x4d7d1f !== 64) {
        _0x38b791 = _0x38b791 + String.fromCharCode(_0x57ebc6);
      }
      if (_0x16f8fe !== 64) {
        _0x38b791 = _0x38b791 + String.fromCharCode(_0x409e86);
      }
    }
    _0x38b791 = utf8Decode(_0x38b791);
    return _0x38b791;
  };
  utf8Encode = function (_0x69d8d3) {
    _0x69d8d3 = _0x69d8d3.replace(/\r\n/g, "\n");
    var _0x48e492 = "";
    for (var _0x5513b9 = 0; _0x5513b9 < _0x69d8d3.length; _0x5513b9++) {
      var _0x5dce0d = _0x69d8d3.charCodeAt(_0x5513b9);
      if (_0x5dce0d < 128) {
        _0x48e492 += String.fromCharCode(_0x5dce0d);
      } else {
        if (_0x5dce0d > 127 && _0x5dce0d < 2048) {
          _0x48e492 += String.fromCharCode(_0x5dce0d >> 6 | 192);
          _0x48e492 += String.fromCharCode(_0x5dce0d & 63 | 128);
        } else {
          _0x48e492 += String.fromCharCode(_0x5dce0d >> 12 | 224);
          _0x48e492 += String.fromCharCode(_0x5dce0d >> 6 & 63 | 128);
          _0x48e492 += String.fromCharCode(_0x5dce0d & 63 | 128);
        }
      }
    }
    return _0x48e492;
  };
  utf8Decode = function (_0x124926) {
    var _0x3250dd = "";
    var _0x1df7c2 = 0;
    var _0x44f4d6 = 0;
    var _0x50186c = 0;
    var _0x5130b5 = 0;
    while (_0x1df7c2 < _0x124926.length) {
      _0x44f4d6 = _0x124926.charCodeAt(_0x1df7c2);
      if (_0x44f4d6 < 128) {
        _0x3250dd += String.fromCharCode(_0x44f4d6);
        _0x1df7c2++;
      } else {
        if (_0x44f4d6 > 191 && _0x44f4d6 < 224) {
          _0x50186c = _0x124926.charCodeAt(_0x1df7c2 + 1 < 10 ? "0" + (_0x1df7c2 + 1) : _0x1df7c2 + 1);
          _0x3250dd += String.fromCharCode((_0x44f4d6 & 31) << 6 | _0x50186c & 63);
          _0x1df7c2 += 2;
        } else {
          _0x50186c = _0x124926.charCodeAt(_0x1df7c2 + 1 < 10 ? "0" + (_0x1df7c2 + 1) : _0x1df7c2 + 1);
          _0x5130b5 = _0x124926.charCodeAt(_0x1df7c2 + 2);
          _0x3250dd += String.fromCharCode((_0x44f4d6 & 15) << 12 | (_0x50186c & 63) << 6 | _0x5130b5 & 63);
          _0x1df7c2 += 3;
        }
      }
    }
    return _0x3250dd;
  };
}
function David_0x225714(_0x5ac64d, _0x51c63d) {
  class _0x54e1c2 {
    constructor(_0x3e7224) {
      this.env = _0x3e7224;
    }
    send(_0x22f131, _0x46235e = "GET") {
      typeof _0x22f131 === "string" ? _0x22f131 = {
        url: _0x22f131
      } : _0x22f131 = _0x22f131;
      let _0x33f429 = this.get;
      if (_0x46235e === "POST") {
        _0x33f429 = this.post;
      }
      return new Promise((_0x273e96, _0x16726d) => {
        _0x33f429.call(this, _0x22f131, (_0x4c8ba6, _0x33b492, _0x4b258a) => {
          if (_0x4c8ba6) {
            _0x16726d(_0x4c8ba6);
          } else {
            _0x273e96(_0x33b492);
          }
        });
      });
    }
    get(_0x464c9b) {
      return this.send.call(this.env, _0x464c9b);
    }
    post(_0x5aed2b) {
      return this.send.call(this.env, _0x5aed2b, "POST");
    }
  }
  return new class {
    constructor(_0x5a8d4d, _0x1bbfde) {
      this.name = _0x5a8d4d;
      this.http = new _0x54e1c2(this);
      this.data = null;
      this.dataFile = "box.dat";
      this.logs = [];
      this.isMute = false;
      this.isNeedRewrite = false;
      this.logSeparator = "\n";
      this.startTime = new Date().getTime();
      Object.assign(this, _0x1bbfde);
      const _0xfc6459 = "\n       ***********          *****      ***       **** ******  ***********  \n       *************       ******      ***      ****  ****    ************ \n      ****      ****     ***  ***      ***     ***    ***    ***      **** \n      ***       ****    ***  ****      ***    ***    ****   ****       *** \n     ****       ***    ***    ***      ***   ***     ***    ***       **** \n     ***       ***    ****   ****      ***  ***     ****   ****       ***  \n    ***      ****    ************      *** ***      ***    ***      ****   \n   ****   ******   ****      ****      ******      ****   ****   ******    \n   **********     ****       ****      *****     ******  ***********";
      if (this.isNode()) {
        this.log(_0xfc6459);
      }
      this.log("", "🔔 " + this.name + ", 开始!");
    }
    isNode() {
      return "undefined" !== typeof module && !!module.exports;
    }
    isQuanX() {
      return "undefined" !== typeof $task;
    }
    isSurge() {
      return "undefined" !== typeof $httpClient && "undefined" === typeof $loon;
    }
    isLoon() {
      return "undefined" !== typeof $loon;
    }
    isShadowrocket() {
      return "undefined" !== typeof $rocket;
    }
    toObj(_0x3de791, _0x12b5a6 = null) {
      try {
        return JSON.parse(_0x3de791);
      } catch {
        return _0x12b5a6;
      }
    }
    toStr(_0xbe27c0, _0x1549a4 = null) {
      try {
        return JSON.stringify(_0xbe27c0);
      } catch {
        return _0x1549a4;
      }
    }
    getjson(_0x239031, _0x1707de) {
      let _0x228a8c = _0x1707de;
      const _0x2838bf = this.getdata(_0x239031);
      if (_0x2838bf) {
        try {
          _0x228a8c = JSON.parse(this.getdata(_0x239031));
        } catch {}
      }
      return _0x228a8c;
    }
    setjson(_0x39c40c, _0x5f2f83) {
      try {
        return this.setdata(JSON.stringify(_0x39c40c), _0x5f2f83);
      } catch {
        return false;
      }
    }
    getScript(_0x54e649) {
      return new Promise(_0x472c25 => {
        const _0x59b0f6 = {
          url: _0x54e649
        };
        this.get(_0x59b0f6, (_0x5984bf, _0x5f0142, _0x56e93a) => _0x472c25(_0x56e93a));
      });
    }
    runScript(_0x2130f5, _0x18567c) {
      return new Promise(_0x12e5f7 => {
        let _0x3609a3 = this.getdata("@chavy_boxjs_userCfgs.httpapi");
        _0x3609a3 ? _0x3609a3 = _0x3609a3.replace(/\n/g, "").trim() : _0x3609a3 = _0x3609a3;
        let _0x9ade07 = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
        _0x9ade07 ? _0x9ade07 = _0x9ade07 * 1 : _0x9ade07 = 20;
        _0x18567c && _0x18567c.timeout ? _0x9ade07 = _0x18567c.timeout : _0x9ade07 = _0x9ade07;
        const [_0x69e198, _0x185328] = _0x3609a3.split("@");
        const _0x1f3501 = {
          script_text: _0x2130f5,
          mock_type: "cron",
          timeout: _0x9ade07
        };
        const _0x2a9064 = {
          "X-Key": _0x69e198,
          Accept: "*/*"
        };
        const _0x38b76d = {
          url: "http: //" + _0x185328 + "/v1/scripting/evaluate",
          body: _0x1f3501,
          headers: _0x2a9064
        };
        this.post(_0x38b76d, (_0x322909, _0x4e4e63, _0x4bbe5a) => _0x12e5f7(_0x4bbe5a));
      }).catch(_0x57c3cc => this.logErr(_0x57c3cc));
    }
    loaddata() {
      if (this.isNode()) {
        this.fs ? this.fs = this.fs : this.fs = require("fs");
        this.path ? this.path = this.path : this.path = require("path");
        const _0x459327 = this.path.resolve(this.dataFile);
        const _0x23920a = this.path.resolve(process.cwd(), this.dataFile);
        const _0x485f80 = this.fs.existsSync(_0x459327);
        const _0x4f6103 = !_0x485f80 && this.fs.existsSync(_0x23920a);
        if (_0x485f80 || _0x4f6103) {
          const _0x534d71 = _0x485f80 ? _0x459327 : _0x23920a;
          try {
            return JSON.parse(this.fs.readFileSync(_0x534d71));
          } catch (_0x3d7ee4) {
            return {};
          }
        } else {
          return {};
        }
      } else {
        return {};
      }
    }
    writedata() {
      if (this.isNode()) {
        this.fs ? this.fs = this.fs : this.fs = require("fs");
        this.path ? this.path = this.path : this.path = require("path");
        const _0x3568a2 = this.path.resolve(this.dataFile);
        const _0x1d1fe4 = this.path.resolve(process.cwd(), this.dataFile);
        const _0x20517e = this.fs.existsSync(_0x3568a2);
        const _0x44ad27 = !_0x20517e && this.fs.existsSync(_0x1d1fe4);
        const _0x66f879 = JSON.stringify(this.data);
        if (_0x20517e) {
          this.fs.writeFileSync(_0x3568a2, _0x66f879);
        } else {
          if (_0x44ad27) {
            this.fs.writeFileSync(_0x1d1fe4, _0x66f879);
          } else {
            this.fs.writeFileSync(_0x3568a2, _0x66f879);
          }
        }
      }
    }
    lodash_get(_0x1236db, _0x3a6230, _0x1d7477 = undefined) {
      const _0x421415 = _0x3a6230.replace(/[(d+)]/g, ".$1").split(".");
      let _0xac36cc = _0x1236db;
      for (const _0x480fed of _0x421415) {
        _0xac36cc = Object(_0xac36cc)[_0x480fed];
        if (_0xac36cc === undefined) {
          return _0x1d7477;
        }
      }
      return _0xac36cc;
    }
    lodash_set(_0x5d77ab, _0x12494b, _0x1cfd25) {
      if (Object(_0x5d77ab) !== _0x5d77ab) {
        return _0x5d77ab;
      }
      if (!Array.isArray(_0x12494b)) {
        _0x12494b = _0x12494b.toString().match(/[^.[]]+/g) || [];
      }
      _0x12494b.slice(0, -1).reduce((_0x243999, _0x399ced, _0x4b53fe) => Object(_0x243999[_0x399ced]) === _0x243999[_0x399ced] ? _0x243999[_0x399ced] : Math.abs(_0x12494b[_0x4b53fe + 1 < 10 ? "0" + (_0x4b53fe + 1) : _0x4b53fe + 1]) >> 0 === +_0x12494b[_0x4b53fe + 1 < 10 ? "0" + (_0x4b53fe + 1) : _0x4b53fe + 1] ? _0x243999[_0x399ced] = [] : _0x243999[_0x399ced] = {}, _0x5d77ab)[_0x12494b[_0x12494b.length - 1]] = _0x1cfd25;
      return _0x5d77ab;
    }
    getdata(_0x3b3539) {
      let _0x5d644a = this.getval(_0x3b3539);
      if (/^@/.test(_0x3b3539)) {
        const [, _0x346890, _0x8baee4] = /^@(.*?).(.*?)$/.exec(_0x3b3539);
        const _0x83ab62 = _0x346890 ? this.getval(_0x346890) : "";
        if (_0x83ab62) {
          try {
            const _0x1123bc = JSON.parse(_0x83ab62);
            _0x1123bc ? _0x5d644a = this.lodash_get(_0x1123bc, _0x8baee4, "") : _0x5d644a = _0x5d644a;
          } catch (_0x5dc0bb) {
            _0x5d644a = "";
          }
        }
      }
      return _0x5d644a;
    }
    setdata(_0x185e11, _0x11182c) {
      let _0x5aff2a = false;
      if (/^@/.test(_0x11182c)) {
        const [, _0x582604, _0x7d685d] = /^@(.*?).(.*?)$/.exec(_0x11182c);
        const _0x1a6457 = this.getval(_0x582604);
        const _0xc5483f = _0x582604 ? _0x1a6457 === "null" ? null : _0x1a6457 || "{}" : "{}";
        try {
          const _0x4367de = JSON.parse(_0xc5483f);
          this.lodash_set(_0x4367de, _0x7d685d, _0x185e11);
          _0x5aff2a = this.setval(JSON.stringify(_0x4367de), _0x582604);
        } catch (_0x3f11ad) {
          const _0x3333c2 = {};
          this.lodash_set(_0x3333c2, _0x7d685d, _0x185e11);
          _0x5aff2a = this.setval(JSON.stringify(_0x3333c2), _0x582604);
        }
      } else {
        _0x5aff2a = this.setval(_0x185e11, _0x11182c);
      }
      return _0x5aff2a;
    }
    getval(_0x37d5d1) {
      if (this.isSurge() || this.isLoon()) {
        return $persistentStore.read(_0x37d5d1);
      } else {
        if (this.isQuanX()) {
          return $prefs.valueForKey(_0x37d5d1);
        } else {
          if (this.isNode()) {
            this.data = this.loaddata();
            return this.data[_0x37d5d1];
          } else {
            return this.data && this.data[_0x37d5d1] || null;
          }
        }
      }
    }
    setval(_0x3435eb, _0x16f511) {
      if (this.isSurge() || this.isLoon()) {
        return $persistentStore.write(_0x3435eb, _0x16f511);
      } else {
        if (this.isQuanX()) {
          return $prefs.setValueForKey(_0x3435eb, _0x16f511);
        } else {
          if (this.isNode()) {
            this.data = this.loaddata();
            this.data[_0x16f511] = _0x3435eb;
            this.writedata();
            return true;
          } else {
            return this.data && this.data[_0x16f511] || null;
          }
        }
      }
    }
    initGotEnv(_0x426ae0) {
      this.got ? this.got = this.got : this.got = require("got");
      this.cktough ? this.cktough = this.cktough : this.cktough = require("tough-cookie");
      this.ckjar ? this.ckjar = this.ckjar : this.ckjar = new this.cktough.CookieJar();
      if (_0x426ae0) {
        _0x426ae0.headers ? _0x426ae0.headers = _0x426ae0.headers : _0x426ae0.headers = {};
        if (undefined === _0x426ae0.headers.Cookie && undefined === _0x426ae0.cookieJar) {
          _0x426ae0.cookieJar = this.ckjar;
        }
      }
    }
    get(_0xbdc3cb, _0x33b0bb = () => {}) {
      if (_0xbdc3cb.headers) {
        delete _0xbdc3cb.headers["Content-Type"];
        delete _0xbdc3cb.headers["Content-Length"];
      }
      if (this.isSurge() || this.isLoon()) {
        if (this.isSurge() && this.isNeedRewrite) {
          _0xbdc3cb.headers = _0xbdc3cb.headers || {};
          const _0x57a817 = {
            "X-Surge-Skip-Scripting": false
          };
          Object.assign(_0xbdc3cb.headers, _0x57a817);
        }
        $httpClient.get(_0xbdc3cb, (_0x42cfa3, _0x5b58b2, _0x50e37e) => {
          if (!_0x42cfa3 && _0x5b58b2) {
            _0x5b58b2.body = _0x50e37e;
            _0x5b58b2.statusCode = _0x5b58b2.status;
          }
          _0x33b0bb(_0x42cfa3, _0x5b58b2, _0x50e37e);
        });
      } else {
        if (this.isQuanX()) {
          if (this.isNeedRewrite) {
            _0xbdc3cb.opts = _0xbdc3cb.opts || {};
            const _0x30dc89 = {
              hints: false
            };
            Object.assign(_0xbdc3cb.opts, _0x30dc89);
          }
          $task.fetch(_0xbdc3cb).then(_0x27aa61 => {
            const {
              statusCode: _0x3fcec1,
              statusCode,
              headers,
              body
            } = _0x27aa61;
            const _0x4d1985 = {
              status: _0x3fcec1,
              statusCode: statusCode,
              headers: headers,
              body: body
            };
            _0x33b0bb(null, _0x4d1985, body);
          }, _0x52f298 => _0x33b0bb(_0x52f298));
        } else {
          if (this.isNode()) {
            this.initGotEnv(_0xbdc3cb);
            this.got(_0xbdc3cb).on("redirect", (_0x4c50e1, _0x5b586e) => {
              try {
                if (_0x4c50e1.headers["set-cookie"]) {
                  const _0x40fd4e = _0x4c50e1.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();
                  if (_0x40fd4e) {
                    this.ckjar.setCookieSync(_0x40fd4e, null);
                  }
                  _0x5b586e.cookieJar = this.ckjar;
                }
              } catch (_0x327b9c) {
                this.logErr(_0x327b9c);
              }
            }).then(_0x812136 => {
              const {
                statusCode: _0x5cfcff,
                statusCode,
                headers,
                body
              } = _0x812136;
              const _0x2ce1a0 = {
                status: _0x5cfcff,
                statusCode: statusCode,
                headers: headers,
                body: body
              };
              _0x33b0bb(null, _0x2ce1a0, body);
            }, _0x3772b2 => {
              const {
                message: _0x38e7f9,
                response: _0xaaa10c
              } = _0x3772b2;
              _0x33b0bb(_0x38e7f9, _0xaaa10c, _0xaaa10c && _0xaaa10c.body);
            });
          }
        }
      }
    }
    post(_0x5838f0, _0x940fa2 = () => {}) {
      const _0x16dec7 = _0x5838f0.method ? _0x5838f0.method.toLocaleLowerCase() : "post";
      if (_0x5838f0.body && _0x5838f0.headers && !_0x5838f0.headers["Content-Type"]) {
        _0x5838f0.headers["Content-Type"] = "application/x-www-form-urlencoded";
      }
      if (_0x5838f0.headers) {
        delete _0x5838f0.headers["Content-Length"];
      }
      if (this.isSurge() || this.isLoon()) {
        if (this.isSurge() && this.isNeedRewrite) {
          _0x5838f0.headers = _0x5838f0.headers || {};
          const _0x1cb748 = {
            "X-Surge-Skip-Scripting": false
          };
          Object.assign(_0x5838f0.headers, _0x1cb748);
        }
        $httpClient[_0x16dec7](_0x5838f0, (_0x242897, _0x1ca51e, _0x244a57) => {
          if (!_0x242897 && _0x1ca51e) {
            _0x1ca51e.body = _0x244a57;
            _0x1ca51e.statusCode = _0x1ca51e.status;
          }
          _0x940fa2(_0x242897, _0x1ca51e, _0x244a57);
        });
      } else {
        if (this.isQuanX()) {
          _0x5838f0.method = _0x16dec7;
          if (this.isNeedRewrite) {
            _0x5838f0.opts = _0x5838f0.opts || {};
            const _0x2535ef = {
              hints: false
            };
            Object.assign(_0x5838f0.opts, _0x2535ef);
          }
          $task.fetch(_0x5838f0).then(_0x2425c0 => {
            const {
              statusCode: _0x106689,
              statusCode,
              headers,
              body
            } = _0x2425c0;
            const _0x2a86f6 = {
              status: _0x106689,
              statusCode: statusCode,
              headers: headers,
              body: body
            };
            _0x940fa2(null, _0x2a86f6, body);
          }, _0x7696d9 => _0x940fa2(_0x7696d9));
        } else {
          if (this.isNode()) {
            this.initGotEnv(_0x5838f0);
            const {
              url,
              ..._0x3a703e
            } = _0x5838f0;
            this.got[_0x16dec7](url, _0x3a703e).then(_0x400462 => {
              const {
                statusCode: _0x17895a,
                statusCode,
                headers,
                body
              } = _0x400462;
              const _0x603342 = {
                status: _0x17895a,
                statusCode: statusCode,
                headers: headers,
                body: body
              };
              _0x940fa2(null, _0x603342, body);
            }, _0x324734 => {
              const {
                message: _0x4e772f,
                response: _0x19dde1
              } = _0x324734;
              _0x940fa2(_0x4e772f, _0x19dde1, _0x19dde1 && _0x19dde1.body);
            });
          }
        }
      }
    }
    put(_0x4a0b2b, _0x651c48 = () => {}) {
      const _0x105084 = _0x4a0b2b.method ? _0x4a0b2b.method.toLocaleLowerCase() : "put";
      if (_0x4a0b2b.body && _0x4a0b2b.headers && !_0x4a0b2b.headers["Content-Type"]) {
        _0x4a0b2b.headers["Content-Type"] = "application/x-www-form-urlencoded";
      }
      if (_0x4a0b2b.headers) {
        delete _0x4a0b2b.headers["Content-Length"];
      }
      if (this.isSurge() || this.isLoon()) {
        if (this.isSurge() && this.isNeedRewrite) {
          _0x4a0b2b.headers = _0x4a0b2b.headers || {};
          const _0x45beeb = {
            "X-Surge-Skip-Scripting": false
          };
          Object.assign(_0x4a0b2b.headers, _0x45beeb);
        }
        $httpClient[_0x105084](_0x4a0b2b, (_0x497fce, _0x3f8405, _0x40dfa6) => {
          if (!_0x497fce && _0x3f8405) {
            _0x3f8405.body = _0x40dfa6;
            _0x3f8405.statusCode = _0x3f8405.status;
          }
          _0x651c48(_0x497fce, _0x3f8405, _0x40dfa6);
        });
      } else {
        if (this.isQuanX()) {
          _0x4a0b2b.method = _0x105084;
          if (this.isNeedRewrite) {
            _0x4a0b2b.opts = _0x4a0b2b.opts || {};
            const _0x4d8cd8 = {
              hints: false
            };
            Object.assign(_0x4a0b2b.opts, _0x4d8cd8);
          }
          $task.fetch(_0x4a0b2b).then(_0x3fd770 => {
            const {
              statusCode: _0x135684,
              statusCode,
              headers,
              body
            } = _0x3fd770;
            const _0x4c4f7e = {
              status: _0x135684,
              statusCode: statusCode,
              headers: headers,
              body: body
            };
            _0x651c48(null, _0x4c4f7e, body);
          }, _0x431984 => _0x651c48(_0x431984));
        } else {
          if (this.isNode()) {
            this.initGotEnv(_0x4a0b2b);
            const {
              url,
              ..._0x1c8605
            } = _0x4a0b2b;
            this.got[_0x105084](url, _0x1c8605).then(_0xddd2a => {
              const {
                statusCode: _0x5964ec,
                statusCode,
                headers,
                body
              } = _0xddd2a;
              const _0x73aab2 = {
                status: _0x5964ec,
                statusCode: statusCode,
                headers: headers,
                body: body
              };
              _0x651c48(null, _0x73aab2, body);
            }, _0x21c383 => {
              const {
                message: _0xcf530e,
                response: _0x2d7599
              } = _0x21c383;
              _0x651c48(_0xcf530e, _0x2d7599, _0x2d7599 && _0x2d7599.body);
            });
          }
        }
      }
    }
    time(_0x1d3453, _0x28a0a3 = null) {
      const _0x214d58 = _0x28a0a3 ? new Date(_0x28a0a3) : new Date();
      const _0x371d44 = {
        "M+": _0x214d58.getMonth() + 1,
        "d+": _0x214d58.getDate(),
        "H+": _0x214d58.getHours(),
        "m+": _0x214d58.getMinutes(),
        "s+": _0x214d58.getSeconds(),
        "q+": Math.floor((_0x214d58.getMonth() + 3) / 3),
        S: _0x214d58.getMilliseconds()
      };
      if (/(y+)/.test(_0x1d3453)) {
        _0x1d3453 = _0x1d3453.replace(RegExp.$1, (_0x214d58.getFullYear() + "").substr(4 - RegExp.$1.length));
      }
      for (let _0xec97b2 in _0x371d44) if (new RegExp("(" + _0xec97b2 + ")").test(_0x1d3453)) {
        _0x1d3453 = _0x1d3453.replace(RegExp.$1, RegExp.$1.length == 1 ? _0x371d44[_0xec97b2] : ("00" + _0x371d44[_0xec97b2]).substr(("" + _0x371d44[_0xec97b2]).length));
      }
      return _0x1d3453;
    }
    msg(_0x2d4702 = _0x5ac64d, _0x4b16fa = "", _0x3ab73f = "", _0x169c34) {
      const _0x1c1eac = _0x328917 => {
        if (!_0x328917) {
          return _0x328917;
        }
        if (typeof _0x328917 === "string") {
          if (this.isLoon()) {
            return _0x328917;
          } else {
            if (this.isQuanX()) {
              return {
                "open-url": _0x328917
              };
            } else {
              if (this.isSurge()) {
                return {
                  url: _0x328917
                };
              } else {
                return undefined;
              }
            }
          }
        } else {
          if (typeof _0x328917 === "object") {
            if (this.isLoon()) {
              let _0x5f2b84 = _0x328917.openUrl || _0x328917.url || _0x328917["open-url"];
              let _0x229d84 = _0x328917.mediaUrl || _0x328917["media-url"];
              const _0x542237 = {
                openUrl: _0x5f2b84,
                mediaUrl: _0x229d84
              };
              return _0x542237;
            } else {
              if (this.isQuanX()) {
                let _0x3f8260 = _0x328917["open-url"] || _0x328917.url || _0x328917.openUrl;
                let _0x21dbf7 = _0x328917["media-url"] || _0x328917.mediaUrl;
                const _0x1d3fe9 = {
                  "open-url": _0x3f8260,
                  "media-url": _0x21dbf7
                };
                return _0x1d3fe9;
              } else {
                if (this.isSurge()) {
                  let _0x56e6c0 = _0x328917.url || _0x328917.openUrl || _0x328917["open-url"];
                  const _0xf3ff6d = {
                    url: _0x56e6c0
                  };
                  return _0xf3ff6d;
                }
              }
            }
          } else {
            return undefined;
          }
        }
      };
      if (!this.isMute) {
        if (this.isSurge() || this.isLoon()) {
          $notification.post(_0x2d4702, _0x4b16fa, _0x3ab73f, _0x1c1eac(_0x169c34));
        } else {
          if (this.isQuanX()) {
            $notify(_0x2d4702, _0x4b16fa, _0x3ab73f, _0x1c1eac(_0x169c34));
          }
        }
      }
      if (!this.isMuteLog) {
        let _0x44d150 = ["", "==============📣系统通知📣=============="];
        _0x44d150.push(_0x2d4702);
        _0x4b16fa ? _0x44d150.push(_0x4b16fa) : "";
        _0x3ab73f ? _0x44d150.push(_0x3ab73f) : "";
        console.log(_0x44d150.join("\n"));
        this.logs = this.logs.concat(_0x44d150);
      }
    }
    log(..._0x32f93f) {
      if (_0x32f93f.length > 0) {
        this.logs = [...this.logs, ..._0x32f93f];
      }
      console.log(_0x32f93f.join(this.logSeparator));
    }
    logErr(_0x29e732, _0x2ae8e8) {
      const _0x566048 = !this.isSurge() && !this.isQuanX() && !this.isLoon();
      if (!_0x566048) {
        this.log("", "❗️" + this.name + ", 错误!", _0x29e732);
      } else {
        this.log("", "❗️" + this.name + ", 错误!", _0x29e732.stack);
      }
    }
    wait(_0x443ac5) {
      return new Promise(_0x1dd9d => setTimeout(_0x1dd9d, _0x443ac5));
    }
    done(_0x450e06 = {}) {
      const _0x435dc2 = new Date().getTime();
      const _0x3b8620 = (_0x435dc2 - this.startTime) / 1000;
      this.log("", "🔔" + this.name + ", 结束!🕛" + _0x3b8620 + "秒");
      this.log();
      if (this.isSurge() || this.isQuanX() || this.isLoon()) {
        $done(_0x450e06);
      }
    }
  }(_0x5ac64d, _0x51c63d);
}