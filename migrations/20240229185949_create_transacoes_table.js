  /**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
  export const up = function(knex) {
    return knex.schema.createTable('transacoes', (table) => {
      table.bigIncrements('id');
      table.date('data');
      table.string('descricao');
      table.float('valor')
      table.bigint('categoria_id').unsigned().references('id').inTable('categories');
      table.bigint('user_id').unsigned().references('id').inTable('users');
      table.timestamps(true, true)
    })
  };
  
  /**
  * @param { import("knex").Knex } knex
  * @returns { Promise<void> }
  */
  export const down = function(knex) {
    return knex.schema.dropTable('transacoes');
  };