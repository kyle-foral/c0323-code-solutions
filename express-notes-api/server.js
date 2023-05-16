import express from 'express';
import * as fs from 'node:fs/promises';

const app = express();
app.use(express.json());

const data = JSON.parse(await fs.readFile('data.json'));
const notes = data.notes;

app.get('/api/notes', async (req, res) => {
  console.log(req.method);
  const array = [];
  for (const id in notes) {
    array.push(notes[id]);
  }
  res.status(200).json(array);
});

app.get('/api/notes/:id', async (req, res) => {
  console.log(req.method);
  const id = Number(req.params.id);
  let outcome = { error: `Cannot find note with id ${id}` };
  let statusCode = 404;
  if (id < 0) {
    statusCode = 400;
    outcome.error = 'id must be a positive integer';
  } else {
    const array = [];
    for (const property in notes) {
      array.push(notes[property]);
    }
    for (let i = 0; i < array.length; i++) {
      if (id === array[i].id) {
        statusCode = 200;
        outcome = array[i];
      }
    }
  }
  res.status(statusCode).json(outcome);
});

app.post('/api/notes', async (req, res) => {
  console.log(req.method);

  console.log('body', req.body);

  if (req.body.content === undefined) {
    res.status(400).json({ error: 'content is a required field' });
  } else if (req.body.content !== undefined) {
    req.body.id = data.nextId;
    notes[data.nextId] = req.body;
    data.nextId++;
    const final = JSON.stringify(data, null, 2);
    fs.writeFile('data.json', final, 'utf8', (err) => {
      if (err) {
        res.status(500).json({ error: 'An unexpected error has occured' });
      }
      res.status(201).json(req.body);
    });
  }
});

app.delete('/api/notes/:id', async (req, res) => {
  const id = Number(req.params.id);
  if (id < 0) {
    res.status(400).json({ error: 'id must be a positive integer' });
    return;
  }
  if (notes[id] === undefined) {
    res.status(404).json({ error: `cannot find note with id ${id}` });
    return;
  }
  if (notes[id] !== undefined) {
    delete notes[id];
    const final = JSON.stringify(data, null, 2);
    fs.writeFile('data.json', final, 'utf8', (err) => {
      if (err) {
        res.status(500).json({ error: 'An unexpected error occured' });
      }
      res.sendStatus(204);
    });
  }
});

app.put('/api/notes/:id', async (req, res) => {
  const id = Number(req.params.id);
  if (id < 0) {
    res.status(400).json({ error: 'id must be a positive integer' });
    return;
  }
  if (req.body.content === undefined) {
    res.status(400).json({ error: 'content is a required field' });
    return;
  }
  if (notes[id] === undefined) {
    res.status(404).json({ error: `cannot find note with id ${id}` });
    return;
  }
  if (id > 0 && req.body.content !== undefined && notes[id] !== undefined) {
    notes[id].content = req.body.content;
    const final = JSON.stringify(data, null, 2);
    fs.writeFile('data.json', final, 'utf8', (err) => {
      if (err) {
        res.status(500).json({ error: 'an unexpected erro has occured' });
      }
      res.status(200).json(notes[id]);
    });
  }
});

app.listen(8080, () => {
  console.log('Express server listening on port 8080');
});
