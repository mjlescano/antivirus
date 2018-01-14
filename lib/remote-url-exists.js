const request = require('./request');

module.exports = target => request('HEAD', target).then(() => target);
