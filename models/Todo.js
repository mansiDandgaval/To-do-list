const mongoose = require("mongoose");

const TodoSchema = new mongoose.Schema({
  todo: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
});

module.exports = new mongoose.model("Todo", TodoSchema);
