const fs = require('fs');

module.exports = (dest, stream) => new Promise((resolve, reject) => {
  const file = fs.createWriteStream(dest);

  stream
    .on('data', data => file.write(data))
    .on('error', reject)
    .on('end', () => {
      file.end();
      file.on('close', resolve);
    });
});
