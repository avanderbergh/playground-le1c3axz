const replace = require("./code");

let success = true;

if (replace("aabbccddeeffgg", "a", "z") != "zzbbccddeeffgg") {
  success = false;
}

console.log("TECHIO> success " + String(success));
