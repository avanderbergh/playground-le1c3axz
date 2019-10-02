const multiply = require("./code.js");

let success = true;

for (let i = 0; i < 10; i++) {
  if (multiply(i, 5) != i * 5) {
    success = false;
  }
}

console.log("TECHIO> success " + success);
