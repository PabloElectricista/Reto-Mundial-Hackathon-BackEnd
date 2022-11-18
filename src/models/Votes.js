const { Schema, model } = require("mongoose");

const Votes = new Schema({
  votes: { type: Number, required: true },
});

module.exports = model("Votes", Votes);
