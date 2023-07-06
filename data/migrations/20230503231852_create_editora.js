/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('editora', (table)=> {
    table.increments();
    table.string("nome",30).notNullable();
    table.string("cidade",30).notNullable();
    table.string("estado",30).notNullable();
    table.string("telefone",15).notNullable();
    table.string("rua",50).notNullable();
    table.string("cep",10).notNullable();
  });
};
exports.down = function(knex) {
  return knex.schema.dropTable("editora");
};
