const TodosDao = require("../daos/todosDao");

class TodosManager {
  constructor() {}

  async getTodos({ todosId = null }) {
    try {
      const todosDao = new TodosDao();
      let filterQuery = todosId ? { _id: todosId } : {};
      return todosDao.getTodos(filterQuery);
    } catch (error) {
      console.error("TodosManager ==> getTodos ==> error ==> ", error);
      throw error;
    }
  }
}

module.exports = TodosManager;
