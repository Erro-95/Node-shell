const fs = require("fs");

module.exports = (fileName, done) => {
  fs.readFile(`${__dirname}/${fileName}`, (err, data) => {
    if (err) throw err;
    else {
      done(data.toString().split('\n').slice(-10).join('\n'))

      //Code below works but is hard to understand

      // const arrOfHex = [...data].reverse();
      // const output = [];
      // let count = 10;

      // for (let hex of arrOfHex) {
      //   if (count === 1 && hex === 10) {
      //     count--;
      //   } else if (count > 1 && hex === 10) {
      //     output.push(hex);
      //     count = count - 1;
      //   } else if (count > 0) output.push(hex);
      // }

      // done(Buffer.from(output.reverse()));
    }
  });
};
