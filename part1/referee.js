function checkEncoding(encode) {
  let encodedMessage = encode("hello", 7);
  if (encodedMessage == "olssv") {
    console.log("TECHIO> success true");
  } else {
    console.log("TECHIO> success false");
  }
  console.log("TECHIO> --message Message was encoded as " + encodedMessage);
}

require("./code")(checkEncoding);
