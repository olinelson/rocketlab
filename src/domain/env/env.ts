import { z } from "zod"

export const Env = z.object({
  PORT: z.coerce.number(),
})
