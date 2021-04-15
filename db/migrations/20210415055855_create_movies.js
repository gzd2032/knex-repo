
exports.up = function(knex) {
  return knex.schema.createTable('movies', table => {
      table.increments('id').primary();
      table.string('title', 255).notNullable();
      table.string('genre', 50);
      table.date('release_date').notNullable();
      table.timestamps(true, true);
  })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('movies');
  };
