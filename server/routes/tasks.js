const express = require("express");
const router = express.Router();
const {
  getAllTasks,
  createTask,
  updateTask,
  getSingleTask,
  deleteTask,
} = require("../controllers/tasks");

router.route("/").get(getAllTasks).post(createTask);
router.route("/:id").patch(updateTask).get(getSingleTask).delete(deleteTask);

module.exports = router;
