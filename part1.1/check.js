const myString = "dQbQCMYkgMCiwHEZ4MGIU2JPmmSFQyCc3hnL4iqxvMm3CjLMAHSTUtuYygrs8J5twktpkAwcCYuL27EHJLhgdhUqbvvpRCeDFu0D"

const values = require("./code");

console.log("TECHIO> message your character is " + values.myChar)

if (values.myChar == myString.charAt(60)) {
    console.log("TECHIO> success true");
} else {
    console.log("TECHIO> success false");
}

if (values.position == myString.indexOf("j") + 1) {
    console.log("TECHIO> success true");
} else {
    console.log("TECHIO> success false");
}