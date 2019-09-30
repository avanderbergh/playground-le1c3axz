const values = require("./code");
let success = true;
console.log("TECHIO> message values: " + JSON.stringify(values));
console.log("TECHIO> message alphabet is " + values.alphabet);
console.log("TECHIO> message message is " + values.message);

if (values.alphabet != "abcdefghijklmnopqrstuvwxyz") {
  console.log("TECHIO> message alphabet is not correctly declared");
  success = false;
}
if (values.message != "hello") {
  console.log("TECHIO> message alphabet is not correctly declared");
  success = false;
}

console.log("TECHIO> success " + String(success));
