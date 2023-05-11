import * as fs from 'node:fs/promises';

try {
  const number = Math.random();
  await fs.writeFile('random.txt', `${number}\n`);
} catch (err) {
  console.error(err);
}
