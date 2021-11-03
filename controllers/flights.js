import { Flight } from "../model/flight.js"
import { Destination } from "../model/destination.js"


function index(req, res) {
    Flight.find({}, function (error, flights) {
        res.render("flights/index", {
            flights,
            error,
            title: "All Flights"
        })
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

function newFlight(req, res) {
    res.render("flights/new", {
        title: "Add Flight",
    })
}


function show(req, res) {
    Flight.findById(req.params.id)
    .populate('destinations').exec(function(err, flight) {
       Destination.find({_id: {$nin: flight.destinations}}, function(err, destinations) {
          res.render('flights/show', {
            title: `${flight.airline} Airline Details`, 
             flight, destinations,
          })
       })
    })
 }





    function deleteFlight(req, res) {
        Flight.findByIdAndDelete(req.params.id, function(err, flight) {
          res.redirect("/flights")
        })
      }

function addTicket(req, res) {
    Flight.findById(req.params.id, function (error, flight) {
        flight.tickets.push(req.body)
        flight.save(function (err) {
            res.redirect(`/flights/${flight._id}`)
        })
    })
}

function addToDestination(req, res) {
    Flight.findById(req.params.id, function(err, flight) {
       flight.destinations.push(req.body.destinationId)
       flight.save(function(err) {
          res.redirect(`/flights/${flight._id}`)
       })
    })
 }

export {
    index,
    create,
    newFlight as new,
    show,
    deleteFlight as delete,
    addTicket,
    addToDestination

}
