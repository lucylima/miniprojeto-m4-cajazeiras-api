import express from 'express'
import { busRouter} from './routes/bus.routes.js'
import { neighborhoodRouter } from './routes/neighborhood.controller.js'

const app = express() 
const port = 1436

app.use(express.json())

app.use(busRouter)
app.use(neighborhoodRouter)

app.listen(port, () => {
  console.log("rodando na porta " + port)
})
