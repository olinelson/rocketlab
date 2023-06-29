import jwt from "jsonwebtoken"
import env from "../domain/env/env.js"

const token = jwt.sign({ foo: "bar" }, env.AUTH_SECRET)

console.log(token)
