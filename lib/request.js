const http = require('http');
const https = require('https');
const url = require('url');

const request = (opts = {}, cb) => {
  const requester = opts.protocol === 'https:' ? https : http;
  return requester.request(opts, cb);
};

const isValidMethod = method => http.METHODS.includes(method.toUpperCase());

module.exports = (method, target) => new Promise((resolve, reject) => {
  if (typeof method !== 'string' || !isValidMethod(method)) {
    throw new Error(`Invalid method ${method}`);
  }

  let uri;

  try {
    uri = url.parse(target);
  } catch (err) {
    reject(new Error(`Invalid url ${target}`));
  }

  const options = {
    method,
    host: uri.host,
    protocol: uri.protocol,
    port: uri.port,
    path: uri.path,
    timeout: 5 * 1000,
  };

  const req = request(options, (res) => {
    const { statusCode } = res;

    if (statusCode >= 200 && statusCode < 300) {
      res.req = req;
      resolve(res);
    } else {
      const err = new Error(`Url ${target} responded with status ${statusCode}.`);
      err.req = req;
      err.res = res;
      reject(err);
    }
  });

  req.on('error', reject);

  req.end();
});
