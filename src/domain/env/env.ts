import { z } from "zod"
import "dotenv/config"

export const Env = z.object({
  PORT: z.coerce.number(),
  AUTH_SECRET: z.string(),
})

export default Env.parse(process.env)
