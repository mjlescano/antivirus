const jsonBody = require('fast-json-body');

module.exports = req => new Promise((resolve, reject) => {
  jsonBody(req, (err, body) => {
    if (err) return reject(err);
    return resolve(body);
  });
});
