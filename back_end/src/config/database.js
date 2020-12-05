require('dotenv/config');
const pg = require("pg")
const { Pool } = require("pg")

const pool = new Pool({
  "user": "postgres",
  "host": "localhost",
  "database": process.env.DATABASE_NAME,
  "password": process.env.PASSWORD,
  "port": process.env.DATABASE_PORT,
  "max": 20,
  "connectionTimeoutMillis": 0,
  "idleTimeoutMillis": 0
})

module.exports = pool