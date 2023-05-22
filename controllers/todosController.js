const TodosManager = require("../managers/todosManager");

class TodosController {
  constructor() {}

  async getTodos(req, res) {
    try {
      const todosManager = new TodosManager();
      let result = await todosManager.getTodos({
        todosId: req?.params?.todosId,
      });
      return res.status(200).json({
        status: 200,
        statusText: "ok",
        message: "",
        data: result,
        error: null,
      });
    } catch (error) {
      console.error("TodosController ==> getTodos ==> error ==> ", error);
      return res.status(200).json({
        status: 400,
        statusText: "bad request",
        message: "something went wrong",
        data: null,
        error: error.message,
      });
    }
  }
}
module.exports = TodosController;
