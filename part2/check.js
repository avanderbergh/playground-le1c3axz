let expectedSum = 0;
 
for (i = 1; i <= 100; i += 5) {
    sum += i
}

let sum = require("./code");

if (sum == expectedSum) {
    console.log("TECHIO> status true");
    console.log("TECHIO> message Correct!")
} else {
    console.log("TECHIO> status false");
    console.log("TECHIO> message Incorrect! Sum is " + sum)
}