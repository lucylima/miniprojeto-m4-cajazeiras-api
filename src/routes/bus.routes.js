import { Router } from "express";
import { allBuslines } from "../controller/bus.controller";

const busRouter = Router()

busRouter.get("/buslines", (req, res) => {
  const respose = allBuslines();
  res.json({respose});
})

export { busRouter }