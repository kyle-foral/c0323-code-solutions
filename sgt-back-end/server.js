import express from 'express';
import pg from 'pg';
// only create ONE pool for your whole server
const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/studentGradeTable',
  ssl: {
    // Allow non-SSL traffic to localhost
    rejectUnauthorized: false,
  },
});
const app = express();
app.use(express.json());

app.get('/api/grades', async (req, res) => {
  try {
    console.log(req.method);
    const sql = `
      select *
        from "grades"
    `;
    const result = await db.query(sql);
    const grade = result.rows;
    if (grade) {
      res.status(200).json(grade);
      return;
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'An unexpected error occurred.' });
  }
});

app.post('/api/grades', async (req, res) => {
  try {
    console.log(req.method);
    if (
      req.body.name === undefined ||
      req.body.course === undefined ||
      req.body.score === undefined ||
      Number(req.body.score) > 100 ||
      Number(req.body.score) < 0
    ) {
      res
        .status(400)
        .json({
          error:
            'name and course is a required field that is valid. Score must be a valid number between 0 and 100',
        });
      return;
    }
    const text = `
insert into "grades"("name", "course", "score")
values ($1, $2, $3) RETURNING*`;
    const values = [req.body.name, req.body.course, req.body.score];
    db.query(text, values, (res2) => {
      res.status(201).json(res2.rows[0]);
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'An unexpected error occurred.' });
  }
});

app.put('/api/grades/:gradeId', async (req, res) => {
  try {
    console.log(req.method);
    const id = Number(req.params.gradeId);
    let foundGradeId = false;
    if (id < 0 || Number.NaN(id)) {
      res.status(400).json({ error: `${id} is an invalid number` });
      return;
    }
    if (
      req.body.name === undefined ||
      req.body.course === undefined ||
      req.body.score === undefined ||
      Number(req.body.score) > 100 ||
      Number(req.body.score) < 0
    ) {
      res
        .status(400)
        .json({
          error:
            'name and course is a required field that is valid. Score must be a valid number between 0 and 100',
        });
      return;
    }
    const selectSql = `SELECT "gradeId",
                            "name",
                            "course",
                            "score",
                            "createdAt"
                      FROM "grades"`;
    db.query(selectSql, (res3) => {
      for (let i = 0; i < res3.rows.length; i++) {
        if (res3.rows[i].gradeId === id) {
          foundGradeId = true;
          const text = `UPDATE grades
                      SET name=$1,
                        course=$2,
                        score=$3
                        where "gradeId"=$4
                        RETURNING*`;
          const values = [req.body.name, req.body.course, req.body.score, id];

          db.query(text, values, (res2) => {
            return res.status(200).json(res2.rows[0]);
          });
          break;
        }
      }
      if (foundGradeId === false) {
        return res
          .status(404)
          .json({ error: 'the gradeId entered does not exist' });
      }
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'An unexpected error occurred.' });
  }
});

app.delete('/api/grades/:gradeId', async (req, res) => {
  try {
    console.log(req.method);
    const id = Number(req.params.gradeId);
    let foundGradeId = false;
    if (id < 0 || Number.isNaN(id)) {
      return res
        .status(400)
        .json({ error: 'gradeId must be a positive integer' });
    }
    const sqlSelect = `SELECT "gradeId",
                          "name",
                          "course",
                          "score",
                          "createdAt"
                      FROM "grades"`;
    db.query(sqlSelect, (res3) => {
      for (let i = 0; i < res3.rows.length; i++) {
        if (res3.rows[i].gradeId === id) {
          foundGradeId = true;
          const text = `DELETE FROM "grades"
                          where "gradeId"=$1
                          RETURNING*`;
          const values = [id];
          db.query(text, values, (res2) => {
            return res.sendStatus(204);
          });
          break;
        }
      }
      if (foundGradeId === false) {
        return res
          .status(404)
          .json({ error: 'the gradeId entered does not exist' });
      }
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'An unexpected error occurred.' });
  }
});

app.listen(8080, () => {
  console.log('server listening on 8080');
});
