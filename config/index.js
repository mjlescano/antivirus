let development;

try {
  // eslint-disable-next-line global-require
  development = require('./development.json');
} catch (err) {
  development = null;
}

module.exports = Object.assign({
  port: process.env.PORT || 3000,
  clamscanPath: process.env.CLAMSCAN_PATH || '/usr/bin/clamscan',
  clamscanLog: process.env.CLAMSCAN_LOG || null,
  scanTempFolder: process.env.SCAN_TEMP_FOLDER || 'tmp',
}, development);
