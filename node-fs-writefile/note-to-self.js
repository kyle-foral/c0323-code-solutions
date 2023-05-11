import * as fs from 'node:fs/promises';

try {
  const input = process.argv[2];
  await fs.writeFile('note.txt', `${input}\n`);
} catch (err) {
  console.error(err);
}
