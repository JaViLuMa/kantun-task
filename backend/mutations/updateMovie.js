const knex = require('../db/knex');

module.exports = async (id, name, genre, rating, explicit) =>
  await knex('movies')
    .where('id', id)
    .update({
      name,
      genre,
      rating: parseInt(rating, 10),
      explicit: explicit.toLowerCase() === 'true',
    })
    .catch(console.log)
    .then(() => {});
