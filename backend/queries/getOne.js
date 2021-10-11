const knex = require('../db/knex');

module.exports = async (id) => await knex('movies').where('id', id);
