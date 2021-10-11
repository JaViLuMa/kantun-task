const knex = require('../db/knex');

module.exports = async () => await knex('movies').select('*');
