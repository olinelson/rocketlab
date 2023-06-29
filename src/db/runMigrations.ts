import { drizzle } from "drizzle-orm/postgres-js"
import { migrate } from "drizzle-orm/postgres-js/migrator"
import postgres from "postgres"
import env from "../domain/env/env.js"

const sql = postgres(env.DB_URL, { max: 1 })
const db = drizzle(sql)

export default () => migrate(db, { migrationsFolder: "migrations" })
