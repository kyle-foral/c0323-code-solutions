import { readFile } from 'node:fs/promises';

const [, , ...files] = process.argv;
const promises = files.map((files) => readFile(files, 'utf8'));
try {
  const contents = await Promise.all(promises);
  console.log(`${contents}\n`);
} catch (err) {
  console.error(err.message);
}
