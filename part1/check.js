const values = require("./code");
let success = true;

if (values.alphabet != "abcdefghijklmnopqrstuvwxyz") {
  console.log("TECHIO> message alphabet is not correctly declared");
  success = false;
}
if (values.message != "hello") {
  console.log("TECHIO> message alphabet is not correctly declared");
  success = false;
}

console.log("TECHIO> success " + String(success));
