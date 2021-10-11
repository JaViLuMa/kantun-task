const knex = require('../db/knex');

module.exports = async (name, genre, rating, explicit) =>
  await knex('movies')
    .insert({
      name,
      genre,
      rating: parseInt(rating, 10),
      explicit: explicit.toLowerCase() === 'true',
    })
    .catch(console.log)
    .then(() => {});
