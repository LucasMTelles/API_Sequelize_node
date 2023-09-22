//Importando o framework express
const express = require("express");

//Importando o arquivo do usercontroller, que contem o as funções de criar, buscar, atualizar e deletar os dados do usuário.
const usercontroller = require("./controllers/usercontroller");

//Inicializar os rotas
const routes = express.Router();

//Criando a rota /users utilizando o método post para cadastrar o usuário na aplicação/banco de dados.
routes.post("/users", usercontroller.store);

//Rota para buscar os dados dos usuários que foram cadastrados no banco de dados.
routes.get("/users", usercontroller.index);

//Rota para deletar um registro na aplicação
routes.delete("/users/:id", usercontroller.delete);

routes.put("/users", usercontroller.update);

module.exports = routes;