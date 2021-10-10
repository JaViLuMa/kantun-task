const express = require('express');
const knex = require('./db/knex');

const queriesGetAll = require('./queries/getAll');
const queriesGetOne = require('./queries/getOne');

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

  response.json(results);
});
