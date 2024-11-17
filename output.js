//Sun Nov 17 2024 16:49:02 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const $ = new Env("趣动");
let envSplitor = ["@", "\n"],
  result,
  resurq,
  resurp,
  userList = [],
  usid = 0,
  userCount = 0,
  OooOo = "Qdck",
  userCookie = ($.isNode() ? process.env[OooOo] : $.getdata(OooOo)) || "";
const getNowDate = () => {
  var _0x52a86e = new Date(),
    _0x369b81 = _0x52a86e.getFullYear(),
    _0x244868 = _0x52a86e.getMonth() + 1,
    _0x502e50 = _0x52a86e.getDate();
  _0x244868 >= 1 && _0x244868 <= 9 && (_0x244868 = "0" + _0x244868);
  _0x502e50 >= 0 && _0x502e50 <= 9 && (_0x502e50 = "0" + _0x502e50);
  return _0x369b81 + "" + _0x244868 + _0x502e50;
};
let qd = [...Array(12)].map((_0x177372, _0x245a85) => _0x245a85 + 1),
  rd = [...Array(15)].map((_0x5560d2, _0x42c2d5) => _0x42c2d5 + 1),
  cashnum = "20000";
class UserInfo {
  constructor(_0x36e190) {
    this._ = ++usid;
    this.f = "账号 [" + this._ + "] ";
    this.p = _0x36e190.split("#")[1];
    this.i = $.randomString(32);
  }
  async task() {
    await this.goldWithdrawal();
    await this.uploadstep();
    await this.gettasklist();
    for (let _0x11ac58 of qd) {
      this.vid = _0x11ac58;
      await this.signvideo();
      await this.signvideofb();
      if (this.fx == 1) {
        break;
      }
    }
    for (let _0x1c72cd of rd) {
      await this.cj();
      if (this.b == 1) {
        break;
      }
    }
  }
  async goldWithdrawal() {
    this.ts = Math.round(Date.now() / 1000);
    this.nyr = getNowDate();
    this.sign = MD5Encrypt("{\"app_imei\":\"" + this.i + "\",\"app_type\":\"1\",\"app_version\":\"3.0.0\",\"brand\":\"OnePlus\",\"model\":\"ONEPLUS A6000\",\"num\":\"" + cashnum + "\",\"os_version\":\"Android10\",\"pay_type\":\"1\",\"time_str\":\"" + this.ts + "\",\"token\":\"" + this.p + "\"}willgoapi_beijing_api_key");
    this.data = "app_imei=" + this.i + "&app_type=1&app_version=3.0.0&num=" + cashnum + "&os_version=Android10&sign=" + this.sign + "&pay_type=1&model=ONEPLUS%20A6000&time_str=" + this.ts + "&brand=OnePlus&token=" + this.p;
    await httpRequest("post", popu("https://capi.wewillpro.com/balance/goldWithdrawal", this.data));
    result.code == 200 && console.log(this.f + "[" + cashnum * 0.0001 + "]元 提现成功");
    result.code !== 200 && console.log(this.f + "[" + cashnum * 0.0001 + "]元 提现失败 " + result.msg);
  }
  async uploadstep() {
    this.ts = Math.round(Date.now() / 1000);
    this.nyr = getNowDate();
    this.sign = MD5Encrypt("{\"app_imei\":\"" + this.i + "\",\"app_type\":\"2\",\"app_version\":\"3.0.1\",\"time_zone\":\"GMT%2B8\",\"app_channel\":\"Apple_iPhone15%2C2_16.1\",\"sport_type\":\"0\",\"sport_ count\":\"10000\",\"time_str\":\"" + this.ts + "\",\"request_time\":\"" + this.ts + "\",\"token\":\"" + this.p + "\"}willgoapi_beijing_api_key");
    this.data = "app_channel=Apple_iPhone15%2C2_16.1&app_imei=" + this.i + "&app_type=2&app_version=3.0.8&request_time=" + this.ts + "&sign=" + this.sign + "&sport_type=0&step_count=20480&time_str=" + this.ts + "&time_zone=GMT%2B8&token=" + this.p;
    await httpRequest("post", popu("https://capi.wewillpro.com/sport/addSportRecord", this.data));
    result.code == 200 && console.log(this.f + "运动 上传成功");
  }
  async gettasklist() {
    this.ts = Math.round(Date.now() / 1000);
    this.nyr = getNowDate();
    this.sign = MD5Encrypt("{\"app_imei\":\"" + this.i + "\",\"app_type\":\"1\",\"app_version\":\"3.0.1\",\"brand\":\"xiaomi\",\"model\":\"Redmi Note 7\",\"os_version\":\"Android10\",\"time_str\":\"" + this.ts + "\",\"token\":\"" + this.p + "\"}willgoapi_beijing_api_key");
    this.data = "app_imei=" + this.i + "&app_type=1&app_version=3.0.1&os_version=Android10&sign=" + this.sign + "&model=Redmi%20Note%207&time_str=" + this.ts + "&brand=xiaomi&token=" + this.p;
    await httpRequest("post", popu("https://capi.wewillpro.com/task/getTodayTaskList", this.data));
    for (let _0x22678c of result.data) {
      this.id = _0x22678c.id;
      this.task_id = _0x22678c.task_id;
      this.idnm = _0x22678c.task_description;
      await $.wait(1500);
      await this.dotask();
      await $.wait(1500);
    }
  }
  async dotask() {
    this.ts = Math.round(Date.now() / 1000);
    this.nyr = getNowDate();
    this.sign = MD5Encrypt("{\"app_imei\":\"" + this.i + "\",\"app_type\":\"1\",\"app_version\":\"3.0.1\",\"brand\":\"xiaomi\",\"date\":\"" + this.nyr + "\",\"id\":\"" + this.id + "\",\"model\":\"Redmi Note 7\",\"os_version\":\"Android10\",\"task_id\":\"" + this.task_id + "\",\"time_str\":\"" + this.ts + "\",\"token\":\"" + this.p + "\"}willgoapi_beijing_api_key");
    this.data = "date=" + this.nyr + "&app_imei=" + this.i + "&app_type=1&app_version=3.0.1&os_version=Android10&sign=" + this.sign + "&task_id=" + this.task_id + "&model=Redmi%20Note%207&id=" + this.id + "&time_str=" + this.ts + "&brand=xiaomi&token=" + this.p;
    await httpRequest("post", popu("https://capi.wewillpro.com/task/pickTaskReward", this.data));
    this.vfb = result.data.gold;
    console.log(this.f + "去完成 [" + this.idnm + "] " + result.msg);
    await $.wait(7500);
    await this.videotask();
  }
  async videotask() {
    this.ts = Math.round(Date.now() / 1000);
    this.nyr = getNowDate();
    this.sign = MD5Encrypt("{\"app_imei\":\"" + this.i + "\",\"app_type\":\"1\",\"app_version\":\"3.0.1\",\"award_amount\":\"" + this.vfb + "\",\"award_type\":\"gold\",\"brand\":\"xiaomi\",\"model\":\"Redmi Note 7\",\"multi\":\"3\",\"os_version\":\"Android10\",\"task_id\":\"" + this.task_id + "\",\"time_str\":\"" + this.ts + "\",\"token\":\"" + this.p + "\"}willgoapi_beijing_api_key");
    this.data = "app_type=1&app_version=3.0.1&os_version=Android10&sign=" + this.sign + "&task_id=" + this.task_id + "&time_str=" + this.ts + "&award_type=gold&token=" + this.p + "&multi=3&app_imei=" + this.i + "&award_amount=" + this.vfb + "&model=Redmi%20Note%207&brand=xiaomi";
    await httpRequest("post", popu("https://capi.wewillpro.com/task/viewAdComplete", this.data));
    console.log(this.f + "观看 [" + this.idnm + "]任务视频 " + result.msg + "\n");
    await $.wait(7500);
  }
  async signvideo() {
    this.ts = Math.round(Date.now() / 1000);
    this.nyr = getNowDate();
    this.sign = MD5Encrypt("{\"app_imei\":\"" + this.i + "\",\"app_type\":\"1\",\"app_version\":\"3.0.1\",\"brand\":\"xiaomi\",\"id\":\"" + this.vid + "\",\"is_adv\":\"2\",\"model\":\"Redmi Note 7\",\"os_version\":\"Android10\",\"time_str\":\"" + this.ts + "\",\"token\":\"" + this.p + "\"}willgoapi_beijing_api_key");
    this.data = "is_adv=2&app_imei=" + this.i + "&app_type=1&app_version=3.0.1&os_version=Android10&sign=" + this.sign + "&model=Redmi%20Note%207&id=" + this.vid + "&time_str=" + this.ts + "&brand=xiaomi&token=" + this.p;
    await httpRequest("post", popu("https://capi.wewillpro.com/gold/user_gold_sign", this.data));
    await $.wait(7500);
    console.log(this.f + "签到 " + result.msg);
    if (result.msg == "今日任务已经做完") {
      this.fx = 1;
    }
  }
  async signvideofb() {
    this.ts = Math.round(Date.now() / 1000);
    this.nyr = getNowDate();
    this.sign = MD5Encrypt("{\"app_imei\":\"" + this.i + "\",\"app_type\":\"1\",\"app_version\":\"3.0.1\",\"brand\":\"xiaomi\",\"id\":\"" + this.vid + "\",\"is_adv\":\"1\",\"model\":\"Redmi Note 7\",\"os_version\":\"Android10\",\"time_str\":\"" + this.ts + "\",\"token\":\"" + this.p + "\"}willgoapi_beijing_api_key");
    this.data = "is_adv=1&app_imei=" + this.i + "&app_type=1&app_version=3.0.1&os_version=Android10&sign=" + this.sign + "&model=Redmi%20Note%207&id=" + this.vid + "&time_str=" + this.ts + "&brand=xiaomi&token=" + this.p;
    await httpRequest("post", popu("https://capi.wewillpro.com/gold/user_gold_sign", this.data));
    await $.wait(6500);
    console.log(this.f + "观看签到视频 " + result.msg);
  }
  async cj() {
    this.data = "token=" + this.p;
    await httpRequest("post", popu("https://capi.wewillpro.com/wheel/make_draw", this.data));
    this.fb = result.data.award_amount;
    this.bs = result.data.award_multi_num;
    console.log(this.f + "抽奖 " + result.msg);
    await $.wait(2500);
    await this.cjfb();
  }
  async cjfb() {
    this.data = "token=" + this.p + "&award_type=gold&award_amount=" + this.fb + "&multi=" + this.bs;
    await httpRequest("post", popu("https://capi.wewillpro.com/wheel/view_ad_complete", this.data));
    this.fb = result.data.award_amount;
    console.log(this.f + "抽奖 " + result.msg);
    await $.wait(7500);
  }
}
!(async () => {
  if (!(await checkEnv())) {
    return;
  }
  for (let _0x2252c2 of userList) await _0x2252c2.task();
})().catch(_0x5f9c54 => console.log(_0x5f9c54)).finally(() => $.done());
function encrypt(_0x221f75) {
  return CryptoJS.AES.encrypt(_0x221f75, CryptoJS.enc.Utf8.parse(key), {
    iv: CryptoJS.enc.Utf8.parse(iv),
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.ZeroPadding
  }).toString();
}
function decrypt(_0x32d511) {
  return CryptoJS.AES.decrypt(_0x32d511, CryptoJS.enc.Utf8.parse(key), {
    iv: CryptoJS.enc.Utf8.parse(iv),
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.ZeroPadding
  }).toString(CryptoJS.enc.Utf8);
}
function randomInt(_0x5be030, _0x1c2cf8) {
  return Math.round(Math.random() * (_0x1c2cf8 - _0x5be030) + _0x5be030);
}
function MD5Encrypt(_0x329cf4) {
  function _0x1e7d38(_0x3b794a, _0x4cabb2) {
    return _0x3b794a << _0x4cabb2 | _0x3b794a >>> 32 - _0x4cabb2;
  }
  function _0x4deacf(_0x3db345, _0x48d1a1) {
    var _0x2fc2a6, _0x581b5f, _0x141422, _0x414047, _0x39628e;
    _0x141422 = 2147483648 & _0x3db345;
    _0x414047 = 2147483648 & _0x48d1a1;
    _0x2fc2a6 = 1073741824 & _0x3db345;
    _0x581b5f = 1073741824 & _0x48d1a1;
    _0x39628e = (1073741823 & _0x3db345) + (1073741823 & _0x48d1a1);
    return _0x2fc2a6 & _0x581b5f ? 2147483648 ^ _0x39628e ^ _0x141422 ^ _0x414047 : _0x2fc2a6 | _0x581b5f ? 1073741824 & _0x39628e ? 3221225472 ^ _0x39628e ^ _0x141422 ^ _0x414047 : 1073741824 ^ _0x39628e ^ _0x141422 ^ _0x414047 : _0x39628e ^ _0x141422 ^ _0x414047;
  }
  function _0x44d2e6(_0x1e2e43, _0x58259a, _0x2868b6, _0x265509, _0x537605, _0x4c08ca, _0x41efae) {
    var _0x3653c4, _0x11c3e1;
    _0x1e2e43 = _0x4deacf(_0x1e2e43, _0x4deacf(_0x4deacf((_0x3653c4 = _0x58259a) & (_0x11c3e1 = _0x2868b6) | ~_0x3653c4 & _0x265509, _0x537605), _0x41efae));
    return _0x4deacf(_0x1e7d38(_0x1e2e43, _0x4c08ca), _0x58259a);
  }
  function _0x2827ea(_0x2d0a36, _0x421144, _0x575cf6, _0x299baf, _0xd22bd5, _0x430aed, _0x3f08e3) {
    var _0x379d04, _0x3a4a05, _0x60e850;
    _0x2d0a36 = _0x4deacf(_0x2d0a36, _0x4deacf(_0x4deacf((_0x379d04 = _0x421144, _0x3a4a05 = _0x575cf6, _0x379d04 & (_0x60e850 = _0x299baf) | _0x3a4a05 & ~_0x60e850), _0xd22bd5), _0x3f08e3));
    return _0x4deacf(_0x1e7d38(_0x2d0a36, _0x430aed), _0x421144);
  }
  function _0x39901c(_0x23f51e, _0x5b12d8, _0x368892, _0x44cfb3, _0x1e5d05, _0x8fbd17, _0x2d0f9a) {
    var _0x5d143a, _0xd314e9;
    _0x23f51e = _0x4deacf(_0x23f51e, _0x4deacf(_0x4deacf((_0x5d143a = _0x5b12d8) ^ (_0xd314e9 = _0x368892) ^ _0x44cfb3, _0x1e5d05), _0x2d0f9a));
    return _0x4deacf(_0x1e7d38(_0x23f51e, _0x8fbd17), _0x5b12d8);
  }
  function _0x44f625(_0x241c3d, _0x32fd28, _0x168fc6, _0x533d2c, _0x27e68c, _0x4524ce, _0x407626) {
    var _0x136c37, _0x291d36;
    _0x241c3d = _0x4deacf(_0x241c3d, _0x4deacf(_0x4deacf((_0x136c37 = _0x32fd28, (_0x291d36 = _0x168fc6) ^ (_0x136c37 | ~_0x533d2c)), _0x27e68c), _0x407626));
    return _0x4deacf(_0x1e7d38(_0x241c3d, _0x4524ce), _0x32fd28);
  }
  function _0x21a46b(_0xbb72c0) {
    var _0x14b744,
      _0x24a1a7 = "",
      _0x59b618 = "";
    for (_0x14b744 = 0; 3 >= _0x14b744; _0x14b744++) {
      _0x24a1a7 += (_0x59b618 = "0" + (_0xbb72c0 >>> 8 * _0x14b744 & 255).toString(16)).substr(_0x59b618.length - 2, 2);
    }
    return _0x24a1a7;
  }
  var _0x195f84,
    _0x31f524,
    _0x31d3cf,
    _0x1c019c,
    _0x5d094b,
    _0xfa5e1b,
    _0x38c426,
    _0x252a0c,
    _0x3c6aa0,
    _0x372097 = [];
  for (_0x372097 = function (_0x9d8266) {
    for (var _0x2bef3b, _0x441ce1 = _0x9d8266.length, _0x5aef40 = _0x441ce1 + 8, _0x3475c6 = 16 * ((_0x5aef40 - _0x5aef40 % 64) / 64 + 1), _0x4fad62 = Array(_0x3475c6 - 1), _0x1400eb = 0, _0x294ba9 = 0; _0x441ce1 > _0x294ba9;) {
      _0x2bef3b = (_0x294ba9 - _0x294ba9 % 4) / 4;
      _0x1400eb = _0x294ba9 % 4 * 8;
      _0x4fad62[_0x2bef3b] = _0x4fad62[_0x2bef3b] | _0x9d8266.charCodeAt(_0x294ba9) << _0x1400eb;
      _0x294ba9++;
    }
    _0x2bef3b = (_0x294ba9 - _0x294ba9 % 4) / 4;
    _0x1400eb = _0x294ba9 % 4 * 8;
    _0x4fad62[_0x2bef3b] = _0x4fad62[_0x2bef3b] | 128 << _0x1400eb;
    _0x4fad62[_0x3475c6 - 2] = _0x441ce1 << 3;
    _0x4fad62[_0x3475c6 - 1] = _0x441ce1 >>> 29;
    return _0x4fad62;
  }(_0x329cf4 = function (_0x37c1ad) {
    _0x37c1ad = _0x37c1ad.replace(/\r\n/g, "\n");
    for (var _0x358dc9 = "", _0xacadf4 = 0; _0xacadf4 < _0x37c1ad.length; _0xacadf4++) {
      var _0x531dd9 = _0x37c1ad.charCodeAt(_0xacadf4);
      128 > _0x531dd9 ? _0x358dc9 += String.fromCharCode(_0x531dd9) : _0x531dd9 > 127 && 2048 > _0x531dd9 ? (_0x358dc9 += String.fromCharCode(_0x531dd9 >> 6 | 192), _0x358dc9 += String.fromCharCode(63 & _0x531dd9 | 128)) : (_0x358dc9 += String.fromCharCode(_0x531dd9 >> 12 | 224), _0x358dc9 += String.fromCharCode(_0x531dd9 >> 6 & 63 | 128), _0x358dc9 += String.fromCharCode(63 & _0x531dd9 | 128));
    }
    return _0x358dc9;
  }(_0x329cf4)), _0xfa5e1b = 1732584193, _0x38c426 = 4023233417, _0x252a0c = 2562383102, _0x3c6aa0 = 271733878, _0x195f84 = 0; _0x195f84 < _0x372097.length; _0x195f84 += 16) {
    _0x31f524 = _0xfa5e1b;
    _0x31d3cf = _0x38c426;
    _0x1c019c = _0x252a0c;
    _0x5d094b = _0x3c6aa0;
    _0xfa5e1b = _0x44d2e6(_0xfa5e1b, _0x38c426, _0x252a0c, _0x3c6aa0, _0x372097[_0x195f84 + 0], 7, 3614090360);
    _0x3c6aa0 = _0x44d2e6(_0x3c6aa0, _0xfa5e1b, _0x38c426, _0x252a0c, _0x372097[_0x195f84 + 1], 12, 3905402710);
    _0x252a0c = _0x44d2e6(_0x252a0c, _0x3c6aa0, _0xfa5e1b, _0x38c426, _0x372097[_0x195f84 + 2], 17, 606105819);
    _0x38c426 = _0x44d2e6(_0x38c426, _0x252a0c, _0x3c6aa0, _0xfa5e1b, _0x372097[_0x195f84 + 3], 22, 3250441966);
    _0xfa5e1b = _0x44d2e6(_0xfa5e1b, _0x38c426, _0x252a0c, _0x3c6aa0, _0x372097[_0x195f84 + 4], 7, 4118548399);
    _0x3c6aa0 = _0x44d2e6(_0x3c6aa0, _0xfa5e1b, _0x38c426, _0x252a0c, _0x372097[_0x195f84 + 5], 12, 1200080426);
    _0x252a0c = _0x44d2e6(_0x252a0c, _0x3c6aa0, _0xfa5e1b, _0x38c426, _0x372097[_0x195f84 + 6], 17, 2821735955);
    _0x38c426 = _0x44d2e6(_0x38c426, _0x252a0c, _0x3c6aa0, _0xfa5e1b, _0x372097[_0x195f84 + 7], 22, 4249261313);
    _0xfa5e1b = _0x44d2e6(_0xfa5e1b, _0x38c426, _0x252a0c, _0x3c6aa0, _0x372097[_0x195f84 + 8], 7, 1770035416);
    _0x3c6aa0 = _0x44d2e6(_0x3c6aa0, _0xfa5e1b, _0x38c426, _0x252a0c, _0x372097[_0x195f84 + 9], 12, 2336552879);
    _0x252a0c = _0x44d2e6(_0x252a0c, _0x3c6aa0, _0xfa5e1b, _0x38c426, _0x372097[_0x195f84 + 10], 17, 4294925233);
    _0x38c426 = _0x44d2e6(_0x38c426, _0x252a0c, _0x3c6aa0, _0xfa5e1b, _0x372097[_0x195f84 + 11], 22, 2304563134);
    _0xfa5e1b = _0x44d2e6(_0xfa5e1b, _0x38c426, _0x252a0c, _0x3c6aa0, _0x372097[_0x195f84 + 12], 7, 1804603682);
    _0x3c6aa0 = _0x44d2e6(_0x3c6aa0, _0xfa5e1b, _0x38c426, _0x252a0c, _0x372097[_0x195f84 + 13], 12, 4254626195);
    _0x252a0c = _0x44d2e6(_0x252a0c, _0x3c6aa0, _0xfa5e1b, _0x38c426, _0x372097[_0x195f84 + 14], 17, 2792965006);
    _0x38c426 = _0x44d2e6(_0x38c426, _0x252a0c, _0x3c6aa0, _0xfa5e1b, _0x372097[_0x195f84 + 15], 22, 1236535329);
    _0xfa5e1b = _0x2827ea(_0xfa5e1b, _0x38c426, _0x252a0c, _0x3c6aa0, _0x372097[_0x195f84 + 1], 5, 4129170786);
    _0x3c6aa0 = _0x2827ea(_0x3c6aa0, _0xfa5e1b, _0x38c426, _0x252a0c, _0x372097[_0x195f84 + 6], 9, 3225465664);
    _0x252a0c = _0x2827ea(_0x252a0c, _0x3c6aa0, _0xfa5e1b, _0x38c426, _0x372097[_0x195f84 + 11], 14, 643717713);
    _0x38c426 = _0x2827ea(_0x38c426, _0x252a0c, _0x3c6aa0, _0xfa5e1b, _0x372097[_0x195f84 + 0], 20, 3921069994);
    _0xfa5e1b = _0x2827ea(_0xfa5e1b, _0x38c426, _0x252a0c, _0x3c6aa0, _0x372097[_0x195f84 + 5], 5, 3593408605);
    _0x3c6aa0 = _0x2827ea(_0x3c6aa0, _0xfa5e1b, _0x38c426, _0x252a0c, _0x372097[_0x195f84 + 10], 9, 38016083);
    _0x252a0c = _0x2827ea(_0x252a0c, _0x3c6aa0, _0xfa5e1b, _0x38c426, _0x372097[_0x195f84 + 15], 14, 3634488961);
    _0x38c426 = _0x2827ea(_0x38c426, _0x252a0c, _0x3c6aa0, _0xfa5e1b, _0x372097[_0x195f84 + 4], 20, 3889429448);
    _0xfa5e1b = _0x2827ea(_0xfa5e1b, _0x38c426, _0x252a0c, _0x3c6aa0, _0x372097[_0x195f84 + 9], 5, 568446438);
    _0x3c6aa0 = _0x2827ea(_0x3c6aa0, _0xfa5e1b, _0x38c426, _0x252a0c, _0x372097[_0x195f84 + 14], 9, 3275163606);
    _0x252a0c = _0x2827ea(_0x252a0c, _0x3c6aa0, _0xfa5e1b, _0x38c426, _0x372097[_0x195f84 + 3], 14, 4107603335);
    _0x38c426 = _0x2827ea(_0x38c426, _0x252a0c, _0x3c6aa0, _0xfa5e1b, _0x372097[_0x195f84 + 8], 20, 1163531501);
    _0xfa5e1b = _0x2827ea(_0xfa5e1b, _0x38c426, _0x252a0c, _0x3c6aa0, _0x372097[_0x195f84 + 13], 5, 2850285829);
    _0x3c6aa0 = _0x2827ea(_0x3c6aa0, _0xfa5e1b, _0x38c426, _0x252a0c, _0x372097[_0x195f84 + 2], 9, 4243563512);
    _0x252a0c = _0x2827ea(_0x252a0c, _0x3c6aa0, _0xfa5e1b, _0x38c426, _0x372097[_0x195f84 + 7], 14, 1735328473);
    _0x38c426 = _0x2827ea(_0x38c426, _0x252a0c, _0x3c6aa0, _0xfa5e1b, _0x372097[_0x195f84 + 12], 20, 2368359562);
    _0xfa5e1b = _0x39901c(_0xfa5e1b, _0x38c426, _0x252a0c, _0x3c6aa0, _0x372097[_0x195f84 + 5], 4, 4294588738);
    _0x3c6aa0 = _0x39901c(_0x3c6aa0, _0xfa5e1b, _0x38c426, _0x252a0c, _0x372097[_0x195f84 + 8], 11, 2272392833);
    _0x252a0c = _0x39901c(_0x252a0c, _0x3c6aa0, _0xfa5e1b, _0x38c426, _0x372097[_0x195f84 + 11], 16, 1839030562);
    _0x38c426 = _0x39901c(_0x38c426, _0x252a0c, _0x3c6aa0, _0xfa5e1b, _0x372097[_0x195f84 + 14], 23, 4259657740);
    _0xfa5e1b = _0x39901c(_0xfa5e1b, _0x38c426, _0x252a0c, _0x3c6aa0, _0x372097[_0x195f84 + 1], 4, 2763975236);
    _0x3c6aa0 = _0x39901c(_0x3c6aa0, _0xfa5e1b, _0x38c426, _0x252a0c, _0x372097[_0x195f84 + 4], 11, 1272893353);
    _0x252a0c = _0x39901c(_0x252a0c, _0x3c6aa0, _0xfa5e1b, _0x38c426, _0x372097[_0x195f84 + 7], 16, 4139469664);
    _0x38c426 = _0x39901c(_0x38c426, _0x252a0c, _0x3c6aa0, _0xfa5e1b, _0x372097[_0x195f84 + 10], 23, 3200236656);
    _0xfa5e1b = _0x39901c(_0xfa5e1b, _0x38c426, _0x252a0c, _0x3c6aa0, _0x372097[_0x195f84 + 13], 4, 681279174);
    _0x3c6aa0 = _0x39901c(_0x3c6aa0, _0xfa5e1b, _0x38c426, _0x252a0c, _0x372097[_0x195f84 + 0], 11, 3936430074);
    _0x252a0c = _0x39901c(_0x252a0c, _0x3c6aa0, _0xfa5e1b, _0x38c426, _0x372097[_0x195f84 + 3], 16, 3572445317);
    _0x38c426 = _0x39901c(_0x38c426, _0x252a0c, _0x3c6aa0, _0xfa5e1b, _0x372097[_0x195f84 + 6], 23, 76029189);
    _0xfa5e1b = _0x39901c(_0xfa5e1b, _0x38c426, _0x252a0c, _0x3c6aa0, _0x372097[_0x195f84 + 9], 4, 3654602809);
    _0x3c6aa0 = _0x39901c(_0x3c6aa0, _0xfa5e1b, _0x38c426, _0x252a0c, _0x372097[_0x195f84 + 12], 11, 3873151461);
    _0x252a0c = _0x39901c(_0x252a0c, _0x3c6aa0, _0xfa5e1b, _0x38c426, _0x372097[_0x195f84 + 15], 16, 530742520);
    _0x38c426 = _0x39901c(_0x38c426, _0x252a0c, _0x3c6aa0, _0xfa5e1b, _0x372097[_0x195f84 + 2], 23, 3299628645);
    _0xfa5e1b = _0x44f625(_0xfa5e1b, _0x38c426, _0x252a0c, _0x3c6aa0, _0x372097[_0x195f84 + 0], 6, 4096336452);
    _0x3c6aa0 = _0x44f625(_0x3c6aa0, _0xfa5e1b, _0x38c426, _0x252a0c, _0x372097[_0x195f84 + 7], 10, 1126891415);
    _0x252a0c = _0x44f625(_0x252a0c, _0x3c6aa0, _0xfa5e1b, _0x38c426, _0x372097[_0x195f84 + 14], 15, 2878612391);
    _0x38c426 = _0x44f625(_0x38c426, _0x252a0c, _0x3c6aa0, _0xfa5e1b, _0x372097[_0x195f84 + 5], 21, 4237533241);
    _0xfa5e1b = _0x44f625(_0xfa5e1b, _0x38c426, _0x252a0c, _0x3c6aa0, _0x372097[_0x195f84 + 12], 6, 1700485571);
    _0x3c6aa0 = _0x44f625(_0x3c6aa0, _0xfa5e1b, _0x38c426, _0x252a0c, _0x372097[_0x195f84 + 3], 10, 2399980690);
    _0x252a0c = _0x44f625(_0x252a0c, _0x3c6aa0, _0xfa5e1b, _0x38c426, _0x372097[_0x195f84 + 10], 15, 4293915773);
    _0x38c426 = _0x44f625(_0x38c426, _0x252a0c, _0x3c6aa0, _0xfa5e1b, _0x372097[_0x195f84 + 1], 21, 2240044497);
    _0xfa5e1b = _0x44f625(_0xfa5e1b, _0x38c426, _0x252a0c, _0x3c6aa0, _0x372097[_0x195f84 + 8], 6, 1873313359);
    _0x3c6aa0 = _0x44f625(_0x3c6aa0, _0xfa5e1b, _0x38c426, _0x252a0c, _0x372097[_0x195f84 + 15], 10, 4264355552);
    _0x252a0c = _0x44f625(_0x252a0c, _0x3c6aa0, _0xfa5e1b, _0x38c426, _0x372097[_0x195f84 + 6], 15, 2734768916);
    _0x38c426 = _0x44f625(_0x38c426, _0x252a0c, _0x3c6aa0, _0xfa5e1b, _0x372097[_0x195f84 + 13], 21, 1309151649);
    _0xfa5e1b = _0x44f625(_0xfa5e1b, _0x38c426, _0x252a0c, _0x3c6aa0, _0x372097[_0x195f84 + 4], 6, 4149444226);
    _0x3c6aa0 = _0x44f625(_0x3c6aa0, _0xfa5e1b, _0x38c426, _0x252a0c, _0x372097[_0x195f84 + 11], 10, 3174756917);
    _0x252a0c = _0x44f625(_0x252a0c, _0x3c6aa0, _0xfa5e1b, _0x38c426, _0x372097[_0x195f84 + 2], 15, 718787259);
    _0x38c426 = _0x44f625(_0x38c426, _0x252a0c, _0x3c6aa0, _0xfa5e1b, _0x372097[_0x195f84 + 9], 21, 3951481745);
    _0xfa5e1b = _0x4deacf(_0xfa5e1b, _0x31f524);
    _0x38c426 = _0x4deacf(_0x38c426, _0x31d3cf);
    _0x252a0c = _0x4deacf(_0x252a0c, _0x1c019c);
    _0x3c6aa0 = _0x4deacf(_0x3c6aa0, _0x5d094b);
  }
  return (_0x21a46b(_0xfa5e1b) + _0x21a46b(_0x38c426) + _0x21a46b(_0x252a0c) + _0x21a46b(_0x3c6aa0)).toLowerCase();
}
async function checkEnv() {
  if (userCookie) {
    let _0x393142 = envSplitor[0];
    for (let _0xa3d95b of envSplitor) if (userCookie.indexOf(_0xa3d95b) > -1) {
      _0x393142 = _0xa3d95b;
      break;
    }
    for (let _0x476210 of userCookie.split(_0x393142)) _0x476210 && userList.push(new UserInfo(_0x476210));
    userCount = userList.length;
  } else {
    console.log("未找到任何账号");
  }
  console.log("找到 " + userCount + "个账号");
  return !0;
}
function popu(_0x57ac85, _0x56ffde = "") {
  _0x57ac85.replace("//", "/").split("/")[1];
  let _0x5ef69c = {
    url: _0x57ac85,
    headers: {
      deviceid: this.i,
      "accept-encoding": "gzip",
      "Content-Type": "application/x-www-form-urlencoded",
      appversion: "3.0.1",
      Host: "capi.wewillpro.com",
      brand: "xiaomi",
      "Accept-Language": "zh-Hans-CN;q=1, ja-CN;q=0.9"
    },
    timeout: 12000,
    body: _0x56ffde
  };
  _0x56ffde && (_0x5ef69c.headers["Content-Length"] = _0x56ffde?.["length"] || 0);
  return _0x5ef69c;
}
async function httpRequest(_0x45c129, _0x2dcd66) {
  result = null;
  resurq = null;
  resurp = null;
  return new Promise(_0x4b3b32 => {
    $.send(_0x45c129, _0x2dcd66, async (_0x36e728, _0x1ee56, _0x49ebcc) => {
      try {
        if (!(resurq = _0x1ee56, resurp = _0x49ebcc, _0x36e728)) {
          if (_0x49ebcc.body) {
            if ("object" == typeof _0x49ebcc.body) {
              result = _0x49ebcc.body;
            } else {
              try {
                result = JSON.parse(_0x49ebcc.body);
              } catch (_0x8f45e) {
                result = _0x49ebcc.body;
              }
            }
          }
        }
      } catch (_0x5d8b10) {
        console.log(_0x5d8b10);
      } finally {
        _0x4b3b32();
      }
    });
  });
}
function Env(_0x3057aa, _0x4e3576) {
  "undefined" != typeof process && JSON.stringify(process.env).indexOf("GITHUB") > -1 && process.exit(0);
  return new class {
    constructor(_0x26e7a5, _0x1412ca) {
      this.name = _0x26e7a5;
      this.notifyStr = "";
      this.startTime = new Date().getTime();
      Object.assign(this, _0x1412ca);
      console.log(this.name + " 开始运行：\n");
    }
    isNode() {
      return "undefined" != typeof module && !!module.exports;
    }
    isQuanX() {
      return "undefined" != typeof $task;
    }
    isSurge() {
      return "undefined" != typeof $httpClient && "undefined" == typeof $loon;
    }
    isLoon() {
      return "undefined" != typeof $loon;
    }
    getdata(_0x3bcfe5) {
      let _0x4cbec5 = this.getval(_0x3bcfe5);
      if (/^@/.test(_0x3bcfe5)) {
        let [, _0xc2178d, _0xb31b3f] = /^@(.*?)\.(.*?)$/.exec(_0x3bcfe5),
          _0x128930 = _0xc2178d ? this.getval(_0xc2178d) : "";
        if (_0x128930) {
          try {
            let _0x3de977 = JSON.parse(_0x128930);
            _0x4cbec5 = _0x3de977 ? this.lodash_get(_0x3de977, _0xb31b3f, "") : _0x4cbec5;
          } catch (_0x5425bb) {
            _0x4cbec5 = "";
          }
        }
      }
      return _0x4cbec5;
    }
    setdata(_0x240286, _0x324505) {
      let _0x2a6aba = !1;
      if (/^@/.test(_0x324505)) {
        let [, _0x30a86a, _0x398419] = /^@(.*?)\.(.*?)$/.exec(_0x324505),
          _0x86a693 = this.getval(_0x30a86a);
        try {
          let _0x5bc2fd = JSON.parse(_0x30a86a ? "null" === _0x86a693 ? null : _0x86a693 || "{}" : "{}");
          this.lodash_set(_0x5bc2fd, _0x398419, _0x240286);
          _0x2a6aba = this.setval(JSON.stringify(_0x5bc2fd), _0x30a86a);
        } catch (_0x5f1c2e) {
          let _0x19f131 = {};
          this.lodash_set(_0x19f131, _0x398419, _0x240286);
          _0x2a6aba = this.setval(JSON.stringify(_0x19f131), _0x30a86a);
        }
      } else {
        _0x2a6aba = this.setval(_0x240286, _0x324505);
      }
      return _0x2a6aba;
    }
    getval(_0x4be052) {
      return this.isSurge() || this.isLoon() ? $persistentStore.read(_0x4be052) : this.isQuanX() ? $prefs.valueForKey(_0x4be052) : this.isNode() ? (this.data = this.loaddata(), this.data[_0x4be052]) : this.data && this.data[_0x4be052] || null;
    }
    setval(_0x3761b9, _0x12b981) {
      return this.isSurge() || this.isLoon() ? $persistentStore.write(_0x3761b9, _0x12b981) : this.isQuanX() ? $prefs.setValueForKey(_0x3761b9, _0x12b981) : this.isNode() ? (this.data = this.loaddata(), this.data[_0x12b981] = _0x3761b9, this.writedata(), !0) : this.data && this.data[_0x12b981] || null;
    }
    send(_0x43abdb, _0xb76292, _0x33bb7a = () => {}) {
      if ("get" != _0x43abdb && "post" != _0x43abdb && "put" != _0x43abdb && "delete" != _0x43abdb) {
        console.log("无效的http方法：" + _0x43abdb);
        return;
      }
      if ("get" == _0x43abdb && _0xb76292.headers ? (delete _0xb76292.headers["Content-Type"], delete _0xb76292.headers["Content-Length"]) : _0xb76292.body && _0xb76292.headers && (_0xb76292.headers["Content-Type"] || (_0xb76292.headers["Content-Type"] = "application/x-www-form-urlencoded")), this.isSurge() || this.isLoon()) {
        this.isSurge() && this.isNeedRewrite && (_0xb76292.headers = _0xb76292.headers || {}, Object.assign(_0xb76292.headers, {
          "X-Surge-Skip-Scripting": !1
        }));
        let _0x36cb33 = {
          method: _0x43abdb,
          url: _0xb76292.url,
          headers: _0xb76292.headers,
          timeout: _0xb76292.timeout,
          data: _0xb76292.body
        };
        "get" == _0x43abdb && delete _0x36cb33.data;
        $axios(_0x36cb33).then(_0x3bad67 => {
          let {
            status: _0x54a2e0,
            request: _0x9a2540,
            headers: _0x8a2124,
            data: _0x38b0dc
          } = _0x3bad67;
          _0x33bb7a(null, _0x9a2540, {
            statusCode: _0x54a2e0,
            headers: _0x8a2124,
            body: _0x38b0dc
          });
        }).catch(_0x18f029 => console.log(_0x18f029));
      } else {
        if (this.isQuanX()) {
          _0xb76292.method = _0x43abdb.toUpperCase();
          this.isNeedRewrite && (_0xb76292.opts = _0xb76292.opts || {}, Object.assign(_0xb76292.opts, {
            hints: !1
          }));
          $task.fetch(_0xb76292).then(_0x48a3b8 => {
            let {
              statusCode: _0x203419,
              request: _0x59bd14,
              headers: _0x5003ba,
              body: _0x328c99
            } = _0x48a3b8;
            _0x33bb7a(null, _0x59bd14, {
              statusCode: _0x203419,
              headers: _0x5003ba,
              body: _0x328c99
            });
          }, _0x5b27b2 => _0x33bb7a(_0x5b27b2));
        } else {
          if (this.isNode()) {
            this.got = this.got ? this.got : require("got");
            let {
              url: _0x237376,
              ..._0x2b1480
            } = _0xb76292;
            this.instance = this.got.extend({
              followRedirect: !1
            });
            this.instance[_0x43abdb](_0x237376, _0x2b1480).then(_0x56cac5 => {
              let {
                statusCode: _0xbd72ca,
                request: _0x7a38ce,
                headers: _0x41a2d0,
                body: _0x6cfb83
              } = _0x56cac5;
              _0x33bb7a(null, _0x7a38ce, {
                statusCode: _0xbd72ca,
                headers: _0x41a2d0,
                body: _0x6cfb83
              });
            }, _0x1a6300 => {
              let {
                message: _0x193277,
                response: _0x1abdf4
              } = _0x1a6300;
              _0x33bb7a(_0x193277, _0x1abdf4, _0x1abdf4 && _0x1abdf4.body);
            });
          }
        }
      }
    }
    time(_0x4cddae) {
      let _0x251499 = {
        "M+": new Date().getMonth() + 1,
        "d+": new Date().getDate(),
        "h+": new Date().getHours(),
        "m+": new Date().getMinutes(),
        "s+": new Date().getSeconds(),
        "q+": Math.floor((new Date().getMonth() + 3) / 3),
        S: new Date().getMilliseconds()
      };
      for (let _0x46331a in /(y+)/.test(_0x4cddae) && (_0x4cddae = _0x4cddae.replace(RegExp.$1, (new Date().getFullYear() + "").substr(4 - RegExp.$1.length))), _0x251499) RegExp("(" + _0x46331a + ")").test(_0x4cddae) && (_0x4cddae = _0x4cddae.replace(RegExp.$1, 1 == RegExp.$1.length ? _0x251499[_0x46331a] : ("00" + _0x251499[_0x46331a]).substr(("" + _0x251499[_0x46331a]).length)));
      return _0x4cddae;
    }
    async showmsg() {
      if (!this.notifyStr) {
        return;
      }
      let _0x29941f = this.name + " 运行通知\n\n" + this.notifyStr;
      if ($.isNode()) {
        var _0x437651 = require("./sendNotify");
        console.log("\n============== 推送 ==============");
        await _0x437651.sendNotify(this.name, _0x29941f);
      } else {
        this.msg(_0x29941f);
      }
    }
    logAndNotify(_0x2a46f7) {
      console.log(_0x2a46f7);
      this.notifyStr += _0x2a46f7;
      this.notifyStr += "\n";
    }
    msg(_0x301ddc = t, _0x1ffac0 = "", _0x2649a2 = "", _0xce8fa9) {
      let _0x577007 = _0x5814f9 => {
        if (!_0x5814f9) {
          return _0x5814f9;
        }
        if ("string" == typeof _0x5814f9) {
          return this.isLoon() ? _0x5814f9 : this.isQuanX() ? {
            "open-url": _0x5814f9
          } : this.isSurge() ? {
            url: _0x5814f9
          } : void 0;
        }
        if ("object" == typeof _0x5814f9) {
          if (this.isLoon()) {
            return {
              openUrl: _0x5814f9.openUrl || _0x5814f9.url || _0x5814f9["open-url"],
              mediaUrl: _0x5814f9.mediaUrl || _0x5814f9["media-url"]
            };
          }
          if (this.isQuanX()) {
            return {
              "open-url": _0x5814f9["open-url"] || _0x5814f9.url || _0x5814f9.openUrl,
              "media-url": _0x5814f9["media-url"] || _0x5814f9.mediaUrl
            };
          }
          if (this.isSurge()) {
            return {
              url: _0x5814f9.url || _0x5814f9.openUrl || _0x5814f9["open-url"]
            };
          }
        }
      };
      this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(_0x301ddc, _0x1ffac0, _0x2649a2, _0x577007(_0xce8fa9)) : this.isQuanX() && $notify(_0x301ddc, _0x1ffac0, _0x2649a2, _0x577007(_0xce8fa9)));
      let _0x280981 = ["", "============== 系统通知 =============="];
      _0x280981.push(_0x301ddc);
      _0x1ffac0 && _0x280981.push(_0x1ffac0);
      _0x2649a2 && _0x280981.push(_0x2649a2);
      console.log(_0x280981.join("\n"));
    }
    getMin(_0x1a43c1, _0x43d79b) {
      return _0x1a43c1 < _0x43d79b ? _0x1a43c1 : _0x43d79b;
    }
    getMax(_0x3c1673, _0x5808b2) {
      return _0x3c1673 < _0x5808b2 ? _0x5808b2 : _0x3c1673;
    }
    padStr(_0x3e27ae, _0x2f14c0, _0x521e70 = "0") {
      let _0x273394 = String(_0x3e27ae),
        _0x2cea29 = _0x2f14c0 > _0x273394.length ? _0x2f14c0 - _0x273394.length : 0,
        _0x1ab384 = "";
      for (let _0x15014d = 0; _0x15014d < _0x2cea29; _0x15014d++) {
        _0x1ab384 += _0x521e70;
      }
      return _0x1ab384 + _0x273394;
    }
    json2str(_0x2f460b, _0x254ee4, _0xe65771 = !1) {
      let _0x55bfb8 = [];
      for (let _0x2ba53c of Object.keys(_0x2f460b).sort()) {
        let _0x45d50e = _0x2f460b[_0x2ba53c];
        _0x45d50e && _0xe65771 && (_0x45d50e = encodeURIComponent(_0x45d50e));
        _0x55bfb8.push(_0x2ba53c + "=" + _0x45d50e);
      }
      return _0x55bfb8.join(_0x254ee4);
    }
    str2json(_0x491e97, _0x55dd86 = !1) {
      let _0x31dcd7 = {};
      for (let _0xb69e9e of _0x491e97.split("#")) {
        if (!_0xb69e9e) {
          continue;
        }
        let _0x5360e9 = _0xb69e9e.indexOf("=");
        if (-1 == _0x5360e9) {
          continue;
        }
        let _0xee2b61 = _0xb69e9e.substr(0, _0x5360e9),
          _0x77d651 = _0xb69e9e.substr(_0x5360e9 + 1);
        _0x55dd86 && (_0x77d651 = decodeURIComponent(_0x77d651));
        _0x31dcd7[_0xee2b61] = _0x77d651;
      }
      return _0x31dcd7;
    }
    randomString(_0x1dd08a, _0x1c7978 = "abcdef0123456789") {
      let _0x5ab470 = "";
      for (let _0x1c1254 = 0; _0x1c1254 < _0x1dd08a; _0x1c1254++) {
        _0x5ab470 += _0x1c7978.charAt(Math.floor(Math.random() * _0x1c7978.length));
      }
      return _0x5ab470;
    }
    randomList(_0x3567c8) {
      return _0x3567c8[Math.floor(Math.random() * _0x3567c8.length)];
    }
    wait(_0x3efc61) {
      return new Promise(_0x4b031a => setTimeout(_0x4b031a, _0x3efc61));
    }
    done(_0x63664f = {}) {
      let _0x1887a9 = (new Date().getTime() - this.startTime) / 1000;
      console.log("\n" + this.name + " 运行结束，共运行了 " + _0x1887a9 + " 秒！");
      (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(_0x63664f);
    }
  }(_0x3057aa, _0x4e3576);
}