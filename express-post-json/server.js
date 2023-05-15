import express from 'express';

const app = express();

const grades = {};
let nextId = 1;

app.use(express.json());

app.get('/api/grades', (req, res) => {
  console.log(req.method);
  const array = [];
  for (const id in grades) {
    array.push(grades[id]);
  }
  res.json(array);
});

app.post('/api/grades', (req, res) => {
  console.log(req.method);
  const insert = req.body;
  insert.id = nextId;
  nextId++;
  grades[nextId] = insert;
  res.status(201).json(insert);
  console.log(grades);
});

app.listen(8080, () => {
  console.log('Express server listening on port 8080');
});
