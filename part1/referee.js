const alphabet = "abcdefghijklmnopqrstuvwxyz";

function decode(message, key) {
  let decodedMessage = "";
  for (let i = 0; i < message.length; i++) {
    let letter = message.charAt(i);
    let letterNumber = alphabet.indexOf(letter);
    letterNumber -= key;
    if (letterNumber < 0) letterNumber += alphabet.length;
    decodedMessage += alphabet.charAt(letterNumber);
  }
  return decodedMessage;
}

function checkEncoding(encode) {
  let testMessage = "abc";
  let key = 1;
  if (decode(encode(testMessage, key), key) == testMessage) {
    console.log("TECHIO> success true");
  } else {
    console.log("TECHIO> success false");
  }
  console.log("TECHIO> --message Message was encoded as " + encodedMessage);
}

require("./code")(checkEncoding);
