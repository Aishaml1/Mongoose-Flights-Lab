import { Flight } from "../model/flight.js"


function index(req, res) {
    Flight.find({}, function (error, flights) {
        res.render("flights/index", {
            flights,
            error,
            title: "All Flights"
        })
    })
}

function newFlight(req, res) {
    res.render("flights/new", {
        title: "Add Flight",
    })
}
function create(req, res) {
    const flight = new Flight(req.body)
    flight.save(function (err) {
        if (err) {
            console.log(err)
            return res.render("/flights/new")
        }
        res.redirect('/flights')
    })
}


export {
    index,
    newFlight as new,
    create
}
