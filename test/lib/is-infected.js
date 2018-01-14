import test from 'ava';
import { resolve } from 'path';
import isInfected from '../../lib/is-infected';

const file = filepath => resolve(__dirname, filepath);

test('lib#isInfected with a clean file', async (t) => {
  const result = isInfected(file('../files/clean.txt'))
  t.is(await result, false);
});

test('lib#isInfected with an infected file', async (t) => {
  const result = isInfected(file('../files/infected.txt'))
  t.is(await result, true);
});
