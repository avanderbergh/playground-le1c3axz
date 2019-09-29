function callback(message) {
  if (message == "abc") console.log("TECHIO> success true");
  else console.log("TECHIO> success false");
}

require("./code")(callback);
