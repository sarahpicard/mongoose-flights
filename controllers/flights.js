import { Flight } from '../models/flight.js'
import { Meal } from '../models/meal.js'

function index(req, res) {
  Flight.find({}).sort({departs: 'asc'}).exec((error, flights) => {
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
  Flight.findById(req.params.id).populate('meals').exec(function(err, flight) {
    Meal.find({_id: {$nin: flight.meals}}, function(err, meals) {
      res.render('flights/show', {
        title: 'Flight Detail',
        flight,
        meals,
      })
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

function createTicket(req, res) {
  Flight.findById(req.params.id, function(err, flight) {
    flight.tickets.push(req.body)
    flight.save(function(err) {
      res.redirect(`/flights/${flight._id}`)
    })
  })
}

function deleteFlight(req, res) {
  Flight.findByIdAndDelete(req.params.id, function(err, flight) {
    res.redirect('/flights')
  })
}

function edit(req, res) {
  Flight.findById(req.params.id, function(err, flight) {
    res.render('flights/edit', {
      flight,
      err,
      title: 'Edit Flight',
    })
  })
}

export {
  index,
  newFlight as new,
  create, 
  show, 
  createTicket,
  update,
  deleteFlight as delete,
  edit,
}