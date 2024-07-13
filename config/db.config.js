const Sequelize = require("sequelize");
let User = require("../models/user.model.js");

const orm = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
    pool: {
      max: 10,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  }
);
const db = {};
db.Sequelize = Sequelize;
db.orm = orm;
//Table schema design
db.user = User(orm, Sequelize);

//Export
module.exports = db;