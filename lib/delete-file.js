const fs = require('fs');

module.exports = filepath => new Promise((resolve, reject) => {
  fs.unlink(filepath, (err) => {
    if (err) return reject(err);
    return resolve();
  });
});
