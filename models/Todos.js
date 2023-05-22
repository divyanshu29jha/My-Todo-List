const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TodosSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  dueDate: {
    type: Date,
    default: Date.now,
  },
});

module.exports = Todos = mongoose.model("todos", TodosSchema);
