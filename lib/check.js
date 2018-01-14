const clamscan = require('clamscan');
const config = require('../config');

module.exports = filepath => new Promise((resolve, reject) => {
  const scan = clamscan({
    remove_infected: false,
    quarantine_infected: false,
    scan_recursively: false,
    scan_log: config.clamscanLog,
    clamscan: {
      path: config.clamscanPath,
      scan_archives: true,
      db: null,
      active: true,
    },
    preference: 'clamscan',
  });

  scan.is_infected(filepath, (err, file, isInfected) => {
    if (err) return reject(err);
    return resolve(isInfected);
  });
});
