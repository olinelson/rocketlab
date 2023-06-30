import { createSelectSchema } from "drizzle-zod"
import { z } from "zod"

import { pgTable, varchar, date, numeric } from "drizzle-orm/pg-core"

export const customers = pgTable("customers", {
  email: varchar("email"),
  firstname: varchar("firstname"),
  lastname: varchar("lastname"),
  dob: date("dob"),
  balance: numeric("balance"),
  state: varchar("state"),
  postcode: varchar("postcode"),
})

const Customer = createSelectSchema(customers)
export type Customer = z.infer<typeof Customer>
