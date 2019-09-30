let success = true;

const myString = "dQbQCMYkgMCiwHEZ4MGIU2JPmmSFQyCc3hnL4iqxvMm3CjLMAHSTUtuYygrs8J5twktpkAwcCYuL27EHJLhgdhUqbvvpRCeDFu0D"

const values = require("./code");

let correctChar = myString.charAt(59 + 1);
let correctPosition = myString.indexOf("j") + 1

if (values.myChar != correctChar) {
    success = false
} 
if (values.position != correctPosition) {
    success = false
}

console.log("TECHIO> success " + String(success))
console.log("TECHIO> message myChar:" + values.myChar + " should be: " + correctChar);
console.log("TECHIO> message position:" + values.position + " should be: " + correctPosition);
