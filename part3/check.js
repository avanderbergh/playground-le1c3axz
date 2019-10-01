const string =
  "cbcbeadaedabcaeadabaecbeadbbdecacbdbebbcaaeecbbdccaddeacacddaceadddeccbbbcccbbcacaddcddeeeeeecbceaba";
let newString = "";
let numberOfZs = 0;
for (let i = 0; i < string.length; i++) {
  if (string.charAt(i) == "a") {
    newString += "z";
    numberOfZs++;
  } else {
    newString += string.charAt(i);
  }
}
string = newString;
const values = require("./code");
let success = true;
if (values.string != string) {
  success = false;
  console.log("TECHIO> message The string is incorrect!");
}
if (values.numberOfZs != numberOfZs) {
  success = false;
  console.log("TECHIO> message numberOfZs is incorrect!");
}

console.log("TECHIO> success " + String(success));
