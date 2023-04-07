exports.up = async(knex) => {
  await knex.schema.createTable("images", (table) => {
    table.increments("id").primary()
    table.text("link").notNullable()
    table.text("alt").notNullable()
  })
}

exports.down = async(knex) => {
  await knex.schema.dropTable("images")
}
