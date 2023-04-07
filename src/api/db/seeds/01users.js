const fakerApp= require("@faker-js/faker")
const faker = fakerApp.faker
const bcrypt = require("bcrypt")

const saltRounds = 10

module.exports.seed = async(knex) => {
  await knex("users").del()
  const users = []
  for (let i = 0; i < 10; i++) {
    const password = faker.internet.password()
    const salt = await bcrypt.genSalt(saltRounds)
    const hashedPassword = await bcrypt.hash(password, salt)
    const user = {
      firstName: faker.name.firstName(),
      familyName: faker.name.lastName(),
      email: faker.internet.email(),
      password: hashedPassword,
      salt,
      numberPhone: faker.phone.number()
    }
    users.push(user)
  }

  
return knex("users").insert(users)
}
