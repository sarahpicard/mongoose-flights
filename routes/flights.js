import { Router } from 'express'
import * as flightsCtrl from '../controllers/flights.js'
const router = Router()

// GET localhost:3000/flights
router.get('/', flightsCtrl.index)

// GET localhost:3000/new
router.get('/new', flightsCtrl.new)

// GET localhost:3000/flights/:id/edit
router.get('/:id/edit', flightsCtrl.edit)

// POST localhost:3000
router.post('/', flightsCtrl.create)

// GET localhost:3000/:id
router.get('/:id', flightsCtrl.show)

// POST localhost:3000/flights/:id/tickets
router.post('/:id/tickets', flightsCtrl.createTicket)

// PUT localhost:3000/flights/:id
router.put('/:id', flightsCtrl.update)

// DELETE localhost:3000/flights/:id
router.delete('/:id', flightsCtrl.delete)


export {
  router
}
