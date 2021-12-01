
exports.up = function (knex) {
    return knex.schema
      .createTable('token', (table) => {
        table.increments('id').primary();
        table.string('auth_token', 1000).notNullable();
        table.string('created_at').notNullable();
      })
  };

exports.down = function(knex) {
    return knex.schema.dropTable('token');
};
