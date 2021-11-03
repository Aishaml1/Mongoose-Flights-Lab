import { Router } from 'express'
import * as destinationCtrl from "../controllers/destinations.js"

const router = Router()

// localhost:3009/destinations/new - GET
router.get("/new", destinationCtrl.new)
// localhost:3009
router.post("/", destinationCtrl.create)


export{
    router
}