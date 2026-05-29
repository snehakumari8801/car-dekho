const mongoose = require("mongoose");

const OwnerSchema = new mongoose.Schema({
  name: String,
  purchase_date: String,
  location: String,
});

const ServiceSchema = new mongoose.Schema({
  date: String,
  service_type: String,
  cost: Number,
});

const EngineSchema = new mongoose.Schema({
  type: String,
  cc: Number,
  torque: String,
  battery_capacity: String, // for EVs
});

const CarSchema = new mongoose.Schema({
  maker: { type: String, required: true },
  model: { type: String, required: true },

  fuel_type: String,
  transmission: String,

  engine: EngineSchema,

  features: [String],

  sunroof: Boolean,
  airbags: Number,

  price: Number,

  owners: [OwnerSchema],
  service_history: [ServiceSchema],
});

module.exports = mongoose.model("Car", CarSchema);