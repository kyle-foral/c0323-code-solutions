import * as fs from 'node:fs/promises';

const input = process.argv[2];
const msg = await fs.writeFile('note.txt', input);
console.log(msg);
