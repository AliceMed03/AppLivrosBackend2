//importa a biblioteca knex
const knex = require('knex');
//importa o arquivo de configuração do knex
const config = require("../knexfile.js");
//cria a configuração de desenvolvimento
const dbKnex = knex(config.development);
//exportar a configuração através da constante dbKnex
module.exports = dbKnex;
