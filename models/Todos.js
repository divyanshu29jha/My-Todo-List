const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TodosSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    dueDate: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  }
);

TodosSchema.index({ title: 1 }, { unique: true });

let Todos = mongoose.model("todos", TodosSchema);
module.exports = Todos;
