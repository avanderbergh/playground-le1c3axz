const alphabet = "abcdefghijklmnopqrstuvwxyz";

function encode(message, key) {
  let encodedMessage = "";
  for (let i = 0; i < message.lengh; i++) {
    let letter = message.charAt(i);
    let letterNumber = alphabet.indexOf(letter);
    letterNumber += key;
    encodedMessage += alphabet.charAt(letterNumber);
  }
  return encodedMessage;
}

// autofold {
function job(checkEncoding) {
  checkEncoding(encode);
}

module.exports = job;

// }
