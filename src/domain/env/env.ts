import { z } from "zod"
import "dotenv/config"

export const Env = z.object({
  PORT: z.coerce.number(),
  AUTH_SECRET: z.string(),
  DB_URL: z.string(),
})

export type Env = z.infer<typeof Env>

export default Env.parse(process.env)
