// const mysql = require('mysql2');

// const pool = mysql.createPool({
//     host: 'localhost',
//     user: 'root',
//     password: '',
//     database: 'rbac_db',
//     waitForConnections: true,
//     connectionLimit: 10,
//     queueLimit: 0
// });

// module.exports = pool.promise();


const mysql = require('mysql2');
require('dotenv').config();

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT,
  ssl: process.env.DB_SSL === 'true' ? {rejectUnauthorized: true} : false,
  connectionLimit: 10
});

const promisePool = pool.promise();

module.exports = promisePool;