require("dotenv").config();
const Sequelize = require("sequelize");

const postgresPass = process.env.POSTGRES_PASS;

const db = new Sequelize(
  process.env.DATABASE_URL ||
    `postgres://postgres:${postgresPass}@localhost:5432/messenger`,
  {
    logging: false,
  }
);

module.exports = db;
