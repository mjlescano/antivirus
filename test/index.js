const { resolve } = require('path');
const check = require('../lib/check');
const { assert, test } = require('./support/test');

const file = filepath => resolve(__dirname, filepath);

test('lib#check should resolve to false with a clean file', () => (
  check(file('./files/clean.txt'))
    .then(isInfected => assert(isInfected === false))
));

test('lib#check should resolve to true with an infected file', () => (
  check(file('./files/infected.txt'))
    .then(isInfected => assert(isInfected))
));

