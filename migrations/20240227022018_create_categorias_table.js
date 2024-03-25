  /**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
  export const up = function(knex) {
    return knex.schema.createTable('categories', (table) => {
      table.bigIncrements('id');
      table.string('classificacao');
      table.string('categoria');
      table.string('tipo');
      table.bigint('user_id').unsigned().references('id').inTable('users');
      table.timestamps(true, true)
    })
  };
  
  /**
  * @param { import("knex").Knex } knex
  * @returns { Promise<void> }
  */
  export const down = function(knex) {
    return knex.schema.dropTable('categories');
  };