const Sequelize = require("sequelize") //importando o ORM sequelize

const dbconfig = require("../config/database"); //importando o arquivo de configuração do banco de dados

const User = require("../models/User"); //importando o modelo da tabelo de users

const connection = new Sequelize(dbconfig); //criando a conexão com o banco de dados

User.init(connection); //inicializando a conexão com o banco de dados.

module.exports = connection; //exportando a conexão com o banco de dados