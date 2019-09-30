const values = require("./code");
let success = true;
console.log('TECHIO> message const ALPHABET = "' + values.alphabet + '"');
console.log('TECHIO> message let message = "' + values.message) + '"';

if (values.alphabet != "abcdefghijklmnopqrstuvwxyz") {
  console.log('TECHIO> message ALPHABET should be "hello"');
  success = false;
}
if (values.message != "hello") {
  console.log('TECHIO> message message should be "hello"');
  success = false;
}

console.log("TECHIO> success " + String(success));
