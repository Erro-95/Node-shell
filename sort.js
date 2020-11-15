const fs = require("fs");

module.exports = (fileName, done) => {
  fs.readFile(`${__dirname}/${fileName}`, (err, data) => {
    if (err) throw err;
    else {
      data(data.toString().split("\n").sort().join("\n"));

      // Code below also sorts but not correctly, when comparing it to the real 'sort' bash command
      // the sort doesnt seem be the same.

      // const arrOfLines = [];
      // let indx = 0;

      // for (let hex of data) {
      //   if (!Array.isArray(arrOfLines[indx])) arrOfLines[indx] = [];
      //   if (hex === 10) {
      //     arrOfLines[indx].push(hex);
      //     indx++;
      //   } else arrOfLines[indx].push(hex);
      // }

      // const output = arrOfLines
      //   .sort()
      //   .join()
      //   .split(",")
      //   .reduce((accum, next) => {
      //     accum.push(parseInt(next));
      //     return accum;
      //   }, []);
      // done(Buffer.from(output));
    }
  });
};
