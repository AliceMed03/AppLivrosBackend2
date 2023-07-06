/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('autores', (table)=> {
    table.increments();
    table.string("nome",30).notNullable();
    table.string("sobrenome",80).notNullable();
    table.integer("idade",4).notNullable();
    table.date("data_nascimento").notNullable();
    table.string("sexo",10).notNullable();
    table.string("telefone",15).notNullable();
  });
};
exports.down = function(knex) {
  return knex.schema.dropTable("autores");
};
