import { resolve } from "node:path"
import dotenv from "dotenv"

dotenv.config()
const config = {
  db: {
    client: process.env.DB_CLIENT,
    connection: {
      port: parseInt(process.env.DB_PORT),
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
    },
    migrations: {
      directory: resolve("./src/db/migrations"),
      stub: resolve("./src/db/migration.stub"),
    },
    seeds: {
      directory: resolve("./src/db/seeds"),
    },
  },
}

export default config
