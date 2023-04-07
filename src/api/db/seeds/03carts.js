const fakerApp = require("@faker-js/faker")
const faker = fakerApp.faker

module.exports.seed = async (knex) => {
  await knex("carts").del()

  const carts = []
  for (let i = 0; i < 10; i++) {
    const cart = {
      userId: faker.datatype.number({ min: 1, max: 10 }),
      productId: faker.datatype.number({ min: 1, max: 20 }),
      quantity: faker.datatype.number({ min: 1, max: 5 })
    }
    carts.push(cart)
  }

  return knex("carts").insert(carts)
}
