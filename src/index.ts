import express from "express"
import env from "./domain/env/env.js"
import authMiddleware from "./middleware/authMiddleware.js"
import runMigrations from "./db/runMigrations.js"
import {
  ListCustomersFilters,
  listCustomers,
} from "./services/customerService.js"

await runMigrations()

const { PORT } = env
const app = express()

app.get("/ping", (_req, res) => res.send("pong"))

app.get("/customers", authMiddleware, async (req, res, next) => {
  try {
    const filters = ListCustomersFilters.parse(req.query)
    const data = await listCustomers(filters)
    res.json(data)
  } catch (error) {
    next(error)
  }
})

app.listen(PORT, () => console.log(`⚡️ Server is running on port ${PORT}`))
