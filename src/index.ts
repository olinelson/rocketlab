import express from "express"
import "dotenv/config"
import { Env } from "./domain/env/env.js"

const env = Env.parse(process.env)
const app = express()
const port = 3000

app.get("/ping", (_req, res) => res.send("pong"))

app.listen(port, () =>
  console.log(`⚡️[server]: Server is running on port ${env.PORT}`)
)
