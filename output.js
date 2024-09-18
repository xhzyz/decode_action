//Wed Sep 18 2024 15:03:56 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
let httpResult;
let userCookie = ($.isNode() ? process.env.sleep : $.getdata("sleep")) || "";
let userList = [];
let userIdx = 0;
let userCount = 0;
class UserInfo {
  constructor(_0x411185) {
    this.index = ++userIdx;
    this.name = this.index;
    this.valid = true;
    this.canRead = true;
    try {
      this.param = $.str2json(_0x411185);
      this.ckValid = true;
    } catch (_0x269993) {
      this.ckValid = false;
      $.logAndNotify("账号[" + this.index + "]CK格式错误");
    }
  }
  async ["login"]() {
    try {
      let _0xff28d = "https://mapi.shuijiaobao.cn/login/code";
      let _0x3490da = "" + this.param.ua;
      let _0x3dd2bb = "equipmentCode=" + this.param.ua;
      let _0xd28f76 = populateUrlObject(_0xff28d, _0x3490da, _0x3dd2bb);
      await httpRequest("post", _0xd28f76);
      let _0x2ad9a2 = httpResult;
      if (!_0x2ad9a2) return;
      if (_0x2ad9a2.ok = 1) {
        this.token = _0x2ad9a2.data.userInfo.accessToken;
        this.key = _0x2ad9a2.data.userInfo.secret_key;
        this.id = _0x2ad9a2.data.userInfo.id;
        this.equipment_code = _0x2ad9a2.data.userInfo.equipment_code;
        if (_0x2ad9a2.data.bubble_list.length > 0) {
          this.bubbleid = _0x2ad9a2.data.bubble_list[0].id;
          this.number = _0x2ad9a2.data.bubble_list[0].gold_number;
        }
        $.logAndNotify("账号[" + this.name + "]登录成功 你的码子" + this.id + " 现有金币" + _0x2ad9a2.data.userInfo.gold_coin);
        if (_0x2ad9a2.data.userInfo.gold_coin > 10000) {
          await this.extract();
        } else {
          $.logAndNotify("账号[" + this.name + "]金币不足 无法提现");
        }
      } else {
        $.logAndNotify("账号[" + this.name + "] " + _0x2ad9a2.msg + "  ⚠️变量已失效或检查格式");
      }
    } catch (_0x512791) {} finally {
      return Promise.resolve(1);
    }
  }
  async ["sign"]() {
    try {
      let _0x238169 = "https://mapi.shuijiaobao.cn/home/sign";
      let _0x21b8e5 = Math.round(new Date().getTime() / 1000).toString();
      let _0x156ade = MD5Encrypt("" + this.id + this.key + _0x21b8e5 + "000");
      let _0xc2c897 = "a|" + ah + "|" + app + "|ql_sleep|" + this.equipment_code + "|1080|2267|0|" + this.id + "|" + _0x21b8e5 + "000|" + _0x156ade + "|" + this.token + "|" + iphone;
      let _0x3cc7e4 = "";
      let _0xb30371 = populateUrlObject(_0x238169, _0xc2c897, _0x3cc7e4);
      await httpRequest("post", _0xb30371);
      let _0x37b07b = httpResult;
      if (!_0x37b07b) return;
      $.logAndNotify("账号[" + this.name + "]签到：第" + _0x37b07b.data.sign_info.day_num + "天 获得" + _0x37b07b.data.sign_info.sign_power_coin + "金币");
    } catch (_0x42a9cb) {} finally {
      return Promise.resolve(1);
    }
  }
  async ["newList"]() {
    try {
      let _0x3d92bf = "https://mapi.shuijiaobao.cn/task/newList";
      let _0x2c1864 = Math.round(new Date().getTime() / 1000).toString();
      let _0x4f0228 = MD5Encrypt("" + this.id + this.key + _0x2c1864 + "000");
      let _0x2fe662 = "a|" + ah + "|" + app + "|ql_sleep|" + this.equipment_code + "|1080|2267|0|" + this.id + "|" + _0x2c1864 + "000|" + _0x4f0228 + "|" + this.token + "|" + iphone;
      let _0x2dc6f5 = "";
      let _0x5c8856 = populateUrlObject(_0x3d92bf, _0x2fe662, _0x2dc6f5);
      await httpRequest("post", _0x5c8856);
      let _0x1c047b = httpResult;
      if (!_0x1c047b) return;
      $.logAndNotify("账号[" + this.name + "]" + _0x1c047b.data.day_list[1].desc + " || 看视频领金币" + _0x1c047b.data.day_list[3].desc);
      if (_0x1c047b.data.day_list[3].curNum < 8) {
        for (let _0x2892bc = 1; _0x2892bc < 9; _0x2892bc++) {
          $.logAndNotify("账号[" + this.name + "]第" + _0x2892bc + "次看视频广告");
          await this.dayReward();
        }
      }
    } catch (_0x2183ad) {} finally {
      return Promise.resolve(1);
    }
  }
  async ["dayReward"]() {
    try {
      let _0x1cffa8 = "https://mapi.shuijiaobao.cn/task/dayReward";
      let _0x1a7ad2 = Math.round(new Date().getTime() / 1000).toString();
      let _0x2e6cea = MD5Encrypt("" + this.id + this.key + _0x1a7ad2 + "000");
      let _0x40619f = MD5Encrypt(this.id + "49lfdkislkcsiT8A" + _0x1a7ad2 + this.token);
      let _0x9a17e2 = "a|" + ah + "|" + app + "|ql_sleep|" + this.equipment_code + "|1080|2267|0|" + this.id + "|" + _0x1a7ad2 + "000|" + _0x2e6cea + "|" + this.token + "|" + iphone;
      let _0x1849f0 = "timeStamp=" + _0x1a7ad2 + "&sign=" + _0x40619f + "&type=155";
      let _0x2fb241 = populateUrlObject(_0x1cffa8, _0x9a17e2, _0x1849f0);
      await httpRequest("post", _0x2fb241);
      let _0x529681 = httpResult;
      if (!_0x529681) return;
      if (_0x529681.ok == 1) {
        $.logAndNotify("账号[" + this.name + "]看广告获得" + _0x529681.data.user_info.add_gold_coin + "金币");
        await $.wait(35000);
      }
    } catch (_0x2dfa84) {} finally {
      return Promise.resolve(1);
    }
  }
  async ["extract"]() {
    try {
      let _0x4cc770 = "https://mapi.shuijiaobao.cn/money/extract";
      let _0x5d4c52 = Math.round(new Date().getTime() / 1000).toString();
      let _0xa4dbd5 = MD5Encrypt("" + this.id + this.key + _0x5d4c52 + "000");
      let _0x24594a = MD5Encrypt(this.id + "49lfdkislkcsiT8A" + _0x5d4c52 + this.token);
      let _0x314326 = "a|" + ah + "|" + app + "|ql_sleep|" + this.equipment_code + "|1080|2267|0|" + this.id + "|" + _0x5d4c52 + "000|" + _0xa4dbd5 + "|" + this.token + "|" + iphone;
      let _0x5118b1 = "timeStamp=" + _0x5d4c52 + "&sign=" + _0x24594a + "&pay_type=2&type=2";
      let _0xdc7206 = populateUrlObject(_0x4cc770, _0x314326, _0x5118b1);
      await httpRequest("post", _0xdc7206);
      let _0x1f94f3 = httpResult;
      if (!_0x1f94f3) return;
      $.logAndNotify("账号[" + this.name + "]提现：" + _0x1f94f3.msg);
    } catch (_0x5ca1de) {} finally {
      return Promise.resolve(1);
    }
  }
  async ["dinnerCreate"]() {
    try {
      let _0x4ec92d = "https://mapi.shuijiaobao.cn/sleep/dinnerCreate";
      let _0x343e2e = Math.round(new Date().getTime() / 1000).toString();
      let _0x3930a8 = MD5Encrypt("" + this.id + this.key + _0x343e2e + "000");
      let _0x5d1a9c = "a|" + ah + "|" + app + "|ql_sleep|" + this.equipment_code + "|1080|2267|0|" + this.id + "|" + _0x343e2e + "000|" + _0x3930a8 + "|" + this.token + "|" + iphone;
      let _0x5a77f2 = "";
      let _0x3f7add = populateUrlObject(_0x4ec92d, _0x5d1a9c, _0x5a77f2);
      await httpRequest("post", _0x3f7add);
      let _0x4499d2 = httpResult;
      if (!_0x4499d2) return;
      if (_0x4499d2.ok == 1) {
        $.logAndNotify("账号[" + this.name + "]恰饭打卡获得" + _0x4499d2.data.gold_number + "金币");
      } else {
        $.logAndNotify("账号[" + this.name + "]恰饭打卡: " + _0x4499d2.msg);
      }
    } catch (_0x181196) {} finally {
      return Promise.resolve(1);
    }
  }
  async ["createOrderSleep"]() {
    try {
      let _0x807e31 = "https://mapi.shuijiaobao.cn/sleep/createOrderSleep";
      let _0x4c990b = Math.round(new Date().getTime() / 1000).toString();
      let _0x557d77 = MD5Encrypt("" + this.id + this.key + _0x4c990b + "000");
      let _0x26c84f = "a|" + ah + "|" + app + "|ql_sleep|" + this.equipment_code + "|1080|2267|0|" + this.id + "|" + _0x4c990b + "000|" + _0x557d77 + "|" + this.token + "|" + iphone;
      let _0x335342 = "";
      let _0x727893 = populateUrlObject(_0x807e31, _0x26c84f, _0x335342);
      await httpRequest("post", _0x727893);
      let _0x29d04b = httpResult;
      if (!_0x29d04b) return;
      if (_0x29d04b.ok == 1) {
        $.logAndNotify("账号[" + this.name + "]开启睡觉💤" + _0x29d04b.msg);
      } else {
        $.logAndNotify("账号[" + this.name + "]开启睡觉💤" + _0x29d04b.msg);
      }
    } catch (_0x1871f4) {} finally {
      return Promise.resolve(1);
    }
  }
  async ["collectSleepGold"]() {
    try {
      let _0xc6f2a0 = "https://mapi.shuijiaobao.cn/sleep/collectSleepGold";
      let _0x2f94b9 = Math.round(new Date().getTime() / 1000).toString();
      let _0x12dc18 = MD5Encrypt("" + this.id + this.key + _0x2f94b9 + "000");
      let _0x7a4f34 = "a|" + ah + "|" + app + "|ql_sleep|" + this.equipment_code + "|1080|2267|0|" + this.id + "|" + _0x2f94b9 + "000|" + _0x12dc18 + "|" + this.token + "|" + iphone;
      let _0x27ae63 = "number=" + this.number + "&id=" + this.bubbleid;
      let _0x92e6b8 = populateUrlObject(_0xc6f2a0, _0x7a4f34, _0x27ae63);
      await httpRequest("post", _0x92e6b8);
      let _0x290f08 = httpResult;
      if (!_0x290f08) return;
      if (_0x290f08.ok = 1) {
        $.logAndNotify("账号[" + this.name + "]开气泡获得" + _0x290f08.data.gold_number + "金币");
      } else {
        $.logAndNotify("账号[" + this.name + "]暂无气泡奖励可领取");
      }
    } catch (_0x3e6171) {} finally {
      return Promise.resolve(1);
    }
  }
}
!(async () => {
  if (typeof $request !== "undefined") {} else {
    if (!(await checkEnv())) return;
    let _0x7e7a89 = [];
    let _0x4b57a4 = userList.filter(_0xb7d647 => _0xb7d647.ckValid);
    $.logAndNotify("\n通知区：\n⚠️念念不忘 必有回响提醒您！  此脚本有多个定时任务\n早：5:00-9:00 | 11:00-14:00  \n晚：17:00-20:00 | 21:00-02:00");
    if (_0x4b57a4.length > 0) {
      $.logAndNotify("\n-------------- 账号检测 --------------");
      _0x7e7a89 = [];
      for (let _0x2b0b92 of _0x4b57a4.filter(_0x4314f7 => _0x4314f7.canRead)) {
        _0x7e7a89.push(_0x2b0b92.login());
        await $.wait(3000);
      }
      await Promise.all(_0x7e7a89);
      $.logAndNotify("\n-------------- 日常任务 --------------");
      _0x7e7a89 = [];
      for (let _0x35442a of _0x4b57a4) {
        _0x7e7a89.push(_0x35442a.sign());
        await $.wait(3000);
        _0x7e7a89.push(_0x35442a.newList());
        await $.wait(3000);
        _0x7e7a89.push(_0x35442a.collectSleepGold());
      }
      await Promise.all(_0x7e7a89);
      $.logAndNotify("\n-------------- 定时任务 --------------");
      _0x7e7a89 = [];
      for (let _0x51e35c of _0x4b57a4) {
        h = local_hours();
        if (h > 12 && h < 14 || h > 22 && h < 23) {
          _0x7e7a89.push(_0x51e35c.createOrderSleep());
        } else {
          $.logAndNotify("休息: 现在时间" + h + "点 非打卡时间");
        }
        if (h > 5 && h < 9 || h > 11 && h < 14 || h > 17 && h < 20 || h > 21 && h < 23) {
          _0x7e7a89.push(_0x51e35c.dinnerCreate());
        } else {
          $.logAndNotify("恰饭: 现在时间" + h + "点 非打卡时间");
        }
      }
      await Promise.all(_0x7e7a89);
    }
    await $.showmsg();
  }
})().catch(_0x95a3 => console.log(_0x95a3)).finally(() => $.done());
async function checkEnv() {
  if (userCookie) {
    let _0x1da501 = envSplitor[0];
    for (let _0x3a383f of envSplitor) {
      if (userCookie.indexOf(_0x3a383f) > -1) {
        _0x1da501 = _0x3a383f;
        break;
      }
    }
    for (let _0x3c62da of userCookie.split(_0x1da501)) {
      if (_0x3c62da) userList.push(new UserInfo(_0x3c62da));
    }
    userCount = userList.length;
  } else {
    console.log("未找到CK 请阅读脚本说明");
    return;
  }
  console.log("共找到" + userCount + "个账号");
  return true;
}
function populateUrlObject(_0x5c387c, _0x36600d, _0x4f3d64 = "") {
  let _0x5cfd51 = _0x5c387c.replace("//", "/").split("/")[1];
  let _0x5ab71e = {
    "url": _0x5c387c,
    "headers": {
      "Host": _0x5cfd51,
      "ua": _0x36600d,
      "Connection": "keep-alive"
    },
    "timeout": 5000
  };
  if (_0x4f3d64) {
    _0x5ab71e.body = _0x4f3d64;
    _0x5ab71e.headers["content-type"] = "application/x-www-form-urlencoded";
    _0x5ab71e.headers["Content-Length"] = _0x5ab71e.body ? _0x5ab71e.body.length : 0;
  }
  return _0x5ab71e;
}
_0xodH = "jsjiami.com.v6";