import { Router } from "express";
import { allNeighborhoods } from "../controller/neighborhood.controller.js";

const neighborhoodRouter = Router()

neighborhoodRouter.get("/neighborhoods", (req, res) => {
  const response = allNeighborhoods()
  res.json({ response })
})

export { neighborhoodRouter}