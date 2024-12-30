//Mon Dec 30 2024 02:57:48 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
NAME = "水果派";
VALY = ["sgp"];
CK = "";
let _0x472c06 = process.env.weixinToken,
  _0x56275c = process.env.xqkdddl,
  _0x2c60c = "http://www.yczhengxinkeji.com";
const _0x3859a7 = ["\n", "@", "&"],
  _0x41a9d5 = 0;
usid = 0;
class _0x5c85e1 {
  constructor(_0x19839a) {
    this.authorization = _0x19839a.split("#")[0];
    this.ua = _0x19839a.split("#")[1];
    this.device = _0x19839a.split("#")[2];
    this.headers = {
      "User-Agent": this.ua,
      "Accept-Encoding": "identity",
      "game-type": "2",
      "oaid": "",
      "Authorization": this.authorization,
      "app-id": "11"
    };
  }
  async ["hqdl"]() {
    let _0x47b245 = await $.task("get", _0x56275c, {
      "User-Agent": "Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Mobile Safari/537.36"
    });
    this.dlip = _0x47b245.split("\n")[0];
    console.log("账号" + this.num + "：代理IP：" + this.dlip);
  }
  async ["user_task_list"]() {
    await $.wait($.RT(1000, 3000));
    await this.guanggao();
  }
  async ["login"]() {
    let _0x1d039e = await this.task("get", _0x2c60c + "/xw-api/main/user/get", this.headers);
    if (_0x1d039e.code == 200) {
      this.time13 = $.time(13);
      this.login = true;
      this.num = _0x1d039e.data.nickName;
      this.game = _0x1d039e.data.game;
      console.log(this.num + " 金币：" + _0x1d039e.data.goldCoin + " 直推：" + _0x1d039e.data.amount);
    } else {
      this.login = false;
      let _0x43759b = _0x1d039e.msg;
      console.log(this.num + " ：" + _0x43759b);
      _0x472c06 !== undefined && (await this.wxpusher(_0x43759b));
      return;
    }
  }
  async ["wxpusher"](_0xb30316) {
    let _0x3c817f = {
        "X-Requested-With": "com.tencent.mm",
        "User-Agent": "Dalvik/2.1.0 (Linux; U; Android 13; M2012K11AC Build/TKQ1.220829.002)"
      },
      _0x5b44e8 = await this.task("get", "https://wxpusher.zjiecode.com/api/send/message/?appToken=" + _0x472c06.split("#")[0] + "&content=" + encodeURI("" + _0x472c06.split("#")[2] + NAME + "账号[" + this.num + "]:" + _0xb30316) + "&uid=" + _0x472c06.split("#")[1], _0x3c817f);
    _0x5b44e8.code == 1000 ? console.log("微信通知" + _0x5b44e8.msg) : console.log("微信通知失败");
  }
  async ["xinxi"]() {
    let _0x4905a4 = await this.task("get", _0x2c60c + "/xw-api/main/user/get", this.headers);
    if (_0x4905a4.code == 200) console.log(this.num + " 金币：" + _0x4905a4.data.goldCoin);else {
      let _0x39205d = _0x4905a4.msg;
      console.log(this.num + " ：" + _0x39205d);
    }
  }
  async ["guanggao"]() {
    let _0x5426c9 = "广告";
    this.network = "96273" + $.SJS(4, 2);
    let _0x1a702d = $.MD5Encrypt(0, this.device + "&27d24322-07e8-4dd4-839e-59e7255cee5b&3864c53fd757a9e994d9aa31af56be8c&" + this.time13 + "&8545");
    this.transid = _0x1a702d + "_718" + $.SJS(4, 2) + "_" + $.time(13);
    let _0x40ca29 = await this.task("post", _0x2c60c + "/xw-api/main/ecmp/add", this.headers, "{\"ecpm\":\"60.0\",\"game_type\":\"2\",\"network_placement_id\":\"" + this.network + "\",\"trans_id\":\"" + this.transid + "\",\"type\":\"1\"}");
    if (_0x40ca29.code == 200) await $.wait($.RT(3000, 5000)), await this.guanggao11();else {
      let _0x32f5a8 = _0x40ca29.msg;
      console.log(this.num + " " + _0x5426c9 + "：" + _0x32f5a8);
    }
  }
  async ["guanggao11"]() {
    let _0x34fa50 = "广告1",
      _0x5de7f3 = await this.task("post", _0x2c60c + "/xw-api/main/blockingInfo/checkAdvertBlocking", this.headers, "{}");
    if (_0x5de7f3.code == 200) {
      await $.wait($.RT(3000, 5000));
      for (let _0x4ab1ce = 0; _0x4ab1ce < 1; _0x4ab1ce++) {
        if (_0x4ab1ce == 0) {} else {}
        await this.dad();
        await $.wait($.RT(3000, 5000));
      }
    } else {
      let _0x1d3e79 = _0x5de7f3.msg;
      console.log(this.num + " " + _0x34fa50 + "：" + _0x1d3e79);
    }
  }
  async ["dad"](_0x293338) {
    let _0x224638 = "点广告",
      _0x950db = await this.task("post", _0x2c60c + "/xw-api/main/ecmp/edit", this.headers, "{\"advert_behavior\":\"" + _0x293338 + "\",\"trans_id\":\"" + this.transid + "\",\"trigger_point\":\"cgcg\"}");
    if (_0x950db.code == 200) {
      await $.wait($.RT(1000, 2000));
      await this.callback();
    } else {
      let _0x21bb6a = _0x950db.msg;
      console.log(this.num + "  " + _0x224638 + "：" + _0x21bb6a);
    }
  }
  async ["callback"]() {
    let _0x105283 = "广告回调",
      _0x5a534c = await this.task("post", _0x2c60c + "/xw-api/main/game/adv1_callback", this.headers, "{\"advert_behavior\":\"\",\"brand\":\"\",\"brand_model\":\"\",\"device_id\":\"\",\"ecpm\":\"60.0\",\"game_type\":\"2\",\"is_click\":\"2\",\"level\":\"" + this.game + "\",\"loadid\":\"" + this.transid + "\",\"network_name\":\"CSJ\",\"network_placement_id\":\"" + this.network + "\",\"trigger_point\":\"\",\"type\":\"1\",\"vied_id\":\"\"}");
    if (_0x5a534c.code == 200) await $.wait($.RT(1000, 2000)), await this.handleTask();else {
      let _0x323b20 = _0x5a534c.msg;
      console.log(this.num + " " + _0x105283 + "：" + _0x323b20);
    }
  }
  async ["handleTask"]() {
    let _0x586cdc = "下发奖励",
      _0x169f25 = await this.task("post", _0x2c60c + "/xw-api/main/ecmp/edit", this.headers, "{\"advert_behavior\":\"下发奖励\",\"trans_id\":\"" + this.transid + "\",\"trigger_point\":\"cgcg\"}");
    if (_0x169f25.code == 200) {
      await $.wait($.RT(3000, 5000));
      await this.end();
    } else {
      let _0xc195e0 = _0x169f25.msg;
      console.log(this.num + " " + _0x586cdc + "：" + _0xc195e0);
    }
  }
  async ["end"]() {
    let _0x5b8a39 = "闯关成功",
      _0x2e28d0 = await this.task("post", _0x2c60c + "/xw-api/main/game/end", this.headers, "{\"level\":" + this.game + ",\"or_true\":1,\"transId\":\"" + this.transid + "\"}");
    if (_0x2e28d0.code == 200) {
      console.log(this.num + " " + (_0x5b8a39 + this.game) + "关：" + _0x2e28d0.data.integral + "金币");
      await $.wait($.RT(1000, 3000));
      let _0x26e365 = _0x2e28d0.data.goldCoin;
      await this.guanbi();
      if (_0x26e365 >= 10000) await this.tixian();else {
        let _0x240cc9 = $.RT(160000, 340000);
        console.log("随机延迟" + Math.round(_0x240cc9 * 0.001) + "秒");
        await $.wait(_0x240cc9);
        this.game = _0x2e28d0.data.game;
        await this.guanggao();
      }
    } else {
      let _0x36d808 = _0x2e28d0.msg;
      console.log(this.num + " " + _0x5b8a39 + "：" + _0x36d808);
    }
  }
  async ["guanbi"]() {
    let _0x5f5df7 = "关闭",
      _0x59e702 = await this.task("post", _0x2c60c + "/xw-api/main/ecmp/edit", this.headers, "{\"advert_behavior\":\"关闭\",\"trans_id\":\"" + this.transid + "\",\"trigger_point\":\"cgcg\"}");
    if (_0x59e702.code == 200) {} else {
      let _0x2f15e8 = _0x59e702.msg;
      console.log(this.num + " " + _0x5f5df7 + "：" + _0x2f15e8);
    }
  }
  async ["tixian"]() {
    let _0x3aa985 = "提现",
      _0x405983 = await this.task("post", _0x2c60c + "/xw-api/main/transfer/add", this.headers, "{\"amount\":1,\"type\":\"wechat_wallet\",\"withdrawal_config_id\":18,\"icon\":1}");
    if (_0x405983.code == 200) {
      let _0x4f2715 = _0x405983.msg;
      console.log(this.num + "  " + _0x3aa985 + "：" + _0x4f2715);
    } else {
      let _0x5d4caf = _0x405983.msg;
      console.log(this.num + " " + _0x3aa985 + "：" + _0x5d4caf);
    }
  }
  async ["task"](_0x1a1b64, _0x3ab8dc, _0x3670eb, _0x45fa60) {
    _0x1a1b64 == "delete" ? _0x1a1b64 = _0x1a1b64.toUpperCase() : _0x1a1b64 = _0x1a1b64;
    const _0x4aaa70 = require("request");
    if (_0x1a1b64 == "post") {
      delete _0x3670eb["Content-Type"];
      delete _0x3670eb["content-type"];
      delete _0x3670eb["Content-Length"];
      delete _0x3670eb["content-length"];
      if ($.safeGet(_0x45fa60)) {
        _0x3670eb["content-type"] = "application/json;charset=utf-8";
      } else _0x3670eb["content-type"] = "application/x-www-form-urlencoded";
      _0x45fa60 && (_0x3670eb["content-length"] = $.lengthInUtf8Bytes(_0x45fa60));
    }
    _0x1a1b64 == "get" && (delete _0x3670eb["Content-Type"], delete _0x3670eb["content-length"], delete _0x3670eb["content-type"], delete _0x3670eb["Content-Length"]);
    _0x3670eb.Host = _0x3ab8dc.replace("//", "/").split("/")[1];
    if (_0x56275c == undefined) {
      if (_0x1a1b64.indexOf("T") < 0) var _0x5f5a60 = {
        "url": _0x3ab8dc,
        "headers": _0x3670eb,
        "body": _0x45fa60,
        "timeout": 20000
      };else var _0x5f5a60 = {
        "url": _0x3ab8dc,
        "headers": _0x3670eb,
        "form": JSON.parse(_0x45fa60),
        "timeout": 20000
      };
    } else {
      if (_0x1a1b64.indexOf("T") < 0) var _0x5f5a60 = {
        "url": _0x3ab8dc,
        "headers": _0x3670eb,
        "body": _0x45fa60,
        "proxy": "http://" + this.dlip,
        "timeout": 20000
      };else var _0x5f5a60 = {
        "url": _0x3ab8dc,
        "headers": _0x3670eb,
        "form": JSON.parse(_0x45fa60),
        "proxy": "http://" + this.dlip,
        "timeout": 20000
      };
    }
    return new Promise(async _0x314493 => {
      _0x4aaa70[_0x1a1b64.toLowerCase()](_0x5f5a60, async (_0x208f24, _0xf2584a, _0x325bf0) => {
        try {
          _0x41a9d5 == 1 && (console.log("==================请求=================="), console.log(JSON.stringify(_0x5f5a60)), console.log("==================返回=================="), console.log(_0x325bf0));
        } catch (_0x26ea1c) {} finally {
          return !_0x208f24 ? $.safeGet(_0x325bf0) ? _0x325bf0 = JSON.parse(_0x325bf0) : _0x325bf0 = _0x325bf0 : _0x56275c == undefined ? (console.log("请检查网络设置"), _0x325bf0 = JSON.parse("{\"code\":\"99\"}")) : (await this.hqdl(), _0x325bf0 = await this.task(_0x1a1b64, _0x3ab8dc, _0x3670eb, _0x45fa60)), _0x314493(_0x325bf0);
        }
      });
    });
  }
}
$ = _0x5d4843();
!(async () => {
  console.log("[" + NAME + "] " + $.timenow(3) + ":" + $.timenow(4) + ":" + $.timenow(5));
  console.log("📢 请认真阅读以下声明\n【免责声明】\n📌 脚本文件仅用于测试和学习研究\n📌 脚本文件任何人不得用于商业以及非法用途\n📌 禁止任何公众号、自媒体进行任何形式的转发\n📌 脚本文件请在下载试用后24小时内自行删除\n📌 因使用脚本造成软件平台的一切损失皆由使用者承担\n📌 脚本文件如有不慎被破解或修改由破解或修改者承担\n📌 如不接受此条款请立即删除脚本文件");
  await $.ExamineCookie();
  if (_0x56275c == undefined) {
    console.log("当前使用本地网络运行脚本");
    for (let _0x3bc103 of $.cookie_list) {
      if (_0x41a9d5 == 0) {
        let _0x54d534 = $.RT(515000, 849000);
        console.log("随机延迟" + Math.round(_0x54d534 * 0.001) + "秒");
        await $.wait(_0x54d534);
      }
      console.log("\n-------- 用户信息 --------");
      await _0x3bc103.login();
      _0x3bc103.login && (console.log("\n-------- 任务列表 --------"), await _0x3bc103.user_task_list(), console.log("\n-------- 运行结果 --------"), await _0x3bc103.xinxi());
    }
  } else {
    console.log("当前使用代理网络运行脚本");
    await $.Multithreading("hqdl");
    console.log("\n-------- 用户信息 --------");
    await $.Multithreading("login");
    let _0x4dcb60 = $.cookie_list.filter(_0x3504a7 => _0x3504a7.login == true);
    if (_0x4dcb60.length == 0) {
      console.log("Cookie格式错误 或 账号被禁封");
      return;
    } else {
      console.log("\n-------- 任务列表 --------");
      for (let _0x5f1592 of _0x4dcb60) {
        await _0x5f1592.user_task_list();
      }
      console.log("\n-------- 运行结果 --------");
    }
    for (let _0x12493b of $.cookie_list) {
      _0x12493b.xinxi();
    }
  }
})().catch(_0x336890 => {
  console.log(_0x336890);
}).finally(() => {});
function _0x5d4843() {
  return new class {
    constructor() {
      this.cookie_list = [];
      this.message = "";
      this.CryptoJS = require("crypto-js");
      this.NodeRSA = require("node-rsa");
      this.request = require("request");
      this.Sha_Rsa = require("jsrsasign");
    }
    async ["Multithreading"](_0x5b8495, _0x7aa78a, _0x5e4b9e) {
      let _0x58985e = [];
      if (!_0x5e4b9e) {
        _0x5e4b9e = 1;
      }
      while (_0x5e4b9e--) {
        for (let _0x5b2d52 of $.cookie_list) {
          _0x58985e.push(_0x5b2d52[_0x5b8495](_0x7aa78a));
        }
      }
      await Promise.allSettled(_0x58985e);
    }
    ["ExamineCookie"]() {
      let _0xf1db13 = process.env[VALY] || CK,
        _0x22c251 = 0;
      if (_0xf1db13) {
        for (let _0x5c4b60 of _0x3859a7) {
          if (_0xf1db13.includes(_0x5c4b60)) {
            this.splitor = _0x5c4b60;
            break;
          }
        }
        for (let _0x308635 of _0xf1db13.split(this.splitor).filter(_0x4b7064 => !!_0x4b7064)) {
          $.cookie_list.push(new _0x5c85e1(_0x308635));
        }
        _0x22c251 = $.cookie_list.length;
      } else {
        console.log("\n【" + NAME + "】：未填写变量: " + VALY);
      }
      return console.log("共找到" + _0x22c251 + "个账号"), $.cookie_list;
    }
    ["task"](_0x11113e, _0x300171, _0x471036, _0x38c6e5, _0x42499a) {
      _0x11113e == "delete" ? _0x11113e = _0x11113e.toUpperCase() : _0x11113e = _0x11113e;
      if (_0x11113e == "post") {
        delete _0x471036["content-type"];
        delete _0x471036["Content-type"];
        delete _0x471036["content-Type"];
        if ($.safeGet(_0x38c6e5)) _0x471036["Content-Type"] = "application/json;charset=UTF-8";else {
          _0x471036["Content-Type"] = "application/x-www-form-urlencoded";
        }
        if (_0x38c6e5) {
          _0x471036["Content-Length"] = $.lengthInUtf8Bytes(_0x38c6e5);
        }
      }
      return _0x11113e == "get" && (delete _0x471036["content-type"], delete _0x471036["Content-type"], delete _0x471036["content-Type"], delete _0x471036["Content-Length"]), _0x471036.Host = _0x300171.replace("//", "/").split("/")[1], new Promise(async _0x89e908 => {
        if (_0x11113e.indexOf("T") < 0) {
          var _0x107594 = {
            "url": _0x300171,
            "headers": _0x471036,
            "body": _0x38c6e5,
            "proxy": "http://" + _0x42499a
          };
        } else var _0x107594 = {
          "url": _0x300171,
          "headers": _0x471036,
          "form": JSON.parse(_0x38c6e5),
          "proxy": "http://" + _0x42499a
        };
        !_0x42499a && delete _0x107594.proxy;
        this.request[_0x11113e.toLowerCase()](_0x107594, (_0x30c6d8, _0x3fe38b, _0x3b10d6) => {
          try {
            if (_0x3b10d6) {
              if (_0x41a9d5 == 1) {
                console.log("================ 请求 ================");
                console.log(_0x107594);
                console.log("================ 返回 ================");
                if ($.safeGet(_0x3b10d6)) console.log(JSON.parse(_0x3b10d6));else {
                  console.log(_0x3b10d6);
                }
              }
            }
          } catch (_0x30f8e7) {
            console.log(_0x30f8e7, _0x300171 + "\n" + _0x471036);
          } finally {
            let _0x4efe6b = "";
            if (!_0x30c6d8) {
              if ($.safeGet(_0x3b10d6)) _0x4efe6b = JSON.parse(_0x3b10d6);else _0x3b10d6.indexOf("/") != -1 && _0x3b10d6.indexOf("+") != -1 ? _0x4efe6b = $.decrypts(_0x3b10d6) : _0x4efe6b = _0x3b10d6;
            } else _0x4efe6b = _0x300171 + "   API请求失败，请检查网络重试\n" + _0x30c6d8;
            return _0x89e908(_0x4efe6b);
          }
        });
      });
    }
    ["task2"](_0x34345f, _0x4eb9c7, _0xf195be, _0x3e61db, _0x106146) {
      _0x34345f == "delete" ? _0x34345f = _0x34345f.toUpperCase() : _0x34345f = _0x34345f;
      _0x34345f == "post" && (delete _0xf195be["content-type"], delete _0xf195be["Content-type"], delete _0xf195be["content-Type"], $.safeGet(_0x3e61db) ? _0xf195be["Content-Type"] = "application/json;charset=UTF-8" : _0xf195be["Content-Type"] = "application/x-www-form-urlencoded", _0x3e61db && (_0xf195be["Content-Length"] = $.lengthInUtf8Bytes(_0x3e61db)));
      _0x34345f == "get" && (delete _0xf195be["content-type"], delete _0xf195be["Content-type"], delete _0xf195be["content-Type"], delete _0xf195be["Content-Length"]);
      _0xf195be.Host = _0x4eb9c7.replace("//", "/").split("/")[1];
      if (_0x34345f.indexOf("T") < 0) var _0x101fcf = {
        "url": _0x4eb9c7,
        "headers": _0xf195be,
        "body": _0x3e61db
      };else {
        var _0x101fcf = {
          "url": _0x4eb9c7,
          "headers": _0xf195be,
          "form": JSON.parse(_0x3e61db)
        };
      }
      return new Promise(async _0x4aeb22 => {
        this.request[_0x34345f.toLowerCase()](_0x101fcf, (_0x2bc3e7, _0x4d0d55, _0x49580c) => {
          try {
            if (_0x49580c) {
              if (_0x41a9d5 == 1) {
                console.log("================ 请求 ================");
                console.log(_0x101fcf);
                console.log("================ 返回 ================");
                if ($.safeGet(_0x49580c)) console.log(JSON.parse(_0x49580c));else {
                  console.log(_0x49580c);
                }
              }
            }
          } catch (_0x59f6f6) {
            console.log(_0x59f6f6, _0x4eb9c7 + "\n" + _0xf195be);
          } finally {
            let _0x1249b8 = "";
            if (!_0x2bc3e7) {
              if ($.safeGet(_0x49580c)) _0x1249b8 = _0x49580c;else _0x49580c.indexOf("/") != -1 && _0x49580c.indexOf("+") != -1 ? _0x1249b8 = $.decrypts(_0x49580c) : _0x1249b8 = _0x49580c;
            } else _0x1249b8 = _0x4eb9c7 + "   API请求失败，请检查网络重试\n" + _0x2bc3e7;
            return _0x4aeb22(_0x1249b8);
          }
        });
      });
    }
    ["lengthInUtf8Bytes"](_0x1bdaa8) {
      let _0x6445c4 = encodeURIComponent(_0x1bdaa8).match(/%[89ABab]/g);
      return _0x1bdaa8.length + (_0x6445c4 ? _0x6445c4.length : 0);
    }
    ["randomArr"](_0x225388) {
      return _0x225388[parseInt(Math.random() * _0x225388.length, 10)];
    }
    ["wait"](_0x2dda89) {
      return new Promise(_0x160ae4 => setTimeout(_0x160ae4, _0x2dda89));
    }
    ["time"](_0x2cee67) {
      if (_0x2cee67 == 10) return Math.round(+new Date() / 1000);else {
        return +new Date();
      }
    }
    ["timenow"](_0x413186) {
      let _0x5a6a5b = new Date();
      if (_0x413186 == undefined) {
        let _0xfaebe = new Date(),
          _0x340b22 = _0xfaebe.getFullYear() + "-",
          _0x112189 = (_0xfaebe.getMonth() + 1 < 10 ? "0" + (_0xfaebe.getMonth() + 1) : _0xfaebe.getMonth() + 1) + "-",
          _0x219adc = _0xfaebe.getDate() < 10 ? "0" + _0xfaebe.getDate() : _0xfaebe.getDate() + " ",
          _0x4d9f22 = _0xfaebe.getHours() + ":",
          _0x7113f0 = _0xfaebe.getMinutes() + ":",
          _0x39ac2b = _0xfaebe.getSeconds() + 1 < 10 ? "0" + _0xfaebe.getSeconds() : _0xfaebe.getSeconds();
        return _0x340b22 + _0x112189 + _0x219adc + _0x4d9f22 + _0x7113f0 + _0x39ac2b;
      } else {
        if (_0x413186 == 0) return _0x5a6a5b.getFullYear();else {
          if (_0x413186 == 1) return _0x5a6a5b.getMonth() + 1 < 10 ? "0" + (_0x5a6a5b.getMonth() + 1) : _0x5a6a5b.getMonth() + 1;else {
            if (_0x413186 == 2) return _0x5a6a5b.getDate() < 10 ? "0" + _0x5a6a5b.getDate() : _0x5a6a5b.getDate();else {
              if (_0x413186 == 3) return _0x5a6a5b.getHours();else {
                if (_0x413186 == 4) return _0x5a6a5b.getMinutes();else {
                  if (_0x413186 == 5) return _0x5a6a5b.getSeconds() + 1 < 10 ? "0" + _0x5a6a5b.getSeconds() : _0x5a6a5b.getSeconds();
                }
              }
            }
          }
        }
      }
    }
    ["safeGet"](_0x40a46d) {
      try {
        if (typeof JSON.parse(_0x40a46d) == "object") return true;
      } catch (_0x39ed20) {
        return false;
      }
    }
    ["SJS"](_0x3ad1e1, _0x505383) {
      if (_0x505383 == 0) {
        let _0x3c784f = "QWERTYUIOPASDFGHJKLZXCVBNM01234567890123456789",
          _0x5ebe3e = _0x3c784f.length,
          _0x33bafc = "";
        for (let _0x409d3d = 0; _0x409d3d < _0x3ad1e1; _0x409d3d++) {
          _0x33bafc += _0x3c784f.charAt(Math.floor(Math.random() * _0x5ebe3e));
        }
        return _0x33bafc;
      } else {
        if (_0x505383 == 1) {
          let _0x51ed6a = "qwertyuiopasdfghjklzxcvbnm0123456789",
            _0x15df38 = _0x51ed6a.length,
            _0x2d2afe = "";
          for (let _0x1f84cf = 0; _0x1f84cf < _0x3ad1e1; _0x1f84cf++) {
            _0x2d2afe += _0x51ed6a.charAt(Math.floor(Math.random() * _0x15df38));
          }
          return _0x2d2afe;
        } else {
          let _0x35a7d8 = "0123456789",
            _0xdc4e91 = _0x35a7d8.length,
            _0x3a5f8b = "";
          for (let _0x34262f = 0; _0x34262f < _0x3ad1e1; _0x34262f++) {
            _0x3a5f8b += _0x35a7d8.charAt(Math.floor(Math.random() * _0xdc4e91));
          }
          return _0x3a5f8b;
        }
      }
    }
    ["udid"](_0x513958) {
      function _0x1ab98c() {
        return ((1 + Math.random()) * 65536 | 0).toString(16).substring(1);
      }
      let _0x412d43 = _0x1ab98c() + _0x1ab98c() + "-" + _0x1ab98c() + "-" + _0x1ab98c() + "-" + _0x1ab98c() + "-" + _0x1ab98c() + _0x1ab98c() + _0x1ab98c();
      if (_0x513958 == 0) return _0x412d43.toUpperCase();else {
        return _0x412d43.toLowerCase();
      }
    }
    ["encodeUnicode"](_0x5a5678) {
      var _0x2b1f48 = [];
      for (var _0x4fa5a8 = 0; _0x4fa5a8 < _0x5a5678.length; _0x4fa5a8++) {
        _0x2b1f48[_0x4fa5a8] = ("00" + _0x5a5678.charCodeAt(_0x4fa5a8).toString(16)).slice(-4);
      }
      return "\\u" + _0x2b1f48.join("\\u");
    }
    ["decodeUnicode"](_0x37665f) {
      return _0x37665f = _0x37665f.replace(/\\u/g, "%u"), unescape(unescape(_0x37665f));
    }
    ["RT"](_0x10dcd4, _0xce6f83) {
      return Math.round(Math.random() * (_0xce6f83 - _0x10dcd4) + _0x10dcd4);
    }
    ["arrNull"](_0x54ba3b) {
      var _0xb97dd0 = _0x54ba3b.filter(_0x1eb0bb => {
        return _0x1eb0bb && _0x1eb0bb.trim();
      });
      return _0xb97dd0;
    }
    ["nowtime"]() {
      return new Date(new Date().getTime() + new Date().getTimezoneOffset() * 60 * 1000 + 8 * 60 * 60 * 1000);
    }
    ["timecs"]() {
      let _0x2e4120 = $.nowtime();
      return JSON.stringify(_0x2e4120).indexOf(" ") >= 0 && (_0x2e4120 = _0x2e4120.replace(" ", "T")), new Date(_0x2e4120).getTime() - 8 * 60 * 60 * 1000;
    }
    ["rtjson"](_0x2846bc, _0x57377f, _0x572702, _0x4aae7a) {
      return _0x4aae7a == 0 ? JSON.stringify(_0x2846bc.split(_0x57377f).reduce((_0x1dfc59, _0x532b30) => {
        let _0x1c1ee9 = _0x532b30.split(_0x572702);
        return _0x1dfc59[_0x1c1ee9[0].trim()] = _0x1c1ee9[1].trim(), _0x1dfc59;
      }, {})) : _0x2846bc.split(_0x57377f).reduce((_0x25456d, _0x3aba37) => {
        let _0x33014d = _0x3aba37.split(_0x572702);
        return _0x25456d[_0x33014d[0].trim()] = _0x33014d[1].trim(), _0x25456d;
      }, {});
    }
    ["MD5Encrypt"](_0x2eadbf, _0x43bb35) {
      if (_0x2eadbf == 0) return this.CryptoJS.MD5(_0x43bb35).toString().toLowerCase();else {
        if (_0x2eadbf == 1) return this.CryptoJS.MD5(_0x43bb35).toString().toUpperCase();else {
          if (_0x2eadbf == 2) {
            return this.CryptoJS.MD5(_0x43bb35).toString().substring(8, 24).toLowerCase();
          } else {
            if (_0x2eadbf == 3) return this.CryptoJS.MD5(_0x43bb35).toString().substring(8, 24).toUpperCase();
          }
        }
      }
    }
    ["SHA_Encrypt"](_0x434332, _0x2f0005, _0x2524a5) {
      if (_0x434332 == 0) {
        return this.CryptoJS[_0x2f0005](_0x2524a5).toString(this.CryptoJS.enc.Base64);
      } else return this.CryptoJS[_0x2f0005](_0x2524a5).toString();
    }
    ["HmacSHA_Encrypt"](_0x355a82, _0x2750bb, _0xa59ccb, _0x2012ee) {
      return _0x355a82 == 0 ? this.CryptoJS[_0x2750bb](_0xa59ccb, _0x2012ee).toString(this.CryptoJS.enc.Base64) : this.CryptoJS[_0x2750bb](_0xa59ccb, _0x2012ee).toString();
    }
    ["Base64"](_0x332cfe, _0x7b8b93) {
      if (_0x332cfe == 0) {
        return this.CryptoJS.enc.Base64.stringify(this.CryptoJS.enc.Utf8.parse(_0x7b8b93));
      } else return this.CryptoJS.enc.Utf8.stringify(this.CryptoJS.enc.Base64.parse(_0x7b8b93));
    }
    ["DecryptCrypto"](_0xcc4d82, _0x42aff5, _0x87819, _0x345589, _0x34b269, _0xa65909, _0x5276a9) {
      if (_0xcc4d82 == 0) {
        const _0x1f8166 = this.CryptoJS[_0x42aff5].encrypt(this.CryptoJS.enc.Utf8.parse(_0x34b269), this.CryptoJS.enc.Utf8.parse(_0xa65909), {
          "iv": this.CryptoJS.enc.Utf8.parse(_0x5276a9),
          "mode": this.CryptoJS.mode[_0x87819],
          "padding": this.CryptoJS.pad[_0x345589]
        });
        return _0x1f8166.toString();
      } else {
        const _0x3bf7f7 = this.CryptoJS[_0x42aff5].decrypt(_0x34b269, this.CryptoJS.enc.Utf8.parse(_0xa65909), {
          "iv": this.CryptoJS.enc.Utf8.parse(_0x5276a9),
          "mode": this.CryptoJS.mode[_0x87819],
          "padding": this.CryptoJS.pad[_0x345589]
        });
        return _0x3bf7f7.toString(this.CryptoJS.enc.Utf8);
      }
    }
    ["RSA"](_0x3d2861, _0x29f7c1) {
      const _0x520499 = require("node-rsa");
      let _0x5c58dc = new _0x520499("-----BEGIN PUBLIC KEY-----\n" + _0x29f7c1 + "\n-----END PUBLIC KEY-----");
      return _0x5c58dc.setOptions({
        "encryptionScheme": "pkcs1"
      }), _0x5c58dc.encrypt(_0x3d2861, "base64", "utf8");
    }
    ["SHA_RSA"](_0x125f8e, _0x3b144b) {
      let _0x345fec = this.Sha_Rsa.KEYUTIL.getKey("-----BEGIN PRIVATE KEY-----\n" + $.getNewline(_0x3b144b, 76) + "\n-----END PRIVATE KEY-----"),
        _0x365dbd = new this.Sha_Rsa.KJUR.crypto.Signature({
          "alg": "SHA256withRSA"
        });
      _0x365dbd.init(_0x345fec);
      _0x365dbd.updateString(_0x125f8e);
      let _0x19d71c = _0x365dbd.sign(),
        _0x33f3ad = this.Sha_Rsa.hextob64u(_0x19d71c);
      return _0x33f3ad;
    }
  }();
}
async function _0x1cf6a6(_0x13aa73, _0x1c2d6a) {
  const _0x4d14f3 = require("node-rsa");
  let _0x3d3261 = new _0x4d14f3("-----BEGIN PUBLIC KEY-----\n" + _0x1c2d6a + "\n-----END PUBLIC KEY-----");
  return _0x3d3261.setOptions({
    "encryptionScheme": "pkcs1"
  }), _0x3d3261.encrypt(_0x13aa73, "base64", "utf8");
}