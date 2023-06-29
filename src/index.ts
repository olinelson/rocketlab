import express from "express"
import env from "./domain/env/env.js"
import authMiddleware from "./middleware/authMiddleware.js"
import runMigrations from "./db/runMigrations.js"

await runMigrations()

const { PORT } = env
const app = express()

app.get("/ping", (_req, res) => res.send("pong"))
app.get("/private", authMiddleware, (_req, res) => res.send("pong"))

app.listen(PORT, () =>
  console.log(`⚡️[server]: Server is running on port ${PORT}`)
)
