const http = require('http');
const router = require('micro-pico-router');
const parseBody = require('./lib/parse-body');
const remoteUrlExists = require('./lib/remote-url-exists');
const config = require('./config');

const app = router();

app.post('/file/scan', (req, res) => {
  parseBody(req).then((body) => {
    if (!body || !body.file) throw new Error('Missing "file" parameter,');
    return remoteUrlExists(body.file);
  }).then((file) => {
    // scan here
    res.writeHead(200, { 'Content-Type': 'application/json' })
    res.end(JSON.stringify({ status: 'pending' }));
  }).catch((err) => {
    res.writeHead(400, { 'Content-Type': 'application/json' })
    res.end(JSON.stringify({ error: err.message }));
  });
});

const server = http.createServer(app).listen(config.port, () => {
  console.log(` · Server running at port ${config.port} ·`)
});
