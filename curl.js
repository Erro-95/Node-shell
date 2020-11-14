const request = require("request");

module.exports = (url, done) => {
  request(`https://www.${url}`, (err, res, body) => {
    if (err) throw err;
    else {
      done(JSON.stringify(res.body));
    }
  });
};
