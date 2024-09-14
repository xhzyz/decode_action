//Sat Sep 14 2024 14:26:27 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
NAME = "造好玩接码";
VALY = ["txck"];
CK = "";
LOGS = 0;
usid = 0;
Notify = 1;
XH = 0;
class 哇哈哈_0x643ee6 {
  constructor(_0x2a2ef1) {
    this.phone = _0x2a2ef1.split("#")[0];
    this.pwd = _0x2a2ef1.split("#")[1];
    this.code = _0x2a2ef1.split("#")[2];
    this._ = ++usid;
    this.f = "小主 [" + this._ + "] ";
    this.message = "";
    this.logs = true;
  }
  async ["login"]() {
    let _0x2926dd = await $.task("get", "http://api.my531.com/Login/?username=" + this.phone + "&password=" + this.pwd + "&type=json", {});
    if (_0x2926dd.code == 1) {
      this.token = _0x2926dd.data.token;
      console.log("【他信】登陆成功，当前余额" + _0x2926dd.data.money + "元");
    }
  }
  async ["getnumber"]() {
    console.log(" 当前所选项目编号[58481][造好玩],开始接码...");
    let _0xf9426d = await $.task("get", "http://api.my531.com/GetPhone/?token=" + this.token + "&id=58481&loop=1&isp=0&card=1&area=%E6%B1%9F%E8%8B%8F&type=json", {});
    if (_0xf9426d.code == 1) {
      console.log("【他信】号码获取成功：" + _0xf9426d.data);
      await this.sendmsg(_0xf9426d.data);
    }
  }
  async ["sendmsg"](_0x4bae9f) {
    console.log("模拟发送短信成功，准备收取短信......");
    await $.wait(3000);
    await this.getmsg(_0x4bae9f);
  }
  async ["getmsg"](_0x39e89f) {
    XH++;
    if (XH > 30) {
      console.log("尝试次数超过最大次数，停止尝试");
      return;
    }
    let _0x455777 = await $.task("get", "http://api.my531.com/GetMsg/?token=" + this.token + "&id=58481&phone=" + _0x39e89f + "&type=json", {});
    if (_0x455777.code == 1) {
      console.log("【他信】短信验证码获取成功：" + _0x455777.data);
      let _0x81c7d1 = _0x455777.data.split("为")[1].split("，")[0];
      await this.zhuce(_0x39e89f, _0x81c7d1);
      XH = 0;
    } else {
      if (_0x455777.message == "没有收到短信") {
        await $.wait(2000);
        await this.getmsg(_0x39e89f);
      }
    }
  }
  async ["zhuce"](_0x55787d, _0x5ab08a) {
    let _0x223bb3 = $.time(13) + $.SJS(6, 2),
      _0x2f7e22 = {
        cid: _0x223bb3
      },
      _0x94447e = "{\"phone\":\"" + _0x55787d + "\",\"smsCode\":\"" + _0x5ab08a + "\"}",
      _0x162e28 = await $.task("post", "https://v2.l7go.com/v1/api/user/app/auth", _0x2f7e22, _0x94447e);
    await this.invite(_0x162e28.accessToken);
  }
  async ["invite"](_0x136e50) {
    await $.wait(5000, 25000);
    let _0x39508c = $.time(13) + $.SJS(6, 2),
      _0x44930e = {
        authorization: _0x136e50,
        cid: _0x39508c
      },
      _0x9d60ca = "{\"code\":\"" + this.code + "\"}",
      _0x189388 = await $.task("post", "https://v2.l7go.com/v3/api/inviteCode/bind", _0x44930e, _0x9d60ca);
    if (_0x189388.status == 0) {
      console.log("用户" + this.code + "主动邀请成功，获得邀请奖励");
    } else {
      console.log("用户" + this.code + "主动邀请失败，原因：接码用户为老用户，无法邀请");
    }
  }
}
$ = 哇哈哈_0x5613a7();
!(async () => {
  console.log(NAME);
  await $.ExamineCookie();
  await $.Multithreading("login");
  let _0x168de6 = $.cookie_list.filter(_0x28d305 => _0x28d305.logs == true);
  if (_0x168de6.length == 0) {
    console.log("Cookie格式错误 或 账号被禁封");
    return;
  } else {
    await $.Multithreading("getnumber");
  }
  let _0x4ea890 = [];
  for (let _0x11a4d9 of $.cookie_list) {
    if (_0x11a4d9.message) {
      _0x4ea890.push(_0x11a4d9.message);
    }
  }
  if (_0x4ea890.length > 0) {
    await $.SendMsg(_0x4ea890.join("\n"));
  }
})().catch(_0x10298f => {
  console.log(_0x10298f);
}).finally(() => {});
function 哇哈哈_0x5613a7() {
  return new class {
    constructor() {
      this.cookie_list = [];
      this.message = "";
      this.CryptoJS = require("crypto-js");
      this.NodeRSA = require("node-rsa");
      this.request = require("request");
      this.Sha_Rsa = require("jsrsasign");
    }
    async ["Multithreading"](_0x36bcea, _0x106144, _0x125323) {
      let _0x3a1c29 = [];
      !_0x125323 && (_0x125323 = 1);
      while (_0x125323--) {
        for (let _0xe9da60 of $.cookie_list) {
          _0x3a1c29.push(_0xe9da60[_0x36bcea](_0x106144));
        }
      }
      await Promise.allSettled(_0x3a1c29);
    }
    ["ExamineCookie"]() {
      let _0x351043 = process.env[VALY] || CK,
        _0x457f91 = 0;
      if (_0x351043) {
        for (let _0x3bd533 of _0x351043.split("\n").filter(_0x43d689 => !!_0x43d689)) {
          $.cookie_list.push(new 哇哈哈_0x643ee6(_0x3bd533));
        }
        _0x457f91 = $.cookie_list.length;
      } else {
        console.log("\n【" + NAME + "】：未填写变量: " + VALY);
      }
      console.log("共找到" + _0x457f91 + "个账号");
      return $.cookie_list;
    }
    ["task"](_0x2c7b31, _0x49992a, _0x11b174, _0x4b6985, _0x5dbeef) {
      _0x2c7b31 == "delete" ? _0x2c7b31 = _0x2c7b31.toUpperCase() : _0x2c7b31 = _0x2c7b31;
      _0x2c7b31 == "post" && (delete _0x11b174["content-type"], delete _0x11b174["Content-type"], delete _0x11b174["content-Type"], $.safeGet(_0x4b6985) ? _0x11b174["Content-Type"] = "application/json;charset=UTF-8" : _0x11b174["Content-Type"] = "application/x-www-form-urlencoded", _0x4b6985 && (_0x11b174["Content-Length"] = $.lengthInUtf8Bytes(_0x4b6985)));
      _0x2c7b31 == "get" && (delete _0x11b174["content-type"], delete _0x11b174["Content-type"], delete _0x11b174["content-Type"], delete _0x11b174["Content-Length"]);
      _0x11b174.Host = _0x49992a.replace("//", "/").split("/")[1];
      return new Promise(async _0x17ae85 => {
        if (_0x2c7b31.indexOf("T") < 0) {
          var _0x11485b = {
            url: _0x49992a,
            headers: _0x11b174,
            body: _0x4b6985,
            proxy: "http://" + _0x5dbeef
          };
        } else {
          var _0x11485b = {
            url: _0x49992a,
            headers: _0x11b174,
            form: JSON.parse(_0x4b6985),
            proxy: "http://" + _0x5dbeef
          };
        }
        !_0x5dbeef && delete _0x11485b.proxy;
        this.request[_0x2c7b31.toLowerCase()](_0x11485b, (_0xbdcff0, _0x59caf4, _0x244b10) => {
          try {
            if (_0x244b10) {
              LOGS == 1 && (console.log("================ 请求 ================"), console.log(_0x11485b), console.log("================ 返回 ================"), $.safeGet(_0x244b10) ? console.log(JSON.parse(_0x244b10)) : console.log(_0x244b10));
            }
          } catch (_0x2909a9) {
            console.log(_0x2909a9, _0x49992a + "\n" + _0x11b174);
          } finally {
            let _0x40dbb2 = "";
            if (!_0xbdcff0) {
              if ($.safeGet(_0x244b10)) {
                _0x40dbb2 = JSON.parse(_0x244b10);
              } else {
                _0x244b10.indexOf("/") != -1 && _0x244b10.indexOf("+") != -1 ? _0x40dbb2 = _0x244b10 : _0x40dbb2 = _0x244b10;
              }
            } else {
              _0x40dbb2 = _0x49992a + "   API请求失败，请检查网络重试\n" + _0xbdcff0;
            }
            return _0x17ae85(_0x40dbb2);
          }
        });
      });
    }
    async ["httpRequest"](_0x53d411) {
      const _0x152b50 = {
        uPiZa: function (_0x118d82, _0x3e3c68) {
          const _0x24a8d5 = {};
          _0x24a8d5.ZuUDl = function (_0x2b477f, _0x44eb0d, _0x1883a2) {
            return _0x2b477f(_0x44eb0d, _0x1883a2);
          };
          _0x24a8d5.zNnoa = "$[^1";
          return _0x118d82(_0x3e3c68);
        }
      };
      delete _0x53d411.fn;
      var _0x255ca8 = require("request");
      return new Promise(_0x116781 => {
        _0x255ca8(_0x53d411, function (_0x4ac666, _0x2c2f92) {
          if (_0x4ac666) {
            throw new Error(_0x4ac666);
          }
          let _0xf45306 = _0x2c2f92.body;
          _0x152b50.uPiZa(_0x116781, _0xf45306);
        });
      });
    }
    ["udid"](_0x24fd42) {
      function _0x2e9a35() {
        return ((1 + Math.random()) * 65536 | 0).toString(16).substring(1);
      }
      let _0x3d089d = _0x2e9a35() + _0x2e9a35() + "-" + _0x2e9a35() + "-" + _0x2e9a35() + "-" + _0x2e9a35() + "-" + _0x2e9a35() + _0x2e9a35() + _0x2e9a35();
      return _0x24fd42 == 0 ? _0x3d089d.toUpperCase() : _0x3d089d.toLowerCase();
    }
    async ["SendMsg"](_0x2d2beb) {
      if (!_0x2d2beb) {
        return;
      }
      if (Notify == 1) {
        var _0x3a0d60 = require("./sendNotify");
        await _0x3a0d60.sendNotify(NAME, _0x2d2beb);
      }
    }
    ["lengthInUtf8Bytes"](_0x45708b) {
      let _0x54c8d0 = encodeURIComponent(_0x45708b).match(/%[89ABab]/g);
      return _0x45708b.length + (_0x54c8d0 ? _0x54c8d0.length : 0);
    }
    ["wait"](_0x2c56de) {
      return new Promise(_0xb7cb71 => setTimeout(_0xb7cb71, _0x2c56de));
    }
    ["time"](_0x35193a) {
      if (_0x35193a == 10) {
        return Math.round(+new Date() / 1000);
      } else {
        return +new Date();
      }
    }
    ["safeGet"](_0x4430de) {
      try {
        if (typeof JSON.parse(_0x4430de) == "object") {
          return true;
        }
      } catch (_0x3709c0) {
        return false;
      }
    }
    ["SJS"](_0x190035, _0x16aab2) {
      if (_0x16aab2 == 0) {
        let _0x4d8181 = "QWERTYUIOPASDFGHJKLZXCVBNM01234567890123456789",
          _0x1a9c78 = _0x4d8181.length,
          _0x17598b = "";
        for (let _0x5e9b6e = 0; _0x5e9b6e < _0x190035; _0x5e9b6e++) {
          _0x17598b += _0x4d8181.charAt(Math.floor(Math.random() * _0x1a9c78));
        }
        return _0x17598b;
      } else {
        if (_0x16aab2 == 1) {
          let _0x22a4b5 = "qwertyuiopasdfghjklzxcvbnm0123456789",
            _0x2a0e92 = _0x22a4b5.length,
            _0x1aa82c = "";
          for (let _0x440ffa = 0; _0x440ffa < _0x190035; _0x440ffa++) {
            _0x1aa82c += _0x22a4b5.charAt(Math.floor(Math.random() * _0x2a0e92));
          }
          return _0x1aa82c;
        } else {
          let _0x2fe4f6 = "0123456789",
            _0x2c7501 = _0x2fe4f6.length,
            _0x2e0618 = "";
          for (let _0x5bc4c7 = 0; _0x5bc4c7 < _0x190035; _0x5bc4c7++) {
            _0x2e0618 += _0x2fe4f6.charAt(Math.floor(Math.random() * _0x2c7501));
          }
          return _0x2e0618;
        }
      }
    }
  }();
}