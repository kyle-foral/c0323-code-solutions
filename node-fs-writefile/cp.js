import * as fs from 'node:fs/promises';

try {
  const input = process.argv[2];
  const output = process.argv[3];
  const reading = await fs.readFile(input);
  await fs.writeFile(output, reading);
} catch (err) {
  console.error(err);
}
