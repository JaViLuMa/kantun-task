const express = require('express');
const knex = require('./db/knex');

const queriesGetAll = require('./queries/getAll');
const queriesGetOne = require('./queries/getOne');

const mutationsInsert = require('./mutations/insertMovie');
const mutationsUpdate = require('./mutations/updateMovie');
const mutationsDelete = require('./mutations/deleteMovie');

const app = express();
const port = 9000;

app.use(express.json());

app.listen(port, () => console.log(`listening on port: ${port}`));

app.get('/', (request, response) => {
  response.send('Hello Kantun Dev team! :D');
});

app.get('/api/v1/movies', async (request, response) => {
  const results = await queriesGetAll();

  response.json(results);
});

app.get('/api/v1/movies/:id', async (request, response) => {
  const id = request.params.id;

  const results = await queriesGetOne(id);

  response.send(results);
});

app.post('/api/v1/movies', async (request, response) => {
  let name = request.body.name || request.query.name;
  let genre = request.body.genre || request.query.genre;
  let rating = request.body.rating || request.query.rating;
  let explicit = request.body.explicit || request.query.explicit;

  console.log(request.body);

  const results = mutationsInsert(name, genre, rating, explicit);

  response.send(await queriesGetAll());
});

app.put('/api/v1/movies/:id', async (request, response) => {
  const id = request.params.id;

  let name = request.body.name || movie[0].name || request.query.name;
  let genre = request.body.genre || movie[0].genre || request.query.genre;
  let rating = request.body.rating || movie[0].rating || request.query.rating;
  let explicit =
    request.body.explicit ||
    String(movie[0].explicit) ||
    request.query.explicit;

  const results = mutationsUpdate(id, name, genre, rating, explicit);

  response.send(await queriesGetOne(request.params.id));
});

app.delete('/api/v1/movies/:id', async (request, response) => {
  const id = request.params.id;

  const results = mutationsDelete(id);

  response.send(await queriesGetAll());
});

app.use((req, res, next) => {
  res.status(404).send('<h1>Page not found!</h1>');
});
