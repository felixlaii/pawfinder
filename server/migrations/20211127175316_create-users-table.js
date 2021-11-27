
exports.up = function (knex) {
    return knex.schema
      .createTable('users', (table) => {
        table.increments('userId').primary();
        table.string('firstName').notNullable();
        table.string('lastName').notNullable();
        table.string('username').notNullable();
        table.string('password').notNullable();
        table.string('searchRadius');
        table.string('animalType');
        table.string('breedType');
        table.string('age');
        table.timestamp('updated_at').defaultTo(knex.fn.now());
      })
  };

exports.down = function(knex) {
    return knex.schema.dropTable('users');
};
