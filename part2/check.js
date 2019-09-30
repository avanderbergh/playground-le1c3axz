let expectedSum = 0;

for (i = 0; i <= 50; i += 5) {
  expectedSum += i;
}

let sum = require("./code");

if (sum == expectedSum) {
  console.log("TECHIO> success true");
  console.log("TECHIO> message Correct! The sum is " + sum);
} else {
  console.log("TECHIO> success false");
  console.log("TECHIO> message Your sum (" + sum + ") is incorrect!");
}
