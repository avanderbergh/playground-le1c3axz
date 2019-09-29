function callback(message) {
  if (message == "abc") console.log("TECHIO> Correct");
  else console.log("TECHIO> The alphabet should be abc");
}

require("./code")(callback);
