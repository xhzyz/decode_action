//Fri Mar 28 2025 04:08:41 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const $ = new Env("习酒"),
  axios = require("axios");
let request = require("request");
request = request.defaults({
  "jar": true
});
const {
    log
  } = console,
  Notify = 1,
  debug = 0;
let xjhd = ($.isNode() ? process.env.xjhd : $.getdata("xjhd")) || "",
  ocrurl = ($.isNode() ? process.env.ocrurl : $.getdata("ocrurl")) || "",
  xjhdArr = [],
  data = "",
  msg = "";
!(async () => {
  if (typeof $request !== "undefined") await GetRewrite();else {
    if (!(await Envs())) return;else {
      log("\n\n=============================================    \n脚本执行 - 北京时间(UTC+8)：" + new Date(new Date().getTime() + new Date().getTimezoneOffset() * 60 * 1000 + 8 * 60 * 60 * 1000).toLocaleString() + " \n=============================================\n");
      log("\n============ 微信公众号：柠檬Plus ============");
      log("\n=================== 共找到 " + xjhdArr.length + " 个账号 ===================");
      debug && log("【debug】 这是你的全部账号数组:\n " + xjhdArr);
      for (let _0x2cb8f1 = 0; _0x2cb8f1 < xjhdArr.length; _0x2cb8f1++) {
        let _0xb429a6 = _0x2cb8f1 + 1;
        addNotifyStr("\n==== 开始【第 " + _0xb429a6 + " 个账号】====\n", true);
        xjhd = xjhdArr[_0x2cb8f1];
        await hasDataMsCenterUser();
        await getJwt();
        await hasDataMsCenterUser1();
        await getJwt1();
        await banners();
        await getJwt1();
        await open();
        await open1();
        await banner();
        await hasDataMsCenterUser1();
        await Gardenmemberwine();
        await sorghum1();
        await dailySign();
        await Sign();
        await tasks();
        await sorghumindex();
        await getMemberInfo();
        await recommend();
      }
      await SendMsg(msg);
    }
  }
})().catch(_0x4362ba => log(_0x4362ba)).finally(() => $.done());
async function hasDataMsCenterUser() {
  return new Promise(_0x4b6a4b => {
    var _0x5608cb = {
      "method": "GET",
      "url": "https://xcx.exijiu.com/anti-channeling/public/index.php/api/v2/Member/hasDataMsCenterUser",
      "headers": {
        "Host": "xcx.exijiu.com",
        "Connection": "keep-alive",
        "referer": "https://servicewechat.com/wx489f950decfeb93e/250/page-frame.html",
        "login_code": xjhd,
        "user-agent": "Mozilla/5.0 (Linux; Android 10; PCAM00 Build/QKQ1.190918.001; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/111.0.5563.116 Mobile Safari/537.36 XWEB/5175 MMWEBSDK/20230504 MMWEBID/2125 MicroMessenger/8.0.37.2380(0x2800255B) WeChat/arm64 Weixin NetType/WIFI Language/zh_CN ABI/arm64 MiniProgramEnv/android",
        "Content-Type": "application/json",
        "Accept": "*/*",
        "charset": "utf-8",
        "Accept-Language": "zh-CN,zh",
        "Accept-Encoding": "gzip, deflate"
      }
    };
    debug && (log("\n【debug】=============== 这是  请求 url ==============="), log(JSON.stringify(_0x5608cb)));
    axios.request(_0x5608cb).then(async function (_0x2b61a9) {
      try {
        data = _0x2b61a9.data;
        debug && (log("\n\n【debug】===============这是 返回data=============="), log(JSON.stringify(_0x2b61a9.data)));
        if (data.code == 0) log(data.msg);else log(data.msg);
      } catch (_0x2de07d) {
        log("异常：" + data + "，原因：" + data.msg);
      }
    }).catch(function (_0x43e741) {
      console.error(_0x43e741);
    }).then(_0x573c7a => {
      _0x4b6a4b();
    });
  });
}
async function SliderMode_AloneGap(_0x1ab780, _0x80fe54) {
  return new Promise(_0x4c2042 => {
    var _0x31d046 = {
      "method": "POST",
      "url": "http://" + ocrurl + "/api.Slider_Move",
      "headers": {
        "Accept": "application/json,",
        "Content-Type": "application/json"
      },
      "data": {
        "MovePicture": _0x1ab780,
        "Background": _0x80fe54
      }
    };
    if (debug) {
      log("\n【debug】=============== 这是  请求 url ===============");
      log(JSON.stringify(_0x31d046));
    }
    axios.request(_0x31d046).then(async function (_0x2df950) {
      try {
        data = _0x2df950.data;
        debug && (log("\n\n【debug】===============这是 返回data=============="), log(JSON.stringify(_0x2df950.data)));
        data.result.target_y == 0 && (X = data.result.target[0], log("X坐标：" + X), await toValidate(X));
      } catch (_0x174441) {
        log("异常：" + data + "，原因：" + data.message);
      }
    }).catch(function (_0x299564) {
      console.error(_0x299564);
    }).then(_0x20a6c6 => {
      _0x4c2042();
    });
  });
}
async function getValidateInfo() {
  return new Promise(_0x445bdc => {
    var _0x5bb53c = {
      "method": "get",
      "url": "https://apimallwm.exijiu.com/garden/slide_validate/getValidateInfo",
      "headers": {
        "Authorization": jwt,
        "content-type": " application/json"
      }
    };
    debug && (log("\n【debug】=============== 这是  请求 url ==============="), log(JSON.stringify(_0x5bb53c)));
    axios.request(_0x5bb53c).then(async function (_0x1141db) {
      try {
        data = _0x1141db.data;
        debug && (log("\n\n【debug】===============这是 返回data=============="), log(JSON.stringify(_0x1141db.data)));
        if (data.err == "0" && data.data.status == 1) log(data.msg), jigsawImageBase64 = data.data.datas[0].substr(22), originalImageBase64 = data.data.datas[1].substr(22), await SliderMode_AloneGap(jigsawImageBase64, originalImageBase64);else log(data.msg);
      } catch (_0xc777ee) {
        log("异常：" + data + "，原因：" + data.message);
      }
    }).catch(function (_0x21cad1) {
      console.error(_0x21cad1);
    }).then(_0x36db29 => {
      _0x445bdc();
    });
  });
}
async function toValidate(_0x43f9a0) {
  return new Promise(_0x878460 => {
    var _0x54dfa4 = {
      "method": "POST",
      "url": "https://apimallwm.exijiu.com/garden/slide_validate/toValidate",
      "headers": {
        "Authorization": jwt,
        "content-type": " application/json"
      },
      "data": {
        "coordinate": _0x43f9a0
      }
    };
    debug && (log("\n【debug】=============== 这是  请求 url ==============="), log(JSON.stringify(_0x54dfa4)));
    axios.request(_0x54dfa4).then(async function (_0x3fc3e0) {
      try {
        data = _0x3fc3e0.data;
        debug && (log("\n\n【debug】===============这是 返回data=============="), log(JSON.stringify(_0x3fc3e0.data)));
        if (data.err == 0) {
          log(data.msg);
        } else log(data.msg);
      } catch (_0x14cf42) {
        log("异常：" + data + "，原因：" + data.message);
      }
    }).catch(function (_0x2ec6cf) {
      console.error(_0x2ec6cf);
    }).then(_0x41eb0b => {
      _0x878460();
    });
  });
}
async function getJwt() {
  return new Promise(_0x2cac0c => {
    var _0x38a4c4 = {
      "method": "GET",
      "url": "https://xcx.exijiu.com/anti-channeling/public/index.php/api/v2/Member/getJwt",
      "headers": {
        "Host": "xcx.exijiu.com",
        "Connection": "keep-alive",
        "referer": "https://servicewechat.com/wx489f950decfeb93e/250/page-frame.html",
        "login_code": xjhd,
        "user-agent": "Mozilla/5.0 (Linux; Android 10; PCAM00 Build/QKQ1.190918.001; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/111.0.5563.116 Mobile Safari/537.36 XWEB/5175 MMWEBSDK/20230504 MMWEBID/2125 MicroMessenger/8.0.37.2380(0x2800255B) WeChat/arm64 Weixin NetType/WIFI Language/zh_CN ABI/arm64 MiniProgramEnv/android",
        "Content-Type": "application/json",
        "Accept": "*/*",
        "Sec-Fetch-Site": "cross-site",
        "Sec-Fetch-Mode": "cors",
        "Sec-Fetch-Dest": "empty",
        "Accept-Language": "zh-CN,zh",
        "Accept-Encoding": "gzip, deflate"
      }
    };
    debug && (log("\n【debug】=============== 这是  请求 url ==============="), log(JSON.stringify(_0x38a4c4)));
    axios.request(_0x38a4c4).then(async function (_0x148ea9) {
      try {
        data = _0x148ea9.data;
        if (debug) {
          log("\n\n【debug】===============这是 返回data==============");
          log(JSON.stringify(_0x148ea9.data));
        }
        if (data.code == 0) ids = data.data.member_id, jwt = data.data.jwt, await getValidateInfo();else log(data.msg);
      } catch (_0x5e7ad8) {
        log("异常：" + data + "，原因：" + data.msg);
      }
    }).catch(function (_0x34b902) {
      console.error(_0x34b902);
    }).then(_0x89ed65 => {
      _0x2cac0c();
    });
  });
}
async function hasDataMsCenterUser1() {
  return new Promise(_0x3e8f0f => {
    var _0x42db3a = {
      "method": "GET",
      "url": "https://xcx.exijiu.com/anti-channeling/public/index.php/api/v2/Member/hasDataMsCenterUser",
      "headers": {
        "Host": "xcx.exijiu.com",
        "Connection": "keep-alive",
        "referer": "https://servicewechat.com/wx489f950decfeb93e/250/page-frame.html",
        "login_code": xjhd,
        "user-agent": "Mozilla/5.0 (Linux; Android 10; PCAM00 Build/QKQ1.190918.001; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/111.0.5563.116 Mobile Safari/537.36 XWEB/5175 MMWEBSDK/20230504 MMWEBID/2125 MicroMessenger/8.0.37.2380(0x2800255B) WeChat/arm64 Weixin NetType/WIFI Language/zh_CN ABI/arm64 MiniProgramEnv/android",
        "Content-Type": "application/json",
        "Accept": "*/*",
        "charset": "utf-8",
        "Accept-Language": "zh-CN,zh",
        "Accept-Encoding": "gzip, deflate",
        "Authorization": jwt
      }
    };
    debug && (log("\n【debug】=============== 这是  请求 url ==============="), log(JSON.stringify(_0x42db3a)));
    axios.request(_0x42db3a).then(async function (_0x3ef442) {
      try {
        data = _0x3ef442.data;
        debug && (log("\n\n【debug】===============这是 返回data=============="), log(JSON.stringify(_0x3ef442.data)));
        if (data.code == 0) {
          log(data.msg);
        } else log(data.msg);
      } catch (_0x4238a2) {
        log("异常：" + data + "，原因：" + data.msg);
      }
    }).catch(function (_0x1a4880) {
      console.error(_0x1a4880);
    }).then(_0x4f550a => {
      _0x3e8f0f();
    });
  });
}
async function getJwt1() {
  return new Promise(_0x33aeb0 => {
    var _0xeaef7e = {
      "method": "GET",
      "url": "https://xcx.exijiu.com/anti-channeling/public/index.php/api/v2/Member/getJwt",
      "headers": {
        "Host": "xcx.exijiu.com",
        "Connection": "keep-alive",
        "referer": "https://servicewechat.com/wx489f950decfeb93e/250/page-frame.html",
        "login_code": xjhd,
        "user-agent": "Mozilla/5.0 (Linux; Android 10; PCAM00 Build/QKQ1.190918.001; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/111.0.5563.116 Mobile Safari/537.36 XWEB/5175 MMWEBSDK/20230504 MMWEBID/2125 MicroMessenger/8.0.37.2380(0x2800255B) WeChat/arm64 Weixin NetType/WIFI Language/zh_CN ABI/arm64 MiniProgramEnv/android",
        "Content-Type": "application/json",
        "Accept": "*/*",
        "Sec-Fetch-Site": "cross-site",
        "Sec-Fetch-Mode": "cors",
        "Sec-Fetch-Dest": "empty",
        "Accept-Language": "zh-CN,zh",
        "Accept-Encoding": "gzip, deflate",
        "Authorization": jwt
      }
    };
    debug && (log("\n【debug】=============== 这是  请求 url ==============="), log(JSON.stringify(_0xeaef7e)));
    axios.request(_0xeaef7e).then(async function (_0x3d0903) {
      try {
        data = _0x3d0903.data;
        if (debug) {
          log("\n\n【debug】===============这是 返回data==============");
          log(JSON.stringify(_0x3d0903.data));
        }
        if (data.code == 0) ids = data.data.member_id, xjauth = data.data.jwt;else log(data.msg);
      } catch (_0x546483) {
        log("异常：" + data + "，原因：" + data.msg);
      }
    }).catch(function (_0x392739) {
      console.error(_0x392739);
    }).then(_0x5e25bb => {
      _0x33aeb0();
    });
  });
}
async function sorghumindex() {
  return new Promise(_0x3b7cab => {
    var _0xc085b6 = {
      "method": "GET",
      "url": "https://apimallwm.exijiu.com/garden/sorghum/index",
      "headers": {
        "Connection": "keep-alive",
        "referer": "https://servicewechat.com/wx489f950decfeb93e/250/page-frame.html",
        "login_code": xjhd,
        "user-agent": "Mozilla/5.0 (Linux; Android 10; PCAM00 Build/QKQ1.190918.001; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/111.0.5563.116 Mobile Safari/537.36 XWEB/5175 MMWEBSDK/20230504 MMWEBID/2125 MicroMessenger/8.0.37.2380(0x2800255B) WeChat/arm64 Weixin NetType/WIFI Language/zh_CN ABI/arm64 MiniProgramEnv/android",
        "Content-Type": "application/json",
        "Accept": "*/*",
        "Sec-Fetch-Site": "cross-site",
        "Sec-Fetch-Mode": "cors",
        "Sec-Fetch-Dest": "empty",
        "Accept-Language": "zh-CN,zh",
        "Accept-Encoding": "gzip, deflate",
        "Authorization": xjauth
      }
    };
    debug && (log("\n【debug】=============== 这是  请求 url ==============="), log(JSON.stringify(_0xc085b6)));
    axios.request(_0xc085b6).then(async function (_0x335241) {
      try {
        data = _0x335241.data;
        debug && (log("\n\n【debug】===============这是 返回data=============="), log(JSON.stringify(_0x335241.data)));
        if (data.err == 0) indexlist = data.data;else log(data.msg);
      } catch (_0x120550) {
        log("异常：" + data + "，原因：" + data.msg);
      }
    }).catch(function (_0x444ac6) {
      console.error(_0x444ac6);
    }).then(_0x134e14 => {
      _0x3b7cab();
    });
  });
}
async function getMemberInfo() {
  return new Promise(_0x38f59e => {
    var _0x28e421 = {
      "method": "GET",
      "url": "https://apimallwm.exijiu.com/garden/Gardenmemberinfo/getMemberInfo",
      "headers": {
        "Connection": "keep-alive",
        "referer": "https://servicewechat.com/wx489f950decfeb93e/250/page-frame.html",
        "login_code": xjhd,
        "user-agent": "Mozilla/5.0 (Linux; Android 10; PCAM00 Build/QKQ1.190918.001; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/111.0.5563.116 Mobile Safari/537.36 XWEB/5175 MMWEBSDK/20230504 MMWEBID/2125 MicroMessenger/8.0.37.2380(0x2800255B) WeChat/arm64 Weixin NetType/WIFI Language/zh_CN ABI/arm64 MiniProgramEnv/android",
        "Content-Type": "application/json",
        "Accept": "*/*",
        "Sec-Fetch-Site": "cross-site",
        "Sec-Fetch-Mode": "cors",
        "Sec-Fetch-Dest": "empty",
        "Accept-Language": "zh-CN,zh",
        "Accept-Encoding": "gzip, deflate",
        "Authorization": xjauth
      }
    };
    debug && (log("\n【debug】=============== 这是  请求 url ==============="), log(JSON.stringify(_0x28e421)));
    axios.request(_0x28e421).then(async function (_0x55f0d4) {
      try {
        data = _0x55f0d4.data;
        debug && (log("\n\n【debug】===============这是 返回data=============="), log(JSON.stringify(_0x55f0d4.data)));
        if (data.err == 0) {
          log("积分：" + data.data.integration);
          msg += "\n积分：" + data.data.integration;
          water = data.data.water;
          manure = data.data.manure;
          sorghum = data.data.sorghum;
          wheat = data.data.wheat;
          wine_yeast = data.data.wine_yeast;
          wine = data.data.wine;
          log("高粱：" + sorghum);
          log("小麦：" + wheat);
          log("肥料：" + manure);
          log("酒曲：" + wine_yeast);
          log("水：" + water);
          log("酒：" + wine);
          msg += "\n高粱：" + sorghum + "\n小麦：" + wheat + "\n肥料：" + manure + "\n酒曲：" + wine_yeast + "\n水：" + water + "\n酒：" + wine;
          for (i in indexlist) {
            if (indexlist[i].status !== -1) {
              id = indexlist[i].id;
              member_id = indexlist[i].member_id;
              volumn = indexlist[i].volumn;
              water_num = indexlist[i].water_num;
              create_time = indexlist[i].create_time;
              crop_time = indexlist[i].crop_time;
              serial_number = indexlist[i].serial_number;
              statuss = indexlist[i].status;
              type = indexlist[i].type;
              if (type == 1) log(serial_number + "号田" + " 高粱 \n种植时间：" + create_time + "\n成熟时间：" + crop_time), msg += "\n" + serial_number + "号田" + " 高粱 \n种植时间：" + create_time + "\n成熟时间：" + crop_time;else {
                if (type == 2) {
                  log(serial_number + "号田" + " 小麦 \n种植时间：" + create_time + "\n成熟时间：" + crop_time);
                  msg += "\n" + serial_number + "号田" + " 小麦 \n种植时间：" + create_time + "\n成熟时间：" + crop_time;
                }
              }
              log("id:" + id + "\nmember_id：" + member_id);
              if (water > 0) {
                for (let _0x489d03 = 0; _0x489d03 < water; _0x489d03++) {
                  await watering(id);
                  if (_0x489d03 == 10) break;
                }
              }
              statuss == 2 && (await harvestAll());
              if (statuss !== 11 && statuss !== 10) {
                if (wine_yeast == 0) await statistics(), await statistics1(136), await statistics1(114), await seed(id, 2);else await statistics();
                await statistics1(136);
                await statistics1(114);
                await seed(id, 1);
              }
            }
          }
          wine > 0 && (await exchange(wine));
          wheat >= 100 && (await makeWineYeast());
          await gardenmemberwine();
          total == 0 && sorghum >= 200 && wine_yeast > 0 && (await makeWine());
        } else log(data.msg);
      } catch (_0x5aeac0) {
        log("异常：" + data + "，原因：" + data.msg);
      }
    }).catch(function (_0x22a9d8) {
      console.error(_0x22a9d8);
    }).then(_0x12509d => {
      _0x38f59e();
    });
  });
}
async function dailySign() {
  return new Promise(_0x154400 => {
    var _0x5483c6 = {
      "method": "POST",
      "url": "https://apimallwm.exijiu.com/garden/sign/dailySign",
      "headers": {
        "Connection": "keep-alive",
        "referer": "https://servicewechat.com/wx489f950decfeb93e/250/page-frame.html",
        "login_code": xjhd,
        "user-agent": "Mozilla/5.0 (Linux; Android 10; PCAM00 Build/QKQ1.190918.001; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/111.0.5563.116 Mobile Safari/537.36 XWEB/5175 MMWEBSDK/20230504 MMWEBID/2125 MicroMessenger/8.0.37.2380(0x2800255B) WeChat/arm64 Weixin NetType/WIFI Language/zh_CN ABI/arm64 MiniProgramEnv/android",
        "Content-Type": "application/json",
        "Accept": "*/*",
        "Sec-Fetch-Site": "cross-site",
        "Sec-Fetch-Mode": "cors",
        "Sec-Fetch-Dest": "empty",
        "Accept-Language": "zh-CN,zh",
        "Accept-Encoding": "gzip, deflate",
        "Authorization": xjauth
      },
      "data": {}
    };
    debug && (log("\n【debug】=============== 这是  请求 url ==============="), log(JSON.stringify(_0x5483c6)));
    axios.request(_0x5483c6).then(async function (_0x1c5fcd) {
      try {
        data = _0x1c5fcd.data;
        debug && (log("\n\n【debug】===============这是 返回data=============="), log(JSON.stringify(_0x1c5fcd.data)));
        if (data.err == 0) {
          if (data.data.isTodayFirstSign == false) log("今日已签到");else data.data.isTodayFirstSign == true && (log("签到"), await Sign());
        } else log(data.msg);
      } catch (_0x452ca1) {
        log("异常：" + data + "，原因：" + data.msg);
      }
    }).catch(function (_0x305221) {
      console.error(_0x305221);
    }).then(_0x130f83 => {
      _0x154400();
    });
  });
}
async function Sign() {
  return new Promise(_0x20070d => {
    var _0x4cccec = {
      "method": "POST",
      "url": "https://apimallwm.exijiu.com/member/signin/sign",
      "headers": {
        "Connection": "keep-alive",
        "referer": "https://servicewechat.com/wx489f950decfeb93e/250/page-frame.html",
        "login_code": xjhd,
        "user-agent": "Mozilla/5.0 (Linux; Android 10; PCAM00 Build/QKQ1.190918.001; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/111.0.5563.116 Mobile Safari/537.36 XWEB/5175 MMWEBSDK/20230504 MMWEBID/2125 MicroMessenger/8.0.37.2380(0x2800255B) WeChat/arm64 Weixin NetType/WIFI Language/zh_CN ABI/arm64 MiniProgramEnv/android",
        "Content-Type": "application/json",
        "Accept": "*/*",
        "Sec-Fetch-Site": "cross-site",
        "Sec-Fetch-Mode": "cors",
        "Sec-Fetch-Dest": "empty",
        "Accept-Language": "zh-CN,zh",
        "Accept-Encoding": "gzip, deflate",
        "Authorization": xjauth
      },
      "data": "from=miniprogram_index"
    };
    if (debug) {
      log("\n【debug】=============== 这是  请求 url ===============");
      log(JSON.stringify(_0x4cccec));
    }
    axios.request(_0x4cccec).then(async function (_0x400989) {
      try {
        data = _0x400989.data;
        debug && (log("\n\n【debug】===============这是 返回data=============="), log(JSON.stringify(_0x400989.data)));
        if (data.err == 0) log("signin：" + data.msg);else log(data.msg);
      } catch (_0xe64e27) {
        log("异常：" + data + "，原因：" + data.msg);
      }
    }).catch(function (_0x43d2a6) {
      console.error(_0x43d2a6);
    }).then(_0x558789 => {
      _0x20070d();
    });
  });
}
async function tasks() {
  return new Promise(_0x36d2a2 => {
    var _0x17087a = {
      "method": "GET",
      "url": "https://apimallwm.exijiu.com/garden/tasks/index",
      "headers": {
        "Connection": "keep-alive",
        "referer": "https://servicewechat.com/wx489f950decfeb93e/250/page-frame.html",
        "login_code": xjhd,
        "user-agent": "Mozilla/5.0 (Linux; Android 10; PCAM00 Build/QKQ1.190918.001; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/111.0.5563.116 Mobile Safari/537.36 XWEB/5175 MMWEBSDK/20230504 MMWEBID/2125 MicroMessenger/8.0.37.2380(0x2800255B) WeChat/arm64 Weixin NetType/WIFI Language/zh_CN ABI/arm64 MiniProgramEnv/android",
        "Content-Type": "application/json",
        "Accept": "*/*",
        "Sec-Fetch-Site": "cross-site",
        "Sec-Fetch-Mode": "cors",
        "Sec-Fetch-Dest": "empty",
        "Accept-Language": "zh-CN,zh",
        "Accept-Encoding": "gzip, deflate",
        "Authorization": xjauth
      }
    };
    debug && (log("\n【debug】=============== 这是  请求 url ==============="), log(JSON.stringify(_0x17087a)));
    axios.request(_0x17087a).then(async function (_0x105351) {
      try {
        data = _0x105351.data;
        debug && (log("\n\n【debug】===============这是 返回data=============="), log(JSON.stringify(_0x105351.data)));
        if (data.err == 0) {
          if (data.data[0].is_complete == 1) log("今日已答题");else data.data[0].is_complete == 0 && (await questiontask());
          await dailyShare();
          if (data.data[2].is_complete == 1) log("今日已查看");else data.data[2].is_complete == 0 && (await realscene());
        } else log(data.msg);
      } catch (_0x3a8d7a) {
        log("异常：" + data + "，原因：" + data.msg);
      }
    }).catch(function (_0x10c0b8) {
      console.error(_0x10c0b8);
    }).then(_0x34200e => {
      _0x36d2a2();
    });
  });
}
async function questiontask() {
  return new Promise(_0x3cd3fa => {
    var _0x286558 = {
      "method": "GET",
      "url": "https://apimallwm.exijiu.com/garden/Gardenquestiontask/index",
      "headers": {
        "Connection": "keep-alive",
        "referer": "https://servicewechat.com/wx489f950decfeb93e/250/page-frame.html",
        "login_code": xjhd,
        "user-agent": "Mozilla/5.0 (Linux; Android 10; PCAM00 Build/QKQ1.190918.001; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/111.0.5563.116 Mobile Safari/537.36 XWEB/5175 MMWEBSDK/20230504 MMWEBID/2125 MicroMessenger/8.0.37.2380(0x2800255B) WeChat/arm64 Weixin NetType/WIFI Language/zh_CN ABI/arm64 MiniProgramEnv/android",
        "Content-Type": "application/json",
        "Accept": "*/*",
        "Sec-Fetch-Site": "cross-site",
        "Sec-Fetch-Mode": "cors",
        "Sec-Fetch-Dest": "empty",
        "Accept-Language": "zh-CN,zh",
        "Accept-Encoding": "gzip, deflate",
        "Authorization": xjauth
      }
    };
    debug && (log("\n【debug】=============== 这是  请求 url ==============="), log(JSON.stringify(_0x286558)));
    axios.request(_0x286558).then(async function (_0xc949f7) {
      try {
        data = _0xc949f7.data;
        debug && (log("\n\n【debug】===============这是 返回data=============="), log(JSON.stringify(_0xc949f7.data)));
        if (data.err == 0) {
          ansid = data.data[0].id;
          answer = data.data[0].answer;
          console.log(data.data[0].title);
          console.log("答案为：" + answer);
          await answerResults(ansid, answer);
        } else log(data.msg);
      } catch (_0x152b72) {
        log("异常：" + data + "，原因：" + data.msg);
      }
    }).catch(function (_0x108a89) {
      console.error(_0x108a89);
    }).then(_0x5a3778 => {
      _0x3cd3fa();
    });
  });
}
async function answerResults(_0xdd2f38, _0x59861a) {
  return new Promise(_0x2c750b => {
    var _0x35221d = {
      "method": "GET",
      "url": "https://apimallwm.exijiu.com/garden/Gardenquestiontask/answerResults?answer=%5B%7B%22itemid%22%3A" + _0xdd2f38 + "%2C%22selected%22%3A%22" + _0x59861a + "%22%7D%5D",
      "headers": {
        "Connection": "keep-alive",
        "referer": "https://servicewechat.com/wx489f950decfeb93e/250/page-frame.html",
        "login_code": xjhd,
        "user-agent": "Mozilla/5.0 (Linux; Android 10; PCAM00 Build/QKQ1.190918.001; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/111.0.5563.116 Mobile Safari/537.36 XWEB/5175 MMWEBSDK/20230504 MMWEBID/2125 MicroMessenger/8.0.37.2380(0x2800255B) WeChat/arm64 Weixin NetType/WIFI Language/zh_CN ABI/arm64 MiniProgramEnv/android",
        "Content-Type": "application/json",
        "Accept": "*/*",
        "Sec-Fetch-Site": "cross-site",
        "Sec-Fetch-Mode": "cors",
        "Sec-Fetch-Dest": "empty",
        "Accept-Language": "zh-CN,zh",
        "Accept-Encoding": "gzip, deflate",
        "Authorization": xjauth
      }
    };
    debug && (log("\n【debug】=============== 这是  请求 url ==============="), log(JSON.stringify(_0x35221d)));
    axios.request(_0x35221d).then(async function (_0x3e1216) {
      try {
        data = _0x3e1216.data;
        debug && (log("\n\n【debug】===============这是 返回data=============="), log(JSON.stringify(_0x3e1216.data)));
        if (data.err == 0) console.log("答题：" + data.msg);else log(data.msg);
      } catch (_0xadae6c) {
        log("异常：" + data + "，原因：" + data.msg);
      }
    }).catch(function (_0x2f814b) {
      console.error(_0x2f814b);
    }).then(_0xd812 => {
      _0x2c750b();
    });
  });
}
async function dailyShare() {
  return new Promise(_0x33c9b7 => {
    var _0x4d186d = {
      "method": "POST",
      "url": "https://apimallwm.exijiu.com/garden/gardenmemberinfo/dailyShare",
      "headers": {
        "Connection": "keep-alive",
        "referer": "https://servicewechat.com/wx489f950decfeb93e/250/page-frame.html",
        "login_code": xjhd,
        "user-agent": "Mozilla/5.0 (Linux; Android 10; PCAM00 Build/QKQ1.190918.001; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/111.0.5563.116 Mobile Safari/537.36 XWEB/5175 MMWEBSDK/20230504 MMWEBID/2125 MicroMessenger/8.0.37.2380(0x2800255B) WeChat/arm64 Weixin NetType/WIFI Language/zh_CN ABI/arm64 MiniProgramEnv/android",
        "Content-Type": "application/x-www-form-urlencoded",
        "Accept": "*/*",
        "Sec-Fetch-Site": "cross-site",
        "Sec-Fetch-Mode": "cors",
        "Sec-Fetch-Dest": "empty",
        "Accept-Language": "zh-CN,zh",
        "Accept-Encoding": "gzip, deflate",
        "Authorization": xjauth,
        "Accept": "application/json, text/plain, */*"
      },
      "data": {}
    };
    debug && (log("\n【debug】=============== 这是  请求 url ==============="), log(JSON.stringify(_0x4d186d)));
    axios.request(_0x4d186d).then(async function (_0x5ebc8d) {
      try {
        data = _0x5ebc8d.data;
        debug && (log("\n\n【debug】===============这是 返回data=============="), log(JSON.stringify(_0x5ebc8d.data)));
        if (data.err == 0) console.log("分享：" + data.msg);else log(data.msg);
      } catch (_0x214ebe) {
        log("" + data.msg);
      }
    }).catch(function (_0x316083) {
      console.error(_0x316083);
    }).then(_0xbe26f1 => {
      _0x33c9b7();
    });
  });
}
async function realscene() {
  return new Promise(_0x35650a => {
    var _0x284d0a = {
      "method": "GET",
      "url": "https://apimallwm.exijiu.com/garden/realscene/reward",
      "headers": {
        "Connection": "keep-alive",
        "referer": "https://servicewechat.com/wx489f950decfeb93e/250/page-frame.html",
        "login_code": xjhd,
        "user-agent": "Mozilla/5.0 (Linux; Android 10; PCAM00 Build/QKQ1.190918.001; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/111.0.5563.116 Mobile Safari/537.36 XWEB/5175 MMWEBSDK/20230504 MMWEBID/2125 MicroMessenger/8.0.37.2380(0x2800255B) WeChat/arm64 Weixin NetType/WIFI Language/zh_CN ABI/arm64 MiniProgramEnv/android",
        "Content-Type": "application/json",
        "Accept": "*/*",
        "Sec-Fetch-Site": "cross-site",
        "Sec-Fetch-Mode": "cors",
        "Sec-Fetch-Dest": "empty",
        "Accept-Language": "zh-CN,zh",
        "Accept-Encoding": "gzip, deflate",
        "Authorization": xjauth
      }
    };
    debug && (log("\n【debug】=============== 这是  请求 url ==============="), log(JSON.stringify(_0x284d0a)));
    axios.request(_0x284d0a).then(async function (_0x3a6c8b) {
      try {
        data = _0x3a6c8b.data;
        debug && (log("\n\n【debug】===============这是 返回data=============="), log(JSON.stringify(_0x3a6c8b.data)));
        if (data.err == 0) console.log("查看：" + data.msg);else log(data.msg);
      } catch (_0x2f03ad) {
        log("异常：" + data + "，原因：" + data.msg);
      }
    }).catch(function (_0x528d97) {
      console.error(_0x528d97);
    }).then(_0x5ed53a => {
      _0x35650a();
    });
  });
}
async function harvestAll() {
  return new Promise(_0x4b0d41 => {
    var _0x45d3fa = {
      "method": "GET",
      "url": "https://apimallwm.exijiu.com/garden/Sorghum/harvestAll",
      "headers": {
        "Connection": "keep-alive",
        "referer": "https://servicewechat.com/wx489f950decfeb93e/250/page-frame.html",
        "login_code": xjhd,
        "user-agent": "Mozilla/5.0 (Linux; Android 10; PCAM00 Build/QKQ1.190918.001; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/111.0.5563.116 Mobile Safari/537.36 XWEB/5175 MMWEBSDK/20230504 MMWEBID/2125 MicroMessenger/8.0.37.2380(0x2800255B) WeChat/arm64 Weixin NetType/WIFI Language/zh_CN ABI/arm64 MiniProgramEnv/android",
        "Content-Type": "application/json",
        "Accept": "*/*",
        "Sec-Fetch-Site": "cross-site",
        "Sec-Fetch-Mode": "cors",
        "Sec-Fetch-Dest": "empty",
        "Accept-Language": "zh-CN,zh",
        "Accept-Encoding": "gzip, deflate",
        "Authorization": xjauth
      }
    };
    debug && (log("\n【debug】=============== 这是  请求 url ==============="), log(JSON.stringify(_0x45d3fa)));
    axios.request(_0x45d3fa).then(async function (_0x4d06d8) {
      try {
        data = _0x4d06d8.data;
        debug && (log("\n\n【debug】===============这是 返回data=============="), log(JSON.stringify(_0x4d06d8.data)));
        if (data.err == 0) console.log("收取：" + data.msg), msg += "\n收取：" + data.msg;else log(data.msg);
      } catch (_0x1c7adf) {
        log("异常：" + data + "，原因：" + data.msg);
      }
    }).catch(function (_0x23a57f) {
      console.error(_0x23a57f);
    }).then(_0x4a1b68 => {
      _0x4b0d41();
    });
  });
}
async function watering(_0x4a64d6) {
  return new Promise(_0x1b0198 => {
    var _0x1bde52 = {
      "method": "POST",
      "url": "https://apimallwm.exijiu.com/garden/sorghum/watering",
      "headers": {
        "Connection": "keep-alive",
        "referer": "https://servicewechat.com/wx489f950decfeb93e/250/page-frame.html",
        "login_code": xjhd,
        "user-agent": "Mozilla/5.0 (Linux; Android 10; PCAM00 Build/QKQ1.190918.001; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/111.0.5563.116 Mobile Safari/537.36 XWEB/5175 MMWEBSDK/20230504 MMWEBID/2125 MicroMessenger/8.0.37.2380(0x2800255B) WeChat/arm64 Weixin NetType/WIFI Language/zh_CN ABI/arm64 MiniProgramEnv/android",
        "Content-Type": "application/json",
        "Accept": "*/*",
        "Sec-Fetch-Site": "cross-site",
        "Sec-Fetch-Mode": "cors",
        "Sec-Fetch-Dest": "empty",
        "Accept-Language": "zh-CN,zh",
        "Accept-Encoding": "gzip, deflate",
        "Authorization": xjauth
      },
      "data": {
        "id": _0x4a64d6
      }
    };
    if (debug) {
      log("\n【debug】=============== 这是  请求 url ===============");
      log(JSON.stringify(_0x1bde52));
    }
    axios.request(_0x1bde52).then(async function (_0x234075) {
      try {
        data = _0x234075.data;
        debug && (log("\n\n【debug】===============这是 返回data=============="), log(JSON.stringify(_0x234075.data)));
        if (data.err == 0) console.log("浇水：" + data.msg), data.data.status == 2 && (await statistics(), await statistics1(136), await statistics1(114), await harvestAll());else {
          if (data.err == 4032) {
            if (data.data.status !== 11 && data.data.status !== 10) {
              if (data.total == 0) {
                if (wine_yeast == 0) await statistics(), await statistics1(136), await statistics1(114), await seed(id, 2);else await statistics();
                await statistics1(136);
                await statistics1(114);
                await seed(id, 1);
              }
            }
          } else log(data.msg);
        }
      } catch (_0x29b9b7) {
        log("异常：" + data + "，原因：" + data.msg);
      }
    }).catch(function (_0x37669a) {
      console.error(_0x37669a);
    }).then(_0x405a1d => {
      _0x1b0198();
    });
  });
}
async function makeWineYeast() {
  return new Promise(_0xd1d06a => {
    var _0x2cec73 = {
      "method": "POST",
      "url": "https://apimallwm.exijiu.com/garden/wheat/makeWineYeast",
      "headers": {
        "Connection": "keep-alive",
        "referer": "https://servicewechat.com/wx489f950decfeb93e/250/page-frame.html",
        "login_code": xjhd,
        "user-agent": "Mozilla/5.0 (Linux; Android 10; PCAM00 Build/QKQ1.190918.001; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/111.0.5563.116 Mobile Safari/537.36 XWEB/5175 MMWEBSDK/20230504 MMWEBID/2125 MicroMessenger/8.0.37.2380(0x2800255B) WeChat/arm64 Weixin NetType/WIFI Language/zh_CN ABI/arm64 MiniProgramEnv/android",
        "Content-Type": "application/x-www-form-urlencoded",
        "Accept": "*/*",
        "Sec-Fetch-Site": "cross-site",
        "Sec-Fetch-Mode": "cors",
        "Sec-Fetch-Dest": "empty",
        "Accept-Language": "zh-CN,zh",
        "Accept-Encoding": "gzip, deflate",
        "Authorization": xjauth,
        "Accept": "application/json, text/plain, */*"
      },
      "data": "volumn=100"
    };
    if (debug) {
      log("\n【debug】=============== 这是  请求 url ===============");
      log(JSON.stringify(_0x2cec73));
    }
    axios.request(_0x2cec73).then(async function (_0x365ffa) {
      try {
        data = _0x365ffa.data;
        debug && (log("\n\n【debug】===============这是 返回data=============="), log(JSON.stringify(_0x365ffa.data)));
        if (data.err == 0) console.log("制曲：" + data.msg), msg += "\n制曲：" + data.msg;else log(data.msg);
      } catch (_0x93c39b) {
        log("异常：" + data + "，原因：" + data.msg);
      }
    }).catch(function (_0xb45820) {
      console.error(_0xb45820);
    }).then(_0x2fdbc4 => {
      _0xd1d06a();
    });
  });
}
async function makeWine() {
  return new Promise(_0x46064d => {
    if (sorghum >= 5000 && wine_yeast >= 25) canmake = 5000;else {
      if (isPositiveIntegerTimes(getIntegerTimes(sorghum, 200)) == true) canmake = sorghum;else canmake = 200;
    }
    var _0x703e9d = {
      "method": "POST",
      "url": "https://apimallwm.exijiu.com/garden/gardenmemberwine/makeWine",
      "headers": {
        "Connection": "keep-alive",
        "referer": "https://servicewechat.com/wx489f950decfeb93e/250/page-frame.html",
        "login_code": xjhd,
        "user-agent": "Mozilla/5.0 (Linux; Android 10; PCAM00 Build/QKQ1.190918.001; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/111.0.5563.116 Mobile Safari/537.36 XWEB/5175 MMWEBSDK/20230504 MMWEBID/2125 MicroMessenger/8.0.37.2380(0x2800255B) WeChat/arm64 Weixin NetType/WIFI Language/zh_CN ABI/arm64 MiniProgramEnv/android",
        "Content-Type": "application/x-www-form-urlencoded",
        "Accept": "*/*",
        "Sec-Fetch-Site": "cross-site",
        "Sec-Fetch-Mode": "cors",
        "Sec-Fetch-Dest": "empty",
        "Accept-Language": "zh-CN,zh",
        "Accept-Encoding": "gzip, deflate",
        "Authorization": xjauth,
        "Accept": "application/json, text/plain, */*"
      },
      "data": "volumn=" + canmake
    };
    debug && (log("\n【debug】=============== 这是  请求 url ==============="), log(JSON.stringify(_0x703e9d)));
    axios.request(_0x703e9d).then(async function (_0x59e891) {
      try {
        data = _0x59e891.data;
        debug && (log("\n\n【debug】===============这是 返回data=============="), log(JSON.stringify(_0x59e891.data)));
        if (data.err == 0) console.log("制酒：" + data.msg), msg += "\n制酒：" + data.msg;else log(data.msg);
      } catch (_0x365088) {
        log("异常：" + data + "，原因：" + data.msg);
      }
    }).catch(function (_0x15b439) {
      console.error(_0x15b439);
    }).then(_0x3fcc1c => {
      _0x46064d();
    });
  });
}
async function seed(_0x497f84, _0x148147) {
  return new Promise(_0xff6ba9 => {
    var _0x434263 = {
      "method": "POST",
      "url": "https://apimallwm.exijiu.com/garden/sorghum/seed",
      "headers": {
        "Connection": "keep-alive",
        "referer": "https://servicewechat.com/wx489f950decfeb93e/250/page-frame.html",
        "login_code": xjhd,
        "user-agent": "Mozilla/5.0 (Linux; Android 10; PCAM00 Build/QKQ1.190918.001; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/111.0.5563.116 Mobile Safari/537.36 XWEB/5175 MMWEBSDK/20230504 MMWEBID/2125 MicroMessenger/8.0.37.2380(0x2800255B) WeChat/arm64 Weixin NetType/WIFI Language/zh_CN ABI/arm64 MiniProgramEnv/android",
        "Content-Type": "application/x-www-form-urlencoded",
        "Accept": "*/*",
        "Sec-Fetch-Site": "cross-site",
        "Sec-Fetch-Mode": "cors",
        "Sec-Fetch-Dest": "empty",
        "Accept-Language": "zh-CN,zh",
        "Accept-Encoding": "gzip, deflate",
        "Authorization": xjauth,
        "Accept": "application/json, text/plain, */*"
      },
      "data": {
        "id": _0x497f84,
        "type": _0x148147
      }
    };
    debug && (log("\n【debug】=============== 这是  请求 url ==============="), log(JSON.stringify(_0x434263)));
    axios.request(_0x434263).then(async function (_0x203819) {
      try {
        data = _0x203819.data;
        debug && (log("\n\n【debug】===============这是 返回data=============="), log(JSON.stringify(_0x203819.data)));
        if (data.err == 0) console.log("种植：" + data.msg), msg += "\n种植：" + data.msg;else log(data.msg);
      } catch (_0x4abec9) {
        log("异常：" + data + "，原因：" + data.msg);
      }
    }).catch(function (_0x4cb5dd) {
      console.error(_0x4cb5dd);
    }).then(_0x117da3 => {
      _0xff6ba9();
    });
  });
}
async function exchange(_0x26c311) {
  return new Promise(_0x55c23d => {
    var _0x13bb05 = {
      "method": "GET",
      "url": "https://apimallwm.exijiu.com/garden/Gardenjifenshop/exchange?wine=" + _0x26c311,
      "headers": {
        "Connection": "keep-alive",
        "referer": "https://servicewechat.com/wx489f950decfeb93e/250/page-frame.html",
        "login_code": xjhd,
        "user-agent": "Mozilla/5.0 (Linux; Android 10; PCAM00 Build/QKQ1.190918.001; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/111.0.5563.116 Mobile Safari/537.36 XWEB/5175 MMWEBSDK/20230504 MMWEBID/2125 MicroMessenger/8.0.37.2380(0x2800255B) WeChat/arm64 Weixin NetType/WIFI Language/zh_CN ABI/arm64 MiniProgramEnv/android",
        "Content-Type": "application/json",
        "Accept": "*/*",
        "Sec-Fetch-Site": "cross-site",
        "Sec-Fetch-Mode": "cors",
        "Sec-Fetch-Dest": "empty",
        "Accept-Language": "zh-CN,zh",
        "Accept-Encoding": "gzip, deflate",
        "Authorization": xjauth
      }
    };
    debug && (log("\n【debug】=============== 这是  请求 url ==============="), log(JSON.stringify(_0x13bb05)));
    axios.request(_0x13bb05).then(async function (_0x4d56ba) {
      try {
        data = _0x4d56ba.data;
        debug && (log("\n\n【debug】===============这是 返回data=============="), log(JSON.stringify(_0x4d56ba.data)));
        if (data.err == 0) console.log("积分：" + data.msg), msg += "\n积分：" + data.msg;else log(data.msg);
      } catch (_0x40fa51) {
        log("异常：" + data + "，原因：" + data.msg);
      }
    }).catch(function (_0x548787) {
      console.error(_0x548787);
    }).then(_0x84bd12 => {
      _0x55c23d();
    });
  });
}
async function recommend() {
  return new Promise(_0x4668ed => {
    var _0x3f8de3 = {
      "method": "GET",
      "url": "https://apimallwm.exijiu.com/member/recommend/personal_center?phone_no=17683989907",
      "headers": {
        "Connection": "keep-alive",
        "referer": "https://servicewechat.com/wx489f950decfeb93e/250/page-frame.html",
        "login_code": xjhd,
        "user-agent": "Mozilla/5.0 (Linux; Android 10; PCAM00 Build/QKQ1.190918.001; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/111.0.5563.116 Mobile Safari/537.36 XWEB/5175 MMWEBSDK/20230504 MMWEBID/2125 MicroMessenger/8.0.37.2380(0x2800255B) WeChat/arm64 Weixin NetType/WIFI Language/zh_CN ABI/arm64 MiniProgramEnv/android",
        "Content-Type": "application/json",
        "Accept": "*/*",
        "Sec-Fetch-Site": "cross-site",
        "Sec-Fetch-Mode": "cors",
        "Sec-Fetch-Dest": "empty",
        "Accept-Language": "zh-CN,zh",
        "Accept-Encoding": "gzip, deflate",
        "Authorization": xjauth
      }
    };
    debug && (log("\n【debug】=============== 这是  请求 url ==============="), log(JSON.stringify(_0x3f8de3)));
    axios.request(_0x3f8de3).then(async function (_0x378f8e) {
      try {
        data = _0x378f8e.data;
        debug && (log("\n\n【debug】===============这是 返回data=============="), log(JSON.stringify(_0x378f8e.data)));
        if (data.err == 0) {}
      } catch (_0x1e1e58) {
        log("异常：" + data + "，原因：" + data.msg);
      }
    }).catch(function (_0xb564c) {
      console.error(_0xb564c);
    }).then(_0x5ea11e => {
      _0x4668ed();
    });
  });
}
async function gardenmemberwine() {
  return new Promise(_0x2fff16 => {
    var _0x5ba861 = {
      "method": "GET",
      "url": "https://apimallwm.exijiu.com/garden/Gardenmemberwine/index",
      "headers": {
        "Connection": "keep-alive",
        "referer": "https://servicewechat.com/wx489f950decfeb93e/250/page-frame.html",
        "login_code": xjhd,
        "user-agent": "Mozilla/5.0 (Linux; Android 10; PCAM00 Build/QKQ1.190918.001; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/111.0.5563.116 Mobile Safari/537.36 XWEB/5175 MMWEBSDK/20230504 MMWEBID/2125 MicroMessenger/8.0.37.2380(0x2800255B) WeChat/arm64 Weixin NetType/WIFI Language/zh_CN ABI/arm64 MiniProgramEnv/android",
        "Content-Type": "application/json",
        "Accept": "*/*",
        "Sec-Fetch-Site": "cross-site",
        "Sec-Fetch-Mode": "cors",
        "Sec-Fetch-Dest": "empty",
        "Accept-Language": "zh-CN,zh",
        "Accept-Encoding": "gzip, deflate",
        "Authorization": xjauth
      }
    };
    debug && (log("\n【debug】=============== 这是  请求 url ==============="), log(JSON.stringify(_0x5ba861)));
    axios.request(_0x5ba861).then(async function (_0x4ac27b) {
      try {
        data = _0x4ac27b.data;
        debug && (log("\n\n【debug】===============这是 返回data=============="), log(JSON.stringify(_0x4ac27b.data)));
        if (data.err == 0) {
          total = data.total;
          total == 1 && (volumns = data.data[0].volumn, log("酿酒成熟时间：" + data.data[0].crop_time), msg += "\n酿酒成熟时间：" + data.data[0].crop_time, data.data[0].status == 4 && (await harvestWine(data.data[0].id), sorghum >= 200 && wine_yeast > 0 && (await makeWine())));
        }
      } catch (_0x2bce51) {
        log("异常：" + data + "，原因：" + data.msg);
      }
    }).catch(function (_0x560862) {
      console.error(_0x560862);
    }).then(_0xcd754f => {
      _0x2fff16();
    });
  });
}
async function harvestWine(_0x2e888f) {
  return new Promise(_0x1cc309 => {
    var _0x56d3e1 = {
      "method": "GET",
      "url": "https://apimallwm.exijiu.com/garden/gardenmemberwine/harvestWine?id=" + _0x2e888f,
      "headers": {
        "Connection": "keep-alive",
        "referer": "https://servicewechat.com/wx489f950decfeb93e/250/page-frame.html",
        "login_code": xjhd,
        "user-agent": "Mozilla/5.0 (Linux; Android 10; PCAM00 Build/QKQ1.190918.001; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/111.0.5563.116 Mobile Safari/537.36 XWEB/5175 MMWEBSDK/20230504 MMWEBID/2125 MicroMessenger/8.0.37.2380(0x2800255B) WeChat/arm64 Weixin NetType/WIFI Language/zh_CN ABI/arm64 MiniProgramEnv/android",
        "Content-Type": "application/json",
        "Accept": "*/*",
        "Sec-Fetch-Site": "cross-site",
        "Sec-Fetch-Mode": "cors",
        "Sec-Fetch-Dest": "empty",
        "Accept-Language": "zh-CN,zh",
        "Accept-Encoding": "gzip, deflate",
        "Authorization": xjauth
      }
    };
    debug && (log("\n【debug】=============== 这是  请求 url ==============="), log(JSON.stringify(_0x56d3e1)));
    axios.request(_0x56d3e1).then(async function (_0x1b0fd1) {
      try {
        data = _0x1b0fd1.data;
        debug && (log("\n\n【debug】===============这是 返回data=============="), log(JSON.stringify(_0x1b0fd1.data)));
        if (data.err == 0) log("酿酒收取：" + data.msg), msg += "\n酿酒收取：" + data.msg, await exchange(volumns);else log(data.msg);
      } catch (_0x22d5a1) {
        log("异常：" + data + "，原因：" + data.msg);
      }
    }).catch(function (_0x1c1cac) {
      console.error(_0x1c1cac);
    }).then(_0x4e8a72 => {
      _0x1cc309();
    });
  });
}
async function statistics() {
  return new Promise(_0x1651b2 => {
    var _0x413116 = {
      "method": "POST",
      "url": "https://apimallwm.exijiu.com/statistics",
      "headers": {
        "Host": "statistics.exijiu.com",
        "Connection": "keep-alive",
        "authorization": xjauth,
        "charset": "utf-8",
        "User-Agent": "Mozilla/5.0 (Linux; Android 10; PCAM00 Build/QKQ1.190918.001; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/111.0.5563.116 Mobile Safari/537.36 XWEB/5175 MMWEBSDK/20230504 MMWEBID/2125 MicroMessenger/8.0.37.2380(0x2800255B) WeChat/arm64 Weixin NetType/WIFI Language/zh_CN ABI/arm64 MiniProgramEnv/android",
        "content-type": "application/json",
        "Accept-Encoding": "gzip,compress,br,deflate",
        "login_code": xjhd,
        "Referer": "https://servicewechat.com/wx489f950decfeb93e/250/page-frame.html"
      },
      "data": "{\"event_id\":104,\"membaer_id\":" + ids + ",\"resolution\":\"\"}"
    };
    debug && (log("\n【debug】=============== 这是  请求 url ==============="), log(JSON.stringify(_0x413116)));
    axios.request(_0x413116).then(async function (_0x774a44) {
      try {
        data = _0x774a44.data;
        debug && (log("\n\n【debug】===============这是 返回data=============="), log(JSON.stringify(_0x774a44.data)));
        if (data.err == 0) log(data.msg);else log(data.msg);
      } catch (_0x5c9b6a) {
        log("异常：" + data + "，原因：" + data.msg);
      }
    }).catch(function (_0x308cea) {
      console.error(_0x308cea);
    }).then(_0x328eb9 => {
      _0x1651b2();
    });
  });
}
async function statistics1(_0x3d01cd) {
  return new Promise(_0x1be275 => {
    var _0xe1b494 = {
      "method": "POST",
      "url": "https://apimallwm.exijiu.com/statistics",
      "headers": {
        "Host": "statistics.exijiu.com",
        "Connection": "keep-alive",
        "authorization": xjauth,
        "charset": "utf-8",
        "User-Agent": "Mozilla/5.0 (Linux; Android 10; PCAM00 Build/QKQ1.190918.001; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/111.0.5563.116 Mobile Safari/537.36 XWEB/5175 MMWEBSDK/20230504 MMWEBID/2125 MicroMessenger/8.0.37.2380(0x2800255B) WeChat/arm64 Weixin NetType/WIFI Language/zh_CN ABI/arm64 MiniProgramEnv/android",
        "content-type": "application/json",
        "Accept-Encoding": "gzip,compress,br,deflate",
        "login_code": xjhd,
        "Referer": "https://servicewechat.com/wx489f950decfeb93e/250/page-frame.html"
      },
      "data": "{\"event_id\":" + _0x3d01cd + ",\"membaer_id\":" + ids + ",\"os\":\"Android 10\",\"brower\":\"chrome\",\"phone_model\":\"PCAM00\",\"networktype\":\"wifi\",\"resolution\":\"\"}"
    };
    debug && (log("\n【debug】=============== 这是  请求 url ==============="), log(JSON.stringify(_0xe1b494)));
    axios.request(_0xe1b494).then(async function (_0x48e3c5) {
      try {
        data = _0x48e3c5.data;
        debug && (log("\n\n【debug】===============这是 返回data=============="), log(JSON.stringify(_0x48e3c5.data)));
        if (data.err == 0) log(data.msg);else log(data.msg);
      } catch (_0x555705) {
        log("异常：" + data + "，原因：" + data.msg);
      }
    }).catch(function (_0x55aca2) {
      console.error(_0x55aca2);
    }).then(_0x44d4a5 => {
      _0x1be275();
    });
  });
}
async function Gardenmemberwine() {
  return new Promise(_0x1738d7 => {
    var _0x28c070 = {
      "method": "GET",
      "url": "https://apimallwm.exijiu.com/garden/Gardenmemberwine/index",
      "headers": {
        "Connection": "keep-alive",
        "referer": "https://servicewechat.com/wx489f950decfeb93e/250/page-frame.html",
        "login_code": xjhd,
        "user-agent": "Mozilla/5.0 (Linux; Android 10; PCAM00 Build/QKQ1.190918.001; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/111.0.5563.116 Mobile Safari/537.36 XWEB/5175 MMWEBSDK/20230504 MMWEBID/2125 MicroMessenger/8.0.37.2380(0x2800255B) WeChat/arm64 Weixin NetType/WIFI Language/zh_CN ABI/arm64 MiniProgramEnv/android",
        "Content-Type": "application/json",
        "Accept": "*/*",
        "Sec-Fetch-Site": "cross-site",
        "Sec-Fetch-Mode": "cors",
        "Sec-Fetch-Dest": "empty",
        "Accept-Language": "zh-CN,zh",
        "Accept-Encoding": "gzip, deflate",
        "Authorization": xjauth
      }
    };
    debug && (log("\n【debug】=============== 这是  请求 url ==============="), log(JSON.stringify(_0x28c070)));
    axios.request(_0x28c070).then(async function (_0x3a0f33) {
      try {
        data = _0x3a0f33.data;
        debug && (log("\n\n【debug】===============这是 返回data=============="), log(JSON.stringify(_0x3a0f33.data)));
        if (data.err == 0) log(data.msg);else log(data.msg);
      } catch (_0x1ca532) {
        log("异常：" + data + "，原因：" + data.msg);
      }
    }).catch(function (_0x2af85e) {
      console.error(_0x2af85e);
    }).then(_0x181ed9 => {
      _0x1738d7();
    });
  });
}
async function sorghum1() {
  return new Promise(_0x9751a6 => {
    var _0x178e0c = {
      "method": "GET",
      "url": "https://apimallwm.exijiu.com/garden/sorghum/index",
      "headers": {
        "Connection": "keep-alive",
        "referer": "https://servicewechat.com/wx489f950decfeb93e/250/page-frame.html",
        "login_code": xjhd,
        "user-agent": "Mozilla/5.0 (Linux; Android 10; PCAM00 Build/QKQ1.190918.001; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/111.0.5563.116 Mobile Safari/537.36 XWEB/5175 MMWEBSDK/20230504 MMWEBID/2125 MicroMessenger/8.0.37.2380(0x2800255B) WeChat/arm64 Weixin NetType/WIFI Language/zh_CN ABI/arm64 MiniProgramEnv/android",
        "Content-Type": "application/json",
        "Accept": "*/*",
        "Sec-Fetch-Site": "cross-site",
        "Sec-Fetch-Mode": "cors",
        "Sec-Fetch-Dest": "empty",
        "Accept-Language": "zh-CN,zh",
        "Accept-Encoding": "gzip, deflate",
        "Authorization": xjauth
      }
    };
    debug && (log("\n【debug】=============== 这是  请求 url ==============="), log(JSON.stringify(_0x178e0c)));
    axios.request(_0x178e0c).then(async function (_0x5b4eb1) {
      try {
        data = _0x5b4eb1.data;
        debug && (log("\n\n【debug】===============这是 返回data=============="), log(JSON.stringify(_0x5b4eb1.data)));
        if (data.err == 0) log(data.msg);else log(data.msg);
      } catch (_0x9602c9) {
        log("异常：" + data + "，原因：" + data.msg);
      }
    }).catch(function (_0x1a6b46) {
      console.error(_0x1a6b46);
    }).then(_0x52dd31 => {
      _0x9751a6();
    });
  });
}
async function banners() {
  return new Promise(_0x2b796c => {
    var _0x12374a = {
      "method": "GET",
      "url": "https://apimallwm.exijiu.com/banners?limit=0",
      "headers": {
        "Connection": "keep-alive",
        "referer": "https://servicewechat.com/wx489f950decfeb93e/250/page-frame.html",
        "login_code": xjhd,
        "user-agent": "Mozilla/5.0 (Linux; Android 10; PCAM00 Build/QKQ1.190918.001; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/111.0.5563.116 Mobile Safari/537.36 XWEB/5175 MMWEBSDK/20230504 MMWEBID/2125 MicroMessenger/8.0.37.2380(0x2800255B) WeChat/arm64 Weixin NetType/WIFI Language/zh_CN ABI/arm64 MiniProgramEnv/android",
        "Content-Type": "application/json",
        "Accept": "*/*",
        "Sec-Fetch-Site": "cross-site",
        "Sec-Fetch-Mode": "cors",
        "Sec-Fetch-Dest": "empty",
        "Accept-Language": "zh-CN,zh",
        "Accept-Encoding": "gzip, deflate",
        "Authorization": jwt
      }
    };
    debug && (log("\n【debug】=============== 这是  请求 url ==============="), log(JSON.stringify(_0x12374a)));
    axios.request(_0x12374a).then(async function (_0xeb11cc) {
      try {
        data = _0xeb11cc.data;
        debug && (log("\n\n【debug】===============这是 返回data=============="), log(JSON.stringify(_0xeb11cc.data)));
        if (data.err == 0) log(data.msg);else log(data.msg);
      } catch (_0x5cb798) {
        log("异常：" + data + "，原因：" + data.msg);
      }
    }).catch(function (_0x46e893) {
      console.error(_0x46e893);
    }).then(_0x5aa547 => {
      _0x2b796c();
    });
  });
}
async function open() {
  return new Promise(_0x365e83 => {
    var _0x535271 = {
      "method": "POST",
      "url": "https://zhdl-dl.gzxijiu.com/api/open/event-log/E0",
      "headers": {
        "Connection": "keep-alive",
        "referer": "https://servicewechat.com/wx489f950decfeb93e/250/page-frame.html",
        "login_code": xjhd,
        "user-agent": "Mozilla/5.0 (Linux; Android 10; PCAM00 Build/QKQ1.190918.001; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/111.0.5563.116 Mobile Safari/537.36 XWEB/5175 MMWEBSDK/20230504 MMWEBID/2125 MicroMessenger/8.0.37.2380(0x2800255B) WeChat/arm64 Weixin NetType/WIFI Language/zh_CN ABI/arm64 MiniProgramEnv/android",
        "Content-Type": "application/json",
        "Accept": "*/*",
        "Sec-Fetch-Site": "cross-site",
        "Sec-Fetch-Mode": "cors",
        "Sec-Fetch-Dest": "empty",
        "Accept-Language": "zh-CN,zh",
        "Accept-Encoding": "gzip, deflate",
        "Authorization": xjauth
      },
      "data": "{\"vipId\":" + ids + ",\"eventName\":\"进入首页页面\"}"
    };
    debug && (log("\n【debug】=============== 这是  请求 url ==============="), log(JSON.stringify(_0x535271)));
    axios.request(_0x535271).then(async function (_0xaf379b) {
      try {
        data = _0xaf379b.data;
        debug && (log("\n\n【debug】===============这是 返回data=============="), log(JSON.stringify(_0xaf379b.data)));
        if (data.code == A00000) log(data.message);else log(data.message);
      } catch (_0x265302) {
        log("" + data.message);
      }
    }).catch(function (_0x49c3c2) {
      console.error(_0x49c3c2);
    }).then(_0x5de9aa => {
      _0x365e83();
    });
  });
}
async function open1() {
  return new Promise(_0x3af75b => {
    var _0xb9404 = {
      "method": "POST",
      "url": "https://zhdl-dl.gzxijiu.com/api/open/event-log/E1",
      "headers": {
        "Connection": "keep-alive",
        "referer": "https://servicewechat.com/wx489f950decfeb93e/250/page-frame.html",
        "login_code": xjhd,
        "user-agent": "Mozilla/5.0 (Linux; Android 10; PCAM00 Build/QKQ1.190918.001; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/111.0.5563.116 Mobile Safari/537.36 XWEB/5175 MMWEBSDK/20230504 MMWEBID/2125 MicroMessenger/8.0.37.2380(0x2800255B) WeChat/arm64 Weixin NetType/WIFI Language/zh_CN ABI/arm64 MiniProgramEnv/android",
        "Content-Type": "application/json",
        "Accept": "*/*",
        "Sec-Fetch-Site": "cross-site",
        "Sec-Fetch-Mode": "cors",
        "Sec-Fetch-Dest": "empty",
        "Accept-Language": "zh-CN,zh",
        "Accept-Encoding": "gzip, deflate",
        "Authorization": xjauth
      },
      "data": "{\"vipId\":" + ids + "}"
    };
    debug && (log("\n【debug】=============== 这是  请求 url ==============="), log(JSON.stringify(_0xb9404)));
    axios.request(_0xb9404).then(async function (_0x3e10f9) {
      try {
        data = _0x3e10f9.data;
        debug && (log("\n\n【debug】===============这是 返回data=============="), log(JSON.stringify(_0x3e10f9.data)));
        if (data.code == A00000) log(data.message);else log(data.message);
      } catch (_0x4fbbf2) {
        log("" + data.message);
      }
    }).catch(function (_0x3f9218) {
      console.error(_0x3f9218);
    }).then(_0x1775d6 => {
      _0x3af75b();
    });
  });
}
async function banner() {
  return new Promise(_0x47879d => {
    var _0x4ebe27 = {
      "method": "GET",
      "url": "https://zhdl-dl.gzxijiu.com/api/open/banner/page/top/3",
      "headers": {
        "Connection": "keep-alive",
        "referer": "https://servicewechat.com/wx489f950decfeb93e/250/page-frame.html",
        "login_code": xjhd,
        "user-agent": "Mozilla/5.0 (Linux; Android 10; PCAM00 Build/QKQ1.190918.001; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/111.0.5563.116 Mobile Safari/537.36 XWEB/5175 MMWEBSDK/20230504 MMWEBID/2125 MicroMessenger/8.0.37.2380(0x2800255B) WeChat/arm64 Weixin NetType/WIFI Language/zh_CN ABI/arm64 MiniProgramEnv/android",
        "Content-Type": "application/json",
        "Accept": "*/*",
        "Sec-Fetch-Site": "cross-site",
        "Sec-Fetch-Mode": "cors",
        "Sec-Fetch-Dest": "empty",
        "Accept-Language": "zh-CN,zh",
        "Accept-Encoding": "gzip, deflate",
        "Authorization": xjauth
      }
    };
    debug && (log("\n【debug】=============== 这是  请求 url ==============="), log(JSON.stringify(_0x4ebe27)));
    axios.request(_0x4ebe27).then(async function (_0x411c85) {
      try {
        data = _0x411c85.data;
        debug && (log("\n\n【debug】===============这是 返回data=============="), log(JSON.stringify(_0x411c85.data)));
        if (data.code == A00000) log(data.message);else log(data.message);
      } catch (_0x285b39) {
        log("" + data.message);
      }
    }).catch(function (_0x2f0b88) {
      console.error(_0x2f0b88);
    }).then(_0x4821bb => {
      _0x47879d();
    });
  });
}
function getIntegerTimes(_0x129d77, _0x1153c2) {
  if (_0x129d77 < _0x1153c2) {
    _0x129d77 = _0x1153c2;
    _0x1153c2 = _0x129d77;
  }
  let _0x210627 = 0,
    _0x5de2af = 0,
    _0x242328,
    _0x5d46d0;
  try {
    _0x210627 = _0x129d77.toString().split(".")[1].length;
  } catch (_0x42e52c) {}
  try {
    _0x5de2af = _0x1153c2.toString().split(".")[1].length;
  } catch (_0x2093cc) {}
  return _0x242328 = Number(_0x129d77.toString().replace(".", "")), _0x5d46d0 = Number(_0x1153c2.toString().replace(".", "")), _0x242328 / _0x5d46d0 * Math.pow(10, _0x5de2af - _0x210627);
}
function isPositiveIntegerTimes(_0x5dff7e) {
  var _0x5b39f7 = _0x5dff7e.toString();
  if (!/(^[1-9]\d*$)/.test(_0x5b39f7)) {
    return false;
  } else return true;
}
async function Envs() {
  if (xjhd) {
    if (xjhd.indexOf("@") != -1) xjhd.split("@").forEach(_0x27d349 => {
      xjhdArr.push(_0x27d349);
    });else xjhd.indexOf("\n") != -1 ? xjhd.split("\n").forEach(_0x4bdbac => {
      xjhdArr.push(_0x4bdbac);
    }) : xjhdArr.push(xjhd);
  } else {
    log("\n 【" + $.name + "】：未填写变量 xjhd");
    return;
  }
  return true;
}
function addNotifyStr(_0xfbe592, _0x3f7fbf = true) {
  _0x3f7fbf && log(_0xfbe592 + "\n");
  msg += _0xfbe592 + "\n";
}
function conversionTimestamp(_0x14466b) {
  let _0x4e8df1 = new Date(_0x14466b * 1000),
    _0x2b3490 = _0x4e8df1.getFullYear() + "-",
    _0x40c14f = (_0x4e8df1.getMonth() < 9 ? "0" + (_0x4e8df1.getMonth() + 1) : _0x4e8df1.getMonth() + 1) + "-";
  function _0x358883(_0xa63696) {
    return _0xa63696 < 10 ? "0" + _0xa63696 : _0xa63696;
  }
  let _0xf87b0 = _0x358883(_0x4e8df1.getDate()) + " ",
    _0x469652 = _0x358883(_0x4e8df1.getHours()) + ":",
    _0xd37bf8 = _0x358883(_0x4e8df1.getMinutes()) + ":";
  let _0x10e02b = _0x358883(_0x4e8df1.getSeconds());
  return _0x2b3490 + _0x40c14f + _0xf87b0 + _0x469652 + _0xd37bf8 + _0x10e02b;
}
async function SendMsg(message) {
  if (!message) return;
  if (Notify > 0) {
    if ($.isNode()) {
      var notify = require("./sendNotify");
      await notify.sendNotify($.name, message);
    } else {
      $.msg(message);
    }
  } else {
    log(message);
  }
}
function randomString(m) {
  for (var e = m > 0 && void 0 !== m ? m : 21, t = ""; t.length < e;) t += Math.random().toString(36).slice(2);
  return t.slice(0, e);
}
function randomnum(e) {
  e = e || 32;
  var t = "1234567890",
    a = t.length,
    n = "";
  for (i = 0; i < e; i++) n += t.charAt(Math.floor(Math.random() * a));
  return n;
}
function Env(t, e) {
  "undefined" != typeof process && JSON.stringify(process.env).indexOf("GITHUB") > -1 && process.exit(0);
  class s {
    constructor(t) {
      this.env = t;
    }
    send(t, e = "GET") {
      t = "string" == typeof t ? {
        url: t
      } : t;
      let s = this.get;
      return "POST" === e && (s = this.post), new Promise((e, i) => {
        s.call(this, t, (t, s, r) => {
          t ? i(t) : e(s);
        });
      });
    }
    get(t) {
      return this.send.call(this.env, t);
    }
    post(t) {
      return this.send.call(this.env, t, "POST");
    }
  }
  return new class {
    constructor(t, e) {
      this.name = t;
      this.http = new s(this);
      this.data = null;
      this.dataFile = "box.dat";
      this.logs = [];
      this.isMute = !1;
      this.isNeedRewrite = !1;
      this.logSeparator = "\n";
      this.startTime = new Date().getTime();
      Object.assign(this, e);
      this.log("", `🔔${this.name}, 开始!`);
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
    toObj(t, e = null) {
      try {
        return JSON.parse(t);
      } catch {
        return e;
      }
    }
    toStr(t, e = null) {
      try {
        return JSON.stringify(t);
      } catch {
        return e;
      }
    }
    getjson(t, e) {
      let s = e;
      const i = this.getdata(t);
      if (i) try {
        s = JSON.parse(this.getdata(t));
      } catch {}
      return s;
    }
    setjson(t, e) {
      try {
        return this.setdata(JSON.stringify(t), e);
      } catch {
        return !1;
      }
    }
    getScript(t) {
      return new Promise(e => {
        this.get({
          url: t
        }, (t, s, i) => e(i));
      });
    }
    runScript(t, e) {
      return new Promise(s => {
        let i = this.getdata("@chavy_boxjs_userCfgs.httpapi");
        i = i ? i.replace(/\n/g, "").trim() : i;
        let r = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
        r = r ? 1 * r : 20;
        r = e && e.timeout ? e.timeout : r;
        const [o, h] = i.split("@"),
          n = {
            url: `http://${h}/v1/scripting/evaluate`,
            body: {
              script_text: t,
              mock_type: "cron",
              timeout: r
            },
            headers: {
              "X-Key": o,
              Accept: "*/*"
            }
          };
        this.post(n, (t, e, i) => s(i));
      }).catch(t => this.logErr(t));
    }
    loaddata() {
      if (!this.isNode()) return {};
      {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const t = this.path.resolve(this.dataFile),
          e = this.path.resolve(process.cwd(), this.dataFile),
          s = this.fs.existsSync(t),
          i = !s && this.fs.existsSync(e);
        if (!s && !i) return {};
        {
          const i = s ? t : e;
          try {
            return JSON.parse(this.fs.readFileSync(i));
          } catch (t) {
            return {};
          }
        }
      }
    }
    writedata() {
      if (this.isNode()) {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const t = this.path.resolve(this.dataFile),
          e = this.path.resolve(process.cwd(), this.dataFile),
          s = this.fs.existsSync(t),
          i = !s && this.fs.existsSync(e),
          r = JSON.stringify(this.data);
        s ? this.fs.writeFileSync(t, r) : i ? this.fs.writeFileSync(e, r) : this.fs.writeFileSync(t, r);
      }
    }
    lodash_get(t, e, s) {
      const i = e.replace(/\[(\d+)\]/g, ".$1").split(".");
      let r = t;
      for (const t of i) if (r = Object(r)[t], void 0 === r) return s;
      return r;
    }
    lodash_set(t, e, s) {
      return Object(t) !== t ? t : (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), e.slice(0, -1).reduce((t, s, i) => Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[i + 1]) >> 0 == +e[i + 1] ? [] : {}, t)[e[e.length - 1]] = s, t);
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
      } else s = this.setval(t, e);
      return s;
    }
    getval(t) {
      return this.isSurge() || this.isLoon() ? $persistentStore.read(t) : this.isQuanX() ? $prefs.valueForKey(t) : this.isNode() ? (this.data = this.loaddata(), this.data[t]) : this.data && this.data[t] || null;
    }
    setval(t, e) {
      return this.isSurge() || this.isLoon() ? $persistentStore.write(t, e) : this.isQuanX() ? $prefs.setValueForKey(t, e) : this.isNode() ? (this.data = this.loaddata(), this.data[e] = t, this.writedata(), !0) : this.data && this.data[e] || null;
    }
    initGotEnv(t) {
      this.got = this.got ? this.got : require("got");
      this.cktough = this.cktough ? this.cktough : require("tough-cookie");
      this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar();
      t && (t.headers = t.headers ? t.headers : {}, void 0 === t.headers.Cookie && void 0 === t.cookieJar && (t.cookieJar = this.ckjar));
    }
    get(t, e = () => {}) {
      t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"]);
      this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
        "X-Surge-Skip-Scripting": !1
      })), $httpClient.get(t, (t, s, i) => {
        !t && s && (s.body = i, s.statusCode = s.status);
        e(t, s, i);
      })) : this.isQuanX() ? (this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
        hints: !1
      })), $task.fetch(t).then(t => {
        const {
          statusCode: s,
          statusCode: i,
          headers: r,
          body: o
        } = t;
        e(null, {
          status: s,
          statusCode: i,
          headers: r,
          body: o
        }, o);
      }, t => e(t))) : this.isNode() && (this.initGotEnv(t), this.got(t).on("redirect", (t, e) => {
        try {
          if (t.headers["set-cookie"]) {
            const s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();
            s && this.ckjar.setCookieSync(s, null);
            e.cookieJar = this.ckjar;
          }
        } catch (t) {
          this.logErr(t);
        }
      }).then(t => {
        const {
          statusCode: s,
          statusCode: i,
          headers: r,
          body: o
        } = t;
        e(null, {
          status: s,
          statusCode: i,
          headers: r,
          body: o
        }, o);
      }, t => {
        const {
          message: s,
          response: i
        } = t;
        e(s, i, i && i.body);
      }));
    }
    post(t, e = () => {}) {
      if (t.body && t.headers && !t.headers["Content-Type"] && (t.headers["Content-Type"] = "application/x-www-form-urlencoded"), t.headers && delete t.headers["Content-Length"], this.isSurge() || this.isLoon()) this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
        "X-Surge-Skip-Scripting": !1
      })), $httpClient.post(t, (t, s, i) => {
        !t && s && (s.body = i, s.statusCode = s.status);
        e(t, s, i);
      });else if (this.isQuanX()) t.method = "POST", this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
        hints: !1
      })), $task.fetch(t).then(t => {
        const {
          statusCode: s,
          statusCode: i,
          headers: r,
          body: o
        } = t;
        e(null, {
          status: s,
          statusCode: i,
          headers: r,
          body: o
        }, o);
      }, t => e(t));else if (this.isNode()) {
        this.initGotEnv(t);
        const {
          url: s,
          ...i
        } = t;
        this.got.post(s, i).then(t => {
          const {
            statusCode: s,
            statusCode: i,
            headers: r,
            body: o
          } = t;
          e(null, {
            status: s,
            statusCode: i,
            headers: r,
            body: o
          }, o);
        }, t => {
          const {
            message: s,
            response: i
          } = t;
          e(s, i, i && i.body);
        });
      }
    }
    time(t, e = null) {
      const s = e ? new Date(e) : new Date();
      let i = {
        "M+": s.getMonth() + 1,
        "d+": s.getDate(),
        "H+": s.getHours(),
        "m+": s.getMinutes(),
        "s+": s.getSeconds(),
        "q+": Math.floor((s.getMonth() + 3) / 3),
        S: s.getMilliseconds()
      };
      /(y+)/.test(t) && (t = t.replace(RegExp.$1, (s.getFullYear() + "").substr(4 - RegExp.$1.length)));
      for (let e in i) new RegExp("(" + e + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? i[e] : ("00" + i[e]).substr(("" + i[e]).length)));
      return t;
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
      if (this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(e, s, i, o(r)) : this.isQuanX() && $notify(e, s, i, o(r))), !this.isMuteLog) {
        let t = ["", "==============📣系统通知📣=============="];
        t.push(e);
        s && t.push(s);
        i && t.push(i);
        console.log(t.join("\n"));
        this.logs = this.logs.concat(t);
      }
    }
    log(...t) {
      t.length > 0 && (this.logs = [...this.logs, ...t]);
      console.log(t.join(this.logSeparator));
    }
    logErr(t, e) {
      const s = !this.isSurge() && !this.isQuanX() && !this.isLoon();
      s ? this.log("", `❗️${this.name}, 错误!`, t.stack) : this.log("", `❗️${this.name}, 错误!`, t);
    }
    wait(t) {
      return new Promise(e => setTimeout(e, t));
    }
    done(t = {}) {
      const e = new Date().getTime(),
        s = (e - this.startTime) / 1000;
      this.log("", `🔔${this.name}, 结束! 🕛 ${s} 秒`);
      this.log();
      (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(t);
    }
  }(t, e);
}