const fs = require("fs");

module.exports = (fileName, done) => {
  fs.readFile(`${process.cwd()}/${fileName}`, (err, data) => {
    if (err) {
      throw err;
    } else {
      done(data.toString());
    }
  });
};
