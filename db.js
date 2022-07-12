const Sequelize = require('sequelize');

const database = new Sequelize(process.env.DATABASE,process.env.USER,process.env.PASSWORD, {
    host: process.env.HOST,
    port: process.env.DPORT,
    dialect: 'postgres'
})

module.exports = database;