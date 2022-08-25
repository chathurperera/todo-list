const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  task: {
    type: String,
    required: [true, "Please Provide a task"],
    trim: true,
    maxlength: [20, "Cannot exceed more than 20 characters"],
  },
  done: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model("Task", taskSchema);
