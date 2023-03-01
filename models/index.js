const config = require("../config/config");
const Room = require("././room");
const User = require("././user");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(
    config.DB,
    config.USER,
    config.PASSWORD,
    {
        host: config.HOST,
        dialect: config.dialect,
        port: config.PORT
    }
);

sequelize.authenticate().then(() => {
    console.log('Connection Succesfully Established!');
}).catch(err => {
    console.error('Database Connection Failed:', err);
})

const db = {}

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.room = Room(sequelize, Sequelize);
db.user = User(sequelize, Sequelize, db.room);

module.exports = db;