const fs = require("fs");

module.exports = (string) => {
  fs.readdir(__dirname, (err, data) => {
    if (string === "ls") {
      //   process.stdout.write("\n");
      process.stdout.write(
        data
          .map((element, index) => {
            if (index !== 0) {
              return `   ${element}`;
            }
            return element;
          })
          .join("")
      );
      process.stdout.write("\nPrompt > ");
    }
  });
};
