const { Schema, model } = require('mongoose');

const CountrieSchema = new Schema({
  name: { type: String, required: true, unique: true },
  votes: [Number],
});

module.exports = model("Countries", CountrieSchema);
