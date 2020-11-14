const fs = require("fs");

module.exports = (done) => {
  fs.readdir(__dirname, (err, data) => {
    if (err) {
      throw err;
    } else {
      done(
        data
          .map((element, index) => {
            if (index !== 0) {
              return `   ${element}`;
            }
            return `${element}`;
          })
          .join("")
      );
    }
  });
};
