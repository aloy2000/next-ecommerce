exports.up = async(knex) => {
  await knex.schema.createTable("orders", (table) => {
    table.increments("id").primary()
    table.integer("userId").notNullable().references("id").inTable("users")
    table.text("state").notNullable()
    table.integer("addressId").notNullable().references("id").inTable("address")
  })
  await knex.schema.createTable("product_ordered", (table) => {
    table.increments("id").primary()
    table
      .integer("productId")
      .notNullable()
      .references("id")
      .inTable("products")
    table.integer("quantity")
    table
      .integer("orderId")
      .notNullable()
      .references("id")
      .inTable("orders")
      .onDelete("cascade")
  })
}

exports.down = async(knex) => {
  await knex.schema.dropTable("orders")
  await knex.schema.dropTable("product_ordered")
}
