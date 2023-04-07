const fakerApp= require("@faker-js/faker")
const faker = fakerApp.faker

module.exports.seed = async(knex) => {
  // Deletes ALL existing entries
  await knex("products").del()
  await knex("materials").del()
  await knex("categories").del()

  // Inserts seed entries
  const materials = []
  for (let i = 0; i < 10; i++) {
    materials.push({
      name: faker.commerce.productMaterial(),
      color: faker.commerce.color()
    })
  }
  await knex("materials").insert(materials)

  const categories = []
  for (let i = 0; i < 5; i++) {
    categories.push({
      name: faker.commerce.department(),
      description: faker.lorem.sentence()
    })
  }
  await knex("categories").insert(categories)

  const products = []
  for (let i = 0; i < 20; i++) {
    products.push({
      name: faker.commerce.productName(),
      description: faker.commerce.productDescription(),
      price: faker.commerce.price(),
      quantity: faker.datatype.number(100),
      materialId: faker.datatype.number({ min: 1, max: 10 }),
      categoryId: faker.datatype.number({ min: 1, max: 5 })
    })
  }
  await knex("products").insert(products)
}
