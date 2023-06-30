import { z } from "zod"
import { Customer, customers } from "../db/schema.js"
import dbClient from "../db/dbClient.js"
import { eq, lt } from "drizzle-orm"
import { xYearsAgo } from "../utils/xYearsAgo.js"

export const ListCustomersFilters = z.object({
  state: z.string().optional(),
  minAge: z.coerce.number().optional(),
})

export type ListCustomersFilters = z.infer<typeof ListCustomersFilters>

export function listCustomers(
  filters: ListCustomersFilters
): Promise<Customer[]> {
  const { state, minAge } = filters
  const query = dbClient.select().from(customers)
  if (state) query.where(eq(customers.state, state))
  if (minAge) query.where(lt(customers.dob, xYearsAgo(minAge)))
  return query
}
