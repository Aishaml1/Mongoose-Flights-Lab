import { Router } from 'express'
const router = Router()

// localhost:3000
router.get('/', function(req, res) {
    res.render('index', { title: 'Flights' })
})


export{
    router
}