const { Pool } = require('pg');

const pool = new Pool({
    user: '',
    host: 'localhost',
    password: '',
    database: 'porth',
    port: '5432'
});

module.exports = pool;