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
  res.render('flights/new', {
    title: 'Add a New Flight',
  })
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

function createTicket(req, res) {
  Flight.findById(req.params.id, function(err, flight) {
    flight.tickets.push(req.body)
    flight.save(function(err) {
      res.redirect(`/flights/${flight._id}`)
    })
  })
}

function update(req, res) {
  for (let key in req.body) {
    if (req.body[key] === '') delete req.body[key]
  }
  Flight.findByIdAndUpdate(req.params.id, req.body, function(err, flight) {
    res.redirect(`/flights/${flight._id}`)
  })
}

export {
  index,
  newFlight as new,
  create, 
  show, 
  createTicket,
  update,
}