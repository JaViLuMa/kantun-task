const knex = require('../db/knex');

module.exports = (name, genre, rating, explicit) =>
  knex('movies')
    .insert({
      name,
      genre,
      rating: parseInt(rating, 10),
      explicit: explicit.toLowerCase() === 'true',
    })
    .catch(console.log)
    .then(() => {});
