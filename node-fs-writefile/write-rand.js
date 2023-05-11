import * as fs from 'node:fs/promises';

const number = Math.random();
const text = number.toString();
const final = `${text} \n`;
const msg = await fs.writeFile('random.txt', final);
console.log(msg);
