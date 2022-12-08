var fs = require("fs");

fs.writeFile("./data/message.txt", "hello world", function (err) {
  if (err) throw err;
  console.log("writing complete");
});
