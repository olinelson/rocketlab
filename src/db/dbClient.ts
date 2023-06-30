import { drizzle } from "drizzle-orm/postgres-js"
import postgres from "postgres"
import env from "../domain/env/env.js"

const { DB_URL } = env

const client = postgres(DB_URL)
export default drizzle(client)
