//Wed Apr 23 2025 12:51:47 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const y0 = require("crypto"),
  {
    Buffer: y1
  } = require("buffer"),
  y2 = 117,
  y3 = y1.from("#PART#");
function y4(T) {
  return y1.from(T, "base64");
}
function y5(L, T) {
  const N = Math.ceil(T.asymmetricKeyDetails.modulusLength / 8);
  if (L.length < N) {
    L = y1.concat([y1.alloc(N - L.length), L]);
  }
  const M = y0.publicEncrypt({
    key: T,
    padding: y0.constants.RSA_NO_PADDING
  }, L);
  if (M[0] !== 0) {
    throw new Error("Decryption error: Incorrect padding header.");
  }
  if (M[1] !== 1) {
    throw new Error("Decryption error: Unexpected padding type.");
  }
  const Z = M.indexOf(0, 2);
  if (Z === -1) {
    throw new Error("Decryption error: No padding separator found.");
  }
  return M.slice(Z + 1);
}
function y6(T) {
  const N = T.replace(/\s+/g, ""),
    M = "-----BEGIN PUBLIC KEY-----\n" + N + "\n-----END PUBLIC KEY-----";
  try {
    return y0.createPublicKey(M);
  } catch (g) {
    const H = y1.from(N, "base64"),
      k = {
        key: H,
        format: "der",
        type: "pkcs1"
      };
    return y0.createPublicKey(k);
  }
}
function y7(L, T) {
  const N = y6(T);
  return y5(L, N);
}
function y8(T, c) {
  const Z = [];
  let g = 0;
  while (g < T.length) {
    const H = T.indexOf(c, g);
    if (H === -1) {
      break;
    }
    Z.push(H);
    g = H + c.length;
  }
  return Z;
}
function y9(L, T) {
  if (!y3 || y3.length <= 0) {
    return y7(L, T);
  }
  const N = y8(L, y3);
  if (N.length === 0) {
    return y7(L, T);
  }
  let M = y1.alloc(0),
    Z = 0;
  for (const Y of N) {
    const Q = L.slice(Z, Y);
    Q.length > 0 && (M = y1.concat([M, y7(Q, T)]));
    Z = Y + y3.length;
  }
  const g = L.slice(Z);
  if (g.length > 0) {
    M = y1.concat([M, y7(g, T)]);
  }
  return M;
}
function yy(L, T) {
  const N = y6(T);
  return y0.publicEncrypt({
    key: N,
    padding: y0.constants.RSA_PKCS1_PADDING
  }, L);
}
function yr(L, T) {
  if (L.length <= y2) {
    return yy(L, T);
  }
  const N = [];
  for (let Z = 0; Z < L.length; Z += y2) {
    const H = L.slice(Z, Z + y2),
      k = yy(H, T);
    if (Z !== 0) {
      N.push(y3);
    }
    N.push(k);
  }
  return y1.concat(N);
}
function yI(L, T) {
  const N = y1.from(L, "utf8"),
    M = typeof T === "string" ? T : T.toString("utf8"),
    Z = yr(N, M);
  return Z.toString("base64");
}
(async () => {
  const T = "\n    MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDLskIAkuPDb/FjE8iC09tFSznOHzwBRW8iB/JO8g3g0jzg6raYh6TC1BJtN+TqGcurW6LIhDtRHU9GdAjW0m7o9wzhLC2z9RnTDOpxWW2lSj5lxdym3aM332E7XdSfsEMSS6FXAbQJdC8g/VFDtZ1SC/yep3PZXNCnZpgN8xxw2QIDAQAB\n    ".trim(),
    c = "wJ5OurwSEqCHjBjV00TTmSrqHLGu5FR4e4as+MGU5scHluwX5aOHK3ecAviV1dgSYpGX7Eg7yFUF2yHogi97LktMvUQv04z+toXkfcBVqoWjoeYrHi2nREsY4XJNfDCc+BHdvxNh6agFPctHp1jyxLVqfHZUFCPUtFPbEcSpW+M=";
  try {
    const N = y4(c),
      M = y9(N, T);
    console.log("Decryption result:", M.toString("utf8"));
    const Z = "{firm=Xiaomi, androdid=692accd37521f13d, tob=2, channel=yqxjcb-oppo, usertype=1, model=23013RK75C, time=1744166534, packageName=com.vyaooqub.video, version=1.2.7, oaid=79a467c8e877077b, isvip=1}",
      g = yI(Z, T);
    console.log("Encryption result:", g);
  } catch (k) {
    console.error("Error during encryption/decryption:", k);
  }
})();
function yK(L) {
  if (L.trim().startsWith("{") && L.trim().endsWith("}")) {
    try {
      JSON.parse(L);
      return L;
    } catch (N) {
      return L.replace(/([\{\,]\s*)([a-zA-Z0-9_]+)(\s*:\s*)([^\"\'\{\}\[\],\s]+)([\,\}])/g, "$1\"$2\"$3\"$4\"$5");
    }
  }
  if (L.includes("=")) {
    const H = L.replace(/([a-zA-Z0-9_]+)\s*=\s*([^\,\s\}]+)/g, "\"$1\":\"$2\"");
    if (!H.startsWith("{") && !H.endsWith("}")) {
      return "{" + H + "}";
    }
    return H;
  }
  if (L.includes("return")) {
    return L.replace(/([=]\s*)([^\"\'\s][^\;\n]*)([\;\n])/g, function (n, Q, O, G) {
      if (O.startsWith("\"") || O.startsWith("'") || !isNaN(O)) {
        return n;
      }
      return Q + "\"" + O + "\"" + G;
    });
  }
  if (!L.startsWith("\"") && !L.startsWith("'")) {
    return "\"" + L + "\"";
  }
  return L;
}