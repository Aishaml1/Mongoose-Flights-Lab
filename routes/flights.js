import { Router } from 'express'
import * as flightsCtrl from "../controllers/flights.js"
const router = Router()


// localhost:3000/flights
router.get("/", flightsCtrl.index)
// localhost:3000/flights/new
router.get('/new', flightsCtrl.new)
// localhost:3000/flights/id
router.get('/:id',flightsCtrl.show)

router.post('/', flightsCtrl.create)
router.post("/:id/tickets", flightsCtrl.addTicket)
router.post('/:id/destinations', flightsCtrl.addToDestination)


router.delete("/:id", flightsCtrl.delete)


export{
    router
}