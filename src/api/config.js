import knexfile from "../../knexfile.js"
import dotenv from "dotenv"

dotenv.config()

const config = {
  port: 3000,
  db: knexfile
}

export default config
