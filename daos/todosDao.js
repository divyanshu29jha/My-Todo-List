const mongoose = require("mongoose");
const ObjectId = mongoose.Types.ObjectId;
const Todos = require("../models/Todos");

class TodosDao {
  constructor() {}

  async getTodos(filter) {
    return new Promise((resolve, reject) => {
      if (typeof filter?._id === String) {
        filter._id = ObjectId(filter._id);
      }
      Todos.find(filter)
        .then((result) => resolve(result))
        .catch((err) => reject(err));
    });
  }
}

module.exports = TodosDao;
