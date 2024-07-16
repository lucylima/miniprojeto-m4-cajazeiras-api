import { Router } from "express"
import { aboutCajazeiras, aboutCajazeirasLinks } from "../controller/about.controller.js"

const aboutRouter = Router()

aboutRouter.get("/about", (req, res) => {
  const response = aboutCajazeiras()
  res.send({ response})
})

aboutRouter.get("/about/links", (req, res) => {
  const response = aboutCajazeirasLinks();
  res.json({ response });
})

export { aboutRouter }