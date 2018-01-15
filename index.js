const http = require('http');
const router = require('micro-pico-router');
const parseBody = require('./lib/parse-body');
const remoteUrlExists = require('./lib/remote-url-exists');
const downloadFile = require('./lib/download-file');
const deleteFile = require('./lib/delete-file');
const isInfected = require('./lib/is-infected');
const config = require('./config');

const app = router();

app.post('/file/scan', (req, res) => {
  parseBody(req).then((body) => {
    if (!body || !body.file) throw new Error('Missing "file" parameter,');
    return remoteUrlExists(body.file);
  }).then((file) => {
    let tempfile;
    downloadFile(config.scanTempFolder, file)
      .then((filepath) => {
        tempfile = filepath
        return filepath;
      })
      .then(isInfected)
      .then((hasVirus) => {
        console.log(file, `is infected: ${hasVirus}`)
      })
      .catch((err) => console.error(err))
      .then(() => deleteFile(tempfile))
      .catch((err) => console.error('Couldnt delete file', err))

    res.writeHead(200, { 'Content-Type': 'application/json' })
    res.end(JSON.stringify({ status: 'pending' }));
  }).catch((err) => {
    res.writeHead(400, { 'Content-Type': 'application/json' })
    res.end(JSON.stringify({ error: err.message }));
  });
});

if (module === require.main) {
  http.createServer(app).listen(config.port, () => {
    console.log(` · Server running at port ${config.port} ·`)
  });
}

module.exports = app;
