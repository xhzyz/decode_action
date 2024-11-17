//Sun Nov 17 2024 15:49:16 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
let httpResult, httpReq, httpResp;
let userCookie = ($.isNode() ? process.env.willgo : $.getdata("willgo")) || "";
let userWillGopay = ($.isNode() ? process.env.WillGopay : $.getdata("WillGopay")) || "10";
let userList = [];
let userIdx = 0;
let userCount = 0;
let uu = local_hours();
let sjTimes = randomNum(15000, 30000);
randomtime = sjTimes / 1000;
class UserInfo {
  constructor(_0x498817) {
    this.index = ++userIdx;
    this.name = this.index;
    this.valid = true;
    this.canRead = true;
    try {
      this.param = $.str2json(_0x498817);
      this.ckValid = true;
    } catch (_0x243151) {
      this.ckValid = false;
      $.logAndNotify("账号[" + this.index + "]CK格式错误");
    }
  }
  async ["list"]() {
    try {
      let _0x52e7bb = Math.round(new Date().getTime() / 1000).toString();
      let _0x194a4c = "{\"app_imei\":\"" + this.param.imei + "\",\"app_type\":\"1\",\"app_version\":\"" + app + "\",\"brand\":\"" + brand + "\",\"model\":\"" + model + "\",\"os_version\":\"" + an + "\",\"time_str\":\"" + _0x52e7bb + "\",\"token\":\"" + this.param.token + "\"}willgoapi_beijing_api_key";
      let _0x42f07b = MD5Encrypt(_0x194a4c);
      let _0x4ac029 = "" + this.param.deviceid;
      let _0xf0580c = "https://capi.wewillpro.com/gold/get_gold_info?app_imei=" + this.param.imei + "&app_type=1&app_version=" + app + "&os_version=" + an + "&sign=" + _0x42f07b + "&model=" + model + "&time_str=" + _0x52e7bb + "&brand=" + brand + "&token=" + this.param.token;
      let _0x444fa4 = "";
      let _0x10f8a3 = populateUrlObject(_0xf0580c, _0x4ac029, _0x444fa4);
      await httpRequest("get", _0x10f8a3);
      let _0x5a94e7 = httpResult;
      if (!_0x5a94e7) return;
      for (let _0xca3641 = 0; _0xca3641 < 10; _0xca3641++) {
        if (_0x5a94e7.data.sign_task_list["" + _0xca3641].is_receive == 1) {
          this.id = _0x5a94e7.data.sign_task_list["" + _0xca3641].id;
          await $.wait(5000);
          await this.sign();
        } else {
          $.logAndNotify("账号[" + this.name + "]此红包已开");
        }
        if (_0x5a94e7.data.sign_task_list["" + _0xca3641].is_special == 1) {
          this.id = _0x5a94e7.data.sign_task_list["" + _0xca3641].id;
          await $.wait(5000);
          await this.sign1();
        } else {
          $.logAndNotify("账号[" + this.name + "]此红包翻倍奖励已领");
        }
      }
    } catch (_0x4e8fbb) {} finally {
      return Promise.resolve(1);
    }
  }
  async ["sign"]() {
    try {
      let _0x127642 = Math.round(new Date().getTime() / 1000).toString();
      let _0x57f1dc = "{\"app_imei\":\"" + this.param.imei + "\",\"app_type\":\"1\",\"app_version\":\"" + app + "\",\"brand\":\"" + brand + "\",\"id\":\"" + this.id + "\",\"is_adv\":\"" + this.id + "\",\"model\":\"" + model + "\",\"os_version\":\"" + an + "\",\"time_str\":\"" + _0x127642 + "\",\"token\":\"" + this.param.token + "\"}willgoapi_beijing_api_key";
      let _0x5ee1ce = MD5Encrypt(_0x57f1dc);
      let _0x2ccd2f = "" + this.param.deviceid;
      let _0xebeea = "https://capi.wewillpro.com/gold/user_gold_sign";
      let _0x5ac9fd = "is_adv=" + this.id + "&app_imei=" + this.param.imei + "&app_type=1&app_version=3.0.1&os_version=" + an + "&sign=" + _0x5ee1ce + "&model=" + model + "&id=" + this.id + "&time_str=" + _0x127642 + "&brand=" + brand + "&token=" + this.param.token;
      let _0x5ceb52 = populateUrlObject(_0xebeea, _0x2ccd2f, _0x5ac9fd);
      await httpRequest("post", _0x5ceb52);
      let _0x11afbc = httpResult;
      if (!_0x11afbc) return;
      if (_0x11afbc.code == 200) {
        $.logAndNotify("账号[" + this.name + "]开红包获得" + _0x11afbc.data.num + "金币 -->延迟" + randomtime + "秒后执行翻倍");
        await $.wait(sjTimes);
        await this.sign1();
      } else {
        $.logAndNotify("账号[" + this.name + "]" + _0x11afbc.msg);
      }
    } catch (_0x43a994) {} finally {
      return Promise.resolve(1);
    }
  }
  async ["sign1"]() {
    try {
      let _0x333e43 = Math.round(new Date().getTime() / 1000).toString();
      let _0x2e3e9a = "{\"app_imei\":\"" + this.param.imei + "\",\"app_type\":\"1\",\"app_version\":\"" + app + "\",\"brand\":\"" + brand + "\",\"id\":\"" + this.id + "\",\"is_adv\":\"" + this.id + "\",\"model\":\"" + model + "\",\"os_version\":\"" + an + "\",\"time_str\":\"" + _0x333e43 + "\",\"token\":\"" + this.param.token + "\"}willgoapi_beijing_api_key";
      let _0x3d4c64 = MD5Encrypt(_0x2e3e9a);
      let _0x524999 = "" + this.param.deviceid;
      let _0x49d56c = "https://capi.wewillpro.com/gold/user_gold_sign";
      let _0x560365 = "is_adv=" + this.id + "&app_imei=" + this.param.imei + "&app_type=1&app_version=" + app + "&os_version=" + an + "&sign=" + _0x3d4c64 + "&model=" + model + "&id=" + this.id + "&time_str=" + _0x333e43 + "&brand=" + brand + "&token=" + this.param.token;
      let _0x3f9b33 = populateUrlObject(_0x49d56c, _0x524999, _0x560365);
      await httpRequest("post", _0x3f9b33);
      let _0x30e22e = httpResult;
      if (!_0x30e22e) return;
      if (_0x30e22e.code == 200) {
        $.logAndNotify("账号[" + this.name + "]红包翻倍获得" + _0x30e22e.data.num + "金币");
        await $.wait(5000);
      } else {
        $.logAndNotify("账号[" + this.name + "]" + _0x30e22e.msg);
      }
    } catch (_0x2af8fa) {} finally {
      return Promise.resolve(1);
    }
  }
  async ["wheel"]() {
    try {
      let _0x4894dc = "https://capi.wewillpro.com/wheel/get_user_status?token=" + this.param.token;
      let _0x46d5c4 = populateUrlObject(_0x4894dc);
      delete _0x46d5c4.headers.appversion;
      delete _0x46d5c4.headers.deviceid;
      await httpRequest("get", _0x46d5c4);
      let _0x148343 = httpResult;
      if (!_0x148343) return;
      if (_0x148343.data.user_daily_draw_remains > 0) {
        $.logAndNotify("账号[" + this.name + "]今日还可抽奖" + _0x148343.data.user_daily_draw_remains + "次");
        $.logAndNotify("账号[" + this.name + "]第" + _0x148343.data.user_daily_used_draw_times + "次抽奖");
        await $.wait(3000);
        await this.draw();
      } else if (_0x148343.data.user_daily_draw_remains == 0) {
        $.logAndNotify("账号[" + this.name + "]今日还可抽奖" + _0x148343.data.user_daily_draw_remains + "次");
        await $.wait(5000);
        await this.ad();
      }
    } catch (_0x42631b) {} finally {
      return Promise.resolve(1);
    }
  }
  async ["draw"]() {
    try {
      let _0x29ad18 = "https://capi.wewillpro.com/wheel/make_draw";
      let _0x227d51 = "token=" + this.param.token;
      let _0xfbd3a9 = populateUrlObject1(_0x29ad18, _0x227d51);
      await httpRequest("post", _0xfbd3a9);
      let _0x268cbe = httpResult;
      if (!_0x268cbe) return;
      if (_0x268cbe.code == 200) {
        $.logAndNotify("账号[" + this.name + "]抽奖获得" + _0x268cbe.data.award_amount + "金币 -->延迟" + randomtime + "秒后执行翻倍");
        await $.wait(sjTimes);
        this.amount = _0x268cbe.data.award_amount;
        await this.complete();
      } else {
        $.logAndNotify("账号[" + this.name + "]" + _0x268cbe.msg);
      }
    } catch (_0x3813f0) {} finally {
      return Promise.resolve(1);
    }
  }
  async ["complete"]() {
    try {
      let _0x16642c = "https://capi.wewillpro.com/wheel/view_ad_complete";
      let _0x51856a = "token=" + this.param.token + "&award_type=gold&award_amount=" + this.amount + "&multi=4";
      let _0x533a9f = populateUrlObject1(_0x16642c, _0x51856a);
      await httpRequest("post", _0x533a9f);
      let _0x86293e = httpResult;
      if (!_0x86293e) return;
      if (_0x86293e.code == 200) {
        $.logAndNotify("账号[" + this.name + "]抽奖翻倍获得" + _0x86293e.data.num + "金币");
      } else {
        $.logAndNotify("账号[" + this.name + "]" + _0x86293e.msg);
      }
    } catch (_0x13c070) {} finally {
      return Promise.resolve(1);
    }
  }
  async ["ad"]() {
    try {
      let _0xfe36ad = "https://capi.wewillpro.com/wheel/view_ad_complete";
      let _0x4f76eb = "token=" + this.param.token + "&award_type=draw&award_amount=3&multi=1";
      let _0x12f38e = populateUrlObject1(_0xfe36ad, _0x4f76eb);
      await httpRequest("post", _0x12f38e);
      let _0x4bea2a = httpResult;
      if (!_0x4bea2a) return;
      if (_0x4bea2a.code == 200) {
        $.logAndNotify("账号[" + this.name + "]看广告增加抽奖" + _0x4bea2a.data.num + "次");
        await $.wait(3000);
        await this.wheel();
      } else {
        $.logAndNotify("账号[" + this.name + "]" + _0x4bea2a.msg);
        for (let _0x3c0595 = 1; _0x3c0595 < 4; _0x3c0595++) {
          $.logAndNotify("账号[" + this.name + "]第" + _0x3c0595 + "次领取额外奖励");
          if (_0x3c0595 == 1) {
            await $.wait(sjTimes);
            this.nmu = 5;
            await this.ad1();
          }
          if (_0x3c0595 == 2) {
            await $.wait(sjTimes);
            this.nmu = 10;
            await this.ad1();
          }
          if (_0x3c0595 == 3) {
            await $.wait(sjTimes);
            this.nmu = 20;
            await this.ad1();
          }
        }
      }
    } catch (_0x430631) {} finally {
      return Promise.resolve(1);
    }
  }
  async ["ad1"]() {
    try {
      let _0x54ace0 = "https://capi.wewillpro.com/wheel/view_ad_complete";
      let _0x34e0f6 = "token=" + this.param.token + "&award_type=gold&award_amount=0&multi=0&draw_times=" + this.nmu;
      let _0x44f8ff = populateUrlObject1(_0x54ace0, _0x34e0f6);
      await httpRequest("post", _0x44f8ff);
      let _0x5d3377 = httpResult;
      if (!_0x5d3377) return;
      if (_0x5d3377.code == 200) {
        $.logAndNotify("账号[" + this.name + "]领取额外奖励" + _0x5d3377.data.num + "金币");
      } else {
        $.logAndNotify("账号[" + this.name + "]" + _0x5d3377.msg);
      }
    } catch (_0x178685) {} finally {
      return Promise.resolve(1);
    }
  }
  async ["addSportRecord"]() {
    try {
      let _0x32c4b7 = uu * 1000;
      let _0x51fcf7 = Math.round(new Date().getTime() / 1000).toString();
      let _0x3c3222 = "https://capi.wewillpro.com/sport/addSportRecord";
      let _0x486e1e = "token=" + this.param.token + "&sport_type=0&step_count=" + _0x32c4b7 + "&data_source=1&times=" + year + month + strDate + "&request_time=" + _0x51fcf7 + "&app_type=1&model=" + model;
      let _0x1b9e98 = populateUrlObject1(_0x3c3222, _0x486e1e);
      await httpRequest("post", _0x1b9e98);
      let _0x5ae374 = httpResult;
      if (!_0x5ae374) return;
      if (_0x5ae374.code == 200) {
        $.logAndNotify("账号[" + this.name + "]本次上传步数" + _0x5ae374.data.step + " " + _0x5ae374.msg);
      } else {
        $.logAndNotify("账号[" + this.name + "]" + _0x5ae374.msg);
      }
    } catch (_0x5d3950) {} finally {
      return Promise.resolve(1);
    }
  }
  async ["get_info"]() {
    try {
      let _0x45efea = "https://capi.wewillpro.com/dayask/get_info";
      let _0x3e5c6d = "token=" + this.param.token;
      let _0x11d77a = populateUrlObject1(_0x45efea, _0x3e5c6d);
      await httpRequest("post", _0x11d77a);
      let _0x30d52a = httpResult;
      if (!_0x30d52a) return;
      if (_0x30d52a.data.power > 0) {
        $.logAndNotify("账号[" + this.name + "]本次题目:" + _0x30d52a.data.question_title);
        if (_0x30d52a.data.question_option[0].answer == 1) {
          this.da = _0x30d52a.data.question_option[0].id;
          this.ask_id = _0x30d52a.data.question_option[0].ask_id;
          await $.wait(4000);
          $.logAndNotify("账号[" + this.name + "]提取正确答案为：" + _0x30d52a.data.question_option[0].option);
          await this.user_ask();
        } else if (_0x30d52a.data.question_option[1].answer == 1) {
          this.ask_id = _0x30d52a.data.question_option[1].ask_id;
          this.da = _0x30d52a.data.question_option[1].id;
          await $.wait(4000);
          $.logAndNotify("账号[" + this.name + "]提取正确答案为：" + _0x30d52a.data.question_option[1].option);
          await this.user_ask();
        }
      } else {
        await $.wait(5000);
        $.logAndNotify("账号[" + this.name + "]开始续命");
        await this.user_refresh_power();
      }
    } catch (_0x90fc96) {} finally {
      return Promise.resolve(1);
    }
  }
  async ["user_refresh_power"]() {
    try {
      let _0x5a3cbb = "https://capi.wewillpro.com/dayask/user_receive_power";
      let _0x420848 = "token=" + this.param.token;
      let _0x200f3d = populateUrlObject1(_0x5a3cbb, _0x420848);
      await httpRequest("post", _0x200f3d);
      let _0x11771c = httpResult;
      if (!_0x11771c) return;
      if (_0x11771c.code == 200) {
        $.logAndNotify("账号[" + this.name + "]成功续命" + _0x11771c.data.power + "次");
      } else {
        $.logAndNotify("账号[" + this.name + "]" + _0x11771c.msg);
      }
    } catch (_0x4cb734) {} finally {
      return Promise.resolve(1);
    }
  }
  async ["user_ask"]() {
    try {
      let _0x78d5a4 = "https://capi.wewillpro.com/dayask/user_ask";
      let _0xb4ff93 = "token=" + this.param.token + "&ask_id=" + this.ask_id + "&answer[0]=" + this.da + "&is_again=0";
      let _0x387fe2 = populateUrlObject1(_0x78d5a4, _0xb4ff93);
      await httpRequest("post", _0x387fe2);
      let _0x3ddc2c = httpResult;
      if (!_0x3ddc2c) return;
      if (_0x3ddc2c.code == 200) {
        $.logAndNotify("账号[" + this.name + "]答题正确获得" + _0x3ddc2c.data.add_integral + "金币 ->>延迟" + randomtime + "秒后执行翻倍");
        await $.wait(sjTimes);
        this.fid = _0x3ddc2c.data.id;
        await this.user_double();
      } else {
        $.logAndNotify("账号[" + this.name + "]" + _0x3ddc2c.msg);
      }
    } catch (_0x303688) {} finally {
      return Promise.resolve(1);
    }
  }
  async ["user_double"]() {
    try {
      let _0x4404ac = "https://capi.wewillpro.com/dayask/user_double";
      let _0x210008 = "token=" + this.param.token + "&id=" + this.fid + "&double=2";
      let _0x55b35c = populateUrlObject1(_0x4404ac, _0x210008);
      await httpRequest("post", _0x55b35c);
      let _0x41398d = httpResult;
      if (!_0x41398d) return;
      if (_0x41398d.code == 200) {
        $.logAndNotify("账号[" + this.name + "]答题翻倍奖励" + _0x41398d.data.add_integral + "金币");
      } else {
        $.logAndNotify("账号[" + this.name + "]" + _0x41398d.msg);
      }
    } catch (_0x2103f0) {} finally {
      return Promise.resolve(1);
    }
  }
  async ["getTodayTaskRewardList"]() {
    try {
      let _0x4ad833 = Math.round(new Date().getTime() / 1000).toString();
      let _0x5b57eb = "{\"app_imei\":\"" + this.param.imei + "\",\"app_type\":\"1\",\"app_version\":\"" + app + "\",\"brand\":\"" + brand + "\",\"model\":\"" + model + "\",\"os_version\":\"" + an + "\",\"time_str\":\"" + _0x4ad833 + "\",\"token\":\"" + this.param.token + "\"}willgoapi_beijing_api_key";
      let _0x82c89 = MD5Encrypt(_0x5b57eb);
      let _0x5c16f3 = "" + this.param.deviceid;
      let _0x465232 = "https://capi.wewillpro.com/task/getTodayTaskRewardList";
      let _0xdb5518 = "app_imei=" + this.param.imei + "&app_type=1&app_version=" + app + "&os_version=" + an + "&sign=" + _0x82c89 + "&model=" + model + "&time_str=" + _0x4ad833 + "&brand=" + brand + "&token=" + this.param.token;
      let _0x4f03a9 = populateUrlObject(_0x465232, _0x5c16f3, _0xdb5518);
      await httpRequest("post", _0x4f03a9);
      let _0x238e10 = httpResult;
      if (!_0x238e10) return;
      if (_0x238e10.data.list.length > 0) {
        this.bid = _0x238e10.data.list[0].id;
        this.taskid = _0x238e10.data.list[0].taskid;
        this.date = _0x238e10.data.list[0].date;
        await $.wait(3000);
        await this.pickTaskReward();
      } else {
        $.logAndNotify("账号[" + this.name + "]每日达标奖励已领完");
      }
    } catch (_0x3aea95) {} finally {
      return Promise.resolve(1);
    }
  }
  async ["pickTaskReward"]() {
    try {
      let _0x296275 = Math.round(new Date().getTime() / 1000).toString();
      let _0x44a78d = "{\"app_imei\":\"" + this.param.imei + "\",\"app_type\":\"1\",\"app_version\":\"" + app + "\",\"brand\":\"" + brand + "\",\"date\":\"" + this.date + "\",\"id\":\"" + this.bid + "\",\"model\":\"" + model + "\",\"os_version\":\"" + an + "\",\"task_id\":\"" + this.taskid + "\",\"time_str\":\"" + _0x296275 + "\",\"token\":\"" + this.param.token + "\"}willgoapi_beijing_api_key";
      let _0x5c4fa9 = MD5Encrypt(_0x44a78d);
      let _0x334970 = "" + this.param.deviceid;
      let _0x3c02a2 = "https://capi.wewillpro.com/task/pickTaskReward";
      let _0x26d04b = "date=" + this.date + "&app_imei=" + this.param.imei + "&app_type=1&app_version=" + app + "&os_version=" + an + "&sign=" + _0x5c4fa9 + "&task_id=" + this.taskid + "&model=" + model + "&id=" + this.bid + "&time_str=" + _0x296275 + "&brand=" + brand + "&token=" + this.param.token;
      let _0x2800a6 = populateUrlObject(_0x3c02a2, _0x334970, _0x26d04b);
      await httpRequest("post", _0x2800a6);
      let _0x1c4910 = httpResult;
      if (!_0x1c4910) return;
      if (_0x1c4910.code == 200) {
        $.logAndNotify("账号[" + this.name + "]领取达标奖励" + _0x1c4910.data.gold + "金币 -->延迟" + randomtime + "秒后执行翻倍");
        await $.wait(sjTimes);
        this.award_amount = _0x1c4910.data.gold;
        await this.viewAdComplete();
      } else {
        $.logAndNotify("账号[" + this.name + "]" + _0x1c4910.msg);
      }
    } catch (_0xb39176) {} finally {
      return Promise.resolve(1);
    }
  }
  async ["viewAdComplete"]() {
    try {
      let _0x3cec3b = Math.round(new Date().getTime() / 1000).toString();
      let _0x288f4b = "{\"app_imei\":\"" + this.param.imei + "\",\"app_type\":\"1\",\"app_version\":\"" + app + "\",\"award_amount\":\"" + this.award_amount + "\",\"award_type\":\"gold\",\"brand\":\"" + brand + "\",\"model\":\"" + model + "\",\"multi\":\"3\",\"os_version\":\"" + an + "\",\"task_id\":\"" + this.taskid + "\",\"time_str\":\"" + _0x3cec3b + "\",\"token\":\"" + this.param.token + "\"}willgoapi_beijing_api_key";
      let _0x4454c3 = MD5Encrypt(_0x288f4b);
      let _0x2f72f0 = "" + this.param.deviceid;
      let _0x48aef0 = "https://capi.wewillpro.com/task/viewAdComplete";
      let _0x281e1e = "app_type=1&app_version=" + app + "&os_version=" + an + "&sign=" + _0x4454c3 + "&task_id=" + this.taskid + "&time_str=" + _0x3cec3b + "&award_type=gold&token=" + this.param.token + "&multi=3&app_imei=" + this.param.imei + "&award_amount=" + this.award_amount + "&model=" + model + "&brand=" + brand;
      let _0x2a0b24 = populateUrlObject(_0x48aef0, _0x2f72f0, _0x281e1e);
      await httpRequest("post", _0x2a0b24);
      let _0x67e989 = httpResult;
      if (!_0x67e989) return;
      if (_0x67e989.code == 200) {
        $.logAndNotify("账号[" + this.name + "]领取达标翻倍奖励" + _0x67e989.data.gold + "金币");
      } else {
        $.logAndNotify("账号[" + this.name + "]" + _0x67e989.msg);
      }
    } catch (_0x4e8c4d) {} finally {
      return Promise.resolve(1);
    }
  }
  async ["myWallet"]() {
    try {
      let _0x5dabbd = Math.round(new Date().getTime() / 1000).toString();
      let _0x27b67e = "{\"app_imei\":\"" + this.param.imei + "\",\"app_type\":\"1\",\"app_version\":\"" + app + "\",\"brand\":\"" + brand + "\",\"model\":\"" + model + "\",\"os_version\":\"" + an + "\",\"time_str\":\"" + _0x5dabbd + "\",\"token\":\"" + this.param.token + "\"}willgoapi_beijing_api_key";
      let _0x5e3f7e = MD5Encrypt(_0x27b67e);
      let _0x560e3b = "" + this.param.deviceid;
      let _0x4217d5 = "";
      let _0xe129c0 = "https://capi.wewillpro.com/gold/get_gold_info?app_imei=" + this.param.imei + "&app_type=1&app_version=" + app + "&os_version=" + an + "&sign=" + _0x5e3f7e + "&model=" + model + "&time_str=" + _0x5dabbd + "&brand=" + brand + "&token=" + this.param.token;
      let _0x5cce2b = populateUrlObject(_0xe129c0, _0x560e3b, _0x4217d5);
      await httpRequest("get", _0x5cce2b);
      let _0x3d331f = httpResult;
      if (!_0x3d331f) return;
      if (_0x3d331f.code == 200) {
        $.logAndNotify("账号[" + this.name + "]现有金币" + _0x3d331f.data.gold_num + "≈≈" + _0x3d331f.data.money_num + "元");
        $.logAndNotify("账号[" + this.name + "]现在设置提现额度为" + userWillGopay + "元");
        this.WillGopay = "" + userWillGopay;
        await this.goldWithdrawal();
      } else {
        $.logAndNotify("账号[" + this.name + "]" + _0x3d331f.msg);
      }
    } catch (_0xec6ca1) {} finally {
      return Promise.resolve(1);
    }
  }
  async ["goldWithdrawal"]() {
    try {
      let _0xedfb6c = Math.round(new Date().getTime() / 1000).toString();
      let _0x55f739 = "{\"app_imei\":\"" + this.param.imei + "\",\"app_type\":\"1\",\"app_version\":\"" + app + "\",\"brand\":\"" + brand + "\",\"model\":\"" + model + "\",\"num\":\"" + this.WillGopay + "0000\",\"os_version\":\"" + an + "\",\"pay_type\":\"1\",\"time_str\":\"" + _0xedfb6c + "\",\"token\":\"" + this.param.token + "\"}willgoapi_beijing_api_key";
      let _0x2c9b48 = MD5Encrypt(_0x55f739);
      let _0x6838c5 = "" + this.param.deviceid;
      let _0x16eb0e = "https://capi.wewillpro.com/balance/goldWithdrawal";
      let _0x55e137 = "app_imei=" + this.param.imei + "&app_type=1&app_version=" + app + "&num=" + this.WillGopay + "0000&os_version=" + an + "&sign=" + _0x2c9b48 + "&pay_type=1&model=" + model + "&time_str=" + _0xedfb6c + "&brand=" + brand + "&token=" + this.param.token;
      let _0x32bd50 = populateUrlObject(_0x16eb0e, _0x6838c5, _0x55e137);
      await httpRequest("post", _0x32bd50);
      let _0x2e002d = httpResult;
      if (!_0x2e002d) return;
      if (_0x2e002d.code == 200) {
        $.logAndNotify("账号[" + this.name + "]提现成功");
      } else {
        $.logAndNotify("账号[" + this.name + "]" + _0x2e002d.msg);
      }
    } catch (_0x37ec94) {} finally {
      return Promise.resolve(1);
    }
  }
}
!(async () => {
  if (typeof $request !== "undefined") {} else {
    if (!(await checkEnv())) return;
    let _0x50a309 = [];
    let _0x210cd8 = userList.filter(_0x234953 => _0x234953.ckValid);
    await Promise.all(_0x50a309);
    _0x210cd8 = _0x210cd8.filter(_0x490fd6 => _0x490fd6.valid);
    if (_0x210cd8.length > 0) {
      $.logAndNotify("\n-------------- 日常任务 --------------");
      _0x50a309 = [];
      for (let _0x68b9a1 of _0x210cd8.filter(_0x26f6fb => _0x26f6fb.canRead)) {
        _0x50a309.push(_0x68b9a1.list());
        await $.wait(3000);
        _0x50a309.push(_0x68b9a1.wheel());
        await $.wait(3000);
        _0x50a309.push(_0x68b9a1.addSportRecord());
        await $.wait(3000);
        _0x50a309.push(_0x68b9a1.get_info());
      }
      await Promise.all(_0x50a309);
      $.logAndNotify("\n------------- 领取、提现 -------------");
      _0x50a309 = [];
      for (let _0x431256 of _0x210cd8) {
        _0x50a309.push(_0x431256.getTodayTaskRewardList());
        await $.wait(3000);
        _0x50a309.push(_0x431256.myWallet());
      }
      await Promise.all(_0x50a309);
    }
    await $.showmsg();
  }
})().catch(_0xcee100 => console.log(_0xcee100)).finally(() => $.done());
async function checkEnv() {
  if (userCookie) {
    let _0x354e15 = envSplitor[0];
    for (let _0x49df32 of envSplitor) {
      if (userCookie.indexOf(_0x49df32) > -1) {
        _0x354e15 = _0x49df32;
        break;
      }
    }
    for (let _0x742b89 of userCookie.split(_0x354e15)) {
      if (_0x742b89) userList.push(new UserInfo(_0x742b89));
    }
    userCount = userList.length;
  } else {
    console.log("未找到CK 请阅读脚本说明");
    return;
  }
  console.log("共找到" + userCount + "个账号");
  return true;
}
function populateUrlObject(_0x17b9fd, _0x221fe9, _0x19b542 = "") {
  let _0xa186b3 = _0x17b9fd.replace("//", "/").split("/")[1];
  let _0x59a158 = {
    "url": _0x17b9fd,
    "headers": {
      "Host": _0xa186b3,
      "deviceid": _0x221fe9,
      "brand": brand,
      "appversion": app,
      "content-type": "application/x-www-form-urlencoded;charset=UTF-8"
    },
    "timeout": 5000
  };
  if (_0x19b542) {
    _0x59a158.body = _0x19b542;
    _0x59a158.headers["content-type"] = "application/x-www-form-urlencoded";
    _0x59a158.headers["Content-Length"] = _0x59a158.body ? _0x59a158.body.length : 0;
  }
  return _0x59a158;
}
function populateUrlObject1(_0x26be32, _0x29779f = "") {
  let _0x3db0f1 = _0x26be32.replace("//", "/").split("/")[1];
  let _0x1d381e = {
    "url": _0x26be32,
    "headers": {
      "Host": _0x3db0f1,
      "content-type": "application/x-www-form-urlencoded;charset=UTF-8"
    },
    "timeout": 5000
  };
  if (_0x29779f) {
    _0x1d381e.body = _0x29779f;
    _0x1d381e.headers["content-type"] = "application/x-www-form-urlencoded";
    _0x1d381e.headers["Content-Length"] = _0x1d381e.body ? _0x1d381e.body.length : 0;
  }
  return _0x1d381e;
}
_0xodX = "jsjiami.com.v6";
async function httpRequest(method, url) {
  httpResult = null;
  httpReq = null;
  httpResp = null;
  return new Promise(resolve => {
    $.send(method, url, async (err, req, resp) => {
      try {
        httpReq = req;
        httpResp = resp;
        if (err) {
          console.log(`${method}请求失败`);
          console.log(JSON.stringify(err));
        } else {
          if (resp.body) {
            if (typeof resp.body == "object") {
              httpResult = resp.body;
            } else {
              try {
                httpResult = JSON.parse(resp.body);
              } catch (e) {
                httpResult = resp.body;
              }
            }
          }
        }
      } catch (e) {
        console.log(e);
      } finally {
        resolve();
      }
    });
  });
}
function randomNum(minNum, maxNum) {
  switch (arguments.length) {
    case 1:
      return parseInt(Math.random() * minNum + 1);
      break;
    case 2:
      return parseInt(Math.random() * (maxNum - minNum + 1) + minNum);
      break;
    default:
      return 0;
      break;
  }
}
var date = new Date();
var strDate = date.getDate();
var year = date.getFullYear();
var month = date.getMonth() + 1;
function MD5Encrypt(a) {
  function b(a, b) {
    return a << b | a >>> 32 - b;
  }
  function c(a, b) {
    var c, d, e, f, g;
    return e = 2147483648 & a, f = 2147483648 & b, c = 1073741824 & a, d = 1073741824 & b, g = (1073741823 & a) + (1073741823 & b), c & d ? 2147483648 ^ g ^ e ^ f : c | d ? 1073741824 & g ? 3221225472 ^ g ^ e ^ f : 1073741824 ^ g ^ e ^ f : g ^ e ^ f;
  }
  function d(a, b, c) {
    return a & b | ~a & c;
  }
  function e(a, b, c) {
    return a & c | b & ~c;
  }
  function f(a, b, c) {
    return a ^ b ^ c;
  }
  function g(a, b, c) {
    return b ^ (a | ~c);
  }
  function h(a, e, f, g, h, i, j) {
    return a = c(a, c(c(d(e, f, g), h), j)), c(b(a, i), e);
  }
  function i(a, d, f, g, h, i, j) {
    return a = c(a, c(c(e(d, f, g), h), j)), c(b(a, i), d);
  }
  function j(a, d, e, g, h, i, j) {
    return a = c(a, c(c(f(d, e, g), h), j)), c(b(a, i), d);
  }
  function k(a, d, e, f, h, i, j) {
    return a = c(a, c(c(g(d, e, f), h), j)), c(b(a, i), d);
  }
  function l(a) {
    for (var b, c = a.length, d = c + 8, e = (d - d % 64) / 64, f = 16 * (e + 1), g = new Array(f - 1), h = 0, i = 0; c > i;) {
      b = (i - i % 4) / 4;
      h = i % 4 * 8;
      g[b] = g[b] | a.charCodeAt(i) << h;
      i++;
    }
    return b = (i - i % 4) / 4, h = i % 4 * 8, g[b] = g[b] | 128 << h, g[f - 2] = c << 3, g[f - 1] = c >>> 29, g;
  }
  function m(a) {
    var b,
      c,
      d = "",
      e = "";
    for (c = 0; 3 >= c; c++) {
      b = a >>> 8 * c & 255;
      e = "0" + b.toString(16);
      d += e.substr(e.length - 2, 2);
    }
    return d;
  }
  function n(a) {
    a = a.replace(/\r\n/g, "\n");
    for (var b = "", c = 0; c < a.length; c++) {
      var d = a.charCodeAt(c);
      128 > d ? b += String.fromCharCode(d) : d > 127 && 2048 > d ? (b += String.fromCharCode(d >> 6 | 192), b += String.fromCharCode(63 & d | 128)) : (b += String.fromCharCode(d >> 12 | 224), b += String.fromCharCode(d >> 6 & 63 | 128), b += String.fromCharCode(63 & d | 128));
    }
    return b;
  }
  var o,
    p,
    q,
    r,
    s,
    t,
    u,
    v,
    w,
    x = [],
    y = 7,
    z = 12,
    A = 17,
    B = 22,
    C = 5,
    D = 9,
    E = 14,
    F = 20,
    G = 4,
    H = 11,
    I = 16,
    J = 23,
    K = 6,
    L = 10,
    M = 15,
    N = 21;
  for (a = n(a), x = l(a), t = 1732584193, u = 4023233417, v = 2562383102, w = 271733878, o = 0; o < x.length; o += 16) {
    p = t;
    q = u;
    r = v;
    s = w;
    t = h(t, u, v, w, x[o + 0], y, 3614090360);
    w = h(w, t, u, v, x[o + 1], z, 3905402710);
    v = h(v, w, t, u, x[o + 2], A, 606105819);
    u = h(u, v, w, t, x[o + 3], B, 3250441966);
    t = h(t, u, v, w, x[o + 4], y, 4118548399);
    w = h(w, t, u, v, x[o + 5], z, 1200080426);
    v = h(v, w, t, u, x[o + 6], A, 2821735955);
    u = h(u, v, w, t, x[o + 7], B, 4249261313);
    t = h(t, u, v, w, x[o + 8], y, 1770035416);
    w = h(w, t, u, v, x[o + 9], z, 2336552879);
    v = h(v, w, t, u, x[o + 10], A, 4294925233);
    u = h(u, v, w, t, x[o + 11], B, 2304563134);
    t = h(t, u, v, w, x[o + 12], y, 1804603682);
    w = h(w, t, u, v, x[o + 13], z, 4254626195);
    v = h(v, w, t, u, x[o + 14], A, 2792965006);
    u = h(u, v, w, t, x[o + 15], B, 1236535329);
    t = i(t, u, v, w, x[o + 1], C, 4129170786);
    w = i(w, t, u, v, x[o + 6], D, 3225465664);
    v = i(v, w, t, u, x[o + 11], E, 643717713);
    u = i(u, v, w, t, x[o + 0], F, 3921069994);
    t = i(t, u, v, w, x[o + 5], C, 3593408605);
    w = i(w, t, u, v, x[o + 10], D, 38016083);
    v = i(v, w, t, u, x[o + 15], E, 3634488961);
    u = i(u, v, w, t, x[o + 4], F, 3889429448);
    t = i(t, u, v, w, x[o + 9], C, 568446438);
    w = i(w, t, u, v, x[o + 14], D, 3275163606);
    v = i(v, w, t, u, x[o + 3], E, 4107603335);
    u = i(u, v, w, t, x[o + 8], F, 1163531501);
    t = i(t, u, v, w, x[o + 13], C, 2850285829);
    w = i(w, t, u, v, x[o + 2], D, 4243563512);
    v = i(v, w, t, u, x[o + 7], E, 1735328473);
    u = i(u, v, w, t, x[o + 12], F, 2368359562);
    t = j(t, u, v, w, x[o + 5], G, 4294588738);
    w = j(w, t, u, v, x[o + 8], H, 2272392833);
    v = j(v, w, t, u, x[o + 11], I, 1839030562);
    u = j(u, v, w, t, x[o + 14], J, 4259657740);
    t = j(t, u, v, w, x[o + 1], G, 2763975236);
    w = j(w, t, u, v, x[o + 4], H, 1272893353);
    v = j(v, w, t, u, x[o + 7], I, 4139469664);
    u = j(u, v, w, t, x[o + 10], J, 3200236656);
    t = j(t, u, v, w, x[o + 13], G, 681279174);
    w = j(w, t, u, v, x[o + 0], H, 3936430074);
    v = j(v, w, t, u, x[o + 3], I, 3572445317);
    u = j(u, v, w, t, x[o + 6], J, 76029189);
    t = j(t, u, v, w, x[o + 9], G, 3654602809);
    w = j(w, t, u, v, x[o + 12], H, 3873151461);
    v = j(v, w, t, u, x[o + 15], I, 530742520);
    u = j(u, v, w, t, x[o + 2], J, 3299628645);
    t = k(t, u, v, w, x[o + 0], K, 4096336452);
    w = k(w, t, u, v, x[o + 7], L, 1126891415);
    v = k(v, w, t, u, x[o + 14], M, 2878612391);
    u = k(u, v, w, t, x[o + 5], N, 4237533241);
    t = k(t, u, v, w, x[o + 12], K, 1700485571);
    w = k(w, t, u, v, x[o + 3], L, 2399980690);
    v = k(v, w, t, u, x[o + 10], M, 4293915773);
    u = k(u, v, w, t, x[o + 1], N, 2240044497);
    t = k(t, u, v, w, x[o + 8], K, 1873313359);
    w = k(w, t, u, v, x[o + 15], L, 4264355552);
    v = k(v, w, t, u, x[o + 6], M, 2734768916);
    u = k(u, v, w, t, x[o + 13], N, 1309151649);
    t = k(t, u, v, w, x[o + 4], K, 4149444226);
    w = k(w, t, u, v, x[o + 11], L, 3174756917);
    v = k(v, w, t, u, x[o + 2], M, 718787259);
    u = k(u, v, w, t, x[o + 9], N, 3951481745);
    t = c(t, p);
    u = c(u, q);
    v = c(v, r);
    w = c(w, s);
  }
  var O = m(t) + m(u) + m(v) + m(w);
  return O.toLowerCase();
}
function local_hours() {
  let myDate = new Date();
  h = myDate.getHours();
  return h;
}
function timestampToTime(timestamp) {
  var date = new Date(timestamp * 1000);
  var Y = date.getFullYear() + "-";
  var M = (date.getMonth() + 1 < 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1) + "-";
  var D = (date.getDate() < 10 ? "0" + date.getDate() : date.getDate()) + " ";
  return Y + M + D;
}
function getNowFormatDate() {
  var date = new Date();
  var separator = "-";
  var year = date.getFullYear();
  var month = date.getMonth() + 1;
  var strDate = date.getDate();
  if (month >= 1 && month <= 9) {
    month = "0" + month;
  }
  if (strDate >= 0 && strDate <= 9) {
    strDate = "0" + strDate;
  }
  var currentdate = year + separator + month + separator + strDate;
  return currentdate;
}
function Env(name, env) {
  "undefined" != typeof process && JSON.stringify(process.env).indexOf("GITHUB") > -1 && process.exit(0);
  return new class {
    constructor(name, env) {
      this.name = name;
      this.notifyStr = "";
      this.startTime = new Date().getTime();
      Object.assign(this, env);
      console.log(`${this.name} 开始运行：\n`);
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
    getdata(t) {
      let e = this.getval(t);
      if (/^@/.test(t)) {
        const [, s, i] = /^@(.*?)\.(.*?)$/.exec(t),
          r = s ? this.getval(s) : "";
        if (r) try {
          const t = JSON.parse(r);
          e = t ? this.lodash_get(t, i, "") : e;
        } catch (t) {
          e = "";
        }
      }
      return e;
    }
    setdata(t, e) {
      let s = false;
      if (/^@/.test(e)) {
        const [, i, r] = /^@(.*?)\.(.*?)$/.exec(e),
          o = this.getval(i),
          h = i ? "null" === o ? null : o || "{}" : "{}";
        try {
          const e = JSON.parse(h);
          this.lodash_set(e, r, t);
          s = this.setval(JSON.stringify(e), i);
        } catch (e) {
          const o = {};
          this.lodash_set(o, r, t);
          s = this.setval(JSON.stringify(o), i);
        }
      } else {
        s = this.setval(t, e);
      }
      return s;
    }
    getval(t) {
      return this.isSurge() || this.isLoon() ? $persistentStore.read(t) : this.isQuanX() ? $prefs.valueForKey(t) : this.isNode() ? (this.data = this.loaddata(), this.data[t]) : this.data && this.data[t] || null;
    }
    setval(t, e) {
      return this.isSurge() || this.isLoon() ? $persistentStore.write(t, e) : this.isQuanX() ? $prefs.setValueForKey(t, e) : this.isNode() ? (this.data = this.loaddata(), this.data[e] = t, this.writedata(), !0) : this.data && this.data[e] || null;
    }
    send(m, t, e = () => {}) {
      if (m != "get" && m != "post" && m != "put" && m != "delete") {
        console.log(`无效的http方法：${m}`);
        return;
      }
      if (m == "get" && t.headers) {
        delete t.headers["content-type"];
        delete t.headers["Content-Length"];
      } else if (t.body && t.headers) {
        if (!t.headers["content-type"]) t.headers["content-type"] = "application/json";
      }
      if (this.isSurge() || this.isLoon()) {
        if (this.isSurge() && this.isNeedRewrite) {
          t.headers = t.headers || {};
          Object.assign(t.headers, {
            "X-Surge-Skip-Scripting": !1
          });
        }
        let conf = {
          method: m,
          url: t.url,
          headers: t.headers,
          timeout: t.timeout,
          data: t.body
        };
        if (m == "get") delete conf.data;
        $axios(conf).then(t => {
          const {
            status: i,
            request: q,
            headers: r,
            data: o
          } = t;
          e(null, q, {
            statusCode: i,
            headers: r,
            body: o
          });
        }).catch(err => console.log(err));
      } else if (this.isQuanX()) {
        t.method = m.toUpperCase();
        this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
          hints: !1
        }));
        $task.fetch(t).then(t => {
          const {
            statusCode: i,
            request: q,
            headers: r,
            body: o
          } = t;
          e(null, q, {
            statusCode: i,
            headers: r,
            body: o
          });
        }, t => e(t));
      } else if (this.isNode()) {
        this.got = this.got ? this.got : require("got");
        const {
          url: s,
          ...i
        } = t;
        this.instance = this.got.extend({
          followRedirect: false
        });
        this.instance[m](s, i).then(t => {
          const {
            statusCode: i,
            request: q,
            headers: r,
            body: o
          } = t;
          e(null, q, {
            statusCode: i,
            headers: r,
            body: o
          });
        }, t => {
          const {
            message: s,
            response: i
          } = t;
          e(s, i, i && i.body);
        });
      }
    }
    time(t) {
      let e = {
        "M+": new Date().getMonth() + 1,
        "d+": new Date().getDate(),
        "h+": new Date().getHours(),
        "m+": new Date().getMinutes(),
        "s+": new Date().getSeconds(),
        "q+": Math.floor((new Date().getMonth() + 3) / 3),
        S: new Date().getMilliseconds()
      };
      /(y+)/.test(t) && (t = t.replace(RegExp.$1, (new Date().getFullYear() + "").substr(4 - RegExp.$1.length)));
      for (let s in e) new RegExp("(" + s + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? e[s] : ("00" + e[s]).substr(("" + e[s]).length)));
      return t;
    }
    async showmsg() {
      if (!this.notifyStr) return;
      let notifyBody = this.name + " 运行通知\n\n" + this.notifyStr;
      if ($.isNode()) {
        var notify = require("./sendNotify");
        console.log("\n============== 推送 ==============");
        await notify.sendNotify(this.name, notifyBody);
      } else {
        this.msg(notifyBody);
      }
    }
    logAndNotify(str) {
      console.log(str);
      this.notifyStr += str;
      this.notifyStr += "\n";
    }
    msg(e = t, s = "", i = "", r) {
      const o = t => {
        if (!t) return t;
        if ("string" == typeof t) return this.isLoon() ? t : this.isQuanX() ? {
          "open-url": t
        } : this.isSurge() ? {
          url: t
        } : void 0;
        if ("object" == typeof t) {
          if (this.isLoon()) {
            let e = t.openUrl || t.url || t["open-url"],
              s = t.mediaUrl || t["media-url"];
            return {
              openUrl: e,
              mediaUrl: s
            };
          }
          if (this.isQuanX()) {
            let e = t["open-url"] || t.url || t.openUrl,
              s = t["media-url"] || t.mediaUrl;
            return {
              "open-url": e,
              "media-url": s
            };
          }
          if (this.isSurge()) {
            let e = t.url || t.openUrl || t["open-url"];
            return {
              url: e
            };
          }
        }
      };
      this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(e, s, i, o(r)) : this.isQuanX() && $notify(e, s, i, o(r)));
      let h = ["", "============== 系统通知 =============="];
      h.push(e);
      s && h.push(s);
      i && h.push(i);
      console.log(h.join("\n"));
    }
    getMin(a, b) {
      return a < b ? a : b;
    }
    getMax(a, b) {
      return a < b ? b : a;
    }
    padStr(num, length, padding = "0") {
      let numStr = String(num);
      let numPad = length > numStr.length ? length - numStr.length : 0;
      let retStr = "";
      for (let i = 0; i < numPad; i++) {
        retStr += padding;
      }
      retStr += numStr;
      return retStr;
    }
    json2str(obj, c, encodeUrl = false) {
      let ret = [];
      for (let keys of Object.keys(obj).sort()) {
        let v = obj[keys];
        if (v && encodeUrl) v = encodeURIComponent(v);
        ret.push(keys + "=" + v);
      }
      return ret.join(c);
    }
    str2json(str, decodeUrl = false) {
      let ret = {};
      for (let item of str.split("&")) {
        if (!item) continue;
        let idx = item.indexOf("=");
        if (idx == -1) continue;
        let k = item.substr(0, idx);
        let v = item.substr(idx + 1);
        if (decodeUrl) v = decodeURIComponent(v);
        ret[k] = v;
      }
      return ret;
    }
    randomString(len, charset = "abcdef0123456789") {
      let str = "";
      for (let i = 0; i < len; i++) {
        str += charset.charAt(Math.floor(Math.random() * charset.length));
      }
      return str;
    }
    randomList(a) {
      let idx = Math.floor(Math.random() * a.length);
      return a[idx];
    }
    wait(t) {
      return new Promise(e => setTimeout(e, t));
    }
    done(t = {}) {
      const e = new Date().getTime(),
        s = (e - this.startTime) / 1000;
      console.log(`\n${this.name} 运行结束，共运行了 ${s} 秒！`);
      if (this.isSurge() || this.isQuanX() || this.isLoon()) $done(t);
    }
  }(name, env);
}