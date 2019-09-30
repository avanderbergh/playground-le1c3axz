const values = require("./code");
let success = true;
console.log("TECHIO> message alphabet = " + values.alphabet);
console.log("TECHIO> message message = " + values.message);

if (values.alphabet != "abcdefghijklmnopqrstuvwxyz") {
  console.log('TECHIO> message alphabet should be "hello"');
  success = false;
}
if (values.message != "hello") {
  console.log('TECHIO> message message should be "hello"');
  success = false;
}

console.log("TECHIO> success " + String(success));
