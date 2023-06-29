import { expressjwt } from "express-jwt"
import env from "../domain/env/env.js"

const { AUTH_SECRET } = env

export default expressjwt({
  secret: AUTH_SECRET,
  algorithms: ["HS256"],
})
