const knex = require('../db/knex');

module.exports = () => knex('movies').select('*');
