const Task = require("../models/Tasks");

const getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find({});
    res.status(200).json({ message: "success", data: tasks });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

const getSingleTask = async (req, res) => {
  try {
    const { id: taskID } = req.params;
    const task = await Task.findOne({ _id: taskID });
    if (!task) {
      return res.status(404).json({ message: `No task with id ${taskID}` });
    }
    res.status(200).json({ message: "success", data: task });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

const createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.status(201).json({ message: "success", data: task });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

const updateTask = (req, res) => {
  res.status(200).json({ message: "task Updated" });
};

const deleteTask = async (req, res) => {
  try {
    const { id: taskID } = req.params;
    const task = await Task.findOneAndDelete({ _id: taskID });
    if (!task) {
      return res.status(404).json({ message: `No task with id ${taskID}` });
    }
    res.status(200).json({ message: "success", data: task });
  } catch (error) {
    res.status(500).json({ message: error });
  }

  // res.status(200).json({ message: "task deleted" });
};

module.exports = {
  getAllTasks,
  createTask,
  updateTask,
  getSingleTask,
  deleteTask,
};
