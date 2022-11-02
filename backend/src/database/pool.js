const { Pool } = require('pg');
const config = require('../../config')();

const databaseConfig = { connectionString: config.database.connection };
const pool = new Pool(databaseConfig);

module.exports = pool;