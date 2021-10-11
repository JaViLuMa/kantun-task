const knex = require('../db/knex');

module.exports = (id) => knex('movies').where('id', id);
