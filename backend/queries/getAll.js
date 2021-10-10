const knex = require('../db/knex');

module.exports = () => knex.select('*').from('movies');
