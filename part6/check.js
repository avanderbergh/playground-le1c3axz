const encode = require("./code");

let success = true;

const input = "the quick brown fox jumps over the lazy dog";

if (encode(input, 7) != " olgxapjrgiyvcugmvdgqatwzgvblyg olgshfegkvn")
  success = false;
if (encode(input, 20) != "maytjnbwdtvkhpgtzhqtcnfilthoyktmayteusrtxh ")
  success = false;

console.log("TECHIO> success " + String(success));
