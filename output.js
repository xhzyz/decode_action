//Mon Jul 01 2024 09:11:39 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
NAME = "掌上武义";
VALY = ["zswyck"];
VER = "1.0.0";
CK = "";
LOGS = 0;
usid = 0;
Notify = 0;
const 哇哈哈_0x196770 = require("axios"),
  哇哈哈_0x18910d = require("fs"),
  {
    v4: 哇哈哈_0x240be6
  } = require("uuid");
DCFHOST = process.env.DCFHOST;
dcfkey = encodeURIComponent(process.env.dcfkey);
IP = "";
IPCITY = "";
class 哇哈哈_0x5043d5 {
  constructor(_0x3cae7c) {
    this.phone = _0x3cae7c.split("#")[0];
    this.pwd = encodeURIComponent($.RSA(_0x3cae7c.split("#")[1], "MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQD6XO7e9YeAOs+cFqwa7ETJ+WXizPqQeXv68i5vqw9pFREsrqiBTRcg7wB0RIp3rJkDpaeVJLsZqYm5TW7FWx/iOiXFc+zCPvaKZric2dXCw27EvlH5rq+zwIPDAJHGAfnn1nmQH7wR3PCatEIb8pz5GFlTHMlluw4ZYmnOwg+thwIDAQAB"));
    _0x3cae7c.split("#")[2] ? this.ua = _0x3cae7c.split("#")[2] : this.ua = "Mozilla/5.0 (Linux; Android 13; 2211133C Build/TKQ1.220905.001; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/104.0.5112.97 Mobile Safari/537.36;xsb_wuyi;xsb_wuyi;3.1.0;native_app;6.6.1";
    this._ = ++usid;
    this.f = "小主 [" + this._ + "] ";
    this.message = "";
    this.logs = true;
  }
  async ["getcode"]() {
    let _0x19952b = $.udid(1),
      _0x3904a4 = $.HmacSHA(1, "HmacSHA256", "post%%/web/oauth/credential_auth?client_id=10024&password=" + decodeURIComponent(this.pwd) + "&phone_number=" + this.phone + "%%" + _0x19952b + "%%", "yYkwYisnU30jiJYzm7HL"),
      _0x1ea05c = {
        "User-Agent": "ANDROID;13;10024;3.1.0;1.0;null;2211133C",
        "X-REQUEST-ID": _0x19952b,
        "X-SIGNATURE": _0x3904a4
      },
      _0x297436 = "client_id=10024&password=" + this.pwd + "&phone_number=" + this.phone,
      _0x186815 = await $.task("post", "https://passport.tmuyun.com/web/oauth/credential_auth", _0x1ea05c, _0x297436),
      _0x1a5943 = _0x186815.data.authorization_code.code;
    return _0x1a5943;
  }
  async ["login"]() {
    let _0x3a3d09 = $.time(13),
      _0xf7171 = await this.getcode(),
      _0x509f01 = $.udid(1),
      _0x4c968c = $.SHA_Encrypt(1, "SHA256", "/api/zbtxz/login&&6634deb5eb852e6ad994afae&&" + _0x509f01 + "&&" + _0x3a3d09 + "&&FR*r!isE5W&&73"),
      _0x5717d5 = {
        "X-SESSION-ID": "6634deb5eb852e6ad994afae",
        "X-REQUEST-ID": _0x509f01,
        "X-TIMESTAMP": _0x3a3d09,
        "X-SIGNATURE": _0x4c968c,
        "X-TENANT-ID": "73",
        "User-Agent": "3.1.0;00000000-67f5-e880-0000-00004f27a48e;Xiaomi 2211133C;Android;13;Release;6.6.1"
      },
      _0x23495c = "check_token=&code=" + _0xf7171 + "&token=&type=-1&union_id=",
      _0x503263 = await $.task("post", "https://vapp.tmuyun.com/api/zbtxz/login", _0x5717d5, _0x23495c);
    if (_0x503263.code == 0) {
      this.sessionid = _0x503263.data.session.id;
      this.accountid = _0x503263.data.account.id;
      this.name = _0x503263.data.account.nick_name;
      console.log("【" + this.name + "】登陆成功");
      this.logs = true;
    } else {
      this.logs = false;
    }
  }
  async ["getkey"]() {
    let _0x433b9e = $.time(13),
      _0x3f29ce = $.udid(1),
      _0x4b4c76 = $.udid(1),
      _0x24c319 = $.SHA_Encrypt(1, "SHA256", "app_id=vKmnytOp9GrPa7kLbWTx&&auth_id=" + this.accountid + "&&debug=0&&device_id=" + _0x3f29ce + "&&nonce_str=" + _0x4b4c76 + "&&source_type=app&&timestamp=" + _0x433b9e + "&&token=" + this.sessionid + "&&userId=&&35c782a2"),
      _0x4dac29 = {
        "access-module": "study",
        "access-device-id": _0x3f29ce,
        "access-auth-id": this.accountid,
        "access-api-signature": _0x24c319,
        "access-nonce-str": _0x4b4c76,
        "access-app-id": "vKmnytOp9GrPa7kLbWTx",
        "access-timestamp": _0x433b9e,
        "access-api-token": this.sessionid,
        "access-type": "app"
      },
      _0x41addf = "{\"debug\":0,\"userId\":\"\"}",
      _0x5848ee = await $.task("post", "https://op-api.cloud.jinhua.com.cn/api/member/login", _0x4dac29, _0x41addf);
    _0x5848ee.code == 0 && (this.key = _0x5848ee.data.key, this.token = _0x5848ee.data.token);
  }
  async ["getpageid"]() {
    let _0x3716c2 = $.time(13),
      _0x26f6f3 = $.udid(1),
      _0x1a5a6b = $.udid(1),
      _0x48dc97 = $.SHA_Encrypt(1, "SHA256", "app_id=vKmnytOp9GrPa7kLbWTx&&auth_id=" + this.accountid + "&&device_id=" + _0x26f6f3 + "&&id=171&&nonce_str=" + _0x1a5a6b + "&&source_type=app&&timestamp=" + _0x3716c2 + "&&token=" + this.sessionid + "&&35c782a2"),
      _0x102eb4 = {
        "access-module": "study",
        "access-device-id": _0x26f6f3,
        "access-auth-id": this.accountid,
        "access-api-signature": _0x48dc97,
        "access-nonce-str": _0x1a5a6b,
        "access-app-id": "vKmnytOp9GrPa7kLbWTx",
        "access-timestamp": _0x3716c2,
        "access-api-token": this.sessionid,
        "access-type": "app"
      },
      _0x1e11b2 = await $.task("get", "https://op-api.cloud.jinhua.com.cn/api/study/detail?id=171", _0x102eb4);
    if (_0x1e11b2.code == 0) {
      for (let _0x597371 of _0x1e11b2.data.levels) {
        if (_0x597371.status == 1) {
          let _0x49822b = _0x597371.id;
          await this.getarticalid(_0x49822b);
        }
      }
    }
  }
  async ["getarticalid"](_0x292e76) {
    let _0x4e034e = $.time(13),
      _0x14ac6a = $.udid(1),
      _0x52b729 = $.udid(1),
      _0x4365ca = $.SHA_Encrypt(1, "SHA256", "app_id=vKmnytOp9GrPa7kLbWTx&&auth_id=" + this.accountid + "&&device_id=" + _0x14ac6a + "&&id=" + _0x292e76 + "&&nonce_str=" + _0x52b729 + "&&source_type=app&&timestamp=" + _0x4e034e + "&&token=" + this.sessionid + "&&" + this.key),
      _0xa32c57 = {
        "access-module": "study",
        "access-device-id": _0x14ac6a,
        "access-auth-id": this.accountid,
        "access-api-signature": _0x4365ca,
        "access-nonce-str": _0x52b729,
        "access-app-id": "vKmnytOp9GrPa7kLbWTx",
        "access-timestamp": _0x4e034e,
        "access-api-token": this.sessionid,
        "access-type": "app",
        authorization: "Bearer " + this.token
      },
      _0x28fd17 = await $.task("get", "https://op-api.cloud.jinhua.com.cn/api/study/level?id=" + _0x292e76, _0xa32c57);
    if (_0x28fd17.code == 0) {
      for (let _0x2556e4 of _0x28fd17.data.tasks) {
        if (_0x2556e4.read == 0) {
          let _0x33b105 = _0x2556e4.id,
            _0x2799e0 = _0x2556e4.name,
            _0x5b9d89 = _0x2556e4.link;
          const _0x1eb0d4 = /id=(\d+)/,
            _0x1a83dd = _0x5b9d89.match(_0x1eb0d4);
          if (_0x1a83dd && _0x1a83dd[1]) {
            const _0x4d7140 = _0x1a83dd[1];
            await this.doread(_0x4d7140, _0x33b105, _0x2799e0);
          }
        }
        if (_0x2556e4.praise == 0) {
          let _0x520dc8 = _0x2556e4.id,
            _0x58928f = _0x2556e4.name,
            _0x4cb66e = _0x2556e4.link;
          const _0x3913f9 = /id=(\d+)/,
            _0x17c83c = _0x4cb66e.match(_0x3913f9);
          if (_0x17c83c && _0x17c83c[1]) {
            const _0x2fc093 = _0x17c83c[1];
            await this.dopraise(_0x2fc093, _0x520dc8, _0x58928f);
          }
        }
      }
    }
  }
  async ["articalinfo"](_0x46c6a7) {
    let _0x58c17d = $.time(13),
      _0x10e4c6 = $.udid(1);
  }
  async ["doread"](_0x56fb28, _0x57f19a, _0x17a5e0) {
    await this.articalinfo(_0x56fb28);
    await $.wait(5000, 10000);
    let _0x28221f = $.time(13),
      _0x1195e9 = $.udid(1),
      _0x5ab332 = $.SHA_Encrypt(1, "SHA256", "/api/article/read_time&&" + this.sessionid + "&&" + _0x1195e9 + "&&" + _0x28221f + "&&FR*r!isE5W&&73"),
      _0x5be3d8 = {
        "X-SESSION-ID": this.sessionid,
        "X-REQUEST-ID": _0x1195e9,
        "X-TIMESTAMP": _0x28221f,
        "X-SIGNATURE": _0x5ab332,
        "X-TENANT-ID": "73",
        "User-Agent": "3.1.0;00000000-67f5-e880-0000-00004f27a48e;Xiaomi 2211133C;Android;13;Release;6.6.1"
      },
      _0xf57f1 = await $.task("get", "https://vapp.tmuyun.com/api/article/read_time?channel_article_id=" + _0x56fb28 + "&read_time=3000", _0x5be3d8);
    _0xf57f1.code == 0 && (console.log("【" + this.name + "】完成文章《" + _0x17a5e0 + "》阅读任务"), await this.dotask(_0x57f19a));
  }
  async ["dotask"](_0x46154b) {
    let _0x170300 = $.time(13),
      _0x3d5b8f = $.udid(1),
      _0x5d7307 = $.udid(1);
  }
  async ["dopraise"](_0x4cd325, _0x560360, _0x2fd849) {
    await this.articalinfo(_0x4cd325);
    await $.wait(5000, 10000);
    let _0x553454 = $.time(13),
      _0x120ff3 = $.udid(1),
      _0x222a19 = $.SHA_Encrypt(1, "SHA256", "/api/favorite/like&&" + this.sessionid + "&&" + _0x120ff3 + "&&" + _0x553454 + "&&FR*r!isE5W&&73"),
      _0x47fe63 = {
        "X-SESSION-ID": this.sessionid,
        "X-REQUEST-ID": _0x120ff3,
        "X-TIMESTAMP": _0x553454,
        "X-SIGNATURE": _0x222a19,
        "X-TENANT-ID": "73",
        "User-Agent": "3.1.0;00000000-67f5-e880-0000-00004f27a48e;Xiaomi 2211133C;Android;13;Release;6.6.1"
      },
      _0xe2a81c = "action=true&id=" + _0x4cd325,
      _0x28532d = await $.task("post", "https://vapp.tmuyun.com/api/favorite/like", _0x47fe63, _0xe2a81c);
    _0x28532d.code == 0 && (console.log("【" + this.name + "】完成文章《" + _0x2fd849 + "》点赞任务"), await this.dotask(_0x560360));
  }
  async ["lotterycount"]() {
    let _0x23857e = $.time(13),
      _0xb0337a = $.udid(1),
      _0x3df5b0 = $.udid(1),
      _0x30382a = $.SHA_Encrypt(1, "SHA256", "app_id=vKmnytOp9GrPa7kLbWTx&&auth_id=" + this.accountid + "&&device_id=" + _0xb0337a + "&&id=1072&&module=study&&nonce_str=" + _0x3df5b0 + "&&source_type=app&&timestamp=" + _0x23857e + "&&token=" + this.sessionid + "&&" + this.key),
      _0x55d369 = {
        "access-module": "study",
        "access-device-id": _0xb0337a,
        "access-auth-id": this.accountid,
        "access-api-signature": _0x30382a,
        "access-nonce-str": _0x3df5b0,
        "access-app-id": "vKmnytOp9GrPa7kLbWTx",
        "access-timestamp": _0x23857e,
        "access-api-token": this.sessionid,
        "access-type": "app",
        authorization: "Bearer " + this.token
      },
      _0x4fb388 = "{\"id\":1072,\"module\":\"study\"}",
      _0x2000ac = await $.task("post", "https://op-api.cloud.jinhua.com.cn/api/lotterybigwheel/_ac_lottery_count", _0x55d369, _0x4fb388);
    if (_0x2000ac.code == 0 && _0x2000ac.data.count > 0) {
      this.count = _0x2000ac.data.count;
      await this.lottery();
    } else {
      _0x2000ac.code == 0 && _0x2000ac.data.count == 0 && console.log("【" + this.name + "】暂无抽奖机会");
    }
  }
  async ["lottery"]() {
    console.log("【" + this.f + "】当前可抽奖次数为:" + this.count + "次");
    for (let _0x17e20c = 0; _0x17e20c < this.count; _0x17e20c++) {
      let _0x2ee009 = $.time(13),
        _0x14dc31 = $.udid(1),
        _0x5e0e8f = $.udid(1),
        _0x425146 = $.SHA_Encrypt(1, "SHA256", "app_id=vKmnytOp9GrPa7kLbWTx&&auth_id=" + this.accountid + "&&device_id=" + _0x14dc31 + "&&id=1072&&module=study&&nonce_str=" + _0x5e0e8f + "&&optionHash=&&source_type=app&&timestamp=" + _0x2ee009 + "&&token=" + this.sessionid + "&&" + this.key),
        _0x2bcea2 = {
          "access-module": "study",
          "access-device-id": _0x14dc31,
          "access-auth-id": this.accountid,
          "access-api-signature": _0x425146,
          "access-nonce-str": _0x5e0e8f,
          "access-app-id": "vKmnytOp9GrPa7kLbWTx",
          "access-timestamp": _0x2ee009,
          "access-api-token": this.sessionid,
          "access-type": "app",
          authorization: "Bearer " + this.token,
          "user-agent": this.ua
        },
        _0x14b874 = "{\"id\":1072,\"app_id\":\"vKmnytOp9GrPa7kLbWTx\",\"module\":\"study\",\"optionHash\":\"\"}",
        _0x3695ec = await $.task("post", "https://op-api.cloud.jinhua.com.cn/api/lotterybigwheel/_ac_lottery", _0x2bcea2, _0x14b874);
      if (_0x3695ec.code == 10000) {
        await this.getpicture();
      } else {
        _0x3695ec.code == 0 && (console.log("【" + this.name + "】抽奖成功，恭喜抽到:" + _0x3695ec.data.title), _0x3695ec.data.goods_title == "随机红包" && (this.message += "【" + this.name + "】抽奖成功，恭喜抽到:" + _0x3695ec.data.title), await $.wait(4000, 8000));
      }
    }
  }
  async ["getpicture"]() {
    let _0x704430 = $.time(13),
      _0x153b12 = $.udid(1),
      _0x48f6f6 = $.udid(1),
      _0x1df202 = $.SHA_Encrypt(1, "SHA256", "activity_id=1072&&app_id=vKmnytOp9GrPa7kLbWTx&&auth_id=" + this.accountid + "&&device_id=" + _0x153b12 + "&&module=bigWheel&&nonce_str=" + _0x48f6f6 + "&&source_type=app&&timestamp=" + _0x704430 + "&&token=" + this.sessionid + "&&35c782a2"),
      _0x3e7a09 = {
        "access-module": "study",
        "access-device-id": _0x153b12,
        "access-auth-id": this.accountid,
        "access-api-signature": _0x1df202,
        "access-nonce-str": _0x48f6f6,
        "access-app-id": "vKmnytOp9GrPa7kLbWTx",
        "access-timestamp": _0x704430,
        "access-api-token": this.sessionid,
        "access-type": "app"
      },
      _0xd3437d = "{\"activity_id\":1072,\"module\":\"bigWheel\"}",
      _0x4fc27a = await $.task("post", "https://op-api.cloud.jinhua.com.cn/api/captcha/get", _0x3e7a09, _0xd3437d),
      _0x1f2cb9 = _0x4fc27a.data.jigsawImageUrl,
      _0x3a73d2 = _0x4fc27a.data.originalImageUrl,
      _0xad1b85 = _0x4fc27a.data.token,
      _0x17f693 = _0x4fc27a.data.secretKey;
    await this.calculateBase64Values(_0x1f2cb9, _0x3a73d2, _0xad1b85, _0x17f693);
  }
  async ["encodeImageToBase64"](_0x403e85) {
    try {
      const _0x2d5b9d = await 哇哈哈_0x196770.get(_0x403e85, {
          responseType: "arraybuffer"
        }),
        _0x10a433 = Buffer.from(_0x2d5b9d.data, "binary").toString("base64");
      return _0x10a433;
    } catch (_0x49dbf1) {
      console.error(_0x49dbf1);
      return null;
    }
  }
  async ["calculateBase64Values"](_0x339db1, _0x4b2c44, _0x22ccfc, _0x2f440f) {
    let _0xd71462 = await this.encodeImageToBase64(_0x339db1),
      _0x3644b0 = await this.encodeImageToBase64(_0x4b2c44);
    await this.hkinfo(_0xd71462, _0x3644b0, _0x22ccfc, _0x2f440f);
  }
  async ["hkinfo"](_0x4b296f, _0x231ca8, _0x43525f, _0x50d8c9) {
    const _0x5ed57b = {
      target_img: _0x4b296f,
      bg_img: _0x231ca8
    };
    const _0x2efd49 = JSON.stringify(_0x5ed57b),
      _0x5504f9 = Buffer.from(_0x2efd49),
      _0x32ebdf = _0x5504f9.toString("base64");
    let _0x449ba9 = _0x32ebdf,
      _0x456157 = await $.task("post", "http://192.168.0.68:9898/slide/match/b64/json", {}, _0x449ba9),
      _0x5e64d9 = _0x456157.result.target,
      _0x30e684 = _0x5e64d9[0],
      _0x2df703 = JSON.stringify({
        x: _0x30e684,
        y: 5
      }),
      _0x50aefd = $.DecryptCrypto("0", "AES", "ECB", "Pkcs7", _0x2df703, _0x50d8c9, "");
    await $.wait(2000);
    await this.check(_0x30e684, _0x50aefd, _0x43525f, _0x50d8c9);
  }
  async ["check"](_0xb6a95a, _0x4b3615, _0x1be001, _0x18f5c8) {
    let _0x12bcf6 = $.time(13),
      _0x591efc = $.udid(1),
      _0x1e68af = $.udid(1),
      _0x1b80e1 = $.SHA_Encrypt(1, "SHA256", "activity_id=1072&&app_id=vKmnytOp9GrPa7kLbWTx&&auth_id=" + this.accountid + "&&cap_token=" + _0x1be001 + "&&device_id=" + _0x591efc + "&&module=bigWheel&&nonce_str=" + _0x1e68af + "&&point=" + _0x4b3615 + "&&source_type=app&&timestamp=" + _0x12bcf6 + "&&token=" + this.sessionid + "&&zuobiao={\"x\":" + _0xb6a95a + ",\"y\":5}" + _0x18f5c8 + "&&" + this.key),
      _0x1a9a6d = {
        "access-module": "study",
        "access-device-id": _0x591efc,
        "access-auth-id": this.accountid,
        "access-api-signature": _0x1b80e1,
        "access-nonce-str": _0x1e68af,
        "access-app-id": "vKmnytOp9GrPa7kLbWTx",
        "access-timestamp": _0x12bcf6,
        "access-api-token": this.sessionid,
        "access-type": "app",
        authorization: "Bearer " + this.token
      },
      _0x208871 = "{\"activity_id\":1072,\"module\":\"bigWheel\",\"cap_token\":\"" + _0x1be001 + "\",\"zuobiao\":\"{\\\"x\\\":" + _0xb6a95a + ",\\\"y\\\":5}" + _0x18f5c8 + "\",\"point\":\"" + _0x4b3615 + "\"}",
      _0x23b308 = await $.task("post", "https://op-api.cloud.jinhua.com.cn/api/captcha/check", _0x1a9a6d, _0x208871);
    _0x23b308.code == 0 && (console.log("【" + this.name + "】通过滑块验证，准备抽奖..."), await this.lottery());
  }
}
$ = 哇哈哈_0x111e4d();
!(async () => {
  let _0x2c85c3 = await $.task("get", "http://" + DCFHOST + "/download?DCFKEY=" + dcfkey + "&JSMANE=zswy&VER=" + VER, {});
  if (_0x2c85c3.code == 0) {
    console.log("【" + NAME + "】当前版本号：V" + VER + ",正在更新脚本，请稍等......");
    const _0x2ee26e = require("fs").promises,
      _0xca09f5 = process.argv[1];
    await _0x2ee26e.writeFile(_0xca09f5, _0x2c85c3.scriptData);
    console.log("脚本更新完成，请重新运行脚本");
  } else {
    if (_0x2c85c3.code == 1) {
      console.log("正在运行脚本：【" + NAME + "】V" + VER);
      console.log("📢 请认真阅读以下声明\n 【免责声明】   \n📌 脚本文件仅用于测试和学习研究   \n📌 脚本文件任何人不得用于商业以及非法用途   \n📌 禁止任何公众号、自媒体进行任何形式的转发   \n📌 脚本文件请在下载试用后24小时内自行删除   \n📌 因使用脚本造成软件平台的一切损失皆由使用者承担   \n📌 脚本文件如有不慎被破解或修改由破解或修改者承担   \n📌 如不接受此条款请立即删除脚本文件");
      let _0x4c56bd = await $.getkami(),
        _0x294fd6 = await $.readUUID();
      if (_0x4c56bd.dcfkey) {
        if (_0x4c56bd.Notify != "") {
          console.log(_0x4c56bd.Notify);
        }
        TSdata = $.time(13);
        if (_0x4c56bd.MAC == null) {
          console.log("请提交正确的MAC地址后再运行脚本！");
          return;
        } else {
          if (_0x4c56bd.MAC != null) {
            if (_0x4c56bd.MAC != _0x294fd6) {
              let _0x7b50c5 = require("path"),
                _0x1d2083 = _0x7b50c5.basename(__filename);
              console.log("本次MAC地址与数据库记录不匹配，停止运行文件[" + _0x1d2083 + "]");
              return;
            }
          }
        }
        if (_0x4c56bd.Delete == 1) {
          let _0x5dff09 = require("path"),
            _0x36fe9c = _0x5dff09.basename(__filename);
          console.log("关闭服务器跑路啦，帮你删除脚本文件[" + _0x36fe9c + "]");
          哇哈哈_0x18910d.unlink(_0x36fe9c, _0x4ffdca => {});
          return;
        }
        if (TSdata <= _0x4c56bd.Data) {
          console.log("尊贵的" + _0x4c56bd.UserName + "小主,您的卡密有效期到：" + _0x4c56bd.DataTime);
        } else {
          let _0x43a038 = require("path"),
            _0xf8c5dc = _0x43a038.basename(__filename);
          console.log("卡密已过期，停止运行文件[" + _0xf8c5dc + "]");
          return;
        }
        await $.ExamineCookie(_0x4c56bd);
        if ($.cookie_list.length < _0x4c56bd.xianjin) {
          await $.Multithreading("login");
          let _0x17dc35 = $.cookie_list.filter(_0x257823 => _0x257823.logs == true);
          if (_0x17dc35.length == 0) {
            console.log("Cookie格式错误 或 账号被禁封");
            return;
          } else {
            await $.Multithreading("getkey");
            await $.Multithreading("getpageid");
            await $.Multithreading("lotterycount");
          }
        } else {
          console.log("账号数量超过限制，请减少账号数量后重试！或作者关闭了脚本功能");
        }
      } else {
        if (_0x4c56bd.message == "更新成功") {
          console.log("数据更新成功，请重新运行脚本");
          return;
        } else {
          let _0x36302d = require("path"),
            _0xd05e00 = _0x36302d.basename(__filename);
          console.log("无效卡密，停止运行文件[" + _0xd05e00 + "]");
          return;
        }
      }
    } else {
      console.log("脚本更新失败，不进行覆盖操作，请稍后重试！");
      console.log("正在运行脚本：【" + NAME + "】V" + VER);
      console.log("📢 请认真阅读以下声明\n 【免责声明】   \n📌 脚本文件仅用于测试和学习研究   \n📌 脚本文件任何人不得用于商业以及非法用途   \n📌 禁止任何公众号、自媒体进行任何形式的转发   \n📌 脚本文件请在下载试用后24小时内自行删除   \n📌 因使用脚本造成软件平台的一切损失皆由使用者承担   \n📌 脚本文件如有不慎被破解或修改由破解或修改者承担   \n📌 如不接受此条款请立即删除脚本文件");
      let _0x2867c9 = await $.getkami(),
        _0x1bd3e4 = await $.readUUID();
      if (_0x2867c9.dcfkey) {
        _0x2867c9.Notify != "" && console.log(_0x2867c9.Notify);
        TSdata = $.time(13);
        if (_0x2867c9.MAC == null) {
          console.log("请提交正确的MAC地址后再运行脚本！");
          return;
        } else {
          if (_0x2867c9.MAC != null) {
            if (_0x2867c9.MAC != _0x1bd3e4) {
              let _0x4c4450 = require("path"),
                _0x24412b = _0x4c4450.basename(__filename);
              console.log("本次MAC地址与数据库记录不匹配，停止运行文件[" + _0x24412b + "]");
              return;
            }
          }
        }
        if (_0x2867c9.Delete == 1) {
          let _0x3ed99f = require("path"),
            _0x45202a = _0x3ed99f.basename(__filename);
          console.log("关闭服务器跑路啦，帮你删除脚本文件[" + _0x45202a + "]");
          哇哈哈_0x18910d.unlink(_0x45202a, _0x154bd1 => {});
          return;
        }
        if (TSdata <= _0x2867c9.Data) {
          console.log("尊贵的" + _0x2867c9.UserName + "小主,您的卡密有效期到：" + _0x2867c9.DataTime);
        } else {
          let _0x648a67 = require("path"),
            _0x3afa65 = _0x648a67.basename(__filename);
          console.log("卡密已过期，停止运行文件[" + _0x3afa65 + "]");
          return;
        }
        await $.ExamineCookie(_0x2867c9);
        if ($.cookie_list.length < _0x2867c9.xianjin) {
          await $.Multithreading("login");
          let _0x4ca6ef = $.cookie_list.filter(_0x5876f2 => _0x5876f2.logs == true);
          if (_0x4ca6ef.length == 0) {
            console.log("Cookie格式错误 或 账号被禁封");
            return;
          } else {
            await $.Multithreading("getkey");
            await $.Multithreading("getpageid");
            await $.Multithreading("lotterycount");
          }
        } else {
          console.log("账号数量超过限制，请减少账号数量后重试！或作者关闭了脚本功能");
        }
      } else {
        if (_0x2867c9.message == "更新成功") {
          console.log("数据更新成功，请重新运行脚本");
          return;
        } else {
          let _0x399b5f = require("path"),
            _0x447702 = _0x399b5f.basename(__filename);
          console.log("无效卡密，停止运行文件[" + _0x447702 + "]");
          return;
        }
      }
    }
  }
  let _0x31f0c1 = [];
  for (let _0x228443 of $.cookie_list) {
    if (_0x228443.message) {
      _0x31f0c1.push(_0x228443.message);
    }
  }
  if (_0x31f0c1.length > 0) {
    await $.SendMsg(_0x31f0c1.join("\n"));
  }
})().catch(_0x4575e6 => {
  console.log(_0x4575e6);
}).finally(() => {});
function 哇哈哈_0x111e4d() {
  return new class {
    constructor() {
      this.cookie_list = [];
      this.message = "";
      this.CryptoJS = require("crypto-js");
      this.NodeRSA = require("node-rsa");
      this.request = require("request");
      this.Sha_Rsa = require("jsrsasign");
    }
    async ["Multithreading"](_0x2a9f5a, _0x31522f, _0x1fce14) {
      let _0x2c0d70 = [];
      !_0x1fce14 && (_0x1fce14 = 1);
      while (_0x1fce14--) {
        for (let _0x8122bd of $.cookie_list) {
          _0x2c0d70.push(_0x8122bd[_0x2a9f5a](_0x31522f));
        }
      }
      await Promise.allSettled(_0x2c0d70);
    }
    ["ExamineCookie"]() {
      let _0x3fd265 = process.env[VALY] || CK,
        _0x5ad140 = 0;
      if (_0x3fd265) {
        for (let _0xbc45c4 of _0x3fd265.split("\n").filter(_0x3cb87e => !!_0x3cb87e)) {
          $.cookie_list.push(new 哇哈哈_0x5043d5(_0xbc45c4));
        }
        _0x5ad140 = $.cookie_list.length;
      } else {
        console.log("\n【" + NAME + "】：未填写变量: " + VALY);
      }
      console.log("共找到" + _0x5ad140 + "个账号");
      return $.cookie_list;
    }
    ["task"](_0x2ef9da, _0x2f7ff9, _0x54f14e, _0xf47e43, _0x261267) {
      if (_0x2ef9da == "delete") {
        _0x2ef9da = _0x2ef9da.toUpperCase();
      } else {
        _0x2ef9da = _0x2ef9da;
      }
      if (_0x2ef9da == "post") {
        delete _0x54f14e["content-type"];
        delete _0x54f14e["Content-type"];
        delete _0x54f14e["content-Type"];
        if ($.safeGet(_0xf47e43)) {
          _0x54f14e["Content-Type"] = "application/json;charset=UTF-8";
        } else {
          _0x54f14e["Content-Type"] = "application/x-www-form-urlencoded";
        }
        _0xf47e43 && (_0x54f14e["Content-Length"] = $.lengthInUtf8Bytes(_0xf47e43));
      }
      if (_0x2ef9da == "get") {
        delete _0x54f14e["content-type"];
        delete _0x54f14e["Content-type"];
        delete _0x54f14e["content-Type"];
        delete _0x54f14e["Content-Length"];
      }
      _0x54f14e.Host = _0x2f7ff9.replace("//", "/").split("/")[1];
      return new Promise(async _0x9b50fe => {
        if (_0x2ef9da.indexOf("T") < 0) {
          var _0x41f766 = {
            url: _0x2f7ff9,
            headers: _0x54f14e,
            body: _0xf47e43,
            proxy: "http://" + _0x261267
          };
        } else {
          var _0x41f766 = {
            url: _0x2f7ff9,
            headers: _0x54f14e,
            form: JSON.parse(_0xf47e43),
            proxy: "http://" + _0x261267
          };
        }
        !_0x261267 && delete _0x41f766.proxy;
        this.request[_0x2ef9da.toLowerCase()](_0x41f766, (_0x3f4d5e, _0x23787a, _0x1c46df) => {
          try {
            if (_0x1c46df) {
              if (LOGS == 1) {
                console.log("================ 请求 ================");
                console.log(_0x41f766);
                console.log("================ 返回 ================");
                if ($.safeGet(_0x1c46df)) {
                  console.log(JSON.parse(_0x1c46df));
                } else {
                  console.log(_0x1c46df);
                }
              }
            }
          } catch (_0x19156c) {
            console.log(_0x19156c, _0x2f7ff9 + "\n" + _0x54f14e);
          } finally {
            let _0x4bebb2 = "";
            if (!_0x3f4d5e) {
              if ($.safeGet(_0x1c46df)) {
                _0x4bebb2 = JSON.parse(_0x1c46df);
              } else {
                if (_0x1c46df.indexOf("/") != -1 && _0x1c46df.indexOf("+") != -1) {
                  _0x4bebb2 = _0x1c46df;
                } else {
                  _0x4bebb2 = _0x1c46df;
                }
              }
            } else {
              _0x4bebb2 = _0x2f7ff9 + "   API请求失败，请检查网络重试\n" + _0x3f4d5e;
            }
            return _0x9b50fe(_0x4bebb2);
          }
        });
      });
    }
    async ["readUUID"]() {
      const _0x33952a = "uuid.txt";
      await $.generateUUID(_0x33952a);
      try {
        const _0x1b0a4d = 哇哈哈_0x18910d.readFileSync(_0x33952a, "utf8"),
          _0x21d3cc = _0x1b0a4d.trim();
        return _0x21d3cc;
      } catch (_0x4c20d7) {
        return null;
      }
    }
    ["generateUUID"](_0x14c131) {
      if (哇哈哈_0x18910d.existsSync(_0x14c131)) {
        return;
      }
      const _0x16ae0f = 哇哈哈_0x240be6();
      哇哈哈_0x18910d.writeFile(_0x14c131, _0x16ae0f, "utf8", _0x50fa67 => {
        if (_0x50fa67) {
          console.error("写入文件出错: " + _0x50fa67.message);
          return;
        }
      });
    }
    async ["getkami"]() {
      let _0x2c8ec9 = await $.readUUID();
      await $.getCurrentIP();
      await $.getIPCITY();
      let _0x3a6613 = await $.task("get", "http://" + DCFHOST + "/querys?DCFKEY=" + dcfkey + "&MAC=" + _0x2c8ec9 + "&JSHOST=" + IP + "&JSCITY=" + IPCITY, {});
      return _0x3a6613;
    }
    async ["getIPCITY"]() {
      let _0x3b708a = await $.task("get", "http://ip-api.com/json/" + IP + "?lang=zh-CN", {}),
        _0x28dc00 = _0x3b708a.regionName + _0x3b708a.city;
      IPCITY = encodeURIComponent(_0x28dc00);
    }
    async ["getCurrentIP"]() {
      let _0x3a3d8c = await $.task("get", "https://httpbin.org/ip", {});
      IP = _0x3a3d8c.origin;
    }
    async ["SendMsg"](_0x14508e) {
      if (!_0x14508e) {
        return;
      }
      if (Notify == 1) {
        var _0x5356df = require("./sendNotify");
        await _0x5356df.sendNotify(NAME, _0x14508e);
      }
    }
    ["lengthInUtf8Bytes"](_0x245b07) {
      let _0x1733cc = encodeURIComponent(_0x245b07).match(/%[89ABab]/g);
      return _0x245b07.length + (_0x1733cc ? _0x1733cc.length : 0);
    }
    ["randomArr"](_0x26253b) {
      return _0x26253b[parseInt(Math.random() * _0x26253b.length, 10)];
    }
    ["wait"](_0x1a9c42) {
      return new Promise(_0x339723 => setTimeout(_0x339723, _0x1a9c42));
    }
    ["time"](_0x29a62b) {
      return _0x29a62b == 10 ? Math.round(+new Date() / 1000) : +new Date();
    }
    ["timenow"]() {
      const _0x5ba4f7 = new Date(),
        _0x4fdcf3 = _0x5ba4f7.getFullYear(),
        _0x5dae45 = String(_0x5ba4f7.getMonth() + 1).padStart(2, "0"),
        _0x5b1aee = String(_0x5ba4f7.getDate()).padStart(2, "0"),
        _0x4d0b9c = _0x4fdcf3 + "-" + _0x5dae45 + "-" + _0x5b1aee;
      return _0x4d0b9c;
    }
    ["udid"](_0x1cd0fd) {
      const _0x3b08dc = {
        cLSLb: function (_0x33a38, _0x26acd8) {
          return _0x33a38 == _0x26acd8;
        },
        LqQZd: function (_0x2152ba, _0x314300) {
          const _0x327176 = {};
          _0x327176.zPmwf = function (_0xac1314, _0x52bb46) {
            return _0xac1314 === _0x52bb46;
          };
          return _0x2152ba | _0x314300;
        },
        Edqyb: function (_0x59e07c, _0x69c650) {
          return _0x59e07c * _0x69c650;
        },
        ldBfN: function (_0x339b42, _0x23f0f6) {
          return _0x339b42 + _0x23f0f6;
        }
      };
      function _0x47351a() {
        return _0x3b08dc.LqQZd(_0x3b08dc.Edqyb(_0x3b08dc.ldBfN(1, Math.random()), 65536), 0).toString(16).substring(1);
      }
      let _0x7e3927 = _0x47351a() + _0x47351a() + "-" + _0x47351a() + "-" + _0x47351a() + "-" + _0x47351a() + "-" + _0x47351a() + _0x47351a() + _0x47351a();
      return _0x1cd0fd == 0 ? _0x7e3927.toUpperCase() : _0x7e3927.toLowerCase();
    }
    ["SHA_Encrypt"](_0x5135f7, _0x45b75c, _0x5ea46c) {
      if (_0x5135f7 == 0) {
        return this.CryptoJS[_0x45b75c](_0x5ea46c).toString(this.CryptoJS.enc.Base64);
      } else {
        return this.CryptoJS[_0x45b75c](_0x5ea46c).toString();
      }
    }
    ["safeGet"](_0x244ce9) {
      try {
        if (typeof JSON.parse(_0x244ce9) == "object") {
          return true;
        }
      } catch (_0xfd2370) {
        return false;
      }
    }
    RT(_0x13449e, _0x378e32) {
      return Math.round(Math.random() * (_0x378e32 - _0x13449e) + _0x13449e);
    }
    ["SHA256withRSA"](_0x1ed73d, _0x4500ae) {
      const _0x42529a = new rs.KJUR.crypto.Signature({
        alg: "SHA256withRSA"
      });
      _0x42529a.init(_0x1ed73d);
      _0x42529a.updateString(_0x4500ae);
      const _0x3c0537 = _0x42529a.sign(),
        _0x446bf1 = rs.hextob64u(_0x3c0537);
      return _0x446bf1;
    }
    ["RSA"](_0x408f36, _0x1504be) {
      const _0x2d48e8 = require("node-rsa");
      let _0x156b42 = new _0x2d48e8("-----BEGIN PUBLIC KEY-----\n" + _0x1504be + "\n-----END PUBLIC KEY-----");
      _0x156b42.setOptions({
        encryptionScheme: "pkcs1"
      });
      return _0x156b42.encrypt(_0x408f36, "base64", "utf8");
    }
    ["HmacSHA"](_0x2bd0b5, _0x27dbe7, _0x353bcd, _0x3fe175) {
      return _0x2bd0b5 == 0 ? this.CryptoJS[_0x27dbe7](_0x353bcd, _0x3fe175).toString(this.CryptoJS.enc.Base64) : this.CryptoJS[_0x27dbe7](_0x353bcd, _0x3fe175).toString();
    }
    ["DecryptCrypto"](_0x153d61, _0x3a231e, _0x3af0f3, _0x11ef51, _0x1c14d8, _0x400e58, _0x5a87b5) {
      if (_0x153d61 == 0) {
        const _0x499198 = this.CryptoJS[_0x3a231e].encrypt(this.CryptoJS.enc.Utf8.parse(_0x1c14d8), this.CryptoJS.enc.Utf8.parse(_0x400e58), {
          iv: this.CryptoJS.enc.Utf8.parse(_0x5a87b5),
          mode: this.CryptoJS.mode[_0x3af0f3],
          padding: this.CryptoJS.pad[_0x11ef51]
        });
        return _0x499198.toString();
      } else {
        const _0x4bd4a1 = this.CryptoJS[_0x3a231e].decrypt(_0x1c14d8, this.CryptoJS.enc.Utf8.parse(_0x400e58), {
          iv: this.CryptoJS.enc.Utf8.parse(_0x5a87b5),
          mode: this.CryptoJS.mode[_0x3af0f3],
          padding: this.CryptoJS.pad[_0x11ef51]
        });
        return _0x4bd4a1.toString(this.CryptoJS.enc.Utf8);
      }
    }
    ["MD5Encrypt"](_0x5a799a, _0x1cf601) {
      if (_0x5a799a == 0) {
        return this.CryptoJS.MD5(_0x1cf601).toString().toLowerCase();
      } else {
        if (_0x5a799a == 1) {
          return this.CryptoJS.MD5(_0x1cf601).toString().toUpperCase();
        } else {
          if (_0x5a799a == 2) {
            return this.CryptoJS.MD5(_0x1cf601).toString().substring(8, 24).toLowerCase();
          } else {
            if (_0x5a799a == 3) {
              return this.CryptoJS.MD5(_0x1cf601).toString().substring(8, 24).toUpperCase();
            }
          }
        }
      }
    }
  }();
}