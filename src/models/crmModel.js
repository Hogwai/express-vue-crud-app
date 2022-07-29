import mongoose from 'mongoose'

const Schema = mongoose.Schema

export const ContactSchema = new Schema({
  firstName: {
    type: String,
    required: 'Entrer un prénom'
  },
  lastName: {
    type: String,
    required: 'Entrer un nom de famille'
  },
  created_data: {
    type: Date,
    default: Date.now
  }
})
