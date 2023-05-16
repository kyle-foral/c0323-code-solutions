import express from 'express';
import * as fs from 'node:fs/promises';

const app = express();

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
  const id = Number(req.params.id);
  let outcome = {};
  outcome.error = `Cannot find note with id ${id}`;
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

app.use(express.json());

app.post('/api/notes', (req, res) => {
  console.log(req.method);

  console.log('body', req.body);

  if (req.body.content === undefined) {
    const error1 = {};
    error1.error = 'content is a required field';
    res.status(400).json(error1);
  } else if (req.body.content !== undefined) {
    req.body.id = data.nextId;
    notes[data.nextId] = req.body;
    data.nextId++;
    const final = JSON.stringify(data, null, 2);
    fs.writeFile('data.json', final, 'utf8', (err) => {
      if (err) {
        const error2 = {};
        error2.error('An unexpected error has occured');
        res.status(500).json(error2);
      }
      res.status(201).json(req.body);
    });
  }
});

app.delete('/api/notes/:id', (req, res) => {
  const id = Number(req.params.id);
  if (id < 0) {
    const error1 = {};
    error1.error('id must be a positive integer');
    res.status(400).json(error1);
  } else if (notes[id] === undefined) {
    const error2 = {};
    error2.error = `cannot find note with id ${id}`;
    res.status(404).json(error2);
  } else if (notes[id] !== undefined) {
    delete notes[id];
    const final = JSON.stringify(data, null, 2);
    fs.writeFile('data.json', final, 'utf8', (err) => {
      if (err) {
        const error3 = {};
        error3.error = 'An unexpected error occured';
        res.status(500).json(error3);
      }
      res.sendStatus(204);
    });
  }
});

app.put('/api/notes/:id', (req, res) => {
  const id = Number(req.params.id);
  if (id < 0) {
    const error1 = {};
    error1.error = 'id must be a positive integer';
    res.status(400).json(error1);
  } else if (req.body.content === undefined) {
    const error2 = {};
    error2.error = 'content is a required field';
    res.status(400).json(error2);
  } else if (notes[id] === undefined) {
    const error3 = {};
    error3.error(`cannot find note with id ${id}`);
    res.status(404).json(error3);
  } else if (
    id > 0 &&
    req.body.content !== undefined &&
    notes[id] !== undefined
  ) {
    notes[id].content = req.body.content;
    const final = JSON.stringify(data, null, 2);
    fs.writeFile('data.json', final, 'utf8', (err) => {
      if (err) {
        const error4 = {};
        error4.error = 'an unexpected erro has occured';
        res.status(500).json(error4);
      }
      res.status(200).json(notes[id]);
    });
  }
});

app.listen(8080, () => {
  console.log('Express server listening on port 8080');
});
