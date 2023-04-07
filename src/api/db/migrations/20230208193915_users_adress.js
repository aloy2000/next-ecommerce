exports.up = async(knex) => {
  await knex.schema.createTable("users", (table) => {
    table.increments("id").primary()
    table.text("firstName").notNullable()
    table.text("familyName").notNullable()
    table.text("email").notNullable()
    table.text("password").notNullable()
    table.text("salt").notNullable()
    table.text("numberPhone").notNullable()
  })
  await knex.schema.createTable("address", (table) => {
    table.increments("id").primary()
    table.integer("postalCode").notNullable()
    table.text("town").notNullable()
    table.text("street").notNullable()
    table.text("country").notNullable()
    table
      .integer("userId")
      .notNullable()
      .references("id")
      .inTable("users")
      .onDelete("cascade")
  })
}

exports.down = async(knex) => {
  await knex.schema.dropTable("address")
  await knex.schema.dropTable("users")
}
