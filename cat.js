const fs = require("fs");

module.exports = (fileName) => {
  fs.readFile(`${process.cwd()}/${fileName}`, (err, data) => {
    if (err) {
      throw err;
    } else {
      process.stdout.write(data.toString());
      process.stdout.write("\nPrompt > ");
    }
  });
};
