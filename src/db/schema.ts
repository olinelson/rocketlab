import { pgTable, pgEnum, pgSchema, AnyPgColumn, varchar } from "drizzle-orm/pg-core"


import { sql } from "drizzle-orm"

export const users = pgTable("users", {
	userName: varchar("user_name"),
	email: varchar("email"),
});