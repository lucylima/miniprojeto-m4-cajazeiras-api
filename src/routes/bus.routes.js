import { Router } from "express";
import { allBuslines } from "../controller/bus.controller.js";
import { aboutCajazeirasLinks } from "../controller/about.controller.js";

const busRouter = Router()

busRouter.get("/buslines", (req, res) => {
  const response = allBuslines();
  res.json({ response });
})

export { busRouter }