const { Schema, model } = require("mongoose");

const Goals = new Schema({
  done: { type: [Number]},
  received: { type: [Number] },
});

module.exports = model("Goals", Goals);