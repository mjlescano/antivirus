/* eslint-disable no-console, prefer-promise-reject-errors, no-process-exit */
const assert = require('assert');

exports.assert = assert;

const exec = (msg, fn) => new Promise((resolve, reject) => {
  try {
    const result = fn();

    if (result instanceof Promise) {
      result.then(resolve).catch(err => reject([msg, err]));
    } else {
      resolve(result);
    }
  } catch (err) {
    reject([msg, err]);
  }
});

const testCases = [];

process.nextTick(() => {
  Promise.all(testCases.map(([msg, fn]) => exec(msg, fn)))
    .then(() => {
      const count = testCases.length;
      console.log(`\n · ${count} test${count === 1 ? '' : 's'} passed\n`);
      process.exit(0);
    })
    .catch(([msg, err]) => {
      console.log(`\n · Test failed: ${msg}\n`);
      console.error(err);
      process.exit(1);
    });
});

exports.test = (msg, fn) => testCases.push([msg, fn]);
