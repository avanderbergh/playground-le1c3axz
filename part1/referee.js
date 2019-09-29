function checkEncoding(encode) {
  let encodedMessage = encode("hello", 7);
  console.log("TECHIO> success " + encodedMessage == "olssv");
}

require("./code")(checkEncoding);
