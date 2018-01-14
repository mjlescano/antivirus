const path = require('path');
const crypto = require('crypto');
const request = require('./request');
const writeFile = require('./write-file');

module.exports = (folder, uri) => {
  const filename = crypto.randomBytes(24).toString('hex');
  const dest = path.resolve(folder, filename);

  return request('get', uri)
    .then(writeFile.bind(null, dest))
    .then(() => dest);
};
