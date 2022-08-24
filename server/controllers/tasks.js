const getAllTasks = (req, res) => {
  res.status(200).json({ data: "All tasks" });
};

const getSingleTask = (req, res) => {
  res.status(200).json({ data: "A Single Task" });
};

const createTask = (req, res) => {
  res.status(200).json({ data: req.body });
};

const updateTask = (req, res) => {
  res.status(200).json({ message: "task Updated" });
};

const deleteTask = (req, res) => {
  res.status(200).json({ message: "task deleted" });
};

module.exports = {
  getAllTasks,
  createTask,
  updateTask,
  getSingleTask,
  deleteTask,
};
