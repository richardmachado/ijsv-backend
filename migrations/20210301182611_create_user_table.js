exports.up = async function (knex) {
  await knex.schema.createTable("users", (table) => {
    table.increments("id").unique();
    table.string("username").unique().notNullable();
    table.string("password").notNullable();
  });
  await knex.schema.createTable("temas", (table ) => {
    table.increments();
    table.string("title", 128).notNullable();
    table.string("body1", 10000).notNullable();
    table.string("body2", 10000);
    table.string("body3", 10000);
  });
};

exports.down = async function (knex) {
  await knex.schema.dropTableIfExists("temas");
  await knex.schema.dropTableIfExists("users");
};
