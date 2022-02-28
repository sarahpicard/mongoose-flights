import { Router } from 'express'
import * as flightsCtrl from '../controllers/flights.js'
const router = Router()

// GET localhost:3000/flights
router.get('/', flightsCtrl.index)

// GET localhost:3000/new
router.get('/new', flightsCtrl.new)

// GET localhost:3000/:id
router.get('/:id', flightsCtrl.show)

// POST localhost:3000
router.post('/', flightsCtrl.create)

export {
  router
}
