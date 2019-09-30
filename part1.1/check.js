let success = true;

const myString = "dQbQCMYkgMCiwHEZ4MGIU2JPmmSFQyCc3hnL4iqxvMm3CjLMAHSTUtuYygrs8J5twktpkAwcCYuL27EHJLhgdhUqbvvpRCeDFu0D"

const values = require("./code");

console.log("TECHIO> message your character is " + values.myChar)

console.log("TECHIO> message myChar :" + values.myChar + " position: " + values.position)

if (values.myChar != myString.charAt(60)) {
    success = false
} 
if (values.position != myString.indexOf("j") + 1) {
    success = false
}

console.log("TECHIO> success " + String(success))