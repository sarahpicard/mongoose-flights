import mongoose from "mongoose";

const Schema = mongoose.Schema

const ticketSchema = new Schema ({
  seat: {type: String, match: /[A-F][1-9]\d?/},
  price: Number,
}, {
  timestamps: true
})

const flightSchema = new Schema ({
  airline: String, 
  airport: String, 
  flightNo: Number, 
  departs: Date, 
  tickets: [ticketSchema]
})

const Flight = mongoose.model('Flight', flightSchema)

export {
  Flight,
}