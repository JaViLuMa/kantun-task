const knex = require('../db/knex');

module.exports = (id) => knex.select('*').from('movies').where('id', id);
