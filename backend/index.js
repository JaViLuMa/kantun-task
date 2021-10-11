const express = require('express');
const knex = require('./db/knex');

const queriesGetAll = require('./queries/getAll');
const queriesGetOne = require('./queries/getOne');

const mutationsInsert = require('./mutations/insertMovie');
const mutationsUpdate = require('./mutations/updateMovie');
const mutationsDelete = require('./mutations/deleteMovie');

const app = express();
const port = 9000;

app.set('json spaces', 2);

app.listen(port, () => console.log(`listening on port: ${port}`));

app.get('/', (request, response) => {
  response.send('Hello Kantun Dev team! :D');
});

app.get('/api/v1/movies', async (request, response) => {
  const results = await queriesGetAll();

  response.json(results);
});

app.get('/api/v1/movies/:id', async (request, response) => {
  const results = await queriesGetOne(request.params.id);

  response.send(results);
});

app.post('/api/v1/movies', async (request, response) => {
  let name = request.query.name;
  let genre = request.query.genre;
  let rating = request.query.rating;
  let explicit = request.query.explicit;

  const results = mutationsInsert(name, genre, rating, explicit);

  response.send(await queriesGetAll());
});

app.put('/api/v1/movies/:id', async (request, response) => {
  const movie = await queriesGetOne(request.params.id);

  let name = request.query.name || movie[0].name;
  let genre = request.query.genre || movie[0].genre;
  let rating = request.query.rating || movie[0].rating;
  let explicit = request.query.explicit || String(movie[0].explicit);

  const results = mutationsUpdate(
    request.params.id,
    name,
    genre,
    rating,
    explicit
  );

  response.send(await queriesGetOne(request.params.id));
});

app.delete('/api/v1/movies/:id', async (request, response) => {
  const results = mutationsDelete(request.params.id);

  response.send(await queriesGetAll());
});
