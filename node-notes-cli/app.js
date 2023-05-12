import * as fs from 'node:fs/promises';

try {
  if (process.argv[2] === 'read') {
    await read();
  }
  if (process.argv[2] === 'create') {
    await create();
  }
  if (process.argv[2] === 'update') {
    await update();
  }
  if (process.argv[2] === 'delete') {
    await remove();
  }
} catch (err) {
  console.error('Error:', err.message);
}

async function read() {
  const content = await fs.readFile('data.json');
  const info = JSON.parse(content);
  const notes = info.notes;
  const done = JSON.stringify(notes, null, 2);
  console.log(done);
}

async function create() {
  const input = process.argv[3];
  const content = JSON.parse(await fs.readFile('./data.json', 'utf8'));
  content.notes[content.nextId] = input;
  content.nextId++;
  const final = JSON.stringify(content, null, 2);
  await fs.writeFile('./data.json', final);
}

async function update() {
  const number = process.argv[3];
  const input = process.argv[4];
  const content = JSON.parse(await fs.readFile('data.json'));
  content.notes[number] = input;
  const final = JSON.stringify(content, null, 2);
  await fs.writeFile('data.json', final);
}

async function remove() {
  const number = process.argv[3];
  const content = JSON.parse(await fs.readFile('data.json'));
  delete content.notes[number];
  const final = JSON.stringify(content, null, 2);
  await fs.writeFile('data.json', final);
}
