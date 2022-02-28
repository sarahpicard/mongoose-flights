import { Flight } from '../models/flight.js'

function index(req, res) {
  Flight.find({}, function (error, flights) {
    res.render('flights/index', {
      flights: flights,
      error: error,
      title: 'All Flights'
    })
  })
}

function newFlight(req, res) {
  res.render('flights/new')
}

function create(req, res) {
  const flight = new Flight(req.body)
  flight.save(function (err) {
    if (err) return res.redirect('/flights/new')
    res.redirect('/flights')
  })
}

function show(req, res) {
  Flight.findById(req.params.id, function(err, flight) {
    res.render('flights/show', {
      title: 'Flight Detail',
      flight, 
    })
  })
}

export {
  index,
  newFlight as new,
  create, 
  show
}