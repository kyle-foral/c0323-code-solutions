import * as fs from 'node:fs/promises';

try {
  const number = Math.random();
  const text = number.toString();
  await fs.writeFile('random.txt', `${text}\n`);
} catch (err) {
  console.error(err);
}
