const { resolve } = require("node:path")
const { config } = require("dotenv")

config()

const knexfile = {
  client: process.env.DB_CLIENT,
  connection: {
    port: parseInt(process.env.DB_PORT),
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
  },
  migrations: {
    directory: resolve("./src/api/db/migrations"),
    stub: resolve("./src/api/db/migration.stub"),
  },
  seeds: {
    directory: resolve("./src/api/db/seeds"),
  },
}

module.exports = knexfile
