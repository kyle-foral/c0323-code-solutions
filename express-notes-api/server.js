import express from 'express';
import * as fs from 'node:fs/promises';

const app = express();

try {
  if (app.use === app.get) {
    await app.get();
  }
  if (app.use === app.post) {
    await app.post();
  }
  if (app.use === app.delete) {
    await app.delete();
  }
  if (app.use === app.put) {
    await app.put();
  }
} catch (error) {
  console.error(error);
}

const data = JSON.parse(await fs.readFile('data.json'));
const notes = data.notes;

app.get('/api/notes', (req, res) => {
  console.log(req.method);
  const array = [];
  for (const id in notes) {
    array.push(notes[id]);
  }
  res.status(200).json(array);
});

app.get('/api/notes/:id', (req, res) => {
  console.log(req.method);
  const array = [];
  for (const id in notes) {
    array.push(notes[id]);
    console.log(array[1]);
    if (req.params.id < 0) {
      res.status(400);
      throw new Error(res.json('error: Id must be a positive integer'));
    }
    for (let i = 0; i < array.length; i++) {
      if (req.params.id !== array[i].id) {
        res.status(404);
        throw new Error(
          res.json(`error: cannot find note with id ${req.params.id}`)
        );
      } else {
        res.status(200).json(notes[req.params.id]);
      }
    }
  }
});

app.post('/api/notes', (req, res) => {
  console.log(req.method);
  const content = req.body;
  // content.id = nextId
  // nextId++
  // notes[nextId] = content
  res.status(201).json(content);
  console.log(content);
});

app.listen(8080, () => {
  console.log('Express server listening on port 8080');
});
