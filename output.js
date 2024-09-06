//Fri Sep 06 2024 03:48:35 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
NAME = "望潮";
VALY = ["wcck"];
VER = "1.0.2";
CK = "";
usid = LOGS = 0;
Notify = 0;
let 蛋炒饭_0x131399 = require("fs"),
  蛋炒饭_0x25865c = require("uuid").v4;
DCFHOST = process.env.DCFHOST;
dcfkey = encodeURIComponent(process.env.dcfkey);
IP = "";
IPCITY = "";
class 蛋炒饭_0x4af6ef {
  constructor(_0x32259d) {
    this.phone = _0x32259d.split("#")[0];
    this.pwd = $.RSA(_0x32259d.split("#")[1], "MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQD6XO7e9YeAOs+cFqwa7ETJ+WXizPqQeXv68i5vqw9pFREsrqiBTRcg7wB0RIp3rJkDpaeVJLsZqYm5TW7FWx/iOiXFc+zCPvaKZric2dXCw27EvlH5rq+zwIPDAJHGAfnn1nmQH7wR3PCatEIb8pz5GFlTHMlluw4ZYmnOwg+thwIDAQAB");
    this.message = "";
    this.logs = !0;
  }
  async ["login"]() {
    var _0x689755 = $.SJS(8, 1) + "-" + $.SJS(4, 1) + "-" + $.SJS(4, 1) + "-" + $.SJS(4, 1) + "-" + $.SJS(12, 1),
      _0x1a4a17 = encodeURIComponent(this.pwd),
      _0x2caf70 = "post%%/web/oauth/credential_auth?client_id=10019&password=" + this.pwd + "&phone_number=" + this.phone + "%%" + _0x689755 + "%%",
      _0x2caf70 = $.HmacSHA_Encrypt(1, "HmacSHA256", _0x2caf70, "yhHFWXZeSJ6AhTnAEQwA"),
      _0x1a4a17 = "client_id=10019&password=" + _0x1a4a17 + "&phone_number=" + this.phone,
      _0x689755 = await $.task(0, "post", "https://passport.tmuyun.com/web/oauth/credential_auth", {
        "X-REQUEST-ID": _0x689755,
        "X-SIGNATURE": _0x2caf70
      }, _0x1a4a17);
    0 == _0x689755.code && (this.code = _0x689755.data.authorization_code.code, await this.logins(this.code));
  }
  async ["logins"](_0x240d93) {
    var _0xe59632 = $.time(13),
      _0x245ecb = $.SJS(8, 1) + "-" + $.SJS(4, 1) + "-" + $.SJS(4, 1) + "-" + $.SJS(4, 1) + "-" + $.SJS(12, 1),
      _0x1634d3 = $.SHA_Encrypt(1, "SHA256", "/api/zbtxz/login&&66d8506f6ab0c819a24649ea&&" + _0x245ecb + "&&" + _0xe59632 + "&&FR*r!isE5W&&64"),
      _0x245ecb = await $.task(0, "post", "https://vapp.taizhou.com.cn/api/zbtxz/login", {
        "X-SESSION-ID": "66d8506f6ab0c819a24649ea",
        "X-REQUEST-ID": _0x245ecb,
        "X-TIMESTAMP": _0xe59632,
        "X-SIGNATURE": _0x1634d3,
        "X-TENANT-ID": "64",
        "User-Agent": "6.0.2;Xiaomi;Android;13;Release"
      }, "check_token=&code=" + _0x240d93 + "&token=&type=-1&union_id=");
    0 == _0x245ecb.code ? (this.sessionid = _0x245ecb.data.session.id, this.accountid = _0x245ecb.data.account.id, this.name = _0x245ecb.data.account.nick_name, console.log("【" + this.name + "】登陆成功"), this.logs = !0) : this.logs = !1;
  }
  async ["getua"]() {
    var _0x209883 = await $.task(0, "get", "https://api.vmlogin.com/v1/ua/rand?token=ba88ca837ed3a508229a81041032cc15&os=3", {});
    if (200 == _0x209883.value) {
      return _0x209883.data.ua + ";xsb_wangchao;xsb_wangchao;6.0.2;native_app;6.10.0";
    }
  }
  async ["loginH5"]() {
    var _0x2bef5f,
      _0x53a2b2 = await this.getua(),
      _0x53a2b2 = await $.task(1, "get", "https://srv2.taizhou.com.cn/wcgames/WordFillGame/login/?accountId=" + this.accountid + "&sessionId=" + this.sessionid, {
        "User-Agent": _0x53a2b2
      });
    200 == JSON.parse(_0x53a2b2.body).code && (_0x2bef5f = _0x53a2b2.rawHeaders.length - 1, this.H5cookie = _0x53a2b2.rawHeaders[_0x2bef5f].split(";")[0]);
  }
  async ["H5info"]() {
    var _0x14215d,
      _0x38ea8f,
      _0x1c6b0b = {
        "User-Agent": await this.getua(),
        Cookie: this.H5cookie
      },
      _0x1c6b0b = await $.task(0, "get", "https://srv2.taizhou.com.cn/wcgames/WordFillGame/get_user_info/", _0x1c6b0b);
    200 == _0x1c6b0b.code && (_0x14215d = _0x1c6b0b.data.alipayId_bind, _0x38ea8f = _0x1c6b0b.data.level + 5, 0 == _0x1c6b0b.data.forbidden && 0 == _0x1c6b0b.data.isGetRed && _0x1c6b0b.data.answerCount < 5 && 0 == _0x1c6b0b.data.alipayId_bind ? (console.log("【" + this.name + "】该账号还未绑定支付宝，答题完成后请先绑定支付宝再进行提现！"), await this.getquestion(_0x14215d, _0x38ea8f)) : 0 == _0x1c6b0b.data.forbidden && 0 == _0x1c6b0b.data.isGetRed && _0x1c6b0b.data.answerCount < 5 && 1 == _0x1c6b0b.data.alipayId_bind ? await this.getquestion(_0x14215d, _0x38ea8f) : (1 == _0x1c6b0b.data.forbidden || 5 <= _0x1c6b0b.data.answerCount) && console.log("【" + this.name + "】出错啦，原因:今天答题已满或账号被封禁"), 0 == _0x1c6b0b.data.isGetRed) && 5 <= _0x1c6b0b.data.answerCount && 1 == _0x1c6b0b.data.alipayId_bind && (await this.choujiang());
  }
  async ["getquestion"](_0x27a0a9, _0x4123a0) {
    var _0x196579 = {
        "User-Agent": await this.getua(),
        Cookie: this.H5cookie
      },
      _0x196579 = await $.task(0, "get", "https://srv2.taizhou.com.cn/wcgames/WordFillGame/get_question/", _0x196579);
    200 == _0x196579.code && (console.log("【" + this.name + "】获取第" + _0x196579.data.order + "题,问题:[" + _0x196579.data.question + "],匹配的答案:[" + _0x196579.data.answer + "]"), await $.wait(15000, 55000), await this.answer(_0x27a0a9, _0x196579.data.order, _0x4123a0));
  }
  async ["answer"](_0xfff8f9, _0x9e4944, _0x54957d) {
    var _0x5924ff = {
        "User-Agent": await this.getua(),
        Cookie: this.H5cookie
      },
      _0x5d1a5d = "accountId=" + this.accountid,
      _0x5924ff = await $.task(0, "post", "https://srv2.taizhou.com.cn/wcgames/WordFillGame/submit_answer/", _0x5924ff, _0x5d1a5d);
    200 == _0x5924ff.code && (console.log("【" + this.name + "】第" + _0x9e4944 + "题:" + _0x5924ff.message), _0x9e4944 < _0x54957d ? (await $.wait(5000, 15000), await this.getquestion(_0xfff8f9, _0x54957d)) : _0x9e4944 == _0x54957d && 1 == _0xfff8f9 && (await this.choujiang()));
  }
  async ["choujiang"]() {
    var _0x1d13bf = {
        "User-Agent": await this.getua(),
        Cookie: this.H5cookie
      },
      _0x1d13bf = await $.task(0, "get", "https://srv2.taizhou.com.cn/wcgames/WordFillGame/generate_custom_redpacket/", _0x1d13bf);
    200 == _0x1d13bf.code && console.log("【" + this.name + "】抽奖成功，抽到" + _0x1d13bf.message);
  }
}
function 蛋炒饭_0x1ef8a5() {
  return new class {
    constructor() {
      this.cookie_list = [];
      this.message = "";
      this.CryptoJS = require("crypto-js");
      this.NodeRSA = require("node-rsa");
      this.request = require("request");
      this.Sha_Rsa = require("jsrsasign");
    }
    async ["Multithreading"](_0x184b89, _0x44289d, _0x32530f) {
      var _0x25be73 = [];
      for (_0x32530f = _0x32530f || 1; _0x32530f--;) {
        for (var _0x57a6ec of $.cookie_list) _0x25be73.push(_0x57a6ec[_0x184b89](_0x44289d));
      }
      await Promise.allSettled(_0x25be73);
    }
    ["ExamineCookie"]() {
      var _0x27983a = process.env[VALY] || CK;
      var _0x82351 = 0;
      if (_0x27983a) {
        for (var _0x57089a of _0x27983a.split("\n").filter(_0x411993 => !!_0x411993)) $.cookie_list.push(new 蛋炒饭_0x4af6ef(_0x57089a));
        _0x82351 = $.cookie_list.length;
      } else {
        console.log("\n【" + NAME + "】：未填写变量: " + VALY);
      }
      console.log("共找到" + _0x82351 + "个账号");
      return $.cookie_list;
    }
    ["task"](_0x225edc, _0x4ffee1, _0x2b0a47, _0x4fe118, _0x1189ee, _0x5371af) {
      return "post" == (_0x4ffee1 = "delete" == _0x4ffee1 ? _0x4ffee1.toUpperCase() : _0x4ffee1) && (delete _0x4fe118["content-type"], delete _0x4fe118["Content-type"], delete _0x4fe118["content-Type"], $.safeGet(_0x1189ee) ? _0x4fe118["Content-Type"] = "application/json;charset=UTF-8" : _0x4fe118["Content-Type"] = "application/x-www-form-urlencoded", _0x1189ee) && (_0x4fe118["Content-Length"] = $.lengthInUtf8Bytes(_0x1189ee)), "get" == _0x4ffee1 && (delete _0x4fe118["content-type"], delete _0x4fe118["Content-type"], delete _0x4fe118["content-Type"], delete _0x4fe118["Content-Length"]), _0x4fe118.Host = _0x2b0a47.replace("//", "/").split("/")[1], new Promise(async _0x56b5d3 => {
        var _0x31c62b;
        _0x31c62b = _0x4ffee1.indexOf("T") < 0 ? {
          url: _0x2b0a47,
          headers: _0x4fe118,
          body: _0x1189ee,
          proxy: "http://" + _0x5371af
        } : {
          url: _0x2b0a47,
          headers: _0x4fe118,
          form: JSON.parse(_0x1189ee),
          proxy: "http://" + _0x5371af
        };
        _0x5371af || delete _0x31c62b.proxy;
        this.request[_0x4ffee1.toLowerCase()](_0x31c62b, (_0x2a50eb, _0x257273, _0x5e21d3) => {
          try {
            _0x5e21d3 && 1 == LOGS && (console.log("================ 请求 ================"), console.log(_0x31c62b), console.log("================ 返回 ================"), $.safeGet(_0x5e21d3) ? console.log(JSON.parse(_0x5e21d3)) : console.log(_0x5e21d3));
          } catch (_0x444f09) {
            console.log(_0x444f09, _0x2b0a47 + "\n" + _0x4fe118);
          } finally {
            var _0x1d6129 = "";
            _0x1d6129 = _0x2a50eb ? _0x2b0a47 + "   API请求失败，请检查网络重试\n" + _0x2a50eb : $.safeGet(_0x5e21d3) ? JSON.parse(_0x5e21d3) : (-1 != _0x5e21d3.indexOf("/") && _0x5e21d3.indexOf("+"), _0x5e21d3);
            return _0x56b5d3(0 == _0x225edc ? _0x1d6129 : _0x257273);
          }
        });
      });
    }
    async ["readUUID"]() {
      var _0x303195 = "uuid.txt";
      await $.generateUUID(_0x303195);
      try {
        return 蛋炒饭_0x131399.readFileSync(_0x303195, "utf8").trim();
      } catch (_0x1565a4) {
        return null;
      }
    }
    ["generateUUID"](_0xf0e4be) {
      var _0x2a3bf1;
      蛋炒饭_0x131399.existsSync(_0xf0e4be) || (_0x2a3bf1 = 蛋炒饭_0x25865c(), 蛋炒饭_0x131399.writeFile(_0xf0e4be, _0x2a3bf1, "utf8", _0x3cfbde => {
        _0x3cfbde && console.error("写入文件出错: " + _0x3cfbde.message);
      }));
    }
    async ["getkami"]() {
      var _0x1c5f9b = await $.readUUID(),
        _0x1c5f9b = (await $.getCurrentIP(), await $.getIPCITY(), await $.task(0, "get", "http://" + DCFHOST + "/querys?DCFKEY=" + dcfkey + "&MAC=" + _0x1c5f9b + "&JSHOST=" + IP + "&JSCITY=" + IPCITY, {}));
      return _0x1c5f9b;
    }
    async ["getIPCITY"]() {
      var _0xec9fae = await $.task(0, "get", "http://ip-api.com/json/" + IP + "?lang=zh-CN", {}),
        _0xec9fae = _0xec9fae.regionName + _0xec9fae.city;
      IPCITY = encodeURIComponent(_0xec9fae);
    }
    async ["getCurrentIP"]() {
      var _0x4f1bcc = await $.task(0, "get", "https://httpbin.org/ip", {});
      IP = _0x4f1bcc.origin;
    }
    async ["SendMsg"](_0x452f96) {
      _0x452f96 && 1 == Notify && (await require("./sendNotify").sendNotify(NAME, NOTIFY + "\n\n" + _0x452f96));
    }
    ["lengthInUtf8Bytes"](_0x16f894) {
      var _0x119633 = encodeURIComponent(_0x16f894).match(/%[89ABab]/g);
      return _0x16f894.length + (_0x119633 ? _0x119633.length : 0);
    }
    ["randomArr"](_0x430b66) {
      return _0x430b66[parseInt(Math.random() * _0x430b66.length, 10)];
    }
    ["wait"](_0x1c40b6) {
      return new Promise(_0x4bd346 => setTimeout(_0x4bd346, _0x1c40b6));
    }
    ["time"](_0x88d103) {
      return 10 == _0x88d103 ? Math.round(+new Date() / 1000) : +new Date();
    }
    ["timenow"](_0x18106c) {
      var _0x3d2875,
        _0x376cdc = new Date();
      return null == _0x18106c ? (_0x3d2875 = new Date()).getFullYear() + "-" + ((_0x3d2875.getMonth() + 1 < 10 ? "0" + (_0x3d2875.getMonth() + 1) : _0x3d2875.getMonth() + 1) + "-") + (_0x3d2875.getDate() + " ") + (_0x3d2875.getHours() + ":") + (_0x3d2875.getMinutes() + ":") + (_0x3d2875.getSeconds() + 1 < 10 ? "0" + _0x3d2875.getSeconds() : _0x3d2875.getSeconds()) : 0 == _0x18106c ? _0x376cdc.getFullYear() : 1 == _0x18106c ? _0x376cdc.getMonth() + 1 < 10 ? "0" + (_0x376cdc.getMonth() + 1) : _0x376cdc.getMonth() + 1 : 2 == _0x18106c ? _0x376cdc.getDate() : 3 == _0x18106c ? _0x376cdc.getHours() : 4 == _0x18106c ? _0x376cdc.getMinutes() : 5 == _0x18106c ? _0x376cdc.getSeconds() + 1 < 10 ? "0" + _0x376cdc.getSeconds() : _0x376cdc.getSeconds() : void 0;
    }
    ["safeGet"](_0x3819dd) {
      try {
        if ("object" == typeof JSON.parse(_0x3819dd)) {
          return !0;
        }
      } catch (_0x2e885c) {
        return !1;
      }
    }
    ["SJS"](_0xa408d1, _0x3ff3cf) {
      if (0 == _0x3ff3cf) {
        var _0x199c3c = "QWERTYUIOPASDFGHJKLZXCVBNM01234567890123456789",
          _0x10eb2b = _0x199c3c.length;
        var _0x4e2537 = "";
        for (var _0x42c6fa = 0; _0x42c6fa < _0xa408d1; _0x42c6fa++) {
          _0x4e2537 += _0x199c3c.charAt(Math.floor(Math.random() * _0x10eb2b));
        }
        return _0x4e2537;
      }
      if (1 == _0x3ff3cf) {
        var _0x3fab11 = "qwertyuiopasdfghjklzxcvbnm0123456789",
          _0x41dab6 = _0x3fab11.length;
        let _0x20ece3 = "";
        for (let _0x8958e0 = 0; _0x8958e0 < _0xa408d1; _0x8958e0++) {
          _0x20ece3 += _0x3fab11.charAt(Math.floor(Math.random() * _0x41dab6));
        }
        return _0x20ece3;
      }
      {
        var _0x1089c9 = "0123456789",
          _0x124667 = _0x1089c9.length;
        var _0x13a167 = "";
        for (var _0xaba1c8 = 0; _0xaba1c8 < _0xa408d1; _0xaba1c8++) {
          _0x13a167 += _0x1089c9.charAt(Math.floor(Math.random() * _0x124667));
        }
        return _0x13a167;
      }
    }
    ["udid"](_0x28518e) {
      function _0x4b8439() {
        return (65536 * (1 + Math.random()) | 0).toString(16).substring(1);
      }
      var _0x3c3a92 = _0x4b8439() + _0x4b8439() + "-" + _0x4b8439() + "-" + _0x4b8439() + "-" + _0x4b8439() + "-" + _0x4b8439() + _0x4b8439() + _0x4b8439();
      return 0 == _0x28518e ? _0x3c3a92.toUpperCase() : _0x3c3a92.toLowerCase();
    }
    ["encodeUnicode"](_0x30104d) {
      for (var _0x591e7f = [], _0x585ae2 = 0; _0x585ae2 < _0x30104d.length; _0x585ae2++) {
        _0x591e7f[_0x585ae2] = ("00" + _0x30104d.charCodeAt(_0x585ae2).toString(16)).slice(-4);
      }
      return "\\u" + _0x591e7f.join("\\u");
    }
    ["base64ToHex"](_0x3b8e62) {
      var _0x4eed32 = atob(_0x3b8e62),
        _0x478be4 = new Uint8Array(_0x4eed32.length);
      for (let _0x58e9b0 = 0; _0x58e9b0 < _0x4eed32.length; _0x58e9b0++) {
        _0x478be4[_0x58e9b0] = _0x4eed32.charCodeAt(_0x58e9b0);
      }
      let _0x9c9ae2 = "";
      for (let _0x32f347 = 0; _0x32f347 < _0x478be4.length; _0x32f347++) {
        var _0x1ebba1 = _0x478be4[_0x32f347].toString(16).padStart(2, "0");
        _0x9c9ae2 += _0x1ebba1;
      }
      return _0x9c9ae2;
    }
    ["decodeUnicode"](_0x257063) {
      _0x257063 = _0x257063.replace(/\\u/g, "%u");
      return unescape(unescape(_0x257063));
    }
    RT(_0x1c9574, _0x41293b) {
      return Math.round(Math.random() * (_0x41293b - _0x1c9574) + _0x1c9574);
    }
    ["arrNull"](_0x5b3375) {
      return _0x5b3375.filter(_0x2c84c5 => _0x2c84c5 && _0x2c84c5.trim());
    }
    ["nowtime"]() {
      return new Date(new Date().getTime() + 60 * new Date().getTimezoneOffset() * 1000 + 28800000);
    }
    ["timecs"]() {
      let _0x2c210c = $.nowtime();
      0 <= JSON.stringify(_0x2c210c).indexOf(" ") && (_0x2c210c = _0x2c210c.replace(" ", "T"));
      return new Date(_0x2c210c).getTime() - 28800000;
    }
    ["rtjson"](_0x2cceec, _0x5a208e, _0x900a8a, _0x5cf2d6) {
      return 0 == _0x5cf2d6 ? JSON.stringify(_0x2cceec.split(_0x5a208e).reduce((_0x1d86ab, _0x1efe6b) => {
        _0x1efe6b = _0x1efe6b.split(_0x900a8a);
        _0x1d86ab[_0x1efe6b[0].trim()] = _0x1efe6b[1].trim();
        return _0x1d86ab;
      }, {})) : _0x2cceec.split(_0x5a208e).reduce((_0xf3c574, _0x2ad5ed) => {
        _0x2ad5ed = _0x2ad5ed.split(_0x900a8a);
        _0xf3c574[_0x2ad5ed[0].trim()] = _0x2ad5ed[1].trim();
        return _0xf3c574;
      }, {});
    }
    ["MD5Encrypt"](_0x38e059, _0x4344f9) {
      return 0 == _0x38e059 ? this.CryptoJS.MD5(_0x4344f9).toString().toLowerCase() : 1 == _0x38e059 ? this.CryptoJS.MD5(_0x4344f9).toString().toUpperCase() : 2 == _0x38e059 ? this.CryptoJS.MD5(_0x4344f9).toString().substring(8, 24).toLowerCase() : 3 == _0x38e059 ? this.CryptoJS.MD5(_0x4344f9).toString().substring(8, 24).toUpperCase() : void 0;
    }
    ["SHA_Encrypt"](_0xaecd59, _0x170f1a, _0x2a899d) {
      return 0 == _0xaecd59 ? this.CryptoJS[_0x170f1a](_0x2a899d).toString(this.CryptoJS.enc.Base64) : this.CryptoJS[_0x170f1a](_0x2a899d).toString();
    }
    ["HmacSHA_Encrypt"](_0x2735a4, _0x198066, _0x44d63a, _0x5bbf0f) {
      return 0 == _0x2735a4 ? this.CryptoJS[_0x198066](_0x44d63a, _0x5bbf0f).toString(this.CryptoJS.enc.Base64) : this.CryptoJS[_0x198066](_0x44d63a, _0x5bbf0f).toString();
    }
    ["Base64"](_0x49cae3, _0x54b571) {
      return 0 == _0x49cae3 ? this.CryptoJS.enc.Base64.stringify(this.CryptoJS.enc.Utf8.parse(_0x54b571)) : this.CryptoJS.enc.Utf8.stringify(this.CryptoJS.enc.Base64.parse(_0x54b571));
    }
    ["DecryptCrypto"](_0x58649d, _0x1b0656, _0x1094c6, _0x31a71b, _0x1f76d7, _0x36b8a4, _0x2d1e5d) {
      return 0 == _0x58649d ? this.CryptoJS[_0x1b0656].encrypt(this.CryptoJS.enc.Utf8.parse(_0x1f76d7), this.CryptoJS.enc.Utf8.parse(_0x36b8a4), {
        iv: this.CryptoJS.enc.Utf8.parse(_0x2d1e5d),
        mode: this.CryptoJS.mode[_0x1094c6],
        padding: this.CryptoJS.pad[_0x31a71b]
      }).toString() : this.CryptoJS[_0x1b0656].decrypt(_0x1f76d7, this.CryptoJS.enc.Utf8.parse(_0x36b8a4), {
        iv: this.CryptoJS.enc.Utf8.parse(_0x2d1e5d),
        mode: this.CryptoJS.mode[_0x1094c6],
        padding: this.CryptoJS.pad[_0x31a71b]
      }).toString(this.CryptoJS.enc.Utf8);
    }
    ["RSA"](_0xf9716d, _0x31ea0c) {
      return _0x31ea0c = new (require("node-rsa"))("-----BEGIN PUBLIC KEY-----\n" + _0x31ea0c + "\n-----END PUBLIC KEY-----"), _0x31ea0c.setOptions({
        encryptionScheme: "pkcs1"
      }), _0x31ea0c.encrypt(_0xf9716d, "base64", "utf8");
    }
    ["getSHA256withRSA"](_0x42707c) {
      var _0x2b46b6 = rs.KEYUTIL.getKey(privateKeyString),
        _0x1100c6 = new rs.KJUR.crypto.Signature({
          alg: "SHA256withRSA"
        }),
        _0x2b46b6 = (_0x1100c6.init(_0x2b46b6), _0x1100c6.updateString(_0x42707c), _0x1100c6.sign());
      return rs.hextob64u(_0x2b46b6);
    }
  }();
}
$ = 蛋炒饭_0x1ef8a5();
(async () => {
  var _0x5d39b1 = await $.task(0, "get", "http://" + DCFHOST + "/download?DCFKEY=" + dcfkey + "&JSMANE=wc&VER=" + VER, {});
  if (0 == _0x5d39b1.code) {
    console.log("【" + NAME + "】当前版本号：V" + VER + ",正在更新脚本，请稍等......");
    var _0x463dcc = require("fs").promises;
    var _0xb0998d = process.argv[1];
    await _0x463dcc.writeFile(_0xb0998d, _0x5d39b1.scriptData);
    console.log("脚本更新完成，请重新运行脚本");
  } else {
    if (1 == _0x5d39b1.code) {
      console.log("正在运行脚本：【" + NAME + "】V" + VER);
      console.log("📢 请认真阅读以下声明\n 【免责声明】   \n📌 脚本文件仅用于测试和学习研究   \n📌 脚本文件任何人不得用于商业以及非法用途   \n📌 禁止任何公众号、自媒体进行任何形式的转发   \n📌 脚本文件请在下载试用后24小时内自行删除   \n📌 因使用脚本造成软件平台的一切损失皆由使用者承担   \n📌 脚本文件如有不慎被破解或修改由破解或修改者承担   \n📌 如不接受此条款请立即删除脚本文件");
      var _0xb0998d = await $.getkami(),
        _0x5d39b1 = await $.readUUID();
      if (!_0xb0998d.dcfkey) {
        return "更新成功" == _0xb0998d.message ? void console.log("数据更新成功，请重新运行脚本") : (_0x546280 = require("path").basename(__filename), void console.log("无效卡密，停止运行文件[" + _0x546280 + "]"));
      }
      if ("" != _0xb0998d.Notify && (console.log(_0xb0998d.Notify), NOTIFY = _0xb0998d.Notify), TSdata = $.time(13), null == _0xb0998d.MAC) {
        return void console.log("请提交正确的MAC地址后再运行脚本！");
      }
      if (null != _0xb0998d.MAC && _0xb0998d.MAC != _0x5d39b1) {
        _0x546280 = require("path").basename(__filename);
        return void console.log("本次MAC地址与数据库记录不匹配，停止运行文件[" + _0x546280 + "]");
      }
      if (1 == _0xb0998d.Delete) {
        _0x5d39b1 = require("path").basename(__filename);
        console.log("关闭服务器跑路啦，帮你删除脚本文件[" + _0x5d39b1 + "]");
        return void 蛋炒饭_0x131399.unlink(_0x5d39b1, _0x3dbfbe => {});
      }
      if (!(TSdata <= _0xb0998d.Data)) {
        _0x546280 = require("path").basename(__filename);
        return void console.log("卡密已过期，停止运行文件[" + _0x546280 + "]");
      }
      if (console.log("尊贵的" + _0xb0998d.UserName + "小主,您的卡密有效期到：" + _0xb0998d.DataTime), await $.ExamineCookie(), $.cookie_list.length < _0xb0998d.xianjin) {
        if (await $.Multithreading("login"), 0 == $.cookie_list.filter(_0x451ae7 => 1 == _0x451ae7.logs).length) {
          return void console.log("Cookie格式错误 或 账号被禁封");
        }
        await $.Multithreading("loginH5");
        await $.Multithreading("H5info");
      } else {
        console.log("账号数量超过限制，请减少账号数量后重试！");
      }
    } else {
      console.log("脚本更新失败，不进行覆盖操作，请稍后重试！");
      console.log("正在运行脚本：【" + NAME + "】V" + VER);
      console.log("📢 请认真阅读以下声明\n 【免责声明】   \n📌 脚本文件仅用于测试和学习研究   \n📌 脚本文件任何人不得用于商业以及非法用途   \n📌 禁止任何公众号、自媒体进行任何形式的转发   \n📌 脚本文件请在下载试用后24小时内自行删除   \n📌 因使用脚本造成软件平台的一切损失皆由使用者承担   \n📌 脚本文件如有不慎被破解或修改由破解或修改者承担   \n📌 如不接受此条款请立即删除脚本文件");
      var _0x5d39b1 = await $.getkami(),
        _0x546280 = await $.readUUID();
      if (!_0x5d39b1.dcfkey) {
        return "更新成功" == _0x5d39b1.message ? void console.log("数据更新成功，请重新运行脚本") : (_0xb0998d = require("path").basename(__filename), void console.log("无效卡密，停止运行文件[" + _0xb0998d + "]"));
      }
      if ("" != _0x5d39b1.Notify && (console.log(_0x5d39b1.Notify), NOTIFY = _0x5d39b1.Notify), TSdata = $.time(13), null == _0x5d39b1.MAC) {
        return void console.log("请提交正确的MAC地址后再运行脚本！");
      }
      if (null != _0x5d39b1.MAC && _0x5d39b1.MAC != _0x546280) {
        _0xb0998d = require("path").basename(__filename);
        return void console.log("本次MAC地址与数据库记录不匹配，停止运行文件[" + _0xb0998d + "]");
      }
      if (1 == _0x5d39b1.Delete) {
        _0x546280 = require("path").basename(__filename);
        console.log("关闭服务器跑路啦，帮你删除脚本文件[" + _0x546280 + "]");
        return void 蛋炒饭_0x131399.unlink(_0x546280, _0x10f45d => {});
      }
      if (!(TSdata <= _0x5d39b1.Data)) {
        _0xb0998d = require("path").basename(__filename);
        return void console.log("卡密已过期，停止运行文件[" + _0xb0998d + "]");
      }
      if (console.log("尊贵的" + _0x5d39b1.UserName + "小主,您的卡密有效期到：" + _0x5d39b1.DataTime), await $.ExamineCookie(), $.cookie_list.length < _0x5d39b1.xianjin) {
        if (await $.Multithreading("login"), 0 == $.cookie_list.filter(_0x1089d2 => 1 == _0x1089d2.logs).length) {
          return void console.log("Cookie格式错误 或 账号被禁封");
        }
        await $.Multithreading("loginH5");
        await $.Multithreading("H5info");
      } else {
        console.log("账号数量超过限制，请减少账号数量后重试！");
      }
    }
  }
  var _0x27c3b9,
    _0x2e89f8 = [];
  for (_0x27c3b9 of $.cookie_list) _0x27c3b9.message && _0x2e89f8.push(_0x27c3b9.message);
  0 < _0x2e89f8.length && (await $.SendMsg(_0x2e89f8.join("\n")));
})().catch(_0x126405 => {
  console.log(_0x126405);
}).finally(() => {});