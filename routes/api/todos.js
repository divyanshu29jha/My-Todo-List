const express = require("express");
const router = express.Router();

const Controller = require("../../controllers/todosController");
const controller = new Controller();

router.get("/:todosId?", controller.getTodos);

module.exports = router;
