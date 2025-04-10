//Thu Apr 10 2025 15:14:30 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const $ = new Env("习酒"),
  Xi = process.env.ddm_xijiu,
  XiJiu = JSON.parse(Xi),
  OCR_SERVER = "https://ddddocr.xzxxn7.live";
let cropType = [{
    1: "高粱"
  }, {
    2: "小麦"
  }],
  loginCode = "",
  token = "",
  notice = "";
!(async () => {
  typeof $request != "undefined" ? await getCookie() : await main();
})().catch(_0x136147 => {
  $.log(_0x136147);
}).finally(() => {
  $.done({});
});
async function main() {
  for (const _0x5a70d0 of XiJiu) {
    id = _0x5a70d0.id;
    loginCode = _0x5a70d0.loginCode;
    console.log("用户：" + id + "开始任务");
    console.log("获取token");
    let _0x507564 = await loginGet("/anti-channeling/public/index.php/api/v2/Member/getJwt");
    if (_0x507564.code != 0) {
      console.log(_0x507564.msg);
      continue;
    }
    token = _0x507564.data.jwt;
    console.log(token);
    console.log("开始签到");
    let _0xc49ac8 = await commonPost("/member/Signin/sign", "from=miniprogram_index");
    console.log(_0xc49ac8.msg);
    console.log("————————————");
    console.log("开始每日签到");
    let _0x12d296 = await commonPost("/garden/sign/dailySign", JSON.stringify({}));
    _0x12d296.data.isTodayFirstSign ? console.log(_0x12d296.data.tips) : console.log("今日已签到");
    console.log("————————————");
    console.log("开始种植");
    let _0x39c8cc = await commonGet("/garden/Gardenmemberinfo/getMemberInfo");
    console.log("拥有：高粱*" + _0x39c8cc.data.sorghum + " 小麦*" + _0x39c8cc.data.wheat + " 酒曲*" + _0x39c8cc.data.wine_yeast + " 酒*" + _0x39c8cc.data.wine + " 水*" + _0x39c8cc.data.water + " 肥料*" + _0x39c8cc.data.manure);
    let _0x2750d1 = await commonGet("/garden/sorghum/index"),
      _0x1ccbc4 = true;
    for (let _0x528128 of _0x2750d1.data) {
      if (_0x528128.status == -1) {
        console.log("第" + _0x528128.serial_number + "块地：未解锁");
        if (_0x1ccbc4) {
          console.log("开始解锁土地");
          let _0x2159cf = await commonPost("/garden/sorghum/extend", JSON.stringify({
            serial_number: _0x528128.serial_number
          }));
          if (_0x2159cf.err == 0) {
            console.log(_0x2159cf.msg);
            console.log("开始种植");
            _0x39c8cc = await commonGet("/garden/Gardenmemberinfo/getMemberInfo");
            if (_0x39c8cc.data.wine_yeast > 0) {
              let _0xf51b6b = await commonPost("/garden/sorghum/seed", JSON.stringify({
                id: _0x528128.id,
                type: 1
              }));
              _0xf51b6b.err == 61010 && console.log("用户：" + id + "\n" + _0xf51b6b.msg);
              console.log(_0xf51b6b.msg);
            } else {
              let _0x4d4972 = await commonPost("/garden/sorghum/seed", JSON.stringify({
                id: _0x528128.id,
                type: 2
              }));
              _0x4d4972.err == 61010 && console.log("用户：" + id + "\n" + _0x4d4972.msg);
              console.log(_0x4d4972.msg);
            }
          } else {
            console.log(_0x2159cf.msg);
            _0x1ccbc4 = false;
          }
        }
      } else {
        console.log("第" + _0x528128.serial_number + "块地：已解锁");
        let _0x4dc67f = cropType.find(_0x48fcc7 => _0x528128.type in _0x48fcc7)[_0x528128.type];
        console.log("种植：" + _0x4dc67f + "*" + _0x528128.volumn + " 收获时间：" + _0x528128.crop_time);
        if (_0x528128.status == 0) {
          console.log(_0x4dc67f + "已收获，未种植");
          console.log("开始种植");
          _0x39c8cc = await commonGet("/garden/Gardenmemberinfo/getMemberInfo");
          if (_0x39c8cc.data.wine_yeast > 0) {
            let _0x559de4 = await commonPost("/garden/sorghum/seed", JSON.stringify({
              id: _0x528128.id,
              type: 1
            }));
            _0x559de4.err == 61010 && console.log("用户：" + id + "\n" + _0x559de4.msg);
            console.log(_0x559de4.msg);
          } else {
            let _0x1b2874 = await commonPost("/garden/sorghum/seed", JSON.stringify({
              id: _0x528128.id,
              type: 2
            }));
            _0x1b2874.err == 61010 && console.log("用户：" + id + "\n" + _0x1b2874.msg);
            console.log(_0x1b2874.msg);
          }
        } else {
          if (_0x528128.status == 2) {
            console.log(_0x4dc67f + "已成熟，开始收获");
            let _0x16519f = await commonPost("/garden/sorghum/harvest", JSON.stringify({
              id: _0x528128.id
            }));
            console.log(_0x16519f.msg);
            console.log("开始种植");
            _0x39c8cc = await commonGet("/garden/Gardenmemberinfo/getMemberInfo");
            if (_0x39c8cc.data.wine_yeast > 0) {
              let _0x41115f = await commonPost("/garden/sorghum/seed", JSON.stringify({
                id: _0x528128.id,
                type: 1
              }));
              _0x41115f.err == 61010 && console.log("用户：" + id + "\n" + _0x41115f.msg);
              console.log(_0x41115f.msg);
            } else {
              let _0x9f52a2 = await commonPost("/garden/sorghum/seed", JSON.stringify({
                id: _0x528128.id,
                type: 2
              }));
              _0x9f52a2.err == 61010 && console.log("用户：" + id + "\n" + _0x9f52a2.msg);
              console.log(_0x9f52a2.msg);
            }
          } else {
            let _0x3c5ec8 = 0;
            while (_0x3c5ec8 == 0) {
              let _0x80f9f5 = await commonPost("/garden/sorghum/watering", JSON.stringify({
                id: _0x528128.id
              }));
              console.log(_0x80f9f5.msg);
              _0x3c5ec8 = _0x80f9f5.err;
            }
            _0x3c5ec8 = 0;
            while (_0x3c5ec8 == 0) {
              let _0x435463 = await commonPost("/garden/sorghum/manuring", JSON.stringify({
                id: _0x528128.id
              }));
              console.log(_0x435463.msg);
              _0x3c5ec8 = _0x435463.err;
            }
          }
        }
        _0x2750d1 = await commonGet("/garden/sorghum/index");
        const _0x503be0 = _0x2750d1.data.findIndex(_0x3e2845 => _0x3e2845.id == _0x528128.id);
        if (_0x2750d1.data[_0x503be0].status == 2) {
          console.log(_0x4dc67f + "已成熟，开始收获");
          let _0xdfba7e = await commonPost("/garden/sorghum/harvest", JSON.stringify({
            id: _0x528128.id
          }));
          console.log(_0xdfba7e.msg);
          console.log("开始种植");
          _0x39c8cc = await commonGet("/garden/Gardenmemberinfo/getMemberInfo");
          if (_0x39c8cc.data.wine_yeast > 0) {
            let _0xb3d3ca = await commonPost("/garden/sorghum/seed", JSON.stringify({
              id: _0x528128.id,
              type: 1
            }));
            _0xb3d3ca.err == 61010 && console.log("用户：" + id + "\n" + _0xb3d3ca.msg);
            console.log(_0xb3d3ca.msg);
          } else {
            let _0x4c663f = await commonPost("/garden/sorghum/seed", JSON.stringify({
              id: _0x528128.id,
              type: 2
            }));
            _0x4c663f.err == 61010 && console.log("用户：" + id + "\n" + _0x4c663f.msg);
            console.log(_0x4c663f.msg);
          }
        }
        let _0x45011c = 0;
        while (_0x45011c == 0) {
          let _0x38d50e = await commonPost("/garden/sorghum/watering", JSON.stringify({
            id: _0x528128.id
          }));
          console.log(_0x38d50e.msg);
          _0x45011c = _0x38d50e.err;
        }
        _0x45011c = 0;
        while (_0x45011c == 0) {
          let _0x4b0cb5 = await commonPost("/garden/sorghum/manuring", JSON.stringify({
            id: _0x528128.id
          }));
          console.log(_0x4b0cb5.msg);
          _0x45011c = _0x4b0cb5.err;
        }
      }
    }
    console.log("————————————");
    console.log("开始做任务");
    let _0x523522 = await commonGet("/garden/tasks/index");
    if (_0x523522) {
      for (let _0x4e6d00 of _0x523522.data) {
        console.log("任务：" + _0x4e6d00.name + " id：" + _0x4e6d00.id);
        if (_0x4e6d00.is_complete == 1) {
          console.log("任务已完成");
        } else {
          if (_0x4e6d00.id == 1) {
            let _0x144a8f = await commonGet("/garden/Gardenquestiontask/index"),
              _0x339581 = [{
                itemid: "" + _0x144a8f.data[0].id,
                selected: "" + _0x144a8f.data[0].answer
              }],
              _0x3244a3 = await commonGet("/garden/Gardenquestiontask/answerResults?answer=" + encodeURI(JSON.stringify(_0x339581)));
            console.log(_0x3244a3.msg);
          }
          if (_0x4e6d00.id == 2) {
            for (let _0x3aa248 = 0; _0x3aa248 < _0x4e6d00.limit_num; _0x3aa248++) {
              let _0x1f3e42 = await commonGet("/garden/gardenmemberinfo/dailyShare");
              console.log(_0x1f3e42.msg);
            }
          }
          if (_0x4e6d00.id == 4) {
            let _0x82303c = await commonGet("/garden/realscene/reward");
            console.log(_0x82303c.msg);
          }
        }
      }
    }
    console.log("————————————");
    console.log("开始添加好友");
    let _0x187abc = await commonGet("/garden/friends/addFriendToken");
    _0x187abc = _0x187abc.data;
    _0x187abc.friend_id = id;
    console.log("助力码：" + JSON.stringify(_0x187abc));
    console.log("————————————");
    console.log("开始制曲");
    let _0xafe37 = 0;
    while (_0xafe37 == 0) {
      let _0x5b00a9 = await makePost("/garden/wheat/makeWineYeast", "volumn=100");
      console.log(_0x5b00a9.msg);
      _0xafe37 = _0x5b00a9.err;
    }
    console.log("————————————");
    console.log("开始制酒");
    let _0x296ae5 = await commonGet("/garden/gardenmemberwine/index");
    if (_0x296ae5.total == 0) {
      console.log("没有正在酿造的酒，开始制酒");
      let _0x47ebaf = await makePost("/garden/gardenmemberwine/makeWine", "volumn=200");
      console.log(_0x47ebaf.msg);
    }
    for (let _0x7697a4 of _0x296ae5.data) {
      console.log("酒*" + _0x7697a4.crrent_volumn + " 收获时间：" + _0x7697a4.crop_time);
      if (_0x7697a4.status == 4) {
        let _0x2fa7bb = await commonGet("/garden/gardenmemberwine/harvestWine?id=" + _0x7697a4.id);
        console.log(_0x2fa7bb.msg);
      }
    }
    console.log("————————————");
    console.log("兑换");
    _0x39c8cc = await commonGet("/garden/Gardenmemberinfo/getMemberInfo");
    console.log("拥有酒：" + _0x39c8cc.data.wine);
    let _0x3eab98 = await commonGet("/garden/Gardenjifenshop/exchange?wine=" + _0x39c8cc.data.wine);
    console.log(_0x3eab98.msg);
    console.log("————————————");
    console.log("查询积分");
    _0x39c8cc = await commonGet("/garden/Gardenmemberinfo/getMemberInfo");
    console.log("拥有积分：" + _0x39c8cc.data.integration + " 拥有酒：" + _0x39c8cc.data.wine + "\n");
    notice += "用户：" + id + " 积分：" + _0x39c8cc.data.integration + " 酒：" + _0x39c8cc.data.wine + "\n";
  }
}
async function getCookie() {
  const _0x3b8528 = $request.headers.login_code;
  if (!_0x3b8528) {
    return;
  }
  const _0x2c582b = $.toObj($response.body);
  if (!_0x2c582b.data || !_0x2c582b.data.phone_no) {
    return;
  }
  const _0x1e8536 = _0x2c582b.data.phone_no,
    _0x5c8ecb = {
      id: _0x1e8536,
      loginCode: _0x3b8528
    },
    _0x464607 = XiJiu.findIndex(_0x332f3e => _0x332f3e.id == _0x5c8ecb.id);
  if (_0x464607 !== -1) {
    if (XiJiu[_0x464607].loginCode == _0x5c8ecb.loginCode) {
      return;
    } else {
      XiJiu[_0x464607] = _0x5c8ecb;
      console.log(_0x5c8ecb.loginCode);
      $.msg($.name, "🎉用户" + _0x5c8ecb.id + "更新token成功!", "");
    }
  } else {
    XiJiu.push(_0x5c8ecb);
    console.log(_0x5c8ecb.loginCode);
    $.msg($.name, "🎉新增用户" + _0x5c8ecb.id + "成功!", "");
  }
  $.setjson(XiJiu, "XiJiu");
}
async function loginGet(_0x2975da) {
  return new Promise(_0xf4534e => {
    const _0x1a3a38 = {
      url: "https://xcx.exijiu.com" + _0x2975da,
      headers: {
        Connection: "keep-alive",
        login_code: loginCode,
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36 MicroMessenger/7.0.20.1781(0x6700143B) NetType/WIFI MiniProgramEnv/Windows WindowsWechat/WMPF WindowsWechat(0x63090a13) XWEB/9129",
        Accept: "*/*",
        Origin: "https://mallwm.exijiu.com",
        "Sec-Fetch-Site": "cross-site",
        "Sec-Fetch-Mode": "cors",
        "Sec-Fetch-Dest": "empty",
        Referer: "https://servicewechat.com/wx673f827a4c2c94fa/264/page-frame.html",
        "Accept-Encoding": "gzip, deflate, br",
        "Accept-Language": "zh-CN,zh;q=0.9"
      }
    };
    $.get(_0x1a3a38, async (_0x11be55, _0x326db4, _0x4a436a) => {
      try {
        _0x11be55 ? (console.log("" + JSON.stringify(_0x11be55)), console.log($.name + " API请求失败，请检查网路重试")) : (await $.wait(4000), _0xf4534e(JSON.parse(_0x4a436a)));
      } catch (_0x291a7c) {
        $.logErr(_0x291a7c, _0x326db4);
      } finally {
        _0xf4534e();
      }
    });
  });
}
async function commonPost(_0x58d0da, _0x2732db = "") {
  return new Promise(_0x5d2c9c => {
    const _0x409261 = {
      url: "https://apimallwm.exijiu.com" + _0x58d0da,
      headers: {
        Connection: "keep-alive",
        Authorization: token,
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36 MicroMessenger/7.0.20.1781(0x6700143B) NetType/WIFI MiniProgramEnv/Windows WindowsWechat/WMPF WindowsWechat(0x63090a13) XWEB/9129",
        "Content-Type": "application/json",
        Accept: "*/*",
        Origin: "https://mallwm.exijiu.com",
        "Sec-Fetch-Site": "cross-site",
        "Sec-Fetch-Mode": "cors",
        "Sec-Fetch-Dest": "empty",
        Referer: "https://servicewechat.com/wx673f827a4c2c94fa/264/page-frame.html",
        "Accept-Encoding": "gzip, deflate, br",
        "Accept-Language": "zh-CN,zh;q=0.9"
      },
      body: _0x2732db
    };
    $.post(_0x409261, async (_0x262bb4, _0x3c436b, _0x48e6ec) => {
      try {
        _0x262bb4 ? (console.log("" + JSON.stringify(_0x262bb4)), console.log($.name + " API请求失败，请检查网路重试")) : (await $.wait(4000), _0x5d2c9c(JSON.parse(_0x48e6ec)));
      } catch (_0x147fec) {
        $.logErr(_0x147fec, _0x3c436b);
      } finally {
        _0x5d2c9c();
      }
    });
  });
}
async function makePost(_0x232fe4, _0x4abe6e = "") {
  return new Promise(_0x53ba77 => {
    const _0x219f00 = {
      url: "https://apimallwm.exijiu.com" + _0x232fe4,
      headers: {
        Connection: "keep-alive",
        Authorization: token,
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36 MicroMessenger/7.0.20.1781(0x6700143B) NetType/WIFI MiniProgramEnv/Windows WindowsWechat/WMPF WindowsWechat(0x63090a13) XWEB/9129",
        "Content-Type": "application/x-www-form-urlencoded",
        Accept: "application/json, text/plain, */*",
        Origin: "https://mallwm.exijiu.com",
        "Sec-Fetch-Site": "cross-site",
        "Sec-Fetch-Mode": "cors",
        "Sec-Fetch-Dest": "empty",
        Referer: "https://servicewechat.com/wx673f827a4c2c94fa/264/page-frame.html",
        "Accept-Encoding": "gzip, deflate, br",
        "Accept-Language": "zh-CN,zh;q=0.9"
      },
      body: _0x4abe6e
    };
    $.post(_0x219f00, async (_0x190507, _0x34b495, _0xd9c72f) => {
      try {
        _0x190507 ? (console.log("" + JSON.stringify(_0x190507)), console.log($.name + " API请求失败，请检查网路重试")) : (await $.wait(4000), _0x53ba77(JSON.parse(_0xd9c72f)));
      } catch (_0x5f6d2c) {
        $.logErr(_0x5f6d2c, _0x34b495);
      } finally {
        _0x53ba77();
      }
    });
  });
}
async function commonGet(_0x60b37c) {
  return new Promise(_0x3e7250 => {
    const _0x5b10bd = {
      url: "https://apimallwm.exijiu.com" + _0x60b37c,
      headers: {
        Connection: "keep-alive",
        Authorization: token,
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36 MicroMessenger/7.0.20.1781(0x6700143B) NetType/WIFI MiniProgramEnv/Windows WindowsWechat/WMPF WindowsWechat(0x63090a13) XWEB/9129",
        "Content-Type": "application/json",
        Accept: "*/*",
        Origin: "https://mallwm.exijiu.com",
        "Sec-Fetch-Site": "cross-site",
        "Sec-Fetch-Mode": "cors",
        "Sec-Fetch-Dest": "empty",
        Referer: "https://servicewechat.com/wx673f827a4c2c94fa/264/page-frame.html",
        "Accept-Encoding": "gzip, deflate, br",
        "Accept-Language": "zh-CN,zh;q=0.9"
      }
    };
    $.get(_0x5b10bd, async (_0x361b2b, _0x21117a, _0x2bb67c) => {
      try {
        _0x361b2b ? (console.log("" + JSON.stringify(_0x361b2b)), console.log($.name + " API请求失败，请检查网路重试")) : (await $.wait(4000), _0x3e7250(JSON.parse(_0x2bb67c)));
      } catch (_0x82e6bc) {
        $.logErr(_0x82e6bc, _0x21117a);
      } finally {
        _0x3e7250();
      }
    });
  });
}
async function slidePost(_0x5dd390) {
  return new Promise(_0x43a07d => {
    const _0xc76409 = {
      url: OCR_SERVER + "/capcode",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(_0x5dd390)
    };
    $.post(_0xc76409, (_0x51570c, _0x180297, _0x28ce74) => {
      try {
        _0x51570c ? (console.log("" + JSON.stringify(_0x51570c)), console.log($.name + " API请求失败，请检查网路重试")) : _0x43a07d(JSON.parse(_0x28ce74));
      } catch (_0x50e7ea) {
        $.logErr(_0x50e7ea, _0x180297);
      } finally {
        _0x43a07d();
      }
    });
  });
}
function Env(_0x369cf1, _0x7b42c5) {
  class _0x25dfdf {
    constructor(_0x5c3624) {
      this.env = _0x5c3624;
    }
    send(_0x32d66b, _0x5cebab = "GET") {
      _0x32d66b = "string" == typeof _0x32d66b ? {
        url: _0x32d66b
      } : _0x32d66b;
      let _0x41537e = this.get;
      "POST" === _0x5cebab && (_0x41537e = this.post);
      return new Promise((_0x406ca8, _0x1afe0c) => {
        _0x41537e.call(this, _0x32d66b, (_0x2d87c6, _0x4bee94, _0x155553) => {
          _0x2d87c6 ? _0x1afe0c(_0x2d87c6) : _0x406ca8(_0x4bee94);
        });
      });
    }
    get(_0x58f8a9) {
      return this.send.call(this.env, _0x58f8a9);
    }
    post(_0x3ace37) {
      return this.send.call(this.env, _0x3ace37, "POST");
    }
  }
  return new class {
    constructor(_0x229643, _0x59ce9c) {
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
      this.name = _0x229643;
      this.http = new _0x25dfdf(this);
      this.data = null;
      this.dataFile = "box.dat";
      this.logs = [];
      this.isMute = !1;
      this.isNeedRewrite = !1;
      this.logSeparator = "\n";
      this.encoding = "utf-8";
      this.startTime = new Date().getTime();
      Object.assign(this, _0x59ce9c);
      this.log("", "🔔" + this.name + ", 开始!");
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
    toObj(_0x20a08e, _0x1cb1bd = null) {
      try {
        return JSON.parse(_0x20a08e);
      } catch {
        return _0x1cb1bd;
      }
    }
    toStr(_0x40b0f8, _0xb2657c = null, ..._0x1a8270) {
      try {
        return JSON.stringify(_0x40b0f8, ..._0x1a8270);
      } catch {
        return _0xb2657c;
      }
    }
    getjson(_0x2dd603, _0x5735c3) {
      let _0x4a5f1c = _0x5735c3;
      if (this.getdata(_0x2dd603)) {
        try {
          _0x4a5f1c = JSON.parse(this.getdata(_0x2dd603));
        } catch {}
      }
      return _0x4a5f1c;
    }
    setjson(_0x2e1842, _0x2603e9) {
      try {
        return this.setdata(JSON.stringify(_0x2e1842), _0x2603e9);
      } catch {
        return !1;
      }
    }
    getScript(_0x3da048) {
      return new Promise(_0x388345 => {
        this.get({
          url: _0x3da048
        }, (_0x5bdb9c, _0x2fa49c, _0x51b636) => _0x388345(_0x51b636));
      });
    }
    runScript(_0x34e344, _0x3ec26b) {
      return new Promise(_0x3a130a => {
        let _0x4feafd = this.getdata("@chavy_boxjs_userCfgs.httpapi");
        _0x4feafd = _0x4feafd ? _0x4feafd.replace(/\n/g, "").trim() : _0x4feafd;
        let _0x19d2f7 = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
        _0x19d2f7 = _0x19d2f7 ? 1 * _0x19d2f7 : 20;
        _0x19d2f7 = _0x3ec26b && _0x3ec26b.timeout ? _0x3ec26b.timeout : _0x19d2f7;
        const [_0x1bd467, _0x1b4b22] = _0x4feafd.split("@"),
          _0x234417 = {
            url: "http://" + _0x1b4b22 + "/v1/scripting/evaluate",
            body: {
              script_text: _0x34e344,
              mock_type: "cron",
              timeout: _0x19d2f7
            },
            headers: {
              "X-Key": _0x1bd467,
              Accept: "*/*"
            },
            timeout: _0x19d2f7
          };
        this.post(_0x234417, (_0x5ad5ea, _0x31f887, _0x4490ed) => _0x3a130a(_0x4490ed));
      }).catch(_0x452ec3 => this.logErr(_0x452ec3));
    }
    loaddata() {
      if (!this.isNode()) {
        return {};
      }
      {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const _0x4ed58a = this.path.resolve(this.dataFile),
          _0x58e1a4 = this.path.resolve(process.cwd(), this.dataFile),
          _0x4af97f = this.fs.existsSync(_0x4ed58a),
          _0x30fa90 = !_0x4af97f && this.fs.existsSync(_0x58e1a4);
        if (!_0x4af97f && !_0x30fa90) {
          return {};
        }
        {
          const _0x283458 = _0x4af97f ? _0x4ed58a : _0x58e1a4;
          try {
            return JSON.parse(this.fs.readFileSync(_0x283458));
          } catch (_0x532dda) {
            return {};
          }
        }
      }
    }
    writedata() {
      if (this.isNode()) {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const _0x5242fe = this.path.resolve(this.dataFile),
          _0x495a77 = this.path.resolve(process.cwd(), this.dataFile),
          _0x3bd4ea = this.fs.existsSync(_0x5242fe),
          _0x4153d3 = !_0x3bd4ea && this.fs.existsSync(_0x495a77),
          _0x2de028 = JSON.stringify(this.data);
        _0x3bd4ea ? this.fs.writeFileSync(_0x5242fe, _0x2de028) : _0x4153d3 ? this.fs.writeFileSync(_0x495a77, _0x2de028) : this.fs.writeFileSync(_0x5242fe, _0x2de028);
      }
    }
    lodash_get(_0x8a0907, _0x58bc28, _0x48ac78) {
      const _0x1283b9 = _0x58bc28.replace(/\[(\d+)\]/g, ".$1").split(".");
      let _0x936148 = _0x8a0907;
      for (const _0x196e41 of _0x1283b9) if (_0x936148 = Object(_0x936148)[_0x196e41], void 0 === _0x936148) {
        return _0x48ac78;
      }
      return _0x936148;
    }
    lodash_set(_0x56a75a, _0x4b9d68, _0x39f432) {
      Object(_0x56a75a) !== _0x56a75a || (Array.isArray(_0x4b9d68) || (_0x4b9d68 = _0x4b9d68.toString().match(/[^.[\]]+/g) || []), _0x4b9d68.slice(0, -1).reduce((_0x1cdda1, _0x12fa8a, _0x5f28eb) => Object(_0x1cdda1[_0x12fa8a]) === _0x1cdda1[_0x12fa8a] ? _0x1cdda1[_0x12fa8a] : _0x1cdda1[_0x12fa8a] = Math.abs(_0x4b9d68[_0x5f28eb + 1]) >> 0 == +_0x4b9d68[_0x5f28eb + 1] ? [] : {}, _0x56a75a)[_0x4b9d68[_0x4b9d68.length - 1]] = _0x39f432);
      return _0x56a75a;
    }
    getdata(_0x21f2a5) {
      let _0x29db35 = this.getval(_0x21f2a5);
      if (/^@/.test(_0x21f2a5)) {
        const [, _0x5ef97d, _0x31499a] = /^@(.*?)\.(.*?)$/.exec(_0x21f2a5),
          _0x27d83a = _0x5ef97d ? this.getval(_0x5ef97d) : "";
        if (_0x27d83a) {
          try {
            const _0x352bc9 = JSON.parse(_0x27d83a);
            _0x29db35 = _0x352bc9 ? this.lodash_get(_0x352bc9, _0x31499a, "") : _0x29db35;
          } catch (_0x4b490d) {
            _0x29db35 = "";
          }
        }
      }
      return _0x29db35;
    }
    setdata(_0x47a24b, _0x23cd63) {
      let _0x5a2c2f = !1;
      if (/^@/.test(_0x23cd63)) {
        const [, _0x5f524c, _0x4a991c] = /^@(.*?)\.(.*?)$/.exec(_0x23cd63),
          _0x42072c = this.getval(_0x5f524c),
          _0x196a08 = _0x5f524c ? "null" === _0x42072c ? null : _0x42072c || "{}" : "{}";
        try {
          const _0x177c1b = JSON.parse(_0x196a08);
          this.lodash_set(_0x177c1b, _0x4a991c, _0x47a24b);
          _0x5a2c2f = this.setval(JSON.stringify(_0x177c1b), _0x5f524c);
        } catch (_0x492cf8) {
          const _0x4dafb9 = {};
          this.lodash_set(_0x4dafb9, _0x4a991c, _0x47a24b);
          _0x5a2c2f = this.setval(JSON.stringify(_0x4dafb9), _0x5f524c);
        }
      } else {
        _0x5a2c2f = this.setval(_0x47a24b, _0x23cd63);
      }
      return _0x5a2c2f;
    }
    getval(_0x191306) {
      switch (this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
          return $persistentStore.read(_0x191306);
        case "Quantumult X":
          return $prefs.valueForKey(_0x191306);
        case "Node.js":
          this.data = this.loaddata();
          return this.data[_0x191306];
        default:
          return this.data && this.data[_0x191306] || null;
      }
    }
    setval(_0x2e3a43, _0x8e9135) {
      switch (this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
          return $persistentStore.write(_0x2e3a43, _0x8e9135);
        case "Quantumult X":
          return $prefs.setValueForKey(_0x2e3a43, _0x8e9135);
        case "Node.js":
          this.data = this.loaddata();
          this.data[_0x8e9135] = _0x2e3a43;
          this.writedata();
          return !0;
        default:
          return this.data && this.data[_0x8e9135] || null;
      }
    }
    initGotEnv(_0x47a285) {
      this.got = this.got ? this.got : require("got");
      this.cktough = this.cktough ? this.cktough : require("tough-cookie");
      this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar();
      _0x47a285 && (_0x47a285.headers = _0x47a285.headers ? _0x47a285.headers : {}, _0x47a285 && (_0x47a285.headers = _0x47a285.headers ? _0x47a285.headers : {}, void 0 === _0x47a285.headers.cookie && void 0 === _0x47a285.headers.Cookie && void 0 === _0x47a285.cookieJar && (_0x47a285.cookieJar = this.ckjar)));
    }
    get(_0x4589ba, _0x1794b6 = () => {}) {
      switch (_0x4589ba.headers && (delete _0x4589ba.headers["Content-Type"], delete _0x4589ba.headers["Content-Length"], delete _0x4589ba.headers["content-type"], delete _0x4589ba.headers["content-length"]), _0x4589ba.params && (_0x4589ba.url += "?" + this.queryStr(_0x4589ba.params)), void 0 === _0x4589ba.followRedirect || _0x4589ba.followRedirect || ((this.isSurge() || this.isLoon()) && (_0x4589ba["auto-redirect"] = !1), this.isQuanX() && (_0x4589ba.opts ? _0x4589ba.opts.redirection = !1 : _0x4589ba.opts = {
        redirection: !1
      })), this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
        default:
          this.isSurge() && this.isNeedRewrite && (_0x4589ba.headers = _0x4589ba.headers || {}, Object.assign(_0x4589ba.headers, {
            "X-Surge-Skip-Scripting": !1
          }));
          $httpClient.get(_0x4589ba, (_0x57d3c1, _0x196776, _0x139b20) => {
            !_0x57d3c1 && _0x196776 && (_0x196776.body = _0x139b20, _0x196776.statusCode = _0x196776.status ? _0x196776.status : _0x196776.statusCode, _0x196776.status = _0x196776.statusCode);
            _0x1794b6(_0x57d3c1, _0x196776, _0x139b20);
          });
          break;
        case "Quantumult X":
          this.isNeedRewrite && (_0x4589ba.opts = _0x4589ba.opts || {}, Object.assign(_0x4589ba.opts, {
            hints: !1
          }));
          $task.fetch(_0x4589ba).then(_0x3420b9 => {
            const {
              statusCode: _0x3446d0,
              statusCode: _0xe229c5,
              headers: _0x5a0918,
              body: _0x50aa6d,
              bodyBytes: _0xc55b29
            } = _0x3420b9;
            _0x1794b6(null, {
              status: _0x3446d0,
              statusCode: _0xe229c5,
              headers: _0x5a0918,
              body: _0x50aa6d,
              bodyBytes: _0xc55b29
            }, _0x50aa6d, _0xc55b29);
          }, _0x470db8 => _0x1794b6(_0x470db8 && _0x470db8.error || "UndefinedError"));
          break;
        case "Node.js":
          let _0xd29535 = require("iconv-lite");
          this.initGotEnv(_0x4589ba);
          this.got(_0x4589ba).on("redirect", (_0x4f8578, _0x27e8d1) => {
            try {
              if (_0x4f8578.headers["set-cookie"]) {
                const _0x235d92 = _0x4f8578.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();
                _0x235d92 && this.ckjar.setCookieSync(_0x235d92, null);
                _0x27e8d1.cookieJar = this.ckjar;
              }
            } catch (_0x169be2) {
              this.logErr(_0x169be2);
            }
          }).then(_0x4b6b4a => {
            const {
                statusCode: _0x58fa0b,
                statusCode: _0x43dc1e,
                headers: _0x497501,
                rawBody: _0x649bf
              } = _0x4b6b4a,
              _0x13cc0a = _0xd29535.decode(_0x649bf, this.encoding);
            _0x1794b6(null, {
              status: _0x58fa0b,
              statusCode: _0x43dc1e,
              headers: _0x497501,
              rawBody: _0x649bf,
              body: _0x13cc0a
            }, _0x13cc0a);
          }, _0xfd881a => {
            const {
              message: _0xe9fd54,
              response: _0x57cda2
            } = _0xfd881a;
            _0x1794b6(_0xe9fd54, _0x57cda2, _0x57cda2 && _0xd29535.decode(_0x57cda2.rawBody, this.encoding));
          });
          break;
      }
    }
    post(_0x55cc35, _0x23095f = () => {}) {
      const _0x543af5 = _0x55cc35.method ? _0x55cc35.method.toLocaleLowerCase() : "post";
      switch (_0x55cc35.body && _0x55cc35.headers && !_0x55cc35.headers["Content-Type"] && !_0x55cc35.headers["content-type"] && (_0x55cc35.headers["content-type"] = "application/x-www-form-urlencoded"), _0x55cc35.headers && (delete _0x55cc35.headers["Content-Length"], delete _0x55cc35.headers["content-length"]), void 0 === _0x55cc35.followRedirect || _0x55cc35.followRedirect || ((this.isSurge() || this.isLoon()) && (_0x55cc35["auto-redirect"] = !1), this.isQuanX() && (_0x55cc35.opts ? _0x55cc35.opts.redirection = !1 : _0x55cc35.opts = {
        redirection: !1
      })), this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
        default:
          this.isSurge() && this.isNeedRewrite && (_0x55cc35.headers = _0x55cc35.headers || {}, Object.assign(_0x55cc35.headers, {
            "X-Surge-Skip-Scripting": !1
          }));
          $httpClient[_0x543af5](_0x55cc35, (_0x1f7e80, _0x498a12, _0x457079) => {
            !_0x1f7e80 && _0x498a12 && (_0x498a12.body = _0x457079, _0x498a12.statusCode = _0x498a12.status ? _0x498a12.status : _0x498a12.statusCode, _0x498a12.status = _0x498a12.statusCode);
            _0x23095f(_0x1f7e80, _0x498a12, _0x457079);
          });
          break;
        case "Quantumult X":
          _0x55cc35.method = _0x543af5;
          this.isNeedRewrite && (_0x55cc35.opts = _0x55cc35.opts || {}, Object.assign(_0x55cc35.opts, {
            hints: !1
          }));
          $task.fetch(_0x55cc35).then(_0x22a8e8 => {
            const {
              statusCode: _0xcadafe,
              statusCode: _0x5a23bb,
              headers: _0x35bfd7,
              body: _0x486ce0,
              bodyBytes: _0x44ee65
            } = _0x22a8e8;
            _0x23095f(null, {
              status: _0xcadafe,
              statusCode: _0x5a23bb,
              headers: _0x35bfd7,
              body: _0x486ce0,
              bodyBytes: _0x44ee65
            }, _0x486ce0, _0x44ee65);
          }, _0x130205 => _0x23095f(_0x130205 && _0x130205.error || "UndefinedError"));
          break;
        case "Node.js":
          let _0x2598c3 = require("iconv-lite");
          this.initGotEnv(_0x55cc35);
          const {
            url: _0x56b0d1,
            ..._0x3cce9e
          } = _0x55cc35;
          this.got[_0x543af5](_0x56b0d1, _0x3cce9e).then(_0x84d06b => {
            const {
                statusCode: _0x4768c1,
                statusCode: _0x4c90d4,
                headers: _0x2b894b,
                rawBody: _0x55aeab
              } = _0x84d06b,
              _0x25c77 = _0x2598c3.decode(_0x55aeab, this.encoding);
            _0x23095f(null, {
              status: _0x4768c1,
              statusCode: _0x4c90d4,
              headers: _0x2b894b,
              rawBody: _0x55aeab,
              body: _0x25c77
            }, _0x25c77);
          }, _0x284ff9 => {
            const {
              message: _0x2b90ff,
              response: _0xc2cce5
            } = _0x284ff9;
            _0x23095f(_0x2b90ff, _0xc2cce5, _0xc2cce5 && _0x2598c3.decode(_0xc2cce5.rawBody, this.encoding));
          });
          break;
      }
    }
    time(_0x1cf896, _0x54757f = null) {
      const _0x46f830 = _0x54757f ? new Date(_0x54757f) : new Date();
      let _0x33d69d = {
        "M+": _0x46f830.getMonth() + 1,
        "d+": _0x46f830.getDate(),
        "H+": _0x46f830.getHours(),
        "m+": _0x46f830.getMinutes(),
        "s+": _0x46f830.getSeconds(),
        "q+": Math.floor((_0x46f830.getMonth() + 3) / 3),
        S: _0x46f830.getMilliseconds()
      };
      /(y+)/.test(_0x1cf896) && (_0x1cf896 = _0x1cf896.replace(RegExp.$1, (_0x46f830.getFullYear() + "").substr(4 - RegExp.$1.length)));
      for (let _0x764ed7 in _0x33d69d) new RegExp("(" + _0x764ed7 + ")").test(_0x1cf896) && (_0x1cf896 = _0x1cf896.replace(RegExp.$1, 1 == RegExp.$1.length ? _0x33d69d[_0x764ed7] : ("00" + _0x33d69d[_0x764ed7]).substr(("" + _0x33d69d[_0x764ed7]).length)));
      return _0x1cf896;
    }
    queryStr(_0x13c66f) {
      let _0x307ae1 = "";
      for (const _0x3c4352 in _0x13c66f) {
        let _0x361451 = _0x13c66f[_0x3c4352];
        null != _0x361451 && "" !== _0x361451 && ("object" == typeof _0x361451 && (_0x361451 = JSON.stringify(_0x361451)), _0x307ae1 += _0x3c4352 + "=" + _0x361451 + "&");
      }
      _0x307ae1 = _0x307ae1.substring(0, _0x307ae1.length - 1);
      return _0x307ae1;
    }
    msg(_0x14dbc2 = _0x369cf1, _0x5d37fb = "", _0x3d6062 = "", _0x2d9ee1 = {}) {
      const _0x22070e = _0x5b26e9 => {
        const {
          $open: _0x33a8c1,
          $copy: _0x2f7d5f,
          $media: _0x5a1ccd,
          $mediaMime: _0x6149d5
        } = _0x5b26e9;
        switch (typeof _0x5b26e9) {
          case void 0:
            return _0x5b26e9;
          case "string":
            switch (this.getEnv()) {
              case "Surge":
              case "Stash":
              default:
                return {
                  url: _0x5b26e9
                };
              case "Loon":
              case "Shadowrocket":
                return _0x5b26e9;
              case "Quantumult X":
                return {
                  "open-url": _0x5b26e9
                };
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
                  const _0x51710d = {};
                  let _0x244384 = _0x5b26e9.openUrl || _0x5b26e9.url || _0x5b26e9["open-url"] || _0x33a8c1;
                  _0x244384 && Object.assign(_0x51710d, {
                    action: "open-url",
                    url: _0x244384
                  });
                  let _0x4ad88f = _0x5b26e9["update-pasteboard"] || _0x5b26e9.updatePasteboard || _0x2f7d5f;
                  if (_0x4ad88f && Object.assign(_0x51710d, {
                    action: "clipboard",
                    text: _0x4ad88f
                  }), _0x5a1ccd) {
                    let _0x37f5c5, _0x48fdcd, _0x306830;
                    if (_0x5a1ccd.startsWith("http")) {
                      _0x37f5c5 = _0x5a1ccd;
                    } else {
                      if (_0x5a1ccd.startsWith("data:")) {
                        const [_0x1dc02d] = _0x5a1ccd.split(";"),
                          [, _0x1e8107] = _0x5a1ccd.split(",");
                        _0x48fdcd = _0x1e8107;
                        _0x306830 = _0x1dc02d.replace("data:", "");
                      } else {
                        _0x48fdcd = _0x5a1ccd;
                        _0x306830 = (_0x583cac => {
                          const _0x522006 = {
                            JVBERi0: "application/pdf",
                            R0lGODdh: "image/gif",
                            R0lGODlh: "image/gif",
                            iVBORw0KGgo: "image/png",
                            "/9j/": "image/jpg"
                          };
                          for (var _0x406c5f in _0x522006) if (0 === _0x583cac.indexOf(_0x406c5f)) {
                            return _0x522006[_0x406c5f];
                          }
                          return null;
                        })(_0x5a1ccd);
                      }
                    }
                    Object.assign(_0x51710d, {
                      "media-url": _0x37f5c5,
                      "media-base64": _0x48fdcd,
                      "media-base64-mime": _0x6149d5 ?? _0x306830
                    });
                  }
                  Object.assign(_0x51710d, {
                    "auto-dismiss": _0x5b26e9["auto-dismiss"],
                    sound: _0x5b26e9.sound
                  });
                  return _0x51710d;
                }
              case "Loon":
                {
                  const _0x210e33 = {};
                  let _0x37a664 = _0x5b26e9.openUrl || _0x5b26e9.url || _0x5b26e9["open-url"] || _0x33a8c1;
                  _0x37a664 && Object.assign(_0x210e33, {
                    openUrl: _0x37a664
                  });
                  let _0x145e25 = _0x5b26e9.mediaUrl || _0x5b26e9["media-url"];
                  _0x5a1ccd?.["startsWith"]("http") && (_0x145e25 = _0x5a1ccd);
                  _0x145e25 && Object.assign(_0x210e33, {
                    mediaUrl: _0x145e25
                  });
                  console.log(JSON.stringify(_0x210e33));
                  return _0x210e33;
                }
              case "Quantumult X":
                {
                  const _0x38c5b6 = {};
                  let _0x323647 = _0x5b26e9["open-url"] || _0x5b26e9.url || _0x5b26e9.openUrl || _0x33a8c1;
                  _0x323647 && Object.assign(_0x38c5b6, {
                    "open-url": _0x323647
                  });
                  let _0x271714 = _0x5b26e9["media-url"] || _0x5b26e9.mediaUrl;
                  _0x5a1ccd?.["startsWith"]("http") && (_0x271714 = _0x5a1ccd);
                  _0x271714 && Object.assign(_0x38c5b6, {
                    "media-url": _0x271714
                  });
                  let _0x3468eb = _0x5b26e9["update-pasteboard"] || _0x5b26e9.updatePasteboard || _0x2f7d5f;
                  _0x3468eb && Object.assign(_0x38c5b6, {
                    "update-pasteboard": _0x3468eb
                  });
                  console.log(JSON.stringify(_0x38c5b6));
                  return _0x38c5b6;
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
            $notification.post(_0x14dbc2, _0x5d37fb, _0x3d6062, _0x22070e(_0x2d9ee1));
            break;
          case "Quantumult X":
            $notify(_0x14dbc2, _0x5d37fb, _0x3d6062, _0x22070e(_0x2d9ee1));
            break;
          case "Node.js":
            break;
        }
      }
      if (!this.isMuteLog) {
        let _0x26b5b1 = ["", "==============📣系统通知📣=============="];
        _0x26b5b1.push(_0x14dbc2);
        _0x5d37fb && _0x26b5b1.push(_0x5d37fb);
        _0x3d6062 && _0x26b5b1.push(_0x3d6062);
        console.log(_0x26b5b1.join("\n"));
        this.logs = this.logs.concat(_0x26b5b1);
      }
    }
    debug(..._0x3322a0) {
      this.logLevels[this.logLevel] <= this.logLevels.debug && (_0x3322a0.length > 0 && (this.logs = [...this.logs, ..._0x3322a0]), console.log("" + this.logLevelPrefixs.debug + _0x3322a0.map(_0x5277f3 => _0x5277f3 ?? String(_0x5277f3)).join(this.logSeparator)));
    }
    info(..._0x11e171) {
      this.logLevels[this.logLevel] <= this.logLevels.info && (_0x11e171.length > 0 && (this.logs = [...this.logs, ..._0x11e171]), console.log("" + this.logLevelPrefixs.info + _0x11e171.map(_0x4b015b => _0x4b015b ?? String(_0x4b015b)).join(this.logSeparator)));
    }
    warn(..._0x23411b) {
      this.logLevels[this.logLevel] <= this.logLevels.warn && (_0x23411b.length > 0 && (this.logs = [...this.logs, ..._0x23411b]), console.log("" + this.logLevelPrefixs.warn + _0x23411b.map(_0x1208ff => _0x1208ff ?? String(_0x1208ff)).join(this.logSeparator)));
    }
    error(..._0x35bb6e) {
      this.logLevels[this.logLevel] <= this.logLevels.error && (_0x35bb6e.length > 0 && (this.logs = [...this.logs, ..._0x35bb6e]), console.log("" + this.logLevelPrefixs.error + _0x35bb6e.map(_0x55c2ed => _0x55c2ed ?? String(_0x55c2ed)).join(this.logSeparator)));
    }
    log(..._0x10960a) {
      _0x10960a.length > 0 && (this.logs = [...this.logs, ..._0x10960a]);
      console.log(_0x10960a.map(_0x40426c => _0x40426c ?? String(_0x40426c)).join(this.logSeparator));
    }
    logErr(_0x5e77b0, _0x35694f) {
      switch (this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
        case "Quantumult X":
        default:
          this.log("", "❗️" + this.name + ", 错误!", _0x35694f, _0x5e77b0);
          break;
        case "Node.js":
          this.log("", "❗️" + this.name + ", 错误!", _0x35694f, void 0 !== _0x5e77b0.message ? _0x5e77b0.message : _0x5e77b0, _0x5e77b0.stack);
          break;
      }
    }
    wait(_0x5b4fea) {
      return new Promise(_0x4845c4 => setTimeout(_0x4845c4, _0x5b4fea));
    }
    done(_0x3bb3de = {}) {
      const _0x1f85e4 = (new Date().getTime() - this.startTime) / 1000;
      switch (this.log("", "🔔" + this.name + ", 结束! 🕛 " + _0x1f85e4 + " 秒"), this.log(), this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
        case "Quantumult X":
        default:
          $done(_0x3bb3de);
          break;
        case "Node.js":
          process.exit(1);
      }
    }
  }(_0x369cf1, _0x7b42c5);
}